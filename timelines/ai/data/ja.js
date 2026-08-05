var title = "人工知能タイムライン";

// AI・機械学習・深層学習の編集タイムライン。人物は20歳になった年に配置するが、イベント本文にはその旨を記載しない。
// 時代区分は概略であり、意図的に重複する。
// SIMILEの紀元前年規則：負の年はマイナス記号の後に必ず4桁を置く。

// AIのパラダイムと歴史的時代区分
var tl_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "end": "1942",
            "title": "確率・最適化・論理の基礎形成期",
            "description": "後のAIを支えるベイズ推論、最小二乗法、勾配法、論理、確率過程などが、電子計算機以前に確立された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1955",
            "title": "サイバネティクスと初期神経計算",
            "description": "神経論理、情報理論、フィードバック制御、プログラム内蔵方式が、心・機械・通信を論じる共通言語を生んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1956",
            "end": "1973",
            "title": "第一次AIブームと記号知能",
            "description": "ダートマス会議後、探索、定理証明、計画、言語プログラム、汎用問題解決がAI研究の中心となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1957",
            "end": "1969",
            "title": "初期コネクショニズムとパーセプトロン",
            "description": "学習可能なしきい値ネットワークが注目されたが、理論と計算資源の制約により発展は限定された。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1980",
            "title": "第一次AIの冬",
            "description": "機械翻訳、ロボティクス、汎用推論が高い期待を満たせず、資金と期待が縮小した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1987",
            "title": "エキスパートシステム・ブーム",
            "description": "ルールベースシステムが企業や研究所へ入り、専門知識を商用の意思決定支援へ変えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2010",
            "title": "確率的グラフィカルモデルの時代",
            "description": "ベイジアンネットワーク、マルコフ確率場、メッセージ伝播が、不確実性・因果構造・推論を統合した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1986",
            "end": "2011",
            "title": "統計的機械学習の台頭",
            "description": "データ駆動予測、確率モデル、カーネル、実証評価が、手作業の記号知識の多くを置き換えた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第二次AIの冬",
            "description": "エキスパートシステム市場とLispマシン産業が崩壊し、投資は再び縮小した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "2015",
            "title": "現代強化学習の確立期",
            "description": "TD学習、Q学習、方策勾配、Actor–Criticが現代強化学習の中核手法として確立した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2011",
            "title": "アンサンブル学習の発展期",
            "description": "バギング、ブースティング、ランダムフォレストは、多様な弱学習器や不安定な学習器の組合せが高精度を生むことを示した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2008",
            "title": "カーネル法の時代",
            "description": "サポートベクターマシンとカーネル構成が、凸最適化と強い汎化理論を実用学習へ導入した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2006",
            "end": "2011",
            "title": "深層学習の復興",
            "description": "層ごとの事前学習、最適化改善、大規模データ、GPUにより、深いニューラルネットの学習が再び現実的になった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2012",
            "end": "2016",
            "title": "ImageNetとGPU深層学習の突破期",
            "description": "AlexNetと急速に進歩したCNNにより、深層学習が画像認識をはじめ多くの知覚課題の主流となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2018",
            "title": "Seq2SeqとAttentionへの移行期",
            "description": "Encoder–DecoderとAttentionが翻訳、音声、系列モデリングを変革し、Transformerへの道を開いた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2020",
            "title": "GAN中心の生成モデル期",
            "description": "敵対的学習が写実的画像生成、表現学習、制御可能生成を急速に進歩させた。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2016",
            "end": "2026",
            "title": "AI安全・アラインメント・ガバナンスの拡大期",
            "description": "技術的アラインメント、モデル評価、インシデント報告、国内外の規制がフロンティアAI開発の不可欠な要素となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2022",
            "title": "Transformerと大規模事前学習の時代",
            "description": "自己注意、スケーリング、転移学習により、汎用言語モデルと統一的なアーキテクチャが発展した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "拡散・フローベース生成の時代",
            "description": "拡散、スコアベース、フローマッチングが高品質な画像・動画・音声・マルチモーダル生成の中心となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2021",
            "end": "2026",
            "title": "マルチモーダル基盤モデルの時代",
            "description": "モデルはテキスト、画像、音声、動画、コード、行動にまたがる共有表現を学ぶようになった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2022",
            "end": "2026",
            "title": "生成AIの製品化期",
            "description": "対話アシスタント、画像生成、コーディングエージェントにより、基盤モデルが研究室から大衆製品へ移行した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "オープンウェイトモデル競争",
            "description": "Llama、Mistral、Qwen、DeepSeek、Gemmaなどが公開実験、ローカル実行、特化モデル開発を加速した。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "ツール利用・エージェントAIの時代",
            "description": "言語モデルは複数段階の計画、ツール呼出し、コンピュータ操作、専門サブエージェントの協調へ進んだ。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2024",
            "end": "2026",
            "title": "推論時推論モデルの時代",
            "description": "推論時に可変量の計算を使うモデルが登場し、熟考能力が新たなスケーリング軸となった。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// 数学・統計・計算の基礎
var tl_foundations = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "title": "Bayes’ theorem",
            "description": "Thomas Bayesの遺稿は逆確率を定式化し、観測証拠から未知の原因に関する信念を更新する枠組みを示した。"
        },
        {
            "start": "1805",
            "title": "Least-squares estimation",
            "description": "Adrien-Marie Legendreが最小二乗法を公表し、回帰、パラメータ推定、現代的損失最小化の基礎となった。"
        },
        {
            "start": "1847",
            "title": "Gradient descent",
            "description": "Augustin-Louis Cauchyは導関数に沿って多変数関数を最適化する降下法を記述し、後のニューラルネット学習を先取りした。"
        },
        {
            "start": "1854",
            "title": "Boolean algebra",
            "description": "George Booleは論理命題を代数演算へ変換し、デジタル回路、記号推論、二進計算の基礎を築いた。"
        },
        {
            "start": "1901",
            "title": "Principal component analysis",
            "description": "Karl Pearsonは相関した観測を最大分散の低次元軸へ射影する主成分分析を導入した。"
        },
        {
            "start": "1906",
            "title": "Markov chains",
            "description": "Andrey Markovは次状態が現在状態に依存する確率過程を定式化し、系列モデルと強化学習の基礎を築いた。"
        },
        {
            "start": "1936",
            "title": "Linear discriminant analysis",
            "description": "Ronald Fisherはクラス分離を最大化する射影を導き、教師あり次元削減と分類の中心的手法を生んだ。"
        },
        {
            "start": "1936",
            "title": "Turing machine",
            "description": "Alan Turingは抽象機械と計算可能性を定式化し、人工知能が動作するアルゴリズム上の限界を定義した。"
        },
        {
            "start": "1943",
            "title": "McCulloch–Pitts neuron",
            "description": "Warren McCullochとWalter Pittsはニューロンを論理しきい値素子としてモデル化し、神経回路が論理関数を実装できることを示した。"
        },
        {
            "start": "1948",
            "title": "Information theory",
            "description": "Claude Shannonはエントロピーと通信路容量を定義し、不確実性、符号化、表現の定量的道具を機械学習へ与えた。"
        },
        {
            "start": "1949",
            "title": "Hebbian learning",
            "description": "Donald Hebbは同時に活動する神経間の結合が強化されると提案し、教師なし学習と表現学習の規則に影響を与えた。"
        },
        {
            "start": "1950",
            "title": "Turing test",
            "description": "Alan Turingは機械知能を内部機構ではなく言語行動による模倣ゲームとして操作的に捉え直した。"
        },
        {
            "start": "1950",
            "title": "Dynamic programming",
            "description": "Richard Bellmanは最適性原理に基づく再帰的最適化を発展させ、計画、制御、強化学習の中核を築いた。"
        }
    ]
};

