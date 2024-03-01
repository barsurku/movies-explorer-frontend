export class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
    .then((res) => this._getResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => this._getResponse(res));
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => this._getResponse(res))
      .then((res) => res);
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        method: "GET",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => this._getResponse(res));
  }

  editProfile(inputValues) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputValues.email,
        name: inputValues.name,
      }),
    })
    .then((res) => this._getResponse(res));
  }

  getMyMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        method: "GET",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => this._getResponse(res));
  }

  saveNewMovie(inputValues) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: inputValues.country,
        director: inputValues.director,
        duration: inputValues.duration,
        year: inputValues.year,
        description: inputValues.description,
        image: `https://api.nomoreparties.co${inputValues.image.url}`,
        trailerLink: inputValues.trailerLink,
        thumbnail: `https://api.nomoreparties.co${inputValues.image.formats.thumbnail.url}`,
        movieId: inputValues.id,
        nameRU: inputValues.nameRU,
        nameEN: inputValues.nameEN,
      }),
    })
    .then((res) => this._getResponse(res));
  }

  // Удалить фильм
  deleteMyMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => this._getResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://api.moviesbars.nomoredomainsmonster.ru",
});