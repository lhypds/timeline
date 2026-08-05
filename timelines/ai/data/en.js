var title = "ARTIFICIAL INTELLIGENCE, MACHINE LEARNING AND DEEP LEARNING TIMELINE";

// Curated AI/ML/DL timeline. People are placed at the year they turned 20, but event text does not state that convention.
// Historical periods are approximate and intentionally overlap.
// SIMILE BCE rule: any negative year must be a minus sign followed by exactly four digits.

// AI paradigms and historical periods
var tl_periods = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "end": "1942",
            "title": "Probability, optimization and logic foundations",
            "description": "Mathematical ideas later used by AI—Bayesian inference, least squares, gradient methods, logic and stochastic processes—were established before electronic computers.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1943",
            "end": "1955",
            "title": "Cybernetics and early neural computation",
            "description": "Neural logic, information theory, feedback control and stored-program computing created a common language for minds, machines and communication.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1956",
            "end": "1973",
            "title": "First AI boom and symbolic intelligence",
            "description": "Search, theorem proving, planning, language programs and general problem solving dominated early AI research after the Dartmouth workshop.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1957",
            "end": "1969",
            "title": "Early connectionism and perceptrons",
            "description": "Trainable threshold networks attracted major interest, but limited theory and computing capacity constrained their reach.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1974",
            "end": "1980",
            "title": "First AI winter",
            "description": "Funding and expectations contracted after machine translation, robotics and general reasoning systems failed to meet ambitious promises.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1980",
            "end": "1987",
            "title": "Expert-systems boom",
            "description": "Rule-based systems entered corporations and laboratories, turning encoded expert knowledge into commercially useful decision support.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1985",
            "end": "2010",
            "title": "Probabilistic graphical-model era",
            "description": "Bayesian networks, Markov random fields and message passing unified uncertainty, causal structure and modular inference.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1986",
            "end": "2011",
            "title": "Statistical machine-learning ascendancy",
            "description": "Data-driven prediction, probabilistic modeling, kernels and empirical evaluation displaced much hand-written symbolic knowledge.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1987",
            "end": "1993",
            "title": "Second AI winter",
            "description": "The expert-system market and specialized Lisp-machine industry collapsed, producing another contraction in investment.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1989",
            "end": "2015",
            "title": "Modern reinforcement-learning consolidation",
            "description": "Temporal-difference learning, Q-learning, policy gradients and actor–critic methods formed the core toolkit of modern reinforcement learning.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1990",
            "end": "2011",
            "title": "Ensemble-learning era",
            "description": "Bagging, boosting and random forests showed that combining diverse weak or unstable learners could produce highly accurate systems.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "1992",
            "end": "2008",
            "title": "Kernel-method era",
            "description": "Support-vector machines and kernel constructions brought convex optimization and strong generalization theory to practical learning.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2006",
            "end": "2011",
            "title": "Deep-learning revival",
            "description": "Layer-wise pretraining, improved optimization, larger datasets and GPUs reopened the possibility of training deep neural networks.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2012",
            "end": "2016",
            "title": "ImageNet and GPU deep-learning breakthrough",
            "description": "AlexNet and rapidly improving convolutional networks established deep learning as the leading approach in vision and many perception tasks.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2018",
            "title": "Sequence-to-sequence and attention transition",
            "description": "Encoder–decoder networks and attention transformed translation, speech and sequence modeling, preparing the path to Transformers.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2014",
            "end": "2020",
            "title": "GAN-centered generative modeling",
            "description": "Adversarial training drove rapid progress in realistic image synthesis, representation learning and controllable generation.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2016",
            "end": "2026",
            "title": "AI safety, alignment and governance expansion",
            "description": "Technical alignment research, model evaluations, incident reporting and national or international regulation became integral to frontier AI development.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2017",
            "end": "2022",
            "title": "Transformer and large-scale pretraining era",
            "description": "Self-attention, scaling and transfer learning produced general-purpose language models and increasingly unified architectures.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2020",
            "end": "2026",
            "title": "Diffusion and flow-based generative era",
            "description": "Diffusion, score-based and flow-matching methods became central to high-quality image, video, audio and multimodal generation.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2021",
            "end": "2026",
            "title": "Multimodal foundation-model era",
            "description": "Models increasingly learned shared representations across text, images, audio, video, code and action.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2022",
            "end": "2026",
            "title": "Generative-AI productization",
            "description": "Conversational assistants, image generators and coding agents moved foundation models from laboratories into mass-market products.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "Open-weight model competition",
            "description": "Llama, Mistral, Qwen, DeepSeek, Gemma and other model families accelerated public experimentation, local deployment and model specialization.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2023",
            "end": "2026",
            "title": "Tool-using and agentic AI era",
            "description": "Language models increasingly planned multi-step tasks, called tools, operated computers and coordinated specialized subagents.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        },
        {
            "start": "2024",
            "end": "2026",
            "title": "Inference-time reasoning-model era",
            "description": "Models trained to spend variable computation at inference time made deliberate reasoning a central scaling dimension.",
            "isDuration": true,
            "textColor": "black",
            "color": "#8E44AD"
        }
    ]
};

// Mathematical, statistical and computational foundations
var tl_foundations = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1763",
            "title": "Bayes’ theorem",
            "description": "Thomas Bayes’s posthumous essay established inverse probability: beliefs about hidden causes can be updated from observed evidence."
        },
        {
            "start": "1805",
            "title": "Least-squares estimation",
            "description": "Adrien-Marie Legendre published the least-squares method, a foundation of regression, parameter fitting and modern loss minimization."
        },
        {
            "start": "1847",
            "title": "Gradient descent",
            "description": "Augustin-Louis Cauchy described a method of descending along derivatives to optimize multivariable functions, anticipating neural-network training."
        },
        {
            "start": "1854",
            "title": "Boolean algebra",
            "description": "George Boole turned logical propositions into algebraic operations, enabling digital circuits, symbolic reasoning and binary computation."
        },
        {
            "start": "1901",
            "title": "Principal component analysis",
            "description": "Karl Pearson introduced principal components for projecting correlated measurements onto lower-dimensional axes of maximal variation."
        },
        {
            "start": "1906",
            "title": "Markov chains",
            "description": "Andrey Markov formalized stochastic processes whose next state depends on the present state, foundational to sequence models and reinforcement learning."
        },
        {
            "start": "1936",
            "title": "Linear discriminant analysis",
            "description": "Ronald Fisher derived a projection maximizing class separation, creating a central method for supervised dimensionality reduction and classification."
        },
        {
            "start": "1936",
            "title": "Turing machine",
            "description": "Alan Turing formalized an abstract machine and computability, defining the algorithmic limits within which artificial intelligence would operate."
        },
        {
            "start": "1943",
            "title": "McCulloch–Pitts neuron",
            "description": "Warren McCulloch and Walter Pitts modeled a neuron as a logical threshold unit and showed neural networks could implement logical functions."
        },
        {
            "start": "1948",
            "title": "Information theory",
            "description": "Claude Shannon defined entropy and channel capacity, giving machine learning quantitative tools for uncertainty, coding and representation."
        },
        {
            "start": "1949",
            "title": "Hebbian learning",
            "description": "Donald Hebb proposed that coordinated neural activity strengthens synaptic connections, inspiring unsupervised and representation-learning rules."
        },
        {
            "start": "1950",
            "title": "Turing test",
            "description": "Alan Turing reframed machine intelligence as an operational imitation game based on linguistic behavior rather than internal mechanism."
        },
        {
            "start": "1950",
            "title": "Dynamic programming",
            "description": "Richard Bellman developed recursive optimization through the principle of optimality, central to planning, control and reinforcement learning."
        }
    ]
};

