export interface Project {
  id: number;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  service: string;
  image: string;
  images?: string[];
  desc: string;
  article?: string;
}

export const COLORS = {
  primary: 'hsl(207, 96%, 69%)',
  primaryHover: 'hsl(207, 86%, 60%)',
  primaryLight: 'hsla(207, 96%, 69%, 0.1)',
  secondary: 'hsl(92, 90%, 64%)',
  secondaryLight: 'hsla(92, 90%, 64%, 0.1)',
};

export const ALL_PROJECTS: Project[] = [
  {
    id: 13,
    title: "Salak Brine Heat Recovery Power Plant",
    client: "Star Energy",
    location: "Sukabumi, West Java",
    year: "Sep 2022 - Mar 2023",
    category: "power-plant",
    service: "Integrated Services",
    image: "header.jpg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Scaffolding and Insulation works for Brine Heat Recovery unit at Salak Geothermal field.",
    article: "The Salak Brine Heat Recovery Power Plant project represents a critical milestone in optimizing geothermal energy extraction. Operating in a high-temperature and highly volatile environment, PT Estima Reka Sakti was entrusted with providing integrated scaffolding and thermal insulation services. \n\nOur engineering team designed and erected robust temporary access structures that allowed other contractors to work safely around the extreme heat of the brine pipelines. Furthermore, the precise application of our hot insulation materials significantly minimized heat loss, directly contributing to the plant's overall thermal efficiency and energy output. The project was completed strictly within the timeline, maintaining a flawless safety record despite the challenging geographical and environmental conditions."
  },
  {
    id: 7,
    title: "EPC-1 Banyu Urip Project",
    client: "Pertamina / MCL (ExxonMobil)",
    location: "Bojonegoro, East Java",
    year: "Jun 2013 - Dec 2015",
    category: "oil-gas",
    service: "Integrated Services",
    image: "projects/cepu.jpg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Major scaffolding and insulation project for the EPC-1 early production facilities.",
    article: "The EPC-1 Banyu Urip Project stands as one of the most monumental oil and gas developments in Indonesia, spearheaded by ExxonMobil Cepu Limited. PT Estima Reka Sakti played a pivotal role during the construction and early production phases by delivering massive-scale scaffolding and insulation solutions.\n\nDeploying hundreds of certified scaffolders and insulation technicians, we successfully navigated the rigorous international safety standards imposed by the client. Our team executed the installation of thousands of cubic meters of scaffolding to support heavy equipment erection and piping works. Through meticulous planning and relentless adherence to HSE protocols, we proudly contributed to the project's remarkable achievement of millions of safe man-hours with zero Lost Time Injury (LTI)."
  },
  {
    id: 12,
    title: "Gas Facilities Pelintung Project",
    client: "PT. Aneka Gas Industri Tbk.",
    location: "Pelintung, Dumai",
    year: "Sep 2020 - Nov 2020",
    category: "industrial",
    service: "Scaffolding",
    image: "projects/pelitung.jpeg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Industrial gas facility construction support providing safe access solutions.",
    article: "Located in the industrial hub of Pelintung, Dumai, this project required highly reliable access solutions for the construction of a new industrial gas facility by PT Aneka Gas Industri Tbk. Working around highly pressurized gas lines and intricate facility layouts demands extreme precision and uncompromised structural integrity.\n\nPT Estima Reka Sakti delivered specialized industrial scaffolding systems designed to bear heavy loads while ensuring 100% fall protection for the engineering workforce. Our swift mobilization and efficient dismantling process allowed the main construction phases to proceed without any delays, proving our capability to act as a reliable backbone for critical industrial expansions."
  },
  {
    id: 9,
    title: "Routine Maintenance",
    client: "PT. Air Liquid Indonesia",
    location: "Cibitung & Cikarang",
    year: "Apr 2016 - Dec 2016",
    category: "industrial",
    service: "Insulation",
    image: "projects/ailindo.jpg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Cold insulation maintenance for industrial gas distribution pipelines.",
    article: "Maintaining the integrity of cryogenic systems is vital for the continuous distribution of industrial gases. During our tenure with PT Air Liquid Indonesia, we executed comprehensive cold insulation maintenance across their Cibitung and Cikarang facilities.\n\nOur specialists utilized advanced Polyurethane (PU) and Polyisocyanurate (PIR) foam applications to prevent heat ingress and condensation on extreme low-temperature pipelines. By replacing degraded insulation layers with high-grade materials, we effectively eliminated thermal leaks. This proactive maintenance not only prevented potential pipeline corrosion under insulation (CUI) but also drastically reduced the energy required to maintain the required cryogenic temperatures."
  },
  {
    id: 5,
    title: "Cogeneration Boiler Upgrade 2",
    client: "PT. Sumi Rubber",
    location: "Cikampek, West Java",
    year: "May 2011 - Jul 2011",
    category: "power-plant",
    service: "Insulation",
    image: "projects/boiler.png",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Scaffolding and thermal insulation for Cogeneration Boiler efficiency upgrade.",
    article: "To support PT Sumi Rubber's commitment to energy efficiency, PT Estima Reka Sakti was contracted to handle the scaffolding and thermal insulation for their Cogeneration Boiler Upgrade. A boiler's efficiency is heavily dictated by its ability to retain heat, making top-tier insulation an absolute necessity.\n\nOur team installed high-density rockwool and calcium silicate insulation clad with aluminum jacketing to withstand the intense operational heat. Simultaneously, we provided the necessary access scaffolding to facilitate the seamless upgrade of the boiler's internal components. The result was a significant drop in surface temperature and a measurable increase in the factory's overall thermodynamic efficiency."
  },
  {
    id: 1,
    title: "Expansion Line-4 Project Phase 1-3",
    client: "PT. South Pasific Viscose",
    location: "Purwakarta, West Java",
    year: "2009 - 2011",
    category: "industrial",
    service: "Integrated Services",
    image: "projects/expansion.jpeg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Multi-phase expansion project support involving extensive scaffolding and insulation works.",
    article: "The Expansion Line-4 Project for PT South Pacific Viscose was a multi-year, multi-phase endeavor that significantly scaled up the plant's production capacity. As a trusted partner from Phase 1 through 3, PT Estima Reka Sakti provided integrated scaffolding and hot/cold insulation services.\n\nThis project required us to adapt continuously to an evolving factory layout. We engineered complex scaffolding structures around active chemical processing units, ensuring that factory operations were not disrupted during the expansion. Our comprehensive insulation works on new storage tanks, vessels, and piping networks ensured that the newly expanded line met global manufacturing standards for thermal control."
  },
  {
    id: 10,
    title: "TYK Gas Asahi Project",
    client: "PT. TYK Gas Indonesia",
    location: "Cikampek, West Java",
    year: "Aug 2017 - Nov 2017",
    category: "industrial",
    service: "Scaffolding",
    image: "projects/cikampek.png",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Installation of access scaffolding for new gas plant facility construction.",
    article: "For the construction of the new TYK Gas Asahi plant facility, structural safety and rapid deployment were the primary objectives. PT Estima Reka Sakti took charge of the comprehensive scaffolding requirements, ensuring that all subsequent engineering tasks could be executed at height with absolute safety.\n\nOur certified scaffolders designed customized tubular and modular scaffolding frameworks that perfectly contoured to the complex geometry of the gas facility's structural steel. By conducting rigorous daily tagging and inspections, we maintained a zero-incident environment, allowing the mechanical and electrical teams to expedite their installation processes safely."
  },
  {
    id: 6,
    title: "Palm Oil Mill Cap.45",
    client: "PT. Astra Agro Lestari",
    location: "South Kalimantan",
    year: "Jun 2012 - Oct 2012",
    category: "industrial",
    service: "Integrated Services",
    image: "projects/palm.jpeg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Complete insulation and scaffolding services for Palm Oil Mill capacity expansion.",
    article: "Supporting Indonesia's massive agricultural sector, PT Estima Reka Sakti participated in the capacity expansion of PT Astra Agro Lestari's Palm Oil Mill in South Kalimantan. Processing crude palm oil requires extensive networks of heated pipelines and sterilizer vessels, which demand superior thermal insulation.\n\nWe executed the installation of robust hot insulation across the newly expanded milling lines to prevent the coagulation of palm oil during transfer. Additionally, our scaffolding teams built reliable temporary access around the massive silos and boilers. Our prompt execution ensured the mill could achieve its new 45-ton capacity target right on schedule without compromising worker safety."
  },
  {
    id: 8,
    title: "EPC-1 Banyu Urip Support",
    client: "PT. Schlumberger GN",
    location: "Bojonegoro, East Java",
    year: "Nov 2014 - Feb 2015",
    category: "oil-gas",
    service: "Integrated Services",
    image: "projects/schlumberger.jpg",
    images: [
      "header.jpg",
      "projects/cepu.jpg",
      "projects/pelitung.jpeg"
    ],
    desc: "Supporting specialized well services with high-safety standard scaffolding.",
    article: "Working alongside global oilfield services giant Schlumberger requires an unwavering commitment to international HSE policies. During the EPC-1 Banyu Urip Support phase, PT Estima Reka Sakti provided specialized scaffolding solutions to facilitate critical well-testing and wireline operations.\n\nThe dynamic nature of well services means our scaffolding designs had to be highly adaptable, rapidly deployable, and resilient against harsh weather conditions and vibrations. We utilized drop-forged couplers and heavy-duty BS1139 standard pipes. Our impeccable safety documentation and execution methodology earned us high praise, reinforcing our reputation as a top-tier scaffolding provider in the upstream oil and gas sector."
  }
];

export const CLIENTS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  logo: `/clients/${i + 1}-1.png`,
  name: `Client Partner ${i + 1}`
}));