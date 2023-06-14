import PopupWithForm from "./PopupWithForm";

function DeleteFormCardsPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      name="delete-form-cards"
      title="Вы уверены?"
      onClose={props.onClose}
      isOpen={props.isOpen}
      buttonText={props.statusSubmitButton}
      onSubmit={handleSubmit}
    />
  );
}

export default DeleteFormCardsPopup;
