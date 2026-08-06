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
            "title": "Human Deep History before 10,000 BCE (Compressed Marker)",
            "description": "This marker combines the emergence of Homo sapiens, migration out of Africa, worldwide dispersal, and Paleolithic hunter-gatherer and symbolic cultures."
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "Neolithic Transition",
            "description": "Communities in several regions gradually domesticated plants and animals and shifted from mobile foraging to farming, herding, and permanent villages.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "Bronze Age",
            "description": "Copper-tin bronze came into wide use for weapons, tools, and ritual objects alongside palace centers, specialist crafts, and long-distance trade.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "Earliest Cities and Territorial States",
            "description": "Large cities, written administration, taxation, and rule extending beyond individual city-states emerged in Mesopotamia, Egypt, the Indus region, and elsewhere.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "Classical Civilizations and the Axial Age",
            "description": "Across the Mediterranean, South Asia, and East Asia, empires and city-states expanded while traditions such as Confucianism, Buddhism, and Greek philosophy took shape.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "Post-Classical Regional Orders",
            "description": "After the fall of the Western Roman Empire, Byzantium, Islamic empires, the Tang dynasty, and South Asian kingdoms formed new political and religious centers.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "An Interconnected Medieval World",
            "description": "The Silk Roads, Indian Ocean routes, and trans-Saharan trade linked Eurasia and Africa, carrying religions, goods, technologies, and diseases.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "Early Modern Global Expansion",
            "description": "European maritime empires entered the Americas, Africa, and Asia, setting in motion the Columbian Exchange, Atlantic slavery, and a global silver trade.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "Age of Revolutions and Industrialization",
            "description": "Atlantic revolutions overturned old regimes, while steam power and factory production transformed labor, transport, cities, and social classes.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "Age of Imperialism and Global Migration",
            "description": "Industrial powers divided much of the world into colonies and built global transport networks as tens of millions of migrants and indentured laborers moved across continents.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "World Wars and Mass Politics",
            "description": "Two world wars mobilized entire societies and caused unprecedented destruction as revolutionary, fascist, communist, and nationalist regimes rose.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "Cold War, Decolonization, and Development",
            "description": "The United States and Soviet Union competed through nuclear arms and global alliances while colonies across Asia, Africa, and the Caribbean gained independence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Post-Cold War Transition",
            "description": "After the Soviet Union dissolved, Eastern Europe and former Soviet republics rebuilt states and market systems as globalization accelerated amid persistent regional wars.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "Globalization, Terrorism, and the Digital Society",
            "description": "The internet, smartphones, and global supply chains became embedded in daily life, while the September 11 attacks and ensuing wars on terror reshaped international security.",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "Pandemic, Geopolitical Fragmentation, and Accelerating AI",
            "description": "The COVID-19 pandemic produced a worldwide public-health emergency, followed by wars, supply-chain reorganization, and the rapid spread of generative artificial intelligence.",
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
            "title": "Origins of Agriculture in Southwest Asia",
            "description": "Communities in the Fertile Crescent began cultivating wheat, barley, and legumes, gradually turning the gathering of wild cereals into regular farming."
        },
        {
            "start": "-9599",
            "title": "Permanent Settlement at Jericho",
            "description": "Jericho in the Jordan Valley developed into a long-lived settlement with stone houses, defensive walls, and a large tower."
        },
        {
            "start": "-8999",
            "title": "Domestication of Sheep and Goats",
            "description": "Herders in Southwest Asia selectively bred wild sheep and goats into managed domestic herds."
        },
        {
            "start": "-8499",
            "title": "Çayönü and Early Farming in the Fertile Crescent",
            "description": "Settlements such as Çayönü combined cereal cultivation, animal husbandry, and permanent houses, illustrating the formation of early farming communities."
        },
        {
            "start": "-7499",
            "title": "The Large Settlement of Çatalhöyük",
            "description": "Çatalhöyük in Anatolia consisted of densely packed mud-brick houses entered from the roofs, whose residents farmed, hunted, and practiced specialized crafts."
        },
        {
            "start": "-6999",
            "title": "Expansion of Rice Farming in the Yangtze Basin",
            "description": "Communities along the middle and lower Yangtze increasingly cultivated and domesticated rice, spreading rice-farming villages through wetlands and river valleys."
        },
        {
            "start": "-6999",
            "title": "The Farming Settlement of Mehrgarh",
            "description": "At Mehrgarh in Baluchistan, inhabitants grew wheat and barley, herded cattle and sheep, and built mud-brick houses and storage facilities."
        },
        {
            "start": "-6499",
            "title": "Expansion of Pottery and Village Networks",
            "description": "Fired pottery spread through many farming regions for cooking and storage, while neighboring villages exchanged vessels and raw materials."
        },
        {
            "start": "-5999",
            "title": "Irrigation Settlements in Mesopotamia",
            "description": "People in southern Mesopotamia dug canals to irrigate the arid plain, creating dense settlements and cereal farming along the waterways."
        },
        {
            "start": "-5499",
            "title": "Expansion of Farming into Europe",
            "description": "Farmers and farming practices from Anatolia and the Aegean moved into Europe along Balkan and Mediterranean routes."
        },
        {
            "start": "-4999",
            "title": "Early Metallurgy in Eurasia",
            "description": "Craftworkers in the Balkans, Southwest Asia, the Caucasus, and other regions began smelting copper into ornaments, tools, and weapons."
        },
        {
            "start": "-4499",
            "title": "Expansion of Steppe Pastoralism",
            "description": "Communities across the Eurasian steppe relied on cattle, sheep, and horses as mobile pastoral lifeways spread over wider areas."
        },
        {
            "start": "-3999",
            "title": "Plow Agriculture and Large Villages",
            "description": "Animal-drawn plows made heavier soils easier to cultivate, allowing some farming settlements to grow into large villages."
        },
        {
            "start": "-3799",
            "title": "Urbanization at Uruk",
            "description": "Uruk grew into an early urban center with temple precincts, specialist craftspeople, administrative storehouses, and a large population."
        },
        {
            "start": "-3499",
            "title": "The Wheel and Wheeled Transport",
            "description": "Solid-wheeled vehicles appeared in Mesopotamia and other parts of Eurasia, with ox-drawn carts carrying goods and people."
        },
        {
            "start": "-3399",
            "title": "Proto-Cuneiform Accounting",
            "description": "Administrators at Uruk recorded grain, livestock, labor, and rations on clay tablets with pictorial signs, creating one of the earliest writing systems."
        },
        {
            "start": "-3299",
            "title": "Rise of the Indus Urban Tradition",
            "description": "Settlements in the Indus basin expanded and adopted standardized pottery, measures, and planning practices that preceded the Harappan cities."
        },
        {
            "start": "-3199",
            "title": "Egyptian Hieroglyphic Writing",
            "description": "Egyptians used pictorial signs on monuments, labels, and administrative records, establishing a hieroglyphic tradition that lasted for millennia."
        },
        {
            "start": "-3099",
            "title": "Political Unification of Ancient Egypt",
            "description": "Rulers from Upper Egypt conquered or incorporated the Nile Delta, creating a unified kingdom under a single pharaoh."
        },
        {
            "start": "-2999",
            "title": "Long-Distance Trade between Mesopotamia and the Indus",
            "description": "Gulf routes connected Mesopotamia with the Indus civilization, carrying timber, metals, gemstones, textiles, and agricultural goods."
        },
        {
            "start": "-2899",
            "title": "Sumerian Early Dynastic City-States",
            "description": "City-states such as Ur, Uruk, and Lagash were ruled by kings and temple institutions and fought over land, water, and trade routes."
        },
        {
            "start": "-2699",
            "title": "Egypt's Old Kingdom and the Pyramid State",
            "description": "Old Kingdom pharaohs used a centralized administration to collect food and labor for vast royal pyramid complexes, including those at Giza."
        },
        {
            "start": "-2599",
            "title": "Mature Harappan Cities",
            "description": "Cities such as Harappa and Mohenjo-daro used grid-planned streets, drainage systems, standardized bricks, and common weights and measures."
        },
        {
            "start": "-2499",
            "title": "Beginning of the Austronesian Expansion",
            "description": "Seafaring communities from Taiwan and nearby areas moved toward the Philippines and Island Southeast Asia, carrying farming, canoe technology, and Austronesian languages."
        },
        {
            "start": "-2399",
            "title": "Expansion of the Akkadian Empire",
            "description": "Sargon and his successors conquered the Sumerian city-states and neighboring regions, creating a wide territorial empire ruled from Akkad."
        },
        {
            "start": "-2199",
            "title": "The 4.2-Kiloyear Climate Event and State Crises",
            "description": "A prolonged arid episode around 2200 BCE affected Southwest Asia, Egypt, and South Asia, contributing to crop failures, migration, and political breakdown."
        },
        {
            "start": "-2099",
            "title": "Third Dynasty of Ur",
            "description": "The kings of Ur reunified southern Mesopotamia and governed through provincial officials, taxation, and extensive cuneiform records."
        },
        {
            "start": "-1999",
            "title": "Minoan Palace Civilization",
            "description": "Palace centers such as Knossos on Crete organized storage, craft production, ritual activity, and Aegean trade."
        },
        {
            "start": "-1899",
            "title": "Old Babylonian Urban Order",
            "description": "Cities such as Babylon, Larsa, and Mari organized landholding, debt, and trade through palaces, temples, merchants, and written contracts."
        },
        {
            "start": "-1799",
            "title": "Erlitou Culture and the Early Bronze State in China",
            "description": "The Erlitou site contained palatial compounds, roads, bronze workshops, and ranked burials, indicating the formation of an early state in the Central Plains."
        },
        {
            "start": "-1749",
            "title": "Hammurabi's Rule of Babylon",
            "description": "Hammurabi conquered much of Mesopotamia and governed the Babylonian kingdom through royal administration and the law collection bearing his name."
        },
        {
            "start": "-1599",
            "title": "Rise of the Shang Dynasty",
            "description": "The Shang dynasty established a state in the Yellow River region centered on royal capitals, lineage ritual, bronze casting, and military campaigns."
        },
        {
            "start": "-1599",
            "title": "Mycenaean Palace Society",
            "description": "Palaces at Mycenae, Pylos, and elsewhere in Greece used rulers and scribes to manage agricultural tribute, craftspeople, armies, and regional trade."
        },
        {
            "start": "-1549",
            "title": "New Kingdom of Egypt",
            "description": "After expelling the Hyksos, Egypt formed the powerful New Kingdom, whose pharaohs expanded into Nubia and the Levant and built monumental temples."
        },
        {
            "start": "-1499",
            "title": "Development of Vedic Culture in South Asia",
            "description": "Indo-Aryan-speaking communities in northwestern India and the Ganges region developed societies centered on Vedic hymns, sacrifice, and tribal kingship."
        },
        {
            "start": "-1399",
            "title": "Rise of the Hittite Empire",
            "description": "Hittite rulers based in central Anatolia conquered northern Syria and competed with Egypt and Mesopotamian powers."
        },
        {
            "start": "-1299",
            "title": "Rise of the Olmec Civilization",
            "description": "The Olmec of Mexico's Gulf Coast built ceremonial centers such as San Lorenzo and produced colossal stone heads and finely worked jade."
        },
        {
            "start": "-1249",
            "title": "Lapita Expansion into the Pacific",
            "description": "Seafaring communities associated with dentate-stamped Lapita pottery moved from Island Melanesia into Fiji, Tonga, and Samoa."
        },
        {
            "start": "-1199",
            "title": "Late Bronze Age Collapse",
            "description": "Palatial states across the eastern Mediterranean collapsed or declined amid warfare, migration, internal unrest, and the breakdown of trade."
        },
        {
            "start": "-1099",
            "title": "Phoenician Maritime Networks",
            "description": "Phoenician cities such as Tyre and Sidon built Mediterranean shipping routes and colonies trading timber, metals, dyes, and luxury goods."
        },
        {
            "start": "-1045",
            "title": "Zhou Conquest of Shang",
            "description": "King Wu of Zhou defeated the Shang at the Battle of Muye, founding a Zhou order based on enfeoffment and lineage ties."
        },
        {
            "start": "-0999",
            "title": "Acceleration of the Bantu Expansion",
            "description": "Bantu-speaking farming and ironworking communities moved from west-central Africa into eastern and southern Africa and founded new settlements."
        },
        {
            "start": "-0899",
            "title": "Nok Culture of West Africa",
            "description": "Nok communities in present-day central Nigeria were characterized by large terracotta figures, farming villages, and early iron production."
        },
        {
            "start": "-0799",
            "title": "Formation of the Greek City-States",
            "description": "Independent poleis such as Athens, Sparta, and Corinth developed around an urban center, surrounding territory, a citizen body, and distinct political institutions."
        },
        {
            "start": "-0799",
            "title": "The Chavín Cultural Horizon in the Andes",
            "description": "Chavín de Huántar in the Peruvian highlands became a religious center whose imagery, stonework, and ritual style spread across the Andes."
        },
        {
            "start": "-0769",
            "title": "Beginning of the Eastern Zhou",
            "description": "After Haojing was sacked, the Zhou court moved east to Luoyi, beginning an era in which weakened kings presided over competing regional states."
        },
        {
            "start": "-0752",
            "title": "Traditional Founding Date of Rome",
            "description": "Roman tradition dated the city's founding by Romulus to 753 BCE, a legend that became central to Roman identity."
        },
        {
            "start": "-0699",
            "title": "Widespread Diffusion of Iron Technology",
            "description": "Iron smelting and forging spread through Southwest Asia, the Mediterranean, South Asia, and East Asia, making iron tools and weapons increasingly common."
        },
        {
            "start": "-0699",
            "title": "Scythian Steppe Networks",
            "description": "Mounted pastoral groups such as the Scythians controlled routes across the northern Black Sea and Eurasian steppe, trading horses, metals, and luxury goods between settled empires."
        },
        {
            "start": "-0599",
            "title": "Urbanization in the Middle Ganges Valley",
            "description": "Iron tools, rice cultivation, and trade supported walled cities, markets, coinage, and large states in the middle Ganges valley."
        },
        {
            "start": "-0549",
            "title": "Rise of the Achaemenid Persian Empire",
            "description": "Cyrus II conquered Media, Lydia, and the Neo-Babylonian kingdom, creating an empire spanning much of Southwest Asia."
        },
        {
            "start": "-0508",
            "title": "Beginning of the Roman Republic",
            "description": "According to Roman tradition, the last king was expelled and a republic governed by annually elected consuls, the Senate, and citizen assemblies was established."
        },
        {
            "start": "-0499",
            "title": "Development of Zapotec Monte Albán",
            "description": "The Zapotec built Monte Albán on a hilltop above the Oaxaca Valley, with plazas, temples, tombs, and inscribed stone monuments."
        },
        {
            "start": "-0499",
            "title": "Expansion of Trans-Saharan Exchange",
            "description": "Merchants between North Africa and the Sahel used oasis routes to exchange salt, gold, livestock, and manufactured goods, with camel transport later increasing the scale."
        },
        {
            "start": "-0402",
            "title": "Beginning of China's Warring States Period",
            "description": "With Zhou authority largely nominal, major states including Qin, Chu, Qi, Yan, Han, Zhao, and Wei fought prolonged wars using mass armies and administrative reforms."
        },
        {
            "start": "-0321",
            "title": "Founding of the Maurya Empire",
            "description": "Chandragupta overthrew the Nanda dynasty and took control of the Ganges plain, founding one of South Asia's first large territorial empires."
        },
        {
            "start": "-0220",
            "title": "Qin Unification of China",
            "description": "The Qin king Ying Zheng conquered the six rival states, proclaimed himself emperor, and incorporated them into a centralized commandery-county empire."
        },
        {
            "start": "-0205",
            "title": "Founding of the Han Dynasty",
            "description": "Liu Bang defeated Xiang Yu in the Chu-Han struggle, founded the Han dynasty, and restored a unified imperial government."
        },
        {
            "start": "-0199",
            "title": "Teotihuacan Grows into a Great City",
            "description": "Teotihuacan in the Mexican highlands developed monumental avenues, pyramids, apartment compounds, and craft districts, becoming one of the largest cities in the ancient Americas."
        },
        {
            "start": "-0099",
            "title": "Development of the Moche Culture in the Andes",
            "description": "Moche societies on Peru's north coast built large adobe temples and irrigation works and produced highly realistic ceramics and sophisticated metalwork."
        },
        {
            "start": "0100",
            "title": "Rise of the Kingdom of Aksum",
            "description": "Centered in the highlands of present-day Ethiopia and Eritrea, Aksum controlled Red Sea trade and minted its own coinage."
        },
        {
            "start": "0200",
            "title": "Flourishing of Classic Maya Urban Civilization",
            "description": "Maya city-states such as Tikal, Calakmul, and Palenque built pyramids and palaces and used writing to record dynasties, wars, and calendrical events."
        },
        {
            "start": "0220",
            "title": "End of the Han Dynasty and an Age of Division",
            "description": "After the last Eastern Han emperor abdicated, China entered the Three Kingdoms and a prolonged age of division among competing dynasties and states."
        },
        {
            "start": "0320",
            "title": "Rise of the Gupta Empire",
            "description": "Chandragupta I and his successors expanded from the Ganges basin to rule much of northern India."
        },
        {
            "start": "0400",
            "title": "Polynesian Settlement across the Pacific",
            "description": "Polynesian navigators used double-hulled canoes, stars, and ocean knowledge to settle increasingly distant islands across the Pacific."
        },
        {
            "start": "0500",
            "title": "Rise of the Ghana Empire in West Africa",
            "description": "The rulers of Wagadu controlled gold-producing regions and trans-Saharan routes in the Sahel, forming the state later known as the Ghana Empire."
        },
        {
            "start": "0600",
            "title": "Development of Mississippian Mound Societies",
            "description": "Farming communities in southeastern North America organized settlements around platform mounds, plazas, and chiefly centers, with maize as a staple crop."
        },
        {
            "start": "0700",
            "title": "Expansion of Swahili Coast Trading Cities",
            "description": "East African coastal towns such as Kilwa and Mombasa developed a Swahili culture and traded gold, ivory, ceramics, and textiles across the Indian Ocean."
        },
        {
            "start": "0800",
            "title": "Viking Settlement and North Atlantic Expansion",
            "description": "Scandinavian seafarers founded settlements in Britain, Ireland, Iceland, and Greenland and extended trading and raiding networks across the North Atlantic."
        },
        {
            "start": "0900",
            "title": "Development of Great Zimbabwe as a Regional Center",
            "description": "Great Zimbabwe, centered on massive dry-stone enclosures, became a political center linking inland cattle and gold production to Indian Ocean trade."
        },
        {
            "start": "1000",
            "title": "Norse Settlement in North America",
            "description": "Norse voyagers from Greenland established a short-lived settlement at L'Anse aux Meadows in Newfoundland, the earliest known European site in the Americas."
        },
        {
            "start": "1050",
            "title": "Cahokia Becomes a Major Urban Center",
            "description": "Cahokia near the Mississippi River gathered tens of thousands of residents around Monks Mound, plazas, and palisades, becoming the largest pre-Columbian city north of Mexico."
        },
        {
            "start": "1200",
            "title": "Acceleration of Māori Settlement in New Zealand",
            "description": "Voyagers from East Polynesia founded settlements throughout New Zealand and developed Māori societies adapted to its climate, resources, and landscapes."
        },
        {
            "start": "1325",
            "title": "Founding of Tenochtitlan",
            "description": "The Mexica founded Tenochtitlan on an island in Lake Texcoco and developed it with causeways, aqueducts, and chinampa fields."
        },
        {
            "start": "1438",
            "title": "Beginning of Inca Imperial Expansion",
            "description": "Pachacuti secured the Cusco region and reorganized the state, after which Inca armies and road networks expanded across much of the Andes."
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
            "description": "Sargon and his successors ruled from Akkad after conquering Sumer and northern Mesopotamia, creating one of the region's earliest territorial empires.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "Old Kingdom of Egypt",
            "description": "The Old Kingdom was governed from Memphis, where pharaohs used a central administration to rule the Nile Valley and organize projects such as the Giza pyramids.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "Middle Kingdom of Egypt",
            "description": "Rulers from Thebes reunified Egypt, restored centralized administration, and extended trade and military control into Nubia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "New Kingdom of Egypt",
            "description": "After expelling the Hyksos, Egypt formed the New Kingdom, whose pharaohs ruled Nubia and maintained imperial power in the Levant.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "Shang Dynasty",
            "description": "The Shang dynasty ruled from a succession of capitals in the Yellow River region and was characterized by royal lineages, oracle-bone divination, bronze ritual vessels, and warfare.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "Zhou Dynasty",
            "description": "The Zhou replaced the Shang and bound regional lords through enfeoffment, kinship, and ritual before the eastern court presided over the rival states of the Spring and Autumn and Warring States periods.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "Neo-Assyrian Empire",
            "description": "The Neo-Assyrian Empire used standing armies, siege warfare, and provincial government to conquer Mesopotamia, the Levant, and parts of Egypt, ruling from capitals including Nimrud and Nineveh.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "Neo-Babylonian Empire",
            "description": "The Chaldean dynasty ruled from Babylon after defeating the Assyrian remnants and controlled Mesopotamia and the Levant until the Persian conquest.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "Achaemenid Persian Empire",
            "description": "The Achaemenids ruled a vast empire from the Iranian plateau across Egypt, Southwest and Central Asia, and parts of the Indus region through satrapies, royal roads, and multilingual administration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "Roman Republic",
            "description": "Rome was governed through consuls, the Senate, and citizen assemblies and expanded through continuous warfare from Italy across the Mediterranean.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "Empire of Alexander the Great",
            "description": "Alexander of Macedon conquered the Achaemenid Empire and campaigned from Egypt to the Indus before his realm fragmented among his successors after his death.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "Ptolemaic Egypt",
            "description": "Ptolemy, one of Alexander's generals, and his descendants ruled Egypt from Alexandria, combining Macedonian monarchy with Egyptian pharaonic traditions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "Seleucid Empire",
            "description": "Seleucus and his descendants ruled territories stretching from Syria and Mesopotamia into Iran and Central Asia and founded a network of Hellenistic cities.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "Maurya Empire",
            "description": "The Maurya Empire ruled most of South Asia from Pataliputra, and under Ashoka it was administered through provinces, roads, and inscribed edicts.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "Qin Dynasty",
            "description": "After conquering the rival states, Qin created China's first unified imperial state, using commanderies and counties and standardizing script, measures, and roads.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "Han Dynasty",
            "description": "The Han retained and modified Qin institutions, ruled most of China for centuries, expanded toward Central Asia and Korea, and developed a mature Confucian bureaucratic empire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "Parthian Empire",
            "description": "The Arsacid dynasty ruled Iran and Mesopotamia through a partnership of kings and powerful nobles and remained a major rival of Rome.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "Unified Roman Empire",
            "description": "After Augustus established the principate, Roman emperors ruled the Mediterranean, western Europe, and parts of Southwest Asia until the empire was permanently divided east and west.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "Sasanian Empire",
            "description": "The Sasanians overthrew the Parthians and built a more centralized Iranian empire marked by Zoroastrian kingship and repeated wars with Rome and Byzantium.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "Kingdom of Aksum at Its Height",
            "description": "At its height, Aksum controlled the Ethiopian and Eritrean highlands and Red Sea ports, minted coins, and adopted Christianity in the fourth century.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "Gupta Empire",
            "description": "The Gupta dynasty ruled much of northern India through alliances with regional rulers, while its courts supported Sanskrit literature, religion, and scholarship.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "Eastern Roman / Byzantine Empire",
            "description": "The Eastern Roman Empire ruled from Constantinople, preserved Roman law and imperial institutions, and endured for more than a millennium in a Greek-speaking Orthodox Christian culture.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "Frankish Kingdoms and the Carolingian Empire",
            "description": "Frankish dynasties ruled Gaul and western Germania, and under Charlemagne expanded across much of western Europe before his imperial coronation in 800.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "Sui Reunification of China",
            "description": "Emperor Wen of Sui ended the Northern and Southern Dynasties division and restored a unified empire, later associated with the Grand Canal and costly wars against Goguryeo.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "Tang Dynasty",
            "description": "The Tang ruled a vast multiethnic empire from Chang'an and Luoyang, linking China and Inner Asia through examinations, prefectural administration, and military protectorates.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Rashidun and Umayyad Caliphates",
            "description": "After Muhammad's death, caliphal armies conquered large Byzantine and Sasanian territories, and the Umayyads ruled the expanding empire from Damascus.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "Abbasid Caliphate in Baghdad",
            "description": "The Abbasids overthrew the Umayyads and ruled from Baghdad; regional dynasties later gained autonomy, but the caliphate survived there until the Mongol sack of 1258.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "Heian Period in Japan",
            "description": "After the court moved to Heian-kyō, emperors and Fujiwara aristocrats dominated politics, followed by cloistered rule and the growing power of warrior families.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "Holy Roman Imperial Tradition",
            "description": "The western imperial title passed from Charlemagne to German kings, whose realm comprised the emperor, territorial princes, ecclesiastical lands, and free cities.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "Kievan Rus'",
            "description": "East Slavic communities and a Norse-derived ruling elite governed from Kyiv along the Dnieper trade route and adopted Orthodox Christianity under Vladimir.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Five Dynasties and Ten Kingdoms Period",
            "description": "After the Tang collapsed, five short-lived northern dynasties and several southern kingdoms coexisted until the Song gradually reunified much of China.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "Song Dynasty",
            "description": "The Song governed much of China through a civil bureaucracy, examinations, and commercial taxation; after the Northern Song fell, the Southern Song ruled from Lin'an.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "Fatimid Caliphate",
            "description": "The Isma'ili Shi'a Fatimids expanded from North Africa into Egypt, founded Cairo, and challenged Abbasid religious and political authority.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "Ghana Empire at Its Height",
            "description": "The rulers of the Ghana Empire controlled Sahelian gold regions and Saharan salt routes and taxed caravans at centers such as Koumbi Saleh.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "Seljuk Imperial Order",
            "description": "Turkic Seljuk rulers conquered Iran, Iraq, and parts of Anatolia, ruling as sultans who protected the Abbasid caliph and distributed military fiefs.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "Establishment of Norman Rule in England",
            "description": "William, duke of Normandy, won at Hastings and became king, then reorganized England through castles, vassalage, and a comprehensive land survey."
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "Kamakura Shogunate",
            "description": "Minamoto no Yoritomo established a warrior government at Kamakura based on the shogun and his vassals, while the imperial court remained in Kyoto.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "Mongol Empire and Successor Khanates",
            "description": "Chinggis Khan and his descendants conquered vast parts of Eurasia before the empire divided into successor states including the Yuan, Golden Horde, Ilkhanate, and Chagatai Khanate.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "Mali Empire",
            "description": "The Mali Empire controlled the upper Niger, goldfields, and trans-Saharan routes, and cities such as Timbuktu flourished under Mansa Musa.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "Yuan Dynasty",
            "description": "Khubilai founded the Yuan, conquered the Southern Song, and ruled China from Dadu while remaining connected to the wider Mongol imperial network.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "Ottoman State and Empire",
            "description": "The Ottoman dynasty grew from an Anatolian frontier principality into an empire across southeastern Europe, Southwest Asia, and North Africa, governed by sultans, officials, and provinces.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "Vijayanagara Empire",
            "description": "The Vijayanagara rulers governed southern India from the Deccan, using their monumental capital to organize temples, commerce, and a military aristocracy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "The Hundred Years' War Era in Western Europe",
            "description": "The English and French crowns fought intermittently over the French throne and territories amid truces, civil conflict, plague, and the consolidation of royal power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "Ming Dynasty",
            "description": "Zhu Yuanzhang overthrew the Yuan and founded the Ming, ruling China first from Nanjing and later Beijing through imperial ministries, military garrisons, and local administration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "Joseon Dynasty",
            "description": "Yi Seong-gye founded Joseon and established its capital at Hanseong, governing Korea through a centralized Confucian bureaucracy and examinations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "Songhai Empire",
            "description": "Centered at Gao on the middle Niger, Songhai rose to control Timbuktu, Djenné, and the trans-Saharan gold and salt trade.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "Ottoman Conquest of Constantinople",
            "description": "Mehmed II besieged and captured Constantinople, ending the Byzantine Empire and making the city an Ottoman capital."
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "Expansion of the Songhai Empire",
            "description": "Sunni Ali and Askia Muhammad conquered former Malian territories and Niger River cities, making Songhai one of West Africa's largest empires.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "Tudor England",
            "description": "The Tudor dynasty consolidated the English monarchy after the Wars of the Roses and oversaw the Reformation, dissolution of the monasteries, and maritime expansion.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "Consolidation of the Union of Castile and Aragon",
            "description": "The dynastic union of Isabella and Ferdinand joined the crowns of Castile and Aragon, and the conquest of Granada strengthened the Spanish monarchy."
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "Safavid Iran",
            "description": "The Safavids unified Iran and established Twelver Shi'ism as the state religion, ruling through the shah, tribal forces, and a Persian bureaucracy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "Mughal Empire",
            "description": "Babur and his descendants established the Mughal Empire in India, and under Akbar it governed much of South Asia through provinces, land revenue, and a ranked nobility.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "Tsardom of Russia",
            "description": "After Ivan IV took the title of tsar, Russia expanded along the Volga, across the Urals, and into Siberia while developing a centralized monarchy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "Tokugawa Shogunate",
            "description": "Tokugawa Ieyasu established the Edo shogunate after Sekigahara, governing Japan through the bakuhan system and regulating daimyo, foreign relations, and social status.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "The Stuart Era and Britain's Constitutional Monarchy",
            "description": "Under the Stuarts, conflict between crown and Parliament produced civil war, a republic, and the Glorious Revolution, culminating in a monarchy constrained by Parliament.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "Qing Dynasty",
            "description": "The Manchu-founded Qing replaced the Ming and ruled China while incorporating Mongolia, Xinjiang, Tibet, and other regions into a multiethnic empire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "Russia under Peter the Great",
            "description": "Peter I reformed the army, administration, and taxation, built Saint Petersburg, and secured access to the Baltic after the Great Northern War.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "Formation of the Kingdom of Great Britain",
            "description": "The English and Scottish parliaments enacted the Acts of Union, creating the Kingdom of Great Britain with one Parliament and monarch."
        },
        {
            "start": "1776",
            "title": "United States Declares Independence",
            "description": "The thirteen British colonies in North America adopted the Declaration of Independence and fought to establish a new republic separate from Britain."
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "Revolutionary Governments in France",
            "description": "The French Revolution dismantled the old regime and monarchy and successively produced a constitutional monarchy, republic, Terror, and Directory.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "Napoleonic Empire",
            "description": "After crowning himself emperor, Napoleon controlled much of continental Europe through war and reorganized conquered lands with legal codes, administration, and client states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "Haitian Independence",
            "description": "Enslaved people revolted and defeated French forces, transforming Saint-Domingue into independent Haiti, the first state created by a successful slave revolution."
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "Age of Latin American Independence",
            "description": "Independence movements across Spanish America and Portuguese Brazil defeated or broke from Iberian rule and created a series of new states.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "Congress of Vienna System",
            "description": "After Napoleon's defeat, the European powers redrew borders, restored dynasties, and created a balance-of-power system based on recurring great-power consultation."
        },
        {
            "start": "1822",
            "title": "Brazilian Independence",
            "description": "Portuguese prince Pedro declared Brazil independent and became its emperor, turning the colony into an independent monarchy."
        },
        {
            "start": "1861",
            "title": "Formation of the Kingdom of Italy",
            "description": "The Kingdom of Sardinia annexed most Italian states through war and plebiscites, and Victor Emmanuel II became king of a united Italy."
        },
        {
            "start": "1867",
            "title": "Canadian Confederation",
            "description": "The Province of Canada, Nova Scotia, and New Brunswick formed a self-governing federation within the British Empire, later joined by additional provinces and territories."
        },
        {
            "start": "1868",
            "title": "Meiji Restoration",
            "description": "Forces opposing the shogunate restored imperial rule and dismantled the domains, after which Japan pursued centralized government, conscription, education, and industrial reform."
        },
        {
            "start": "1871",
            "title": "Formation of the German Empire",
            "description": "Prussia united the German states after wars with Denmark, Austria, and France, and Wilhelm I was proclaimed German emperor at Versailles."
        },
        {
            "start": "1885",
            "title": "Establishment of the Congo Free State",
            "description": "The Berlin Conference recognized King Leopold II's personal control of the Congo basin, where the colonial regime used forced labor to extract rubber and ivory."
        },
        {
            "start": "1901",
            "title": "Federation of Australia",
            "description": "Six British colonies in Australia federated under a national Parliament and self-governing Commonwealth while retaining the British monarch as sovereign."
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Xinhai Revolution Ends Imperial Rule",
            "description": "The Wuchang Uprising triggered provincial secessions, the Republic of China was founded, and the Qing emperor abdicated, ending more than two millennia of imperial rule.",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "Russian Provisional Government and Bolshevik Seizure of Power",
            "description": "The February Revolution forced the tsar to abdicate and created a provisional government, which the Bolsheviks overthrew in Petrograd during the October Revolution."
        },
        {
            "start": "1918",
            "title": "Collapse of the German, Austro-Hungarian, Ottoman, and Russian Empires",
            "description": "World War I and revolution brought down four empires, whose territories were reorganized into republics, nation-states, and mandated territories."
        },
        {
            "start": "1922",
            "title": "Formation of the Soviet Union",
            "description": "The Russian, Ukrainian, Belarusian, and Transcaucasian Soviet republics signed a union treaty creating a federal state led by the Communist Party."
        },
        {
            "start": "1923",
            "title": "Formation of the Republic of Turkey",
            "description": "Mustafa Kemal's nationalist movement won the Turkish War of Independence, abolished the sultanate, and founded a republic with its capital at Ankara."
        },
        {
            "start": "1932",
            "title": "Formation of the Kingdom of Saudi Arabia",
            "description": "Abdulaziz Ibn Saud united Najd, the Hejaz, and other territories and proclaimed the Kingdom of Saudi Arabia."
        },
        {
            "start": "1947",
            "title": "Independence of India and Pakistan",
            "description": "British India was partitioned into the dominions of India and Pakistan, ending colonial rule amid mass migration and communal violence."
        },
        {
            "start": "1948",
            "title": "Establishment of the State of Israel",
            "description": "As the British Mandate for Palestine ended, Jewish leaders declared the State of Israel, followed immediately by war with neighboring Arab states."
        },
        {
            "start": "1949",
            "title": "Founding of the People's Republic of China",
            "description": "After the Chinese Communist Party gained control of mainland China in the civil war, Mao Zedong proclaimed the People's Republic in Beijing while the Nationalist government retreated to Taiwan."
        },
        {
            "start": "1957",
            "title": "Independence of Ghana",
            "description": "The Gold Coast became independent Ghana under Kwame Nkrumah, one of the first sub-Saharan African colonies to gain independence."
        },
        {
            "start": "1960",
            "title": "Year of Africa",
            "description": "Seventeen African colonies became independent in 1960, most from French rule, rapidly increasing the number of sovereign states on the continent."
        },
        {
            "start": "1962",
            "title": "Algerian Independence",
            "description": "After an eight-year war, Algeria's National Liberation Front reached the Évian Accords with France and established an independent state following a referendum."
        },
        {
            "start": "1963",
            "title": "Formation of the Organization of African Unity",
            "description": "Thirty-two independent African states founded the Organization of African Unity in Addis Ababa to defend sovereignty and coordinate anti-colonial cooperation."
        },
        {
            "start": "1971",
            "title": "Independence of Bangladesh",
            "description": "The independence war in East Pakistan and Indian intervention defeated Pakistani forces, leading to a sovereign Bangladesh based in Dhaka."
        },
        {
            "start": "1990",
            "title": "German Reunification",
            "description": "East Germany acceded to the Federal Republic, reunifying the two German states under one constitution and government after the fall of the Berlin Wall."
        },
        {
            "start": "1991",
            "title": "Dissolution of the Soviet Union",
            "description": "Union republics declared independence, and the leaders of Russia, Ukraine, and Belarus dissolved the federation, formally ending the Soviet Union in December 1991."
        },
        {
            "start": "1993",
            "title": "Peaceful Dissolution of Czechoslovakia",
            "description": "Czech and Slovak leaders negotiated a separation that peacefully divided the federation into two independent republics."
        },
        {
            "start": "1997",
            "title": "Handover of Hong Kong",
            "description": "Britain transferred sovereignty over Hong Kong to the People's Republic of China, establishing the Hong Kong Special Administrative Region under the “one country, two systems” framework."
        },
        {
            "start": "1999",
            "title": "Handover of Macau",
            "description": "Portugal transferred sovereignty over Macau to the People's Republic of China, creating the Macau Special Administrative Region under “one country, two systems.”"
        },
        {
            "start": "2002",
            "title": "Formation of the African Union",
            "description": "The Organization of African Unity was replaced by the African Union, with assemblies, a commission, and peace and security institutions for continental cooperation."
        },
        {
            "start": "2011",
            "title": "Independence of South Sudan",
            "description": "Following a peace agreement that ended Sudan's civil war and a referendum, the southern region seceded to form the Republic of South Sudan."
        }
    ]
};

