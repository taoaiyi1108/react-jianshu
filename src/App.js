import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconFontStyle } from './statics/icon-font/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle />
                <IconFontStyle />
                <Header />
            </Provider>

        );
    }
}

export default App;