// Symbolic AI and classical machine-learning algorithms
var tl_classical_ml = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1951",
            "title": "Nearest-neighbor classification",
            "description": "Evelyn Fix and Joseph Hodges described nonparametric classification based on nearby labeled examples, the origin of k-nearest neighbors."
        },
        {
            "start": "1952",
            "title": "Samuel’s self-learning checkers method",
            "description": "Arthur Samuel combined search, evaluation functions and learning from play, helping establish the term machine learning in practice."
        },
        {
            "start": "1957",
            "title": "Perceptron learning rule",
            "description": "Frank Rosenblatt introduced a trainable linear threshold classifier with an error-correcting update rule."
        },
        {
            "start": "1957",
            "title": "Lloyd’s k-means algorithm",
            "description": "Stuart Lloyd formulated iterative assignment and centroid updates for vector quantization; it became the standard k-means procedure."
        },
        {
            "start": "1958",
            "title": "Alpha–beta pruning",
            "description": "Alpha–beta pruning made minimax game-tree search practical by eliminating branches that cannot affect the final decision."
        },
        {
            "start": "1958",
            "title": "Logistic regression formulation",
            "description": "David Cox formalized logistic regression for binary outcomes, later becoming a standard probabilistic classifier."
        },
        {
            "start": "1959",
            "title": "Dijkstra’s shortest-path algorithm",
            "description": "Edsger Dijkstra introduced an efficient shortest-path method that became fundamental to planning, routing and graph search."
        },
        {
            "start": "1960",
            "title": "Kalman filter",
            "description": "Rudolf Kálmán derived recursive state estimation for noisy linear dynamical systems, transforming tracking, navigation and control."
        },
        {
            "start": "1962",
            "title": "Rosenblatt convergence theorem",
            "description": "The perceptron convergence theorem clarified when a linear separator can be learned in finitely many updates."
        },
        {
            "start": "1963",
            "title": "AID decision-tree method",
            "description": "Automatic Interaction Detection recursively split data to explain outcomes, an important precursor of modern decision trees."
        },
        {
            "start": "1965",
            "title": "Resolution theorem proving",
            "description": "John Alan Robinson introduced resolution and unification as a complete rule for automated first-order theorem proving."
        },
        {
            "start": "1965",
            "title": "Fuzzy sets",
            "description": "Lotfi Zadeh introduced graded membership rather than strict Boolean categories, enabling fuzzy control and approximate reasoning."
        },
        {
            "start": "1966",
            "title": "Hidden Markov-model methods",
            "description": "Leonard Baum and colleagues developed probabilistic inference and estimation methods for hidden-state sequence models."
        },
        {
            "start": "1967",
            "title": "Viterbi algorithm",
            "description": "Andrew Viterbi introduced dynamic programming for the most probable hidden-state path, later essential in speech and sequence decoding."
        },
        {
            "start": "1967",
            "title": "Nearest-neighbor decision rule analysis",
            "description": "Thomas Cover and Peter Hart established theoretical error bounds for nearest-neighbor classification."
        },
        {
            "start": "1968",
            "title": "A* search",
            "description": "Peter Hart, Nils Nilsson and Bertram Raphael combined path cost with an admissible heuristic to find optimal routes efficiently."
        },
        {
            "start": "1969",
            "title": "Credit-assignment limits highlighted",
            "description": "Minsky and Papert’s analysis clarified representational limits of single-layer perceptrons and redirected neural-network research."
        },
        {
            "start": "1971",
            "title": "STRIPS planning",
            "description": "STRIPS represented actions through preconditions and effects, creating a durable foundation for automated planning."
        },
        {
            "start": "1972",
            "title": "Prolog",
            "description": "Alain Colmerauer and collaborators created Prolog, making logic programming a practical medium for symbolic AI and expert systems."
        },
        {
            "start": "1973",
            "title": "Lighthill report",
            "description": "The report criticized the scalability of contemporary AI methods and contributed to reduced British funding during the first AI winter."
        },
        {
            "start": "1974",
            "title": "Backpropagation through differentiable networks",
            "description": "Paul Werbos described applying reverse-mode differentiation to train multilayer neural networks."
        },
        {
            "start": "1977",
            "title": "Expectation–maximization algorithm",
            "description": "Dempster, Laird and Rubin unified iterative maximum-likelihood estimation with latent or missing data."
        },
        {
            "start": "1979",
            "title": "ID3 decision tree",
            "description": "Ross Quinlan used information gain to choose recursive splits, establishing a highly influential family of decision-tree learners."
        },
        {
            "start": "1982",
            "title": "Hopfield network",
            "description": "John Hopfield connected recurrent neural dynamics with energy minimization, creating an associative-memory model."
        },
        {
            "start": "1982",
            "title": "Belief propagation",
            "description": "Judea Pearl developed local message passing for exact inference on trees, later generalized across graphical models and coding theory."
        },
        {
            "start": "1984",
            "title": "CART",
            "description": "Breiman, Friedman, Olshen and Stone systematized classification and regression trees with impurity splitting and cost-complexity pruning."
        },
        {
            "start": "1984",
            "title": "Gibbs sampling",
            "description": "Geman and Geman popularized coordinate-wise sampling for Markov random fields, later central to Bayesian computation."
        },
        {
            "start": "1985",
            "title": "Bayesian networks",
            "description": "Judea Pearl formalized directed acyclic graphical models for representing conditional independence and causal hypotheses."
        },
        {
            "start": "1985",
            "title": "Boltzmann machine",
            "description": "Ackley, Hinton and Sejnowski introduced stochastic energy-based neural networks trained to model probability distributions."
        },
        {
            "start": "1986",
            "title": "Backpropagation popularized",
            "description": "Rumelhart, Hinton and Williams demonstrated efficient error backpropagation for learning distributed representations in multilayer networks."
        },
        {
            "start": "1986",
            "title": "Inductive bias and version spaces",
            "description": "Tom Mitchell’s formulation of version spaces and inductive learning helped define machine learning as systematic hypothesis search."
        },
        {
            "start": "1988",
            "title": "Temporal-difference learning",
            "description": "Richard Sutton unified prediction from successive estimates, allowing learning before a final outcome is observed."
        },
        {
            "start": "1988",
            "title": "Radial basis-function networks",
            "description": "Broomhead and Lowe connected radial basis interpolation with trainable neural networks for function approximation."
        },
        {
            "start": "1989",
            "title": "Q-learning",
            "description": "Christopher Watkins introduced an off-policy temporal-difference algorithm that learns optimal action values without a model of the environment."
        },
        {
            "start": "1989",
            "title": "Universal approximation theorem",
            "description": "Cybenko and related work proved that a sufficiently large single-hidden-layer network can approximate broad classes of continuous functions."
        },
        {
            "start": "1990",
            "title": "QDA and modern statistical classification texts",
            "description": "Statistical learning consolidated generative classifiers, discriminant analysis and cross-validation into a reusable predictive toolkit."
        },
        {
            "start": "1990",
            "title": "Latent semantic analysis",
            "description": "Deerwester and colleagues used singular-value decomposition to derive lower-dimensional semantic representations of documents and terms."
        },
        {
            "start": "1992",
            "title": "REINFORCE policy gradient",
            "description": "Ronald Williams introduced an unbiased likelihood-ratio gradient estimator for optimizing stochastic policies."
        },
        {
            "start": "1992",
            "title": "Kernel trick for nonlinear learning",
            "description": "Boser, Guyon and Vapnik used kernels with maximum-margin classifiers, enabling nonlinear decisions through inner products."
        },
        {
            "start": "1993",
            "title": "Particle filtering",
            "description": "Sequential Monte Carlo methods represented nonlinear, non-Gaussian state uncertainty with weighted samples."
        },
        {
            "start": "1994",
            "title": "SARSA",
            "description": "Rummery and Niranjan described on-policy temporal-difference control, later named SARSA from its state–action transition tuple."
        },
        {
            "start": "1994",
            "title": "BM25 ranking",
            "description": "Okapi BM25 combined probabilistic term weighting with document-length normalization and became a durable information-retrieval baseline."
        },
        {
            "start": "1995",
            "title": "Support-vector machines",
            "description": "Cortes and Vapnik presented soft-margin support-vector machines, combining maximum-margin learning with robustness to nonseparable data."
        },
        {
            "start": "1995",
            "title": "AdaBoost",
            "description": "Freund and Schapire showed how to iteratively reweight examples and combine weak learners into a strong classifier."
        },
        {
            "start": "1996",
            "title": "DBSCAN",
            "description": "Ester and colleagues introduced density-based clustering that discovers irregularly shaped clusters and labels sparse points as noise."
        },
        {
            "start": "1996",
            "title": "Independent component analysis",
            "description": "ICA matured into a practical method for separating statistically independent latent sources from mixed observations."
        },
        {
            "start": "1997",
            "title": "Long short-term memory",
            "description": "Hochreiter and Schmidhuber introduced gated memory cells that preserve gradients and learn long-range dependencies."
        },
        {
            "start": "1997",
            "title": "Boosting as additive modeling",
            "description": "Friedman, Hastie and Tibshirani connected boosting to stagewise additive statistical modeling, clarifying its optimization behavior."
        },
        {
            "start": "1998",
            "title": "LeNet-5 and gradient-based document recognition",
            "description": "LeCun and colleagues demonstrated an end-to-end convolutional system for handwritten-digit and document recognition."
        },
        {
            "start": "1998",
            "title": "Rapidly-exploring random trees",
            "description": "Steven LaValle introduced RRTs for efficiently exploring high-dimensional continuous configuration spaces in robot planning."
        },
        {
            "start": "1999",
            "title": "Gradient boosting",
            "description": "Jerome Friedman formulated boosting as functional gradient descent, creating a flexible framework for powerful tree ensembles."
        },
        {
            "start": "2000",
            "title": "Minimum-redundancy feature selection",
            "description": "Mutual-information criteria increasingly guided feature selection by balancing relevance to targets against redundancy among inputs."
        },
        {
            "start": "2001",
            "title": "Random forests",
            "description": "Leo Breiman combined bootstrap aggregation with randomized feature selection to produce accurate, robust and parallelizable tree ensembles."
        },
        {
            "start": "2001",
            "title": "Conditional random fields",
            "description": "Lafferty, McCallum and Pereira introduced discriminative undirected sequence models that avoid strong independence assumptions of HMMs."
        },
        {
            "start": "2001",
            "title": "Spectral clustering",
            "description": "Graph Laplacian eigenvectors became a principled way to uncover nonconvex cluster structure from pairwise similarities."
        },
        {
            "start": "2003",
            "title": "Latent Dirichlet allocation",
            "description": "Blei, Ng and Jordan introduced a generative probabilistic topic model representing documents as mixtures of latent topics."
        },
        {
            "start": "2003",
            "title": "Maximum-entropy Markov models and discriminative sequence learning",
            "description": "Discriminative sequence models connected feature-rich classification with structured prediction, preparing the way for CRF-based NLP."
        },
        {
            "start": "2004",
            "title": "Large-margin structured prediction",
            "description": "Structured SVM methods extended maximum-margin learning from labels to sequences, trees and other complex outputs."
        },
        {
            "start": "2005",
            "title": "Gaussian-process classification and regression mature",
            "description": "Gaussian processes became a practical Bayesian nonparametric framework for calibrated prediction and uncertainty estimation."
        },
        {
            "start": "2006",
            "title": "Matrix factorization for recommender systems",
            "description": "Low-rank user–item factorization became a dominant collaborative-filtering approach during the Netflix Prize era."
        },
        {
            "start": "2006",
            "title": "Compressed sensing",
            "description": "Sparse-recovery theory showed that structured signals can be reconstructed from surprisingly few measurements using convex optimization."
        },
        {
            "start": "2007",
            "title": "Online passive–aggressive algorithms",
            "description": "Margin-based online updates provided fast learning for large-scale classification, ranking and structured prediction."
        },
        {
            "start": "2008",
            "title": "t-SNE",
            "description": "van der Maaten and Hinton introduced a nonlinear visualization method preserving local neighborhoods in low-dimensional maps."
        },
        {
            "start": "2008",
            "title": "Isolation forest",
            "description": "Liu, Ting and Zhou detected anomalies by measuring how quickly random partitioning isolates individual observations."
        },
        {
            "start": "2009",
            "title": "Feature hashing",
            "description": "The hashing trick mapped huge sparse feature spaces into fixed dimensions without storing a vocabulary."
        },
        {
            "start": "2010",
            "title": "Elastic net and sparse regularization become standard",
            "description": "Combined L1/L2 penalties offered stable sparse models for correlated high-dimensional data."
        },
        {
            "start": "2011",
            "title": "Bayesian optimization with Gaussian processes",
            "description": "Sequential acquisition functions made expensive black-box optimization practical for hyperparameters and experiments."
        },
        {
            "start": "2012",
            "title": "Randomized search for hyperparameters",
            "description": "Bergstra and Bengio showed random search often explores influential hyperparameters more efficiently than grids."
        },
        {
            "start": "2013",
            "title": "Word2vec",
            "description": "Mikolov and colleagues introduced efficient skip-gram and CBOW training for dense word embeddings with useful semantic geometry."
        },
        {
            "start": "2014",
            "title": "GloVe",
            "description": "Pennington, Socher and Manning combined global word co-occurrence statistics with embedding factorization."
        },
        {
            "start": "2015",
            "title": "Knowledge distillation",
            "description": "Hinton, Vinyals and Dean trained compact student models to imitate softened outputs of larger teacher ensembles."
        },
        {
            "start": "2016",
            "title": "XGBoost",
            "description": "Chen and Guestrin presented a scalable, regularized gradient-boosted tree system that became a dominant tabular-data baseline."
        },
        {
            "start": "2016",
            "title": "FastText subword embeddings",
            "description": "Facebook AI represented words through character n-grams, improving rare-word and morphologically rich language modeling."
        },
        {
            "start": "2017",
            "title": "LightGBM",
            "description": "Microsoft introduced histogram-based, leaf-wise gradient boosting optimized for large datasets and high-dimensional sparse features."
        },
        {
            "start": "2018",
            "title": "CatBoost",
            "description": "Yandex introduced ordered boosting and target-statistic handling to reduce leakage and bias in categorical-feature learning."
        },
        {
            "start": "2018",
            "title": "UMAP",
            "description": "McInnes, Healy and Melville introduced a scalable manifold-learning method for visualization and neighborhood-preserving embeddings."
        },
        {
            "start": "2019",
            "title": "Neural architecture search matures",
            "description": "Weight sharing, differentiable search and hardware-aware objectives made automated network design more practical."
        },
        {
            "start": "2020",
            "title": "Conformal prediction revival",
            "description": "Distribution-free prediction sets gained adoption as a practical method for uncertainty coverage around machine-learning outputs."
        }
    ]
};

