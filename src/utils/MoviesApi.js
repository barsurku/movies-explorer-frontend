export class MoviesApi {
    constructor({ url }) {
        this._url = url;
    }

    _getResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch("https://api.nomoreparties.co/beatfilm-movies", {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => this._getResponse(res));
    }
}

export const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co",
});