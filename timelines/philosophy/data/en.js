var title = "PHILOSOPHY AND SCIENCE DEVELOPMENT TIMELINE";

// Curated global timeline of philosophy and science.
// Every person is placed at the year in which they turned 20, not at birth.
// BCE years use ISO 8601 astronomical numbering: year 0 = 1 BCE; -0001 = 2 BCE.
// Milestone dates are dates of publication, discovery, demonstration, establishment or broad adoption.

// Periods and intellectual contexts
var tl_eras = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Neolithic knowledge transition",
            "description": "Agriculture, settlement, counting, calendrical observation and craft specialization accumulated reproducible practical knowledge.",
            "end": "-3400",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "title": "Axial Age",
            "description": "Major traditions in Greece, India, China and the eastern Mediterranean reframed ethics, reason, nature and political order.",
            "end": "-0199",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0599",
            "title": "Classical natural philosophy and learned medicine",
            "description": "Deductive mathematics, systematic philosophy, astronomy and medical corpora became durable intellectual institutions.",
            "end": "0500",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "title": "Medieval knowledge networks",
            "description": "Indian, Chinese, Islamic, Byzantine and Latin traditions preserved, criticized and extended earlier knowledge.",
            "end": "1450",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1350",
            "title": "Renaissance and global encounter",
            "description": "Humanism, printing, navigation, collecting and artistic anatomy widened the evidence available to inquiry.",
            "end": "1650",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1543",
            "title": "Scientific Revolution",
            "description": "Mathematization, controlled experiment, precision instruments and scientific societies reorganized natural philosophy.",
            "end": "1700",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1680",
            "title": "Enlightenment and classification",
            "description": "Critical reason, public science, encyclopedias, taxonomy, political economy and reform programs expanded.",
            "end": "1800",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1760",
            "title": "Industrial and laboratory science",
            "description": "Energy systems, factories, research universities and professional laboratories linked science to industry and the state.",
            "end": "1914",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1900",
            "title": "Relativity, quantum theory and modern biology",
            "description": "Classical foundations were rebuilt around spacetime, quanta, genes, statistics and instruments.",
            "end": "1945",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "title": "Big science and the information age",
            "description": "Large collaborations, electronics, computation, molecular biology, spaceflight and environmental science transformed research.",
            "end": "2000",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2000",
            "title": "Genomic, networked and AI-accelerated science",
            "description": "High-throughput measurement, global data, genome engineering and machine learning increasingly became scientific infrastructure.",
            "end": "2025",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        }
    ]
};

