var title = "哲学与科学时间线";

// Curated global timeline of philosophy and science.
// Every person is placed at the year in which they turned 20, not at birth.
// BCE years use ISO 8601 astronomical numbering: year 0 = 1 BCE; -0001 = 2 BCE.
// Milestone dates are dates of publication, discovery, demonstration, establishment or broad adoption.

// 时代与思想背景
var tl_eras = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "新石器时代知识转型",
            "description": "Neolithic knowledge transition<br>农业、定居、计数、历法观察和专业工艺积累了可重复的实践知识。",
            "end": "-3400",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "title": "轴心时代",
            "description": "Axial Age<br>希腊、印度、中国和东地中海的重要传统重构伦理、理性、自然与政治秩序。",
            "end": "-0199",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0599",
            "title": "古典自然哲学与学术医学",
            "description": "Classical natural philosophy and learned medicine<br>演绎数学、系统哲学、天文学和医学文献成为持久知识制度。",
            "end": "0500",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "title": "中世纪知识网络",
            "description": "Medieval knowledge networks<br>印度、中国、伊斯兰、拜占庭与拉丁传统保存、批判并扩展早期知识。",
            "end": "1450",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1350",
            "title": "文艺复兴与全球接触",
            "description": "Renaissance and global encounter<br>人文主义、印刷、航海、收藏与艺术解剖扩大了研究可用证据。",
            "end": "1650",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1543",
            "title": "科学革命",
            "description": "Scientific Revolution<br>数学化、受控实验、精密仪器与科学社团重组自然哲学。",
            "end": "1700",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1680",
            "title": "启蒙与分类时代",
            "description": "Enlightenment and classification<br>批判理性、公共科学、百科全书、分类学、政治经济与改革计划扩展。",
            "end": "1800",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1760",
            "title": "工业化与实验室科学",
            "description": "Industrial and laboratory science<br>能源系统、工厂、研究型大学和专业实验室把科学连接到工业与国家。",
            "end": "1914",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1900",
            "title": "相对论、量子论与现代生物学",
            "description": "Relativity, quantum theory and modern biology<br>经典基础围绕时空、量子、基因、统计与仪器被重建。",
            "end": "1945",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "title": "大科学与信息时代",
            "description": "Big science and the information age<br>大型合作、电子技术、计算、分子生物学、航天与环境科学改变研究。",
            "end": "2000",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2000",
            "title": "基因组、网络与AI加速科学",
            "description": "Genomic, networked and AI-accelerated science<br>高通量测量、全球数据、基因组工程与机器学习日益成为科学基础设施。",
            "end": "2025",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        }
    ]
};

