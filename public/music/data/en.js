var title = "Music Timeline";

// English edition: representative works are included where possible; period boundaries remain editorial approximations.

// A curated global music-history timeline. People are placed at age twenty, groups at their founding year, and genre periods use editorially approximate ranges.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// Global musical traditions and long-duration periods
var tl_global_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "end": "-2999",
            "title": "Deep musical prehistory before 10,000 BCE and Neolithic ritual music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "Mesopotamian temple and court music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "Ancient Egyptian music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "Bronze-bell and ritual music in ancient China",
            "description": "Different sizes and casting profiles produced organized pitches; the Marquis Yi of Zeng bells even demonstrate two related pitches from a single bell, revealing advanced tuning and ensemble design. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "Vedic chant",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "Ancient Greek music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "Early Jewish liturgical music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "Roman and late-antique music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "Formation of Indian classical theory and raga systems",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "Byzantine chant",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "Chinese qin literati tradition",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "Japanese gagaku",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "Abbasid-era Arabic and Persian court music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "Javanese and Balinese gamelan traditions",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "Andalusi classical music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "West African griot and kora traditions",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "Qawwali and South Asian Sufi music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "Chinese opera traditions",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "Hindustani classical music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "Japanese Noh music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "Ottoman classical music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "Carnatic classical music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "Kunqu opera",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "Kabuki music",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "Flamenco",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "Beijing opera",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "Tango: formation and golden age",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "Highlife",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "Samba",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "Mandopop and Chinese-language popular song",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "Raï",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "Enka",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Bossa nova",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "Nueva canción",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "Salsa: classic period",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "Música popular brasileira (MPB)",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Afrobeat",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Reggae",
            "description": "Jamaican offbeat emphasis, bass-led arrangement and sound-system culture treated songs, versions and mixes as reusable material; dub went further by turning the studio itself into a performance instrument. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "Japanese city pop",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "Latin pop",
            "description": "This was not one closed “style” but a tradition sustained by ritual, court, religion, oral lineages and regional instruments; the dates mark an approximate span of recognizable form or strongest influence. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "J-pop",
            "description": "Television, anime, idol industries and record companies jointly shaped Japanese popular song, often combining Western-derived harmony, Japanese prosody and highly detailed arrangement. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "K-pop",
            "description": "Trainee systems, exact choreography, multinational songwriting and dense audiovisual circulation were integrated into an industry model that reached global markets through video platforms and organized fandom. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "Afrobeats",
            "description": "Nigerian and Ghanaian producers fused highlife, hip-hop, R&B, dancehall and electronic beats into a light, syncopated pop sound that reached international markets through streaming. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "Amapiano",
            "description": "South African producers combined slower house tempos, jazz-inflected chords, spacious keyboards and the “log drum” bass into music that feels relaxed yet forceful on the dance floor. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        }
    ]
};

// Periods and movements in Western art music
var tl_classical_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "0500",
            "end": "1400",
            "title": "Medieval music",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "Gregorian chant repertory",
            "description": "It centered on monophonic Latin liturgical chant, preserved first orally and then through developing neumatic notation, and supplied core material for early European polyphony. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "Notre-Dame polyphony and Ars antiqua",
            "description": "The Notre-Dame composers stretched chant into a sustained tenor and layered rhythmically organized upper voices above it, advancing rhythmic notation and large-scale sacred polyphony. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "Ars nova",
            "description": "More precise rhythmic notation made duple division, syncopation and isorhythmic design writable, allowing composers such as Machaut to enlarge the complexity of motets, masses and secular songs. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "Renaissance music",
            "description": "Voices became more balanced and imitative counterpoint spread widely; music printing and court-church networks carried Franco-Flemish techniques across Europe. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "Franco-Flemish polyphony",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "Madrigal era",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "Baroque music",
            "description": "Basso continuo, functional tonality, musical rhetoric and solo–tutti contrast became central, while opera, concerto, sonata and oratorio took durable forms. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "Early opera and monody",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "High Baroque",
            "description": "Basso continuo, functional tonality, musical rhetoric and solo–tutti contrast became central, while opera, concerto, sonata and oratorio took durable forms. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "Galant style",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "Classical period",
            "description": "Sonata form, the symphony, the string quartet and public concert culture matured, with thematic development and tonal architecture replacing the Baroque emphasis on continuous bass. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "Sturm und Drang in music",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "Romantic music",
            "description": "Composers expanded orchestral and harmonic resources, using art song, character pieces, symphonic poems and music drama to express personal experience, literary imagination and national identity. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "Virtuoso concert culture",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "Musical nationalism",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "Late Romanticism",
            "description": "Composers expanded orchestral and harmonic resources, using art song, character pieces, symphonic poems and music drama to express personal experience, literary imagination and national identity. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "Impressionism and musical symbolism",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "Musical modernism",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "Expressionism and free atonality",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "Neoclassicism",
            "description": "Sonata form, the symphony, the string quartet and public concert culture matured, with thematic development and tonal architecture replacing the Baroque emphasis on continuous bass. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "Serialism and twelve-tone composition",
            "description": "It organized pitch through a row containing all twelve chromatic notes and transformations such as inversion and retrograde, seeking structural unity without a traditional tonal center. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "Musique concrète and early electronic art music",
            "description": "Recorded real-world sounds were reorganized through splicing, speed change, reversal and looping, shifting composition from writing for instruments to working directly with sound material. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "Postwar avant-garde",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "Minimalism and post-minimalism",
            "description": "Repeated cells, steady pulse and gradual process replaced dense serial structures; phase shifting, additive process and sustained harmony became signature methods. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Postmodern and polystylistic composition",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Spectral music",
            "description": "It used the acoustic spectrum and overtone structure as starting points for harmony and orchestration, focusing on continuous transformations of timbre through time. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "New complexity",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Digital and multimedia art music",
            "description": "Its value lies in the simultaneous change of compositional method, performance institutions and audience structure; the dates are editorial boundaries for display, not a synchronized transition everywhere. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        }
    ]
};

// Popular, jazz, folk and electronic genres
var tl_popular_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1830",
            "end": "1920",
            "title": "Minstrelsy in the United States",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "African American spirituals in concert and print culture",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "Brass-band era",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "Blues",
            "description": "African American work songs, spirituals and vernacular narrative converged into a tradition marked by blue notes, call-and-response and the common twelve-bar scheme, later shaping jazz, R&B and rock. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "Ragtime",
            "description": "A regular left-hand piano pattern was set against syncopated right-hand melody; sheet music and piano rolls spread the style widely before the recording industry matured. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "Country and old-time music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "Gospel music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "New Orleans jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "Tin Pan Alley song era",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "Jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "Classic blues and early recorded blues",
            "description": "African American work songs, spirituals and vernacular narrative converged into a tradition marked by blue notes, call-and-response and the common twelve-bar scheme, later shaping jazz, R&B and rock. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "Crooner era",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "Big-band jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "Film music and soundtrack culture",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "Swing era",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "Western swing",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "Bluegrass",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "Rhythm and blues",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "Bebop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "Cool jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "Doo-wop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "Hard bop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "Honky-tonk country",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "Rock and roll",
            "description": "Amplified guitar, a strong backbeat and youth dance culture recombined rhythm and blues with country, spreading through singles, radio, television and live performance. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "Nashville sound",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "Soul music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Modal jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Surf music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "Free jazz",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "Funk",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "Motown sound",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "British Invasion",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "Folk rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "Garage rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "Psychedelic rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "Progressive rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "Hard rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Heavy metal",
            "description": "High-gain distortion, low-register riffs and forceful drumming pushed hard rock toward a heavier, more theatrical sound, later branching into thrash, death, black metal and many other subgenres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "Jazz fusion",
            "description": "Its core lies less in a fixed instrumentation than in swing, improvisation, blues vocabulary and ensemble interaction; styles from New Orleans jazz to bebop, free jazz and fusion repeatedly recombined those elements. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Dub",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "Glam rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "Outlaw country",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "Singer-songwriter era",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "Hip-hop",
            "description": "DJs extended record breaks while MCs organized the event through rhyme; samplers, drum machines and multitrack recording later turned a neighborhood culture into a global system of production and storytelling. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "Disco",
            "description": "A steady four-on-the-floor pulse, octave bass, strings and percussion served continuous dance-floor experience; the 12-inch single and DJ remix changed song length and release practice. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "Punk rock",
            "description": "Short songs, reduced harmony, fast tempos and DIY release practices rejected mainstream rock virtuosity and scale, generating independent labels, fanzines and local scenes. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "Ambient music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "Post-punk",
            "description": "Short songs, reduced harmony, fast tempos and DIY release practices rejected mainstream rock virtuosity and scale, generating independent labels, fanzines and local scenes. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "Industrial music",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "New wave",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "Gothic rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "Old-school hip-hop",
            "description": "DJs extended record breaks while MCs organized the event through rhyme; samplers, drum machines and multitrack recording later turned a neighborhood culture into a global system of production and storytelling. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "Dancehall",
            "description": "Jamaican offbeat emphasis, bass-led arrangement and sound-system culture treated songs, versions and mixes as reusable material; dub went further by turning the studio itself into a performance instrument. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "Hardcore punk",
            "description": "Short songs, reduced harmony, fast tempos and DIY release practices rejected mainstream rock virtuosity and scale, generating independent labels, fanzines and local scenes. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "Synth-pop",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "Electro",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "Thrash metal",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "Alternative rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "Indie rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "Golden-age hip-hop",
            "description": "DJs extended record breaks while MCs organized the event through rhyme; samplers, drum machines and multitrack recording later turned a neighborhood culture into a global system of production and storytelling. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "House music",
            "description": "Chicago DJs rebuilt disco fragments, four-on-the-floor drum-machine patterns and looped bass into continuous club music, later producing branches such as deep house and acid house. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "Gangsta rap",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "Techno",
            "description": "Detroit producers combined electro-funk, sequenced synthesizers and futurist urban imagination, emphasizing machine rhythm and exacting sound design. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "World-music market category",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "Shoegaze",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "Alternative hip-hop",
            "description": "DJs extended record breaks while MCs organized the event through rhyme; samplers, drum machines and multitrack recording later turned a neighborhood culture into a global system of production and storytelling. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "Dance-pop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "Grunge",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Neo-soul",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Trance",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "Britpop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "Drum and bass",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "Post-rock",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "Emo: first and second waves",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "Nu metal",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "Electronic dance music festival culture",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "Trap",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "Contemporary indie pop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "Drill",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "Streaming-era global pop",
            "description": "On-demand access replaced ownership of individual records; playlists, recommendation algorithms and per-stream accounting began to influence song length, release cadence, discovery and revenue structure. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "Hyperpop",
            "description": "The music acquired a recognizable sound through venues, recording technology, broadcasting or networked communities, while continually borrowing rhythm, timbre and production methods from neighboring genres. The start and end dates here are approximate display boundaries for formation, maturity or strongest influence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// Instruments, sound technologies and production tools
var tl_instruments = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Paleolithic bone flutes before 10,000 BCE (compressed marker)",
            "description": "Perforated bone tubes show that prehistoric people could control pitch sequences rather than only produce unpitched impact sounds; they are key physical evidence for early ritual and cognition."
        },
        {
            "start": "-7999",
            "title": "Early frame drums and rattles",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-3499",
            "title": "Mesopotamian lyres and harps",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-2999",
            "title": "Egyptian arched harps",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-2499",
            "title": "Sumerian bull-headed lyres",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-1999",
            "title": "Early Chinese qin-type zithers",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-1499",
            "title": "Bronze bells in East Asian ritual ensembles",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-1199",
            "title": "Aulos and kithara in the Greek world",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-0999",
            "title": "Early forms of the sheng mouth organ",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "-0699",
            "title": "Large Chinese bianzhong bell sets",
            "description": "Different sizes and casting profiles produced organized pitches; the Marquis Yi of Zeng bells even demonstrate two related pitches from a single bell, revealing advanced tuning and ensemble design."
        },
        {
            "start": "-0499",
            "title": "Hydraulis water organ",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "0200",
            "title": "Organ technology spreads in the Roman world",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "0500",
            "title": "Development of the oud family",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "0700",
            "title": "Pipa becomes central in Chinese court music",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "0800",
            "title": "Shō mouth organ in Japanese gagaku",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "0900",
            "title": "Bowed rebab traditions expand",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1000",
            "title": "Medieval European harp and psaltery",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1100",
            "title": "Pipe organ develops large church forms",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1200",
            "title": "European lute develops from oud-related instruments",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1200",
            "title": "Kora traditions develop in West Africa",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1300",
            "title": "Santur and hammered-dulcimer families spread",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1400",
            "title": "Clavichord enters European keyboard culture",
            "description": "Its hammer action let players control dynamics through touch; later iron frames, cross-stringing and double escapement increased volume, range and rapid repetition."
        },
        {
            "start": "1450",
            "title": "Harpsichord family develops",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1500",
            "title": "Viola da gamba family",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1520",
            "title": "Modern violin family emerges in northern Italy",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1550",
            "title": "Sitar develops in North India",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1560",
            "title": "Transverse flute redesign in Renaissance Europe",
            "description": "Voices became more balanced and imitative counterpoint spread widely; music printing and court-church networks carried Franco-Flemish techniques across Europe."
        },
        {
            "start": "1600",
            "title": "Koto becomes established in Japanese art music",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1600",
            "title": "Shamisen spreads in Japan",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1650",
            "title": "Stradivari and Cremonese violin making",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1680",
            "title": "Clarinet developed from the chalumeau",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1700",
            "title": "Cristofori develops the piano",
            "description": "Its hammer action let players control dynamics through touch; later iron frames, cross-stringing and double escapement increased volume, range and rapid repetition."
        },
        {
            "start": "1720",
            "title": "Earliest surviving Cristofori piano",
            "description": "Its hammer action let players control dynamics through touch; later iron frames, cross-stringing and double escapement increased volume, range and rapid repetition."
        },
        {
            "start": "1730",
            "title": "Modern oboe and bassoon families stabilize",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1750",
            "title": "Classical orchestra standardizes string sections",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1770",
            "title": "Fortepiano becomes a leading concert and domestic instrument",
            "description": "Its hammer action let players control dynamics through touch; later iron frames, cross-stringing and double escapement increased volume, range and rapid repetition."
        },
        {
            "start": "1814",
            "title": "Mälzel patents the modern metronome",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1821",
            "title": "Free-reed harmonica development",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1829",
            "title": "Accordion patented",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1830",
            "title": "Modern concert harp with double-action pedals",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1832",
            "title": "Boehm-system flute development begins",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1835",
            "title": "Tuba patented",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1846",
            "title": "Saxophone patented by Adolphe Sax",
            "description": "Adolphe Sax designed it to combine woodwind agility with brass projection; it later became a principal solo voice in military bands, jazz and popular recording."
        },
        {
            "start": "1850",
            "title": "Modern concert grand piano architecture consolidates",
            "description": "Its hammer action let players control dynamics through touch; later iron frames, cross-stringing and double escapement increased volume, range and rapid repetition."
        },
        {
            "start": "1860",
            "title": "Bandoneon enters tango culture",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1870",
            "title": "Modern drum-kit components begin to combine",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1880",
            "title": "Steel-string acoustic guitar develops",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1890",
            "title": "Sousaphone developed for marching performance",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1906",
            "title": "Telharmonium public demonstrations",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1919",
            "title": "Theremin invented",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1924",
            "title": "Electric microphone transforms performance and recording",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1928",
            "title": "Ondes Martenot introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1931",
            "title": "Commercial electric guitar appears",
            "description": "Magnetic pickups converted string vibration into an electrical signal, making sustain, distortion, feedback and effects compositional parameters rather than mere amplification."
        },
        {
            "start": "1934",
            "title": "Hammond organ introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1935",
            "title": "Magnetic tape recording advances in Germany",
            "description": "Erasable tape made editing, overdubbing, delay and layering routine production methods; the cassette then brought copying, portable listening and personal mixtapes into everyday life."
        },
        {
            "start": "1939",
            "title": "Modern electric bass prototypes",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1940",
            "title": "Steelpan develops in Trinidad and Tobago",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1948",
            "title": "Multitrack recording experiments",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1950",
            "title": "Fender Telecaster mass-produced solid-body guitar",
            "description": "Magnetic pickups converted string vibration into an electrical signal, making sustain, distortion, feedback and effects compositional parameters rather than mere amplification."
        },
        {
            "start": "1951",
            "title": "Fender Precision Bass introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1954",
            "title": "Fender Stratocaster introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1957",
            "title": "RCA Mark II Sound Synthesizer",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1960",
            "title": "Portable transistor organs and electric keyboards spread",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1963",
            "title": "Mellotron introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1964",
            "title": "Moog modular synthesizer demonstrated",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1965",
            "title": "Fuzz and effects pedals reshape guitar tone",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1970",
            "title": "Minimoog introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1971",
            "title": "ARP 2600 semi-modular synthesizer",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1972",
            "title": "Turntable techniques become a compositional instrument in hip-hop",
            "description": "DJs extended record breaks while MCs organized the event through rhyme; samplers, drum machines and multitrack recording later turned a neighborhood culture into a global system of production and storytelling."
        },
        {
            "start": "1975",
            "title": "Polyphonic synthesizers enter wider use",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1979",
            "title": "Fairlight CMI sampling workstation",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1980",
            "title": "Roland TR-808 drum machine",
            "description": "Programmable rhythm separated drum sound from real-time performance; the deliberately synthetic tones of machines such as the TR-808 and TR-909 became signatures of hip-hop, house, techno and pop."
        },
        {
            "start": "1981",
            "title": "Roland TB-303 bass synthesizer",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1982",
            "title": "Digital synthesizers enter the mass market",
            "description": "Oscillators, filters, envelopes and modulation broke timbre into controllable modules; from large modular systems to portable keyboards and software instruments, synthesis moved into the center of composition and pop production."
        },
        {
            "start": "1983",
            "title": "MIDI publicly demonstrated and standardized",
            "description": "A standardized digital message system let keyboards, synthesizers, drum machines and computers from different makers exchange notes, controllers and synchronization, creating the interoperability base of modern electronic production."
        },
        {
            "start": "1983",
            "title": "Yamaha DX7 introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1984",
            "title": "Affordable digital samplers spread",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1987",
            "title": "Akai MPC line begins",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1989",
            "title": "Digital audio workstations emerge",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1997",
            "title": "Auto-Tune introduced",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "1999",
            "title": "Software instruments and laptop production expand",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "2001",
            "title": "Ableton Live released",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "2007",
            "title": "Smartphones become music-production and performance platforms",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "2010",
            "title": "Tablet instruments and touch interfaces spread",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        },
        {
            "start": "2020",
            "title": "Networked remote performance tools expand during the pandemic",
            "description": "The change altered the pitch, dynamics, timbre or timing that performers could control, and also affected instrument making, ensemble design and studio workflow."
        }
    ]
};

