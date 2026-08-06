var title = "音楽年表";

// 日本語版：人物には可能な限り代表作を記載し、時代区分の開始・終了年は編集上の概算とする。

// 世界音楽史から主要項目を選んだ年表。人物は20歳の年、団体は結成年に配置し、ジャンルの期間は編集上の概算とする。
// SIMILE BCE rule: every negative year is a minus sign followed by exactly four digits.
// Astronomical numbering: 0000 = 1 BCE, -0001 = 2 BCE, -9999 = 10000 BCE.

// 世界の音楽伝統と長期的な時代区分
var tl_global_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "end": "-2999",
            "title": "紀元前1万年以前の音楽先史と新石器時代の儀礼音楽",
            "description": "[Deep musical prehistory before 10,000 BCE and Neolithic ritual music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "メソポタミアの神殿音楽と宮廷音楽",
            "description": "[Mesopotamian temple and court music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-2999",
            "end": "-0299",
            "title": "古代エジプト音楽",
            "description": "[Ancient Egyptian music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1999",
            "end": "-0220",
            "title": "古代中国の青銅編鐘と礼楽",
            "description": "[Bronze-bell and ritual music in ancient China]<br>大きさと鋳造厚の違いで体系的な音高を作り、曾侯乙墓の編鐘は一つの鐘から関連する二音を得る設計を示し、高度な音律・合奏技術を物語る。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-1499",
            "end": "-0499",
            "title": "ヴェーダ詠唱",
            "description": "[Vedic chant]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0799",
            "end": "-0199",
            "title": "古代ギリシア音楽",
            "description": "[Ancient Greek music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "1200",
            "title": "初期ユダヤ典礼音楽",
            "description": "[Early Jewish liturgical music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "-0499",
            "end": "0500",
            "title": "ローマおよび古代末期の音楽",
            "description": "[Roman and late-antique music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0200",
            "end": "1200",
            "title": "インド古典音楽理論とラーガ体系の形成",
            "description": "[Formation of Indian classical theory and raga systems]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0330",
            "end": "1453",
            "title": "ビザンティン聖歌",
            "description": "[Byzantine chant]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0600",
            "end": "2026",
            "title": "中国文人の琴楽伝統",
            "description": "[Chinese qin literati tradition]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0700",
            "end": "2026",
            "title": "日本の雅楽",
            "description": "[Japanese gagaku]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0750",
            "end": "1300",
            "title": "アッバース朝期のアラブ・ペルシア宮廷音楽",
            "description": "[Abbasid-era Arabic and Persian court music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0800",
            "end": "2026",
            "title": "ジャワとバリのガムラン伝統",
            "description": "[Javanese and Balinese gamelan traditions]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "0900",
            "end": "2026",
            "title": "アンダルシア古典音楽",
            "description": "[Andalusi classical music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1100",
            "end": "2026",
            "title": "西アフリカのグリオとコラの伝統",
            "description": "[West African griot and kora traditions]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1150",
            "end": "2026",
            "title": "カッワーリーと南アジアのスーフィー音楽",
            "description": "[Qawwali and South Asian Sufi music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "中国戯曲音楽の伝統",
            "description": "[Chinese opera traditions]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1200",
            "end": "2026",
            "title": "北インド古典音楽",
            "description": "[Hindustani classical music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "2026",
            "title": "日本の能楽",
            "description": "[Japanese Noh music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1300",
            "end": "1922",
            "title": "オスマン古典音楽",
            "description": "[Ottoman classical music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1450",
            "end": "2026",
            "title": "南インド古典音楽",
            "description": "[Carnatic classical music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1500",
            "end": "2026",
            "title": "崑曲",
            "description": "[Kunqu opera]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1600",
            "end": "2026",
            "title": "歌舞伎音楽",
            "description": "[Kabuki music]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1770",
            "end": "2026",
            "title": "フラメンコ",
            "description": "[Flamenco]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1790",
            "end": "2026",
            "title": "京劇",
            "description": "[Beijing opera]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1880",
            "end": "1955",
            "title": "タンゴの形成と黄金時代",
            "description": "[Tango: formation and golden age]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1900",
            "end": "1970",
            "title": "ハイライフ",
            "description": "[Highlife]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "サンバ",
            "description": "[Samba]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "マンドポップと中国語圏の流行歌",
            "description": "[Mandopop and Chinese-language popular song]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1920",
            "end": "2026",
            "title": "ライ音楽",
            "description": "[Raï]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1950",
            "end": "2026",
            "title": "演歌",
            "description": "[Enka]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "ボサノヴァ",
            "description": "[Bossa nova]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "ヌエバ・カンシオン",
            "description": "[Nueva canción]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1960",
            "end": "1985",
            "title": "サルサの古典期",
            "description": "[Salsa: classic period]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1965",
            "end": "2026",
            "title": "ムジカ・ポプラール・ブラジレイラ（MPB）",
            "description": "[Música popular brasileira (MPB)]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "アフロビート",
            "description": "[Afrobeat]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "レゲエ",
            "description": "[Reggae]<br>ジャマイカのオフビート、ベース主導の編曲、サウンドシステム文化は曲・ヴァージョン・ミックスを再利用可能な素材とし、ダブはさらにスタジオ自体を演奏装置へ変えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1970",
            "end": "1989",
            "title": "日本のシティ・ポップ",
            "description": "[Japanese city pop]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ラテン・ポップ",
            "description": "[Latin pop]<br>単一で閉じた「様式」ではなく、儀礼、宮廷、宗教、口承系譜、地域楽器によって維持された伝統であり、年代は識別可能な形態または影響の強い時期の概算である。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "J-POP",
            "description": "[J-pop]<br>テレビ、アニメ、アイドル産業、レコード会社が日本のポピュラーソングを共同で形成し、西洋由来の和声、日本語の韻律、精密な編曲を結びつけた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "1992",
            "end": "2026",
            "title": "K-POP",
            "description": "[K-pop]<br>練習生制度、精密な振付、国際的な作家陣、高密度の映像発信を産業システムとして統合し、動画プラットフォームと組織化されたファンダムを通じて世界市場を形成した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "アフロビーツ",
            "description": "[Afrobeats]<br>ナイジェリアとガーナの制作者がハイライフ、ヒップホップ、R&B、ダンスホール、電子ビートを軽快でシンコペートしたポップへ融合し、ストリーミングを通じて国際市場へ広げた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8D6E63"
        },
        {
            "start": "2012",
            "end": "2026",
            "title": "アマピアノ",
            "description": "[Amapiano]<br>南アフリカの制作者が遅めのハウス・テンポ、ジャズ的和音、広がりある鍵盤、ロッグ・ドラムの低音を組み合わせ、寛いだ感触とダンスフロアの力強さを両立させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
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
            "description": "[Medieval music]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1100",
            "title": "グレゴリオ聖歌のレパートリー",
            "description": "[Gregorian chant repertory]<br>ラテン典礼の単旋律聖歌を中心とし、口承と発達するネウマ記譜によって伝承され、初期ヨーロッパ多声音楽の主要素材となった。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1100",
            "end": "1300",
            "title": "ノートルダム楽派のポリフォニーとアルス・アンティクァ",
            "description": "[Notre-Dame polyphony and Ars antiqua]<br>ノートルダム楽派は聖歌を持続声部として引き延ばし、その上にリズム化された複数声部を重ね、リズム記譜と大規模な宗教多声音楽を発展させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1310",
            "end": "1377",
            "title": "アルス・ノーヴァ",
            "description": "[Ars nova]<br>精密化したリズム記譜により二分法、シンコペーション、イソリズムが記述可能となり、マショーらはモテット、ミサ、世俗歌曲の複雑さを拡大した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1600",
            "title": "ルネサンス音楽",
            "description": "[Renaissance music]<br>各声部の均衡が進み模倣対位法が広く用いられ、楽譜印刷と宮廷・教会の人的ネットワークがフランドル系の作曲技法を欧州各地へ伝えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1450",
            "end": "1550",
            "title": "フランドル楽派のポリフォニー",
            "description": "[Franco-Flemish polyphony]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1520",
            "end": "1600",
            "title": "マドリガーレの時代",
            "description": "[Madrigal era]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1580",
            "end": "1750",
            "title": "バロック音楽",
            "description": "[Baroque music]<br>通奏低音、機能和声、音楽的修辞、独奏と合奏の対比が中心となり、オペラ、協奏曲、ソナタ、オラトリオが持続的な形式を得た。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1650",
            "title": "初期オペラとモノディ",
            "description": "[Early opera and monody]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1650",
            "end": "1750",
            "title": "盛期バロック",
            "description": "[High Baroque]<br>通奏低音、機能和声、音楽的修辞、独奏と合奏の対比が中心となり、オペラ、協奏曲、ソナタ、オラトリオが持続的な形式を得た。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1720",
            "end": "1770",
            "title": "ギャラント様式",
            "description": "[Galant style]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1730",
            "end": "1820",
            "title": "古典派音楽",
            "description": "[Classical period]<br>ソナタ形式、交響曲、弦楽四重奏、公開演奏会文化が成熟し、主題展開と調性構造がバロックの持続低音中心の書法に代わって前面に出た。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1760",
            "end": "1785",
            "title": "音楽における疾風怒濤",
            "description": "[Sturm und Drang in music]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1790",
            "end": "1910",
            "title": "ロマン派音楽",
            "description": "[Romantic music]<br>作曲家は管弦楽と和声の範囲を拡大し、歌曲、性格的小品、交響詩、楽劇によって個人経験、文学的想像力、民族的アイデンティティを表現した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1830",
            "end": "1900",
            "title": "ヴィルトゥオーゾ演奏会文化",
            "description": "[Virtuoso concert culture]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1840",
            "end": "1910",
            "title": "音楽的ナショナリズム",
            "description": "[Musical nationalism]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1860",
            "end": "1910",
            "title": "後期ロマン主義",
            "description": "[Late Romanticism]<br>作曲家は管弦楽と和声の範囲を拡大し、歌曲、性格的小品、交響詩、楽劇によって個人経験、文学的想像力、民族的アイデンティティを表現した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1880",
            "end": "1925",
            "title": "印象主義と音楽的象徴主義",
            "description": "[Impressionism and musical symbolism]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1900",
            "end": "1945",
            "title": "音楽モダニズム",
            "description": "[Musical modernism]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1908",
            "end": "1925",
            "title": "表現主義と自由無調性",
            "description": "[Expressionism and free atonality]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1950",
            "title": "新古典主義",
            "description": "[Neoclassicism]<br>ソナタ形式、交響曲、弦楽四重奏、公開演奏会文化が成熟し、主題展開と調性構造がバロックの持続低音中心の書法に代わって前面に出た。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1920",
            "end": "1970",
            "title": "十二音技法とセリー主義",
            "description": "[Serialism and twelve-tone composition]<br>十二の半音を含む音列と、その反行・逆行などの変形によって音高を組織し、伝統的な調中心に依存せず構造的統一を得ようとした。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1940",
            "end": "1970",
            "title": "ミュジーク・コンクレートと初期電子芸術音楽",
            "description": "[Musique concrète and early electronic art music]<br>現実音を録音し、編集、速度変化、逆再生、ループで再構成することで、作曲は「楽器のために書く」ことから音素材そのものを扱うことへ移った。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1945",
            "end": "1975",
            "title": "戦後前衛音楽",
            "description": "[Postwar avant-garde]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1958",
            "end": "2026",
            "title": "ミニマリズムとポスト・ミニマリズム",
            "description": "[Minimalism and post-minimalism]<br>短い動機の反復、安定した拍動、緩やかな過程が複雑なセリー構造に代わり、位相ずれ、加算過程、持続和声が代表的手法となった。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ポストモダンと多様式主義の作曲",
            "description": "[Postmodern and polystylistic composition]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "スペクトル楽派",
            "description": "[Spectral music]<br>音響スペクトルと倍音構造を和声・管弦楽法の出発点とし、時間の中で音色が連続的に変形する過程を重視した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "新複雑性",
            "description": "[New complexity]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "デジタル／マルチメディア芸術音楽",
            "description": "[Digital and multimedia art music]<br>作曲法、演奏制度、聴衆構造が同時に変化した点に意義があり、開始・終了年は表示用の編集的境界であって全地域が同時に移行した日付ではない。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        }
    ]
};

// ポピュラー、ジャズ、民俗、電子音楽のジャンル
var tl_popular_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1830",
            "end": "1920",
            "title": "アメリカ合衆国のミンストレル・ショー",
            "description": "[Minstrelsy in the United States]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1860",
            "end": "1930",
            "title": "演奏会と出版文化におけるアフリカ系アメリカ人霊歌",
            "description": "[African American spirituals in concert and print culture]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1870",
            "end": "1930",
            "title": "ブラスバンドの時代",
            "description": "[Brass-band era]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "2026",
            "title": "ブルース",
            "description": "[Blues]<br>アフリカ系アメリカ人の労働歌、霊歌、民間叙事が合流し、ブルー・ノート、コール・アンド・レスポンス、典型的な12小節形式を特徴とする伝統となり、ジャズ、R&B、ロックを大きく形作った。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1890",
            "end": "1920",
            "title": "ラグタイム",
            "description": "[Ragtime]<br>規則的な左手伴奏と右手のシンコペーション旋律が緊張を生み、楽譜出版とピアノロールによって録音産業の成熟以前から広く普及した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "カントリーとオールドタイム音楽",
            "description": "[Country and old-time music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "2026",
            "title": "ゴスペル音楽",
            "description": "[Gospel music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ニューオーリンズ・ジャズ",
            "description": "[New Orleans jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1900",
            "end": "1930",
            "title": "ティン・パン・アレー歌曲の時代",
            "description": "[Tin Pan Alley song era]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1910",
            "end": "2026",
            "title": "ジャズ",
            "description": "[Jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1920",
            "end": "1945",
            "title": "クラシック・ブルースと初期録音ブルース",
            "description": "[Classic blues and early recorded blues]<br>アフリカ系アメリカ人の労働歌、霊歌、民間叙事が合流し、ブルー・ノート、コール・アンド・レスポンス、典型的な12小節形式を特徴とする伝統となり、ジャズ、R&B、ロックを大きく形作った。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1925",
            "end": "1945",
            "title": "クルーナーの時代",
            "description": "[Crooner era]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1955",
            "title": "ビッグバンド・ジャズ",
            "description": "[Big-band jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "2026",
            "title": "映画音楽とサウンドトラック文化",
            "description": "[Film music and soundtrack culture]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1930",
            "end": "1946",
            "title": "スウィング時代",
            "description": "[Swing era]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1935",
            "end": "1955",
            "title": "ウェスタン・スウィング",
            "description": "[Western swing]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "ブルーグラス",
            "description": "[Bluegrass]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1940",
            "end": "2026",
            "title": "リズム・アンド・ブルース",
            "description": "[Rhythm and blues]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1960",
            "title": "ビバップ",
            "description": "[Bebop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1948",
            "end": "1965",
            "title": "クール・ジャズ",
            "description": "[Cool jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ドゥーワップ",
            "description": "[Doo-wop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1970",
            "title": "ハード・バップ",
            "description": "[Hard bop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ホンキートンク・カントリー",
            "description": "[Honky-tonk country]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1950",
            "end": "1965",
            "title": "ロックンロール",
            "description": "[Rock and roll]<br>増幅されたギター、強いバックビート、若者のダンス文化がR&Bとカントリーを再結合し、シングル、ラジオ、テレビ、ライブを通じて大衆文化を形成した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "1970",
            "title": "ナッシュビル・サウンド",
            "description": "[Nashville sound]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1955",
            "end": "2026",
            "title": "ソウル・ミュージック",
            "description": "[Soul music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "モード・ジャズ",
            "description": "[Modal jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1958",
            "end": "1970",
            "title": "サーフ・ミュージック",
            "description": "[Surf music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1975",
            "title": "フリー・ジャズ",
            "description": "[Free jazz]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "2026",
            "title": "ファンク",
            "description": "[Funk]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1960",
            "end": "1970",
            "title": "モータウン・サウンド",
            "description": "[Motown sound]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1963",
            "end": "1968",
            "title": "ブリティッシュ・インヴェイジョン",
            "description": "[British Invasion]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1964",
            "end": "1975",
            "title": "フォーク・ロック",
            "description": "[Folk rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1975",
            "title": "ガレージ・ロック",
            "description": "[Garage rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1965",
            "end": "1972",
            "title": "サイケデリック・ロック",
            "description": "[Psychedelic rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1967",
            "end": "1980",
            "title": "プログレッシブ・ロック",
            "description": "[Progressive rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "1985",
            "title": "ハード・ロック",
            "description": "[Hard rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1968",
            "end": "2026",
            "title": "ヘヴィメタル",
            "description": "[Heavy metal]<br>高ゲインの歪み、低音域のリフ、強烈なドラムがハードロックをより重厚で劇的な音へ押し進め、後にスラッシュ、デス、ブラックなど多数の下位ジャンルへ分岐した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1969",
            "end": "1985",
            "title": "ジャズ・フュージョン",
            "description": "[Jazz fusion]<br>固定編成よりもスウィング、即興、ブルース語法、アンサンブルの相互作用を核とし、ニューオーリンズ、ビバップ、フリー・ジャズ、フュージョンがそれらを繰り返し組み替えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "2026",
            "title": "ダブ",
            "description": "[Dub]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "グラム・ロック",
            "description": "[Glam rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1985",
            "title": "アウトロー・カントリー",
            "description": "[Outlaw country]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1970",
            "end": "1990",
            "title": "シンガーソングライターの時代",
            "description": "[Singer-songwriter era]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1973",
            "end": "2026",
            "title": "ヒップホップ",
            "description": "[Hip-hop]<br>DJがレコードのブレイクを延長し、MCが韻文で場を組織した。のちにサンプラー、ドラムマシン、多重録音が地域文化を世界的な制作・物語表現の体系へ発展させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "ディスコ",
            "description": "[Disco]<br>安定した四つ打ち、オクターブ・ベース、弦と打楽器の編曲が連続するダンスフロア体験を支え、12インチ盤とDJリミックスが曲の長さと流通形態を変えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1982",
            "title": "パンク・ロック",
            "description": "[Punk rock]<br>短い曲、単純化した和声、速いテンポ、DIY流通が主流ロックの技巧主義と巨大産業化に対抗し、インディー・レーベル、ファンジン、地域シーンを生んだ。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "アンビエント・ミュージック",
            "description": "[Ambient music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1976",
            "end": "1990",
            "title": "ポストパンク",
            "description": "[Post-punk]<br>短い曲、単純化した和声、速いテンポ、DIY流通が主流ロックの技巧主義と巨大産業化に対抗し、インディー・レーベル、ファンジン、地域シーンを生んだ。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "2026",
            "title": "インダストリアル・ミュージック",
            "description": "[Industrial music]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1977",
            "end": "1990",
            "title": "ニュー・ウェイヴ",
            "description": "[New wave]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1995",
            "title": "ゴシック・ロック",
            "description": "[Gothic rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1978",
            "end": "1990",
            "title": "オールドスクール・ヒップホップ",
            "description": "[Old-school hip-hop]<br>DJがレコードのブレイクを延長し、MCが韻文で場を組織した。のちにサンプラー、ドラムマシン、多重録音が地域文化を世界的な制作・物語表現の体系へ発展させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1979",
            "end": "2026",
            "title": "ダンスホール",
            "description": "[Dancehall]<br>ジャマイカのオフビート、ベース主導の編曲、サウンドシステム文化は曲・ヴァージョン・ミックスを再利用可能な素材とし、ダブはさらにスタジオ自体を演奏装置へ変えた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "2026",
            "title": "ハードコア・パンク",
            "description": "[Hardcore punk]<br>短い曲、単純化した和声、速いテンポ、DIY流通が主流ロックの技巧主義と巨大産業化に対抗し、インディー・レーベル、ファンジン、地域シーンを生んだ。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1995",
            "title": "シンセポップ",
            "description": "[Synth-pop]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1990",
            "title": "エレクトロ",
            "description": "[Electro]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1981",
            "end": "1992",
            "title": "スラッシュメタル",
            "description": "[Thrash metal]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "オルタナティヴ・ロック",
            "description": "[Alternative rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1983",
            "end": "2026",
            "title": "インディー・ロック",
            "description": "[Indie rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "1995",
            "title": "ヒップホップ黄金時代",
            "description": "[Golden-age hip-hop]<br>DJがレコードのブレイクを延長し、MCが韻文で場を組織した。のちにサンプラー、ドラムマシン、多重録音が地域文化を世界的な制作・物語表現の体系へ発展させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1984",
            "end": "2026",
            "title": "ハウス・ミュージック",
            "description": "[House music]<br>シカゴのDJがディスコ断片、ドラムマシンの四つ打ち、反復ベースを連続的なクラブ音楽へ再構成し、ディープ・ハウスやアシッド・ハウスなどへ分岐した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2000",
            "title": "ギャングスタ・ラップ",
            "description": "[Gangsta rap]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "テクノ",
            "description": "[Techno]<br>デトロイトの制作者がエレクトロ・ファンク、シンセサイザーのシーケンス、未来主義的都市像を結び、機械的リズムと精密な音色設計を強調した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2026",
            "title": "「ワールド・ミュージック」という市場カテゴリー",
            "description": "[World-music market category]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "2000",
            "title": "シューゲイザー",
            "description": "[Shoegaze]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "オルタナティヴ・ヒップホップ",
            "description": "[Alternative hip-hop]<br>DJがレコードのブレイクを延長し、MCが韻文で場を組織した。のちにサンプラー、ドラムマシン、多重録音が地域文化を世界的な制作・物語表現の体系へ発展させた。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1988",
            "end": "2026",
            "title": "ダンス・ポップ",
            "description": "[Dance-pop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "1996",
            "title": "グランジ",
            "description": "[Grunge]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "ネオ・ソウル",
            "description": "[Neo-soul]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2026",
            "title": "トランス",
            "description": "[Trance]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2005",
            "title": "ブリットポップ",
            "description": "[Britpop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ドラムンベース",
            "description": "[Drum and bass]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1991",
            "end": "2026",
            "title": "ポストロック",
            "description": "[Post-rock]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2005",
            "title": "エモの第一波と第二波",
            "description": "[Emo: first and second waves]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2010",
            "title": "ニュー・メタル",
            "description": "[Nu metal]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1995",
            "end": "2026",
            "title": "エレクトロニック・ダンス・ミュージックのフェス文化",
            "description": "[Electronic dance music festival culture]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1997",
            "end": "2026",
            "title": "トラップ",
            "description": "[Trap]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2000",
            "end": "2026",
            "title": "現代インディー・ポップ",
            "description": "[Contemporary indie pop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2008",
            "end": "2026",
            "title": "ドリル",
            "description": "[Drill]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2010",
            "end": "2026",
            "title": "ストリーミング時代のグローバル・ポップ",
            "description": "[Streaming-era global pop]<br>個々の録音を所有する代わりにオンデマンド接続が主流となり、プレイリスト、推薦アルゴリズム、再生回数課金が曲の長さ、発売頻度、発見、収益構造に影響した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2026",
            "title": "ハイパーポップ",
            "description": "[Hyperpop]<br>演奏場所、録音技術、放送、ネットワーク共同体を通じて識別可能な音を形成し、隣接ジャンルからリズム、音色、制作法を絶えず借用した。 本タイムラインの開始・終了年は、形成・成熟・影響の強い時期を示す概算境界である。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// 楽器、音響技術、制作ツール
