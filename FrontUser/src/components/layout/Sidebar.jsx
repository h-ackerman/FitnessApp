import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faUtensils, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Ajoutez votre logo ici */}
      </div>

      <div className="links">
        <ul>
          <li ><FontAwesomeIcon icon={faHome} /><Link to="/dashboard" className='link'>Dashboard</Link></li>
          <li><FontAwesomeIcon icon={faDumbbell} /><Link to="/workout" className='link'>Workout</Link></li>
          <li><FontAwesomeIcon icon={faUtensils} /><Link to="/meals" className='link'>Meals</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

