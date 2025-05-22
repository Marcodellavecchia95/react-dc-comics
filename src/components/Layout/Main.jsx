import CardCreator from "./CardCreator";

export default function Main() {
  return (
    <main id="page-main">
      <div className="upper-main">
        <div className="container">
          <div className="row">
            <CardCreator />
          </div>
        </div>
      </div>
      <div className="bottom-main">
        <div className="container">
          <section id="merch">
            <ul>
              <li>
                <a href="#"></a>
                <img
                  src="src/assets/img/buy-comics-digital-comics.png"
                  alt=""
                />
                DIGITAL COMICS
              </li>
              <li>
                <a href="#"></a>
                <img src="src/assets/img/buy-comics-merchandise.png" alt="" />
                DC MERCHANDISE
              </li>
              <li>
                <a href="#"></a>
                <img src="src/assets/img/buy-comics-subscriptions.png" alt="" />
                SUBSCRIPTION
              </li>
              <li>
                <a href="#"></a>
                <img
                  className="location-img"
                  src="src/assets/img/buy-comics-shop-locator.png"
                  alt=""
                />
                COMIC SHOP LOCATOR
              </li>
              <li>
                <a href="#"></a>
                <img src="src/assets/img/buy-dc-power-visa.svg" alt="" />
                DC POWER VISA
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