// Religion, culture and society
var tl_culture = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2599",
            "title": "Pyramid Complexes and Royal Funerary Culture",
            "description": "Ancient Egyptian pharaohs built pyramids, temples, and causeways on the west bank of the Nile, using mummification, offerings, and ritual to sustain royal cults after death."
        },
        {
            "start": "-1799",
            "title": "Old Babylonian Scribal Schools",
            "description": "Mesopotamian scribal schools taught cuneiform, Sumerian, mathematics, and legal documents to train specialists for palaces, temples, and commerce."
        },
        {
            "start": "-1499",
            "title": "Transmission of the Vedic Hymns in South Asia",
            "description": "Brahmin priests preserved hymns such as the Rigveda through highly disciplined oral transmission and recited them in sacrificial rituals."
        },
        {
            "start": "-1199",
            "title": "Oracle-Bone Inscriptions in Shang China",
            "description": "The Shang court inscribed divination questions, outcomes, and verifications on turtle shells and animal bones, leaving China's earliest large corpus of systematic writing."
        },
        {
            "start": "-0999",
            "title": "Formation of the Hebrew Religious Tradition",
            "description": "Communities of ancient Israel and Judah developed a scriptural tradition centered on the worship of Yahweh, covenant, law, and prophecy."
        },
        {
            "start": "-0799",
            "title": "The Homeric Epics Take Written Form",
            "description": "The orally transmitted Iliad and Odyssey were shaped into Greek epics recounting the Trojan War and Odysseus's return home."
        },
        {
            "start": "-0699",
            "title": "Spread of Alphabetic Writing in the Mediterranean",
            "description": "The Phoenician consonantal alphabet was adapted by Greeks to include vowels and later influenced Etruscan and Latin scripts."
        },
        {
            "start": "-0599",
            "title": "Development of Upanishadic Thought",
            "description": "The Upanishads explored brahman, atman, rebirth, and liberation, redirecting Vedic tradition toward philosophical inquiry into existence and consciousness."
        },
        {
            "start": "-0549",
            "title": "Mahavira and the Jain Tradition",
            "description": "Mahavira organized an ascetic community teaching nonviolence, non-possession, and self-discipline, becoming the central teacher of the surviving Jain tradition."
        },
        {
            "start": "-0529",
            "title": "Formation of the Buddhist Community around the Buddha's Teachings",
            "description": "Gautama Buddha taught the Four Noble Truths, the Eightfold Path, and liberation in the Ganges region, while disciples formed a monastic sangha and transmitted his teachings orally."
        },
        {
            "start": "-0499",
            "title": "Confucius and China's Classical Ethical Tradition",
            "description": "Confucius and his disciples taught benevolence, ritual, filial conduct, and the education of exemplary persons; their sayings were later compiled in the Analects."
        },
        {
            "start": "-0449",
            "title": "Flourishing of Greek Drama in Athens",
            "description": "Athens held public dramatic competitions at Dionysian festivals, where Aeschylus, Sophocles, Euripides, and Aristophanes developed tragedy and comedy."
        },
        {
            "start": "-0399",
            "title": "Compilation of Major Chinese Classical Texts",
            "description": "Scholars from the Warring States through early Han periods edited works such as the Odes, Documents, Rites, Changes, and Spring and Autumn Annals into a classical canon."
        },
        {
            "start": "-0299",
            "title": "Hellenistic Cultural Synthesis",
            "description": "After Alexander's conquests, Greek language, cities, and art interacted with Egyptian, Southwest Asian, and Central Asian traditions across the successor kingdoms."
        },
        {
            "start": "-0249",
            "title": "Spread of Buddhism under Ashoka",
            "description": "Mauryan emperor Ashoka supported monasteries, stupas, and missions and promoted dhamma and moral government through pillar and rock edicts."
        },
        {
            "start": "-0199",
            "title": "Rabbinic Traditions and the Development of Second Temple Judaism",
            "description": "Jewish communities of the Second Temple period organized life around Torah, synagogues, priesthood, and diverse sects; after the Temple's destruction, rabbis reshaped religious practice."
        },
        {
            "start": "0030",
            "title": "Early Christian Movement",
            "description": "Followers of Jesus proclaimed his resurrection in Judea and cities of the Roman Empire, forming churches led by apostles, elders, and local congregations."
        },
        {
            "start": "0105",
            "title": "Papermaking Associated with Cai Lun's Memorial",
            "description": "Eastern Han official Cai Lun reported an improved method of making paper from bark, hemp, rags, and fishing nets, after which paper use expanded in China."
        },
        {
            "start": "0200",
            "title": "Expansion of Mahayana Buddhism across Asia",
            "description": "Mahayana scriptures and bodhisattva devotion traveled through Central Asian routes into China and later to Korea, Japan, and parts of Southeast Asia."
        },
        {
            "start": "0313",
            "title": "Edict of Milan Legalizes Christianity",
            "description": "Constantine and Licinius proclaimed religious toleration, restored confiscated Christian property, and allowed Christians to worship openly."
        },
        {
            "start": "0325",
            "title": "First Council of Nicaea",
            "description": "Constantine convened bishops to address the Arian controversy; the council issued the Nicene Creed affirming that the Son was of one substance with the Father."
        },
        {
            "start": "0380",
            "title": "Christianity Becomes the Roman Empire's Official Religion",
            "description": "Theodosius I issued laws establishing Nicene Christianity as imperial orthodoxy and progressively restricting public pagan worship."
        },
        {
            "start": "0400",
            "title": "Flourishing of Classical Sanskrit Culture under the Guptas",
            "description": "Gupta courts and temples supported Sanskrit literature associated with writers such as Kalidasa, along with advances in mathematics, astronomy, sculpture, and Hindu texts."
        },
        {
            "start": "0529",
            "title": "Beginning of the Benedictine Monastic Tradition",
            "description": "Benedict of Nursia formulated a rule for communal monastic life, prayer, and work that became a major foundation of western European monasticism."
        },
        {
            "start": "0610",
            "title": "Beginning of Qur'anic Revelation in Islamic Tradition",
            "description": "Islamic tradition holds that Muhammad first received revelation through the angel Gabriel near Mecca, with subsequent revelations forming the Qur'an."
        },
        {
            "start": "0622",
            "title": "The Hijra and Formation of the Muslim Community at Medina",
            "description": "Muhammad and his followers migrated from Mecca to Medina and established a Muslim community with religious, political, and defensive functions."
        },
        {
            "start": "0700",
            "title": "Broad Establishment of Buddhism in East and Southeast Asia",
            "description": "Monks, translators, and royal patronage established durable Buddhist monasteries, scriptures, and rituals across China, Korea, Japan, and much of Southeast Asia."
        },
        {
            "start": "0762",
            "title": "Foundation of Baghdad as the Abbasid Capital",
            "description": "Caliph al-Mansur founded the Round City of Baghdad on the Tigris as the Abbasid Empire's administrative, commercial, and scholarly capital."
        },
        {
            "start": "0800",
            "title": "Carolingian Educational Reform",
            "description": "Charlemagne's court recruited scholars to reform monastic and cathedral schools, standardize written Latin, and copy religious and classical works."
        },
        {
            "start": "0850",
            "title": "Classical Translation Movement into Arabic",
            "description": "Scholars in Baghdad and other cities translated Greek, Syriac, Persian, and Sanskrit works into Arabic across philosophy, medicine, mathematics, and astronomy."
        },
        {
            "start": "0868",
            "title": "Printing of the Diamond Sutra in China",
            "description": "Tang artisans printed an illustrated scroll of the Diamond Sutra from carved woodblocks; its colophon dates it to 868, making it a celebrated early dated printed book."
        },
        {
            "start": "0960",
            "title": "Movable Type and Commercial Publishing in East Asia",
            "description": "Bi Sheng experimented with ceramic movable type in China, Korea developed metal type, and commercial publishers printed classics, calendars, fiction, and practical books on a large scale."
        },
        {
            "start": "0988",
            "title": "Christianization of Kievan Rus'",
            "description": "Grand Prince Vladimir adopted Byzantine Christianity and sponsored the baptism of Kyiv, making Orthodoxy a central foundation of Rus' state and culture."
        },
        {
            "start": "1054",
            "title": "East-West Schism",
            "description": "Mutual excommunications between Rome and Constantinople over authority, ritual, and doctrine symbolized the lasting division between Latin Catholic and Greek Orthodox churches."
        },
        {
            "start": "1088",
            "title": "Beginning of the University of Bologna Tradition",
            "description": "Students and teachers of Roman law in Bologna formed self-governing associations that developed into one of Europe's earliest university traditions."
        },
        {
            "start": "1096",
            "title": "Beginning of the Crusading Movement",
            "description": "Pope Urban II called western Christians to aid eastern Christians and seize Jerusalem, launching the First Crusade toward the Levant."
        },
        {
            "start": "1150",
            "title": "Expansion of Europe's University Network",
            "description": "At Paris, Oxford, Cambridge, Salamanca, and elsewhere, chartered corporations of masters and students taught theology, law, medicine, and the arts."
        },
        {
            "start": "1200",
            "title": "Expansion of Neo-Confucian Influence in East Asia",
            "description": "Thinkers including the Cheng brothers and Zhu Xi systematized ideas of principle, vital force, human nature, and classical learning, shaping official education in China, Korea, and Japan."
        },
        {
            "start": "1250",
            "title": "Maturation of Scholastic Culture",
            "description": "Medieval university scholars used logical disputation to reconcile Christian theology with Aristotelian philosophy, producing systematic works associated with figures such as Thomas Aquinas."
        },
        {
            "start": "1300",
            "title": "Expansion of Vernacular Literary Culture",
            "description": "Dante, Chaucer, and writers across Europe composed poetry, stories, and religious texts in local languages, reducing Latin's monopoly over literary culture."
        },
        {
            "start": "1350",
            "title": "Expansion of Italian Renaissance Humanism",
            "description": "Italian scholars collected and edited Greek and Roman texts, emphasizing rhetoric, history, ethics, and human creativity in ways that reshaped art and education."
        },
        {
            "start": "1450",
            "title": "Gutenberg-Style Movable-Type Printing in Europe",
            "description": "Gutenberg combined metal movable type, oil-based ink, and a press at Mainz, enabling European workshops to reproduce long texts rapidly."
        },
        {
            "start": "1517",
            "title": "Beginning of the Protestant Reformation",
            "description": "Martin Luther challenged indulgences and papal authority, and his German writings and Bible translation helped form new Protestant churches."
        },
        {
            "start": "1534",
            "title": "English Reformation and Royal Supremacy",
            "description": "Henry VIII separated the Church of England from Rome and made the monarch its supreme head, after which the crown dissolved monasteries and seized their property."
        },
        {
            "start": "1540",
            "title": "Approval of the Society of Jesus",
            "description": "Pope Paul III formally approved Ignatius of Loyola's Society of Jesus, an order devoted to education, missions, and obedience to the pope."
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "Council of Trent",
            "description": "Catholic bishops met in response to the Reformation, defining doctrine, tightening clerical discipline, and reforming seminaries and liturgy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "Publication of the King James Bible",
            "description": "King James I commissioned scholars to translate the Bible anew from Hebrew and Greek, producing the influential English edition of 1611."
        },
        {
            "start": "1637",
            "title": "Tokugawa Restrictions on Christianity and Overseas Contact",
            "description": "The Tokugawa shogunate outlawed Christianity, expelled missionaries, concentrated European trade at Nagasaki, and restricted Japanese overseas travel and return."
        },
        {
            "start": "1648",
            "title": "Confessional Order after the Thirty Years' War",
            "description": "The Peace of Westphalia recognized the legal standing of Catholicism, Lutheranism, and Calvinism in the Holy Roman Empire and adjusted political borders."
        },
        {
            "start": "1685",
            "title": "Revocation of the Edict of Nantes",
            "description": "Louis XIV ended limited toleration for French Huguenots, banned Protestant worship, and drove many Protestants into exile."
        },
        {
            "start": "1715",
            "title": "Expansion of the Enlightenment Public Sphere in Europe",
            "description": "Coffeehouses, salons, learned societies, periodicals, and correspondence networks became venues for debating reason, science, religious toleration, and political reform."
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "Publication of the Encyclopédie",
            "description": "Diderot and d'Alembert directed the multivolume Encyclopédie, compiling knowledge of crafts, science, philosophy, and society while spreading Enlightenment ideas.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "Expansion of Missionary and Colonial Encounters in the Pacific",
            "description": "European missionaries, traders, and colonists entered Pacific islands, producing encounters over conversion, commerce, landholding, and political institutions."
        },
        {
            "start": "1800",
            "title": "Romanticism Reshapes European Culture",
            "description": "Romantic writers, painters, and composers emphasized emotion, nature, imagination, national tradition, and individual genius against classical rules."
        },
        {
            "start": "1830",
            "title": "Expansion of Mass-Circulation Newspapers",
            "description": "Steam presses, cheap paper, telegraphy, and urban literacy produced low-cost daily newspapers carrying news, advertising, and serialized fiction to mass audiences."
        },
        {
            "start": "1848",
            "title": "Rise of Nationalist and Liberal Political Culture",
            "description": "Intellectuals, students, and civic groups in Europe and the Americas demanded constitutions, national unity, press freedom, and wider political participation, culminating in the revolutions of 1848."
        },
        {
            "start": "1868",
            "title": "State-Led Expansion of Mass Education in Meiji Japan",
            "description": "The Meiji government issued a national school system order and built networks of primary, secondary, and teacher-training schools with standardized curricula."
        },
        {
            "start": "1870",
            "title": "Expansion of Compulsory Education in Europe and North America",
            "description": "Governments across Europe and North America gradually required school attendance and expanded literacy through public schools, teacher training, and standardized curricula."
        },
        {
            "start": "1896",
            "title": "First Modern Olympic Games",
            "description": "Athletes from fourteen countries competed in athletics, swimming, gymnastics, and other events in Athens, reviving an international festival inspired by the ancient Olympics."
        },
        {
            "start": "1900",
            "title": "Acceleration of Global Mass Culture and Entertainment",
            "description": "Film, recorded music, radio, spectator sports, and cheap print created transnational entertainment industries that reproduced celebrities and popular styles on a mass scale."
        },
        {
            "start": "1919",
            "title": "Founding of the Bauhaus",
            "description": "Walter Gropius merged art and craft schools in Weimar to create the Bauhaus, emphasizing function, materials, industrial production, and integrated design."
        },
        {
            "start": "1920",
            "title": "Expansion of Commercial Broadcasting",
            "description": "Radio stations began scheduled broadcasts of news, music, drama, and advertising, making the household radio a mass medium."
        },
        {
            "start": "1927",
            "title": "First Feature-Length Synchronized Sound Film",
            "description": "Warner Bros. released The Jazz Singer with synchronized recorded dialogue and songs, accelerating the commercial film industry's shift to sound."
        },
        {
            "start": "1936",
            "title": "Regular Television Broadcasting Begins in Multiple Countries",
            "description": "Britain, Germany, the United States, and other countries established experimental or public television services broadcasting scheduled sound and images to limited areas."
        },
        {
            "start": "1945",
            "title": "Postwar Expansion of Mass Higher Education",
            "description": "Veterans' benefits, public universities, and new campuses expanded enrollment after World War II, turning higher education from an elite system toward mass participation."
        },
        {
            "start": "1947",
            "title": "Partition of India Reshapes South Asian Identity and Migration",
            "description": "British India was divided largely along religious-majority lines into India and Pakistan, prompting the migration of roughly ten million people and widespread communal violence."
        },
        {
            "start": "1950",
            "title": "Expansion of Global Youth Culture and Consumer Society",
            "description": "Postwar growth, records, film, television, and inexpensive fashion created transnational popular cultures aimed at teenagers as a distinct consumer group."
        },
        {
            "start": "1955",
            "title": "Bandung Conference Promotes Afro-Asian Solidarity",
            "description": "Representatives from twenty-nine Asian and African countries and territories met in Bandung to discuss anti-colonialism, peaceful coexistence, and economic and cultural cooperation."
        },
        {
            "start": "1960",
            "title": "International Expansion of Second-Wave Feminism",
            "description": "Women's groups campaigned around employment, education, reproductive rights, domestic labor, and legal equality while building international organizations and conferences."
        },
        {
            "start": "1964",
            "title": "Strengthening of Global Civil-Rights and Anti-Discrimination Movements",
            "description": "The U.S. civil-rights movement, anti-apartheid campaigns, and minority organizations worldwide used boycotts, marches, litigation, and legislation to seek equal rights."
        },
        {
            "start": "1968",
            "title": "Global Protest Movements of 1968",
            "description": "Students, workers, and antiwar groups launched occupations, strikes, and street demonstrations in Paris, Prague, Mexico City, the United States, and elsewhere."
        },
        {
            "start": "1969",
            "title": "Stonewall Uprising and the Modern LGBTQ Rights Movement",
            "description": "After police raided New York's Stonewall Inn, patrons and community members protested for several nights, helping spur new gay-liberation groups and Pride marches."
        },
        {
            "start": "1970",
            "title": "Modern Environmentalism Enters Mass Politics",
            "description": "Pollution crises, ecological research, and works such as Silent Spring helped produce Earth Day, environmental organizations, and major environmental laws."
        },
        {
            "start": "1977",
            "title": "Global Expansion of Personal-Computing Culture",
            "description": "Microprocessors, home computers, and the software industry put programmable machines directly into offices, schools, and households."
        },
        {
            "start": "1980",
            "title": "Expansion of Satellite Television and Global Media Networks",
            "description": "Communications satellites and cable television carried live news, sports, music, and entertainment across borders and created global media brands."
        },
        {
            "start": "1989",
            "title": "Proposal of the World Wide Web",
            "description": "Tim Berners-Lee proposed at CERN a system linking internet documents through hypertext, uniform resource identifiers, and network protocols."
        },
        {
            "start": "1991",
            "title": "The World Wide Web Opens to the Public",
            "description": "CERN released web software and protocols for public use, allowing early browsers and servers to spread beyond research institutions."
        },
        {
            "start": "1995",
            "title": "Acceleration of the Commercial Internet and Mobile Communications",
            "description": "Commercial internet access, cellular networks, and text messaging expanded rapidly, bringing email, web portals, and mobile phones into everyday life."
        },
        {
            "start": "2001",
            "title": "Wikipedia Launches",
            "description": "Jimmy Wales and Larry Sanger launched an online encyclopedia that anyone could collaboratively edit, with articles released under free licenses."
        },
        {
            "start": "2004",
            "title": "Beginning of the Social-Media Era",
            "description": "Platforms such as Friendster, MySpace, Facebook, and YouTube enabled users to build profiles and social networks and publish shareable content."
        },
        {
            "start": "2007",
            "title": "Acceleration of Smartphone-Centered Digital Life",
            "description": "Touchscreen smartphones, app stores, and mobile broadband combined cameras, maps, payments, communication, and internet services in a handheld device."
        },
        {
            "start": "2010",
            "title": "Globalization of Streaming and Platform Culture",
            "description": "Video and music streaming, subscriptions, and algorithmic recommendations displaced parts of broadcasting and physical media, enabling simultaneous global releases."
        },
        {
            "start": "2017",
            "title": "#MeToo Becomes a Global Movement",
            "description": "Large numbers of women used #MeToo to disclose experiences of sexual harassment and assault, prompting investigations, workplace accountability, and legal debate across many countries."
        },
        {
            "start": "2020",
            "title": "Surge in Remote Work, Online Education, and Digital Social Life",
            "description": "COVID-19 lockdowns and distancing measures caused a worldwide surge in videoconferencing, cloud collaboration, remote classes, e-commerce, and online entertainment."
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
            "description": "Egyptian pharaoh Ramesses II and Hittite king Muwatalli II fought near Kadesh in Syria without a decisive victory, later concluding a peace treaty."
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "Sea Peoples and Eastern Mediterranean Conflicts",
            "description": "Mixed seaborne groups attacked the coasts of Anatolia, the Levant, and Egypt amid the collapse of palace states and large-scale migration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "Assyrian Conquest of the Levant",
            "description": "Neo-Assyrian armies conquered Syria, Phoenicia, Israel, and parts of Judah, turning them into provinces or vassal states and deporting populations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "Greco-Persian Wars",
            "description": "The Achaemenid Empire launched major invasions of mainland Greece, but coalitions led by Athens and Sparta repelled them at Marathon, Salamis, Plataea, and elsewhere.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "Peloponnesian War",
            "description": "Athens and its empire fought the Spartan-led Peloponnesian League until the failed Sicilian Expedition and Persian support helped force Athens to surrender.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "Conquests of Alexander the Great",
            "description": "Alexander led Macedonian armies through Asia Minor, defeated Darius III, conquered Egypt and the Persian Empire, and campaigned as far as the Indus.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "Punic Wars",
            "description": "Rome and Carthage fought three wars for western Mediterranean supremacy; Hannibal invaded Italy but was defeated, and Carthage was destroyed in the final war.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "Qin Wars of Unification",
            "description": "After Shang Yang's reforms, Qin used mass armies and centralized administration to conquer Han, Zhao, Wei, Chu, Yan, and Qi and unify China."
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "Chu–Han Contention",
            "description": "After the Qin collapsed, Xiang Yu and Liu Bang fought for supremacy until Liu defeated the Chu forces at Gaixia and founded the Han dynasty.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "Caesar's Gallic Wars",
            "description": "Julius Caesar conquered the peoples of Gaul and defeated the coalition led by Vercingetorix at Alesia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "Caesar's Civil War",
            "description": "After crossing the Rubicon, Caesar fought Pompey and the senatorial faction, won at Pharsalus, and became Rome's effective dictator.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "Battle of Actium",
            "description": "Octavian's fleet defeated Mark Antony and Cleopatra off western Greece, ending the final civil war of the Roman Republic."
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "First Jewish–Roman War",
            "description": "Judea revolted against Roman rule; Roman armies captured Jerusalem, destroyed the Second Temple, and later ended resistance at Masada.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "Yellow Turban Rebellion",
            "description": "Followers of Zhang Jue's Way of Great Peace rebelled across the Eastern Han Empire; regional strongmen suppressed them and emerged with greater military power."
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "Wars of the Three Kingdoms",
            "description": "The states of Wei, Shu, and Wu fought for control of China; battles such as Red Cliffs established a three-way balance before Western Jin conquered Wu.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "Migration-Period Invasions and the Collapse of Western Roman Rule",
            "description": "Goths, Vandals, Franks, and other groups crossed Roman frontiers and established kingdoms, culminating in the deposition of the western emperor in 476.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "Justinian's Reconquests",
            "description": "Byzantine emperor Justinian sent generals including Belisarius to conquer Vandal North Africa, Ostrogothic Italy, and part of Spain.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "Byzantine–Sasanian Wars",
            "description": "The Byzantine and Sasanian empires repeatedly fought over Armenia, Mesopotamia, and Syria, with their final war leaving both powers severely exhausted.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "Early Islamic Conquests",
            "description": "Arab Muslim armies under the caliphs defeated the Sasanian Empire and seized Syria, Egypt, and much of North Africa from Byzantium.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "Muslim Conquest of Iberia",
            "description": "Umayyad forces crossed the Strait of Gibraltar, defeated the Visigothic kingdom, and established al-Andalus over most of Iberia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "An Lushan Rebellion",
            "description": "An Lushan and Shi Siming rebelled against the Tang and captured Luoyang and Chang'an; the court relied on regional armies and Uyghur aid to suppress the revolt over eight years.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "Viking Raids and Conquests",
            "description": "Scandinavian warriors used longships to raid and settle Britain, Ireland, Francia, and eastern Europe, establishing Norse-ruled territories in several regions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "Wars of the Five Dynasties and Ten Kingdoms",
            "description": "After the Tang fell, northern warlords founded five successive dynasties while southern and regional kingdoms competed until the Song reunified most of China.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "Norman Conquest of England",
            "description": "William of Normandy defeated Harold II at Hastings and then secured England through castles and a redistribution of land to Norman followers."
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "Crusader Wars in the Eastern Mediterranean",
            "description": "Western European crusading armies repeatedly campaigned in the Levant against Seljuk, Fatimid, Zengid, Ayyubid, and Mamluk powers for Jerusalem and coastal strongholds.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "Genpei War",
            "description": "The Minamoto and Taira clans fought for control of the Japanese court; the Minamoto destroyed the Taira fleet at Dan-no-ura and later founded the Kamakura shogunate.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "Mongol Conquests across Eurasia",
            "description": "Chinggis Khan and his successors used highly mobile armies to conquer Central Asia, northern China, Iran, Rus', and parts of Southwest Asia, creating the largest contiguous land empire in history.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "Albigensian Crusade",
            "description": "The papacy called northern French nobles against Cathar communities in Languedoc; the campaign destroyed their strongholds and extended royal control in southern France.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "Mongol Invasion of Europe",
            "description": "Batu and Subutai defeated Rus', Polish, and Hungarian forces and reached central Europe before withdrawing after the great khan's death and other strategic considerations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "Mongol Invasions of Japan",
            "description": "Yuan and Goryeo forces twice crossed the sea to attack Kyushu, but Japanese resistance, logistical problems, and storms defeated both invasions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "Hundred Years' War",
            "description": "The English and French crowns fought intermittently over the French throne and territory; longbows, artillery, and standing forces reshaped warfare before France recovered most lands.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "Red Turban Rebellions",
            "description": "Red Turban groups associated with millenarian religious networks rebelled against the Yuan; Zhu Yuanzhang emerged victorious among rival leaders and founded the Ming.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "Conquests of Timur",
            "description": "Timur campaigned from Samarkand across Central Asia, Iran, Mesopotamia, northern India, and Anatolia, creating a vast but short-lived empire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "Hussite Wars",
            "description": "After Jan Hus was executed, Hussite forces in Bohemia resisted Catholic and imperial armies and repeatedly defeated crusades using wagon-fort tactics.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "Wars of the Roses",
            "description": "The Lancastrian and Yorkist branches of England's royal house fought for the crown until Henry Tudor won at Bosworth and founded the Tudor dynasty.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "Wars of Japan's Sengoku Period",
            "description": "After Ashikaga authority collapsed, regional daimyo fought with castles, mass infantry, and firearms until Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu unified Japan.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "Fall of Granada",
            "description": "Castilian and Aragonese forces besieged and forced the Nasrid kingdom of Granada to surrender, ending the last Muslim-ruled state in Iberia."
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "Italian Wars",
            "description": "France, Spain, the Holy Roman Empire, and Italian states repeatedly fought over Milan, Naples, and control of the peninsula, with Spain ultimately dominant.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "Spanish Conquest of the Aztec Empire",
            "description": "Hernán Cortés and Indigenous allies including Tlaxcalans besieged Tenochtitlan; warfare and smallpox brought down the Mexica-led empire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "German Peasants' War",
            "description": "Peasants, miners, and townspeople in central and southern Germany demanded relief from lordly burdens in documents such as the Twelve Articles, but princely armies crushed the revolt.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "Spanish Conquest of the Inca Empire",
            "description": "Francisco Pizarro captured Atahualpa and exploited an Inca civil war and local alliances to take Cusco and establish Spanish colonial rule.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "French Wars of Religion",
            "description": "Catholic and Huguenot factions fought prolonged civil wars in France; conflict continued after the St. Bartholomew's Day massacre until Henry IV took the throne and issued the Edict of Nantes.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "Dutch Revolt and Eighty Years' War",
            "description": "The Low Countries revolted against Habsburg Spanish taxation and religious policy; the seven northern provinces formed the Dutch Republic and eventually won recognition of independence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "Imjin War",
            "description": "Toyotomi Hideyoshi twice invaded Korea, but Korean naval and militia forces with Ming aid prevented conquest, and Japanese armies withdrew after Hideyoshi's death.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "Thirty Years' War",
            "description": "A Bohemian religious conflict expanded into a major war involving the Holy Roman Empire and European powers, devastating German lands before the Peace of Westphalia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "Portuguese Restoration War",
            "description": "Portuguese nobles overthrew Habsburg Spanish rule and installed the Braganza dynasty, securing independence after a prolonged frontier war.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "English Civil Wars",
            "description": "Charles I and Parliament fought over taxation, religion, and sovereignty; Parliament's New Model Army prevailed, the king was executed, and a commonwealth was established.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "Ming–Qing Transition Wars",
            "description": "After Li Zicheng captured Beijing and the Ming fell, Qing forces entered China and fought Southern Ming, rebel, and regional armies until they secured control."
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "Anglo-Dutch Wars",
            "description": "England and the Dutch Republic fought three major naval wars over shipping, colonies, and commercial supremacy, with fleets clashing in the North Sea and English Channel.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "Battle of Vienna",
            "description": "An Ottoman army besieged Vienna, but a relief coalition led by Polish king John III Sobieski broke the siege and checked Ottoman expansion in central Europe."
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "Glorious Revolution",
            "description": "English political leaders invited William of Orange to intervene; James II fled, and William and Mary accepted parliamentary conditions and took the throne jointly.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "Great Northern War",
            "description": "Russia, Denmark, Saxony, and allies challenged Swedish dominance in the Baltic; Peter I's victory at Poltava helped Russia acquire Baltic territories.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "War of the Spanish Succession",
            "description": "After the Spanish Habsburg line ended, Bourbon and Austrian claimants fought over the throne and European balance; Philip V remained king but renounced claims to France.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "Seven Years' War",
            "description": "Britain and France fought for colonial power in Europe, North America, the Caribbean, India, and at sea, while Prussia resisted Austria, Russia, and their allies in Europe.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "American Revolutionary War",
            "description": "The thirteen colonies rebelled against British taxation and declared independence, forcing the main British army to surrender at Yorktown with French and allied support.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "French Revolution",
            "description": "A fiscal crisis led to the Estates-General, the storming of the Bastille, and a revolution that abolished feudal privileges and the monarchy and established a republic.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "Haitian Revolution",
            "description": "Enslaved people in Saint-Domingue rose in revolt and fought French colonists, Spanish and British forces, and Napoleonic armies before establishing independent Haiti.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "French Revolutionary and Napoleonic Wars",
            "description": "European monarchies formed successive coalitions against revolutionary France and Napoleon's empire in wars spanning Europe and overseas, ending with Napoleon's defeat at Waterloo.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "First Serbian Uprising",
            "description": "Karađorđe led Serb rebels against Ottoman local rulers and imperial authority, briefly establishing an autonomous government before the uprising was suppressed.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "Spanish American Wars of Independence",
            "description": "Armies led by figures such as Bolívar and San Martín defeated royalists across Spanish America and created republics from Mexico to South America.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "Greek War of Independence",
            "description": "Greek revolutionaries rebelled against Ottoman rule; after European volunteers and British, French, and Russian naval intervention, an independent Greek kingdom was recognized.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "First Opium War",
            "description": "Britain attacked the Chinese coast over the Qing opium crackdown and trade disputes, using naval superiority to force the Treaty of Nanjing and the opening of treaty ports.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "European Revolutions of 1848",
            "description": "Revolution in Paris triggered uprisings across the German states, Austrian lands, Italy, and elsewhere demanding constitutions, national unity, social reform, and wider suffrage.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "Taiping Rebellion",
            "description": "Hong Xiuquan's Taiping movement seized Nanjing and established a rival state; the Qing relied on regional armies such as the Xiang and Huai forces to suppress it over fourteen years.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "Crimean War",
            "description": "After Russia went to war with the Ottoman Empire, Britain, France, and Sardinia joined the Ottoman side, besieged Sevastopol, and forced Russia to make peace.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "Second Opium War",
            "description": "Britain and France renewed war against the Qing over diplomatic and trade disputes, occupied Beijing, and imposed expanded treaty ports, resident legations, and missionary rights.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "Indian Rebellion of 1857",
            "description": "A mutiny among East India Company soldiers spread into a broad revolt across northern India; after suppressing it, Britain ended Company rule and placed India under the Crown.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "American Civil War",
            "description": "Southern slaveholding states seceded to form the Confederacy; Union forces defeated it after four years, preserving the United States and ending slavery.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "Wars of German Unification",
            "description": "Prussia defeated Denmark, Austria, and France in successive wars, excluded Austria, and united northern and southern German states in the German Empire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "Boshin War",
            "description": "Domains supporting the new imperial government fought Tokugawa forces; after the shogunate's last stronghold in Hokkaido surrendered, the Meiji government secured national control.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "Franco-Prussian War",
            "description": "German forces led by Prussia defeated France and captured Napoleon III, besieged Paris, and compelled France to cede Alsace and Lorraine.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "War of the Pacific",
            "description": "Chile fought Peru and Bolivia over borders and nitrate-rich Atacama territory, winning the war and annexing coastal lands.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "Mahdist War",
            "description": "Muhammad Ahmad proclaimed himself the Mahdi and led Sudanese forces that overthrew Egyptian-British rule and founded a Mahdist state, later conquered by an Anglo-Egyptian army.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Sino-French War",
            "description": "France fought the Qing in northern Vietnam, Taiwan, and along the Chinese coast over control of Vietnam; the settlement left France dominant there.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "First Sino-Japanese War",
            "description": "Qing China and Japan fought over influence in Korea; Japanese victories led the Qing to recognize Korean independence and cede Taiwan in the Treaty of Shimonoseki.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "Battle of Adwa",
            "description": "Emperor Menelik II's Ethiopian army defeated an Italian invasion at Adwa, compelling Italy to recognize Ethiopian sovereignty."
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "Second Boer War",
            "description": "Britain fought the Boer republics of the Transvaal and Orange Free State and annexed them after conventional and guerrilla warfare.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "Boxer Uprising and Foreign Intervention",
            "description": "Boxers attacked Christians and foreign institutions in northern China; after the Qing backed the siege of the legations, an eight-power force occupied Beijing and imposed indemnities and garrisons.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "Russo-Japanese War",
            "description": "Japan and Russia fought over interests in Manchuria and Korea; Japanese victories at Port Arthur, Mukden, and Tsushima led to a U.S.-mediated peace.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "Russian Revolution of 1905",
            "description": "After Bloody Sunday, strikes, peasant unrest, and military mutinies spread across Russia, forcing the tsar to create a Duma whose powers were later curtailed."
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "Mexican Revolution",
            "description": "An uprising against Porfirio Díaz became a multisided war among factions led by Madero, Zapata, Villa, Carranza, and others, culminating in the Constitution of 1917.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "Xinhai Revolution",
            "description": "The Wuchang Uprising triggered provincial declarations of independence, and negotiations between revolutionaries and the Qing led to the emperor's abdication and the Republic of China.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "Balkan Wars",
            "description": "The Balkan League first defeated the Ottoman Empire and seized most of its European lands, then Bulgaria fought its former allies over the division and lost.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "World War I",
            "description": "Austria-Hungary's war on Serbia activated alliance systems, producing total war between the Allies and Central Powers across Europe, the Middle East, Africa, and the seas until the Central Powers collapsed.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "Easter Rising",
            "description": "Irish republicans seized public buildings in Dublin and proclaimed a republic; British forces suppressed them within a week, but executions intensified the independence movement."
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "Russian Revolution",
            "description": "The February Revolution overthrew the tsar and created a provisional government; in October the Bolsheviks seized power in Petrograd and proclaimed a Soviet government.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "Russian Civil War",
            "description": "The Bolshevik Red Army fought White armies, nationalist forces, and foreign intervention across the former Russian Empire and ultimately held the core territories.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "Turkish War of Independence",
            "description": "Mustafa Kemal led Turkish nationalist forces against Greek, Armenian, French, and Allied occupation, compelling recognition of new borders in the Treaty of Lausanne.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "Chinese Civil War",
            "description": "The Nationalists and Communists fought after their united front collapsed, paused for partial cooperation against Japan, and resumed until the Communists took mainland China and the Nationalist government retreated to Taiwan in 1949.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "Japan's Wars of Expansion in East Asia",
            "description": "Japanese forces occupied Manchuria, expanded the war in China, and then attacked Southeast Asia and Pacific colonies, leading to full-scale war with the Allies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "Second Italo-Ethiopian War",
            "description": "Mussolini's Italy invaded Ethiopia from Eritrea and Somalia, using air power and chemical weapons to capture Addis Ababa and annex the country.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "Spanish Civil War",
            "description": "The Spanish Republic fought Franco's Nationalists with intervention and aid from Germany, Italy, the Soviet Union, and others; the Nationalists won and established a dictatorship.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "World War II",
            "description": "Germany's invasion of Poland began the European war; Axis and Allied powers fought globally, Nazi Germany carried out the Holocaust, and Germany and Japan ultimately surrendered.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "Eastern Front of World War II",
            "description": "After Nazi Germany invaded the Soviet Union, enormous land battles were fought at Moscow, Stalingrad, Kursk, and across eastern Europe before Soviet forces entered Berlin.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "Pacific War",
            "description": "After attacking Pearl Harbor and Southeast Asia, Japan fought the United States, Britain, China, Australia, and others across the Pacific and Asia until its surrender.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "Indonesian National Revolution",
            "description": "After Sukarno and Hatta declared independence, Indonesian republican forces fought Dutch attempts to restore colonial rule until international pressure led to a transfer of sovereignty.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "First Indochina War",
            "description": "The Viet Minh led by Ho Chi Minh fought French colonial forces in Vietnam, Laos, and Cambodia; after Dien Bien Phu, France agreed to withdraw from Indochina.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "First Arab–Israeli War",
            "description": "After Israel declared statehood, armies from Egypt, Transjordan, Syria, Lebanon, and Iraq entered former Mandatory Palestine; armistice lines emerged amid mass Palestinian displacement.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "Cold War",
            "description": "The United States and Soviet Union confronted each other globally through nuclear deterrence, alliances, proxy wars, economic rivalry, and propaganda without fighting a direct full-scale war.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "Malayan Emergency",
            "description": "Communist guerrillas fought the British colonial government in Malaya, which used military operations, village resettlement, and political reform to defeat the insurgency.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "Korean War",
            "description": "North Korean forces invaded South Korea; United Nations forces and Chinese People's Volunteers entered the war, which ended in an armistice near the original dividing line.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "Mau Mau Uprising",
            "description": "Mainly Kikuyu insurgents in Kenya fought British colonial rule and land dispossession; the colonial government imposed emergency rule and mass detention.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "Algerian War",
            "description": "The National Liberation Front used guerrilla and urban warfare against French colonial rule; France deployed large forces amid torture and political crisis before Algeria gained independence.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "Vietnam War",
            "description": "North Vietnam and the National Liberation Front fought the U.S.-backed South Vietnamese government; after large-scale U.S. intervention and withdrawal, northern forces captured Saigon in 1975.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "Suez Crisis",
            "description": "After President Nasser nationalized the Suez Canal, Israel, Britain, and France attacked Egypt but withdrew under U.S., Soviet, and United Nations pressure."
        },
        {
            "start": "1956",
            "title": "Hungarian Revolution of 1956",
            "description": "Students and workers in Budapest demanded political reform and an end to Soviet control; Soviet tanks reentered Hungary and overthrew Imre Nagy's government."
        },
        {
            "start": "1959",
            "title": "Cuban Revolution",
            "description": "Fidel Castro's 26th of July Movement used guerrilla warfare to overthrow Fulgencio Batista and establish a revolutionary government in Havana."
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "Congo Crisis",
            "description": "After the Belgian Congo became independent, army mutiny, Katanga's secession, Belgian and UN intervention, and Lumumba's killing culminated in Mobutu's rise to power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "Portuguese Colonial War",
            "description": "Independence movements in Angola, Guinea-Bissau, and Mozambique fought Portuguese forces until the wars helped trigger Portugal's Carnation Revolution and decolonization.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "Cuban Missile Crisis",
            "description": "After the United States discovered Soviet nuclear missiles in Cuba, it imposed a naval quarantine; thirteen days of confrontation ended with missile withdrawals and security assurances.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "Indonesian Mass Killings and Political Transition",
            "description": "After the 30 September Movement, the military and allied groups killed large numbers of Communists and alleged sympathizers, and Suharto displaced Sukarno from power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "Six-Day War",
            "description": "Israel launched preemptive attacks against Egypt, Syria, and Jordan and in six days captured Sinai, Gaza, the West Bank, East Jerusalem, and the Golan Heights.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "Prague Spring and Warsaw Pact Invasion",
            "description": "Alexander Dubček's government introduced “socialism with a human face” in Czechoslovakia, but Soviet-led Warsaw Pact forces invaded and ended the reforms."
        },
        {
            "start": "1971",
            "title": "Bangladesh Liberation War",
            "description": "Pakistan's army crushed the autonomy movement in East Pakistan, causing mass atrocities and refugees; Bengali guerrillas and Indian forces eventually compelled its surrender."
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "Yom Kippur War",
            "description": "Egypt and Syria attacked Israeli-held territory on Yom Kippur, made initial gains, and were then counterattacked before a U.S.-Soviet-backed ceasefire.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "Lebanese Civil War",
            "description": "Lebanese Christian, Muslim, Palestinian, and leftist militias fought alongside Syrian, Israeli, and other foreign forces until the Taif Agreement enabled reconstruction of the state.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "Cambodian Genocide under the Khmer Rouge",
            "description": "The Khmer Rouge emptied cities, imposed forced collective labor, executions, starvation, and persecution, causing roughly 1.5 to 2 million deaths.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "Soviet–Afghan War",
            "description": "The Soviet Union intervened to support Afghanistan's communist government and fought mujahideen backed by the United States, Pakistan, and Gulf states before withdrawing.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "Iranian Revolution",
            "description": "Strikes, demonstrations, and religious opposition forced Shah Mohammad Reza Pahlavi to leave Iran, and Ayatollah Khomeini returned to establish an Islamic republic by referendum."
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "Iran–Iraq War",
            "description": "Saddam Hussein's Iraq invaded postrevolutionary Iran, leading to eight years of trench warfare, missile attacks on cities, and chemical weapons before the prewar border was restored.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "Falklands War",
            "description": "After Argentina occupied the Falkland Islands, Britain sent a naval task force that retook the islands and compelled the Argentine garrison to surrender."
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "First Intifada",
            "description": "Palestinians in the West Bank and Gaza used demonstrations, strikes, boycotts, and stone-throwing against Israeli occupation, while Israeli forces responded with arrests and force.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "Tiananmen Protests and Crackdown",
            "description": "Students and citizens in Beijing and other cities demanded action against corruption, political reform, and freer expression; troops entered Beijing in early June and cleared the protests by force."
        },
        {
            "start": "1989",
            "title": "Collapse of Communist Regimes in Eastern Europe",
            "description": "Communist governments in Poland, Hungary, East Germany, Czechoslovakia, Bulgaria, and Romania fell through elections, negotiations, or mass protest."
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "Gulf War",
            "description": "After Iraq annexed Kuwait, a U.S.-led coalition launched an air campaign and ground offensive that expelled Iraqi forces within weeks.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "Yugoslav Wars",
            "description": "As Yugoslavia dissolved, wars in Slovenia, Croatia, Bosnia, Kosovo, and elsewhere involved sieges, ethnic cleansing, displacement, and mass atrocities.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "Genocide against the Tutsi in Rwanda",
            "description": "Extremist Hutu authorities and militias systematically killed Tutsi and moderate Hutu people over about one hundred days until the Rwandan Patriotic Front defeated government forces."
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "First Chechen War",
            "description": "Russian forces attempted to restore control over separatist Chechnya, suffered intense fighting around Grozny, and eventually agreed to a ceasefire and temporary withdrawal.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "Eritrean–Ethiopian War",
            "description": "Eritrea and Ethiopia fought a large conventional war over the border near Badme before a ceasefire and international boundary commission.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "Second Congo War",
            "description": "The Congolese government, rebel movements, and armies from several African states fought a regional war in which competition over territory and minerals and militia violence caused millions of deaths and displacements.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "Kosovo War and NATO Intervention",
            "description": "Yugoslav forces fought Kosovo Albanian insurgents amid mass expulsions; after NATO bombed Yugoslavia, Serbian forces withdrew from Kosovo."
        },
        {
            "start": "2001-09-11",
            "title": "September 11 Attacks",
            "description": "Al-Qaeda hijackers seized four airliners, struck New York's World Trade Center and the Pentagon, and crashed another plane in Pennsylvania, killing nearly three thousand people."
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "War in Afghanistan",
            "description": "The United States and allies overthrew the Taliban after September 11 for sheltering al-Qaeda, then fought a prolonged insurgency until foreign withdrawal was followed by the Taliban's return to power.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "Iraq War",
            "description": "The United States, Britain, and allies invaded Iraq over alleged weapons of mass destruction and overthrew Saddam Hussein, followed by years of occupation, insurgency, and sectarian war.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "Darfur War and Mass Atrocities",
            "description": "Rebel movements in Darfur fought Sudanese forces and Janjaweed militias, while village destruction, killings, and forced displacement produced a major humanitarian crisis.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "Insurgency and Conflict in Northern Pakistan",
            "description": "The Pakistani Taliban and other militants attacked the state and civilians in the tribal areas and Khyber Pakhtunkhwa, prompting repeated military offensives.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "2006 Lebanon War",
            "description": "After Hezbollah raided across the border and captured Israeli soldiers, Israel bombed and invaded southern Lebanon; rocket and ground fighting ended under a UN-backed ceasefire."
        },
        {
            "start": "2008",
            "title": "Russo-Georgian War",
            "description": "After Georgian forces attacked South Ossetia, Russia intervened on a large scale and entered Georgia proper, later recognizing South Ossetia and Abkhazia as independent."
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "Arab Spring",
            "description": "A self-immolation in Tunisia sparked mass protests across North Africa and Southwest Asia, toppling some leaders while producing repression, reform, or civil war elsewhere.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "Libyan Civil War and International Intervention",
            "description": "An uprising against Muammar Gaddafi became a civil war; NATO struck government forces under a UN mandate, and rebels captured Tripoli and killed Gaddafi.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "Beginning of the Syrian Civil War",
            "description": "After the Assad government violently suppressed protests, defectors and opposition groups took up arms and the conflict became a nationwide multisided civil war."
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISIS Territorial Expansion and Collapse of Its Caliphate",
            "description": "The Islamic State seized large parts of Iraq and Syria and proclaimed a caliphate, but local forces backed by an international coalition retook its cities and territory.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Russian Annexation of Crimea and Beginning of the Donbas War",
            "description": "After Ukraine's government changed, Russian forces seized and annexed Crimea, while Russian-backed separatists began fighting Ukrainian forces in Donetsk and Luhansk."
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "Iraq's War against ISIS",
            "description": "After ISIS captured Mosul and northwestern Iraq, Iraqi forces, Kurdish troops, militias, and an international coalition counterattacked and retook the major cities.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "Escalation of the Yemeni Civil War",
            "description": "Houthi forces seized Sana'a and drove the government abroad, prompting a Saudi-led intervention that fragmented the country and intensified famine and disease."
        },
        {
            "start": "2017",
            "title": "Mass Flight of the Rohingya from Myanmar",
            "description": "Myanmar's military launched “clearance operations” in Rakhine State involving burned villages, killings, and sexual violence, driving more than 700,000 Rohingya into Bangladesh."
        },
        {
            "start": "2020",
            "title": "Second Nagorno-Karabakh War",
            "description": "Azerbaijan fought Armenian and Artsakh forces, using drones and artillery to retake substantial territory before a Russian-brokered ceasefire and peacekeeping deployment."
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "Tigray War",
            "description": "Ethiopia's federal government fought the Tigray People's Liberation Front with Eritrean and regional forces involved, while combat and blockade caused severe civilian deaths and hunger.",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "Myanmar Military Coup and Nationwide Conflict",
            "description": "Myanmar's military detained elected leaders and seized power; after protests were crushed, People's Defence Forces and ethnic armed groups expanded resistance nationwide."
        },
        {
            "start": "2022-02-24",
            "title": "Russia's Full-Scale Invasion of Ukraine",
            "description": "Russia invaded Ukraine from the north, east, and south and attempted to seize Kyiv; after Ukrainian forces stopped the capital offensive, the war shifted toward attrition in the east and south and long-range strikes."
        },
        {
            "start": "2023-10-07",
            "title": "Beginning of the Israel–Hamas War",
            "description": "Hamas and allied militants attacked southern Israel from Gaza and took hostages, after which Israel launched a large-scale bombardment, siege, and ground campaign in Gaza."
        },
        {
            "start": "2023",
            "title": "Beginning of the War in Sudan",
            "description": "The Sudanese Armed Forces and Rapid Support Forces fought for power in Khartoum and across regions including Darfur, causing mass displacement through urban warfare and ethnic violence."
        }
    ]
};

