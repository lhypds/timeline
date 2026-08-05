var title = "HUMAN TIMELINE";

// Curated global human-history timeline.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering is used: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// Historical eras and global contexts
var tl_eras = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Deep human prehistory before 10,000 BCE (compressed marker)",
            "description": "SIMILE cannot parse dates earlier than astronomical year -9999. This marker summarizes the emergence of Homo sapiens, global migrations, symbolic culture and hunter-gatherer lifeways before 10,000 BCE."
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "Neolithic transformation",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "Bronze Age",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "First cities and territorial states",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "Classical and axial-age civilizations",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "Post-classical regional orders",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "Interconnected medieval world",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "Early modern global expansion",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "Age of revolutions and industrialization",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "High imperialism and global migration",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "World wars and mass politics",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "Cold War, decolonization and development",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Post-Cold War transition",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "Globalization, terrorism and digital society",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "Pandemic, geopolitical fragmentation and AI acceleration",
            "description": "A broad period used to organize major transformations in human societies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        }
    ]
};

// Human settlement and early civilizations
var tl_origins = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Beginning of agriculture in Southwest Asia",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-9599",
            "title": "Permanent settlement at Jericho",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-8999",
            "title": "Domestication of sheep and goats",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-8499",
            "title": "Early farming at Çayönü and the Fertile Crescent",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-7499",
            "title": "Çatalhöyük urban-scale settlement",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-6999",
            "title": "Rice cultivation expands in the Yangtze basin",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-6999",
            "title": "Mehrgarh farming community",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-6499",
            "title": "Pottery and village networks spread",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-5999",
            "title": "Irrigation communities in Mesopotamia",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-5499",
            "title": "Agriculture expands across Europe",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-4999",
            "title": "Early metallurgy in Eurasia",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-4499",
            "title": "Pastoralism expands across the steppe",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3999",
            "title": "Plow agriculture and larger villages",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3799",
            "title": "Uruk urbanization",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3499",
            "title": "Wheel and wheeled transport",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3399",
            "title": "Proto-cuneiform accounting",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3299",
            "title": "Indus urban tradition begins",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3199",
            "title": "Egyptian hieroglyphic writing",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-3099",
            "title": "Political unification of ancient Egypt",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2999",
            "title": "Long-distance trade links Mesopotamia and the Indus",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2899",
            "title": "Early Dynastic city-states of Sumer",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2699",
            "title": "Old Kingdom Egypt and pyramid state",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2599",
            "title": "Mature Harappan cities",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2499",
            "title": "Austronesian expansion begins",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2399",
            "title": "Akkadian imperial expansion",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2199",
            "title": "4.2-kiloyear climate event and state crises",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-2099",
            "title": "Third Dynasty of Ur",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1999",
            "title": "Minoan palace civilization",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1899",
            "title": "Old Babylonian urban order",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1799",
            "title": "Erlitou culture and early Bronze Age state formation in China",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1749",
            "title": "Hammurabi rules Babylon",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1599",
            "title": "Shang state emerges",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1599",
            "title": "Mycenaean palace societies",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1549",
            "title": "New Kingdom Egypt",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1499",
            "title": "Vedic culture develops in South Asia",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1399",
            "title": "Hittite imperial power",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1299",
            "title": "Olmec civilization emerges",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1249",
            "title": "Lapita expansion across the Pacific",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1199",
            "title": "Late Bronze Age collapse",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1099",
            "title": "Phoenician maritime networks",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-1045",
            "title": "Zhou conquest of Shang",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0999",
            "title": "Bantu-speaking population expansion accelerates",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0899",
            "title": "Nok culture in West Africa",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0799",
            "title": "Greek polis formation",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0799",
            "title": "Chavín horizon in the Andes",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0769",
            "title": "Eastern Zhou period begins",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0752",
            "title": "Traditional founding of Rome",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0699",
            "title": "Iron technology spreads widely",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0699",
            "title": "Scythian steppe networks",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0599",
            "title": "Urbanization in the middle Ganges basin",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0549",
            "title": "Achaemenid Persian Empire emerges",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0508",
            "title": "Roman Republic begins",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0499",
            "title": "Zapotec Monte Albán develops",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0499",
            "title": "Large-scale trans-Saharan exchange expands",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0402",
            "title": "Warring States period begins in China",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0321",
            "title": "Mauryan Empire founded",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0220",
            "title": "Qin unifies China",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0205",
            "title": "Han dynasty founded",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0199",
            "title": "Teotihuacan grows into a major city",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "-0099",
            "title": "Moche culture develops in the Andes",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0100",
            "title": "Aksumite kingdom rises",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0200",
            "title": "Classic Maya urban florescence",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0220",
            "title": "End of Han dynasty and age of division",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0320",
            "title": "Gupta Empire rises",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0400",
            "title": "Polynesian settlement expands across the Pacific",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0500",
            "title": "Rise of Ghana Empire in West Africa",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0600",
            "title": "Mississippian mound-building societies develop",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0700",
            "title": "Swahili coast trading towns expand",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0800",
            "title": "Viking settlement and North Atlantic expansion",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "0900",
            "title": "Great Zimbabwe regional center develops",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "1000",
            "title": "Norse settlement in North America",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "1050",
            "title": "Cahokia becomes a major urban center",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "1200",
            "title": "Māori settlement of New Zealand accelerates",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "1325",
            "title": "Tenochtitlan founded",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        },
        {
            "start": "1438",
            "title": "Inca imperial expansion begins",
            "description": "A foundational change in settlement, subsistence, population or social organization."
        }
    ]
};

