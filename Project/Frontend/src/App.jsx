import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function () {
  const [text,settext ] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data")
      .then((res) => {
        console.log(res.data); // Access the actual data using res.data
        settext(res.data);
      })
    
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Data from API:</h1>
  
      {
        text.map((item , index) => (
        <h1 key={index}>{item.name}</h1>
        ))
      }

    </div>
  );
}