// Economy, technology and global exchange
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "Expansion of Sail-Powered Transport",
            "description": "Early mariners used sails on rivers, coasts, and between islands to move people and goods without relying entirely on oars."
        },
        {
            "start": "-2999",
            "title": "Growth of Interregional Commodity Trade",
            "description": "Stone, obsidian, shells, salt, metals, and other goods moved between distant communities through expanding land and water routes."
        },
        {
            "start": "-1999",
            "title": "Bronze Trade Networks Link Eurasian Regions",
            "description": "Copper, tin, and finished bronze circulated along trade routes linking mines, smelting centers, palace states, and ports."
        },
        {
            "start": "-1199",
            "title": "Iron Production Transforms Tools and Warfare",
            "description": "As iron smelting and forging spread, iron plows, axes, swords, and spearheads became common in agriculture and armies."
        },
        {
            "start": "-0599",
            "title": "Spread of Coinage in the Mediterranean and Southwest Asia",
            "description": "Lydia and Greek city-states minted standardized metal pieces stamped by authorities, and coin-based payment spread through Persia and the Mediterranean."
        },
        {
            "start": "-0299",
            "title": "Expansion of Silk Road Exchange",
            "description": "Linked routes connected Han China, Central Asian oases, Persia, and the Roman world, carrying silk, horses, glass, religions, and diplomatic missions."
        },
        {
            "start": "-0199",
            "title": "Growth of Indian Ocean Monsoon Trade",
            "description": "Sailors used predictable monsoons to travel among the Red Sea, East Africa, India, and Southeast Asia, trading spices, textiles, ivory, and metals."
        },
        {
            "start": "-0099",
            "title": "Roman Roads and Shipping Integrate the Mediterranean",
            "description": "Rome built roads, bridges, and ports and secured sea lanes, allowing troops, taxes, mail, and goods to circulate across the empire."
        },
        {
            "start": "0100",
            "title": "Spread of Paper in China",
            "description": "Paper made from plant fibers increasingly replaced bamboo slips, wooden tablets, and silk for government records, letters, and books."
        },
        {
            "start": "0200",
            "title": "Expansion of Camel-Caravan Trade across the Sahara",
            "description": "Dromedary caravans linked North African oases with the Sahel, carrying salt, gold, enslaved people, horses, and textiles across the desert."
        },
        {
            "start": "0600",
            "title": "Grand Canal Network Integrates China",
            "description": "From the Sui and Tang onward, linked canals carried southern grain and goods to Luoyang, Chang'an, and later Beijing, supplying capitals and northern armies."
        },
        {
            "start": "0700",
            "title": "Expansion of Indian Ocean Merchant Diasporas",
            "description": "Arab, Persian, Indian, Southeast Asian, and Chinese merchants founded communities in foreign ports and used kinship, religion, and credit to organize maritime trade."
        },
        {
            "start": "0750",
            "title": "Expansion of Islamic Commercial and Credit Networks",
            "description": "Muslim merchants used partnerships, bills of exchange, agents, and shared legal practices to trade across the Mediterranean, Indian Ocean, and Sahara."
        },
        {
            "start": "0800",
            "title": "Spread of Papermaking in the Islamic World",
            "description": "Papermaking transmitted through Central Asia led to mills in Samarkand, Baghdad, Cairo, and al-Andalus, supplying cheaper material for administration, scholarship, and books."
        },
        {
            "start": "0900",
            "title": "Development of Early Gunpowder Weapons in China",
            "description": "Gunpowder formulas originating in Chinese alchemy were adapted to fire arrows, fire lances, bombs, and incendiaries and gradually entered military use."
        },
        {
            "start": "1000",
            "title": "Development of the Maritime Compass in China",
            "description": "The magnetized needle moved from divination and orientation into navigation, allowing sailors to determine direction at night, in cloud, and far from shore."
        },
        {
            "start": "1100",
            "title": "Medieval European Commercial Revolution",
            "description": "Population growth, urban revival, fairs, and maritime trade expanded while guilds, merchant law, coinage, and credit institutions developed across Europe."
        },
        {
            "start": "1200",
            "title": "Trans-Eurasian Exchange under Mongol Rule",
            "description": "Mongol khanates protected relay stations and trade routes, enabling merchants, envoys, artisans, clergy, and technologies to move among China, Central Asia, Southwest Asia, and Europe."
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "Marco Polo's Journey across Eurasia",
            "description": "Venetian merchant Marco Polo traveled through Central Asia to Yuan China, and the later account of his journey described Asian cities, courts, and commerce to European readers.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "Expansion of Bills of Exchange and Banking Houses",
            "description": "Italian and other European merchants used bills of exchange and partnership banks to settle accounts between cities without transporting large quantities of coin."
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "Zheng He's Voyages",
            "description": "Ming admiral Zheng He led seven large naval expeditions through Southeast Asia, the Indian Ocean, Arabia, and East Africa for diplomacy, tribute, and trade.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "European Printing Revolution",
            "description": "Metal movable-type workshops spread rapidly through European cities and mass-produced Bibles, classics, pamphlets, and textbooks at lower cost and speed."
        },
        {
            "start": "1488",
            "title": "Dias Rounds the Cape of Good Hope",
            "description": "Portuguese navigator Bartolomeu Dias rounded southern Africa, demonstrating a sea route from the Atlantic into the Indian Ocean."
        },
        {
            "start": "1492-10-12",
            "title": "Columbus Reaches the Caribbean",
            "description": "Sponsored by the Spanish Crown, Christopher Columbus crossed the Atlantic to the Bahamas and Caribbean islands while believing he had reached the outskirts of Asia."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas Divides Overseas Spheres",
            "description": "Spain and Portugal, with papal mediation, drew an Atlantic meridian dividing their claims to newly encountered lands outside Europe."
        },
        {
            "start": "1498",
            "title": "Vasco da Gama Reaches India by Sea",
            "description": "A Portuguese fleet rounded the Cape of Good Hope, called at East African ports, and reached Calicut, opening a direct European sea route to the Indian Ocean."
        },
        {
            "start": "1500",
            "title": "Acceleration of the Columbian Exchange",
            "description": "Crops, animals, pathogens, and people moved extensively among Europe, the Americas, and Africa, carrying horses, cattle, and wheat west and maize and potatoes east."
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "Transatlantic Slave Trade",
            "description": "European and American traders purchased or captured enslaved Africans and transported them in brutal conditions to plantations and mines in the Americas for centuries.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "First Circumnavigation of the Globe",
            "description": "Magellan's Spanish expedition sailed west through the strait at South America and crossed the Pacific; after his death, Elcano brought the Victoria back to Spain.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "Potosí Silver Boom",
            "description": "Spanish colonists mined silver on a vast scale at Potosí using coerced mita labor and mercury amalgamation, sending bullion to Europe and Asia."
        },
        {
            "start": "1565",
            "title": "Manila Galleon Trade Links the Americas and Asia",
            "description": "Spanish galleons sailed between Manila and Acapulco, exchanging American silver for Chinese silk and porcelain, spices, and other Asian goods."
        },
        {
            "start": "1600",
            "title": "English East India Company Chartered",
            "description": "Elizabeth I granted a company of merchants a monopoly on East Indies trade; it later built factories, armies, and territorial rule in India."
        },
        {
            "start": "1602",
            "title": "Dutch East India Company Founded",
            "description": "Dutch trading ventures merged into a joint-stock company empowered to wage war, make treaties, and colonize, ruling Asian commerce from Batavia."
        },
        {
            "start": "1609",
            "title": "Bank of Amsterdam Founded",
            "description": "Amsterdam created a public exchange bank that accepted deposits and settled payments in stable book money, becoming a central institution of European commerce."
        },
        {
            "start": "1637",
            "title": "Dutch Tulip Market Crash",
            "description": "Prices for contracts on rare tulip bulbs rose sharply before buyers stopped trading in 1637, collapsing the speculative market and prompting contract disputes."
        },
        {
            "start": "1650",
            "title": "Expansion of the Atlantic Plantation Economy",
            "description": "Colonial plantations in the Caribbean, Brazil, and southern North America used enslaved labor to produce sugar, tobacco, coffee, and cotton for European markets."
        },
        {
            "start": "1694",
            "title": "Bank of England Founded",
            "description": "Parliament chartered private investors to form a bank that lent long-term funds to the government and issued circulating notes, becoming a central institution of public finance."
        },
        {
            "start": "1700",
            "title": "Global Markets for Sugar, Tea, Coffee, and Cotton Expand",
            "description": "Plantations, Asian producers, European trading houses, and mass consumers connected sugar, tea, coffee, and cotton textiles through transoceanic supply chains."
        },
        {
            "start": "1712",
            "title": "Newcomen Steam Engine",
            "description": "Thomas Newcomen built an atmospheric steam engine that used steam condensation to drive pumps and remove water from mines."
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "First Industrial Revolution",
            "description": "In Britain, textile machinery, coal, steam power, and factory production combined rapidly before mechanization spread into metallurgy, transport, and continental Europe.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "Watt Patents Improvements to the Steam Engine",
            "description": "James Watt patented improvements including a separate condenser, greatly reducing fuel use and enabling rotary steam power for factories."
        },
        {
            "start": "1770",
            "title": "Expansion of the British Factory System",
            "description": "Owners concentrated spinning machines, looms, and workers in water- or steam-powered mills and organized production by fixed hours and factory discipline."
        },
        {
            "start": "1787",
            "title": "First Fleet Begins British Colonization of Australia",
            "description": "Britain's First Fleet of convicts, marines, and officials reached Port Jackson and founded the penal colony of New South Wales on Indigenous lands."
        },
        {
            "start": "1793",
            "title": "Cotton Gin Accelerates U.S. Cotton Production and Slavery",
            "description": "Eli Whitney's cotton gin rapidly separated seeds from short-staple cotton, causing southern U.S. cotton production and demand for enslaved labor to surge."
        },
        {
            "start": "1807",
            "title": "Beginning of Commercial Steamship Service",
            "description": "Steam-powered paddleboats began scheduled passenger and freight service on rivers and coasts without complete dependence on wind."
        },
        {
            "start": "1825",
            "title": "Stockton and Darlington Railway Opens",
            "description": "Britain's public Stockton and Darlington Railway used steam locomotives to carry coal and passengers, demonstrating commercial rail transport."
        },
        {
            "start": "1830",
            "title": "Liverpool and Manchester Railway Opens",
            "description": "A fully locomotive-operated intercity railway linked Liverpool's port with industrial Manchester and carried scheduled freight and passengers."
        },
        {
            "start": "1837",
            "title": "Practical Demonstration of the Telegraph",
            "description": "Morse's telegraph system sent coded electrical pulses over wire, allowing written messages to travel almost instantly between Washington and Baltimore."
        },
        {
            "start": "1846",
            "title": "Britain Repeals the Corn Laws",
            "description": "Parliament repealed tariffs restricting imported grain, making cheaper food more accessible and marking the ascendancy of free-trade policy."
        },
        {
            "start": "1848",
            "title": "California Gold Rush",
            "description": "After gold was found at Sutter's Mill, hundreds of thousands migrated to California to mine, trade, and build towns, rapidly expanding San Francisco."
        },
        {
            "start": "1851",
            "title": "Great Exhibition in London",
            "description": "Countries displayed machinery, raw materials, crafts, and manufactured goods in the Crystal Palace, showcasing nineteenth-century industry and imperial commerce."
        },
        {
            "start": "1856",
            "title": "Bessemer Steel Process",
            "description": "Henry Bessemer's process blew air through molten pig iron to remove impurities and produce steel rapidly and cheaply."
        },
        {
            "start": "1859",
            "title": "First Commercial Oil Well in Pennsylvania",
            "description": "Edwin Drake drilled for petroleum at Titusville, demonstrating that wells could supply crude oil reliably for lighting and industry."
        },
        {
            "start": "1863",
            "title": "London Underground Opens",
            "description": "The Metropolitan Railway ran steam trains through tunnels beneath London, becoming the world's first urban underground railway."
        },
        {
            "start": "1869",
            "title": "Suez Canal Opens",
            "description": "The artificial canal between the Mediterranean and Red Sea opened to shipping, allowing vessels between Europe and Asia to avoid the Cape of Good Hope."
        },
        {
            "start": "1869",
            "title": "First U.S. Transcontinental Railroad Completed",
            "description": "The Union Pacific and Central Pacific railroads met in Utah, linking the eastern U.S. rail network with the Pacific coast."
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "Second Industrial Revolution",
            "description": "Steel, chemicals, electricity, petroleum, internal combustion, and large-scale corporations expanded across Europe, North America, and Japan, creating new heavy industries.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "Telephone Patented and Demonstrated",
            "description": "Alexander Graham Bell patented and demonstrated a telephone that converted speech into electrical signals and reproduced it over wire."
        },
        {
            "start": "1879",
            "title": "Practical Electric-Lighting Systems Emerge",
            "description": "Edison and others combined durable incandescent lamps, generating stations, distribution wires, and meters into practical urban lighting systems."
        },
        {
            "start": "1880",
            "title": "Acceleration of Mass Migration from Europe and Asia",
            "description": "Steamships and railways carried tens of millions of Europeans, Chinese, Indians, Japanese, and others to work or settle in the Americas, Oceania, Southeast Asia, and Africa."
        },
        {
            "start": "1883",
            "title": "Orient Express Begins Service",
            "description": "The luxury international train ran from Paris through central Europe and the Balkans toward Constantinople, offering through sleeping and dining-car service."
        },
        {
            "start": "1886",
            "title": "Beginning of the Automobile Age",
            "description": "Engineers including Benz and Daimler built practical gasoline-powered automobiles, allowing small vehicles to travel independently of rails and animal power."
        },
        {
            "start": "1895",
            "title": "Beginning of Commercial Cinema",
            "description": "The Lumière brothers and others screened short films to paying audiences, turning motion pictures from technical experiments into a commercial mass entertainment."
        },
        {
            "start": "1903",
            "title": "First Controlled Powered Flight",
            "description": "The Wright brothers used an engine-powered aircraft with three-axis control to achieve sustained, controlled, piloted flight in North Carolina."
        },
        {
            "start": "1908",
            "title": "Ford Model T and Mass Automobile Production",
            "description": "Ford used standardized parts and moving assembly lines to mass-produce the Model T, lowering prices and broadening household car ownership."
        },
        {
            "start": "1914",
            "title": "Panama Canal Opens",
            "description": "The lock canal across the Isthmus of Panama opened, allowing ships to move between the Atlantic and Pacific without rounding South America."
        },
        {
            "start": "1920",
            "title": "Expansion of Consumer Credit and Advertising",
            "description": "Department stores, installment plans, brand advertising, and mass media encouraged households to buy automobiles, appliances, and standardized consumer goods."
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "Great Depression",
            "description": "After the 1929 stock-market crash, bank failures, collapsing credit, industrial contraction, and mass unemployment spread through the world economy.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "Beginning of the U.S. New Deal",
            "description": "The Roosevelt administration responded to the Depression with banking reform, public works, agricultural programs, employment schemes, and social security."
        },
        {
            "start": "1944",
            "title": "Design of the Bretton Woods System",
            "description": "Delegates from forty-four countries designed fixed exchange rates anchored to the dollar and gold and created the IMF and World Bank."
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade Signed",
            "description": "Twenty-three countries signed an agreement to reduce tariffs through negotiation rounds and establish rules including most-favored-nation treatment."
        },
        {
            "start": "1948",
            "title": "Marshall Plan Begins",
            "description": "The United States supplied Western Europe with grants, loans, food, and equipment for postwar reconstruction while requiring recipient governments to coordinate recovery plans."
        },
        {
            "start": "1950",
            "title": "Containerization Begins Transforming Shipping",
            "description": "Standard metal boxes could transfer directly among trucks, trains, and ships, reducing dock labor, handling time, and cargo damage."
        },
        {
            "start": "1956",
            "title": "First Commercial Container-Ship Voyage",
            "description": "Malcom McLean's converted Ideal X carried standardized containers from Newark to Houston, proving the commercial intermodal model."
        },
        {
            "start": "1957",
            "title": "European Economic Community Established",
            "description": "France, West Germany, Italy, and the Benelux countries created a common market through the Treaties of Rome and began removing internal tariffs."
        },
        {
            "start": "1960",
            "title": "OPEC Founded",
            "description": "Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela founded OPEC to coordinate production and policy toward international oil companies."
        },
        {
            "start": "1964",
            "title": "Tōkaidō Shinkansen Opens",
            "description": "Japan opened a dedicated standard-gauge high-speed railway between Tokyo and Osaka, linking the two metropolitan regions with frequent, punctual service."
        },
        {
            "start": "1969",
            "title": "ARPANET Begins Operation",
            "description": "Computers at U.S. research institutions were linked through a packet-switched network whose first nodes included UCLA and the Stanford Research Institute."
        },
        {
            "start": "1971",
            "title": "U.S. Dollar Convertibility into Gold Ends",
            "description": "The Nixon administration suspended foreign central banks' ability to convert dollars into gold at a fixed price, leading to the collapse of Bretton Woods exchange rates."
        },
        {
            "start": "1973",
            "title": "First Oil Crisis",
            "description": "During the Yom Kippur War, Arab oil exporters embargoed states supporting Israel and reduced production, causing world oil prices to multiply."
        },
        {
            "start": "1978",
            "title": "China's Reform and Opening Begins",
            "description": "After the Third Plenum, China introduced household farming contracts, special economic zones, foreign investment, and reform of state enterprises."
        },
        {
            "start": "1981",
            "title": "IBM PC Accelerates the Personal-Computer Market",
            "description": "IBM released a personal computer using an Intel processor and Microsoft operating system, and its relatively open architecture fostered a large compatible-PC market."
        },
        {
            "start": "1983",
            "title": "ARPANET Adopts TCP/IP",
            "description": "ARPANET hosts switched to TCP/IP, allowing different networks to interconnect under common protocols and laying the foundation for the modern internet."
        },
        {
            "start": "1985",
            "title": "Schengen Agreement Signed",
            "description": "Five European Community states agreed to phase out checks at their shared borders while coordinating external-border and police controls."
        },
        {
            "start": "1986",
            "title": "Acceleration of Market Reforms in Multiple Regions",
            "description": "Countries across Latin America, eastern Europe, Africa, and Asia pursued privatization, trade opening, price liberalization, and fiscal restraint, reducing direct state ownership."
        },
        {
            "start": "1989",
            "title": "Beginning of the Washington Consensus Era",
            "description": "International financial institutions and U.S. policy circles promoted fiscal discipline, privatization, trade liberalization, and deregulation as reforms for debt-crisis economies."
        },
        {
            "start": "1991",
            "title": "Acceleration of India's Economic Liberalization",
            "description": "A balance-of-payments crisis led India to reduce industrial licensing, lower tariffs, open to foreign investment, and reform finance and state enterprises."
        },
        {
            "start": "1993",
            "title": "European Single Market Launched",
            "description": "The European Community removed many barriers to the movement of goods, capital, services, and people among member states, creating a single internal market."
        },
        {
            "start": "1994",
            "title": "NAFTA Takes Effect",
            "description": "The United States, Canada, and Mexico began phasing out most tariffs and established rules for investment, origin, and dispute settlement."
        },
        {
            "start": "1995",
            "title": "World Trade Organization Established",
            "description": "GATT members created a permanent World Trade Organization to administer rules on goods, services, and intellectual property and adjudicate disputes."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "Asian Financial Crisis",
            "description": "The devaluation of Thailand's baht triggered capital flight and currency and banking crises across Thailand, Indonesia, South Korea, and other Asian economies.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "Euro Introduced as an Electronic and Accounting Currency",
            "description": "Euro-area states fixed their national exchange rates and began using the euro for bank transfers, financial markets, and official accounting."
        },
        {
            "start": "2001",
            "title": "China Joins the World Trade Organization",
            "description": "After lengthy negotiations, China entered the WTO and committed to lower tariffs, open parts of its market, and follow multilateral trade rules."
        },
        {
            "start": "2002",
            "title": "Euro Banknotes and Coins Enter Circulation",
            "description": "Twelve European states replaced national notes and coins with euro cash in one of history's largest currency changeovers."
        },
        {
            "start": "2004",
            "title": "European Union's Major Eastern Enlargement",
            "description": "Eight central and eastern European countries plus Cyprus and Malta joined the EU simultaneously, greatly expanding its membership and single market."
        },
        {
            "start": "2007",
            "title": "Beginning of the Global Smartphone Economy",
            "description": "Touchscreen smartphones, app stores, and mobile broadband created industries in app development, mobile advertising, ride-hailing, payments, and location services."
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "Global Financial Crisis",
            "description": "Losses on U.S. subprime securities destabilized banks and shadow finance; after Lehman Brothers failed, global credit and trade contracted sharply.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "Bitcoin Network Launches",
            "description": "The pseudonymous Satoshi Nakamoto released open-source software and mined the genesis block, launching a decentralized digital-currency network using blockchain and proof of work."
        },
        {
            "start": "2010",
            "title": "Expansion of Platform and Gig Economies",
            "description": "Online platforms used algorithms to match riders, deliveries, lodging, freelancers, and short-term workers while governing transactions through ratings and dynamic pricing."
        },
        {
            "start": "2013",
            "title": "Belt and Road Initiative Announced",
            "description": "China announced land and maritime frameworks for financing ports, railways, energy, and communications projects across Asia, Africa, and Europe."
        },
        {
            "start": "2016",
            "title": "UK Referendum Votes to Leave the EU",
            "description": "UK voters narrowly chose to leave the European Union, after which the government invoked Article 50 and began withdrawal negotiations."
        },
        {
            "start": "2020",
            "title": "United Kingdom Formally Leaves the EU",
            "description": "The United Kingdom left EU institutions in January 2020 and, after a transition, exited the single market and customs union under new trade arrangements."
        },
        {
            "start": "2020",
            "title": "Global Supply-Chain Disruption during COVID-19",
            "description": "Factory shutdowns, border restrictions, port congestion, and shifts in demand caused shortages of chips, medical supplies, containers, and many goods."
        },
        {
            "start": "2021",
            "title": "Global Inflation and Energy-Price Pressures Intensify",
            "description": "Post-pandemic demand, supply bottlenecks, expansive policy, and energy shocks raised food, fuel, housing, and goods prices, prompting central banks to increase interest rates."
        },
        {
            "start": "2022",
            "title": "Sanctions and Trade Fragmentation after the Invasion of Ukraine",
            "description": "The United States, European Union, and allies froze Russian assets and restricted finance and technology exports, while Russia redirected energy sales and trade routes fragmented."
        }
    ]
};

