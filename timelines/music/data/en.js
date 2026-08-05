var title = "MUSIC HISTORY TIMELINE";

// Curated global music-history timeline. People are placed at the year they turned 20; groups are placed at formation. Genre periods are approximate editorial ranges.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// Global traditions and long musical periods
var tl_global_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "end": "-2999",
            "title": "Deep musical prehistory before 10,000 BCE and Neolithic ritual music",
            "description": "SIMILE cannot represent dates earlier than 10,000 BCE. The earliest known bone flutes and other Paleolithic evidence are compressed into this boundary, followed by Neolithic ritual and communal music.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "Mesopotamian temple and court music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "Ancient Egyptian music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "Bronze-bell and ritual music in ancient China",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "Vedic chant",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "Ancient Greek music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "Early Jewish liturgical music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "Roman and late-antique music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "Formation of Indian classical theory and raga systems",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "Byzantine chant",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "Chinese qin literati tradition",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "Japanese gagaku",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "Abbasid-era Arabic and Persian court music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "Javanese and Balinese gamelan traditions",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "Andalusi classical music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "West African griot and kora traditions",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "Qawwali and South Asian Sufi music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "Chinese opera traditions",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "Hindustani classical music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "Japanese Noh music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "Ottoman classical music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "Carnatic classical music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "Kunqu opera",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "Kabuki music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "Flamenco",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "Beijing opera",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "Tango: formation and golden age",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "Highlife",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "Samba",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "Mandopop and Chinese-language popular song",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "Raï",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "Enka",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Bossa nova",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "Nueva canción",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "Salsa: classic period",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "Música popular brasileira (MPB)",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Afrobeat",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Reggae",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "Japanese city pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "Latin pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "J-pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "K-pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "Afrobeats",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "Amapiano",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        }
    ]
};

// Western art-music periods and movements
var tl_classical_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "0500",
            "end": "1400",
            "title": "Medieval music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "Gregorian chant repertory",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "Notre-Dame polyphony and Ars antiqua",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "Ars nova",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "Renaissance music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "Franco-Flemish polyphony",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "Madrigal era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "Baroque music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "Early opera and monody",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "High Baroque",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "Galant style",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "Classical period",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "Sturm und Drang in music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "Romantic music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "Virtuoso concert culture",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "Musical nationalism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "Late Romanticism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "Impressionism and musical symbolism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "Musical modernism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "Expressionism and free atonality",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "Neoclassicism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "Serialism and twelve-tone composition",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "Musique concrète and early electronic art music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "Postwar avant-garde",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "Minimalism and post-minimalism",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Postmodern and polystylistic composition",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Spectral music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "New complexity",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Digital and multimedia art music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
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
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "African American spirituals in concert and print culture",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "Brass-band era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "Blues",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "Ragtime",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "Country and old-time music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "Gospel music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "New Orleans jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "Tin Pan Alley song era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "Jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "Classic blues and early recorded blues",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "Crooner era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "Big-band jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "Film music and soundtrack culture",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "Swing era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "Western swing",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "Bluegrass",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "Rhythm and blues",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "Bebop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "Cool jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "Doo-wop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "Hard bop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "Honky-tonk country",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "Rock and roll",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "Nashville sound",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "Soul music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Modal jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "Surf music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "Free jazz",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "Funk",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "Motown sound",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "British Invasion",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "Folk rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "Garage rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "Psychedelic rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "Progressive rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "Hard rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "Heavy metal",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "Jazz fusion",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "Dub",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "Glam rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "Outlaw country",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "Singer-songwriter era",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "Hip-hop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "Disco",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "Punk rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "Ambient music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "Post-punk",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "Industrial music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "New wave",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "Gothic rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "Old-school hip-hop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "Dancehall",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "Hardcore punk",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "Synth-pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "Electro",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "Thrash metal",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "Alternative rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "Indie rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "Golden-age hip-hop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "House music",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "Gangsta rap",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "Techno",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "World-music market category",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "Shoegaze",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "Alternative hip-hop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "Dance-pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "Grunge",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Neo-soul",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "Trance",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "Britpop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "Drum and bass",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "Post-rock",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "Emo: first and second waves",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "Nu metal",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "Electronic dance music festival culture",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "Trap",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "Contemporary indie pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "Drill",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "Streaming-era global pop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "Hyperpop",
            "description": "Approximate period used to show the emergence, consolidation or strongest historical influence of this musical tradition.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// Instruments, sound technology and production tools
