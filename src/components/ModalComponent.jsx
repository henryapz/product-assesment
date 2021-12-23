import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";

const ModalComponent = function ModalComponent({ idProduct, closeModalComponent }) {
  const [product, setProduct] = useState(undefined);
  const hideComponent = () => {
    closeModalComponent();
  };
  const url = `https://fakestoreapi.com/products/${idProduct}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("error: ", error);
      });
  }, [setProduct, url]);
  let productDetail;
  if (product) {
    productDetail = (
      <div>
        <div className="modal__content__image">
          <img src={product.image} alt={product.title} />
        </div>
        <p>
          <b>Precio: </b>
          {product.price}$
        </p>
        <p>
          <b>Categoría: </b>
          {product.category}
        </p>
        <p>
          <b>Descripción: </b>
          {product.description}
        </p>
        <p>
          <b>Rating: </b>
          {`${product.rating.rate} (${product.rating.count} votos)`}
        </p>
      </div>
    );
  } else {
    productDetail = (
      <div className="loading__container__modal">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__content__close">
            <span
              className="modal__content__close__button"
              onClick={hideComponent}
              aria-hidden="true"
            >
              &times;
            </span>
          </div>
          <h3>
            <b>{product && product.title}</b>
          </h3>
          {productDetail}
        </div>
      </div>
    </div>
  );
};

ModalComponent.propTypes = {
  closeModalComponent: PropTypes.func,
  idProduct: PropTypes.number,
};
ModalComponent.defaultProps = {
  closeModalComponent: () => {},
  idProduct: 0,
};

export default ModalComponent;
