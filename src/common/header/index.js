import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Navserch,
    Addition,
    Button,
    SercherWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

class Header extends Component {
    getListArea() {
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {list.map((item) => (<SearchInfoItem key={item}>{item}</SearchInfoItem>))}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SercherWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Navserch
                                onFocus={this.props.handeInputlFocus}
                                className={this.props.focused ? 'focused' : ''}
                                onBlur={this.props.handeInputlBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'} >&#xe63d;</i>
                        {this.getListArea()}
                    </SercherWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting"><i className="iconfont">&#xe622;</i>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handeInputlFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handeInputlBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);