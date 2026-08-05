var title = "音楽史タイムライン";

// 世界音楽史の精選タイムライン。人物は20歳の年、グループは結成年に配置し、流派の時期は編集上の概略範囲である。
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// 世界の音楽伝統と長期的時代区分
var tl_global_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "end": "-2999",
            "title": "紀元前1万年以前の音楽深史と新石器時代の儀礼音楽",
            "description": "SIMILE は紀元前1万年以前を表現できないため、旧石器時代の骨笛など最古の証拠をこの境界に集約し、その後の新石器時代の儀礼・共同体音楽へ接続する。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "メソポタミアの神殿・宮廷音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "古代エジプト音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "古代中国の青銅鐘・礼楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "ヴェーダ詠唱",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "古代ギリシア音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "初期ユダヤ典礼音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "ローマ・古代末期音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "インド古典音楽理論とラーガ体系の形成",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "ビザンティン聖歌",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "中国文人琴楽の伝統",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "日本の雅楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "アッバース朝期のアラブ・ペルシア宮廷音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "ジャワ・バリのガムラン伝統",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "アンダルス古典音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "西アフリカのグリオ／コラ伝統",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "カッワーリーと南アジア・スーフィー音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "中国戯曲音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "北インド古典音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "日本の能楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "オスマン古典音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "南インド古典音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "崑曲",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "歌舞伎音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "フラメンコ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "京劇",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "タンゴの形成と黄金時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "ハイライフ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "サンバ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "マンドポップと中国語流行歌",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "ライ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "演歌",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "ボサノヴァ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "ヌエバ・カンシオン",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "サルサの古典期",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "ムジカ・ポプラール・ブラジレイラ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "アフロビート",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "レゲエ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "日本のシティ・ポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ラテン・ポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "J-POP",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "K-POP",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "アフロビーツ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "アマピアノ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        }
    ]
};

// 西洋芸術音楽の時代と潮流
var tl_classical_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "0500",
            "end": "1400",
            "title": "中世音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "グレゴリオ聖歌レパートリー",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "ノートルダム楽派とアルス・アンティクァ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "アルス・ノーヴァ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "ルネサンス音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "フランドル楽派の多声音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "マドリガーレの時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "バロック音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "初期オペラとモノディ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "盛期バロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "ギャラント様式",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "古典派",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "音楽の疾風怒濤",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "ロマン派音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "ヴィルトゥオーゾ演奏会文化",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "国民楽派",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "後期ロマン派",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "印象主義と音楽的象徴主義",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "音楽モダニズム",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "表現主義と自由無調",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "新古典主義",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "十二音技法とセリー主義",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "ミュジーク・コンクレートと初期電子音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "戦後前衛音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "ミニマリズムとポスト・ミニマリズム",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ポストモダンと多様式主義",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "スペクトル楽派",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "新しい複雑性",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "デジタル／マルチメディア芸術音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        }
    ]
};

// ポピュラー・ジャズ・民俗・電子音楽の流派
var tl_popular_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1830",
            "end": "1920",
            "title": "米国のミンストレル・ショー",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "黒人霊歌の演奏会・出版文化",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "ブラスバンド時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "ブルース",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "ラグタイム",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "カントリー／オールドタイム音楽",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "ゴスペル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ニューオーリンズ・ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ティン・パン・アレー歌曲時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "クラシック・ブルースと初期録音",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "クルーナー時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "ビッグバンド・ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "映画音楽とサウンドトラック文化",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "スウィング時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "ウェスタン・スウィング",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "ブルーグラス",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "リズム・アンド・ブルース",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "ビバップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "クール・ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ドゥーワップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ハード・バップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ホンキートンク・カントリー",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ロックンロール",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "ナッシュビル・サウンド",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "ソウル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "モード・ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "サーフ・ミュージック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "フリー・ジャズ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "ファンク",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "モータウン・サウンド",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "ブリティッシュ・インヴェイジョン",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "フォーク・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "ガレージ・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "サイケデリック・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "プログレッシブ・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "ハードロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "ヘヴィメタル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "ジャズ・フュージョン",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ダブ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "グラム・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "アウトロー・カントリー",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "シンガーソングライター時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "ヒップホップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "ディスコ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "パンク・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "アンビエント",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "ポストパンク",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "インダストリアル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "ニュー・ウェイヴ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "ゴシック・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "オールドスクール・ヒップホップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "ダンスホール",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ハードコア・パンク",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "シンセポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "エレクトロ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "スラッシュメタル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "オルタナティブ・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "インディー・ロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "ヒップホップ黄金時代",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "ハウス",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "ギャングスタ・ラップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "テクノ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "「ワールド・ミュージック」市場分類",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "シューゲイザー",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "オルタナティブ・ヒップホップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "ダンス・ポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "グランジ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "ネオ・ソウル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "トランス",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "ブリットポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ドラムンベース",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ポストロック",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "エモの初期二波",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "ニュー・メタル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "EDMフェスティバル文化",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "トラップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "現代インディー・ポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "ドリル",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "ストリーミング時代の世界的ポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "ハイパーポップ",
            "description": "この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// 楽器・音響技術・制作ツール
