var title = "HUMAN HISTORY TIMELINE";

// Curated global human-history timeline.
// Every description is a concise sentence explaining what happened.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering is used: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// Historical eras and global context
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
            "description": "Farming and herding supported permanent villages, population growth and more specialized forms of work.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "Bronze Age",
            "description": "Bronze metallurgy enabled new tools, weapons, trade networks and palace-centered states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "First cities and territorial states",
            "description": "Cities, taxation, writing and permanent institutions extended rule beyond individual settlements.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "Classical and axial-age civilizations",
            "description": "Durable empires, religions, philosophies and legal traditions formed across much of Eurasia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "Post-classical regional orders",
            "description": "After Rome fragmented, Byzantine, Islamic, South Asian and East Asian powers built new regional orders.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "Interconnected medieval world",
            "description": "Trade routes, religious networks and imperial expansion linked Eurasia, Africa and the Indian Ocean more closely.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "Early modern global expansion",
            "description": "Oceanic navigation, colonial expansion and transoceanic trade connected the continents on a sustained basis.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "Age of revolutions and industrialization",
            "description": "Political revolutions and machine production reorganized states, labor and urban life.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "High imperialism and global migration",
            "description": "Industrial powers expanded colonial rule while steam transport accelerated mass migration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "World wars and mass politics",
            "description": "Two world wars, revolutions and nationalism mobilized entire societies for political and military struggle.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "Cold War, decolonization and development",
            "description": "US–Soviet rivalry unfolded alongside decolonization and state-led development in newly independent countries.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Post-Cold War transition",
            "description": "The Soviet collapse was followed by market reforms, regional conflicts and a US-led international order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "Globalization, terrorism and digital society",
            "description": "Global supply chains, the internet and mobile communications expanded while counterterrorism reshaped security policy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "Pandemic, geopolitical fragmentation and AI acceleration",
            "description": "COVID-19 disrupted health systems and trade as war, technology rivalry and generative AI reshaped global politics.",
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
            "description": "Beginning of agriculture in Southwest Asia increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-9599",
            "title": "Permanent settlement at Jericho",
            "description": "Permanent settlement at Jericho concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-8999",
            "title": "Domestication of sheep and goats",
            "description": "Domestication of sheep and goats gave communities a steady source of meat, milk, hides and transport."
        },
        {
            "start": "-8499",
            "title": "Early farming at Çayönü and the Fertile Crescent",
            "description": "Early farming at Çayönü and the Fertile Crescent increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-7499",
            "title": "Çatalhöyük urban-scale settlement",
            "description": "Çatalhöyük urban-scale settlement concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-6999",
            "title": "Rice cultivation expands in the Yangtze basin",
            "description": "Rice cultivation expands in the Yangtze basin increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-6999",
            "title": "Mehrgarh farming community",
            "description": "Mehrgarh farming community increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-6499",
            "title": "Pottery and village networks spread",
            "description": "Pottery and village networks spread spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-5999",
            "title": "Irrigation communities in Mesopotamia",
            "description": "Irrigation communities in Mesopotamia concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-5499",
            "title": "Agriculture expands across Europe",
            "description": "Agriculture expands across Europe increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-4999",
            "title": "Early metallurgy in Eurasia",
            "description": "Early metallurgy in Eurasia expanded the use of metal tools and weapons and encouraged specialized crafts."
        },
        {
            "start": "-4499",
            "title": "Pastoralism expands across the steppe",
            "description": "Pastoralism expands across the steppe gave communities a steady source of meat, milk, hides and transport."
        },
        {
            "start": "-3999",
            "title": "Plow agriculture and larger villages",
            "description": "Plow agriculture and larger villages increased reliable food production and supported larger permanent settlements."
        },
        {
            "start": "-3799",
            "title": "Uruk urbanization",
            "description": "Uruk urbanization concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-3499",
            "title": "Wheel and wheeled transport",
            "description": "Wheel and wheeled transport increased overland carrying capacity and extended the range of travel and trade."
        },
        {
            "start": "-3399",
            "title": "Proto-cuneiform accounting",
            "description": "Proto-cuneiform accounting turned grain, labor and exchange into durable written records."
        },
        {
            "start": "-3299",
            "title": "Indus urban tradition begins",
            "description": "Indus urban tradition begins concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-3199",
            "title": "Egyptian hieroglyphic writing",
            "description": "Egyptian hieroglyphic writing turned grain, labor and exchange into durable written records."
        },
        {
            "start": "-3099",
            "title": "Political unification of ancient Egypt",
            "description": "Political unification of ancient Egypt brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-2999",
            "title": "Long-distance trade links Mesopotamia and the Indus",
            "description": "Long-distance trade links Mesopotamia and the Indus moved raw materials, finished goods and ideas between previously separate regions."
        },
        {
            "start": "-2899",
            "title": "Early Dynastic city-states of Sumer",
            "description": "Early Dynastic city-states of Sumer brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-2699",
            "title": "Old Kingdom Egypt and pyramid state",
            "description": "Old Kingdom Egypt and pyramid state changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-2599",
            "title": "Mature Harappan cities",
            "description": "Mature Harappan cities concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-2499",
            "title": "Austronesian expansion begins",
            "description": "Austronesian expansion begins spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-2399",
            "title": "Akkadian imperial expansion",
            "description": "Akkadian imperial expansion brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-2199",
            "title": "4.2-kiloyear climate event and state crises",
            "description": "4.2-kiloyear climate event and state crisesbrought prolonged drought and food pressure that weakened several early states."
        },
        {
            "start": "-2099",
            "title": "Third Dynasty of Ur",
            "description": "Third Dynasty of Ur brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-1999",
            "title": "Minoan palace civilization",
            "description": "Minoan palace civilization changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-1899",
            "title": "Old Babylonian urban order",
            "description": "Old Babylonian urban order concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-1799",
            "title": "Erlitou culture and early Bronze Age state formation in China",
            "description": "Erlitou culture and early Bronze Age state formation in China expanded the use of metal tools and weapons and encouraged specialized crafts."
        },
        {
            "start": "-1749",
            "title": "Hammurabi rules Babylon",
            "description": "Hammurabi rules Babylon changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-1599",
            "title": "Shang state emerges",
            "description": "Shang state emerges brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-1599",
            "title": "Mycenaean palace societies",
            "description": "Mycenaean palace societies changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-1549",
            "title": "New Kingdom Egypt",
            "description": "New Kingdom Egypt changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-1499",
            "title": "Vedic culture develops in South Asia",
            "description": "Vedic culture develops in South Asia spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-1399",
            "title": "Hittite imperial power",
            "description": "Hittite imperial power brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-1299",
            "title": "Olmec civilization emerges",
            "description": "Olmec civilization emerges spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-1249",
            "title": "Lapita expansion across the Pacific",
            "description": "Lapita expansion across the Pacific spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-1199",
            "title": "Late Bronze Age collapse",
            "description": "Late Bronze Age collapsebrought down palace states, long-distance trade and urban networks, forcing many regions to reorganize."
        },
        {
            "start": "-1099",
            "title": "Phoenician maritime networks",
            "description": "Phoenician maritime networks moved raw materials, finished goods and ideas between previously separate regions."
        },
        {
            "start": "-1045",
            "title": "Zhou conquest of Shang",
            "description": "Zhou conquest of Shang changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0999",
            "title": "Bantu-speaking population expansion accelerates",
            "description": "Bantu-speaking population expansion accelerates spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-0899",
            "title": "Nok culture in West Africa",
            "description": "Nok culture in West Africa changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0799",
            "title": "Greek polis formation",
            "description": "Greek polis formation changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0799",
            "title": "Chavín horizon in the Andes",
            "description": "Chavín horizon in the Andes changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0769",
            "title": "Eastern Zhou period begins",
            "description": "Eastern Zhou period begins changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0752",
            "title": "Traditional founding of Rome",
            "description": "Traditional founding of Rome changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0699",
            "title": "Iron technology spreads widely",
            "description": "Iron technology spreads widely expanded the use of metal tools and weapons and encouraged specialized crafts."
        },
        {
            "start": "-0699",
            "title": "Scythian steppe networks",
            "description": "Scythian steppe networks changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0599",
            "title": "Urbanization in the middle Ganges basin",
            "description": "Urbanization in the middle Ganges basin concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-0549",
            "title": "Achaemenid Persian Empire emerges",
            "description": "Achaemenid Persian Empire emerges brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-0508",
            "title": "Roman Republic begins",
            "description": "Roman Republic begins changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0499",
            "title": "Zapotec Monte Albán develops",
            "description": "Zapotec Monte Albán develops spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "-0499",
            "title": "Large-scale trans-Saharan exchange expands",
            "description": "Large-scale trans-Saharan exchange expands moved raw materials, finished goods and ideas between previously separate regions."
        },
        {
            "start": "-0402",
            "title": "Warring States period begins in China",
            "description": "Warring States period begins in China changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "-0321",
            "title": "Mauryan Empire founded",
            "description": "Mauryan Empire founded brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-0220",
            "title": "Qin unifies China",
            "description": "Qin unifies China brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "-0205",
            "title": "Han dynasty founded",
            "description": "Han dynasty founded created a new urban center where population, trade and political power were concentrated."
        },
        {
            "start": "-0199",
            "title": "Teotihuacan grows into a major city",
            "description": "Teotihuacan grows into a major city concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "-0099",
            "title": "Moche culture develops in the Andes",
            "description": "Moche culture develops in the Andes spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "0100",
            "title": "Aksumite kingdom rises",
            "description": "Aksumite kingdom rises spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "0200",
            "title": "Classic Maya urban florescence",
            "description": "Classic Maya urban florescence concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "0220",
            "title": "End of Han dynasty and age of division",
            "description": "End of Han dynasty and age of division changed how local communities obtained resources, organized settlements and sustained social life."
        },
        {
            "start": "0320",
            "title": "Gupta Empire rises",
            "description": "Gupta Empire rises brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "0400",
            "title": "Polynesian settlement expands across the Pacific",
            "description": "Polynesian settlement expands across the Pacific concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "0500",
            "title": "Rise of Ghana Empire in West Africa",
            "description": "Rise of Ghana Empire in West Africa brought several local powers under one ruling system and reorganized taxation and military service."
        },
        {
            "start": "0600",
            "title": "Mississippian mound-building societies develop",
            "description": "Mississippian mound-building societies develop spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "0700",
            "title": "Swahili coast trading towns expand",
            "description": "Swahili coast trading towns expand concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "0800",
            "title": "Viking settlement and North Atlantic expansion",
            "description": "Viking settlement and North Atlantic expansion concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "0900",
            "title": "Great Zimbabwe regional center develops",
            "description": "Great Zimbabwe regional center develops spread the associated population, settlement pattern or institutions across a wider region."
        },
        {
            "start": "1000",
            "title": "Norse settlement in North America",
            "description": "Norse settlement in North America concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "1050",
            "title": "Cahokia becomes a major urban center",
            "description": "Cahokia becomes a major urban center concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "1200",
            "title": "Māori settlement of New Zealand accelerates",
            "description": "Māori settlement of New Zealand accelerates concentrated more people in one place and required denser housing, storage and public organization."
        },
        {
            "start": "1325",
            "title": "Tenochtitlan founded",
            "description": "Tenochtitlan founded created a new urban center where population, trade and political power were concentrated."
        },
        {
            "start": "1438",
            "title": "Inca imperial expansion begins",
            "description": "Inca imperial expansion begins brought several local powers under one ruling system and reorganized taxation and military service."
        }
    ]
};

