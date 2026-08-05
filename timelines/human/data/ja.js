var title = "人類史タイムライン";

// Curated global human-history timeline.
// Every description is a concise sentence explaining what happened.
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering is used: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// 歴史時代と世界的背景
var tl_eras = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "紀元前1万年以前の人類深史（圧縮表示）",
            "description": "SIMILE は天文学的年号 -9999 より前を解析できないため、ホモ・サピエンスの出現、世界への拡散、象徴文化、狩猟採集生活をこの地点に集約している。"
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "新石器時代の転換",
            "description": "農耕と牧畜によって定住村落、人口増加、分業が広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "青銅器時代",
            "description": "青銅製の道具と武器が普及し、交易網と宮殿国家が発達した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "最初の都市と領域国家",
            "description": "都市、徴税、文字、常設の統治機構が生まれ、支配が広域化した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "古典文明と枢軸時代",
            "description": "ユーラシア各地で帝国、宗教、哲学、法の長期的伝統が形成された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "後古典期の地域秩序",
            "description": "ローマ分裂後、ビザンツ、イスラム帝国、南アジアと東アジアの王朝が新たな地域秩序を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "相互接続された中世世界",
            "description": "交易路、宗教ネットワーク、帝国の拡張がユーラシア、アフリカ、インド洋を結びつけた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "近世の世界的拡張",
            "description": "遠洋航海、植民地拡張、海洋交易によって諸大陸が継続的に結ばれた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "革命と工業化の時代",
            "description": "政治革命と機械生産が国家制度、労働、都市生活を再編した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "帝国主義と世界的移民の時代",
            "description": "工業国が植民地支配を拡大し、蒸気交通が大規模な移民を加速させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "世界大戦と大衆政治",
            "description": "二度の世界大戦、革命、民族主義が社会全体を政治と戦争に動員した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "冷戦・脱植民地化・開発",
            "description": "米ソ対立と植民地帝国の解体が同時に進み、新興国は国家主導の開発を進めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "冷戦後の移行期",
            "description": "ソ連崩壊後、市場改革、地域紛争、米国中心の国際秩序が広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "グローバル化・テロ・デジタル社会",
            "description": "国際供給網、インターネット、携帯通信が拡大し、対テロ政策が安全保障を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "パンデミック・地政学的分断・AI加速",
            "description": "新型コロナが医療と供給網を揺さぶり、戦争、技術競争、生成AIが国際秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        }
    ]
};

// 人類の定住と初期文明
var tl_origins = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "西南アジアで農耕が始まる",
            "description": "西南アジアで農耕が始まるにより食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-9599",
            "title": "エリコの恒常的定住",
            "description": "エリコの恒常的定住で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-8999",
            "title": "ヒツジとヤギの家畜化",
            "description": "ヒツジとヤギの家畜化によって肉、乳、皮革、運搬力を継続的に利用できるようになった。"
        },
        {
            "start": "-8499",
            "title": "チャヨニュと肥沃な三日月地帯の初期農耕",
            "description": "チャヨニュと肥沃な三日月地帯の初期農耕により食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-7499",
            "title": "チャタル・ヒュユクの大規模集落",
            "description": "チャタル・ヒュユクの大規模集落で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-6999",
            "title": "長江流域で稲作が拡大",
            "description": "長江流域で稲作が拡大により食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-6999",
            "title": "メヘルガルの農耕共同体",
            "description": "メヘルガルの農耕共同体により食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-6499",
            "title": "土器と村落ネットワークの拡大",
            "description": "土器と村落ネットワークの拡大によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-5999",
            "title": "メソポタミアの灌漑共同体",
            "description": "メソポタミアの灌漑共同体で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-5499",
            "title": "農耕がヨーロッパへ拡大",
            "description": "農耕がヨーロッパへ拡大により食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-4999",
            "title": "ユーラシアの初期冶金",
            "description": "ユーラシアの初期冶金は金属製の道具と武器を広め、専門手工業を発達させた。"
        },
        {
            "start": "-4499",
            "title": "草原地帯で牧畜が拡大",
            "description": "草原地帯で牧畜が拡大によって肉、乳、皮革、運搬力を継続的に利用できるようになった。"
        },
        {
            "start": "-3999",
            "title": "犂耕と大規模村落",
            "description": "犂耕と大規模村落により食料生産が安定し、定住集落と人口が拡大した。"
        },
        {
            "start": "-3799",
            "title": "ウルクの都市化",
            "description": "ウルクの都市化で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-3499",
            "title": "車輪と車両輸送",
            "description": "車輪と車両輸送は陸上輸送力を高め、人と物の移動距離を伸ばした。"
        },
        {
            "start": "-3399",
            "title": "原楔形文字による会計",
            "description": "原楔形文字による会計は穀物、労役、取引を保存可能な記録に変えた。"
        },
        {
            "start": "-3299",
            "title": "インダス都市伝統の始まり",
            "description": "インダス都市伝統の始まりで人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-3199",
            "title": "エジプト象形文字",
            "description": "エジプト象形文字は穀物、労役、取引を保存可能な記録に変えた。"
        },
        {
            "start": "-3099",
            "title": "古代エジプトの政治統一",
            "description": "古代エジプトの政治統一は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-2999",
            "title": "メソポタミアとインダスを結ぶ長距離交易",
            "description": "メソポタミアとインダスを結ぶ長距離交易によって原料、製品、思想が離れた地域の間を移動した。"
        },
        {
            "start": "-2899",
            "title": "シュメール初期王朝都市国家",
            "description": "シュメール初期王朝都市国家は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-2699",
            "title": "エジプト古王国とピラミッド国家",
            "description": "エジプト古王国とピラミッド国家は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-2599",
            "title": "成熟期ハラッパー都市",
            "description": "成熟期ハラッパー都市で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-2499",
            "title": "オーストロネシア人の拡散開始",
            "description": "オーストロネシア人の拡散開始によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-2399",
            "title": "アッカドの帝国的拡張",
            "description": "アッカドの帝国的拡張は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-2199",
            "title": "4.2千年イベントと国家危機",
            "description": "4.2千年イベントと国家危機brought prolonged drought and food pressure that weakened several early states."
        },
        {
            "start": "-2099",
            "title": "ウル第三王朝",
            "description": "ウル第三王朝は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-1999",
            "title": "ミノア宮殿文明",
            "description": "ミノア宮殿文明は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-1899",
            "title": "古バビロニアの都市秩序",
            "description": "古バビロニアの都市秩序で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-1799",
            "title": "二里頭文化と中国初期青銅国家",
            "description": "二里頭文化と中国初期青銅国家は金属製の道具と武器を広め、専門手工業を発達させた。"
        },
        {
            "start": "-1749",
            "title": "ハンムラビのバビロン統治",
            "description": "ハンムラビのバビロン統治は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-1599",
            "title": "殷王朝の成立",
            "description": "殷王朝の成立は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-1599",
            "title": "ミケーネ宮殿社会",
            "description": "ミケーネ宮殿社会は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-1549",
            "title": "エジプト新王国",
            "description": "エジプト新王国は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-1499",
            "title": "南アジアでヴェーダ文化が発展",
            "description": "南アジアでヴェーダ文化が発展によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-1399",
            "title": "ヒッタイト帝国の強盛",
            "description": "ヒッタイト帝国の強盛は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-1299",
            "title": "オルメカ文明の成立",
            "description": "オルメカ文明の成立によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-1249",
            "title": "ラピタ文化の太平洋拡散",
            "description": "ラピタ文化の太平洋拡散によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-1199",
            "title": "後期青銅器時代の崩壊",
            "description": "後期青銅器時代の崩壊brought down palace states, long-distance trade and urban networks, forcing many regions to reorganize."
        },
        {
            "start": "-1099",
            "title": "フェニキア海上ネットワーク",
            "description": "フェニキア海上ネットワークによって原料、製品、思想が離れた地域の間を移動した。"
        },
        {
            "start": "-1045",
            "title": "周による殷征服",
            "description": "周による殷征服は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0999",
            "title": "バントゥー語族人口の拡大",
            "description": "バントゥー語族人口の拡大によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-0899",
            "title": "西アフリカのノク文化",
            "description": "西アフリカのノク文化は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0799",
            "title": "ギリシアのポリス形成",
            "description": "ギリシアのポリス形成は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0799",
            "title": "アンデスのチャビン文化圏",
            "description": "アンデスのチャビン文化圏は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0769",
            "title": "東周時代の開始",
            "description": "東周時代の開始は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0752",
            "title": "ローマ建国の伝承年",
            "description": "ローマ建国の伝承年は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0699",
            "title": "鉄器技術の広範な普及",
            "description": "鉄器技術の広範な普及は金属製の道具と武器を広め、専門手工業を発達させた。"
        },
        {
            "start": "-0699",
            "title": "スキタイ草原ネットワーク",
            "description": "スキタイ草原ネットワークは資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0599",
            "title": "ガンジス中流域の都市化",
            "description": "ガンジス中流域の都市化で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-0549",
            "title": "アケメネス朝ペルシア帝国の成立",
            "description": "アケメネス朝ペルシア帝国の成立は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政の開始",
            "description": "ローマ共和政の開始は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0499",
            "title": "サポテカのモンテ・アルバン発展",
            "description": "サポテカのモンテ・アルバン発展によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "-0499",
            "title": "サハラ横断交流の拡大",
            "description": "サハラ横断交流の拡大によって原料、製品、思想が離れた地域の間を移動した。"
        },
        {
            "start": "-0402",
            "title": "中国の戦国時代開始",
            "description": "中国の戦国時代開始は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "-0321",
            "title": "マウリヤ朝の成立",
            "description": "マウリヤ朝の成立は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-0220",
            "title": "秦による中国統一",
            "description": "秦による中国統一は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "-0205",
            "title": "漢王朝の成立",
            "description": "漢王朝の成立は人口、交易、政治権力を集める新しい都市中心を生み出した。"
        },
        {
            "start": "-0199",
            "title": "テオティワカンが大都市へ成長",
            "description": "テオティワカンが大都市へ成長で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "-0099",
            "title": "アンデスでモチェ文化が発展",
            "description": "アンデスでモチェ文化が発展によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "0100",
            "title": "アクスム王国の台頭",
            "description": "アクスム王国の台頭によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "0200",
            "title": "古典期マヤ都市文明の繁栄",
            "description": "古典期マヤ都市文明の繁栄で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "0220",
            "title": "漢王朝の終焉と分裂時代",
            "description": "漢王朝の終焉と分裂時代は資源利用、集落形成、社会生活の維持方法を変えた。"
        },
        {
            "start": "0320",
            "title": "グプタ朝の台頭",
            "description": "グプタ朝の台頭は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "0400",
            "title": "ポリネシア人の太平洋定住拡大",
            "description": "ポリネシア人の太平洋定住拡大で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "0500",
            "title": "西アフリカのガーナ王国台頭",
            "description": "西アフリカのガーナ王国台頭は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        },
        {
            "start": "0600",
            "title": "ミシシッピ土塁社会の発展",
            "description": "ミシシッピ土塁社会の発展によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "0700",
            "title": "スワヒリ海岸交易都市の拡大",
            "description": "スワヒリ海岸交易都市の拡大で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "0800",
            "title": "ヴァイキングの定住と北大西洋拡張",
            "description": "ヴァイキングの定住と北大西洋拡張で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "0900",
            "title": "グレート・ジンバブエ地域中心の発展",
            "description": "グレート・ジンバブエ地域中心の発展によって人口、集落、制度がより広い地域へ広がった。"
        },
        {
            "start": "1000",
            "title": "北欧人の北米定住",
            "description": "北欧人の北米定住で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "1050",
            "title": "カホキアが大都市中心へ発展",
            "description": "カホキアが大都市中心へ発展で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "1200",
            "title": "マオリのニュージーランド定住",
            "description": "マオリのニュージーランド定住で人口が集中し、住居、貯蔵、公共組織が複雑化した。"
        },
        {
            "start": "1325",
            "title": "テノチティトラン建設",
            "description": "テノチティトラン建設は人口、交易、政治権力を集める新しい都市中心を生み出した。"
        },
        {
            "start": "1438",
            "title": "インカ帝国の拡張開始",
            "description": "インカ帝国の拡張開始は複数の地方勢力を同じ統治機構に組み込み、徴税と軍事動員を再編した。"
        }
    ]
};

