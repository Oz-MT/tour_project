import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div key={id} className="card">
            <div>
              <h1>{title}</h1>
            </div>
            <img src={image} alt="img" />
            <div className="card-over">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
