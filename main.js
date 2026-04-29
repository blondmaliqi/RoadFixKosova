// ========================================
// LOGJIKA KRYESORE - VERSIONI I PLOTË
// ========================================

let currentNews = [];
let currentFilter = 'all';
let currentSearch = '';
let refreshInterval = null;
let isDarkMode = false;

/**
 * Inicializon faqen
 */
async function init() {
    console.log('Initializing app...');
    
    // Inicializo hartën
    if (typeof window.mapFunctions !== 'undefined' && window.mapFunctions.initMap) {
        window.mapFunctions.initMap();
    } else {
        console.log('Map functions not loaded yet, waiting...');
        // Prit pak për map-in
        setTimeout(() => {
            if (typeof window.mapFunctions !== 'undefined' && window.mapFunctions.initMap) {
                window.mapFunctions.initMap();
            }
        }, 500);
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Ngarko lajmet
    await loadAndRenderNews();
    
    // Ngarko statistikat
    await updateStatistics();
    
    // Auto-refresh çdo 5 minuta
    refreshInterval = setInterval(() => {
        loadAndRenderNews(true);
    }, 300000);
    
    // Inicializo dark mode nga localStorage
    initDarkMode();
    
    console.log('App initialized successfully');
}

/**
 * Inicializon dark mode
 */
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
}

/**
 * Aktivizon dark mode
 */
