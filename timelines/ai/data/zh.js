var title = "人工智能、机器学习与深度学习发展时间线";

// 人工智能、机器学习与深度学习编辑时间线。人物放在其20岁那一年，但事件文字不特别说明该规则。
// 历史时期为近似编辑范围，并会有意重叠。
// SIMILE公元前年规则：负年份必须是负号后正好4位数字。

// 人工智能范式与历史时期
var tl_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "end": "1942",
            "title": "概率、优化与逻辑基础时期",
            "description": "后来支撑人工智能的贝叶斯推断、最小二乘法、梯度方法、逻辑和随机过程，在电子计算机出现前已经形成。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1955",
            "title": "控制论与早期神经计算",
            "description": "神经逻辑、信息论、反馈控制和存储程序计算，为讨论心智、机器与通信建立了共同语言。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1956",
            "end": "1973",
            "title": "第一次人工智能繁荣与符号智能",
            "description": "达特茅斯会议后，搜索、定理证明、规划、语言程序与通用问题求解成为人工智能研究核心。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1957",
            "end": "1969",
            "title": "早期连接主义与感知机",
            "description": "可训练阈值网络受到广泛关注，但理论与算力限制了其发展。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1980",
            "title": "第一次人工智能寒冬",
            "description": "机器翻译、机器人和通用推理系统未能兑现过高承诺，资金与预期随之收缩。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1987",
            "title": "专家系统繁荣期",
            "description": "基于规则的系统进入企业和实验室，将专家知识转化为商业决策支持。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2010",
            "title": "概率图模型时代",
            "description": "贝叶斯网络、马尔可夫随机场与消息传递统一了不确定性、因果结构和模块化推断。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1986",
            "end": "2011",
            "title": "统计机器学习崛起",
            "description": "数据驱动预测、概率建模、核方法和实证评测，逐渐取代大量手工符号知识。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "第二次人工智能寒冬",
            "description": "专家系统市场和专用Lisp机器产业崩溃，投资再次收缩。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "2015",
            "title": "现代强化学习体系形成期",
            "description": "时序差分学习、Q学习、策略梯度和Actor–Critic构成现代强化学习的核心工具。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2011",
            "title": "集成学习发展期",
            "description": "Bagging、Boosting和随机森林证明，组合多样的弱学习器或不稳定学习器能够获得高精度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2008",
            "title": "核方法时代",
            "description": "支持向量机和核构造将凸优化与强泛化理论带入实用机器学习。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2006",
            "end": "2011",
            "title": "深度学习复兴",
            "description": "逐层预训练、优化改进、大规模数据和GPU使深层神经网络训练重新成为现实。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2012",
            "end": "2016",
            "title": "ImageNet与GPU深度学习突破期",
            "description": "AlexNet及快速进步的卷积网络，使深度学习成为视觉和多种感知任务的主流方法。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2018",
            "title": "序列到序列与注意力转型期",
            "description": "编码器—解码器网络与注意力改变了翻译、语音和序列建模，为Transformer铺平道路。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2020",
            "title": "以GAN为中心的生成建模时期",
            "description": "对抗训练推动了逼真图像合成、表示学习和可控生成的快速进步。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2016",
            "end": "2026",
            "title": "人工智能安全、对齐与治理扩张期",
            "description": "技术对齐、模型评测、事件报告以及国家和国际监管成为前沿人工智能开发的重要组成部分。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2022",
            "title": "Transformer与大规模预训练时代",
            "description": "自注意力、规模化与迁移学习催生通用语言模型，并推动架构逐渐统一。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "扩散与流生成时代",
            "description": "扩散、分数模型与流匹配成为高质量图像、视频、音频和多模态生成的核心。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2021",
            "end": "2026",
            "title": "多模态基础模型时代",
            "description": "模型开始学习跨文本、图像、音频、视频、代码与行动的共享表示。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2022",
            "end": "2026",
            "title": "生成式人工智能产品化时期",
            "description": "对话助手、图像生成器和编程智能体使基础模型从实验室进入大众产品。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "开放权重模型竞争",
            "description": "Llama、Mistral、Qwen、DeepSeek、Gemma等模型家族加速了公开实验、本地部署与专业化。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "工具使用与智能体人工智能时代",
            "description": "语言模型逐渐能够执行多步规划、调用工具、操作计算机并协调专业子智能体。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2024",
            "end": "2026",
            "title": "推理时计算模型时代",
            "description": "在推理阶段投入可变计算量的模型出现，使深度推理成为新的规模化维度。",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// 数学、统计与计算基础
var tl_foundations = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "title": "Bayes’ theorem",
            "description": "Thomas Bayes的遗作建立了逆概率框架，使人们能够根据观察证据更新对未知原因的信念。"
        },
        {
            "start": "1805",
            "title": "Least-squares estimation",
            "description": "Adrien-Marie Legendre发表最小二乘法，奠定回归、参数拟合和现代损失最小化的基础。"
        },
        {
            "start": "1847",
            "title": "Gradient descent",
            "description": "Augustin-Louis Cauchy描述了沿导数方向优化多变量函数的方法，预示了后来的神经网络训练。"
        },
        {
            "start": "1854",
            "title": "Boolean algebra",
            "description": "George Boole将逻辑命题转化为代数运算，为数字电路、符号推理和二进制计算奠定基础。"
        },
        {
            "start": "1901",
            "title": "Principal component analysis",
            "description": "Karl Pearson提出主成分分析，将相关测量投影到方差最大的低维轴上。"
        },
        {
            "start": "1906",
            "title": "Markov chains",
            "description": "Andrey Markov形式化了下一状态只依赖当前状态的随机过程，成为序列模型和强化学习的重要基础。"
        },
        {
            "start": "1936",
            "title": "Linear discriminant analysis",
            "description": "Ronald Fisher推导出最大化类别分离的投影方法，形成监督降维与分类的核心算法。"
        },
        {
            "start": "1936",
            "title": "Turing machine",
            "description": "Alan Turing形式化图灵机与可计算性，定义了人工智能运行所处的算法边界。"
        },
        {
            "start": "1943",
            "title": "McCulloch–Pitts neuron",
            "description": "Warren McCulloch与Walter Pitts将神经元建模为逻辑阈值单元，并证明神经网络能够实现逻辑函数。"
        },
        {
            "start": "1948",
            "title": "Information theory",
            "description": "Claude Shannon定义信息熵和信道容量，为机器学习提供处理不确定性、编码与表示的定量工具。"
        },
        {
            "start": "1949",
            "title": "Hebbian learning",
            "description": "Donald Hebb提出共同激活的神经元会增强突触连接，启发了无监督学习和表示学习规则。"
        },
        {
            "start": "1950",
            "title": "Turing test",
            "description": "Alan Turing将机器智能重新表述为基于语言行为而非内部机制的操作性模仿游戏。"
        },
        {
            "start": "1950",
            "title": "Dynamic programming",
            "description": "Richard Bellman发展基于最优性原理的递归优化，成为规划、控制和强化学习的核心。"
        }
    ]
};

