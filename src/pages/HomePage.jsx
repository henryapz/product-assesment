import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ModalComponent from "../components/ModalComponent";
import LoadingComponent from "../components/LoadingComponent";

const HomePage = function HomePage() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState({ display: false, id: 0 });
  const showModalComponent = (id) => {
    setShowModal({ display: true, id });
  };

  const closeModalComponent = () => {
    setShowModal({ display: false, id: 0 });
  };

  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("error: ", error);
      });
  }, [setProducts]);
  let info;
  if (products.length > 0) {
    info = products.map((element) => (
      <ProductCard
        key={element.id}
        title={element.title}
        image={element.image}
        id={element.id}
        showModalComponent={showModalComponent}
      />
    ));
  } else {
    info = (
      <div className="loading__container">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <>
      <div className="main">
        <h1 className="main__title">Products</h1>
        <div className="main__container">{info}</div>
      </div>
      {showModal.display ? (
        <ModalComponent idProduct={showModal.id} closeModalComponent={closeModalComponent} />
      ) : null}
    </>
  );
};

export default HomePage;