var tl_instruments = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "紀元前1万年以前の旧石器時代骨笛（圧縮表示）",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-7999",
            "title": "初期の枠太鼓とラトル",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-3499",
            "title": "メソポタミアのリラとハープ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-2999",
            "title": "エジプトの弓形ハープ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-2499",
            "title": "シュメールの雄牛頭リラ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1999",
            "title": "中国の初期琴系ツィター",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1499",
            "title": "東アジア儀礼合奏の青銅鐘",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1199",
            "title": "ギリシア世界のアウロスとキタラ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0999",
            "title": "笙の初期形態",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0699",
            "title": "中国の大編鐘セット",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0499",
            "title": "水力オルガン（ヒュドラウリス）",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0200",
            "title": "オルガン技術がローマ世界へ普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0500",
            "title": "ウード系楽器の発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0700",
            "title": "琵琶が中国宮廷音楽の中心楽器へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0800",
            "title": "雅楽の笙",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0900",
            "title": "擦弦楽器レバブの伝統が拡大",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1000",
            "title": "中世ヨーロッパのハープとプサルテリウム",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1100",
            "title": "教会の大型パイプオルガン発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1200",
            "title": "ウード系楽器からヨーロッパのリュートが発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1200",
            "title": "西アフリカのコラ伝統発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1300",
            "title": "サントゥール／ハンマーダルシマー系の普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1400",
            "title": "クラヴィコードがヨーロッパ鍵盤文化へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1450",
            "title": "チェンバロ系楽器の発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1500",
            "title": "ヴィオラ・ダ・ガンバ属",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1520",
            "title": "北イタリアで近代ヴァイオリン属が成立",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1550",
            "title": "北インドでシタール発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1560",
            "title": "ルネサンス期ヨーロッパの横笛改良",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1600",
            "title": "箏が日本芸術音楽に定着",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1600",
            "title": "三味線が日本で普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1650",
            "title": "ストラディヴァリとクレモナ製作派",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1680",
            "title": "シャリュモーからクラリネットが発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1700",
            "title": "クリストフォリがピアノを開発",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1720",
            "title": "現存最古のクリストフォリ製ピアノ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1730",
            "title": "近代オーボエ／ファゴット属の定着",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1750",
            "title": "古典派オーケストラの弦楽配置が標準化",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1770",
            "title": "フォルテピアノが演奏会と家庭の主要楽器へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1814",
            "title": "メルツェルが近代メトロノームを特許化",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1821",
            "title": "自由簧ハーモニカの発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1829",
            "title": "アコーディオン特許",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1830",
            "title": "ダブルアクション式近代コンサートハープ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1832",
            "title": "ベーム式フルート開発開始",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1835",
            "title": "チューバ特許",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1846",
            "title": "アドルフ・サックスがサクソフォーンを特許化",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1850",
            "title": "近代コンサートグランド構造が定着",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1860",
            "title": "バンドネオンがタンゴ文化へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1870",
            "title": "近代ドラムセットの要素が統合開始",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1880",
            "title": "スチール弦アコースティックギター発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1890",
            "title": "行進演奏用スーザフォン開発",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1906",
            "title": "テルハーモニウム公開実演",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1919",
            "title": "テルミン発明",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1924",
            "title": "電気マイクが演奏と録音を変革",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1928",
            "title": "オンド・マルトノ発表",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1931",
            "title": "商用エレクトリックギター登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1934",
            "title": "ハモンドオルガン登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1935",
            "title": "ドイツで磁気テープ録音が進展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1939",
            "title": "近代エレクトリックベースの試作",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1940",
            "title": "トリニダード・トバゴでスティールパン発展",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1948",
            "title": "多重録音実験",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1950",
            "title": "フェンダー・テレキャスター量産",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1951",
            "title": "フェンダー・プレシジョンベース登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1954",
            "title": "フェンダー・ストラトキャスター登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1957",
            "title": "RCA Mark II サウンド・シンセサイザー",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1960",
            "title": "携帯型トランジスターオルガンと電気鍵盤の普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1963",
            "title": "メロトロン登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1964",
            "title": "モーグ・モジュラーシンセ実演",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1965",
            "title": "ファズなどエフェクターがギター音色を変革",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1970",
            "title": "ミニモーグ登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1971",
            "title": "ARP 2600 セミモジュラーシンセ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1972",
            "title": "ターンテーブル技法がヒップホップの作曲楽器へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1975",
            "title": "ポリフォニックシンセが普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1979",
            "title": "Fairlight CMI サンプリングワークステーション",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1980",
            "title": "Roland TR-808 ドラムマシン",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1981",
            "title": "Roland TB-303 ベースシンセ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1982",
            "title": "デジタルシンセが大衆市場へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1983",
            "title": "MIDI公開実演・標準化",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1983",
            "title": "Yamaha DX7 登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1984",
            "title": "低価格デジタルサンプラー普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1987",
            "title": "Akai MPC シリーズ開始",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1989",
            "title": "デジタル・オーディオ・ワークステーション登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1997",
            "title": "Auto-Tune 登場",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1999",
            "title": "ソフトウェア音源とラップトップ制作拡大",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2001",
            "title": "Ableton Live 発売",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2007",
            "title": "スマートフォンが音楽制作・演奏基盤へ",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2010",
            "title": "タブレット楽器とタッチ操作普及",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2020",
            "title": "パンデミック期にネット遠隔演奏ツール拡大",
            "description": "楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        }
    ]
};

