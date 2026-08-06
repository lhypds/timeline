var title = "人类历史时间线";

// Curated global human-history timeline.
// Every description is a concise sentence explaining what happened.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering is used: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// 历史时代与全球背景
var tl_eras = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "公元前10000年以前的人类深史（压缩标记）",
            "description": "这一标记合并表示智人的出现、走出非洲、全球迁徙以及旧石器时代的狩猎采集与象征文化。"
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "新石器时代转型",
            "description": "不同地区的人群逐步驯化植物和动物，由流动采集转向农业、牧业和永久村落生活。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "青铜时代",
            "description": "铜与锡的合金冶炼被广泛用于武器、工具和礼器，并伴随宫殿中心、专业工匠和远距离贸易的发展。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "最早城市与领土国家",
            "description": "美索不达米亚、埃及、印度河和其他地区出现大型城市、文字行政、征税体系与跨城邦统治。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "古典文明与轴心时代",
            "description": "从地中海到东亚和南亚，帝国、城邦以及儒家、佛教、希腊哲学等思想传统在这一时期成形。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "后古典时代区域秩序",
            "description": "西罗马帝国消亡后，拜占庭、伊斯兰诸帝国、唐朝及南亚王朝形成新的宗教与政治中心。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "相互连接的中世纪世界",
            "description": "丝绸之路、印度洋和撒哈拉商路把欧亚非各地连接起来，宗教、商品、技术与疾病随之传播。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "早期现代全球扩张",
            "description": "欧洲远洋帝国进入美洲、非洲和亚洲，哥伦布交换、大西洋奴隶贸易与全球白银贸易由此展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "革命与工业化时代",
            "description": "大西洋革命推翻旧政体，蒸汽动力和工厂生产则重塑劳动、交通、城市与社会阶层。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "帝国主义与全球移民时代",
            "description": "工业列强瓜分殖民地并修建全球交通网络，数千万移民和契约劳工跨洲迁徙。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "世界大战与大众政治",
            "description": "两次世界大战动员整个社会并造成空前伤亡，革命、法西斯主义、共产主义和民族主义政权相继兴起。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "冷战、非殖民化与发展",
            "description": "美苏围绕核武器和全球同盟展开竞争，同时亚洲、非洲和加勒比地区的殖民地陆续取得独立。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "冷战后转型期",
            "description": "苏联解体后，东欧和前苏联地区重建国家与市场制度，全球化加速但地区战争仍频繁发生。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "全球化、恐怖主义与数字社会",
            "description": "互联网、智能手机和全球供应链深入日常生活，九一一袭击及其后的反恐战争重新塑造国际安全。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "疫情、地缘政治分化与AI加速",
            "description": "新冠疫情造成全球公共卫生危机，此后战争、供应链重组以及生成式人工智能迅速普及同时展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        }
    ]
};

// 人类定居与早期文明
var tl_origins = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "西南亚农业起源",
            "description": "新月沃地的人群开始栽培小麦、大麦和豆类，并逐步将野生谷物生产转变为定期耕作。"
        },
        {
            "start": "-9599",
            "title": "耶利哥永久定居",
            "description": "约旦河谷的耶利哥发展为长期有人居住的聚落，建有石屋、围墙和大型塔状建筑。"
        },
        {
            "start": "-8999",
            "title": "绵羊与山羊驯化",
            "description": "西亚牧民通过选择性饲养将野生羊和山羊转变为可控制繁殖的家畜群。"
        },
        {
            "start": "-8499",
            "title": "恰约努与新月沃地早期农业",
            "description": "恰约努等聚落同时发展谷物种植、牲畜饲养和固定住宅，展示了早期农业社会的形成过程。"
        },
        {
            "start": "-7499",
            "title": "恰塔霍裕克大型聚落",
            "description": "安纳托利亚的恰塔霍裕克由密集相连的泥砖住宅组成，居民从屋顶进入并从事农业、狩猎和手工业。"
        },
        {
            "start": "-6999",
            "title": "长江流域稻作扩展",
            "description": "长江中下游居民持续栽培和驯化水稻，稻作村落逐渐在湿地与河谷扩展。"
        },
        {
            "start": "-6999",
            "title": "梅尔伽赫农业聚落",
            "description": "俾路支斯坦的梅尔伽赫居民种植小麦和大麦、饲养牛羊，并建造泥砖房屋和储藏设施。"
        },
        {
            "start": "-6499",
            "title": "陶器与村落网络扩展",
            "description": "烧制陶器在多个农业地区普及，人们用其烹饪和储藏，并通过相邻村落交换器物与原料。"
        },
        {
            "start": "-5999",
            "title": "美索不达米亚灌溉聚落",
            "description": "两河下游居民开挖渠道引水灌溉干旱平原，在河渠周围形成密集村落和谷物农业。"
        },
        {
            "start": "-5499",
            "title": "农业向欧洲扩展",
            "description": "来自安纳托利亚和爱琴海地区的农民及其技术沿巴尔干和地中海路线进入欧洲内陆。"
        },
        {
            "start": "-4999",
            "title": "欧亚大陆早期冶金",
            "description": "巴尔干、西亚和高加索等地的工匠开始熔炼铜并制作装饰品、工具和武器。"
        },
        {
            "start": "-4499",
            "title": "草原牧业扩展",
            "description": "欧亚草原人群以牛、羊和马群为生，季节性迁徙的牧业生活向更广地区扩展。"
        },
        {
            "start": "-3999",
            "title": "犁耕与大型村落",
            "description": "畜力犁耕提高了重土地区的耕作能力，部分农业聚落因此扩大为人口众多的村庄。"
        },
        {
            "start": "-3799",
            "title": "乌鲁克城市化",
            "description": "乌鲁克扩展为拥有神庙区、专业工匠、行政仓库和庞大人口的早期城市中心。"
        },
        {
            "start": "-3499",
            "title": "车轮与车辆运输",
            "description": "美索不达米亚和欧亚其他地区出现实心轮车辆，牛拉车开始承担货物与人员运输。"
        },
        {
            "start": "-3399",
            "title": "原始楔形文字记账",
            "description": "乌鲁克行政人员用泥板和图画符号记录谷物、牲畜、劳役与配给，形成最早的书写体系之一。"
        },
        {
            "start": "-3299",
            "title": "印度河城市传统兴起",
            "description": "印度河流域的聚落逐步扩大并采用标准化陶器、度量和规划方式，为哈拉帕城市文明奠定基础。"
        },
        {
            "start": "-3199",
            "title": "埃及象形文字",
            "description": "埃及人在纪念碑、标签和行政记录上使用图像符号，形成持续数千年的象形文字书写传统。"
        },
        {
            "start": "-3099",
            "title": "古埃及政治统一",
            "description": "上埃及统治者征服或整合尼罗河下游地区，建立由单一法老统治的统一王国。"
        },
        {
            "start": "-2999",
            "title": "美索不达米亚与印度河的长途贸易",
            "description": "海湾航路把美索不达米亚与印度河文明连接起来，双方交换木材、金属、宝石、纺织品和农产品。"
        },
        {
            "start": "-2899",
            "title": "苏美尔早王朝城邦",
            "description": "乌尔、乌鲁克、拉伽什等城邦由国王和神庙机构统治，并为土地、水源和贸易路线相互争战。"
        },
        {
            "start": "-2699",
            "title": "埃及古王国与金字塔国家",
            "description": "古王国法老通过中央行政征集粮食和劳力，在吉萨等地建造大型金字塔与王室墓葬群。"
        },
        {
            "start": "-2599",
            "title": "成熟哈拉帕城市",
            "description": "哈拉帕、摩亨佐-达罗等城市采用网格街道、排水系统、标准砖和统一度量衡。"
        },
        {
            "start": "-2499",
            "title": "南岛语族扩张开始",
            "description": "来自台湾及邻近地区的航海人群向菲律宾和岛屿东南亚迁徙，携带农业、独木舟和南岛语族语言。"
        },
        {
            "start": "-2399",
            "title": "阿卡德帝国扩张",
            "description": "萨尔贡及其继承者征服苏美尔城邦和周边地区，建立以阿卡德王权统辖的广域帝国。"
        },
        {
            "start": "-2199",
            "title": "4.2千年气候事件与国家危机",
            "description": "约公元前2200年前后的长期干旱影响西亚、埃及和南亚，多地出现歉收、迁徙与政权衰落。"
        },
        {
            "start": "-2099",
            "title": "乌尔第三王朝",
            "description": "乌尔王朝重新统一南部美索不达米亚，以省级官僚、税收和大量泥板文书管理国家。"
        },
        {
            "start": "-1999",
            "title": "米诺斯宫殿文明",
            "description": "克里特岛的克诺索斯等宫殿中心组织仓储、手工业、宗教仪式和爱琴海贸易。"
        },
        {
            "start": "-1899",
            "title": "古巴比伦城市秩序",
            "description": "巴比伦、拉尔萨和马里等城市国家以王宫、神庙、商人和成文契约组织土地、债务与贸易。"
        },
        {
            "start": "-1799",
            "title": "二里头文化与中国早期青铜国家",
            "description": "二里头遗址出现宫殿区、道路、铸铜作坊和等级墓葬，显示中原早期国家组织的形成。"
        },
        {
            "start": "-1749",
            "title": "汉谟拉比统治巴比伦",
            "description": "汉谟拉比通过战争统一美索不达米亚大片地区，并以王室法令和著名法典治理巴比伦王国。"
        },
        {
            "start": "-1599",
            "title": "商王朝兴起",
            "description": "商王朝在黄河中下游建立以王都、宗族祭祀、青铜铸造和军事征伐为核心的国家。"
        },
        {
            "start": "-1599",
            "title": "迈锡尼宫殿社会",
            "description": "迈锡尼、皮洛斯等希腊宫殿由统治者和书记官管理农业贡赋、工匠、军队与区域贸易。"
        },
        {
            "start": "-1549",
            "title": "埃及新王国",
            "description": "埃及驱逐喜克索斯后建立强大的新王国，法老向努比亚和黎凡特扩张并营建大型神庙。"
        },
        {
            "start": "-1499",
            "title": "南亚吠陀文化发展",
            "description": "讲印欧语的群体在印度西北和恒河流域形成以吠陀赞歌、祭祀和部落王权为核心的社会。"
        },
        {
            "start": "-1399",
            "title": "赫梯帝国崛起",
            "description": "赫梯统治者以安纳托利亚中部为核心征服叙利亚北部，并与埃及和美索不达米亚列强竞争。"
        },
        {
            "start": "-1299",
            "title": "奥尔梅克文明兴起",
            "description": "墨西哥湾沿岸的奥尔梅克人建立圣洛伦索等祭祀中心，并制作巨石头像和精细玉器。"
        },
        {
            "start": "-1249",
            "title": "拉皮塔文化扩展至太平洋",
            "description": "携带特色压印陶器的航海群体从岛屿美拉尼西亚向斐济、汤加和萨摩亚扩展定居。"
        },
        {
            "start": "-1199",
            "title": "青铜时代晚期崩溃",
            "description": "东地中海多个宫殿国家在战争、迁徙、内乱和贸易中断中相继毁灭或衰退。"
        },
        {
            "start": "-1099",
            "title": "腓尼基海上网络",
            "description": "提尔、西顿等腓尼基城市建立地中海航线和殖民据点，经营木材、金属、染料和奢侈品贸易。"
        },
        {
            "start": "-1045",
            "title": "周灭商",
            "description": "周武王在牧野之战击败商军，推翻商王朝并建立以分封和宗法关系维系的周朝。"
        },
        {
            "start": "-0999",
            "title": "班图语族人口扩张加速",
            "description": "使用班图语的农耕和冶铁人群从中西非向东非与南部非洲迁徙并建立新聚落。"
        },
        {
            "start": "-0899",
            "title": "西非诺克文化",
            "description": "今尼日利亚中部的诺克社会以大型陶塑人物、农业村落和早期铁器生产著称。"
        },
        {
            "start": "-0799",
            "title": "希腊城邦形成",
            "description": "雅典、斯巴达、科林斯等独立城邦围绕城市、乡村领地、公民共同体和各自政体逐渐成形。"
        },
        {
            "start": "-0799",
            "title": "安第斯查文文化圈",
            "description": "秘鲁高地的查文德万塔尔成为宗教中心，其图像、石雕和仪式风格传播到安第斯多地。"
        },
        {
            "start": "-0769",
            "title": "东周开始",
            "description": "犬戎攻破镐京后周王室东迁洛邑，王权衰弱而诸侯国在春秋战国时期竞逐霸权。"
        },
        {
            "start": "-0752",
            "title": "罗马传统建城年",
            "description": "罗马传统把公元前753年视为罗慕路建立城市的年份，后来这一传说成为罗马身份叙事的核心。"
        },
        {
            "start": "-0699",
            "title": "铁器技术广泛传播",
            "description": "西亚、地中海、南亚和东亚越来越多地区掌握炼铁与锻造，铁制农具和武器逐步普及。"
        },
        {
            "start": "-0699",
            "title": "斯基泰草原网络",
            "description": "斯基泰等骑马游牧群体控制黑海北岸和欧亚草原通道，在定居帝国之间运输马匹、金属与奢侈品。"
        },
        {
            "start": "-0599",
            "title": "恒河中游城市化",
            "description": "铁制农具、稻作和贸易推动恒河中游出现城墙城市、市场、货币和多个大型国家。"
        },
        {
            "start": "-0549",
            "title": "阿契美尼德波斯帝国兴起",
            "description": "居鲁士二世征服米底、吕底亚和新巴比伦，建立横跨西亚的大型帝国。"
        },
        {
            "start": "-0508",
            "title": "罗马共和国开始",
            "description": "罗马传统认为末代国王被驱逐后，共和政由每年选出的执政官、元老院和公民大会共同运作。"
        },
        {
            "start": "-0499",
            "title": "萨波特克蒙特阿尔班发展",
            "description": "萨波特克人在瓦哈卡谷地山顶建设蒙特阿尔班，设置广场、神庙、墓葬和刻有文字的石碑。"
        },
        {
            "start": "-0499",
            "title": "跨撒哈拉交流扩展",
            "description": "北非与萨赫勒地区的商旅通过绿洲路线交换盐、黄金、牲畜和手工业品，骆驼普及后规模进一步扩大。"
        },
        {
            "start": "-0402",
            "title": "中国战国时代开始",
            "description": "周王室名存实亡，秦、楚、齐、燕、韩、赵、魏等大国通过常备军和行政改革展开长期兼并战争。"
        },
        {
            "start": "-0321",
            "title": "孔雀王朝建立",
            "description": "旃陀罗笈多推翻难陀王朝并控制恒河平原，建立南亚首个覆盖广阔地区的帝国之一。"
        },
        {
            "start": "-0220",
            "title": "秦统一中国",
            "description": "秦王嬴政灭六国并称皇帝，将战国诸国纳入统一的郡县制帝国。"
        },
        {
            "start": "-0205",
            "title": "汉朝建立",
            "description": "刘邦在楚汉战争中击败项羽，建立汉朝并逐步恢复统一的中央帝国。"
        },
        {
            "start": "-0199",
            "title": "特奥蒂瓦坎成长为大城市",
            "description": "墨西哥高原的特奥蒂瓦坎发展出大道、金字塔、住宅区和手工业街区，人口达到古代美洲最高水平之一。"
        },
        {
            "start": "-0099",
            "title": "安第斯莫切文化发展",
            "description": "秘鲁北岸的莫切社会修建大型土坯神庙和灌溉系统，并以写实陶器和金属工艺闻名。"
        },
        {
            "start": "0100",
            "title": "阿克苏姆王国崛起",
            "description": "阿克苏姆以今埃塞俄比亚和厄立特里亚高原为核心，控制红海贸易并铸造本国货币。"
        },
        {
            "start": "0200",
            "title": "古典玛雅城市文明繁荣",
            "description": "蒂卡尔、卡拉克穆尔、帕伦克等玛雅城邦修建金字塔和宫殿，并用文字记录王朝、战争和历法。"
        },
        {
            "start": "0220",
            "title": "汉朝终结与分裂时代",
            "description": "东汉皇帝退位后，中国进入三国及其后的长期分裂，多个王朝和政权反复争夺统一。"
        },
        {
            "start": "0320",
            "title": "笈多帝国崛起",
            "description": "旃陀罗笈多一世及其继承者从恒河流域扩张，建立统治印度北部大部分地区的帝国。"
        },
        {
            "start": "0400",
            "title": "波利尼西亚人在太平洋扩展定居",
            "description": "波利尼西亚航海者凭借双体舟、星象和海洋知识，从西波利尼西亚迁往更遥远的太平洋岛屿。"
        },
        {
            "start": "0500",
            "title": "西非加纳帝国崛起",
            "description": "瓦加杜统治者控制萨赫勒的黄金产地与跨撒哈拉商路，建立后来被称为加纳帝国的国家。"
        },
        {
            "start": "0600",
            "title": "密西西比土丘社会发展",
            "description": "北美东南部农业社会围绕大型土台土丘、广场和首领中心组织聚落，玉米种植成为主要经济基础。"
        },
        {
            "start": "0700",
            "title": "斯瓦希里海岸贸易城市扩展",
            "description": "基尔瓦、蒙巴萨等东非沿海城镇以斯瓦希里语文化为基础，参与印度洋黄金、象牙、陶瓷和纺织品贸易。"
        },
        {
            "start": "0800",
            "title": "维京定居与北大西洋扩张",
            "description": "斯堪的纳维亚航海者在不列颠、爱尔兰、冰岛和格陵兰建立定居点，并把贸易与掠袭网络延伸至北大西洋。"
        },
        {
            "start": "0900",
            "title": "大津巴布韦区域中心发展",
            "description": "大津巴布韦以大型干砌石建筑为核心，成为控制内陆牧业、黄金生产和印度洋贸易的政治中心。"
        },
        {
            "start": "1000",
            "title": "诺斯人在北美定居",
            "description": "来自格陵兰的诺斯航海者在纽芬兰的兰塞奥兹牧草地建立短期营地，是已知最早的欧洲人在美洲定居遗址。"
        },
        {
            "start": "1050",
            "title": "卡霍基亚成为大型城市中心",
            "description": "密西西比河畔的卡霍基亚聚集数万人口，修建僧侣丘、广场和木栅，是前哥伦布时代北美最大的城市。"
        },
        {
            "start": "1200",
            "title": "毛利人在新西兰定居加速",
            "description": "来自东波利尼西亚的航海者在新西兰各地建立聚落，并发展适应当地气候、资源和地形的毛利社会。"
        },
        {
            "start": "1325",
            "title": "特诺奇蒂特兰建立",
            "description": "墨西加人在特斯科科湖岛屿上建立特诺奇蒂特兰，以堤道、水渠和人工农田建设首都。"
        },
        {
            "start": "1438",
            "title": "印加帝国扩张开始",
            "description": "帕查库特克夺取库斯科周边并重组国家，此后印加军队和道路系统迅速扩展到安第斯大部。"
        }
    ]
};