// 符号人工智能与经典机器学习算法
var tl_classical_ml = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1951",
            "title": "Nearest-neighbor classification",
            "description": "Evelyn Fix与Joseph Hodges描述了依据邻近标注样本进行非参数分类的方法，成为k近邻算法的起点。"
        },
        {
            "start": "1952",
            "title": "Samuel’s self-learning checkers method",
            "description": "Arthur Samuel结合搜索、评估函数和对局学习，在实践中推动“机器学习”概念形成。"
        },
        {
            "start": "1957",
            "title": "Perceptron learning rule",
            "description": "Frank Rosenblatt提出带误差修正更新规则的可训练线性阈值分类器。"
        },
        {
            "start": "1957",
            "title": "Lloyd’s k-means algorithm",
            "description": "Stuart Lloyd形式化了向量量化中的迭代分配与质心更新，后来成为标准k-means过程。"
        },
        {
            "start": "1958",
            "title": "Alpha–beta pruning",
            "description": "Alpha–beta剪枝排除不会影响最终决策的分支，使极小化极大博弈树搜索变得实用。"
        },
        {
            "start": "1958",
            "title": "Logistic regression formulation",
            "description": "David Cox形式化二元结果的逻辑回归，后来成为标准概率分类器。"
        },
        {
            "start": "1959",
            "title": "Dijkstra’s shortest-path algorithm",
            "description": "Edsger Dijkstra提出高效最短路径方法，成为规划、路由和图搜索的基础。"
        },
        {
            "start": "1960",
            "title": "Kalman filter",
            "description": "Rudolf Kálmán推导出含噪线性动态系统的递归状态估计，改变了跟踪、导航与控制。"
        },
        {
            "start": "1962",
            "title": "Rosenblatt convergence theorem",
            "description": "感知机收敛定理阐明了线性分离器能够在有限次更新中学得的条件。"
        },
        {
            "start": "1963",
            "title": "AID decision-tree method",
            "description": "自动交互检测通过递归划分数据解释结果，是现代决策树的重要先驱。"
        },
        {
            "start": "1965",
            "title": "Resolution theorem proving",
            "description": "John Alan Robinson提出归结原理与合一，形成一阶逻辑自动定理证明的完备推理规则。"
        },
        {
            "start": "1965",
            "title": "Fuzzy sets",
            "description": "Lotfi Zadeh引入非严格布尔类别的渐进隶属度，使模糊控制和近似推理成为可能。"
        },
        {
            "start": "1966",
            "title": "Hidden Markov-model methods",
            "description": "Leonard Baum等人发展了隐状态序列模型的概率推断与估计方法。"
        },
        {
            "start": "1967",
            "title": "Viterbi algorithm",
            "description": "Andrew Viterbi提出求取最可能隐状态路径的动态规划算法，后来成为语音和序列解码核心。"
        },
        {
            "start": "1967",
            "title": "Nearest-neighbor decision rule analysis",
            "description": "Thomas Cover与Peter Hart建立了最近邻分类的理论误差界。"
        },
        {
            "start": "1968",
            "title": "A* search",
            "description": "Peter Hart、Nils Nilsson与Bertram Raphael结合路径代价与可采纳启发式，高效寻找最优路径。"
        },
        {
            "start": "1969",
            "title": "Credit-assignment limits highlighted",
            "description": "Minsky与Papert的分析明确了单层感知机的表示限制，改变了神经网络研究方向。"
        },
        {
            "start": "1971",
            "title": "STRIPS planning",
            "description": "STRIPS通过前置条件和效果表示动作，奠定自动规划的持久基础。"
        },
        {
            "start": "1972",
            "title": "Prolog",
            "description": "Alain Colmerauer等人创建Prolog，使逻辑编程成为符号人工智能与专家系统的实用载体。"
        },
        {
            "start": "1973",
            "title": "Lighthill report",
            "description": "Lighthill报告批评当时人工智能方法的可扩展性，推动英国在第一次人工智能寒冬中削减资金。"
        },
        {
            "start": "1974",
            "title": "Backpropagation through differentiable networks",
            "description": "Paul Werbos描述了将反向模式微分用于训练多层神经网络的方法。"
        },
        {
            "start": "1977",
            "title": "Expectation–maximization algorithm",
            "description": "Dempster、Laird与Rubin将含潜变量或缺失数据的迭代极大似然估计统一为EM算法。"
        },
        {
            "start": "1979",
            "title": "ID3 decision tree",
            "description": "Ross Quinlan利用信息增益选择递归划分，建立极具影响力的决策树学习家族。"
        },
        {
            "start": "1982",
            "title": "Hopfield network",
            "description": "John Hopfield将循环神经动力学与能量最小化结合，创建联想记忆模型。"
        },
        {
            "start": "1982",
            "title": "Belief propagation",
            "description": "Judea Pearl开发树结构精确推断的局部消息传递方法，后来扩展到图模型与编码理论。"
        },
        {
            "start": "1984",
            "title": "CART",
            "description": "Breiman等人通过不纯度划分与代价复杂度剪枝，系统化分类与回归树。"
        },
        {
            "start": "1984",
            "title": "Gibbs sampling",
            "description": "Geman与Geman推广马尔可夫随机场的逐坐标采样，后来成为贝叶斯计算核心。"
        },
        {
            "start": "1985",
            "title": "Bayesian networks",
            "description": "Judea Pearl系统化用有向无环图表示条件独立与因果假设的贝叶斯网络。"
        },
        {
            "start": "1985",
            "title": "Boltzmann machine",
            "description": "Ackley、Hinton与Sejnowski提出用于建模概率分布的随机能量神经网络。"
        },
        {
            "start": "1986",
            "title": "Backpropagation popularized",
            "description": "Rumelhart、Hinton与Williams证明误差反向传播可高效训练多层网络并学习分布式表示。"
        },
        {
            "start": "1986",
            "title": "Inductive bias and version spaces",
            "description": "Tom Mitchell对版本空间与归纳学习的形式化，将机器学习明确为系统化假设搜索。"
        },
        {
            "start": "1988",
            "title": "Temporal-difference learning",
            "description": "Richard Sutton统一了从连续估计中学习的时序差分方法，使系统可在最终结果出现前学习。"
        },
        {
            "start": "1988",
            "title": "Radial basis-function networks",
            "description": "Broomhead与Lowe将径向基插值连接到可训练神经网络的函数逼近。"
        },
        {
            "start": "1989",
            "title": "Q-learning",
            "description": "Christopher Watkins提出无需环境模型即可学习最优动作价值的离策略时序差分算法。"
        },
        {
            "start": "1989",
            "title": "Universal approximation theorem",
            "description": "Cybenko等人的工作证明足够大的单隐层网络能够逼近广泛的连续函数。"
        },
        {
            "start": "1990",
            "title": "QDA and modern statistical classification texts",
            "description": "统计学习将生成式分类器、判别分析和交叉验证整合为可复用的预测工具体系。"
        },
        {
            "start": "1990",
            "title": "Latent semantic analysis",
            "description": "Deerwester等人利用奇异值分解得到文档与词语的低维语义表示。"
        },
        {
            "start": "1992",
            "title": "REINFORCE policy gradient",
            "description": "Ronald Williams提出用于优化随机策略的无偏似然比梯度估计器REINFORCE。"
        },
        {
            "start": "1992",
            "title": "Kernel trick for nonlinear learning",
            "description": "Boser、Guyon与Vapnik将核函数用于最大间隔分类器，通过内积实现非线性决策。"
        },
        {
            "start": "1993",
            "title": "Particle filtering",
            "description": "序贯蒙特卡洛方法用加权粒子表示非线性、非高斯状态不确定性。"
        },
        {
            "start": "1994",
            "title": "SARSA",
            "description": "Rummery与Niranjan描述了同策略时序差分控制，后来依据状态—动作转移元组命名为SARSA。"
        },
        {
            "start": "1994",
            "title": "BM25 ranking",
            "description": "Okapi BM25结合概率词项加权与文档长度归一化，成为长期使用的信息检索基线。"
        },
        {
            "start": "1995",
            "title": "Support-vector machines",
            "description": "Cortes与Vapnik提出软间隔支持向量机，将最大间隔学习与对不可分数据的鲁棒性结合。"
        },
        {
            "start": "1995",
            "title": "AdaBoost",
            "description": "Freund与Schapire展示如何迭代调整样本权重，将弱学习器组合为强分类器。"
        },
        {
            "start": "1996",
            "title": "DBSCAN",
            "description": "Ester等人提出密度聚类，可发现不规则形状簇并将稀疏点标记为噪声。"
        },
        {
            "start": "1996",
            "title": "Independent component analysis",
            "description": "独立成分分析成熟为从混合观测中分离统计独立潜在源的实用方法。"
        },
        {
            "start": "1997",
            "title": "Long short-term memory",
            "description": "Hochreiter与Schmidhuber提出带门控记忆单元的LSTM，可保持梯度并学习长程依赖。"
        },
        {
            "start": "1997",
            "title": "Boosting as additive modeling",
            "description": "Friedman、Hastie与Tibshirani将Boosting解释为逐步加性统计建模，澄清其优化机制。"
        },
        {
            "start": "1998",
            "title": "LeNet-5 and gradient-based document recognition",
            "description": "LeCun等人展示了用于手写数字和文档识别的端到端卷积系统。"
        },
        {
            "start": "1998",
            "title": "Rapidly-exploring random trees",
            "description": "Steven LaValle提出快速探索随机树，用于高效探索机器人规划中的高维连续配置空间。"
        },
        {
            "start": "1999",
            "title": "Gradient boosting",
            "description": "Jerome Friedman将Boosting形式化为函数梯度下降，创建强大树模型集成的灵活框架。"
        },
        {
            "start": "2000",
            "title": "Minimum-redundancy feature selection",
            "description": "互信息准则推动特征选择在目标相关性与输入冗余之间取得平衡。"
        },
        {
            "start": "2001",
            "title": "Random forests",
            "description": "Leo Breiman结合自助聚合与随机特征选择，形成准确、鲁棒且易并行的树集成。"
        },
        {
            "start": "2001",
            "title": "Conditional random fields",
            "description": "Lafferty、McCallum与Pereira提出判别式无向序列模型CRF，避免HMM的强独立假设。"
        },
        {
            "start": "2001",
            "title": "Spectral clustering",
            "description": "图拉普拉斯特征向量成为根据两两相似度发现非凸簇结构的理论方法。"
        },
        {
            "start": "2003",
            "title": "Latent Dirichlet allocation",
            "description": "Blei、Ng与Jordan提出生成概率主题模型LDA，将文档表示为潜在主题混合。"
        },
        {
            "start": "2003",
            "title": "Maximum-entropy Markov models and discriminative sequence learning",
            "description": "判别式序列模型将丰富特征分类与结构化预测结合，为基于CRF的自然语言处理铺路。"
        },
        {
            "start": "2004",
            "title": "Large-margin structured prediction",
            "description": "结构化支持向量机将最大间隔学习从单一标签扩展到序列、树与复杂输出。"
        },
        {
            "start": "2005",
            "title": "Gaussian-process classification and regression mature",
            "description": "高斯过程成熟为用于校准预测与不确定性估计的实用贝叶斯非参数框架。"
        },
        {
            "start": "2006",
            "title": "Matrix factorization for recommender systems",
            "description": "低秩用户—物品矩阵分解在Netflix Prize时期成为协同过滤主流方法。"
        },
        {
            "start": "2006",
            "title": "Compressed sensing",
            "description": "稀疏恢复理论表明，可通过凸优化从远少于传统要求的测量中重建结构化信号。"
        },
        {
            "start": "2007",
            "title": "Online passive–aggressive algorithms",
            "description": "基于间隔的在线更新为大规模分类、排序与结构化预测提供快速学习方法。"
        },
        {
            "start": "2008",
            "title": "t-SNE",
            "description": "van der Maaten与Hinton提出t-SNE，在低维可视化中保持局部邻域结构。"
        },
        {
            "start": "2008",
            "title": "Isolation forest",
            "description": "Liu、Ting与Zhou提出孤立森林，通过随机划分隔离样本的速度检测异常。"
        },
        {
            "start": "2009",
            "title": "Feature hashing",
            "description": "特征哈希无需保存词表即可将巨大稀疏特征空间映射到固定维度。"
        },
        {
            "start": "2010",
            "title": "Elastic net and sparse regularization become standard",
            "description": "L1/L2组合正则化为相关高维数据提供稳定稀疏模型。"
        },
        {
            "start": "2011",
            "title": "Bayesian optimization with Gaussian processes",
            "description": "序贯采集函数使昂贵黑箱函数的超参数与实验优化变得实用。"
        },
        {
            "start": "2012",
            "title": "Randomized search for hyperparameters",
            "description": "Bergstra与Bengio证明随机搜索通常比网格搜索更高效地探索关键超参数。"
        },
        {
            "start": "2013",
            "title": "Word2vec",
            "description": "Mikolov等人提出高效训练稠密词向量的Skip-gram与CBOW，并产生有用语义几何。"
        },
        {
            "start": "2014",
            "title": "GloVe",
            "description": "Pennington、Socher与Manning将全局词共现统计与嵌入分解结合。"
        },
        {
            "start": "2015",
            "title": "Knowledge distillation",
            "description": "Hinton、Vinyals与Dean训练小型学生模型模仿大型教师集成的软输出。"
        },
        {
            "start": "2016",
            "title": "XGBoost",
            "description": "Chen与Guestrin提出可扩展、带正则化的梯度提升树XGBoost，成为表格数据主流基线。"
        },
        {
            "start": "2016",
            "title": "FastText subword embeddings",
            "description": "Facebook AI用字符n元组表示词语，改善稀有词与形态丰富语言建模。"
        },
        {
            "start": "2017",
            "title": "LightGBM",
            "description": "Microsoft提出基于直方图、按叶生长的LightGBM，面向大规模与高维稀疏数据优化。"
        },
        {
            "start": "2018",
            "title": "CatBoost",
            "description": "Yandex提出有序提升与目标统计处理，减少类别特征学习中的泄漏和偏差。"
        },
        {
            "start": "2018",
            "title": "UMAP",
            "description": "McInnes、Healy与Melville提出可扩展流形学习UMAP，用于可视化与保持邻域的嵌入。"
        },
        {
            "start": "2019",
            "title": "Neural architecture search matures",
            "description": "权重共享、可微搜索与硬件感知目标使自动网络设计更加实用。"
        },
        {
            "start": "2020",
            "title": "Conformal prediction revival",
            "description": "无分布假设的预测集合重新受到重视，成为为机器学习输出提供不确定性覆盖的实用方法。"
        }
    ]
};

