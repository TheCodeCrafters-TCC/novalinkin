import {
  Andriod,
  JSM,
  NB,
  NodeJsImg,
  Py,
  ReactImg,
  StachHub,
  SteveJs,
} from "@/assets";

export const belongdata = [
  { image: NodeJsImg, story: { img: { ReactImg, Andriod, Py } } },
  { image: Andriod },
  { image: Py },
  { image: ReactImg },
];

export const topcomms = [
  { image: NodeJsImg, name: "NodeJs Work Yard yyyyyyyyyy", isVerified: true },
  { image: StachHub, name: "Stack Hub", isVerified: false },
  { image: Py, name: "Py crafts", isVerified: true },
  { image: ReactImg, name: "Frontend Daily", isVerified: true },
  { image: Andriod, name: "Andriod Devs", isVerified: false },
];

export const commdata = [
  {
    name: "NodeJs Work yard",
    isVerified: true,
    members: 86560,
    image: NodeJsImg,
    desc: "Welcome to the home of backend gurus",
  },
  {
    name: "Steve-JS(community)",
    isVerified: true,
    members: 11500,
    image: SteveJs,
    desc: "Welcome to the home of backend gurus",
  },
  {
    name: "JSM David",
    isVerified: true,
    members: 13710,
    image: JSM,
    desc: "Welcome to the home of backend gurus",
  },
  {
    name: "Stack Hub",
    isVerified: false,
    members: 27000,
    image: StachHub,
    desc: "Welcome to the home of backend gurus",
  },
  {
    name: "NB Fullstack",
    isVerified: false,
    members: 1100,
    image: NB,
    desc: "Welcome to the home of backend gurus",
  },
];

const descriptions = [
  "A community for passionate developers who strive to push the boundaries of technology. Engage in deep discussions, share your projects, and learn from experts.",
  "The go-to place for JavaScript enthusiasts where you can find the latest news, tutorials, and resources. Collaborate on open-source projects and grow your skills.",
  "Join us for the latest in tech, where professionals and hobbyists come together to share knowledge, solve problems, and stay ahead in the fast-paced world of development.",
  "Your hub for all things Node.js. Whether you're a beginner or a seasoned pro, you'll find valuable resources, insightful discussions, and a supportive community.",
  "Connect with fullstack developers worldwide. Share your experiences, get advice, and collaborate on innovative projects. Together, we can build the future of web development.",
  "Share your knowledge and grow together in this dynamic community of developers. Participate in code reviews, pair programming sessions, and more to enhance your skills.",
  "Discover the power of backend development with fellow enthusiasts. Dive into best practices, explore new frameworks, and get support from a community that loves coding.",
  "Engage with experts and beginners alike in a space designed for collaboration and learning. Attend virtual meetups, webinars, and hackathons to stay engaged and informed.",
  "Stay updated with the latest trends in web development. From new libraries and frameworks to industry news and career advice, this community has it all for tech lovers.",
  "Collaborate on exciting projects, learn from experienced developers, and contribute to open-source initiatives. This is the place to turn your ideas into reality with like-minded individuals.",
];

// Function to add random descriptions to each community
function addRandomDescriptions(commdata: any[], descriptions: string | any[]) {
  commdata.forEach((community) => {
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    community.desc = descriptions[randomIndex];
  });
}

addRandomDescriptions(commdata, descriptions);