// 国家、帝国与政治秩序
var tl_states = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2333",
            "end": "-2153",
            "title": "阿卡德帝国",
            "description": "萨尔贡及其继承者以阿卡德为中心征服苏美尔和北部地区，建立美索不达米亚最早的广域帝国之一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "埃及古王国",
            "description": "古王国以孟斐斯为政治中心，法老通过中央行政统治尼罗河谷并组织吉萨金字塔等大型工程。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "埃及中王国",
            "description": "底比斯统治者重新统一分裂的埃及，恢复中央官僚体系并向努比亚推进贸易和军事控制。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "埃及新王国",
            "description": "埃及驱逐喜克索斯后建立新王国，法老统治努比亚并在黎凡特维持帝国势力。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "商朝",
            "description": "商朝以黄河流域的王都为中心，由王室宗族统治，并以甲骨占卜、青铜礼器和军事征伐著称。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "周朝",
            "description": "周王室取代商朝后以分封、宗法和礼制联系诸侯，后来东迁并进入春秋战国的列国竞争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "新亚述帝国",
            "description": "新亚述以常备军、攻城技术和省级行政征服两河、黎凡特与埃及部分地区，首都先后设于尼姆鲁德和尼尼微。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "新巴比伦帝国",
            "description": "迦勒底王朝以巴比伦为首都推翻亚述残余势力，控制美索不达米亚和黎凡特直至被波斯征服。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "阿契美尼德波斯帝国",
            "description": "阿契美尼德王朝从伊朗高原统治埃及、西亚、中亚和印度河部分地区，以行省、御道和多民族行政维系统治。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "罗马共和国",
            "description": "罗马由执政官、元老院和公民大会构成共和政，在持续战争中征服意大利并把势力扩展到整个地中海。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "亚历山大大帝帝国",
            "description": "马其顿国王亚历山大征服阿契美尼德波斯并推进至埃及和印度河，死后帝国迅速分裂为继业者诸国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "托勒密埃及",
            "description": "亚历山大的将领托勒密及其后裔以亚历山大里亚为都统治埃及，融合马其顿王权与埃及法老传统。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "塞琉古帝国",
            "description": "塞琉古及其后裔统治从叙利亚和美索不达米亚延伸至伊朗与中亚的广阔领土，并建立希腊化城市网络。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "孔雀王朝",
            "description": "孔雀王朝以华氏城为都统一南亚大部，阿育王时期以行省行政、道路和敕令治理帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "秦朝",
            "description": "秦灭六国后建立中国第一个统一皇帝国家，推行郡县制并统一文字、度量衡和道路规范。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "汉朝",
            "description": "汉朝继承并调整秦制，长期统治中国大部，向西域和朝鲜半岛扩张并形成成熟的儒家官僚帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "安息帝国",
            "description": "安息王朝以伊朗和美索不达米亚为核心，由阿尔萨息王族与地方贵族共同统治，并长期与罗马对峙。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "统一罗马帝国",
            "description": "奥古斯都建立元首制后，罗马皇帝统治地中海沿岸、欧洲西部和西亚部分地区，直至帝国永久东西分治。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "萨珊帝国",
            "description": "萨珊王朝推翻安息后重建中央集权的伊朗帝国，以琐罗亚斯德教王权和与罗马、拜占庭的战争为特征。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "鼎盛时期的阿克苏姆王国",
            "description": "阿克苏姆控制埃塞俄比亚和厄立特里亚高原及红海港口，铸造货币并在四世纪接受基督教。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "笈多帝国",
            "description": "笈多王朝统治印度北部大部，以地方王公合作维系统治，宫廷支持梵文文学、宗教和学术活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "东罗马／拜占庭帝国",
            "description": "东罗马帝国以君士坦丁堡为都，延续罗马法与皇帝制度，并在希腊语和东正教文化中存续千余年。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "法兰克王国与加洛林帝国",
            "description": "法兰克诸王朝控制高卢和日耳曼西部，查理曼时期扩张为覆盖西欧大部的帝国并于800年称帝。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "隋朝统一中国",
            "description": "隋文帝结束南北朝分裂，重建统一帝国，随后修建大运河并发动高句丽战争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "唐朝",
            "description": "唐朝以长安和洛阳为中心统治广阔多民族帝国，通过科举、州县和军事都护体系连接中原与内亚。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "正统哈里发与倭马亚王朝",
            "description": "穆罕默德去世后，哈里发军队从阿拉伯半岛征服拜占庭和萨珊大片领土，倭马亚王朝将首都设在大马士革。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "巴格达阿拔斯王朝",
            "description": "阿拔斯王朝推翻倭马亚后以巴格达为中心统治哈里发帝国，后来地方王朝独立但哈里发名义延续至蒙古攻城。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "日本平安时代",
            "description": "朝廷迁都平安京后，天皇与藤原氏贵族主导政治，后期院政和武士集团逐渐扩大影响。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "神圣罗马帝国传统",
            "description": "西欧皇帝头衔从查理曼加冕延续到德意志诸王，帝国由皇帝、诸侯、教会领地和自由城市构成。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "基辅罗斯国家",
            "description": "东斯拉夫与诺斯统治集团以基辅为中心控制第聂伯河贸易路线，并在弗拉基米尔时期接受东正教。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国时期",
            "description": "唐朝灭亡后，北方五个短命王朝和南方多个割据政权并立，直至宋朝逐步重新统一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "宋朝",
            "description": "宋朝以文官政府、科举和商业税收治理中国大部，北宋亡后南宋继续以临安为都统治南方。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "法蒂玛王朝",
            "description": "什叶派伊斯玛仪派法蒂玛王朝从北非扩张到埃及并建立开罗，与阿拔斯哈里发争夺宗教和政治权威。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "加纳帝国鼎盛期",
            "description": "加纳帝国的统治者控制萨赫勒黄金产区与撒哈拉盐路，在库姆比萨利赫等中心向商队征税。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "塞尔柱帝国秩序",
            "description": "突厥塞尔柱统治者占领伊朗、伊拉克和安纳托利亚部分地区，以苏丹名义保护阿拔斯哈里发并分封军事领地。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "诺曼统治在英格兰建立",
            "description": "诺曼底公爵威廉在黑斯廷斯战役获胜并加冕英王，随后以城堡、封臣和土地调查重组英格兰统治。"
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "镰仓幕府",
            "description": "源赖朝在镰仓建立以将军和御家人为核心的武家政权，朝廷仍保留天皇与贵族机构。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "蒙古帝国及其继承汗国",
            "description": "成吉思汗及其后裔征服欧亚大陆广大地区，帝国后来分为元朝、金帐汗国、伊儿汗国和察合台汗国等。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "马里帝国",
            "description": "马里帝国控制尼日尔河上游、黄金产区和跨撒哈拉商路，曼萨穆萨时期廷巴克图等城市繁荣。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "元朝",
            "description": "忽必烈建立元朝并完成对南宋的征服，以大都为首都统治中国并纳入蒙古帝国的跨欧亚网络。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "奥斯曼国家与帝国",
            "description": "奥斯曼王朝从安纳托利亚边境小国扩张为横跨东南欧、西亚和北非的帝国，以苏丹、官僚和行省治理。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "毗奢耶那伽罗帝国",
            "description": "毗奢耶那伽罗王朝以德干南部为核心，统治印度南部并以同名首都组织寺庙、贸易和军事贵族体系。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "西欧百年战争时代",
            "description": "英格兰与法国王室围绕法国王位和领地展开长期战争，期间出现停战、内战、瘟疫和王权重组。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "明朝",
            "description": "朱元璋推翻元朝建立明朝，以南京后迁北京为都，通过皇帝、六部、卫所和地方行政统治中国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "朝鲜王朝",
            "description": "李成桂建立朝鲜王朝并定都汉城，国家以儒家官僚制、科举和中央集权统治朝鲜半岛。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "桑海帝国",
            "description": "桑海以尼日尔河中游的加奥为中心崛起，控制廷巴克图、杰内及跨撒哈拉黄金和盐贸易。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "奥斯曼攻占君士坦丁堡",
            "description": "穆罕默德二世率奥斯曼军队围攻并攻破君士坦丁堡，结束拜占庭帝国并将城市改为帝国首都。"
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "桑海帝国扩张",
            "description": "逊尼阿里和阿斯基亚穆罕默德征服马里旧地与尼日尔河城市，使桑海成为西非最大的帝国之一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "英格兰都铎王朝",
            "description": "都铎王朝在玫瑰战争后巩固王权，经历宗教改革、修道院解散和英格兰海上力量扩张。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "卡斯蒂利亚与阿拉贡联合巩固",
            "description": "伊莎贝拉与斐迪南的婚姻王权共同统治卡斯蒂利亚和阿拉贡，并在格拉纳达陷落后巩固西班牙君主国。"
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "萨法维伊朗",
            "description": "萨法维王朝统一伊朗并确立十二伊玛目什叶派为国教，以沙阿和部族军队、官僚共同治理。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "莫卧儿帝国",
            "description": "巴布尔及其后裔在印度建立莫卧儿帝国，阿克巴时期通过行省、土地税和贵族军职统治南亚大部。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "俄罗斯沙皇国",
            "description": "莫斯科大公伊凡四世称沙皇后，俄罗斯向伏尔加河、乌拉尔和西伯利亚扩张，并形成中央集权国家。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "德川幕府",
            "description": "德川家康在关原之战后建立江户幕府，以幕藩体制统治日本并严格管理大名、外交和社会身份。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "斯图亚特时代与英国君主立宪制",
            "description": "斯图亚特王朝时期英王与议会冲突引发内战、共和政和光荣革命，最终确立议会限制王权的制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "清朝",
            "description": "满洲建立的清朝入关取代明朝，统治中国并把蒙古、新疆、西藏等地区纳入多民族帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "彼得大帝时期的俄罗斯",
            "description": "彼得一世改革军队、行政和税制，建设圣彼得堡并在大北方战争后取得波罗的海出海口。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "大不列颠王国成立",
            "description": "英格兰与苏格兰议会通过《联合法案》，合并为拥有共同议会和君主的大不列颠王国。"
        },
        {
            "start": "1776",
            "title": "美国宣布独立",
            "description": "十三个英属北美殖民地通过《独立宣言》宣布脱离英国，并在独立战争中建立新的共和国。"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "法国革命政权",
            "description": "法国革命推翻旧制度和君主制，先后建立立宪君主国、共和国、恐怖统治和督政府。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "拿破仑帝国",
            "description": "拿破仑称帝后通过战争控制欧洲大陆大部，并以法典、行政改革和附庸国重组占领地区。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "海地独立",
            "description": "被奴役者发动革命并击败法国军队，圣多明各宣布成立海地，成为首个由奴隶革命建立的独立国家。"
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "拉丁美洲独立时代",
            "description": "西属美洲和葡属巴西的独立运动击败或摆脱伊比利亚统治，在美洲建立一系列新国家。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "维也纳会议体系",
            "description": "拿破仑失败后，欧洲列强在维也纳重划边界、恢复王朝并建立以定期协商维持均势的体系。"
        },
        {
            "start": "1822",
            "title": "巴西独立",
            "description": "葡萄牙王子佩德罗在巴西宣布独立并成为皇帝，巴西由殖民地转为独立君主国。"
        },
        {
            "start": "1861",
            "title": "意大利王国成立",
            "description": "撒丁王国在统一战争和公民投票中兼并意大利多数邦国，维托里奥·埃马努埃莱二世成为意大利国王。"
        },
        {
            "start": "1867",
            "title": "加拿大联邦成立",
            "description": "英国北美的加拿大省、新斯科舍和新不伦瑞克组成自治联邦，此后其他省区陆续加入。"
        },
        {
            "start": "1868",
            "title": "明治维新",
            "description": "倒幕势力恢复天皇亲政并废除幕藩体制，日本随后推行中央集权、征兵、教育和工业化改革。"
        },
        {
            "start": "1871",
            "title": "德意志帝国成立",
            "description": "普鲁士在对丹麦、奥地利和法国的战争后联合德意志诸邦，威廉一世在凡尔赛加冕为德国皇帝。"
        },
        {
            "start": "1885",
            "title": "刚果自由邦建立",
            "description": "柏林会议承认比利时国王利奥波德二世私人控制刚果盆地，殖民政权以强迫劳动开采橡胶和象牙。"
        },
        {
            "start": "1901",
            "title": "澳大利亚联邦成立",
            "description": "澳大利亚六个英国殖民地合并为联邦，建立联邦议会和自治政府，同时保留英国君主为国家元首。"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命终结帝制",
            "description": "武昌起义引发各省脱离清廷，中华民国成立并促使清帝退位，延续两千余年的皇帝制度终结。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "俄国临时政府与布尔什维克夺权",
            "description": "二月革命迫使沙皇退位并成立临时政府，十月布尔什维克又占领彼得格勒的权力机关。"
        },
        {
            "start": "1918",
            "title": "德意志、奥匈、奥斯曼与俄罗斯帝国崩溃",
            "description": "第一次世界大战和革命导致四大帝国解体，其领土被共和国、民族国家和委任统治区重新划分。"
        },
        {
            "start": "1922",
            "title": "苏联成立",
            "description": "俄罗斯、乌克兰、白俄罗斯和外高加索苏维埃共和国签署联盟条约，组成由共产党领导的联邦国家。"
        },
        {
            "start": "1923",
            "title": "土耳其共和国成立",
            "description": "穆斯塔法·凯末尔领导的民族运动赢得独立战争，废除苏丹制并以安卡拉为首都建立共和国。"
        },
        {
            "start": "1932",
            "title": "沙特阿拉伯王国成立",
            "description": "阿卜杜勒阿齐兹·伊本·沙特统一内志、汉志和其他地区，宣布成立沙特阿拉伯王国。"
        },
        {
            "start": "1947",
            "title": "印度与巴基斯坦独立",
            "description": "英属印度被划分为印度和巴基斯坦两个自治领，殖民统治结束并伴随大规模人口迁徙与暴力。"
        },
        {
            "start": "1948",
            "title": "以色列国建立",
            "description": "英国结束巴勒斯坦委任统治之际，犹太领导层宣布建立以色列，随后与周边阿拉伯国家爆发战争。"
        },
        {
            "start": "1949",
            "title": "中华人民共和国成立",
            "description": "中国共产党在内战中控制中国大陆后，毛泽东于北京宣布中华人民共和国成立，国民政府迁往台湾。"
        },
        {
            "start": "1957",
            "title": "加纳独立",
            "description": "黄金海岸在夸梅·恩克鲁玛领导下脱离英国成为加纳，是撒哈拉以南非洲较早独立的殖民地之一。"
        },
        {
            "start": "1960",
            "title": "非洲年",
            "description": "1960年有十七个非洲殖民地取得独立，多数来自法国殖民帝国，非洲国家数量由此迅速增加。"
        },
        {
            "start": "1962",
            "title": "阿尔及利亚独立",
            "description": "阿尔及利亚民族解放阵线经过八年战争与法国达成《埃维昂协议》，公投后建立独立国家。"
        },
        {
            "start": "1963",
            "title": "非洲统一组织成立",
            "description": "三十二个非洲独立国家在亚的斯亚贝巴成立非洲统一组织，以维护主权并协调反殖民合作。"
        },
        {
            "start": "1971",
            "title": "孟加拉国独立",
            "description": "东巴基斯坦的独立战争和印度介入击败巴基斯坦军队，孟加拉国在达卡建立主权政府。"
        },
        {
            "start": "1990",
            "title": "德国统一",
            "description": "东德加入德意志联邦共和国，柏林墙倒塌后的两个德国在同一宪法和政府下重新统一。"
        },
        {
            "start": "1991",
            "title": "苏联解体",
            "description": "加盟共和国相继宣布独立，俄罗斯、乌克兰和白俄罗斯领导人终止联盟，苏联于1991年12月正式消失。"
        },
        {
            "start": "1993",
            "title": "捷克斯洛伐克和平解体",
            "description": "捷克与斯洛伐克政治领导人协商分离，联邦在没有战争的情况下成为两个独立共和国。"
        },
        {
            "start": "1997",
            "title": "香港回归",
            "description": "英国将香港主权移交中华人民共和国，香港特别行政区依照“一国两制”框架成立。"
        },
        {
            "start": "1999",
            "title": "澳门回归",
            "description": "葡萄牙将澳门主权移交中华人民共和国，澳门特别行政区依照“一国两制”框架成立。"
        },
        {
            "start": "2002",
            "title": "非洲联盟成立",
            "description": "非洲统一组织改组为非洲联盟，新机构设立首脑会议、委员会和和平安全机制以推进大陆合作。"
        },
        {
            "start": "2011",
            "title": "南苏丹独立",
            "description": "根据结束苏丹内战的和平协议和公投结果，南部地区脱离苏丹并建立南苏丹共和国。"
        }
    ]
};

