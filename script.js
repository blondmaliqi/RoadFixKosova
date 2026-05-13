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

    // Mbyll menunë mobile
    const mobileMenu = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.querySelector('.menu-overlay');

    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
        const closeBtn = mobileMenu.querySelector('.menu-close-btn');
        if (closeBtn) closeBtn.remove();
    }

    // Përditëso active state në nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    const allNavLinks = document.querySelectorAll('.nav-link');
    if (page === 'home' && allNavLinks[0]) allNavLinks[0].classList.add('active');
    if (page === 'kategoria' && allNavLinks[1]) allNavLinks[1].classList.add('active');
    if (page === 'arkiva' && allNavLinks[2]) allNavLinks[2].classList.add('active');
    if (page === 'rreth' && allNavLinks[3]) allNavLinks[3].classList.add('active');

    if (page === 'mapView') {
        renderMapView();
    } else {
        renderPage();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                            RoadFix
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
    <img src="roadfixgjilanlogo.png" alt="Harta e Gjilanit" class="hero-img">
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
    <i class="fas fa-tools"></i> Punime
</button>
<button class="filter-btn ${currentKategoria === 'bllokime' ? 'active' : ''}" data-kategoria="bllokime">
    <i class="fas fa-ban"></i> Bllokime
</button>
<button class="filter-btn ${currentKategoria === 'devijime' ? 'active' : ''}" data-kategoria="devijime">
    <i class="fas fa-directions"></i> Devijime
</button>
<button class="filter-btn ${currentKategoria === 'projekte' ? 'active' : ''}" data-kategoria="projekte">
    <i class="fas fa-hard-hat"></i> Projekte
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
    <form class="report-form" onsubmit="handleReport(event)" enctype="multipart/form-data">
        <select class="form-select" required>
            <option value="">Zgjidh kategorinë</option>
            <option value="bllokim">Bllokim trafiku</option>
            <option value="aksident">Aksident</option>
            <option value="pusete">Pusetë e hapur</option>
            <option value="tjeter">Tjetër</option>
        </select>
        <input type="text" class="form-input" placeholder="Rruga / Lagjja" required>
        <textarea class="form-textarea" placeholder="Përshkrimi i shkurtër..." rows="2"></textarea>

        <!-- Foto Upload -->
        <div class="photo-upload-widget" style="border:2px dashed var(--gray-300);border-radius:8px;padding:12px;text-align:center;cursor:pointer;transition:all 0.3s;" onclick="this.querySelector('input').click()" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--gray-300)'">
            <input type="file" accept="image/*" style="display:none;" onchange="previewPhoto(this)">
            <div class="photo-placeholder">
                <i class="fas fa-camera" style="font-size:24px;color:var(--gray-400);display:block;margin-bottom:6px;"></i>
                <span style="font-size:12px;color:var(--gray-500);">📷 Shto foto (opsionale)</span>
                <small style="display:block;color:var(--gray-400);font-size:10px;">PNG, JPG deri 5MB</small>
            </div>
            <div class="photo-preview" style="display:none;position:relative;">
                <img src="" alt="Preview" style="max-width:100%;max-height:100px;border-radius:6px;">
                <button type="button" onclick="event.stopPropagation();removePhoto(this)" style="position:absolute;top:-8px;right:-8px;background:var(--color-bllokime);color:white;border:none;width:22px;height:22px;border-radius:50%;cursor:pointer;font-size:12px;">✕</button>
            </div>
        </div>

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
                        "RoadFix Gjilan" është një platformë inovative që mbledh dhe
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
                        <li>Media online lokale (RTV Gjilan, KosovaPress, Express, Koha.net etj.)</li>
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
    // Shtresa e hartës standarde (OpenStreetMap)
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19
    });

    // Shtresa satelitore (Google Maps)
    const satelliteLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google Maps',
        maxZoom: 20
    });

    // Shtresa e terrenit (OpenTopoMap)
    const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenTopoMap',
        maxZoom: 17
    });

    // Shto shtresën default
    streetLayer.addTo(mapInstance);

    // RUAJ GJITHMONË në mapInstance (jo në mapLayers globale)
    mapInstance._streetLayer = streetLayer;
    mapInstance._satelliteLayer = satelliteLayer;
    mapInstance._terrainLayer = terrainLayer;
    mapInstance._currentLayerType = 'street';

    console.log('✅ Shtresat u ngarkuan për:', mapId);
    console.log('  - _streetLayer:', !!mapInstance._streetLayer);
    console.log('  - _satelliteLayer:', !!mapInstance._satelliteLayer);
    console.log('  - _terrainLayer:', !!mapInstance._terrainLayer);
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
    console.log('🔄 Duke ndërruar në:', type);
    console.log('  fullscreenMapInstance:', !!fullscreenMapInstance);

    // Përditëso butonat
    document.querySelectorAll('.map-layer-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.layer === type) btn.classList.add('active');
    });

    if (!fullscreenMapInstance) {
        console.log('❌ Harta fullscreen nuk ekziston!');
        return;
    }

    console.log('  _satelliteLayer:', !!fullscreenMapInstance._satelliteLayer);
    console.log('  _terrainLayer:', !!fullscreenMapInstance._terrainLayer);

    // Hiq të gjitha shtresat
    if (fullscreenMapInstance._streetLayer) {
        fullscreenMapInstance.removeLayer(fullscreenMapInstance._streetLayer);
    }
    if (fullscreenMapInstance._satelliteLayer) {
        fullscreenMapInstance.removeLayer(fullscreenMapInstance._satelliteLayer);
    }
    if (fullscreenMapInstance._terrainLayer) {
        fullscreenMapInstance.removeLayer(fullscreenMapInstance._terrainLayer);
    }

    // Shto shtresën e kërkuar
    if (type === 'street' && fullscreenMapInstance._streetLayer) {
        fullscreenMapInstance._streetLayer.addTo(fullscreenMapInstance);
        console.log('✅ Hartë e aktivizuar');
    } else if (type === 'satellite' && fullscreenMapInstance._satelliteLayer) {
        fullscreenMapInstance._satelliteLayer.addTo(fullscreenMapInstance);
        console.log('✅ Satelit i aktivizuar');
    } else if (type === 'terrain' && fullscreenMapInstance._terrainLayer) {
        fullscreenMapInstance._terrainLayer.addTo(fullscreenMapInstance);
        console.log('✅ Terren i aktivizuar');
    } else {
        console.log('❌ Shtresa nuk u gjet për:', type);
    }

    fullscreenMapInstance._currentLayerType = type;
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

    if (clusterGroup) {
        clusterGroup.addTo(mapInstance);
        markersArray.forEach(m => m._clusterGroup = clusterGroup);
    }
}

