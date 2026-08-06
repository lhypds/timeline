var title = "音乐时间线";

// 精选全球音乐史时间线。人物放在20岁那一年，团体放在成立年份；流派时期为编辑性的近似区间。
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// 全球音乐传统与长期时期
var tl_global_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "end": "-2999",
            "title": "公元前10000年以前的音乐深史与新石器仪式音乐",
            "description": "[Deep musical prehistory before 10,000 BCE and Neolithic ritual music]<br>SIMILE 无法表示公元前10000年以前的日期，因此将旧石器时代骨笛等最早证据压缩到此边界，并连接后续新石器时代仪式与共同体音乐。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "美索不达米亚神庙与宫廷音乐",
            "description": "[Mesopotamian temple and court music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "古埃及音乐",
            "description": "[Ancient Egyptian music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "古代中国青铜编钟与礼乐",
            "description": "[Bronze-bell and ritual music in ancient China]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "吠陀吟诵",
            "description": "[Vedic chant]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "古希腊音乐",
            "description": "[Ancient Greek music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "早期犹太礼仪音乐",
            "description": "[Early Jewish liturgical music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "罗马与古代晚期音乐",
            "description": "[Roman and late-antique music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "印度古典乐理论与拉格体系形成",
            "description": "[Formation of Indian classical theory and raga systems]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "拜占庭圣歌",
            "description": "[Byzantine chant]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "中国文人琴乐传统",
            "description": "[Chinese qin literati tradition]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "日本雅乐",
            "description": "[Japanese gagaku]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "阿拔斯时期阿拉伯与波斯宫廷音乐",
            "description": "[Abbasid-era Arabic and Persian court music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "爪哇与巴厘甘美兰传统",
            "description": "[Javanese and Balinese gamelan traditions]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "安达卢西亚古典音乐",
            "description": "[Andalusi classical music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "西非格里奥与科拉琴传统",
            "description": "[West African griot and kora traditions]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "卡瓦利与南亚苏菲音乐",
            "description": "[Qawwali and South Asian Sufi music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "中国戏曲音乐",
            "description": "[Chinese opera traditions]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "北印度古典音乐",
            "description": "[Hindustani classical music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "日本能乐",
            "description": "[Japanese Noh music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "奥斯曼古典音乐",
            "description": "[Ottoman classical music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "南印度古典音乐",
            "description": "[Carnatic classical music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "昆曲",
            "description": "[Kunqu opera]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "歌舞伎音乐",
            "description": "[Kabuki music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "弗拉门戈",
            "description": "[Flamenco]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "京剧",
            "description": "[Beijing opera]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "探戈形成与黄金时代",
            "description": "[Tango: formation and golden age]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "海莱夫音乐",
            "description": "[Highlife]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "桑巴",
            "description": "[Samba]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "华语流行音乐",
            "description": "[Mandopop and Chinese-language popular song]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "拉伊音乐",
            "description": "[Raï]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "演歌",
            "description": "[Enka]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "波萨诺瓦",
            "description": "[Bossa nova]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "新歌运动",
            "description": "[Nueva canción]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "萨尔萨经典时期",
            "description": "[Salsa: classic period]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "巴西流行音乐（MPB）",
            "description": "[Música popular brasileira (MPB)]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "非洲节拍",
            "description": "[Afrobeat]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "雷鬼",
            "description": "[Reggae]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "日本城市流行",
            "description": "[Japanese city pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "拉丁流行",
            "description": "[Latin pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "日本流行音乐（J-pop）",
            "description": "[J-pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "韩国流行音乐（K-pop）",
            "description": "[K-pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "非洲流行节拍（Afrobeats）",
            "description": "[Afrobeats]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "阿玛皮亚诺",
            "description": "[Amapiano]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        }
    ]
};

// 西方艺术音乐时期与思潮
var tl_classical_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "0500",
            "end": "1400",
            "title": "中世纪音乐",
            "description": "[Medieval music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "格里高利圣咏曲目体系",
            "description": "[Gregorian chant repertory]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "巴黎圣母院复调与古艺术",
            "description": "[Notre-Dame polyphony and Ars antiqua]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "新艺术",
            "description": "[Ars nova]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "文艺复兴音乐",
            "description": "[Renaissance music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "法兰德斯复调乐派",
            "description": "[Franco-Flemish polyphony]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "牧歌时期",
            "description": "[Madrigal era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "巴洛克音乐",
            "description": "[Baroque music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "早期歌剧与单声歌曲",
            "description": "[Early opera and monody]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "盛期巴洛克",
            "description": "[High Baroque]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "华丽风格",
            "description": "[Galant style]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "古典主义时期",
            "description": "[Classical period]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "音乐中的狂飙突进",
            "description": "[Sturm und Drang in music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "浪漫主义音乐",
            "description": "[Romantic music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "炫技演奏会文化",
            "description": "[Virtuoso concert culture]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "民族乐派",
            "description": "[Musical nationalism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "晚期浪漫主义",
            "description": "[Late Romanticism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "印象主义与音乐象征主义",
            "description": "[Impressionism and musical symbolism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "音乐现代主义",
            "description": "[Musical modernism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "表现主义与自由无调性",
            "description": "[Expressionism and free atonality]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "新古典主义",
            "description": "[Neoclassicism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "十二音技法与序列主义",
            "description": "[Serialism and twelve-tone composition]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "具体音乐与早期电子艺术音乐",
            "description": "[Musique concrète and early electronic art music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "战后先锋音乐",
            "description": "[Postwar avant-garde]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "极简主义与后极简主义",
            "description": "[Minimalism and post-minimalism]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "后现代与多风格主义作曲",
            "description": "[Postmodern and polystylistic composition]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "频谱音乐",
            "description": "[Spectral music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "新复杂主义",
            "description": "[New complexity]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "数字与多媒体艺术音乐",
            "description": "[Digital and multimedia art music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        }
    ]
};

// 流行、爵士、民间与电子音乐流派
var tl_popular_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1830",
            "end": "1920",
            "title": "美国黑脸歌舞秀时期",
            "description": "[Minstrelsy in the United States]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "非裔美国灵歌的演出与出版文化",
            "description": "[African American spirituals in concert and print culture]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "铜管乐队时代",
            "description": "[Brass-band era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "蓝调",
            "description": "[Blues]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "拉格泰姆",
            "description": "[Ragtime]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "乡村与旧时音乐",
            "description": "[Country and old-time music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "福音音乐",
            "description": "[Gospel music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "新奥尔良爵士",
            "description": "[New Orleans jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "叮砰巷歌曲时代",
            "description": "[Tin Pan Alley song era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "爵士",
            "description": "[Jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "经典蓝调与早期录音蓝调",
            "description": "[Classic blues and early recorded blues]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "低声吟唱歌手时代",
            "description": "[Crooner era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "大乐队爵士",
            "description": "[Big-band jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "电影音乐与原声文化",
            "description": "[Film music and soundtrack culture]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "摇摆乐时代",
            "description": "[Swing era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "西部摇摆",
            "description": "[Western swing]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "蓝草音乐",
            "description": "[Bluegrass]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "节奏布鲁斯",
            "description": "[Rhythm and blues]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "比博普",
            "description": "[Bebop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "冷爵士",
            "description": "[Cool jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "嘟喔普",
            "description": "[Doo-wop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "硬博普",
            "description": "[Hard bop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "酒馆乡村",
            "description": "[Honky-tonk country]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "摇滚乐",
            "description": "[Rock and roll]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "纳什维尔之声",
            "description": "[Nashville sound]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "灵魂乐",
            "description": "[Soul music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "调式爵士",
            "description": "[Modal jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "冲浪音乐",
            "description": "[Surf music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "自由爵士",
            "description": "[Free jazz]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "放克",
            "description": "[Funk]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "摩城之声",
            "description": "[Motown sound]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "英国入侵",
            "description": "[British Invasion]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "民谣摇滚",
            "description": "[Folk rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "车库摇滚",
            "description": "[Garage rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "迷幻摇滚",
            "description": "[Psychedelic rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "前卫摇滚",
            "description": "[Progressive rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "硬摇滚",
            "description": "[Hard rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "重金属",
            "description": "[Heavy metal]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "融合爵士",
            "description": "[Jazz fusion]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "回响音乐",
            "description": "[Dub]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "华丽摇滚",
            "description": "[Glam rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "叛逆乡村",
            "description": "[Outlaw country]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "创作歌手时代",
            "description": "[Singer-songwriter era]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "嘻哈",
            "description": "[Hip-hop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "迪斯科",
            "description": "[Disco]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "朋克摇滚",
            "description": "[Punk rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "氛围音乐",
            "description": "[Ambient music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "后朋克",
            "description": "[Post-punk]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "工业音乐",
            "description": "[Industrial music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "新浪潮",
            "description": "[New wave]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "哥特摇滚",
            "description": "[Gothic rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "老派嘻哈",
            "description": "[Old-school hip-hop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "舞厅雷鬼",
            "description": "[Dancehall]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "硬核朋克",
            "description": "[Hardcore punk]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "合成器流行",
            "description": "[Synth-pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "电音放克",
            "description": "[Electro]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "激流金属",
            "description": "[Thrash metal]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "另类摇滚",
            "description": "[Alternative rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "独立摇滚",
            "description": "[Indie rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "嘻哈黄金时代",
            "description": "[Golden-age hip-hop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "浩室音乐",
            "description": "[House music]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "匪帮说唱",
            "description": "[Gangsta rap]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "科技舞曲",
            "description": "[Techno]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "“世界音乐”市场类别",
            "description": "[World-music market category]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "自赏摇滚",
            "description": "[Shoegaze]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "另类嘻哈",
            "description": "[Alternative hip-hop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "舞曲流行",
            "description": "[Dance-pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "垃圾摇滚",
            "description": "[Grunge]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "新灵魂乐",
            "description": "[Neo-soul]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "迷幻舞曲",
            "description": "[Trance]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "英伦摇滚",
            "description": "[Britpop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "鼓打贝斯",
            "description": "[Drum and bass]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "后摇滚",
            "description": "[Post-rock]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "情绪摇滚前两波",
            "description": "[Emo: first and second waves]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "新金属",
            "description": "[Nu metal]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "电子舞曲音乐节文化",
            "description": "[Electronic dance music festival culture]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "陷阱说唱",
            "description": "[Trap]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "当代独立流行",
            "description": "[Contemporary indie pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "钻头说唱",
            "description": "[Drill]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "流媒体时代全球流行音乐",
            "description": "[Streaming-era global pop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "超流行",
            "description": "[Hyperpop]<br>用于表示该音乐传统形成、定型或历史影响最强阶段的近似时期。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// 乐器、声音技术与制作工具