// 宗教、文化与社会
var tl_culture = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2599",
            "title": "金字塔建筑群与王室丧葬文化",
            "description": "古埃及法老在尼罗河西岸营建金字塔、神庙和墓道，以木乃伊、祭品和仪式维系王室死后崇拜。"
        },
        {
            "start": "-1799",
            "title": "古巴比伦书记学校",
            "description": "美索不达米亚的书记学校教授楔形文字、苏美尔语、数学和法律文书，训练宫廷、神庙与商业所需的专业书吏。"
        },
        {
            "start": "-1499",
            "title": "南亚吠陀赞歌传承",
            "description": "婆罗门祭司以严格的口传方法保存《梨俱吠陀》等赞歌，并在祭火仪式中诵唱。"
        },
        {
            "start": "-1199",
            "title": "商代中国甲骨文",
            "description": "商王室在龟甲和兽骨上刻写占卜问题、结果与验辞，留下中国现存最早的大规模成体系文字材料。"
        },
        {
            "start": "-0999",
            "title": "希伯来宗教传统形成",
            "description": "古代以色列和犹大共同体围绕雅威崇拜、盟约观念、律法和先知传统形成一神教经典传统。"
        },
        {
            "start": "-0799",
            "title": "荷马史诗成文",
            "description": "长期口头传唱的《伊利亚特》和《奥德赛》被整理为希腊文史诗，叙述特洛伊战争和奥德修斯归乡。"
        },
        {
            "start": "-0699",
            "title": "字母文字在地中海传播",
            "description": "腓尼基辅音字母被希腊人改造成包含元音的字母体系，并进一步影响伊特鲁里亚和拉丁文字。"
        },
        {
            "start": "-0599",
            "title": "奥义书思想发展",
            "description": "奥义书作者探讨梵、我、轮回和解脱，把吠陀祭祀传统转向对存在与意识的哲学追问。"
        },
        {
            "start": "-0549",
            "title": "大雄与耆那教传统",
            "description": "大雄组织苦行者共同体，强调不杀生、非占有和自我约束，成为耆那教现行传统的核心导师。"
        },
        {
            "start": "-0529",
            "title": "围绕佛陀教诲形成佛教共同体",
            "description": "乔达摩佛陀在恒河流域讲授四谛、八正道和解脱之法，弟子组成僧团并口传教法。"
        },
        {
            "start": "-0499",
            "title": "孔子学说与中国古典伦理传统",
            "description": "孔子及弟子围绕仁、礼、孝和君子教育展开教学，其言论后来编为《论语》并成为儒家核心文本。"
        },
        {
            "start": "-0449",
            "title": "希腊戏剧在雅典繁荣",
            "description": "雅典在酒神节举行公共戏剧竞赛，埃斯库罗斯、索福克勒斯、欧里庇得斯和阿里斯托芬创作悲剧与喜剧。"
        },
        {
            "start": "-0399",
            "title": "中国重要古典文献编纂",
            "description": "战国至汉初的学者整理《诗经》《尚书》《礼》《易》《春秋》等文本，形成后世经学所依据的经典体系。"
        },
        {
            "start": "-0299",
            "title": "希腊化文化融合",
            "description": "亚历山大征服后，希腊语言、城市和艺术与埃及、西亚及中亚传统在各继业者王国中交汇。"
        },
        {
            "start": "-0249",
            "title": "阿育王时期佛教传播",
            "description": "孔雀王朝阿育王资助僧团、佛塔和布教活动，并用石柱与岩刻敕令宣扬法与道德治理。"
        },
        {
            "start": "-0199",
            "title": "拉比传统与第二圣殿犹太教发展",
            "description": "第二圣殿时期的犹太社群围绕律法、会堂、祭司和不同教派生活，圣殿毁灭后拉比学者重构宗教实践。"
        },
        {
            "start": "0030",
            "title": "早期基督教运动",
            "description": "耶稣的追随者在犹太地和罗马帝国城市传播其复活信仰，建立由使徒、长老和地方会众组成的教会。"
        },
        {
            "start": "0105",
            "title": "与蔡伦奏报相关的造纸术",
            "description": "东汉宫廷官员蔡伦向皇帝奏报以树皮、麻、破布和渔网改进造纸的方法，纸张随后在中国广泛使用。"
        },
        {
            "start": "0200",
            "title": "大乘佛教在亚洲扩展",
            "description": "大乘经典和菩萨信仰沿中亚商路传入中国，并进一步传播到朝鲜、日本和东南亚部分地区。"
        },
        {
            "start": "0313",
            "title": "米兰敕令使基督教合法化",
            "description": "君士坦丁与李锡尼宣布宗教宽容，归还被没收的基督教财产并允许基督徒公开礼拜。"
        },
        {
            "start": "0325",
            "title": "第一次尼西亚公会议",
            "description": "君士坦丁召集各地主教讨论阿里乌派争议，会议制定尼西亚信经并确认圣子与圣父同质。"
        },
        {
            "start": "0380",
            "title": "基督教成为罗马帝国国教",
            "description": "狄奥多西一世颁布法令，以尼西亚基督教为帝国正统并逐步限制公共异教祭祀。"
        },
        {
            "start": "0400",
            "title": "笈多时期梵文古典文化繁荣",
            "description": "笈多时期的宫廷与寺院支持迦梨陀娑等作家的梵文文学，以及数学、天文学、雕塑和印度教经典的发展。"
        },
        {
            "start": "0529",
            "title": "本笃会修道传统开始",
            "description": "努尔西亚的本笃为修道院制定共同生活、祈祷和劳动规则，后来成为西欧修道制度的重要基础。"
        },
        {
            "start": "0610",
            "title": "伊斯兰传统中《古兰经》启示开始",
            "description": "伊斯兰传统认为穆罕默德在麦加附近首次接受天使吉卜利勒传达的启示，此后经文陆续形成《古兰经》。"
        },
        {
            "start": "0622",
            "title": "希吉拉与麦地那穆斯林共同体形成",
            "description": "穆罕默德及追随者从麦加迁往麦地那，在那里建立兼具宗教、政治和防卫职能的穆斯林共同体。"
        },
        {
            "start": "0700",
            "title": "佛教在东亚与东南亚广泛确立",
            "description": "僧侣、译经者和王室赞助使佛教寺院、经典与仪式在中国、朝鲜、日本及东南亚多国形成稳定传统。"
        },
        {
            "start": "0762",
            "title": "阿拔斯首都巴格达建立",
            "description": "哈里发曼苏尔在底格里斯河畔规划圆城巴格达，将其建设为阿拔斯帝国的行政、商业和学术中心。"
        },
        {
            "start": "0800",
            "title": "加洛林教育改革",
            "description": "查理曼宫廷召集学者改革修道院和主教座堂学校，统一拉丁文书写并抄录宗教与古典文本。"
        },
        {
            "start": "0850",
            "title": "阿拉伯语古典翻译运动",
            "description": "巴格达及其他城市的学者把希腊语、叙利亚语、波斯语和梵语著作译成阿拉伯语，涵盖哲学、医学、数学和天文学。"
        },
        {
            "start": "0868",
            "title": "中国印刷《金刚经》",
            "description": "唐代工匠用整版木刻印刷带插图的《金刚经》卷子，现存题记标明868年，是著名的早期有纪年印刷品。"
        },
        {
            "start": "0960",
            "title": "东亚活字与商业出版发展",
            "description": "中国的毕昇试验泥活字，朝鲜发展金属活字，而宋元城市书坊大量刊印经典、历书、小说和实用书。"
        },
        {
            "start": "0988",
            "title": "基辅罗斯基督教化",
            "description": "弗拉基米尔大公接受拜占庭基督教并为基辅居民集体施洗，使东正教成为罗斯国家和文化的重要基础。"
        },
        {
            "start": "1054",
            "title": "东西教会大分裂",
            "description": "罗马教廷与君士坦丁堡牧首因权威、礼仪和教义争议互相绝罚，象征拉丁天主教与希腊东正教长期分离。"
        },
        {
            "start": "1088",
            "title": "博洛尼亚大学传统开始",
            "description": "博洛尼亚的学生和教师围绕罗马法学习组成自治团体，逐渐形成欧洲最早的大学制度之一。"
        },
        {
            "start": "1096",
            "title": "十字军运动开始",
            "description": "教皇乌尔班二世号召西欧基督徒援助东方教会并夺取耶路撒冷，第一次十字军随后前往黎凡特。"
        },
        {
            "start": "1150",
            "title": "欧洲大学网络扩展",
            "description": "巴黎、牛津、剑桥、萨拉曼卡等地形成获得教会或王权特许的师生法人团体，教授神学、法律、医学和文艺。"
        },
        {
            "start": "1200",
            "title": "理学在东亚影响扩大",
            "description": "程颢、程颐和朱熹系统解释理、气、心性与经典教育，理学后来成为中国、朝鲜和日本的重要官方学问。"
        },
        {
            "start": "1250",
            "title": "经院哲学文化成熟",
            "description": "中世纪大学学者以逻辑辩证法协调基督教神学与亚里士多德哲学，托马斯·阿奎那等人形成系统著作。"
        },
        {
            "start": "1300",
            "title": "俗语文学文化扩展",
            "description": "但丁、乔叟及各地诗人用本地语言创作史诗、故事和宗教文本，使文学逐渐脱离拉丁语垄断。"
        },
        {
            "start": "1350",
            "title": "意大利文艺复兴人文主义扩展",
            "description": "意大利学者搜集和校订希腊罗马文本，强调修辞、历史、伦理与人的创造力，并影响艺术和教育。"
        },
        {
            "start": "1450",
            "title": "欧洲古腾堡式活字印刷",
            "description": "古腾堡在美因茨结合金属活字、油性墨水和压印机印制书籍，使欧洲印刷作坊迅速复制长篇文本。"
        },
        {
            "start": "1517",
            "title": "宗教改革开始",
            "description": "马丁·路德公开批评赎罪券和教皇权威，并以德文著作和圣经翻译推动新的新教教会形成。"
        },
        {
            "start": "1534",
            "title": "英格兰宗教改革与王权至上",
            "description": "亨利八世使英格兰教会脱离罗马并由国王担任最高首领，王室随后解散修道院并接收其财产。"
        },
        {
            "start": "1540",
            "title": "耶稣会获准成立",
            "description": "教皇保禄三世正式批准依纳爵·罗耀拉创建的耶稣会，该修会以教育、传教和服从教宗为重点。"
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "特伦托会议",
            "description": "天主教主教会议回应宗教改革，明确教义、整顿神职纪律并改革神学院和礼仪制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "《钦定版圣经》出版",
            "description": "英格兰国王詹姆斯一世委托学者从希伯来文和希腊文重译英文圣经，形成影响深远的1611年版本。"
        },
        {
            "start": "1637",
            "title": "德川政权限制基督教与海外交往",
            "description": "江户幕府禁止基督教、驱逐传教士，并把欧洲贸易集中于长崎，同时限制日本人海外航行和归国。"
        },
        {
            "start": "1648",
            "title": "三十年战争后的宗派秩序",
            "description": "威斯特伐利亚和约确认神圣罗马帝国内天主教、路德宗和加尔文宗的法律地位，并重划部分政治边界。"
        },
        {
            "start": "1685",
            "title": "废除南特敕令",
            "description": "路易十四取消对法国胡格诺派的有限宽容，新教礼拜被禁止，大批新教徒逃往国外。"
        },
        {
            "start": "1715",
            "title": "欧洲启蒙公共领域扩展",
            "description": "咖啡馆、沙龙、学会、报刊和书信网络成为讨论理性、科学、宗教宽容与政治改革的公共空间。"
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "《百科全书》出版",
            "description": "狄德罗和达朗贝尔主持编纂多卷本《百科全书》，汇集工艺、科学、哲学和社会知识并传播启蒙思想。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "太平洋传教与殖民文化接触扩展",
            "description": "欧洲传教士、商人和殖民者进入太平洋岛屿，与当地社会进行皈依、贸易、土地占有和制度冲突。"
        },
        {
            "start": "1800",
            "title": "浪漫主义重塑欧洲文化",
            "description": "浪漫主义作家、画家和作曲家强调情感、自然、想象、民族传统与个人天才，反拨古典主义规范。"
        },
        {
            "start": "1830",
            "title": "大众报刊发行扩展",
            "description": "蒸汽印刷、廉价纸张、电报和城市识字率催生低价日报，使新闻、广告和连载小说进入大众市场。"
        },
        {
            "start": "1848",
            "title": "民族主义与自由主义政治文化高涨",
            "description": "欧洲和美洲的知识分子、学生与市民组织要求宪法、民族统一、新闻自由和扩大政治参与，并在1848年革命中集中爆发。"
        },
        {
            "start": "1868",
            "title": "明治日本国家主导大众教育扩展",
            "description": "明治政府颁布学制并建立全国小学、中学和师范教育网络，以统一课程培养国民与技术人才。"
        },
        {
            "start": "1870",
            "title": "欧美义务教育扩展",
            "description": "各国和地方政府逐步要求儿童入学，并通过公立学校、师资培训和标准课程扩大基础识字教育。"
        },
        {
            "start": "1896",
            "title": "首届现代奥运会",
            "description": "来自十四个国家的运动员在雅典参加田径、游泳、体操等比赛，恢复以古代奥林匹克为灵感的国际运动会。"
        },
        {
            "start": "1900",
            "title": "全球大众文化与娱乐加速",
            "description": "电影、留声机、广播、体育赛事和廉价印刷品形成跨国娱乐产业，明星与流行风格被大规模复制。"
        },
        {
            "start": "1919",
            "title": "包豪斯成立",
            "description": "瓦尔特·格罗皮乌斯在魏玛合并艺术与工艺学校，建立强调功能、材料、工业生产和综合设计的包豪斯。"
        },
        {
            "start": "1920",
            "title": "商业广播扩展",
            "description": "无线电台开始按固定节目表播送新闻、音乐、戏剧和广告，家庭收音机成为大众媒介。"
        },
        {
            "start": "1927",
            "title": "首部长篇同步有声电影",
            "description": "华纳兄弟上映《爵士歌手》，其对白和歌曲通过唱片与画面同步，推动商业电影迅速转向有声片。"
        },
        {
            "start": "1936",
            "title": "多国开始电视定期播出",
            "description": "英国、德国、美国等地建立实验或公共电视台，按固定时段向有限地区播出图像与声音节目。"
        },
        {
            "start": "1945",
            "title": "战后大众高等教育扩展",
            "description": "各国通过退伍军人资助、公立大学和新校区扩大招生，大学从精英机构逐渐转为大众教育体系。"
        },
        {
            "start": "1947",
            "title": "印巴分治重塑南亚认同与迁徙",
            "description": "英属印度按宗教多数地区划分为印度和巴基斯坦，约千万人跨越新边界迁徙并发生严重群体暴力。"
        },
        {
            "start": "1950",
            "title": "全球青年文化与消费社会扩展",
            "description": "战后经济增长、唱片、电影、电视和廉价时尚塑造以青少年为独立消费群体的跨国流行文化。"
        },
        {
            "start": "1955",
            "title": "万隆会议推动亚非团结",
            "description": "二十九个亚洲和非洲国家与地区的代表在印度尼西亚万隆讨论反殖民、和平共处和经济文化合作。"
        },
        {
            "start": "1960",
            "title": "第二波女权主义国际扩展",
            "description": "女性团体围绕就业、教育、生育权、家庭劳动和法律平等开展运动，并建立跨国会议与组织网络。"
        },
        {
            "start": "1964",
            "title": "全球民权与反歧视运动加强",
            "description": "美国民权运动、反种族隔离斗争和各地少数群体组织通过抵制、游行、诉讼与立法争取平等权利。"
        },
        {
            "start": "1968",
            "title": "全球1968年抗议运动",
            "description": "学生、工人和反战团体在巴黎、布拉格、墨西哥城、美国及其他地区发动罢课、罢工和街头示威。"
        },
        {
            "start": "1969",
            "title": "石墙起义与现代LGBTQ权利运动",
            "description": "纽约警方突袭石墙酒吧后，顾客和社区成员连续抗议，促成新的同性恋解放组织与骄傲游行。"
        },
        {
            "start": "1970",
            "title": "现代环保运动进入大众政治",
            "description": "污染事件、生态研究和《寂静的春天》等作品推动地球日、环保组织与环境法规进入主流政治。"
        },
        {
            "start": "1977",
            "title": "个人计算文化全球扩展",
            "description": "微型处理器、家用电脑和软件产业让个人在办公室、学校和家庭中直接使用可编程计算机。"
        },
        {
            "start": "1980",
            "title": "卫星电视与全球媒体网络扩展",
            "description": "通信卫星和有线电视使新闻、体育、音乐和娱乐频道跨国实时播出，形成全球媒体品牌。"
        },
        {
            "start": "1989",
            "title": "万维网提出",
            "description": "蒂姆·伯纳斯-李在欧洲核子研究中心提出用超文本、统一资源标识符和网络协议连接互联网文档的方案。"
        },
        {
            "start": "1991",
            "title": "万维网向公众开放",
            "description": "欧洲核子研究中心开放网页软件和协议，早期浏览器与服务器由科研机构传播到更广泛的互联网用户。"
        },
        {
            "start": "1995",
            "title": "商业互联网与移动通信加速",
            "description": "互联网商业化、蜂窝网络和短信服务迅速扩展，电子邮件、门户网站和移动电话进入日常生活。"
        },
        {
            "start": "2001",
            "title": "维基百科上线",
            "description": "吉米·威尔士和拉里·桑格创办可由公众协作编辑的在线百科全书，条目以自由许可发布。"
        },
        {
            "start": "2004",
            "title": "社交媒体时代开始",
            "description": "Friendster、MySpace、Facebook、YouTube等平台让用户建立个人档案、关系网络并发布可分享内容。"
        },
        {
            "start": "2007",
            "title": "以智能手机为中心的数字生活加速",
            "description": "多点触控手机、应用商店和移动宽带把相机、地图、支付、通信与互联网服务集中到随身设备。"
        },
        {
            "start": "2010",
            "title": "流媒体与平台文化全球化",
            "description": "视频和音乐流媒体、订阅服务及算法推荐取代部分广播和实体媒介，内容可在多国同步发行。"
        },
        {
            "start": "2017",
            "title": "#MeToo成为全球运动",
            "description": "大量女性以“#MeToo”公开讲述性骚扰和性侵经历，媒体调查、职场问责与法律讨论在多国展开。"
        },
        {
            "start": "2020",
            "title": "远程工作、在线教育与数字社会生活激增",
            "description": "新冠疫情期间的封锁和社交距离措施使视频会议、云协作、远程授课、网购和线上娱乐在全球骤增。"
        }
    ]
};

