import React, { useContext, useEffect } from "react";
import DataContext from "../contexts/DataContext";
import axios from "axios";

const UseFetch = (url) => {
    const { data, setData } = useContext(DataContext);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return data;
};

export default UseFetch;
