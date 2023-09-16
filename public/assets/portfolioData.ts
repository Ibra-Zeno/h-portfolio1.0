export type PortfolioItem = {
  id: number;
  name: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  videos?: string[];
};

export type PortfolioDataProps = {
  [project: string]: PortfolioItem;
};

export const portfolioData: PortfolioDataProps = {
  integrationA: {
    id: 1,
    name: "integrationA",
    title: "Integration",
    date: "2020-01-01",
    description:
      "Established a state-of-the-art composting facility serving the Reading and Purley communities, seamlessly transforming organic waste from the region into high-quality compost. Our innovative design encompasses a spacious composting center, an inviting viewing deck, a dedicated compost storage area, an educational hub, a welcoming café, versatile meeting spaces, and efficient office facilities, all harmoniously integrated into the site. The resulting compost is not only sold but also utilised on-site, closing the sustainability loop, and fostering a greener, more eco-conscious environment.",
    images: [
      "1a.jpg",
      "1b.jpg",
      "1c.jpg",
      "1d.jpg",
      "1e.jpg",
      "1f.jpg",
      "1g.jpg",
      "1h.jpg",
      "1i.jpg",
      "1j.jpg",
      "1k.jpg",
      "1l.jpg",
      "1m.jpg",
      "1n.jpg",
      "1o.jpg",
    ],
    videos: [],
  },
  internship: {
    id: 2,
    name: "internship",
    title: "Internship",
    date: "2020-01-01",
    description:
      "Collaborated closely with a project management company and a town planner practice to craft an extensive property extension plan. Given the client's preference for a phased approach to the project, we meticulously devised a strategy encompassing three distinct phases. In each phase, we optimised the utilisation of the spaces, ensuring they functioned seamlessly within the evolving project. To provide our client with a vivid visualization of the design, we developed a detailed SketchUp model, allowing them to envision the transformation at every stage of the project.",
    images: ["2a.jpg", "2b.jpg", "2c.jpg", "2d.jpg", "2e.jpg", "2f.jpg"],
    videos: [],
  },
  complexity: {
    id: 3,
    name: "complexity",
    title: "Project 3",
    date: "2020-01-01",
    description: "This is project 3",
    images: ["3a.jpg", "3b.jpg", "3c.jpg", "3d.jpg", "3e.jpg", "3f.jpg"],
  },
  rxm: {
    id: 4,
    name: "rxm",
    title: "Reflective and Explorative Making in Architecture",
    date: "2020-01-01",
    description:
      "Practicing with a variety of materials, like concrete, timber, paper, and metal. A better understanding of the material properties helped create an abstract composition and this project involved experimenting with various materials like plywood, concrete, steel, wire, paper, and plaster. Inspired by nature and geological formations, aimed to create functional yet visually appealing spaces. Shapes, balance, and spatial use were crucial. Extensive material testing led me to focus on paper's flexibility and unique possibilities, influenced by artists like Veo Friis Jespersen. Wire and metal's versatility, inspired by László Moholy-Nagy, allowed for dynamic shapes and connections. Simplicity and intersecting shapes guided the design.",
    images: [
      "4a.jpg",
      "4b.jpg",
      "4c.jpg",
      "4d.jpg",
      "4e.jpg",
      "4f.jpg",
      "4g.jpg",
      "4h.jpg",
      "4i.jpg",
    ],
  },
  industryAndPractice: {
    id: 5,
    name: "industryAndPractice",
    title: "Industry and Practice",
    date: "2020-01-01",
    description:
      "As a team we designed for our end of show architecture exhibition, our design priorities cost-effectiveness and sustainability by integrating natural ventilation to reduce energy consumption. We used three primary materials—plywood, concrete, and steel—to craft a space that invites visitors to appreciate the projects design by the students from a variety of years. \n \n These materials are thoughtfully combined to create a pathway for visitors, allowing us to gently guide their experience within the space. The exhibition aims to provide a functional and aesthetically pleasing environment where conversations can naturally unfold, and students' efforts can be celebrated. ",
    images: [
      "5a.jpg",
      "5b.jpg",
      "5c.jpg",
      "5d.jpg",
      "5e.jpg",
      "5f.jpg",
      "5g.jpg",
      "5h.jpg",
      "5i.jpg",
      "5j.jpg",
      "5k.jpg",
      "5l.jpg",
      "5m.jpg",
      "5n.jpg",
      "5o.jpg",
      "5p.jpg",
    ],
  },
  danceStudio: {
    id: 6,
    name: "danceStudio",
    title: "Dance Studio",
    date: "2020-01-01",
    description:
      "Reviving an 18th Century building in Reading Borough, the Dance Reading Studio is a captivating blend of history and innovation. The design preserved the building's charming red brick exterior while adding a stunning glass dome for a modern touch, complete with solar panels for sustainability. A key part of the design is creating versatile spaces, well-equipped dance studios, and dancer-friendly flooring for safety. Large windows bring in natural light and views of the lush surroundings, enhancing the ambiance. ",
    images: [
      "6a.jpg",
      "6b.jpg",
      "6c.jpg",
      "6d.jpg",
      "6e.jpg",
      "6f.jpg",
      "6g.jpg",
      "6h.jpg",
      "6i.jpg",
      "6j.jpg",
      "6k.jpg",
      "6l.jpg",
      "6m.jpg",
      "6n.jpg",
    ],
  },
  blackHistoryMural: {
    id: 7,
    name: "blackHistoryMural",
    title: "Black History Mural",
    date: "2020-01-01",
    description:
      "Within the Central Club Building in Reading resides the iconic Black History Mural, a local treasure since its creation in June 1990. Despite facing threats since 2007, this mural remains a cherished symbol of our community's cultural richness. Our site design prioritises the safety for the four residential households, offering spaces that cater to their unique needs and promote seamless mobility. We've curated a diverse blend of public, semi-public, and private areas, including shared interior doors and a communal rooftop garden. This thoughtful design ensures accessibility for all residents, fosters community values, and embraces sustainability through solar panels, enhancing the building's financial viability.",
    images: [
      "7a.jpg",
      "7b.jpg",
      "7c.jpg",
      "7d.jpg",
      "7e.jpg",
      "7f.jpg",
      "7g.jpg",
      "7h.jpg",
      "7i.jpg",
      "7j.jpg",
      "7k.jpg",
      "7l.jpg",
      "7m.jpg",
    ],
  },
  vc: {
    id: 8,
    name: "vc",
    title: "Visualisation and Communication",
    date: "2020-01-01",
    description:
      "This project centred around a specific house, aiming to delve deeply into various design considerations, ranging from landscaping to the glass ground floor and the intricacies of the spiral staircase. The focus was on experimenting with diverse methods of illustrating the design.",
    images: ["8a.jpg", "8b.jpg", "8c.jpg", "8d.jpg"],
  },
  cardStructure: {
    id: 9,
    name: "cardStructure",
    title: "Card Structure",
    date: "2020-01-01",
    description:
      "Our project focuses on enhancing the pathway near Reading Minster of St. Mary the Virgin, frequently used by diverse community members. We've integrated two walls into this path, cleverly merging the clock tower's checkerboard pattern with the surrounding natural elements, including an ancient nearby tree. Utilising varied square sizes (50mm by 50mm, 75mm by 75mm, and 100mm by 100mm) in a 1:5 model, alongside a larger 1:1 structure, strategically placed for pedestrian convenience. These walls gently encourage a slower pace, inviting individuals to immerse themselves in the minster's rich history. Our design aspires to rekindle appreciation for this landmark, often overshadowed by the daily urban hustle and bustle.",
    images: [
      "9a.jpg",
      "9b.jpg",
      "9c.jpg",
      "9d.jpg",
      "9e.jpg",
      "9f.jpg",
      "9g.jpg",
      "9h.jpg",
      "9i.jpg",
      "9j.jpg",
      "9k.jpg",
      "9m.jpeg",
      "9n.jpeg",
    ],
    videos: ["9l.mp4"],
  },
  epq: {
    id: 10,
    name: "epq",
    title: "EPQ",
    date: "2020-01-01",
    description:
      "As part of an Extended Project Qualification, a life-sized homeless shelter that addresses the pressing homelessness crisis was designed. The goal was to provide a mobile, temporary solution. It began with a mini prototype, testing the weight and mechanics necessary for expanding the shelter when in use and collapsing it for transportation. The mechanism successfully reduced the shelter to nearly half its original size. The primary objectives were to develop a transportable, durable, secure, and warm space, ensuring the safety and well-being of those who would rely on it.",
    images: [
      "10a.jpeg",
      "10b.jpg",
      "10c.jpg",
      "10d.JPG",
      "10e.JPG",
      "10f.JPG",
      "10g.JPG",
      "10h.PNG",
      "10i.jpg",
    ],
  },
};
// comment!!!!!
