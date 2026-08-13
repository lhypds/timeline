var title = "音乐时间线";

// 中文版：人物尽量列出代表作；时期起止仍为编辑性近似。

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
            "description": "[Deep musical prehistory before 10,000 BCE and Neolithic ritual music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "美索不达米亚神庙与宫廷音乐",
            "description": "[Mesopotamian temple and court music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "古埃及音乐",
            "description": "[Ancient Egyptian music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "古代中国青铜编钟与礼乐",
            "description": "[Bronze-bell and ritual music in ancient China]<br>不同尺寸与铸造厚度产生有组织的音高；曾侯乙墓编钟还显示一钟可发两个相关音，反映出高度成熟的音律与合奏设计。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "吠陀吟诵",
            "description": "[Vedic chant]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "古希腊音乐",
            "description": "[Ancient Greek music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "早期犹太礼仪音乐",
            "description": "[Early Jewish liturgical music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "罗马与古代晚期音乐",
            "description": "[Roman and late-antique music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "印度古典乐理论与拉格体系形成",
            "description": "[Formation of Indian classical theory and raga systems]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "拜占庭圣歌",
            "description": "[Byzantine chant]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "中国文人琴乐传统",
            "description": "[Chinese qin literati tradition]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "日本雅乐",
            "description": "[Japanese gagaku]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "阿拔斯时期阿拉伯与波斯宫廷音乐",
            "description": "[Abbasid-era Arabic and Persian court music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "爪哇与巴厘甘美兰传统",
            "description": "[Javanese and Balinese gamelan traditions]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "安达卢西亚古典音乐",
            "description": "[Andalusi classical music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "西非格里奥与科拉琴传统",
            "description": "[West African griot and kora traditions]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "卡瓦利与南亚苏菲音乐",
            "description": "[Qawwali and South Asian Sufi music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "中国戏曲音乐",
            "description": "[Chinese opera traditions]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "北印度古典音乐",
            "description": "[Hindustani classical music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "日本能乐",
            "description": "[Japanese Noh music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "奥斯曼古典音乐",
            "description": "[Ottoman classical music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "南印度古典音乐",
            "description": "[Carnatic classical music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "昆曲",
            "description": "[Kunqu opera]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "歌舞伎音乐",
            "description": "[Kabuki music]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "弗拉门戈",
            "description": "[Flamenco]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "京剧",
            "description": "[Beijing opera]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "探戈形成与黄金时代",
            "description": "[Tango: formation and golden age]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "海莱夫音乐",
            "description": "[Highlife]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "桑巴",
            "description": "[Samba]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "华语流行音乐",
            "description": "[Mandopop and Chinese-language popular song]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "拉伊音乐",
            "description": "[Raï]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "演歌",
            "description": "[Enka]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "波萨诺瓦",
            "description": "[Bossa nova]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "新歌运动",
            "description": "[Nueva canción]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "萨尔萨经典时期",
            "description": "[Salsa: classic period]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "巴西流行音乐（MPB）",
            "description": "[Música popular brasileira (MPB)]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "非洲节拍",
            "description": "[Afrobeat]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "雷鬼",
            "description": "[Reggae]<br>牙买加的重拍后置、贝斯主导编曲和声响系统文化，使歌曲、版本与混音成为可不断重组的材料；dub进一步把录音室变成表演工具。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "日本城市流行",
            "description": "[Japanese city pop]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "拉丁流行",
            "description": "[Latin pop]<br>这一时期并非单一、封闭的“风格”，而是由仪式、宫廷、宗教、口传谱系和地域乐器共同维系；其日期表示可辨识形态或影响高峰的近似范围。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "日本流行音乐（J-pop）",
            "description": "[J-pop]<br>电视、动画、偶像产业与唱片公司共同塑造日本流行歌曲；作品常把西方和声、日语韵律与高度细化的编曲结合。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "韩国流行音乐（K-pop）",
            "description": "[K-pop]<br>练习生制度、精密编舞、跨国词曲制作和高密度视听传播被整合为工业体系，并借助视频平台与粉丝社群形成全球市场。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "非洲流行节拍（Afrobeats）",
            "description": "[Afrobeats]<br>尼日利亚与加纳制作人把highlife、hip-hop、R&B、dancehall和电子节拍融合为轻盈而切分的流行声音，并通过流媒体形成国际市场。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "阿玛皮亚诺",
            "description": "[Amapiano]<br>南非制作人以较慢的house速度、爵士化和弦、宽阔键盘层和“log drum”低音构成兼具松弛感与舞池冲击力的声音。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
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
            "description": "[Medieval music]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "格里高利圣咏曲目体系",
            "description": "[Gregorian chant repertory]<br>以拉丁礼仪单声部旋律为核心，依靠口传与逐渐成熟的纽姆记谱保存曲目，并成为欧洲复调写作的重要素材。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "巴黎圣母院复调与古艺术",
            "description": "[Notre-Dame polyphony and Ars antiqua]<br>莱奥南、佩罗坦一系把圣咏延长为持续声部，在其上叠加有节奏组织的复调声部，推动了节奏记谱与大型教会音乐的发展。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "新艺术",
            "description": "[Ars nova]<br>更精细的节奏记谱使二分法、切分和等节奏结构得以书写，马肖等人由此扩展了经文歌、弥撒与世俗歌曲的复杂度。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "文艺复兴音乐",
            "description": "[Renaissance music]<br>声部趋向均衡，模仿复调广泛使用；印刷乐谱和宫廷、教会网络使法兰德斯作曲技术传播到欧洲各地。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "法兰德斯复调乐派",
            "description": "[Franco-Flemish polyphony]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "牧歌时期",
            "description": "[Madrigal era]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "巴洛克音乐",
            "description": "[Baroque music]<br>通奏低音、功能和声、强烈修辞和独奏—合奏对比成为核心，歌剧、协奏曲、奏鸣曲与清唱剧在这一时期定型。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "早期歌剧与单声歌曲",
            "description": "[Early opera and monody]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "盛期巴洛克",
            "description": "[High Baroque]<br>通奏低音、功能和声、强烈修辞和独奏—合奏对比成为核心，歌剧、协奏曲、奏鸣曲与清唱剧在这一时期定型。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "华丽风格",
            "description": "[Galant style]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "古典主义时期",
            "description": "[Classical period]<br>奏鸣曲式、交响曲、弦乐四重奏和公共音乐会文化成熟，主题发展与调性结构比巴洛克式持续低音更突出。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "音乐中的狂飙突进",
            "description": "[Sturm und Drang in music]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "浪漫主义音乐",
            "description": "[Romantic music]<br>作曲家扩大管弦乐队与和声范围，以艺术歌曲、性格小品、交响诗和音乐戏剧表达个人经验、文学想象与民族认同。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "炫技演奏会文化",
            "description": "[Virtuoso concert culture]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "民族乐派",
            "description": "[Musical nationalism]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "晚期浪漫主义",
            "description": "[Late Romanticism]<br>作曲家扩大管弦乐队与和声范围，以艺术歌曲、性格小品、交响诗和音乐戏剧表达个人经验、文学想象与民族认同。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "印象主义与音乐象征主义",
            "description": "[Impressionism and musical symbolism]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "音乐现代主义",
            "description": "[Musical modernism]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "表现主义与自由无调性",
            "description": "[Expressionism and free atonality]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "新古典主义",
            "description": "[Neoclassicism]<br>奏鸣曲式、交响曲、弦乐四重奏和公共音乐会文化成熟，主题发展与调性结构比巴洛克式持续低音更突出。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "十二音技法与序列主义",
            "description": "[Serialism and twelve-tone composition]<br>以一个包含十二个半音的音列及其倒影、逆行等变形组织音高，试图在不依赖传统主调中心的情况下建立结构统一。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "具体音乐与早期电子艺术音乐",
            "description": "[Musique concrète and early electronic art music]<br>录制现实声音后通过剪接、变速、倒放和循环重新组织，作品由“写给乐器”转向直接处理声音材料。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "战后先锋音乐",
            "description": "[Postwar avant-garde]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "极简主义与后极简主义",
            "description": "[Minimalism and post-minimalism]<br>重复短动机、稳定脉冲与缓慢过程取代复杂的序列结构；相位移动、加法过程和持续和声成为标志性方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "后现代与多风格主义作曲",
            "description": "[Postmodern and polystylistic composition]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "频谱音乐",
            "description": "[Spectral music]<br>以声音频谱、泛音结构和声学分析作为和声与配器的出发点，关注音色在时间中的连续变形。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "新复杂主义",
            "description": "[New complexity]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "数字与多媒体艺术音乐",
            "description": "[Digital and multimedia art music]<br>这一时期的价值在于可观察到作曲方法、演出机构与听众结构同时变化；起止年份是便于显示的编辑性边界，而非所有地区同步转换的日期。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
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
            "description": "[Minstrelsy in the United States]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "非裔美国灵歌的演出与出版文化",
            "description": "[African American spirituals in concert and print culture]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "铜管乐队时代",
            "description": "[Brass-band era]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "蓝调",
            "description": "[Blues]<br>非裔美国劳动歌、灵歌与民间叙事汇合为以蓝调音、呼应句式和常见十二小节结构为特征的传统，后来深刻塑造爵士、R&B与摇滚。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "拉格泰姆",
            "description": "[Ragtime]<br>钢琴低音的规整进行与右手切分旋律形成张力，乐谱出版和钢琴卷使这种风格在录音业成熟前就广泛传播。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "乡村与旧时音乐",
            "description": "[Country and old-time music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "福音音乐",
            "description": "[Gospel music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "新奥尔良爵士",
            "description": "[New Orleans jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "叮砰巷歌曲时代",
            "description": "[Tin Pan Alley song era]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "爵士",
            "description": "[Jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "经典蓝调与早期录音蓝调",
            "description": "[Classic blues and early recorded blues]<br>非裔美国劳动歌、灵歌与民间叙事汇合为以蓝调音、呼应句式和常见十二小节结构为特征的传统，后来深刻塑造爵士、R&B与摇滚。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "低声吟唱歌手时代",
            "description": "[Crooner era]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "大乐队爵士",
            "description": "[Big-band jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "电影音乐与原声文化",
            "description": "[Film music and soundtrack culture]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "摇摆乐时代",
            "description": "[Swing era]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "西部摇摆",
            "description": "[Western swing]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "蓝草音乐",
            "description": "[Bluegrass]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "节奏布鲁斯",
            "description": "[Rhythm and blues]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "比博普",
            "description": "[Bebop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "冷爵士",
            "description": "[Cool jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "嘟喔普",
            "description": "[Doo-wop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "硬博普",
            "description": "[Hard bop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "酒馆乡村",
            "description": "[Honky-tonk country]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "摇滚乐",
            "description": "[Rock and roll]<br>放大的吉他、强烈反拍和青年舞蹈文化把节奏布鲁斯与乡村音乐重新组合，并通过单曲、广播、电视和现场演出形成大众文化。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "纳什维尔之声",
            "description": "[Nashville sound]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "灵魂乐",
            "description": "[Soul music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "调式爵士",
            "description": "[Modal jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "冲浪音乐",
            "description": "[Surf music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "自由爵士",
            "description": "[Free jazz]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "放克",
            "description": "[Funk]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "摩城之声",
            "description": "[Motown sound]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "英国入侵",
            "description": "[British Invasion]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "民谣摇滚",
            "description": "[Folk rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "车库摇滚",
            "description": "[Garage rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "迷幻摇滚",
            "description": "[Psychedelic rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "前卫摇滚",
            "description": "[Progressive rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "硬摇滚",
            "description": "[Hard rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "重金属",
            "description": "[Heavy metal]<br>高增益失真、低音域即兴重复段和强力鼓击把硬摇滚推向更厚重、更戏剧化的声音，随后分化出激流、死亡、黑金属等众多支系。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "融合爵士",
            "description": "[Jazz fusion]<br>其核心不是固定配器，而是摇摆感、即兴、蓝调语汇与合奏互动；从新奥尔良小乐队到比博普、自由爵士和融合乐不断重组这些要素。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "回响音乐",
            "description": "[Dub]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "华丽摇滚",
            "description": "[Glam rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "叛逆乡村",
            "description": "[Outlaw country]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "创作歌手时代",
            "description": "[Singer-songwriter era]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "嘻哈",
            "description": "[Hip-hop]<br>DJ延长唱片中的break，MC以押韵语言组织现场，随后采样器、鼓机和多轨录音把街区文化发展为全球性的制作与叙事体系。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "迪斯科",
            "description": "[Disco]<br>稳定四拍、交替低音、弦乐与打击乐编排服务于连续舞池体验，12英寸单曲和DJ混音改变了歌曲长度与发行方式。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "朋克摇滚",
            "description": "[Punk rock]<br>短曲、简化和弦、快速节奏与DIY发行反对主流摇滚的炫技和产业规模，并催生独立厂牌、同人刊物与地方场景。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "氛围音乐",
            "description": "[Ambient music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "后朋克",
            "description": "[Post-punk]<br>短曲、简化和弦、快速节奏与DIY发行反对主流摇滚的炫技和产业规模，并催生独立厂牌、同人刊物与地方场景。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "工业音乐",
            "description": "[Industrial music]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "新浪潮",
            "description": "[New wave]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "哥特摇滚",
            "description": "[Gothic rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "老派嘻哈",
            "description": "[Old-school hip-hop]<br>DJ延长唱片中的break，MC以押韵语言组织现场，随后采样器、鼓机和多轨录音把街区文化发展为全球性的制作与叙事体系。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "舞厅雷鬼",
            "description": "[Dancehall]<br>牙买加的重拍后置、贝斯主导编曲和声响系统文化，使歌曲、版本与混音成为可不断重组的材料；dub进一步把录音室变成表演工具。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "硬核朋克",
            "description": "[Hardcore punk]<br>短曲、简化和弦、快速节奏与DIY发行反对主流摇滚的炫技和产业规模，并催生独立厂牌、同人刊物与地方场景。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "合成器流行",
            "description": "[Synth-pop]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "电音放克",
            "description": "[Electro]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "激流金属",
            "description": "[Thrash metal]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "另类摇滚",
            "description": "[Alternative rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "独立摇滚",
            "description": "[Indie rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "嘻哈黄金时代",
            "description": "[Golden-age hip-hop]<br>DJ延长唱片中的break，MC以押韵语言组织现场，随后采样器、鼓机和多轨录音把街区文化发展为全球性的制作与叙事体系。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "浩室音乐",
            "description": "[House music]<br>芝加哥DJ把迪斯科残片、鼓机四拍与循环贝斯重组为面向俱乐部的连续舞曲，随后形成深浩室、酸性浩室等分支。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "匪帮说唱",
            "description": "[Gangsta rap]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "科技舞曲",
            "description": "[Techno]<br>底特律制作人把电子放克、合成器序列和未来主义城市想象结合，强调机器节奏与精确音色设计。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "“世界音乐”市场类别",
            "description": "[World-music market category]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "自赏摇滚",
            "description": "[Shoegaze]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "另类嘻哈",
            "description": "[Alternative hip-hop]<br>DJ延长唱片中的break，MC以押韵语言组织现场，随后采样器、鼓机和多轨录音把街区文化发展为全球性的制作与叙事体系。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "舞曲流行",
            "description": "[Dance-pop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "垃圾摇滚",
            "description": "[Grunge]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "新灵魂乐",
            "description": "[Neo-soul]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "迷幻舞曲",
            "description": "[Trance]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "英伦摇滚",
            "description": "[Britpop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "鼓打贝斯",
            "description": "[Drum and bass]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "后摇滚",
            "description": "[Post-rock]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "情绪摇滚前两波",
            "description": "[Emo: first and second waves]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "新金属",
            "description": "[Nu metal]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "电子舞曲音乐节文化",
            "description": "[Electronic dance music festival culture]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "陷阱说唱",
            "description": "[Trap]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "当代独立流行",
            "description": "[Contemporary indie pop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "钻头说唱",
            "description": "[Drill]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "流媒体时代全球流行音乐",
            "description": "[Streaming-era global pop]<br>按需访问取代拥有单张唱片，播放列表、推荐算法和按次分成开始影响歌曲长度、发行节奏、市场发现与收入结构。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "超流行",
            "description": "[Hyperpop]<br>这种音乐通过演出场所、录音技术、广播或网络社群形成可识别声音；它往往与相邻流派互相借用节奏、音色和制作方法。 本时间线中的起止年份是用于显示形成、成熟或高影响阶段的近似边界。",
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
            "description": "[Paleolithic bone flutes before 10,000 BCE (compressed marker)]<br>带孔骨管证明史前人类已经能够控制音高序列，而不是只制造无固定音高的敲击声；它们也是研究早期仪式与认知能力的重要实物。"
        },
        {
            "start": "-7999",
            "title": "早期框鼓与摇响器",
            "description": "[Early frame drums and rattles]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-3499",
            "title": "美索不达米亚里拉与竖琴",
            "description": "[Mesopotamian lyres and harps]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-2999",
            "title": "埃及弓形竖琴",
            "description": "[Egyptian arched harps]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-2499",
            "title": "苏美尔牛首里拉",
            "description": "[Sumerian bull-headed lyres]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-1999",
            "title": "中国早期琴类弦乐器",
            "description": "[Early Chinese qin-type zithers]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-1499",
            "title": "东亚礼乐合奏中的青铜钟",
            "description": "[Bronze bells in East Asian ritual ensembles]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-1199",
            "title": "希腊世界的阿夫洛斯管与基萨拉琴",
            "description": "[Aulos and kithara in the Greek world]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-0999",
            "title": "笙的早期形态",
            "description": "[Early forms of the sheng mouth organ]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "-0699",
            "title": "中国大型编钟",
            "description": "[Large Chinese bianzhong bell sets]<br>不同尺寸与铸造厚度产生有组织的音高；曾侯乙墓编钟还显示一钟可发两个相关音，反映出高度成熟的音律与合奏设计。"
        },
        {
            "start": "-0499",
            "title": "水力管风琴",
            "description": "[Hydraulis water organ]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "0200",
            "title": "管风琴技术在罗马世界传播",
            "description": "[Organ technology spreads in the Roman world]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "0500",
            "title": "乌德琴家族发展",
            "description": "[Development of the oud family]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "0700",
            "title": "琵琶成为中国宫廷音乐核心乐器",
            "description": "[Pipa becomes central in Chinese court music]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "0800",
            "title": "日本雅乐中的笙",
            "description": "[Shō mouth organ in Japanese gagaku]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "0900",
            "title": "弓弦乐器拉巴卜传统扩展",
            "description": "[Bowed rebab traditions expand]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1000",
            "title": "中世纪欧洲竖琴与索尔特里琴",
            "description": "[Medieval European harp and psaltery]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1100",
            "title": "大型教堂管风琴发展",
            "description": "[Pipe organ develops large church forms]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1200",
            "title": "欧洲鲁特琴由乌德琴相关乐器发展",
            "description": "[European lute develops from oud-related instruments]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1200",
            "title": "西非科拉琴传统发展",
            "description": "[Kora traditions develop in West Africa]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1300",
            "title": "桑图尔与扬琴类乐器传播",
            "description": "[Santur and hammered-dulcimer families spread]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1400",
            "title": "击弦古钢琴进入欧洲键盘文化",
            "description": "[Clavichord enters European keyboard culture]<br>击弦机允许演奏者通过触键控制强弱，后来铸铁框架、交叉弦列和双擒纵机构扩大了音量、音域与快速重复能力。"
        },
        {
            "start": "1450",
            "title": "羽管键琴家族发展",
            "description": "[Harpsichord family develops]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1500",
            "title": "维奥尔琴家族",
            "description": "[Viola da gamba family]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1520",
            "title": "现代小提琴家族在意大利北部形成",
            "description": "[Modern violin family emerges in northern Italy]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1550",
            "title": "西塔琴在北印度发展",
            "description": "[Sitar develops in North India]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1560",
            "title": "文艺复兴欧洲横笛改进",
            "description": "[Transverse flute redesign in Renaissance Europe]<br>声部趋向均衡，模仿复调广泛使用；印刷乐谱和宫廷、教会网络使法兰德斯作曲技术传播到欧洲各地。"
        },
        {
            "start": "1600",
            "title": "筝在日本艺术音乐中定型",
            "description": "[Koto becomes established in Japanese art music]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1600",
            "title": "三味线在日本传播",
            "description": "[Shamisen spreads in Japan]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1650",
            "title": "斯特拉迪瓦里与克雷莫纳制琴传统",
            "description": "[Stradivari and Cremonese violin making]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1680",
            "title": "单簧管由沙吕莫管发展",
            "description": "[Clarinet developed from the chalumeau]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1700",
            "title": "克里斯托福里研制钢琴",
            "description": "[Cristofori develops the piano]<br>击弦机允许演奏者通过触键控制强弱，后来铸铁框架、交叉弦列和双擒纵机构扩大了音量、音域与快速重复能力。"
        },
        {
            "start": "1720",
            "title": "现存最早的克里斯托福里钢琴",
            "description": "[Earliest surviving Cristofori piano]<br>击弦机允许演奏者通过触键控制强弱，后来铸铁框架、交叉弦列和双擒纵机构扩大了音量、音域与快速重复能力。"
        },
        {
            "start": "1730",
            "title": "现代双簧管与巴松体系定型",
            "description": "[Modern oboe and bassoon families stabilize]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1750",
            "title": "古典乐团弦乐声部趋于标准化",
            "description": "[Classical orchestra standardizes string sections]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1770",
            "title": "古钢琴成为音乐会与家庭主要乐器",
            "description": "[Fortepiano becomes a leading concert and domestic instrument]<br>击弦机允许演奏者通过触键控制强弱，后来铸铁框架、交叉弦列和双擒纵机构扩大了音量、音域与快速重复能力。"
        },
        {
            "start": "1814",
            "title": "梅尔策尔为现代节拍器申请专利",
            "description": "[Mälzel patents the modern metronome]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1821",
            "title": "自由簧口琴发展",
            "description": "[Free-reed harmonica development]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1829",
            "title": "手风琴获得专利",
            "description": "[Accordion patented]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1830",
            "title": "双动踏板现代音乐会竖琴",
            "description": "[Modern concert harp with double-action pedals]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1832",
            "title": "贝姆式长笛开发开始",
            "description": "[Boehm-system flute development begins]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1835",
            "title": "大号获得专利",
            "description": "[Tuba patented]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1846",
            "title": "阿道夫·萨克斯为萨克斯管申请专利",
            "description": "[Saxophone patented by Adolphe Sax]<br>阿道夫·萨克斯试图把木管的灵活性与铜管的投射力结合；它后来成为军乐队、爵士和流行录音中的主要独奏声部。"
        },
        {
            "start": "1850",
            "title": "现代音乐会三角钢琴结构定型",
            "description": "[Modern concert grand piano architecture consolidates]<br>击弦机允许演奏者通过触键控制强弱，后来铸铁框架、交叉弦列和双擒纵机构扩大了音量、音域与快速重复能力。"
        },
        {
            "start": "1860",
            "title": "班多钮手风琴进入探戈文化",
            "description": "[Bandoneon enters tango culture]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1870",
            "title": "现代架子鼓组件开始整合",
            "description": "[Modern drum-kit components begin to combine]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1880",
            "title": "钢弦木吉他发展",
            "description": "[Steel-string acoustic guitar develops]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1890",
            "title": "为行进演奏开发苏萨号",
            "description": "[Sousaphone developed for marching performance]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1906",
            "title": "特尔哈莫尼姆公开演示",
            "description": "[Telharmonium public demonstrations]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1919",
            "title": "特雷门琴发明",
            "description": "[Theremin invented]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1924",
            "title": "电麦克风改变演出与录音",
            "description": "[Electric microphone transforms performance and recording]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1928",
            "title": "马特诺电子琴问世",
            "description": "[Ondes Martenot introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1931",
            "title": "商业电吉他出现",
            "description": "[Commercial electric guitar appears]<br>电磁拾音器把弦振动转换为电信号，使持续音、失真、反馈与效果器成为可作曲的音色参数，而不仅是扩大音量。"
        },
        {
            "start": "1934",
            "title": "哈蒙德风琴问世",
            "description": "[Hammond organ introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1935",
            "title": "德国磁带录音技术发展",
            "description": "[Magnetic tape recording advances in Germany]<br>可擦写磁带使剪接、多次录音、延迟与声层叠加成为日常制作方法；卡带又把复制、便携聆听和个人混音带带入大众生活。"
        },
        {
            "start": "1939",
            "title": "现代电贝司原型",
            "description": "[Modern electric bass prototypes]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1940",
            "title": "钢鼓在特立尼达和多巴哥发展",
            "description": "[Steelpan develops in Trinidad and Tobago]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1948",
            "title": "多轨录音实验",
            "description": "[Multitrack recording experiments]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1950",
            "title": "芬达Telecaster实心电吉他量产",
            "description": "[Fender Telecaster mass-produced solid-body guitar]<br>电磁拾音器把弦振动转换为电信号，使持续音、失真、反馈与效果器成为可作曲的音色参数，而不仅是扩大音量。"
        },
        {
            "start": "1951",
            "title": "芬达Precision Bass问世",
            "description": "[Fender Precision Bass introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1954",
            "title": "芬达Stratocaster问世",
            "description": "[Fender Stratocaster introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1957",
            "title": "RCA Mark II声音合成器",
            "description": "[RCA Mark II Sound Synthesizer]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1960",
            "title": "便携晶体管风琴与电键盘普及",
            "description": "[Portable transistor organs and electric keyboards spread]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1963",
            "title": "梅洛特朗问世",
            "description": "[Mellotron introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1964",
            "title": "穆格模块合成器演示",
            "description": "[Moog modular synthesizer demonstrated]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1965",
            "title": "失真等效果器重塑吉他音色",
            "description": "[Fuzz and effects pedals reshape guitar tone]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1970",
            "title": "Minimoog问世",
            "description": "[Minimoog introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1971",
            "title": "ARP 2600半模块合成器",
            "description": "[ARP 2600 semi-modular synthesizer]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1972",
            "title": "唱盘技术成为嘻哈创作乐器",
            "description": "[Turntable techniques become a compositional instrument in hip-hop]<br>DJ延长唱片中的break，MC以押韵语言组织现场，随后采样器、鼓机和多轨录音把街区文化发展为全球性的制作与叙事体系。"
        },
        {
            "start": "1975",
            "title": "复音合成器广泛使用",
            "description": "[Polyphonic synthesizers enter wider use]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1979",
            "title": "Fairlight CMI采样工作站",
            "description": "[Fairlight CMI sampling workstation]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1980",
            "title": "Roland TR-808鼓机",
            "description": "[Roland TR-808 drum machine]<br>可编程节奏把鼓声从实时演奏中分离出来；TR-808、TR-909等机器的非写实音色反而成为嘻哈、house、techno与流行音乐的标志。"
        },
        {
            "start": "1981",
            "title": "Roland TB-303贝司合成器",
            "description": "[Roland TB-303 bass synthesizer]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1982",
            "title": "数字合成器进入大众市场",
            "description": "[Digital synthesizers enter the mass market]<br>振荡器、滤波器、包络与调制把音色拆解为可控制模块；从大型模块系统到便携键盘和软件乐器，电子音色进入作曲与流行制作核心。"
        },
        {
            "start": "1983",
            "title": "MIDI公开演示并标准化",
            "description": "[MIDI publicly demonstrated and standardized]<br>统一的数字消息让不同厂商的键盘、合成器、鼓机和计算机交换音符、控制器与同步信息，建立了现代电子制作的互操作基础。"
        },
        {
            "start": "1983",
            "title": "雅马哈DX7问世",
            "description": "[Yamaha DX7 introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1984",
            "title": "平价数字采样器普及",
            "description": "[Affordable digital samplers spread]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1987",
            "title": "Akai MPC系列开始",
            "description": "[Akai MPC line begins]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1989",
            "title": "数字音频工作站出现",
            "description": "[Digital audio workstations emerge]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1997",
            "title": "Auto-Tune问世",
            "description": "[Auto-Tune introduced]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "1999",
            "title": "软件乐器与笔记本制作扩展",
            "description": "[Software instruments and laptop production expand]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "2001",
            "title": "Ableton Live发布",
            "description": "[Ableton Live released]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "2007",
            "title": "智能手机成为音乐制作与表演平台",
            "description": "[Smartphones become music-production and performance platforms]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "2010",
            "title": "平板乐器与触控界面普及",
            "description": "[Tablet instruments and touch interfaces spread]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
        },
        {
            "start": "2020",
            "title": "疫情期间网络远程演奏工具扩展",
            "description": "[Networked remote performance tools expand during the pandemic]<br>这一变化改变了演奏者能够控制的音高、力度、音色或时间精度，也影响了乐器制造、合奏编制和录音室工作方式。"
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
            "description": "[Hurrian hymn tablets]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "-0499",
            "title": "希腊和声理论发展",
            "description": "[Greek harmonic theory develops]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "-0299",
            "title": "中国律管与调式理论体系化",
            "description": "[Chinese pitch-pipe and modal theory codified]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "0100",
            "title": "塞基洛斯墓志铭保存完整古代记谱",
            "description": "[Seikilos epitaph preserves complete ancient notation]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "0200",
            "title": "《舞论》系统化南亚表演音乐理论",
            "description": "[Natya Shastra systematizes South Asian performance theory]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "0500",
            "title": "波爱修斯把古代音乐理论传入中世纪欧洲",
            "description": "[Boethius transmits ancient music theory to medieval Europe]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "0800",
            "title": "纽姆记谱在西方圣咏中传播",
            "description": "[Neumatic notation spreads in Western chant]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1025",
            "title": "圭多·达雷佐发展谱线教学法",
            "description": "[Guido of Arezzo develops staff-based pedagogy]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1250",
            "title": "定量记谱使节奏化复调成为可能",
            "description": "[Mensural notation enables measured polyphony]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1320",
            "title": "新艺术记谱扩展节奏可能性",
            "description": "[Ars nova notation expands rhythmic possibilities]<br>更精细的节奏记谱使二分法、切分和等节奏结构得以书写，马肖等人由此扩展了经文歌、弥撒与世俗歌曲的复杂度。"
        },
        {
            "start": "1450",
            "title": "乐谱抄写工坊扩大传播",
            "description": "[Music copying workshops expand manuscript circulation]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1501",
            "title": "佩特鲁奇出版重要复调印刷乐谱",
            "description": "[Petrucci publishes major collection of printed polyphonic music]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1558",
            "title": "扎利诺出版《和声论》",
            "description": "[Zarlino publishes Le istitutioni harmoniche]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1597",
            "title": "早期歌剧《达芙妮》上演",
            "description": "[Early opera Dafne produced]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1607",
            "title": "蒙特威尔第《奥菲欧》确立持久歌剧模式",
            "description": "[Monteverdi’s L’Orfeo establishes an enduring operatic model]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1637",
            "title": "威尼斯首座公共歌剧院开放",
            "description": "[First public opera house opens in Venice]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1669",
            "title": "巴黎歌剧院创立",
            "description": "[Paris Opera founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1672",
            "title": "伦敦持续性公共音乐会系列",
            "description": "[First sustained public concert series in London]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1710",
            "title": "雕版乐谱出版在欧洲扩展",
            "description": "[European music publishing expands through engraved editions]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1725",
            "title": "富克斯出版《通往帕纳索斯山的阶梯》",
            "description": "[Fux publishes Gradus ad Parnassum]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1750",
            "title": "公共音乐会文化在欧洲扩展",
            "description": "[Public concert culture expands across Europe]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1771",
            "title": "维也纳音乐家协会支持公共管弦音乐会",
            "description": "[Vienna Tonkünstler-Societät supports public orchestral concerts]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1795",
            "title": "巴黎音乐学院创立",
            "description": "[Paris Conservatoire founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1808",
            "title": "大型公共义演展示现代音乐会规模",
            "description": "[Large public benefit concert demonstrates modern concert scale]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1813",
            "title": "伦敦皇家爱乐协会成立",
            "description": "[Royal Philharmonic Society founded in London]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1824",
            "title": "贝多芬第九连接交响曲、合唱与公共人文主义",
            "description": "[Beethoven’s Ninth links symphony, chorus and public humanism]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1842",
            "title": "纽约爱乐乐团创立",
            "description": "[New York Philharmonic founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1843",
            "title": "莱比锡音乐学院创立",
            "description": "[Leipzig Conservatory founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1857",
            "title": "声波记录仪记录声波",
            "description": "[Phonautograph records sound waves]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1867",
            "title": "版权与表演权制度在欧洲扩展",
            "description": "[Copyright and performance-right systems expand in Europe]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1877",
            "title": "爱迪生用留声机演示录音与回放",
            "description": "[Edison demonstrates recording and playback with the phonograph]<br>声音第一次可以被固定、复制并脱离表演者反复播放，音乐由一次性事件转变为可销售、收藏和比较的媒介对象。"
        },
        {
            "start": "1887",
            "title": "唱片式留声机系统获专利",
            "description": "[Gramophone disc system patented]<br>声音第一次可以被固定、复制并脱离表演者反复播放，音乐由一次性事件转变为可销售、收藏和比较的媒介对象。"
        },
        {
            "start": "1891",
            "title": "卡内基音乐厅开幕",
            "description": "[Carnegie Hall opens]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1897",
            "title": "留声机公司成立",
            "description": "[Gramophone Company founded]<br>声音第一次可以被固定、复制并脱离表演者反复播放，音乐由一次性事件转变为可销售、收藏和比较的媒介对象。"
        },
        {
            "start": "1901",
            "title": "胜利留声机公司成立",
            "description": "[Victor Talking Machine Company founded]<br>声音第一次可以被固定、复制并脱离表演者反复播放，音乐由一次性事件转变为可销售、收藏和比较的媒介对象。"
        },
        {
            "start": "1906",
            "title": "Victrola将录音音乐带入家庭家具文化",
            "description": "[Victrola brings recorded music into domestic furniture culture]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1914",
            "title": "美国作曲家、作家与出版商协会成立",
            "description": "[ASCAP founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1920",
            "title": "商业广播开始重塑音乐听众",
            "description": "[Commercial radio broadcasting begins reshaping music audiences]<br>同一演出可同时进入大量家庭，节目编排、排行榜、现场转播与赞助制度由此重塑明星形成和地区风格传播。"
        },
        {
            "start": "1925",
            "title": "电录音取代声学录音",
            "description": "[Electrical recording replaces acoustic recording]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1927",
            "title": "首部长篇同步有声电影推动银幕音乐",
            "description": "[First feature-length synchronized-sound film accelerates screen music]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1935",
            "title": "磁带录音在广播规模演示",
            "description": "[Magnetic tape recording demonstrated at broadcasting scale]<br>同一演出可同时进入大量家庭，节目编排、排行榜、现场转播与赞助制度由此重塑明星形成和地区风格传播。"
        },
        {
            "start": "1936",
            "title": "《公告牌》发布重要流行音乐榜单",
            "description": "[Billboard publishes major popular-music charts]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1948",
            "title": "哥伦比亚推出33⅓转LP",
            "description": "[Columbia introduces the 33⅓ rpm LP]<br>33⅓转长时唱片把每面播放时间扩展到约二十分钟，促进交响曲、歌剧和概念专辑以连续的大型单元发行。"
        },
        {
            "start": "1949",
            "title": "RCA推出45转单曲唱片",
            "description": "[RCA introduces the 45 rpm single]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1954",
            "title": "便携晶体管收音机扩大青年听众",
            "description": "[Portable transistor radio expands youth listening]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1958",
            "title": "格莱美奖制度建立",
            "description": "[First Grammy Awards cycle established]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1958",
            "title": "立体声LP成为商业标准",
            "description": "[Stereo LP becomes a commercial standard]<br>33⅓转长时唱片把每面播放时间扩展到约二十分钟，促进交响曲、歌剧和概念专辑以连续的大型单元发行。"
        },
        {
            "start": "1962",
            "title": "盒式磁带问世",
            "description": "[Compact cassette introduced]<br>可擦写磁带使剪接、多次录音、延迟与声层叠加成为日常制作方法；卡带又把复制、便携聆听和个人混音带带入大众生活。"
        },
        {
            "start": "1964",
            "title": "穆格帮助确立电压控制电子制作",
            "description": "[Moog synthesizer helps establish voltage-controlled electronic production]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1967",
            "title": "《滚石》杂志创刊",
            "description": "[Rolling Stone magazine founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1979",
            "title": "索尼随身听使私人移动聆听成为主流",
            "description": "[Sony Walkman makes private mobile listening mainstream]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1981",
            "title": "MTV开播",
            "description": "[MTV launches]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1982",
            "title": "激光唱片商业发行",
            "description": "[Compact disc commercial launch]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1983",
            "title": "MIDI 1.0发布",
            "description": "[MIDI 1.0 published]<br>统一的数字消息让不同厂商的键盘、合成器、鼓机和计算机交换音符、控制器与同步信息，建立了现代电子制作的互操作基础。"
        },
        {
            "start": "1985",
            "title": "家长提示争议改变音乐标签制度",
            "description": "[Parental Advisory controversy reshapes music labeling]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1988",
            "title": "数字音频磁带进入市场",
            "description": "[Digital audio tape enters the market]<br>可擦写磁带使剪接、多次录音、延迟与声层叠加成为日常制作方法；卡带又把复制、便携聆听和个人混音带带入大众生活。"
        },
        {
            "start": "1991",
            "title": "SoundScan改变排行榜统计",
            "description": "[SoundScan changes chart measurement]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "1993",
            "title": "MP3标准与早期实现",
            "description": "[MPEG-1 Audio Layer III standard and early MP3 implementation]<br>感知编码通过舍弃较不易察觉的信息大幅缩小文件，使网络分发、点对点交换和便携播放器成为现实，也冲击了按实体载体销售的商业模式。"
        },
        {
            "start": "1995",
            "title": "“.mp3”扩展名采用",
            "description": "[.mp3 file extension adopted]<br>感知编码通过舍弃较不易察觉的信息大幅缩小文件，使网络分发、点对点交换和便携播放器成为现实，也冲击了按实体载体销售的商业模式。"
        },
        {
            "start": "1999",
            "title": "Napster启动点对点音乐分享",
            "description": "[Napster launches peer-to-peer music sharing]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2001",
            "title": "iPod发布",
            "description": "[iPod launched]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2003",
            "title": "iTunes音乐商店上线",
            "description": "[iTunes Music Store launches]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2005",
            "title": "YouTube上线",
            "description": "[YouTube launches]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2007",
            "title": "SoundCloud创立",
            "description": "[SoundCloud founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2008",
            "title": "Bandcamp创立",
            "description": "[Bandcamp founded]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2008",
            "title": "Spotify上线",
            "description": "[Spotify launches]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2011",
            "title": "全球统一发行日机制逐步形成",
            "description": "[Global album-release day coordination begins evolving]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2015",
            "title": "星期五成为全球统一发行日",
            "description": "[Friday becomes the coordinated global release day]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2015",
            "title": "流媒体成为排行榜与认证体系核心",
            "description": "[Streaming becomes central to chart and certification systems]<br>按需访问取代拥有单张唱片，播放列表、推荐算法和按次分成开始影响歌曲长度、发行节奏、市场发现与收入结构。"
        },
        {
            "start": "2017",
            "title": "订阅流媒体成为唱片业增长核心",
            "description": "[Subscription streaming becomes the dominant growth engine of recorded music]<br>按需访问取代拥有单张唱片，播放列表、推荐算法和按次分成开始影响歌曲长度、发行节奏、市场发现与收入结构。"
        },
        {
            "start": "2020",
            "title": "新冠停演期间直播演唱会成为大众形式",
            "description": "[Livestream concerts become a mass format during COVID-19 closures]<br>它改变了音乐如何被记录、复制、教授、授权、传播或计价，因此影响的不只是声音本身，也包括音乐人的劳动方式和听众的接触路径。"
        },
        {
            "start": "2023",
            "title": "生成式AI加剧关于作者权、训练数据与音乐劳动的争论",
            "description": "[Generative AI intensifies debates over authorship, training data and musical labor]<br>模型能够生成旋律、伴奏、歌声和完整音频，同时使训练数据许可、风格模仿、声音身份、署名和劳动替代成为产业与法律争议。"
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
            "description": "[Sappho]<br>Sappho可通过 surviving lyric fragments such as the “Ode to Aphrodite” 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与古代与仪式音乐更广泛的演变。"
        },
        {
            "start": "0497",
            "title": "Boethius（477–524）",
            "description": "[Boethius]<br>Boethius可通过 De institutione musica 被具体定位。作品中的理论、记谱与音乐观念连接了个人风格与中世纪音乐更广泛的演变。"
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen（1098–1179）",
            "description": "[Hildegard of Bingen]<br>Hildegard of Bingen的代表性成果包括 Ordo Virtutum and the Symphonia armoniae celestium revelationum。这些作品把其在中世纪音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1170",
            "title": "Léonin（1150–1201）",
            "description": "[Léonin]<br>理解Léonin最直接的入口是 the Magnus liber organi tradition associated with Notre-Dame polyphony。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入中世纪音乐的常用语言。"
        },
        {
            "start": "1180",
            "title": "Pérotin（1160–1230）",
            "description": "[Pérotin]<br>理解Pérotin最直接的入口是 Viderunt omnes and Sederunt principes。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入中世纪音乐的常用语言。"
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut（1300–1377）",
            "description": "[Guillaume de Machaut]<br>理解Guillaume de Machaut最直接的入口是 Messe de Nostre Dame and the ballade Douce dame jolie。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入中世纪音乐的常用语言。"
        },
        {
            "start": "1345",
            "title": "Francesco Landini（1325–1397）",
            "description": "[Francesco Landini]<br>Francesco Landini可通过 the ballata Ecco la primavera and the cadence later called the Landini cadence 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与中世纪音乐更广泛的演变。"
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay（1397–1474）",
            "description": "[Guillaume Du Fay]<br>Nuper rosarum flores and the Missa Se la face ay pale构成Guillaume Du Fay历史位置的具体证据：重点不只在知名度，而在这些材料如何改变文艺复兴音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem（1410–1497）",
            "description": "[Johannes Ockeghem]<br>理解Johannes Ockeghem最直接的入口是 Missa prolationum and the Requiem。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入文艺复兴音乐的常用语言。"
        },
        {
            "start": "1470",
            "title": "Josquin des Prez（1450–1521）",
            "description": "[Josquin des Prez]<br>Ave Maria…virgo serena and Missa Pange lingua构成Josquin des Prez历史位置的具体证据：重点不只在知名度，而在这些材料如何改变文艺复兴音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1510",
            "title": "Adrian Willaert（1490–1562）",
            "description": "[Adrian Willaert]<br>Adrian Willaert可通过 the Venetian polychoral tradition and Musica nova 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与文艺复兴音乐更广泛的演变。"
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina（1525–1594）",
            "description": "[Giovanni Pierluigi da Palestrina]<br>理解Giovanni Pierluigi da Palestrina最直接的入口是 Missa Papae Marcelli and Sicut cervus。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入文艺复兴音乐的常用语言。"
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso（1532–1594）",
            "description": "[Orlando di Lasso]<br>Prophetiae Sibyllarum and a large multilingual sacred and secular catalogue构成Orlando di Lasso历史位置的具体证据：重点不只在知名度，而在这些材料如何改变文艺复兴音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1560",
            "title": "William Byrd（1540–1623）",
            "description": "[William Byrd]<br>William Byrd的代表性成果包括 Mass for Four Voices, Gradualia and English keyboard music in My Ladye Nevells Booke。这些作品把其在文艺复兴音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi（1567–1643）",
            "description": "[Claudio Monteverdi]<br>L’Orfeo, the 1610 Vespers and L’incoronazione di Poppea构成Claudio Monteverdi历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi（1583–1643）",
            "description": "[Girolamo Frescobaldi]<br>Girolamo Frescobaldi的代表性成果包括 Fiori musicali and the Toccate e partite collections。这些作品把其在巴洛克音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz（1585–1672）",
            "description": "[Heinrich Schütz]<br>Psalmen Davids, Symphoniae sacrae and the Christmas Story构成Heinrich Schütz历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully（1632–1687）",
            "description": "[Jean-Baptiste Lully]<br>理解Jean-Baptiste Lully最直接的入口是 Armide and the codification of French tragédie lyrique and the French overture。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入巴洛克音乐的常用语言。"
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude（1637–1707）",
            "description": "[Dieterich Buxtehude]<br>Dieterich Buxtehude可通过 organ praeludia and the Lübeck Abendmusiken 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与巴洛克音乐更广泛的演变。"
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli（1653–1713）",
            "description": "[Arcangelo Corelli]<br>Op. 5 violin sonatas and Op. 6 concerti grossi构成Arcangelo Corelli历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1679",
            "title": "Henry Purcell（1659–1695）",
            "description": "[Henry Purcell]<br>理解Henry Purcell最直接的入口是 Dido and Aeneas, King Arthur and Music for the Funeral of Queen Mary。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入巴洛克音乐的常用语言。"
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti（1660–1725）",
            "description": "[Alessandro Scarlatti]<br>Alessandro Scarlatti可通过 more than one hundred operas and the development of the Italian da capo aria 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与巴洛克音乐更广泛的演变。"
        },
        {
            "start": "1688",
            "title": "François Couperin（1668–1733）",
            "description": "[François Couperin]<br>Pièces de clavecin and Les Nations构成François Couperin历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi（1678–1741）",
            "description": "[Antonio Vivaldi]<br>Antonio Vivaldi可通过 The Four Seasons and L’estro armonico 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与巴洛克音乐更广泛的演变。"
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann（1681–1767）",
            "description": "[Georg Philipp Telemann]<br>Tafelmusik and the Paris Quartets构成Georg Philipp Telemann历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau（1683–1764）",
            "description": "[Jean-Philippe Rameau]<br>理解Jean-Philippe Rameau最直接的入口是 Traité de l’harmonie, Hippolyte et Aricie and Les Indes galantes。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入巴洛克音乐的常用语言。"
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti（1685–1757）",
            "description": "[Domenico Scarlatti]<br>理解Domenico Scarlatti最直接的入口是 more than 550 keyboard sonatas written largely for the Iberian court。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入巴洛克音乐的常用语言。"
        },
        {
            "start": "1705",
            "title": "George Frideric Handel（1685–1759）",
            "description": "[George Frideric Handel]<br>理解George Frideric Handel最直接的入口是 Messiah, Giulio Cesare and Music for the Royal Fireworks。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入巴洛克音乐的常用语言。"
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach（1685–1750）",
            "description": "[Johann Sebastian Bach]<br>the Brandenburg Concertos, Well-Tempered Clavier, St Matthew Passion and Art of Fugue构成Johann Sebastian Bach历史位置的具体证据：重点不只在知名度，而在这些材料如何改变巴洛克音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach（1714–1788）",
            "description": "[Carl Philipp Emanuel Bach]<br>理解Carl Philipp Emanuel Bach最直接的入口是 the Essay on the True Art of Playing Keyboard Instruments and empfindsamer Stil sonatas。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入古典主义音乐的常用语言。"
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck（1714–1787）",
            "description": "[Christoph Willibald Gluck]<br>Orfeo ed Euridice and the reform of opera seria构成Christoph Willibald Gluck历史位置的具体证据：重点不只在知名度，而在这些材料如何改变古典主义音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1752",
            "title": "Joseph Haydn（1732–1809）",
            "description": "[Joseph Haydn]<br>理解Joseph Haydn最直接的入口是 the London symphonies, Op. 33 quartets and The Creation。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入古典主义音乐的常用语言。"
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini（1743–1805）",
            "description": "[Luigi Boccherini]<br>Luigi Boccherini的代表性成果包括 the Minuet from Op. 11 No. 5 and numerous string quintets。这些作品把其在古典主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1770",
            "title": "Antonio Salieri（1750–1825）",
            "description": "[Antonio Salieri]<br>理解Antonio Salieri最直接的入口是 Les Danaïdes, Tarare and a major teaching career in Vienna。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入古典主义音乐的常用语言。"
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart（1756–1791）",
            "description": "[Wolfgang Amadeus Mozart]<br>The Marriage of Figaro, Don Giovanni, the late symphonies and the Requiem构成Wolfgang Amadeus Mozart历史位置的具体证据：重点不只在知名度，而在这些材料如何改变古典主义音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven（1770–1827）",
            "description": "[Ludwig van Beethoven]<br>理解Ludwig van Beethoven最直接的入口是 the nine symphonies, late string quartets, piano sonatas and Fidelio。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入古典主义音乐的常用语言。"
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini（1782–1840）",
            "description": "[Niccolò Paganini]<br>理解Niccolò Paganini最直接的入口是 24 Caprices for Solo Violin and virtuoso concertos。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber（1786–1826）",
            "description": "[Carl Maria von Weber]<br>Carl Maria von Weber的代表性成果包括 Der Freischütz and Konzertstück for piano and orchestra。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini（1792–1868）",
            "description": "[Gioachino Rossini]<br>Gioachino Rossini的代表性成果包括 The Barber of Seville, William Tell and the crescendo-driven style of his comic operas。这些作品把其在歌剧中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1817",
            "title": "Franz Schubert（1797–1828）",
            "description": "[Franz Schubert]<br>理解Franz Schubert最直接的入口是 Winterreise, Erlkönig, the “Unfinished” Symphony and late chamber music。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1823",
            "title": "Hector Berlioz（1803–1869）",
            "description": "[Hector Berlioz]<br>Hector Berlioz的代表性成果包括 Symphonie fantastique and the Treatise on Instrumentation。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka（1804–1857）",
            "description": "[Mikhail Glinka]<br>理解Mikhail Glinka最直接的入口是 A Life for the Tsar and Ruslan and Lyudmila。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn（1809–1847）",
            "description": "[Felix Mendelssohn]<br>Felix Mendelssohn的代表性成果包括 the Octet, A Midsummer Night’s Dream music and the revival of Bach’s St Matthew Passion。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin（1810–1849）",
            "description": "[Frédéric Chopin]<br>理解Frédéric Chopin最直接的入口是 the nocturnes, études, mazurkas and ballades for piano。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1830",
            "title": "Robert Schumann（1810–1856）",
            "description": "[Robert Schumann]<br>Robert Schumann可通过 Dichterliebe, Carnaval and the Piano Quintet 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1831",
            "title": "Franz Liszt（1811–1886）",
            "description": "[Franz Liszt]<br>Franz Liszt可通过 the Transcendental Études, Hungarian Rhapsodies and the symphonic poem 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi（1813–1901）",
            "description": "[Giuseppe Verdi]<br>Giuseppe Verdi的代表性成果包括 Rigoletto, La traviata, Aida and the Requiem。这些作品把其在歌剧中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1833",
            "title": "Richard Wagner（1813–1883）",
            "description": "[Richard Wagner]<br>理解Richard Wagner最直接的入口是 Tristan und Isolde, Der Ring des Nibelungen and the leitmotif-based music drama。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入歌剧的常用语言。"
        },
        {
            "start": "1839",
            "title": "Clara Schumann（1819–1896）",
            "description": "[Clara Schumann]<br>Clara Schumann的代表性成果包括 the Piano Concerto, Romances for violin and piano, and a career that reshaped the modern recital。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach（1819–1880）",
            "description": "[Jacques Offenbach]<br>Jacques Offenbach的代表性成果包括 Orpheus in the Underworld and La belle Hélène。这些作品把其在歌剧中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1844",
            "title": "Anton Bruckner（1824–1896）",
            "description": "[Anton Bruckner]<br>Anton Bruckner的代表性成果包括 the mature symphonies, especially Nos. 4, 7, 8 and 9。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana（1824–1884）",
            "description": "[Bedřich Smetana]<br>理解Bedřich Smetana最直接的入口是 Má vlast and The Bartered Bride。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1845",
            "title": "Johann Strauss II（1825–1899）",
            "description": "[Johann Strauss II]<br>理解Johann Strauss II最直接的入口是 The Blue Danube, Die Fledermaus and the orchestral Viennese waltz。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1853",
            "title": "Johannes Brahms（1833–1897）",
            "description": "[Johannes Brahms]<br>Johannes Brahms可通过 four symphonies, A German Requiem and late chamber music 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns（1835–1921）",
            "description": "[Camille Saint-Saëns]<br>Camille Saint-Saëns可通过 Samson et Dalila, Symphony No. 3 and The Carnival of the Animals 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1858",
            "title": "Georges Bizet（1838–1875）",
            "description": "[Georges Bizet]<br>Carmen and L’Arlésienne构成Georges Bizet历史位置的具体证据：重点不只在知名度，而在这些材料如何改变歌剧中的作曲、曲式与音响组织。"
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky（1839–1881）",
            "description": "[Modest Mussorgsky]<br>Modest Mussorgsky可通过 Boris Godunov, Pictures at an Exhibition and Songs and Dances of Death 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky（1840–1893）",
            "description": "[Pyotr Ilyich Tchaikovsky]<br>Pyotr Ilyich Tchaikovsky的代表性成果包括 Swan Lake, The Nutcracker, the First Piano Concerto and Symphony No. 6。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák（1841–1904）",
            "description": "[Antonín Dvořák]<br>理解Antonín Dvořák最直接的入口是 Symphony No. 9, the “American” Quartet and the Cello Concerto。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1863",
            "title": "Edvard Grieg（1843–1907）",
            "description": "[Edvard Grieg]<br>Edvard Grieg的代表性成果包括 the Piano Concerto, Peer Gynt music and Lyric Pieces。这些作品把其在浪漫主义音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov（1844–1908）",
            "description": "[Nikolai Rimsky-Korsakov]<br>Nikolai Rimsky-Korsakov可通过 Scheherazade, The Golden Cockerel and Principles of Orchestration 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré（1845–1924）",
            "description": "[Gabriel Fauré]<br>理解Gabriel Fauré最直接的入口是 the Requiem, nocturnes and late chamber music。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入浪漫主义音乐的常用语言。"
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini（1858–1924）",
            "description": "[Giacomo Puccini]<br>La bohème, Tosca, Madama Butterfly and Turandot构成Giacomo Puccini历史位置的具体证据：重点不只在知名度，而在这些材料如何改变歌剧中的作曲、曲式与音响组织。"
        },
        {
            "start": "1880",
            "title": "Gustav Mahler（1860–1911）",
            "description": "[Gustav Mahler]<br>Gustav Mahler可通过 the symphonic song cycles and nine completed symphonies 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1882",
            "title": "Claude Debussy（1862–1918）",
            "description": "[Claude Debussy]<br>理解Claude Debussy最直接的入口是 Prélude à l’après-midi d’un faune, La mer and Pelléas et Mélisande。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入现代与当代艺术音乐的常用语言。"
        },
        {
            "start": "1884",
            "title": "Richard Strauss（1864–1949）",
            "description": "[Richard Strauss]<br>Also sprach Zarathustra, Der Rosenkavalier and the late Four Last Songs构成Richard Strauss历史位置的具体证据：重点不只在知名度，而在这些材料如何改变浪漫主义音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1885",
            "title": "Jean Sibelius（1865–1957）",
            "description": "[Jean Sibelius]<br>Finlandia, the Violin Concerto and seven symphonies构成Jean Sibelius历史位置的具体证据：重点不只在知名度，而在这些材料如何改变浪漫主义音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1886",
            "title": "Erik Satie（1866–1925）",
            "description": "[Erik Satie]<br>理解Erik Satie最直接的入口是 the Gymnopédies, Gnossiennes and the concept of musique d’ameublement。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入现代与当代艺术音乐的常用语言。"
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams（1872–1958）",
            "description": "[Ralph Vaughan Williams]<br>Ralph Vaughan Williams可通过 Fantasia on a Theme by Thomas Tallis and nine symphonies 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff（1873–1943）",
            "description": "[Sergei Rachmaninoff]<br>Sergei Rachmaninoff可通过 the Second and Third Piano Concertos, piano preludes and Symphonic Dances 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与浪漫主义音乐更广泛的演变。"
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg（1874–1951）",
            "description": "[Arnold Schoenberg]<br>Arnold Schoenberg的代表性成果包括 Pierrot lunaire, the twelve-tone method and A Survivor from Warsaw。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1894",
            "title": "Gustav Holst（1874–1934）",
            "description": "[Gustav Holst]<br>Gustav Holst的代表性成果包括 The Planets and English choral works。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1895",
            "title": "Maurice Ravel（1875–1937）",
            "description": "[Maurice Ravel]<br>Maurice Ravel的代表性成果包括 Daphnis et Chloé, Boléro and the orchestration of Pictures at an Exhibition。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1901",
            "title": "Béla Bartók（1881–1945）",
            "description": "[Béla Bartók]<br>Béla Bartók可通过 Music for Strings, Percussion and Celesta, six string quartets and fieldwork on folk music 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky（1882–1971）",
            "description": "[Igor Stravinsky]<br>Igor Stravinsky可通过 The Firebird, Petrushka, The Rite of Spring and later neoclassical and serial works 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1903",
            "title": "Anton Webern（1883–1945）",
            "description": "[Anton Webern]<br>Anton Webern可通过 concise twelve-tone works such as the Symphony Op. 21 and Variations Op. 30 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1905",
            "title": "Alban Berg（1885–1935）",
            "description": "[Alban Berg]<br>Wozzeck, Lulu and the Violin Concerto构成Alban Berg历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev（1891–1953）",
            "description": "[Sergei Prokofiev]<br>Sergei Prokofiev的代表性成果包括 Romeo and Juliet, the Classical Symphony and the Third Piano Concerto。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1912",
            "title": "Arthur Honegger（1892–1955）",
            "description": "[Arthur Honegger]<br>理解Arthur Honegger最直接的入口是 Pacific 231 and Jeanne d’Arc au bûcher。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入现代与当代艺术音乐的常用语言。"
        },
        {
            "start": "1912",
            "title": "Darius Milhaud（1892–1974）",
            "description": "[Darius Milhaud]<br>Darius Milhaud的代表性成果包括 La création du monde and polytonal works shaped by jazz and Brazilian music。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1915",
            "title": "Carl Orff（1895–1982）",
            "description": "[Carl Orff]<br>Carl Orff可通过 Carmina Burana and the Orff Schulwerk approach to music education 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1915",
            "title": "Paul Hindemith（1895–1963）",
            "description": "[Paul Hindemith]<br>Paul Hindemith的代表性成果包括 Mathis der Maler, Ludus Tonalis and Gebrauchsmusik。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1918",
            "title": "George Gershwin（1898–1937）",
            "description": "[George Gershwin]<br>George Gershwin的代表性成果包括 Rhapsody in Blue, An American in Paris and Porgy and Bess。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1920",
            "title": "Aaron Copland（1900–1990）",
            "description": "[Aaron Copland]<br>Appalachian Spring, Billy the Kid and the Third Symphony构成Aaron Copland历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich（1906–1975）",
            "description": "[Dmitri Shostakovich]<br>Dmitri Shostakovich可通过 fifteen symphonies, fifteen string quartets and the opera Lady Macbeth of Mtsensk 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen（1908–1992）",
            "description": "[Olivier Messiaen]<br>Olivier Messiaen可通过 Quartet for the End of Time, Turangalîla-Symphonie and Catalogue d’oiseaux 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1932",
            "title": "John Cage（1912–1992）",
            "description": "[John Cage]<br>John Cage可通过 4′33″, prepared-piano works and chance procedures developed with the I Ching 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1933",
            "title": "Benjamin Britten（1913–1976）",
            "description": "[Benjamin Britten]<br>Benjamin Britten的代表性成果包括 Peter Grimes, War Requiem and The Young Person’s Guide to the Orchestra。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein（1918–1990）",
            "description": "[Leonard Bernstein]<br>Leonard Bernstein可通过 West Side Story, the Jeremiah and Kaddish symphonies, and televised Young People’s Concerts 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1943",
            "title": "György Ligeti（1923–2006）",
            "description": "[György Ligeti]<br>Atmosphères, Lux aeterna and the opera Le Grand Macabre构成György Ligeti历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1945",
            "title": "Pierre Boulez（1925–2016）",
            "description": "[Pierre Boulez]<br>Pierre Boulez的代表性成果包括 Le Marteau sans maître, Structures and leadership at IRCAM。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen（1928–2007）",
            "description": "[Karlheinz Stockhausen]<br>Karlheinz Stockhausen的代表性成果包括 Gesang der Jünglinge, Kontakte and the Licht opera cycle。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu（1930–1996）",
            "description": "[Tōru Takemitsu]<br>Tōru Takemitsu可通过 November Steps, Requiem for Strings and film scores that blend Japanese and Western timbres 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与现代与当代艺术音乐更广泛的演变。"
        },
        {
            "start": "1955",
            "title": "Arvo Pärt（born 1935）",
            "description": "[Arvo Pärt]<br>Tabula Rasa, Fratres and the tintinnabuli technique构成Arvo Pärt历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1956",
            "title": "Steve Reich（born 1936）",
            "description": "[Steve Reich]<br>It’s Gonna Rain, Music for 18 Musicians and Different Trains构成Steve Reich历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1957",
            "title": "Philip Glass（born 1937）",
            "description": "[Philip Glass]<br>Philip Glass的代表性成果包括 Einstein on the Beach, Glassworks and repetitive additive-process writing。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1967",
            "title": "John Adams（born 1947）",
            "description": "[John Adams]<br>理解John Adams最直接的入口是 Harmonielehre, Nixon in China and Short Ride in a Fast Machine。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入现代与当代艺术音乐的常用语言。"
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho（1952–2023）",
            "description": "[Kaija Saariaho]<br>Kaija Saariaho的代表性成果包括 L’Amour de loin, Graal théâtre and spectral-electronic approaches to timbre。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1977",
            "title": "Tan Dun（born 1957）",
            "description": "[Tan Dun]<br>Water Concerto, the opera The First Emperor and the score for Crouching Tiger, Hidden Dragon构成Tan Dun历史位置的具体证据：重点不只在知名度，而在这些材料如何改变现代与当代艺术音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1981",
            "title": "Unsuk Chin（born 1961）",
            "description": "[Unsuk Chin]<br>Unsuk Chin的代表性成果包括 the Violin Concerto, Alice in Wonderland and vivid orchestral writing shaped by electronics。这些作品把其在现代与当代艺术音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
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
            "description": "[Scott Joplin]<br>理解Scott Joplin最直接的入口是 Maple Leaf Rag and the opera Treemonisha。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1893",
            "title": "W. C. Handy（1873–1958）",
            "description": "[W. C. Handy]<br>St. Louis Blues and Memphis Blues, among the first widely published blues compositions构成W. C. Handy历史位置的具体证据：重点不只在知名度，而在这些材料如何改变蓝调中的作曲、曲式与音响组织。"
        },
        {
            "start": "1906",
            "title": "Ma Rainey（1886–1939）",
            "description": "[Ma Rainey]<br>See See Rider Blues and Prove It on Me Blues构成Ma Rainey历史位置的具体证据：重点不只在知名度，而在这些材料如何改变蓝调中的声音、措辞与录音表演。"
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton（1890–1941）",
            "description": "[Jelly Roll Morton]<br>Jelly Roll Morton的代表性成果包括 Black Bottom Stomp, King Porter Stomp and the Red Hot Peppers recordings。这些作品把其在爵士中的合奏编制、编曲和乐队声音保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1914",
            "title": "Bessie Smith（1894–1937）",
            "description": "[Bessie Smith]<br>Bessie Smith的代表性成果包括 Downhearted Blues, St. Louis Blues and Nobody Knows You When You’re Down and Out。这些作品把其在蓝调中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson（1897–1952）",
            "description": "[Fletcher Henderson]<br>Fletcher Henderson可通过 arrangements such as Wrappin’ It Up that helped define big-band swing 被具体定位。作品中的合奏编制、编曲和乐队声音连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford（1897–1952）",
            "description": "[Jimmie Lunceford]<br>理解Jimmie Lunceford最直接的入口是 Rhythm Is Our Business and the band’s precise two-beat swing style。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1917",
            "title": "Sidney Bechet（1897–1959）",
            "description": "[Sidney Bechet]<br>Sidney Bechet可通过 Summertime and Blue Horizon, with a powerful soprano-saxophone voice 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1919",
            "title": "Duke Ellington（1899–1974）",
            "description": "[Duke Ellington]<br>理解Duke Ellington最直接的入口是 Black and Tan Fantasy, Mood Indigo, Ko-Ko and extended suites such as Black, Brown and Beige。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1921",
            "title": "Louis Armstrong（1901–1971）",
            "description": "[Louis Armstrong]<br>理解Louis Armstrong最直接的入口是 the Hot Five and Hot Seven recordings, West End Blues and later vocal hits。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke（1903–1931）",
            "description": "[Bix Beiderbecke]<br>Bix Beiderbecke的代表性成果包括 Singin’ the Blues and In a Mist。这些作品把其在爵士中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins（1904–1969）",
            "description": "[Coleman Hawkins]<br>Coleman Hawkins的代表性成果包括 Body and Soul and the establishment of the tenor saxophone as a major jazz voice。这些作品把其在爵士中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1924",
            "title": "Count Basie（1904–1984）",
            "description": "[Count Basie]<br>理解Count Basie最直接的入口是 One O’Clock Jump, Jumpin’ at the Woodside and a rhythm-section-centered swing style。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1924",
            "title": "Fats Waller（1904–1943）",
            "description": "[Fats Waller]<br>理解Fats Waller最直接的入口是 Ain’t Misbehavin’, Honeysuckle Rose and Harlem stride piano。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1929",
            "title": "Art Tatum（1909–1956）",
            "description": "[Art Tatum]<br>Tea for Two and solo recordings that expanded jazz piano harmony and technique构成Art Tatum历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1930",
            "title": "Django Reinhardt（1910–1953）",
            "description": "[Django Reinhardt]<br>Django Reinhardt的代表性成果包括 Minor Swing, Nuages and the Quintette du Hot Club de France。这些作品把其在爵士中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf（1910–1976）",
            "description": "[Howlin’ Wolf]<br>Smokestack Lightning, Spoonful and a commanding electric Chicago-blues sound构成Howlin’ Wolf历史位置的具体证据：重点不只在知名度，而在这些材料如何改变蓝调中的声音、措辞与录音表演。"
        },
        {
            "start": "1930",
            "title": "T-Bone Walker（1910–1975）",
            "description": "[T-Bone Walker]<br>T-Bone Walker可通过 Call It Stormy Monday and early single-string electric-blues guitar 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与蓝调更广泛的演变。"
        },
        {
            "start": "1931",
            "title": "Robert Johnson（1911–1938）",
            "description": "[Robert Johnson]<br>理解Robert Johnson最直接的入口是 Cross Road Blues, Hellhound on My Trail and the 1936–37 sessions。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入蓝调的常用语言。"
        },
        {
            "start": "1933",
            "title": "Muddy Waters（1913–1983）",
            "description": "[Muddy Waters]<br>理解Muddy Waters最直接的入口是 Hoochie Coochie Man, Mannish Boy and the amplified Chicago-blues ensemble。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入蓝调的常用语言。"
        },
        {
            "start": "1935",
            "title": "Billie Holiday（1915–1959）",
            "description": "[Billie Holiday]<br>Billie Holiday可通过 Strange Fruit, God Bless the Child and a behind-the-beat vocal phrasing style 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe（1915–1973）",
            "description": "[Sister Rosetta Tharpe]<br>Sister Rosetta Tharpe的代表性成果包括 Strange Things Happening Every Day and electric-guitar gospel performances。这些作品把其在福音音乐中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1936",
            "title": "Charlie Christian（1916–1942）",
            "description": "[Charlie Christian]<br>理解Charlie Christian最直接的入口是 Solo Flight and amplified-guitar work with Benny Goodman。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie（1917–1993）",
            "description": "[Dizzy Gillespie]<br>Dizzy Gillespie的代表性成果包括 A Night in Tunisia, Groovin’ High and Afro-Cuban collaborations with Chano Pozo。这些作品把其在爵士中的合奏编制、编曲和乐队声音保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald（1917–1996）",
            "description": "[Ella Fitzgerald]<br>the Song Book albums and virtuosic scat performances such as Mack the Knife live in Berlin构成Ella Fitzgerald历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的声音、措辞与录音表演。"
        },
        {
            "start": "1937",
            "title": "Thelonious Monk（1917–1982）",
            "description": "[Thelonious Monk]<br>Thelonious Monk可通过 Round Midnight, Straight, No Chaser and angular compositions built from silence and dissonance 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1940",
            "title": "Charlie Parker（1920–1955）",
            "description": "[Charlie Parker]<br>理解Charlie Parker最直接的入口是 Ko-Ko, Ornithology and the rapid harmonic language of bebop alto saxophone。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1940",
            "title": "Dave Brubeck（1920–2012）",
            "description": "[Dave Brubeck]<br>Time Out and Take Five, popularizing unusual meters in modern jazz构成Dave Brubeck历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的作曲、曲式与音响组织。"
        },
        {
            "start": "1942",
            "title": "Charles Mingus（1922–1979）",
            "description": "[Charles Mingus]<br>理解Charles Mingus最直接的入口是 Mingus Ah Um, The Black Saint and the Sinner Lady and politically charged ensemble writing。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1944",
            "title": "Bud Powell（1924–1966）",
            "description": "[Bud Powell]<br>Un Poco Loco and a bebop piano language modeled on horn phrasing构成Bud Powell历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan（1924–1990）",
            "description": "[Sarah Vaughan]<br>理解Sarah Vaughan最直接的入口是 Misty, Lullaby of Birdland and an unusually wide vocal range and harmonic control。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1945",
            "title": "B. B. King（1925–2015）",
            "description": "[B. B. King]<br>理解B. B. King最直接的入口是 The Thrill Is Gone, Live at the Regal and the singing single-note guitar style associated with Lucille。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入蓝调的常用语言。"
        },
        {
            "start": "1946",
            "title": "John Coltrane（1926–1967）",
            "description": "[John Coltrane]<br>John Coltrane可通过 Giant Steps, My Favorite Things and A Love Supreme 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1946",
            "title": "Miles Davis（1926–1991）",
            "description": "[Miles Davis]<br>理解Miles Davis最直接的入口是 Birth of the Cool, Kind of Blue, Miles Smiles and Bitches Brew。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1949",
            "title": "Bill Evans（1929–1980）",
            "description": "[Bill Evans]<br>Bill Evans的代表性成果包括 Sunday at the Village Vanguard and a conversational piano-trio concept。这些作品把其在爵士中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1949",
            "title": "Cecil Taylor（1929–2018）",
            "description": "[Cecil Taylor]<br>Cecil Taylor可通过 Unit Structures and percussive, densely organized free-jazz piano 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1949",
            "title": "Chet Baker（1929–1988）",
            "description": "[Chet Baker]<br>理解Chet Baker最直接的入口是 My Funny Valentine and the cool-jazz combination of trumpet and intimate vocals。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1950",
            "title": "Clifford Brown（1930–1986）",
            "description": "[Clifford Brown]<br>理解Clifford Brown最直接的入口是 Clifford Brown and Max Roach and a warm, technically exact trumpet style。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1950",
            "title": "Ornette Coleman（1930–2015）",
            "description": "[Ornette Coleman]<br>Ornette Coleman的代表性成果包括 The Shape of Jazz to Come and Free Jazz。这些作品把其在爵士中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1950",
            "title": "Ray Charles（1930–2004）",
            "description": "[Ray Charles]<br>I Got a Woman, What’d I Say and Modern Sounds in Country and Western Music构成Ray Charles历史位置的具体证据：重点不只在知名度，而在这些材料如何改变节奏布鲁斯中的声音、措辞与录音表演。"
        },
        {
            "start": "1950",
            "title": "Sonny Rollins（born 1930）",
            "description": "[Sonny Rollins]<br>Saxophone Colossus, The Bridge and extended thematic improvisation构成Sonny Rollins历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1951",
            "title": "Sam Cooke（1931–1964）",
            "description": "[Sam Cooke]<br>You Send Me, Bring It On Home to Me and A Change Is Gonna Come构成Sam Cooke历史位置的具体证据：重点不只在知名度，而在这些材料如何改变灵魂乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1953",
            "title": "James Brown（1933–2006）",
            "description": "[James Brown]<br>James Brown的代表性成果包括 Papa’s Got a Brand New Bag, Cold Sweat and the rhythmic foundations of funk。这些作品把其在放克中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1953",
            "title": "Nina Simone（1933–2006）",
            "description": "[Nina Simone]<br>理解Nina Simone最直接的入口是 I Put a Spell on You, Sinnerman and Mississippi Goddam。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1953",
            "title": "Wayne Shorter（1933–2023）",
            "description": "[Wayne Shorter]<br>Wayne Shorter可通过 Speak No Evil, JuJu and compositions for Miles Davis’s second quintet and Weather Report 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1959",
            "title": "Marvin Gaye（1939–1984）",
            "description": "[Marvin Gaye]<br>Marvin Gaye可通过 What’s Going On, Let’s Get It On and layered studio vocal production 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与灵魂乐更广泛的演变。"
        },
        {
            "start": "1960",
            "title": "Herbie Hancock（born 1940）",
            "description": "[Herbie Hancock]<br>Maiden Voyage, Head Hunters and Rockit构成Herbie Hancock历史位置的具体证据：重点不只在知名度，而在这些材料如何改变爵士中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1961",
            "title": "Chick Corea（1941–2021）",
            "description": "[Chick Corea]<br>Chick Corea的代表性成果包括 Now He Sings, Now He Sobs, Return to Forever and Spain。这些作品把其在爵士中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1961",
            "title": "George Clinton（born 1941）",
            "description": "[George Clinton]<br>George Clinton的代表性成果包括 Mothership Connection, One Nation Under a Groove and the P-Funk mythology。这些作品把其在放克中的合奏编制、编曲和乐队声音保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1961",
            "title": "Otis Redding（1941–1967）",
            "description": "[Otis Redding]<br>Otis Redding的代表性成果包括 These Arms of Mine, Try a Little Tenderness and (Sittin’ On) The Dock of the Bay。这些作品把其在灵魂乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1962",
            "title": "Aretha Franklin（1942–2018）",
            "description": "[Aretha Franklin]<br>Respect, Chain of Fools and Amazing Grace构成Aretha Franklin历史位置的具体证据：重点不只在知名度，而在这些材料如何改变灵魂乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield（1942–1999）",
            "description": "[Curtis Mayfield]<br>理解Curtis Mayfield最直接的入口是 People Get Ready, Super Fly and socially conscious falsetto soul。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入灵魂乐的常用语言。"
        },
        {
            "start": "1963",
            "title": "Sly Stone（born 1943）",
            "description": "[Sly Stone]<br>理解Sly Stone最直接的入口是 Dance to the Music, Everyday People and There’s a Riot Goin’ On。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入放克的常用语言。"
        },
        {
            "start": "1965",
            "title": "Keith Jarrett（born 1945）",
            "description": "[Keith Jarrett]<br>理解Keith Jarrett最直接的入口是 The Köln Concert and the Standards Trio。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入爵士的常用语言。"
        },
        {
            "start": "1966",
            "title": "Al Green（born 1946）",
            "description": "[Al Green]<br>Tired of Being Alone, Let’s Stay Together and the Hi Records sound构成Al Green历史位置的具体证据：重点不只在知名度，而在这些材料如何改变灵魂乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1970",
            "title": "Stevie Wonder（born 1950）",
            "description": "[Stevie Wonder]<br>Stevie Wonder可通过 Talking Book, Innervisions, Songs in the Key of Life and synthesizer-centered soul production 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与灵魂乐更广泛的演变。"
        },
        {
            "start": "1974",
            "title": "Pat Metheny（born 1954）",
            "description": "[Pat Metheny]<br>Pat Metheny可通过 Bright Size Life, the Pat Metheny Group and expansive guitar-synth textures 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1978",
            "title": "Prince（1958–2016）",
            "description": "[Prince]<br>理解Prince最直接的入口是 Purple Rain, Sign o’ the Times and a multi-instrumental blend of funk, rock and pop。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入放克的常用语言。"
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis（born 1961）",
            "description": "[Wynton Marsalis]<br>Wynton Marsalis可通过 Black Codes (From the Underground), Blood on the Fields and Jazz at Lincoln Center 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与爵士更广泛的演变。"
        },
        {
            "start": "1991",
            "title": "Erykah Badu（born 1971）",
            "description": "[Erykah Badu]<br>Erykah Badu的代表性成果包括 Baduizm and Mama’s Gun。这些作品把其在灵魂乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1994",
            "title": "D’Angelo（born 1974）",
            "description": "[D’Angelo]<br>D’Angelo可通过 Brown Sugar, Voodoo and Black Messiah 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与灵魂乐更广泛的演变。"
        },
        {
            "start": "2001",
            "title": "Beyoncé（born 1981）",
            "description": "[Beyoncé]<br>理解Beyoncé最直接的入口是 Crazy in Love, Lemonade, Renaissance and Cowboy Carter。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入节奏布鲁斯的常用语言。"
        },
        {
            "start": "2003",
            "title": "Amy Winehouse（1983–2011）",
            "description": "[Amy Winehouse]<br>Frank, Back to Black and Rehab构成Amy Winehouse历史位置的具体证据：重点不只在知名度，而在这些材料如何改变灵魂乐中的声音、措辞与录音表演。"
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
            "description": "[Jimmie Rodgers]<br>理解Jimmie Rodgers最直接的入口是 Blue Yodel No. 1 and the fusion of railroad song, blues and early country recording。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入乡村与根源音乐的常用语言。"
        },
        {
            "start": "1931",
            "title": "Bill Monroe（1911–1996）",
            "description": "[Bill Monroe]<br>Bill Monroe可通过 Blue Moon of Kentucky and the Blue Grass Boys sound that named bluegrass 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与乡村与根源音乐更广泛的演变。"
        },
        {
            "start": "1932",
            "title": "Woody Guthrie（1912–1967）",
            "description": "[Woody Guthrie]<br>This Land Is Your Land and the Dust Bowl Ballads构成Woody Guthrie历史位置的具体证据：重点不只在知名度，而在这些材料如何改变民谣与创作歌手音乐中的词曲写作与个人化表演。"
        },
        {
            "start": "1935",
            "title": "Frank Sinatra（1915–1998）",
            "description": "[Frank Sinatra]<br>Frank Sinatra的代表性成果包括 In the Wee Small Hours, Songs for Swingin’ Lovers! and microphone-centered phrasing。这些作品把其在流行音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1935",
            "title": "Édith Piaf（1915–1963）",
            "description": "[Édith Piaf]<br>La Vie en rose, Hymne à l’amour and Non, je ne regrette rien构成Édith Piaf历史位置的具体证据：重点不只在知名度，而在这些材料如何改变流行音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1939",
            "title": "Nat King Cole（1919–1965）",
            "description": "[Nat King Cole]<br>Nat King Cole可通过 Unforgettable, Mona Lisa and the transition from jazz piano trio to pop vocal stardom 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "1939",
            "title": "Pete Seeger（1919–2014）",
            "description": "[Pete Seeger]<br>理解Pete Seeger最直接的入口是 If I Had a Hammer, Where Have All the Flowers Gone? and participatory folk performance。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入民谣与创作歌手音乐的常用语言。"
        },
        {
            "start": "1943",
            "title": "Hank Williams（1923–1953）",
            "description": "[Hank Williams]<br>Hank Williams的代表性成果包括 Your Cheatin’ Heart, I’m So Lonesome I Could Cry and Lovesick Blues。这些作品把其在乡村与根源音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1946",
            "title": "Chuck Berry（1926–2017）",
            "description": "[Chuck Berry]<br>Maybellene, Roll Over Beethoven and Johnny B. Goode构成Chuck Berry历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1948",
            "title": "Bo Diddley（1928–2008）",
            "description": "[Bo Diddley]<br>Bo Diddley的代表性成果包括 Bo Diddley, Who Do You Love? and the syncopated “Bo Diddley beat”。这些作品把其在摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1948",
            "title": "Fats Domino（1928–2017）",
            "description": "[Fats Domino]<br>Fats Domino的代表性成果包括 The Fat Man, Ain’t That a Shame and Blueberry Hill。这些作品把其在摇滚中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1952",
            "title": "Johnny Cash（1932–2003）",
            "description": "[Johnny Cash]<br>理解Johnny Cash最直接的入口是 I Walk the Line, Folsom Prison Blues and the prison concert albums。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入乡村与根源音乐的常用语言。"
        },
        {
            "start": "1952",
            "title": "Little Richard（1932–2020）",
            "description": "[Little Richard]<br>Little Richard可通过 Tutti Frutti, Long Tall Sally and Good Golly, Miss Molly 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1952",
            "title": "Patsy Cline（1932–1963）",
            "description": "[Patsy Cline]<br>Patsy Cline的代表性成果包括 Crazy, I Fall to Pieces and the Nashville Sound vocal style。这些作品把其在乡村与根源音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1953",
            "title": "Willie Nelson（born 1933）",
            "description": "[Willie Nelson]<br>理解Willie Nelson最直接的入口是 Red Headed Stranger, Stardust and the outlaw-country movement。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入乡村与根源音乐的常用语言。"
        },
        {
            "start": "1954",
            "title": "Leonard Cohen（1934–2016）",
            "description": "[Leonard Cohen]<br>Suzanne, Hallelujah and Songs of Love and Hate构成Leonard Cohen历史位置的具体证据：重点不只在知名度，而在这些材料如何改变民谣与创作歌手音乐中的词曲写作与个人化表演。"
        },
        {
            "start": "1954",
            "title": "The Isley Brothers 成立",
            "description": "[The Isley Brothers formed]<br>The Isley Brothers的早期成员组合和共同创作确立了其声音；可从 Shout, Twist and Shout and 3 + 3 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1955",
            "title": "Elvis Presley（1935–1977）",
            "description": "[Elvis Presley]<br>Elvis Presley可通过 That’s All Right, Heartbreak Hotel and the 1968 Comeback Special 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis（1935–2022）",
            "description": "[Jerry Lee Lewis]<br>Whole Lotta Shakin’ Goin’ On and Great Balls of Fire构成Jerry Lee Lewis历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1956",
            "title": "Buddy Holly（1936–1959）",
            "description": "[Buddy Holly]<br>Buddy Holly的代表性成果包括 That’ll Be the Day, Peggy Sue and an influential self-contained rock-band model。这些作品把其在摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1956",
            "title": "Roy Orbison（1936–1988）",
            "description": "[Roy Orbison]<br>Only the Lonely, Crying and Oh, Pretty Woman构成Roy Orbison历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的声音、措辞与录音表演。"
        },
        {
            "start": "1957",
            "title": "The Supremes 成立",
            "description": "[The Supremes formed]<br>The Supremes的早期成员组合和共同创作确立了其声音；可从 Where Did Our Love Go, You Can’t Hurry Love and a run of Motown No. 1 singles 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder（born 1940）",
            "description": "[Giorgio Moroder]<br>Giorgio Moroder的代表性成果包括 I Feel Love with Donna Summer and synthesizer-driven disco production。这些作品把其在电子音乐中的录音室制作、节拍与音色设计保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1960",
            "title": "John Lennon（1940–1980）",
            "description": "[John Lennon]<br>理解John Lennon最直接的入口是 Strawberry Fields Forever, Imagine and Plastic Ono Band。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入摇滚的常用语言。"
        },
        {
            "start": "1960",
            "title": "Ringo Starr（born 1940）",
            "description": "[Ringo Starr]<br>Ringo Starr可通过 the Beatles recordings, Photograph and a highly economical rock-drumming style 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1960",
            "title": "The Beatles 成立",
            "description": "[The Beatles formed]<br>The Beatles的早期成员组合和共同创作确立了其声音；可从 Please Please Me, Rubber Soul, Revolver, Sgt. Pepper and Abbey Road 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1961",
            "title": "Bob Dylan（born 1941）",
            "description": "[Bob Dylan]<br>Bob Dylan可通过 Blowin’ in the Wind, Like a Rolling Stone, Highway 61 Revisited and Blood on the Tracks 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与民谣与创作歌手音乐更广泛的演变。"
        },
        {
            "start": "1961",
            "title": "Joan Baez（born 1941）",
            "description": "[Joan Baez]<br>Diamonds & Rust and a central role in the folk revival and civil-rights movement构成Joan Baez历史位置的具体证据：重点不只在知名度，而在这些材料如何改变民谣与创作歌手音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1961",
            "title": "The Beach Boys 成立",
            "description": "[The Beach Boys formed]<br>The Beach Boys的早期成员组合和共同创作确立了其声音；可从 Surfin’ U.S.A., Pet Sounds and Good Vibrations 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1962",
            "title": "Barbra Streisand（born 1942）",
            "description": "[Barbra Streisand]<br>Barbra Streisand可通过 People, The Way We Were and a career spanning Broadway, film and studio pop 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "1962",
            "title": "Brian Wilson（born 1942）",
            "description": "[Brian Wilson]<br>Brian Wilson的代表性成果包括 Pet Sounds, Good Vibrations and densely layered vocal arrangements。这些作品把其在摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1962",
            "title": "Carole King（born 1942）",
            "description": "[Carole King]<br>Carole King可通过 Will You Love Me Tomorrow, (You Make Me Feel Like) A Natural Woman and Tapestry 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix（1942–1970）",
            "description": "[Jimi Hendrix]<br>Jimi Hendrix可通过 Are You Experienced, Electric Ladyland and the Woodstock Star-Spangled Banner 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1962",
            "title": "Paul McCartney（born 1942）",
            "description": "[Paul McCartney]<br>Paul McCartney的代表性成果包括 Yesterday, Hey Jude, Band on the Run and a long post-Beatles songwriting career。这些作品把其在摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1962",
            "title": "The Rolling Stones 成立",
            "description": "[The Rolling Stones formed]<br>The Rolling Stones的早期成员组合和共同创作确立了其声音；可从 (I Can’t Get No) Satisfaction, Beggars Banquet, Let It Bleed and Exile on Main St. 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1963",
            "title": "George Harrison（1943–2001）",
            "description": "[George Harrison]<br>George Harrison可通过 While My Guitar Gently Weeps, Something and All Things Must Pass 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1963",
            "title": "Janis Joplin（1943–1970）",
            "description": "[Janis Joplin]<br>理解Janis Joplin最直接的入口是 Piece of My Heart, Ball and Chain and Pearl。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入摇滚的常用语言。"
        },
        {
            "start": "1963",
            "title": "Jim Morrison（1943–1971）",
            "description": "[Jim Morrison]<br>理解Jim Morrison最直接的入口是 Light My Fire, The End and the theatrical frontmanship of the Doors。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入摇滚的常用语言。"
        },
        {
            "start": "1963",
            "title": "Joni Mitchell（born 1943）",
            "description": "[Joni Mitchell]<br>Blue, Court and Spark and Hejira构成Joni Mitchell历史位置的具体证据：重点不只在知名度，而在这些材料如何改变民谣与创作歌手音乐中的词曲写作与个人化表演。"
        },
        {
            "start": "1963",
            "title": "Keith Richards（born 1943）",
            "description": "[Keith Richards]<br>理解Keith Richards最直接的入口是 the riffs of Satisfaction, Jumpin’ Jack Flash and Gimme Shelter。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入摇滚的常用语言。"
        },
        {
            "start": "1963",
            "title": "Mick Jagger（born 1943）",
            "description": "[Mick Jagger]<br>Mick Jagger的代表性成果包括 the Rolling Stones catalogue and a performance style that defined the modern rock frontman。这些作品把其在摇滚中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1964",
            "title": "Jimmy Page（born 1944）",
            "description": "[Jimmy Page]<br>Jimmy Page可通过 Led Zeppelin I–IV, Whole Lotta Love and Stairway to Heaven 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1964",
            "title": "The Who 成立",
            "description": "[The Who formed]<br>The Who的早期成员组合和共同创作确立了其声音；可从 My Generation, Tommy, Who’s Next and Quadrophenia 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1965",
            "title": "Debbie Harry（born 1945）",
            "description": "[Debbie Harry]<br>理解Debbie Harry最直接的入口是 Heart of Glass, Call Me and Blondie’s crossover between punk, disco and pop。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入朋克与另类摇滚的常用语言。"
        },
        {
            "start": "1965",
            "title": "Eric Clapton（born 1945）",
            "description": "[Eric Clapton]<br>Eric Clapton的代表性成果包括 the Blues Breakers album, Layla and Unplugged。这些作品把其在摇滚中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister（1945–2015）",
            "description": "[Lemmy Kilmister]<br>Lemmy Kilmister的代表性成果包括 Ace of Spades and Motörhead’s fast, distorted bridge between punk and metal。这些作品把其在重金属中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1965",
            "title": "Pink Floyd 成立",
            "description": "[Pink Floyd formed]<br>Pink Floyd的早期成员组合和共同创作确立了其声音；可从 The Dark Side of the Moon, Wish You Were Here and The Wall 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1965",
            "title": "The Doors 成立",
            "description": "[The Doors formed]<br>The Doors的早期成员组合和共同创作确立了其声音；可从 The Doors, Light My Fire, The End and L.A. Woman 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1966",
            "title": "Dolly Parton（born 1946）",
            "description": "[Dolly Parton]<br>Dolly Parton的代表性成果包括 Jolene, I Will Always Love You and Coat of Many Colors。这些作品把其在乡村与根源音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1966",
            "title": "Freddie Mercury（1946–1991）",
            "description": "[Freddie Mercury]<br>Bohemian Rhapsody, Somebody to Love and Queen’s Live Aid performance构成Freddie Mercury历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的声音、措辞与录音表演。"
        },
        {
            "start": "1966",
            "title": "Patti Smith（born 1946）",
            "description": "[Patti Smith]<br>Patti Smith可通过 Horses and Because the Night 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与朋克与另类摇滚更广泛的演变。"
        },
        {
            "start": "1966",
            "title": "The Velvet Underground 成立",
            "description": "[The Velvet Underground formed]<br>The Velvet Underground的早期成员组合和共同创作确立了其声音；可从 The Velvet Underground & Nico and White Light/White Heat 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1967",
            "title": "Brian May（born 1947）",
            "description": "[Brian May]<br>Brian May可通过 Bohemian Rhapsody, We Will Rock You and the layered Red Special guitar sound 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1967",
            "title": "Carlos Santana（born 1947）",
            "description": "[Carlos Santana]<br>Soul Sacrifice at Woodstock, Abraxas and Supernatural构成Carlos Santana历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1967",
            "title": "David Bowie（1947–2016）",
            "description": "[David Bowie]<br>Space Oddity, The Rise and Fall of Ziggy Stardust, Low and Blackstar构成David Bowie历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1967",
            "title": "Elton John（born 1947）",
            "description": "[Elton John]<br>理解Elton John最直接的入口是 Your Song, Goodbye Yellow Brick Road and a long partnership with Bernie Taupin。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入流行音乐的常用语言。"
        },
        {
            "start": "1967",
            "title": "Iggy Pop（born 1947）",
            "description": "[Iggy Pop]<br>Iggy Pop可通过 the Stooges albums, Lust for Life and an extreme stage persona central to punk history 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与朋克与另类摇滚更广泛的演变。"
        },
        {
            "start": "1968",
            "title": "Black Sabbath 成立",
            "description": "[Black Sabbath formed]<br>Black Sabbath的早期成员组合和共同创作确立了其声音；可从 Black Sabbath, Paranoid and Master of Reality 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1968",
            "title": "Brian Eno（born 1948）",
            "description": "[Brian Eno]<br>Roxy Music, Another Green World, Ambient 1 and production for Bowie, Talking Heads and U2构成Brian Eno历史位置的具体证据：重点不只在知名度，而在这些材料如何改变电子音乐中的录音室制作、节拍与音色设计。"
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre（born 1948）",
            "description": "[Jean-Michel Jarre]<br>理解Jean-Michel Jarre最直接的入口是 Oxygène, Équinoxe and large-scale outdoor electronic concerts。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入电子音乐的常用语言。"
        },
        {
            "start": "1968",
            "title": "Led Zeppelin 成立",
            "description": "[Led Zeppelin formed]<br>Led Zeppelin的早期成员组合和共同创作确立了其声音；可从 Led Zeppelin I–IV, Physical Graffiti and Kashmir 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne（born 1948）",
            "description": "[Ozzy Osbourne]<br>理解Ozzy Osbourne最直接的入口是 Black Sabbath’s early albums, Blizzard of Ozz and Crazy Train。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入重金属的常用语言。"
        },
        {
            "start": "1968",
            "title": "Robert Plant（born 1948）",
            "description": "[Robert Plant]<br>理解Robert Plant最直接的入口是 Whole Lotta Love, Stairway to Heaven and later roots-music collaborations。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入摇滚的常用语言。"
        },
        {
            "start": "1968",
            "title": "Stevie Nicks（born 1948）",
            "description": "[Stevie Nicks]<br>Stevie Nicks的代表性成果包括 Rhiannon, Dreams, Edge of Seventeen and Fleetwood Mac’s Rumours。这些作品把其在摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1968",
            "title": "Tony Iommi（born 1948）",
            "description": "[Tony Iommi]<br>理解Tony Iommi最直接的入口是 the low-tuned riffs of Black Sabbath, Paranoid and Master of Reality。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入重金属的常用语言。"
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen（born 1949）",
            "description": "[Bruce Springsteen]<br>Bruce Springsteen可通过 Born to Run, Darkness on the Edge of Town and Born in the U.S.A. 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与摇滚更广泛的演变。"
        },
        {
            "start": "1970",
            "title": "Kraftwerk 成立",
            "description": "[Kraftwerk formed]<br>Kraftwerk的早期成员组合和共同创作确立了其声音；可从 Autobahn, Trans-Europe Express, The Man-Machine and Computer World 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1970",
            "title": "Peter Gabriel（born 1950）",
            "description": "[Peter Gabriel]<br>Genesis-era concept performances, So and the Real World label构成Peter Gabriel历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1970",
            "title": "Queen 成立",
            "description": "[Queen formed]<br>Queen的早期成员组合和共同创作确立了其声音；可从 A Night at the Opera, Bohemian Rhapsody, We Will Rock You and Live Aid 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1970",
            "title": "Tom Petty（1950–2017）",
            "description": "[Tom Petty]<br>American Girl, Damn the Torpedoes and Full Moon Fever构成Tom Petty历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1971",
            "title": "Eagles 成立",
            "description": "[Eagles formed]<br>Eagles的早期成员组合和共同创作确立了其声音；可从 Desperado, Hotel California and Their Greatest Hits 1971–1975 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1971",
            "title": "Joey Ramone（1951–2001）",
            "description": "[Joey Ramone]<br>理解Joey Ramone最直接的入口是 Blitzkrieg Bop, Sheena Is a Punk Rocker and the Ramones’ stripped-down vocal style。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入朋克与另类摇滚的常用语言。"
        },
        {
            "start": "1972",
            "title": "David Byrne（born 1952）",
            "description": "[David Byrne]<br>David Byrne的代表性成果包括 Talking Heads: 77, Remain in Light and Stop Making Sense。这些作品把其在朋克与另类摇滚中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1974",
            "title": "Ramones 成立",
            "description": "[Ramones formed]<br>Ramones的早期成员组合和共同创作确立了其声音；可从 Ramones, Rocket to Russia and the short-fast-loud template of punk 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc（born 1955）",
            "description": "[DJ Kool Herc]<br>理解DJ Kool Herc最直接的入口是 the 1973 Bronx party tradition and breakbeat extension with two turntables。从这些作品可以观察其如何处理唱盘技术、break组织与现场文化，以及这种处理怎样进入嘻哈的常用语言。"
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen（1955–2020）",
            "description": "[Eddie Van Halen]<br>Eddie Van Halen的代表性成果包括 Eruption, Van Halen and a two-handed tapping vocabulary for rock guitar。这些作品把其在摇滚中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1975",
            "title": "Sex Pistols 成立",
            "description": "[Sex Pistols formed]<br>Sex Pistols的早期成员组合和共同创作确立了其声音；可从 Anarchy in the U.K., God Save the Queen and Never Mind the Bollocks 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1976",
            "title": "Johnny Rotten（born 1956）",
            "description": "[Johnny Rotten]<br>Anarchy in the U.K., Never Mind the Bollocks and Public Image Ltd.构成Johnny Rotten历史位置的具体证据：重点不只在知名度，而在这些材料如何改变朋克与另类摇滚中的声音、措辞与录音表演。"
        },
        {
            "start": "1976",
            "title": "Joy Division 成立",
            "description": "[Joy Division formed]<br>Joy Division的早期成员组合和共同创作确立了其声音；可从 Unknown Pleasures, Closer and Love Will Tear Us Apart 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1976",
            "title": "The Clash 成立",
            "description": "[The Clash formed]<br>The Clash的早期成员组合和共同创作确立了其声音；可从 The Clash, London Calling and Sandinista! 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1976",
            "title": "U2 成立",
            "description": "[U2 formed]<br>U2的早期成员组合和共同创作确立了其声音；可从 War, The Joshua Tree, Achtung Baby and large-scale multimedia tours 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa（born 1957）",
            "description": "[Afrika Bambaataa]<br>Afrika Bambaataa的代表性成果包括 Planet Rock and the Universal Zulu Nation。这些作品把其在嘻哈中的唱盘技术、break组织与现场文化保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux（born 1957）",
            "description": "[Siouxsie Sioux]<br>理解Siouxsie Sioux最直接的入口是 Hong Kong Garden, Juju and a major post-punk/goth vocal identity。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入朋克与另类摇滚的常用语言。"
        },
        {
            "start": "1977",
            "title": "Talking Heads 成立",
            "description": "[Talking Heads formed]<br>Talking Heads的早期成员组合和共同创作确立了其声音；可从 Talking Heads: 77, Fear of Music, Remain in Light and Stop Making Sense 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash（born 1958）",
            "description": "[Grandmaster Flash]<br>The Adventures of Grandmaster Flash on the Wheels of Steel and The Message构成Grandmaster Flash历史位置的具体证据：重点不只在知名度，而在这些材料如何改变嘻哈中的唱盘技术、break组织与现场文化。"
        },
        {
            "start": "1978",
            "title": "Kate Bush（born 1958）",
            "description": "[Kate Bush]<br>Kate Bush可通过 Wuthering Heights, Hounds of Love and Running Up That Hill 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "1978",
            "title": "Madonna（born 1958）",
            "description": "[Madonna]<br>Like a Virgin, Like a Prayer, Vogue and Ray of Light构成Madonna历史位置的具体证据：重点不只在知名度，而在这些材料如何改变流行音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1978",
            "title": "Michael Jackson（1958–2009）",
            "description": "[Michael Jackson]<br>Michael Jackson的代表性成果包括 Off the Wall, Thriller, Bad and landmark music videos such as Billie Jean and Thriller。这些作品把其在流行音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1978",
            "title": "The Cure 成立",
            "description": "[The Cure formed]<br>The Cure的早期成员组合和共同创作确立了其声音；可从 Seventeen Seconds, Pornography, Disintegration and Just Like Heaven 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1979",
            "title": "Morrissey（born 1959）",
            "description": "[Morrissey]<br>理解Morrissey最直接的入口是 The Smiths catalogue and solo songs such as Everyday Is Like Sunday。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入朋克与另类摇滚的常用语言。"
        },
        {
            "start": "1979",
            "title": "Robert Smith（born 1959）",
            "description": "[Robert Smith]<br>Robert Smith可通过 A Forest, Just Like Heaven, Disintegration and the Cure’s distinctive guitar textures 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与朋克与另类摇滚更广泛的演变。"
        },
        {
            "start": "1980",
            "title": "Chuck D（born 1960）",
            "description": "[Chuck D]<br>Public Enemy’s It Takes a Nation of Millions to Hold Us Back and Fear of a Black Planet构成Chuck D历史位置的具体证据：重点不只在知名度，而在这些材料如何改变嘻哈中的声音、措辞与录音表演。"
        },
        {
            "start": "1981",
            "title": "Metallica 成立",
            "description": "[Metallica formed]<br>Metallica的早期成员组合和共同创作确立了其声音；可从 Kill ’Em All, Master of Puppets and Metallica (The Black Album) 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1983",
            "title": "George Michael（born 1963）",
            "description": "[George Michael]<br>George Michael的代表性成果包括 Faith, Listen Without Prejudice Vol. 1 and Careless Whisper。这些作品把其在流行音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1983",
            "title": "James Hetfield（born 1963）",
            "description": "[James Hetfield]<br>理解James Hetfield最直接的入口是 Master of Puppets, One and Enter Sandman。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入重金属的常用语言。"
        },
        {
            "start": "1983",
            "title": "Johnny Marr（born 1963）",
            "description": "[Johnny Marr]<br>Johnny Marr的代表性成果包括 This Charming Man, How Soon Is Now? and the Smiths’ layered guitar writing。这些作品把其在朋克与另类摇滚中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1983",
            "title": "Lars Ulrich（born 1963）",
            "description": "[Lars Ulrich]<br>理解Lars Ulrich最直接的入口是 Metallica’s thrash-era albums and a major role in arranging the band’s long-form songs。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入重金属的常用语言。"
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. 成立",
            "description": "[Run-D.M.C. formed]<br>Run-D.M.C.的早期成员组合和共同创作确立了其声音；可从 Run-D.M.C., Raising Hell and Walk This Way with Aerosmith 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1983",
            "title": "Whitney Houston（born 1963）",
            "description": "[Whitney Houston]<br>Whitney Houston的代表性成果包括 How Will I Know, I Wanna Dance with Somebody and I Will Always Love You。这些作品把其在流行音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1985",
            "title": "Björk（born 1965）",
            "description": "[Björk]<br>Björk可通过 Debut, Homogenic, Vespertine and Biophilia 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与电子音乐更广泛的演变。"
        },
        {
            "start": "1985",
            "title": "Dr. Dre（born 1965）",
            "description": "[Dr. Dre]<br>Dr. Dre可通过 Straight Outta Compton, The Chronic and production for Snoop Dogg, Eminem and others 被具体定位。作品中的录音室制作、节拍与音色设计连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1985",
            "title": "KRS-One（born 1965）",
            "description": "[KRS-One]<br>KRS-One可通过 Criminal Minded, By All Means Necessary and the Stop the Violence movement 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1985",
            "title": "Radiohead 成立",
            "description": "[Radiohead formed]<br>Radiohead的早期成员组合和共同创作确立了其声音；可从 The Bends, OK Computer, Kid A and In Rainbows 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1986",
            "title": "Janet Jackson（born 1966）",
            "description": "[Janet Jackson]<br>Janet Jackson可通过 Control, Rhythm Nation 1814 and The Velvet Rope 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "1987",
            "title": "Kurt Cobain（1967–1994）",
            "description": "[Kurt Cobain]<br>Smells Like Teen Spirit, Nevermind and In Utero构成Kurt Cobain历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1987",
            "title": "Nirvana 成立",
            "description": "[Nirvana formed]<br>Nirvana的早期成员组合和共同创作确立了其声音；可从 Bleach, Nevermind, In Utero and MTV Unplugged in New York 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest 成立",
            "description": "[A Tribe Called Quest formed]<br>A Tribe Called Quest的早期成员组合和共同创作确立了其声音；可从 The Low End Theory, Midnight Marauders and jazz-based sampling 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1988",
            "title": "Celine Dion（born 1968）",
            "description": "[Celine Dion]<br>The Power of Love, Falling into You and My Heart Will Go On构成Celine Dion历史位置的具体证据：重点不只在知名度，而在这些材料如何改变流行音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1988",
            "title": "LL Cool J（born 1968）",
            "description": "[LL Cool J]<br>LL Cool J可通过 Radio, Mama Said Knock You Out and I Need Love 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1988",
            "title": "Massive Attack 成立",
            "description": "[Massive Attack formed]<br>Massive Attack的早期成员组合和共同创作确立了其声音；可从 Blue Lines, Protection and Mezzanine 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1988",
            "title": "Rakim（born 1968）",
            "description": "[Rakim]<br>Rakim的代表性成果包括 Paid in Full and Follow the Leader, with internal rhyme and calm, complex flow。这些作品把其在嘻哈中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1988",
            "title": "Thom Yorke（born 1968）",
            "description": "[Thom Yorke]<br>OK Computer, Kid A, In Rainbows and The Eraser构成Thom Yorke历史位置的具体证据：重点不只在知名度，而在这些材料如何改变摇滚中的词曲写作与个人化表演。"
        },
        {
            "start": "1989",
            "title": "Dave Grohl（born 1969）",
            "description": "[Dave Grohl]<br>Dave Grohl的代表性成果包括 Nirvana’s Nevermind and In Utero, then Foo Fighters albums beginning in 1995。这些作品把其在摇滚中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1989",
            "title": "Ice Cube（born 1969）",
            "description": "[Ice Cube]<br>Ice Cube的代表性成果包括 Straight Outta Compton, AmeriKKKa’s Most Wanted and Death Certificate。这些作品把其在嘻哈中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1989",
            "title": "Jay-Z（born 1969）",
            "description": "[Jay-Z]<br>Jay-Z可通过 Reasonable Doubt, The Blueprint and 4:44 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1989",
            "title": "Mariah Carey（born 1969）",
            "description": "[Mariah Carey]<br>Vision of Love, Daydream and The Emancipation of Mimi构成Mariah Carey历史位置的具体证据：重点不只在知名度，而在这些材料如何改变流行音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1991",
            "title": "Aphex Twin（born 1971）",
            "description": "[Aphex Twin]<br>Aphex Twin的代表性成果包括 Selected Ambient Works 85–92, Richard D. James Album and Come to Daddy。这些作品把其在电子音乐中的录音室制作、节拍与音色设计保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1991",
            "title": "Missy Elliott（born 1971）",
            "description": "[Missy Elliott]<br>Supa Dupa Fly, Get Ur Freak On and Work It构成Missy Elliott历史位置的具体证据：重点不只在知名度，而在这些材料如何改变嘻哈中的录音室制作、节拍与音色设计。"
        },
        {
            "start": "1991",
            "title": "Oasis 成立",
            "description": "[Oasis formed]<br>Oasis的早期成员组合和共同创作确立了其声音；可从 Definitely Maybe, (What’s the Story) Morning Glory? and Wonderwall 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1991",
            "title": "Tupac Shakur（1971–1996）",
            "description": "[Tupac Shakur]<br>Tupac Shakur可通过 Me Against the World, All Eyez on Me and Changes 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1992",
            "title": "Eminem（born 1972）",
            "description": "[Eminem]<br>Eminem可通过 The Slim Shady LP, The Marshall Mathers LP and Lose Yourself 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G.（1972–1997）",
            "description": "[The Notorious B.I.G.]<br>The Notorious B.I.G.可通过 Ready to Die, Life After Death and Juicy 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "1993",
            "title": "Daft Punk 成立",
            "description": "[Daft Punk formed]<br>Daft Punk的早期成员组合和共同创作确立了其声音；可从 Homework, Discovery, Alive 2007 and Random Access Memories 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1993",
            "title": "Nas（born 1973）",
            "description": "[Nas]<br>Illmatic, It Was Written and the narrative style of N.Y. State of Mind构成Nas历史位置的具体证据：重点不只在知名度，而在这些材料如何改变嘻哈中的声音、措辞与录音表演。"
        },
        {
            "start": "1995",
            "title": "Lauryn Hill（born 1975）",
            "description": "[Lauryn Hill]<br>Lauryn Hill的代表性成果包括 The Score with the Fugees and The Miseducation of Lauryn Hill。这些作品把其在嘻哈中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1995",
            "title": "M.I.A.（born 1975）",
            "description": "[M.I.A.]<br>理解M.I.A.最直接的入口是 Arular, Kala and Paper Planes。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入电子音乐的常用语言。"
        },
        {
            "start": "1995",
            "title": "The White Stripes 成立",
            "description": "[The White Stripes formed]<br>The White Stripes的早期成员组合和共同创作确立了其声音；可从 White Blood Cells, Elephant and Seven Nation Army 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1997",
            "title": "Kanye West（born 1977）",
            "description": "[Kanye West]<br>Kanye West可通过 The College Dropout, 808s & Heartbreak and My Beautiful Dark Twisted Fantasy 被具体定位。作品中的录音室制作、节拍与音色设计连接了个人风格与嘻哈更广泛的演变。"
        },
        {
            "start": "2002",
            "title": "Nicki Minaj（born 1982）",
            "description": "[Nicki Minaj]<br>理解Nicki Minaj最直接的入口是 Pink Friday, Monster and a highly theatrical, multi-voice rap delivery。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入嘻哈的常用语言。"
        },
        {
            "start": "2006",
            "title": "Lady Gaga（born 1986）",
            "description": "[Lady Gaga]<br>The Fame, Bad Romance, Born This Way and A Star Is Born构成Lady Gaga历史位置的具体证据：重点不只在知名度，而在这些材料如何改变流行音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar（born 1987）",
            "description": "[Kendrick Lamar]<br>Kendrick Lamar的代表性成果包括 good kid, m.A.A.d city, To Pimp a Butterfly, DAMN. and Mr. Morale & the Big Steppers。这些作品把其在嘻哈中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "2008",
            "title": "Adele（born 1988）",
            "description": "[Adele]<br>Adele可通过 19, 21, 25 and 30 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与流行音乐更广泛的演变。"
        },
        {
            "start": "2009",
            "title": "Taylor Swift（born 1989）",
            "description": "[Taylor Swift]<br>Taylor Swift的代表性成果包括 Fearless, Red, 1989, folklore and the Eras Tour catalogue project。这些作品把其在流行音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "2021",
            "title": "Billie Eilish（born 2001）",
            "description": "[Billie Eilish]<br>Billie Eilish可通过 When We All Fall Asleep, Where Do We Go?, Happier Than Ever and intimate close-miked production 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与流行音乐更广泛的演变。"
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
            "description": "[Amir Khusrau]<br>Amir Khusrau的代表性成果包括 Persian-Hindavi poetry, devotional song traditions and a lasting association with qawwali。这些作品把其在南亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1520",
            "title": "Tansen（1500–1586）",
            "description": "[Tansen]<br>理解Tansen最直接的入口是 dhrupad repertory at Akbar’s court and ragas traditionally linked to his name。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入南亚音乐的常用语言。"
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu（1536–1611）",
            "description": "[Zhu Zaiyu]<br>理解Zhu Zaiyu最直接的入口是 the 1584 calculation of twelve-tone equal temperament by precise mathematical ratios。从这些作品可以观察其如何处理理论、记谱与音乐观念，以及这种处理怎样进入东亚音乐的常用语言。"
        },
        {
            "start": "1782",
            "title": "Syama Sastri（1762–1827）",
            "description": "[Syama Sastri]<br>理解Syama Sastri最直接的入口是 the kritis and svarajatis that form one part of the Carnatic Trinity repertory。从这些作品可以观察其如何处理作曲、曲式与音响组织，以及这种处理怎样进入南亚音乐的常用语言。"
        },
        {
            "start": "1787",
            "title": "Tyagaraja（1767–1847）",
            "description": "[Tyagaraja]<br>Tyagaraja的代表性成果包括 hundreds of Telugu kritis, including the Pancharatna Kritis。这些作品把其在南亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar（1775–1835）",
            "description": "[Muthuswami Dikshitar]<br>Muthuswami Dikshitar可通过 Sanskrit kritis, the Kamalamba Navavarna cycle and broad raga coverage 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与南亚音乐更广泛的演变。"
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing)（1889–1935）",
            "description": "[Hua Yanjun (Abing)]<br>理解Hua Yanjun (Abing)最直接的入口是 Erquan Yingyue and a small but foundational recorded erhu and pipa repertory。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入东亚音乐的常用语言。"
        },
        {
            "start": "1910",
            "title": "Carlos Gardel（1890–1935）",
            "description": "[Carlos Gardel]<br>Carlos Gardel可通过 Mi noche triste, El día que me quieras and the international image of tango song 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "1915",
            "title": "Liu Tianhua（1895–1932）",
            "description": "[Liu Tianhua]<br>Liu Tianhua的代表性成果包括 Moon Night, Brightness Walk and the modernization of erhu technique and notation。这些作品把其在东亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1918",
            "title": "Umm Kulthum（1898–1975）",
            "description": "[Umm Kulthum]<br>理解Umm Kulthum最直接的入口是 Enta Omri, Al Atlal and long-form Arabic concert song。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入中东与北非音乐的常用语言。"
        },
        {
            "start": "1925",
            "title": "Xian Xinghai（1905–1945）",
            "description": "[Xian Xinghai]<br>Xian Xinghai的代表性成果包括 Yellow River Cantata and mass songs composed during wartime China。这些作品把其在东亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1932",
            "title": "Nie Er（1912–1935）",
            "description": "[Nie Er]<br>Nie Er可通过 March of the Volunteers and early Chinese film songs 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与东亚音乐更广泛的演变。"
        },
        {
            "start": "1936",
            "title": "Bismillah Khan（1916–2016）",
            "description": "[Bismillah Khan]<br>Bismillah Khan可通过 the elevation of the shehnai from ceremonial use to the Hindustani concert stage 被具体定位。作品中的演奏技术、音色与即兴语言连接了个人风格与南亚音乐更广泛的演变。"
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi（1916–2004）",
            "description": "[M. S. Subbulakshmi]<br>devotional recordings, Carnatic concerts and a landmark 1966 UN performance构成M. S. Subbulakshmi历史位置的具体证据：重点不只在知名度，而在这些材料如何改变南亚音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1936",
            "title": "Ravi Shankar（1916–2013）",
            "description": "[Ravi Shankar]<br>sitar concert repertory, collaborations with Yehudi Menuhin and influence on 1960s rock audiences构成Ravi Shankar历史位置的具体证据：重点不只在知名度，而在这些材料如何改变南亚音乐中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1938",
            "title": "Zhou Xuan（1918–1957）",
            "description": "[Zhou Xuan]<br>The Wandering Songstress and Shanghai film-song recordings of the 1930s–40s构成Zhou Xuan历史位置的具体证据：重点不只在知名度，而在这些材料如何改变东亚音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1939",
            "title": "Chavela Vargas（1919–2012）",
            "description": "[Chavela Vargas]<br>Chavela Vargas的代表性成果包括 La Llorona and stripped-down ranchera interpretation。这些作品把其在拉丁美洲音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan（1920–2012）",
            "description": "[Ali Akbar Khan]<br>理解Ali Akbar Khan最直接的入口是 sarod recordings and the Ali Akbar College of Music。从这些作品可以观察其如何处理演奏技术、音色与即兴语言，以及这种处理怎样进入南亚音乐的常用语言。"
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla（1921–1992）",
            "description": "[Astor Piazzolla]<br>Astor Piazzolla可通过 Adiós Nonino, Libertango and tango nuevo 被具体定位。作品中的作曲、曲式与音响组织连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "1943",
            "title": "Tito Puente（1923–2000）",
            "description": "[Tito Puente]<br>理解Tito Puente最直接的入口是 Oye Como Va, Dance Mania and the timbales-led mambo/salsa orchestra。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入拉丁美洲音乐的常用语言。"
        },
        {
            "start": "1945",
            "title": "Celia Cruz（1925–2003）",
            "description": "[Celia Cruz]<br>Quimbara, La Vida Es un Carnaval and the Fania-era salsa sound构成Celia Cruz历史位置的具体证据：重点不只在知名度，而在这些材料如何改变拉丁美洲音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim（1927–1994）",
            "description": "[Antônio Carlos Jobim]<br>The Girl from Ipanema, Desafinado and Wave构成Antônio Carlos Jobim历史位置的具体证据：重点不只在知名度，而在这些材料如何改变拉丁美洲音乐中的作曲、曲式与音响组织。"
        },
        {
            "start": "1951",
            "title": "João Gilberto（1931–2019）",
            "description": "[João Gilberto]<br>João Gilberto可通过 Chega de Saudade and the intimate guitar-vocal pulse of bossa nova 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "1952",
            "title": "Miriam Makeba（1932–2008）",
            "description": "[Miriam Makeba]<br>Miriam Makeba的代表性成果包括 Pata Pata, The Click Song and international anti-apartheid advocacy。这些作品把其在非洲流行与传统音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1954",
            "title": "Fairuz（born 1934）",
            "description": "[Fairuz]<br>理解Fairuz最直接的入口是 Li Beirut and a vast Rahbani repertory central to modern Lebanese song。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入中东与北非音乐的常用语言。"
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa（1935–2009）",
            "description": "[Mercedes Sosa]<br>Gracias a la Vida, Alfonsina y el Mar and the nueva canción movement构成Mercedes Sosa历史位置的具体证据：重点不只在知名度，而在这些材料如何改变拉丁美洲音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry（1936–2021）",
            "description": "[Lee “Scratch” Perry]<br>理解Lee “Scratch” Perry最直接的入口是 Black Ark productions, Super Ape and experimental dub studio practice。从这些作品可以观察其如何处理录音室制作、节拍与音色设计，以及这种处理怎样进入雷鬼与牙买加音乐的常用语言。"
        },
        {
            "start": "1957",
            "title": "Hibari Misora（1937–1989）",
            "description": "[Hibari Misora]<br>Kawa no Nagare no Yō ni, Kanashii Sake and postwar enka/kayōkyoku stardom构成Hibari Misora历史位置的具体证据：重点不只在知名度，而在这些材料如何改变东亚音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1958",
            "title": "Fela Kuti（1938–1997）",
            "description": "[Fela Kuti]<br>理解Fela Kuti最直接的入口是 Zombie, Expensive Shit and long-form Afrobeat built from horns, guitars and political lyrics。从这些作品可以观察其如何处理合奏编制、编曲和乐队声音，以及这种处理怎样进入非洲流行与传统音乐的常用语言。"
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré（1939–2006）",
            "description": "[Ali Farka Touré]<br>Savane, Talking Timbuktu and a guitar style linking Malian song to blues listeners构成Ali Farka Touré历史位置的具体证据：重点不只在知名度，而在这些材料如何改变非洲流行与传统音乐中的演奏技术、音色与即兴语言。"
        },
        {
            "start": "1961",
            "title": "Cesária Évora（1941–2011）",
            "description": "[Cesária Évora]<br>理解Cesária Évora最直接的入口是 Sodade and the international popularization of Cape Verdean morna。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入非洲流行与传统音乐的常用语言。"
        },
        {
            "start": "1962",
            "title": "Caetano Veloso（born 1942）",
            "description": "[Caetano Veloso]<br>Caetano Veloso可通过 Tropicália, Transa and a career joining Brazilian song, avant-garde ideas and politics 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "1962",
            "title": "Gilberto Gil（born 1942）",
            "description": "[Gilberto Gil]<br>Gilberto Gil的代表性成果包括 Expresso 2222, Refazenda and a central role in Tropicália and MPB。这些作品把其在拉丁美洲音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1962",
            "title": "Milton Nascimento（born 1942）",
            "description": "[Milton Nascimento]<br>Milton Nascimento的代表性成果包括 Clube da Esquina and Travessia。这些作品把其在拉丁美洲音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff（born 1944）",
            "description": "[Jimmy Cliff]<br>Many Rivers to Cross, The Harder They Come and You Can Get It If You Really Want构成Jimmy Cliff历史位置的具体证据：重点不只在知名度，而在这些材料如何改变雷鬼与牙买加音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1964",
            "title": "Peter Tosh（1944–1987）",
            "description": "[Peter Tosh]<br>Legalize It, Equal Rights and work with the Wailers构成Peter Tosh历史位置的具体证据：重点不只在知名度，而在这些材料如何改变雷鬼与牙买加音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1965",
            "title": "Bob Marley（1945–1981）",
            "description": "[Bob Marley]<br>理解Bob Marley最直接的入口是 Catch a Fire, Exodus, No Woman, No Cry and Redemption Song。从这些作品可以观察其如何处理词曲写作与个人化表演，以及这种处理怎样进入雷鬼与牙买加音乐的常用语言。"
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan（1948–1997）",
            "description": "[Nusrat Fateh Ali Khan]<br>理解Nusrat Fateh Ali Khan最直接的入口是 Allah Hoo, Mustt Mustt and extended qawwali improvisation。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入南亚音乐的常用语言。"
        },
        {
            "start": "1969",
            "title": "Salif Keita（born 1949）",
            "description": "[Salif Keita]<br>理解Salif Keita最直接的入口是 Soro, Moffou and a high-register voice central to modern Malian pop。从这些作品可以观察其如何处理声音、措辞与录音表演，以及这种处理怎样进入非洲流行与传统音乐的常用语言。"
        },
        {
            "start": "1970",
            "title": "Juan Gabriel（1950–2016）",
            "description": "[Juan Gabriel]<br>Juan Gabriel的代表性成果包括 Querida, Amor Eterno and a vast Mexican popular-song catalogue。这些作品把其在拉丁美洲音乐中的词曲写作与个人化表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1971",
            "title": "Zakir Hussain（1951–2024）",
            "description": "[Zakir Hussain]<br>Zakir Hussain的代表性成果包括 tabla solo performance, Shakti and cross-cultural percussion collaborations。这些作品把其在南亚音乐中的演奏技术、音色与即兴语言保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto（1952–2023）",
            "description": "[Ryuichi Sakamoto]<br>Ryuichi Sakamoto的代表性成果包括 Yellow Magic Orchestra, Thousand Knives, Merry Christmas Mr. Lawrence and The Last Emperor。这些作品把其在东亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1973",
            "title": "Kitarō（born 1953）",
            "description": "[Kitarō]<br>Kitarō的代表性成果包括 Silk Road, Kojiki and synthesizer-based new-age soundscapes。这些作品把其在东亚音乐中的作曲、曲式与音响组织保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1973",
            "title": "Teresa Teng（1953–1995）",
            "description": "[Teresa Teng]<br>The Moon Represents My Heart, Sweet as Honey and multilingual East Asian pop recordings构成Teresa Teng历史位置的具体证据：重点不只在知名度，而在这些材料如何改变东亚音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra 成立",
            "description": "[Yellow Magic Orchestra formed]<br>Yellow Magic Orchestra的早期成员组合和共同创作确立了其声音；可从 Yellow Magic Orchestra, Solid State Survivor and Technodelic 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour（born 1959）",
            "description": "[Youssou N’Dour]<br>Youssou N’Dour的代表性成果包括 Immigrés, 7 Seconds and the mbalax style。这些作品把其在非洲流行与传统音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo（born 1960）",
            "description": "[Angélique Kidjo]<br>Angélique Kidjo的代表性成果包括 Agolo, Wombo Lombo and multilingual reinterpretations of African and global repertoire。这些作品把其在非洲流行与传统音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1989",
            "title": "Faye Wong（born 1969）",
            "description": "[Faye Wong]<br>Faye Wong的代表性成果包括 Random Thoughts, Sky and a vocal style linking Cantopop/Mandopop with alternative pop。这些作品把其在东亚音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1991",
            "title": "Selena（1971–1995）",
            "description": "[Selena]<br>Selena的代表性成果包括 Como la Flor, Amor Prohibido and Dreaming of You。这些作品把其在拉丁美洲音乐中的声音、措辞与录音表演保留为可直接聆听、演奏或研究的材料。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys 成立",
            "description": "[Seo Taiji and Boys formed]<br>Seo Taiji and Boys的早期成员组合和共同创作确立了其声音；可从 Nan Arayo and the fusion of Korean pop with rap, rock and dance production 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "1997",
            "title": "Shakira（born 1977）",
            "description": "[Shakira]<br>Shakira可通过 Pies Descalzos, Laundry Service, Hips Don’t Lie and bilingual Latin-pop crossover 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "1999",
            "title": "Jay Chou（born 1979）",
            "description": "[Jay Chou]<br>Jay Chou可通过 Jay, Fantasy and a blend of R&B, rap and Chinese-themed songwriting 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与东亚音乐更广泛的演变。"
        },
        {
            "start": "2003",
            "title": "Hikaru Utada（born 1983）",
            "description": "[Hikaru Utada]<br>Hikaru Utada可通过 First Love, Distance and Deep River 被具体定位。作品中的词曲写作与个人化表演连接了个人风格与东亚音乐更广泛的演变。"
        },
        {
            "start": "2011",
            "title": "Burna Boy（born 1991）",
            "description": "[Burna Boy]<br>African Giant, Twice as Tall and Love, Damini构成Burna Boy历史位置的具体证据：重点不只在知名度，而在这些材料如何改变非洲流行与传统音乐中的声音、措辞与录音表演。"
        },
        {
            "start": "2013",
            "title": "BTS 成立",
            "description": "[BTS formed]<br>BTS的早期成员组合和共同创作确立了其声音；可从 The Most Beautiful Moment in Life series, Wings, Love Yourself and Map of the Soul 观察乐队在编曲、录音与现场形象上的发展。"
        },
        {
            "start": "2014",
            "title": "Bad Bunny（born 1994）",
            "description": "[Bad Bunny]<br>Bad Bunny可通过 X 100pre, YHLQMDLG and Un Verano Sin Ti 被具体定位。作品中的声音、措辞与录音表演连接了个人风格与拉丁美洲音乐更广泛的演变。"
        },
        {
            "start": "2016",
            "title": "BLACKPINK 成立",
            "description": "[BLACKPINK formed]<br>BLACKPINK的早期成员组合和共同创作确立了其声音；可从 Square Up, The Album, Born Pink and large-scale global touring 观察乐队在编曲、录音与现场形象上的发展。"
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
            "description": "[Hildegard’s Ordo Virtutum]<br>《德行剧》是现存最早的大型道德剧音乐之一；女性德性角色以歌唱表现，魔鬼却只说话，从音响上区分神圣秩序与诱惑。"
        },
        {
            "start": "1360",
            "title": "马肖《圣母弥撒》",
            "description": "[Machaut’s Messe de Nostre Dame]<br>这是现存最早由单一作曲家统一构思的完整复调弥撒套曲之一，把弥撒常规文各段组织为可作为整体理解的作品。"
        },
        {
            "start": "1597",
            "title": "佩里与科尔西《达芙妮》",
            "description": "[Peri and Corsi’s Dafne]<br>《达芙妮》常被视为最早的歌剧实验之一；乐谱大多散失，但它标志着佛罗伦萨知识界尝试以单声宣叙重建古希腊戏剧。"
        },
        {
            "start": "1607",
            "title": "蒙特威尔第《奥菲欧》首演",
            "description": "[Monteverdi’s L’Orfeo premieres]<br>《奥菲欧》以清晰的器乐配色、反复段和富有表现力的宣叙调，把早期歌剧从宫廷实验推进为至今仍能完整上演的戏剧作品。"
        },
        {
            "start": "1642",
            "title": "蒙特威尔第《波佩亚的加冕》",
            "description": "[Monteverdi’s L’incoronazione di Poppea]<br>它以真实历史人物而非神话为主角，并让欲望、权力和道德暧昧性进入公共歌剧舞台；结尾二重唱成为早期歌剧抒情表达的典型。"
        },
        {
            "start": "1689",
            "title": "珀塞尔《狄多与埃涅阿斯》",
            "description": "[Purcell’s Dido and Aeneas]<br>这部紧凑的英语歌剧把舞蹈、合唱和宣叙调结合；狄多哀歌以反复低音承载逐渐加深的悲剧感。"
        },
        {
            "start": "1711",
            "title": "亨德尔《里纳尔多》伦敦首演",
            "description": "[Handel’s Rinaldo premieres in London]<br>《里纳尔多》是亨德尔为伦敦创作的第一部意大利歌剧，以舞台机械、华丽咏叹调和明星歌手把意大利歌剧变成当地商业娱乐。"
        },
        {
            "start": "1721",
            "title": "巴赫《勃兰登堡协奏曲》汇编",
            "description": "[Bach’s Brandenburg Concertos assembled]<br>六首协奏曲为不同乐器组合量身设计，从无小提琴的第六首到键盘主导的第五首，集中展示了协奏曲体裁的多种可能。"
        },
        {
            "start": "1725",
            "title": "维瓦尔第《四季》出版",
            "description": "[Vivaldi’s The Four Seasons published]<br>四首小提琴协奏曲附有十四行诗，以鸟鸣、雷雨、酷暑和冰面等可辨识声响把器乐协奏曲发展为早期标题音乐。"
        },
        {
            "start": "1741",
            "title": "巴赫《哥德堡变奏曲》出版",
            "description": "[Bach’s Goldberg Variations published]<br>一个咏叹调与三十个变奏由共同低音和声骨架联系，卡农间隔逐次扩大，显示键盘变奏既可严密又可包含舞曲与炫技。"
        },
        {
            "start": "1742",
            "title": "亨德尔《弥赛亚》首演",
            "description": "[Handel’s Messiah premieres]<br>《弥赛亚》以英语圣经文本和独唱、合唱、管弦乐组织救世叙事；都柏林首演后，它成为英语清唱剧与公共慈善演出的核心曲目。"
        },
        {
            "start": "1749",
            "title": "亨德尔《皇家焰火音乐》",
            "description": "[Handel’s Music for the Royal Fireworks]<br>作品为露天庆典而写，原始方案突出管乐与打击乐，以足够强的投射力配合烟火和大型公共空间。"
        },
        {
            "start": "1762",
            "title": "格鲁克《奥菲欧与尤丽狄茜》首演",
            "description": "[Gluck’s Orfeo ed Euridice premieres]<br>格鲁克削弱炫技咏叹调和复杂支线，让音乐、舞蹈、合唱与戏剧情节直接服务于清晰情感，成为“歌剧改革”的范例。"
        },
        {
            "start": "1786",
            "title": "莫扎特《费加罗的婚礼》首演",
            "description": "[Mozart’s The Marriage of Figaro premieres]<br>长篇合奏终曲让多个角色在同一时间推进不同计划和情绪，音乐把阶级冲突、误会与人物心理织成连续戏剧。"
        },
        {
            "start": "1787",
            "title": "莫扎特《唐璜》首演",
            "description": "[Mozart’s Don Giovanni premieres]<br>作品把喜歌剧、悲剧和超自然恐怖并置；序曲开头的和声在石客场景中回归，使全剧获得跨场景的结构记忆。"
        },
        {
            "start": "1791",
            "title": "莫扎特《魔笛》首演",
            "description": "[Mozart’s The Magic Flute premieres]<br>德语对白、民谣式歌曲、炫技咏叹调和共济会象征共存，使宫廷式歌剧语言进入面向大众的歌唱剧。"
        },
        {
            "start": "1805",
            "title": "贝多芬《英雄交响曲》公开首演",
            "description": "[Beethoven’s Eroica Symphony public premiere]<br>第三交响曲扩大篇幅、发展部和葬礼进行曲的戏剧重量，把交响曲从宫廷娱乐推向关于英雄、冲突与历史的公共论述。"
        },
        {
            "start": "1808-12-22",
            "title": "贝多芬第五与第六交响曲首演",
            "description": "[Beethoven premieres the Fifth and Sixth Symphonies]<br>同一场1808年音乐会首次呈现第五的动机集中与第六的田园标题，显示贝多芬可用两种相反方法重塑交响曲。"
        },
        {
            "start": "1816",
            "title": "罗西尼《塞维利亚的理发师》首演",
            "description": "[Rossini’s The Barber of Seville premieres]<br>快速重复、层层加入的合唱和“罗西尼渐强”把喜剧情境转化为精确的节奏机器，后来成为意大利喜歌剧的标准。"
        },
        {
            "start": "1821",
            "title": "韦伯《自由射手》首演",
            "description": "[Weber’s Der Freischütz premieres]<br>德语对白、民间传说、森林音响与“狼谷”超自然场景结合，确立了德国浪漫主义歌剧的民族与幻想空间。"
        },
        {
            "start": "1824-05-07",
            "title": "贝多芬第九交响曲首演",
            "description": "[Beethoven’s Ninth Symphony premieres]<br>终乐章首次在大型交响曲中引入独唱与合唱，以《欢乐颂》把器乐结构转向关于人类共同体的公共表达。"
        },
        {
            "start": "1830",
            "title": "柏辽兹《幻想交响曲》首演",
            "description": "[Berlioz’s Symphonie fantastique premieres]<br>固定乐思在五个乐章中不断变形，配合详细自传式节目和扩大的管弦乐音色，建立了浪漫主义标题交响曲的模型。"
        },
        {
            "start": "1831",
            "title": "贝利尼《诺尔玛》首演",
            "description": "[Bellini’s Norma premieres]<br>长线条旋律、精细呼吸和“Casta diva”等场景把美声唱法的技术要求与角色的宗教权威、爱情和牺牲结合。"
        },
        {
            "start": "1842",
            "title": "威尔第《纳布科》首演",
            "description": "[Verdi’s Nabucco premieres]<br>宏大的合唱场景和《飞吧，思想，乘着金色翅膀》使威尔第一举成名，也把群体流亡与政治认同带进意大利歌剧公共文化。"
        },
        {
            "start": "1845",
            "title": "门德尔松《小提琴协奏曲》首演",
            "description": "[Mendelssohn’s Violin Concerto premieres]<br>独奏小提琴几乎立即进入，华彩段写入乐谱并连接再现部，三个乐章连续演奏，重新定义了协奏曲的结构流动。"
        },
        {
            "start": "1853",
            "title": "威尔第《茶花女》首演",
            "description": "[Verdi’s La traviata premieres]<br>作品把当代都市社交生活和身患重病的女性置于歌剧中心，以圆舞曲、亲密独唱和紧凑场景表现社会排斥。"
        },
        {
            "start": "1865",
            "title": "瓦格纳《特里斯坦与伊索尔德》首演",
            "description": "[Wagner’s Tristan und Isolde premieres]<br>“特里斯坦和弦”、持续延宕的终止和连续管弦乐织体把欲望写成长期不解决的和声张力，深刻影响后来的现代主义。"
        },
        {
            "start": "1871",
            "title": "威尔第《阿依达》首演",
            "description": "[Verdi’s Aida premieres]<br>作品在大型仪式场面与极其私密的三角关系之间切换，证明“大歌剧”规模也能服务于细腻人物心理。"
        },
        {
            "start": "1876",
            "title": "《尼伯龙根的指环》全剧在拜罗伊特上演",
            "description": "[Complete Ring cycle opens at Bayreuth]<br>四部剧连续上演，专门建造的拜罗伊特节日剧院隐藏乐池并控制观众视线，使“整体艺术作品”成为建筑、舞台与音乐的统一经验。"
        },
        {
            "start": "1877",
            "title": "柴可夫斯基《天鹅湖》首演",
            "description": "[Tchaikovsky’s Swan Lake premieres]<br>柴可夫斯基以交响化主题发展和角色动机提高芭蕾配乐的结构密度，尽管初演反响有限，后来修订制作使其成为古典芭蕾核心。"
        },
        {
            "start": "1882",
            "title": "瓦格纳《帕西法尔》首演",
            "description": "[Wagner’s Parsifal premieres]<br>作品为拜罗伊特空间量身设计，以缓慢仪式、圣杯主题和特殊舞台转换营造“舞台神圣节庆剧”的宗教化体验。"
        },
        {
            "start": "1888",
            "title": "里姆斯基-科萨科夫《天方夜谭》首演",
            "description": "[Rimsky-Korsakov’s Scheherazade premieres]<br>独奏小提琴代表讲述者谢赫拉查德，铜管和低音动机代表苏丹；不断变化的配器把故事性建立在音色而非文字上。"
        },
        {
            "start": "1890",
            "title": "马斯卡尼《乡村骑士》首演",
            "description": "[Mascagni’s Cavalleria rusticana premieres]<br>一幕结构、乡村背景和突发暴力把普通人的嫉妒与社会压力带上歌剧舞台，成为意大利真实主义歌剧的典型。"
        },
        {
            "start": "1892",
            "title": "柴可夫斯基《胡桃夹子》首演",
            "description": "[Tchaikovsky’s The Nutcracker premieres]<br>糖梅仙子舞曲首次让钢片琴成为大众熟悉的音色；各国舞曲和儿童视角使整部芭蕾成为后来节日演出的固定传统。"
        },
        {
            "start": "1893",
            "title": "德沃夏克《自新大陆》首演",
            "description": "[Dvořák’s New World Symphony premieres]<br>交响曲把灵歌和原住民音乐的节奏、音阶印象与欧洲交响发展结合，而不是直接引用现成旋律，成为跨文化民族主义的范例。"
        },
        {
            "start": "1896",
            "title": "普契尼《波希米亚人》首演",
            "description": "[Puccini’s La bohème premieres]<br>短小动机、快速场景转换和口语化节奏把贫穷艺术家的日常细节与强烈抒情高潮连接，建立了现代生活题材歌剧的典型。"
        },
        {
            "start": "1900",
            "title": "普契尼《托斯卡》首演",
            "description": "[Puccini’s Tosca premieres]<br>几乎实时推进的政治惊悚结构、舞台内外钟声与“托斯卡和弦”把罗马具体地点、暴力和角色动机紧密结合。"
        },
        {
            "start": "1902",
            "title": "德彪西《佩利亚斯与梅丽桑德》首演",
            "description": "[Debussy’s Pelléas et Mélisande premieres]<br>法语语调化宣叙、朦胧管弦乐和避免传统咏叹调的连续场景，让象征主义戏剧获得不同于瓦格纳的音乐时间。"
        },
        {
            "start": "1905",
            "title": "理查德·施特劳斯《莎乐美》首演",
            "description": "[Richard Strauss’s Salome premieres]<br>极端半音和声、巨大管弦乐与“七纱舞”把圣经题材改写为心理欲望和感官冲击，成为现代歌剧早期丑闻性成功。"
        },
        {
            "start": "1910",
            "title": "斯特拉文斯基《火鸟》首演",
            "description": "[Stravinsky’s The Firebird premieres]<br>俄罗斯民间故事、里姆斯基式配器和反复节奏使斯特拉文斯基在巴黎成名，也奠定佳吉列夫俄罗斯芭蕾团的现代主义形象。"
        },
        {
            "start": "1911",
            "title": "斯特拉文斯基《彼得鲁什卡》首演",
            "description": "[Stravinsky’s Petrushka premieres]<br>“彼得鲁什卡和弦”的双调性、街市场景和钢琴般打击性的管弦乐，把木偶人物的机械性与悲剧性同时写入声音。"
        },
        {
            "start": "1912",
            "title": "勋伯格《月迷彼埃罗》首演",
            "description": "[Schoenberg’s Pierrot lunaire premieres]<br>二十一首短曲以说唱式Sprechstimme和五人器乐组合不断换色，把无调性写作变成高度戏剧化的室内音乐。"
        },
        {
            "start": "1913-05-29",
            "title": "《春之祭》巴黎首演",
            "description": "[The Rite of Spring premieres in Paris]<br>不对称重音、反复和弦、层叠节拍与大型打击乐使舞蹈音乐获得前所未有的身体冲击；首演争议也成为现代主义大众神话。"
        },
        {
            "start": "1918",
            "title": "霍尔斯特《行星》全曲公开演出",
            "description": "[Holst’s The Planets receives complete public performance]<br>七个乐章分别塑造火星、金星等占星性格，以不规则节拍、女声远唱和巨大管弦乐影响了后来电影与游戏的宇宙音响。"
        },
        {
            "start": "1924-02-12",
            "title": "格什温《蓝色狂想曲》首演",
            "description": "[Gershwin’s Rhapsody in Blue premieres]<br>钢琴协奏性写法、蓝调音和管乐队色彩在同一作品中相遇，使爵士语汇进入美国大型公共音乐会而不被完全“古典化”。"
        },
        {
            "start": "1925",
            "title": "贝尔格《沃采克》首演",
            "description": "[Berg’s Wozzeck premieres]<br>无调性语言被组织进帕萨卡利亚、赋格、组曲等传统形式，碎片化场景表现贫困、军事权力和精神崩溃。"
        },
        {
            "start": "1927",
            "title": "《演艺船》百老汇开演",
            "description": "[Show Boat opens on Broadway]<br>歌曲、人物发展和严肃社会议题被更紧密地整合进剧情，跨越数十年的叙事也突破了早期音乐喜剧的轻薄结构。"
        },
        {
            "start": "1928",
            "title": "拉威尔《波莱罗》首演",
            "description": "[Ravel’s Boléro premieres]<br>同一旋律和节奏几乎不变，只靠配器接力与持续渐强推进；作品因此像一场关于管弦乐音色和累积能量的公开实验。"
        },
        {
            "start": "1935",
            "title": "《波吉与贝丝》首演",
            "description": "[Porgy and Bess premieres]<br>歌剧、爵士、灵歌和百老汇歌曲语言被用于描写黑人社区人物；《Summertime》等曲目随后脱离舞台进入全球标准曲库。"
        },
        {
            "start": "1937",
            "title": "奥尔夫《布兰诗歌》首演",
            "description": "[Orff’s Carmina Burana premieres]<br>强烈固定音型、块状和声和直接拉丁/中古德语文本优先于复杂对位，形成易辨识而具有仪式冲击力的合唱声音。"
        },
        {
            "start": "1943",
            "title": "《俄克拉荷马！》百老汇开演",
            "description": "[Oklahoma! opens on Broadway]<br>歌曲、舞蹈和剧情首次被系统整合到人物选择与社区冲突中，“梦境芭蕾”还让舞蹈承担心理叙事。"
        },
        {
            "start": "1944",
            "title": "科普兰《阿巴拉契亚之春》首演",
            "description": "[Copland’s Appalachian Spring premieres]<br>原为小型室内乐团和玛莎·葛兰姆舞团创作，开放音程与《Simple Gifts》变奏塑造了美国乡村理想的公共声音。"
        },
        {
            "start": "1945",
            "title": "布里顿《彼得·格赖姆斯》首演",
            "description": "[Britten’s Peter Grimes premieres]<br>海景间奏曲、合唱作为社区角色和男高音主人公的矛盾心理，使英语歌剧在二战后重新进入国际核心曲目。"
        },
        {
            "start": "1952-08-29",
            "title": "凯奇《4分33秒》首演",
            "description": "[Cage’s 4′33″ premieres]<br>演奏者不发出预定音符，作品把咳嗽、风声和环境噪音纳入聆听对象，迫使听众重新界定作品、沉默与表演。"
        },
        {
            "start": "1956",
            "title": "施托克豪森《少年之歌》完成",
            "description": "[Stockhausen’s Gesang der Jünglinge completed]<br>儿童歌声被切分、滤波并与电子音合成，五声道空间移动把音色、语言和位置同时变成作曲参数。"
        },
        {
            "start": "1957",
            "title": "《西区故事》百老汇开演",
            "description": "[West Side Story opens on Broadway]<br>爵士、拉丁节奏、复杂合唱和杰罗姆·罗宾斯舞蹈共同承担帮派冲突与爱情悲剧，舞蹈不再只是插曲。"
        },
        {
            "start": "1958",
            "title": "瓦雷兹《电子音诗》在布鲁塞尔世博会呈现",
            "description": "[Varèse’s Poème électronique at the Brussels World’s Fair]<br>在菲利普斯馆内，电子声通过数百只扬声器沿建筑空间移动，并与柯布西耶的图像和建筑结合，成为早期多媒体沉浸式作品。"
        },
        {
            "start": "1964",
            "title": "特里·赖利《In C》首演",
            "description": "[Terry Riley’s In C premieres]<br>五十三个短乐句由演奏者自行决定重复次数和前进速度，在共同脉冲下形成每次不同但仍可辨识的开放结构。"
        },
        {
            "start": "1976",
            "title": "格拉斯《海滩上的爱因斯坦》首演",
            "description": "[Glass’s Einstein on the Beach premieres]<br>约五小时、无传统情节、使用数字唱词和反复乐句，观众可自由进出，彻底改变歌剧的时间经验和叙事期待。"
        },
        {
            "start": "1977",
            "title": "《星球大战》重建大片管弦配乐模式",
            "description": "[Star Wars establishes a new blockbuster orchestral film-score model]<br>约翰·威廉斯以大型交响乐队、清晰主题和角色动机复兴好莱坞黄金时代配乐，使主题旋律重新成为商业大片的核心叙事工具。"
        },
        {
            "start": "1987",
            "title": "约翰·亚当斯《尼克松在中国》首演",
            "description": "[John Adams’s Nixon in China premieres]<br>作品把1972年外交访问变为“当代历史歌剧”，以极简脉冲、爵士化管弦乐和媒体语言描写政治人物的公共形象与私人反思。"
        },
        {
            "start": "2015",
            "title": "《汉密尔顿》百老汇开演",
            "description": "[Hamilton opens on Broadway]<br>嘻哈、R&B与传统音乐剧写法共同叙述建国史，多族裔选角把“谁有权代表国家历史”变成作品本身的一部分。"
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
            "description": "“Vesti la giubba”之所以可作为时间线节点，是因为Enrico Caruso的版本为演奏诠释、录音声场和标准曲目的传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "Original Dixieland Jass Band的“Livery Stable Blues / Dixie Jass Band One-Step”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "理解“Crazy Blues”时，应直接听Mamie Smith如何组织蓝调音、呼应结构与个人化叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "“Downhearted Blues”记录了Bessie Smith在蓝调音、呼应结构与个人化叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "“Hot Five recordings begin”之所以可作为时间线节点，是因为Louis Armstrong and His Hot Five的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "理解“Blue Yodel”时，应直接听Jimmie Rodgers如何组织叙事歌曲、弦乐器编配与地域口音。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "“Avalon Blues recordings”之所以可作为时间线节点，是因为Mississippi John Hurt的版本为蓝调音、呼应结构与个人化叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "理解“San Antonio and Dallas sessions”时，应直接听Robert Johnson如何组织蓝调音、呼应结构与个人化叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "Billie Holiday的“Strange Fruit”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "Woody Guthrie的“Dust Bowl Ballads”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "Bing Crosby的“White Christmas”把旋律记忆点、声音制作与大众传播固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "Duke Ellington的“Black, Brown and Beige”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "“I Can’t Be Satisfied”记录了Muddy Waters在蓝调音、呼应结构与个人化叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "“Lovesick Blues”之所以可作为时间线节点，是因为Hank Williams的版本为叙事歌曲、弦乐器编配与地域口音留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "理解“Anthology of American Folk Music”时，应直接听Various Artists如何组织曲目选择、表演和制作方法。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "“Tosca”之所以可作为时间线节点，是因为Maria Callas / Victor de Sabata的版本为演奏诠释、录音声场和标准曲目的传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "“Rock Around the Clock”记录了Bill Haley & His Comets在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "“In the Wee Small Hours”之所以可作为时间线节点，是因为Frank Sinatra的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "Glenn Gould的“Bach: Goldberg Variations”把演奏诠释、录音声场和标准曲目的传播固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "理解“Ella and Louis”时，应直接听Ella Fitzgerald & Louis Armstrong如何组织即兴线条、节奏推进与合奏互动。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "理解“Elvis Presley”时，应直接听Elvis Presley如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "“Three Ragas”记录了Ravi Shankar在曲目选择、表演和制作方法上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "“After School Session”记录了Chuck Berry在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "理解“Here’s Little Richard”时，应直接听Little Richard如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "“Brilliant Corners”记录了Thelonious Monk在即兴线条、节奏推进与合奏互动上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "“Lady in Satin”之所以可作为时间线节点，是因为Billie Holiday的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "“Milestones”记录了Miles Davis在即兴线条、节奏推进与合奏互动上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "“Mingus Ah Um”之所以可作为时间线节点，是因为Charles Mingus的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "“Time Out”之所以可作为时间线节点，是因为Dave Brubeck Quartet的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "“Kind of Blue”记录了Miles Davis在即兴线条、节奏推进与合奏互动上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "John Coltrane的“Giant Steps”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "理解“O amor, o sorriso e a flor”时，应直接听João Gilberto如何组织舞曲节奏、打击乐层次与跨地域传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "Ornette Coleman的“Free Jazz”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "“King of the Delta Blues Singers”记录了Robert Johnson在蓝调音、呼应结构与个人化叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "理解“Bob Dylan”时，应直接听Bob Dylan如何组织曲目选择、表演和制作方法。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "理解“Modern Sounds in Country and Western Music”时，应直接听Ray Charles如何组织声线分层、律动与录音室编排。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "James Brown的“Live at the Apollo”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "“Night Beat”记录了Sam Cooke在福音式演唱、节奏律动与情感强度上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "“Please Please Me”之所以可作为时间线节点，是因为The Beatles的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "理解“Getz/Gilberto”时，应直接听Stan Getz & João Gilberto如何组织舞曲节奏、打击乐层次与跨地域传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "“The Beach Boys Today!”记录了The Beach Boys在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "“Where Did Our Love Go”之所以可作为时间线节点，是因为The Supremes的版本为福音式演唱、节奏律动与情感强度留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "“Enta Omri”记录了Umm Kulthum在曲目选择、表演和制作方法上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "理解“Highway 61 Revisited”时，应直接听Bob Dylan如何组织曲目选择、表演和制作方法。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "“A Love Supreme”之所以可作为时间线节点，是因为John Coltrane的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "“Otis Blue”之所以可作为时间线节点，是因为Otis Redding的版本为福音式演唱、节奏律动与情感强度留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "理解“Rubber Soul”时，应直接听The Beatles如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "“Blonde on Blonde”记录了Bob Dylan在曲目选择、表演和制作方法上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "“Wild Is the Wind”记录了Nina Simone在即兴线条、节奏推进与合奏互动上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "理解“Pet Sounds”时，应直接听The Beach Boys如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "理解“Revolver”时，应直接听The Beatles如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "“I Never Loved a Man the Way I Love You”记录了Aretha Franklin在福音式演唱、节奏律动与情感强度上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "“Are You Experienced”记录了Jimi Hendrix Experience在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "理解“Sgt. Pepper’s Lonely Hearts Club Band”时，应直接听The Beatles如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "“The Doors”记录了The Doors在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "理解“The Velvet Underground & Nico”时，应直接听The Velvet Underground & Nico如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "Johnny Cash的“At Folsom Prison”把叙事歌曲、弦乐器编配与地域口音固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "The Beatles的“The Beatles (White Album)”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "“Astral Weeks”记录了Van Morrison在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "理解“Switched-On Bach”时，应直接听Wendy Carlos如何组织合成、序列、空间处理与重复结构。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "理解“Abbey Road”时，应直接听The Beatles如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "理解“Let It Bleed”时，应直接听The Rolling Stones如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "理解“The Stooges”时，应直接听The Stooges如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "“Black Sabbath”记录了Black Sabbath在失真音色、riff组织和强力鼓击上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "“Paranoid”记录了Black Sabbath在失真音色、riff组织和强力鼓击上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "“Bitches Brew”之所以可作为时间线节点，是因为Miles Davis的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "Neil Young的“After the Gold Rush”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "“Tapestry”之所以可作为时间线节点，是因为Carole King的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "“Coat of Many Colors”之所以可作为时间线节点，是因为Dolly Parton的版本为叙事歌曲、弦乐器编配与地域口音留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "理解“Blue”时，应直接听Joni Mitchell如何组织曲目选择、表演和制作方法。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "“Led Zeppelin IV”之所以可作为时间线节点，是因为Led Zeppelin的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "“What’s Going On”记录了Marvin Gaye在福音式演唱、节奏律动与情感强度上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "“Who’s Next”记录了The Who在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "理解“The Rise and Fall of Ziggy Stardust and the Spiders from Mars”时，应直接听David Bowie如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "“Talking Book”记录了Stevie Wonder在福音式演唱、节奏律动与情感强度上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "理解“Exile on Main St.”时，应直接听The Rolling Stones如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "Herbie Hancock的“Head Hunters”把即兴线条、节奏推进与合奏互动固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "“Catch a Fire”之所以可作为时间线节点，是因为Marley / The Wailers的版本为低音主导、反拍和录音室混音留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "“The Dark Side of the Moon”之所以可作为时间线节点，是因为Pink Floyd的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "理解“Innervisions”时，应直接听Stevie Wonder如何组织福音式演唱、节奏律动与情感强度。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "“Autobahn”之所以可作为时间线节点，是因为Kraftwerk的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "“Born to Run”记录了Bruce Springsteen在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "“The Köln Concert”之所以可作为时间线节点，是因为Keith Jarrett的版本为即兴线条、节奏推进与合奏互动留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "“Horses”之所以可作为时间线节点，是因为Patti Smith的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "Willie Nelson的“Red Headed Stranger”把叙事歌曲、弦乐器编配与地域口音固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "“Zombie”之所以可作为时间线节点，是因为Fela Kuti的版本为地域节奏、语言与现代制作的结合留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "理解“Ramones”时，应直接听Ramones如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "“Songs in the Key of Life”之所以可作为时间线节点，是因为Stevie Wonder的版本为福音式演唱、节奏律动与情感强度留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "“Exodus”之所以可作为时间线节点，是因为Bob Marley & The Wailers的版本为低音主导、反拍和录音室混音留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "“Low”记录了David Bowie在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "“I Remember Yesterday”之所以可作为时间线节点，是因为Donna Summer的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "“Rumours”之所以可作为时间线节点，是因为Fleetwood Mac的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "“Trans-Europe Express”记录了Kraftwerk在合成、序列、空间处理与重复结构上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "“Never Mind the Bollocks, Here’s the Sex Pistols”之所以可作为时间线节点，是因为Sex Pistols的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "Teresa Teng的“The Moon Represents My Heart”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "Brian Eno的“Ambient 1: Music for Airports”把合成、序列、空间处理与重复结构固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "理解“The Kick Inside”时，应直接听Kate Bush如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "“Unknown Pleasures”之所以可作为时间线节点，是因为Joy Division的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "“Off the Wall”记录了Michael Jackson在旋律记忆点、声音制作与大众传播上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "“London Calling”记录了The Clash在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "“Rapper’s Delight”记录了The Sugarhill Gang在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "“Solid State Survivor”记录了Yellow Magic Orchestra在合成、序列、空间处理与重复结构上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "“Back in Black”之所以可作为时间线节点，是因为AC/DC的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "“British Steel”记录了Judas Priest在失真音色、riff组织和强力鼓击上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "理解“Remain in Light”时，应直接听Talking Heads如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "The Human League的“Dare”把合成、序列、空间处理与重复结构固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "“Tom Tom Club”记录了Tom Tom Club在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "“The Message”之所以可作为时间线节点，是因为Grandmaster Flash and the Furious Five的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "Iron Maiden的“The Number of the Beast”把失真音色、riff组织和强力鼓击固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "理解“Thriller”时，应直接听Michael Jackson如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "“Power, Corruption & Lies”之所以可作为时间线节点，是因为New Order的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "理解“Murmur”时，应直接听R.E.M.如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "“Born in the U.S.A.”之所以可作为时间线节点，是因为Bruce Springsteen的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "理解“Purple Rain”时，应直接听Prince and the Revolution如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "“Run-D.M.C.”记录了Run-D.M.C.在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "“Hounds of Love”之所以可作为时间线节点，是因为Kate Bush的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "理解“Master of Puppets”时，应直接听Metallica如何组织失真音色、riff组织和强力鼓击。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "Paul Simon的“Graceland”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "“Reign in Blood”记录了Slayer在失真音色、riff组织和强力鼓击上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "“Appetite for Destruction”之所以可作为时间线节点，是因为Guns N’ Roses的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "Prince的“Sign o’ the Times”把旋律记忆点、声音制作与大众传播固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "理解“The Joshua Tree”时，应直接听U2如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "N.W.A的“Straight Outta Compton”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "“It Takes a Nation of Millions to Hold Us Back”之所以可作为时间线节点，是因为Public Enemy的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "Sonic Youth的“Daydream Nation”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "“3 Feet High and Rising”之所以可作为时间线节点，是因为De La Soul的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "“Like a Prayer”之所以可作为时间线节点，是因为Madonna的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "Nusrat Fateh Ali Khan的“Shahen-Shah”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "“Violator”之所以可作为时间线节点，是因为Depeche Mode的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "“The Low End Theory”之所以可作为时间线节点，是因为A Tribe Called Quest的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "理解“Logozo”时，应直接听Angélique Kidjo如何组织地域节奏、语言与现代制作的结合。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "“Blue Lines”之所以可作为时间线节点，是因为Massive Attack的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "理解“Loveless”时，应直接听My Bloody Valentine如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "“Nevermind”之所以可作为时间线节点，是因为Nirvana的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "“Roja soundtrack”记录了A. R. Rahman在曲目选择、表演和制作方法上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "理解“Selected Ambient Works 85–92”时，应直接听Aphex Twin如何组织合成、序列、空间处理与重复结构。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "理解“The Chronic”时，应直接听Dr. Dre如何组织押韵节奏、采样/节拍制作与社会叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "“Vulgar Display of Power”记录了Pantera在失真音色、riff组织和强力鼓击上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "“Seo Taiji and Boys”记录了Seo Taiji and Boys在曲目选择、表演和制作方法上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "“Debut”之所以可作为时间线节点，是因为Björk的版本为合成、序列、空间处理与重复结构留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "理解“Enter the Wu-Tang (36 Chambers)”时，应直接听Wu-Tang Clan如何组织押韵节奏、采样/节拍制作与社会叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "“Parklife”之所以可作为时间线节点，是因为Blur的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "理解“Dookie”时，应直接听Green Day如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "Nas的“Illmatic”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "理解“Definitely Maybe”时，应直接听Oasis如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "The Notorious B.I.G.的“Ready to Die”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "“Jagged Little Pill”记录了Alanis Morissette在吉他音色、节奏段落与专辑/现场能量上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "理解“The Bends”时，应直接听Radiohead如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "“All Eyez on Me”之所以可作为时间线节点，是因为2Pac的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "Faye Wong的“Restless”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "Jay-Z的“Reasonable Doubt”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "“Homogenic”记录了Björk在合成、序列、空间处理与重复结构上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "理解“Buena Vista Social Club”时，应直接听Buena Vista Social Club如何组织舞曲节奏、打击乐层次与跨地域传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "“Supa Dupa Fly”记录了Missy Elliott在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "理解“OK Computer”时，应直接听Radiohead如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "“The Fat of the Land”记录了The Prodigy在合成、序列、空间处理与重复结构上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "“The Miseducation of Lauryn Hill”之所以可作为时间线节点，是因为Lauryn Hill的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "Lucinda Williams的“Car Wheels on a Gravel Road”把叙事歌曲、弦乐器编配与地域口音固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "“Aquemini”记录了OutKast在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "Hikaru Utada的“First Love”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "D’Angelo的“Voodoo”把福音式演唱、节奏律动与情感强度固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "“The Marshall Mathers LP”记录了Eminem在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "“Stankonia”之所以可作为时间线节点，是因为OutKast的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "理解“Kid A”时，应直接听Radiohead如何组织吉他音色、节奏段落与专辑/现场能量。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "“O Brother, Where Art Thou? soundtrack”之所以可作为时间线节点，是因为Various Artists的版本为叙事歌曲、弦乐器编配与地域口音留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "Daft Punk的“Discovery”把合成、序列、空间处理与重复结构固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "Jay Chou的“Fantasy”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "The Strokes的“Is This It”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "Wilco的“Yankee Hotel Foxtrot”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "The White Stripes的“Elephant”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "“Funeral”之所以可作为时间线节点，是因为Arcade Fire的版本为吉他音色、节奏段落与专辑/现场能量留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "“The College Dropout”记录了Kanye West在押韵节奏、采样/节拍制作与社会叙事上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "Youssou N’Dour的“Egypt”把地域节奏、语言与现代制作的结合固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "“Back to Black”之所以可作为时间线节点，是因为Amy Winehouse的版本为福音式演唱、节奏律动与情感强度留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "J Dilla的“Donuts”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "Radiohead的“In Rainbows”把吉他音色、节奏段落与专辑/现场能量固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "理解“Fleet Foxes”时，应直接听Fleet Foxes如何组织曲目选择、表演和制作方法。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "“The ArchAndroid”之所以可作为时间线节点，是因为Janelle Monáe的版本为声线分层、律动与录音室编排留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "理解“My Beautiful Dark Twisted Fantasy”时，应直接听Kanye West如何组织押韵节奏、采样/节拍制作与社会叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "理解“21”时，应直接听Adele如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "Beyoncé的“4”把声线分层、律动与录音室编排固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "“good kid, m.A.A.d city”之所以可作为时间线节点，是因为Kendrick Lamar的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "理解“Beyoncé”时，应直接听Beyoncé如何组织声线分层、律动与录音室编排。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "Daft Punk的“Random Access Memories”把合成、序列、空间处理与重复结构固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "“1989”之所以可作为时间线节点，是因为Taylor Swift的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "Jamie xx的“In Colour”把合成、序列、空间处理与重复结构固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "“To Pimp a Butterfly”之所以可作为时间线节点，是因为Kendrick Lamar的版本为押韵节奏、采样/节拍制作与社会叙事留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "BTS的“Wings”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "理解“Lemonade”时，应直接听Beyoncé如何组织声线分层、律动与录音室编排。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "“Blonde”记录了Frank Ocean在声线分层、律动与录音室编排上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "理解“DAMN.”时，应直接听Kendrick Lamar如何组织押韵节奏、采样/节拍制作与社会叙事。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "“Melodrama”记录了Lorde在旋律记忆点、声音制作与大众传播上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "理解“Dirty Computer”时，应直接听Janelle Monáe如何组织声线分层、律动与录音室编排。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "理解“When We All Fall Asleep, Where Do We Go?”时，应直接听Billie Eilish如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "Burna Boy的“African Giant”把地域节奏、语言与现代制作的结合固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "BLACKPINK的“The Album”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "BTS的“Map of the Soul: 7”把曲目选择、表演和制作方法固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "Fiona Apple的“Fetch the Bolt Cutters”把旋律记忆点、声音制作与大众传播固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "理解“folklore”时，应直接听Taylor Swift如何组织旋律记忆点、声音制作与大众传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "理解“Made in Lagos”时，应直接听Wizkid如何组织地域节奏、语言与现代制作的结合。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "Little Simz的“Sometimes I Might Be Introvert”把押韵节奏、采样/节拍制作与社会叙事固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "“Un Verano Sin Ti”记录了Bad Bunny在舞曲节奏、打击乐层次与跨地域传播上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "Beyoncé的“Renaissance”把声线分层、律动与录音室编排固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "理解“Motomami”时，应直接听Rosalía如何组织舞曲节奏、打击乐层次与跨地域传播。该录音保存的不只是曲目名称，也包括当时可用技术、审美和表演习惯的组合。"
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "“SOS”之所以可作为时间线节点，是因为SZA的版本为声线分层、律动与录音室编排留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "Beyoncé的“Cowboy Carter”把叙事歌曲、弦乐器编配与地域口音固定在一个可复制的版本中。后来听众和音乐人可以据此比较翻唱、现场版、采样或制作变化。"
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "“Brat”之所以可作为时间线节点，是因为Charli XCX的版本为旋律记忆点、声音制作与大众传播留下了清晰、可追踪的声音证据；后续风格变化可与这一版本直接对照。"
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "“Tyla”记录了Tyla在地域节奏、语言与现代制作的结合上的具体选择。录音使速度、音色、段落和表演细节可以被反复比较，因此它的意义来自可听见的决定，而不是抽象的“重要性”。"
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
            "description": "[Handel’s Music for the Royal Fireworks public rehearsal]<br>伦敦公开彩排吸引巨大人流并造成交通拥堵，显示十八世纪公共音乐已能形成与现代大型活动相似的城市事件。"
        },
        {
            "start": "1808-12-22",
            "title": "贝多芬维也纳马拉松音乐会",
            "description": "[Beethoven’s Vienna marathon concert]<br>1808年这场寒冷而漫长的音乐会同时首演第五、第六交响曲、第四钢琴协奏曲和《合唱幻想曲》，集中暴露了贝多芬新作的规模与排练困难。"
        },
        {
            "start": "1824-05-07",
            "title": "贝多芬第九首演音乐会",
            "description": "[Beethoven’s Ninth premiere concert]<br>失聪的贝多芬站在舞台上参与指挥但无法听见掌声，演出本身成为艺术家身体、公共崇拜与作品接受史的一部分。"
        },
        {
            "start": "1850-09-11",
            "title": "珍妮·林德在巴纳姆推广下开始美国巡演",
            "description": "[Jenny Lind begins the American tour promoted by P. T. Barnum]<br>巴纳姆以预售、报纸宣传和制造稀缺感把欧洲歌手塑造成全国名人，这次巡演成为现代明星营销与音乐商业化的早期范本。"
        },
        {
            "start": "1871",
            "title": "菲斯克禧年歌手团开始重要巡演",
            "description": "[Fisk Jubilee Singers begin major tours]<br>学生合唱团以编排过的非裔灵歌为学校筹款，并让原本与奴隶制经验相关的曲目进入欧美正式音乐厅。"
        },
        {
            "start": "1876-08-13",
            "title": "首届拜罗伊特音乐节以《指环》开幕",
            "description": "[First Bayreuth Festival opens with the Ring cycle]<br>专门建造的节日剧院、隐藏乐池和连续四夜的《指环》把作曲家控制舞台、建筑与观众注意力的理想变成制度。"
        },
        {
            "start": "1891-05-05",
            "title": "卡内基音乐厅开幕音乐会",
            "description": "[Carnegie Hall opening night]<br>1891年开幕周由柴可夫斯基等人参与指挥，确立纽约拥有可与欧洲首都相比的国际音乐厅。"
        },
        {
            "start": "1912-05-02",
            "title": "詹姆斯·里斯·欧洲克莱夫俱乐部乐团卡内基音乐厅演出",
            "description": "[James Reese Europe’s Clef Club Orchestra at Carnegie Hall]<br>1912年大规模黑人乐团在卡内基演出，把拉格泰姆、交响编制与黑人专业音乐组织带入美国最具声望的舞台之一。"
        },
        {
            "start": "1913-05-29",
            "title": "《春之祭》首演与观众骚动",
            "description": "[The Rite of Spring premiere and audience uproar]<br>观众对尼金斯基舞蹈、斯特拉文斯基节奏和剧场秩序的冲突造成喧闹；后来“暴动”叙事被不断放大，成为现代主义突破的象征。"
        },
        {
            "start": "1924-02-12",
            "title": "“现代音乐实验”音乐会首演《蓝色狂想曲》",
            "description": "[An Experiment in Modern Music premieres Rhapsody in Blue]<br>保罗·怀特曼在纽约艾奥利安音乐厅组织这场“实验”，让格什温的作品在古典听众、爵士乐队与大众媒体之间制造跨界事件。"
        },
        {
            "start": "1938-01-16",
            "title": "本尼·古德曼卡内基音乐厅音乐会",
            "description": "[Benny Goodman Carnegie Hall concert]<br>1938年演出把摇摆爵士带入古典音乐权威场所，现场录音后来又证明爵士音乐会可以作为历史文献与畅销唱片存在。"
        },
        {
            "start": "1939-04-09",
            "title": "玛丽安·安德森在林肯纪念堂演唱",
            "description": "[Marian Anderson sings at the Lincoln Memorial]<br>因种族歧视被拒绝使用宪法大厅后，安德森在林肯纪念堂面向庞大现场与广播听众演唱，使音乐会成为民权象征。"
        },
        {
            "start": "1943-01-23",
            "title": "艾灵顿公爵在卡内基呈现《黑、棕与米色》",
            "description": "[Duke Ellington presents Black, Brown and Beige at Carnegie Hall]<br>艾灵顿以长篇组曲叙述黑人历史，把大乐队从舞会和夜总会语境推进到大型音乐厅的历史叙事。"
        },
        {
            "start": "1954-07-17",
            "title": "首届纽波特爵士音乐节",
            "description": "[First Newport Jazz Festival]<br>纽波特把多位爵士音乐家集中到度假城市的连续节目中，确立了后来全球爵士节常用的赞助、旅游与多舞台模式。"
        },
        {
            "start": "1959-07-11",
            "title": "首届纽波特民谣音乐节",
            "description": "[First Newport Folk Festival]<br>音乐节把传统歌手、民歌搜集者和城市青年创作者置于同一舞台，成为美国民谣复兴内部关于真实性与商业化争论的中心。"
        },
        {
            "start": "1964-02-12",
            "title": "披头士在卡内基音乐厅演出",
            "description": "[The Beatles perform at Carnegie Hall]<br>在“艾德·沙利文秀”后不久的纽约演出证明电视曝光可以立即转化为高声望场馆需求，并加速英国入侵。"
        },
        {
            "start": "1965-07-25",
            "title": "鲍勃·迪伦在纽波特改用电声",
            "description": "[Bob Dylan goes electric at Newport Folk Festival]<br>电吉他和摇滚节奏挑战了民谣复兴对“纯粹”原声表演的期待，争议使创作自由、政治承诺与市场之间的矛盾公开化。"
        },
        {
            "start": "1965-08-15",
            "title": "披头士谢伊体育场演唱会",
            "description": "[The Beatles at Shea Stadium]<br>把棒球场改造成演唱会场地，巨量观众和扩声不足同时显示体育场摇滚的商业潜力与当时技术限制。"
        },
        {
            "start": "1966-06-30",
            "title": "披头士东京武道馆演出开始",
            "description": "[The Beatles begin Budokan concerts in Tokyo]<br>在原本与武道和国家仪式关联的场馆举行摇滚演出，引发保守反对，却也使武道馆日后成为日本流行音乐最具象征性的场地之一。"
        },
        {
            "start": "1967-06-16",
            "title": "蒙特雷国际流行音乐节开幕",
            "description": "[Monterey International Pop Festival opens]<br>高质量制作和非营利组织把摇滚、灵魂、民谣与印度音乐并置；亨德里克斯、贾尼斯·乔普林和奥蒂斯·雷丁借此获得决定性曝光。"
        },
        {
            "start": "1968-12-11",
            "title": "滚石“摇滚马戏团”录制",
            "description": "[The Rolling Stones Rock and Roll Circus filmed]<br>电视特别节目把滚石、The Who、约翰·列侬等置于马戏棚中；因长期搁置到1996年才公开，它也成为六十年代摇滚影像保存史的特殊案例。"
        },
        {
            "start": "1969-12-06",
            "title": "阿尔塔蒙特免费音乐会",
            "description": "[Altamont Free Concert]<br>混乱安保、暴力和观众死亡破坏了“免费音乐节＝和平共同体”的想象，常被视为六十年代反文化神话的阴暗终点。"
        },
        {
            "start": "1969-08-15",
            "title": "伍德斯托克音乐艺术节开幕",
            "description": "[Woodstock Music & Art Fair opens]<br>连续三天的巨量观众、泥泞、交通崩溃与互助场景，经纪录片和唱片转化为“和平与音乐”的世代神话。"
        },
        {
            "start": "1970-08-26",
            "title": "1970怀特岛音乐节开幕",
            "description": "[Isle of Wight Festival 1970 opens]<br>规模失控、围栏冲突与免费文化争议暴露大型摇滚节的经济矛盾；它也保存了亨德里克斯最后阶段的重要影像。"
        },
        {
            "start": "1971-08-01",
            "title": "孟加拉国赈灾音乐会",
            "description": "[Concert for Bangladesh]<br>乔治·哈里森与拉维·香卡把明星阵容、现场专辑和电影收入用于人道援助，建立了后来大型慈善演唱会的组织模板。"
        },
        {
            "start": "1971",
            "title": "平克·弗洛伊德《庞贝现场》拍摄",
            "description": "[Pink Floyd: Live at Pompeii filmed]<br>乐队在无现场观众的古罗马圆形剧场演奏，摄影、回声空间和器材特写把“现场”重新定义为为电影设计的视听作品。"
        },
        {
            "start": "1972-08-20",
            "title": "Wattstax音乐节",
            "description": "[Wattstax festival]<br>Stax艺人与洛杉矶黑人社区在体育场集会，音乐、演说和电影把灵魂乐与黑人自豪、社区政治直接连接。"
        },
        {
            "start": "1973-01-14",
            "title": "猫王“来自夏威夷的问候”卫星演唱会",
            "description": "[Elvis: Aloha from Hawaii satellite concert]<br>卫星转播被包装为全球同步事件，使单场演唱会成为电视技术、国家形象与超级明星品牌的共同展示。"
        },
        {
            "start": "1974-09-22",
            "title": "扎伊尔74音乐节开始",
            "description": "[Zaire 74 music festival begins]<br>与“丛林之战”拳赛相连的音乐节把非洲与非裔美国明星同台，虽延迟传播，却留下跨大西洋黑人音乐认同的重要记录。"
        },
        {
            "start": "1976-06-04",
            "title": "性手枪曼彻斯特演出",
            "description": "[Sex Pistols at Manchester Lesser Free Trade Hall]<br>观众很少，却包括后来组建Joy Division、The Smiths、Buzzcocks等场景的重要人物，成为“小规模但高扩散”文化事件的典型。"
        },
        {
            "start": "1976-11-25",
            "title": "乐队“The Last Waltz”告别演出",
            "description": "[The Band’s The Last Waltz concert]<br>告别演出汇集多代根源音乐家，并由马丁·斯科塞斯拍成电影，把演唱会纪录片提升为精心调度的电影作品。"
        },
        {
            "start": "1978-04-22",
            "title": "金斯敦“一爱和平音乐会”",
            "description": "[One Love Peace Concert in Kingston]<br>鲍勃·马利在政治暴力背景下让对立领导人同台握手，虽然未能结束冲突，却把雷鬼明星的调解角色全球化。"
        },
        {
            "start": "1979-09-19",
            "title": "麦迪逊广场花园“反核”音乐会开始",
            "description": "[No Nukes concerts begin at Madison Square Garden]<br>MUSE组织的连续演出把摇滚明星、能源政策倡议和电影/唱片募资结合，成为美国音乐人参与公共政策运动的范例。"
        },
        {
            "start": "1979",
            "title": "黄色魔术交响乐团世界巡演",
            "description": "[Yellow Magic Orchestra world tour]<br>YMO把日本制造的合成器流行与视觉形象带到欧美舞台，证明电子流行的技术与风格创新不再只从英美输出。"
        },
        {
            "start": "1981-11-24",
            "title": "皇后乐队蒙特利尔摇滚演出开始",
            "description": "[Queen Rock Montreal concerts begin]<br>为高质量35毫米拍摄而设计的两场演出保存了皇后乐队巅峰时期的灯光、编排与观众互动，后来成为修复版演唱会电影。"
        },
        {
            "start": "1982-09-03",
            "title": "US音乐节开幕",
            "description": "[US Festival opens]<br>苹果联合创始人史蒂夫·沃兹尼亚克资助的巨型活动把摇滚、科技乌托邦和按风格分日编排结合，预示后来的企业化超级音乐节。"
        },
        {
            "start": "1983-03-25",
            "title": "电视音乐会“摩城25周年”录制",
            "description": "[Motown 25 television concert recorded]<br>迈克尔·杰克逊首次在电视上表演标志性的月球漫步，旧厂牌纪念节目因此转化为全球流行表演史的转折点。"
        },
        {
            "start": "1985-07-13",
            "title": "拯救生命慈善演唱会",
            "description": "[Live Aid]<br>伦敦与费城双场地、卫星电视和跨国明星阵容把慈善摇滚推向全球同步媒介事件，也暴露了援助叙事中过度简化非洲的倾向。"
        },
        {
            "start": "1985",
            "title": "努斯拉特·法帖·阿里·汗进入大型国际音乐节听众",
            "description": "[Nusrat Fateh Ali Khan reaches major international festival audiences]<br>WOMAD等舞台和彼得·加布里埃尔的Real World网络使长篇卡瓦利即兴进入非南亚听众，但没有完全压缩为西式流行歌曲。"
        },
        {
            "start": "1986-04-05",
            "title": "让-米歇尔·雅尔“休斯敦约会”音乐会",
            "description": "[Jean-Michel Jarre’s Rendez-vous Houston]<br>城市天际线、激光、投影和电子音乐被编排为同一巨型舞台，确立了电子音乐家作为公共空间多媒体导演的形象。"
        },
        {
            "start": "1988-06-11",
            "title": "纳尔逊·曼德拉70岁生日致敬音乐会",
            "description": "[Nelson Mandela 70th Birthday Tribute]<br>温布利电视转播以流行明星阵容把反种族隔离运动带入全球娱乐频道，帮助将曼德拉从政治犯转变为大众熟知的国际象征。"
        },
        {
            "start": "1990-07-21",
            "title": "罗杰·沃特斯在柏林演出《迷墙》",
            "description": "[Roger Waters stages The Wall in Berlin]<br>柏林墙倒塌后在原“无人区”附近上演，把专辑中的个人隔离隐喻重新解释为冷战分裂结束的公共纪念。"
        },
        {
            "start": "1992",
            "title": "首届帕瓦罗蒂与朋友慈善音乐会",
            "description": "[First Pavarotti & Friends benefit concert]<br>歌剧男高音与流行明星在同一电视慈善节目中合作，使“古典跨界”成为九十年代全球唱片和电视市场的稳定格式。"
        },
        {
            "start": "1992-04-20",
            "title": "弗雷迪·默丘里致敬演唱会",
            "description": "[Freddie Mercury Tribute Concert]<br>皇后成员与多位歌手共同演唱其曲目，并将演出与艾滋病意识和募资连接，使摇滚纪念仪式具有明确公共卫生议题。"
        },
        {
            "start": "1993-11-18",
            "title": "涅槃乐队纽约MTV不插电录制",
            "description": "[Nirvana MTV Unplugged in New York]<br>乐队避开多数热门单曲，使用大提琴、翻唱和低声量编排；柯本去世后发行的录音重塑了公众对“grunge现场”的理解。"
        },
        {
            "start": "1994-08-12",
            "title": "伍德斯托克94开幕",
            "description": "[Woodstock ’94 opens]<br>官方纪念1969年，却被泥泞、电视转播和企业赞助重新定义，显示反文化记忆已经进入可商品化的怀旧产业。"
        },
        {
            "start": "1996-06-15",
            "title": "首届西藏自由音乐会",
            "description": "[First Tibetan Freedom Concert]<br>Beastie Boys相关组织把另类摇滚和青年观众连接到西藏人权议题，建立了九十年代巡回倡议音乐节的模式。"
        },
        {
            "start": "1996-08-10",
            "title": "绿洲乐队内布沃思演唱会开始",
            "description": "[Oasis begins Knebworth concerts]<br>两晚超大型演出和远超容量的购票申请，把Britpop从俱乐部/排行榜现象推到英国国家级大众事件。"
        },
        {
            "start": "1998-07-01",
            "title": "古巴乐社卡内基音乐厅演出",
            "description": "[Buena Vista Social Club performs at Carnegie Hall]<br>年长古巴音乐家在纽约名厅演出，随后纪录片和现场专辑把革命前舞厅曲目重新包装为全球“世界音乐”经典。"
        },
        {
            "start": "1999-04-21",
            "title": "金属乐队与旧金山交响乐团录制《S&M》",
            "description": "[Metallica records S&M concerts with the San Francisco Symphony]<br>金属riff与完整交响编曲同台，不是简单加弦乐背景；录音展示重金属结构可以与管弦乐动机发展互相支撑。"
        },
        {
            "start": "1999-07-22",
            "title": "伍德斯托克99开幕",
            "description": "[Woodstock ’99 opens]<br>高温、昂贵商品、设施不足、暴力和火灾使“伍德斯托克”品牌与原有和平神话彻底分离，成为大型活动治理失败案例。"
        },
        {
            "start": "2001-10-20",
            "title": "纽约市慈善音乐会",
            "description": "[The Concert for New York City]<br>九一一后在麦迪逊广场花园举行，消防员、警察、受灾家庭与明星同处一场，使摇滚演出成为城市哀悼和团结仪式。"
        },
        {
            "start": "2003-07-30",
            "title": "多伦多SARS赈灾大型音乐会",
            "description": "[Molson Canadian Rocks for Toronto SARS benefit]<br>疫情冲击旅游和城市形象后，超大型户外演出以滚石等阵容吸引国际注意，音乐会成为公共卫生危机后的经济恢复工具。"
        },
        {
            "start": "2005-07-02",
            "title": "Live 8系列演唱会",
            "description": "[Live 8 concerts]<br>多个国家同步演出不以募款为主，而是试图在G8峰会前推动债务减免和援助议题，显示慈善演唱会向政策游说转型。"
        },
        {
            "start": "2006-04-29",
            "title": "蠢朋克科切拉金字塔演出",
            "description": "[Daft Punk’s Coachella pyramid performance]<br>发光金字塔、同步视觉和重新编排的现场混音把DJ表演塑造成完整舞台叙事，成为之后EDM大型巡演的设计参照。"
        },
        {
            "start": "2007-12-10",
            "title": "齐柏林飞艇O2重组演唱会",
            "description": "[Led Zeppelin reunion at the O2 Arena]<br>为纪念艾哈迈德·厄特根举行的一次性重组，以严格排练和低调舞台证明传奇乐队复出可以避免纯怀旧式复制。"
        },
        {
            "start": "2011-06-26",
            "title": "碧昂丝压轴格拉斯顿伯里",
            "description": "[Beyoncé headlines Glastonbury]<br>以完整舞者、乐队和连续热门曲编排占据传统摇滚节主舞台，强化了女性R&B/流行艺人作为大型音乐节压轴的可行性。"
        },
        {
            "start": "2012-12-12",
            "title": "桑迪飓风赈灾“12-12-12”音乐会",
            "description": "[12-12-12: The Concert for Sandy Relief]<br>电视、网络与麦迪逊广场花园演出同步募资，把灾后援助、明星重组和全球直播整合为快速响应模式。"
        },
        {
            "start": "2018-04-14",
            "title": "碧昂丝科切拉“Homecoming”演出",
            "description": "[Beyoncé’s Coachella “Homecoming” performance]<br>作为科切拉首位黑人女性压轴，她以HBCU军乐队、舞蹈和黑人学院文化重构流行巨星舞台，后来通过电影与现场专辑继续传播。"
        },
        {
            "start": "2019-06-01",
            "title": "BTS温布利体育场演出开始",
            "description": "[BTS begins Wembley Stadium concerts]<br>韩国团体在英国国家级体育场连续售罄，证明非英语流行组合可借助全球粉丝组织跨越传统广播与唱片市场门槛。"
        },
        {
            "start": "2020-04-18",
            "title": "“同一个世界：团结在家”广播音乐会",
            "description": "[One World: Together at Home broadcast concert]<br>新冠停演期间，艺人在家中远程演出并由电视和平台联合播出，暴露网络演出的亲密感、技术不平等与无现场观众的新规范。"
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK压轴科切拉",
            "description": "[BLACKPINK headlines Coachella]<br>作为科切拉首个亚洲压轴团体，BLACKPINK把K-pop编舞、现场乐队和多语种全球粉丝文化带到美国主流音乐节最高时段。"
        },
        {
            "start": "2023-03-17",
            "title": "泰勒·斯威夫特“时代巡演”开幕",
            "description": "[Taylor Swift’s Eras Tour opens]<br>巡演按职业阶段重新编排庞大曲库，并通过体育场经济、粉丝旅行和演唱会电影放大，成为流媒体时代目录价值的现实展示。"
        },
        {
            "start": "2023-09-29",
            "title": "U2拉斯维加斯Sphere开幕演出",
            "description": "[U2 opens the Sphere in Las Vegas]<br>超高分辨率环绕屏幕、定向音响和场馆建筑共同决定观看方式，演出把“舞台背景”升级为包围观众的主要叙事媒介。"
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
