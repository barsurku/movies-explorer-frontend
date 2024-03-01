import "./ResponseSection.css";

export default  function ResponseSection({ responseMessage }) {
    return (
        <section className="response">
            <div className="response__message">{responseMessage}</div>
        </section>
    );
}