// 国家・帝国・政治秩序
var tl_states = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2333",
            "end": "-2153",
            "title": "アッカド帝国",
            "description": "アッカド帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "エジプト古王国",
            "description": "エジプト古王国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "エジプト中王国",
            "description": "エジプト中王国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "エジプト新王国",
            "description": "エジプト新王国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "殷王朝",
            "description": "殷王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "周王朝",
            "description": "周王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "新アッシリア帝国",
            "description": "新アッシリア帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "新バビロニア帝国",
            "description": "新バビロニア帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "アケメネス朝ペルシア帝国",
            "description": "アケメネス朝ペルシア帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "ローマ共和政",
            "description": "ローマ共和政は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "アレクサンドロス大王の帝国",
            "description": "アレクサンドロス大王の帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "プトレマイオス朝エジプト",
            "description": "プトレマイオス朝エジプトは王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "セレウコス朝",
            "description": "セレウコス朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "マウリヤ朝",
            "description": "マウリヤ朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "秦王朝",
            "description": "秦王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "漢王朝",
            "description": "漢王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "パルティア帝国",
            "description": "パルティア帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "統一ローマ帝国",
            "description": "統一ローマ帝国は分裂していた政治単位を一つの国家枠組みに統合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "サーサーン朝",
            "description": "サーサーン朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "最盛期のアクスム王国",
            "description": "最盛期のアクスム王国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "グプタ朝",
            "description": "グプタ朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "東ローマ／ビザンツ帝国",
            "description": "東ローマ／ビザンツ帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "フランク王国とカロリング帝国",
            "description": "フランク王国とカロリング帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "隋による中国再統一",
            "description": "隋による中国再統一は分裂していた政治単位を一つの国家枠組みに統合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "唐王朝",
            "description": "唐王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "正統カリフとウマイヤ朝",
            "description": "正統カリフとウマイヤ朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "バグダードのアッバース朝",
            "description": "バグダードのアッバース朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "日本の平安時代",
            "description": "日本の平安時代は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "神聖ローマ帝国の伝統",
            "description": "神聖ローマ帝国の伝統は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "キエフ・ルーシ国家",
            "description": "キエフ・ルーシ国家は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国時代",
            "description": "五代十国時代は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "宋王朝",
            "description": "宋王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "ファーティマ朝",
            "description": "ファーティマ朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "ガーナ帝国の最盛期",
            "description": "ガーナ帝国の最盛期は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "セルジューク帝国秩序",
            "description": "セルジューク帝国秩序は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "イングランドでノルマン支配成立",
            "description": "イングランドでノルマン支配成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "鎌倉幕府",
            "description": "鎌倉幕府は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "モンゴル帝国と後継ハン国",
            "description": "モンゴル帝国と後継ハン国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "マリ帝国",
            "description": "マリ帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "元王朝",
            "description": "元王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "オスマン国家と帝国",
            "description": "オスマン国家と帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "ヴィジャヤナガル帝国",
            "description": "ヴィジャヤナガル帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "西欧の百年戦争時代",
            "description": "西欧の百年戦争時代は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "明王朝",
            "description": "明王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "朝鮮王朝",
            "description": "朝鮮王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "ソンガイ帝国",
            "description": "ソンガイ帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "オスマン帝国によるコンスタンティノープル攻略",
            "description": "オスマン帝国によるコンスタンティノープル攻略は都市または地域を武力で奪取し、統治者を変えた。"
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "ソンガイ帝国の拡張",
            "description": "ソンガイ帝国の拡張は軍事征服と行政統合によって支配領域を広げた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "イングランドのテューダー朝",
            "description": "イングランドのテューダー朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "カスティーリャとアラゴンの統合確立",
            "description": "カスティーリャとアラゴンの統合確立は国家権力の所在を変え、新たな政治体制を作った。"
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "サファヴィー朝イラン",
            "description": "サファヴィー朝イランは王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "ムガル帝国",
            "description": "ムガル帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "ロシア・ツァーリ国",
            "description": "ロシア・ツァーリ国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "徳川幕府",
            "description": "徳川幕府は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "ステュアート時代と英国立憲王政",
            "description": "ステュアート時代と英国立憲王政は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "清王朝",
            "description": "清王朝は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "ピョートル大帝期のロシア",
            "description": "ピョートル大帝期のロシアは王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "グレートブリテン王国成立",
            "description": "グレートブリテン王国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1776",
            "title": "アメリカ合衆国独立宣言",
            "description": "アメリカ合衆国独立宣言は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命政府",
            "description": "フランス革命政府は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "ナポレオン帝国",
            "description": "ナポレオン帝国は王権、官僚、軍隊、地方統治を通じて領域を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "ハイチ独立",
            "description": "ハイチ独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "ラテンアメリカ独立時代",
            "description": "ラテンアメリカ独立時代は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "ウィーン会議体制",
            "description": "ウィーン会議体制は国家権力の所在を変え、新たな政治体制を作った。"
        },
        {
            "start": "1822",
            "title": "ブラジル独立",
            "description": "ブラジル独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1861",
            "title": "イタリア王国成立",
            "description": "イタリア王国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1867",
            "title": "カナダ連邦成立",
            "description": "カナダ連邦成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1868",
            "title": "明治維新",
            "description": "明治維新は幕府支配を終わらせ、日本で中央集権化、工業化、制度改革を開始した。"
        },
        {
            "start": "1871",
            "title": "ドイツ帝国成立",
            "description": "ドイツ帝国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1885",
            "title": "コンゴ自由国成立",
            "description": "コンゴ自由国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1901",
            "title": "オーストラリア連邦成立",
            "description": "オーストラリア連邦成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命で帝政終焉",
            "description": "辛亥革命で帝政終焉は既存の国家構造を終わらせ、領土と権力を後継主体へ移した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "ロシア臨時政府とボリシェヴィキ政権掌握",
            "description": "ロシア臨時政府とボリシェヴィキ政権掌握は国家権力の所在を変え、新たな政治体制を作った。"
        },
        {
            "start": "1918",
            "title": "ドイツ・オーストリア＝ハンガリー・オスマン・ロシア帝国の崩壊",
            "description": "ドイツ・オーストリア＝ハンガリー・オスマン・ロシア帝国の崩壊は既存の国家構造を終わらせ、領土と権力を後継主体へ移した。"
        },
        {
            "start": "1922",
            "title": "ソビエト連邦成立",
            "description": "ソビエト連邦成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1923",
            "title": "トルコ共和国成立",
            "description": "トルコ共和国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1932",
            "title": "サウジアラビア王国成立",
            "description": "サウジアラビア王国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1947",
            "title": "インドとパキスタン独立",
            "description": "インドとパキスタン独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1948",
            "title": "イスラエル国成立",
            "description": "イスラエル国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1949",
            "title": "中華人民共和国成立",
            "description": "中華人民共和国成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1957",
            "title": "ガーナ独立",
            "description": "ガーナ独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1960",
            "title": "アフリカの年",
            "description": "アフリカの年は国家権力の所在を変え、新たな政治体制を作った。"
        },
        {
            "start": "1962",
            "title": "アルジェリア独立",
            "description": "アルジェリア独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構成立",
            "description": "アフリカ統一機構成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立",
            "description": "バングラデシュ独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        },
        {
            "start": "1990",
            "title": "ドイツ再統一",
            "description": "ドイツ再統一は分裂していた政治単位を一つの国家枠組みに統合した。"
        },
        {
            "start": "1991",
            "title": "ソビエト連邦解体",
            "description": "ソビエト連邦解体は既存の国家構造を終わらせ、領土と権力を後継主体へ移した。"
        },
        {
            "start": "1993",
            "title": "チェコスロヴァキアの平和的分離",
            "description": "チェコスロヴァキアの平和的分離は既存の国家構造を終わらせ、領土と権力を後継主体へ移した。"
        },
        {
            "start": "1997",
            "title": "香港返還",
            "description": "香港返還で主権移管が完了し、その地域は中国の統治下に入った。"
        },
        {
            "start": "1999",
            "title": "マカオ返還",
            "description": "マカオ返還で主権移管が完了し、その地域は中国の統治下に入った。"
        },
        {
            "start": "2002",
            "title": "アフリカ連合成立",
            "description": "アフリカ連合成立によって常設の政治機関を持つ国家または地域組織が作られた。"
        },
        {
            "start": "2011",
            "title": "南スーダン独立",
            "description": "南スーダン独立は植民地支配または外部支配を終わらせ、新しい主権国家を成立させた。"
        }
    ]
};