// States, empires and political order
var tl_states = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2333",
            "end": "-2153",
            "title": "Akkadian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "Old Kingdom of Egypt",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "Middle Kingdom of Egypt",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "New Kingdom of Egypt",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "Shang dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "Zhou dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "Neo-Assyrian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "Neo-Babylonian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "Achaemenid Persian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "Roman Republic",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "Empire of Alexander the Great",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "Ptolemaic Egypt",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "Seleucid Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "Mauryan Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "Qin dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "Han dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "Parthian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "Unified Roman Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "Sasanian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "Kingdom of Aksum at its height",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "Gupta Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "Eastern Roman or Byzantine Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "Frankish kingdoms and Carolingian Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "Sui dynasty reunifies China",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "Tang dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Rashidun and Umayyad caliphates",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "Abbasid Caliphate in Baghdad",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "Heian period in Japan",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "Holy Roman Empire tradition",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "Kievan Rus polity",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Five Dynasties and Ten Kingdoms",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "Song dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "Fatimid Caliphate",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "Ghana Empire at its height",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "Seljuk imperial order",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "Norman rule established in England",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "Kamakura shogunate",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "Mongol Empire and successor khanates",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "Mali Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "Yuan dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "Ottoman state and empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "Vijayanagara Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "Hundred Years’ War era in Western Europe",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "Ming dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "Joseon dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "Songhai Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "Ottoman capture of Constantinople",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "Songhai imperial expansion",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "Tudor monarchy in England",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "Union of Castile and Aragon consolidated",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "Safavid Iran",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "Mughal Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "Tsardom of Russia",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "Tokugawa shogunate",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "Stuart era and constitutional monarchy in Britain",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "Qing dynasty",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "Russia under Peter the Great",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "Kingdom of Great Britain formed",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1776",
            "title": "United States declares independence",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "French revolutionary government",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "Napoleonic Empire",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "Haitian independence",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "Latin American independence era",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "Congress of Vienna order",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1822",
            "title": "Brazilian independence",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1861",
            "title": "Kingdom of Italy proclaimed",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1867",
            "title": "Canadian Confederation",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1868",
            "title": "Meiji Restoration",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1871",
            "title": "German Empire proclaimed",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1885",
            "title": "Congo Free State established",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1901",
            "title": "Commonwealth of Australia formed",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Chinese Revolution ends imperial rule",
            "description": "A major change in political organization, state power or regional order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "Russian Provisional Government and Bolshevik seizure of power",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1918",
            "title": "Collapse of German, Austro-Hungarian, Ottoman and Russian empires",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1922",
            "title": "Soviet Union founded",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1923",
            "title": "Republic of Turkey founded",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1932",
            "title": "Kingdom of Saudi Arabia proclaimed",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1947",
            "title": "India and Pakistan gain independence",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1948",
            "title": "State of Israel established",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1949",
            "title": "People’s Republic of China founded",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1957",
            "title": "Ghana becomes independent",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1960",
            "title": "Year of Africa",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1962",
            "title": "Algerian independence",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1963",
            "title": "Organization of African Unity founded",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1971",
            "title": "Bangladesh becomes independent",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1990",
            "title": "German reunification",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1991",
            "title": "Dissolution of the Soviet Union",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1993",
            "title": "Czechoslovakia peacefully dissolves",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1997",
            "title": "Hong Kong handover",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "1999",
            "title": "Macau handover",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "2002",
            "title": "African Union founded",
            "description": "A major change in political organization, state power or regional order."
        },
        {
            "start": "2011",
            "title": "South Sudan becomes independent",
            "description": "A major change in political organization, state power or regional order."
        }
    ]
};

