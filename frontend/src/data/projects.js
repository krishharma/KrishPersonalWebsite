const projects = [
  {
    id: "pneumonia-app",
    title: "Pneumonia Screening Mobile App",
    domain: "Health Tech",
    year: "2026",
    imageLayout: "aside",
    figureCaption: "National STEM Festival",
    video: {
      youtubeId: "E9LtBBjrGps",
      start: 2,
      title: "National STEM Festival presentation",
    },
    paragraphs: [
      "I designed and shipped a mobile pneumonia screening app that turns cough and breathing audio into real-time risk predictions using convolutional neural networks, built end-to-end from raw audio to on-device inference.",
      "Rather than stopping at a model in a notebook, I engineered the full stack: a Python audio pipeline and CNN classifier, a Swift iOS front end for recording and results, and a workflow someone could actually pick up and use. With this project, I earned the title of National STEM Festival Champion and received the Broadcom Tech For Good Award, an honor given to just one project nationwide each year.",
      "Watch the video. The project speaks for itself better than I can.",
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
    year: "2025-2026",
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
      "Neuro-G is one of the more ambitious projects I have taken on. I set out to design a sub-milliwatt neuromorphic brain-computer interface that could process EEG with spiking neural networks on constrained FPGA hardware, instead of power-hungry conventional deep learning.",
      "Getting there meant learning the hard specifics from scratch: SNN theory, EEG signal pipelines, hardware-aware energy budgets, and how to evaluate whether a design could actually work for assistive interfaces. It forced me to think like an engineer end to end, from idea to architecture to results.",
    ],
    bullets: [
      "1st Place Engineering, Southern Nevada Science Fair",
      "Sub-milliwatt neuromorphic FPGA architecture for wireless BCI",
      "Spiking neural networks for energy-efficient EEG processing",
    ],
  },
  {
    id: "dragon-kim",
    title: "Dragon Kim Foundation Fellowship",
    domain: "Social Impact",
    year: "2025",
    imageLayout: "aside",
    figureCaption: "Wall Street Warriors: Dragon Kim Fellowship at Ed W. Clark High School",
    images: [
      {
        src: "/projects/dragon-kim/wall-street-warriors.png",
        alt: "Wall Street Warriors fellowship project with Krish Sharma and Pragalad Nithyanandan",
      },
    ],
    paragraphs: [
      "I co-founded and led Wall Street Warriors, a seven-month Dragon Kim Foundation fellowship project that brought financial and digital literacy to middle schoolers through in-person workshops, online programming, and a mobile app we built to extend the curriculum.",
      "Selected from a competitive applicant pool, we received $5,000 in seed funding to scale the initiative. I pitched and presented the work to a review panel that included a mayor, C-level executives, and angel investors.",
    ],
    bullets: [
      "$5,000 fellowship award",
      "280+ people reached across workshops and sessions",
      "Curriculum design, social entrepreneurship, and education",
    ],
  },
];

export default projects;
