import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <main className="error">
            <h1 className="error__title">404</h1>
            <p className="error__subtitile">Страница не найдена</p>
            <button className="error__button" onClick={() => navigate(-1)}>
                Назад
            </button>
        </main>
    );
}