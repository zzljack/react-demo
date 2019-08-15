import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailTitle, Content } from './style';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <DetailTitle>{this.props.title}</DetailTitle>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.changeDetailList(id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    changeDetailList(id) {
        dispatch( actionCreators.detailList(id));
    }
})

export default connect(mapState, mapDispatch)(Detail);