// NotFound.jsx
import { useRouteError, Link } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>{error.statusText || error.message}</p>
      <p>We couldn't find what you were looking for.</p>
      <Link to="/">Go back to the Home page</Link>
    </div>
  );
};

export default NotFound;
