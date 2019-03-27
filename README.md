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

#### 路由
- `npm install react-router-dom --save`
- render函数 ` <Route path='/' exact render={() => (<div>Home</div>)}></Route>`;
- compone ` <Route path='/' exact component={Home}></Route>`;

##### PureComponent
- PureComponent 与 Component 差别就在于前者底层自动实现 react的生命钩子 shouldComponentUpdate 来实现性能的优化
- 注意：使用PureComponent时结合immutable来使用，如果没有immutable时直接使用PureComponent会有异常

##### 获取路由传参
- 动态路由传参
    - `to={'/detail/:id}`
    - `this.props.match.params.id`
- 拼接参数
    - `to={'/detail}` ==> 实例 `to={'/detail?id=' + 1}`
    - `this.location.search` ==> `?id=1` 需要手动处理
- 路由重定向 `<Redireact to='/'>`

##### 异步组件 `react-loadable`
    - `npm install react-loadable --save`
    - 获取路由参数需要使用 `withRouter`