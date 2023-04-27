import "./cake.scss";
import { Link } from "react-router-dom";

const Cake = ({ image, name, id, price }) => {
  return (
    <article className="cake">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cake-footer">
        <h3>{name}</h3>
        {/* <h4>{price}</h4> */}
        <p>{price}</p>
        <div className="cake-btn">
          <Link
            to={`/singlecake/${id}`}
            className="btn btn-primary btn-details"
          >
            order now
          </Link>
          {/* <Link
            to={`/singlecake/${id}`}
            className="btn btn-primary btn-details"
          >
            order now
          </Link> */}
        </div>
      </div>
    </article>
  );
};

export default Cake;
