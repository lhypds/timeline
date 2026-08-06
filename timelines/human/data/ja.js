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
            "description": "Human Deep History before 10,000 BCE (Compressed Marker)<br>この表示は、ホモ・サピエンスの出現、アフリカからの拡散、世界各地への移住、旧石器時代の狩猟採集生活と象徴文化をまとめたものである。"
        },
        {
            "start": "-9999",
            "end": "-3499",
            "title": "新石器時代への移行",
            "description": "Neolithic Transition<br>各地の人々は植物と動物を徐々に家畜化・栽培化し、移動型の採集生活から農耕・牧畜と定住村落へ移行した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3299",
            "end": "-1199",
            "title": "青銅器時代",
            "description": "Bronze Age<br>銅と錫の合金である青銅が武器・道具・祭器に広く用いられ、宮殿中心、専門職人、長距離交易が発達した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-3499",
            "end": "-0499",
            "title": "最初期の都市と領域国家",
            "description": "Earliest Cities and Territorial States<br>メソポタミア、エジプト、インダス地域などで、大都市、文字行政、徴税制度、複数都市を支配する国家が現れた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "-0799",
            "end": "0500",
            "title": "古典文明と枢軸時代",
            "description": "Classical Civilizations and the Axial Age<br>地中海、南アジア、東アジアでは帝国や都市国家が発展し、儒教、仏教、ギリシア哲学などの思想伝統が形成された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "0500",
            "end": "1000",
            "title": "ポスト古典期の地域秩序",
            "description": "Post-Classical Regional Orders<br>西ローマ帝国の消滅後、ビザンツ帝国、イスラム諸帝国、唐、南アジアの王朝が新たな政治・宗教中心を形成した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1000",
            "end": "1500",
            "title": "相互に結ばれた中世世界",
            "description": "An Interconnected Medieval World<br>シルクロード、インド洋航路、サハラ交易路がユーラシアとアフリカを結び、宗教、商品、技術、疾病が広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1450",
            "end": "1750",
            "title": "近世の世界的拡張",
            "description": "Early Modern Global Expansion<br>ヨーロッパの海洋帝国がアメリカ、アフリカ、アジアへ進出し、コロンブス交換、大西洋奴隷貿易、世界的な銀交易が展開した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1750",
            "end": "1914",
            "title": "革命と工業化の時代",
            "description": "Age of Revolutions and Industrialization<br>大西洋革命が旧体制を揺るがし、蒸気動力と工場生産が労働、交通、都市、社会階層を再編した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1815",
            "end": "1914",
            "title": "帝国主義と世界移民の時代",
            "description": "Age of Imperialism and Global Migration<br>工業列強は世界各地を植民地化して交通網を築き、数千万人の移民や契約労働者が大陸間を移動した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1914",
            "end": "1945",
            "title": "世界大戦と大衆政治",
            "description": "World Wars and Mass Politics<br>二度の世界大戦は社会全体を動員して未曽有の犠牲を生み、革命政権、ファシズム、共産主義、民族主義が台頭した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1945",
            "end": "1991",
            "title": "冷戦・脱植民地化・開発",
            "description": "Cold War, Decolonization, and Development<br>米ソは核兵器と世界的同盟をめぐって競争し、その一方でアジア、アフリカ、カリブ海の植民地が相次いで独立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "冷戦後の移行期",
            "description": "Post-Cold War Transition<br>ソ連崩壊後、東欧と旧ソ連諸国は国家と市場制度を再編し、グローバル化が進む一方で地域紛争が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2001",
            "end": "2020",
            "title": "グローバル化・テロリズム・デジタル社会",
            "description": "Globalization, Terrorism, and the Digital Society<br>インターネット、スマートフォン、世界的供給網が日常に浸透し、9・11攻撃とその後の「対テロ戦争」が国際安全保障を再編した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#6C757D"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "パンデミック・地政学的分断・AIの加速",
            "description": "Pandemic, Geopolitical Fragmentation, and Accelerating AI<br>新型コロナの世界的流行が公衆衛生危機を引き起こし、その後、戦争、供給網の再編、生成AIの急速な普及が同時進行した。",
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
            "title": "西南アジアにおける農耕の起源",
            "description": "Origins of Agriculture in Southwest Asia<br>肥沃な三日月地帯の人々は小麦、大麦、豆類を栽培し、野生穀物の採集を継続的な農耕へ変えていった。"
        },
        {
            "start": "-9599",
            "title": "エリコの恒久的定住",
            "description": "Permanent Settlement at Jericho<br>ヨルダン渓谷のエリコは、石造家屋、城壁、大型の塔を備えた長期定住集落へ発展した。"
        },
        {
            "start": "-8999",
            "title": "ヒツジとヤギの家畜化",
            "description": "Domestication of Sheep and Goats<br>西アジアの牧畜民は野生のヒツジとヤギを選択的に繁殖させ、管理可能な家畜群へ変えた。"
        },
        {
            "start": "-8499",
            "title": "チャヨニュと肥沃な三日月地帯の初期農耕",
            "description": "Çayönü and Early Farming in the Fertile Crescent<br>チャヨニュなどの集落では穀物栽培、家畜飼育、恒久的住居が組み合わされ、初期農耕社会が形成された。"
        },
        {
            "start": "-7499",
            "title": "チャタル・ヒュユクの大集落",
            "description": "The Large Settlement of Çatalhöyük<br>アナトリアのチャタル・ヒュユクは屋上から出入りする密集した日干し煉瓦住宅で構成され、住民は農耕、狩猟、手工業を営んだ。"
        },
        {
            "start": "-6999",
            "title": "長江流域における稲作の拡大",
            "description": "Expansion of Rice Farming in the Yangtze Basin<br>長江中下流域では水稲の栽培と栽培化が進み、湿地や河谷に稲作村落が広がった。"
        },
        {
            "start": "-6999",
            "title": "メヘルガルの農耕集落",
            "description": "The Farming Settlement of Mehrgarh<br>バローチスターンのメヘルガルでは、小麦と大麦を栽培し、牛や羊を飼育し、日干し煉瓦の住居と貯蔵施設を築いた。"
        },
        {
            "start": "-6499",
            "title": "土器と村落ネットワークの拡大",
            "description": "Expansion of Pottery and Village Networks<br>焼成土器が各地の農耕社会に普及して調理と貯蔵に用いられ、近隣村落間で器物や原料が交換された。"
        },
        {
            "start": "-5999",
            "title": "メソポタミアの灌漑集落",
            "description": "Irrigation Settlements in Mesopotamia<br>南メソポタミアでは運河を掘って乾燥平原を灌漑し、水路沿いに密集集落と穀物農業が形成された。"
        },
        {
            "start": "-5499",
            "title": "農耕のヨーロッパへの拡大",
            "description": "Expansion of Farming into Europe<br>アナトリアとエーゲ海地域の農民と農耕技術が、バルカンおよび地中海の経路を通ってヨーロッパへ広がった。"
        },
        {
            "start": "-4999",
            "title": "ユーラシアの初期冶金",
            "description": "Early Metallurgy in Eurasia<br>バルカン、西アジア、コーカサスなどの職人が銅を製錬し、装飾品、道具、武器を作り始めた。"
        },
        {
            "start": "-4499",
            "title": "草原牧畜の拡大",
            "description": "Expansion of Steppe Pastoralism<br>ユーラシア草原では牛、羊、馬を基盤とする季節移動型の牧畜生活が広い地域へ拡大した。"
        },
        {
            "start": "-3999",
            "title": "犂耕と大規模村落",
            "description": "Plow Agriculture and Large Villages<br>家畜に引かせる犂によって重い土壌も耕作可能となり、一部の農耕集落は人口の多い大村落へ成長した。"
        },
        {
            "start": "-3799",
            "title": "ウルクの都市化",
            "description": "Urbanization at Uruk<br>ウルクは神殿区、専門職人、行政倉庫、多数の人口を抱える初期都市中心へ発展した。"
        },
        {
            "start": "-3499",
            "title": "車輪と車両輸送",
            "description": "The Wheel and Wheeled Transport<br>メソポタミアなどで一枚板の車輪を持つ車両が現れ、牛車が物資と人の輸送に使われ始めた。"
        },
        {
            "start": "-3399",
            "title": "原楔形文字による会計",
            "description": "Proto-Cuneiform Accounting<br>ウルクの行政官は粘土板と絵文字で穀物、家畜、労役、配給を記録し、最古級の文字体系を形成した。"
        },
        {
            "start": "-3299",
            "title": "インダス都市伝統の興隆",
            "description": "Rise of the Indus Urban Tradition<br>インダス流域の集落は拡大し、標準化された土器、度量衡、都市計画を採用してハラッパー都市文明の基礎を築いた。"
        },
        {
            "start": "-3199",
            "title": "エジプト象形文字",
            "description": "Egyptian Hieroglyphic Writing<br>エジプトでは記念碑、札、行政記録に図像的記号が用いられ、数千年続く象形文字の伝統が成立した。"
        },
        {
            "start": "-3099",
            "title": "古代エジプトの政治統一",
            "description": "Political Unification of Ancient Egypt<br>上エジプトの支配者がナイル川下流域を征服・統合し、一人のファラオが治める統一王国を成立させた。"
        },
        {
            "start": "-2999",
            "title": "メソポタミアとインダス間の長距離交易",
            "description": "Long-Distance Trade between Mesopotamia and the Indus<br>ペルシア湾航路がメソポタミアとインダス文明を結び、木材、金属、宝石、織物、農産物が交換された。"
        },
        {
            "start": "-2899",
            "title": "シュメール初期王朝の都市国家",
            "description": "Sumerian Early Dynastic City-States<br>ウル、ウルク、ラガシュなどの都市国家は王と神殿組織に統治され、土地、水、交易路をめぐって争った。"
        },
        {
            "start": "-2699",
            "title": "エジプト古王国とピラミッド国家",
            "description": "Egypt's Old Kingdom and the Pyramid State<br>古王国のファラオは中央行政を通じて食糧と労働力を動員し、ギザなどに巨大な王家ピラミッド群を建設した。"
        },
        {
            "start": "-2599",
            "title": "成熟ハラッパー都市",
            "description": "Mature Harappan Cities<br>ハラッパーやモヘンジョダロでは格子状街路、排水設備、規格化された煉瓦、共通の度量衡が用いられた。"
        },
        {
            "start": "-2499",
            "title": "オーストロネシア語族拡散の開始",
            "description": "Beginning of the Austronesian Expansion<br>台湾とその周辺の航海民がフィリピンや島嶼東南アジアへ移動し、農耕、カヌー技術、オーストロネシア諸語を伝えた。"
        },
        {
            "start": "-2399",
            "title": "アッカド帝国の拡大",
            "description": "Expansion of the Akkadian Empire<br>サルゴンと後継者たちはシュメール都市国家と周辺地域を征服し、アッカド王権による広域帝国を築いた。"
        },
        {
            "start": "-2199",
            "title": "4.2キロ年気候イベントと国家危機",
            "description": "The 4.2-Kiloyear Climate Event and State Crises<br>紀元前2200年頃の長期的乾燥化が西アジア、エジプト、南アジアを襲い、凶作、移住、政権の衰退が起きた。"
        },
        {
            "start": "-2099",
            "title": "ウル第三王朝",
            "description": "Third Dynasty of Ur<br>ウルの王朝は南メソポタミアを再統一し、地方官僚、徴税、大量の楔形文字文書によって国家を運営した。"
        },
        {
            "start": "-1999",
            "title": "ミノア宮殿文明",
            "description": "Minoan Palace Civilization<br>クレタ島のクノッソスなどの宮殿中心は、貯蔵、手工業、宗教儀礼、エーゲ海交易を組織した。"
        },
        {
            "start": "-1899",
            "title": "古バビロニアの都市秩序",
            "description": "Old Babylonian Urban Order<br>バビロン、ラルサ、マリなどの都市国家では、王宮、神殿、商人、成文契約によって土地、債務、交易が運営された。"
        },
        {
            "start": "-1799",
            "title": "二里頭文化と中国初期青銅国家",
            "description": "Erlitou Culture and the Early Bronze State in China<br>二里頭遺跡には宮殿区、道路、青銅鋳造工房、階層化された墓があり、中原における初期国家の形成を示す。"
        },
        {
            "start": "-1749",
            "title": "ハンムラビによるバビロン統治",
            "description": "Hammurabi's Rule of Babylon<br>ハンムラビは戦争によってメソポタミアの広域を統一し、王権行政と彼の名を冠する法典によってバビロン王国を統治した。"
        },
        {
            "start": "-1599",
            "title": "商王朝の興隆",
            "description": "Rise of the Shang Dynasty<br>商王朝は黄河中下流域に、王都、宗族祭祀、青銅鋳造、軍事遠征を中核とする国家を築いた。"
        },
        {
            "start": "-1599",
            "title": "ミケーネ宮殿社会",
            "description": "Mycenaean Palace Society<br>ミケーネやピュロスなどの宮殿では、支配者と書記が農産物貢納、職人、軍隊、地域交易を管理した。"
        },
        {
            "start": "-1549",
            "title": "エジプト新王国",
            "description": "New Kingdom of Egypt<br>ヒクソスを追放したエジプトは強力な新王国を築き、ファラオはヌビアとレヴァントへ進出して大規模神殿を建設した。"
        },
        {
            "start": "-1499",
            "title": "南アジアにおけるヴェーダ文化の発展",
            "description": "Development of Vedic Culture in South Asia<br>インド北西部とガンジス流域では、ヴェーダ讃歌、祭祀、部族王権を中心とするインド・アーリア語系社会が形成された。"
        },
        {
            "start": "-1399",
            "title": "ヒッタイト帝国の興隆",
            "description": "Rise of the Hittite Empire<br>中央アナトリアを拠点とするヒッタイト支配者は北シリアを征服し、エジプトやメソポタミア諸国と競争した。"
        },
        {
            "start": "-1299",
            "title": "オルメカ文明の興隆",
            "description": "Rise of the Olmec Civilization<br>メキシコ湾岸のオルメカ人はサン・ロレンソなどの祭祀中心を築き、巨大石像頭や精巧な翡翠製品を制作した。"
        },
        {
            "start": "-1249",
            "title": "ラピタ文化の太平洋進出",
            "description": "Lapita Expansion into the Pacific<br>特徴的な刻印土器を持つラピタ系航海民が島嶼メラネシアからフィジー、トンガ、サモアへ移住した。"
        },
        {
            "start": "-1199",
            "title": "後期青銅器時代の崩壊",
            "description": "Late Bronze Age Collapse<br>東地中海の宮殿国家は、戦争、移住、内乱、交易断絶が重なる中で相次いで崩壊・衰退した。"
        },
        {
            "start": "-1099",
            "title": "フェニキア海上ネットワーク",
            "description": "Phoenician Maritime Networks<br>ティルスやシドンなどのフェニキア都市は地中海航路と植民拠点を築き、木材、金属、染料、奢侈品を交易した。"
        },
        {
            "start": "-1045",
            "title": "周による商の征服",
            "description": "Zhou Conquest of Shang<br>周の武王は牧野の戦いで商軍を破り、封建的な分封と宗族関係を基盤とする周王朝を成立させた。"
        },
        {
            "start": "-0999",
            "title": "バントゥー系諸集団の拡散加速",
            "description": "Acceleration of the Bantu Expansion<br>バントゥー諸語を話す農耕・製鉄集団が中西部アフリカから東部・南部へ移住し、新たな集落を築いた。"
        },
        {
            "start": "-0899",
            "title": "西アフリカのノク文化",
            "description": "Nok Culture of West Africa<br>現在のナイジェリア中部に栄えたノク社会は、大型テラコッタ像、農耕村落、初期製鉄で知られる。"
        },
        {
            "start": "-0799",
            "title": "ギリシア都市国家の形成",
            "description": "Formation of the Greek City-States<br>アテネ、スパルタ、コリントスなどの独立ポリスが、都市、周辺農村、市民共同体、固有の政体を備えて形成された。"
        },
        {
            "start": "-0799",
            "title": "アンデスのチャビン文化圏",
            "description": "The Chavín Cultural Horizon in the Andes<br>ペルー高地のチャビン・デ・ワンタルが宗教中心となり、その図像、石彫、儀礼様式がアンデス各地へ広がった。"
        },
        {
            "start": "-0769",
            "title": "東周の開始",
            "description": "Beginning of the Eastern Zhou<br>鎬京陥落後、周王室は洛邑へ東遷し、王権が弱まる中で諸侯国が春秋戦国時代の覇権を争った。"
        },
        {
            "start": "-0752",
            "title": "ローマの伝統的建国年",
            "description": "Traditional Founding Date of Rome<br>ローマの伝承では紀元前753年にロムルスが都市を建てたとされ、この建国神話がローマの自己認識の中核となった。"
        },
        {
            "start": "-0699",
            "title": "鉄器技術の広範な普及",
            "description": "Widespread Diffusion of Iron Technology<br>西アジア、地中海、南アジア、東アジアで製鉄と鍛造が普及し、鉄製農具と武器が広く用いられるようになった。"
        },
        {
            "start": "-0699",
            "title": "スキタイ草原ネットワーク",
            "description": "Scythian Steppe Networks<br>スキタイなどの騎馬遊牧集団は黒海北岸とユーラシア草原の通路を押さえ、定住帝国間で馬、金属、奢侈品を交易した。"
        },
        {
            "start": "-0599",
            "title": "ガンジス中流域の都市化",
            "description": "Urbanization in the Middle Ganges Valley<br>鉄製農具、稲作、交易を背景に、ガンジス中流域では城壁都市、市場、貨幣、大国が出現した。"
        },
        {
            "start": "-0549",
            "title": "アケメネス朝ペルシア帝国の興隆",
            "description": "Rise of the Achaemenid Persian Empire<br>キュロス2世はメディア、リディア、新バビロニアを征服し、西アジアの広域にまたがる帝国を築いた。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政の開始",
            "description": "Beginning of the Roman Republic<br>ローマの伝承では最後の王が追放され、毎年選ばれる執政官、元老院、市民集会からなる共和政が始まった。"
        },
        {
            "start": "-0499",
            "title": "サポテカのモンテ・アルバン発展",
            "description": "Development of Zapotec Monte Albán<br>サポテカ人はオアハカ盆地を見下ろす丘上にモンテ・アルバンを築き、広場、神殿、墓、文字を刻んだ石碑を設けた。"
        },
        {
            "start": "-0499",
            "title": "サハラ横断交流の拡大",
            "description": "Expansion of Trans-Saharan Exchange<br>北アフリカとサヘルの商人はオアシス路を通じて塩、金、家畜、工芸品を交換し、ラクダ輸送の普及後に規模が拡大した。"
        },
        {
            "start": "-0402",
            "title": "中国戦国時代の開始",
            "description": "Beginning of China's Warring States Period<br>周王室が名目的存在となり、秦・楚・斉・燕・韓・趙・魏などが常備軍と行政改革を用いて長期の兼併戦争を行った。"
        },
        {
            "start": "-0321",
            "title": "マウリヤ朝の成立",
            "description": "Founding of the Maurya Empire<br>チャンドラグプタはナンダ朝を倒してガンジス平原を支配し、南アジア最初期の広域帝国の一つを築いた。"
        },
        {
            "start": "-0220",
            "title": "秦による中国統一",
            "description": "Qin Unification of China<br>秦王嬴政は六国を滅ぼして皇帝を称し、戦国諸国を中央集権的な郡県制帝国へ統合した。"
        },
        {
            "start": "-0205",
            "title": "漢王朝の成立",
            "description": "Founding of the Han Dynasty<br>劉邦は楚漢戦争で項羽を破り、漢王朝を建てて統一帝国を再建した。"
        },
        {
            "start": "-0199",
            "title": "テオティワカンの大都市化",
            "description": "Teotihuacan Grows into a Great City<br>メキシコ高原のテオティワカンは大通り、ピラミッド、集合住宅、工房地区を備え、古代アメリカ最大級の都市となった。"
        },
        {
            "start": "-0099",
            "title": "アンデスのモチェ文化発展",
            "description": "Development of the Moche Culture in the Andes<br>ペルー北岸のモチェ社会は大規模な日干し煉瓦神殿と灌漑施設を築き、写実的な土器と高度な金属工芸を生み出した。"
        },
        {
            "start": "0100",
            "title": "アクスム王国の興隆",
            "description": "Rise of the Kingdom of Aksum<br>現在のエチオピア・エリトリア高原を中心とするアクスムは、紅海交易を掌握し独自の貨幣を鋳造した。"
        },
        {
            "start": "0200",
            "title": "古典期マヤ都市文明の繁栄",
            "description": "Flourishing of Classic Maya Urban Civilization<br>ティカル、カラクムル、パレンケなどのマヤ都市国家はピラミッドと宮殿を築き、文字で王朝、戦争、暦を記録した。"
        },
        {
            "start": "0220",
            "title": "漢王朝の終焉と分裂時代",
            "description": "End of the Han Dynasty and an Age of Division<br>後漢最後の皇帝が退位すると、中国は三国時代とその後の長期分裂に入り、複数の王朝・政権が統一を争った。"
        },
        {
            "start": "0320",
            "title": "グプタ帝国の興隆",
            "description": "Rise of the Gupta Empire<br>チャンドラグプタ1世と後継者たちはガンジス流域から拡大し、北インドの大部分を支配する帝国を築いた。"
        },
        {
            "start": "0400",
            "title": "ポリネシア人の太平洋定住拡大",
            "description": "Polynesian Settlement across the Pacific<br>ポリネシアの航海者は双胴カヌー、星、海洋知識を用い、西ポリネシアから遠隔の太平洋諸島へ移住した。"
        },
        {
            "start": "0500",
            "title": "西アフリカのガーナ帝国興隆",
            "description": "Rise of the Ghana Empire in West Africa<br>ワガドゥの支配者はサヘルの金産地とサハラ交易路を押さえ、後にガーナ帝国と呼ばれる国家を形成した。"
        },
        {
            "start": "0600",
            "title": "ミシシッピ文化の墳丘社会発展",
            "description": "Development of Mississippian Mound Societies<br>北米南東部の農耕社会は大型基壇状墳丘、広場、首長中心を核に集落を組織し、トウモロコシ栽培を主な基盤とした。"
        },
        {
            "start": "0700",
            "title": "スワヒリ海岸交易都市の拡大",
            "description": "Expansion of Swahili Coast Trading Cities<br>キルワ、モンバサなど東アフリカ沿岸都市はスワヒリ文化を育み、インド洋の金、象牙、陶磁器、織物交易に参加した。"
        },
        {
            "start": "0800",
            "title": "ヴァイキングの定住と北大西洋進出",
            "description": "Viking Settlement and North Atlantic Expansion<br>スカンディナヴィアの航海者はブリテン、アイルランド、アイスランド、グリーンランドに定住し、交易と襲撃の網を北大西洋へ広げた。"
        },
        {
            "start": "0900",
            "title": "大ジンバブエの地域中心化",
            "description": "Development of Great Zimbabwe as a Regional Center<br>大ジンバブエは巨大な乾式石造建築を中心に、内陸の牧畜・金生産とインド洋交易を結ぶ政治中心となった。"
        },
        {
            "start": "1000",
            "title": "ノース人の北米定住",
            "description": "Norse Settlement in North America<br>グリーンランドから来たノース人はニューファンドランドのランス・オ・メドーに短期集落を築き、既知最古のヨーロッパ人によるアメリカ定住遺跡を残した。"
        },
        {
            "start": "1050",
            "title": "カホキアの大都市中心化",
            "description": "Cahokia Becomes a Major Urban Center<br>ミシシッピ川沿いのカホキアは数万人を集め、モンクス・マウンド、広場、柵を築き、メキシコ以北最大の先コロンブス期都市となった。"
        },
        {
            "start": "1200",
            "title": "マオリのニュージーランド定住加速",
            "description": "Acceleration of Māori Settlement in New Zealand<br>東ポリネシアからの航海者がニュージーランド各地に定住し、気候、資源、地形に適応したマオリ社会を形成した。"
        },
        {
            "start": "1325",
            "title": "テノチティトランの建設",
            "description": "Founding of Tenochtitlan<br>メシカ人はテスココ湖の島にテノチティトランを建設し、堤道、水道、チナンパ農地を整備して首都とした。"
        },
        {
            "start": "1438",
            "title": "インカ帝国拡張の開始",
            "description": "Beginning of Inca Imperial Expansion<br>パチャクテクはクスコ周辺を掌握して国家を再編し、その後インカの軍隊と道路網がアンデスの大部分へ急速に拡大した。"
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
            "description": "Akkadian Empire<br>サルゴンと後継者たちはアッカドを中心にシュメールと北メソポタミアを征服し、この地域最初期の広域帝国を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2685",
            "end": "-2180",
            "title": "エジプト古王国",
            "description": "Old Kingdom of Egypt<br>古王国はメンフィスを政治中心とし、ファラオが中央行政によってナイル渓谷を統治し、ギザのピラミッドなどを建設した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-2054",
            "end": "-1649",
            "title": "エジプト中王国",
            "description": "Middle Kingdom of Egypt<br>テーベの支配者が分裂したエジプトを再統一し、中央官僚制を復興してヌビアへ交易・軍事支配を拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1549",
            "end": "-1069",
            "title": "エジプト新王国",
            "description": "New Kingdom of Egypt<br>ヒクソス追放後に成立した新王国は、ヌビアを支配しレヴァントにも帝国的勢力を維持した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1599",
            "end": "-1045",
            "title": "商王朝",
            "description": "Shang Dynasty<br>商王朝は黄河流域の王都を中心に王族が統治し、甲骨占卜、青銅礼器、軍事遠征を特徴とした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-1045",
            "end": "-0255",
            "title": "周王朝",
            "description": "Zhou Dynasty<br>周は商に代わり、分封・宗法・礼制で諸侯を結び、東遷後は春秋戦国の列国競争へ移行した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0910",
            "end": "-0608",
            "title": "新アッシリア帝国",
            "description": "Neo-Assyrian Empire<br>新アッシリア帝国は常備軍、攻城技術、州行政によってメソポタミア、レヴァント、エジプトの一部を征服し、ニムルドやニネヴェを都とした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0625",
            "end": "-0538",
            "title": "新バビロニア帝国",
            "description": "Neo-Babylonian Empire<br>カルデア王朝はバビロンを都としてアッシリア残存勢力を倒し、ペルシアに征服されるまでメソポタミアとレヴァントを支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0549",
            "end": "-0329",
            "title": "アケメネス朝ペルシア帝国",
            "description": "Achaemenid Persian Empire<br>アケメネス朝はイラン高原からエジプト、西・中央アジア、インダスの一部までを、属州、王の道、多言語行政で統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0508",
            "end": "-0026",
            "title": "ローマ共和政",
            "description": "Roman Republic<br>ローマは執政官、元老院、市民集会による共和政をとり、戦争を通じてイタリアから地中海世界へ支配を広げた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0335",
            "end": "-0322",
            "title": "アレクサンドロス大王の帝国",
            "description": "Empire of Alexander the Great<br>マケドニア王アレクサンドロスはアケメネス朝を征服してエジプトからインダスまで進軍したが、死後その帝国は後継者諸国に分裂した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0304",
            "end": "-0029",
            "title": "プトレマイオス朝エジプト",
            "description": "Ptolemaic Egypt<br>アレクサンドロス配下のプトレマイオスとその子孫はアレクサンドリアを都とし、マケドニア王権とエジプトのファラオ伝統を融合して統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0311",
            "end": "-0062",
            "title": "セレウコス朝",
            "description": "Seleucid Empire<br>セレウコスと後継者はシリア・メソポタミアからイラン・中央アジアに及ぶ領土を支配し、ヘレニズム都市網を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0321",
            "end": "-0184",
            "title": "マウリヤ朝",
            "description": "Maurya Empire<br>マウリヤ朝はパータリプトラを都として南アジアの大部分を統一し、アショーカ王期には州行政、道路、碑文勅令で統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0220",
            "end": "-0205",
            "title": "秦王朝",
            "description": "Qin Dynasty<br>秦は六国を滅ぼして中国初の統一皇帝国家を築き、郡県制を施行し、文字・度量衡・道路規格を統一した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0205",
            "end": "0220",
            "title": "漢王朝",
            "description": "Han Dynasty<br>漢は秦の制度を継承・修正して中国の大部分を長く支配し、西域や朝鮮半島へ進出して儒教的官僚帝国を形成した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0246",
            "end": "0224",
            "title": "パルティア帝国",
            "description": "Parthian Empire<br>アルサケス朝はイランとメソポタミアを王家と有力貴族の協調で統治し、長期にわたりローマの大敵となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "-0026",
            "end": "0395",
            "title": "統一ローマ帝国",
            "description": "Unified Roman Empire<br>アウグストゥスが元首政を始めた後、皇帝は地中海沿岸、西ヨーロッパ、西アジアの一部を統治し、帝国が恒久的に東西分割されるまで続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0224",
            "end": "0651",
            "title": "ササン朝ペルシア",
            "description": "Sasanian Empire<br>ササン朝はパルティアを倒して中央集権的なイラン帝国を築き、ゾロアスター教的王権とローマ・ビザンツとの度重なる戦争を特徴とした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0280",
            "end": "0550",
            "title": "最盛期のアクスム王国",
            "description": "Kingdom of Aksum at Its Height<br>最盛期のアクスムはエチオピア・エリトリア高原と紅海港を支配し、貨幣を鋳造して4世紀にキリスト教を受容した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0320",
            "end": "0550",
            "title": "グプタ帝国",
            "description": "Gupta Empire<br>グプタ朝は地方君主との連携で北インドの大部分を統治し、宮廷はサンスクリット文学、宗教、学術を保護した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0395",
            "end": "1453",
            "title": "東ローマ／ビザンツ帝国",
            "description": "Eastern Roman / Byzantine Empire<br>東ローマ帝国はコンスタンティノープルを都とし、ローマ法と皇帝制度を継承しながら、ギリシア語・正教文化の中で千年以上存続した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0481",
            "end": "0843",
            "title": "フランク王国とカロリング帝国",
            "description": "Frankish Kingdoms and the Carolingian Empire<br>フランク諸王朝はガリアと西ゲルマニアを支配し、カール大帝期に西ヨーロッパの大半へ拡大して800年に皇帝戴冠を行った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0581",
            "end": "0618",
            "title": "隋による中国再統一",
            "description": "Sui Reunification of China<br>隋の文帝は南北朝の分裂を終わらせて統一帝国を再建し、その後大運河建設と高句麗遠征が行われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0618",
            "end": "0907",
            "title": "唐王朝",
            "description": "Tang Dynasty<br>唐は長安と洛陽を中心に広大な多民族帝国を統治し、科挙、州県、都護府によって中原と内陸アジアを結んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "正統カリフ時代とウマイヤ朝",
            "description": "Rashidun and Umayyad Caliphates<br>ムハンマド死後、カリフ軍はビザンツとササン朝の広大な領土を征服し、ウマイヤ朝はダマスクスから帝国を統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0750",
            "end": "1258",
            "title": "バグダードのアッバース朝",
            "description": "Abbasid Caliphate in Baghdad<br>アッバース朝はウマイヤ朝を倒してバグダードから統治し、地方王朝が自立した後もカリフ制は1258年のモンゴル軍侵攻まで続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0794",
            "end": "1185",
            "title": "日本の平安時代",
            "description": "Heian Period in Japan<br>平安京遷都後、天皇と藤原貴族が政治を主導し、後期には院政と武士勢力が拡大した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0800",
            "end": "1806",
            "title": "神聖ローマ帝国の伝統",
            "description": "Holy Roman Imperial Tradition<br>西欧の皇帝称号はカール大帝からドイツ諸王へ継承され、帝国は皇帝、諸侯、教会領、自由都市から構成された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0860",
            "end": "1240",
            "title": "キエフ・ルーシ",
            "description": "Kievan Rus'<br>東スラヴ社会とノース系支配層はキーウを中心にドニエプル交易路を掌握し、ウラジーミル期に正教を受容した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国時代",
            "description": "Five Dynasties and Ten Kingdoms Period<br>唐の滅亡後、北方の五つの短命王朝と南方の諸国が並立し、宋が次第に中国の大部分を再統一した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0960",
            "end": "1279",
            "title": "宋王朝",
            "description": "Song Dynasty<br>宋は文官政府、科挙、商業税によって中国の大部分を統治し、北宋滅亡後は南宋が臨安から南方を治めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0971",
            "end": "1171",
            "title": "ファーティマ朝",
            "description": "Fatimid Caliphate<br>イスマーイール派シーアのファーティマ朝は北アフリカからエジプトへ進出してカイロを建設し、アッバース朝の権威に対抗した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "0999",
            "end": "1227",
            "title": "最盛期のガーナ帝国",
            "description": "Ghana Empire at Its Height<br>ガーナ帝国の支配者はサヘルの金産地とサハラの塩交易路を掌握し、クンビ・サレーなどで隊商に課税した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1037",
            "end": "1194",
            "title": "セルジューク帝国秩序",
            "description": "Seljuk Imperial Order<br>テュルク系セルジューク支配者はイラン、イラク、アナトリアの一部を征服し、アッバース朝カリフを擁護するスルタンとして軍事封土を配分した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1066",
            "title": "ノルマン人支配のイングランド成立",
            "description": "Establishment of Norman Rule in England<br>ノルマンディー公ウィリアムはヘイスティングズで勝利して国王となり、城塞、封臣制、土地調査によってイングランド統治を再編した。"
        },
        {
            "start": "1185",
            "end": "1333",
            "title": "鎌倉幕府",
            "description": "Kamakura Shogunate<br>源頼朝は鎌倉に将軍と御家人を中核とする武家政権を築き、京都の朝廷は天皇・貴族制度を維持した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1206",
            "end": "1368",
            "title": "モンゴル帝国と後継ハン国",
            "description": "Mongol Empire and Successor Khanates<br>チンギス・ハンと後継者はユーラシアの広大な地域を征服し、後に元、ジョチ・ウルス、イルハン朝、チャガタイ・ハン国などに分かれた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1235",
            "end": "1600",
            "title": "マリ帝国",
            "description": "Mali Empire<br>マリ帝国はニジェール川上流、金産地、サハラ交易路を支配し、マンサ・ムーサ期にはトンブクトゥなどが繁栄した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1271",
            "end": "1368",
            "title": "元王朝",
            "description": "Yuan Dynasty<br>クビライは元を建てて南宋を征服し、大都から中国を統治しつつモンゴル帝国のユーラシア網に連なった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1299",
            "end": "1922",
            "title": "オスマン国家と帝国",
            "description": "Ottoman State and Empire<br>オスマン朝はアナトリア辺境の小国から東南ヨーロッパ、西アジア、北アフリカにまたがる帝国へ成長し、スルタン、官僚、州制度で統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1336",
            "end": "1646",
            "title": "ヴィジャヤナガル帝国",
            "description": "Vijayanagara Empire<br>ヴィジャヤナガル朝はデカン南部を基盤に南インドを支配し、巨大な首都を中心に寺院、交易、軍事貴族制を組織した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "西ヨーロッパの百年戦争時代",
            "description": "The Hundred Years' War Era in Western Europe<br>イングランド王家とフランス王家は王位と領土をめぐって断続的に戦い、休戦、内戦、疫病、王権再編が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1368",
            "end": "1644",
            "title": "明王朝",
            "description": "Ming Dynasty<br>朱元璋は元を倒して明を建て、南京のち北京を都とし、皇帝、六部、衛所、地方行政によって中国を統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1392",
            "end": "1910",
            "title": "朝鮮王朝",
            "description": "Joseon Dynasty<br>李成桂は朝鮮王朝を建てて漢城を都とし、儒教官僚制、科挙、中央集権によって朝鮮半島を統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1400",
            "end": "1591",
            "title": "ソンガイ帝国",
            "description": "Songhai Empire<br>ソンガイはニジェール川中流のガオを中心に台頭し、トンブクトゥ、ジェンネ、サハラ横断の金・塩交易を支配した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1453",
            "title": "オスマン帝国によるコンスタンティノープル征服",
            "description": "Ottoman Conquest of Constantinople<br>メフメト2世はコンスタンティノープルを包囲・陥落させ、ビザンツ帝国を終わらせてオスマン帝国の首都とした。"
        },
        {
            "start": "1464",
            "end": "1591",
            "title": "ソンガイ帝国の拡大",
            "description": "Expansion of the Songhai Empire<br>スンニ・アリとアスキア・ムハンマドは旧マリ領とニジェール川都市を征服し、ソンガイを西アフリカ最大級の帝国にした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1485",
            "end": "1603",
            "title": "テューダー朝イングランド",
            "description": "Tudor England<br>テューダー朝は薔薇戦争後に王権を強化し、宗教改革、修道院解散、海洋進出を進めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1492",
            "title": "カスティーリャとアラゴンの連合強化",
            "description": "Consolidation of the Union of Castile and Aragon<br>イサベルとフェルナンドの王朝連合がカスティーリャとアラゴンを結び、グラナダ征服後にスペイン君主国を強化した。"
        },
        {
            "start": "1501",
            "end": "1736",
            "title": "サファヴィー朝イラン",
            "description": "Safavid Iran<br>サファヴィー朝はイランを統一して十二イマーム派シーアを国教とし、シャー、部族軍、官僚によって統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1526",
            "end": "1857",
            "title": "ムガル帝国",
            "description": "Mughal Empire<br>バーブルと後継者はインドにムガル帝国を築き、アクバル期には州制、土地税、位階制貴族によって南アジアの大部分を統治した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1547",
            "end": "1721",
            "title": "ロシア・ツァーリ国",
            "description": "Tsardom of Russia<br>イヴァン4世がツァーリを称した後、ロシアはヴォルガ、ウラル、シベリアへ拡大し、中央集権的君主国を形成した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1600",
            "end": "1868",
            "title": "徳川幕府",
            "description": "Tokugawa Shogunate<br>徳川家康は関ヶ原の戦い後に江戸幕府を開き、幕藩体制の下で大名、対外関係、身分秩序を統制した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1603",
            "end": "1867",
            "title": "ステュアート朝とイギリス立憲君主制",
            "description": "The Stuart Era and Britain's Constitutional Monarchy<br>ステュアート朝では国王と議会の対立から内戦、共和政、名誉革命が起こり、議会が王権を制限する体制が成立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1644",
            "end": "1912",
            "title": "清王朝",
            "description": "Qing Dynasty<br>満洲人が建てた清は明に代わって中国を統治し、モンゴル、新疆、チベットなどを多民族帝国へ組み込んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1682",
            "end": "1725",
            "title": "ピョートル大帝期のロシア",
            "description": "Russia under Peter the Great<br>ピョートル1世は軍隊、行政、税制を改革し、サンクトペテルブルクを建設して大北方戦争後にバルト海への出口を得た。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1707",
            "title": "グレートブリテン王国の成立",
            "description": "Formation of the Kingdom of Great Britain<br>イングランドとスコットランドの議会が合同法を成立させ、共通の議会と君主を持つグレートブリテン王国を創設した。"
        },
        {
            "start": "1776",
            "title": "アメリカ独立宣言",
            "description": "United States Declares Independence<br>北米の英領十三植民地は独立宣言を採択してイギリスからの分離を表明し、独立戦争を通じて共和国を建てた。"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命政権",
            "description": "Revolutionary Governments in France<br>フランス革命は旧体制と王政を倒し、立憲君主制、共和政、恐怖政治、総裁政府へと政体を変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "end": "1815",
            "title": "ナポレオン帝国",
            "description": "Napoleonic Empire<br>ナポレオンは皇帝即位後、戦争でヨーロッパ大陸の大半を支配し、法典、行政改革、衛星国によって占領地を再編した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1804",
            "title": "ハイチ独立",
            "description": "Haitian Independence<br>奴隷化された人々が革命を起こしてフランス軍を破り、サン＝ドマングは奴隷革命による最初の独立国ハイチとなった。"
        },
        {
            "start": "1810",
            "end": "1826",
            "title": "ラテンアメリカ独立の時代",
            "description": "Age of Latin American Independence<br>スペイン領アメリカとポルトガル領ブラジルの独立運動がイベリア支配を脱し、アメリカ大陸に多数の新国家を成立させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1815",
            "title": "ウィーン会議体制",
            "description": "Congress of Vienna System<br>ナポレオン敗北後、列強はウィーンで国境を引き直し、王朝を復古させ、定期協議による勢力均衡体制を築いた。"
        },
        {
            "start": "1822",
            "title": "ブラジル独立",
            "description": "Brazilian Independence<br>ポルトガル王子ペドロがブラジル独立を宣言して皇帝となり、植民地は独立君主国へ移行した。"
        },
        {
            "start": "1861",
            "title": "イタリア王国の成立",
            "description": "Formation of the Kingdom of Italy<br>サルデーニャ王国は戦争と住民投票でイタリア諸国の大半を併合し、ヴィットーリオ・エマヌエーレ2世がイタリア国王となった。"
        },
        {
            "start": "1867",
            "title": "カナダ連邦の成立",
            "description": "Canadian Confederation<br>英領北米のカナダ州、ノヴァスコシア、ニューブランズウィックが自治連邦を結成し、後に他の州・地域が加わった。"
        },
        {
            "start": "1868",
            "title": "明治維新",
            "description": "Meiji Restoration<br>倒幕勢力が天皇親政を復活させて幕藩体制を廃し、日本は中央集権、徴兵、教育、工業化改革を進めた。"
        },
        {
            "start": "1871",
            "title": "ドイツ帝国の成立",
            "description": "Formation of the German Empire<br>プロイセンはデンマーク、オーストリア、フランスとの戦争後にドイツ諸邦を統合し、ヴィルヘルム1世がヴェルサイユで皇帝に即位した。"
        },
        {
            "start": "1885",
            "title": "コンゴ自由国の成立",
            "description": "Establishment of the Congo Free State<br>ベルリン会議はベルギー王レオポルド2世のコンゴ盆地私有支配を認め、植民地政権は強制労働でゴムと象牙を採取した。"
        },
        {
            "start": "1901",
            "title": "オーストラリア連邦の成立",
            "description": "Federation of Australia<br>オーストラリアの六英領植民地が連邦を結成し、連邦議会と自治政府を設けつつ英国君主を元首とした。"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命による帝政終結",
            "description": "Xinhai Revolution Ends Imperial Rule<br>武昌蜂起を契機に各省が清朝から離脱し、中華民国が成立して清帝が退位し、二千年以上続いた皇帝制度が終わった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#5C6BC0"
        },
        {
            "start": "1917",
            "title": "ロシア臨時政府とボリシェヴィキの権力掌握",
            "description": "Russian Provisional Government and Bolshevik Seizure of Power<br>二月革命で皇帝が退位して臨時政府が成立し、十月革命ではボリシェヴィキがペトログラードの権力機関を掌握した。"
        },
        {
            "start": "1918",
            "title": "ドイツ・オーストリア＝ハンガリー・オスマン・ロシア帝国の崩壊",
            "description": "Collapse of the German, Austro-Hungarian, Ottoman, and Russian Empires<br>第一次世界大戦と革命によって四帝国が崩壊し、その領土は共和国、民族国家、委任統治領へ再編された。"
        },
        {
            "start": "1922",
            "title": "ソビエト連邦の成立",
            "description": "Formation of the Soviet Union<br>ロシア、ウクライナ、白ロシア、ザカフカースの各ソビエト共和国が連邦条約を結び、共産党指導の連邦国家を成立させた。"
        },
        {
            "start": "1923",
            "title": "トルコ共和国の成立",
            "description": "Formation of the Republic of Turkey<br>ムスタファ・ケマルの民族運動が独立戦争に勝利し、スルタン制を廃してアンカラを首都とする共和国を建てた。"
        },
        {
            "start": "1932",
            "title": "サウジアラビア王国の成立",
            "description": "Formation of the Kingdom of Saudi Arabia<br>アブドゥルアズィーズ・イブン・サウードがナジュド、ヒジャーズなどを統一し、サウジアラビア王国を宣言した。"
        },
        {
            "start": "1947",
            "title": "インドとパキスタンの独立",
            "description": "Independence of India and Pakistan<br>英領インドはインドとパキスタンの二自治領に分割され、植民地支配が終わる一方で大規模移住と宗派暴力が起きた。"
        },
        {
            "start": "1948",
            "title": "イスラエル国の成立",
            "description": "Establishment of the State of Israel<br>英領パレスチナ委任統治の終了時にユダヤ人指導部がイスラエル建国を宣言し、直後に周辺アラブ諸国との戦争が始まった。"
        },
        {
            "start": "1949",
            "title": "中華人民共和国の成立",
            "description": "Founding of the People's Republic of China<br>国共内戦で中国共産党が大陸を掌握し、毛沢東が北京で中華人民共和国成立を宣言する一方、国民政府は台湾へ移った。"
        },
        {
            "start": "1957",
            "title": "ガーナ独立",
            "description": "Independence of Ghana<br>ゴールド・コーストはクワメ・ンクルマの下で英国から独立してガーナとなり、サハラ以南アフリカで早期に独立した植民地の一つとなった。"
        },
        {
            "start": "1960",
            "title": "アフリカの年",
            "description": "Year of Africa<br>1960年には主にフランス領だった17のアフリカ植民地が独立し、大陸の主権国家数が急増した。"
        },
        {
            "start": "1962",
            "title": "アルジェリア独立",
            "description": "Algerian Independence<br>アルジェリア民族解放戦線は8年の戦争後にフランスとエヴィアン協定を結び、住民投票を経て独立国家を成立させた。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構の成立",
            "description": "Formation of the Organization of African Unity<br>32のアフリカ独立国がアディスアベバでアフリカ統一機構を設立し、主権擁護と反植民地協力を進めた。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立",
            "description": "Independence of Bangladesh<br>東パキスタンの独立戦争とインド介入でパキスタン軍が敗れ、ダッカを中心とする主権国家バングラデシュが成立した。"
        },
        {
            "start": "1990",
            "title": "ドイツ再統一",
            "description": "German Reunification<br>東ドイツがドイツ連邦共和国へ編入され、ベルリンの壁崩壊後の二つのドイツが一つの憲法と政府の下で再統一した。"
        },
        {
            "start": "1991",
            "title": "ソビエト連邦の解体",
            "description": "Dissolution of the Soviet Union<br>連邦共和国が相次いで独立を宣言し、ロシア、ウクライナ、ベラルーシの首脳が連邦を解消して1991年12月にソ連が消滅した。"
        },
        {
            "start": "1993",
            "title": "チェコスロヴァキアの平和的解体",
            "description": "Peaceful Dissolution of Czechoslovakia<br>チェコとスロヴァキアの指導者が分離を協議し、連邦は戦争を伴わず二つの独立共和国となった。"
        },
        {
            "start": "1997",
            "title": "香港返還",
            "description": "Handover of Hong Kong<br>英国が香港の主権を中華人民共和国へ移管し、「一国二制度」の枠組みで香港特別行政区が成立した。"
        },
        {
            "start": "1999",
            "title": "マカオ返還",
            "description": "Handover of Macau<br>ポルトガルがマカオの主権を中華人民共和国へ移管し、「一国二制度」の下でマカオ特別行政区が成立した。"
        },
        {
            "start": "2002",
            "title": "アフリカ連合の成立",
            "description": "Formation of the African Union<br>アフリカ統一機構はアフリカ連合へ改組され、首脳会議、委員会、平和安全保障機構を通じた大陸協力を進めた。"
        },
        {
            "start": "2011",
            "title": "南スーダン独立",
            "description": "Independence of South Sudan<br>スーダン内戦を終結させた和平協定と住民投票に基づき、南部地域が分離して南スーダン共和国を成立させた。"
        }
    ]
};