// 記号AIと古典的機械学習アルゴリズム
var tl_classical_ml = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1951",
            "title": "Nearest-neighbor classification",
            "description": "Evelyn FixとJoseph Hodgesは近傍のラベル付き例に基づくノンパラメトリック分類を記述し、k近傍法の起点となった。"
        },
        {
            "start": "1952",
            "title": "Samuel’s self-learning checkers method",
            "description": "Arthur Samuelは探索、評価関数、対局からの学習を組み合わせ、機械学習という考えを実践的に確立した。"
        },
        {
            "start": "1957",
            "title": "Perceptron learning rule",
            "description": "Frank Rosenblattは誤り訂正更新則を持つ学習可能な線形しきい値分類器を提案した。"
        },
        {
            "start": "1957",
            "title": "Lloyd’s k-means algorithm",
            "description": "Stuart Lloydはベクトル量子化のための割当てと重心更新を反復する方法を定式化し、標準的k-means手順となった。"
        },
        {
            "start": "1958",
            "title": "Alpha–beta pruning",
            "description": "α–β枝刈りは最終判断に影響しない分岐を除外し、ミニマックスゲーム木探索を実用化した。"
        },
        {
            "start": "1958",
            "title": "Logistic regression formulation",
            "description": "David Coxは二値結果のロジスティック回帰を定式化し、後に標準的な確率分類器となった。"
        },
        {
            "start": "1959",
            "title": "Dijkstra’s shortest-path algorithm",
            "description": "Edsger Dijkstraは効率的な最短路法を導入し、計画、経路選択、グラフ探索の基礎となった。"
        },
        {
            "start": "1960",
            "title": "Kalman filter",
            "description": "Rudolf Kálmánは雑音を含む線形動的系の再帰的状態推定を導き、追跡、航法、制御を変革した。"
        },
        {
            "start": "1962",
            "title": "Rosenblatt convergence theorem",
            "description": "パーセプトロン収束定理は、線形分離器を有限回の更新で学習できる条件を明確にした。"
        },
        {
            "start": "1963",
            "title": "AID decision-tree method",
            "description": "Automatic Interaction Detectionは結果を説明するためデータを再帰分割し、現代的決定木の重要な先駆けとなった。"
        },
        {
            "start": "1965",
            "title": "Resolution theorem proving",
            "description": "John Alan Robinsonは一階述語論理の自動定理証明に対し、完全な推論規則として導出原理と単一化を導入した。"
        },
        {
            "start": "1965",
            "title": "Fuzzy sets",
            "description": "Lotfi Zadehは厳密な二値分類ではなく段階的所属度を導入し、ファジィ制御と近似推論を可能にした。"
        },
        {
            "start": "1966",
            "title": "Hidden Markov-model methods",
            "description": "Leonard Baumらは潜在状態系列モデルの確率推論と推定法を発展させた。"
        },
        {
            "start": "1967",
            "title": "Viterbi algorithm",
            "description": "Andrew Viterbiは最尤潜在状態系列を求める動的計画法を導入し、音声や系列復号の中核となった。"
        },
        {
            "start": "1967",
            "title": "Nearest-neighbor decision rule analysis",
            "description": "Thomas CoverとPeter Hartは最近傍分類の理論的誤差境界を示した。"
        },
        {
            "start": "1968",
            "title": "A* search",
            "description": "Peter Hart、Nils Nilsson、Bertram Raphaelは経路費用と許容的ヒューリスティックを組み合わせ、最適経路を効率的に探索した。"
        },
        {
            "start": "1969",
            "title": "Credit-assignment limits highlighted",
            "description": "MinskyとPapertの分析は単層パーセプトロンの表現限界を明確にし、ニューラルネット研究の方向を変えた。"
        },
        {
            "start": "1971",
            "title": "STRIPS planning",
            "description": "STRIPSは行動を前提条件と効果で表現し、自動計画の長期的基盤を築いた。"
        },
        {
            "start": "1972",
            "title": "Prolog",
            "description": "Alain ColmerauerらはPrologを開発し、論理プログラミングを記号AIとエキスパートシステムの実用媒体にした。"
        },
        {
            "start": "1973",
            "title": "Lighthill report",
            "description": "Lighthill報告は当時のAI手法のスケーラビリティを批判し、第一次AIの冬に英国資金が縮小する一因となった。"
        },
        {
            "start": "1974",
            "title": "Backpropagation through differentiable networks",
            "description": "Paul Werbosは多層ニューラルネットの学習に逆モード微分を適用する方法を記述した。"
        },
        {
            "start": "1977",
            "title": "Expectation–maximization algorithm",
            "description": "Dempster、Laird、Rubinは潜在・欠測データを含む反復最尤推定をEMアルゴリズムとして統一した。"
        },
        {
            "start": "1979",
            "title": "ID3 decision tree",
            "description": "Ross Quinlanは情報利得で再帰分割を選択し、影響力の大きい決定木学習系統を確立した。"
        },
        {
            "start": "1982",
            "title": "Hopfield network",
            "description": "John Hopfieldは再帰神経力学とエネルギー最小化を結び、連想記憶モデルを生み出した。"
        },
        {
            "start": "1982",
            "title": "Belief propagation",
            "description": "Judea Pearlは木構造での厳密推論のため局所メッセージ伝播を開発し、後にグラフィカルモデルや符号理論へ拡張された。"
        },
        {
            "start": "1984",
            "title": "CART",
            "description": "Breimanらは不純度分割とコスト複雑度剪定により分類回帰木を体系化した。"
        },
        {
            "start": "1984",
            "title": "Gibbs sampling",
            "description": "GemanとGemanはマルコフ確率場の座標別サンプリングを普及させ、後のベイズ計算の中核となった。"
        },
        {
            "start": "1985",
            "title": "Bayesian networks",
            "description": "Judea Pearlは条件付き独立性と因果仮説を表す有向非巡回グラフモデルを体系化した。"
        },
        {
            "start": "1985",
            "title": "Boltzmann machine",
            "description": "Ackley、Hinton、Sejnowskiは確率分布をモデル化する確率的エネルギーベース神経網を導入した。"
        },
        {
            "start": "1986",
            "title": "Backpropagation popularized",
            "description": "Rumelhart、Hinton、Williamsは多層ネットで分散表現を学ぶ効率的誤差逆伝播を実証した。"
        },
        {
            "start": "1986",
            "title": "Inductive bias and version spaces",
            "description": "Tom Mitchellのバージョン空間と帰納学習の定式化は、機械学習を体系的仮説探索として明確にした。"
        },
        {
            "start": "1988",
            "title": "Temporal-difference learning",
            "description": "Richard Suttonは連続する推定値から学ぶTD学習を体系化し、最終結果前の学習を可能にした。"
        },
        {
            "start": "1988",
            "title": "Radial basis-function networks",
            "description": "BroomheadとLoweは放射基底補間を学習可能なニューラルネットによる関数近似へ結びつけた。"
        },
        {
            "start": "1989",
            "title": "Q-learning",
            "description": "Christopher Watkinsは環境モデルなしに最適行動価値を学ぶオフポリシーTDアルゴリズムを導入した。"
        },
        {
            "start": "1989",
            "title": "Universal approximation theorem",
            "description": "Cybenkoらは十分大きな単一隠れ層ネットが広い連続関数群を近似できることを証明した。"
        },
        {
            "start": "1990",
            "title": "QDA and modern statistical classification texts",
            "description": "統計学習は生成分類器、判別分析、交差検証を再利用可能な予測ツール群として統合した。"
        },
        {
            "start": "1990",
            "title": "Latent semantic analysis",
            "description": "Deerwesterらは特異値分解により文書と語の低次元意味表現を導出した。"
        },
        {
            "start": "1992",
            "title": "REINFORCE policy gradient",
            "description": "Ronald Williamsは確率方策を最適化する不偏な尤度比勾配推定量REINFORCEを導入した。"
        },
        {
            "start": "1992",
            "title": "Kernel trick for nonlinear learning",
            "description": "Boser、Guyon、Vapnikは最大マージン分類器にカーネルを用い、内積だけで非線形判定を可能にした。"
        },
        {
            "start": "1993",
            "title": "Particle filtering",
            "description": "逐次モンテカルロ法は非線形・非ガウス状態の不確実性を重み付き粒子で表現した。"
        },
        {
            "start": "1994",
            "title": "SARSA",
            "description": "RummeryとNiranjanはオンポリシーTD制御を記述し、状態・行動遷移の組からSARSAと呼ばれた。"
        },
        {
            "start": "1994",
            "title": "BM25 ranking",
            "description": "Okapi BM25は確率的語重み付けと文書長正規化を組み合わせ、長寿命の情報検索基準となった。"
        },
        {
            "start": "1995",
            "title": "Support-vector machines",
            "description": "CortesとVapnikはソフトマージンSVMを示し、最大マージン学習と非分離データへの頑健性を統合した。"
        },
        {
            "start": "1995",
            "title": "AdaBoost",
            "description": "FreundとSchapireは例の重みを反復更新し、弱学習器を強い分類器へ統合する方法を示した。"
        },
        {
            "start": "1996",
            "title": "DBSCAN",
            "description": "Esterらは不規則形状のクラスタを発見し、疎な点をノイズとする密度ベースクラスタリングを導入した。"
        },
        {
            "start": "1996",
            "title": "Independent component analysis",
            "description": "ICAは混合観測から統計的に独立な潜在源を分離する実用手法として成熟した。"
        },
        {
            "start": "1997",
            "title": "Long short-term memory",
            "description": "HochreiterとSchmidhuberは勾配を保持し長期依存を学ぶゲート付き記憶セルLSTMを導入した。"
        },
        {
            "start": "1997",
            "title": "Boosting as additive modeling",
            "description": "Friedman、Hastie、Tibshiraniはブースティングを段階的加法モデルと結び、最適化挙動を明確にした。"
        },
        {
            "start": "1998",
            "title": "LeNet-5 and gradient-based document recognition",
            "description": "LeCunらは手書き数字・文書認識のためのエンドツーエンド畳み込みシステムを実証した。"
        },
        {
            "start": "1998",
            "title": "Rapidly-exploring random trees",
            "description": "Steven LaValleはロボット計画の高次元連続配置空間を効率よく探索するRRTを導入した。"
        },
        {
            "start": "1999",
            "title": "Gradient boosting",
            "description": "Jerome Friedmanはブースティングを関数勾配降下として定式化し、強力な木アンサンブルの柔軟な枠組みを生んだ。"
        },
        {
            "start": "2000",
            "title": "Minimum-redundancy feature selection",
            "description": "相互情報量基準により、目的との関連性と入力間の冗長性を両立する特徴選択が発展した。"
        },
        {
            "start": "2001",
            "title": "Random forests",
            "description": "Leo Breimanはバギングとランダム特徴選択を組み合わせ、高精度で頑健かつ並列化しやすい木アンサンブルを生んだ。"
        },
        {
            "start": "2001",
            "title": "Conditional random fields",
            "description": "Lafferty、McCallum、PereiraはHMMの強い独立仮定を避ける識別的無向系列モデルCRFを導入した。"
        },
        {
            "start": "2001",
            "title": "Spectral clustering",
            "description": "グラフラプラシアンの固有ベクトルにより、類似度から非凸クラスタ構造を抽出する原理的手法が確立した。"
        },
        {
            "start": "2003",
            "title": "Latent Dirichlet allocation",
            "description": "Blei、Ng、Jordanは文書を潜在トピック混合として表す生成確率トピックモデルLDAを導入した。"
        },
        {
            "start": "2003",
            "title": "Maximum-entropy Markov models and discriminative sequence learning",
            "description": "識別的系列モデルは豊富な特徴分類と構造予測を結び、CRF中心のNLPへの道を開いた。"
        },
        {
            "start": "2004",
            "title": "Large-margin structured prediction",
            "description": "Structured SVMは最大マージン学習をラベルから系列、木、その他の複雑出力へ拡張した。"
        },
        {
            "start": "2005",
            "title": "Gaussian-process classification and regression mature",
            "description": "ガウス過程は校正された予測と不確実性推定のための実用的ベイズノンパラメトリック枠組みとして成熟した。"
        },
        {
            "start": "2006",
            "title": "Matrix factorization for recommender systems",
            "description": "低ランクのユーザー・アイテム因子分解がNetflix Prize期の協調フィルタリングで主流となった。"
        },
        {
            "start": "2006",
            "title": "Compressed sensing",
            "description": "疎復元理論は構造化信号を少数観測から凸最適化で再構成できることを示した。"
        },
        {
            "start": "2007",
            "title": "Online passive–aggressive algorithms",
            "description": "マージン型オンライン更新は大規模分類、ランキング、構造予測の高速学習を可能にした。"
        },
        {
            "start": "2008",
            "title": "t-SNE",
            "description": "van der MaatenとHintonは局所近傍を低次元写像で保つ非線形可視化法t-SNEを導入した。"
        },
        {
            "start": "2008",
            "title": "Isolation forest",
            "description": "Liu、Ting、Zhouはランダム分割で点が隔離される速さから異常を検出するIsolation Forestを提案した。"
        },
        {
            "start": "2009",
            "title": "Feature hashing",
            "description": "ハッシングトリックは語彙表を保存せず巨大な疎特徴空間を固定次元へ写像した。"
        },
        {
            "start": "2010",
            "title": "Elastic net and sparse regularization become standard",
            "description": "L1/L2を組み合わせた正則化が、相関する高次元データに対する安定な疎モデルを提供した。"
        },
        {
            "start": "2011",
            "title": "Bayesian optimization with Gaussian processes",
            "description": "逐次獲得関数により、ハイパーパラメータや実験の高コストなブラックボックス最適化が実用化した。"
        },
        {
            "start": "2012",
            "title": "Randomized search for hyperparameters",
            "description": "BergstraとBengioはランダム探索が格子探索より重要なハイパーパラメータを効率よく調べる場合が多いと示した。"
        },
        {
            "start": "2013",
            "title": "Word2vec",
            "description": "Mikolovらは意味的幾何を持つ密な単語埋め込みを効率よく学習するSkip-gramとCBOWを導入した。"
        },
        {
            "start": "2014",
            "title": "GloVe",
            "description": "Pennington、Socher、Manningは大域的単語共起統計と埋め込み因子分解を統合した。"
        },
        {
            "start": "2015",
            "title": "Knowledge distillation",
            "description": "Hinton、Vinyals、Deanは大規模教師モデルの軟化出力を模倣する小型学生モデルを学習した。"
        },
        {
            "start": "2016",
            "title": "XGBoost",
            "description": "ChenとGuestrinはスケーラブルで正則化された勾配ブースティング木XGBoostを示し、表形式データの代表的基準となった。"
        },
        {
            "start": "2016",
            "title": "FastText subword embeddings",
            "description": "Facebook AIは文字n-gramで単語を表し、希少語や形態豊かな言語のモデリングを改善した。"
        },
        {
            "start": "2017",
            "title": "LightGBM",
            "description": "Microsoftは大規模・高次元疎データ向けに最適化したヒストグラム型葉優先勾配ブースティングLightGBMを導入した。"
        },
        {
            "start": "2018",
            "title": "CatBoost",
            "description": "Yandexは順序付きブースティングと目的統計処理により、カテゴリ特徴学習の漏洩と偏りを減らした。"
        },
        {
            "start": "2018",
            "title": "UMAP",
            "description": "McInnes、Healy、Melvilleは可視化と近傍保持埋め込みのためのスケーラブルな多様体学習UMAPを導入した。"
        },
        {
            "start": "2019",
            "title": "Neural architecture search matures",
            "description": "重み共有、微分可能探索、ハードウェア指向目的により、自動ネットワーク設計が実用化した。"
        },
        {
            "start": "2020",
            "title": "Conformal prediction revival",
            "description": "分布仮定なしの予測集合が、機械学習出力の不確実性被覆を与える実用手法として再評価された。"
        }
    ]
};

