import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { HeaderWrapper, Logo, Nav, NavItem, Navserch, Addition, Button, SercherWrapper } from './style';

const Header = (props) => (
    <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
                <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SercherWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <Navserch
                        onFocus={props.handeInputlFocus}
                        className={props.focused ? 'focused' : ''}
                        onBlur={props.handeInputlBlur}
                    />
                </CSSTransition>
                <span className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe63d;</span>
            </SercherWrapper>
        </Nav>
        <Addition>
            <Button className="reg">注册</Button>
            <Button className="writting"><span className="iconfont">&#xe622;</span>写文章</Button>
        </Addition>
    </HeaderWrapper>
)


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handeInputlFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handeInputlBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);