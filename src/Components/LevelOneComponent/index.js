import classes from "./index.module.scss";
import React from 'react'
import { useState } from "react";
import CounterData from "./CounterData";
import LevelOneCount from "./LevelOneCount";

const LevelOneComponent = () => {
    const [data] = useState(CounterData)
    
    return (
        <>
            <div  className={classes.cardList}>

                {
                    data.map((levelOne, index) => {
                        return (
                            <LevelOneCount key={index} {...levelOne} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default LevelOneComponent