// Notation, theory, institutions and the music industry
var tl_systems = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1399",
            "title": "Hurrian hymn tablets",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "-0499",
            "title": "Greek harmonic theory develops",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "-0299",
            "title": "Chinese pitch-pipe and modal theory codified",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "0100",
            "title": "Seikilos epitaph preserves complete ancient notation",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "0200",
            "title": "Natya Shastra systematizes South Asian performance theory",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "0500",
            "title": "Boethius transmits ancient music theory to medieval Europe",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "0800",
            "title": "Neumatic notation spreads in Western chant",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1025",
            "title": "Guido of Arezzo develops staff-based pedagogy",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1250",
            "title": "Mensural notation enables measured polyphony",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1320",
            "title": "Ars nova notation expands rhythmic possibilities",
            "description": "More precise rhythmic notation made duple division, syncopation and isorhythmic design writable, allowing composers such as Machaut to enlarge the complexity of motets, masses and secular songs."
        },
        {
            "start": "1450",
            "title": "Music copying workshops expand manuscript circulation",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1501",
            "title": "Petrucci publishes major collection of printed polyphonic music",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1558",
            "title": "Zarlino publishes Le istitutioni harmoniche",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1597",
            "title": "Early opera Dafne produced",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1607",
            "title": "Monteverdi’s L’Orfeo establishes an enduring operatic model",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1637",
            "title": "First public opera house opens in Venice",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1669",
            "title": "Paris Opera founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1672",
            "title": "First sustained public concert series in London",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1710",
            "title": "European music publishing expands through engraved editions",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1725",
            "title": "Fux publishes Gradus ad Parnassum",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1750",
            "title": "Public concert culture expands across Europe",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1771",
            "title": "Vienna Tonkünstler-Societät supports public orchestral concerts",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1795",
            "title": "Paris Conservatoire founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1808",
            "title": "Large public benefit concert demonstrates modern concert scale",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1813",
            "title": "Royal Philharmonic Society founded in London",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1824",
            "title": "Beethoven’s Ninth links symphony, chorus and public humanism",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1842",
            "title": "New York Philharmonic founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1843",
            "title": "Leipzig Conservatory founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1857",
            "title": "Phonautograph records sound waves",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1867",
            "title": "Copyright and performance-right systems expand in Europe",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1877",
            "title": "Edison demonstrates recording and playback with the phonograph",
            "description": "Sound could for the first time be fixed, copied and replayed without the performer, turning music from a one-time event into a medium that could be sold, collected and compared."
        },
        {
            "start": "1887",
            "title": "Gramophone disc system patented",
            "description": "Sound could for the first time be fixed, copied and replayed without the performer, turning music from a one-time event into a medium that could be sold, collected and compared."
        },
        {
            "start": "1891",
            "title": "Carnegie Hall opens",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1897",
            "title": "Gramophone Company founded",
            "description": "Sound could for the first time be fixed, copied and replayed without the performer, turning music from a one-time event into a medium that could be sold, collected and compared."
        },
        {
            "start": "1901",
            "title": "Victor Talking Machine Company founded",
            "description": "Sound could for the first time be fixed, copied and replayed without the performer, turning music from a one-time event into a medium that could be sold, collected and compared."
        },
        {
            "start": "1906",
            "title": "Victrola brings recorded music into domestic furniture culture",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1914",
            "title": "ASCAP founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1920",
            "title": "Commercial radio broadcasting begins reshaping music audiences",
            "description": "A single performance could enter many homes at once; programming, charts, live relays and sponsorship reshaped star formation and the circulation of regional styles."
        },
        {
            "start": "1925",
            "title": "Electrical recording replaces acoustic recording",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1927",
            "title": "First feature-length synchronized-sound film accelerates screen music",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1935",
            "title": "Magnetic tape recording demonstrated at broadcasting scale",
            "description": "A single performance could enter many homes at once; programming, charts, live relays and sponsorship reshaped star formation and the circulation of regional styles."
        },
        {
            "start": "1936",
            "title": "Billboard publishes major popular-music charts",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1948",
            "title": "Columbia introduces the 33⅓ rpm LP",
            "description": "The 33⅓-rpm long-playing record extended each side to roughly twenty minutes, encouraging symphonies, operas and concept albums to circulate as continuous large-scale units."
        },
        {
            "start": "1949",
            "title": "RCA introduces the 45 rpm single",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1954",
            "title": "Portable transistor radio expands youth listening",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1958",
            "title": "First Grammy Awards cycle established",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1958",
            "title": "Stereo LP becomes a commercial standard",
            "description": "The 33⅓-rpm long-playing record extended each side to roughly twenty minutes, encouraging symphonies, operas and concept albums to circulate as continuous large-scale units."
        },
        {
            "start": "1962",
            "title": "Compact cassette introduced",
            "description": "Erasable tape made editing, overdubbing, delay and layering routine production methods; the cassette then brought copying, portable listening and personal mixtapes into everyday life."
        },
        {
            "start": "1964",
            "title": "Moog synthesizer helps establish voltage-controlled electronic production",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1967",
            "title": "Rolling Stone magazine founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1979",
            "title": "Sony Walkman makes private mobile listening mainstream",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1981",
            "title": "MTV launches",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1982",
            "title": "Compact disc commercial launch",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1983",
            "title": "MIDI 1.0 published",
            "description": "A standardized digital message system let keyboards, synthesizers, drum machines and computers from different makers exchange notes, controllers and synchronization, creating the interoperability base of modern electronic production."
        },
        {
            "start": "1985",
            "title": "Parental Advisory controversy reshapes music labeling",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1988",
            "title": "Digital audio tape enters the market",
            "description": "Erasable tape made editing, overdubbing, delay and layering routine production methods; the cassette then brought copying, portable listening and personal mixtapes into everyday life."
        },
        {
            "start": "1991",
            "title": "SoundScan changes chart measurement",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "1993",
            "title": "MPEG-1 Audio Layer III standard and early MP3 implementation",
            "description": "Perceptual coding drastically reduced file size by discarding less audible information, enabling online distribution, peer-to-peer exchange and portable players while undermining the physical-carrier business model."
        },
        {
            "start": "1995",
            "title": ".mp3 file extension adopted",
            "description": "Perceptual coding drastically reduced file size by discarding less audible information, enabling online distribution, peer-to-peer exchange and portable players while undermining the physical-carrier business model."
        },
        {
            "start": "1999",
            "title": "Napster launches peer-to-peer music sharing",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2001",
            "title": "iPod launched",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2003",
            "title": "iTunes Music Store launches",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2005",
            "title": "YouTube launches",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2007",
            "title": "SoundCloud founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2008",
            "title": "Bandcamp founded",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2008",
            "title": "Spotify launches",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2011",
            "title": "Global album-release day coordination begins evolving",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2015",
            "title": "Friday becomes the coordinated global release day",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2015",
            "title": "Streaming becomes central to chart and certification systems",
            "description": "On-demand access replaced ownership of individual records; playlists, recommendation algorithms and per-stream accounting began to influence song length, release cadence, discovery and revenue structure."
        },
        {
            "start": "2017",
            "title": "Subscription streaming becomes the dominant growth engine of recorded music",
            "description": "On-demand access replaced ownership of individual records; playlists, recommendation algorithms and per-stream accounting began to influence song length, release cadence, discovery and revenue structure."
        },
        {
            "start": "2020",
            "title": "Livestream concerts become a mass format during COVID-19 closures",
            "description": "It changed how music was recorded, copied, taught, licensed, circulated or priced, affecting not only sound but musicians’ labor and listeners’ routes of access."
        },
        {
            "start": "2023",
            "title": "Generative AI intensifies debates over authorship, training data and musical labor",
            "description": "Models can generate melody, accompaniment, singing voices and complete audio, while making training-data licensing, style imitation, vocal identity, credit and labor displacement central industry and legal disputes."
        }
    ]
};

// Composers and innovators in art music
var tl_classical_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0609",
            "title": "Sappho (630 BCE–c. 570 BCE)",
            "description": "Sappho can be located concretely through surviving lyric fragments such as the “Ode to Aphrodite”. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of ancient and ritual music."
        },
        {
            "start": "0497",
            "title": "Boethius (477–524)",
            "description": "Boethius can be located concretely through De institutione musica. Their treatment of theory, notation and ideas about music links an individual style to the wider development of medieval music."
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen (1098–1179)",
            "description": "Hildegard of Bingen’s representative achievements include Ordo Virtutum and the Symphonia armoniae celestium revelationum. They preserve the artist’s work in composition, form and the organization of musical sound within medieval music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1170",
            "title": "Léonin (1150–1201)",
            "description": "A direct route into Léonin is the Magnus liber organi tradition associated with Notre-Dame polyphony. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of medieval music."
        },
        {
            "start": "1180",
            "title": "Pérotin (1160–1230)",
            "description": "A direct route into Pérotin is Viderunt omnes and Sederunt principes. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of medieval music."
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut (1300–1377)",
            "description": "A direct route into Guillaume de Machaut is Messe de Nostre Dame and the ballade Douce dame jolie. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of medieval music."
        },
        {
            "start": "1345",
            "title": "Francesco Landini (1325–1397)",
            "description": "Francesco Landini can be located concretely through the ballata Ecco la primavera and the cadence later called the Landini cadence. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of medieval music."
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay (1397–1474)",
            "description": "Nuper rosarum flores and the Missa Se la face ay pale provide concrete evidence of Guillaume Du Fay’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Renaissance music."
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem (1410–1497)",
            "description": "A direct route into Johannes Ockeghem is Missa prolationum and the Requiem. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Renaissance music."
        },
        {
            "start": "1470",
            "title": "Josquin des Prez (1450–1521)",
            "description": "Ave Maria…virgo serena and Missa Pange lingua provide concrete evidence of Josquin des Prez’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Renaissance music."
        },
        {
            "start": "1510",
            "title": "Adrian Willaert (1490–1562)",
            "description": "Adrian Willaert can be located concretely through the Venetian polychoral tradition and Musica nova. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Renaissance music."
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina (1525–1594)",
            "description": "A direct route into Giovanni Pierluigi da Palestrina is Missa Papae Marcelli and Sicut cervus. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Renaissance music."
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso (1532–1594)",
            "description": "Prophetiae Sibyllarum and a large multilingual sacred and secular catalogue provide concrete evidence of Orlando di Lasso’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Renaissance music."
        },
        {
            "start": "1560",
            "title": "William Byrd (1540–1623)",
            "description": "William Byrd’s representative achievements include Mass for Four Voices, Gradualia and English keyboard music in My Ladye Nevells Booke. They preserve the artist’s work in composition, form and the organization of musical sound within Renaissance music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi (1567–1643)",
            "description": "L’Orfeo, the 1610 Vespers and L’incoronazione di Poppea provide concrete evidence of Claudio Monteverdi’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi (1583–1643)",
            "description": "Girolamo Frescobaldi’s representative achievements include Fiori musicali and the Toccate e partite collections. They preserve the artist’s work in composition, form and the organization of musical sound within Baroque music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz (1585–1672)",
            "description": "Psalmen Davids, Symphoniae sacrae and the Christmas Story provide concrete evidence of Heinrich Schütz’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully (1632–1687)",
            "description": "A direct route into Jean-Baptiste Lully is Armide and the codification of French tragédie lyrique and the French overture. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Baroque music."
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude (1637–1707)",
            "description": "Dieterich Buxtehude can be located concretely through organ praeludia and the Lübeck Abendmusiken. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Baroque music."
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli (1653–1713)",
            "description": "Op. 5 violin sonatas and Op. 6 concerti grossi provide concrete evidence of Arcangelo Corelli’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1679",
            "title": "Henry Purcell (1659–1695)",
            "description": "A direct route into Henry Purcell is Dido and Aeneas, King Arthur and Music for the Funeral of Queen Mary. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Baroque music."
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti (1660–1725)",
            "description": "Alessandro Scarlatti can be located concretely through more than one hundred operas and the development of the Italian da capo aria. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Baroque music."
        },
        {
            "start": "1688",
            "title": "François Couperin (1668–1733)",
            "description": "Pièces de clavecin and Les Nations provide concrete evidence of François Couperin’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi (1678–1741)",
            "description": "Antonio Vivaldi can be located concretely through The Four Seasons and L’estro armonico. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Baroque music."
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann (1681–1767)",
            "description": "Tafelmusik and the Paris Quartets provide concrete evidence of Georg Philipp Telemann’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau (1683–1764)",
            "description": "A direct route into Jean-Philippe Rameau is Traité de l’harmonie, Hippolyte et Aricie and Les Indes galantes. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Baroque music."
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti (1685–1757)",
            "description": "A direct route into Domenico Scarlatti is more than 550 keyboard sonatas written largely for the Iberian court. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Baroque music."
        },
        {
            "start": "1705",
            "title": "George Frideric Handel (1685–1759)",
            "description": "A direct route into George Frideric Handel is Messiah, Giulio Cesare and Music for the Royal Fireworks. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Baroque music."
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach (1685–1750)",
            "description": "the Brandenburg Concertos, Well-Tempered Clavier, St Matthew Passion and Art of Fugue provide concrete evidence of Johann Sebastian Bach’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Baroque music."
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach (1714–1788)",
            "description": "A direct route into Carl Philipp Emanuel Bach is the Essay on the True Art of Playing Keyboard Instruments and empfindsamer Stil sonatas. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Classical-period music."
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck (1714–1787)",
            "description": "Orfeo ed Euridice and the reform of opera seria provide concrete evidence of Christoph Willibald Gluck’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Classical-period music."
        },
        {
            "start": "1752",
            "title": "Joseph Haydn (1732–1809)",
            "description": "A direct route into Joseph Haydn is the London symphonies, Op. 33 quartets and The Creation. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Classical-period music."
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini (1743–1805)",
            "description": "Luigi Boccherini’s representative achievements include the Minuet from Op. 11 No. 5 and numerous string quintets. They preserve the artist’s work in composition, form and the organization of musical sound within Classical-period music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1770",
            "title": "Antonio Salieri (1750–1825)",
            "description": "A direct route into Antonio Salieri is Les Danaïdes, Tarare and a major teaching career in Vienna. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Classical-period music."
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart (1756–1791)",
            "description": "The Marriage of Figaro, Don Giovanni, the late symphonies and the Requiem provide concrete evidence of Wolfgang Amadeus Mozart’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Classical-period music."
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven (1770–1827)",
            "description": "A direct route into Ludwig van Beethoven is the nine symphonies, late string quartets, piano sonatas and Fidelio. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Classical-period music."
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini (1782–1840)",
            "description": "A direct route into Niccolò Paganini is 24 Caprices for Solo Violin and virtuoso concertos. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber (1786–1826)",
            "description": "Carl Maria von Weber’s representative achievements include Der Freischütz and Konzertstück for piano and orchestra. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini (1792–1868)",
            "description": "Gioachino Rossini’s representative achievements include The Barber of Seville, William Tell and the crescendo-driven style of his comic operas. They preserve the artist’s work in composition, form and the organization of musical sound within opera as material that can be heard, performed and studied directly."
        },
        {
            "start": "1817",
            "title": "Franz Schubert (1797–1828)",
            "description": "A direct route into Franz Schubert is Winterreise, Erlkönig, the “Unfinished” Symphony and late chamber music. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1823",
            "title": "Hector Berlioz (1803–1869)",
            "description": "Hector Berlioz’s representative achievements include Symphonie fantastique and the Treatise on Instrumentation. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka (1804–1857)",
            "description": "A direct route into Mikhail Glinka is A Life for the Tsar and Ruslan and Lyudmila. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn (1809–1847)",
            "description": "Felix Mendelssohn’s representative achievements include the Octet, A Midsummer Night’s Dream music and the revival of Bach’s St Matthew Passion. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin (1810–1849)",
            "description": "A direct route into Frédéric Chopin is the nocturnes, études, mazurkas and ballades for piano. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1830",
            "title": "Robert Schumann (1810–1856)",
            "description": "Robert Schumann can be located concretely through Dichterliebe, Carnaval and the Piano Quintet. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1831",
            "title": "Franz Liszt (1811–1886)",
            "description": "Franz Liszt can be located concretely through the Transcendental Études, Hungarian Rhapsodies and the symphonic poem. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi (1813–1901)",
            "description": "Giuseppe Verdi’s representative achievements include Rigoletto, La traviata, Aida and the Requiem. They preserve the artist’s work in composition, form and the organization of musical sound within opera as material that can be heard, performed and studied directly."
        },
        {
            "start": "1833",
            "title": "Richard Wagner (1813–1883)",
            "description": "A direct route into Richard Wagner is Tristan und Isolde, Der Ring des Nibelungen and the leitmotif-based music drama. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of opera."
        },
        {
            "start": "1839",
            "title": "Clara Schumann (1819–1896)",
            "description": "Clara Schumann’s representative achievements include the Piano Concerto, Romances for violin and piano, and a career that reshaped the modern recital. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach (1819–1880)",
            "description": "Jacques Offenbach’s representative achievements include Orpheus in the Underworld and La belle Hélène. They preserve the artist’s work in composition, form and the organization of musical sound within opera as material that can be heard, performed and studied directly."
        },
        {
            "start": "1844",
            "title": "Anton Bruckner (1824–1896)",
            "description": "Anton Bruckner’s representative achievements include the mature symphonies, especially Nos. 4, 7, 8 and 9. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana (1824–1884)",
            "description": "A direct route into Bedřich Smetana is Má vlast and The Bartered Bride. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1845",
            "title": "Johann Strauss II (1825–1899)",
            "description": "A direct route into Johann Strauss II is The Blue Danube, Die Fledermaus and the orchestral Viennese waltz. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1853",
            "title": "Johannes Brahms (1833–1897)",
            "description": "Johannes Brahms can be located concretely through four symphonies, A German Requiem and late chamber music. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns (1835–1921)",
            "description": "Camille Saint-Saëns can be located concretely through Samson et Dalila, Symphony No. 3 and The Carnival of the Animals. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1858",
            "title": "Georges Bizet (1838–1875)",
            "description": "Carmen and L’Arlésienne provide concrete evidence of Georges Bizet’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in opera."
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky (1839–1881)",
            "description": "Modest Mussorgsky can be located concretely through Boris Godunov, Pictures at an Exhibition and Songs and Dances of Death. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky (1840–1893)",
            "description": "Pyotr Ilyich Tchaikovsky’s representative achievements include Swan Lake, The Nutcracker, the First Piano Concerto and Symphony No. 6. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák (1841–1904)",
            "description": "A direct route into Antonín Dvořák is Symphony No. 9, the “American” Quartet and the Cello Concerto. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1863",
            "title": "Edvard Grieg (1843–1907)",
            "description": "Edvard Grieg’s representative achievements include the Piano Concerto, Peer Gynt music and Lyric Pieces. They preserve the artist’s work in composition, form and the organization of musical sound within Romantic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov (1844–1908)",
            "description": "Nikolai Rimsky-Korsakov can be located concretely through Scheherazade, The Golden Cockerel and Principles of Orchestration. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré (1845–1924)",
            "description": "A direct route into Gabriel Fauré is the Requiem, nocturnes and late chamber music. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of Romantic music."
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini (1858–1924)",
            "description": "La bohème, Tosca, Madama Butterfly and Turandot provide concrete evidence of Giacomo Puccini’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in opera."
        },
        {
            "start": "1880",
            "title": "Gustav Mahler (1860–1911)",
            "description": "Gustav Mahler can be located concretely through the symphonic song cycles and nine completed symphonies. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1882",
            "title": "Claude Debussy (1862–1918)",
            "description": "A direct route into Claude Debussy is Prélude à l’après-midi d’un faune, La mer and Pelléas et Mélisande. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of modern and contemporary art music."
        },
        {
            "start": "1884",
            "title": "Richard Strauss (1864–1949)",
            "description": "Also sprach Zarathustra, Der Rosenkavalier and the late Four Last Songs provide concrete evidence of Richard Strauss’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Romantic music."
        },
        {
            "start": "1885",
            "title": "Jean Sibelius (1865–1957)",
            "description": "Finlandia, the Violin Concerto and seven symphonies provide concrete evidence of Jean Sibelius’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Romantic music."
        },
        {
            "start": "1886",
            "title": "Erik Satie (1866–1925)",
            "description": "A direct route into Erik Satie is the Gymnopédies, Gnossiennes and the concept of musique d’ameublement. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of modern and contemporary art music."
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams (1872–1958)",
            "description": "Ralph Vaughan Williams can be located concretely through Fantasia on a Theme by Thomas Tallis and nine symphonies. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff (1873–1943)",
            "description": "Sergei Rachmaninoff can be located concretely through the Second and Third Piano Concertos, piano preludes and Symphonic Dances. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Romantic music."
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg (1874–1951)",
            "description": "Arnold Schoenberg’s representative achievements include Pierrot lunaire, the twelve-tone method and A Survivor from Warsaw. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1894",
            "title": "Gustav Holst (1874–1934)",
            "description": "Gustav Holst’s representative achievements include The Planets and English choral works. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1895",
            "title": "Maurice Ravel (1875–1937)",
            "description": "Maurice Ravel’s representative achievements include Daphnis et Chloé, Boléro and the orchestration of Pictures at an Exhibition. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1901",
            "title": "Béla Bartók (1881–1945)",
            "description": "Béla Bartók can be located concretely through Music for Strings, Percussion and Celesta, six string quartets and fieldwork on folk music. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky (1882–1971)",
            "description": "Igor Stravinsky can be located concretely through The Firebird, Petrushka, The Rite of Spring and later neoclassical and serial works. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1903",
            "title": "Anton Webern (1883–1945)",
            "description": "Anton Webern can be located concretely through concise twelve-tone works such as the Symphony Op. 21 and Variations Op. 30. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1905",
            "title": "Alban Berg (1885–1935)",
            "description": "Wozzeck, Lulu and the Violin Concerto provide concrete evidence of Alban Berg’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev (1891–1953)",
            "description": "Sergei Prokofiev’s representative achievements include Romeo and Juliet, the Classical Symphony and the Third Piano Concerto. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1912",
            "title": "Arthur Honegger (1892–1955)",
            "description": "A direct route into Arthur Honegger is Pacific 231 and Jeanne d’Arc au bûcher. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of modern and contemporary art music."
        },
        {
            "start": "1912",
            "title": "Darius Milhaud (1892–1974)",
            "description": "Darius Milhaud’s representative achievements include La création du monde and polytonal works shaped by jazz and Brazilian music. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1915",
            "title": "Carl Orff (1895–1982)",
            "description": "Carl Orff can be located concretely through Carmina Burana and the Orff Schulwerk approach to music education. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1915",
            "title": "Paul Hindemith (1895–1963)",
            "description": "Paul Hindemith’s representative achievements include Mathis der Maler, Ludus Tonalis and Gebrauchsmusik. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1918",
            "title": "George Gershwin (1898–1937)",
            "description": "George Gershwin’s representative achievements include Rhapsody in Blue, An American in Paris and Porgy and Bess. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1920",
            "title": "Aaron Copland (1900–1990)",
            "description": "Appalachian Spring, Billy the Kid and the Third Symphony provide concrete evidence of Aaron Copland’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich (1906–1975)",
            "description": "Dmitri Shostakovich can be located concretely through fifteen symphonies, fifteen string quartets and the opera Lady Macbeth of Mtsensk. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen (1908–1992)",
            "description": "Olivier Messiaen can be located concretely through Quartet for the End of Time, Turangalîla-Symphonie and Catalogue d’oiseaux. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1932",
            "title": "John Cage (1912–1992)",
            "description": "John Cage can be located concretely through 4′33″, prepared-piano works and chance procedures developed with the I Ching. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1933",
            "title": "Benjamin Britten (1913–1976)",
            "description": "Benjamin Britten’s representative achievements include Peter Grimes, War Requiem and The Young Person’s Guide to the Orchestra. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein (1918–1990)",
            "description": "Leonard Bernstein can be located concretely through West Side Story, the Jeremiah and Kaddish symphonies, and televised Young People’s Concerts. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1943",
            "title": "György Ligeti (1923–2006)",
            "description": "Atmosphères, Lux aeterna and the opera Le Grand Macabre provide concrete evidence of György Ligeti’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1945",
            "title": "Pierre Boulez (1925–2016)",
            "description": "Pierre Boulez’s representative achievements include Le Marteau sans maître, Structures and leadership at IRCAM. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen (1928–2007)",
            "description": "Karlheinz Stockhausen’s representative achievements include Gesang der Jünglinge, Kontakte and the Licht opera cycle. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu (1930–1996)",
            "description": "Tōru Takemitsu can be located concretely through November Steps, Requiem for Strings and film scores that blend Japanese and Western timbres. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of modern and contemporary art music."
        },
        {
            "start": "1955",
            "title": "Arvo Pärt (born 1935)",
            "description": "Tabula Rasa, Fratres and the tintinnabuli technique provide concrete evidence of Arvo Pärt’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1956",
            "title": "Steve Reich (born 1936)",
            "description": "It’s Gonna Rain, Music for 18 Musicians and Different Trains provide concrete evidence of Steve Reich’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1957",
            "title": "Philip Glass (born 1937)",
            "description": "Philip Glass’s representative achievements include Einstein on the Beach, Glassworks and repetitive additive-process writing. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1967",
            "title": "John Adams (born 1947)",
            "description": "A direct route into John Adams is Harmonielehre, Nixon in China and Short Ride in a Fast Machine. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of modern and contemporary art music."
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho (1952–2023)",
            "description": "Kaija Saariaho’s representative achievements include L’Amour de loin, Graal théâtre and spectral-electronic approaches to timbre. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1977",
            "title": "Tan Dun (born 1957)",
            "description": "Water Concerto, the opera The First Emperor and the score for Crouching Tiger, Hidden Dragon provide concrete evidence of Tan Dun’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in modern and contemporary art music."
        },
        {
            "start": "1981",
            "title": "Unsuk Chin (born 1961)",
            "description": "Unsuk Chin’s representative achievements include the Violin Concerto, Alice in Wonderland and vivid orchestral writing shaped by electronics. They preserve the artist’s work in composition, form and the organization of musical sound within modern and contemporary art music as material that can be heard, performed and studied directly."
        }
    ]
};

