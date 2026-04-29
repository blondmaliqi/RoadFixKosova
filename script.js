// ============ TË DHËNAT DEMO ============
const lajmet = [
    {
        id: 1,
        title: 'Bllokim në rrugën e Separeve – devijim për në rrugën e Dardanisë',
        summary: 'Rruga e Separeve është e bllokuar për trafik nga kryqëzimi me rrugën e Dardanisë deri te shkolla fillore për shkak të zëvendësimit të gypave të ujësjellësit. Devijimi bëhet nëpërmjet rrugës së Dardanisë.',
        content: 'Rruga e Separeve do të jetë e bllokuar për trafik duke filluar nga dita e martë, 28 prill 2026. Bllokimi është i nevojshëm për shkak të zëvendësimit të gypave të vjetër të ujësjellësit në këtë segment. Punimet pritet të zgjasin 7 ditë pune.',
        kategoria: 'bllokime',
        burimi: 'RTV Gjilan',
        data: '2026-04-28T09:30:00',
        lokacioni: { lat: 42.4631, lng: 21.4694 },
        besueshmeria: 'high',
        slug: 'bllokim-ne-rrugen-e-separeve'
    },
    {
        id: 2,
        title: 'Punime në rrugën "Adem Jashari" – segmenti pranë stacionit të autobusëve',
        summary: 'Nisën punimet në rrugën Adem Jashari për zgjerimin e trotuarit dhe vendosjen e ndriçimit të ri. Trafiku do të zhvillohet vetëm në një korsi.',
        content: 'Komuna e Gjilanit ka njoftuar fillimin e punimeve në rrugën Adem Jashari. Projekti përfshin zgjerimin e trotuarit dhe vendosjen e ndriçimit të ri LED.',
        kategoria: 'punime',
        burimi: 'Komuna e Gjilanit',
        data: '2026-04-28T08:00:00',
        lokacioni: { lat: 42.4642, lng: 21.4685 },
        besueshmeria: 'high',
        slug: 'punime-ne-rrugen-adem-jashari'
    },
    {
        id: 3,
        title: 'Devijim në rrugën e Dardanisë për shkak të ndërtimit të ujësjellësit të ri',
        summary: 'Trafiku do të devijohet nëpërmjet rrugës së Separeve dhe rrugës "Idriz Seferi". Punimet pritet të zgjasin 3 javë.',
        content: 'Drejtoria për Shërbime Publike njofton se rruga e Dardanisë do të ketë devijim trafiku për shkak të ndërtimit të ujësjellësit të ri.',
        kategoria: 'devijime',
        burimi: 'Drejtoria për Shërbime Publike',
        data: '2026-04-27T14:00:00',
        lokacioni: { lat: 42.4620, lng: 21.4710 },
        besueshmeria: 'medium',
        slug: 'devijim-ne-rrugen-e-dardanise'
    },
    {
        id: 4,
        title: 'Projekt i ri: Ndërtimi i rrethrrotullimit te kryqëzimi i spitalit',
        summary: 'Komuna e Gjilanit ka miratuar projektin për ndërtimin e një rrethrrotullimi te kryqëzimi i spitalit rajonal për të lehtësuar trafikun.',
        content: 'Projekti i ri i Komunës së Gjilanit parasheh ndërtimin e një rrethrrotullimi te kryqëzimi i spitalit rajonal. Investimi kap vlerën e 450,000 eurove.',
        kategoria: 'projekte',
        burimi: 'KosovaPress',
        data: '2026-04-27T11:00:00',
        lokacioni: { lat: 42.4600, lng: 21.4750 },
        besueshmeria: 'high',
        slug: 'projekt-rrethrrotullimi-spitalit'
    },
    {
        id: 5,
        title: 'Bllokim i përkohshëm në rrugën "Rexhep Elmazi" për shkak të aksidentit',
        summary: 'Një aksident trafiku ka bllokuar përkohësisht rrugën Rexhep Elmazi. Policia është në vendngjarje. Rekomandohet përdorimi i rrugëve alternative.',
        content: 'Policia e Kosovës njofton se një aksident ka ndodhur në rrugën Rexhep Elmazi. Rruga është e bllokuar përkohësisht deri në pastrimin e vendit të ngjarjes.',
        kategoria: 'bllokime',
        burimi: 'Policia e Kosovës',
        data: '2026-04-28T10:45:00',
        lokacioni: { lat: 42.4650, lng: 21.4660 },
        besueshmeria: 'high',
        slug: 'bllokim-rexhep-elmazi-aksident'
    },
    {
        id: 6,
        title: 'Riasfaltim në lagjen "Dardania 2" – segmenti pranë xhamisë',
        summary: 'Fillojnë punimet për riasfaltimin e rrugëve në lagjen Dardania 2. Banorët njoftohen të lëvizin automjetet nga rruga.',
        content: 'Komuna e Gjilanit njofton banorët e lagjes Dardania 2 se do të fillojnë punimet për riasfaltim. Banorët duhet të lëvizin automjetet.',
        kategoria: 'punime',
        burimi: 'Komuna e Gjilanit',
        data: '2026-04-27T16:00:00',
        lokacioni: { lat: 42.4615, lng: 21.4730 },
        besueshmeria: 'medium',
        slug: 'riasfaltim-dardania-2'
    },
    {
        id: 7,
        title: 'Devijim i trafikut në rrugën "Zija Shemsiu" për kanalizime të reja',
        summary: 'Trafiku do të devijohet në rrugët përreth për shkak të punimeve në kanalizim. Punimet zgjasin 10 ditë.',
        content: 'Punimet në kanalizimin e ri në rrugën Zija Shemsiu do të shkaktojnë devijim të trafikut për 10 ditët e ardhshme.',
        kategoria: 'devijime',
        burimi: 'Express',
        data: '2026-04-26T09:00:00',
        lokacioni: { lat: 42.4645, lng: 21.4640 },
        besueshmeria: 'medium',
        slug: 'devijim-zija-shemsiu-kanalizime'
    },
    {
        id: 8,
        title: 'Projekt: Shtrimi i shtigjeve për biçikleta përgjatë rrugës së Dëshmorëve',
        summary: 'Projekti i ri për shtigje biçikletash do të realizohet përgjatë rrugës së Dëshmorëve, duke krijuar një korsi të dedikuar.',
        content: 'Komuna e Gjilanit ka prezantuar projektin për shtrimin e shtigjeve të biçikletave përgjatë rrugës së Dëshmorëve.',
        kategoria: 'projekte',
        burimi: 'Koha.net',
        data: '2026-04-25T13:00:00',
        lokacioni: { lat: 42.4628, lng: 21.4670 },
        besueshmeria: 'high',
        slug: 'projekt-shtigje-bicikletave'
    },
    {
        id: 9,
        title: 'Mbyllje e përkohshme në rrugën "Iliria" për ndërtim kanalizimesh',
        summary: 'Rruga Iliria do të jetë e mbyllur për 5 ditë për shkak të ndërtimit të kanalizimeve të reja. Devijimi bëhet nëpërmjet rrugës së Dëshmorëve.',
        content: 'Drejtoria për Shërbime Publike njofton mbylljen e rrugës Iliria për ndërtim kanalizimesh.',
        kategoria: 'bllokime',
        burimi: 'Drejtoria për Shërbime Publike',
        data: '2026-04-28T07:00:00',
        lokacioni: { lat: 42.4610, lng: 21.4700 },
        besueshmeria: 'high',
        slug: 'mbyllje-rruga-iliria-kanalizime'
    },
    {
        id: 10,
        title: 'Rikonstruktim i sheshit "Zahir Pajaziti" – ndikim në trafik',
        summary: 'Projekti i rikonstruktimit të sheshit do të shkaktojë ndryshime në qarkullimin e trafikut për 2 muaj.',
        content: 'Komuna e Gjilanit ka filluar projektin e rikonstruktimit të sheshit Zahir Pajaziti. Trafiku do të riorganizohet.',
        kategoria: 'projekte',
        burimi: 'KosovaPress',
        data: '2026-04-26T10:00:00',
        lokacioni: { lat: 42.4655, lng: 21.4720 },
        besueshmeria: 'medium',
        slug: 'rikonstruktim-sheshi-zahir-pajaziti'
    }
];