// 神经网络、深度学习与生成算法
var tl_deep_learning = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1980",
            "title": "Neocognitron",
            "description": "福岛邦彦提出具有局部感受野与池化的层次卷积式网络Neocognitron，预示现代CNN。"
        },
        {
            "start": "1989",
            "title": "Convolutional neural networks trained by backpropagation",
            "description": "LeCun等人将卷积、权重共享与反向传播结合，用于手写邮政编码识别。"
        },
        {
            "start": "1991",
            "title": "Mixture of experts",
            "description": "Jacobs、Jordan等人提出带门控的专家混合网络，将输入路由到专业子网络。"
        },
        {
            "start": "1991",
            "title": "Vanishing-gradient problem analyzed",
            "description": "Sepp Hochreiter阐明深层与循环网络中梯度跨层或时间步指数衰减的原因。"
        },
        {
            "start": "1997",
            "title": "Bidirectional recurrent neural networks",
            "description": "双向循环神经网络同时利用过去与未来上下文，后来成为语音和序列标注标准。"
        },
        {
            "start": "2000",
            "title": "Echo-state networks",
            "description": "Herbert Jaeger提出固定循环动力学与可训练线性读出的储备池计算Echo State Network。"
        },
        {
            "start": "2003",
            "title": "Neural probabilistic language model",
            "description": "Bengio等人联合学习分布式词表示与下一词概率，缓解离散n元语言模型的稀疏性。"
        },
        {
            "start": "2006",
            "title": "Deep belief networks and greedy layer-wise pretraining",
            "description": "Hinton、Osindero与Teh证明堆叠受限玻尔兹曼机可以有效初始化深层网络。"
        },
        {
            "start": "2006",
            "title": "Connectionist temporal classification",
            "description": "Alex Graves等人提出CTC，对未分段序列与输出进行对齐，改变端到端语音识别。"
        },
        {
            "start": "2007",
            "title": "Sparse autoencoders",
            "description": "稀疏惩罚促使自动编码器从无标注数据学习选择性潜在特征。"
        },
        {
            "start": "2008",
            "title": "Denoising autoencoders",
            "description": "Vincent等人训练网络从受损输入重建干净输入，从而学习鲁棒表示。"
        },
        {
            "start": "2009",
            "title": "GPU-accelerated neural-network training",
            "description": "研究者证明图形处理器可大幅加速神经网络训练，预示以GPU为中心的深度学习基础设施。"
        },
        {
            "start": "2010",
            "title": "Rectified linear units",
            "description": "ReLU激活简化优化并减少饱和，成为深度网络默认组件。"
        },
        {
            "start": "2011",
            "title": "Deep rectifier acoustic models",
            "description": "大规模语音系统证明ReLU可在实用规模上有效训练深层网络。"
        },
        {
            "start": "2012",
            "title": "Dropout",
            "description": "Hinton等人在训练时随机移除单元，减少共同适应并改善泛化。"
        },
        {
            "start": "2012",
            "title": "AlexNet training recipe",
            "description": "Krizhevsky、Sutskever与Hinton结合GPU、ReLU、Dropout、数据增强和大型CNN，大幅赢得ImageNet。"
        },
        {
            "start": "2013",
            "title": "Maxout networks",
            "description": "Goodfellow等人提出与Dropout配合良好的分段线性Maxout单元。"
        },
        {
            "start": "2013",
            "title": "Variational autoencoder",
            "description": "Kingma与Welling提出重参数化变分推断，形成可训练潜变量生成模型VAE。"
        },
        {
            "start": "2013",
            "title": "Distributed representations with negative sampling",
            "description": "负采样提高大词表嵌入训练效率，并推动学习式语义向量空间普及。"
        },
        {
            "start": "2014",
            "title": "Generative adversarial networks",
            "description": "Goodfellow等人提出生成器—判别器博弈，无需显式似然即可学习数据生成。"
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence learning",
            "description": "Sutskever、Vinyals与Le提出编码器—解码器LSTM，将可变长度输入映射为输出序列。"
        },
        {
            "start": "2014",
            "title": "Neural attention for translation",
            "description": "Bahdanau、Cho与Bengio使解码器动态关注相关编码状态，消除固定向量瓶颈。"
        },
        {
            "start": "2014",
            "title": "Gated recurrent unit",
            "description": "Cho等人提出GRU，一种比LSTM更简洁且常能达到相近性能的门控循环结构。"
        },
        {
            "start": "2014",
            "title": "Adam optimizer",
            "description": "Kingma与Ba结合动量和逐参数自适应学习率，创建广泛使用的Adam优化器。"
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "大型神经人脸识别系统结合三维对齐与深度表示学习，接近人类验证准确率。"
        },
        {
            "start": "2015",
            "title": "Batch normalization",
            "description": "Ioffe与Szegedy在训练中归一化中间激活，使更高学习率和稳定深层训练成为可能。"
        },
        {
            "start": "2015",
            "title": "Residual networks",
            "description": "何恺明等人提出残差连接，使极深网络能够可靠优化。"
        },
        {
            "start": "2015",
            "title": "U-Net",
            "description": "Ronneberger、Fischer与Brox提出带跳跃连接的编码器—解码器CNN U-Net，用于精确生物医学图像分割。"
        },
        {
            "start": "2015",
            "title": "Faster R-CNN",
            "description": "Ren等人将区域建议整合进可训练卷积网络，统一高效目标检测。"
        },
        {
            "start": "2015",
            "title": "YOLO",
            "description": "Redmon等人将目标检测重构为对整幅图像进行单次实时回归的问题。"
        },
        {
            "start": "2015",
            "title": "Deep reinforcement learning with DQN",
            "description": "DeepMind结合Q学习、卷积网络、经验回放与目标网络，从像素学习Atari游戏。"
        },
        {
            "start": "2015",
            "title": "Neural style transfer",
            "description": "Gatys、Ecker与Bethge通过CNN特征统计分离内容与风格，实现基于优化的艺术风格迁移。"
        },
        {
            "start": "2015",
            "title": "Normalizing flows",
            "description": "可逆变换使灵活连续生成模型能够进行精确似然计算与采样。"
        },
        {
            "start": "2016",
            "title": "DenseNet",
            "description": "Huang等人将每层连接到所有后续层，改善特征复用和梯度传播。"
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMind提出用于原始音频生成的自回归空洞卷积，大幅改善神经语音合成。"
        },
        {
            "start": "2016",
            "title": "PixelRNN and PixelCNN",
            "description": "自回归图像模型按条件顺序生成像素，实现可计算似然的图像合成。"
        },
        {
            "start": "2016",
            "title": "Graph convolutional networks",
            "description": "Kipf与Welling将谱图卷积简化为高效邻域聚合规则。"
        },
        {
            "start": "2016",
            "title": "A3C",
            "description": "A3C无需经验回放即可异步并行训练多个智能体，稳定深度强化学习。"
        },
        {
            "start": "2016",
            "title": "Neural machine translation with subword units",
            "description": "适用于文本的字节对编码减少未登录词问题，成为神经语言模型标准。"
        },
        {
            "start": "2017",
            "title": "Transformer",
            "description": "Vaswani等人用多头自注意力取代循环，实现高度并行的序列建模。"
        },
        {
            "start": "2017",
            "title": "Proximal policy optimization",
            "description": "Schulman等人提出带截断代理目标的PPO，实现稳定、简洁且有效的策略梯度更新。"
        },
        {
            "start": "2017",
            "title": "GraphSAGE",
            "description": "Hamilton、Ying与Leskovec提出可泛化到未见节点的邻域聚合函数GraphSAGE。"
        },
        {
            "start": "2017",
            "title": "Graph attention networks",
            "description": "Veličković等人使用学习式注意力权重聚合图邻域，提出GAT。"
        },
        {
            "start": "2017",
            "title": "Wasserstein GAN",
            "description": "Arjovsky、Chintala与Bottou采用地球移动距离目标，提高GAN训练稳定性。"
        },
        {
            "start": "2017",
            "title": "Mask R-CNN",
            "description": "何恺明等人为目标检测增加并行像素级掩码分支，实现实例分割。"
        },
        {
            "start": "2017",
            "title": "Tacotron",
            "description": "端到端序列模型将文本直接映射到频谱图，简化神经语音合成流程。"
        },
        {
            "start": "2018",
            "title": "BERT masked-language pretraining",
            "description": "Devlin等人用掩码词与下一句预测预训练双向Transformer，改变自然语言处理迁移学习。"
        },
        {
            "start": "2018",
            "title": "GPT generative pretraining",
            "description": "OpenAI证明自回归Transformer预训练加任务微调可广泛迁移到语言任务。"
        },
        {
            "start": "2018",
            "title": "ELMo contextual embeddings",
            "description": "Peters等人从深层双向语言模型中得到上下文相关词表示ELMo。"
        },
        {
            "start": "2018",
            "title": "ULMFiT",
            "description": "Howard与Ruder提出判别式微调和逐步解冻，实现有效语言模型迁移。"
        },
        {
            "start": "2018",
            "title": "StyleGAN",
            "description": "Karras等人提出基于风格控制生成器层的方法，大幅提高图像质量与语义编辑能力。"
        },
        {
            "start": "2018",
            "title": "Lottery ticket hypothesis",
            "description": "Frankle与Carbin证明稠密网络中存在可从合适初始化训练到相近精度的稀疏子网络。"
        },
        {
            "start": "2018",
            "title": "Contrastive predictive coding",
            "description": "对比预测编码通过对比目标预测未来潜在状态以学习表示。"
        },
        {
            "start": "2019",
            "title": "Transformer-XL",
            "description": "片段循环与相对位置使Transformer上下文超越固定训练窗口。"
        },
        {
            "start": "2019",
            "title": "RoBERTa",
            "description": "改进的BERT训练配方证明，规模、数据与优化选择与架构创新同样重要。"
        },
        {
            "start": "2019",
            "title": "T5 text-to-text transfer",
            "description": "Google将所有自然语言处理任务统一为文本到文本生成，并系统研究大规模迁移。"
        },
        {
            "start": "2019",
            "title": "Sparse Transformer",
            "description": "结构化稀疏注意力降低二次计算成本，使更长序列成为可能。"
        },
        {
            "start": "2019",
            "title": "Multi-query attention",
            "description": "共享键和值头减少自回归解码的内存与带宽成本。"
        },
        {
            "start": "2019",
            "title": "Score-based generative modeling",
            "description": "Song与Ermon学习数据对数密度梯度，并用朗之万动力学生成样本。"
        },
        {
            "start": "2019",
            "title": "Adapters for parameter-efficient transfer",
            "description": "插入小型适配器模块，使大部分预训练参数保持冻结时仍可进行任务适配。"
        },
        {
            "start": "2019",
            "title": "wav2vec",
            "description": "从原始音频进行自监督学习，在有限标注下获得有用语音表示。"
        },
        {
            "start": "2020",
            "title": "GPT-3 in-context learning",
            "description": "扩大自回归语言模型规模后，模型在使用时无需梯度更新即可表现出强少样本与零样本能力。"
        },
        {
            "start": "2020",
            "title": "Scaling laws for neural language models",
            "description": "Kaplan等人量化模型规模、数据和计算量带来的可预测幂律改进。"
        },
        {
            "start": "2020",
            "title": "Vision Transformer",
            "description": "Dosovitskiy等人将纯Transformer应用于图像块，并在大规模训练下展现强视觉性能。"
        },
        {
            "start": "2020",
            "title": "DETR",
            "description": "Carion等人用Transformer和二分匹配将目标检测表述为直接集合预测。"
        },
        {
            "start": "2020",
            "title": "DDPM diffusion models",
            "description": "Ho、Jain与Abbeel训练去噪扩散概率模型，以稳定似然目标生成高质量图像。"
        },
        {
            "start": "2020",
            "title": "SimCLR",
            "description": "强图像增强与大批量对比学习产生强大的自监督视觉表示。"
        },
        {
            "start": "2020",
            "title": "MoCo",
            "description": "动量更新编码器与队列使对比学习能够使用大量一致负样本。"
        },
        {
            "start": "2020",
            "title": "BYOL",
            "description": "BYOL利用在线网络与目标网络，在无显式负样本情况下学习强视觉表示。"
        },
        {
            "start": "2020",
            "title": "Retrieval-augmented generation",
            "description": "Lewis等人将神经检索与序列生成结合，使模型在预测时能够查阅外部文档。"
        },
        {
            "start": "2020",
            "title": "REALM retrieval pretraining",
            "description": "Google联合训练检索与语言模型，使事实生成能够利用大型文本语料库。"
        },
        {
            "start": "2020",
            "title": "Neural ordinary differential equations mature",
            "description": "连续深度模型将神经网络与微分方程求解器、适应性计算联系起来。"
        },
        {
            "start": "2021",
            "title": "CLIP",
            "description": "OpenAI利用大规模自然语言监督训练图像与文本编码器，实现零样本视觉分类。"
        },
        {
            "start": "2021",
            "title": "DALL·E discrete image generation",
            "description": "Transformer联合建模文本与图像标记，展示灵活文本条件图像生成。"
        },
        {
            "start": "2021",
            "title": "LoRA",
            "description": "LoRA冻结基础模型权重，只训练低秩分解矩阵，大幅降低微调成本。"
        },
        {
            "start": "2021",
            "title": "Prefix tuning",
            "description": "可学习连续前缀向量以极少任务参数引导冻结语言模型。"
        },
        {
            "start": "2021",
            "title": "Prompt tuning",
            "description": "软提示嵌入证明足够大的语言模型只需学习少量输入前缀即可适配任务。"
        },
        {
            "start": "2021",
            "title": "Switch Transformer",
            "description": "稀疏专家混合路由使每个标记只激活少数专家，同时大幅扩展模型容量。"
        },
        {
            "start": "2021",
            "title": "Rotary positional embeddings",
            "description": "RoPE通过旋转查询与键向量编码相对位置，成为大语言模型常用方法。"
        },
        {
            "start": "2021",
            "title": "ALiBi",
            "description": "线性注意力偏置使Transformer无需学习位置嵌入即可外推到更长序列。"
        },
        {
            "start": "2021",
            "title": "Masked autoencoders",
            "description": "MAE训练视觉Transformer重建大比例掩码图像块，获得可扩展自监督特征。"
        },
        {
            "start": "2021",
            "title": "DINO self-distillation",
            "description": "无标签教师—学生自蒸馏产生语义组织良好的视觉特征与注意力图。"
        },
        {
            "start": "2021",
            "title": "HuBERT",
            "description": "通过预测聚类声学单元的掩码内容，HuBERT学习强自监督语音表示。"
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "将强化学习重构为以目标回报为条件的序列建模，连接控制与Transformer生成。"
        },
        {
            "start": "2022",
            "title": "Chinchilla compute-optimal scaling",
            "description": "DeepMind证明许多大语言模型训练不足，参数与数据均衡增长可提高计算效率。"
        },
        {
            "start": "2022",
            "title": "Chain-of-thought prompting",
            "description": "Wei等人证明中间推理示例可激发足够大语言模型的多步推理能力。"
        },
        {
            "start": "2022",
            "title": "Self-consistency decoding",
            "description": "采样多条推理路径并对答案投票，提高思维链可靠性。"
        },
        {
            "start": "2022",
            "title": "ReAct",
            "description": "将推理轨迹与外部行动、观察交错，形成工具使用智能体的持久范式。"
        },
        {
            "start": "2022",
            "title": "InstructGPT and RLHF pipeline",
            "description": "OpenAI结合监督示范、偏好建模与强化学习，使语言模型行为与用户意图对齐。"
        },
        {
            "start": "2022",
            "title": "Latent diffusion models",
            "description": "Rombach等人将扩散过程移入学习式潜空间，在保持高图像质量的同时显著减少计算。"
        },
        {
            "start": "2022",
            "title": "FlashAttention",
            "description": "Dao等人围绕GPU存储层次重构精确注意力，减少内存访问并加速长序列训练。"
        },
        {
            "start": "2022",
            "title": "Grouped-query attention",
            "description": "分组查询注意力在查询头组之间共享键值头，平衡质量与解码速度。"
        },
        {
            "start": "2022",
            "title": "Flow matching",
            "description": "通过向量场匹配训练连续归一化流，为快速生成传输提供灵活路径。"
        },
        {
            "start": "2022",
            "title": "Rectified flow",
            "description": "整流流将噪声到数据的传输轨迹拉直，实现高效少步生成。"
        },
        {
            "start": "2022",
            "title": "Constitutional AI",
            "description": "Anthropic利用书面原则与人工智能反馈训练有帮助行为，减少对直接人类标签的依赖。"
        },
        {
            "start": "2023",
            "title": "Direct preference optimization",
            "description": "DPO无需单独训练奖励模型或运行强化学习，直接优化偏好似然。"
        },
        {
            "start": "2023",
            "title": "QLoRA",
            "description": "四比特量化结合LoRA，使普通硬件能够高质量微调超大模型。"
        },
        {
            "start": "2023",
            "title": "GPTQ post-training quantization",
            "description": "考虑二阶信息的权重量化在有限精度损失下大幅压缩大语言模型。"
        },
        {
            "start": "2023",
            "title": "AWQ activation-aware quantization",
            "description": "激活统计识别需在低比特压缩中保护的重要权重，形成AWQ。"
        },
        {
            "start": "2023",
            "title": "Speculative decoding",
            "description": "小型草稿模型提出标记块，大模型并行验证，从而加速精确自回归采样。"
        },
        {
            "start": "2023",
            "title": "Toolformer",
            "description": "语言模型从自生成示例中学习何时以及如何调用外部工具。"
        },
        {
            "start": "2023",
            "title": "Segment Anything",
            "description": "Meta提出在超大掩码数据集上训练的可提示图像分割SAM，实现广泛零样本迁移。"
        },
        {
            "start": "2023",
            "title": "Diffusion Policy",
            "description": "将机器人动作作为去噪轨迹生成，得到富有表现力的多模态操作策略。"
        },
        {
            "start": "2023",
            "title": "Mixture-of-depths and conditional computation revival",
            "description": "动态标记路由开始不仅选择专家，也改变序列位置所接受的计算深度。"
        },
        {
            "start": "2024",
            "title": "Group relative policy optimization",
            "description": "GRPO从一组采样答案估计相对优势，减少推理强化学习对学习式价值模型的依赖。"
        },
        {
            "start": "2024",
            "title": "Preference optimization without reference models",
            "description": "新的偏好优化目标通过消除或减弱对固定参考策略的依赖，简化对齐训练。"
        },
        {
            "start": "2024",
            "title": "Long-context ring attention",
            "description": "分布式注意力将设备组成环形，使训练与推理上下文超过单个加速器内存。"
        },
        {
            "start": "2024",
            "title": "Test-time compute scaling",
            "description": "搜索、验证与更长内部推理证明，增加推理时计算可系统提升困难任务表现。"
        },
        {
            "start": "2025",
            "title": "Hybrid thinking modes",
            "description": "模型开始在同一部署家族中结合快速直接回答与可控扩展推理。"
        },
        {
            "start": "2025",
            "title": "Agentic reinforcement learning",
            "description": "端到端强化学习越来越多地用于训练模型完成多步工具调用、搜索与环境交互。"
        },
        {
            "start": "2026",
            "title": "Multi-agent orchestration at inference time",
            "description": "前沿系统越来越多地协调专业子智能体、验证器与共享工具处理长周期知识工作。"
        }
    ]
};

