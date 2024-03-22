import React, { useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    // console.log(data);
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
