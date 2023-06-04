function Card({ card, onCardClick }) {
  return (
    <article className="grid-card">
      <button className="grid-card__btn-delete"></button>
      <img
        className="grid-card__image"
        src={card.link}
        alt={card.name}
        onClick={onCardClick}
      />
      <div className="grid-card__description">
        <h2 className="grid-card__title">{card.name}</h2>
        <div className="grid-card__likes-info">
          <button className="grid-card__like" type="button"></button>
          <span className="grid-card__counter-likes">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;