// Neural networks, deep learning and generative algorithms
var tl_deep_learning = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1980",
            "title": "Neocognitron",
            "description": "Kunihiko Fukushima introduced a hierarchical convolution-like network with local receptive fields and pooling, anticipating modern CNNs."
        },
        {
            "start": "1989",
            "title": "Convolutional neural networks trained by backpropagation",
            "description": "LeCun and colleagues combined convolution, shared weights and backpropagation for handwritten-zip-code recognition."
        },
        {
            "start": "1991",
            "title": "Mixture of experts",
            "description": "Jacobs, Jordan and colleagues introduced gated expert networks that route inputs among specialized subnetworks."
        },
        {
            "start": "1991",
            "title": "Vanishing-gradient problem analyzed",
            "description": "Sepp Hochreiter’s work clarified why gradients in deep and recurrent networks can decay exponentially across many layers or time steps."
        },
        {
            "start": "1997",
            "title": "Bidirectional recurrent neural networks",
            "description": "Bidirectional RNNs used both past and future context, later becoming standard in speech and sequence labeling."
        },
        {
            "start": "2000",
            "title": "Echo-state networks",
            "description": "Herbert Jaeger introduced reservoir computing with a fixed recurrent dynamics and a trained linear readout."
        },
        {
            "start": "2003",
            "title": "Neural probabilistic language model",
            "description": "Bengio and colleagues jointly learned distributed word representations and next-word probabilities, overcoming discrete n-gram sparsity."
        },
        {
            "start": "2006",
            "title": "Deep belief networks and greedy layer-wise pretraining",
            "description": "Hinton, Osindero and Teh showed that stacking restricted Boltzmann machines could initialize deep networks effectively."
        },
        {
            "start": "2006",
            "title": "Connectionist temporal classification",
            "description": "Alex Graves and colleagues introduced CTC for aligning unsegmented sequences with outputs, transforming end-to-end speech recognition."
        },
        {
            "start": "2007",
            "title": "Sparse autoencoders",
            "description": "Sparsity penalties encouraged autoencoders to learn selective latent features from unlabeled data."
        },
        {
            "start": "2008",
            "title": "Denoising autoencoders",
            "description": "Vincent and colleagues trained networks to reconstruct clean inputs from corrupted versions, learning robust representations."
        },
        {
            "start": "2009",
            "title": "GPU-accelerated neural-network training",
            "description": "Researchers demonstrated large speedups from graphics processors, foreshadowing GPU-centered deep-learning infrastructure."
        },
        {
            "start": "2010",
            "title": "Rectified linear units",
            "description": "ReLU activations simplified optimization and reduced saturation, becoming a default component of deep networks."
        },
        {
            "start": "2011",
            "title": "Deep rectifier acoustic models",
            "description": "Large neural speech systems showed ReLUs could train deep networks effectively at practical scale."
        },
        {
            "start": "2012",
            "title": "Dropout",
            "description": "Hinton and collaborators randomly removed units during training to reduce co-adaptation and improve generalization."
        },
        {
            "start": "2012",
            "title": "AlexNet training recipe",
            "description": "Krizhevsky, Sutskever and Hinton combined GPUs, ReLU, dropout, data augmentation and large CNNs to win ImageNet decisively."
        },
        {
            "start": "2013",
            "title": "Maxout networks",
            "description": "Goodfellow and colleagues introduced piecewise-linear maxout units designed to work effectively with dropout."
        },
        {
            "start": "2013",
            "title": "Variational autoencoder",
            "description": "Kingma and Welling introduced reparameterized variational inference for trainable latent-variable generative models."
        },
        {
            "start": "2013",
            "title": "Distributed representations with negative sampling",
            "description": "Negative sampling made large-vocabulary embedding training efficient and helped popularize learned semantic vector spaces."
        },
        {
            "start": "2014",
            "title": "Generative adversarial networks",
            "description": "Goodfellow and colleagues formulated a generator–discriminator game that learns to synthesize data without explicit likelihoods."
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence learning",
            "description": "Sutskever, Vinyals and Le introduced an encoder–decoder LSTM that mapped variable-length input sequences to output sequences."
        },
        {
            "start": "2014",
            "title": "Neural attention for translation",
            "description": "Bahdanau, Cho and Bengio let a decoder dynamically focus on relevant encoder states, removing a fixed-vector bottleneck."
        },
        {
            "start": "2014",
            "title": "Gated recurrent unit",
            "description": "Cho and collaborators introduced the GRU, a simpler gated recurrent architecture that often matched LSTM performance."
        },
        {
            "start": "2014",
            "title": "Adam optimizer",
            "description": "Kingma and Ba combined momentum with adaptive per-parameter learning rates, creating a widely used optimizer for deep networks."
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "A large neural face-recognition system combined 3D alignment with deep representation learning and approached human verification accuracy."
        },
        {
            "start": "2015",
            "title": "Batch normalization",
            "description": "Ioffe and Szegedy normalized intermediate activations during training, enabling higher learning rates and more stable deep networks."
        },
        {
            "start": "2015",
            "title": "Residual networks",
            "description": "He and colleagues introduced residual connections that allowed very deep networks to optimize reliably."
        },
        {
            "start": "2015",
            "title": "U-Net",
            "description": "Ronneberger, Fischer and Brox created an encoder–decoder CNN with skip connections for precise biomedical image segmentation."
        },
        {
            "start": "2015",
            "title": "Faster R-CNN",
            "description": "Ren and colleagues integrated region proposals into a trainable convolutional network, unifying efficient object detection."
        },
        {
            "start": "2015",
            "title": "YOLO",
            "description": "Redmon and colleagues reframed object detection as a single real-time regression problem over an entire image."
        },
        {
            "start": "2015",
            "title": "Deep reinforcement learning with DQN",
            "description": "DeepMind combined Q-learning, convolutional networks, experience replay and target networks to learn Atari games from pixels."
        },
        {
            "start": "2015",
            "title": "Neural style transfer",
            "description": "Gatys, Ecker and Bethge separated content and style through CNN feature statistics, enabling optimization-based artistic transfer."
        },
        {
            "start": "2015",
            "title": "Normalizing flows",
            "description": "Invertible transformations enabled exact likelihood evaluation and sampling for flexible continuous generative models."
        },
        {
            "start": "2016",
            "title": "DenseNet",
            "description": "Huang and colleagues connected each layer to all later layers, improving feature reuse and gradient flow."
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMind introduced autoregressive dilated convolutions for raw-audio generation, greatly improving neural speech synthesis."
        },
        {
            "start": "2016",
            "title": "PixelRNN and PixelCNN",
            "description": "Autoregressive image models generated pixels conditionally in sequence, providing tractable likelihood-based image synthesis."
        },
        {
            "start": "2016",
            "title": "Graph convolutional networks",
            "description": "Kipf and Welling simplified spectral graph convolutions into an efficient neighborhood-aggregation rule."
        },
        {
            "start": "2016",
            "title": "A3C",
            "description": "Asynchronous advantage actor–critic trained multiple agents in parallel without experience replay, stabilizing deep RL."
        },
        {
            "start": "2016",
            "title": "Neural machine translation with subword units",
            "description": "Byte-pair encoding adapted to text reduced out-of-vocabulary problems and became standard in neural language models."
        },
        {
            "start": "2017",
            "title": "Transformer",
            "description": "Vaswani and colleagues replaced recurrence with multi-head self-attention, enabling highly parallel sequence modeling."
        },
        {
            "start": "2017",
            "title": "Proximal policy optimization",
            "description": "Schulman and colleagues introduced a clipped surrogate objective for stable, simple and effective policy-gradient updates."
        },
        {
            "start": "2017",
            "title": "GraphSAGE",
            "description": "Hamilton, Ying and Leskovec learned neighborhood aggregation functions that generalize to unseen graph nodes."
        },
        {
            "start": "2017",
            "title": "Graph attention networks",
            "description": "Veličković and colleagues used learned attention weights to aggregate graph neighborhoods."
        },
        {
            "start": "2017",
            "title": "Wasserstein GAN",
            "description": "Arjovsky, Chintala and Bottou replaced divergence-based training with an Earth-Mover-distance objective for more stable GAN optimization."
        },
        {
            "start": "2017",
            "title": "Mask R-CNN",
            "description": "He and colleagues extended object detection with a parallel pixel-level mask branch for instance segmentation."
        },
        {
            "start": "2017",
            "title": "Tacotron",
            "description": "End-to-end sequence modeling mapped text directly to spectrograms, simplifying neural speech synthesis pipelines."
        },
        {
            "start": "2018",
            "title": "BERT masked-language pretraining",
            "description": "Devlin and colleagues pretrained bidirectional Transformers with masked tokens and next-sentence prediction, transforming NLP transfer learning."
        },
        {
            "start": "2018",
            "title": "GPT generative pretraining",
            "description": "OpenAI showed that autoregressive Transformer pretraining followed by task fine-tuning transfers broadly across language tasks."
        },
        {
            "start": "2018",
            "title": "ELMo contextual embeddings",
            "description": "Peters and colleagues derived context-sensitive word representations from deep bidirectional language models."
        },
        {
            "start": "2018",
            "title": "ULMFiT",
            "description": "Howard and Ruder introduced discriminative fine-tuning and gradual unfreezing for effective language-model transfer."
        },
        {
            "start": "2018",
            "title": "StyleGAN",
            "description": "Karras and colleagues introduced style-based control over generator layers, greatly improving image quality and semantic editing."
        },
        {
            "start": "2018",
            "title": "Lottery ticket hypothesis",
            "description": "Frankle and Carbin showed that dense networks contain sparse subnetworks capable of training to comparable accuracy from suitable initialization."
        },
        {
            "start": "2018",
            "title": "Contrastive predictive coding",
            "description": "CPC learned representations by predicting future latent states with a contrastive objective."
        },
        {
            "start": "2019",
            "title": "Transformer-XL",
            "description": "Segment recurrence and relative positions extended Transformer context beyond fixed training windows."
        },
        {
            "start": "2019",
            "title": "RoBERTa",
            "description": "A better-tuned BERT training recipe showed that scale, data and optimization choices mattered as much as architectural novelty."
        },
        {
            "start": "2019",
            "title": "T5 text-to-text transfer",
            "description": "Google framed every NLP task as text generation and studied transfer systematically at large scale."
        },
        {
            "start": "2019",
            "title": "Sparse Transformer",
            "description": "Structured sparse attention reduced quadratic cost and enabled much longer sequences."
        },
        {
            "start": "2019",
            "title": "Multi-query attention",
            "description": "Sharing key and value heads reduced autoregressive decoding memory and bandwidth costs."
        },
        {
            "start": "2019",
            "title": "Score-based generative modeling",
            "description": "Song and Ermon learned gradients of the data log-density and generated samples with Langevin dynamics."
        },
        {
            "start": "2019",
            "title": "Adapters for parameter-efficient transfer",
            "description": "Small inserted modules enabled task adaptation while keeping most pretrained parameters frozen."
        },
        {
            "start": "2019",
            "title": "wav2vec",
            "description": "Self-supervised learning from raw audio produced speech representations useful with limited labels."
        },
        {
            "start": "2020",
            "title": "GPT-3 in-context learning",
            "description": "Scaling autoregressive language modeling revealed strong few-shot and zero-shot behavior without gradient updates at use time."
        },
        {
            "start": "2020",
            "title": "Scaling laws for neural language models",
            "description": "Kaplan and colleagues quantified predictable power-law improvements with model size, data and compute."
        },
        {
            "start": "2020",
            "title": "Vision Transformer",
            "description": "Dosovitskiy and colleagues applied a pure Transformer to image patches and showed strong vision performance at scale."
        },
        {
            "start": "2020",
            "title": "DETR",
            "description": "Carion and colleagues cast object detection as direct set prediction with a Transformer and bipartite matching."
        },
        {
            "start": "2020",
            "title": "DDPM diffusion models",
            "description": "Ho, Jain and Abbeel trained denoising diffusion probabilistic models that generated high-quality images with stable likelihood-based objectives."
        },
        {
            "start": "2020",
            "title": "SimCLR",
            "description": "Large-batch contrastive learning with strong image augmentations produced powerful self-supervised visual representations."
        },
        {
            "start": "2020",
            "title": "MoCo",
            "description": "A momentum-updated encoder and queue enabled contrastive learning with many consistent negative examples."
        },
        {
            "start": "2020",
            "title": "BYOL",
            "description": "Bootstrap Your Own Latent learned strong visual representations without explicit negative pairs using online and target networks."
        },
        {
            "start": "2020",
            "title": "Retrieval-augmented generation",
            "description": "Lewis and colleagues coupled neural retrieval with sequence generation, allowing models to consult external documents during prediction."
        },
        {
            "start": "2020",
            "title": "REALM retrieval pretraining",
            "description": "Google jointly trained retrieval and language modeling so factual generation could draw from a large text corpus."
        },
        {
            "start": "2020",
            "title": "Neural ordinary differential equations mature",
            "description": "Continuous-depth models connected neural networks with differential-equation solvers and adaptive computation."
        },
        {
            "start": "2021",
            "title": "CLIP",
            "description": "OpenAI trained image and text encoders on large-scale natural-language supervision, enabling zero-shot visual classification."
        },
        {
            "start": "2021",
            "title": "DALL·E discrete image generation",
            "description": "A Transformer modeled text and image tokens jointly, demonstrating flexible text-conditioned image synthesis."
        },
        {
            "start": "2021",
            "title": "LoRA",
            "description": "Low-rank adaptation trained small rank-decomposition matrices while freezing base-model weights, sharply reducing fine-tuning cost."
        },
        {
            "start": "2021",
            "title": "Prefix tuning",
            "description": "Learned continuous prefix vectors steered frozen language models with a tiny fraction of task-specific parameters."
        },
        {
            "start": "2021",
            "title": "Prompt tuning",
            "description": "Soft prompt embeddings showed that sufficiently large language models could adapt with only a small learned input prefix."
        },
        {
            "start": "2021",
            "title": "Switch Transformer",
            "description": "Sparse mixture-of-experts routing scaled model capacity dramatically while activating only a small subset per token."
        },
        {
            "start": "2021",
            "title": "Rotary positional embeddings",
            "description": "RoPE encoded relative positions by rotating query and key vectors, becoming widely used in large language models."
        },
        {
            "start": "2021",
            "title": "ALiBi",
            "description": "Linear attention biases enabled Transformers to extrapolate to longer sequences without learned positional embeddings."
        },
        {
            "start": "2021",
            "title": "Masked autoencoders",
            "description": "MAE trained vision Transformers to reconstruct heavily masked image patches, producing scalable self-supervised features."
        },
        {
            "start": "2021",
            "title": "DINO self-distillation",
            "description": "Teacher–student self-distillation without labels produced semantically organized visual features and attention maps."
        },
        {
            "start": "2021",
            "title": "HuBERT",
            "description": "Masked prediction of clustered acoustic units created strong self-supervised speech representations."
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "Reinforcement learning was reframed as sequence modeling conditioned on desired return, connecting control with Transformer generation."
        },
        {
            "start": "2022",
            "title": "Chinchilla compute-optimal scaling",
            "description": "DeepMind showed many large language models were undertrained and that balanced growth of parameters and data improves compute efficiency."
        },
        {
            "start": "2022",
            "title": "Chain-of-thought prompting",
            "description": "Wei and colleagues showed that intermediate reasoning examples can unlock multi-step reasoning in sufficiently large language models."
        },
        {
            "start": "2022",
            "title": "Self-consistency decoding",
            "description": "Sampling multiple reasoning paths and voting over answers improved chain-of-thought reliability."
        },
        {
            "start": "2022",
            "title": "ReAct",
            "description": "Reasoning traces were interleaved with external actions and observations, creating a durable pattern for tool-using agents."
        },
        {
            "start": "2022",
            "title": "InstructGPT and RLHF pipeline",
            "description": "OpenAI combined supervised demonstrations, preference modeling and reinforcement learning to align language-model behavior with user intent."
        },
        {
            "start": "2022",
            "title": "Latent diffusion models",
            "description": "Rombach and colleagues moved diffusion into a learned latent space, sharply reducing computation while retaining high image quality."
        },
        {
            "start": "2022",
            "title": "FlashAttention",
            "description": "Dao and colleagues reorganized exact attention around GPU memory hierarchy, reducing memory traffic and accelerating long-sequence training."
        },
        {
            "start": "2022",
            "title": "Grouped-query attention",
            "description": "Grouped-query attention shared key–value heads across groups of query heads, balancing quality with faster decoding."
        },
        {
            "start": "2022",
            "title": "Flow matching",
            "description": "Continuous normalizing flows were trained through vector-field matching, providing a flexible path toward fast generative transport."
        },
        {
            "start": "2022",
            "title": "Rectified flow",
            "description": "Rectified flow straightened transport trajectories between noise and data, enabling efficient few-step generation."
        },
        {
            "start": "2022",
            "title": "Constitutional AI",
            "description": "Anthropic used written principles and AI feedback to train helpful behavior while reducing reliance on direct human labels."
        },
        {
            "start": "2023",
            "title": "Direct preference optimization",
            "description": "DPO optimized preference likelihood directly without fitting a separate reward model or running reinforcement learning."
        },
        {
            "start": "2023",
            "title": "QLoRA",
            "description": "Four-bit quantization plus low-rank adapters enabled high-quality fine-tuning of very large models on modest hardware."
        },
        {
            "start": "2023",
            "title": "GPTQ post-training quantization",
            "description": "Second-order-aware weight quantization made large language models much smaller with limited accuracy loss."
        },
        {
            "start": "2023",
            "title": "AWQ activation-aware quantization",
            "description": "Activation statistics identified salient weights that should be protected during low-bit model compression."
        },
        {
            "start": "2023",
            "title": "Speculative decoding",
            "description": "A smaller draft model proposed token blocks that a larger model verified in parallel, accelerating exact autoregressive sampling."
        },
        {
            "start": "2023",
            "title": "Toolformer",
            "description": "A language model learned from self-generated demonstrations when and how to call external tools."
        },
        {
            "start": "2023",
            "title": "Segment Anything",
            "description": "Meta introduced promptable image segmentation trained on a massive mask dataset, enabling broad zero-shot transfer."
        },
        {
            "start": "2023",
            "title": "Diffusion Policy",
            "description": "Robot actions were generated as denoised trajectories, producing expressive multimodal policies for manipulation."
        },
        {
            "start": "2023",
            "title": "Mixture-of-depths and conditional computation revival",
            "description": "Dynamic token routing began to vary not only experts but also the amount of computation applied across sequence positions."
        },
        {
            "start": "2024",
            "title": "Group relative policy optimization",
            "description": "GRPO estimated relative advantages from groups of sampled answers, reducing dependence on a learned value model in reasoning RL."
        },
        {
            "start": "2024",
            "title": "Preference optimization without reference models",
            "description": "New objectives simplified alignment training by eliminating or weakening dependence on a fixed reference policy."
        },
        {
            "start": "2024",
            "title": "Long-context ring attention",
            "description": "Distributed attention arranged devices in a ring to train and serve context windows far beyond a single accelerator’s memory."
        },
        {
            "start": "2024",
            "title": "Test-time compute scaling",
            "description": "Search, verification and longer internal reasoning showed that inference computation can systematically improve difficult-task performance."
        },
        {
            "start": "2025",
            "title": "Hybrid thinking modes",
            "description": "Models began combining fast direct responses with controllable extended reasoning inside a single deployed model family."
        },
        {
            "start": "2025",
            "title": "Agentic reinforcement learning",
            "description": "End-to-end reinforcement learning increasingly trained models across multi-step tool use, search and environment interaction."
        },
        {
            "start": "2026",
            "title": "Multi-agent orchestration at inference time",
            "description": "Frontier systems increasingly coordinated specialized subagents, verifiers and shared tools for long-horizon knowledge work."
        }
    ]
};