// 战争、征服与革命
var tl_wars = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1273",
            "title": "卡迭石战役",
            "description": "埃及法老拉美西斯二世与赫梯国王穆瓦塔利二世在叙利亚卡迭石附近交战，双方都未取得决定性胜利，后来签订和平条约。"
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "海上民族与东地中海冲突",
            "description": "来源复杂的海上武装群体袭击安纳托利亚、黎凡特和埃及沿岸，与宫殿国家崩溃及人口迁徙同时发生。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "亚述征服黎凡特",
            "description": "新亚述军队逐步征服叙利亚、腓尼基、以色列和犹大部分地区，将当地改为行省或附庸国并实施人口迁移。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "希波战争",
            "description": "阿契美尼德波斯两次大规模入侵希腊本土，雅典、斯巴达等城邦在马拉松、萨拉米斯和普拉提亚等战役中击退波斯军。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "伯罗奔尼撒战争",
            "description": "雅典帝国与斯巴达领导的伯罗奔尼撒同盟长期交战，西西里远征失败和波斯援助使雅典最终投降。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "亚历山大大帝征服",
            "description": "亚历山大率马其顿军越过小亚细亚，击败波斯王大流士三世，征服埃及、波斯帝国并远征至印度河。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "布匿战争",
            "description": "罗马与迦太基为西地中海霸权三次交战，汉尼拔入侵意大利后最终失败，迦太基在第三次战争中被毁。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "秦统一战争",
            "description": "秦国在商鞅改革后以大规模步骑兵和郡县行政先后灭韩、赵、魏、楚、燕、齐，完成中国统一。"
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "楚汉战争",
            "description": "秦朝灭亡后，项羽与刘邦争夺天下，刘邦在垓下击败楚军并建立汉朝。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "凯撒高卢战争",
            "description": "尤利乌斯·凯撒率罗马军征服高卢诸部，并在阿莱西亚击败维钦托利领导的联合抵抗。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "凯撒内战",
            "description": "凯撒越过卢比孔河后与庞培及元老院派开战，在法萨卢斯获胜并成为罗马事实上的独裁者。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "亚克兴海战",
            "description": "屋大维舰队在希腊西岸击败马克·安东尼和克利奥帕特拉联军，结束罗马共和国最后一次内战。"
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "第一次犹太战争",
            "description": "犹太行省反抗罗马统治，罗马军队攻陷耶路撒冷并摧毁第二圣殿，最后在马萨达平定残余抵抗。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "黄巾起义",
            "description": "张角领导的太平道信众在东汉各地同时起兵，朝廷依靠地方豪强镇压，军阀割据由此加剧。"
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "三国战争",
            "description": "魏、蜀、吴三个政权在中国长期争战，赤壁等战役形成三足鼎立，最终西晋灭吴完成短暂统一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "民族迁徙期入侵与西罗马统治崩溃",
            "description": "哥特、汪达尔、法兰克等群体越过罗马边境并建立王国，西罗马皇帝在476年被废黜。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "查士丁尼再征服",
            "description": "拜占庭皇帝查士丁尼派贝利撒留等将领征服汪达尔北非、东哥特意大利和西班牙部分地区。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "拜占庭—萨珊战争",
            "description": "东罗马与萨珊波斯围绕亚美尼亚、美索不达米亚和叙利亚反复战争，最后一轮大战使双方都严重衰弱。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "早期伊斯兰征服",
            "description": "阿拉伯穆斯林军队在哈里发领导下击败萨珊帝国并夺取拜占庭的叙利亚、埃及和北非大片领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "穆斯林征服伊比利亚",
            "description": "倭马亚军队跨越直布罗陀海峡击败西哥特王国，在伊比利亚大部建立安达卢斯政权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "安史之乱",
            "description": "安禄山和史思明反叛唐朝并占领洛阳、长安，唐廷借助地方军镇和回鹘援军历时八年平乱。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "维京袭击与征服",
            "description": "斯堪的纳维亚战士乘长船袭击并定居不列颠、爱尔兰、法兰西和东欧，部分地区形成诺斯人政权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国战争",
            "description": "唐朝灭亡后北方军阀连续建立五个王朝，南方和河东多个政权并立，战争持续到宋朝统一大部中国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "诺曼征服英格兰",
            "description": "诺曼底公爵威廉在黑斯廷斯击败哈罗德二世，随后以城堡和土地重新分封控制英格兰。"
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "东地中海十字军战争",
            "description": "西欧十字军多次前往黎凡特，与塞尔柱、法蒂玛、赞吉、阿尤布和马穆鲁克等势力争夺耶路撒冷及沿海据点。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "源平合战",
            "description": "源氏与平氏争夺日本朝廷主导权，源氏在坛之浦消灭平氏主力，随后建立镰仓幕府。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "蒙古征服欧亚大陆",
            "description": "成吉思汗及其后裔以骑兵军队征服中亚、华北、伊朗、俄罗斯和西亚部分地区，建立史上最大的连续陆地帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "阿尔比十字军",
            "description": "教皇号召法国北部贵族讨伐朗格多克的卡特里派，十字军摧毁异端据点并加强法国王权对南部的控制。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "蒙古入侵欧洲",
            "description": "拔都和速不台率蒙古军击败罗斯诸国、波兰和匈牙利军队，进抵中欧后因大汗去世等原因撤退。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "蒙古入侵日本",
            "description": "元朝与高丽联军两次渡海攻击九州，日军防御、补给困难和风暴使两次入侵均告失败。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "百年战争",
            "description": "英格兰与法国王室围绕法国王位和领地断续战争，长弓、火炮和常备军逐渐改变作战，法国最终收复大部失地。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "红巾军起义",
            "description": "白莲教相关的红巾军在元末各地起义，朱元璋在群雄战争中胜出并建立明朝。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "帖木儿征服",
            "description": "帖木儿以撒马尔罕为基地征服中亚、伊朗、美索不达米亚、印度北部和安纳托利亚，建立短暂但广阔的帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "胡斯战争",
            "description": "扬·胡斯被处死后，波希米亚胡斯派反抗天主教和帝国军队，并以车堡战术多次击退十字军。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "玫瑰战争",
            "description": "英格兰兰开斯特与约克两支王族争夺王位，博斯沃思战役后亨利·都铎即位并建立都铎王朝。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "日本战国战争",
            "description": "室町幕府权威崩溃后，各地大名以城郭、足轻和火器争夺领地，织田信长、丰臣秀吉和德川家康逐步完成统一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "格拉纳达陷落",
            "description": "卡斯蒂利亚和阿拉贡军队围困并迫使格拉纳达奈斯尔王朝投降，伊比利亚最后一个穆斯林国家灭亡。"
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "意大利战争",
            "description": "法国、西班牙、神圣罗马帝国和意大利诸邦为米兰、那不勒斯及半岛霸权反复交战，西班牙最终取得优势。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "西班牙征服阿兹特克帝国",
            "description": "埃尔南·科尔特斯与特拉斯卡拉等原住民盟军围攻特诺奇蒂特兰，天花和战争导致墨西加政权崩溃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "德国农民战争",
            "description": "德意志南部和中部农民、矿工与城市民众以《十二条款》等要求减轻领主负担，诸侯军队最终镇压起义。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "西班牙征服印加",
            "description": "弗朗西斯科·皮萨罗俘虏阿塔瓦尔帕并利用印加内战与当地盟友占领库斯科，随后建立殖民统治。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "法国宗教战争",
            "description": "法国天主教派与胡格诺派贵族和城市长期内战，圣巴托洛缪日屠杀后冲突持续，最终亨利四世即位并颁布南特敕令。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "尼德兰革命与八十年战争",
            "description": "尼德兰诸省反抗西班牙哈布斯堡的征税和宗教政策，北方七省建立荷兰共和国并最终获得独立承认。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "万历朝鲜战争",
            "description": "丰臣秀吉两次派军入侵朝鲜，朝鲜水军、义兵和明朝援军阻止日军占领，秀吉死后日军撤退。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "三十年战争",
            "description": "波希米亚宗教冲突演变为神圣罗马帝国及欧洲列强大战，德意志地区遭受严重破坏，威斯特伐利亚和约结束战争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "葡萄牙复国战争",
            "description": "葡萄牙贵族推翻西班牙哈布斯堡统治并拥立布拉干萨王朝，经过长期边境战争恢复独立。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "英国内战",
            "description": "查理一世与议会因税收、宗教和主权争议开战，议会新模范军获胜，国王被处决并建立共和国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "明清易代战争",
            "description": "李自成攻陷北京后明朝灭亡，清军入关并与南明、农民军及地方武装长期作战，逐步控制中国。"
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "英荷战争",
            "description": "英格兰与荷兰共和国围绕海运、殖民地和商业霸权进行了三次主要海战，双方舰队在北海和英吉利海峡交锋。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "维也纳之战",
            "description": "奥斯曼大军围攻维也纳，波兰国王扬三世·索别斯基率联军突袭解围，奥斯曼在中欧的攻势受挫。"
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "光荣革命",
            "description": "英格兰议会邀请奥兰治的威廉登陆，詹姆斯二世逃亡，威廉与玛丽接受议会条件共同即位。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "大北方战争",
            "description": "俄罗斯、丹麦和萨克森等国挑战瑞典波罗的海霸权，彼得一世在波尔塔瓦获胜并取得波罗的海领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "西班牙王位继承战争",
            "description": "西班牙哈布斯堡绝嗣后，法国波旁与奥地利哈布斯堡支持者为王位和欧洲均势交战，最终腓力五世保住王位但放弃法国继承权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "七年战争",
            "description": "英国与法国在欧洲、北美、加勒比、印度和海上争夺殖民霸权，普鲁士则在欧洲抵抗奥地利、俄罗斯等国联盟。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "美国独立战争",
            "description": "十三殖民地反抗英国征税并宣布独立，在法国等国援助下于约克镇迫使英军主力投降。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "法国大革命",
            "description": "财政危机促使三级会议召开，巴黎民众攻占巴士底狱，革命随后废除封建特权和君主制并建立共和国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "海地革命",
            "description": "圣多明各被奴役者发动起义，先后与法国殖民者、西班牙和英国军队交战，最终建立独立的海地。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "法国革命战争与拿破仑战争",
            "description": "欧洲君主国先后与革命法国和拿破仑帝国组成多次反法同盟，战争遍及欧洲和海外，最终拿破仑在滑铁卢失败。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "第一次塞尔维亚起义",
            "description": "卡拉乔尔杰领导塞尔维亚人反抗奥斯曼地方军阀和帝国统治，一度建立自治政府但最终被镇压。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "西属美洲独立战争",
            "description": "玻利瓦尔、圣马丁等领导的军队在西属美洲多地击败保王派，建立从墨西哥到南美洲的一系列共和国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "希腊独立战争",
            "description": "希腊起义者反抗奥斯曼统治，欧洲志愿者和英法俄海军介入后，奥斯曼承认独立的希腊王国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "第一次鸦片战争",
            "description": "英国因清政府禁烟和贸易争端出兵中国沿海，以海军优势迫使清朝签订《南京条约》并开放通商口岸。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "欧洲1848年革命",
            "description": "巴黎革命引发德意志、奥地利、意大利和其他地区的起义，参与者要求宪法、民族统一、社会改革和扩大选举权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "太平天国运动",
            "description": "洪秀全领导太平军在华南起义并占领南京建立政权，清廷依靠湘军、淮军等地方武装历时十四年镇压。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "克里米亚战争",
            "description": "俄罗斯与奥斯曼帝国开战后，英国、法国和撒丁加入奥斯曼一方，联军围攻塞瓦斯托波尔并迫使俄国求和。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "第二次鸦片战争",
            "description": "英国和法国以外交与贸易争端再次进攻清朝，联军攻入北京并迫使中国增开口岸、允许使节驻京和扩大传教权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "印度民族起义",
            "description": "东印度公司印度兵叛变迅速扩展为北印度多地反英起义，英国镇压后废除公司统治并由王室直接管理印度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "美国内战",
            "description": "南方蓄奴州退出联邦建立邦联，联邦军经过四年战争击败邦联，维护国家统一并促成奴隶制废除。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "德意志统一战争",
            "description": "普鲁士先后在对丹麦、奥地利和法国的战争中获胜，排除奥地利并把北德与南德诸邦联合为德意志帝国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "戊辰战争",
            "description": "支持天皇新政府的萨摩、长州等藩与德川幕府势力交战，幕府败退至北海道后投降，明治政府统一全国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "普法战争",
            "description": "普鲁士领导的德意志联军击败法国并俘虏拿破仑三世，巴黎被围，法国割让阿尔萨斯和洛林。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "南美太平洋战争",
            "description": "智利与秘鲁、玻利维亚为阿塔卡马沙漠的硝石资源和边界交战，智利获胜并取得沿海领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "马赫迪战争",
            "description": "穆罕默德·艾哈迈德自称马赫迪并领导苏丹起义军推翻埃及—英国统治，建立马赫迪国家，后被英埃联军征服。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "中法战争",
            "description": "法国为控制越南与清朝在越北、台湾和中国沿海交战，战争后清政府承认法国在越南的保护权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "甲午战争",
            "description": "清朝与日本为朝鲜半岛影响力交战，日本海陆军获胜，清朝在《马关条约》中承认朝鲜独立并割让台湾。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "阿杜瓦战役",
            "description": "埃塞俄比亚皇帝孟尼利克二世的军队在阿杜瓦击败意大利入侵军，迫使意大利承认埃塞俄比亚主权。"
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "第二次布尔战争",
            "description": "英国与德兰士瓦、奥兰治自由邦的布尔共和国交战，经过正规战和游击战后吞并两共和国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "义和团运动与列强干涉",
            "description": "义和团在华北攻击教民和外国机构，清廷一度支持其围攻使馆，八国联军攻占北京并迫使清政府赔款驻军。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "日俄战争",
            "description": "日本与俄罗斯为满洲和朝鲜权益交战，日本在旅顺、奉天和对马海战取胜，双方经美国调停签订和约。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "俄国1905年革命",
            "description": "“血腥星期日”后罢工、农民骚乱和军队哗变席卷俄国，沙皇被迫设立国家杜马但随后限制其权力。"
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "墨西哥革命",
            "description": "反对波菲里奥·迪亚斯独裁的起义演变为马德罗、萨帕塔、比利亚和卡兰萨等派系战争，最终制定1917年宪法。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命",
            "description": "武昌起义引发各省独立，革命派与清廷谈判促成宣统帝退位并建立中华民国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "巴尔干战争",
            "description": "巴尔干同盟先击败奥斯曼帝国夺取其欧洲领土，随后保加利亚与原盟国为分配问题再战并失败。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "第一次世界大战",
            "description": "奥匈对塞尔维亚宣战引发同盟体系连锁参战，协约国与同盟国在欧洲、中东、非洲和海上进行总体战，最终同盟国战败。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "复活节起义",
            "description": "爱尔兰共和主义者在都柏林占领公共建筑并宣布共和国，英国军队一周内镇压，但处决领导人激化独立运动。"
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "俄国革命",
            "description": "二月革命推翻沙皇并成立临时政府，十月革命中布尔什维克夺取彼得格勒政权并宣布苏维埃政府。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "俄国内战",
            "description": "布尔什维克红军与白军、民族独立军和外国干涉军在原俄罗斯帝国各地作战，红军最终控制核心地区。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "土耳其独立战争",
            "description": "穆斯塔法·凯末尔领导安纳托利亚民族军抵抗希腊、亚美尼亚、法国和协约国占领，迫使列强以《洛桑条约》承认新边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "中国内战",
            "description": "中国国民党与中国共产党在统一战线破裂后长期交战，抗日战争期间暂时合作，1949年共产党控制大陆而国民政府迁台。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "日本在东亚的扩张战争",
            "description": "日本军队占领中国东北并扩大对华战争，随后进攻东南亚和太平洋殖民地，最终与同盟国全面战争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "第二次意大利—埃塞俄比亚战争",
            "description": "墨索里尼的意大利从厄立特里亚和索马里入侵埃塞俄比亚，使用空袭和化学武器占领亚的斯亚贝巴并吞并该国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "西班牙内战",
            "description": "共和政府与佛朗哥领导的国民军在德国、意大利和苏联等外援介入下交战，国民军获胜并建立独裁政权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "第二次世界大战",
            "description": "德国入侵波兰后欧洲战争爆发，轴心国与同盟国在全球进行总体战，纳粹实施大屠杀，最终德国和日本相继投降。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "第二次世界大战东线",
            "description": "纳粹德国入侵苏联后，双方在莫斯科、斯大林格勒、库尔斯克和东欧进行规模巨大的陆战，苏军最终攻入柏林。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "太平洋战争",
            "description": "日本袭击珍珠港并进攻东南亚后，与美国、英国、中国、澳大利亚等在太平洋和亚洲展开海陆空战争，最终日本投降。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "印度尼西亚独立战争",
            "description": "苏加诺和哈达宣布独立后，印度尼西亚共和国军与试图恢复殖民统治的荷兰军队作战，国际压力促成主权移交。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "第一次印度支那战争",
            "description": "胡志明领导的越盟与法国殖民军在越南、老挝和柬埔寨交战，奠边府战役后法国同意撤出印度支那。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "第一次中东战争",
            "description": "以色列宣布建国后，埃及、外约旦、叙利亚、黎巴嫩和伊拉克军队进入前委任统治区，战争以停战线和大规模巴勒斯坦人流离失所结束。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "冷战",
            "description": "美国与苏联以核威慑、军事同盟、代理战争、经济竞争和意识形态宣传进行全球对抗，但未直接爆发全面战争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "马来亚紧急状态",
            "description": "马来亚共产党游击队反抗英国殖民政府，英方以军事清剿、村落迁移和政治改革削弱叛乱。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "朝鲜战争",
            "description": "朝鲜人民军越过三八线进攻韩国，联合国军和中国人民志愿军相继参战，战线最终停在接近原分界线处并签署停战协定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "茅茅起义",
            "description": "肯尼亚以基库尤人为主的武装组织反抗英国殖民统治和土地剥夺，殖民政府宣布紧急状态并大规模拘禁镇压。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "阿尔及利亚战争",
            "description": "民族解放阵线以游击战和城市袭击反抗法国殖民统治，法国投入大军并发生酷刑与政治危机，最终阿尔及利亚独立。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "越南战争",
            "description": "北越和南方民族解放阵线与美国支持的南越政府长期交战，美军大规模介入后撤出，1975年北越攻占西贡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "苏伊士危机",
            "description": "埃及总统纳赛尔将苏伊士运河国有化后，以色列、英国和法国联合进攻埃及，但在美苏和联合国压力下撤军。"
        },
        {
            "start": "1956",
            "title": "匈牙利革命",
            "description": "布达佩斯学生和工人起义要求政治改革与脱离苏联控制，苏军坦克再次进入匈牙利并推翻纳吉政府。"
        },
        {
            "start": "1959",
            "title": "古巴革命",
            "description": "菲德尔·卡斯特罗领导的“七二六运动”以游击战推翻巴蒂斯塔政府，并在哈瓦那建立革命政权。"
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "刚果危机",
            "description": "比属刚果独立后军队哗变、加丹加分离、比利时和联合国介入，卢蒙巴被杀，蒙博托最终掌权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "葡萄牙殖民战争",
            "description": "安哥拉、几内亚比绍和莫桑比克的独立运动与葡萄牙军队长期交战，战争压力促成葡萄牙康乃馨革命和殖民地独立。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "古巴导弹危机",
            "description": "美国发现苏联在古巴部署核导弹后实施海上封锁，美苏经过十三天对峙达成撤除导弹和安全保证的秘密协议。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "印度尼西亚大规模杀戮与政治转型",
            "description": "九三〇事件后，军方及其盟友大规模杀害共产党成员和被指同情者，苏哈托随后取代苏加诺掌权。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "第三次中东战争",
            "description": "以色列对埃及、叙利亚和约旦发动先发制人打击，六天内占领西奈半岛、加沙、约旦河西岸、东耶路撒冷和戈兰高地。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "布拉格之春与华约入侵",
            "description": "杜布切克政府在捷克斯洛伐克推行“有人性面孔的社会主义”改革，苏联等华约军队入侵并终止改革。"
        },
        {
            "start": "1971",
            "title": "孟加拉国解放战争",
            "description": "巴基斯坦军队镇压东巴基斯坦自治运动，引发大规模暴行和难民潮；孟加拉游击队与印度军队最终迫使巴军投降。"
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "第四次中东战争",
            "description": "埃及和叙利亚在犹太赎罪日突袭以色列占领区，初期突破后以色列反攻，战争在美苏斡旋下停火。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "黎巴嫩内战",
            "description": "黎巴嫩基督教、穆斯林、巴勒斯坦和左翼武装及叙利亚、以色列等外部力量长期混战，国家分裂至《塔伊夫协议》后重建。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "红色高棉统治下的柬埔寨大屠杀",
            "description": "红色高棉强迫城市居民迁往农村，实施集体劳动、处决和饥饿政策，造成约一百五十万至两百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "苏阿战争",
            "description": "苏联出兵支持阿富汗共产党政府，与得到美国、巴基斯坦和海湾国家援助的圣战者长期作战，最终撤军。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "伊朗革命",
            "description": "罢工、示威和宗教反对运动迫使巴列维国王离境，霍梅尼回国后通过公投建立伊斯兰共和国。"
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "两伊战争",
            "description": "萨达姆统治下的伊拉克入侵革命后的伊朗，双方进行八年堑壕战、导弹袭城和化学武器攻击，最后恢复战前边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "马岛战争",
            "description": "阿根廷占领福克兰群岛后，英国派遣远征舰队重新夺回群岛，阿根廷驻军投降。"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第一次巴勒斯坦大起义",
            "description": "约旦河西岸和加沙的巴勒斯坦人以示威、罢工、抵制和石块抗议以色列占领，以军实施逮捕和武力镇压。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "天安门抗议与镇压",
            "description": "学生和市民在北京天安门广场及多座城市要求反腐、政治改革和言论自由，军队于六月初进入北京并以武力清场。"
        },
        {
            "start": "1989",
            "title": "东欧共产党政权垮台",
            "description": "波兰、匈牙利、东德、捷克斯洛伐克、保加利亚和罗马尼亚的共产党政权在选举、谈判或群众抗议中相继结束。"
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "海湾战争",
            "description": "伊拉克吞并科威特后，美国领导的多国部队先实施空袭再发动地面进攻，数周内迫使伊军撤出科威特。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "南斯拉夫战争",
            "description": "南斯拉夫解体过程中，斯洛文尼亚、克罗地亚、波斯尼亚和科索沃等地爆发民族战争、围城、驱逐和大规模暴行。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "卢旺达针对图西族的种族灭绝",
            "description": "极端胡图政权和民兵在约一百天内系统杀害图西族及温和胡图族，卢旺达爱国阵线最终击败政府军。"
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "第一次车臣战争",
            "description": "俄罗斯军队试图恢复对宣布独立的车臣控制，在格罗兹尼遭遇激烈战斗，最终签署停火并暂时撤军。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "厄立特里亚—埃塞俄比亚战争",
            "description": "厄立特里亚与埃塞俄比亚因巴德梅附近边界争端投入大规模正规军作战，停火后由国际委员会划界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "第二次刚果战争",
            "description": "刚果民主共和国政府、反政府武装和多个非洲国家军队卷入地区战争，矿区争夺和民兵暴力造成数百万人死亡或流离失所。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "科索沃战争与北约干预",
            "description": "南斯拉夫安全部队与科索沃阿尔巴尼亚武装交战并造成大规模驱逐，北约空袭南斯拉夫后塞军撤出科索沃。"
        },
        {
            "start": "2001-09-11",
            "title": "九一一袭击",
            "description": "基地组织成员劫持四架客机，撞击纽约世贸中心和美国国防部，另一架在宾夕法尼亚坠毁，近三千人遇难。"
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "阿富汗战争",
            "description": "美国及盟军在九一一后推翻庇护基地组织的塔利班政权，随后与塔利班叛乱长期作战，外国军队撤出后塔利班重掌全国。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "伊拉克战争",
            "description": "美国和英国等以伊拉克拥有大规模杀伤性武器为由入侵并推翻萨达姆政权，此后占领、叛乱和宗派战争持续多年。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "达尔富尔战争与大规模暴行",
            "description": "苏丹达尔富尔反政府武装与政府军及金戈威德民兵交战，村庄焚毁、杀戮和强迫迁徙造成严重人道危机。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "巴基斯坦北部叛乱与冲突",
            "description": "巴基斯坦塔利班及其他武装在部落地区和开伯尔—普什图省攻击政府与平民，军方多次发动清剿行动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "黎巴嫩战争",
            "description": "真主党越境袭击并俘虏以色列士兵后，以色列空袭和入侵黎巴嫩南部，双方以火箭和地面战交锋后依据联合国决议停火。"
        },
        {
            "start": "2008",
            "title": "俄格战争",
            "description": "格鲁吉亚军队进攻南奥塞梯后，俄罗斯大规模出兵并进入格鲁吉亚本土，战后承认南奥塞梯和阿布哈兹独立。"
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "阿拉伯之春",
            "description": "突尼斯自焚事件引发从北非到西亚的大规模示威，部分国家领导人下台，另一些地方爆发镇压、改革或内战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "利比亚内战与国际干预",
            "description": "反卡扎菲起义演变为内战，北约依联合国授权空袭政府军，反对派攻占的黎波里并杀死卡扎菲。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "叙利亚内战开始",
            "description": "阿萨德政府武力镇压示威后，军队逃兵和反对派武装起义，冲突迅速发展为多方参与的全国内战。"
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISIS领土扩张与其哈里发国覆灭",
            "description": "“伊斯兰国”攻占伊拉克和叙利亚大片地区并宣布哈里发国，国际联军与当地部队随后逐城夺回其领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "俄罗斯吞并克里米亚与顿巴斯战争开始",
            "description": "乌克兰政权更迭后，俄罗斯军队控制克里米亚并组织吞并，俄支持的分离主义者随后在顿涅茨克和卢甘斯克与乌军交战。"
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "伊拉克反ISIS战争",
            "description": "ISIS攻占摩苏尔和伊拉克西北部后，伊拉克军队、库尔德武装、民兵和国际联军发动反攻并夺回主要城市。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "也门内战升级",
            "description": "胡塞武装控制萨那并迫使政府外逃，沙特领导的联盟随后空袭和介入，国家分裂并出现严重饥荒与疾病。"
        },
        {
            "start": "2017",
            "title": "罗兴亚人大规模逃离缅甸",
            "description": "缅甸军方在若开邦发动“清剿行动”，村庄被焚毁并发生杀戮和性暴力，七十多万罗兴亚人逃往孟加拉国。"
        },
        {
            "start": "2020",
            "title": "第二次纳戈尔诺—卡拉巴赫战争",
            "description": "阿塞拜疆与亚美尼亚及阿尔察赫部队交战，阿塞拜疆依靠无人机和炮火收复大片领土，俄罗斯斡旋停火并部署维和人员。"
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "提格雷战争",
            "description": "埃塞俄比亚联邦政府与提格雷人民解放阵线开战，厄立特里亚军队和地方武装介入，战斗与封锁造成严重平民伤亡和饥饿。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "缅甸军事政变与全国冲突",
            "description": "缅甸军方拘押民选领导人并夺权，抗议遭镇压后，人民防卫军与多个民族武装在全国扩大反军政府战争。"
        },
        {
            "start": "2022-02-24",
            "title": "俄罗斯全面入侵乌克兰",
            "description": "俄罗斯从北、东、南多路入侵乌克兰并试图攻占基辅，乌军阻止首都攻势后，战争转为东南部消耗战和远程袭击。"
        },
        {
            "start": "2023-10-07",
            "title": "以色列—哈马斯战争开始",
            "description": "哈马斯等武装从加沙袭击以色列南部并劫持人质，以色列随后对加沙实施大规模空袭、封锁和地面进攻。"
        },
        {
            "start": "2023",
            "title": "苏丹战争开始",
            "description": "苏丹武装部队与快速支援部队在喀土穆爆发权力争夺并扩展到达尔富尔等地，城市战和族群暴力造成大规模流离失所。"
        }
    ]
};