// 記譜・理論・制度・音楽産業
var tl_systems = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1399",
            "title": "フルリ語賛歌粘土板",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "-0499",
            "title": "ギリシア音律理論発展",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "-0299",
            "title": "中国の律管・調式理論体系化",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0100",
            "title": "セイキロスの墓碑銘が完全な古代記譜を保存",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0200",
            "title": "『ナーティヤ・シャーストラ』が南アジア演劇音楽理論を体系化",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0500",
            "title": "ボエティウスが古代音楽理論を中世欧州へ伝える",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0800",
            "title": "西方聖歌でネウマ記譜普及",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1025",
            "title": "グイード・ダレッツォが譜線教育法を発展",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1250",
            "title": "定量記譜法が計量的多声部を可能に",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1320",
            "title": "アルス・ノーヴァ記譜がリズム可能性を拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1450",
            "title": "楽譜写本工房が流通を拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1501",
            "title": "ペトルッチが多声音楽の重要印刷譜を出版",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1558",
            "title": "ザルリーノ『和声論』出版",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1597",
            "title": "初期オペラ《ダフネ》上演",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1607",
            "title": "モンテヴェルディ《オルフェオ》が持続的オペラモデルを確立",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1637",
            "title": "ヴェネツィアに最初の公共オペラ劇場",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1669",
            "title": "パリ・オペラ座創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1672",
            "title": "ロンドンで継続的公開演奏会",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1710",
            "title": "彫版楽譜出版が欧州で拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1725",
            "title": "フックス《パルナッソス山への階梯》出版",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1750",
            "title": "公開演奏会文化が欧州で拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1771",
            "title": "ウィーン音楽家協会が公開管弦楽演奏会を支援",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1795",
            "title": "パリ音楽院創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1808",
            "title": "大規模公開慈善演奏会が近代コンサート規模を示す",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1813",
            "title": "ロンドン王立フィルハーモニー協会創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1824",
            "title": "ベートーヴェン第九が交響曲・合唱・公共的人文主義を結ぶ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1842",
            "title": "ニューヨーク・フィル創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1843",
            "title": "ライプツィヒ音楽院創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1857",
            "title": "フォノトグラフが音波を記録",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1867",
            "title": "著作権・演奏権制度が欧州で拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1877",
            "title": "エジソンが蓄音機で録音再生を実演",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1887",
            "title": "グラモフォン円盤方式特許",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1891",
            "title": "カーネギー・ホール開館",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1897",
            "title": "グラモフォン社設立",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1901",
            "title": "ビクター・トーキング・マシン社設立",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1906",
            "title": "ヴィクトローラが録音音楽を家庭家具文化へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1914",
            "title": "ASCAP 設立",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1920",
            "title": "商業ラジオ放送が音楽聴衆を再編",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1925",
            "title": "電気録音が機械式録音に代わる",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1927",
            "title": "長編トーキーが映画音楽を加速",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1935",
            "title": "放送規模で磁気テープ録音実演",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1936",
            "title": "Billboard が主要音楽チャートを掲載",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1948",
            "title": "コロムビアが33⅓回転LPを導入",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1949",
            "title": "RCAが45回転シングルを導入",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1954",
            "title": "携帯トランジスターラジオが若者の聴取を拡大",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1958",
            "title": "グラミー賞制度開始",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1958",
            "title": "ステレオLPが商業標準へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1962",
            "title": "コンパクトカセット登場",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1964",
            "title": "モーグが電圧制御電子制作を確立",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1967",
            "title": "雑誌 Rolling Stone 創刊",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1979",
            "title": "ウォークマンが個人携帯聴取を主流化",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1981",
            "title": "MTV 開局",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1982",
            "title": "コンパクトディスク商用化",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1983",
            "title": "MIDI 1.0 公開",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1985",
            "title": "ペアレンタル・アドバイザリー論争が表示制度を変える",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1988",
            "title": "DAT 市場投入",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1991",
            "title": "SoundScan がチャート集計を変革",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1993",
            "title": "MP3規格と初期実装",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1995",
            "title": "「.mp3」拡張子採用",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1999",
            "title": "Napster がP2P音楽共有開始",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2001",
            "title": "iPod 発売",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2003",
            "title": "iTunes Music Store 開始",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2005",
            "title": "YouTube 開始",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2007",
            "title": "SoundCloud 創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2008",
            "title": "Bandcamp 創設",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2008",
            "title": "Spotify 開始",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2011",
            "title": "世界同時発売日の調整が進展",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2015",
            "title": "金曜日が世界共通発売日へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2015",
            "title": "ストリーミングがチャートと認定制度の中心へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2017",
            "title": "定額ストリーミングが録音産業成長の中心へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2020",
            "title": "COVID-19休演期に配信ライブが大衆形式へ",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2023",
            "title": "生成AIが著作・学習データ・音楽労働の議論を加速",
            "description": "記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        }
    ]
};