// 宗教・文化・社会
var tl_culture = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2599",
            "title": "ピラミッド複合体と王権葬祭文化",
            "description": "ピラミッド複合体と王権葬祭文化は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "-1799",
            "title": "古バビロニアの書記学校",
            "description": "古バビロニアの書記学校は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "-1499",
            "title": "南アジアでヴェーダ賛歌が伝承",
            "description": "南アジアでヴェーダ賛歌が伝承は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "-1199",
            "title": "殷代中国の甲骨文字",
            "description": "殷代中国の甲骨文字は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "-0999",
            "title": "ヘブライ宗教伝統の形成",
            "description": "ヘブライ宗教伝統の形成は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "-0799",
            "title": "ホメロス叙事詩の文字化",
            "description": "ホメロス叙事詩の文字化は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "-0699",
            "title": "アルファベット文字が地中海世界に普及",
            "description": "アルファベット文字が地中海世界に普及は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "-0599",
            "title": "ウパニシャッド思想の発展",
            "description": "ウパニシャッド思想の発展によって関連する思想、慣行、通信網がより多くの地域と人々に広がった。"
        },
        {
            "start": "-0549",
            "title": "マハーヴィーラとジャイナ教伝統",
            "description": "マハーヴィーラとジャイナ教伝統は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "-0529",
            "title": "仏陀の教えを中心に仏教共同体形成",
            "description": "仏陀の教えを中心に仏教共同体形成は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "-0499",
            "title": "孔子の教えと中国古典倫理伝統",
            "description": "孔子の教えと中国古典倫理伝統は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "-0449",
            "title": "アテネでギリシア演劇が繁栄",
            "description": "アテネでギリシア演劇が繁栄は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "-0399",
            "title": "中国古典文献の編纂",
            "description": "中国古典文献の編纂は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "-0299",
            "title": "ヘレニズム文化の融合",
            "description": "ヘレニズム文化の融合は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "-0249",
            "title": "アショーカ王期の仏教布教",
            "description": "アショーカ王期の仏教布教は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "-0199",
            "title": "ラビ的伝統と第二神殿期ユダヤ教の発展",
            "description": "ラビ的伝統と第二神殿期ユダヤ教の発展は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0030",
            "title": "初期キリスト教運動",
            "description": "初期キリスト教運動は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0105",
            "title": "蔡倫の上奏に結び付く製紙法",
            "description": "蔡倫の上奏に結び付く製紙法は文章複製の費用を下げ、知識の読者を広げた。"
        },
        {
            "start": "0200",
            "title": "大乗仏教がアジアに拡大",
            "description": "大乗仏教がアジアに拡大は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0313",
            "title": "ミラノ勅令でキリスト教公認",
            "description": "ミラノ勅令でキリスト教公認は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0325",
            "title": "第1ニカイア公会議",
            "description": "第1ニカイア公会議は宗教権威、教義、国家と信仰の関係を再定義した。"
        },
        {
            "start": "0380",
            "title": "キリスト教がローマ帝国国教となる",
            "description": "キリスト教がローマ帝国国教となるは共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0400",
            "title": "グプタ朝下でサンスクリット古典文化繁栄",
            "description": "グプタ朝下でサンスクリット古典文化繁栄は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "0529",
            "title": "ベネディクト会修道制の始まり",
            "description": "ベネディクト会修道制の始まりは共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0610",
            "title": "イスラム伝統におけるクルアーン啓示開始",
            "description": "イスラム伝統におけるクルアーン啓示開始は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "0622",
            "title": "ヒジュラとメディナのムスリム共同体形成",
            "description": "ヒジュラとメディナのムスリム共同体形成によって関連する思想、慣行、通信網がより多くの地域と人々に広がった。"
        },
        {
            "start": "0700",
            "title": "仏教が東アジア・東南アジアに定着",
            "description": "仏教が東アジア・東南アジアに定着は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "0762",
            "title": "アッバース朝首都バグダード建設",
            "description": "アッバース朝首都バグダード建設は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "0800",
            "title": "カロリング朝教育改革",
            "description": "カロリング朝教育改革は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "0850",
            "title": "古典アラビア語翻訳運動",
            "description": "古典アラビア語翻訳運動は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "0868",
            "title": "中国で『金剛経』印刷",
            "description": "中国で『金剛経』印刷は文章複製の費用を下げ、知識の読者を広げた。"
        },
        {
            "start": "0960",
            "title": "東アジアで活字と商業出版が発展",
            "description": "東アジアで活字と商業出版が発展は文章複製の費用を下げ、知識の読者を広げた。"
        },
        {
            "start": "0988",
            "title": "キエフ・ルーシのキリスト教化",
            "description": "キエフ・ルーシのキリスト教化は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "1054",
            "title": "東西教会の分裂",
            "description": "東西教会の分裂は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "1088",
            "title": "ボローニャ大学の伝統開始",
            "description": "ボローニャ大学の伝統開始は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "1096",
            "title": "十字軍運動開始",
            "description": "十字軍運動開始は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1150",
            "title": "ヨーロッパの大学ネットワーク拡大",
            "description": "ヨーロッパの大学ネットワーク拡大は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "1200",
            "title": "朱子学が東アジアで影響拡大",
            "description": "朱子学が東アジアで影響拡大は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1250",
            "title": "スコラ学文化の成熟",
            "description": "スコラ学文化の成熟は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1300",
            "title": "俗語文学文化の拡大",
            "description": "俗語文学文化の拡大は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1350",
            "title": "イタリア・ルネサンス人文主義の拡大",
            "description": "イタリア・ルネサンス人文主義の拡大は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1450",
            "title": "ヨーロッパのグーテンベルク式活版印刷",
            "description": "ヨーロッパのグーテンベルク式活版印刷は文章複製の費用を下げ、知識の読者を広げた。"
        },
        {
            "start": "1517",
            "title": "宗教改革開始",
            "description": "宗教改革開始weakened established church authority and reorganized relations among rulers, churches and believers."
        },
        {
            "start": "1534",
            "title": "イングランド宗教改革と国王至上権",
            "description": "イングランド宗教改革と国王至上権weakened established church authority and reorganized relations among rulers, churches and believers."
        },
        {
            "start": "1540",
            "title": "イエズス会認可",
            "description": "イエズス会認可は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "トリエント公会議",
            "description": "トリエント公会議は宗教権威、教義、国家と信仰の関係を再定義した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "欽定訳聖書刊行",
            "description": "欽定訳聖書刊行は宗教、歴史、知識を複写可能な文章として定着させた。"
        },
        {
            "start": "1637",
            "title": "徳川政権のキリスト教・海外交流制限",
            "description": "徳川政権のキリスト教・海外交流制限は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "1648",
            "title": "三十年戦争後の宗派秩序",
            "description": "三十年戦争後の宗派秩序は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1685",
            "title": "ナントの勅令廃止",
            "description": "ナントの勅令廃止は宗教権威、教義、国家と信仰の関係を再定義した。"
        },
        {
            "start": "1715",
            "title": "ヨーロッパ啓蒙主義の公共圏拡大",
            "description": "ヨーロッパ啓蒙主義の公共圏拡大によって関連する思想、慣行、通信網がより多くの地域と人々に広がった。"
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "『百科全書』刊行",
            "description": "『百科全書』刊行は宗教、歴史、知識を複写可能な文章として定着させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "太平洋の宣教と植民地文化接触拡大",
            "description": "太平洋の宣教と植民地文化接触拡大は共通の儀礼、聖典、社会関係を持つ宗教共同体を形成または拡大した。"
        },
        {
            "start": "1800",
            "title": "ロマン主義がヨーロッパ文化を再編",
            "description": "ロマン主義がヨーロッパ文化を再編は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1830",
            "title": "大衆新聞の普及",
            "description": "大衆新聞の普及によって関連する思想、慣行、通信網がより多くの地域と人々に広がった。"
        },
        {
            "start": "1848",
            "title": "ナショナリズムと自由主義政治文化の高揚",
            "description": "ナショナリズムと自由主義政治文化の高揚は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1868",
            "title": "明治日本で国家主導の大衆教育拡大",
            "description": "明治日本で国家主導の大衆教育拡大は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "1870",
            "title": "欧米で義務教育拡大",
            "description": "欧米で義務教育拡大は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "1896",
            "title": "第1回近代オリンピック",
            "description": "第1回近代オリンピックは信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1900",
            "title": "世界的大衆文化と娯楽の加速",
            "description": "世界的大衆文化と娯楽の加速は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1919",
            "title": "バウハウス設立",
            "description": "バウハウス設立は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1920",
            "title": "商業ラジオ放送拡大",
            "description": "商業ラジオ放送拡大changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1927",
            "title": "初の長編同期音声映画",
            "description": "初の長編同期音声映画は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1936",
            "title": "複数国でテレビ定期放送開始",
            "description": "複数国でテレビ定期放送開始changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1945",
            "title": "戦後の大衆高等教育拡大",
            "description": "戦後の大衆高等教育拡大は組織的教育を拡大し、読み書き、法、専門知識を持つ人材を育てた。"
        },
        {
            "start": "1947",
            "title": "印パ分離が南アジアのアイデンティティーと移住を再編",
            "description": "印パ分離が南アジアのアイデンティティーと移住を再編は信仰表現、知識保存、集団的アイデンティティの作り方を変えた。"
        },
        {
            "start": "1950",
            "title": "世界的青年文化と消費社会拡大",
            "description": "世界的青年文化と消費社会拡大は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1955",
            "title": "バンドン会議がアジア・アフリカ連帯を促進",
            "description": "バンドン会議がアジア・アフリカ連帯を促進は宗教権威、教義、国家と信仰の関係を再定義した。"
        },
        {
            "start": "1960",
            "title": "第二波フェミニズムが国際的に拡大",
            "description": "第二波フェミニズムが国際的に拡大は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1964",
            "title": "世界の公民権・反差別運動が強化",
            "description": "世界の公民権・反差別運動が強化は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1968",
            "title": "世界的な1968年抗議運動",
            "description": "世界的な1968年抗議運動は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1969",
            "title": "ストーンウォール蜂起と現代LGBTQ権利運動",
            "description": "ストーンウォール蜂起と現代LGBTQ権利運動は平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1970",
            "title": "現代環境運動が大衆政治へ",
            "description": "現代環境運動が大衆政治へは平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "1977",
            "title": "パーソナルコンピューター文化の世界的拡大",
            "description": "パーソナルコンピューター文化の世界的拡大は芸術表現を変え、後の文学、建築、視覚文化に影響した。"
        },
        {
            "start": "1980",
            "title": "衛星テレビと世界メディア網拡大",
            "description": "衛星テレビと世界メディア網拡大changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1989",
            "title": "ワールド・ワイド・ウェブ提案",
            "description": "ワールド・ワイド・ウェブ提案changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1991",
            "title": "ワールド・ワイド・ウェブの一般利用拡大",
            "description": "ワールド・ワイド・ウェブの一般利用拡大changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "1995",
            "title": "商用インターネットと携帯通信加速",
            "description": "商用インターネットと携帯通信加速changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2001",
            "title": "ウィキペディア開始",
            "description": "ウィキペディア開始changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2004",
            "title": "ソーシャルメディア時代の始まり",
            "description": "ソーシャルメディア時代の始まりchanged how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2007",
            "title": "スマートフォン中心のデジタル生活加速",
            "description": "スマートフォン中心のデジタル生活加速changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2010",
            "title": "配信・プラットフォーム文化の世界化",
            "description": "配信・プラットフォーム文化の世界化changed how information and culture were produced, distributed and discussed."
        },
        {
            "start": "2017",
            "title": "#MeTooが世界的運動となる",
            "description": "#MeTooが世界的運動となるは平等、アイデンティティ、社会改革の要求を大衆政治へ持ち込んだ。"
        },
        {
            "start": "2020",
            "title": "遠隔勤務・オンライン教育・デジタル社会生活が急増",
            "description": "遠隔勤務・オンライン教育・デジタル社会生活が急増moved work, teaching and social activity onto online platforms at mass scale."
        }
    ]
};

