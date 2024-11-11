import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { UpdateFollower } from "react-mouse-follower";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/shakibul-islam-a910341b3/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}or{" "} Mobile: <Link href="tel:+8801711650875">+8801711-650875</Link> {" "}or{" "}</p>
          
        </Reveal>
        <Reveal width="100%">
        <UpdateFollower
              mouseOptions={{
                backgroundColor:'white',
                zIndex:9999,
                followSpeed:0.5,
                mixBlendMode:'difference',
                scale: 6
              }}
            >

        
          <Link href="mailto:shakib6610@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>shakib6610@gmail.com</span>
            </div>
          </Link>
            </UpdateFollower>
        </Reveal>
      </div>
    </section>
  );
};