// 作曲家と芸術音楽の革新者
var tl_classical_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0609",
            "title": "Sappho（630 BCE–c. 570 BCE）— 20歳",
            "description": "20歳時点の表示。古代・儀礼音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "0497",
            "title": "Boethius（477–524）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた理論家／音楽思想家。"
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen（1098–1179）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1170",
            "title": "Léonin（1150–1201）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1180",
            "title": "Pérotin（1160–1230）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut（1300–1377）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1345",
            "title": "Francesco Landini（1325–1397）— 20歳",
            "description": "20歳時点の表示。中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay（1397–1474）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem（1410–1497）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1470",
            "title": "Josquin des Prez（1450–1521）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1510",
            "title": "Adrian Willaert（1490–1562）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina（1525–1594）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso（1532–1594）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1560",
            "title": "William Byrd（1540–1623）— 20歳",
            "description": "20歳時点の表示。ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi（1567–1643）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi（1583–1643）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz（1585–1672）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully（1632–1687）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude（1637–1707）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli（1653–1713）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1679",
            "title": "Henry Purcell（1659–1695）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti（1660–1725）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1688",
            "title": "François Couperin（1668–1733）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi（1678–1741）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann（1681–1767）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau（1683–1764）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti（1685–1757）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "George Frideric Handel（1685–1759）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach（1685–1750）— 20歳",
            "description": "20歳時点の表示。バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach（1714–1788）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck（1714–1787）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1752",
            "title": "Joseph Haydn（1732–1809）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini（1743–1805）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1770",
            "title": "Antonio Salieri（1750–1825）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart（1756–1791）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven（1770–1827）— 20歳",
            "description": "20歳時点の表示。古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini（1782–1840）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber（1786–1826）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini（1792–1868）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1817",
            "title": "Franz Schubert（1797–1828）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1823",
            "title": "Hector Berlioz（1803–1869）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka（1804–1857）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn（1809–1847）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin（1810–1849）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1830",
            "title": "Robert Schumann（1810–1856）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1831",
            "title": "Franz Liszt（1811–1886）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi（1813–1901）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1833",
            "title": "Richard Wagner（1813–1883）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1839",
            "title": "Clara Schumann（1819–1896）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach（1819–1880）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1844",
            "title": "Anton Bruckner（1824–1896）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana（1824–1884）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1845",
            "title": "Johann Strauss II（1825–1899）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1853",
            "title": "Johannes Brahms（1833–1897）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns（1835–1921）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1858",
            "title": "Georges Bizet（1838–1875）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky（1839–1881）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky（1840–1893）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák（1841–1904）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1863",
            "title": "Edvard Grieg（1843–1907）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov（1844–1908）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré（1845–1924）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini（1858–1924）— 20歳",
            "description": "20歳時点の表示。オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1880",
            "title": "Gustav Mahler（1860–1911）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1882",
            "title": "Claude Debussy（1862–1918）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1884",
            "title": "Richard Strauss（1864–1949）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1885",
            "title": "Jean Sibelius（1865–1957）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1886",
            "title": "Erik Satie（1866–1925）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams（1872–1958）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff（1873–1943）— 20歳",
            "description": "20歳時点の表示。ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg（1874–1951）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1894",
            "title": "Gustav Holst（1874–1934）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1895",
            "title": "Maurice Ravel（1875–1937）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1901",
            "title": "Béla Bartók（1881–1945）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky（1882–1971）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1903",
            "title": "Anton Webern（1883–1945）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1905",
            "title": "Alban Berg（1885–1935）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev（1891–1953）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1912",
            "title": "Arthur Honegger（1892–1955）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1912",
            "title": "Darius Milhaud（1892–1974）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1915",
            "title": "Carl Orff（1895–1982）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1915",
            "title": "Paul Hindemith（1895–1963）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1918",
            "title": "George Gershwin（1898–1937）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1920",
            "title": "Aaron Copland（1900–1990）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich（1906–1975）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen（1908–1992）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1932",
            "title": "John Cage（1912–1992）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1933",
            "title": "Benjamin Britten（1913–1976）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein（1918–1990）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1943",
            "title": "György Ligeti（1923–2006）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1945",
            "title": "Pierre Boulez（1925–2016）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen（1928–2007）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu（1930–1996）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1955",
            "title": "Arvo Pärt（born 1935）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1956",
            "title": "Steve Reich（born 1936）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1957",
            "title": "Philip Glass（born 1937）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1967",
            "title": "John Adams（born 1947）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho（1952–2023）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1977",
            "title": "Tan Dun（born 1957）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1981",
            "title": "Unsuk Chin（born 1961）— 20歳",
            "description": "20歳時点の表示。近現代芸術音楽に大きな影響を与えた作曲家。"
        }
    ]
};

// ブルース・ジャズ・ゴスペル・R&B・ソウル・ファンクの人物
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin（1868–1917）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1893",
            "title": "W. C. Handy（1873–1958）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた作曲家。"
        },
        {
            "start": "1906",
            "title": "Ma Rainey（1886–1939）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton（1890–1941）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1914",
            "title": "Bessie Smith（1894–1937）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson（1897–1952）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford（1897–1952）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1917",
            "title": "Sidney Bechet（1897–1959）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1919",
            "title": "Duke Ellington（1899–1974）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1921",
            "title": "Louis Armstrong（1901–1971）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke（1903–1931）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins（1904–1969）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1924",
            "title": "Count Basie（1904–1984）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1924",
            "title": "Fats Waller（1904–1943）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1929",
            "title": "Art Tatum（1909–1956）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1930",
            "title": "Django Reinhardt（1910–1953）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf（1910–1976）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1930",
            "title": "T-Bone Walker（1910–1975）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1931",
            "title": "Robert Johnson（1911–1938）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1933",
            "title": "Muddy Waters（1913–1983）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Billie Holiday（1915–1959）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe（1915–1973）— 20歳",
            "description": "20歳時点の表示。ゴスペルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1936",
            "title": "Charlie Christian（1916–1942）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie（1917–1993）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald（1917–1996）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1937",
            "title": "Thelonious Monk（1917–1982）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1940",
            "title": "Charlie Parker（1920–1955）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1940",
            "title": "Dave Brubeck（1920–2012）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1942",
            "title": "Charles Mingus（1922–1979）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1944",
            "title": "Bud Powell（1924–1966）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan（1924–1990）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1945",
            "title": "B. B. King（1925–2015）— 20歳",
            "description": "20歳時点の表示。ブルースに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1946",
            "title": "John Coltrane（1926–1967）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1946",
            "title": "Miles Davis（1926–1991）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1949",
            "title": "Bill Evans（1929–1980）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1949",
            "title": "Cecil Taylor（1929–2018）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1949",
            "title": "Chet Baker（1929–1988）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1950",
            "title": "Clifford Brown（1930–1986）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1950",
            "title": "Ornette Coleman（1930–2015）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1950",
            "title": "Ray Charles（1930–2004）— 20歳",
            "description": "20歳時点の表示。リズム・アンド・ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1950",
            "title": "Sonny Rollins（born 1930）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1951",
            "title": "Sam Cooke（1931–1964）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "James Brown（1933–2006）— 20歳",
            "description": "20歳時点の表示。ファンクに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Nina Simone（1933–2006）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Wayne Shorter（1933–2023）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1959",
            "title": "Marvin Gaye（1939–1984）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1960",
            "title": "Herbie Hancock（born 1940）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "Chick Corea（1941–2021）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "George Clinton（born 1941）— 20歳",
            "description": "20歳時点の表示。ファンクに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1961",
            "title": "Otis Redding（1941–1967）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Aretha Franklin（1942–2018）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield（1942–1999）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Sly Stone（born 1943）— 20歳",
            "description": "20歳時点の表示。ファンクに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1965",
            "title": "Keith Jarrett（born 1945）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1966",
            "title": "Al Green（born 1946）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1970",
            "title": "Stevie Wonder（born 1950）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1974",
            "title": "Pat Metheny（born 1954）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1978",
            "title": "Prince（1958–2016）— 20歳",
            "description": "20歳時点の表示。ファンクに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis（born 1961）— 20歳",
            "description": "20歳時点の表示。ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1991",
            "title": "Erykah Badu（born 1971）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1994",
            "title": "D’Angelo（born 1974）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "2001",
            "title": "Beyoncé（born 1981）— 20歳",
            "description": "20歳時点の表示。リズム・アンド・ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "2003",
            "title": "Amy Winehouse（1983–2011）— 20歳",
            "description": "20歳時点の表示。ソウルに大きな影響を与えた歌手。"
        }
    ]
};