// States, empires and political orders
var tl_states = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2333",
            "end": "-2153",
            "title": "Akkadian Empire",
            "description": "Akkadian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "Old Kingdom of Egypt",
            "description": "Old Kingdom of Egypt governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "Middle Kingdom of Egypt",
            "description": "Middle Kingdom of Egypt governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "New Kingdom of Egypt",
            "description": "New Kingdom of Egypt governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "Shang dynasty",
            "description": "Shang dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "Zhou dynasty",
            "description": "Zhou dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "Neo-Assyrian Empire",
            "description": "Neo-Assyrian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "Neo-Babylonian Empire",
            "description": "Neo-Babylonian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "Achaemenid Persian Empire",
            "description": "Achaemenid Persian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "Roman Republic",
            "description": "Roman Republic governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "Empire of Alexander the Great",
            "description": "Empire of Alexander the Great governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "Ptolemaic Egypt",
            "description": "Ptolemaic Egypt governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "Seleucid Empire",
            "description": "Seleucid Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "Mauryan Empire",
            "description": "Mauryan Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "Qin dynasty",
            "description": "Qin dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "Han dynasty",
            "description": "Han dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "Parthian Empire",
            "description": "Parthian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "Unified Roman Empire",
            "description": "Unified Roman Empire brought previously divided political units into a single state framework.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "Sasanian Empire",
            "description": "Sasanian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "Kingdom of Aksum at its height",
            "description": "Kingdom of Aksum at its height governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "Gupta Empire",
            "description": "Gupta Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "Eastern Roman or Byzantine Empire",
            "description": "Eastern Roman or Byzantine Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "Frankish kingdoms and Carolingian Empire",
            "description": "Frankish kingdoms and Carolingian Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "Sui dynasty reunifies China",
            "description": "Sui dynasty reunifies China brought previously divided political units into a single state framework.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "Tang dynasty",
            "description": "Tang dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Rashidun and Umayyad caliphates",
            "description": "Rashidun and Umayyad caliphates governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "Abbasid Caliphate in Baghdad",
            "description": "Abbasid Caliphate in Baghdad governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "Heian period in Japan",
            "description": "Heian period in Japan governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "Holy Roman Empire tradition",
            "description": "Holy Roman Empire tradition governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "Kievan Rus polity",
            "description": "Kievan Rus polity governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Five Dynasties and Ten Kingdoms",
            "description": "Five Dynasties and Ten Kingdoms governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "Song dynasty",
            "description": "Song dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "Fatimid Caliphate",
            "description": "Fatimid Caliphate governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "Ghana Empire at its height",
            "description": "Ghana Empire at its height governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "Seljuk imperial order",
            "description": "Seljuk imperial order governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "Norman rule established in England",
            "description": "Norman rule established in England created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "Kamakura shogunate",
            "description": "Kamakura shogunate governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "Mongol Empire and successor khanates",
            "description": "Mongol Empire and successor khanates governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "Mali Empire",
            "description": "Mali Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "Yuan dynasty",
            "description": "Yuan dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "Ottoman state and empire",
            "description": "Ottoman state and empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "Vijayanagara Empire",
            "description": "Vijayanagara Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "Hundred Years’ War era in Western Europe",
            "description": "Hundred Years’ War era in Western Europe governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "Ming dynasty",
            "description": "Ming dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "Joseon dynasty",
            "description": "Joseon dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "Songhai Empire",
            "description": "Songhai Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "Ottoman capture of Constantinople",
            "description": "Ottoman capture of Constantinopleseized a city or territory by force and changed who governed it."
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "Songhai imperial expansion",
            "description": "Songhai imperial expansionexpanded its rule through military conquest and administrative integration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "Tudor monarchy in England",
            "description": "Tudor monarchy in England governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "Union of Castile and Aragon consolidated",
            "description": "Union of Castile and Aragon consolidated changed who held state power and established a new political arrangement."
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "Safavid Iran",
            "description": "Safavid Iran governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "Mughal Empire",
            "description": "Mughal Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "Tsardom of Russia",
            "description": "Tsardom of Russia governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "Tokugawa shogunate",
            "description": "Tokugawa shogunate governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "Stuart era and constitutional monarchy in Britain",
            "description": "Stuart era and constitutional monarchy in Britain governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "Qing dynasty",
            "description": "Qing dynasty governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "Russia under Peter the Great",
            "description": "Russia under Peter the Great governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "Kingdom of Great Britain formed",
            "description": "Kingdom of Great Britain formed created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1776",
            "title": "United States declares independence",
            "description": "United States declares independence ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "French revolutionary government",
            "description": "French revolutionary government governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "Napoleonic Empire",
            "description": "Napoleonic Empire governed its territories through royal, bureaucratic, military or local institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "Haitian independence",
            "description": "Haitian independence ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "Latin American independence era",
            "description": "Latin American independence era ended colonial or external rule and created a new sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "Congress of Vienna order",
            "description": "The Congress of Vienna redrew post-Napoleonic Europe and created a system of consultation among the great powers."
        },
        {
            "start": "1822",
            "title": "Brazilian independence",
            "description": "Brazilian independence ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1861",
            "title": "Kingdom of Italy proclaimed",
            "description": "Kingdom of Italy proclaimed created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1867",
            "title": "Canadian Confederation",
            "description": "Canadian Confederation created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1868",
            "title": "Meiji Restoration",
            "description": "The Meiji Restoration ended shogunal rule and began centralized government, industrialization and institutional reform in Japan."
        },
        {
            "start": "1871",
            "title": "German Empire proclaimed",
            "description": "German Empire proclaimed created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1885",
            "title": "Congo Free State established",
            "description": "Congo Free State established created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1901",
            "title": "Commonwealth of Australia formed",
            "description": "Commonwealth of Australia formed created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Chinese Revolution ends imperial rule",
            "description": "Chinese Revolution ends imperial rule ended the existing state structure and transferred territory and authority to successor entities.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "Russian Provisional Government and Bolshevik seizure of power",
            "description": "Russian Provisional Government and Bolshevik seizure of power changed who held state power and established a new political arrangement."
        },
        {
            "start": "1918",
            "title": "Collapse of German, Austro-Hungarian, Ottoman and Russian empires",
            "description": "Collapse of German, Austro-Hungarian, Ottoman and Russian empires ended the existing state structure and transferred territory and authority to successor entities."
        },
        {
            "start": "1922",
            "title": "Soviet Union founded",
            "description": "Soviet Union founded created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1923",
            "title": "Republic of Turkey founded",
            "description": "Republic of Turkey founded created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1932",
            "title": "Kingdom of Saudi Arabia proclaimed",
            "description": "Kingdom of Saudi Arabia proclaimed created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1947",
            "title": "India and Pakistan gain independence",
            "description": "India and Pakistan gain independence ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1948",
            "title": "State of Israel established",
            "description": "State of Israel established created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1949",
            "title": "People’s Republic of China founded",
            "description": "People’s Republic of China founded created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1957",
            "title": "Ghana becomes independent",
            "description": "Ghana becomes independent ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1960",
            "title": "Year of Africa",
            "description": "Year of Africa changed who held state power and established a new political arrangement."
        },
        {
            "start": "1962",
            "title": "Algerian independence",
            "description": "Algerian independence ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1963",
            "title": "Organization of African Unity founded",
            "description": "Organization of African Unity founded created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "1971",
            "title": "Bangladesh becomes independent",
            "description": "Bangladesh becomes independent ended colonial or external rule and created a new sovereign state."
        },
        {
            "start": "1990",
            "title": "German reunification",
            "description": "German reunification brought previously divided political units into a single state framework."
        },
        {
            "start": "1991",
            "title": "Dissolution of the Soviet Union",
            "description": "Dissolution of the Soviet Union ended the existing state structure and transferred territory and authority to successor entities."
        },
        {
            "start": "1993",
            "title": "Czechoslovakia peacefully dissolves",
            "description": "Czechoslovakia peacefully dissolves ended the existing state structure and transferred territory and authority to successor entities."
        },
        {
            "start": "1997",
            "title": "Hong Kong handover",
            "description": "Hong Kong handover completed a transfer of sovereignty and placed the territory under Chinese administration."
        },
        {
            "start": "1999",
            "title": "Macau handover",
            "description": "Macau handover completed a transfer of sovereignty and placed the territory under Chinese administration."
        },
        {
            "start": "2002",
            "title": "African Union founded",
            "description": "African Union founded created a new state or regional organization with permanent political institutions."
        },
        {
            "start": "2011",
            "title": "South Sudan becomes independent",
            "description": "South Sudan becomes independent ended colonial or external rule and created a new sovereign state."
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
            "description": "Pyramid complexes and royal mortuary culture changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "-1799",
            "title": "Old Babylonian scribal schools",
            "description": "Old Babylonian scribal schools expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "-1499",
            "title": "Vedic hymns transmitted in South Asia",
            "description": "Vedic hymns transmitted in South Asia fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "-1199",
            "title": "Oracle-bone writing in Shang China",
            "description": "Oracle-bone writing in Shang China changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "-0999",
            "title": "Hebrew religious traditions consolidate",
            "description": "Hebrew religious traditions consolidate formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "-0799",
            "title": "Homeric epics take written form",
            "description": "Homeric epics take written form fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "-0699",
            "title": "Alphabetic writing spreads around the Mediterranean",
            "description": "Alphabetic writing spreads around the Mediterranean fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "-0599",
            "title": "Upanishadic thought develops",
            "description": "Upanishadic thought develops carried the relevant ideas, practices or communication networks to more places and people."
        },
        {
            "start": "-0549",
            "title": "Jain tradition associated with Mahavira",
            "description": "Jain tradition associated with Mahavira formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "-0529",
            "title": "Buddhist community forms around the Buddha’s teaching",
            "description": "Buddhist community forms around the Buddha’s teaching formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "-0499",
            "title": "Confucian teaching and classical Chinese ethical tradition",
            "description": "Confucian teaching and classical Chinese ethical tradition changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "-0449",
            "title": "Greek theater flourishes in Athens",
            "description": "Greek theater flourishes in Athens changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "-0399",
            "title": "Compilation of major classical Chinese texts",
            "description": "Compilation of major classical Chinese texts fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "-0299",
            "title": "Hellenistic cultural synthesis",
            "description": "Hellenistic cultural synthesis changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "-0249",
            "title": "Buddhist missions under Ashoka",
            "description": "Buddhist missions under Ashoka formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "-0199",
            "title": "Rabbinic and Second Temple Jewish traditions develop",
            "description": "Rabbinic and Second Temple Jewish traditions develop formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0030",
            "title": "Early Christian movement",
            "description": "Early Christian movement formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0105",
            "title": "Paper-making associated with Cai Lun’s court report",
            "description": "Paper-making associated with Cai Lun’s court report lowered the cost of reproducing texts and widened access to written knowledge."
        },
        {
            "start": "0200",
            "title": "Mahayana Buddhism expands across Asia",
            "description": "Mahayana Buddhism expands across Asia formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0313",
            "title": "Edict of Milan legalizes Christianity in the Roman Empire",
            "description": "Edict of Milan legalizes Christianity in the Roman Empire formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0325",
            "title": "First Council of Nicaea",
            "description": "First Council of Nicaea redefined religious authority, doctrine or the relationship between state and faith."
        },
        {
            "start": "0380",
            "title": "Christianity becomes Roman imperial state religion",
            "description": "Christianity becomes Roman imperial state religion formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0400",
            "title": "Sanskrit classical culture flourishes under the Guptas",
            "description": "Sanskrit classical culture flourishes under the Guptas changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "0529",
            "title": "Benedictine monastic tradition begins",
            "description": "Benedictine monastic tradition begins formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0610",
            "title": "Quranic revelations begin in Islamic tradition",
            "description": "Quranic revelations begin in Islamic tradition fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "0622",
            "title": "Hijra and formation of the Medinan Muslim community",
            "description": "Hijra and formation of the Medinan Muslim community carried the relevant ideas, practices or communication networks to more places and people."
        },
        {
            "start": "0700",
            "title": "Buddhism established across East and Southeast Asia",
            "description": "Buddhism established across East and Southeast Asia formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "0762",
            "title": "Baghdad founded as Abbasid capital",
            "description": "Baghdad founded as Abbasid capital changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "0800",
            "title": "Carolingian educational reform",
            "description": "Carolingian educational reform expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "0850",
            "title": "Classical Arabic translation movement",
            "description": "Classical Arabic translation movement carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "0868",
            "title": "Diamond Sutra printed in China",
            "description": "Diamond Sutra printed in China lowered the cost of reproducing texts and widened access to written knowledge."
        },
        {
            "start": "0960",
            "title": "Movable-type and commercial printing traditions develop in East Asia",
            "description": "Movable-type and commercial printing traditions develop in East Asia lowered the cost of reproducing texts and widened access to written knowledge."
        },
        {
            "start": "0988",
            "title": "Christianization of Kievan Rus",
            "description": "Christianization of Kievan Rus formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "1054",
            "title": "East–West Schism",
            "description": "East–West Schism formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "1088",
            "title": "University of Bologna tradition begins",
            "description": "University of Bologna tradition begins expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "1096",
            "title": "Crusading movement begins",
            "description": "Crusading movement begins carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1150",
            "title": "European university networks expand",
            "description": "European university networks expand expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "1200",
            "title": "Neo-Confucianism becomes influential in East Asia",
            "description": "Neo-Confucianism becomes influential in East Asia changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1250",
            "title": "Scholastic culture reaches maturity",
            "description": "Scholastic culture reaches maturity changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1300",
            "title": "Vernacular literary cultures expand",
            "description": "Vernacular literary cultures expand changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1350",
            "title": "Italian Renaissance humanism expands",
            "description": "Italian Renaissance humanism expands changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1450",
            "title": "Gutenberg-era movable-type printing in Europe",
            "description": "Gutenberg-era movable-type printing in Europe lowered the cost of reproducing texts and widened access to written knowledge."
        },
        {
            "start": "1517",
            "title": "Protestant Reformation begins",
            "description": "Protestant Reformation beginsweakened established church authority and reorganized relations among rulers, churches and believers."
        },
        {
            "start": "1534",
            "title": "English Reformation and royal supremacy",
            "description": "English Reformation and royal supremacyweakened established church authority and reorganized relations among rulers, churches and believers."
        },
        {
            "start": "1540",
            "title": "Society of Jesus approved",
            "description": "Society of Jesus approved changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "Council of Trent",
            "description": "Council of Trent redefined religious authority, doctrine or the relationship between state and faith.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "King James Bible published",
            "description": "King James Bible published fixed religious, historical or scholarly material in texts that could be copied and transmitted."
        },
        {
            "start": "1637",
            "title": "Tokugawa restrictions on Christianity and overseas contact",
            "description": "Tokugawa restrictions on Christianity and overseas contact formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "1648",
            "title": "Confessional settlement after the Thirty Years’ War",
            "description": "Confessional settlement after the Thirty Years’ War changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1685",
            "title": "Revocation of the Edict of Nantes",
            "description": "Revocation of the Edict of Nantes redefined religious authority, doctrine or the relationship between state and faith."
        },
        {
            "start": "1715",
            "title": "European Enlightenment public sphere expands",
            "description": "European Enlightenment public sphere expands carried the relevant ideas, practices or communication networks to more places and people."
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "Encyclopédie published",
            "description": "Encyclopédie published fixed religious, historical or scholarly material in texts that could be copied and transmitted.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "Pacific missions and colonial cultural contact expand",
            "description": "Pacific missions and colonial cultural contact expand formed or enlarged religious communities with shared rituals, texts and social networks."
        },
        {
            "start": "1800",
            "title": "Romanticism reshapes European culture",
            "description": "Romanticism reshapes European culture changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1830",
            "title": "Mass newspaper circulation expands",
            "description": "Mass newspaper circulation expands carried the relevant ideas, practices or communication networks to more places and people."
        },
        {
            "start": "1848",
            "title": "Nationalism and liberal political culture surge",
            "description": "Nationalism and liberal political culture surge changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1868",
            "title": "State-led mass education expands in Meiji Japan",
            "description": "State-led mass education expands in Meiji Japan expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "1870",
            "title": "Compulsory mass schooling expands in Europe and North America",
            "description": "Compulsory mass schooling expands in Europe and North America expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "1896",
            "title": "First modern Olympic Games",
            "description": "First modern Olympic Games changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1900",
            "title": "Global popular culture and mass entertainment accelerate",
            "description": "Global popular culture and mass entertainment accelerate changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1919",
            "title": "Bauhaus founded",
            "description": "Bauhaus founded changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1920",
            "title": "Commercial radio broadcasting expands",
            "description": "Commercial radio broadcasting expandschanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1927",
            "title": "First feature-length synchronized sound film",
            "description": "First feature-length synchronized sound film changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1936",
            "title": "Television broadcasting begins regular service in several countries",
            "description": "Television broadcasting begins regular service in several countrieschanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1945",
            "title": "Postwar expansion of mass higher education",
            "description": "Postwar expansion of mass higher education expanded organized teaching and trained people in literacy, law and specialized knowledge."
        },
        {
            "start": "1947",
            "title": "Partition reshapes South Asian identities and migration",
            "description": "Partition reshapes South Asian identities and migration changed how people expressed belief, preserved knowledge or formed collective identities."
        },
        {
            "start": "1950",
            "title": "Global youth culture and consumer society expand",
            "description": "Global youth culture and consumer society expand changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1955",
            "title": "Bandung Conference promotes Afro-Asian solidarity",
            "description": "Bandung Conference promotes Afro-Asian solidarity redefined religious authority, doctrine or the relationship between state and faith."
        },
        {
            "start": "1960",
            "title": "Second-wave feminism expands internationally",
            "description": "Second-wave feminism expands internationally carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1964",
            "title": "Global civil-rights and anti-discrimination movements intensify",
            "description": "Global civil-rights and anti-discrimination movements intensify carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1968",
            "title": "Worldwide protest movements",
            "description": "Worldwide protest movements carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1969",
            "title": "Stonewall uprising and modern LGBTQ rights movement",
            "description": "Stonewall uprising and modern LGBTQ rights movement carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1970",
            "title": "Modern environmental movement enters mass politics",
            "description": "Modern environmental movement enters mass politics carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "1977",
            "title": "Global spread of personal computing culture",
            "description": "Global spread of personal computing culture changed artistic expression and influenced later literature, architecture or visual culture."
        },
        {
            "start": "1980",
            "title": "Global satellite television and media networks expand",
            "description": "Global satellite television and media networks expandchanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1989",
            "title": "World Wide Web proposed",
            "description": "World Wide Web proposedchanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1991",
            "title": "World Wide Web opened to wider public use",
            "description": "World Wide Web opened to wider public usechanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1995",
            "title": "Commercial internet and mobile communication accelerate",
            "description": "Commercial internet and mobile communication acceleratechanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2001",
            "title": "Wikipedia launched",
            "description": "Wikipedia launchedchanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2004",
            "title": "Social-media era begins",
            "description": "Social-media era beginschanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2007",
            "title": "Smartphone-centered digital life accelerates",
            "description": "Smartphone-centered digital life accelerateschanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2010",
            "title": "Streaming and platform culture become global",
            "description": "Streaming and platform culture become globalchanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2017",
            "title": "#MeToo becomes a global movement",
            "description": "#MeToo becomes a global movement carried demands for equality, identity or social reform into mass politics and public debate."
        },
        {
            "start": "2020",
            "title": "Remote work, online education and digital social life surge",
            "description": "Remote work, online education and digital social life surgemoved work, teaching and social activity onto online platforms at mass scale."
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
            "description": "Battle of Kadesh concentrated the opposing forces in a decisive operation that affected the course of the wider war."
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "Sea Peoples and eastern Mediterranean conflicts",
            "description": "Sea Peoples and eastern Mediterranean conflicts sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "Assyrian conquest of the Levant",
            "description": "Assyrian conquest of the Levant placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "Greco-Persian Wars",
            "description": "Greco-Persian Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "Peloponnesian War",
            "description": "Peloponnesian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "Conquests of Alexander the Great",
            "description": "Conquests of Alexander the Great placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "Punic Wars",
            "description": "Punic Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "Qin wars of unification",
            "description": "Qin wars of unification sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "Chu–Han Contention",
            "description": "Chu–Han Contention sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "Caesar’s Gallic Wars",
            "description": "Caesar’s Gallic Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "Caesar’s Civil War",
            "description": "Caesar’s Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "Battle of Actium",
            "description": "Battle of Actium concentrated the opposing forces in a decisive operation that affected the course of the wider war."
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "First Jewish–Roman War",
            "description": "First Jewish–Roman War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "Yellow Turban Rebellion",
            "description": "Yellow Turban Rebellion challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "Three Kingdoms wars",
            "description": "Three Kingdoms wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "Migration-period invasions and collapse of Western Roman rule",
            "description": "Migration-period invasions and collapse of Western Roman rule placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "Justinian’s reconquests",
            "description": "Justinian’s reconquests placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "Byzantine–Sasanian War",
            "description": "Byzantine–Sasanian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Early Islamic conquests",
            "description": "Early Islamic conquests placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "Muslim conquest of Iberia",
            "description": "Muslim conquest of Iberia placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "An Lushan Rebellion",
            "description": "An Lushan Rebellion used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "Viking raids and conquests",
            "description": "Viking raids and conquests placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Wars of the Five Dynasties and Ten Kingdoms",
            "description": "Wars of the Five Dynasties and Ten Kingdoms sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "Norman Conquest of England",
            "description": "Norman Conquest of England placed territory under outside military control and altered government, borders or population movement."
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "Crusades in the eastern Mediterranean",
            "description": "Crusades in the eastern Mediterranean sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "Genpei War",
            "description": "Genpei War used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "Mongol conquests across Eurasia",
            "description": "Mongol conquests across Eurasia placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "Albigensian Crusade",
            "description": "Albigensian Crusade used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "Mongol invasion of Europe",
            "description": "Mongol invasion of Europe placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "Mongol invasions of Japan",
            "description": "Mongol invasions of Japan placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "Hundred Years’ War",
            "description": "Hundred Years’ War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "Red Turban Rebellions",
            "description": "Red Turban Rebellions challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "Conquests of Timur",
            "description": "Conquests of Timur placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "Hussite Wars",
            "description": "Hussite Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "Wars of the Roses",
            "description": "Wars of the Roses sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "Sengoku conflicts in Japan",
            "description": "Sengoku conflicts in Japan sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "Fall of Granada",
            "description": "Fall of Granada used organized violence to change political authority, borders or social order."
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "Italian Wars",
            "description": "Italian Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "Spanish conquest of the Aztec Empire",
            "description": "Spanish conquest of the Aztec Empire placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "German Peasants’ War",
            "description": "German Peasants’ War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "Spanish conquest of the Inca realm",
            "description": "Spanish conquest of the Inca realm placed territory under outside military control and altered government, borders or population movement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "French Wars of Religion",
            "description": "French Wars of Religion sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "Dutch Revolt and Eighty Years’ War",
            "description": "Dutch Revolt and Eighty Years’ War challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "Japanese invasions of Korea",
            "description": "Japanese invasions of Korea sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "Thirty Years’ War",
            "description": "Thirty Years’ War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "Portuguese Restoration War",
            "description": "Portuguese Restoration War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "English Civil Wars",
            "description": "English Civil Wars divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "Ming–Qing transition warfare",
            "description": "Ming–Qing transition warfare sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "Anglo-Dutch Wars",
            "description": "Anglo-Dutch Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "Battle of Vienna",
            "description": "Battle of Vienna used organized violence to change political authority, borders or social order."
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "Glorious Revolution",
            "description": "Glorious Revolution challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "Great Northern War",
            "description": "Great Northern War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "War of the Spanish Succession",
            "description": "War of the Spanish Succession sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "Seven Years’ War",
            "description": "Seven Years’ War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "American Revolutionary War",
            "description": "American Revolutionary War was fought to end outside rule and establish a sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "French Revolution",
            "description": "French Revolution challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "Haitian Revolution",
            "description": "Haitian Revolution challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "French Revolutionary and Napoleonic Wars",
            "description": "French Revolutionary and Napoleonic Wars challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "First Serbian Uprising",
            "description": "First Serbian Uprising challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "Spanish American wars of independence",
            "description": "Spanish American wars of independence was fought to end outside rule and establish a sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "Greek War of Independence",
            "description": "Greek War of Independence was fought to end outside rule and establish a sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "First Opium War",
            "description": "First Opium War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "European Revolutions of 1848",
            "description": "European Revolutions of 1848 challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "Taiping Rebellion",
            "description": "Taiping Rebellion used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "Crimean War",
            "description": "Crimean War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "Second Opium War",
            "description": "Second Opium War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "Indian Rebellion",
            "description": "Indian Rebellion challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "American Civil War",
            "description": "American Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "Wars of German unification",
            "description": "Wars of German unification sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "Boshin War",
            "description": "Boshin War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "Franco-Prussian War",
            "description": "Franco-Prussian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "War of the Pacific",
            "description": "War of the Pacific sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "Mahdist War",
            "description": "Mahdist War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Sino-French War",
            "description": "Sino-French War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "First Sino-Japanese War",
            "description": "First Sino-Japanese War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "Battle of Adwa",
            "description": "Battle of Adwa concentrated the opposing forces in a decisive operation that affected the course of the wider war."
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "Second Boer War",
            "description": "Second Boer War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "Boxer Uprising and international intervention",
            "description": "Boxer Uprising and international intervention used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "Russo-Japanese War",
            "description": "Russo-Japanese War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "Russian Revolution of 1905",
            "description": "Russian Revolution of 1905 challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "Mexican Revolution",
            "description": "Mexican Revolution challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Xinhai Revolution",
            "description": "Xinhai Revolution challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "Balkan Wars",
            "description": "Balkan Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "First World War",
            "description": "First World War used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "Easter Rising",
            "description": "Easter Rising challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "Russian Revolutions",
            "description": "Russian Revolutions challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "Russian Civil War",
            "description": "Russian Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "Turkish War of Independence",
            "description": "Turkish War of Independence was fought to end outside rule and establish a sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "Chinese Civil War",
            "description": "Chinese Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "Japanese expansion and war in East Asia",
            "description": "Japanese expansion and war in East Asia sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "Second Italo-Ethiopian War",
            "description": "Second Italo-Ethiopian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "Spanish Civil War",
            "description": "Spanish Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "Second World War",
            "description": "Second World War used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "Eastern Front of the Second World War",
            "description": "Eastern Front of the Second World War used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "Pacific War",
            "description": "Pacific War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "Indonesian National Revolution",
            "description": "Indonesian National Revolution was fought to end outside rule and establish a sovereign state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "First Indochina War",
            "description": "First Indochina War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "First Arab–Israeli War",
            "description": "First Arab–Israeli War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "Cold War",
            "description": "Cold War used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "Malayan Emergency",
            "description": "Malayan Emergency used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "Korean War",
            "description": "Korean War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "Mau Mau uprising",
            "description": "Mau Mau uprising challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "Algerian War",
            "description": "Algerian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "Vietnam War",
            "description": "Vietnam War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "Suez Crisis",
            "description": "Suez Crisis used organized violence to change political authority, borders or social order."
        },
        {
            "start": "1956",
            "title": "Hungarian Revolution",
            "description": "Hungarian Revolution challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1959",
            "title": "Cuban Revolution",
            "description": "Cuban Revolution challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "Congo Crisis",
            "description": "Congo Crisis used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "Portuguese Colonial War",
            "description": "Portuguese Colonial War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "Cuban Missile Crisis",
            "description": "Cuban Missile Crisis used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "Indonesian mass killings and political transition",
            "description": "Indonesian mass killings and political transition used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "Six-Day War",
            "description": "Six-Day War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "Prague Spring and Warsaw Pact invasion",
            "description": "Prague Spring and Warsaw Pact invasion placed territory under outside military control and altered government, borders or population movement."
        },
        {
            "start": "1971",
            "title": "Bangladesh Liberation War",
            "description": "Bangladesh Liberation War was fought to end outside rule and establish a sovereign state."
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "Yom Kippur War",
            "description": "Yom Kippur War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "Lebanese Civil War",
            "description": "Lebanese Civil War divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "Cambodian genocide under the Khmer Rouge",
            "description": "During Cambodian genocide under the Khmer Rouge, civilians were systematically killed or expelled because of ethnic, religious or political identity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "Soviet–Afghan War",
            "description": "Soviet–Afghan War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "Iranian Revolution",
            "description": "Iranian Revolution challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "Iran–Iraq War",
            "description": "Iran–Iraq War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "Falklands War",
            "description": "Falklands War sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "First Intifada",
            "description": "First Intifada challenged the existing government and sought to change political or social institutions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "Tiananmen protests and crackdown",
            "description": "Tiananmen protests and crackdown challenged the existing government and sought to change political or social institutions."
        },
        {
            "start": "1989",
            "title": "Fall of communist governments in Eastern Europe",
            "description": "Fall of communist governments in Eastern Europe used organized violence to change political authority, borders or social order."
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "Gulf War",
            "description": "Gulf War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Yugoslav Wars",
            "description": "Yugoslav Wars sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "Genocide against the Tutsi in Rwanda",
            "description": "During Genocide against the Tutsi in Rwanda, civilians were systematically killed or expelled because of ethnic, religious or political identity."
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "First Chechen War",
            "description": "First Chechen War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "Eritrean–Ethiopian War",
            "description": "Eritrean–Ethiopian War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "Second Congo War",
            "description": "Second Congo War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "Kosovo War and NATO intervention",
            "description": "Kosovo War and NATO intervention sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "2001-09-11",
            "title": "September 11 attacks",
            "description": "September 11 attacks used organized violence to change political authority, borders or social order."
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "War in Afghanistan",
            "description": "War in Afghanistan sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "Iraq War",
            "description": "Iraq War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "Darfur war and mass atrocities",
            "description": "Darfur war and mass atrocities sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "Insurgency and conflict in northern Pakistan",
            "description": "Insurgency and conflict in northern Pakistan sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "Lebanon War",
            "description": "Lebanon War sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "2008",
            "title": "Russo-Georgian War",
            "description": "Russo-Georgian War sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "Arab Spring uprisings",
            "description": "Arab Spring uprisings used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "Libyan civil war and international intervention",
            "description": "Libyan civil war and international intervention divided the country into rival political or military camps competing for control of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "Syrian civil war begins",
            "description": "Syrian civil war begins divided the country into rival political or military camps competing for control of the state."
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISIS territorial expansion and defeat of its caliphate",
            "description": "ISIS territorial expansion and defeat of its caliphate used organized violence to change political authority, borders or social order.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Russia annexes Crimea and war begins in Donbas",
            "description": "Russia annexes Crimea and war begins in Donbas placed territory under outside military control and altered government, borders or population movement."
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "War against ISIS in Iraq",
            "description": "War against ISIS in Iraq sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Yemeni civil war intensifies",
            "description": "Yemeni civil war intensifies divided the country into rival political or military camps competing for control of the state."
        },
        {
            "start": "2017",
            "title": "Rohingya mass displacement from Myanmar",
            "description": "Rohingya mass displacement from Myanmar forced large numbers of civilians from their homes and created a cross-border humanitarian crisis."
        },
        {
            "start": "2020",
            "title": "Second Nagorno-Karabakh War",
            "description": "Second Nagorno-Karabakh War sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "Tigray War",
            "description": "Tigray War sustained armed conflict over territory, government, security or national claims.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "Myanmar military coup and nationwide conflict",
            "description": "Myanmar military coup and nationwide conflict transferred power to a military or political faction and triggered new rule and resistance."
        },
        {
            "start": "2022-02-24",
            "title": "Russia’s full-scale invasion of Ukraine",
            "description": "Russia’s full-scale invasion of Ukraine placed territory under outside military control and altered government, borders or population movement."
        },
        {
            "start": "2023-10-07",
            "title": "Israel–Hamas war begins",
            "description": "Israel–Hamas war begins sustained armed conflict over territory, government, security or national claims."
        },
        {
            "start": "2023",
            "title": "Sudan war begins",
            "description": "Sudan war begins sustained armed conflict over territory, government, security or national claims."
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
            "description": "Sail-powered transport expandsreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "-2999",
            "title": "Interregional commodity trade grows",
            "description": "Interregional commodity trade grows expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "-1999",
            "title": "Bronze trade networks link Eurasian regions",
            "description": "Bronze trade networks link Eurasian regions expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "-1199",
            "title": "Iron production reshapes tools and warfare",
            "description": "Iron production reshapes tools and warfareraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "-0599",
            "title": "Coinage spreads in the Mediterranean and West Asia",
            "description": "Coinage spreads in the Mediterranean and West Asia introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "-0299",
            "title": "Silk Road exchange expands",
            "description": "Silk Road exchange expands extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "-0199",
            "title": "Indian Ocean monsoon trade intensifies",
            "description": "Indian Ocean monsoon trade intensifies expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "-0099",
            "title": "Roman road and maritime systems integrate the Mediterranean",
            "description": "Roman road and maritime systems integrate the Mediterraneanreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "0100",
            "title": "Paper production spreads within China",
            "description": "Paper production spreads within China changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "0200",
            "title": "Camel caravan trade expands across the Sahara",
            "description": "Camel caravan trade expands across the Sahara expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "0600",
            "title": "Grand Canal networks integrate China",
            "description": "Grand Canal networks integrate Chinareduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "0700",
            "title": "Indian Ocean commercial diaspora expands",
            "description": "Indian Ocean commercial diaspora expands expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "0750",
            "title": "Islamic commercial and credit networks expand",
            "description": "Islamic commercial and credit networks expand expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "0800",
            "title": "Paper-making spreads through the Islamic world",
            "description": "Paper-making spreads through the Islamic world changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "0900",
            "title": "Gunpowder weapons begin to develop in China",
            "description": "Gunpowder weapons begin to develop in China extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1000",
            "title": "Maritime compass use develops in China",
            "description": "Maritime compass use develops in Chinareduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1100",
            "title": "Commercial revolution in medieval Europe",
            "description": "Commercial revolution in medieval Europe expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1200",
            "title": "Mongol-era trans-Eurasian exchange",
            "description": "Mongol-era trans-Eurasian exchange changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "Marco Polo journeys across Eurasia",
            "description": "Marco Polo journeys across Eurasia changed the practical organization of production, exchange, transport or finance.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "Bills of exchange and banking houses expand",
            "description": "Bills of exchange and banking houses expand introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "Zheng He voyages",
            "description": "Zheng He voyages changed the practical organization of production, exchange, transport or finance.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "European printing revolution",
            "description": "European printing revolution changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1488",
            "title": "Dias rounds the Cape of Good Hope",
            "description": "Dias rounds the Cape of Good Hope changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1492-10-12",
            "title": "Columbus reaches the Caribbean",
            "description": "Columbus reaches the Caribbean changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas divides claimed overseas spheres",
            "description": "Treaty of Tordesillas divides claimed overseas spheres changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1498",
            "title": "Vasco da Gama reaches India by sea",
            "description": "Vasco da Gama reaches India by sea changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1500",
            "title": "Columbian Exchange accelerates",
            "description": "Columbian Exchange accelerates expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "Transatlantic slave trade",
            "description": "Transatlantic slave trade expanded long-distance exchange and connected producers, ports and markets.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "First circumnavigation expedition",
            "description": "First circumnavigation expedition changed the practical organization of production, exchange, transport or finance.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "Potosí silver boom",
            "description": "Potosí silver boom changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1565",
            "title": "Manila galleon trade links the Americas and Asia",
            "description": "Manila galleon trade links the Americas and Asiareduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1600",
            "title": "English East India Company chartered",
            "description": "English East India Company chartered changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1602",
            "title": "Dutch East India Company founded",
            "description": "Dutch East India Company founded changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1609",
            "title": "Bank of Amsterdam founded",
            "description": "Bank of Amsterdam founded introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "1637",
            "title": "Dutch tulip-market crash",
            "description": "Dutch tulip-market crashdisrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "1650",
            "title": "Atlantic plantation economy expands",
            "description": "Atlantic plantation economy expands extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1694",
            "title": "Bank of England founded",
            "description": "Bank of England founded introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "1700",
            "title": "Global commodity markets for sugar, tea, coffee and cotton expand",
            "description": "Global commodity markets for sugar, tea, coffee and cotton expand extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1712",
            "title": "Newcomen steam engine",
            "description": "Newcomen steam engineraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "First Industrial Revolution",
            "description": "First Industrial Revolutionraised productive or energy capacity and changed labor organization and urban growth.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "Watt’s improved steam engine patented",
            "description": "Watt’s improved steam engine patentedraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1770",
            "title": "British factory system expands",
            "description": "British factory system expandsraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1787",
            "title": "First Fleet begins British colonization of Australia",
            "description": "First Fleet begins British colonization of Australia changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1793",
            "title": "Cotton gin accelerates cotton production and slavery in the United States",
            "description": "Cotton gin accelerates cotton production and slavery in the United Statesraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1807",
            "title": "Commercial steamship era begins",
            "description": "Commercial steamship era beginsraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1825",
            "title": "Stockton and Darlington Railway opens",
            "description": "Stockton and Darlington Railway opensreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1830",
            "title": "Liverpool and Manchester Railway opens",
            "description": "Liverpool and Manchester Railway opensreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1837",
            "title": "Electric telegraph demonstrated",
            "description": "Electric telegraph demonstrated compressed communication time and created new forms of business, work and consumption."
        },
        {
            "start": "1846",
            "title": "Repeal of the Corn Laws",
            "description": "Repeal of the Corn Laws changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1848",
            "title": "California Gold Rush",
            "description": "California Gold Rush changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1851",
            "title": "Great Exhibition in London",
            "description": "Great Exhibition in London changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1856",
            "title": "Bessemer steel process",
            "description": "Bessemer steel process changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1859",
            "title": "First commercial oil well in Pennsylvania",
            "description": "First commercial oil well in Pennsylvaniaraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1863",
            "title": "London Underground opens",
            "description": "London Underground opensreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1869",
            "title": "Suez Canal opens",
            "description": "Suez Canal opensreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1869",
            "title": "First transcontinental railroad completed in the United States",
            "description": "First transcontinental railroad completed in the United Statesreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "Second Industrial Revolution",
            "description": "Second Industrial Revolutionraised productive or energy capacity and changed labor organization and urban growth.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "Telephone patented and demonstrated",
            "description": "Telephone patented and demonstrated compressed communication time and created new forms of business, work and consumption."
        },
        {
            "start": "1879",
            "title": "Practical electric lighting systems emerge",
            "description": "Practical electric lighting systems emerge changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1880",
            "title": "Mass migration from Europe and Asia accelerates",
            "description": "Mass migration from Europe and Asia accelerates changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1883",
            "title": "Orient Express begins service",
            "description": "Orient Express begins service changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1886",
            "title": "Automobile era begins",
            "description": "Automobile era beginsraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1895",
            "title": "Commercial cinema begins",
            "description": "Commercial cinema begins expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1903",
            "title": "First controlled powered airplane flight",
            "description": "First controlled powered airplane flight changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1908",
            "title": "Ford Model T and mass automobile production",
            "description": "Ford Model T and mass automobile productionraised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1914",
            "title": "Panama Canal opens",
            "description": "Panama Canal opensreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1920",
            "title": "Mass consumer credit and advertising expand",
            "description": "Mass consumer credit and advertising expand extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "Great Depression",
            "description": "Great Depression changed the practical organization of production, exchange, transport or finance.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "New Deal begins in the United States",
            "description": "New Deal begins in the United States extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1944",
            "title": "Bretton Woods system designed",
            "description": "Bretton Woods system designed changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade signed",
            "description": "General Agreement on Tariffs and Trade signed expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1948",
            "title": "Marshall Plan begins",
            "description": "Marshall Plan begins extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1950",
            "title": "Containerization begins to transform shipping",
            "description": "Containerization begins to transform shippingreduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1956",
            "title": "First commercial container ship voyage",
            "description": "First commercial container ship voyagereduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1957",
            "title": "European Economic Community founded",
            "description": "European Economic Community founded changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1960",
            "title": "OPEC founded",
            "description": "OPEC founded changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1964",
            "title": "Shinkansen high-speed rail opens",
            "description": "Shinkansen high-speed rail opens changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "ARPANET begins operation extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1971",
            "title": "End of dollar–gold convertibility",
            "description": "End of dollar–gold convertibility changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1973",
            "title": "First oil crisis",
            "description": "First oil crisisdisrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "1978",
            "title": "China launches reform and opening",
            "description": "China launches reform and opening extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1981",
            "title": "IBM PC accelerates personal-computer market",
            "description": "IBM PC accelerates personal-computer market changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1983",
            "title": "ARPANET adopts TCP/IP",
            "description": "ARPANET adopts TCP/IP changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1985",
            "title": "Schengen Agreement signed",
            "description": "Schengen Agreement signed changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1986",
            "title": "Market reforms accelerate in many regions",
            "description": "Market reforms accelerate in many regions changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1989",
            "title": "Washington Consensus era begins",
            "description": "Washington Consensus era begins extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1991",
            "title": "Economic liberalization accelerates in India",
            "description": "Economic liberalization accelerates in India changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "1993",
            "title": "European Single Market begins",
            "description": "European Single Market begins extended production, transport, finance or market networks across a wider area."
        },
        {
            "start": "1994",
            "title": "North American Free Trade Agreement enters into force",
            "description": "North American Free Trade Agreement enters into force expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1995",
            "title": "World Trade Organization begins",
            "description": "World Trade Organization begins expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "Asian financial crisis",
            "description": "Asian financial crisisdisrupted finance, energy or supply chains and forced governments and firms to adjust.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "Euro introduced for electronic and accounting use",
            "description": "Euro introduced for electronic and accounting use introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "2001",
            "title": "China joins the World Trade Organization",
            "description": "China joins the World Trade Organization expanded long-distance exchange and connected producers, ports and markets."
        },
        {
            "start": "2002",
            "title": "Euro notes and coins enter circulation",
            "description": "Euro notes and coins enter circulation changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "2004",
            "title": "Major enlargement of the European Union",
            "description": "Major enlargement of the European Union changed the practical organization of production, exchange, transport or finance."
        },
        {
            "start": "2007",
            "title": "Global smartphone economy begins",
            "description": "Global smartphone economy begins compressed communication time and created new forms of business, work and consumption."
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "Global financial crisis",
            "description": "Global financial crisisdisrupted finance, energy or supply chains and forced governments and firms to adjust.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "Bitcoin network begins",
            "description": "Bitcoin network begins introduced a new way to pay, finance activity or store value across distance."
        },
        {
            "start": "2010",
            "title": "Platform and gig economies expand",
            "description": "Platform and gig economies expand compressed communication time and created new forms of business, work and consumption."
        },
        {
            "start": "2013",
            "title": "Belt and Road Initiative announced",
            "description": "Belt and Road Initiative announced changed the direction of cross-border economic cooperation and rearranged trade and regulation."
        },
        {
            "start": "2016",
            "title": "United Kingdom votes to leave the European Union",
            "description": "United Kingdom votes to leave the European Union changed the direction of cross-border economic cooperation and rearranged trade and regulation."
        },
        {
            "start": "2020",
            "title": "Brexit takes legal effect",
            "description": "Brexit takes legal effect changed the direction of cross-border economic cooperation and rearranged trade and regulation."
        },
        {
            "start": "2020",
            "title": "Global supply-chain shock during COVID-19",
            "description": "Global supply-chain shock during COVID-19disrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "2021",
            "title": "Global inflation and energy-price pressures intensify",
            "description": "Global inflation and energy-price pressures intensifydisrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "2022",
            "title": "Sanctions and trade fragmentation deepen after the invasion of Ukraine",
            "description": "Sanctions and trade fragmentation deepen after the invasion of Ukrainedisrupted finance, energy or supply chains and forced governments and firms to adjust."
        }
    ]
};

