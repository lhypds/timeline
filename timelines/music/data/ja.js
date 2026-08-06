var title = "音楽タイムライン";

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
            "description": "Deep musical prehistory before 10,000 BCE and Neolithic ritual music<br>SIMILE は紀元前1万年以前を表現できないため、旧石器時代の骨笛など最古の証拠をこの境界に集約し、その後の新石器時代の儀礼・共同体音楽へ接続する。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "メソポタミアの神殿・宮廷音楽",
            "description": "Mesopotamian temple and court music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "古代エジプト音楽",
            "description": "Ancient Egyptian music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "古代中国の青銅鐘・礼楽",
            "description": "Bronze-bell and ritual music in ancient China<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "ヴェーダ詠唱",
            "description": "Vedic chant<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "古代ギリシア音楽",
            "description": "Ancient Greek music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "初期ユダヤ典礼音楽",
            "description": "Early Jewish liturgical music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "ローマ・古代末期音楽",
            "description": "Roman and late-antique music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "インド古典音楽理論とラーガ体系の形成",
            "description": "Formation of Indian classical theory and raga systems<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "ビザンティン聖歌",
            "description": "Byzantine chant<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "中国文人琴楽の伝統",
            "description": "Chinese qin literati tradition<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "日本の雅楽",
            "description": "Japanese gagaku<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "アッバース朝期のアラブ・ペルシア宮廷音楽",
            "description": "Abbasid-era Arabic and Persian court music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "ジャワ・バリのガムラン伝統",
            "description": "Javanese and Balinese gamelan traditions<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "アンダルス古典音楽",
            "description": "Andalusi classical music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "西アフリカのグリオ／コラ伝統",
            "description": "West African griot and kora traditions<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "カッワーリーと南アジア・スーフィー音楽",
            "description": "Qawwali and South Asian Sufi music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "中国戯曲音楽",
            "description": "Chinese opera traditions<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "北インド古典音楽",
            "description": "Hindustani classical music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "日本の能楽",
            "description": "Japanese Noh music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "オスマン古典音楽",
            "description": "Ottoman classical music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "南インド古典音楽",
            "description": "Carnatic classical music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "崑曲",
            "description": "Kunqu opera<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "歌舞伎音楽",
            "description": "Kabuki music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "フラメンコ",
            "description": "Flamenco<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "京劇",
            "description": "Beijing opera<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "タンゴの形成と黄金時代",
            "description": "Tango: formation and golden age<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "ハイライフ",
            "description": "Highlife<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "サンバ",
            "description": "Samba<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "マンドポップと中国語流行歌",
            "description": "Mandopop and Chinese-language popular song<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "ライ",
            "description": "Raï<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "演歌",
            "description": "Enka<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "ボサノヴァ",
            "description": "Bossa nova<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "ヌエバ・カンシオン",
            "description": "Nueva canción<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "サルサの古典期",
            "description": "Salsa: classic period<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "ムジカ・ポプラール・ブラジレイラ",
            "description": "Música popular brasileira (MPB)<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "アフロビート",
            "description": "Afrobeat<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "レゲエ",
            "description": "Reggae<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "日本のシティ・ポップ",
            "description": "Japanese city pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ラテン・ポップ",
            "description": "Latin pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "J-POP",
            "description": "J-pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "K-POP",
            "description": "K-pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "アフロビーツ",
            "description": "Afrobeats<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "アマピアノ",
            "description": "Amapiano<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
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
            "description": "Medieval music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "グレゴリオ聖歌レパートリー",
            "description": "Gregorian chant repertory<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "ノートルダム楽派とアルス・アンティクァ",
            "description": "Notre-Dame polyphony and Ars antiqua<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "アルス・ノーヴァ",
            "description": "Ars nova<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "ルネサンス音楽",
            "description": "Renaissance music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "フランドル楽派の多声音楽",
            "description": "Franco-Flemish polyphony<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "マドリガーレの時代",
            "description": "Madrigal era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "バロック音楽",
            "description": "Baroque music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "初期オペラとモノディ",
            "description": "Early opera and monody<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "盛期バロック",
            "description": "High Baroque<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "ギャラント様式",
            "description": "Galant style<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "古典派",
            "description": "Classical period<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "音楽の疾風怒濤",
            "description": "Sturm und Drang in music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "ロマン派音楽",
            "description": "Romantic music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "ヴィルトゥオーゾ演奏会文化",
            "description": "Virtuoso concert culture<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "国民楽派",
            "description": "Musical nationalism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "後期ロマン派",
            "description": "Late Romanticism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "印象主義と音楽的象徴主義",
            "description": "Impressionism and musical symbolism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "音楽モダニズム",
            "description": "Musical modernism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "表現主義と自由無調",
            "description": "Expressionism and free atonality<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "新古典主義",
            "description": "Neoclassicism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "十二音技法とセリー主義",
            "description": "Serialism and twelve-tone composition<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "ミュジーク・コンクレートと初期電子音楽",
            "description": "Musique concrète and early electronic art music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "戦後前衛音楽",
            "description": "Postwar avant-garde<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "ミニマリズムとポスト・ミニマリズム",
            "description": "Minimalism and post-minimalism<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ポストモダンと多様式主義",
            "description": "Postmodern and polystylistic composition<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "スペクトル楽派",
            "description": "Spectral music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "新しい複雑性",
            "description": "New complexity<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "デジタル／マルチメディア芸術音楽",
            "description": "Digital and multimedia art music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
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
            "description": "Minstrelsy in the United States<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "黒人霊歌の演奏会・出版文化",
            "description": "African American spirituals in concert and print culture<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "ブラスバンド時代",
            "description": "Brass-band era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "ブルース",
            "description": "Blues<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "ラグタイム",
            "description": "Ragtime<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "カントリー／オールドタイム音楽",
            "description": "Country and old-time music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "ゴスペル",
            "description": "Gospel music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ニューオーリンズ・ジャズ",
            "description": "New Orleans jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ティン・パン・アレー歌曲時代",
            "description": "Tin Pan Alley song era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "ジャズ",
            "description": "Jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "クラシック・ブルースと初期録音",
            "description": "Classic blues and early recorded blues<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "クルーナー時代",
            "description": "Crooner era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "ビッグバンド・ジャズ",
            "description": "Big-band jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "映画音楽とサウンドトラック文化",
            "description": "Film music and soundtrack culture<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "スウィング時代",
            "description": "Swing era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "ウェスタン・スウィング",
            "description": "Western swing<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "ブルーグラス",
            "description": "Bluegrass<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "リズム・アンド・ブルース",
            "description": "Rhythm and blues<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "ビバップ",
            "description": "Bebop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "クール・ジャズ",
            "description": "Cool jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ドゥーワップ",
            "description": "Doo-wop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ハード・バップ",
            "description": "Hard bop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ホンキートンク・カントリー",
            "description": "Honky-tonk country<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ロックンロール",
            "description": "Rock and roll<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "ナッシュビル・サウンド",
            "description": "Nashville sound<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "ソウル",
            "description": "Soul music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "モード・ジャズ",
            "description": "Modal jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "サーフ・ミュージック",
            "description": "Surf music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "フリー・ジャズ",
            "description": "Free jazz<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "ファンク",
            "description": "Funk<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "モータウン・サウンド",
            "description": "Motown sound<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "ブリティッシュ・インヴェイジョン",
            "description": "British Invasion<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "フォーク・ロック",
            "description": "Folk rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "ガレージ・ロック",
            "description": "Garage rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "サイケデリック・ロック",
            "description": "Psychedelic rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "プログレッシブ・ロック",
            "description": "Progressive rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "ハードロック",
            "description": "Hard rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "ヘヴィメタル",
            "description": "Heavy metal<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "ジャズ・フュージョン",
            "description": "Jazz fusion<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ダブ",
            "description": "Dub<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "グラム・ロック",
            "description": "Glam rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "アウトロー・カントリー",
            "description": "Outlaw country<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "シンガーソングライター時代",
            "description": "Singer-songwriter era<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "ヒップホップ",
            "description": "Hip-hop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "ディスコ",
            "description": "Disco<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "パンク・ロック",
            "description": "Punk rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "アンビエント",
            "description": "Ambient music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "ポストパンク",
            "description": "Post-punk<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "インダストリアル",
            "description": "Industrial music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "ニュー・ウェイヴ",
            "description": "New wave<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "ゴシック・ロック",
            "description": "Gothic rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "オールドスクール・ヒップホップ",
            "description": "Old-school hip-hop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "ダンスホール",
            "description": "Dancehall<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ハードコア・パンク",
            "description": "Hardcore punk<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "シンセポップ",
            "description": "Synth-pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "エレクトロ",
            "description": "Electro<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "スラッシュメタル",
            "description": "Thrash metal<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "オルタナティブ・ロック",
            "description": "Alternative rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "インディー・ロック",
            "description": "Indie rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "ヒップホップ黄金時代",
            "description": "Golden-age hip-hop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "ハウス",
            "description": "House music<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "ギャングスタ・ラップ",
            "description": "Gangsta rap<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "テクノ",
            "description": "Techno<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "「ワールド・ミュージック」市場分類",
            "description": "World-music market category<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "シューゲイザー",
            "description": "Shoegaze<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "オルタナティブ・ヒップホップ",
            "description": "Alternative hip-hop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "ダンス・ポップ",
            "description": "Dance-pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "グランジ",
            "description": "Grunge<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "ネオ・ソウル",
            "description": "Neo-soul<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "トランス",
            "description": "Trance<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "ブリットポップ",
            "description": "Britpop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ドラムンベース",
            "description": "Drum and bass<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ポストロック",
            "description": "Post-rock<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "エモの初期二波",
            "description": "Emo: first and second waves<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "ニュー・メタル",
            "description": "Nu metal<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "EDMフェスティバル文化",
            "description": "Electronic dance music festival culture<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "トラップ",
            "description": "Trap<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "現代インディー・ポップ",
            "description": "Contemporary indie pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "ドリル",
            "description": "Drill<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "ストリーミング時代の世界的ポップ",
            "description": "Streaming-era global pop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "ハイパーポップ",
            "description": "Hyperpop<br>この音楽伝統の成立・定着・歴史的影響が特に強かった時期を示す概略区分。",
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
            "description": "Paleolithic bone flutes before 10,000 BCE (compressed marker)<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-7999",
            "title": "初期の枠太鼓とラトル",
            "description": "Early frame drums and rattles<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-3499",
            "title": "メソポタミアのリラとハープ",
            "description": "Mesopotamian lyres and harps<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-2999",
            "title": "エジプトの弓形ハープ",
            "description": "Egyptian arched harps<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-2499",
            "title": "シュメールの雄牛頭リラ",
            "description": "Sumerian bull-headed lyres<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1999",
            "title": "中国の初期琴系ツィター",
            "description": "Early Chinese qin-type zithers<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1499",
            "title": "東アジア儀礼合奏の青銅鐘",
            "description": "Bronze bells in East Asian ritual ensembles<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-1199",
            "title": "ギリシア世界のアウロスとキタラ",
            "description": "Aulos and kithara in the Greek world<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0999",
            "title": "笙の初期形態",
            "description": "Early forms of the sheng mouth organ<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0699",
            "title": "中国の大編鐘セット",
            "description": "Large Chinese bianzhong bell sets<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "-0499",
            "title": "水力オルガン（ヒュドラウリス）",
            "description": "Hydraulis water organ<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0200",
            "title": "オルガン技術がローマ世界へ普及",
            "description": "Organ technology spreads in the Roman world<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0500",
            "title": "ウード系楽器の発展",
            "description": "Development of the oud family<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0700",
            "title": "琵琶が中国宮廷音楽の中心楽器へ",
            "description": "Pipa becomes central in Chinese court music<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0800",
            "title": "雅楽の笙",
            "description": "Shō mouth organ in Japanese gagaku<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "0900",
            "title": "擦弦楽器レバブの伝統が拡大",
            "description": "Bowed rebab traditions expand<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1000",
            "title": "中世ヨーロッパのハープとプサルテリウム",
            "description": "Medieval European harp and psaltery<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1100",
            "title": "教会の大型パイプオルガン発展",
            "description": "Pipe organ develops large church forms<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1200",
            "title": "ウード系楽器からヨーロッパのリュートが発展",
            "description": "European lute develops from oud-related instruments<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1200",
            "title": "西アフリカのコラ伝統発展",
            "description": "Kora traditions develop in West Africa<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1300",
            "title": "サントゥール／ハンマーダルシマー系の普及",
            "description": "Santur and hammered-dulcimer families spread<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1400",
            "title": "クラヴィコードがヨーロッパ鍵盤文化へ",
            "description": "Clavichord enters European keyboard culture<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1450",
            "title": "チェンバロ系楽器の発展",
            "description": "Harpsichord family develops<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1500",
            "title": "ヴィオラ・ダ・ガンバ属",
            "description": "Viola da gamba family<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1520",
            "title": "北イタリアで近代ヴァイオリン属が成立",
            "description": "Modern violin family emerges in northern Italy<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1550",
            "title": "北インドでシタール発展",
            "description": "Sitar develops in North India<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1560",
            "title": "ルネサンス期ヨーロッパの横笛改良",
            "description": "Transverse flute redesign in Renaissance Europe<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1600",
            "title": "箏が日本芸術音楽に定着",
            "description": "Koto becomes established in Japanese art music<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1600",
            "title": "三味線が日本で普及",
            "description": "Shamisen spreads in Japan<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1650",
            "title": "ストラディヴァリとクレモナ製作派",
            "description": "Stradivari and Cremonese violin making<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1680",
            "title": "シャリュモーからクラリネットが発展",
            "description": "Clarinet developed from the chalumeau<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1700",
            "title": "クリストフォリがピアノを開発",
            "description": "Cristofori develops the piano<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1720",
            "title": "現存最古のクリストフォリ製ピアノ",
            "description": "Earliest surviving Cristofori piano<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1730",
            "title": "近代オーボエ／ファゴット属の定着",
            "description": "Modern oboe and bassoon families stabilize<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1750",
            "title": "古典派オーケストラの弦楽配置が標準化",
            "description": "Classical orchestra standardizes string sections<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1770",
            "title": "フォルテピアノが演奏会と家庭の主要楽器へ",
            "description": "Fortepiano becomes a leading concert and domestic instrument<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1814",
            "title": "メルツェルが近代メトロノームを特許化",
            "description": "Mälzel patents the modern metronome<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1821",
            "title": "自由簧ハーモニカの発展",
            "description": "Free-reed harmonica development<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1829",
            "title": "アコーディオン特許",
            "description": "Accordion patented<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1830",
            "title": "ダブルアクション式近代コンサートハープ",
            "description": "Modern concert harp with double-action pedals<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1832",
            "title": "ベーム式フルート開発開始",
            "description": "Boehm-system flute development begins<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1835",
            "title": "チューバ特許",
            "description": "Tuba patented<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1846",
            "title": "アドルフ・サックスがサクソフォーンを特許化",
            "description": "Saxophone patented by Adolphe Sax<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1850",
            "title": "近代コンサートグランド構造が定着",
            "description": "Modern concert grand piano architecture consolidates<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1860",
            "title": "バンドネオンがタンゴ文化へ",
            "description": "Bandoneon enters tango culture<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1870",
            "title": "近代ドラムセットの要素が統合開始",
            "description": "Modern drum-kit components begin to combine<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1880",
            "title": "スチール弦アコースティックギター発展",
            "description": "Steel-string acoustic guitar develops<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1890",
            "title": "行進演奏用スーザフォン開発",
            "description": "Sousaphone developed for marching performance<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1906",
            "title": "テルハーモニウム公開実演",
            "description": "Telharmonium public demonstrations<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1919",
            "title": "テルミン発明",
            "description": "Theremin invented<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1924",
            "title": "電気マイクが演奏と録音を変革",
            "description": "Electric microphone transforms performance and recording<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1928",
            "title": "オンド・マルトノ発表",
            "description": "Ondes Martenot introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1931",
            "title": "商用エレクトリックギター登場",
            "description": "Commercial electric guitar appears<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1934",
            "title": "ハモンドオルガン登場",
            "description": "Hammond organ introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1935",
            "title": "ドイツで磁気テープ録音が進展",
            "description": "Magnetic tape recording advances in Germany<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1939",
            "title": "近代エレクトリックベースの試作",
            "description": "Modern electric bass prototypes<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1940",
            "title": "トリニダード・トバゴでスティールパン発展",
            "description": "Steelpan develops in Trinidad and Tobago<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1948",
            "title": "多重録音実験",
            "description": "Multitrack recording experiments<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1950",
            "title": "フェンダー・テレキャスター量産",
            "description": "Fender Telecaster mass-produced solid-body guitar<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1951",
            "title": "フェンダー・プレシジョンベース登場",
            "description": "Fender Precision Bass introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1954",
            "title": "フェンダー・ストラトキャスター登場",
            "description": "Fender Stratocaster introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1957",
            "title": "RCA Mark II サウンド・シンセサイザー",
            "description": "RCA Mark II Sound Synthesizer<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1960",
            "title": "携帯型トランジスターオルガンと電気鍵盤の普及",
            "description": "Portable transistor organs and electric keyboards spread<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1963",
            "title": "メロトロン登場",
            "description": "Mellotron introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1964",
            "title": "モーグ・モジュラーシンセ実演",
            "description": "Moog modular synthesizer demonstrated<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1965",
            "title": "ファズなどエフェクターがギター音色を変革",
            "description": "Fuzz and effects pedals reshape guitar tone<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1970",
            "title": "ミニモーグ登場",
            "description": "Minimoog introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1971",
            "title": "ARP 2600 セミモジュラーシンセ",
            "description": "ARP 2600 semi-modular synthesizer<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1972",
            "title": "ターンテーブル技法がヒップホップの作曲楽器へ",
            "description": "Turntable techniques become a compositional instrument in hip-hop<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1975",
            "title": "ポリフォニックシンセが普及",
            "description": "Polyphonic synthesizers enter wider use<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1979",
            "title": "Fairlight CMI サンプリングワークステーション",
            "description": "Fairlight CMI sampling workstation<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1980",
            "title": "Roland TR-808 ドラムマシン",
            "description": "Roland TR-808 drum machine<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1981",
            "title": "Roland TB-303 ベースシンセ",
            "description": "Roland TB-303 bass synthesizer<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1982",
            "title": "デジタルシンセが大衆市場へ",
            "description": "Digital synthesizers enter the mass market<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1983",
            "title": "MIDI公開実演・標準化",
            "description": "MIDI publicly demonstrated and standardized<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1983",
            "title": "Yamaha DX7 登場",
            "description": "Yamaha DX7 introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1984",
            "title": "低価格デジタルサンプラー普及",
            "description": "Affordable digital samplers spread<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1987",
            "title": "Akai MPC シリーズ開始",
            "description": "Akai MPC line begins<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1989",
            "title": "デジタル・オーディオ・ワークステーション登場",
            "description": "Digital audio workstations emerge<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1997",
            "title": "Auto-Tune 登場",
            "description": "Auto-Tune introduced<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "1999",
            "title": "ソフトウェア音源とラップトップ制作拡大",
            "description": "Software instruments and laptop production expand<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2001",
            "title": "Ableton Live 発売",
            "description": "Ableton Live released<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2007",
            "title": "スマートフォンが音楽制作・演奏基盤へ",
            "description": "Smartphones become music-production and performance platforms<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2010",
            "title": "タブレット楽器とタッチ操作普及",
            "description": "Tablet instruments and touch interfaces spread<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
        },
        {
            "start": "2020",
            "title": "パンデミック期にネット遠隔演奏ツール拡大",
            "description": "Networked remote performance tools expand during the pandemic<br>楽器と音響ツールの設計・普及・電化・デジタル化における節目。"
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
            "description": "Hurrian hymn tablets<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "-0499",
            "title": "ギリシア音律理論発展",
            "description": "Greek harmonic theory develops<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "-0299",
            "title": "中国の律管・調式理論体系化",
            "description": "Chinese pitch-pipe and modal theory codified<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0100",
            "title": "セイキロスの墓碑銘が完全な古代記譜を保存",
            "description": "Seikilos epitaph preserves complete ancient notation<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0200",
            "title": "『ナーティヤ・シャーストラ』が南アジア演劇音楽理論を体系化",
            "description": "Natya Shastra systematizes South Asian performance theory<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0500",
            "title": "ボエティウスが古代音楽理論を中世欧州へ伝える",
            "description": "Boethius transmits ancient music theory to medieval Europe<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "0800",
            "title": "西方聖歌でネウマ記譜普及",
            "description": "Neumatic notation spreads in Western chant<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1025",
            "title": "グイード・ダレッツォが譜線教育法を発展",
            "description": "Guido of Arezzo develops staff-based pedagogy<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1250",
            "title": "定量記譜法が計量的多声部を可能に",
            "description": "Mensural notation enables measured polyphony<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1320",
            "title": "アルス・ノーヴァ記譜がリズム可能性を拡大",
            "description": "Ars nova notation expands rhythmic possibilities<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1450",
            "title": "楽譜写本工房が流通を拡大",
            "description": "Music copying workshops expand manuscript circulation<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1501",
            "title": "ペトルッチが多声音楽の重要印刷譜を出版",
            "description": "Petrucci publishes major collection of printed polyphonic music<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1558",
            "title": "ザルリーノ『和声論』出版",
            "description": "Zarlino publishes Le istitutioni harmoniche<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1597",
            "title": "初期オペラ《ダフネ》上演",
            "description": "Early opera Dafne produced<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1607",
            "title": "モンテヴェルディ《オルフェオ》が持続的オペラモデルを確立",
            "description": "Monteverdi’s L’Orfeo establishes an enduring operatic model<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1637",
            "title": "ヴェネツィアに最初の公共オペラ劇場",
            "description": "First public opera house opens in Venice<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1669",
            "title": "パリ・オペラ座創設",
            "description": "Paris Opera founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1672",
            "title": "ロンドンで継続的公開演奏会",
            "description": "First sustained public concert series in London<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1710",
            "title": "彫版楽譜出版が欧州で拡大",
            "description": "European music publishing expands through engraved editions<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1725",
            "title": "フックス《パルナッソス山への階梯》出版",
            "description": "Fux publishes Gradus ad Parnassum<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1750",
            "title": "公開演奏会文化が欧州で拡大",
            "description": "Public concert culture expands across Europe<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1771",
            "title": "ウィーン音楽家協会が公開管弦楽演奏会を支援",
            "description": "Vienna Tonkünstler-Societät supports public orchestral concerts<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1795",
            "title": "パリ音楽院創設",
            "description": "Paris Conservatoire founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1808",
            "title": "大規模公開慈善演奏会が近代コンサート規模を示す",
            "description": "Large public benefit concert demonstrates modern concert scale<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1813",
            "title": "ロンドン王立フィルハーモニー協会創設",
            "description": "Royal Philharmonic Society founded in London<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1824",
            "title": "ベートーヴェン第九が交響曲・合唱・公共的人文主義を結ぶ",
            "description": "Beethoven’s Ninth links symphony, chorus and public humanism<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1842",
            "title": "ニューヨーク・フィル創設",
            "description": "New York Philharmonic founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1843",
            "title": "ライプツィヒ音楽院創設",
            "description": "Leipzig Conservatory founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1857",
            "title": "フォノトグラフが音波を記録",
            "description": "Phonautograph records sound waves<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1867",
            "title": "著作権・演奏権制度が欧州で拡大",
            "description": "Copyright and performance-right systems expand in Europe<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1877",
            "title": "エジソンが蓄音機で録音再生を実演",
            "description": "Edison demonstrates recording and playback with the phonograph<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1887",
            "title": "グラモフォン円盤方式特許",
            "description": "Gramophone disc system patented<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1891",
            "title": "カーネギー・ホール開館",
            "description": "Carnegie Hall opens<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1897",
            "title": "グラモフォン社設立",
            "description": "Gramophone Company founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1901",
            "title": "ビクター・トーキング・マシン社設立",
            "description": "Victor Talking Machine Company founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1906",
            "title": "ヴィクトローラが録音音楽を家庭家具文化へ",
            "description": "Victrola brings recorded music into domestic furniture culture<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1914",
            "title": "ASCAP 設立",
            "description": "ASCAP founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1920",
            "title": "商業ラジオ放送が音楽聴衆を再編",
            "description": "Commercial radio broadcasting begins reshaping music audiences<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1925",
            "title": "電気録音が機械式録音に代わる",
            "description": "Electrical recording replaces acoustic recording<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1927",
            "title": "長編トーキーが映画音楽を加速",
            "description": "First feature-length synchronized-sound film accelerates screen music<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1935",
            "title": "放送規模で磁気テープ録音実演",
            "description": "Magnetic tape recording demonstrated at broadcasting scale<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1936",
            "title": "Billboard が主要音楽チャートを掲載",
            "description": "Billboard publishes major popular-music charts<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1948",
            "title": "コロムビアが33⅓回転LPを導入",
            "description": "Columbia introduces the 33⅓ rpm LP<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1949",
            "title": "RCAが45回転シングルを導入",
            "description": "RCA introduces the 45 rpm single<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1954",
            "title": "携帯トランジスターラジオが若者の聴取を拡大",
            "description": "Portable transistor radio expands youth listening<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1958",
            "title": "グラミー賞制度開始",
            "description": "First Grammy Awards cycle established<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1958",
            "title": "ステレオLPが商業標準へ",
            "description": "Stereo LP becomes a commercial standard<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1962",
            "title": "コンパクトカセット登場",
            "description": "Compact cassette introduced<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1964",
            "title": "モーグが電圧制御電子制作を確立",
            "description": "Moog synthesizer helps establish voltage-controlled electronic production<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1967",
            "title": "雑誌 Rolling Stone 創刊",
            "description": "Rolling Stone magazine founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1979",
            "title": "ウォークマンが個人携帯聴取を主流化",
            "description": "Sony Walkman makes private mobile listening mainstream<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1981",
            "title": "MTV 開局",
            "description": "MTV launches<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1982",
            "title": "コンパクトディスク商用化",
            "description": "Compact disc commercial launch<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1983",
            "title": "MIDI 1.0 公開",
            "description": "MIDI 1.0 published<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1985",
            "title": "ペアレンタル・アドバイザリー論争が表示制度を変える",
            "description": "Parental Advisory controversy reshapes music labeling<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1988",
            "title": "DAT 市場投入",
            "description": "Digital audio tape enters the market<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1991",
            "title": "SoundScan がチャート集計を変革",
            "description": "SoundScan changes chart measurement<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1993",
            "title": "MP3規格と初期実装",
            "description": "MPEG-1 Audio Layer III standard and early MP3 implementation<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1995",
            "title": "「.mp3」拡張子採用",
            "description": ".mp3 file extension adopted<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "1999",
            "title": "Napster がP2P音楽共有開始",
            "description": "Napster launches peer-to-peer music sharing<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2001",
            "title": "iPod 発売",
            "description": "iPod launched<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2003",
            "title": "iTunes Music Store 開始",
            "description": "iTunes Music Store launches<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2005",
            "title": "YouTube 開始",
            "description": "YouTube launches<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2007",
            "title": "SoundCloud 創設",
            "description": "SoundCloud founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2008",
            "title": "Bandcamp 創設",
            "description": "Bandcamp founded<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2008",
            "title": "Spotify 開始",
            "description": "Spotify launches<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2011",
            "title": "世界同時発売日の調整が進展",
            "description": "Global album-release day coordination begins evolving<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2015",
            "title": "金曜日が世界共通発売日へ",
            "description": "Friday becomes the coordinated global release day<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2015",
            "title": "ストリーミングがチャートと認定制度の中心へ",
            "description": "Streaming becomes central to chart and certification systems<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2017",
            "title": "定額ストリーミングが録音産業成長の中心へ",
            "description": "Subscription streaming becomes the dominant growth engine of recorded music<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2020",
            "title": "COVID-19休演期に配信ライブが大衆形式へ",
            "description": "Livestream concerts become a mass format during COVID-19 closures<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        },
        {
            "start": "2023",
            "title": "生成AIが著作・学習データ・音楽労働の議論を加速",
            "description": "Generative AI intensifies debates over authorship, training data and musical labor<br>記譜・理論・演奏制度・出版・放送・音楽産業における重要な変化。"
        }
    ]
};