// ロック・ポップ・カントリー・ヒップホップ・電子音楽の人物
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers（1897–1933）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1931",
            "title": "Bill Monroe（1911–1996）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1932",
            "title": "Woody Guthrie（1912–1967）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1935",
            "title": "Frank Sinatra（1915–1998）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Édith Piaf（1915–1963）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Nat King Cole（1919–1965）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Pete Seeger（1919–2014）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1943",
            "title": "Hank Williams（1923–1953）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1946",
            "title": "Chuck Berry（1926–2017）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1948",
            "title": "Bo Diddley（1928–2008）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1948",
            "title": "Fats Domino（1928–2017）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Johnny Cash（1932–2003）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1952",
            "title": "Little Richard（1932–2020）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Patsy Cline（1932–1963）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Willie Nelson（born 1933）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1954",
            "title": "Leonard Cohen（1934–2016）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1954",
            "title": "The Isley Brothers 結成",
            "description": "リズム・アンド・ブルースに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1955",
            "title": "Elvis Presley（1935–1977）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis（1935–2022）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1956",
            "title": "Buddy Holly（1936–1959）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1956",
            "title": "Roy Orbison（1936–1988）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1957",
            "title": "The Supremes 結成",
            "description": "ソウルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder（born 1940）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1960",
            "title": "John Lennon（1940–1980）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1960",
            "title": "Ringo Starr（born 1940）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1960",
            "title": "The Beatles 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1961",
            "title": "Bob Dylan（born 1941）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1961",
            "title": "Joan Baez（born 1941）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えた歌手。"
        },
        {
            "start": "1961",
            "title": "The Beach Boys 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1962",
            "title": "Barbra Streisand（born 1942）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Brian Wilson（born 1942）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Carole King（born 1942）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix（1942–1970）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1962",
            "title": "Paul McCartney（born 1942）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "The Rolling Stones 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1963",
            "title": "George Harrison（1943–2001）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Janis Joplin（1943–1970）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1963",
            "title": "Jim Morrison（1943–1971）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1963",
            "title": "Joni Mitchell（born 1943）— 20歳",
            "description": "20歳時点の表示。フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Keith Richards（born 1943）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1963",
            "title": "Mick Jagger（born 1943）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1964",
            "title": "Jimmy Page（born 1944）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1964",
            "title": "The Who 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1965",
            "title": "Debbie Harry（born 1945）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Eric Clapton（born 1945）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister（1945–2015）— 20歳",
            "description": "20歳時点の表示。ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Pink Floyd 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1965",
            "title": "The Doors 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1966",
            "title": "Dolly Parton（born 1946）— 20歳",
            "description": "20歳時点の表示。カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1966",
            "title": "Freddie Mercury（1946–1991）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1966",
            "title": "Patti Smith（born 1946）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1966",
            "title": "The Velvet Underground 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1967",
            "title": "Brian May（born 1947）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1967",
            "title": "Carlos Santana（born 1947）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1967",
            "title": "David Bowie（1947–2016）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1967",
            "title": "Elton John（born 1947）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1967",
            "title": "Iggy Pop（born 1947）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Black Sabbath 結成",
            "description": "ヘヴィメタルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1968",
            "title": "Brian Eno（born 1948）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre（born 1948）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1968",
            "title": "Led Zeppelin 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne（born 1948）— 20歳",
            "description": "20歳時点の表示。ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Robert Plant（born 1948）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Stevie Nicks（born 1948）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1968",
            "title": "Tony Iommi（born 1948）— 20歳",
            "description": "20歳時点の表示。ヘヴィメタルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen（born 1949）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1970",
            "title": "Kraftwerk 結成",
            "description": "電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1970",
            "title": "Peter Gabriel（born 1950）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1970",
            "title": "Queen 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1970",
            "title": "Tom Petty（1950–2017）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1971",
            "title": "Eagles 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1971",
            "title": "Joey Ramone（1951–2001）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1972",
            "title": "David Byrne（born 1952）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1974",
            "title": "Ramones 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc（born 1955）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen（1955–2020）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1975",
            "title": "Sex Pistols 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "Johnny Rotten（born 1956）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1976",
            "title": "Joy Division 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "The Clash 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "U2 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa（born 1957）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux（born 1957）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1977",
            "title": "Talking Heads 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash（born 1958）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1978",
            "title": "Kate Bush（born 1958）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1978",
            "title": "Madonna（born 1958）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "Michael Jackson（1958–2009）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "The Cure 結成",
            "description": "パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1979",
            "title": "Morrissey（born 1959）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1979",
            "title": "Robert Smith（born 1959）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1980",
            "title": "Chuck D（born 1960）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1981",
            "title": "Metallica 結成",
            "description": "ヘヴィメタルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1983",
            "title": "George Michael（born 1963）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1983",
            "title": "James Hetfield（born 1963）— 20歳",
            "description": "20歳時点の表示。ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1983",
            "title": "Johnny Marr（born 1963）— 20歳",
            "description": "20歳時点の表示。パンク／オルタナティブ・ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1983",
            "title": "Lars Ulrich（born 1963）— 20歳",
            "description": "20歳時点の表示。ヘヴィメタルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. 結成",
            "description": "ヒップホップに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1983",
            "title": "Whitney Houston（born 1963）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Björk（born 1965）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Dr. Dre（born 1965）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1985",
            "title": "KRS-One（born 1965）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Radiohead 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1986",
            "title": "Janet Jackson（born 1966）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1987",
            "title": "Kurt Cobain（1967–1994）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1987",
            "title": "Nirvana 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest 結成",
            "description": "ヒップホップに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "Celine Dion（born 1968）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "LL Cool J（born 1968）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "Massive Attack 結成",
            "description": "電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "Rakim（born 1968）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "Thom Yorke（born 1968）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1989",
            "title": "Dave Grohl（born 1969）— 20歳",
            "description": "20歳時点の表示。ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1989",
            "title": "Ice Cube（born 1969）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Jay-Z（born 1969）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Mariah Carey（born 1969）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1991",
            "title": "Aphex Twin（born 1971）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1991",
            "title": "Missy Elliott（born 1971）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1991",
            "title": "Oasis 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1991",
            "title": "Tupac Shakur（1971–1996）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "Eminem（born 1972）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G.（1972–1997）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1993",
            "title": "Daft Punk 結成",
            "description": "電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1993",
            "title": "Nas（born 1973）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "Lauryn Hill（born 1975）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "M.I.A.（born 1975）— 20歳",
            "description": "20歳時点の表示。電子音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "The White Stripes 結成",
            "description": "ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1997",
            "title": "Kanye West（born 1977）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "2002",
            "title": "Nicki Minaj（born 1982）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "2006",
            "title": "Lady Gaga（born 1986）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar（born 1987）— 20歳",
            "description": "20歳時点の表示。ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "2008",
            "title": "Adele（born 1988）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2009",
            "title": "Taylor Swift（born 1989）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2021",
            "title": "Billie Eilish（born 2001）— 20歳",
            "description": "20歳時点の表示。ポピュラー音楽に大きな影響を与えた歌手。"
        }
    ]
};

