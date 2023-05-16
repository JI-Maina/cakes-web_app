import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./single.scss";
import axios from "axios";

const SingleCake = () => {
  const { id } = useParams();
  const { cakes } = useGlobalContext();
  const [selectedCake, setSelectedCake] = useState(null);
  const [customer, setCustomer] = useState({
    firstname: "",
    lastname: "",
    date: "",
    location: "",
    phone: "",
    quantity: "",
    purpose: "",
  });

  useEffect(() => {
    const cakeId = parseInt(id);
    const cake = cakes.find((cake) => cake.id === cakeId);
    setSelectedCake(cake);
  }, [id, cakes]);

  if (!selectedCake) {
    return <h2>No cake found with id {id}</h2>;
  }
  const { name, image, price } = selectedCake;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const order = Object.fromEntries(formData);
    const data = Object.assign(order, { cake: selectedCake.name });

    // console.log(order);
    // console.log(data);

    axios
      .post(
        "https://sheet.best/api/sheets/e8010fd6-0c29-4f4f-a896-180a808b04b3",
        data
      )
      .then((response) => {
        // console.log(response);
        setCustomer({
          firstname: "",
          lastname: "",
          date: "",
          location: "",
          phone: "",
          quantity: "",
          purpose: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="john"
              name="firstname"
              value={customer.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="doe"
              name="lastname"
              value={customer.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="delivery">Delivery Date</label>
            <input
              type="date"
              id="delivery"
              placeholder="11/23/2030"
              name="delivery"
              value={customer.delivery}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="nairobi"
              name="location"
              value={customer.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="0712345678"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="quantity">Quantity (kgs)</label>
            <input
              type="number"
              id="quantity"
              placeholder="6"
              name="quantity"
              value={customer.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="formInput">
            <label htmlFor="purpose">Purpose</label>
            <input
              type="text"
              id="purpose"
              placeholder="birthday"
              name="purpose"
              value={customer.purpose}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary btn-details">Send</button>
        </form>
      </div>
    </section>
  );
};

export default SingleCake;