// 经济、技术与全球交换
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "帆船运输扩展",
            "description": "早期船民在河流、近海和岛屿之间使用帆力运输人员与货物，使航行不再完全依赖划桨。"
        },
        {
            "start": "-2999",
            "title": "跨区域商品贸易增长",
            "description": "石材、黑曜石、贝壳、盐和金属等商品通过陆路与水路在相距遥远的聚落之间交换。"
        },
        {
            "start": "-1999",
            "title": "青铜贸易网络连接欧亚地区",
            "description": "铜矿、锡矿和成品青铜沿商路流通，将矿区、冶炼中心、宫殿国家和港口连接起来。"
        },
        {
            "start": "-1199",
            "title": "铁生产重塑工具与战争",
            "description": "炼铁与锻造技术普及后，铁制农具、斧、刀剑和矛头逐渐进入农业生产与军队装备。"
        },
        {
            "start": "-0599",
            "title": "铸币在地中海与西亚传播",
            "description": "吕底亚和希腊城邦铸造带有权威标记的标准金属币，波斯与地中海诸国随后广泛采用货币支付。"
        },
        {
            "start": "-0299",
            "title": "丝绸之路交流扩展",
            "description": "汉朝、中亚绿洲、波斯和罗马世界之间形成多段商路，丝绸、马匹、玻璃、宗教和使节沿线往来。"
        },
        {
            "start": "-0199",
            "title": "印度洋季风贸易加强",
            "description": "航海者利用季风规律往返红海、东非、印度和东南亚，港口商人交换香料、纺织品、象牙和金属。"
        },
        {
            "start": "-0099",
            "title": "罗马道路与海运系统整合地中海",
            "description": "罗马修建军用大道、桥梁和港口，并保护地中海航线，使军队、税粮、邮件和商品在帝国内快速流动。"
        },
        {
            "start": "0100",
            "title": "造纸在中国传播",
            "description": "以植物纤维制成的纸逐步取代部分竹简、木牍和丝帛，成为政府文书、书信和书籍的常用载体。"
        },
        {
            "start": "0200",
            "title": "骆驼商队跨撒哈拉贸易扩展",
            "description": "单峰骆驼和商队路线连接北非绿洲与萨赫勒，盐、黄金、奴隶、马匹和纺织品穿越沙漠运输。"
        },
        {
            "start": "0600",
            "title": "大运河网络整合中国",
            "description": "隋唐以后贯通南北的运河把江南粮食和商品运往洛阳、长安与北京，支撑首都和北方军队供应。"
        },
        {
            "start": "0700",
            "title": "印度洋商业侨民网络扩展",
            "description": "阿拉伯、波斯、印度、东南亚和中国商人在海外港口建立社群，通过亲族、宗教和信用组织跨海贸易。"
        },
        {
            "start": "0750",
            "title": "伊斯兰商业与信用网络扩展",
            "description": "穆斯林商人利用合伙契约、汇兑、代理人和共同法律语言，在地中海、印度洋和撒哈拉地区经营远距离贸易。"
        },
        {
            "start": "0800",
            "title": "造纸术在伊斯兰世界传播",
            "description": "中亚传入的造纸工艺在撒马尔罕、巴格达、开罗和安达卢斯建立作坊，为行政、学术和书籍市场提供廉价材料。"
        },
        {
            "start": "0900",
            "title": "中国火药武器开始发展",
            "description": "唐宋炼丹术产生的火药配方被用于火箭、火枪、炸弹和燃烧武器，并逐渐成为军队装备。"
        },
        {
            "start": "1000",
            "title": "中国航海罗盘发展",
            "description": "磁化针从占卜和定向工具转用于航海，使船只在阴天、夜间和远离海岸时仍能判断方向。"
        },
        {
            "start": "1100",
            "title": "中世纪欧洲商业革命",
            "description": "人口增长、城市复兴、集市和海港贸易扩大，行会、商人法、货币与信用机构在欧洲各地发展。"
        },
        {
            "start": "1200",
            "title": "蒙古时代跨欧亚交流",
            "description": "蒙古诸汗国保护驿站和商路，使商人、使节、工匠、宗教人士和技术在中国、中亚、西亚与欧洲间往来。"
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "马可·波罗横跨欧亚旅行",
            "description": "威尼斯商人马可·波罗经中亚抵达元朝中国，返欧后其旅行叙述向欧洲读者介绍亚洲城市、宫廷和贸易。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "汇票与银行商号扩展",
            "description": "意大利及欧洲商人用汇票跨城结算，以合伙银行和账簿转移资金，减少携带大量硬币的风险。"
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "郑和下西洋",
            "description": "明朝宦官郑和率大型舰队七次航行东南亚、印度洋、阿拉伯半岛和东非，进行朝贡外交与贸易。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "欧洲印刷革命",
            "description": "金属活字印刷作坊在欧洲城市迅速扩散，大量生产圣经、古典、传单和教科书，书价与复制时间显著下降。"
        },
        {
            "start": "1488",
            "title": "迪亚士绕过好望角",
            "description": "葡萄牙航海家巴尔托洛梅乌·迪亚士绕过非洲南端，证明大西洋可经海路进入印度洋。"
        },
        {
            "start": "1492-10-12",
            "title": "哥伦布抵达加勒比海",
            "description": "受西班牙王室资助的哥伦布横渡大西洋抵达巴哈马和加勒比岛屿，误认为已到达亚洲近海。"
        },
        {
            "start": "1494",
            "title": "《托德西利亚斯条约》划分海外势力范围",
            "description": "西班牙与葡萄牙在教皇调停下划定大西洋经线，将欧洲以外新发现土地的主张分置于两国范围。"
        },
        {
            "start": "1498",
            "title": "达·伽马经海路抵达印度",
            "description": "葡萄牙舰队绕过好望角，经东非港口抵达印度卡利卡特，建立欧洲直达印度洋贸易的航线。"
        },
        {
            "start": "1500",
            "title": "哥伦布大交换加速",
            "description": "欧洲、美洲和非洲之间大规模交换作物、牲畜、病原体和人口，马、牛、小麦传入美洲，玉米、马铃薯等传向旧大陆。"
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "跨大西洋奴隶贸易",
            "description": "欧洲和美洲商人从非洲购买或掳掠被奴役者，以拥挤船舱运往美洲种植园和矿山，持续数百年。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "首次环球航行",
            "description": "麦哲伦率西班牙船队西航穿过南美海峡并横渡太平洋，麦哲伦死后“维多利亚号”由埃尔卡诺带回西班牙。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "波托西白银繁荣",
            "description": "西班牙殖民者在安第斯波托西大规模开采银矿，以米塔劳役和汞齐法生产白银并输往欧洲与亚洲。"
        },
        {
            "start": "1565",
            "title": "马尼拉大帆船贸易连接美洲与亚洲",
            "description": "西班牙帆船每年往返马尼拉与阿卡普尔科，以美洲白银换取中国丝绸、瓷器、香料和亚洲商品。"
        },
        {
            "start": "1600",
            "title": "英国东印度公司获特许",
            "description": "伊丽莎白一世授予商人公司东印度贸易垄断权，该公司后来在印度建立商站、军队和领土统治。"
        },
        {
            "start": "1602",
            "title": "荷兰东印度公司成立",
            "description": "荷兰各贸易公司合并为获得战争、缔约和殖民权的股份公司，以巴达维亚为中心控制亚洲香料贸易。"
        },
        {
            "start": "1609",
            "title": "阿姆斯特丹银行成立",
            "description": "阿姆斯特丹市设立公共汇兑银行，以稳定的账面货币接受存款和结算，成为欧洲贸易金融中心。"
        },
        {
            "start": "1637",
            "title": "荷兰郁金香市场崩盘",
            "description": "稀有郁金香球根的远期合约价格急升后买家在1637年停止成交，投机市场迅速瓦解并引发合同纠纷。"
        },
        {
            "start": "1650",
            "title": "大西洋种植园经济扩展",
            "description": "加勒比、巴西和北美南部的殖民种植园以被奴役劳动力大规模生产糖、烟草、咖啡和棉花出口欧洲。"
        },
        {
            "start": "1694",
            "title": "英格兰银行成立",
            "description": "英国议会特许私人投资者成立银行，向政府提供长期贷款并发行可流通银行券，成为国家财政的重要机构。"
        },
        {
            "start": "1700",
            "title": "糖、茶、咖啡与棉花全球市场扩展",
            "description": "种植园、亚洲产区、欧洲商社和大众消费将糖、茶、咖啡与棉纺织品纳入跨洋供应链。"
        },
        {
            "start": "1712",
            "title": "纽科门蒸汽机",
            "description": "托马斯·纽科门制造大气式蒸汽机，以蒸汽冷凝造成的压力差驱动泵，从煤矿抽排地下水。"
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "第一次工业革命",
            "description": "英国纺织机械、煤炭、蒸汽动力和工厂生产快速结合，机器纺纱织布随后扩散到冶金、交通和欧洲大陆。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "瓦特改良蒸汽机获专利",
            "description": "詹姆斯·瓦特为蒸汽机增加独立冷凝器等改进，显著降低燃料消耗并使旋转动力适用于工厂。"
        },
        {
            "start": "1770",
            "title": "英国工厂制度扩展",
            "description": "资本家把纺纱机、织机和工人集中在水力或蒸汽动力工厂，按钟点和纪律组织大规模生产。"
        },
        {
            "start": "1787",
            "title": "第一舰队开启英国殖民澳大利亚",
            "description": "载有囚犯、海军和官员的英国第一舰队抵达杰克逊港，建立新南威尔士流放殖民地并开始占用原住民土地。"
        },
        {
            "start": "1793",
            "title": "轧棉机加速美国棉花生产与奴隶制",
            "description": "伊莱·惠特尼的轧棉机快速分离短绒棉籽，使美国南部棉花种植和被奴役劳动力需求急剧增长。"
        },
        {
            "start": "1807",
            "title": "商业蒸汽船时代开始",
            "description": "蒸汽机驱动的轮船开始按时刻表在河流和沿海运送乘客与货物，不再完全受风向限制。"
        },
        {
            "start": "1825",
            "title": "斯托克顿—达灵顿铁路开通",
            "description": "英国首条使用蒸汽机车的公共铁路运送煤炭和乘客，展示铁路作为商业运输系统的可行性。"
        },
        {
            "start": "1830",
            "title": "利物浦—曼彻斯特铁路开通",
            "description": "全线以蒸汽机车牵引的城际铁路连接利物浦港与曼彻斯特工业区，定时运送货物和乘客。"
        },
        {
            "start": "1837",
            "title": "电报实用演示",
            "description": "莫尔斯等人的电报系统通过导线发送编码电脉冲，使文字信息可在华盛顿与巴尔的摩之间即时传递。"
        },
        {
            "start": "1846",
            "title": "英国废除谷物法",
            "description": "英国议会取消限制进口谷物的关税法规，使廉价粮食更易进入国内并标志自由贸易政策占上风。"
        },
        {
            "start": "1848",
            "title": "加利福尼亚淘金热",
            "description": "萨特磨坊发现黄金后，数十万移民涌入加利福尼亚采矿、经商和建城，旧金山迅速扩张。"
        },
        {
            "start": "1851",
            "title": "伦敦万国博览会",
            "description": "各国在水晶宫展示机器、原料、工艺品和工业产品，向公众集中呈现十九世纪制造业与帝国贸易。"
        },
        {
            "start": "1856",
            "title": "贝塞麦炼钢法",
            "description": "亨利·贝塞麦通过向熔融生铁吹入空气去除杂质，以较低成本大批量生产钢材。"
        },
        {
            "start": "1859",
            "title": "宾夕法尼亚首口商业油井",
            "description": "埃德温·德雷克在泰特斯维尔钻井取得石油，证明可用钻探方式稳定生产照明和工业所需原油。"
        },
        {
            "start": "1863",
            "title": "伦敦地铁开通",
            "description": "大都会铁路以蒸汽列车在伦敦地下隧道运行，成为世界第一条城市地下铁路。"
        },
        {
            "start": "1869",
            "title": "苏伊士运河开通",
            "description": "连接地中海与红海的人工运河正式通航，使欧洲与亚洲船只无需绕行好望角。"
        },
        {
            "start": "1869",
            "title": "美国首条横贯大陆铁路建成",
            "description": "联合太平洋与中央太平洋铁路在犹他州接轨，把美国东部铁路网与太平洋沿岸连接起来。"
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "第二次工业革命",
            "description": "钢铁、化学、电力、石油、内燃机和大企业生产在欧美及日本快速发展，形成新的重工业体系。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "电话获专利并演示",
            "description": "亚历山大·格雷厄姆·贝尔取得电话专利，并通过电线把人的声音转化为电信号再还原。"
        },
        {
            "start": "1879",
            "title": "实用电灯系统出现",
            "description": "爱迪生等人把耐用白炽灯、发电站、配电线路和电表组合为可供城市用户使用的照明系统。"
        },
        {
            "start": "1880",
            "title": "欧洲与亚洲大规模移民加速",
            "description": "轮船和铁路运送数千万欧洲人、中国人、印度人和日本人前往美洲、大洋洲、东南亚与非洲工作或定居。"
        },
        {
            "start": "1883",
            "title": "东方快车开行",
            "description": "豪华国际列车从巴黎经中欧和巴尔干驶向君士坦丁堡，提供跨国卧铺和餐车服务。"
        },
        {
            "start": "1886",
            "title": "汽车时代开始",
            "description": "奔驰、戴姆勒等工程师制造实用汽油内燃机汽车，小型车辆开始摆脱轨道和畜力独立行驶。"
        },
        {
            "start": "1895",
            "title": "商业电影开始",
            "description": "卢米埃尔兄弟等人在售票场所向公众放映短片，电影由技术实验转变为可持续经营的大众娱乐。"
        },
        {
            "start": "1903",
            "title": "首次可控动力飞行",
            "description": "莱特兄弟在北卡罗来纳以装有发动机和三轴操纵系统的飞行器完成持续、可控的载人飞行。"
        },
        {
            "start": "1908",
            "title": "福特T型车与汽车大规模生产",
            "description": "福特以标准化零件和移动装配线大批量生产T型车，显著降低售价并扩大普通家庭购买汽车的可能。"
        },
        {
            "start": "1914",
            "title": "巴拿马运河开通",
            "description": "横穿巴拿马地峡的船闸运河投入运营，使船舶可在大西洋与太平洋之间通行而不必绕过南美洲。"
        },
        {
            "start": "1920",
            "title": "大众消费信贷与广告扩展",
            "description": "百货公司、分期付款、品牌广告和大众媒体鼓励家庭购买汽车、家电和标准化消费品。"
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "经济大萧条",
            "description": "1929年股市崩盘后银行倒闭、信贷收缩、工业减产和失业迅速蔓延到全球经济。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "美国新政开始",
            "description": "罗斯福政府以银行改革、公共工程、农业计划、就业项目和社会保障应对大萧条。"
        },
        {
            "start": "1944",
            "title": "布雷顿森林体系设计",
            "description": "四十四国代表商定以美元与黄金挂钩的固定汇率框架，并创建国际货币基金组织和世界银行。"
        },
        {
            "start": "1947",
            "title": "《关税与贸易总协定》签署",
            "description": "二十三个国家签署协定，通过多轮谈判降低关税并规定最惠国待遇等国际贸易规则。"
        },
        {
            "start": "1948",
            "title": "马歇尔计划开始",
            "description": "美国向西欧国家提供大规模赠款、贷款、粮食和设备，支持战后重建并要求受援国协调经济计划。"
        },
        {
            "start": "1950",
            "title": "集装箱运输开始改变航运",
            "description": "标准金属箱可在卡车、铁路和船舶之间直接转运，减少码头装卸时间、损耗和人工成本。"
        },
        {
            "start": "1956",
            "title": "首次商业集装箱船航行",
            "description": "马尔科姆·麦克莱恩改装的“理想X号”载着标准集装箱从纽瓦克驶往休斯敦，验证海陆联运模式。"
        },
        {
            "start": "1957",
            "title": "欧洲经济共同体成立",
            "description": "法国、西德、意大利和比荷卢三国通过《罗马条约》建立共同市场，逐步取消内部关税。"
        },
        {
            "start": "1960",
            "title": "欧佩克成立",
            "description": "伊朗、伊拉克、科威特、沙特阿拉伯和委内瑞拉成立石油输出国组织，以协调产量和对国际石油公司的政策。"
        },
        {
            "start": "1964",
            "title": "东海道新干线开通",
            "description": "日本在东京与大阪之间开行专用标准轨高速列车，以高频率和准点运营连接两大都市圈。"
        },
        {
            "start": "1969",
            "title": "ARPANET开始运行",
            "description": "美国研究机构的计算机通过分组交换网络互联，最初节点包括加州大学洛杉矶分校、斯坦福研究所等。"
        },
        {
            "start": "1971",
            "title": "美元停止兑换黄金",
            "description": "尼克松政府停止外国央行按固定价格将美元兑换黄金，布雷顿森林固定汇率体系随后瓦解。"
        },
        {
            "start": "1973",
            "title": "第一次石油危机",
            "description": "第四次中东战争期间，阿拉伯产油国对支持以色列的国家实施禁运并削减产量，国际油价数倍上涨。"
        },
        {
            "start": "1978",
            "title": "中国改革开放开始",
            "description": "中共十一届三中全会后，中国推行农村家庭联产承包、经济特区、外资引进和国有企业改革。"
        },
        {
            "start": "1981",
            "title": "IBM PC加速个人电脑市场",
            "description": "IBM推出采用英特尔处理器和微软操作系统的个人电脑，并允许兼容机厂商围绕其开放架构形成市场。"
        },
        {
            "start": "1983",
            "title": "ARPANET采用TCP/IP",
            "description": "ARPANET主机统一切换到TCP/IP协议，使不同网络能够按共同规则互联，奠定现代互联网基础。"
        },
        {
            "start": "1985",
            "title": "《申根协定》签署",
            "description": "五个欧洲共同体国家同意逐步取消共同边境检查，并加强外部边境和警务合作。"
        },
        {
            "start": "1986",
            "title": "多地区市场改革加速",
            "description": "拉丁美洲、东欧、非洲和亚洲多国实施私有化、贸易开放、价格放松和财政紧缩，减少国家直接经营。"
        },
        {
            "start": "1989",
            "title": "华盛顿共识时代开始",
            "description": "国际金融机构和美国政策圈推广财政纪律、私有化、贸易自由化和放松管制，作为债务危机国家的改革方案。"
        },
        {
            "start": "1991",
            "title": "印度经济自由化加速",
            "description": "外汇危机促使印度政府削减工业许可、降低关税、开放外资并改革金融与国有企业政策。"
        },
        {
            "start": "1993",
            "title": "欧洲单一市场启动",
            "description": "欧洲共同体取消大量成员国间技术、资本、服务和人员流动障碍，形成统一内部市场。"
        },
        {
            "start": "1994",
            "title": "北美自由贸易协定生效",
            "description": "美国、加拿大和墨西哥开始分阶段取消大部分商品关税，并制定投资、原产地和争端解决规则。"
        },
        {
            "start": "1995",
            "title": "世界贸易组织成立",
            "description": "关贸总协定成员建立常设世界贸易组织，负责商品、服务和知识产权规则及成员争端裁决。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "亚洲金融危机",
            "description": "泰铢贬值引发资本外逃和货币、银行危机，冲击泰国、印度尼西亚、韩国及其他亚洲经济体。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "欧元作为电子与记账货币启用",
            "description": "欧元区国家锁定本国货币汇率，并在银行转账、金融市场和政府账目中开始使用统一货币欧元。"
        },
        {
            "start": "2001",
            "title": "中国加入世界贸易组织",
            "description": "中国完成长期谈判后加入世贸组织，承诺降低关税、开放部分市场并遵守多边贸易规则。"
        },
        {
            "start": "2002",
            "title": "欧元纸币与硬币流通",
            "description": "十二个欧洲国家以欧元现金替换本国纸币和硬币，在数周内完成历史上规模最大的货币转换之一。"
        },
        {
            "start": "2004",
            "title": "欧盟大规模东扩",
            "description": "中东欧八国以及塞浦路斯和马耳他同时加入欧盟，欧盟成员和单一市场范围显著扩大。"
        },
        {
            "start": "2007",
            "title": "全球智能手机经济开始",
            "description": "触屏智能手机、应用商店和移动宽带催生应用开发、移动广告、叫车、支付和位置服务等新产业。"
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "全球金融危机",
            "description": "美国次贷证券损失导致银行和影子金融机构连锁失灵，雷曼兄弟破产后全球信贷和贸易急剧收缩。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "比特币网络启动",
            "description": "化名中本聪发布开源软件并生成创世区块，建立以区块链和工作量证明运行的去中心化数字货币网络。"
        },
        {
            "start": "2010",
            "title": "平台与零工经济扩展",
            "description": "在线平台以算法匹配乘客、外卖、住宿、自由职业和短期劳动者，并通过评价与动态定价管理交易。"
        },
        {
            "start": "2013",
            "title": "“一带一路”倡议提出",
            "description": "中国提出以陆上经济带和海上丝绸之路为框架，在亚洲、非洲和欧洲资助港口、铁路、能源与通信项目。"
        },
        {
            "start": "2016",
            "title": "英国公投决定脱离欧盟",
            "description": "英国选民以微弱多数支持退出欧盟，政府随后启动《里斯本条约》第50条并开始离欧谈判。"
        },
        {
            "start": "2020",
            "title": "英国正式脱欧",
            "description": "英国在2020年1月退出欧盟机构，过渡期结束后离开单一市场和关税同盟并实施新的贸易安排。"
        },
        {
            "start": "2020",
            "title": "新冠疫情期间全球供应链冲击",
            "description": "工厂停工、边境限制、港口拥堵和消费结构变化造成芯片、医疗用品、集装箱和多类商品短缺。"
        },
        {
            "start": "2021",
            "title": "全球通胀与能源价格压力加剧",
            "description": "疫情后需求反弹、供应瓶颈、宽松政策和能源冲击共同推高食品、燃料、住房与商品价格，多国央行加息。"
        },
        {
            "start": "2022",
            "title": "乌克兰遭入侵后制裁与贸易分化加深",
            "description": "美国、欧盟及盟友冻结俄罗斯资产、限制金融和技术出口，俄罗斯则调整能源出口，全球贸易路线重新分化。"
        }
    ]
};

