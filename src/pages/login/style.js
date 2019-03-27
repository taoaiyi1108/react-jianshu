import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 0;
    background: #eee;
`;

export const LoginBox = styled.div`
    overflow: hidden;
    width: 400px;
    height: 220px;
    margin: 80px auto
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);

`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    color: #777;
    margin: 30px auto;
`;

export const Button = styled.div`
    display: block;
    width: 220px;
    height: 30px;
    line-height: 30px;
    margin: 30px auto;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    text-align: center;
`;