// 戦争・征服・革命
var tl_wars = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1273",
            "title": "カデシュの戦い",
            "description": "カデシュの戦いは両軍の戦力を集中させ、その後の戦争展開に影響した。"
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "海の民と東地中海紛争",
            "description": "海の民と東地中海紛争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "アッシリアのレヴァント征服",
            "description": "アッシリアのレヴァント征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "ペルシア戦争",
            "description": "ペルシア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "ペロポネソス戦争",
            "description": "ペロポネソス戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "アレクサンドロス大王の征服",
            "description": "アレクサンドロス大王の征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "ポエニ戦争",
            "description": "ポエニ戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "秦の統一戦争",
            "description": "秦の統一戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "楚漢戦争",
            "description": "楚漢戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "カエサルのガリア戦争",
            "description": "カエサルのガリア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "カエサル内戦",
            "description": "カエサル内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "アクティウムの海戦",
            "description": "アクティウムの海戦は両軍の戦力を集中させ、その後の戦争展開に影響した。"
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "第1次ユダヤ戦争",
            "description": "第1次ユダヤ戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "黄巾の乱",
            "description": "黄巾の乱は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "三国時代の戦争",
            "description": "三国時代の戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "民族移動期の侵入と西ローマ支配崩壊",
            "description": "民族移動期の侵入と西ローマ支配崩壊は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "ユスティニアヌスの再征服",
            "description": "ユスティニアヌスの再征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "東ローマ・サーサーン戦争",
            "description": "東ローマ・サーサーン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "初期イスラム征服",
            "description": "初期イスラム征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "イスラム勢力のイベリア征服",
            "description": "イスラム勢力のイベリア征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "安史の乱",
            "description": "安史の乱は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "ヴァイキングの襲撃と征服",
            "description": "ヴァイキングの襲撃と征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国の戦乱",
            "description": "五代十国の戦乱では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "ノルマン・コンクエスト",
            "description": "ノルマン・コンクエストは領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。"
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "東地中海の十字軍",
            "description": "東地中海の十字軍では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "源平合戦",
            "description": "源平合戦は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "ユーラシアのモンゴル征服",
            "description": "ユーラシアのモンゴル征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "アルビジョワ十字軍",
            "description": "アルビジョワ十字軍は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "モンゴルのヨーロッパ侵攻",
            "description": "モンゴルのヨーロッパ侵攻は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "元寇",
            "description": "元寇は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "百年戦争",
            "description": "百年戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "紅巾の乱",
            "description": "紅巾の乱は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "ティムールの征服",
            "description": "ティムールの征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "フス戦争",
            "description": "フス戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "薔薇戦争",
            "description": "薔薇戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "日本の戦国争乱",
            "description": "日本の戦国争乱では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "グラナダ陥落",
            "description": "グラナダ陥落は武力によって政権、国境、社会秩序を変えた。"
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "イタリア戦争",
            "description": "イタリア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "スペインによるアステカ帝国征服",
            "description": "スペインによるアステカ帝国征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "ドイツ農民戦争",
            "description": "ドイツ農民戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "スペインによるインカ征服",
            "description": "スペインによるインカ征服は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "フランス宗教戦争",
            "description": "フランス宗教戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "オランダ独立戦争",
            "description": "オランダ独立戦争は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "文禄・慶長の役",
            "description": "文禄・慶長の役では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "三十年戦争",
            "description": "三十年戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "ポルトガル王政復古戦争",
            "description": "ポルトガル王政復古戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "イングランド内戦",
            "description": "イングランド内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "明清交替の戦乱",
            "description": "明清交替の戦乱では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "英蘭戦争",
            "description": "英蘭戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "ウィーン包囲戦",
            "description": "ウィーン包囲戦は武力によって政権、国境、社会秩序を変えた。"
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "名誉革命",
            "description": "名誉革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "大北方戦争",
            "description": "大北方戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "スペイン継承戦争",
            "description": "スペイン継承戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "七年戦争",
            "description": "七年戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "アメリカ独立戦争",
            "description": "アメリカ独立戦争は外部支配を終わらせ主権国家を作るために戦われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命",
            "description": "フランス革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "ハイチ革命",
            "description": "ハイチ革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "フランス革命戦争・ナポレオン戦争",
            "description": "フランス革命戦争・ナポレオン戦争は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "第1次セルビア蜂起",
            "description": "第1次セルビア蜂起は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "スペイン領アメリカ独立戦争",
            "description": "スペイン領アメリカ独立戦争は外部支配を終わらせ主権国家を作るために戦われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "ギリシア独立戦争",
            "description": "ギリシア独立戦争は外部支配を終わらせ主権国家を作るために戦われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "第1次アヘン戦争",
            "description": "第1次アヘン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "1848年ヨーロッパ革命",
            "description": "1848年ヨーロッパ革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "太平天国の乱",
            "description": "太平天国の乱は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "クリミア戦争",
            "description": "クリミア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "第2次アヘン戦争",
            "description": "第2次アヘン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "インド大反乱",
            "description": "インド大反乱は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "南北戦争",
            "description": "南北戦争は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "ドイツ統一戦争",
            "description": "ドイツ統一戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "戊辰戦争",
            "description": "戊辰戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "普仏戦争",
            "description": "普仏戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "太平洋戦争（南米）",
            "description": "太平洋戦争（南米）では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "マフディー戦争",
            "description": "マフディー戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "清仏戦争",
            "description": "清仏戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "日清戦争",
            "description": "日清戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "アドワの戦い",
            "description": "アドワの戦いは両軍の戦力を集中させ、その後の戦争展開に影響した。"
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "第2次ボーア戦争",
            "description": "第2次ボーア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "義和団運動と列強介入",
            "description": "義和団運動と列強介入は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "日露戦争",
            "description": "日露戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "ロシア第一革命",
            "description": "ロシア第一革命は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "メキシコ革命",
            "description": "メキシコ革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命",
            "description": "辛亥革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "バルカン戦争",
            "description": "バルカン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "第一次世界大戦",
            "description": "第一次世界大戦は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "イースター蜂起",
            "description": "イースター蜂起は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "ロシア革命",
            "description": "ロシア革命は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "ロシア内戦",
            "description": "ロシア内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "トルコ独立戦争",
            "description": "トルコ独立戦争は外部支配を終わらせ主権国家を作るために戦われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "国共内戦",
            "description": "国共内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "日本の東アジア侵略戦争",
            "description": "日本の東アジア侵略戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "第二次エチオピア戦争",
            "description": "第二次エチオピア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "スペイン内戦",
            "description": "スペイン内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "第二次世界大戦",
            "description": "第二次世界大戦は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "第二次世界大戦の東部戦線",
            "description": "第二次世界大戦の東部戦線は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "太平洋戦争",
            "description": "太平洋戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "インドネシア独立戦争",
            "description": "インドネシア独立戦争は外部支配を終わらせ主権国家を作るために戦われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "第一次インドシナ戦争",
            "description": "第一次インドシナ戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "第一次中東戦争",
            "description": "第一次中東戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "冷戦",
            "description": "冷戦は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "マラヤ危機",
            "description": "マラヤ危機は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "朝鮮戦争",
            "description": "朝鮮戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "マウマウ蜂起",
            "description": "マウマウ蜂起は既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "アルジェリア戦争",
            "description": "アルジェリア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "ベトナム戦争",
            "description": "ベトナム戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "スエズ危機",
            "description": "スエズ危機は武力によって政権、国境、社会秩序を変えた。"
        },
        {
            "start": "1956",
            "title": "ハンガリー動乱",
            "description": "ハンガリー動乱は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1959",
            "title": "キューバ革命",
            "description": "キューバ革命は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "コンゴ動乱",
            "description": "コンゴ動乱は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "ポルトガル植民地戦争",
            "description": "ポルトガル植民地戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "キューバ危機",
            "description": "キューバ危機は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "インドネシア大量殺害と政治転換",
            "description": "インドネシア大量殺害と政治転換は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "第三次中東戦争",
            "description": "第三次中東戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "プラハの春とワルシャワ条約機構侵攻",
            "description": "プラハの春とワルシャワ条約機構侵攻は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立戦争",
            "description": "バングラデシュ独立戦争は外部支配を終わらせ主権国家を作るために戦われた。"
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "第四次中東戦争",
            "description": "第四次中東戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "レバノン内戦",
            "description": "レバノン内戦は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "クメール・ルージュ支配下のカンボジア虐殺",
            "description": "クメール・ルージュ支配下のカンボジア虐殺では、民族、宗教、政治的属性を理由に民間人が組織的に殺害または追放された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "ソ連・アフガニスタン戦争",
            "description": "ソ連・アフガニスタン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "イラン革命",
            "description": "イラン革命は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "イラン・イラク戦争",
            "description": "イラン・イラク戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "フォークランド紛争",
            "description": "フォークランド紛争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第一次インティファーダ",
            "description": "第一次インティファーダは既存政府に挑戦し、政治または社会制度の変更を目指した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "天安門抗議運動と弾圧",
            "description": "天安門抗議運動と弾圧は既存政府に挑戦し、政治または社会制度の変更を目指した。"
        },
        {
            "start": "1989",
            "title": "東欧共産主義政権の崩壊",
            "description": "東欧共産主義政権の崩壊は武力によって政権、国境、社会秩序を変えた。"
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "湾岸戦争",
            "description": "湾岸戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "ユーゴスラビア紛争",
            "description": "ユーゴスラビア紛争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "ルワンダのツチに対するジェノサイド",
            "description": "ルワンダのツチに対するジェノサイドでは、民族、宗教、政治的属性を理由に民間人が組織的に殺害または追放された。"
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "第一次チェチェン戦争",
            "description": "第一次チェチェン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "エリトリア・エチオピア戦争",
            "description": "エリトリア・エチオピア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "第二次コンゴ戦争",
            "description": "第二次コンゴ戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "コソボ紛争とNATO介入",
            "description": "コソボ紛争とNATO介入では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "2001-09-11",
            "title": "アメリカ同時多発テロ",
            "description": "アメリカ同時多発テロは武力によって政権、国境、社会秩序を変えた。"
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "アフガニスタン戦争",
            "description": "アフガニスタン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "イラク戦争",
            "description": "イラク戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "ダルフール紛争と大規模残虐行為",
            "description": "ダルフール紛争と大規模残虐行為では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "パキスタン北部の反乱と紛争",
            "description": "パキスタン北部の反乱と紛争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "レバノン戦争",
            "description": "レバノン戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "2008",
            "title": "ロシア・ジョージア戦争",
            "description": "ロシア・ジョージア戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "アラブの春",
            "description": "アラブの春は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "リビア内戦と国際介入",
            "description": "リビア内戦と国際介入は国家支配を争う政治・軍事陣営の長期戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "シリア内戦開始",
            "description": "シリア内戦開始は国家支配を争う政治・軍事陣営の長期戦となった。"
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISISの領域拡大とカリフ国崩壊",
            "description": "ISISの領域拡大とカリフ国崩壊は武力によって政権、国境、社会秩序を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "ロシアのクリミア併合とドンバス戦争開始",
            "description": "ロシアのクリミア併合とドンバス戦争開始は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。"
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "イラクにおける対ISIS戦争",
            "description": "イラクにおける対ISIS戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "イエメン内戦激化",
            "description": "イエメン内戦激化は国家支配を争う政治・軍事陣営の長期戦となった。"
        },
        {
            "start": "2017",
            "title": "ミャンマーからロヒンギャが大量避難",
            "description": "ミャンマーからロヒンギャが大量避難は多くの民間人を故郷から追い出し、越境難民と人道危機を生んだ。"
        },
        {
            "start": "2020",
            "title": "第二次ナゴルノ・カラバフ戦争",
            "description": "第二次ナゴルノ・カラバフ戦争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "ティグレ紛争",
            "description": "ティグレ紛争では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "ミャンマー軍事クーデターと全国紛争",
            "description": "ミャンマー軍事クーデターと全国紛争は軍または政治勢力に権力を移し、新たな統治と抵抗を生んだ。"
        },
        {
            "start": "2022-02-24",
            "title": "ロシアによるウクライナ全面侵攻",
            "description": "ロシアによるウクライナ全面侵攻は領土を外部軍の支配下に置き、政権、国境、人口移動を変えた。"
        },
        {
            "start": "2023-10-07",
            "title": "イスラエル・ハマス戦争開始",
            "description": "イスラエル・ハマス戦争開始では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        },
        {
            "start": "2023",
            "title": "スーダン戦争開始",
            "description": "スーダン戦争開始では領土、政権、安全保障、民族要求をめぐる武力衝突が続いた。"
        }
    ]
};

