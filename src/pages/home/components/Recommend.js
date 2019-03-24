import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                <div className='board'>
                    {
                        list.map(item => (<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                            {/* <img className='recommenditem-pic' src={item.get('imgUrl')} alt='' />  */}
                        </RecommendItem>))
                    }
                </div>
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);