// Figures in blues, jazz, gospel, R&B, soul and funk
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin (1868–1917)",
            "description": "A direct route into Scott Joplin is Maple Leaf Rag and the opera Treemonisha. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1893",
            "title": "W. C. Handy (1873–1958)",
            "description": "St. Louis Blues and Memphis Blues, among the first widely published blues compositions provide concrete evidence of W. C. Handy’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in blues."
        },
        {
            "start": "1906",
            "title": "Ma Rainey (1886–1939)",
            "description": "See See Rider Blues and Prove It on Me Blues provide concrete evidence of Ma Rainey’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in blues."
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton (1890–1941)",
            "description": "Jelly Roll Morton’s representative achievements include Black Bottom Stomp, King Porter Stomp and the Red Hot Peppers recordings. They preserve the artist’s work in ensemble design, arranging and band sound within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1914",
            "title": "Bessie Smith (1894–1937)",
            "description": "Bessie Smith’s representative achievements include Downhearted Blues, St. Louis Blues and Nobody Knows You When You’re Down and Out. They preserve the artist’s work in vocal sound, phrasing and recorded performance within blues as material that can be heard, performed and studied directly."
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson (1897–1952)",
            "description": "Fletcher Henderson can be located concretely through arrangements such as Wrappin’ It Up that helped define big-band swing. Their treatment of ensemble design, arranging and band sound links an individual style to the wider development of jazz."
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford (1897–1952)",
            "description": "A direct route into Jimmie Lunceford is Rhythm Is Our Business and the band’s precise two-beat swing style. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1917",
            "title": "Sidney Bechet (1897–1959)",
            "description": "Sidney Bechet can be located concretely through Summertime and Blue Horizon, with a powerful soprano-saxophone voice. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of jazz."
        },
        {
            "start": "1919",
            "title": "Duke Ellington (1899–1974)",
            "description": "A direct route into Duke Ellington is Black and Tan Fantasy, Mood Indigo, Ko-Ko and extended suites such as Black, Brown and Beige. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1921",
            "title": "Louis Armstrong (1901–1971)",
            "description": "A direct route into Louis Armstrong is the Hot Five and Hot Seven recordings, West End Blues and later vocal hits. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke (1903–1931)",
            "description": "Bix Beiderbecke’s representative achievements include Singin’ the Blues and In a Mist. They preserve the artist’s work in instrumental technique, tone and improvisational language within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins (1904–1969)",
            "description": "Coleman Hawkins’s representative achievements include Body and Soul and the establishment of the tenor saxophone as a major jazz voice. They preserve the artist’s work in instrumental technique, tone and improvisational language within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1924",
            "title": "Count Basie (1904–1984)",
            "description": "A direct route into Count Basie is One O’Clock Jump, Jumpin’ at the Woodside and a rhythm-section-centered swing style. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1924",
            "title": "Fats Waller (1904–1943)",
            "description": "A direct route into Fats Waller is Ain’t Misbehavin’, Honeysuckle Rose and Harlem stride piano. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1929",
            "title": "Art Tatum (1909–1956)",
            "description": "Tea for Two and solo recordings that expanded jazz piano harmony and technique provide concrete evidence of Art Tatum’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in jazz."
        },
        {
            "start": "1930",
            "title": "Django Reinhardt (1910–1953)",
            "description": "Django Reinhardt’s representative achievements include Minor Swing, Nuages and the Quintette du Hot Club de France. They preserve the artist’s work in instrumental technique, tone and improvisational language within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf (1910–1976)",
            "description": "Smokestack Lightning, Spoonful and a commanding electric Chicago-blues sound provide concrete evidence of Howlin’ Wolf’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in blues."
        },
        {
            "start": "1930",
            "title": "T-Bone Walker (1910–1975)",
            "description": "T-Bone Walker can be located concretely through Call It Stormy Monday and early single-string electric-blues guitar. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of blues."
        },
        {
            "start": "1931",
            "title": "Robert Johnson (1911–1938)",
            "description": "A direct route into Robert Johnson is Cross Road Blues, Hellhound on My Trail and the 1936–37 sessions. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of blues."
        },
        {
            "start": "1933",
            "title": "Muddy Waters (1913–1983)",
            "description": "A direct route into Muddy Waters is Hoochie Coochie Man, Mannish Boy and the amplified Chicago-blues ensemble. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of blues."
        },
        {
            "start": "1935",
            "title": "Billie Holiday (1915–1959)",
            "description": "Billie Holiday can be located concretely through Strange Fruit, God Bless the Child and a behind-the-beat vocal phrasing style. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of jazz."
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe (1915–1973)",
            "description": "Sister Rosetta Tharpe’s representative achievements include Strange Things Happening Every Day and electric-guitar gospel performances. They preserve the artist’s work in instrumental technique, tone and improvisational language within gospel music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1936",
            "title": "Charlie Christian (1916–1942)",
            "description": "A direct route into Charlie Christian is Solo Flight and amplified-guitar work with Benny Goodman. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie (1917–1993)",
            "description": "Dizzy Gillespie’s representative achievements include A Night in Tunisia, Groovin’ High and Afro-Cuban collaborations with Chano Pozo. They preserve the artist’s work in ensemble design, arranging and band sound within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald (1917–1996)",
            "description": "the Song Book albums and virtuosic scat performances such as Mack the Knife live in Berlin provide concrete evidence of Ella Fitzgerald’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in jazz."
        },
        {
            "start": "1937",
            "title": "Thelonious Monk (1917–1982)",
            "description": "Thelonious Monk can be located concretely through Round Midnight, Straight, No Chaser and angular compositions built from silence and dissonance. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of jazz."
        },
        {
            "start": "1940",
            "title": "Charlie Parker (1920–1955)",
            "description": "A direct route into Charlie Parker is Ko-Ko, Ornithology and the rapid harmonic language of bebop alto saxophone. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1940",
            "title": "Dave Brubeck (1920–2012)",
            "description": "Time Out and Take Five, popularizing unusual meters in modern jazz provide concrete evidence of Dave Brubeck’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in jazz."
        },
        {
            "start": "1942",
            "title": "Charles Mingus (1922–1979)",
            "description": "A direct route into Charles Mingus is Mingus Ah Um, The Black Saint and the Sinner Lady and politically charged ensemble writing. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1944",
            "title": "Bud Powell (1924–1966)",
            "description": "Un Poco Loco and a bebop piano language modeled on horn phrasing provide concrete evidence of Bud Powell’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in jazz."
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan (1924–1990)",
            "description": "A direct route into Sarah Vaughan is Misty, Lullaby of Birdland and an unusually wide vocal range and harmonic control. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of jazz."
        },
        {
            "start": "1945",
            "title": "B. B. King (1925–2015)",
            "description": "A direct route into B. B. King is The Thrill Is Gone, Live at the Regal and the singing single-note guitar style associated with Lucille. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of blues."
        },
        {
            "start": "1946",
            "title": "John Coltrane (1926–1967)",
            "description": "John Coltrane can be located concretely through Giant Steps, My Favorite Things and A Love Supreme. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of jazz."
        },
        {
            "start": "1946",
            "title": "Miles Davis (1926–1991)",
            "description": "A direct route into Miles Davis is Birth of the Cool, Kind of Blue, Miles Smiles and Bitches Brew. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of jazz."
        },
        {
            "start": "1949",
            "title": "Bill Evans (1929–1980)",
            "description": "Bill Evans’s representative achievements include Sunday at the Village Vanguard and a conversational piano-trio concept. They preserve the artist’s work in instrumental technique, tone and improvisational language within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1949",
            "title": "Cecil Taylor (1929–2018)",
            "description": "Cecil Taylor can be located concretely through Unit Structures and percussive, densely organized free-jazz piano. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of jazz."
        },
        {
            "start": "1949",
            "title": "Chet Baker (1929–1988)",
            "description": "A direct route into Chet Baker is My Funny Valentine and the cool-jazz combination of trumpet and intimate vocals. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1950",
            "title": "Clifford Brown (1930–1986)",
            "description": "A direct route into Clifford Brown is Clifford Brown and Max Roach and a warm, technically exact trumpet style. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1950",
            "title": "Ornette Coleman (1930–2015)",
            "description": "Ornette Coleman’s representative achievements include The Shape of Jazz to Come and Free Jazz. They preserve the artist’s work in composition, form and the organization of musical sound within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1950",
            "title": "Ray Charles (1930–2004)",
            "description": "I Got a Woman, What’d I Say and Modern Sounds in Country and Western Music provide concrete evidence of Ray Charles’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in rhythm and blues."
        },
        {
            "start": "1950",
            "title": "Sonny Rollins (born 1930)",
            "description": "Saxophone Colossus, The Bridge and extended thematic improvisation provide concrete evidence of Sonny Rollins’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in jazz."
        },
        {
            "start": "1951",
            "title": "Sam Cooke (1931–1964)",
            "description": "You Send Me, Bring It On Home to Me and A Change Is Gonna Come provide concrete evidence of Sam Cooke’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in soul music."
        },
        {
            "start": "1953",
            "title": "James Brown (1933–2006)",
            "description": "James Brown’s representative achievements include Papa’s Got a Brand New Bag, Cold Sweat and the rhythmic foundations of funk. They preserve the artist’s work in vocal sound, phrasing and recorded performance within funk as material that can be heard, performed and studied directly."
        },
        {
            "start": "1953",
            "title": "Nina Simone (1933–2006)",
            "description": "A direct route into Nina Simone is I Put a Spell on You, Sinnerman and Mississippi Goddam. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of jazz."
        },
        {
            "start": "1953",
            "title": "Wayne Shorter (1933–2023)",
            "description": "Wayne Shorter can be located concretely through Speak No Evil, JuJu and compositions for Miles Davis’s second quintet and Weather Report. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of jazz."
        },
        {
            "start": "1959",
            "title": "Marvin Gaye (1939–1984)",
            "description": "Marvin Gaye can be located concretely through What’s Going On, Let’s Get It On and layered studio vocal production. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of soul music."
        },
        {
            "start": "1960",
            "title": "Herbie Hancock (born 1940)",
            "description": "Maiden Voyage, Head Hunters and Rockit provide concrete evidence of Herbie Hancock’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in jazz."
        },
        {
            "start": "1961",
            "title": "Chick Corea (1941–2021)",
            "description": "Chick Corea’s representative achievements include Now He Sings, Now He Sobs, Return to Forever and Spain. They preserve the artist’s work in instrumental technique, tone and improvisational language within jazz as material that can be heard, performed and studied directly."
        },
        {
            "start": "1961",
            "title": "George Clinton (born 1941)",
            "description": "George Clinton’s representative achievements include Mothership Connection, One Nation Under a Groove and the P-Funk mythology. They preserve the artist’s work in ensemble design, arranging and band sound within funk as material that can be heard, performed and studied directly."
        },
        {
            "start": "1961",
            "title": "Otis Redding (1941–1967)",
            "description": "Otis Redding’s representative achievements include These Arms of Mine, Try a Little Tenderness and (Sittin’ On) The Dock of the Bay. They preserve the artist’s work in vocal sound, phrasing and recorded performance within soul music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1962",
            "title": "Aretha Franklin (1942–2018)",
            "description": "Respect, Chain of Fools and Amazing Grace provide concrete evidence of Aretha Franklin’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in soul music."
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield (1942–1999)",
            "description": "A direct route into Curtis Mayfield is People Get Ready, Super Fly and socially conscious falsetto soul. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of soul music."
        },
        {
            "start": "1963",
            "title": "Sly Stone (born 1943)",
            "description": "A direct route into Sly Stone is Dance to the Music, Everyday People and There’s a Riot Goin’ On. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of funk."
        },
        {
            "start": "1965",
            "title": "Keith Jarrett (born 1945)",
            "description": "A direct route into Keith Jarrett is The Köln Concert and the Standards Trio. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of jazz."
        },
        {
            "start": "1966",
            "title": "Al Green (born 1946)",
            "description": "Tired of Being Alone, Let’s Stay Together and the Hi Records sound provide concrete evidence of Al Green’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in soul music."
        },
        {
            "start": "1970",
            "title": "Stevie Wonder (born 1950)",
            "description": "Stevie Wonder can be located concretely through Talking Book, Innervisions, Songs in the Key of Life and synthesizer-centered soul production. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of soul music."
        },
        {
            "start": "1974",
            "title": "Pat Metheny (born 1954)",
            "description": "Pat Metheny can be located concretely through Bright Size Life, the Pat Metheny Group and expansive guitar-synth textures. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of jazz."
        },
        {
            "start": "1978",
            "title": "Prince (1958–2016)",
            "description": "A direct route into Prince is Purple Rain, Sign o’ the Times and a multi-instrumental blend of funk, rock and pop. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of funk."
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis (born 1961)",
            "description": "Wynton Marsalis can be located concretely through Black Codes (From the Underground), Blood on the Fields and Jazz at Lincoln Center. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of jazz."
        },
        {
            "start": "1991",
            "title": "Erykah Badu (born 1971)",
            "description": "Erykah Badu’s representative achievements include Baduizm and Mama’s Gun. They preserve the artist’s work in vocal sound, phrasing and recorded performance within soul music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1994",
            "title": "D’Angelo (born 1974)",
            "description": "D’Angelo can be located concretely through Brown Sugar, Voodoo and Black Messiah. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of soul music."
        },
        {
            "start": "2001",
            "title": "Beyoncé (born 1981)",
            "description": "A direct route into Beyoncé is Crazy in Love, Lemonade, Renaissance and Cowboy Carter. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of rhythm and blues."
        },
        {
            "start": "2003",
            "title": "Amy Winehouse (1983–2011)",
            "description": "Frank, Back to Black and Rehab provide concrete evidence of Amy Winehouse’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in soul music."
        }
    ]
};