var tl_instruments = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "公元前10000年以前的旧石器时代骨笛（压缩标记）",
            "description": "[Paleolithic bone flutes before 10,000 BCE (compressed marker)]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-7999",
            "title": "早期框鼓与摇响器",
            "description": "[Early frame drums and rattles]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-3499",
            "title": "美索不达米亚里拉与竖琴",
            "description": "[Mesopotamian lyres and harps]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-2999",
            "title": "埃及弓形竖琴",
            "description": "[Egyptian arched harps]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-2499",
            "title": "苏美尔牛首里拉",
            "description": "[Sumerian bull-headed lyres]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-1999",
            "title": "中国早期琴类弦乐器",
            "description": "[Early Chinese qin-type zithers]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-1499",
            "title": "东亚礼乐合奏中的青铜钟",
            "description": "[Bronze bells in East Asian ritual ensembles]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-1199",
            "title": "希腊世界的阿夫洛斯管与基萨拉琴",
            "description": "[Aulos and kithara in the Greek world]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-0999",
            "title": "笙的早期形态",
            "description": "[Early forms of the sheng mouth organ]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-0699",
            "title": "中国大型编钟",
            "description": "[Large Chinese bianzhong bell sets]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "-0499",
            "title": "水力管风琴",
            "description": "[Hydraulis water organ]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "0200",
            "title": "管风琴技术在罗马世界传播",
            "description": "[Organ technology spreads in the Roman world]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "0500",
            "title": "乌德琴家族发展",
            "description": "[Development of the oud family]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "0700",
            "title": "琵琶成为中国宫廷音乐核心乐器",
            "description": "[Pipa becomes central in Chinese court music]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "0800",
            "title": "日本雅乐中的笙",
            "description": "[Shō mouth organ in Japanese gagaku]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "0900",
            "title": "弓弦乐器拉巴卜传统扩展",
            "description": "[Bowed rebab traditions expand]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1000",
            "title": "中世纪欧洲竖琴与索尔特里琴",
            "description": "[Medieval European harp and psaltery]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1100",
            "title": "大型教堂管风琴发展",
            "description": "[Pipe organ develops large church forms]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1200",
            "title": "欧洲鲁特琴由乌德琴相关乐器发展",
            "description": "[European lute develops from oud-related instruments]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1200",
            "title": "西非科拉琴传统发展",
            "description": "[Kora traditions develop in West Africa]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1300",
            "title": "桑图尔与扬琴类乐器传播",
            "description": "[Santur and hammered-dulcimer families spread]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1400",
            "title": "击弦古钢琴进入欧洲键盘文化",
            "description": "[Clavichord enters European keyboard culture]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1450",
            "title": "羽管键琴家族发展",
            "description": "[Harpsichord family develops]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1500",
            "title": "维奥尔琴家族",
            "description": "[Viola da gamba family]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1520",
            "title": "现代小提琴家族在意大利北部形成",
            "description": "[Modern violin family emerges in northern Italy]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1550",
            "title": "西塔琴在北印度发展",
            "description": "[Sitar develops in North India]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1560",
            "title": "文艺复兴欧洲横笛改进",
            "description": "[Transverse flute redesign in Renaissance Europe]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1600",
            "title": "筝在日本艺术音乐中定型",
            "description": "[Koto becomes established in Japanese art music]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1600",
            "title": "三味线在日本传播",
            "description": "[Shamisen spreads in Japan]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1650",
            "title": "斯特拉迪瓦里与克雷莫纳制琴传统",
            "description": "[Stradivari and Cremonese violin making]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1680",
            "title": "单簧管由沙吕莫管发展",
            "description": "[Clarinet developed from the chalumeau]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1700",
            "title": "克里斯托福里研制钢琴",
            "description": "[Cristofori develops the piano]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1720",
            "title": "现存最早的克里斯托福里钢琴",
            "description": "[Earliest surviving Cristofori piano]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1730",
            "title": "现代双簧管与巴松体系定型",
            "description": "[Modern oboe and bassoon families stabilize]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1750",
            "title": "古典乐团弦乐声部趋于标准化",
            "description": "[Classical orchestra standardizes string sections]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1770",
            "title": "古钢琴成为音乐会与家庭主要乐器",
            "description": "[Fortepiano becomes a leading concert and domestic instrument]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1814",
            "title": "梅尔策尔为现代节拍器申请专利",
            "description": "[Mälzel patents the modern metronome]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1821",
            "title": "自由簧口琴发展",
            "description": "[Free-reed harmonica development]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1829",
            "title": "手风琴获得专利",
            "description": "[Accordion patented]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1830",
            "title": "双动踏板现代音乐会竖琴",
            "description": "[Modern concert harp with double-action pedals]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1832",
            "title": "贝姆式长笛开发开始",
            "description": "[Boehm-system flute development begins]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1835",
            "title": "大号获得专利",
            "description": "[Tuba patented]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1846",
            "title": "阿道夫·萨克斯为萨克斯管申请专利",
            "description": "[Saxophone patented by Adolphe Sax]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1850",
            "title": "现代音乐会三角钢琴结构定型",
            "description": "[Modern concert grand piano architecture consolidates]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1860",
            "title": "班多钮手风琴进入探戈文化",
            "description": "[Bandoneon enters tango culture]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1870",
            "title": "现代架子鼓组件开始整合",
            "description": "[Modern drum-kit components begin to combine]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1880",
            "title": "钢弦木吉他发展",
            "description": "[Steel-string acoustic guitar develops]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1890",
            "title": "为行进演奏开发苏萨号",
            "description": "[Sousaphone developed for marching performance]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1906",
            "title": "特尔哈莫尼姆公开演示",
            "description": "[Telharmonium public demonstrations]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1919",
            "title": "特雷门琴发明",
            "description": "[Theremin invented]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1924",
            "title": "电麦克风改变演出与录音",
            "description": "[Electric microphone transforms performance and recording]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1928",
            "title": "马特诺电子琴问世",
            "description": "[Ondes Martenot introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1931",
            "title": "商业电吉他出现",
            "description": "[Commercial electric guitar appears]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1934",
            "title": "哈蒙德风琴问世",
            "description": "[Hammond organ introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1935",
            "title": "德国磁带录音技术发展",
            "description": "[Magnetic tape recording advances in Germany]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1939",
            "title": "现代电贝司原型",
            "description": "[Modern electric bass prototypes]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1940",
            "title": "钢鼓在特立尼达和多巴哥发展",
            "description": "[Steelpan develops in Trinidad and Tobago]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1948",
            "title": "多轨录音实验",
            "description": "[Multitrack recording experiments]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1950",
            "title": "芬达Telecaster实心电吉他量产",
            "description": "[Fender Telecaster mass-produced solid-body guitar]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1951",
            "title": "芬达Precision Bass问世",
            "description": "[Fender Precision Bass introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1954",
            "title": "芬达Stratocaster问世",
            "description": "[Fender Stratocaster introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1957",
            "title": "RCA Mark II声音合成器",
            "description": "[RCA Mark II Sound Synthesizer]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1960",
            "title": "便携晶体管风琴与电键盘普及",
            "description": "[Portable transistor organs and electric keyboards spread]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1963",
            "title": "梅洛特朗问世",
            "description": "[Mellotron introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1964",
            "title": "穆格模块合成器演示",
            "description": "[Moog modular synthesizer demonstrated]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1965",
            "title": "失真等效果器重塑吉他音色",
            "description": "[Fuzz and effects pedals reshape guitar tone]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1970",
            "title": "Minimoog问世",
            "description": "[Minimoog introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1971",
            "title": "ARP 2600半模块合成器",
            "description": "[ARP 2600 semi-modular synthesizer]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1972",
            "title": "唱盘技术成为嘻哈创作乐器",
            "description": "[Turntable techniques become a compositional instrument in hip-hop]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1975",
            "title": "复音合成器广泛使用",
            "description": "[Polyphonic synthesizers enter wider use]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1979",
            "title": "Fairlight CMI采样工作站",
            "description": "[Fairlight CMI sampling workstation]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1980",
            "title": "Roland TR-808鼓机",
            "description": "[Roland TR-808 drum machine]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1981",
            "title": "Roland TB-303贝司合成器",
            "description": "[Roland TB-303 bass synthesizer]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1982",
            "title": "数字合成器进入大众市场",
            "description": "[Digital synthesizers enter the mass market]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1983",
            "title": "MIDI公开演示并标准化",
            "description": "[MIDI publicly demonstrated and standardized]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1983",
            "title": "雅马哈DX7问世",
            "description": "[Yamaha DX7 introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1984",
            "title": "平价数字采样器普及",
            "description": "[Affordable digital samplers spread]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1987",
            "title": "Akai MPC系列开始",
            "description": "[Akai MPC line begins]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1989",
            "title": "数字音频工作站出现",
            "description": "[Digital audio workstations emerge]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1997",
            "title": "Auto-Tune问世",
            "description": "[Auto-Tune introduced]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "1999",
            "title": "软件乐器与笔记本制作扩展",
            "description": "[Software instruments and laptop production expand]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "2001",
            "title": "Ableton Live发布",
            "description": "[Ableton Live released]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "2007",
            "title": "智能手机成为音乐制作与表演平台",
            "description": "[Smartphones become music-production and performance platforms]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "2010",
            "title": "平板乐器与触控界面普及",
            "description": "[Tablet instruments and touch interfaces spread]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        },
        {
            "start": "2020",
            "title": "疫情期间网络远程演奏工具扩展",
            "description": "[Networked remote performance tools expand during the pandemic]<br>乐器与声音工具在设计、传播、电气化或数字化方面的里程碑。"
        }
    ]
};

