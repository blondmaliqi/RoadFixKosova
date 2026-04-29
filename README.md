1. Sistemi AI për mbledhjen e informatave
Burimet e synuara:

Media online lokale (RTV Gjilan, KosovaPress, Express, Koha.net – filtrim sipas fjalëve kyçe: Gjilan, Gjilani, rrugë, bllokim)

Faqet zyrtare: Komuna e Gjilanit (https://kk.rks-gov.net/gjilan), Drejtoria për Shërbime Publike, ARRSH (Autoriteti Rrugor i Kosovës)

Grupet e Facebook/Instagram (p.sh. “Qytetarët e Gjilanit”, “Trafiku Gjilan” – përmes API-së së social media, duke respektuar privatësinë)

Njoftimet e Policisë së Kosovës (për sektorin e Gjilanit)

Si funksionon AI:

Web scraping me biblioteka si BeautifulSoup / Scrapy (Python) ose Puppeteer (Node.js) – për faqet statike.

API scraping për rrjete sociale ku lejohet.

NLP (Natural Language Processing) – model i lehtë i trainuar me lajme shqip dhe serbisht për të klasifikuar në katër kategori (punime, bllokime, devijime, projekte).

Përmbledhja automatike – modele si BART ose T5 shqip/serbo-kroatisht, ose GPT-4 mini përmes API (kushton por saktësi e lartë).

Filtri gjeografik – nëse teksti përmban “Rruga A”, “Lagjja B”, koordinata të përafërta – AI vendos pin-in në hartë.

Frekuenca: Çdo 15 minuta për burimet aktive (Facebook grupe, policia), çdo 1 orë për faqet komunale, çdo 6 orë për mediat online.

2. Database & Publikimi automatik
Postimet ruhen në PostgreSQL me kolona: id, title, summary (AI-generated), source_url, published_at, category (enum), location_lat, location_lng, status (draft/published/edited)

Kur AI zbulon një lajm të ri:

Kontrollon nëse ka të njëjtin URL ose përmbajtje të ngjashme (për të shmangur dublikatat)

Nëse është unik, e publikon automatikisht në website (status='published')

Triggeron Webhook për dërgimin e njoftimeve push për përdoruesit e abonuar

3. Frontend – Website publik
Stack: Next.js (React) + Tailwind CSS + TypeScript (modern, i shpejtë, SEO-friendly)

Faqja kryesore:

Hero me fjalë kyçe për SEO: “Rrugë në punë Gjilan – Lajme të trafikut në kohë reale”

Feed lajmesh me kartela (çdo kartelë përmban: titull, përmbledhje AI, burim, datë, kategori me ngjyrë)

Harta interaktive (Leaflet ose Mapbox) – shfaq pin-a për lajmet që kanë koordinata. Kur klikon pin-in, shfaqet një kartelë e vogël me përmbledhjen.

Filtrat (dropdown ose butona): Të gjitha | Punime në rrugë | Bllokime trafiku | Devijime | Projekte infrastrukturore

Kërkim i lirë (search bar) – kërkon në titull dhe përmbledhje

Faqja e lajmit individual – permalink me URL miqësore (p.sh. /lajme/rruga-a-ne-pune-maj-2026), meta tags për SEO, komente opsionale (nëse shtoni në të ardhmen)

Butoni “Abonohu për njoftime” – regjistron përdoruesin për push notifications (OneSignal ose Web Push API)

4. Paneli Admin
Hyrja e sigurt (JWT + rol admin)

Lista e lajmeve (të publikuara + draft + redaktuar nga AI) – tabelë me filtra, sorting, pagination

Redaktimi manual:

Ndrysho titullin, përmbledhjen, kategorinë, koordinatat (për hartë)

Anulo lajmin (nëse është i pasaktë)

Shto lajm manualisht (në rast se AI nuk e ka kapur)

Burimet e scraping – admin mund të shtojë/fshijë URL të reja ku AI të kontrollojë

Statistikat – sa lajme u mblodhën sot, sa përdorues të abonuar, sa klikime në harta

Log aktiviteti – kush e modifikoi cilin lajm dhe kur

5. Shtesat që s’i ke përmendur por që duhen patjetër (sipas praktikave më të mira)
Shtesa	Përshkrimi
Raportimi nga qytetarët	Një formë e thjeshtë “Raporto pengesë/rrugë të bllokuar” – shkon në panelin admin për verifikim nga njeriu (ose AI e përpunon si lajm të ri)
Webhook për Telegram/Discord	Për stafin komunal – lajmet kritike (bllokime të mëdha) dërgohen automatikisht në një grup privat
Arkiva e lajmeve	Lajmet më të vjetra se 7 ditë shkojnë në arkiv, por indeksohen për SEO
Validimi i automatizuar	P.sh. nëse dy burime të pavarura raportojnë të njëjtin bllokim, AI e rrit “besueshmërinë” dhe e nxjerr më lart në feed
GDPR / Privatësia	Njoftim për cookies, opsion për të fshirë të dhënat e përdoruesit nëse abonohet për notifikime
Multi-gjuha (opsionale)	Shqip dhe Serbisht – për gjithëpërfshirje. AI përmbledh në të dyja gjuhët nëse burimi është në njërën prej tyre
6. SEO i optimizuar – si ta bëjmë konkretisht
Slugs dinamike: /rruga-ne-pune/gjilan/bllokim-rruga-e-separeve

Meta description të gjeneruara nga përmbledhja e AI

Breadcrumbs: Ballina > Kategoria > Lajmi

Sitemap.xml dinamik

robots.txt i konfiguruar

Schema.org markup (Article, NewsArticle, LocalBusiness për komunën)

Fjalë kyçe lokale në tituj, alt text të figurave (ku ka figura, p.sh. screenshot nga harta)

7. Integrimi me njoftime (notifications)
Përdoruesi klikon “Lejo njoftime” në browser – ruhet subscription në database.

Kur shtohet një lajm i ri (jo editim), sistemi dërgon push notification për të gjithë subscriber-at.

Mund të filtohet: p.sh. vetëm për kategorinë “Bllokime” nëse përdoruesi zgjedh.

🛠️ Teknologjitë e rekomanduara
Backend: Node.js + Express (ose Python FastAPI për AI më të lehtë)

AI: transformers (Hugging Face) për përmbledhje + spacy për NER (njohja e emrave të rrugëve)

Scraping: Puppeteer + Cheerio + rezervë BrightData për rrjete sociale

Database: PostgreSQL + PostGIS (për pyetje gjeografike në hartë)

Hosting: VPS (DigitalOcean/Linode) ose server privat – për scraping të rregullt nevojitet CPU i dedikuar

Harta: Mapbox (më e bukur) ose Leaflet (falas, më pak e avancuar)

Cache: Redis – për ta mbajtur faqen të shpejtë

📈 Vlerësimi i punës (nëse do ta zhvillosh me ekip)
Faza	Koha (ditë pune)	Kush
Konfigurimi i bazës së të dhënave dhe backend API	5	Backend dev
Web scraping + AI filtering/summarization	10	ML Engineer
Website publik (Next.js) + hartë interaktive	8	Frontend dev
Paneli admin	5	Fullstack dev
Notifikimet + SEO + testime	4	Të gjithë
Total	~32 ditë (rreth 6-7 javë me 1-2 persona)
