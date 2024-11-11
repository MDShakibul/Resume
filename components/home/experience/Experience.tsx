import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Mojaru Education Technologies Limited",
    position: "Web Developer",
    time: "Sep 2021 - Aug 2023",
    location: "Panthapath, Dhaka 1205",
    description:[
      "Designing and establishing user-friendly website that provide an excellent user experience.",
      "Utilizing Restful API's to seamlessly integrate various functionalities into websites and applications.",
      "Using powerful tools such as Google Firebase and Figma to streamline the development process",
      "Developing robust backend function using Laravel, a popular PHP framework",
    ],
    tech: [
      "React",
      "Laravel",
      "MySql",
      "Figma",
      "Git",
      "Github",
    ],
  },
  {
    title: "Jomma Limited",
    position: "Full Stack Developer",
    time: "Sep 2023 - Running",
    location: "10/12 Iqbal road, Mohammadpur Dhaka",
    description:[
      "Developed and maintained web applications using Next, Express.js, and Oracle.",
      "Collaborated with cross-functional teams to define, design, and ship new features, ensuring alignment with business objectives.",
      "Designed and implemented RESTful APIs and integrated third-party services to enhance application functionality.",
      "Implemented comprehensive security measures, including encryption and secure authentication protocols",
      "Different type of Payment Geatyway Intregration ",
    ],
    tech: ["Nextjs", "Nodejs", "Expressjs", "Oracle", "Git"],
  }
  
];
