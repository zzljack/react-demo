import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
`;

export const DetailTitle = styled.div`
    word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
`;

export const Content = styled.div`
    color: #2f2f2f;
    word-break: break-word!important;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    img{
        width: 100%;
    }
    p{
        margin: 0 0 25px;
    }
`