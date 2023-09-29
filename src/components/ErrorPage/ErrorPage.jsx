import { Link } from 'react-router-dom';
import '../ErrorPage/ErrorPage.css';

function ErrorPage() {
  return(
    <div className='error-page'>
      <div className="error-message">
        <h1>Opps!</h1>
        <p>The page you were looking does not exist.</p>
        <Link to='/'>Click here to return to the home page</Link>
      </div>
    </div>
  );
}

export default ErrorPage;