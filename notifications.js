// ========================================
// WEB PUSH NOTIFICATIONS
// ========================================

// Konfigurimi OneSignal (zëvendëso me të dhënat e tua)
const ONE_SIGNAL_APP_ID = 'your-onesignal-app-id';

let oneSignalInitialized = false;

/**
 * Inicializon OneSignal për njoftime
 */
async function setupOneSignal() {
    if (oneSignalInitialized) return;
    
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    
    OneSignalDeferred.push(function(OneSignal) {
        OneSignal.init({
            appId: ONE_SIGNAL_APP_ID,
            safari_web_id: '',
            notifyButton: {
                enable: false, // Ne nuk duam butonin default
            },
            allowLocalhostAsSecureOrigin: true,
            promptOptions: {
                slidedown: {
                    enabled: false, // Ne do ta thërrasim manualisht
                }
            }
        });
        
        // Regjistrohu për notifikata
        OneSignal.isPushNotificationsEnabled().then(function(isEnabled) {
            if (isEnabled) {
                console.log('Push notifications are enabled');
                updateNotificationButtonState(true);
            } else {
                console.log('Push notifications are disabled');
                updateNotificationButtonState(false);
            }
        });
        
        // Kur përdoruesi abonohet
        OneSignal.on('subscriptionChange', function(isSubscribed) {
            console.log('Subscription changed:', isSubscribed);
            updateNotificationButtonState(isSubscribed);
            
            if (isSubscribed) {
                // Ruaj subscription në Supabase
                OneSignal.getUserId().then(function(userId) {
                    if (userId) {
                        saveToSupabase(userId);
                    }
                });
            }
        });
    });
    
    oneSignalInitialized = true;
}

/**
 * Përditëson pamjen e butonit të abonimit
 * @param {boolean} isSubscribed 
 */
function updateNotificationButtonState(isSubscribed) {
    const btn = document.getElementById('subscribeBtn');
    if (!btn) return;
    
    if (isSubscribed) {
        btn.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>I abonuar</span>
        `;
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-green-600', 'hover:bg-green-700');
    } else {
        btn.innerHTML = `
            <i class="fas fa-bell"></i>
            <span>Njoftime në kohë reale</span>
        `;
        btn.classList.remove('bg-green-600', 'hover:bg-green-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
}

/**
 * Ruaj abonimin në Supabase
 * @param {string} userId 
 */
async function saveToSupabase(userId) {
    try {
        // Këtu mund të ruani më shumë detaje në supabase
        console.log('User subscribed with ID:', userId);
        
        // Nëse dëshironi të ruani në Supabase, shkyç kodin:
        /*
        const { data, error } = await supabase
            .from('onesignal_users')
            .upsert({ 
                user_id: userId, 
                subscribed_at: new Date(),
                location: 'Gjilan'
            });
        */
    } catch (error) {
        console.error('Error saving to Supabase:', error);
    }
}

/**
 * Kërko leje për njoftime (thirret kur klikohet butoni)
 */
async function requestNotificationPermission() {
    if (!window.OneSignal) {
        console.error('OneSignal not initialized');
        alert('Njoftimet nuk janë inicializuar. Ju lutemi rifreskoni faqen.');
        return;
    }
    
    try {
        const userChoice = await window.OneSignal.registerForPushNotifications();
        if (userChoice === 'granted') {
            console.log('User granted notification permission');
            showToast('success', 'Sukses! Tani do të merrni njoftime për lajmet e reja.');
        } else {
            console.log('User denied notification permission');
            showToast('info', 'Mund të aktivizoni njoftimet më vonë nga settings e browser-it.');
        }
    } catch (error) {
        console.error('Error requesting permission:', error);
        showToast('error', 'Kishte një problem. Ju lutemi provoni përsëri.');
    }
}

/**
 * Dërgo një njoftim testues (për debugging)
 * @param {string} message 
 */
async function sendTestNotification(message = 'Ky është një njoftim testues!') {
    if (!window.OneSignal) return;
    
    try {
        await window.OneSignal.sendNotification({
            contents: { en: message },
            headings: { en: '🔔 InfoTraffic Gjilan' },
            url: window.location.href
        });
        console.log('Test notification sent');
    } catch (error) {
        console.error('Error sending test notification:', error);
    }
}

/**
 * Shfaq toast notification
 * @param {string} type - success, error, info
 * @param {string} message 
 */
function showToast(type, message) {
    // Krijo elementin toast nëse nuk ekziston
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
    toast.style.cssText = `
        background: ${bgColor};
        color: white;
        padding: 12px 20px;
        border-radius: 12px;
        margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        animation: slideIn 0.3s ease;
        cursor: pointer;
    `;
    toast.textContent = message;
    
    toast.addEventListener('click', () => {
        toast.remove();
    });
    
    toastContainer.appendChild(toast);
    
    // Fshihet automatikisht pas 5 sekondash
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 5000);
}

// Shto animacionin CSS për toast-in
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Eksporto funksionet
window.notificationFunctions = {
    setupOneSignal,
    requestNotificationPermission,
    sendTestNotification
};

// Auto-inicializo kur DOM-i të jetë gati
document.addEventListener('DOMContentLoaded', () => {
    setupOneSignal();
    
    // Shto event listener për butonin
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', requestNotificationPermission);
    }
});