// 记谱、理论、制度与音乐产业
var tl_systems = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1399",
            "title": "胡里安赞歌泥板",
            "description": "[Hurrian hymn tablets]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "-0499",
            "title": "希腊和声理论发展",
            "description": "[Greek harmonic theory develops]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "-0299",
            "title": "中国律管与调式理论体系化",
            "description": "[Chinese pitch-pipe and modal theory codified]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "0100",
            "title": "塞基洛斯墓志铭保存完整古代记谱",
            "description": "[Seikilos epitaph preserves complete ancient notation]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "0200",
            "title": "《舞论》系统化南亚表演音乐理论",
            "description": "[Natya Shastra systematizes South Asian performance theory]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "0500",
            "title": "波爱修斯把古代音乐理论传入中世纪欧洲",
            "description": "[Boethius transmits ancient music theory to medieval Europe]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "0800",
            "title": "纽姆记谱在西方圣咏中传播",
            "description": "[Neumatic notation spreads in Western chant]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1025",
            "title": "圭多·达雷佐发展谱线教学法",
            "description": "[Guido of Arezzo develops staff-based pedagogy]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1250",
            "title": "定量记谱使节奏化复调成为可能",
            "description": "[Mensural notation enables measured polyphony]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1320",
            "title": "新艺术记谱扩展节奏可能性",
            "description": "[Ars nova notation expands rhythmic possibilities]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1450",
            "title": "乐谱抄写工坊扩大传播",
            "description": "[Music copying workshops expand manuscript circulation]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1501",
            "title": "佩特鲁奇出版重要复调印刷乐谱",
            "description": "[Petrucci publishes major collection of printed polyphonic music]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1558",
            "title": "扎利诺出版《和声论》",
            "description": "[Zarlino publishes Le istitutioni harmoniche]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1597",
            "title": "早期歌剧《达芙妮》上演",
            "description": "[Early opera Dafne produced]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1607",
            "title": "蒙特威尔第《奥菲欧》确立持久歌剧模式",
            "description": "[Monteverdi’s L’Orfeo establishes an enduring operatic model]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1637",
            "title": "威尼斯首座公共歌剧院开放",
            "description": "[First public opera house opens in Venice]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1669",
            "title": "巴黎歌剧院创立",
            "description": "[Paris Opera founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1672",
            "title": "伦敦持续性公共音乐会系列",
            "description": "[First sustained public concert series in London]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1710",
            "title": "雕版乐谱出版在欧洲扩展",
            "description": "[European music publishing expands through engraved editions]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1725",
            "title": "富克斯出版《通往帕纳索斯山的阶梯》",
            "description": "[Fux publishes Gradus ad Parnassum]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1750",
            "title": "公共音乐会文化在欧洲扩展",
            "description": "[Public concert culture expands across Europe]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1771",
            "title": "维也纳音乐家协会支持公共管弦音乐会",
            "description": "[Vienna Tonkünstler-Societät supports public orchestral concerts]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1795",
            "title": "巴黎音乐学院创立",
            "description": "[Paris Conservatoire founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1808",
            "title": "大型公共义演展示现代音乐会规模",
            "description": "[Large public benefit concert demonstrates modern concert scale]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1813",
            "title": "伦敦皇家爱乐协会成立",
            "description": "[Royal Philharmonic Society founded in London]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1824",
            "title": "贝多芬第九连接交响曲、合唱与公共人文主义",
            "description": "[Beethoven’s Ninth links symphony, chorus and public humanism]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1842",
            "title": "纽约爱乐乐团创立",
            "description": "[New York Philharmonic founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1843",
            "title": "莱比锡音乐学院创立",
            "description": "[Leipzig Conservatory founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1857",
            "title": "声波记录仪记录声波",
            "description": "[Phonautograph records sound waves]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1867",
            "title": "版权与表演权制度在欧洲扩展",
            "description": "[Copyright and performance-right systems expand in Europe]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1877",
            "title": "爱迪生用留声机演示录音与回放",
            "description": "[Edison demonstrates recording and playback with the phonograph]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1887",
            "title": "唱片式留声机系统获专利",
            "description": "[Gramophone disc system patented]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1891",
            "title": "卡内基音乐厅开幕",
            "description": "[Carnegie Hall opens]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1897",
            "title": "留声机公司成立",
            "description": "[Gramophone Company founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1901",
            "title": "胜利留声机公司成立",
            "description": "[Victor Talking Machine Company founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1906",
            "title": "Victrola将录音音乐带入家庭家具文化",
            "description": "[Victrola brings recorded music into domestic furniture culture]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1914",
            "title": "美国作曲家、作家与出版商协会成立",
            "description": "[ASCAP founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1920",
            "title": "商业广播开始重塑音乐听众",
            "description": "[Commercial radio broadcasting begins reshaping music audiences]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1925",
            "title": "电录音取代声学录音",
            "description": "[Electrical recording replaces acoustic recording]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1927",
            "title": "首部长篇同步有声电影推动银幕音乐",
            "description": "[First feature-length synchronized-sound film accelerates screen music]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1935",
            "title": "磁带录音在广播规模演示",
            "description": "[Magnetic tape recording demonstrated at broadcasting scale]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1936",
            "title": "《公告牌》发布重要流行音乐榜单",
            "description": "[Billboard publishes major popular-music charts]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1948",
            "title": "哥伦比亚推出33⅓转LP",
            "description": "[Columbia introduces the 33⅓ rpm LP]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1949",
            "title": "RCA推出45转单曲唱片",
            "description": "[RCA introduces the 45 rpm single]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1954",
            "title": "便携晶体管收音机扩大青年听众",
            "description": "[Portable transistor radio expands youth listening]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1958",
            "title": "格莱美奖制度建立",
            "description": "[First Grammy Awards cycle established]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1958",
            "title": "立体声LP成为商业标准",
            "description": "[Stereo LP becomes a commercial standard]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1962",
            "title": "盒式磁带问世",
            "description": "[Compact cassette introduced]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1964",
            "title": "穆格帮助确立电压控制电子制作",
            "description": "[Moog synthesizer helps establish voltage-controlled electronic production]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1967",
            "title": "《滚石》杂志创刊",
            "description": "[Rolling Stone magazine founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1979",
            "title": "索尼随身听使私人移动聆听成为主流",
            "description": "[Sony Walkman makes private mobile listening mainstream]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1981",
            "title": "MTV开播",
            "description": "[MTV launches]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1982",
            "title": "激光唱片商业发行",
            "description": "[Compact disc commercial launch]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1983",
            "title": "MIDI 1.0发布",
            "description": "[MIDI 1.0 published]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1985",
            "title": "家长提示争议改变音乐标签制度",
            "description": "[Parental Advisory controversy reshapes music labeling]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1988",
            "title": "数字音频磁带进入市场",
            "description": "[Digital audio tape enters the market]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1991",
            "title": "SoundScan改变排行榜统计",
            "description": "[SoundScan changes chart measurement]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1993",
            "title": "MP3标准与早期实现",
            "description": "[MPEG-1 Audio Layer III standard and early MP3 implementation]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1995",
            "title": "“.mp3”扩展名采用",
            "description": "[.mp3 file extension adopted]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "1999",
            "title": "Napster启动点对点音乐分享",
            "description": "[Napster launches peer-to-peer music sharing]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2001",
            "title": "iPod发布",
            "description": "[iPod launched]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2003",
            "title": "iTunes音乐商店上线",
            "description": "[iTunes Music Store launches]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2005",
            "title": "YouTube上线",
            "description": "[YouTube launches]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2007",
            "title": "SoundCloud创立",
            "description": "[SoundCloud founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2008",
            "title": "Bandcamp创立",
            "description": "[Bandcamp founded]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2008",
            "title": "Spotify上线",
            "description": "[Spotify launches]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2011",
            "title": "全球统一发行日机制逐步形成",
            "description": "[Global album-release day coordination begins evolving]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2015",
            "title": "星期五成为全球统一发行日",
            "description": "[Friday becomes the coordinated global release day]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2015",
            "title": "流媒体成为排行榜与认证体系核心",
            "description": "[Streaming becomes central to chart and certification systems]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2017",
            "title": "订阅流媒体成为唱片业增长核心",
            "description": "[Subscription streaming becomes the dominant growth engine of recorded music]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2020",
            "title": "新冠停演期间直播演唱会成为大众形式",
            "description": "[Livestream concerts become a mass format during COVID-19 closures]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        },
        {
            "start": "2023",
            "title": "生成式AI加剧关于作者权、训练数据与音乐劳动的争论",
            "description": "[Generative AI intensifies debates over authorship, training data and musical labor]<br>记谱、理论、演出制度、出版、广播或音乐产业的重要变化。"
        }
    ]
};