// Figures in rock, pop, country, hip-hop and electronic music
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers (1897–1933)",
            "description": "A direct route into Jimmie Rodgers is Blue Yodel No. 1 and the fusion of railroad song, blues and early country recording. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of country and roots music."
        },
        {
            "start": "1931",
            "title": "Bill Monroe (1911–1996)",
            "description": "Bill Monroe can be located concretely through Blue Moon of Kentucky and the Blue Grass Boys sound that named bluegrass. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of country and roots music."
        },
        {
            "start": "1932",
            "title": "Woody Guthrie (1912–1967)",
            "description": "This Land Is Your Land and the Dust Bowl Ballads provide concrete evidence of Woody Guthrie’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in folk and singer-songwriter music."
        },
        {
            "start": "1935",
            "title": "Frank Sinatra (1915–1998)",
            "description": "Frank Sinatra’s representative achievements include In the Wee Small Hours, Songs for Swingin’ Lovers! and microphone-centered phrasing. They preserve the artist’s work in vocal sound, phrasing and recorded performance within popular music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1935",
            "title": "Édith Piaf (1915–1963)",
            "description": "La Vie en rose, Hymne à l’amour and Non, je ne regrette rien provide concrete evidence of Édith Piaf’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in popular music."
        },
        {
            "start": "1939",
            "title": "Nat King Cole (1919–1965)",
            "description": "Nat King Cole can be located concretely through Unforgettable, Mona Lisa and the transition from jazz piano trio to pop vocal stardom. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of popular music."
        },
        {
            "start": "1939",
            "title": "Pete Seeger (1919–2014)",
            "description": "A direct route into Pete Seeger is If I Had a Hammer, Where Have All the Flowers Gone? and participatory folk performance. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of folk and singer-songwriter music."
        },
        {
            "start": "1943",
            "title": "Hank Williams (1923–1953)",
            "description": "Hank Williams’s representative achievements include Your Cheatin’ Heart, I’m So Lonesome I Could Cry and Lovesick Blues. They preserve the artist’s work in songwriting and a distinctive performance voice within country and roots music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1946",
            "title": "Chuck Berry (1926–2017)",
            "description": "Maybellene, Roll Over Beethoven and Johnny B. Goode provide concrete evidence of Chuck Berry’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1948",
            "title": "Bo Diddley (1928–2008)",
            "description": "Bo Diddley’s representative achievements include Bo Diddley, Who Do You Love? and the syncopated “Bo Diddley beat”. They preserve the artist’s work in songwriting and a distinctive performance voice within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1948",
            "title": "Fats Domino (1928–2017)",
            "description": "Fats Domino’s representative achievements include The Fat Man, Ain’t That a Shame and Blueberry Hill. They preserve the artist’s work in vocal sound, phrasing and recorded performance within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1952",
            "title": "Johnny Cash (1932–2003)",
            "description": "A direct route into Johnny Cash is I Walk the Line, Folsom Prison Blues and the prison concert albums. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of country and roots music."
        },
        {
            "start": "1952",
            "title": "Little Richard (1932–2020)",
            "description": "Little Richard can be located concretely through Tutti Frutti, Long Tall Sally and Good Golly, Miss Molly. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of rock."
        },
        {
            "start": "1952",
            "title": "Patsy Cline (1932–1963)",
            "description": "Patsy Cline’s representative achievements include Crazy, I Fall to Pieces and the Nashville Sound vocal style. They preserve the artist’s work in vocal sound, phrasing and recorded performance within country and roots music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1953",
            "title": "Willie Nelson (born 1933)",
            "description": "A direct route into Willie Nelson is Red Headed Stranger, Stardust and the outlaw-country movement. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of country and roots music."
        },
        {
            "start": "1954",
            "title": "Leonard Cohen (1934–2016)",
            "description": "Suzanne, Hallelujah and Songs of Love and Hate provide concrete evidence of Leonard Cohen’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in folk and singer-songwriter music."
        },
        {
            "start": "1954",
            "title": "The Isley Brothers formed",
            "description": "The Isley Brothers established its identity through the interaction of its early lineup and collective writing; Shout, Twist and Shout and 3 + 3 show how its arrangement, recording and live image developed."
        },
        {
            "start": "1955",
            "title": "Elvis Presley (1935–1977)",
            "description": "Elvis Presley can be located concretely through That’s All Right, Heartbreak Hotel and the 1968 Comeback Special. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of rock."
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis (1935–2022)",
            "description": "Whole Lotta Shakin’ Goin’ On and Great Balls of Fire provide concrete evidence of Jerry Lee Lewis’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in rock."
        },
        {
            "start": "1956",
            "title": "Buddy Holly (1936–1959)",
            "description": "Buddy Holly’s representative achievements include That’ll Be the Day, Peggy Sue and an influential self-contained rock-band model. They preserve the artist’s work in songwriting and a distinctive performance voice within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1956",
            "title": "Roy Orbison (1936–1988)",
            "description": "Only the Lonely, Crying and Oh, Pretty Woman provide concrete evidence of Roy Orbison’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in rock."
        },
        {
            "start": "1957",
            "title": "The Supremes formed",
            "description": "The Supremes established its identity through the interaction of its early lineup and collective writing; Where Did Our Love Go, You Can’t Hurry Love and a run of Motown No. 1 singles show how its arrangement, recording and live image developed."
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder (born 1940)",
            "description": "Giorgio Moroder’s representative achievements include I Feel Love with Donna Summer and synthesizer-driven disco production. They preserve the artist’s work in studio production, beat construction and sound design within electronic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1960",
            "title": "John Lennon (1940–1980)",
            "description": "A direct route into John Lennon is Strawberry Fields Forever, Imagine and Plastic Ono Band. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of rock."
        },
        {
            "start": "1960",
            "title": "Ringo Starr (born 1940)",
            "description": "Ringo Starr can be located concretely through the Beatles recordings, Photograph and a highly economical rock-drumming style. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of rock."
        },
        {
            "start": "1960",
            "title": "The Beatles formed",
            "description": "The Beatles established its identity through the interaction of its early lineup and collective writing; Please Please Me, Rubber Soul, Revolver, Sgt. Pepper and Abbey Road show how its arrangement, recording and live image developed."
        },
        {
            "start": "1961",
            "title": "Bob Dylan (born 1941)",
            "description": "Bob Dylan can be located concretely through Blowin’ in the Wind, Like a Rolling Stone, Highway 61 Revisited and Blood on the Tracks. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of folk and singer-songwriter music."
        },
        {
            "start": "1961",
            "title": "Joan Baez (born 1941)",
            "description": "Diamonds & Rust and a central role in the folk revival and civil-rights movement provide concrete evidence of Joan Baez’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in folk and singer-songwriter music."
        },
        {
            "start": "1961",
            "title": "The Beach Boys formed",
            "description": "The Beach Boys established its identity through the interaction of its early lineup and collective writing; Surfin’ U.S.A., Pet Sounds and Good Vibrations show how its arrangement, recording and live image developed."
        },
        {
            "start": "1962",
            "title": "Barbra Streisand (born 1942)",
            "description": "Barbra Streisand can be located concretely through People, The Way We Were and a career spanning Broadway, film and studio pop. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of popular music."
        },
        {
            "start": "1962",
            "title": "Brian Wilson (born 1942)",
            "description": "Brian Wilson’s representative achievements include Pet Sounds, Good Vibrations and densely layered vocal arrangements. They preserve the artist’s work in songwriting and a distinctive performance voice within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1962",
            "title": "Carole King (born 1942)",
            "description": "Carole King can be located concretely through Will You Love Me Tomorrow, (You Make Me Feel Like) A Natural Woman and Tapestry. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of popular music."
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix (1942–1970)",
            "description": "Jimi Hendrix can be located concretely through Are You Experienced, Electric Ladyland and the Woodstock Star-Spangled Banner. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of rock."
        },
        {
            "start": "1962",
            "title": "Paul McCartney (born 1942)",
            "description": "Paul McCartney’s representative achievements include Yesterday, Hey Jude, Band on the Run and a long post-Beatles songwriting career. They preserve the artist’s work in songwriting and a distinctive performance voice within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1962",
            "title": "The Rolling Stones formed",
            "description": "The Rolling Stones established its identity through the interaction of its early lineup and collective writing; (I Can’t Get No) Satisfaction, Beggars Banquet, Let It Bleed and Exile on Main St. show how its arrangement, recording and live image developed."
        },
        {
            "start": "1963",
            "title": "George Harrison (1943–2001)",
            "description": "George Harrison can be located concretely through While My Guitar Gently Weeps, Something and All Things Must Pass. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of rock."
        },
        {
            "start": "1963",
            "title": "Janis Joplin (1943–1970)",
            "description": "A direct route into Janis Joplin is Piece of My Heart, Ball and Chain and Pearl. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of rock."
        },
        {
            "start": "1963",
            "title": "Jim Morrison (1943–1971)",
            "description": "A direct route into Jim Morrison is Light My Fire, The End and the theatrical frontmanship of the Doors. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of rock."
        },
        {
            "start": "1963",
            "title": "Joni Mitchell (born 1943)",
            "description": "Blue, Court and Spark and Hejira provide concrete evidence of Joni Mitchell’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in folk and singer-songwriter music."
        },
        {
            "start": "1963",
            "title": "Keith Richards (born 1943)",
            "description": "A direct route into Keith Richards is the riffs of Satisfaction, Jumpin’ Jack Flash and Gimme Shelter. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of rock."
        },
        {
            "start": "1963",
            "title": "Mick Jagger (born 1943)",
            "description": "Mick Jagger’s representative achievements include the Rolling Stones catalogue and a performance style that defined the modern rock frontman. They preserve the artist’s work in vocal sound, phrasing and recorded performance within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1964",
            "title": "Jimmy Page (born 1944)",
            "description": "Jimmy Page can be located concretely through Led Zeppelin I–IV, Whole Lotta Love and Stairway to Heaven. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of rock."
        },
        {
            "start": "1964",
            "title": "The Who formed",
            "description": "The Who established its identity through the interaction of its early lineup and collective writing; My Generation, Tommy, Who’s Next and Quadrophenia show how its arrangement, recording and live image developed."
        },
        {
            "start": "1965",
            "title": "Debbie Harry (born 1945)",
            "description": "A direct route into Debbie Harry is Heart of Glass, Call Me and Blondie’s crossover between punk, disco and pop. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of punk and alternative rock."
        },
        {
            "start": "1965",
            "title": "Eric Clapton (born 1945)",
            "description": "Eric Clapton’s representative achievements include the Blues Breakers album, Layla and Unplugged. They preserve the artist’s work in instrumental technique, tone and improvisational language within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister (1945–2015)",
            "description": "Lemmy Kilmister’s representative achievements include Ace of Spades and Motörhead’s fast, distorted bridge between punk and metal. They preserve the artist’s work in vocal sound, phrasing and recorded performance within heavy metal as material that can be heard, performed and studied directly."
        },
        {
            "start": "1965",
            "title": "Pink Floyd formed",
            "description": "Pink Floyd established its identity through the interaction of its early lineup and collective writing; The Dark Side of the Moon, Wish You Were Here and The Wall show how its arrangement, recording and live image developed."
        },
        {
            "start": "1965",
            "title": "The Doors formed",
            "description": "The Doors established its identity through the interaction of its early lineup and collective writing; The Doors, Light My Fire, The End and L.A. Woman show how its arrangement, recording and live image developed."
        },
        {
            "start": "1966",
            "title": "Dolly Parton (born 1946)",
            "description": "Dolly Parton’s representative achievements include Jolene, I Will Always Love You and Coat of Many Colors. They preserve the artist’s work in songwriting and a distinctive performance voice within country and roots music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1966",
            "title": "Freddie Mercury (1946–1991)",
            "description": "Bohemian Rhapsody, Somebody to Love and Queen’s Live Aid performance provide concrete evidence of Freddie Mercury’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in rock."
        },
        {
            "start": "1966",
            "title": "Patti Smith (born 1946)",
            "description": "Patti Smith can be located concretely through Horses and Because the Night. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of punk and alternative rock."
        },
        {
            "start": "1966",
            "title": "The Velvet Underground formed",
            "description": "The Velvet Underground established its identity through the interaction of its early lineup and collective writing; The Velvet Underground & Nico and White Light/White Heat show how its arrangement, recording and live image developed."
        },
        {
            "start": "1967",
            "title": "Brian May (born 1947)",
            "description": "Brian May can be located concretely through Bohemian Rhapsody, We Will Rock You and the layered Red Special guitar sound. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of rock."
        },
        {
            "start": "1967",
            "title": "Carlos Santana (born 1947)",
            "description": "Soul Sacrifice at Woodstock, Abraxas and Supernatural provide concrete evidence of Carlos Santana’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in rock."
        },
        {
            "start": "1967",
            "title": "David Bowie (1947–2016)",
            "description": "Space Oddity, The Rise and Fall of Ziggy Stardust, Low and Blackstar provide concrete evidence of David Bowie’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1967",
            "title": "Elton John (born 1947)",
            "description": "A direct route into Elton John is Your Song, Goodbye Yellow Brick Road and a long partnership with Bernie Taupin. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of popular music."
        },
        {
            "start": "1967",
            "title": "Iggy Pop (born 1947)",
            "description": "Iggy Pop can be located concretely through the Stooges albums, Lust for Life and an extreme stage persona central to punk history. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of punk and alternative rock."
        },
        {
            "start": "1968",
            "title": "Black Sabbath formed",
            "description": "Black Sabbath established its identity through the interaction of its early lineup and collective writing; Black Sabbath, Paranoid and Master of Reality show how its arrangement, recording and live image developed."
        },
        {
            "start": "1968",
            "title": "Brian Eno (born 1948)",
            "description": "Roxy Music, Another Green World, Ambient 1 and production for Bowie, Talking Heads and U2 provide concrete evidence of Brian Eno’s historical position: the point is not fame alone, but how these materials changed studio production, beat construction and sound design in electronic music."
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre (born 1948)",
            "description": "A direct route into Jean-Michel Jarre is Oxygène, Équinoxe and large-scale outdoor electronic concerts. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of electronic music."
        },
        {
            "start": "1968",
            "title": "Led Zeppelin formed",
            "description": "Led Zeppelin established its identity through the interaction of its early lineup and collective writing; Led Zeppelin I–IV, Physical Graffiti and Kashmir show how its arrangement, recording and live image developed."
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne (born 1948)",
            "description": "A direct route into Ozzy Osbourne is Black Sabbath’s early albums, Blizzard of Ozz and Crazy Train. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of heavy metal."
        },
        {
            "start": "1968",
            "title": "Robert Plant (born 1948)",
            "description": "A direct route into Robert Plant is Whole Lotta Love, Stairway to Heaven and later roots-music collaborations. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of rock."
        },
        {
            "start": "1968",
            "title": "Stevie Nicks (born 1948)",
            "description": "Stevie Nicks’s representative achievements include Rhiannon, Dreams, Edge of Seventeen and Fleetwood Mac’s Rumours. They preserve the artist’s work in songwriting and a distinctive performance voice within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1968",
            "title": "Tony Iommi (born 1948)",
            "description": "A direct route into Tony Iommi is the low-tuned riffs of Black Sabbath, Paranoid and Master of Reality. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of heavy metal."
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen (born 1949)",
            "description": "Bruce Springsteen can be located concretely through Born to Run, Darkness on the Edge of Town and Born in the U.S.A.. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of rock."
        },
        {
            "start": "1970",
            "title": "Kraftwerk formed",
            "description": "Kraftwerk established its identity through the interaction of its early lineup and collective writing; Autobahn, Trans-Europe Express, The Man-Machine and Computer World show how its arrangement, recording and live image developed."
        },
        {
            "start": "1970",
            "title": "Peter Gabriel (born 1950)",
            "description": "Genesis-era concept performances, So and the Real World label provide concrete evidence of Peter Gabriel’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1970",
            "title": "Queen formed",
            "description": "Queen established its identity through the interaction of its early lineup and collective writing; A Night at the Opera, Bohemian Rhapsody, We Will Rock You and Live Aid show how its arrangement, recording and live image developed."
        },
        {
            "start": "1970",
            "title": "Tom Petty (1950–2017)",
            "description": "American Girl, Damn the Torpedoes and Full Moon Fever provide concrete evidence of Tom Petty’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1971",
            "title": "Eagles formed",
            "description": "Eagles established its identity through the interaction of its early lineup and collective writing; Desperado, Hotel California and Their Greatest Hits 1971–1975 show how its arrangement, recording and live image developed."
        },
        {
            "start": "1971",
            "title": "Joey Ramone (1951–2001)",
            "description": "A direct route into Joey Ramone is Blitzkrieg Bop, Sheena Is a Punk Rocker and the Ramones’ stripped-down vocal style. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of punk and alternative rock."
        },
        {
            "start": "1972",
            "title": "David Byrne (born 1952)",
            "description": "David Byrne’s representative achievements include Talking Heads: 77, Remain in Light and Stop Making Sense. They preserve the artist’s work in songwriting and a distinctive performance voice within punk and alternative rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1974",
            "title": "Ramones formed",
            "description": "Ramones established its identity through the interaction of its early lineup and collective writing; Ramones, Rocket to Russia and the short-fast-loud template of punk show how its arrangement, recording and live image developed."
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc (born 1955)",
            "description": "A direct route into DJ Kool Herc is the 1973 Bronx party tradition and breakbeat extension with two turntables. These works show how the artist handled turntable technique, break organization and live culture and how that practice entered the working language of hip-hop."
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen (1955–2020)",
            "description": "Eddie Van Halen’s representative achievements include Eruption, Van Halen and a two-handed tapping vocabulary for rock guitar. They preserve the artist’s work in instrumental technique, tone and improvisational language within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1975",
            "title": "Sex Pistols formed",
            "description": "Sex Pistols established its identity through the interaction of its early lineup and collective writing; Anarchy in the U.K., God Save the Queen and Never Mind the Bollocks show how its arrangement, recording and live image developed."
        },
        {
            "start": "1976",
            "title": "Johnny Rotten (born 1956)",
            "description": "Anarchy in the U.K., Never Mind the Bollocks and Public Image Ltd. provide concrete evidence of Johnny Rotten’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in punk and alternative rock."
        },
        {
            "start": "1976",
            "title": "Joy Division formed",
            "description": "Joy Division established its identity through the interaction of its early lineup and collective writing; Unknown Pleasures, Closer and Love Will Tear Us Apart show how its arrangement, recording and live image developed."
        },
        {
            "start": "1976",
            "title": "The Clash formed",
            "description": "The Clash established its identity through the interaction of its early lineup and collective writing; The Clash, London Calling and Sandinista! show how its arrangement, recording and live image developed."
        },
        {
            "start": "1976",
            "title": "U2 formed",
            "description": "U2 established its identity through the interaction of its early lineup and collective writing; War, The Joshua Tree, Achtung Baby and large-scale multimedia tours show how its arrangement, recording and live image developed."
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa (born 1957)",
            "description": "Afrika Bambaataa’s representative achievements include Planet Rock and the Universal Zulu Nation. They preserve the artist’s work in turntable technique, break organization and live culture within hip-hop as material that can be heard, performed and studied directly."
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux (born 1957)",
            "description": "A direct route into Siouxsie Sioux is Hong Kong Garden, Juju and a major post-punk/goth vocal identity. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of punk and alternative rock."
        },
        {
            "start": "1977",
            "title": "Talking Heads formed",
            "description": "Talking Heads established its identity through the interaction of its early lineup and collective writing; Talking Heads: 77, Fear of Music, Remain in Light and Stop Making Sense show how its arrangement, recording and live image developed."
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash (born 1958)",
            "description": "The Adventures of Grandmaster Flash on the Wheels of Steel and The Message provide concrete evidence of Grandmaster Flash’s historical position: the point is not fame alone, but how these materials changed turntable technique, break organization and live culture in hip-hop."
        },
        {
            "start": "1978",
            "title": "Kate Bush (born 1958)",
            "description": "Kate Bush can be located concretely through Wuthering Heights, Hounds of Love and Running Up That Hill. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of popular music."
        },
        {
            "start": "1978",
            "title": "Madonna (born 1958)",
            "description": "Like a Virgin, Like a Prayer, Vogue and Ray of Light provide concrete evidence of Madonna’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in popular music."
        },
        {
            "start": "1978",
            "title": "Michael Jackson (1958–2009)",
            "description": "Michael Jackson’s representative achievements include Off the Wall, Thriller, Bad and landmark music videos such as Billie Jean and Thriller. They preserve the artist’s work in vocal sound, phrasing and recorded performance within popular music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1978",
            "title": "The Cure formed",
            "description": "The Cure established its identity through the interaction of its early lineup and collective writing; Seventeen Seconds, Pornography, Disintegration and Just Like Heaven show how its arrangement, recording and live image developed."
        },
        {
            "start": "1979",
            "title": "Morrissey (born 1959)",
            "description": "A direct route into Morrissey is The Smiths catalogue and solo songs such as Everyday Is Like Sunday. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of punk and alternative rock."
        },
        {
            "start": "1979",
            "title": "Robert Smith (born 1959)",
            "description": "Robert Smith can be located concretely through A Forest, Just Like Heaven, Disintegration and the Cure’s distinctive guitar textures. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of punk and alternative rock."
        },
        {
            "start": "1980",
            "title": "Chuck D (born 1960)",
            "description": "Public Enemy’s It Takes a Nation of Millions to Hold Us Back and Fear of a Black Planet provide concrete evidence of Chuck D’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in hip-hop."
        },
        {
            "start": "1981",
            "title": "Metallica formed",
            "description": "Metallica established its identity through the interaction of its early lineup and collective writing; Kill ’Em All, Master of Puppets and Metallica (The Black Album) show how its arrangement, recording and live image developed."
        },
        {
            "start": "1983",
            "title": "George Michael (born 1963)",
            "description": "George Michael’s representative achievements include Faith, Listen Without Prejudice Vol. 1 and Careless Whisper. They preserve the artist’s work in vocal sound, phrasing and recorded performance within popular music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1983",
            "title": "James Hetfield (born 1963)",
            "description": "A direct route into James Hetfield is Master of Puppets, One and Enter Sandman. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of heavy metal."
        },
        {
            "start": "1983",
            "title": "Johnny Marr (born 1963)",
            "description": "Johnny Marr’s representative achievements include This Charming Man, How Soon Is Now? and the Smiths’ layered guitar writing. They preserve the artist’s work in instrumental technique, tone and improvisational language within punk and alternative rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1983",
            "title": "Lars Ulrich (born 1963)",
            "description": "A direct route into Lars Ulrich is Metallica’s thrash-era albums and a major role in arranging the band’s long-form songs. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of heavy metal."
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. formed",
            "description": "Run-D.M.C. established its identity through the interaction of its early lineup and collective writing; Run-D.M.C., Raising Hell and Walk This Way with Aerosmith show how its arrangement, recording and live image developed."
        },
        {
            "start": "1983",
            "title": "Whitney Houston (born 1963)",
            "description": "Whitney Houston’s representative achievements include How Will I Know, I Wanna Dance with Somebody and I Will Always Love You. They preserve the artist’s work in vocal sound, phrasing and recorded performance within popular music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1985",
            "title": "Björk (born 1965)",
            "description": "Björk can be located concretely through Debut, Homogenic, Vespertine and Biophilia. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of electronic music."
        },
        {
            "start": "1985",
            "title": "Dr. Dre (born 1965)",
            "description": "Dr. Dre can be located concretely through Straight Outta Compton, The Chronic and production for Snoop Dogg, Eminem and others. Their treatment of studio production, beat construction and sound design links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1985",
            "title": "KRS-One (born 1965)",
            "description": "KRS-One can be located concretely through Criminal Minded, By All Means Necessary and the Stop the Violence movement. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1985",
            "title": "Radiohead formed",
            "description": "Radiohead established its identity through the interaction of its early lineup and collective writing; The Bends, OK Computer, Kid A and In Rainbows show how its arrangement, recording and live image developed."
        },
        {
            "start": "1986",
            "title": "Janet Jackson (born 1966)",
            "description": "Janet Jackson can be located concretely through Control, Rhythm Nation 1814 and The Velvet Rope. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of popular music."
        },
        {
            "start": "1987",
            "title": "Kurt Cobain (1967–1994)",
            "description": "Smells Like Teen Spirit, Nevermind and In Utero provide concrete evidence of Kurt Cobain’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1987",
            "title": "Nirvana formed",
            "description": "Nirvana established its identity through the interaction of its early lineup and collective writing; Bleach, Nevermind, In Utero and MTV Unplugged in New York show how its arrangement, recording and live image developed."
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest formed",
            "description": "A Tribe Called Quest established its identity through the interaction of its early lineup and collective writing; The Low End Theory, Midnight Marauders and jazz-based sampling show how its arrangement, recording and live image developed."
        },
        {
            "start": "1988",
            "title": "Celine Dion (born 1968)",
            "description": "The Power of Love, Falling into You and My Heart Will Go On provide concrete evidence of Celine Dion’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in popular music."
        },
        {
            "start": "1988",
            "title": "LL Cool J (born 1968)",
            "description": "LL Cool J can be located concretely through Radio, Mama Said Knock You Out and I Need Love. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1988",
            "title": "Massive Attack formed",
            "description": "Massive Attack established its identity through the interaction of its early lineup and collective writing; Blue Lines, Protection and Mezzanine show how its arrangement, recording and live image developed."
        },
        {
            "start": "1988",
            "title": "Rakim (born 1968)",
            "description": "Rakim’s representative achievements include Paid in Full and Follow the Leader, with internal rhyme and calm, complex flow. They preserve the artist’s work in vocal sound, phrasing and recorded performance within hip-hop as material that can be heard, performed and studied directly."
        },
        {
            "start": "1988",
            "title": "Thom Yorke (born 1968)",
            "description": "OK Computer, Kid A, In Rainbows and The Eraser provide concrete evidence of Thom Yorke’s historical position: the point is not fame alone, but how these materials changed songwriting and a distinctive performance voice in rock."
        },
        {
            "start": "1989",
            "title": "Dave Grohl (born 1969)",
            "description": "Dave Grohl’s representative achievements include Nirvana’s Nevermind and In Utero, then Foo Fighters albums beginning in 1995. They preserve the artist’s work in instrumental technique, tone and improvisational language within rock as material that can be heard, performed and studied directly."
        },
        {
            "start": "1989",
            "title": "Ice Cube (born 1969)",
            "description": "Ice Cube’s representative achievements include Straight Outta Compton, AmeriKKKa’s Most Wanted and Death Certificate. They preserve the artist’s work in vocal sound, phrasing and recorded performance within hip-hop as material that can be heard, performed and studied directly."
        },
        {
            "start": "1989",
            "title": "Jay-Z (born 1969)",
            "description": "Jay-Z can be located concretely through Reasonable Doubt, The Blueprint and 4:44. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1989",
            "title": "Mariah Carey (born 1969)",
            "description": "Vision of Love, Daydream and The Emancipation of Mimi provide concrete evidence of Mariah Carey’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in popular music."
        },
        {
            "start": "1991",
            "title": "Aphex Twin (born 1971)",
            "description": "Aphex Twin’s representative achievements include Selected Ambient Works 85–92, Richard D. James Album and Come to Daddy. They preserve the artist’s work in studio production, beat construction and sound design within electronic music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1991",
            "title": "Missy Elliott (born 1971)",
            "description": "Supa Dupa Fly, Get Ur Freak On and Work It provide concrete evidence of Missy Elliott’s historical position: the point is not fame alone, but how these materials changed studio production, beat construction and sound design in hip-hop."
        },
        {
            "start": "1991",
            "title": "Oasis formed",
            "description": "Oasis established its identity through the interaction of its early lineup and collective writing; Definitely Maybe, (What’s the Story) Morning Glory? and Wonderwall show how its arrangement, recording and live image developed."
        },
        {
            "start": "1991",
            "title": "Tupac Shakur (1971–1996)",
            "description": "Tupac Shakur can be located concretely through Me Against the World, All Eyez on Me and Changes. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1992",
            "title": "Eminem (born 1972)",
            "description": "Eminem can be located concretely through The Slim Shady LP, The Marshall Mathers LP and Lose Yourself. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G. (1972–1997)",
            "description": "The Notorious B.I.G. can be located concretely through Ready to Die, Life After Death and Juicy. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of hip-hop."
        },
        {
            "start": "1993",
            "title": "Daft Punk formed",
            "description": "Daft Punk established its identity through the interaction of its early lineup and collective writing; Homework, Discovery, Alive 2007 and Random Access Memories show how its arrangement, recording and live image developed."
        },
        {
            "start": "1993",
            "title": "Nas (born 1973)",
            "description": "Illmatic, It Was Written and the narrative style of N.Y. State of Mind provide concrete evidence of Nas’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in hip-hop."
        },
        {
            "start": "1995",
            "title": "Lauryn Hill (born 1975)",
            "description": "Lauryn Hill’s representative achievements include The Score with the Fugees and The Miseducation of Lauryn Hill. They preserve the artist’s work in vocal sound, phrasing and recorded performance within hip-hop as material that can be heard, performed and studied directly."
        },
        {
            "start": "1995",
            "title": "M.I.A. (born 1975)",
            "description": "A direct route into M.I.A. is Arular, Kala and Paper Planes. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of electronic music."
        },
        {
            "start": "1995",
            "title": "The White Stripes formed",
            "description": "The White Stripes established its identity through the interaction of its early lineup and collective writing; White Blood Cells, Elephant and Seven Nation Army show how its arrangement, recording and live image developed."
        },
        {
            "start": "1997",
            "title": "Kanye West (born 1977)",
            "description": "Kanye West can be located concretely through The College Dropout, 808s & Heartbreak and My Beautiful Dark Twisted Fantasy. Their treatment of studio production, beat construction and sound design links an individual style to the wider development of hip-hop."
        },
        {
            "start": "2002",
            "title": "Nicki Minaj (born 1982)",
            "description": "A direct route into Nicki Minaj is Pink Friday, Monster and a highly theatrical, multi-voice rap delivery. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of hip-hop."
        },
        {
            "start": "2006",
            "title": "Lady Gaga (born 1986)",
            "description": "The Fame, Bad Romance, Born This Way and A Star Is Born provide concrete evidence of Lady Gaga’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in popular music."
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar (born 1987)",
            "description": "Kendrick Lamar’s representative achievements include good kid, m.A.A.d city, To Pimp a Butterfly, DAMN. and Mr. Morale & the Big Steppers. They preserve the artist’s work in vocal sound, phrasing and recorded performance within hip-hop as material that can be heard, performed and studied directly."
        },
        {
            "start": "2008",
            "title": "Adele (born 1988)",
            "description": "Adele can be located concretely through 19, 21, 25 and 30. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of popular music."
        },
        {
            "start": "2009",
            "title": "Taylor Swift (born 1989)",
            "description": "Taylor Swift’s representative achievements include Fearless, Red, 1989, folklore and the Eras Tour catalogue project. They preserve the artist’s work in songwriting and a distinctive performance voice within popular music as material that can be heard, performed and studied directly."
        },
        {
            "start": "2021",
            "title": "Billie Eilish (born 2001)",
            "description": "Billie Eilish can be located concretely through When We All Fall Asleep, Where Do We Go?, Happier Than Ever and intimate close-miked production. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of popular music."
        }
    ]
};

