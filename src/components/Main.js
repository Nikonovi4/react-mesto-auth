import React from "react";
import api from "../utils/Api";
import "../index.css";
import Card from "./Card";

const Main = (props) => {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }, []);

  React.useEffect(() => {
    api
      .getAllCards()
      .then((cards) => setCards(cards))
      .catch((error) => console.log(`Произошла ${error}: ${error.massage}`));
  }, []);

  return (
    <main>
      <section className="profile lead">
        <div className="cover">
          <img
            src={userAvatar}
            className="profile__foto"
            alt="аватар профиля"
            onClick={props.openAvatarPopup}
          />
        </div>
        <div className="profile__name-edit">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.openProfilePopup}
            aria-label="кнопка редактирования профиля."
            className="profile__edit-button"
            type="button"
          ></button>
        </div>
        <p className="profile__activity">{userDescription}</p>
        <button
          aria-label="кнопка добавления фотографий."
          className="profile__add-content-button"
          type="button"
          onClick={props.openNewCardPopup}
        ></button>
      </section>
      <section className="content">
        <ul className="foto">
          {cards?.map((card, _id) => (
            <Card
              data={card}
              key={_id}
              onCardImageClick={props.setSelectedCard}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
