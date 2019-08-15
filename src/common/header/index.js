import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWraper,
    Logo,
    Nav,
    NavItem,
    SearchWapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style';
class Header extends Component {
    getListArea (){
        const { foucsed, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for ( let i = (page - 1) * 10; i < page * 10; i++) {
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
                
            }
        }
        if(foucsed || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render (){
        const { foucsed, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWraper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWapper>
                        <CSSTransition
                            in={foucsed}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={foucsed? "foucsed": ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={foucsed? "iconfocus iconfont zoom": "iconfont zoom"}>
                            &#xe623;
                        </i>
                        {this.getListArea()}
                    </SearchWapper>
                </Nav>
                <Addition>
                    <Button className='watting'>
                        <i className="iconfont">&#xe670;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWraper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        foucsed: state.getIn(['header', 'foucsed']), //或者state.get("header").get('foucsed')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list);
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            const originAngle = Number(spin.style.transform.replace(/[^0-9]/ig, ""));
            console.log(originAngle);
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Header);