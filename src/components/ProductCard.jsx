import React, { useState } from "react";
import PropTypes from "prop-types";
import TimeDetail from "./TimeDetail";

const ProductCard = function ProductCard({ id, image, title, showModalComponent }) {
  const randomTime = Math.round(Math.random() * 300 + 1);
  const [canViewDetail, setcanViewDetail] = useState(true);
  const updateAvailability = () => {
    setcanViewDetail(false);
  };

  const showModal = () => {
    if (canViewDetail) showModalComponent(id);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__detail">
        <p className="card__detail__title">{title}</p>
        <div className="card__detail__actions">
          <TimeDetail time={randomTime} updateAvailability={updateAvailability} />
          <button
            type="button"
            className="card__detail__actions__button"
            disabled={!canViewDetail}
            onClick={showModal}
          >
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  showModalComponent: PropTypes.func,
};
ProductCard.defaultProps = {
  id: 0,
  image: "",
  title: "",
  showModalComponent: () => {},
};

export default ProductCard;