// Shto mini legjendë në hartë
function addMiniLegend(mapInstance) {
    if (!mapInstance) return;

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


// ============ LOKACIONI I PËRMIRËSUAR PËR APP ============
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

    showToast('Duke kërkuar lokacionin tuaj...', 'info');

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            mapToUse.setView([latitude, longitude], 16);

            if (userLocationMarker) {
                mapToUse.removeLayer(userLocationMarker);
            }

            userLocationMarker = L.marker([latitude, longitude], {
                icon: L.divIcon({
                    html: `
                        <div style="
                            position: relative;
                            width: 24px;
                            height: 24px;
                        ">
                            <div style="
                                position: absolute;
                                width: 24px;
                                height: 24px;
                                background: #3b82f6;
                                border-radius: 50%;
                                border: 3px solid white;
                                box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
                                left: 0;
                                top: 0;
                            "></div>
                            <div style="
                                position: absolute;
                                width: 10px;
                                height: 10px;
                                background: white;
                                border-radius: 50%;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                            "></div>
                        </div>
                    `,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                    popupAnchor: [0, -12]
                })
            }).addTo(mapToUse);

            userLocationMarker.bindPopup('📍 Jeni këtu').openPopup();

            const infoText = document.getElementById('mapInfoText');
            if (infoText) {
                infoText.textContent = `📍 Lokacioni juaj: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
            }

            showToast('✅ Lokacioni u gjet me sukses!', 'success');
        },
        (error) => {
            if (error.code === 1) {
                showToast('⚠️ Lokacioni u bllokua. Ju lutemi lejoni qasjen.', 'error');
            } else if (error.code === 2) {
                showToast('📍 Lokacioni nuk është i disponueshëm.', 'error');
            } else if (error.code === 3) {
                showToast('⏱️ Koha e pritjes kaloi. Provoni përsëri.', 'error');
            } else {
                showToast('❌ Ndodhi një gabim. Provoni përsëri.', 'error');
            }
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

            L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps'
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




// ============ TOGGLE DROPDOWN ============
function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// ============ HAMBURGER MENU MOBILE (PA GABIME) ============
let menuToggleLock = false;

function toggleMobileMenu() {
    // Parandalo ekzekutimin e dyfishtë
    if (menuToggleLock) return;
    menuToggleLock = true;

    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    if (!navLinks || !hamburger) {
        menuToggleLock = false;
        return;
    }

    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.setAttribute('onclick', 'toggleMobileMenu()');
        document.body.appendChild(overlay);
    }

    const isActive = navLinks.classList.contains('active');

    if (isActive) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        // Hiq butonin X
        const btn = navLinks.querySelector('.menu-close-btn');
        if (btn) btn.remove();
    } else {
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Shto butonin X VETËM nëse nuk ekziston
        if (!navLinks.querySelector('.menu-close-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'menu-close-btn';
            closeBtn.textContent = '✕';
            closeBtn.setAttribute('type', 'button');
            closeBtn.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                menuToggleLock = false;
                toggleMobileMenu();
            };
            navLinks.insertBefore(closeBtn, navLinks.firstChild);
        }
    }

    // Zhblloko pas 300ms
    setTimeout(function() {
        menuToggleLock = false;
    }, 300);
}



// ============ NAVBAR FUNCTIONS ============
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');

    searchBar.classList.toggle('active');

    if (searchBar.classList.contains('active')) {
        // Fokuso input-in
        setTimeout(() => searchInput.focus(), 100);

        // Shto butonin e mbylljes (X) nëse nuk ekziston
        if (!searchBar.querySelector('.search-close-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'search-close-btn';
            closeBtn.innerHTML = '✕';
            closeBtn.setAttribute('aria-label', 'Mbyll kërkimin');
            closeBtn.setAttribute('type', 'button');
            closeBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeSearch();
            };
            searchBar.querySelector('.search-form').appendChild(closeBtn);
        }
    } else {
        // Hiq butonin e mbylljes kur mbyllet search
        const closeBtn = searchBar.querySelector('.search-close-btn');
        if (closeBtn) closeBtn.remove();
    }
}

// Funksion i ri për mbylljen e search-it
function closeSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');

    // Mbylle search bar-in
    searchBar.classList.remove('active');

    // Hiq butonin e mbylljes
    const closeBtn = searchBar.querySelector('.search-close-btn');
    if (closeBtn) closeBtn.remove();

    // Pastro input-in
    searchInput.value = '';

    // Hiq fokusin
    searchInput.blur();
}

// Mbyll search-in kur shtypet ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const searchBar = document.getElementById('searchBar');
        if (searchBar && searchBar.classList.contains('active')) {
            closeSearch();
        }
    }
});

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
    // ✅ Kontrollo auth state
    checkSavedUser();

    

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


// ============ AUTH STATE ============
let currentUser = null;
let isGuest = false;
let guestInfo = null; // { name, surname, phone }

// Kontrollo nëse ka user të ruajtur në localStorage
function checkSavedUser() {
    const savedUser = localStorage.getItem('currentUser');
    const savedGuest = localStorage.getItem('guestInfo');

    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isGuest = false;
        guestInfo = null;
        updateUIForLoggedInUser();
    } else if (savedGuest) {
        guestInfo = JSON.parse(savedGuest);
        isGuest = true;
        currentUser = null;
        updateUIForGuest();
    } else {
        currentUser = null;
        isGuest = false;
        guestInfo = null;
        updateUIForLoggedOutUser();
    }
}

// ============ AUTH FUNCTIONS ============
function openLoginModal() {
    closeAllAuthModals();
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab('login');
}

function closeAllAuthModals() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('forgotPasswordModal').classList.remove('active');
    document.body.style.overflow = '';

    // Rikthe tabs
    const authTabs = document.querySelector('.auth-tabs');
    if (authTabs) {
        authTabs.style.display = 'flex';
    }

    // Rikthe scroll-in e modalin
    const modalContent = document.querySelector('#loginModal .modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

function switchAuthTab(tab) {
    // Hiq active nga të gjitha tabs dhe forms
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        document.querySelector('.auth-tab:nth-child(1)').classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else if (tab === 'signup') {
        document.querySelector('.auth-tab:nth-child(2)').classList.add('active');
        document.getElementById('signupForm').classList.add('active');
    } else if (tab === 'guest') {
        document.querySelector('.auth-tab:nth-child(3)').classList.add('active');
        document.getElementById('guestForm').classList.add('active');
    }
}

// ============ GUEST FUNKSIONI I RI ============
function handleGuestContinue(event) {
    event.preventDefault();

    const name = document.getElementById('guestName').value.trim();
    const surname = document.getElementById('guestSurname').value.trim();
    const phone = document.getElementById('guestPhone').value.trim();

    // Validimi
    if (!name || name.length < 2) {
        showToast('Ju lutemi shkruani emrin tuaj.', 'error');
        return;
    }

    if (!surname || surname.length < 2) {
        showToast('Ju lutemi shkruani mbiemrin tuaj.', 'error');
        return;
    }

    if (!phone || phone.length < 6) {
        showToast('Ju lutemi shkruani një numër telefoni të vlefshëm.', 'error');
        return;
    }

    // Ruaj të dhënat e guest
    guestInfo = {
        name: name,
        surname: surname,
        phone: phone
    };

    isGuest = true;
    currentUser = null;

    // Ruaj në localStorage
    localStorage.setItem('guestInfo', JSON.stringify(guestInfo));
    localStorage.removeItem('currentUser');

    // Mbyll modalin
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = '';

    // Pastro formën
    document.getElementById('guestName').value = '';
    document.getElementById('guestSurname').value = '';
    document.getElementById('guestPhone').value = '';

    // Përditëso UI
    updateUIForGuest();

    // Trego mesazh mirëseardhjeje
    showToast(`Mirë se vini, ${name}! Po shfletoni si Guest.`, 'success');

    // Trego faqen
    renderPage();
}

function loginAsGuest() {
    // Hap modalin direkt
    const modal = document.getElementById('loginModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Fshih tabs
    const authTabs = document.querySelector('.auth-tabs');
    if (authTabs) {
        authTabs.style.display = 'none';
    }

    // Fshih të gjitha format
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    // Trego VETËM formën e guest
    const guestForm = document.getElementById('guestForm');
    if (guestForm) {
        guestForm.classList.add('active');
    }

    // Rregullo modalin për mobile
    const modalContent = document.querySelector('#loginModal .modal-content');
    if (modalContent) {
        modalContent.style.maxHeight = '85vh';
        modalContent.style.overflowY = 'auto';
        modalContent.style.display = 'block';
        modalContent.scrollTop = 0;

        // Në mobile, bëje bottom sheet
        if (window.innerWidth <= 480) {
            modalContent.style.position = 'fixed';
            modalContent.style.bottom = '0';
            modalContent.style.left = '0';
            modalContent.style.right = '0';
            modalContent.style.top = 'auto';
            modalContent.style.margin = '0';
            modalContent.style.borderRadius = '16px 16px 0 0';
            modalContent.style.maxHeight = '80vh';
        }
    }
}

// ============ HANDLE LOGIN ============
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password.length >= 6) {
        currentUser = {
            email: email,
            name: email.split('@')[0],
            avatar: null
        };
        isGuest = false;
        guestInfo = null;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.removeItem('guestInfo');

        document.getElementById('loginModal').classList.remove('active');
        document.body.style.overflow = '';

        updateUIForLoggedInUser();
        showToast(`Mirë se vini, ${currentUser.name}!`, 'success');
        renderPage();
    } else {
        showToast('Email ose fjalëkalim i gabuar. Provoni përsëri.', 'error');
    }
}

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const surname = document.getElementById('signupSurname').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (password !== confirm) {
        showToast('Fjalëkalimet nuk përputhen.', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Fjalëkalimi duhet të ketë të paktën 6 karaktere.', 'error');
        return;
    }

    currentUser = {
        email: email,
        name: name,
        surname: surname,
        avatar: null
    };
    isGuest = false;
    guestInfo = null;

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.removeItem('guestInfo');

    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = '';

    updateUIForLoggedInUser();
    showToast(`Llogaria u krijua me sukses! Mirë se vini, ${name}!`, 'success');
    renderPage();
}

function handleLogout() {
    currentUser = null;
    isGuest = false;
    guestInfo = null;

    localStorage.removeItem('currentUser');
    localStorage.removeItem('guestInfo');

    updateUIForLoggedOutUser();
    document.getElementById('userDropdown').classList.remove('active');

    // Hiq guest badge nëse ekziston
    const guestBadge = document.querySelector('.guest-badge');
    if (guestBadge) guestBadge.remove();

    showToast('U çkyçët me sukses.', 'info');
    renderPage();
}


function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// ============ UI UPDATES ============
function updateUIForLoggedInUser() {
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userBtn').style.display = 'flex';

    const nameMini = document.getElementById('userNameMini');
    const avatarMini = document.getElementById('userAvatarMini');
    const userNameEl = document.getElementById('userName');
    const userEmailEl = document.getElementById('userEmail');
    const userAvatarEl = document.getElementById('userAvatar');

    if (currentUser) {
        const displayName = currentUser.name || currentUser.email.split('@')[0];
        nameMini.textContent = displayName;
        userNameEl.textContent = displayName + (currentUser.surname ? ' ' + currentUser.surname : '');
        userEmailEl.textContent = currentUser.email;

        const initials = displayName.substring(0, 2).toUpperCase();
        avatarMini.innerHTML = initials;
        userAvatarEl.innerHTML = initials;

        // Ndrysho ngjyrën e avatarit
        avatarMini.style.background = 'var(--primary)';
        userAvatarEl.style.background = 'var(--primary)';
    }

    // Hiq guest badge
    const guestBadge = document.querySelector('.guest-badge');
    if (guestBadge) guestBadge.remove();
}

function updateUIForLoggedOutUser() {
    document.getElementById('loginBtn').style.display = 'flex';
    document.getElementById('userBtn').style.display = 'none';

    // Hiq guest badge
    const guestBadge = document.querySelector('.guest-badge');
    if (guestBadge) guestBadge.remove();
}

function updateUIForGuest() {
    document.getElementById('loginBtn').style.display = 'flex';
    document.getElementById('userBtn').style.display = 'none';

    // Hiq guest badge ekzistues
    const existingBadge = document.querySelector('.guest-badge');
    if (existingBadge) existingBadge.remove();

    if (guestInfo) {
        // Shto guest badge me emrin e guest
        const badge = document.createElement('div');
        badge.className = 'guest-badge';
        badge.innerHTML = `
            <i class="fas fa-user-secret"></i>
            Guest: <span class="guest-badge-name">${guestInfo.name} ${guestInfo.surname}</span>
            <span class="close-guest-badge" onclick="removeGuestMode()" title="Dil nga Guest Mode">&times;</span>
        `;
        document.body.appendChild(badge);

        // Hiq pas 10 sekondash
        setTimeout(() => {
            if (badge.parentElement) {
                badge.style.opacity = '0';
                badge.style.transition = 'opacity 0.3s ease';
                setTimeout(() => badge.remove(), 300);
            }
        }, 10000);
    }
}

function removeGuestMode() {
    isGuest = false;
    guestInfo = null;
    localStorage.removeItem('guestInfo');

    const badge = document.querySelector('.guest-badge');
    if (badge) badge.remove();

    showToast('Modaliteti Guest u çaktivizua. Hyni për funksione të plota.', 'info');
    renderPage();
}

// ============ PËRDITËSO RENDERPAGE PËR GUEST ============
const originalRenderPage = renderPage;
renderPage = function() {
    // Nëse nuk është i loguar dhe nuk është guest, trego auth wall
    if (!currentUser && !isGuest) {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
    <div class="auth-wall">
        <div class="auth-wall-content">
            <!-- Logoja -->
            <img src="logoroadfixgjilan.png" alt="RoadFix Gjilan" style="width:min(180px, 50vw);height:auto;margin:30px auto 16px;display:block;position:relative;z-index:10;">

            <h1>RoadFix <span style="color: var(--primary);">Gjilan</span></h1>
            <p>Platforma më e plotë për informacione rreth trafikut dhe infrastrukturës në komunën e Gjilanit.</p>

            <div class="auth-wall-buttons">
                <!-- Hyr -->
                <a href="login.html" class="btn btn-primary btn-lg" style="text-decoration:none;">
                    <i class="fas fa-sign-in-alt"></i> Hyr
                </a>

                <!-- Regjistrohu -->
                <a href="signup.html" class="btn btn-outline-primary btn-lg" style="text-decoration:none;">
                    <i class="fas fa-user-plus"></i> Regjistrohu
                </a>

                <!-- Divider -->
                <div style="display:flex;align-items:center;gap:12px;margin:8px 0;color:#94a3b8;font-size:12px;">
                    <span style="flex:1;height:1px;background:#e2e8f0;"></span>
                    <span>ose</span>
                    <span style="flex:1;height:1px;background:#e2e8f0;"></span>
                </div>

                <!-- Guest -->
                <button class="btn btn-guest btn-lg" onclick="loginAsGuest()">
                    <i class="fas fa-user-secret"></i> Vazhdo si Guest
                </button>
            </div>

            <div class="auth-wall-features">
                <div class="feature-item">
                    <i class="fas fa-newspaper"></i>
                    <span>Lajme në kohë reale</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Hartë interaktive</span>
                </div>
                <div class="feature-item">
                    <i class="fas fa-bell"></i>
                    <span>Njoftime për bllokime</span>
                </div>
            </div>

            <p class="auth-wall-note">
                <i class="fas fa-shield-alt"></i> Të dhënat tuaja janë të sigurta
            </p>
        </div>
    </div>
`;
        return;
    }

    // Nëse është guest, modifiko disa elemente në UI
    if (isGuest) {
        // Ruaj referencën origjinale të funksioneve
        const origOpenSubscribe = window.openSubscribeModal;
        const origHandleReport = window.handleReport;

        // Përkohësisht mbishkruaj për guest
        window.openSubscribeModal = function() {
            showToast('Si Guest nuk mund të abonoheni. Regjistrohuni për këtë funksion.', 'info');
        };

        window.handleReport = function(event) {
            if (event) event.preventDefault();
            showToast('Si Guest nuk mund të raportoni. Regjistrohuni për këtë funksion.', 'info');
        };

        // Thirr renderin origjinal
        originalRenderPage();

        // Pastaj modifiko butonat në DOM
        setTimeout(() => {
            // Bëj subscribe widget të duket i çaktivizuar
            const subscribeWidget = document.querySelector('.subscribe-widget');
            if (subscribeWidget) {
                subscribeWidget.classList.add('guest-limited');
                const button = subscribeWidget.querySelector('.btn-warning');
                if (button) {
                    button.textContent = 'Regjistrohu për njoftime';
                    button.onclick = function() {
                        showToast('Regjistrohuni për t\'u abonuar në njoftime.', 'info');
                        openLoginModal();
                    };
                }
            }

            // Modifiko formën e raportimit
            const reportForm = document.querySelector('.report-form');
            if (reportForm) {
                const submitBtn = reportForm.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-lock"></i> Regjistrohu për të raportuar';
                    submitBtn.onclick = function(e) {
                        e.preventDefault();
                        showToast('Regjistrohuni për të raportuar pengesa.', 'info');
                        openLoginModal();
                    };
                }
            }

            // Trego emrin e guest diku në faqe
            if (guestInfo && document.querySelector('.hero')) {
                const heroStats = document.querySelector('.hero-stats');
                if (heroStats) {
                    const guestWelcome = document.createElement('div');
                    guestWelcome.className = 'stat-item';
                    guestWelcome.innerHTML = `
                        <span class="stat-number" style="font-size:16px;">👋 ${guestInfo.name}</span>
                        <span class="stat-label">Guest</span>
                    `;
                    heroStats.appendChild(guestWelcome);
                }
            }
        }, 200);

        return;
    }

    // Për user të loguar, trego gjithçka normalisht
    originalRenderPage();
};