// 哲学与科学哲学
var tl_philosophy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0699",
            "title": "早期奥义书哲学",
            "description": "Early Upanishadic philosophy<br>印度思想家探讨自我、终极实在、知识、行动与解脱。",
            "end": "-0299",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "-0603",
            "title": "米利都的泰勒斯（约公元前624–公元前546年）",
            "description": "Thales of Miletus (c. 624–546 BCE)<br>推动以自然原因取代神话解释，并与早期希腊几何学和天文学相关。"
        },
        {
            "start": "-0599",
            "title": "爱奥尼亚自然哲学",
            "description": "Ionian natural philosophy<br>解释日益诉诸自然物质、规律与原因，而非仅依赖神话叙事。"
        },
        {
            "start": "-0550",
            "title": "老子（约公元前571–公元前471年）",
            "description": "Laozi (c. 571–471 BCE)<br>道家传统创始人物，强调道、自然、无为与语言的限度。"
        },
        {
            "start": "-0549",
            "title": "毕达哥拉斯学派",
            "description": "Pythagorean school<br>该共同体把证明、数、音程比例、宇宙论与纪律性生活连接起来。"
        },
        {
            "start": "-0542",
            "title": "释迦牟尼（约公元前563–公元前483年）",
            "description": "Gautama Buddha (c. 563–483 BCE)<br>建立关于苦、因果、无常、伦理与解脱的实践哲学。"
        },
        {
            "start": "-0530",
            "title": "孔子（约公元前551–公元前479年）",
            "description": "Confucius (c. 551–479 BCE)<br>奠定以道德修养、礼、教育与责任政治为核心的传统。"
        },
        {
            "start": "-0515",
            "title": "赫拉克利特（约公元前536–公元前476年）",
            "description": "Heraclitus (c. 536–476 BCE)<br>讨论变化、对立与逻各斯，使过程成为形而上学核心。"
        },
        {
            "start": "-0494",
            "title": "巴门尼德（约公元前515–公元前450年）",
            "description": "Parmenides (c. 515–450 BCE)<br>以关于存在与表象的严格论证奠定形而上学和逻辑基础。"
        },
        {
            "start": "-0474",
            "title": "《论语》的编纂",
            "description": "Compilation of the Analects<br>多层教言形成儒家伦理、教育与政治思想的核心文本。",
            "end": "-0220",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "-0449",
            "title": "苏格拉底（约公元前470–公元前400年）",
            "description": "Socrates (c. 470–400 BCE)<br>把有纪律的诘问、定义和伦理自省置于哲学核心。"
        },
        {
            "start": "-0407",
            "title": "柏拉图（公元前428–公元前348年）",
            "description": "Plato (428–348 BCE)<br>创办学园，塑造形而上学、认识论、伦理学、政治哲学与数学哲学。"
        },
        {
            "start": "-0386",
            "title": "柏拉图创办学园",
            "description": "Plato founds the Academy<br>这一持久机构把哲学、数学、教育与政治反思联系起来。"
        },
        {
            "start": "-0374",
            "title": "柏拉图《理想国》",
            "description": "Plato’s Republic<br>奠基性探讨正义、知识、教育、政治秩序以及表象与实在的关系。"
        },
        {
            "start": "-0363",
            "title": "亚里士多德（公元前384–公元前322年）",
            "description": "Aristotle (384–322 BCE)<br>系统化逻辑学，并综合研究自然、因果、生物、伦理和政治。"
        },
        {
            "start": "-0351",
            "title": "孟子（约公元前372–公元前290年）",
            "description": "Mencius (c. 372–290 BCE)<br>发展儒家道德心理学与人性趋善的学说。"
        },
        {
            "start": "-0348",
            "title": "庄子（约公元前369–公元前286年）",
            "description": "Zhuangzi (c. 369–286 BCE)<br>深入讨论视角、自发性、变化以及对固定区分的怀疑。"
        },
        {
            "start": "-0334",
            "title": "亚里士多德创办吕克昂",
            "description": "Aristotle founds the Lyceum<br>在哲学与自然史领域组织研究、收藏、教学和分类。"
        },
        {
            "start": "-0320",
            "title": "伊壁鸠鲁（公元前341–公元前271年）",
            "description": "Epicurus (341–271 BCE)<br>把原子论与追求宁静、友谊和摆脱恐惧的伦理结合起来。"
        },
        {
            "start": "-0313",
            "title": "季蒂昂的芝诺（约公元前334–公元前262年）",
            "description": "Zeno of Citium (c. 334–262 BCE)<br>创立斯多葛学派，统一逻辑、自然哲学与德性伦理。"
        },
        {
            "start": "-0305",
            "title": "伊壁鸠鲁创办花园学派",
            "description": "Epicurus establishes the Garden<br>原子论自然哲学与追求宁静和友谊的治疗性伦理结合。"
        },
        {
            "start": "-0299",
            "title": "斯多葛主义兴起",
            "description": "Stoicism emerges<br>逻辑、宇宙论与德性伦理被统一为顺应自然的生活哲学。"
        },
        {
            "start": "-0085",
            "title": "西塞罗（公元前106–公元前43年）",
            "description": "Cicero (106–43 BCE)<br>把希腊哲学传入拉丁世界，塑造共和政治思想和自然法。"
        },
        {
            "start": "0047",
            "title": "王充（27–97年）",
            "description": "Wang Chong (27–97)<br>在汉代中国以自然主义和怀疑主义解释反对迷信。"
        },
        {
            "start": "0150",
            "title": "中观哲学形成",
            "description": "Madhyamaka philosophy<br>龙树论证把缘起与空发展为对固定本质的批判。",
            "end": "0250",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "0170",
            "title": "龙树（150–250年）",
            "description": "Nagarjuna (150–250)<br>发展中观学派，对空、缘起及概念极端的限制作出分析。"
        },
        {
            "start": "0224",
            "title": "普罗提诺（204–270年）",
            "description": "Plotinus (204–270)<br>建立以太一、理智、灵魂与流溢为核心的新柏拉图主义体系。"
        },
        {
            "start": "0374",
            "title": "奥古斯丁（354–430年）",
            "description": "Augustine of Hippo (354–430)<br>把基督教神学与柏拉图主义结合，改变关于时间、意志与历史的理论。"
        },
        {
            "start": "0497",
            "title": "波爱修斯（477–524年）",
            "description": "Boethius (477–524)<br>把古代逻辑与哲学传入中世纪拉丁欧洲。"
        },
        {
            "start": "0821",
            "title": "肯迪（801–873年）",
            "description": "Al-Kindi (801–873)<br>把希腊哲学融入阿拉伯—伊斯兰知识文化，并推动数学科学。"
        },
        {
            "start": "0890",
            "title": "法拉比（870–950年）",
            "description": "Al-Farabi (870–950)<br>系统化逻辑学、政治哲学与科学分类。"
        },
        {
            "start": "1000",
            "title": "伊本·西那（980–1037年）",
            "description": "Avicenna (980–1037)<br>建立有深远影响的形而上学、逻辑、自然哲学与医学体系。"
        },
        {
            "start": "1078",
            "title": "安萨里（1058–1111年）",
            "description": "Al-Ghazali (1058–1111)<br>批判哲学必然性，重塑伊斯兰神学、伦理学与认识论。"
        },
        {
            "start": "1146",
            "title": "伊本·鲁世德（阿威罗伊）（1126–1198年）",
            "description": "Averroes (1126–1198)<br>捍卫亚里士多德哲学，影响中世纪犹太、伊斯兰与基督教思想。"
        },
        {
            "start": "1150",
            "title": "朱熹（1130–1200年）",
            "description": "Zhu Xi (1130–1200)<br>系统化理学的形而上学、伦理、教育与经典诠释。"
        },
        {
            "start": "1158",
            "title": "迈蒙尼德（1138–1204年）",
            "description": "Maimonides (1138–1204)<br>尝试调和亚里士多德理性、犹太法律与神学。"
        },
        {
            "start": "1239",
            "title": "罗吉尔·培根（1219–1292年）",
            "description": "Roger Bacon (1219–1292)<br>主张自然哲学必须依靠数学、实验与语言研究。"
        },
        {
            "start": "1245",
            "title": "托马斯·阿奎那（1225–1274年）",
            "description": "Thomas Aquinas (1225–1274)<br>形成亚里士多德哲学与基督教神学的核心经院综合。"
        },
        {
            "start": "1265",
            "title": "阿奎那《神学大全》",
            "description": "Aquinas’s Summa Theologiae<br>成熟的经院体系整合逻辑、亚里士多德哲学、自然法与基督教神学。",
            "end": "1274",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1307",
            "title": "奥卡姆的威廉（1287–1347年）",
            "description": "William of Ockham (1287–1347)<br>发展唯名论与“奥卡姆剃刀”所代表的方法论简约原则。"
        },
        {
            "start": "1352",
            "title": "伊本·赫勒敦（1332–1406年）",
            "description": "Ibn Khaldun (1332–1406)<br>开创对社会凝聚、国家、经济与历史变迁的系统解释。"
        },
        {
            "start": "1377",
            "title": "伊本·赫勒敦《历史绪论》",
            "description": "Ibn Khaldun’s Muqaddimah<br>把历史解释建立在社会组织、经济、环境、权力与群体凝聚之上。"
        },
        {
            "start": "1581",
            "title": "弗朗西斯·培根（1561–1626年）",
            "description": "Francis Bacon (1561–1626)<br>倡导有组织的经验研究、归纳法与有用知识的社会事业。"
        },
        {
            "start": "1608",
            "title": "托马斯·霍布斯（1588–1679年）",
            "description": "Thomas Hobbes (1588–1679)<br>发展唯物主义心理学与政治权威的契约论。"
        },
        {
            "start": "1616",
            "title": "勒内·笛卡尔（1596–1650年）",
            "description": "René Descartes (1596–1650)<br>使方法怀疑、解析几何与机械论解释成为近代思想核心。"
        },
        {
            "start": "1620",
            "title": "培根《新工具》",
            "description": "Bacon’s Novum Organum<br>归纳、组织化观察与纠正认知“假象”的纲领重构科学方法。"
        },
        {
            "start": "1637",
            "title": "笛卡尔《方法谈》",
            "description": "Descartes’ Discourse on Method<br>方法怀疑、分析分解与数学清晰性成为近代研究宣言。"
        },
        {
            "start": "1641",
            "title": "笛卡尔《第一哲学沉思集》",
            "description": "Descartes’ Meditations<br>确立围绕确定性、心身二元论与知识基础的近代议程。"
        },
        {
            "start": "1651",
            "title": "霍布斯《利维坦》",
            "description": "Hobbes’ Leviathan<br>对人的机械论解释支持主权政治秩序的契约理论。"
        },
        {
            "start": "1652",
            "title": "巴鲁赫·斯宾诺莎（1632–1677年）",
            "description": "Baruch Spinoza (1632–1677)<br>建立连接自然、心灵、伦理与自由的严格一元论体系。"
        },
        {
            "start": "1652",
            "title": "约翰·洛克（1632–1704年）",
            "description": "John Locke (1632–1704)<br>塑造经验论、人格同一性、权利与宪政理论。"
        },
        {
            "start": "1677",
            "title": "斯宾诺莎《伦理学》",
            "description": "Spinoza’s Ethics<br>几何式一元体系把神即自然、心灵、情感与自由视为同一因果秩序。"
        },
        {
            "start": "1689",
            "title": "洛克《人类理解论》",
            "description": "Locke’s Essay Concerning Human Understanding<br>重要经验论体系考察观念、经验、知识、概率与人格同一性。"
        },
        {
            "start": "1705",
            "title": "乔治·贝克莱（1685–1753年）",
            "description": "George Berkeley (1685–1753)<br>发展非物质论，并提出关于知觉与表象的重要论证。"
        },
        {
            "start": "1731",
            "title": "大卫·休谟（1711–1776年）",
            "description": "David Hume (1711–1776)<br>把经验论推向深入，分析因果、归纳、自我与道德。"
        },
        {
            "start": "1732",
            "title": "让-雅克·卢梭（1712–1778年）",
            "description": "Jean-Jacques Rousseau (1712–1778)<br>重构自由、不平等、政治合法性、教育与文明问题。"
        },
        {
            "start": "1739",
            "title": "休谟《人性论》",
            "description": "Hume’s Treatise of Human Nature<br>自然主义心灵科学分析因果、信念、同一性、激情与道德。",
            "end": "1740",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1743",
            "title": "亚当·斯密（1723–1790年）",
            "description": "Adam Smith (1723–1790)<br>综合道德心理、制度、分工与政治经济学。"
        },
        {
            "start": "1744",
            "title": "伊曼努尔·康德（1724–1804年）",
            "description": "Immanuel Kant (1724–1804)<br>根本改变认识论、形而上学、伦理学、美学与科学哲学。"
        },
        {
            "start": "1768",
            "title": "杰里米·边沁（1748–1832年）",
            "description": "Jeremy Bentham (1748–1832)<br>系统化功利主义伦理及面向改革的法律制度分析。"
        },
        {
            "start": "1776",
            "title": "斯密《国富论》",
            "description": "Smith’s Wealth of Nations<br>分工、市场与制度被分析为演化中的政治经济体系。"
        },
        {
            "start": "1781",
            "title": "康德《纯粹理性批判》",
            "description": "Kant’s Critique of Pure Reason<br>先验论述重新定义经验、因果、客观性与形而上学限度。"
        },
        {
            "start": "1789",
            "title": "边沁《道德与立法原理导论》",
            "description": "Bentham’s Principles of Morals and Legislation<br>功利被提出为伦理、法律与制度改革的可计算标准。"
        },
        {
            "start": "1790",
            "title": "G.W.F.黑格尔（1770–1831年）",
            "description": "G. W. F. Hegel (1770–1831)<br>建立关于精神、自由、社会与知识的历史—辩证体系。"
        },
        {
            "start": "1807",
            "title": "黑格尔《精神现象学》",
            "description": "Hegel’s Phenomenology of Spirit<br>意识、承认、历史与自由被呈现为辩证发展。"
        },
        {
            "start": "1818",
            "title": "奥古斯特·孔德（1798–1857年）",
            "description": "Auguste Comte (1798–1857)<br>创立实证主义，并把社会学确立为系统社会科学计划。"
        },
        {
            "start": "1826",
            "title": "约翰·斯图亚特·密尔（1806–1873年）",
            "description": "John Stuart Mill (1806–1873)<br>推进逻辑、科学方法、自由、功利主义与政治经济学。"
        },
        {
            "start": "1838",
            "title": "卡尔·马克思（1818–1883年）",
            "description": "Karl Marx (1818–1883)<br>发展对资本主义、阶级与历史变迁的唯物主义批判。"
        },
        {
            "start": "1843",
            "title": "密尔《逻辑体系》",
            "description": "Mill’s System of Logic<br>归纳、因果推理与科学方法被系统分析。"
        },
        {
            "start": "1859",
            "title": "密尔《论自由》",
            "description": "Mill’s On Liberty<br>个人自由、公开讨论与生活实验被捍卫为社会进步条件。"
        },
        {
            "start": "1859",
            "title": "查尔斯·桑德斯·皮尔士（1839–1914年）",
            "description": "Charles Sanders Peirce (1839–1914)<br>创立实用主义与现代符号学，并发展科学溯因推理。"
        },
        {
            "start": "1862",
            "title": "威廉·詹姆斯（1842–1910年）",
            "description": "William James (1842–1910)<br>发展重视经验的实用主义与机能心理学。"
        },
        {
            "start": "1864",
            "title": "弗里德里希·尼采（1844–1900年）",
            "description": "Friedrich Nietzsche (1844–1900)<br>通过谱系学与视角主义批判道德、形而上学和文化。"
        },
        {
            "start": "1867",
            "title": "马克思《资本论》第一卷",
            "description": "Marx publishes Capital, Volume I<br>资本积累、劳动、价值与危机被分析为结构性历史过程。"
        },
        {
            "start": "1878",
            "title": "皮尔士实用主义准则",
            "description": "Peirce’s pragmatic maxim<br>概念意义被连接到可设想的实践后果与行动习惯。"
        },
        {
            "start": "1879",
            "title": "埃德蒙·胡塞尔（1859–1938年）",
            "description": "Edmund Husserl (1859–1938)<br>创立把意识与意向性作为严格研究对象的现象学。"
        },
        {
            "start": "1887",
            "title": "尼采《道德谱系学》",
            "description": "Nietzsche’s On the Genealogy of Morality<br>道德概念被作为权力、心理与社会冲突的产物进行历史研究。"
        },
        {
            "start": "1888",
            "title": "W.E.B.杜波依斯（1868–1963年）",
            "description": "W. E. B. Du Bois (1868–1963)<br>在分析种族、权力与双重意识时结合经验社会学、历史与哲学。"
        },
        {
            "start": "1892",
            "title": "伯特兰·罗素（1872–1970年）",
            "description": "Bertrand Russell (1872–1970)<br>共同创立分析哲学，改变逻辑、基础论与语言哲学。"
        },
        {
            "start": "1900",
            "title": "胡塞尔《逻辑研究》",
            "description": "Husserl’s Logical Investigations<br>现象学通过对意义、意向性、逻辑与意识行为的分析兴起。",
            "end": "1901",
            "isDuration": true,
            "textColor": "black",
            "color": "#7B2CBF"
        },
        {
            "start": "1907",
            "title": "詹姆斯《实用主义》出版",
            "description": "William James publishes Pragmatism<br>真理与意义通过其在研究、经验和实践后果中的作用来解释。"
        },
        {
            "start": "1909",
            "title": "路德维希·维特根斯坦（1889–1951年）",
            "description": "Ludwig Wittgenstein (1889–1951)<br>两度重塑语言、逻辑、心灵与哲学方法。"
        },
        {
            "start": "1909",
            "title": "马丁·海德格尔（1889–1976年）",
            "description": "Martin Heidegger (1889–1976)<br>通过现象学、时间性与技术批判重新提出存在问题。"
        },
        {
            "start": "1921",
            "title": "维特根斯坦《逻辑哲学论》",
            "description": "Wittgenstein’s Tractatus<br>以图像论连接语言、逻辑与世界，影响逻辑实证主义和分析哲学。"
        },
        {
            "start": "1922",
            "title": "卡尔·波普尔（1902–1994年）",
            "description": "Karl Popper (1902–1994)<br>把可证伪性、猜想与批判置于科学哲学核心。"
        },
        {
            "start": "1924",
            "title": "维也纳学派形成",
            "description": "Vienna Circle forms<br>逻辑分析、经验主义与科学统一成为有组织的科学哲学纲领。"
        },
        {
            "start": "1925",
            "title": "让-保罗·萨特（1905–1980年）",
            "description": "Jean-Paul Sartre (1905–1980)<br>围绕自由、责任、意识与社会介入发展存在主义。"
        },
        {
            "start": "1926",
            "title": "汉娜·阿伦特（1906–1975年）",
            "description": "Hannah Arendt (1906–1975)<br>分析极权主义、行动、复数性、判断与公共领域。"
        },
        {
            "start": "1928",
            "title": "W.V.O.蒯因（1908–2000年）",
            "description": "Simone de Beauvoir (1908–1986)<br>挑战分析—综合区分，并推动认识论自然化。"
        },
        {
            "start": "1928",
            "title": "西蒙娜·德·波伏娃（1908–1986年）",
            "description": "W. V. O. Quine (1908–2000)<br>把存在主义伦理与对性别和压迫的奠基性分析结合起来。"
        },
        {
            "start": "1934",
            "title": "波普尔《科学发现的逻辑》",
            "description": "Popper’s Logic of Scientific Discovery<br>可证伪性与批判检验被提出为经验科学核心规范。"
        },
        {
            "start": "1941",
            "title": "约翰·罗尔斯（1921–2002年）",
            "description": "John Rawls (1921–2002)<br>以“作为公平的正义”复兴系统政治哲学。"
        },
        {
            "start": "1942",
            "title": "托马斯·库恩（1922–1996年）",
            "description": "Thomas Kuhn (1922–1996)<br>把范式、常规科学和科学革命分析为历史过程。"
        },
        {
            "start": "1943",
            "title": "萨特《存在与虚无》",
            "description": "Sartre’s Being and Nothingness<br>存在主义现象学分析意识、自由、自欺与他人关系。"
        },
        {
            "start": "1946",
            "title": "米歇尔·福柯（1926–1984年）",
            "description": "Michel Foucault (1926–1984)<br>研究知识、制度与权力如何生产主体和真理体制。"
        },
        {
            "start": "1948",
            "title": "诺姆·乔姆斯基（1928年–）",
            "description": "Noam Chomsky (1928–)<br>以生成语法革命性改变语言学与认知科学。"
        },
        {
            "start": "1949",
            "title": "波伏娃《第二性》",
            "description": "Beauvoir’s The Second Sex<br>性别被分析为历史和社会建构，而非单纯生物既定。"
        },
        {
            "start": "1949",
            "title": "尤尔根·哈贝马斯（1929年–）",
            "description": "Jürgen Habermas (1929–)<br>发展交往理性、民主与公共领域理论。"
        },
        {
            "start": "1951",
            "title": "蒯因《经验主义的两个教条》",
            "description": "Quine’s Two Dogmas of Empiricism<br>批判分析—综合区分与还原主义，主张信念整体接受检验。"
        },
        {
            "start": "1953",
            "title": "阿马蒂亚·森（1933年–）",
            "description": "Amartya Sen (1933–)<br>综合福利经济学、社会选择、自由与能力方法。"
        },
        {
            "start": "1954",
            "title": "丹尼尔·卡尼曼（1934–2024年）",
            "description": "Daniel Kahneman (1934–2024)<br>奠定关于启发式、偏差与双系统认知的行为决策研究。"
        },
        {
            "start": "1962",
            "title": "库恩《科学革命的结构》",
            "description": "Kuhn’s Structure of Scientific Revolutions<br>范式、常规科学与革命性变化重构科学史和科学哲学。"
        },
        {
            "start": "1971",
            "title": "罗尔斯《正义论》",
            "description": "Rawls’s A Theory of Justice<br>原初状态与差别原则以公平为核心重建规范政治哲学。"
        },
        {
            "start": "1975",
            "title": "福柯《规训与惩罚》",
            "description": "Foucault’s Discipline and Punish<br>现代机构被分析为生产受规训身体、知识与规范化主体的系统。"
        },
        {
            "start": "1981",
            "title": "哈贝马斯《交往行为理论》",
            "description": "Habermas’s Theory of Communicative Action<br>理性通过交流、相互理解与社会协调被重构。"
        }
    ]
};