// Philosophy and philosophy of science
var tl_philosophy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0699",
            "title": "Early Upanishadic philosophy",
            "description": "Indian thinkers explored self, ultimate reality, knowledge, action and liberation.",
            "end": "-0299",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "-0603",
            "title": "Thales of Miletus (c. 624–546 BCE)",
            "description": "Helped replace mythic explanation with natural causes and is associated with early Greek geometry and astronomy."
        },
        {
            "start": "-0599",
            "title": "Ionian natural philosophy",
            "description": "Explanations increasingly appealed to natural substances, patterns and causes rather than divine narratives alone."
        },
        {
            "start": "-0550",
            "title": "Laozi (c. 571–471 BCE)",
            "description": "Traditional founder of Daoism, emphasizing the Dao, naturalness, non-coercive action and limits of language."
        },
        {
            "start": "-0549",
            "title": "Pythagorean school",
            "description": "A community linked proof, number, musical ratios, cosmology and a disciplined way of life."
        },
        {
            "start": "-0542",
            "title": "Gautama Buddha (c. 563–483 BCE)",
            "description": "Developed a practical philosophy of suffering, causation, impermanence, ethics and liberation."
        },
        {
            "start": "-0530",
            "title": "Confucius (c. 551–479 BCE)",
            "description": "Founded a tradition centered on ethical cultivation, ritual, education and responsible government."
        },
        {
            "start": "-0515",
            "title": "Heraclitus (c. 536–476 BCE)",
            "description": "Explored change, opposition and logos, making process central to metaphysics."
        },
        {
            "start": "-0494",
            "title": "Parmenides (c. 515–450 BCE)",
            "description": "Made rigorous argument about being and appearance foundational to metaphysics and logic."
        },
        {
            "start": "-0474",
            "title": "Compilation of the Analects",
            "description": "Layers of teachings formed the core text for Confucian ethics, education and political thought.",
            "end": "-0220",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "-0449",
            "title": "Socrates (c. 470–400 BCE)",
            "description": "Made disciplined questioning, definition and ethical self-examination central to philosophy."
        },
        {
            "start": "-0407",
            "title": "Plato (428–348 BCE)",
            "description": "Founded the Academy and shaped metaphysics, epistemology, ethics, politics and philosophy of mathematics."
        },
        {
            "start": "-0386",
            "title": "Plato founds the Academy",
            "description": "A durable institution joined philosophy, mathematics, education and political reflection."
        },
        {
            "start": "-0374",
            "title": "Plato’s Republic",
            "description": "A foundational investigation of justice, knowledge, education, political order and the relation between appearances and reality."
        },
        {
            "start": "-0363",
            "title": "Aristotle (384–322 BCE)",
            "description": "Systematized logic and investigated nature, causation, biology, ethics and politics."
        },
        {
            "start": "-0351",
            "title": "Mencius (c. 372–290 BCE)",
            "description": "Developed Confucian moral psychology and the doctrine that human nature tends toward goodness."
        },
        {
            "start": "-0348",
            "title": "Zhuangzi (c. 369–286 BCE)",
            "description": "Explored perspective, spontaneity, transformation and skepticism about fixed distinctions."
        },
        {
            "start": "-0334",
            "title": "Aristotle founds the Lyceum",
            "description": "Research, collection, teaching and classification were organized across philosophy and natural history."
        },
        {
            "start": "-0320",
            "title": "Epicurus (341–271 BCE)",
            "description": "Combined atomism with an ethics of tranquility, friendship and freedom from fear."
        },
        {
            "start": "-0313",
            "title": "Zeno of Citium (c. 334–262 BCE)",
            "description": "Founded Stoicism, uniting logic, natural philosophy and virtue ethics."
        },
        {
            "start": "-0305",
            "title": "Epicurus establishes the Garden",
            "description": "Atomistic natural philosophy was tied to a therapeutic ethics of tranquility and friendship."
        },
        {
            "start": "-0299",
            "title": "Stoicism emerges",
            "description": "Logic, cosmology and virtue ethics were integrated into a philosophy of living according to nature."
        },
        {
            "start": "-0085",
            "title": "Cicero (106–43 BCE)",
            "description": "Transmitted Greek philosophy into Latin and shaped republican political thought and natural law."
        },
        {
            "start": "0047",
            "title": "Wang Chong (27–97)",
            "description": "Defended naturalistic and skeptical explanations against superstition in Han China."
        },
        {
            "start": "0150",
            "title": "Madhyamaka philosophy",
            "description": "Nāgārjuna’s arguments developed dependent origination and emptiness as critiques of fixed essence.",
            "end": "0250",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "0170",
            "title": "Nagarjuna (150–250)",
            "description": "Developed Madhyamaka analysis of emptiness, dependence and the limits of conceptual extremes."
        },
        {
            "start": "0224",
            "title": "Plotinus (204–270)",
            "description": "Created the major Neoplatonic synthesis of the One, intellect, soul and emanation."
        },
        {
            "start": "0374",
            "title": "Augustine of Hippo (354–430)",
            "description": "Joined Christian theology with Platonism and transformed theories of time, will and history."
        },
        {
            "start": "0497",
            "title": "Boethius (477–524)",
            "description": "Transmitted ancient logic and philosophy to medieval Latin Europe."
        },
        {
            "start": "0821",
            "title": "Al-Kindi (801–873)",
            "description": "Integrated Greek philosophy with Arabic-Islamic intellectual culture and promoted mathematical science."
        },
        {
            "start": "0890",
            "title": "Al-Farabi (870–950)",
            "description": "Systematized logic, political philosophy and the classification of sciences."
        },
        {
            "start": "1000",
            "title": "Avicenna (980–1037)",
            "description": "Created influential systems of metaphysics, logic, natural philosophy and medicine."
        },
        {
            "start": "1078",
            "title": "Al-Ghazali (1058–1111)",
            "description": "Critiqued philosophical necessity while reshaping Islamic theology, ethics and epistemology."
        },
        {
            "start": "1146",
            "title": "Averroes (1126–1198)",
            "description": "Defended Aristotelian philosophy and influenced medieval Jewish, Islamic and Christian thought."
        },
        {
            "start": "1150",
            "title": "Zhu Xi (1130–1200)",
            "description": "Systematized Neo-Confucian metaphysics, ethics, education and textual interpretation."
        },
        {
            "start": "1158",
            "title": "Maimonides (1138–1204)",
            "description": "Reconciled Aristotelian reasoning with Jewish law and theology."
        },
        {
            "start": "1239",
            "title": "Roger Bacon (1219–1292)",
            "description": "Argued for mathematics, experiment and linguistic study in natural philosophy."
        },
        {
            "start": "1245",
            "title": "Thomas Aquinas (1225–1274)",
            "description": "Produced the central scholastic synthesis of Aristotelian philosophy and Christian theology."
        },
        {
            "start": "1265",
            "title": "Aquinas’s Summa Theologiae",
            "description": "A mature scholastic architecture integrated logic, Aristotelian philosophy, natural law and Christian theology.",
            "end": "1274",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1307",
            "title": "William of Ockham (1287–1347)",
            "description": "Developed nominalism and methodological parsimony associated with Ockham’s razor."
        },
        {
            "start": "1352",
            "title": "Ibn Khaldun (1332–1406)",
            "description": "Pioneered systematic explanation of social cohesion, states, economies and historical change."
        },
        {
            "start": "1377",
            "title": "Ibn Khaldun’s Muqaddimah",
            "description": "Historical explanation was grounded in social organization, economy, environment, power and group solidarity."
        },
        {
            "start": "1581",
            "title": "Francis Bacon (1561–1626)",
            "description": "Promoted organized empirical inquiry, induction and the social project of useful knowledge."
        },
        {
            "start": "1608",
            "title": "Thomas Hobbes (1588–1679)",
            "description": "Developed materialist psychology and a contract theory of political authority."
        },
        {
            "start": "1616",
            "title": "René Descartes (1596–1650)",
            "description": "Made methodic doubt, analytic geometry and mechanistic explanation central to modern thought."
        },
        {
            "start": "1620",
            "title": "Bacon’s Novum Organum",
            "description": "A program of induction, organized observation and correction of cognitive “idols” reframed scientific method."
        },
        {
            "start": "1637",
            "title": "Descartes’ Discourse on Method",
            "description": "Methodic doubt, analytic decomposition and mathematical clarity became a manifesto for modern inquiry."
        },
        {
            "start": "1641",
            "title": "Descartes’ Meditations",
            "description": "The work established a modern agenda around certainty, mind-body dualism and the foundations of knowledge."
        },
        {
            "start": "1651",
            "title": "Hobbes’ Leviathan",
            "description": "A mechanistic account of persons supported a contract theory of sovereign political order."
        },
        {
            "start": "1652",
            "title": "Baruch Spinoza (1632–1677)",
            "description": "Built a rigorous monist system linking nature, mind, ethics and freedom."
        },
        {
            "start": "1652",
            "title": "John Locke (1632–1704)",
            "description": "Shaped empiricism, theories of personal identity, rights and constitutional government."
        },
        {
            "start": "1677",
            "title": "Spinoza’s Ethics",
            "description": "A geometric-style monist system treated God or Nature, mind, emotion and freedom as one causal order."
        },
        {
            "start": "1689",
            "title": "Locke’s Essay Concerning Human Understanding",
            "description": "A major empiricist account examined ideas, experience, knowledge, probability and personal identity."
        },
        {
            "start": "1705",
            "title": "George Berkeley (1685–1753)",
            "description": "Developed immaterialism and influential arguments about perception and representation."
        },
        {
            "start": "1731",
            "title": "David Hume (1711–1776)",
            "description": "Radicalized empiricism and analyzed causation, induction, self and morality."
        },
        {
            "start": "1732",
            "title": "Jean-Jacques Rousseau (1712–1778)",
            "description": "Reframed freedom, inequality, political legitimacy, education and civilization."
        },
        {
            "start": "1739",
            "title": "Hume’s Treatise of Human Nature",
            "description": "A naturalistic science of mind analyzed causation, belief, identity, passion and morality.",
            "end": "1740",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1743",
            "title": "Adam Smith (1723–1790)",
            "description": "Integrated moral psychology, institutions, division of labor and political economy."
        },
        {
            "start": "1744",
            "title": "Immanuel Kant (1724–1804)",
            "description": "Transformed epistemology, metaphysics, ethics, aesthetics and philosophy of science."
        },
        {
            "start": "1768",
            "title": "Jeremy Bentham (1748–1832)",
            "description": "Systematized utilitarian ethics and reform-oriented analysis of law and institutions."
        },
        {
            "start": "1776",
            "title": "Smith’s Wealth of Nations",
            "description": "Division of labor, markets and institutions were analyzed as an evolving system of political economy."
        },
        {
            "start": "1781",
            "title": "Kant’s Critique of Pure Reason",
            "description": "A transcendental account redefined experience, causality, objectivity and the limits of metaphysics."
        },
        {
            "start": "1789",
            "title": "Bentham’s Principles of Morals and Legislation",
            "description": "Utility was proposed as a calculable criterion for ethics, law and institutional reform."
        },
        {
            "start": "1790",
            "title": "G. W. F. Hegel (1770–1831)",
            "description": "Built a historical and dialectical system of mind, freedom, society and knowledge."
        },
        {
            "start": "1807",
            "title": "Hegel’s Phenomenology of Spirit",
            "description": "Consciousness, recognition, history and freedom were presented as a dialectical development."
        },
        {
            "start": "1818",
            "title": "Auguste Comte (1798–1857)",
            "description": "Founded positivism and sociology as a program of systematic social science."
        },
        {
            "start": "1826",
            "title": "John Stuart Mill (1806–1873)",
            "description": "Advanced logic, scientific method, liberty, utilitarianism and political economy."
        },
        {
            "start": "1838",
            "title": "Karl Marx (1818–1883)",
            "description": "Developed a materialist critique of capitalism, class and historical change."
        },
        {
            "start": "1843",
            "title": "Mill’s System of Logic",
            "description": "Induction, causal inference and the methods of science were systematically analyzed."
        },
        {
            "start": "1859",
            "title": "Mill’s On Liberty",
            "description": "Individual liberty, open discussion and experiments in living were defended as conditions of social progress."
        },
        {
            "start": "1859",
            "title": "Charles Sanders Peirce (1839–1914)",
            "description": "Founded pragmatism and modern semiotics and advanced abductive scientific reasoning."
        },
        {
            "start": "1862",
            "title": "William James (1842–1910)",
            "description": "Developed pragmatism and functional psychology with close attention to experience."
        },
        {
            "start": "1864",
            "title": "Friedrich Nietzsche (1844–1900)",
            "description": "Critiqued morality, metaphysics and culture through genealogy and perspectivism."
        },
        {
            "start": "1867",
            "title": "Marx publishes Capital, Volume I",
            "description": "Capital accumulation, labor, value and crisis were analyzed as structural historical processes."
        },
        {
            "start": "1878",
            "title": "Peirce’s pragmatic maxim",
            "description": "The meaning of a concept was tied to conceivable practical consequences and habits of action."
        },
        {
            "start": "1879",
            "title": "Edmund Husserl (1859–1938)",
            "description": "Founded phenomenology as a rigorous study of consciousness and intentionality."
        },
        {
            "start": "1887",
            "title": "Nietzsche’s On the Genealogy of Morality",
            "description": "Moral concepts were investigated historically as products of power, psychology and social conflict."
        },
        {
            "start": "1888",
            "title": "W. E. B. Du Bois (1868–1963)",
            "description": "Joined empirical sociology, history and philosophy in analyses of race, power and double consciousness."
        },
        {
            "start": "1892",
            "title": "Bertrand Russell (1872–1970)",
            "description": "Co-founded analytic philosophy and transformed logic, foundations and philosophy of language."
        },
        {
            "start": "1900",
            "title": "Husserl’s Logical Investigations",
            "description": "Phenomenology emerged through analyses of meaning, intentionality, logic and conscious acts.",
            "end": "1901",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1907",
            "title": "William James publishes Pragmatism",
            "description": "Truth and meaning were interpreted through their roles in inquiry, experience and practical consequences."
        },
        {
            "start": "1909",
            "title": "Ludwig Wittgenstein (1889–1951)",
            "description": "Twice reshaped philosophy of language, logic, mind and philosophical method."
        },
        {
            "start": "1909",
            "title": "Martin Heidegger (1889–1976)",
            "description": "Reopened the question of being through phenomenology, temporality and technology critique."
        },
        {
            "start": "1921",
            "title": "Wittgenstein’s Tractatus",
            "description": "Language, logic and world were related through a picture theory that shaped logical positivism and analytic philosophy."
        },
        {
            "start": "1922",
            "title": "Karl Popper (1902–1994)",
            "description": "Made falsifiability, conjecture and criticism central to philosophy of science."
        },
        {
            "start": "1924",
            "title": "Vienna Circle forms",
            "description": "Logical analysis, empiricism and the unity of science became an organized philosophy-of-science program."
        },
        {
            "start": "1925",
            "title": "Jean-Paul Sartre (1905–1980)",
            "description": "Developed existentialism around freedom, responsibility, consciousness and social commitment."
        },
        {
            "start": "1926",
            "title": "Hannah Arendt (1906–1975)",
            "description": "Analyzed totalitarianism, action, plurality, judgment and the public realm."
        },
        {
            "start": "1928",
            "title": "Simone de Beauvoir (1908–1986)",
            "description": "Joined existential ethics with a foundational analysis of gender and oppression."
        },
        {
            "start": "1928",
            "title": "W. V. O. Quine (1908–2000)",
            "description": "Challenged the analytic-synthetic distinction and naturalized epistemology."
        },
        {
            "start": "1934",
            "title": "Popper’s Logic of Scientific Discovery",
            "description": "Falsifiability and critical testing were proposed as central norms of empirical science."
        },
        {
            "start": "1941",
            "title": "John Rawls (1921–2002)",
            "description": "Revived systematic political philosophy through justice as fairness."
        },
        {
            "start": "1942",
            "title": "Thomas Kuhn (1922–1996)",
            "description": "Analyzed paradigms, normal science and scientific revolutions as historical processes."
        },
        {
            "start": "1943",
            "title": "Sartre’s Being and Nothingness",
            "description": "Existential phenomenology analyzed consciousness, freedom, bad faith and relations with others."
        },
        {
            "start": "1946",
            "title": "Michel Foucault (1926–1984)",
            "description": "Studied how knowledge, institutions and power produce subjects and regimes of truth."
        },
        {
            "start": "1948",
            "title": "Noam Chomsky (1928–)",
            "description": "Revolutionized linguistics and cognitive science through generative grammar."
        },
        {
            "start": "1949",
            "title": "Beauvoir’s The Second Sex",
            "description": "Gender was analyzed as historically and socially produced rather than merely biologically given."
        },
        {
            "start": "1949",
            "title": "Jürgen Habermas (1929–)",
            "description": "Developed theories of communicative rationality, democracy and the public sphere."
        },
        {
            "start": "1951",
            "title": "Quine’s Two Dogmas of Empiricism",
            "description": "The analytic-synthetic distinction and reductionism were attacked in favor of holistic testing of belief."
        },
        {
            "start": "1953",
            "title": "Amartya Sen (1933–)",
            "description": "Integrated welfare economics, social choice, freedom and the capability approach."
        },
        {
            "start": "1954",
            "title": "Daniel Kahneman (1934–2024)",
            "description": "Established behavioral decision research on heuristics, biases and dual-process cognition."
        },
        {
            "start": "1962",
            "title": "Kuhn’s Structure of Scientific Revolutions",
            "description": "Paradigms, normal science and revolutionary change reframed the history and philosophy of science."
        },
        {
            "start": "1971",
            "title": "Rawls’s A Theory of Justice",
            "description": "The original position and difference principle rebuilt normative political philosophy around fairness."
        },
        {
            "start": "1975",
            "title": "Foucault’s Discipline and Punish",
            "description": "Modern institutions were analyzed as systems that produce disciplined bodies, knowledge and normalized subjects."
        },
        {
            "start": "1981",
            "title": "Habermas’s Theory of Communicative Action",
            "description": "Rationality was reconstructed through communication, mutual understanding and social coordination."
        }
    ]
};

