import "./cake.scss";
import { Link } from "react-router-dom";

const Cake = ({ image, name, id, info, glass }) => {
  return (
    <article className="cake">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cake-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <div className="cake-btn">
          <Link
            to={`/singlecake/${id}`}
            className="btn btn-primary btn-details"
          >
            details
          </Link>
          <Link
            to={`/singlecake/${id}`}
            className="btn btn-primary btn-details"
          >
            order now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cake;