// 作曲家与艺术音乐革新者
var tl_classical_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0609",
            "title": "Sappho（630 BCE–c. 570 BCE）",
            "description": "[Sappho]<br>对古代与仪式音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "0497",
            "title": "Boethius（477–524）",
            "description": "[Boethius]<br>对中世纪音乐产生重要影响的理论家与音乐思想家。"
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen（1098–1179）",
            "description": "[Hildegard of Bingen]<br>对中世纪音乐产生重要影响的作曲家。"
        },
        {
            "start": "1170",
            "title": "Léonin（1150–1201）",
            "description": "[Léonin]<br>对中世纪音乐产生重要影响的作曲家。"
        },
        {
            "start": "1180",
            "title": "Pérotin（1160–1230）",
            "description": "[Pérotin]<br>对中世纪音乐产生重要影响的作曲家。"
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut（1300–1377）",
            "description": "[Guillaume de Machaut]<br>对中世纪音乐产生重要影响的作曲家。"
        },
        {
            "start": "1345",
            "title": "Francesco Landini（1325–1397）",
            "description": "[Francesco Landini]<br>对中世纪音乐产生重要影响的作曲家。"
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay（1397–1474）",
            "description": "[Guillaume Du Fay]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem（1410–1497）",
            "description": "[Johannes Ockeghem]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1470",
            "title": "Josquin des Prez（1450–1521）",
            "description": "[Josquin des Prez]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1510",
            "title": "Adrian Willaert（1490–1562）",
            "description": "[Adrian Willaert]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina（1525–1594）",
            "description": "[Giovanni Pierluigi da Palestrina]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso（1532–1594）",
            "description": "[Orlando di Lasso]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1560",
            "title": "William Byrd（1540–1623）",
            "description": "[William Byrd]<br>对文艺复兴音乐产生重要影响的作曲家。"
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi（1567–1643）",
            "description": "[Claudio Monteverdi]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi（1583–1643）",
            "description": "[Girolamo Frescobaldi]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz（1585–1672）",
            "description": "[Heinrich Schütz]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully（1632–1687）",
            "description": "[Jean-Baptiste Lully]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude（1637–1707）",
            "description": "[Dieterich Buxtehude]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli（1653–1713）",
            "description": "[Arcangelo Corelli]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1679",
            "title": "Henry Purcell（1659–1695）",
            "description": "[Henry Purcell]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti（1660–1725）",
            "description": "[Alessandro Scarlatti]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1688",
            "title": "François Couperin（1668–1733）",
            "description": "[François Couperin]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi（1678–1741）",
            "description": "[Antonio Vivaldi]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann（1681–1767）",
            "description": "[Georg Philipp Telemann]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau（1683–1764）",
            "description": "[Jean-Philippe Rameau]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti（1685–1757）",
            "description": "[Domenico Scarlatti]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1705",
            "title": "George Frideric Handel（1685–1759）",
            "description": "[George Frideric Handel]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach（1685–1750）",
            "description": "[Johann Sebastian Bach]<br>对巴洛克音乐产生重要影响的作曲家。"
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach（1714–1788）",
            "description": "[Carl Philipp Emanuel Bach]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck（1714–1787）",
            "description": "[Christoph Willibald Gluck]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1752",
            "title": "Joseph Haydn（1732–1809）",
            "description": "[Joseph Haydn]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini（1743–1805）",
            "description": "[Luigi Boccherini]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1770",
            "title": "Antonio Salieri（1750–1825）",
            "description": "[Antonio Salieri]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart（1756–1791）",
            "description": "[Wolfgang Amadeus Mozart]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven（1770–1827）",
            "description": "[Ludwig van Beethoven]<br>对古典主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini（1782–1840）",
            "description": "[Niccolò Paganini]<br>对浪漫主义音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber（1786–1826）",
            "description": "[Carl Maria von Weber]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini（1792–1868）",
            "description": "[Gioachino Rossini]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1817",
            "title": "Franz Schubert（1797–1828）",
            "description": "[Franz Schubert]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1823",
            "title": "Hector Berlioz（1803–1869）",
            "description": "[Hector Berlioz]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka（1804–1857）",
            "description": "[Mikhail Glinka]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn（1809–1847）",
            "description": "[Felix Mendelssohn]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin（1810–1849）",
            "description": "[Frédéric Chopin]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1830",
            "title": "Robert Schumann（1810–1856）",
            "description": "[Robert Schumann]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1831",
            "title": "Franz Liszt（1811–1886）",
            "description": "[Franz Liszt]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi（1813–1901）",
            "description": "[Giuseppe Verdi]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1833",
            "title": "Richard Wagner（1813–1883）",
            "description": "[Richard Wagner]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1839",
            "title": "Clara Schumann（1819–1896）",
            "description": "[Clara Schumann]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach（1819–1880）",
            "description": "[Jacques Offenbach]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1844",
            "title": "Anton Bruckner（1824–1896）",
            "description": "[Anton Bruckner]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana（1824–1884）",
            "description": "[Bedřich Smetana]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1845",
            "title": "Johann Strauss II（1825–1899）",
            "description": "[Johann Strauss II]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1853",
            "title": "Johannes Brahms（1833–1897）",
            "description": "[Johannes Brahms]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns（1835–1921）",
            "description": "[Camille Saint-Saëns]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1858",
            "title": "Georges Bizet（1838–1875）",
            "description": "[Georges Bizet]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky（1839–1881）",
            "description": "[Modest Mussorgsky]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky（1840–1893）",
            "description": "[Pyotr Ilyich Tchaikovsky]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák（1841–1904）",
            "description": "[Antonín Dvořák]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1863",
            "title": "Edvard Grieg（1843–1907）",
            "description": "[Edvard Grieg]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov（1844–1908）",
            "description": "[Nikolai Rimsky-Korsakov]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré（1845–1924）",
            "description": "[Gabriel Fauré]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini（1858–1924）",
            "description": "[Giacomo Puccini]<br>对歌剧产生重要影响的作曲家。"
        },
        {
            "start": "1880",
            "title": "Gustav Mahler（1860–1911）",
            "description": "[Gustav Mahler]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1882",
            "title": "Claude Debussy（1862–1918）",
            "description": "[Claude Debussy]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1884",
            "title": "Richard Strauss（1864–1949）",
            "description": "[Richard Strauss]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1885",
            "title": "Jean Sibelius（1865–1957）",
            "description": "[Jean Sibelius]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1886",
            "title": "Erik Satie（1866–1925）",
            "description": "[Erik Satie]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams（1872–1958）",
            "description": "[Ralph Vaughan Williams]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff（1873–1943）",
            "description": "[Sergei Rachmaninoff]<br>对浪漫主义音乐产生重要影响的作曲家。"
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg（1874–1951）",
            "description": "[Arnold Schoenberg]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1894",
            "title": "Gustav Holst（1874–1934）",
            "description": "[Gustav Holst]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1895",
            "title": "Maurice Ravel（1875–1937）",
            "description": "[Maurice Ravel]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1901",
            "title": "Béla Bartók（1881–1945）",
            "description": "[Béla Bartók]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky（1882–1971）",
            "description": "[Igor Stravinsky]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1903",
            "title": "Anton Webern（1883–1945）",
            "description": "[Anton Webern]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1905",
            "title": "Alban Berg（1885–1935）",
            "description": "[Alban Berg]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev（1891–1953）",
            "description": "[Sergei Prokofiev]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1912",
            "title": "Arthur Honegger（1892–1955）",
            "description": "[Arthur Honegger]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1912",
            "title": "Darius Milhaud（1892–1974）",
            "description": "[Darius Milhaud]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1915",
            "title": "Carl Orff（1895–1982）",
            "description": "[Carl Orff]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1915",
            "title": "Paul Hindemith（1895–1963）",
            "description": "[Paul Hindemith]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1918",
            "title": "George Gershwin（1898–1937）",
            "description": "[George Gershwin]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1920",
            "title": "Aaron Copland（1900–1990）",
            "description": "[Aaron Copland]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich（1906–1975）",
            "description": "[Dmitri Shostakovich]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen（1908–1992）",
            "description": "[Olivier Messiaen]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1932",
            "title": "John Cage（1912–1992）",
            "description": "[John Cage]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1933",
            "title": "Benjamin Britten（1913–1976）",
            "description": "[Benjamin Britten]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein（1918–1990）",
            "description": "[Leonard Bernstein]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1943",
            "title": "György Ligeti（1923–2006）",
            "description": "[György Ligeti]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1945",
            "title": "Pierre Boulez（1925–2016）",
            "description": "[Pierre Boulez]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen（1928–2007）",
            "description": "[Karlheinz Stockhausen]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu（1930–1996）",
            "description": "[Tōru Takemitsu]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1955",
            "title": "Arvo Pärt（born 1935）",
            "description": "[Arvo Pärt]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1956",
            "title": "Steve Reich（born 1936）",
            "description": "[Steve Reich]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1957",
            "title": "Philip Glass（born 1937）",
            "description": "[Philip Glass]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1967",
            "title": "John Adams（born 1947）",
            "description": "[John Adams]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho（1952–2023）",
            "description": "[Kaija Saariaho]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1977",
            "title": "Tan Dun（born 1957）",
            "description": "[Tan Dun]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        },
        {
            "start": "1981",
            "title": "Unsuk Chin（born 1961）",
            "description": "[Unsuk Chin]<br>对现代与当代艺术音乐产生重要影响的作曲家。"
        }
    ]
};

// 蓝调、爵士、福音、R&B、灵魂与放克人物
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin（1868–1917）",
            "description": "[Scott Joplin]<br>对爵士产生重要影响的作曲家。"
        },
        {
            "start": "1893",
            "title": "W. C. Handy（1873–1958）",
            "description": "[W. C. Handy]<br>对蓝调产生重要影响的作曲家。"
        },
        {
            "start": "1906",
            "title": "Ma Rainey（1886–1939）",
            "description": "[Ma Rainey]<br>对蓝调产生重要影响的歌手。"
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton（1890–1941）",
            "description": "[Jelly Roll Morton]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1914",
            "title": "Bessie Smith（1894–1937）",
            "description": "[Bessie Smith]<br>对蓝调产生重要影响的歌手。"
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson（1897–1952）",
            "description": "[Fletcher Henderson]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford（1897–1952）",
            "description": "[Jimmie Lunceford]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1917",
            "title": "Sidney Bechet（1897–1959）",
            "description": "[Sidney Bechet]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1919",
            "title": "Duke Ellington（1899–1974）",
            "description": "[Duke Ellington]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1921",
            "title": "Louis Armstrong（1901–1971）",
            "description": "[Louis Armstrong]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke（1903–1931）",
            "description": "[Bix Beiderbecke]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins（1904–1969）",
            "description": "[Coleman Hawkins]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1924",
            "title": "Count Basie（1904–1984）",
            "description": "[Count Basie]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1924",
            "title": "Fats Waller（1904–1943）",
            "description": "[Fats Waller]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1929",
            "title": "Art Tatum（1909–1956）",
            "description": "[Art Tatum]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1930",
            "title": "Django Reinhardt（1910–1953）",
            "description": "[Django Reinhardt]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf（1910–1976）",
            "description": "[Howlin’ Wolf]<br>对蓝调产生重要影响的歌手。"
        },
        {
            "start": "1930",
            "title": "T-Bone Walker（1910–1975）",
            "description": "[T-Bone Walker]<br>对蓝调产生重要影响的器乐演奏家。"
        },
        {
            "start": "1931",
            "title": "Robert Johnson（1911–1938）",
            "description": "[Robert Johnson]<br>对蓝调产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1933",
            "title": "Muddy Waters（1913–1983）",
            "description": "[Muddy Waters]<br>对蓝调产生重要影响的歌手。"
        },
        {
            "start": "1935",
            "title": "Billie Holiday（1915–1959）",
            "description": "[Billie Holiday]<br>对爵士产生重要影响的歌手。"
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe（1915–1973）",
            "description": "[Sister Rosetta Tharpe]<br>对福音音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1936",
            "title": "Charlie Christian（1916–1942）",
            "description": "[Charlie Christian]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie（1917–1993）",
            "description": "[Dizzy Gillespie]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald（1917–1996）",
            "description": "[Ella Fitzgerald]<br>对爵士产生重要影响的歌手。"
        },
        {
            "start": "1937",
            "title": "Thelonious Monk（1917–1982）",
            "description": "[Thelonious Monk]<br>对爵士产生重要影响的作曲家。"
        },
        {
            "start": "1940",
            "title": "Charlie Parker（1920–1955）",
            "description": "[Charlie Parker]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1940",
            "title": "Dave Brubeck（1920–2012）",
            "description": "[Dave Brubeck]<br>对爵士产生重要影响的作曲家。"
        },
        {
            "start": "1942",
            "title": "Charles Mingus（1922–1979）",
            "description": "[Charles Mingus]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1944",
            "title": "Bud Powell（1924–1966）",
            "description": "[Bud Powell]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan（1924–1990）",
            "description": "[Sarah Vaughan]<br>对爵士产生重要影响的歌手。"
        },
        {
            "start": "1945",
            "title": "B. B. King（1925–2015）",
            "description": "[B. B. King]<br>对蓝调产生重要影响的器乐演奏家。"
        },
        {
            "start": "1946",
            "title": "John Coltrane（1926–1967）",
            "description": "[John Coltrane]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1946",
            "title": "Miles Davis（1926–1991）",
            "description": "[Miles Davis]<br>对爵士产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1949",
            "title": "Bill Evans（1929–1980）",
            "description": "[Bill Evans]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1949",
            "title": "Cecil Taylor（1929–2018）",
            "description": "[Cecil Taylor]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1949",
            "title": "Chet Baker（1929–1988）",
            "description": "[Chet Baker]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1950",
            "title": "Clifford Brown（1930–1986）",
            "description": "[Clifford Brown]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1950",
            "title": "Ornette Coleman（1930–2015）",
            "description": "[Ornette Coleman]<br>对爵士产生重要影响的作曲家。"
        },
        {
            "start": "1950",
            "title": "Ray Charles（1930–2004）",
            "description": "[Ray Charles]<br>对节奏布鲁斯产生重要影响的歌手。"
        },
        {
            "start": "1950",
            "title": "Sonny Rollins（born 1930）",
            "description": "[Sonny Rollins]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1951",
            "title": "Sam Cooke（1931–1964）",
            "description": "[Sam Cooke]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1953",
            "title": "James Brown（1933–2006）",
            "description": "[James Brown]<br>对放克产生重要影响的歌手。"
        },
        {
            "start": "1953",
            "title": "Nina Simone（1933–2006）",
            "description": "[Nina Simone]<br>对爵士产生重要影响的歌手。"
        },
        {
            "start": "1953",
            "title": "Wayne Shorter（1933–2023）",
            "description": "[Wayne Shorter]<br>对爵士产生重要影响的作曲家。"
        },
        {
            "start": "1959",
            "title": "Marvin Gaye（1939–1984）",
            "description": "[Marvin Gaye]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1960",
            "title": "Herbie Hancock（born 1940）",
            "description": "[Herbie Hancock]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1961",
            "title": "Chick Corea（1941–2021）",
            "description": "[Chick Corea]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1961",
            "title": "George Clinton（born 1941）",
            "description": "[George Clinton]<br>对放克产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1961",
            "title": "Otis Redding（1941–1967）",
            "description": "[Otis Redding]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1962",
            "title": "Aretha Franklin（1942–2018）",
            "description": "[Aretha Franklin]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield（1942–1999）",
            "description": "[Curtis Mayfield]<br>对灵魂乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1963",
            "title": "Sly Stone（born 1943）",
            "description": "[Sly Stone]<br>对放克产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1965",
            "title": "Keith Jarrett（born 1945）",
            "description": "[Keith Jarrett]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1966",
            "title": "Al Green（born 1946）",
            "description": "[Al Green]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1970",
            "title": "Stevie Wonder（born 1950）",
            "description": "[Stevie Wonder]<br>对灵魂乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1974",
            "title": "Pat Metheny（born 1954）",
            "description": "[Pat Metheny]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1978",
            "title": "Prince（1958–2016）",
            "description": "[Prince]<br>对放克产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis（born 1961）",
            "description": "[Wynton Marsalis]<br>对爵士产生重要影响的器乐演奏家。"
        },
        {
            "start": "1991",
            "title": "Erykah Badu（born 1971）",
            "description": "[Erykah Badu]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "1994",
            "title": "D’Angelo（born 1974）",
            "description": "[D’Angelo]<br>对灵魂乐产生重要影响的歌手。"
        },
        {
            "start": "2001",
            "title": "Beyoncé（born 1981）",
            "description": "[Beyoncé]<br>对节奏布鲁斯产生重要影响的歌手。"
        },
        {
            "start": "2003",
            "title": "Amy Winehouse（1983–2011）",
            "description": "[Amy Winehouse]<br>对灵魂乐产生重要影响的歌手。"
        }
    ]
};

