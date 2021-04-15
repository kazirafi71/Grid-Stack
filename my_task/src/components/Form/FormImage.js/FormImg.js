import { IconButton } from "@material-ui/core";
import React from "react";
import styles from "./Form_Img.module.css";
import CreateIcon from "@material-ui/icons/Create";
import logo from "../../assets/images/Image -1.png";


const FormImg = () => {
  return (
    <div className="container">
      <div className={styles.main__div}>
        <IconButton color="primary" className={styles.icon__button}>
          <CreateIcon  className={styles.icon__style} />
        </IconButton>
        <div className={styles.bg_img}>
        </div>
      </div>
      <div className={`${styles.logo__style} ${styles.logo}`}>
        <img className='h-50 w-50 ml-4' src={logo} alt="" />

        <CreateIcon color="primary" className={styles.logo__icon} />
      </div>
    </div>
  );
};

export default FormImg;