// Global and regional music figures
var tl_global_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1273",
            "title": "Amir Khusrau (1253–1325)",
            "description": "Amir Khusrau’s representative achievements include Persian-Hindavi poetry, devotional song traditions and a lasting association with qawwali. They preserve the artist’s work in composition, form and the organization of musical sound within South Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1520",
            "title": "Tansen (1500–1586)",
            "description": "A direct route into Tansen is dhrupad repertory at Akbar’s court and ragas traditionally linked to his name. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of South Asian music."
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu (1536–1611)",
            "description": "A direct route into Zhu Zaiyu is the 1584 calculation of twelve-tone equal temperament by precise mathematical ratios. These works show how the artist handled theory, notation and ideas about music and how that practice entered the working language of East Asian music."
        },
        {
            "start": "1782",
            "title": "Syama Sastri (1762–1827)",
            "description": "A direct route into Syama Sastri is the kritis and svarajatis that form one part of the Carnatic Trinity repertory. These works show how the artist handled composition, form and the organization of musical sound and how that practice entered the working language of South Asian music."
        },
        {
            "start": "1787",
            "title": "Tyagaraja (1767–1847)",
            "description": "Tyagaraja’s representative achievements include hundreds of Telugu kritis, including the Pancharatna Kritis. They preserve the artist’s work in composition, form and the organization of musical sound within South Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar (1775–1835)",
            "description": "Muthuswami Dikshitar can be located concretely through Sanskrit kritis, the Kamalamba Navavarna cycle and broad raga coverage. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of South Asian music."
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing) (1889–1935)",
            "description": "A direct route into Hua Yanjun (Abing) is Erquan Yingyue and a small but foundational recorded erhu and pipa repertory. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of East Asian music."
        },
        {
            "start": "1910",
            "title": "Carlos Gardel (1890–1935)",
            "description": "Carlos Gardel can be located concretely through Mi noche triste, El día que me quieras and the international image of tango song. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of Latin American music."
        },
        {
            "start": "1915",
            "title": "Liu Tianhua (1895–1932)",
            "description": "Liu Tianhua’s representative achievements include Moon Night, Brightness Walk and the modernization of erhu technique and notation. They preserve the artist’s work in composition, form and the organization of musical sound within East Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1918",
            "title": "Umm Kulthum (1898–1975)",
            "description": "A direct route into Umm Kulthum is Enta Omri, Al Atlal and long-form Arabic concert song. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of Middle Eastern and North African music."
        },
        {
            "start": "1925",
            "title": "Xian Xinghai (1905–1945)",
            "description": "Xian Xinghai’s representative achievements include Yellow River Cantata and mass songs composed during wartime China. They preserve the artist’s work in composition, form and the organization of musical sound within East Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1932",
            "title": "Nie Er (1912–1935)",
            "description": "Nie Er can be located concretely through March of the Volunteers and early Chinese film songs. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of East Asian music."
        },
        {
            "start": "1936",
            "title": "Bismillah Khan (1916–2016)",
            "description": "Bismillah Khan can be located concretely through the elevation of the shehnai from ceremonial use to the Hindustani concert stage. Their treatment of instrumental technique, tone and improvisational language links an individual style to the wider development of South Asian music."
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi (1916–2004)",
            "description": "devotional recordings, Carnatic concerts and a landmark 1966 UN performance provide concrete evidence of M. S. Subbulakshmi’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in South Asian music."
        },
        {
            "start": "1936",
            "title": "Ravi Shankar (1916–2013)",
            "description": "sitar concert repertory, collaborations with Yehudi Menuhin and influence on 1960s rock audiences provide concrete evidence of Ravi Shankar’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in South Asian music."
        },
        {
            "start": "1938",
            "title": "Zhou Xuan (1918–1957)",
            "description": "The Wandering Songstress and Shanghai film-song recordings of the 1930s–40s provide concrete evidence of Zhou Xuan’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in East Asian music."
        },
        {
            "start": "1939",
            "title": "Chavela Vargas (1919–2012)",
            "description": "Chavela Vargas’s representative achievements include La Llorona and stripped-down ranchera interpretation. They preserve the artist’s work in vocal sound, phrasing and recorded performance within Latin American music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan (1920–2012)",
            "description": "A direct route into Ali Akbar Khan is sarod recordings and the Ali Akbar College of Music. These works show how the artist handled instrumental technique, tone and improvisational language and how that practice entered the working language of South Asian music."
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla (1921–1992)",
            "description": "Astor Piazzolla can be located concretely through Adiós Nonino, Libertango and tango nuevo. Their treatment of composition, form and the organization of musical sound links an individual style to the wider development of Latin American music."
        },
        {
            "start": "1943",
            "title": "Tito Puente (1923–2000)",
            "description": "A direct route into Tito Puente is Oye Como Va, Dance Mania and the timbales-led mambo/salsa orchestra. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of Latin American music."
        },
        {
            "start": "1945",
            "title": "Celia Cruz (1925–2003)",
            "description": "Quimbara, La Vida Es un Carnaval and the Fania-era salsa sound provide concrete evidence of Celia Cruz’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in Latin American music."
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim (1927–1994)",
            "description": "The Girl from Ipanema, Desafinado and Wave provide concrete evidence of Antônio Carlos Jobim’s historical position: the point is not fame alone, but how these materials changed composition, form and the organization of musical sound in Latin American music."
        },
        {
            "start": "1951",
            "title": "João Gilberto (1931–2019)",
            "description": "João Gilberto can be located concretely through Chega de Saudade and the intimate guitar-vocal pulse of bossa nova. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of Latin American music."
        },
        {
            "start": "1952",
            "title": "Miriam Makeba (1932–2008)",
            "description": "Miriam Makeba’s representative achievements include Pata Pata, The Click Song and international anti-apartheid advocacy. They preserve the artist’s work in vocal sound, phrasing and recorded performance within African popular and traditional music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1954",
            "title": "Fairuz (born 1934)",
            "description": "A direct route into Fairuz is Li Beirut and a vast Rahbani repertory central to modern Lebanese song. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of Middle Eastern and North African music."
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa (1935–2009)",
            "description": "Gracias a la Vida, Alfonsina y el Mar and the nueva canción movement provide concrete evidence of Mercedes Sosa’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in Latin American music."
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry (1936–2021)",
            "description": "A direct route into Lee “Scratch” Perry is Black Ark productions, Super Ape and experimental dub studio practice. These works show how the artist handled studio production, beat construction and sound design and how that practice entered the working language of reggae and Jamaican music."
        },
        {
            "start": "1957",
            "title": "Hibari Misora (1937–1989)",
            "description": "Kawa no Nagare no Yō ni, Kanashii Sake and postwar enka/kayōkyoku stardom provide concrete evidence of Hibari Misora’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in East Asian music."
        },
        {
            "start": "1958",
            "title": "Fela Kuti (1938–1997)",
            "description": "A direct route into Fela Kuti is Zombie, Expensive Shit and long-form Afrobeat built from horns, guitars and political lyrics. These works show how the artist handled ensemble design, arranging and band sound and how that practice entered the working language of African popular and traditional music."
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré (1939–2006)",
            "description": "Savane, Talking Timbuktu and a guitar style linking Malian song to blues listeners provide concrete evidence of Ali Farka Touré’s historical position: the point is not fame alone, but how these materials changed instrumental technique, tone and improvisational language in African popular and traditional music."
        },
        {
            "start": "1961",
            "title": "Cesária Évora (1941–2011)",
            "description": "A direct route into Cesária Évora is Sodade and the international popularization of Cape Verdean morna. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of African popular and traditional music."
        },
        {
            "start": "1962",
            "title": "Caetano Veloso (born 1942)",
            "description": "Caetano Veloso can be located concretely through Tropicália, Transa and a career joining Brazilian song, avant-garde ideas and politics. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of Latin American music."
        },
        {
            "start": "1962",
            "title": "Gilberto Gil (born 1942)",
            "description": "Gilberto Gil’s representative achievements include Expresso 2222, Refazenda and a central role in Tropicália and MPB. They preserve the artist’s work in songwriting and a distinctive performance voice within Latin American music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1962",
            "title": "Milton Nascimento (born 1942)",
            "description": "Milton Nascimento’s representative achievements include Clube da Esquina and Travessia. They preserve the artist’s work in songwriting and a distinctive performance voice within Latin American music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff (born 1944)",
            "description": "Many Rivers to Cross, The Harder They Come and You Can Get It If You Really Want provide concrete evidence of Jimmy Cliff’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in reggae and Jamaican music."
        },
        {
            "start": "1964",
            "title": "Peter Tosh (1944–1987)",
            "description": "Legalize It, Equal Rights and work with the Wailers provide concrete evidence of Peter Tosh’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in reggae and Jamaican music."
        },
        {
            "start": "1965",
            "title": "Bob Marley (1945–1981)",
            "description": "A direct route into Bob Marley is Catch a Fire, Exodus, No Woman, No Cry and Redemption Song. These works show how the artist handled songwriting and a distinctive performance voice and how that practice entered the working language of reggae and Jamaican music."
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan (1948–1997)",
            "description": "A direct route into Nusrat Fateh Ali Khan is Allah Hoo, Mustt Mustt and extended qawwali improvisation. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of South Asian music."
        },
        {
            "start": "1969",
            "title": "Salif Keita (born 1949)",
            "description": "A direct route into Salif Keita is Soro, Moffou and a high-register voice central to modern Malian pop. These works show how the artist handled vocal sound, phrasing and recorded performance and how that practice entered the working language of African popular and traditional music."
        },
        {
            "start": "1970",
            "title": "Juan Gabriel (1950–2016)",
            "description": "Juan Gabriel’s representative achievements include Querida, Amor Eterno and a vast Mexican popular-song catalogue. They preserve the artist’s work in songwriting and a distinctive performance voice within Latin American music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1971",
            "title": "Zakir Hussain (1951–2024)",
            "description": "Zakir Hussain’s representative achievements include tabla solo performance, Shakti and cross-cultural percussion collaborations. They preserve the artist’s work in instrumental technique, tone and improvisational language within South Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto (1952–2023)",
            "description": "Ryuichi Sakamoto’s representative achievements include Yellow Magic Orchestra, Thousand Knives, Merry Christmas Mr. Lawrence and The Last Emperor. They preserve the artist’s work in composition, form and the organization of musical sound within East Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1973",
            "title": "Kitarō (born 1953)",
            "description": "Kitarō’s representative achievements include Silk Road, Kojiki and synthesizer-based new-age soundscapes. They preserve the artist’s work in composition, form and the organization of musical sound within East Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1973",
            "title": "Teresa Teng (1953–1995)",
            "description": "The Moon Represents My Heart, Sweet as Honey and multilingual East Asian pop recordings provide concrete evidence of Teresa Teng’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in East Asian music."
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra formed",
            "description": "Yellow Magic Orchestra established its identity through the interaction of its early lineup and collective writing; Yellow Magic Orchestra, Solid State Survivor and Technodelic show how its arrangement, recording and live image developed."
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour (born 1959)",
            "description": "Youssou N’Dour’s representative achievements include Immigrés, 7 Seconds and the mbalax style. They preserve the artist’s work in vocal sound, phrasing and recorded performance within African popular and traditional music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo (born 1960)",
            "description": "Angélique Kidjo’s representative achievements include Agolo, Wombo Lombo and multilingual reinterpretations of African and global repertoire. They preserve the artist’s work in vocal sound, phrasing and recorded performance within African popular and traditional music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1989",
            "title": "Faye Wong (born 1969)",
            "description": "Faye Wong’s representative achievements include Random Thoughts, Sky and a vocal style linking Cantopop/Mandopop with alternative pop. They preserve the artist’s work in vocal sound, phrasing and recorded performance within East Asian music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1991",
            "title": "Selena (1971–1995)",
            "description": "Selena’s representative achievements include Como la Flor, Amor Prohibido and Dreaming of You. They preserve the artist’s work in vocal sound, phrasing and recorded performance within Latin American music as material that can be heard, performed and studied directly."
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys formed",
            "description": "Seo Taiji and Boys established its identity through the interaction of its early lineup and collective writing; Nan Arayo and the fusion of Korean pop with rap, rock and dance production show how its arrangement, recording and live image developed."
        },
        {
            "start": "1997",
            "title": "Shakira (born 1977)",
            "description": "Shakira can be located concretely through Pies Descalzos, Laundry Service, Hips Don’t Lie and bilingual Latin-pop crossover. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of Latin American music."
        },
        {
            "start": "1999",
            "title": "Jay Chou (born 1979)",
            "description": "Jay Chou can be located concretely through Jay, Fantasy and a blend of R&B, rap and Chinese-themed songwriting. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of East Asian music."
        },
        {
            "start": "2003",
            "title": "Hikaru Utada (born 1983)",
            "description": "Hikaru Utada can be located concretely through First Love, Distance and Deep River. Their treatment of songwriting and a distinctive performance voice links an individual style to the wider development of East Asian music."
        },
        {
            "start": "2011",
            "title": "Burna Boy (born 1991)",
            "description": "African Giant, Twice as Tall and Love, Damini provide concrete evidence of Burna Boy’s historical position: the point is not fame alone, but how these materials changed vocal sound, phrasing and recorded performance in African popular and traditional music."
        },
        {
            "start": "2013",
            "title": "BTS formed",
            "description": "BTS established its identity through the interaction of its early lineup and collective writing; The Most Beautiful Moment in Life series, Wings, Love Yourself and Map of the Soul show how its arrangement, recording and live image developed."
        },
        {
            "start": "2014",
            "title": "Bad Bunny (born 1994)",
            "description": "Bad Bunny can be located concretely through X 100pre, YHLQMDLG and Un Verano Sin Ti. Their treatment of vocal sound, phrasing and recorded performance links an individual style to the wider development of Latin American music."
        },
        {
            "start": "2016",
            "title": "BLACKPINK formed",
            "description": "BLACKPINK established its identity through the interaction of its early lineup and collective writing; Square Up, The Album, Born Pink and large-scale global touring show how its arrangement, recording and live image developed."
        }
    ]
};