var tl_instruments = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-9999",
            "title": "紀元前10000年以前の旧石器時代骨笛（圧缩標记）",
            "description": "[Paleolithic bone flutes before 10,000 BCE (compressed marker)]<br>指孔を備えた骨管は、先史人類が無音程の打撃音だけでなく音高列を制御できたことを示し、初期儀礼と認知能力を考える重要な物証である。"
        },
        {
            "start": "-7999",
            "title": "初期框鼓と摇响器",
            "description": "[Early frame drums and rattles]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-3499",
            "title": "美索不达米亜里拉とハープ",
            "description": "[Mesopotamian lyres and harps]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-2999",
            "title": "埃及弓形ハープ",
            "description": "[Egyptian arched harps]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-2499",
            "title": "苏美尔牛首里拉",
            "description": "[Sumerian bull-headed lyres]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-1999",
            "title": "中国初期琴類弦楽器",
            "description": "[Early Chinese qin-type zithers]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-1499",
            "title": "東亜礼楽合奏中の青銅鐘",
            "description": "[Bronze bells in East Asian ritual ensembles]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-1199",
            "title": "希腊世界の阿夫洛斯管と基萨拉琴",
            "description": "[Aulos and kithara in the Greek world]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-0999",
            "title": "笙の初期形态",
            "description": "[Early forms of the sheng mouth organ]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "-0699",
            "title": "中国大規模編鐘",
            "description": "[Large Chinese bianzhong bell sets]<br>大きさと鋳造厚の違いで体系的な音高を作り、曾侯乙墓の編鐘は一つの鐘から関連する二音を得る設計を示し、高度な音律・合奏技術を物語る。"
        },
        {
            "start": "-0499",
            "title": "水力パイプオルガン",
            "description": "[Hydraulis water organ]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "0200",
            "title": "パイプオルガン技術在罗马世界普及",
            "description": "[Organ technology spreads in the Roman world]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "0500",
            "title": "乌德琴家族発展",
            "description": "[Development of the oud family]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "0700",
            "title": "琵琶となる中国宫廷音楽核心楽器",
            "description": "[Pipa becomes central in Chinese court music]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "0800",
            "title": "日本雅楽中の笙",
            "description": "[Shō mouth organ in Japanese gagaku]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "0900",
            "title": "弓弦楽器拉巴卜伝統拡大",
            "description": "[Bowed rebab traditions expand]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1000",
            "title": "中世紀欧洲ハープと索尔特里琴",
            "description": "[Medieval European harp and psaltery]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1100",
            "title": "大規模教堂パイプオルガン発展",
            "description": "[Pipe organ develops large church forms]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1200",
            "title": "欧洲鲁特琴由乌德琴相关楽器発展",
            "description": "[European lute develops from oud-related instruments]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1200",
            "title": "西非科拉琴伝統発展",
            "description": "[Kora traditions develop in West Africa]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1300",
            "title": "桑图尔と扬琴類楽器普及",
            "description": "[Santur and hammered-dulcimer families spread]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1400",
            "title": "击弦古ピアノに進出欧洲鍵盘文化",
            "description": "[Clavichord enters European keyboard culture]<br>ハンマー機構により打鍵で強弱を制御でき、のちに鉄骨フレーム、交差弦、ダブル・エスケープメントが音量・音域・連打性能を拡大した。"
        },
        {
            "start": "1450",
            "title": "羽管鍵琴家族発展",
            "description": "[Harpsichord family develops]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1500",
            "title": "维奥尔琴家族",
            "description": "[Viola da gamba family]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1520",
            "title": "近代ヴァイオリン家族在意大利北部形成",
            "description": "[Modern violin family emerges in northern Italy]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1550",
            "title": "西塔琴在北印度発展",
            "description": "[Sitar develops in North India]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1560",
            "title": "文芸複兴欧洲横笛改進",
            "description": "[Transverse flute redesign in Renaissance Europe]<br>各声部の均衡が進み模倣対位法が広く用いられ、楽譜印刷と宮廷・教会の人的ネットワークがフランドル系の作曲技法を欧州各地へ伝えた。"
        },
        {
            "start": "1600",
            "title": "箏在日本芸術音楽中定型",
            "description": "[Koto becomes established in Japanese art music]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1600",
            "title": "三味線在日本普及",
            "description": "[Shamisen spreads in Japan]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1650",
            "title": "斯特拉迪瓦里と克雷莫纳制琴伝統",
            "description": "[Stradivari and Cremonese violin making]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1680",
            "title": "クラリネット由沙吕莫管発展",
            "description": "[Clarinet developed from the chalumeau]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1700",
            "title": "克里斯托福里研制ピアノ",
            "description": "[Cristofori develops the piano]<br>ハンマー機構により打鍵で強弱を制御でき、のちに鉄骨フレーム、交差弦、ダブル・エスケープメントが音量・音域・連打性能を拡大した。"
        },
        {
            "start": "1720",
            "title": "現存最早の克里斯托福里ピアノ",
            "description": "[Earliest surviving Cristofori piano]<br>ハンマー機構により打鍵で強弱を制御でき、のちに鉄骨フレーム、交差弦、ダブル・エスケープメントが音量・音域・連打性能を拡大した。"
        },
        {
            "start": "1730",
            "title": "近代オーボエと巴松体系定型",
            "description": "[Modern oboe and bassoon families stabilize]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1750",
            "title": "古典楽団弦楽声部趋于標準化",
            "description": "[Classical orchestra standardizes string sections]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1770",
            "title": "古ピアノとなる音楽会と家庭主要楽器",
            "description": "[Fortepiano becomes a leading concert and domestic instrument]<br>ハンマー機構により打鍵で強弱を制御でき、のちに鉄骨フレーム、交差弦、ダブル・エスケープメントが音量・音域・連打性能を拡大した。"
        },
        {
            "start": "1814",
            "title": "梅尔策尔為近代メトロノーム申请特許",
            "description": "[Mälzel patents the modern metronome]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1821",
            "title": "自由簧ハーモニカ発展",
            "description": "[Free-reed harmonica development]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1829",
            "title": "アコーディオン获得特許",
            "description": "[Accordion patented]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1830",
            "title": "双动踏板近代音楽会ハープ",
            "description": "[Modern concert harp with double-action pedals]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1832",
            "title": "贝姆式フルート開発開始",
            "description": "[Boehm-system flute development begins]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1835",
            "title": "大号获得特許",
            "description": "[Tuba patented]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1846",
            "title": "阿道夫·萨克斯為サクソフォン申请特許",
            "description": "[Saxophone patented by Adolphe Sax]<br>アドルフ・サックスは木管の機動性と金管の投射力を結びつけるため設計し、後に軍楽隊、ジャズ、ポピュラー録音の主要な独奏楽器となった。"
        },
        {
            "start": "1850",
            "title": "近代音楽会三角ピアノ结构定型",
            "description": "[Modern concert grand piano architecture consolidates]<br>ハンマー機構により打鍵で強弱を制御でき、のちに鉄骨フレーム、交差弦、ダブル・エスケープメントが音量・音域・連打性能を拡大した。"
        },
        {
            "start": "1860",
            "title": "班多钮アコーディオンに進出探戈文化",
            "description": "[Bandoneon enters tango culture]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1870",
            "title": "近代架子鼓组件開始整合",
            "description": "[Modern drum-kit components begin to combine]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1880",
            "title": "鋼弦木ギター発展",
            "description": "[Steel-string acoustic guitar develops]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1890",
            "title": "為行進演奏開発苏萨号",
            "description": "[Sousaphone developed for marching performance]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1906",
            "title": "特尔哈莫尼姆公開演示",
            "description": "[Telharmonium public demonstrations]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1919",
            "title": "特雷門琴発明",
            "description": "[Theremin invented]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1924",
            "title": "電麦克风改変公演と録音",
            "description": "[Electric microphone transforms performance and recording]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1928",
            "title": "马特诺電子キーボード问世",
            "description": "[Ondes Martenot introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1931",
            "title": "商業電ギター出現",
            "description": "[Commercial electric guitar appears]<br>磁気ピックアップが弦振動を電気信号へ変換し、サステイン、歪み、フィードバック、エフェクトを単なる増幅ではなく作曲可能な音色要素にした。"
        },
        {
            "start": "1934",
            "title": "哈蒙德オルガン问世",
            "description": "[Hammond organ introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1935",
            "title": "德国磁気テープ録音技術発展",
            "description": "[Magnetic tape recording advances in Germany]<br>消去可能なテープは編集、多重録音、ディレイ、レイヤー化を日常的な制作手法にし、カセットは複製、携帯聴取、個人ミックステープを大衆生活へ持ち込んだ。"
        },
        {
            "start": "1939",
            "title": "近代電贝司原型",
            "description": "[Modern electric bass prototypes]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1940",
            "title": "鋼鼓在特立尼达と多巴哥発展",
            "description": "[Steelpan develops in Trinidad and Tobago]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1948",
            "title": "多轨録音実験",
            "description": "[Multitrack recording experiments]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1950",
            "title": "芬达Telecaster実心電ギター量産",
            "description": "[Fender Telecaster mass-produced solid-body guitar]<br>磁気ピックアップが弦振動を電気信号へ変換し、サステイン、歪み、フィードバック、エフェクトを単なる増幅ではなく作曲可能な音色要素にした。"
        },
        {
            "start": "1951",
            "title": "芬达Precision Bass问世",
            "description": "[Fender Precision Bass introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1954",
            "title": "芬达Stratocaster问世",
            "description": "[Fender Stratocaster introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1957",
            "title": "RCA Mark II音響シンセサイザー",
            "description": "[RCA Mark II Sound Synthesizer]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1960",
            "title": "便携晶体パイプオルガンと電鍵盘普及",
            "description": "[Portable transistor organs and electric keyboards spread]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1963",
            "title": "梅洛特朗问世",
            "description": "[Mellotron introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1964",
            "title": "穆格模块シンセサイザー演示",
            "description": "[Moog modular synthesizer demonstrated]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1965",
            "title": "失真等效果器重塑ギター音色",
            "description": "[Fuzz and effects pedals reshape guitar tone]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1970",
            "title": "Minimoog问世",
            "description": "[Minimoog introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1971",
            "title": "ARP 2600半模块シンセサイザー",
            "description": "[ARP 2600 semi-modular synthesizer]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1972",
            "title": "唱盘技術となる嘻哈創作楽器",
            "description": "[Turntable techniques become a compositional instrument in hip-hop]<br>DJがレコードのブレイクを延長し、MCが韻文で場を組織した。のちにサンプラー、ドラムマシン、多重録音が地域文化を世界的な制作・物語表現の体系へ発展させた。"
        },
        {
            "start": "1975",
            "title": "複音シンセサイザー広泛使用",
            "description": "[Polyphonic synthesizers enter wider use]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1979",
            "title": "Fairlight CMI采样ワークステーション",
            "description": "[Fairlight CMI sampling workstation]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1980",
            "title": "Roland TR-808ドラムマシン",
            "description": "[Roland TR-808 drum machine]<br>プログラム可能なリズムはドラム音をリアルタイム演奏から切り離し、TR-808やTR-909の非写実的な音色はヒップホップ、ハウス、テクノ、ポップの象徴となった。"
        },
        {
            "start": "1981",
            "title": "Roland TB-303贝司シンセサイザー",
            "description": "[Roland TB-303 bass synthesizer]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1982",
            "title": "デジタルシンセサイザーに進出大衆市場",
            "description": "[Digital synthesizers enter the mass market]<br>発振器、フィルター、エンベロープ、変調が音色を制御可能なモジュールへ分解し、大型モジュラーから携帯鍵盤、ソフト音源まで電子音色を作曲とポップ制作の中心へ導いた。"
        },
        {
            "start": "1983",
            "title": "MIDI公開演示并標準化",
            "description": "[MIDI publicly demonstrated and standardized]<br>標準化されたデジタル・メッセージにより異なるメーカーの鍵盤、シンセ、ドラムマシン、コンピュータが音符・制御・同期情報を交換でき、現代電子制作の相互運用基盤となった。"
        },
        {
            "start": "1983",
            "title": "雅马哈DX7问世",
            "description": "[Yamaha DX7 introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1984",
            "title": "平价デジタルサンプラー普及",
            "description": "[Affordable digital samplers spread]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1987",
            "title": "Akai MPC系列開始",
            "description": "[Akai MPC line begins]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1989",
            "title": "デジタル音頻ワークステーション出現",
            "description": "[Digital audio workstations emerge]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1997",
            "title": "Auto-Tune问世",
            "description": "[Auto-Tune introduced]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "1999",
            "title": "软件楽器と笔记本制作拡大",
            "description": "[Software instruments and laptop production expand]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "2001",
            "title": "Ableton Live発表",
            "description": "[Ableton Live released]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "2007",
            "title": "智能手機となる音楽制作と演奏プラットフォーム",
            "description": "[Smartphones become music-production and performance platforms]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "2010",
            "title": "平板楽器と触控界面普及",
            "description": "[Tablet instruments and touch interfaces spread]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        },
        {
            "start": "2020",
            "title": "パンデミック期间網络远程演奏ツール拡大",
            "description": "[Networked remote performance tools expand during the pandemic]<br>演奏者が制御できる音高、強弱、音色、時間精度を変え、楽器製作、編成、スタジオ作業にも影響した。"
        }
    ]
};

