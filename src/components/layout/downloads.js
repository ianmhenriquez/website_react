import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Downloads = () => {
    const [api, setAPI] = useState("");
    const url = "https://lazy-cyan-basket-clam-veil.cyclic.app/testAPI"

    useEffect(() => {
        getAPI();
    }, []);

    const getAPI = () => {
        axios.get(`${url}`)
            .then((response) => {
                const allData = response;
                setAPI(allData.data);
            })
            .catch(error => console.log(`Error: ${error}`));
    }
    return (
        <div>
            <p>Downloads beta</p>
            <p>{api}</p>
        </div>
    )
}
export default Downloads;