import { useEffect } from "react";

function ImagePopup({ card, onClose }) {
  useEffect(() => {
    if (!card.src) {
      return;
    }

    function hundleEsc(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    function hundleClick(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        onClose();
      }
    }

    document.addEventListener("keydown", hundleEsc);
    document.addEventListener("click", hundleClick);

    return () => {
      document.removeEventListener("keydown", hundleEsc);
      document.removeEventListener("click", hundleClick);
    };
  }, [card.src]);

  return (
    <section className={`popup  ${card.src && "popup_opened"}`}>
      <div className="popup__magnification-box">
        <img
          className="popup__magnification-imag"
          src={card.src}
          alt={card.alt}
        />
        <p className="popup__magnification-title">{card.alt}</p>
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
