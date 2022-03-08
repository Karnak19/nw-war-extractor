import { Link } from 'react-location';

function Home() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/b/bb/New_World_Logo.svg"
            className="h-48 dark:invert"
            alt="logo"
          />
          <p className="py-6">WAR EXTRACTOR</p>
          <Link to="/companies" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