// Mathematics, logic and information
var tl_math_logic = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "Early writing and numerical administration",
            "description": "Mesopotamian writing externalized records, accounts and procedures, enabling durable cumulative knowledge."
        },
        {
            "start": "-1999",
            "title": "Mesopotamian positional mathematics",
            "description": "Sexagesimal place-value calculation supported astronomy, surveying, commerce and sophisticated problem solving."
        },
        {
            "start": "-0549",
            "title": "Pythagoras (c. 570–495 BCE)",
            "description": "Linked number, proof, harmony and cosmology in a tradition that deeply shaped mathematics and philosophy."
        },
        {
            "start": "-0304",
            "title": "Euclid (c. 325–270 BCE)",
            "description": "The Elements became the model of axiomatic organization and deductive proof."
        },
        {
            "start": "-0299",
            "title": "Euclid’s Elements",
            "description": "Definitions, postulates and proofs formed the most influential model of an axiomatic science."
        },
        {
            "start": "-0266",
            "title": "Archimedes (c. 287–212 BCE)",
            "description": "Advanced geometry, statics, hydrostatics and mathematically grounded engineering."
        },
        {
            "start": "-0249",
            "title": "Archimedean mechanics and measurement",
            "description": "Geometric proof was applied to levers, centers of gravity, buoyancy, areas and volumes."
        },
        {
            "start": "0050",
            "title": "The Nine Chapters on the Mathematical Art",
            "description": "Chinese mathematical procedures organized arithmetic, geometry, linear equations and practical administration.",
            "end": "0150",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "0375",
            "title": "Hypatia (355–415)",
            "description": "Alexandrian mathematician and astronomer who preserved and taught advanced Greek science."
        },
        {
            "start": "0496",
            "title": "Aryabhata (476–550)",
            "description": "Advanced Indian mathematics and astronomy, including trigonometry and computational methods."
        },
        {
            "start": "0618",
            "title": "Brahmagupta (598–668)",
            "description": "Gave systematic rules for zero, negative numbers, algebra and astronomy."
        },
        {
            "start": "0628",
            "title": "Brahmagupta formalizes arithmetic with zero",
            "description": "Rules for zero and negative numbers made positional arithmetic more general and algebraic."
        },
        {
            "start": "0800",
            "title": "Muhammad al-Khwarizmi (780–850)",
            "description": "Helped establish algebra and transmitted Hindu-Arabic calculation; “algorithm” derives from his name."
        },
        {
            "start": "0820",
            "title": "Al-Khwarizmi’s algebra",
            "description": "A systematic treatise on equation solving helped establish algebra as a distinct mathematical discipline."
        },
        {
            "start": "1068",
            "title": "Omar Khayyam (1048–1131)",
            "description": "Classified and geometrically solved cubic equations and improved astronomical tables."
        },
        {
            "start": "1190",
            "title": "Fibonacci (1170–1250)",
            "description": "Popularized Hindu-Arabic numerals and commercial arithmetic in Latin Europe."
        },
        {
            "start": "1202",
            "title": "Fibonacci’s Liber Abaci",
            "description": "Hindu-Arabic numerals and efficient algorithms were presented for European commerce and calculation."
        },
        {
            "start": "1340",
            "title": "Madhava and Kerala infinite series",
            "description": "Infinite series for sine, cosine, arctangent and pi anticipated key techniques of analysis.",
            "end": "1400",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "1360",
            "title": "Madhava of Sangamagrama (1340–1425)",
            "description": "Founded the Kerala school tradition of infinite series for trigonometric functions and pi."
        },
        {
            "start": "1521",
            "title": "Gerolamo Cardano (1501–1576)",
            "description": "Advanced algebra, probability and mechanics while documenting solutions of cubic and quartic equations."
        },
        {
            "start": "1627",
            "title": "Pierre de Fermat (1607–1665)",
            "description": "Co-founded analytic geometry, number theory and mathematical probability."
        },
        {
            "start": "1637",
            "title": "Analytic geometry published",
            "description": "Descartes and Fermat connected algebraic equations with geometric curves."
        },
        {
            "start": "1643",
            "title": "Blaise Pascal (1623–1662)",
            "description": "Advanced probability, projective geometry, fluid mechanics and philosophy of belief."
        },
        {
            "start": "1666",
            "title": "Gottfried Wilhelm Leibniz (1646–1716)",
            "description": "Co-invented calculus and developed binary arithmetic, formal logic and a rationalist metaphysics."
        },
        {
            "start": "1684",
            "title": "Leibniz publishes differential calculus",
            "description": "A compact symbolic calculus made rates of change systematically computable."
        },
        {
            "start": "1727",
            "title": "Leonhard Euler (1707–1783)",
            "description": "Unified and expanded analysis, number theory, mechanics, graph theory and mathematical notation."
        },
        {
            "start": "1769",
            "title": "Pierre-Simon Laplace (1749–1827)",
            "description": "Developed celestial mechanics, probability and mathematical determinism."
        },
        {
            "start": "1788",
            "title": "Joseph Fourier (1768–1830)",
            "description": "Created Fourier analysis through a mathematical theory of heat diffusion."
        },
        {
            "start": "1797",
            "title": "Carl Friedrich Gauss (1777–1855)",
            "description": "Made foundational advances across number theory, geometry, statistics, astronomy and geophysics."
        },
        {
            "start": "1865",
            "title": "Georg Cantor (1845–1918)",
            "description": "Created set theory and the mathematics of different sizes of infinity."
        },
        {
            "start": "1868",
            "title": "Gottlob Frege (1848–1925)",
            "description": "Founded modern predicate logic and transformed philosophy of language and mathematics."
        },
        {
            "start": "1879",
            "title": "Frege’s Begriffsschrift",
            "description": "Modern quantificational logic supplied a new formal language for proof and foundations."
        },
        {
            "start": "1882",
            "title": "David Hilbert (1862–1943)",
            "description": "Reshaped geometry, algebra, analysis and the foundations program of mathematics."
        },
        {
            "start": "1902",
            "title": "Emmy Noether (1882–1935)",
            "description": "Transformed abstract algebra and linked physical symmetries to conservation laws."
        },
        {
            "start": "1910",
            "title": "Russell and Whitehead’s Principia Mathematica",
            "description": "A vast logical reconstruction of mathematics crystallized the foundations crisis and analytic philosophy.",
            "end": "1913",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "1926",
            "title": "Kurt Gödel (1906–1978)",
            "description": "Proved incompleteness theorems that transformed logic and the philosophy of mathematics."
        },
        {
            "start": "1931",
            "title": "Gödel incompleteness theorems",
            "description": "Sufficiently powerful formal systems cannot be both complete and internally prove their own consistency."
        },
        {
            "start": "1936",
            "title": "Claude Shannon (1916–2001)",
            "description": "Founded information theory and connected Boolean logic to digital circuits."
        },
        {
            "start": "1948",
            "title": "Shannon’s information theory",
            "description": "Information, entropy, channel capacity and coding were given a quantitative mathematical framework."
        },
        {
            "start": "1951",
            "title": "Roger Penrose (1931–)",
            "description": "Developed geometric methods in relativity, singularity theory and foundational questions of mind and physics."
        }
    ]
};

