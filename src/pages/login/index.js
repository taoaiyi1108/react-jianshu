import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store'

class Login extends Component {

    render() {
        const { loginStatus, login } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => (this.account = input)} />
                        <Input placeholder="密码" type="password" ref={(input) => (this.password = input)} />
                        <Button onClick={() => (login(this.account, this.password))}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/" />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => {
    return {
        login(accountEle, passwordEle) {
            const account = accountEle.value;
            const password = passwordEle.value;
            return dispatch(actionCreators.login(account, password))
        }
    }
}

export default connect(mapState, mapDispatch)(Login);