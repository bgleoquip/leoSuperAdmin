import React from "react";

import Header from "./Header/BasicHeader";

export default(props)=>{
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}
