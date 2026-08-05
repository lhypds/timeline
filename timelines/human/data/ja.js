var title = "人類史タイムライン";

// Curated global human-history timeline.
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
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "青銅器時代",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "最初の都市と領域国家",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "古典文明と枢軸時代",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "後古典期の地域秩序",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "相互接続された中世世界",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "近世の世界的拡張",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "革命と工業化の時代",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "帝国主義と世界的移民の時代",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "世界大戦と大衆政治",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "冷戦・脱植民地化・開発",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "冷戦後の移行期",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "グローバル化・テロ・デジタル社会",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "パンデミック・地政学的分断・AI加速",
            "description": "人間社会の大きな変化を整理するための広域的な時代区分。",
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
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-9599",
            "title": "エリコの恒常的定住",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-8999",
            "title": "ヒツジとヤギの家畜化",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-8499",
            "title": "チャヨニュと肥沃な三日月地帯の初期農耕",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-7499",
            "title": "チャタル・ヒュユクの大規模集落",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-6999",
            "title": "長江流域で稲作が拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-6999",
            "title": "メヘルガルの農耕共同体",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-6499",
            "title": "土器と村落ネットワークの拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-5999",
            "title": "メソポタミアの灌漑共同体",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-5499",
            "title": "農耕がヨーロッパへ拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-4999",
            "title": "ユーラシアの初期冶金",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-4499",
            "title": "草原地帯で牧畜が拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3999",
            "title": "犂耕と大規模村落",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3799",
            "title": "ウルクの都市化",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3499",
            "title": "車輪と車両輸送",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3399",
            "title": "原楔形文字による会計",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3299",
            "title": "インダス都市伝統の始まり",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3199",
            "title": "エジプト象形文字",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-3099",
            "title": "古代エジプトの政治統一",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2999",
            "title": "メソポタミアとインダスを結ぶ長距離交易",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2899",
            "title": "シュメール初期王朝都市国家",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2699",
            "title": "エジプト古王国とピラミッド国家",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2599",
            "title": "成熟期ハラッパー都市",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2499",
            "title": "オーストロネシア人の拡散開始",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2399",
            "title": "アッカドの帝国的拡張",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2199",
            "title": "4.2千年イベントと国家危機",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-2099",
            "title": "ウル第三王朝",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1999",
            "title": "ミノア宮殿文明",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1899",
            "title": "古バビロニアの都市秩序",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1799",
            "title": "二里頭文化と中国初期青銅国家",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1749",
            "title": "ハンムラビのバビロン統治",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1599",
            "title": "殷王朝の成立",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1599",
            "title": "ミケーネ宮殿社会",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1549",
            "title": "エジプト新王国",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1499",
            "title": "南アジアでヴェーダ文化が発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1399",
            "title": "ヒッタイト帝国の強盛",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1299",
            "title": "オルメカ文明の成立",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1249",
            "title": "ラピタ文化の太平洋拡散",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1199",
            "title": "後期青銅器時代の崩壊",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1099",
            "title": "フェニキア海上ネットワーク",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-1045",
            "title": "周による殷征服",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0999",
            "title": "バントゥー語族人口の拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0899",
            "title": "西アフリカのノク文化",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0799",
            "title": "ギリシアのポリス形成",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0799",
            "title": "アンデスのチャビン文化圏",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0769",
            "title": "東周時代の開始",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0752",
            "title": "ローマ建国の伝承年",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0699",
            "title": "鉄器技術の広範な普及",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0699",
            "title": "スキタイ草原ネットワーク",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0599",
            "title": "ガンジス中流域の都市化",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0549",
            "title": "アケメネス朝ペルシア帝国の成立",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政の開始",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0499",
            "title": "サポテカのモンテ・アルバン発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0499",
            "title": "サハラ横断交流の拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0402",
            "title": "中国の戦国時代開始",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0321",
            "title": "マウリヤ朝の成立",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0220",
            "title": "秦による中国統一",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0205",
            "title": "漢王朝の成立",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0199",
            "title": "テオティワカンが大都市へ成長",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "-0099",
            "title": "アンデスでモチェ文化が発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0100",
            "title": "アクスム王国の台頭",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0200",
            "title": "古典期マヤ都市文明の繁栄",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0220",
            "title": "漢王朝の終焉と分裂時代",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0320",
            "title": "グプタ朝の台頭",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0400",
            "title": "ポリネシア人の太平洋定住拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0500",
            "title": "西アフリカのガーナ王国台頭",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0600",
            "title": "ミシシッピ土塁社会の発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0700",
            "title": "スワヒリ海岸交易都市の拡大",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0800",
            "title": "ヴァイキングの定住と北大西洋拡張",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "0900",
            "title": "グレート・ジンバブエ地域中心の発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "1000",
            "title": "北欧人の北米定住",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "1050",
            "title": "カホキアが大都市中心へ発展",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "1200",
            "title": "マオリのニュージーランド定住",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "1325",
            "title": "テノチティトラン建設",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
        },
        {
            "start": "1438",
            "title": "インカ帝国の拡張開始",
            "description": "定住・生業・人口・社会組織に関する基礎的な変化。"
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
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "エジプト古王国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "エジプト中王国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "エジプト新王国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "殷王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "周王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "新アッシリア帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "新バビロニア帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "アケメネス朝ペルシア帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "ローマ共和政",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "アレクサンドロス大王の帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "プトレマイオス朝エジプト",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "セレウコス朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "マウリヤ朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "秦王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "漢王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "パルティア帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "統一ローマ帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "サーサーン朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "最盛期のアクスム王国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "グプタ朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "東ローマ／ビザンツ帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "フランク王国とカロリング帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "隋による中国再統一",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "唐王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "正統カリフとウマイヤ朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "バグダードのアッバース朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "日本の平安時代",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "神聖ローマ帝国の伝統",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "キエフ・ルーシ国家",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国時代",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "宋王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "ファーティマ朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "ガーナ帝国の最盛期",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "セルジューク帝国秩序",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "イングランドでノルマン支配成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "鎌倉幕府",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "モンゴル帝国と後継ハン国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "マリ帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "元王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "オスマン国家と帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "ヴィジャヤナガル帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "西欧の百年戦争時代",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "明王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "朝鮮王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "ソンガイ帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "オスマン帝国によるコンスタンティノープル攻略",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "ソンガイ帝国の拡張",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "イングランドのテューダー朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "カスティーリャとアラゴンの統合確立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "サファヴィー朝イラン",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "ムガル帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "ロシア・ツァーリ国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "徳川幕府",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "ステュアート時代と英国立憲王政",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "清王朝",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "ピョートル大帝期のロシア",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "グレートブリテン王国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1776",
            "title": "アメリカ合衆国独立宣言",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命政府",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "ナポレオン帝国",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "ハイチ独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "ラテンアメリカ独立時代",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "ウィーン会議体制",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1822",
            "title": "ブラジル独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1861",
            "title": "イタリア王国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1867",
            "title": "カナダ連邦成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1868",
            "title": "明治維新",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1871",
            "title": "ドイツ帝国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1885",
            "title": "コンゴ自由国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1901",
            "title": "オーストラリア連邦成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命で帝政終焉",
            "description": "政治組織・国家権力・地域秩序における重要な変化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "ロシア臨時政府とボリシェヴィキ政権掌握",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1918",
            "title": "ドイツ・オーストリア＝ハンガリー・オスマン・ロシア帝国の崩壊",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1922",
            "title": "ソビエト連邦成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1923",
            "title": "トルコ共和国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1932",
            "title": "サウジアラビア王国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1947",
            "title": "インドとパキスタン独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1948",
            "title": "イスラエル国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1949",
            "title": "中華人民共和国成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1957",
            "title": "ガーナ独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1960",
            "title": "アフリカの年",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1962",
            "title": "アルジェリア独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1990",
            "title": "ドイツ再統一",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1991",
            "title": "ソビエト連邦解体",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1993",
            "title": "チェコスロヴァキアの平和的分離",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1997",
            "title": "香港返還",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "1999",
            "title": "マカオ返還",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "2002",
            "title": "アフリカ連合成立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
        },
        {
            "start": "2011",
            "title": "南スーダン独立",
            "description": "政治組織・国家権力・地域秩序における重要な変化。"
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
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-1799",
            "title": "古バビロニアの書記学校",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-1499",
            "title": "南アジアでヴェーダ賛歌が伝承",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-1199",
            "title": "殷代中国の甲骨文字",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0999",
            "title": "ヘブライ宗教伝統の形成",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0799",
            "title": "ホメロス叙事詩の文字化",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0699",
            "title": "アルファベット文字が地中海世界に普及",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0599",
            "title": "ウパニシャッド思想の発展",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0549",
            "title": "マハーヴィーラとジャイナ教伝統",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0529",
            "title": "仏陀の教えを中心に仏教共同体形成",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0499",
            "title": "孔子の教えと中国古典倫理伝統",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0449",
            "title": "アテネでギリシア演劇が繁栄",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0399",
            "title": "中国古典文献の編纂",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0299",
            "title": "ヘレニズム文化の融合",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0249",
            "title": "アショーカ王期の仏教布教",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "-0199",
            "title": "ラビ的伝統と第二神殿期ユダヤ教の発展",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0030",
            "title": "初期キリスト教運動",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0105",
            "title": "蔡倫の上奏に結び付く製紙法",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0200",
            "title": "大乗仏教がアジアに拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0313",
            "title": "ミラノ勅令でキリスト教公認",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0325",
            "title": "第1ニカイア公会議",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0380",
            "title": "キリスト教がローマ帝国国教となる",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0400",
            "title": "グプタ朝下でサンスクリット古典文化繁栄",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0529",
            "title": "ベネディクト会修道制の始まり",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0610",
            "title": "イスラム伝統におけるクルアーン啓示開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0622",
            "title": "ヒジュラとメディナのムスリム共同体形成",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0700",
            "title": "仏教が東アジア・東南アジアに定着",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0762",
            "title": "アッバース朝首都バグダード建設",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0800",
            "title": "カロリング朝教育改革",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0850",
            "title": "古典アラビア語翻訳運動",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0868",
            "title": "中国で『金剛経』印刷",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0960",
            "title": "東アジアで活字と商業出版が発展",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "0988",
            "title": "キエフ・ルーシのキリスト教化",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1054",
            "title": "東西教会の分裂",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1088",
            "title": "ボローニャ大学の伝統開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1096",
            "title": "十字軍運動開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1150",
            "title": "ヨーロッパの大学ネットワーク拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1200",
            "title": "朱子学が東アジアで影響拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1250",
            "title": "スコラ学文化の成熟",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1300",
            "title": "俗語文学文化の拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1350",
            "title": "イタリア・ルネサンス人文主義の拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1450",
            "title": "ヨーロッパのグーテンベルク式活版印刷",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1517",
            "title": "宗教改革開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1534",
            "title": "イングランド宗教改革と国王至上権",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1540",
            "title": "イエズス会認可",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "トリエント公会議",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "欽定訳聖書刊行",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1637",
            "title": "徳川政権のキリスト教・海外交流制限",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1648",
            "title": "三十年戦争後の宗派秩序",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1685",
            "title": "ナントの勅令廃止",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1715",
            "title": "ヨーロッパ啓蒙主義の公共圏拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "『百科全書』刊行",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "太平洋の宣教と植民地文化接触拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1800",
            "title": "ロマン主義がヨーロッパ文化を再編",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1830",
            "title": "大衆新聞の普及",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1848",
            "title": "ナショナリズムと自由主義政治文化の高揚",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1868",
            "title": "明治日本で国家主導の大衆教育拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1870",
            "title": "欧米で義務教育拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1896",
            "title": "第1回近代オリンピック",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1900",
            "title": "世界的大衆文化と娯楽の加速",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1919",
            "title": "バウハウス設立",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1920",
            "title": "商業ラジオ放送拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1927",
            "title": "初の長編同期音声映画",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1936",
            "title": "複数国でテレビ定期放送開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1945",
            "title": "戦後の大衆高等教育拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1947",
            "title": "印パ分離が南アジアのアイデンティティーと移住を再編",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1950",
            "title": "世界的青年文化と消費社会拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1955",
            "title": "バンドン会議がアジア・アフリカ連帯を促進",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1960",
            "title": "第二波フェミニズムが国際的に拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1964",
            "title": "世界の公民権・反差別運動が強化",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1968",
            "title": "世界的な1968年抗議運動",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1969",
            "title": "ストーンウォール蜂起と現代LGBTQ権利運動",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1970",
            "title": "現代環境運動が大衆政治へ",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1977",
            "title": "パーソナルコンピューター文化の世界的拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1980",
            "title": "衛星テレビと世界メディア網拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1989",
            "title": "ワールド・ワイド・ウェブ提案",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1991",
            "title": "ワールド・ワイド・ウェブの一般利用拡大",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "1995",
            "title": "商用インターネットと携帯通信加速",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2001",
            "title": "ウィキペディア開始",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2004",
            "title": "ソーシャルメディア時代の始まり",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2007",
            "title": "スマートフォン中心のデジタル生活加速",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2010",
            "title": "配信・プラットフォーム文化の世界化",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2017",
            "title": "#MeTooが世界的運動となる",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
        },
        {
            "start": "2020",
            "title": "遠隔勤務・オンライン教育・デジタル社会生活が急増",
            "description": "宗教・文化・伝達・教育・集団的アイデンティティーにおける重要な展開。"
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
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "海の民と東地中海紛争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "アッシリアのレヴァント征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "ペルシア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "ペロポネソス戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "アレクサンドロス大王の征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "ポエニ戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "秦の統一戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "楚漢戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "カエサルのガリア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "カエサル内戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "アクティウムの海戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "第1次ユダヤ戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "黄巾の乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "三国時代の戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "民族移動期の侵入と西ローマ支配崩壊",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "ユスティニアヌスの再征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "東ローマ・サーサーン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "初期イスラム征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "イスラム勢力のイベリア征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "安史の乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "ヴァイキングの襲撃と征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国の戦乱",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "ノルマン・コンクエスト",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "東地中海の十字軍",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "源平合戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "ユーラシアのモンゴル征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "アルビジョワ十字軍",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "モンゴルのヨーロッパ侵攻",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "元寇",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "百年戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "紅巾の乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "ティムールの征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "フス戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "薔薇戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "日本の戦国争乱",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "グラナダ陥落",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "イタリア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "スペインによるアステカ帝国征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "ドイツ農民戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "スペインによるインカ征服",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "フランス宗教戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "オランダ独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "文禄・慶長の役",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "三十年戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "ポルトガル王政復古戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "イングランド内戦",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "明清交替の戦乱",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "英蘭戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "ウィーン包囲戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "名誉革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "大北方戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "スペイン継承戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "七年戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "アメリカ独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "ハイチ革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "フランス革命戦争・ナポレオン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "第1次セルビア蜂起",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "スペイン領アメリカ独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "ギリシア独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "第1次アヘン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "1848年ヨーロッパ革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "太平天国の乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "クリミア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "第2次アヘン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "インド大反乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "南北戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "ドイツ統一戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "戊辰戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "普仏戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "太平洋戦争（南米）",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "マフディー戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "清仏戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "日清戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "アドワの戦い",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "第2次ボーア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "義和団運動と列強介入",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "日露戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "ロシア第一革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "メキシコ革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "バルカン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "第一次世界大戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "イースター蜂起",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "ロシア革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "ロシア内戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "トルコ独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "国共内戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "日本の東アジア侵略戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "第二次エチオピア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "スペイン内戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "第二次世界大戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "第二次世界大戦の東部戦線",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "太平洋戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "インドネシア独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "第一次インドシナ戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "第一次中東戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "冷戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "マラヤ危機",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "朝鮮戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "マウマウ蜂起",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "アルジェリア戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "ベトナム戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "スエズ危機",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1956",
            "title": "ハンガリー動乱",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1959",
            "title": "キューバ革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "コンゴ動乱",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "ポルトガル植民地戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "キューバ危機",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "インドネシア大量殺害と政治転換",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "第三次中東戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "プラハの春とワルシャワ条約機構侵攻",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立戦争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "第四次中東戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "レバノン内戦",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "クメール・ルージュ支配下のカンボジア虐殺",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "ソ連・アフガニスタン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "イラン革命",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "イラン・イラク戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "フォークランド紛争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第一次インティファーダ",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "天安門抗議運動と弾圧",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1989",
            "title": "東欧共産主義政権の崩壊",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "湾岸戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "ユーゴスラビア紛争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "ルワンダのツチに対するジェノサイド",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "第一次チェチェン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "エリトリア・エチオピア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "第二次コンゴ戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "コソボ紛争とNATO介入",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2001-09-11",
            "title": "アメリカ同時多発テロ",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "アフガニスタン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "イラク戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "ダルフール紛争と大規模残虐行為",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "パキスタン北部の反乱と紛争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "レバノン戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2008",
            "title": "ロシア・ジョージア戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "アラブの春",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "リビア内戦と国際介入",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "シリア内戦開始",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISISの領域拡大とカリフ国崩壊",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "ロシアのクリミア併合とドンバス戦争開始",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "イラクにおける対ISIS戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "イエメン内戦激化",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2017",
            "title": "ミャンマーからロヒンギャが大量避難",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2020",
            "title": "第二次ナゴルノ・カラバフ戦争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "ティグレ紛争",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "ミャンマー軍事クーデターと全国紛争",
            "description": "政府・社会秩序・国民的アイデンティティーを変えた大規模な政治的断絶。"
        },
        {
            "start": "2022-02-24",
            "title": "ロシアによるウクライナ全面侵攻",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2023-10-07",
            "title": "イスラエル・ハマス戦争開始",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        },
        {
            "start": "2023",
            "title": "スーダン戦争開始",
            "description": "国家・国境・人口・勢力均衡を変えた重大な紛争。"
        }
    ]
};

