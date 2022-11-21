import InputError from "../components/InputError/inputError";

export function renderInputTextError(_label, _type = null) {
  const input = document.querySelector(`#${_label.split(" ").join("_")}`);
  if (_type === "onlyText") {
    input.classList.add("error_type");
    return (
      <InputError>
        <strong className="strong_error">{`${_label} is not correct :`}</strong>
        <ul>
          <li>not long enough</li>
          <li>must not contain numbers</li>
          <li>must be between 1 and 18 characters</li>
          <li>must not contain special characters</li>
        </ul>
      </InputError>
    );
  } else if (_type === "address") {
    input.classList.add("error_type");
    return (
      <InputError>
        <strong>{`${_label} is not correct :`}</strong>
        <ul>
          <li>must not contain special characters</li>
        </ul>
      </InputError>
    );
  } else {
    input?.classList.remove("error_type");
    return <InputError />;
  }
}

/**
 * Si le type est zipCode, renvoie un composant InputError avec une balise forte et une liste non
 * ordonnée, sinon renvoie un composant InputError vide.
 * @returns Une fonction qui renvoie un élément JSX.
 */
export function renderInputNumberError(_label, _type) {
  // console.log(label, type);
  if (_type === "zipCode") {
    return (
      <InputError>
        <strong>{`${_label} is not correct :`}</strong>
        <ul>
          <li>must contain 5 numbers ex : 56450</li>
          <li>only numbers</li>
        </ul>
      </InputError>
    );
  } else {
    return <InputError />;
  }
}