// ニューラルネットワーク・深層学習・生成アルゴリズム
var tl_deep_learning = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1980",
            "title": "Neocognitron",
            "description": "福島邦彦は局所受容野とプーリングを持つ階層的畳み込み型ネットワークNeocognitronを提案し、現代CNNを先取りした。"
        },
        {
            "start": "1989",
            "title": "Convolutional neural networks trained by backpropagation",
            "description": "LeCunらは畳み込み、重み共有、誤差逆伝播を組み合わせ、手書き郵便番号認識を実現した。"
        },
        {
            "start": "1991",
            "title": "Mixture of experts",
            "description": "Jacobs、Jordanらは入力を専門サブネットへ振り分けるゲート付きMixture of Expertsを導入した。"
        },
        {
            "start": "1991",
            "title": "Vanishing-gradient problem analyzed",
            "description": "Sepp Hochreiterは深層・再帰ネットで勾配が層や時間をまたいで指数的に消失する理由を明確にした。"
        },
        {
            "start": "1997",
            "title": "Bidirectional recurrent neural networks",
            "description": "双方向RNNは過去と未来の文脈を利用し、後に音声や系列ラベリングの標準となった。"
        },
        {
            "start": "2000",
            "title": "Echo-state networks",
            "description": "Herbert Jaegerは固定再帰ダイナミクスと学習可能な線形出力を持つリザバー計算Echo State Networkを導入した。"
        },
        {
            "start": "2003",
            "title": "Neural probabilistic language model",
            "description": "Bengioらは分散単語表現と次単語確率を共同学習し、離散n-gramの疎性を克服した。"
        },
        {
            "start": "2006",
            "title": "Deep belief networks and greedy layer-wise pretraining",
            "description": "Hinton、Osindero、Tehは制限ボルツマンマシンを積層することで深層ネットを効果的に初期化できると示した。"
        },
        {
            "start": "2006",
            "title": "Connectionist temporal classification",
            "description": "Alex Gravesらは未分割系列と出力を整列するCTCを導入し、エンドツーエンド音声認識を変革した。"
        },
        {
            "start": "2007",
            "title": "Sparse autoencoders",
            "description": "疎性ペナルティにより、オートエンコーダが未ラベルデータから選択的潜在特徴を学ぶようになった。"
        },
        {
            "start": "2008",
            "title": "Denoising autoencoders",
            "description": "Vincentらは破損入力から元の入力を復元する学習により、頑健な表現を獲得した。"
        },
        {
            "start": "2009",
            "title": "GPU-accelerated neural-network training",
            "description": "GPUによる大幅な高速化が実証され、GPU中心の深層学習基盤を予告した。"
        },
        {
            "start": "2010",
            "title": "Rectified linear units",
            "description": "ReLU活性化は最適化を単純化し飽和を減らし、深層ネットの標準要素となった。"
        },
        {
            "start": "2011",
            "title": "Deep rectifier acoustic models",
            "description": "大規模音声モデルにより、ReLUが実用規模の深層ネットを効果的に学習できることが示された。"
        },
        {
            "start": "2012",
            "title": "Dropout",
            "description": "Hintonらは学習中にユニットをランダムに除去し、共適応を抑えて汎化を改善した。"
        },
        {
            "start": "2012",
            "title": "AlexNet training recipe",
            "description": "Krizhevsky、Sutskever、HintonはGPU、ReLU、Dropout、データ拡張、大規模CNNを組み合わせImageNetを圧勝した。"
        },
        {
            "start": "2013",
            "title": "Maxout networks",
            "description": "GoodfellowらはDropoutと相性の良い区分線形Maxoutユニットを導入した。"
        },
        {
            "start": "2013",
            "title": "Variational autoencoder",
            "description": "KingmaとWellingは再パラメータ化変分推論により学習可能な潜在変数生成モデルVAEを導入した。"
        },
        {
            "start": "2013",
            "title": "Distributed representations with negative sampling",
            "description": "Negative Samplingは大語彙埋め込み学習を効率化し、学習された意味ベクトル空間を普及させた。"
        },
        {
            "start": "2014",
            "title": "Generative adversarial networks",
            "description": "Goodfellowらは明示的尤度なしでデータ生成を学ぶGenerator–DiscriminatorゲームGANを定式化した。"
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence learning",
            "description": "Sutskever、Vinyals、Leは可変長入力系列を出力系列へ写像するEncoder–Decoder LSTMを導入した。"
        },
        {
            "start": "2014",
            "title": "Neural attention for translation",
            "description": "Bahdanau、Cho、BengioはDecoderが関連Encoder状態へ動的に注目する仕組みを導入し、固定ベクトル瓶頸を解消した。"
        },
        {
            "start": "2014",
            "title": "Gated recurrent unit",
            "description": "ChoらはLSTMより簡潔で多くの場合同等性能を持つゲート付き再帰構造GRUを導入した。"
        },
        {
            "start": "2014",
            "title": "Adam optimizer",
            "description": "KingmaとBaはモメンタムとパラメータ別適応学習率を組み合わせ、広く使われるAdamを生んだ。"
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "大規模顔認識システムが3D整列と深層表現学習を組み合わせ、人間に近い照合精度へ到達した。"
        },
        {
            "start": "2015",
            "title": "Batch normalization",
            "description": "IoffeとSzegedyは学習中の中間活性を正規化し、高い学習率と安定した深層ネット学習を可能にした。"
        },
        {
            "start": "2015",
            "title": "Residual networks",
            "description": "HeらはResidual Connectionを導入し、非常に深いネットワークを安定して最適化可能にした。"
        },
        {
            "start": "2015",
            "title": "U-Net",
            "description": "Ronneberger、Fischer、Broxは精密な生医学画像分割のためSkip Connection付きEncoder–Decoder CNN U-Netを開発した。"
        },
        {
            "start": "2015",
            "title": "Faster R-CNN",
            "description": "Renらは領域提案を学習可能CNNへ統合し、効率的物体検出を一体化した。"
        },
        {
            "start": "2015",
            "title": "YOLO",
            "description": "Redmonらは物体検出を画像全体に対する単一のリアルタイム回帰問題として再定式化した。"
        },
        {
            "start": "2015",
            "title": "Deep reinforcement learning with DQN",
            "description": "DeepMindはQ学習、CNN、Experience Replay、Target Networkを組み合わせ、画素からAtariゲームを学習した。"
        },
        {
            "start": "2015",
            "title": "Neural style transfer",
            "description": "Gatys、Ecker、BethgeはCNN特徴統計で内容と様式を分離し、最適化型スタイル変換を実現した。"
        },
        {
            "start": "2015",
            "title": "Normalizing flows",
            "description": "可逆変換により柔軟な連続生成モデルで厳密尤度評価とサンプリングが可能になった。"
        },
        {
            "start": "2016",
            "title": "DenseNet",
            "description": "Huangらは各層を後続すべての層へ接続し、特徴再利用と勾配流を改善した。"
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMindは生音声生成のため自己回帰Dilated Convolutionを導入し、ニューラル音声合成を大きく改善した。"
        },
        {
            "start": "2016",
            "title": "PixelRNN and PixelCNN",
            "description": "自己回帰画像モデルは画素を条件付きで順次生成し、尤度計算可能な画像生成を実現した。"
        },
        {
            "start": "2016",
            "title": "Graph convolutional networks",
            "description": "KipfとWellingはスペクトルグラフ畳み込みを効率的な近傍集約則へ簡略化した。"
        },
        {
            "start": "2016",
            "title": "A3C",
            "description": "A3CはExperience Replayなしで複数Agentを非同期並列学習し、深層強化学習を安定化した。"
        },
        {
            "start": "2016",
            "title": "Neural machine translation with subword units",
            "description": "テキスト向けBPEは未知語問題を減らし、ニューラル言語モデルの標準となった。"
        },
        {
            "start": "2017",
            "title": "Transformer",
            "description": "Vaswaniらは再帰をMulti-Head Self-Attentionで置き換え、高度に並列な系列モデリングを実現した。"
        },
        {
            "start": "2017",
            "title": "Proximal policy optimization",
            "description": "Schulmanらは安定・簡潔・効果的な方策勾配更新のためClipped Surrogate Objectiveを持つPPOを導入した。"
        },
        {
            "start": "2017",
            "title": "GraphSAGE",
            "description": "Hamilton、Ying、Leskovecは未知ノードへ一般化する近傍集約関数GraphSAGEを学習した。"
        },
        {
            "start": "2017",
            "title": "Graph attention networks",
            "description": "Veličkovićらは学習されたAttention重みでグラフ近傍を集約するGATを導入した。"
        },
        {
            "start": "2017",
            "title": "Wasserstein GAN",
            "description": "Arjovsky、Chintala、BottouはEarth Mover距離目的を用い、GAN最適化を安定化した。"
        },
        {
            "start": "2017",
            "title": "Mask R-CNN",
            "description": "Heらは物体検出へ画素単位Mask分岐を追加し、Instance Segmentationを統合した。"
        },
        {
            "start": "2017",
            "title": "Tacotron",
            "description": "エンドツーエンド系列モデルがテキストを直接スペクトログラムへ写像し、音声合成パイプラインを簡素化した。"
        },
        {
            "start": "2018",
            "title": "BERT masked-language pretraining",
            "description": "DevlinらはMask Tokenと次文予測で双方向Transformerを事前学習し、NLP転移学習を変革した。"
        },
        {
            "start": "2018",
            "title": "GPT generative pretraining",
            "description": "OpenAIは自己回帰Transformer事前学習とタスク微調整が多様な言語課題へ転移することを示した。"
        },
        {
            "start": "2018",
            "title": "ELMo contextual embeddings",
            "description": "Petersらは深い双方向言語モデルから文脈依存単語表現ELMoを導出した。"
        },
        {
            "start": "2018",
            "title": "ULMFiT",
            "description": "HowardとRuderは識別的微調整と段階的凍結解除により効果的な言語モデル転移を実現した。"
        },
        {
            "start": "2018",
            "title": "StyleGAN",
            "description": "KarrasらはGenerator層をStyleで制御し、画像品質と意味編集性を大きく改善した。"
        },
        {
            "start": "2018",
            "title": "Lottery ticket hypothesis",
            "description": "FrankleとCarbinは密なネット内に適切な初期値から同等精度へ学習できる疎なサブネットが存在すると示した。"
        },
        {
            "start": "2018",
            "title": "Contrastive predictive coding",
            "description": "CPCは対照目的で将来の潜在状態を予測し、表現を学習した。"
        },
        {
            "start": "2019",
            "title": "Transformer-XL",
            "description": "Segment Recurrenceと相対位置により、Transformerの文脈を固定学習窓より長く拡張した。"
        },
        {
            "start": "2019",
            "title": "RoBERTa",
            "description": "改善されたBERT学習法は、規模、データ、最適化選択が構造的新規性と同程度に重要だと示した。"
        },
        {
            "start": "2019",
            "title": "T5 text-to-text transfer",
            "description": "Googleは全NLP課題をText-to-Text生成として統一し、大規模転移を体系的に研究した。"
        },
        {
            "start": "2019",
            "title": "Sparse Transformer",
            "description": "構造化疎Attentionは二乗計算量を減らし、より長い系列を可能にした。"
        },
        {
            "start": "2019",
            "title": "Multi-query attention",
            "description": "Key・Value Head共有により自己回帰復号のメモリと帯域コストを削減した。"
        },
        {
            "start": "2019",
            "title": "Score-based generative modeling",
            "description": "SongとErmonはデータ対数密度の勾配を学習し、Langevin Dynamicsでサンプル生成した。"
        },
        {
            "start": "2019",
            "title": "Adapters for parameter-efficient transfer",
            "description": "小さなAdapterモジュールにより、大部分の事前学習パラメータを凍結したままタスク適応できた。"
        },
        {
            "start": "2019",
            "title": "wav2vec",
            "description": "生音声からの自己教師あり学習により、少量ラベルでも有用な音声表現を得た。"
        },
        {
            "start": "2020",
            "title": "GPT-3 in-context learning",
            "description": "自己回帰言語モデルの大規模化により、利用時の勾配更新なしで強いFew-shot・Zero-shot性能が現れた。"
        },
        {
            "start": "2020",
            "title": "Scaling laws for neural language models",
            "description": "Kaplanらはモデル規模、データ、計算量に対する予測可能な冪乗則改善を定量化した。"
        },
        {
            "start": "2020",
            "title": "Vision Transformer",
            "description": "Dosovitskiyらは画像Patchへ純Transformerを適用し、大規模で高い視覚性能を示した。"
        },
        {
            "start": "2020",
            "title": "DETR",
            "description": "CarionらはTransformerと二部マッチングにより物体検出を直接集合予測として定式化した。"
        },
        {
            "start": "2020",
            "title": "DDPM diffusion models",
            "description": "Ho、Jain、Abbeelは安定した尤度型目的で高品質画像を生成するDDPMを学習した。"
        },
        {
            "start": "2020",
            "title": "SimCLR",
            "description": "強い画像拡張と大規模Batchの対照学習により、高性能な自己教師あり視覚表現を得た。"
        },
        {
            "start": "2020",
            "title": "MoCo",
            "description": "Momentum更新EncoderとQueueにより、多数の一貫した負例を用いる対照学習が可能になった。"
        },
        {
            "start": "2020",
            "title": "BYOL",
            "description": "BYOLはOnline NetworkとTarget Networkを用い、明示的負例なしで強い視覚表現を学習した。"
        },
        {
            "start": "2020",
            "title": "Retrieval-augmented generation",
            "description": "Lewisらはニューラル検索と系列生成を結合し、予測中に外部文書を参照できるRAGを導入した。"
        },
        {
            "start": "2020",
            "title": "REALM retrieval pretraining",
            "description": "Googleは検索と言語モデルを共同学習し、大規模コーパスを参照する事実生成を実現した。"
        },
        {
            "start": "2020",
            "title": "Neural ordinary differential equations mature",
            "description": "連続深度モデルがニューラルネットと微分方程式Solver、適応計算を結びつけた。"
        },
        {
            "start": "2021",
            "title": "CLIP",
            "description": "OpenAIは大規模自然言語監督で画像・テキストEncoderを学習し、Zero-shot画像分類を実現した。"
        },
        {
            "start": "2021",
            "title": "DALL·E discrete image generation",
            "description": "Transformerがテキストと画像Tokenを共同モデル化し、柔軟なテキスト条件画像生成を示した。"
        },
        {
            "start": "2021",
            "title": "LoRA",
            "description": "LoRAは基盤モデルを凍結し低ランク分解行列だけを学習して、微調整コストを大幅削減した。"
        },
        {
            "start": "2021",
            "title": "Prefix tuning",
            "description": "学習可能な連続Prefix Vectorが、少量タスク別パラメータで凍結言語モデルを制御した。"
        },
        {
            "start": "2021",
            "title": "Prompt tuning",
            "description": "Soft Prompt埋め込みにより、大規模言語モデルを小さな学習入力Prefixだけで適応できると示した。"
        },
        {
            "start": "2021",
            "title": "Switch Transformer",
            "description": "疎なMixture-of-Experts Routingにより、Tokenごとに少数Expertだけを動かしつつ容量を大幅拡大した。"
        },
        {
            "start": "2021",
            "title": "Rotary positional embeddings",
            "description": "RoPEはQuery・Key Vectorを回転して相対位置を符号化し、多くの大規模言語モデルで採用された。"
        },
        {
            "start": "2021",
            "title": "ALiBi",
            "description": "線形Attention Biasにより、学習位置埋め込みなしでTransformerがより長い系列へ外挿できた。"
        },
        {
            "start": "2021",
            "title": "Masked autoencoders",
            "description": "MAEは大部分をMaskした画像Patchを再構成するVision Transformerを学習し、スケーラブルな自己教師あり特徴を得た。"
        },
        {
            "start": "2021",
            "title": "DINO self-distillation",
            "description": "ラベルなしTeacher–Student自己蒸留により、意味的に整理された視覚特徴とAttention Mapを得た。"
        },
        {
            "start": "2021",
            "title": "HuBERT",
            "description": "クラスタ化音響単位のMask予測により、高性能な自己教師あり音声表現を得た。"
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "強化学習を目標Return条件付き系列モデリングとして捉え、制御とTransformer生成を接続した。"
        },
        {
            "start": "2022",
            "title": "Chinchilla compute-optimal scaling",
            "description": "DeepMindは多くのLLMが学習不足であり、パラメータとデータを均衡拡大すると計算効率が上がると示した。"
        },
        {
            "start": "2022",
            "title": "Chain-of-thought prompting",
            "description": "Weiらは中間推論例が十分大きな言語モデルの多段推論を引き出すと示した。"
        },
        {
            "start": "2022",
            "title": "Self-consistency decoding",
            "description": "複数推論経路をSamplingし答えを多数決することでChain-of-Thoughtの信頼性を改善した。"
        },
        {
            "start": "2022",
            "title": "ReAct",
            "description": "推論記録と外部行動・観測を交互に行い、ツール利用Agentの基本パターンを確立した。"
        },
        {
            "start": "2022",
            "title": "InstructGPT and RLHF pipeline",
            "description": "OpenAIは教師例、選好モデル、強化学習を組み合わせ、言語モデル行動を利用者意図へ整合させた。"
        },
        {
            "start": "2022",
            "title": "Latent diffusion models",
            "description": "Rombachらは拡散を学習潜在空間へ移し、高画質を保ちながら計算量を大幅削減した。"
        },
        {
            "start": "2022",
            "title": "FlashAttention",
            "description": "DaoらはGPUメモリ階層に合わせて厳密Attentionを再構成し、メモリ転送を減らして長系列学習を高速化した。"
        },
        {
            "start": "2022",
            "title": "Grouped-query attention",
            "description": "GQAはQuery Head群でKey・Value Headを共有し、品質と高速復号を両立した。"
        },
        {
            "start": "2022",
            "title": "Flow matching",
            "description": "ベクトル場マッチングでContinuous Normalizing Flowを学習し、高速生成輸送への柔軟な道を示した。"
        },
        {
            "start": "2022",
            "title": "Rectified flow",
            "description": "Rectified FlowはNoiseとData間の輸送軌道を直線化し、少Step生成を効率化した。"
        },
        {
            "start": "2022",
            "title": "Constitutional AI",
            "description": "Anthropicは明文化原則とAI Feedbackを用い、直接Human Labelへの依存を減らしつつ有用な行動を学習した。"
        },
        {
            "start": "2023",
            "title": "Direct preference optimization",
            "description": "DPOは独立Reward Modelや強化学習なしで選好尤度を直接最適化した。"
        },
        {
            "start": "2023",
            "title": "QLoRA",
            "description": "4bit量子化とLoRAにより、比較的小さなハードウェアで巨大モデルを高品質微調整できた。"
        },
        {
            "start": "2023",
            "title": "GPTQ post-training quantization",
            "description": "二次情報を考慮した重み量子化により、精度損失を抑えながらLLMを大幅縮小した。"
        },
        {
            "start": "2023",
            "title": "AWQ activation-aware quantization",
            "description": "Activation統計から重要重みを特定し、低bit圧縮時に保護するAWQを提案した。"
        },
        {
            "start": "2023",
            "title": "Speculative decoding",
            "description": "小型Draft ModelがToken列を提案し大型Modelが並列検証することで、厳密自己回帰Samplingを高速化した。"
        },
        {
            "start": "2023",
            "title": "Toolformer",
            "description": "言語モデルが自己生成例から外部Toolをいつどのように呼ぶかを学習した。"
        },
        {
            "start": "2023",
            "title": "Segment Anything",
            "description": "Metaは巨大Mask Datasetで学習したPrompt可能画像分割SAMを導入し、広いZero-shot転移を実現した。"
        },
        {
            "start": "2023",
            "title": "Diffusion Policy",
            "description": "Robot行動を去Noise軌道として生成し、操作向けの表現力豊かな多峰性方策を得た。"
        },
        {
            "start": "2023",
            "title": "Mixture-of-depths and conditional computation revival",
            "description": "動的Token RoutingがExpertだけでなく系列位置ごとの計算深度も変える方向へ進んだ。"
        },
        {
            "start": "2024",
            "title": "Group relative policy optimization",
            "description": "GRPOは回答群から相対Advantageを推定し、推論強化学習で学習Value Modelへの依存を減らした。"
        },
        {
            "start": "2024",
            "title": "Preference optimization without reference models",
            "description": "固定Reference Policyへの依存を除去・軽減する目的関数が、Alignment学習を簡素化した。"
        },
        {
            "start": "2024",
            "title": "Long-context ring attention",
            "description": "Distributed AttentionがDeviceをRing状に接続し、単一Accelerator Memoryを超える長文脈学習・推論を可能にした。"
        },
        {
            "start": "2024",
            "title": "Test-time compute scaling",
            "description": "探索、検証、長い内部推論により、推論時計算を増やすと難問性能が系統的に向上すると示された。"
        },
        {
            "start": "2025",
            "title": "Hybrid thinking modes",
            "description": "単一Model Family内で高速直接応答と制御可能な長時間推論を組み合わせるHybrid Thinkingが普及した。"
        },
        {
            "start": "2025",
            "title": "Agentic reinforcement learning",
            "description": "End-to-End強化学習が複数段Tool利用、検索、環境相互作用を通じてAgentを学習する方向へ進んだ。"
        },
        {
            "start": "2026",
            "title": "Multi-agent orchestration at inference time",
            "description": "Frontier Systemは長時間Knowledge Workのため専門Subagent、Verifier、共有Toolを協調させるようになった。"
        }
    ]
};