// Reinforcement learning, planning and agents
var tl_rl_agents = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1959",
            "title": "General Problem Solver",
            "description": "Newell, Simon and Shaw used means–ends analysis to reduce differences between a current state and a goal."
        },
        {
            "start": "1960",
            "title": "Markov decision processes formalized for control",
            "description": "Dynamic programming and stochastic control converged on state, action, transition and reward formulations."
        },
        {
            "start": "1966",
            "title": "Shakey robot planning stack",
            "description": "SRI’s Shakey integrated perception, world modeling, planning and action in a mobile robot."
        },
        {
            "start": "1975",
            "title": "Actor–critic architecture",
            "description": "Adaptive critics separated policy selection from value evaluation, anticipating modern actor–critic reinforcement learning."
        },
        {
            "start": "1983",
            "title": "Formal actor–critic learning",
            "description": "Barto, Sutton and Anderson demonstrated neuron-like adaptive elements learning control through a critic signal."
        },
        {
            "start": "1989",
            "title": "Behavior cloning for autonomous driving",
            "description": "ALVINN learned steering commands from human driving examples, an early influential imitation-learning system."
        },
        {
            "start": "1992",
            "title": "TD-Gammon self-play",
            "description": "Gerald Tesauro used temporal-difference learning and self-play to reach strong backgammon performance."
        },
        {
            "start": "1994",
            "title": "Partially observable Markov decision processes",
            "description": "Belief-state planning provided a formal basis for decision making when an agent cannot directly observe the true state."
        },
        {
            "start": "1997",
            "title": "Monte Carlo tree search precursors",
            "description": "Sampling-based lookahead began replacing exhaustive game-tree expansion in large branching spaces."
        },
        {
            "start": "1998",
            "title": "Dyna architecture",
            "description": "Sutton integrated learning, planning and acting by using a learned model to generate simulated experience."
        },
        {
            "start": "2006",
            "title": "Upper-confidence trees",
            "description": "UCT applied bandit confidence bounds inside Monte Carlo tree search, enabling strong planning in vast game spaces."
        },
        {
            "start": "2009",
            "title": "Inverse reinforcement learning matures",
            "description": "Agents inferred reward functions from expert behavior, reframing imitation as recovery of hidden objectives."
        },
        {
            "start": "2011",
            "title": "DAgger",
            "description": "Dataset Aggregation repeatedly queried an expert on learner-visited states, reducing compounding errors in imitation learning."
        },
        {
            "start": "2012",
            "title": "Monte Carlo tree search in computer Go",
            "description": "MCTS with learned or handcrafted policies became the dominant search framework before AlphaGo."
        },
        {
            "start": "2013",
            "title": "Deep Q-network breakthrough",
            "description": "A single deep reinforcement-learning algorithm learned multiple Atari games directly from pixels and rewards."
        },
        {
            "start": "2015",
            "title": "Trust-region policy optimization",
            "description": "TRPO constrained policy updates by a divergence limit, improving stability of large neural policies."
        },
        {
            "start": "2015",
            "title": "Deep deterministic policy gradient",
            "description": "DDPG combined actor–critic learning with deterministic policies for continuous control."
        },
        {
            "start": "2016",
            "title": "AlphaGo policy, value and tree search",
            "description": "DeepMind combined supervised learning, reinforcement learning, value networks and MCTS to defeat Lee Sedol."
        },
        {
            "start": "2016",
            "title": "Asynchronous deep RL",
            "description": "Parallel actor-learners stabilized policy learning and reduced dependence on replay buffers."
        },
        {
            "start": "2017",
            "title": "AlphaZero",
            "description": "Self-play, neural policy–value prediction and MCTS learned chess, shogi and Go without human game records."
        },
        {
            "start": "2017",
            "title": "Soft actor–critic",
            "description": "Maximum-entropy reinforcement learning optimized reward while encouraging diverse exploratory behavior."
        },
        {
            "start": "2018",
            "title": "IMPALA",
            "description": "Distributed actors generated experience at scale while V-trace corrected off-policy learning."
        },
        {
            "start": "2018",
            "title": "OpenAI Five",
            "description": "Large-scale self-play and distributed reinforcement learning achieved professional-level team play in Dota 2."
        },
        {
            "start": "2019",
            "title": "MuZero",
            "description": "MuZero learned a latent dynamics model sufficient for planning without reconstructing the environment’s observations."
        },
        {
            "start": "2019",
            "title": "AlphaStar",
            "description": "DeepMind combined league-based self-play, imitation and multi-agent reinforcement learning for grandmaster-level StarCraft II."
        },
        {
            "start": "2020",
            "title": "Conservative Q-learning",
            "description": "CQL learned offline policies while penalizing overestimated values on actions not supported by the dataset."
        },
        {
            "start": "2020",
            "title": "Dreamer world models",
            "description": "Agents learned compact latent dynamics and optimized behavior through imagined trajectories."
        },
        {
            "start": "2021",
            "title": "Decision Transformer",
            "description": "Offline control was modeled as conditional sequence prediction over states, actions and returns."
        },
        {
            "start": "2021",
            "title": "Reward modeling from human preferences scales",
            "description": "Preference comparisons became a central supervisory signal for aligning large language models and agents."
        },
        {
            "start": "2022",
            "title": "SayCan",
            "description": "Language-model affordance scores were combined with robot skill values to plan executable household actions."
        },
        {
            "start": "2022",
            "title": "RT-1",
            "description": "A Transformer-based robot policy learned hundreds of real-world manipulation tasks from a large demonstration dataset."
        },
        {
            "start": "2023",
            "title": "RT-2 vision-language-action model",
            "description": "Internet-scale visual-language knowledge was transferred into robot action tokens for improved generalization."
        },
        {
            "start": "2023",
            "title": "Tree of Thoughts",
            "description": "Language-model reasoning was organized as search over multiple candidate thought states rather than one linear chain."
        },
        {
            "start": "2023",
            "title": "Reflexion",
            "description": "Agents used verbal feedback and episodic memory to improve behavior across repeated attempts without changing model weights."
        },
        {
            "start": "2023",
            "title": "Voyager",
            "description": "An LLM-driven Minecraft agent autonomously built a reusable skill library through exploration and code generation."
        },
        {
            "start": "2024",
            "title": "Computer-use agents",
            "description": "Multimodal models began controlling graphical user interfaces through screenshots, mouse and keyboard actions."
        },
        {
            "start": "2024",
            "title": "Reasoning reinforcement learning with verifiable rewards",
            "description": "Mathematics and coding tasks provided automatically checkable rewards for scaling long-form reasoning behavior."
        },
        {
            "start": "2025",
            "title": "End-to-end deep-search agents",
            "description": "Agents were trained to formulate queries, browse many sources, synthesize evidence and persist over long research trajectories."
        },
        {
            "start": "2025",
            "title": "Native tool-use reasoning models",
            "description": "Frontier reasoning models integrated browsing, code execution, file analysis and visual reasoning inside one deliberative loop."
        },
        {
            "start": "2026",
            "title": "Long-horizon agent training",
            "description": "Training increasingly targeted hours-long software, research and professional workflows with persistent state and verification."
        }
    ]
};

// Important researchers and builders
var tl_people = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1721",
            "title": "Thomas Bayes (1701–1761)",
            "description": "Developed the inverse-probability idea that became Bayesian inference."
        },
        {
            "start": "1835",
            "title": "George Boole (1815–1864)",
            "description": "Created algebraic logic, a foundation of digital computation and symbolic reasoning."
        },
        {
            "start": "1914",
            "title": "Norbert Wiener (1894–1964)",
            "description": "Founded cybernetics and connected feedback, control, communication and learning."
        },
        {
            "start": "1918",
            "title": "Warren McCulloch (1898–1969)",
            "description": "Co-created the first influential mathematical model of neural computation."
        },
        {
            "start": "1921",
            "title": "Arthur Samuel (1901–1990)",
            "description": "Pioneered self-learning game programs and practical machine learning."
        },
        {
            "start": "1923",
            "title": "John von Neumann (1903–1957)",
            "description": "Shaped stored-program computing, game theory and the mathematical architecture of intelligent machines."
        },
        {
            "start": "1924",
            "title": "Donald Hebb (1904–1985)",
            "description": "Proposed a synaptic learning principle that inspired connectionist learning rules."
        },
        {
            "start": "1930",
            "title": "Margaret Masterman (1910–1986)",
            "description": "Advanced computational linguistics, semantic networks and early machine translation."
        },
        {
            "start": "1932",
            "title": "Alan Turing (1912–1954)",
            "description": "Defined computation, proposed machine intelligence tests and helped establish the conceptual foundations of AI."
        },
        {
            "start": "1936",
            "title": "Claude Shannon (1916–2001)",
            "description": "Founded information theory and applied logic and search ideas to machines and games."
        },
        {
            "start": "1936",
            "title": "Herbert A. Simon (1916–2001)",
            "description": "Co-created symbolic problem solving and developed influential theories of bounded rationality."
        },
        {
            "start": "1941",
            "title": "Lotfi A. Zadeh (1921–2017)",
            "description": "Founded fuzzy-set theory and approximate reasoning."
        },
        {
            "start": "1943",
            "title": "Walter Pitts (1923–1969)",
            "description": "Co-authored the logical-neuron model that linked brains with computation."
        },
        {
            "start": "1947",
            "title": "John McCarthy (1927–2011)",
            "description": "Coined artificial intelligence, created Lisp and shaped symbolic AI and time-sharing."
        },
        {
            "start": "1947",
            "title": "Marvin Minsky (1927–2016)",
            "description": "Co-founded the MIT AI Laboratory and made foundational contributions to symbolic and neural AI."
        },
        {
            "start": "1947",
            "title": "Allen Newell (1927–1992)",
            "description": "Co-created Logic Theorist and General Problem Solver and helped found cognitive science."
        },
        {
            "start": "1948",
            "title": "Frank Rosenblatt (1928–1971)",
            "description": "Invented the perceptron and an early trainable neural-learning rule."
        },
        {
            "start": "1948",
            "title": "Leo Breiman (1928–2005)",
            "description": "Developed CART, bagging and random forests and championed predictive algorithmic modeling."
        },
        {
            "start": "1953",
            "title": "Nils J. Nilsson (1933–2019)",
            "description": "Advanced search, planning, robotics and the architecture of intelligent agents."
        },
        {
            "start": "1955",
            "title": "Karen Spärck Jones (1935–2007)",
            "description": "Pioneered information retrieval, inverse document frequency and natural-language processing."
        },
        {
            "start": "1956",
            "title": "Edward Feigenbaum (1936–2021)",
            "description": "Led expert-system research and the knowledge-engineering movement."
        },
        {
            "start": "1956",
            "title": "Judea Pearl (1936–)",
            "description": "Created modern Bayesian networks and transformed causal inference."
        },
        {
            "start": "1956",
            "title": "Vladimir Vapnik (1936–)",
            "description": "Co-developed statistical learning theory, VC dimension and support-vector machines."
        },
        {
            "start": "1962",
            "title": "David Rumelhart (1942–2011)",
            "description": "Popularized backpropagation and distributed representations in cognitive modeling."
        },
        {
            "start": "1963",
            "title": "J. Ross Quinlan (1943–)",
            "description": "Created ID3, C4.5 and influential decision-tree learning methods."
        },
        {
            "start": "1967",
            "title": "Geoffrey Hinton (1947–)",
            "description": "Advanced backpropagation, distributed representations, Boltzmann machines and the deep-learning revival."
        },
        {
            "start": "1968",
            "title": "Andrew Barto (1948–)",
            "description": "Co-developed actor–critic methods and the modern foundations of reinforcement learning."
        },
        {
            "start": "1968",
            "title": "Barbara Grosz (1948–)",
            "description": "Pioneered discourse modeling, collaborative agents and responsible AI institutions."
        },
        {
            "start": "1969",
            "title": "Leslie Valiant (1949–)",
            "description": "Created PAC learning theory and major results in computational learning and complexity."
        },
        {
            "start": "1971",
            "title": "Tom M. Mitchell (1951–)",
            "description": "Helped formalize inductive learning and educated generations through foundational machine-learning texts."
        },
        {
            "start": "1974",
            "title": "Rodney Brooks (1954–)",
            "description": "Pioneered behavior-based robotics and challenged purely symbolic approaches to intelligence."
        },
        {
            "start": "1976",
            "title": "Michael I. Jordan (1956–)",
            "description": "Shaped probabilistic machine learning, variational inference and statistical foundations of AI."
        },
        {
            "start": "1976",
            "title": "Peter Norvig (1956–)",
            "description": "Advanced AI education, probabilistic NLP and large-scale intelligent systems."
        },
        {
            "start": "1977",
            "title": "Richard S. Sutton (1957–)",
            "description": "Developed temporal-difference learning and a unified modern theory of reinforcement learning."
        },
        {
            "start": "1980",
            "title": "Yann LeCun (1960–)",
            "description": "Pioneered convolutional neural networks and modern representation learning."
        },
        {
            "start": "1982",
            "title": "Stuart Russell (1962–)",
            "description": "Advanced rational-agent theory, probabilistic AI and research on beneficial artificial intelligence."
        },
        {
            "start": "1982",
            "title": "Rosalind Picard (1962–)",
            "description": "Founded affective computing and research on machines that recognize human emotion."
        },
        {
            "start": "1983",
            "title": "Jürgen Schmidhuber (1963–)",
            "description": "Advanced recurrent networks, LSTM-era research, compression and self-improving agents."
        },
        {
            "start": "1984",
            "title": "Yoshua Bengio (1964–)",
            "description": "Pioneered neural language models, representation learning and deep learning."
        },
        {
            "start": "1987",
            "title": "Sepp Hochreiter (1967–)",
            "description": "Analyzed vanishing gradients and co-invented LSTM."
        },
        {
            "start": "1987",
            "title": "Sebastian Thrun (1967–)",
            "description": "Advanced probabilistic robotics, autonomous vehicles and large-scale online AI education."
        },
        {
            "start": "1987",
            "title": "Cynthia Breazeal (1967–)",
            "description": "Pioneered social robotics and human–robot interaction."
        },
        {
            "start": "1988",
            "title": "Daphne Koller (1968–)",
            "description": "Advanced probabilistic graphical models, computational biology and online education."
        },
        {
            "start": "1988",
            "title": "Jeff Dean (1968–)",
            "description": "Built large-scale machine-learning systems and led major deep-learning infrastructure and model programs at Google."
        },
        {
            "start": "1990",
            "title": "Regina Barzilay (1970–)",
            "description": "Advanced natural-language processing and machine learning for medicine and scientific discovery."
        },
        {
            "start": "1994",
            "title": "Kate Crawford (1974–)",
            "description": "Analyzed the social, political, labor and environmental systems behind artificial intelligence."
        },
        {
            "start": "1996",
            "title": "Fei-Fei Li (1976–)",
            "description": "Created ImageNet and advanced computer vision, embodied AI and human-centered AI."
        },
        {
            "start": "1996",
            "title": "Andrew Ng (1976–)",
            "description": "Advanced deep learning, large-scale AI education and practical industrial machine learning."
        },
        {
            "start": "1996",
            "title": "Demis Hassabis (1976–)",
            "description": "Co-founded DeepMind and led breakthroughs including AlphaGo and AlphaFold."
        },
        {
            "start": "1996",
            "title": "David Silver (1976–)",
            "description": "Led major reinforcement-learning advances from AlphaGo through AlphaZero and MuZero."
        },
        {
            "start": "1996",
            "title": "Cynthia Rudin (1976–)",
            "description": "Advanced interpretable machine learning and argued for transparent models in high-stakes decisions."
        },
        {
            "start": "1997",
            "title": "Pieter Abbeel (1977–)",
            "description": "Advanced robot learning, imitation learning and deep reinforcement learning."
        },
        {
            "start": "2001",
            "title": "Alex Graves (1981–)",
            "description": "Developed CTC and major recurrent-network methods for speech and sequence learning."
        },
        {
            "start": "2002",
            "title": "Anima Anandkumar (1982–)",
            "description": "Advanced tensor methods, deep learning, scientific AI and scalable machine-learning systems."
        },
        {
            "start": "2003",
            "title": "Timnit Gebru (1983–)",
            "description": "Advanced computer vision and landmark research on dataset bias, model documentation and AI accountability."
        },
        {
            "start": "2003",
            "title": "Dario Amodei (1983–)",
            "description": "Led frontier language-model development and co-founded Anthropic with an emphasis on safety and alignment."
        },
        {
            "start": "2004",
            "title": "Kaiming He (1984–)",
            "description": "Created residual networks and major advances in visual representation learning and detection."
        },
        {
            "start": "2005",
            "title": "Ian Goodfellow (1985–)",
            "description": "Invented generative adversarial networks and advanced deep-learning security and representation learning."
        },
        {
            "start": "2005",
            "title": "Sam Altman (1985–)",
            "description": "Led OpenAI during the mass deployment of ChatGPT and successive frontier-model generations."
        },
        {
            "start": "2006",
            "title": "Ilya Sutskever (1986–)",
            "description": "Co-created AlexNet, sequence-to-sequence learning and major large-language-model programs."
        },
        {
            "start": "2006",
            "title": "Alex Krizhevsky (1986–)",
            "description": "Built AlexNet and demonstrated decisive GPU-trained convolutional vision performance."
        },
        {
            "start": "2006",
            "title": "Andrej Karpathy (1986–)",
            "description": "Advanced convolutional vision, neural language modeling, autonomous-driving AI and practical AI education."
        },
        {
            "start": "2007",
            "title": "Sergey Levine (1987–)",
            "description": "Advanced deep reinforcement learning, robot learning and generalist control policies."
        },
        {
            "start": "2009",
            "title": "Joy Buolamwini (1989–)",
            "description": "Exposed demographic bias in commercial facial analysis and founded algorithmic-justice advocacy."
        },
        {
            "start": "2012",
            "title": "Chelsea Finn (1992–)",
            "description": "Advanced meta-learning, robot learning and methods for agents that adapt from limited experience."
        }
    ]
};

