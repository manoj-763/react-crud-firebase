
import { Navigate } from 'react-router-dom';

const Protected = ({ component: Component }) => {
  const token = localStorage.getItem('token');

  return token ? <Component /> : <Navigate to="/login" />;
};

export default Protected;
