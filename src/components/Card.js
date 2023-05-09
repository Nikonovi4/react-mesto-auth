import React, { useSyncExternalStore } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ data, onCardImageClick, onCardLike, onCardDelete }) => {
  const handleCardImageClick = () => {
    onCardImageClick(data);
  };

  const userInfo = React.useContext(CurrentUserContext);
  const isOwenCard = data.owner._id === userInfo._id;
  const isLiked = data.likes.some((i) => i._id === userInfo._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_clicked"
  }`;

  const handleLikeClick = () => {
    onCardLike(data);
  };

  const handleDeleteClick = () => {
    onCardDelete(data);
  };

  return (
    <ul className="foto">
      <li className="card">
        {isOwenCard && (
          <button
            aria-label="кнопка удаления фотографии."
            className="card__del-btn"
            type="button"
            onClick={handleDeleteClick}
          />
        )}
        <img
          className="card__photo"
          src={data.link}
          alt={data.name}
          onClick={handleCardImageClick}
        />
        <div className="card__data">
          <h2 className="card__name">{data.name}</h2>
          <div>
            <button
              aria-label="кнопка нравится."
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            />
            <div className="likes-counter">{data.likes.length}</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Card;
