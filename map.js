// ========================================
// KONFIGURIMI I HARTËS
// ========================================
const GJILAN_CENTER = [42.468, 21.469];
let map;
let markersLayer = null;
let currentMarkers = [];

/**
 * Inicializon hartën Leaflet
 */
function initMap() {
    map = L.map('map').setView(GJILAN_CENTER, 13);
    
    // Shtresa e hartës (OpenStreetMap me stil të bukur)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
        minZoom: 12
    }).addTo(map);
    
    // Shtresa për markerat
    markersLayer = L.layerGroup().addTo(map);
    
    // Shto kontrollin e shkallës
    L.control.scale({ metric: true, imperial: false }).addTo(map);
}

/**
 * Merr ngjyrën e markerit bazuar në kategorinë e lajmit
 * @param {string} category - Kategoria e lajmit
 * @returns {string} - Ngjyra në format HEX
 */
function getMarkerColor(category) {
    const colors = {
        'punime': '#eab308',   // Yellow
        'bllokime': '#ef4444', // Red
        'devijime': '#3b82f6', // Blue
        'projekte': '#22c55e'  // Green
    };
    return colors[category] || '#6b7280';
}

/**
 * Krijo ikonë custom për marker
 * @param {string} category - Kategoria e lajmit
 * @returns {L.DivIcon}
 */
function createCustomIcon(category) {
    const color = getMarkerColor(category);
    return L.divIcon({
        html: `<div style="background-color: ${color}; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: transform 0.2s;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
               </div>`,
        iconSize: [32, 32],
        popupAnchor: [0, -16],
        className: 'custom-marker'
    });
}

/**
 * Përditëson hartën me lajmet e reja
 * @param {Array} newsItems - Lista e lajmeve me koordinata
 */
function updateMap(newsItems) {
    if (!markersLayer) return;
    
    markersLayer.clearLayers();
    currentMarkers = [];
    
    // Filtro lajmet që kanë koordinata
    const newsWithLocation = newsItems.filter(news => 
        news.location_lat && news.location_lng && 
        !isNaN(news.location_lat) && !isNaN(news.location_lng)
    );
    
    if (newsWithLocation.length === 0) {
        // Shto një marker informativ në qendër nëse nuk ka të dhëna
        const infoIcon = L.divIcon({
            html: `<div style="background-color: #6b7280; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                   </div>`,
            iconSize: [32, 32],
            popupAnchor: [0, -16]
        });
        L.marker(GJILAN_CENTER, { icon: infoIcon })
            .addTo(markersLayer)
            .bindPopup('Aktiviteti i trafikut do të shfaqet këtu.<br>Së shpejti do të shtohen lokacione reale.');
        return;
    }
    
    newsWithLocation.forEach(news => {
        const customIcon = createCustomIcon(news.category);
        const marker = L.marker([news.location_lat, news.location_lng], { icon: customIcon })
            .addTo(markersLayer);
        
        // Krijo përmbajtjen e popup-it
        const popupContent = `
            <div style="max-width: 280px; font-family: 'Inter', sans-serif;">
                <div style="margin-bottom: 8px;">
                    <span style="background: ${getMarkerColor(news.category)}; color: white; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600;">
                        ${getCategoryLabel(news.category)}
                    </span>
                </div>
                <h4 style="font-weight: 700; margin-bottom: 6px; font-size: 14px; color: #1f2937;">${escapeHtml(news.title)}</h4>
                <p style="font-size: 12px; margin-bottom: 8px; color: #6b7280; line-height: 1.4;">${escapeHtml(news.summary.substring(0, 120))}${news.summary.length > 120 ? '...' : ''}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
                    <span style="color: #9ca3af;">📅 ${formatDate(news.published_at)}</span>
                    <a href="#" onclick="viewNewsDetail(${news.id}); return false;" style="color: #3b82f6; text-decoration: none; font-weight: 500;">Lexo më shumë →</a>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        currentMarkers.push(marker);
    });
    
    // Zoom për të parë të gjitha pikat nëse ka më shumë se një
    if (newsWithLocation.length > 1) {
        const bounds = L.latLngBounds(newsWithLocation.map(n => [n.location_lat, n.location_lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
    } else if (newsWithLocation.length === 1) {
        map.setView([newsWithLocation[0].location_lat, newsWithLocation[0].location_lng], 15);
    }
}

/**
 * Format datën në formatin shqip
 * @param {string} dateString - Data në format ISO
 * @returns {string}
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Tani';
    if (diffMins < 60) return `${diffMins} min më parë`;
    if (diffHours < 24) return `${diffHours} orë më parë`;
    if (diffDays === 1) return 'Dje';
    return date.toLocaleDateString('sq-AL');
}

/**
 * Escape HTML për të shmangur XSS
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Funksion për të shfaqur detajet e lajmit (mund të hapni modal ose faqe të re)
 * @param {number} newsId
 */
function viewNewsDetail(newsId) {
    // Për demo, hap modal me detajet
    // Mund ta zëvendësoni me navigim te /lajmi.html?id=...
    window.location.href = `/lajmi.html?id=${newsId}`;
}

/**
 * Rivendos pamjen e hartës në qendër të Gjilanit
 */
function resetMapView() {
    map.setView(GJILAN_CENTER, 13);
}

// Eksporto funksionet në window
window.mapFunctions = {
    initMap,
    updateMap,
    resetMapView
};