var tl_instruments = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Paleolithic bone flutes before 10,000 BCE (compressed marker)",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-7999",
            "title": "Early frame drums and rattles",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-3499",
            "title": "Mesopotamian lyres and harps",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-2999",
            "title": "Egyptian arched harps",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-2499",
            "title": "Sumerian bull-headed lyres",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-1999",
            "title": "Early Chinese qin-type zithers",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-1499",
            "title": "Bronze bells in East Asian ritual ensembles",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-1199",
            "title": "Aulos and kithara in the Greek world",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-0999",
            "title": "Early forms of the sheng mouth organ",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-0699",
            "title": "Large Chinese bianzhong bell sets",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "-0499",
            "title": "Hydraulis water organ",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "0200",
            "title": "Organ technology spreads in the Roman world",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "0500",
            "title": "Development of the oud family",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "0700",
            "title": "Pipa becomes central in Chinese court music",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "0800",
            "title": "Shō mouth organ in Japanese gagaku",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "0900",
            "title": "Bowed rebab traditions expand",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1000",
            "title": "Medieval European harp and psaltery",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1100",
            "title": "Pipe organ develops large church forms",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1200",
            "title": "European lute develops from oud-related instruments",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1200",
            "title": "Kora traditions develop in West Africa",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1300",
            "title": "Santur and hammered-dulcimer families spread",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1400",
            "title": "Clavichord enters European keyboard culture",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1450",
            "title": "Harpsichord family develops",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1500",
            "title": "Viola da gamba family",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1520",
            "title": "Modern violin family emerges in northern Italy",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1550",
            "title": "Sitar develops in North India",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1560",
            "title": "Transverse flute redesign in Renaissance Europe",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1600",
            "title": "Koto becomes established in Japanese art music",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1600",
            "title": "Shamisen spreads in Japan",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1650",
            "title": "Stradivari and Cremonese violin making",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1680",
            "title": "Clarinet developed from the chalumeau",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1700",
            "title": "Cristofori develops the piano",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1720",
            "title": "Earliest surviving Cristofori piano",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1730",
            "title": "Modern oboe and bassoon families stabilize",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1750",
            "title": "Classical orchestra standardizes string sections",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1770",
            "title": "Fortepiano becomes a leading concert and domestic instrument",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1814",
            "title": "Mälzel patents the modern metronome",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1821",
            "title": "Free-reed harmonica development",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1829",
            "title": "Accordion patented",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1830",
            "title": "Modern concert harp with double-action pedals",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1832",
            "title": "Boehm-system flute development begins",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1835",
            "title": "Tuba patented",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1846",
            "title": "Saxophone patented by Adolphe Sax",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1850",
            "title": "Modern concert grand piano architecture consolidates",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1860",
            "title": "Bandoneon enters tango culture",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1870",
            "title": "Modern drum-kit components begin to combine",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1880",
            "title": "Steel-string acoustic guitar develops",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1890",
            "title": "Sousaphone developed for marching performance",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1906",
            "title": "Telharmonium public demonstrations",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1919",
            "title": "Theremin invented",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1924",
            "title": "Electric microphone transforms performance and recording",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1928",
            "title": "Ondes Martenot introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1931",
            "title": "Commercial electric guitar appears",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1934",
            "title": "Hammond organ introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1935",
            "title": "Magnetic tape recording advances in Germany",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1939",
            "title": "Modern electric bass prototypes",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1940",
            "title": "Steelpan develops in Trinidad and Tobago",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1948",
            "title": "Multitrack recording experiments",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1950",
            "title": "Fender Telecaster mass-produced solid-body guitar",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1951",
            "title": "Fender Precision Bass introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1954",
            "title": "Fender Stratocaster introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1957",
            "title": "RCA Mark II Sound Synthesizer",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1960",
            "title": "Portable transistor organs and electric keyboards spread",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1963",
            "title": "Mellotron introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1964",
            "title": "Moog modular synthesizer demonstrated",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1965",
            "title": "Fuzz and effects pedals reshape guitar tone",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1970",
            "title": "Minimoog introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1971",
            "title": "ARP 2600 semi-modular synthesizer",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1972",
            "title": "Turntable techniques become a compositional instrument in hip-hop",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1975",
            "title": "Polyphonic synthesizers enter wider use",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1979",
            "title": "Fairlight CMI sampling workstation",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1980",
            "title": "Roland TR-808 drum machine",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1981",
            "title": "Roland TB-303 bass synthesizer",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1982",
            "title": "Digital synthesizers enter the mass market",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1983",
            "title": "MIDI publicly demonstrated and standardized",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1983",
            "title": "Yamaha DX7 introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1984",
            "title": "Affordable digital samplers spread",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1987",
            "title": "Akai MPC line begins",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1989",
            "title": "Digital audio workstations emerge",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1997",
            "title": "Auto-Tune introduced",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "1999",
            "title": "Software instruments and laptop production expand",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "2001",
            "title": "Ableton Live released",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "2007",
            "title": "Smartphones become music-production and performance platforms",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "2010",
            "title": "Tablet instruments and touch interfaces spread",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        },
        {
            "start": "2020",
            "title": "Networked remote performance tools expand during the pandemic",
            "description": "A milestone in the design, spread, electrification or digital transformation of musical instruments and sound tools."
        }
    ]
};

// Notation, theory, institutions and music industry
var tl_systems = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1399",
            "title": "Hurrian hymn tablets",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "-0499",
            "title": "Greek harmonic theory develops",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "-0299",
            "title": "Chinese pitch-pipe and modal theory codified",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "0100",
            "title": "Seikilos epitaph preserves complete ancient notation",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "0200",
            "title": "Natya Shastra systematizes South Asian performance theory",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "0500",
            "title": "Boethius transmits ancient music theory to medieval Europe",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "0800",
            "title": "Neumatic notation spreads in Western chant",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1025",
            "title": "Guido of Arezzo develops staff-based pedagogy",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1250",
            "title": "Mensural notation enables measured polyphony",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1320",
            "title": "Ars nova notation expands rhythmic possibilities",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1450",
            "title": "Music copying workshops expand manuscript circulation",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1501",
            "title": "Petrucci publishes major collection of printed polyphonic music",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1558",
            "title": "Zarlino publishes Le istitutioni harmoniche",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1597",
            "title": "Early opera Dafne produced",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1607",
            "title": "Monteverdi’s L’Orfeo establishes an enduring operatic model",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1637",
            "title": "First public opera house opens in Venice",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1669",
            "title": "Paris Opera founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1672",
            "title": "First sustained public concert series in London",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1710",
            "title": "European music publishing expands through engraved editions",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1725",
            "title": "Fux publishes Gradus ad Parnassum",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1750",
            "title": "Public concert culture expands across Europe",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1771",
            "title": "Vienna Tonkünstler-Societät supports public orchestral concerts",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1795",
            "title": "Paris Conservatoire founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1808",
            "title": "Large public benefit concert demonstrates modern concert scale",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1813",
            "title": "Royal Philharmonic Society founded in London",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1824",
            "title": "Beethoven’s Ninth links symphony, chorus and public humanism",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1842",
            "title": "New York Philharmonic founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1843",
            "title": "Leipzig Conservatory founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1857",
            "title": "Phonautograph records sound waves",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1867",
            "title": "Copyright and performance-right systems expand in Europe",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1877",
            "title": "Edison demonstrates recording and playback with the phonograph",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1887",
            "title": "Gramophone disc system patented",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1891",
            "title": "Carnegie Hall opens",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1897",
            "title": "Gramophone Company founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1901",
            "title": "Victor Talking Machine Company founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1906",
            "title": "Victrola brings recorded music into domestic furniture culture",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1914",
            "title": "ASCAP founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1920",
            "title": "Commercial radio broadcasting begins reshaping music audiences",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1925",
            "title": "Electrical recording replaces acoustic recording",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1927",
            "title": "First feature-length synchronized-sound film accelerates screen music",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1935",
            "title": "Magnetic tape recording demonstrated at broadcasting scale",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1936",
            "title": "Billboard publishes major popular-music charts",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1948",
            "title": "Columbia introduces the 33⅓ rpm LP",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1949",
            "title": "RCA introduces the 45 rpm single",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1954",
            "title": "Portable transistor radio expands youth listening",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1958",
            "title": "First Grammy Awards cycle established",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1958",
            "title": "Stereo LP becomes a commercial standard",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1962",
            "title": "Compact cassette introduced",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1964",
            "title": "Moog synthesizer helps establish voltage-controlled electronic production",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1967",
            "title": "Rolling Stone magazine founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1979",
            "title": "Sony Walkman makes private mobile listening mainstream",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1981",
            "title": "MTV launches",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1982",
            "title": "Compact disc commercial launch",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1983",
            "title": "MIDI 1.0 published",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1985",
            "title": "Parental Advisory controversy reshapes music labeling",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1988",
            "title": "Digital audio tape enters the market",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1991",
            "title": "SoundScan changes chart measurement",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1993",
            "title": "MPEG-1 Audio Layer III standard and early MP3 implementation",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1995",
            "title": ".mp3 file extension adopted",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "1999",
            "title": "Napster launches peer-to-peer music sharing",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2001",
            "title": "iPod launched",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2003",
            "title": "iTunes Music Store launches",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2005",
            "title": "YouTube launches",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2007",
            "title": "SoundCloud founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2008",
            "title": "Bandcamp founded",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2008",
            "title": "Spotify launches",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2011",
            "title": "Global album-release day coordination begins evolving",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2015",
            "title": "Friday becomes the coordinated global release day",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2015",
            "title": "Streaming becomes central to chart and certification systems",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2017",
            "title": "Subscription streaming becomes the dominant growth engine of recorded music",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2020",
            "title": "Livestream concerts become a mass format during COVID-19 closures",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        },
        {
            "start": "2023",
            "title": "Generative AI intensifies debates over authorship, training data and musical labor",
            "description": "A major change in notation, theory, performance institutions, publishing, broadcasting or the music business."
        }
    ]
};