// 経済・技術・世界的交換
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "帆走輸送の拡大",
            "description": "帆走輸送の拡大reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "-2999",
            "title": "地域間の商品交易拡大",
            "description": "地域間の商品交易拡大は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "-1999",
            "title": "青銅交易網がユーラシア各地を連結",
            "description": "青銅交易網がユーラシア各地を連結は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "-1199",
            "title": "鉄生産が道具と戦争を変革",
            "description": "鉄生産が道具と戦争を変革raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "-0599",
            "title": "貨幣が地中海・西アジアに普及",
            "description": "貨幣が地中海・西アジアに普及は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "-0299",
            "title": "シルクロード交流拡大",
            "description": "シルクロード交流拡大によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "-0199",
            "title": "インド洋季節風交易が活発化",
            "description": "インド洋季節風交易が活発化は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "-0099",
            "title": "ローマ道路・海運網が地中海を統合",
            "description": "ローマ道路・海運網が地中海を統合reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "0100",
            "title": "製紙が中国国内に普及",
            "description": "製紙が中国国内に普及は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "0200",
            "title": "ラクダ隊商によるサハラ交易拡大",
            "description": "ラクダ隊商によるサハラ交易拡大は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "0600",
            "title": "大運河網が中国を統合",
            "description": "大運河網が中国を統合reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "0700",
            "title": "インド洋商人ディアスポラ拡大",
            "description": "インド洋商人ディアスポラ拡大は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "0750",
            "title": "イスラム商業・信用ネットワーク拡大",
            "description": "イスラム商業・信用ネットワーク拡大は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "0800",
            "title": "製紙がイスラム世界へ普及",
            "description": "製紙がイスラム世界へ普及は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "0900",
            "title": "中国で火薬兵器の発展開始",
            "description": "中国で火薬兵器の発展開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1000",
            "title": "中国で航海用羅針盤発展",
            "description": "中国で航海用羅針盤発展reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1100",
            "title": "中世ヨーロッパ商業革命",
            "description": "中世ヨーロッパ商業革命は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1200",
            "title": "モンゴル時代のユーラシア横断交流",
            "description": "モンゴル時代のユーラシア横断交流は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "マルコ・ポーロのユーラシア旅行",
            "description": "マルコ・ポーロのユーラシア旅行は生産、交換、輸送、金融の具体的な仕組みを変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "為替手形と銀行商会拡大",
            "description": "為替手形と銀行商会拡大は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "鄭和の遠征航海",
            "description": "鄭和の遠征航海は生産、交換、輸送、金融の具体的な仕組みを変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "ヨーロッパ印刷革命",
            "description": "ヨーロッパ印刷革命は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1488",
            "title": "ディアスが喜望峰を回航",
            "description": "ディアスが喜望峰を回航は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1492-10-12",
            "title": "コロンブスがカリブ海に到達",
            "description": "コロンブスがカリブ海に到達は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約で海外勢力圏分割",
            "description": "トルデシリャス条約で海外勢力圏分割は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1498",
            "title": "ヴァスコ・ダ・ガマが海路でインド到達",
            "description": "ヴァスコ・ダ・ガマが海路でインド到達は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1500",
            "title": "コロンブス交換加速",
            "description": "コロンブス交換加速は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "大西洋奴隷貿易",
            "description": "大西洋奴隷貿易は長距離交易を拡大し、生産者、港、市場を結びつけた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "初の世界周航遠征",
            "description": "初の世界周航遠征は生産、交換、輸送、金融の具体的な仕組みを変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "ポトシ銀山ブーム",
            "description": "ポトシ銀山ブームは生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1565",
            "title": "マニラ・ガレオン貿易がアメリカとアジアを連結",
            "description": "マニラ・ガレオン貿易がアメリカとアジアを連結reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1600",
            "title": "イギリス東インド会社設立",
            "description": "イギリス東インド会社設立は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1602",
            "title": "オランダ東インド会社設立",
            "description": "オランダ東インド会社設立は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1609",
            "title": "アムステルダム銀行設立",
            "description": "アムステルダム銀行設立は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "1637",
            "title": "オランダのチューリップ市場崩壊",
            "description": "オランダのチューリップ市場崩壊disrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "1650",
            "title": "大西洋プランテーション経済拡大",
            "description": "大西洋プランテーション経済拡大によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1694",
            "title": "イングランド銀行設立",
            "description": "イングランド銀行設立は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "1700",
            "title": "砂糖・茶・コーヒー・綿花の世界市場拡大",
            "description": "砂糖・茶・コーヒー・綿花の世界市場拡大によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1712",
            "title": "ニューコメン蒸気機関",
            "description": "ニューコメン蒸気機関raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "第一次産業革命",
            "description": "第一次産業革命raised productive or energy capacity and changed labor organization and urban growth.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "ワット改良蒸気機関の特許",
            "description": "ワット改良蒸気機関の特許raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1770",
            "title": "英国工場制度拡大",
            "description": "英国工場制度拡大raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1787",
            "title": "ファースト・フリートで英国の豪州植民開始",
            "description": "ファースト・フリートで英国の豪州植民開始は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1793",
            "title": "綿繰り機が米国綿花生産と奴隷制を加速",
            "description": "綿繰り機が米国綿花生産と奴隷制を加速raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1807",
            "title": "商業蒸気船時代開始",
            "description": "商業蒸気船時代開始raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1825",
            "title": "ストックトン・ダーリントン鉄道開通",
            "description": "ストックトン・ダーリントン鉄道開通reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1830",
            "title": "リヴァプール・マンチェスター鉄道開通",
            "description": "リヴァプール・マンチェスター鉄道開通reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1837",
            "title": "電信実用化の実演",
            "description": "電信実用化の実演は通信時間を短縮し、新しい企業、働き方、消費を生み出した。"
        },
        {
            "start": "1846",
            "title": "穀物法廃止",
            "description": "穀物法廃止は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1848",
            "title": "カリフォルニア・ゴールドラッシュ",
            "description": "カリフォルニア・ゴールドラッシュは生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1851",
            "title": "ロンドン万国博覧会",
            "description": "ロンドン万国博覧会は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1856",
            "title": "ベッセマー製鋼法",
            "description": "ベッセマー製鋼法は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1859",
            "title": "ペンシルベニア初の商業油井",
            "description": "ペンシルベニア初の商業油井raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1863",
            "title": "ロンドン地下鉄開業",
            "description": "ロンドン地下鉄開業reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1869",
            "title": "スエズ運河開通",
            "description": "スエズ運河開通reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1869",
            "title": "米国初の大陸横断鉄道完成",
            "description": "米国初の大陸横断鉄道完成reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "第二次産業革命",
            "description": "第二次産業革命raised productive or energy capacity and changed labor organization and urban growth.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "電話の特許と実演",
            "description": "電話の特許と実演は通信時間を短縮し、新しい企業、働き方、消費を生み出した。"
        },
        {
            "start": "1879",
            "title": "実用電灯システム登場",
            "description": "実用電灯システム登場は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1880",
            "title": "欧州・アジアからの大規模移民加速",
            "description": "欧州・アジアからの大規模移民加速は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1883",
            "title": "オリエント急行運行開始",
            "description": "オリエント急行運行開始は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1886",
            "title": "自動車時代開始",
            "description": "自動車時代開始raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1895",
            "title": "商業映画開始",
            "description": "商業映画開始は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1903",
            "title": "初の動力制御飛行",
            "description": "初の動力制御飛行は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1908",
            "title": "フォード・モデルTと自動車大量生産",
            "description": "フォード・モデルTと自動車大量生産raised productive or energy capacity and changed labor organization and urban growth."
        },
        {
            "start": "1914",
            "title": "パナマ運河開通",
            "description": "パナマ運河開通reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1920",
            "title": "大衆消費信用と広告拡大",
            "description": "大衆消費信用と広告拡大によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "世界恐慌",
            "description": "世界恐慌は生産、交換、輸送、金融の具体的な仕組みを変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "米国ニューディール開始",
            "description": "米国ニューディール開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1944",
            "title": "ブレトン・ウッズ体制設計",
            "description": "ブレトン・ウッズ体制設計は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1947",
            "title": "関税貿易一般協定署名",
            "description": "関税貿易一般協定署名は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1948",
            "title": "マーシャル・プラン開始",
            "description": "マーシャル・プラン開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1950",
            "title": "コンテナ輸送が海運を変革",
            "description": "コンテナ輸送が海運を変革reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1956",
            "title": "初の商業コンテナ船航海",
            "description": "初の商業コンテナ船航海reduced the time and cost of moving people and goods and widened the effective market."
        },
        {
            "start": "1957",
            "title": "欧州経済共同体成立",
            "description": "欧州経済共同体成立は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1960",
            "title": "OPEC設立",
            "description": "OPEC設立は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1964",
            "title": "東海道新幹線開業",
            "description": "東海道新幹線開業は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1969",
            "title": "ARPANET運用開始",
            "description": "ARPANET運用開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1971",
            "title": "ドルと金の交換停止",
            "description": "ドルと金の交換停止は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1973",
            "title": "第一次石油危機",
            "description": "第一次石油危機disrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "1978",
            "title": "中国の改革開放開始",
            "description": "中国の改革開放開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1981",
            "title": "IBM PCが個人用コンピューター市場を加速",
            "description": "IBM PCが個人用コンピューター市場を加速は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1983",
            "title": "ARPANETがTCP/IP採用",
            "description": "ARPANETがTCP/IP採用は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1985",
            "title": "シェンゲン協定署名",
            "description": "シェンゲン協定署名は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1986",
            "title": "多地域で市場改革加速",
            "description": "多地域で市場改革加速は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1989",
            "title": "ワシントン・コンセンサス時代開始",
            "description": "ワシントン・コンセンサス時代開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1991",
            "title": "インド経済自由化加速",
            "description": "インド経済自由化加速は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "1993",
            "title": "欧州単一市場開始",
            "description": "欧州単一市場開始によって生産、輸送、金融、市場のネットワークが広域化した。"
        },
        {
            "start": "1994",
            "title": "北米自由貿易協定発効",
            "description": "北米自由貿易協定発効は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1995",
            "title": "世界貿易機関発足",
            "description": "世界貿易機関発足は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "アジア通貨危機",
            "description": "アジア通貨危機disrupted finance, energy or supply chains and forced governments and firms to adjust.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "ユーロが電子・会計通貨として導入",
            "description": "ユーロが電子・会計通貨として導入は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "2001",
            "title": "中国が世界貿易機関加盟",
            "description": "中国が世界貿易機関加盟は長距離交易を拡大し、生産者、港、市場を結びつけた。"
        },
        {
            "start": "2002",
            "title": "ユーロ紙幣・硬貨流通開始",
            "description": "ユーロ紙幣・硬貨流通開始は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "2004",
            "title": "欧州連合の大規模拡大",
            "description": "欧州連合の大規模拡大は生産、交換、輸送、金融の具体的な仕組みを変えた。"
        },
        {
            "start": "2007",
            "title": "世界的スマートフォン経済開始",
            "description": "世界的スマートフォン経済開始は通信時間を短縮し、新しい企業、働き方、消費を生み出した。"
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "世界金融危機",
            "description": "世界金融危機disrupted finance, energy or supply chains and forced governments and firms to adjust.",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "ビットコイン・ネットワーク開始",
            "description": "ビットコイン・ネットワーク開始は決済、融資、価値保存の新しい方法を提供した。"
        },
        {
            "start": "2010",
            "title": "プラットフォーム・ギグ経済拡大",
            "description": "プラットフォーム・ギグ経済拡大は通信時間を短縮し、新しい企業、働き方、消費を生み出した。"
        },
        {
            "start": "2013",
            "title": "一帯一路構想発表",
            "description": "一帯一路構想発表は国境を越える経済協力の方向を変え、貿易と規制を再編した。"
        },
        {
            "start": "2016",
            "title": "英国がEU離脱を国民投票で選択",
            "description": "英国がEU離脱を国民投票で選択は国境を越える経済協力の方向を変え、貿易と規制を再編した。"
        },
        {
            "start": "2020",
            "title": "英国のEU離脱発効",
            "description": "英国のEU離脱発効は国境を越える経済協力の方向を変え、貿易と規制を再編した。"
        },
        {
            "start": "2020",
            "title": "COVID-19下の世界供給網ショック",
            "description": "COVID-19下の世界供給網ショックdisrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "2021",
            "title": "世界的インフレとエネルギー価格圧力増大",
            "description": "世界的インフレとエネルギー価格圧力増大disrupted finance, energy or supply chains and forced governments and firms to adjust."
        },
        {
            "start": "2022",
            "title": "ウクライナ侵攻後に制裁と貿易分断深化",
            "description": "ウクライナ侵攻後に制裁と貿易分断深化disrupted finance, energy or supply chains and forced governments and firms to adjust."
        }
    ]
};