// 数学、逻辑与信息
var tl_math_logic = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "早期文字与数字管理",
            "description": "Early writing and numerical administration<br>美索不达米亚文字把记录、账目和程序外化，使知识可持久积累。"
        },
        {
            "start": "-1999",
            "title": "美索不达米亚位值数学",
            "description": "Mesopotamian positional mathematics<br>六十进位值计算支持天文、测量、商业与复杂问题求解。"
        },
        {
            "start": "-0549",
            "title": "毕达哥拉斯（约公元前570–公元前495年）",
            "description": "Pythagoras (c. 570–495 BCE)<br>把数、证明、和谐与宇宙论联系起来，深刻影响数学和哲学。"
        },
        {
            "start": "-0304",
            "title": "欧几里得（约公元前325–公元前270年）",
            "description": "Euclid (c. 325–270 BCE)<br>《几何原本》成为公理化组织和演绎证明的典范。"
        },
        {
            "start": "-0299",
            "title": "欧几里得《几何原本》",
            "description": "Euclid’s Elements<br>定义、公设与证明构成最具影响力的公理科学范式。"
        },
        {
            "start": "-0266",
            "title": "阿基米德（约公元前287–公元前212年）",
            "description": "Archimedes (c. 287–212 BCE)<br>推进几何学、静力学、流体静力学和数学化工程。"
        },
        {
            "start": "-0249",
            "title": "阿基米德力学与测量",
            "description": "Archimedean mechanics and measurement<br>几何证明被用于杠杆、重心、浮力、面积与体积。"
        },
        {
            "start": "0050",
            "title": "《九章算术》的形成",
            "description": "The Nine Chapters on the Mathematical Art<br>中国数学程序系统化算术、几何、线性方程与实际管理。",
            "end": "0150",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "0375",
            "title": "希帕提娅（355–415年）",
            "description": "Hypatia (355–415)<br>亚历山大数学家和天文学家，保存并教授高级希腊科学。"
        },
        {
            "start": "0496",
            "title": "阿耶波多（476–550年）",
            "description": "Aryabhata (476–550)<br>推进印度数学和天文学，包括三角学与计算方法。"
        },
        {
            "start": "0618",
            "title": "婆罗摩笈多（598–668年）",
            "description": "Brahmagupta (598–668)<br>系统提出零、负数、代数与天文学的规则。"
        },
        {
            "start": "0628",
            "title": "婆罗摩笈多形式化零的算术",
            "description": "Brahmagupta formalizes arithmetic with zero<br>零与负数规则使位值算术更一般化和代数化。"
        },
        {
            "start": "0800",
            "title": "花拉子米（780–850年）",
            "description": "Muhammad al-Khwarizmi (780–850)<br>奠定代数学并传播印度—阿拉伯计算法，“algorithm”一词源自其名。"
        },
        {
            "start": "0820",
            "title": "花拉子米的代数学",
            "description": "Al-Khwarizmi’s algebra<br>系统求解方程的著作推动代数学成为独立数学学科。"
        },
        {
            "start": "1068",
            "title": "奥马尔·海亚姆（1048–1131年）",
            "description": "Omar Khayyam (1048–1131)<br>分类并以几何方法求解三次方程，同时改进天文表。"
        },
        {
            "start": "1190",
            "title": "斐波那契（1170–1250年）",
            "description": "Fibonacci (1170–1250)<br>在拉丁欧洲推广印度—阿拉伯数字与商业算术。"
        },
        {
            "start": "1202",
            "title": "斐波那契《计算之书》",
            "description": "Fibonacci’s Liber Abaci<br>印度—阿拉伯数字与高效算法被介绍给欧洲商业和计算。"
        },
        {
            "start": "1340",
            "title": "马德哈瓦与喀拉拉学派无穷级数",
            "description": "Madhava and Kerala infinite series<br>正弦、余弦、反正切与圆周率无穷级数预示分析学关键技术。",
            "end": "1400",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "1360",
            "title": "桑加马格拉马的马德哈瓦（1340–1425年）",
            "description": "Madhava of Sangamagrama (1340–1425)<br>开创研究三角函数与圆周率无穷级数的喀拉拉学派传统。"
        },
        {
            "start": "1521",
            "title": "杰罗拉莫·卡尔达诺（1501–1576年）",
            "description": "Gerolamo Cardano (1501–1576)<br>推进代数、概率与力学，并记录三次和四次方程的解法。"
        },
        {
            "start": "1627",
            "title": "皮埃尔·德·费马（1607–1665年）",
            "description": "Pierre de Fermat (1607–1665)<br>共同奠定解析几何、数论与数学概率论。"
        },
        {
            "start": "1637",
            "title": "解析几何发表",
            "description": "Analytic geometry published<br>笛卡尔与费马把代数方程和几何曲线联系起来。"
        },
        {
            "start": "1643",
            "title": "布莱兹·帕斯卡（1623–1662年）",
            "description": "Blaise Pascal (1623–1662)<br>推进概率、射影几何、流体力学与信念哲学。"
        },
        {
            "start": "1666",
            "title": "戈特弗里德·莱布尼茨（1646–1716年）",
            "description": "Gottfried Wilhelm Leibniz (1646–1716)<br>共同创立微积分，并发展二进制算术、形式逻辑与理性主义形而上学。"
        },
        {
            "start": "1684",
            "title": "莱布尼茨发表微分学",
            "description": "Leibniz publishes differential calculus<br>紧凑的符号微积分使变化率可系统计算。"
        },
        {
            "start": "1727",
            "title": "莱昂哈德·欧拉（1707–1783年）",
            "description": "Leonhard Euler (1707–1783)<br>统一并扩展分析、数论、力学、图论与数学记号。"
        },
        {
            "start": "1769",
            "title": "皮埃尔-西蒙·拉普拉斯（1749–1827年）",
            "description": "Pierre-Simon Laplace (1749–1827)<br>发展天体力学、概率论与数学决定论。"
        },
        {
            "start": "1788",
            "title": "约瑟夫·傅里叶（1768–1830年）",
            "description": "Joseph Fourier (1768–1830)<br>通过热扩散数学理论创立傅里叶分析。"
        },
        {
            "start": "1797",
            "title": "卡尔·弗里德里希·高斯（1777–1855年）",
            "description": "Carl Friedrich Gauss (1777–1855)<br>在数论、几何、统计、天文与地球物理方面作出奠基性贡献。"
        },
        {
            "start": "1865",
            "title": "格奥尔格·康托尔（1845–1918年）",
            "description": "Georg Cantor (1845–1918)<br>创立集合论与不同无穷基数的数学。"
        },
        {
            "start": "1868",
            "title": "戈特洛布·弗雷格（1848–1925年）",
            "description": "Gottlob Frege (1848–1925)<br>创立现代谓词逻辑，改变语言哲学与数学哲学。"
        },
        {
            "start": "1879",
            "title": "弗雷格《概念文字》",
            "description": "Frege’s Begriffsschrift<br>现代量化逻辑为证明与基础论提供新形式语言。"
        },
        {
            "start": "1882",
            "title": "大卫·希尔伯特（1862–1943年）",
            "description": "David Hilbert (1862–1943)<br>重塑几何、代数、分析与数学基础纲领。"
        },
        {
            "start": "1902",
            "title": "埃米·诺特（1882–1935年）",
            "description": "Emmy Noether (1882–1935)<br>变革抽象代数，并把物理对称性与守恒定律联系起来。"
        },
        {
            "start": "1910",
            "title": "罗素与怀特海《数学原理》",
            "description": "Russell and Whitehead’s Principia Mathematica<br>对数学的大规模逻辑重建凸显基础危机与分析哲学。",
            "end": "1913",
            "isDuration": true,
            "textColor": "black",
            "color": "#3A86FF"
        },
        {
            "start": "1926",
            "title": "库尔特·哥德尔（1906–1978年）",
            "description": "Kurt Gödel (1906–1978)<br>证明不完备定理，改变逻辑学与数学哲学。"
        },
        {
            "start": "1931",
            "title": "哥德尔不完备定理",
            "description": "Gödel incompleteness theorems<br>足够强的形式系统不能同时完备并在内部证明自身一致性。"
        },
        {
            "start": "1936",
            "title": "克劳德·香农（1916–2001年）",
            "description": "Claude Shannon (1916–2001)<br>创立信息论，并把布尔逻辑与数字电路联系起来。"
        },
        {
            "start": "1948",
            "title": "香农信息论",
            "description": "Shannon’s information theory<br>信息、熵、信道容量与编码获得定量数学框架。"
        },
        {
            "start": "1951",
            "title": "罗杰·彭罗斯（1931年–）",
            "description": "Roger Penrose (1931–)<br>发展相对论几何方法、奇点理论以及心灵与物理的基础问题。"
        }
    ]
};