// Major works, operas, musicals and premieres
var tl_works = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1151",
            "title": "Hildegard’s Ordo Virtutum",
            "description": "Ordo Virtutum is one of the earliest surviving large-scale morality plays with music; the female Virtues sing, while the Devil only speaks, separating sacred order from temptation through sound."
        },
        {
            "start": "1360",
            "title": "Machaut’s Messe de Nostre Dame",
            "description": "It is one of the earliest surviving complete polyphonic Mass cycles conceived by a single composer, organizing the Ordinary into a work that can be heard as a whole."
        },
        {
            "start": "1597",
            "title": "Peri and Corsi’s Dafne",
            "description": "Dafne is often treated as one of the earliest operatic experiments; although most of the score is lost, it marks the Florentine attempt to reconstruct Greek drama through solo declamation."
        },
        {
            "start": "1607",
            "title": "Monteverdi’s L’Orfeo premieres",
            "description": "L’Orfeo used explicit instrumental color, ritornellos and expressive recitative to move early opera beyond court experiment into a drama still performable as a complete work."
        },
        {
            "start": "1642",
            "title": "Monteverdi’s L’incoronazione di Poppea",
            "description": "It centers on historical rather than mythological characters and brings desire, power and moral ambiguity into public opera; its closing duet became a model of early operatic lyricism."
        },
        {
            "start": "1689",
            "title": "Purcell’s Dido and Aeneas",
            "description": "This compact English opera combines dance, chorus and recitative; Dido’s Lament uses a repeating ground bass to carry an intensifying tragic arc."
        },
        {
            "start": "1711",
            "title": "Handel’s Rinaldo premieres in London",
            "description": "Rinaldo was Handel’s first Italian opera for London, using stage machinery, virtuoso arias and star singers to establish Italian opera as commercial entertainment there."
        },
        {
            "start": "1721",
            "title": "Bach’s Brandenburg Concertos assembled",
            "description": "The six concertos are tailored to different instrumental combinations—from the violin-less Sixth to the keyboard-led Fifth—forming a compact survey of what the concerto could do."
        },
        {
            "start": "1725",
            "title": "Vivaldi’s The Four Seasons published",
            "description": "The four violin concertos were published with sonnets and turn birdsong, storms, heat and ice into recognizable sound, making them a landmark of early program music."
        },
        {
            "start": "1741",
            "title": "Bach’s Goldberg Variations published",
            "description": "An aria and thirty variations share a harmonic bass plan, while the canons expand by interval, showing how keyboard variation can be rigorous yet include dance and virtuosity."
        },
        {
            "start": "1742",
            "title": "Handel’s Messiah premieres",
            "description": "Messiah organizes a salvation narrative from English scripture through soloists, chorus and orchestra; after its Dublin premiere it became central to English oratorio and public benefit performance."
        },
        {
            "start": "1749",
            "title": "Handel’s Music for the Royal Fireworks",
            "description": "Written for an outdoor celebration, the original scoring emphasized winds and percussion, providing the projection needed for fireworks and a large public space."
        },
        {
            "start": "1762",
            "title": "Gluck’s Orfeo ed Euridice premieres",
            "description": "Gluck reduced virtuoso display and tangled subplots so that music, dance, chorus and plot served direct emotional clarity, making the work a model of operatic reform."
        },
        {
            "start": "1786",
            "title": "Mozart’s The Marriage of Figaro premieres",
            "description": "Its extended ensemble finales let several characters advance different plans and emotions at once, using music to weave class conflict, misunderstanding and psychology into continuous drama."
        },
        {
            "start": "1787",
            "title": "Mozart’s Don Giovanni premieres",
            "description": "The opera places comedy, tragedy and supernatural terror side by side; harmony from the overture returns with the Stone Guest, giving the drama structural memory across scenes."
        },
        {
            "start": "1791",
            "title": "Mozart’s The Magic Flute premieres",
            "description": "Spoken German dialogue, folk-like song, virtuoso aria and Masonic symbolism coexist, bringing courtly operatic language into popular Singspiel."
        },
        {
            "start": "1805",
            "title": "Beethoven’s Eroica Symphony public premiere",
            "description": "The Third Symphony enlarged scale, development and the dramatic weight of the funeral march, turning the symphony from court entertainment toward a public argument about heroism, conflict and history."
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven premieres the Fifth and Sixth Symphonies",
            "description": "The same 1808 concert introduced the Fifth’s motivic concentration and the Sixth’s pastoral program, showing two contrasting ways Beethoven could remake the symphony."
        },
        {
            "start": "1816",
            "title": "Rossini’s The Barber of Seville premieres",
            "description": "Rapid repetition, accumulating ensembles and the “Rossini crescendo” turn comic confusion into a precise rhythmic machine, becoming a standard of Italian opera buffa."
        },
        {
            "start": "1821",
            "title": "Weber’s Der Freischütz premieres",
            "description": "German dialogue, folk legend, forest sonority and the supernatural Wolf’s Glen scene combine to establish the national and fantastic space of German Romantic opera."
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth Symphony premieres",
            "description": "The finale introduced solo voices and chorus into a large symphony, using the “Ode to Joy” to turn instrumental form toward a public statement about human community."
        },
        {
            "start": "1830",
            "title": "Berlioz’s Symphonie fantastique premieres",
            "description": "An idée fixe transforms across five movements, joined to a detailed autobiographical program and expanded orchestral color, establishing a model for the Romantic program symphony."
        },
        {
            "start": "1831",
            "title": "Bellini’s Norma premieres",
            "description": "Long-breathed melody and finely controlled phrasing—especially in “Casta diva”—join bel canto technique to a character’s religious authority, love and sacrifice."
        },
        {
            "start": "1842",
            "title": "Verdi’s Nabucco premieres",
            "description": "Large choral scenes and “Va, pensiero” made Verdi famous and brought collective exile and political identity into the public culture of Italian opera."
        },
        {
            "start": "1845",
            "title": "Mendelssohn’s Violin Concerto premieres",
            "description": "The solo violin enters almost immediately, the cadenza is written into the score and leads into the recapitulation, and the movements connect without pause, redefining concerto continuity."
        },
        {
            "start": "1853",
            "title": "Verdi’s La traviata premieres",
            "description": "The opera places contemporary urban society and a terminally ill woman at its center, using waltz, intimate solo song and compressed scenes to dramatize social exclusion."
        },
        {
            "start": "1865",
            "title": "Wagner’s Tristan und Isolde premieres",
            "description": "The “Tristan chord,” deferred cadences and continuous orchestral texture turn desire into prolonged unresolved harmonic tension, profoundly affecting later modernism."
        },
        {
            "start": "1871",
            "title": "Verdi’s Aida premieres",
            "description": "The opera moves between monumental public ritual and an intensely private triangle, showing that grand-opera scale can serve detailed psychology."
        },
        {
            "start": "1876",
            "title": "Complete Ring cycle opens at Bayreuth",
            "description": "The four dramas were presented as a cycle in the purpose-built Bayreuth Festspielhaus, whose covered pit and controlled sightlines turned the Gesamtkunstwerk into a unified architectural, theatrical and musical experience."
        },
        {
            "start": "1877",
            "title": "Tchaikovsky’s Swan Lake premieres",
            "description": "Tchaikovsky brought symphonic thematic development and character motives to ballet scoring; despite a weak premiere, later productions made it central to the classical repertory."
        },
        {
            "start": "1882",
            "title": "Wagner’s Parsifal premieres",
            "description": "Designed for Bayreuth, the work uses slow ritual, Grail motives and specialized scene transformations to create the quasi-religious experience Wagner called a “stage-consecrating festival play.”"
        },
        {
            "start": "1888",
            "title": "Rimsky-Korsakov’s Scheherazade premieres",
            "description": "A solo violin represents Scheherazade and a brass-bass motive the Sultan; changing orchestration creates narrative through timbre rather than words."
        },
        {
            "start": "1890",
            "title": "Mascagni’s Cavalleria rusticana premieres",
            "description": "Its one-act form, rural setting and sudden violence brought ordinary jealousy and social pressure to the opera stage, making it a defining work of Italian verismo."
        },
        {
            "start": "1892",
            "title": "Tchaikovsky’s The Nutcracker premieres",
            "description": "The Dance of the Sugar Plum Fairy made the celesta widely recognizable, while national dances and a child’s viewpoint helped the ballet become a seasonal performance tradition."
        },
        {
            "start": "1893",
            "title": "Dvořák’s New World Symphony premieres",
            "description": "The symphony combines rhythmic and scalar impressions of spirituals and Native American music with European symphonic development rather than simply quoting tunes, becoming a model of cross-cultural nationalism."
        },
        {
            "start": "1896",
            "title": "Puccini’s La bohème premieres",
            "description": "Short motives, rapid scene changes and speech-like rhythm link the daily detail of poor artists to intense lyrical climaxes, creating a model for opera about modern life."
        },
        {
            "start": "1900",
            "title": "Puccini’s Tosca premieres",
            "description": "Its near-real-time political-thriller structure, onstage and offstage bells, and the “Tosca chords” bind specific Roman locations, violence and character motives together."
        },
        {
            "start": "1902",
            "title": "Debussy’s Pelléas et Mélisande premieres",
            "description": "French speech-inflected declamation, veiled orchestration and continuous scenes without conventional arias gave Symbolist drama a musical temporality distinct from Wagner."
        },
        {
            "start": "1905",
            "title": "Richard Strauss’s Salome premieres",
            "description": "Extreme chromaticism, a huge orchestra and the Dance of the Seven Veils recast a biblical subject as psychological desire and sensory shock, producing an early scandalous success of modern opera."
        },
        {
            "start": "1910",
            "title": "Stravinsky’s The Firebird premieres",
            "description": "Russian folklore, Rimsky-derived orchestration and repetitive rhythm made Stravinsky famous in Paris and established the modernist identity of Diaghilev’s Ballets Russes."
        },
        {
            "start": "1911",
            "title": "Stravinsky’s Petrushka premieres",
            "description": "The bitonal “Petrushka chord,” fairground scenes and percussive, piano-like orchestration write the puppet’s mechanical and tragic qualities into sound at once."
        },
        {
            "start": "1912",
            "title": "Schoenberg’s Pierrot lunaire premieres",
            "description": "Twenty-one miniatures use Sprechstimme and a five-player ensemble of constantly changing color, turning atonal writing into highly theatrical chamber music."
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premieres in Paris",
            "description": "Irregular accents, repeated chords, layered meters and a large percussion section gave dance music unprecedented physical force; the premiere controversy became a central myth of modernism."
        },
        {
            "start": "1918",
            "title": "Holst’s The Planets receives complete public performance",
            "description": "Seven movements portray astrological characters from Mars to Neptune, using irregular meter, distant women’s chorus and vast orchestration that strongly influenced later cinematic and game “space” sound."
        },
        {
            "start": "1924-02-12",
            "title": "Gershwin’s Rhapsody in Blue premieres",
            "description": "Concertante piano writing, blue notes and jazz-band color meet in one work, bringing jazz vocabulary into a major American concert event without fully classicalizing it."
        },
        {
            "start": "1925",
            "title": "Berg’s Wozzeck premieres",
            "description": "Atonal language is organized through passacaglia, fugue, suite and other traditional forms, while fragmented scenes portray poverty, military power and psychological collapse."
        },
        {
            "start": "1927",
            "title": "Show Boat opens on Broadway",
            "description": "Songs, character development and serious social issues are integrated more tightly into the plot, while a story spanning decades breaks beyond the light structure of earlier musical comedy."
        },
        {
            "start": "1928",
            "title": "Ravel’s Boléro premieres",
            "description": "The melody and rhythm barely change; orchestral relay and a single long crescendo carry the piece, making it a public experiment in timbre and accumulated energy."
        },
        {
            "start": "1935",
            "title": "Porgy and Bess premieres",
            "description": "Opera, jazz, spiritual and Broadway song languages portray a Black community, while numbers such as “Summertime” later left the stage to enter the global standard repertory."
        },
        {
            "start": "1937",
            "title": "Orff’s Carmina Burana premieres",
            "description": "Forceful ostinatos, block harmony and direct Latin/Middle High German texts take priority over complex counterpoint, creating an immediately recognizable ritual impact."
        },
        {
            "start": "1943",
            "title": "Oklahoma! opens on Broadway",
            "description": "Song, dance and plot are systematically integrated into character choice and community conflict, while the dream ballet gives dance a psychological narrative role."
        },
        {
            "start": "1944",
            "title": "Copland’s Appalachian Spring premieres",
            "description": "Written for a small chamber ensemble and Martha Graham, its open intervals and variations on “Simple Gifts” shaped a public sound of American rural idealism."
        },
        {
            "start": "1945",
            "title": "Britten’s Peter Grimes premieres",
            "description": "Sea interludes, a chorus acting as the community and the tenor protagonist’s conflicted psychology returned English opera to the international repertory after World War II."
        },
        {
            "start": "1952-08-29",
            "title": "Cage’s 4′33″ premieres",
            "description": "The performer produces no prescribed notes, making coughs, wind and environmental noise the object of listening and forcing a redefinition of work, silence and performance."
        },
        {
            "start": "1956",
            "title": "Stockhausen’s Gesang der Jünglinge completed",
            "description": "A child’s voice is segmented, filtered and fused with electronic sound, while five-channel spatial movement makes timbre, language and position compositional parameters at once."
        },
        {
            "start": "1957",
            "title": "West Side Story opens on Broadway",
            "description": "Jazz, Latin rhythm, complex ensemble writing and Jerome Robbins’s choreography jointly carry gang conflict and romantic tragedy, so dance is no longer an interruption."
        },
        {
            "start": "1958",
            "title": "Varèse’s Poème électronique at the Brussels World’s Fair",
            "description": "Inside the Philips Pavilion, electronic sound moved through hundreds of loudspeakers and joined Le Corbusier’s images and architecture, creating an early immersive multimedia work."
        },
        {
            "start": "1964",
            "title": "Terry Riley’s In C premieres",
            "description": "Fifty-three short cells are repeated and advanced at each player’s discretion over a shared pulse, producing an open form that differs each time yet remains recognizable."
        },
        {
            "start": "1976",
            "title": "Glass’s Einstein on the Beach premieres",
            "description": "Roughly five hours long, without a conventional plot and using counted text and repeated figures, it allowed audiences to come and go and radically changed operatic time and narrative expectation."
        },
        {
            "start": "1977",
            "title": "Star Wars establishes a new blockbuster orchestral film-score model",
            "description": "John Williams revived Golden Age scoring through a large symphony orchestra, clear themes and character leitmotifs, returning memorable melody to the center of blockbuster storytelling."
        },
        {
            "start": "1987",
            "title": "John Adams’s Nixon in China premieres",
            "description": "The opera turns the 1972 diplomatic visit into “recent history,” using minimalist pulse, jazz-inflected orchestration and media language to portray public image and private reflection."
        },
        {
            "start": "2015",
            "title": "Hamilton opens on Broadway",
            "description": "Hip-hop, R&B and traditional musical-theater writing narrate the founding era, while multiracial casting makes the question of who may represent national history part of the work itself."
        }
    ]
};

