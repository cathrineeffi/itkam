import React from "react";
import loader from "../../../assets/loader.gif";
import classes from "./Loader.module.scss";

let Loader = (props) => {
    return (
        <div className={classes.loaderBox}>
            <img src={loader} width={100} alt=""/>
        </div>
    )
}

export default Loader