// ============ GJENDJA E APLIKACIONIT ============
let currentPage = 'home';
let currentKategoria = 'te-gjitha';
let currentSort = 'te-fundit';

// Harta
let mapInstance = null;
let fullscreenMapInstance = null;
let sidebarMapInstance = null;
let currentMapLayer = 'street';
let mapMarkers = [];
let fullscreenMapMarkers = [];
let sidebarMapMarkers = [];
let markerClusterGroup = null;
let sidebarMarkerCluster = null;
let userLocationMarker = null;

// Shtresat e hartës
const mapLayers = {
    street: null,
    satellite: null,
    terrain: null
};

// ============ FUNKSIONET E NAVIGIMIT ============
function navigateTo(page, param = null) {
    currentPage = page;
    currentKategoria = param || 'te-gjitha';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    if (page === 'home') navLinks[0].classList.add('active');
    if (page === 'kategoria') navLinks[1].classList.add('active');
    if (page === 'arkiva') navLinks[2].classList.add('active');
    if (page === 'rreth') navLinks[3].classList.add('active');
    
    if (page === 'mapView') {
        renderMapView();
    } else {
        renderPage();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('active');
}

function navigateToMapView() {
    openMapModal();
}

function renderPage() {
    const mainContent = document.getElementById('mainContent');
    
    switch(currentPage) {
        case 'home':
            mainContent.innerHTML = renderHomePage();
            break;
        case 'kategoria':
            mainContent.innerHTML = renderKategoriaPage();
            break;
        case 'arkiva':
            mainContent.innerHTML = renderArkivaPage();
            break;
        case 'rreth':
            mainContent.innerHTML = renderRrethPage();
            break;
        default:
            mainContent.innerHTML = renderHomePage();
    }
    
    setTimeout(() => {
        initFilters();
        initSidebarMap();
        updateStats();
    }, 100);
}

// ============ RENDERIMI I FAQJEVE ============
function renderHomePage() {
    const filteredLajme = getFilteredLajme();
    
    return `
        <section class="hero">
            <div class="hero-pattern"></div>
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <div class="live-badge">
                            <span class="pulse-dot"></span>
                            Përditësuar çdo 15 minuta
                        </div>
                        <h1 class="hero-title">
                            Rrugë në punë
                            <span class="highlight">Gjilan</span>
                        </h1>
                        <p class="hero-description">
                            Lajme të trafikut në kohë reale. Punime, bllokime, devijime 
                            dhe projekte infrastrukturore – të gjitha në një vend.
                        </p>
                        <div class="hero-buttons">
                            <a href="#" onclick="navigateTo('kategoria', 'bllokime')" class="btn btn-warning btn-lg">
                                <i class="fas fa-map-marker-alt"></i> Shiko bllokimet aktive
                            </a>
                            <button onclick="openMapModal()" class="btn btn-outline btn-lg">
                                <i class="fas fa-map"></i> Hap hartën interaktive
                            </button>
                        </div>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <span class="stat-number" id="statActive">${countByKategoria('bllokime')}</span>
                                <span class="stat-label">Bllokime aktive</span>
                            </div>
                            <div class="stat-divider"></div>
                            <div class="stat-item">
                                <span class="stat-number">${lajmet.length}</span>
                                <span class="stat-label">Lajme gjithsej</span>
                            </div>
                            <div class="stat-divider"></div>
                            <div class="stat-item">
                                <span class="stat-number" id="statSubscribers">0</span>
                                <span class="stat-label">Të abonuar</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-illustration">
                        <svg class="hero-img" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" fill="#1e3a8a" rx="16"/>
                            <circle cx="200" cy="150" r="80" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.5"/>
                            <circle cx="200" cy="150" r="50" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
                            <circle cx="200" cy="150" r="5" fill="white"/>
                            <circle cx="120" cy="120" r="4" fill="#ef4444"/>
                            <circle cx="250" cy="180" r="4" fill="#f59e0b"/>
                            <circle cx="280" cy="100" r="4" fill="#10b981"/>
                            <text x="200" y="270" text-anchor="middle" fill="rgba(255,255,255,0.6)" font-size="12">Harta e Gjilanit – Pikat e trafikut</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="filters-section" id="filtrat">
            <div class="container">
                <div class="filters-wrapper">
                    <div class="filters-scroll">
                        <button class="filter-btn ${currentKategoria === 'te-gjitha' ? 'active' : ''}" data-kategoria="te-gjitha">
                            <i class="fas fa-list"></i> Të gjitha
                        </button>
                        <button class="filter-btn ${currentKategoria === 'punime' ? 'active' : ''}" data-kategoria="punime">
                            <i class="fas fa-tools"></i> Punime në rrugë
                        </button>
                        <button class="filter-btn ${currentKategoria === 'bllokime' ? 'active' : ''}" data-kategoria="bllokime">
                            <i class="fas fa-ban"></i> Bllokime trafiku
                        </button>
                        <button class="filter-btn ${currentKategoria === 'devijime' ? 'active' : ''}" data-kategoria="devijime">
                            <i class="fas fa-directions"></i> Devijime
                        </button>
                        <button class="filter-btn ${currentKategoria === 'projekte' ? 'active' : ''}" data-kategoria="projekte">
                            <i class="fas fa-hard-hat"></i> Projekte infrastrukturore
                        </button>
                    </div>
                    <div class="sort-wrapper">
                        <select class="sort-select" id="sortSelect">
                            <option value="te-fundit">Më të fundit</option>
                            <option value="te-vjetra">Më të vjetrat</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        
        <main class="main-content">
            <div class="container">
                <div class="content-grid">
                    <div class="news-feed">
                        <div class="section-header">
                            <h2 class="section-title">Lajmet më të fundit</h2>
                            <span class="results-count">${filteredLajme.length} rezultate</span>
                        </div>
                        <div class="news-grid">
                            ${filteredLajme.slice(0, 8).map(lajm => renderNewsCard(lajm)).join('')}
                        </div>
                        ${filteredLajme.length === 0 ? renderNoResults() : ''}
                    </div>
                    
                    <aside class="sidebar">
                        <div class="map-widget" id="harta">
                            <div class="widget-header">
                                <h3><i class="fas fa-map-marked-alt"></i> Harta e trafikut</h3>
                                <div class="map-widget-toolbar">
                                    <button class="map-type-btn active" data-type="street" onclick="switchSidebarMapType('street')">
                                        <i class="fas fa-road"></i> Hartë
                                    </button>
                                    <button class="map-type-btn" data-type="satellite" onclick="switchSidebarMapType('satellite')">
                                        <i class="fas fa-satellite"></i> Satelit
                                    </button>
                                </div>
                            </div>
                            <div id="sidebarMap" class="map-container"></div>
                            <button class="btn btn-sm" style="margin:12px;background:#1e40af;color:white;border:none;border-radius:6px;padding:8px 16px;cursor:pointer;width:calc(100% - 24px);" onclick="openMapModal()">
                                <i class="fas fa-expand"></i> Hap hartën e plotë
                            </button>
                        </div>
                        
                        <div class="report-widget">
                            <div class="widget-header">
                                <h3><i class="fas fa-exclamation-triangle"></i> Raporto pengesë</h3>
                            </div>
                            <form class="report-form" onsubmit="handleReport(event)">
                                <select class="form-select" required>
                                    <option value="">Zgjidh kategorinë</option>
                                    <option value="bllokim">Bllokim trafiku</option>
                                    <option value="aksident">Aksident</option>
                                    <option value="pusete">Pusetë e hapur</option>
                                    <option value="tjeter">Tjetër</option>
                                </select>
                                <input type="text" class="form-input" placeholder="Rruga / Lagjja" required>
                                <textarea class="form-textarea" placeholder="Përshkrimi i shkurtër..." rows="3"></textarea>
                                <button type="submit" class="btn btn-primary btn-block">
                                    <i class="fas fa-paper-plane"></i> Dërgo raportin
                                </button>
                            </form>
                        </div>
                        
                        <div class="subscribe-widget">
                            <div class="widget-header">
                                <h3><i class="fas fa-bell"></i> Njoftime në kohë reale</h3>
                            </div>
                            <p class="widget-description">
                                Merr njoftime në telefon sa herë që zbulohet një bllokim i ri.
                            </p>
                            <div class="subscribe-options">
                                <label class="checkbox-label">
                                    <input type="checkbox" checked> Bllokime trafiku
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" checked> Punime në rrugë
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox"> Devijime
                                </label>
                            </div>
                            <button class="btn btn-warning btn-block" onclick="openSubscribeModal()">
                                <i class="fas fa-bell"></i> Lejo njoftimet
                            </button>
                            <p class="privacy-note">
                                <i class="fas fa-shield-alt"></i> Respektojmë privatësinë tuaj.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
        
        <section class="newsletter-section">
            <div class="container">
                <div class="newsletter-card">
                    <div class="newsletter-icon">
                        <i class="fas fa-envelope-open-text"></i>
                    </div>
                    <h3>Merrni përmbledhjen javore</h3>
                    <p>Çdo të premte, një përmbledhje e lajmeve kryesore të trafikut në emailin tuaj.</p>
                    <form class="newsletter-form" onsubmit="handleNewsletter(event)">
                        <input type="email" placeholder="Email-i juaj" class="newsletter-input" required>
                        <button type="submit" class="btn btn-primary">Abonohu</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

function renderKategoriaPage() {
    const filteredLajme = getFilteredLajme();
    const titulli = {
        'punime': 'Punime në rrugë',
        'bllokime': 'Bllokime trafiku',
        'devijime': 'Devijime',
        'projekte': 'Projekte infrastrukturore'
    };
    
    return `
        <div class="breadcrumbs">
            <div class="container">
                <a href="#" onclick="navigateTo('home')">Ballina</a>
                <i class="fas fa-chevron-right"></i>
                <span class="current">${titulli[currentKategoria] || 'Kategoria'}</span>
            </div>
        </div>
        
        <section class="filters-section">
            <div class="container">
                <div class="filters-wrapper">
                    <div class="filters-scroll">
                        <button class="filter-btn" data-kategoria="te-gjitha" onclick="navigateTo('kategoria','te-gjitha')">
                            <i class="fas fa-list"></i> Të gjitha
                        </button>
                        <button class="filter-btn ${currentKategoria === 'punime' ? 'active' : ''}" data-kategoria="punime" onclick="navigateTo('kategoria','punime')">
                            <i class="fas fa-tools"></i> Punime në rrugë
                        </button>
                        <button class="filter-btn ${currentKategoria === 'bllokime' ? 'active' : ''}" data-kategoria="bllokime" onclick="navigateTo('kategoria','bllokime')">
                            <i class="fas fa-ban"></i> Bllokime trafiku
                        </button>
                        <button class="filter-btn ${currentKategoria === 'devijime' ? 'active' : ''}" data-kategoria="devijime" onclick="navigateTo('kategoria','devijime')">
                            <i class="fas fa-directions"></i> Devijime
                        </button>
                        <button class="filter-btn ${currentKategoria === 'projekte' ? 'active' : ''}" data-kategoria="projekte" onclick="navigateTo('kategoria','projekte')">
                            <i class="fas fa-hard-hat"></i> Projekte infrastrukturore
                        </button>
                    </div>
                    <div class="sort-wrapper">
                        <select class="sort-select" onchange="changeSort(this.value)">
                            <option value="te-fundit">Më të fundit</option>
                            <option value="te-vjetra">Më të vjetrat</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        
        <main class="main-content">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${titulli[currentKategoria] || 'Të gjitha lajmet'}</h2>
                    <span class="results-count">${filteredLajme.length} rezultate</span>
                </div>
                <div class="news-grid">
                    ${filteredLajme.map(lajm => renderNewsCard(lajm)).join('')}
                </div>
                ${filteredLajme.length === 0 ? renderNoResults() : ''}
            </div>
        </main>
    `;
}

function renderArkivaPage() {
    return `
        <div class="breadcrumbs">
            <div class="container">
                <a href="#" onclick="navigateTo('home')">Ballina</a>
                <i class="fas fa-chevron-right"></i>
                <span class="current">Arkiva e lajmeve</span>
            </div>
        </div>
        
        <main class="main-content">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Arkiva e lajmeve</h2>
                    <span class="results-count">Lajmet më të vjetra se 7 ditë</span>
                </div>
                <div class="news-list">
                    ${lajmet.map(lajm => `
                        <div class="news-list-item" onclick="openLajmiModal(${lajm.id})">
                            <span class="badge badge-${lajm.kategoria} news-list-badge">
                                ${getKategoriaIcon(lajm.kategoria)} ${getKategoriaEmri(lajm.kategoria)}
                            </span>
                            <div class="news-list-content">
                                <h3 class="news-list-title">${lajm.title}</h3>
                                <p class="news-list-meta">
                                    ${formatDate(lajm.data)} • ${lajm.burimi}
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </main>
    `;
}

function renderRrethPage() {
    return `
        <main class="about-page">
            <div class="container">
                <div class="about-content">
                    <h1>Rreth platformës</h1>
                    <p>
                        "Rrugë në punë Gjilan" është një platformë inovative që mbledh dhe 
                        përpunon informacione rreth trafikut dhe infrastrukturës në komunën e Gjilanit.
                    </p>
                    <p>
                        Duke përdorur inteligjencë artificiale, platforma monitoron vazhdimisht 
                        burime të ndryshme të informacionit – media online lokale, faqet zyrtare 
                        të komunës, njoftimet e policisë dhe rrjetet sociale – për t'ju sjellë 
                        lajmet më të fundit në kohë reale.
                    </p>
                    <h3>Burimet tona</h3>
                    <ul>
                        <li>Media online lokale (RTV Gjilan, KosovaPress, Express, Koha.net)</li>
                        <li>Faqet zyrtare të Komunës së Gjilanit</li>
                        <li>Drejtoria për Shërbime Publike</li>
                        <li>ARRSH (Autoriteti Rrugor i Kosovës)</li>
                        <li>Njoftimet e Policisë së Kosovës</li>
                        <li>Raportet e qytetarëve</li>
                    </ul>
                    <h3>Teknologjia</h3>
                    <p>
                        Platforma përdor harta interaktive me pamje satelitore, harte dhe terreni
                        për t'ju ofruar pamjen më të qartë të situatës së trafikut në Gjilan.
                    </p>
                </div>
            </div>
        </main>
    `;
}

function renderNewsCard(lajm) {
    return `
        <article class="news-card" onclick="openLajmiModal(${lajm.id})">
            <div class="card-header">
                <span class="badge badge-${lajm.kategoria}">
                    ${getKategoriaIcon(lajm.kategoria)} ${getKategoriaEmri(lajm.kategoria)}
                </span>
                <span class="card-date">${formatDate(lajm.data)}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${lajm.title}</h3>
                <p class="card-summary">${lajm.summary}</p>
            </div>
            <div class="card-footer">
                <span class="card-source">
                    <i class="fas fa-newspaper"></i> ${lajm.burimi}
                </span>
                <span class="card-confidence confidence-${lajm.besueshmeria}">
                    <i class="fas ${lajm.besueshmeria === 'high' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                    ${lajm.besueshmeria === 'high' ? 'Besueshmëri e lartë' : 'Mesatare'}
                </span>
            </div>
        </article>
    `;
}

function renderNoResults() {
    return `
        <div class="no-results">
            <div class="no-results-icon">
                <i class="fas fa-search"></i>
            </div>
            <h3>Nuk u gjet asnjë lajm</h3>
            <p>Provoni të ndryshoni filtrat ose kërkimin.</p>
        </div>
    `;
}

// ============ MAP VIEW ============
function renderMapView() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="map-view-page">
            <div class="map-view-header">
                <h2><i class="fas fa-map-marked-alt"></i> Harta interaktive e trafikut - Gjilan</h2>
                <div class="map-view-controls">
                    <div class="map-layer-controls">
                        <button class="map-layer-btn active" data-layer="street" onclick="switchFullscreenMapType('street')">
                            <i class="fas fa-road"></i> Hartë
                        </button>
                        <button class="map-layer-btn" data-layer="satellite" onclick="switchFullscreenMapType('satellite')">
                            <i class="fas fa-satellite"></i> Satelit
                        </button>
                        <button class="map-layer-btn" data-layer="terrain" onclick="switchFullscreenMapType('terrain')">
                            <i class="fas fa-mountain"></i> Terren
                        </button>
                    </div>
                    <div class="map-legend">
                        <span class="legend-item"><span class="legend-dot" style="background:#ef4444"></span> Bllokime</span>
                        <span class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span> Punime</span>
                        <span class="legend-item"><span class="legend-dot" style="background:#8b5cf6"></span> Devijime</span>
                        <span class="legend-item"><span class="legend-dot" style="background:#10b981"></span> Projekte</span>
                    </div>
                    <button class="map-locate-btn" onclick="locateMeOnMap()">
                        <i class="fas fa-location-crosshairs"></i> Lokacioni im
                    </button>
                </div>
            </div>
            <div class="map-view-map" id="fullscreenMapView"></div>
        </div>
    `;
    
    setTimeout(() => {
        initFullscreenMapView();
    }, 200);
}

// ============ FILTRAT ============
function getFilteredLajme() {
    let filtered = [...lajmet];
    
    if (currentKategoria !== 'te-gjitha') {
        filtered = filtered.filter(l => l.kategoria === currentKategoria);
    }
    
    if (currentSort === 'te-vjetra') {
        filtered.sort((a, b) => new Date(a.data) - new Date(b.data));
    } else {
        filtered.sort((a, b) => new Date(b.data) - new Date(a.data));
    }
    
    return filtered;
}

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const kategoria = this.dataset.kategoria;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentKategoria = kategoria;
            if (currentPage === 'home' || currentPage === 'kategoria') {
                renderPage();
            } else {
                navigateTo('kategoria', kategoria);
            }
        });
    });
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            renderPage();
        });
    }
}

function changeSort(value) {
    currentSort = value;
    renderPage();
}

// ============ KËRKIMI ============
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query === '') {
        navigateTo('home');
        return;
    }
    
    const results = lajmet.filter(lajm => 
        lajm.title.toLowerCase().includes(query) || 
        lajm.summary.toLowerCase().includes(query)
    );
    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="breadcrumbs">
            <div class="container">
                <a href="#" onclick="navigateTo('home')">Ballina</a>
                <i class="fas fa-chevron-right"></i>
                <span class="current">Kërko: "${query}"</span>
            </div>
        </div>
        
        <main class="main-content">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Rezultatet e kërkimit për "${query}"</h2>
                    <span class="results-count">${results.length} rezultate</span>
                </div>
                <div class="news-grid">
                    ${results.map(lajm => renderNewsCard(lajm)).join('')}
                </div>
                ${results.length === 0 ? renderNoResults() : ''}
            </div>
        </main>
    `;
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

// ============ INICIALIZIMI I HARTAVE ============

// Harta në sidebar
function initSidebarMap() {
    const mapElement = document.getElementById('sidebarMap');
    if (!mapElement) return;
    
    if (sidebarMapInstance) {
        sidebarMapInstance.remove();
        sidebarMapInstance = null;
    }
    
    sidebarMapInstance = L.map('sidebarMap', {
        center: [42.4631, 21.4694],
        zoom: 14,
        zoomControl: true
    });
    
    // Shto shtresat
    addTileLayers(sidebarMapInstance, 'sidebar');
    
    // Shto markerët
    addMarkersToMap(sidebarMapInstance, 'sidebar');
    
    // Shto legjendën në hartë
    addMiniLegend(sidebarMapInstance);
    
    setTimeout(() => sidebarMapInstance.invalidateSize(), 200);
}

function switchSidebarMapType(type) {
    if (!sidebarMapInstance) return;
    
    // Përditëso butonat
    const widget = document.getElementById('harta');
    if (widget) {
        widget.querySelectorAll('.map-type-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.type === type) btn.classList.add('active');
        });
    }
    
    // Ndërro shtresën
    switchMapLayer(sidebarMapInstance, type);
}

// Harta fullscreen në modal
function initFullscreenMap() {
    const mapElement = document.getElementById('fullscreenMap');
    if (!mapElement) return;
    
    if (fullscreenMapInstance) {
        fullscreenMapInstance.remove();
        fullscreenMapInstance = null;
    }
    
    fullscreenMapInstance = L.map('fullscreenMap', {
        center: [42.4631, 21.4694],
        zoom: 14,
        zoomControl: true,
        fullscreenControl: true
    });
    
    // Shto shtresat
    addTileLayers(fullscreenMapInstance, 'fullscreen');
    
    // Shto markerët
    addMarkersToMap(fullscreenMapInstance, 'fullscreen');
    
    // Shto legjendën
    addMiniLegend(fullscreenMapInstance);
    
    setTimeout(() => fullscreenMapInstance.invalidateSize(), 300);
}

// Harta në faqen e dedikuar
function initFullscreenMapView() {
    const mapElement = document.getElementById('fullscreenMapView');
    if (!mapElement) return;
    
    if (fullscreenMapInstance) {
        fullscreenMapInstance.remove();
        fullscreenMapInstance = null;
    }
    
    fullscreenMapInstance = L.map('fullscreenMapView', {
        center: [42.4631, 21.4694],
        zoom: 14,
        zoomControl: true,
        fullscreenControl: true
    });
    
    addTileLayers(fullscreenMapInstance, 'fullscreen');
    addMarkersToMap(fullscreenMapInstance, 'fullscreen');
    addMiniLegend(fullscreenMapInstance);
    
    setTimeout(() => fullscreenMapInstance.invalidateSize(), 300);
}

// Shto shtresat e hartës
function addTileLayers(mapInstance, mapId) {
    // Shtresa e hartës standarde
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    });
    
    // Shtresa satelitore (Esri World Imagery)
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 19
    });
    
    // Shtresa e terrenit (OpenTopoMap)
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors',
        maxZoom: 17
    });
    
    // Ruaj referencat
    if (mapId === 'fullscreen') {
        mapLayers.street = streetLayer;
        mapLayers.satellite = satelliteLayer;
        mapLayers.terrain = terrainLayer;
    }
    
    // Shto shtresën aktive
    streetLayer.addTo(mapInstance);
    
    // Ruaj shtresat në map instance
    mapInstance._streetLayer = streetLayer;
    mapInstance._satelliteLayer = satelliteLayer;
    mapInstance._terrainLayer = terrainLayer;
    mapInstance._currentLayerType = 'street';
}

