import { useEffect } from "react";

function PopupWithForm(props) {
  useEffect(() => {
    if (!props.isOpen) {
      return;
    }

    function hundleEsc(evt) {
      if (evt.key === "Escape") {
        props.onClose();
      }
    }

    function hundleClick(evt) {
      if (evt.target.classList.contains("popup_opened")) {
        props.onClose();
      }
    }

    document.addEventListener("keydown", hundleEsc);
    document.addEventListener("click", hundleClick);

    return () => {
      document.removeEventListener("keydown", hundleEsc);
      document.removeEventListener("click", hundleClick);
    };
  }, [props.isOpen]);

  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__box">
        <form
          className={`popup__form popup__${props.name}-form`}
          name={`popup__${props.name}-form`}
          noValidate
          onSubmit={props.onSubmit}
          onChange={props.onValidate}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className={`popup__save-btn ${
              props.buttonState && "popup__save-btn_disabled "
            }  `}
          >
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