// Modifiko openSubscribeModal për guest
const originalOpenSubscribe = openSubscribeModal;
openSubscribeModal = function() {
    if (isGuest) {
        showToast('Duhet të keni llogari për t\'u abonuar. Hyni ose regjistrohuni.', 'error');
        openLoginModal();
        return;
    }
    originalOpenSubscribe();
};

// Modifiko handleReport për guest
const originalHandleReport = handleReport;
handleReport = function(event) {
    if (isGuest) {
        event.preventDefault();
        showToast('Duhet të keni llogari për të raportuar. Hyni ose regjistrohuni.', 'error');
        openLoginModal();
        return;
    }
    originalHandleReport(event);
};


// ============ PREVIEW FOTO NË RAPORTIM ============
function previewPhoto(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        const container = input.closest('.photo-upload-widget');
        const placeholder = container.querySelector('.photo-placeholder');
        const preview = container.querySelector('.photo-preview');
        const img = preview.querySelector('img');

        reader.onload = function(e) {
            img.src = e.target.result;
            placeholder.style.display = 'none';
            preview.style.display = 'block';
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function removePhoto(button) {
    const container = button.closest('.photo-upload-widget');
    const input = container.querySelector('input[type="file"]');
    const placeholder = container.querySelector('.photo-placeholder');
    const preview = container.querySelector('.photo-preview');

    input.value = '';
    placeholder.style.display = 'block';
    preview.style.display = 'none';
}

// ============ MBYLL DROPDOWN KUR KLIKOHET JASHTË ============
document.addEventListener('click', function(event) {
    const userDropdown = document.getElementById('userDropdown');
    const userBtn = document.getElementById('userBtn');

    if (userDropdown && userDropdown.classList.contains('active')) {
        if (!userDropdown.contains(event.target) && !userBtn.contains(event.target)) {
            userDropdown.classList.remove('active');
        }
    }
});

// ============ SPLASH SCREEN LOGIC ============
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const progressBar = document.getElementById('splashProgressBar');

    // Koha totale e animacionit (5 sekonda)
    const totalDuration = 5000;
    const startTime = Date.now();

    // Funksioni për të përditësuar progresin
    function updateProgress() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / totalDuration) * 100, 100);

        if (progressBar) {
            progressBar.style.width = progress + '%';
        }

        // Nëse ka kaluar koha, fshihe splash screen
        if (elapsed >= totalDuration) {
            hideSplashScreen();
            return;
        }

        // Vazhdo të përditësosh
        requestAnimationFrame(updateProgress);
    }

    // Funksioni për të fshehur splash screen me animacion
    function hideSplashScreen() {
        if (splashScreen) {
            splashScreen.classList.add('fade-out');

            // Hiq plotësisht elementin pas animacionit
            setTimeout(function() {
                if (splashScreen.parentNode) {
                    splashScreen.parentNode.removeChild(splashScreen);
                }
            }, 800); // Pret që tranzicioni të përfundojë
        }
    }

    // Fillo animacionin
    if (splashScreen && progressBar) {
        // Sigurohu që faqja të jetë e dukshme prapa splash screen-it
        document.body.style.overflow = 'hidden';

        // Fillo përditësimin e progresit
        requestAnimationFrame(updateProgress);

        // Rikthe scroll-in pasi të fshihet
        setTimeout(function() {
            document.body.style.overflow = '';
        }, totalDuration + 1000);
    }
});
