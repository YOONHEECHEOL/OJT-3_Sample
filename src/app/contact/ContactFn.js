import React, { Component, Fragment } from 'react';

// 연락처 리스트 상단
export default class ContactFn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookMark : false,
        }
    }

    handleClickBookMark = () => {
        if(!this.state.bookMark){
            this.setState({bookMark : true})
        }else{
            this.setState({bookMark : false})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="listHeaderWrap h-box">
                    <div className="leftDiv flex-1 h-box">
                        <span className={`bookMarkBtn ${this.state.bookMark ? 'on':''}`} onClick={this.handleClickBookMark}>즐겨찾기</span>
                    </div>
                    <div className="rightDiv h-box">
                        <span className={`filterBtn`} onClick={this.props.handleClickListFilter}><span className="cnt">2</span></span>
                    </div>
                </div>
            </Fragment>
        );
    }
}