// 作曲家と芸術音楽の革新者
var tl_classical_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-0609",
            "title": "Sappho（630 BCE–c. 570 BCE）",
            "description": "Sappho (630 BCE–c. 570 BCE)<br>古代・儀礼音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "0497",
            "title": "Boethius（477–524）",
            "description": "Boethius (477–524)<br>中世音楽に大きな影響を与えた理論家／音楽思想家。"
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen（1098–1179）",
            "description": "Hildegard of Bingen (1098–1179)<br>中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1170",
            "title": "Léonin（1150–1201）",
            "description": "Léonin (1150–1201)<br>中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1180",
            "title": "Pérotin（1160–1230）",
            "description": "Pérotin (1160–1230)<br>中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut（1300–1377）",
            "description": "Guillaume de Machaut (1300–1377)<br>中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1345",
            "title": "Francesco Landini（1325–1397）",
            "description": "Francesco Landini (1325–1397)<br>中世音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay（1397–1474）",
            "description": "Guillaume Du Fay (1397–1474)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem（1410–1497）",
            "description": "Johannes Ockeghem (1410–1497)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1470",
            "title": "Josquin des Prez（1450–1521）",
            "description": "Josquin des Prez (1450–1521)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1510",
            "title": "Adrian Willaert（1490–1562）",
            "description": "Adrian Willaert (1490–1562)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina（1525–1594）",
            "description": "Giovanni Pierluigi da Palestrina (1525–1594)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso（1532–1594）",
            "description": "Orlando di Lasso (1532–1594)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1560",
            "title": "William Byrd（1540–1623）",
            "description": "William Byrd (1540–1623)<br>ルネサンス音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi（1567–1643）",
            "description": "Claudio Monteverdi (1567–1643)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi（1583–1643）",
            "description": "Girolamo Frescobaldi (1583–1643)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz（1585–1672）",
            "description": "Heinrich Schütz (1585–1672)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully（1632–1687）",
            "description": "Jean-Baptiste Lully (1632–1687)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude（1637–1707）",
            "description": "Dieterich Buxtehude (1637–1707)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli（1653–1713）",
            "description": "Arcangelo Corelli (1653–1713)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1679",
            "title": "Henry Purcell（1659–1695）",
            "description": "Henry Purcell (1659–1695)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti（1660–1725）",
            "description": "Alessandro Scarlatti (1660–1725)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1688",
            "title": "François Couperin（1668–1733）",
            "description": "François Couperin (1668–1733)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi（1678–1741）",
            "description": "Antonio Vivaldi (1678–1741)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann（1681–1767）",
            "description": "Georg Philipp Telemann (1681–1767)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau（1683–1764）",
            "description": "Jean-Philippe Rameau (1683–1764)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti（1685–1757）",
            "description": "Domenico Scarlatti (1685–1757)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "George Frideric Handel（1685–1759）",
            "description": "George Frideric Handel (1685–1759)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach（1685–1750）",
            "description": "Johann Sebastian Bach (1685–1750)<br>バロック音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach（1714–1788）",
            "description": "Carl Philipp Emanuel Bach (1714–1788)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck（1714–1787）",
            "description": "Christoph Willibald Gluck (1714–1787)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1752",
            "title": "Joseph Haydn（1732–1809）",
            "description": "Joseph Haydn (1732–1809)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini（1743–1805）",
            "description": "Luigi Boccherini (1743–1805)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1770",
            "title": "Antonio Salieri（1750–1825）",
            "description": "Antonio Salieri (1750–1825)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart（1756–1791）",
            "description": "Wolfgang Amadeus Mozart (1756–1791)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven（1770–1827）",
            "description": "Ludwig van Beethoven (1770–1827)<br>古典派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini（1782–1840）",
            "description": "Niccolò Paganini (1782–1840)<br>ロマン派音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber（1786–1826）",
            "description": "Carl Maria von Weber (1786–1826)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini（1792–1868）",
            "description": "Gioachino Rossini (1792–1868)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1817",
            "title": "Franz Schubert（1797–1828）",
            "description": "Franz Schubert (1797–1828)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1823",
            "title": "Hector Berlioz（1803–1869）",
            "description": "Hector Berlioz (1803–1869)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka（1804–1857）",
            "description": "Mikhail Glinka (1804–1857)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn（1809–1847）",
            "description": "Felix Mendelssohn (1809–1847)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin（1810–1849）",
            "description": "Frédéric Chopin (1810–1849)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1830",
            "title": "Robert Schumann（1810–1856）",
            "description": "Robert Schumann (1810–1856)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1831",
            "title": "Franz Liszt（1811–1886）",
            "description": "Franz Liszt (1811–1886)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi（1813–1901）",
            "description": "Giuseppe Verdi (1813–1901)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1833",
            "title": "Richard Wagner（1813–1883）",
            "description": "Richard Wagner (1813–1883)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1839",
            "title": "Clara Schumann（1819–1896）",
            "description": "Clara Schumann (1819–1896)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach（1819–1880）",
            "description": "Jacques Offenbach (1819–1880)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1844",
            "title": "Anton Bruckner（1824–1896）",
            "description": "Anton Bruckner (1824–1896)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana（1824–1884）",
            "description": "Bedřich Smetana (1824–1884)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1845",
            "title": "Johann Strauss II（1825–1899）",
            "description": "Johann Strauss II (1825–1899)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1853",
            "title": "Johannes Brahms（1833–1897）",
            "description": "Johannes Brahms (1833–1897)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns（1835–1921）",
            "description": "Camille Saint-Saëns (1835–1921)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1858",
            "title": "Georges Bizet（1838–1875）",
            "description": "Georges Bizet (1838–1875)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky（1839–1881）",
            "description": "Modest Mussorgsky (1839–1881)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky（1840–1893）",
            "description": "Pyotr Ilyich Tchaikovsky (1840–1893)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák（1841–1904）",
            "description": "Antonín Dvořák (1841–1904)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1863",
            "title": "Edvard Grieg（1843–1907）",
            "description": "Edvard Grieg (1843–1907)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov（1844–1908）",
            "description": "Nikolai Rimsky-Korsakov (1844–1908)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré（1845–1924）",
            "description": "Gabriel Fauré (1845–1924)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini（1858–1924）",
            "description": "Giacomo Puccini (1858–1924)<br>オペラに大きな影響を与えた作曲家。"
        },
        {
            "start": "1880",
            "title": "Gustav Mahler（1860–1911）",
            "description": "Gustav Mahler (1860–1911)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1882",
            "title": "Claude Debussy（1862–1918）",
            "description": "Claude Debussy (1862–1918)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1884",
            "title": "Richard Strauss（1864–1949）",
            "description": "Richard Strauss (1864–1949)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1885",
            "title": "Jean Sibelius（1865–1957）",
            "description": "Jean Sibelius (1865–1957)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1886",
            "title": "Erik Satie（1866–1925）",
            "description": "Erik Satie (1866–1925)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams（1872–1958）",
            "description": "Ralph Vaughan Williams (1872–1958)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff（1873–1943）",
            "description": "Sergei Rachmaninoff (1873–1943)<br>ロマン派音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg（1874–1951）",
            "description": "Arnold Schoenberg (1874–1951)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1894",
            "title": "Gustav Holst（1874–1934）",
            "description": "Gustav Holst (1874–1934)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1895",
            "title": "Maurice Ravel（1875–1937）",
            "description": "Maurice Ravel (1875–1937)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1901",
            "title": "Béla Bartók（1881–1945）",
            "description": "Béla Bartók (1881–1945)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky（1882–1971）",
            "description": "Igor Stravinsky (1882–1971)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1903",
            "title": "Anton Webern（1883–1945）",
            "description": "Anton Webern (1883–1945)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1905",
            "title": "Alban Berg（1885–1935）",
            "description": "Alban Berg (1885–1935)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev（1891–1953）",
            "description": "Sergei Prokofiev (1891–1953)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1912",
            "title": "Arthur Honegger（1892–1955）",
            "description": "Arthur Honegger (1892–1955)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1912",
            "title": "Darius Milhaud（1892–1974）",
            "description": "Darius Milhaud (1892–1974)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1915",
            "title": "Carl Orff（1895–1982）",
            "description": "Carl Orff (1895–1982)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1915",
            "title": "Paul Hindemith（1895–1963）",
            "description": "Paul Hindemith (1895–1963)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1918",
            "title": "George Gershwin（1898–1937）",
            "description": "George Gershwin (1898–1937)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1920",
            "title": "Aaron Copland（1900–1990）",
            "description": "Aaron Copland (1900–1990)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich（1906–1975）",
            "description": "Dmitri Shostakovich (1906–1975)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen（1908–1992）",
            "description": "Olivier Messiaen (1908–1992)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1932",
            "title": "John Cage（1912–1992）",
            "description": "John Cage (1912–1992)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1933",
            "title": "Benjamin Britten（1913–1976）",
            "description": "Benjamin Britten (1913–1976)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein（1918–1990）",
            "description": "Leonard Bernstein (1918–1990)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1943",
            "title": "György Ligeti（1923–2006）",
            "description": "György Ligeti (1923–2006)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1945",
            "title": "Pierre Boulez（1925–2016）",
            "description": "Pierre Boulez (1925–2016)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen（1928–2007）",
            "description": "Karlheinz Stockhausen (1928–2007)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu（1930–1996）",
            "description": "Tōru Takemitsu (1930–1996)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1955",
            "title": "Arvo Pärt（born 1935）",
            "description": "Arvo Pärt (born 1935)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1956",
            "title": "Steve Reich（born 1936）",
            "description": "Steve Reich (born 1936)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1957",
            "title": "Philip Glass（born 1937）",
            "description": "Philip Glass (born 1937)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1967",
            "title": "John Adams（born 1947）",
            "description": "John Adams (born 1947)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho（1952–2023）",
            "description": "Kaija Saariaho (1952–2023)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1977",
            "title": "Tan Dun（born 1957）",
            "description": "Tan Dun (born 1957)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1981",
            "title": "Unsuk Chin（born 1961）",
            "description": "Unsuk Chin (born 1961)<br>近現代芸術音楽に大きな影響を与えた作曲家。"
        }
    ]
};