// 強化学習・計画・エージェント
var tl_rl_agents = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1959",
            "title": "General Problem Solver",
            "description": "Newell、Simon、Shawは現状態と目標の差を縮めるMeans–Ends Analysisを用いた。"
        },
        {
            "start": "1960",
            "title": "Markov decision processes formalized for control",
            "description": "動的計画法と確率制御が状態、行動、遷移、報酬による定式化へ収束した。"
        },
        {
            "start": "1966",
            "title": "Shakey robot planning stack",
            "description": "SRIのShakeyは移動Robotで知覚、世界Model、計画、行動を統合した。"
        },
        {
            "start": "1975",
            "title": "Actor–critic architecture",
            "description": "Adaptive Criticは方策選択と価値評価を分離し、現代Actor–Critic強化学習を先取りした。"
        },
        {
            "start": "1983",
            "title": "Formal actor–critic learning",
            "description": "Barto、Sutton、AndersonはCritic信号により制御を学ぶ神経様適応要素を実証した。"
        },
        {
            "start": "1989",
            "title": "Behavior cloning for autonomous driving",
            "description": "ALVINNは人間の運転例から操舵を学習し、初期の影響力ある模倣学習Systemとなった。"
        },
        {
            "start": "1992",
            "title": "TD-Gammon self-play",
            "description": "Gerald TesauroはTD学習とSelf-playで高水準のBackgammon性能へ到達した。"
        },
        {
            "start": "1994",
            "title": "Partially observable Markov decision processes",
            "description": "Belief State計画が、Agentが真状態を直接観測できない場合の意思決定を形式化した。"
        },
        {
            "start": "1997",
            "title": "Monte Carlo tree search precursors",
            "description": "Samplingに基づく先読みが、分岐の大きい空間で全探索Game Treeを置き換え始めた。"
        },
        {
            "start": "1998",
            "title": "Dyna architecture",
            "description": "Suttonは学習Modelから模擬Experienceを生成し、学習・計画・行動をDynaとして統合した。"
        },
        {
            "start": "2006",
            "title": "Upper-confidence trees",
            "description": "UCTはBandit信頼上界をMonte Carlo Tree Searchへ適用し、巨大Game空間で強力な計画を可能にした。"
        },
        {
            "start": "2009",
            "title": "Inverse reinforcement learning matures",
            "description": "Agentが専門家行動から報酬関数を推定し、模倣を潜在目的の復元として捉え直した。"
        },
        {
            "start": "2011",
            "title": "DAgger",
            "description": "DAggerはLearnerが訪れた状態で専門家へ反復照会し、模倣学習の誤差累積を減らした。"
        },
        {
            "start": "2012",
            "title": "Monte Carlo tree search in computer Go",
            "description": "学習・手作業方策を持つMCTSがAlphaGo以前のComputer Goで主流探索となった。"
        },
        {
            "start": "2013",
            "title": "Deep Q-network breakthrough",
            "description": "単一の深層強化学習Algorithmが画素と報酬だけから複数Atari Gameを学習した。"
        },
        {
            "start": "2015",
            "title": "Trust-region policy optimization",
            "description": "TRPOは方策更新をDivergence制約内に保ち、大規模Neural Policy学習を安定化した。"
        },
        {
            "start": "2015",
            "title": "Deep deterministic policy gradient",
            "description": "DDPGはActor–Criticと決定論的方策を組み合わせ、連続制御へ適用した。"
        },
        {
            "start": "2016",
            "title": "AlphaGo policy, value and tree search",
            "description": "DeepMindは教師あり学習、強化学習、Value Network、MCTSを統合し李世乭に勝利した。"
        },
        {
            "start": "2016",
            "title": "Asynchronous deep RL",
            "description": "並列Actor-Learnerが方策学習を安定化し、Replay Buffer依存を減らした。"
        },
        {
            "start": "2017",
            "title": "AlphaZero",
            "description": "Self-play、Neural Policy–Value、MCTSにより、人間棋譜なしでChess、将棋、Goを学習した。"
        },
        {
            "start": "2017",
            "title": "Soft actor–critic",
            "description": "Maximum Entropy強化学習が報酬を最適化しつつ多様な探索行動を促した。"
        },
        {
            "start": "2018",
            "title": "IMPALA",
            "description": "分散Actorが大規模Experienceを生成し、V-traceがOff-policyずれを補正した。"
        },
        {
            "start": "2018",
            "title": "OpenAI Five",
            "description": "大規模Self-playと分散強化学習がDota 2でProfessional級Team Playへ到達した。"
        },
        {
            "start": "2019",
            "title": "MuZero",
            "description": "MuZeroは環境観測を再構成せず計画に必要な潜在Dynamics Modelを学習した。"
        },
        {
            "start": "2019",
            "title": "AlphaStar",
            "description": "DeepMindはLeague型Self-play、模倣、Multi-agent RLを組み合わせStarCraft IIでGrandmaster級へ到達した。"
        },
        {
            "start": "2020",
            "title": "Conservative Q-learning",
            "description": "CQLはDatasetに支持されない行動の過大価値を罰し、安全なOffline Policy学習を改善した。"
        },
        {
            "start": "2020",
            "title": "Dreamer world models",
            "description": "Agentは圧縮潜在Dynamicsを学び、想像軌道上で行動を最適化した。"
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "Offline Controlを状態・行動・Returnの条件付き系列予測としてモデル化した。"
        },
        {
            "start": "2021",
            "title": "Reward modeling from human preferences scales",
            "description": "選好比較が大規模言語モデルとAgentを整合させる中心的監督信号となった。"
        },
        {
            "start": "2022",
            "title": "SayCan",
            "description": "言語ModelのAffordance ScoreとRobot Skill Valueを組み合わせ、実行可能な家庭行動を計画した。"
        },
        {
            "start": "2022",
            "title": "RT-1",
            "description": "Transformer型Robot Policyが大規模実演Datasetから数百の実世界操作Taskを学習した。"
        },
        {
            "start": "2023",
            "title": "RT-2 vision-language-action model",
            "description": "Internet規模の視覚言語知識をRobot Action Tokenへ転移し、一般化を改善した。"
        },
        {
            "start": "2023",
            "title": "Tree of Thoughts",
            "description": "言語Model推論を単一Chainではなく複数候補Thought状態の探索として構成した。"
        },
        {
            "start": "2023",
            "title": "Reflexion",
            "description": "Agentが言語FeedbackとEpisodic Memoryを用い、重み変更なしで反復試行を改善した。"
        },
        {
            "start": "2023",
            "title": "Voyager",
            "description": "LLM駆動Minecraft Agentが探索とCode生成により再利用可能Skill Libraryを自律構築した。"
        },
        {
            "start": "2024",
            "title": "Computer-use agents",
            "description": "Multimodal ModelがScreenshot、Mouse、Keyboardを通じGUIを操作し始めた。"
        },
        {
            "start": "2024",
            "title": "Reasoning reinforcement learning with verifiable rewards",
            "description": "数学・Coding Taskの自動検証可能Rewardにより、長文推論行動を大規模学習した。"
        },
        {
            "start": "2025",
            "title": "End-to-end deep-search agents",
            "description": "AgentがQuery作成、多数Source閲覧、証拠統合、長いResearch軌道維持をEnd-to-End学習した。"
        },
        {
            "start": "2025",
            "title": "Native tool-use reasoning models",
            "description": "Frontier Reasoning ModelがBrowsing、Code実行、File分析、視覚推論を一つの熟考Loopへ統合した。"
        },
        {
            "start": "2026",
            "title": "Long-horizon agent training",
            "description": "学習対象が持続状態と検証を伴う数時間規模のSoftware、Research、Professional Workflowへ拡大した。"
        }
    ]
};

// 重要な研究者と開発者
var tl_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1721",
            "title": "Thomas Bayes（1701–1761）",
            "description": "逆確率の考えを発展させ、ベイズ推論の基礎を築いた。"
        },
        {
            "start": "1835",
            "title": "George Boole（1815–1864）",
            "description": "代数論理を創始し、デジタル計算と記号推論の基礎を築いた。"
        },
        {
            "start": "1914",
            "title": "Norbert Wiener（1894–1964）",
            "description": "サイバネティクスを創始し、フィードバック、制御、通信、学習を結びつけた。"
        },
        {
            "start": "1918",
            "title": "Warren McCulloch（1898–1969）",
            "description": "神経計算の最初期の影響力ある数学モデルを共同開発した。"
        },
        {
            "start": "1921",
            "title": "Arthur Samuel（1901–1990）",
            "description": "自己学習Game Programと実践的Machine Learningを開拓した。"
        },
        {
            "start": "1923",
            "title": "John von Neumann（1903–1957）",
            "description": "プログラム内蔵計算、Game Theory、知能機械の数学的構造へ大きく貢献した。"
        },
        {
            "start": "1924",
            "title": "Donald Hebb（1904–1985）",
            "description": "Connectionismへ影響したSynapse学習原理を提案した。"
        },
        {
            "start": "1930",
            "title": "Margaret Masterman（1910–1986）",
            "description": "計算言語学、Semantic Network、初期機械翻訳を発展させた。"
        },
        {
            "start": "1932",
            "title": "Alan Turing（1912–1954）",
            "description": "計算を定義し、機械知能Testを提案してAIの概念的基礎を築いた。"
        },
        {
            "start": "1936",
            "title": "Claude Shannon（1916–2001）",
            "description": "Information Theoryを創始し、論理と探索を機械・Gameへ応用した。"
        },
        {
            "start": "1936",
            "title": "Herbert A. Simon（1916–2001）",
            "description": "Symbolic Problem Solvingを共同開発し、限定合理性理論を発展させた。"
        },
        {
            "start": "1941",
            "title": "Lotfi A. Zadeh（1921–2017）",
            "description": "Fuzzy Set TheoryとApproximate Reasoningを創始した。"
        },
        {
            "start": "1943",
            "title": "Walter Pitts（1923–1969）",
            "description": "脳と計算を結ぶLogical Neuron Modelを共同提案した。"
        },
        {
            "start": "1947",
            "title": "John McCarthy（1927–2011）",
            "description": "Artificial Intelligenceという名称を提唱し、Lispを開発してSymbolic AIを形成した。"
        },
        {
            "start": "1947",
            "title": "Marvin Minsky（1927–2016）",
            "description": "MIT AI Laboratoryを共同創設し、Symbolic AIとNeural AIの基礎へ貢献した。"
        },
        {
            "start": "1947",
            "title": "Allen Newell（1927–1992）",
            "description": "Logic TheoristとGeneral Problem Solverを共同開発し、認知科学の形成を助けた。"
        },
        {
            "start": "1948",
            "title": "Frank Rosenblatt（1928–1971）",
            "description": "Perceptronと初期の学習可能Neural Ruleを発明した。"
        },
        {
            "start": "1948",
            "title": "Leo Breiman（1928–2005）",
            "description": "CART、Bagging、Random Forestを開発し、予測Algorithm Modelingを推進した。"
        },
        {
            "start": "1953",
            "title": "Nils J. Nilsson（1933–2019）",
            "description": "探索、計画、Robotics、Intelligent Agent Architectureを発展させた。"
        },
        {
            "start": "1955",
            "title": "Karen Spärck Jones（1935–2007）",
            "description": "Information Retrieval、IDF、Natural Language Processingを開拓した。"
        },
        {
            "start": "1956",
            "title": "Edward Feigenbaum（1936–2021）",
            "description": "Expert System研究とKnowledge Engineering運動を主導した。"
        },
        {
            "start": "1956",
            "title": "Judea Pearl（1936–）",
            "description": "現代Bayesian Networkを築き、因果推論を変革した。"
        },
        {
            "start": "1956",
            "title": "Vladimir Vapnik（1936–）",
            "description": "Statistical Learning Theory、VC Dimension、SVMを共同開発した。"
        },
        {
            "start": "1962",
            "title": "David Rumelhart（1942–2011）",
            "description": "Backpropagationと分散表現を認知Modelingで普及させた。"
        },
        {
            "start": "1963",
            "title": "J. Ross Quinlan（1943–）",
            "description": "ID3、C4.5など影響力あるDecision Tree学習法を開発した。"
        },
        {
            "start": "1967",
            "title": "Geoffrey Hinton（1947–）",
            "description": "Backpropagation、分散表現、Boltzmann Machine、Deep Learning復興を推進した。"
        },
        {
            "start": "1968",
            "title": "Andrew Barto（1948–）",
            "description": "Actor–Criticと現代Reinforcement Learning基礎を共同形成した。"
        },
        {
            "start": "1968",
            "title": "Barbara Grosz（1948–）",
            "description": "Discourse Modeling、協調Agent、Responsible AI制度を開拓した。"
        },
        {
            "start": "1969",
            "title": "Leslie Valiant（1949–）",
            "description": "PAC Learning Theoryを創始し、計算学習とComplexityへ重要な成果をもたらした。"
        },
        {
            "start": "1971",
            "title": "Tom M. Mitchell（1951–）",
            "description": "帰納学習を形式化し、基礎的Machine Learning教科書で世代を育てた。"
        },
        {
            "start": "1974",
            "title": "Rodney Brooks（1954–）",
            "description": "Behavior-based Roboticsを開拓し、純粋Symbolic Intelligenceへ異議を唱えた。"
        },
        {
            "start": "1976",
            "title": "Michael I. Jordan（1956–）",
            "description": "Probabilistic Machine Learning、Variational Inference、AIの統計基礎を形成した。"
        },
        {
            "start": "1976",
            "title": "Peter Norvig（1956–）",
            "description": "AI教育、Probabilistic NLP、大規模Intelligent Systemを発展させた。"
        },
        {
            "start": "1977",
            "title": "Richard S. Sutton（1957–）",
            "description": "TD Learningを開発し、現代Reinforcement Learningを統一的に体系化した。"
        },
        {
            "start": "1980",
            "title": "Yann LeCun（1960–）",
            "description": "Convolutional Neural Networkと現代Representation Learningを開拓した。"
        },
        {
            "start": "1982",
            "title": "Stuart Russell（1962–）",
            "description": "Rational Agent Theory、Probabilistic AI、Beneficial AI研究を発展させた。"
        },
        {
            "start": "1982",
            "title": "Rosalind Picard（1962–）",
            "description": "Affective Computingを創始し、人間感情を認識するMachine研究を開拓した。"
        },
        {
            "start": "1983",
            "title": "Jürgen Schmidhuber（1963–）",
            "description": "Recurrent Network、LSTM時代研究、圧縮、自己改善Agentを推進した。"
        },
        {
            "start": "1984",
            "title": "Yoshua Bengio（1964–）",
            "description": "Neural Language Model、Representation Learning、Deep Learningを開拓した。"
        },
        {
            "start": "1987",
            "title": "Sepp Hochreiter（1967–）",
            "description": "Vanishing Gradientを分析し、LSTMを共同発明した。"
        },
        {
            "start": "1987",
            "title": "Sebastian Thrun（1967–）",
            "description": "Probabilistic Robotics、自動運転、大規模Online AI教育を発展させた。"
        },
        {
            "start": "1987",
            "title": "Cynthia Breazeal（1967–）",
            "description": "Social RoboticsとHuman–Robot Interactionを開拓した。"
        },
        {
            "start": "1988",
            "title": "Daphne Koller（1968–）",
            "description": "Probabilistic Graphical Model、Computational Biology、Online Educationを発展させた。"
        },
        {
            "start": "1988",
            "title": "Jeff Dean（1968–）",
            "description": "Googleで大規模Machine Learning System、Deep Learning基盤、Model Programを主導した。"
        },
        {
            "start": "1990",
            "title": "Regina Barzilay（1970–）",
            "description": "Natural Language Processingと医療・科学発見向けMachine Learningを発展させた。"
        },
        {
            "start": "1994",
            "title": "Kate Crawford（1974–）",
            "description": "AIを支える社会、政治、労働、環境Systemを分析した。"
        },
        {
            "start": "1996",
            "title": "Fei-Fei Li（1976–）",
            "description": "ImageNetを創設し、Computer Vision、Embodied AI、Human-centered AIを発展させた。"
        },
        {
            "start": "1996",
            "title": "Andrew Ng（1976–）",
            "description": "Deep Learning、大規模AI教育、産業Machine Learningを発展させた。"
        },
        {
            "start": "1996",
            "title": "Demis Hassabis（1976–）",
            "description": "DeepMindを共同創設し、AlphaGoやAlphaFoldなどの突破を主導した。"
        },
        {
            "start": "1996",
            "title": "David Silver（1976–）",
            "description": "AlphaGoからAlphaZero、MuZeroまで主要Reinforcement Learning突破を主導した。"
        },
        {
            "start": "1996",
            "title": "Cynthia Rudin（1976–）",
            "description": "Interpretable Machine Learningを発展させ、高Risk意思決定で透明Modelを提唱した。"
        },
        {
            "start": "1997",
            "title": "Pieter Abbeel（1977–）",
            "description": "Robot Learning、Imitation Learning、Deep Reinforcement Learningを発展させた。"
        },
        {
            "start": "2001",
            "title": "Alex Graves（1981–）",
            "description": "CTCと音声・系列学習向け主要Recurrent Network手法を開発した。"
        },
        {
            "start": "2002",
            "title": "Anima Anandkumar（1982–）",
            "description": "Tensor Method、Deep Learning、Scientific AI、Scalable ML Systemを発展させた。"
        },
        {
            "start": "2003",
            "title": "Timnit Gebru（1983–）",
            "description": "Computer VisionとDataset Bias、Model Documentation、AI Accountability研究を発展させた。"
        },
        {
            "start": "2003",
            "title": "Dario Amodei（1983–）",
            "description": "Frontier Language Model開発を主導し、安全・Alignment重視のAnthropicを共同創設した。"
        },
        {
            "start": "2004",
            "title": "Kaiming He（1984–）",
            "description": "Residual Networkを開発し、視覚Representation Learningと検出を大きく進歩させた。"
        },
        {
            "start": "2005",
            "title": "Ian Goodfellow（1985–）",
            "description": "GANを発明し、Deep Learning SecurityとRepresentation Learningを発展させた。"
        },
        {
            "start": "2005",
            "title": "Sam Altman（1985–）",
            "description": "ChatGPTとFrontier Model世代の大衆展開期にOpenAIを率いた。"
        },
        {
            "start": "2006",
            "title": "Ilya Sutskever（1986–）",
            "description": "AlexNet、Seq2Seqを共同開発し、大規模Language Model Programを推進した。"
        },
        {
            "start": "2006",
            "title": "Alex Krizhevsky（1986–）",
            "description": "AlexNetを構築し、GPU学習CNNの決定的な視覚性能を示した。"
        },
        {
            "start": "2006",
            "title": "Andrej Karpathy（1986–）",
            "description": "Convolutional Vision、Neural Language Modeling、自動運転AI、実践AI教育を発展させた。"
        },
        {
            "start": "2007",
            "title": "Sergey Levine（1987–）",
            "description": "Deep Reinforcement Learning、Robot Learning、Generalist Control Policyを発展させた。"
        },
        {
            "start": "2009",
            "title": "Joy Buolamwini（1989–）",
            "description": "商用Face Analysisの人口統計Biasを明らかにし、Algorithmic Justice運動を創設した。"
        },
        {
            "start": "2012",
            "title": "Chelsea Finn（1992–）",
            "description": "Meta-learning、Robot Learning、少量Experienceから適応するAgent手法を発展させた。"
        }
    ]
};