// 摇滚、流行、乡村、嘻哈与电子音乐人物
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers（1897–1933）",
            "description": "[Jimmie Rodgers]<br>对乡村与根源音乐产生重要影响的歌手。"
        },
        {
            "start": "1931",
            "title": "Bill Monroe（1911–1996）",
            "description": "[Bill Monroe]<br>对乡村与根源音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1932",
            "title": "Woody Guthrie（1912–1967）",
            "description": "[Woody Guthrie]<br>对民谣与创作歌手音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1935",
            "title": "Frank Sinatra（1915–1998）",
            "description": "[Frank Sinatra]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1935",
            "title": "Édith Piaf（1915–1963）",
            "description": "[Édith Piaf]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1939",
            "title": "Nat King Cole（1919–1965）",
            "description": "[Nat King Cole]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1939",
            "title": "Pete Seeger（1919–2014）",
            "description": "[Pete Seeger]<br>对民谣与创作歌手音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1943",
            "title": "Hank Williams（1923–1953）",
            "description": "[Hank Williams]<br>对乡村与根源音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1946",
            "title": "Chuck Berry（1926–2017）",
            "description": "[Chuck Berry]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1948",
            "title": "Bo Diddley（1928–2008）",
            "description": "[Bo Diddley]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1948",
            "title": "Fats Domino（1928–2017）",
            "description": "[Fats Domino]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1952",
            "title": "Johnny Cash（1932–2003）",
            "description": "[Johnny Cash]<br>对乡村与根源音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1952",
            "title": "Little Richard（1932–2020）",
            "description": "[Little Richard]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1952",
            "title": "Patsy Cline（1932–1963）",
            "description": "[Patsy Cline]<br>对乡村与根源音乐产生重要影响的歌手。"
        },
        {
            "start": "1953",
            "title": "Willie Nelson（born 1933）",
            "description": "[Willie Nelson]<br>对乡村与根源音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1954",
            "title": "Leonard Cohen（1934–2016）",
            "description": "[Leonard Cohen]<br>对民谣与创作歌手音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1954",
            "title": "The Isley Brothers 成立",
            "description": "[The Isley Brothers formed]<br>具有重要影响的节奏布鲁斯团体成立。"
        },
        {
            "start": "1955",
            "title": "Elvis Presley（1935–1977）",
            "description": "[Elvis Presley]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis（1935–2022）",
            "description": "[Jerry Lee Lewis]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1956",
            "title": "Buddy Holly（1936–1959）",
            "description": "[Buddy Holly]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1956",
            "title": "Roy Orbison（1936–1988）",
            "description": "[Roy Orbison]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1957",
            "title": "The Supremes 成立",
            "description": "[The Supremes formed]<br>具有重要影响的灵魂乐团体成立。"
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder（born 1940）",
            "description": "[Giorgio Moroder]<br>对电子音乐产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1960",
            "title": "John Lennon（1940–1980）",
            "description": "[John Lennon]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1960",
            "title": "Ringo Starr（born 1940）",
            "description": "[Ringo Starr]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1960",
            "title": "The Beatles 成立",
            "description": "[The Beatles formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1961",
            "title": "Bob Dylan（born 1941）",
            "description": "[Bob Dylan]<br>对民谣与创作歌手音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1961",
            "title": "Joan Baez（born 1941）",
            "description": "[Joan Baez]<br>对民谣与创作歌手音乐产生重要影响的歌手。"
        },
        {
            "start": "1961",
            "title": "The Beach Boys 成立",
            "description": "[The Beach Boys formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1962",
            "title": "Barbra Streisand（born 1942）",
            "description": "[Barbra Streisand]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1962",
            "title": "Brian Wilson（born 1942）",
            "description": "[Brian Wilson]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1962",
            "title": "Carole King（born 1942）",
            "description": "[Carole King]<br>对流行音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix（1942–1970）",
            "description": "[Jimi Hendrix]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1962",
            "title": "Paul McCartney（born 1942）",
            "description": "[Paul McCartney]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1962",
            "title": "The Rolling Stones 成立",
            "description": "[The Rolling Stones formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1963",
            "title": "George Harrison（1943–2001）",
            "description": "[George Harrison]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1963",
            "title": "Janis Joplin（1943–1970）",
            "description": "[Janis Joplin]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1963",
            "title": "Jim Morrison（1943–1971）",
            "description": "[Jim Morrison]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1963",
            "title": "Joni Mitchell（born 1943）",
            "description": "[Joni Mitchell]<br>对民谣与创作歌手音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1963",
            "title": "Keith Richards（born 1943）",
            "description": "[Keith Richards]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1963",
            "title": "Mick Jagger（born 1943）",
            "description": "[Mick Jagger]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1964",
            "title": "Jimmy Page（born 1944）",
            "description": "[Jimmy Page]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1964",
            "title": "The Who 成立",
            "description": "[The Who formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1965",
            "title": "Debbie Harry（born 1945）",
            "description": "[Debbie Harry]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1965",
            "title": "Eric Clapton（born 1945）",
            "description": "[Eric Clapton]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister（1945–2015）",
            "description": "[Lemmy Kilmister]<br>对重金属产生重要影响的歌手。"
        },
        {
            "start": "1965",
            "title": "Pink Floyd 成立",
            "description": "[Pink Floyd formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1965",
            "title": "The Doors 成立",
            "description": "[The Doors formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1966",
            "title": "Dolly Parton（born 1946）",
            "description": "[Dolly Parton]<br>对乡村与根源音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1966",
            "title": "Freddie Mercury（1946–1991）",
            "description": "[Freddie Mercury]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1966",
            "title": "Patti Smith（born 1946）",
            "description": "[Patti Smith]<br>对朋克与另类摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1966",
            "title": "The Velvet Underground 成立",
            "description": "[The Velvet Underground formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1967",
            "title": "Brian May（born 1947）",
            "description": "[Brian May]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1967",
            "title": "Carlos Santana（born 1947）",
            "description": "[Carlos Santana]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1967",
            "title": "David Bowie（1947–2016）",
            "description": "[David Bowie]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1967",
            "title": "Elton John（born 1947）",
            "description": "[Elton John]<br>对流行音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1967",
            "title": "Iggy Pop（born 1947）",
            "description": "[Iggy Pop]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1968",
            "title": "Black Sabbath 成立",
            "description": "[Black Sabbath formed]<br>具有重要影响的重金属团体成立。"
        },
        {
            "start": "1968",
            "title": "Brian Eno（born 1948）",
            "description": "[Brian Eno]<br>对电子音乐产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre（born 1948）",
            "description": "[Jean-Michel Jarre]<br>对电子音乐产生重要影响的作曲家。"
        },
        {
            "start": "1968",
            "title": "Led Zeppelin 成立",
            "description": "[Led Zeppelin formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne（born 1948）",
            "description": "[Ozzy Osbourne]<br>对重金属产生重要影响的歌手。"
        },
        {
            "start": "1968",
            "title": "Robert Plant（born 1948）",
            "description": "[Robert Plant]<br>对摇滚产生重要影响的歌手。"
        },
        {
            "start": "1968",
            "title": "Stevie Nicks（born 1948）",
            "description": "[Stevie Nicks]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1968",
            "title": "Tony Iommi（born 1948）",
            "description": "[Tony Iommi]<br>对重金属产生重要影响的器乐演奏家。"
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen（born 1949）",
            "description": "[Bruce Springsteen]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1970",
            "title": "Kraftwerk 成立",
            "description": "[Kraftwerk formed]<br>具有重要影响的电子音乐团体成立。"
        },
        {
            "start": "1970",
            "title": "Peter Gabriel（born 1950）",
            "description": "[Peter Gabriel]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1970",
            "title": "Queen 成立",
            "description": "[Queen formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1970",
            "title": "Tom Petty（1950–2017）",
            "description": "[Tom Petty]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1971",
            "title": "Eagles 成立",
            "description": "[Eagles formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1971",
            "title": "Joey Ramone（1951–2001）",
            "description": "[Joey Ramone]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1972",
            "title": "David Byrne（born 1952）",
            "description": "[David Byrne]<br>对朋克与另类摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1974",
            "title": "Ramones 成立",
            "description": "[Ramones formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc（born 1955）",
            "description": "[DJ Kool Herc]<br>对嘻哈产生重要影响的DJ与音乐革新者。"
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen（1955–2020）",
            "description": "[Eddie Van Halen]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1975",
            "title": "Sex Pistols 成立",
            "description": "[Sex Pistols formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1976",
            "title": "Johnny Rotten（born 1956）",
            "description": "[Johnny Rotten]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1976",
            "title": "Joy Division 成立",
            "description": "[Joy Division formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1976",
            "title": "The Clash 成立",
            "description": "[The Clash formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1976",
            "title": "U2 成立",
            "description": "[U2 formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa（born 1957）",
            "description": "[Afrika Bambaataa]<br>对嘻哈产生重要影响的DJ与音乐革新者。"
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux（born 1957）",
            "description": "[Siouxsie Sioux]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1977",
            "title": "Talking Heads 成立",
            "description": "[Talking Heads formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash（born 1958）",
            "description": "[Grandmaster Flash]<br>对嘻哈产生重要影响的DJ与音乐革新者。"
        },
        {
            "start": "1978",
            "title": "Kate Bush（born 1958）",
            "description": "[Kate Bush]<br>对流行音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1978",
            "title": "Madonna（born 1958）",
            "description": "[Madonna]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1978",
            "title": "Michael Jackson（1958–2009）",
            "description": "[Michael Jackson]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1978",
            "title": "The Cure 成立",
            "description": "[The Cure formed]<br>具有重要影响的朋克与另类摇滚团体成立。"
        },
        {
            "start": "1979",
            "title": "Morrissey（born 1959）",
            "description": "[Morrissey]<br>对朋克与另类摇滚产生重要影响的歌手。"
        },
        {
            "start": "1979",
            "title": "Robert Smith（born 1959）",
            "description": "[Robert Smith]<br>对朋克与另类摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1980",
            "title": "Chuck D（born 1960）",
            "description": "[Chuck D]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1981",
            "title": "Metallica 成立",
            "description": "[Metallica formed]<br>具有重要影响的重金属团体成立。"
        },
        {
            "start": "1983",
            "title": "George Michael（born 1963）",
            "description": "[George Michael]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1983",
            "title": "James Hetfield（born 1963）",
            "description": "[James Hetfield]<br>对重金属产生重要影响的歌手。"
        },
        {
            "start": "1983",
            "title": "Johnny Marr（born 1963）",
            "description": "[Johnny Marr]<br>对朋克与另类摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1983",
            "title": "Lars Ulrich（born 1963）",
            "description": "[Lars Ulrich]<br>对重金属产生重要影响的器乐演奏家。"
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. 成立",
            "description": "[Run-D.M.C. formed]<br>具有重要影响的嘻哈团体成立。"
        },
        {
            "start": "1983",
            "title": "Whitney Houston（born 1963）",
            "description": "[Whitney Houston]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1985",
            "title": "Björk（born 1965）",
            "description": "[Björk]<br>对电子音乐产生重要影响的歌手。"
        },
        {
            "start": "1985",
            "title": "Dr. Dre（born 1965）",
            "description": "[Dr. Dre]<br>对嘻哈产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1985",
            "title": "KRS-One（born 1965）",
            "description": "[KRS-One]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1985",
            "title": "Radiohead 成立",
            "description": "[Radiohead formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1986",
            "title": "Janet Jackson（born 1966）",
            "description": "[Janet Jackson]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1987",
            "title": "Kurt Cobain（1967–1994）",
            "description": "[Kurt Cobain]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1987",
            "title": "Nirvana 成立",
            "description": "[Nirvana formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest 成立",
            "description": "[A Tribe Called Quest formed]<br>具有重要影响的嘻哈团体成立。"
        },
        {
            "start": "1988",
            "title": "Celine Dion（born 1968）",
            "description": "[Celine Dion]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1988",
            "title": "LL Cool J（born 1968）",
            "description": "[LL Cool J]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1988",
            "title": "Massive Attack 成立",
            "description": "[Massive Attack formed]<br>具有重要影响的电子音乐团体成立。"
        },
        {
            "start": "1988",
            "title": "Rakim（born 1968）",
            "description": "[Rakim]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1988",
            "title": "Thom Yorke（born 1968）",
            "description": "[Thom Yorke]<br>对摇滚产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1989",
            "title": "Dave Grohl（born 1969）",
            "description": "[Dave Grohl]<br>对摇滚产生重要影响的器乐演奏家。"
        },
        {
            "start": "1989",
            "title": "Ice Cube（born 1969）",
            "description": "[Ice Cube]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1989",
            "title": "Jay-Z（born 1969）",
            "description": "[Jay-Z]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1989",
            "title": "Mariah Carey（born 1969）",
            "description": "[Mariah Carey]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "1991",
            "title": "Aphex Twin（born 1971）",
            "description": "[Aphex Twin]<br>对电子音乐产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1991",
            "title": "Missy Elliott（born 1971）",
            "description": "[Missy Elliott]<br>对嘻哈产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1991",
            "title": "Oasis 成立",
            "description": "[Oasis formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1991",
            "title": "Tupac Shakur（1971–1996）",
            "description": "[Tupac Shakur]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1992",
            "title": "Eminem（born 1972）",
            "description": "[Eminem]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G.（1972–1997）",
            "description": "[The Notorious B.I.G.]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1993",
            "title": "Daft Punk 成立",
            "description": "[Daft Punk formed]<br>具有重要影响的电子音乐团体成立。"
        },
        {
            "start": "1993",
            "title": "Nas（born 1973）",
            "description": "[Nas]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1995",
            "title": "Lauryn Hill（born 1975）",
            "description": "[Lauryn Hill]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "1995",
            "title": "M.I.A.（born 1975）",
            "description": "[M.I.A.]<br>对电子音乐产生重要影响的歌手。"
        },
        {
            "start": "1995",
            "title": "The White Stripes 成立",
            "description": "[The White Stripes formed]<br>具有重要影响的摇滚团体成立。"
        },
        {
            "start": "1997",
            "title": "Kanye West（born 1977）",
            "description": "[Kanye West]<br>对嘻哈产生重要影响的制作人与音乐家。"
        },
        {
            "start": "2002",
            "title": "Nicki Minaj（born 1982）",
            "description": "[Nicki Minaj]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "2006",
            "title": "Lady Gaga（born 1986）",
            "description": "[Lady Gaga]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar（born 1987）",
            "description": "[Kendrick Lamar]<br>对嘻哈产生重要影响的歌手。"
        },
        {
            "start": "2008",
            "title": "Adele（born 1988）",
            "description": "[Adele]<br>对流行音乐产生重要影响的歌手。"
        },
        {
            "start": "2009",
            "title": "Taylor Swift（born 1989）",
            "description": "[Taylor Swift]<br>对流行音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "2021",
            "title": "Billie Eilish（born 2001）",
            "description": "[Billie Eilish]<br>对流行音乐产生重要影响的歌手。"
        }
    ]
};