// 世界各地域の音楽家
var tl_global_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1273",
            "title": "Amir Khusrau（1253–1325）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1520",
            "title": "Tansen（1500–1586）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu（1536–1611）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた理論家／音楽思想家。"
        },
        {
            "start": "1782",
            "title": "Syama Sastri（1762–1827）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1787",
            "title": "Tyagaraja（1767–1847）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar（1775–1835）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing)（1889–1935）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1910",
            "title": "Carlos Gardel（1890–1935）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1915",
            "title": "Liu Tianhua（1895–1932）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1918",
            "title": "Umm Kulthum（1898–1975）— 20歳",
            "description": "20歳時点の表示。中東・北アフリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1925",
            "title": "Xian Xinghai（1905–1945）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1932",
            "title": "Nie Er（1912–1935）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1936",
            "title": "Bismillah Khan（1916–2016）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi（1916–2004）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1936",
            "title": "Ravi Shankar（1916–2013）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1938",
            "title": "Zhou Xuan（1918–1957）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Chavela Vargas（1919–2012）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan（1920–2012）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla（1921–1992）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1943",
            "title": "Tito Puente（1923–2000）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1945",
            "title": "Celia Cruz（1925–2003）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim（1927–1994）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1951",
            "title": "João Gilberto（1931–2019）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Miriam Makeba（1932–2008）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1954",
            "title": "Fairuz（born 1934）— 20歳",
            "description": "20歳時点の表示。中東・北アフリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa（1935–2009）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry（1936–2021）— 20歳",
            "description": "20歳時点の表示。レゲエ／ジャマイカ音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1957",
            "title": "Hibari Misora（1937–1989）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1958",
            "title": "Fela Kuti（1938–1997）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré（1939–2006）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "Cesária Évora（1941–2011）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Caetano Veloso（born 1942）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Gilberto Gil（born 1942）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Milton Nascimento（born 1942）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff（born 1944）— 20歳",
            "description": "20歳時点の表示。レゲエ／ジャマイカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1964",
            "title": "Peter Tosh（1944–1987）— 20歳",
            "description": "20歳時点の表示。レゲエ／ジャマイカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Bob Marley（1945–1981）— 20歳",
            "description": "20歳時点の表示。レゲエ／ジャマイカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan（1948–1997）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1969",
            "title": "Salif Keita（born 1949）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1970",
            "title": "Juan Gabriel（1950–2016）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1971",
            "title": "Zakir Hussain（1951–2024）— 20歳",
            "description": "20歳時点の表示。南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto（1952–2023）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1973",
            "title": "Kitarō（born 1953）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1973",
            "title": "Teresa Teng（1953–1995）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra 結成",
            "description": "電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour（born 1959）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo（born 1960）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Faye Wong（born 1969）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1991",
            "title": "Selena（1971–1995）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys 結成",
            "description": "東アジア音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1997",
            "title": "Shakira（born 1977）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1999",
            "title": "Jay Chou（born 1979）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2003",
            "title": "Hikaru Utada（born 1983）— 20歳",
            "description": "20歳時点の表示。東アジア音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2011",
            "title": "Burna Boy（born 1991）— 20歳",
            "description": "20歳時点の表示。アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2013",
            "title": "BTS 結成",
            "description": "ポピュラー音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "2014",
            "title": "Bad Bunny（born 1994）— 20歳",
            "description": "20歳時点の表示。ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2016",
            "title": "BLACKPINK 結成",
            "description": "ポピュラー音楽に大きな影響を与えたグループの結成。"
        }
    ]
};