// データセット・ベンチマーク・評価
var tl_data_eval = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1960",
            "title": "Early machine-translation corpora",
            "description": "対訳Corpusが整備され、機械翻訳を選別Demoではなく実証的に評価する基盤が生まれた。"
        },
        {
            "start": "1987",
            "title": "Penn Treebank project begins",
            "description": "大規模構文注釈Corpusにより、教師ありParsingと比較可能なNLP評価が可能になった。"
        },
        {
            "start": "1993",
            "title": "MNIST predecessors and digit benchmarks",
            "description": "標準化手書き数字DatasetがPattern Recognition Algorithmの再現可能比較を可能にした。"
        },
        {
            "start": "1998",
            "title": "MNIST",
            "description": "LeCunらが手書き数字Benchmark MNISTを公開し、Neural Network入門Datasetとなった。"
        },
        {
            "start": "1998",
            "title": "TREC evaluation campaigns mature",
            "description": "共有Information Retrieval TaskがTest Collection、関連性判定、共通Metricを大規模に確立した。"
        },
        {
            "start": "2001",
            "title": "Reuters-21578 becomes a standard text-classification corpus",
            "description": "Newswire Categoryが統計的Text Classificationの再現可能評価を支えた。"
        },
        {
            "start": "2004",
            "title": "Pascal VOC challenge",
            "description": "共有Object Recognition Datasetと年次Competitionが視覚検出・分割評価を標準化した。"
        },
        {
            "start": "2005",
            "title": "DARPA Grand Challenge benchmarks autonomous driving",
            "description": "砂漠Road Competitionが知覚、計画、Robot Controlの実世界System Benchmarkを提供した。"
        },
        {
            "start": "2006",
            "title": "Netflix Prize dataset and competition",
            "description": "大規模Recommendation ChallengeがCollaborative Filtering、Matrix Factorization、Ensembleを加速した。"
        },
        {
            "start": "2007",
            "title": "CIFAR-10 and CIFAR-100",
            "description": "小規模Label付き自然画像Datasetが視覚表現手法の迅速試験標準となった。"
        },
        {
            "start": "2007",
            "title": "Labeled Faces in the Wild",
            "description": "非制約Face Photoが評価をControlled Laboratoryから実世界変動へ移した。"
        },
        {
            "start": "2009",
            "title": "ImageNet",
            "description": "大規模階層Label画像Databaseが視覚認識を変革するData Scaleを提供した。"
        },
        {
            "start": "2010",
            "title": "ImageNet Large Scale Visual Recognition Challenge",
            "description": "年次Challengeが大規模分類、Localization、Detectionを直接比較可能にした。"
        },
        {
            "start": "2011",
            "title": "KITTI vision benchmark",
            "description": "実Driving DataがStereo Vision、Optical Flow、Detection、自動運転知覚評価を標準化した。"
        },
        {
            "start": "2011",
            "title": "Stanford Sentiment Treebank",
            "description": "Phrase単位Sentiment LabelがComposition的Language Understanding研究を支えた。"
        },
        {
            "start": "2012",
            "title": "AlexNet wins ILSVRC",
            "description": "従来Vision手法への大差がImageNetをDeep Learningの象徴的Benchmarkにした。"
        },
        {
            "start": "2014",
            "title": "MS COCO",
            "description": "密なObject Annotationと自然CaptionがDetection、Segmentation、Image-Language研究を支えた。"
        },
        {
            "start": "2014",
            "title": "SQuAD-style reading-comprehension datasets emerge",
            "description": "文章Question AnsweringがLanguage Understandingを大規模教師ありBenchmark問題へ変えた。"
        },
        {
            "start": "2015",
            "title": "Atari Learning Environment",
            "description": "共通InterfaceとGame Suiteが画素からのDeep RL評価を標準化した。"
        },
        {
            "start": "2015",
            "title": "Cityscapes",
            "description": "高品質Street Scene Annotationが自動運転向けSemantic Segmentationを発展させた。"
        },
        {
            "start": "2015",
            "title": "LibriSpeech",
            "description": "約1000時間の英語朗読音声がAutomatic Speech Recognitionの中心的Open Benchmarkとなった。"
        },
        {
            "start": "2016",
            "title": "OpenAI Gym",
            "description": "共通Environment APIがReinforcement Learning Algorithm比較の障壁を下げた。"
        },
        {
            "start": "2016",
            "title": "VQA benchmark",
            "description": "Visual Question Answeringが画像理解と自然言語推論の統合を要求した。"
        },
        {
            "start": "2016",
            "title": "bAbI and synthetic reasoning tasks",
            "description": "制御TaskがMemory、Inference、Compositional Reasoning能力を分離評価した。"
        },
        {
            "start": "2017",
            "title": "GLUE benchmark",
            "description": "複数Language Understanding Taskが単一Task Systemではなく汎用転移表現を促した。"
        },
        {
            "start": "2017",
            "title": "AI2 Reasoning Challenge",
            "description": "小中学校Science QuestionがRetrieval、Language Understanding、多段Reasoningを評価した。"
        },
        {
            "start": "2018",
            "title": "SuperGLUE",
            "description": "GLUE急速飽和後、Reasoning、Coreference、Reading Comprehensionを重視する難しいBenchmarkが作られた。"
        },
        {
            "start": "2018",
            "title": "MLPerf",
            "description": "Industry ConsortiumがHardwareとML Workloadを横断するTraining・Inference測定を標準化した。"
        },
        {
            "start": "2018",
            "title": "WMT benchmark reaches neural era maturity",
            "description": "共有Translation Taskが多言語PairにわたるTransformerの急速な改善を追跡した。"
        },
        {
            "start": "2019",
            "title": "Natural Questions",
            "description": "実Google Search QueryとWikipedia EvidenceがOpen-domain QAをより現実的にした。"
        },
        {
            "start": "2019",
            "title": "BIG-bench project begins",
            "description": "共同Benchmarkが多様なTaskを集め、Language ModelのEmergent・Unexpected Capabilityを調べた。"
        },
        {
            "start": "2020",
            "title": "MMLU",
            "description": "MMLUが多数分野の学術・Professional Knowledgeを横断評価した。"
        },
        {
            "start": "2020",
            "title": "HumanEval",
            "description": "Unit Test付き手書きProgramming ProblemがCode Generation Modelの代表的Benchmarkとなった。"
        },
        {
            "start": "2020",
            "title": "TruthfulQA",
            "description": "一般的誤解を狙ったQuestionがLanguage Modelの虚偽再生傾向を測定した。"
        },
        {
            "start": "2021",
            "title": "HELM",
            "description": "StanfordがAccuracy、Calibration、Robustness、Fairness、Efficiencyを横断するHolistic LLM評価を提案した。"
        },
        {
            "start": "2021",
            "title": "BIG-bench released",
            "description": "200超Taskが標準学術Benchmarkを超えて評価を拡張し、Scaling Behaviorを示した。"
        },
        {
            "start": "2021",
            "title": "WILDS",
            "description": "実世界Distribution ShiftがIID外Robustnessの共有Benchmarkとなった。"
        },
        {
            "start": "2022",
            "title": "SWE-bench concept emerges",
            "description": "Repository単位Software IssueがCode評価を現実的な複数File Engineering Taskへ再構成した。"
        },
        {
            "start": "2022",
            "title": "MT-Bench and chat-model evaluation",
            "description": "Multi-turn会話PromptとModel JudgeがInstruction-following Assistant比較で一般化した。"
        },
        {
            "start": "2022",
            "title": "LAION-5B",
            "description": "数十億Image–Text PairがOpen Multimodal・Diffusion Model学習の公開規模Datasetとなった。"
        },
        {
            "start": "2023",
            "title": "Chatbot Arena",
            "description": "匿名Pairwise Human Preference投票が会話Modelの迅速更新型公開比較を生んだ。"
        },
        {
            "start": "2023",
            "title": "SWE-bench",
            "description": "実GitHub IssueとRepository TestがLLMの実用Software Engineering課題解決を評価した。"
        },
        {
            "start": "2023",
            "title": "MMMU",
            "description": "学際Multimodal BenchmarkがDiagram、Chart、Photo、Textに対する専門家級Reasoningを評価した。"
        },
        {
            "start": "2023",
            "title": "AgentBench",
            "description": "複数Interactive EnvironmentがPlanning、Tool Use、Long-horizon Agent Behaviorを評価した。"
        },
        {
            "start": "2023",
            "title": "MATH and GSM-style reasoning benchmarks become central",
            "description": "検証可能な数学AnswerがReasoning Model評価・学習の主要Signalとなった。"
        },
        {
            "start": "2024",
            "title": "GPQA Diamond",
            "description": "専門家作成大学院級Science Questionが単純Web Retrievalで解けないReasoningを評価した。"
        },
        {
            "start": "2024",
            "title": "SWE-bench Verified",
            "description": "Human Validation済SubsetがRepository級Coding評価の信頼性を改善した。"
        },
        {
            "start": "2024",
            "title": "Humanity’s Last Exam project",
            "description": "広範な専門家作成Benchmarkが飽和Testを超えるFrontier Knowledge・Reasoningを狙った。"
        },
        {
            "start": "2024",
            "title": "FrontierMath",
            "description": "検証可能Answerを持つResearch級数学問題がModel Reasoning限界を評価した。"
        },
        {
            "start": "2024",
            "title": "OSWorld",
            "description": "OS Applicationを横断する実Computer TaskがMultimodal Computer-use Agentを評価した。"
        },
        {
            "start": "2024",
            "title": "LiveBench",
            "description": "頻繁更新QuestionがBenchmark Contaminationを減らし、最新Model能力を追跡した。"
        },
        {
            "start": "2025",
            "title": "Terminal-Bench",
            "description": "Command-line EnvironmentがAgentの複数段Software・System Administration作業を評価した。"
        },
        {
            "start": "2025",
            "title": "GDPval",
            "description": "多数職種のProfessional Work Productが経済的に重要なAgent能力Benchmarkとなった。"
        },
        {
            "start": "2025",
            "title": "MCP and tool-use benchmarks expand",
            "description": "評価がReliable Function Calling、Multi-tool Coordination、Stateful Workflowを重視するようになった。"
        },
        {
            "start": "2026",
            "title": "Long-horizon professional-agent evaluations",
            "description": "Benchmarkが単発AnswerではなくResearch、Coding、Document、Operationの完全Workflowを評価する方向へ進んだ。"
        }
    ]
};

