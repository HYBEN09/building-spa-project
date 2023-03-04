import { Link } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';

function HomePage() {
  return (
    <>
      <h1> My Home Page 🌱 </h1>
      <p>
        Go To <Link to="./Products">the list of products 🛍️</Link>.
      </p>
    </>
  );
}

export default HomePage;