// 灾害、疫病与环境
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2千年干旱事件",
            "description": "约公元前2200年前后，西亚、北非和南亚多地长期降水减少，河流流量下降并伴随歉收、迁徙和城市衰退。"
        },
        {
            "start": "-1599",
            "title": "锡拉火山喷发与东地中海动荡",
            "description": "爱琴海锡拉火山发生巨大喷发，火山灰和海啸重创圣托里尼及周边岛屿，并扰乱克里特和东地中海航运。"
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "安东尼瘟疫",
            "description": "罗马军队从东方带回的传染病在帝国各地反复流行，症状记载可能与天花有关，并造成大量人口死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "西普里安瘟疫",
            "description": "三世纪中期一种伴随发热、腹泻和虚弱的传染病在罗马帝国持续流行，城市、军队和农业人口均受影响。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "古代晚期气候冲击",
            "description": "六世纪中叶多次大型火山喷发造成日照减弱和多年降温，欧亚多地出现歉收、饥荒和社会压力。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "始于查士丁尼瘟疫的第一次鼠疫大流行",
            "description": "鼠疫杆菌从地中海港口传播至拜占庭帝国、欧洲和西亚，541年起多轮疫情持续两个多世纪。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "萨马拉斯火山喷发",
            "description": "印度尼西亚龙目岛萨马拉斯火山发生超大规模喷发，火山灰覆盖区域并在全球冰芯中留下硫酸盐峰值。"
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "欧洲大饥荒",
            "description": "连续寒冷多雨造成欧洲北部谷物歉收、牲畜疫病和粮价暴涨，1315年至1317年前后大量人口因饥饿和疾病死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "黑死病",
            "description": "鼠疫从黑海和地中海港口迅速扩散至欧洲、西亚和北非，十四世纪中叶造成数千万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "15世纪中叶火山与气候冲击",
            "description": "十五世纪中叶连续火山喷发向平流层释放大量硫酸盐，引发数年异常寒冷、歉收和区域性饥荒。"
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "旧大陆疾病重创美洲原住民人口",
            "description": "天花、麻疹、流感等病原体随欧洲殖民者进入美洲，在缺乏既有免疫的原住民社会造成反复大流行和人口锐减。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "华县大地震",
            "description": "陕西华县附近发生强烈地震，黄土窑洞和城镇大面积倒塌，明代记录称死亡人数达到数十万。"
        },
        {
            "start": "1600",
            "title": "怀纳普蒂纳火山喷发与全球降温",
            "description": "秘鲁怀纳普蒂纳火山猛烈喷发，掩埋附近村庄并向大气释放大量硫，随后北半球出现异常寒冷和歉收。"
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "伦敦大瘟疫",
            "description": "鼠疫在伦敦密集城区迅速传播，1665年至1666年约十万人死亡，居民逃离并实行隔离和封门措施。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "伦敦大火",
            "description": "布丁巷一家面包房起火后，强风使火焰蔓延四天，烧毁伦敦城大部分住宅、教堂和公共建筑。"
        },
        {
            "start": "1707",
            "title": "宝永地震与富士山喷发",
            "description": "日本南海海槽发生宝永地震和海啸，数周后富士山宝永火口喷发，火山灰覆盖江户及东海道地区。"
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "马赛大瘟疫",
            "description": "一艘来自东地中海的商船把鼠疫带入马赛，疫情扩散到普罗旺斯并造成约十万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "里斯本地震与海啸",
            "description": "万圣节当天葡萄牙近海强震引发海啸和大火，里斯本中心被毁，灾害波及伊比利亚、北非和大西洋沿岸。"
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "拉基火山喷发与气候扰动",
            "description": "冰岛拉基裂隙持续喷发八个月，释放有毒氟和二氧化硫，造成冰岛牲畜死亡、饥荒及欧洲空气污染。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "坦博拉火山喷发",
            "description": "印度尼西亚松巴哇岛坦博拉火山发生有记录以来最强喷发之一，摧毁周边聚落并将大量火山物质送入高空。"
        },
        {
            "start": "1816",
            "title": "无夏之年",
            "description": "坦博拉喷发后的全球降温使1816年北美和欧洲夏季霜冻、多雨和歉收，粮价上涨并引发饥荒与迁徙。"
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "全球霍乱大流行",
            "description": "源自恒河三角洲的霍乱沿商船、军队和城市水系多次传遍亚洲、欧洲、非洲和美洲，造成反复城市疫情。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "爱尔兰大饥荒",
            "description": "马铃薯疫病连续毁坏主要粮食作物，而英国统治下的救济不足和食品出口持续，约百万人死亡并有更多人移民。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "印度与中国大饥荒",
            "description": "十九世纪后期厄尔尼诺相关干旱与季风失败冲击印度和中国多地，粮食短缺、疫病和救济不足造成数百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "喀拉喀托火山喷发",
            "description": "巽他海峡喀拉喀托火山发生连续爆炸并部分坍塌，巨大海啸袭击爪哇和苏门答腊沿岸，造成三万多人死亡。"
        },
        {
            "start": "1887",
            "title": "黄河大洪水",
            "description": "黄河在河南郑州附近决口后洪水淹没广阔平原，村庄和农田被毁，死亡与流离失所人数极高。"
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "第三次鼠疫大流行",
            "description": "鼠疫从中国西南和香港港口扩散到印度及全球航运城市，十九世纪末至二十世纪初造成数百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "旧金山地震",
            "description": "圣安德烈亚斯断层发生强震，建筑倒塌和断裂煤气管引发的火灾烧毁旧金山大部，数十万人无家可归。"
        },
        {
            "start": "1911",
            "title": "江淮大水灾",
            "description": "长江和淮河流域连续暴雨与河堤决口淹没安徽、江苏等地，大量农田和城镇受灾并发生饥荒和疫病。"
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "流感大流行",
            "description": "一种H1N1流感病毒在第一次世界大战末期随军队和交通网络全球传播，感染数亿人并造成数千万死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "海原大地震",
            "description": "宁夏海原附近强震引发大范围地表断裂、山体滑坡和黄土窑洞倒塌，造成二十多万人死亡。"
        },
        {
            "start": "1923-09-01",
            "title": "关东大地震",
            "description": "相模湾强震和火灾摧毁东京、横滨及周边地区，午餐时段燃火与强风造成大规模火灾旋风和伤亡。"
        },
        {
            "start": "1931",
            "title": "中国大洪水",
            "description": "长江、淮河和黄河流域在长期旱涝交替后遭遇异常降雨和台风，广阔地区被淹并发生饥饿和传染病。"
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "包括乌克兰大饥荒在内的苏联饥荒",
            "description": "强制集体化、粮食征购、迁徙限制和歉收造成乌克兰、哈萨克斯坦、俄罗斯南部等地严重饥荒，数百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "孟加拉饥荒",
            "description": "战争时期的稻米短缺、价格暴涨、运输与征用政策以及救济失败使英属孟加拉约两百至三百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "中国大饥荒",
            "description": "大跃进时期的人民公社、过高征购、虚报产量、政策失误和自然灾害共同造成全国性粮食危机与大规模死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "瓦尔迪维亚地震与太平洋海啸",
            "description": "智利南部发生有仪器记录以来最强地震，海啸横跨太平洋袭击夏威夷、日本和菲律宾沿岸。"
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "香港流感大流行",
            "description": "一种新的H3N2流感病毒首先在香港受到关注，数月内沿航空路线传播全球并造成约百万人死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "波拉气旋",
            "description": "强热带气旋及风暴潮淹没东巴基斯坦恒河三角洲低地，造成数十万人死亡并加剧当地政治危机。"
        },
        {
            "start": "1976",
            "title": "唐山大地震",
            "description": "河北唐山市在凌晨遭受浅源强震，工业城市大面积建筑瞬间倒塌，官方统计死亡二十四万余人。"
        },
        {
            "start": "1984",
            "title": "博帕尔工业灾难",
            "description": "印度博帕尔农药厂泄漏甲基异氰酸酯毒气，夜间笼罩居民区，导致数千人立即或随后死亡并留下长期健康损害。"
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "埃塞俄比亚饥荒",
            "description": "长期干旱、内战、强制迁移和粮食运输受阻使埃塞俄比亚北部大范围缺粮，数十万人死亡并引发国际救援。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "切尔诺贝利核事故",
            "description": "乌克兰切尔诺贝利四号反应堆在安全测试中失控爆炸并起火，大量放射性物质散布到欧洲，周边居民被撤离。"
        },
        {
            "start": "1988",
            "title": "亚美尼亚地震",
            "description": "强震袭击苏联亚美尼亚北部，斯皮塔克、列宁纳坎等城市大量未经抗震设计的建筑倒塌，约两万五千人死亡。"
        },
        {
            "start": "1991",
            "title": "皮纳图博火山喷发",
            "description": "菲律宾皮纳图博火山大喷发产生火山碎屑流和厚重降灰，并把大量二氧化硫送入平流层造成短期全球降温。"
        },
        {
            "start": "1994",
            "title": "阪神大地震",
            "description": "淡路岛附近断层破裂使神户和阪神地区遭受强烈摇晃，住宅、高速公路和港口倒塌并引发大火。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "厄尔尼诺全球气候扰动",
            "description": "1997至1998年强厄尔尼诺改变太平洋海温和大气环流，造成东非洪水、东南亚干旱山火及美洲异常天气。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "古吉拉特地震",
            "description": "印度古吉拉特邦共和国日发生强震，布杰及卡奇地区城镇和村庄大量建筑倒塌，约两万人死亡。"
        },
        {
            "start": "2003",
            "title": "欧洲热浪",
            "description": "2003年夏欧洲长期高温和夜间降温不足导致中暑、心血管疾病和超额死亡，法国、意大利等国受灾最重。"
        },
        {
            "start": "2004-12-26",
            "title": "印度洋地震与海啸",
            "description": "苏门答腊西侧海底发生巨型逆冲地震，海啸袭击印度尼西亚、斯里兰卡、印度、泰国和东非，约二十三万人死亡。"
        },
        {
            "start": "2005",
            "title": "卡特里娜飓风",
            "description": "卡特里娜在美国墨西哥湾沿岸登陆，风暴潮造成新奥尔良防洪堤多处失效，城市大面积被淹并发生长期疏散。"
        },
        {
            "start": "2008",
            "title": "纳尔吉斯气旋",
            "description": "强气旋和风暴潮横扫缅甸伊洛瓦底三角洲，低洼村庄被淹，超过十三万人死亡或失踪。"
        },
        {
            "start": "2008",
            "title": "汶川大地震",
            "description": "四川龙门山断裂带发生强震，汶川、北川和都江堰等地学校、住宅和山体大量倒塌，近九万人死亡或失踪。"
        },
        {
            "start": "2010",
            "title": "海地地震",
            "description": "浅源地震袭击太子港附近，脆弱建筑、政府机构和医院大面积倒塌，数十万人死亡并造成长期人道危机。"
        },
        {
            "start": "2010",
            "title": "巴基斯坦洪灾",
            "description": "异常季风暴雨使印度河及支流从北向南泛滥，约五分之一国土受影响，两千万人需要援助。"
        },
        {
            "start": "2011-03-11",
            "title": "东日本大地震、海啸与福岛核事故",
            "description": "东北地方太平洋近海巨震引发巨大海啸，摧毁沿岸城镇并淹没福岛第一核电站，导致堆芯熔毁和大规模撤离。"
        },
        {
            "start": "2013",
            "title": "台风海燕",
            "description": "超强台风海燕登陆菲律宾中部，风暴潮摧毁塔克洛班及周边社区，数千人死亡并有数百万人受灾。"
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "西非埃博拉疫情",
            "description": "埃博拉病毒在几内亚、利比里亚和塞拉利昂传播，医护资源不足和跨境流动使疫情成为有记录以来规模最大的一次。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "尼泊尔地震",
            "description": "尼泊尔中部强震及余震摧毁加德满都谷地历史建筑和山区村庄，并在珠穆朗玛峰引发雪崩。"
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "新冠疫情全球卫生紧急状态",
            "description": "新型冠状病毒从最初发现地迅速传播全球，造成反复感染浪潮、医疗挤兑、封锁和数以百万计死亡。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "全球大规模山火与极端天气意识上升",
            "description": "澳大利亚、北美、地中海和西伯利亚等地连续出现超大山火、热浪和烟霾，数亿人直接受到空气污染和撤离影响。"
        },
        {
            "start": "2022",
            "title": "巴基斯坦洪灾与气候脆弱性危机",
            "description": "异常季风降雨和冰川融水使巴基斯坦大范围被淹，三千多万人受影响，住房、农田和基础设施严重损毁。"
        },
        {
            "start": "2023",
            "title": "土耳其—叙利亚地震",
            "description": "土耳其南部发生两次强震并波及叙利亚北部，大量钢筋混凝土建筑倒塌，寒冬中造成五万多人死亡。"
        },
        {
            "start": "2023",
            "title": "利比亚德尔纳洪灾",
            "description": "风暴丹尼尔带来的暴雨使德尔纳上游两座水坝溃决，洪流穿过市区并将整片街区冲入地中海。"
        }
    ]
};