// Religion, culture and society
var tl_culture = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2599",
            "title": "Pyramid complexes and royal mortuary culture",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-1799",
            "title": "Old Babylonian scribal schools",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-1499",
            "title": "Vedic hymns transmitted in South Asia",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-1199",
            "title": "Oracle-bone writing in Shang China",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0999",
            "title": "Hebrew religious traditions consolidate",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0799",
            "title": "Homeric epics take written form",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0699",
            "title": "Alphabetic writing spreads around the Mediterranean",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0599",
            "title": "Upanishadic thought develops",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0549",
            "title": "Jain tradition associated with Mahavira",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0529",
            "title": "Buddhist community forms around the Buddha’s teaching",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0499",
            "title": "Confucian teaching and classical Chinese ethical tradition",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0449",
            "title": "Greek theater flourishes in Athens",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0399",
            "title": "Compilation of major classical Chinese texts",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0299",
            "title": "Hellenistic cultural synthesis",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0249",
            "title": "Buddhist missions under Ashoka",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "-0199",
            "title": "Rabbinic and Second Temple Jewish traditions develop",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0030",
            "title": "Early Christian movement",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0105",
            "title": "Paper-making associated with Cai Lun’s court report",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0200",
            "title": "Mahayana Buddhism expands across Asia",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0313",
            "title": "Edict of Milan legalizes Christianity in the Roman Empire",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0325",
            "title": "First Council of Nicaea",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0380",
            "title": "Christianity becomes Roman imperial state religion",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0400",
            "title": "Sanskrit classical culture flourishes under the Guptas",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0529",
            "title": "Benedictine monastic tradition begins",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0610",
            "title": "Quranic revelations begin in Islamic tradition",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0622",
            "title": "Hijra and formation of the Medinan Muslim community",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0700",
            "title": "Buddhism established across East and Southeast Asia",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0762",
            "title": "Baghdad founded as Abbasid capital",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0800",
            "title": "Carolingian educational reform",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0850",
            "title": "Classical Arabic translation movement",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0868",
            "title": "Diamond Sutra printed in China",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0960",
            "title": "Movable-type and commercial printing traditions develop in East Asia",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "0988",
            "title": "Christianization of Kievan Rus",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1054",
            "title": "East–West Schism",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1088",
            "title": "University of Bologna tradition begins",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1096",
            "title": "Crusading movement begins",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1150",
            "title": "European university networks expand",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1200",
            "title": "Neo-Confucianism becomes influential in East Asia",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1250",
            "title": "Scholastic culture reaches maturity",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1300",
            "title": "Vernacular literary cultures expand",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1350",
            "title": "Italian Renaissance humanism expands",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1450",
            "title": "Gutenberg-era movable-type printing in Europe",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1517",
            "title": "Protestant Reformation begins",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1534",
            "title": "English Reformation and royal supremacy",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1540",
            "title": "Society of Jesus approved",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "Council of Trent",
            "description": "A major development in religion, culture, communication, education or collective identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "King James Bible published",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1637",
            "title": "Tokugawa restrictions on Christianity and overseas contact",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1648",
            "title": "Confessional settlement after the Thirty Years’ War",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1685",
            "title": "Revocation of the Edict of Nantes",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1715",
            "title": "European Enlightenment public sphere expands",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "Encyclopédie published",
            "description": "A major development in religion, culture, communication, education or collective identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "Pacific missions and colonial cultural contact expand",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1800",
            "title": "Romanticism reshapes European culture",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1830",
            "title": "Mass newspaper circulation expands",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1848",
            "title": "Nationalism and liberal political culture surge",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1868",
            "title": "State-led mass education expands in Meiji Japan",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1870",
            "title": "Compulsory mass schooling expands in Europe and North America",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1896",
            "title": "First modern Olympic Games",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1900",
            "title": "Global popular culture and mass entertainment accelerate",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1919",
            "title": "Bauhaus founded",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1920",
            "title": "Commercial radio broadcasting expands",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1927",
            "title": "First feature-length synchronized sound film",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1936",
            "title": "Television broadcasting begins regular service in several countries",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1945",
            "title": "Postwar expansion of mass higher education",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1947",
            "title": "Partition reshapes South Asian identities and migration",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1950",
            "title": "Global youth culture and consumer society expand",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1955",
            "title": "Bandung Conference promotes Afro-Asian solidarity",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1960",
            "title": "Second-wave feminism expands internationally",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1964",
            "title": "Global civil-rights and anti-discrimination movements intensify",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1968",
            "title": "Worldwide protest movements",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1969",
            "title": "Stonewall uprising and modern LGBTQ rights movement",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1970",
            "title": "Modern environmental movement enters mass politics",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1977",
            "title": "Global spread of personal computing culture",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1980",
            "title": "Global satellite television and media networks expand",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1989",
            "title": "World Wide Web proposed",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1991",
            "title": "World Wide Web opened to wider public use",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "1995",
            "title": "Commercial internet and mobile communication accelerate",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2001",
            "title": "Wikipedia launched",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2004",
            "title": "Social-media era begins",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2007",
            "title": "Smartphone-centered digital life accelerates",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2010",
            "title": "Streaming and platform culture become global",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2017",
            "title": "#MeToo becomes a global movement",
            "description": "A major development in religion, culture, communication, education or collective identity."
        },
        {
            "start": "2020",
            "title": "Remote work, online education and digital social life surge",
            "description": "A major development in religion, culture, communication, education or collective identity."
        }
    ]
};