// 宗教・文化・社会
var tl_culture = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2599",
            "title": "ピラミッド複合体と王家葬送文化",
            "description": "Pyramid Complexes and Royal Funerary Culture<br>古代エジプトのファラオはナイル西岸にピラミッド、神殿、参道を築き、ミイラ、供物、儀礼によって死後の王家祭祀を維持した。"
        },
        {
            "start": "-1799",
            "title": "古バビロニアの書記学校",
            "description": "Old Babylonian Scribal Schools<br>メソポタミアの書記学校では楔形文字、シュメール語、数学、法律文書を教え、宮廷・神殿・商業の専門書記を養成した。"
        },
        {
            "start": "-1499",
            "title": "南アジアにおけるヴェーダ讃歌の伝承",
            "description": "Transmission of the Vedic Hymns in South Asia<br>バラモン祭司は厳密な口承法で『リグ・ヴェーダ』などの讃歌を保存し、祭火儀礼で唱えた。"
        },
        {
            "start": "-1199",
            "title": "商代中国の甲骨文字",
            "description": "Oracle-Bone Inscriptions in Shang China<br>商王室は亀甲や獣骨に占卜の問い、結果、検証を刻み、中国最古級の大規模な体系的文字資料を残した。"
        },
        {
            "start": "-0999",
            "title": "ヘブライ宗教伝統の形成",
            "description": "Formation of the Hebrew Religious Tradition<br>古代イスラエルとユダの共同体は、ヤハウェ崇拝、契約、律法、預言を中心とする一神教的聖典伝統を形成した。"
        },
        {
            "start": "-0799",
            "title": "ホメロス叙事詩の成文化",
            "description": "The Homeric Epics Take Written Form<br>長く口承された『イリアス』と『オデュッセイア』がギリシア語叙事詩として整えられ、トロイア戦争とオデュッセウスの帰還を描いた。"
        },
        {
            "start": "-0699",
            "title": "地中海におけるアルファベット文字の普及",
            "description": "Spread of Alphabetic Writing in the Mediterranean<br>フェニキアの子音字母はギリシア人によって母音を含む体系へ改変され、さらにエトルリア文字とラテン文字へ影響した。"
        },
        {
            "start": "-0599",
            "title": "ウパニシャッド思想の発展",
            "description": "Development of Upanishadic Thought<br>ウパニシャッドはブラフマン、アートマン、輪廻、解脱を論じ、ヴェーダ祭祀伝統を存在と意識への哲学的探究へ向けた。"
        },
        {
            "start": "-0549",
            "title": "マハーヴィーラとジャイナ教伝統",
            "description": "Mahavira and the Jain Tradition<br>マハーヴィーラは不殺生、無所有、自己抑制を説く修行共同体を組織し、現存するジャイナ教伝統の中心的祖師となった。"
        },
        {
            "start": "-0529",
            "title": "仏陀の教えを中心とする仏教共同体の形成",
            "description": "Formation of the Buddhist Community around the Buddha's Teachings<br>ゴータマ・ブッダはガンジス流域で四諦、八正道、解脱を説き、弟子たちは僧伽を組織して教えを口承した。"
        },
        {
            "start": "-0499",
            "title": "孔子の教えと中国古典倫理伝統",
            "description": "Confucius and China's Classical Ethical Tradition<br>孔子と弟子たちは仁、礼、孝、君子教育を説き、その言行は後に『論語』として編纂され儒家の中核文献となった。"
        },
        {
            "start": "-0449",
            "title": "アテネにおけるギリシア演劇の繁栄",
            "description": "Flourishing of Greek Drama in Athens<br>アテネではディオニュソス祭の公共演劇競技が行われ、アイスキュロス、ソフォクレス、エウリピデス、アリストファネスが悲劇と喜劇を発展させた。"
        },
        {
            "start": "-0399",
            "title": "中国重要古典文献の編纂",
            "description": "Compilation of Major Chinese Classical Texts<br>戦国から前漢初期の学者が『詩経』『書経』『礼』『易』『春秋』などを整理し、後世の経学の基礎となる古典体系を形成した。"
        },
        {
            "start": "-0299",
            "title": "ヘレニズム文化の融合",
            "description": "Hellenistic Cultural Synthesis<br>アレクサンドロス征服後、ギリシア語、都市、芸術がエジプト、西アジア、中央アジアの伝統と後継諸国で交わった。"
        },
        {
            "start": "-0249",
            "title": "アショーカ王期の仏教普及",
            "description": "Spread of Buddhism under Ashoka<br>マウリヤ朝のアショーカ王は僧団、仏塔、布教を支援し、石柱・磨崖勅令でダンマと道徳的統治を説いた。"
        },
        {
            "start": "-0199",
            "title": "ラビ伝統と第二神殿期ユダヤ教の発展",
            "description": "Rabbinic Traditions and the Development of Second Temple Judaism<br>第二神殿期のユダヤ社会は律法、会堂、祭司、諸派を中心に営まれ、神殿破壊後はラビが宗教実践を再編した。"
        },
        {
            "start": "0030",
            "title": "初期キリスト教運動",
            "description": "Early Christian Movement<br>イエスの弟子たちはユダヤとローマ帝国諸都市で復活信仰を伝え、使徒、長老、地域会衆からなる教会を築いた。"
        },
        {
            "start": "0105",
            "title": "蔡倫の上奏と関連する製紙法",
            "description": "Papermaking Associated with Cai Lun's Memorial<br>後漢の宦官蔡倫は樹皮、麻、ぼろ布、漁網を用いる改良製紙法を上奏し、その後紙が中国で広く用いられた。"
        },
        {
            "start": "0200",
            "title": "大乗仏教のアジア拡大",
            "description": "Expansion of Mahayana Buddhism across Asia<br>大乗経典と菩薩信仰は中央アジアの交易路を通って中国へ入り、さらに朝鮮、日本、東南アジアの一部へ広がった。"
        },
        {
            "start": "0313",
            "title": "ミラノ勅令によるキリスト教公認",
            "description": "Edict of Milan Legalizes Christianity<br>コンスタンティヌスとリキニウスは宗教寛容を宣言し、没収されたキリスト教財産を返還して公的礼拝を認めた。"
        },
        {
            "start": "0325",
            "title": "第1ニカイア公会議",
            "description": "First Council of Nicaea<br>コンスタンティヌスがアリウス派論争を協議するため司教を招集し、公会議は子が父と同質であるとするニカイア信条を定めた。"
        },
        {
            "start": "0380",
            "title": "キリスト教のローマ帝国国教化",
            "description": "Christianity Becomes the Roman Empire's Official Religion<br>テオドシウス1世はニカイア派キリスト教を帝国の正統とし、公的な異教祭祀を段階的に制限した。"
        },
        {
            "start": "0400",
            "title": "グプタ期サンスクリット古典文化の繁栄",
            "description": "Flourishing of Classical Sanskrit Culture under the Guptas<br>グプタ期の宮廷と寺院はカーリダーサらのサンスクリット文学、数学、天文学、彫刻、ヒンドゥー教文献の発展を支えた。"
        },
        {
            "start": "0529",
            "title": "ベネディクト会修道伝統の開始",
            "description": "Beginning of the Benedictine Monastic Tradition<br>ヌルシアのベネディクトゥスは共同生活、祈り、労働の修道規則を定め、西ヨーロッパ修道制の主要な基礎となった。"
        },
        {
            "start": "0610",
            "title": "イスラム伝承におけるクルアーン啓示の開始",
            "description": "Beginning of Qur'anic Revelation in Islamic Tradition<br>イスラム伝承では、ムハンマドがメッカ近郊で天使ジブリールを通じ最初の啓示を受け、その後の啓示がクルアーンを形成したとされる。"
        },
        {
            "start": "0622",
            "title": "ヒジュラとメディナのムスリム共同体形成",
            "description": "The Hijra and Formation of the Muslim Community at Medina<br>ムハンマドと信徒はメッカからメディナへ移住し、宗教・政治・防衛機能を持つムスリム共同体を築いた。"
        },
        {
            "start": "0700",
            "title": "東アジア・東南アジアにおける仏教の定着",
            "description": "Broad Establishment of Buddhism in East and Southeast Asia<br>僧侶、訳経者、王室の保護によって、中国、朝鮮、日本、東南アジア各地に仏教寺院、経典、儀礼が定着した。"
        },
        {
            "start": "0762",
            "title": "アッバース朝首都バグダードの建設",
            "description": "Foundation of Baghdad as the Abbasid Capital<br>カリフのマンスールはティグリス河畔に円城バグダードを建設し、アッバース帝国の行政・商業・学術中心とした。"
        },
        {
            "start": "0800",
            "title": "カロリング教育改革",
            "description": "Carolingian Educational Reform<br>カール大帝の宮廷は学者を集めて修道院・司教座学校を改革し、ラテン語書記法を統一して宗教・古典文献を写本した。"
        },
        {
            "start": "0850",
            "title": "アラビア語への古典翻訳運動",
            "description": "Classical Translation Movement into Arabic<br>バグダードなどの学者はギリシア語、シリア語、ペルシア語、サンスクリットの著作をアラビア語へ訳し、哲学、医学、数学、天文学を伝えた。"
        },
        {
            "start": "0868",
            "title": "中国での『金剛経』印刷",
            "description": "Printing of the Diamond Sutra in China<br>唐代の職人は木版で挿絵入り『金剛経』巻子を印刷し、868年の奥書を持つ著名な初期有紀年印刷物を残した。"
        },
        {
            "start": "0960",
            "title": "東アジアの活字と商業出版の発展",
            "description": "Movable Type and Commercial Publishing in East Asia<br>中国の畢昇が陶製活字を試み、朝鮮で金属活字が発達し、宋元の都市出版業者が古典、暦、物語、実用書を大量刊行した。"
        },
        {
            "start": "0988",
            "title": "キエフ・ルーシのキリスト教化",
            "description": "Christianization of Kievan Rus'<br>大公ウラジーミルがビザンツ系キリスト教を受容してキーウ住民に洗礼を施し、正教をルーシ国家・文化の基盤とした。"
        },
        {
            "start": "1054",
            "title": "東西教会の分裂",
            "description": "East-West Schism<br>権威、典礼、教義をめぐりローマとコンスタンティノープルが相互破門し、ラテン・カトリックとギリシア正教の長期分裂を象徴した。"
        },
        {
            "start": "1088",
            "title": "ボローニャ大学の伝統開始",
            "description": "Beginning of the University of Bologna Tradition<br>ボローニャでローマ法を学ぶ学生と教師が自治的団体を組織し、ヨーロッパ最古級の大学制度へ発展した。"
        },
        {
            "start": "1096",
            "title": "十字軍運動の開始",
            "description": "Beginning of the Crusading Movement<br>教皇ウルバヌス2世が東方キリスト教徒支援とエルサレム奪取を呼びかけ、第1回十字軍がレヴァントへ向かった。"
        },
        {
            "start": "1150",
            "title": "ヨーロッパ大学ネットワークの拡大",
            "description": "Expansion of Europe's University Network<br>パリ、オックスフォード、ケンブリッジ、サラマンカなどで、教会・王権の特許を得た教師と学生の法人が神学、法学、医学、学芸を教えた。"
        },
        {
            "start": "1200",
            "title": "東アジアにおける朱子学の影響拡大",
            "description": "Expansion of Neo-Confucian Influence in East Asia<br>程顥・程頤・朱熹らが理、気、心性、経書教育を体系化し、朱子学は中国、朝鮮、日本の重要な官学となった。"
        },
        {
            "start": "1250",
            "title": "スコラ学文化の成熟",
            "description": "Maturation of Scholastic Culture<br>中世大学の学者は論理的討論でキリスト教神学とアリストテレス哲学を調和させ、トマス・アクィナスらが体系的著作を生み出した。"
        },
        {
            "start": "1300",
            "title": "俗語文学文化の拡大",
            "description": "Expansion of Vernacular Literary Culture<br>ダンテ、チョーサーなどが各地の言語で詩、物語、宗教文書を書き、文学はラテン語の独占から次第に離れた。"
        },
        {
            "start": "1350",
            "title": "イタリア・ルネサンス人文主義の拡大",
            "description": "Expansion of Italian Renaissance Humanism<br>イタリアの学者はギリシア・ローマ文献を収集校訂し、修辞、歴史、倫理、人間の創造力を重視して芸術と教育へ影響した。"
        },
        {
            "start": "1450",
            "title": "ヨーロッパのグーテンベルク式活版印刷",
            "description": "Gutenberg-Style Movable-Type Printing in Europe<br>グーテンベルクはマインツで金属活字、油性インク、印刷機を組み合わせ、長文書籍の迅速な複製を可能にした。"
        },
        {
            "start": "1517",
            "title": "宗教改革の開始",
            "description": "Beginning of the Protestant Reformation<br>マルティン・ルターは贖宥状と教皇権を批判し、ドイツ語著作と聖書翻訳によって新たなプロテスタント教会形成を促した。"
        },
        {
            "start": "1534",
            "title": "イングランド宗教改革と国王至上権",
            "description": "English Reformation and Royal Supremacy<br>ヘンリー8世はイングランド教会をローマから離脱させ国王を最高首長とし、王権は修道院を解散して財産を接収した。"
        },
        {
            "start": "1540",
            "title": "イエズス会の認可",
            "description": "Approval of the Society of Jesus<br>教皇パウルス3世はイグナティウス・ロヨラのイエズス会を正式認可し、同会は教育、宣教、教皇への服従を重視した。"
        },
        {
            "start": "1545",
            "end": "1563",
            "title": "トリエント公会議",
            "description": "Council of Trent<br>カトリック司教会議は宗教改革に対応し、教義を明確化し、聖職者規律、神学校、典礼を改革した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1611",
            "title": "『欽定訳聖書』の刊行",
            "description": "Publication of the King James Bible<br>イングランド王ジェームズ1世が学者にヘブライ語・ギリシア語からの再翻訳を命じ、1611年の影響力ある英語聖書が刊行された。"
        },
        {
            "start": "1637",
            "title": "徳川政権によるキリスト教と海外交流の制限",
            "description": "Tokugawa Restrictions on Christianity and Overseas Contact<br>江戸幕府はキリスト教を禁じ宣教師を追放し、ヨーロッパ貿易を長崎に集中させ、日本人の海外渡航と帰国を制限した。"
        },
        {
            "start": "1648",
            "title": "三十年戦争後の宗派秩序",
            "description": "Confessional Order after the Thirty Years' War<br>ウェストファリア条約は神聖ローマ帝国内のカトリック、ルター派、カルヴァン派の法的地位を認め、一部国境を再編した。"
        },
        {
            "start": "1685",
            "title": "ナント勅令の廃止",
            "description": "Revocation of the Edict of Nantes<br>ルイ14世はフランスのユグノーへの限定的寛容を撤回し、プロテスタント礼拝を禁じ、多くを国外へ追放した。"
        },
        {
            "start": "1715",
            "title": "ヨーロッパ啓蒙公共圏の拡大",
            "description": "Expansion of the Enlightenment Public Sphere in Europe<br>コーヒーハウス、サロン、学会、定期刊行物、書簡網が、理性、科学、宗教寛容、政治改革を論じる公共空間となった。"
        },
        {
            "start": "1751",
            "end": "1772",
            "title": "『百科全書』の刊行",
            "description": "Publication of the Encyclopédie<br>ディドロとダランベールが多巻本『百科全書』を編集し、技術、科学、哲学、社会知識を集成して啓蒙思想を広めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1770",
            "title": "太平洋における宣教・植民文化接触の拡大",
            "description": "Expansion of Missionary and Colonial Encounters in the Pacific<br>ヨーロッパの宣教師、商人、植民者が太平洋諸島へ入り、改宗、交易、土地占有、制度をめぐる接触と衝突が起きた。"
        },
        {
            "start": "1800",
            "title": "ロマン主義によるヨーロッパ文化の再編",
            "description": "Romanticism Reshapes European Culture<br>ロマン主義の作家、画家、作曲家は感情、自然、想像力、民族伝統、個人の天才を重視し、古典主義的規範に対抗した。"
        },
        {
            "start": "1830",
            "title": "大衆新聞の普及",
            "description": "Expansion of Mass-Circulation Newspapers<br>蒸気印刷、安価な紙、電信、都市識字率の上昇によって低価格の日刊紙が生まれ、ニュース、広告、連載小説が大衆へ届いた。"
        },
        {
            "start": "1848",
            "title": "民族主義・自由主義政治文化の高揚",
            "description": "Rise of Nationalist and Liberal Political Culture<br>欧米の知識人、学生、市民団体が憲法、民族統一、出版自由、政治参加拡大を求め、1848年革命で一斉に噴出した。"
        },
        {
            "start": "1868",
            "title": "明治日本の国家主導による大衆教育拡大",
            "description": "State-Led Expansion of Mass Education in Meiji Japan<br>明治政府は学制を公布し、全国の小学校、中学校、師範学校網を整備して統一課程で国民と技術人材を育成した。"
        },
        {
            "start": "1870",
            "title": "欧米における義務教育の拡大",
            "description": "Expansion of Compulsory Education in Europe and North America<br>欧米各国・地方政府は就学を義務化し、公立学校、教員養成、標準課程を通じて基礎教育を拡大した。"
        },
        {
            "start": "1896",
            "title": "第1回近代オリンピック",
            "description": "First Modern Olympic Games<br>14か国の選手がアテネで陸上、水泳、体操などを競い、古代オリンピックに着想を得た国際競技大会が復活した。"
        },
        {
            "start": "1900",
            "title": "世界的大衆文化・娯楽の加速",
            "description": "Acceleration of Global Mass Culture and Entertainment<br>映画、レコード、ラジオ、観戦スポーツ、廉価印刷物が国境を越える娯楽産業を生み、スターと流行様式を大量複製した。"
        },
        {
            "start": "1919",
            "title": "バウハウスの設立",
            "description": "Founding of the Bauhaus<br>ヴァルター・グロピウスはワイマールの美術・工芸学校を統合し、機能、素材、工業生産、総合デザインを重視するバウハウスを設立した。"
        },
        {
            "start": "1920",
            "title": "商業放送の拡大",
            "description": "Expansion of Commercial Broadcasting<br>ラジオ局が定時番組としてニュース、音楽、演劇、広告を放送し、家庭用ラジオが大衆媒体となった。"
        },
        {
            "start": "1927",
            "title": "初の長編同期音声映画",
            "description": "First Feature-Length Synchronized Sound Film<br>ワーナー・ブラザースが台詞と歌を映像に同期させた『ジャズ・シンガー』を公開し、映画産業のトーキー化を加速した。"
        },
        {
            "start": "1936",
            "title": "各国でテレビ定期放送開始",
            "description": "Regular Television Broadcasting Begins in Multiple Countries<br>英国、ドイツ、米国などが実験・公共テレビ局を設け、限られた地域へ定時に映像と音声を放送した。"
        },
        {
            "start": "1945",
            "title": "戦後の大衆高等教育拡大",
            "description": "Postwar Expansion of Mass Higher Education<br>退役軍人支援、公立大学、新キャンパスによって戦後の入学者が増え、大学はエリート教育から大衆教育へ移行した。"
        },
        {
            "start": "1947",
            "title": "インド分割による南アジアの帰属意識と移住の再編",
            "description": "Partition of India Reshapes South Asian Identity and Migration<br>英領インドは宗教多数地域を基準にインドとパキスタンへ分割され、約一千万人が新国境を越えて移住し大規模な宗派暴力が起きた。"
        },
        {
            "start": "1950",
            "title": "世界的青年文化と消費社会の拡大",
            "description": "Expansion of Global Youth Culture and Consumer Society<br>戦後成長、レコード、映画、テレビ、安価なファッションが、若者を独立した消費層とする国際的な大衆文化を形成した。"
        },
        {
            "start": "1955",
            "title": "バンドン会議によるアジア・アフリカ連帯",
            "description": "Bandung Conference Promotes Afro-Asian Solidarity<br>アジア・アフリカ29か国・地域の代表がインドネシアのバンドンに集まり、反植民地主義、平和共存、経済文化協力を協議した。"
        },
        {
            "start": "1960",
            "title": "第二波フェミニズムの国際的拡大",
            "description": "International Expansion of Second-Wave Feminism<br>女性団体は雇用、教育、リプロダクティブ・ライツ、家事労働、法的平等をめぐって運動し、国際会議と組織網を築いた。"
        },
        {
            "start": "1964",
            "title": "世界的公民権・反差別運動の強化",
            "description": "Strengthening of Global Civil-Rights and Anti-Discrimination Movements<br>米国公民権運動、反アパルトヘイト闘争、各地の少数者組織がボイコット、行進、訴訟、立法を通じて平等を求めた。"
        },
        {
            "start": "1968",
            "title": "世界的な1968年抗議運動",
            "description": "Global Protest Movements of 1968<br>学生、労働者、反戦団体がパリ、プラハ、メキシコ市、米国などで占拠、ストライキ、街頭デモを行った。"
        },
        {
            "start": "1969",
            "title": "ストーンウォール蜂起と現代LGBTQ権利運動",
            "description": "Stonewall Uprising and the Modern LGBTQ Rights Movement<br>ニューヨークのストーンウォール・インへの警察突入後、客と地域住民が数夜にわたり抗議し、新たな同性愛解放団体とプライド行進を生んだ。"
        },
        {
            "start": "1970",
            "title": "現代環境運動の大衆政治化",
            "description": "Modern Environmentalism Enters Mass Politics<br>公害事件、生態研究、『沈黙の春』などがアースデイ、環境団体、主要環境法を生み、環境問題を主流政治へ入れた。"
        },
        {
            "start": "1977",
            "title": "パーソナルコンピューティング文化の世界的拡大",
            "description": "Global Expansion of Personal-Computing Culture<br>マイクロプロセッサ、家庭用コンピュータ、ソフトウェア産業により、個人が職場、学校、家庭でプログラム可能な計算機を使うようになった。"
        },
        {
            "start": "1980",
            "title": "衛星テレビと世界的メディア網の拡大",
            "description": "Expansion of Satellite Television and Global Media Networks<br>通信衛星とケーブルテレビがニュース、スポーツ、音楽、娯楽を国境越しに生中継し、世界的メディアブランドを生んだ。"
        },
        {
            "start": "1989",
            "title": "ワールド・ワイド・ウェブの提案",
            "description": "Proposal of the World Wide Web<br>ティム・バーナーズ＝リーはCERNで、ハイパーテキスト、統一資源識別子、通信プロトコルによりインターネット文書を結ぶ構想を提案した。"
        },
        {
            "start": "1991",
            "title": "ワールド・ワイド・ウェブの一般公開",
            "description": "The World Wide Web Opens to the Public<br>CERNがウェブのソフトウェアと仕様を一般利用へ開放し、初期ブラウザとサーバーが研究機関外へ普及した。"
        },
        {
            "start": "1995",
            "title": "商用インターネットと移動通信の加速",
            "description": "Acceleration of the Commercial Internet and Mobile Communications<br>インターネット商用化、携帯電話網、SMSが急拡大し、電子メール、ポータルサイト、携帯電話が日常生活へ入った。"
        },
        {
            "start": "2001",
            "title": "ウィキペディアの開設",
            "description": "Wikipedia Launches<br>ジミー・ウェールズとラリー・サンガーが、誰でも共同編集でき自由ライセンスで公開されるオンライン百科事典を開設した。"
        },
        {
            "start": "2004",
            "title": "ソーシャルメディア時代の始まり",
            "description": "Beginning of the Social-Media Era<br>Friendster、MySpace、Facebook、YouTubeなどが、利用者によるプロフィール、関係網、共有コンテンツの作成を可能にした。"
        },
        {
            "start": "2007",
            "title": "スマートフォン中心のデジタル生活加速",
            "description": "Acceleration of Smartphone-Centered Digital Life<br>タッチ式スマートフォン、アプリストア、モバイル通信がカメラ、地図、決済、通信、ネットサービスを携帯端末へ集約した。"
        },
        {
            "start": "2010",
            "title": "ストリーミングとプラットフォーム文化の世界化",
            "description": "Globalization of Streaming and Platform Culture<br>映像・音楽配信、定額サービス、アルゴリズム推薦が放送や物理媒体の一部を置き換え、コンテンツの世界同時配信を可能にした。"
        },
        {
            "start": "2017",
            "title": "#MeTooの世界的運動化",
            "description": "#MeToo Becomes a Global Movement<br>多くの女性が「#MeToo」でセクハラや性暴力被害を公表し、各国で報道調査、職場の責任追及、法制度議論が進んだ。"
        },
        {
            "start": "2020",
            "title": "リモートワーク・オンライン教育・デジタル社会生活の急増",
            "description": "Surge in Remote Work, Online Education, and Digital Social Life<br>新型コロナ期のロックダウンと距離確保により、ビデオ会議、クラウド協働、遠隔授業、電子商取引、オンライン娯楽が世界的に急増した。"
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
            "description": "Battle of Kadesh<br>エジプト王ラムセス2世とヒッタイト王ムワタリ2世がシリアのカデシュ付近で戦い、決着はつかず、後に和平条約を結んだ。"
        },
        {
            "start": "-1199",
            "end": "-1149",
            "title": "海の民と東地中海の紛争",
            "description": "Sea Peoples and Eastern Mediterranean Conflicts<br>出自の異なる海上武装集団がアナトリア、レヴァント、エジプト沿岸を襲い、宮殿国家の崩壊と人口移動が同時に進んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0733",
            "end": "-0731",
            "title": "アッシリアによるレヴァント征服",
            "description": "Assyrian Conquest of the Levant<br>新アッシリア軍はシリア、フェニキア、イスラエル、ユダの一部を征服し、属州・従属国化して住民移送を行った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0498",
            "end": "-0448",
            "title": "ペルシア戦争",
            "description": "Greco-Persian Wars<br>アケメネス朝はギリシア本土へ大規模侵攻したが、アテネとスパルタを中心とする連合軍がマラトン、サラミス、プラタイアなどで撃退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0430",
            "end": "-0403",
            "title": "ペロポネソス戦争",
            "description": "Peloponnesian War<br>アテネ帝国とスパルタ率いるペロポネソス同盟が長期戦を行い、シチリア遠征失敗とペルシア支援によりアテネが降伏した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0333",
            "end": "-0322",
            "title": "アレクサンドロス大王の征服",
            "description": "Conquests of Alexander the Great<br>アレクサンドロスはマケドニア軍を率いて小アジアへ渡り、ダレイオス3世を破ってエジプトとペルシア帝国を征服し、インダスまで遠征した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0263",
            "end": "-0145",
            "title": "ポエニ戦争",
            "description": "Punic Wars<br>ローマとカルタゴは西地中海覇権をめぐり三度戦い、ハンニバルのイタリア侵攻は敗れ、最後にカルタゴが破壊された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0220",
            "title": "秦の統一戦争",
            "description": "Qin Wars of Unification<br>商鞅改革後の秦は大規模軍と郡県行政を用い、韓・趙・魏・楚・燕・斉を相次いで滅ぼして中国を統一した。"
        },
        {
            "start": "-0205",
            "end": "-0201",
            "title": "楚漢戦争",
            "description": "Chu–Han Contention<br>秦滅亡後、項羽と劉邦が天下を争い、劉邦が垓下で楚軍を破って漢王朝を建てた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0057",
            "end": "-0049",
            "title": "カエサルのガリア戦争",
            "description": "Caesar's Gallic Wars<br>ユリウス・カエサルはガリア諸部族を征服し、アレシアでウェルキンゲトリクス率いる連合抵抗を破った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0048",
            "end": "-0044",
            "title": "カエサルの内戦",
            "description": "Caesar's Civil War<br>カエサルはルビコン川を渡ってポンペイウスと元老院派に戦い、ファルサロスで勝利して事実上の独裁者となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "-0030",
            "title": "アクティウムの海戦",
            "description": "Battle of Actium<br>オクタウィアヌス艦隊がギリシア西岸でアントニウスとクレオパトラの連合軍を破り、共和政最後の内戦を終結させた。"
        },
        {
            "start": "0066",
            "end": "0073",
            "title": "第一次ユダヤ戦争",
            "description": "First Jewish–Roman War<br>ユダヤ属州がローマ支配に反乱し、ローマ軍はエルサレムを陥落させ第二神殿を破壊し、後にマサダの抵抗を鎮圧した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0184",
            "title": "黄巾の乱",
            "description": "Yellow Turban Rebellion<br>張角の太平道信徒が後漢各地で一斉蜂起し、朝廷は地方豪族に鎮圧を頼ったため軍閥割拠が進んだ。"
        },
        {
            "start": "0220",
            "end": "0280",
            "title": "三国時代の戦争",
            "description": "Wars of the Three Kingdoms<br>魏・蜀・呉が中国支配を争い、赤壁などで三国鼎立が形成され、最終的に西晋が呉を滅ぼした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0376",
            "end": "0476",
            "title": "民族移動期の侵入と西ローマ支配の崩壊",
            "description": "Migration-Period Invasions and the Collapse of Western Roman Rule<br>ゴート、ヴァンダル、フランクなどがローマ国境を越えて王国を築き、476年に西ローマ皇帝が廃位された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0533",
            "end": "0554",
            "title": "ユスティニアヌスの再征服",
            "description": "Justinian's Reconquests<br>ビザンツ皇帝ユスティニアヌスはベリサリウスらを派遣し、ヴァンダル領北アフリカ、東ゴート領イタリア、スペインの一部を再征服した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0602",
            "end": "0628",
            "title": "ビザンツ・ササン朝戦争",
            "description": "Byzantine–Sasanian Wars<br>ビザンツ帝国とササン朝はアルメニア、メソポタミア、シリアをめぐって反復戦争を行い、最後の大戦で双方が疲弊した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0632",
            "end": "0750",
            "title": "初期イスラム征服",
            "description": "Early Islamic Conquests<br>カリフの下のアラブ・ムスリム軍はササン朝を倒し、ビザンツからシリア、エジプト、北アフリカの広域を奪った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0711",
            "end": "0718",
            "title": "イスラム勢力のイベリア征服",
            "description": "Muslim Conquest of Iberia<br>ウマイヤ朝軍はジブラルタル海峡を渡って西ゴート王国を破り、イベリアの大部分にアル＝アンダルスを成立させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0755",
            "end": "0763",
            "title": "安史の乱",
            "description": "An Lushan Rebellion<br>安禄山と史思明が唐に反乱して洛陽・長安を占領し、唐朝は地方軍とウイグル援軍に頼って8年かけて鎮圧した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0793",
            "end": "1066",
            "title": "ヴァイキングの襲撃と征服",
            "description": "Viking Raids and Conquests<br>スカンディナヴィア戦士は長船でブリテン、アイルランド、フランク、東欧を襲撃・定住し、各地にノース人政権を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "0907",
            "end": "0960",
            "title": "五代十国の戦乱",
            "description": "Wars of the Five Dynasties and Ten Kingdoms<br>唐滅亡後、北方軍閥が五王朝を相次いで建て、南方などの諸国が並立し、宋が大部分を統一するまで戦乱が続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1066",
            "title": "ノルマン・コンクエスト",
            "description": "Norman Conquest of England<br>ノルマンディー公ウィリアムはヘイスティングズでハロルド2世を破り、城塞建設と土地再分配でイングランドを掌握した。"
        },
        {
            "start": "1096",
            "end": "1291",
            "title": "東地中海の十字軍戦争",
            "description": "Crusader Wars in the Eastern Mediterranean<br>西欧十字軍はレヴァントへ繰り返し遠征し、セルジューク、ファーティマ、ザンギー、アイユーブ、マムルーク諸勢力とエルサレムや沿岸拠点を争った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1180",
            "end": "1185",
            "title": "源平合戦",
            "description": "Genpei War<br>源氏と平氏が朝廷支配を争い、源氏が壇ノ浦で平氏主力を滅ぼし、後に鎌倉幕府を開いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1206",
            "end": "1279",
            "title": "モンゴルのユーラシア征服",
            "description": "Mongol Conquests across Eurasia<br>チンギス・ハンと後継者は騎馬軍で中央アジア、華北、イラン、ルーシ、西アジアの一部を征服し、史上最大の連続陸上帝国を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1209",
            "end": "1229",
            "title": "アルビジョワ十字軍",
            "description": "Albigensian Crusade<br>教皇は北フランス諸侯にラングドックのカタリ派討伐を呼びかけ、拠点を破壊してフランス王権の南部支配を強めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1236",
            "end": "1242",
            "title": "モンゴルのヨーロッパ侵攻",
            "description": "Mongol Invasion of Europe<br>バトゥとスブタイ率いるモンゴル軍はルーシ、ポーランド、ハンガリー軍を破って中欧へ進出したが、大ハーン死去などを受け撤退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1274",
            "end": "1281",
            "title": "元寇",
            "description": "Mongol Invasions of Japan<br>元・高麗連合軍は二度九州へ来襲したが、日本側の抵抗、補給難、暴風によりいずれも失敗した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1337",
            "end": "1453",
            "title": "百年戦争",
            "description": "Hundred Years' War<br>英仏王家がフランス王位と領土をめぐって断続的に戦い、長弓、火砲、常備軍が戦争を変え、最終的にフランスが大半を奪回した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1351",
            "end": "1368",
            "title": "紅巾の乱",
            "description": "Red Turban Rebellions<br>元末に白蓮教系の紅巾軍が各地で蜂起し、群雄争いを勝ち抜いた朱元璋が明を建てた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1370",
            "end": "1405",
            "title": "ティムールの征服",
            "description": "Conquests of Timur<br>ティムールはサマルカンドを拠点に中央アジア、イラン、メソポタミア、北インド、アナトリアを征服し、広大だが短命な帝国を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1419",
            "end": "1434",
            "title": "フス戦争",
            "description": "Hussite Wars<br>ヤン・フス処刑後、ボヘミアのフス派はカトリック・帝国軍に抗し、戦車堡戦術で十字軍を繰り返し撃退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1455",
            "end": "1487",
            "title": "薔薇戦争",
            "description": "Wars of the Roses<br>イングランド王家のランカスター家とヨーク家が王位を争い、ボズワースでヘンリー・テューダーが勝利してテューダー朝を開いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1467",
            "end": "1615",
            "title": "日本戦国時代の戦争",
            "description": "Wars of Japan's Sengoku Period<br>室町幕府の権威崩壊後、各地の大名が城郭、足軽、鉄砲で争い、織田信長、豊臣秀吉、徳川家康が統一を進めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1492",
            "title": "グラナダ陥落",
            "description": "Fall of Granada<br>カスティーリャ・アラゴン軍がグラナダのナスル朝を包囲降伏させ、イベリア最後のイスラム国家が滅亡した。"
        },
        {
            "start": "1494",
            "end": "1559",
            "title": "イタリア戦争",
            "description": "Italian Wars<br>フランス、スペイン、神聖ローマ帝国、イタリア諸国がミラノ、ナポリ、半島覇権を争い、最終的にスペインが優位となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1519",
            "end": "1521",
            "title": "スペインによるアステカ帝国征服",
            "description": "Spanish Conquest of the Aztec Empire<br>エルナン・コルテスとトラスカラなどの先住民同盟軍がテノチティトランを包囲し、戦争と天然痘でメシカ政権が崩壊した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1524",
            "end": "1525",
            "title": "ドイツ農民戦争",
            "description": "German Peasants' War<br>ドイツ中南部の農民、鉱夫、都市民が『十二箇条』などで領主負担軽減を求めたが、諸侯軍に鎮圧された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1532",
            "end": "1572",
            "title": "スペインによるインカ帝国征服",
            "description": "Spanish Conquest of the Inca Empire<br>フランシスコ・ピサロはアタワルパを捕らえ、インカ内戦と現地同盟を利用してクスコを占領し植民地支配を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1562",
            "end": "1598",
            "title": "フランス宗教戦争",
            "description": "French Wars of Religion<br>フランスのカトリック派とユグノー派が長期内戦を行い、サン・バルテルミの虐殺後も続いたが、アンリ4世即位とナント勅令で収束した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1568",
            "end": "1648",
            "title": "ネーデルラント反乱と八十年戦争",
            "description": "Dutch Revolt and Eighty Years' War<br>ネーデルラント諸州がスペイン・ハプスブルクの課税と宗教政策に反乱し、北部七州はオランダ共和国を建て独立承認を得た。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1592",
            "end": "1598",
            "title": "文禄・慶長の役",
            "description": "Imjin War<br>豊臣秀吉が二度朝鮮へ侵攻したが、朝鮮水軍・義兵と明援軍が征服を阻み、秀吉死後に日本軍は撤退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1618",
            "end": "1648",
            "title": "三十年戦争",
            "description": "Thirty Years' War<br>ボヘミアの宗教対立が帝国と欧州列強を巻き込む大戦となり、ドイツ諸地域を荒廃させ、ウェストファリア条約で終結した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1640",
            "end": "1668",
            "title": "ポルトガル王政復古戦争",
            "description": "Portuguese Restoration War<br>ポルトガル貴族がスペイン・ハプスブルク支配を倒してブラガンサ朝を立て、長期国境戦争の末に独立を回復した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1642",
            "end": "1651",
            "title": "イングランド内戦",
            "description": "English Civil Wars<br>チャールズ1世と議会が課税、宗教、主権をめぐって戦い、議会の新型軍が勝利し、国王処刑後に共和政が成立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1644",
            "title": "明清交替の戦争",
            "description": "Ming–Qing Transition Wars<br>李自成が北京を陥落させ明が滅びると、清軍が入関し、南明、農民軍、地方勢力と長期戦を行って中国を掌握した。"
        },
        {
            "start": "1652",
            "end": "1674",
            "title": "英蘭戦争",
            "description": "Anglo-Dutch Wars<br>イングランドとオランダ共和国は海運、植民地、商業覇権をめぐり三度の主要海戦を行い、北海と英仏海峡で艦隊が激突した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1683",
            "title": "ウィーンの戦い",
            "description": "Battle of Vienna<br>オスマン大軍がウィーンを包囲したが、ポーランド王ヤン3世ソビェスキ率いる連合軍が救援し、中欧への進出を阻止した。"
        },
        {
            "start": "1688",
            "end": "1689",
            "title": "名誉革命",
            "description": "Glorious Revolution<br>イングランド議会勢力がオラニエ公ウィリアムを招き、ジェームズ2世は亡命し、ウィリアムとメアリーが議会条件を受けて共同即位した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1700",
            "end": "1721",
            "title": "大北方戦争",
            "description": "Great Northern War<br>ロシア、デンマーク、ザクセンなどがスウェーデンのバルト海覇権に挑み、ピョートル1世はポルタヴァで勝利して沿岸領土を得た。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1701",
            "end": "1714",
            "title": "スペイン継承戦争",
            "description": "War of the Spanish Succession<br>スペイン・ハプスブルク断絶後、ブルボン派とオーストリア・ハプスブルク派が王位と勢力均衡を争い、フェリペ5世が即位を保つ代わりにフランス継承権を放棄した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1756",
            "end": "1763",
            "title": "七年戦争",
            "description": "Seven Years' War<br>英国とフランスが欧州、北米、カリブ、インド、海上で植民地覇権を争い、プロイセンはオーストリア、ロシアなどの連合に抗戦した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1775",
            "end": "1783",
            "title": "アメリカ独立戦争",
            "description": "American Revolutionary War<br>十三植民地は英国課税に反抗して独立を宣言し、フランスなどの支援を得てヨークタウンで英主力を降伏させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1789",
            "end": "1799",
            "title": "フランス革命",
            "description": "French Revolution<br>財政危機から三部会が招集され、バスティーユ襲撃を経て革命は封建的特権と王政を廃し共和国を成立させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1791",
            "end": "1804",
            "title": "ハイチ革命",
            "description": "Haitian Revolution<br>サン＝ドマングの奴隷化された人々が蜂起し、フランス植民者、スペイン・英国軍、ナポレオン軍と戦って独立ハイチを建てた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1792",
            "end": "1815",
            "title": "フランス革命戦争とナポレオン戦争",
            "description": "French Revolutionary and Napoleonic Wars<br>欧州君主国は革命フランスとナポレオン帝国に対し反仏同盟を重ね、欧州と海外で戦い、ワーテルローでナポレオンが敗れた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1804",
            "end": "1813",
            "title": "第一次セルビア蜂起",
            "description": "First Serbian Uprising<br>カラジョルジェ率いるセルビア人がオスマン地方勢力と帝国支配に蜂起し、一時自治政府を築いたが鎮圧された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1808",
            "end": "1833",
            "title": "スペイン領アメリカ独立戦争",
            "description": "Spanish American Wars of Independence<br>ボリバル、サン・マルティンらの軍がスペイン領アメリカ各地で王党派を破り、メキシコから南米に多数の共和国を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1821",
            "end": "1829",
            "title": "ギリシア独立戦争",
            "description": "Greek War of Independence<br>ギリシア人がオスマン支配に蜂起し、欧州義勇兵と英仏露海軍の介入後、独立したギリシア王国が承認された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1839",
            "end": "1842",
            "title": "第一次アヘン戦争",
            "description": "First Opium War<br>清の禁煙政策と貿易紛争を理由に英国が中国沿岸を攻撃し、海軍力で南京条約と開港を強制した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1848",
            "end": "1849",
            "title": "1848年ヨーロッパ革命",
            "description": "European Revolutions of 1848<br>パリ革命を契機にドイツ諸邦、オーストリア領、イタリアなどで蜂起が起こり、憲法、民族統一、社会改革、参政権拡大が求められた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1850",
            "end": "1864",
            "title": "太平天国の乱",
            "description": "Taiping Rebellion<br>洪秀全の太平軍は華南で蜂起して南京に政権を置き、清朝は湘軍・淮軍など地方軍を用いて14年かけ鎮圧した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1853",
            "end": "1856",
            "title": "クリミア戦争",
            "description": "Crimean War<br>ロシアとオスマン帝国の戦争に英仏・サルデーニャがオスマン側で参戦し、セヴァストポリを包囲してロシアを講和へ追い込んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1856",
            "end": "1860",
            "title": "第二次アヘン戦争",
            "description": "Second Opium War<br>英仏が外交・貿易問題で清と再戦し、北京を占領して開港拡大、使節駐京、宣教権拡大を強制した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1857",
            "end": "1858",
            "title": "インド大反乱",
            "description": "Indian Rebellion of 1857<br>東インド会社のインド兵反乱が北インド各地の反英蜂起へ広がり、鎮圧後に会社統治が廃され英国王室直轄となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1861",
            "end": "1865",
            "title": "南北戦争",
            "description": "American Civil War<br>南部奴隷州が脱退して連合国を作り、北軍が4年の戦争でこれを破って国家統一を維持し、奴隷制廃止へ至った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1864",
            "end": "1870",
            "title": "ドイツ統一戦争",
            "description": "Wars of German Unification<br>プロイセンはデンマーク、オーストリア、フランスとの戦争に勝ち、オーストリアを排除して北独・南独諸邦をドイツ帝国へ統合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1868",
            "end": "1869",
            "title": "戊辰戦争",
            "description": "Boshin War<br>新政府を支持する薩摩・長州などと徳川勢力が戦い、幕府側が北海道で降伏して明治政府が全国を掌握した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1870",
            "end": "1871",
            "title": "普仏戦争",
            "description": "Franco-Prussian War<br>プロイセン率いるドイツ軍がフランスを破りナポレオン3世を捕虜とし、パリを包囲してアルザス・ロレーヌ割譲を強いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1879",
            "end": "1884",
            "title": "太平洋戦争（南米）",
            "description": "War of the Pacific<br>チリが硝石資源と国境をめぐりペルー・ボリビアと戦い、勝利して沿岸領土を獲得した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1881",
            "end": "1899",
            "title": "マフディー戦争",
            "description": "Mahdist War<br>ムハンマド・アフマドがマフディーを称してスーダン蜂起を率い、英埃支配を倒して国家を建てたが、後に英埃連合軍に征服された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "清仏戦争",
            "description": "Sino-French War<br>フランスがベトナム支配をめぐり清と北部ベトナム、台湾、中国沿岸で戦い、講和後に清はフランスのベトナム保護権を認めた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1894",
            "end": "1895",
            "title": "日清戦争",
            "description": "First Sino-Japanese War<br>清と日本が朝鮮半島の影響力を争い、日本が陸海で勝利し、下関条約で清は朝鮮独立承認と台湾割譲を行った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1896",
            "title": "アドワの戦い",
            "description": "Battle of Adwa<br>エチオピア皇帝メネリク2世の軍がアドワでイタリア侵略軍を破り、イタリアに主権承認を強いた。"
        },
        {
            "start": "1899",
            "end": "1902",
            "title": "第二次ボーア戦争",
            "description": "Second Boer War<br>英国がトランスヴァールとオレンジ自由国のボーア共和国と戦い、正規戦・ゲリラ戦の末に両国を併合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1900",
            "end": "1901",
            "title": "義和団運動と列強干渉",
            "description": "Boxer Uprising and Foreign Intervention<br>義和団が華北でキリスト教徒と外国施設を襲い、清朝が公使館包囲を支持すると八か国連合軍が北京を占領し賠償・駐兵を強制した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1904",
            "end": "1905",
            "title": "日露戦争",
            "description": "Russo-Japanese War<br>日本とロシアが満洲・朝鮮の権益を争い、旅順、奉天、日本海海戦で日本が勝利し、米国仲介で講和した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1905",
            "title": "ロシア第一革命",
            "description": "Russian Revolution of 1905<br>「血の日曜日」後、ストライキ、農民騒乱、軍反乱がロシア全土に広がり、皇帝は国会を設けたが後に権限を制限した。"
        },
        {
            "start": "1910",
            "end": "1920",
            "title": "メキシコ革命",
            "description": "Mexican Revolution<br>ポルフィリオ・ディアス独裁への蜂起がマデロ、サパタ、ビリャ、カランサらの派閥戦争となり、1917年憲法へ至った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1911",
            "end": "1912",
            "title": "辛亥革命",
            "description": "Xinhai Revolution<br>武昌蜂起を契機に各省が独立し、革命派と清朝の交渉で宣統帝が退位して中華民国が成立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1912",
            "end": "1913",
            "title": "バルカン戦争",
            "description": "Balkan Wars<br>バルカン同盟がオスマン帝国を破って欧州領の大半を奪い、その後ブルガリアが分配をめぐり旧同盟国と戦って敗れた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1914-07-28",
            "end": "1918-11-11",
            "title": "第一次世界大戦",
            "description": "World War I<br>オーストリア＝ハンガリーの対セルビア宣戦から同盟が連鎖参戦し、連合国と中央同盟国が欧州、中東、アフリカ、海上で総力戦を行い中央同盟国が敗れた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1916",
            "title": "イースター蜂起",
            "description": "Easter Rising<br>アイルランド共和派がダブリンの公共施設を占拠して共和国を宣言し、英軍が一週間で鎮圧したが、指導者処刑が独立運動を強めた。"
        },
        {
            "start": "1917-03-08",
            "end": "1917-11-07",
            "title": "ロシア革命",
            "description": "Russian Revolution<br>二月革命で皇帝制が倒れ臨時政府が成立し、十月革命でボリシェヴィキがペトログラードの権力を奪ってソビエト政府を宣言した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1918",
            "end": "1921",
            "title": "ロシア内戦",
            "description": "Russian Civil War<br>ボリシェヴィキ赤軍は白軍、民族独立軍、外国干渉軍と旧ロシア帝国各地で戦い、最終的に中核地域を掌握した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1919",
            "end": "1923",
            "title": "トルコ独立戦争",
            "description": "Turkish War of Independence<br>ムスタファ・ケマル率いる民族軍がギリシア、アルメニア、フランス、連合国の占領に抵抗し、ローザンヌ条約で新国境を承認させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1927",
            "end": "1949",
            "title": "国共内戦",
            "description": "Chinese Civil War<br>国民党と共産党は統一戦線崩壊後に内戦を続け、対日戦では一時協力し、1949年に共産党が大陸を掌握して国民政府が台湾へ移った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1931",
            "end": "1945",
            "title": "日本の東アジア拡張戦争",
            "description": "Japan's Wars of Expansion in East Asia<br>日本軍は満洲を占領して中国戦線を拡大し、さらに東南アジアと太平洋植民地を攻撃して連合国との全面戦争へ進んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1935",
            "end": "1936",
            "title": "第二次イタリア・エチオピア戦争",
            "description": "Second Italo-Ethiopian War<br>ムッソリーニのイタリアがエリトリアとソマリアからエチオピアへ侵攻し、空爆と化学兵器を用いてアディスアベバを占領・併合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1936",
            "end": "1939",
            "title": "スペイン内戦",
            "description": "Spanish Civil War<br>共和国政府とフランコ率いる国民軍が独伊・ソ連などの介入を受けて戦い、国民軍が勝利して独裁政権を築いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1939-09-01",
            "end": "1945-09-02",
            "title": "第二次世界大戦",
            "description": "World War II<br>ドイツのポーランド侵攻で欧州戦争が始まり、枢軸国と連合国が世界規模の総力戦を行い、ナチスはホロコーストを実施し、独日が降伏した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-06-22",
            "end": "1945-05-09",
            "title": "第二次世界大戦の独ソ戦",
            "description": "Eastern Front of World War II<br>ナチス・ドイツのソ連侵攻後、モスクワ、スターリングラード、クルスク、東欧で巨大な陸戦が行われ、ソ連軍がベルリンへ進攻した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1941-12-07",
            "end": "1945-09-02",
            "title": "太平洋戦争",
            "description": "Pacific War<br>日本が真珠湾と東南アジアを攻撃し、米英中豪などと太平洋・アジアで海陸空戦を行い、最終的に降伏した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1945",
            "end": "1949",
            "title": "インドネシア独立戦争",
            "description": "Indonesian National Revolution<br>スカルノとハッタの独立宣言後、共和国軍が植民地支配復活を図るオランダ軍と戦い、国際圧力で主権移譲に至った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1946",
            "end": "1954",
            "title": "第一次インドシナ戦争",
            "description": "First Indochina War<br>ホー・チ・ミン率いるベトミンが仏植民地軍とベトナム、ラオス、カンボジアで戦い、ディエンビエンフー後にフランスが撤退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1949",
            "title": "第一次中東戦争",
            "description": "First Arab–Israeli War<br>イスラエル建国宣言後、エジプト、トランスヨルダン、シリア、レバノン、イラク軍が旧委任統治領へ入り、休戦線成立とパレスチナ人の大規模避難で終わった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1947",
            "end": "1991",
            "title": "冷戦",
            "description": "Cold War<br>米国とソ連は核抑止、軍事同盟、代理戦争、経済競争、宣伝で世界的に対立したが、直接の全面戦争は避けた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1948",
            "end": "1960",
            "title": "マラヤ危機",
            "description": "Malayan Emergency<br>マラヤ共産党ゲリラが英国植民地政府と戦い、英側は軍事掃討、村落移転、政治改革で反乱を弱体化した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1950-06-25",
            "end": "1953-07-27",
            "title": "朝鮮戦争",
            "description": "Korean War<br>北朝鮮軍が韓国へ侵攻し、国連軍と中国人民志願軍が参戦し、戦線はほぼ元の境界付近で停戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1952",
            "end": "1960",
            "title": "マウマウ蜂起",
            "description": "Mau Mau Uprising<br>ケニアで主にキクユ人の武装勢力が英植民地支配と土地収奪に抵抗し、政府は非常事態と大量拘禁で鎮圧した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1954",
            "end": "1962",
            "title": "アルジェリア戦争",
            "description": "Algerian War<br>民族解放戦線がゲリラ・都市戦で仏植民地支配に抵抗し、仏軍の大規模投入と拷問・政治危機を経てアルジェリアが独立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1955",
            "end": "1975",
            "title": "ベトナム戦争",
            "description": "Vietnam War<br>北ベトナムと南ベトナム解放民族戦線が米国支援の南ベトナム政府と戦い、米軍介入・撤退後、1975年に北側がサイゴンを占領した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1956",
            "title": "スエズ危機",
            "description": "Suez Crisis<br>ナセル大統領がスエズ運河を国有化すると、イスラエル、英国、フランスがエジプトを攻撃したが、米ソ・国連の圧力で撤退した。"
        },
        {
            "start": "1956",
            "title": "ハンガリー動乱",
            "description": "Hungarian Revolution of 1956<br>ブダペストの学生・労働者が改革とソ連支配離脱を求め蜂起したが、ソ連軍が再侵入してナジ政権を倒した。"
        },
        {
            "start": "1959",
            "title": "キューバ革命",
            "description": "Cuban Revolution<br>フィデル・カストロの7月26日運動がゲリラ戦でバティスタ政権を倒し、ハバナに革命政府を樹立した。"
        },
        {
            "start": "1960",
            "end": "1965",
            "title": "コンゴ危機",
            "description": "Congo Crisis<br>ベルギー領コンゴ独立後、軍反乱、カタンガ分離、ベルギー・国連介入、ルムンバ殺害を経てモブツが権力を握った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1961",
            "end": "1974",
            "title": "ポルトガル植民地戦争",
            "description": "Portuguese Colonial War<br>アンゴラ、ギニアビサウ、モザンビークの独立運動がポルトガル軍と長期戦を行い、戦争がカーネーション革命と脱植民地化を促した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1962-10-16",
            "end": "1962-10-28",
            "title": "キューバ危機",
            "description": "Cuban Missile Crisis<br>米国がキューバのソ連核ミサイルを発見して海上封鎖を行い、13日間の対峙の末にミサイル撤去と安全保証で合意した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1965",
            "end": "1966",
            "title": "インドネシア大量殺害と政治転換",
            "description": "Indonesian Mass Killings and Political Transition<br>9月30日事件後、軍と協力勢力が共産党員や同調者とされた人々を大量殺害し、スハルトがスカルノに代わって権力を握った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1967-06-05",
            "end": "1967-06-10",
            "title": "第三次中東戦争",
            "description": "Six-Day War<br>イスラエルがエジプト、シリア、ヨルダンへ先制攻撃し、6日間でシナイ、ガザ、西岸、東エルサレム、ゴラン高原を占領した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1968",
            "title": "プラハの春とワルシャワ条約機構軍侵攻",
            "description": "Prague Spring and Warsaw Pact Invasion<br>ドゥプチェク政権がチェコスロヴァキアで「人間の顔をした社会主義」を進めたが、ソ連主導のワルシャワ条約機構軍が侵攻し改革を終わらせた。"
        },
        {
            "start": "1971",
            "title": "バングラデシュ独立戦争",
            "description": "Bangladesh Liberation War<br>パキスタン軍が東パキスタン自治運動を弾圧して大量虐殺と難民を生み、ベンガル人ゲリラとインド軍が最終的に降伏させた。"
        },
        {
            "start": "1973-10-06",
            "end": "1973-10-25",
            "title": "第四次中東戦争",
            "description": "Yom Kippur War<br>エジプトとシリアが贖罪日にイスラエル占領地を奇襲し、初期突破後にイスラエルが反攻し、米ソ仲介で停戦した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1990",
            "title": "レバノン内戦",
            "description": "Lebanese Civil War<br>レバノンのキリスト教、ムスリム、パレスチナ、左派民兵とシリア・イスラエルなどが長期混戦し、ターイフ合意後に国家再建が進んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1975",
            "end": "1979",
            "title": "クメール・ルージュ支配下のカンボジア虐殺",
            "description": "Cambodian Genocide under the Khmer Rouge<br>クメール・ルージュは都市住民を農村へ強制移住させ、集団労働、処刑、飢餓、迫害により約150万～200万人を死亡させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1978",
            "end": "1989",
            "title": "ソ連・アフガニスタン戦争",
            "description": "Soviet–Afghan War<br>ソ連はアフガニスタン共産政権を支援して出兵し、米国・パキスタン・湾岸諸国支援のムジャヒディンと戦った後撤退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1979",
            "title": "イラン革命",
            "description": "Iranian Revolution<br>ストライキ、デモ、宗教的反対運動でパフラヴィー国王が出国し、ホメイニ帰国後に住民投票でイスラム共和国が成立した。"
        },
        {
            "start": "1980",
            "end": "1988",
            "title": "イラン・イラク戦争",
            "description": "Iran–Iraq War<br>サダム政権のイラクが革命後のイランへ侵攻し、8年の塹壕戦、都市ミサイル攻撃、化学兵器使用の末に戦前国境へ戻った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1982",
            "title": "フォークランド紛争",
            "description": "Falklands War<br>アルゼンチンがフォークランド諸島を占領すると、英国が機動艦隊を派遣して奪回し、守備隊を降伏させた。"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第一次インティファーダ",
            "description": "First Intifada<br>西岸とガザのパレスチナ人がデモ、スト、ボイコット、投石でイスラエル占領に抵抗し、イスラエル軍は逮捕と武力で対応した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1989",
            "title": "天安門抗議と武力鎮圧",
            "description": "Tiananmen Protests and Crackdown<br>学生と市民が北京天安門広場などで反腐敗、政治改革、言論自由を求め、6月初めに軍が北京へ入り武力で排除した。"
        },
        {
            "start": "1989",
            "title": "東欧共産政権の崩壊",
            "description": "Collapse of Communist Regimes in Eastern Europe<br>ポーランド、ハンガリー、東ドイツ、チェコスロヴァキア、ブルガリア、ルーマニアの共産政権が選挙、交渉、大衆抗議で相次いで崩壊した。"
        },
        {
            "start": "1990",
            "end": "1991",
            "title": "湾岸戦争",
            "description": "Gulf War<br>イラクがクウェートを併合すると、米国主導多国籍軍が空爆と地上戦を行い、数週間でイラク軍を撤退させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1991",
            "end": "2001",
            "title": "ユーゴスラビア紛争",
            "description": "Yugoslav Wars<br>ユーゴスラビア解体に伴い、スロベニア、クロアチア、ボスニア、コソボなどで民族戦争、包囲、追放、大規模残虐行為が起きた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1994",
            "title": "ルワンダのツチに対するジェノサイド",
            "description": "Genocide against the Tutsi in Rwanda<br>過激派フツ政権と民兵が約100日間にツチと穏健派フツを組織的に殺害し、ルワンダ愛国戦線が政府軍を破った。"
        },
        {
            "start": "1994",
            "end": "1996",
            "title": "第一次チェチェン戦争",
            "description": "First Chechen War<br>ロシア軍が独立を宣言したチェチェンの支配回復を図り、グロズヌイで激戦となり、停戦して一時撤退した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2000",
            "title": "エリトリア・エチオピア戦争",
            "description": "Eritrean–Ethiopian War<br>エリトリアとエチオピアがバドメ周辺の国境をめぐり大規模正規戦を行い、停戦後に国際委員会が境界を裁定した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1998",
            "end": "2003",
            "title": "第二次コンゴ戦争",
            "description": "Second Congo War<br>コンゴ政府、反政府勢力、複数アフリカ諸国軍が地域戦争に入り、領土・鉱物争奪と民兵暴力で数百万人が死亡・避難した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "1999",
            "title": "コソボ戦争とNATO介入",
            "description": "Kosovo War and NATO Intervention<br>ユーゴ軍とコソボ・アルバニア武装勢力が戦い大規模追放が起こり、NATO空爆後にセルビア軍がコソボから撤退した。"
        },
        {
            "start": "2001-09-11",
            "title": "9月11日同時多発テロ",
            "description": "September 11 Attacks<br>アルカイダ実行犯が旅客機4機を乗っ取り、ニューヨーク世界貿易センターと国防総省へ突入させ、別の1機はペンシルベニアに墜落し約3000人が死亡した。"
        },
        {
            "start": "2001-10-07",
            "end": "2021-08-30",
            "title": "アフガニスタン戦争",
            "description": "War in Afghanistan<br>米国と同盟国は9・11後、アルカイダを庇護したタリバン政権を倒したが長期反乱戦となり、外国軍撤退後にタリバンが再掌権した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003-03-20",
            "end": "2011-12-18",
            "title": "イラク戦争",
            "description": "Iraq War<br>米英などが大量破壊兵器保有を理由にイラクへ侵攻してサダム政権を倒し、その後占領、反乱、宗派戦争が長年続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2003",
            "end": "2005",
            "title": "ダルフール戦争と大規模残虐行為",
            "description": "Darfur War and Mass Atrocities<br>スーダンのダルフール反政府勢力が政府軍・ジャンジャウィード民兵と戦い、村落焼失、殺害、強制移住で深刻な人道危機となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2004",
            "end": "2014",
            "title": "パキスタン北部の反乱と紛争",
            "description": "Insurgency and Conflict in Northern Pakistan<br>パキスタン・タリバンなどが部族地域とカイバル・パクトゥンクワで政府・民間人を攻撃し、軍が度重なる掃討作戦を行った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2006",
            "title": "2006年レバノン戦争",
            "description": "2006 Lebanon War<br>ヒズボラの越境攻撃とイスラエル兵拘束後、イスラエルが南レバノンを空爆・侵攻し、ロケット・地上戦の末に国連決議で停戦した。"
        },
        {
            "start": "2008",
            "title": "ロシア・ジョージア戦争",
            "description": "Russo-Georgian War<br>ジョージア軍が南オセチアへ進攻するとロシアが大規模介入して本土へ入り、戦後に南オセチアとアブハジアを独立承認した。"
        },
        {
            "start": "2010-12-17",
            "end": "2012",
            "title": "アラブの春",
            "description": "Arab Spring<br>チュニジアの焼身事件から北アフリカ・西アジア各地へ大規模抗議が広がり、一部政権が倒れ、他では弾圧、改革、内戦となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011",
            "end": "2011",
            "title": "リビア内戦と国際介入",
            "description": "Libyan Civil War and International Intervention<br>反カダフィ蜂起が内戦となり、NATOが国連決議に基づき政府軍を空爆し、反政府側がトリポリを制圧してカダフィを殺害した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2011-03-15",
            "title": "シリア内戦の開始",
            "description": "Beginning of the Syrian Civil War<br>アサド政権が抗議を武力弾圧すると、離反兵や反政府勢力が武装蜂起し、多勢力が争う全国内戦へ拡大した。"
        },
        {
            "start": "2013",
            "end": "2019",
            "title": "ISISの領土拡張と「カリフ国」崩壊",
            "description": "ISIS Territorial Expansion and Collapse of Its Caliphate<br>「イスラム国」はイラク・シリアの広域を占領してカリフ国を宣言したが、国際連合の支援を受けた現地部隊が都市と領土を奪回した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "ロシアのクリミア併合とドンバス戦争開始",
            "description": "Russian Annexation of Crimea and Beginning of the Donbas War<br>ウクライナ政変後、ロシア軍がクリミアを掌握・併合し、ロシア支援の分離派がドネツクとルハンシクでウクライナ軍と戦い始めた。"
        },
        {
            "start": "2014",
            "end": "2017",
            "title": "イラクの対ISIS戦争",
            "description": "Iraq's War against ISIS<br>ISISがモスルとイラク北西部を占領すると、イラク軍、クルド部隊、民兵、国際連合が反攻して主要都市を奪回した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2014",
            "title": "イエメン内戦の激化",
            "description": "Escalation of the Yemeni Civil War<br>フーシ派がサヌアを掌握して政府を国外へ追い、サウジ主導連合が介入し、国家分裂と深刻な飢餓・疾病を招いた。"
        },
        {
            "start": "2017",
            "title": "ロヒンギャのミャンマー大量脱出",
            "description": "Mass Flight of the Rohingya from Myanmar<br>ミャンマー軍がラカイン州で「掃討作戦」を行い、村落焼却、殺害、性暴力により70万人超のロヒンギャがバングラデシュへ逃れた。"
        },
        {
            "start": "2020",
            "title": "第二次ナゴルノ・カラバフ戦争",
            "description": "Second Nagorno-Karabakh War<br>アゼルバイジャンがアルメニア・アルツァフ軍と戦い、無人機と砲撃で広域を奪回し、ロシア仲介停戦と平和維持部隊配置に至った。"
        },
        {
            "start": "2020",
            "end": "2022",
            "title": "ティグレ戦争",
            "description": "Tigray War<br>エチオピア連邦政府とティグレ人民解放戦線が戦い、エリトリア軍・地方部隊も介入し、戦闘と封鎖で深刻な民間被害と飢餓が起きた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#C0392B"
        },
        {
            "start": "2021",
            "title": "ミャンマー軍事クーデターと全国紛争",
            "description": "Myanmar Military Coup and Nationwide Conflict<br>ミャンマー軍が民選指導者を拘束して権力を奪い、抗議弾圧後に人民防衛隊と少数民族武装が全国で抵抗戦を拡大した。"
        },
        {
            "start": "2022-02-24",
            "title": "ロシアのウクライナ全面侵攻",
            "description": "Russia's Full-Scale Invasion of Ukraine<br>ロシアが北・東・南からウクライナへ全面侵攻してキーウ占領を図り、阻止された後は東南部の消耗戦と長距離攻撃へ移った。"
        },
        {
            "start": "2023-10-07",
            "title": "イスラエル・ハマス戦争の開始",
            "description": "Beginning of the Israel–Hamas War<br>ハマスなどがガザからイスラエル南部を攻撃して人質を取り、イスラエルはガザへ大規模空爆、封鎖、地上侵攻を開始した。"
        },
        {
            "start": "2023",
            "title": "スーダン戦争の開始",
            "description": "Beginning of the War in Sudan<br>スーダン国軍と即応支援部隊がハルツームで権力争いを始め、ダルフールなどへ拡大し、都市戦と民族暴力で大規模避難が起きた。"
        }
    ]
};