// 强化学习、规划与智能体
var tl_rl_agents = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1959",
            "title": "General Problem Solver",
            "description": "Newell、Simon与Shaw使用手段—目的分析缩小当前状态与目标之间的差异。"
        },
        {
            "start": "1960",
            "title": "Markov decision processes formalized for control",
            "description": "动态规划与随机控制逐渐统一为状态、动作、转移与奖励的形式。"
        },
        {
            "start": "1966",
            "title": "Shakey robot planning stack",
            "description": "SRI的Shakey在移动机器人中整合感知、世界模型、规划与行动。"
        },
        {
            "start": "1975",
            "title": "Actor–critic architecture",
            "description": "自适应评论家结构分离策略选择与价值评估，预示现代Actor–Critic强化学习。"
        },
        {
            "start": "1983",
            "title": "Formal actor–critic learning",
            "description": "Barto、Sutton与Anderson展示神经式自适应单元通过评论信号学习控制。"
        },
        {
            "start": "1989",
            "title": "Behavior cloning for autonomous driving",
            "description": "ALVINN从人类驾驶示例学习转向，是早期有影响力的模仿学习系统。"
        },
        {
            "start": "1992",
            "title": "TD-Gammon self-play",
            "description": "Gerald Tesauro利用时序差分学习和自我对弈达到高水平西洋双陆棋表现。"
        },
        {
            "start": "1994",
            "title": "Partially observable Markov decision processes",
            "description": "信念状态规划为智能体无法直接观察真实状态时的决策提供形式基础。"
        },
        {
            "start": "1997",
            "title": "Monte Carlo tree search precursors",
            "description": "基于采样的前瞻开始在高分支空间中取代穷举博弈树扩展。"
        },
        {
            "start": "1998",
            "title": "Dyna architecture",
            "description": "Sutton利用学习式模型生成模拟经验，以Dyna架构整合学习、规划与行动。"
        },
        {
            "start": "2006",
            "title": "Upper-confidence trees",
            "description": "UCT将多臂老虎机置信上界用于蒙特卡洛树搜索，使巨大博弈空间中的强规划成为可能。"
        },
        {
            "start": "2009",
            "title": "Inverse reinforcement learning matures",
            "description": "智能体从专家行为推断奖励函数，将模仿重构为恢复隐藏目标。"
        },
        {
            "start": "2011",
            "title": "DAgger",
            "description": "DAgger在学习者访问的状态上反复查询专家，减少模仿学习中的误差累积。"
        },
        {
            "start": "2012",
            "title": "Monte Carlo tree search in computer Go",
            "description": "结合学习或手工策略的MCTS在AlphaGo之前成为计算机围棋主流搜索框架。"
        },
        {
            "start": "2013",
            "title": "Deep Q-network breakthrough",
            "description": "单一深度强化学习算法直接从像素与奖励学习多款Atari游戏。"
        },
        {
            "start": "2015",
            "title": "Trust-region policy optimization",
            "description": "TRPO通过散度约束限制策略更新，提高大型神经策略训练稳定性。"
        },
        {
            "start": "2015",
            "title": "Deep deterministic policy gradient",
            "description": "DDPG结合Actor–Critic与确定性策略，用于连续控制。"
        },
        {
            "start": "2016",
            "title": "AlphaGo policy, value and tree search",
            "description": "DeepMind结合监督学习、强化学习、价值网络与MCTS，击败李世石。"
        },
        {
            "start": "2016",
            "title": "Asynchronous deep RL",
            "description": "并行行动者—学习者稳定策略学习，并减少对经验回放的依赖。"
        },
        {
            "start": "2017",
            "title": "AlphaZero",
            "description": "通过自我对弈、神经策略—价值预测与MCTS，在无需人类棋谱下学习国际象棋、将棋与围棋。"
        },
        {
            "start": "2017",
            "title": "Soft actor–critic",
            "description": "最大熵强化学习在优化奖励的同时鼓励多样探索行为。"
        },
        {
            "start": "2018",
            "title": "IMPALA",
            "description": "分布式行动者大规模生成经验，V-trace修正离策略偏差。"
        },
        {
            "start": "2018",
            "title": "OpenAI Five",
            "description": "大规模自我对弈与分布式强化学习在Dota 2中达到职业级团队协作。"
        },
        {
            "start": "2019",
            "title": "MuZero",
            "description": "MuZero学习足以用于规划的潜在动力学模型，无需重建环境观测。"
        },
        {
            "start": "2019",
            "title": "AlphaStar",
            "description": "DeepMind结合联赛式自我对弈、模仿与多智能体强化学习，在星际争霸II达到宗师级。"
        },
        {
            "start": "2020",
            "title": "Conservative Q-learning",
            "description": "CQL惩罚数据集不支持动作的价值高估，改善离线策略学习。"
        },
        {
            "start": "2020",
            "title": "Dreamer world models",
            "description": "智能体学习紧凑潜在动力学，并通过想象轨迹优化行为。"
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "将离线控制建模为状态、动作与回报的条件序列预测。"
        },
        {
            "start": "2021",
            "title": "Reward modeling from human preferences scales",
            "description": "偏好比较成为对齐大语言模型与智能体的核心监督信号。"
        },
        {
            "start": "2022",
            "title": "SayCan",
            "description": "将语言模型可供性分数与机器人技能价值结合，规划可执行家庭动作。"
        },
        {
            "start": "2022",
            "title": "RT-1",
            "description": "基于Transformer的机器人策略从大规模示范数据学习数百项真实操作任务。"
        },
        {
            "start": "2023",
            "title": "RT-2 vision-language-action model",
            "description": "将互联网规模视觉语言知识迁移到机器人动作标记，改善泛化。"
        },
        {
            "start": "2023",
            "title": "Tree of Thoughts",
            "description": "将语言模型推理组织为对多个候选思维状态的搜索，而非单一线性链。"
        },
        {
            "start": "2023",
            "title": "Reflexion",
            "description": "智能体使用语言反馈与情景记忆，在不改变模型权重下改进重复尝试。"
        },
        {
            "start": "2023",
            "title": "Voyager",
            "description": "大语言模型驱动的Minecraft智能体通过探索与代码生成自主建立可复用技能库。"
        },
        {
            "start": "2024",
            "title": "Computer-use agents",
            "description": "多模态模型开始通过截图、鼠标和键盘动作控制图形界面。"
        },
        {
            "start": "2024",
            "title": "Reasoning reinforcement learning with verifiable rewards",
            "description": "数学与编程任务提供可自动验证奖励，用于扩展长程推理行为。"
        },
        {
            "start": "2025",
            "title": "End-to-end deep-search agents",
            "description": "智能体端到端学习提出查询、浏览大量来源、综合证据并维持长程研究轨迹。"
        },
        {
            "start": "2025",
            "title": "Native tool-use reasoning models",
            "description": "前沿推理模型将浏览、代码执行、文件分析与视觉推理整合进同一思考循环。"
        },
        {
            "start": "2026",
            "title": "Long-horizon agent training",
            "description": "训练越来越面向具有持久状态与验证的数小时软件、研究和专业工作流。"
        }
    ]
};

// 重要研究者与建设者
var tl_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1721",
            "title": "Thomas Bayes（1701–1761）",
            "description": "发展逆概率思想，奠定贝叶斯推断基础。"
        },
        {
            "start": "1835",
            "title": "George Boole（1815–1864）",
            "description": "创立代数逻辑，为数字计算与符号推理奠基。"
        },
        {
            "start": "1914",
            "title": "Norbert Wiener（1894–1964）",
            "description": "创立控制论，连接反馈、控制、通信与学习。"
        },
        {
            "start": "1918",
            "title": "Warren McCulloch（1898–1969）",
            "description": "共同创建最早具有影响力的神经计算数学模型。"
        },
        {
            "start": "1921",
            "title": "Arthur Samuel（1901–1990）",
            "description": "开创自学习博弈程序与实用机器学习。"
        },
        {
            "start": "1923",
            "title": "John von Neumann（1903–1957）",
            "description": "深刻影响存储程序计算、博弈论与智能机器的数学架构。"
        },
        {
            "start": "1924",
            "title": "Donald Hebb（1904–1985）",
            "description": "提出突触学习原理，启发连接主义学习规则。"
        },
        {
            "start": "1930",
            "title": "Margaret Masterman（1910–1986）",
            "description": "推动计算语言学、语义网络与早期机器翻译。"
        },
        {
            "start": "1932",
            "title": "Alan Turing（1912–1954）",
            "description": "定义计算，提出机器智能测试，奠定人工智能概念基础。"
        },
        {
            "start": "1936",
            "title": "Claude Shannon（1916–2001）",
            "description": "创立信息论，并将逻辑与搜索思想用于机器和博弈。"
        },
        {
            "start": "1936",
            "title": "Herbert A. Simon（1916–2001）",
            "description": "共同创建符号问题求解，并发展有限理性理论。"
        },
        {
            "start": "1941",
            "title": "Lotfi A. Zadeh（1921–2017）",
            "description": "创立模糊集合理论与近似推理。"
        },
        {
            "start": "1943",
            "title": "Walter Pitts（1923–1969）",
            "description": "共同提出连接大脑与计算的逻辑神经元模型。"
        },
        {
            "start": "1947",
            "title": "John McCarthy（1927–2011）",
            "description": "提出“人工智能”名称，创建Lisp并塑造符号人工智能。"
        },
        {
            "start": "1947",
            "title": "Marvin Minsky（1927–2016）",
            "description": "共同创立MIT人工智能实验室，为符号与神经人工智能作出基础贡献。"
        },
        {
            "start": "1947",
            "title": "Allen Newell（1927–1992）",
            "description": "共同创建逻辑理论家与通用问题求解器，并推动认知科学形成。"
        },
        {
            "start": "1948",
            "title": "Frank Rosenblatt（1928–1971）",
            "description": "发明感知机与早期可训练神经学习规则。"
        },
        {
            "start": "1948",
            "title": "Leo Breiman（1928–2005）",
            "description": "发展CART、Bagging与随机森林，倡导预测算法建模。"
        },
        {
            "start": "1953",
            "title": "Nils J. Nilsson（1933–2019）",
            "description": "推动搜索、规划、机器人与智能体架构发展。"
        },
        {
            "start": "1955",
            "title": "Karen Spärck Jones（1935–2007）",
            "description": "开创信息检索、逆文档频率与自然语言处理。"
        },
        {
            "start": "1956",
            "title": "Edward Feigenbaum（1936–2021）",
            "description": "领导专家系统研究与知识工程运动。"
        },
        {
            "start": "1956",
            "title": "Judea Pearl（1936–）",
            "description": "创建现代贝叶斯网络并改变因果推断。"
        },
        {
            "start": "1956",
            "title": "Vladimir Vapnik（1936–）",
            "description": "共同发展统计学习理论、VC维与支持向量机。"
        },
        {
            "start": "1962",
            "title": "David Rumelhart（1942–2011）",
            "description": "推动反向传播与分布式表示在认知建模中普及。"
        },
        {
            "start": "1963",
            "title": "J. Ross Quinlan（1943–）",
            "description": "创建ID3、C4.5等有影响力的决策树学习方法。"
        },
        {
            "start": "1967",
            "title": "Geoffrey Hinton（1947–）",
            "description": "推动反向传播、分布式表示、玻尔兹曼机与深度学习复兴。"
        },
        {
            "start": "1968",
            "title": "Andrew Barto（1948–）",
            "description": "共同发展Actor–Critic与现代强化学习基础。"
        },
        {
            "start": "1968",
            "title": "Barbara Grosz（1948–）",
            "description": "开创话语建模、协作智能体与负责任人工智能机构建设。"
        },
        {
            "start": "1969",
            "title": "Leslie Valiant（1949–）",
            "description": "创立PAC学习理论，在计算学习与复杂性方面作出重要成果。"
        },
        {
            "start": "1971",
            "title": "Tom M. Mitchell（1951–）",
            "description": "推动归纳学习形式化，并以基础机器学习教材培养多代研究者。"
        },
        {
            "start": "1974",
            "title": "Rodney Brooks（1954–）",
            "description": "开创行为式机器人，并挑战纯符号智能路线。"
        },
        {
            "start": "1976",
            "title": "Michael I. Jordan（1956–）",
            "description": "塑造概率机器学习、变分推断与人工智能统计基础。"
        },
        {
            "start": "1976",
            "title": "Peter Norvig（1956–）",
            "description": "推动人工智能教育、概率自然语言处理与大规模智能系统。"
        },
        {
            "start": "1977",
            "title": "Richard S. Sutton（1957–）",
            "description": "发展时序差分学习，并统一现代强化学习理论。"
        },
        {
            "start": "1980",
            "title": "Yann LeCun（1960–）",
            "description": "开创卷积神经网络与现代表示学习。"
        },
        {
            "start": "1982",
            "title": "Stuart Russell（1962–）",
            "description": "推动理性智能体理论、概率人工智能与有益人工智能研究。"
        },
        {
            "start": "1982",
            "title": "Rosalind Picard（1962–）",
            "description": "创立情感计算，开拓机器识别人类情绪的研究。"
        },
        {
            "start": "1983",
            "title": "Jürgen Schmidhuber（1963–）",
            "description": "推动循环网络、LSTM时代研究、压缩与自我改进智能体。"
        },
        {
            "start": "1984",
            "title": "Yoshua Bengio（1964–）",
            "description": "开创神经语言模型、表示学习与深度学习。"
        },
        {
            "start": "1987",
            "title": "Sepp Hochreiter（1967–）",
            "description": "分析梯度消失并共同发明LSTM。"
        },
        {
            "start": "1987",
            "title": "Sebastian Thrun（1967–）",
            "description": "推动概率机器人、自动驾驶与大规模在线人工智能教育。"
        },
        {
            "start": "1987",
            "title": "Cynthia Breazeal（1967–）",
            "description": "开创社交机器人与人机交互。"
        },
        {
            "start": "1988",
            "title": "Daphne Koller（1968–）",
            "description": "推动概率图模型、计算生物学与在线教育。"
        },
        {
            "start": "1988",
            "title": "Jeff Dean（1968–）",
            "description": "在Google领导大规模机器学习系统、深度学习基础设施与模型项目。"
        },
        {
            "start": "1990",
            "title": "Regina Barzilay（1970–）",
            "description": "推动自然语言处理及面向医学与科学发现的机器学习。"
        },
        {
            "start": "1994",
            "title": "Kate Crawford（1974–）",
            "description": "分析人工智能背后的社会、政治、劳动与环境系统。"
        },
        {
            "start": "1996",
            "title": "Fei-Fei Li（1976–）",
            "description": "创建ImageNet，推动计算机视觉、具身智能与以人为中心的人工智能。"
        },
        {
            "start": "1996",
            "title": "Andrew Ng（1976–）",
            "description": "推动深度学习、大规模人工智能教育与工业机器学习实践。"
        },
        {
            "start": "1996",
            "title": "Demis Hassabis（1976–）",
            "description": "共同创立DeepMind，并领导AlphaGo、AlphaFold等突破。"
        },
        {
            "start": "1996",
            "title": "David Silver（1976–）",
            "description": "领导从AlphaGo到AlphaZero、MuZero的重要强化学习突破。"
        },
        {
            "start": "1996",
            "title": "Cynthia Rudin（1976–）",
            "description": "推动可解释机器学习，并倡导高风险决策使用透明模型。"
        },
        {
            "start": "1997",
            "title": "Pieter Abbeel（1977–）",
            "description": "推动机器人学习、模仿学习与深度强化学习。"
        },
        {
            "start": "2001",
            "title": "Alex Graves（1981–）",
            "description": "发展CTC及面向语音与序列学习的重要循环网络方法。"
        },
        {
            "start": "2002",
            "title": "Anima Anandkumar（1982–）",
            "description": "推动张量方法、深度学习、科学人工智能与可扩展机器学习系统。"
        },
        {
            "start": "2003",
            "title": "Timnit Gebru（1983–）",
            "description": "推动计算机视觉及数据集偏差、模型文档与人工智能问责研究。"
        },
        {
            "start": "2003",
            "title": "Dario Amodei（1983–）",
            "description": "领导前沿语言模型开发，并共同创立强调安全与对齐的Anthropic。"
        },
        {
            "start": "2004",
            "title": "Kaiming He（1984–）",
            "description": "创建残差网络，并推动视觉表示学习与检测重大进步。"
        },
        {
            "start": "2005",
            "title": "Ian Goodfellow（1985–）",
            "description": "发明生成对抗网络，并推动深度学习安全与表示学习。"
        },
        {
            "start": "2005",
            "title": "Sam Altman（1985–）",
            "description": "在ChatGPT及后续前沿模型大规模部署时期领导OpenAI。"
        },
        {
            "start": "2006",
            "title": "Ilya Sutskever（1986–）",
            "description": "共同创建AlexNet、序列到序列学习，并推动重要大语言模型项目。"
        },
        {
            "start": "2006",
            "title": "Alex Krizhevsky（1986–）",
            "description": "构建AlexNet，展示GPU训练卷积视觉模型的决定性表现。"
        },
        {
            "start": "2006",
            "title": "Andrej Karpathy（1986–）",
            "description": "推动卷积视觉、神经语言建模、自动驾驶人工智能与实践教育。"
        },
        {
            "start": "2007",
            "title": "Sergey Levine（1987–）",
            "description": "推动深度强化学习、机器人学习与通用控制策略。"
        },
        {
            "start": "2009",
            "title": "Joy Buolamwini（1989–）",
            "description": "揭示商业人脸分析的人口偏差，并创建算法正义倡议。"
        },
        {
            "start": "2012",
            "title": "Chelsea Finn（1992–）",
            "description": "推动元学习、机器人学习及智能体少量经验适应方法。"
        }
    ]
};