// 記譜、理論、制度、音楽産業
var tl_systems = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-1399",
            "title": "胡里安赞歌泥板",
            "description": "[Hurrian hymn tablets]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "-0499",
            "title": "希腊と声理论発展",
            "description": "[Greek harmonic theory develops]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "-0299",
            "title": "中国律管と調式理论体系化",
            "description": "[Chinese pitch-pipe and modal theory codified]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "0100",
            "title": "塞基洛斯墓志铭保存完整古代记譜",
            "description": "[Seikilos epitaph preserves complete ancient notation]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "0200",
            "title": "《舞论》システム化南亜演奏音楽理论",
            "description": "[Natya Shastra systematizes South Asian performance theory]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "0500",
            "title": "波爱修斯把古代音楽理论伝入中世紀欧洲",
            "description": "[Boethius transmits ancient music theory to medieval Europe]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "0800",
            "title": "纽姆记譜在西方圣咏中普及",
            "description": "[Neumatic notation spreads in Western chant]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1025",
            "title": "圭多·达雷佐発展譜線教学法",
            "description": "[Guido of Arezzo develops staff-based pedagogy]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1250",
            "title": "定量记譜使節奏化複調となる可能",
            "description": "[Mensural notation enables measured polyphony]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1320",
            "title": "新芸術记譜拡大節奏可能性",
            "description": "[Ars nova notation expands rhythmic possibilities]<br>精密化したリズム記譜により二分法、シンコペーション、イソリズムが記述可能となり、マショーらはモテット、ミサ、世俗歌曲の複雑さを拡大した。"
        },
        {
            "start": "1450",
            "title": "楽譜抄写工坊拡大普及",
            "description": "[Music copying workshops expand manuscript circulation]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1501",
            "title": "佩特鲁奇出版重要複調印刷楽譜",
            "description": "[Petrucci publishes major collection of printed polyphonic music]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1558",
            "title": "扎利诺出版《と声论》",
            "description": "[Zarlino publishes Le istitutioni harmoniche]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1597",
            "title": "初期歌劇《达芙妮》上演",
            "description": "[Early opera Dafne produced]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1607",
            "title": "蒙特威尔第《奥菲欧》确立持久歌劇模式",
            "description": "[Monteverdi’s L’Orfeo establishes an enduring operatic model]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1637",
            "title": "威尼斯首座公共歌劇場開放",
            "description": "[First public opera house opens in Venice]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1669",
            "title": "巴黎歌劇場創立",
            "description": "[Paris Opera founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1672",
            "title": "伦敦持续性公共音楽会系列",
            "description": "[First sustained public concert series in London]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1710",
            "title": "雕版楽譜出版在欧洲拡大",
            "description": "[European music publishing expands through engraved editions]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1725",
            "title": "富克斯出版《通往帕纳索斯山の阶梯》",
            "description": "[Fux publishes Gradus ad Parnassum]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1750",
            "title": "公共音楽会文化在欧洲拡大",
            "description": "[Public concert culture expands across Europe]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1771",
            "title": "维也纳音楽家協会支持公共管弦音楽会",
            "description": "[Vienna Tonkünstler-Societät supports public orchestral concerts]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1795",
            "title": "巴黎音楽院創立",
            "description": "[Paris Conservatoire founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1808",
            "title": "大規模公共义演展示近代音楽会规模",
            "description": "[Large public benefit concert demonstrates modern concert scale]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1813",
            "title": "伦敦皇家爱楽協会設立",
            "description": "[Royal Philharmonic Society founded in London]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1824",
            "title": "贝多芬第九连接交响曲・合唱と公共人文主义",
            "description": "[Beethoven’s Ninth links symphony, chorus and public humanism]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1842",
            "title": "纽約爱楽楽団創立",
            "description": "[New York Philharmonic founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1843",
            "title": "莱比锡音楽院創立",
            "description": "[Leipzig Conservatory founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1857",
            "title": "声波记録儀记録声波",
            "description": "[Phonautograph records sound waves]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1867",
            "title": "著作権と演奏権制度在欧洲拡大",
            "description": "[Copyright and performance-right systems expand in Europe]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1877",
            "title": "爱迪生用蓄音機演示録音と回放",
            "description": "[Edison demonstrates recording and playback with the phonograph]<br>音が初めて固定・複製され、演奏者不在でも再生可能となり、音楽は一回的な出来事から販売・収集・比較できるメディアへ変わった。"
        },
        {
            "start": "1887",
            "title": "レコード式蓄音機システム获特許",
            "description": "[Gramophone disc system patented]<br>音が初めて固定・複製され、演奏者不在でも再生可能となり、音楽は一回的な出来事から販売・収集・比較できるメディアへ変わった。"
        },
        {
            "start": "1891",
            "title": "卡内基音楽厅開幕",
            "description": "[Carnegie Hall opens]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1897",
            "title": "蓄音機公司設立",
            "description": "[Gramophone Company founded]<br>音が初めて固定・複製され、演奏者不在でも再生可能となり、音楽は一回的な出来事から販売・収集・比較できるメディアへ変わった。"
        },
        {
            "start": "1901",
            "title": "胜利蓄音機公司設立",
            "description": "[Victor Talking Machine Company founded]<br>音が初めて固定・複製され、演奏者不在でも再生可能となり、音楽は一回的な出来事から販売・収集・比較できるメディアへ変わった。"
        },
        {
            "start": "1906",
            "title": "Victrola将録音音楽帯入家庭家具文化",
            "description": "[Victrola brings recorded music into domestic furniture culture]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1914",
            "title": "美国作曲家・作家と出版商協会設立",
            "description": "[ASCAP founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1920",
            "title": "商業放送開始重塑音楽聴衆",
            "description": "[Commercial radio broadcasting begins reshaping music audiences]<br>一つの演奏が同時に多数の家庭へ届き、番組編成、ヒットチャート、生中継、スポンサー制度がスター形成と地域音楽の流通を作り替えた。"
        },
        {
            "start": "1925",
            "title": "電録音取代声学録音",
            "description": "[Electrical recording replaces acoustic recording]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1927",
            "title": "首部長篇同步トーキー映画推动银幕音楽",
            "description": "[First feature-length synchronized-sound film accelerates screen music]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1935",
            "title": "磁気テープ録音在放送规模演示",
            "description": "[Magnetic tape recording demonstrated at broadcasting scale]<br>一つの演奏が同時に多数の家庭へ届き、番組編成、ヒットチャート、生中継、スポンサー制度がスター形成と地域音楽の流通を作り替えた。"
        },
        {
            "start": "1936",
            "title": "《公告牌》発表重要流行音楽榜单",
            "description": "[Billboard publishes major popular-music charts]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1948",
            "title": "哥伦比亜発売33⅓转LP",
            "description": "[Columbia introduces the 33⅓ rpm LP]<br>33⅓回転の長時間盤は片面を約20分へ拡張し、交響曲、オペラ、コンセプト・アルバムを連続した大単位として流通させた。"
        },
        {
            "start": "1949",
            "title": "RCA発売45转シングルレコード",
            "description": "[RCA introduces the 45 rpm single]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1954",
            "title": "便携晶体管收音機拡大若者聴衆",
            "description": "[Portable transistor radio expands youth listening]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1958",
            "title": "格莱美賞制度建立",
            "description": "[First Grammy Awards cycle established]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1958",
            "title": "立体声LPとなる商業標準",
            "description": "[Stereo LP becomes a commercial standard]<br>33⅓回転の長時間盤は片面を約20分へ拡張し、交響曲、オペラ、コンセプト・アルバムを連続した大単位として流通させた。"
        },
        {
            "start": "1962",
            "title": "盒式磁気テープ问世",
            "description": "[Compact cassette introduced]<br>消去可能なテープは編集、多重録音、ディレイ、レイヤー化を日常的な制作手法にし、カセットは複製、携帯聴取、個人ミックステープを大衆生活へ持ち込んだ。"
        },
        {
            "start": "1964",
            "title": "穆格帮助确立電圧控制電子制作",
            "description": "[Moog synthesizer helps establish voltage-controlled electronic production]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1967",
            "title": "《滚石》誌創刊",
            "description": "[Rolling Stone magazine founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1979",
            "title": "索尼随身聴使個人モバイル聆聴となる主流",
            "description": "[Sony Walkman makes private mobile listening mainstream]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1981",
            "title": "MTV開播",
            "description": "[MTV launches]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1982",
            "title": "激光レコード商業発行",
            "description": "[Compact disc commercial launch]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1983",
            "title": "MIDI 1.0発表",
            "description": "[MIDI 1.0 published]<br>標準化されたデジタル・メッセージにより異なるメーカーの鍵盤、シンセ、ドラムマシン、コンピュータが音符・制御・同期情報を交換でき、現代電子制作の相互運用基盤となった。"
        },
        {
            "start": "1985",
            "title": "家長提示争議改変音楽標签制度",
            "description": "[Parental Advisory controversy reshapes music labeling]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1988",
            "title": "デジタル音頻磁気テープに進出市場",
            "description": "[Digital audio tape enters the market]<br>消去可能なテープは編集、多重録音、ディレイ、レイヤー化を日常的な制作手法にし、カセットは複製、携帯聴取、個人ミックステープを大衆生活へ持ち込んだ。"
        },
        {
            "start": "1991",
            "title": "SoundScan改変チャート統計",
            "description": "[SoundScan changes chart measurement]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "1993",
            "title": "MP3標準と初期実現",
            "description": "[MPEG-1 Audio Layer III standard and early MP3 implementation]<br>知覚符号化は聞き取りにくい情報を削って容量を大幅に縮小し、ネット配信、P2P交換、携帯プレーヤーを可能にする一方、物理媒体販売モデルを揺さぶった。"
        },
        {
            "start": "1995",
            "title": "“.mp3”拡大名采用",
            "description": "[.mp3 file extension adopted]<br>知覚符号化は聞き取りにくい情報を削って容量を大幅に縮小し、ネット配信、P2P交換、携帯プレーヤーを可能にする一方、物理媒体販売モデルを揺さぶった。"
        },
        {
            "start": "1999",
            "title": "Napster启动点对点音楽分享",
            "description": "[Napster launches peer-to-peer music sharing]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2001",
            "title": "iPod発表",
            "description": "[iPod launched]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2003",
            "title": "iTunes音楽商店サービス開始",
            "description": "[iTunes Music Store launches]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2005",
            "title": "YouTubeサービス開始",
            "description": "[YouTube launches]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2007",
            "title": "SoundCloud創立",
            "description": "[SoundCloud founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2008",
            "title": "Bandcamp創立",
            "description": "[Bandcamp founded]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2008",
            "title": "Spotifyサービス開始",
            "description": "[Spotify launches]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2011",
            "title": "世界統一発行日機制逐步形成",
            "description": "[Global album-release day coordination begins evolving]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2015",
            "title": "星期五となる世界統一発行日",
            "description": "[Friday becomes the coordinated global release day]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2015",
            "title": "ストリーミングとなるチャートと认証体系核心",
            "description": "[Streaming becomes central to chart and certification systems]<br>個々の録音を所有する代わりにオンデマンド接続が主流となり、プレイリスト、推薦アルゴリズム、再生回数課金が曲の長さ、発売頻度、発見、収益構造に影響した。"
        },
        {
            "start": "2017",
            "title": "订阅ストリーミングとなるレコード業增長核心",
            "description": "[Subscription streaming becomes the dominant growth engine of recorded music]<br>個々の録音を所有する代わりにオンデマンド接続が主流となり、プレイリスト、推薦アルゴリズム、再生回数課金が曲の長さ、発売頻度、発見、収益構造に影響した。"
        },
        {
            "start": "2020",
            "title": "新冠停演期间直播コンサートとなる大衆形式",
            "description": "[Livestream concerts become a mass format during COVID-19 closures]<br>音楽の記録、複製、教育、許諾、流通、価格付けを変え、音そのものだけでなく音楽家の労働と聴衆の接触経路にも影響した。"
        },
        {
            "start": "2023",
            "title": "生成式AI加劇关于作者権・训练数拠と音楽労动の争论",
            "description": "[Generative AI intensifies debates over authorship, training data and musical labor]<br>モデルは旋律、伴奏、歌声、完成音源を生成できる一方、学習データの許諾、作風模倣、声の人格、クレジット、労働代替を産業・法的争点にした。"
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
            "description": "[Sappho]<br>Sapphoは surviving lyric fragments such as the “Ode to Aphrodite” によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式と古代・儀礼音楽の広い変化を結ぶ。"
        },
        {
            "start": "0497",
            "title": "Boethius（477–524）",
            "description": "[Boethius]<br>Boethiusは De institutione musica によって具体的に位置づけられる。そこに見られる理論・記譜・音楽思想が個人様式と中世音楽の広い変化を結ぶ。"
        },
        {
            "start": "1118",
            "title": "Hildegard of Bingen（1098–1179）",
            "description": "[Hildegard of Bingen]<br>Hildegard of Bingenの代表的成果には Ordo Virtutum and the Symphonia armoniae celestium revelationum がある。これらは中世音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1170",
            "title": "Léonin（1150–1201）",
            "description": "[Léonin]<br>Léoninを理解する直接の入口は the Magnus liber organi tradition associated with Notre-Dame polyphony である。そこから作曲・形式・音響の組織化の扱いと、それが中世音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1180",
            "title": "Pérotin（1160–1230）",
            "description": "[Pérotin]<br>Pérotinを理解する直接の入口は Viderunt omnes and Sederunt principes である。そこから作曲・形式・音響の組織化の扱いと、それが中世音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1320",
            "title": "Guillaume de Machaut（1300–1377）",
            "description": "[Guillaume de Machaut]<br>Guillaume de Machautを理解する直接の入口は Messe de Nostre Dame and the ballade Douce dame jolie である。そこから作曲・形式・音響の組織化の扱いと、それが中世音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1345",
            "title": "Francesco Landini（1325–1397）",
            "description": "[Francesco Landini]<br>Francesco Landiniは the ballata Ecco la primavera and the cadence later called the Landini cadence によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と中世音楽の広い変化を結ぶ。"
        },
        {
            "start": "1417",
            "title": "Guillaume Du Fay（1397–1474）",
            "description": "[Guillaume Du Fay]<br>Nuper rosarum flores and the Missa Se la face ay pale はGuillaume Du Fayの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがルネサンス音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1430",
            "title": "Johannes Ockeghem（1410–1497）",
            "description": "[Johannes Ockeghem]<br>Johannes Ockeghemを理解する直接の入口は Missa prolationum and the Requiem である。そこから作曲・形式・音響の組織化の扱いと、それがルネサンス音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1470",
            "title": "Josquin des Prez（1450–1521）",
            "description": "[Josquin des Prez]<br>Ave Maria…virgo serena and Missa Pange lingua はJosquin des Prezの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがルネサンス音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1510",
            "title": "Adrian Willaert（1490–1562）",
            "description": "[Adrian Willaert]<br>Adrian Willaertは the Venetian polychoral tradition and Musica nova によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とルネサンス音楽の広い変化を結ぶ。"
        },
        {
            "start": "1545",
            "title": "Giovanni Pierluigi da Palestrina（1525–1594）",
            "description": "[Giovanni Pierluigi da Palestrina]<br>Giovanni Pierluigi da Palestrinaを理解する直接の入口は Missa Papae Marcelli and Sicut cervus である。そこから作曲・形式・音響の組織化の扱いと、それがルネサンス音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1552",
            "title": "Orlando di Lasso（1532–1594）",
            "description": "[Orlando di Lasso]<br>Prophetiae Sibyllarum and a large multilingual sacred and secular catalogue はOrlando di Lassoの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがルネサンス音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1560",
            "title": "William Byrd（1540–1623）",
            "description": "[William Byrd]<br>William Byrdの代表的成果には Mass for Four Voices, Gradualia and English keyboard music in My Ladye Nevells Booke がある。これらはルネサンス音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1587",
            "title": "Claudio Monteverdi（1567–1643）",
            "description": "[Claudio Monteverdi]<br>L’Orfeo, the 1610 Vespers and L’incoronazione di Poppea はClaudio Monteverdiの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1603",
            "title": "Girolamo Frescobaldi（1583–1643）",
            "description": "[Girolamo Frescobaldi]<br>Girolamo Frescobaldiの代表的成果には Fiori musicali and the Toccate e partite collections がある。これらはバロック音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1605",
            "title": "Heinrich Schütz（1585–1672）",
            "description": "[Heinrich Schütz]<br>Psalmen Davids, Symphoniae sacrae and the Christmas Story はHeinrich Schützの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1652",
            "title": "Jean-Baptiste Lully（1632–1687）",
            "description": "[Jean-Baptiste Lully]<br>Jean-Baptiste Lullyを理解する直接の入口は Armide and the codification of French tragédie lyrique and the French overture である。そこから作曲・形式・音響の組織化の扱いと、それがバロック音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1657",
            "title": "Dieterich Buxtehude（1637–1707）",
            "description": "[Dieterich Buxtehude]<br>Dieterich Buxtehudeは organ praeludia and the Lübeck Abendmusiken によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とバロック音楽の広い変化を結ぶ。"
        },
        {
            "start": "1673",
            "title": "Arcangelo Corelli（1653–1713）",
            "description": "[Arcangelo Corelli]<br>Op. 5 violin sonatas and Op. 6 concerti grossi はArcangelo Corelliの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1679",
            "title": "Henry Purcell（1659–1695）",
            "description": "[Henry Purcell]<br>Henry Purcellを理解する直接の入口は Dido and Aeneas, King Arthur and Music for the Funeral of Queen Mary である。そこから作曲・形式・音響の組織化の扱いと、それがバロック音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1680",
            "title": "Alessandro Scarlatti（1660–1725）",
            "description": "[Alessandro Scarlatti]<br>Alessandro Scarlattiは more than one hundred operas and the development of the Italian da capo aria によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とバロック音楽の広い変化を結ぶ。"
        },
        {
            "start": "1688",
            "title": "François Couperin（1668–1733）",
            "description": "[François Couperin]<br>Pièces de clavecin and Les Nations はFrançois Couperinの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1698",
            "title": "Antonio Vivaldi（1678–1741）",
            "description": "[Antonio Vivaldi]<br>Antonio Vivaldiは The Four Seasons and L’estro armonico によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とバロック音楽の広い変化を結ぶ。"
        },
        {
            "start": "1701",
            "title": "Georg Philipp Telemann（1681–1767）",
            "description": "[Georg Philipp Telemann]<br>Tafelmusik and the Paris Quartets はGeorg Philipp Telemannの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1703",
            "title": "Jean-Philippe Rameau（1683–1764）",
            "description": "[Jean-Philippe Rameau]<br>Jean-Philippe Rameauを理解する直接の入口は Traité de l’harmonie, Hippolyte et Aricie and Les Indes galantes である。そこから作曲・形式・音響の組織化の扱いと、それがバロック音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1705",
            "title": "Domenico Scarlatti（1685–1757）",
            "description": "[Domenico Scarlatti]<br>Domenico Scarlattiを理解する直接の入口は more than 550 keyboard sonatas written largely for the Iberian court である。そこから作曲・形式・音響の組織化の扱いと、それがバロック音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1705",
            "title": "George Frideric Handel（1685–1759）",
            "description": "[George Frideric Handel]<br>George Frideric Handelを理解する直接の入口は Messiah, Giulio Cesare and Music for the Royal Fireworks である。そこから作曲・形式・音響の組織化の扱いと、それがバロック音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1705",
            "title": "Johann Sebastian Bach（1685–1750）",
            "description": "[Johann Sebastian Bach]<br>the Brandenburg Concertos, Well-Tempered Clavier, St Matthew Passion and Art of Fugue はJohann Sebastian Bachの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがバロック音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1734",
            "title": "Carl Philipp Emanuel Bach（1714–1788）",
            "description": "[Carl Philipp Emanuel Bach]<br>Carl Philipp Emanuel Bachを理解する直接の入口は the Essay on the True Art of Playing Keyboard Instruments and empfindsamer Stil sonatas である。そこから作曲・形式・音響の組織化の扱いと、それが古典派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1734",
            "title": "Christoph Willibald Gluck（1714–1787）",
            "description": "[Christoph Willibald Gluck]<br>Orfeo ed Euridice and the reform of opera seria はChristoph Willibald Gluckの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが古典派音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1752",
            "title": "Joseph Haydn（1732–1809）",
            "description": "[Joseph Haydn]<br>Joseph Haydnを理解する直接の入口は the London symphonies, Op. 33 quartets and The Creation である。そこから作曲・形式・音響の組織化の扱いと、それが古典派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1763",
            "title": "Luigi Boccherini（1743–1805）",
            "description": "[Luigi Boccherini]<br>Luigi Boccheriniの代表的成果には the Minuet from Op. 11 No. 5 and numerous string quintets がある。これらは古典派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1770",
            "title": "Antonio Salieri（1750–1825）",
            "description": "[Antonio Salieri]<br>Antonio Salieriを理解する直接の入口は Les Danaïdes, Tarare and a major teaching career in Vienna である。そこから作曲・形式・音響の組織化の扱いと、それが古典派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1776",
            "title": "Wolfgang Amadeus Mozart（1756–1791）",
            "description": "[Wolfgang Amadeus Mozart]<br>The Marriage of Figaro, Don Giovanni, the late symphonies and the Requiem はWolfgang Amadeus Mozartの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが古典派音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1790",
            "title": "Ludwig van Beethoven（1770–1827）",
            "description": "[Ludwig van Beethoven]<br>Ludwig van Beethovenを理解する直接の入口は the nine symphonies, late string quartets, piano sonatas and Fidelio である。そこから作曲・形式・音響の組織化の扱いと、それが古典派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1802",
            "title": "Niccolò Paganini（1782–1840）",
            "description": "[Niccolò Paganini]<br>Niccolò Paganiniを理解する直接の入口は 24 Caprices for Solo Violin and virtuoso concertos である。そこから演奏技法・音色・即興語法の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1806",
            "title": "Carl Maria von Weber（1786–1826）",
            "description": "[Carl Maria von Weber]<br>Carl Maria von Weberの代表的成果には Der Freischütz and Konzertstück for piano and orchestra がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1812",
            "title": "Gioachino Rossini（1792–1868）",
            "description": "[Gioachino Rossini]<br>Gioachino Rossiniの代表的成果には The Barber of Seville, William Tell and the crescendo-driven style of his comic operas がある。これらはオペラにおける作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1817",
            "title": "Franz Schubert（1797–1828）",
            "description": "[Franz Schubert]<br>Franz Schubertを理解する直接の入口は Winterreise, Erlkönig, the “Unfinished” Symphony and late chamber music である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1823",
            "title": "Hector Berlioz（1803–1869）",
            "description": "[Hector Berlioz]<br>Hector Berliozの代表的成果には Symphonie fantastique and the Treatise on Instrumentation がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1824",
            "title": "Mikhail Glinka（1804–1857）",
            "description": "[Mikhail Glinka]<br>Mikhail Glinkaを理解する直接の入口は A Life for the Tsar and Ruslan and Lyudmila である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1829",
            "title": "Felix Mendelssohn（1809–1847）",
            "description": "[Felix Mendelssohn]<br>Felix Mendelssohnの代表的成果には the Octet, A Midsummer Night’s Dream music and the revival of Bach’s St Matthew Passion がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1830",
            "title": "Frédéric Chopin（1810–1849）",
            "description": "[Frédéric Chopin]<br>Frédéric Chopinを理解する直接の入口は the nocturnes, études, mazurkas and ballades for piano である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1830",
            "title": "Robert Schumann（1810–1856）",
            "description": "[Robert Schumann]<br>Robert Schumannは Dichterliebe, Carnaval and the Piano Quintet によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1831",
            "title": "Franz Liszt（1811–1886）",
            "description": "[Franz Liszt]<br>Franz Lisztは the Transcendental Études, Hungarian Rhapsodies and the symphonic poem によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1833",
            "title": "Giuseppe Verdi（1813–1901）",
            "description": "[Giuseppe Verdi]<br>Giuseppe Verdiの代表的成果には Rigoletto, La traviata, Aida and the Requiem がある。これらはオペラにおける作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1833",
            "title": "Richard Wagner（1813–1883）",
            "description": "[Richard Wagner]<br>Richard Wagnerを理解する直接の入口は Tristan und Isolde, Der Ring des Nibelungen and the leitmotif-based music drama である。そこから作曲・形式・音響の組織化の扱いと、それがオペラの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1839",
            "title": "Clara Schumann（1819–1896）",
            "description": "[Clara Schumann]<br>Clara Schumannの代表的成果には the Piano Concerto, Romances for violin and piano, and a career that reshaped the modern recital がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1839",
            "title": "Jacques Offenbach（1819–1880）",
            "description": "[Jacques Offenbach]<br>Jacques Offenbachの代表的成果には Orpheus in the Underworld and La belle Hélène がある。これらはオペラにおける作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1844",
            "title": "Anton Bruckner（1824–1896）",
            "description": "[Anton Bruckner]<br>Anton Brucknerの代表的成果には the mature symphonies, especially Nos. 4, 7, 8 and 9 がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1844",
            "title": "Bedřich Smetana（1824–1884）",
            "description": "[Bedřich Smetana]<br>Bedřich Smetanaを理解する直接の入口は Má vlast and The Bartered Bride である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1845",
            "title": "Johann Strauss II（1825–1899）",
            "description": "[Johann Strauss II]<br>Johann Strauss IIを理解する直接の入口は The Blue Danube, Die Fledermaus and the orchestral Viennese waltz である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1853",
            "title": "Johannes Brahms（1833–1897）",
            "description": "[Johannes Brahms]<br>Johannes Brahmsは four symphonies, A German Requiem and late chamber music によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1855",
            "title": "Camille Saint-Saëns（1835–1921）",
            "description": "[Camille Saint-Saëns]<br>Camille Saint-Saënsは Samson et Dalila, Symphony No. 3 and The Carnival of the Animals によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1858",
            "title": "Georges Bizet（1838–1875）",
            "description": "[Georges Bizet]<br>Carmen and L’Arlésienne はGeorges Bizetの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがオペラの作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1859",
            "title": "Modest Mussorgsky（1839–1881）",
            "description": "[Modest Mussorgsky]<br>Modest Mussorgskyは Boris Godunov, Pictures at an Exhibition and Songs and Dances of Death によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1860",
            "title": "Pyotr Ilyich Tchaikovsky（1840–1893）",
            "description": "[Pyotr Ilyich Tchaikovsky]<br>Pyotr Ilyich Tchaikovskyの代表的成果には Swan Lake, The Nutcracker, the First Piano Concerto and Symphony No. 6 がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1861",
            "title": "Antonín Dvořák（1841–1904）",
            "description": "[Antonín Dvořák]<br>Antonín Dvořákを理解する直接の入口は Symphony No. 9, the “American” Quartet and the Cello Concerto である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1863",
            "title": "Edvard Grieg（1843–1907）",
            "description": "[Edvard Grieg]<br>Edvard Griegの代表的成果には the Piano Concerto, Peer Gynt music and Lyric Pieces がある。これらはロマン派音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1864",
            "title": "Nikolai Rimsky-Korsakov（1844–1908）",
            "description": "[Nikolai Rimsky-Korsakov]<br>Nikolai Rimsky-Korsakovは Scheherazade, The Golden Cockerel and Principles of Orchestration によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1865",
            "title": "Gabriel Fauré（1845–1924）",
            "description": "[Gabriel Fauré]<br>Gabriel Fauréを理解する直接の入口は the Requiem, nocturnes and late chamber music である。そこから作曲・形式・音響の組織化の扱いと、それがロマン派音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1878",
            "title": "Giacomo Puccini（1858–1924）",
            "description": "[Giacomo Puccini]<br>La bohème, Tosca, Madama Butterfly and Turandot はGiacomo Pucciniの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがオペラの作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1880",
            "title": "Gustav Mahler（1860–1911）",
            "description": "[Gustav Mahler]<br>Gustav Mahlerは the symphonic song cycles and nine completed symphonies によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1882",
            "title": "Claude Debussy（1862–1918）",
            "description": "[Claude Debussy]<br>Claude Debussyを理解する直接の入口は Prélude à l’après-midi d’un faune, La mer and Pelléas et Mélisande である。そこから作曲・形式・音響の組織化の扱いと、それが近現代芸術音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1884",
            "title": "Richard Strauss（1864–1949）",
            "description": "[Richard Strauss]<br>Also sprach Zarathustra, Der Rosenkavalier and the late Four Last Songs はRichard Straussの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロマン派音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1885",
            "title": "Jean Sibelius（1865–1957）",
            "description": "[Jean Sibelius]<br>Finlandia, the Violin Concerto and seven symphonies はJean Sibeliusの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロマン派音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1886",
            "title": "Erik Satie（1866–1925）",
            "description": "[Erik Satie]<br>Erik Satieを理解する直接の入口は the Gymnopédies, Gnossiennes and the concept of musique d’ameublement である。そこから作曲・形式・音響の組織化の扱いと、それが近現代芸術音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1892",
            "title": "Ralph Vaughan Williams（1872–1958）",
            "description": "[Ralph Vaughan Williams]<br>Ralph Vaughan Williamsは Fantasia on a Theme by Thomas Tallis and nine symphonies によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1893",
            "title": "Sergei Rachmaninoff（1873–1943）",
            "description": "[Sergei Rachmaninoff]<br>Sergei Rachmaninoffは the Second and Third Piano Concertos, piano preludes and Symphonic Dances によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とロマン派音楽の広い変化を結ぶ。"
        },
        {
            "start": "1894",
            "title": "Arnold Schoenberg（1874–1951）",
            "description": "[Arnold Schoenberg]<br>Arnold Schoenbergの代表的成果には Pierrot lunaire, the twelve-tone method and A Survivor from Warsaw がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1894",
            "title": "Gustav Holst（1874–1934）",
            "description": "[Gustav Holst]<br>Gustav Holstの代表的成果には The Planets and English choral works がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1895",
            "title": "Maurice Ravel（1875–1937）",
            "description": "[Maurice Ravel]<br>Maurice Ravelの代表的成果には Daphnis et Chloé, Boléro and the orchestration of Pictures at an Exhibition がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1901",
            "title": "Béla Bartók（1881–1945）",
            "description": "[Béla Bartók]<br>Béla Bartókは Music for Strings, Percussion and Celesta, six string quartets and fieldwork on folk music によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1902",
            "title": "Igor Stravinsky（1882–1971）",
            "description": "[Igor Stravinsky]<br>Igor Stravinskyは The Firebird, Petrushka, The Rite of Spring and later neoclassical and serial works によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1903",
            "title": "Anton Webern（1883–1945）",
            "description": "[Anton Webern]<br>Anton Webernは concise twelve-tone works such as the Symphony Op. 21 and Variations Op. 30 によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1905",
            "title": "Alban Berg（1885–1935）",
            "description": "[Alban Berg]<br>Wozzeck, Lulu and the Violin Concerto はAlban Bergの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1911",
            "title": "Sergei Prokofiev（1891–1953）",
            "description": "[Sergei Prokofiev]<br>Sergei Prokofievの代表的成果には Romeo and Juliet, the Classical Symphony and the Third Piano Concerto がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1912",
            "title": "Arthur Honegger（1892–1955）",
            "description": "[Arthur Honegger]<br>Arthur Honeggerを理解する直接の入口は Pacific 231 and Jeanne d’Arc au bûcher である。そこから作曲・形式・音響の組織化の扱いと、それが近現代芸術音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1912",
            "title": "Darius Milhaud（1892–1974）",
            "description": "[Darius Milhaud]<br>Darius Milhaudの代表的成果には La création du monde and polytonal works shaped by jazz and Brazilian music がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1915",
            "title": "Carl Orff（1895–1982）",
            "description": "[Carl Orff]<br>Carl Orffは Carmina Burana and the Orff Schulwerk approach to music education によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1915",
            "title": "Paul Hindemith（1895–1963）",
            "description": "[Paul Hindemith]<br>Paul Hindemithの代表的成果には Mathis der Maler, Ludus Tonalis and Gebrauchsmusik がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1918",
            "title": "George Gershwin（1898–1937）",
            "description": "[George Gershwin]<br>George Gershwinの代表的成果には Rhapsody in Blue, An American in Paris and Porgy and Bess がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1920",
            "title": "Aaron Copland（1900–1990）",
            "description": "[Aaron Copland]<br>Appalachian Spring, Billy the Kid and the Third Symphony はAaron Coplandの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1926",
            "title": "Dmitri Shostakovich（1906–1975）",
            "description": "[Dmitri Shostakovich]<br>Dmitri Shostakovichは fifteen symphonies, fifteen string quartets and the opera Lady Macbeth of Mtsensk によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1928",
            "title": "Olivier Messiaen（1908–1992）",
            "description": "[Olivier Messiaen]<br>Olivier Messiaenは Quartet for the End of Time, Turangalîla-Symphonie and Catalogue d’oiseaux によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1932",
            "title": "John Cage（1912–1992）",
            "description": "[John Cage]<br>John Cageは 4′33″, prepared-piano works and chance procedures developed with the I Ching によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1933",
            "title": "Benjamin Britten（1913–1976）",
            "description": "[Benjamin Britten]<br>Benjamin Brittenの代表的成果には Peter Grimes, War Requiem and The Young Person’s Guide to the Orchestra がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1938",
            "title": "Leonard Bernstein（1918–1990）",
            "description": "[Leonard Bernstein]<br>Leonard Bernsteinは West Side Story, the Jeremiah and Kaddish symphonies, and televised Young People’s Concerts によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1943",
            "title": "György Ligeti（1923–2006）",
            "description": "[György Ligeti]<br>Atmosphères, Lux aeterna and the opera Le Grand Macabre はGyörgy Ligetiの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1945",
            "title": "Pierre Boulez（1925–2016）",
            "description": "[Pierre Boulez]<br>Pierre Boulezの代表的成果には Le Marteau sans maître, Structures and leadership at IRCAM がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1948",
            "title": "Karlheinz Stockhausen（1928–2007）",
            "description": "[Karlheinz Stockhausen]<br>Karlheinz Stockhausenの代表的成果には Gesang der Jünglinge, Kontakte and the Licht opera cycle がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1950",
            "title": "Tōru Takemitsu（1930–1996）",
            "description": "[Tōru Takemitsu]<br>Tōru Takemitsuは November Steps, Requiem for Strings and film scores that blend Japanese and Western timbres によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と近現代芸術音楽の広い変化を結ぶ。"
        },
        {
            "start": "1955",
            "title": "Arvo Pärt（生 1935）",
            "description": "[Arvo Pärt]<br>Tabula Rasa, Fratres and the tintinnabuli technique はArvo Pärtの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1956",
            "title": "Steve Reich（生 1936）",
            "description": "[Steve Reich]<br>It’s Gonna Rain, Music for 18 Musicians and Different Trains はSteve Reichの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1957",
            "title": "Philip Glass（生 1937）",
            "description": "[Philip Glass]<br>Philip Glassの代表的成果には Einstein on the Beach, Glassworks and repetitive additive-process writing がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1967",
            "title": "John Adams（生 1947）",
            "description": "[John Adams]<br>John Adamsを理解する直接の入口は Harmonielehre, Nixon in China and Short Ride in a Fast Machine である。そこから作曲・形式・音響の組織化の扱いと、それが近現代芸術音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1972",
            "title": "Kaija Saariaho（1952–2023）",
            "description": "[Kaija Saariaho]<br>Kaija Saariahoの代表的成果には L’Amour de loin, Graal théâtre and spectral-electronic approaches to timbre がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1977",
            "title": "Tan Dun（生 1957）",
            "description": "[Tan Dun]<br>Water Concerto, the opera The First Emperor and the score for Crouching Tiger, Hidden Dragon はTan Dunの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが近現代芸術音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1981",
            "title": "Unsuk Chin（生 1961）",
            "description": "[Unsuk Chin]<br>Unsuk Chinの代表的成果には the Violin Concerto, Alice in Wonderland and vivid orchestral writing shaped by electronics がある。これらは近現代芸術音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        }
    ]
};