// ブルース・ジャズ・ゴスペル・R&B・ソウル・ファンクの人物
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin（1868–1917）",
            "description": "Scott Joplin (1868–1917)<br>ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1893",
            "title": "W. C. Handy（1873–1958）",
            "description": "W. C. Handy (1873–1958)<br>ブルースに大きな影響を与えた作曲家。"
        },
        {
            "start": "1906",
            "title": "Ma Rainey（1886–1939）",
            "description": "Ma Rainey (1886–1939)<br>ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton（1890–1941）",
            "description": "Jelly Roll Morton (1890–1941)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1914",
            "title": "Bessie Smith（1894–1937）",
            "description": "Bessie Smith (1894–1937)<br>ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson（1897–1952）",
            "description": "Fletcher Henderson (1897–1952)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford（1897–1952）",
            "description": "Jimmie Lunceford (1897–1952)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1917",
            "title": "Sidney Bechet（1897–1959）",
            "description": "Sidney Bechet (1897–1959)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1919",
            "title": "Duke Ellington（1899–1974）",
            "description": "Duke Ellington (1899–1974)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1921",
            "title": "Louis Armstrong（1901–1971）",
            "description": "Louis Armstrong (1901–1971)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke（1903–1931）",
            "description": "Bix Beiderbecke (1903–1931)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins（1904–1969）",
            "description": "Coleman Hawkins (1904–1969)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1924",
            "title": "Count Basie（1904–1984）",
            "description": "Count Basie (1904–1984)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1924",
            "title": "Fats Waller（1904–1943）",
            "description": "Fats Waller (1904–1943)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1929",
            "title": "Art Tatum（1909–1956）",
            "description": "Art Tatum (1909–1956)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1930",
            "title": "Django Reinhardt（1910–1953）",
            "description": "Django Reinhardt (1910–1953)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf（1910–1976）",
            "description": "Howlin’ Wolf (1910–1976)<br>ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1930",
            "title": "T-Bone Walker（1910–1975）",
            "description": "T-Bone Walker (1910–1975)<br>ブルースに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1931",
            "title": "Robert Johnson（1911–1938）",
            "description": "Robert Johnson (1911–1938)<br>ブルースに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1933",
            "title": "Muddy Waters（1913–1983）",
            "description": "Muddy Waters (1913–1983)<br>ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Billie Holiday（1915–1959）",
            "description": "Billie Holiday (1915–1959)<br>ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe（1915–1973）",
            "description": "Sister Rosetta Tharpe (1915–1973)<br>ゴスペルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1936",
            "title": "Charlie Christian（1916–1942）",
            "description": "Charlie Christian (1916–1942)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie（1917–1993）",
            "description": "Dizzy Gillespie (1917–1993)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald（1917–1996）",
            "description": "Ella Fitzgerald (1917–1996)<br>ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1937",
            "title": "Thelonious Monk（1917–1982）",
            "description": "Thelonious Monk (1917–1982)<br>ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1940",
            "title": "Charlie Parker（1920–1955）",
            "description": "Charlie Parker (1920–1955)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1940",
            "title": "Dave Brubeck（1920–2012）",
            "description": "Dave Brubeck (1920–2012)<br>ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1942",
            "title": "Charles Mingus（1922–1979）",
            "description": "Charles Mingus (1922–1979)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1944",
            "title": "Bud Powell（1924–1966）",
            "description": "Bud Powell (1924–1966)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan（1924–1990）",
            "description": "Sarah Vaughan (1924–1990)<br>ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1945",
            "title": "B. B. King（1925–2015）",
            "description": "B. B. King (1925–2015)<br>ブルースに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1946",
            "title": "John Coltrane（1926–1967）",
            "description": "John Coltrane (1926–1967)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1946",
            "title": "Miles Davis（1926–1991）",
            "description": "Miles Davis (1926–1991)<br>ジャズに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1949",
            "title": "Bill Evans（1929–1980）",
            "description": "Bill Evans (1929–1980)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1949",
            "title": "Cecil Taylor（1929–2018）",
            "description": "Cecil Taylor (1929–2018)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1949",
            "title": "Chet Baker（1929–1988）",
            "description": "Chet Baker (1929–1988)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1950",
            "title": "Clifford Brown（1930–1986）",
            "description": "Clifford Brown (1930–1986)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1950",
            "title": "Ornette Coleman（1930–2015）",
            "description": "Ornette Coleman (1930–2015)<br>ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1950",
            "title": "Ray Charles（1930–2004）",
            "description": "Ray Charles (1930–2004)<br>リズム・アンド・ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "1950",
            "title": "Sonny Rollins（born 1930）",
            "description": "Sonny Rollins (born 1930)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1951",
            "title": "Sam Cooke（1931–1964）",
            "description": "Sam Cooke (1931–1964)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "James Brown（1933–2006）",
            "description": "James Brown (1933–2006)<br>ファンクに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Nina Simone（1933–2006）",
            "description": "Nina Simone (1933–2006)<br>ジャズに大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Wayne Shorter（1933–2023）",
            "description": "Wayne Shorter (1933–2023)<br>ジャズに大きな影響を与えた作曲家。"
        },
        {
            "start": "1959",
            "title": "Marvin Gaye（1939–1984）",
            "description": "Marvin Gaye (1939–1984)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1960",
            "title": "Herbie Hancock（born 1940）",
            "description": "Herbie Hancock (born 1940)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "Chick Corea（1941–2021）",
            "description": "Chick Corea (1941–2021)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "George Clinton（born 1941）",
            "description": "George Clinton (born 1941)<br>ファンクに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1961",
            "title": "Otis Redding（1941–1967）",
            "description": "Otis Redding (1941–1967)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Aretha Franklin（1942–2018）",
            "description": "Aretha Franklin (1942–2018)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield（1942–1999）",
            "description": "Curtis Mayfield (1942–1999)<br>ソウルに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Sly Stone（born 1943）",
            "description": "Sly Stone (born 1943)<br>ファンクに大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1965",
            "title": "Keith Jarrett（born 1945）",
            "description": "Keith Jarrett (born 1945)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1966",
            "title": "Al Green（born 1946）",
            "description": "Al Green (born 1946)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1970",
            "title": "Stevie Wonder（born 1950）",
            "description": "Stevie Wonder (born 1950)<br>ソウルに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1974",
            "title": "Pat Metheny（born 1954）",
            "description": "Pat Metheny (born 1954)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1978",
            "title": "Prince（1958–2016）",
            "description": "Prince (1958–2016)<br>ファンクに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis（born 1961）",
            "description": "Wynton Marsalis (born 1961)<br>ジャズに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1991",
            "title": "Erykah Badu（born 1971）",
            "description": "Erykah Badu (born 1971)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "1994",
            "title": "D’Angelo（born 1974）",
            "description": "D’Angelo (born 1974)<br>ソウルに大きな影響を与えた歌手。"
        },
        {
            "start": "2001",
            "title": "Beyoncé（born 1981）",
            "description": "Beyoncé (born 1981)<br>リズム・アンド・ブルースに大きな影響を与えた歌手。"
        },
        {
            "start": "2003",
            "title": "Amy Winehouse（1983–2011）",
            "description": "Amy Winehouse (1983–2011)<br>ソウルに大きな影響を与えた歌手。"
        }
    ]
};