// 主要作品・オペラ・ミュージカル・初演
var tl_works = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1151",
            "title": "ヒルデガルト《オルド・ヴィルトゥトゥム》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1360",
            "title": "マショー《ノートルダム・ミサ》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1597",
            "title": "ペーリ／コルシ《ダフネ》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1607",
            "title": "モンテヴェルディ《オルフェオ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1642",
            "title": "モンテヴェルディ《ポッペアの戴冠》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1689",
            "title": "パーセル《ディドとエネアス》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1711",
            "title": "ヘンデル《リナルド》ロンドン初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1721",
            "title": "バッハ《ブランデンブルク協奏曲》成立",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1725",
            "title": "ヴィヴァルディ《四季》出版",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1741",
            "title": "バッハ《ゴルトベルク変奏曲》出版",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1742",
            "title": "ヘンデル《メサイア》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1749",
            "title": "ヘンデル《王宮の花火の音楽》",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1762",
            "title": "グルック《オルフェオとエウリディーチェ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1786",
            "title": "モーツァルト《フィガロの結婚》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1787",
            "title": "モーツァルト《ドン・ジョヴァンニ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1791",
            "title": "モーツァルト《魔笛》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1805",
            "title": "ベートーヴェン《英雄》公開初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1808-12-22",
            "title": "ベートーヴェン第5・第6交響曲初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1816",
            "title": "ロッシーニ《セビリアの理髪師》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1821",
            "title": "ウェーバー《魔弾の射手》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1824-05-07",
            "title": "ベートーヴェン第9交響曲初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1830",
            "title": "ベルリオーズ《幻想交響曲》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1831",
            "title": "ベッリーニ《ノルマ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1842",
            "title": "ヴェルディ《ナブッコ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1845",
            "title": "メンデルスゾーン《ヴァイオリン協奏曲》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1853",
            "title": "ヴェルディ《椿姫》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1865",
            "title": "ワーグナー《トリスタンとイゾルデ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1871",
            "title": "ヴェルディ《アイーダ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1876",
            "title": "《ニーベルングの指環》全曲がバイロイトで上演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1877",
            "title": "チャイコフスキー《白鳥の湖》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1882",
            "title": "ワーグナー《パルジファル》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1888",
            "title": "リムスキー＝コルサコフ《シェヘラザード》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1890",
            "title": "マスカーニ《カヴァレリア・ルスティカーナ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1892",
            "title": "チャイコフスキー《くるみ割り人形》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1893",
            "title": "ドヴォルザーク《新世界より》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1896",
            "title": "プッチーニ《ラ・ボエーム》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1900",
            "title": "プッチーニ《トスカ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1902",
            "title": "ドビュッシー《ペレアスとメリザンド》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1905",
            "title": "R.シュトラウス《サロメ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1910",
            "title": "ストラヴィンスキー《火の鳥》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1911",
            "title": "ストラヴィンスキー《ペトルーシュカ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1912",
            "title": "シェーンベルク《月に憑かれたピエロ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1913-05-29",
            "title": "《春の祭典》パリ初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1918",
            "title": "ホルスト《惑星》全曲公開演奏",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1924-02-12",
            "title": "ガーシュウィン《ラプソディ・イン・ブルー》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1925",
            "title": "ベルク《ヴォツェック》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1927",
            "title": "《ショウ・ボート》ブロードウェイ開幕",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1928",
            "title": "ラヴェル《ボレロ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1935",
            "title": "《ポーギーとベス》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1937",
            "title": "オルフ《カルミナ・ブラーナ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1943",
            "title": "《オクラホマ！》ブロードウェイ開幕",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1944",
            "title": "コープランド《アパラチアの春》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1945",
            "title": "ブリテン《ピーター・グライムズ》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1952-08-29",
            "title": "ケージ《4分33秒》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1956",
            "title": "シュトックハウゼン《少年の歌》完成",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1957",
            "title": "《ウエスト・サイド物語》ブロードウェイ開幕",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1958",
            "title": "ヴァレーズ《ポエム・エレクトロニク》ブリュッセル万博",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1964",
            "title": "テリー・ライリー《In C》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1976",
            "title": "グラス《浜辺のアインシュタイン》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1977",
            "title": "《スター・ウォーズ》が大作管弦映画音楽モデルを再確立",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1987",
            "title": "ジョン・アダムズ《中国のニクソン》初演",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "2015",
            "title": "《ハミルトン》ブロードウェイ開幕",
            "description": "音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        }
    ]
};

// 画期的な録音・シングル・アルバム
var tl_recordings = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1902",
            "title": "Enrico Caruso — Vesti la giubba",
            "description": "古典派音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "古典派音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "古典派音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "南アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "ラテンアメリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "ファンクの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "ラテンアメリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "中東・北アフリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "レゲエ／ジャマイカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "ジャズの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "レゲエ／ジャマイカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "世界音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "南アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "南アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "ヘヴィメタルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "パンク／オルタナティブ・ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "ラテンアメリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "ソウルの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "ロックの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "フォーク／シンガーソングライターの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "電子音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "東アジア音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "ヒップホップの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "ラテンアメリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "ラテンアメリカ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "リズム・アンド・ブルースの画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "カントリー／ルーツ音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "ポピュラー音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "アフリカの大衆・伝統音楽の画期的録音。発売後、レパートリー、制作、演奏、音楽文化のいずれかに大きな影響を与えた。"
        }
    ]
};

