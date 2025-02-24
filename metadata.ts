import { ArticleItem } from "./types";

export const articlesMetadata: Record<
  string,
  Omit<ArticleItem, "id" | "date" | "content">
> = {
  "what-is-aviation": {
    title: "1.1 What is Aviation?",
    chapter: "1.1 What is Aviation?",
    mainChapter: "Introduction to Aviation",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "Aviation",
        type: "article",
        url: "https://www.britannica.com/technology/history-of-flight/Construction-of-the-sustaining-wings-the-problem-of-lift",
      },
      {
        title: "What is aviation?",
        type: "article",
        url: "https://www.ferrovial.com/en/resources/aviation/",
      },
    ],
  },
  "history-of-aviation": {
    title: "History of Aviation",
    chapter: "1.1 What is Aviation?",
    mainChapter: "Introduction to Aviation",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The History Of Flight | From The Wright Brothers To The Jet",
        type: "video",
        url: "https://www.youtube.com/watch?v=HMl_w7F4vOw",
      },
      {
        title: "From Birds to Brothers - the Evolution of Flight",
        type: "video",
        url: "https://www.youtube.com/watch?v=AWUnvYwPODs",
      },
      {
        title: "History of Flight",
        type: "article",
        url: "https://www.britannica.com/technology/history-of-flight",
      },
      {
        title: "History of Flight: Breakthroughs, Disasters and More",
        type: "article",
        url: "https://www.history.com/news/history-flight-aviation-timeline",
      },
    ],
  },
  "types-of-aviation": {
    title: "Types of Aviation",
    chapter: "1.1 What is Aviation?",
    mainChapter: "Introduction to Aviation",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "What is General aviation (GA) ?",
        type: "video",
        url: "https://www.youtube.com/watch?v=i9sGT4ctpE4",
      },
      {
        title: "Types of Aviation; All you need to know about!",
        type: "article",
        url: "https://an.aero/types-of-aviation-all-you-need-to-know-about/",
      },
      {
        title: "Sectors of Aviation",
        type: "article",
        url: "https://www.naa.edu/sectors-of-aviation/",
      },
    ],
  },
  "flight-simulation-basics": {
    title: "1.2 Flight Simulation Basics",
    chapter: "1.2 Flight Simulation Basics",
    mainChapter: "Introduction to Aviation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aviation",
      },
    ],
  },
  "overview-of-flight-simulators": {
    title: "Overview of Flight Simulators",
    chapter: "1.2 Flight Simulation Basics",
    mainChapter: "Introduction to Aviation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aviation",
      },
    ],
  },
  "benefits-of-simulation": {
    title: "Benefits of Learning Through Simulation",
    chapter: "1.2 Flight Simulation Basics",
    mainChapter: "Introduction to Aviation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aviation",
      },
    ],
  },
  "choosing-your-first-simulator": {
    title: "Choosing Your First Simulator (MSFS, X-Plane, etc.)",
    chapter: "1.2 Flight Simulation Basics",
    mainChapter: "Introduction to Aviation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aviation",
      },
    ],
  },

  "understanding-airspace": {
    title: "2.1 Understanding Airspace",
    chapter: "2.1 Understanding Airspace",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-airspace",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/understanding-airspace",
      },
    ],
  },
  "classes-of-airspace": {
    title: "Classes of Airspace (A, B, C, D, E, G)",
    chapter: "2.1 Understanding Airspace",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-classes",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/classes-of-airspace",
      },
    ],
  },
  "controlled-vs-uncontrolled": {
    title: "Controlled vs. Uncontrolled Airspace",
    chapter: "2.1 Understanding Airspace",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/controlled-airspace",
      },
    ],
  },
  "special-use-airspace": {
    title: "Special Use Airspace",
    chapter: "2.1 Understanding Airspace",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-special",
      },
    ],
  },
  "basic-aircraft-anatomy": {
    title: "2.2 Basic Aircraft Anatomy",
    chapter: "2.2 Basic Aircraft Anatomy",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-anatomy",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/basic-aircraft-anatomy",
      },
    ],
  },
  "parts-of-an-aircraft": {
    title: "Parts of an Aircraft (Wings, Fuselage, Empennage)",
    chapter: "2.2 Basic Aircraft Anatomy",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/parts-of-an-aircraft",
      },
    ],
  },
  "control-surfaces": {
    title: "Control Surfaces (Ailerons, Rudder, Elevator, Flaps)",
    chapter: "2.2 Basic Aircraft Anatomy",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-control-surfaces",
      },
    ],
  },
  "landing-gear-types": {
    title: "Landing Gear Types",
    chapter: "2.2 Basic Aircraft Anatomy",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-landing-gear",
      },
    ],
  },
  "basic-aviation-terms": {
    title: "2.3 Basic Aviation Terms and Abbreviations",
    chapter: "2.3 Basic Aviation Terms and Abbreviations",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/basic-aviation-terms",
      },
    ],
  },
  "common-aviation-terms": {
    title: "Common Terms (VFR, IFR, ATC, METAR)",
    chapter: "2.3 Basic Aviation Terms and Abbreviations",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/common-aviation-terms",
      },
    ],
  },
  "phonetic-alphabet": {
    title: "Phonetic Alphabet",
    chapter: "2.3 Basic Aviation Terms and Abbreviations",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-phonetic-alphabet",
      },
    ],
  },
  "call-signs": {
    title: "Call Signs",
    chapter: "2.3 Basic Aviation Terms and Abbreviations",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-call-signs",
      },
    ],
  },
  "understanding-charts": {
    title: "2.4 Understanding Charts",
    chapter: "2.4 Understanding Charts",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-understanding-charts",
      },
    ],
  },
  "vfr-sectional-charts": {
    title: "VFR Sectional Charts",
    chapter: "2.4 Understanding Charts",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vfr-sectional-charts",
      },
    ],
  },
  "terminal-area-charts": {
    title: "Terminal Area Charts",
    chapter: "2.4 Understanding Charts",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-terminal-charts",
      },
    ],
  },
  "legend-and-symbols": {
    title: "Legend and Symbols",
    chapter: "2.4 Understanding Charts",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/legend-and-symbols",
      },
    ],
  },
  "airport-basics": {
    title: "2.5 Airport Basics",
    chapter: "2.5 Airport Basics",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-airport-basics",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/airport-basics",
      },
    ],
  },
  "airport-layouts": {
    title: "Airport Layouts (Runways, Taxiways, Aprons)",
    chapter: "2.5 Airport Basics",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/airport-layouts",
      },
    ],
  },
  "reading-airport-diagrams": {
    title: "Reading Airport Diagrams",
    chapter: "2.5 Airport Basics",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-reading-diagrams",
      },
    ],
  },
  "atis-and-notams": {
    title: "Understanding ATIS and NOTAMs",
    chapter: "2.5 Airport Basics",
    mainChapter: "Basics I: Foundations",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/atis-and-notams",
      },
    ],
  },
  "principles-of-flight": {
    title: "3.1 Principles of Flight",
    chapter: "3.1 Principles of Flight",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-principles",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/principles-of-flight",
      },
    ],
  },
  "lift-weight-thrust-drag": {
    title: "Lift, Weight, Thrust, and Drag",
    chapter: "3.1 Principles of Flight",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/lift-weight-thrust-drag",
      },
    ],
  },
  "bernoullis-principle": {
    title: "Bernoulli’s Principle",
    chapter: "3.1 Principles of Flight",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-bernoulli",
      },
    ],
  },
  "stability-and-control": {
    title: "Stability and Control",
    chapter: "3.1 Principles of Flight",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/stability-and-control",
      },
    ],
  },
  "basic-maneuvers": {
    title: "Basic Maneuvers (Turns, Climbs, Descents)",
    chapter: "3.1 Principles of Flight",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-basic-maneuvers",
      },
    ],
  },
  "aircraft-instruments": {
    title: "3.2 Aircraft Instruments",
    chapter: "3.2 Aircraft Instruments",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aircraft-instruments",
      },
    ],
  },
  "the-6-pack": {
    title:
      "The 6-Pack (Airspeed, Attitude, Altimeter, VSI, Heading, Turn Coordinator)",
    chapter: "3.2 Aircraft Instruments",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-6-pack",
      },
    ],
  },
  "pitot-static-systems": {
    title: "Understanding Pitot-Static Systems",
    chapter: "3.2 Aircraft Instruments",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/pitot-static-systems",
      },
    ],
  },
  "gyroscopic-instruments": {
    title: "Gyroscopic Instruments",
    chapter: "3.2 Aircraft Instruments",
    mainChapter: "Basics II: Core Skills",
    isLive: true,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-gyroscopic",
      },
    ],
  },
  "basic-navigation": {
    title: "3.3 Basic Navigation",
    chapter: "3.3 Basic Navigation",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/basic-navigation",
      },
    ],
  },
  "latitude-and-longitude": {
    title: "Latitude and Longitude",
    chapter: "3.3 Basic Navigation",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-latitude-longitude",
      },
    ],
  },
  "reading-a-compass": {
    title: "Reading a Compass",
    chapter: "3.3 Basic Navigation",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/reading-a-compass",
      },
    ],
  },
  "plotting-a-course": {
    title: "Plotting a Course",
    chapter: "3.3 Basic Navigation",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-plotting-course",
      },
    ],
  },
  "weather-basics": {
    title: "3.4 Weather Basics",
    chapter: "3.4 Weather Basics",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/weather-basics",
      },
    ],
  },
  "understanding-metars-tafs": {
    title: "Understanding METARs and TAFs",
    chapter: "3.4 Weather Basics",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-metars-tafs",
      },
    ],
  },
  "effects-of-weather": {
    title: "Effects of Wind, Rain, and Temperature",
    chapter: "3.4 Weather Basics",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/effects-of-weather",
      },
    ],
  },
  "avoiding-thunderstorms": {
    title: "Avoiding Thunderstorms",
    chapter: "3.4 Weather Basics",
    mainChapter: "Basics II: Core Skills",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-thunderstorms",
      },
    ],
  },
  "phases-of-atc-communication": {
    title: "4.1 Phases of ATC Communication",
    chapter: "4.1 Phases of ATC Communication",
    mainChapter: "Air Traffic Control (ATC)",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-atc-phases",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/atc-phases",
      },
    ],
  },
  "phraseology-best-practices": {
    title: "4.2 Phraseology and Best Practices",
    chapter: "4.2 Phraseology and Best Practices",
    mainChapter: "Air Traffic Control (ATC)",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-phraseology",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/phraseology-best-practices",
      },
    ],
  },
  "vfr-vs-ifr-communication": {
    title: "4.3 VFR vs. IFR Communication",
    chapter: "4.3 VFR vs. IFR Communication",
    mainChapter: "Air Traffic Control (ATC)",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vfr-ifr",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vfr-ifr-communication",
      },
    ],
  },
  "flight-following-clearance-delivery": {
    title: "4.4 Flight Following and Clearance Delivery",
    chapter: "4.4 Flight Following and Clearance Delivery",
    mainChapter: "Air Traffic Control (ATC)",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-clearance",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flight-following-clearance",
      },
    ],
  },
  "vfr-navigation": {
    title: "5.1 VFR Navigation",
    chapter: "5.1 VFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vfr-navigation",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vfr-navigation",
      },
    ],
  },
  "dead-reckoning": {
    title: "Dead Reckoning",
    chapter: "5.1 VFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-dead-reckoning",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/dead-reckoning",
      },
    ],
  },
  pilotage: {
    title: "Pilotage",
    chapter: "5.1 VFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-pilotage",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/pilotage",
      },
    ],
  },
  "flight-following": {
    title: "Flight Following",
    chapter: "5.1 VFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flight-following",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flight-following",
      },
    ],
  },
  "ifr-navigation": {
    title: "5.2 IFR Navigation",
    chapter: "5.2 IFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-ifr-navigation",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/ifr-navigation",
      },
    ],
  },
  "ifr-charts-and-plates": {
    title: "IFR Charts and Plates",
    chapter: "5.2 IFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-ifr-charts",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/ifr-charts",
      },
    ],
  },
  "alternate-airports": {
    title: "Alternate Airports",
    chapter: "5.2 IFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-alternate-airports",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/alternate-airports",
      },
    ],
  },
  "airway-navigation": {
    title: "Airway Navigation",
    chapter: "5.2 IFR Navigation",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-airway-navigation",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/airway-navigation",
      },
    ],
  },
  "instrument-approaches": {
    title: "5.3 Instrument Approaches",
    chapter: "5.3 Instrument Approaches",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-instrument-approaches",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/instrument-approaches",
      },
    ],
  },
  "precision-approaches": {
    title: "Precision Approaches (PA)",
    chapter: "5.3 Instrument Approaches",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-precision-approaches",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/precision-approaches",
      },
    ],
  },

  "non-precision-approaches": {
    title: "Non-Precision Approaches (NPA)",
    chapter: "5.3 Instrument Approaches",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-npa",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/npa",
      },
    ],
  },
  apv: {
    title: "Approaches with Vertical Guidance (APV)",
    chapter: "5.3 Instrument Approaches",
    mainChapter: "Navigation and Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-apv",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/apv",
      },
    ],
  },
  "autopilot-systems": {
    title: "6.1 Autopilot Systems",
    chapter: "6.1 Autopilot Systems",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-autopilot-systems",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/autopilot-systems",
      },
    ],
  },
  "basic-autopilot-modes": {
    title: "Basic Autopilot Modes (HDG, ALT, VS)",
    chapter: "6.1 Autopilot Systems",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-basic-autopilot",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/basic-autopilot",
      },
    ],
  },
  "advanced-autopilot-modes": {
    title: "Advanced Modes (VNAV, LNAV, Approach Mode)",
    chapter: "6.1 Autopilot Systems",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-advanced-autopilot",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/advanced-autopilot",
      },
    ],
  },
  "autopilot-descent": {
    title: "Setting Up an Autopilot Descent",
    chapter: "6.1 Autopilot Systems",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-autopilot-descent",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/autopilot-descent",
      },
    ],
  },
  "holding-patterns": {
    title: "6.2 Holding Patterns",
    chapter: "6.2 Holding Patterns",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-holding-patterns",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/holding-patterns",
      },
    ],
  },
  "entry-types": {
    title: "Entry Types (Direct, Teardrop, Parallel)",
    chapter: "6.2 Holding Patterns",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-entry-types",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/entry-types",
      },
    ],
  },
  "holding-calculations": {
    title: "Calculating Times and Headings",
    chapter: "6.2 Holding Patterns",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-holding-calculations",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/holding-calculations",
      },
    ],
  },
  "when-to-hold": {
    title: "When and Why to Hold",
    chapter: "6.2 Holding Patterns",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-when-to-hold",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/when-to-hold",
      },
    ],
  },
  "emergency-procedures": {
    title: "6.3 Emergency Procedures",
    chapter: "6.3 Emergency Procedures",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-emergency-procedures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/emergency-procedures",
      },
    ],
  },
  "engine-failures": {
    title: "Engine Failures",
    chapter: "6.3 Emergency Procedures",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-engine-failures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/engine-failures",
      },
    ],
  },
  "declaring-mayday": {
    title: "Declaring Mayday and Pan-Pan",
    chapter: "6.3 Emergency Procedures",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-mayday",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/mayday",
      },
    ],
  },
  "alternate-diversion": {
    title: "Diversion to Alternate Airports",
    chapter: "6.3 Emergency Procedures",
    mainChapter: "Advanced Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-diversion",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/diversion",
      },
    ],
  },
  "engine-basics": {
    title: "7.1 Engine Basics",
    chapter: "7.1 Engine Basics",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-engine-basics",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/engine-basics",
      },
    ],
  },
  "types-of-engines": {
    title: "Types of Engines (Piston, Turboprop, Jet)",
    chapter: "7.1 Engine Basics",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-engine-types",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/engine-types",
      },
    ],
  },
  "fuel-mixture-carburetor": {
    title: "Fuel Mixture and Carburetor Heat",
    chapter: "7.1 Engine Basics",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-carburetor-heat",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/carburetor-heat",
      },
    ],
  },
  "propeller-systems": {
    title: "Propeller Systems",
    chapter: "7.1 Engine Basics",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-propeller-systems",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/propeller-systems",
      },
    ],
  },
  "electrical-systems": {
    title: "7.2 Electrical Systems",
    chapter: "7.2 Electrical Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-electrical-systems",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/electrical-systems",
      },
    ],
  },
  "batteries-alternators": {
    title: "Batteries and Alternators",
    chapter: "7.2 Electrical Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-batteries-alternators",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/batteries-alternators",
      },
    ],
  },
  "circuit-breakers": {
    title: "Circuit Breakers",
    chapter: "7.2 Electrical Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-circuit-breakers",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/circuit-breakers",
      },
    ],
  },
  "essential-buses": {
    title: "Essential vs. Non-Essential Buses",
    chapter: "7.2 Electrical Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-essential-buses",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/essential-buses",
      },
    ],
  },
  "flight-control-systems": {
    title: "7.3 Flight Control Systems",
    chapter: "7.3 Flight Control Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flight-control",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flight-control",
      },
    ],
  },
  "control-types": {
    title: "Manual vs. Hydraulic vs. Fly-By-Wire",
    chapter: "7.3 Flight Control Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-control-types",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/control-types",
      },
    ],
  },
  "trim-stabilizers": {
    title: "Trim and Stabilizers",
    chapter: "7.3 Flight Control Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-trim-stabilizers",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/trim-stabilizers",
      },
    ],
  },
  "fuel-systems": {
    title: "7.4 Fuel Systems",
    chapter: "7.4 Fuel Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fuel-systems",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fuel-systems",
      },
    ],
  },
  "gravity-vs-pump": {
    title: "Gravity-Fed vs. Pump Systems",
    chapter: "7.4 Fuel Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-gravity-pump",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/gravity-pump",
      },
    ],
  },
  "fuel-management": {
    title: "Fuel Management and Crossfeed",
    chapter: "7.4 Fuel Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fuel-management",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fuel-management",
      },
    ],
  },
  "fuel-indicators": {
    title: "Fuel Indicators and Warnings",
    chapter: "7.4 Fuel Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fuel-indicators",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fuel-indicators",
      },
    ],
  },
  "pressurization-systems": {
    title: "7.5 Pressurization Systems",
    chapter: "7.5 Pressurization Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-pressurization-systems",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/pressurization-systems",
      },
    ],
  },
  "cabin-pressure": {
    title: "Understanding Cabin Pressure",
    chapter: "7.5 Pressurization Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-cabin-pressure",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/cabin-pressure",
      },
    ],
  },
  "hypoxia-emergency": {
    title: "Hypoxia and Emergency Oxygen Systems",
    chapter: "7.5 Pressurization Systems",
    mainChapter: "Aircraft Systems",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-hypoxia",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/hypoxia",
      },
    ],
  },
  "gps-rnav": {
    title: "8.1 GPS and RNAV",
    chapter: "8.1 GPS and RNAV",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-gps-rnav",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/gps-rnav",
      },
    ],
  },
  "waas-rnp": {
    title: "WAAS and RNP",
    chapter: "8.1 GPS and RNAV",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-waas-rnp",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/waas-rnp",
      },
    ],
  },
  "gps-errors": {
    title: "GPS Errors and Limitations",
    chapter: "8.1 GPS and RNAV",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-gps-errors",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/gps-errors",
      },
    ],
  },
  "flying-rnav": {
    title: "Flying RNAV Approaches",
    chapter: "8.1 GPS and RNAV",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flying-rnav",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flying-rnav",
      },
    ],
  },
  "flight-planning": {
    title: "8.2 Flight Planning",
    chapter: "8.2 Flight Planning",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flight-planning",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flight-planning",
      },
    ],
  },
  "using-simbrief": {
    title: "Using SimBrief",
    chapter: "8.2 Flight Planning",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-using-simbrief",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/using-simbrief",
      },
    ],
  },
  "weight-balance": {
    title: "Weight and Balance",
    chapter: "8.2 Flight Planning",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-weight-balance",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/weight-balance",
      },
    ],
  },
  "fuel-planning": {
    title: "Fuel Planning",
    chapter: "8.2 Flight Planning",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fuel-planning",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fuel-planning",
      },
    ],
  },
  "sim-navigation-tools": {
    title: "8.3 Sim Navigation Tools",
    chapter: "8.3 Sim Navigation Tools",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-sim-navigation-tools",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/sim-navigation-tools",
      },
    ],
  },
  "navigraph-charts": {
    title: "Using Navigraph Charts",
    chapter: "8.3 Sim Navigation Tools",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-navigraph-charts",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/navigraph-charts",
      },
    ],
  },
  "integrating-simbrief": {
    title: "Integrating SimBrief with Flight Simulator",
    chapter: "8.3 Sim Navigation Tools",
    mainChapter: "Advanced Navigation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-integrating-simbrief",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/integrating-simbrief",
      },
    ],
  },
  "cessna-172": {
    title: "9.1 Cessna 172",
    chapter: "9.1 Cessna 172",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-cessna-172",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/cessna-172",
      },
    ],
  },
  "startup-shutdown-procedures": {
    title: "Startup and Shutdown Procedures",
    chapter: "9.1 Cessna 172",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-startup-shutdown",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/startup-shutdown",
      },
    ],
  },
  "navigation-tips-vfr": {
    title: "Navigation Tips for VFR Flying",
    chapter: "9.1 Cessna 172",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-navigation-vfr",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/navigation-vfr",
      },
    ],
  },
  "landing-techniques": {
    title: "Landing Techniques",
    chapter: "9.1 Cessna 172",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-landing-techniques",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/landing-techniques",
      },
    ],
  },
  airliners: {
    title: "9.2 Airliners (Boeing, Airbus)",
    chapter: "9.2 Airliners (Boeing, Airbus)",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-airliners",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/airliners",
      },
    ],
  },
  "fmc-mcdu-programming": {
    title: "FMC/MCDU Programming",
    chapter: "9.2 Airliners (Boeing, Airbus)",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fmc-mcdu",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fmc-mcdu",
      },
    ],
  },
  "vnav-lnav-usage": {
    title: "VNAV/LNAV Usage",
    chapter: "9.2 Airliners (Boeing, Airbus)",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vnav-lnav",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vnav-lnav",
      },
    ],
  },
  "autoland-procedures": {
    title: "Autoland Procedures",
    chapter: "9.2 Airliners (Boeing, Airbus)",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-autoland",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/autoland",
      },
    ],
  },
  helicopters: {
    title: "9.3 Helicopters",
    chapter: "9.3 Helicopters",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-helicopters",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/helicopters",
      },
    ],
  },
  "hovering-techniques": {
    title: "Hovering Techniques",
    chapter: "9.3 Helicopters",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-hovering-techniques",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/hovering-techniques",
      },
    ],
  },
  autorotations: {
    title: "Autorotations",
    chapter: "9.3 Helicopters",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-autorotations",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/autorotations",
      },
    ],
  },
  "understanding-collective-cyclic": {
    title: "Understanding Collective and Cyclic",
    chapter: "9.3 Helicopters",
    mainChapter: "Aircraft-Specific Procedures",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-collective-cyclic",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/collective-cyclic",
      },
    ],
  },
  "advanced-weather": {
    title: "10.1 Advanced Weather",
    chapter: "10.1 Advanced Weather",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-advanced-weather",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/advanced-weather",
      },
    ],
  },
  "flying-in-imc": {
    title: "Flying in IMC (Instrument Meteorological Conditions)",
    chapter: "10.1 Advanced Weather",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-imc",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/imc",
      },
    ],
  },
  "turbulence-wind-shear": {
    title: "Turbulence and Wind Shear",
    chapter: "10.1 Advanced Weather",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-turbulence",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/turbulence",
      },
    ],
  },
  "understanding-icing": {
    title: "Understanding Icing",
    chapter: "10.1 Advanced Weather",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-icing",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/icing",
      },
    ],
  },
  "aerodynamics-maneuvering": {
    title: "10.2 Aerodynamics of Maneuvering",
    chapter: "10.2 Aerodynamics of Maneuvering",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-aerodynamics",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aerodynamics",
      },
    ],
  },
  "turns-climbs-descents": {
    title: "Turns, Climbs, and Descents",
    chapter: "10.2 Aerodynamics of Maneuvering",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-turns",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/turns",
      },
    ],
  },
  "load-factor-gforces": {
    title: "Load Factor and G-Forces",
    chapter: "10.2 Aerodynamics of Maneuvering",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-load-factor",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/load-factor",
      },
    ],
  },
  "wingtip-vortices": {
    title: "Wingtip Vortices and Wake Turbulence",
    chapter: "10.2 Aerodynamics of Maneuvering",
    mainChapter: "Weather and Aerodynamics",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vortices",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vortices",
      },
    ],
  },

  // Chapter 11: Airspace and Flight Rules
  "entry-requirements-transitioning": {
    title: "11.1 Entry Requirements and Transitioning",
    chapter: "11.1 Entry Requirements and Transitioning",
    mainChapter: "Airspace and Flight Rules",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-entry-requirements",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/entry-requirements",
      },
    ],
  },
  "vfr-ifr-cruising-altitudes": {
    title: "11.2 VFR/IFR Cruising Altitudes",
    chapter: "11.2 VFR/IFR Cruising Altitudes",
    mainChapter: "Airspace and Flight Rules",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-cruising-altitudes",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/cruising-altitudes",
      },
    ],
  },
  "right-of-way-rules": {
    title: "11.3 Right-of-Way Rules",
    chapter: "11.3 Right-of-Way Rules",
    mainChapter: "Airspace and Flight Rules",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-right-of-way",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/right-of-way",
      },
    ],
  },
  "far-aim-overview": {
    title: "11.4 FAR/AIM Overview and Minimum Safe Altitudes",
    chapter: "11.4 FAR/AIM Overview and Minimum Safe Altitudes",
    mainChapter: "Airspace and Flight Rules",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-far-aim",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/far-aim",
      },
    ],
  },
  "simbrief-tutorials": {
    title: "12.1 SimBrief Tutorials",
    chapter: "12.1 SimBrief Tutorials",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-simbrief",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/simbrief",
      },
    ],
  },
  "setting-up-flight-plan": {
    title: "Setting Up Your First Flight Plan",
    chapter: "12.1 SimBrief Tutorials",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flight-plan",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flight-plan",
      },
    ],
  },
  "importing-msfs-xplane": {
    title: "Importing into MSFS or X-Plane",
    chapter: "12.1 SimBrief Tutorials",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-importing",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/importing",
      },
    ],
  },
  "customizing-aircraft-profiles": {
    title: "Customizing Aircraft Profiles",
    chapter: "12.1 SimBrief Tutorials",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-customizing",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/customizing",
      },
    ],
  },
  "chart-reading": {
    title: "12.2 Chart Reading",
    chapter: "12.2 Chart Reading",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-charts",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/charts",
      },
    ],
  },
  "understanding-stars-sids": {
    title: "Understanding STARs and SIDs",
    chapter: "12.2 Chart Reading",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-stars-sids",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/stars-sids",
      },
    ],
  },
  "interpreting-approach-plates": {
    title: "Interpreting Approach Plates",
    chapter: "12.2 Chart Reading",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-approach-plates",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/approach-plates",
      },
    ],
  },
  "runway-analysis": {
    title: "Runway Analysis",
    chapter: "12.2 Chart Reading",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-runway",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/runway",
      },
    ],
  },
  "vr-sim-accessories": {
    title: "12.3 VR and Sim Accessories",
    chapter: "12.3 VR and Sim Accessories",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vr",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vr-accessories",
      },
    ],
  },
  "vr-setup": {
    title: "VR Setup for MSFS",
    chapter: "12.3 VR and Sim Accessories",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vr-setup",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vr-setup",
      },
    ],
  },
  "best-hotas-yokes": {
    title: "Best HOTAS and Yokes",
    chapter: "12.3 VR and Sim Accessories",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-hotas-yokes",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/hotas-yokes",
      },
    ],
  },
  "configuring-stream-deck": {
    title: "Configuring Stream Deck Profiles",
    chapter: "12.3 VR and Sim Accessories",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-stream-deck",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/stream-deck",
      },
    ],
  },
  "peripherals-setup": {
    title: "12.4 Peripherals Setup",
    chapter: "12.4 Peripherals Setup",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-peripherals",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/peripherals",
      },
    ],
  },
  "choosing-hotas-yoke": {
    title: "Choosing the Right HOTAS/Yoke",
    chapter: "12.4 Peripherals Setup",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-choosing-hotas",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/choosing-hotas",
      },
    ],
  },
  "configuring-rudder-pedals": {
    title: "Configuring Rudder Pedals",
    chapter: "12.4 Peripherals Setup",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-rudder-pedals",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/rudder-pedals",
      },
    ],
  },
  "fine-tuning-sensitivities": {
    title: "Fine-Tuning Sensitivities",
    chapter: "12.4 Peripherals Setup",
    mainChapter: "Learning Resources and Tools",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-sensitivities",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/sensitivities",
      },
    ],
  },
  "real-world-procedures-sim": {
    title: "13.1 Real-World Procedures in Sim",
    chapter: "13.1 Real-World Procedures in Sim",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-real-procedures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/real-world-procedures",
      },
    ],
  },
  "flying-faa-regulations": {
    title: "Flying as per FAA Regulations",
    chapter: "13.1 Real-World Procedures in Sim",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-faa-regulations",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/faa-regulations",
      },
    ],
  },
  "simulating-atc-communications": {
    title: "Simulating ATC Communications",
    chapter: "13.1 Real-World Procedures in Sim",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-atc-communications",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/atc-communications",
      },
    ],
  },
  "realistic-emergency-scenarios": {
    title: "Realistic Emergency Scenarios",
    chapter: "13.1 Real-World Procedures in Sim",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-emergency-scenarios",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/emergency-scenarios",
      },
    ],
  },
  "joining-virtual-airlines": {
    title: "13.2 Joining Virtual Airlines",
    chapter: "13.2 Joining Virtual Airlines",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-virtual-airlines",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/virtual-airlines",
      },
    ],
  },
  "va-membership-benefits": {
    title: "Benefits of VA Membership",
    chapter: "13.2 Joining Virtual Airlines",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-va-membership",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/va-membership",
      },
    ],
  },
  "setting-up-vatsim-flights": {
    title: "Setting Up Flights in VATSIM",
    chapter: "13.2 Joining Virtual Airlines",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vatsim",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vatsim-flights",
      },
    ],
  },
  "tracking-hours-progression": {
    title: "Tracking Hours and Progression",
    chapter: "13.2 Joining Virtual Airlines",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-tracking-hours",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/tracking-hours",
      },
    ],
  },
  "real-world-flight-planning": {
    title: "13.3 Real-World Flight Planning",
    chapter: "13.3 Real-World Flight Planning",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-flight-planning",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/real-world-planning",
      },
    ],
  },
  "using-real-world-weather": {
    title: "Using Real-World Weather Data in Sim",
    chapter: "13.3 Real-World Flight Planning",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-weather-data",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/weather-data",
      },
    ],
  },
  "planning-routes-constraints": {
    title: "Planning Routes with Realistic Constraints",
    chapter: "13.3 Real-World Flight Planning",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-routes-constraints",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/routes-constraints",
      },
    ],
  },
  "long-haul-flights-procedures": {
    title: "Simulating Long-Haul Flights with Realistic Procedures",
    chapter: "13.3 Real-World Flight Planning",
    mainChapter: "Advanced Skills and Real-World Applications",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-long-haul",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/long-haul-flights",
      },
    ],
  },
  "flying-with-failures": {
    title: "14.1 Flying with Failures",
    chapter: "14.1 Flying with Failures",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-failures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/flying-failures",
      },
    ],
  },
  "random-failures": {
    title: "Setting Up Random Failures",
    chapter: "14.1 Flying with Failures",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-random-failures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/random-failures",
      },
    ],
  },
  "managing-system-failures": {
    title: "Managing System Failures in Sim",
    chapter: "14.1 Flying with Failures",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-system-failures",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/system-failures",
      },
    ],
  },
  "emergency-descents-landings": {
    title: "Emergency Descents and Landings",
    chapter: "14.1 Flying with Failures",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-emergency-descents",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/emergency-landings",
      },
    ],
  },
  "multi-crew-coordination": {
    title: "14.2 Multi-Crew Coordination",
    chapter: "14.2 Multi-Crew Coordination",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-multi-crew",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/multi-crew-coordination",
      },
    ],
  },
  "pilot-in-command-role": {
    title: "Role of Pilot-in-Command vs. Co-Pilot",
    chapter: "14.2 Multi-Crew Coordination",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-pilot-command",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/pilot-command-role",
      },
    ],
  },
  "shared-cockpit-features": {
    title: "Using Shared Cockpit Features in MSFS/X-Plane",
    chapter: "14.2 Multi-Crew Coordination",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-shared-cockpit",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/shared-cockpit",
      },
    ],
  },
  "communicating-with-atc-team": {
    title: "Communicating with Virtual ATC as a Team",
    chapter: "14.2 Multi-Crew Coordination",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-atc-team",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/atc-communication-team",
      },
    ],
  },
  "advanced-atc-systems": {
    title: "14.3 Advanced ATC Systems",
    chapter: "14.3 Advanced ATC Systems",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-advanced-atc",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/advanced-atc-systems",
      },
    ],
  },
  "mastering-vatsim-ivao": {
    title: "Mastering VATSIM and IVAO",
    chapter: "14.3 Advanced ATC Systems",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-vatsim-ivao",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/vatsim-ivao",
      },
    ],
  },
  "pilotedge-realistic-atc": {
    title: "Using PilotEdge for Realistic ATC",
    chapter: "14.3 Advanced ATC Systems",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-pilotedge",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/pilotedge-atc",
      },
    ],
  },
  "handling-complex-airspace": {
    title: "Handling Complex Airspace with Confidence",
    chapter: "14.3 Advanced ATC Systems",
    mainChapter: "Professional-Level Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-complex-airspace",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/complex-airspace",
      },
    ],
  },
  "becoming-virtual-airline-pilot": {
    title: "15.1 Becoming a Virtual Airline Pilot",
    chapter: "15.1 Becoming a Virtual Airline Pilot",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-virtual-airline",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/virtual-airline",
      },
    ],
  },
  "applying-to-virtual-airlines": {
    title: "Applying to Virtual Airlines",
    chapter: "15.1 Becoming a Virtual Airline Pilot",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-applying-airlines",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/applying-virtual-airlines",
      },
    ],
  },
  "completing-checkrides-evaluations": {
    title: "Completing Checkrides and Evaluations",
    chapter: "15.1 Becoming a Virtual Airline Pilot",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-checkrides",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/checkrides-evaluations",
      },
    ],
  },
  "building-seniority-virtual-airlines": {
    title: "Building Seniority in Virtual Airlines",
    chapter: "15.1 Becoming a Virtual Airline Pilot",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-seniority",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/seniority-virtual-airlines",
      },
    ],
  },
  "exploring-real-world-aviation-careers": {
    title: "15.2 Exploring Real-World Aviation Careers",
    chapter: "15.2 Exploring Real-World Aviation Careers",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-real-world-careers",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/real-world-careers",
      },
    ],
  },
  "transitioning-sim-to-real-pilot": {
    title: "Transitioning from Sim Pilot to Real Pilot",
    chapter: "15.2 Exploring Real-World Aviation Careers",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-sim-to-real-pilot",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/sim-to-real-pilot",
      },
    ],
  },
  "careers-in-atc-maintenance": {
    title: "Careers in ATC, Aircraft Maintenance, and More",
    chapter: "15.2 Exploring Real-World Aviation Careers",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-careers-atc",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/careers-atc-maintenance",
      },
    ],
  },
  "aviation-management-roles": {
    title: "Exploring Aviation Management Roles",
    chapter: "15.2 Exploring Real-World Aviation Careers",
    mainChapter: "Career Progression in Simulation",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-aviation-management",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/aviation-management",
      },
    ],
  },
  "joining-sim-community": {
    title: "16.1 Joining the Sim Community",
    chapter: "16.1 Joining the Sim Community",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-sim-community",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/sim-community",
      },
    ],
  },
  "popular-forums-discords": {
    title: "Popular Forums and Discords",
    chapter: "16.1 Joining the Sim Community",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-forums-discords",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/forums-discords",
      },
    ],
  },
  "contributing-to-communities": {
    title: "Contributing to Sim Communities",
    chapter: "16.1 Joining the Sim Community",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-contribute-community",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/contribute-community",
      },
    ],
  },
  "attending-online-real-world-events": {
    title: "Attending Online and Real-World Events",
    chapter: "16.1 Joining the Sim Community",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-events",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/events",
      },
    ],
  },
  "participating-in-fly-ins": {
    title: "16.2 Participating in Fly-Ins",
    chapter: "16.2 Participating in Fly-Ins",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-fly-ins",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/fly-ins",
      },
    ],
  },
  "organizing-group-flights": {
    title: "Organizing Group Flights",
    chapter: "16.2 Participating in Fly-Ins",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-group-flights",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/group-flights",
      },
    ],
  },
  "flying-large-scale-events": {
    title: "Flying in Large-Scale Events",
    chapter: "16.2 Participating in Fly-Ins",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-large-scale-events",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/large-scale-events",
      },
    ],
  },
  "sharing-experiences": {
    title: "Sharing Experiences with Fellow Simmers",
    chapter: "16.2 Participating in Fly-Ins",
    mainChapter: "Community and Events",
    isLive: false,
    image: "/placeholder.jpeg",
    resources: [
      {
        title: "The Evolution of Aviation Technology",
        type: "video",
        url: "https://www.youtube.com/watch?v=example-sharing-experiences",
      },
      {
        title: "The Evolution of Aviation Technology",
        type: "article",
        url: "https://www.example.com/sharing-experiences",
      },
    ],
  },
};
