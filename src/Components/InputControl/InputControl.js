/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./InputControl.module.css"
import { Autocomplete, Input, TextField } from '@mui/material';

function InputControl({label,...props}) {

    const skills = [ "c++","HTML", "CSS", "JavaScript", "React", "React.js", "Node.js", "Express.js", "MongoDb" ];

    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props}/>
        </div>
    )
}



export default InputControl