// Physics, chemistry and materials
var tl_physical_science = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0439",
            "title": "Democritus (c. 460–370 BCE)",
            "description": "Advanced atomism: complex phenomena arise from indivisible atoms moving in void."
        },
        {
            "start": "0985",
            "title": "Ibn al-Haytham (965–1040)",
            "description": "Built a mathematical and experimental theory of vision and optics."
        },
        {
            "start": "1021",
            "title": "Ibn al-Haytham’s Book of Optics",
            "description": "Vision was explained by light entering the eye, supported by geometry, controlled observation and experiment."
        },
        {
            "start": "1584",
            "title": "Galileo Galilei (1564–1642)",
            "description": "Joined experiment, mathematics and instruments to transform mechanics and astronomy."
        },
        {
            "start": "1600",
            "title": "Gilbert’s De Magnete",
            "description": "Systematic experiments treated Earth as a magnet and distinguished magnetism from static electricity."
        },
        {
            "start": "1643",
            "title": "Torricelli’s barometer",
            "description": "A mercury column demonstrated atmospheric pressure and made the vacuum experimentally tractable."
        },
        {
            "start": "1647",
            "title": "Robert Boyle (1627–1691)",
            "description": "Helped establish experimental chemistry and a quantitative law of gases."
        },
        {
            "start": "1649",
            "title": "Christiaan Huygens (1629–1695)",
            "description": "Advanced wave optics, mechanics, probability, timekeeping and planetary astronomy."
        },
        {
            "start": "1655",
            "title": "Robert Hooke (1635–1703)",
            "description": "Made major contributions to microscopy, elasticity, mechanics, astronomy and experimental method."
        },
        {
            "start": "1662",
            "title": "Boyle’s law",
            "description": "Pressure and volume were related quantitatively, exemplifying controlled experimental physics and chemistry."
        },
        {
            "start": "1662",
            "title": "Isaac Newton (1642–1727)",
            "description": "Unified terrestrial and celestial mechanics and transformed optics and mathematics."
        },
        {
            "start": "1676",
            "title": "Rømer estimates the finite speed of light",
            "description": "Timing variations in Jupiter’s moon Io provided the first quantitative evidence that light travels at finite speed."
        },
        {
            "start": "1687",
            "title": "Newton’s Principia",
            "description": "The laws of motion and universal gravitation unified terrestrial mechanics, celestial motion and mathematical prediction."
        },
        {
            "start": "1726",
            "title": "Benjamin Franklin (1706–1790)",
            "description": "Established key concepts of electricity and linked experiment, invention and public institutions."
        },
        {
            "start": "1742",
            "title": "Celsius temperature scale",
            "description": "A reproducible scale tied temperature measurement to fixed physical reference points."
        },
        {
            "start": "1752",
            "title": "Franklin’s lightning experiments",
            "description": "Atmospheric lightning was linked to laboratory electricity, leading to the lightning rod."
        },
        {
            "start": "1763",
            "title": "Antoine Lavoisier (1743–1794)",
            "description": "Founded quantitative chemical analysis and the modern concept of elements and conservation of mass."
        },
        {
            "start": "1786",
            "title": "John Dalton (1766–1844)",
            "description": "Formulated modern chemical atomism and quantitative laws of combining proportions."
        },
        {
            "start": "1789",
            "title": "Lavoisier’s chemical revolution",
            "description": "Quantitative mass balance, oxygen chemistry and a new nomenclature displaced phlogiston theory."
        },
        {
            "start": "1800",
            "title": "Voltaic pile",
            "description": "The first continuous electrical battery enabled controlled electrochemistry and current electricity."
        },
        {
            "start": "1803",
            "title": "Dalton’s atomic theory",
            "description": "Chemical elements were modeled as atoms combining in simple whole-number ratios."
        },
        {
            "start": "1811",
            "title": "Avogadro’s molecular hypothesis",
            "description": "Equal gas volumes at the same conditions were proposed to contain equal numbers of molecules."
        },
        {
            "start": "1811",
            "title": "Michael Faraday (1791–1867)",
            "description": "Discovered electromagnetic induction and introduced field-based physical reasoning."
        },
        {
            "start": "1820",
            "title": "Electromagnetism discovered",
            "description": "Ørsted showed electric current deflecting a compass, linking electricity and magnetism."
        },
        {
            "start": "1824",
            "title": "Carnot’s theory of heat engines",
            "description": "Idealized cycles and efficiency limits laid foundations for thermodynamics."
        },
        {
            "start": "1831",
            "title": "Faraday discovers electromagnetic induction",
            "description": "Changing magnetic fields generated electric current, enabling motors, generators and field theory."
        },
        {
            "start": "1842",
            "title": "Conservation of energy established",
            "description": "Work by Mayer, Joule, Helmholtz and others unified heat, work and diverse physical processes.",
            "end": "1850",
            "isDuration": true,
            "textColor": "black",
            "color": "#00A6A6"
        },
        {
            "start": "1851",
            "title": "James Clerk Maxwell (1831–1879)",
            "description": "Unified electricity, magnetism and light in field equations and advanced statistical physics."
        },
        {
            "start": "1854",
            "title": "Dmitri Mendeleev (1834–1907)",
            "description": "Organized elements periodically and successfully predicted missing elements and properties."
        },
        {
            "start": "1859",
            "title": "J. Willard Gibbs (1839–1903)",
            "description": "Created chemical thermodynamics, phase theory and key methods of statistical mechanics."
        },
        {
            "start": "1864",
            "title": "Ludwig Boltzmann (1844–1906)",
            "description": "Connected thermodynamics to atomic statistics and entropy."
        },
        {
            "start": "1865",
            "title": "Maxwell’s electromagnetic field theory",
            "description": "Field equations showed light to be an electromagnetic wave and unified electricity, magnetism and optics."
        },
        {
            "start": "1869",
            "title": "Mendeleev’s periodic table",
            "description": "Periodic organization exposed regularities and predicted undiscovered elements and their properties."
        },
        {
            "start": "1878",
            "title": "Max Planck (1858–1947)",
            "description": "Introduced energy quanta and initiated quantum theory."
        },
        {
            "start": "1887",
            "title": "Michelson–Morley experiment",
            "description": "A highly sensitive null result challenged ether theories and became central to later relativity debates."
        },
        {
            "start": "1887",
            "title": "Marie Curie (1867–1934)",
            "description": "Pioneered radioactivity research and isolated polonium and radium."
        },
        {
            "start": "1891",
            "title": "Ernest Rutherford (1871–1937)",
            "description": "Established nuclear physics through radioactive decay studies and the nuclear atom."
        },
        {
            "start": "1895",
            "title": "Discovery of X-rays",
            "description": "Röntgen revealed penetrating radiation that transformed imaging, medicine and atomic physics."
        },
        {
            "start": "1896",
            "title": "Discovery of radioactivity",
            "description": "Becquerel found spontaneous penetrating radiation from uranium compounds."
        },
        {
            "start": "1897",
            "title": "Electron discovered",
            "description": "J. J. Thomson identified a subatomic charged particle, showing atoms were divisible."
        },
        {
            "start": "1898",
            "title": "Polonium and radium isolated",
            "description": "The Curies’ work established radioactivity as a property of matter and opened nuclear science."
        },
        {
            "start": "1898",
            "title": "Lise Meitner (1878–1968)",
            "description": "Explained nuclear fission and made foundational contributions to nuclear physics."
        },
        {
            "start": "1899",
            "title": "Albert Einstein (1879–1955)",
            "description": "Recast space, time, gravity, light and statistical physics through relativity and quantum arguments."
        },
        {
            "start": "1900",
            "title": "Planck’s quantum hypothesis",
            "description": "Energy exchange was quantized to explain black-body radiation, initiating quantum theory."
        },
        {
            "start": "1905",
            "title": "Einstein’s annus mirabilis",
            "description": "Papers on light quanta, Brownian motion, special relativity and mass-energy equivalence transformed physics."
        },
        {
            "start": "1905",
            "title": "Niels Bohr (1885–1962)",
            "description": "Developed quantum atomic theory and complementarity."
        },
        {
            "start": "1907",
            "title": "Erwin Schrödinger (1887–1961)",
            "description": "Created wave mechanics and clarified conceptual problems of quantum theory."
        },
        {
            "start": "1911",
            "title": "Rutherford nuclear atom",
            "description": "Scattering experiments showed that most atomic mass and positive charge are concentrated in a tiny nucleus."
        },
        {
            "start": "1911",
            "title": "Superconductivity discovered",
            "description": "Mercury’s electrical resistance vanished at low temperature, revealing a new quantum state of matter."
        },
        {
            "start": "1913",
            "title": "Bohr model of the atom",
            "description": "Quantized electron states explained hydrogen spectra and linked atomic structure to quantum theory."
        },
        {
            "start": "1913",
            "title": "Moseley establishes atomic number",
            "description": "X-ray spectra showed that nuclear charge, not atomic weight, orders the periodic table."
        },
        {
            "start": "1915",
            "title": "General theory of relativity",
            "description": "Gravity became spacetime curvature, yielding new predictions for light, orbits and cosmology."
        },
        {
            "start": "1921",
            "title": "Werner Heisenberg (1901–1976)",
            "description": "Created matrix mechanics and formulated the uncertainty principle."
        },
        {
            "start": "1922",
            "title": "Paul Dirac (1902–1984)",
            "description": "Unified quantum mechanics with special relativity and predicted antimatter."
        },
        {
            "start": "1924",
            "title": "de Broglie matter waves",
            "description": "Wave-particle duality was extended from light to material particles."
        },
        {
            "start": "1925",
            "title": "Matrix mechanics",
            "description": "Heisenberg, Born and Jordan formulated a complete nonclassical mechanics of quantum observables."
        },
        {
            "start": "1926",
            "title": "Schrödinger wave mechanics",
            "description": "A wave equation provided a powerful calculational form of quantum mechanics."
        },
        {
            "start": "1927",
            "title": "Uncertainty principle",
            "description": "Quantum theory placed a fundamental joint limit on certain pairs of physical quantities."
        },
        {
            "start": "1932",
            "title": "Neutron discovered",
            "description": "Chadwick identified the neutral nuclear particle, clarifying isotopes and enabling nuclear reactions."
        },
        {
            "start": "1932",
            "title": "Chien-Shiung Wu (1912–1997)",
            "description": "Performed the decisive experiment demonstrating parity violation in weak interactions."
        },
        {
            "start": "1935",
            "title": "EPR argument and Schrödinger’s cat",
            "description": "Thought experiments exposed tensions over completeness, measurement, entanglement and reality in quantum theory."
        },
        {
            "start": "1938",
            "title": "Nuclear fission discovered and explained",
            "description": "Experiments by Hahn and Strassmann and interpretation by Meitner and Frisch revealed atomic nuclei splitting with vast energy release.",
            "end": "1939",
            "isDuration": true,
            "textColor": "black",
            "color": "#00A6A6"
        },
        {
            "start": "1938",
            "title": "Richard Feynman (1918–1988)",
            "description": "Reformulated quantum electrodynamics and introduced powerful diagrammatic and computational methods."
        },
        {
            "start": "1942-12-02",
            "title": "First controlled nuclear chain reaction",
            "description": "Chicago Pile-1 demonstrated a self-sustaining controlled fission reaction."
        },
        {
            "start": "1948",
            "title": "John Stewart Bell (1928–1990)",
            "description": "Derived Bell’s theorem, making quantum nonlocality experimentally testable."
        },
        {
            "start": "1986",
            "title": "High-temperature superconductivity",
            "description": "Ceramic materials superconducting above previous limits opened a major condensed-matter research field."
        },
        {
            "start": "1995",
            "title": "Bose–Einstein condensate created",
            "description": "Ultracold atoms occupied a shared quantum state visible at macroscopic scale."
        },
        {
            "start": "2004",
            "title": "Graphene isolated",
            "description": "A one-atom-thick carbon sheet displayed exceptional electronic, mechanical and thermal properties."
        },
        {
            "start": "2008",
            "title": "Large Hadron Collider begins operation",
            "description": "The world’s highest-energy collider enabled precision tests of the Standard Model and searches for new physics."
        },
        {
            "start": "2012-07-04",
            "title": "Higgs boson discovered",
            "description": "ATLAS and CMS observed a particle consistent with the Higgs mechanism of the Standard Model."
        },
        {
            "start": "2019",
            "title": "Quantum-computing advantage experiment",
            "description": "A programmable superconducting processor performed a specialized sampling task beyond practical classical replication at the time."
        },
        {
            "start": "2022-12-05",
            "title": "Fusion ignition achieved at NIF",
            "description": "A laser-driven target released more fusion energy than the laser energy delivered to the target, a landmark in inertial confinement."
        }
    ]
};