// 物理、化学与材料
var tl_physical_science = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0439",
            "title": "德谟克利特（约公元前460–公元前370年）",
            "description": "Democritus (c. 460–370 BCE)<br>发展原子论，用在虚空中运动的不可分原子解释复杂现象。"
        },
        {
            "start": "0985",
            "title": "伊本·海赛姆（965–1040年）",
            "description": "Ibn al-Haytham (965–1040)<br>建立视觉与光学的数学—实验理论。"
        },
        {
            "start": "1021",
            "title": "伊本·海赛姆《光学书》",
            "description": "Ibn al-Haytham’s Book of Optics<br>以光进入眼睛解释视觉，并以几何、受控观察与实验支持。"
        },
        {
            "start": "1584",
            "title": "伽利略·伽利莱（1564–1642年）",
            "description": "Galileo Galilei (1564–1642)<br>结合实验、数学和仪器，变革力学与天文学。"
        },
        {
            "start": "1600",
            "title": "吉尔伯特《论磁》",
            "description": "Gilbert’s De Magnete<br>系统实验把地球视为磁体，并区分磁学与静电。"
        },
        {
            "start": "1643",
            "title": "托里拆利气压计",
            "description": "Torricelli’s barometer<br>水银柱证明大气压力，并使真空成为可实验研究的对象。"
        },
        {
            "start": "1647",
            "title": "罗伯特·波义耳（1627–1691年）",
            "description": "Robert Boyle (1627–1691)<br>推动实验化学并建立气体定量定律。"
        },
        {
            "start": "1649",
            "title": "克里斯蒂安·惠更斯（1629–1695年）",
            "description": "Christiaan Huygens (1629–1695)<br>推进波动光学、力学、概率、计时与行星天文学。"
        },
        {
            "start": "1655",
            "title": "罗伯特·胡克（1635–1703年）",
            "description": "Robert Hooke (1635–1703)<br>在显微学、弹性、力学、天文与实验方法方面作出重要贡献。"
        },
        {
            "start": "1662",
            "title": "波义耳定律",
            "description": "Boyle’s law<br>压力与体积被定量关联，成为受控实验物理化学的典范。"
        },
        {
            "start": "1662",
            "title": "艾萨克·牛顿（1642–1727年）",
            "description": "Isaac Newton (1642–1727)<br>统一地上与天体力学，并变革光学和数学。"
        },
        {
            "start": "1676",
            "title": "罗默估算有限光速",
            "description": "Rømer estimates the finite speed of light<br>木卫一时序变化提供光以有限速度传播的首个定量证据。"
        },
        {
            "start": "1687",
            "title": "牛顿《自然哲学的数学原理》",
            "description": "Newton’s Principia<br>运动定律与万有引力统一地面力学、天体运动与数学预测。"
        },
        {
            "start": "1726",
            "title": "本杰明·富兰克林（1706–1790年）",
            "description": "Benjamin Franklin (1706–1790)<br>确立电学关键概念，并连接实验、发明与公共制度。"
        },
        {
            "start": "1742",
            "title": "摄氏温标",
            "description": "Celsius temperature scale<br>可重复温标把温度测量连接到固定物理基准点。"
        },
        {
            "start": "1752",
            "title": "富兰克林闪电实验",
            "description": "Franklin’s lightning experiments<br>大气闪电与实验室电学相联系，并催生避雷针。"
        },
        {
            "start": "1763",
            "title": "安托万·拉瓦锡（1743–1794年）",
            "description": "Antoine Lavoisier (1743–1794)<br>奠定定量化学分析以及现代元素和质量守恒概念。"
        },
        {
            "start": "1786",
            "title": "约翰·道尔顿（1766–1844年）",
            "description": "John Dalton (1766–1844)<br>提出近代化学原子论与化合比例的定量定律。"
        },
        {
            "start": "1789",
            "title": "拉瓦锡化学革命",
            "description": "Lavoisier’s chemical revolution<br>定量质量平衡、氧化学与新命名法取代燃素说。"
        },
        {
            "start": "1800",
            "title": "伏打电堆",
            "description": "Voltaic pile<br>首个连续电池使受控电化学与电流研究成为可能。"
        },
        {
            "start": "1803",
            "title": "道尔顿原子论",
            "description": "Dalton’s atomic theory<br>化学元素被建模为按简单整数比结合的原子。"
        },
        {
            "start": "1811",
            "title": "阿伏伽德罗分子假说",
            "description": "Avogadro’s molecular hypothesis<br>提出相同条件下等体积气体含有相同数目分子。"
        },
        {
            "start": "1811",
            "title": "迈克尔·法拉第（1791–1867年）",
            "description": "Michael Faraday (1791–1867)<br>发现电磁感应，并引入以场为基础的物理思维。"
        },
        {
            "start": "1820",
            "title": "电磁作用被发现",
            "description": "Electromagnetism discovered<br>奥斯特发现电流使磁针偏转，从而连接电与磁。"
        },
        {
            "start": "1824",
            "title": "卡诺热机理论",
            "description": "Carnot’s theory of heat engines<br>理想循环与效率极限奠定热力学基础。"
        },
        {
            "start": "1831",
            "title": "法拉第发现电磁感应",
            "description": "Faraday discovers electromagnetic induction<br>变化磁场产生电流，使电动机、发电机与场论成为可能。"
        },
        {
            "start": "1842",
            "title": "能量守恒的确立",
            "description": "Conservation of energy established<br>迈尔、焦耳、亥姆霍兹等统一热、功与多种物理过程。",
            "end": "1850",
            "isDuration": true,
            "textColor": "black",
            "color": "#00A6A6"
        },
        {
            "start": "1851",
            "title": "詹姆斯·克拉克·麦克斯韦（1831–1879年）",
            "description": "James Clerk Maxwell (1831–1879)<br>以场方程统一电、磁与光，并推进统计物理。"
        },
        {
            "start": "1854",
            "title": "德米特里·门捷列夫（1834–1907年）",
            "description": "Dmitri Mendeleev (1834–1907)<br>按周期组织元素，并成功预测缺失元素及其性质。"
        },
        {
            "start": "1859",
            "title": "约西亚·威拉德·吉布斯（1839–1903年）",
            "description": "J. Willard Gibbs (1839–1903)<br>创立化学热力学、相理论与统计力学关键方法。"
        },
        {
            "start": "1864",
            "title": "路德维希·玻尔兹曼（1844–1906年）",
            "description": "Ludwig Boltzmann (1844–1906)<br>把热力学与原子统计及熵联系起来。"
        },
        {
            "start": "1865",
            "title": "麦克斯韦电磁场理论",
            "description": "Maxwell’s electromagnetic field theory<br>场方程表明光是电磁波，并统一电、磁与光学。"
        },
        {
            "start": "1869",
            "title": "门捷列夫元素周期表",
            "description": "Mendeleev’s periodic table<br>周期组织揭示规律，并预测未发现元素及其性质。"
        },
        {
            "start": "1878",
            "title": "马克斯·普朗克（1858–1947年）",
            "description": "Max Planck (1858–1947)<br>引入能量量子，开启量子理论。"
        },
        {
            "start": "1887",
            "title": "迈克耳孙—莫雷实验",
            "description": "Michelson–Morley experiment<br>高灵敏度零结果挑战以太理论，并成为后来相对论讨论核心。"
        },
        {
            "start": "1887",
            "title": "玛丽·居里（1867–1934年）",
            "description": "Marie Curie (1867–1934)<br>开创放射性研究，并分离钋和镭。"
        },
        {
            "start": "1891",
            "title": "欧内斯特·卢瑟福（1871–1937年）",
            "description": "Ernest Rutherford (1871–1937)<br>通过放射性衰变研究和核式原子模型奠定核物理。"
        },
        {
            "start": "1895",
            "title": "X射线发现",
            "description": "Discovery of X-rays<br>伦琴发现穿透性辐射，改变成像、医学与原子物理。"
        },
        {
            "start": "1896",
            "title": "放射性发现",
            "description": "Discovery of radioactivity<br>贝克勒尔发现铀化合物自发发出穿透性辐射。"
        },
        {
            "start": "1897",
            "title": "电子发现",
            "description": "Electron discovered<br>J.J.汤姆孙识别带电子原子粒子，表明原子可分。"
        },
        {
            "start": "1898",
            "title": "钋与镭被分离",
            "description": "Polonium and radium isolated<br>居里夫妇研究确立放射性是物质属性，并开启核科学。"
        },
        {
            "start": "1898",
            "title": "莉泽·迈特纳（1878–1968年）",
            "description": "Lise Meitner (1878–1968)<br>从理论上解释核裂变，并对核物理作出奠基性贡献。"
        },
        {
            "start": "1899",
            "title": "阿尔伯特·爱因斯坦（1879–1955年）",
            "description": "Albert Einstein (1879–1955)<br>以相对论和量子论证重构空间、时间、引力、光与统计物理。"
        },
        {
            "start": "1900",
            "title": "普朗克量子假说",
            "description": "Planck’s quantum hypothesis<br>为解释黑体辐射，能量交换被量子化，量子理论由此开始。"
        },
        {
            "start": "1905",
            "title": "爱因斯坦奇迹年",
            "description": "Einstein’s annus mirabilis<br>关于光量子、布朗运动、狭义相对论与质能等价的论文改变物理学。"
        },
        {
            "start": "1905",
            "title": "尼尔斯·玻尔（1885–1962年）",
            "description": "Niels Bohr (1885–1962)<br>发展量子原子理论与互补原理。"
        },
        {
            "start": "1907",
            "title": "埃尔温·薛定谔（1887–1961年）",
            "description": "Erwin Schrödinger (1887–1961)<br>创立波动力学，并揭示量子理论的概念问题。"
        },
        {
            "start": "1911",
            "title": "卢瑟福核式原子",
            "description": "Rutherford nuclear atom<br>散射实验表明原子大部分质量与正电荷集中在微小原子核中。"
        },
        {
            "start": "1911",
            "title": "超导现象发现",
            "description": "Superconductivity discovered<br>汞在低温下电阻消失，揭示新的量子物态。"
        },
        {
            "start": "1913",
            "title": "玻尔原子模型",
            "description": "Bohr model of the atom<br>量子化电子态解释氢光谱，并连接原子结构与量子理论。"
        },
        {
            "start": "1913",
            "title": "莫塞莱确立原子序数",
            "description": "Moseley establishes atomic number<br>X射线光谱表明周期表由核电荷而非原子量排序。"
        },
        {
            "start": "1915",
            "title": "广义相对论",
            "description": "General theory of relativity<br>引力被解释为时空曲率，并对光、轨道和宇宙学作出新预测。"
        },
        {
            "start": "1921",
            "title": "维尔纳·海森堡（1901–1976年）",
            "description": "Werner Heisenberg (1901–1976)<br>创立矩阵力学并提出不确定性原理。"
        },
        {
            "start": "1922",
            "title": "保罗·狄拉克（1902–1984年）",
            "description": "Paul Dirac (1902–1984)<br>统一量子力学与狭义相对论，并预言反物质。"
        },
        {
            "start": "1924",
            "title": "德布罗意物质波",
            "description": "de Broglie matter waves<br>波粒二象性从光扩展到物质粒子。"
        },
        {
            "start": "1925",
            "title": "矩阵力学",
            "description": "Matrix mechanics<br>海森堡、玻恩与约旦建立量子可观测量的完整非经典力学。"
        },
        {
            "start": "1926",
            "title": "薛定谔波动力学",
            "description": "Schrödinger wave mechanics<br>波动方程为量子力学提供强大的计算形式。"
        },
        {
            "start": "1927",
            "title": "不确定性原理",
            "description": "Uncertainty principle<br>量子理论对某些物理量对的共同确定设定根本极限。"
        },
        {
            "start": "1932",
            "title": "中子发现",
            "description": "Neutron discovered<br>查德威克识别中性核粒子，澄清同位素并推动核反应研究。"
        },
        {
            "start": "1932",
            "title": "吴健雄（1912–1997年）",
            "description": "Chien-Shiung Wu (1912–1997)<br>完成证明弱相互作用宇称不守恒的决定性实验。"
        },
        {
            "start": "1935",
            "title": "EPR论证与薛定谔的猫",
            "description": "EPR argument and Schrödinger’s cat<br>思想实验揭示量子理论关于完备性、测量、纠缠与实在的张力。"
        },
        {
            "start": "1938",
            "title": "核裂变被发现并解释",
            "description": "Nuclear fission discovered and explained<br>哈恩与施特拉斯曼实验、迈特纳与弗里施解释揭示原子核裂变及巨大能量释放。",
            "end": "1939",
            "isDuration": true,
            "textColor": "black",
            "color": "#00A6A6"
        },
        {
            "start": "1938",
            "title": "理查德·费曼（1918–1988年）",
            "description": "Richard Feynman (1918–1988)<br>重新表述量子电动力学，并引入强大的图示和计算方法。"
        },
        {
            "start": "1942-12-02",
            "title": "首次受控核链式反应",
            "description": "First controlled nuclear chain reaction<br>芝加哥一号堆证明可控自持核裂变反应。"
        },
        {
            "start": "1948",
            "title": "约翰·斯图尔特·贝尔（1928–1990年）",
            "description": "John Stewart Bell (1928–1990)<br>提出贝尔定理，使量子非定域性成为可实验检验的问题。"
        },
        {
            "start": "1986",
            "title": "高温超导发现",
            "description": "High-temperature superconductivity<br>超过以往温度极限的陶瓷超导材料开启凝聚态研究大领域。"
        },
        {
            "start": "1995",
            "title": "玻色—爱因斯坦凝聚态被制成",
            "description": "Bose–Einstein condensate created<br>超冷原子占据共同量子态，可在宏观尺度观察。"
        },
        {
            "start": "2004",
            "title": "石墨烯被分离",
            "description": "Graphene isolated<br>单原子厚碳片展现卓越电子、机械与热性质。"
        },
        {
            "start": "2008",
            "title": "大型强子对撞机运行",
            "description": "Large Hadron Collider begins operation<br>世界最高能对撞机使标准模型精密检验与新物理搜索成为可能。"
        },
        {
            "start": "2012-07-04",
            "title": "希格斯玻色子发现",
            "description": "Higgs boson discovered<br>ATLAS与CMS观测到符合标准模型希格斯机制的粒子。"
        },
        {
            "start": "2019",
            "title": "量子计算优势实验",
            "description": "Quantum-computing advantage experiment<br>可编程超导处理器完成当时经典计算难以实际复现的专用采样任务。"
        },
        {
            "start": "2022-12-05",
            "title": "NIF实现聚变点火",
            "description": "Fusion ignition achieved at NIF<br>激光驱动靶释放的聚变能超过输送到靶的激光能，成为惯性约束里程碑。"
        }
    ]
};