// 数据集、基准与评测
var tl_data_eval = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1960",
            "title": "Early machine-translation corpora",
            "description": "平行语料开始支持机器翻译的实证评测，不再局限于精选演示。"
        },
        {
            "start": "1987",
            "title": "Penn Treebank project begins",
            "description": "大规模句法标注语料使监督解析与可比较自然语言处理评测成为可能。"
        },
        {
            "start": "1993",
            "title": "MNIST predecessors and digit benchmarks",
            "description": "标准化手写数字数据集使模式识别算法能够进行可复现比较。"
        },
        {
            "start": "1998",
            "title": "MNIST",
            "description": "LeCun等人发布广泛使用的手写数字基准MNIST，成为神经网络入门数据集。"
        },
        {
            "start": "1998",
            "title": "TREC evaluation campaigns mature",
            "description": "共享信息检索任务大规模建立测试集、相关性判断与通用指标。"
        },
        {
            "start": "2001",
            "title": "Reuters-21578 becomes a standard text-classification corpus",
            "description": "新闻类别语料支持统计文本分类的可复现评测。"
        },
        {
            "start": "2004",
            "title": "Pascal VOC challenge",
            "description": "共享目标识别数据集与年度竞赛标准化视觉检测和分割评测。"
        },
        {
            "start": "2005",
            "title": "DARPA Grand Challenge benchmarks autonomous driving",
            "description": "沙漠道路竞赛为感知、规划与机器人控制提供真实系统基准。"
        },
        {
            "start": "2006",
            "title": "Netflix Prize dataset and competition",
            "description": "大型推荐竞赛推动协同过滤、矩阵分解与集成方法发展。"
        },
        {
            "start": "2007",
            "title": "CIFAR-10 and CIFAR-100",
            "description": "小型标注自然图像数据集成为快速测试视觉表示方法的标准。"
        },
        {
            "start": "2007",
            "title": "Labeled Faces in the Wild",
            "description": "非受控人脸照片使评测从实验室环境转向真实世界变化。"
        },
        {
            "start": "2009",
            "title": "ImageNet",
            "description": "大型分层标注图像数据库提供改变视觉识别的数据规模。"
        },
        {
            "start": "2010",
            "title": "ImageNet Large Scale Visual Recognition Challenge",
            "description": "年度挑战使大规模分类、定位与检测能够直接比较。"
        },
        {
            "start": "2011",
            "title": "KITTI vision benchmark",
            "description": "真实驾驶数据标准化立体视觉、光流、检测与自动驾驶感知评测。"
        },
        {
            "start": "2011",
            "title": "Stanford Sentiment Treebank",
            "description": "短语级情感标签支持组合式语言理解研究。"
        },
        {
            "start": "2012",
            "title": "AlexNet wins ILSVRC",
            "description": "相对传统视觉方法的巨大优势，使ImageNet成为深度学习标志性基准。"
        },
        {
            "start": "2014",
            "title": "MS COCO",
            "description": "密集目标标注与自然描述支持检测、分割和图文研究。"
        },
        {
            "start": "2014",
            "title": "SQuAD-style reading-comprehension datasets emerge",
            "description": "基于文章的问答将语言理解转化为大型监督基准问题。"
        },
        {
            "start": "2015",
            "title": "Atari Learning Environment",
            "description": "统一接口与游戏套件标准化从像素进行的深度强化学习评测。"
        },
        {
            "start": "2015",
            "title": "Cityscapes",
            "description": "高质量街景标注推动自动驾驶语义分割。"
        },
        {
            "start": "2015",
            "title": "LibriSpeech",
            "description": "约一千小时英语朗读语音成为自动语音识别核心开放基准。"
        },
        {
            "start": "2016",
            "title": "OpenAI Gym",
            "description": "统一环境API降低强化学习算法比较门槛。"
        },
        {
            "start": "2016",
            "title": "VQA benchmark",
            "description": "视觉问答要求系统结合图像理解与自然语言推理。"
        },
        {
            "start": "2016",
            "title": "bAbI and synthetic reasoning tasks",
            "description": "受控任务分离评测记忆、推断与组合推理能力。"
        },
        {
            "start": "2017",
            "title": "GLUE benchmark",
            "description": "一组语言理解任务推动通用可迁移表示，而非单任务系统。"
        },
        {
            "start": "2017",
            "title": "AI2 Reasoning Challenge",
            "description": "中小学科学问题测试检索、语言理解与多步推理。"
        },
        {
            "start": "2018",
            "title": "SuperGLUE",
            "description": "GLUE快速饱和后，更难的SuperGLUE强调推理、指代与阅读理解。"
        },
        {
            "start": "2018",
            "title": "MLPerf",
            "description": "产业联盟标准化跨硬件与机器学习负载的训练和推理测量。"
        },
        {
            "start": "2018",
            "title": "WMT benchmark reaches neural era maturity",
            "description": "共享翻译任务追踪Transformer在多语言对上的快速提升。"
        },
        {
            "start": "2019",
            "title": "Natural Questions",
            "description": "真实Google搜索问题配合Wikipedia证据，使开放域问答更贴近现实。"
        },
        {
            "start": "2019",
            "title": "BIG-bench project begins",
            "description": "协作基准收集多样任务，用于揭示语言模型涌现与意外能力。"
        },
        {
            "start": "2020",
            "title": "MMLU",
            "description": "MMLU跨众多学科评测广泛学术与专业知识。"
        },
        {
            "start": "2020",
            "title": "HumanEval",
            "description": "带单元测试的手写编程题成为代码生成模型常用基准。"
        },
        {
            "start": "2020",
            "title": "TruthfulQA",
            "description": "围绕常见误解设计的问题衡量语言模型是否复制错误信念。"
        },
        {
            "start": "2021",
            "title": "HELM",
            "description": "斯坦福提出涵盖准确性、校准、鲁棒性、公平性与效率的整体语言模型评测。"
        },
        {
            "start": "2021",
            "title": "BIG-bench released",
            "description": "两百余项任务扩展标准学术基准之外的评测，并揭示规模化行为。"
        },
        {
            "start": "2021",
            "title": "WILDS",
            "description": "真实世界分布偏移成为评测非独立同分布鲁棒性的共享基准。"
        },
        {
            "start": "2022",
            "title": "SWE-bench concept emerges",
            "description": "仓库级软件问题将代码评测重构为真实多文件工程任务。"
        },
        {
            "start": "2022",
            "title": "MT-Bench and chat-model evaluation",
            "description": "多轮对话提示与模型评审成为比较指令助手的常用方法。"
        },
        {
            "start": "2022",
            "title": "LAION-5B",
            "description": "数十亿图文对成为训练开放多模态与扩散模型的公共规模数据集。"
        },
        {
            "start": "2023",
            "title": "Chatbot Arena",
            "description": "匿名成对人类偏好投票形成快速更新的公开对话模型比较。"
        },
        {
            "start": "2023",
            "title": "SWE-bench",
            "description": "真实GitHub问题与仓库测试衡量语言模型解决实际软件工程任务的能力。"
        },
        {
            "start": "2023",
            "title": "MMMU",
            "description": "多学科多模态基准测试模型对图表、照片与文本的专家级推理。"
        },
        {
            "start": "2023",
            "title": "AgentBench",
            "description": "多个交互环境评测规划、工具使用与长周期智能体行为。"
        },
        {
            "start": "2023",
            "title": "MATH and GSM-style reasoning benchmarks become central",
            "description": "可验证数学答案成为评测与训练推理模型的关键信号。"
        },
        {
            "start": "2024",
            "title": "GPQA Diamond",
            "description": "专家编写研究生级科学问题，针对无法靠简单网络检索解决的推理。"
        },
        {
            "start": "2024",
            "title": "SWE-bench Verified",
            "description": "经人工验证的子集提高仓库级代码评测可靠性。"
        },
        {
            "start": "2024",
            "title": "Humanity’s Last Exam project",
            "description": "广泛专家编写的基准面向超越饱和测试的前沿知识与推理。"
        },
        {
            "start": "2024",
            "title": "FrontierMath",
            "description": "具有可验证答案的研究级数学问题测试模型推理极限。"
        },
        {
            "start": "2024",
            "title": "OSWorld",
            "description": "跨操作系统应用的真实计算机任务评测多模态计算机使用智能体。"
        },
        {
            "start": "2024",
            "title": "LiveBench",
            "description": "频繁更新的问题试图减少基准污染并追踪当前模型能力。"
        },
        {
            "start": "2025",
            "title": "Terminal-Bench",
            "description": "命令行环境测试智能体执行多步软件与系统管理工作。"
        },
        {
            "start": "2025",
            "title": "GDPval",
            "description": "覆盖多种职业的专业工作成果成为经济相关智能体能力基准。"
        },
        {
            "start": "2025",
            "title": "MCP and tool-use benchmarks expand",
            "description": "评测越来越关注可靠函数调用、多工具协调与有状态工作流。"
        },
        {
            "start": "2026",
            "title": "Long-horizon professional-agent evaluations",
            "description": "基准越来越评估完整研究、编程、文档与运营工作流，而非孤立答案。"
        }
    ]
};

