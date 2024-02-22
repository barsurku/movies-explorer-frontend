//одинаковый принцип работы инпутов для register и login
export default function WelcomePagesInputs({
  value,
  setValue,
  span,
  errorMessage,
  classError,
  placeholder,
}) {
  return (
    <div className="welcome__input-container">
      <span className="welcome__input-name">{span}</span>
      <input
        className={`welcome__input ${classError}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <span className="welcome__input-error-text">{errorMessage}</span>
    </div>
  );
}