// 歴史的コンサート・フェスティバル・ツアー
var tl_concerts = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1749-04-27",
            "title": "ヘンデル《王宮の花火の音楽》公開リハーサル",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1808-12-22",
            "title": "ベートーヴェンのウィーン大演奏会",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1824-05-07",
            "title": "ベートーヴェン第九初演演奏会",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1850-09-11",
            "title": "ジェニー・リンドの米国ツアー開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1871",
            "title": "フィスク・ジュビリー・シンガーズ大規模巡演開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1876-08-13",
            "title": "第1回バイロイト音楽祭が《指環》で開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1891-05-05",
            "title": "カーネギー・ホール開館演奏会",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1912-05-02",
            "title": "クレフ・クラブ管弦楽団カーネギー公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1913-05-29",
            "title": "《春の祭典》初演と観客騒動",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1924-02-12",
            "title": "「現代音楽の実験」で《ラプソディ・イン・ブルー》初演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1938-01-16",
            "title": "ベニー・グッドマンのカーネギー・ホール公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1939-04-09",
            "title": "マリアン・アンダーソン、リンカーン記念堂で歌唱",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1943-01-23",
            "title": "デューク・エリントンがカーネギーで《Black, Brown and Beige》",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1954-07-17",
            "title": "第1回ニューポート・ジャズ・フェスティバル",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1959-07-11",
            "title": "第1回ニューポート・フォーク・フェスティバル",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1964-02-12",
            "title": "ビートルズ、カーネギー・ホール公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1965-07-25",
            "title": "ボブ・ディラン、ニューポートでエレクトリック化",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1965-08-15",
            "title": "ビートルズ、シェイ・スタジアム公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1966-06-30",
            "title": "ビートルズ日本武道館公演開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1967-06-16",
            "title": "モントレー国際ポップ・フェスティバル開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1968-12-11",
            "title": "ローリング・ストーンズ「ロックンロール・サーカス」収録",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1969-12-06",
            "title": "オルタモント無料コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1969-08-15",
            "title": "ウッドストック音楽芸術祭開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1970-08-26",
            "title": "ワイト島フェスティバル1970開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1971-08-01",
            "title": "バングラデシュ救済コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1971",
            "title": "ピンク・フロイド《ライヴ・アット・ポンペイ》撮影",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1972-08-20",
            "title": "ワッツタックス・フェスティバル",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1973-01-14",
            "title": "エルヴィス「アロハ・フロム・ハワイ」衛星公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1974-09-22",
            "title": "ザイール74音楽祭開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1976-06-04",
            "title": "セックス・ピストルズ、マンチェスター公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1976-11-25",
            "title": "ザ・バンド「ラスト・ワルツ」公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1978-04-22",
            "title": "キングストン「ワン・ラブ・ピース・コンサート」",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1979-09-19",
            "title": "マディソン・スクエア・ガーデン「No Nukes」開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1979",
            "title": "YMO ワールドツアー",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1981-11-24",
            "title": "クイーン「ロック・モントリオール」公演開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1982-09-03",
            "title": "USフェスティバル開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1983-03-25",
            "title": "テレビ公演「Motown 25」収録",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1985-07-13",
            "title": "ライブ・エイド",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1985",
            "title": "ヌスラット・ファテ・アリー・ハーンが国際フェス層へ",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1986-04-05",
            "title": "ジャン＝ミシェル・ジャール「ランデヴー・ヒューストン」",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1988-06-11",
            "title": "ネルソン・マンデラ70歳記念コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1990-07-21",
            "title": "ロジャー・ウォーターズ、ベルリンで《ザ・ウォール》",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1992",
            "title": "第1回パヴァロッティ＆フレンズ慈善公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1992-04-20",
            "title": "フレディ・マーキュリー追悼コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1993-11-18",
            "title": "ニルヴァーナ「MTVアンプラグド」ニューヨーク収録",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1994-08-12",
            "title": "ウッドストック94開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1996-06-15",
            "title": "第1回チベタン・フリーダム・コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1996-08-10",
            "title": "オアシス、ネブワース公演開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1998-07-01",
            "title": "ブエナ・ビスタ・ソシアル・クラブ、カーネギー公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1999-04-21",
            "title": "メタリカ、サンフランシスコ交響楽団と《S&M》収録",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1999-07-22",
            "title": "ウッドストック99開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2001-10-20",
            "title": "ニューヨーク市支援コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2003-07-30",
            "title": "トロントSARS支援大コンサート",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2005-07-02",
            "title": "ライブ8",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2006-04-29",
            "title": "ダフト・パンク、コーチェラのピラミッド公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2007-12-10",
            "title": "レッド・ツェッペリンO2再結成公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2011-06-26",
            "title": "ビヨンセ、グラストンベリーのヘッドライナー",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2012-12-12",
            "title": "ハリケーン・サンディ支援「12-12-12」",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2018-04-14",
            "title": "ビヨンセ、コーチェラ「Homecoming」公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2019-06-01",
            "title": "BTS ウェンブリー・スタジアム公演開始",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2020-04-18",
            "title": "「One World: Together at Home」配信公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK、コーチェラのヘッドライナー",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-03-17",
            "title": "テイラー・スウィフト「The Eras Tour」開幕",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-09-29",
            "title": "U2、ラスベガスSphere開幕公演",
            "description": "歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
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
