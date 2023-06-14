import { useContext } from "react";
import Card from "./Card";
import AvatarIcon from "../images/avatar_edit.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt="Профиль аватар"
          />
          <div className="profile__filter" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar-icon"
              src={AvatarIcon}
              alt="иконка"
            />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__edit-button"
          type="button"
          onClick={props.onEditProfile}
        ></button>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
