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
            "description": "SIMILE 无法解析天文纪年 -9999 以前的日期，因此将智人出现、全球迁徙、象征文化与狩猎采集生活压缩在此标记中。"
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "新石器时代转型",
            "description": "人群开始依靠农业和畜牧获得食物，固定村落、人口增长与社会分工随之扩大。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "青铜时代",
            "description": "青铜冶炼支持了更复杂的武器、工具、贸易网络和宫殿国家。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "最早城市与领土国家",
            "description": "城市、税收、文字和常备权力机构出现，统治范围从聚落扩大到区域国家。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "古典文明与轴心时代",
            "description": "欧亚多地形成了持久的帝国、宗教、哲学和法律传统。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "后古典时代区域秩序",
            "description": "罗马分裂后，拜占庭、伊斯兰帝国、南亚与东亚王朝建立新的区域秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "相互连接的中世纪世界",
            "description": "商路、宗教网络和帝国扩张加强了欧亚大陆、非洲与印度洋之间的联系。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "早期现代全球扩张",
            "description": "远洋航行、殖民扩张和跨洋贸易把各大洲纳入持续互动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "革命与工业化时代",
            "description": "政治革命与机器生产重组了国家制度、劳动方式和城市生活。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "帝国主义与全球移民时代",
            "description": "工业强国扩大殖民统治，铁路、轮船和劳工迁移加快全球人口流动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "世界大战与大众政治",
            "description": "两次世界大战、革命和民族主义动员把战争与国家治理推向社会整体。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "冷战、非殖民化与发展",
            "description": "美苏竞争与殖民帝国瓦解同时展开，新国家把工业化和发展政策置于核心。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "冷战后转型期",
            "description": "苏联解体后，市场改革、地区冲突和美国主导的国际秩序迅速展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "全球化、恐怖主义与数字社会",
            "description": "全球供应链、互联网和移动通信扩张，同时反恐战争改变了安全政策。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "疫情、地缘政治分化与AI加速",
            "description": "新冠疫情冲击公共卫生与供应链，战争、技术竞争和生成式AI进一步改变全球秩序。",
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
            "description": "西南亚农业起源推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-9599",
            "title": "耶利哥永久定居",
            "description": "耶利哥永久定居使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-8999",
            "title": "绵羊与山羊驯化",
            "description": "绵羊与山羊驯化使人群能够持续利用动物获得肉、奶、毛皮和运输能力。"
        },
        {
            "start": "-8499",
            "title": "恰约努与新月沃地早期农业",
            "description": "恰约努与新月沃地早期农业推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-7499",
            "title": "恰塔霍裕克大型聚落",
            "description": "恰塔霍裕克大型聚落使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-6999",
            "title": "长江流域稻作扩展",
            "description": "长江流域稻作扩展推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-6999",
            "title": "梅尔伽赫农业聚落",
            "description": "梅尔伽赫农业聚落推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-6499",
            "title": "陶器与村落网络扩展",
            "description": "陶器与村落网络扩展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-5999",
            "title": "美索不达米亚灌溉聚落",
            "description": "美索不达米亚灌溉聚落使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-5499",
            "title": "农业向欧洲扩展",
            "description": "农业向欧洲扩展推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-4999",
            "title": "欧亚大陆早期冶金",
            "description": "欧亚大陆早期冶金扩大了金属工具和武器的使用，并推动专业手工业形成。"
        },
        {
            "start": "-4499",
            "title": "草原牧业扩展",
            "description": "草原牧业扩展使人群能够持续利用动物获得肉、奶、毛皮和运输能力。"
        },
        {
            "start": "-3999",
            "title": "犁耕与大型村落",
            "description": "犁耕与大型村落推动了稳定粮食生产，固定聚落和人口规模随之扩大。"
        },
        {
            "start": "-3799",
            "title": "乌鲁克城市化",
            "description": "乌鲁克城市化使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-3499",
            "title": "车轮与车辆运输",
            "description": "车轮与车辆运输提高了陆路运输能力，使货物和人员能够跨越更远距离。"
        },
        {
            "start": "-3399",
            "title": "原始楔形文字记账",
            "description": "原始楔形文字记账把粮食、劳役和交易记录转化为可保存、可核对的书写信息。"
        },
        {
            "start": "-3299",
            "title": "印度河城市传统兴起",
            "description": "印度河城市传统兴起使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-3199",
            "title": "埃及象形文字",
            "description": "埃及象形文字把粮食、劳役和交易记录转化为可保存、可核对的书写信息。"
        },
        {
            "start": "-3099",
            "title": "古埃及政治统一",
            "description": "古埃及政治统一把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
        },
        {
            "start": "-2999",
            "title": "美索不达米亚与印度河的长途贸易",
            "description": "美索不达米亚与印度河的长途贸易让原本分散的地区交换原料、制成品和文化观念。"
        },
        {
            "start": "-2899",
            "title": "苏美尔早王朝城邦",
            "description": "苏美尔早王朝城邦改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-2699",
            "title": "埃及古王国与金字塔国家",
            "description": "埃及古王国与金字塔国家改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-2599",
            "title": "成熟哈拉帕城市",
            "description": "成熟哈拉帕城市使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-2499",
            "title": "南岛语族扩张开始",
            "description": "南岛语族扩张开始使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-2399",
            "title": "阿卡德帝国扩张",
            "description": "阿卡德帝国扩张把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
        },
        {
            "start": "-2199",
            "title": "4.2千年气候事件与国家危机",
            "description": "4.2千年气候事件与国家危机带来长期干旱和粮食压力，并削弱多个早期国家。"
        },
        {
            "start": "-2099",
            "title": "乌尔第三王朝",
            "description": "乌尔第三王朝改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-1999",
            "title": "米诺斯宫殿文明",
            "description": "米诺斯宫殿文明形成了稳定的聚落、生产和礼仪体系，并影响周边地区。"
        },
        {
            "start": "-1899",
            "title": "古巴比伦城市秩序",
            "description": "古巴比伦城市秩序使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-1799",
            "title": "二里头文化与中国早期青铜国家",
            "description": "二里头文化与中国早期青铜国家扩大了金属工具和武器的使用，并推动专业手工业形成。"
        },
        {
            "start": "-1749",
            "title": "汉谟拉比统治巴比伦",
            "description": "汉谟拉比统治巴比伦改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-1599",
            "title": "商王朝兴起",
            "description": "商王朝兴起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-1599",
            "title": "迈锡尼宫殿社会",
            "description": "迈锡尼宫殿社会形成了稳定的聚落、生产和礼仪体系，并影响周边地区。"
        },
        {
            "start": "-1549",
            "title": "埃及新王国",
            "description": "埃及新王国改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-1499",
            "title": "南亚吠陀文化发展",
            "description": "南亚吠陀文化发展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-1399",
            "title": "赫梯帝国崛起",
            "description": "赫梯帝国崛起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-1299",
            "title": "奥尔梅克文明兴起",
            "description": "奥尔梅克文明兴起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-1249",
            "title": "拉皮塔文化扩展至太平洋",
            "description": "拉皮塔文化扩展至太平洋使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-1199",
            "title": "青铜时代晚期崩溃",
            "description": "青铜时代晚期崩溃使宫殿政权、远距离贸易和城市网络同时衰退，许多地区进入重组期。"
        },
        {
            "start": "-1099",
            "title": "腓尼基海上网络",
            "description": "腓尼基海上网络让原本分散的地区交换原料、制成品和文化观念。"
        },
        {
            "start": "-1045",
            "title": "周灭商",
            "description": "周灭商把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
        },
        {
            "start": "-0999",
            "title": "班图语族人口扩张加速",
            "description": "班图语族人口扩张加速使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-0899",
            "title": "西非诺克文化",
            "description": "西非诺克文化形成了稳定的聚落、生产和礼仪体系，并影响周边地区。"
        },
        {
            "start": "-0799",
            "title": "希腊城邦形成",
            "description": "希腊城邦形成改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-0799",
            "title": "安第斯查文文化圈",
            "description": "安第斯查文文化圈形成了稳定的聚落、生产和礼仪体系，并影响周边地区。"
        },
        {
            "start": "-0769",
            "title": "东周开始",
            "description": "东周开始改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-0752",
            "title": "罗马传统建城年",
            "description": "罗马传统建城年形成了稳定的聚落、生产和礼仪体系，并影响周边地区。"
        },
        {
            "start": "-0699",
            "title": "铁器技术广泛传播",
            "description": "铁器技术广泛传播扩大了金属工具和武器的使用，并推动专业手工业形成。"
        },
        {
            "start": "-0699",
            "title": "斯基泰草原网络",
            "description": "斯基泰草原网络改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-0599",
            "title": "恒河中游城市化",
            "description": "恒河中游城市化使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-0549",
            "title": "阿契美尼德波斯帝国兴起",
            "description": "阿契美尼德波斯帝国兴起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-0508",
            "title": "罗马共和国开始",
            "description": "罗马共和国开始改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-0499",
            "title": "萨波特克蒙特阿尔班发展",
            "description": "萨波特克蒙特阿尔班发展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "-0499",
            "title": "跨撒哈拉交流扩展",
            "description": "跨撒哈拉交流扩展让原本分散的地区交换原料、制成品和文化观念。"
        },
        {
            "start": "-0402",
            "title": "中国战国时代开始",
            "description": "中国战国时代开始改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "-0321",
            "title": "孔雀王朝建立",
            "description": "孔雀王朝建立把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
        },
        {
            "start": "-0220",
            "title": "秦统一中国",
            "description": "秦统一中国把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
        },
        {
            "start": "-0205",
            "title": "汉朝建立",
            "description": "汉朝建立形成新的城市中心，并集中人口、贸易和政治权力。"
        },
        {
            "start": "-0199",
            "title": "特奥蒂瓦坎成长为大城市",
            "description": "特奥蒂瓦坎成长为大城市使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "-0099",
            "title": "安第斯莫切文化发展",
            "description": "安第斯莫切文化发展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "0100",
            "title": "阿克苏姆王国崛起",
            "description": "阿克苏姆王国崛起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "0200",
            "title": "古典玛雅城市文明繁荣",
            "description": "古典玛雅城市文明繁荣使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "0220",
            "title": "汉朝终结与分裂时代",
            "description": "汉朝终结与分裂时代改变了当地人口获取资源、组织聚落和维持社会生活的方式。"
        },
        {
            "start": "0320",
            "title": "笈多帝国崛起",
            "description": "笈多帝国崛起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "0400",
            "title": "波利尼西亚人在太平洋扩展定居",
            "description": "波利尼西亚人在太平洋扩展定居使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "0500",
            "title": "西非加纳帝国崛起",
            "description": "西非加纳帝国崛起使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "0600",
            "title": "密西西比土丘社会发展",
            "description": "密西西比土丘社会发展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "0700",
            "title": "斯瓦希里海岸贸易城市扩展",
            "description": "斯瓦希里海岸贸易城市扩展使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "0800",
            "title": "维京定居与北大西洋扩张",
            "description": "维京定居与北大西洋扩张使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "0900",
            "title": "大津巴布韦区域中心发展",
            "description": "大津巴布韦区域中心发展使相关人口、聚落或制度向更广区域延伸。"
        },
        {
            "start": "1000",
            "title": "诺斯人在北美定居",
            "description": "诺斯人在北美定居使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "1050",
            "title": "卡霍基亚成为大型城市中心",
            "description": "卡霍基亚成为大型城市中心使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "1200",
            "title": "毛利人在新西兰定居加速",
            "description": "毛利人在新西兰定居加速使更多人口集中生活，并形成更复杂的住房、储存和公共组织。"
        },
        {
            "start": "1325",
            "title": "特诺奇蒂特兰建立",
            "description": "特诺奇蒂特兰建立形成新的城市中心，并集中人口、贸易和政治权力。"
        },
        {
            "start": "1438",
            "title": "印加帝国扩张开始",
            "description": "印加帝国扩张开始把多个地方政权纳入同一统治体系，并重组税收与军事动员。"
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
            "description": "阿卡德帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "埃及古王国",
            "description": "埃及古王国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "埃及中王国",
            "description": "埃及中王国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "埃及新王国",
            "description": "埃及新王国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "商朝",
            "description": "商朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "周朝",
            "description": "周朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "新亚述帝国",
            "description": "新亚述帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "新巴比伦帝国",
            "description": "新巴比伦帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "阿契美尼德波斯帝国",
            "description": "阿契美尼德波斯帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "罗马共和国",
            "description": "罗马共和国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "亚历山大大帝帝国",
            "description": "亚历山大大帝帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "托勒密埃及",
            "description": "托勒密埃及在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "塞琉古帝国",
            "description": "塞琉古帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "孔雀王朝",
            "description": "孔雀王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "秦朝",
            "description": "秦朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "汉朝",
            "description": "汉朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "安息帝国",
            "description": "安息帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "统一罗马帝国",
            "description": "统一罗马帝国把此前分立的政治实体纳入同一国家框架。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "萨珊帝国",
            "description": "萨珊帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "鼎盛时期的阿克苏姆王国",
            "description": "鼎盛时期的阿克苏姆王国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "笈多帝国",
            "description": "笈多帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "东罗马／拜占庭帝国",
            "description": "东罗马／拜占庭帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "法兰克王国与加洛林帝国",
            "description": "法兰克王国与加洛林帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "隋朝统一中国",
            "description": "隋朝统一中国把此前分立的政治实体纳入同一国家框架。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "唐朝",
            "description": "唐朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "正统哈里发与倭马亚王朝",
            "description": "正统哈里发与倭马亚王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "巴格达阿拔斯王朝",
            "description": "巴格达阿拔斯王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "日本平安时代",
            "description": "日本平安时代在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "神圣罗马帝国传统",
            "description": "神圣罗马帝国传统在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "基辅罗斯国家",
            "description": "基辅罗斯国家在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国时期",
            "description": "五代十国时期在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "宋朝",
            "description": "宋朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "法蒂玛王朝",
            "description": "法蒂玛王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "加纳帝国鼎盛期",
            "description": "加纳帝国鼎盛期在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "塞尔柱帝国秩序",
            "description": "塞尔柱帝国秩序在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "诺曼统治在英格兰建立",
            "description": "诺曼统治在英格兰建立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "镰仓幕府",
            "description": "镰仓幕府在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "蒙古帝国及其继承汗国",
            "description": "蒙古帝国及其继承汗国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "马里帝国",
            "description": "马里帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "元朝",
            "description": "元朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "奥斯曼国家与帝国",
            "description": "奥斯曼国家与帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "毗奢耶那伽罗帝国",
            "description": "毗奢耶那伽罗帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "西欧百年战争时代",
            "description": "西欧百年战争时代在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "明朝",
            "description": "明朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "朝鲜王朝",
            "description": "朝鲜王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "桑海帝国",
            "description": "桑海帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "奥斯曼攻占君士坦丁堡",
            "description": "奥斯曼攻占君士坦丁堡以军事行动夺取城市或地区，并改变当地政权归属。"
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "桑海帝国扩张",
            "description": "桑海帝国扩张通过军事征服和行政整合扩大了统治范围。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "英格兰都铎王朝",
            "description": "英格兰都铎王朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "卡斯蒂利亚与阿拉贡联合巩固",
            "description": "卡斯蒂利亚与阿拉贡联合巩固改变了国家权力的归属，并建立新的政治安排。"
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "萨法维伊朗",
            "description": "萨法维伊朗在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "莫卧儿帝国",
            "description": "莫卧儿帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "俄罗斯沙皇国",
            "description": "俄罗斯沙皇国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "德川幕府",
            "description": "德川幕府在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "斯图亚特时代与英国君主立宪制",
            "description": "斯图亚特时代与英国君主立宪制在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "清朝",
            "description": "清朝在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "彼得大帝时期的俄罗斯",
            "description": "彼得大帝时期的俄罗斯在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "大不列颠王国成立",
            "description": "大不列颠王国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1776",
            "title": "美国宣布独立",
            "description": "美国宣布独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "法国革命政权",
            "description": "法国革命政权在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "拿破仑帝国",
            "description": "拿破仑帝国在其存续时期通过王权、官僚、军队或地方统治管理相关领土。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "海地独立",
            "description": "海地独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "拉丁美洲独立时代",
            "description": "拉丁美洲独立时代结束了原有殖民或外部统治，并建立新的主权国家。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "维也纳会议体系",
            "description": "维也纳会议重新安排拿破仑战争后的欧洲边界，并建立列强协商体系。"
        },
        {
            "start": "1822",
            "title": "巴西独立",
            "description": "巴西独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1861",
            "title": "意大利王国成立",
            "description": "意大利王国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1867",
            "title": "加拿大联邦成立",
            "description": "加拿大联邦成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1868",
            "title": "明治维新",
            "description": "明治维新结束幕府统治，日本开始中央集权、工业化和制度改革。"
        },
        {
            "start": "1871",
            "title": "德意志帝国成立",
            "description": "德意志帝国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1885",
            "title": "刚果自由邦建立",
            "description": "刚果自由邦建立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1901",
            "title": "澳大利亚联邦成立",
            "description": "澳大利亚联邦成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命终结帝制",
            "description": "辛亥革命终结帝制结束了原有国家结构，其领土和权力由新的政治实体接替。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "俄国临时政府与布尔什维克夺权",
            "description": "俄国临时政府与布尔什维克夺权改变了国家权力的归属，并建立新的政治安排。"
        },
        {
            "start": "1918",
            "title": "德意志、奥匈、奥斯曼与俄罗斯帝国崩溃",
            "description": "德意志、奥匈、奥斯曼与俄罗斯帝国崩溃结束了原有国家结构，其领土和权力由新的政治实体接替。"
        },
        {
            "start": "1922",
            "title": "苏联成立",
            "description": "苏联成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1923",
            "title": "土耳其共和国成立",
            "description": "土耳其共和国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1932",
            "title": "沙特阿拉伯王国成立",
            "description": "沙特阿拉伯王国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1947",
            "title": "印度与巴基斯坦独立",
            "description": "印度与巴基斯坦独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1948",
            "title": "以色列国建立",
            "description": "以色列国建立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1949",
            "title": "中华人民共和国成立",
            "description": "中华人民共和国成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1957",
            "title": "加纳独立",
            "description": "加纳独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1960",
            "title": "非洲年",
            "description": "非洲年改变了国家权力的归属，并建立新的政治安排。"
        },
        {
            "start": "1962",
            "title": "阿尔及利亚独立",
            "description": "阿尔及利亚独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1963",
            "title": "非洲统一组织成立",
            "description": "非洲统一组织成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "1971",
            "title": "孟加拉国独立",
            "description": "孟加拉国独立结束了原有殖民或外部统治，并建立新的主权国家。"
        },
        {
            "start": "1990",
            "title": "德国统一",
            "description": "德国统一把此前分立的政治实体纳入同一国家框架。"
        },
        {
            "start": "1991",
            "title": "苏联解体",
            "description": "苏联解体结束了原有国家结构，其领土和权力由新的政治实体接替。"
        },
        {
            "start": "1993",
            "title": "捷克斯洛伐克和平解体",
            "description": "捷克斯洛伐克和平解体结束了原有国家结构，其领土和权力由新的政治实体接替。"
        },
        {
            "start": "1997",
            "title": "香港回归",
            "description": "香港回归完成主权移交，并把当地重新纳入中国的国家治理体系。"
        },
        {
            "start": "1999",
            "title": "澳门回归",
            "description": "澳门回归完成主权移交，并把当地重新纳入中国的国家治理体系。"
        },
        {
            "start": "2002",
            "title": "非洲联盟成立",
            "description": "非洲联盟成立正式建立了新的国家或区域组织，并形成相应的政治机构。"
        },
        {
            "start": "2011",
            "title": "南苏丹独立",
            "description": "南苏丹独立结束了原有殖民或外部统治，并建立新的主权国家。"
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
            "description": "金字塔建筑群与王室丧葬文化改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "-1799",
            "title": "古巴比伦书记学校",
            "description": "古巴比伦书记学校扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "-1499",
            "title": "南亚吠陀赞歌传承",
            "description": "南亚吠陀赞歌传承把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "-1199",
            "title": "商代中国甲骨文",
            "description": "商代中国甲骨文改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "-0999",
            "title": "希伯来宗教传统形成",
            "description": "希伯来宗教传统形成建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "-0799",
            "title": "荷马史诗成文",
            "description": "荷马史诗成文把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "-0699",
            "title": "字母文字在地中海传播",
            "description": "字母文字在地中海传播把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "-0599",
            "title": "奥义书思想发展",
            "description": "奥义书思想发展使相关思想、习俗或传播网络覆盖更多地区和人群。"
        },
        {
            "start": "-0549",
            "title": "大雄与耆那教传统",
            "description": "大雄与耆那教传统建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "-0529",
            "title": "围绕佛陀教诲形成佛教共同体",
            "description": "围绕佛陀教诲形成佛教共同体建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "-0499",
            "title": "孔子学说与中国古典伦理传统",
            "description": "孔子学说与中国古典伦理传统改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "-0449",
            "title": "希腊戏剧在雅典繁荣",
            "description": "希腊戏剧在雅典繁荣改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "-0399",
            "title": "中国重要古典文献编纂",
            "description": "中国重要古典文献编纂把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "-0299",
            "title": "希腊化文化融合",
            "description": "希腊化文化融合改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "-0249",
            "title": "阿育王时期佛教传播",
            "description": "阿育王时期佛教传播建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "-0199",
            "title": "拉比传统与第二圣殿犹太教发展",
            "description": "拉比传统与第二圣殿犹太教发展建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0030",
            "title": "早期基督教运动",
            "description": "早期基督教运动建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0105",
            "title": "与蔡伦奏报相关的造纸术",
            "description": "与蔡伦奏报相关的造纸术降低了复制文字的成本，使知识能够传给更广泛的人群。"
        },
        {
            "start": "0200",
            "title": "大乘佛教在亚洲扩展",
            "description": "大乘佛教在亚洲扩展建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0313",
            "title": "米兰敕令使基督教合法化",
            "description": "米兰敕令使基督教合法化建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0325",
            "title": "第一次尼西亚公会议",
            "description": "第一次尼西亚公会议重新界定了宗教权威、教义或国家与宗教之间的关系。"
        },
        {
            "start": "0380",
            "title": "基督教成为罗马帝国国教",
            "description": "基督教成为罗马帝国国教建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0400",
            "title": "笈多时期梵文古典文化繁荣",
            "description": "笈多时期梵文古典文化繁荣改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "0529",
            "title": "本笃会修道传统开始",
            "description": "本笃会修道传统开始建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0610",
            "title": "伊斯兰传统中《古兰经》启示开始",
            "description": "伊斯兰传统中《古兰经》启示开始把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "0622",
            "title": "希吉拉与麦地那穆斯林共同体形成",
            "description": "希吉拉与麦地那穆斯林共同体形成使相关思想、习俗或传播网络覆盖更多地区和人群。"
        },
        {
            "start": "0700",
            "title": "佛教在东亚与东南亚广泛确立",
            "description": "佛教在东亚与东南亚广泛确立建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "0762",
            "title": "阿拔斯首都巴格达建立",
            "description": "阿拔斯首都巴格达建立改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "0800",
            "title": "加洛林教育改革",
            "description": "加洛林教育改革扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "0850",
            "title": "阿拉伯语古典翻译运动",
            "description": "阿拉伯语古典翻译运动把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "0868",
            "title": "中国印刷《金刚经》",
            "description": "中国印刷《金刚经》降低了复制文字的成本，使知识能够传给更广泛的人群。"
        },
        {
            "start": "0960",
            "title": "东亚活字与商业出版发展",
            "description": "东亚活字与商业出版发展降低了复制文字的成本，使知识能够传给更广泛的人群。"
        },
        {
            "start": "0988",
            "title": "基辅罗斯基督教化",
            "description": "基辅罗斯基督教化建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "1054",
            "title": "东西教会大分裂",
            "description": "东西教会大分裂建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "1088",
            "title": "博洛尼亚大学传统开始",
            "description": "博洛尼亚大学传统开始扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "1096",
            "title": "十字军运动开始",
            "description": "十字军运动开始把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1150",
            "title": "欧洲大学网络扩展",
            "description": "欧洲大学网络扩展扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "1200",
            "title": "理学在东亚影响扩大",
            "description": "理学在东亚影响扩大改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "1250",
            "title": "经院哲学文化成熟",
            "description": "经院哲学文化成熟改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1300",
            "title": "俗语文学文化扩展",
            "description": "俗语文学文化扩展改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1350",
            "title": "意大利文艺复兴人文主义扩展",
            "description": "意大利文艺复兴人文主义扩展改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1450",
            "title": "欧洲古腾堡式活字印刷",
            "description": "欧洲古腾堡式活字印刷降低了复制文字的成本，使知识能够传给更广泛的人群。"
        },
        {
            "start": "1517",
            "title": "宗教改革开始",
            "description": "宗教改革开始削弱旧有教会权威，并重组国家、教会与信徒之间的关系。"
        },
        {
            "start": "1534",
            "title": "英格兰宗教改革与王权至上",
            "description": "英格兰宗教改革与王权至上削弱旧有教会权威，并重组国家、教会与信徒之间的关系。"
        },
        {
            "start": "1540",
            "title": "耶稣会获准成立",
            "description": "耶稣会获准成立改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "特伦托会议",
            "description": "特伦托会议重新界定了宗教权威、教义或国家与宗教之间的关系。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "《钦定版圣经》出版",
            "description": "《钦定版圣经》出版把宗教、历史或知识内容固定为可传抄和传播的文本。"
        },
        {
            "start": "1637",
            "title": "德川政权限制基督教与海外交往",
            "description": "德川政权限制基督教与海外交往建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "1648",
            "title": "三十年战争后的宗派秩序",
            "description": "三十年战争后的宗派秩序改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "1685",
            "title": "废除南特敕令",
            "description": "废除南特敕令重新界定了宗教权威、教义或国家与宗教之间的关系。"
        },
        {
            "start": "1715",
            "title": "欧洲启蒙公共领域扩展",
            "description": "欧洲启蒙公共领域扩展使相关思想、习俗或传播网络覆盖更多地区和人群。"
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "《百科全书》出版",
            "description": "《百科全书》出版把宗教、历史或知识内容固定为可传抄和传播的文本。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "太平洋传教与殖民文化接触扩展",
            "description": "太平洋传教与殖民文化接触扩展建立或扩大了宗教共同体，并形成相应的仪式、经典和社会网络。"
        },
        {
            "start": "1800",
            "title": "浪漫主义重塑欧洲文化",
            "description": "浪漫主义重塑欧洲文化改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1830",
            "title": "大众报刊发行扩展",
            "description": "大众报刊发行扩展使相关思想、习俗或传播网络覆盖更多地区和人群。"
        },
        {
            "start": "1848",
            "title": "民族主义与自由主义政治文化高涨",
            "description": "民族主义与自由主义政治文化高涨改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1868",
            "title": "明治日本国家主导大众教育扩展",
            "description": "明治日本国家主导大众教育扩展扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "1870",
            "title": "欧美义务教育扩展",
            "description": "欧美义务教育扩展扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "1896",
            "title": "首届现代奥运会",
            "description": "首届现代奥运会以国际竞赛形式恢复奥林匹克传统，并推动现代体育组织化。"
        },
        {
            "start": "1900",
            "title": "全球大众文化与娱乐加速",
            "description": "全球大众文化与娱乐加速改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1919",
            "title": "包豪斯成立",
            "description": "包豪斯成立改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1920",
            "title": "商业广播扩展",
            "description": "商业广播扩展改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "1927",
            "title": "首部长篇同步有声电影",
            "description": "首部长篇同步有声电影改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "1936",
            "title": "多国开始电视定期播出",
            "description": "多国开始电视定期播出改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "1945",
            "title": "战后大众高等教育扩展",
            "description": "战后大众高等教育扩展扩大了有组织的教学，并培养掌握文字、法律和专业知识的人群。"
        },
        {
            "start": "1947",
            "title": "印巴分治重塑南亚认同与迁徙",
            "description": "印巴分治重塑南亚认同与迁徙改变了人们表达信仰、保存知识或形成集体认同的方式。"
        },
        {
            "start": "1950",
            "title": "全球青年文化与消费社会扩展",
            "description": "全球青年文化与消费社会扩展改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1955",
            "title": "万隆会议推动亚非团结",
            "description": "万隆会议推动亚非团结重新界定了宗教权威、教义或国家与宗教之间的关系。"
        },
        {
            "start": "1960",
            "title": "第二波女权主义国际扩展",
            "description": "第二波女权主义国际扩展把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1964",
            "title": "全球民权与反歧视运动加强",
            "description": "全球民权与反歧视运动加强把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1968",
            "title": "全球1968年抗议运动",
            "description": "全球1968年抗议运动把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1969",
            "title": "石墙起义与现代LGBTQ权利运动",
            "description": "石墙起义与现代LGBTQ权利运动把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1970",
            "title": "现代环保运动进入大众政治",
            "description": "现代环保运动进入大众政治把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "1977",
            "title": "个人计算文化全球扩展",
            "description": "个人计算文化全球扩展改变了艺术表达和审美趣味，并影响后来的文学、建筑或视觉文化。"
        },
        {
            "start": "1980",
            "title": "卫星电视与全球媒体网络扩展",
            "description": "卫星电视与全球媒体网络扩展改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "1989",
            "title": "万维网提出",
            "description": "万维网提出改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "1991",
            "title": "万维网向公众开放",
            "description": "万维网向公众开放改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "1995",
            "title": "商业互联网与移动通信加速",
            "description": "商业互联网与移动通信加速改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "2001",
            "title": "维基百科上线",
            "description": "维基百科上线改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "2004",
            "title": "社交媒体时代开始",
            "description": "社交媒体时代开始改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "2007",
            "title": "以智能手机为中心的数字生活加速",
            "description": "以智能手机为中心的数字生活加速改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "2010",
            "title": "流媒体与平台文化全球化",
            "description": "流媒体与平台文化全球化改变了信息制作、传播和公众参与文化生活的方式。"
        },
        {
            "start": "2017",
            "title": "#MeToo成为全球运动",
            "description": "#MeToo成为全球运动把平等、身份或社会改革诉求推入大众政治和公共讨论。"
        },
        {
            "start": "2020",
            "title": "远程工作、在线教育与数字社会生活激增",
            "description": "远程工作、在线教育与数字社会生活激增使办公、教学和社交活动大规模转移到网络平台。"
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
            "description": "卡迭石战役集中检验了交战双方的兵力和战略，并影响后续战争走向。"
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "海上民族与东地中海冲突",
            "description": "海上民族与东地中海冲突使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "亚述征服黎凡特",
            "description": "亚述征服黎凡特使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "希波战争",
            "description": "希波战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "伯罗奔尼撒战争",
            "description": "伯罗奔尼撒战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "亚历山大大帝征服",
            "description": "亚历山大大帝征服使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "布匿战争",
            "description": "布匿战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "秦统一战争",
            "description": "秦统一战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "楚汉战争",
            "description": "楚汉战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "凯撒高卢战争",
            "description": "凯撒高卢战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "凯撒内战",
            "description": "凯撒内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "亚克兴海战",
            "description": "亚克兴海战集中检验了交战双方的兵力和战略，并影响后续战争走向。"
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "第一次犹太战争",
            "description": "第一次犹太战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "黄巾起义",
            "description": "黄巾起义中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "三国战争",
            "description": "三国战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "民族迁徙期入侵与西罗马统治崩溃",
            "description": "民族迁徙期入侵与西罗马统治崩溃使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "查士丁尼再征服",
            "description": "查士丁尼再征服使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "拜占庭—萨珊战争",
            "description": "拜占庭—萨珊战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "早期伊斯兰征服",
            "description": "早期伊斯兰征服使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "穆斯林征服伊比利亚",
            "description": "穆斯林征服伊比利亚使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "安史之乱",
            "description": "安史之乱以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "维京袭击与征服",
            "description": "维京袭击与征服使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国战争",
            "description": "五代十国战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "诺曼征服英格兰",
            "description": "诺曼征服英格兰使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。"
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "东地中海十字军战争",
            "description": "东地中海十字军战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "源平合战",
            "description": "源平合战以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "蒙古征服欧亚大陆",
            "description": "蒙古征服欧亚大陆使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "阿尔比十字军",
            "description": "阿尔比十字军以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "蒙古入侵欧洲",
            "description": "蒙古入侵欧洲使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "蒙古入侵日本",
            "description": "蒙古入侵日本使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "百年战争",
            "description": "百年战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "红巾军起义",
            "description": "红巾军起义中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "帖木儿征服",
            "description": "帖木儿征服使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "胡斯战争",
            "description": "胡斯战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "玫瑰战争",
            "description": "玫瑰战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "日本战国战争",
            "description": "日本战国战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "格拉纳达陷落",
            "description": "格拉纳达陷落以武装暴力改变了当地政权、边界或社会秩序。"
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "意大利战争",
            "description": "意大利战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "西班牙征服阿兹特克帝国",
            "description": "西班牙征服阿兹特克帝国使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "德国农民战争",
            "description": "德国农民战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "西班牙征服印加",
            "description": "西班牙征服印加使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "法国宗教战争",
            "description": "法国宗教战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "尼德兰革命与八十年战争",
            "description": "尼德兰革命与八十年战争中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "万历朝鲜战争",
            "description": "万历朝鲜战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "三十年战争",
            "description": "三十年战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "葡萄牙复国战争",
            "description": "葡萄牙复国战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "英国内战",
            "description": "英国内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "明清易代战争",
            "description": "明清易代战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "英荷战争",
            "description": "英荷战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "维也纳之战",
            "description": "维也纳之战以武装暴力改变了当地政权、边界或社会秩序。"
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "光荣革命",
            "description": "光荣革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "大北方战争",
            "description": "大北方战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "西班牙王位继承战争",
            "description": "西班牙王位继承战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "七年战争",
            "description": "七年战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "美国独立战争",
            "description": "美国独立战争围绕摆脱外部统治和建立主权国家展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "法国大革命",
            "description": "法国大革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "海地革命",
            "description": "海地革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "法国革命战争与拿破仑战争",
            "description": "法国革命战争与拿破仑战争中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "第一次塞尔维亚起义",
            "description": "第一次塞尔维亚起义中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "西属美洲独立战争",
            "description": "西属美洲独立战争围绕摆脱外部统治和建立主权国家展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "希腊独立战争",
            "description": "希腊独立战争围绕摆脱外部统治和建立主权国家展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "第一次鸦片战争",
            "description": "第一次鸦片战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "欧洲1848年革命",
            "description": "欧洲1848年革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "太平天国运动",
            "description": "太平天国运动以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "克里米亚战争",
            "description": "克里米亚战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "第二次鸦片战争",
            "description": "第二次鸦片战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "印度民族起义",
            "description": "印度民族起义中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "美国内战",
            "description": "美国内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "德意志统一战争",
            "description": "德意志统一战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "戊辰战争",
            "description": "戊辰战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "普法战争",
            "description": "普法战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "南美太平洋战争",
            "description": "南美太平洋战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "马赫迪战争",
            "description": "马赫迪战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "中法战争",
            "description": "中法战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "甲午战争",
            "description": "甲午战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "阿杜瓦战役",
            "description": "阿杜瓦战役集中检验了交战双方的兵力和战略，并影响后续战争走向。"
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "第二次布尔战争",
            "description": "第二次布尔战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "义和团运动与列强干涉",
            "description": "义和团运动与列强干涉以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "日俄战争",
            "description": "日俄战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "俄国1905年革命",
            "description": "俄国1905年革命中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "墨西哥革命",
            "description": "墨西哥革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命",
            "description": "辛亥革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "巴尔干战争",
            "description": "巴尔干战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "第一次世界大战",
            "description": "第一次世界大战以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "复活节起义",
            "description": "复活节起义中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "俄国革命",
            "description": "俄国革命中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "俄国内战",
            "description": "俄国内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "土耳其独立战争",
            "description": "土耳其独立战争围绕摆脱外部统治和建立主权国家展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "中国内战",
            "description": "中国内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "日本在东亚的扩张战争",
            "description": "日本在东亚的扩张战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "第二次意大利—埃塞俄比亚战争",
            "description": "第二次意大利—埃塞俄比亚战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "西班牙内战",
            "description": "西班牙内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "第二次世界大战",
            "description": "第二次世界大战以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "第二次世界大战东线",
            "description": "第二次世界大战东线以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "太平洋战争",
            "description": "太平洋战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "印度尼西亚独立战争",
            "description": "印度尼西亚独立战争围绕摆脱外部统治和建立主权国家展开。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "第一次印度支那战争",
            "description": "第一次印度支那战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "第一次中东战争",
            "description": "第一次中东战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "冷战",
            "description": "冷战以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "马来亚紧急状态",
            "description": "马来亚紧急状态以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "朝鲜战争",
            "description": "朝鲜战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "茅茅起义",
            "description": "茅茅起义中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "阿尔及利亚战争",
            "description": "阿尔及利亚战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "越南战争",
            "description": "越南战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "苏伊士危机",
            "description": "苏伊士危机以武装暴力改变了当地政权、边界或社会秩序。"
        },
        {
            "start": "1956",
            "title": "匈牙利革命",
            "description": "匈牙利革命中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1959",
            "title": "古巴革命",
            "description": "古巴革命中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "刚果危机",
            "description": "刚果危机以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "葡萄牙殖民战争",
            "description": "葡萄牙殖民战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "古巴导弹危机",
            "description": "古巴导弹危机以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "印度尼西亚大规模杀戮与政治转型",
            "description": "印度尼西亚大规模杀戮与政治转型以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "第三次中东战争",
            "description": "第三次中东战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "布拉格之春与华约入侵",
            "description": "布拉格之春与华约入侵使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。"
        },
        {
            "start": "1971",
            "title": "孟加拉国解放战争",
            "description": "孟加拉国解放战争围绕摆脱外部统治和建立主权国家展开。"
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "第四次中东战争",
            "description": "第四次中东战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "黎巴嫩内战",
            "description": "黎巴嫩内战使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "红色高棉统治下的柬埔寨大屠杀",
            "description": "红色高棉统治下的柬埔寨大屠杀中，大量平民因族群、宗教或政治身份遭到系统杀害和驱逐。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "苏阿战争",
            "description": "苏阿战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "伊朗革命",
            "description": "伊朗革命中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "两伊战争",
            "description": "两伊战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "马岛战争",
            "description": "马岛战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第一次巴勒斯坦大起义",
            "description": "第一次巴勒斯坦大起义中，反对者挑战现有统治，并试图改变政府或社会制度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "天安门抗议与镇压",
            "description": "天安门抗议与镇压中，反对者挑战现有统治，并试图改变政府或社会制度。"
        },
        {
            "start": "1989",
            "title": "东欧共产党政权垮台",
            "description": "东欧共产党政权垮台以武装暴力改变了当地政权、边界或社会秩序。"
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "海湾战争",
            "description": "海湾战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "南斯拉夫战争",
            "description": "南斯拉夫战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "卢旺达针对图西族的种族灭绝",
            "description": "卢旺达针对图西族的种族灭绝中，大量平民因族群、宗教或政治身份遭到系统杀害和驱逐。"
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "第一次车臣战争",
            "description": "第一次车臣战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "厄立特里亚—埃塞俄比亚战争",
            "description": "厄立特里亚—埃塞俄比亚战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "第二次刚果战争",
            "description": "第二次刚果战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "科索沃战争与北约干预",
            "description": "科索沃战争与北约干预使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "2001-09-11",
            "title": "九一一袭击",
            "description": "九一一袭击以武装暴力改变了当地政权、边界或社会秩序。"
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "阿富汗战争",
            "description": "阿富汗战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "伊拉克战争",
            "description": "伊拉克战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "达尔富尔战争与大规模暴行",
            "description": "达尔富尔战争与大规模暴行使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "巴基斯坦北部叛乱与冲突",
            "description": "巴基斯坦北部叛乱与冲突使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "黎巴嫩战争",
            "description": "黎巴嫩战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "2008",
            "title": "俄格战争",
            "description": "俄格战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "阿拉伯之春",
            "description": "阿拉伯之春以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "利比亚内战与国际干预",
            "description": "利比亚内战与国际干预使国内不同政治或军事阵营为争夺国家控制权长期交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "叙利亚内战开始",
            "description": "叙利亚内战开始使国内不同政治或军事阵营为争夺国家控制权长期交战。"
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISIS领土扩张与其哈里发国覆灭",
            "description": "ISIS领土扩张与其哈里发国覆灭以武装暴力改变了当地政权、边界或社会秩序。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "俄罗斯吞并克里米亚与顿巴斯战争开始",
            "description": "俄罗斯吞并克里米亚与顿巴斯战争开始使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。"
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "伊拉克反ISIS战争",
            "description": "伊拉克反ISIS战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "也门内战升级",
            "description": "也门内战升级使国内不同政治或军事阵营为争夺国家控制权长期交战。"
        },
        {
            "start": "2017",
            "title": "罗兴亚人大规模逃离缅甸",
            "description": "罗兴亚人大规模逃离缅甸迫使大量平民离开家园，并形成跨境难民与人道危机。"
        },
        {
            "start": "2020",
            "title": "第二次纳戈尔诺—卡拉巴赫战争",
            "description": "第二次纳戈尔诺—卡拉巴赫战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "提格雷战争",
            "description": "提格雷战争使相关国家或武装围绕领土、政权、安全或民族问题持续交战。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "缅甸军事政变与全国冲突",
            "description": "缅甸军事政变与全国冲突由军队或政治集团夺取国家权力，并引发新的统治与反抗。"
        },
        {
            "start": "2022-02-24",
            "title": "俄罗斯全面入侵乌克兰",
            "description": "俄罗斯全面入侵乌克兰使一方军队进入并控制对方领土，导致政权、边界或人口流动改变。"
        },
        {
            "start": "2023-10-07",
            "title": "以色列—哈马斯战争开始",
            "description": "以色列—哈马斯战争开始使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
        },
        {
            "start": "2023",
            "title": "苏丹战争开始",
            "description": "苏丹战争开始使相关国家或武装围绕领土、政权、安全或民族问题持续交战。"
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
            "description": "帆船运输扩展降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "-2999",
            "title": "跨区域商品贸易增长",
            "description": "跨区域商品贸易增长扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "-1999",
            "title": "青铜贸易网络连接欧亚地区",
            "description": "青铜贸易网络连接欧亚地区扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "-1199",
            "title": "铁生产重塑工具与战争",
            "description": "铁生产重塑工具与战争提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "-0599",
            "title": "铸币在地中海与西亚传播",
            "description": "铸币在地中海与西亚传播提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "-0299",
            "title": "丝绸之路交流扩展",
            "description": "丝绸之路交流扩展使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "-0199",
            "title": "印度洋季风贸易加强",
            "description": "印度洋季风贸易加强扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "-0099",
            "title": "罗马道路与海运系统整合地中海",
            "description": "罗马道路与海运系统整合地中海降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "0100",
            "title": "造纸在中国传播",
            "description": "造纸在中国传播改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "0200",
            "title": "骆驼商队跨撒哈拉贸易扩展",
            "description": "骆驼商队跨撒哈拉贸易扩展扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "0600",
            "title": "大运河网络整合中国",
            "description": "大运河网络整合中国降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "0700",
            "title": "印度洋商业侨民网络扩展",
            "description": "印度洋商业侨民网络扩展扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "0750",
            "title": "伊斯兰商业与信用网络扩展",
            "description": "伊斯兰商业与信用网络扩展扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "0800",
            "title": "造纸术在伊斯兰世界传播",
            "description": "造纸术在伊斯兰世界传播改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "0900",
            "title": "中国火药武器开始发展",
            "description": "中国火药武器开始发展使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1000",
            "title": "中国航海罗盘发展",
            "description": "中国航海罗盘发展降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1100",
            "title": "中世纪欧洲商业革命",
            "description": "中世纪欧洲商业革命扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1200",
            "title": "蒙古时代跨欧亚交流",
            "description": "蒙古时代跨欧亚交流改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "马可·波罗横跨欧亚旅行",
            "description": "马可·波罗横跨欧亚旅行改变了商品生产、交换、运输或融资的具体方式。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "汇票与银行商号扩展",
            "description": "汇票与银行商号扩展提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "郑和下西洋",
            "description": "郑和下西洋改变了商品生产、交换、运输或融资的具体方式。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "欧洲印刷革命",
            "description": "欧洲印刷革命改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1488",
            "title": "迪亚士绕过好望角",
            "description": "迪亚士绕过好望角改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1492-10-12",
            "title": "哥伦布抵达加勒比海",
            "description": "哥伦布抵达加勒比海改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1494",
            "title": "《托德西利亚斯条约》划分海外势力范围",
            "description": "《托德西利亚斯条约》划分海外势力范围改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1498",
            "title": "达·伽马经海路抵达印度",
            "description": "达·伽马经海路抵达印度改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1500",
            "title": "哥伦布大交换加速",
            "description": "哥伦布大交换加速扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "跨大西洋奴隶贸易",
            "description": "跨大西洋奴隶贸易扩大了跨地区货物流通，并把生产者、港口和市场连接起来。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "首次环球航行",
            "description": "首次环球航行改变了商品生产、交换、运输或融资的具体方式。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "波托西白银繁荣",
            "description": "波托西白银繁荣改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1565",
            "title": "马尼拉大帆船贸易连接美洲与亚洲",
            "description": "马尼拉大帆船贸易连接美洲与亚洲降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1600",
            "title": "英国东印度公司获特许",
            "description": "英国东印度公司获特许改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1602",
            "title": "荷兰东印度公司成立",
            "description": "荷兰东印度公司成立改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1609",
            "title": "阿姆斯特丹银行成立",
            "description": "阿姆斯特丹银行成立提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "1637",
            "title": "荷兰郁金香市场崩盘",
            "description": "荷兰郁金香市场崩盘扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。"
        },
        {
            "start": "1650",
            "title": "大西洋种植园经济扩展",
            "description": "大西洋种植园经济扩展使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1694",
            "title": "英格兰银行成立",
            "description": "英格兰银行成立提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "1700",
            "title": "糖、茶、咖啡与棉花全球市场扩展",
            "description": "糖、茶、咖啡与棉花全球市场扩展使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1712",
            "title": "纽科门蒸汽机",
            "description": "纽科门蒸汽机提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "第一次工业革命",
            "description": "第一次工业革命提高了生产和能源利用能力，并改变劳动组织与城市发展。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "瓦特改良蒸汽机获专利",
            "description": "瓦特改良蒸汽机获专利提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1770",
            "title": "英国工厂制度扩展",
            "description": "英国工厂制度扩展提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1787",
            "title": "第一舰队开启英国殖民澳大利亚",
            "description": "第一舰队开启英国殖民澳大利亚改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1793",
            "title": "轧棉机加速美国棉花生产与奴隶制",
            "description": "轧棉机加速美国棉花生产与奴隶制提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1807",
            "title": "商业蒸汽船时代开始",
            "description": "商业蒸汽船时代开始提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1825",
            "title": "斯托克顿—达灵顿铁路开通",
            "description": "斯托克顿—达灵顿铁路开通降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1830",
            "title": "利物浦—曼彻斯特铁路开通",
            "description": "利物浦—曼彻斯特铁路开通降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1837",
            "title": "电报实用演示",
            "description": "电报实用演示压缩了信息传递时间，并催生新的企业、工作和消费模式。"
        },
        {
            "start": "1846",
            "title": "英国废除谷物法",
            "description": "英国废除谷物法改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1848",
            "title": "加利福尼亚淘金热",
            "description": "加利福尼亚淘金热改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1851",
            "title": "伦敦万国博览会",
            "description": "伦敦万国博览会改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1856",
            "title": "贝塞麦炼钢法",
            "description": "贝塞麦炼钢法改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1859",
            "title": "宾夕法尼亚首口商业油井",
            "description": "宾夕法尼亚首口商业油井提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1863",
            "title": "伦敦地铁开通",
            "description": "伦敦地铁开通降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1869",
            "title": "苏伊士运河开通",
            "description": "苏伊士运河开通降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1869",
            "title": "美国首条横贯大陆铁路建成",
            "description": "美国首条横贯大陆铁路建成降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "第二次工业革命",
            "description": "第二次工业革命提高了生产和能源利用能力，并改变劳动组织与城市发展。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "电话获专利并演示",
            "description": "电话获专利并演示压缩了信息传递时间，并催生新的企业、工作和消费模式。"
        },
        {
            "start": "1879",
            "title": "实用电灯系统出现",
            "description": "实用电灯系统出现改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1880",
            "title": "欧洲与亚洲大规模移民加速",
            "description": "欧洲与亚洲大规模移民加速改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1883",
            "title": "东方快车开行",
            "description": "东方快车开行改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1886",
            "title": "汽车时代开始",
            "description": "汽车时代开始提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1895",
            "title": "商业电影开始",
            "description": "商业电影开始扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1903",
            "title": "首次可控动力飞行",
            "description": "首次可控动力飞行改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1908",
            "title": "福特T型车与汽车大规模生产",
            "description": "福特T型车与汽车大规模生产提高了生产和能源利用能力，并改变劳动组织与城市发展。"
        },
        {
            "start": "1914",
            "title": "巴拿马运河开通",
            "description": "巴拿马运河开通降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1920",
            "title": "大众消费信贷与广告扩展",
            "description": "大众消费信贷与广告扩展使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "经济大萧条",
            "description": "经济大萧条改变了商品生产、交换、运输或融资的具体方式。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "美国新政开始",
            "description": "美国新政开始使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1944",
            "title": "布雷顿森林体系设计",
            "description": "布雷顿森林体系设计改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1947",
            "title": "《关税与贸易总协定》签署",
            "description": "《关税与贸易总协定》签署扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1948",
            "title": "马歇尔计划开始",
            "description": "马歇尔计划开始使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1950",
            "title": "集装箱运输开始改变航运",
            "description": "集装箱运输开始改变航运降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1956",
            "title": "首次商业集装箱船航行",
            "description": "首次商业集装箱船航行降低了人员和货物移动的时间与成本，扩大了市场范围。"
        },
        {
            "start": "1957",
            "title": "欧洲经济共同体成立",
            "description": "欧洲经济共同体成立改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1960",
            "title": "欧佩克成立",
            "description": "欧佩克成立改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1964",
            "title": "东海道新干线开通",
            "description": "东海道新干线开通改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1969",
            "title": "ARPANET开始运行",
            "description": "ARPANET开始运行使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1971",
            "title": "美元停止兑换黄金",
            "description": "美元停止兑换黄金改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1973",
            "title": "第一次石油危机",
            "description": "第一次石油危机扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。"
        },
        {
            "start": "1978",
            "title": "中国改革开放开始",
            "description": "中国改革开放开始使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1981",
            "title": "IBM PC加速个人电脑市场",
            "description": "IBM PC加速个人电脑市场改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1983",
            "title": "ARPANET采用TCP/IP",
            "description": "ARPANET采用TCP/IP改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1985",
            "title": "《申根协定》签署",
            "description": "《申根协定》签署改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1986",
            "title": "多地区市场改革加速",
            "description": "多地区市场改革加速改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1989",
            "title": "华盛顿共识时代开始",
            "description": "华盛顿共识时代开始使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1991",
            "title": "印度经济自由化加速",
            "description": "印度经济自由化加速改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "1993",
            "title": "欧洲单一市场启动",
            "description": "欧洲单一市场启动使生产、运输、金融或市场网络覆盖更广范围。"
        },
        {
            "start": "1994",
            "title": "北美自由贸易协定生效",
            "description": "北美自由贸易协定生效扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1995",
            "title": "世界贸易组织成立",
            "description": "世界贸易组织成立扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "亚洲金融危机",
            "description": "亚洲金融危机扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "欧元作为电子与记账货币启用",
            "description": "欧元作为电子与记账货币启用提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "2001",
            "title": "中国加入世界贸易组织",
            "description": "中国加入世界贸易组织扩大了跨地区货物流通，并把生产者、港口和市场连接起来。"
        },
        {
            "start": "2002",
            "title": "欧元纸币与硬币流通",
            "description": "欧元纸币与硬币流通改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "2004",
            "title": "欧盟大规模东扩",
            "description": "欧盟大规模东扩改变了商品生产、交换、运输或融资的具体方式。"
        },
        {
            "start": "2007",
            "title": "全球智能手机经济开始",
            "description": "全球智能手机经济开始压缩了信息传递时间，并催生新的企业、工作和消费模式。"
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "全球金融危机",
            "description": "全球金融危机扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "比特币网络启动",
            "description": "比特币网络启动提供了新的支付、融资或价值储存方式，并扩大远距离交易。"
        },
        {
            "start": "2010",
            "title": "平台与零工经济扩展",
            "description": "平台与零工经济扩展压缩了信息传递时间，并催生新的企业、工作和消费模式。"
        },
        {
            "start": "2013",
            "title": "“一带一路”倡议提出",
            "description": "“一带一路”倡议提出改变了跨国经济合作的方向，并重新安排贸易和监管关系。"
        },
        {
            "start": "2016",
            "title": "英国公投决定脱离欧盟",
            "description": "英国公投决定脱离欧盟改变了跨国经济合作的方向，并重新安排贸易和监管关系。"
        },
        {
            "start": "2020",
            "title": "英国正式脱欧",
            "description": "英国正式脱欧改变了跨国经济合作的方向，并重新安排贸易和监管关系。"
        },
        {
            "start": "2020",
            "title": "新冠疫情期间全球供应链冲击",
            "description": "新冠疫情期间全球供应链冲击扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。"
        },
        {
            "start": "2021",
            "title": "全球通胀与能源价格压力加剧",
            "description": "全球通胀与能源价格压力加剧扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。"
        },
        {
            "start": "2022",
            "title": "乌克兰遭入侵后制裁与贸易分化加深",
            "description": "乌克兰遭入侵后制裁与贸易分化加深扰乱金融、能源或供应链运行，并迫使政府和企业调整政策。"
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
            "description": "4.2千年干旱事件导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。"
        },
        {
            "start": "-1599",
            "title": "锡拉火山喷发与东地中海动荡",
            "description": "锡拉火山喷发与东地中海动荡释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "安东尼瘟疫",
            "description": "安东尼瘟疫造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "西普里安瘟疫",
            "description": "西普里安瘟疫造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "古代晚期气候冲击",
            "description": "古代晚期气候冲击改变温度和降水条件，影响农业、健康与人口分布。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "始于查士丁尼瘟疫的第一次鼠疫大流行",
            "description": "始于查士丁尼瘟疫的第一次鼠疫大流行造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "萨马拉斯火山喷发",
            "description": "萨马拉斯火山喷发释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "欧洲大饥荒",
            "description": "欧洲大饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "黑死病",
            "description": "黑死病造成人员伤亡、生产中断和长期重建需求。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "15世纪中叶火山与气候冲击",
            "description": "15世纪中叶火山与气候冲击释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "旧大陆疾病重创美洲原住民人口",
            "description": "旧大陆疾病重创美洲原住民人口造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "华县大地震",
            "description": "华县大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1600",
            "title": "怀纳普蒂纳火山喷发与全球降温",
            "description": "怀纳普蒂纳火山喷发与全球降温释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "伦敦大瘟疫",
            "description": "伦敦大瘟疫造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "伦敦大火",
            "description": "伦敦大火焚毁居民区或生态系统，并暴露城市管理和灾害应对的薄弱环节。"
        },
        {
            "start": "1707",
            "title": "宝永地震与富士山喷发",
            "description": "宝永地震与富士山喷发摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "马赛大瘟疫",
            "description": "马赛大瘟疫造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "里斯本地震与海啸",
            "description": "里斯本地震与海啸以强震和海啸摧毁沿海社区，并造成长期重建与能源安全问题。"
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "拉基火山喷发与气候扰动",
            "description": "拉基火山喷发与气候扰动释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "坦博拉火山喷发",
            "description": "坦博拉火山喷发释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1816",
            "title": "无夏之年",
            "description": "无夏之年造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "全球霍乱大流行",
            "description": "全球霍乱大流行造成人员伤亡、生产中断和长期重建需求。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "爱尔兰大饥荒",
            "description": "爱尔兰大饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "印度与中国大饥荒",
            "description": "印度与中国大饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "喀拉喀托火山喷发",
            "description": "喀拉喀托火山喷发释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1887",
            "title": "黄河大洪水",
            "description": "黄河大洪水淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "第三次鼠疫大流行",
            "description": "第三次鼠疫大流行造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "旧金山地震",
            "description": "旧金山地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1911",
            "title": "江淮大水灾",
            "description": "江淮大水灾造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "流感大流行",
            "description": "流感大流行造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "海原大地震",
            "description": "海原大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1923-09-01",
            "title": "关东大地震",
            "description": "关东大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1931",
            "title": "中国大洪水",
            "description": "中国大洪水淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "包括乌克兰大饥荒在内的苏联饥荒",
            "description": "包括乌克兰大饥荒在内的苏联饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "孟加拉饥荒",
            "description": "孟加拉饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "中国大饥荒",
            "description": "中国大饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "瓦尔迪维亚地震与太平洋海啸",
            "description": "瓦尔迪维亚地震与太平洋海啸以强震和海啸摧毁沿海社区，并造成长期重建与能源安全问题。"
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "香港流感大流行",
            "description": "香港流感大流行造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "波拉气旋",
            "description": "波拉气旋造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "1976",
            "title": "唐山大地震",
            "description": "唐山大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1984",
            "title": "博帕尔工业灾难",
            "description": "博帕尔工业灾难造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "埃塞俄比亚饥荒",
            "description": "埃塞俄比亚饥荒导致粮食减产和营养危机，并加剧人口迁移与社会不稳定。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "切尔诺贝利核事故",
            "description": "切尔诺贝利核事故造成严重人员与环境损害，并推动安全监管和技术标准调整。"
        },
        {
            "start": "1988",
            "title": "亚美尼亚地震",
            "description": "亚美尼亚地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1991",
            "title": "皮纳图博火山喷发",
            "description": "皮纳图博火山喷发释放火山灰和气体，破坏周边聚落并影响更大范围的气候和农业。"
        },
        {
            "start": "1994",
            "title": "阪神大地震",
            "description": "阪神大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "厄尔尼诺全球气候扰动",
            "description": "厄尔尼诺全球气候扰动改变温度和降水条件，影响农业、健康与人口分布。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "古吉拉特地震",
            "description": "古吉拉特地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "2003",
            "title": "欧洲热浪",
            "description": "欧洲热浪造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "2004-12-26",
            "title": "印度洋地震与海啸",
            "description": "印度洋地震与海啸以强震和海啸摧毁沿海社区，并造成长期重建与能源安全问题。"
        },
        {
            "start": "2005",
            "title": "卡特里娜飓风",
            "description": "卡特里娜飓风淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "2008",
            "title": "纳尔吉斯气旋",
            "description": "纳尔吉斯气旋造成人员伤亡、生产中断和长期重建需求。"
        },
        {
            "start": "2008",
            "title": "汶川大地震",
            "description": "汶川大地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "2010",
            "title": "海地地震",
            "description": "海地地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "2010",
            "title": "巴基斯坦洪灾",
            "description": "巴基斯坦洪灾淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "2011-03-11",
            "title": "东日本大地震、海啸与福岛核事故",
            "description": "东日本大地震、海啸与福岛核事故以强震和海啸摧毁沿海社区，并造成长期重建与能源安全问题。"
        },
        {
            "start": "2013",
            "title": "台风海燕",
            "description": "台风海燕淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "西非埃博拉疫情",
            "description": "西非埃博拉疫情造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "尼泊尔地震",
            "description": "尼泊尔地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "新冠疫情全球卫生紧急状态",
            "description": "新冠疫情全球卫生紧急状态造成大范围感染和死亡，并迫使社会改变医疗、隔离和日常活动。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "全球大规模山火与极端天气意识上升",
            "description": "全球大规模山火与极端天气意识上升焚毁居民区或生态系统，并暴露城市管理和灾害应对的薄弱环节。"
        },
        {
            "start": "2022",
            "title": "巴基斯坦洪灾与气候脆弱性危机",
            "description": "巴基斯坦洪灾与气候脆弱性危机淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
        },
        {
            "start": "2023",
            "title": "土耳其—叙利亚地震",
            "description": "土耳其—叙利亚地震摧毁建筑和基础设施，造成大量伤亡并迫使灾区重建。"
        },
        {
            "start": "2023",
            "title": "利比亚德尔纳洪灾",
            "description": "利比亚德尔纳洪灾淹没或摧毁大面积社区，造成伤亡、迁移和基础设施损失。"
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
            "description": "汉谟拉比法典把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "-0620",
            "title": "雅典德拉古与梭伦改革",
            "description": "雅典德拉古与梭伦改革把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "-0508",
            "title": "罗马共和制度建立",
            "description": "罗马共和制度建立通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "-0449",
            "title": "罗马十二表法",
            "description": "罗马十二表法明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "-0220",
            "title": "秦朝行政标准化",
            "description": "秦朝行政标准化明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "0212",
            "title": "安东尼努斯敕令扩大罗马公民权",
            "description": "安东尼努斯敕令扩大罗马公民权以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "0604",
            "title": "日本《十七条宪法》",
            "description": "日本《十七条宪法》把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "0701",
            "title": "大宝律令",
            "description": "大宝律令把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "0800",
            "title": "加洛林皇帝加冕",
            "description": "加洛林皇帝加冕明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1215-06-15",
            "title": "《大宪章》签署",
            "description": "《大宪章》签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1222",
            "title": "匈牙利金玺诏书",
            "description": "匈牙利金玺诏书以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1232",
            "title": "曼德宪章传统",
            "description": "曼德宪章传统以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1265",
            "title": "西蒙·德·孟福尔议会",
            "description": "西蒙·德·孟福尔议会扩大或重组政治代表，使更多群体能够参与公共决策。"
        },
        {
            "start": "1356",
            "title": "神圣罗马帝国金玺诏书",
            "description": "神圣罗马帝国金玺诏书以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1454",
            "title": "洛迪和约",
            "description": "洛迪和约以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1494",
            "title": "《托德西利亚斯条约》",
            "description": "《托德西利亚斯条约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1555",
            "title": "奥格斯堡和约",
            "description": "奥格斯堡和约以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1598",
            "title": "南特敕令",
            "description": "南特敕令以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1600",
            "title": "特许公司治理扩展",
            "description": "特许公司治理扩展明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1628",
            "title": "《权利请愿书》",
            "description": "《权利请愿书》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1648",
            "title": "威斯特伐利亚和约",
            "description": "威斯特伐利亚和约以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1679",
            "title": "《人身保护法》",
            "description": "《人身保护法》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1689",
            "title": "英国《权利法案》",
            "description": "英国《权利法案》把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1701",
            "title": "《王位继承法》",
            "description": "《王位继承法》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1713",
            "title": "乌得勒支和约",
            "description": "乌得勒支和约以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1776-07-04",
            "title": "《美国独立宣言》",
            "description": "《美国独立宣言》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1787-09-17",
            "title": "《美国宪法》签署",
            "description": "《美国宪法》签署把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1789-08-26",
            "title": "《人权与公民权宣言》",
            "description": "《人权与公民权宣言》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1791",
            "title": "美国《权利法案》批准",
            "description": "美国《权利法案》批准把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1792",
            "title": "《女权辩护》出版",
            "description": "《女权辩护》出版明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1804",
            "title": "《拿破仑法典》",
            "description": "《拿破仑法典》把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1807",
            "title": "英国废除奴隶贸易",
            "description": "英国废除奴隶贸易限制或终止把人作为财产买卖和强迫劳动的法律制度。"
        },
        {
            "start": "1815",
            "title": "维也纳会议与欧洲协调",
            "description": "维也纳会议与欧洲协调明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1833",
            "title": "英国帝国废奴法",
            "description": "英国帝国废奴法明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1840",
            "title": "《怀唐伊条约》",
            "description": "《怀唐伊条约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1848",
            "title": "塞内卡福尔斯大会",
            "description": "塞内卡福尔斯大会明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1863",
            "title": "《解放宣言》",
            "description": "《解放宣言》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1864",
            "title": "第一部《日内瓦公约》",
            "description": "第一部《日内瓦公约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1865",
            "title": "美国宪法第十三修正案废除奴隶制",
            "description": "美国宪法第十三修正案废除奴隶制把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1868",
            "title": "美国宪法第十四修正案",
            "description": "美国宪法第十四修正案把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1868",
            "title": "明治日本《五条誓文》",
            "description": "明治日本《五条誓文》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1870",
            "title": "美国宪法第十五修正案",
            "description": "美国宪法第十五修正案把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "柏林会议规范欧洲瓜分非洲",
            "description": "柏林会议规范欧洲瓜分非洲明确了政府权力、个人权利或国家之间应遵守的规则。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "《大日本帝国宪法》颁布",
            "description": "《大日本帝国宪法》颁布把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1899",
            "title": "第一次海牙和平会议",
            "description": "第一次海牙和平会议明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1902",
            "title": "澳大利亚赋予多数女性联邦选举权",
            "description": "澳大利亚赋予多数女性联邦选举权扩大或重组政治代表，使更多群体能够参与公共决策。"
        },
        {
            "start": "1905",
            "title": "挪威通过协商解盟独立",
            "description": "挪威通过协商解盟独立通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "1907",
            "title": "第二次海牙和平会议",
            "description": "第二次海牙和平会议明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1911",
            "title": "首次纪念国际妇女节",
            "description": "首次纪念国际妇女节明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1918",
            "title": "英国女性在年龄限制下获得议会选举权",
            "description": "英国女性在年龄限制下获得议会选举权扩大或重组政治代表，使更多群体能够参与公共决策。"
        },
        {
            "start": "1919",
            "title": "《凡尔赛条约》",
            "description": "《凡尔赛条约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1919",
            "title": "国际劳工组织成立",
            "description": "国际劳工组织成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1920",
            "title": "国际联盟成立",
            "description": "国际联盟成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1920",
            "title": "美国宪法第十九修正案确立女性选举权",
            "description": "美国宪法第十九修正案确立女性选举权把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1928",
            "title": "《非战公约》",
            "description": "《非战公约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1935",
            "title": "纽伦堡法颁布",
            "description": "纽伦堡法颁布明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1941",
            "title": "《大西洋宪章》",
            "description": "《大西洋宪章》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1944",
            "title": "布雷顿森林机构规划",
            "description": "布雷顿森林机构规划明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1945-06-26",
            "title": "《联合国宪章》签署",
            "description": "《联合国宪章》签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1945-10-24",
            "title": "联合国正式成立",
            "description": "联合国正式成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "纽伦堡审判",
            "description": "纽伦堡审判明确了政府权力、个人权利或国家之间应遵守的规则。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "远东国际军事法庭审判",
            "description": "远东国际军事法庭审判明确了政府权力、个人权利或国家之间应遵守的规则。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "《关税与贸易总协定》",
            "description": "《关税与贸易总协定》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1948-12-09",
            "title": "《防止及惩治灭绝种族罪公约》通过",
            "description": "《防止及惩治灭绝种族罪公约》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1948-12-10",
            "title": "《世界人权宣言》通过",
            "description": "《世界人权宣言》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1949",
            "title": "《日内瓦公约》修订扩展",
            "description": "《日内瓦公约》修订扩展以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1949",
            "title": "北大西洋公约组织成立",
            "description": "北大西洋公约组织成立以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1950",
            "title": "《欧洲人权公约》签署",
            "description": "《欧洲人权公约》签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1951",
            "title": "《难民公约》通过",
            "description": "《难民公约》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1955",
            "title": "华沙条约组织成立",
            "description": "华沙条约组织成立以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1957",
            "title": "《罗马条约》",
            "description": "《罗马条约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1959",
            "title": "欧洲人权法院成立",
            "description": "欧洲人权法院成立通过司法裁判重新解释法律，并改变政府或个人的权利边界。"
        },
        {
            "start": "1960-12-14",
            "title": "《给予殖民地国家和人民独立宣言》",
            "description": "《给予殖民地国家和人民独立宣言》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1963",
            "title": "非洲统一组织成立",
            "description": "非洲统一组织成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1964",
            "title": "美国《民权法》",
            "description": "美国《民权法》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1965",
            "title": "美国《投票权法》",
            "description": "美国《投票权法》扩大或重组政治代表，使更多群体能够参与公共决策。"
        },
        {
            "start": "1965",
            "title": "《消除一切形式种族歧视国际公约》",
            "description": "《消除一切形式种族歧视国际公约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1966",
            "title": "国际人权两公约通过",
            "description": "国际人权两公约通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1967",
            "title": "东南亚国家联盟成立",
            "description": "东南亚国家联盟成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1968",
            "title": "《不扩散核武器条约》开放签署",
            "description": "《不扩散核武器条约》开放签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1972",
            "title": "联合国人类环境会议",
            "description": "联合国人类环境会议建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1975",
            "title": "《赫尔辛基最后文件》",
            "description": "《赫尔辛基最后文件》明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1979",
            "title": "《消除对妇女一切形式歧视公约》",
            "description": "《消除对妇女一切形式歧视公约》以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1981",
            "title": "《非洲人权和民族权宪章》通过",
            "description": "《非洲人权和民族权宪章》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1982",
            "title": "《联合国海洋法公约》开放签署",
            "description": "《联合国海洋法公约》开放签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1987",
            "title": "《蒙特利尔议定书》通过",
            "description": "《蒙特利尔议定书》通过通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "1989",
            "title": "《儿童权利公约》通过",
            "description": "《儿童权利公约》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1990",
            "title": "美国《残疾人法案》签署",
            "description": "美国《残疾人法案》签署把统治、财产、程序或个人权利写入正式法律规则。"
        },
        {
            "start": "1991",
            "title": "《第一阶段削减战略武器条约》签署",
            "description": "《第一阶段削减战略武器条约》签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1992",
            "title": "里约地球峰会",
            "description": "里约地球峰会明确了政府权力、个人权利或国家之间应遵守的规则。"
        },
        {
            "start": "1992",
            "title": "《马斯特里赫特条约》签署",
            "description": "《马斯特里赫特条约》签署以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "1993-11-01",
            "title": "欧洲联盟正式成立",
            "description": "欧洲联盟正式成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1994",
            "title": "南非结束种族隔离并举行民主选举",
            "description": "南非结束种族隔离并举行民主选举扩大或重组政治代表，使更多群体能够参与公共决策。"
        },
        {
            "start": "1995-01-01",
            "title": "世界贸易组织成立",
            "description": "世界贸易组织成立建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "1997",
            "title": "《京都议定书》通过",
            "description": "《京都议定书》通过通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "1998",
            "title": "《国际刑事法院罗马规约》通过",
            "description": "《国际刑事法院罗马规约》通过通过司法裁判重新解释法律，并改变政府或个人的权利边界。"
        },
        {
            "start": "2000",
            "title": "千年发展目标通过",
            "description": "千年发展目标通过为减贫、健康、教育、环境和社会发展设定共同的国际行动框架。"
        },
        {
            "start": "2002-07-01",
            "title": "国际刑事法院开始行使管辖权",
            "description": "国际刑事法院开始行使管辖权通过司法裁判重新解释法律，并改变政府或个人的权利边界。"
        },
        {
            "start": "2005",
            "title": "联合国世界首脑会议认可“保护责任”",
            "description": "联合国世界首脑会议认可“保护责任”建立跨国机构，用于协调安全、贸易、司法或共同政策。"
        },
        {
            "start": "2006",
            "title": "《残疾人权利公约》通过",
            "description": "《残疾人权利公约》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "2007",
            "title": "《联合国土著人民权利宣言》通过",
            "description": "《联合国土著人民权利宣言》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "2015",
            "title": "可持续发展目标通过",
            "description": "可持续发展目标通过为减贫、健康、教育、环境和社会发展设定共同的国际行动框架。"
        },
        {
            "start": "2015-12-12",
            "title": "《巴黎协定》通过",
            "description": "《巴黎协定》通过通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "2016",
            "title": "《巴黎协定》生效",
            "description": "《巴黎协定》生效通过正式制度安排确立新的治理规则或国际合作机制。"
        },
        {
            "start": "2018",
            "title": "《全球移民契约》通过",
            "description": "《全球移民契约》通过以正式文件规定国家关系、边界、权利或共同义务。"
        },
        {
            "start": "2021",
            "title": "《禁止核武器条约》生效",
            "description": "《禁止核武器条约》生效以正式文件规定国家关系、边界、权利或共同义务。"
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
            "description": "广岛原子弹爆炸展示了核武器的毁灭能力，并把核威慑与军备控制带入国际政治。"
        },
        {
            "start": "1945-08-09",
            "title": "长崎原子弹爆炸",
            "description": "长崎原子弹爆炸展示了核武器的毁灭能力，并把核威慑与军备控制带入国际政治。"
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "柏林封锁与空运",
            "description": "柏林封锁与空运造成安全与人道后果，并推动地区和国际力量重新调整政策。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "灾难日与巴勒斯坦人大规模流离失所",
            "description": "灾难日与巴勒斯坦人大规模流离失所造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "1953",
            "title": "斯大林去世与苏联领导层过渡",
            "description": "斯大林去世与苏联领导层过渡结束了一个政治时代，并触发领导层、制度或公众情绪的变化。"
        },
        {
            "start": "1954",
            "title": "布朗诉教育委员会案",
            "description": "布朗诉教育委员会案改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1955",
            "title": "蒙哥马利公交抵制运动",
            "description": "蒙哥马利公交抵制运动把社会诉求转化为大规模公共行动，并推动法律或政治回应。"
        },
        {
            "start": "1956",
            "title": "赫鲁晓夫秘密报告与去斯大林化",
            "description": "赫鲁晓夫秘密报告与去斯大林化改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1957",
            "title": "斯普特尼克开启太空时代",
            "description": "斯普特尼克开启太空时代展示了新的航天能力，并加速国家之间的科技竞争。"
        },
        {
            "start": "1959",
            "title": "达赖喇嘛离开西藏",
            "description": "达赖喇嘛离开西藏改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "柏林墙",
            "description": "柏林墙改变了当代政治、社会生活或国际关系的实际运行。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "不结盟运动成立",
            "description": "不结盟运动成立把社会诉求转化为大规模公共行动，并推动法律或政治回应。"
        },
        {
            "start": "1963-08-28",
            "title": "华盛顿大游行",
            "description": "华盛顿大游行把社会诉求转化为大规模公共行动，并推动法律或政治回应。"
        },
        {
            "start": "1963-11-22",
            "title": "约翰·F·肯尼迪遇刺",
            "description": "约翰·F·肯尼迪遇刺结束了一个政治时代，并触发领导层、制度或公众情绪的变化。"
        },
        {
            "start": "1964",
            "title": "中国首次核试验",
            "description": "中国首次核试验展示了核武器的毁灭能力，并把核威慑与军备控制带入国际政治。"
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "中国文化大革命",
            "description": "中国文化大革命改变了当代政治、社会生活或国际关系的实际运行。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "人类首次登月",
            "description": "人类首次登月展示了新的航天能力，并加速国家之间的科技竞争。"
        },
        {
            "start": "1971",
            "title": "中华人民共和国恢复联合国席位",
            "description": "中华人民共和国恢复联合国席位改变了相关国家或组织在国际体系中的地位和行动能力。"
        },
        {
            "start": "1972",
            "title": "中美关系缓和",
            "description": "中美关系缓和降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "1973",
            "title": "智利军事政变",
            "description": "智利军事政变改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1974",
            "title": "葡萄牙康乃馨革命",
            "description": "葡萄牙康乃馨革命改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1975",
            "title": "西贡陷落",
            "description": "西贡陷落改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1976",
            "title": "毛泽东去世与文革时代结束",
            "description": "毛泽东去世与文革时代结束结束了一个政治时代，并触发领导层、制度或公众情绪的变化。"
        },
        {
            "start": "1978",
            "title": "戴维营协议",
            "description": "戴维营协议降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "1979",
            "title": "埃以和平条约",
            "description": "埃以和平条约改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1979",
            "title": "苏联入侵阿富汗",
            "description": "苏联入侵阿富汗造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "1980",
            "title": "波兰团结工会成立",
            "description": "波兰团结工会成立改变了相关国家或组织在国际体系中的地位和行动能力。"
        },
        {
            "start": "1985",
            "title": "戈尔巴乔夫开始改革与公开性",
            "description": "戈尔巴乔夫开始改革与公开性改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1986",
            "title": "菲律宾人民力量革命",
            "description": "菲律宾人民力量革命改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1987",
            "title": "第一次巴勒斯坦大起义开始",
            "description": "第一次巴勒斯坦大起义开始改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1988",
            "title": "两伊停火",
            "description": "两伊停火改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1989-11-09",
            "title": "柏林墙倒塌",
            "description": "柏林墙倒塌改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1990",
            "title": "纳尔逊·曼德拉获释",
            "description": "纳尔逊·曼德拉获释改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1991",
            "title": "沙漠风暴行动",
            "description": "沙漠风暴行动改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1991",
            "title": "华沙条约组织解散",
            "description": "华沙条约组织解散改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1993",
            "title": "奥斯陆协议",
            "description": "奥斯陆协议降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "1994",
            "title": "卢旺达种族灭绝与国际社会失职",
            "description": "卢旺达种族灭绝与国际社会失职改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "1995",
            "title": "代顿协议结束波黑战争",
            "description": "代顿协议结束波黑战争造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "1997",
            "title": "亚洲金融危机蔓延",
            "description": "亚洲金融危机蔓延造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "1998",
            "title": "贝尔法斯特协议",
            "description": "贝尔法斯特协议降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "1999",
            "title": "北约干预科索沃",
            "description": "北约干预科索沃改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2000",
            "title": "第二次巴勒斯坦大起义开始",
            "description": "第二次巴勒斯坦大起义开始改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2001",
            "title": "九一一后北约启动第五条",
            "description": "九一一后北约启动第五条改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2003",
            "title": "全球反伊拉克战争抗议",
            "description": "全球反伊拉克战争抗议造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "2004",
            "title": "印度洋海啸引发全球人道响应",
            "description": "印度洋海啸引发全球人道响应改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2005",
            "title": "伦敦爆炸案",
            "description": "伦敦爆炸案改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2008",
            "title": "奥巴马当选美国首位非裔总统",
            "description": "奥巴马当选美国首位非裔总统改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2008",
            "title": "全球金融体系陷入严重危机",
            "description": "全球金融体系陷入严重危机造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "2010",
            "title": "海地地震引发大规模国际救援",
            "description": "海地地震引发大规模国际救援改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2011",
            "title": "福岛核事故重塑能源政策讨论",
            "description": "福岛核事故重塑能源政策讨论跨越国界冲击经济和社会运行，并迫使各国采取协调或应急政策。"
        },
        {
            "start": "2011",
            "title": "奥萨马·本·拉登被击毙",
            "description": "奥萨马·本·拉登被击毙改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2013",
            "title": "爱德华·斯诺登披露监控项目",
            "description": "爱德华·斯诺登披露监控项目改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2014",
            "title": "西非埃博拉紧急状态",
            "description": "西非埃博拉紧急状态改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2015",
            "title": "欧洲难民危机达到高峰",
            "description": "欧洲难民危机达到高峰造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "2015",
            "title": "伊朗核协议",
            "description": "伊朗核协议降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "2016",
            "title": "英国脱欧公投",
            "description": "英国脱欧公投改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2016",
            "title": "土耳其未遂政变",
            "description": "土耳其未遂政变改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2018",
            "title": "中美贸易冲突升级",
            "description": "中美贸易冲突升级改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2019",
            "title": "香港反修例抗议运动",
            "description": "香港反修例抗议运动把社会诉求转化为大规模公共行动，并推动法律或政治回应。"
        },
        {
            "start": "2020",
            "title": "世卫组织宣布新冠疫情构成全球大流行",
            "description": "世卫组织宣布新冠疫情构成全球大流行跨越国界冲击经济和社会运行，并迫使各国采取协调或应急政策。"
        },
        {
            "start": "2020",
            "title": "全球“黑人的命也是命”抗议",
            "description": "全球“黑人的命也是命”抗议把社会诉求转化为大规模公共行动，并推动法律或政治回应。"
        },
        {
            "start": "2020",
            "title": "亚伯拉罕协议",
            "description": "亚伯拉罕协议降低了部分对立，并建立新的外交或安全合作渠道。"
        },
        {
            "start": "2021",
            "title": "美国国会山袭击事件",
            "description": "美国国会山袭击事件改变了当代政治、社会生活或国际关系的实际运行。"
        },
        {
            "start": "2021",
            "title": "塔利班重新掌权阿富汗",
            "description": "塔利班重新掌权阿富汗改变了相关国家或组织在国际体系中的地位和行动能力。"
        },
        {
            "start": "2021",
            "title": "AUKUS安全伙伴关系宣布",
            "description": "AUKUS安全伙伴关系宣布扩大了军事合作范围，并改变相关地区的安全安排。"
        },
        {
            "start": "2022",
            "title": "俄罗斯入侵后全球流离失所及粮食能源冲击",
            "description": "俄罗斯入侵后全球流离失所及粮食能源冲击造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "2022",
            "title": "伊丽莎白二世去世",
            "description": "伊丽莎白二世去世结束了一个政治时代，并触发领导层、制度或公众情绪的变化。"
        },
        {
            "start": "2023",
            "title": "芬兰加入北约",
            "description": "芬兰加入北约扩大了军事合作范围，并改变相关地区的安全安排。"
        },
        {
            "start": "2023",
            "title": "以色列—哈马斯战争与地区人道危机",
            "description": "以色列—哈马斯战争与地区人道危机造成安全与人道后果，并推动地区和国际力量重新调整政策。"
        },
        {
            "start": "2024",
            "title": "瑞典加入北约",
            "description": "瑞典加入北约扩大了军事合作范围，并改变相关地区的安全安排。"
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
