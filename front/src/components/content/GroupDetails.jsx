import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/GroupView.css';

const GroupDetails = () => {
/*  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/groups/${id}`);
        console.log(response.data); 
        setMovie(response.data);

        setBackgroundImage(movie.poster);
      } catch (error) {
        console.error('Hakuvirhe:', error);
      }
    };
    
    search();
  }, [id]);*/

  return (
    <div className="page">

        <h2>Ryhmän nimi</h2>

        <div className="group-view">

            <div className="group-left">
                <p className="info">Kuvaus ryhmästä tähän. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            <div className="group-right">
                <button>Liity ryhmään</button>
                <button>Peru pyyntö</button>
                <button>Poistu ryhmästä</button>
                <button>Poista ryhmä</button> <br/>
            </div>

        </div>

        <h2>Jäsenet</h2>

        <i>Omistaja voi poistaa jäsenen (klikkaamalla nimeä, optio "poista ryhmästä")</i> <br/>
        <i>Jäsen odottaa hyväksymistä: kursivoitu, värillinen: hyväksy, hylkää</i>

        <ul>
            <li><Link to={"/profile/"}>Nami</Link></li>
            <li>Heikki</li>
            <li>Leena</li>  
            <li>Jaakko</li>
            <li>Liisava</li>
        </ul>

        <h2>Seinä</h2>

        <div className="wall-view">
            <div className="left-column">
                <h3>Minichat</h3>

                <p>Sisältö</p>
                <p>Muista rivitys</p>

            </div>
            <div className="middle-column">
                <h3>Leffisjaot</h3>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Muista rivitys</p>

            </div>
            <div className="right-column">
                <h3>Näytösajat</h3>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Sisältö</p>
                <p>Muista rivitys</p>
            </div>
        </div>


    </div>

  );
};

export default GroupDetails;