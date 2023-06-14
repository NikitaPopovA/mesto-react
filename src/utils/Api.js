class Api {
  constructor(options) {
    this._options = options;
  }

  getProfile() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  getCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  editProfile(data) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description,
      }),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  addCard(data) {
    return fetch(`${this._options.baseUrl}/cards `, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.cardName,
        link: data.cardLink,
      }),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  addLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes `, {
      method: "PUT",
      headers: this._options.headers,
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  deleteLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes `, {
      method: "DELETE",
      headers: this._options.headers,
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  changeAvatar(avatarLink) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "045de92b-0631-4ed3-8099-55e6284a0a86",
    "Content-Type": "application/json",
  },
});

export default api;
