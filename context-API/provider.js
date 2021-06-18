import React, { useState } from "react";
import MyContext from "./context";


export default function MyProvider() {

    const token = useState('');
    const email = useState('');
    const username = useState('');

    return (
        <MyContext.Provider value={ token, email, username }>
            {this.props.children}
        </MyContext.Provider>
    );
}