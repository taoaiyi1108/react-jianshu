import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconFontStyle } from './statics/icon-font/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <IconFontStyle />
                <BrowserRouter>
                    <Header />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </BrowserRouter>
            </Provider >

        );
    }
}

export default App;