// 硬件、软件与研究基础设施
var tl_infrastructure = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1946",
            "title": "ENIAC demonstrated",
            "description": "通用电子计算使大型数值程序成为现实，并加速对机器智能的兴趣。"
        },
        {
            "start": "1948",
            "title": "Manchester Baby runs stored program",
            "description": "电子存储程序成功运行，确立后来人工智能软件使用的架构。"
        },
        {
            "start": "1956",
            "title": "Dartmouth workshop",
            "description": "夏季研究项目汇集主要研究者，使“人工智能”成为正式学术领域。"
        },
        {
            "start": "1958",
            "title": "Lisp",
            "description": "John McCarthy创建以符号列表、递归与交互开发为核心的人工智能语言Lisp。"
        },
        {
            "start": "1963",
            "title": "MIT Project MAC",
            "description": "分时与交互计算为人工智能实验室和黑客文化提供制度基础。"
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "联网计算后来支持分布式数据集、远程协作与云规模人工智能服务。"
        },
        {
            "start": "1973",
            "title": "Prolog implementation spreads",
            "description": "逻辑编程基础设施支持定理证明、自然语言研究与专家系统。"
        },
        {
            "start": "1979",
            "title": "Lisp machines commercialized",
            "description": "专用工作站提供面向专家系统开发优化的交互式符号计算。"
        },
        {
            "start": "1982",
            "title": "Japan launches Fifth Generation Computer Systems project",
            "description": "日本国家项目大规模投资逻辑编程、并行计算与知识处理。"
        },
        {
            "start": "1986",
            "title": "Connection Machine",
            "description": "大规模并行硬件探索适用于神经与符号负载的数据并行方法。"
        },
        {
            "start": "1987",
            "title": "Neural Information Processing Systems conference begins",
            "description": "NeurIPS成为神经计算、统计、优化与机器学习的长期交流平台。"
        },
        {
            "start": "1989",
            "title": "World Wide Web proposed",
            "description": "万维网后来为机器学习与模型部署提供前所未有的文本、图像和交互数据。"
        },
        {
            "start": "1991",
            "title": "Python released",
            "description": "易读通用语言后来成为科学计算与机器学习主导接口。"
        },
        {
            "start": "1995",
            "title": "Java and web-scale software era",
            "description": "可移植网络应用扩展智能服务可部署环境。"
        },
        {
            "start": "1997",
            "title": "CUDA-era GPU precursors",
            "description": "可编程图形流水线开始提供超越渲染用途的大规模并行运算。"
        },
        {
            "start": "2002",
            "title": "Torch scientific machine-learning framework",
            "description": "Torch提供张量运算与神经网络模块，影响后续深度学习框架。"
        },
        {
            "start": "2004",
            "title": "MapReduce",
            "description": "Google分布式数据处理抽象使网络规模数据集上的学习流水线成为可能。"
        },
        {
            "start": "2006",
            "title": "Amazon EC2 launches",
            "description": "按需云计算降低扩展数据处理与模型训练的门槛。"
        },
        {
            "start": "2006",
            "title": "NVIDIA CUDA",
            "description": "通用GPU编程平台使机器学习研究者可使用高度并行加速器。"
        },
        {
            "start": "2007",
            "title": "scikit-learn project begins",
            "description": "统一开源Python API使经典机器学习算法广泛可用。"
        },
        {
            "start": "2008",
            "title": "Hadoop ecosystem expands",
            "description": "通用集群支持大规模数据分析的分布式存储与计算。"
        },
        {
            "start": "2009",
            "title": "ImageNet data infrastructure scales",
            "description": "众包与分层标注展示如何构建互联网规模数据集。"
        },
        {
            "start": "2010",
            "title": "GPU deep-learning software stack matures",
            "description": "CUDA内核、优化卷积与研究代码使大型神经训练日益实用。"
        },
        {
            "start": "2011",
            "title": "Apache Spark",
            "description": "内存分布式计算加速迭代分析与机器学习流水线。"
        },
        {
            "start": "2012",
            "title": "Google Brain DistBelief",
            "description": "跨多机器分布式神经网络训练证明深度学习规模化可行。"
        },
        {
            "start": "2013",
            "title": "Caffe",
            "description": "快速模块化卷积框架推动可复现计算机视觉研究与部署标准化。"
        },
        {
            "start": "2014",
            "title": "Kubernetes",
            "description": "容器编排后来成为运行分布式机器学习服务与加速器的核心。"
        },
        {
            "start": "2015",
            "title": "TensorFlow released",
            "description": "Google开源用于跨设备可扩展训练、推理与部署的数据流框架。"
        },
        {
            "start": "2015",
            "title": "cuDNN adoption accelerates",
            "description": "面向卷积与循环网络的优化GPU原语标准化高性能深度学习内核。"
        },
        {
            "start": "2016",
            "title": "PyTorch released",
            "description": "动态图与Python优先设计使实验和研究实现更加自然。"
        },
        {
            "start": "2016",
            "title": "Google TPU announced",
            "description": "定制张量加速器标志专为神经网络负载设计硬件的兴起。"
        },
        {
            "start": "2016",
            "title": "OpenAI Universe",
            "description": "平台通过统一接口开放多种软件环境，用于通用智能体训练。"
        },
        {
            "start": "2017",
            "title": "Transformer training on TPU pods",
            "description": "大型加速器集群展示注意力序列模型的快速并行训练。"
        },
        {
            "start": "2017",
            "title": "ONNX",
            "description": "开放模型交换格式提高训练框架与推理运行时之间的可移植性。"
        },
        {
            "start": "2018",
            "title": "NVIDIA Tensor Cores spread",
            "description": "混合精度矩阵硬件显著提高神经网络吞吐量。"
        },
        {
            "start": "2018",
            "title": "Hugging Face Transformers project begins",
            "description": "共享开源库使预训练Transformer易于分发、微调与复现。"
        },
        {
            "start": "2019",
            "title": "JAX",
            "description": "可组合自动微分、向量化与编译支持高性能数值和机器学习研究。"
        },
        {
            "start": "2019",
            "title": "ML accelerators diversify",
            "description": "云TPU、GPU、FPGA与专用推理芯片形成异构人工智能计算生态。"
        },
        {
            "start": "2020",
            "title": "A100 GPU",
            "description": "NVIDIA Ampere加速器提高混合精度训练能力，支持更大基础模型。"
        },
        {
            "start": "2020",
            "title": "DeepSpeed",
            "description": "Microsoft发布用于超大模型内存高效分布式训练的优化技术。"
        },
        {
            "start": "2020",
            "title": "Megatron-LM and tensor parallelism spread",
            "description": "模型并行训练将巨大Transformer层拆分到多个加速器。"
        },
        {
            "start": "2021",
            "title": "MLOps platforms mature",
            "description": "数据、实验、模型、监控与部署版本化形成正式生产工程体系。"
        },
        {
            "start": "2021",
            "title": "GitHub Copilot technical preview",
            "description": "云端代码生成成为集成开发者工具，而非独立研究演示。"
        },
        {
            "start": "2022",
            "title": "H100 GPU",
            "description": "Transformer Engine与第四代Tensor Core专门面向大语言模型训练与推理。"
        },
        {
            "start": "2022",
            "title": "vLLM project",
            "description": "PagedAttention改善键值缓存内存管理，提高语言模型服务吞吐量。"
        },
        {
            "start": "2022",
            "title": "Diffusion-model consumer GPU ecosystem",
            "description": "开放权重、优化内核与社区界面使高质量图像生成可在个人硬件运行。"
        },
        {
            "start": "2023",
            "title": "NVIDIA H200 announced",
            "description": "更高带宽内存针对基础模型训练与推理日益严重的内存瓶颈。"
        },
        {
            "start": "2023",
            "title": "Model Context Protocol concept emerges",
            "description": "模型、工具与数据源之间的标准连接开始简化智能体集成。"
        },
        {
            "start": "2023",
            "title": "Consumer local-LLM runtimes expand",
            "description": "量化与llama.cpp等优化运行时使笔记本和边缘设备可运行实用语言模型。"
        },
        {
            "start": "2024",
            "title": "Blackwell GPU architecture announced",
            "description": "NVIDIA围绕万亿参数训练与高吞吐推理设计新一代加速器。"
        },
        {
            "start": "2024",
            "title": "Inference optimization becomes a primary research frontier",
            "description": "键值缓存压缩、连续批处理、量化与推测解码成为模型经济性核心。"
        },
        {
            "start": "2024",
            "title": "Large AI superclusters proliferate",
            "description": "前沿实验室为预训练与强化学习负载建设数万加速器规模集群。"
        },
        {
            "start": "2025",
            "title": "Agent runtime and sandbox infrastructure expands",
            "description": "安全浏览器、代码沙箱、文件系统与工具注册表成为人工智能智能体产品标准组件。"
        },
        {
            "start": "2025",
            "title": "Inference-time compute infrastructure scales",
            "description": "服务系统开始为每个请求分配可变推理预算、并行展开与验证计算。"
        },
        {
            "start": "2026",
            "title": "Agentic compute stacks mature",
            "description": "长时间状态、子智能体编排、来源追踪、检查点与权限工具成为一等基础设施。"
        }
    ]
};