// 全球与区域音乐人物
var tl_global_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1273",
            "title": "Amir Khusrau（1253–1325）",
            "description": "[Amir Khusrau]<br>对南亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1520",
            "title": "Tansen（1500–1586）",
            "description": "[Tansen]<br>对南亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu（1536–1611）",
            "description": "[Zhu Zaiyu]<br>对东亚音乐产生重要影响的理论家与音乐思想家。"
        },
        {
            "start": "1782",
            "title": "Syama Sastri（1762–1827）",
            "description": "[Syama Sastri]<br>对南亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1787",
            "title": "Tyagaraja（1767–1847）",
            "description": "[Tyagaraja]<br>对南亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar（1775–1835）",
            "description": "[Muthuswami Dikshitar]<br>对南亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing)（1889–1935）",
            "description": "[Hua Yanjun (Abing)]<br>对东亚音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1910",
            "title": "Carlos Gardel（1890–1935）",
            "description": "[Carlos Gardel]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1915",
            "title": "Liu Tianhua（1895–1932）",
            "description": "[Liu Tianhua]<br>对东亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1918",
            "title": "Umm Kulthum（1898–1975）",
            "description": "[Umm Kulthum]<br>对中东与北非音乐产生重要影响的歌手。"
        },
        {
            "start": "1925",
            "title": "Xian Xinghai（1905–1945）",
            "description": "[Xian Xinghai]<br>对东亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1932",
            "title": "Nie Er（1912–1935）",
            "description": "[Nie Er]<br>对东亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1936",
            "title": "Bismillah Khan（1916–2016）",
            "description": "[Bismillah Khan]<br>对南亚音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi（1916–2004）",
            "description": "[M. S. Subbulakshmi]<br>对南亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1936",
            "title": "Ravi Shankar（1916–2013）",
            "description": "[Ravi Shankar]<br>对南亚音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1938",
            "title": "Zhou Xuan（1918–1957）",
            "description": "[Zhou Xuan]<br>对东亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1939",
            "title": "Chavela Vargas（1919–2012）",
            "description": "[Chavela Vargas]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan（1920–2012）",
            "description": "[Ali Akbar Khan]<br>对南亚音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla（1921–1992）",
            "description": "[Astor Piazzolla]<br>对拉丁美洲音乐产生重要影响的作曲家。"
        },
        {
            "start": "1943",
            "title": "Tito Puente（1923–2000）",
            "description": "[Tito Puente]<br>对拉丁美洲音乐产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1945",
            "title": "Celia Cruz（1925–2003）",
            "description": "[Celia Cruz]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim（1927–1994）",
            "description": "[Antônio Carlos Jobim]<br>对拉丁美洲音乐产生重要影响的作曲家。"
        },
        {
            "start": "1951",
            "title": "João Gilberto（1931–2019）",
            "description": "[João Gilberto]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1952",
            "title": "Miriam Makeba（1932–2008）",
            "description": "[Miriam Makeba]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "1954",
            "title": "Fairuz（born 1934）",
            "description": "[Fairuz]<br>对中东与北非音乐产生重要影响的歌手。"
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa（1935–2009）",
            "description": "[Mercedes Sosa]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry（1936–2021）",
            "description": "[Lee “Scratch” Perry]<br>对雷鬼与牙买加音乐产生重要影响的制作人与音乐家。"
        },
        {
            "start": "1957",
            "title": "Hibari Misora（1937–1989）",
            "description": "[Hibari Misora]<br>对东亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1958",
            "title": "Fela Kuti（1938–1997）",
            "description": "[Fela Kuti]<br>对非洲流行与传统音乐产生重要影响的乐队领队与作曲家。"
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré（1939–2006）",
            "description": "[Ali Farka Touré]<br>对非洲流行与传统音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1961",
            "title": "Cesária Évora（1941–2011）",
            "description": "[Cesária Évora]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "1962",
            "title": "Caetano Veloso（born 1942）",
            "description": "[Caetano Veloso]<br>对拉丁美洲音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1962",
            "title": "Gilberto Gil（born 1942）",
            "description": "[Gilberto Gil]<br>对拉丁美洲音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1962",
            "title": "Milton Nascimento（born 1942）",
            "description": "[Milton Nascimento]<br>对拉丁美洲音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff（born 1944）",
            "description": "[Jimmy Cliff]<br>对雷鬼与牙买加音乐产生重要影响的歌手。"
        },
        {
            "start": "1964",
            "title": "Peter Tosh（1944–1987）",
            "description": "[Peter Tosh]<br>对雷鬼与牙买加音乐产生重要影响的歌手。"
        },
        {
            "start": "1965",
            "title": "Bob Marley（1945–1981）",
            "description": "[Bob Marley]<br>对雷鬼与牙买加音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan（1948–1997）",
            "description": "[Nusrat Fateh Ali Khan]<br>对南亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1969",
            "title": "Salif Keita（born 1949）",
            "description": "[Salif Keita]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "1970",
            "title": "Juan Gabriel（1950–2016）",
            "description": "[Juan Gabriel]<br>对拉丁美洲音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "1971",
            "title": "Zakir Hussain（1951–2024）",
            "description": "[Zakir Hussain]<br>对南亚音乐产生重要影响的器乐演奏家。"
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto（1952–2023）",
            "description": "[Ryuichi Sakamoto]<br>对东亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1973",
            "title": "Kitarō（born 1953）",
            "description": "[Kitarō]<br>对东亚音乐产生重要影响的作曲家。"
        },
        {
            "start": "1973",
            "title": "Teresa Teng（1953–1995）",
            "description": "[Teresa Teng]<br>对东亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra 成立",
            "description": "[Yellow Magic Orchestra formed]<br>具有重要影响的电子音乐团体成立。"
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour（born 1959）",
            "description": "[Youssou N’Dour]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo（born 1960）",
            "description": "[Angélique Kidjo]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "1989",
            "title": "Faye Wong（born 1969）",
            "description": "[Faye Wong]<br>对东亚音乐产生重要影响的歌手。"
        },
        {
            "start": "1991",
            "title": "Selena（1971–1995）",
            "description": "[Selena]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys 成立",
            "description": "[Seo Taiji and Boys formed]<br>具有重要影响的东亚音乐团体成立。"
        },
        {
            "start": "1997",
            "title": "Shakira（born 1977）",
            "description": "[Shakira]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "1999",
            "title": "Jay Chou（born 1979）",
            "description": "[Jay Chou]<br>对东亚音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "2003",
            "title": "Hikaru Utada（born 1983）",
            "description": "[Hikaru Utada]<br>对东亚音乐产生重要影响的词曲作者与表演者。"
        },
        {
            "start": "2011",
            "title": "Burna Boy（born 1991）",
            "description": "[Burna Boy]<br>对非洲流行与传统音乐产生重要影响的歌手。"
        },
        {
            "start": "2013",
            "title": "BTS 成立",
            "description": "[BTS formed]<br>具有重要影响的流行音乐团体成立。"
        },
        {
            "start": "2014",
            "title": "Bad Bunny（born 1994）",
            "description": "[Bad Bunny]<br>对拉丁美洲音乐产生重要影响的歌手。"
        },
        {
            "start": "2016",
            "title": "BLACKPINK 成立",
            "description": "[BLACKPINK formed]<br>具有重要影响的流行音乐团体成立。"
        }
    ]
};

