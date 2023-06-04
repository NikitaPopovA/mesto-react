function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__box">
        <form
          className={`popup__form popup__${props.name}-form`}
          name={`popup__${props.name}-form`}
          noValidate>

          <h2 className="popup__title">{props.title}</h2>
          {props.children}

          <button type="submit" className="popup__save-btn">
            {props.buttonText}
          </button> 
        </form>
        <button className="popup__close-btn" type="button" onClick={props.onClose}>
        </button>
      </div>
    </section>
  );
}

export default PopupWithForm;