// 生命科学与医学
var tl_life_medicine = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1599",
            "title": "古埃及医学纸草文献",
            "description": "Egyptian medical papyri<br>《埃德温·史密斯纸草书》等记录诊断、创伤与实用治疗。"
        },
        {
            "start": "-0449",
            "title": "希波克拉底文集",
            "description": "Hippocratic Corpus<br>希腊医学文献强调病例观察、预后、环境与疾病的自然解释。",
            "end": "-0349",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "-0439",
            "title": "希波克拉底（约公元前460–公元前370年）",
            "description": "Hippocrates (c. 460–370 BCE)<br>象征以观察、预后和疾病自然解释为基础的临床传统。"
        },
        {
            "start": "0149",
            "title": "盖伦（129–216年）",
            "description": "Galen (129–216)<br>整合解剖、生理与医学理论，形成延续数百年的体系。"
        },
        {
            "start": "0885",
            "title": "拉齐（865–925年）",
            "description": "Al-Razi (865–925)<br>推进临床医学、鉴别诊断、药理学与实验实践。"
        },
        {
            "start": "1025",
            "title": "伊本·西那《医典》",
            "description": "Avicenna’s Canon of Medicine<br>综合医学体系成为伊斯兰世界与欧洲机构的标准参考。"
        },
        {
            "start": "1534",
            "title": "安德烈亚斯·维萨里（1514–1564年）",
            "description": "Andreas Vesalius (1514–1564)<br>通过人体解剖和纠正盖伦错误奠定近代解剖学。"
        },
        {
            "start": "1543",
            "title": "维萨里《人体构造》出版",
            "description": "Vesalius publishes On the Fabric of the Human Body<br>直接解剖与精密图示纠正传统解剖，使人体成为观察对象。"
        },
        {
            "start": "1598",
            "title": "威廉·哈维（1578–1657年）",
            "description": "William Harvey (1578–1657)<br>通过定量实验论证全身血液循环与心脏泵血作用。"
        },
        {
            "start": "1628",
            "title": "哈维论证血液循环",
            "description": "Harvey demonstrates blood circulation<br>定量解剖推理表明心脏驱动封闭的血液循环。"
        },
        {
            "start": "1652",
            "title": "安东尼·范·列文虎克（1632–1723年）",
            "description": "Antonie van Leeuwenhoek (1632–1723)<br>使用高性能单透镜显微镜观察微生物、精子与血细胞。"
        },
        {
            "start": "1665",
            "title": "胡克《显微术》",
            "description": "Hooke’s Micrographia<br>显微图像揭示不可见世界，并把“细胞”引入生物描述。"
        },
        {
            "start": "1674",
            "title": "列文虎克观察微生物",
            "description": "Leeuwenhoek observes microorganisms<br>单透镜显微镜揭示原生生物、细菌与微小生殖细胞。",
            "end": "1683",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1727",
            "title": "卡尔·林奈（1707–1778年）",
            "description": "Carl Linnaeus (1707–1778)<br>标准化双名法与层级生物分类。"
        },
        {
            "start": "1727",
            "title": "布丰伯爵乔治-路易·勒克莱尔（1707–1788年）",
            "description": "Georges-Louis Leclerc, Comte de Buffon (1707–1788)<br>推动比较自然史、深时与物种变化的讨论。"
        },
        {
            "start": "1735",
            "title": "林奈《自然系统》出版",
            "description": "Linnaeus publishes Systema Naturae<br>层级分类与标准命名使全球生物多样性更易比较和交流。"
        },
        {
            "start": "1769",
            "title": "爱德华·詹纳（1749–1823年）",
            "description": "Edward Jenner (1749–1823)<br>证明牛痘接种可预防天花，开启现代免疫接种。"
        },
        {
            "start": "1796",
            "title": "詹纳天花疫苗接种",
            "description": "Jenner’s smallpox vaccination<br>以牛痘进行受控接种提供持久保护并成为免疫接种范式。"
        },
        {
            "start": "1829",
            "title": "查尔斯·达尔文（1809–1882年）",
            "description": "Charles Darwin (1809–1882)<br>以自然选择和共同祖先解释适应与生物多样性。"
        },
        {
            "start": "1838",
            "title": "细胞学说形成",
            "description": "Cell theory formulated<br>施莱登与施旺提出动植物由细胞构成，确立生物共同单位。",
            "end": "1839",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1840",
            "title": "弗洛伦斯·南丁格尔（1820–1910年）",
            "description": "Florence Nightingale (1820–1910)<br>运用统计、卫生与制度改革改变护理和公共卫生。"
        },
        {
            "start": "1842",
            "title": "格里高尔·孟德尔（1822–1884年）",
            "description": "Gregor Mendel (1822–1884)<br>通过受控杂交实验发现颗粒式遗传规律。"
        },
        {
            "start": "1842",
            "title": "路易·巴斯德（1822–1895年）",
            "description": "Louis Pasteur (1822–1895)<br>确立微生物病因、发酵科学、巴氏消毒与实验室疫苗。"
        },
        {
            "start": "1846",
            "title": "外科麻醉公开演示",
            "description": "Public demonstration of surgical anesthesia<br>乙醚麻醉降低大型手术痛苦，使现代外科成为可能。"
        },
        {
            "start": "1847",
            "title": "塞麦尔维斯推广洗手",
            "description": "Semmelweis promotes handwashing<br>含氯洗手显著降低产褥热，预示感染控制。"
        },
        {
            "start": "1854",
            "title": "约翰·斯诺绘制霍乱地图",
            "description": "John Snow maps cholera<br>病例空间制图与自然实验把霍乱与污染水源联系起来。"
        },
        {
            "start": "1859",
            "title": "达尔文《物种起源》出版",
            "description": "Darwin publishes On the Origin of Species<br>自然选择与共同祖先为适应和生物多样性提供统一历史解释。"
        },
        {
            "start": "1861",
            "title": "巴斯德反驳自然发生说",
            "description": "Pasteur refutes spontaneous generation<br>受控烧瓶实验支持生源论，并强化微生物解释。"
        },
        {
            "start": "1863",
            "title": "罗伯特·科赫（1843–1910年）",
            "description": "Robert Koch (1843–1910)<br>识别重要病原体，并形式化传染病因果推理。"
        },
        {
            "start": "1865",
            "title": "孟德尔发表遗传规律",
            "description": "Mendel presents laws of inheritance<br>定量杂交揭示离散遗传因子、分离与独立分配。"
        },
        {
            "start": "1869",
            "title": "伊万·巴甫洛夫（1849–1936年）",
            "description": "Ivan Pavlov (1849–1936)<br>建立条件反射与生理调节的实验研究。"
        },
        {
            "start": "1876",
            "title": "科赫证明炭疽杆菌致病",
            "description": "Koch demonstrates Bacillus anthracis causation<br>特定微生物被实验性地连接到特定疾病。"
        },
        {
            "start": "1876",
            "title": "西格蒙德·弗洛伊德（1856–1939年）",
            "description": "Sigmund Freud (1856–1939)<br>把无意识与冲突置于系统心灵理论和治疗核心。"
        },
        {
            "start": "1882",
            "title": "科赫发现结核杆菌",
            "description": "Koch identifies the tuberculosis bacillus<br>结核病的微生物病因被分离并证明。"
        },
        {
            "start": "1885",
            "title": "巴斯德狂犬病疫苗",
            "description": "Pasteur’s rabies vaccine<br>暴露后接种证明实验室减毒可预防致命感染。"
        },
        {
            "start": "1897",
            "title": "病毒与细菌被区分",
            "description": "Viruses distinguished from bacteria<br>可滤过感染因子表明存在比细菌更小的致病实体。"
        },
        {
            "start": "1902",
            "title": "染色体遗传学说",
            "description": "Chromosome theory of inheritance<br>萨顿与博韦里把孟德尔因子与减数分裂中的染色体行为联系起来。",
            "end": "1903",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1906",
            "title": "神经元学说获确认",
            "description": "Neuron doctrine recognized<br>卡哈尔的神经细胞观点确立神经元为离散信号单位。"
        },
        {
            "start": "1921",
            "title": "胰岛素分离并用于临床",
            "description": "Insulin isolated and used clinically<br>糖尿病从迅速致命疾病转变为可治疗的慢性病。",
            "end": "1922",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1922",
            "title": "芭芭拉·麦克林托克（1902–1992年）",
            "description": "Barbara McClintock (1902–1992)<br>发现转座遗传元件与动态基因组调控。"
        },
        {
            "start": "1928",
            "title": "青霉素被发现",
            "description": "Penicillin observed<br>弗莱明观察到霉菌抗菌作用，后续开发开启抗生素医学。"
        },
        {
            "start": "1934",
            "title": "乔纳斯·索尔克（1914–1995年）",
            "description": "Jonas Salk (1914–1995)<br>开发首种广泛使用的有效灭活脊髓灰质炎疫苗。"
        },
        {
            "start": "1937",
            "title": "克雷布斯循环",
            "description": "Krebs cycle<br>核心代谢循环解释细胞如何氧化营养并转移能量。"
        },
        {
            "start": "1938",
            "title": "弗雷德里克·桑格（1918–2013年）",
            "description": "Frederick Sanger (1918–2013)<br>创立蛋白质与DNA测序的基础方法。"
        },
        {
            "start": "1940",
            "title": "罗莎琳德·富兰克林（1920–1958年）",
            "description": "Rosalind Franklin (1920–1958)<br>获得DNA结构的关键X射线衍射证据，并推进病毒与碳材料研究。"
        },
        {
            "start": "1944",
            "title": "DNA被确定为遗传物质",
            "description": "DNA identified as hereditary material<br>艾弗里、麦克劳德与麦卡蒂证明DNA携带细菌转化活性。"
        },
        {
            "start": "1950",
            "title": "屠呦呦（1930年–）",
            "description": "Tu Youyou (1930–)<br>结合传统文献与现代筛选发现青蒿素抗疟疗法。"
        },
        {
            "start": "1951",
            "title": "HeLa细胞系建立",
            "description": "HeLa cell line established<br>首个广泛使用的人类永生细胞系成为生物医学平台，同时留下持久知情同意伦理问题。"
        },
        {
            "start": "1952",
            "title": "赫尔希—蔡斯实验",
            "description": "Hershey–Chase experiment<br>噬菌体实验进一步支持DNA而非蛋白质是遗传物质。"
        },
        {
            "start": "1953",
            "title": "DNA双螺旋结构",
            "description": "DNA double-helix structure<br>沃森和克里克利用富兰克林、威尔金斯等关键证据提出碱基配对双螺旋。"
        },
        {
            "start": "1953",
            "title": "米勒—尤里前生物化学实验",
            "description": "Miller–Urey prebiotic chemistry experiment<br>在模拟早期地球条件下生成有机分子，使生命起源化学可实验研究。"
        },
        {
            "start": "1954",
            "title": "首次成功人体器官移植",
            "description": "First successful human organ transplant<br>同卵双胞胎间肾移植确立器官替代为临床医学。"
        },
        {
            "start": "1954",
            "title": "珍·古道尔（1934年–）",
            "description": "Jane Goodall (1934–)<br>通过长期野外观察黑猩猩行为与文化改变灵长类学。"
        },
        {
            "start": "1955",
            "title": "索尔克脊灰疫苗投入使用",
            "description": "Salk polio vaccine introduced<br>大规模接种显著减少麻痹性脊髓灰质炎。"
        },
        {
            "start": "1958",
            "title": "梅塞尔松—斯塔尔实验",
            "description": "Meselson–Stahl experiment<br>密度梯度实验证明DNA半保留复制。"
        },
        {
            "start": "1961",
            "title": "遗传密码被破译",
            "description": "Genetic code deciphered<br>实验把核苷酸三联体映射到氨基酸，连接DNA序列与蛋白质合成。",
            "end": "1966",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1967",
            "title": "首次人体心脏移植",
            "description": "First human heart transplant<br>心脏移植展示现代外科的临床能力与伦理复杂性。"
        },
        {
            "start": "1970",
            "title": "逆转录酶发现",
            "description": "Reverse transcriptase discovered<br>RNA到DNA的信息传递扩展中心法则，改变病毒学与分子生物学。"
        },
        {
            "start": "1972",
            "title": "计算机断层扫描进入医学",
            "description": "Computed tomography enters medicine<br>计算机重建把X射线投影转换为活体横断面图像。"
        },
        {
            "start": "1973",
            "title": "重组DNA技术",
            "description": "Recombinant DNA technology<br>不同来源DNA被切割和连接，开启现代基因工程。"
        },
        {
            "start": "1975",
            "title": "单克隆抗体",
            "description": "Monoclonal antibodies<br>杂交瘤方法使单一特异性抗体可无限生产。"
        },
        {
            "start": "1975",
            "title": "卡塔琳·考里科（1955年–）",
            "description": "Katalin Karikó (1955–)<br>开创使高效mRNA疫苗成为可能的核苷修饰mRNA技术。"
        },
        {
            "start": "1977",
            "title": "桑格DNA测序",
            "description": "Sanger DNA sequencing<br>链终止化学使可靠核苷酸测序广泛实用化。"
        },
        {
            "start": "1978",
            "title": "首例试管婴儿出生",
            "description": "First birth through IVF<br>体外受精创建辅助生殖医学新领域，并引发重大生命伦理问题。"
        },
        {
            "start": "1980-05-08",
            "title": "天花被根除",
            "description": "Smallpox eradicated<br>世卫组织宣布天花根除，这是首个且迄今唯一全球根除的人类传染病。"
        },
        {
            "start": "1981",
            "title": "艾滋病被识别为新综合征",
            "description": "AIDS recognized as a new syndrome<br>异常免疫缺陷病例开启全球大规模研究、公共卫生与社会应对。"
        },
        {
            "start": "1983",
            "title": "HIV被识别",
            "description": "HIV identified<br>研究者分离导致艾滋病的逆转录病毒，使诊断与靶向治疗研究成为可能。",
            "end": "1984",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1983",
            "title": "聚合酶链式反应构想",
            "description": "Polymerase chain reaction conceived<br>PCR使特定DNA序列可指数扩增，改变生物学、医学与法医学。"
        },
        {
            "start": "1984",
            "title": "詹妮弗·杜德纳（1964年–）",
            "description": "Jennifer Doudna (1964–)<br>共同把CRISPR-Cas9开发为可编程基因组编辑方法。"
        },
        {
            "start": "1987",
            "title": "CRISPR重复序列首次报告",
            "description": "CRISPR repeats first reported<br>细菌中异常重复DNA序列开启理解适应性免疫与基因组编辑之路。"
        },
        {
            "start": "1988",
            "title": "埃马纽埃尔·沙尔庞捷（1968年–）",
            "description": "Emmanuelle Charpentier (1968–)<br>共同把CRISPR-Cas9开发为可编程基因组编辑方法。"
        },
        {
            "start": "1990",
            "title": "人类基因组计划",
            "description": "Human Genome Project<br>国际测序与制图创建首个人类参考基因组及新基因组基础设施。",
            "end": "2003",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "1996",
            "title": "克隆羊多莉诞生",
            "description": "Dolly the sheep cloned<br>由成年体细胞克隆的哺乳动物证明核重编程，并引发重大伦理争论。"
        },
        {
            "start": "1998",
            "title": "RNA干扰发现",
            "description": "RNA interference discovered<br>双链RNA可沉默匹配基因，揭示重要调控与实验机制。"
        },
        {
            "start": "2001",
            "title": "人类基因组草图发表",
            "description": "Draft human genome published<br>公共与私人项目发布广泛人类基因组序列，改变生物医学研究。"
        },
        {
            "start": "2003",
            "title": "人类基因组计划完成",
            "description": "Human Genome Project completed<br>国际计划宣布完成高质量参考序列与基因组工具体系。"
        },
        {
            "start": "2005",
            "title": "新一代DNA测序",
            "description": "Next-generation DNA sequencing<br>大规模并行测序大幅降低成本，使群体规模基因组学成为可能。"
        },
        {
            "start": "2006",
            "title": "诱导多能干细胞",
            "description": "Induced pluripotent stem cells<br>成年细胞被重编程为多能状态，改变再生医学与疾病建模。"
        },
        {
            "start": "2010",
            "title": "合成细菌基因组控制细胞",
            "description": "Synthetic bacterial genome controls a cell<br>化学合成基因组被移入细胞并控制其复制与功能。"
        },
        {
            "start": "2012",
            "title": "CRISPR-Cas9可编程基因组编辑",
            "description": "CRISPR-Cas9 programmable genome editing<br>细菌防御酶被转化为广泛可编程DNA切割工具。"
        },
        {
            "start": "2013",
            "title": "人脑类器官",
            "description": "Human cerebral organoids<br>干细胞来源三维组织成为脑发育与疾病的新实验模型。"
        },
        {
            "start": "2018",
            "title": "基因编辑婴儿事件",
            "description": "Gene-edited babies announced<br>在缺乏充分科学与伦理正当性的情况下实施可遗传人类基因组编辑，引发全球治理改革。"
        },
        {
            "start": "2020",
            "title": "mRNA疫苗全球大规模应用",
            "description": "mRNA vaccines deployed at global scale<br>核苷修饰mRNA平台快速设计制造高效COVID-19疫苗。",
            "end": "2021",
            "isDuration": true,
            "textColor": "black",
            "color": "#2A9D8F"
        },
        {
            "start": "2022",
            "title": "端粒到端粒人类基因组完成",
            "description": "Telomere-to-telomere human genome completed<br>此前未解析的重复区域被组装，形成首个基本完整人类基因组序列。"
        },
        {
            "start": "2023",
            "title": "人类泛基因组参考发布",
            "description": "Human pangenome reference released<br>多样化多基因组参考减少对单一线性基因组依赖，改善人类变异表示。"
        },
        {
            "start": "2023-12-08",
            "title": "首个获FDA批准的CRISPR疗法",
            "description": "First FDA-approved CRISPR therapy<br>Casgevy成为首个获FDA批准的CRISPR-Cas9基因编辑疗法，最初用于镰状细胞病。"
        },
        {
            "start": "2024-03-16",
            "title": "基因编辑猪肾移植给存活患者",
            "description": "Genetically edited pig kidney transplanted into a living person<br>基因编辑猪肾被移植给存活患者，在仍有不确定性的情况下推进临床异种移植。"
        },
        {
            "start": "2025",
            "title": "Prime editing首次用于人体治疗",
            "description": "First personalized in-vivo base-editing therapy<br>患者接受Prime editing处理的治疗细胞，标志更灵活精准编辑方法进入临床。"
        },
        {
            "start": "2025",
            "title": "首个个体化体内碱基编辑疗法",
            "description": "Prime editing first used therapeutically in a person<br>为患罕见代谢病婴儿快速设计并体内递送个体化CRISPR碱基编辑疗法。"
        }
    ]
};