// Life science and medicine
var tl_life_medicine = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1599",
            "title": "Egyptian medical papyri",
            "description": "Texts such as the Edwin Smith Papyrus recorded diagnoses, injuries and practical treatments alongside ritual medicine."
        },
        {
            "start": "-0449",
            "title": "Hippocratic Corpus",
            "description": "Greek medical writings emphasized case observation, prognosis, environment and natural explanations of illness.",
            "end": "-0349",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "-0439",
            "title": "Hippocrates (c. 460–370 BCE)",
            "description": "Symbolizes a clinical tradition based on observation, prognosis and natural explanations of disease."
        },
        {
            "start": "0149",
            "title": "Galen (129–216)",
            "description": "Integrated anatomy, physiology and medical theory into a system dominant for centuries."
        },
        {
            "start": "0885",
            "title": "Al-Razi (865–925)",
            "description": "Advanced clinical medicine, differential diagnosis, pharmacology and experimental practice."
        },
        {
            "start": "1025",
            "title": "Avicenna’s Canon of Medicine",
            "description": "A comprehensive medical synthesis became a standard reference across Islamic and European institutions."
        },
        {
            "start": "1534",
            "title": "Andreas Vesalius (1514–1564)",
            "description": "Founded modern anatomy through direct human dissection and critical correction of Galen."
        },
        {
            "start": "1543",
            "title": "Vesalius publishes On the Fabric of the Human Body",
            "description": "Direct dissection and precise illustration corrected inherited anatomy and made the body an observational object."
        },
        {
            "start": "1598",
            "title": "William Harvey (1578–1657)",
            "description": "Demonstrated systemic circulation and the heart’s pumping role by quantitative experiment."
        },
        {
            "start": "1628",
            "title": "Harvey demonstrates blood circulation",
            "description": "Quantitative anatomical reasoning showed that the heart drives a closed circulation of blood."
        },
        {
            "start": "1652",
            "title": "Antonie van Leeuwenhoek (1632–1723)",
            "description": "Used powerful single-lens microscopes to reveal microorganisms, sperm cells and blood cells."
        },
        {
            "start": "1665",
            "title": "Hooke’s Micrographia",
            "description": "Microscopic images revealed an unseen world and introduced “cell” into biological description."
        },
        {
            "start": "1674",
            "title": "Leeuwenhoek observes microorganisms",
            "description": "Single-lens microscopy disclosed protozoa, bacteria and microscopic reproductive cells.",
            "end": "1683",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1727",
            "title": "Carl Linnaeus (1707–1778)",
            "description": "Standardized binomial nomenclature and hierarchical biological classification."
        },
        {
            "start": "1727",
            "title": "Georges-Louis Leclerc, Comte de Buffon (1707–1788)",
            "description": "Promoted comparative natural history, deep time and species transformation debates."
        },
        {
            "start": "1735",
            "title": "Linnaeus publishes Systema Naturae",
            "description": "Hierarchical taxonomy and standardized naming made global biodiversity more comparable and communicable."
        },
        {
            "start": "1769",
            "title": "Edward Jenner (1749–1823)",
            "description": "Demonstrated vaccination against smallpox and launched modern immunization."
        },
        {
            "start": "1796",
            "title": "Jenner’s smallpox vaccination",
            "description": "Controlled inoculation with cowpox provided durable protection and a model for immunization."
        },
        {
            "start": "1829",
            "title": "Charles Darwin (1809–1882)",
            "description": "Explained adaptation and biodiversity through evolution by natural selection and common descent."
        },
        {
            "start": "1838",
            "title": "Cell theory formulated",
            "description": "Schleiden and Schwann argued that plants and animals are composed of cells, establishing a common biological unit.",
            "end": "1839",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1840",
            "title": "Florence Nightingale (1820–1910)",
            "description": "Used statistics, sanitation and institutional reform to transform nursing and public health."
        },
        {
            "start": "1842",
            "title": "Gregor Mendel (1822–1884)",
            "description": "Discovered particulate laws of inheritance through controlled breeding experiments."
        },
        {
            "start": "1842",
            "title": "Louis Pasteur (1822–1895)",
            "description": "Established microbial causation, fermentation science, pasteurization and laboratory vaccination."
        },
        {
            "start": "1846",
            "title": "Public demonstration of surgical anesthesia",
            "description": "Ether anesthesia made major surgery less traumatic and enabled modern operative medicine."
        },
        {
            "start": "1847",
            "title": "Semmelweis promotes handwashing",
            "description": "Chlorinated handwashing sharply reduced puerperal fever, anticipating infection control."
        },
        {
            "start": "1854",
            "title": "John Snow maps cholera",
            "description": "Spatial case mapping and a natural experiment linked cholera to contaminated water."
        },
        {
            "start": "1859",
            "title": "Darwin publishes On the Origin of Species",
            "description": "Natural selection and common descent provided a unifying historical explanation of adaptation and biodiversity."
        },
        {
            "start": "1861",
            "title": "Pasteur refutes spontaneous generation",
            "description": "Controlled flask experiments supported biogenesis and strengthened germ-based explanations."
        },
        {
            "start": "1863",
            "title": "Robert Koch (1843–1910)",
            "description": "Identified major pathogens and formalized causal reasoning in infectious disease."
        },
        {
            "start": "1865",
            "title": "Mendel presents laws of inheritance",
            "description": "Quantitative crosses revealed discrete hereditary factors, segregation and independent assortment."
        },
        {
            "start": "1869",
            "title": "Ivan Pavlov (1849–1936)",
            "description": "Established experimental study of conditioned reflexes and physiological regulation."
        },
        {
            "start": "1876",
            "title": "Koch demonstrates Bacillus anthracis causation",
            "description": "A specific microorganism was experimentally linked to a specific disease."
        },
        {
            "start": "1876",
            "title": "Sigmund Freud (1856–1939)",
            "description": "Made the unconscious and conflict central to a systematic theory of mind and therapy."
        },
        {
            "start": "1882",
            "title": "Koch identifies the tuberculosis bacillus",
            "description": "The microbial cause of tuberculosis was isolated and demonstrated."
        },
        {
            "start": "1885",
            "title": "Pasteur’s rabies vaccine",
            "description": "Post-exposure vaccination showed that laboratory attenuation could prevent a lethal infection."
        },
        {
            "start": "1897",
            "title": "Viruses distinguished from bacteria",
            "description": "Filterable infectious agents showed that disease-causing entities existed below bacterial scale."
        },
        {
            "start": "1902",
            "title": "Chromosome theory of inheritance",
            "description": "Sutton and Boveri connected Mendelian factors with the behavior of chromosomes in meiosis.",
            "end": "1903",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1906",
            "title": "Neuron doctrine recognized",
            "description": "Cajal’s cellular view of the nervous system established neurons as discrete signaling units."
        },
        {
            "start": "1921",
            "title": "Insulin isolated and used clinically",
            "description": "Diabetes changed from a rapidly fatal disease to a treatable chronic condition.",
            "end": "1922",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1922",
            "title": "Barbara McClintock (1902–1992)",
            "description": "Discovered transposable genetic elements and dynamic genome regulation."
        },
        {
            "start": "1928",
            "title": "Penicillin observed",
            "description": "Fleming observed antibacterial mold activity, opening the path to antibiotic medicine after later development."
        },
        {
            "start": "1934",
            "title": "Jonas Salk (1914–1995)",
            "description": "Developed the first widely used effective inactivated polio vaccine."
        },
        {
            "start": "1937",
            "title": "Krebs cycle",
            "description": "A central metabolic cycle explained how cells oxidize nutrients to transfer energy."
        },
        {
            "start": "1938",
            "title": "Frederick Sanger (1918–2013)",
            "description": "Created foundational methods for sequencing proteins and DNA."
        },
        {
            "start": "1940",
            "title": "Rosalind Franklin (1920–1958)",
            "description": "Produced decisive X-ray diffraction evidence for DNA structure and advanced virus and carbon research."
        },
        {
            "start": "1944",
            "title": "DNA identified as hereditary material",
            "description": "Avery, MacLeod and McCarty showed that DNA carried bacterial transforming activity."
        },
        {
            "start": "1950",
            "title": "Tu Youyou (1930–)",
            "description": "Discovered artemisinin-based antimalarial therapy by integrating traditional texts and modern screening."
        },
        {
            "start": "1951",
            "title": "HeLa cell line established",
            "description": "The first widely used immortal human cell line became a central biomedical research platform, while raising lasting consent ethics."
        },
        {
            "start": "1952",
            "title": "Hershey–Chase experiment",
            "description": "Bacteriophage experiments reinforced DNA, rather than protein, as genetic material."
        },
        {
            "start": "1953",
            "title": "DNA double-helix structure",
            "description": "Watson and Crick proposed a base-paired double helix using crucial evidence from Franklin, Wilkins and others."
        },
        {
            "start": "1953",
            "title": "Miller–Urey prebiotic chemistry experiment",
            "description": "Organic molecules were produced under simulated early-Earth conditions, making origins-of-life chemistry experimentally accessible."
        },
        {
            "start": "1954",
            "title": "First successful human organ transplant",
            "description": "A kidney transplant between identical twins established organ replacement as clinical medicine."
        },
        {
            "start": "1954",
            "title": "Jane Goodall (1934–)",
            "description": "Transformed primatology through long-term field observation of chimpanzee behavior and culture."
        },
        {
            "start": "1955",
            "title": "Salk polio vaccine introduced",
            "description": "Mass vaccination sharply reduced paralytic poliomyelitis."
        },
        {
            "start": "1958",
            "title": "Meselson–Stahl experiment",
            "description": "Density-gradient experiments demonstrated semiconservative DNA replication."
        },
        {
            "start": "1961",
            "title": "Genetic code deciphered",
            "description": "Experiments mapped nucleotide triplets to amino acids, connecting DNA sequence to protein synthesis.",
            "end": "1966",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1967",
            "title": "First human heart transplant",
            "description": "Cardiac transplantation demonstrated the clinical reach and ethical complexity of modern surgery."
        },
        {
            "start": "1970",
            "title": "Reverse transcriptase discovered",
            "description": "RNA-to-DNA information transfer expanded the central dogma and transformed virology and molecular biology."
        },
        {
            "start": "1972",
            "title": "Computed tomography enters medicine",
            "description": "Computer reconstruction converted X-ray projections into cross-sectional images of the living body."
        },
        {
            "start": "1973",
            "title": "Recombinant DNA technology",
            "description": "DNA from different sources was cut and joined, launching modern genetic engineering."
        },
        {
            "start": "1975",
            "title": "Monoclonal antibodies",
            "description": "Hybridoma methods enabled unlimited production of antibodies with a single specificity."
        },
        {
            "start": "1975",
            "title": "Katalin Karikó (1955–)",
            "description": "Pioneered nucleoside-modified mRNA technology enabling effective mRNA vaccines."
        },
        {
            "start": "1977",
            "title": "Sanger DNA sequencing",
            "description": "Chain-termination chemistry made reliable nucleotide sequencing broadly practical."
        },
        {
            "start": "1978",
            "title": "First birth through IVF",
            "description": "In vitro fertilization created a new field of assisted reproductive medicine and major bioethical questions."
        },
        {
            "start": "1980-05-08",
            "title": "Smallpox eradicated",
            "description": "WHO declared smallpox eradicated, the first and still only human infectious disease globally eradicated."
        },
        {
            "start": "1981",
            "title": "AIDS recognized as a new syndrome",
            "description": "Unusual immune failure cases initiated an immense global research, public-health and social response."
        },
        {
            "start": "1983",
            "title": "HIV identified",
            "description": "Researchers isolated the retrovirus responsible for AIDS, enabling diagnostics and targeted treatment research.",
            "end": "1984",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1983",
            "title": "Polymerase chain reaction conceived",
            "description": "PCR made selected DNA sequences exponentially amplifiable, transforming biology, medicine and forensics."
        },
        {
            "start": "1984",
            "title": "Jennifer Doudna (1964–)",
            "description": "Co-developed CRISPR-Cas9 as a programmable genome-editing method."
        },
        {
            "start": "1987",
            "title": "CRISPR repeats first reported",
            "description": "Unusual repeated DNA sequences in bacteria began the path toward understanding adaptive immunity and genome editing."
        },
        {
            "start": "1988",
            "title": "Emmanuelle Charpentier (1968–)",
            "description": "Co-developed CRISPR-Cas9 as a programmable genome-editing method."
        },
        {
            "start": "1990",
            "title": "Human Genome Project",
            "description": "International sequencing and mapping created the first reference human genome and new genomic infrastructure.",
            "end": "2003",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1996",
            "title": "Dolly the sheep cloned",
            "description": "A mammal cloned from an adult somatic cell demonstrated nuclear reprogramming and raised major ethical debate."
        },
        {
            "start": "1998",
            "title": "RNA interference discovered",
            "description": "Double-stranded RNA was shown to silence matching genes, revealing a major regulatory and experimental mechanism."
        },
        {
            "start": "2001",
            "title": "Draft human genome published",
            "description": "Public and private projects released broad human-genome sequences, transforming biomedical research."
        },
        {
            "start": "2003",
            "title": "Human Genome Project completed",
            "description": "The international project declared completion of a high-quality reference sequence and genomic toolset."
        },
        {
            "start": "2005",
            "title": "Next-generation DNA sequencing",
            "description": "Massively parallel sequencing sharply reduced cost and enabled population-scale genomics."
        },
        {
            "start": "2006",
            "title": "Induced pluripotent stem cells",
            "description": "Adult cells were reprogrammed to pluripotency, reshaping regenerative medicine and disease modeling."
        },
        {
            "start": "2010",
            "title": "Synthetic bacterial genome controls a cell",
            "description": "A chemically synthesized genome was transplanted into a cell and directed its replication and functions."
        },
        {
            "start": "2012",
            "title": "CRISPR-Cas9 programmable genome editing",
            "description": "A bacterial defense enzyme was converted into a broadly programmable tool for cutting DNA."
        },
        {
            "start": "2013",
            "title": "Human cerebral organoids",
            "description": "Stem-cell-derived three-dimensional tissues created new experimental models of brain development and disease."
        },
        {
            "start": "2018",
            "title": "Gene-edited babies announced",
            "description": "Heritable human genome editing was performed without adequate scientific or ethical justification, triggering global governance reforms."
        },
        {
            "start": "2020",
            "title": "mRNA vaccines deployed at global scale",
            "description": "Nucleoside-modified mRNA platforms produced highly effective COVID-19 vaccines with rapid design and manufacturing.",
            "end": "2021",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "2022",
            "title": "Telomere-to-telomere human genome completed",
            "description": "Previously unresolved repetitive regions were assembled into the first essentially complete human genome sequence."
        },
        {
            "start": "2023-12-08",
            "title": "First FDA-approved CRISPR therapy",
            "description": "Casgevy became the first FDA-approved treatment using CRISPR-Cas9 genome editing, initially for sickle cell disease."
        },
        {
            "start": "2023",
            "title": "Human pangenome reference released",
            "description": "A diverse multi-genome reference reduced reliance on a single linear genome and improved representation of human variation."
        },
        {
            "start": "2024-03-16",
            "title": "Genetically edited pig kidney transplanted into a living person",
            "description": "A gene-edited pig kidney was transplanted into a living recipient, advancing clinical xenotransplantation while uncertainties remained."
        },
        {
            "start": "2025",
            "title": "First personalized in-vivo base-editing therapy",
            "description": "A custom CRISPR base editor was rapidly designed and delivered to an infant with a rare metabolic disease."
        },
        {
            "start": "2025",
            "title": "Prime editing first used therapeutically in a person",
            "description": "A patient received therapeutic prime-edited cells, marking the clinical debut of a more versatile precision-editing method."
        }
    ]
};

