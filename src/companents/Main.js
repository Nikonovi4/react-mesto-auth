import React, {useState}  from "react";
import api from "../utils/Api";
import "../index.css"

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  React.useEffect(() => {
    api.getProfileInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
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
        <ul className="foto"></ul>
      </section>
    </main>
  );
};

export default Main;