// Wars, conquests and revolutions
var tl_wars = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1273",
            "title": "Battle of Kadesh",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "Sea Peoples and eastern Mediterranean conflicts",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "Assyrian conquest of the Levant",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "Greco-Persian Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "Peloponnesian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "Conquests of Alexander the Great",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "Punic Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "Qin wars of unification",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "Chu–Han Contention",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "Caesar’s Gallic Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "Caesar’s Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "Battle of Actium",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "First Jewish–Roman War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "Yellow Turban Rebellion",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "Three Kingdoms wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "Migration-period invasions and collapse of Western Roman rule",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "Justinian’s reconquests",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "Byzantine–Sasanian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Early Islamic conquests",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "Muslim conquest of Iberia",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "An Lushan Rebellion",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "Viking raids and conquests",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Wars of the Five Dynasties and Ten Kingdoms",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "Norman Conquest of England",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "Crusades in the eastern Mediterranean",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "Genpei War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "Mongol conquests across Eurasia",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "Albigensian Crusade",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "Mongol invasion of Europe",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "Mongol invasions of Japan",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "Hundred Years’ War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "Red Turban Rebellions",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "Conquests of Timur",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "Hussite Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "Wars of the Roses",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "Sengoku conflicts in Japan",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "Fall of Granada",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "Italian Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "Spanish conquest of the Aztec Empire",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "German Peasants’ War",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "Spanish conquest of the Inca realm",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "French Wars of Religion",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "Dutch Revolt and Eighty Years’ War",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "Japanese invasions of Korea",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "Thirty Years’ War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "Portuguese Restoration War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "English Civil Wars",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "Ming–Qing transition warfare",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "Anglo-Dutch Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "Battle of Vienna",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "Glorious Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "Great Northern War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "War of the Spanish Succession",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "Seven Years’ War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "American Revolutionary War",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "French Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "Haitian Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "French Revolutionary and Napoleonic Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "First Serbian Uprising",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "Spanish American wars of independence",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "Greek War of Independence",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "First Opium War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "European Revolutions of 1848",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "Taiping Rebellion",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "Crimean War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "Second Opium War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "Indian Rebellion",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "American Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "Wars of German unification",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "Boshin War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "Franco-Prussian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "War of the Pacific",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "Mahdist War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Sino-French War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "First Sino-Japanese War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "Battle of Adwa",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "Second Boer War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "Boxer Uprising and international intervention",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "Russo-Japanese War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "Russian Revolution of 1905",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "Mexican Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Xinhai Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "Balkan Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "First World War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "Easter Rising",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "Russian Revolutions",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "Russian Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "Turkish War of Independence",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "Chinese Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "Japanese expansion and war in East Asia",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "Second Italo-Ethiopian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "Spanish Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "Second World War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "Eastern Front of the Second World War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "Pacific War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "Indonesian National Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "First Indochina War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "First Arab–Israeli War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "Cold War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "Malayan Emergency",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "Korean War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "Mau Mau uprising",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "Algerian War",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "Vietnam War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "Suez Crisis",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1956",
            "title": "Hungarian Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1959",
            "title": "Cuban Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "Congo Crisis",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "Portuguese Colonial War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "Cuban Missile Crisis",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "Indonesian mass killings and political transition",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "Six-Day War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "Prague Spring and Warsaw Pact invasion",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1971",
            "title": "Bangladesh Liberation War",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "Yom Kippur War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "Lebanese Civil War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "Cambodian genocide under the Khmer Rouge",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "Soviet–Afghan War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "Iranian Revolution",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "Iran–Iraq War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "Falklands War",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "First Intifada",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "Tiananmen protests and crackdown",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1989",
            "title": "Fall of communist governments in Eastern Europe",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "Gulf War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Yugoslav Wars",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "Genocide against the Tutsi in Rwanda",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "First Chechen War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "Eritrean–Ethiopian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "Second Congo War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "Kosovo War and NATO intervention",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2001-09-11",
            "title": "September 11 attacks",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "War in Afghanistan",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "Iraq War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "Darfur war and mass atrocities",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "Insurgency and conflict in northern Pakistan",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "Lebanon War",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2008",
            "title": "Russo-Georgian War",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "Arab Spring uprisings",
            "description": "A mass political rupture that transformed government, social order or national identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "Libyan civil war and international intervention",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "Syrian civil war begins",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISIS territorial expansion and defeat of its caliphate",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Russia annexes Crimea and war begins in Donbas",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "War against ISIS in Iraq",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Yemeni civil war intensifies",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2017",
            "title": "Rohingya mass displacement from Myanmar",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2020",
            "title": "Second Nagorno-Karabakh War",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "Tigray War",
            "description": "A major conflict that altered states, borders, populations or the balance of power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "Myanmar military coup and nationwide conflict",
            "description": "A mass political rupture that transformed government, social order or national identity."
        },
        {
            "start": "2022-02-24",
            "title": "Russia’s full-scale invasion of Ukraine",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2023-10-07",
            "title": "Israel–Hamas war begins",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        },
        {
            "start": "2023",
            "title": "Sudan war begins",
            "description": "A major conflict that altered states, borders, populations or the balance of power."
        }
    ]
};

