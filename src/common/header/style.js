import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWraper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.a.attrs({
    href: "/"
})`
    width: 100px;
    height:56px;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;                
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696; 
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        cursor: pointer;
        text-align: center;
        &.iconfocus{
            background: #777;
            color: #FFF;
        }
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: 969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 3px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    margin-right: 10px;
    margin-bottom: 15px;
    display: block;
    float: left; 
    line-height: 20px;
    padding: 0px 5px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    &:hover{
        color: #333;
        border-color: #333;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.foucsed{
        width: 320px
    }
    &.slide-enter {
        transition: all .5s ease-out;
    }
    &.slide-enter-active {
        width: 320px;
    }
    &.slide-exit {
        transition: all .5s ease-out;
    }
    &.slide-exit-active {
        width: 240px;
    }
    
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.watting {
        color: #fff;
        background: #ec6149;
    }
`;