// 経済・技術・世界的交換
var tl_economy = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-3499",
            "title": "帆船輸送の拡大",
            "description": "Expansion of Sail-Powered Transport<br>初期の航海民は河川、沿岸、島嶼間で帆を用いて人と物資を運び、航行を櫂だけに依存しなくなった。"
        },
        {
            "start": "-2999",
            "title": "地域間商品交易の成長",
            "description": "Growth of Interregional Commodity Trade<br>石材、黒曜石、貝、塩、金属などが陸路・水路を通じて遠隔の集落間で交換された。"
        },
        {
            "start": "-1999",
            "title": "青銅交易網によるユーラシア地域の連結",
            "description": "Bronze Trade Networks Link Eurasian Regions<br>銅、錫、青銅製品が交易路を流通し、鉱山、製錬中心、宮殿国家、港を結んだ。"
        },
        {
            "start": "-1199",
            "title": "鉄生産による道具と戦争の変化",
            "description": "Iron Production Transforms Tools and Warfare<br>製鉄・鍛造技術の普及により、鉄製農具、斧、剣、槍先が農業と軍備に広く用いられた。"
        },
        {
            "start": "-0599",
            "title": "地中海・西アジアにおける鋳貨の普及",
            "description": "Spread of Coinage in the Mediterranean and Southwest Asia<br>リディアとギリシア都市国家が権威印を持つ規格化金属貨を鋳造し、ペルシアと地中海世界へ貨幣決済が広がった。"
        },
        {
            "start": "-0299",
            "title": "シルクロード交流の拡大",
            "description": "Expansion of Silk Road Exchange<br>漢、中国西域のオアシス、ペルシア、ローマ世界を結ぶ多段交易路が形成され、絹、馬、ガラス、宗教、使節が往来した。"
        },
        {
            "start": "-0199",
            "title": "インド洋季節風交易の発展",
            "description": "Growth of Indian Ocean Monsoon Trade<br>航海者は季節風を利用して紅海、東アフリカ、インド、東南アジアを往来し、香辛料、織物、象牙、金属を交易した。"
        },
        {
            "start": "-0099",
            "title": "ローマ道路・海運網による地中海統合",
            "description": "Roman Roads and Shipping Integrate the Mediterranean<br>ローマは軍道、橋、港を整備して地中海航路を保護し、軍隊、税穀、郵便、商品を帝国内で移動させた。"
        },
        {
            "start": "0100",
            "title": "中国における紙の普及",
            "description": "Spread of Paper in China<br>植物繊維から作る紙が竹簡、木簡、絹の一部を置き換え、行政文書、書簡、書籍の一般的媒体となった。"
        },
        {
            "start": "0200",
            "title": "ラクダ隊商によるサハラ交易の拡大",
            "description": "Expansion of Camel-Caravan Trade across the Sahara<br>ヒトコブラクダの隊商路が北アフリカのオアシスとサヘルを結び、塩、金、奴隷、馬、織物を運んだ。"
        },
        {
            "start": "0600",
            "title": "大運河網による中国統合",
            "description": "Grand Canal Network Integrates China<br>隋唐以後、南北を結ぶ運河が江南の穀物・商品を洛陽、長安、後の北京へ運び、首都と北方軍を支えた。"
        },
        {
            "start": "0700",
            "title": "インド洋商人ディアスポラ網の拡大",
            "description": "Expansion of Indian Ocean Merchant Diasporas<br>アラブ、ペルシア、インド、東南アジア、中国の商人が海外港に共同体を築き、親族、宗教、信用で海上交易を組織した。"
        },
        {
            "start": "0750",
            "title": "イスラム商業・信用網の拡大",
            "description": "Expansion of Islamic Commercial and Credit Networks<br>ムスリム商人は共同出資契約、為替、代理人、共通法慣行を用い、地中海、インド洋、サハラで長距離交易を行った。"
        },
        {
            "start": "0800",
            "title": "イスラム世界における製紙法の普及",
            "description": "Spread of Papermaking in the Islamic World<br>中央アジア経由の製紙法がサマルカンド、バグダード、カイロ、アル＝アンダルスに広まり、行政・学術・書籍市場へ安価な素材を供給した。"
        },
        {
            "start": "0900",
            "title": "中国における火薬兵器の発展開始",
            "description": "Development of Early Gunpowder Weapons in China<br>唐宋の錬丹術から生まれた火薬配合が火矢、火槍、爆弾、焼夷兵器に応用され、軍用化された。"
        },
        {
            "start": "1000",
            "title": "中国における航海羅針盤の発展",
            "description": "Development of the Maritime Compass in China<br>磁針が占卜・方位測定から航海へ転用され、夜間、曇天、沖合でも方向を判断できるようになった。"
        },
        {
            "start": "1100",
            "title": "中世ヨーロッパ商業革命",
            "description": "Medieval European Commercial Revolution<br>人口増加、都市復興、定期市、海港交易が拡大し、ギルド、商人法、貨幣、信用制度が各地で発達した。"
        },
        {
            "start": "1200",
            "title": "モンゴル時代のユーラシア交流",
            "description": "Trans-Eurasian Exchange under Mongol Rule<br>モンゴル諸ハン国が駅伝と交易路を保護し、商人、使節、職人、宗教者、技術が中国、中央・西アジア、欧州間を往来した。"
        },
        {
            "start": "1271",
            "end": "1295",
            "title": "マルコ・ポーロのユーラシア横断旅行",
            "description": "Marco Polo's Journey across Eurasia<br>ヴェネツィア商人マルコ・ポーロは中央アジア経由で元朝中国へ赴き、帰国後の旅行記がアジアの都市、宮廷、交易を欧州へ伝えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1300",
            "title": "為替手形と銀行商会の拡大",
            "description": "Expansion of Bills of Exchange and Banking Houses<br>イタリアなどの商人は為替手形、共同銀行、帳簿振替で都市間決済を行い、大量の硬貨運搬を避けた。"
        },
        {
            "start": "1405",
            "end": "1433",
            "title": "鄭和の遠征航海",
            "description": "Zheng He's Voyages<br>明の宦官鄭和は大型艦隊で東南アジア、インド洋、アラビア半島、東アフリカへ七度航海し、朝貢外交と交易を行った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1450",
            "title": "ヨーロッパ印刷革命",
            "description": "European Printing Revolution<br>金属活版印刷所が欧州都市へ急速に広がり、聖書、古典、パンフレット、教科書を大量生産して価格と複製時間を下げた。"
        },
        {
            "start": "1488",
            "title": "ディアスによる喜望峰周航",
            "description": "Dias Rounds the Cape of Good Hope<br>ポルトガル航海者バルトロメウ・ディアスがアフリカ南端を回り、大西洋からインド洋へ至る海路を示した。"
        },
        {
            "start": "1492-10-12",
            "title": "コロンブスのカリブ海到達",
            "description": "Columbus Reaches the Caribbean<br>スペイン王室支援のコロンブスが大西洋を横断してバハマ・カリブ諸島へ到達し、アジア近海と誤認した。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約による海外勢力圏分割",
            "description": "Treaty of Tordesillas Divides Overseas Spheres<br>スペインとポルトガルは教皇仲介で大西洋上に子午線を定め、欧州外の新発見地に対する権利主張を分割した。"
        },
        {
            "start": "1498",
            "title": "ヴァスコ・ダ・ガマのインド航路到達",
            "description": "Vasco da Gama Reaches India by Sea<br>ポルトガル艦隊が喜望峰を回り東アフリカ港を経てインドのカリカットへ到達し、欧州からインド洋への直航路を開いた。"
        },
        {
            "start": "1500",
            "title": "コロンブス交換の加速",
            "description": "Acceleration of the Columbian Exchange<br>欧州、アメリカ、アフリカ間で作物、家畜、病原体、人々が大規模移動し、馬・牛・小麦が新大陸へ、トウモロコシ・ジャガイモなどが旧大陸へ渡った。"
        },
        {
            "start": "1500",
            "end": "1867",
            "title": "大西洋奴隷貿易",
            "description": "Transatlantic Slave Trade<br>欧米商人がアフリカ人を購入・拉致し、過酷な船倉でアメリカの農園・鉱山へ運ぶ交易が数世紀続いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1519",
            "end": "1522",
            "title": "最初の世界周航",
            "description": "First Circumnavigation of the Globe<br>マゼラン率いるスペイン船隊は南米海峡を抜け太平洋を横断し、彼の死後エルカーノがビクトリア号をスペインへ帰還させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1545",
            "title": "ポトシ銀山の繁栄",
            "description": "Potosí Silver Boom<br>スペイン植民者はアンデスのポトシでミタ労役と水銀アマルガム法を用いて銀を大量生産し、欧州とアジアへ送った。"
        },
        {
            "start": "1565",
            "title": "マニラ・ガレオン貿易によるアメリカとアジアの連結",
            "description": "Manila Galleon Trade Links the Americas and Asia<br>スペインのガレオン船がマニラとアカプルコを往復し、アメリカ銀を中国絹・陶磁器、香辛料などアジア商品と交換した。"
        },
        {
            "start": "1600",
            "title": "イギリス東インド会社の特許取得",
            "description": "English East India Company Chartered<br>エリザベス1世が商人会社に東インド貿易独占権を与え、同社は後にインドで商館、軍隊、領土支配を築いた。"
        },
        {
            "start": "1602",
            "title": "オランダ東インド会社の設立",
            "description": "Dutch East India Company Founded<br>オランダの貿易会社が戦争・条約・植民権を持つ株式会社へ統合され、バタヴィアを拠点にアジア香料貿易を支配した。"
        },
        {
            "start": "1609",
            "title": "アムステルダム銀行の設立",
            "description": "Bank of Amsterdam Founded<br>アムステルダム市が安定した帳簿貨幣で預金・決済を行う公的為替銀行を設け、欧州商業金融の中心となった。"
        },
        {
            "start": "1637",
            "title": "オランダのチューリップ市場崩壊",
            "description": "Dutch Tulip Market Crash<br>希少チューリップ球根の先物契約価格が高騰した後、1637年に買い手が取引を停止し、投機市場が崩壊して契約紛争となった。"
        },
        {
            "start": "1650",
            "title": "大西洋プランテーション経済の拡大",
            "description": "Expansion of the Atlantic Plantation Economy<br>カリブ、ブラジル、北米南部の植民地農園が奴隷労働で砂糖、タバコ、コーヒー、綿花を大量生産し欧州へ輸出した。"
        },
        {
            "start": "1694",
            "title": "イングランド銀行の設立",
            "description": "Bank of England Founded<br>議会が民間出資者に銀行設立を認可し、政府へ長期融資して流通銀行券を発行し、国家財政の中核機関となった。"
        },
        {
            "start": "1700",
            "title": "砂糖・茶・コーヒー・綿花の世界市場拡大",
            "description": "Global Markets for Sugar, Tea, Coffee, and Cotton Expand<br>農園、アジア産地、欧州商社、大衆消費が砂糖、茶、コーヒー、綿織物を海洋横断供給網へ組み込んだ。"
        },
        {
            "start": "1712",
            "title": "ニューコメン蒸気機関",
            "description": "Newcomen Steam Engine<br>トーマス・ニューコメンが蒸気凝縮による圧力差でポンプを動かし、炭鉱排水を行う大気圧式蒸気機関を製作した。"
        },
        {
            "start": "1760",
            "end": "1840",
            "title": "第一次産業革命",
            "description": "First Industrial Revolution<br>英国で繊維機械、石炭、蒸気力、工場生産が結合し、機械化が冶金、交通、欧州大陸へ広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1769",
            "title": "ワットによる蒸気機関改良特許",
            "description": "Watt Patents Improvements to the Steam Engine<br>ジェームズ・ワットが独立凝縮器などを特許化し、燃料消費を大幅に減らして工場用回転動力を可能にした。"
        },
        {
            "start": "1770",
            "title": "英国工場制度の拡大",
            "description": "Expansion of the British Factory System<br>資本家が紡績機、織機、労働者を水力・蒸気工場へ集中し、時間管理と規律による大量生産を行った。"
        },
        {
            "start": "1787",
            "title": "第一船団による英国のオーストラリア植民開始",
            "description": "First Fleet Begins British Colonization of Australia<br>囚人、海兵、官吏を乗せた英国第一船団がポート・ジャクソンへ到着し、先住民の土地にニューサウスウェールズ流刑植民地を建てた。"
        },
        {
            "start": "1793",
            "title": "綿繰り機による米国綿花生産と奴隷制の拡大",
            "description": "Cotton Gin Accelerates U.S. Cotton Production and Slavery<br>イーライ・ホイットニーの綿繰り機が短繊維綿の種を高速分離し、米南部の綿花生産と奴隷労働需要を急増させた。"
        },
        {
            "start": "1807",
            "title": "商業蒸気船時代の開始",
            "description": "Beginning of Commercial Steamship Service<br>蒸気外輪船が河川・沿岸で定期旅客貨物輸送を始め、風向への完全な依存から離れた。"
        },
        {
            "start": "1825",
            "title": "ストックトン・アンド・ダーリントン鉄道開業",
            "description": "Stockton and Darlington Railway Opens<br>英国の公共ストックトン・アンド・ダーリントン鉄道が蒸気機関車で石炭と旅客を運び、商業鉄道の実用性を示した。"
        },
        {
            "start": "1830",
            "title": "リヴァプール・アンド・マンチェスター鉄道開業",
            "description": "Liverpool and Manchester Railway Opens<br>全線蒸気機関車牽引の都市間鉄道がリヴァプール港と工業都市マンチェスターを結び、定期貨客輸送を行った。"
        },
        {
            "start": "1837",
            "title": "電信の実用実演",
            "description": "Practical Demonstration of the Telegraph<br>モールスらの電信が符号化した電気パルスを線路で送り、ワシントンとボルティモア間の文字情報をほぼ即時伝達した。"
        },
        {
            "start": "1846",
            "title": "英国の穀物法廃止",
            "description": "Britain Repeals the Corn Laws<br>英国議会が輸入穀物を制限する関税法を廃し、安価な食料輸入を容易にして自由貿易政策を優勢にした。"
        },
        {
            "start": "1848",
            "title": "カリフォルニア・ゴールドラッシュ",
            "description": "California Gold Rush<br>サッターズ・ミルで金が発見されると数十万人が採掘・商業・都市建設のため流入し、サンフランシスコが急成長した。"
        },
        {
            "start": "1851",
            "title": "ロンドン万国博覧会",
            "description": "Great Exhibition in London<br>各国が水晶宮で機械、原料、工芸品、工業製品を展示し、19世紀の製造業と帝国貿易を一般に示した。"
        },
        {
            "start": "1856",
            "title": "ベッセマー製鋼法",
            "description": "Bessemer Steel Process<br>ヘンリー・ベッセマーは溶融銑鉄へ空気を吹き込み不純物を除去し、鋼を安価に大量生産する方法を開発した。"
        },
        {
            "start": "1859",
            "title": "ペンシルベニア初の商業油井",
            "description": "First Commercial Oil Well in Pennsylvania<br>エドウィン・ドレークがタイタスビルで石油掘削に成功し、照明・工業用原油を井戸から安定生産できると示した。"
        },
        {
            "start": "1863",
            "title": "ロンドン地下鉄開業",
            "description": "London Underground Opens<br>メトロポリタン鉄道がロンドン地下トンネルで蒸気列車を運行し、世界初の都市地下鉄となった。"
        },
        {
            "start": "1869",
            "title": "スエズ運河開通",
            "description": "Suez Canal Opens<br>地中海と紅海を結ぶ人工運河が開通し、欧州とアジアの船が喜望峰を回らず航行できるようになった。"
        },
        {
            "start": "1869",
            "title": "米国初の大陸横断鉄道完成",
            "description": "First U.S. Transcontinental Railroad Completed<br>ユニオン・パシフィックとセントラル・パシフィックがユタで接続し、米国東部鉄道網と太平洋岸を結んだ。"
        },
        {
            "start": "1870",
            "end": "1914",
            "title": "第二次産業革命",
            "description": "Second Industrial Revolution<br>鉄鋼、化学、電力、石油、内燃機関、大企業生産が欧米と日本で発展し、新たな重工業体系を形成した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1876",
            "title": "電話の特許取得と実演",
            "description": "Telephone Patented and Demonstrated<br>アレクサンダー・グラハム・ベルが音声を電気信号へ変換して線路先で再生する電話を特許・実演した。"
        },
        {
            "start": "1879",
            "title": "実用電灯システムの登場",
            "description": "Practical Electric-Lighting Systems Emerge<br>エジソンらが耐久性のある白熱灯、発電所、配電線、電力量計を組み合わせ、都市向け照明システムを実用化した。"
        },
        {
            "start": "1880",
            "title": "欧州・アジアからの大規模移民加速",
            "description": "Acceleration of Mass Migration from Europe and Asia<br>汽船と鉄道が数千万人の欧州人、中国人、インド人、日本人などを米州、オセアニア、東南アジア、アフリカへ労働・定住のため運んだ。"
        },
        {
            "start": "1883",
            "title": "オリエント急行の運行開始",
            "description": "Orient Express Begins Service<br>豪華国際列車がパリから中欧・バルカンを経てコンスタンティノープルへ走り、国境を越える寝台・食堂車サービスを提供した。"
        },
        {
            "start": "1886",
            "title": "自動車時代の始まり",
            "description": "Beginning of the Automobile Age<br>ベンツ、ダイムラーらが実用的なガソリン内燃機関車を製作し、小型車両が軌道や畜力なしで走行できるようになった。"
        },
        {
            "start": "1895",
            "title": "商業映画の始まり",
            "description": "Beginning of Commercial Cinema<br>リュミエール兄弟らが有料観客へ短編映像を上映し、映画を技術実験から商業的大衆娯楽へ変えた。"
        },
        {
            "start": "1903",
            "title": "初の制御可能な動力飛行",
            "description": "First Controlled Powered Flight<br>ライト兄弟がエンジンと三軸操縦を備えた機体で、ノースカロライナにて持続的・制御可能な有人飛行を達成した。"
        },
        {
            "start": "1908",
            "title": "フォードT型車と自動車大量生産",
            "description": "Ford Model T and Mass Automobile Production<br>フォードは標準部品と移動組立ラインでT型車を大量生産し、価格を下げて一般家庭の自動車所有を広げた。"
        },
        {
            "start": "1914",
            "title": "パナマ運河開通",
            "description": "Panama Canal Opens<br>パナマ地峡を横断する閘門式運河が開通し、船舶が南米を回らず大西洋と太平洋を往来できるようになった。"
        },
        {
            "start": "1920",
            "title": "消費者信用と広告の拡大",
            "description": "Expansion of Consumer Credit and Advertising<br>百貨店、分割払い、ブランド広告、大衆媒体が家庭による自動車、家電、規格化消費財の購入を促した。"
        },
        {
            "start": "1929",
            "end": "1939",
            "title": "世界恐慌",
            "description": "Great Depression<br>1929年の株価暴落後、銀行破綻、信用収縮、工業減産、大量失業が世界経済へ広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1933",
            "title": "米国ニューディールの開始",
            "description": "Beginning of the U.S. New Deal<br>ルーズベルト政権が銀行改革、公共事業、農業政策、雇用計画、社会保障で世界恐慌へ対応した。"
        },
        {
            "start": "1944",
            "title": "ブレトンウッズ体制の設計",
            "description": "Design of the Bretton Woods System<br>44か国代表がドルと金を基軸とする固定相場制度を設計し、IMFと世界銀行を創設した。"
        },
        {
            "start": "1947",
            "title": "関税および貿易に関する一般協定の署名",
            "description": "General Agreement on Tariffs and Trade Signed<br>23か国が協定を結び、交渉ラウンドで関税を下げ、最恵国待遇など国際貿易ルールを定めた。"
        },
        {
            "start": "1948",
            "title": "マーシャル・プランの開始",
            "description": "Marshall Plan Begins<br>米国が西欧諸国へ無償資金、融資、食料、設備を供給し、戦後復興と受援国の経済計画調整を支援した。"
        },
        {
            "start": "1950",
            "title": "コンテナ化による海運変革の開始",
            "description": "Containerization Begins Transforming Shipping<br>標準金属箱をトラック、鉄道、船舶間で直接積み替え、港湾作業時間、損傷、人件費を減らした。"
        },
        {
            "start": "1956",
            "title": "初の商業コンテナ船航海",
            "description": "First Commercial Container-Ship Voyage<br>マルコム・マクリーンの改装船「Ideal X」が標準コンテナをニューアークからヒューストンへ運び、海陸一貫輸送を実証した。"
        },
        {
            "start": "1957",
            "title": "欧州経済共同体の成立",
            "description": "European Economic Community Established<br>仏、西独、伊、ベネルクス三国がローマ条約で共同市場を作り、域内関税撤廃を進めた。"
        },
        {
            "start": "1960",
            "title": "OPECの設立",
            "description": "OPEC Founded<br>イラン、イラク、クウェート、サウジアラビア、ベネズエラがOPECを設立し、生産量と国際石油会社への政策を調整した。"
        },
        {
            "start": "1964",
            "title": "東海道新幹線開業",
            "description": "Tōkaidō Shinkansen Opens<br>日本が東京・大阪間に専用標準軌の高速鉄道を開業し、高頻度・定時運行で二大都市圏を結んだ。"
        },
        {
            "start": "1969",
            "title": "ARPANETの運用開始",
            "description": "ARPANET Begins Operation<br>米国研究機関のコンピュータがパケット交換網で接続され、最初のノードにはUCLAやスタンフォード研究所が含まれた。"
        },
        {
            "start": "1971",
            "title": "ドルの金交換停止",
            "description": "U.S. Dollar Convertibility into Gold Ends<br>ニクソン政権が外国中央銀行による固定価格でのドル金交換を停止し、ブレトンウッズ固定相場制が崩壊した。"
        },
        {
            "start": "1973",
            "title": "第一次石油危機",
            "description": "First Oil Crisis<br>第四次中東戦争中、アラブ産油国がイスラエル支持国へ禁輸し減産したため、国際原油価格が数倍に上昇した。"
        },
        {
            "start": "1978",
            "title": "中国の改革開放開始",
            "description": "China's Reform and Opening Begins<br>中国共産党第11期三中全会後、農村請負制、経済特区、外資導入、国有企業改革が始まった。"
        },
        {
            "start": "1981",
            "title": "IBM PCによるパソコン市場加速",
            "description": "IBM PC Accelerates the Personal-Computer Market<br>IBMがインテルCPUとマイクロソフトOSを採用したPCを発売し、比較的開放的な設計から互換機市場が形成された。"
        },
        {
            "start": "1983",
            "title": "ARPANETのTCP/IP採用",
            "description": "ARPANET Adopts TCP/IP<br>ARPANETのホストがTCP/IPへ一斉移行し、異なるネットワークを共通規則で接続する現代インターネットの基礎となった。"
        },
        {
            "start": "1985",
            "title": "シェンゲン協定の署名",
            "description": "Schengen Agreement Signed<br>欧州共同体5か国が相互国境検査の段階的廃止と、外部国境・警察協力の強化に合意した。"
        },
        {
            "start": "1986",
            "title": "各地域における市場改革加速",
            "description": "Acceleration of Market Reforms in Multiple Regions<br>ラテンアメリカ、東欧、アフリカ、アジア各国が民営化、貿易開放、価格自由化、財政緊縮を進め、国家直営を縮小した。"
        },
        {
            "start": "1989",
            "title": "ワシントン・コンセンサス時代の開始",
            "description": "Beginning of the Washington Consensus Era<br>国際金融機関と米政策界が財政規律、民営化、貿易自由化、規制緩和を債務危機国の改革策として推進した。"
        },
        {
            "start": "1991",
            "title": "インド経済自由化の加速",
            "description": "Acceleration of India's Economic Liberalization<br>外貨危機を受け、インド政府が工業許可制縮小、関税引下げ、外資開放、金融・国営企業改革を進めた。"
        },
        {
            "start": "1993",
            "title": "欧州単一市場の始動",
            "description": "European Single Market Launched<br>欧州共同体が加盟国間の商品、資本、サービス、人の移動障壁を大幅に撤廃し、単一域内市場を形成した。"
        },
        {
            "start": "1994",
            "title": "北米自由貿易協定の発効",
            "description": "NAFTA Takes Effect<br>米国、カナダ、メキシコが大部分の関税を段階撤廃し、投資、原産地、紛争処理ルールを設けた。"
        },
        {
            "start": "1995",
            "title": "世界貿易機関の設立",
            "description": "World Trade Organization Established<br>GATT加盟国が常設の世界貿易機関を設立し、物品、サービス、知的財産ルールと紛争処理を担わせた。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "アジア通貨危機",
            "description": "Asian Financial Crisis<br>タイ・バーツ下落を契機に資本流出と通貨・銀行危機が起こり、タイ、インドネシア、韓国などへ広がった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "1999",
            "title": "ユーロの電子・帳簿通貨導入",
            "description": "Euro Introduced as an Electronic and Accounting Currency<br>ユーロ圏各国が自国通貨の換算率を固定し、銀行送金、金融市場、政府会計で共通通貨ユーロを使い始めた。"
        },
        {
            "start": "2001",
            "title": "中国の世界貿易機関加盟",
            "description": "China Joins the World Trade Organization<br>長期交渉後、中国がWTOへ加盟し、関税引下げ、市場開放、多国間貿易ルール順守を約束した。"
        },
        {
            "start": "2002",
            "title": "ユーロ紙幣・硬貨の流通開始",
            "description": "Euro Banknotes and Coins Enter Circulation<br>欧州12か国が自国紙幣・硬貨をユーロ現金へ置き換え、史上最大級の通貨切替を行った。"
        },
        {
            "start": "2004",
            "title": "EUの大規模東方拡大",
            "description": "European Union's Major Eastern Enlargement<br>中東欧8か国とキプロス、マルタが同時加盟し、EU加盟国数と単一市場が大幅に拡大した。"
        },
        {
            "start": "2007",
            "title": "世界的スマートフォン経済の開始",
            "description": "Beginning of the Global Smartphone Economy<br>タッチ式スマートフォン、アプリストア、モバイル通信がアプリ開発、広告、配車、決済、位置情報サービスを生んだ。"
        },
        {
            "start": "2008",
            "end": "2009",
            "title": "世界金融危機",
            "description": "Global Financial Crisis<br>米国サブプライム証券損失で銀行・影子金融が連鎖不全となり、リーマン破綻後に世界の信用と貿易が急減した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#F39C12"
        },
        {
            "start": "2009",
            "title": "ビットコイン・ネットワークの始動",
            "description": "Bitcoin Network Launches<br>サトシ・ナカモト名義でソフトウェアが公開され創世ブロックが生成され、ブロックチェーンとプルーフ・オブ・ワークによる分散型通貨網が始動した。"
        },
        {
            "start": "2010",
            "title": "プラットフォーム・ギグ経済の拡大",
            "description": "Expansion of Platform and Gig Economies<br>オンライン平台がアルゴリズムで配車、配達、宿泊、フリーランス、短期労働を仲介し、評価と変動価格で取引を管理した。"
        },
        {
            "start": "2013",
            "title": "「一帯一路」構想の提唱",
            "description": "Belt and Road Initiative Announced<br>中国が陸上経済帯と海上シルクロードの枠組みを提唱し、アジア、アフリカ、欧州の港湾、鉄道、エネルギー、通信事業へ資金を供給した。"
        },
        {
            "start": "2016",
            "title": "英国国民投票によるEU離脱決定",
            "description": "UK Referendum Votes to Leave the EU<br>英国有権者が僅差でEU離脱を選び、政府はリスボン条約50条を発動して離脱交渉を開始した。"
        },
        {
            "start": "2020",
            "title": "英国の正式EU離脱",
            "description": "United Kingdom Formally Leaves the EU<br>英国は2020年1月にEU機関を離れ、移行期間後に単一市場・関税同盟から退出して新たな貿易制度へ移った。"
        },
        {
            "start": "2020",
            "title": "新型コロナ期の世界供給網混乱",
            "description": "Global Supply-Chain Disruption during COVID-19<br>工場停止、国境制限、港湾混雑、需要変化により半導体、医療用品、コンテナ、多種商品が不足した。"
        },
        {
            "start": "2021",
            "title": "世界的インフレとエネルギー価格圧力の強まり",
            "description": "Global Inflation and Energy-Price Pressures Intensify<br>感染収束後の需要、供給制約、緩和政策、エネルギーショックが食料、燃料、住宅、商品価格を押し上げ、各国中央銀行が利上げした。"
        },
        {
            "start": "2022",
            "title": "ウクライナ侵攻後の制裁と貿易分断深化",
            "description": "Sanctions and Trade Fragmentation after the Invasion of Ukraine<br>米国、EU、同盟国がロシア資産を凍結し金融・技術輸出を制限し、ロシアはエネルギー輸出先を変え、世界貿易経路が分断した。"
        }
    ]
};