// ブルース、ジャズ、ゴスペル、R&B、ソウル、ファンクの人物
var tl_jazz_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1888",
            "title": "Scott Joplin（1868–1917）",
            "description": "[Scott Joplin]<br>Scott Joplinを理解する直接の入口は Maple Leaf Rag and the opera Treemonisha である。そこから作曲・形式・音響の組織化の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1893",
            "title": "W. C. Handy（1873–1958）",
            "description": "[W. C. Handy]<br>St. Louis Blues and Memphis Blues, among the first widely published blues compositions はW. C. Handyの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがブルースの作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1906",
            "title": "Ma Rainey（1886–1939）",
            "description": "[Ma Rainey]<br>See See Rider Blues and Prove It on Me Blues はMa Raineyの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがブルースの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1910",
            "title": "Jelly Roll Morton（1890–1941）",
            "description": "[Jelly Roll Morton]<br>Jelly Roll Mortonの代表的成果には Black Bottom Stomp, King Porter Stomp and the Red Hot Peppers recordings がある。これらはジャズにおけるアンサンブル編成・編曲・バンドサウンドを、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1914",
            "title": "Bessie Smith（1894–1937）",
            "description": "[Bessie Smith]<br>Bessie Smithの代表的成果には Downhearted Blues, St. Louis Blues and Nobody Knows You When You’re Down and Out がある。これらはブルースにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1917",
            "title": "Fletcher Henderson（1897–1952）",
            "description": "[Fletcher Henderson]<br>Fletcher Hendersonは arrangements such as Wrappin’ It Up that helped define big-band swing によって具体的に位置づけられる。そこに見られるアンサンブル編成・編曲・バンドサウンドが個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1917",
            "title": "Jimmie Lunceford（1897–1952）",
            "description": "[Jimmie Lunceford]<br>Jimmie Luncefordを理解する直接の入口は Rhythm Is Our Business and the band’s precise two-beat swing style である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1917",
            "title": "Sidney Bechet（1897–1959）",
            "description": "[Sidney Bechet]<br>Sidney Bechetは Summertime and Blue Horizon, with a powerful soprano-saxophone voice によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1919",
            "title": "Duke Ellington（1899–1974）",
            "description": "[Duke Ellington]<br>Duke Ellingtonを理解する直接の入口は Black and Tan Fantasy, Mood Indigo, Ko-Ko and extended suites such as Black, Brown and Beige である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1921",
            "title": "Louis Armstrong（1901–1971）",
            "description": "[Louis Armstrong]<br>Louis Armstrongを理解する直接の入口は the Hot Five and Hot Seven recordings, West End Blues and later vocal hits である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1923",
            "title": "Bix Beiderbecke（1903–1931）",
            "description": "[Bix Beiderbecke]<br>Bix Beiderbeckeの代表的成果には Singin’ the Blues and In a Mist がある。これらはジャズにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1924",
            "title": "Coleman Hawkins（1904–1969）",
            "description": "[Coleman Hawkins]<br>Coleman Hawkinsの代表的成果には Body and Soul and the establishment of the tenor saxophone as a major jazz voice がある。これらはジャズにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1924",
            "title": "Count Basie（1904–1984）",
            "description": "[Count Basie]<br>Count Basieを理解する直接の入口は One O’Clock Jump, Jumpin’ at the Woodside and a rhythm-section-centered swing style である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1924",
            "title": "Fats Waller（1904–1943）",
            "description": "[Fats Waller]<br>Fats Wallerを理解する直接の入口は Ain’t Misbehavin’, Honeysuckle Rose and Harlem stride piano である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1929",
            "title": "Art Tatum（1909–1956）",
            "description": "[Art Tatum]<br>Tea for Two and solo recordings that expanded jazz piano harmony and technique はArt Tatumの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1930",
            "title": "Django Reinhardt（1910–1953）",
            "description": "[Django Reinhardt]<br>Django Reinhardtの代表的成果には Minor Swing, Nuages and the Quintette du Hot Club de France がある。これらはジャズにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1930",
            "title": "Howlin’ Wolf（1910–1976）",
            "description": "[Howlin’ Wolf]<br>Smokestack Lightning, Spoonful and a commanding electric Chicago-blues sound はHowlin’ Wolfの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがブルースの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1930",
            "title": "T-Bone Walker（1910–1975）",
            "description": "[T-Bone Walker]<br>T-Bone Walkerは Call It Stormy Monday and early single-string electric-blues guitar によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とブルースの広い変化を結ぶ。"
        },
        {
            "start": "1931",
            "title": "Robert Johnson（1911–1938）",
            "description": "[Robert Johnson]<br>Robert Johnsonを理解する直接の入口は Cross Road Blues, Hellhound on My Trail and the 1936–37 sessions である。そこから作詞作曲と個性的な演奏表現の扱いと、それがブルースの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1933",
            "title": "Muddy Waters（1913–1983）",
            "description": "[Muddy Waters]<br>Muddy Watersを理解する直接の入口は Hoochie Coochie Man, Mannish Boy and the amplified Chicago-blues ensemble である。そこから声質・フレージング・録音表現の扱いと、それがブルースの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1935",
            "title": "Billie Holiday（1915–1959）",
            "description": "[Billie Holiday]<br>Billie Holidayは Strange Fruit, God Bless the Child and a behind-the-beat vocal phrasing style によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1935",
            "title": "Sister Rosetta Tharpe（1915–1973）",
            "description": "[Sister Rosetta Tharpe]<br>Sister Rosetta Tharpeの代表的成果には Strange Things Happening Every Day and electric-guitar gospel performances がある。これらはゴスペル音楽における演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1936",
            "title": "Charlie Christian（1916–1942）",
            "description": "[Charlie Christian]<br>Charlie Christianを理解する直接の入口は Solo Flight and amplified-guitar work with Benny Goodman である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1937",
            "title": "Dizzy Gillespie（1917–1993）",
            "description": "[Dizzy Gillespie]<br>Dizzy Gillespieの代表的成果には A Night in Tunisia, Groovin’ High and Afro-Cuban collaborations with Chano Pozo がある。これらはジャズにおけるアンサンブル編成・編曲・バンドサウンドを、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1937",
            "title": "Ella Fitzgerald（1917–1996）",
            "description": "[Ella Fitzgerald]<br>the Song Book albums and virtuosic scat performances such as Mack the Knife live in Berlin はElla Fitzgeraldの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1937",
            "title": "Thelonious Monk（1917–1982）",
            "description": "[Thelonious Monk]<br>Thelonious Monkは Round Midnight, Straight, No Chaser and angular compositions built from silence and dissonance によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1940",
            "title": "Charlie Parker（1920–1955）",
            "description": "[Charlie Parker]<br>Charlie Parkerを理解する直接の入口は Ko-Ko, Ornithology and the rapid harmonic language of bebop alto saxophone である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1940",
            "title": "Dave Brubeck（1920–2012）",
            "description": "[Dave Brubeck]<br>Time Out and Take Five, popularizing unusual meters in modern jazz はDave Brubeckの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1942",
            "title": "Charles Mingus（1922–1979）",
            "description": "[Charles Mingus]<br>Charles Mingusを理解する直接の入口は Mingus Ah Um, The Black Saint and the Sinner Lady and politically charged ensemble writing である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1944",
            "title": "Bud Powell（1924–1966）",
            "description": "[Bud Powell]<br>Un Poco Loco and a bebop piano language modeled on horn phrasing はBud Powellの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1944",
            "title": "Sarah Vaughan（1924–1990）",
            "description": "[Sarah Vaughan]<br>Sarah Vaughanを理解する直接の入口は Misty, Lullaby of Birdland and an unusually wide vocal range and harmonic control である。そこから声質・フレージング・録音表現の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1945",
            "title": "B. B. King（1925–2015）",
            "description": "[B. B. King]<br>B. B. Kingを理解する直接の入口は The Thrill Is Gone, Live at the Regal and the singing single-note guitar style associated with Lucille である。そこから演奏技法・音色・即興語法の扱いと、それがブルースの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1946",
            "title": "John Coltrane（1926–1967）",
            "description": "[John Coltrane]<br>John Coltraneは Giant Steps, My Favorite Things and A Love Supreme によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1946",
            "title": "Miles Davis（1926–1991）",
            "description": "[Miles Davis]<br>Miles Davisを理解する直接の入口は Birth of the Cool, Kind of Blue, Miles Smiles and Bitches Brew である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1949",
            "title": "Bill Evans（1929–1980）",
            "description": "[Bill Evans]<br>Bill Evansの代表的成果には Sunday at the Village Vanguard and a conversational piano-trio concept がある。これらはジャズにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1949",
            "title": "Cecil Taylor（1929–2018）",
            "description": "[Cecil Taylor]<br>Cecil Taylorは Unit Structures and percussive, densely organized free-jazz piano によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1949",
            "title": "Chet Baker（1929–1988）",
            "description": "[Chet Baker]<br>Chet Bakerを理解する直接の入口は My Funny Valentine and the cool-jazz combination of trumpet and intimate vocals である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1950",
            "title": "Clifford Brown（1930–1986）",
            "description": "[Clifford Brown]<br>Clifford Brownを理解する直接の入口は Clifford Brown and Max Roach and a warm, technically exact trumpet style である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1950",
            "title": "Ornette Coleman（1930–2015）",
            "description": "[Ornette Coleman]<br>Ornette Colemanの代表的成果には The Shape of Jazz to Come and Free Jazz がある。これらはジャズにおける作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1950",
            "title": "Ray Charles（1930–2004）",
            "description": "[Ray Charles]<br>I Got a Woman, What’d I Say and Modern Sounds in Country and Western Music はRay Charlesの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがリズム・アンド・ブルースの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1950",
            "title": "Sonny Rollins（生 1930）",
            "description": "[Sonny Rollins]<br>Saxophone Colossus, The Bridge and extended thematic improvisation はSonny Rollinsの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1951",
            "title": "Sam Cooke（1931–1964）",
            "description": "[Sam Cooke]<br>You Send Me, Bring It On Home to Me and A Change Is Gonna Come はSam Cookeの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがソウル音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1953",
            "title": "James Brown（1933–2006）",
            "description": "[James Brown]<br>James Brownの代表的成果には Papa’s Got a Brand New Bag, Cold Sweat and the rhythmic foundations of funk がある。これらはファンクにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1953",
            "title": "Nina Simone（1933–2006）",
            "description": "[Nina Simone]<br>Nina Simoneを理解する直接の入口は I Put a Spell on You, Sinnerman and Mississippi Goddam である。そこから声質・フレージング・録音表現の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1953",
            "title": "Wayne Shorter（1933–2023）",
            "description": "[Wayne Shorter]<br>Wayne Shorterは Speak No Evil, JuJu and compositions for Miles Davis’s second quintet and Weather Report によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1959",
            "title": "Marvin Gaye（1939–1984）",
            "description": "[Marvin Gaye]<br>Marvin Gayeは What’s Going On, Let’s Get It On and layered studio vocal production によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とソウル音楽の広い変化を結ぶ。"
        },
        {
            "start": "1960",
            "title": "Herbie Hancock（生 1940）",
            "description": "[Herbie Hancock]<br>Maiden Voyage, Head Hunters and Rockit はHerbie Hancockの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがジャズの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1961",
            "title": "Chick Corea（1941–2021）",
            "description": "[Chick Corea]<br>Chick Coreaの代表的成果には Now He Sings, Now He Sobs, Return to Forever and Spain がある。これらはジャズにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1961",
            "title": "George Clinton（生 1941）",
            "description": "[George Clinton]<br>George Clintonの代表的成果には Mothership Connection, One Nation Under a Groove and the P-Funk mythology がある。これらはファンクにおけるアンサンブル編成・編曲・バンドサウンドを、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1961",
            "title": "Otis Redding（1941–1967）",
            "description": "[Otis Redding]<br>Otis Reddingの代表的成果には These Arms of Mine, Try a Little Tenderness and (Sittin’ On) The Dock of the Bay がある。これらはソウル音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1962",
            "title": "Aretha Franklin（1942–2018）",
            "description": "[Aretha Franklin]<br>Respect, Chain of Fools and Amazing Grace はAretha Franklinの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがソウル音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1962",
            "title": "Curtis Mayfield（1942–1999）",
            "description": "[Curtis Mayfield]<br>Curtis Mayfieldを理解する直接の入口は People Get Ready, Super Fly and socially conscious falsetto soul である。そこから作詞作曲と個性的な演奏表現の扱いと、それがソウル音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1963",
            "title": "Sly Stone（生 1943）",
            "description": "[Sly Stone]<br>Sly Stoneを理解する直接の入口は Dance to the Music, Everyday People and There’s a Riot Goin’ On である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがファンクの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1965",
            "title": "Keith Jarrett（生 1945）",
            "description": "[Keith Jarrett]<br>Keith Jarrettを理解する直接の入口は The Köln Concert and the Standards Trio である。そこから演奏技法・音色・即興語法の扱いと、それがジャズの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1966",
            "title": "Al Green（生 1946）",
            "description": "[Al Green]<br>Tired of Being Alone, Let’s Stay Together and the Hi Records sound はAl Greenの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがソウル音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1970",
            "title": "Stevie Wonder（生 1950）",
            "description": "[Stevie Wonder]<br>Stevie Wonderは Talking Book, Innervisions, Songs in the Key of Life and synthesizer-centered soul production によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とソウル音楽の広い変化を結ぶ。"
        },
        {
            "start": "1974",
            "title": "Pat Metheny（生 1954）",
            "description": "[Pat Metheny]<br>Pat Methenyは Bright Size Life, the Pat Metheny Group and expansive guitar-synth textures によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1978",
            "title": "Prince（1958–2016）",
            "description": "[Prince]<br>Princeを理解する直接の入口は Purple Rain, Sign o’ the Times and a multi-instrumental blend of funk, rock and pop である。そこから作詞作曲と個性的な演奏表現の扱いと、それがファンクの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1981",
            "title": "Wynton Marsalis（生 1961）",
            "description": "[Wynton Marsalis]<br>Wynton Marsalisは Black Codes (From the Underground), Blood on the Fields and Jazz at Lincoln Center によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とジャズの広い変化を結ぶ。"
        },
        {
            "start": "1991",
            "title": "Erykah Badu（生 1971）",
            "description": "[Erykah Badu]<br>Erykah Baduの代表的成果には Baduizm and Mama’s Gun がある。これらはソウル音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1994",
            "title": "D’Angelo（生 1974）",
            "description": "[D’Angelo]<br>D’Angeloは Brown Sugar, Voodoo and Black Messiah によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とソウル音楽の広い変化を結ぶ。"
        },
        {
            "start": "2001",
            "title": "Beyoncé（生 1981）",
            "description": "[Beyoncé]<br>Beyoncéを理解する直接の入口は Crazy in Love, Lemonade, Renaissance and Cowboy Carter である。そこから声質・フレージング・録音表現の扱いと、それがリズム・アンド・ブルースの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "2003",
            "title": "Amy Winehouse（1983–2011）",
            "description": "[Amy Winehouse]<br>Frank, Back to Black and Rehab はAmy Winehouseの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがソウル音楽の声質・フレージング・録音表現をどう変えたかにある。"
        }
    ]
};