// ロック・ポップ・カントリー・ヒップホップ・電子音楽の人物
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers（1897–1933）",
            "description": "Jimmie Rodgers (1897–1933)<br>カントリー／ルーツ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1931",
            "title": "Bill Monroe（1911–1996）",
            "description": "Bill Monroe (1911–1996)<br>カントリー／ルーツ音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1932",
            "title": "Woody Guthrie（1912–1967）",
            "description": "Woody Guthrie (1912–1967)<br>フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1935",
            "title": "Frank Sinatra（1915–1998）",
            "description": "Frank Sinatra (1915–1998)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1935",
            "title": "Édith Piaf（1915–1963）",
            "description": "Édith Piaf (1915–1963)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Nat King Cole（1919–1965）",
            "description": "Nat King Cole (1919–1965)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Pete Seeger（1919–2014）",
            "description": "Pete Seeger (1919–2014)<br>フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1943",
            "title": "Hank Williams（1923–1953）",
            "description": "Hank Williams (1923–1953)<br>カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1946",
            "title": "Chuck Berry（1926–2017）",
            "description": "Chuck Berry (1926–2017)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1948",
            "title": "Bo Diddley（1928–2008）",
            "description": "Bo Diddley (1928–2008)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1948",
            "title": "Fats Domino（1928–2017）",
            "description": "Fats Domino (1928–2017)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Johnny Cash（1932–2003）",
            "description": "Johnny Cash (1932–2003)<br>カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1952",
            "title": "Little Richard（1932–2020）",
            "description": "Little Richard (1932–2020)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Patsy Cline（1932–1963）",
            "description": "Patsy Cline (1932–1963)<br>カントリー／ルーツ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1953",
            "title": "Willie Nelson（born 1933）",
            "description": "Willie Nelson (born 1933)<br>カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1954",
            "title": "Leonard Cohen（1934–2016）",
            "description": "Leonard Cohen (1934–2016)<br>フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1954",
            "title": "The Isley Brothers 結成",
            "description": "The Isley Brothers formed<br>リズム・アンド・ブルースに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1955",
            "title": "Elvis Presley（1935–1977）",
            "description": "Elvis Presley (1935–1977)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis（1935–2022）",
            "description": "Jerry Lee Lewis (1935–2022)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1956",
            "title": "Buddy Holly（1936–1959）",
            "description": "Buddy Holly (1936–1959)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1956",
            "title": "Roy Orbison（1936–1988）",
            "description": "Roy Orbison (1936–1988)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1957",
            "title": "The Supremes 結成",
            "description": "The Supremes formed<br>ソウルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder（born 1940）",
            "description": "Giorgio Moroder (born 1940)<br>電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1960",
            "title": "John Lennon（1940–1980）",
            "description": "John Lennon (1940–1980)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1960",
            "title": "Ringo Starr（born 1940）",
            "description": "Ringo Starr (born 1940)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1960",
            "title": "The Beatles 結成",
            "description": "The Beatles formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1961",
            "title": "Bob Dylan（born 1941）",
            "description": "Bob Dylan (born 1941)<br>フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1961",
            "title": "Joan Baez（born 1941）",
            "description": "Joan Baez (born 1941)<br>フォーク／シンガーソングライターに大きな影響を与えた歌手。"
        },
        {
            "start": "1961",
            "title": "The Beach Boys 結成",
            "description": "The Beach Boys formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1962",
            "title": "Barbra Streisand（born 1942）",
            "description": "Barbra Streisand (born 1942)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Brian Wilson（born 1942）",
            "description": "Brian Wilson (born 1942)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Carole King（born 1942）",
            "description": "Carole King (born 1942)<br>ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix（1942–1970）",
            "description": "Jimi Hendrix (1942–1970)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1962",
            "title": "Paul McCartney（born 1942）",
            "description": "Paul McCartney (born 1942)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "The Rolling Stones 結成",
            "description": "The Rolling Stones formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1963",
            "title": "George Harrison（1943–2001）",
            "description": "George Harrison (1943–2001)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Janis Joplin（1943–1970）",
            "description": "Janis Joplin (1943–1970)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1963",
            "title": "Jim Morrison（1943–1971）",
            "description": "Jim Morrison (1943–1971)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1963",
            "title": "Joni Mitchell（born 1943）",
            "description": "Joni Mitchell (born 1943)<br>フォーク／シンガーソングライターに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1963",
            "title": "Keith Richards（born 1943）",
            "description": "Keith Richards (born 1943)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1963",
            "title": "Mick Jagger（born 1943）",
            "description": "Mick Jagger (born 1943)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1964",
            "title": "Jimmy Page（born 1944）",
            "description": "Jimmy Page (born 1944)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1964",
            "title": "The Who 結成",
            "description": "The Who formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1965",
            "title": "Debbie Harry（born 1945）",
            "description": "Debbie Harry (born 1945)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Eric Clapton（born 1945）",
            "description": "Eric Clapton (born 1945)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister（1945–2015）",
            "description": "Lemmy Kilmister (1945–2015)<br>ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Pink Floyd 結成",
            "description": "Pink Floyd formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1965",
            "title": "The Doors 結成",
            "description": "The Doors formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1966",
            "title": "Dolly Parton（born 1946）",
            "description": "Dolly Parton (born 1946)<br>カントリー／ルーツ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1966",
            "title": "Freddie Mercury（1946–1991）",
            "description": "Freddie Mercury (1946–1991)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1966",
            "title": "Patti Smith（born 1946）",
            "description": "Patti Smith (born 1946)<br>パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1966",
            "title": "The Velvet Underground 結成",
            "description": "The Velvet Underground formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1967",
            "title": "Brian May（born 1947）",
            "description": "Brian May (born 1947)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1967",
            "title": "Carlos Santana（born 1947）",
            "description": "Carlos Santana (born 1947)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1967",
            "title": "David Bowie（1947–2016）",
            "description": "David Bowie (1947–2016)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1967",
            "title": "Elton John（born 1947）",
            "description": "Elton John (born 1947)<br>ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1967",
            "title": "Iggy Pop（born 1947）",
            "description": "Iggy Pop (born 1947)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Black Sabbath 結成",
            "description": "Black Sabbath formed<br>ヘヴィメタルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1968",
            "title": "Brian Eno（born 1948）",
            "description": "Brian Eno (born 1948)<br>電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre（born 1948）",
            "description": "Jean-Michel Jarre (born 1948)<br>電子音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1968",
            "title": "Led Zeppelin 結成",
            "description": "Led Zeppelin formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne（born 1948）",
            "description": "Ozzy Osbourne (born 1948)<br>ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Robert Plant（born 1948）",
            "description": "Robert Plant (born 1948)<br>ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1968",
            "title": "Stevie Nicks（born 1948）",
            "description": "Stevie Nicks (born 1948)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1968",
            "title": "Tony Iommi（born 1948）",
            "description": "Tony Iommi (born 1948)<br>ヘヴィメタルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen（born 1949）",
            "description": "Bruce Springsteen (born 1949)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1970",
            "title": "Kraftwerk 結成",
            "description": "Kraftwerk formed<br>電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1970",
            "title": "Peter Gabriel（born 1950）",
            "description": "Peter Gabriel (born 1950)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1970",
            "title": "Queen 結成",
            "description": "Queen formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1970",
            "title": "Tom Petty（1950–2017）",
            "description": "Tom Petty (1950–2017)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1971",
            "title": "Eagles 結成",
            "description": "Eagles formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1971",
            "title": "Joey Ramone（1951–2001）",
            "description": "Joey Ramone (1951–2001)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1972",
            "title": "David Byrne（born 1952）",
            "description": "David Byrne (born 1952)<br>パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1974",
            "title": "Ramones 結成",
            "description": "Ramones formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc（born 1955）",
            "description": "DJ Kool Herc (born 1955)<br>ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen（1955–2020）",
            "description": "Eddie Van Halen (1955–2020)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1975",
            "title": "Sex Pistols 結成",
            "description": "Sex Pistols formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "Johnny Rotten（born 1956）",
            "description": "Johnny Rotten (born 1956)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1976",
            "title": "Joy Division 結成",
            "description": "Joy Division formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "The Clash 結成",
            "description": "The Clash formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1976",
            "title": "U2 結成",
            "description": "U2 formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa（born 1957）",
            "description": "Afrika Bambaataa (born 1957)<br>ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux（born 1957）",
            "description": "Siouxsie Sioux (born 1957)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1977",
            "title": "Talking Heads 結成",
            "description": "Talking Heads formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash（born 1958）",
            "description": "Grandmaster Flash (born 1958)<br>ヒップホップに大きな影響を与えたDJ／音楽革新者。"
        },
        {
            "start": "1978",
            "title": "Kate Bush（born 1958）",
            "description": "Kate Bush (born 1958)<br>ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1978",
            "title": "Madonna（born 1958）",
            "description": "Madonna (born 1958)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "Michael Jackson（1958–2009）",
            "description": "Michael Jackson (1958–2009)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "The Cure 結成",
            "description": "The Cure formed<br>パンク／オルタナティブ・ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1979",
            "title": "Morrissey（born 1959）",
            "description": "Morrissey (born 1959)<br>パンク／オルタナティブ・ロックに大きな影響を与えた歌手。"
        },
        {
            "start": "1979",
            "title": "Robert Smith（born 1959）",
            "description": "Robert Smith (born 1959)<br>パンク／オルタナティブ・ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1980",
            "title": "Chuck D（born 1960）",
            "description": "Chuck D (born 1960)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1981",
            "title": "Metallica 結成",
            "description": "Metallica formed<br>ヘヴィメタルに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1983",
            "title": "George Michael（born 1963）",
            "description": "George Michael (born 1963)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1983",
            "title": "James Hetfield（born 1963）",
            "description": "James Hetfield (born 1963)<br>ヘヴィメタルに大きな影響を与えた歌手。"
        },
        {
            "start": "1983",
            "title": "Johnny Marr（born 1963）",
            "description": "Johnny Marr (born 1963)<br>パンク／オルタナティブ・ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1983",
            "title": "Lars Ulrich（born 1963）",
            "description": "Lars Ulrich (born 1963)<br>ヘヴィメタルに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. 結成",
            "description": "Run-D.M.C. formed<br>ヒップホップに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1983",
            "title": "Whitney Houston（born 1963）",
            "description": "Whitney Houston (born 1963)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Björk（born 1965）",
            "description": "Björk (born 1965)<br>電子音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Dr. Dre（born 1965）",
            "description": "Dr. Dre (born 1965)<br>ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1985",
            "title": "KRS-One（born 1965）",
            "description": "KRS-One (born 1965)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1985",
            "title": "Radiohead 結成",
            "description": "Radiohead formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1986",
            "title": "Janet Jackson（born 1966）",
            "description": "Janet Jackson (born 1966)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1987",
            "title": "Kurt Cobain（1967–1994）",
            "description": "Kurt Cobain (1967–1994)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1987",
            "title": "Nirvana 結成",
            "description": "Nirvana formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest 結成",
            "description": "A Tribe Called Quest formed<br>ヒップホップに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "Celine Dion（born 1968）",
            "description": "Celine Dion (born 1968)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "LL Cool J（born 1968）",
            "description": "LL Cool J (born 1968)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "Massive Attack 結成",
            "description": "Massive Attack formed<br>電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1988",
            "title": "Rakim（born 1968）",
            "description": "Rakim (born 1968)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1988",
            "title": "Thom Yorke（born 1968）",
            "description": "Thom Yorke (born 1968)<br>ロックに大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1989",
            "title": "Dave Grohl（born 1969）",
            "description": "Dave Grohl (born 1969)<br>ロックに大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1989",
            "title": "Ice Cube（born 1969）",
            "description": "Ice Cube (born 1969)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Jay-Z（born 1969）",
            "description": "Jay-Z (born 1969)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Mariah Carey（born 1969）",
            "description": "Mariah Carey (born 1969)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1991",
            "title": "Aphex Twin（born 1971）",
            "description": "Aphex Twin (born 1971)<br>電子音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1991",
            "title": "Missy Elliott（born 1971）",
            "description": "Missy Elliott (born 1971)<br>ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1991",
            "title": "Oasis 結成",
            "description": "Oasis formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1991",
            "title": "Tupac Shakur（1971–1996）",
            "description": "Tupac Shakur (1971–1996)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "Eminem（born 1972）",
            "description": "Eminem (born 1972)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G.（1972–1997）",
            "description": "The Notorious B.I.G. (1972–1997)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1993",
            "title": "Daft Punk 結成",
            "description": "Daft Punk formed<br>電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1993",
            "title": "Nas（born 1973）",
            "description": "Nas (born 1973)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "Lauryn Hill（born 1975）",
            "description": "Lauryn Hill (born 1975)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "M.I.A.（born 1975）",
            "description": "M.I.A. (born 1975)<br>電子音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1995",
            "title": "The White Stripes 結成",
            "description": "The White Stripes formed<br>ロックに大きな影響を与えたグループの結成。"
        },
        {
            "start": "1997",
            "title": "Kanye West（born 1977）",
            "description": "Kanye West (born 1977)<br>ヒップホップに大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "2002",
            "title": "Nicki Minaj（born 1982）",
            "description": "Nicki Minaj (born 1982)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "2006",
            "title": "Lady Gaga（born 1986）",
            "description": "Lady Gaga (born 1986)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar（born 1987）",
            "description": "Kendrick Lamar (born 1987)<br>ヒップホップに大きな影響を与えた歌手。"
        },
        {
            "start": "2008",
            "title": "Adele（born 1988）",
            "description": "Adele (born 1988)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2009",
            "title": "Taylor Swift（born 1989）",
            "description": "Taylor Swift (born 1989)<br>ポピュラー音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2021",
            "title": "Billie Eilish（born 2001）",
            "description": "Billie Eilish (born 2001)<br>ポピュラー音楽に大きな影響を与えた歌手。"
        }
    ]
};