// 法律、权利与国际制度
var tl_rights = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1749",
            "title": "汉谟拉比法典",
            "description": "巴比伦王汉谟拉比命人把判例、刑罚、财产、婚姻和债务规则刻在石碑上，公布为王国适用的成文法。"
        },
        {
            "start": "-0620",
            "title": "雅典德拉古与梭伦改革",
            "description": "德拉古将雅典法律成文化，梭伦随后废除债务奴役、调整财产等级，并重组公民参与政治的制度。"
        },
        {
            "start": "-0508",
            "title": "罗马共和制度建立",
            "description": "罗马人推翻王政后，由每年选出的执政官、元老院和公民大会共同处理国家事务，建立共和国体制。"
        },
        {
            "start": "-0449",
            "title": "罗马十二表法",
            "description": "罗马将诉讼、债务、家庭和财产等规则刻在十二块铜表上，使贵族掌握的法律程序首次公开成文。"
        },
        {
            "start": "-0220",
            "title": "秦朝行政标准化",
            "description": "秦统一六国后推行郡县制，并统一文字、度量衡、货币和车轨，以中央官僚体系治理全国。"
        },
        {
            "start": "0212",
            "title": "安东尼努斯敕令扩大罗马公民权",
            "description": "卡拉卡拉皇帝颁布敕令，把罗马公民权授予帝国境内几乎所有自由居民，统一了多数人的法律身份。"
        },
        {
            "start": "0604",
            "title": "日本《十七条宪法》",
            "description": "圣德太子相关政权颁布十七条训诫，要求官员重视和谐、服从君主、尊崇佛教并公正处理政务。"
        },
        {
            "start": "0701",
            "title": "大宝律令",
            "description": "日本朝廷参照唐制编成律令，规定中央官署、地方行政、户籍、税役和刑罚，形成律令国家的基本框架。"
        },
        {
            "start": "0800",
            "title": "加洛林皇帝加冕",
            "description": "教皇利奥三世在罗马为查理曼加冕为皇帝，使法兰克王权与西方基督教帝国观念结合。"
        },
        {
            "start": "1215-06-15",
            "title": "《大宪章》签署",
            "description": "英格兰国王约翰在贵族压力下接受《大宪章》，承诺王室征税和司法不得完全脱离既定法律与协商程序。"
        },
        {
            "start": "1222",
            "title": "匈牙利金玺诏书",
            "description": "匈牙利国王安德烈二世颁布金玺诏书，确认贵族的财产、免税和反抗违法王命等权利。"
        },
        {
            "start": "1232",
            "title": "曼德宪章传统",
            "description": "马里帝国建立时期形成的口述传统规定氏族关系、社会责任、和平原则和对奴役行为的限制，后由吟游诗人世代传承。"
        },
        {
            "start": "1265",
            "title": "西蒙·德·孟福尔议会",
            "description": "西蒙·德·孟福尔召集英格兰议会，除贵族和教士外还邀请郡骑士与城镇代表参加讨论和批准政务。"
        },
        {
            "start": "1356",
            "title": "神圣罗马帝国金玺诏书",
            "description": "皇帝查理四世颁布金玺诏书，明确七位选帝侯选举“罗马人的国王”的程序及其特权。"
        },
        {
            "start": "1454",
            "title": "洛迪和约",
            "description": "米兰与威尼斯缔结和约，佛罗伦萨、那不勒斯和教皇国随后加入，使意大利主要国家形成相互制衡的联盟体系。"
        },
        {
            "start": "1494",
            "title": "《托德西利亚斯条约》",
            "description": "西班牙与葡萄牙在教皇调停背景下划定大西洋海外势力分界线，分别主张对新发现地区的征服与贸易权。"
        },
        {
            "start": "1555",
            "title": "奥格斯堡和约",
            "description": "神圣罗马帝国诸侯与皇帝达成宗教和议，允许各领邦君主在天主教和路德宗之间选择本地官方信仰。"
        },
        {
            "start": "1598",
            "title": "南特敕令",
            "description": "法国国王亨利四世颁布敕令，在天主教国家内给予胡格诺派有限的礼拜、任职和安全保障。"
        },
        {
            "start": "1600",
            "title": "特许公司治理扩展",
            "description": "欧洲君主向东印度公司等企业授予贸易垄断、缔约、征税、驻军和管理海外据点的特许权。"
        },
        {
            "start": "1628",
            "title": "《权利请愿书》",
            "description": "英国议会向查理一世提出《权利请愿书》，反对未经议会同意征税、任意监禁、强迫驻军和和平时期军法。"
        },
        {
            "start": "1648",
            "title": "威斯特伐利亚和约",
            "description": "欧洲交战国签署一系列条约，结束三十年战争与八十年战争，并重新确认帝国内诸侯和若干国家的政治地位。"
        },
        {
            "start": "1679",
            "title": "《人身保护法》",
            "description": "英国议会通过法律，要求被拘押者及时送交法院审查，并限制政府把囚犯转移以逃避司法监督。"
        },
        {
            "start": "1689",
            "title": "英国《权利法案》",
            "description": "议会在光荣革命后确立威廉三世与玛丽二世的王位，并限制王室停法、征税和维持常备军的权力。"
        },
        {
            "start": "1701",
            "title": "《王位继承法》",
            "description": "英国议会规定新教继承顺序，并进一步要求法官任职稳定、君主受法律和议会制度约束。"
        },
        {
            "start": "1713",
            "title": "乌得勒支和约",
            "description": "欧洲列强签署多项条约结束西班牙王位继承战争，承认波旁王朝在西班牙的统治并重新分配领土与贸易权。"
        },
        {
            "start": "1776-07-04",
            "title": "《美国独立宣言》",
            "description": "北美十三殖民地代表宣布脱离英国，列举对国王的控诉，并以自然权利和人民同意论证独立。"
        },
        {
            "start": "1787-09-17",
            "title": "《美国宪法》签署",
            "description": "制宪会议代表签署宪法草案，设计由立法、行政和司法分权并实行联邦制的国家政府。"
        },
        {
            "start": "1789-08-26",
            "title": "《人权与公民权宣言》",
            "description": "法国国民制宪议会宣布人生而自由平等，主权属于国民，并规定言论、财产、法律平等和正当程序原则。"
        },
        {
            "start": "1791",
            "title": "美国《权利法案》批准",
            "description": "美国批准宪法前十项修正案，保障宗教、言论、出版、集会、武器持有和刑事程序等权利。"
        },
        {
            "start": "1792",
            "title": "《女权辩护》出版",
            "description": "玛丽·沃斯通克拉夫特出版著作，主张女性具有同等理性，应获得教育、经济自主和公民地位。"
        },
        {
            "start": "1804",
            "title": "《拿破仑法典》",
            "description": "法国公布统一民法典，系统规定财产、契约、继承、婚姻和家庭关系，并取代许多地方性旧法。"
        },
        {
            "start": "1807",
            "title": "英国废除奴隶贸易",
            "description": "英国议会禁止本国船只和臣民参与跨大西洋奴隶贸易，但帝国殖民地内的奴隶制仍继续存在。"
        },
        {
            "start": "1815",
            "title": "维也纳会议与欧洲协调",
            "description": "拿破仑战争后的列强在维也纳重划欧洲边界、恢复部分王朝，并建立定期协商以处理大陆危机。"
        },
        {
            "start": "1833",
            "title": "英国帝国废奴法",
            "description": "英国议会规定大多数殖民地逐步释放被奴役者，并向奴隶主支付补偿；所谓学徒制随后也被废止。"
        },
        {
            "start": "1840",
            "title": "《怀唐伊条约》",
            "description": "英国王室代表与多位毛利酋长签署条约，英文与毛利文对主权和治理权表述不同，成为新西兰国家关系的争议基础。"
        },
        {
            "start": "1848",
            "title": "塞内卡福尔斯大会",
            "description": "美国妇女权利活动者举行大会并通过《意见宣言》，要求女性在教育、财产、职业和选举方面享有平等权利。"
        },
        {
            "start": "1863",
            "title": "《解放宣言》",
            "description": "美国总统林肯宣布叛乱州控制区的被奴役者获得自由，并允许黑人加入联邦军队作战。"
        },
        {
            "start": "1864",
            "title": "第一部《日内瓦公约》",
            "description": "欧洲国家签署公约，要求战场上的伤兵及救护人员受到中立保护，并承认红十字标志。"
        },
        {
            "start": "1865",
            "title": "美国宪法第十三修正案废除奴隶制",
            "description": "美国批准第十三修正案，除依法惩罚犯罪外，在全国废除奴隶制和强迫劳役。"
        },
        {
            "start": "1868",
            "title": "美国宪法第十四修正案",
            "description": "修正案确认在美国出生或归化者的公民身份，并禁止各州剥夺正当程序或法律平等保护。"
        },
        {
            "start": "1868",
            "title": "明治日本《五条誓文》",
            "description": "明治天皇公布五条誓文，提出广开会议、各阶层共同治理、破除旧习并向世界学习知识等改革方针。"
        },
        {
            "start": "1870",
            "title": "美国宪法第十五修正案",
            "description": "美国批准修正案，规定联邦和各州不得以种族、肤色或曾被奴役为由剥夺男性公民的投票权。"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "柏林会议规范欧洲瓜分非洲",
            "description": "欧洲列强在没有非洲代表参与的情况下制定占领、通航和贸易规则，为随后对非洲领土的争夺提供程序框架。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "《大日本帝国宪法》颁布",
            "description": "明治政府颁布宪法，以天皇主权为基础设立帝国议会、内阁和法院，并规定臣民权利受法律限制。"
        },
        {
            "start": "1899",
            "title": "第一次海牙和平会议",
            "description": "二十多个国家在海牙讨论裁军和战争规则，设立常设仲裁法院并签署陆战法规等公约。"
        },
        {
            "start": "1902",
            "title": "澳大利亚赋予多数女性联邦选举权",
            "description": "澳大利亚联邦法律给予多数白人女性投票和竞选联邦议员的权利，但原住民等群体仍被排除。"
        },
        {
            "start": "1905",
            "title": "挪威通过协商解盟独立",
            "description": "挪威议会宣布与瑞典的联合关系结束，经公投和谈判后两国和平解盟，挪威建立独立君主国。"
        },
        {
            "start": "1907",
            "title": "第二次海牙和平会议",
            "description": "四十多个国家修订战争法，制定关于中立、海战、占领和开战程序的多项公约，但裁军议题未获重大突破。"
        },
        {
            "start": "1911",
            "title": "首次纪念国际妇女节",
            "description": "欧洲多国社会主义妇女组织举行集会，要求女性选举权、劳动权和反对性别歧视，形成国际妇女节传统。"
        },
        {
            "start": "1918",
            "title": "英国女性在年龄限制下获得议会选举权",
            "description": "英国通过《人民代表法》，允许年满三十岁且符合财产条件的女性投票，同时扩大男性普选范围。"
        },
        {
            "start": "1919",
            "title": "《凡尔赛条约》",
            "description": "协约国与德国签署和平条约，重新划定边界、限制德国军备、规定赔款，并把国际联盟盟约纳入条约。"
        },
        {
            "start": "1919",
            "title": "国际劳工组织成立",
            "description": "《凡尔赛条约》设立国际劳工组织，由政府、雇主和工人三方共同制定工作时间、劳动保护和结社等国际标准。"
        },
        {
            "start": "1920",
            "title": "国际联盟成立",
            "description": "国际联盟依据《凡尔赛条约》开始运作，成员国通过大会、理事会和秘书处处理争端、托管和国际合作。"
        },
        {
            "start": "1920",
            "title": "美国宪法第十九修正案确立女性选举权",
            "description": "美国批准修正案，禁止联邦和各州以性别为由剥夺公民投票权，使女性在法律上取得全国选举权。"
        },
        {
            "start": "1928",
            "title": "《非战公约》",
            "description": "多个国家签署公约，宣布放弃以战争作为国家政策工具，并承诺以和平方式解决国际争端。"
        },
        {
            "start": "1935",
            "title": "纽伦堡法颁布",
            "description": "纳粹德国以法律剥夺犹太人的完整公民身份，并禁止所谓“德国血统者”与犹太人通婚或发生关系。"
        },
        {
            "start": "1941",
            "title": "《大西洋宪章》",
            "description": "罗斯福与丘吉尔发表共同声明，提出不扩张领土、民族自决、贸易开放、集体安全和战后和平等原则。"
        },
        {
            "start": "1944",
            "title": "布雷顿森林机构规划",
            "description": "四十四个盟国代表商定战后货币与金融制度，规划国际货币基金组织和国际复兴开发银行。"
        },
        {
            "start": "1945-06-26",
            "title": "《联合国宪章》签署",
            "description": "五十国代表在旧金山签署《联合国宪章》，规定大会、安全理事会、国际法院等机构及集体安全原则。"
        },
        {
            "start": "1945-10-24",
            "title": "联合国正式成立",
            "description": "《联合国宪章》在主要签署国批准后生效，联合国正式取代国际联盟成为全球性政府间组织。"
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "纽伦堡审判",
            "description": "盟国国际军事法庭审判纳粹德国主要领导人，以战争罪、危害和平罪和危害人类罪追究个人刑事责任。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "远东国际军事法庭审判",
            "description": "盟国在东京审判日本战时主要领导人，指控其策划侵略战争以及实施战争罪和危害人类罪。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "《关税与贸易总协定》",
            "description": "二十三国签署协定，通过关税减让、最惠国待遇和多边谈判建立战后国际贸易规则。"
        },
        {
            "start": "1948-12-09",
            "title": "《防止及惩治灭绝种族罪公约》通过",
            "description": "联合国大会通过公约，把蓄意毁灭民族、族裔、种族或宗教群体的行为定义为国际罪行，并要求缔约国防止和惩治。"
        },
        {
            "start": "1948-12-10",
            "title": "《世界人权宣言》通过",
            "description": "联合国大会通过三十条宣言，列出生命、自由、平等、表达、教育、工作和社会保障等所有人应享有的基本权利。"
        },
        {
            "start": "1949",
            "title": "《日内瓦公约》修订扩展",
            "description": "各国签署四项公约，分别保护陆海战伤病员、战俘和战时平民，并规定冲突各方的人道义务。"
        },
        {
            "start": "1949",
            "title": "北大西洋公约组织成立",
            "description": "美国、加拿大和西欧国家签署北大西洋公约，约定对一成员的武装攻击视为对全体的攻击，并建立军事联盟。"
        },
        {
            "start": "1950",
            "title": "《欧洲人权公约》签署",
            "description": "欧洲委员会成员国签署公约，保障生命、自由、公正审判、隐私和表达等权利，并建立跨国监督机制。"
        },
        {
            "start": "1951",
            "title": "《难民公约》通过",
            "description": "联合国主持通过公约，界定难民身份、列明缔约国保护义务，并确立不得把难民遣返至受迫害地的原则。"
        },
        {
            "start": "1955",
            "title": "华沙条约组织成立",
            "description": "苏联与东欧社会主义国家签署共同防御条约，建立统一军事指挥体系以对抗北约。"
        },
        {
            "start": "1957",
            "title": "《罗马条约》",
            "description": "西欧六国签署条约，建立欧洲经济共同体和欧洲原子能共同体，逐步取消内部贸易壁垒并建设共同市场。"
        },
        {
            "start": "1959",
            "title": "欧洲人权法院成立",
            "description": "欧洲人权法院在斯特拉斯堡成立，负责审理个人或国家关于成员国违反《欧洲人权公约》的申诉。"
        },
        {
            "start": "1960-12-14",
            "title": "《给予殖民地国家和人民独立宣言》",
            "description": "联合国大会宣布殖民统治应迅速结束，所有人民享有自决权，并要求把权力移交给殖民地人民。"
        },
        {
            "start": "1963",
            "title": "非洲统一组织成立",
            "description": "三十二个非洲独立国家在亚的斯亚贝巴成立组织，协调反殖民行动、维护既有边界并促进国家合作。"
        },
        {
            "start": "1964",
            "title": "美国《民权法》",
            "description": "美国法律禁止公共场所和就业中的种族、肤色、宗教、性别或国籍歧视，并授权联邦政府推动学校废除隔离。"
        },
        {
            "start": "1965",
            "title": "美国《投票权法》",
            "description": "美国禁止识字测试等压制少数族裔投票的措施，并授权联邦监督有长期歧视记录地区的选举制度。"
        },
        {
            "start": "1965",
            "title": "《消除一切形式种族歧视国际公约》",
            "description": "联合国大会通过公约，要求缔约国禁止种族歧视、废除歧视性法律，并向所有人提供平等法律保护。"
        },
        {
            "start": "1966",
            "title": "国际人权两公约通过",
            "description": "联合国大会通过《公民权利和政治权利国际公约》与《经济、社会及文化权利国际公约》，把宣言性权利转化为条约义务。"
        },
        {
            "start": "1967",
            "title": "东南亚国家联盟成立",
            "description": "印度尼西亚、马来西亚、菲律宾、新加坡和泰国签署《曼谷宣言》，成立东盟以推动地区合作与稳定。"
        },
        {
            "start": "1968",
            "title": "《不扩散核武器条约》开放签署",
            "description": "条约把缔约国区分为核武器国与无核武器国，要求防止核武扩散、接受核查并推进和平利用核能和核裁军。"
        },
        {
            "start": "1972",
            "title": "联合国人类环境会议",
            "description": "各国在斯德哥尔摩首次举行大型全球环境会议，通过原则宣言和行动计划，并促成联合国环境规划署成立。"
        },
        {
            "start": "1975",
            "title": "《赫尔辛基最后文件》",
            "description": "欧洲、美国和加拿大签署文件，确认边界不可侵犯、主权平等、人权承诺以及东西方经济和人员交流原则。"
        },
        {
            "start": "1979",
            "title": "《消除对妇女一切形式歧视公约》",
            "description": "联合国大会通过公约，要求各国在政治、教育、就业、医疗、婚姻和家庭生活中消除对女性的歧视。"
        },
        {
            "start": "1981",
            "title": "《非洲人权和民族权宪章》通过",
            "description": "非洲统一组织通过地区性人权宪章，同时规定个人权利、人民集体权利以及个人对家庭和社会的义务。"
        },
        {
            "start": "1982",
            "title": "《联合国海洋法公约》开放签署",
            "description": "公约系统规定领海、专属经济区、大陆架、公海航行、海洋资源和争端解决制度，被称为“海洋宪法”。"
        },
        {
            "start": "1987",
            "title": "《蒙特利尔议定书》通过",
            "description": "各国同意分阶段淘汰破坏臭氧层的氯氟烃等化学物质，并通过定期修正扩大受控物质和减排要求。"
        },
        {
            "start": "1989",
            "title": "《儿童权利公约》通过",
            "description": "联合国大会通过公约，确认儿童享有生存、发展、保护和参与权，并要求以儿童最佳利益处理相关事务。"
        },
        {
            "start": "1990",
            "title": "美国《残疾人法案》签署",
            "description": "美国禁止就业、公共服务、公共设施和通信领域基于残疾的歧视，并要求提供合理便利和无障碍条件。"
        },
        {
            "start": "1991",
            "title": "《第一阶段削减战略武器条约》签署",
            "description": "美国与苏联签署条约，规定核弹头和洲际运载系统的削减上限，并建立申报、现场核查和监测制度。"
        },
        {
            "start": "1992",
            "title": "里约地球峰会",
            "description": "一百多个国家领导人在里约讨论环境与发展，通过《里约宣言》和《21世纪议程》，并开放气候与生物多样性公约签署。"
        },
        {
            "start": "1992",
            "title": "《马斯特里赫特条约》签署",
            "description": "欧洲共同体成员签署条约，决定建立欧洲联盟、推进经济货币联盟，并扩大外交、司法和公民权合作。"
        },
        {
            "start": "1993-11-01",
            "title": "欧洲联盟正式成立",
            "description": "《马斯特里赫特条约》生效，欧洲共同体被纳入欧洲联盟框架，并正式引入欧盟公民身份和新的政策支柱。"
        },
        {
            "start": "1994",
            "title": "南非结束种族隔离并举行民主选举",
            "description": "南非举行首次不分种族的全国选举，非洲人国民大会获胜，纳尔逊·曼德拉随后出任总统。"
        },
        {
            "start": "1995-01-01",
            "title": "世界贸易组织成立",
            "description": "《马拉喀什协定》生效，世界贸易组织取代关贸总协定体制，管理货物、服务和知识产权贸易规则及争端解决。"
        },
        {
            "start": "1997",
            "title": "《京都议定书》通过",
            "description": "《联合国气候变化框架公约》缔约方通过议定书，为多数发达国家设定具有法律约束力的温室气体减排目标。"
        },
        {
            "start": "1998",
            "title": "《国际刑事法院罗马规约》通过",
            "description": "各国在罗马通过规约，决定设立常设国际刑事法院，审判灭绝种族罪、危害人类罪、战争罪和侵略罪。"
        },
        {
            "start": "2000",
            "title": "千年发展目标通过",
            "description": "联合国成员依据《千年宣言》形成八项目标，要求在2015年前减少极端贫困、改善教育卫生并加强全球合作。"
        },
        {
            "start": "2002-07-01",
            "title": "国际刑事法院开始行使管辖权",
            "description": "《罗马规约》生效，国际刑事法院得以对生效后发生且符合管辖条件的核心国际罪行展开调查和审判。"
        },
        {
            "start": "2005",
            "title": "联合国世界首脑会议认可“保护责任”",
            "description": "各国领导人承认国家有责任保护本国人口免受灭绝种族、战争罪、族裔清洗和危害人类罪，国际社会在国家失败时应采取集体行动。"
        },
        {
            "start": "2006",
            "title": "《残疾人权利公约》通过",
            "description": "联合国大会通过公约，要求从慈善和医疗模式转向权利模式，保障残疾人的平等、无障碍、自主生活和社会参与。"
        },
        {
            "start": "2007",
            "title": "《联合国土著人民权利宣言》通过",
            "description": "联合国大会通过宣言，确认原住民族的自决、土地资源、文化语言和自由、事先且知情同意等权利。"
        },
        {
            "start": "2015",
            "title": "可持续发展目标通过",
            "description": "联合国成员通过2030年议程，设定十七项目标，涵盖贫困、健康、教育、平等、气候、和平与可持续经济。"
        },
        {
            "start": "2015-12-12",
            "title": "《巴黎协定》通过",
            "description": "各国在气候大会上同意提交并定期强化自主减排目标，把全球升温控制在远低于2摄氏度并努力限制在1.5摄氏度。"
        },
        {
            "start": "2016",
            "title": "《巴黎协定》生效",
            "description": "达到批准门槛后《巴黎协定》正式生效，缔约方开始依照共同透明度、盘点和国家自主贡献机制履行气候承诺。"
        },
        {
            "start": "2018",
            "title": "《全球移民契约》通过",
            "description": "联合国成员在马拉喀什通过非约束性合作框架，提出改善合法迁移、安全边境、劳工保护、信息共享和返乡安排等目标。"
        },
        {
            "start": "2021",
            "title": "《禁止核武器条约》生效",
            "description": "条约达到批准门槛后生效，缔约国不得开发、试验、生产、拥有、使用或威胁使用核武器，并承担援助受害者等义务。"
        }
    ]
};

