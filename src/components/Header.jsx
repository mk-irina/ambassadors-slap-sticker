import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-medium">SlapSticker</h1>
        </Link>

        <nav>
          <ul className="flex gap-10 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/readme">Readme</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className="text-center text-2xl max-w-xl m-auto">
        Have you ever said something so dumb, you just wanted to slap yourself?
        Well now you can!
      </p>
    </header>
  );
};