// 地球、环境与宇宙
var tl_earth_space = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0749",
            "title": "巴比伦预测天文学",
            "description": "Babylonian predictive astronomy<br>长期观测记录使日月食与行星现象的数值预测成为可能。"
        },
        {
            "start": "-0255",
            "title": "埃拉托色尼（约公元前276–公元前195年）",
            "description": "Eratosthenes (c. 276–195 BCE)<br>测量地球周长，并推进地理学、年代学与数学。"
        },
        {
            "start": "-0239",
            "title": "测量地球周长",
            "description": "Measurement of Earth’s circumference<br>埃拉托色尼利用太阳角度与距离估计得到相当准确的地球尺度。"
        },
        {
            "start": "0120",
            "title": "克劳狄乌斯·托勒密（100–170年）",
            "description": "Claudius Ptolemy (100–170)<br>系统化数学天文学、地理学和光学，影响逾千年。"
        },
        {
            "start": "0132",
            "title": "张衡候风地动仪",
            "description": "Zhang Heng’s seismoscope<br>机械探测器可指示远方地震方向。"
        },
        {
            "start": "0150",
            "title": "托勒密《天文学大成》",
            "description": "Ptolemy’s Almagest<br>具有数学预测能力的地心体系综合古代观测天文学。"
        },
        {
            "start": "0993",
            "title": "比鲁尼（973–1048年）",
            "description": "Al-Biruni (973–1048)<br>在天文学、测地学、地理学和文化研究中运用精密测量与比较方法。"
        },
        {
            "start": "1051",
            "title": "沈括（1031–1095年）",
            "description": "Shen Kuo (1031–1095)<br>在《梦溪笔谈》中综合天文、地质、磁学、工程与经验观察。"
        },
        {
            "start": "1088",
            "title": "沈括《梦溪笔谈》",
            "description": "Shen Kuo’s Dream Pool Essays<br>记录磁偏角、化石、地貌形成、天文、工程与观察方法。"
        },
        {
            "start": "1221",
            "title": "纳西尔丁·图西（1201–1274年）",
            "description": "Nasir al-Din al-Tusi (1201–1274)<br>推进天文学、三角学和行星模型，其技术后来与哥白尼方法相呼应。"
        },
        {
            "start": "1493",
            "title": "尼古拉·哥白尼（1473–1543年）",
            "description": "Nicolaus Copernicus (1473–1543)<br>以运动的地球和日心行星秩序重构天文学。"
        },
        {
            "start": "1543",
            "title": "哥白尼《天体运行论》",
            "description": "Copernicus publishes On the Revolutions<br>日心数学体系重组行星系统，并挑战地球的特权地位。"
        },
        {
            "start": "1572",
            "title": "第谷新星观测",
            "description": "Tycho’s new star<br>精密视差论证表明被认为不变的天界也会变化。"
        },
        {
            "start": "1577",
            "title": "第谷彗星观测",
            "description": "Tycho’s comet observations<br>彗星穿过假定的水晶天球，削弱传统天体结构。"
        },
        {
            "start": "1591",
            "title": "约翰内斯·开普勒（1571–1630年）",
            "description": "Johannes Kepler (1571–1630)<br>发现行星运动定量定律，推进物理天文学与光学。"
        },
        {
            "start": "1609",
            "title": "开普勒行星运动第一、第二定律",
            "description": "Kepler’s first two laws of planetary motion<br>椭圆轨道与面积定律以定量行星动力学取代完美圆。"
        },
        {
            "start": "1610",
            "title": "伽利略《星际信使》",
            "description": "Galileo publishes Sidereus Nuncius<br>月面山脉、木星卫星与无数恒星改变天体理论的证据基础。"
        },
        {
            "start": "1619",
            "title": "开普勒第三定律",
            "description": "Kepler’s third law<br>轨道周期与距离的精确关系统一太阳系尺度。"
        },
        {
            "start": "1632",
            "title": "伽利略《关于托勒密和哥白尼两大世界体系的对话》",
            "description": "Galileo’s Dialogue<br>支持地球运动的论证结合观察、力学与科学权威之争。"
        },
        {
            "start": "1676",
            "title": "埃德蒙·哈雷（1656–1742年）",
            "description": "Edmond Halley (1656–1742)<br>把牛顿天文学用于彗星预测和全球地球物理制图。"
        },
        {
            "start": "1705",
            "title": "哈雷预测彗星回归",
            "description": "Halley predicts the return of a comet<br>牛顿力学成功预测彗星回归，展示普遍定律的力量。"
        },
        {
            "start": "1746",
            "title": "詹姆斯·赫顿（1726–1797年）",
            "description": "James Hutton (1726–1797)<br>确立塑造地球的循环过程与深地质时间。"
        },
        {
            "start": "1755",
            "title": "康德—拉普拉斯星云假说起点",
            "description": "Kant–Laplace nebular hypothesis begins<br>康德提出太阳系由弥散物质自然演化形成。"
        },
        {
            "start": "1758",
            "title": "威廉·赫歇尔（1738–1822年）",
            "description": "William Herschel (1738–1822)<br>发现天王星，推进望远镜、恒星天文学与红外观测。"
        },
        {
            "start": "1781",
            "title": "发现天王星",
            "description": "Discovery of Uranus<br>赫歇尔的望远镜发现首次在古代之后扩展已知太阳系。"
        },
        {
            "start": "1785",
            "title": "赫顿地球理论",
            "description": "Hutton’s theory of the Earth<br>缓慢循环地质过程意味着地球历史具有巨大时间尺度。"
        },
        {
            "start": "1817",
            "title": "查尔斯·莱尔（1797–1875年）",
            "description": "Charles Lyell (1797–1875)<br>确立均变论地质学，为达尔文提供深时框架。"
        },
        {
            "start": "1830",
            "title": "莱尔《地质学原理》",
            "description": "Lyell’s Principles of Geology<br>以现今过程解释深远地质历史。",
            "end": "1833",
            "isDuration": true,
            "textColor": "black",
            "color": "#457B9D"
        },
        {
            "start": "1846",
            "title": "海王星被预测并观测",
            "description": "Neptune predicted and observed<br>数学摄动理论引导望远镜发现，成为预测天体力学的胜利。"
        },
        {
            "start": "1900",
            "title": "阿尔弗雷德·魏格纳（1880–1930年）",
            "description": "Alfred Wegener (1880–1930)<br>提出大陆漂移说，后来被纳入板块构造理论。"
        },
        {
            "start": "1909",
            "title": "埃德温·哈勃（1889–1953年）",
            "description": "Edwin Hubble (1889–1953)<br>确立宇宙的河外尺度与观测上的宇宙膨胀。"
        },
        {
            "start": "1912",
            "title": "魏格纳提出大陆漂移",
            "description": "Wegener proposes continental drift<br>提出大陆在地质时间中移动，统一解释化石与地质分布。"
        },
        {
            "start": "1919",
            "title": "日食检验广义相对论",
            "description": "Eclipse test of general relativity<br>星光偏折测量支持爱因斯坦预测，使相对论闻名世界。"
        },
        {
            "start": "1922",
            "title": "弗里德曼膨胀宇宙解",
            "description": "Friedmann’s expanding-universe solutions<br>广义相对论允许宇宙膨胀或收缩，而非必须静态。"
        },
        {
            "start": "1927",
            "title": "蕾切尔·卡森（1907–1964年）",
            "description": "Rachel Carson (1907–1964)<br>连接生态学、毒理学与公共传播，推动现代环境意识。"
        },
        {
            "start": "1929",
            "title": "哈勃关系与宇宙膨胀",
            "description": "Hubble relation and cosmic expansion<br>星系距离与红移相关，建立宇宙膨胀的观测证据。"
        },
        {
            "start": "1957-10-04",
            "title": "人造卫星一号发射",
            "description": "Sputnik 1 launches<br>首颗人造卫星开启太空时代，并加速全球科学工程投入。"
        },
        {
            "start": "1962",
            "title": "卡森《寂静的春天》",
            "description": "Carson publishes Silent Spring<br>关于农药的生态证据重塑环境科学、监管与公共风险讨论。"
        },
        {
            "start": "1962",
            "title": "斯蒂芬·霍金（1942–2018年）",
            "description": "Stephen Hawking (1942–2018)<br>连接黑洞物理、量子理论与宇宙学，并提出霍金辐射。"
        },
        {
            "start": "1963",
            "title": "板块构造论确立",
            "description": "Plate tectonics established<br>海底扩张、磁条带、地震与俯冲统一大陆漂移与全球地质。",
            "end": "1968",
            "isDuration": true,
            "textColor": "black",
            "color": "#457B9D"
        },
        {
            "start": "1964",
            "title": "宇宙微波背景发现",
            "description": "Cosmic microwave background discovered<br>早期宇宙遗留辐射为热大爆炸宇宙学提供决定性证据。"
        },
        {
            "start": "1967",
            "title": "脉冲星发现",
            "description": "Pulsars discovered<br>规则无线电脉冲揭示快速旋转中子星及极端物理新检验。"
        },
        {
            "start": "1968-12-24",
            "title": "阿波罗8号“地出”",
            "description": "Apollo 8 Earthrise<br>人类从月球轨道观看地球，强化行星与环境意识。"
        },
        {
            "start": "1969-07-20",
            "title": "阿波罗11号登月",
            "description": "Apollo 11 Moon landing<br>人类登陆另一世界，综合火箭、计算、材料、导航与行星科学。"
        },
        {
            "start": "1974",
            "title": "霍金辐射",
            "description": "Hawking radiation<br>量子场论表明黑洞发出热辐射并可蒸发。"
        },
        {
            "start": "1977",
            "title": "旅行者号任务发射",
            "description": "Voyager missions launch<br>机器人探测改变外行星知识，并持续进入星际空间。"
        },
        {
            "start": "1985",
            "title": "南极臭氧空洞被报告",
            "description": "Antarctic ozone hole reported<br>大气测量揭示与氯氟烃相关的严重季节性臭氧损失。"
        },
        {
            "start": "1990-04-24",
            "title": "哈勃空间望远镜发射",
            "description": "Hubble Space Telescope launched<br>空间成像改变从行星到早期宇宙的观测天文学。"
        },
        {
            "start": "1992",
            "title": "首批确认系外行星",
            "description": "First confirmed exoplanets<br>绕脉冲星运行的行星确立太阳系外存在行星系统。"
        },
        {
            "start": "1995",
            "title": "首颗类太阳恒星系外行星",
            "description": "First exoplanet around a Sun-like star<br>飞马座51b开启现代系外行星发现与比较行星科学。"
        },
        {
            "start": "1998",
            "title": "宇宙加速膨胀发现",
            "description": "Accelerating cosmic expansion discovered<br>Ia型超新星表明宇宙膨胀加速，暗示暗能量。"
        },
        {
            "start": "2009",
            "title": "开普勒空间望远镜发射",
            "description": "Kepler space telescope launched<br>凌星测光发现数千系外行星，确立行星普遍存在。"
        },
        {
            "start": "2014-11-12",
            "title": "罗塞塔号在彗星着陆",
            "description": "Rosetta lands Philae on a comet<br>航天器首次受控登陆彗核并研究原始太阳系物质。"
        },
        {
            "start": "2015-09-14",
            "title": "首次直接探测引力波",
            "description": "First direct detection of gravitational waves<br>LIGO观测双黑洞合并，开启引力波天文学。"
        },
        {
            "start": "2017-08-17",
            "title": "多信使中子星并合",
            "description": "Multi-messenger neutron-star merger<br>引力波与电磁信号共同识别中子星并合及重元素产生。"
        },
        {
            "start": "2019-04-10",
            "title": "首张黑洞图像",
            "description": "First image of a black hole<br>事件视界望远镜解析M87*阴影，检验事件视界附近引力。"
        },
        {
            "start": "2021-12-25",
            "title": "詹姆斯·韦布空间望远镜发射",
            "description": "James Webb Space Telescope launched<br>大型红外天文台开启早期星系、恒星形成、行星与大气新视野。"
        }
    ]
};

