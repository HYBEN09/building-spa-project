import { Link, useNavigate } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';

function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h1> My Home Page 🌱 </h1>
      <p>
        Go To <Link to="./Products">the list of products</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