// 重要作品、歌剧、音乐剧与首演
var tl_works = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1151",
            "title": "希尔德加德《德行剧》",
            "description": "[Hildegard’s Ordo Virtutum]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1360",
            "title": "马肖《圣母弥撒》",
            "description": "[Machaut’s Messe de Nostre Dame]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1597",
            "title": "佩里与科尔西《达芙妮》",
            "description": "[Peri and Corsi’s Dafne]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1607",
            "title": "蒙特威尔第《奥菲欧》首演",
            "description": "[Monteverdi’s L’Orfeo premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1642",
            "title": "蒙特威尔第《波佩亚的加冕》",
            "description": "[Monteverdi’s L’incoronazione di Poppea]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1689",
            "title": "珀塞尔《狄多与埃涅阿斯》",
            "description": "[Purcell’s Dido and Aeneas]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1711",
            "title": "亨德尔《里纳尔多》伦敦首演",
            "description": "[Handel’s Rinaldo premieres in London]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1721",
            "title": "巴赫《勃兰登堡协奏曲》汇编",
            "description": "[Bach’s Brandenburg Concertos assembled]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1725",
            "title": "维瓦尔第《四季》出版",
            "description": "[Vivaldi’s The Four Seasons published]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1741",
            "title": "巴赫《哥德堡变奏曲》出版",
            "description": "[Bach’s Goldberg Variations published]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1742",
            "title": "亨德尔《弥赛亚》首演",
            "description": "[Handel’s Messiah premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1749",
            "title": "亨德尔《皇家焰火音乐》",
            "description": "[Handel’s Music for the Royal Fireworks]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1762",
            "title": "格鲁克《奥菲欧与尤丽狄茜》首演",
            "description": "[Gluck’s Orfeo ed Euridice premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1786",
            "title": "莫扎特《费加罗的婚礼》首演",
            "description": "[Mozart’s The Marriage of Figaro premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1787",
            "title": "莫扎特《唐璜》首演",
            "description": "[Mozart’s Don Giovanni premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1791",
            "title": "莫扎特《魔笛》首演",
            "description": "[Mozart’s The Magic Flute premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1805",
            "title": "贝多芬《英雄交响曲》公开首演",
            "description": "[Beethoven’s Eroica Symphony public premiere]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1808-12-22",
            "title": "贝多芬第五与第六交响曲首演",
            "description": "[Beethoven premieres the Fifth and Sixth Symphonies]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1816",
            "title": "罗西尼《塞维利亚的理发师》首演",
            "description": "[Rossini’s The Barber of Seville premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1821",
            "title": "韦伯《自由射手》首演",
            "description": "[Weber’s Der Freischütz premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1824-05-07",
            "title": "贝多芬第九交响曲首演",
            "description": "[Beethoven’s Ninth Symphony premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1830",
            "title": "柏辽兹《幻想交响曲》首演",
            "description": "[Berlioz’s Symphonie fantastique premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1831",
            "title": "贝利尼《诺尔玛》首演",
            "description": "[Bellini’s Norma premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1842",
            "title": "威尔第《纳布科》首演",
            "description": "[Verdi’s Nabucco premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1845",
            "title": "门德尔松《小提琴协奏曲》首演",
            "description": "[Mendelssohn’s Violin Concerto premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1853",
            "title": "威尔第《茶花女》首演",
            "description": "[Verdi’s La traviata premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1865",
            "title": "瓦格纳《特里斯坦与伊索尔德》首演",
            "description": "[Wagner’s Tristan und Isolde premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1871",
            "title": "威尔第《阿依达》首演",
            "description": "[Verdi’s Aida premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1876",
            "title": "《尼伯龙根的指环》全剧在拜罗伊特上演",
            "description": "[Complete Ring cycle opens at Bayreuth]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1877",
            "title": "柴可夫斯基《天鹅湖》首演",
            "description": "[Tchaikovsky’s Swan Lake premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1882",
            "title": "瓦格纳《帕西法尔》首演",
            "description": "[Wagner’s Parsifal premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1888",
            "title": "里姆斯基-科萨科夫《天方夜谭》首演",
            "description": "[Rimsky-Korsakov’s Scheherazade premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1890",
            "title": "马斯卡尼《乡村骑士》首演",
            "description": "[Mascagni’s Cavalleria rusticana premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1892",
            "title": "柴可夫斯基《胡桃夹子》首演",
            "description": "[Tchaikovsky’s The Nutcracker premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1893",
            "title": "德沃夏克《自新大陆》首演",
            "description": "[Dvořák’s New World Symphony premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1896",
            "title": "普契尼《波希米亚人》首演",
            "description": "[Puccini’s La bohème premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1900",
            "title": "普契尼《托斯卡》首演",
            "description": "[Puccini’s Tosca premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1902",
            "title": "德彪西《佩利亚斯与梅丽桑德》首演",
            "description": "[Debussy’s Pelléas et Mélisande premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1905",
            "title": "理查德·施特劳斯《莎乐美》首演",
            "description": "[Richard Strauss’s Salome premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1910",
            "title": "斯特拉文斯基《火鸟》首演",
            "description": "[Stravinsky’s The Firebird premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1911",
            "title": "斯特拉文斯基《彼得鲁什卡》首演",
            "description": "[Stravinsky’s Petrushka premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1912",
            "title": "勋伯格《月迷彼埃罗》首演",
            "description": "[Schoenberg’s Pierrot lunaire premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1913-05-29",
            "title": "《春之祭》巴黎首演",
            "description": "[The Rite of Spring premieres in Paris]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1918",
            "title": "霍尔斯特《行星》全曲公开演出",
            "description": "[Holst’s The Planets receives complete public performance]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1924-02-12",
            "title": "格什温《蓝色狂想曲》首演",
            "description": "[Gershwin’s Rhapsody in Blue premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1925",
            "title": "贝尔格《沃采克》首演",
            "description": "[Berg’s Wozzeck premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1927",
            "title": "《演艺船》百老汇开演",
            "description": "[Show Boat opens on Broadway]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1928",
            "title": "拉威尔《波莱罗》首演",
            "description": "[Ravel’s Boléro premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1935",
            "title": "《波吉与贝丝》首演",
            "description": "[Porgy and Bess premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1937",
            "title": "奥尔夫《布兰诗歌》首演",
            "description": "[Orff’s Carmina Burana premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1943",
            "title": "《俄克拉荷马！》百老汇开演",
            "description": "[Oklahoma! opens on Broadway]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1944",
            "title": "科普兰《阿巴拉契亚之春》首演",
            "description": "[Copland’s Appalachian Spring premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1945",
            "title": "布里顿《彼得·格赖姆斯》首演",
            "description": "[Britten’s Peter Grimes premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1952-08-29",
            "title": "凯奇《4分33秒》首演",
            "description": "[Cage’s 4′33″ premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1956",
            "title": "施托克豪森《少年之歌》完成",
            "description": "[Stockhausen’s Gesang der Jünglinge completed]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1957",
            "title": "《西区故事》百老汇开演",
            "description": "[West Side Story opens on Broadway]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1958",
            "title": "瓦雷兹《电子音诗》在布鲁塞尔世博会呈现",
            "description": "[Varèse’s Poème électronique at the Brussels World’s Fair]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1964",
            "title": "特里·赖利《In C》首演",
            "description": "[Terry Riley’s In C premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1976",
            "title": "格拉斯《海滩上的爱因斯坦》首演",
            "description": "[Glass’s Einstein on the Beach premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1977",
            "title": "《星球大战》重建大片管弦配乐模式",
            "description": "[Star Wars establishes a new blockbuster orchestral film-score model]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "1987",
            "title": "约翰·亚当斯《尼克松在中国》首演",
            "description": "[John Adams’s Nixon in China premieres]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        },
        {
            "start": "2015",
            "title": "《汉密尔顿》百老汇开演",
            "description": "[Hamilton opens on Broadway]<br>改变音乐语言、曲目体系或演出实践的重要作品或首演。"
        }
    ]
};