// 里程碑系统、模型与产品发布
var tl_models = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "Logic Theorist",
            "description": "Newell、Simon与Shaw构建可证明数学定理的程序，成为符号人工智能奠基性演示。"
        },
        {
            "start": "1958",
            "title": "Mark I Perceptron",
            "description": "Rosenblatt的硬件感知机从样本学习视觉分类，引发广泛关注。"
        },
        {
            "start": "1959",
            "title": "Samuel checkers program",
            "description": "自我改进的西洋跳棋系统展示搜索、评估与经验学习。"
        },
        {
            "start": "1965",
            "title": "DENDRAL",
            "description": "斯坦福系统根据质谱数据推断分子结构，推动专家系统形成。"
        },
        {
            "start": "1966",
            "title": "ELIZA",
            "description": "Joseph Weizenbaum的对话程序用模式匹配模拟心理治疗师，揭示人类拟人化机器的倾向。"
        },
        {
            "start": "1966",
            "title": "Shakey the Robot",
            "description": "SRI移动机器人在统一系统中整合感知、地图、规划与行动。"
        },
        {
            "start": "1970",
            "title": "SHRDLU",
            "description": "Terry Winograd的程序结合解析、推理与规划，在简化积木世界中对话和操作。"
        },
        {
            "start": "1972",
            "title": "MYCIN",
            "description": "基于规则的医疗专家系统推荐抗生素治疗，成为知识工程里程碑。"
        },
        {
            "start": "1980",
            "title": "XCON",
            "description": "DEC部署计算机订单配置专家系统，展示显著商业价值。"
        },
        {
            "start": "1986",
            "title": "NETtalk",
            "description": "Sejnowski与Rosenberg训练神经网络将英语文本转换为音素，展示分布式表示学习。"
        },
        {
            "start": "1989",
            "title": "ALVINN",
            "description": "神经网络从摄像头图像与人类驾驶示例学习车辆转向。"
        },
        {
            "start": "1992",
            "title": "TD-Gammon",
            "description": "Tesauro的自我对弈神经智能体利用时序差分学习达到专家级西洋双陆棋水平。"
        },
        {
            "start": "1997-05-11",
            "title": "Deep Blue defeats Garry Kasparov",
            "description": "IBM专用国际象棋系统在正式比赛中击败当时世界冠军，成为机器智能重大公众里程碑。"
        },
        {
            "start": "1998",
            "title": "Kismet",
            "description": "MIT富有表情的机器人探索社会线索、情感互动与发展式人机沟通。"
        },
        {
            "start": "1999",
            "title": "Sony AIBO",
            "description": "商业机器人宠物将自主行为与交互机器人带给消费者。"
        },
        {
            "start": "2005",
            "title": "Stanley wins DARPA Grand Challenge",
            "description": "斯坦福自动驾驶车辆完成沙漠赛道，展示真实世界中的鲁棒感知与规划。"
        },
        {
            "start": "2009",
            "title": "Google self-driving car project begins",
            "description": "大型工业自动驾驶项目在道路规模整合地图、感知、预测与控制。"
        },
        {
            "start": "2011-02-16",
            "title": "IBM Watson wins Jeopardy!",
            "description": "Watson结合信息检索、问答、统计评分与大规模并行，击败顶尖人类冠军。"
        },
        {
            "start": "2011-10-04",
            "title": "Siri launches on iPhone 4S",
            "description": "语音助手将语音识别与自然语言服务带入日常消费者交互。"
        },
        {
            "start": "2012",
            "title": "AlexNet",
            "description": "赢得ImageNet的卷积网络引发GPU训练深度学习广泛采用。"
        },
        {
            "start": "2013",
            "title": "word2vec released",
            "description": "高效词嵌入模型使语义向量表示在自然语言处理系统中广泛可用。"
        },
        {
            "start": "2013",
            "title": "DeepMind Atari DQN",
            "description": "单一深度Q网络从原始像素学习多款游戏，连接深度感知与强化学习。"
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence neural translation",
            "description": "编码器—解码器LSTM展示无需短语表的端到端神经翻译。"
        },
        {
            "start": "2014",
            "title": "Generative adversarial network prototype",
            "description": "首批GAN实验表明生成器—判别器对抗训练可产生逼真样本。"
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "Facebook深度人脸识别系统在非受控照片验证上接近人类水平。"
        },
        {
            "start": "2015",
            "title": "Microsoft ResNet",
            "description": "残差学习使超过百层网络成为可能，并赢得主要ImageNet任务。"
        },
        {
            "start": "2015",
            "title": "Deep Speech 2",
            "description": "百度端到端语音识别系统表明深度网络可取代许多手工流水线组件。"
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMind原始音频生成模型显著提升语音合成自然度。"
        },
        {
            "start": "2016-01-27",
            "title": "AlphaGo defeats European champion Fan Hui",
            "description": "《自然》报道首个在十九路棋盘无让子条件下击败职业棋手的围棋程序。"
        },
        {
            "start": "2016-03-15",
            "title": "AlphaGo defeats Lee Sedol",
            "description": "五局比赛向全球展示神经策略与价值网络结合树搜索的能力。"
        },
        {
            "start": "2017-06-12",
            "title": "Transformer architecture published",
            "description": "《Attention Is All You Need》提出并行自注意力架构，成为现代基础模型基础。"
        },
        {
            "start": "2017-12-05",
            "title": "AlphaZero preprint",
            "description": "单一自我对弈系统仅依据规则掌握国际象棋、将棋与围棋。"
        },
        {
            "start": "2018-06-11",
            "title": "GPT released",
            "description": "OpenAI展示生成式Transformer预训练向监督语言任务的广泛迁移。"
        },
        {
            "start": "2018-10-11",
            "title": "BERT released",
            "description": "Google双向掩码语言模型迅速成为自然语言处理微调主流基础。"
        },
        {
            "start": "2019",
            "title": "StyleGAN",
            "description": "基于风格的生成器产生高度逼真人脸与可控潜空间编辑。"
        },
        {
            "start": "2019-01-24",
            "title": "AlphaStar announced",
            "description": "DeepMind多智能体强化学习系统在星际争霸II达到宗师级。"
        },
        {
            "start": "2019-02-14",
            "title": "GPT-2 announced",
            "description": "15亿参数语言模型生成连贯长文本，并引发分阶段发布安全讨论。"
        },
        {
            "start": "2020",
            "title": "DDPM image generation",
            "description": "去噪扩散模型达到可与主流生成方法竞争的图像质量。"
        },
        {
            "start": "2020-05-28",
            "title": "GPT-3 paper released",
            "description": "1750亿参数自回归模型在多任务上展现强上下文少样本学习。"
        },
        {
            "start": "2020-11-30",
            "title": "AlphaFold2 CASP14 breakthrough announced",
            "description": "DeepMind系统在蛋白质结构预测准确率上实现重大飞跃。"
        },
        {
            "start": "2021-01-05",
            "title": "DALL·E and CLIP announced",
            "description": "OpenAI同时发布文本条件图像生成与大规模图文表示学习。"
        },
        {
            "start": "2021-05-18",
            "title": "LaMDA announced",
            "description": "Google发布面向开放式对话的语言模型LaMDA。"
        },
        {
            "start": "2021-06-29",
            "title": "GitHub Copilot technical preview",
            "description": "OpenAI Codex驱动的代码建议进入主流集成开发环境。"
        },
        {
            "start": "2021-08-10",
            "title": "OpenAI Codex API announced",
            "description": "GPT衍生模型将自然语言指令转换为多种编程语言的可执行代码。"
        },
        {
            "start": "2022-03-29",
            "title": "Chinchilla announced",
            "description": "DeepMind计算最优模型证明，更多训练数据可胜过更大但训练不足的模型。"
        },
        {
            "start": "2022-04-04",
            "title": "PaLM announced",
            "description": "Google利用Pathways将稠密语言模型扩展到5400亿参数，展示强少样本推理。"
        },
        {
            "start": "2022-04-06",
            "title": "DALL·E 2 announced",
            "description": "基于扩散的图像生成改善逼真度、构图与自然语言编辑。"
        },
        {
            "start": "2022-08-22",
            "title": "Stable Diffusion public release",
            "description": "开放潜扩散模型催生全球本地图像生成与微调生态。"
        },
        {
            "start": "2022-09-21",
            "title": "Whisper released",
            "description": "OpenAI发布大规模弱监督语音模型，实现鲁棒多语言转录与翻译。"
        },
        {
            "start": "2022-11-15",
            "title": "Galactica announced",
            "description": "Meta发布科学知识语言模型，随后因可靠性担忧撤下公开演示。"
        },
        {
            "start": "2022-11-30",
            "title": "ChatGPT launches",
            "description": "指令微调语言模型的对话界面引发生成式人工智能大规模公众采用。"
        },
        {
            "start": "2023-02-24",
            "title": "LLaMA announced",
            "description": "Meta向研究者发布高效基础模型权重，加速开放权重大语言模型生态。"
        },
        {
            "start": "2023-03-13",
            "title": "Stanford Alpaca announced",
            "description": "低成本指令微调LLaMA衍生模型展示开放模型利用合成数据快速适配的潜力。"
        },
        {
            "start": "2023-03-14",
            "title": "GPT-4 released",
            "description": "OpenAI发布能力更强的多模态大型模型，在推理与专业基准上显著提升。"
        },
        {
            "start": "2023-03-14",
            "title": "Claude released",
            "description": "Anthropic推出强调有帮助与安全的对话助手及Claude模型家族。"
        },
        {
            "start": "2023-04-05",
            "title": "Segment Anything Model released",
            "description": "Meta发布可提示分割模型与SA-1B掩码数据集。"
        },
        {
            "start": "2023-05-10",
            "title": "PaLM 2 announced",
            "description": "Google发布更高效多语言模型家族，为Bard与企业人工智能服务提供支持。"
        },
        {
            "start": "2023-05-25",
            "title": "Falcon 40B released",
            "description": "技术创新研究院发布在大型精选网页语料上训练的有影响力开放许可语言模型。"
        },
        {
            "start": "2023-07-18",
            "title": "Llama 2 released",
            "description": "Meta与Microsoft扩大预训练及聊天微调开放权重模型的商业使用。"
        },
        {
            "start": "2023-08-03",
            "title": "Qwen-7B released",
            "description": "阿里巴巴Qwen家族以多语言与编程能力进入开放权重生态。"
        },
        {
            "start": "2023-08-24",
            "title": "Code Llama released",
            "description": "Meta发布面向代码生成、补全与指令遵循的Code Llama模型。"
        },
        {
            "start": "2023-09-20",
            "title": "DALL·E 3 announced",
            "description": "更强提示理解与ChatGPT集成使文本生成图像更易通过对话控制。"
        },
        {
            "start": "2023-09-27",
            "title": "Mistral 7B released",
            "description": "Mistral AI发布采用分组查询与滑动窗口注意力的紧凑Apache许可模型。"
        },
        {
            "start": "2023-11-04",
            "title": "Grok announced",
            "description": "xAI发布连接X实时信息的对话模型Grok。"
        },
        {
            "start": "2023-12-06",
            "title": "Gemini 1.0 announced",
            "description": "Google发布覆盖Ultra、Pro与Nano规模的原生多模态模型家族。"
        },
        {
            "start": "2023-12-11",
            "title": "Mixtral 8x7B released",
            "description": "Mistral AI稀疏专家混合模型每个标记只激活部分参数，却提供强能力。"
        },
        {
            "start": "2024-02-15",
            "title": "Gemini 1.5 announced",
            "description": "Google发布预览版百万标记上下文专家混合模型。"
        },
        {
            "start": "2024-02-15",
            "title": "Sora previewed",
            "description": "OpenAI展示可生成一分钟连贯场景的文本到视频扩散模型。"
        },
        {
            "start": "2024-03-04",
            "title": "Claude 3 family released",
            "description": "Anthropic发布Haiku、Sonnet与Opus模型，增强推理、视觉与长上下文能力。"
        },
        {
            "start": "2024-03-17",
            "title": "Grok-1 open weights released",
            "description": "xAI发布大型专家混合语言模型的权重与架构信息。"
        },
        {
            "start": "2024-03-27",
            "title": "DBRX released",
            "description": "Databricks发布面向企业与编程性能的开放专家混合模型。"
        },
        {
            "start": "2024-04-18",
            "title": "Llama 3 released",
            "description": "Meta发布能力显著提升的8B与70B预训练及指令微调模型。"
        },
        {
            "start": "2024-04-23",
            "title": "Phi-3 Mini released",
            "description": "Microsoft证明精心筛选与合成数据可训练高能力小语言模型。"
        },
        {
            "start": "2024-05-13",
            "title": "GPT-4o released",
            "description": "OpenAI发布面向低延迟文本、视觉与音频交互的全能模型。"
        },
        {
            "start": "2024-06-20",
            "title": "Claude 3.5 Sonnet released",
            "description": "Anthropic发布在编程、推理与视觉理解上大幅提升的中档模型。"
        },
        {
            "start": "2024-06-27",
            "title": "Gemma 2 released",
            "description": "Google发布多种规模改进开放模型，包括270亿参数版本。"
        },
        {
            "start": "2024-07-18",
            "title": "GPT-4o mini released",
            "description": "OpenAI发布面向高吞吐应用的低成本小型多模态模型。"
        },
        {
            "start": "2024-07-23",
            "title": "Llama 3.1 released",
            "description": "Meta发布开放权重405B模型及改进8B、70B版本。"
        },
        {
            "start": "2024-07-24",
            "title": "Mistral Large 2 released",
            "description": "Mistral AI发布面向编程与长上下文单节点推理的123B多语言模型。"
        },
        {
            "start": "2024-08-01",
            "title": "FLUX.1 released",
            "description": "Black Forest Labs发布提示遵循与画质出色的开放及托管整流流图像模型。"
        },
        {
            "start": "2024-09-12",
            "title": "OpenAI o1-preview released",
            "description": "新模型系列被训练在困难问题上投入更多推理时间进行思考。"
        },
        {
            "start": "2024-09-19",
            "title": "Qwen2.5 released",
            "description": "阿里巴巴扩展开放模型家族，覆盖通用语言、编程与数学并支持广泛多语言。"
        },
        {
            "start": "2024-09-25",
            "title": "Llama 3.2 released",
            "description": "Meta发布视觉语言模型及面向边缘和移动设备的轻量文本模型。"
        },
        {
            "start": "2024-10-22",
            "title": "Claude computer use preview",
            "description": "Anthropic预览模型通过截图、鼠标与键盘动作控制桌面的能力。"
        },
        {
            "start": "2024-12-11",
            "title": "Gemini 2.0 announced",
            "description": "Google将Gemini 2.0定位为具备原生工具使用与实时交互的智能体多模态模型家族。"
        },
        {
            "start": "2024-12-26",
            "title": "DeepSeek-V3 released",
            "description": "DeepSeek以开放方式发布高效大型专家混合模型与技术报告。"
        },
        {
            "start": "2025-01-20",
            "title": "DeepSeek-R1 released",
            "description": "开放推理模型通过以强化学习为中心的后训练展示强数学与编程能力。"
        },
        {
            "start": "2025-01-31",
            "title": "OpenAI o3-mini released",
            "description": "OpenAI发布面向科学、数学与编程效率的小型推理模型。"
        },
        {
            "start": "2025-02-02",
            "title": "OpenAI deep research launched",
            "description": "浏览智能体在较长运行中综合大量在线来源，生成带依据的研究报告。"
        },
        {
            "start": "2025-02-24",
            "title": "Claude 3.7 Sonnet released",
            "description": "Anthropic发布同时支持即时回答与扩展可见推理的混合模型。"
        },
        {
            "start": "2025-02-27",
            "title": "GPT-4.5 released",
            "description": "OpenAI发布强调更广知识、自然交互与减少幻觉的大型通用模型。"
        },
        {
            "start": "2025-03-12",
            "title": "Gemma 3 released",
            "description": "Google发布具备长上下文与广泛多语言支持的多规模开放多模态模型。"
        },
        {
            "start": "2025-03-25",
            "title": "Gemini 2.5 Pro Experimental released",
            "description": "Google发布增强推理、编程、原生多模态与百万标记上下文的思考模型。"
        },
        {
            "start": "2025-04-05",
            "title": "Llama 4 Scout and Maverick released",
            "description": "Meta发布原生多模态稀疏专家混合模型，其中Scout具有超长上下文。"
        },
        {
            "start": "2025-04-14",
            "title": "GPT-4.1 family released",
            "description": "OpenAI发布在编程、指令遵循与百万标记上下文上大幅提升的API模型家族。"
        },
        {
            "start": "2025-04-16",
            "title": "OpenAI o3 and o4-mini released",
            "description": "推理模型集成网页浏览、Python、图像与文件分析以及图像生成工具。"
        },
        {
            "start": "2025-04-29",
            "title": "Qwen3 released",
            "description": "阿里巴巴发布支持思考模式切换及119种语言和方言的稠密与专家混合开放模型。"
        },
        {
            "start": "2025-05-22",
            "title": "Claude Opus 4 and Sonnet 4 released",
            "description": "Anthropic发布聚焦编程、持续智能体工作流与混合推理的模型。"
        },
        {
            "start": "2025-06-10",
            "title": "Magistral released",
            "description": "Mistral AI发布首个推理模型家族，强调多语言与领域推理。"
        },
        {
            "start": "2025-06-20",
            "title": "Kimi-Researcher announced",
            "description": "月之暗面展示通过端到端智能体强化学习训练的自主深度搜索智能体。"
        },
        {
            "start": "2025-07-09",
            "title": "Grok 4 released",
            "description": "xAI发布原生使用代码执行与网页搜索工具的推理模型。"
        },
        {
            "start": "2025-07-11",
            "title": "Kimi K2 released",
            "description": "月之暗面发布面向智能体工具使用与编程的万亿参数专家混合模型。"
        },
        {
            "start": "2025-07-28",
            "title": "GLM-4.5 released",
            "description": "智谱发布强调推理、编程与智能体能力并支持交错思考的开放模型。"
        },
        {
            "start": "2025-08-05",
            "title": "Claude Opus 4.1 released",
            "description": "Anthropic升级旗舰模型，强化编程、研究、数据分析与智能体搜索。"
        },
        {
            "start": "2025-08-07",
            "title": "GPT-5 released",
            "description": "OpenAI发布在快速回答与深度推理间路由的统一系统，并强化编程与工具使用。"
        },
        {
            "start": "2025-09-29",
            "title": "Claude Sonnet 4.5 released",
            "description": "Anthropic强化编程、复杂智能体、计算机使用与长时专业工作流。"
        },
        {
            "start": "2025-11-12",
            "title": "GPT-5.1 released",
            "description": "OpenAI更新GPT-5系列，提供更自然即时回答与更自适应扩展推理。"
        },
        {
            "start": "2025-11-17",
            "title": "Grok 4.1 released",
            "description": "xAI利用模型偏好信号的大规模强化学习改善创造性、情感与协作交互。"
        },
        {
            "start": "2025-11-24",
            "title": "Claude Opus 4.5 released",
            "description": "Anthropic推进重型智能体编程与长时知识工作流程。"
        },
        {
            "start": "2025-12-01",
            "title": "DeepSeek-V3.2 released",
            "description": "DeepSeek发布面向工具使用智能体的推理优先后继模型。"
        },
        {
            "start": "2025-12-02",
            "title": "Mistral 3 released",
            "description": "Mistral AI发布以多模态专家混合Mistral Large 3为旗舰的新开放家族。"
        },
        {
            "start": "2025-12-11",
            "title": "GPT-5.2 released",
            "description": "OpenAI发布面向专业与智能体工作的升级即时、思考与专业版本。"
        },
        {
            "start": "2025-12-22",
            "title": "GLM-4.7 released",
            "description": "智谱增强编程，并引入更持久的轮次级思考管理。"
        },
        {
            "start": "2026-02-05",
            "title": "GPT-5.3-Codex released",
            "description": "OpenAI推进长周期智能体编程与专业知识工作生成。"
        },
        {
            "start": "2026-02-05",
            "title": "Claude Opus 4.6 released",
            "description": "Anthropic增强长时任务、代码审查、专业分析与智能体可靠性。"
        },
        {
            "start": "2026-02-12",
            "title": "GLM-5 released",
            "description": "智谱发布旨在从交互编程迈向智能体工程的旗舰模型。"
        },
        {
            "start": "2026-03-16",
            "title": "Mistral Small 4 released",
            "description": "Mistral AI发布面向聊天、编程、智能体与复杂推理的开放多模态混合模型。"
        },
        {
            "start": "2026-04-07",
            "title": "GLM-5.1 released",
            "description": "智谱相较前代旗舰强化长周期智能体工程与编程。"
        },
        {
            "start": "2026-04-20",
            "title": "Kimi K2.6 released",
            "description": "月之暗面扩展模型平台，面向深度研究、自主建站、表格与演示文稿编辑。"
        },
        {
            "start": "2026-04-23",
            "title": "GPT-5.5 released",
            "description": "OpenAI发布更快前沿模型，面向复杂编程、研究、数据分析与科学工作流。"
        },
        {
            "start": "2026-05-19",
            "title": "Gemini 3.5 Flash released",
            "description": "Google发布面向复杂长周期工作流、结合前沿智能与行动的智能体优先模型。"
        },
        {
            "start": "2026-06-09",
            "title": "Gemini 3.5 Live Translate released",
            "description": "Google发布支持七十多种语言的近实时语音到语音翻译模型。"
        },
        {
            "start": "2026-06-23",
            "title": "Mistral OCR 4 released",
            "description": "Mistral AI发布具备多语言OCR、边界框与置信度的结构化文档智能模型。"
        },
        {
            "start": "2026-06-24",
            "title": "Computer use integrated into Gemini 3.5 Flash",
            "description": "Google将图形化计算机交互作为浏览器、移动端与桌面智能体内置工具。"
        },
        {
            "start": "2026-07-02",
            "title": "Leanstral 1.5 released",
            "description": "Mistral AI发布专用于Lean证明工程与形式化验证的开放专家混合模型。"
        },
        {
            "start": "2026-07-08",
            "title": "GPT-Live released",
            "description": "OpenAI发布面向交互语音生成与对话的实时音频模型。"
        },
        {
            "start": "2026-07-08",
            "title": "Robostral Navigate released",
            "description": "Mistral AI发布使用单个RGB摄像头进行自主机器人移动的具身导航模型。"
        },
        {
            "start": "2026-07-09",
            "title": "GPT-5.6 released",
            "description": "OpenAI发布Sol、Terra与Luna版本，覆盖最大推理、平衡工作与低成本高吞吐智能。"
        },
        {
            "start": "2026-07-21",
            "title": "Gemini 3.6 Flash family announced",
            "description": "Google以更快通用、轻量及网络安全专用Flash版本扩展智能体模型产品线。"
        },
        {
            "start": "2026-07-24",
            "title": "Claude Opus 5 released",
            "description": "Anthropic发布面向长时智能体、编程与高难专业分析的新旗舰模型。"
        }
    ]
};