// Landmark recordings, singles and albums
var tl_recordings = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1902",
            "title": "Enrico Caruso — Vesti la giubba",
            "description": "“Vesti la giubba” functions as a timeline node because Enrico Caruso left clear, traceable sound evidence of performance interpretation, recorded space and the circulation of standard repertory; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "Original Dixieland Jass Band fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Livery Stable Blues / Dixie Jass Band One-Step.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "To understand “Crazy Blues,” listen directly to how Mamie Smith organizes blue-note inflection, call-and-response and personal narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "“Downhearted Blues” documents concrete choices by Bessie Smith in blue-note inflection, call-and-response and personal narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "“Hot Five recordings begin” functions as a timeline node because Louis Armstrong and His Hot Five left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "To understand “Blue Yodel,” listen directly to how Jimmie Rodgers organizes narrative song, string-band texture and regional vocal identity. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "“Avalon Blues recordings” functions as a timeline node because Mississippi John Hurt left clear, traceable sound evidence of blue-note inflection, call-and-response and personal narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "To understand “San Antonio and Dallas sessions,” listen directly to how Robert Johnson organizes blue-note inflection, call-and-response and personal narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "Billie Holiday fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Strange Fruit.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "Woody Guthrie fixed repertory choice, performance and production method in a reproducible version of “Dust Bowl Ballads.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "Bing Crosby fixed melodic hook, vocal production and mass circulation in a reproducible version of “White Christmas.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "Duke Ellington fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Black, Brown and Beige.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "“I Can’t Be Satisfied” documents concrete choices by Muddy Waters in blue-note inflection, call-and-response and personal narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "“Lovesick Blues” functions as a timeline node because Hank Williams left clear, traceable sound evidence of narrative song, string-band texture and regional vocal identity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "To understand “Anthology of American Folk Music,” listen directly to how Various Artists organizes repertory choice, performance and production method. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "“Tosca” functions as a timeline node because Maria Callas / Victor de Sabata left clear, traceable sound evidence of performance interpretation, recorded space and the circulation of standard repertory; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "“Rock Around the Clock” documents concrete choices by Bill Haley & His Comets in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "“In the Wee Small Hours” functions as a timeline node because Frank Sinatra left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "Glenn Gould fixed performance interpretation, recorded space and the circulation of standard repertory in a reproducible version of “Bach: Goldberg Variations.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "To understand “Ella and Louis,” listen directly to how Ella Fitzgerald & Louis Armstrong organizes improvised line, rhythmic drive and ensemble interaction. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "To understand “Elvis Presley,” listen directly to how Elvis Presley organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "“Three Ragas” documents concrete choices by Ravi Shankar in repertory choice, performance and production method. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "“After School Session” documents concrete choices by Chuck Berry in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "To understand “Here’s Little Richard,” listen directly to how Little Richard organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "“Brilliant Corners” documents concrete choices by Thelonious Monk in improvised line, rhythmic drive and ensemble interaction. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "“Lady in Satin” functions as a timeline node because Billie Holiday left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "“Milestones” documents concrete choices by Miles Davis in improvised line, rhythmic drive and ensemble interaction. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "“Mingus Ah Um” functions as a timeline node because Charles Mingus left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "“Time Out” functions as a timeline node because Dave Brubeck Quartet left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "“Kind of Blue” documents concrete choices by Miles Davis in improvised line, rhythmic drive and ensemble interaction. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "John Coltrane fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Giant Steps.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "To understand “O amor, o sorriso e a flor,” listen directly to how João Gilberto organizes dance rhythm, layered percussion and transregional circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "Ornette Coleman fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Free Jazz.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "“King of the Delta Blues Singers” documents concrete choices by Robert Johnson in blue-note inflection, call-and-response and personal narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "To understand “Bob Dylan,” listen directly to how Bob Dylan organizes repertory choice, performance and production method. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "To understand “Modern Sounds in Country and Western Music,” listen directly to how Ray Charles organizes layered vocals, groove and studio arrangement. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "James Brown fixed repertory choice, performance and production method in a reproducible version of “Live at the Apollo.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "“Night Beat” documents concrete choices by Sam Cooke in gospel-derived singing, groove and emotional intensity. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "“Please Please Me” functions as a timeline node because The Beatles left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "To understand “Getz/Gilberto,” listen directly to how Stan Getz & João Gilberto organizes dance rhythm, layered percussion and transregional circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "“The Beach Boys Today!” documents concrete choices by The Beach Boys in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "“Where Did Our Love Go” functions as a timeline node because The Supremes left clear, traceable sound evidence of gospel-derived singing, groove and emotional intensity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "“Enta Omri” documents concrete choices by Umm Kulthum in repertory choice, performance and production method. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "To understand “Highway 61 Revisited,” listen directly to how Bob Dylan organizes repertory choice, performance and production method. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "“A Love Supreme” functions as a timeline node because John Coltrane left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "“Otis Blue” functions as a timeline node because Otis Redding left clear, traceable sound evidence of gospel-derived singing, groove and emotional intensity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "To understand “Rubber Soul,” listen directly to how The Beatles organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "“Blonde on Blonde” documents concrete choices by Bob Dylan in repertory choice, performance and production method. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "“Wild Is the Wind” documents concrete choices by Nina Simone in improvised line, rhythmic drive and ensemble interaction. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "To understand “Pet Sounds,” listen directly to how The Beach Boys organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "To understand “Revolver,” listen directly to how The Beatles organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "“I Never Loved a Man the Way I Love You” documents concrete choices by Aretha Franklin in gospel-derived singing, groove and emotional intensity. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "“Are You Experienced” documents concrete choices by Jimi Hendrix Experience in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "To understand “Sgt. Pepper’s Lonely Hearts Club Band,” listen directly to how The Beatles organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "“The Doors” documents concrete choices by The Doors in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "To understand “The Velvet Underground & Nico,” listen directly to how The Velvet Underground & Nico organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "Johnny Cash fixed narrative song, string-band texture and regional vocal identity in a reproducible version of “At Folsom Prison.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "The Beatles fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “The Beatles (White Album).” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "“Astral Weeks” documents concrete choices by Van Morrison in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "To understand “Switched-On Bach,” listen directly to how Wendy Carlos organizes synthesis, sequencing, spatial treatment and repetitive structure. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "To understand “Abbey Road,” listen directly to how The Beatles organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "To understand “Let It Bleed,” listen directly to how The Rolling Stones organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "To understand “The Stooges,” listen directly to how The Stooges organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "“Black Sabbath” documents concrete choices by Black Sabbath in distorted timbre, riff organization and forceful drumming. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "“Paranoid” documents concrete choices by Black Sabbath in distorted timbre, riff organization and forceful drumming. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "“Bitches Brew” functions as a timeline node because Miles Davis left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "Neil Young fixed repertory choice, performance and production method in a reproducible version of “After the Gold Rush.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "“Tapestry” functions as a timeline node because Carole King left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "“Coat of Many Colors” functions as a timeline node because Dolly Parton left clear, traceable sound evidence of narrative song, string-band texture and regional vocal identity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "To understand “Blue,” listen directly to how Joni Mitchell organizes repertory choice, performance and production method. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "“Led Zeppelin IV” functions as a timeline node because Led Zeppelin left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "“What’s Going On” documents concrete choices by Marvin Gaye in gospel-derived singing, groove and emotional intensity. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "“Who’s Next” documents concrete choices by The Who in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "To understand “The Rise and Fall of Ziggy Stardust and the Spiders from Mars,” listen directly to how David Bowie organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "“Talking Book” documents concrete choices by Stevie Wonder in gospel-derived singing, groove and emotional intensity. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "To understand “Exile on Main St.,” listen directly to how The Rolling Stones organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "Herbie Hancock fixed improvised line, rhythmic drive and ensemble interaction in a reproducible version of “Head Hunters.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "“Catch a Fire” functions as a timeline node because Marley / The Wailers left clear, traceable sound evidence of bass-led arrangement, offbeat emphasis and studio remixing; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "“The Dark Side of the Moon” functions as a timeline node because Pink Floyd left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "To understand “Innervisions,” listen directly to how Stevie Wonder organizes gospel-derived singing, groove and emotional intensity. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "“Autobahn” functions as a timeline node because Kraftwerk left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "“Born to Run” documents concrete choices by Bruce Springsteen in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "“The Köln Concert” functions as a timeline node because Keith Jarrett left clear, traceable sound evidence of improvised line, rhythmic drive and ensemble interaction; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "“Horses” functions as a timeline node because Patti Smith left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "Willie Nelson fixed narrative song, string-band texture and regional vocal identity in a reproducible version of “Red Headed Stranger.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "“Zombie” functions as a timeline node because Fela Kuti left clear, traceable sound evidence of the joining of regional rhythm and language with modern production; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "To understand “Ramones,” listen directly to how Ramones organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "“Songs in the Key of Life” functions as a timeline node because Stevie Wonder left clear, traceable sound evidence of gospel-derived singing, groove and emotional intensity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "“Exodus” functions as a timeline node because Bob Marley & The Wailers left clear, traceable sound evidence of bass-led arrangement, offbeat emphasis and studio remixing; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "“Low” documents concrete choices by David Bowie in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "“I Remember Yesterday” functions as a timeline node because Donna Summer left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "“Rumours” functions as a timeline node because Fleetwood Mac left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "“Trans-Europe Express” documents concrete choices by Kraftwerk in synthesis, sequencing, spatial treatment and repetitive structure. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "“Never Mind the Bollocks, Here’s the Sex Pistols” functions as a timeline node because Sex Pistols left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "Teresa Teng fixed repertory choice, performance and production method in a reproducible version of “The Moon Represents My Heart.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "Brian Eno fixed synthesis, sequencing, spatial treatment and repetitive structure in a reproducible version of “Ambient 1: Music for Airports.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "To understand “The Kick Inside,” listen directly to how Kate Bush organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "“Unknown Pleasures” functions as a timeline node because Joy Division left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "“Off the Wall” documents concrete choices by Michael Jackson in melodic hook, vocal production and mass circulation. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "“London Calling” documents concrete choices by The Clash in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "“Rapper’s Delight” documents concrete choices by The Sugarhill Gang in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "“Solid State Survivor” documents concrete choices by Yellow Magic Orchestra in synthesis, sequencing, spatial treatment and repetitive structure. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "“Back in Black” functions as a timeline node because AC/DC left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "“British Steel” documents concrete choices by Judas Priest in distorted timbre, riff organization and forceful drumming. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "To understand “Remain in Light,” listen directly to how Talking Heads organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "The Human League fixed synthesis, sequencing, spatial treatment and repetitive structure in a reproducible version of “Dare.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "“Tom Tom Club” documents concrete choices by Tom Tom Club in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "“The Message” functions as a timeline node because Grandmaster Flash and the Furious Five left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "Iron Maiden fixed distorted timbre, riff organization and forceful drumming in a reproducible version of “The Number of the Beast.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "To understand “Thriller,” listen directly to how Michael Jackson organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "“Power, Corruption & Lies” functions as a timeline node because New Order left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "To understand “Murmur,” listen directly to how R.E.M. organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "“Born in the U.S.A.” functions as a timeline node because Bruce Springsteen left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "To understand “Purple Rain,” listen directly to how Prince and the Revolution organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "“Run-D.M.C.” documents concrete choices by Run-D.M.C. in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "“Hounds of Love” functions as a timeline node because Kate Bush left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "To understand “Master of Puppets,” listen directly to how Metallica organizes distorted timbre, riff organization and forceful drumming. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "Paul Simon fixed repertory choice, performance and production method in a reproducible version of “Graceland.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "“Reign in Blood” documents concrete choices by Slayer in distorted timbre, riff organization and forceful drumming. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "“Appetite for Destruction” functions as a timeline node because Guns N’ Roses left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "Prince fixed melodic hook, vocal production and mass circulation in a reproducible version of “Sign o’ the Times.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "To understand “The Joshua Tree,” listen directly to how U2 organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "N.W.A fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Straight Outta Compton.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "“It Takes a Nation of Millions to Hold Us Back” functions as a timeline node because Public Enemy left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "Sonic Youth fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “Daydream Nation.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "“3 Feet High and Rising” functions as a timeline node because De La Soul left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "“Like a Prayer” functions as a timeline node because Madonna left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "Nusrat Fateh Ali Khan fixed repertory choice, performance and production method in a reproducible version of “Shahen-Shah.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "“Violator” functions as a timeline node because Depeche Mode left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "“The Low End Theory” functions as a timeline node because A Tribe Called Quest left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "To understand “Logozo,” listen directly to how Angélique Kidjo organizes the joining of regional rhythm and language with modern production. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "“Blue Lines” functions as a timeline node because Massive Attack left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "To understand “Loveless,” listen directly to how My Bloody Valentine organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "“Nevermind” functions as a timeline node because Nirvana left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "“Roja soundtrack” documents concrete choices by A. R. Rahman in repertory choice, performance and production method. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "To understand “Selected Ambient Works 85–92,” listen directly to how Aphex Twin organizes synthesis, sequencing, spatial treatment and repetitive structure. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "To understand “The Chronic,” listen directly to how Dr. Dre organizes rhythmic flow, sample/beat construction and social narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "“Vulgar Display of Power” documents concrete choices by Pantera in distorted timbre, riff organization and forceful drumming. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "“Seo Taiji and Boys” documents concrete choices by Seo Taiji and Boys in repertory choice, performance and production method. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "“Debut” functions as a timeline node because Björk left clear, traceable sound evidence of synthesis, sequencing, spatial treatment and repetitive structure; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "To understand “Enter the Wu-Tang (36 Chambers),” listen directly to how Wu-Tang Clan organizes rhythmic flow, sample/beat construction and social narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "“Parklife” functions as a timeline node because Blur left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "To understand “Dookie,” listen directly to how Green Day organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "Nas fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Illmatic.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "To understand “Definitely Maybe,” listen directly to how Oasis organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "The Notorious B.I.G. fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Ready to Die.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "“Jagged Little Pill” documents concrete choices by Alanis Morissette in guitar timbre, sectional rhythm and album/live energy. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "To understand “The Bends,” listen directly to how Radiohead organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "“All Eyez on Me” functions as a timeline node because 2Pac left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "Faye Wong fixed repertory choice, performance and production method in a reproducible version of “Restless.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "Jay-Z fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Reasonable Doubt.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "“Homogenic” documents concrete choices by Björk in synthesis, sequencing, spatial treatment and repetitive structure. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "To understand “Buena Vista Social Club,” listen directly to how Buena Vista Social Club organizes dance rhythm, layered percussion and transregional circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "“Supa Dupa Fly” documents concrete choices by Missy Elliott in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "To understand “OK Computer,” listen directly to how Radiohead organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "“The Fat of the Land” documents concrete choices by The Prodigy in synthesis, sequencing, spatial treatment and repetitive structure. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "“The Miseducation of Lauryn Hill” functions as a timeline node because Lauryn Hill left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "Lucinda Williams fixed narrative song, string-band texture and regional vocal identity in a reproducible version of “Car Wheels on a Gravel Road.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "“Aquemini” documents concrete choices by OutKast in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "Hikaru Utada fixed repertory choice, performance and production method in a reproducible version of “First Love.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "D’Angelo fixed gospel-derived singing, groove and emotional intensity in a reproducible version of “Voodoo.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "“The Marshall Mathers LP” documents concrete choices by Eminem in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "“Stankonia” functions as a timeline node because OutKast left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "To understand “Kid A,” listen directly to how Radiohead organizes guitar timbre, sectional rhythm and album/live energy. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "“O Brother, Where Art Thou? soundtrack” functions as a timeline node because Various Artists left clear, traceable sound evidence of narrative song, string-band texture and regional vocal identity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "Daft Punk fixed synthesis, sequencing, spatial treatment and repetitive structure in a reproducible version of “Discovery.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "Jay Chou fixed repertory choice, performance and production method in a reproducible version of “Fantasy.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "The Strokes fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “Is This It.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "Wilco fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “Yankee Hotel Foxtrot.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "The White Stripes fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “Elephant.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "“Funeral” functions as a timeline node because Arcade Fire left clear, traceable sound evidence of guitar timbre, sectional rhythm and album/live energy; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "“The College Dropout” documents concrete choices by Kanye West in rhythmic flow, sample/beat construction and social narrative. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "Youssou N’Dour fixed the joining of regional rhythm and language with modern production in a reproducible version of “Egypt.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "“Back to Black” functions as a timeline node because Amy Winehouse left clear, traceable sound evidence of gospel-derived singing, groove and emotional intensity; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "J Dilla fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Donuts.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "Radiohead fixed guitar timbre, sectional rhythm and album/live energy in a reproducible version of “In Rainbows.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "To understand “Fleet Foxes,” listen directly to how Fleet Foxes organizes repertory choice, performance and production method. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "“The ArchAndroid” functions as a timeline node because Janelle Monáe left clear, traceable sound evidence of layered vocals, groove and studio arrangement; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "To understand “My Beautiful Dark Twisted Fantasy,” listen directly to how Kanye West organizes rhythmic flow, sample/beat construction and social narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "To understand “21,” listen directly to how Adele organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "Beyoncé fixed layered vocals, groove and studio arrangement in a reproducible version of “4.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "“good kid, m.A.A.d city” functions as a timeline node because Kendrick Lamar left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "To understand “Beyoncé,” listen directly to how Beyoncé organizes layered vocals, groove and studio arrangement. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "Daft Punk fixed synthesis, sequencing, spatial treatment and repetitive structure in a reproducible version of “Random Access Memories.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "“1989” functions as a timeline node because Taylor Swift left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "Jamie xx fixed synthesis, sequencing, spatial treatment and repetitive structure in a reproducible version of “In Colour.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "“To Pimp a Butterfly” functions as a timeline node because Kendrick Lamar left clear, traceable sound evidence of rhythmic flow, sample/beat construction and social narrative; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "BTS fixed repertory choice, performance and production method in a reproducible version of “Wings.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "To understand “Lemonade,” listen directly to how Beyoncé organizes layered vocals, groove and studio arrangement. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "“Blonde” documents concrete choices by Frank Ocean in layered vocals, groove and studio arrangement. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "To understand “DAMN.,” listen directly to how Kendrick Lamar organizes rhythmic flow, sample/beat construction and social narrative. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "“Melodrama” documents concrete choices by Lorde in melodic hook, vocal production and mass circulation. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "To understand “Dirty Computer,” listen directly to how Janelle Monáe organizes layered vocals, groove and studio arrangement. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "To understand “When We All Fall Asleep, Where Do We Go?,” listen directly to how Billie Eilish organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "Burna Boy fixed the joining of regional rhythm and language with modern production in a reproducible version of “African Giant.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "BLACKPINK fixed repertory choice, performance and production method in a reproducible version of “The Album.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "BTS fixed repertory choice, performance and production method in a reproducible version of “Map of the Soul: 7.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "Fiona Apple fixed melodic hook, vocal production and mass circulation in a reproducible version of “Fetch the Bolt Cutters.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "To understand “folklore,” listen directly to how Taylor Swift organizes melodic hook, vocal production and mass circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "To understand “Made in Lagos,” listen directly to how Wizkid organizes the joining of regional rhythm and language with modern production. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "Little Simz fixed rhythmic flow, sample/beat construction and social narrative in a reproducible version of “Sometimes I Might Be Introvert.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "“Un Verano Sin Ti” documents concrete choices by Bad Bunny in dance rhythm, layered percussion and transregional circulation. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "Beyoncé fixed layered vocals, groove and studio arrangement in a reproducible version of “Renaissance.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "To understand “Motomami,” listen directly to how Rosalía organizes dance rhythm, layered percussion and transregional circulation. The recording preserves not only a title but a combination of the period’s technology, aesthetics and performance habits."
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "“SOS” functions as a timeline node because SZA left clear, traceable sound evidence of layered vocals, groove and studio arrangement; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "Beyoncé fixed narrative song, string-band texture and regional vocal identity in a reproducible version of “Cowboy Carter.” Later listeners and musicians could compare covers, live versions, samples and production changes against it."
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "“Brat” functions as a timeline node because Charli XCX left clear, traceable sound evidence of melodic hook, vocal production and mass circulation; later stylistic changes can be compared directly with this version."
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "“Tyla” documents concrete choices by Tyla in the joining of regional rhythm and language with modern production. Recording makes tempo, timbre, form and performance detail repeatedly comparable, so its significance lies in audible decisions rather than an abstract label."
        }
    ]
};

