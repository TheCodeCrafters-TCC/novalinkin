import {
  Amelia,
  Charlotte,
  Daniel,
  David,
  Ethan,
  Henry,
  Isabella,
  James,
  Lucas,
  Mason,
  Mia,
  Michael,
  Olivia,
  Robert,
  Sophia,
  William,
  firstUser,
  seconduser,
} from "@/assets";

// Function to generate random views between min and max
const getRandomViews = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const Users = [
  {
    name: "David Willson",
    isVerified: false,
    image: David,
    connection: 1203,
    views: getRandomViews(100, 10000),
    description: "JavaScript enthusiast with a passion for web development.",
  },
  {
    name: "Robert Brown",
    isVerified: true,
    image: Robert,
    connection: 566,
    views: getRandomViews(100, 10000),
    description: "Full-stack developer specializing in Node.js and React.",
  },
  {
    name: "Daniel Lewis",
    isVerified: true,
    image: Daniel,
    connection: 705,
    views: getRandomViews(100, 10000),
    description: "Python developer with experience in data analysis and AI.",
  },
  {
    name: "Alice Smith",
    isVerified: false,
    image: firstUser,
    connection: 15600,
    views: getRandomViews(100, 10000),
    description:
      "Cloud computing expert and AWS certified solutions architect.",
  },
  {
    name: "Emma Johnson",
    isVerified: true,
    image: seconduser,
    connection: 1283,
    views: getRandomViews(100, 10000),
    description: "Frontend developer with a love for creating beautiful UIs.",
  },
  {
    name: "Michael Davis",
    isVerified: false,
    image: Michael,
    connection: 12,
    views: getRandomViews(100, 10000),
    description: "DevOps engineer skilled in CI/CD and automation tools.",
  },
  {
    name: "Olivia Martinez",
    isVerified: true,
    image: Olivia,
    connection: 984,
    views: getRandomViews(100, 10000),
    description: "Cybersecurity specialist with a knack for ethical hacking.",
  },
  {
    name: "James Anderson",
    isVerified: true,
    image: James,
    connection: 1734,
    views: getRandomViews(100, 10000),
    description: "Backend developer proficient in Java and microservices.",
  },
  {
    name: "Sophia Lee",
    isVerified: false,
    image: Sophia,
    connection: 289,
    views: getRandomViews(100, 10000),
    description: "UX/UI designer focused on creating user-centric designs.",
  },
  {
    name: "William Garcia",
    isVerified: true,
    image: William,
    connection: 875,
    views: getRandomViews(100, 10000),
    description: "Machine learning engineer with a background in statistics.",
  },
  {
    name: "Mia Rodriguez",
    isVerified: false,
    image: Mia,
    connection: 432,
    views: getRandomViews(100, 10000),
    description: "Mobile app developer experienced in iOS and Android.",
  },
  {
    name: "Ethan Wilson",
    isVerified: true,
    image: Ethan,
    connection: 620,
    views: getRandomViews(100, 10000),
    description: "Blockchain developer and cryptocurrency enthusiast.",
  },
  {
    name: "Isabella Martinez",
    isVerified: true,
    image: Isabella,
    connection: 1472,
    views: getRandomViews(100, 10000),
    description: "Data scientist with expertise in big data and analytics.",
  },
  {
    name: "Henry Walker",
    isVerified: false,
    image: Henry,
    connection: 78,
    views: getRandomViews(100, 10000),
    description:
      "Software tester with a focus on automation and quality assurance.",
  },
  {
    name: "Charlotte Harris",
    isVerified: true,
    image: Charlotte,
    connection: 953,
    views: getRandomViews(100, 10000),
    description:
      "Game developer with a passion for creating immersive experiences.",
  },
  {
    name: "Lucas Clark",
    isVerified: true,
    image: Lucas,
    connection: 1160,
    views: getRandomViews(100, 10000),
    description: "AR/VR developer exploring the future of augmented reality.",
  },
  {
    name: "Amelia Lewis",
    isVerified: false,
    image: Amelia,
    connection: 520,
    views: getRandomViews(100, 10000),
    description: "IT consultant with experience in network infrastructure.",
  },
  {
    name: "Mason Robinson",
    isVerified: true,
    image: Mason,
    connection: 1347,
    views: getRandomViews(100, 10000),
    description: "Robotics engineer with a passion for AI and automation.",
  },
];