// Economy, technology and global exchange
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "Sail-powered transport expands",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-2999",
            "title": "Interregional commodity trade grows",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-1999",
            "title": "Bronze trade networks link Eurasian regions",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-1199",
            "title": "Iron production reshapes tools and warfare",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-0599",
            "title": "Coinage spreads in the Mediterranean and West Asia",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-0299",
            "title": "Silk Road exchange expands",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-0199",
            "title": "Indian Ocean monsoon trade intensifies",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "-0099",
            "title": "Roman road and maritime systems integrate the Mediterranean",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0100",
            "title": "Paper production spreads within China",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0200",
            "title": "Camel caravan trade expands across the Sahara",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0600",
            "title": "Grand Canal networks integrate China",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0700",
            "title": "Indian Ocean commercial diaspora expands",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0750",
            "title": "Islamic commercial and credit networks expand",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0800",
            "title": "Paper-making spreads through the Islamic world",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "0900",
            "title": "Gunpowder weapons begin to develop in China",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1000",
            "title": "Maritime compass use develops in China",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1100",
            "title": "Commercial revolution in medieval Europe",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1200",
            "title": "Mongol-era trans-Eurasian exchange",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "Marco Polo journeys across Eurasia",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "Bills of exchange and banking houses expand",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "Zheng He voyages",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "European printing revolution",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1488",
            "title": "Dias rounds the Cape of Good Hope",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1492-10-12",
            "title": "Columbus reaches the Caribbean",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas divides claimed overseas spheres",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1498",
            "title": "Vasco da Gama reaches India by sea",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1500",
            "title": "Columbian Exchange accelerates",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "Transatlantic slave trade",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "First circumnavigation expedition",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "Potosí silver boom",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1565",
            "title": "Manila galleon trade links the Americas and Asia",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1600",
            "title": "English East India Company chartered",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1602",
            "title": "Dutch East India Company founded",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1609",
            "title": "Bank of Amsterdam founded",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1637",
            "title": "Dutch tulip-market crash",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1650",
            "title": "Atlantic plantation economy expands",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1694",
            "title": "Bank of England founded",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1700",
            "title": "Global commodity markets for sugar, tea, coffee and cotton expand",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1712",
            "title": "Newcomen steam engine",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "First Industrial Revolution",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "Watt’s improved steam engine patented",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1770",
            "title": "British factory system expands",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1787",
            "title": "First Fleet begins British colonization of Australia",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1793",
            "title": "Cotton gin accelerates cotton production and slavery in the United States",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1807",
            "title": "Commercial steamship era begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1825",
            "title": "Stockton and Darlington Railway opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1830",
            "title": "Liverpool and Manchester Railway opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1837",
            "title": "Electric telegraph demonstrated",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1846",
            "title": "Repeal of the Corn Laws",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1848",
            "title": "California Gold Rush",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1851",
            "title": "Great Exhibition in London",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1856",
            "title": "Bessemer steel process",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1859",
            "title": "First commercial oil well in Pennsylvania",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1863",
            "title": "London Underground opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1869",
            "title": "Suez Canal opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1869",
            "title": "First transcontinental railroad completed in the United States",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "Second Industrial Revolution",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "Telephone patented and demonstrated",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1879",
            "title": "Practical electric lighting systems emerge",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1880",
            "title": "Mass migration from Europe and Asia accelerates",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1883",
            "title": "Orient Express begins service",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1886",
            "title": "Automobile era begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1895",
            "title": "Commercial cinema begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1903",
            "title": "First controlled powered airplane flight",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1908",
            "title": "Ford Model T and mass automobile production",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1914",
            "title": "Panama Canal opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1920",
            "title": "Mass consumer credit and advertising expand",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "Great Depression",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "New Deal begins in the United States",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1944",
            "title": "Bretton Woods system designed",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade signed",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1948",
            "title": "Marshall Plan begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1950",
            "title": "Containerization begins to transform shipping",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1956",
            "title": "First commercial container ship voyage",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1957",
            "title": "European Economic Community founded",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1960",
            "title": "OPEC founded",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1964",
            "title": "Shinkansen high-speed rail opens",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1971",
            "title": "End of dollar–gold convertibility",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1973",
            "title": "First oil crisis",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1978",
            "title": "China launches reform and opening",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1981",
            "title": "IBM PC accelerates personal-computer market",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1983",
            "title": "ARPANET adopts TCP/IP",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1985",
            "title": "Schengen Agreement signed",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1986",
            "title": "Market reforms accelerate in many regions",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1989",
            "title": "Washington Consensus era begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1991",
            "title": "Economic liberalization accelerates in India",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1993",
            "title": "European Single Market begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1994",
            "title": "North American Free Trade Agreement enters into force",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1995",
            "title": "World Trade Organization begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "Asian financial crisis",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "Euro introduced for electronic and accounting use",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2001",
            "title": "China joins the World Trade Organization",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2002",
            "title": "Euro notes and coins enter circulation",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2004",
            "title": "Major enlargement of the European Union",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2007",
            "title": "Global smartphone economy begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "Global financial crisis",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "Bitcoin network begins",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2010",
            "title": "Platform and gig economies expand",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2013",
            "title": "Belt and Road Initiative announced",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2016",
            "title": "United Kingdom votes to leave the European Union",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2020",
            "title": "Brexit takes legal effect",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2020",
            "title": "Global supply-chain shock during COVID-19",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2021",
            "title": "Global inflation and energy-price pressures intensify",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        },
        {
            "start": "2022",
            "title": "Sanctions and trade fragmentation deepen after the invasion of Ukraine",
            "description": "A major shift in production, trade, labor, infrastructure, technology or global exchange."
        }
    ]
};