// Composers and art-music innovators
var tl_classical_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0609",
            "title": "Sappho (630 BCE–c. 570 BCE)",
            "description": ". Influential ancient and ritual music songwriter and performer."
        },
        {
            "start": "0497",
            "title": "Boethius (477–524)",
            "description": "Influential medieval music theorist and musical thinker."
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen (1098–1179)",
            "description": "Influential medieval music composer."
        },
        {
            "start": "1170",
            "title": "Léonin (1150–1201)",
            "description": "Influential medieval music composer."
        },
        {
            "start": "1180",
            "title": "Pérotin (1160–1230)",
            "description": "Influential medieval music composer."
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut (1300–1377)",
            "description": "Influential medieval music composer."
        },
        {
            "start": "1345",
            "title": "Francesco Landini (1325–1397)",
            "description": "Influential medieval music composer."
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay (1397–1474)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem (1410–1497)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1470",
            "title": "Josquin des Prez (1450–1521)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1510",
            "title": "Adrian Willaert (1490–1562)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina (1525–1594)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso (1532–1594)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1560",
            "title": "William Byrd (1540–1623)",
            "description": "Influential Renaissance music composer."
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi (1567–1643)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi (1583–1643)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz (1585–1672)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully (1632–1687)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude (1637–1707)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli (1653–1713)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1679",
            "title": "Henry Purcell (1659–1695)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti (1660–1725)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1688",
            "title": "François Couperin (1668–1733)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi (1678–1741)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann (1681–1767)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau (1683–1764)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti (1685–1757)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1705",
            "title": "George Frideric Handel (1685–1759)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach (1685–1750)",
            "description": "Influential Baroque music composer."
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach (1714–1788)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck (1714–1787)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1752",
            "title": "Joseph Haydn (1732–1809)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini (1743–1805)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1770",
            "title": "Antonio Salieri (1750–1825)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart (1756–1791)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven (1770–1827)",
            "description": "Influential Classical-period music composer."
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini (1782–1840)",
            "description": "Influential Romantic music instrumentalist."
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber (1786–1826)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini (1792–1868)",
            "description": "Influential opera composer."
        },
        {
            "start": "1817",
            "title": "Franz Schubert (1797–1828)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1823",
            "title": "Hector Berlioz (1803–1869)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka (1804–1857)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn (1809–1847)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin (1810–1849)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1830",
            "title": "Robert Schumann (1810–1856)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1831",
            "title": "Franz Liszt (1811–1886)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi (1813–1901)",
            "description": "Influential opera composer."
        },
        {
            "start": "1833",
            "title": "Richard Wagner (1813–1883)",
            "description": "Influential opera composer."
        },
        {
            "start": "1839",
            "title": "Clara Schumann (1819–1896)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach (1819–1880)",
            "description": "Influential opera composer."
        },
        {
            "start": "1844",
            "title": "Anton Bruckner (1824–1896)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana (1824–1884)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1845",
            "title": "Johann Strauss II (1825–1899)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1853",
            "title": "Johannes Brahms (1833–1897)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns (1835–1921)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1858",
            "title": "Georges Bizet (1838–1875)",
            "description": "Influential opera composer."
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky (1839–1881)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky (1840–1893)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák (1841–1904)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1863",
            "title": "Edvard Grieg (1843–1907)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov (1844–1908)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré (1845–1924)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini (1858–1924)",
            "description": "Influential opera composer."
        },
        {
            "start": "1880",
            "title": "Gustav Mahler (1860–1911)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1882",
            "title": "Claude Debussy (1862–1918)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1884",
            "title": "Richard Strauss (1864–1949)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1885",
            "title": "Jean Sibelius (1865–1957)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1886",
            "title": "Erik Satie (1866–1925)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams (1872–1958)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff (1873–1943)",
            "description": "Influential Romantic music composer."
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg (1874–1951)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1894",
            "title": "Gustav Holst (1874–1934)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1895",
            "title": "Maurice Ravel (1875–1937)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1901",
            "title": "Béla Bartók (1881–1945)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky (1882–1971)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1903",
            "title": "Anton Webern (1883–1945)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1905",
            "title": "Alban Berg (1885–1935)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev (1891–1953)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1912",
            "title": "Arthur Honegger (1892–1955)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1912",
            "title": "Darius Milhaud (1892–1974)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1915",
            "title": "Carl Orff (1895–1982)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1915",
            "title": "Paul Hindemith (1895–1963)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1918",
            "title": "George Gershwin (1898–1937)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1920",
            "title": "Aaron Copland (1900–1990)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich (1906–1975)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen (1908–1992)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1932",
            "title": "John Cage (1912–1992)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1933",
            "title": "Benjamin Britten (1913–1976)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein (1918–1990)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1943",
            "title": "György Ligeti (1923–2006)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1945",
            "title": "Pierre Boulez (1925–2016)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen (1928–2007)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu (1930–1996)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1955",
            "title": "Arvo Pärt (born 1935)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1956",
            "title": "Steve Reich (born 1936)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1957",
            "title": "Philip Glass (born 1937)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1967",
            "title": "John Adams (born 1947)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho (1952–2023)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1977",
            "title": "Tan Dun (born 1957)",
            "description": "Influential modern and contemporary art music composer."
        },
        {
            "start": "1981",
            "title": "Unsuk Chin (born 1961)",
            "description": "Influential modern and contemporary art music composer."
        }
    ]
};