// Earth, environment and space
var tl_earth_space = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0749",
            "title": "Babylonian predictive astronomy",
            "description": "Long observational records enabled numerical prediction of eclipses and planetary phenomena."
        },
        {
            "start": "-0255",
            "title": "Eratosthenes (c. 276–195 BCE)",
            "description": "Measured Earth’s circumference and advanced geography, chronology and mathematics."
        },
        {
            "start": "-0239",
            "title": "Measurement of Earth’s circumference",
            "description": "Eratosthenes used solar angles and distance estimates to obtain a remarkably good planetary measurement."
        },
        {
            "start": "0120",
            "title": "Claudius Ptolemy (100–170)",
            "description": "Systematized mathematical astronomy, geography and optics for more than a millennium."
        },
        {
            "start": "0132",
            "title": "Zhang Heng’s seismoscope",
            "description": "A mechanical detector indicated the direction of distant earthquakes."
        },
        {
            "start": "0150",
            "title": "Ptolemy’s Almagest",
            "description": "A mathematically predictive geocentric system synthesized ancient observational astronomy."
        },
        {
            "start": "0993",
            "title": "Al-Biruni (973–1048)",
            "description": "Used precise measurement and comparative inquiry in astronomy, geodesy, geography and cultures."
        },
        {
            "start": "1051",
            "title": "Shen Kuo (1031–1095)",
            "description": "Integrated astronomy, geology, magnetism, engineering and empirical observation in the Dream Pool Essays."
        },
        {
            "start": "1088",
            "title": "Shen Kuo’s Dream Pool Essays",
            "description": "The work recorded magnetic declination, fossils, geomorphology, astronomy, engineering and methods of observation."
        },
        {
            "start": "1221",
            "title": "Nasir al-Din al-Tusi (1201–1274)",
            "description": "Advanced astronomy, trigonometry and planetary models that later paralleled Copernican techniques."
        },
        {
            "start": "1493",
            "title": "Nicolaus Copernicus (1473–1543)",
            "description": "Reframed astronomy around a moving Earth and heliocentric planetary order."
        },
        {
            "start": "1543",
            "title": "Copernicus publishes On the Revolutions",
            "description": "A heliocentric mathematical architecture reorganized the planetary system and challenged Earth’s privileged position."
        },
        {
            "start": "1572",
            "title": "Tycho’s new star",
            "description": "Precise parallax arguments showed that the supposedly immutable heavens could change."
        },
        {
            "start": "1577",
            "title": "Tycho’s comet observations",
            "description": "The comet crossed supposed crystalline spheres, undermining inherited celestial architecture."
        },
        {
            "start": "1591",
            "title": "Johannes Kepler (1571–1630)",
            "description": "Discovered quantitative laws of planetary motion and advanced physical astronomy and optics."
        },
        {
            "start": "1609",
            "title": "Kepler’s first two laws of planetary motion",
            "description": "Elliptical orbits and equal areas replaced perfect circles with quantitatively fitted planetary dynamics."
        },
        {
            "start": "1610",
            "title": "Galileo publishes Sidereus Nuncius",
            "description": "Lunar mountains, Jupiter’s moons and countless stars transformed the evidence for celestial theory."
        },
        {
            "start": "1619",
            "title": "Kepler’s third law",
            "description": "A precise relation between orbital period and distance unified the scale of the solar system."
        },
        {
            "start": "1632",
            "title": "Galileo’s Dialogue",
            "description": "Arguments for Earth’s motion joined observation, mechanics and rhetorical debate over scientific authority."
        },
        {
            "start": "1676",
            "title": "Edmond Halley (1656–1742)",
            "description": "Applied Newtonian astronomy to comet prediction and global geophysical mapping."
        },
        {
            "start": "1705",
            "title": "Halley predicts the return of a comet",
            "description": "Newtonian mechanics successfully predicted a comet’s future return, displaying the power of universal law."
        },
        {
            "start": "1746",
            "title": "James Hutton (1726–1797)",
            "description": "Established deep geological time and cyclic processes shaping Earth."
        },
        {
            "start": "1755",
            "title": "Kant–Laplace nebular hypothesis begins",
            "description": "Kant proposed a natural developmental origin of the solar system from diffuse matter."
        },
        {
            "start": "1758",
            "title": "William Herschel (1738–1822)",
            "description": "Discovered Uranus and advanced telescopes, stellar astronomy and infrared observation."
        },
        {
            "start": "1781",
            "title": "Discovery of Uranus",
            "description": "Herschel’s telescopic discovery expanded the known solar system for the first time in antiquity’s aftermath."
        },
        {
            "start": "1785",
            "title": "Hutton’s theory of the Earth",
            "description": "Slow cyclic geological processes implied an immense timescale for Earth history."
        },
        {
            "start": "1817",
            "title": "Charles Lyell (1797–1875)",
            "description": "Established uniformitarian geology and supplied Darwin with a deep-time framework."
        },
        {
            "start": "1830",
            "title": "Lyell’s Principles of Geology",
            "description": "Present-day processes were used to interpret deep geological history.",
            "end": "1833",
            "isDuration": true,
            "textColor": "black",
            "color": "#457B9D"
        },
        {
            "start": "1846",
            "title": "Neptune predicted and observed",
            "description": "Mathematical perturbation theory led to telescopic discovery, a triumph of predictive celestial mechanics."
        },
        {
            "start": "1900",
            "title": "Alfred Wegener (1880–1930)",
            "description": "Proposed continental drift, later incorporated into plate tectonics."
        },
        {
            "start": "1909",
            "title": "Edwin Hubble (1889–1953)",
            "description": "Established the extragalactic scale of the universe and observational cosmic expansion."
        },
        {
            "start": "1912",
            "title": "Wegener proposes continental drift",
            "description": "Continents were proposed to move over geological time, unifying fossil and geological patterns."
        },
        {
            "start": "1919",
            "title": "Eclipse test of general relativity",
            "description": "Measurements of starlight deflection supported Einstein’s prediction and made relativity internationally famous."
        },
        {
            "start": "1922",
            "title": "Friedmann’s expanding-universe solutions",
            "description": "General relativity admitted dynamic universes that expand or contract rather than remain static."
        },
        {
            "start": "1927",
            "title": "Rachel Carson (1907–1964)",
            "description": "Connected ecology, toxicology and public communication to launch modern environmental awareness."
        },
        {
            "start": "1929",
            "title": "Hubble relation and cosmic expansion",
            "description": "Galaxy distance and redshift were correlated, establishing observational evidence for an expanding universe."
        },
        {
            "start": "1957-10-04",
            "title": "Sputnik 1 launches",
            "description": "The first artificial satellite began the space age and accelerated global science and engineering investment."
        },
        {
            "start": "1962",
            "title": "Carson publishes Silent Spring",
            "description": "Ecological evidence about pesticides reshaped environmental science, regulation and public risk debate."
        },
        {
            "start": "1962",
            "title": "Stephen Hawking (1942–2018)",
            "description": "Connected black-hole physics, quantum theory and cosmology, including Hawking radiation."
        },
        {
            "start": "1963",
            "title": "Plate tectonics established",
            "description": "Seafloor spreading, magnetic stripes, earthquakes and subduction unified continental drift and global geology.",
            "end": "1968",
            "isDuration": true,
            "textColor": "black",
            "color": "#457B9D"
        },
        {
            "start": "1964",
            "title": "Cosmic microwave background discovered",
            "description": "Relic radiation from the early universe supplied decisive evidence for hot Big Bang cosmology."
        },
        {
            "start": "1967",
            "title": "Pulsars discovered",
            "description": "Regular radio pulses revealed rapidly rotating neutron stars and new tests of extreme physics."
        },
        {
            "start": "1968-12-24",
            "title": "Apollo 8 Earthrise",
            "description": "Humans viewed Earth from lunar orbit, strengthening planetary and environmental consciousness."
        },
        {
            "start": "1969-07-20",
            "title": "Apollo 11 Moon landing",
            "description": "Humans landed on another world, combining rocketry, computing, materials, navigation and planetary science."
        },
        {
            "start": "1974",
            "title": "Hawking radiation",
            "description": "Quantum field theory implied that black holes emit thermal radiation and can evaporate."
        },
        {
            "start": "1977",
            "title": "Voyager missions launch",
            "description": "Robotic exploration transformed knowledge of the outer planets and continued into interstellar space."
        },
        {
            "start": "1985",
            "title": "Antarctic ozone hole reported",
            "description": "Atmospheric measurements revealed severe seasonal ozone loss linked to chlorofluorocarbons."
        },
        {
            "start": "1990-04-24",
            "title": "Hubble Space Telescope launched",
            "description": "Space-based imaging transformed observational astronomy from planets to the early universe."
        },
        {
            "start": "1992",
            "title": "First confirmed exoplanets",
            "description": "Planets orbiting a pulsar established that planetary systems exist beyond the Sun."
        },
        {
            "start": "1995",
            "title": "First exoplanet around a Sun-like star",
            "description": "51 Pegasi b launched the modern era of exoplanet discovery and comparative planetary science."
        },
        {
            "start": "1998",
            "title": "Accelerating cosmic expansion discovered",
            "description": "Type Ia supernovae showed that expansion is accelerating, implying dark energy."
        },
        {
            "start": "2009",
            "title": "Kepler space telescope launched",
            "description": "Transit photometry revealed thousands of exoplanets and established that planets are common."
        },
        {
            "start": "2014-11-12",
            "title": "Rosetta lands Philae on a comet",
            "description": "A spacecraft achieved the first controlled landing on a comet nucleus and studied primitive solar-system material."
        },
        {
            "start": "2015-09-14",
            "title": "First direct detection of gravitational waves",
            "description": "LIGO observed a binary black-hole merger, opening gravitational-wave astronomy."
        },
        {
            "start": "2017-08-17",
            "title": "Multi-messenger neutron-star merger",
            "description": "Gravitational waves and electromagnetic signals jointly identified a neutron-star merger and heavy-element production."
        },
        {
            "start": "2019-04-10",
            "title": "First image of a black hole",
            "description": "The Event Horizon Telescope resolved the shadow of M87*, testing gravity near an event horizon."
        },
        {
            "start": "2021-12-25",
            "title": "James Webb Space Telescope launched",
            "description": "A large infrared observatory opened new views of early galaxies, star formation, planets and atmospheres."
        }
    ]
};

