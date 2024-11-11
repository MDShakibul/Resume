import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m MD Shakibul Islam, and I&apos;m a Bachelor of Science in Computer Science and Engineering graduate.
              <br/><br/>
              With a strong foundation in full-stack web development, I specialize in building seamless, responsive, and visually appealing websites that prioritize user experience. My passion lies in crafting efficient, scalable applications, combining both front-end aesthetics and back-end functionality to deliver robust solutions tailored to user needs.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            With expertise in HTML, CSS, JavaScript, and advanced frontend frameworks such as React and Next.js, I bring a strong frontend foundation to my work. Additionally, my experience with backend technologies like Node.js, Express.js, MongoDB, and PHP/Laravel enables me to develop complete, full-stack applications that are both functional and user-centered.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy digital painting. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
