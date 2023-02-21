import './NotFound.css';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <h2 className="notFound">404 PAGE NOT FOUND</h2>
        <p>The page you requested does not exist.</p>
        <a>
            <Link to='/' className='link'>CONTINUE SHOPPING</Link>
        </a>
        </>
    )
}

export default NotFound;