// ロック、ポップ、カントリー、ヒップホップ、電子音楽の人物
var tl_popular_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1917",
            "title": "Jimmie Rodgers（1897–1933）",
            "description": "[Jimmie Rodgers]<br>Jimmie Rodgersを理解する直接の入口は Blue Yodel No. 1 and the fusion of railroad song, blues and early country recording である。そこから声質・フレージング・録音表現の扱いと、それがカントリー／ルーツ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1931",
            "title": "Bill Monroe（1911–1996）",
            "description": "[Bill Monroe]<br>Bill Monroeは Blue Moon of Kentucky and the Blue Grass Boys sound that named bluegrass によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とカントリー／ルーツ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1932",
            "title": "Woody Guthrie（1912–1967）",
            "description": "[Woody Guthrie]<br>This Land Is Your Land and the Dust Bowl Ballads はWoody Guthrieの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがフォーク／シンガーソングライター音楽の作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1935",
            "title": "Frank Sinatra（1915–1998）",
            "description": "[Frank Sinatra]<br>Frank Sinatraの代表的成果には In the Wee Small Hours, Songs for Swingin’ Lovers! and microphone-centered phrasing がある。これらはポピュラー音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1935",
            "title": "Édith Piaf（1915–1963）",
            "description": "[Édith Piaf]<br>La Vie en rose, Hymne à l’amour and Non, je ne regrette rien はÉdith Piafの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがポピュラー音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1939",
            "title": "Nat King Cole（1919–1965）",
            "description": "[Nat King Cole]<br>Nat King Coleは Unforgettable, Mona Lisa and the transition from jazz piano trio to pop vocal stardom によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "1939",
            "title": "Pete Seeger（1919–2014）",
            "description": "[Pete Seeger]<br>Pete Seegerを理解する直接の入口は If I Had a Hammer, Where Have All the Flowers Gone? and participatory folk performance である。そこから作詞作曲と個性的な演奏表現の扱いと、それがフォーク／シンガーソングライター音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1943",
            "title": "Hank Williams（1923–1953）",
            "description": "[Hank Williams]<br>Hank Williamsの代表的成果には Your Cheatin’ Heart, I’m So Lonesome I Could Cry and Lovesick Blues がある。これらはカントリー／ルーツ音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1946",
            "title": "Chuck Berry（1926–2017）",
            "description": "[Chuck Berry]<br>Maybellene, Roll Over Beethoven and Johnny B. Goode はChuck Berryの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1948",
            "title": "Bo Diddley（1928–2008）",
            "description": "[Bo Diddley]<br>Bo Diddleyの代表的成果には Bo Diddley, Who Do You Love? and the syncopated “Bo Diddley beat” がある。これらはロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1948",
            "title": "Fats Domino（1928–2017）",
            "description": "[Fats Domino]<br>Fats Dominoの代表的成果には The Fat Man, Ain’t That a Shame and Blueberry Hill がある。これらはロックにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1952",
            "title": "Johnny Cash（1932–2003）",
            "description": "[Johnny Cash]<br>Johnny Cashを理解する直接の入口は I Walk the Line, Folsom Prison Blues and the prison concert albums である。そこから作詞作曲と個性的な演奏表現の扱いと、それがカントリー／ルーツ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1952",
            "title": "Little Richard（1932–2020）",
            "description": "[Little Richard]<br>Little Richardは Tutti Frutti, Long Tall Sally and Good Golly, Miss Molly によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1952",
            "title": "Patsy Cline（1932–1963）",
            "description": "[Patsy Cline]<br>Patsy Clineの代表的成果には Crazy, I Fall to Pieces and the Nashville Sound vocal style がある。これらはカントリー／ルーツ音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1953",
            "title": "Willie Nelson（生 1933）",
            "description": "[Willie Nelson]<br>Willie Nelsonを理解する直接の入口は Red Headed Stranger, Stardust and the outlaw-country movement である。そこから作詞作曲と個性的な演奏表現の扱いと、それがカントリー／ルーツ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1954",
            "title": "Leonard Cohen（1934–2016）",
            "description": "[Leonard Cohen]<br>Suzanne, Hallelujah and Songs of Love and Hate はLeonard Cohenの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがフォーク／シンガーソングライター音楽の作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1954",
            "title": "The Isley Brothers 結成",
            "description": "[The Isley Brothers formed]<br>The Isley Brothersは初期メンバーの相互作用と共同制作によって個性を確立した。Shout, Twist and Shout and 3 + 3 から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1955",
            "title": "Elvis Presley（1935–1977）",
            "description": "[Elvis Presley]<br>Elvis Presleyは That’s All Right, Heartbreak Hotel and the 1968 Comeback Special によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1955",
            "title": "Jerry Lee Lewis（1935–2022）",
            "description": "[Jerry Lee Lewis]<br>Whole Lotta Shakin’ Goin’ On and Great Balls of Fire はJerry Lee Lewisの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1956",
            "title": "Buddy Holly（1936–1959）",
            "description": "[Buddy Holly]<br>Buddy Hollyの代表的成果には That’ll Be the Day, Peggy Sue and an influential self-contained rock-band model がある。これらはロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1956",
            "title": "Roy Orbison（1936–1988）",
            "description": "[Roy Orbison]<br>Only the Lonely, Crying and Oh, Pretty Woman はRoy Orbisonの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1957",
            "title": "The Supremes 結成",
            "description": "[The Supremes formed]<br>The Supremesは初期メンバーの相互作用と共同制作によって個性を確立した。Where Did Our Love Go, You Can’t Hurry Love and a run of Motown No. 1 singles から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1960",
            "title": "Giorgio Moroder（生 1940）",
            "description": "[Giorgio Moroder]<br>Giorgio Moroderの代表的成果には I Feel Love with Donna Summer and synthesizer-driven disco production がある。これらは電子音楽におけるスタジオ制作・ビート構築・音色設計を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1960",
            "title": "John Lennon（1940–1980）",
            "description": "[John Lennon]<br>John Lennonを理解する直接の入口は Strawberry Fields Forever, Imagine and Plastic Ono Band である。そこから作詞作曲と個性的な演奏表現の扱いと、それがロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1960",
            "title": "Ringo Starr（生 1940）",
            "description": "[Ringo Starr]<br>Ringo Starrは the Beatles recordings, Photograph and a highly economical rock-drumming style によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1960",
            "title": "The Beatles 結成",
            "description": "[The Beatles formed]<br>The Beatlesは初期メンバーの相互作用と共同制作によって個性を確立した。Please Please Me, Rubber Soul, Revolver, Sgt. Pepper and Abbey Road から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1961",
            "title": "Bob Dylan（生 1941）",
            "description": "[Bob Dylan]<br>Bob Dylanは Blowin’ in the Wind, Like a Rolling Stone, Highway 61 Revisited and Blood on the Tracks によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とフォーク／シンガーソングライター音楽の広い変化を結ぶ。"
        },
        {
            "start": "1961",
            "title": "Joan Baez（生 1941）",
            "description": "[Joan Baez]<br>Diamonds & Rust and a central role in the folk revival and civil-rights movement はJoan Baezの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがフォーク／シンガーソングライター音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1961",
            "title": "The Beach Boys 結成",
            "description": "[The Beach Boys formed]<br>The Beach Boysは初期メンバーの相互作用と共同制作によって個性を確立した。Surfin’ U.S.A., Pet Sounds and Good Vibrations から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1962",
            "title": "Barbra Streisand（生 1942）",
            "description": "[Barbra Streisand]<br>Barbra Streisandは People, The Way We Were and a career spanning Broadway, film and studio pop によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "1962",
            "title": "Brian Wilson（生 1942）",
            "description": "[Brian Wilson]<br>Brian Wilsonの代表的成果には Pet Sounds, Good Vibrations and densely layered vocal arrangements がある。これらはロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1962",
            "title": "Carole King（生 1942）",
            "description": "[Carole King]<br>Carole Kingは Will You Love Me Tomorrow, (You Make Me Feel Like) A Natural Woman and Tapestry によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "1962",
            "title": "Jimi Hendrix（1942–1970）",
            "description": "[Jimi Hendrix]<br>Jimi Hendrixは Are You Experienced, Electric Ladyland and the Woodstock Star-Spangled Banner によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1962",
            "title": "Paul McCartney（生 1942）",
            "description": "[Paul McCartney]<br>Paul McCartneyの代表的成果には Yesterday, Hey Jude, Band on the Run and a long post-Beatles songwriting career がある。これらはロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1962",
            "title": "The Rolling Stones 結成",
            "description": "[The Rolling Stones formed]<br>The Rolling Stonesは初期メンバーの相互作用と共同制作によって個性を確立した。(I Can’t Get No) Satisfaction, Beggars Banquet, Let It Bleed and Exile on Main St. から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1963",
            "title": "George Harrison（1943–2001）",
            "description": "[George Harrison]<br>George Harrisonは While My Guitar Gently Weeps, Something and All Things Must Pass によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1963",
            "title": "Janis Joplin（1943–1970）",
            "description": "[Janis Joplin]<br>Janis Joplinを理解する直接の入口は Piece of My Heart, Ball and Chain and Pearl である。そこから声質・フレージング・録音表現の扱いと、それがロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1963",
            "title": "Jim Morrison（1943–1971）",
            "description": "[Jim Morrison]<br>Jim Morrisonを理解する直接の入口は Light My Fire, The End and the theatrical frontmanship of the Doors である。そこから声質・フレージング・録音表現の扱いと、それがロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1963",
            "title": "Joni Mitchell（生 1943）",
            "description": "[Joni Mitchell]<br>Blue, Court and Spark and Hejira はJoni Mitchellの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがフォーク／シンガーソングライター音楽の作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1963",
            "title": "Keith Richards（生 1943）",
            "description": "[Keith Richards]<br>Keith Richardsを理解する直接の入口は the riffs of Satisfaction, Jumpin’ Jack Flash and Gimme Shelter である。そこから演奏技法・音色・即興語法の扱いと、それがロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1963",
            "title": "Mick Jagger（生 1943）",
            "description": "[Mick Jagger]<br>Mick Jaggerの代表的成果には the Rolling Stones catalogue and a performance style that defined the modern rock frontman がある。これらはロックにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1964",
            "title": "Jimmy Page（生 1944）",
            "description": "[Jimmy Page]<br>Jimmy Pageは Led Zeppelin I–IV, Whole Lotta Love and Stairway to Heaven によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1964",
            "title": "The Who 結成",
            "description": "[The Who formed]<br>The Whoは初期メンバーの相互作用と共同制作によって個性を確立した。My Generation, Tommy, Who’s Next and Quadrophenia から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1965",
            "title": "Debbie Harry（生 1945）",
            "description": "[Debbie Harry]<br>Debbie Harryを理解する直接の入口は Heart of Glass, Call Me and Blondie’s crossover between punk, disco and pop である。そこから声質・フレージング・録音表現の扱いと、それがパンク／オルタナティブ・ロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1965",
            "title": "Eric Clapton（生 1945）",
            "description": "[Eric Clapton]<br>Eric Claptonの代表的成果には the Blues Breakers album, Layla and Unplugged がある。これらはロックにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1965",
            "title": "Lemmy Kilmister（1945–2015）",
            "description": "[Lemmy Kilmister]<br>Lemmy Kilmisterの代表的成果には Ace of Spades and Motörhead’s fast, distorted bridge between punk and metal がある。これらはヘヴィ・メタルにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1965",
            "title": "Pink Floyd 結成",
            "description": "[Pink Floyd formed]<br>Pink Floydは初期メンバーの相互作用と共同制作によって個性を確立した。The Dark Side of the Moon, Wish You Were Here and The Wall から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1965",
            "title": "The Doors 結成",
            "description": "[The Doors formed]<br>The Doorsは初期メンバーの相互作用と共同制作によって個性を確立した。The Doors, Light My Fire, The End and L.A. Woman から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1966",
            "title": "Dolly Parton（生 1946）",
            "description": "[Dolly Parton]<br>Dolly Partonの代表的成果には Jolene, I Will Always Love You and Coat of Many Colors がある。これらはカントリー／ルーツ音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1966",
            "title": "Freddie Mercury（1946–1991）",
            "description": "[Freddie Mercury]<br>Bohemian Rhapsody, Somebody to Love and Queen’s Live Aid performance はFreddie Mercuryの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1966",
            "title": "Patti Smith（生 1946）",
            "description": "[Patti Smith]<br>Patti Smithは Horses and Because the Night によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とパンク／オルタナティブ・ロックの広い変化を結ぶ。"
        },
        {
            "start": "1966",
            "title": "The Velvet Underground 結成",
            "description": "[The Velvet Underground formed]<br>The Velvet Undergroundは初期メンバーの相互作用と共同制作によって個性を確立した。The Velvet Underground & Nico and White Light/White Heat から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1967",
            "title": "Brian May（生 1947）",
            "description": "[Brian May]<br>Brian Mayは Bohemian Rhapsody, We Will Rock You and the layered Red Special guitar sound によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1967",
            "title": "Carlos Santana（生 1947）",
            "description": "[Carlos Santana]<br>Soul Sacrifice at Woodstock, Abraxas and Supernatural はCarlos Santanaの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1967",
            "title": "David Bowie（1947–2016）",
            "description": "[David Bowie]<br>Space Oddity, The Rise and Fall of Ziggy Stardust, Low and Blackstar はDavid Bowieの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1967",
            "title": "Elton John（生 1947）",
            "description": "[Elton John]<br>Elton Johnを理解する直接の入口は Your Song, Goodbye Yellow Brick Road and a long partnership with Bernie Taupin である。そこから作詞作曲と個性的な演奏表現の扱いと、それがポピュラー音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1967",
            "title": "Iggy Pop（生 1947）",
            "description": "[Iggy Pop]<br>Iggy Popは the Stooges albums, Lust for Life and an extreme stage persona central to punk history によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とパンク／オルタナティブ・ロックの広い変化を結ぶ。"
        },
        {
            "start": "1968",
            "title": "Black Sabbath 結成",
            "description": "[Black Sabbath formed]<br>Black Sabbathは初期メンバーの相互作用と共同制作によって個性を確立した。Black Sabbath, Paranoid and Master of Reality から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1968",
            "title": "Brian Eno（生 1948）",
            "description": "[Brian Eno]<br>Roxy Music, Another Green World, Ambient 1 and production for Bowie, Talking Heads and U2 はBrian Enoの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが電子音楽のスタジオ制作・ビート構築・音色設計をどう変えたかにある。"
        },
        {
            "start": "1968",
            "title": "Jean-Michel Jarre（生 1948）",
            "description": "[Jean-Michel Jarre]<br>Jean-Michel Jarreを理解する直接の入口は Oxygène, Équinoxe and large-scale outdoor electronic concerts である。そこから作曲・形式・音響の組織化の扱いと、それが電子音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1968",
            "title": "Led Zeppelin 結成",
            "description": "[Led Zeppelin formed]<br>Led Zeppelinは初期メンバーの相互作用と共同制作によって個性を確立した。Led Zeppelin I–IV, Physical Graffiti and Kashmir から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1968",
            "title": "Ozzy Osbourne（生 1948）",
            "description": "[Ozzy Osbourne]<br>Ozzy Osbourneを理解する直接の入口は Black Sabbath’s early albums, Blizzard of Ozz and Crazy Train である。そこから声質・フレージング・録音表現の扱いと、それがヘヴィ・メタルの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1968",
            "title": "Robert Plant（生 1948）",
            "description": "[Robert Plant]<br>Robert Plantを理解する直接の入口は Whole Lotta Love, Stairway to Heaven and later roots-music collaborations である。そこから声質・フレージング・録音表現の扱いと、それがロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1968",
            "title": "Stevie Nicks（生 1948）",
            "description": "[Stevie Nicks]<br>Stevie Nicksの代表的成果には Rhiannon, Dreams, Edge of Seventeen and Fleetwood Mac’s Rumours がある。これらはロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1968",
            "title": "Tony Iommi（生 1948）",
            "description": "[Tony Iommi]<br>Tony Iommiを理解する直接の入口は the low-tuned riffs of Black Sabbath, Paranoid and Master of Reality である。そこから演奏技法・音色・即興語法の扱いと、それがヘヴィ・メタルの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1969",
            "title": "Bruce Springsteen（生 1949）",
            "description": "[Bruce Springsteen]<br>Bruce Springsteenは Born to Run, Darkness on the Edge of Town and Born in the U.S.A. によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とロックの広い変化を結ぶ。"
        },
        {
            "start": "1970",
            "title": "Kraftwerk 結成",
            "description": "[Kraftwerk formed]<br>Kraftwerkは初期メンバーの相互作用と共同制作によって個性を確立した。Autobahn, Trans-Europe Express, The Man-Machine and Computer World から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1970",
            "title": "Peter Gabriel（生 1950）",
            "description": "[Peter Gabriel]<br>Genesis-era concept performances, So and the Real World label はPeter Gabrielの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1970",
            "title": "Queen 結成",
            "description": "[Queen formed]<br>Queenは初期メンバーの相互作用と共同制作によって個性を確立した。A Night at the Opera, Bohemian Rhapsody, We Will Rock You and Live Aid から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1970",
            "title": "Tom Petty（1950–2017）",
            "description": "[Tom Petty]<br>American Girl, Damn the Torpedoes and Full Moon Fever はTom Pettyの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1971",
            "title": "Eagles 結成",
            "description": "[Eagles formed]<br>Eaglesは初期メンバーの相互作用と共同制作によって個性を確立した。Desperado, Hotel California and Their Greatest Hits 1971–1975 から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1971",
            "title": "Joey Ramone（1951–2001）",
            "description": "[Joey Ramone]<br>Joey Ramoneを理解する直接の入口は Blitzkrieg Bop, Sheena Is a Punk Rocker and the Ramones’ stripped-down vocal style である。そこから声質・フレージング・録音表現の扱いと、それがパンク／オルタナティブ・ロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1972",
            "title": "David Byrne（生 1952）",
            "description": "[David Byrne]<br>David Byrneの代表的成果には Talking Heads: 77, Remain in Light and Stop Making Sense がある。これらはパンク／オルタナティブ・ロックにおける作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1974",
            "title": "Ramones 結成",
            "description": "[Ramones formed]<br>Ramonesは初期メンバーの相互作用と共同制作によって個性を確立した。Ramones, Rocket to Russia and the short-fast-loud template of punk から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1975",
            "title": "DJ Kool Herc（生 1955）",
            "description": "[DJ Kool Herc]<br>DJ Kool Hercを理解する直接の入口は the 1973 Bronx party tradition and breakbeat extension with two turntables である。そこからターンテーブル技法・ブレイク構成・現場文化の扱いと、それがヒップホップの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1975",
            "title": "Eddie Van Halen（1955–2020）",
            "description": "[Eddie Van Halen]<br>Eddie Van Halenの代表的成果には Eruption, Van Halen and a two-handed tapping vocabulary for rock guitar がある。これらはロックにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1975",
            "title": "Sex Pistols 結成",
            "description": "[Sex Pistols formed]<br>Sex Pistolsは初期メンバーの相互作用と共同制作によって個性を確立した。Anarchy in the U.K., God Save the Queen and Never Mind the Bollocks から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1976",
            "title": "Johnny Rotten（生 1956）",
            "description": "[Johnny Rotten]<br>Anarchy in the U.K., Never Mind the Bollocks and Public Image Ltd. はJohnny Rottenの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがパンク／オルタナティブ・ロックの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1976",
            "title": "Joy Division 結成",
            "description": "[Joy Division formed]<br>Joy Divisionは初期メンバーの相互作用と共同制作によって個性を確立した。Unknown Pleasures, Closer and Love Will Tear Us Apart から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1976",
            "title": "The Clash 結成",
            "description": "[The Clash formed]<br>The Clashは初期メンバーの相互作用と共同制作によって個性を確立した。The Clash, London Calling and Sandinista! から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1976",
            "title": "U2 結成",
            "description": "[U2 formed]<br>U2は初期メンバーの相互作用と共同制作によって個性を確立した。War, The Joshua Tree, Achtung Baby and large-scale multimedia tours から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1977",
            "title": "Afrika Bambaataa（生 1957）",
            "description": "[Afrika Bambaataa]<br>Afrika Bambaataaの代表的成果には Planet Rock and the Universal Zulu Nation がある。これらはヒップホップにおけるターンテーブル技法・ブレイク構成・現場文化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1977",
            "title": "Siouxsie Sioux（生 1957）",
            "description": "[Siouxsie Sioux]<br>Siouxsie Siouxを理解する直接の入口は Hong Kong Garden, Juju and a major post-punk/goth vocal identity である。そこから声質・フレージング・録音表現の扱いと、それがパンク／オルタナティブ・ロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1977",
            "title": "Talking Heads 結成",
            "description": "[Talking Heads formed]<br>Talking Headsは初期メンバーの相互作用と共同制作によって個性を確立した。Talking Heads: 77, Fear of Music, Remain in Light and Stop Making Sense から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1978",
            "title": "Grandmaster Flash（生 1958）",
            "description": "[Grandmaster Flash]<br>The Adventures of Grandmaster Flash on the Wheels of Steel and The Message はGrandmaster Flashの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがヒップホップのターンテーブル技法・ブレイク構成・現場文化をどう変えたかにある。"
        },
        {
            "start": "1978",
            "title": "Kate Bush（生 1958）",
            "description": "[Kate Bush]<br>Kate Bushは Wuthering Heights, Hounds of Love and Running Up That Hill によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "1978",
            "title": "Madonna（生 1958）",
            "description": "[Madonna]<br>Like a Virgin, Like a Prayer, Vogue and Ray of Light はMadonnaの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがポピュラー音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1978",
            "title": "Michael Jackson（1958–2009）",
            "description": "[Michael Jackson]<br>Michael Jacksonの代表的成果には Off the Wall, Thriller, Bad and landmark music videos such as Billie Jean and Thriller がある。これらはポピュラー音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1978",
            "title": "The Cure 結成",
            "description": "[The Cure formed]<br>The Cureは初期メンバーの相互作用と共同制作によって個性を確立した。Seventeen Seconds, Pornography, Disintegration and Just Like Heaven から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1979",
            "title": "Morrissey（生 1959）",
            "description": "[Morrissey]<br>Morrisseyを理解する直接の入口は The Smiths catalogue and solo songs such as Everyday Is Like Sunday である。そこから声質・フレージング・録音表現の扱いと、それがパンク／オルタナティブ・ロックの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1979",
            "title": "Robert Smith（生 1959）",
            "description": "[Robert Smith]<br>Robert Smithは A Forest, Just Like Heaven, Disintegration and the Cure’s distinctive guitar textures によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とパンク／オルタナティブ・ロックの広い変化を結ぶ。"
        },
        {
            "start": "1980",
            "title": "Chuck D（生 1960）",
            "description": "[Chuck D]<br>Public Enemy’s It Takes a Nation of Millions to Hold Us Back and Fear of a Black Planet はChuck Dの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがヒップホップの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1981",
            "title": "Metallica 結成",
            "description": "[Metallica formed]<br>Metallicaは初期メンバーの相互作用と共同制作によって個性を確立した。Kill ’Em All, Master of Puppets and Metallica (The Black Album) から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1983",
            "title": "George Michael（生 1963）",
            "description": "[George Michael]<br>George Michaelの代表的成果には Faith, Listen Without Prejudice Vol. 1 and Careless Whisper がある。これらはポピュラー音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1983",
            "title": "James Hetfield（生 1963）",
            "description": "[James Hetfield]<br>James Hetfieldを理解する直接の入口は Master of Puppets, One and Enter Sandman である。そこから声質・フレージング・録音表現の扱いと、それがヘヴィ・メタルの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1983",
            "title": "Johnny Marr（生 1963）",
            "description": "[Johnny Marr]<br>Johnny Marrの代表的成果には This Charming Man, How Soon Is Now? and the Smiths’ layered guitar writing がある。これらはパンク／オルタナティブ・ロックにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1983",
            "title": "Lars Ulrich（生 1963）",
            "description": "[Lars Ulrich]<br>Lars Ulrichを理解する直接の入口は Metallica’s thrash-era albums and a major role in arranging the band’s long-form songs である。そこから演奏技法・音色・即興語法の扱いと、それがヘヴィ・メタルの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1983",
            "title": "Run-D.M.C. 結成",
            "description": "[Run-D.M.C. formed]<br>Run-D.M.C.は初期メンバーの相互作用と共同制作によって個性を確立した。Run-D.M.C., Raising Hell and Walk This Way with Aerosmith から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1983",
            "title": "Whitney Houston（生 1963）",
            "description": "[Whitney Houston]<br>Whitney Houstonの代表的成果には How Will I Know, I Wanna Dance with Somebody and I Will Always Love You がある。これらはポピュラー音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1985",
            "title": "Björk（生 1965）",
            "description": "[Björk]<br>Björkは Debut, Homogenic, Vespertine and Biophilia によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式と電子音楽の広い変化を結ぶ。"
        },
        {
            "start": "1985",
            "title": "Dr. Dre（生 1965）",
            "description": "[Dr. Dre]<br>Dr. Dreは Straight Outta Compton, The Chronic and production for Snoop Dogg, Eminem and others によって具体的に位置づけられる。そこに見られるスタジオ制作・ビート構築・音色設計が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1985",
            "title": "KRS-One（生 1965）",
            "description": "[KRS-One]<br>KRS-Oneは Criminal Minded, By All Means Necessary and the Stop the Violence movement によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1985",
            "title": "Radiohead 結成",
            "description": "[Radiohead formed]<br>Radioheadは初期メンバーの相互作用と共同制作によって個性を確立した。The Bends, OK Computer, Kid A and In Rainbows から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1986",
            "title": "Janet Jackson（生 1966）",
            "description": "[Janet Jackson]<br>Janet Jacksonは Control, Rhythm Nation 1814 and The Velvet Rope によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "1987",
            "title": "Kurt Cobain（1967–1994）",
            "description": "[Kurt Cobain]<br>Smells Like Teen Spirit, Nevermind and In Utero はKurt Cobainの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1987",
            "title": "Nirvana 結成",
            "description": "[Nirvana formed]<br>Nirvanaは初期メンバーの相互作用と共同制作によって個性を確立した。Bleach, Nevermind, In Utero and MTV Unplugged in New York から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1988",
            "title": "A Tribe Called Quest 結成",
            "description": "[A Tribe Called Quest formed]<br>A Tribe Called Questは初期メンバーの相互作用と共同制作によって個性を確立した。The Low End Theory, Midnight Marauders and jazz-based sampling から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1988",
            "title": "Celine Dion（生 1968）",
            "description": "[Celine Dion]<br>The Power of Love, Falling into You and My Heart Will Go On はCeline Dionの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがポピュラー音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1988",
            "title": "LL Cool J（生 1968）",
            "description": "[LL Cool J]<br>LL Cool Jは Radio, Mama Said Knock You Out and I Need Love によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1988",
            "title": "Massive Attack 結成",
            "description": "[Massive Attack formed]<br>Massive Attackは初期メンバーの相互作用と共同制作によって個性を確立した。Blue Lines, Protection and Mezzanine から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1988",
            "title": "Rakim（生 1968）",
            "description": "[Rakim]<br>Rakimの代表的成果には Paid in Full and Follow the Leader, with internal rhyme and calm, complex flow がある。これらはヒップホップにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1988",
            "title": "Thom Yorke（生 1968）",
            "description": "[Thom Yorke]<br>OK Computer, Kid A, In Rainbows and The Eraser はThom Yorkeの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがロックの作詞作曲と個性的な演奏表現をどう変えたかにある。"
        },
        {
            "start": "1989",
            "title": "Dave Grohl（生 1969）",
            "description": "[Dave Grohl]<br>Dave Grohlの代表的成果には Nirvana’s Nevermind and In Utero, then Foo Fighters albums beginning in 1995 がある。これらはロックにおける演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1989",
            "title": "Ice Cube（生 1969）",
            "description": "[Ice Cube]<br>Ice Cubeの代表的成果には Straight Outta Compton, AmeriKKKa’s Most Wanted and Death Certificate がある。これらはヒップホップにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1989",
            "title": "Jay-Z（生 1969）",
            "description": "[Jay-Z]<br>Jay-Zは Reasonable Doubt, The Blueprint and 4:44 によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1989",
            "title": "Mariah Carey（生 1969）",
            "description": "[Mariah Carey]<br>Vision of Love, Daydream and The Emancipation of Mimi はMariah Careyの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがポピュラー音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1991",
            "title": "Aphex Twin（生 1971）",
            "description": "[Aphex Twin]<br>Aphex Twinの代表的成果には Selected Ambient Works 85–92, Richard D. James Album and Come to Daddy がある。これらは電子音楽におけるスタジオ制作・ビート構築・音色設計を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1991",
            "title": "Missy Elliott（生 1971）",
            "description": "[Missy Elliott]<br>Supa Dupa Fly, Get Ur Freak On and Work It はMissy Elliottの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがヒップホップのスタジオ制作・ビート構築・音色設計をどう変えたかにある。"
        },
        {
            "start": "1991",
            "title": "Oasis 結成",
            "description": "[Oasis formed]<br>Oasisは初期メンバーの相互作用と共同制作によって個性を確立した。Definitely Maybe, (What’s the Story) Morning Glory? and Wonderwall から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1991",
            "title": "Tupac Shakur（1971–1996）",
            "description": "[Tupac Shakur]<br>Tupac Shakurは Me Against the World, All Eyez on Me and Changes によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1992",
            "title": "Eminem（生 1972）",
            "description": "[Eminem]<br>Eminemは The Slim Shady LP, The Marshall Mathers LP and Lose Yourself によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1992",
            "title": "The Notorious B.I.G.（1972–1997）",
            "description": "[The Notorious B.I.G.]<br>The Notorious B.I.G.は Ready to Die, Life After Death and Juicy によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "1993",
            "title": "Daft Punk 結成",
            "description": "[Daft Punk formed]<br>Daft Punkは初期メンバーの相互作用と共同制作によって個性を確立した。Homework, Discovery, Alive 2007 and Random Access Memories から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1993",
            "title": "Nas（生 1973）",
            "description": "[Nas]<br>Illmatic, It Was Written and the narrative style of N.Y. State of Mind はNasの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがヒップホップの声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1995",
            "title": "Lauryn Hill（生 1975）",
            "description": "[Lauryn Hill]<br>Lauryn Hillの代表的成果には The Score with the Fugees and The Miseducation of Lauryn Hill がある。これらはヒップホップにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1995",
            "title": "M.I.A.（生 1975）",
            "description": "[M.I.A.]<br>M.I.A.を理解する直接の入口は Arular, Kala and Paper Planes である。そこから声質・フレージング・録音表現の扱いと、それが電子音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1995",
            "title": "The White Stripes 結成",
            "description": "[The White Stripes formed]<br>The White Stripesは初期メンバーの相互作用と共同制作によって個性を確立した。White Blood Cells, Elephant and Seven Nation Army から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1997",
            "title": "Kanye West（生 1977）",
            "description": "[Kanye West]<br>Kanye Westは The College Dropout, 808s & Heartbreak and My Beautiful Dark Twisted Fantasy によって具体的に位置づけられる。そこに見られるスタジオ制作・ビート構築・音色設計が個人様式とヒップホップの広い変化を結ぶ。"
        },
        {
            "start": "2002",
            "title": "Nicki Minaj（生 1982）",
            "description": "[Nicki Minaj]<br>Nicki Minajを理解する直接の入口は Pink Friday, Monster and a highly theatrical, multi-voice rap delivery である。そこから声質・フレージング・録音表現の扱いと、それがヒップホップの実践語法へ入った過程を確認できる。"
        },
        {
            "start": "2006",
            "title": "Lady Gaga（生 1986）",
            "description": "[Lady Gaga]<br>The Fame, Bad Romance, Born This Way and A Star Is Born はLady Gagaの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがポピュラー音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "2007",
            "title": "Kendrick Lamar（生 1987）",
            "description": "[Kendrick Lamar]<br>Kendrick Lamarの代表的成果には good kid, m.A.A.d city, To Pimp a Butterfly, DAMN. and Mr. Morale & the Big Steppers がある。これらはヒップホップにおける声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "2008",
            "title": "Adele（生 1988）",
            "description": "[Adele]<br>Adeleは 19, 21, 25 and 30 によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        },
        {
            "start": "2009",
            "title": "Taylor Swift（生 1989）",
            "description": "[Taylor Swift]<br>Taylor Swiftの代表的成果には Fearless, Red, 1989, folklore and the Eras Tour catalogue project がある。これらはポピュラー音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "2021",
            "title": "Billie Eilish（生 2001）",
            "description": "[Billie Eilish]<br>Billie Eilishは When We All Fall Asleep, Where Do We Go?, Happier Than Ever and intimate close-miked production によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とポピュラー音楽の広い変化を結ぶ。"
        }
    ]
};

// 世界各地の音楽家
var tl_global_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1273",
            "title": "Amir Khusrau（1253–1325）",
            "description": "[Amir Khusrau]<br>Amir Khusrauの代表的成果には Persian-Hindavi poetry, devotional song traditions and a lasting association with qawwali がある。これらは南アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1520",
            "title": "Tansen（1500–1586）",
            "description": "[Tansen]<br>Tansenを理解する直接の入口は dhrupad repertory at Akbar’s court and ragas traditionally linked to his name である。そこから声質・フレージング・録音表現の扱いと、それが南アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1556",
            "title": "Zhu Zaiyu（1536–1611）",
            "description": "[Zhu Zaiyu]<br>Zhu Zaiyuを理解する直接の入口は the 1584 calculation of twelve-tone equal temperament by precise mathematical ratios である。そこから理論・記譜・音楽思想の扱いと、それが東アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1782",
            "title": "Syama Sastri（1762–1827）",
            "description": "[Syama Sastri]<br>Syama Sastriを理解する直接の入口は the kritis and svarajatis that form one part of the Carnatic Trinity repertory である。そこから作曲・形式・音響の組織化の扱いと、それが南アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1787",
            "title": "Tyagaraja（1767–1847）",
            "description": "[Tyagaraja]<br>Tyagarajaの代表的成果には hundreds of Telugu kritis, including the Pancharatna Kritis がある。これらは南アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1795",
            "title": "Muthuswami Dikshitar（1775–1835）",
            "description": "[Muthuswami Dikshitar]<br>Muthuswami Dikshitarは Sanskrit kritis, the Kamalamba Navavarna cycle and broad raga coverage によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と南アジア音楽の広い変化を結ぶ。"
        },
        {
            "start": "1909",
            "title": "Hua Yanjun (Abing)（1889–1935）",
            "description": "[Hua Yanjun (Abing)]<br>Hua Yanjun (Abing)を理解する直接の入口は Erquan Yingyue and a small but foundational recorded erhu and pipa repertory である。そこから演奏技法・音色・即興語法の扱いと、それが東アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1910",
            "title": "Carlos Gardel（1890–1935）",
            "description": "[Carlos Gardel]<br>Carlos Gardelは Mi noche triste, El día que me quieras and the international image of tango song によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1915",
            "title": "Liu Tianhua（1895–1932）",
            "description": "[Liu Tianhua]<br>Liu Tianhuaの代表的成果には Moon Night, Brightness Walk and the modernization of erhu technique and notation がある。これらは東アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1918",
            "title": "Umm Kulthum（1898–1975）",
            "description": "[Umm Kulthum]<br>Umm Kulthumを理解する直接の入口は Enta Omri, Al Atlal and long-form Arabic concert song である。そこから声質・フレージング・録音表現の扱いと、それが中東・北アフリカ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1925",
            "title": "Xian Xinghai（1905–1945）",
            "description": "[Xian Xinghai]<br>Xian Xinghaiの代表的成果には Yellow River Cantata and mass songs composed during wartime China がある。これらは東アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1932",
            "title": "Nie Er（1912–1935）",
            "description": "[Nie Er]<br>Nie Erは March of the Volunteers and early Chinese film songs によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式と東アジア音楽の広い変化を結ぶ。"
        },
        {
            "start": "1936",
            "title": "Bismillah Khan（1916–2016）",
            "description": "[Bismillah Khan]<br>Bismillah Khanは the elevation of the shehnai from ceremonial use to the Hindustani concert stage によって具体的に位置づけられる。そこに見られる演奏技法・音色・即興語法が個人様式と南アジア音楽の広い変化を結ぶ。"
        },
        {
            "start": "1936",
            "title": "M. S. Subbulakshmi（1916–2004）",
            "description": "[M. S. Subbulakshmi]<br>devotional recordings, Carnatic concerts and a landmark 1966 UN performance はM. S. Subbulakshmiの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが南アジア音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1936",
            "title": "Ravi Shankar（1916–2013）",
            "description": "[Ravi Shankar]<br>sitar concert repertory, collaborations with Yehudi Menuhin and influence on 1960s rock audiences はRavi Shankarの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが南アジア音楽の演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1938",
            "title": "Zhou Xuan（1918–1957）",
            "description": "[Zhou Xuan]<br>The Wandering Songstress and Shanghai film-song recordings of the 1930s–40s はZhou Xuanの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが東アジア音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1939",
            "title": "Chavela Vargas（1919–2012）",
            "description": "[Chavela Vargas]<br>Chavela Vargasの代表的成果には La Llorona and stripped-down ranchera interpretation がある。これらはラテンアメリカ音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1940",
            "title": "Ali Akbar Khan（1920–2012）",
            "description": "[Ali Akbar Khan]<br>Ali Akbar Khanを理解する直接の入口は sarod recordings and the Ali Akbar College of Music である。そこから演奏技法・音色・即興語法の扱いと、それが南アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1941",
            "title": "Astor Piazzolla（1921–1992）",
            "description": "[Astor Piazzolla]<br>Astor Piazzollaは Adiós Nonino, Libertango and tango nuevo によって具体的に位置づけられる。そこに見られる作曲・形式・音響の組織化が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1943",
            "title": "Tito Puente（1923–2000）",
            "description": "[Tito Puente]<br>Tito Puenteを理解する直接の入口は Oye Como Va, Dance Mania and the timbales-led mambo/salsa orchestra である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがラテンアメリカ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1945",
            "title": "Celia Cruz（1925–2003）",
            "description": "[Celia Cruz]<br>Quimbara, La Vida Es un Carnaval and the Fania-era salsa sound はCelia Cruzの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがラテンアメリカ音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1947",
            "title": "Antônio Carlos Jobim（1927–1994）",
            "description": "[Antônio Carlos Jobim]<br>The Girl from Ipanema, Desafinado and Wave はAntônio Carlos Jobimの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがラテンアメリカ音楽の作曲・形式・音響の組織化をどう変えたかにある。"
        },
        {
            "start": "1951",
            "title": "João Gilberto（1931–2019）",
            "description": "[João Gilberto]<br>João Gilbertoは Chega de Saudade and the intimate guitar-vocal pulse of bossa nova によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1952",
            "title": "Miriam Makeba（1932–2008）",
            "description": "[Miriam Makeba]<br>Miriam Makebaの代表的成果には Pata Pata, The Click Song and international anti-apartheid advocacy がある。これらはアフリカの大衆・伝統音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1954",
            "title": "Fairuz（生 1934）",
            "description": "[Fairuz]<br>Fairuzを理解する直接の入口は Li Beirut and a vast Rahbani repertory central to modern Lebanese song である。そこから声質・フレージング・録音表現の扱いと、それが中東・北アフリカ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1955",
            "title": "Mercedes Sosa（1935–2009）",
            "description": "[Mercedes Sosa]<br>Gracias a la Vida, Alfonsina y el Mar and the nueva canción movement はMercedes Sosaの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがラテンアメリカ音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1956",
            "title": "Lee “Scratch” Perry（1936–2021）",
            "description": "[Lee “Scratch” Perry]<br>Lee “Scratch” Perryを理解する直接の入口は Black Ark productions, Super Ape and experimental dub studio practice である。そこからスタジオ制作・ビート構築・音色設計の扱いと、それがレゲエ／ジャマイカ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1957",
            "title": "Hibari Misora（1937–1989）",
            "description": "[Hibari Misora]<br>Kawa no Nagare no Yō ni, Kanashii Sake and postwar enka/kayōkyoku stardom はHibari Misoraの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが東アジア音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1958",
            "title": "Fela Kuti（1938–1997）",
            "description": "[Fela Kuti]<br>Fela Kutiを理解する直接の入口は Zombie, Expensive Shit and long-form Afrobeat built from horns, guitars and political lyrics である。そこからアンサンブル編成・編曲・バンドサウンドの扱いと、それがアフリカの大衆・伝統音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1959",
            "title": "Ali Farka Touré（1939–2006）",
            "description": "[Ali Farka Touré]<br>Savane, Talking Timbuktu and a guitar style linking Malian song to blues listeners はAli Farka Touréの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがアフリカの大衆・伝統音楽の演奏技法・音色・即興語法をどう変えたかにある。"
        },
        {
            "start": "1961",
            "title": "Cesária Évora（1941–2011）",
            "description": "[Cesária Évora]<br>Cesária Évoraを理解する直接の入口は Sodade and the international popularization of Cape Verdean morna である。そこから声質・フレージング・録音表現の扱いと、それがアフリカの大衆・伝統音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1962",
            "title": "Caetano Veloso（生 1942）",
            "description": "[Caetano Veloso]<br>Caetano Velosoは Tropicália, Transa and a career joining Brazilian song, avant-garde ideas and politics によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1962",
            "title": "Gilberto Gil（生 1942）",
            "description": "[Gilberto Gil]<br>Gilberto Gilの代表的成果には Expresso 2222, Refazenda and a central role in Tropicália and MPB がある。これらはラテンアメリカ音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1962",
            "title": "Milton Nascimento（生 1942）",
            "description": "[Milton Nascimento]<br>Milton Nascimentoの代表的成果には Clube da Esquina and Travessia がある。これらはラテンアメリカ音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1964",
            "title": "Jimmy Cliff（生 1944）",
            "description": "[Jimmy Cliff]<br>Many Rivers to Cross, The Harder They Come and You Can Get It If You Really Want はJimmy Cliffの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがレゲエ／ジャマイカ音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1964",
            "title": "Peter Tosh（1944–1987）",
            "description": "[Peter Tosh]<br>Legalize It, Equal Rights and work with the Wailers はPeter Toshの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがレゲエ／ジャマイカ音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1965",
            "title": "Bob Marley（1945–1981）",
            "description": "[Bob Marley]<br>Bob Marleyを理解する直接の入口は Catch a Fire, Exodus, No Woman, No Cry and Redemption Song である。そこから作詞作曲と個性的な演奏表現の扱いと、それがレゲエ／ジャマイカ音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1968",
            "title": "Nusrat Fateh Ali Khan（1948–1997）",
            "description": "[Nusrat Fateh Ali Khan]<br>Nusrat Fateh Ali Khanを理解する直接の入口は Allah Hoo, Mustt Mustt and extended qawwali improvisation である。そこから声質・フレージング・録音表現の扱いと、それが南アジア音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1969",
            "title": "Salif Keita（生 1949）",
            "description": "[Salif Keita]<br>Salif Keitaを理解する直接の入口は Soro, Moffou and a high-register voice central to modern Malian pop である。そこから声質・フレージング・録音表現の扱いと、それがアフリカの大衆・伝統音楽の実践語法へ入った過程を確認できる。"
        },
        {
            "start": "1970",
            "title": "Juan Gabriel（1950–2016）",
            "description": "[Juan Gabriel]<br>Juan Gabrielの代表的成果には Querida, Amor Eterno and a vast Mexican popular-song catalogue がある。これらはラテンアメリカ音楽における作詞作曲と個性的な演奏表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1971",
            "title": "Zakir Hussain（1951–2024）",
            "description": "[Zakir Hussain]<br>Zakir Hussainの代表的成果には tabla solo performance, Shakti and cross-cultural percussion collaborations がある。これらは南アジア音楽における演奏技法・音色・即興語法を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1972",
            "title": "Ryuichi Sakamoto（1952–2023）",
            "description": "[Ryuichi Sakamoto]<br>Ryuichi Sakamotoの代表的成果には Yellow Magic Orchestra, Thousand Knives, Merry Christmas Mr. Lawrence and The Last Emperor がある。これらは東アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1973",
            "title": "Kitarō（生 1953）",
            "description": "[Kitarō]<br>Kitarōの代表的成果には Silk Road, Kojiki and synthesizer-based new-age soundscapes がある。これらは東アジア音楽における作曲・形式・音響の組織化を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1973",
            "title": "Teresa Teng（1953–1995）",
            "description": "[Teresa Teng]<br>The Moon Represents My Heart, Sweet as Honey and multilingual East Asian pop recordings はTeresa Tengの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらが東アジア音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "1978",
            "title": "Yellow Magic Orchestra 結成",
            "description": "[Yellow Magic Orchestra formed]<br>Yellow Magic Orchestraは初期メンバーの相互作用と共同制作によって個性を確立した。Yellow Magic Orchestra, Solid State Survivor and Technodelic から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1979",
            "title": "Youssou N’Dour（生 1959）",
            "description": "[Youssou N’Dour]<br>Youssou N’Dourの代表的成果には Immigrés, 7 Seconds and the mbalax style がある。これらはアフリカの大衆・伝統音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1980",
            "title": "Angélique Kidjo（生 1960）",
            "description": "[Angélique Kidjo]<br>Angélique Kidjoの代表的成果には Agolo, Wombo Lombo and multilingual reinterpretations of African and global repertoire がある。これらはアフリカの大衆・伝統音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1989",
            "title": "Faye Wong（生 1969）",
            "description": "[Faye Wong]<br>Faye Wongの代表的成果には Random Thoughts, Sky and a vocal style linking Cantopop/Mandopop with alternative pop がある。これらは東アジア音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1991",
            "title": "Selena（1971–1995）",
            "description": "[Selena]<br>Selenaの代表的成果には Como la Flor, Amor Prohibido and Dreaming of You がある。これらはラテンアメリカ音楽における声質・フレージング・録音表現を、直接聴取・演奏・研究できる資料として残している。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys 結成",
            "description": "[Seo Taiji and Boys formed]<br>Seo Taiji and Boysは初期メンバーの相互作用と共同制作によって個性を確立した。Nan Arayo and the fusion of Korean pop with rap, rock and dance production から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "1997",
            "title": "Shakira（生 1977）",
            "description": "[Shakira]<br>Shakiraは Pies Descalzos, Laundry Service, Hips Don’t Lie and bilingual Latin-pop crossover によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "1999",
            "title": "Jay Chou（生 1979）",
            "description": "[Jay Chou]<br>Jay Chouは Jay, Fantasy and a blend of R&B, rap and Chinese-themed songwriting によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式と東アジア音楽の広い変化を結ぶ。"
        },
        {
            "start": "2003",
            "title": "Hikaru Utada（生 1983）",
            "description": "[Hikaru Utada]<br>Hikaru Utadaは First Love, Distance and Deep River によって具体的に位置づけられる。そこに見られる作詞作曲と個性的な演奏表現が個人様式と東アジア音楽の広い変化を結ぶ。"
        },
        {
            "start": "2011",
            "title": "Burna Boy（生 1991）",
            "description": "[Burna Boy]<br>African Giant, Twice as Tall and Love, Damini はBurna Boyの歴史的位置を示す具体的証拠であり、焦点は知名度ではなく、これらがアフリカの大衆・伝統音楽の声質・フレージング・録音表現をどう変えたかにある。"
        },
        {
            "start": "2013",
            "title": "BTS 結成",
            "description": "[BTS formed]<br>BTSは初期メンバーの相互作用と共同制作によって個性を確立した。The Most Beautiful Moment in Life series, Wings, Love Yourself and Map of the Soul から編曲、録音、ライブイメージの発展を確認できる。"
        },
        {
            "start": "2014",
            "title": "Bad Bunny（生 1994）",
            "description": "[Bad Bunny]<br>Bad Bunnyは X 100pre, YHLQMDLG and Un Verano Sin Ti によって具体的に位置づけられる。そこに見られる声質・フレージング・録音表現が個人様式とラテンアメリカ音楽の広い変化を結ぶ。"
        },
        {
            "start": "2016",
            "title": "BLACKPINK 結成",
            "description": "[BLACKPINK formed]<br>BLACKPINKは初期メンバーの相互作用と共同制作によって個性を確立した。Square Up, The Album, Born Pink and large-scale global touring から編曲、録音、ライブイメージの発展を確認できる。"
        }
    ]
};