// 災害・疫病・環境
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2千年干ばつイベント",
            "description": "4.2千年干ばつイベントは食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。"
        },
        {
            "start": "-1599",
            "title": "テラ島噴火と東地中海の混乱",
            "description": "テラ島噴火と東地中海の混乱は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "アントニヌスの疫病",
            "description": "アントニヌスの疫病は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "キプリアヌスの疫病",
            "description": "キプリアヌスの疫病は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "古代末期の気候ショック",
            "description": "古代末期の気候ショックは気温と降水を変化させ、農業、健康、居住に影響した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "ユスティニアヌスの疫病に始まる第一次ペスト流行",
            "description": "ユスティニアヌスの疫病に始まる第一次ペスト流行は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "サマラス火山噴火",
            "description": "サマラス火山噴火は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "ヨーロッパ大飢饉",
            "description": "ヨーロッパ大飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "黒死病",
            "description": "黒死病は死傷者、生産停止、長期的な復興需要を生んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "15世紀中葉の火山・気候ショック",
            "description": "15世紀中葉の火山・気候ショックは火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "旧世界の疾病がアメリカ先住民人口を壊滅",
            "description": "旧世界の疾病がアメリカ先住民人口を壊滅は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "華県地震",
            "description": "華県地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1600",
            "title": "ワイナプチナ噴火と世界的寒冷化",
            "description": "ワイナプチナ噴火と世界的寒冷化は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "ロンドン大疫病",
            "description": "ロンドン大疫病は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "ロンドン大火",
            "description": "ロンドン大火は住宅地または生態系を焼き、都市管理と防災の弱点を示した。"
        },
        {
            "start": "1707",
            "title": "宝永地震と富士山噴火",
            "description": "宝永地震と富士山噴火は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "マルセイユ大疫病",
            "description": "マルセイユ大疫病は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "リスボン地震・津波",
            "description": "リスボン地震・津波は沿岸地域を破壊し、長期的な復興とエネルギー安全問題を残した。"
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "ラキ火山噴火と気候混乱",
            "description": "ラキ火山噴火と気候混乱は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "タンボラ火山噴火",
            "description": "タンボラ火山噴火は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1816",
            "title": "夏のない年",
            "description": "夏のない年は死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "世界的コレラ流行",
            "description": "世界的コレラ流行は死傷者、生産停止、長期的な復興需要を生んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "アイルランド大飢饉",
            "description": "アイルランド大飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "インド・中国の大飢饉",
            "description": "インド・中国の大飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "クラカタウ噴火",
            "description": "クラカタウ噴火は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1887",
            "title": "黄河大洪水",
            "description": "黄河大洪水は広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "第三次ペスト流行",
            "description": "第三次ペスト流行は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "サンフランシスコ地震",
            "description": "サンフランシスコ地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1911",
            "title": "長江・淮河大洪水",
            "description": "長江・淮河大洪水は死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "インフルエンザ大流行",
            "description": "インフルエンザ大流行は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "海原地震",
            "description": "海原地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1923-09-01",
            "title": "関東大震災",
            "description": "関東大震災は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1931",
            "title": "中国大洪水",
            "description": "中国大洪水は広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "ホロドモールを含むソ連飢饉",
            "description": "ホロドモールを含むソ連飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "ベンガル飢饉",
            "description": "ベンガル飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "中国大飢饉",
            "description": "中国大飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "バルディビア地震と太平洋津波",
            "description": "バルディビア地震と太平洋津波は沿岸地域を破壊し、長期的な復興とエネルギー安全問題を残した。"
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "香港インフルエンザ大流行",
            "description": "香港インフルエンザ大流行は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "ボーラ・サイクロン",
            "description": "ボーラ・サイクロンは死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "1976",
            "title": "唐山地震",
            "description": "唐山地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1984",
            "title": "ボパール化学事故",
            "description": "ボパール化学事故は死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "エチオピア飢饉",
            "description": "エチオピア飢饉は食料不足を深刻化させ、栄養失調、移住、社会不安を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "チェルノブイリ原発事故",
            "description": "チェルノブイリ原発事故は深刻な人的・環境被害を与え、安全規制の強化を促した。"
        },
        {
            "start": "1988",
            "title": "アルメニア地震",
            "description": "アルメニア地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1991",
            "title": "ピナトゥボ火山噴火",
            "description": "ピナトゥボ火山噴火は火山灰とガスを放出し、周辺集落だけでなく気候と農業にも影響した。"
        },
        {
            "start": "1994",
            "title": "阪神・淡路大震災",
            "description": "阪神・淡路大震災は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "エルニーニョによる世界的気候混乱",
            "description": "エルニーニョによる世界的気候混乱は気温と降水を変化させ、農業、健康、居住に影響した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "グジャラート地震",
            "description": "グジャラート地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "2003",
            "title": "ヨーロッパ熱波",
            "description": "ヨーロッパ熱波は死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "2004-12-26",
            "title": "インド洋地震・津波",
            "description": "インド洋地震・津波は沿岸地域を破壊し、長期的な復興とエネルギー安全問題を残した。"
        },
        {
            "start": "2005",
            "title": "ハリケーン・カトリーナ",
            "description": "ハリケーン・カトリーナは広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "2008",
            "title": "サイクロン・ナルギス",
            "description": "サイクロン・ナルギスは死傷者、生産停止、長期的な復興需要を生んだ。"
        },
        {
            "start": "2008",
            "title": "四川大地震",
            "description": "四川大地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震",
            "description": "ハイチ地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "2010",
            "title": "パキスタン洪水",
            "description": "パキスタン洪水は広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "2011-03-11",
            "title": "東日本大震災・津波・福島原発事故",
            "description": "東日本大震災・津波・福島原発事故は沿岸地域を破壊し、長期的な復興とエネルギー安全問題を残した。"
        },
        {
            "start": "2013",
            "title": "台風ハイエン",
            "description": "台風ハイエンは広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "西アフリカ・エボラ流行",
            "description": "西アフリカ・エボラ流行は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "ネパール地震",
            "description": "ネパール地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "COVID-19世界的保健緊急事態",
            "description": "COVID-19世界的保健緊急事態は広範な感染と死亡を引き起こし、医療、隔離、日常生活を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "世界的な大規模山火・異常気象への認識拡大",
            "description": "世界的な大規模山火・異常気象への認識拡大は住宅地または生態系を焼き、都市管理と防災の弱点を示した。"
        },
        {
            "start": "2022",
            "title": "パキスタン洪水と気候脆弱性危機",
            "description": "パキスタン洪水と気候脆弱性危機は広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        },
        {
            "start": "2023",
            "title": "トルコ・シリア地震",
            "description": "トルコ・シリア地震は建物とインフラを破壊し、多数の死傷者と大規模復興をもたらした。"
        },
        {
            "start": "2023",
            "title": "リビア・デルナ洪水",
            "description": "リビア・デルナ洪水は広い地域を浸水または破壊し、死傷、避難、インフラ損失を生んだ。"
        }
    ]
};

