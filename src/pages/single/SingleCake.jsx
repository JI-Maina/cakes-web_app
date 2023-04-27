import React, { useEffect, useState } from "react";
import Loading from "../../components";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./single.scss";
// const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCake = () => {
  const { id } = useParams();
  const { cakes } = useGlobalContext();
  const [selectedCake, setSelectedCake] = useState(null);

  useEffect(() => {
    const cakeId = parseInt(id);
    const cake = cakes.find((cake) => cake.id === cakeId);
    setSelectedCake(cake);
  }, [id, cakes]);

  console.log(id);
  console.log(selectedCake);

  if (!selectedCake) {
    return <h2>No cake found with id {id}</h2>;
  }
  const { name, image, price } = selectedCake;

  console.log(name, image, price);
  return (
    <section className="cake-form">
      <div className="cake-form-left">
        <article className="cake">
          <div className="img-container">
            <img src={image} alt={name} />
          </div>
          <div className="cake-footer">
            <p>
              <span className="cake-data">name :</span> {name}
            </p>
            <p>
              <span className="cake-data">price :</span> {price}
            </p>
            <p>
              <span className="cake-data">flavors :</span> {name}
            </p>
            <p>
              <span className="cake-data">ingredients :</span> {name}
            </p>
          </div>
        </article>
      </div>

      <div className="cake-form-right">
        <form>
          <div className="formInput">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" placeholder="john" />
          </div>
          <div className="formInput">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" placeholder="doe" />
          </div>
          <div className="formInput">
            <label htmlFor="delivery">Delivery Date</label>
            <input type="date" id="delivery" placeholder="11/23/2030" />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="0712345678" />
          </div>
          <div className="formInput">
            <label htmlFor="quantity">Quantity (kgs)</label>
            <input type="number" id="quantity" placeholder="6" />
          </div>
          <div className="formInput">
            <label htmlFor="purpose">Purpose</label>
            <input type="text" id="purpose" placeholder="birthday" />
          </div>
          <button className="btn btn-primary btn-details">Send</button>
        </form>
      </div>
    </section>
  );
};

export default SingleCake;