// 主要作品、オペラ、ミュージカル、初演
var tl_works = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1151",
            "title": "Hildegard’s Ordo Virtutum",
            "description": "《オルド・ヴィルトゥートゥム》は現存最古級の大規模な音楽付き道徳劇で、女性の徳たちは歌う一方、悪魔だけが語り、音響によって聖なる秩序と誘惑を分ける。"
        },
        {
            "start": "1360",
            "title": "Machaut’s Messe de Nostre Dame",
            "description": "単一作曲家が統一的に構想した現存最古級の完全な多声ミサ曲で、通常文各章を一つの作品として聴けるよう組織した。"
        },
        {
            "start": "1597",
            "title": "Peri and Corsi’s Dafne",
            "description": "《ダフネ》は最初期のオペラ実験の一つとされ、楽譜の大半は失われたが、フィレンツェの知識人が独唱的朗誦で古代ギリシャ劇を再構成しようとした節目である。"
        },
        {
            "start": "1607",
            "title": "Monteverdi’s L’Orfeo 初演",
            "description": "[Monteverdi’s L’Orfeo premieres]<br>《オルフェオ》は明確な器楽色彩、リトルネッロ、表情豊かなレチタティーヴォにより、初期オペラを宮廷実験から今日も全曲上演できる劇作品へ進めた。"
        },
        {
            "start": "1642",
            "title": "Monteverdi’s L’incoronazione di Poppea",
            "description": "神話ではなく実在の歴史人物を中心に、欲望・権力・道徳的曖昧さを公共オペラへ持ち込み、終幕の二重唱は初期オペラの抒情表現の典型となった。"
        },
        {
            "start": "1689",
            "title": "Purcell’s Dido and Aeneas",
            "description": "この凝縮された英語オペラは舞曲、合唱、レチタティーヴォを結び、ディドの哀歌では反復低音が深まる悲劇性を支える。"
        },
        {
            "start": "1711",
            "title": "Handel’s Rinaldo premieres in London",
            "description": "《リナルド》はヘンデルがロンドン向けに書いた最初のイタリア語オペラで、舞台機構、華麗なアリア、スター歌手によって同地の商業娯楽として定着させた。"
        },
        {
            "start": "1721",
            "title": "Bach’s Brandenburg Concertos assembled",
            "description": "六曲は異なる楽器編成のために書かれ、ヴァイオリンを欠く第6番から鍵盤が主導する第5番まで、協奏曲の多様な可能性を集中的に示す。"
        },
        {
            "start": "1725",
            "title": "Vivaldi’s The Four Seasons published",
            "description": "四つのヴァイオリン協奏曲にはソネットが添えられ、鳥、嵐、暑さ、氷を識別可能な音へ変え、初期標題音楽の代表例となった。"
        },
        {
            "start": "1741",
            "title": "Bach’s Goldberg Variations published",
            "description": "アリアと30変奏は共通の低音和声骨格で結ばれ、カノンの音程が順次拡大し、厳密さと舞曲・技巧性を両立する鍵盤変奏を示す。"
        },
        {
            "start": "1742",
            "title": "Handel’s Messiah 初演",
            "description": "[Handel’s Messiah premieres]<br>《メサイア》は英語聖書を独唱・合唱・管弦楽で救済物語へ構成し、ダブリン初演後、英語オラトリオと慈善演奏会の中心曲目となった。"
        },
        {
            "start": "1749",
            "title": "Handel’s Music for the Royal Fireworks",
            "description": "野外祝典のために書かれ、原案は管楽器と打楽器を重視し、花火と大規模公共空間に必要な投射力を備えた。"
        },
        {
            "start": "1762",
            "title": "Gluck’s Orfeo ed Euridice 初演",
            "description": "[Gluck’s Orfeo ed Euridice premieres]<br>グルックは技巧誇示と複雑な脇筋を抑え、音楽・舞踊・合唱・物語を明確な感情表現へ集中させ、オペラ改革の模範とした。"
        },
        {
            "start": "1786",
            "title": "Mozart’s The Marriage of Figaro 初演",
            "description": "[Mozart’s The Marriage of Figaro premieres]<br>長大なアンサンブル終曲で複数人物が異なる計画と感情を同時進行させ、階級対立、誤解、心理を連続的な音楽劇へ編み込む。"
        },
        {
            "start": "1787",
            "title": "Mozart’s Don Giovanni 初演",
            "description": "[Mozart’s Don Giovanni premieres]<br>喜劇、悲劇、超自然的恐怖を並置し、序曲冒頭の和声が石像客の場面で回帰することで、場面を越えた構造的記憶を与える。"
        },
        {
            "start": "1791",
            "title": "Mozart’s The Magic Flute 初演",
            "description": "[Mozart’s The Magic Flute premieres]<br>ドイツ語台詞、民謡風歌曲、技巧的アリア、フリーメーソン象徴を併存させ、宮廷的オペラ語法を大衆的ジングシュピールへ移した。"
        },
        {
            "start": "1805",
            "title": "Beethoven’s Eroica Symphony public premiere",
            "description": "第3交響曲は規模、展開部、葬送行進曲の劇的重量を拡大し、交響曲を宮廷娯楽から英雄・葛藤・歴史を論じる公共的形式へ押し進めた。"
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven premieres the Fifth and Sixth Symphonies",
            "description": "1808年の同一演奏会で、第5番の動機集中と第6番の田園的標題性が初演され、ベートーヴェンが対照的な二方法で交響曲を再構成したことを示す。"
        },
        {
            "start": "1816",
            "title": "Rossini’s The Barber of Seville 初演",
            "description": "[Rossini’s The Barber of Seville premieres]<br>急速な反復、声部が積み重なる合唱、ロッシーニ・クレッシェンドが喜劇的混乱を精密なリズム機械へ変え、イタリア喜歌劇の標準となった。"
        },
        {
            "start": "1821",
            "title": "Weber’s Der Freischütz 初演",
            "description": "[Weber’s Der Freischütz premieres]<br>ドイツ語台詞、民間伝承、森の音響、狼谷の超自然場面を結び、ドイツ・ロマン派オペラの民族的・幻想的空間を確立した。"
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth Symphony 初演",
            "description": "[Beethoven’s Ninth Symphony premieres]<br>終楽章で大規模交響曲に独唱と合唱を導入し、《歓喜の歌》によって器楽形式を人類共同体についての公共的表現へ転じた。"
        },
        {
            "start": "1830",
            "title": "Berlioz’s Symphonie fantastique 初演",
            "description": "[Berlioz’s Symphonie fantastique premieres]<br>固定楽想が5楽章を通じて変形し、詳細な自伝的標題と拡大した管弦楽色彩により、ロマン派標題交響曲のモデルを築いた。"
        },
        {
            "start": "1831",
            "title": "Bellini’s Norma 初演",
            "description": "[Bellini’s Norma premieres]<br>長い旋律線と精密な呼吸、とりわけ「清らかな女神よ」がベルカント技巧を人物の宗教的権威、愛、犠牲へ結びつける。"
        },
        {
            "start": "1842",
            "title": "Verdi’s Nabucco 初演",
            "description": "[Verdi’s Nabucco premieres]<br>大規模な合唱場面と「行け、わが想いよ、黄金の翼に乗って」がヴェルディを一躍有名にし、集団的亡命と政治的アイデンティティをイタリア・オペラの公共文化へ持ち込んだ。"
        },
        {
            "start": "1845",
            "title": "Mendelssohn’s Violin Concerto 初演",
            "description": "[Mendelssohn’s Violin Concerto premieres]<br>独奏ヴァイオリンがほぼ直ちに入り、カデンツァは楽譜化され再現部へ接続し、三楽章を切れ目なく続けることで協奏曲の連続性を再定義した。"
        },
        {
            "start": "1853",
            "title": "Verdi’s La traviata 初演",
            "description": "[Verdi’s La traviata premieres]<br>同時代の都市社交界と重病の女性を中心に据え、ワルツ、親密な独唱、凝縮した場面で社会的排除を描く。"
        },
        {
            "start": "1865",
            "title": "Wagner’s Tristan und Isolde 初演",
            "description": "[Wagner’s Tristan und Isolde premieres]<br>「トリスタン和音」、先延ばしされる終止、連続的管弦楽書法が欲望を長く未解決の和声緊張へ変え、後のモダニズムへ深く影響した。"
        },
        {
            "start": "1871",
            "title": "Verdi’s Aida 初演",
            "description": "[Verdi’s Aida premieres]<br>巨大な儀礼場面と極度に私的な三角関係を往復し、グランド・オペラの規模が精緻な人物心理にも奉仕できることを示す。"
        },
        {
            "start": "1876",
            "title": "Complete Ring cycle opens at Bayreuth",
            "description": "四部作を連続上演し、専用のバイロイト祝祭劇場の覆われたオーケストラ・ピットと視線設計によって、総合芸術作品を建築・舞台・音楽の統一体験にした。"
        },
        {
            "start": "1877",
            "title": "Tchaikovsky’s Swan Lake 初演",
            "description": "[Tchaikovsky’s Swan Lake premieres]<br>チャイコフスキーは交響的主題展開と人物動機をバレエ音楽へ導入し、初演の不評にもかかわらず後の改訂上演で古典レパートリーの中心となった。"
        },
        {
            "start": "1882",
            "title": "Wagner’s Parsifal 初演",
            "description": "[Wagner’s Parsifal premieres]<br>バイロイトのために設計され、緩慢な儀礼、聖杯動機、特殊な場面転換で「舞台神聖祝典劇」という宗教的体験を作る。"
        },
        {
            "start": "1888",
            "title": "Rimsky-Korsakov’s Scheherazade 初演",
            "description": "[Rimsky-Korsakov’s Scheherazade premieres]<br>独奏ヴァイオリンが語り手シェヘラザードを、金管と低音動機がスルタンを表し、変化する管弦楽法が言葉ではなく音色で物語を作る。"
        },
        {
            "start": "1890",
            "title": "Mascagni’s Cavalleria rusticana 初演",
            "description": "[Mascagni’s Cavalleria rusticana premieres]<br>一幕形式、農村の舞台、突然の暴力が普通人の嫉妬と社会圧力をオペラへ持ち込み、イタリア・ヴェリズモの代表作となった。"
        },
        {
            "start": "1892",
            "title": "Tchaikovsky’s The Nutcracker 初演",
            "description": "[Tchaikovsky’s The Nutcracker premieres]<br>金平糖の精の踊りがチェレスタの音色を広く知らしめ、各国舞曲と子どもの視点が作品を後の季節公演の定番にした。"
        },
        {
            "start": "1893",
            "title": "Dvořák’s New World Symphony 初演",
            "description": "[Dvořák’s New World Symphony premieres]<br>霊歌や先住民音楽のリズム・音階的印象を既成旋律の直接引用ではなく欧州的交響展開と結び、越境的ナショナリズムの一例となった。"
        },
        {
            "start": "1896",
            "title": "Puccini’s La bohème 初演",
            "description": "[Puccini’s La bohème premieres]<br>短い動機、素早い場面転換、会話的リズムが貧しい芸術家の日常と強烈な抒情高潮を結び、近代生活を描くオペラの典型を作った。"
        },
        {
            "start": "1900",
            "title": "Puccini’s Tosca 初演",
            "description": "[Puccini’s Tosca premieres]<br>ほぼリアルタイムの政治スリラー構造、舞台内外の鐘、「トスカ和音」がローマの具体的場所、暴力、人物動機を密接に結ぶ。"
        },
        {
            "start": "1902",
            "title": "Debussy’s Pelléas et Mélisande 初演",
            "description": "[Debussy’s Pelléas et Mélisande premieres]<br>フランス語の抑揚を生かす朗誦、霞んだ管弦楽、伝統的アリアを避けた連続場面が、象徴主義劇にワーグナーとは異なる音楽時間を与えた。"
        },
        {
            "start": "1905",
            "title": "Richard Strauss’s Salome 初演",
            "description": "[Richard Strauss’s Salome premieres]<br>極端な半音和声、大管弦楽、「七つのヴェールの踊り」が聖書題材を心理的欲望と感覚的衝撃へ変え、近代オペラ初期のスキャンダラスな成功となった。"
        },
        {
            "start": "1910",
            "title": "Stravinsky’s The Firebird 初演",
            "description": "[Stravinsky’s The Firebird premieres]<br>ロシア民話、リムスキー由来の管弦楽法、反復リズムがストラヴィンスキーをパリで有名にし、ディアギレフのバレエ・リュスのモダニズム像を確立した。"
        },
        {
            "start": "1911",
            "title": "Stravinsky’s Petrushka 初演",
            "description": "[Stravinsky’s Petrushka premieres]<br>二調性の「ペトルーシュカ和音」、見世物小屋の場面、打楽器的・ピアノ的管弦楽法が人形の機械性と悲劇性を同時に音へ刻む。"
        },
        {
            "start": "1912",
            "title": "Schoenberg’s Pierrot lunaire 初演",
            "description": "[Schoenberg’s Pierrot lunaire premieres]<br>21の小品がシュプレヒシュティンメと五人編成の変化する音色を用い、無調性書法を高度に劇的な室内楽へ変えた。"
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premieres in Paris",
            "description": "不規則なアクセント、反復和音、重層拍子、大打楽器群が舞踊音楽に前例のない身体的衝撃を与え、初演騒動はモダニズムの中心的神話となった。"
        },
        {
            "start": "1918",
            "title": "Holst’s The Planets receives complete public performance",
            "description": "七楽章が火星から海王星まで占星術的性格を描き、不規則拍子、遠ざかる女声合唱、大管弦楽が後の映画・ゲームの宇宙音響へ強く影響した。"
        },
        {
            "start": "1924-02-12",
            "title": "Gershwin’s Rhapsody in Blue 初演",
            "description": "[Gershwin’s Rhapsody in Blue premieres]<br>協奏的ピアノ書法、ブルー・ノート、ジャズバンドの色彩を一作に結び、ジャズ語法を完全に古典化せず米国の大規模公開演奏会へ持ち込んだ。"
        },
        {
            "start": "1925",
            "title": "Berg’s Wozzeck 初演",
            "description": "[Berg’s Wozzeck premieres]<br>無調性語法をパッサカリア、フーガ、組曲など伝統形式へ組織し、断片的場面で貧困、軍事権力、精神崩壊を描く。"
        },
        {
            "start": "1927",
            "title": "Show Boat opens on Broadway",
            "description": "歌曲、人物発展、深刻な社会問題を筋へ緊密に統合し、数十年に及ぶ物語が初期ミュージカル・コメディの軽い構造を越えた。"
        },
        {
            "start": "1928",
            "title": "Ravel’s Boléro 初演",
            "description": "[Ravel’s Boléro premieres]<br>旋律とリズムをほぼ変えず、管弦楽の受け渡しと一つの長いクレッシェンドだけで進み、音色と蓄積エネルギーの公開実験となった。"
        },
        {
            "start": "1935",
            "title": "Porgy and Bess 初演",
            "description": "[Porgy and Bess premieres]<br>オペラ、ジャズ、霊歌、ブロードウェイ歌曲語法で黒人共同体を描き、「サマータイム」などは舞台を離れて世界的スタンダードとなった。"
        },
        {
            "start": "1937",
            "title": "Orff’s Carmina Burana 初演",
            "description": "[Orff’s Carmina Burana premieres]<br>強烈なオスティナート、塊状和声、直接的なラテン語／中高ドイツ語テクストが複雑な対位法に優先し、識別しやすい儀礼的衝撃を作る。"
        },
        {
            "start": "1943",
            "title": "Oklahoma! opens on Broadway",
            "description": "歌曲、舞踊、筋を人物の選択と共同体の葛藤へ体系的に統合し、夢のバレエが舞踊に心理叙事の役割を与えた。"
        },
        {
            "start": "1944",
            "title": "Copland’s Appalachian Spring 初演",
            "description": "[Copland’s Appalachian Spring premieres]<br>小編成とマーサ・グレアムのために書かれ、開放音程と《Simple Gifts》変奏が米国農村理想の公共的音像を作った。"
        },
        {
            "start": "1945",
            "title": "Britten’s Peter Grimes 初演",
            "description": "[Britten’s Peter Grimes premieres]<br>海の間奏曲、共同体としての合唱、テノール主人公の矛盾心理により、戦後の英語オペラを国際的中心レパートリーへ戻した。"
        },
        {
            "start": "1952-08-29",
            "title": "Cage’s 4′33″ 初演",
            "description": "[Cage’s 4′33″ premieres]<br>演奏者が規定音を出さず、咳、風、環境音を聴取対象とし、作品・沈黙・演奏の定義を問い直した。"
        },
        {
            "start": "1956",
            "title": "Stockhausen’s Gesang der Jünglinge completed",
            "description": "少年の声を分割・濾過し電子音と融合し、五チャンネル空間移動によって音色、言語、位置を同時に作曲パラメータ化した。"
        },
        {
            "start": "1957",
            "title": "West Side Story opens on Broadway",
            "description": "ジャズ、ラテン・リズム、複雑な合唱、ジェローム・ロビンズの振付がギャング抗争と恋愛悲劇を共同で担い、舞踊は単なる挿入ではなくなった。"
        },
        {
            "start": "1958",
            "title": "Varèse’s Poème électronique at the Brussels World’s Fair",
            "description": "フィリップス館内で電子音が数百のスピーカーを移動し、ル・コルビュジエの映像・建築と結びついた初期没入型マルチメディア作品である。"
        },
        {
            "start": "1964",
            "title": "Terry Riley’s In C 初演",
            "description": "[Terry Riley’s In C premieres]<br>53の短いセルを各奏者が任意回数反復し共通パルス上で進むため、毎回異なりながら識別可能な開放形式となる。"
        },
        {
            "start": "1976",
            "title": "Glass’s Einstein on the Beach 初演",
            "description": "[Glass’s Einstein on the Beach premieres]<br>約5時間、伝統的筋を持たず、数字唱詞と反復音型を用い、観客の出入りを許すことでオペラの時間経験と叙事期待を根本から変えた。"
        },
        {
            "start": "1977",
            "title": "Star Wars establishes a new blockbuster orchestral film-score model",
            "description": "ジョン・ウィリアムズは大交響楽団、明確な主題、人物ライトモティーフで黄金期ハリウッド音楽を復興し、記憶に残る旋律を大作映画叙事の中心へ戻した。"
        },
        {
            "start": "1987",
            "title": "John Adams’s Nixon in China 初演",
            "description": "[John Adams’s Nixon in China premieres]<br>1972年の外交訪問を「現代史オペラ」へ変え、ミニマルな脈動、ジャズ的管弦楽、メディア言語で政治人物の公的像と私的省察を描く。"
        },
        {
            "start": "2015",
            "title": "Hamilton opens on Broadway",
            "description": "ヒップホップ、R&B、伝統的ミュージカル書法で建国史を語り、多民族キャスティングが「誰が国家史を代表できるか」を作品自体の一部にした。"
        }
    ]
};