// 法・権利・国際制度
var tl_rights = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1749",
            "title": "ハンムラビ法典",
            "description": "ハンムラビ法典は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "-0620",
            "title": "アテネのドラコン・ソロン改革",
            "description": "アテネのドラコン・ソロン改革は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政制度成立",
            "description": "ローマ共和政制度成立は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "-0449",
            "title": "ローマ十二表法",
            "description": "ローマ十二表法は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "-0220",
            "title": "秦の行政標準化",
            "description": "秦の行政標準化は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "0212",
            "title": "アントニヌス勅令でローマ市民権拡大",
            "description": "アントニヌス勅令でローマ市民権拡大は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "0604",
            "title": "日本の十七条憲法",
            "description": "日本の十七条憲法は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "0701",
            "title": "大宝律令",
            "description": "大宝律令は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "0800",
            "title": "カロリング皇帝戴冠",
            "description": "カロリング皇帝戴冠は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1215-06-15",
            "title": "マグナ・カルタ承認",
            "description": "マグナ・カルタ承認は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1222",
            "title": "ハンガリー金印勅書",
            "description": "ハンガリー金印勅書は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1232",
            "title": "マンデ憲章の伝統",
            "description": "マンデ憲章の伝統は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1265",
            "title": "シモン・ド・モンフォール議会",
            "description": "シモン・ド・モンフォール議会は政治代表を拡大または再編し、公共意思決定への参加を広げた。"
        },
        {
            "start": "1356",
            "title": "神聖ローマ帝国金印勅書",
            "description": "神聖ローマ帝国金印勅書は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1454",
            "title": "ローディの和",
            "description": "ローディの和は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約",
            "description": "トルデシリャス条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1555",
            "title": "アウクスブルクの和議",
            "description": "アウクスブルクの和議は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1598",
            "title": "ナントの勅令",
            "description": "ナントの勅令は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1600",
            "title": "特許会社統治拡大",
            "description": "特許会社統治拡大は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1628",
            "title": "権利の請願",
            "description": "権利の請願は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1648",
            "title": "ウェストファリア条約",
            "description": "ウェストファリア条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1679",
            "title": "人身保護法",
            "description": "人身保護法は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1689",
            "title": "権利章典",
            "description": "権利章典は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1701",
            "title": "王位継承法",
            "description": "王位継承法は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1713",
            "title": "ユトレヒト条約",
            "description": "ユトレヒト条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1776-07-04",
            "title": "アメリカ独立宣言",
            "description": "アメリカ独立宣言は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1787-09-17",
            "title": "アメリカ合衆国憲法署名",
            "description": "アメリカ合衆国憲法署名は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1789-08-26",
            "title": "人間と市民の権利の宣言",
            "description": "人間と市民の権利の宣言は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1791",
            "title": "米国権利章典批准",
            "description": "米国権利章典批准は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1792",
            "title": "『女性の権利の擁護』刊行",
            "description": "『女性の権利の擁護』刊行は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1804",
            "title": "ナポレオン法典",
            "description": "ナポレオン法典は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1807",
            "title": "英国が奴隷貿易廃止",
            "description": "英国が奴隷貿易廃止は人を財産として売買し強制労働させる法制度を制限または廃止した。"
        },
        {
            "start": "1815",
            "title": "ウィーン会議とヨーロッパ協調",
            "description": "ウィーン会議とヨーロッパ協調は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1833",
            "title": "英帝国奴隷制度廃止法",
            "description": "英帝国奴隷制度廃止法は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1840",
            "title": "ワイタンギ条約",
            "description": "ワイタンギ条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1848",
            "title": "セネカ・フォールズ会議",
            "description": "セネカ・フォールズ会議は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1863",
            "title": "奴隷解放宣言",
            "description": "奴隷解放宣言は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1864",
            "title": "第1回ジュネーヴ条約",
            "description": "第1回ジュネーヴ条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1865",
            "title": "米国憲法修正第13条で奴隷制廃止",
            "description": "米国憲法修正第13条で奴隷制廃止は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1868",
            "title": "米国憲法修正第14条",
            "description": "米国憲法修正第14条は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1868",
            "title": "明治日本の五箇条の御誓文",
            "description": "明治日本の五箇条の御誓文は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1870",
            "title": "米国憲法修正第15条",
            "description": "米国憲法修正第15条は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "ベルリン会議がアフリカ植民地化を規定",
            "description": "ベルリン会議がアフリカ植民地化を規定は公権力、個人の権利、国家間関係の規則を定めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "大日本帝国憲法発布",
            "description": "大日本帝国憲法発布は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1899",
            "title": "第1回ハーグ平和会議",
            "description": "第1回ハーグ平和会議は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1902",
            "title": "オーストラリアで多くの女性に連邦選挙権",
            "description": "オーストラリアで多くの女性に連邦選挙権は政治代表を拡大または再編し、公共意思決定への参加を広げた。"
        },
        {
            "start": "1905",
            "title": "ノルウェーが協議による連合解消で独立",
            "description": "ノルウェーが協議による連合解消で独立は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1907",
            "title": "第2回ハーグ平和会議",
            "description": "第2回ハーグ平和会議は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1911",
            "title": "国際女性デー初開催",
            "description": "国際女性デー初開催は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1918",
            "title": "英国で年齢制限付き女性議会選挙権",
            "description": "英国で年齢制限付き女性議会選挙権は政治代表を拡大または再編し、公共意思決定への参加を広げた。"
        },
        {
            "start": "1919",
            "title": "ヴェルサイユ条約",
            "description": "ヴェルサイユ条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1919",
            "title": "国際労働機関設立",
            "description": "国際労働機関設立は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1920",
            "title": "国際連盟発足",
            "description": "国際連盟発足は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1920",
            "title": "米国憲法修正第19条で女性参政権",
            "description": "米国憲法修正第19条で女性参政権は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1928",
            "title": "不戦条約",
            "description": "不戦条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1935",
            "title": "ニュルンベルク法制定",
            "description": "ニュルンベルク法制定は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1941",
            "title": "大西洋憲章",
            "description": "大西洋憲章は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1944",
            "title": "ブレトン・ウッズ諸機関構想",
            "description": "ブレトン・ウッズ諸機関構想は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1945-06-26",
            "title": "国際連合憲章署名",
            "description": "国際連合憲章署名は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1945-10-24",
            "title": "国際連合発足",
            "description": "国際連合発足は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "ニュルンベルク裁判",
            "description": "ニュルンベルク裁判は公権力、個人の権利、国家間関係の規則を定めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "極東国際軍事裁判",
            "description": "極東国際軍事裁判は公権力、個人の権利、国家間関係の規則を定めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "関税貿易一般協定",
            "description": "関税貿易一般協定は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1948-12-09",
            "title": "ジェノサイド条約採択",
            "description": "ジェノサイド条約採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1948-12-10",
            "title": "世界人権宣言採択",
            "description": "世界人権宣言採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1949",
            "title": "ジュネーヴ諸条約改定・拡張",
            "description": "ジュネーヴ諸条約改定・拡張は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1949",
            "title": "北大西洋条約機構設立",
            "description": "北大西洋条約機構設立は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1950",
            "title": "欧州人権条約署名",
            "description": "欧州人権条約署名は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1951",
            "title": "難民条約採択",
            "description": "難民条約採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1955",
            "title": "ワルシャワ条約機構設立",
            "description": "ワルシャワ条約機構設立は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1957",
            "title": "ローマ条約",
            "description": "ローマ条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1959",
            "title": "欧州人権裁判所設立",
            "description": "欧州人権裁判所設立は司法判断によって法を再解釈し、政府または個人の権利範囲を変えた。"
        },
        {
            "start": "1960-12-14",
            "title": "植民地独立付与宣言",
            "description": "植民地独立付与宣言は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構設立",
            "description": "アフリカ統一機構設立は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1964",
            "title": "米国公民権法",
            "description": "米国公民権法は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1965",
            "title": "米国投票権法",
            "description": "米国投票権法は政治代表を拡大または再編し、公共意思決定への参加を広げた。"
        },
        {
            "start": "1965",
            "title": "人種差別撤廃条約",
            "description": "人種差別撤廃条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1966",
            "title": "国際人権規約採択",
            "description": "国際人権規約採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1967",
            "title": "東南アジア諸国連合設立",
            "description": "東南アジア諸国連合設立は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1968",
            "title": "核兵器不拡散条約署名開放",
            "description": "核兵器不拡散条約署名開放は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1972",
            "title": "国連人間環境会議",
            "description": "国連人間環境会議は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1975",
            "title": "ヘルシンキ最終議定書",
            "description": "ヘルシンキ最終議定書は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1979",
            "title": "女性差別撤廃条約",
            "description": "女性差別撤廃条約は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1981",
            "title": "アフリカ人権憲章採択",
            "description": "アフリカ人権憲章採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1982",
            "title": "国連海洋法条約署名開放",
            "description": "国連海洋法条約署名開放は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1987",
            "title": "モントリオール議定書採択",
            "description": "モントリオール議定書採択は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1989",
            "title": "子どもの権利条約採択",
            "description": "子どもの権利条約採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1990",
            "title": "米国障害者法署名",
            "description": "米国障害者法署名は統治、財産、手続き、個人の権利を正式な法規則にした。"
        },
        {
            "start": "1991",
            "title": "第一次戦略兵器削減条約署名",
            "description": "第一次戦略兵器削減条約署名は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1992",
            "title": "リオ地球サミット",
            "description": "リオ地球サミットは公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1992",
            "title": "マーストリヒト条約署名",
            "description": "マーストリヒト条約署名は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "1993-11-01",
            "title": "欧州連合正式発足",
            "description": "欧州連合正式発足は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1994",
            "title": "南アフリカでアパルトヘイト終結と民主選挙",
            "description": "南アフリカでアパルトヘイト終結と民主選挙は政治代表を拡大または再編し、公共意思決定への参加を広げた。"
        },
        {
            "start": "1995-01-01",
            "title": "世界貿易機関設立",
            "description": "世界貿易機関設立は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "1997",
            "title": "京都議定書採択",
            "description": "京都議定書採択は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "1998",
            "title": "国際刑事裁判所ローマ規程採択",
            "description": "国際刑事裁判所ローマ規程採択は司法判断によって法を再解釈し、政府または個人の権利範囲を変えた。"
        },
        {
            "start": "2000",
            "title": "ミレニアム開発目標採択",
            "description": "ミレニアム開発目標採択は貧困、保健、教育、環境、開発に関する国際行動枠組みを示した。"
        },
        {
            "start": "2002-07-01",
            "title": "国際刑事裁判所の管轄開始",
            "description": "国際刑事裁判所の管轄開始は司法判断によって法を再解釈し、政府または個人の権利範囲を変えた。"
        },
        {
            "start": "2005",
            "title": "国連世界サミットで保護する責任を承認",
            "description": "国連世界サミットで保護する責任を承認は安全保障、貿易、司法、共通政策を扱う国際機関を作った。"
        },
        {
            "start": "2006",
            "title": "障害者権利条約採択",
            "description": "障害者権利条約採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "2007",
            "title": "先住民族の権利に関する国連宣言採択",
            "description": "先住民族の権利に関する国連宣言採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "2015",
            "title": "持続可能な開発目標採択",
            "description": "持続可能な開発目標採択は貧困、保健、教育、環境、開発に関する国際行動枠組みを示した。"
        },
        {
            "start": "2015-12-12",
            "title": "パリ協定採択",
            "description": "パリ協定採択は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "2016",
            "title": "パリ協定発効",
            "description": "パリ協定発効は公権力、個人の権利、国家間関係の規則を定めた。"
        },
        {
            "start": "2018",
            "title": "安全で秩序ある正規移住のためのグローバル・コンパクト採択",
            "description": "安全で秩序ある正規移住のためのグローバル・コンパクト採択は国家関係、国境、権利、共通義務を文書で定めた。"
        },
        {
            "start": "2021",
            "title": "核兵器禁止条約発効",
            "description": "核兵器禁止条約発効は国家関係、国境、権利、共通義務を文書で定めた。"
        }
    ]
};

