import React from 'react';
import axios from 'axios'; 

const Movies = () => {
  const [query, setQuery] = useState('');

  const search = async () => {
    try {
        const response = await axios.get('YOUR_BACKEND_URL_HERE', {
            params: {
                query: query
                // Lisää tarvittaessa muita parametreja, kuten hakuehtoja
            }
        });
        console.log(response.data); // Tulosta vastaus konsoliin tarkistusta varten
        // Tässä voit päivittää tilaa Reactissa vastauksen perusteella
    } catch (error) {
        console.error('Virhe hakua tehdessä:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
};

    const search = () => {
        // logiikka
        alert('click');
      }    

  return (

    <>

    <h2>Leffishaku</h2>

    <label>
        Hae elokuvaa tai sarjaa:
        <input
            className="field"
            type="text"
            placeholder="..."
            value={query}
            onChange={handleInputChange}
        />
    </label>


    Hae elokuvaa tai sarjaa: <input className="field" type="text" placeholder="..." /> <br/>
    + hakuehdot yms. <br/>
    
    <button onClick={search}>Hae</button> 

    </>


  );
};

export default Movies;