// 歴史的録音、シングル、アルバム
var tl_recordings = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1902",
            "title": "Enrico Caruso — Vesti la giubba",
            "description": "「Vesti la giubba」が年表の節点となるのは、Enrico Carusoの版が演奏解釈・録音空間・標準レパートリーの普及の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1917",
            "title": "Original Dixieland Jass Band — Livery Stable Blues / Dixie Jass Band One-Step",
            "description": "Original Dixieland Jass Bandの「Livery Stable Blues / Dixie Jass Band One-Step」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1920",
            "title": "Mamie Smith — Crazy Blues",
            "description": "「Crazy Blues」を理解するには、Mamie Smithがブルー・ノート、応答構造、個人的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1923",
            "title": "Bessie Smith — Downhearted Blues",
            "description": "「Downhearted Blues」はBessie Smithによるブルー・ノート、応答構造、個人的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1925",
            "title": "Louis Armstrong and His Hot Five — Hot Five recordings begin",
            "description": "「Hot Five recordings begin」が年表の節点となるのは、Louis Armstrong and His Hot Fiveの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1927",
            "title": "Jimmie Rodgers — Blue Yodel",
            "description": "「Blue Yodel」を理解するには、Jimmie Rodgersが物語歌・弦楽器編成・地域的な歌唱をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1928",
            "title": "Mississippi John Hurt — Avalon Blues recordings",
            "description": "「Avalon Blues recordings」が年表の節点となるのは、Mississippi John Hurtの版がブルー・ノート、応答構造、個人的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1936",
            "title": "Robert Johnson — San Antonio and Dallas sessions",
            "description": "「San Antonio and Dallas sessions」を理解するには、Robert Johnsonがブルー・ノート、応答構造、個人的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1939",
            "title": "Billie Holiday — Strange Fruit",
            "description": "Billie Holidayの「Strange Fruit」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1940",
            "title": "Woody Guthrie — Dust Bowl Ballads",
            "description": "Woody Guthrieの「Dust Bowl Ballads」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1942",
            "title": "Bing Crosby — White Christmas",
            "description": "Bing Crosbyの「White Christmas」はメロディック・フック、声の制作、大衆流通を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1943",
            "title": "Duke Ellington — Black, Brown and Beige",
            "description": "Duke Ellingtonの「Black, Brown and Beige」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1948",
            "title": "Muddy Waters — I Can’t Be Satisfied",
            "description": "「I Can’t Be Satisfied」はMuddy Watersによるブルー・ノート、応答構造、個人的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1949",
            "title": "Hank Williams — Lovesick Blues",
            "description": "「Lovesick Blues」が年表の節点となるのは、Hank Williamsの版が物語歌・弦楽器編成・地域的な歌唱の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1952",
            "title": "Various Artists — Anthology of American Folk Music",
            "description": "「Anthology of American Folk Music」を理解するには、Various Artistsが選曲・演奏・制作法をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1953",
            "title": "Maria Callas / Victor de Sabata — Tosca",
            "description": "「Tosca」が年表の節点となるのは、Maria Callas / Victor de Sabataの版が演奏解釈・録音空間・標準レパートリーの普及の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1954",
            "title": "Bill Haley & His Comets — Rock Around the Clock",
            "description": "「Rock Around the Clock」はBill Haley & His Cometsによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1955",
            "title": "Frank Sinatra — In the Wee Small Hours",
            "description": "「In the Wee Small Hours」が年表の節点となるのは、Frank Sinatraの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1955",
            "title": "Glenn Gould — Bach: Goldberg Variations",
            "description": "Glenn Gouldの「Bach: Goldberg Variations」は演奏解釈・録音空間・標準レパートリーの普及を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1956",
            "title": "Ella Fitzgerald & Louis Armstrong — Ella and Louis",
            "description": "「Ella and Louis」を理解するには、Ella Fitzgerald & Louis Armstrongが即興線・リズム推進・アンサンブル相互作用をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1956",
            "title": "Elvis Presley — Elvis Presley",
            "description": "「Elvis Presley」を理解するには、Elvis Presleyがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1956",
            "title": "Ravi Shankar — Three Ragas",
            "description": "「Three Ragas」はRavi Shankarによる選曲・演奏・制作法の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1957",
            "title": "Chuck Berry — After School Session",
            "description": "「After School Session」はChuck Berryによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1957",
            "title": "Little Richard — Here’s Little Richard",
            "description": "「Here’s Little Richard」を理解するには、Little Richardがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1957",
            "title": "Thelonious Monk — Brilliant Corners",
            "description": "「Brilliant Corners」はThelonious Monkによる即興線・リズム推進・アンサンブル相互作用の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1958",
            "title": "Billie Holiday — Lady in Satin",
            "description": "「Lady in Satin」が年表の節点となるのは、Billie Holidayの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1958",
            "title": "Miles Davis — Milestones",
            "description": "「Milestones」はMiles Davisによる即興線・リズム推進・アンサンブル相互作用の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1959",
            "title": "Charles Mingus — Mingus Ah Um",
            "description": "「Mingus Ah Um」が年表の節点となるのは、Charles Mingusの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1959",
            "title": "Dave Brubeck Quartet — Time Out",
            "description": "「Time Out」が年表の節点となるのは、Dave Brubeck Quartetの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1959",
            "title": "Miles Davis — Kind of Blue",
            "description": "「Kind of Blue」はMiles Davisによる即興線・リズム推進・アンサンブル相互作用の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1960",
            "title": "John Coltrane — Giant Steps",
            "description": "John Coltraneの「Giant Steps」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1960",
            "title": "João Gilberto — O amor, o sorriso e a flor",
            "description": "「O amor, o sorriso e a flor」を理解するには、João Gilbertoが舞曲リズム・打楽器の層・越境的流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1961",
            "title": "Ornette Coleman — Free Jazz",
            "description": "Ornette Colemanの「Free Jazz」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1961",
            "title": "Robert Johnson — King of the Delta Blues Singers",
            "description": "「King of the Delta Blues Singers」はRobert Johnsonによるブルー・ノート、応答構造、個人的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1962",
            "title": "Bob Dylan — Bob Dylan",
            "description": "「Bob Dylan」を理解するには、Bob Dylanが選曲・演奏・制作法をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1962",
            "title": "Ray Charles — Modern Sounds in Country and Western Music",
            "description": "「Modern Sounds in Country and Western Music」を理解するには、Ray Charlesが声のレイヤー、グルーヴ、スタジオ編曲をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1963",
            "title": "James Brown — Live at the Apollo",
            "description": "James Brownの「Live at the Apollo」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1963",
            "title": "Sam Cooke — Night Beat",
            "description": "「Night Beat」はSam Cookeによるゴスペル由来の歌唱・グルーヴ・感情強度の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1963",
            "title": "The Beatles — Please Please Me",
            "description": "「Please Please Me」が年表の節点となるのは、The Beatlesの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1964",
            "title": "Stan Getz & João Gilberto — Getz/Gilberto",
            "description": "「Getz/Gilberto」を理解するには、Stan Getz & João Gilbertoが舞曲リズム・打楽器の層・越境的流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1964",
            "title": "The Beach Boys — The Beach Boys Today!",
            "description": "「The Beach Boys Today!」はThe Beach Boysによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1964",
            "title": "The Supremes — Where Did Our Love Go",
            "description": "「Where Did Our Love Go」が年表の節点となるのは、The Supremesの版がゴスペル由来の歌唱・グルーヴ・感情強度の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1964",
            "title": "Umm Kulthum — Enta Omri",
            "description": "「Enta Omri」はUmm Kulthumによる選曲・演奏・制作法の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1965",
            "title": "Bob Dylan — Highway 61 Revisited",
            "description": "「Highway 61 Revisited」を理解するには、Bob Dylanが選曲・演奏・制作法をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1965",
            "title": "John Coltrane — A Love Supreme",
            "description": "「A Love Supreme」が年表の節点となるのは、John Coltraneの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1965",
            "title": "Otis Redding — Otis Blue",
            "description": "「Otis Blue」が年表の節点となるのは、Otis Reddingの版がゴスペル由来の歌唱・グルーヴ・感情強度の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1965",
            "title": "The Beatles — Rubber Soul",
            "description": "「Rubber Soul」を理解するには、The Beatlesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1966",
            "title": "Bob Dylan — Blonde on Blonde",
            "description": "「Blonde on Blonde」はBob Dylanによる選曲・演奏・制作法の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1966",
            "title": "Nina Simone — Wild Is the Wind",
            "description": "「Wild Is the Wind」はNina Simoneによる即興線・リズム推進・アンサンブル相互作用の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1966",
            "title": "The Beach Boys — Pet Sounds",
            "description": "「Pet Sounds」を理解するには、The Beach Boysがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1966",
            "title": "The Beatles — Revolver",
            "description": "「Revolver」を理解するには、The Beatlesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1967",
            "title": "Aretha Franklin — I Never Loved a Man the Way I Love You",
            "description": "「I Never Loved a Man the Way I Love You」はAretha Franklinによるゴスペル由来の歌唱・グルーヴ・感情強度の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1967",
            "title": "Jimi Hendrix Experience — Are You Experienced",
            "description": "「Are You Experienced」はJimi Hendrix Experienceによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1967",
            "title": "The Beatles — Sgt. Pepper’s Lonely Hearts Club Band",
            "description": "「Sgt. Pepper’s Lonely Hearts Club Band」を理解するには、The Beatlesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1967",
            "title": "The Doors — The Doors",
            "description": "「The Doors」はThe Doorsによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1967",
            "title": "The Velvet Underground & Nico — The Velvet Underground & Nico",
            "description": "「The Velvet Underground & Nico」を理解するには、The Velvet Underground & Nicoがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1968",
            "title": "Johnny Cash — At Folsom Prison",
            "description": "Johnny Cashの「At Folsom Prison」は物語歌・弦楽器編成・地域的な歌唱を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1968",
            "title": "The Beatles — The Beatles (White Album)",
            "description": "The Beatlesの「The Beatles (White Album)」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1968",
            "title": "Van Morrison — Astral Weeks",
            "description": "「Astral Weeks」はVan Morrisonによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1968",
            "title": "Wendy Carlos — Switched-On Bach",
            "description": "「Switched-On Bach」を理解するには、Wendy Carlosが合成・シーケンス・空間処理・反復構造をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1969",
            "title": "The Beatles — Abbey Road",
            "description": "「Abbey Road」を理解するには、The Beatlesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1969",
            "title": "The Rolling Stones — Let It Bleed",
            "description": "「Let It Bleed」を理解するには、The Rolling Stonesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1969",
            "title": "The Stooges — The Stooges",
            "description": "「The Stooges」を理解するには、The Stoogesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Black Sabbath",
            "description": "「Black Sabbath」はBlack Sabbathによる歪み音色・リフ構成・強力なドラムの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1970",
            "title": "Black Sabbath — Paranoid",
            "description": "「Paranoid」はBlack Sabbathによる歪み音色・リフ構成・強力なドラムの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1970",
            "title": "Miles Davis — Bitches Brew",
            "description": "「Bitches Brew」が年表の節点となるのは、Miles Davisの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1970",
            "title": "Neil Young — After the Gold Rush",
            "description": "Neil Youngの「After the Gold Rush」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1971",
            "title": "Carole King — Tapestry",
            "description": "「Tapestry」が年表の節点となるのは、Carole Kingの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1971",
            "title": "Dolly Parton — Coat of Many Colors",
            "description": "「Coat of Many Colors」が年表の節点となるのは、Dolly Partonの版が物語歌・弦楽器編成・地域的な歌唱の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1971",
            "title": "Joni Mitchell — Blue",
            "description": "「Blue」を理解するには、Joni Mitchellが選曲・演奏・制作法をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1971",
            "title": "Led Zeppelin — Led Zeppelin IV",
            "description": "「Led Zeppelin IV」が年表の節点となるのは、Led Zeppelinの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1971",
            "title": "Marvin Gaye — What’s Going On",
            "description": "「What’s Going On」はMarvin Gayeによるゴスペル由来の歌唱・グルーヴ・感情強度の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1971",
            "title": "The Who — Who’s Next",
            "description": "「Who’s Next」はThe Whoによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1972",
            "title": "David Bowie — The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
            "description": "「The Rise and Fall of Ziggy Stardust and the Spiders from Mars」を理解するには、David Bowieがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1972",
            "title": "Stevie Wonder — Talking Book",
            "description": "「Talking Book」はStevie Wonderによるゴスペル由来の歌唱・グルーヴ・感情強度の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1972",
            "title": "The Rolling Stones — Exile on Main St.",
            "description": "「Exile on Main St.」を理解するには、The Rolling Stonesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1973",
            "title": "Herbie Hancock — Head Hunters",
            "description": "Herbie Hancockの「Head Hunters」は即興線・リズム推進・アンサンブル相互作用を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1973",
            "title": "Marley / The Wailers — Catch a Fire",
            "description": "「Catch a Fire」が年表の節点となるのは、Marley / The Wailersの版がベース主導・オフビート・スタジオ混音の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1973",
            "title": "Pink Floyd — The Dark Side of the Moon",
            "description": "「The Dark Side of the Moon」が年表の節点となるのは、Pink Floydの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1973",
            "title": "Stevie Wonder — Innervisions",
            "description": "「Innervisions」を理解するには、Stevie Wonderがゴスペル由来の歌唱・グルーヴ・感情強度をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1974",
            "title": "Kraftwerk — Autobahn",
            "description": "「Autobahn」が年表の節点となるのは、Kraftwerkの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1975",
            "title": "Bruce Springsteen — Born to Run",
            "description": "「Born to Run」はBruce Springsteenによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1975",
            "title": "Keith Jarrett — The Köln Concert",
            "description": "「The Köln Concert」が年表の節点となるのは、Keith Jarrettの版が即興線・リズム推進・アンサンブル相互作用の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1975",
            "title": "Patti Smith — Horses",
            "description": "「Horses」が年表の節点となるのは、Patti Smithの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1975",
            "title": "Willie Nelson — Red Headed Stranger",
            "description": "Willie Nelsonの「Red Headed Stranger」は物語歌・弦楽器編成・地域的な歌唱を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1976",
            "title": "Fela Kuti — Zombie",
            "description": "「Zombie」が年表の節点となるのは、Fela Kutiの版が地域リズム・言語と現代制作の結合の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1976",
            "title": "Ramones — Ramones",
            "description": "「Ramones」を理解するには、Ramonesがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1976",
            "title": "Stevie Wonder — Songs in the Key of Life",
            "description": "「Songs in the Key of Life」が年表の節点となるのは、Stevie Wonderの版がゴスペル由来の歌唱・グルーヴ・感情強度の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1977",
            "title": "Bob Marley & The Wailers — Exodus",
            "description": "「Exodus」が年表の節点となるのは、Bob Marley & The Wailersの版がベース主導・オフビート・スタジオ混音の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1977",
            "title": "David Bowie — Low",
            "description": "「Low」はDavid Bowieによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1977",
            "title": "Donna Summer — I Remember Yesterday",
            "description": "「I Remember Yesterday」が年表の節点となるのは、Donna Summerの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1977",
            "title": "Fleetwood Mac — Rumours",
            "description": "「Rumours」が年表の節点となるのは、Fleetwood Macの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1977",
            "title": "Kraftwerk — Trans-Europe Express",
            "description": "「Trans-Europe Express」はKraftwerkによる合成・シーケンス・空間処理・反復構造の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1977",
            "title": "Sex Pistols — Never Mind the Bollocks, Here’s the Sex Pistols",
            "description": "「Never Mind the Bollocks, Here’s the Sex Pistols」が年表の節点となるのは、Sex Pistolsの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1977",
            "title": "Teresa Teng — The Moon Represents My Heart",
            "description": "Teresa Tengの「The Moon Represents My Heart」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1978",
            "title": "Brian Eno — Ambient 1: Music for Airports",
            "description": "Brian Enoの「Ambient 1: Music for Airports」は合成・シーケンス・空間処理・反復構造を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1978",
            "title": "Kate Bush — The Kick Inside",
            "description": "「The Kick Inside」を理解するには、Kate Bushがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1979",
            "title": "Joy Division — Unknown Pleasures",
            "description": "「Unknown Pleasures」が年表の節点となるのは、Joy Divisionの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1979",
            "title": "Michael Jackson — Off the Wall",
            "description": "「Off the Wall」はMichael Jacksonによるメロディック・フック、声の制作、大衆流通の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1979",
            "title": "The Clash — London Calling",
            "description": "「London Calling」はThe Clashによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1979",
            "title": "The Sugarhill Gang — Rapper’s Delight",
            "description": "「Rapper’s Delight」はThe Sugarhill Gangによるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra — Solid State Survivor",
            "description": "「Solid State Survivor」はYellow Magic Orchestraによる合成・シーケンス・空間処理・反復構造の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1980",
            "title": "AC/DC — Back in Black",
            "description": "「Back in Black」が年表の節点となるのは、AC/DCの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1980",
            "title": "Judas Priest — British Steel",
            "description": "「British Steel」はJudas Priestによる歪み音色・リフ構成・強力なドラムの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1980",
            "title": "Talking Heads — Remain in Light",
            "description": "「Remain in Light」を理解するには、Talking Headsがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1981",
            "title": "The Human League — Dare",
            "description": "The Human Leagueの「Dare」は合成・シーケンス・空間処理・反復構造を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1981",
            "title": "Tom Tom Club — Tom Tom Club",
            "description": "「Tom Tom Club」はTom Tom Clubによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1982",
            "title": "Grandmaster Flash and the Furious Five — The Message",
            "description": "「The Message」が年表の節点となるのは、Grandmaster Flash and the Furious Fiveの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1982",
            "title": "Iron Maiden — The Number of the Beast",
            "description": "Iron Maidenの「The Number of the Beast」は歪み音色・リフ構成・強力なドラムを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1982",
            "title": "Michael Jackson — Thriller",
            "description": "「Thriller」を理解するには、Michael Jacksonがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1983",
            "title": "New Order — Power, Corruption & Lies",
            "description": "「Power, Corruption & Lies」が年表の節点となるのは、New Orderの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1983",
            "title": "R.E.M. — Murmur",
            "description": "「Murmur」を理解するには、R.E.M.がギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1984",
            "title": "Bruce Springsteen — Born in the U.S.A.",
            "description": "「Born in the U.S.A.」が年表の節点となるのは、Bruce Springsteenの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1984",
            "title": "Prince and the Revolution — Purple Rain",
            "description": "「Purple Rain」を理解するには、Prince and the Revolutionがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1984",
            "title": "Run-D.M.C. — Run-D.M.C.",
            "description": "「Run-D.M.C.」はRun-D.M.C.によるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1985",
            "title": "Kate Bush — Hounds of Love",
            "description": "「Hounds of Love」が年表の節点となるのは、Kate Bushの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1986",
            "title": "Metallica — Master of Puppets",
            "description": "「Master of Puppets」を理解するには、Metallicaが歪み音色・リフ構成・強力なドラムをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1986",
            "title": "Paul Simon — Graceland",
            "description": "Paul Simonの「Graceland」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1986",
            "title": "Slayer — Reign in Blood",
            "description": "「Reign in Blood」はSlayerによる歪み音色・リフ構成・強力なドラムの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1987",
            "title": "Guns N’ Roses — Appetite for Destruction",
            "description": "「Appetite for Destruction」が年表の節点となるのは、Guns N’ Rosesの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1987",
            "title": "Prince — Sign o’ the Times",
            "description": "Princeの「Sign o’ the Times」はメロディック・フック、声の制作、大衆流通を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1987",
            "title": "U2 — The Joshua Tree",
            "description": "「The Joshua Tree」を理解するには、U2がギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1988",
            "title": "N.W.A — Straight Outta Compton",
            "description": "N.W.Aの「Straight Outta Compton」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1988",
            "title": "Public Enemy — It Takes a Nation of Millions to Hold Us Back",
            "description": "「It Takes a Nation of Millions to Hold Us Back」が年表の節点となるのは、Public Enemyの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1988",
            "title": "Sonic Youth — Daydream Nation",
            "description": "Sonic Youthの「Daydream Nation」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1989",
            "title": "De La Soul — 3 Feet High and Rising",
            "description": "「3 Feet High and Rising」が年表の節点となるのは、De La Soulの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1989",
            "title": "Madonna — Like a Prayer",
            "description": "「Like a Prayer」が年表の節点となるのは、Madonnaの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1989",
            "title": "Nusrat Fateh Ali Khan — Shahen-Shah",
            "description": "Nusrat Fateh Ali Khanの「Shahen-Shah」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1990",
            "title": "Depeche Mode — Violator",
            "description": "「Violator」が年表の節点となるのは、Depeche Modeの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1991",
            "title": "A Tribe Called Quest — The Low End Theory",
            "description": "「The Low End Theory」が年表の節点となるのは、A Tribe Called Questの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1991",
            "title": "Angélique Kidjo — Logozo",
            "description": "「Logozo」を理解するには、Angélique Kidjoが地域リズム・言語と現代制作の結合をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1991",
            "title": "Massive Attack — Blue Lines",
            "description": "「Blue Lines」が年表の節点となるのは、Massive Attackの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1991",
            "title": "My Bloody Valentine — Loveless",
            "description": "「Loveless」を理解するには、My Bloody Valentineがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1991",
            "title": "Nirvana — Nevermind",
            "description": "「Nevermind」が年表の節点となるのは、Nirvanaの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1992",
            "title": "A. R. Rahman — Roja soundtrack",
            "description": "「Roja soundtrack」はA. R. Rahmanによる選曲・演奏・制作法の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1992",
            "title": "Aphex Twin — Selected Ambient Works 85–92",
            "description": "「Selected Ambient Works 85–92」を理解するには、Aphex Twinが合成・シーケンス・空間処理・反復構造をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1992",
            "title": "Dr. Dre — The Chronic",
            "description": "「The Chronic」を理解するには、Dr. Dreがフロウ、サンプル／ビート制作、社会的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1992",
            "title": "Pantera — Vulgar Display of Power",
            "description": "「Vulgar Display of Power」はPanteraによる歪み音色・リフ構成・強力なドラムの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1992",
            "title": "Seo Taiji and Boys — Seo Taiji and Boys",
            "description": "「Seo Taiji and Boys」はSeo Taiji and Boysによる選曲・演奏・制作法の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1993",
            "title": "Björk — Debut",
            "description": "「Debut」が年表の節点となるのは、Björkの版が合成・シーケンス・空間処理・反復構造の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1993",
            "title": "Wu-Tang Clan — Enter the Wu-Tang (36 Chambers)",
            "description": "「Enter the Wu-Tang (36 Chambers)」を理解するには、Wu-Tang Clanがフロウ、サンプル／ビート制作、社会的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1994",
            "title": "Blur — Parklife",
            "description": "「Parklife」が年表の節点となるのは、Blurの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1994",
            "title": "Green Day — Dookie",
            "description": "「Dookie」を理解するには、Green Dayがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1994",
            "title": "Nas — Illmatic",
            "description": "Nasの「Illmatic」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1994",
            "title": "Oasis — Definitely Maybe",
            "description": "「Definitely Maybe」を理解するには、Oasisがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1994",
            "title": "The Notorious B.I.G. — Ready to Die",
            "description": "The Notorious B.I.G.の「Ready to Die」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1995",
            "title": "Alanis Morissette — Jagged Little Pill",
            "description": "「Jagged Little Pill」はAlanis Morissetteによるギター音色・リズム構成・アルバム／ライブのエネルギーの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1995",
            "title": "Radiohead — The Bends",
            "description": "「The Bends」を理解するには、Radioheadがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1996",
            "title": "2Pac — All Eyez on Me",
            "description": "「All Eyez on Me」が年表の節点となるのは、2Pacの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1996",
            "title": "Faye Wong — Restless",
            "description": "Faye Wongの「Restless」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1996",
            "title": "Jay-Z — Reasonable Doubt",
            "description": "Jay-Zの「Reasonable Doubt」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1997",
            "title": "Björk — Homogenic",
            "description": "「Homogenic」はBjörkによる合成・シーケンス・空間処理・反復構造の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1997",
            "title": "Buena Vista Social Club — Buena Vista Social Club",
            "description": "「Buena Vista Social Club」を理解するには、Buena Vista Social Clubが舞曲リズム・打楽器の層・越境的流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1997",
            "title": "Missy Elliott — Supa Dupa Fly",
            "description": "「Supa Dupa Fly」はMissy Elliottによるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1997",
            "title": "Radiohead — OK Computer",
            "description": "「OK Computer」を理解するには、Radioheadがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "1997",
            "title": "The Prodigy — The Fat of the Land",
            "description": "「The Fat of the Land」はThe Prodigyによる合成・シーケンス・空間処理・反復構造の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1998",
            "title": "Lauryn Hill — The Miseducation of Lauryn Hill",
            "description": "「The Miseducation of Lauryn Hill」が年表の節点となるのは、Lauryn Hillの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "1998",
            "title": "Lucinda Williams — Car Wheels on a Gravel Road",
            "description": "Lucinda Williamsの「Car Wheels on a Gravel Road」は物語歌・弦楽器編成・地域的な歌唱を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "1998",
            "title": "OutKast — Aquemini",
            "description": "「Aquemini」はOutKastによるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "1999",
            "title": "Hikaru Utada — First Love",
            "description": "Hikaru Utadaの「First Love」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2000",
            "title": "D’Angelo — Voodoo",
            "description": "D’Angeloの「Voodoo」はゴスペル由来の歌唱・グルーヴ・感情強度を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2000",
            "title": "Eminem — The Marshall Mathers LP",
            "description": "「The Marshall Mathers LP」はEminemによるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "2000",
            "title": "OutKast — Stankonia",
            "description": "「Stankonia」が年表の節点となるのは、OutKastの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2000",
            "title": "Radiohead — Kid A",
            "description": "「Kid A」を理解するには、Radioheadがギター音色・リズム構成・アルバム／ライブのエネルギーをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2000",
            "title": "Various Artists — O Brother, Where Art Thou? soundtrack",
            "description": "「O Brother, Where Art Thou? soundtrack」が年表の節点となるのは、Various Artistsの版が物語歌・弦楽器編成・地域的な歌唱の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2001",
            "title": "Daft Punk — Discovery",
            "description": "Daft Punkの「Discovery」は合成・シーケンス・空間処理・反復構造を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2001",
            "title": "Jay Chou — Fantasy",
            "description": "Jay Chouの「Fantasy」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2001",
            "title": "The Strokes — Is This It",
            "description": "The Strokesの「Is This It」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2002",
            "title": "Wilco — Yankee Hotel Foxtrot",
            "description": "Wilcoの「Yankee Hotel Foxtrot」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2003",
            "title": "The White Stripes — Elephant",
            "description": "The White Stripesの「Elephant」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2004",
            "title": "Arcade Fire — Funeral",
            "description": "「Funeral」が年表の節点となるのは、Arcade Fireの版がギター音色・リズム構成・アルバム／ライブのエネルギーの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2004",
            "title": "Kanye West — The College Dropout",
            "description": "「The College Dropout」はKanye Westによるフロウ、サンプル／ビート制作、社会的語りの具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "2004",
            "title": "Youssou N’Dour — Egypt",
            "description": "Youssou N’Dourの「Egypt」は地域リズム・言語と現代制作の結合を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2006",
            "title": "Amy Winehouse — Back to Black",
            "description": "「Back to Black」が年表の節点となるのは、Amy Winehouseの版がゴスペル由来の歌唱・グルーヴ・感情強度の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2006",
            "title": "J Dilla — Donuts",
            "description": "J Dillaの「Donuts」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2007",
            "title": "Radiohead — In Rainbows",
            "description": "Radioheadの「In Rainbows」はギター音色・リズム構成・アルバム／ライブのエネルギーを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2008",
            "title": "Fleet Foxes — Fleet Foxes",
            "description": "「Fleet Foxes」を理解するには、Fleet Foxesが選曲・演奏・制作法をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2010",
            "title": "Janelle Monáe — The ArchAndroid",
            "description": "「The ArchAndroid」が年表の節点となるのは、Janelle Monáeの版が声のレイヤー、グルーヴ、スタジオ編曲の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2010",
            "title": "Kanye West — My Beautiful Dark Twisted Fantasy",
            "description": "「My Beautiful Dark Twisted Fantasy」を理解するには、Kanye Westがフロウ、サンプル／ビート制作、社会的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2011",
            "title": "Adele — 21",
            "description": "「21」を理解するには、Adeleがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2011",
            "title": "Beyoncé — 4",
            "description": "Beyoncéの「4」は声のレイヤー、グルーヴ、スタジオ編曲を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2012",
            "title": "Kendrick Lamar — good kid, m.A.A.d city",
            "description": "「good kid, m.A.A.d city」が年表の節点となるのは、Kendrick Lamarの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2013",
            "title": "Beyoncé — Beyoncé",
            "description": "「Beyoncé」を理解するには、Beyoncéが声のレイヤー、グルーヴ、スタジオ編曲をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2013",
            "title": "Daft Punk — Random Access Memories",
            "description": "Daft Punkの「Random Access Memories」は合成・シーケンス・空間処理・反復構造を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2014",
            "title": "Taylor Swift — 1989",
            "description": "「1989」が年表の節点となるのは、Taylor Swiftの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2015",
            "title": "Jamie xx — In Colour",
            "description": "Jamie xxの「In Colour」は合成・シーケンス・空間処理・反復構造を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2015",
            "title": "Kendrick Lamar — To Pimp a Butterfly",
            "description": "「To Pimp a Butterfly」が年表の節点となるのは、Kendrick Lamarの版がフロウ、サンプル／ビート制作、社会的語りの明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2016",
            "title": "BTS — Wings",
            "description": "BTSの「Wings」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2016",
            "title": "Beyoncé — Lemonade",
            "description": "「Lemonade」を理解するには、Beyoncéが声のレイヤー、グルーヴ、スタジオ編曲をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2016",
            "title": "Frank Ocean — Blonde",
            "description": "「Blonde」はFrank Oceanによる声のレイヤー、グルーヴ、スタジオ編曲の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "2017",
            "title": "Kendrick Lamar — DAMN.",
            "description": "「DAMN.」を理解するには、Kendrick Lamarがフロウ、サンプル／ビート制作、社会的語りをどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2017",
            "title": "Lorde — Melodrama",
            "description": "「Melodrama」はLordeによるメロディック・フック、声の制作、大衆流通の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "2018",
            "title": "Janelle Monáe — Dirty Computer",
            "description": "「Dirty Computer」を理解するには、Janelle Monáeが声のレイヤー、グルーヴ、スタジオ編曲をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2019",
            "title": "Billie Eilish — When We All Fall Asleep, Where Do We Go?",
            "description": "「When We All Fall Asleep, Where Do We Go?」を理解するには、Billie Eilishがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2019",
            "title": "Burna Boy — African Giant",
            "description": "Burna Boyの「African Giant」は地域リズム・言語と現代制作の結合を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2020",
            "title": "BLACKPINK — The Album",
            "description": "BLACKPINKの「The Album」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2020",
            "title": "BTS — Map of the Soul: 7",
            "description": "BTSの「Map of the Soul: 7」は選曲・演奏・制作法を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2020",
            "title": "Fiona Apple — Fetch the Bolt Cutters",
            "description": "Fiona Appleの「Fetch the Bolt Cutters」はメロディック・フック、声の制作、大衆流通を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2020",
            "title": "Taylor Swift — folklore",
            "description": "「folklore」を理解するには、Taylor Swiftがメロディック・フック、声の制作、大衆流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2020",
            "title": "Wizkid — Made in Lagos",
            "description": "「Made in Lagos」を理解するには、Wizkidが地域リズム・言語と現代制作の結合をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2021",
            "title": "Little Simz — Sometimes I Might Be Introvert",
            "description": "Little Simzの「Sometimes I Might Be Introvert」はフロウ、サンプル／ビート制作、社会的語りを複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2022",
            "title": "Bad Bunny — Un Verano Sin Ti",
            "description": "「Un Verano Sin Ti」はBad Bunnyによる舞曲リズム・打楽器の層・越境的流通の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        },
        {
            "start": "2022",
            "title": "Beyoncé — Renaissance",
            "description": "Beyoncéの「Renaissance」は声のレイヤー、グルーヴ、スタジオ編曲を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2022",
            "title": "Rosalía — Motomami",
            "description": "「Motomami」を理解するには、Rosalíaが舞曲リズム・打楽器の層・越境的流通をどう組織するかを直接聴くべきである。録音は曲名だけでなく、当時の技術、美学、演奏慣習の組合せを保存する。"
        },
        {
            "start": "2023",
            "title": "SZA — SOS",
            "description": "「SOS」が年表の節点となるのは、SZAの版が声のレイヤー、グルーヴ、スタジオ編曲の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2024",
            "title": "Beyoncé — Cowboy Carter",
            "description": "Beyoncéの「Cowboy Carter」は物語歌・弦楽器編成・地域的な歌唱を複製可能な版へ固定した。後の聴衆と音楽家はカバー、ライブ版、サンプル、制作変化をこれと比較できる。"
        },
        {
            "start": "2024",
            "title": "Charli XCX — Brat",
            "description": "「Brat」が年表の節点となるのは、Charli XCXの版がメロディック・フック、声の制作、大衆流通の明確で追跡可能な音響証拠を残し、後の様式変化と直接比較できるためである。"
        },
        {
            "start": "2024",
            "title": "Tyla — Tyla",
            "description": "「Tyla」はTylaによる地域リズム・言語と現代制作の結合の具体的選択を記録する。録音は速度、音色、構成、演奏細部を反復比較可能にし、意義は抽象的評価ではなく聴取できる決定にある。"
        }
    ]
};