// Disasters, epidemics and environment
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2-Kiloyear Aridification Event",
            "description": "Around 2200 BCE, prolonged aridity reduced rainfall and river flow across parts of Southwest Asia, North Africa, and South Asia, causing crop failures, migration, and urban decline."
        },
        {
            "start": "-1599",
            "title": "Thera Eruption and Eastern Mediterranean Disruption",
            "description": "A massive eruption of Thera covered Santorini and nearby islands in ash and generated tsunamis that disrupted Crete and eastern Mediterranean shipping."
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "Antonine Plague",
            "description": "An epidemic carried west by Roman troops repeatedly spread through the empire, possibly involving smallpox and causing extensive mortality.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "Plague of Cyprian",
            "description": "A disease marked by fever, diarrhea, and severe weakness circulated through the Roman Empire in the mid-third century, affecting cities, armies, and rural populations.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "Late Antique Climatic Shock",
            "description": "Several large volcanic eruptions in the mid-sixth century dimmed sunlight and caused years of cooling, crop failures, famine, and social stress across Eurasia.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "First Plague Pandemic Beginning with the Plague of Justinian",
            "description": "Yersinia pestis spread through Mediterranean ports into the Byzantine Empire, Europe, and Southwest Asia, beginning in 541 and recurring for more than two centuries.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "Samalas Eruption",
            "description": "The Samalas volcano on Lombok in Indonesia erupted on a colossal scale, blanketing the region in ash and leaving a major sulfate signal in global ice cores."
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "Great Famine of Europe",
            "description": "Cold, wet seasons caused cereal failures, livestock disease, and soaring food prices across northern Europe, producing mass hunger and death around 1315–1317.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "Black Death",
            "description": "Plague spread rapidly from Black Sea and Mediterranean ports through Europe, Southwest Asia, and North Africa, killing tens of millions in the mid-fourteenth century.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "Mid-Fifteenth-Century Volcanic and Climatic Shock",
            "description": "A sequence of major eruptions in the mid-fifteenth century injected sulfate into the stratosphere and produced several years of unusual cooling, crop failures, and regional famine."
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "Old World Diseases Devastate Indigenous American Populations",
            "description": "Smallpox, measles, influenza, and other pathogens arrived with Europeans and caused repeated epidemics and catastrophic population loss among Indigenous peoples lacking prior immunity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "Huaxian Earthquake",
            "description": "A powerful earthquake struck near Huaxian in Shaanxi, collapsing loess cave dwellings and towns; Ming records report deaths in the hundreds of thousands."
        },
        {
            "start": "1600",
            "title": "Huaynaputina Eruption and Global Cooling",
            "description": "Peru's Huaynaputina erupted violently, burying nearby settlements and releasing large quantities of sulfur, followed by unusual Northern Hemisphere cooling and crop failures."
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "Great Plague of London",
            "description": "Plague spread through densely populated London in 1665–1666, killing about 100,000 people as residents fled and authorities imposed quarantine.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "Great Fire of London",
            "description": "A fire beginning in a Pudding Lane bakery spread for four days in strong winds and destroyed much of the City of London's housing, churches, and public buildings."
        },
        {
            "start": "1707",
            "title": "Hōei Earthquake and Eruption of Mount Fuji",
            "description": "The Hōei megathrust earthquake and tsunami struck along Japan's Nankai Trough, and weeks later Mount Fuji erupted from the Hōei vent, spreading ash over Edo and the Tōkaidō region."
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "Great Plague of Marseille",
            "description": "A merchant ship arriving from the eastern Mediterranean brought plague to Marseille, and the epidemic spread through Provence, killing roughly 100,000 people.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "Lisbon Earthquake and Tsunami",
            "description": "A major offshore earthquake on All Saints' Day generated a tsunami and fires that destroyed central Lisbon and affected Iberia, North Africa, and Atlantic coasts."
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "Laki Eruption and Climatic Disruption",
            "description": "Iceland's Laki fissure erupted for eight months, releasing toxic fluorine and sulfur dioxide that killed livestock, caused famine in Iceland, and polluted European air.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "Eruption of Mount Tambora",
            "description": "Mount Tambora on Sumbawa erupted in one of the largest eruptions in recorded history, destroying nearby communities and injecting vast material into the atmosphere."
        },
        {
            "start": "1816",
            "title": "Year Without a Summer",
            "description": "Cooling after Tambora brought summer frosts, rain, and crop failures to North America and Europe in 1816, raising food prices and driving hunger and migration."
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "Global Cholera Pandemics",
            "description": "Cholera originating in the Ganges delta repeatedly traveled with ships, armies, and contaminated water through Asia, Europe, Africa, and the Americas.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "Great Irish Famine",
            "description": "Potato blight repeatedly destroyed Ireland's staple crop while relief remained inadequate and food exports continued, causing about one million deaths and even larger emigration.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "Great Famines in India and China",
            "description": "Late-nineteenth-century droughts and monsoon failures associated with El Niño struck India and China, where food shortages, disease, and inadequate relief killed millions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "Krakatoa Eruption",
            "description": "Krakatoa in the Sunda Strait exploded and partly collapsed, generating tsunamis that struck Java and Sumatra and killed more than 30,000 people."
        },
        {
            "start": "1887",
            "title": "Yellow River Flood",
            "description": "The Yellow River breached its dikes near Zhengzhou in Henan and inundated a vast plain, destroying villages and farmland and causing enormous loss of life and displacement."
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "Third Plague Pandemic",
            "description": "Plague spread from southwestern China and Hong Kong through India and global port cities, killing millions from the late nineteenth into the early twentieth century.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "San Francisco Earthquake",
            "description": "A rupture on the San Andreas Fault shook San Francisco, and fires from broken gas lines destroyed much of the city and left hundreds of thousands homeless."
        },
        {
            "start": "1911",
            "title": "Yangtze–Huai River Floods",
            "description": "Prolonged rains and dike failures along the Yangtze and Huai rivers flooded Anhui, Jiangsu, and neighboring areas, damaging farms and towns and causing hunger and disease."
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "1918 Influenza Pandemic",
            "description": "An H1N1 influenza virus spread worldwide through military and transport networks near the end of World War I, infecting hundreds of millions and killing tens of millions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "Haiyuan Earthquake",
            "description": "A powerful earthquake near Haiyuan in Ningxia produced extensive surface rupture, landslides, and collapse of loess cave dwellings, killing more than 200,000 people."
        },
        {
            "start": "1923-09-01",
            "title": "Great Kantō Earthquake",
            "description": "A major earthquake in Sagami Bay and subsequent fires devastated Tokyo, Yokohama, and surrounding areas, with cooking fires and wind producing firestorms and mass casualties."
        },
        {
            "start": "1931",
            "title": "1931 China Floods",
            "description": "After cycles of drought and flooding, extreme rain and typhoons inundated the Yangtze, Huai, and Yellow River basins, causing hunger and epidemic disease across a vast area."
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "Soviet Famine including the Holodomor",
            "description": "Forced collectivization, grain requisition, movement restrictions, and poor harvests caused severe famine in Ukraine, Kazakhstan, southern Russia, and elsewhere, killing millions.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "Bengal Famine",
            "description": "Wartime rice shortages, price inflation, transport and requisition policies, and failed relief caused roughly two to three million deaths in British Bengal.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "Great Chinese Famine",
            "description": "During the Great Leap Forward, communes, excessive procurement, inflated production reports, policy failures, and natural shocks combined in a nationwide food crisis and mass mortality.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "Valdivia Earthquake and Pacific Tsunami",
            "description": "The strongest instrumentally recorded earthquake struck southern Chile and generated a tsunami that crossed the Pacific to Hawaii, Japan, and the Philippines."
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "Hong Kong Flu Pandemic",
            "description": "A novel H3N2 influenza virus first recognized in Hong Kong spread worldwide along air routes within months and caused about one million deaths.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "Bhola Cyclone",
            "description": "A powerful cyclone and storm surge flooded the low-lying Ganges delta in East Pakistan, killing hundreds of thousands and deepening the region's political crisis."
        },
        {
            "start": "1976",
            "title": "Tangshan Earthquake",
            "description": "A shallow earthquake struck the industrial city of Tangshan before dawn, collapsing much of the built environment and officially killing more than 240,000 people."
        },
        {
            "start": "1984",
            "title": "Bhopal Industrial Disaster",
            "description": "Methyl isocyanate gas leaked from a pesticide plant in Bhopal and spread over sleeping neighborhoods, causing thousands of immediate and later deaths and chronic illness."
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "Ethiopian Famine",
            "description": "Drought, civil war, forced resettlement, and blocked food movement produced widespread famine in northern Ethiopia, killing hundreds of thousands and prompting international relief.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "Chernobyl Nuclear Disaster",
            "description": "Reactor No. 4 at Chernobyl in Ukraine exploded during a safety test and burned, releasing large amounts of radioactive material across Europe and forcing evacuations."
        },
        {
            "start": "1988",
            "title": "Armenian Earthquake",
            "description": "A powerful earthquake struck northern Soviet Armenia, collapsing poorly reinforced buildings in Spitak, Leninakan, and other cities and killing about 25,000 people."
        },
        {
            "start": "1991",
            "title": "Mount Pinatubo Eruption",
            "description": "Mount Pinatubo in the Philippines produced pyroclastic flows and heavy ashfall and injected sulfur dioxide into the stratosphere, causing short-term global cooling."
        },
        {
            "start": "1994",
            "title": "Great Hanshin Earthquake",
            "description": "A fault rupture near Awaji Island violently shook Kobe and the Hanshin region, collapsing homes, expressways, and port facilities and igniting major fires."
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "Global Climate Disruption from El Niño",
            "description": "The powerful 1997–1998 El Niño altered Pacific temperatures and atmospheric circulation, producing floods in East Africa, drought and fires in Southeast Asia, and extreme weather in the Americas.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "Gujarat Earthquake",
            "description": "A major earthquake struck Gujarat, India, on Republic Day, collapsing buildings in Bhuj, Kutch, and surrounding towns and villages and killing about 20,000 people."
        },
        {
            "start": "2003",
            "title": "European Heatwave",
            "description": "Prolonged heat and unusually warm nights in summer 2003 caused heatstroke, cardiovascular stress, and tens of thousands of excess deaths, especially in France and Italy."
        },
        {
            "start": "2004-12-26",
            "title": "Indian Ocean Earthquake and Tsunami",
            "description": "A giant undersea megathrust earthquake west of Sumatra generated tsunamis that struck Indonesia, Sri Lanka, India, Thailand, and East Africa, killing about 230,000 people."
        },
        {
            "start": "2005",
            "title": "Hurricane Katrina",
            "description": "Katrina struck the U.S. Gulf Coast, and storm surge failures in New Orleans's levee system flooded much of the city and forced prolonged evacuation."
        },
        {
            "start": "2008",
            "title": "Cyclone Nargis",
            "description": "A powerful cyclone and storm surge swept across Myanmar's Irrawaddy delta, inundating low-lying villages and leaving more than 130,000 people dead or missing."
        },
        {
            "start": "2008",
            "title": "Wenchuan Earthquake",
            "description": "A major rupture on the Longmenshan fault struck Sichuan, collapsing schools, homes, and mountainsides around Wenchuan, Beichuan, and Dujiangyan and leaving nearly 90,000 dead or missing."
        },
        {
            "start": "2010",
            "title": "Haiti Earthquake",
            "description": "A shallow earthquake struck near Port-au-Prince, collapsing fragile housing, government buildings, and hospitals, killing hundreds of thousands and creating a prolonged humanitarian crisis."
        },
        {
            "start": "2010",
            "title": "Pakistan Floods of 2010",
            "description": "Extreme monsoon rains caused the Indus and its tributaries to flood from north to south, affecting about one-fifth of Pakistan and leaving 20 million people needing assistance."
        },
        {
            "start": "2011-03-11",
            "title": "Great East Japan Earthquake, Tsunami, and Fukushima Nuclear Disaster",
            "description": "A megathrust earthquake off northeastern Japan generated a massive tsunami that destroyed coastal towns and flooded Fukushima Daiichi, causing reactor meltdowns and mass evacuation."
        },
        {
            "start": "2013",
            "title": "Typhoon Haiyan",
            "description": "Super Typhoon Haiyan struck the central Philippines, and its storm surge devastated Tacloban and surrounding communities, killing thousands and affecting millions."
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "West African Ebola Epidemic",
            "description": "Ebola spread through Guinea, Liberia, and Sierra Leone, where limited health capacity and cross-border movement produced the largest recorded outbreak.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "Nepal Earthquake",
            "description": "A major earthquake and aftershocks in central Nepal destroyed historic structures in the Kathmandu Valley and mountain villages and triggered avalanches on Mount Everest."
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "COVID-19 Global Health Emergency",
            "description": "A novel coronavirus spread rapidly worldwide, producing repeated waves of infection, overwhelmed hospitals, lockdowns, and millions of deaths.",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "Global Megafires and Rising Awareness of Extreme Weather",
            "description": "Australia, North America, the Mediterranean, Siberia, and other regions experienced repeated megafires, heatwaves, and smoke events affecting hundreds of millions through pollution and evacuation."
        },
        {
            "start": "2022",
            "title": "Pakistan Floods and Climate-Vulnerability Crisis",
            "description": "Exceptional monsoon rain and glacier melt flooded large parts of Pakistan, affecting more than 30 million people and destroying homes, farmland, and infrastructure."
        },
        {
            "start": "2023",
            "title": "Turkey–Syria Earthquakes",
            "description": "Two major earthquakes struck southern Turkey and northern Syria, collapsing large numbers of reinforced-concrete buildings and killing more than 50,000 people in winter conditions."
        },
        {
            "start": "2023",
            "title": "Derna Flood Disaster in Libya",
            "description": "Torrential rain from Storm Daniel caused two dams above Derna to fail, sending a flood through the city and sweeping entire neighborhoods into the Mediterranean."
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
            "description": "King Hammurabi of Babylon had rules on judgments, punishments, property, marriage, and debt inscribed on a stele as a public written law code."
        },
        {
            "start": "-0620",
            "title": "Draco's and Solon's Reforms in Athens",
            "description": "Draco put Athenian law into writing, and Solon later abolished debt bondage, reorganized property classes, and revised citizens' political participation."
        },
        {
            "start": "-0508",
            "title": "Establishment of the Roman Republic",
            "description": "After overthrowing the monarchy, Romans created a republic governed through annually elected consuls, the Senate, and popular assemblies."
        },
        {
            "start": "-0449",
            "title": "Twelve Tables of Roman Law",
            "description": "Rome inscribed rules on procedure, debt, family, and property on twelve tablets, publicly codifying legal practices previously controlled by patricians."
        },
        {
            "start": "-0220",
            "title": "Qin Administrative Standardization",
            "description": "After unifying the warring states, Qin imposed commanderies and counties and standardized writing, weights, measures, currency, and axle widths under central rule."
        },
        {
            "start": "0212",
            "title": "Constitutio Antoniniana Extends Roman Citizenship",
            "description": "Emperor Caracalla issued an edict granting Roman citizenship to nearly all free inhabitants of the empire, broadly unifying their legal status."
        },
        {
            "start": "0604",
            "title": "Japan's Seventeen-Article Constitution",
            "description": "The court associated with Prince Shōtoku issued seventeen moral and administrative precepts urging harmony, loyalty to the ruler, respect for Buddhism, and impartial government."
        },
        {
            "start": "0701",
            "title": "Taihō Code",
            "description": "Japan's court compiled a Tang-inspired code governing central offices, local administration, household registration, taxation, labor duties, and criminal law."
        },
        {
            "start": "0800",
            "title": "Coronation of Charlemagne as Emperor",
            "description": "Pope Leo III crowned Charlemagne emperor in Rome, linking Frankish kingship with a revived idea of a Christian empire in the West."
        },
        {
            "start": "1215-06-15",
            "title": "Magna Carta Sealed",
            "description": "Under baronial pressure, King John accepted Magna Carta, acknowledging that royal taxation and justice were subject to established law and consultation."
        },
        {
            "start": "1222",
            "title": "Golden Bull of Hungary",
            "description": "King Andrew II issued the Golden Bull, confirming Hungarian nobles' property, tax exemptions, and a right to resist unlawful royal commands."
        },
        {
            "start": "1232",
            "title": "Manden Charter Tradition",
            "description": "An oral charter associated with the founding of the Mali Empire set out clan relations, social duties, peace principles, and limits on enslavement, preserved by griots."
        },
        {
            "start": "1265",
            "title": "Simon de Montfort's Parliament",
            "description": "Simon de Montfort summoned an English parliament that included county knights and town representatives alongside nobles and clergy."
        },
        {
            "start": "1356",
            "title": "Golden Bull of 1356",
            "description": "Emperor Charles IV issued the Golden Bull, defining how seven prince-electors would choose the King of the Romans and confirming their privileges."
        },
        {
            "start": "1454",
            "title": "Peace of Lodi",
            "description": "Milan and Venice made peace, followed by Florence, Naples, and the Papal States, creating a balance-of-power system among Italy's major states."
        },
        {
            "start": "1494",
            "title": "Treaty of Tordesillas",
            "description": "Spain and Portugal drew a line dividing their claimed overseas spheres in the Atlantic, allocating rights of conquest and trade in newly encountered lands."
        },
        {
            "start": "1555",
            "title": "Peace of Augsburg",
            "description": "The emperor and imperial princes agreed that each territorial ruler could choose Catholicism or Lutheranism as the official confession of the territory."
        },
        {
            "start": "1598",
            "title": "Edict of Nantes",
            "description": "King Henry IV issued an edict granting French Huguenots limited rights of worship, public office, and security within a Catholic kingdom."
        },
        {
            "start": "1600",
            "title": "Expansion of Chartered-Company Rule",
            "description": "European monarchs chartered companies such as the East India companies to monopolize trade, make treaties, levy taxes, maintain forces, and govern overseas posts."
        },
        {
            "start": "1628",
            "title": "Petition of Right",
            "description": "Parliament presented Charles I with the Petition of Right, opposing taxation without consent, arbitrary imprisonment, forced billeting, and martial law in peacetime."
        },
        {
            "start": "1648",
            "title": "Peace of Westphalia",
            "description": "A series of treaties ended the Thirty Years' War and the Eighty Years' War and redefined the standing of imperial estates and several European states."
        },
        {
            "start": "1679",
            "title": "Habeas Corpus Act",
            "description": "The English Parliament required detainees to be brought promptly before a court and restricted transfers designed to evade judicial review."
        },
        {
            "start": "1689",
            "title": "English Bill of Rights",
            "description": "After the Glorious Revolution, Parliament recognized William III and Mary II while restricting the Crown's powers to suspend laws, tax, and maintain a standing army."
        },
        {
            "start": "1701",
            "title": "Act of Settlement",
            "description": "Parliament fixed a Protestant line of succession and strengthened judicial tenure and constitutional limits on the monarch."
        },
        {
            "start": "1713",
            "title": "Peace of Utrecht",
            "description": "European powers ended the War of the Spanish Succession, recognized Bourbon rule in Spain, and redistributed territories and commercial privileges."
        },
        {
            "start": "1776-07-04",
            "title": "United States Declaration of Independence",
            "description": "Representatives of the thirteen colonies declared separation from Britain, listed grievances against the king, and justified independence through natural rights and popular consent."
        },
        {
            "start": "1787-09-17",
            "title": "Signing of the United States Constitution",
            "description": "Convention delegates signed a constitution creating a federal government with separated legislative, executive, and judicial powers."
        },
        {
            "start": "1789-08-26",
            "title": "Declaration of the Rights of Man and of the Citizen",
            "description": "France's National Constituent Assembly proclaimed liberty and equality, national sovereignty, freedom of expression, property rights, equality before law, and due process."
        },
        {
            "start": "1791",
            "title": "Ratification of the United States Bill of Rights",
            "description": "The United States ratified the first ten constitutional amendments, protecting religion, speech, press, assembly, arms, and criminal-procedure rights."
        },
        {
            "start": "1792",
            "title": "Publication of A Vindication of the Rights of Woman",
            "description": "Mary Wollstonecraft argued that women possessed equal reason and should receive education, economic independence, and civic standing."
        },
        {
            "start": "1804",
            "title": "Napoleonic Code",
            "description": "France promulgated a uniform civil code regulating property, contracts, inheritance, marriage, and family relations, replacing many local laws."
        },
        {
            "start": "1807",
            "title": "Britain Abolishes the Slave Trade",
            "description": "Parliament prohibited British ships and subjects from participating in the transatlantic slave trade, although slavery remained legal in the colonies."
        },
        {
            "start": "1815",
            "title": "Congress of Vienna and the Concert of Europe",
            "description": "After the Napoleonic Wars, the powers redrew Europe's borders, restored several dynasties, and established periodic consultation to manage continental crises."
        },
        {
            "start": "1833",
            "title": "Slavery Abolition Act in the British Empire",
            "description": "Parliament ordered emancipation across most British colonies, compensated slaveholders, and initially imposed an apprenticeship system that was later ended."
        },
        {
            "start": "1840",
            "title": "Treaty of Waitangi",
            "description": "British Crown representatives and many Māori chiefs signed a treaty whose English and Māori texts differed over sovereignty and governance, creating enduring disputes."
        },
        {
            "start": "1848",
            "title": "Seneca Falls Convention",
            "description": "U.S. women's-rights activists adopted a Declaration of Sentiments demanding equality in education, property, employment, and voting."
        },
        {
            "start": "1863",
            "title": "Emancipation Proclamation",
            "description": "President Abraham Lincoln declared enslaved people in areas under Confederate control free and authorized Black enlistment in Union forces."
        },
        {
            "start": "1864",
            "title": "First Geneva Convention",
            "description": "European states agreed to protect wounded soldiers and medical personnel on the battlefield and recognized the red-cross emblem."
        },
        {
            "start": "1865",
            "title": "Thirteenth Amendment Abolishes Slavery in the United States",
            "description": "The United States ratified the Thirteenth Amendment, abolishing slavery and involuntary servitude except as punishment for crime."
        },
        {
            "start": "1868",
            "title": "Fourteenth Amendment to the United States Constitution",
            "description": "The amendment defined national citizenship and barred states from denying due process or equal protection of the laws."
        },
        {
            "start": "1868",
            "title": "Charter Oath of Meiji Japan",
            "description": "The Meiji emperor proclaimed five principles calling for deliberative assemblies, participation across classes, abandonment of harmful customs, and acquisition of knowledge worldwide."
        },
        {
            "start": "1870",
            "title": "Fifteenth Amendment to the United States Constitution",
            "description": "The amendment prohibited federal and state governments from denying male citizens the vote because of race, color, or previous servitude."
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "Berlin Conference Regulates the European Partition of Africa",
            "description": "European powers, without African representation, set rules for occupation, navigation, and commerce that framed the subsequent scramble for African territory.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "Promulgation of the Constitution of the Empire of Japan",
            "description": "The Meiji government promulgated a constitution establishing the Imperial Diet, cabinet, and courts under imperial sovereignty, with subjects' rights defined by law."
        },
        {
            "start": "1899",
            "title": "First Hague Peace Conference",
            "description": "More than twenty states met at The Hague, created the Permanent Court of Arbitration, and adopted conventions on the laws of land warfare."
        },
        {
            "start": "1902",
            "title": "Australia Grants Most Women the Federal Vote",
            "description": "Federal law gave most white women the right to vote and stand for parliament, while excluding many Indigenous people and other groups."
        },
        {
            "start": "1905",
            "title": "Norway Gains Independence through Negotiated Dissolution",
            "description": "Norway declared its union with Sweden dissolved and, after a referendum and negotiations, became an independent monarchy without war."
        },
        {
            "start": "1907",
            "title": "Second Hague Peace Conference",
            "description": "More than forty states revised the laws of war and adopted conventions on neutrality, naval warfare, occupation, and the opening of hostilities, without major disarmament gains."
        },
        {
            "start": "1911",
            "title": "First Observance of International Women's Day",
            "description": "Socialist women's groups held rallies across several European countries for suffrage, labor rights, and an end to discrimination, establishing the International Women's Day tradition."
        },
        {
            "start": "1918",
            "title": "British Women Gain Parliamentary Voting Rights with Age Restrictions",
            "description": "Britain's Representation of the People Act enfranchised women aged thirty or over who met property qualifications and broadened male suffrage."
        },
        {
            "start": "1919",
            "title": "Treaty of Versailles",
            "description": "The Allied powers and Germany signed a peace treaty redrawing borders, restricting German armaments, imposing reparations, and incorporating the League of Nations covenant."
        },
        {
            "start": "1919",
            "title": "Establishment of the International Labour Organization",
            "description": "The Versailles settlement created the ILO, where governments, employers, and workers jointly developed international standards on hours, safety, association, and other labor matters."
        },
        {
            "start": "1920",
            "title": "League of Nations Established",
            "description": "The League of Nations began operating through an Assembly, Council, and Secretariat to address disputes, mandates, and international cooperation."
        },
        {
            "start": "1920",
            "title": "Nineteenth Amendment Establishes Women's Suffrage in the United States",
            "description": "The amendment barred federal and state governments from denying the vote on account of sex, legally establishing nationwide women's suffrage."
        },
        {
            "start": "1928",
            "title": "Kellogg–Briand Pact",
            "description": "Signatory states renounced war as an instrument of national policy and promised to settle international disputes peacefully."
        },
        {
            "start": "1935",
            "title": "Nuremberg Laws Enacted",
            "description": "Nazi Germany stripped Jews of full citizenship and prohibited marriage or sexual relations between Jews and people classified as German-blooded."
        },
        {
            "start": "1941",
            "title": "Atlantic Charter",
            "description": "Franklin Roosevelt and Winston Churchill issued a joint statement endorsing no territorial aggrandizement, self-determination, open trade, collective security, and postwar peace."
        },
        {
            "start": "1944",
            "title": "Bretton Woods Institutions Planned",
            "description": "Delegates from forty-four Allied countries designed a postwar monetary and financial order, including the IMF and the International Bank for Reconstruction and Development."
        },
        {
            "start": "1945-06-26",
            "title": "United Nations Charter Signed",
            "description": "Representatives of fifty countries signed the UN Charter in San Francisco, establishing organs including the General Assembly, Security Council, and International Court of Justice."
        },
        {
            "start": "1945-10-24",
            "title": "United Nations Formally Established",
            "description": "The UN Charter entered into force after ratification by the required states, formally creating the United Nations as a global intergovernmental organization."
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "Nuremberg Trials",
            "description": "An Allied international tribunal tried leading Nazi officials for war crimes, crimes against peace, and crimes against humanity, asserting individual criminal responsibility.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "International Military Tribunal for the Far East",
            "description": "The Allied tribunal in Tokyo tried senior Japanese wartime leaders for planning aggressive war and for war crimes and crimes against humanity.",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "General Agreement on Tariffs and Trade",
            "description": "Twenty-three countries signed an agreement using tariff concessions, most-favored-nation treatment, and multilateral negotiations to structure postwar trade."
        },
        {
            "start": "1948-12-09",
            "title": "Genocide Convention Adopted",
            "description": "The UN General Assembly defined acts intended to destroy national, ethnic, racial, or religious groups as an international crime and required prevention and punishment."
        },
        {
            "start": "1948-12-10",
            "title": "Universal Declaration of Human Rights Adopted",
            "description": "The UN General Assembly adopted thirty articles setting out universal rights to life, liberty, equality, expression, education, work, social security, and more."
        },
        {
            "start": "1949",
            "title": "Geneva Conventions Revised and Expanded",
            "description": "States adopted four conventions protecting wounded and sick forces on land and sea, prisoners of war, and civilians during armed conflict."
        },
        {
            "start": "1949",
            "title": "North Atlantic Treaty Organization Established",
            "description": "The United States, Canada, and Western European states signed a treaty treating an armed attack on one as an attack on all and formed NATO."
        },
        {
            "start": "1950",
            "title": "European Convention on Human Rights Signed",
            "description": "Council of Europe states signed a convention protecting life, liberty, fair trial, privacy, expression, and other rights through an international enforcement system."
        },
        {
            "start": "1951",
            "title": "Refugee Convention Adopted",
            "description": "The convention defined refugee status, specified state obligations, and established the principle of non-refoulement to places of persecution."
        },
        {
            "start": "1955",
            "title": "Warsaw Pact Established",
            "description": "The Soviet Union and Eastern European socialist states formed a collective-defense alliance with a unified military command in opposition to NATO."
        },
        {
            "start": "1957",
            "title": "Treaties of Rome",
            "description": "Six Western European countries created the European Economic Community and Euratom, aiming to remove internal trade barriers and build a common market."
        },
        {
            "start": "1959",
            "title": "European Court of Human Rights Established",
            "description": "The court was established in Strasbourg to hear applications alleging that member states had violated the European Convention on Human Rights."
        },
        {
            "start": "1960-12-14",
            "title": "Declaration on the Granting of Independence to Colonial Countries and Peoples",
            "description": "The UN General Assembly declared that colonial rule should end rapidly, affirmed self-determination, and called for power to be transferred to colonial peoples."
        },
        {
            "start": "1963",
            "title": "Organization of African Unity Established",
            "description": "Thirty-two independent African states created the OAU in Addis Ababa to coordinate decolonization, uphold existing borders, and promote cooperation."
        },
        {
            "start": "1964",
            "title": "United States Civil Rights Act",
            "description": "U.S. law prohibited discrimination in public accommodations and employment based on race, color, religion, sex, or national origin and strengthened school desegregation enforcement."
        },
        {
            "start": "1965",
            "title": "United States Voting Rights Act",
            "description": "The United States banned literacy tests and other discriminatory voting barriers and authorized federal oversight in jurisdictions with histories of suppression."
        },
        {
            "start": "1965",
            "title": "International Convention on the Elimination of All Forms of Racial Discrimination",
            "description": "The UN convention required states to prohibit racial discrimination, remove discriminatory laws, and provide equal legal protection to all."
        },
        {
            "start": "1966",
            "title": "International Covenants on Human Rights Adopted",
            "description": "The UN adopted covenants on civil and political rights and on economic, social, and cultural rights, turning many declared rights into treaty obligations."
        },
        {
            "start": "1967",
            "title": "Association of Southeast Asian Nations Established",
            "description": "Indonesia, Malaysia, the Philippines, Singapore, and Thailand signed the Bangkok Declaration, creating ASEAN to promote regional cooperation and stability."
        },
        {
            "start": "1968",
            "title": "Nuclear Non-Proliferation Treaty Opened for Signature",
            "description": "The treaty distinguished nuclear-weapon and non-nuclear-weapon states, requiring nonproliferation safeguards while promoting peaceful nuclear use and disarmament."
        },
        {
            "start": "1972",
            "title": "United Nations Conference on the Human Environment",
            "description": "States held the first major global environmental conference in Stockholm, adopted principles and an action plan, and led to the creation of UNEP."
        },
        {
            "start": "1975",
            "title": "Helsinki Final Act",
            "description": "European states, the United States, and Canada affirmed territorial integrity, sovereign equality, human-rights commitments, and East–West economic and human contacts."
        },
        {
            "start": "1979",
            "title": "Convention on the Elimination of All Forms of Discrimination against Women",
            "description": "The UN convention required states to eliminate discrimination against women in politics, education, employment, health care, marriage, and family life."
        },
        {
            "start": "1981",
            "title": "African Charter on Human and Peoples' Rights Adopted",
            "description": "The OAU adopted a regional charter covering individual rights, collective peoples' rights, and duties owed by individuals to family and society."
        },
        {
            "start": "1982",
            "title": "United Nations Convention on the Law of the Sea Opened for Signature",
            "description": "The convention comprehensively regulated territorial seas, exclusive economic zones, continental shelves, navigation, marine resources, and dispute settlement."
        },
        {
            "start": "1987",
            "title": "Montreal Protocol Adopted",
            "description": "States agreed to phase out chlorofluorocarbons and other ozone-depleting substances, with later amendments expanding controls and reduction schedules."
        },
        {
            "start": "1989",
            "title": "Convention on the Rights of the Child Adopted",
            "description": "The UN convention recognized children's rights to survival, development, protection, and participation, requiring their best interests to guide decisions."
        },
        {
            "start": "1990",
            "title": "Americans with Disabilities Act Signed",
            "description": "U.S. law prohibited disability discrimination in employment, public services, public accommodations, and communications and required reasonable accessibility measures."
        },
        {
            "start": "1991",
            "title": "START I Signed",
            "description": "The United States and Soviet Union agreed to reduce strategic nuclear warheads and delivery systems under data exchanges, inspections, and verification measures."
        },
        {
            "start": "1992",
            "title": "Rio Earth Summit",
            "description": "Leaders from more than one hundred states adopted the Rio Declaration and Agenda 21 and opened climate and biodiversity conventions for signature."
        },
        {
            "start": "1992",
            "title": "Maastricht Treaty Signed",
            "description": "European Community members agreed to create the European Union, advance economic and monetary union, and broaden cooperation in foreign affairs, justice, and citizenship."
        },
        {
            "start": "1993-11-01",
            "title": "European Union Formally Established",
            "description": "The Maastricht Treaty entered into force, placing the European Communities within the European Union and introducing EU citizenship and new fields of cooperation."
        },
        {
            "start": "1994",
            "title": "South Africa Ends Apartheid and Holds Democratic Elections",
            "description": "South Africa held its first national election open to all races; the African National Congress won and Nelson Mandela became president."
        },
        {
            "start": "1995-01-01",
            "title": "World Trade Organization Established",
            "description": "The Marrakesh Agreement created the WTO, replacing the GATT framework with rules and dispute settlement covering goods, services, and intellectual property."
        },
        {
            "start": "1997",
            "title": "Kyoto Protocol Adopted",
            "description": "Parties to the UN climate convention adopted legally binding greenhouse-gas reduction targets for most industrialized countries."
        },
        {
            "start": "1998",
            "title": "Rome Statute of the International Criminal Court Adopted",
            "description": "States adopted a statute creating a permanent International Criminal Court to try genocide, crimes against humanity, war crimes, and aggression."
        },
        {
            "start": "2000",
            "title": "Millennium Development Goals Adopted",
            "description": "UN members adopted eight goals aimed at reducing extreme poverty, improving education and health, and strengthening global partnership by 2015."
        },
        {
            "start": "2002-07-01",
            "title": "International Criminal Court Begins Jurisdiction",
            "description": "The Rome Statute entered into force, enabling the ICC to investigate and prosecute qualifying core international crimes committed thereafter."
        },
        {
            "start": "2005",
            "title": "UN World Summit Endorses the Responsibility to Protect",
            "description": "World leaders affirmed that states must protect populations from genocide, war crimes, ethnic cleansing, and crimes against humanity, with collective action when states fail."
        },
        {
            "start": "2006",
            "title": "Convention on the Rights of Persons with Disabilities Adopted",
            "description": "The UN convention adopted a rights-based approach to disability, requiring equality, accessibility, independent living, and full social participation."
        },
        {
            "start": "2007",
            "title": "UN Declaration on the Rights of Indigenous Peoples Adopted",
            "description": "The UN declaration affirmed Indigenous peoples' rights to self-determination, lands and resources, culture and language, and free, prior, and informed consent."
        },
        {
            "start": "2015",
            "title": "Sustainable Development Goals Adopted",
            "description": "UN members adopted the 2030 Agenda with seventeen goals covering poverty, health, education, equality, climate, peace, and sustainable economies."
        },
        {
            "start": "2015-12-12",
            "title": "Paris Agreement Adopted",
            "description": "Countries agreed to submit and strengthen national climate targets, hold warming well below 2°C, and pursue efforts to limit it to 1.5°C."
        },
        {
            "start": "2016",
            "title": "Paris Agreement Enters into Force",
            "description": "After meeting its ratification threshold, the agreement entered into force and parties began operating its transparency, stocktake, and nationally determined contribution system."
        },
        {
            "start": "2018",
            "title": "Global Compact for Migration Adopted",
            "description": "UN members adopted a nonbinding cooperation framework on legal pathways, border management, migrant labor protection, information sharing, and return arrangements."
        },
        {
            "start": "2021",
            "title": "Treaty on the Prohibition of Nuclear Weapons Enters into Force",
            "description": "The treaty entered into force, prohibiting parties from developing, testing, producing, possessing, using, or threatening nuclear weapons and requiring victim assistance."
        }
    ]
};