// ハードウェア・ソフトウェア・研究基盤
var tl_infrastructure = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1946",
            "title": "ENIAC demonstrated",
            "description": "電子汎用計算が大規模数値処理を実用化し、Machine Intelligenceへの関心を加速した。"
        },
        {
            "start": "1948",
            "title": "Manchester Baby runs stored program",
            "description": "電子的Stored Program実行が、後のAI Softwareが使うArchitectureを確立した。"
        },
        {
            "start": "1956",
            "title": "Dartmouth workshop",
            "description": "Summer Research Projectが主要研究者を集め、Artificial Intelligenceを固有の学術分野として確立した。"
        },
        {
            "start": "1958",
            "title": "Lisp",
            "description": "John McCarthyはSymbolic List、Recursion、Interactive Developmentを中心とするAI言語Lispを開発した。"
        },
        {
            "start": "1963",
            "title": "MIT Project MAC",
            "description": "Time-sharingとInteractive ComputingがAI LaboratoryとHacker Cultureの制度基盤を提供した。"
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "Network Computingが後にDistributed Dataset、遠隔協働、Cloud規模AI Serviceを可能にした。"
        },
        {
            "start": "1973",
            "title": "Prolog implementation spreads",
            "description": "Logic Programming基盤がTheorem Proving、Natural Language研究、Expert Systemを支えた。"
        },
        {
            "start": "1979",
            "title": "Lisp machines commercialized",
            "description": "専用WorkstationがExpert System開発向けInteractive Symbolic Computingを提供した。"
        },
        {
            "start": "1982",
            "title": "Japan launches Fifth Generation Computer Systems project",
            "description": "日本の国家ProjectがLogic Programming、Parallel Computing、Knowledge Processingへ大規模投資した。"
        },
        {
            "start": "1986",
            "title": "Connection Machine",
            "description": "Massively Parallel HardwareがNeural・Symbolic Workload向けData-parallel手法を探究した。"
        },
        {
            "start": "1987",
            "title": "Neural Information Processing Systems conference begins",
            "description": "NeurIPSがNeural Computation、Statistics、Optimization、Machine Learningの持続的交流拠点となった。"
        },
        {
            "start": "1989",
            "title": "World Wide Web proposed",
            "description": "Webが後にMachine LearningとModel Deploymentへ前例のないText、Image、Interaction Dataを供給した。"
        },
        {
            "start": "1991",
            "title": "Python released",
            "description": "可読性の高い汎用言語がScientific ComputingとMachine Learningの主要Interfaceとなった。"
        },
        {
            "start": "1995",
            "title": "Java and web-scale software era",
            "description": "Portable Network ApplicationがIntelligent Serviceを展開できる環境を拡大した。"
        },
        {
            "start": "1997",
            "title": "CUDA-era GPU precursors",
            "description": "Programmable Graphics PipelineがRendering以外にも有用なMassively Parallel Arithmeticを提供し始めた。"
        },
        {
            "start": "2002",
            "title": "Torch scientific machine-learning framework",
            "description": "TorchがTensor演算とNeural Network Moduleを提供し、後のDeep Learning Frameworkへ影響した。"
        },
        {
            "start": "2004",
            "title": "MapReduce",
            "description": "GoogleのDistributed Data Processing抽象がWeb規模Dataset上のLearning Pipelineを可能にした。"
        },
        {
            "start": "2006",
            "title": "Amazon EC2 launches",
            "description": "On-demand Cloud ComputingがData ProcessingとModel Training拡張の障壁を下げた。"
        },
        {
            "start": "2006",
            "title": "NVIDIA CUDA",
            "description": "General-purpose GPU Programming PlatformがMassively Parallel AcceleratorをML研究者へ開放した。"
        },
        {
            "start": "2007",
            "title": "scikit-learn project begins",
            "description": "一貫したOpen-source Python APIがClassic ML Algorithmを広く利用可能にした。"
        },
        {
            "start": "2008",
            "title": "Hadoop ecosystem expands",
            "description": "Commodity Clusterが大規模Data Analytics向けDistributed Storage・Computationを支えた。"
        },
        {
            "start": "2009",
            "title": "ImageNet data infrastructure scales",
            "description": "Crowdsourcingと階層LabelがInternet規模Dataset構築法を実証した。"
        },
        {
            "start": "2010",
            "title": "GPU deep-learning software stack matures",
            "description": "CUDA Kernel、最適化Convolution、研究Codeにより大規模Neural Trainingが実用化へ進んだ。"
        },
        {
            "start": "2011",
            "title": "Apache Spark",
            "description": "In-memory Distributed Computingが反復AnalyticsとML Pipelineを高速化した。"
        },
        {
            "start": "2012",
            "title": "Google Brain DistBelief",
            "description": "多数Machine間Distributed Neural TrainingがDeep Learning Scalingの実現可能性を示した。"
        },
        {
            "start": "2013",
            "title": "Caffe",
            "description": "高速Modular Convolution Frameworkが再現可能Computer Vision研究とDeploymentを標準化した。"
        },
        {
            "start": "2014",
            "title": "Kubernetes",
            "description": "Container Orchestrationが後にDistributed ML ServiceとAccelerator運用の中核となった。"
        },
        {
            "start": "2015",
            "title": "TensorFlow released",
            "description": "GoogleがDevice横断でScalable Training、Inference、Deploymentを行うDataflow Frameworkを公開した。"
        },
        {
            "start": "2015",
            "title": "cuDNN adoption accelerates",
            "description": "Convolution・Recurrent Network向け最適化GPU Primitiveが高性能Deep Learning Kernelを標準化した。"
        },
        {
            "start": "2016",
            "title": "PyTorch released",
            "description": "Dynamic Computation GraphとPython-first設計が実験と研究実装を自然にした。"
        },
        {
            "start": "2016",
            "title": "Google TPU announced",
            "description": "専用Tensor AcceleratorがNeural Network Workload特化Hardware時代を示した。"
        },
        {
            "start": "2016",
            "title": "OpenAI Universe",
            "description": "共通Interfaceで多数Software Environmentを公開し、General Agent Trainingを支えた。"
        },
        {
            "start": "2017",
            "title": "Transformer training on TPU pods",
            "description": "大規模Accelerator ClusterがAttention-based Sequence Modelの高速並列学習を示した。"
        },
        {
            "start": "2017",
            "title": "ONNX",
            "description": "Open Model Exchange FormatがTraining FrameworkとInference Runtime間の移植性を改善した。"
        },
        {
            "start": "2018",
            "title": "NVIDIA Tensor Cores spread",
            "description": "Mixed-precision Matrix HardwareがNeural Network Throughputを大幅向上させた。"
        },
        {
            "start": "2018",
            "title": "Hugging Face Transformers project begins",
            "description": "共有Open-source LibraryがPretrained Transformerの配布、Fine-tune、再現を容易にした。"
        },
        {
            "start": "2019",
            "title": "JAX",
            "description": "組合せ可能Automatic Differentiation、Vectorization、Compilationが高性能数値・ML研究を支えた。"
        },
        {
            "start": "2019",
            "title": "ML accelerators diversify",
            "description": "Cloud TPU、GPU、FPGA、専用Inference Chipが異種AI Compute Ecosystemを形成した。"
        },
        {
            "start": "2020",
            "title": "A100 GPU",
            "description": "NVIDIA Ampere AcceleratorがMixed-precision Training能力を高め、より大きなFoundation Modelを可能にした。"
        },
        {
            "start": "2020",
            "title": "DeepSpeed",
            "description": "Microsoftが超大規模ModelのMemory-efficient Distributed Training技術を公開した。"
        },
        {
            "start": "2020",
            "title": "Megatron-LM and tensor parallelism spread",
            "description": "Model-parallel Trainingが巨大Transformer Layerを複数Acceleratorへ分割した。"
        },
        {
            "start": "2021",
            "title": "MLOps platforms mature",
            "description": "Version化Data、Experiment、Model、Monitoring、Deploymentが正式なProduction Disciplineとなった。"
        },
        {
            "start": "2021",
            "title": "GitHub Copilot technical preview",
            "description": "Cloud Code Generationが独立研究Demoではなく統合Developer Toolとなった。"
        },
        {
            "start": "2022",
            "title": "H100 GPU",
            "description": "Transformer Engineと第4世代Tensor CoreがLLM Training・Inferenceを主対象とした。"
        },
        {
            "start": "2022",
            "title": "vLLM project",
            "description": "PagedAttentionがKV Cache Memory管理を改善し、Language Model Serving Throughputを向上させた。"
        },
        {
            "start": "2022",
            "title": "Diffusion-model consumer GPU ecosystem",
            "description": "Open Weight、最適化Kernel、Community Interfaceが高品質画像生成を個人Hardwareで実行可能にした。"
        },
        {
            "start": "2023",
            "title": "NVIDIA H200 announced",
            "description": "高帯域MemoryがFoundation Model Training・InferenceのMemory Bottleneckを狙った。"
        },
        {
            "start": "2023",
            "title": "Model Context Protocol concept emerges",
            "description": "Model、Tool、Data Source間の標準接続がAgent Integrationを簡素化し始めた。"
        },
        {
            "start": "2023",
            "title": "Consumer local-LLM runtimes expand",
            "description": "Quantizationとllama.cpp等Optimized RuntimeがLaptop・Edge Device上の実用LLMを可能にした。"
        },
        {
            "start": "2024",
            "title": "Blackwell GPU architecture announced",
            "description": "NVIDIAがTrillion-parameter TrainingとHigh-throughput Inference向け新Accelerator世代を設計した。"
        },
        {
            "start": "2024",
            "title": "Inference optimization becomes a primary research frontier",
            "description": "KV Cache圧縮、Continuous Batching、Quantization、Speculative DecodingがModel Economicsの中心となった。"
        },
        {
            "start": "2024",
            "title": "Large AI superclusters proliferate",
            "description": "Frontier LabがPretraining・RL Workload向けに数万Accelerator規模Clusterを構築した。"
        },
        {
            "start": "2025",
            "title": "Agent runtime and sandbox infrastructure expands",
            "description": "Secure Browser、Code Sandbox、File System、Tool RegistryがAI Agent Productの標準部品となった。"
        },
        {
            "start": "2025",
            "title": "Inference-time compute infrastructure scales",
            "description": "Serving SystemがRequestごとに可変Reasoning Budget、並列Rollout、Verifier Computeを割り当て始めた。"
        },
        {
            "start": "2026",
            "title": "Agentic compute stacks mature",
            "description": "Long-running State、Subagent Orchestration、Provenance、Checkpoint、Permissioned ToolがFirst-class Infrastructureとなった。"
        }
    ]
};

