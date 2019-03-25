import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        display: block;
        width: 100%;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background-color: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 10px;
    margin-bottom: 18px;
    .topic-pic {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 10px;
        display: block;
        float: left;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    margin-bottom: 15px;
    .list-pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
        &:hover {
            text-decoration:underline
        }
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    padding: 30px 0 0 0;
    .board {
        margin-top: -4px;
        padding-bottom: 4px;
        min-height: 228px;
    }
`;

export const RecommendItem = styled.div`
    cursor: pointer;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    .recommenditem-pic {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    right: 100px;
    bottom: 30px;
    font-size: 14px;
`;