### React学习笔记

#### css sytled-components 

#### immutable.js 
- 生成一个immutable对象(不可改变的),防止在reducer中对原有的state进行修改;
- `npm install immutale --save`

#### redux-immutable 
- `npm insatll redux-immutable --save`
```javascript
    focused: state.get('header').get('focused')
    /* 等价于 */
    focused: state.getIn(['header','focused']);
```