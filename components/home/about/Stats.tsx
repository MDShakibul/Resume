import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">BootStrap</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MySQL</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Socket.io</span>
            <span className="chip">Docker</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Laravel</span>
            <span className="chip">Block Chain</span>
            <span className="chip">Ether.js</span>
            <span className="chip">MetaMask</span>
            <span className="chip">Chadcn UI</span>
            <span className="chip">Ant Design</span>
            <span className="chip">Figma</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">Netlify</span>
            <span className="chip">Vercel</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