// Datasets, benchmarks and evaluation
var tl_data_eval = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1960",
            "title": "Early machine-translation corpora",
            "description": "Parallel text collections began to support empirical evaluation of machine translation beyond hand-picked demonstrations."
        },
        {
            "start": "1987",
            "title": "Penn Treebank project begins",
            "description": "Large syntactically annotated corpora made supervised parsing and comparable NLP evaluation possible."
        },
        {
            "start": "1993",
            "title": "MNIST predecessors and digit benchmarks",
            "description": "Standardized handwritten-digit datasets enabled reproducible comparison of pattern-recognition algorithms."
        },
        {
            "start": "1998",
            "title": "MNIST",
            "description": "LeCun and collaborators released a widely used handwritten-digit benchmark that became a gateway dataset for neural networks."
        },
        {
            "start": "1998",
            "title": "TREC evaluation campaigns mature",
            "description": "Shared information-retrieval tasks established test collections, relevance judgments and common metrics at scale."
        },
        {
            "start": "2001",
            "title": "Reuters-21578 becomes a standard text-classification corpus",
            "description": "Newswire categories supported reproducible evaluation of statistical text classification."
        },
        {
            "start": "2004",
            "title": "Pascal VOC challenge",
            "description": "A shared object-recognition dataset and annual competition standardized visual detection and segmentation evaluation."
        },
        {
            "start": "2005",
            "title": "DARPA Grand Challenge benchmarks autonomous driving",
            "description": "A desert-road competition provided a real-world systems benchmark for perception, planning and robotic control."
        },
        {
            "start": "2006",
            "title": "Netflix Prize dataset and competition",
            "description": "A large recommendation challenge accelerated collaborative filtering, matrix factorization and ensemble methods."
        },
        {
            "start": "2007",
            "title": "CIFAR-10 and CIFAR-100",
            "description": "Small labeled natural-image datasets became standard for rapidly testing visual representation methods."
        },
        {
            "start": "2007",
            "title": "Labeled Faces in the Wild",
            "description": "Unconstrained face photographs shifted evaluation from controlled laboratories toward real-world variation."
        },
        {
            "start": "2009",
            "title": "ImageNet",
            "description": "A large, hierarchically labeled image database provided the data scale that transformed visual recognition."
        },
        {
            "start": "2010",
            "title": "ImageNet Large Scale Visual Recognition Challenge",
            "description": "The annual challenge enabled direct comparison on large-scale classification, localization and detection."
        },
        {
            "start": "2011",
            "title": "KITTI vision benchmark",
            "description": "Real driving data standardized evaluation for stereo vision, optical flow, detection and autonomous-driving perception."
        },
        {
            "start": "2011",
            "title": "Stanford Sentiment Treebank",
            "description": "Phrase-level sentiment labels supported compositional language-understanding research."
        },
        {
            "start": "2012",
            "title": "AlexNet wins ILSVRC",
            "description": "A large performance gap over conventional vision methods made ImageNet the emblematic deep-learning benchmark."
        },
        {
            "start": "2014",
            "title": "MS COCO",
            "description": "Dense object annotations and natural captions supported detection, segmentation and image-language research."
        },
        {
            "start": "2014",
            "title": "SQuAD-style reading-comprehension datasets emerge",
            "description": "Question answering over passages turned language understanding into a large supervised benchmark problem."
        },
        {
            "start": "2015",
            "title": "Atari Learning Environment",
            "description": "A common interface and game suite standardized deep reinforcement-learning evaluation from pixels."
        },
        {
            "start": "2015",
            "title": "Cityscapes",
            "description": "High-quality street-scene annotations advanced semantic segmentation for autonomous driving."
        },
        {
            "start": "2015",
            "title": "LibriSpeech",
            "description": "About one thousand hours of read English speech became a central open benchmark for automatic speech recognition."
        },
        {
            "start": "2016",
            "title": "OpenAI Gym",
            "description": "A common environment API lowered barriers to comparing reinforcement-learning algorithms."
        },
        {
            "start": "2016",
            "title": "VQA benchmark",
            "description": "Visual question answering required systems to combine image understanding with natural-language reasoning."
        },
        {
            "start": "2016",
            "title": "bAbI and synthetic reasoning tasks",
            "description": "Controlled tasks isolated memory, inference and compositional reasoning capabilities."
        },
        {
            "start": "2017",
            "title": "GLUE benchmark",
            "description": "A collection of language-understanding tasks encouraged general transferable representations rather than single-task systems."
        },
        {
            "start": "2017",
            "title": "AI2 Reasoning Challenge",
            "description": "Grade-school science questions tested retrieval, language understanding and multi-step reasoning."
        },
        {
            "start": "2018",
            "title": "SuperGLUE",
            "description": "A harder benchmark followed rapid saturation of GLUE and emphasized reasoning, coreference and reading comprehension."
        },
        {
            "start": "2018",
            "title": "MLPerf",
            "description": "An industry consortium standardized training and inference measurements across hardware and machine-learning workloads."
        },
        {
            "start": "2018",
            "title": "WMT benchmark reaches neural era maturity",
            "description": "Shared translation tasks tracked rapid Transformer improvements across many language pairs."
        },
        {
            "start": "2019",
            "title": "Natural Questions",
            "description": "Real Google search queries paired with Wikipedia evidence made open-domain question answering more realistic."
        },
        {
            "start": "2019",
            "title": "BIG-bench project begins",
            "description": "A collaborative benchmark collected diverse tasks intended to reveal emerging and unexpected language-model capabilities."
        },
        {
            "start": "2020",
            "title": "MMLU",
            "description": "Massive Multitask Language Understanding tested broad academic and professional knowledge across many subjects."
        },
        {
            "start": "2020",
            "title": "HumanEval",
            "description": "Handwritten programming problems with unit tests became a widely used benchmark for code-generation models."
        },
        {
            "start": "2020",
            "title": "TruthfulQA",
            "description": "Questions designed around common misconceptions measured whether language models reproduce false beliefs."
        },
        {
            "start": "2021",
            "title": "HELM",
            "description": "Stanford proposed holistic language-model evaluation across accuracy, calibration, robustness, fairness and efficiency."
        },
        {
            "start": "2021",
            "title": "BIG-bench released",
            "description": "More than two hundred tasks broadened evaluation beyond standard academic benchmarks and exposed scaling behaviors."
        },
        {
            "start": "2021",
            "title": "WILDS",
            "description": "Real-world distribution shifts became a shared benchmark for robustness outside independent-and-identically-distributed data."
        },
        {
            "start": "2022",
            "title": "SWE-bench concept emerges",
            "description": "Repository-level software issues reframed code evaluation around realistic multi-file engineering tasks."
        },
        {
            "start": "2022",
            "title": "MT-Bench and chat-model evaluation",
            "description": "Multi-turn conversational prompts and model-based judging became common for comparing instruction-following assistants."
        },
        {
            "start": "2022",
            "title": "LAION-5B",
            "description": "Billions of image–text pairs supplied a public-scale dataset for training open multimodal and diffusion models."
        },
        {
            "start": "2023",
            "title": "Chatbot Arena",
            "description": "Anonymous pairwise human preference voting created a rapidly updating public comparison of conversational models."
        },
        {
            "start": "2023",
            "title": "SWE-bench",
            "description": "Real GitHub issues and repository tests measured whether language models can resolve practical software-engineering tasks."
        },
        {
            "start": "2023",
            "title": "MMMU",
            "description": "A multidisciplinary multimodal benchmark tested expert-level reasoning over diagrams, charts, photographs and text."
        },
        {
            "start": "2023",
            "title": "AgentBench",
            "description": "Multiple interactive environments evaluated planning, tool use and long-horizon agent behavior."
        },
        {
            "start": "2023",
            "title": "MATH and GSM-style reasoning benchmarks become central",
            "description": "Verifiable mathematical answers became key signals for evaluating and training reasoning models."
        },
        {
            "start": "2024",
            "title": "GPQA Diamond",
            "description": "Expert-written graduate-level science questions targeted reasoning resistant to simple web retrieval."
        },
        {
            "start": "2024",
            "title": "SWE-bench Verified",
            "description": "A human-validated subset improved reliability of repository-level coding evaluation."
        },
        {
            "start": "2024",
            "title": "Humanity’s Last Exam project",
            "description": "A broad expert-authored benchmark targeted frontier knowledge and reasoning beyond saturated tests."
        },
        {
            "start": "2024",
            "title": "FrontierMath",
            "description": "Research-level mathematical problems with verifiable answers tested the limits of model reasoning."
        },
        {
            "start": "2024",
            "title": "OSWorld",
            "description": "Real computer tasks across operating-system applications evaluated multimodal computer-use agents."
        },
        {
            "start": "2024",
            "title": "LiveBench",
            "description": "Frequently refreshed questions attempted to reduce benchmark contamination and track current model capability."
        },
        {
            "start": "2025",
            "title": "Terminal-Bench",
            "description": "Command-line environments tested agents on multi-step software and system-administration work."
        },
        {
            "start": "2025",
            "title": "GDPval",
            "description": "Professional work products across many occupations became a benchmark for economically relevant agent capability."
        },
        {
            "start": "2025",
            "title": "MCP and tool-use benchmarks expand",
            "description": "Evaluation increasingly measured reliable function calling, multi-tool coordination and stateful workflows."
        },
        {
            "start": "2026",
            "title": "Long-horizon professional-agent evaluations",
            "description": "Benchmarks increasingly score complete research, coding, document and operational workflows rather than isolated answers."
        }
    ]
};