// Contemporary world
var tl_contemporary = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1945-08-06",
            "title": "Atomic Bombing of Hiroshima",
            "description": "A U.S. B-29 dropped the uranium bomb Little Boy on Hiroshima, causing mass death and destruction through the blast, fires, and radiation."
        },
        {
            "start": "1945-08-09",
            "title": "Atomic Bombing of Nagasaki",
            "description": "A U.S. B-29 dropped the plutonium bomb Fat Man on Nagasaki, devastating the Urakami district and causing extensive immediate and radiation-related casualties."
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "Berlin Blockade and Airlift",
            "description": "The Soviet Union blocked land and water access to West Berlin, while the Western Allies supplied food, fuel, and other necessities by continuous airlift until the blockade ended.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "Nakba and Mass Palestinian Displacement",
            "description": "During the 1948 war, hundreds of thousands of Palestinians fled or were expelled from their homes, many villages were depopulated or destroyed, and a lasting refugee crisis emerged."
        },
        {
            "start": "1953",
            "title": "Stalin's Death and Soviet Leadership Transition",
            "description": "After Stalin died, Malenkov, Beria, Khrushchev, and others competed and reorganized power; a brief collective leadership gave way to Khrushchev's ascendancy."
        },
        {
            "start": "1954",
            "title": "Brown v. Board of Education",
            "description": "The U.S. Supreme Court unanimously ruled that racial segregation in public schools violated equal protection, rejecting “separate but equal” in education."
        },
        {
            "start": "1955",
            "title": "Montgomery Bus Boycott",
            "description": "After Rosa Parks's arrest, Black residents of Montgomery boycotted segregated buses until court rulings ended segregation on the city's transit system."
        },
        {
            "start": "1956",
            "title": "Khrushchev's Secret Speech and De-Stalinization",
            "description": "Khrushchev denounced Stalin's personality cult, purges, and abuses in a closed speech to the Twentieth Party Congress, initiating wider de-Stalinization."
        },
        {
            "start": "1957",
            "title": "Sputnik Opens the Space Age",
            "description": "The Soviet Union launched Sputnik 1, the first artificial Earth satellite; its radio signal was heard worldwide and accelerated the U.S.–Soviet space race."
        },
        {
            "start": "1959",
            "title": "Dalai Lama Leaves Tibet",
            "description": "During the Lhasa uprising and Chinese military suppression, the Fourteenth Dalai Lama crossed the Himalayas into India and later established an exile administration."
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "Berlin Wall",
            "description": "East Germany sealed the border between East and West Berlin with walls, wire, and guard systems to stop emigration through West Berlin; the barrier remained until 1989.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "Non-Aligned Movement Established",
            "description": "Leaders from Asia, Africa, and elsewhere met in Belgrade for the first summit, seeking independence from U.S. and Soviet military blocs and cooperation on decolonization and development."
        },
        {
            "start": "1963-08-28",
            "title": "March on Washington",
            "description": "About 250,000 people marched in Washington for jobs and freedom, demanding civil-rights legislation and economic equality; Martin Luther King Jr. delivered his “I Have a Dream” speech."
        },
        {
            "start": "1963-11-22",
            "title": "Assassination of John F. Kennedy",
            "description": "President John F. Kennedy was shot and killed while riding in a motorcade in Dallas, and Vice President Lyndon Johnson was sworn in that day."
        },
        {
            "start": "1964",
            "title": "China's First Nuclear Test",
            "description": "China detonated its first atomic device, Project 596, at Lop Nur in Xinjiang, becoming the fifth state to test a nuclear weapon."
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "China's Cultural Revolution",
            "description": "Mao Zedong launched a political campaign in which Red Guards and rival factions attacked alleged bourgeois elements and traditional culture, persecuting millions and disrupting education and government.",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "First Human Moon Landing",
            "description": "Apollo 11's lunar module landed in the Sea of Tranquility; Neil Armstrong and Buzz Aldrin walked on the Moon while Michael Collins remained in lunar orbit."
        },
        {
            "start": "1971",
            "title": "People's Republic of China Takes China's UN Seat",
            "description": "The UN General Assembly adopted Resolution 2758, recognizing the People's Republic of China as China's representative and removing the Republic of China delegation."
        },
        {
            "start": "1972",
            "title": "U.S.–China Rapprochement",
            "description": "Richard Nixon visited Beijing, met Mao Zedong and Zhou Enlai, and issued the Shanghai Communiqué, opening sustained official relations despite acknowledged differences."
        },
        {
            "start": "1973",
            "title": "Chilean Military Coup",
            "description": "The armed forces led by Augusto Pinochet overthrew Salvador Allende's government, bombed the presidential palace, and established a military junta after Allende's death."
        },
        {
            "start": "1974",
            "title": "Portugal's Carnation Revolution",
            "description": "Junior officers carried out an almost bloodless coup that ended the Estado Novo dictatorship; civilians placed carnations in soldiers' rifles as democratization and decolonization began."
        },
        {
            "start": "1975",
            "title": "Fall of Saigon",
            "description": "North Vietnamese forces entered Saigon, the South Vietnamese government surrendered, and U.S. personnel and some Vietnamese were evacuated, ending the war's main military phase."
        },
        {
            "start": "1976",
            "title": "Mao Zedong's Death and the End of the Cultural Revolution Era",
            "description": "Soon after Mao Zedong died, the Gang of Four was arrested, bringing the decade-long Cultural Revolution mobilization to an end and opening a leadership transition."
        },
        {
            "start": "1978",
            "title": "Camp David Accords",
            "description": "Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin, mediated by U.S. President Jimmy Carter, agreed on frameworks for Egyptian–Israeli peace and Palestinian autonomy."
        },
        {
            "start": "1979",
            "title": "Egypt–Israel Peace Treaty",
            "description": "Egypt and Israel formally ended their state of war; Israel agreed to withdraw from Sinai in stages, and the two countries established diplomatic relations and security arrangements."
        },
        {
            "start": "1979",
            "title": "Soviet Invasion of Afghanistan",
            "description": "Soviet forces entered Afghanistan, removed and killed Hafizullah Amin, installed Babrak Karmal, and began a prolonged war against externally supported mujahideen."
        },
        {
            "start": "1980",
            "title": "Poland's Solidarity Trade Union Established",
            "description": "Strikes at the Gdańsk Shipyard forced an agreement allowing workers to establish Solidarity, the first large legal independent trade union in the Soviet bloc."
        },
        {
            "start": "1985",
            "title": "Gorbachev Begins Perestroika and Glasnost",
            "description": "After becoming Soviet leader, Mikhail Gorbachev pursued economic restructuring, limited market reform, greater openness, and reduced rigidity in party and foreign policy."
        },
        {
            "start": "1986",
            "title": "Philippine People Power Revolution",
            "description": "Mass nonviolent demonstrations and military defections forced Ferdinand Marcos into exile, allowing Corazon Aquino to assume the presidency and ending his authoritarian rule."
        },
        {
            "start": "1987",
            "title": "First Palestinian Intifada Begins",
            "description": "Palestinians in Gaza and the West Bank began strikes, demonstrations, boycotts, and stone-throwing protests against Israeli occupation, launching a years-long uprising."
        },
        {
            "start": "1988",
            "title": "Iran–Iraq Ceasefire",
            "description": "Iran and Iraq accepted UN Security Council Resolution 598 and halted major combat, ending eight years of war without a clear victor."
        },
        {
            "start": "1989-11-09",
            "title": "Fall of the Berlin Wall",
            "description": "After an East German official mistakenly announced that new travel rules took immediate effect, crowds overwhelmed checkpoints, guards opened the crossings, and people began dismantling the wall."
        },
        {
            "start": "1990",
            "title": "Nelson Mandela Released",
            "description": "South Africa released Nelson Mandela after twenty-seven years in prison and unbanned major political organizations, opening negotiations to end apartheid."
        },
        {
            "start": "1991",
            "title": "Operation Desert Storm",
            "description": "A U.S.-led coalition used a major air campaign followed by a ground offensive to expel Iraqi forces that had occupied Kuwait."
        },
        {
            "start": "1991",
            "title": "Dissolution of the Warsaw Pact",
            "description": "After communist governments fell across Eastern Europe, members ended the unified military structure and formally dissolved the Warsaw Pact in Prague."
        },
        {
            "start": "1993",
            "title": "Oslo Accords",
            "description": "Israel and the PLO recognized each other and agreed to interim Palestinian self-government in parts of Gaza and the West Bank, postponing final-status issues."
        },
        {
            "start": "1994",
            "title": "Rwandan Genocide and International Failure",
            "description": "After the president's plane was shot down, extremist forces systematically murdered Tutsi and moderate Hutu people over roughly one hundred days while outside powers failed to intervene effectively."
        },
        {
            "start": "1995",
            "title": "Dayton Accords End the Bosnian War",
            "description": "Bosnian, Croatian, and Serbian leaders agreed to preserve Bosnia and Herzegovina as one state divided into two main entities under international peace implementation."
        },
        {
            "start": "1997",
            "title": "Asian Financial Crisis Spreads",
            "description": "After Thailand abandoned its currency peg, devaluations, capital flight, and banking and corporate debt crises spread rapidly to Indonesia, South Korea, and other Asian economies."
        },
        {
            "start": "1998",
            "title": "Belfast Agreement",
            "description": "The British and Irish governments and major Northern Irish parties agreed on power-sharing institutions, cross-border cooperation, and disarmament arrangements to end the Troubles."
        },
        {
            "start": "1999",
            "title": "NATO Intervention in Kosovo",
            "description": "As fighting between Yugoslav forces and Kosovo Albanian insurgents intensified, NATO launched an air campaign without explicit Security Council authorization; Yugoslav forces later withdrew under an international arrangement."
        },
        {
            "start": "2000",
            "title": "Second Palestinian Intifada Begins",
            "description": "After Ariel Sharon visited the Temple Mount/Haram al-Sharif, protests escalated into years of Palestinian attacks and Israeli military operations with heavy casualties."
        },
        {
            "start": "2001",
            "title": "NATO Invokes Article 5 after September 11",
            "description": "After the September 11 attacks, NATO invoked collective defense for the first time and provided the United States with airborne warning, maritime patrol, and other support."
        },
        {
            "start": "2003",
            "title": "Global Protests against the Iraq War",
            "description": "Before the U.S.-led invasion of Iraq, mass demonstrations in hundreds of cities opposed launching the war without broader international authorization."
        },
        {
            "start": "2004",
            "title": "Indian Ocean Tsunami Prompts a Global Humanitarian Response",
            "description": "A massive earthquake off Sumatra generated a transoceanic tsunami that devastated Indonesia, Sri Lanka, India, Thailand, and other areas, prompting an enormous international relief effort."
        },
        {
            "start": "2005",
            "title": "London Bombings",
            "description": "Four suicide bombers attacked three London Underground trains and a bus, killing fifty-two passengers and injuring hundreds."
        },
        {
            "start": "2008",
            "title": "Barack Obama Elected the First African American U.S. President",
            "description": "Democrat Barack Obama defeated John McCain during the financial crisis and became the first African American elected president of the United States."
        },
        {
            "start": "2008",
            "title": "Global Financial System Enters Severe Crisis",
            "description": "The U.S. housing collapse and mortgage losses brought down Lehman Brothers and froze credit markets, prompting bank rescues and extraordinary monetary and fiscal action worldwide."
        },
        {
            "start": "2010",
            "title": "Haiti Earthquake Triggers Massive International Relief",
            "description": "A shallow earthquake near Port-au-Prince collapsed homes and government buildings, killed or injured hundreds of thousands, displaced many more, and drew a massive international relief response."
        },
        {
            "start": "2011",
            "title": "Fukushima Nuclear Accident Reshapes Energy Debate",
            "description": "The earthquake and tsunami cut power and cooling at Fukushima Daiichi, causing core meltdowns and radioactive releases from multiple reactors and forcing widespread evacuation."
        },
        {
            "start": "2011",
            "title": "Osama bin Laden Killed",
            "description": "U.S. special operations forces raided a compound in Abbottabad, Pakistan, killed al-Qaeda leader Osama bin Laden, and seized documents and electronic devices."
        },
        {
            "start": "2013",
            "title": "Edward Snowden Reveals Surveillance Programs",
            "description": "NSA contractor Edward Snowden gave classified documents to journalists, exposing bulk telephone-metadata collection and large-scale internet surveillance programs."
        },
        {
            "start": "2014",
            "title": "West African Ebola Emergency",
            "description": "Ebola spread extensively through Guinea, Liberia, and Sierra Leone, overwhelming health systems and prompting WHO to declare a public health emergency of international concern."
        },
        {
            "start": "2015",
            "title": "European Refugee Crisis Peaks",
            "description": "Wars including Syria's drove large numbers of refugees and migrants across the Mediterranean and Balkan routes into Europe, producing sharp disputes over reception, borders, and asylum."
        },
        {
            "start": "2015",
            "title": "Iran Nuclear Deal",
            "description": "Iran, six powers, and the EU concluded the JCPOA, limiting enrichment, centrifuges, and nuclear stockpiles under inspections in exchange for nuclear-related sanctions relief."
        },
        {
            "start": "2016",
            "title": "United Kingdom European Union Membership Referendum",
            "description": "UK voters chose by roughly 52 to 48 percent to leave the European Union; Prime Minister David Cameron announced his resignation and withdrawal negotiations followed."
        },
        {
            "start": "2016",
            "title": "Failed Coup Attempt in Turkey",
            "description": "Elements of Turkey's military seized bridges, airports, and media outlets in an attempt to overthrow the government, but the coup collapsed after President Erdoğan called supporters into the streets."
        },
        {
            "start": "2018",
            "title": "U.S.–China Trade Conflict Escalates",
            "description": "The United States imposed tariffs on Chinese goods over trade and technology practices; China retaliated, and both sides expanded measures through successive rounds while negotiating."
        },
        {
            "start": "2019",
            "title": "Hong Kong Anti-Extradition Bill Protests",
            "description": "After Hong Kong proposed an extradition-law amendment, mass marches demanded its withdrawal; protests broadened to police accountability and democratic demands and repeatedly turned confrontational."
        },
        {
            "start": "2020",
            "title": "WHO Declares COVID-19 a Pandemic",
            "description": "After sustained community transmission across many countries, WHO characterized COVID-19 as a pandemic, and governments expanded travel restrictions, testing, isolation, and public-health measures."
        },
        {
            "start": "2020",
            "title": "Global Black Lives Matter Protests",
            "description": "After video spread of George Floyd dying during a Minneapolis police arrest, protests against police violence and structural racism erupted across the United States and worldwide."
        },
        {
            "start": "2020",
            "title": "Abraham Accords",
            "description": "With U.S. mediation, Israel normalized relations with the United Arab Emirates and Bahrain; Morocco and Sudan later announced related normalization steps."
        },
        {
            "start": "2021",
            "title": "Attack on the United States Capitol",
            "description": "Supporters of Donald Trump breached the U.S. Capitol as Congress certified the presidential election, forcing lawmakers to evacuate and interrupting the proceeding for several hours."
        },
        {
            "start": "2021",
            "title": "Taliban Returns to Power in Afghanistan",
            "description": "During the U.S. withdrawal, the Taliban rapidly captured provincial capitals and entered Kabul; President Ashraf Ghani fled, the government collapsed, and foreign evacuations began."
        },
        {
            "start": "2021",
            "title": "AUKUS Security Partnership Announced",
            "description": "Australia, the United Kingdom, and the United States announced a security partnership centered on nuclear-powered attack submarines for Australia and cooperation in cyber, AI, and undersea technologies."
        },
        {
            "start": "2022",
            "title": "Global Displacement and Food-Energy Shock after Russia's Invasion",
            "description": "Russia launched a full-scale invasion of Ukraine from multiple directions; Ukraine mobilized and received foreign military support, millions were displaced, and Black Sea food exports and European energy supplies were disrupted."
        },
        {
            "start": "2022",
            "title": "Death of Elizabeth II",
            "description": "Queen Elizabeth II died at Balmoral after a seventy-year reign, and her eldest son succeeded her as King Charles III."
        },
        {
            "start": "2023",
            "title": "Finland Joins NATO",
            "description": "After Russia's full-scale invasion of Ukraine, Finland ended its long-standing military non-alignment, completed ratification, and became NATO's thirty-first member."
        },
        {
            "start": "2023",
            "title": "Israel–Hamas War and Regional Humanitarian Crisis",
            "description": "Hamas and allied militants attacked southern Israel, killing and abducting large numbers of people; Israel then besieged, bombarded, and invaded Gaza, causing severe civilian casualties and displacement."
        },
        {
            "start": "2024",
            "title": "Sweden Joins NATO",
            "description": "Following Russia's invasion of Ukraine, Sweden abandoned long-standing military non-alignment and, after all allies ratified its accession, became NATO's thirty-second member."
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