// Disasters, disease and environment
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2-kiloyear drought event",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "-1599",
            "title": "Thera eruption and eastern Mediterranean disruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "Antonine Plague",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "Plague of Cyprian",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "Late Antique climatic shock",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "First plague pandemic beginning with the Plague of Justinian",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "Samalas eruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "Great Famine in Europe",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "Black Death",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "Mid-fifteenth-century volcanic and climate shocks",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "Old World diseases devastate Indigenous populations in the Americas",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "Shaanxi earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1600",
            "title": "Huaynaputina eruption and global cooling",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "Great Plague of London",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "Great Fire of London",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1707",
            "title": "Hōei earthquake and Fuji eruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "Great Plague of Marseille",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "Lisbon earthquake and tsunami",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "Laki eruption and climatic disruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "Tambora eruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1816",
            "title": "Year Without a Summer",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "Global cholera pandemics",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "Great Irish Famine",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "Great Famine in India and China",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "Krakatoa eruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1887",
            "title": "Yellow River flood",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "Third plague pandemic",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "San Francisco earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1911",
            "title": "Yangtze–Huai River floods",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "Influenza pandemic",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "Haiyuan earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1923-09-01",
            "title": "Great Kantō earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1931",
            "title": "China floods",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "Soviet famine including the Holodomor",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "Bengal famine",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "Great Chinese Famine",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "Valdivia earthquake and Pacific tsunami",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "Hong Kong influenza pandemic",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "Bhola cyclone",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1976",
            "title": "Tangshan earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1984",
            "title": "Bhopal industrial disaster",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "Ethiopian famine",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "Chernobyl nuclear disaster",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1988",
            "title": "Armenian earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1991",
            "title": "Mount Pinatubo eruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1994",
            "title": "Great Hanshin earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "El Niño global climate disruption",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "Gujarat earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2003",
            "title": "European heatwave",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2004-12-26",
            "title": "Indian Ocean earthquake and tsunami",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2005",
            "title": "Hurricane Katrina",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2008",
            "title": "Cyclone Nargis",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2008",
            "title": "Sichuan earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2010",
            "title": "Haiti earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2010",
            "title": "Pakistan floods",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2011-03-11",
            "title": "Great East Japan earthquake, tsunami and Fukushima disaster",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2013",
            "title": "Typhoon Haiyan",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "West African Ebola epidemic",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "Nepal earthquake",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "COVID-19 global health emergency",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "Record global wildfire and extreme-weather awareness",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2022",
            "title": "Pakistan floods and climate-vulnerability crisis",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2023",
            "title": "Türkiye–Syria earthquakes",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        },
        {
            "start": "2023",
            "title": "Derna floods in Libya",
            "description": "A major demographic, environmental or public-health shock with lasting social consequences."
        }
    ]
};