// Hardware, software and research infrastructure
var tl_infrastructure = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1946",
            "title": "ENIAC demonstrated",
            "description": "Electronic general-purpose computation made large numerical procedures practical and accelerated interest in machine intelligence."
        },
        {
            "start": "1948",
            "title": "Manchester Baby runs stored program",
            "description": "A stored program executed electronically, establishing the architecture used by later AI software."
        },
        {
            "start": "1956",
            "title": "Dartmouth workshop",
            "description": "The summer research project gathered leading researchers and established artificial intelligence as a named academic field."
        },
        {
            "start": "1958",
            "title": "Lisp",
            "description": "John McCarthy created a language centered on symbolic lists, recursion and interactive development for AI research."
        },
        {
            "start": "1963",
            "title": "MIT Project MAC",
            "description": "Time-sharing and interactive computing provided an institutional base for AI laboratories and hacker culture."
        },
        {
            "start": "1969",
            "title": "ARPANET begins operation",
            "description": "Networked computing later enabled distributed datasets, remote collaboration and cloud-scale AI services."
        },
        {
            "start": "1973",
            "title": "Prolog implementation spreads",
            "description": "Logic programming infrastructure supported theorem proving, natural-language research and expert systems."
        },
        {
            "start": "1979",
            "title": "Lisp machines commercialized",
            "description": "Specialized workstations offered interactive symbolic computing optimized for expert-system development."
        },
        {
            "start": "1982",
            "title": "Japan launches Fifth Generation Computer Systems project",
            "description": "A national program invested heavily in logic programming, parallel computing and knowledge processing."
        },
        {
            "start": "1986",
            "title": "Connection Machine",
            "description": "Massively parallel hardware explored data-parallel approaches relevant to neural and symbolic workloads."
        },
        {
            "start": "1987",
            "title": "Neural Information Processing Systems conference begins",
            "description": "NeurIPS created a durable meeting point for neural computation, statistics, optimization and machine learning."
        },
        {
            "start": "1989",
            "title": "World Wide Web proposed",
            "description": "The web later supplied unprecedented text, image and interaction data for machine learning and model deployment."
        },
        {
            "start": "1991",
            "title": "Python released",
            "description": "A readable general-purpose language became the dominant interface for scientific computing and machine learning."
        },
        {
            "start": "1995",
            "title": "Java and web-scale software era",
            "description": "Portable networked applications expanded the environments in which intelligent services could be deployed."
        },
        {
            "start": "1997",
            "title": "CUDA-era GPU precursors",
            "description": "Programmable graphics pipelines began exposing massively parallel arithmetic useful beyond rendering."
        },
        {
            "start": "2002",
            "title": "Torch scientific machine-learning framework",
            "description": "Torch provided tensor operations and neural-network modules, influencing later deep-learning frameworks."
        },
        {
            "start": "2004",
            "title": "MapReduce",
            "description": "Google’s distributed data-processing abstraction enabled learning pipelines over web-scale datasets."
        },
        {
            "start": "2006",
            "title": "Amazon EC2 launches",
            "description": "On-demand cloud computing lowered barriers to scaling data processing and model training."
        },
        {
            "start": "2006",
            "title": "NVIDIA CUDA",
            "description": "A general-purpose GPU programming platform made highly parallel accelerators accessible to machine-learning researchers."
        },
        {
            "start": "2007",
            "title": "scikit-learn project begins",
            "description": "A consistent open-source Python API made classical machine-learning algorithms broadly accessible."
        },
        {
            "start": "2008",
            "title": "Hadoop ecosystem expands",
            "description": "Commodity clusters supported distributed storage and computation for large-scale data analytics."
        },
        {
            "start": "2009",
            "title": "ImageNet data infrastructure scales",
            "description": "Crowdsourcing and hierarchical labeling demonstrated how internet-scale datasets could be constructed."
        },
        {
            "start": "2010",
            "title": "GPU deep-learning software stack matures",
            "description": "CUDA kernels, optimized convolutions and research code made large neural training increasingly practical."
        },
        {
            "start": "2011",
            "title": "Apache Spark",
            "description": "In-memory distributed computing accelerated iterative analytics and machine-learning pipelines."
        },
        {
            "start": "2012",
            "title": "Google Brain DistBelief",
            "description": "Distributed neural-network training across many machines demonstrated the viability of scaling deep learning."
        },
        {
            "start": "2013",
            "title": "Caffe",
            "description": "A fast modular convolutional framework helped standardize reproducible computer-vision research and deployment."
        },
        {
            "start": "2014",
            "title": "Kubernetes",
            "description": "Container orchestration later became central to operating distributed machine-learning services and accelerators."
        },
        {
            "start": "2015",
            "title": "TensorFlow released",
            "description": "Google open-sourced a dataflow framework for scalable training, inference and deployment across devices."
        },
        {
            "start": "2015",
            "title": "cuDNN adoption accelerates",
            "description": "Optimized GPU primitives for convolutions and recurrent networks standardized high-performance deep-learning kernels."
        },
        {
            "start": "2016",
            "title": "PyTorch released",
            "description": "Dynamic computation graphs and a Python-first design made experimentation and research implementation more natural."
        },
        {
            "start": "2016",
            "title": "Google TPU announced",
            "description": "A custom tensor accelerator signaled the rise of hardware designed specifically for neural-network workloads."
        },
        {
            "start": "2016",
            "title": "OpenAI Universe",
            "description": "A platform exposed many software environments through a common interface for general agent training."
        },
        {
            "start": "2017",
            "title": "Transformer training on TPU pods",
            "description": "Large accelerator clusters demonstrated rapid parallel training of attention-based sequence models."
        },
        {
            "start": "2017",
            "title": "ONNX",
            "description": "An open model-exchange format improved portability among training frameworks and inference runtimes."
        },
        {
            "start": "2018",
            "title": "NVIDIA Tensor Cores spread",
            "description": "Mixed-precision matrix hardware sharply increased neural-network throughput."
        },
        {
            "start": "2018",
            "title": "Hugging Face Transformers project begins",
            "description": "A shared open-source library made pretrained Transformer models easy to distribute, fine-tune and reproduce."
        },
        {
            "start": "2019",
            "title": "JAX",
            "description": "Composable automatic differentiation, vectorization and compilation enabled high-performance numerical and ML research."
        },
        {
            "start": "2019",
            "title": "ML accelerators diversify",
            "description": "Cloud TPUs, GPUs, FPGAs and dedicated inference chips created a heterogeneous AI-compute ecosystem."
        },
        {
            "start": "2020",
            "title": "A100 GPU",
            "description": "NVIDIA’s Ampere accelerator increased mixed-precision training capacity and enabled larger foundation models."
        },
        {
            "start": "2020",
            "title": "DeepSpeed",
            "description": "Microsoft released optimization techniques for memory-efficient distributed training of very large models."
        },
        {
            "start": "2020",
            "title": "Megatron-LM and tensor parallelism spread",
            "description": "Model-parallel training divided giant Transformer layers across accelerators."
        },
        {
            "start": "2021",
            "title": "MLOps platforms mature",
            "description": "Versioned data, experiments, models, monitoring and deployment became formal production disciplines."
        },
        {
            "start": "2021",
            "title": "GitHub Copilot technical preview",
            "description": "Cloud-delivered code generation became an integrated developer tool rather than a standalone research demo."
        },
        {
            "start": "2022",
            "title": "H100 GPU",
            "description": "Transformer Engine and fourth-generation Tensor Cores targeted large language-model training and inference."
        },
        {
            "start": "2022",
            "title": "vLLM project",
            "description": "PagedAttention improved key–value-cache memory management and increased language-model serving throughput."
        },
        {
            "start": "2022",
            "title": "Diffusion-model consumer GPU ecosystem",
            "description": "Open weights, optimized kernels and community interfaces made high-quality image generation runnable on personal hardware."
        },
        {
            "start": "2023",
            "title": "NVIDIA H200 announced",
            "description": "Higher-bandwidth memory targeted the growing memory bottleneck in foundation-model training and inference."
        },
        {
            "start": "2023",
            "title": "Model Context Protocol concept emerges",
            "description": "Standardized connections between models, tools and data sources began to simplify agent integration."
        },
        {
            "start": "2023",
            "title": "Consumer local-LLM runtimes expand",
            "description": "Quantization and optimized runtimes such as llama.cpp enabled useful language models on laptops and edge devices."
        },
        {
            "start": "2024",
            "title": "Blackwell GPU architecture announced",
            "description": "NVIDIA designed a new accelerator generation around trillion-parameter training and high-throughput inference."
        },
        {
            "start": "2024",
            "title": "Inference optimization becomes a primary research frontier",
            "description": "KV-cache compression, continuous batching, quantization and speculative decoding became central to model economics."
        },
        {
            "start": "2024",
            "title": "Large AI superclusters proliferate",
            "description": "Frontier laboratories assembled tens of thousands of accelerators for pretraining and reinforcement-learning workloads."
        },
        {
            "start": "2025",
            "title": "Agent runtime and sandbox infrastructure expands",
            "description": "Secure browsers, code sandboxes, file systems and tool registries became standard components of AI-agent products."
        },
        {
            "start": "2025",
            "title": "Inference-time compute infrastructure scales",
            "description": "Serving systems began allocating variable reasoning budgets, parallel rollouts and verifier compute per request."
        },
        {
            "start": "2026",
            "title": "Agentic compute stacks mature",
            "description": "Long-running state, subagent orchestration, provenance, checkpoints and permissioned tools became first-class infrastructure."
        }
    ]
};

