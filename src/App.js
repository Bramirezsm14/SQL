import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const baseUrl = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326#json";

  const peticionGet =
    async () => {
      await axios.get(baseUrl)
        .then(response => {
          setData(response.data.results);
          console.log(response.data.results
          )
        }).catch(error => {
          console.log(error);
        })
    }
  useEffect(() => {
    peticionGet()


  }, [])



  return (

    <>
      <tr>
        <th className='titulos'>ID</th>
        <th>TITLE</th>
        <th>CATEGORY_ID</th>
        <th>NAME</th>
      </tr>

      {data.map(datos => (
        <tr key={datos.id}>
          <td>{datos.id}</td>
          <td>{datos.title}</td>
          <td>{datos.category_id}</td>
          <td>{datos.domain_id}</td>
        </tr>

      ))}




    </>
  );
}

export default App;
