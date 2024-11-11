import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  const handleShowResume = () =>{
    window.open("https://drive.google.com/file/d/1N62-V77EwlYDEBI1OBLwPaERn_DsA2LO/view", "_blank");
  }
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={handleShowResume}>
        My Resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};

