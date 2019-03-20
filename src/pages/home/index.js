import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { List, Recommend, Topic, Writer } from './components';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4619/667c4f9446720ed3a12690580eb534cef8b58192.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;