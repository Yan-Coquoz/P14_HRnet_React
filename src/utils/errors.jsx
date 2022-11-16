import InputError from "../components/InputError/inputError";

export function renderInputTextError(label, type = null) {
  if (type === "onlyText") {
    return (
      <InputError>
        <strong className="strong_error">{`${label} is not correct :`}</strong>
        <ul>
          <li>not long enough</li>
          <li>must not contain numbers</li>
          <li>must be between 1 and 18 characters</li>
          <li>must not contain special characters</li>
        </ul>
      </InputError>
    );
  } else if (type === "address") {
    return (
      <InputError>
        <strong>{`${label} is not correct :`}</strong>
        <ul>
          <li>must not contain special characters</li>
        </ul>
      </InputError>
    );
  }

  return <InputError />;
}
