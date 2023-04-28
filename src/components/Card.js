import React from "react";

const Card = (props) => {
  const handleCardImageClick = () => {
    props.onCardImageClick(props.data);
  };

  return (
    <ul className="foto">
      <li className="card">
        <button
          aria-label="кнопка удаления фотографии."
          className="card__del-btn"
          type="button"
        ></button>
        <img
          className="card__photo"
          src={props.data.link}
          alt={props.data.name}
          onClick={handleCardImageClick}
        />
        <div className="card__data">
          <h2 className="card__name">{props.data.name}</h2>
          <div>
            <button
              aria-label="кнопка нравится."
              className="card__like"
              type="button"
            ></button>
            <div className="likes-counter">{props.data.likes.length}</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Card;
