export const DISC_LAB_URL =
  "https://arifuzzaman.faculty.unlv.edu/research.html";

export const DATAX_LAB_URL = "https://www.dataxlab.org/";

export const RESEARCH = [
  {
    id: "neuromorphic-continual-learning",
    index: "01",
    kind: "lab",
    shortTitle: "Neuromorphic CL",
    title: "Continual Learning with Neuromorphic Methods",
    venue: "UNLV DataX Lab",
    venueUrl: DATAX_LAB_URL,
    labLink: { label: "DataX Lab", url: DATAX_LAB_URL },
    year: "Oct 2025 – Present",
    status: "ongoing",
    statusLabel: "Lead project",
    description:
      "At UNLV DataX Lab, I investigate how neural systems can learn continuously without catastrophic forgetting and develop new methods that apply neuromorphic principles to constrained computation.",
    highlights: [
      "Building theoretical foundations for continual learning on memory- and compute-constrained neuromorphic devices.",
      "Designing and evaluating novel lifelong learning algorithms in spiking neural network architectures.",
    ],
    tags: ["Neuromorphic computing", "Continual learning", "SNNs"],
    logo: "/experience/logos/datax.png",
    logoAlt: "DataX Lab",
  },
  {
    id: "gnn-privacy",
    index: "02",
    kind: "lab",
    shortTitle: "GNN Privacy",
    title: "Computational Defenses for Graph Neural Networks",
    titleLead: "Computational Defenses",
    titleSub: "for Graph Neural Networks",
    venue: "UNLV DiSC Lab",
    venueUrl: DISC_LAB_URL,
    labLink: { label: "DiSC Lab", url: DISC_LAB_URL },
    year: "Aug 2025 – Present",
    status: "ongoing",
    statusLabel: "Lead project",
    description:
      "At UNLV DiSC Lab, I investigate scalable computation for privacy-preserving graph neural networks and develop compute-efficient adversarial training and differential privacy methods on large real-world graph datasets.",
    highlights: [
      "Building compute-efficient adversarial training and differential privacy methods for large graph datasets.",
      "Developing PyTorch Geometric pipelines for distributed GNN experimentation and large-scale graph processing.",
      "Designing scalable GNN defenses optimized for memory- and compute-constrained execution.",
    ],
    tags: ["GNNs", "Scalable Computing", "Privacy", "PyTorch"],
    logo: "/experience/logos/disc.png",
    logoAlt: "UNLV DiSC Lab",
  },
  {
    id: "mountain-west",
    index: "03",
    kind: "policy",
    shortTitle: "Mountain West",
    title: "Mountain West States Policy Analysis",
    venue: "UNLV Brookings Mountain West",
    year: "Apr 2025 – Present",
    status: "published",
    statusLabel: "1000+ downloads",
    description:
      "Analyzing regional policy, economics, and AI adoption trends across Mountain West states, producing public fact sheets that translate complex datasets into actionable policy insights for the UNLV Data Hub.",
    highlights: [
      "Built Excel and Python pipelines for cleaning, analyzing, and visualizing regional economic and policy data.",
      "Publications passed 1000 downloads on the UNLV Data Hub.",
    ],
    tags: ["Public policy", "Data analysis"],
    logo: "/experience/logos/brookings.png",
    logoAlt: "Brookings Mountain West",
  },
  {
    id: "hydro-transfer-learning",
    index: "04",
    kind: "paper",
    shortTitle: "Hydro TL",
    title: "Regional Transfer Learning for Streamflow Forecasting",
    venue: "SIU Carbondale Engineering",
    year: "Mar – Sep 2026",
    status: "ongoing",
    statusLabel: "In progress",
    description:
      "Investigating how entity-aware LSTM models can transfer hydrological knowledge from data-rich Midwest basins to forecast streamflow and flood risk where only ~2 years of local records exist.",
    highlights: [
      "Built an entity-aware LSTM that transfers from 17 donor basins to forecast streamflow with limited local data.",
      "More than doubled the reference watersheds used for training and sharply improved flood early-warning accuracy.",
    ],
    tags: ["Hydrology", "Transfer learning", "LSTM"],
    logo: "/experience/logos/siuc.svg",
    logoAlt: "SIU Carbondale Engineering",
  },
  {
    id: "cdr-is",
    index: "05",
    kind: "paper",
    shortTitle: "CDR Paper",
    title: "Corporate Digital Responsibility in Information Systems",
    venue: "Western Decision Sciences Institute Conference",
    year: "Mar 2025 – Mar 2026",
    status: "accepted",
    statusLabel: "Accepted & presented",
    description:
      "First-author research paper examining how firms define and operationalize corporate digital responsibility, covering the research question, literature review, methodology, data collection, and analysis under Dr. Chatterjee.",
    highlights: [
      "Defined research question, methodology, and analytical framework for studying corporate digital responsibility.",
      "Manuscript accepted and presented at WDSI 2026.",
    ],
    tags: ["Information systems", "Corporate policy"],
    logo: "/experience/logos/wdsi.png",
    logoAlt: "Western Decision Sciences Institute",
  },
];
