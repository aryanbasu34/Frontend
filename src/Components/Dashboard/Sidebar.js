import './../../index.css';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
    const history = useHistory();
    async function handleLogout() {
        await firebase.auth().signOut();
        history.push("/");
    };
 return   <div className="sidebar">
        
             <a href="https://backendps16.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className='download--report--button'>Download</button></a>
       
       <button onClick={handleLogout} className="download--report--button">Logout</button>
    </div>
};   



export default Sidebar;