// 経済・技術・世界的交流
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "帆走輸送の拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-2999",
            "title": "地域間の商品交易拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-1999",
            "title": "青銅交易網がユーラシア各地を連結",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-1199",
            "title": "鉄生産が道具と戦争を変革",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-0599",
            "title": "貨幣が地中海・西アジアに普及",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-0299",
            "title": "シルクロード交流拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-0199",
            "title": "インド洋季節風交易が活発化",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "-0099",
            "title": "ローマ道路・海運網が地中海を統合",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0100",
            "title": "製紙が中国国内に普及",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0200",
            "title": "ラクダ隊商によるサハラ交易拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0600",
            "title": "大運河網が中国を統合",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0700",
            "title": "インド洋商人ディアスポラ拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0750",
            "title": "イスラム商業・信用ネットワーク拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0800",
            "title": "製紙がイスラム世界へ普及",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "0900",
            "title": "中国で火薬兵器の発展開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1000",
            "title": "中国で航海用羅針盤発展",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1100",
            "title": "中世ヨーロッパ商業革命",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1200",
            "title": "モンゴル時代のユーラシア横断交流",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "マルコ・ポーロのユーラシア旅行",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "為替手形と銀行商会拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "鄭和の遠征航海",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "ヨーロッパ印刷革命",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1488",
            "title": "ディアスが喜望峰を回航",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1492-10-12",
            "title": "コロンブスがカリブ海に到達",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約で海外勢力圏分割",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1498",
            "title": "ヴァスコ・ダ・ガマが海路でインド到達",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1500",
            "title": "コロンブス交換加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "大西洋奴隷貿易",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "初の世界周航遠征",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "ポトシ銀山ブーム",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1565",
            "title": "マニラ・ガレオン貿易がアメリカとアジアを連結",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1600",
            "title": "イギリス東インド会社設立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1602",
            "title": "オランダ東インド会社設立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1609",
            "title": "アムステルダム銀行設立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1637",
            "title": "オランダのチューリップ市場崩壊",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1650",
            "title": "大西洋プランテーション経済拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1694",
            "title": "イングランド銀行設立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1700",
            "title": "砂糖・茶・コーヒー・綿花の世界市場拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1712",
            "title": "ニューコメン蒸気機関",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "第一次産業革命",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "ワット改良蒸気機関の特許",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1770",
            "title": "英国工場制度拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1787",
            "title": "ファースト・フリートで英国の豪州植民開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1793",
            "title": "綿繰り機が米国綿花生産と奴隷制を加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1807",
            "title": "商業蒸気船時代開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1825",
            "title": "ストックトン・ダーリントン鉄道開通",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1830",
            "title": "リヴァプール・マンチェスター鉄道開通",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1837",
            "title": "電信実用化の実演",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1846",
            "title": "穀物法廃止",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1848",
            "title": "カリフォルニア・ゴールドラッシュ",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1851",
            "title": "ロンドン万国博覧会",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1856",
            "title": "ベッセマー製鋼法",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1859",
            "title": "ペンシルベニア初の商業油井",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1863",
            "title": "ロンドン地下鉄開業",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1869",
            "title": "スエズ運河開通",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1869",
            "title": "米国初の大陸横断鉄道完成",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "第二次産業革命",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "電話の特許と実演",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1879",
            "title": "実用電灯システム登場",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1880",
            "title": "欧州・アジアからの大規模移民加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1883",
            "title": "オリエント急行運行開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1886",
            "title": "自動車時代開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1895",
            "title": "商業映画開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1903",
            "title": "初の動力制御飛行",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1908",
            "title": "フォード・モデルTと自動車大量生産",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1914",
            "title": "パナマ運河開通",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1920",
            "title": "大衆消費信用と広告拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "世界恐慌",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "米国ニューディール開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1944",
            "title": "ブレトン・ウッズ体制設計",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1947",
            "title": "関税貿易一般協定署名",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1948",
            "title": "マーシャル・プラン開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1950",
            "title": "コンテナ輸送が海運を変革",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1956",
            "title": "初の商業コンテナ船航海",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1957",
            "title": "欧州経済共同体成立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1960",
            "title": "OPEC設立",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1964",
            "title": "東海道新幹線開業",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1969",
            "title": "ARPANET運用開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1971",
            "title": "ドルと金の交換停止",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1973",
            "title": "第一次石油危機",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1978",
            "title": "中国の改革開放開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1981",
            "title": "IBM PCが個人用コンピューター市場を加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1983",
            "title": "ARPANETがTCP/IP採用",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1985",
            "title": "シェンゲン協定署名",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1986",
            "title": "多地域で市場改革加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1989",
            "title": "ワシントン・コンセンサス時代開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1991",
            "title": "インド経済自由化加速",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1993",
            "title": "欧州単一市場開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1994",
            "title": "北米自由貿易協定発効",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1995",
            "title": "世界貿易機関発足",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "アジア通貨危機",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "ユーロが電子・会計通貨として導入",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2001",
            "title": "中国が世界貿易機関加盟",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2002",
            "title": "ユーロ紙幣・硬貨流通開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2004",
            "title": "欧州連合の大規模拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2007",
            "title": "世界的スマートフォン経済開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "世界金融危機",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "ビットコイン・ネットワーク開始",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2010",
            "title": "プラットフォーム・ギグ経済拡大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2013",
            "title": "一帯一路構想発表",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2016",
            "title": "英国がEU離脱を国民投票で選択",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2020",
            "title": "英国のEU離脱発効",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2020",
            "title": "COVID-19下の世界供給網ショック",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2021",
            "title": "世界的インフレとエネルギー価格圧力増大",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
        },
        {
            "start": "2022",
            "title": "ウクライナ侵攻後に制裁と貿易分断深化",
            "description": "生産・交易・労働・インフラ・技術・世界的交流における重要な転換。"
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
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "-1599",
            "title": "テラ島噴火と東地中海の混乱",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "アントニヌスの疫病",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "キプリアヌスの疫病",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "古代末期の気候ショック",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "ユスティニアヌスの疫病に始まる第一次ペスト流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "サマラス火山噴火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "ヨーロッパ大飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "黒死病",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "15世紀中葉の火山・気候ショック",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "旧世界の疾病がアメリカ先住民人口を壊滅",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "華県地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1600",
            "title": "ワイナプチナ噴火と世界的寒冷化",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "ロンドン大疫病",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "ロンドン大火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1707",
            "title": "宝永地震と富士山噴火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "マルセイユ大疫病",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "リスボン地震・津波",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "ラキ火山噴火と気候混乱",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "タンボラ火山噴火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1816",
            "title": "夏のない年",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "世界的コレラ流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "アイルランド大飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "インド・中国の大飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "クラカタウ噴火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1887",
            "title": "黄河大洪水",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "第三次ペスト流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "サンフランシスコ地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1911",
            "title": "長江・淮河大洪水",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "インフルエンザ大流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "海原地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1923-09-01",
            "title": "関東大震災",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1931",
            "title": "中国大洪水",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "ホロドモールを含むソ連飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "ベンガル飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "中国大飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "バルディビア地震と太平洋津波",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "香港インフルエンザ大流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "ボーラ・サイクロン",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1976",
            "title": "唐山地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1984",
            "title": "ボパール化学事故",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "エチオピア飢饉",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "チェルノブイリ原発事故",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1988",
            "title": "アルメニア地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1991",
            "title": "ピナトゥボ火山噴火",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1994",
            "title": "阪神・淡路大震災",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "エルニーニョによる世界的気候混乱",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "グジャラート地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2003",
            "title": "ヨーロッパ熱波",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2004-12-26",
            "title": "インド洋地震・津波",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2005",
            "title": "ハリケーン・カトリーナ",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2008",
            "title": "サイクロン・ナルギス",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2008",
            "title": "四川大地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2010",
            "title": "パキスタン洪水",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2011-03-11",
            "title": "東日本大震災・津波・福島原発事故",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2013",
            "title": "台風ハイエン",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "西アフリカ・エボラ流行",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "ネパール地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "COVID-19世界的保健緊急事態",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "世界的な大規模山火・異常気象への認識拡大",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2022",
            "title": "パキスタン洪水と気候脆弱性危機",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2023",
            "title": "トルコ・シリア地震",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
        },
        {
            "start": "2023",
            "title": "リビア・デルナ洪水",
            "description": "長期的な社会的影響を残した人口・環境・公衆衛生上の大きな衝撃。"
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
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "-0620",
            "title": "アテネのドラコン・ソロン改革",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政制度成立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "-0449",
            "title": "ローマ十二表法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "-0220",
            "title": "秦の行政標準化",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "0212",
            "title": "アントニヌス勅令でローマ市民権拡大",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "0604",
            "title": "日本の十七条憲法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "0701",
            "title": "大宝律令",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "0800",
            "title": "カロリング皇帝戴冠",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1215-06-15",
            "title": "マグナ・カルタ承認",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1222",
            "title": "ハンガリー金印勅書",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1232",
            "title": "マンデ憲章の伝統",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1265",
            "title": "シモン・ド・モンフォール議会",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1356",
            "title": "神聖ローマ帝国金印勅書",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1454",
            "title": "ローディの和",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1555",
            "title": "アウクスブルクの和議",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1598",
            "title": "ナントの勅令",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1600",
            "title": "特許会社統治拡大",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1628",
            "title": "権利の請願",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1648",
            "title": "ウェストファリア条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1679",
            "title": "人身保護法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1689",
            "title": "権利章典",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1701",
            "title": "王位継承法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1713",
            "title": "ユトレヒト条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1776-07-04",
            "title": "アメリカ独立宣言",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1787-09-17",
            "title": "アメリカ合衆国憲法署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1789-08-26",
            "title": "人間と市民の権利の宣言",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1791",
            "title": "米国権利章典批准",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1792",
            "title": "『女性の権利の擁護』刊行",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1804",
            "title": "ナポレオン法典",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1807",
            "title": "英国が奴隷貿易廃止",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1815",
            "title": "ウィーン会議とヨーロッパ協調",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1833",
            "title": "英帝国奴隷制度廃止法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1840",
            "title": "ワイタンギ条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1848",
            "title": "セネカ・フォールズ会議",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1863",
            "title": "奴隷解放宣言",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1864",
            "title": "第1回ジュネーヴ条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1865",
            "title": "米国憲法修正第13条で奴隷制廃止",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1868",
            "title": "米国憲法修正第14条",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1868",
            "title": "明治日本の五箇条の御誓文",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1870",
            "title": "米国憲法修正第15条",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "ベルリン会議がアフリカ植民地化を規定",
            "description": "法・統治・権利・国際制度における重要な節目。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "大日本帝国憲法発布",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1899",
            "title": "第1回ハーグ平和会議",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1902",
            "title": "オーストラリアで多くの女性に連邦選挙権",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1905",
            "title": "ノルウェーが協議による連合解消で独立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1907",
            "title": "第2回ハーグ平和会議",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1911",
            "title": "国際女性デー初開催",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1918",
            "title": "英国で年齢制限付き女性議会選挙権",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1919",
            "title": "ヴェルサイユ条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1919",
            "title": "国際労働機関設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1920",
            "title": "国際連盟発足",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1920",
            "title": "米国憲法修正第19条で女性参政権",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1928",
            "title": "不戦条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1935",
            "title": "ニュルンベルク法制定",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1941",
            "title": "大西洋憲章",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1944",
            "title": "ブレトン・ウッズ諸機関構想",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1945-06-26",
            "title": "国際連合憲章署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1945-10-24",
            "title": "国際連合発足",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "ニュルンベルク裁判",
            "description": "法・統治・権利・国際制度における重要な節目。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "極東国際軍事裁判",
            "description": "法・統治・権利・国際制度における重要な節目。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "関税貿易一般協定",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1948-12-09",
            "title": "ジェノサイド条約採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1948-12-10",
            "title": "世界人権宣言採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1949",
            "title": "ジュネーヴ諸条約改定・拡張",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1949",
            "title": "北大西洋条約機構設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1950",
            "title": "欧州人権条約署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1951",
            "title": "難民条約採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1955",
            "title": "ワルシャワ条約機構設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1957",
            "title": "ローマ条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1959",
            "title": "欧州人権裁判所設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1960-12-14",
            "title": "植民地独立付与宣言",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1964",
            "title": "米国公民権法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1965",
            "title": "米国投票権法",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1965",
            "title": "人種差別撤廃条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1966",
            "title": "国際人権規約採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1967",
            "title": "東南アジア諸国連合設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1968",
            "title": "核兵器不拡散条約署名開放",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1972",
            "title": "国連人間環境会議",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1975",
            "title": "ヘルシンキ最終議定書",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1979",
            "title": "女性差別撤廃条約",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1981",
            "title": "アフリカ人権憲章採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1982",
            "title": "国連海洋法条約署名開放",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1987",
            "title": "モントリオール議定書採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1989",
            "title": "子どもの権利条約採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1990",
            "title": "米国障害者法署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1991",
            "title": "第一次戦略兵器削減条約署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1992",
            "title": "リオ地球サミット",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1992",
            "title": "マーストリヒト条約署名",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1993-11-01",
            "title": "欧州連合正式発足",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1994",
            "title": "南アフリカでアパルトヘイト終結と民主選挙",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1995-01-01",
            "title": "世界貿易機関設立",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1997",
            "title": "京都議定書採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "1998",
            "title": "国際刑事裁判所ローマ規程採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2000",
            "title": "ミレニアム開発目標採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2002-07-01",
            "title": "国際刑事裁判所の管轄開始",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2005",
            "title": "国連世界サミットで保護する責任を承認",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2006",
            "title": "障害者権利条約採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2007",
            "title": "先住民族の権利に関する国連宣言採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2015",
            "title": "持続可能な開発目標採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2015-12-12",
            "title": "パリ協定採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2016",
            "title": "パリ協定発効",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2018",
            "title": "安全で秩序ある正規移住のためのグローバル・コンパクト採択",
            "description": "法・統治・権利・国際制度における重要な節目。"
        },
        {
            "start": "2021",
            "title": "核兵器禁止条約発効",
            "description": "法・統治・権利・国際制度における重要な節目。"
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
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1945-08-09",
            "title": "長崎への原子爆弾投下",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "ベルリン封鎖と空輸",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "ナクバとパレスチナ人の大量避難",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1953",
            "title": "スターリン死去とソ連指導部移行",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1954",
            "title": "ブラウン対教育委員会判決",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1955",
            "title": "モンゴメリー・バス・ボイコット",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1956",
            "title": "フルシチョフ秘密報告と非スターリン化",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1957",
            "title": "スプートニクが宇宙時代を開始",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1959",
            "title": "ダライ・ラマがチベットを脱出",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "ベルリンの壁",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "非同盟運動成立",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1963-08-28",
            "title": "ワシントン大行進",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1963-11-22",
            "title": "ジョン・F・ケネディ暗殺",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1964",
            "title": "中国初の核実験",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "中国文化大革命",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "人類初の月面着陸",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1971",
            "title": "中華人民共和国が国連の中国代表権を取得",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1972",
            "title": "米中国交接近",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1973",
            "title": "チリ軍事クーデター",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1974",
            "title": "ポルトガルのカーネーション革命",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1975",
            "title": "サイゴン陥落",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1976",
            "title": "毛沢東死去と文化大革命時代の終結",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1978",
            "title": "キャンプ・デービッド合意",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1979",
            "title": "エジプト・イスラエル平和条約",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1979",
            "title": "ソ連のアフガニスタン侵攻",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1980",
            "title": "ポーランドで連帯結成",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1985",
            "title": "ゴルバチョフがペレストロイカとグラスノスチ開始",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1986",
            "title": "フィリピンのピープルパワー革命",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1987",
            "title": "第一次インティファーダ開始",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1988",
            "title": "イラン・イラク停戦",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1989-11-09",
            "title": "ベルリンの壁崩壊",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1990",
            "title": "ネルソン・マンデラ釈放",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1991",
            "title": "砂漠の嵐作戦",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1991",
            "title": "ワルシャワ条約機構解体",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1993",
            "title": "オスロ合意",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1994",
            "title": "ルワンダ虐殺と国際社会の失敗",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1995",
            "title": "デイトン合意でボスニア戦争終結",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1997",
            "title": "アジア通貨危機拡大",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1998",
            "title": "ベルファスト合意",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "1999",
            "title": "NATOのコソボ介入",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2000",
            "title": "第二次インティファーダ開始",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2001",
            "title": "9.11後にNATO第5条適用",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2003",
            "title": "イラク戦争反対の世界的抗議",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2004",
            "title": "インド洋津波が世界的人道対応を促す",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2005",
            "title": "ロンドン同時爆破事件",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2008",
            "title": "バラク・オバマが米国初のアフリカ系大統領に当選",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2008",
            "title": "世界金融システムが深刻な危機へ",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震で大規模国際救援",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2011",
            "title": "福島原発事故がエネルギー政策論争を再編",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2011",
            "title": "ウサーマ・ビン・ラーディン殺害",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2013",
            "title": "エドワード・スノーデン暴露",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2014",
            "title": "西アフリカ・エボラ緊急事態",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2015",
            "title": "欧州難民危機が頂点へ",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2015",
            "title": "イラン核合意",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2016",
            "title": "英国EU離脱国民投票",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2016",
            "title": "トルコのクーデター未遂",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2018",
            "title": "米中貿易摩擦激化",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2019",
            "title": "香港反送中抗議運動",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2020",
            "title": "WHOがCOVID-19をパンデミックと表明",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2020",
            "title": "世界的ブラック・ライヴズ・マター抗議",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2020",
            "title": "アブラハム合意",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2021",
            "title": "米国議会議事堂襲撃",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2021",
            "title": "タリバンがアフガニスタンで政権復帰",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2021",
            "title": "AUKUS安全保障枠組み発表",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2022",
            "title": "ロシア侵攻後の世界的避難・食料・エネルギーショック",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2022",
            "title": "エリザベス2世死去",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2023",
            "title": "フィンランドがNATO加盟",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2023",
            "title": "イスラエル・ハマス戦争と地域的人道危機",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
        },
        {
            "start": "2024",
            "title": "スウェーデンがNATO加盟",
            "description": "現代世界の政治・社会・国際秩序を形づくった重要な出来事。"
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
