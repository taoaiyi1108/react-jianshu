import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { List, Recommend, Topic, Writer } from './components';
import { actionCreators } from './store';

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

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHemoInfo());
    }
})

export default connect(null, mapDispatch)(Home);