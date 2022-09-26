import React, { useEffect } from "react";
import { useState } from "react";
import logo from '../../logo.svg';
import Axios from 'axios'
import axios from "axios";
const Test = () => {
    const [api, setAPI] = useState("");
    const url = "https://lazy-cyan-basket-clam-veil.cyclic.app/testAPI"

    useEffect(() =>{
        getAPI();
    }, []);

    const getAPI = () =>{
        axios.get( `${url}`)
        .then((response) =>{
            const allData = response;
            setAPI(allData.data);
        })
        .catch(error => console.log(`Error: ${error}`));
    }
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload bruh git.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>{api}</p>
            </header>
        </div>
    )
}
export default Test;