// 当代世界
var tl_contemporary = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1945-08-06",
            "title": "广岛原子弹爆炸",
            "description": "美国B-29轰炸机向广岛投下铀弹“小男孩”，爆炸和随后的火灾、辐射在城市中造成大规模死亡与破坏。"
        },
        {
            "start": "1945-08-09",
            "title": "长崎原子弹爆炸",
            "description": "美国B-29轰炸机向长崎投下钚弹“胖子”，爆炸摧毁浦上地区并造成大量即时和后续辐射伤亡。"
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "柏林封锁与空运",
            "description": "苏联切断西方占领区通往西柏林的陆路和水路运输，美英等国以持续空运向城市输送食品、燃料和物资，直至封锁解除。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "灾难日与巴勒斯坦人大规模流离失所",
            "description": "1948年战争期间，数十万巴勒斯坦人逃离或被驱逐出原居地，大量村庄被废弃或摧毁，难民问题由此形成。"
        },
        {
            "start": "1953",
            "title": "斯大林去世与苏联领导层过渡",
            "description": "斯大林去世后，马林科夫、贝利亚、赫鲁晓夫等人展开权力重组，集体领导短暂形成，赫鲁晓夫随后逐步取得主导地位。"
        },
        {
            "start": "1954",
            "title": "布朗诉教育委员会案",
            "description": "美国最高法院一致裁定公立学校的种族隔离违反宪法平等保护条款，推翻“隔离但平等”在教育领域的适用。"
        },
        {
            "start": "1955",
            "title": "蒙哥马利公交抵制运动",
            "description": "罗莎·帕克斯被捕后，蒙哥马利黑人居民持续抵制实行种族隔离的公交系统，最终促成法院废除当地公交隔离。"
        },
        {
            "start": "1956",
            "title": "赫鲁晓夫秘密报告与去斯大林化",
            "description": "赫鲁晓夫在苏共二十大秘密会议上批判斯大林个人崇拜、清洗和滥权，苏联随后释放部分囚犯并调整政治文化。"
        },
        {
            "start": "1957",
            "title": "斯普特尼克开启太空时代",
            "description": "苏联发射世界首颗人造地球卫星“斯普特尼克1号”，其无线电信号可被全球接收，美苏太空竞赛随之加速。"
        },
        {
            "start": "1959",
            "title": "达赖喇嘛离开西藏",
            "description": "拉萨起义和中国军队镇压期间，第十四世达赖喇嘛越过喜马拉雅山进入印度，并在那里建立流亡行政机构。"
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "柏林墙",
            "description": "东德封锁东西柏林边界并修建围墙、铁丝网和警戒设施，以阻止居民经西柏林离开东德；该设施持续至1989年开放。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "不结盟运动成立",
            "description": "亚非及其他地区国家领导人在贝尔格莱德召开首届峰会，主张不正式加入美苏军事集团，并协调反殖民与发展议题。"
        },
        {
            "start": "1963-08-28",
            "title": "华盛顿大游行",
            "description": "约二十五万人在华盛顿举行“争取就业与自由”游行，要求民权立法和经济平等，马丁·路德·金发表“我有一个梦想”演说。"
        },
        {
            "start": "1963-11-22",
            "title": "约翰·F·肯尼迪遇刺",
            "description": "美国总统肯尼迪在达拉斯乘敞篷车参加车队活动时遭枪击身亡，副总统林登·约翰逊当日宣誓继任。"
        },
        {
            "start": "1964",
            "title": "中国首次核试验",
            "description": "中国在新疆罗布泊成功引爆首枚原子弹“596”，成为世界第五个拥有并试验核武器的国家。"
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "中国文化大革命",
            "description": "毛泽东发动政治运动，红卫兵和各派组织批判“资产阶级”和传统文化，大批干部、知识分子和普通人遭受迫害，教育与社会秩序长期中断。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "人类首次登月",
            "description": "阿波罗11号登月舱在月球静海着陆，尼尔·阿姆斯特朗和巴兹·奥尔德林登上月面，迈克尔·柯林斯留在月球轨道。"
        },
        {
            "start": "1971",
            "title": "中华人民共和国恢复联合国席位",
            "description": "联合国大会通过第2758号决议，承认中华人民共和国政府代表中国，并将中华民国代表逐出联合国席位。"
        },
        {
            "start": "1972",
            "title": "中美关系缓和",
            "description": "尼克松访问北京，与毛泽东、周恩来会谈并发表《上海公报》，双方承认分歧同时开始建立正式往来。"
        },
        {
            "start": "1973",
            "title": "智利军事政变",
            "description": "奥古斯托·皮诺切特领导的军方推翻萨尔瓦多·阿连德政府，总统府遭轰炸，阿连德身亡，军政府随后掌权。"
        },
        {
            "start": "1974",
            "title": "葡萄牙康乃馨革命",
            "description": "葡萄牙中下级军官发动几乎无血的政变，推翻“新国家”独裁体制，民众以康乃馨支持军队，民主化和殖民地独立进程由此展开。"
        },
        {
            "start": "1975",
            "title": "西贡陷落",
            "description": "北越军队进入西贡，南越政府投降，美国人员及部分越南人紧急撤离，越南战争的主要军事阶段结束。"
        },
        {
            "start": "1976",
            "title": "毛泽东去世与文革时代结束",
            "description": "毛泽东去世后不久，“四人帮”被捕，持续十年的文化大革命政治动员终止，中国领导层进入重新调整时期。"
        },
        {
            "start": "1978",
            "title": "戴维营协议",
            "description": "埃及总统萨达特与以色列总理贝京在美国总统卡特斡旋下谈判，签署埃以和平框架及巴勒斯坦自治相关框架。"
        },
        {
            "start": "1979",
            "title": "埃以和平条约",
            "description": "埃及与以色列正式结束战争状态，以色列同意分阶段撤出西奈半岛，双方建立外交关系并安排安全区。"
        },
        {
            "start": "1979",
            "title": "苏联入侵阿富汗",
            "description": "苏联军队进入阿富汗，推翻并处死阿明，扶植卡尔迈勒政府，与受到外部援助的圣战者展开长期战争。"
        },
        {
            "start": "1980",
            "title": "波兰团结工会成立",
            "description": "格但斯克造船厂罢工迫使政府签署协议，工人成立独立自治工会“团结工会”，成为社会主义阵营首个大规模合法独立工会。"
        },
        {
            "start": "1985",
            "title": "戈尔巴乔夫开始改革与公开性",
            "description": "戈尔巴乔夫出任苏共总书记后推动经济重组、有限市场改革和信息公开，并尝试减少党对社会和外交政策的僵化控制。"
        },
        {
            "start": "1986",
            "title": "菲律宾人民力量革命",
            "description": "大规模非暴力示威与军方倒戈迫使费迪南德·马科斯离境，科拉松·阿基诺就任总统，长期威权统治结束。"
        },
        {
            "start": "1987",
            "title": "第一次巴勒斯坦大起义开始",
            "description": "加沙和约旦河西岸的巴勒斯坦人发动罢工、示威、抵制和石块抗议，反对以色列占领，冲突随后持续多年。"
        },
        {
            "start": "1988",
            "title": "两伊停火",
            "description": "伊朗和伊拉克接受联合国第598号决议并停止主要战斗，持续八年的战争在没有明确胜者的情况下结束。"
        },
        {
            "start": "1989-11-09",
            "title": "柏林墙倒塌",
            "description": "东德官员误传新的出境规定立即生效，大批民众涌向检查站，边防人员开放关卡，市民随后拆除墙体。"
        },
        {
            "start": "1990",
            "title": "纳尔逊·曼德拉获释",
            "description": "南非政府在曼德拉被囚禁二十七年后将其释放，并解除部分政治组织禁令，种族隔离制度的谈判终结进程随即展开。"
        },
        {
            "start": "1991",
            "title": "沙漠风暴行动",
            "description": "美国领导的多国部队先以大规模空袭削弱伊拉克军队，随后发动地面进攻，把占领科威特的伊军逐出。"
        },
        {
            "start": "1991",
            "title": "华沙条约组织解散",
            "description": "东欧社会主义政权相继垮台后，成员国先终止统一军事机构，随后在布拉格正式宣布华沙条约组织解散。"
        },
        {
            "start": "1993",
            "title": "奥斯陆协议",
            "description": "以色列与巴勒斯坦解放组织相互承认，并同意在加沙和约旦河西岸部分地区建立过渡性的巴勒斯坦自治机构，最终地位问题留待后续谈判。"
        },
        {
            "start": "1994",
            "title": "卢旺达种族灭绝与国际社会失职",
            "description": "卢旺达总统座机遇袭后，极端派组织在约百日内系统屠杀图西族及温和胡图族，联合国和主要国家未能及时制止。"
        },
        {
            "start": "1995",
            "title": "代顿协议结束波黑战争",
            "description": "波黑、克罗地亚和塞尔维亚领导人在美国谈判达成协议，维持波黑统一国家，同时划分为两个主要政治实体并部署国际维和力量。"
        },
        {
            "start": "1997",
            "title": "亚洲金融危机蔓延",
            "description": "泰国放弃固定汇率后，货币贬值、资本外逃和银行企业债务危机迅速扩散至印度尼西亚、韩国等亚洲经济体。"
        },
        {
            "start": "1998",
            "title": "贝尔法斯特协议",
            "description": "英国、爱尔兰及北爱尔兰主要政党达成协议，建立权力分享议会、南北合作机构和武装解除安排，以结束长期冲突。"
        },
        {
            "start": "1999",
            "title": "北约干预科索沃",
            "description": "南联盟部队与科索沃阿尔巴尼亚武装冲突升级后，北约在未经安理会明确授权下发动空袭，南联盟最终撤军并接受国际管理。"
        },
        {
            "start": "2000",
            "title": "第二次巴勒斯坦大起义开始",
            "description": "沙龙访问圣殿山／尊贵禁地后抗议与冲突迅速扩大，巴勒斯坦武装袭击和以色列军事行动持续数年并造成大量伤亡。"
        },
        {
            "start": "2001",
            "title": "九一一后北约启动第五条",
            "description": "九一一袭击后，北约首次认定对一个成员国的外部袭击属于对全体的攻击，并为美国提供预警机、海上巡逻等支援。"
        },
        {
            "start": "2003",
            "title": "全球反伊拉克战争抗议",
            "description": "在美国主导入侵伊拉克前，全球数百个城市举行大规模示威，参与者反对未经更广泛国际授权发动战争。"
        },
        {
            "start": "2004",
            "title": "印度洋海啸引发全球人道响应",
            "description": "苏门答腊附近强震引发跨印度洋海啸，印度尼西亚、斯里兰卡、印度和泰国等地遭受毁灭性破坏，各国展开大规模搜救和援助。"
        },
        {
            "start": "2005",
            "title": "伦敦爆炸案",
            "description": "四名自杀袭击者在伦敦三列地铁和一辆公交车上引爆炸弹，造成五十二名乘客死亡、数百人受伤。"
        },
        {
            "start": "2008",
            "title": "奥巴马当选美国首位非裔总统",
            "description": "民主党候选人巴拉克·奥巴马击败约翰·麦凯恩，在金融危机背景下赢得总统选举，成为美国首位非裔总统。"
        },
        {
            "start": "2008",
            "title": "全球金融体系陷入严重危机",
            "description": "美国住房泡沫破裂和次贷损失导致雷曼兄弟倒闭、信贷市场冻结，多国政府随后救助银行并采取大规模货币财政措施。"
        },
        {
            "start": "2010",
            "title": "海地地震引发大规模国际救援",
            "description": "太子港附近发生浅源强震，大量建筑和政府设施倒塌，数十万人伤亡或无家可归，国际救援力量大规模进入海地。"
        },
        {
            "start": "2011",
            "title": "福岛核事故重塑能源政策讨论",
            "description": "东日本大地震和海啸使福岛第一核电站失去电源和冷却，多个反应堆发生堆芯熔毁及放射性物质释放，大范围居民被疏散。"
        },
        {
            "start": "2011",
            "title": "奥萨马·本·拉登被击毙",
            "description": "美国海军特种部队突袭巴基斯坦阿伯塔巴德一处住宅，击毙基地组织领导人奥萨马·本·拉登，并带走文件与电子设备。"
        },
        {
            "start": "2013",
            "title": "爱德华·斯诺登披露监控项目",
            "description": "美国国家安全局承包商斯诺登向记者提供机密文件，揭露大规模电话元数据收集和互联网通信监控项目。"
        },
        {
            "start": "2014",
            "title": "西非埃博拉紧急状态",
            "description": "埃博拉疫情在几内亚、利比里亚和塞拉利昂大规模传播，医疗系统不堪重负，世界卫生组织宣布构成国际关注的突发公共卫生事件。"
        },
        {
            "start": "2015",
            "title": "欧洲难民危机达到高峰",
            "description": "叙利亚等地战争迫使大量难民和移民经地中海及巴尔干路线进入欧洲，欧盟各国围绕接收、边境和庇护政策发生激烈分歧。"
        },
        {
            "start": "2015",
            "title": "伊朗核协议",
            "description": "伊朗与六国及欧盟达成《联合全面行动计划》，限制铀浓缩、离心机和核材料库存，接受核查，以换取解除核相关制裁。"
        },
        {
            "start": "2016",
            "title": "英国脱欧公投",
            "description": "英国选民以约52%对48%决定离开欧洲联盟，首相卡梅伦宣布辞职，政府随后启动脱欧谈判。"
        },
        {
            "start": "2016",
            "title": "土耳其未遂政变",
            "description": "土耳其军方部分人员占据桥梁、机场和媒体设施并试图推翻政府，总统埃尔多安号召民众抵抗，政变数小时后失败。"
        },
        {
            "start": "2018",
            "title": "中美贸易冲突升级",
            "description": "美国以不公平贸易和技术政策为由对中国商品加征关税，中国采取报复性关税，双方随后多轮扩大措施并展开谈判。"
        },
        {
            "start": "2019",
            "title": "香港反修例抗议运动",
            "description": "香港政府提出修订逃犯条例后，大规模游行要求撤回法案，抗议随后扩大到警察问责、普选等诉求，并多次发生激烈冲突。"
        },
        {
            "start": "2020",
            "title": "世卫组织宣布新冠疫情构成全球大流行",
            "description": "新型冠状病毒在多国持续社区传播后，世界卫生组织宣布其构成全球大流行，各国随后扩大旅行限制、检测、隔离和公共卫生措施。"
        },
        {
            "start": "2020",
            "title": "全球“黑人的命也是命”抗议",
            "description": "乔治·弗洛伊德在明尼阿波利斯被警察拘捕时死亡的视频传播后，美国及全球多地爆发反对警察暴力和结构性种族主义的示威。"
        },
        {
            "start": "2020",
            "title": "亚伯拉罕协议",
            "description": "在美国斡旋下，以色列与阿联酋、巴林签署关系正常化协议，随后摩洛哥和苏丹也宣布推进与以色列关系正常化。"
        },
        {
            "start": "2021",
            "title": "美国国会山袭击事件",
            "description": "特朗普支持者在国会认证总统选举结果时冲破警戒并闯入议事堂，迫使议员撤离，认证程序中断数小时后恢复。"
        },
        {
            "start": "2021",
            "title": "塔利班重新掌权阿富汗",
            "description": "美军撤离期间，塔利班迅速攻占各省首府并进入喀布尔，总统加尼出国，原政府垮台，西方国家紧急撤侨。"
        },
        {
            "start": "2021",
            "title": "AUKUS安全伙伴关系宣布",
            "description": "澳大利亚、英国和美国宣布安全伙伴关系，核心项目是帮助澳大利亚获得核动力攻击潜艇，并扩大网络、人工智能和水下技术合作。"
        },
        {
            "start": "2022",
            "title": "俄罗斯入侵后全球流离失所及粮食能源冲击",
            "description": "俄罗斯从多方向大规模入侵乌克兰，乌克兰实行全国动员并获得外部军事支持，数百万人逃离家园，黑海粮运和欧洲能源供应受到冲击。"
        },
        {
            "start": "2022",
            "title": "伊丽莎白二世去世",
            "description": "英国女王伊丽莎白二世在巴尔莫勒尔城堡去世，结束七十年统治，长子查尔斯继位成为国王查尔斯三世。"
        },
        {
            "start": "2023",
            "title": "芬兰加入北约",
            "description": "芬兰在俄罗斯全面入侵乌克兰后结束长期军事不结盟政策，完成批准程序并成为北约第三十一个成员国。"
        },
        {
            "start": "2023",
            "title": "以色列—哈马斯战争与地区人道危机",
            "description": "哈马斯等武装组织从加沙袭击以色列南部、杀害并绑架大量人员；以色列随后围困并大规模轰炸和进攻加沙，造成严重平民伤亡与流离失所。"
        },
        {
            "start": "2024",
            "title": "瑞典加入北约",
            "description": "瑞典在俄罗斯入侵乌克兰后放弃长期军事不结盟，待所有成员国批准后提交加入文件，成为北约第三十二个成员国。"
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