// 技术、工程与计算机
var tl_technology = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "农业与定居式试验",
            "description": "Agriculture and settled experimentation<br>驯化要求长期观察季节、遗传、土壤、水和动物行为。"
        },
        {
            "start": "-3499",
            "title": "轮与旋转技术",
            "description": "Wheel and rotary technologies<br>旋转运动成为运输、制陶及后世机械的通用工程原理。"
        },
        {
            "start": "-0149",
            "title": "安提基特拉机械",
            "description": "Antikythera mechanism<br>齿轮式模拟计算机模拟天文周期并显示历法信息。",
            "end": "-0099",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "0105",
            "title": "蔡伦改进造纸的记载",
            "description": "Paper-making recorded by Cai Lun<br>改良纸显著降低知识保存和传播的成本与重量。"
        },
        {
            "start": "0700",
            "title": "木版印刷在东亚传播",
            "description": "Woodblock printing spreads in East Asia<br>可重复的文字与图像复制扩大宗教、行政和技术信息传播。",
            "end": "0900",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "0850",
            "title": "中国记录火药配方",
            "description": "Gunpowder formulations recorded in China<br>盐类与可燃物的化学试验产生对军事和工程影响巨大的技术。"
        },
        {
            "start": "1040",
            "title": "苏颂（1020–1101年）",
            "description": "Su Song (1020–1101)<br>主持建造使用擒纵机构与链传动的先进水运仪象台。"
        },
        {
            "start": "1092",
            "title": "苏颂水运仪象台",
            "description": "Su Song’s astronomical clock tower<br>擒纵机构、链传动与天文显示整合精密机械和国家天文学。"
        },
        {
            "start": "1100",
            "title": "磁罗盘用于航海",
            "description": "Magnetic compass used for navigation<br>可靠定向工具改变海上旅行、制图与交流。"
        },
        {
            "start": "1280",
            "title": "机械钟在欧洲传播",
            "description": "Mechanical clocks spread in Europe<br>擒纵式公共时钟标准化时间，并推动精密机械。"
        },
        {
            "start": "1450",
            "title": "古登堡活字印刷",
            "description": "Gutenberg movable-type printing<br>机械化书籍生产大幅加速复制、标准化、批判与科学交流。"
        },
        {
            "start": "1472",
            "title": "列奥纳多·达·芬奇（1452–1519年）",
            "description": "Leonardo da Vinci (1452–1519)<br>综合解剖观察、力学、光学、设计与视觉推理。"
        },
        {
            "start": "1609",
            "title": "天文望远镜",
            "description": "Astronomical telescope<br>伽利略等把望远镜指向天空，把观察扩展到肉眼之外。"
        },
        {
            "start": "1656",
            "title": "惠更斯摆钟",
            "description": "Huygens’ pendulum clock<br>精确计时强化天文、航海、测量与实验可重复性。"
        },
        {
            "start": "1769",
            "title": "瓦特改良蒸汽机",
            "description": "Watt’s improved steam engine<br>分离冷凝器显著提高效率，使蒸汽成为通用工业动力。"
        },
        {
            "start": "1811",
            "title": "查尔斯·巴贝奇（1791–1871年）",
            "description": "Charles Babbage (1791–1871)<br>设计可编程通用机械计算架构。"
        },
        {
            "start": "1837",
            "title": "巴贝奇分析机设计",
            "description": "Babbage designs the Analytical Engine<br>通用可编程机器架构包含存储、处理、分支与穿孔卡输入。"
        },
        {
            "start": "1843",
            "title": "阿达·洛芙莱斯分析机笔记",
            "description": "Ada Lovelace’s notes on the Analytical Engine<br>其笔记描述算法，并认识到符号机器可处理数字之外的对象。"
        },
        {
            "start": "1909",
            "title": "哈伯—博施合成氨",
            "description": "Haber–Bosch ammonia synthesis<br>工业固氮改变肥料、粮食生产、化学与战争。",
            "end": "1913",
            "isDuration": true,
            "textColor": "black",
            "color": "#F4A261"
        },
        {
            "start": "1914",
            "title": "诺伯特·维纳（1894–1964年）",
            "description": "Norbert Wiener (1894–1964)<br>创立研究生物与机器反馈、控制和通信的控制论。"
        },
        {
            "start": "1923",
            "title": "约翰·冯·诺依曼（1903–1957年）",
            "description": "John von Neumann (1903–1957)<br>综合推进数学、量子基础、博弈论与存储程序计算机架构。"
        },
        {
            "start": "1926",
            "title": "格蕾丝·霍珀（1906–1992年）",
            "description": "Grace Hopper (1906–1992)<br>开创编译器与机器无关编程语言。"
        },
        {
            "start": "1931",
            "title": "电子显微镜",
            "description": "Electron microscope<br>电子束超越光学分辨率，揭示细胞与材料超微结构。"
        },
        {
            "start": "1932",
            "title": "艾伦·图灵（1912–1954年）",
            "description": "Alan Turing (1912–1954)<br>创立可计算性理论，并奠定计算机科学与机器智能基础。"
        },
        {
            "start": "1936",
            "title": "图灵通用机",
            "description": "Turing’s universal machine<br>精确抽象模型定义算法计算与可计算性极限。"
        },
        {
            "start": "1946-02-14",
            "title": "ENIAC公开",
            "description": "ENIAC unveiled<br>大型电子通用计算机展示高速可编程数字计算。"
        },
        {
            "start": "1947",
            "title": "晶体管发明",
            "description": "Transistor invented<br>固态开关取代笨重真空管，使现代电子与计算成为可能。"
        },
        {
            "start": "1947",
            "title": "约翰·麦卡锡（1927–2011年）",
            "description": "John McCarthy (1927–2011)<br>命名人工智能，创立Lisp，并塑造符号AI与分时计算。"
        },
        {
            "start": "1948",
            "title": "维纳《控制论》",
            "description": "Wiener publishes Cybernetics<br>反馈、控制与通信在机器、生物和社会系统中被统一。"
        },
        {
            "start": "1950",
            "title": "图灵提出模仿游戏",
            "description": "Turing proposes the imitation game<br>机器智能被重构为关于行为和对话的可操作、可检验问题。"
        },
        {
            "start": "1956",
            "title": "达特茅斯人工智能研讨会",
            "description": "Dartmouth artificial-intelligence workshop<br>“人工智能”成为有组织研究领域的名称。"
        },
        {
            "start": "1958",
            "title": "集成电路发明",
            "description": "Integrated circuit invented<br>多个电子元件被制造在单一基底上，实现可扩展微型化。"
        },
        {
            "start": "1960",
            "title": "首台实用激光器",
            "description": "First working laser<br>相干光成为测量、通信、医学与制造的可控工具。"
        },
        {
            "start": "1965",
            "title": "摩尔定律提出",
            "description": "Moore’s law articulated<br>集成电路复杂度的周期性指数增长成为半导体产业路线图。"
        },
        {
            "start": "1967",
            "title": "杰弗里·辛顿（1947年–）",
            "description": "Geoffrey Hinton (1947–)<br>通过表征学习与反向传播推动神经网络和深度学习复兴。"
        },
        {
            "start": "1969",
            "title": "阿帕网开始运行",
            "description": "ARPANET begins operation<br>分组交换网络连接远程计算机，孕育现代互联网。"
        },
        {
            "start": "1971",
            "title": "商用微处理器",
            "description": "Commercial microprocessor<br>单芯片中央处理器使嵌入式系统与个人计算成为可能。"
        },
        {
            "start": "1975",
            "title": "蒂姆·伯纳斯-李（1955年–）",
            "description": "Tim Berners-Lee (1955–)<br>发明万维网并推动开放网络标准。"
        },
        {
            "start": "1980",
            "title": "扬·勒昆（1960年–）",
            "description": "Yann LeCun (1960–)<br>开创卷积神经网络与表征学习。"
        },
        {
            "start": "1981",
            "title": "IBM PC与个人计算标准化",
            "description": "IBM PC and personal-computing standardization<br>开放硬件生态加速个人电脑与软件产业普及。"
        },
        {
            "start": "1984",
            "title": "约书亚·本吉奥（1964年–）",
            "description": "Yoshua Bengio (1964–)<br>在深度学习、语言模型与表征学习方面作出奠基性贡献。"
        },
        {
            "start": "1989",
            "title": "万维网在CERN发明",
            "description": "World Wide Web invented at CERN<br>URL、HTTP与HTML把互联网文档连接成通用信息空间。"
        },
        {
            "start": "1996",
            "title": "戴密斯·哈萨比斯（1976年–）",
            "description": "Demis Hassabis (1976–)<br>领导强化学习与AI蛋白质结构预测的突破。"
        },
        {
            "start": "1997",
            "title": "深蓝击败国际象棋世界冠军",
            "description": "Deep Blue defeats chess world champion<br>专用搜索与评估在文化象征性智力任务中展示机器优势。"
        },
        {
            "start": "2016",
            "title": "AlphaGo击败李世石",
            "description": "AlphaGo defeats Lee Sedol<br>深度神经网络、搜索与强化学习掌握长期被认为难以被AI攻克的围棋。"
        },
        {
            "start": "2017",
            "title": "Transformer架构",
            "description": "Transformer architecture<br>基于注意力的序列建模使可扩展语言、视觉与多模态基础模型成为可能。"
        },
        {
            "start": "2018",
            "title": "AlphaFold首次CASP重大突破",
            "description": "AlphaFold’s first major CASP breakthrough<br>深度学习大幅改进蛋白质结构预测，开启计算生物学变革。"
        },
        {
            "start": "2020",
            "title": "AlphaFold2达到近实验精度",
            "description": "AlphaFold2 reaches near-experimental accuracy<br>AI以前所未有精度预测大量蛋白质结构，改变结构生物学流程。"
        },
        {
            "start": "2022-11-30",
            "title": "ChatGPT公开发布",
            "description": "ChatGPT released publicly<br>对话式大语言模型进入大众使用，迅速改变软件、教育、研究辅助与公共讨论。"
        },
        {
            "start": "2024",
            "title": "AlphaFold 3模拟生物分子相互作用",
            "description": "AlphaFold 3 models biomolecular interactions<br>该模型把结构预测扩展到蛋白质、核酸、配体与分子复合物。"
        }
    ]
};

