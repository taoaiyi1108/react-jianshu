import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => (
                        <Link key={index} to='/detail'>
                            <ListItem>
                                <img className='list-pic' src={item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>

                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多...</LoadMore>
            </Fragment>
        )
    }
}

const mapstate = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapstate, mapDispatch)(List);