// Technology, engineering and computing
var tl_technology = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "Agriculture and settled experimentation",
            "description": "Domestication required cumulative observation of seasons, heredity, soils, water and animal behavior."
        },
        {
            "start": "-3499",
            "title": "Wheel and rotary technologies",
            "description": "Rotary motion became a general engineering principle for transport, pottery and later machinery."
        },
        {
            "start": "-0149",
            "title": "Antikythera mechanism",
            "description": "A geared analog computer modeled astronomical cycles and displayed calendrical information.",
            "end": "-0099",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "0105",
            "title": "Paper-making recorded by Cai Lun",
            "description": "Improved paper greatly lowered the cost and weight of storing and circulating knowledge."
        },
        {
            "start": "0700",
            "title": "Woodblock printing spreads in East Asia",
            "description": "Repeatable text and image reproduction expanded religious, administrative and technical circulation.",
            "end": "0900",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "0850",
            "title": "Gunpowder formulations recorded in China",
            "description": "Chemical experimentation with salts and combustibles produced a technology with major military and engineering consequences."
        },
        {
            "start": "1040",
            "title": "Su Song (1020–1101)",
            "description": "Led construction of an advanced astronomical clock tower using an escapement and chain drive."
        },
        {
            "start": "1092",
            "title": "Su Song’s astronomical clock tower",
            "description": "An escapement, chain drive and astronomical display integrated precision mechanics and state astronomy."
        },
        {
            "start": "1100",
            "title": "Magnetic compass used for navigation",
            "description": "Reliable directional guidance transformed maritime travel, mapping and exchange."
        },
        {
            "start": "1280",
            "title": "Mechanical clocks spread in Europe",
            "description": "Escapement-based public clocks standardized hours and stimulated precision mechanics."
        },
        {
            "start": "1450",
            "title": "Gutenberg movable-type printing",
            "description": "Mechanized book production greatly accelerated copying, standardization, criticism and scientific communication."
        },
        {
            "start": "1472",
            "title": "Leonardo da Vinci (1452–1519)",
            "description": "Combined anatomical observation, mechanics, optics, design and visual reasoning."
        },
        {
            "start": "1609",
            "title": "Astronomical telescope",
            "description": "Galileo and others turned the telescope toward the sky, extending vision beyond unaided human senses."
        },
        {
            "start": "1656",
            "title": "Huygens’ pendulum clock",
            "description": "Accurate timekeeping strengthened astronomy, navigation, measurement and experimental reproducibility."
        },
        {
            "start": "1769",
            "title": "Watt’s improved steam engine",
            "description": "Separate condensation sharply improved efficiency and made steam a general industrial power source."
        },
        {
            "start": "1811",
            "title": "Charles Babbage (1791–1871)",
            "description": "Designed programmable general-purpose mechanical computing architectures."
        },
        {
            "start": "1837",
            "title": "Babbage designs the Analytical Engine",
            "description": "A general programmable machine architecture included memory, processing, branching and punched-card input."
        },
        {
            "start": "1843",
            "title": "Ada Lovelace’s notes on the Analytical Engine",
            "description": "Her notes described an algorithm and recognized that symbolic machines could manipulate more than numbers."
        },
        {
            "start": "1909",
            "title": "Haber–Bosch ammonia synthesis",
            "description": "Industrial nitrogen fixation transformed fertilizer, food production, chemistry and warfare.",
            "end": "1913",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "1914",
            "title": "Norbert Wiener (1894–1964)",
            "description": "Founded cybernetics around feedback, control and communication in organisms and machines."
        },
        {
            "start": "1923",
            "title": "John von Neumann (1903–1957)",
            "description": "Unified mathematics, quantum foundations, game theory and stored-program computing architecture."
        },
        {
            "start": "1926",
            "title": "Grace Hopper (1906–1992)",
            "description": "Pioneered compilers and machine-independent programming languages."
        },
        {
            "start": "1931",
            "title": "Electron microscope",
            "description": "Electron beams surpassed optical resolution and opened cellular and materials ultrastructure."
        },
        {
            "start": "1932",
            "title": "Alan Turing (1912–1954)",
            "description": "Founded computability theory and helped establish computer science and machine intelligence."
        },
        {
            "start": "1936",
            "title": "Turing’s universal machine",
            "description": "A precise abstract model defined algorithmic computation and the limits of computability."
        },
        {
            "start": "1946-02-14",
            "title": "ENIAC unveiled",
            "description": "A large electronic general-purpose computer demonstrated high-speed programmable digital calculation."
        },
        {
            "start": "1947",
            "title": "Transistor invented",
            "description": "Solid-state switching replaced bulky vacuum tubes and enabled modern electronics and computation."
        },
        {
            "start": "1947",
            "title": "John McCarthy (1927–2011)",
            "description": "Named artificial intelligence, created Lisp and shaped symbolic AI and time-sharing."
        },
        {
            "start": "1948",
            "title": "Wiener publishes Cybernetics",
            "description": "Feedback, control and communication were unified across machines, organisms and social systems."
        },
        {
            "start": "1950",
            "title": "Turing proposes the imitation game",
            "description": "Machine intelligence was reframed as an operational, testable question about behavior and conversation."
        },
        {
            "start": "1956",
            "title": "Dartmouth artificial-intelligence workshop",
            "description": "“Artificial intelligence” became the name of an organized research field."
        },
        {
            "start": "1958",
            "title": "Integrated circuit invented",
            "description": "Multiple electronic components were fabricated on a single substrate, enabling scalable miniaturization."
        },
        {
            "start": "1960",
            "title": "First working laser",
            "description": "Coherent light became a controllable tool for measurement, communications, medicine and manufacturing."
        },
        {
            "start": "1965",
            "title": "Moore’s law articulated",
            "description": "A recurring exponential trend in integrated-circuit complexity became a roadmap for the semiconductor industry."
        },
        {
            "start": "1967",
            "title": "Geoffrey Hinton (1947–)",
            "description": "Drove the revival of neural networks and deep learning through representation learning and backpropagation."
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "Packet-switched networking connected remote computers and seeded the modern Internet."
        },
        {
            "start": "1971",
            "title": "Commercial microprocessor",
            "description": "A central processing unit on one chip enabled embedded systems and personal computing."
        },
        {
            "start": "1975",
            "title": "Tim Berners-Lee (1955–)",
            "description": "Invented the World Wide Web and promoted open web standards."
        },
        {
            "start": "1980",
            "title": "Yann LeCun (1960–)",
            "description": "Pioneered convolutional neural networks and representation learning."
        },
        {
            "start": "1981",
            "title": "IBM PC and personal-computing standardization",
            "description": "An open hardware ecosystem accelerated mass adoption of personal computers and software industries."
        },
        {
            "start": "1984",
            "title": "Yoshua Bengio (1964–)",
            "description": "Made foundational advances in deep learning, language modeling and representation learning."
        },
        {
            "start": "1989",
            "title": "World Wide Web invented at CERN",
            "description": "URLs, HTTP and HTML connected documents across the Internet into a universal information space."
        },
        {
            "start": "1996",
            "title": "Demis Hassabis (1976–)",
            "description": "Led breakthroughs in reinforcement learning and AI-based protein-structure prediction."
        },
        {
            "start": "1997",
            "title": "Deep Blue defeats chess world champion",
            "description": "Specialized search and evaluation showed machine superiority in a culturally iconic intellectual task."
        },
        {
            "start": "2016",
            "title": "AlphaGo defeats Lee Sedol",
            "description": "Deep neural networks, search and reinforcement learning mastered a game long considered resistant to AI."
        },
        {
            "start": "2017",
            "title": "Transformer architecture",
            "description": "Attention-based sequence modeling enabled highly scalable language, vision and multimodal foundation models."
        },
        {
            "start": "2018",
            "title": "AlphaFold’s first major CASP breakthrough",
            "description": "Deep learning sharply improved protein-structure prediction, beginning a transformation of computational biology."
        },
        {
            "start": "2020",
            "title": "AlphaFold2 reaches near-experimental accuracy",
            "description": "AI predicted many protein structures with unprecedented accuracy, changing structural biology workflows."
        },
        {
            "start": "2022-11-30",
            "title": "ChatGPT released publicly",
            "description": "Conversational large language models entered mass use, rapidly changing software, education, research assistance and public debate."
        },
        {
            "start": "2024",
            "title": "AlphaFold 3 models biomolecular interactions",
            "description": "The model extended structure prediction across proteins, nucleic acids, ligands and molecular complexes."
        }
    ]
};