// 机构、安全、政策与社会影响
var tl_society = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "“Artificial intelligence” established as a research field",
            "description": "达特茅斯提案为研究能够学习、推理和使用语言的机器赋予名称与共同议程。"
        },
        {
            "start": "1966",
            "title": "ALPAC report reshapes machine translation",
            "description": "美国批评性报告认为机器翻译未达到预期，资金转向基础语言研究。"
        },
        {
            "start": "1969",
            "title": "First International Joint Conference on Artificial Intelligence",
            "description": "IJCAI建立连接人工智能各分支的定期全球论坛。"
        },
        {
            "start": "1973",
            "title": "Lighthill report and funding contraction",
            "description": "英国政府审查批评人工智能碎片化与扩展性差，推动第一次人工智能寒冬。"
        },
        {
            "start": "1979",
            "title": "AAAI founded",
            "description": "美国人工智能促进协会成立，成为该领域重要专业机构。"
        },
        {
            "start": "1982",
            "title": "Fifth Generation Computer Systems becomes a national priority",
            "description": "日本雄心勃勃的国家项目加剧知识处理与并行人工智能硬件的国际竞争。"
        },
        {
            "start": "1987",
            "title": "Expert-system market collapse begins",
            "description": "维护成本、脆弱性与硬件市场变化削弱商业热情，引发第二次人工智能寒冬。"
        },
        {
            "start": "1997",
            "title": "Deep Blue victory changes public perception",
            "description": "国际象棋比赛成为专用机器智能超越顶尖人类专业能力的全球象征。"
        },
        {
            "start": "2004",
            "title": "DARPA Grand Challenge catalyzes autonomous vehicles",
            "description": "高关注竞赛连接学术机器人、军事资金与新兴自动驾驶产业。"
        },
        {
            "start": "2006",
            "title": "AI@50 Dartmouth conference",
            "description": "研究者重新审视领域创立目标，评估五十年进步与未解挑战。"
        },
        {
            "start": "2012",
            "title": "Deep learning becomes an industrial priority",
            "description": "ImageNet结果促使大型科技公司快速投资神经研究团队、数据中心与产品。"
        },
        {
            "start": "2014",
            "title": "AI acquisitions and laboratory expansion accelerate",
            "description": "大型科技公司收购研究创业公司，并围绕深度学习建立大型内部人工智能实验室。"
        },
        {
            "start": "2015",
            "title": "OpenAI founded",
            "description": "OpenAI作为追求先进人工智能及广泛社会利益的研究组织成立。"
        },
        {
            "start": "2016",
            "title": "Partnership on AI founded",
            "description": "科技公司与民间组织建立负责任人工智能实践的多利益相关方论坛。"
        },
        {
            "start": "2016",
            "title": "AI Now Institute initiative begins",
            "description": "跨学科研究将劳动、权利、问责与社会后果置于人工智能政策讨论中心。"
        },
        {
            "start": "2017",
            "title": "Asilomar AI Principles",
            "description": "研究者与公共利益参与者提出广泛讨论的有益、安全人工智能开发原则。"
        },
        {
            "start": "2018",
            "title": "GDPR automated-decision provisions take effect",
            "description": "欧洲数据保护法加强围绕个人数据画像与自动决策的权利义务。"
        },
        {
            "start": "2018",
            "title": "FAccT community consolidates",
            "description": "公平、问责与透明研究形成公认的跨学科人工智能领域。"
        },
        {
            "start": "2019",
            "title": "OECD AI Principles adopted",
            "description": "各国政府认可关于包容增长、以人为本价值、透明、稳健与问责的国际原则。"
        },
        {
            "start": "2019",
            "title": "Model cards and dataset documentation spread",
            "description": "标准化文档实践开始披露预期用途、限制、评测条件与数据来源。"
        },
        {
            "start": "2020",
            "title": "Large-model environmental and labor impacts gain attention",
            "description": "研究越来越关注人工智能系统背后的能源、碳排放、数据工作与隐形人类劳动。"
        },
        {
            "start": "2021",
            "title": "UNESCO Recommendation on the Ethics of Artificial Intelligence",
            "description": "成员国通过涵盖人权、治理、环境与社会福祉的全球规范框架。"
        },
        {
            "start": "2021",
            "title": "EU proposes the Artificial Intelligence Act",
            "description": "欧盟委员会提出按风险分级的人工智能系统监管框架。"
        },
        {
            "start": "2022",
            "title": "Generative AI copyright disputes intensify",
            "description": "文本与图像生成器引发关于训练数据、作者身份、许可与创意劳动的重大争议。"
        },
        {
            "start": "2023-01-26",
            "title": "NIST AI Risk Management Framework released",
            "description": "美国发布用于治理、映射、测量与管理人工智能风险的自愿框架。"
        },
        {
            "start": "2023-03-22",
            "title": "Public call for a pause on giant AI experiments",
            "description": "公开信反映对前沿模型快速发展、治理能力与系统性风险日益增长的担忧。"
        },
        {
            "start": "2023-05-30",
            "title": "Statement on AI extinction risk",
            "description": "研究者与产业领袖公开主张应将极端人工智能风险与其他全球性威胁同等对待。"
        },
        {
            "start": "2023-10-30",
            "title": "US Executive Order on safe, secure and trustworthy AI",
            "description": "行政命令要求联邦机构处理标准、评测、安全、公民权利、劳动与政府人工智能使用。"
        },
        {
            "start": "2023-11-01",
            "title": "Bletchley Declaration",
            "description": "首届人工智能安全峰会国家承认前沿人工智能共同风险及国际合作必要性。"
        },
        {
            "start": "2023-12-08",
            "title": "Political agreement on the EU AI Act",
            "description": "欧盟机构就全面风险型人工智能法律达成政治协议，包括通用模型规定。"
        },
        {
            "start": "2024",
            "title": "Frontier-model system cards and preparedness frameworks expand",
            "description": "主要实验室越来越多发布能力、滥用风险、安全措施与部署阈值评估。"
        },
        {
            "start": "2024-05-21",
            "title": "EU AI Act formally adopted",
            "description": "欧盟正式通过首个广泛、具有约束力的跨行业人工智能法规。"
        },
        {
            "start": "2024-08-01",
            "title": "EU AI Act enters into force",
            "description": "法规开始分阶段实施，涉及禁止行为、高风险系统与通用人工智能。"
        },
        {
            "start": "2025",
            "title": "Agent safety and computer-use governance become central",
            "description": "随着模型获得工具与自主性，权限、监控、沙箱与人类监督成为政策和工程核心问题。"
        },
        {
            "start": "2025",
            "title": "International AI safety evaluations deepen",
            "description": "国家机构与前沿实验室扩大对网络、生物、自主性与模型控制风险的联合测试。"
        },
        {
            "start": "2026",
            "title": "Governance shifts toward deployed agents and scientific AI",
            "description": "政策关注逐渐从静态聊天模型转向自主工作流、关键基础设施与人工智能辅助发现。"
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