// Blues, jazz, gospel, R&B, soul and funk figures
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin (1868–1917)",
            "description": "Influential jazz composer."
        },
        {
            "start": "1893",
            "title": "W. C. Handy (1873–1958)",
            "description": "Influential blues composer."
        },
        {
            "start": "1906",
            "title": "Ma Rainey (1886–1939)",
            "description": "Influential blues singer."
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton (1890–1941)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1914",
            "title": "Bessie Smith (1894–1937)",
            "description": "Influential blues singer."
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson (1897–1952)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford (1897–1952)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1917",
            "title": "Sidney Bechet (1897–1959)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1919",
            "title": "Duke Ellington (1899–1974)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1921",
            "title": "Louis Armstrong (1901–1971)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke (1903–1931)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins (1904–1969)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1924",
            "title": "Count Basie (1904–1984)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1924",
            "title": "Fats Waller (1904–1943)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1929",
            "title": "Art Tatum (1909–1956)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1930",
            "title": "Django Reinhardt (1910–1953)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf (1910–1976)",
            "description": "Influential blues singer."
        },
        {
            "start": "1930",
            "title": "T-Bone Walker (1910–1975)",
            "description": "Influential blues instrumentalist."
        },
        {
            "start": "1931",
            "title": "Robert Johnson (1911–1938)",
            "description": "Influential blues songwriter and performer."
        },
        {
            "start": "1933",
            "title": "Muddy Waters (1913–1983)",
            "description": "Influential blues singer."
        },
        {
            "start": "1935",
            "title": "Billie Holiday (1915–1959)",
            "description": "Influential jazz singer."
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe (1915–1973)",
            "description": "Influential gospel instrumentalist."
        },
        {
            "start": "1936",
            "title": "Charlie Christian (1916–1942)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie (1917–1993)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald (1917–1996)",
            "description": "Influential jazz singer."
        },
        {
            "start": "1937",
            "title": "Thelonious Monk (1917–1982)",
            "description": "Influential jazz composer."
        },
        {
            "start": "1940",
            "title": "Charlie Parker (1920–1955)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1940",
            "title": "Dave Brubeck (1920–2012)",
            "description": "Influential jazz composer."
        },
        {
            "start": "1942",
            "title": "Charles Mingus (1922–1979)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1944",
            "title": "Bud Powell (1924–1966)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan (1924–1990)",
            "description": "Influential jazz singer."
        },
        {
            "start": "1945",
            "title": "B. B. King (1925–2015)",
            "description": "Influential blues instrumentalist."
        },
        {
            "start": "1946",
            "title": "John Coltrane (1926–1967)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1946",
            "title": "Miles Davis (1926–1991)",
            "description": "Influential jazz bandleader and composer."
        },
        {
            "start": "1949",
            "title": "Bill Evans (1929–1980)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1949",
            "title": "Cecil Taylor (1929–2018)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1949",
            "title": "Chet Baker (1929–1988)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1950",
            "title": "Clifford Brown (1930–1986)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1950",
            "title": "Ornette Coleman (1930–2015)",
            "description": "Influential jazz composer."
        },
        {
            "start": "1950",
            "title": "Ray Charles (1930–2004)",
            "description": "Influential rhythm and blues singer."
        },
        {
            "start": "1950",
            "title": "Sonny Rollins (born 1930)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1951",
            "title": "Sam Cooke (1931–1964)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1953",
            "title": "James Brown (1933–2006)",
            "description": "Influential funk singer."
        },
        {
            "start": "1953",
            "title": "Nina Simone (1933–2006)",
            "description": "Influential jazz singer."
        },
        {
            "start": "1953",
            "title": "Wayne Shorter (1933–2023)",
            "description": "Influential jazz composer."
        },
        {
            "start": "1959",
            "title": "Marvin Gaye (1939–1984)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1960",
            "title": "Herbie Hancock (born 1940)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1961",
            "title": "Chick Corea (1941–2021)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1961",
            "title": "George Clinton (born 1941)",
            "description": "Influential funk bandleader and composer."
        },
        {
            "start": "1961",
            "title": "Otis Redding (1941–1967)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1962",
            "title": "Aretha Franklin (1942–2018)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield (1942–1999)",
            "description": "Influential soul music songwriter and performer."
        },
        {
            "start": "1963",
            "title": "Sly Stone (born 1943)",
            "description": "Influential funk bandleader and composer."
        },
        {
            "start": "1965",
            "title": "Keith Jarrett (born 1945)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1966",
            "title": "Al Green (born 1946)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1970",
            "title": "Stevie Wonder (born 1950)",
            "description": "Influential soul music songwriter and performer."
        },
        {
            "start": "1974",
            "title": "Pat Metheny (born 1954)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1978",
            "title": "Prince (1958–2016)",
            "description": "Influential funk songwriter and performer."
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis (born 1961)",
            "description": "Influential jazz instrumentalist."
        },
        {
            "start": "1991",
            "title": "Erykah Badu (born 1971)",
            "description": "Influential soul music singer."
        },
        {
            "start": "1994",
            "title": "D’Angelo (born 1974)",
            "description": "Influential soul music singer."
        },
        {
            "start": "2001",
            "title": "Beyoncé (born 1981)",
            "description": "Influential rhythm and blues singer."
        },
        {
            "start": "2003",
            "title": "Amy Winehouse (1983–2011)",
            "description": "Influential soul music singer."
        }
    ]
};