// 制度与少量历史背景
var tl_institutions_context = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0294",
            "title": "亚历山大图书馆与缪斯宫",
            "description": "Library and Mouseion of Alexandria<br>国家支持的收藏、校订与研究汇聚地中海世界的文献和学者。",
            "end": "-0047",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "0427",
            "title": "那烂陀发展为大型大学寺院",
            "description": "Nalanda develops as a major university-monastery<br>这一长期存在的印度中心支持佛教哲学、逻辑、医学、数学与跨地区学习。"
        },
        {
            "start": "0762",
            "title": "巴格达翻译运动与智慧宫",
            "description": "Baghdad translation movement and House of Wisdom<br>希腊、波斯与印度著作在阿拉伯学术网络中被翻译、批判和扩展。",
            "end": "0900",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1088",
            "title": "博洛尼亚大学传统",
            "description": "University of Bologna tradition<br>大学法人结构帮助欧洲稳定高等教学、资格与学术共同体。"
        },
        {
            "start": "1150",
            "title": "拉丁语翻译运动",
            "description": "Latin translation movement<br>哲学、医学、数学和天文学的阿拉伯文与希腊文著作进入欧洲大学。",
            "end": "1250",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1347",
            "title": "黑死病",
            "description": "Black Death<br>大流行重塑欧洲劳动力、制度、医学争论与学习的社会条件。",
            "end": "1351",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1492",
            "title": "哥伦布大交换与全球自然史",
            "description": "Columbian exchange and global natural history<br>生物、疾病、作物与观察的大规模转移改变医学、生态学和自然史。",
            "end": "1600",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1660",
            "title": "英国皇家学会成立",
            "description": "Royal Society founded<br>持久机构组织实验、通信、演示与自然知识的集体评估。"
        },
        {
            "start": "1665",
            "title": "最早的科学期刊",
            "description": "First scientific journals<br>《学者杂志》和《哲学汇刊》建立主张、优先权与批评的定期公开渠道。"
        },
        {
            "start": "1751",
            "title": "《百科全书》出版",
            "description": "Encyclopédie published<br>知识、工艺与启蒙批判思想被组织并面向广泛读者。",
            "end": "1772",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1761",
            "title": "全球金星凌日观测",
            "description": "Global transits of Venus observations<br>国际远征协调测量以确定太阳系尺度。",
            "end": "1769",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1791",
            "title": "公制建立",
            "description": "Metric system created<br>通用十进测量标准强化可重复性、工程与国际交流。",
            "end": "1799",
            "isDuration": true,
            "textColor": "black",
            "color": "#E76F51"
        },
        {
            "start": "1810",
            "title": "柏林大学与研究型大学模式",
            "description": "University of Berlin and the research-university model<br>研究与高等教学在制度上结合，影响全球现代大学。"
        },
        {
            "start": "1901",
            "title": "首届诺贝尔奖颁发",
            "description": "First Nobel Prizes awarded<br>国际奖项建立表彰重大科学成就的持久公共制度。"
        },
        {
            "start": "1914-07-28",
            "title": "第一次世界大战",
            "description": "World War I<br>战争重定向化学、医学、航空、通信与国家研究，并割裂国际科学网络。",
            "end": "1918-11-11",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1927",
            "title": "第五届索尔维会议",
            "description": "Fifth Solvay Conference<br>顶尖物理学家集中讨论量子力学的数学与哲学解释。"
        },
        {
            "start": "1939-09-01",
            "title": "第二次世界大战",
            "description": "World War II<br>战争加速雷达、运筹学、抗生素、火箭、计算与核科学，同时造成灾难性破坏和伦理危机。",
            "end": "1945-09-02",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1945-08-06",
            "title": "广岛与长崎原子弹爆炸",
            "description": "Atomic bombings of Hiroshima and Nagasaki<br>核物理从此无法与大规模毁灭、科学责任和全球治理问题分离。",
            "end": "1945-08-09",
            "isDuration": true,
            "textColor": "black",
            "color": "#C1121F"
        },
        {
            "start": "1954",
            "title": "CERN成立",
            "description": "CERN founded<br>跨国实验室把和平的大规模粒子物理合作制度化。"
        },
        {
            "start": "1987",
            "title": "蒙特利尔议定书",
            "description": "Montreal Protocol<br>大气科学转化为逐步淘汰消耗臭氧化学品的成功全球条约。"
        },
        {
            "start": "1988",
            "title": "IPCC成立",
            "description": "IPCC established<br>常设国际评估过程把气候研究与政策评价连接起来。"
        },
        {
            "start": "1991",
            "title": "arXiv上线",
            "description": "arXiv begins<br>开放电子预印本加速物理学及后来多领域的全球传播与优先权。"
        },
        {
            "start": "2019",
            "title": "COVID-19大流行与全球科学动员",
            "description": "COVID-19 pandemic and global science mobilization<br>大流行加速病原体基因组、开放数据、临床试验与疫苗平台，并强化专业知识与公共信任争论。",
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
