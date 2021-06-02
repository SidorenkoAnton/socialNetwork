
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login'
import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAndSetAuthUser } from './redux/auth-reducer';
import { getInitializedData } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';









const App = (props) => {

  useEffect(() => {
    props.getInitializedData()
  })


  return (<div>
    {props.isInitialized ?
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
      </div>
    </div> : <Preloader />
  }
  </div>

  )
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default connect(mapStateToProps, { getInitializedData })(App);