// 世界各地域の音楽家
var tl_global_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1273",
            "title": "Amir Khusrau（1253–1325）",
            "description": "Amir Khusrau (1253–1325)<br>南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1520",
            "title": "Tansen（1500–1586）",
            "description": "Tansen (1500–1586)<br>南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu（1536–1611）",
            "description": "Zhu Zaiyu (1536–1611)<br>東アジア音楽に大きな影響を与えた理論家／音楽思想家。"
        },
        {
            "start": "1782",
            "title": "Syama Sastri（1762–1827）",
            "description": "Syama Sastri (1762–1827)<br>南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1787",
            "title": "Tyagaraja（1767–1847）",
            "description": "Tyagaraja (1767–1847)<br>南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar（1775–1835）",
            "description": "Muthuswami Dikshitar (1775–1835)<br>南アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing)（1889–1935）",
            "description": "Hua Yanjun (Abing) (1889–1935)<br>東アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1910",
            "title": "Carlos Gardel（1890–1935）",
            "description": "Carlos Gardel (1890–1935)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1915",
            "title": "Liu Tianhua（1895–1932）",
            "description": "Liu Tianhua (1895–1932)<br>東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1918",
            "title": "Umm Kulthum（1898–1975）",
            "description": "Umm Kulthum (1898–1975)<br>中東・北アフリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1925",
            "title": "Xian Xinghai（1905–1945）",
            "description": "Xian Xinghai (1905–1945)<br>東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1932",
            "title": "Nie Er（1912–1935）",
            "description": "Nie Er (1912–1935)<br>東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1936",
            "title": "Bismillah Khan（1916–2016）",
            "description": "Bismillah Khan (1916–2016)<br>南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi（1916–2004）",
            "description": "M. S. Subbulakshmi (1916–2004)<br>南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1936",
            "title": "Ravi Shankar（1916–2013）",
            "description": "Ravi Shankar (1916–2013)<br>南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1938",
            "title": "Zhou Xuan（1918–1957）",
            "description": "Zhou Xuan (1918–1957)<br>東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1939",
            "title": "Chavela Vargas（1919–2012）",
            "description": "Chavela Vargas (1919–2012)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan（1920–2012）",
            "description": "Ali Akbar Khan (1920–2012)<br>南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla（1921–1992）",
            "description": "Astor Piazzolla (1921–1992)<br>ラテンアメリカ音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1943",
            "title": "Tito Puente（1923–2000）",
            "description": "Tito Puente (1923–2000)<br>ラテンアメリカ音楽に大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1945",
            "title": "Celia Cruz（1925–2003）",
            "description": "Celia Cruz (1925–2003)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim（1927–1994）",
            "description": "Antônio Carlos Jobim (1927–1994)<br>ラテンアメリカ音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1951",
            "title": "João Gilberto（1931–2019）",
            "description": "João Gilberto (1931–2019)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1952",
            "title": "Miriam Makeba（1932–2008）",
            "description": "Miriam Makeba (1932–2008)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1954",
            "title": "Fairuz（born 1934）",
            "description": "Fairuz (born 1934)<br>中東・北アフリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa（1935–2009）",
            "description": "Mercedes Sosa (1935–2009)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry（1936–2021）",
            "description": "Lee “Scratch” Perry (1936–2021)<br>レゲエ／ジャマイカ音楽に大きな影響を与えたプロデューサー／音楽家。"
        },
        {
            "start": "1957",
            "title": "Hibari Misora（1937–1989）",
            "description": "Hibari Misora (1937–1989)<br>東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1958",
            "title": "Fela Kuti（1938–1997）",
            "description": "Fela Kuti (1938–1997)<br>アフリカの大衆・伝統音楽に大きな影響を与えたバンドリーダー／作曲家。"
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré（1939–2006）",
            "description": "Ali Farka Touré (1939–2006)<br>アフリカの大衆・伝統音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1961",
            "title": "Cesária Évora（1941–2011）",
            "description": "Cesária Évora (1941–2011)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1962",
            "title": "Caetano Veloso（born 1942）",
            "description": "Caetano Veloso (born 1942)<br>ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Gilberto Gil（born 1942）",
            "description": "Gilberto Gil (born 1942)<br>ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1962",
            "title": "Milton Nascimento（born 1942）",
            "description": "Milton Nascimento (born 1942)<br>ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff（born 1944）",
            "description": "Jimmy Cliff (born 1944)<br>レゲエ／ジャマイカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1964",
            "title": "Peter Tosh（1944–1987）",
            "description": "Peter Tosh (1944–1987)<br>レゲエ／ジャマイカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1965",
            "title": "Bob Marley（1945–1981）",
            "description": "Bob Marley (1945–1981)<br>レゲエ／ジャマイカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan（1948–1997）",
            "description": "Nusrat Fateh Ali Khan (1948–1997)<br>南アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1969",
            "title": "Salif Keita（born 1949）",
            "description": "Salif Keita (born 1949)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1970",
            "title": "Juan Gabriel（1950–2016）",
            "description": "Juan Gabriel (1950–2016)<br>ラテンアメリカ音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "1971",
            "title": "Zakir Hussain（1951–2024）",
            "description": "Zakir Hussain (1951–2024)<br>南アジア音楽に大きな影響を与えた器楽奏者。"
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto（1952–2023）",
            "description": "Ryuichi Sakamoto (1952–2023)<br>東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1973",
            "title": "Kitarō（born 1953）",
            "description": "Kitarō (born 1953)<br>東アジア音楽に大きな影響を与えた作曲家。"
        },
        {
            "start": "1973",
            "title": "Teresa Teng（1953–1995）",
            "description": "Teresa Teng (1953–1995)<br>東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra 結成",
            "description": "Yellow Magic Orchestra formed<br>電子音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour（born 1959）",
            "description": "Youssou N’Dour (born 1959)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo（born 1960）",
            "description": "Angélique Kidjo (born 1960)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1989",
            "title": "Faye Wong（born 1969）",
            "description": "Faye Wong (born 1969)<br>東アジア音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1991",
            "title": "Selena（1971–1995）",
            "description": "Selena (1971–1995)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys 結成",
            "description": "Seo Taiji and Boys formed<br>東アジア音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "1997",
            "title": "Shakira（born 1977）",
            "description": "Shakira (born 1977)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "1999",
            "title": "Jay Chou（born 1979）",
            "description": "Jay Chou (born 1979)<br>東アジア音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2003",
            "title": "Hikaru Utada（born 1983）",
            "description": "Hikaru Utada (born 1983)<br>東アジア音楽に大きな影響を与えたソングライター／演奏家。"
        },
        {
            "start": "2011",
            "title": "Burna Boy（born 1991）",
            "description": "Burna Boy (born 1991)<br>アフリカの大衆・伝統音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2013",
            "title": "BTS 結成",
            "description": "BTS formed<br>ポピュラー音楽に大きな影響を与えたグループの結成。"
        },
        {
            "start": "2014",
            "title": "Bad Bunny（born 1994）",
            "description": "Bad Bunny (born 1994)<br>ラテンアメリカ音楽に大きな影響を与えた歌手。"
        },
        {
            "start": "2016",
            "title": "BLACKPINK 結成",
            "description": "BLACKPINK formed<br>ポピュラー音楽に大きな影響を与えたグループの結成。"
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
            "description": "Hildegard’s Ordo Virtutum<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1360",
            "title": "マショー《ノートルダム・ミサ》",
            "description": "Machaut’s Messe de Nostre Dame<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1597",
            "title": "ペーリ／コルシ《ダフネ》",
            "description": "Peri and Corsi’s Dafne<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1607",
            "title": "モンテヴェルディ《オルフェオ》初演",
            "description": "Monteverdi’s L’Orfeo premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1642",
            "title": "モンテヴェルディ《ポッペアの戴冠》",
            "description": "Monteverdi’s L’incoronazione di Poppea<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1689",
            "title": "パーセル《ディドとエネアス》",
            "description": "Purcell’s Dido and Aeneas<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1711",
            "title": "ヘンデル《リナルド》ロンドン初演",
            "description": "Handel’s Rinaldo premieres in London<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1721",
            "title": "バッハ《ブランデンブルク協奏曲》成立",
            "description": "Bach’s Brandenburg Concertos assembled<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1725",
            "title": "ヴィヴァルディ《四季》出版",
            "description": "Vivaldi’s The Four Seasons published<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1741",
            "title": "バッハ《ゴルトベルク変奏曲》出版",
            "description": "Bach’s Goldberg Variations published<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1742",
            "title": "ヘンデル《メサイア》初演",
            "description": "Handel’s Messiah premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1749",
            "title": "ヘンデル《王宮の花火の音楽》",
            "description": "Handel’s Music for the Royal Fireworks<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1762",
            "title": "グルック《オルフェオとエウリディーチェ》初演",
            "description": "Gluck’s Orfeo ed Euridice premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1786",
            "title": "モーツァルト《フィガロの結婚》初演",
            "description": "Mozart’s The Marriage of Figaro premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1787",
            "title": "モーツァルト《ドン・ジョヴァンニ》初演",
            "description": "Mozart’s Don Giovanni premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1791",
            "title": "モーツァルト《魔笛》初演",
            "description": "Mozart’s The Magic Flute premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1805",
            "title": "ベートーヴェン《英雄》公開初演",
            "description": "Beethoven’s Eroica Symphony public premiere<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1808-12-22",
            "title": "ベートーヴェン第5・第6交響曲初演",
            "description": "Beethoven premieres the Fifth and Sixth Symphonies<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1816",
            "title": "ロッシーニ《セビリアの理髪師》初演",
            "description": "Rossini’s The Barber of Seville premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1821",
            "title": "ウェーバー《魔弾の射手》初演",
            "description": "Weber’s Der Freischütz premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1824-05-07",
            "title": "ベートーヴェン第9交響曲初演",
            "description": "Beethoven’s Ninth Symphony premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1830",
            "title": "ベルリオーズ《幻想交響曲》初演",
            "description": "Berlioz’s Symphonie fantastique premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1831",
            "title": "ベッリーニ《ノルマ》初演",
            "description": "Bellini’s Norma premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1842",
            "title": "ヴェルディ《ナブッコ》初演",
            "description": "Verdi’s Nabucco premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1845",
            "title": "メンデルスゾーン《ヴァイオリン協奏曲》初演",
            "description": "Mendelssohn’s Violin Concerto premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1853",
            "title": "ヴェルディ《椿姫》初演",
            "description": "Verdi’s La traviata premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1865",
            "title": "ワーグナー《トリスタンとイゾルデ》初演",
            "description": "Wagner’s Tristan und Isolde premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1871",
            "title": "ヴェルディ《アイーダ》初演",
            "description": "Verdi’s Aida premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1876",
            "title": "《ニーベルングの指環》全曲がバイロイトで上演",
            "description": "Complete Ring cycle opens at Bayreuth<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1877",
            "title": "チャイコフスキー《白鳥の湖》初演",
            "description": "Tchaikovsky’s Swan Lake premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1882",
            "title": "ワーグナー《パルジファル》初演",
            "description": "Wagner’s Parsifal premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1888",
            "title": "リムスキー＝コルサコフ《シェヘラザード》初演",
            "description": "Rimsky-Korsakov’s Scheherazade premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1890",
            "title": "マスカーニ《カヴァレリア・ルスティカーナ》初演",
            "description": "Mascagni’s Cavalleria rusticana premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1892",
            "title": "チャイコフスキー《くるみ割り人形》初演",
            "description": "Tchaikovsky’s The Nutcracker premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1893",
            "title": "ドヴォルザーク《新世界より》初演",
            "description": "Dvořák’s New World Symphony premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1896",
            "title": "プッチーニ《ラ・ボエーム》初演",
            "description": "Puccini’s La bohème premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1900",
            "title": "プッチーニ《トスカ》初演",
            "description": "Puccini’s Tosca premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1902",
            "title": "ドビュッシー《ペレアスとメリザンド》初演",
            "description": "Debussy’s Pelléas et Mélisande premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1905",
            "title": "R.シュトラウス《サロメ》初演",
            "description": "Richard Strauss’s Salome premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1910",
            "title": "ストラヴィンスキー《火の鳥》初演",
            "description": "Stravinsky’s The Firebird premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1911",
            "title": "ストラヴィンスキー《ペトルーシュカ》初演",
            "description": "Stravinsky’s Petrushka premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1912",
            "title": "シェーンベルク《月に憑かれたピエロ》初演",
            "description": "Schoenberg’s Pierrot lunaire premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1913-05-29",
            "title": "《春の祭典》パリ初演",
            "description": "The Rite of Spring premieres in Paris<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1918",
            "title": "ホルスト《惑星》全曲公開演奏",
            "description": "Holst’s The Planets receives complete public performance<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1924-02-12",
            "title": "ガーシュウィン《ラプソディ・イン・ブルー》初演",
            "description": "Gershwin’s Rhapsody in Blue premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1925",
            "title": "ベルク《ヴォツェック》初演",
            "description": "Berg’s Wozzeck premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1927",
            "title": "《ショウ・ボート》ブロードウェイ開幕",
            "description": "Show Boat opens on Broadway<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1928",
            "title": "ラヴェル《ボレロ》初演",
            "description": "Ravel’s Boléro premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1935",
            "title": "《ポーギーとベス》初演",
            "description": "Porgy and Bess premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1937",
            "title": "オルフ《カルミナ・ブラーナ》初演",
            "description": "Orff’s Carmina Burana premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1943",
            "title": "《オクラホマ！》ブロードウェイ開幕",
            "description": "Oklahoma! opens on Broadway<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1944",
            "title": "コープランド《アパラチアの春》初演",
            "description": "Copland’s Appalachian Spring premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1945",
            "title": "ブリテン《ピーター・グライムズ》初演",
            "description": "Britten’s Peter Grimes premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1952-08-29",
            "title": "ケージ《4分33秒》初演",
            "description": "Cage’s 4′33″ premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1956",
            "title": "シュトックハウゼン《少年の歌》完成",
            "description": "Stockhausen’s Gesang der Jünglinge completed<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1957",
            "title": "《ウエスト・サイド物語》ブロードウェイ開幕",
            "description": "West Side Story opens on Broadway<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1958",
            "title": "ヴァレーズ《ポエム・エレクトロニク》ブリュッセル万博",
            "description": "Varèse’s Poème électronique at the Brussels World’s Fair<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1964",
            "title": "テリー・ライリー《In C》初演",
            "description": "Terry Riley’s In C premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1976",
            "title": "グラス《浜辺のアインシュタイン》初演",
            "description": "Glass’s Einstein on the Beach premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1977",
            "title": "《スター・ウォーズ》が大作管弦映画音楽モデルを再確立",
            "description": "Star Wars establishes a new blockbuster orchestral film-score model<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "1987",
            "title": "ジョン・アダムズ《中国のニクソン》初演",
            "description": "John Adams’s Nixon in China premieres<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
        },
        {
            "start": "2015",
            "title": "《ハミルトン》ブロードウェイ開幕",
            "description": "Hamilton opens on Broadway<br>音楽語法・レパートリー・演奏慣行を変えた重要作品または初演。"
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
            "description": "Handel’s Music for the Royal Fireworks public rehearsal<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1808-12-22",
            "title": "ベートーヴェンのウィーン大演奏会",
            "description": "Beethoven’s Vienna marathon concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1824-05-07",
            "title": "ベートーヴェン第九初演演奏会",
            "description": "Beethoven’s Ninth premiere concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1850-09-11",
            "title": "ジェニー・リンドの米国ツアー開始",
            "description": "Jenny Lind begins the American tour promoted by P. T. Barnum<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1871",
            "title": "フィスク・ジュビリー・シンガーズ大規模巡演開始",
            "description": "Fisk Jubilee Singers begin major tours<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1876-08-13",
            "title": "第1回バイロイト音楽祭が《指環》で開幕",
            "description": "First Bayreuth Festival opens with the Ring cycle<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1891-05-05",
            "title": "カーネギー・ホール開館演奏会",
            "description": "Carnegie Hall opening night<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1912-05-02",
            "title": "クレフ・クラブ管弦楽団カーネギー公演",
            "description": "James Reese Europe’s Clef Club Orchestra at Carnegie Hall<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1913-05-29",
            "title": "《春の祭典》初演と観客騒動",
            "description": "The Rite of Spring premiere and audience uproar<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1924-02-12",
            "title": "「現代音楽の実験」で《ラプソディ・イン・ブルー》初演",
            "description": "An Experiment in Modern Music premieres Rhapsody in Blue<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1938-01-16",
            "title": "ベニー・グッドマンのカーネギー・ホール公演",
            "description": "Benny Goodman Carnegie Hall concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1939-04-09",
            "title": "マリアン・アンダーソン、リンカーン記念堂で歌唱",
            "description": "Marian Anderson sings at the Lincoln Memorial<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1943-01-23",
            "title": "デューク・エリントンがカーネギーで《Black, Brown and Beige》",
            "description": "Duke Ellington presents Black, Brown and Beige at Carnegie Hall<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1954-07-17",
            "title": "第1回ニューポート・ジャズ・フェスティバル",
            "description": "First Newport Jazz Festival<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1959-07-11",
            "title": "第1回ニューポート・フォーク・フェスティバル",
            "description": "First Newport Folk Festival<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1964-02-12",
            "title": "ビートルズ、カーネギー・ホール公演",
            "description": "The Beatles perform at Carnegie Hall<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1965-07-25",
            "title": "ボブ・ディラン、ニューポートでエレクトリック化",
            "description": "Bob Dylan goes electric at Newport Folk Festival<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1965-08-15",
            "title": "ビートルズ、シェイ・スタジアム公演",
            "description": "The Beatles at Shea Stadium<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1966-06-30",
            "title": "ビートルズ日本武道館公演開始",
            "description": "The Beatles begin Budokan concerts in Tokyo<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1967-06-16",
            "title": "モントレー国際ポップ・フェスティバル開幕",
            "description": "Monterey International Pop Festival opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1968-12-11",
            "title": "ローリング・ストーンズ「ロックンロール・サーカス」収録",
            "description": "The Rolling Stones Rock and Roll Circus filmed<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1969-12-06",
            "title": "オルタモント無料コンサート",
            "description": "Altamont Free Concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1969-08-15",
            "title": "ウッドストック音楽芸術祭開幕",
            "description": "Woodstock Music & Art Fair opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1970-08-26",
            "title": "ワイト島フェスティバル1970開幕",
            "description": "Isle of Wight Festival 1970 opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1971-08-01",
            "title": "バングラデシュ救済コンサート",
            "description": "Concert for Bangladesh<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1971",
            "title": "ピンク・フロイド《ライヴ・アット・ポンペイ》撮影",
            "description": "Pink Floyd: Live at Pompeii filmed<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1972-08-20",
            "title": "ワッツタックス・フェスティバル",
            "description": "Wattstax festival<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1973-01-14",
            "title": "エルヴィス「アロハ・フロム・ハワイ」衛星公演",
            "description": "Elvis: Aloha from Hawaii satellite concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1974-09-22",
            "title": "ザイール74音楽祭開始",
            "description": "Zaire 74 music festival begins<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1976-06-04",
            "title": "セックス・ピストルズ、マンチェスター公演",
            "description": "Sex Pistols at Manchester Lesser Free Trade Hall<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1976-11-25",
            "title": "ザ・バンド「ラスト・ワルツ」公演",
            "description": "The Band’s The Last Waltz concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1978-04-22",
            "title": "キングストン「ワン・ラブ・ピース・コンサート」",
            "description": "One Love Peace Concert in Kingston<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1979-09-19",
            "title": "マディソン・スクエア・ガーデン「No Nukes」開始",
            "description": "No Nukes concerts begin at Madison Square Garden<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1979",
            "title": "YMO ワールドツアー",
            "description": "Yellow Magic Orchestra world tour<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1981-11-24",
            "title": "クイーン「ロック・モントリオール」公演開始",
            "description": "Queen Rock Montreal concerts begin<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1982-09-03",
            "title": "USフェスティバル開幕",
            "description": "US Festival opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1983-03-25",
            "title": "テレビ公演「Motown 25」収録",
            "description": "Motown 25 television concert recorded<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1985-07-13",
            "title": "ライブ・エイド",
            "description": "Live Aid<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1985",
            "title": "ヌスラット・ファテ・アリー・ハーンが国際フェス層へ",
            "description": "Nusrat Fateh Ali Khan reaches major international festival audiences<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1986-04-05",
            "title": "ジャン＝ミシェル・ジャール「ランデヴー・ヒューストン」",
            "description": "Jean-Michel Jarre’s Rendez-vous Houston<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1988-06-11",
            "title": "ネルソン・マンデラ70歳記念コンサート",
            "description": "Nelson Mandela 70th Birthday Tribute<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1990-07-21",
            "title": "ロジャー・ウォーターズ、ベルリンで《ザ・ウォール》",
            "description": "Roger Waters stages The Wall in Berlin<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1992",
            "title": "第1回パヴァロッティ＆フレンズ慈善公演",
            "description": "First Pavarotti & Friends benefit concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1992-04-20",
            "title": "フレディ・マーキュリー追悼コンサート",
            "description": "Freddie Mercury Tribute Concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1993-11-18",
            "title": "ニルヴァーナ「MTVアンプラグド」ニューヨーク収録",
            "description": "Nirvana MTV Unplugged in New York<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1994-08-12",
            "title": "ウッドストック94開幕",
            "description": "Woodstock ’94 opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1996-06-15",
            "title": "第1回チベタン・フリーダム・コンサート",
            "description": "First Tibetan Freedom Concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1996-08-10",
            "title": "オアシス、ネブワース公演開始",
            "description": "Oasis begins Knebworth concerts<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1998-07-01",
            "title": "ブエナ・ビスタ・ソシアル・クラブ、カーネギー公演",
            "description": "Buena Vista Social Club performs at Carnegie Hall<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1999-04-21",
            "title": "メタリカ、サンフランシスコ交響楽団と《S&M》収録",
            "description": "Metallica records S&M concerts with the San Francisco Symphony<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "1999-07-22",
            "title": "ウッドストック99開幕",
            "description": "Woodstock ’99 opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2001-10-20",
            "title": "ニューヨーク市支援コンサート",
            "description": "The Concert for New York City<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2003-07-30",
            "title": "トロントSARS支援大コンサート",
            "description": "Molson Canadian Rocks for Toronto SARS benefit<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2005-07-02",
            "title": "ライブ8",
            "description": "Live 8 concerts<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2006-04-29",
            "title": "ダフト・パンク、コーチェラのピラミッド公演",
            "description": "Daft Punk’s Coachella pyramid performance<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2007-12-10",
            "title": "レッド・ツェッペリンO2再結成公演",
            "description": "Led Zeppelin reunion at the O2 Arena<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2011-06-26",
            "title": "ビヨンセ、グラストンベリーのヘッドライナー",
            "description": "Beyoncé headlines Glastonbury<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2012-12-12",
            "title": "ハリケーン・サンディ支援「12-12-12」",
            "description": "12-12-12: The Concert for Sandy Relief<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2018-04-14",
            "title": "ビヨンセ、コーチェラ「Homecoming」公演",
            "description": "Beyoncé’s Coachella “Homecoming” performance<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2019-06-01",
            "title": "BTS ウェンブリー・スタジアム公演開始",
            "description": "BTS begins Wembley Stadium concerts<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2020-04-18",
            "title": "「One World: Together at Home」配信公演",
            "description": "One World: Together at Home broadcast concert<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK、コーチェラのヘッドライナー",
            "description": "BLACKPINK headlines Coachella<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-03-17",
            "title": "テイラー・スウィフト「The Eras Tour」開幕",
            "description": "Taylor Swift’s Eras Tour opens<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
        },
        {
            "start": "2023-09-29",
            "title": "U2、ラスベガスSphere開幕公演",
            "description": "U2 opens the Sphere in Las Vegas<br>歴史的影響をもつコンサート・フェスティバル・放送公演・ツアー。"
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