// Landmark systems, models and product releases
var tl_models = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "Logic Theorist",
            "description": "Newell, Simon and Shaw built a program that proved mathematical theorems and became a founding demonstration of symbolic AI."
        },
        {
            "start": "1958",
            "title": "Mark I Perceptron",
            "description": "Rosenblatt’s hardware perceptron learned visual classifications from examples and attracted broad public attention."
        },
        {
            "start": "1959",
            "title": "Samuel checkers program",
            "description": "A self-improving checkers system demonstrated search, evaluation and learning from experience."
        },
        {
            "start": "1965",
            "title": "DENDRAL",
            "description": "The Stanford system inferred molecular structures from mass-spectrometry data and helped establish expert systems."
        },
        {
            "start": "1966",
            "title": "ELIZA",
            "description": "Joseph Weizenbaum’s conversational program used pattern matching to simulate a psychotherapist and exposed human tendencies to anthropomorphize machines."
        },
        {
            "start": "1966",
            "title": "Shakey the Robot",
            "description": "SRI’s mobile robot integrated perception, mapping, planning and action in a common system."
        },
        {
            "start": "1970",
            "title": "SHRDLU",
            "description": "Terry Winograd’s program conversed about and manipulated a simplified blocks world using parsing, reasoning and planning."
        },
        {
            "start": "1972",
            "title": "MYCIN",
            "description": "A rule-based medical expert system recommended antibiotic treatments and became a landmark of knowledge engineering."
        },
        {
            "start": "1980",
            "title": "XCON",
            "description": "Digital Equipment Corporation deployed an expert system to configure computer orders, demonstrating substantial commercial value."
        },
        {
            "start": "1986",
            "title": "NETtalk",
            "description": "Sejnowski and Rosenberg trained a neural network to convert English text into phonemes, showcasing distributed representation learning."
        },
        {
            "start": "1989",
            "title": "ALVINN",
            "description": "A neural network learned to steer a vehicle from camera images and human driving examples."
        },
        {
            "start": "1992",
            "title": "TD-Gammon",
            "description": "Tesauro’s self-playing neural agent reached expert backgammon strength with temporal-difference learning."
        },
        {
            "start": "1997-05-11",
            "title": "Deep Blue defeats Garry Kasparov",
            "description": "IBM’s specialized chess system won a regulation match against the reigning world champion, a major public milestone for machine intelligence."
        },
        {
            "start": "1998",
            "title": "Kismet",
            "description": "MIT’s expressive robot explored social cues, affective interaction and developmental approaches to human–robot communication."
        },
        {
            "start": "1999",
            "title": "Sony AIBO",
            "description": "A commercially sold robotic pet brought autonomous behavior and interactive robotics to consumers."
        },
        {
            "start": "2005",
            "title": "Stanley wins DARPA Grand Challenge",
            "description": "Stanford’s autonomous vehicle completed a desert course, demonstrating robust perception and planning in the physical world."
        },
        {
            "start": "2009",
            "title": "Google self-driving car project begins",
            "description": "A large industrial autonomous-driving program combined mapping, perception, prediction and control at road scale."
        },
        {
            "start": "2011-02-16",
            "title": "IBM Watson wins Jeopardy!",
            "description": "Watson combined information retrieval, question answering, statistical scoring and massive parallelism to defeat top human champions."
        },
        {
            "start": "2011-10-04",
            "title": "Siri launches on iPhone 4S",
            "description": "A voice assistant brought speech recognition and natural-language services into everyday consumer interaction."
        },
        {
            "start": "2012",
            "title": "AlexNet",
            "description": "The ImageNet-winning convolutional network triggered broad adoption of GPU-trained deep learning."
        },
        {
            "start": "2013",
            "title": "word2vec released",
            "description": "Efficient word-embedding models made semantic vector representations widely usable in NLP systems."
        },
        {
            "start": "2013",
            "title": "DeepMind Atari DQN",
            "description": "A single deep Q-network learned multiple video games from raw pixels, connecting deep perception with reinforcement learning."
        },
        {
            "start": "2014",
            "title": "Sequence-to-sequence neural translation",
            "description": "Encoder–decoder LSTMs demonstrated end-to-end neural translation without phrase tables."
        },
        {
            "start": "2014",
            "title": "Generative adversarial network prototype",
            "description": "The first GAN experiments showed realistic samples could emerge from adversarial generator–discriminator training."
        },
        {
            "start": "2014",
            "title": "DeepFace",
            "description": "Facebook’s deep face-recognition system approached human-level verification on unconstrained photographs."
        },
        {
            "start": "2015",
            "title": "Microsoft ResNet",
            "description": "Residual learning enabled networks exceeding one hundred layers and won major ImageNet tasks."
        },
        {
            "start": "2015",
            "title": "Deep Speech 2",
            "description": "Baidu’s end-to-end speech-recognition system showed deep networks could replace many hand-engineered pipeline components."
        },
        {
            "start": "2016",
            "title": "WaveNet",
            "description": "DeepMind’s raw-audio generative model produced markedly more natural speech synthesis."
        },
        {
            "start": "2016-01-27",
            "title": "AlphaGo defeats European champion Fan Hui",
            "description": "Nature reported the first Go program to defeat a professional player on a full board without handicaps."
        },
        {
            "start": "2016-03-15",
            "title": "AlphaGo defeats Lee Sedol",
            "description": "The five-game match displayed neural policy and value networks combined with tree search at a globally visible scale."
        },
        {
            "start": "2017-06-12",
            "title": "Transformer architecture published",
            "description": "“Attention Is All You Need” introduced a parallel self-attention architecture that became the basis of modern foundation models."
        },
        {
            "start": "2017-12-05",
            "title": "AlphaZero preprint",
            "description": "A single self-play system mastered chess, shogi and Go from rules alone."
        },
        {
            "start": "2018-06-11",
            "title": "GPT released",
            "description": "OpenAI demonstrated broad transfer from generative Transformer pretraining to supervised language tasks."
        },
        {
            "start": "2018-10-11",
            "title": "BERT released",
            "description": "Google’s bidirectional masked-language model rapidly became a dominant foundation for NLP fine-tuning."
        },
        {
            "start": "2019",
            "title": "StyleGAN",
            "description": "A style-based generator produced highly realistic faces and controllable latent-space edits."
        },
        {
            "start": "2019-01-24",
            "title": "AlphaStar announced",
            "description": "DeepMind’s multi-agent reinforcement-learning system reached grandmaster level in StarCraft II."
        },
        {
            "start": "2019-02-14",
            "title": "GPT-2 announced",
            "description": "A 1.5-billion-parameter language model generated coherent long-form text and prompted staged-release safety debates."
        },
        {
            "start": "2020",
            "title": "DDPM image generation",
            "description": "Denoising diffusion models reached image quality competitive with prominent generative approaches."
        },
        {
            "start": "2020-05-28",
            "title": "GPT-3 paper released",
            "description": "A 175-billion-parameter autoregressive model displayed strong in-context few-shot learning across many tasks."
        },
        {
            "start": "2020-11-30",
            "title": "AlphaFold2 CASP14 breakthrough announced",
            "description": "DeepMind’s system achieved a major leap in protein-structure prediction accuracy."
        },
        {
            "start": "2021-01-05",
            "title": "DALL·E and CLIP announced",
            "description": "OpenAI paired text-conditioned image generation with large-scale image–text representation learning."
        },
        {
            "start": "2021-05-18",
            "title": "LaMDA announced",
            "description": "Google introduced a dialogue-focused language model trained for open-ended conversation."
        },
        {
            "start": "2021-06-29",
            "title": "GitHub Copilot technical preview",
            "description": "OpenAI Codex-powered code suggestions entered mainstream integrated development environments."
        },
        {
            "start": "2021-08-10",
            "title": "OpenAI Codex API announced",
            "description": "A GPT-derived model translated natural-language instructions into executable code across many programming languages."
        },
        {
            "start": "2022-03-29",
            "title": "Chinchilla announced",
            "description": "DeepMind’s compute-optimal model showed that more training data could outperform larger undertrained models."
        },
        {
            "start": "2022-04-04",
            "title": "PaLM announced",
            "description": "Google scaled a dense language model to 540 billion parameters using Pathways and demonstrated strong few-shot reasoning."
        },
        {
            "start": "2022-04-06",
            "title": "DALL·E 2 announced",
            "description": "Diffusion-based image generation improved realism, composition and natural-language editing."
        },
        {
            "start": "2022-08-22",
            "title": "Stable Diffusion public release",
            "description": "An openly available latent-diffusion model catalyzed a global ecosystem of local image generation and fine-tuning."
        },
        {
            "start": "2022-09-21",
            "title": "Whisper released",
            "description": "OpenAI published a large weakly supervised speech-recognition model with robust multilingual transcription and translation."
        },
        {
            "start": "2022-11-15",
            "title": "Galactica announced",
            "description": "Meta released a language model for scientific knowledge, then withdrew the public demo amid reliability concerns."
        },
        {
            "start": "2022-11-30",
            "title": "ChatGPT launches",
            "description": "A conversational interface to instruction-tuned language models triggered mass public adoption of generative AI."
        },
        {
            "start": "2023-02-24",
            "title": "LLaMA announced",
            "description": "Meta released efficient foundation-model weights to researchers, accelerating the open-weight language-model ecosystem."
        },
        {
            "start": "2023-03-13",
            "title": "Stanford Alpaca announced",
            "description": "A low-cost instruction-tuned LLaMA derivative demonstrated how quickly open models could be adapted with synthetic data."
        },
        {
            "start": "2023-03-14",
            "title": "GPT-4 released",
            "description": "OpenAI launched a more capable multimodal large model with major gains in reasoning and professional benchmarks."
        },
        {
            "start": "2023-03-14",
            "title": "Claude released",
            "description": "Anthropic introduced its conversational assistant and model family with a strong emphasis on helpfulness and safety."
        },
        {
            "start": "2023-04-05",
            "title": "Segment Anything Model released",
            "description": "Meta published a promptable segmentation model and the SA-1B mask dataset."
        },
        {
            "start": "2023-05-10",
            "title": "PaLM 2 announced",
            "description": "Google released a more efficient multilingual model family powering Bard and enterprise AI services."
        },
        {
            "start": "2023-05-25",
            "title": "Falcon 40B released",
            "description": "The Technology Innovation Institute released an influential openly licensed language model trained on a large curated web corpus."
        },
        {
            "start": "2023-07-18",
            "title": "Llama 2 released",
            "description": "Meta and Microsoft broadened commercial access to pretrained and chat-tuned open-weight models."
        },
        {
            "start": "2023-08-03",
            "title": "Qwen-7B released",
            "description": "Alibaba’s Qwen family entered the open-weight ecosystem with multilingual and coding capabilities."
        },
        {
            "start": "2023-08-24",
            "title": "Code Llama released",
            "description": "Meta released code-specialized Llama models for generation, completion and instruction following."
        },
        {
            "start": "2023-09-20",
            "title": "DALL·E 3 announced",
            "description": "Improved prompt understanding and ChatGPT integration made text-to-image generation easier to direct conversationally."
        },
        {
            "start": "2023-09-27",
            "title": "Mistral 7B released",
            "description": "Mistral AI published a compact Apache-licensed model using grouped-query and sliding-window attention."
        },
        {
            "start": "2023-11-04",
            "title": "Grok announced",
            "description": "xAI introduced a conversational model connected to real-time information from X."
        },
        {
            "start": "2023-12-06",
            "title": "Gemini 1.0 announced",
            "description": "Google introduced a natively multimodal model family spanning Ultra, Pro and Nano sizes."
        },
        {
            "start": "2023-12-11",
            "title": "Mixtral 8x7B released",
            "description": "Mistral AI’s sparse mixture-of-experts model delivered strong capability with only a subset of parameters active per token."
        },
        {
            "start": "2024-02-15",
            "title": "Gemini 1.5 announced",
            "description": "Google introduced a mixture-of-experts model with a context window reaching one million tokens in preview."
        },
        {
            "start": "2024-02-15",
            "title": "Sora previewed",
            "description": "OpenAI demonstrated a text-to-video diffusion model capable of generating minute-long coherent scenes."
        },
        {
            "start": "2024-03-04",
            "title": "Claude 3 family released",
            "description": "Anthropic launched Haiku, Sonnet and Opus models with stronger reasoning, vision and long-context performance."
        },
        {
            "start": "2024-03-17",
            "title": "Grok-1 open weights released",
            "description": "xAI published weights and architecture details for a large mixture-of-experts language model."
        },
        {
            "start": "2024-03-27",
            "title": "DBRX released",
            "description": "Databricks published an open mixture-of-experts model aimed at strong enterprise and programming performance."
        },
        {
            "start": "2024-04-18",
            "title": "Llama 3 released",
            "description": "Meta released 8B and 70B pretrained and instruction-tuned models with substantial capability improvements."
        },
        {
            "start": "2024-04-23",
            "title": "Phi-3 Mini released",
            "description": "Microsoft showed that carefully curated and synthetic data could produce capable small language models."
        },
        {
            "start": "2024-05-13",
            "title": "GPT-4o released",
            "description": "OpenAI introduced an omni model designed for low-latency text, vision and audio interaction."
        },
        {
            "start": "2024-06-20",
            "title": "Claude 3.5 Sonnet released",
            "description": "Anthropic introduced a mid-tier model with major gains in coding, reasoning and visual understanding."
        },
        {
            "start": "2024-06-27",
            "title": "Gemma 2 released",
            "description": "Google released improved open models in several sizes, including a 27-billion-parameter version."
        },
        {
            "start": "2024-07-18",
            "title": "GPT-4o mini released",
            "description": "OpenAI launched a cost-efficient small multimodal model for high-volume applications."
        },
        {
            "start": "2024-07-23",
            "title": "Llama 3.1 released",
            "description": "Meta published an open-weight 405B model alongside improved 8B and 70B variants."
        },
        {
            "start": "2024-07-24",
            "title": "Mistral Large 2 released",
            "description": "Mistral AI introduced a 123B multilingual model optimized for coding and long-context single-node inference."
        },
        {
            "start": "2024-08-01",
            "title": "FLUX.1 released",
            "description": "Black Forest Labs introduced open and hosted rectified-flow image models with strong prompt adherence and visual quality."
        },
        {
            "start": "2024-09-12",
            "title": "OpenAI o1-preview released",
            "description": "A new model series was trained to spend more inference time reasoning through difficult problems."
        },
        {
            "start": "2024-09-19",
            "title": "Qwen2.5 released",
            "description": "Alibaba expanded its open model family across general language, coding and mathematics with broad multilingual support."
        },
        {
            "start": "2024-09-25",
            "title": "Llama 3.2 released",
            "description": "Meta introduced vision-language models and lightweight text models for edge and mobile devices."
        },
        {
            "start": "2024-10-22",
            "title": "Claude computer use preview",
            "description": "Anthropic exposed a model-controlled desktop interface using screenshots, mouse and keyboard actions."
        },
        {
            "start": "2024-12-11",
            "title": "Gemini 2.0 announced",
            "description": "Google positioned Gemini 2.0 as an agentic multimodal model family with native tool use and live interaction."
        },
        {
            "start": "2024-12-26",
            "title": "DeepSeek-V3 released",
            "description": "DeepSeek published an efficient large mixture-of-experts model and technical report under open terms."
        },
        {
            "start": "2025-01-20",
            "title": "DeepSeek-R1 released",
            "description": "An open reasoning model demonstrated strong mathematics and coding performance through reinforcement-learning-centered post-training."
        },
        {
            "start": "2025-01-31",
            "title": "OpenAI o3-mini released",
            "description": "OpenAI launched a smaller reasoning model optimized for science, mathematics and coding efficiency."
        },
        {
            "start": "2025-02-02",
            "title": "OpenAI deep research launched",
            "description": "A browsing agent synthesized many online sources into documented research reports over extended runs."
        },
        {
            "start": "2025-02-24",
            "title": "Claude 3.7 Sonnet released",
            "description": "Anthropic introduced a hybrid model supporting both immediate answers and extended visible reasoning."
        },
        {
            "start": "2025-02-27",
            "title": "GPT-4.5 released",
            "description": "OpenAI introduced a large general-purpose model emphasizing broader knowledge, natural interaction and reduced hallucination."
        },
        {
            "start": "2025-03-12",
            "title": "Gemma 3 released",
            "description": "Google released open multimodal models with long context and broad multilingual support across deployable sizes."
        },
        {
            "start": "2025-03-25",
            "title": "Gemini 2.5 Pro Experimental released",
            "description": "Google introduced a thinking model with stronger reasoning, coding, native multimodality and a million-token context window."
        },
        {
            "start": "2025-04-05",
            "title": "Llama 4 Scout and Maverick released",
            "description": "Meta launched natively multimodal sparse mixture-of-experts models, including an exceptionally long-context Scout variant."
        },
        {
            "start": "2025-04-14",
            "title": "GPT-4.1 family released",
            "description": "OpenAI introduced API models with major coding, instruction-following and one-million-token-context improvements."
        },
        {
            "start": "2025-04-16",
            "title": "OpenAI o3 and o4-mini released",
            "description": "Reasoning models gained integrated web browsing, Python, image and file analysis, and image generation tools."
        },
        {
            "start": "2025-04-29",
            "title": "Qwen3 released",
            "description": "Alibaba published dense and mixture-of-experts open models with switchable thinking modes and support for 119 languages and dialects."
        },
        {
            "start": "2025-05-22",
            "title": "Claude Opus 4 and Sonnet 4 released",
            "description": "Anthropic launched models focused on coding, sustained agent workflows and hybrid reasoning."
        },
        {
            "start": "2025-06-10",
            "title": "Magistral released",
            "description": "Mistral AI introduced its first reasoning-model family with multilingual and domain-focused reasoning."
        },
        {
            "start": "2025-06-20",
            "title": "Kimi-Researcher announced",
            "description": "Moonshot AI demonstrated an autonomous deep-search agent trained with end-to-end agentic reinforcement learning."
        },
        {
            "start": "2025-07-09",
            "title": "Grok 4 released",
            "description": "xAI launched a reasoning model trained for native tool use with code execution and web search."
        },
        {
            "start": "2025-07-11",
            "title": "Kimi K2 released",
            "description": "Moonshot AI published a one-trillion-parameter mixture-of-experts model optimized for agentic tool use and coding."
        },
        {
            "start": "2025-07-28",
            "title": "GLM-4.5 released",
            "description": "Z.ai introduced an open model emphasizing reasoning, coding and agentic capabilities with interleaved thinking modes."
        },
        {
            "start": "2025-08-05",
            "title": "Claude Opus 4.1 released",
            "description": "Anthropic upgraded its flagship model for coding, research, data analysis and agentic search."
        },
        {
            "start": "2025-08-07",
            "title": "GPT-5 released",
            "description": "OpenAI launched a unified system routing between fast responses and deeper reasoning, with strong coding and tool use."
        },
        {
            "start": "2025-09-29",
            "title": "Claude Sonnet 4.5 released",
            "description": "Anthropic emphasized coding, complex agents, computer use and long-running professional workflows."
        },
        {
            "start": "2025-11-12",
            "title": "GPT-5.1 released",
            "description": "OpenAI updated the GPT-5 series with more conversational instant responses and more adaptive extended reasoning."
        },
        {
            "start": "2025-11-17",
            "title": "Grok 4.1 released",
            "description": "xAI improved creative, emotional and collaborative interaction through large-scale reinforcement learning from model-based preference signals."
        },
        {
            "start": "2025-11-24",
            "title": "Claude Opus 4.5 released",
            "description": "Anthropic advanced heavy-duty agentic coding and long-running knowledge-work workflows."
        },
        {
            "start": "2025-12-01",
            "title": "DeepSeek-V3.2 released",
            "description": "DeepSeek released a reasoning-first successor designed for tool-using agents."
        },
        {
            "start": "2025-12-02",
            "title": "Mistral 3 released",
            "description": "Mistral AI launched a new open family led by the multimodal mixture-of-experts Mistral Large 3."
        },
        {
            "start": "2025-12-11",
            "title": "GPT-5.2 released",
            "description": "OpenAI introduced upgraded instant, thinking and pro variants for professional and agentic work."
        },
        {
            "start": "2025-12-22",
            "title": "GLM-4.7 released",
            "description": "Z.ai improved coding and introduced more persistent, turn-level management of model thinking."
        },
        {
            "start": "2026-02-05",
            "title": "GPT-5.3-Codex released",
            "description": "OpenAI advanced long-horizon agentic coding and professional knowledge-work generation."
        },
        {
            "start": "2026-02-05",
            "title": "Claude Opus 4.6 released",
            "description": "Anthropic upgraded long-running tasks, code review, professional analysis and agent reliability."
        },
        {
            "start": "2026-02-12",
            "title": "GLM-5 released",
            "description": "Z.ai introduced a flagship model aimed at moving from interactive coding toward agentic engineering."
        },
        {
            "start": "2026-03-16",
            "title": "Mistral Small 4 released",
            "description": "Mistral AI launched an open multimodal hybrid model for chat, coding, agents and complex reasoning."
        },
        {
            "start": "2026-04-07",
            "title": "GLM-5.1 released",
            "description": "Z.ai strengthened long-horizon agentic engineering and coding over its previous flagship."
        },
        {
            "start": "2026-04-20",
            "title": "Kimi K2.6 released",
            "description": "Moonshot AI expanded its model platform for deep research, autonomous websites, spreadsheets and presentation editing."
        },
        {
            "start": "2026-04-23",
            "title": "GPT-5.5 released",
            "description": "OpenAI introduced a faster frontier model aimed at complex coding, research, data analysis and scientific workflows."
        },
        {
            "start": "2026-05-19",
            "title": "Gemini 3.5 Flash released",
            "description": "Google introduced an agent-first model combining frontier intelligence with action for complex long-horizon workflows."
        },
        {
            "start": "2026-06-09",
            "title": "Gemini 3.5 Live Translate released",
            "description": "Google launched near-real-time speech-to-speech translation across more than seventy languages."
        },
        {
            "start": "2026-06-23",
            "title": "Mistral OCR 4 released",
            "description": "Mistral AI introduced structured document intelligence with multilingual OCR, bounding boxes and confidence scores."
        },
        {
            "start": "2026-06-24",
            "title": "Computer use integrated into Gemini 3.5 Flash",
            "description": "Google made graphical computer interaction a built-in tool for browser, mobile and desktop agents."
        },
        {
            "start": "2026-07-02",
            "title": "Leanstral 1.5 released",
            "description": "Mistral AI published an open mixture-of-experts model specialized for Lean proof engineering and formal verification."
        },
        {
            "start": "2026-07-08",
            "title": "GPT-Live released",
            "description": "OpenAI launched a real-time audio model for interactive voice generation and conversation."
        },
        {
            "start": "2026-07-08",
            "title": "Robostral Navigate released",
            "description": "Mistral AI introduced an embodied navigation model using a single RGB camera for autonomous robot movement."
        },
        {
            "start": "2026-07-09",
            "title": "GPT-5.6 released",
            "description": "OpenAI launched Sol, Terra and Luna variants spanning maximum reasoning, balanced work and low-cost high-volume intelligence."
        },
        {
            "start": "2026-07-21",
            "title": "Gemini 3.6 Flash family announced",
            "description": "Google expanded its agentic model line with faster general, lightweight and cybersecurity-specialized Flash variants."
        },
        {
            "start": "2026-07-24",
            "title": "Claude Opus 5 released",
            "description": "Anthropic introduced a new flagship for long-running agents, coding and difficult professional analysis."
        }
    ]
};