// 災害・疫病・環境
var tl_disasters = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "-2199",
            "title": "4.2キロ年乾燥化イベント",
            "description": "4.2-Kiloyear Aridification Event<br>紀元前2200年頃、西アジア、北アフリカ、南アジア各地で長期乾燥化が起こり、降水・河川流量低下、凶作、移住、都市衰退を招いた。"
        },
        {
            "start": "-1599",
            "title": "テラ火山噴火と東地中海の動揺",
            "description": "Thera Eruption and Eastern Mediterranean Disruption<br>エーゲ海のテラ火山が巨大噴火し、サントリーニ周辺を火山灰と津波が襲い、クレタや東地中海航路を混乱させた。"
        },
        {
            "start": "0165",
            "end": "0180",
            "title": "アントニヌスの疫病",
            "description": "Antonine Plague<br>東方遠征から戻るローマ軍が持ち帰った感染症が帝国各地で反復流行し、天然痘とみられる症状で多数が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0249",
            "end": "0262",
            "title": "キプリアヌスの疫病",
            "description": "Plague of Cyprian<br>3世紀中頃、発熱、下痢、衰弱を伴う疫病がローマ帝国で長期流行し、都市、軍隊、農村人口を襲った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0536",
            "end": "0540",
            "title": "古代末期の気候ショック",
            "description": "Late Antique Climatic Shock<br>6世紀中頃の複数の大噴火で日射が弱まり数年間寒冷化し、ユーラシア各地に凶作、飢饉、社会不安が起きた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "0541",
            "end": "0750",
            "title": "ユスティニアヌスのペストに始まる第一次ペスト流行",
            "description": "First Plague Pandemic Beginning with the Plague of Justinian<br>ペスト菌が地中海港からビザンツ帝国、欧州、西アジアへ広がり、541年から二世紀以上にわたり流行を繰り返した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1257",
            "title": "サマラス火山噴火",
            "description": "Samalas Eruption<br>インドネシア・ロンボク島のサマラス火山が超大規模噴火し、周辺を火山灰で覆い、世界の氷床コアに大きな硫酸塩痕跡を残した。"
        },
        {
            "start": "1315",
            "end": "1317",
            "title": "ヨーロッパ大飢饉",
            "description": "Great Famine of Europe<br>寒冷多雨が北欧の穀物不作、家畜疫病、食料高騰を招き、1315～1317年頃に多数が飢餓と病気で死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1346",
            "end": "1353",
            "title": "黒死病",
            "description": "Black Death<br>ペストが黒海・地中海港から欧州、西アジア、北アフリカへ急拡大し、14世紀中頃に数千万人を死亡させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1450",
            "title": "15世紀中葉の火山・気候ショック",
            "description": "Mid-Fifteenth-Century Volcanic and Climatic Shock<br>15世紀中葉の連続大噴火が成層圏へ硫酸塩を放出し、数年間の異常寒冷、凶作、地域飢饉を引き起こした。"
        },
        {
            "start": "1492",
            "end": "1700",
            "title": "旧大陸感染症によるアメリカ先住民人口の激減",
            "description": "Old World Diseases Devastate Indigenous American Populations<br>天然痘、麻疹、インフルエンザなどが欧州人とともにアメリカへ入り、既存免疫のない先住民社会で反復流行し人口を激減させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1556",
            "title": "華県地震",
            "description": "Huaxian Earthquake<br>陝西省華県付近で大地震が発生し、黄土洞窟住居や町が広範に倒壊し、明代記録では数十万人が死亡した。"
        },
        {
            "start": "1600",
            "title": "ワイナプティナ噴火と世界的寒冷化",
            "description": "Huaynaputina Eruption and Global Cooling<br>ペルーのワイナプティナ火山が大噴火し周辺集落を埋没させ、大量の硫黄放出後に北半球で異常寒冷と凶作が起きた。"
        },
        {
            "start": "1665",
            "end": "1666",
            "title": "ロンドン大ペスト",
            "description": "Great Plague of London<br>1665～1666年、ペストが人口密集するロンドンで流行し約10万人が死亡し、住民避難と隔離・封鎖が行われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1666",
            "title": "ロンドン大火",
            "description": "Great Fire of London<br>プディング・レーンのパン屋から出火し、強風で4日間燃え広がってロンドン市内の住宅、教会、公共建築の大半を焼失させた。"
        },
        {
            "start": "1707",
            "title": "宝永地震と富士山噴火",
            "description": "Hōei Earthquake and Eruption of Mount Fuji<br>南海トラフで宝永地震・津波が起こり、数週間後に富士山宝永火口が噴火して江戸・東海道へ降灰した。"
        },
        {
            "start": "1720",
            "end": "1722",
            "title": "マルセイユ大ペスト",
            "description": "Great Plague of Marseille<br>東地中海からの商船がマルセイユへペストを持ち込み、プロヴァンスへ広がって約10万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1755-11-01",
            "title": "リスボン地震と津波",
            "description": "Lisbon Earthquake and Tsunami<br>万聖節にポルトガル沖で大地震が起こり、津波と火災がリスボン中心部を破壊し、イベリア、北アフリカ、大西洋岸へ影響した。"
        },
        {
            "start": "1783",
            "end": "1784",
            "title": "ラキ火山噴火と気候攪乱",
            "description": "Laki Eruption and Climatic Disruption<br>アイスランドのラキ割れ目が8か月噴火し、有毒なフッ素・二酸化硫黄で家畜大量死、飢饉、欧州大気汚染を起こした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1815",
            "title": "タンボラ山噴火",
            "description": "Eruption of Mount Tambora<br>インドネシア・スンバワ島のタンボラ山が有史最大級の噴火を起こし、周辺集落を壊滅させ大量の噴出物を上空へ送った。"
        },
        {
            "start": "1816",
            "title": "夏のない年",
            "description": "Year Without a Summer<br>タンボラ噴火後の寒冷化で1816年の北米・欧州に夏霜、長雨、凶作が起こり、食料高騰、飢餓、移住を招いた。"
        },
        {
            "start": "1817",
            "end": "1923",
            "title": "世界的コレラ流行",
            "description": "Global Cholera Pandemics<br>ガンジス・デルタ発のコレラが船、軍隊、汚染水を通じてアジア、欧州、アフリカ、米州へ何度も拡散した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1845",
            "end": "1852",
            "title": "アイルランド大飢饉",
            "description": "Great Irish Famine<br>ジャガイモ疫病が主食作物を連年壊滅させ、救済不足と食料輸出継続の中で約100万人が死亡し、さらに多くが移民した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1876",
            "end": "1879",
            "title": "インドと中国の大飢饉",
            "description": "Great Famines in India and China<br>19世紀後半、エルニーニョ関連の干ばつと季節風不順がインド・中国を襲い、食料不足、疫病、救済不足で数百万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1883",
            "title": "クラカタウ火山噴火",
            "description": "Krakatoa Eruption<br>スンダ海峡のクラカタウが連続爆発・崩壊し、巨大津波がジャワ・スマトラ沿岸を襲い3万人以上が死亡した。"
        },
        {
            "start": "1887",
            "title": "黄河大洪水",
            "description": "Yellow River Flood<br>黄河が河南省鄭州付近で決壊し広大な平原を浸水させ、村落・農地を破壊し多数の死者と避難民を出した。"
        },
        {
            "start": "1894",
            "end": "1959",
            "title": "第三次ペスト大流行",
            "description": "Third Plague Pandemic<br>ペストが中国西南部と香港港からインド・世界の港湾都市へ広がり、19世紀末から20世紀初頭に数百万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1906",
            "title": "サンフランシスコ地震",
            "description": "San Francisco Earthquake<br>サンアンドレアス断層の大地震とガス管破裂火災がサンフランシスコの大半を焼き、数十万人が住居を失った。"
        },
        {
            "start": "1911",
            "title": "江淮大水害",
            "description": "Yangtze–Huai River Floods<br>長江・淮河流域の長雨と堤防決壊が安徽・江蘇などを浸水させ、農地・都市被害と飢饉・疫病を起こした。"
        },
        {
            "start": "1918",
            "end": "1920",
            "title": "1918年インフルエンザ大流行",
            "description": "1918 Influenza Pandemic<br>H1N1型インフルエンザが第一次世界大戦末期に軍隊と交通網を通じ世界へ広がり、数億人が感染し数千万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1920",
            "title": "海原地震",
            "description": "Haiyuan Earthquake<br>寧夏海原付近の大地震が広範な地表断裂、地滑り、黄土洞窟住居倒壊を起こし、20万人以上が死亡した。"
        },
        {
            "start": "1923-09-01",
            "title": "関東大震災",
            "description": "Great Kantō Earthquake<br>相模湾の大地震と火災が東京・横浜周辺を壊滅させ、昼食時の火と強風が火災旋風と多数の死傷者を生んだ。"
        },
        {
            "start": "1931",
            "title": "1931年中国大洪水",
            "description": "1931 China Floods<br>干ばつと洪水の反復後、異常降雨と台風が長江、淮河、黄河流域を広範に浸水させ、飢餓と感染症を招いた。"
        },
        {
            "start": "1932",
            "end": "1933",
            "title": "ホロドモールを含むソ連飢饉",
            "description": "Soviet Famine including the Holodomor<br>強制集団化、穀物徴発、移動制限、不作によりウクライナ、カザフスタン、南ロシアなどで大飢饉が起こり、数百万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1943",
            "end": "1944",
            "title": "ベンガル飢饉",
            "description": "Bengal Famine<br>戦時の米不足、価格高騰、輸送・徴発政策、救済失敗により英領ベンガルで約200万～300万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1958",
            "end": "1962",
            "title": "中国大飢饉",
            "description": "Great Chinese Famine<br>大躍進期の人民公社、過剰徴発、収穫量誇張、政策失敗、自然要因が重なり、全国的食料危機と大量死亡を招いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1960",
            "title": "バルディビア地震と太平洋津波",
            "description": "Valdivia Earthquake and Pacific Tsunami<br>観測史上最大の地震がチリ南部を襲い、津波が太平洋を横断してハワイ、日本、フィリピン沿岸へ到達した。"
        },
        {
            "start": "1968",
            "end": "1970",
            "title": "香港かぜの世界的流行",
            "description": "Hong Kong Flu Pandemic<br>香港で注目された新型H3N2インフルエンザが数か月で航空路を通じ世界へ広がり、約100万人が死亡した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1970",
            "title": "ボーラ・サイクロン",
            "description": "Bhola Cyclone<br>強いサイクロンと高潮が東パキスタンのガンジス・デルタ低地を浸水させ、数十万人が死亡し政治危機を深めた。"
        },
        {
            "start": "1976",
            "title": "唐山地震",
            "description": "Tangshan Earthquake<br>河北省唐山市を未明の浅い大地震が襲い、市街地建物の大半が倒壊し、公式に24万人以上が死亡した。"
        },
        {
            "start": "1984",
            "title": "ボパール化学工場事故",
            "description": "Bhopal Industrial Disaster<br>インド・ボパールの農薬工場からイソシアン酸メチルが漏れ、夜間の住宅地を覆い、数千人の死亡と長期健康被害を生んだ。"
        },
        {
            "start": "1984",
            "end": "1985",
            "title": "エチオピア飢饉",
            "description": "Ethiopian Famine<br>長期干ばつ、内戦、強制移住、食料輸送阻害によりエチオピア北部で飢饉が広がり、数十万人が死亡して国際救援が行われた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "1986-04-26",
            "title": "チェルノブイリ原発事故",
            "description": "Chernobyl Nuclear Disaster<br>ウクライナのチェルノブイリ4号炉が安全試験中に暴走・爆発・火災を起こし、大量の放射性物質が欧州へ拡散して住民が避難した。"
        },
        {
            "start": "1988",
            "title": "アルメニア地震",
            "description": "Armenian Earthquake<br>ソ連アルメニア北部で大地震が起こり、スピタクやレニナカンの耐震性の低い建物が倒壊し約2万5000人が死亡した。"
        },
        {
            "start": "1991",
            "title": "ピナトゥボ山噴火",
            "description": "Mount Pinatubo Eruption<br>フィリピンのピナトゥボ山が大噴火し、火砕流・大量降灰と成層圏への二酸化硫黄放出で短期的世界寒冷化を起こした。"
        },
        {
            "start": "1994",
            "title": "阪神・淡路大震災",
            "description": "Great Hanshin Earthquake<br>淡路島付近の断層破壊が神戸・阪神地域を強く揺らし、住宅、高速道路、港湾が倒壊し大火災が発生した。"
        },
        {
            "start": "1997",
            "end": "1998",
            "title": "エルニーニョによる世界的気候攪乱",
            "description": "Global Climate Disruption from El Niño<br>1997～98年の強いエルニーニョが太平洋水温と大気循環を変え、東アフリカ洪水、東南アジア干ばつ・山火事、米州異常気象を起こした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2001",
            "title": "グジャラート地震",
            "description": "Gujarat Earthquake<br>インド共和国記念日にグジャラート州で大地震が起こり、ブジ・カッチ周辺の建物が倒壊して約2万人が死亡した。"
        },
        {
            "start": "2003",
            "title": "ヨーロッパ熱波",
            "description": "European Heatwave<br>2003年夏の長期高温と熱帯夜で熱中症・循環器負担が増え、特に仏伊などで数万人の超過死亡が生じた。"
        },
        {
            "start": "2004-12-26",
            "title": "インド洋地震・津波",
            "description": "Indian Ocean Earthquake and Tsunami<br>スマトラ西方沖の巨大海溝型地震が津波を起こし、インドネシア、スリランカ、インド、タイ、東アフリカを襲い約23万人が死亡した。"
        },
        {
            "start": "2005",
            "title": "ハリケーン・カトリーナ",
            "description": "Hurricane Katrina<br>カトリーナが米メキシコ湾岸へ上陸し、高潮でニューオーリンズの堤防が各所破損して市街の大半が浸水し長期避難となった。"
        },
        {
            "start": "2008",
            "title": "サイクロン・ナルギス",
            "description": "Cyclone Nargis<br>強いサイクロンと高潮がミャンマーのイラワジ・デルタを襲い、低地村落を浸水させ13万人以上が死亡・行方不明となった。"
        },
        {
            "start": "2008",
            "title": "四川大地震",
            "description": "Wenchuan Earthquake<br>四川の龍門山断層帯で大地震が起こり、汶川、北川、都江堰周辺の学校、住宅、山腹が崩壊し約9万人が死亡・行方不明となった。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震",
            "description": "Haiti Earthquake<br>ポルトープランス近郊の浅い地震で脆弱な住宅、政府機関、病院が倒壊し、数十万人が死亡して長期人道危機となった。"
        },
        {
            "start": "2010",
            "title": "2010年パキスタン洪水",
            "description": "Pakistan Floods of 2010<br>異常な季節風豪雨でインダス川水系が北から南へ氾濫し、国土約5分の1が被災、2000万人が支援を必要とした。"
        },
        {
            "start": "2011-03-11",
            "title": "東日本大震災・津波・福島原発事故",
            "description": "Great East Japan Earthquake, Tsunami, and Fukushima Nuclear Disaster<br>東北地方太平洋沖の巨大地震が大津波を起こし沿岸都市を壊滅させ、福島第一原発を浸水させて炉心溶融と大規模避難を招いた。"
        },
        {
            "start": "2013",
            "title": "台風ハイエン",
            "description": "Typhoon Haiyan<br>猛烈な台風ハイエンがフィリピン中部へ上陸し、高潮がタクロバン周辺を壊滅させ、数千人が死亡し数百万人が被災した。"
        },
        {
            "start": "2014",
            "end": "2016",
            "title": "西アフリカのエボラ出血熱流行",
            "description": "West African Ebola Epidemic<br>エボラウイルスがギニア、リベリア、シエラレオネへ広がり、医療不足と越境移動により史上最大の流行となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2015",
            "title": "ネパール地震",
            "description": "Nepal Earthquake<br>ネパール中部の大地震と余震がカトマンズ盆地の歴史建築や山村を破壊し、エベレストで雪崩を起こした。"
        },
        {
            "start": "2019-12-31",
            "end": "2023-05-05",
            "title": "新型コロナ世界保健緊急事態",
            "description": "COVID-19 Global Health Emergency<br>新型コロナウイルスが世界へ急拡大し、感染波、医療逼迫、ロックダウン、数百万人の死亡を引き起こした。",
            "isDuration": true,
            "textColor": "black",
            "color": "#546E7A"
        },
        {
            "start": "2020",
            "title": "世界的大規模山火事と異常気象への認識上昇",
            "description": "Global Megafires and Rising Awareness of Extreme Weather<br>豪州、北米、地中海、シベリアなどで巨大山火事、熱波、煙害が続き、数億人が大気汚染や避難の影響を受けた。"
        },
        {
            "start": "2022",
            "title": "パキスタン洪水と気候脆弱性危機",
            "description": "Pakistan Floods and Climate-Vulnerability Crisis<br>異常季節風雨と氷河融水でパキスタン広域が浸水し、3000万人以上が被災して住宅、農地、インフラが大きく損壊した。"
        },
        {
            "start": "2023",
            "title": "トルコ・シリア地震",
            "description": "Turkey–Syria Earthquakes<br>トルコ南部とシリア北部を二度の大地震が襲い、多数の鉄筋コンクリート建物が倒壊し、厳冬下で5万人以上が死亡した。"
        },
        {
            "start": "2023",
            "title": "リビア・デルナ洪水災害",
            "description": "Derna Flood Disaster in Libya<br>暴風雨ダニエルの豪雨でデルナ上流の二つのダムが決壊し、洪流が市街を貫いて地区一帯を地中海へ押し流した。"
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
            "description": "Code of Hammurabi<br>バビロニア王ハンムラビは、裁判、刑罰、財産、婚姻、債務に関する規定を石碑に刻ませ、王国の成文法として公示した。"
        },
        {
            "start": "-0620",
            "title": "アテネのドラコン法とソロン改革",
            "description": "Draco's and Solon's Reforms in Athens<br>ドラコンはアテネ法を成文化し、続くソロンは債務奴隷制を廃止して財産階級と市民の政治参加制度を再編した。"
        },
        {
            "start": "-0508",
            "title": "ローマ共和政の成立",
            "description": "Establishment of the Roman Republic<br>ローマ人は王政を倒し、毎年選ばれる執政官、元老院、民会が国政を担う共和政を成立させた。"
        },
        {
            "start": "-0449",
            "title": "ローマ十二表法",
            "description": "Twelve Tables of Roman Law<br>ローマは訴訟、債務、家族、財産などの規則を十二枚の表に刻み、貴族が握っていた法手続きを初めて公開・成文化した。"
        },
        {
            "start": "-0220",
            "title": "秦の行政標準化",
            "description": "Qin Administrative Standardization<br>秦は六国統一後に郡県制を施行し、文字、度量衡、貨幣、車軌を統一して中央官僚制で全国を統治した。"
        },
        {
            "start": "0212",
            "title": "アントニヌス勅令によるローマ市民権拡大",
            "description": "Constitutio Antoniniana Extends Roman Citizenship<br>皇帝カラカラは勅令を出し、帝国内のほぼすべての自由民にローマ市民権を与えて法的身分を広く統一した。"
        },
        {
            "start": "0604",
            "title": "日本の十七条憲法",
            "description": "Japan's Seventeen-Article Constitution<br>聖徳太子に結び付けられる朝廷は、和、君主への服従、仏教尊崇、公正な政務を官人に求める十七条の訓戒を示した。"
        },
        {
            "start": "0701",
            "title": "大宝律令",
            "description": "Taihō Code<br>日本朝廷は唐制を参照して律令を編纂し、中央官司、地方行政、戸籍、租税・労役、刑罰を定めて律令国家の骨格を整えた。"
        },
        {
            "start": "0800",
            "title": "カール大帝の皇帝戴冠",
            "description": "Coronation of Charlemagne as Emperor<br>教皇レオ3世はローマでカール大帝を皇帝に戴冠し、フランク王権を西方キリスト教帝国の理念と結び付けた。"
        },
        {
            "start": "1215-06-15",
            "title": "マグナ・カルタの締結",
            "description": "Magna Carta Sealed<br>イングランド王ジョンは諸侯の圧力でマグナ・カルタを受け入れ、王権の課税と司法も既存法と協議手続に従うと認めた。"
        },
        {
            "start": "1222",
            "title": "ハンガリー金印勅書",
            "description": "Golden Bull of Hungary<br>ハンガリー王アンドラーシュ2世は金印勅書を発し、貴族の財産、免税、違法な王命への抵抗権などを確認した。"
        },
        {
            "start": "1232",
            "title": "マンデ憲章の伝承",
            "description": "Manden Charter Tradition<br>マリ帝国成立に結び付く口承憲章は、氏族関係、社会的義務、平和原則、隷属への制限を定め、グリオが代々伝えた。"
        },
        {
            "start": "1265",
            "title": "シモン・ド・モンフォール議会",
            "description": "Simon de Montfort's Parliament<br>シモン・ド・モンフォールは、貴族・聖職者に加えて州騎士と都市代表も招くイングランド議会を開催した。"
        },
        {
            "start": "1356",
            "title": "神聖ローマ帝国の金印勅書",
            "description": "Golden Bull of 1356<br>皇帝カール4世は金印勅書を発し、七選帝侯によるローマ王選出手続とその特権を明文化した。"
        },
        {
            "start": "1454",
            "title": "ローディの和",
            "description": "Peace of Lodi<br>ミラノとヴェネツィアが講和し、フィレンツェ、ナポリ、教皇領も加わってイタリア主要国の勢力均衡体制が成立した。"
        },
        {
            "start": "1494",
            "title": "トルデシリャス条約",
            "description": "Treaty of Tordesillas<br>スペインとポルトガルは大西洋上に海外勢力圏の分界線を引き、新たに到達した地域の征服・交易権を分けた。"
        },
        {
            "start": "1555",
            "title": "アウクスブルクの宗教和議",
            "description": "Peace of Augsburg<br>皇帝と帝国諸侯は、各領邦君主がカトリックかルター派を領内の公的信仰として選べると合意した。"
        },
        {
            "start": "1598",
            "title": "ナントの勅令",
            "description": "Edict of Nantes<br>フランス王アンリ4世は、カトリック王国の中でユグノーに限定的な礼拝、公職、安全保障を認める勅令を出した。"
        },
        {
            "start": "1600",
            "title": "勅許会社統治の拡大",
            "description": "Expansion of Chartered-Company Rule<br>欧州君主は東インド会社などに、貿易独占、条約締結、徴税、軍隊保有、海外拠点統治の権限を勅許した。"
        },
        {
            "start": "1628",
            "title": "権利の請願",
            "description": "Petition of Right<br>イングランド議会はチャールズ1世に権利の請願を提出し、議会同意なき課税、恣意的拘禁、兵士の強制宿泊、平時の軍法を否定した。"
        },
        {
            "start": "1648",
            "title": "ウェストファリア条約",
            "description": "Peace of Westphalia<br>欧州の交戦国は一連の条約を結び、三十年戦争と八十年戦争を終結させ、帝国内諸侯や諸国家の地位を再定義した。"
        },
        {
            "start": "1679",
            "title": "人身保護法",
            "description": "Habeas Corpus Act<br>イングランド議会は、被拘禁者を速やかに裁判所へ出し、司法審査を避けるための移送を制限する法律を制定した。"
        },
        {
            "start": "1689",
            "title": "イングランド権利章典",
            "description": "English Bill of Rights<br>名誉革命後、議会はウィリアム3世とメアリー2世の王位を認め、国王による法律停止、課税、常備軍維持を制限した。"
        },
        {
            "start": "1701",
            "title": "王位継承法",
            "description": "Act of Settlement<br>イングランド議会はプロテスタントの王位継承順位を定め、裁判官の身分保障と君主への憲政上の制約を強めた。"
        },
        {
            "start": "1713",
            "title": "ユトレヒト条約",
            "description": "Peace of Utrecht<br>欧州列強はスペイン継承戦争を終結させ、スペインのブルボン王朝を承認し、領土と通商権を再配分した。"
        },
        {
            "start": "1776-07-04",
            "title": "アメリカ独立宣言",
            "description": "United States Declaration of Independence<br>北米十三植民地の代表は英国からの分離を宣言し、国王への不満を列挙して自然権と人民の同意により独立を正当化した。"
        },
        {
            "start": "1787-09-17",
            "title": "アメリカ合衆国憲法の署名",
            "description": "Signing of the United States Constitution<br>憲法制定会議の代表は、立法・行政・司法の権力分立と連邦制を採る国家政府を設計した憲法案に署名した。"
        },
        {
            "start": "1789-08-26",
            "title": "人間と市民の権利の宣言",
            "description": "Declaration of the Rights of Man and of the Citizen<br>フランス国民制憲議会は、人の自由と平等、国民主権、言論・財産の権利、法の下の平等、適正手続を宣言した。"
        },
        {
            "start": "1791",
            "title": "アメリカ権利章典の批准",
            "description": "Ratification of the United States Bill of Rights<br>米国は憲法修正第1条から第10条を批准し、宗教、言論、出版、集会、武器保有、刑事手続などの権利を保障した。"
        },
        {
            "start": "1792",
            "title": "『女性の権利の擁護』刊行",
            "description": "Publication of A Vindication of the Rights of Woman<br>メアリ・ウルストンクラフトは著書で、女性も同等の理性を持ち、教育、経済的自立、市民的地位を得るべきだと論じた。"
        },
        {
            "start": "1804",
            "title": "ナポレオン法典",
            "description": "Napoleonic Code<br>フランスは財産、契約、相続、婚姻、家族関係を体系的に定める統一民法典を公布し、多くの地域法を置き換えた。"
        },
        {
            "start": "1807",
            "title": "英国の奴隷貿易廃止",
            "description": "Britain Abolishes the Slave Trade<br>英国議会は英国船と臣民による大西洋奴隷貿易を禁止したが、植民地内の奴隷制そのものは存続した。"
        },
        {
            "start": "1815",
            "title": "ウィーン会議とヨーロッパ協調",
            "description": "Congress of Vienna and the Concert of Europe<br>ナポレオン戦争後、列強は欧州国境を引き直し、諸王朝を復古させ、危機を協議する列強体制を設けた。"
        },
        {
            "start": "1833",
            "title": "英国帝国奴隷廃止法",
            "description": "Slavery Abolition Act in the British Empire<br>英国議会は大半の植民地で奴隷解放を定め、奴隷所有者に補償し、当初導入した徒弟制度も後に廃止した。"
        },
        {
            "start": "1840",
            "title": "ワイタンギ条約",
            "description": "Treaty of Waitangi<br>英国王室代表と多くのマオリ首長が条約に署名したが、英語文とマオリ語文で主権・統治権の表現が異なり、長期的な争点となった。"
        },
        {
            "start": "1848",
            "title": "セネカ・フォールズ会議",
            "description": "Seneca Falls Convention<br>米国の女性権利運動家は大会で「所感の宣言」を採択し、教育、財産、職業、選挙における平等を要求した。"
        },
        {
            "start": "1863",
            "title": "奴隷解放宣言",
            "description": "Emancipation Proclamation<br>リンカン大統領は南部連合支配地域の奴隷を自由と宣言し、黒人の北軍入隊を認めた。"
        },
        {
            "start": "1864",
            "title": "最初のジュネーヴ条約",
            "description": "First Geneva Convention<br>欧州諸国は戦場の負傷兵と衛生要員を中立的に保護し、赤十字標章を認める条約を結んだ。"
        },
        {
            "start": "1865",
            "title": "米国憲法修正第13条による奴隷制廃止",
            "description": "Thirteenth Amendment Abolishes Slavery in the United States<br>米国は憲法修正第13条を批准し、犯罪への刑罰を除いて全国で奴隷制と強制労働を廃止した。"
        },
        {
            "start": "1868",
            "title": "アメリカ合衆国憲法修正第14条",
            "description": "Fourteenth Amendment to the United States Constitution<br>修正条項は米国出生者・帰化者の市民権を定め、州が適正手続や法の平等な保護を奪うことを禁じた。"
        },
        {
            "start": "1868",
            "title": "明治日本の五箇条の御誓文",
            "description": "Charter Oath of Meiji Japan<br>明治天皇は五箇条の御誓文を示し、広く会議を興し、身分を越えて国政に参与し、旧習を改め、世界から知識を求める方針を掲げた。"
        },
        {
            "start": "1870",
            "title": "アメリカ合衆国憲法修正第15条",
            "description": "Fifteenth Amendment to the United States Constitution<br>修正条項は、人種、皮膚の色、過去の隷属状態を理由に男性市民の選挙権を奪うことを連邦・州政府に禁じた。"
        },
        {
            "start": "1884",
            "end": "1885",
            "title": "ベルリン会議とアフリカ分割の規則化",
            "description": "Berlin Conference Regulates the European Partition of Africa<br>欧州列強はアフリカ側代表を交えず、占領、航行、通商の規則を定め、その後のアフリカ領土争奪の手続的枠組みを作った。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1889",
            "title": "大日本帝国憲法の発布",
            "description": "Promulgation of the Constitution of the Empire of Japan<br>明治政府は天皇主権の下に帝国議会、内閣、裁判所を設け、臣民の権利を法律の範囲内で定める憲法を発布した。"
        },
        {
            "start": "1899",
            "title": "第1回ハーグ平和会議",
            "description": "First Hague Peace Conference<br>二十数か国がハーグで軍縮と戦時法を協議し、常設仲裁裁判所を設け、陸戦法規などの条約を採択した。"
        },
        {
            "start": "1902",
            "title": "オーストラリアが大多数の女性に連邦選挙権を付与",
            "description": "Australia Grants Most Women the Federal Vote<br>連邦法は大多数の白人女性に投票権と被選挙権を与えたが、先住民など多くの人々は除外された。"
        },
        {
            "start": "1905",
            "title": "ノルウェーの協議による連合解消と独立",
            "description": "Norway Gains Independence through Negotiated Dissolution<br>ノルウェー議会はスウェーデンとの同君連合解消を宣言し、国民投票と交渉を経て平和的に独立王国となった。"
        },
        {
            "start": "1907",
            "title": "第2回ハーグ平和会議",
            "description": "Second Hague Peace Conference<br>四十数か国が戦時法を改訂し、中立、海戦、占領、開戦手続に関する条約を採択したが、軍縮では大きな成果を得なかった。"
        },
        {
            "start": "1911",
            "title": "最初の国際女性デー",
            "description": "First Observance of International Women's Day<br>欧州各国の社会主義女性団体が、女性参政権、労働権、差別撤廃を求めて集会を開き、国際女性デーの伝統を形作った。"
        },
        {
            "start": "1918",
            "title": "英国女性が年齢制限付きで議会選挙権を獲得",
            "description": "British Women Gain Parliamentary Voting Rights with Age Restrictions<br>英国の国民代表法は、30歳以上で財産要件を満たす女性に選挙権を与え、男性参政権も拡大した。"
        },
        {
            "start": "1919",
            "title": "ヴェルサイユ条約",
            "description": "Treaty of Versailles<br>連合国とドイツは、国境再編、ドイツ軍備制限、賠償、国際連盟規約を盛り込んだ講和条約を締結した。"
        },
        {
            "start": "1919",
            "title": "国際労働機関の設立",
            "description": "Establishment of the International Labour Organization<br>ヴェルサイユ体制は国際労働機関を設立し、政府・使用者・労働者の三者が労働時間、安全、団結権などの国際基準を策定する仕組みを作った。"
        },
        {
            "start": "1920",
            "title": "国際連盟の発足",
            "description": "League of Nations Established<br>国際連盟は総会、理事会、事務局を通じて紛争、委任統治、国際協力を扱う組織として活動を開始した。"
        },
        {
            "start": "1920",
            "title": "米国憲法修正第19条による女性参政権確立",
            "description": "Nineteenth Amendment Establishes Women's Suffrage in the United States<br>修正条項は性別を理由とする選挙権剥奪を連邦・州政府に禁じ、女性の全国的な参政権を法的に確立した。"
        },
        {
            "start": "1928",
            "title": "不戦条約",
            "description": "Kellogg–Briand Pact<br>各国は戦争を国家政策の手段として放棄し、国際紛争を平和的に解決すると約束する条約に署名した。"
        },
        {
            "start": "1935",
            "title": "ニュルンベルク法の制定",
            "description": "Nuremberg Laws Enacted<br>ナチス・ドイツはユダヤ人から完全な市民権を奪い、「ドイツ人の血」を持つ者との結婚や性的関係を禁じる法律を制定した。"
        },
        {
            "start": "1941",
            "title": "大西洋憲章",
            "description": "Atlantic Charter<br>ルーズベルトとチャーチルは、領土不拡大、民族自決、通商開放、集団安全保障、戦後平和の原則を示す共同声明を発表した。"
        },
        {
            "start": "1944",
            "title": "ブレトンウッズ機関の構想",
            "description": "Bretton Woods Institutions Planned<br>連合国44か国の代表は戦後の通貨・金融秩序を協議し、国際通貨基金と国際復興開発銀行の創設を決めた。"
        },
        {
            "start": "1945-06-26",
            "title": "国際連合憲章の署名",
            "description": "United Nations Charter Signed<br>50か国の代表がサンフランシスコで国連憲章に署名し、総会、安全保障理事会、国際司法裁判所などの機関と集団安全保障原則を定めた。"
        },
        {
            "start": "1945-10-24",
            "title": "国際連合の正式発足",
            "description": "United Nations Formally Established<br>必要国の批准を経て国連憲章が発効し、国際連盟に代わる世界的政府間組織として国際連合が正式に発足した。"
        },
        {
            "start": "1945",
            "end": "1946",
            "title": "ニュルンベルク裁判",
            "description": "Nuremberg Trials<br>連合国の国際軍事裁判所はナチス主要指導者を戦争犯罪、平和に対する罪、人道に対する罪で裁き、個人の刑事責任を問うた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1946",
            "end": "1948",
            "title": "極東国際軍事裁判",
            "description": "International Military Tribunal for the Far East<br>連合国は東京で日本の戦時指導者を裁き、侵略戦争の計画、戦争犯罪、人道に対する罪を追及した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#16A085"
        },
        {
            "start": "1947",
            "title": "関税及び貿易に関する一般協定",
            "description": "General Agreement on Tariffs and Trade<br>23か国は関税譲許、最恵国待遇、多角的交渉を柱とする協定を結び、戦後国際貿易の規則を整えた。"
        },
        {
            "start": "1948-12-09",
            "title": "ジェノサイド条約の採択",
            "description": "Genocide Convention Adopted<br>国連総会は国民的、民族的、人種的、宗教的集団を意図的に破壊する行為を国際犯罪と定義し、防止と処罰を締約国に求めた。"
        },
        {
            "start": "1948-12-10",
            "title": "世界人権宣言の採択",
            "description": "Universal Declaration of Human Rights Adopted<br>国連総会は、生命、自由、平等、表現、教育、労働、社会保障など万人の基本的権利を掲げる30条の宣言を採択した。"
        },
        {
            "start": "1949",
            "title": "ジュネーヴ諸条約の改定・拡充",
            "description": "Geneva Conventions Revised and Expanded<br>各国は陸海の傷病兵、捕虜、戦時の民間人をそれぞれ保護し、紛争当事者の人道上の義務を定める四条約を採択した。"
        },
        {
            "start": "1949",
            "title": "北大西洋条約機構の設立",
            "description": "North Atlantic Treaty Organization Established<br>米国、カナダ、西欧諸国は、一国への武力攻撃を全加盟国への攻撃とみなす条約を結び、NATOを創設した。"
        },
        {
            "start": "1950",
            "title": "欧州人権条約の署名",
            "description": "European Convention on Human Rights Signed<br>欧州評議会加盟国は、生命、自由、公正な裁判、私生活、表現などを保障し、国際的監督制度を設ける条約に署名した。"
        },
        {
            "start": "1951",
            "title": "難民条約の採択",
            "description": "Refugee Convention Adopted<br>条約は難民の定義と締約国の保護義務を定め、迫害のおそれがある場所へ送還しないノン・ルフールマン原則を確立した。"
        },
        {
            "start": "1955",
            "title": "ワルシャワ条約機構の設立",
            "description": "Warsaw Pact Established<br>ソ連と東欧社会主義諸国は、NATOに対抗する共同防衛条約を結び、統一軍事指揮機構を設けた。"
        },
        {
            "start": "1957",
            "title": "ローマ条約",
            "description": "Treaties of Rome<br>西欧6か国は欧州経済共同体と欧州原子力共同体を設立し、域内貿易障壁を段階的に撤廃して共同市場を築く条約に署名した。"
        },
        {
            "start": "1959",
            "title": "欧州人権裁判所の設立",
            "description": "European Court of Human Rights Established<br>欧州人権裁判所がストラスブールに設置され、加盟国による欧州人権条約違反を訴える個人・国家の申立てを審理することになった。"
        },
        {
            "start": "1960-12-14",
            "title": "植民地独立付与宣言",
            "description": "Declaration on the Granting of Independence to Colonial Countries and Peoples<br>国連総会は植民地支配の速やかな終結、すべての人民の自決権、植民地人民への権力移譲を宣言した。"
        },
        {
            "start": "1963",
            "title": "アフリカ統一機構の設立",
            "description": "Organization of African Unity Established<br>アフリカの独立国32か国はアディスアベバでOAUを設立し、反植民地主義、既存国境の尊重、国家間協力を進めた。"
        },
        {
            "start": "1964",
            "title": "アメリカ公民権法",
            "description": "United States Civil Rights Act<br>米国法は公共施設と雇用における人種、皮膚の色、宗教、性別、出身国による差別を禁じ、学校の人種隔離撤廃を強化した。"
        },
        {
            "start": "1965",
            "title": "アメリカ投票権法",
            "description": "United States Voting Rights Act<br>米国は識字試験など少数派の投票を妨げる措置を禁じ、差別の歴史がある地域の選挙制度を連邦政府が監督できるようにした。"
        },
        {
            "start": "1965",
            "title": "人種差別撤廃条約",
            "description": "International Convention on the Elimination of All Forms of Racial Discrimination<br>国連条約は、人種差別の禁止、差別的法令の廃止、すべての人への平等な法的保護を締約国に求めた。"
        },
        {
            "start": "1966",
            "title": "国際人権規約二条約の採択",
            "description": "International Covenants on Human Rights Adopted<br>国連総会は自由権規約と社会権規約を採択し、宣言されてきた多くの権利を条約上の義務へと具体化した。"
        },
        {
            "start": "1967",
            "title": "東南アジア諸国連合の設立",
            "description": "Association of Southeast Asian Nations Established<br>インドネシア、マレーシア、フィリピン、シンガポール、タイはバンコク宣言に署名し、地域協力と安定を進めるASEANを設立した。"
        },
        {
            "start": "1968",
            "title": "核兵器不拡散条約の署名開放",
            "description": "Nuclear Non-Proliferation Treaty Opened for Signature<br>条約は核兵器国と非核兵器国を区分し、拡散防止と査察、原子力の平和利用、核軍縮の推進を定めた。"
        },
        {
            "start": "1972",
            "title": "国連人間環境会議",
            "description": "United Nations Conference on the Human Environment<br>各国はストックホルムで初の大規模な地球環境会議を開き、原則宣言と行動計画を採択し、国連環境計画の設立につなげた。"
        },
        {
            "start": "1975",
            "title": "ヘルシンキ最終議定書",
            "description": "Helsinki Final Act<br>欧州諸国、米国、カナダは、国境不可侵、主権平等、人権尊重、東西間の経済・人的交流の原則を確認した。"
        },
        {
            "start": "1979",
            "title": "女子差別撤廃条約",
            "description": "Convention on the Elimination of All Forms of Discrimination against Women<br>国連条約は、政治、教育、雇用、医療、婚姻、家庭生活における女性差別の撤廃を各国に求めた。"
        },
        {
            "start": "1981",
            "title": "アフリカ人権及び人民の権利憲章の採択",
            "description": "African Charter on Human and Peoples' Rights Adopted<br>アフリカ統一機構は、個人の権利、人民の集団的権利、個人が家族や社会に負う義務を併せて定める地域人権憲章を採択した。"
        },
        {
            "start": "1982",
            "title": "国連海洋法条約の署名開放",
            "description": "United Nations Convention on the Law of the Sea Opened for Signature<br>条約は領海、排他的経済水域、大陸棚、公海航行、海洋資源、紛争解決を包括的に定め、「海の憲法」と呼ばれた。"
        },
        {
            "start": "1987",
            "title": "モントリオール議定書の採択",
            "description": "Montreal Protocol Adopted<br>各国はフロン類などオゾン層破壊物質を段階的に廃止し、後の改正で対象物質と削減義務を拡大することに合意した。"
        },
        {
            "start": "1989",
            "title": "児童の権利に関する条約の採択",
            "description": "Convention on the Rights of the Child Adopted<br>国連条約は、子どもの生存、発達、保護、参加の権利を認め、子どもの最善の利益を判断の中心に置くよう求めた。"
        },
        {
            "start": "1990",
            "title": "障害を持つアメリカ人法の署名",
            "description": "Americans with Disabilities Act Signed<br>米国法は雇用、公共サービス、公共施設、通信での障害者差別を禁じ、合理的配慮とアクセシビリティを求めた。"
        },
        {
            "start": "1991",
            "title": "第1次戦略兵器削減条約の署名",
            "description": "START I Signed<br>米国とソ連は戦略核弾頭と大陸間運搬手段の削減上限を定め、申告、現地査察、検証制度を設ける条約に署名した。"
        },
        {
            "start": "1992",
            "title": "リオ地球サミット",
            "description": "Rio Earth Summit<br>100か国以上の首脳がリオで環境と開発を協議し、リオ宣言とアジェンダ21を採択し、気候・生物多様性条約を署名開放した。"
        },
        {
            "start": "1992",
            "title": "マーストリヒト条約の署名",
            "description": "Maastricht Treaty Signed<br>欧州共同体加盟国は欧州連合の創設、経済通貨同盟の推進、外交・司法・市民権分野の協力拡大を定める条約に署名した。"
        },
        {
            "start": "1993-11-01",
            "title": "欧州連合の正式発足",
            "description": "European Union Formally Established<br>マーストリヒト条約が発効し、欧州共同体を欧州連合の枠組みに組み込み、EU市民権と新たな政策協力分野を導入した。"
        },
        {
            "start": "1994",
            "title": "南アフリカのアパルトヘイト終結と民主選挙",
            "description": "South Africa Ends Apartheid and Holds Democratic Elections<br>南アフリカは全人種が参加する初の全国選挙を実施し、アフリカ民族会議が勝利してネルソン・マンデラが大統領に就任した。"
        },
        {
            "start": "1995-01-01",
            "title": "世界貿易機関の設立",
            "description": "World Trade Organization Established<br>マラケシュ協定が発効し、WTOがGATT体制を引き継いで物品、サービス、知的財産の貿易規則と紛争処理を担うことになった。"
        },
        {
            "start": "1997",
            "title": "京都議定書の採択",
            "description": "Kyoto Protocol Adopted<br>気候変動枠組条約の締約国は、多くの先進国に法的拘束力のある温室効果ガス削減目標を課す議定書を採択した。"
        },
        {
            "start": "1998",
            "title": "国際刑事裁判所ローマ規程の採択",
            "description": "Rome Statute of the International Criminal Court Adopted<br>各国は、集団殺害罪、人道に対する罪、戦争犯罪、侵略犯罪を裁く常設の国際刑事裁判所を設立する規程を採択した。"
        },
        {
            "start": "2000",
            "title": "ミレニアム開発目標の採択",
            "description": "Millennium Development Goals Adopted<br>国連加盟国は、2015年までに極度の貧困削減、教育・保健改善、国際協力強化を目指す八つの目標を採択した。"
        },
        {
            "start": "2002-07-01",
            "title": "国際刑事裁判所が管轄権を開始",
            "description": "International Criminal Court Begins Jurisdiction<br>ローマ規程が発効し、国際刑事裁判所は以後に発生した管轄要件を満たす中核的国際犯罪を捜査・訴追できるようになった。"
        },
        {
            "start": "2005",
            "title": "国連世界サミットが「保護する責任」を承認",
            "description": "UN World Summit Endorses the Responsibility to Protect<br>各国首脳は、国家が住民を集団殺害、戦争犯罪、民族浄化、人道に対する罪から守る責任を負い、失敗時には国際社会が集団行動を取ると確認した。"
        },
        {
            "start": "2006",
            "title": "障害者権利条約の採択",
            "description": "Convention on the Rights of Persons with Disabilities Adopted<br>国連条約は障害を慈善・医療の対象ではなく権利の問題として捉え、平等、アクセシビリティ、自立生活、社会参加を保障するよう求めた。"
        },
        {
            "start": "2007",
            "title": "先住民族の権利に関する国連宣言の採択",
            "description": "UN Declaration on the Rights of Indigenous Peoples Adopted<br>国連宣言は、先住民族の自決、土地・資源、文化・言語、自由意思による事前の十分な情報に基づく同意などの権利を確認した。"
        },
        {
            "start": "2015",
            "title": "持続可能な開発目標の採択",
            "description": "Sustainable Development Goals Adopted<br>国連加盟国は2030アジェンダを採択し、貧困、保健、教育、平等、気候、平和、持続可能な経済を扱う17目標を定めた。"
        },
        {
            "start": "2015-12-12",
            "title": "パリ協定の採択",
            "description": "Paris Agreement Adopted<br>各国は自主的な削減目標を提出・強化し、気温上昇を2度より十分低く抑え、1.5度に制限する努力を行うことで合意した。"
        },
        {
            "start": "2016",
            "title": "パリ協定の発効",
            "description": "Paris Agreement Enters into Force<br>批准要件を満たしてパリ協定が発効し、締約国は透明性、世界全体の進捗確認、国別貢献の仕組みに基づき約束を実施し始めた。"
        },
        {
            "start": "2018",
            "title": "安全で秩序ある正規移住のためのグローバル・コンパクト採択",
            "description": "Global Compact for Migration Adopted<br>国連加盟国は、合法的移住経路、国境管理、移住労働者保護、情報共有、帰還などの目標を掲げる法的拘束力のない協力枠組みを採択した。"
        },
        {
            "start": "2021",
            "title": "核兵器禁止条約の発効",
            "description": "Treaty on the Prohibition of Nuclear Weapons Enters into Force<br>批准要件を満たして条約が発効し、締約国による核兵器の開発、実験、生産、保有、使用、使用の威嚇を禁じ、被害者援助などを義務付けた。"
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
            "description": "Atomic Bombing of Hiroshima<br>米軍のB29が広島にウラン型原爆「リトルボーイ」を投下し、爆風、火災、放射線によって市内に甚大な死傷と破壊をもたらした。"
        },
        {
            "start": "1945-08-09",
            "title": "長崎への原子爆弾投下",
            "description": "Atomic Bombing of Nagasaki<br>米軍のB29が長崎にプルトニウム型原爆「ファットマン」を投下し、浦上地区を壊滅させ、即時および放射線による多数の死傷者を出した。"
        },
        {
            "start": "1948",
            "end": "1949",
            "title": "ベルリン封鎖と空輸",
            "description": "Berlin Blockade and Airlift<br>ソ連が西側占領地域から西ベルリンへの陸路・水路を遮断し、米英などは封鎖解除まで食料、燃料、物資を継続的に空輸した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1948",
            "title": "ナクバとパレスチナ人の大規模離散",
            "description": "Nakba and Mass Palestinian Displacement<br>1948年戦争の過程で数十万人のパレスチナ人が故郷から逃れ、または追放され、多くの村が無人化・破壊されて難民問題が形成された。"
        },
        {
            "start": "1953",
            "title": "スターリン死去とソ連指導部の移行",
            "description": "Stalin's Death and Soviet Leadership Transition<br>スターリン死去後、マレンコフ、ベリヤ、フルシチョフらが権力を再編し、短期的な集団指導を経てフルシチョフが主導権を握った。"
        },
        {
            "start": "1954",
            "title": "ブラウン対教育委員会判決",
            "description": "Brown v. Board of Education<br>米連邦最高裁は、公立学校の人種隔離は憲法の平等保護条項に反すると全員一致で判断し、教育における「分離すれど平等」を否定した。"
        },
        {
            "start": "1955",
            "title": "モンゴメリー・バス・ボイコット",
            "description": "Montgomery Bus Boycott<br>ローザ・パークス逮捕後、モンゴメリーの黒人住民は人種隔離バスを長期ボイコットし、最終的に裁判所が市営バスの隔離を廃止した。"
        },
        {
            "start": "1956",
            "title": "フルシチョフ秘密報告と非スターリン化",
            "description": "Khrushchev's Secret Speech and De-Stalinization<br>フルシチョフはソ連共産党第20回大会の秘密報告でスターリンの個人崇拝、粛清、権力乱用を批判し、非スターリン化を進めた。"
        },
        {
            "start": "1957",
            "title": "スプートニクが宇宙時代を開く",
            "description": "Sputnik Opens the Space Age<br>ソ連は世界初の人工衛星スプートニク1号を打ち上げ、その電波が世界で受信され、米ソ宇宙競争が加速した。"
        },
        {
            "start": "1959",
            "title": "ダライ・ラマのチベット脱出",
            "description": "Dalai Lama Leaves Tibet<br>ラサ蜂起と中国軍の鎮圧の中、第14代ダライ・ラマはヒマラヤを越えてインドへ脱出し、後に亡命行政機構を設けた。"
        },
        {
            "start": "1961-08-13",
            "end": "1989-11-09",
            "title": "ベルリンの壁",
            "description": "Berlin Wall<br>東ドイツは西ベルリン経由の住民流出を止めるため、東西ベルリン境界を壁、鉄条網、警備施設で封鎖し、1989年まで維持した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1961",
            "title": "非同盟運動の発足",
            "description": "Non-Aligned Movement Established<br>アジア、アフリカなどの首脳がベオグラードで初の首脳会議を開き、米ソ軍事陣営への非加盟と反植民地・開発問題での連携を掲げた。"
        },
        {
            "start": "1963-08-28",
            "title": "ワシントン大行進",
            "description": "March on Washington<br>約25万人が「仕事と自由」を求めてワシントンを行進し、公民権立法と経済的平等を要求し、キング牧師が「私には夢がある」と演説した。"
        },
        {
            "start": "1963-11-22",
            "title": "ジョン・F・ケネディ暗殺",
            "description": "Assassination of John F. Kennedy<br>ケネディ米大統領はダラスの車列走行中に銃撃され死亡し、副大統領リンドン・ジョンソンが同日宣誓して後任となった。"
        },
        {
            "start": "1964",
            "title": "中国初の核実験",
            "description": "China's First Nuclear Test<br>中国は新疆ロプノールで初の原子爆弾「596」を爆発させ、核兵器実験に成功した世界5番目の国となった。"
        },
        {
            "start": "1966",
            "end": "1976",
            "title": "中国文化大革命",
            "description": "China's Cultural Revolution<br>毛沢東が政治運動を発動し、紅衛兵や諸派が「ブルジョア」や伝統文化を攻撃し、多数の幹部、知識人、市民が迫害され、教育と社会秩序が長期に混乱した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#2980B9"
        },
        {
            "start": "1969-07-20",
            "title": "人類初の月面着陸",
            "description": "First Human Moon Landing<br>アポロ11号の月着陸船が静かの海に着陸し、ニール・アームストロングとバズ・オルドリンが月面に立ち、マイケル・コリンズは月周回軌道に残った。"
        },
        {
            "start": "1971",
            "title": "中華人民共和国が国連の中国代表権を獲得",
            "description": "People's Republic of China Takes China's UN Seat<br>国連総会は決議2758を採択し、中華人民共和国政府を中国の代表と認め、中華民国代表を国連の議席から排除した。"
        },
        {
            "start": "1972",
            "title": "米中接近",
            "description": "U.S.–China Rapprochement<br>ニクソン米大統領が北京を訪れ、毛沢東、周恩来と会談して上海コミュニケを発表し、相違を認めつつ公式関係の構築を始めた。"
        },
        {
            "start": "1973",
            "title": "チリ軍事クーデター",
            "description": "Chilean Military Coup<br>アウグスト・ピノチェト率いる軍がサルバドール・アジェンデ政権を倒し、大統領府を爆撃、アジェンデ死亡後に軍事評議会が権力を握った。"
        },
        {
            "start": "1974",
            "title": "ポルトガルのカーネーション革命",
            "description": "Portugal's Carnation Revolution<br>ポルトガルの青年将校がほぼ無血の政変で「新国家」独裁を倒し、市民が兵士にカーネーションを渡す中、民主化と植民地独立が始まった。"
        },
        {
            "start": "1975",
            "title": "サイゴン陥落",
            "description": "Fall of Saigon<br>北ベトナム軍がサイゴンに入り、南ベトナム政府が降伏し、米国人と一部ベトナム人が緊急退避して戦争の主要軍事段階が終わった。"
        },
        {
            "start": "1976",
            "title": "毛沢東死去と文化大革命時代の終結",
            "description": "Mao Zedong's Death and the End of the Cultural Revolution Era<br>毛沢東の死後まもなく「四人組」が逮捕され、10年続いた文化大革命の政治運動が終わり、中国指導部は再編期に入った。"
        },
        {
            "start": "1978",
            "title": "キャンプ・デービッド合意",
            "description": "Camp David Accords<br>エジプトのサダト大統領とイスラエルのベギン首相はカーター米大統領の仲介で交渉し、エジプト・イスラエル和平とパレスチナ自治の枠組みに合意した。"
        },
        {
            "start": "1979",
            "title": "エジプト・イスラエル平和条約",
            "description": "Egypt–Israel Peace Treaty<br>エジプトとイスラエルは戦争状態を正式に終え、イスラエルがシナイ半島から段階撤退し、両国が国交と安全保障区域を設けることで合意した。"
        },
        {
            "start": "1979",
            "title": "ソ連のアフガニスタン侵攻",
            "description": "Soviet Invasion of Afghanistan<br>ソ連軍はアフガニスタンに侵攻し、アミンを排除・殺害してカルマル政権を樹立し、国外支援を受けるムジャヒディンとの長期戦を始めた。"
        },
        {
            "start": "1980",
            "title": "ポーランド「連帯」の結成",
            "description": "Poland's Solidarity Trade Union Established<br>グダニスク造船所のストライキで政府が合意し、労働者は社会主義圏初の大規模な合法独立労組「連帯」を結成した。"
        },
        {
            "start": "1985",
            "title": "ゴルバチョフがペレストロイカとグラスノスチを開始",
            "description": "Gorbachev Begins Perestroika and Glasnost<br>ゴルバチョフはソ連共産党書記長就任後、経済再編、限定的市場改革、情報公開を進め、党と外交政策の硬直した統制を緩めようとした。"
        },
        {
            "start": "1986",
            "title": "フィリピン・ピープルパワー革命",
            "description": "Philippine People Power Revolution<br>大規模な非暴力デモと軍の離反によりフェルディナンド・マルコスが国外へ退去し、コラソン・アキノが大統領となって長期独裁が終わった。"
        },
        {
            "start": "1987",
            "title": "第1次インティファーダ開始",
            "description": "First Palestinian Intifada Begins<br>ガザとヨルダン川西岸のパレスチナ人がイスラエル占領に反対してストライキ、デモ、ボイコット、投石を始め、数年に及ぶ蜂起となった。"
        },
        {
            "start": "1988",
            "title": "イラン・イラク停戦",
            "description": "Iran–Iraq Ceasefire<br>イランとイラクは国連安保理決議598を受け入れて主要戦闘を停止し、明確な勝者のないまま8年間の戦争を終えた。"
        },
        {
            "start": "1989-11-09",
            "title": "ベルリンの壁崩壊",
            "description": "Fall of the Berlin Wall<br>東ドイツ当局者が新しい出国規則は即時発効すると誤って発表し、群衆が検問所に殺到、国境警備隊が通過を認め、市民が壁を壊し始めた。"
        },
        {
            "start": "1990",
            "title": "ネルソン・マンデラ釈放",
            "description": "Nelson Mandela Released<br>南アフリカ政府は27年間投獄されていたマンデラを釈放し、主要政治組織の禁止を解除してアパルトヘイト終結交渉を開始した。"
        },
        {
            "start": "1991",
            "title": "砂漠の嵐作戦",
            "description": "Operation Desert Storm<br>米国主導の多国籍軍は大規模空爆に続いて地上攻勢を行い、クウェートを占領していたイラク軍を撤退させた。"
        },
        {
            "start": "1991",
            "title": "ワルシャワ条約機構の解体",
            "description": "Dissolution of the Warsaw Pact<br>東欧の社会主義政権崩壊後、加盟国は統一軍事機構を廃止し、プラハでワルシャワ条約機構の解散を正式決定した。"
        },
        {
            "start": "1993",
            "title": "オスロ合意",
            "description": "Oslo Accords<br>イスラエルとPLOは相互承認し、ガザとヨルダン川西岸の一部に暫定パレスチナ自治を設け、最終地位問題を後の交渉に委ねた。"
        },
        {
            "start": "1994",
            "title": "ルワンダ虐殺と国際社会の失敗",
            "description": "Rwandan Genocide and International Failure<br>大統領機撃墜後、過激派が約100日間にツチと穏健派フツを組織的に虐殺したが、国連と主要国は有効に阻止できなかった。"
        },
        {
            "start": "1995",
            "title": "デイトン合意がボスニア戦争を終結",
            "description": "Dayton Accords End the Bosnian War<br>ボスニア、クロアチア、セルビアの指導者が、ボスニア・ヘルツェゴビナを統一国家として維持しつつ二つの主要構成体に分け、国際部隊を置くことで合意した。"
        },
        {
            "start": "1997",
            "title": "アジア通貨危機の拡大",
            "description": "Asian Financial Crisis Spreads<br>タイが固定相場を放棄すると、通貨下落、資本流出、銀行・企業債務危機がインドネシア、韓国などアジア諸国へ急速に広がった。"
        },
        {
            "start": "1998",
            "title": "ベルファスト合意",
            "description": "Belfast Agreement<br>英国・アイルランド両政府と北アイルランド主要政党は、権力分有議会、南北協力機関、武装解除の枠組みに合意し、長期紛争の終結を図った。"
        },
        {
            "start": "1999",
            "title": "NATOのコソボ介入",
            "description": "NATO Intervention in Kosovo<br>ユーゴ軍とコソボ・アルバニア人武装勢力の戦闘激化を受け、NATOは安保理の明示的承認なしに空爆し、ユーゴ軍は撤退して国際統治を受け入れた。"
        },
        {
            "start": "2000",
            "title": "第2次インティファーダ開始",
            "description": "Second Palestinian Intifada Begins<br>シャロンの神殿の丘／ハラム・アッシャリーフ訪問後、抗議が激化し、パレスチナ側の攻撃とイスラエル軍事作戦が数年続いて多数の死傷者を出した。"
        },
        {
            "start": "2001",
            "title": "9・11後のNATO第5条発動",
            "description": "NATO Invokes Article 5 after September 11<br>9・11攻撃後、NATOは初めて集団防衛条項を発動し、米国に早期警戒機、海上哨戒などの支援を提供した。"
        },
        {
            "start": "2003",
            "title": "イラク戦争反対の世界的抗議",
            "description": "Global Protests against the Iraq War<br>米国主導のイラク侵攻前、世界数百都市で大規模デモが行われ、より広い国際的承認なしの開戦に反対した。"
        },
        {
            "start": "2004",
            "title": "インド洋津波と世界的人道支援",
            "description": "Indian Ocean Tsunami Prompts a Global Humanitarian Response<br>スマトラ沖巨大地震がインド洋全域に津波を起こし、インドネシア、スリランカ、インド、タイなどを壊滅させ、世界規模の救援が行われた。"
        },
        {
            "start": "2005",
            "title": "ロンドン同時爆破事件",
            "description": "London Bombings<br>4人の自爆犯がロンドン地下鉄3列車とバス1台で爆弾を爆発させ、乗客52人が死亡し数百人が負傷した。"
        },
        {
            "start": "2008",
            "title": "オバマが米国初のアフリカ系大統領に当選",
            "description": "Barack Obama Elected the First African American U.S. President<br>民主党のバラク・オバマは金融危機下の大統領選でジョン・マケインを破り、米国初のアフリカ系大統領に選出された。"
        },
        {
            "start": "2008",
            "title": "世界金融システムの深刻な危機",
            "description": "Global Financial System Enters Severe Crisis<br>米国住宅バブル崩壊と住宅ローン損失でリーマン・ブラザーズが破綻し、信用市場が凍結したため、各国は銀行救済と大規模な金融・財政措置を取った。"
        },
        {
            "start": "2010",
            "title": "ハイチ地震と大規模国際救援",
            "description": "Haiti Earthquake Triggers Massive International Relief<br>ポルトープランス近郊の浅い大地震で住宅や政府施設が倒壊し、数十万人が死傷・避難し、大規模な国際救援が入った。"
        },
        {
            "start": "2011",
            "title": "福島原発事故とエネルギー政策論議",
            "description": "Fukushima Nuclear Accident Reshapes Energy Debate<br>東日本大震災の地震・津波で福島第一原発の電源と冷却が失われ、複数炉で炉心溶融と放射性物質放出が起こり、広域避難が実施された。"
        },
        {
            "start": "2011",
            "title": "ウサーマ・ビン・ラーディン殺害",
            "description": "Osama bin Laden Killed<br>米特殊部隊はパキスタンのアボタバードにある邸宅を急襲し、アルカイダ指導者ウサーマ・ビン・ラーディンを殺害して資料と電子機器を押収した。"
        },
        {
            "start": "2013",
            "title": "エドワード・スノーデンによる監視計画暴露",
            "description": "Edward Snowden Reveals Surveillance Programs<br>NSA契約職員エドワード・スノーデンは機密文書を記者に提供し、電話メタデータの大量収集とインターネット通信監視計画を明らかにした。"
        },
        {
            "start": "2014",
            "title": "西アフリカのエボラ緊急事態",
            "description": "West African Ebola Emergency<br>エボラ出血熱がギニア、リベリア、シエラレオネで大流行し、医療体制を圧迫したため、WHOは国際的な公衆衛生上の緊急事態を宣言した。"
        },
        {
            "start": "2015",
            "title": "欧州難民危機のピーク",
            "description": "European Refugee Crisis Peaks<br>シリアなどの戦争で多数の難民・移民が地中海やバルカン経路から欧州へ渡り、受入れ、国境、庇護政策をめぐりEU諸国が激しく対立した。"
        },
        {
            "start": "2015",
            "title": "イラン核合意",
            "description": "Iran Nuclear Deal<br>イランと6か国・EUは包括的共同作業計画に合意し、査察下で濃縮、遠心分離機、核物質在庫を制限する代わりに核関連制裁を解除した。"
        },
        {
            "start": "2016",
            "title": "英国のEU離脱国民投票",
            "description": "United Kingdom European Union Membership Referendum<br>英国の有権者は約52対48％でEU離脱を選択し、キャメロン首相は辞任を表明、政府はその後離脱交渉を開始した。"
        },
        {
            "start": "2016",
            "title": "トルコのクーデター未遂",
            "description": "Failed Coup Attempt in Turkey<br>トルコ軍の一部が橋、空港、報道施設を占拠して政府転覆を図ったが、エルドアン大統領が市民に抵抗を呼び掛け、数時間で失敗した。"
        },
        {
            "start": "2018",
            "title": "米中貿易摩擦の激化",
            "description": "U.S.–China Trade Conflict Escalates<br>米国が中国の貿易・技術政策を理由に中国製品へ追加関税を課し、中国も報復関税を実施して、双方が措置を段階的に拡大しながら交渉した。"
        },
        {
            "start": "2019",
            "title": "香港逃亡犯条例改正反対運動",
            "description": "Hong Kong Anti-Extradition Bill Protests<br>香港政府が逃亡犯条例改正案を提出すると、大規模デモが撤回を要求し、警察の責任追及や普通選挙へ要求が広がり、激しい衝突も繰り返された。"
        },
        {
            "start": "2020",
            "title": "WHOが新型コロナをパンデミックと表明",
            "description": "WHO Declares COVID-19 a Pandemic<br>新型コロナウイルスの市中感染が多数国へ広がり、WHOはパンデミックと表明し、各国は渡航制限、検査、隔離、公衆衛生措置を拡大した。"
        },
        {
            "start": "2020",
            "title": "世界的なブラック・ライブズ・マター抗議",
            "description": "Global Black Lives Matter Protests<br>ミネアポリスでジョージ・フロイドが警察拘束中に死亡する映像が広まり、警察暴力と構造的人種差別に反対する抗議が米国と世界各地で起きた。"
        },
        {
            "start": "2020",
            "title": "アブラハム合意",
            "description": "Abraham Accords<br>米国の仲介でイスラエルはアラブ首長国連邦、バーレーンと国交正常化合意を結び、後にモロッコとスーダンも正常化方針を示した。"
        },
        {
            "start": "2021",
            "title": "米連邦議会議事堂襲撃事件",
            "description": "Attack on the United States Capitol<br>大統領選結果を認証中の米議会でトランプ支持者が警備線を突破して議事堂に侵入し、議員が避難、手続は数時間中断した。"
        },
        {
            "start": "2021",
            "title": "タリバンのアフガニスタン再掌握",
            "description": "Taliban Returns to Power in Afghanistan<br>米軍撤退中にタリバンが各州都を急速に制圧してカブールへ入り、ガニ大統領が国外へ逃れ、政府が崩壊し各国が緊急退避を行った。"
        },
        {
            "start": "2021",
            "title": "AUKUS安全保障枠組みの発表",
            "description": "AUKUS Security Partnership Announced<br>豪州、英国、米国は、豪州の原子力推進攻撃潜水艦取得を柱に、サイバー、AI、水中技術で協力する安全保障枠組みを発表した。"
        },
        {
            "start": "2022",
            "title": "ロシア侵攻後の世界的避難と食料・エネルギー危機",
            "description": "Global Displacement and Food-Energy Shock after Russia's Invasion<br>ロシアが複数方面からウクライナへ全面侵攻し、ウクライナは総動員と国外軍事支援で抵抗、数百万人が避難し、黒海穀物輸送と欧州エネルギー供給が混乱した。"
        },
        {
            "start": "2022",
            "title": "エリザベス2世死去",
            "description": "Death of Elizabeth II<br>英国女王エリザベス2世がバルモラル城で死去して70年の在位を終え、長男がチャールズ3世として即位した。"
        },
        {
            "start": "2023",
            "title": "フィンランドのNATO加盟",
            "description": "Finland Joins NATO<br>ロシアのウクライナ全面侵攻後、フィンランドは長年の軍事的非同盟を転換し、批准を終えてNATOの31番目の加盟国となった。"
        },
        {
            "start": "2023",
            "title": "イスラエル・ハマス戦争と地域的人道危機",
            "description": "Israel–Hamas War and Regional Humanitarian Crisis<br>ハマスなどがガザからイスラエル南部を攻撃し、多数を殺害・拉致した。イスラエルはその後ガザを封鎖、空爆、地上侵攻し、深刻な民間被害と避難を生んだ。"
        },
        {
            "start": "2024",
            "title": "スウェーデンのNATO加盟",
            "description": "Sweden Joins NATO<br>ロシアのウクライナ侵攻後、スウェーデンは長年の軍事的非同盟を転換し、全加盟国の批准を経てNATOの32番目の加盟国となった。"
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