// 画期的システム・モデル・製品リリース
var tl_models = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "Logic Theorist",
            "description": "Newell、Simon、Shawが数学定理を証明するProgramを構築し、Symbolic AIの創始的実証となった。"
        },
        {
            "start": "1958",
            "title": "Mark I Perceptron",
            "description": "RosenblattのHardware Perceptronが例から視覚分類を学び、広く注目を集めた。"
        },
        {
            "start": "1959",
            "title": "Samuel checkers program",
            "description": "自己改善Checkers Systemが探索、評価、Experienceからの学習を実証した。"
        },
        {
            "start": "1965",
            "title": "DENDRAL",
            "description": "StanfordのSystemがMass Spectrometry Dataから分子構造を推定し、Expert System確立を助けた。"
        },
        {
            "start": "1966",
            "title": "ELIZA",
            "description": "Joseph Weizenbaumの会話ProgramがPattern Matchingで心理療法士を模倣し、人間がMachineを擬人化する傾向を示した。"
        },
        {
            "start": "1966",
            "title": "Shakey the Robot",
            "description": "SRIのMobile Robotが知覚、Map、Planning、Actionを一つのSystemへ統合した。"
        },
        {
            "start": "1970",
            "title": "SHRDLU",
            "description": "Terry WinogradのProgramがParsing、Reasoning、Planningで単純Blocks Worldを対話・操作した。"
        },
        {
            "start": "1972",
            "title": "MYCIN",
            "description": "Rule-based Medical Expert Systemが抗菌薬治療を提案し、Knowledge Engineeringの代表例となった。"
        },
        {
            "start": "1980",
            "title": "XCON",
            "description": "DECがComputer注文構成Expert Systemを導入し、大きな商業価値を実証した。"
        },
        {
            "start": "1986",
            "title": "NETtalk",
            "description": "SejnowskiとRosenbergがEnglish TextをPhonemeへ変換するNeural Networkを学習し、分散表現を実証した。"
        },
        {
            "start": "1989",
            "title": "ALVINN",
            "description": "Neural NetworkがCamera ImageとHuman Driving例からVehicle Steeringを学習した。"
        },
        {
            "start": "1992",
            "title": "TD-Gammon",
            "description": "TesauroのSelf-play Neural AgentがTD LearningでExpert級Backgammonへ到達した。"
        },
        {
            "start": "1997-05-11",
            "title": "Deep Blue defeats Garry Kasparov",
            "description": "IBMの専用Chess Systemが現World Championとの公式Matchに勝利し、Machine Intelligenceの大きな公開Milestoneとなった。"
        },
        {
            "start": "1998",
            "title": "Kismet",
            "description": "MITの表情豊かなRobotがSocial Cue、Affective Interaction、発達的Human–Robot Communicationを研究した。"
        },
        {
            "start": "1999",
            "title": "Sony AIBO",
            "description": "市販Robot PetがAutonomous BehaviorとInteractive Roboticsを消費者へ届けた。"
        },
        {
            "start": "2005",
            "title": "Stanley wins DARPA Grand Challenge",
            "description": "StanfordのAutonomous Vehicleが砂漠Courseを完走し、実世界で頑健な知覚とPlanningを実証した。"
        },
        {
            "start": "2009",
            "title": "Google self-driving car project begins",
            "description": "大規模産業Autonomous Driving Programが道路規模でMap、Perception、Prediction、Controlを統合した。"
        },
        {
            "start": "2011-02-16",
            "title": "IBM Watson wins Jeopardy!",
            "description": "WatsonがInformation Retrieval、QA、Statistical Scoring、Massive Parallelismを統合し、人間Championに勝利した。"
        },
        {
            "start": "2011-10-04",
            "title": "Siri launches on iPhone 4S",
            "description": "Voice AssistantがSpeech RecognitionとNatural Language Serviceを日常Consumer Interactionへ導入した。"
        },
        {
            "start": "2012",
            "title": "AlexNet",
            "description": "ImageNet優勝CNNがGPU学習Deep Learningの広範採用を引き起こした。"
        },
        {
            "start": "2013",
            "title": "word2vec released",
            "description": "効率的Word Embedding Modelが意味Vector表現をNLP Systemで広く利用可能にした。"
        },
        {
            "start": "2013",
            "title": "DeepMind Atari DQN",
            "description": "単一Deep Q-networkがRaw Pixelから複数Gameを学習し、Deep PerceptionとRLを接続した。"
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence neural translation",
            "description": "Encoder–Decoder LSTMがPhrase TableなしのEnd-to-End Neural Translationを実証した。"
        },
        {
            "start": "2014",
            "title": "Generative adversarial network prototype",
            "description": "最初のGAN実験がGenerator–Discriminator敵対学習から現実的Sampleが生まれることを示した。"
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "FacebookのDeep Face Recognition Systemが非制約PhotoでHuman-level Verificationへ近づいた。"
        },
        {
            "start": "2015",
            "title": "Microsoft ResNet",
            "description": "Residual Learningが100層超Networkを可能にし、主要ImageNet Taskで優勝した。"
        },
        {
            "start": "2015",
            "title": "Deep Speech 2",
            "description": "BaiduのEnd-to-End Speech Recognitionが多くのHand-engineered Pipeline部品をDeep Networkで置換可能と示した。"
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMindのRaw Audio Generative Modelが音声合成の自然さを大きく改善した。"
        },
        {
            "start": "2016-01-27",
            "title": "AlphaGo defeats European champion Fan Hui",
            "description": "Natureが19路盤互先でProfessional Playerを破った初のGo Programを報告した。"
        },
        {
            "start": "2016-03-15",
            "title": "AlphaGo defeats Lee Sedol",
            "description": "5番勝負がNeural Policy・Value NetworkとTree Searchの統合を世界規模で示した。"
        },
        {
            "start": "2017-06-12",
            "title": "Transformer architecture published",
            "description": "「Attention Is All You Need」が並列Self-Attention Architectureを導入し、現代Foundation Modelの基礎となった。"
        },
        {
            "start": "2017-12-05",
            "title": "AlphaZero preprint",
            "description": "単一Self-play SystemがRuleだけからChess、将棋、Goを習得した。"
        },
        {
            "start": "2018-06-11",
            "title": "GPT released",
            "description": "OpenAIがGenerative Transformer Pretrainingから教師ありLanguage Taskへの広い転移を実証した。"
        },
        {
            "start": "2018-10-11",
            "title": "BERT released",
            "description": "Googleの双方向Masked Language ModelがNLP Fine-tuningの主要Foundationとなった。"
        },
        {
            "start": "2019",
            "title": "StyleGAN",
            "description": "Style-based Generatorが高写実Faceと制御可能Latent Space編集を実現した。"
        },
        {
            "start": "2019-01-24",
            "title": "AlphaStar announced",
            "description": "DeepMindのMulti-agent RL SystemがStarCraft IIでGrandmaster級へ到達した。"
        },
        {
            "start": "2019-02-14",
            "title": "GPT-2 announced",
            "description": "15億Parameter Language Modelが一貫した長文を生成し、段階公開Safety議論を引き起こした。"
        },
        {
            "start": "2020",
            "title": "DDPM image generation",
            "description": "Denoising Diffusion Modelが主要Generative Approachに競合する画像品質へ到達した。"
        },
        {
            "start": "2020-05-28",
            "title": "GPT-3 paper released",
            "description": "1750億Parameter Autoregressive Modelが多数Taskで強いIn-context Few-shot Learningを示した。"
        },
        {
            "start": "2020-11-30",
            "title": "AlphaFold2 CASP14 breakthrough announced",
            "description": "DeepMindのSystemがProtein Structure Prediction精度で大きな飛躍を達成した。"
        },
        {
            "start": "2021-01-05",
            "title": "DALL·E and CLIP announced",
            "description": "OpenAIがText-conditioned Image Generationと大規模Image–Text Representation Learningを同時公開した。"
        },
        {
            "start": "2021-05-18",
            "title": "LaMDA announced",
            "description": "GoogleがOpen-ended Conversation向けDialogue-focused Language Modelを発表した。"
        },
        {
            "start": "2021-06-29",
            "title": "GitHub Copilot technical preview",
            "description": "OpenAI CodexによるCode Suggestionが主流IDEへ入った。"
        },
        {
            "start": "2021-08-10",
            "title": "OpenAI Codex API announced",
            "description": "GPT派生Modelが自然言語Instructionを多数Programming Languageの実行Codeへ変換した。"
        },
        {
            "start": "2022-03-29",
            "title": "Chinchilla announced",
            "description": "DeepMindのCompute-optimal Modelが、より多いTraining Dataで巨大な学習不足Modelを上回れると示した。"
        },
        {
            "start": "2022-04-04",
            "title": "PaLM announced",
            "description": "GoogleがPathwaysでDense Language Modelを5400億Parameterへ拡大し、強いFew-shot Reasoningを示した。"
        },
        {
            "start": "2022-04-06",
            "title": "DALL·E 2 announced",
            "description": "Diffusion-based Image Generationが写実性、構図、自然言語編集を改善した。"
        },
        {
            "start": "2022-08-22",
            "title": "Stable Diffusion public release",
            "description": "公開Latent Diffusion ModelがLocal Image GenerationとFine-tuningの世界的Ecosystemを生んだ。"
        },
        {
            "start": "2022-09-21",
            "title": "Whisper released",
            "description": "OpenAIが大規模Weakly Supervised Speech Modelを公開し、頑健な多言語Transcription・Translationを実現した。"
        },
        {
            "start": "2022-11-15",
            "title": "Galactica announced",
            "description": "MetaがScientific Knowledge向けLanguage Modelを公開したが、信頼性懸念からPublic Demoを撤回した。"
        },
        {
            "start": "2022-11-30",
            "title": "ChatGPT launches",
            "description": "Instruction-tuned Language Modelの会話InterfaceがGenerative AIの大衆利用を爆発的に広げた。"
        },
        {
            "start": "2023-02-24",
            "title": "LLaMA announced",
            "description": "Metaが効率的Foundation Model Weightを研究者へ提供し、Open-weight LLM Ecosystemを加速した。"
        },
        {
            "start": "2023-03-13",
            "title": "Stanford Alpaca announced",
            "description": "低Cost Instruction-tuned LLaMA派生ModelがSynthetic DataによるOpen Model適応の速さを示した。"
        },
        {
            "start": "2023-03-14",
            "title": "GPT-4 released",
            "description": "OpenAIがReasoningとProfessional Benchmarkを大幅改善したMultimodal Large Modelを公開した。"
        },
        {
            "start": "2023-03-14",
            "title": "Claude released",
            "description": "AnthropicがHelpful・Safety重視の会話AssistantとModel Family Claudeを公開した。"
        },
        {
            "start": "2023-04-05",
            "title": "Segment Anything Model released",
            "description": "MetaがPrompt可能Segmentation ModelとSA-1B Mask Datasetを公開した。"
        },
        {
            "start": "2023-05-10",
            "title": "PaLM 2 announced",
            "description": "GoogleがBardとEnterprise AI Serviceを支える効率的多言語Model Familyを公開した。"
        },
        {
            "start": "2023-05-25",
            "title": "Falcon 40B released",
            "description": "Technology Innovation Instituteが大規模Curated Web Corpusで学習した影響力あるOpen License Language Modelを公開した。"
        },
        {
            "start": "2023-07-18",
            "title": "Llama 2 released",
            "description": "MetaとMicrosoftがPretrained・Chat-tuned Open-weight Modelの商用Accessを拡大した。"
        },
        {
            "start": "2023-08-03",
            "title": "Qwen-7B released",
            "description": "AlibabaのQwen Familyが多言語・Coding能力を持ってOpen-weight Ecosystemへ参入した。"
        },
        {
            "start": "2023-08-24",
            "title": "Code Llama released",
            "description": "MetaがCode Generation、Completion、Instruction Following向けLlama Modelを公開した。"
        },
        {
            "start": "2023-09-20",
            "title": "DALL·E 3 announced",
            "description": "Prompt理解改善とChatGPT統合により、Text-to-image Generationを会話的に指示しやすくした。"
        },
        {
            "start": "2023-09-27",
            "title": "Mistral 7B released",
            "description": "Mistral AIがGQAとSliding-window Attentionを使う小型Apache License Modelを公開した。"
        },
        {
            "start": "2023-11-04",
            "title": "Grok announced",
            "description": "xAIがXのReal-time Informationへ接続する会話Model Grokを発表した。"
        },
        {
            "start": "2023-12-06",
            "title": "Gemini 1.0 announced",
            "description": "GoogleがUltra、Pro、Nanoを含むNative Multimodal Model Familyを発表した。"
        },
        {
            "start": "2023-12-11",
            "title": "Mixtral 8x7B released",
            "description": "Mistral AIのSparse MoEがTokenごとに一部ParameterだけをActiveにして高い能力を示した。"
        },
        {
            "start": "2024-02-15",
            "title": "Gemini 1.5 announced",
            "description": "GoogleがPreviewで100万Token Contextを持つMoE Modelを発表した。"
        },
        {
            "start": "2024-02-15",
            "title": "Sora previewed",
            "description": "OpenAIが1分規模の一貫したSceneを生成するText-to-video Diffusion Modelを公開した。"
        },
        {
            "start": "2024-03-04",
            "title": "Claude 3 family released",
            "description": "AnthropicがReasoning、Vision、Long Contextを強化したHaiku、Sonnet、Opusを公開した。"
        },
        {
            "start": "2024-03-17",
            "title": "Grok-1 open weights released",
            "description": "xAIが大規模MoE Language ModelのWeightとArchitecture情報を公開した。"
        },
        {
            "start": "2024-03-27",
            "title": "DBRX released",
            "description": "DatabricksがEnterprise・Programming性能を狙うOpen MoE Modelを公開した。"
        },
        {
            "start": "2024-04-18",
            "title": "Llama 3 released",
            "description": "Metaが大幅能力改善した8B・70B Pretrained／Instruction-tuned Modelを公開した。"
        },
        {
            "start": "2024-04-23",
            "title": "Phi-3 Mini released",
            "description": "Microsoftが精選・Synthetic Dataにより高性能Small Language Modelを作れると示した。"
        },
        {
            "start": "2024-05-13",
            "title": "GPT-4o released",
            "description": "OpenAIが低Latency Text、Vision、Audio Interaction向けOmni Modelを公開した。"
        },
        {
            "start": "2024-06-20",
            "title": "Claude 3.5 Sonnet released",
            "description": "AnthropicがCoding、Reasoning、Visual Understandingを大幅改善したMid-tier Modelを公開した。"
        },
        {
            "start": "2024-06-27",
            "title": "Gemma 2 released",
            "description": "Googleが270億Parameterを含む複数Sizeの改良Open Modelを公開した。"
        },
        {
            "start": "2024-07-18",
            "title": "GPT-4o mini released",
            "description": "OpenAIが大規模利用向けCost-efficient Small Multimodal Modelを公開した。"
        },
        {
            "start": "2024-07-23",
            "title": "Llama 3.1 released",
            "description": "Metaが改良8B・70BとともにOpen-weight 405B Modelを公開した。"
        },
        {
            "start": "2024-07-24",
            "title": "Mistral Large 2 released",
            "description": "Mistral AIがCodingとLong-context Single-node Inference向け123B Multilingual Modelを公開した。"
        },
        {
            "start": "2024-08-01",
            "title": "FLUX.1 released",
            "description": "Black Forest LabsがPrompt追従と画質に優れたOpen／Hosted Rectified-flow Image Modelを公開した。"
        },
        {
            "start": "2024-09-12",
            "title": "OpenAI o1-preview released",
            "description": "難問へより多くのInference Timeを使ってReasoningする新Model Seriesが公開された。"
        },
        {
            "start": "2024-09-19",
            "title": "Qwen2.5 released",
            "description": "AlibabaがGeneral Language、Coding、MathにわたるOpen Model Familyを多言語対応で拡張した。"
        },
        {
            "start": "2024-09-25",
            "title": "Llama 3.2 released",
            "description": "MetaがVision-language ModelとEdge・Mobile向け軽量Text Modelを公開した。"
        },
        {
            "start": "2024-10-22",
            "title": "Claude computer use preview",
            "description": "AnthropicがScreenshot、Mouse、Keyboard ActionによるModel-controlled DesktopをPreview公開した。"
        },
        {
            "start": "2024-12-11",
            "title": "Gemini 2.0 announced",
            "description": "GoogleがNative Tool UseとLive Interactionを持つAgentic Multimodal Model FamilyとしてGemini 2.0を発表した。"
        },
        {
            "start": "2024-12-26",
            "title": "DeepSeek-V3 released",
            "description": "DeepSeekが効率的Large MoE ModelとTechnical ReportをOpen条件で公開した。"
        },
        {
            "start": "2025-01-20",
            "title": "DeepSeek-R1 released",
            "description": "Open Reasoning ModelがRL中心Post-trainingにより強いMath・Coding性能を示した。"
        },
        {
            "start": "2025-01-31",
            "title": "OpenAI o3-mini released",
            "description": "OpenAIがScience、Math、Coding効率向けSmall Reasoning Modelを公開した。"
        },
        {
            "start": "2025-02-02",
            "title": "OpenAI deep research launched",
            "description": "Browsing Agentが長時間実行で多数Online Sourceを統合し、文書化Research Reportを作成した。"
        },
        {
            "start": "2025-02-24",
            "title": "Claude 3.7 Sonnet released",
            "description": "Anthropicが即時AnswerとExtended Visible Reasoningを両立するHybrid Modelを公開した。"
        },
        {
            "start": "2025-02-27",
            "title": "GPT-4.5 released",
            "description": "OpenAIが広いKnowledge、自然Interaction、Hallucination低減を重視するLarge General-purpose Modelを公開した。"
        },
        {
            "start": "2025-03-12",
            "title": "Gemma 3 released",
            "description": "GoogleがLong Contextと広いMultilingual Supportを持つ複数SizeのOpen Multimodal Modelを公開した。"
        },
        {
            "start": "2025-03-25",
            "title": "Gemini 2.5 Pro Experimental released",
            "description": "GoogleがReasoning、Coding、Native Multimodality、100万Token Contextを強化したThinking Modelを公開した。"
        },
        {
            "start": "2025-04-05",
            "title": "Llama 4 Scout and Maverick released",
            "description": "MetaがNative Multimodal Sparse MoEを公開し、Scoutは非常に長いContextを特徴とした。"
        },
        {
            "start": "2025-04-14",
            "title": "GPT-4.1 family released",
            "description": "OpenAIがCoding、Instruction Following、100万Token Contextを大幅改善したAPI Model Familyを公開した。"
        },
        {
            "start": "2025-04-16",
            "title": "OpenAI o3 and o4-mini released",
            "description": "Reasoning ModelがWeb Browsing、Python、Image・File Analysis、Image Generation Toolを統合した。"
        },
        {
            "start": "2025-04-29",
            "title": "Qwen3 released",
            "description": "AlibabaがThinking Mode切替と119言語・方言対応のDense／MoE Open Modelを公開した。"
        },
        {
            "start": "2025-05-22",
            "title": "Claude Opus 4 and Sonnet 4 released",
            "description": "AnthropicがCoding、持続Agent Workflow、Hybrid Reasoning重視Modelを公開した。"
        },
        {
            "start": "2025-06-10",
            "title": "Magistral released",
            "description": "Mistral AIがMultilingual・Domain-focused Reasoningを持つ初のReasoning Model Familyを公開した。"
        },
        {
            "start": "2025-06-20",
            "title": "Kimi-Researcher announced",
            "description": "Moonshot AIがEnd-to-End Agentic RLで学習したAutonomous Deep-search Agentを公開した。"
        },
        {
            "start": "2025-07-09",
            "title": "Grok 4 released",
            "description": "xAIがCode実行とWeb SearchをNative Tool UseするReasoning Modelを公開した。"
        },
        {
            "start": "2025-07-11",
            "title": "Kimi K2 released",
            "description": "Moonshot AIがAgentic Tool Use・Coding向け1兆Parameter MoE Modelを公開した。"
        },
        {
            "start": "2025-07-28",
            "title": "GLM-4.5 released",
            "description": "Z.aiがReasoning、Coding、Agentic CapabilityとInterleaved Thinkingを重視するOpen Modelを公開した。"
        },
        {
            "start": "2025-08-05",
            "title": "Claude Opus 4.1 released",
            "description": "AnthropicがCoding、Research、Data Analysis、Agentic Search向けFlagship Modelを更新した。"
        },
        {
            "start": "2025-08-07",
            "title": "GPT-5 released",
            "description": "OpenAIが高速応答と深いReasoningをRoutingする統一Systemを公開し、Coding・Tool Useを強化した。"
        },
        {
            "start": "2025-09-29",
            "title": "Claude Sonnet 4.5 released",
            "description": "AnthropicがCoding、Complex Agent、Computer Use、Long-running Professional Workflowを強化した。"
        },
        {
            "start": "2025-11-12",
            "title": "GPT-5.1 released",
            "description": "OpenAIがGPT-5 Seriesを更新し、より自然なInstant Responseと適応的Extended Reasoningを提供した。"
        },
        {
            "start": "2025-11-17",
            "title": "Grok 4.1 released",
            "description": "xAIがModel-based Preference Signalによる大規模RLで創造的・感情的・協働的Interactionを改善した。"
        },
        {
            "start": "2025-11-24",
            "title": "Claude Opus 4.5 released",
            "description": "AnthropicがHeavy-duty Agentic CodingとLong-running Knowledge Workを進歩させた。"
        },
        {
            "start": "2025-12-01",
            "title": "DeepSeek-V3.2 released",
            "description": "DeepSeekがTool-using Agent向けReasoning-first後継Modelを公開した。"
        },
        {
            "start": "2025-12-02",
            "title": "Mistral 3 released",
            "description": "Mistral AIがMultimodal MoE Mistral Large 3を中心とする新Open Familyを公開した。"
        },
        {
            "start": "2025-12-11",
            "title": "GPT-5.2 released",
            "description": "OpenAIがProfessional・Agentic Work向けInstant、Thinking、Pro Variantを更新した。"
        },
        {
            "start": "2025-12-22",
            "title": "GLM-4.7 released",
            "description": "Z.aiがCodingを改善し、より持続的なTurn-level Thinking管理を導入した。"
        },
        {
            "start": "2026-02-05",
            "title": "GPT-5.3-Codex released",
            "description": "OpenAIがLong-horizon Agentic CodingとProfessional Knowledge Work生成を進歩させた。"
        },
        {
            "start": "2026-02-05",
            "title": "Claude Opus 4.6 released",
            "description": "AnthropicがLong-running Task、Code Review、Professional Analysis、Agent Reliabilityを強化した。"
        },
        {
            "start": "2026-02-12",
            "title": "GLM-5 released",
            "description": "Z.aiがInteractive CodingからAgentic Engineeringへの移行を狙うFlagship Modelを公開した。"
        },
        {
            "start": "2026-03-16",
            "title": "Mistral Small 4 released",
            "description": "Mistral AIがChat、Coding、Agent、Complex Reasoning向けOpen Multimodal Hybrid Modelを公開した。"
        },
        {
            "start": "2026-04-07",
            "title": "GLM-5.1 released",
            "description": "Z.aiが前FlagshipよりLong-horizon Agentic EngineeringとCodingを強化した。"
        },
        {
            "start": "2026-04-20",
            "title": "Kimi K2.6 released",
            "description": "Moonshot AIがDeep Research、自律Web構築、Spreadsheet、Presentation編集向けModel Platformを拡張した。"
        },
        {
            "start": "2026-04-23",
            "title": "GPT-5.5 released",
            "description": "OpenAIがComplex Coding、Research、Data Analysis、Scientific Workflow向け高速Frontier Modelを公開した。"
        },
        {
            "start": "2026-05-19",
            "title": "Gemini 3.5 Flash released",
            "description": "GoogleがComplex Long-horizon Workflow向けFrontier IntelligenceとActionを統合するAgent-first Modelを公開した。"
        },
        {
            "start": "2026-06-09",
            "title": "Gemini 3.5 Live Translate released",
            "description": "Googleが70超言語のNear-real-time Speech-to-speech Translation Modelを公開した。"
        },
        {
            "start": "2026-06-23",
            "title": "Mistral OCR 4 released",
            "description": "Mistral AIがMultilingual OCR、Bounding Box、Confidence Scoreを持つStructured Document Intelligenceを公開した。"
        },
        {
            "start": "2026-06-24",
            "title": "Computer use integrated into Gemini 3.5 Flash",
            "description": "GoogleがBrowser、Mobile、Desktop Agent向けGraphical Computer InteractionをBuilt-in Tool化した。"
        },
        {
            "start": "2026-07-02",
            "title": "Leanstral 1.5 released",
            "description": "Mistral AIがLean Proof EngineeringとFormal Verification特化Open MoE Modelを公開した。"
        },
        {
            "start": "2026-07-08",
            "title": "GPT-Live released",
            "description": "OpenAIがInteractive Voice Generation・Conversation向けReal-time Audio Modelを公開した。"
        },
        {
            "start": "2026-07-08",
            "title": "Robostral Navigate released",
            "description": "Mistral AIが単一RGB Cameraで自律Robot移動を行うEmbodied Navigation Modelを公開した。"
        },
        {
            "start": "2026-07-09",
            "title": "GPT-5.6 released",
            "description": "OpenAIがMaximum Reasoning、Balanced Work、Low-cost High-volume Intelligenceを担うSol、Terra、Lunaを公開した。"
        },
        {
            "start": "2026-07-21",
            "title": "Gemini 3.6 Flash family announced",
            "description": "Googleが高速General、Lightweight、Cybersecurity特化Flash VariantでAgentic Model Lineを拡張した。"
        },
        {
            "start": "2026-07-24",
            "title": "Claude Opus 5 released",
            "description": "AnthropicがLong-running Agent、Coding、難しいProfessional Analysis向け新Flagshipを公開した。"
        }
    ]
};