function switchMapLayer(mapInstance, type) {
    if (!mapInstance) return;
    
    // Hiq shtresën aktuale
    const currentType = mapInstance._currentLayerType;
    if (currentType === 'street' && mapInstance._streetLayer) {
        mapInstance.removeLayer(mapInstance._streetLayer);
    } else if (currentType === 'satellite' && mapInstance._satelliteLayer) {
        mapInstance.removeLayer(mapInstance._satelliteLayer);
    } else if (currentType === 'terrain' && mapInstance._terrainLayer) {
        mapInstance.removeLayer(mapInstance._terrainLayer);
    }
    
    // Shto shtresën e re
    if (type === 'street' && mapInstance._streetLayer) {
        mapInstance._streetLayer.addTo(mapInstance);
    } else if (type === 'satellite' && mapInstance._satelliteLayer) {
        mapInstance._satelliteLayer.addTo(mapInstance);
    } else if (type === 'terrain' && mapInstance._terrainLayer) {
        mapInstance._terrainLayer.addTo(mapInstance);
    }
    
    mapInstance._currentLayerType = type;
}

function switchFullscreenMapType(type) {
    // Përditëso butonat në modal ose faqe
    document.querySelectorAll('.map-layer-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.layer === type) btn.classList.add('active');
    });
    
    if (fullscreenMapInstance) {
        switchMapLayer(fullscreenMapInstance, type);
    }
}