// 歴史的コンサート、音楽祭、ツアー
var tl_concerts = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1749-04-27",
            "title": "Handel’s Music for the Royal Fireworks public rehearsal",
            "description": "ロンドンの公開リハーサルは大群衆と交通混雑を生み、18世紀の公開音楽がすでに現代的大イベントに近い都市現象になり得たことを示す。"
        },
        {
            "start": "1808-12-22",
            "title": "Beethoven’s Vienna marathon コンサート",
            "description": "[Beethoven’s Vienna marathon concert]<br>1808年の長く寒い演奏会は第5・第6交響曲、第4ピアノ協奏曲、《合唱幻想曲》を同時初演し、新作の規模とリハーサル上の限界を露呈した。"
        },
        {
            "start": "1824-05-07",
            "title": "Beethoven’s Ninth premiere コンサート",
            "description": "[Beethoven’s Ninth premiere concert]<br>聴覚を失ったベートーヴェンが舞台で指揮に加わりながら拍手を聞けず、この出来事自体が障害、公共的崇拝、作品受容史の一部となった。"
        },
        {
            "start": "1850-09-11",
            "title": "Jenny Lind begins the American tour promoted by P. T. Barnum",
            "description": "バーナムは前売り、新聞宣伝、希少性演出で欧州歌手を全国的著名人へ変え、近代スター・マーケティングと音楽商業化の初期モデルを作った。"
        },
        {
            "start": "1871",
            "title": "Fisk Jubilee Singers begin major tours",
            "description": "学生合唱団は編曲されたアフリカ系霊歌でフィスク大学の資金を集め、奴隷制経験に根差す曲目を米欧の正式な音楽会場へ持ち込んだ。"
        },
        {
            "start": "1876-08-13",
            "title": "First Bayreuth Festival opens with the Ring cycle",
            "description": "専用劇場、覆われたオーケストラ・ピット、四夜連続の《指環》が、舞台・建築・観客注意を一体管理するワーグナーの理想を制度化した。"
        },
        {
            "start": "1891-05-05",
            "title": "Carnegie Hall opening night",
            "description": "1891年の開場行事ではチャイコフスキーらが指揮し、ニューヨークが欧州首都に比肩する国際音楽ホールを持つことを示した。"
        },
        {
            "start": "1912-05-02",
            "title": "James Reese Europe’s Clef Club Orchestra at Carnegie Hall",
            "description": "1912年、大規模な黒人オーケストラがラグタイム、交響的編成、黒人専門音楽組織を米国屈指の名門ホールへ持ち込んだ。"
        },
        {
            "start": "1913-05-29",
            "title": "The Rite of Spring premiere and audience uproar",
            "description": "ニジンスキーの振付、ストラヴィンスキーのリズム、劇場作法をめぐる衝突が騒然を生み、後の「暴動」物語はモダニズム断絶の象徴として増幅された。"
        },
        {
            "start": "1924-02-12",
            "title": "An Experiment in Modern Music premieres Rhapsody in Blue",
            "description": "ポール・ホワイトマンのエオリアン・ホール「実験」はガーシュウィン作品を古典聴衆、ジャズバンド、大衆媒体の間に置き、可視性の高い越境事件を作った。"
        },
        {
            "start": "1938-01-16",
            "title": "Benny Goodman Carnegie Hall コンサート",
            "description": "[Benny Goodman Carnegie Hall concert]<br>1938年公演はスウィングを古典的権威の会場へ置き、後のライブ盤はジャズ演奏会が歴史資料と人気商品を兼ねられることを示した。"
        },
        {
            "start": "1939-04-09",
            "title": "Marian Anderson sings at the Lincoln Memorial",
            "description": "人種差別でコンスティテューション・ホール使用を拒まれた後、アンダーソンはリンカーン記念堂で大群衆とラジオ聴衆へ歌い、演奏会を公民権の象徴へ変えた。"
        },
        {
            "start": "1943-01-23",
            "title": "Duke Ellington presents Black, Brown and Beige at Carnegie Hall",
            "description": "エリントンの長大組曲は黒人史を語り、ビッグバンドを舞踏会・ナイトクラブからコンサートホールの歴史叙事へ進めた。"
        },
        {
            "start": "1954-07-17",
            "title": "First Newport Jazz Festival",
            "description": "ニューポートは多数のジャズ奏者を保養都市の連続プログラムへ集め、後の世界的ジャズ祭が用いる協賛・観光・複数公演モデルを確立した。"
        },
        {
            "start": "1959-07-11",
            "title": "First Newport Folk Festival",
            "description": "伝承歌手、収集家、都市の若い作者を同一舞台へ置き、米国フォーク復興の真正性と商業化をめぐる論争の中心となった。"
        },
        {
            "start": "1964-02-12",
            "title": "The Beatles perform at Carnegie Hall",
            "description": "《エド・サリヴァン・ショー》直後のニューヨーク公演は、テレビ露出が即座に名門会場需要へ変わることを示し、ブリティッシュ・インヴェイジョンを加速した。"
        },
        {
            "start": "1965-07-25",
            "title": "Bob Dylan goes electric at Newport Folk Festival",
            "description": "エレキギターとロック・リズムがフォーク復興の「純粋な」アコースティック期待を破り、創作自由、政治的責任、市場の矛盾を公然化した。"
        },
        {
            "start": "1965-08-15",
            "title": "The Beatles at Shea Stadium",
            "description": "野球場を演奏会場へ変え、大観衆と不十分な拡声がスタジアム・ロックの商業可能性と当時の技術限界を同時に示した。"
        },
        {
            "start": "1966-06-30",
            "title": "The Beatles begin Budokan concerts in Tokyo",
            "description": "武道・国家儀礼と結びつく会場でのロック公演は保守的反発を招いたが、武道館を日本大衆音楽の象徴的会場へ変える契機となった。"
        },
        {
            "start": "1967-06-16",
            "title": "Monterey International Pop Festival 開幕公演",
            "description": "[Monterey International Pop Festival opens]<br>高品質制作と非営利運営がロック、ソウル、フォーク、インド音楽を並置し、ヘンドリックス、ジャニス・ジョプリン、オーティス・レディングに決定的な露出を与えた。"
        },
        {
            "start": "1968-12-11",
            "title": "The Rolling Stones Rock and Roll Circus filmed",
            "description": "テレビ特番はストーンズ、ザ・フー、ジョン・レノンらをサーカス小屋へ置き、1996年まで未公開だったため60年代ロック映像保存史の特殊例となった。"
        },
        {
            "start": "1969-12-06",
            "title": "Altamont Free コンサート",
            "description": "[Altamont Free Concert]<br>混乱した警備、暴力、観客死亡が「無料フェス＝平和な共同体」という想像を壊し、60年代対抗文化神話の暗い終点とみなされた。"
        },
        {
            "start": "1969-08-15",
            "title": "Woodstock Music & Art Fair 開幕公演",
            "description": "[Woodstock Music & Art Fair opens]<br>三日間の大群衆、泥、交通麻痺、相互扶助が映画と録音によって「平和と音楽」の世代神話へ変換された。"
        },
        {
            "start": "1970-08-26",
            "title": "Isle of Wight Festival 1970 開幕公演",
            "description": "[Isle of Wight Festival 1970 opens]<br>制御不能な規模、柵をめぐる衝突、無料文化論争が巨大ロック祭の経済矛盾を露呈し、ヘンドリックス晩年の重要映像も残した。"
        },
        {
            "start": "1971-08-01",
            "title": "Concert for Bangladesh",
            "description": "ジョージ・ハリスンとラヴィ・シャンカルはスター出演、ライブ盤、映画収益を人道支援へ結び、後の大型慈善公演の組織モデルを作った。"
        },
        {
            "start": "1971",
            "title": "Pink Floyd: Live at Pompeii filmed",
            "description": "観客のいない古代円形劇場で演奏し、撮影、反響空間、機材の接写によって「ライブ」を映画のための視聴覚作品として再定義した。"
        },
        {
            "start": "1972-08-20",
            "title": "Wattstax festival",
            "description": "スタックスの音楽家とロサンゼルス黒人共同体が競技場へ集まり、音楽、演説、映画がソウルを黒人の誇りと地域政治へ直結した。"
        },
        {
            "start": "1973-01-14",
            "title": "Elvis: Aloha from Hawaii satellite コンサート",
            "description": "[Elvis: Aloha from Hawaii satellite concert]<br>衛星中継を世界同時イベントとして売り出し、一公演をテレビ技術、国家イメージ、スーパースター・ブランドの共同展示にした。"
        },
        {
            "start": "1974-09-22",
            "title": "Zaire 74 music festival 開始",
            "description": "[Zaire 74 music festival begins]<br>「キンシャサの奇跡」と結び、アフリカとアフリカ系米国のスターを同台へ置き、公開は遅れたが大西洋横断黒人音楽アイデンティティの重要記録を残した。"
        },
        {
            "start": "1976-06-04",
            "title": "Sex Pistols at Manchester Lesser Free Trade Hall",
            "description": "観客は少なかったが、後にJoy Division、The Smiths、Buzzcocksなどを形成する人物が含まれ、少人数・高拡散の文化事件の典型となった。"
        },
        {
            "start": "1976-11-25",
            "title": "The Band’s The Last Waltz コンサート",
            "description": "[The Band’s The Last Waltz concert]<br>告別公演は複数世代のルーツ音楽家を集め、マーティン・スコセッシが撮影し、コンサート映画を緻密に演出された映画作品へ高めた。"
        },
        {
            "start": "1978-04-22",
            "title": "One Love Peace Concert in Kingston",
            "description": "政治暴力の中、ボブ・マーリーが対立指導者を舞台で握手させ、紛争は終わらなくてもレゲエ・スターを仲介者とする像を世界化した。"
        },
        {
            "start": "1979-09-19",
            "title": "No Nukes concerts begin at Madison Square Garden",
            "description": "MUSEの連続公演はロックスター、エネルギー政策運動、映画・レコード募金を結び、米国音楽家の公共政策参加モデルとなった。"
        },
        {
            "start": "1979",
            "title": "Yellow Magic Orchestra world tour",
            "description": "YMOは日本製シンセ・ポップと視覚デザインを欧米へ持ち込み、電子ポップの技術・様式革新が英米中心からのみ発信されるのではないと示した。"
        },
        {
            "start": "1981-11-24",
            "title": "Queen Rock Montreal concerts begin",
            "description": "高品質35ミリ撮影のため設計された二公演がクイーン最盛期の照明、曲順、観客交流を保存し、後に重要な修復コンサート映画となった。"
        },
        {
            "start": "1982-09-03",
            "title": "US Festival 開幕公演",
            "description": "[US Festival opens]<br>アップル共同創業者スティーブ・ウォズニアックが資金提供し、ロック、技術的ユートピア、ジャンル別日程を結び、後の企業型巨大フェスを先取りした。"
        },
        {
            "start": "1983-03-25",
            "title": "Motown 25 television concert recorded",
            "description": "マイケル・ジャクソンがテレビで初めて象徴的ムーンウォークを披露し、レーベル記念番組を世界ポップ演技史の転換点へ変えた。"
        },
        {
            "start": "1985-07-13",
            "title": "Live Aid",
            "description": "ロンドンとフィラデルフィアの二会場、衛星テレビ、国際的出演陣が慈善ロックを世界同時メディア事件へし、同時にアフリカ表象の単純化も露呈した。"
        },
        {
            "start": "1985",
            "title": "Nusrat Fateh Ali Khan reaches major international festival audiences",
            "description": "WOMADなどの舞台とピーター・ガブリエルのReal World網が長大なカッワーリー即興を南アジア外の聴衆へ届け、西洋ポップへ完全には圧縮しなかった。"
        },
        {
            "start": "1986-04-05",
            "title": "Jean-Michel Jarre’s Rendez-vous Houston",
            "description": "都市景観、レーザー、投影、電子音楽を一つの巨大舞台へ編成し、電子音楽家を公共空間のマルチメディア演出家として確立した。"
        },
        {
            "start": "1988-06-11",
            "title": "Nelson Mandela 70th Birthday Tribute",
            "description": "ウェンブリー中継はポップスター陣で反アパルトヘイトを世界の娯楽回路へ流し、マンデラを政治犯から広く知られる国際象徴へ変える一助となった。"
        },
        {
            "start": "1990-07-21",
            "title": "Roger Waters stages The Wall in Berlin",
            "description": "壁崩壊後の旧無人地帯近くで上演され、アルバムの個人的隔離の比喩を冷戦分断終結の公共的記念へ読み替えた。"
        },
        {
            "start": "1992",
            "title": "First Pavarotti & Friends benefit コンサート",
            "description": "[First Pavarotti & Friends benefit concert]<br>オペラ歌手とポップスターがテレビ慈善番組で共演し、「クラシカル・クロスオーバー」を90年代の世界録音・テレビ市場の定型へした。"
        },
        {
            "start": "1992-04-20",
            "title": "Freddie Mercury Tribute コンサート",
            "description": "[Freddie Mercury Tribute Concert]<br>クイーン残存メンバーと多数歌手が曲目を演じ、エイズ啓発・募金へ結び、ロック追悼儀礼に明確な公衆衛生目的を与えた。"
        },
        {
            "start": "1993-11-18",
            "title": "Nirvana MTV Unplugged in New York",
            "description": "多くのヒットを避け、チェロ、カバー、低音量編曲を用い、コバーン死後の発売によってグランジのライブ像を作り替えた。"
        },
        {
            "start": "1994-08-12",
            "title": "Woodstock ’94 開幕公演",
            "description": "[Woodstock ’94 opens]<br>1969年を公式記念しながら泥、テレビ、企業協賛に再定義され、対抗文化の記憶が商品化可能なノスタルジア産業へ入ったことを示した。"
        },
        {
            "start": "1996-06-15",
            "title": "First Tibetan Freedom コンサート",
            "description": "[First Tibetan Freedom Concert]<br>Beastie Boys関連組織がオルタナ青年聴衆をチベット人権運動へ結び、90年代の運動型フェスのモデルを作った。"
        },
        {
            "start": "1996-08-10",
            "title": "Oasis begins Knebworth concerts",
            "description": "二夜の巨大公演と収容力を大幅に超える申込みが、Britpopをクラブ／チャート現象から英国の国家的大衆事件へ押し上げた。"
        },
        {
            "start": "1998-07-01",
            "title": "Buena Vista Social Club performs at Carnegie Hall",
            "description": "高齢のキューバ音楽家がニューヨーク名門で演奏し、後の映画とライブ盤が革命前ダンスホール曲を世界音楽の古典へ再包装した。"
        },
        {
            "start": "1999-04-21",
            "title": "Metallica records S&M concerts with the San Francisco Symphony",
            "description": "メタルのリフと本格交響編曲を同等に置き、単なる弦の背景ではなく、ヘヴィメタル構造と管弦楽的動機展開が相互補強できると示した。"
        },
        {
            "start": "1999-07-22",
            "title": "Woodstock ’99 開幕公演",
            "description": "[Woodstock ’99 opens]<br>酷暑、高価格、設備不足、暴力、火災がウッドストック・ブランドを平和神話から切り離し、巨大イベント運営失敗の事例となった。"
        },
        {
            "start": "2001-10-20",
            "title": "The Concert for New York City",
            "description": "9・11後マディソン・スクエア・ガーデンで消防士、警察、被災家族、スターを同席させ、ロック公演を都市の哀悼と連帯儀礼へ変えた。"
        },
        {
            "start": "2003-07-30",
            "title": "Molson Canadian Rocks for Toronto SARS benefit",
            "description": "SARSで観光と都市像が傷ついた後、ローリング・ストーンズらの巨大野外公演を経済・評判回復の手段として用いた。"
        },
        {
            "start": "2005-07-02",
            "title": "Live 8 concerts",
            "description": "複数国同時公演は募金よりG8前の債務免除・援助政策を重視し、慈善公演を政策ロビー活動へ移した。"
        },
        {
            "start": "2006-04-29",
            "title": "Daft Punk’s Coachella pyramid 公演",
            "description": "[Daft Punk’s Coachella pyramid performance]<br>発光ピラミッド、同期映像、再構成ライブミックスがDJセットを完全な舞台叙事へ変え、後のEDM大型巡演の設計基準となった。"
        },
        {
            "start": "2007-12-10",
            "title": "Led Zeppelin reunion at the O2 Arena",
            "description": "アーメット・アーティガン追悼の一度限り再結成は、厳密なリハーサルと抑制した舞台で伝説的復帰が単なる懐古再現でなくなり得ると示した。"
        },
        {
            "start": "2011-06-26",
            "title": "Beyoncé headlines Glastonbury",
            "description": "完全なダンサー、バンド、連続ヒット編成で伝統的ロック祭の主舞台を掌握し、女性R&B／ポップ歌手の大型フェス主役としての地位を強めた。"
        },
        {
            "start": "2012-12-12",
            "title": "12-12-12: The Concert for Sandy Relief",
            "description": "テレビ、ネット、MSG公演を同時募金へ用い、災害支援、スター再結成、世界中継を迅速対応モデルへ統合した。"
        },
        {
            "start": "2018-04-14",
            "title": "Beyoncé’s Coachella “Homecoming” 公演",
            "description": "[Beyoncé’s Coachella “Homecoming” performance]<br>コーチェラ初の黒人女性ヘッドライナーとして、HBCUマーチングバンド、舞踊、黒人大学文化でポップスター舞台を再構成し、映画とライブ盤へ展開した。"
        },
        {
            "start": "2019-06-01",
            "title": "BTS begins Wembley Stadium concerts",
            "description": "韓国グループが英国の国家的競技場を連夜完売し、組織化された世界ファンダムが非英語ポップを従来の放送・市場障壁の外へ運べると示した。"
        },
        {
            "start": "2020-04-18",
            "title": "One World: Together at Home broadcast コンサート",
            "description": "[One World: Together at Home broadcast concert]<br>COVID休演中、音楽家が自宅から遠隔出演しテレビと配信を横断し、ネット公演の親密さ、技術格差、無観客規範を示した。"
        },
        {
            "start": "2023-04-15",
            "title": "BLACKPINK headlines Coachella",
            "description": "コーチェラ初のアジア系ヘッドライナーとして、K-popの振付、生バンド、多言語世界ファンダムを米国主要フェスの最高枠へ持ち込んだ。"
        },
        {
            "start": "2023-03-17",
            "title": "Taylor Swift’s Eras Tour 開幕公演",
            "description": "[Taylor Swift’s Eras Tour opens]<br>キャリア時代別に巨大カタログを再編し、スタジアム経済、ファン旅行、コンサート映画で増幅し、配信時代のカタログ価値を可視化した。"
        },
        {
            "start": "2023-09-29",
            "title": "U2 opens the Sphere in Las Vegas",
            "description": "超高精細の包囲映像、指向性音響、会場建築が知覚を共同決定し、「背景」を観客を包む主要叙事媒体へ変えた。"
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
