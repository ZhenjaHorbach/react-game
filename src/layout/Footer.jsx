import style from "./Footer.module.css";
import React, { useState, useEffect } from "react";

function Footer(props) {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div className={style.footerBody}>
      <a
        href="https://github.com/ZhenjaHorbach"
        target="_blank"
        className={style.footerBodyGit}
      >
        <p>GitHub</p>
      </a>
      <p className={style.footerBodyYearName}>{year} © Memory game</p>
      <a
        href="https://rs.school/js/"
        target="_blank"
        className={style.footerBodyImg}
      >
        <img src="https://rs.school/images/rs_school_js.svg" />
      </a>
    </div>
  );
}

export default Footer;
