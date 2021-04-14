import { IconButton } from '@material-ui/core';
import React from 'react';
import styles from './Form_Img.module.css';
import CreateIcon from '@material-ui/icons/Create';
import logo from '../../assets/images/Image -1.png'

const FormImg = () => {
    return (
        <div>
        <div className={styles.main__div}>
            <IconButton color='secondary' className={styles.icon__button}>
                <CreateIcon fontSize='large' className={styles.icon__style}/>
            </IconButton>
            <img  className={styles.form__img} src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            
        </div>
        <div className={`${styles.logo__style}`}>
                <img src={logo} alt=""/>
               
                <CreateIcon color='primary'  className={styles.logo__icon}/>
            
        </div>
        </div>
    );
};

export default FormImg;