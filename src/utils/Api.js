class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(endpoint, method, body) {
    const url = `${this._baseUrl}${endpoint}`;
    const options = {
      method: method,
      headers: this._options.headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    return fetch(url, options).then(this._checkResponse);
  }

  getProfile() {
    return this._request("/users/me", "GET");
  }

  getCards() {
    return this._request("/cards", "GET");
  }

  editProfile(data) {
    return this._request("/users/me", "PATCH", {
      name: data.name,
      about: data.description,
    });
  }

  addCard(data) {
    return this._request("/cards", "POST", {
      name: data.cardName,
      link: data.cardLink,
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, "DELETE");
  }

  addLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, "PUT");
  }

  deleteLike(cardId) {
    return this._request(`/cards/${cardId}/likes`, "DELETE");
  }

  changeAvatar(avatarLink) {
    return this._request("/users/me/avatar", "PATCH", {
      avatar: avatarLink,
    });
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