// 制度・安全・政策・社会的影響
var tl_society = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "“Artificial intelligence” established as a research field",
            "description": "Dartmouth Proposalが学習・推論・言語利用するMachine研究へ名称と共通Agendaを与えた。"
        },
        {
            "start": "1966",
            "title": "ALPAC report reshapes machine translation",
            "description": "米国の批判的Reportが機械翻訳は期待未達と結論し、資金を基礎言語研究へ転換した。"
        },
        {
            "start": "1969",
            "title": "First International Joint Conference on Artificial Intelligence",
            "description": "IJCAIが多様なAI研究分野を結ぶ定期的Global Forumを創設した。"
        },
        {
            "start": "1973",
            "title": "Lighthill report and funding contraction",
            "description": "英国政府ReviewがAIの分断とPoor Scalingを批判し、第一次AIの冬の一因となった。"
        },
        {
            "start": "1979",
            "title": "AAAI founded",
            "description": "AAAIがAI分野の主要Professional Institutionとして設立された。"
        },
        {
            "start": "1982",
            "title": "Fifth Generation Computer Systems becomes a national priority",
            "description": "日本の国家ProgramがKnowledge ProcessingとParallel AI Hardwareの国際競争を激化させた。"
        },
        {
            "start": "1987",
            "title": "Expert-system market collapse begins",
            "description": "Maintenance Cost、脆弱性、Hardware Market変化がCommercial Enthusiasmを崩し、第二次AIの冬を招いた。"
        },
        {
            "start": "1997",
            "title": "Deep Blue victory changes public perception",
            "description": "Chess Matchが専門Machine Intelligenceが人間Expertiseを上回るGlobal Symbolとなった。"
        },
        {
            "start": "2004",
            "title": "DARPA Grand Challenge catalyzes autonomous vehicles",
            "description": "注目CompetitionがAcademic Robotics、Military Funding、新興Self-driving Industryを結びつけた。"
        },
        {
            "start": "2006",
            "title": "AI@50 Dartmouth conference",
            "description": "研究者が分野創設時のAmbitionを再検討し、50年の進歩と未解決Challengeを評価した。"
        },
        {
            "start": "2012",
            "title": "Deep learning becomes an industrial priority",
            "description": "ImageNet結果がMajor Tech CompanyによるNeural Research Team、Data Center、Productへの急速投資を促した。"
        },
        {
            "start": "2014",
            "title": "AI acquisitions and laboratory expansion accelerate",
            "description": "Major Technology FirmがResearch Startupを買収し、Deep Learning中心の大規模内部AI Labを構築した。"
        },
        {
            "start": "2015",
            "title": "OpenAI founded",
            "description": "Advanced AIと広い社会Benefitを追求するResearch OrganizationとしてOpenAIが設立された。"
        },
        {
            "start": "2016",
            "title": "Partnership on AI founded",
            "description": "Technology CompanyとCivil SocietyがResponsible AI実践のMulti-stakeholder Forumを設立した。"
        },
        {
            "start": "2016",
            "title": "AI Now Institute initiative begins",
            "description": "Interdisciplinary ResearchがAI Policy DebateでLabor、Rights、Accountability、Social Consequenceを中心化した。"
        },
        {
            "start": "2017",
            "title": "Asilomar AI Principles",
            "description": "研究者とPublic-interest参加者がBeneficial・Safe AI Developmentの広く議論される原則を提示した。"
        },
        {
            "start": "2018",
            "title": "GDPR automated-decision provisions take effect",
            "description": "European Data Protection LawがPersonal Dataを使うProfiling・Automated Decisionの権利義務を強化した。"
        },
        {
            "start": "2018",
            "title": "FAccT community consolidates",
            "description": "Fairness、Accountability、Transparency研究が公認Interdisciplinary AI Fieldとして定着した。"
        },
        {
            "start": "2019",
            "title": "OECD AI Principles adopted",
            "description": "各国政府がInclusive Growth、Human-centered Value、Transparency、Robustness、Accountabilityの国際原則を採択した。"
        },
        {
            "start": "2019",
            "title": "Model cards and dataset documentation spread",
            "description": "標準DocumentationがIntended Use、Limitation、Evaluation Condition、Data Provenanceを明示するようになった。"
        },
        {
            "start": "2020",
            "title": "Large-model environmental and labor impacts gain attention",
            "description": "AI System背後のEnergy、Carbon、Data Work、Hidden Human Laborを測る研究が増えた。"
        },
        {
            "start": "2021",
            "title": "UNESCO Recommendation on the Ethics of Artificial Intelligence",
            "description": "加盟国がHuman Rights、Governance、Environment、Social Well-beingを含むGlobal Normative Frameworkを採択した。"
        },
        {
            "start": "2021",
            "title": "EU proposes the Artificial Intelligence Act",
            "description": "European CommissionがAI System向けRisk-tiered Regulatory Frameworkを提案した。"
        },
        {
            "start": "2022",
            "title": "Generative AI copyright disputes intensify",
            "description": "Text・Image GeneratorがTraining Data、Authorship、License、Creative Laborをめぐる大きな争いを引き起こした。"
        },
        {
            "start": "2023-01-26",
            "title": "NIST AI Risk Management Framework released",
            "description": "米国がAI RiskをGovern、Map、Measure、ManageするVoluntary Frameworkを公開した。"
        },
        {
            "start": "2023-03-22",
            "title": "Public call for a pause on giant AI experiments",
            "description": "Open LetterがFrontier Model急速開発、Governance Capacity、Systemic Riskへの懸念拡大を示した。"
        },
        {
            "start": "2023-05-30",
            "title": "Statement on AI extinction risk",
            "description": "研究者とIndustry Leaderが極端AI Riskを他のGlobal-scale Threatと同等に扱うべきだと公表した。"
        },
        {
            "start": "2023-10-30",
            "title": "US Executive Order on safe, secure and trustworthy AI",
            "description": "Executive OrderがStandard、Evaluation、Security、Civil Rights、Labor、Government AI UseについてFederal Agencyへ指示した。"
        },
        {
            "start": "2023-11-01",
            "title": "Bletchley Declaration",
            "description": "第1回AI Safety Summit参加国がFrontier AIの共通Riskと国際協力の必要性を確認した。"
        },
        {
            "start": "2023-12-08",
            "title": "Political agreement on the EU AI Act",
            "description": "EU機関がGeneral-purpose Model規定を含む包括的Risk-based AI Lawで政治合意した。"
        },
        {
            "start": "2024",
            "title": "Frontier-model system cards and preparedness frameworks expand",
            "description": "Major LabがCapability、Misuse Risk、Safeguard、Deployment Threshold評価をより公開するようになった。"
        },
        {
            "start": "2024-05-21",
            "title": "EU AI Act formally adopted",
            "description": "EUが初の広範で拘束力あるCross-sector AI Regulationを正式採択した。"
        },
        {
            "start": "2024-08-01",
            "title": "EU AI Act enters into force",
            "description": "Regulationが禁止Practice、High-risk System、General-purpose AIへ段階適用を開始した。"
        },
        {
            "start": "2025",
            "title": "Agent safety and computer-use governance become central",
            "description": "ModelがToolとAutonomyを得るにつれ、Permission、Monitoring、Sandbox、Human OversightがPolicy・Engineeringの中心課題となった。"
        },
        {
            "start": "2025",
            "title": "International AI safety evaluations deepen",
            "description": "National InstituteとFrontier LabがCyber、Biological、Autonomy、Model Control Riskの共同Testを拡大した。"
        },
        {
            "start": "2026",
            "title": "Governance shifts toward deployed agents and scientific AI",
            "description": "Policy焦点がStatic Chat ModelからAutonomous Workflow、Critical Infrastructure、AI-assisted Discoveryへ移った。"
        }
    ]
};

var timelines = [
    tl_periods,
    tl_foundations,
    tl_classical_ml,
    tl_deep_learning,
    tl_rl_agents,
    tl_people,
    tl_data_eval,
    tl_infrastructure,
    tl_models,
    tl_society
];