function enableDarkMode() {
    isDarkMode = true;
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (darkModeBtn) {
        darkModeBtn.innerHTML = '<i class="fas fa-sun text-yellow-500"></i>';
    }
    
    // Ndrysho ngjyrat e hartës në dark mode
    if (typeof map !== 'undefined' && map) {
        map.eachLayer(layer => {
            if (layer instanceof L.TileLayer) {
                layer.setUrl('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
            }
        });
    }
}

/**
 * Çaktivizon dark mode
 */
function disableDarkMode() {
    isDarkMode = false;
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (darkModeBtn) {
        darkModeBtn.innerHTML = '<i class="fas fa-moon text-gray-600"></i>';
    }
    
    // Kthe hartën në light mode
    if (typeof map !== 'undefined' && map) {
        map.eachLayer(layer => {
            if (layer instanceof L.TileLayer) {
                layer.setUrl('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png');
            }
        });
    }
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

/**
 * Ngarko lajmet dhe përditëso pamjen
 */
async function loadAndRenderNews(silent = false) {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;
    
    if (!silent) {
        newsContainer.innerHTML = `
            <div class="col-span-full">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${[...Array(6)].map(() => `
                        <div class="skeleton rounded-xl" style="height: 280px;"></div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    try {
        const news = await window.supabaseClient.fetchNews({
            category: currentFilter,
            search: currentSearch
        });
        
        currentNews = news;
        
        const newsCountSpan = document.getElementById('newsCount');
        if (newsCountSpan) {
            newsCountSpan.innerHTML = `${news.length} lajme`;
        }
        
        renderNewsList(news);
        
        if (typeof window.mapFunctions !== 'undefined' && window.mapFunctions.updateMap) {
            window.mapFunctions.updateMap(news);
        }
        
        await updateStatistics();
    } catch (error) {
        console.error('Error loading news:', error);
        newsContainer.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i class="fas fa-exclamation-triangle text-6xl text-red-300 mb-4"></i>
                <p class="text-gray-500">Gabim gjatë ngarkimit të lajmeve.</p>
                <button onclick="location.reload()" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Rifresko</button>
            </div>
        `;
    }
}

/**
 * Render lista e lajmeve
 */
function renderNewsList(news) {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    
    if (!news || news.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i class="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500 text-lg">Nuk ka lajme për këtë kategori.</p>
                <p class="text-gray-400 text-sm mt-2">Provoni të ndryshoni filtrat.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${news.map(newsItem => `
                <div class="news-card group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div class="relative">
                        <div class="absolute top-4 left-4 z-10">
                            <span class="category-badge category-${newsItem.category}">
                                ${getCategoryIcon(newsItem.category)} ${getCategoryLabel(newsItem.category)}
                            </span>
                        </div>
                        
                        <div class="p-5 pt-14">
                            <div class="flex items-center text-xs text-gray-400 dark:text-gray-500 mb-3">
                                <i class="far fa-calendar-alt mr-1"></i>
                                <span>${formatRelativeDate(newsItem.published_at)}</span>
                                ${newsItem.source_url ? `
                                    <span class="mx-2">•</span>
                                    <i class="fas fa-link mr-1"></i>
                                    <a href="${newsItem.source_url}" target="_blank" class="hover:text-blue-600 transition">Burimi</a>
                                ` : ''}
                            </div>
                            
                            <h3 class="font-bold text-lg text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                ${escapeHtml(newsItem.title)}
                            </h3>
                            
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                                ${escapeHtml(newsItem.summary)}
                            </p>
                            
                            ${newsItem.location_name ? `
                                <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                                    <i class="fas fa-map-marker-alt text-red-500 mr-1"></i>
                                    <span>${escapeHtml(newsItem.location_name)}</span>
                                </div>
                            ` : ''}
                            
                            <div class="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                                <button onclick="viewOnMap(${newsItem.location_lat || 'null'}, ${newsItem.location_lng || 'null'}, '${escapeHtml(newsItem.title)}')" 
                                        class="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 transition flex items-center space-x-1">
                                    <i class="fas fa-map-marked-alt"></i>
                                    <span>Shfaq në hartë</span>
                                </button>
                                
                                <button onclick="viewNewsDetail(${newsItem.id})" class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 transition flex items-center space-x-1">
                                    <span>Lexo më shumë</span>
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Përditëso statistikat
 */
async function updateStatistics() {
    try {
        const stats = await window.supabaseClient.fetchNewsStats();
        
        const statPunime = document.getElementById('statPunime');
        const statBllokime = document.getElementById('statBllokime');
        const statDevijime = document.getElementById('statDevijime');
        const statProjekte = document.getElementById('statProjekte');
        
        if (statPunime) statPunime.textContent = stats.punime;
        if (statBllokime) statBllokime.textContent = stats.bllokime;
        if (statDevijime) statDevijime.textContent = stats.devijime;
        if (statProjekte) statProjekte.textContent = stats.projekte;
    } catch (error) {
        console.error('Error updating statistics:', error);
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Filter buttons - ZGJIDHJA KRYESORE E PROBLEMIT
    const filterButtons = document.querySelectorAll('.filter-btn');
    console.log('Found filter buttons:', filterButtons.length);
    
    filterButtons.forEach(btn => {
        // Remove existing listeners to avoid duplicates
        btn.removeEventListener('click', handleFilterClick);
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.removeEventListener('input', handleSearchInput);
        searchInput.addEventListener('input', handleSearchInput);
        
        function handleSearchInput(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(async () => {
                currentSearch = e.target.value;
                await loadAndRenderNews();
            }, 300);
        }
    }
    
    // Dark mode toggle
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (darkModeBtn) {
        darkModeBtn.removeEventListener('click', toggleDarkMode);
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }
    
    // Reset map view button
    const resetMapBtn = document.getElementById('resetMapView');
    if (resetMapBtn) {
        resetMapBtn.removeEventListener('click', resetMapView);
        resetMapBtn.addEventListener('click', resetMapView);
    }
}

/**
 * Handler për klikimin e filtrave
 */
async function handleFilterClick(e) {
    const btn = e.currentTarget;
    const filterValue = btn.dataset.filter;
    
    console.log('Filter clicked:', filterValue);
    
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.classList.add('bg-gray-100', 'text-gray-700');
    });
    
    btn.classList.add('active');
    btn.classList.remove('bg-gray-100', 'text-gray-700');
    
    currentFilter = filterValue;
    await loadAndRenderNews();
}

/**
 * Reset map view
 */
function resetMapView() {
    if (typeof window.mapFunctions !== 'undefined' && window.mapFunctions.resetMapView) {
        window.mapFunctions.resetMapView();
    } else if (typeof map !== 'undefined' && map) {
        map.setView([42.468, 21.469], 13);
    }
}

/**
 * Format relative date
 */
function formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Tani sapo';
    if (diffMins < 60) return `${diffMins} min më parë`;
    if (diffHours < 24) return `${diffHours} orë më parë`;
    if (diffDays === 1) return 'Dje';
    if (diffDays < 7) return `${diffDays} ditë më parë`;
    return date.toLocaleDateString('sq-AL');
}

/**
 * Get category icon
 */
function getCategoryIcon(category) {
    const icons = {
        'punime': '🛠️',
        'bllokime': '🚫',
        'devijime': '🔄',
        'projekte': '🏗️'
    };
    return icons[category] || '📰';
}

/**
 * Get category label
 */
function getCategoryLabel(category) {
    const labels = {
        'punime': 'Punime në rrugë',
        'bllokime': 'Bllokim trafiku',
        'devijime': 'Devijim',
        'projekte': 'Projekt'
    };
    return labels[category] || category;
}

/**
 * Escape HTML
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * View on map
 */
function viewOnMap(lat, lng, title) {
    if (lat && lng && typeof map !== 'undefined') {
        map.setView([lat, lng], 16);
        // Gjej markerin dhe hap popup
        if (typeof window.mapFunctions !== 'undefined') {
            // Do të shtojmë logjikën për të hapur popup
        }
    } else if (lat && lng) {
        alert(`Lokacioni: ${title}\nKoordinatat: ${lat}, ${lng}`);
    } else {
        alert('Ky lajm nuk ka koordinata të vendosura në hartë.');
    }
}

/**
 * View news detail
 */
function viewNewsDetail(newsId) {
    // Për momentin, shfaq alert me informacion
    const news = currentNews.find(n => n.id === newsId);
    if (news) {
        alert(`📰 ${news.title}\n\n${news.summary}\n\n📍 ${news.location_name || 'Lokacion i panjohur'}\n📅 ${new Date(news.published_at).toLocaleString('sq')}`);
    }
    // Në të ardhmen: window.location.href = `/lajmi.html?id=${newsId}`;
}

// Eksporto në window
window.mainFunctions = {
    loadAndRenderNews,
    updateStatistics,
    viewOnMap,
    viewNewsDetail,
    toggleDarkMode
};

// Inicializo kur DOM të jetë gati
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}