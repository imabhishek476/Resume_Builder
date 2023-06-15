import React from 'react'
import resume from "../../assets/resume.svg"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"


function header() {
  return (
    <>
        <div className={`mt-4 ${styles.container}`}>
            <div className={styles.left}>
                <p className={styles.heading}>
                    Make your own resume <span>for free</span>.
                </p>
                <p className={styles.heading}>
                    A <span>Resume</span> that stands out!
                </p>
            </div>
            <div className={styles.right}>
                <img src={resume} alt="Resume"/>
            </div>
            <div className={styles.middle}>
                <p>Showcase yourself and your achievements with an impressive resume made with the free online resume maker from Resume Builder.
                </p>
                </div>
        </div>
        <div className={"fixed-bottom"}>
            <div className={` text-center mx-auto`}>
                <button className={`${styles.button1} ${styles.gradient} btn btn-primary`} type="button">
                    <Link className={styles.link} to="/create">Create your resume now</Link>
                </button>
            </div>
        </div>

    </>

  );
}

export default header
