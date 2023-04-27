import React, { useState } from "react";
import api from "../utils/Api";
import { useEffect } from "react";

const Card = (props) => {
  const [cards, setAllCards] = useState([]);

  useEffect(() => {
    api.getAllCards().then((cards) => {
      setAllCards(cards);
    });
  }, []);


 

  function setCardClick(){
    props.onCardClick(props.card);
  } 

  return (
    <ul className="foto">
      {cards.map((card, i) => (
        <li key={i} className="card">
          <button
            aria-label="кнопка удаления фотографии."
            className="card__del-btn"
            type="button"
          ></button>
          <img className="card__photo" src={card.link} alt={card.name} onClick={setCardClick}/>
          <div className="card__data">
            <h2 className="card__name">{card.name}</h2>
            <div>
              <button
                aria-label="кнопка нравится."
                className="card__like"
                type="button"
              ></button>
              <div className="likes-counter">{card.likes.length}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
