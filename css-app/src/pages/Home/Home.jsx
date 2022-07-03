import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      Home
      <hr />
      <ul>
        <li>
          <Link to="flex-box">flex-box</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