// Rock, pop, country, hip-hop and electronic figures
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers (1897–1933)",
            "description": "Influential country and roots music singer."
        },
        {
            "start": "1931",
            "title": "Bill Monroe (1911–1996)",
            "description": "Influential country and roots music instrumentalist."
        },
        {
            "start": "1932",
            "title": "Woody Guthrie (1912–1967)",
            "description": "Influential folk and singer-songwriter music songwriter and performer."
        },
        {
            "start": "1935",
            "title": "Frank Sinatra (1915–1998)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1935",
            "title": "Édith Piaf (1915–1963)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1939",
            "title": "Nat King Cole (1919–1965)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1939",
            "title": "Pete Seeger (1919–2014)",
            "description": "Influential folk and singer-songwriter music songwriter and performer."
        },
        {
            "start": "1943",
            "title": "Hank Williams (1923–1953)",
            "description": "Influential country and roots music songwriter and performer."
        },
        {
            "start": "1946",
            "title": "Chuck Berry (1926–2017)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1948",
            "title": "Bo Diddley (1928–2008)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1948",
            "title": "Fats Domino (1928–2017)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1952",
            "title": "Johnny Cash (1932–2003)",
            "description": "Influential country and roots music songwriter and performer."
        },
        {
            "start": "1952",
            "title": "Little Richard (1932–2020)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1952",
            "title": "Patsy Cline (1932–1963)",
            "description": "Influential country and roots music singer."
        },
        {
            "start": "1953",
            "title": "Willie Nelson (born 1933)",
            "description": "Influential country and roots music songwriter and performer."
        },
        {
            "start": "1954",
            "title": "Leonard Cohen (1934–2016)",
            "description": "Influential folk and singer-songwriter music songwriter and performer."
        },
        {
            "start": "1954",
            "title": "The Isley Brothers formed",
            "description": "Formation marker for an influential rhythm and blues group."
        },
        {
            "start": "1955",
            "title": "Elvis Presley (1935–1977)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis (1935–2022)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1956",
            "title": "Buddy Holly (1936–1959)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1956",
            "title": "Roy Orbison (1936–1988)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1957",
            "title": "The Supremes formed",
            "description": "Formation marker for an influential soul music group."
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder (born 1940)",
            "description": "Influential electronic music producer and musician."
        },
        {
            "start": "1960",
            "title": "John Lennon (1940–1980)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1960",
            "title": "Ringo Starr (born 1940)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1960",
            "title": "The Beatles formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1961",
            "title": "Bob Dylan (born 1941)",
            "description": "Influential folk and singer-songwriter music songwriter and performer."
        },
        {
            "start": "1961",
            "title": "Joan Baez (born 1941)",
            "description": "Influential folk and singer-songwriter music singer."
        },
        {
            "start": "1961",
            "title": "The Beach Boys formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1962",
            "title": "Barbra Streisand (born 1942)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1962",
            "title": "Brian Wilson (born 1942)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1962",
            "title": "Carole King (born 1942)",
            "description": "Influential popular music songwriter and performer."
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix (1942–1970)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1962",
            "title": "Paul McCartney (born 1942)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1962",
            "title": "The Rolling Stones formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1963",
            "title": "George Harrison (1943–2001)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1963",
            "title": "Janis Joplin (1943–1970)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1963",
            "title": "Jim Morrison (1943–1971)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1963",
            "title": "Joni Mitchell (born 1943)",
            "description": "Influential folk and singer-songwriter music songwriter and performer."
        },
        {
            "start": "1963",
            "title": "Keith Richards (born 1943)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1963",
            "title": "Mick Jagger (born 1943)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1964",
            "title": "Jimmy Page (born 1944)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1964",
            "title": "The Who formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1965",
            "title": "Debbie Harry (born 1945)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1965",
            "title": "Eric Clapton (born 1945)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister (1945–2015)",
            "description": "Influential heavy metal singer."
        },
        {
            "start": "1965",
            "title": "Pink Floyd formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1965",
            "title": "The Doors formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1966",
            "title": "Dolly Parton (born 1946)",
            "description": "Influential country and roots music songwriter and performer."
        },
        {
            "start": "1966",
            "title": "Freddie Mercury (1946–1991)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1966",
            "title": "Patti Smith (born 1946)",
            "description": "Influential punk and alternative rock songwriter and performer."
        },
        {
            "start": "1966",
            "title": "The Velvet Underground formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1967",
            "title": "Brian May (born 1947)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1967",
            "title": "Carlos Santana (born 1947)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1967",
            "title": "David Bowie (1947–2016)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1967",
            "title": "Elton John (born 1947)",
            "description": "Influential popular music songwriter and performer."
        },
        {
            "start": "1967",
            "title": "Iggy Pop (born 1947)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1968",
            "title": "Black Sabbath formed",
            "description": "Formation marker for an influential heavy metal group."
        },
        {
            "start": "1968",
            "title": "Brian Eno (born 1948)",
            "description": "Influential electronic music producer and musician."
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre (born 1948)",
            "description": "Influential electronic music composer."
        },
        {
            "start": "1968",
            "title": "Led Zeppelin formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne (born 1948)",
            "description": "Influential heavy metal singer."
        },
        {
            "start": "1968",
            "title": "Robert Plant (born 1948)",
            "description": "Influential rock music singer."
        },
        {
            "start": "1968",
            "title": "Stevie Nicks (born 1948)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1968",
            "title": "Tony Iommi (born 1948)",
            "description": "Influential heavy metal instrumentalist."
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen (born 1949)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1970",
            "title": "Kraftwerk formed",
            "description": "Formation marker for an influential electronic music group."
        },
        {
            "start": "1970",
            "title": "Peter Gabriel (born 1950)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1970",
            "title": "Queen formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1970",
            "title": "Tom Petty (1950–2017)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1971",
            "title": "Eagles formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1971",
            "title": "Joey Ramone (1951–2001)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1972",
            "title": "David Byrne (born 1952)",
            "description": "Influential punk and alternative rock songwriter and performer."
        },
        {
            "start": "1974",
            "title": "Ramones formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc (born 1955)",
            "description": "Influential hip-hop DJ and musical innovator."
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen (1955–2020)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1975",
            "title": "Sex Pistols formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1976",
            "title": "Johnny Rotten (born 1956)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1976",
            "title": "Joy Division formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1976",
            "title": "The Clash formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1976",
            "title": "U2 formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa (born 1957)",
            "description": "Influential hip-hop DJ and musical innovator."
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux (born 1957)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1977",
            "title": "Talking Heads formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash (born 1958)",
            "description": "Influential hip-hop DJ and musical innovator."
        },
        {
            "start": "1978",
            "title": "Kate Bush (born 1958)",
            "description": "Influential popular music songwriter and performer."
        },
        {
            "start": "1978",
            "title": "Madonna (born 1958)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1978",
            "title": "Michael Jackson (1958–2009)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1978",
            "title": "The Cure formed",
            "description": "Formation marker for an influential punk and alternative rock group."
        },
        {
            "start": "1979",
            "title": "Morrissey (born 1959)",
            "description": "Influential punk and alternative rock singer."
        },
        {
            "start": "1979",
            "title": "Robert Smith (born 1959)",
            "description": "Influential punk and alternative rock songwriter and performer."
        },
        {
            "start": "1980",
            "title": "Chuck D (born 1960)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1981",
            "title": "Metallica formed",
            "description": "Formation marker for an influential heavy metal group."
        },
        {
            "start": "1983",
            "title": "George Michael (born 1963)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1983",
            "title": "James Hetfield (born 1963)",
            "description": "Influential heavy metal singer."
        },
        {
            "start": "1983",
            "title": "Johnny Marr (born 1963)",
            "description": "Influential punk and alternative rock instrumentalist."
        },
        {
            "start": "1983",
            "title": "Lars Ulrich (born 1963)",
            "description": "Influential heavy metal instrumentalist."
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. formed",
            "description": "Formation marker for an influential hip-hop group."
        },
        {
            "start": "1983",
            "title": "Whitney Houston (born 1963)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1985",
            "title": "Björk (born 1965)",
            "description": "Influential electronic music singer."
        },
        {
            "start": "1985",
            "title": "Dr. Dre (born 1965)",
            "description": "Influential hip-hop producer and musician."
        },
        {
            "start": "1985",
            "title": "KRS-One (born 1965)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1985",
            "title": "Radiohead formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1986",
            "title": "Janet Jackson (born 1966)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1987",
            "title": "Kurt Cobain (1967–1994)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1987",
            "title": "Nirvana formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest formed",
            "description": "Formation marker for an influential hip-hop group."
        },
        {
            "start": "1988",
            "title": "Celine Dion (born 1968)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1988",
            "title": "LL Cool J (born 1968)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1988",
            "title": "Massive Attack formed",
            "description": "Formation marker for an influential electronic music group."
        },
        {
            "start": "1988",
            "title": "Rakim (born 1968)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1988",
            "title": "Thom Yorke (born 1968)",
            "description": "Influential rock music songwriter and performer."
        },
        {
            "start": "1989",
            "title": "Dave Grohl (born 1969)",
            "description": "Influential rock music instrumentalist."
        },
        {
            "start": "1989",
            "title": "Ice Cube (born 1969)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1989",
            "title": "Jay-Z (born 1969)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1989",
            "title": "Mariah Carey (born 1969)",
            "description": "Influential popular music singer."
        },
        {
            "start": "1991",
            "title": "Aphex Twin (born 1971)",
            "description": "Influential electronic music producer and musician."
        },
        {
            "start": "1991",
            "title": "Missy Elliott (born 1971)",
            "description": "Influential hip-hop producer and musician."
        },
        {
            "start": "1991",
            "title": "Oasis formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1991",
            "title": "Tupac Shakur (1971–1996)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1992",
            "title": "Eminem (born 1972)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G. (1972–1997)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1993",
            "title": "Daft Punk formed",
            "description": "Formation marker for an influential electronic music group."
        },
        {
            "start": "1993",
            "title": "Nas (born 1973)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1995",
            "title": "Lauryn Hill (born 1975)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "1995",
            "title": "M.I.A. (born 1975)",
            "description": "Influential electronic music singer."
        },
        {
            "start": "1995",
            "title": "The White Stripes formed",
            "description": "Formation marker for an influential rock music group."
        },
        {
            "start": "1997",
            "title": "Kanye West (born 1977)",
            "description": "Influential hip-hop producer and musician."
        },
        {
            "start": "2002",
            "title": "Nicki Minaj (born 1982)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "2006",
            "title": "Lady Gaga (born 1986)",
            "description": "Influential popular music singer."
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar (born 1987)",
            "description": "Influential hip-hop singer."
        },
        {
            "start": "2008",
            "title": "Adele (born 1988)",
            "description": "Influential popular music singer."
        },
        {
            "start": "2009",
            "title": "Taylor Swift (born 1989)",
            "description": "Influential popular music songwriter and performer."
        },
        {
            "start": "2021",
            "title": "Billie Eilish (born 2001)",
            "description": "Influential popular music singer."
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
            "description": "Influential South Asian music composer."
        },
        {
            "start": "1520",
            "title": "Tansen (1500–1586)",
            "description": "Influential South Asian music singer."
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu (1536–1611)",
            "description": "Influential East Asian music theorist and musical thinker."
        },
        {
            "start": "1782",
            "title": "Syama Sastri (1762–1827)",
            "description": "Influential South Asian music composer."
        },
        {
            "start": "1787",
            "title": "Tyagaraja (1767–1847)",
            "description": "Influential South Asian music composer."
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar (1775–1835)",
            "description": "Influential South Asian music composer."
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing) (1889–1935)",
            "description": "Influential East Asian music instrumentalist."
        },
        {
            "start": "1910",
            "title": "Carlos Gardel (1890–1935)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1915",
            "title": "Liu Tianhua (1895–1932)",
            "description": "Influential East Asian music composer."
        },
        {
            "start": "1918",
            "title": "Umm Kulthum (1898–1975)",
            "description": "Influential Middle Eastern and North African music singer."
        },
        {
            "start": "1925",
            "title": "Xian Xinghai (1905–1945)",
            "description": "Influential East Asian music composer."
        },
        {
            "start": "1932",
            "title": "Nie Er (1912–1935)",
            "description": "Influential East Asian music composer."
        },
        {
            "start": "1936",
            "title": "Bismillah Khan (1916–2016)",
            "description": "Influential South Asian music instrumentalist."
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi (1916–2004)",
            "description": "Influential South Asian music singer."
        },
        {
            "start": "1936",
            "title": "Ravi Shankar (1916–2013)",
            "description": "Influential South Asian music instrumentalist."
        },
        {
            "start": "1938",
            "title": "Zhou Xuan (1918–1957)",
            "description": "Influential East Asian music singer."
        },
        {
            "start": "1939",
            "title": "Chavela Vargas (1919–2012)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan (1920–2012)",
            "description": "Influential South Asian music instrumentalist."
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla (1921–1992)",
            "description": "Influential Latin American music composer."
        },
        {
            "start": "1943",
            "title": "Tito Puente (1923–2000)",
            "description": "Influential Latin American music bandleader and composer."
        },
        {
            "start": "1945",
            "title": "Celia Cruz (1925–2003)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim (1927–1994)",
            "description": "Influential Latin American music composer."
        },
        {
            "start": "1951",
            "title": "João Gilberto (1931–2019)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1952",
            "title": "Miriam Makeba (1932–2008)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "1954",
            "title": "Fairuz (born 1934)",
            "description": "Influential Middle Eastern and North African music singer."
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa (1935–2009)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry (1936–2021)",
            "description": "Influential reggae and Jamaican music producer and musician."
        },
        {
            "start": "1957",
            "title": "Hibari Misora (1937–1989)",
            "description": "Influential East Asian music singer."
        },
        {
            "start": "1958",
            "title": "Fela Kuti (1938–1997)",
            "description": "Influential African popular and traditional music bandleader and composer."
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré (1939–2006)",
            "description": "Influential African popular and traditional music instrumentalist."
        },
        {
            "start": "1961",
            "title": "Cesária Évora (1941–2011)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "1962",
            "title": "Caetano Veloso (born 1942)",
            "description": "Influential Latin American music songwriter and performer."
        },
        {
            "start": "1962",
            "title": "Gilberto Gil (born 1942)",
            "description": "Influential Latin American music songwriter and performer."
        },
        {
            "start": "1962",
            "title": "Milton Nascimento (born 1942)",
            "description": "Influential Latin American music songwriter and performer."
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff (born 1944)",
            "description": "Influential reggae and Jamaican music singer."
        },
        {
            "start": "1964",
            "title": "Peter Tosh (1944–1987)",
            "description": "Influential reggae and Jamaican music singer."
        },
        {
            "start": "1965",
            "title": "Bob Marley (1945–1981)",
            "description": "Influential reggae and Jamaican music songwriter and performer."
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan (1948–1997)",
            "description": "Influential South Asian music singer."
        },
        {
            "start": "1969",
            "title": "Salif Keita (born 1949)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "1970",
            "title": "Juan Gabriel (1950–2016)",
            "description": "Influential Latin American music songwriter and performer."
        },
        {
            "start": "1971",
            "title": "Zakir Hussain (1951–2024)",
            "description": "Influential South Asian music instrumentalist."
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto (1952–2023)",
            "description": "Influential East Asian music composer."
        },
        {
            "start": "1973",
            "title": "Kitarō (born 1953)",
            "description": "Influential East Asian music composer."
        },
        {
            "start": "1973",
            "title": "Teresa Teng (1953–1995)",
            "description": "Influential East Asian music singer."
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra formed",
            "description": "Formation marker for an influential electronic music group."
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour (born 1959)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo (born 1960)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "1989",
            "title": "Faye Wong (born 1969)",
            "description": "Influential East Asian music singer."
        },
        {
            "start": "1991",
            "title": "Selena (1971–1995)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys formed",
            "description": "Formation marker for an influential East Asian music group."
        },
        {
            "start": "1997",
            "title": "Shakira (born 1977)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "1999",
            "title": "Jay Chou (born 1979)",
            "description": "Influential East Asian music songwriter and performer."
        },
        {
            "start": "2003",
            "title": "Hikaru Utada (born 1983)",
            "description": "Influential East Asian music songwriter and performer."
        },
        {
            "start": "2011",
            "title": "Burna Boy (born 1991)",
            "description": "Influential African popular and traditional music singer."
        },
        {
            "start": "2013",
            "title": "BTS formed",
            "description": "Formation marker for an influential popular music group."
        },
        {
            "start": "2014",
            "title": "Bad Bunny (born 1994)",
            "description": "Influential Latin American music singer."
        },
        {
            "start": "2016",
            "title": "BLACKPINK formed",
            "description": "Formation marker for an influential popular music group."
        }
    ]
};

