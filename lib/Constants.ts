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
    id: 1,
    title: "Expansion Line-4 Project phase 1-3",
    client: "PT. South Pacific Viscose",
    location: "Purwakarta",
    year: "Sep 2009 - Oct 2010",
    category: "industrial",
    service: "Scaffolding & Insulation",
    image: "projects/expansion.jpeg",
    images: ["projects/expansion.jpeg"],
    desc: "Multi-phase expansion project support involving extensive scaffolding and insulation works.",
    article: "The Expansion Line-4 Project for PT South Pacific Viscose was a multi-phase endeavor that significantly scaled up the plant's production capacity. As a trusted partner, PT Estima Reka Sakti provided integrated scaffolding and insulation services.\n\nThis project required us to adapt continuously to an evolving factory layout. We engineered complex scaffolding structures around active chemical processing units, ensuring that factory operations were not disrupted during the expansion."
  },
  // {
  //   id: 3,
  //   title: "Routine Maintenance",
  //   client: "PT. Nof Mas Chemical Industries",
  //   location: "MM 2100 Cibitung",
  //   year: "Feb 2011 - Nov 2011",
  //   category: "industrial",
  //   service: "Hot & Cold Insulation",
  //   image: "projects/maintenance.jpg",
  //   images: ["projects/maintenance.jpg"],
  //   desc: "Routine hot and cold insulation maintenance for chemical industrial plant operations.",
  //   article: "We provided routine hot and cold insulation maintenance for PT. Nof Mas Chemical Industries in MM 2100 Cibitung. Maintaining proper insulation is crucial in chemical processing to ensure reaction temperatures are kept stable and energy efficiency is maximized."
  // },
  {
    id: 4,
    title: "Routine Maintenance",
    client: "PT. Air Liquid Indonesia",
    location: "Cilegon & Cibitung",
    year: "Feb 2011 - Nov 2011",
    category: "industrial",
    service: "Cold Insulation",
    image: "projects/ailindo.jpg",
    images: ["projects/ailindo.jpg"],
    desc: "Cold insulation maintenance for industrial gas distribution.",
    article: "Maintaining the integrity of cryogenic systems is vital for the continuous distribution of industrial gases. During our tenure with PT Air Liquid Indonesia, we executed comprehensive cold insulation maintenance.\n\nOur specialists utilized advanced applications to prevent heat ingress and condensation on extreme low-temperature pipelines, eliminating thermal leaks and preventing potential pipeline corrosion under insulation (CUI)."
  },
  {
    id: 5,
    title: "Cogeneration Boiler Upgrade 2",
    client: "PT. Sumi Rubber",
    location: "Cikampek",
    year: "May 2011 - Jul 2011",
    category: "power-plant",
    service: "Scaffolding & Insulation",
    image: "projects/boiler.png",
    images: ["projects/boiler.png"],
    desc: "Scaffolding and thermal insulation for Cogeneration Boiler efficiency upgrade.",
    article: "To support PT Sumi Rubber's commitment to energy efficiency, PT Estima Reka Sakti was contracted to handle the scaffolding and thermal insulation for their Cogeneration Boiler Upgrade. A boiler's efficiency is heavily dictated by its ability to retain heat, making top-tier insulation an absolute necessity.\n\nOur team installed high-density rockwool and calcium silicate insulation to withstand the intense operational heat, and built scaffolding to facilitate the seamless upgrade."
  },
  {
    id: 6,
    title: "Palm Oil Mill Cap.45",
    client: "PT. Astra Agro Lestari",
    location: "South Kalimantan",
    year: "Jun 2012 - Oct 2012",
    category: "industrial",
    service: "Scaffolding & Insulation",
    image: "projects/palm.jpeg",
    images: ["projects/palm.jpeg"],
    desc: "Complete insulation and scaffolding services for Palm Oil Mill capacity expansion.",
    article: "Supporting Indonesia's massive agricultural sector, PT Estima Reka Sakti participated in the capacity expansion of PT Astra Agro Lestari's Palm Oil Mill in South Kalimantan. Processing crude palm oil requires extensive networks of heated pipelines and sterilizer vessels, which demand superior thermal insulation.\n\nWe executed the installation of robust hot insulation across the newly expanded milling lines to prevent the coagulation of palm oil during transfer. Additionally, our scaffolding teams built reliable temporary access around the massive silos and boilers."
  },
  {
    id: 7,
    title: "EPC-1 Banyu Urip Project",
    client: "Pertamina / MCL",
    location: "Bojonegoro",
    year: "Jun 2013 - Dec 2015",
    category: "oil-gas",
    service: "Scaffolding & Insulation",
    image: "projects/cepu.jpg",
    images: ["projects/cepu.jpg"],
    desc: "Major scaffolding and insulation project for the EPC-1 early production facilities.",
    article: "The EPC-1 Banyu Urip Project stands as one of the most monumental oil and gas developments in Indonesia, spearheaded by ExxonMobil Cepu Limited. PT Estima Reka Sakti played a pivotal role during the construction and early production phases by delivering massive-scale scaffolding and insulation solutions.\n\nDeploying hundreds of certified scaffolders and insulation technicians, we successfully navigated the rigorous international safety standards imposed by the client, achieving millions of safe man-hours with zero Lost Time Injury (LTI)."
  },
  {
    id: 8,
    title: "EPC-1 Banyu Urip Project",
    client: "PT. Schlumberger GN",
    location: "Bojonegoro",
    year: "Nov 2014 - Feb 2015",
    category: "oil-gas",
    service: "Scaffolding & Insulation",
    image: "projects/schlumberger.jpg",
    images: ["projects/schlumberger.jpg"],
    desc: "Supporting specialized well services with high-safety standard scaffolding.",
    article: "Working alongside global oilfield services giant Schlumberger requires an unwavering commitment to international HSE policies. During the EPC-1 Banyu Urip Support phase, PT Estima Reka Sakti provided specialized scaffolding solutions to facilitate critical well-testing and wireline operations.\n\nThe dynamic nature of well services means our scaffolding designs had to be highly adaptable, rapidly deployable, and resilient against harsh weather conditions and vibrations."
  },
  {
    id: 9,
    title: "Routine Maintenance",
    client: "PT. Air Liquid Indonesia",
    location: "Cibitung & Cikarang",
    year: "Apr 2016 - Dec 2016",
    category: "industrial",
    service: "Cold Insulation",
    image: "projects/ailindo.jpg",
    images: ["projects/ailindo.jpg", "projects/alindo2.jpeg"],
    desc: "Cold insulation maintenance for industrial gas distribution pipelines.",
    article: "In a continuation of our partnership with PT Air Liquid Indonesia, we provided routine cold insulation maintenance at their Cibitung and Cikarang facilities. Replacing degraded insulation layers with high-grade materials effectively eliminated thermal leaks. This proactive maintenance prevented potential pipeline corrosion under insulation (CUI) and drastically reduced the energy required to maintain required cryogenic temperatures."
  },
  {
    id: 10,
    title: "TYK Gas Asahi Project",
    client: "PT. TYK Gas Indonesia",
    location: "Cikampek",
    year: "Aug 2017 - Nov 2017",
    category: "industrial",
    service: "Scaffolding & Insulation",
    image: "projects/cikampek.png",
    images: ["projects/cikampek.png"],
    desc: "Installation of access scaffolding for new gas plant facility construction.",
    article: "For the construction of the new TYK Gas Asahi plant facility, structural safety and rapid deployment were the primary objectives. PT Estima Reka Sakti took charge of the comprehensive scaffolding requirements, ensuring that all subsequent engineering tasks could be executed at height with absolute safety.\n\nOur certified scaffolders designed customized tubular and modular scaffolding frameworks that perfectly contoured to the complex geometry of the gas facility's structural steel."
  },
  {
    id: 11,
    title: "Routine Maintenance",
    client: "PT. Air Liquid Indonesia",
    location: "Cibitung & Cikarang",
    year: "Jun 2018 - Dec 2018",
    category: "industrial",
    service: "Cold Insulation",
    image: "projects/alindo2.jpeg",
    images: ["projects/alindo2.jpeg"],
    desc: "Continued cold insulation maintenance for industrial gas distribution.",
    article: "Our consistent performance led to another routine maintenance contract for PT Air Liquid Indonesia. Utilizing advanced Polyurethane (PU) and Polyisocyanurate (PIR) foam applications, our specialists prevented heat ingress on extremely low-temperature pipelines, sustaining operational efficiency and ensuring safety."
  },
  {
    id: 12,
    title: "Gas Facilities Pelintung Project",
    client: "PT. Aneka Gas Industri Tbk.",
    location: "Pelintung - Dumai",
    year: "Sep 2020 - Nov 2020",
    category: "industrial",
    service: "Scaffolding & Insulation",
    image: "projects/pelitung.jpeg",
    images: ["projects/pelitung.jpeg"],
    desc: "Industrial gas facility construction support providing safe access solutions.",
    article: "Located in the industrial hub of Pelintung, Dumai, this project required highly reliable access solutions for the construction of a new industrial gas facility by PT Aneka Gas Industri Tbk. Working around highly pressurized gas lines and intricate facility layouts demands extreme precision and uncompromised structural integrity.\n\nPT Estima Reka Sakti delivered specialized industrial scaffolding systems designed to bear heavy loads while ensuring 100% fall protection for the engineering workforce."
  },
  {
    id: 13,
    title: "Salak Brine Heat Recovery Power Plant",
    client: "Star Energy",
    location: "Sukabumi",
    year: "Sep 2022 - Aug 2023",
    category: "oil-gas",
    service: "Scaffolding & Insulation",
    image: "header.jpg",
    images: ["header.jpg"],
    desc: "Scaffolding and Insulation works for Brine Heat Recovery unit at Salak Geothermal field.",
    article: "The Salak Brine Heat Recovery Power Plant project represents a critical milestone in optimizing geothermal energy extraction. Operating in a high-temperature and highly volatile environment, PT Estima Reka Sakti was entrusted with providing integrated scaffolding and thermal insulation services.\n\nOur engineering team designed and erected robust temporary access structures that allowed other contractors to work safely around the extreme heat of the brine pipelines."
  },
  {
    id: 15,
    title: "TPPI Revamp Project",
    client: "PT. Trans Pacific Petrochemical Indotama",
    location: "Tuban",
    year: "Aug 2023 - Mar 2024",
    category: "oil-gas",
    service: "Scaffolding & Insulation",
    image: "projects/tppi.jpeg",
    images: ["projects/tppi.jpeg", "projects/tppi2.jpeg", "projects/tppi3.jpeg"],
    desc: "Scaffolding and insulation services for petrochemical plant revamp.",
    article: "For the plant revamp project at Trans Pacific Petrochemical Indotama in Tuban, our teams delivered top-tier scaffolding and insulation services designed to meet rigorous petrochemical safety standards. This extensive upgrade required seamless coordination to ensure minimal downtime and uncompromising safety throughout execution."
  },
  {
    id: 16,
    title: "SP ABG Stage 1 Akasia Bagus Project",
    client: "Pertamina EP",
    location: "Indramayu",
    year: "Jun 2024 - Nov 2025",
    category: "oil-gas",
    service: "Scaffolding & Insulation",
    image: "projects/abg.jpeg",
    images: ["projects/abg.jpeg", "projects/abg2.jpeg", "projects/abg3.jpeg", "projects/abg4.jpeg", "projects/abg5.jpeg"],
    desc: "Scaffolding and insulation support for the Akasia Bagus oil and gas project.",
    article: "The Akasia Bagus Stage 1 project marks another critical endeavor with Pertamina EP. PT Estima Reka Sakti deployed specialized scaffolding and insulation systems adapted to the unique operational challenges of the Indramayu field, playing a crucial role in enabling safe, efficient construction and production workflows."
  },
  {
    id: 17,
    title: "Shell Chrysalis Project",
    client: "Shell",
    location: "Marunda",
    year: "Jan 2025 - On Going",
    category: "oil-gas",
    service: "Insulation",
    image: "projects/shell.jpg",
    images: ["projects/shell.jpg", "projects/shell2.jpeg", "projects/shell3.jpeg", "projects/shell4.jpeg", "projects/shell5.jpeg", "projects/shell6.jpeg"],
    desc: "Ongoing insulation services for the Shell Chrysalis project.",
    article: "As a testament to our steadfast commitment to safety and excellence, we are currently executing comprehensive insulation services for the Shell Chrysalis Project in Marunda. Operating under stringent global safety requirements, our team continues to deliver unmatched quality, protecting critical assets while ensuring 100% compliance with Shell's exacting standards."
  }
];

export const CLIENTS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  logo: `/clients/${i + 1}-1.png`,
  name: `Client Partner ${i + 1}`
}));