import React from 'react';
import '@styles/GroupView.css';

const ProfileDetails = () => {
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

        <h2>Käyttäjän nimimerkki</h2>

        <div className="group-view">

            <div className="group-left">
                <p className="info">Käyttäjän oma kuvaus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>

            <div className="group-right">
                <button>Muokkaa profiilia</button>
            </div>

        </div>

        <h2>Suosikit</h2>

        <ul>
            <li>1</li>
            <li>Hallinnointi!</li>
        </ul>

        <h2>Ryhmät</h2>

        <ul>
            <li>1</li>
            <li>Sivutus!</li>
            <li>Hallinnointi!</li>
        </ul>

        <h2>Arvostelut</h2>

        <ul>
            <li>1</li>
            <li>Sivutus!</li>
            <li>Hallinnointi!</li>
        </ul>


    </div>

  );
};

export default ProfileDetails;