import { BASE_URL } from './auth'

class Api {
 constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialData(token) {
    return Promise.all([this.getProfileInfo(token), this.getInitialCards(token)])
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  getProfileInfo (token) {
      return fetch(`${this._url}/users/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    })
      .then(this._checkResponse)
  }

  postItem(newItem, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        name: newItem.name,
        link: newItem.link
       })
    })
      .then(this._checkResponse)
  }

  deleteItem(id, token) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  editProfileInfo (newInfo, token) {
      return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
        name: newInfo.name,
        about: newInfo.about
       })
    })
      .then(this._checkResponse)
  }

  editAvatar (newAvatar, token) {
    return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      avatar: newAvatar.avatar,
     })
    })
    .then(this._checkResponse)
  }

  setLike (id, token) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this._checkResponse)
  }

  deleteLike (id, token) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this._checkResponse)
  }

}

const api = new Api({ baseUrl: BASE_URL });

export {api}