// Law, rights and international institutions
var tl_rights = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1749",
            "title": "Code of Hammurabi",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "-0620",
            "title": "Reforms of Draco and Solon in Athens",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "-0508",
            "title": "Roman republican institutions established",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "-0449",
            "title": "Twelve Tables of Roman law",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "-0220",
            "title": "Qin administrative standardization",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "0212",
            "title": "Roman citizenship extended by the Constitutio Antoniniana",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "0604",
            "title": "Seventeen-Article Constitution in Japan",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "0701",
            "title": "Taihō Code",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "0800",
            "title": "Carolingian imperial coronation",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1215-06-15",
            "title": "Magna Carta sealed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1222",
            "title": "Golden Bull of Hungary",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1232",
            "title": "Manden Charter tradition",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1265",
            "title": "English Parliament associated with Simon de Montfort",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1356",
            "title": "Golden Bull of the Holy Roman Empire",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1454",
            "title": "Peace of Lodi",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1555",
            "title": "Peace of Augsburg",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1598",
            "title": "Edict of Nantes",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1600",
            "title": "Chartered-company governance expands",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1628",
            "title": "Petition of Right",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1648",
            "title": "Peace of Westphalia",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1679",
            "title": "Habeas Corpus Act",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1689",
            "title": "English Bill of Rights",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1701",
            "title": "Act of Settlement",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1713",
            "title": "Treaties of Utrecht",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1776-07-04",
            "title": "United States Declaration of Independence",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1787-09-17",
            "title": "United States Constitution signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1789-08-26",
            "title": "Declaration of the Rights of Man and of the Citizen",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1791",
            "title": "United States Bill of Rights ratified",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1792",
            "title": "A Vindication of the Rights of Woman published",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1804",
            "title": "Napoleonic Code",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1807",
            "title": "British abolition of the slave trade",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1815",
            "title": "Congress of Vienna and Concert of Europe",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1833",
            "title": "Slavery Abolition Act in the British Empire",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1840",
            "title": "Treaty of Waitangi",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1848",
            "title": "Seneca Falls Convention",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1863",
            "title": "Emancipation Proclamation",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1864",
            "title": "First Geneva Convention",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1865",
            "title": "Thirteenth Amendment abolishes slavery in the United States",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1868",
            "title": "Fourteenth Amendment defines citizenship and equal protection",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1868",
            "title": "Charter Oath in Meiji Japan",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1870",
            "title": "Fifteenth Amendment protects voting rights regardless of race",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Berlin Conference regulates European colonization in Africa",
            "description": "A major milestone in law, governance, rights or international institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "Meiji Constitution promulgated",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1899",
            "title": "First Hague Peace Conference",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1902",
            "title": "Australia grants most women federal voting rights",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1905",
            "title": "Norway becomes independent through negotiated dissolution",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1907",
            "title": "Second Hague Peace Conference",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1911",
            "title": "International Women’s Day first observed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1918",
            "title": "Women gain parliamentary voting rights in Britain under age restrictions",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1919",
            "title": "Treaty of Versailles",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1919",
            "title": "International Labour Organization founded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1920",
            "title": "League of Nations begins",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1920",
            "title": "Nineteenth Amendment establishes women’s suffrage in the United States",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1928",
            "title": "Kellogg–Briand Pact",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1935",
            "title": "Nuremberg Laws enacted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1941",
            "title": "Atlantic Charter",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1944",
            "title": "Bretton Woods institutions planned",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1945-06-26",
            "title": "United Nations Charter signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1945-10-24",
            "title": "United Nations comes into existence",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "Nuremberg Trials",
            "description": "A major milestone in law, governance, rights or international institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "Tokyo War Crimes Tribunal",
            "description": "A major milestone in law, governance, rights or international institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1948-12-09",
            "title": "Genocide Convention adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1948-12-10",
            "title": "Universal Declaration of Human Rights adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1949",
            "title": "Geneva Conventions revised and expanded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1949",
            "title": "North Atlantic Treaty Organization founded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1950",
            "title": "European Convention on Human Rights signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1951",
            "title": "Refugee Convention adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1955",
            "title": "Warsaw Pact founded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1957",
            "title": "Treaties of Rome",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1959",
            "title": "European Court of Human Rights established",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1960-12-14",
            "title": "UN Declaration on the Granting of Independence to Colonial Countries and Peoples",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1963",
            "title": "Organization of African Unity founded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1964",
            "title": "Civil Rights Act in the United States",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1965",
            "title": "Voting Rights Act in the United States",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1965",
            "title": "International Convention on the Elimination of All Forms of Racial Discrimination",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1966",
            "title": "International human-rights covenants adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1967",
            "title": "ASEAN founded",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1968",
            "title": "Treaty on the Non-Proliferation of Nuclear Weapons opened for signature",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1972",
            "title": "Stockholm Conference on the Human Environment",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1975",
            "title": "Helsinki Final Act",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1979",
            "title": "Convention on the Elimination of All Forms of Discrimination against Women",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1981",
            "title": "African Charter on Human and Peoples’ Rights adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1982",
            "title": "United Nations Convention on the Law of the Sea opened for signature",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1987",
            "title": "Montreal Protocol adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1989",
            "title": "Convention on the Rights of the Child adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1990",
            "title": "Americans with Disabilities Act signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1991",
            "title": "Strategic Arms Reduction Treaty signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1992",
            "title": "Rio Earth Summit",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1992",
            "title": "Maastricht Treaty signed",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1993-11-01",
            "title": "European Union formally established",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1994",
            "title": "End of apartheid and democratic election in South Africa",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1995-01-01",
            "title": "World Trade Organization established",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1997",
            "title": "Kyoto Protocol adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "1998",
            "title": "Rome Statute of the International Criminal Court adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2000",
            "title": "Millennium Development Goals adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2002-07-01",
            "title": "International Criminal Court begins jurisdiction",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2005",
            "title": "Responsibility to Protect endorsed at the UN World Summit",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2006",
            "title": "Convention on the Rights of Persons with Disabilities adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2007",
            "title": "United Nations Declaration on the Rights of Indigenous Peoples adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2015",
            "title": "Sustainable Development Goals adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2015-12-12",
            "title": "Paris Agreement adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2016",
            "title": "Paris Agreement enters into force",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2018",
            "title": "Global Compact for Migration adopted",
            "description": "A major milestone in law, governance, rights or international institutions."
        },
        {
            "start": "2021",
            "title": "Treaty on the Prohibition of Nuclear Weapons enters into force",
            "description": "A major milestone in law, governance, rights or international institutions."
        }
    ]
};