// Historic concerts, festivals and tours
var tl_concerts = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1749-04-27",
            "title": "Handel’s Music for the Royal Fireworks public rehearsal",
            "description": "The London public rehearsal drew a huge crowd and caused traffic congestion, showing that eighteenth-century public music could already become a citywide event resembling a modern spectacle."
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven’s Vienna marathon concert",
            "description": "The long, cold 1808 concert premiered the Fifth and Sixth Symphonies, Fourth Piano Concerto and Choral Fantasy, revealing both the scale of Beethoven’s new work and the practical limits of rehearsal."
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth premiere concert",
            "description": "The deaf Beethoven stood onstage and participated in directing but could not hear the applause, making the event itself part of the work’s history of disability, public veneration and reception."
        },
        {
            "start": "1850-09-11",
            "title": "Jenny Lind begins the American tour promoted by P. T. Barnum",
            "description": "Barnum used advance sales, newspapers and manufactured scarcity to turn a European singer into a national celebrity, creating an early model of modern star marketing and music commerce."
        },
        {
            "start": "1871",
            "title": "Fisk Jubilee Singers begin major tours",
            "description": "The student ensemble raised money for Fisk University through arranged African American spirituals, bringing repertory rooted in slavery into formal concert halls in the United States and Europe."
        },
        {
            "start": "1876-08-13",
            "title": "First Bayreuth Festival opens with the Ring cycle",
            "description": "The purpose-built theater, covered orchestra pit and four-night Ring cycle institutionalized Wagner’s attempt to control stage, architecture and audience attention as one system."
        },
        {
            "start": "1891-05-05",
            "title": "Carnegie Hall opening night",
            "description": "The 1891 opening events, with Tchaikovsky among the conductors, announced New York’s possession of an international concert hall comparable to those of European capitals."
        },
        {
            "start": "1912-05-02",
            "title": "James Reese Europe’s Clef Club Orchestra at Carnegie Hall",
            "description": "In 1912 a large Black orchestra brought ragtime, symphonic forces and African American professional musical organization into one of the nation’s most prestigious halls."
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premiere and audience uproar",
            "description": "Conflict over Nijinsky’s choreography, Stravinsky’s rhythm and theater etiquette produced uproar; the later “riot” narrative was repeatedly amplified into a symbol of modernist rupture."
        },
        {
            "start": "1924-02-12",
            "title": "An Experiment in Modern Music premieres Rhapsody in Blue",
            "description": "Paul Whiteman’s Aeolian Hall “experiment” placed Gershwin’s work between classical audiences, jazz-band practice and mass media, creating a highly visible crossover event."
        },
        {
            "start": "1938-01-16",
            "title": "Benny Goodman Carnegie Hall concert",
            "description": "The 1938 concert placed swing jazz in a venue of classical prestige, while the later live album showed that a jazz concert could survive as both historical document and popular record."
        },
        {
            "start": "1939-04-09",
            "title": "Marian Anderson sings at the Lincoln Memorial",
            "description": "After racial discrimination barred her from Constitution Hall, Anderson sang at the Lincoln Memorial to a vast live and radio audience, turning a recital into a civil-rights symbol."
        },
        {
            "start": "1943-01-23",
            "title": "Duke Ellington presents Black, Brown and Beige at Carnegie Hall",
            "description": "Ellington’s extended suite narrated Black history, moving the big band from dance and nightclub settings into historical argument on the concert-hall stage."
        },
        {
            "start": "1954-07-17",
            "title": "First Newport Jazz Festival",
            "description": "Newport gathered many jazz artists into a multi-day resort program, establishing a sponsorship, tourism and festival model later repeated worldwide."
        },
        {
            "start": "1959-07-11",
            "title": "First Newport Folk Festival",
            "description": "The festival placed tradition bearers, collectors and young urban songwriters on one stage, becoming a center of debate over authenticity and commerce within the American folk revival."
        },
        {
            "start": "1964-02-12",
            "title": "The Beatles perform at Carnegie Hall",
            "description": "The New York concerts soon after The Ed Sullivan Show demonstrated how television exposure could instantly become demand at a prestigious venue and accelerate the British Invasion."
        },
        {
            "start": "1965-07-25",
            "title": "Bob Dylan goes electric at Newport Folk Festival",
            "description": "Electric guitar and rock rhythm challenged folk-revival expectations of “pure” acoustic performance, making tensions among artistic freedom, politics and the market publicly visible."
        },
        {
            "start": "1965-08-15",
            "title": "The Beatles at Shea Stadium",
            "description": "Turning a baseball stadium into a concert venue, the event revealed both the commercial potential of stadium rock and the severe limits of contemporary amplification."
        },
        {
            "start": "1966-06-30",
            "title": "The Beatles begin Budokan concerts in Tokyo",
            "description": "Rock in a hall associated with martial arts and national ceremony provoked conservative opposition but helped make Budokan one of Japan’s most symbolic popular-music venues."
        },
        {
            "start": "1967-06-16",
            "title": "Monterey International Pop Festival opens",
            "description": "Professional production and nonprofit organization placed rock, soul, folk and Indian music together; Hendrix, Janis Joplin and Otis Redding received career-defining exposure."
        },
        {
            "start": "1968-12-11",
            "title": "The Rolling Stones Rock and Roll Circus filmed",
            "description": "The television special placed the Stones, the Who, John Lennon and others in a circus setting; shelved until 1996, it became an unusual case in the preservation history of 1960s rock film."
        },
        {
            "start": "1969-12-06",
            "title": "Altamont Free Concert",
            "description": "Disorganized security, violence and a spectator’s death shattered the equation of free festival with peaceful community and became a dark endpoint in the mythology of 1960s counterculture."
        },
        {
            "start": "1969-08-15",
            "title": "Woodstock Music & Art Fair opens",
            "description": "Three days of huge crowds, mud, traffic collapse and mutual aid were transformed by film and recordings into a generational myth of “peace and music.”"
        },
        {
            "start": "1970-08-26",
            "title": "Isle of Wight Festival 1970 opens",
            "description": "Overwhelming scale, fence conflicts and arguments over free culture exposed the economics of the mega-festival; it also preserved major footage from Hendrix’s final period."
        },
        {
            "start": "1971-08-01",
            "title": "Concert for Bangladesh",
            "description": "George Harrison and Ravi Shankar linked a star lineup, live album and film revenue to humanitarian aid, establishing an organizational template for later benefit mega-concerts."
        },
        {
            "start": "1971",
            "title": "Pink Floyd: Live at Pompeii filmed",
            "description": "The band performed in an ancient amphitheater without a live audience, using cinematography, echoing space and equipment close-ups to redefine “live” as an audiovisual work made for film."
        },
        {
            "start": "1972-08-20",
            "title": "Wattstax festival",
            "description": "Stax artists and Los Angeles’s Black community gathered in a stadium, while music, speech and film directly connected soul music to Black pride and community politics."
        },
        {
            "start": "1973-01-14",
            "title": "Elvis: Aloha from Hawaii satellite concert",
            "description": "Satellite distribution was marketed as a global simultaneous event, turning one concert into a joint display of television technology, national image and superstar branding."
        },
        {
            "start": "1974-09-22",
            "title": "Zaire 74 music festival begins",
            "description": "Linked to the “Rumble in the Jungle,” the festival placed African and African American stars together; although its circulation was delayed, it preserved a major record of transatlantic Black musical identity."
        },
        {
            "start": "1976-06-04",
            "title": "Sex Pistols at Manchester Lesser Free Trade Hall",
            "description": "The audience was small but included people who later shaped Joy Division, the Smiths, Buzzcocks and the local scene, making it a model of a low-attendance, high-diffusion cultural event."
        },
        {
            "start": "1976-11-25",
            "title": "The Band’s The Last Waltz concert",
            "description": "The farewell gathered several generations of roots musicians and was filmed by Martin Scorsese, raising the concert documentary into a deliberately staged cinematic work."
        },
        {
            "start": "1978-04-22",
            "title": "One Love Peace Concert in Kingston",
            "description": "Against political violence, Bob Marley brought rival leaders together onstage for a handshake; it did not end conflict but globalized the image of the reggae star as mediator."
        },
        {
            "start": "1979-09-19",
            "title": "No Nukes concerts begin at Madison Square Garden",
            "description": "The MUSE concerts joined rock stars, energy-policy advocacy and film/record fundraising, creating a model of American musicians’ participation in public-policy activism."
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra world tour",
            "description": "YMO carried Japanese synthesizer pop and visual design to Europe and America, showing that electronic-pop innovation no longer flowed only outward from the Anglo-American center."
        },
        {
            "start": "1981-11-24",
            "title": "Queen Rock Montreal concerts begin",
            "description": "Two concerts designed for high-quality 35mm filming preserved Queen’s peak lighting, set construction and audience interaction, later becoming a major restored concert film."
        },
        {
            "start": "1982-09-03",
            "title": "US Festival opens",
            "description": "Funded by Apple cofounder Steve Wozniak, the mega-event joined rock, technological utopianism and genre-themed days, anticipating the corporatized super-festival."
        },
        {
            "start": "1983-03-25",
            "title": "Motown 25 television concert recorded",
            "description": "Michael Jackson’s first televised moonwalk turned a label-anniversary program into a turning point in global pop performance history."
        },
        {
            "start": "1985-07-13",
            "title": "Live Aid",
            "description": "Twin venues in London and Philadelphia, satellite television and a transnational lineup turned benefit rock into a synchronized global media event, while also exposing simplifications in representations of Africa."
        },
        {
            "start": "1985",
            "title": "Nusrat Fateh Ali Khan reaches major international festival audiences",
            "description": "Stages such as WOMAD and Peter Gabriel’s Real World network brought extended qawwali improvisation to non-South Asian audiences without completely reducing it to Western pop form."
        },
        {
            "start": "1986-04-05",
            "title": "Jean-Michel Jarre’s Rendez-vous Houston",
            "description": "Skyline, lasers, projection and electronic music were composed as one enormous stage, establishing the electronic musician as a multimedia director of public space."
        },
        {
            "start": "1988-06-11",
            "title": "Nelson Mandela 70th Birthday Tribute",
            "description": "The Wembley broadcast used a pop-star lineup to carry anti-apartheid politics through global entertainment channels, helping turn Mandela from political prisoner into a widely known international symbol."
        },
        {
            "start": "1990-07-21",
            "title": "Roger Waters stages The Wall in Berlin",
            "description": "Performed near the former no-man’s-land after the Wall fell, it reinterpreted the album’s metaphor of personal isolation as a public commemoration of the end of Cold War division."
        },
        {
            "start": "1992",
            "title": "First Pavarotti & Friends benefit concert",
            "description": "An operatic tenor and pop stars collaborated in a televised benefit, making “classical crossover” a repeatable format in the 1990s global record and television market."
        },
        {
            "start": "1992-04-20",
            "title": "Freddie Mercury Tribute Concert",
            "description": "Queen’s surviving members and guest singers performed the catalogue while linking the event to AIDS awareness and fundraising, giving rock memorial ritual a direct public-health purpose."
        },
        {
            "start": "1993-11-18",
            "title": "Nirvana MTV Unplugged in New York",
            "description": "The band avoided many hits and used cello, covers and low-volume arrangements; released after Cobain’s death, the performance reshaped the public idea of what grunge could sound like live."
        },
        {
            "start": "1994-08-12",
            "title": "Woodstock ’94 opens",
            "description": "Officially commemorating 1969, it was redefined by mud, television and corporate sponsorship, showing that countercultural memory had entered a marketable nostalgia industry."
        },
        {
            "start": "1996-06-15",
            "title": "First Tibetan Freedom Concert",
            "description": "Organizations linked to the Beastie Boys connected alternative-rock youth audiences to Tibetan human-rights advocacy, creating a model for the 1990s activist festival."
        },
        {
            "start": "1996-08-10",
            "title": "Oasis begins Knebworth concerts",
            "description": "Two enormous nights and ticket demand far beyond capacity turned Britpop from a club-and-chart phenomenon into a British national mass event."
        },
        {
            "start": "1998-07-01",
            "title": "Buena Vista Social Club performs at Carnegie Hall",
            "description": "Veteran Cuban musicians performed in a prestigious New York hall; the later film and live album repackaged pre-revolution dance-hall repertory as a global world-music classic."
        },
        {
            "start": "1999-04-21",
            "title": "Metallica records S&M concerts with the San Francisco Symphony",
            "description": "Metal riffs and full symphonic arrangements share the stage rather than merely adding strings, showing that heavy-metal structure and orchestral motivic development can support each other."
        },
        {
            "start": "1999-07-22",
            "title": "Woodstock ’99 opens",
            "description": "Heat, high prices, inadequate facilities, violence and fire severed the Woodstock brand from its peace mythology, making the festival a case study in failed mega-event governance."
        },
        {
            "start": "2001-10-20",
            "title": "The Concert for New York City",
            "description": "Held at Madison Square Garden after 9/11, it brought firefighters, police, affected families and stars together, turning a rock show into a civic ritual of mourning and solidarity."
        },
        {
            "start": "2003-07-30",
            "title": "Molson Canadian Rocks for Toronto SARS benefit",
            "description": "After SARS damaged tourism and the city’s image, the huge outdoor concert used an international lineup led by the Rolling Stones as an instrument of economic and reputational recovery."
        },
        {
            "start": "2005-07-02",
            "title": "Live 8 concerts",
            "description": "Concerts across several countries focused less on fundraising than on debt relief and aid policy before the G8 summit, shifting the benefit concert toward policy lobbying."
        },
        {
            "start": "2006-04-29",
            "title": "Daft Punk’s Coachella pyramid performance",
            "description": "The illuminated pyramid, synchronized visuals and reworked live mix turned a DJ set into a complete stage narrative, becoming a design reference for later EDM arena touring."
        },
        {
            "start": "2007-12-10",
            "title": "Led Zeppelin reunion at the O2 Arena",
            "description": "The one-off reunion honoring Ahmet Ertegun used disciplined rehearsal and restrained staging to show that a legendary comeback need not be mere nostalgic replication."
        },
        {
            "start": "2011-06-26",
            "title": "Beyoncé headlines Glastonbury",
            "description": "A full dance ensemble, band and continuous hit-driven staging took over a traditionally rock-centered main stage, strengthening the position of women R&B/pop artists as festival headliners."
        },
        {
            "start": "2012-12-12",
            "title": "12-12-12: The Concert for Sandy Relief",
            "description": "Television, online distribution and a Madison Square Garden show raised funds together, integrating disaster relief, star reunions and global broadcast into a rapid-response model."
        },
        {
            "start": "2018-04-14",
            "title": "Beyoncé’s Coachella “Homecoming” performance",
            "description": "As Coachella’s first Black woman headliner, she rebuilt the pop-superstar stage through HBCU marching-band, dance and Black-college traditions, later extending it through film and a live album."
        },
        {
            "start": "2019-06-01",
            "title": "BTS begins Wembley Stadium concerts",
            "description": "A Korean group sold out consecutive nights at a national stadium in Britain, showing that organized global fandom could carry non-English pop beyond traditional radio and record-market barriers."
        },
        {
            "start": "2020-04-18",
            "title": "One World: Together at Home broadcast concert",
            "description": "During COVID shutdowns, artists performed remotely from home across television and platforms, revealing the intimacy, technical inequality and audience-less norms of networked performance."
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK headlines Coachella",
            "description": "As Coachella’s first Asian headlining act, BLACKPINK brought K-pop choreography, a live band and multilingual global fandom into the top slot of a major American festival."
        },
        {
            "start": "2023-03-17",
            "title": "Taylor Swift’s Eras Tour opens",
            "description": "The tour reorganized a vast catalogue by career era and amplified it through stadium economics, fan travel and a concert film, making catalog value visible in the streaming age."
        },
        {
            "start": "2023-09-29",
            "title": "U2 opens the Sphere in Las Vegas",
            "description": "Ultra-high-resolution wraparound imagery, directional sound and venue architecture jointly determined perception, turning the “backdrop” into the primary narrative medium surrounding the audience."
        }
    ]
};

var timelines = [
    tl_global_periods,
    tl_classical_periods,
    tl_popular_periods,
    tl_instruments,
    tl_systems,
    tl_classical_people,
    tl_jazz_people,
    tl_popular_people,
    tl_global_people,
    tl_works,
    tl_recordings,
    tl_concerts
];
