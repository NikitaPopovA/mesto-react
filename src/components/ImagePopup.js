function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup  ${card.src && "popup_opened"}`}>
      <div className="popup__magnification-box">
        <img className="popup__magnification-imag" src={card.src} alt={card.alt} />
        <p className="popup__magnification-title">{card.alt}</p>
        <button className="popup__close-btn" type="button" onClick={onClose}></button>
      </div>
    </section>
  );
}

export default ImagePopup;