// The contemporary world
var tl_contemporary = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1945-08-06",
            "title": "Atomic bombing of Hiroshima",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1945-08-09",
            "title": "Atomic bombing of Nagasaki",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "Berlin Blockade and Airlift",
            "description": "A major event shaping the political, social or international order of the contemporary world.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "Nakba and mass Palestinian displacement",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1953",
            "title": "Death of Stalin and beginning of Soviet leadership transition",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1954",
            "title": "Brown v. Board of Education",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1955",
            "title": "Montgomery bus boycott",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1956",
            "title": "Khrushchev’s Secret Speech and de-Stalinization",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1957",
            "title": "Sputnik launches the space age",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1959",
            "title": "Dalai Lama flees Tibet",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "Berlin Wall",
            "description": "A major event shaping the political, social or international order of the contemporary world.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "Non-Aligned Movement founded",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1963-08-28",
            "title": "March on Washington",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1963-11-22",
            "title": "Assassination of John F. Kennedy",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1964",
            "title": "China conducts its first nuclear test",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "Cultural Revolution in China",
            "description": "A major event shaping the political, social or international order of the contemporary world.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "First human Moon landing",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1971",
            "title": "People’s Republic of China takes China’s UN seat",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1972",
            "title": "United States–China rapprochement",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1973",
            "title": "Military coup in Chile",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1974",
            "title": "Carnation Revolution in Portugal",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1975",
            "title": "Fall of Saigon",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1976",
            "title": "Death of Mao Zedong and end of the Cultural Revolution era",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1978",
            "title": "Camp David Accords",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1979",
            "title": "Egypt–Israel Peace Treaty",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1979",
            "title": "Soviet invasion of Afghanistan",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1980",
            "title": "Solidarity movement founded in Poland",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1985",
            "title": "Gorbachev begins perestroika and glasnost",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1986",
            "title": "People Power Revolution in the Philippines",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1987",
            "title": "First Intifada begins",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1988",
            "title": "Iran–Iraq ceasefire",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1989-11-09",
            "title": "Fall of the Berlin Wall",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1990",
            "title": "Nelson Mandela released",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1991",
            "title": "Operation Desert Storm",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1991",
            "title": "Warsaw Pact dissolved",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1993",
            "title": "Oslo Accords",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1994",
            "title": "Rwandan genocide and international failure",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1995",
            "title": "Dayton Accords end the Bosnian War",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1997",
            "title": "Asian financial crisis spreads",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1998",
            "title": "Good Friday Agreement",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "1999",
            "title": "NATO intervention in Kosovo",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2000",
            "title": "Second Intifada begins",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2001",
            "title": "United States invokes NATO Article 5 after September 11",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2003",
            "title": "Global protests against the Iraq War",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2004",
            "title": "Indian Ocean tsunami prompts global humanitarian response",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2005",
            "title": "London bombings",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2008",
            "title": "Barack Obama elected first African American US president",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2008",
            "title": "Global financial system enters severe crisis",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2010",
            "title": "Haiti earthquake triggers massive international relief effort",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2011",
            "title": "Fukushima nuclear disaster reshapes energy policy debates",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2011",
            "title": "Killing of Osama bin Laden",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2013",
            "title": "Edward Snowden disclosures",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2014",
            "title": "Ebola emergency in West Africa",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2015",
            "title": "European refugee crisis peaks",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2015",
            "title": "Iran nuclear agreement",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2016",
            "title": "Brexit referendum",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2016",
            "title": "Attempted coup in Turkey",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2018",
            "title": "United States–China trade conflict intensifies",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2019",
            "title": "Hong Kong anti-extradition protests",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2020",
            "title": "WHO characterizes COVID-19 as a pandemic",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2020",
            "title": "Global Black Lives Matter protests",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2020",
            "title": "Abraham Accords",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2021",
            "title": "January 6 attack on the US Capitol",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2021",
            "title": "Taliban returns to power in Afghanistan",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2021",
            "title": "AUKUS security partnership announced",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2022",
            "title": "Global displacement and food-energy shocks after Russia’s invasion",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2022",
            "title": "Death of Queen Elizabeth II",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2023",
            "title": "Finland joins NATO",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2023",
            "title": "Israel–Hamas war and regional humanitarian crisis",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        },
        {
            "start": "2024",
            "title": "Sweden joins NATO",
            "description": "A major event shaping the political, social or international order of the contemporary world."
        }
    ]
};

// Every group listed here is loaded onto the timeline by config.js
var timelines = [
    tl_eras,
    tl_origins,
    tl_states,
    tl_culture,
    tl_wars,
    tl_economy,
    tl_disasters,
    tl_rights,
    tl_contemporary
];
