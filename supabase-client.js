// ========================================
// KONFIGURIMI SUPABASE
// ========================================
const SUPABASE_URL = 'https://tu-projekt.supabase.co';
const SUPABASE_ANON_KEY = 'tuaj-anon-key-here';

let supabaseClient = null;

// Prill 2026 - Gjilan Demo Data (për testim pa Supabase)
const DEMO_NEWS = [
    {
        id: 1,
        title: "Punime në rrugën 'Bill Clinton' - Gjilan",
        summary: "Kanë filluar punimet për asfaltimin e rrugës Bill Clinton. Trafiku do të devijohet përmes rrugëve alternative. Punimet pritet të zgjasin 15 ditë.",
        source_url: "https://kk.rks-gov.net/gjilan",
        published_at: new Date().toISOString(),
        category: "punime",
        location_lat: 42.4605,
        location_lng: 21.4691,
        location_name: "Rruga Bill Clinton",
        status: "published"
    },
    {
        id: 2,
        title: "Bllokim i plotë në rrugën 'Emin Duraku'",
        summary: "Për shkak të punimeve në ujësjellës, rruga Emin Duraku është e mbyllur plotësisht. Qytetarët mund të përdorin rrugën alternative përmes lagjes 'Dardania'.",
        source_url: "https://kk.rks-gov.net/gjilan",
        published_at: new Date(Date.now() - 3600000).toISOString(),
        category: "bllokime",
        location_lat: 42.4755,
        location_lng: 21.4802,
        location_name: "Rruga Emin Duraku",
        status: "published"
    },
    {
        id: 3,
        title: "Devijim i trafikut - Rruga e Re gjatë punimeve",
        summary: "Për shkak të punimeve në Rrugën e Re, trafiku do të devijohet përmes rrugës 'Zenel Hajdini' dhe 'Idriz Seferi'.",
        source_url: "https://www.kosovapress.com",
        published_at: new Date(Date.now() - 7200000).toISOString(),
        category: "devijime",
        location_lat: 42.4650,
        location_lng: 21.4750,
        location_name: "Rruga e Re",
        status: "published"
    },
    {
        id: 4,
        title: "Projekti i ri: Rruga 'Gërmia' merr dritat e qytetit",
        summary: "Komuna e Gjilanit ka njoftuar për fillimin e projektit për ndriçimin e rrugës Gërmia me drita LED. Projekti vlen 150,000 euro dhe pritet të përfundojë brenda 2 muajve.",
        source_url: "https://kk.rks-gov.net/gjilan",
        published_at: new Date(Date.now() - 86400000).toISOString(),
        category: "projekte",
        location_lat: 42.4580,
        location_lng: 21.4600,
        location_name: "Rruga Gërmia",
        status: "published"
    },
    {
        id: 5,
        title: "Punime në rrugën 'Bajram Curri' - Mbyllet një korsi",
        summary: "Punimet për shtrimin e trotuareve në rrugën Bajram Curri do të zgjasin 10 ditë. Një korsi do të jetë e mbyllur për qarkullim.",
        source_url: "https://www.rtv21.tv",
        published_at: new Date(Date.now() - 172800000).toISOString(),
        category: "punime",
        location_lat: 42.4700,
        location_lng: 21.4720,
        location_name: "Rruga Bajram Curri",
        status: "published"
    }
];

/**
 * Inicializo Supabase client
 */
function initSupabase() {
    if (typeof supabase !== 'undefined' && supabase.createClient) {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client initialized');
    }
    return supabaseClient;
}

/**
 * Merr lajmet (përdor demo data nëse Supabase nuk konfigurohet)
 */
async function fetchNews(filters = {}) {
    console.log('Fetching news with filters:', filters);
    
    // Kontrollo nëse Supabase është konfiguruar
    if (SUPABASE_URL.includes('tu-projekt') || SUPABASE_URL === 'https://tu-projekt.supabase.co') {
        console.log('Përdorimi i DEMO_DATA (Supabase nuk është konfiguruar)');
        return filterDemoData(filters);
    }
    
    try {
        const client = initSupabase();
        if (!client) {
            console.log('No Supabase client, using demo data');
            return filterDemoData(filters);
        }
        
        let query = client
            .from('news')
            .select('*')
            .eq('status', 'published')
            .order('published_at', { ascending: false });
        
        if (filters.category && filters.category !== 'all') {
            query = query.eq('category', filters.category);
        }
        
        if (filters.search && filters.search.trim() !== '') {
            const searchTerm = filters.search.trim();
            query = query.or(`title.ilike.%${searchTerm}%,summary.ilike.%${searchTerm}%,location_name.ilike.%${searchTerm}%`);
        }
        
        const { data, error } = await query.limit(50);
        
        if (error) {
            console.error('Gabim në Supabase:', error);
            return filterDemoData(filters);
        }
        
        console.log(`Fetched ${data?.length || 0} news from Supabase`);
        return data || [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return filterDemoData(filters);
    }
}

/**
 * Filtro demo data
 */
function filterDemoData(filters) {
    let filtered = [...DEMO_NEWS];
    
    console.log('Filtering demo data, initial count:', filtered.length);
    
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(n => n.category === filters.category);
        console.log(`After category filter (${filters.category}):`, filtered.length);
    }
    
    if (filters.search && filters.search.trim() !== '') {
        const searchTerm = filters.search.toLowerCase().trim();
        filtered = filtered.filter(n => 
            n.title.toLowerCase().includes(searchTerm) || 
            n.summary.toLowerCase().includes(searchTerm) ||
            (n.location_name && n.location_name.toLowerCase().includes(searchTerm))
        );
        console.log(`After search filter (${searchTerm}):`, filtered.length);
    }
    
    return filtered;
}

/**
 * Merr statistikat
 */
async function fetchNewsStats() {
    const news = await fetchNews({ category: 'all' });
    const stats = {
        punime: news.filter(n => n.category === 'punime').length,
        bllokime: news.filter(n => n.category === 'bllokime').length,
        devijime: news.filter(n => n.category === 'devijime').length,
        projekte: news.filter(n => n.category === 'projekte').length
    };
    console.log('Statistics:', stats);
    return stats;
}

/**
 * Merr një lajm me ID
 */
async function fetchNewsById(id) {
    const news = await fetchNews({ category: 'all' });
    const found = news.find(n => n.id === parseInt(id)) || null;
    console.log(`Fetch news by ID ${id}:`, found ? 'found' : 'not found');
    return found;
}

// Eksporto
window.supabaseClient = {
    fetchNews,
    fetchNewsById,
    fetchNewsStats
};

console.log('Supabase client loaded successfully');
console.log('Demo news available:', DEMO_NEWS.length);