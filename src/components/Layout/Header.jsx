export default function Header() {
  return (
    <header id="page-header">
      <div className="container">
        <figure>
          <img src="src/assets/img/dc-logo.png" alt="Logo DC" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li>
              <a className="active" href="#">
                COMICS
              </a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="jumbo-img"></div>
    </header>
  );
}
