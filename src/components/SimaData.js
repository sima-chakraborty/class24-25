import { useEffect, useState } from "react";

const SimaData = ({handleSearch}) => {
    const [value , setValue] =  useState('');

    useEffect(()=>{
        handleSearch(value);
    },[value]);

    return (
        <div>
            <h1>This is sima component</h1>
            <input onChange={(e)=>setValue(e.target.value)} className="flex m-auto p-2 border-2 border-red-400" value={value} />
        </div>
    );
};

export default SimaData;  