// Disasters, epidemics and environment
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2-kiloyear drought event",
            "description": "4.2-kiloyear drought event reduced food supplies and intensified malnutrition, migration and social instability."
        },
        {
            "start": "-1599",
            "title": "Thera eruption and eastern Mediterranean disruption",
            "description": "Thera eruption and eastern Mediterranean disruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "Antonine Plague",
            "description": "Antonine Plague spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "Plague of Cyprian",
            "description": "Plague of Cyprian spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "Late Antique climatic shock",
            "description": "Late Antique climatic shock altered temperature and rainfall patterns and affected agriculture, health and settlement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "First plague pandemic beginning with the Plague of Justinian",
            "description": "First plague pandemic beginning with the Plague of Justinian spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "Samalas eruption",
            "description": "Samalas eruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "Great Famine in Europe",
            "description": "Great Famine in Europe reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "Black Death",
            "description": "Black Death caused casualties, interrupted production and created prolonged reconstruction needs.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "Mid-fifteenth-century volcanic and climate shocks",
            "description": "Mid-fifteenth-century volcanic and climate shocks released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "Old World diseases devastate Indigenous populations in the Americas",
            "description": "Old World diseases devastate Indigenous populations in the Americas spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "Shaanxi earthquake",
            "description": "Shaanxi earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1600",
            "title": "Huaynaputina eruption and global cooling",
            "description": "Huaynaputina eruption and global cooling released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "Great Plague of London",
            "description": "Great Plague of London spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "Great Fire of London",
            "description": "Great Fire of London burned homes or ecosystems and exposed weaknesses in urban management and disaster response."
        },
        {
            "start": "1707",
            "title": "Hōei earthquake and Fuji eruption",
            "description": "Hōei earthquake and Fuji eruption destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "Great Plague of Marseille",
            "description": "Great Plague of Marseille spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "Lisbon earthquake and tsunami",
            "description": "Lisbon earthquake and tsunami destroyed coastal communities and created long-term reconstruction and energy-safety problems."
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "Laki eruption and climatic disruption",
            "description": "Laki eruption and climatic disruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "Tambora eruption",
            "description": "Tambora eruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1816",
            "title": "Year Without a Summer",
            "description": "Year Without a Summer caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "Global cholera pandemics",
            "description": "Global cholera pandemics caused casualties, interrupted production and created prolonged reconstruction needs.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "Great Irish Famine",
            "description": "Great Irish Famine reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "Great Famine in India and China",
            "description": "Great Famine in India and China reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "Krakatoa eruption",
            "description": "Krakatoa eruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1887",
            "title": "Yellow River flood",
            "description": "Yellow River flood flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "Third plague pandemic",
            "description": "Third plague pandemic spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "San Francisco earthquake",
            "description": "San Francisco earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1911",
            "title": "Yangtze–Huai River floods",
            "description": "Yangtze–Huai River floods caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "Influenza pandemic",
            "description": "Influenza pandemic spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "Haiyuan earthquake",
            "description": "Haiyuan earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1923-09-01",
            "title": "Great Kantō earthquake",
            "description": "Great Kantō earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1931",
            "title": "China floods",
            "description": "China floods flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "Soviet famine including the Holodomor",
            "description": "Soviet famine including the Holodomor reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "Bengal famine",
            "description": "Bengal famine reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "Great Chinese Famine",
            "description": "Great Chinese Famine reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "Valdivia earthquake and Pacific tsunami",
            "description": "Valdivia earthquake and Pacific tsunami destroyed coastal communities and created long-term reconstruction and energy-safety problems."
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "Hong Kong influenza pandemic",
            "description": "Hong Kong influenza pandemic spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "Bhola cyclone",
            "description": "Bhola cyclone caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "1976",
            "title": "Tangshan earthquake",
            "description": "Tangshan earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1984",
            "title": "Bhopal industrial disaster",
            "description": "Bhopal industrial disaster caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "Ethiopian famine",
            "description": "Ethiopian famine reduced food supplies and intensified malnutrition, migration and social instability.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "Chernobyl nuclear disaster",
            "description": "Chernobyl nuclear disaster caused severe human and environmental damage and led to tighter safety regulation."
        },
        {
            "start": "1988",
            "title": "Armenian earthquake",
            "description": "Armenian earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1991",
            "title": "Mount Pinatubo eruption",
            "description": "Mount Pinatubo eruption released ash and gases that damaged nearby settlements and affected climate and agriculture farther away."
        },
        {
            "start": "1994",
            "title": "Great Hanshin earthquake",
            "description": "Great Hanshin earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "El Niño global climate disruption",
            "description": "El Niño global climate disruption altered temperature and rainfall patterns and affected agriculture, health and settlement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "Gujarat earthquake",
            "description": "Gujarat earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "2003",
            "title": "European heatwave",
            "description": "European heatwave caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "2004-12-26",
            "title": "Indian Ocean earthquake and tsunami",
            "description": "Indian Ocean earthquake and tsunami destroyed coastal communities and created long-term reconstruction and energy-safety problems."
        },
        {
            "start": "2005",
            "title": "Hurricane Katrina",
            "description": "Hurricane Katrina flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "2008",
            "title": "Cyclone Nargis",
            "description": "Cyclone Nargis caused casualties, interrupted production and created prolonged reconstruction needs."
        },
        {
            "start": "2008",
            "title": "Sichuan earthquake",
            "description": "Sichuan earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "2010",
            "title": "Haiti earthquake",
            "description": "Haiti earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "2010",
            "title": "Pakistan floods",
            "description": "Pakistan floods flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "2011-03-11",
            "title": "Great East Japan earthquake, tsunami and Fukushima disaster",
            "description": "Great East Japan earthquake, tsunami and Fukushima disaster destroyed coastal communities and created long-term reconstruction and energy-safety problems."
        },
        {
            "start": "2013",
            "title": "Typhoon Haiyan",
            "description": "Typhoon Haiyan flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "West African Ebola epidemic",
            "description": "West African Ebola epidemic spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "Nepal earthquake",
            "description": "Nepal earthquake destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "COVID-19 global health emergency",
            "description": "COVID-19 global health emergency spread disease across a large population, caused deaths and changed medical and social practices.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "Record global wildfire and extreme-weather awareness",
            "description": "Record global wildfire and extreme-weather awareness burned homes or ecosystems and exposed weaknesses in urban management and disaster response."
        },
        {
            "start": "2022",
            "title": "Pakistan floods and climate-vulnerability crisis",
            "description": "Pakistan floods and climate-vulnerability crisis flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
        },
        {
            "start": "2023",
            "title": "Türkiye–Syria earthquakes",
            "description": "Türkiye–Syria earthquakes destroyed buildings and infrastructure, caused heavy casualties and required large-scale reconstruction."
        },
        {
            "start": "2023",
            "title": "Derna floods in Libya",
            "description": "Derna floods in Libya flooded or destroyed communities and caused deaths, displacement and infrastructure loss."
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
            "description": "Code of Hammurabi placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "-0620",
            "title": "Reforms of Draco and Solon in Athens",
            "description": "Reforms of Draco and Solon in Athens placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "-0508",
            "title": "Roman republican institutions established",
            "description": "Roman republican institutions established defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "-0449",
            "title": "Twelve Tables of Roman law",
            "description": "Twelve Tables of Roman law defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "-0220",
            "title": "Qin administrative standardization",
            "description": "Qin administrative standardization defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "0212",
            "title": "Roman citizenship extended by the Constitutio Antoniniana",
            "description": "Roman citizenship extended by the Constitutio Antoniniana set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "0604",
            "title": "Seventeen-Article Constitution in Japan",
            "description": "Seventeen-Article Constitution in Japan placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "0701",
            "title": "Taihō Code",
            "description": "Taihō Code placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "0800",
            "title": "Carolingian imperial coronation",
            "description": "Carolingian imperial coronation defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1215-06-15",
            "title": "Magna Carta sealed",
            "description": "Magna Carta sealed set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1222",
            "title": "Golden Bull of Hungary",
            "description": "Golden Bull of Hungary set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1232",
            "title": "Manden Charter tradition",
            "description": "Manden Charter tradition set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1265",
            "title": "English Parliament associated with Simon de Montfort",
            "description": "English Parliament associated with Simon de Montfort expanded or reorganized political representation and participation in public decisions."
        },
        {
            "start": "1356",
            "title": "Golden Bull of the Holy Roman Empire",
            "description": "Golden Bull of the Holy Roman Empire set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1454",
            "title": "Peace of Lodi",
            "description": "Peace of Lodi set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas",
            "description": "Treaty of Tordesillas set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1555",
            "title": "Peace of Augsburg",
            "description": "Peace of Augsburg set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1598",
            "title": "Edict of Nantes",
            "description": "Edict of Nantes set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1600",
            "title": "Chartered-company governance expands",
            "description": "Chartered-company governance expands defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1628",
            "title": "Petition of Right",
            "description": "Petition of Right defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1648",
            "title": "Peace of Westphalia",
            "description": "Peace of Westphalia set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1679",
            "title": "Habeas Corpus Act",
            "description": "Habeas Corpus Act defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1689",
            "title": "English Bill of Rights",
            "description": "English Bill of Rights placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1701",
            "title": "Act of Settlement",
            "description": "Act of Settlement defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1713",
            "title": "Treaties of Utrecht",
            "description": "Treaties of Utrecht set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1776-07-04",
            "title": "United States Declaration of Independence",
            "description": "United States Declaration of Independence set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1787-09-17",
            "title": "United States Constitution signed",
            "description": "United States Constitution signed placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1789-08-26",
            "title": "Declaration of the Rights of Man and of the Citizen",
            "description": "Declaration of the Rights of Man and of the Citizen set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1791",
            "title": "United States Bill of Rights ratified",
            "description": "United States Bill of Rights ratified placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1792",
            "title": "A Vindication of the Rights of Woman published",
            "description": "A Vindication of the Rights of Woman published defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1804",
            "title": "Napoleonic Code",
            "description": "Napoleonic Code placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1807",
            "title": "British abolition of the slave trade",
            "description": "British abolition of the slave trade restricted or ended the legal treatment of human beings as property and forced labor."
        },
        {
            "start": "1815",
            "title": "Congress of Vienna and Concert of Europe",
            "description": "Congress of Vienna and Concert of Europe defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1833",
            "title": "Slavery Abolition Act in the British Empire",
            "description": "Slavery Abolition Act in the British Empire defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1840",
            "title": "Treaty of Waitangi",
            "description": "Treaty of Waitangi set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1848",
            "title": "Seneca Falls Convention",
            "description": "Seneca Falls Convention defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1863",
            "title": "Emancipation Proclamation",
            "description": "Emancipation Proclamation set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1864",
            "title": "First Geneva Convention",
            "description": "First Geneva Convention set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1865",
            "title": "Thirteenth Amendment abolishes slavery in the United States",
            "description": "Thirteenth Amendment abolishes slavery in the United States placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1868",
            "title": "Fourteenth Amendment defines citizenship and equal protection",
            "description": "Fourteenth Amendment defines citizenship and equal protection placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1868",
            "title": "Charter Oath in Meiji Japan",
            "description": "Charter Oath in Meiji Japan defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1870",
            "title": "Fifteenth Amendment protects voting rights regardless of race",
            "description": "Fifteenth Amendment protects voting rights regardless of race placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Berlin Conference regulates European colonization in Africa",
            "description": "Berlin Conference regulates European colonization in Africa defined rules governing public authority, individual rights or relations between states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "Meiji Constitution promulgated",
            "description": "Meiji Constitution promulgated placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1899",
            "title": "First Hague Peace Conference",
            "description": "First Hague Peace Conference defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1902",
            "title": "Australia grants most women federal voting rights",
            "description": "Australia grants most women federal voting rights expanded or reorganized political representation and participation in public decisions."
        },
        {
            "start": "1905",
            "title": "Norway becomes independent through negotiated dissolution",
            "description": "Norway becomes independent through negotiated dissolution defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1907",
            "title": "Second Hague Peace Conference",
            "description": "Second Hague Peace Conference defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1911",
            "title": "International Women’s Day first observed",
            "description": "International Women’s Day first observed defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1918",
            "title": "Women gain parliamentary voting rights in Britain under age restrictions",
            "description": "Women gain parliamentary voting rights in Britain under age restrictions expanded or reorganized political representation and participation in public decisions."
        },
        {
            "start": "1919",
            "title": "Treaty of Versailles",
            "description": "Treaty of Versailles set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1919",
            "title": "International Labour Organization founded",
            "description": "International Labour Organization founded created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1920",
            "title": "League of Nations begins",
            "description": "League of Nations begins created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1920",
            "title": "Nineteenth Amendment establishes women’s suffrage in the United States",
            "description": "Nineteenth Amendment establishes women’s suffrage in the United States placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1928",
            "title": "Kellogg–Briand Pact",
            "description": "Kellogg–Briand Pact set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1935",
            "title": "Nuremberg Laws enacted",
            "description": "Nuremberg Laws enacted defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1941",
            "title": "Atlantic Charter",
            "description": "Atlantic Charter set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1944",
            "title": "Bretton Woods institutions planned",
            "description": "Bretton Woods institutions planned defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1945-06-26",
            "title": "United Nations Charter signed",
            "description": "United Nations Charter signed set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1945-10-24",
            "title": "United Nations comes into existence",
            "description": "United Nations comes into existence created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "Nuremberg Trials",
            "description": "Nuremberg Trials defined rules governing public authority, individual rights or relations between states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "Tokyo War Crimes Tribunal",
            "description": "Tokyo War Crimes Tribunal defined rules governing public authority, individual rights or relations between states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade",
            "description": "General Agreement on Tariffs and Trade defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1948-12-09",
            "title": "Genocide Convention adopted",
            "description": "Genocide Convention adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1948-12-10",
            "title": "Universal Declaration of Human Rights adopted",
            "description": "Universal Declaration of Human Rights adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1949",
            "title": "Geneva Conventions revised and expanded",
            "description": "Geneva Conventions revised and expanded set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1949",
            "title": "North Atlantic Treaty Organization founded",
            "description": "North Atlantic Treaty Organization founded set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1950",
            "title": "European Convention on Human Rights signed",
            "description": "European Convention on Human Rights signed set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1951",
            "title": "Refugee Convention adopted",
            "description": "Refugee Convention adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1955",
            "title": "Warsaw Pact founded",
            "description": "Warsaw Pact founded set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1957",
            "title": "Treaties of Rome",
            "description": "Treaties of Rome set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1959",
            "title": "European Court of Human Rights established",
            "description": "European Court of Human Rights established used a judicial ruling to reinterpret law and change the boundary of governmental or individual rights."
        },
        {
            "start": "1960-12-14",
            "title": "UN Declaration on the Granting of Independence to Colonial Countries and Peoples",
            "description": "UN Declaration on the Granting of Independence to Colonial Countries and Peoples set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1963",
            "title": "Organization of African Unity founded",
            "description": "Organization of African Unity founded created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1964",
            "title": "Civil Rights Act in the United States",
            "description": "Civil Rights Act in the United States defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1965",
            "title": "Voting Rights Act in the United States",
            "description": "Voting Rights Act in the United States expanded or reorganized political representation and participation in public decisions."
        },
        {
            "start": "1965",
            "title": "International Convention on the Elimination of All Forms of Racial Discrimination",
            "description": "International Convention on the Elimination of All Forms of Racial Discrimination set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1966",
            "title": "International human-rights covenants adopted",
            "description": "International human-rights covenants adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1967",
            "title": "ASEAN founded",
            "description": "ASEAN founded created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1968",
            "title": "Treaty on the Non-Proliferation of Nuclear Weapons opened for signature",
            "description": "Treaty on the Non-Proliferation of Nuclear Weapons opened for signature set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1972",
            "title": "Stockholm Conference on the Human Environment",
            "description": "Stockholm Conference on the Human Environment created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1975",
            "title": "Helsinki Final Act",
            "description": "Helsinki Final Act defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1979",
            "title": "Convention on the Elimination of All Forms of Discrimination against Women",
            "description": "Convention on the Elimination of All Forms of Discrimination against Women set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1981",
            "title": "African Charter on Human and Peoples’ Rights adopted",
            "description": "African Charter on Human and Peoples’ Rights adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1982",
            "title": "United Nations Convention on the Law of the Sea opened for signature",
            "description": "United Nations Convention on the Law of the Sea opened for signature set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1987",
            "title": "Montreal Protocol adopted",
            "description": "Montreal Protocol adopted defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1989",
            "title": "Convention on the Rights of the Child adopted",
            "description": "Convention on the Rights of the Child adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1990",
            "title": "Americans with Disabilities Act signed",
            "description": "Americans with Disabilities Act signed placed rules for government, property, procedure or individual rights into formal law."
        },
        {
            "start": "1991",
            "title": "Strategic Arms Reduction Treaty signed",
            "description": "Strategic Arms Reduction Treaty signed set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1992",
            "title": "Rio Earth Summit",
            "description": "Rio Earth Summit defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1992",
            "title": "Maastricht Treaty signed",
            "description": "Maastricht Treaty signed set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "1993-11-01",
            "title": "European Union formally established",
            "description": "European Union formally established created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1994",
            "title": "End of apartheid and democratic election in South Africa",
            "description": "End of apartheid and democratic election in South Africa expanded or reorganized political representation and participation in public decisions."
        },
        {
            "start": "1995-01-01",
            "title": "World Trade Organization established",
            "description": "World Trade Organization established created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "1997",
            "title": "Kyoto Protocol adopted",
            "description": "Kyoto Protocol adopted defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "1998",
            "title": "Rome Statute of the International Criminal Court adopted",
            "description": "Rome Statute of the International Criminal Court adopted used a judicial ruling to reinterpret law and change the boundary of governmental or individual rights."
        },
        {
            "start": "2000",
            "title": "Millennium Development Goals adopted",
            "description": "Millennium Development Goals adopted set a shared international framework for poverty, health, education, environment and development."
        },
        {
            "start": "2002-07-01",
            "title": "International Criminal Court begins jurisdiction",
            "description": "International Criminal Court begins jurisdiction used a judicial ruling to reinterpret law and change the boundary of governmental or individual rights."
        },
        {
            "start": "2005",
            "title": "Responsibility to Protect endorsed at the UN World Summit",
            "description": "Responsibility to Protect endorsed at the UN World Summit created a cross-border institution for security, trade, justice or common policy."
        },
        {
            "start": "2006",
            "title": "Convention on the Rights of Persons with Disabilities adopted",
            "description": "Convention on the Rights of Persons with Disabilities adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "2007",
            "title": "United Nations Declaration on the Rights of Indigenous Peoples adopted",
            "description": "United Nations Declaration on the Rights of Indigenous Peoples adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "2015",
            "title": "Sustainable Development Goals adopted",
            "description": "Sustainable Development Goals adopted set a shared international framework for poverty, health, education, environment and development."
        },
        {
            "start": "2015-12-12",
            "title": "Paris Agreement adopted",
            "description": "Paris Agreement adopted defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "2016",
            "title": "Paris Agreement enters into force",
            "description": "Paris Agreement enters into force defined rules governing public authority, individual rights or relations between states."
        },
        {
            "start": "2018",
            "title": "Global Compact for Migration adopted",
            "description": "Global Compact for Migration adopted set written rules for state relations, borders, rights or shared obligations."
        },
        {
            "start": "2021",
            "title": "Treaty on the Prohibition of Nuclear Weapons enters into force",
            "description": "Treaty on the Prohibition of Nuclear Weapons enters into force set written rules for state relations, borders, rights or shared obligations."
        }
    ]
};