// Institutions, safety, policy and social impact
var tl_society = {
    "dateTimeFormat": "iso8601",
    "events": [
        {
            "start": "1956",
            "title": "“Artificial intelligence” established as a research field",
            "description": "The Dartmouth proposal gave a name and shared agenda to research on machines that learn, reason and use language."
        },
        {
            "start": "1966",
            "title": "ALPAC report reshapes machine translation",
            "description": "A critical US report concluded that machine translation had not met expectations and redirected funding toward basic language research."
        },
        {
            "start": "1969",
            "title": "First International Joint Conference on Artificial Intelligence",
            "description": "IJCAI created a recurring global forum connecting diverse branches of artificial-intelligence research."
        },
        {
            "start": "1973",
            "title": "Lighthill report and funding contraction",
            "description": "The British government review criticized AI’s fragmentation and poor scaling, contributing to the first AI winter."
        },
        {
            "start": "1979",
            "title": "AAAI founded",
            "description": "The Association for the Advancement of Artificial Intelligence created a major professional institution for the field."
        },
        {
            "start": "1982",
            "title": "Fifth Generation Computer Systems becomes a national priority",
            "description": "Japan’s ambitious program intensified international competition in knowledge processing and parallel AI hardware."
        },
        {
            "start": "1987",
            "title": "Expert-system market collapse begins",
            "description": "Maintenance costs, brittleness and hardware-market changes undermined commercial enthusiasm and triggered the second AI winter."
        },
        {
            "start": "1997",
            "title": "Deep Blue victory changes public perception",
            "description": "The chess match became a global symbol of specialized machine intelligence outperforming elite human expertise."
        },
        {
            "start": "2004",
            "title": "DARPA Grand Challenge catalyzes autonomous vehicles",
            "description": "A high-profile competition linked academic robotics, military funding and the emerging self-driving industry."
        },
        {
            "start": "2006",
            "title": "AI@50 Dartmouth conference",
            "description": "Researchers revisited the field’s founding ambitions and assessed fifty years of progress and unresolved challenges."
        },
        {
            "start": "2012",
            "title": "Deep learning becomes an industrial priority",
            "description": "ImageNet results triggered rapid investment by major technology companies in neural research teams, data centers and products."
        },
        {
            "start": "2014",
            "title": "AI acquisitions and laboratory expansion accelerate",
            "description": "Major technology firms acquired research startups and built large internal AI laboratories around deep learning."
        },
        {
            "start": "2015",
            "title": "OpenAI founded",
            "description": "A new research organization was established to pursue advanced artificial intelligence and its broad societal benefits."
        },
        {
            "start": "2016",
            "title": "Partnership on AI founded",
            "description": "Technology companies and civil-society organizations created a multi-stakeholder forum for responsible AI practice."
        },
        {
            "start": "2016",
            "title": "AI Now Institute initiative begins",
            "description": "Interdisciplinary research centered labor, rights, accountability and social consequences in AI policy debates."
        },
        {
            "start": "2017",
            "title": "Asilomar AI Principles",
            "description": "Researchers and public-interest participants articulated widely discussed principles for beneficial and safe AI development."
        },
        {
            "start": "2018",
            "title": "GDPR automated-decision provisions take effect",
            "description": "European data-protection law strengthened rights and obligations around profiling and automated decisions using personal data."
        },
        {
            "start": "2018",
            "title": "FAccT community consolidates",
            "description": "Research on fairness, accountability and transparency became a recognized interdisciplinary AI field."
        },
        {
            "start": "2019",
            "title": "OECD AI Principles adopted",
            "description": "Governments endorsed international principles on inclusive growth, human-centered values, transparency, robustness and accountability."
        },
        {
            "start": "2019",
            "title": "Model cards and dataset documentation spread",
            "description": "Standardized documentation practices sought to expose intended uses, limitations, evaluation conditions and data provenance."
        },
        {
            "start": "2020",
            "title": "Large-model environmental and labor impacts gain attention",
            "description": "Research increasingly measured energy use, carbon emissions, data work and hidden human labor behind AI systems."
        },
        {
            "start": "2021",
            "title": "UNESCO Recommendation on the Ethics of Artificial Intelligence",
            "description": "Member states adopted a global normative framework covering human rights, governance, environment and social well-being."
        },
        {
            "start": "2021",
            "title": "EU proposes the Artificial Intelligence Act",
            "description": "The European Commission introduced a risk-tiered regulatory framework for AI systems."
        },
        {
            "start": "2022",
            "title": "Generative AI copyright disputes intensify",
            "description": "Text and image generators raised major disputes over training data, authorship, licensing and creative labor."
        },
        {
            "start": "2023-01-26",
            "title": "NIST AI Risk Management Framework released",
            "description": "The United States published a voluntary framework for governing, mapping, measuring and managing AI risks."
        },
        {
            "start": "2023-03-22",
            "title": "Public call for a pause on giant AI experiments",
            "description": "An open letter reflected growing concern about rapid frontier-model development, governance capacity and systemic risks."
        },
        {
            "start": "2023-05-30",
            "title": "Statement on AI extinction risk",
            "description": "Researchers and industry leaders publicly argued that extreme AI risks should be treated alongside other global-scale threats."
        },
        {
            "start": "2023-10-30",
            "title": "US Executive Order on safe, secure and trustworthy AI",
            "description": "The order directed federal agencies on standards, evaluations, security, civil rights, labor and government AI use."
        },
        {
            "start": "2023-11-01",
            "title": "Bletchley Declaration",
            "description": "Countries at the first AI Safety Summit recognized shared risks from frontier AI and the need for international cooperation."
        },
        {
            "start": "2023-12-08",
            "title": "Political agreement on the EU AI Act",
            "description": "European institutions reached agreement on a comprehensive risk-based AI law, including provisions for general-purpose models."
        },
        {
            "start": "2024",
            "title": "Frontier-model system cards and preparedness frameworks expand",
            "description": "Major laboratories increasingly published evaluations of capabilities, misuse risks, safeguards and deployment thresholds."
        },
        {
            "start": "2024-05-21",
            "title": "EU AI Act formally adopted",
            "description": "The European Union completed adoption of the first broad, binding cross-sector AI regulation."
        },
        {
            "start": "2024-08-01",
            "title": "EU AI Act enters into force",
            "description": "The regulation began a staged implementation affecting prohibited practices, high-risk systems and general-purpose AI."
        },
        {
            "start": "2025",
            "title": "Agent safety and computer-use governance become central",
            "description": "As models gained tools and autonomy, permission systems, monitoring, sandboxing and human oversight became major policy and engineering concerns."
        },
        {
            "start": "2025",
            "title": "International AI safety evaluations deepen",
            "description": "National institutes and frontier laboratories expanded joint testing of cyber, biological, autonomy and model-control risks."
        },
        {
            "start": "2026",
            "title": "Governance shifts toward deployed agents and scientific AI",
            "description": "Policy attention increasingly moved from static chat models toward autonomous workflows, critical infrastructure and AI-assisted discovery."
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