// Shto markerët në hartë
function addMarkersToMap(mapInstance, mapId) {
    if (!mapInstance) return;
    
    const markersArray = mapId === 'fullscreen' ? fullscreenMapMarkers : sidebarMapMarkers;
    
    // Pastro markerat e vjetër
    markersArray.forEach(marker => {
        if (marker._clusterGroup) {
            marker._clusterGroup.removeLayer(marker);
        } else {
            mapInstance.removeLayer(marker);
        }
    });
    markersArray.length = 0;
    
    // Krijimi i grupit për marker cluster
    let clusterGroup;
    if (typeof L.markerClusterGroup === 'function') {
        clusterGroup = L.markerClusterGroup({
            maxClusterRadius: 50,
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false
        });
    }
    
    // Ikonat e personalizuara
    const icons = {
        bllokime: L.divIcon({
            html: '<div style="background:#ef4444;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><i class="fas fa-ban" style="color:white;font-size:10px;"></i></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        }),
        punime: L.divIcon({
            html: '<div style="background:#f59e0b;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><i class="fas fa-tools" style="color:white;font-size:10px;"></i></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        }),
        devijime: L.divIcon({
            html: '<div style="background:#8b5cf6;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><i class="fas fa-directions" style="color:white;font-size:10px;"></i></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        }),
        projekte: L.divIcon({
            html: '<div style="background:#10b981;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><i class="fas fa-hard-hat" style="color:white;font-size:10px;"></i></div>',
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        })
    };
    
    const filteredLajme = getFilteredLajme();
    
    filteredLajme.forEach(lajm => {
        if (lajm.lokacioni) {
            const marker = L.marker([lajm.lokacioni.lat, lajm.lokacioni.lng], {
                icon: icons[lajm.kategoria] || icons.punime
            });
            
            const popupContent = `
                <strong>${lajm.title}</strong><br>
                <small>${lajm.summary.substring(0, 80)}...</small><br>
                <span style="font-size:11px;color:#666;">${lajm.burimi} • ${formatDateShort(lajm.data)}</span><br>
                <button onclick="event.stopPropagation();openLajmiModal(${lajm.id})" style="margin-top:6px;padding:4px 10px;background:#1e40af;color:white;border:none;border-radius:4px;cursor:pointer;font-size:11px;">Lexo më shumë</button>
            `;
            
            marker.bindPopup(popupContent);
            
            if (clusterGroup) {
                clusterGroup.addLayer(marker);
            } else {
                marker.addTo(mapInstance);
            }
            
            markersArray.push(marker);
        }
    });
    
    // Shto cluster group nëse ekziston
    if (clusterGroup) {
        clusterGroup.addTo(mapInstance);
        markersArray.forEach(m => m._clusterGroup = clusterGroup);
    }
}

// Shto mini legjendë në hartë
function addMiniLegend(mapInstance) {
    if (!mapInstance) return;
    
    // Kontrollo nëse ka tashmë një legjendë
    mapInstance.eachLayer(layer => {
        if (layer._legendDiv) {
            mapInstance.removeLayer(layer);
        }
    });
    
    const legend = L.control({ position: 'bottomleft' });
    
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'map-legend-mini');
        div.innerHTML = `
            <div class="legend-mini-item"><span class="legend-mini-dot" style="background:#ef4444;"></span> Bllokime</div>
            <div class="legend-mini-item"><span class="legend-mini-dot" style="background:#f59e0b;"></span> Punime</div>
            <div class="legend-mini-item"><span class="legend-mini-dot" style="background:#8b5cf6;"></span> Devijime</div>
            <div class="legend-mini-item"><span class="legend-mini-dot" style="background:#10b981;"></span> Projekte</div>
        `;
        div._legendDiv = true;
        return div;
    };
    
    legend.addTo(mapInstance);
}

// ============ MODALI I HARTËS ============
function openMapModal() {
    document.getElementById('mapModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        initFullscreenMap();
    }, 300);
}

function closeMapModal() {
    document.getElementById('mapModal').classList.remove('active');
    document.body.style.overflow = '';
    
    if (fullscreenMapInstance) {
        fullscreenMapInstance.remove();
        fullscreenMapInstance = null;
    }
}

// ============ LOKACIONI ============
function locateMeOnMap() {
    const mapToUse = fullscreenMapInstance || sidebarMapInstance;
    
    if (!mapToUse) {
        showToast('Harta nuk është e disponueshme.', 'error');
        return;
    }
    
    if (!navigator.geolocation) {
        showToast('Shfletuesi juaj nuk e mbështet gjeolokacionin.', 'error');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            
            mapToUse.setView([latitude, longitude], 16);
            
            // Hiq markerin e vjetër
            if (userLocationMarker) {
                mapToUse.removeLayer(userLocationMarker);
            }
            
            // Shto marker të ri me ikonë të veçantë
            userLocationMarker = L.marker([latitude, longitude], {
                icon: L.divIcon({
                    html: '<div style="background:#3b82f6;width:18px;height:18px;border-radius:50%;border:3px solid white;box-shadow:0 0 15px rgba(59,130,246,0.6);"></div>',
                    iconSize: [18, 18],
                    iconAnchor: [9, 9]
                })
            }).addTo(mapToUse);
            
            userLocationMarker.bindPopup('📍 Jeni këtu').openPopup();
            
            // Përditëso info bar
            const infoText = document.getElementById('mapInfoText');
            if (infoText) {
                infoText.textContent = `📍 Lokacioni juaj: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
            }
            
            showToast('Lokacioni u gjet me sukses!', 'success');
        },
        (error) => {
            let message = 'Nuk mund të merret lokacioni.';
            if (error.code === 1) message = 'Lokacioni u bllokua. Ju lutemi lejoni qasjen.';
            if (error.code === 2) message = 'Lokacioni nuk është i disponueshëm.';
            if (error.code === 3) message = 'Koha e pritjes kaloi. Provoni përsëri.';
            showToast(message, 'error');
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// ============ MODALI I LAJMIT ============
function openLajmiModal(id) {
    const lajm = lajmet.find(l => l.id === id);
    if (!lajm) return;
    
    const modal = document.getElementById('lajmiModal');
    const content = document.getElementById('lajmiModalContent');
    
    content.innerHTML = `
        <header class="article-header">
            <span class="badge badge-${lajm.kategoria}">
                ${getKategoriaIcon(lajm.kategoria)} ${getKategoriaEmri(lajm.kategoria)}
            </span>
            <h1 class="article-title" style="font-size:24px;">${lajm.title}</h1>
            <div class="article-meta">
                <div class="meta-item">
                    <i class="fas fa-calendar-alt"></i> ${formatDate(lajm.data)}
                </div>
                <div class="meta-item">
                    <i class="fas fa-newspaper"></i> ${lajm.burimi}
                </div>
                <div class="meta-item confidence" style="color:${lajm.besueshmeria === 'high' ? '#059669' : '#d97706'}">
                    <i class="fas ${lajm.besueshmeria === 'high' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                    Besueshmëri ${lajm.besueshmeria === 'high' ? 'e lartë' : 'mesatare'}
                </div>
            </div>
        </header>
        
        ${lajm.lokacioni ? `
        <div class="article-map" id="modalMap" style="height:250px;"></div>
        ` : ''}
        
        <div class="article-summary-box">
            <div class="summary-header">
                <i class="fas fa-robot"></i> Përmbledhje automatike
            </div>
            <p class="article-summary">${lajm.summary}</p>
        </div>
        
        <div class="article-content">
            <p>${lajm.content}</p>
        </div>
        
        <div class="share-buttons">
            <span>Shpërndaje:</span>
            <button class="share-btn facebook"><i class="fab fa-facebook-f"></i></button>
            <button class="share-btn twitter"><i class="fab fa-x-twitter"></i></button>
            <button class="share-btn telegram"><i class="fab fa-telegram"></i></button>
            <button class="share-btn copy-link" onclick="copyLink(${lajm.id})">
                <i class="fas fa-link"></i> Kopjo linkun
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Inicializo hartën në modal
    if (lajm.lokacioni) {
        setTimeout(() => {
            const modalMap = L.map('modalMap', {
                zoomControl: false,
                scrollWheelZoom: false
            }).setView([lajm.lokacioni.lat, lajm.lokacioni.lng], 15);
            
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '&copy; Esri'
            }).addTo(modalMap);
            
            L.marker([lajm.lokacioni.lat, lajm.lokacioni.lng]).addTo(modalMap)
                .bindPopup(lajm.title);
        }, 300);
    }
}

function closeLajmiModal() {
    document.getElementById('lajmiModal').classList.remove('active');
    document.body.style.overflow = '';
}

function copyLink(id) {
    const url = window.location.origin + window.location.pathname + '?lajm=' + id;
    navigator.clipboard.writeText(url).then(() => {
        showToast('Linku u kopjua me sukses!', 'success');
    });
}

// ============ MODALI I ABONIMIT ============
function openSubscribeModal() {
    document.getElementById('subscribeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSubscribeModal() {
    document.getElementById('subscribeModal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleSubscribe(event) {
    event.preventDefault();
    const email = document.getElementById('subscribeEmail').value;
    
    if (email) {
        showToast('U abonuat me sukses! Do të merrni njoftime në email.', 'success');
        closeSubscribeModal();
        document.getElementById('subscribeEmail').value = '';
    }
}

// ============ FORM HANDLERS ============
function handleReport(event) {
    event.preventDefault();
    showToast('Raporti u dërgua me sukses! Do të shqyrtohet nga ekipi ynë.', 'success');
    event.target.reset();
}

function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    if (email) {
        showToast('U abonuat në newsletter-in javor!', 'success');
        event.target.reset();
    }
}

// ============ TOAST ============
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ============ COOKIES ============
function acceptCookies() {
    document.getElementById('cookieBanner').classList.remove('active');
    localStorage.setItem('cookiesAccepted', 'true');
}

function hideCookieBanner() {
    document.getElementById('cookieBanner').classList.remove('active');
}

// ============ NAVBAR FUNCTIONS ============
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('categoryDropdown');
    dropdown.classList.toggle('show');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// ============ HELPER FUNCTIONS ============
function getKategoriaIcon(kategoria) {
    const icons = {
        'punime': '<i class="fas fa-tools"></i>',
        'bllokime': '<i class="fas fa-ban"></i>',
        'devijime': '<i class="fas fa-directions"></i>',
        'projekte': '<i class="fas fa-hard-hat"></i>'
    };
    return icons[kategoria] || '';
}

function getKategoriaEmri(kategoria) {
    const emrat = {
        'punime': 'Punime',
        'bllokime': 'Bllokime',
        'devijime': 'Devijime',
        'projekte': 'Projekte'
    };
    return emrat[kategoria] || kategoria;
}

function countByKategoria(kategoria) {
    return lajmet.filter(l => l.kategoria === kategoria).length;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('sq-AL', options);
}

function formatDateShort(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sq-AL', { day: 'numeric', month: 'short' });
}

function updateStats() {
    const activeEl = document.getElementById('statActive');
    if (activeEl) {
        activeEl.textContent = countByKategoria('bllokime');
    }
}

// ============ PUSH NOTIFICATIONS ============
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showToast('Njoftimet u aktivizuan me sukses!', 'success');
            } else {
                showToast('Ju lutemi lejoni njoftimet në parametrat e shfletuesit.', 'error');
            }
        });
    } else {
        showToast('Shfletuesi juaj nuk mbështet njoftimet.', 'error');
    }
}

// ============ INICIALIZIMI ============
document.addEventListener('DOMContentLoaded', () => {
    // Kontrollo cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').classList.add('active');
    }
    
    // Kontrollo nëse ka lajm në URL
    const urlParams = new URLSearchParams(window.location.search);
    const lajmId = urlParams.get('lajm');
    
    if (lajmId) {
        setTimeout(() => openLajmiModal(parseInt(lajmId)), 500);
    }
    
    // Mbyll modalin me ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLajmiModal();
            closeSubscribeModal();
            closeMapModal();
        }
    });
    
    // Mbyll dropdown-in kur klikohet jashtë
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.getElementById('categoryDropdown').classList.remove('show');
        }
    });
    
    // Event listener për butonin e njoftimeve
    document.addEventListener('click', (e) => {
        if (e.target.closest('#enableNotifications')) {
            requestNotificationPermission();
        }
    });
    
    // Render initial page
    renderPage();
});