// 現代世界
var tl_contemporary = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1945-08-06",
            "title": "広島への原子爆弾投下",
            "description": "広島への原子爆弾投下は核兵器の破壊力を示し、抑止と軍備管理を国際政治の中心課題にした。"
        },
        {
            "start": "1945-08-09",
            "title": "長崎への原子爆弾投下",
            "description": "長崎への原子爆弾投下は核兵器の破壊力を示し、抑止と軍備管理を国際政治の中心課題にした。"
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "ベルリン封鎖と空輸",
            "description": "ベルリン封鎖と空輸は安全保障と人道上の影響を生み、各国に政策調整を迫った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "ナクバとパレスチナ人の大量避難",
            "description": "ナクバとパレスチナ人の大量避難は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "1953",
            "title": "スターリン死去とソ連指導部移行",
            "description": "スターリン死去とソ連指導部移行は一つの政治時代を終わらせ、指導部、制度、世論の変化を引き起こした。"
        },
        {
            "start": "1954",
            "title": "ブラウン対教育委員会判決",
            "description": "ブラウン対教育委員会判決は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1955",
            "title": "モンゴメリー・バス・ボイコット",
            "description": "モンゴメリー・バス・ボイコットは社会的要求を大規模な公共行動に変え、法的・政治的対応を促した。"
        },
        {
            "start": "1956",
            "title": "フルシチョフ秘密報告と非スターリン化",
            "description": "フルシチョフ秘密報告と非スターリン化は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1957",
            "title": "スプートニクが宇宙時代を開始",
            "description": "スプートニクが宇宙時代を開始は新しい宇宙能力を示し、国家間の技術競争を加速させた。"
        },
        {
            "start": "1959",
            "title": "ダライ・ラマがチベットを脱出",
            "description": "ダライ・ラマがチベットを脱出は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "ベルリンの壁",
            "description": "ベルリンの壁は現代の政治、社会生活、国際関係の実際の運用を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "非同盟運動成立",
            "description": "非同盟運動成立は社会的要求を大規模な公共行動に変え、法的・政治的対応を促した。"
        },
        {
            "start": "1963-08-28",
            "title": "ワシントン大行進",
            "description": "ワシントン大行進は社会的要求を大規模な公共行動に変え、法的・政治的対応を促した。"
        },
        {
            "start": "1963-11-22",
            "title": "ジョン・F・ケネディ暗殺",
            "description": "ジョン・F・ケネディ暗殺は一つの政治時代を終わらせ、指導部、制度、世論の変化を引き起こした。"
        },
        {
            "start": "1964",
            "title": "中国初の核実験",
            "description": "中国初の核実験は核兵器の破壊力を示し、抑止と軍備管理を国際政治の中心課題にした。"
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "中国文化大革命",
            "description": "中国文化大革命は現代の政治、社会生活、国際関係の実際の運用を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "人類初の月面着陸",
            "description": "人類初の月面着陸は新しい宇宙能力を示し、国家間の技術競争を加速させた。"
        },
        {
            "start": "1971",
            "title": "中華人民共和国が国連の中国代表権を取得",
            "description": "中華人民共和国が国連の中国代表権を取得は国際制度における国家または組織の地位と行動能力を変えた。"
        },
        {
            "start": "1972",
            "title": "米中国交接近",
            "description": "米中国交接近は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "1973",
            "title": "チリ軍事クーデター",
            "description": "チリ軍事クーデターは現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1974",
            "title": "ポルトガルのカーネーション革命",
            "description": "ポルトガルのカーネーション革命は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1975",
            "title": "サイゴン陥落",
            "description": "サイゴン陥落は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1976",
            "title": "毛沢東死去と文化大革命時代の終結",
            "description": "毛沢東死去と文化大革命時代の終結は一つの政治時代を終わらせ、指導部、制度、世論の変化を引き起こした。"
        },
        {
            "start": "1978",
            "title": "キャンプ・デービッド合意",
            "description": "キャンプ・デービッド合意は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "1979",
            "title": "エジプト・イスラエル平和条約",
            "description": "エジプト・イスラエル平和条約は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1979",
            "title": "ソ連のアフガニスタン侵攻",
            "description": "ソ連のアフガニスタン侵攻は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "1980",
            "title": "ポーランドで連帯結成",
            "description": "ポーランドで連帯結成は国際制度における国家または組織の地位と行動能力を変えた。"
        },
        {
            "start": "1985",
            "title": "ゴルバチョフがペレストロイカとグラスノスチ開始",
            "description": "ゴルバチョフがペレストロイカとグラスノスチ開始は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1986",
            "title": "フィリピンのピープルパワー革命",
            "description": "フィリピンのピープルパワー革命は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1987",
            "title": "第一次インティファーダ開始",
            "description": "第一次インティファーダ開始は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1988",
            "title": "イラン・イラク停戦",
            "description": "イラン・イラク停戦は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1989-11-09",
            "title": "ベルリンの壁崩壊",
            "description": "ベルリンの壁崩壊は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1990",
            "title": "ネルソン・マンデラ釈放",
            "description": "ネルソン・マンデラ釈放は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1991",
            "title": "砂漠の嵐作戦",
            "description": "砂漠の嵐作戦は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1991",
            "title": "ワルシャワ条約機構解体",
            "description": "ワルシャワ条約機構解体は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1993",
            "title": "オスロ合意",
            "description": "オスロ合意は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "1994",
            "title": "ルワンダ虐殺と国際社会の失敗",
            "description": "ルワンダ虐殺と国際社会の失敗は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "1995",
            "title": "デイトン合意でボスニア戦争終結",
            "description": "デイトン合意でボスニア戦争終結は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "1997",
            "title": "アジア通貨危機拡大",
            "description": "アジア通貨危機拡大は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "1998",
            "title": "ベルファスト合意",
            "description": "ベルファスト合意は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "1999",
            "title": "NATOのコソボ介入",
            "description": "NATOのコソボ介入は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2000",
            "title": "第二次インティファーダ開始",
            "description": "第二次インティファーダ開始は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2001",
            "title": "9.11後にNATO第5条適用",
            "description": "9.11後にNATO第5条適用は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2003",
            "title": "イラク戦争反対の世界的抗議",
            "description": "イラク戦争反対の世界的抗議は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "2004",
            "title": "インド洋津波が世界的人道対応を促す",
            "description": "インド洋津波が世界的人道対応を促すは現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2005",
            "title": "ロンドン同時爆破事件",
            "description": "ロンドン同時爆破事件は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2008",
            "title": "バラク・オバマが米国初のアフリカ系大統領に当選",
            "description": "バラク・オバマが米国初のアフリカ系大統領に当選は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2008",
            "title": "世界金融システムが深刻な危機へ",
            "description": "世界金融システムが深刻な危機へは安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震で大規模国際救援",
            "description": "ハイチ地震で大規模国際救援は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2011",
            "title": "福島原発事故がエネルギー政策論争を再編",
            "description": "福島原発事故がエネルギー政策論争を再編は国境を越えて経済と社会を混乱させ、緊急または協調政策を促した。"
        },
        {
            "start": "2011",
            "title": "ウサーマ・ビン・ラーディン殺害",
            "description": "ウサーマ・ビン・ラーディン殺害は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2013",
            "title": "エドワード・スノーデン暴露",
            "description": "エドワード・スノーデン暴露は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2014",
            "title": "西アフリカ・エボラ緊急事態",
            "description": "西アフリカ・エボラ緊急事態は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2015",
            "title": "欧州難民危機が頂点へ",
            "description": "欧州難民危機が頂点へは安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "2015",
            "title": "イラン核合意",
            "description": "イラン核合意は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "2016",
            "title": "英国EU離脱国民投票",
            "description": "英国EU離脱国民投票は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2016",
            "title": "トルコのクーデター未遂",
            "description": "トルコのクーデター未遂は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2018",
            "title": "米中貿易摩擦激化",
            "description": "米中貿易摩擦激化は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2019",
            "title": "香港反送中抗議運動",
            "description": "香港反送中抗議運動は社会的要求を大規模な公共行動に変え、法的・政治的対応を促した。"
        },
        {
            "start": "2020",
            "title": "WHOがCOVID-19をパンデミックと表明",
            "description": "WHOがCOVID-19をパンデミックと表明は国境を越えて経済と社会を混乱させ、緊急または協調政策を促した。"
        },
        {
            "start": "2020",
            "title": "世界的ブラック・ライヴズ・マター抗議",
            "description": "世界的ブラック・ライヴズ・マター抗議は社会的要求を大規模な公共行動に変え、法的・政治的対応を促した。"
        },
        {
            "start": "2020",
            "title": "アブラハム合意",
            "description": "アブラハム合意は対立の一部を緩和し、新たな外交または安全保障協力の経路を開いた。"
        },
        {
            "start": "2021",
            "title": "米国議会議事堂襲撃",
            "description": "米国議会議事堂襲撃は現代の政治、社会生活、国際関係の実際の運用を変えた。"
        },
        {
            "start": "2021",
            "title": "タリバンがアフガニスタンで政権復帰",
            "description": "タリバンがアフガニスタンで政権復帰は国際制度における国家または組織の地位と行動能力を変えた。"
        },
        {
            "start": "2021",
            "title": "AUKUS安全保障枠組み発表",
            "description": "AUKUS安全保障枠組み発表は軍事協力を拡大し、地域の安全保障体制を変えた。"
        },
        {
            "start": "2022",
            "title": "ロシア侵攻後の世界的避難・食料・エネルギーショック",
            "description": "ロシア侵攻後の世界的避難・食料・エネルギーショックは安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "2022",
            "title": "エリザベス2世死去",
            "description": "エリザベス2世死去は一つの政治時代を終わらせ、指導部、制度、世論の変化を引き起こした。"
        },
        {
            "start": "2023",
            "title": "フィンランドがNATO加盟",
            "description": "フィンランドがNATO加盟は軍事協力を拡大し、地域の安全保障体制を変えた。"
        },
        {
            "start": "2023",
            "title": "イスラエル・ハマス戦争と地域的人道危機",
            "description": "イスラエル・ハマス戦争と地域的人道危機は安全保障と人道上の影響を生み、各国に政策調整を迫った。"
        },
        {
            "start": "2024",
            "title": "スウェーデンがNATO加盟",
            "description": "スウェーデンがNATO加盟は軍事協力を拡大し、地域の安全保障体制を変えた。"
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