// Institutions and limited historical context
var tl_institutions_context = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0294",
            "title": "Library and Mouseion of Alexandria",
            "description": "State-supported collecting, editing and research concentrated texts and scholars across the Mediterranean world.",
            "end": "-0047",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "0427",
            "title": "Nalanda develops as a major university-monastery",
            "description": "A long-lived Indian center supported Buddhist philosophy, logic, medicine, mathematics and cross-regional study."
        },
        {
            "start": "0762",
            "title": "Baghdad translation movement and House of Wisdom",
            "description": "Greek, Persian and Indian works were translated, criticized and extended in Arabic scholarly networks.",
            "end": "0900",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1088",
            "title": "University of Bologna tradition",
            "description": "Corporate university structures helped stabilize advanced teaching, credentials and scholarly communities in Europe."
        },
        {
            "start": "1150",
            "title": "Latin translation movement",
            "description": "Arabic and Greek works in philosophy, medicine, mathematics and astronomy entered European universities.",
            "end": "1250",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1347",
            "title": "Black Death",
            "description": "The pandemic reshaped European labor, institutions, medical debate and the social conditions of learning.",
            "end": "1351",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1492",
            "title": "Columbian exchange and global natural history",
            "description": "Intense transfers of organisms, diseases, crops and observations transformed medicine, ecology and natural history.",
            "end": "1600",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1660",
            "title": "Royal Society founded",
            "description": "A durable institution organized experiment, correspondence, demonstration and collective evaluation of natural knowledge."
        },
        {
            "start": "1665",
            "title": "First scientific journals",
            "description": "Journal des sçavans and Philosophical Transactions created regular public channels for claims, priority and criticism."
        },
        {
            "start": "1751",
            "title": "Encyclopédie published",
            "description": "Knowledge, crafts and critical Enlightenment ideas were organized for a broad reading public.",
            "end": "1772",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1761",
            "title": "Global transits of Venus observations",
            "description": "International expeditions coordinated measurements to determine the scale of the solar system.",
            "end": "1769",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1791",
            "title": "Metric system created",
            "description": "Universal decimal measurement standards strengthened reproducibility, engineering and international exchange.",
            "end": "1799",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1810",
            "title": "University of Berlin and the research-university model",
            "description": "Research and advanced teaching were institutionally joined, influencing the modern university worldwide."
        },
        {
            "start": "1901",
            "title": "First Nobel Prizes awarded",
            "description": "International prizes created a durable public institution for recognizing major scientific achievements."
        },
        {
            "start": "1914-07-28",
            "title": "World War I",
            "description": "War redirected chemistry, medicine, aviation, communications and state research while fracturing international scientific networks.",
            "end": "1918-11-11",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1927",
            "title": "Fifth Solvay Conference",
            "description": "Leading physicists confronted the mathematical and philosophical interpretation of quantum mechanics."
        },
        {
            "start": "1939-09-01",
            "title": "World War II",
            "description": "War accelerated radar, operations research, antibiotics, rockets, computation and nuclear science while producing catastrophic destruction and ethical crises.",
            "end": "1945-09-02",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1945-08-06",
            "title": "Atomic bombings of Hiroshima and Nagasaki",
            "description": "Nuclear physics became inseparable from questions of mass destruction, scientific responsibility and global governance.",
            "end": "1945-08-09",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1954",
            "title": "CERN founded",
            "description": "A multinational laboratory institutionalized peaceful large-scale collaboration in particle physics."
        },
        {
            "start": "1987",
            "title": "Montreal Protocol",
            "description": "Atmospheric science was translated into a successful global treaty phasing out ozone-depleting chemicals."
        },
        {
            "start": "1988",
            "title": "IPCC established",
            "description": "A permanent international assessment process connected climate research with policy evaluation."
        },
        {
            "start": "1991",
            "title": "arXiv begins",
            "description": "Open electronic preprints accelerated global dissemination and priority in physics and later many fields."
        },
        {
            "start": "2019",
            "title": "COVID-19 pandemic and global science mobilization",
            "description": "The pandemic accelerated pathogen genomics, open data, clinical trials, vaccine platforms and debate over expertise and public trust.",
            "end": "2023",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        }
    ]
};

// Every group listed here is loaded onto the timeline by config.js
var timelines = [
    tl_eras,
    tl_philosophy,
    tl_math_logic,
    tl_physical_science,
    tl_life_medicine,
    tl_earth_space,
    tl_technology,
    tl_institutions_context
];
