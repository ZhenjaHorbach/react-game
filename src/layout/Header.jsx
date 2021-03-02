import style from "./Header.module.css";
import React, { useState, useEffect } from "react";
import Volume from "../components/Volume";

const allLang = {
  name: {
    russian: "Игра на запоминание",
    english: "Memory game",
    german: "Memory-Spiel",
    italian: "Gioco di memoria",
    belorussian: "Гульня на памяць",
  },
};

function Header(props) {
  const [clickMB, setclickMB] = useState(false);
  props.setCallBack(clickMB);
  return (
    <header className={style.header}>
      <div className={style.name}>
        <h1>{allLang.name[props.lang]}</h1>
      </div>
      <div className={style.volume}>
        <Volume
          music={props.music}
          setClick={props.setClick}
          setVolumeClick={props.setVolumeClick}
        />
      </div>
      <div className={style.language}>
        <div onClick={() => props.setLang("russian")} className={style.country}>
          <img src="https://lh3.googleusercontent.com/gES2UAxtiHgwMfvyr6TqAeH8NRKFBnyypYh5vyJe7G9q6Oko_fX-G2qHJkPTCMbVBZN8ZwBepLrPm4av3Qa9i2gubAWZNqLsNp4vXyX8raIqzv0uEyaBiHhcu0Zl5_C-5ikt47BS57iGq8vD2ZYiEBEwQL5Gt4JJ-L_FwmRQffCvgXYPtsAUyxA5-QOna8gKpyY-kN0PrRleZ3TrpvZziSk5BxkJzceCUxtd5GR6sOorMDAvW5Ta6V1chRECmZy7xXzwEkLsJuA6TkyVEeO13ha4QpR6LDLS7lh9KkkwQ_gsJxDlVNomBL0LhDHBp5WcYy_T-ekBcPtScpDxOvjSd3gLJEozV3y_y8WIAXDGtY-f1iQoaiwSoKA4bnh57__9hI2cHr5pwuZJqDpPhgdBPbfkYGb9e7ie8IFljxmspHgwyin51eD2OmN-ZtD522gRy7HDb8eLbToku9xCtYRfrq08fg82PxZfSRkOvhZQ9C_-lbRIXGi3fIJtrUjOh7LRQS8TtBZL1yJgcLoIiWsxjMIWRV-pzYLTNdkfoTBbHh2KKKkIvCOFnVJRHp702gGocDA7IfKBRe-skHFsC2W_20KpBY_V1nb7NFeM3DTnr_-05aRygBdf9q9vXuBML9OZ9Yc9_FhTj4XXi1_gyPFPBmshtulhfxvgyYdAPSAdjkW-7rhVI4v0q4yR7nDDEg=s357-no?authuser=0" />
        </div>
        <div onClick={() => props.setLang("english")} className={style.country}>
          <img src="https://lh3.googleusercontent.com/cmYLimw3E-bdbN59khZtzBKKcT9RmiEJ4CVk9cgYDZv6TUYbnWNqec2_mekNiIcMchUtosulfrhq7Ut8j7ist3cWvWNWnDOucOJH2uPh-cfLpbyaCNRrmwt8_Y60TwywRJL2TeCgJY2r7QTJlRY_Ct5c4mjb4xk1UymQyP3AI3GqFaB-AOZ-BW8GgY40WMMsFB4sSThZOZtqja-vJ1D1iQl5eDpWqNfn6HgoY2KPAiS9xwbEHVwg73OBQWyTfjfgGn0ImQ1l_DDDo7coQOteeoHomBGfveseHgKV8pDrdapnBZPfSUBeYsiruLjWhuPFDCzo8m6KYXJMcf2dMOs_5tDL-xq_Uo5hZNPQkHiBQpT3Izzwr-qgvqmRNZYOXlSjz--5vq9xDklGJaqjlo42LJvyuRQhftQeg_iX448Qh56rlsSOsF_ltUaM3OWes0NEvSwAuS7U8uA0mfJVALUGO-lxqwN67FrlYbO4HnPt6Dwu-Ir7yYhmf62-B5Yntdqfr1msbt4wGcUKT1M0tPa5_aov5qLvi3z8sGfO5vJLf5krfNMgsnSPeCmoZVaWLrJB1Hria1TcpPwc9YtDU9zgR8xtz8isXsT-6dj5IVMR-7nhIuSvnM_xnykS--SmR34wpN_HyTQ7s4mgvrJjDEqOecbRs0df7MaSL40Eyzgd7z1Ursfi7uUCVomnKM9IJQ=s512-no?authuser=0" />
        </div>
        <div onClick={() => props.setLang("german")} className={style.country}>
          <img src="https://lh3.googleusercontent.com/UNUMyAZPI5j9sTiuAAzAg8tW1f5fBBR72-F542piTL42MbBLRltTEx_7tCAv8RGAyceNjXWmZ_7KPuIdAUHutMN9-NrXg1VdMVbQQpX9F1AEdL6SO5-MavD3bJl44SGUO6RVfaOI40R4XbjhsuMpE6b0ZOFineIuGNCuhN7_TNmLbK7BXWKfZGxl3-9bWMhBYHrRn7b9eRU7D6QBo_29rGPM336tgbXZMNSQTrYWoEje33wammxY0_arxmOEa2Zr_4m-VC1e-5CbYUiBRes4-NfChKwN2otfkI0WawvKldyBoinLAhnEJLr6yizs96b3oo_Z4gp1aotFwJsgvQ5ZU7ZQ91pYmdRcBo7seSVNwomJkIWSwajZW7WYOocagApAWARnxO6G_93JT54gKsUST8dqzcTflIN5-SgDn1J6P5GW7KKBmf49Urksv03NNRHJ6TIOviS1e6o3E6ilkOeAcUNOcac8CyFFqmToc-iiQAg0OlUfUIl4TxxWbHwNjrVGlQgQFZ45uCR3lonWKthAC031YV4vqXl7r4BZs_0onqWlZQls-ASsDxzKzVEOj0vxf40LXXTYKZ4jVrB4Ni9OUsO9VQhfUCnyJgJiFlXY2uAfoiKEOS7BpAvemH7tqUZYPlHBN48g-2CZOBwQnjYe7-XF_XDp21nAHWqxB4K3KMHnnNy3pwHZ-ZcnT4GjJQ=s512-no?authuser=0" />
        </div>
        <div onClick={() => props.setLang("italian")} className={style.country}>
          <img src="https://lh3.googleusercontent.com/pw/ACtC-3drvB6oRYsPnmG-r9TFmElmb1vtSP12NvmRDVaPj4nw10XVo8PyRjzY5CRgYbysbVeSaX6TXZArUIcLzb2-5ldaUWsQtlwMldwW1_7ktr4QohGthqb_F4htxyE0iCn0mQ5uE9R7LDlZzOw4EQOkhR3G=s512-no?authuser=0" />
        </div>
        <div
          onClick={() => props.setLang("belorussian")}
          className={style.country}
        >
          <img src="https://lh3.googleusercontent.com/S9ZBKX3HMtesJGWcvxPmjpgCrTM_EJPdbscyCpKxlgnLJ5LBZ52uXxcS6UsaOXfSKqH9xcsVsk3NS3A8NzeWa_vVlRMtv5f3EKWwrU9g8G9PHcFJGU__C4t2I1i99DGZAss3TZxzFegXq6G0zA3EMSJnifDh08j-kUNl79YuZkN0pbgromLUl2xx-b2PA9oeO5xVcx3KdGdtXs44NNJ2U4wkRCfIBwxphIRN2Ye0Fs9Cs7gltUJmjCNXndomx6GJjWPtsWvGzOeD5nm1TMhc_kOglCA9agEWf6xTy6CKq6ed7ty86k__Fgi3avlUY8pBRJpT8YIPelXbBZZVFJ5iS2tdUFnjSBjMvQ7M5yEgXROYTXsPm0NwjEW-HlGDk6YatUghusqa1SKZzkVs111c0R1UMV-p3Dr2_PoZmobBkDcSeDPSb5nXf8pzaW4AVcKJkrAU3zwgiL3lmLYNt8AIocir6FtDuTqzvli92mRltX6NcUnWKRkoeT4nEVlrF0w_3LuiGUzfThIH-cVeK2-UDer8rkvRZQVErYqNfMssFzRFJtrDvWAIr9mf44gQCXz4Poe1GHfiuaLp3R0TW9cqWD_65eLWlMOiV11ojVPjsIRA3RB9p7n8GtAUK0xND9pdOzwR702ifIxSA5J7i7dN9TH5Nt_DdC1ns9J0F_99UNl_B5j_1pDOmKQFcO-16w=s346-no?authuser=0" />
        </div>
      </div>
    </header>
  );
}

export default Header;
