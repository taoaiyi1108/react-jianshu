import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { List, Recommend, Topic, Writer } from './components';
import { actionCreators } from './store';

class Home extends PureComponent {
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop.bind(this)}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.scrollTopShow);
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.scrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHemoInfo());
    },
    scrollTopShow(e) {
        if (document.documentElement.scrollTop >= 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);