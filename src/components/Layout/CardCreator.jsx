import comics from "./data/comics";

export default function CardCreator() {
  return comics.map((comic) => (
    <div className="col-1-6" key={comic.id}>
      <div className="card-image">
        <img src={comic.thumb} alt={comic.title} />
      </div>
      <div className="card-text">
        <span>{comic.title}</span>
      </div>
    </div>
  ));
}