// Major compositions, operas, musicals and premieres
var tl_works = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1151",
            "title": "Hildegard’s Ordo Virtutum",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1360",
            "title": "Machaut’s Messe de Nostre Dame",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1597",
            "title": "Peri and Corsi’s Dafne",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1607",
            "title": "Monteverdi’s L’Orfeo premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1642",
            "title": "Monteverdi’s L’incoronazione di Poppea",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1689",
            "title": "Purcell’s Dido and Aeneas",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1711",
            "title": "Handel’s Rinaldo premieres in London",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1721",
            "title": "Bach’s Brandenburg Concertos assembled",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1725",
            "title": "Vivaldi’s The Four Seasons published",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1741",
            "title": "Bach’s Goldberg Variations published",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1742",
            "title": "Handel’s Messiah premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1749",
            "title": "Handel’s Music for the Royal Fireworks",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1762",
            "title": "Gluck’s Orfeo ed Euridice premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1786",
            "title": "Mozart’s The Marriage of Figaro premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1787",
            "title": "Mozart’s Don Giovanni premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1791",
            "title": "Mozart’s The Magic Flute premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1805",
            "title": "Beethoven’s Eroica Symphony public premiere",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven premieres the Fifth and Sixth Symphonies",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1816",
            "title": "Rossini’s The Barber of Seville premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1821",
            "title": "Weber’s Der Freischütz premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth Symphony premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1830",
            "title": "Berlioz’s Symphonie fantastique premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1831",
            "title": "Bellini’s Norma premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1842",
            "title": "Verdi’s Nabucco premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1845",
            "title": "Mendelssohn’s Violin Concerto premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1853",
            "title": "Verdi’s La traviata premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1865",
            "title": "Wagner’s Tristan und Isolde premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1871",
            "title": "Verdi’s Aida premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1876",
            "title": "Complete Ring cycle opens at Bayreuth",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1877",
            "title": "Tchaikovsky’s Swan Lake premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1882",
            "title": "Wagner’s Parsifal premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1888",
            "title": "Rimsky-Korsakov’s Scheherazade premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1890",
            "title": "Mascagni’s Cavalleria rusticana premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1892",
            "title": "Tchaikovsky’s The Nutcracker premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1893",
            "title": "Dvořák’s New World Symphony premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1896",
            "title": "Puccini’s La bohème premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1900",
            "title": "Puccini’s Tosca premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1902",
            "title": "Debussy’s Pelléas et Mélisande premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1905",
            "title": "Richard Strauss’s Salome premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1910",
            "title": "Stravinsky’s The Firebird premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1911",
            "title": "Stravinsky’s Petrushka premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1912",
            "title": "Schoenberg’s Pierrot lunaire premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premieres in Paris",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1918",
            "title": "Holst’s The Planets receives complete public performance",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1924-02-12",
            "title": "Gershwin’s Rhapsody in Blue premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1925",
            "title": "Berg’s Wozzeck premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1927",
            "title": "Show Boat opens on Broadway",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1928",
            "title": "Ravel’s Boléro premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1935",
            "title": "Porgy and Bess premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1937",
            "title": "Orff’s Carmina Burana premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1943",
            "title": "Oklahoma! opens on Broadway",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1944",
            "title": "Copland’s Appalachian Spring premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1945",
            "title": "Britten’s Peter Grimes premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1952-08-29",
            "title": "Cage’s 4′33″ premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1956",
            "title": "Stockhausen’s Gesang der Jünglinge completed",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1957",
            "title": "West Side Story opens on Broadway",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1958",
            "title": "Varèse’s Poème électronique at the Brussels World’s Fair",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1964",
            "title": "Terry Riley’s In C premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1976",
            "title": "Glass’s Einstein on the Beach premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1977",
            "title": "Star Wars establishes a new blockbuster orchestral film-score model",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "1987",
            "title": "John Adams’s Nixon in China premieres",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
        },
        {
            "start": "2015",
            "title": "Hamilton opens on Broadway",
            "description": "A major composition, stage work or premiere that changed musical language, repertory or performance practice."
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
            "description": "Landmark Classical-period music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "Landmark Classical-period music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "Landmark Classical-period music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "Landmark South Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "Landmark Latin American music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "Landmark blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "Landmark funk recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "Landmark Latin American music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "Landmark Middle Eastern and North African music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "Landmark reggae and Jamaican music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "Landmark jazz recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "Landmark reggae and Jamaican music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "Landmark global music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "Landmark South Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "Landmark South Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "Landmark heavy metal recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "Landmark punk and alternative rock recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "Landmark Latin American music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "Landmark soul music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "Landmark rock music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "Landmark folk and singer-songwriter music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "Landmark electronic music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "Landmark East Asian music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "Landmark hip-hop recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "Landmark Latin American music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "Landmark Latin American music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "Landmark rhythm and blues recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "Landmark country and roots music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "Landmark popular music recording whose release influenced repertoire, production, performance or musical culture."
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "Landmark African popular and traditional music recording whose release influenced repertoire, production, performance or musical culture."
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
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven’s Vienna marathon concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth premiere concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1850-09-11",
            "title": "Jenny Lind begins the American tour promoted by P. T. Barnum",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1871",
            "title": "Fisk Jubilee Singers begin major tours",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1876-08-13",
            "title": "First Bayreuth Festival opens with the Ring cycle",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1891-05-05",
            "title": "Carnegie Hall opening night",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1912-05-02",
            "title": "James Reese Europe’s Clef Club Orchestra at Carnegie Hall",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premiere and audience uproar",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1924-02-12",
            "title": "An Experiment in Modern Music premieres Rhapsody in Blue",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1938-01-16",
            "title": "Benny Goodman Carnegie Hall concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1939-04-09",
            "title": "Marian Anderson sings at the Lincoln Memorial",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1943-01-23",
            "title": "Duke Ellington presents Black, Brown and Beige at Carnegie Hall",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1954-07-17",
            "title": "First Newport Jazz Festival",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1959-07-11",
            "title": "First Newport Folk Festival",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1964-02-12",
            "title": "The Beatles perform at Carnegie Hall",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1965-07-25",
            "title": "Bob Dylan goes electric at Newport Folk Festival",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1965-08-15",
            "title": "The Beatles at Shea Stadium",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1966-06-30",
            "title": "The Beatles begin Budokan concerts in Tokyo",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1967-06-16",
            "title": "Monterey International Pop Festival opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1968-12-11",
            "title": "The Rolling Stones Rock and Roll Circus filmed",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1969-12-06",
            "title": "Altamont Free Concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1969-08-15",
            "title": "Woodstock Music & Art Fair opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1970-08-26",
            "title": "Isle of Wight Festival 1970 opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1971-08-01",
            "title": "Concert for Bangladesh",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1971",
            "title": "Pink Floyd: Live at Pompeii filmed",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1972-08-20",
            "title": "Wattstax festival",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1973-01-14",
            "title": "Elvis: Aloha from Hawaii satellite concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1974-09-22",
            "title": "Zaire 74 music festival begins",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1976-06-04",
            "title": "Sex Pistols at Manchester Lesser Free Trade Hall",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1976-11-25",
            "title": "The Band’s The Last Waltz concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1978-04-22",
            "title": "One Love Peace Concert in Kingston",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1979-09-19",
            "title": "No Nukes concerts begin at Madison Square Garden",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra world tour",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1981-11-24",
            "title": "Queen Rock Montreal concerts begin",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1982-09-03",
            "title": "US Festival opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1983-03-25",
            "title": "Motown 25 television concert recorded",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1985-07-13",
            "title": "Live Aid",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1985",
            "title": "Nusrat Fateh Ali Khan reaches major international festival audiences",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1986-04-05",
            "title": "Jean-Michel Jarre’s Rendez-vous Houston",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1988-06-11",
            "title": "Nelson Mandela 70th Birthday Tribute",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1990-07-21",
            "title": "Roger Waters stages The Wall in Berlin",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1992",
            "title": "First Pavarotti & Friends benefit concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1992-04-20",
            "title": "Freddie Mercury Tribute Concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1993-11-18",
            "title": "Nirvana MTV Unplugged in New York",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1994-08-12",
            "title": "Woodstock ’94 opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1996-06-15",
            "title": "First Tibetan Freedom Concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1996-08-10",
            "title": "Oasis begins Knebworth concerts",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1998-07-01",
            "title": "Buena Vista Social Club performs at Carnegie Hall",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1999-04-21",
            "title": "Metallica records S&M concerts with the San Francisco Symphony",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "1999-07-22",
            "title": "Woodstock ’99 opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2001-10-20",
            "title": "The Concert for New York City",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2003-07-30",
            "title": "Molson Canadian Rocks for Toronto SARS benefit",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2005-07-02",
            "title": "Live 8 concerts",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2006-04-29",
            "title": "Daft Punk’s Coachella pyramid performance",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2007-12-10",
            "title": "Led Zeppelin reunion at the O2 Arena",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2011-06-26",
            "title": "Beyoncé headlines Glastonbury",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2012-12-12",
            "title": "12-12-12: The Concert for Sandy Relief",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2018-04-14",
            "title": "Beyoncé’s Coachella “Homecoming” performance",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2019-06-01",
            "title": "BTS begins Wembley Stadium concerts",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2020-04-18",
            "title": "One World: Together at Home broadcast concert",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK headlines Coachella",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2023-03-17",
            "title": "Taylor Swift’s Eras Tour opens",
            "description": "A historically influential concert, festival, broadcast performance or tour."
        },
        {
            "start": "2023-09-29",
            "title": "U2 opens the Sphere in Las Vegas",
            "description": "A historically influential concert, festival, broadcast performance or tour."
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