// Contemporary world
var tl_contemporary = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1945-08-06",
            "title": "Atomic bombing of Hiroshima",
            "description": "Atomic bombing of Hiroshima demonstrated the destructive power of nuclear weapons and placed deterrence and arms control at the center of world politics."
        },
        {
            "start": "1945-08-09",
            "title": "Atomic bombing of Nagasaki",
            "description": "Atomic bombing of Nagasaki demonstrated the destructive power of nuclear weapons and placed deterrence and arms control at the center of world politics."
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "Berlin Blockade and Airlift",
            "description": "Berlin Blockade and Airlift produced security and humanitarian consequences and forced regional and international actors to adjust policy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "Nakba and mass Palestinian displacement",
            "description": "Nakba and mass Palestinian displacement produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "1953",
            "title": "Death of Stalin and beginning of Soviet leadership transition",
            "description": "Death of Stalin and beginning of Soviet leadership transition ended a political era and triggered changes in leadership, institutions or public mood."
        },
        {
            "start": "1954",
            "title": "Brown v. Board of Education",
            "description": "Brown v. Board of Education changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1955",
            "title": "Montgomery bus boycott",
            "description": "Montgomery bus boycott turned social demands into mass public action and prompted legal or political responses."
        },
        {
            "start": "1956",
            "title": "Khrushchev’s Secret Speech and de-Stalinization",
            "description": "Khrushchev’s Secret Speech and de-Stalinization changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1957",
            "title": "Sputnik launches the space age",
            "description": "Sputnik launches the space age demonstrated new space capabilities and accelerated technological competition between states."
        },
        {
            "start": "1959",
            "title": "Dalai Lama flees Tibet",
            "description": "Dalai Lama flees Tibet changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "Berlin Wall",
            "description": "Berlin Wall changed the practical operation of contemporary politics, society or international relations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "Non-Aligned Movement founded",
            "description": "Non-Aligned Movement founded turned social demands into mass public action and prompted legal or political responses."
        },
        {
            "start": "1963-08-28",
            "title": "March on Washington",
            "description": "March on Washington turned social demands into mass public action and prompted legal or political responses."
        },
        {
            "start": "1963-11-22",
            "title": "Assassination of John F. Kennedy",
            "description": "Assassination of John F. Kennedy ended a political era and triggered changes in leadership, institutions or public mood."
        },
        {
            "start": "1964",
            "title": "China conducts its first nuclear test",
            "description": "China conducts its first nuclear test demonstrated the destructive power of nuclear weapons and placed deterrence and arms control at the center of world politics."
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "Cultural Revolution in China",
            "description": "Cultural Revolution in China changed the practical operation of contemporary politics, society or international relations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "First human Moon landing",
            "description": "First human Moon landing demonstrated new space capabilities and accelerated technological competition between states."
        },
        {
            "start": "1971",
            "title": "People’s Republic of China takes China’s UN seat",
            "description": "People’s Republic of China takes China’s UN seat changed the position and practical capacity of the relevant state or organization in the international system."
        },
        {
            "start": "1972",
            "title": "United States–China rapprochement",
            "description": "United States–China rapprochement reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "1973",
            "title": "Military coup in Chile",
            "description": "Military coup in Chile changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1974",
            "title": "Carnation Revolution in Portugal",
            "description": "Carnation Revolution in Portugal changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1975",
            "title": "Fall of Saigon",
            "description": "Fall of Saigon changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1976",
            "title": "Death of Mao Zedong and end of the Cultural Revolution era",
            "description": "Death of Mao Zedong and end of the Cultural Revolution era ended a political era and triggered changes in leadership, institutions or public mood."
        },
        {
            "start": "1978",
            "title": "Camp David Accords",
            "description": "Camp David Accords reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "1979",
            "title": "Egypt–Israel Peace Treaty",
            "description": "Egypt–Israel Peace Treaty changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1979",
            "title": "Soviet invasion of Afghanistan",
            "description": "Soviet invasion of Afghanistan produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "1980",
            "title": "Solidarity movement founded in Poland",
            "description": "Solidarity movement founded in Poland changed the position and practical capacity of the relevant state or organization in the international system."
        },
        {
            "start": "1985",
            "title": "Gorbachev begins perestroika and glasnost",
            "description": "Gorbachev begins perestroika and glasnost changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1986",
            "title": "People Power Revolution in the Philippines",
            "description": "People Power Revolution in the Philippines changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1987",
            "title": "First Intifada begins",
            "description": "First Intifada begins changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1988",
            "title": "Iran–Iraq ceasefire",
            "description": "Iran–Iraq ceasefire changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1989-11-09",
            "title": "Fall of the Berlin Wall",
            "description": "Fall of the Berlin Wall changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1990",
            "title": "Nelson Mandela released",
            "description": "Nelson Mandela released changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1991",
            "title": "Operation Desert Storm",
            "description": "Operation Desert Storm changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1991",
            "title": "Warsaw Pact dissolved",
            "description": "Warsaw Pact dissolved changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1993",
            "title": "Oslo Accords",
            "description": "Oslo Accords reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "1994",
            "title": "Rwandan genocide and international failure",
            "description": "Rwandan genocide and international failure changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "1995",
            "title": "Dayton Accords end the Bosnian War",
            "description": "Dayton Accords end the Bosnian War produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "1997",
            "title": "Asian financial crisis spreads",
            "description": "Asian financial crisis spreads produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "1998",
            "title": "Good Friday Agreement",
            "description": "Good Friday Agreement reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "1999",
            "title": "NATO intervention in Kosovo",
            "description": "NATO intervention in Kosovo changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2000",
            "title": "Second Intifada begins",
            "description": "Second Intifada begins changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2001",
            "title": "United States invokes NATO Article 5 after September 11",
            "description": "United States invokes NATO Article 5 after September 11 changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2003",
            "title": "Global protests against the Iraq War",
            "description": "Global protests against the Iraq War produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "2004",
            "title": "Indian Ocean tsunami prompts global humanitarian response",
            "description": "Indian Ocean tsunami prompts global humanitarian response changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2005",
            "title": "London bombings",
            "description": "London bombings changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2008",
            "title": "Barack Obama elected first African American US president",
            "description": "Barack Obama elected first African American US president changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2008",
            "title": "Global financial system enters severe crisis",
            "description": "Global financial system enters severe crisis produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "2010",
            "title": "Haiti earthquake triggers massive international relief effort",
            "description": "Haiti earthquake triggers massive international relief effort changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2011",
            "title": "Fukushima nuclear disaster reshapes energy policy debates",
            "description": "Fukushima nuclear disaster reshapes energy policy debates disrupted economies and societies across borders and prompted emergency or coordinated policy responses."
        },
        {
            "start": "2011",
            "title": "Killing of Osama bin Laden",
            "description": "Killing of Osama bin Laden changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2013",
            "title": "Edward Snowden disclosures",
            "description": "Edward Snowden disclosures changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2014",
            "title": "Ebola emergency in West Africa",
            "description": "Ebola emergency in West Africa changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2015",
            "title": "European refugee crisis peaks",
            "description": "European refugee crisis peaks produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "2015",
            "title": "Iran nuclear agreement",
            "description": "Iran nuclear agreement reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "2016",
            "title": "Brexit referendum",
            "description": "Brexit referendum changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2016",
            "title": "Attempted coup in Turkey",
            "description": "Attempted coup in Turkey changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2018",
            "title": "United States–China trade conflict intensifies",
            "description": "United States–China trade conflict intensifies changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2019",
            "title": "Hong Kong anti-extradition protests",
            "description": "Hong Kong anti-extradition protests turned social demands into mass public action and prompted legal or political responses."
        },
        {
            "start": "2020",
            "title": "WHO characterizes COVID-19 as a pandemic",
            "description": "WHO characterizes COVID-19 as a pandemic disrupted economies and societies across borders and prompted emergency or coordinated policy responses."
        },
        {
            "start": "2020",
            "title": "Global Black Lives Matter protests",
            "description": "Global Black Lives Matter protests turned social demands into mass public action and prompted legal or political responses."
        },
        {
            "start": "2020",
            "title": "Abraham Accords",
            "description": "Abraham Accords reduced part of an existing confrontation and opened new diplomatic or security channels."
        },
        {
            "start": "2021",
            "title": "January 6 attack on the US Capitol",
            "description": "January 6 attack on the US Capitol changed the practical operation of contemporary politics, society or international relations."
        },
        {
            "start": "2021",
            "title": "Taliban returns to power in Afghanistan",
            "description": "Taliban returns to power in Afghanistan changed the position and practical capacity of the relevant state or organization in the international system."
        },
        {
            "start": "2021",
            "title": "AUKUS security partnership announced",
            "description": "AUKUS security partnership announced widened military cooperation and changed the regional security arrangement."
        },
        {
            "start": "2022",
            "title": "Global displacement and food-energy shocks after Russia’s invasion",
            "description": "Global displacement and food-energy shocks after Russia’s invasion produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "2022",
            "title": "Death of Queen Elizabeth II",
            "description": "Death of Queen Elizabeth II ended a political era and triggered changes in leadership, institutions or public mood."
        },
        {
            "start": "2023",
            "title": "Finland joins NATO",
            "description": "Finland joins NATO widened military cooperation and changed the regional security arrangement."
        },
        {
            "start": "2023",
            "title": "Israel–Hamas war and regional humanitarian crisis",
            "description": "Israel–Hamas war and regional humanitarian crisis produced security and humanitarian consequences and forced regional and international actors to adjust policy."
        },
        {
            "start": "2024",
            "title": "Sweden joins NATO",
            "description": "Sweden joins NATO widened military cooperation and changed the regional security arrangement."
        }
    ]
};

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
