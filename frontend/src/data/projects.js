const projects = [
  {
    id: "pneumonia-app",
    title: "Pneumonia Screening Mobile App",
    domain: "Health Tech",
    year: "2025",
    imageLayout: "aside",
    figureCaption: "National STEM Festival",
    video: {
      youtubeId: "E9LtBBjrGps",
      start: 2,
      title: "National STEM Festival presentation",
    },
    paragraphs: [
      "I built a mobile app that records breathing and cough audio, then classifies pneumonia risk in real time using convolutional neural networks.",
      "The goal was something a clinician or student could actually use to record, run inference, and get a result, rather than just a model sitting in a notebook.",
    ],
    bullets: [
      "National STEM Festival Champion",
      "Python and Swift for the pipeline and iOS front end",
      "CNN-based audio classification",
    ],
  },
  {
    id: "neuromorphic-bci",
    title: "Neuromorphic BCI Architecture",
    domain: "Neurotech",
    year: "2025",
    imageLayout: "aside",
    asideImage: {
      src: "/projects/bci/science-fair-award.png",
      alt: "Krish Sharma holding a 1st place engineering trophy at the Southern Nevada Regional Science & Engineering Fair",
    },
    asideCaption:
      "1st Place Engineering at the Southern Nevada Regional Science & Engineering Fair",
    figureCaption:
      "Neuro-G research poster for the Southern Nevada Regional Science & Engineering Fair",
    images: [
      {
        src: "/projects/bci/bci-poster.webp",
        alt: "Neuro-G research poster: A Sub-Milliwatt Neuromorphic FPGA Architecture for Wireless Brain-Computer Interfaces",
        expandable: true,
      },
    ],
    paragraphs: [
      "I designed a neuromorphic brain-computer interface architecture that processes EEG signals with spiking neural networks instead of conventional deep learning.",
      "The point was energy efficiency, creating assistive interfaces that could run on constrained hardware without sacrificing signal quality.",
    ],
    bullets: [
      "1st Place Engineering, Southern Nevada Science Fair",
      "Spiking neural networks for EEG processing",
      "Python-based simulation and evaluation",
    ],
  },
  {
    id: "dragon-kim",
    title: "Dragon Kim Foundation Fellowship",
    domain: "Social Impact",
    year: "2024",
    imageLayout: "aside",
    figureCaption: "Wall Street Warriors: Dragon Kim Fellowship at Ed W. Clark High School",
    images: [
      {
        src: "/projects/dragon-kim/wall-street-warriors.png",
        alt: "Wall Street Warriors fellowship project with Krish Sharma and Pragalad Nithyanandan",
      },
    ],
    paragraphs: [
      "I founded and ran a seven-month project teaching middle schoolers financial and digital literacy, in person, online, and through a mobile app.",
      "The fellowship came with $5,000 in seed funding. I presented the work to a panel that included a mayor, C-level executives, and angel investors.",
    ],
    bullets: [
      "$5,000 fellowship award",
      "280+ people reached across workshops and sessions",
      "Curriculum design, social entrepreneurship, and education",
    ],
  },
];

export default projects;
