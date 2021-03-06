import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import DeletePlacePopup from './DeletePlacePopup'
import Login from './Login'
import Register from './Register'
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from "./ProtectedRoute";
import React  from 'react'
import { api } from '../utils/api'
import CurrentUserContext from '../contexts/CurrentUserContext'
import * as auth from '../utils/auth'


function App() {
  const history = useHistory();

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [deleteCard, setDeleteCard] = React.useState(null)
  const [cards, setCards] = React.useState([])

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false)
  const [infoTooltipState, setInfoTooltipState] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [userEmail, setUserEmail] = React.useState('')

  const [delButtonText, setDelButtonText] = React.useState('Да')
  const [editButtonText, setEditButtonText] = React.useState('Сохранить')
  const [avatarButtonText, setAvatarButtonText] = React.useState('Сохранить')
  const [placeButtonText, setPlaceButtonText] = React.useState('Создать')
  const [currentUser, setCurrentUser] = React.useState(React.useContext(CurrentUserContext))

  /* Закрытие и открытие попапов */

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
    setDeleteCard(null)
    setIsInfoTooltipOpen(false)
  }

  const stopProp = (evt) => {
    evt.stopPropagation();
  }

  React.useEffect( () => {
    if (loggedIn) {
      const jwt = localStorage.getItem('jwt');

      const handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
          closeAllPopups()
        }
      }

      api.getInitialData(jwt)
        .then((res) => {
          setCurrentUser(res[0]);
          setCards(res[1].reverse());
        })
        .catch((err) => {
          console.log(err);
        });

      document.addEventListener('keydown', handleEscClose)

      return () => {
        document.removeEventListener('keydown', handleEscClose)
      }
    }
  }, [loggedIn])

  React.useEffect( () => {
    tokenCheck();
  }, [loggedIn])

  /* Авторизация и регистрация */

  const setInfoTooltipMessage = (value) => {
    setInfoTooltipState(value)
  }

  const isLogIn = (value) => {
    setLoggedIn(value);
  }

  const removeCurrentUser = (value) => {
    setCurrentUser(value)
  }

  const removeEmail = (value) => {
    setUserEmail(value)
  }

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');

      auth.checkToken(jwt)
        .then((res) => {
          if (res.email !== userEmail) {
            setUserEmail(res.email);
            setCurrentUser(res);
          }
            setLoggedIn(true)
            history.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleRegistration = (password, email) => {
    auth.register(password, email)
      .then(() => {
        setInfoTooltipMessage(true)
        setIsInfoTooltipOpen(true)
        history.push('/sign-in')
      })
      .catch((err) => {
        console.log(err)
        setInfoTooltipMessage(false)
        setIsInfoTooltipOpen(true)
      })
  };

  const handleLogIn = (password, email) => {
    auth.authorize(password, email)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        history.push('/')
      })
      .catch( (err) => {
        setInfoTooltipMessage(false)
        setIsInfoTooltipOpen(true)
        console.log(err)
      });
  }

  /* Сабмит попапов профиля */

  function handleUpdateUser (data) {
    const jwt = localStorage.getItem('jwt');
    setEditButtonText('Сохранение...')
    api.editProfileInfo (data, jwt)
      .then( (data) => {
        setCurrentUser(data);
        closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setEditButtonText('Сохранить')
    })
  }

   function handleUpdateAvatar (data) {
    const jwt = localStorage.getItem('jwt');
    setAvatarButtonText('Сохранение...')
    api.editAvatar (data, jwt)
      .then( (data) => {
        setCurrentUser(data);
        closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setAvatarButtonText('Сохранить')
    })
  }

  /* Работа с карточками */

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleDelClick = (card) => {
    setDeleteCard(card)
  }

  function handleCardLike(card) {
    const jwt = localStorage.getItem('jwt');
    const isLiked = card.likes.some(id => id === currentUser._id);

    const changeLike = (newCard) => {
      const newCards = cards.map((item) => item._id === card._id ? newCard : item);
      setCards(newCards);
    }

    if (!isLiked) {
      api.setLike(card._id, jwt)
      .then((newCard) => {
        changeLike(newCard)
      })
      .catch((err) => {
        console.log(err);
      })}
    else {
      api.deleteLike(card._id, jwt)
       .then((newCard) => {
        changeLike(newCard)
       })
       .catch((err) => {
         console.log(err);
      })
    }
  }

  function handleDeleteClick (deletedCard) {
    const jwt = localStorage.getItem('jwt');
    setDelButtonText('Удаление...')
    api.deleteItem(deletedCard._id, jwt)
    .then(() => {
      const newCards = cards.filter((item) => item !== deletedCard);
      setCards(newCards);
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setDelButtonText('Да')
    })
  }

  /* Сабмит добавления карточки */

  function handleAddPlaceSubmit (newCard) {
    const jwt = localStorage.getItem('jwt');
    setPlaceButtonText('Сохранение...')
    api.postItem(newCard,jwt)
      .then( (newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setPlaceButtonText('Создать')
    })
  }

  /* Разметка */

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <Header
        loggedIn={loggedIn}
        logIn={isLogIn}
        userEmail={userEmail}
        removeUser={removeCurrentUser}
        removeEmail={removeEmail}
      />

      <Switch>
        <Route path="/sign-in">
          <Login
            title='Вход'
            buttonText='Войти'
            name='login'
            onLogIn={handleLogIn}
          />
          </Route>
          <Route path="/sign-up">
            <Register
              title='Регистрация'
              buttonText='Зарегистрироваться'
              name='register'
              onRegister={handleRegistration}
            />
         </Route>



        <ProtectedRoute
            path="/"
            exact
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onDelClick={handleDelClick}
            cards={cards}
            onCardLike={handleCardLike}
        />

      </Switch>
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        stopProp={stopProp}
        onUpdateUser={handleUpdateUser}
        buttonText={editButtonText}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        stopProp={stopProp}
        onUpdateAvatar={handleUpdateAvatar}
        buttonText={avatarButtonText}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        stopProp={stopProp}
        onAddPlace={handleAddPlaceSubmit}
        buttonText={placeButtonText}
      />

      <DeletePlacePopup
        onClose={closeAllPopups}
        stopProp={stopProp}
        card={deleteCard}
        onCardDelete={handleDeleteClick}
        buttonText={delButtonText}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        stopProp={stopProp}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        stopProp={stopProp}
        state={infoTooltipState}
      />
    </CurrentUserContext.Provider>
  )
}

export default App;