// 里程碑录音、单曲与专辑
var tl_recordings = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1902",
            "title": "Enrico Caruso — Vesti la giubba",
            "description": "古典主义音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "古典主义音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "古典主义音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "南亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "拉丁美洲音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "蓝调的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "放克的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "拉丁美洲音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "中东与北非音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "雷鬼与牙买加音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "爵士的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "雷鬼与牙买加音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "全球音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "南亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "南亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "重金属的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "朋克与另类摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "拉丁美洲音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "灵魂乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "摇滚的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "民谣与创作歌手音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "电子音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "东亚音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "嘻哈的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "拉丁美洲音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "拉丁美洲音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "节奏布鲁斯的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "乡村与根源音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "流行音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "非洲流行与传统音乐的里程碑录音；发行后对曲目、制作、表演或音乐文化产生重要影响。"
        }
    ]
};

// 历史性演唱会、音乐节与巡演
var tl_concerts = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1749-04-27",
            "title": "亨德尔《皇家焰火音乐》公开彩排",
            "description": "[Handel’s Music for the Royal Fireworks public rehearsal]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1808-12-22",
            "title": "贝多芬维也纳马拉松音乐会",
            "description": "[Beethoven’s Vienna marathon concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1824-05-07",
            "title": "贝多芬第九首演音乐会",
            "description": "[Beethoven’s Ninth premiere concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1850-09-11",
            "title": "珍妮·林德在巴纳姆推广下开始美国巡演",
            "description": "[Jenny Lind begins the American tour promoted by P. T. Barnum]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1871",
            "title": "菲斯克禧年歌手团开始重要巡演",
            "description": "[Fisk Jubilee Singers begin major tours]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1876-08-13",
            "title": "首届拜罗伊特音乐节以《指环》开幕",
            "description": "[First Bayreuth Festival opens with the Ring cycle]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1891-05-05",
            "title": "卡内基音乐厅开幕音乐会",
            "description": "[Carnegie Hall opening night]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1912-05-02",
            "title": "詹姆斯·里斯·欧洲克莱夫俱乐部乐团卡内基音乐厅演出",
            "description": "[James Reese Europe’s Clef Club Orchestra at Carnegie Hall]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1913-05-29",
            "title": "《春之祭》首演与观众骚动",
            "description": "[The Rite of Spring premiere and audience uproar]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1924-02-12",
            "title": "“现代音乐实验”音乐会首演《蓝色狂想曲》",
            "description": "[An Experiment in Modern Music premieres Rhapsody in Blue]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1938-01-16",
            "title": "本尼·古德曼卡内基音乐厅音乐会",
            "description": "[Benny Goodman Carnegie Hall concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1939-04-09",
            "title": "玛丽安·安德森在林肯纪念堂演唱",
            "description": "[Marian Anderson sings at the Lincoln Memorial]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1943-01-23",
            "title": "艾灵顿公爵在卡内基呈现《黑、棕与米色》",
            "description": "[Duke Ellington presents Black, Brown and Beige at Carnegie Hall]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1954-07-17",
            "title": "首届纽波特爵士音乐节",
            "description": "[First Newport Jazz Festival]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1959-07-11",
            "title": "首届纽波特民谣音乐节",
            "description": "[First Newport Folk Festival]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1964-02-12",
            "title": "披头士在卡内基音乐厅演出",
            "description": "[The Beatles perform at Carnegie Hall]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1965-07-25",
            "title": "鲍勃·迪伦在纽波特改用电声",
            "description": "[Bob Dylan goes electric at Newport Folk Festival]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1965-08-15",
            "title": "披头士谢伊体育场演唱会",
            "description": "[The Beatles at Shea Stadium]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1966-06-30",
            "title": "披头士东京武道馆演出开始",
            "description": "[The Beatles begin Budokan concerts in Tokyo]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1967-06-16",
            "title": "蒙特雷国际流行音乐节开幕",
            "description": "[Monterey International Pop Festival opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1968-12-11",
            "title": "滚石“摇滚马戏团”录制",
            "description": "[The Rolling Stones Rock and Roll Circus filmed]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1969-12-06",
            "title": "阿尔塔蒙特免费音乐会",
            "description": "[Altamont Free Concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1969-08-15",
            "title": "伍德斯托克音乐艺术节开幕",
            "description": "[Woodstock Music & Art Fair opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1970-08-26",
            "title": "1970怀特岛音乐节开幕",
            "description": "[Isle of Wight Festival 1970 opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1971-08-01",
            "title": "孟加拉国赈灾音乐会",
            "description": "[Concert for Bangladesh]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1971",
            "title": "平克·弗洛伊德《庞贝现场》拍摄",
            "description": "[Pink Floyd: Live at Pompeii filmed]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1972-08-20",
            "title": "Wattstax音乐节",
            "description": "[Wattstax festival]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1973-01-14",
            "title": "猫王“来自夏威夷的问候”卫星演唱会",
            "description": "[Elvis: Aloha from Hawaii satellite concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1974-09-22",
            "title": "扎伊尔74音乐节开始",
            "description": "[Zaire 74 music festival begins]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1976-06-04",
            "title": "性手枪曼彻斯特演出",
            "description": "[Sex Pistols at Manchester Lesser Free Trade Hall]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1976-11-25",
            "title": "乐队“The Last Waltz”告别演出",
            "description": "[The Band’s The Last Waltz concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1978-04-22",
            "title": "金斯敦“一爱和平音乐会”",
            "description": "[One Love Peace Concert in Kingston]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1979-09-19",
            "title": "麦迪逊广场花园“反核”音乐会开始",
            "description": "[No Nukes concerts begin at Madison Square Garden]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1979",
            "title": "黄色魔术交响乐团世界巡演",
            "description": "[Yellow Magic Orchestra world tour]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1981-11-24",
            "title": "皇后乐队蒙特利尔摇滚演出开始",
            "description": "[Queen Rock Montreal concerts begin]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1982-09-03",
            "title": "US音乐节开幕",
            "description": "[US Festival opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1983-03-25",
            "title": "电视音乐会“摩城25周年”录制",
            "description": "[Motown 25 television concert recorded]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1985-07-13",
            "title": "拯救生命慈善演唱会",
            "description": "[Live Aid]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1985",
            "title": "努斯拉特·法帖·阿里·汗进入大型国际音乐节听众",
            "description": "[Nusrat Fateh Ali Khan reaches major international festival audiences]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1986-04-05",
            "title": "让-米歇尔·雅尔“休斯敦约会”音乐会",
            "description": "[Jean-Michel Jarre’s Rendez-vous Houston]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1988-06-11",
            "title": "纳尔逊·曼德拉70岁生日致敬音乐会",
            "description": "[Nelson Mandela 70th Birthday Tribute]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1990-07-21",
            "title": "罗杰·沃特斯在柏林演出《迷墙》",
            "description": "[Roger Waters stages The Wall in Berlin]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1992",
            "title": "首届帕瓦罗蒂与朋友慈善音乐会",
            "description": "[First Pavarotti & Friends benefit concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1992-04-20",
            "title": "弗雷迪·默丘里致敬演唱会",
            "description": "[Freddie Mercury Tribute Concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1993-11-18",
            "title": "涅槃乐队纽约MTV不插电录制",
            "description": "[Nirvana MTV Unplugged in New York]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1994-08-12",
            "title": "伍德斯托克94开幕",
            "description": "[Woodstock ’94 opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1996-06-15",
            "title": "首届西藏自由音乐会",
            "description": "[First Tibetan Freedom Concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1996-08-10",
            "title": "绿洲乐队内布沃思演唱会开始",
            "description": "[Oasis begins Knebworth concerts]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1998-07-01",
            "title": "古巴乐社卡内基音乐厅演出",
            "description": "[Buena Vista Social Club performs at Carnegie Hall]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1999-04-21",
            "title": "金属乐队与旧金山交响乐团录制《S&M》",
            "description": "[Metallica records S&M concerts with the San Francisco Symphony]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "1999-07-22",
            "title": "伍德斯托克99开幕",
            "description": "[Woodstock ’99 opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2001-10-20",
            "title": "纽约市慈善音乐会",
            "description": "[The Concert for New York City]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2003-07-30",
            "title": "多伦多SARS赈灾大型音乐会",
            "description": "[Molson Canadian Rocks for Toronto SARS benefit]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2005-07-02",
            "title": "Live 8系列演唱会",
            "description": "[Live 8 concerts]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2006-04-29",
            "title": "蠢朋克科切拉金字塔演出",
            "description": "[Daft Punk’s Coachella pyramid performance]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2007-12-10",
            "title": "齐柏林飞艇O2重组演唱会",
            "description": "[Led Zeppelin reunion at the O2 Arena]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2011-06-26",
            "title": "碧昂丝压轴格拉斯顿伯里",
            "description": "[Beyoncé headlines Glastonbury]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2012-12-12",
            "title": "桑迪飓风赈灾“12-12-12”音乐会",
            "description": "[12-12-12: The Concert for Sandy Relief]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2018-04-14",
            "title": "碧昂丝科切拉“Homecoming”演出",
            "description": "[Beyoncé’s Coachella “Homecoming” performance]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2019-06-01",
            "title": "BTS温布利体育场演出开始",
            "description": "[BTS begins Wembley Stadium concerts]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2020-04-18",
            "title": "“同一个世界：团结在家”广播音乐会",
            "description": "[One World: Together at Home broadcast concert]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK压轴科切拉",
            "description": "[BLACKPINK headlines Coachella]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2023-03-17",
            "title": "泰勒·斯威夫特“时代巡演”开幕",
            "description": "[Taylor Swift’s Eras Tour opens]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
        },
        {
            "start": "2023-09-29",
            "title": "U2拉斯维加斯Sphere开幕演出",
            "description": "[U2 opens the Sphere in Las Vegas]<br>具有历史影响力的演唱会、音乐节、广播演出或巡演。"
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
