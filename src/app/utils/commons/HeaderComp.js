import React, { Component, Fragment } from 'react';

// 모바일 헤더
export default class HeaderComp extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        if(this.props.type === 'headerDefault'){ // [공통] 기본헤더 - (메인:검색/메뉴)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="menuBtn" 
                                onClick={(e)=>{
                                    e.stopPropagation();e.preventDefault();
                                    this.props.handleClickLnb();
                                }}
                            />
                            <span className="searchBtn" 
                                onClick={(e)=>{
                                    e.stopPropagation();e.preventDefault();
                                    this.props.handleClickSearch();
                                }}
                            />
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType1'){ // [상세] 타입1 - (상세:버튼없음)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType2'){ // [상세] 타입2 - (상세:텍스트버튼)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }}
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="textBtn" 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();}}
                            >{this.props.textBtnName}</span>
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType3'){ // [상세] 타입3 - (검색:마이크)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="mikeBtn" 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();}}
                            />
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType4'){ // [상세] 타입4 - (상세:즐겨찾기/수정/더보기)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="moreBtn" 
                                onClick={(e)=>{
                                    e.stopPropagation();e.preventDefault();
                                    if(this.props.handleClickContactMore){
                                        this.props.handleClickContactMore();
                                    }else if(this.props.handleClickCustomerMore){
                                        this.props.handleClickCustomerMore();
                                    }
                                }}
                            />
                            <span className="editBtn" 
                                onClick={(e)=>{
                                    e.stopPropagation();e.preventDefault();
                                    if(this.props.handleClickContactEdit){
                                        this.props.handleClickContactEdit();
                                    }else if(this.props.handleClickCustomerEdit){
                                        this.props.handleClickCustomerEdit();
                                    }
                                }}
                            />
                            <span className={`bookMarkBtn ${this.state.bookMark ? 'on':''}`} onClick={()=>this.setState({bookMark:!this.state.bookMark})}/>
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType5'){ // [상세] 타입5 - (상세:즐겨찾기/삭제)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="deleteBtn" 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();}}
                            />
                            <span className={`bookMarkBtn ${this.state.bookMark ? 'on':''}`} onClick={()=>this.setState({bookMark:!this.state.bookMark})}/>
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType6'){ // [상세] 타입6 - (상세:수정/삭제)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className="deleteBtn" 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();}}
                            />
                            <span className="editBtn" 
                                onClick={(e)=>{e.stopPropagation();e.preventDefault();}}
                            />
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'headerType7'){ // [상세] 타입7 - (상세:즐겨찾기)
            return (
                <Fragment>
                    <div className={`header h-box ${this.props.className || ''}`}>
                        {/* 왼쪽 버튼영역 */}
                        <div className="leftFnDiv">
                            <span className="backBtn" 
                                onClick={()=>{
                                    this.props.handleClickBack();
                                }} 
                            />
                        </div>
                        {/* 타이틀영역 */}
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.props.title}</span>
                        </div>
                        {/* 오른쪽 버튼영역 */}
                        <div className="rightFnDiv">
                            <span className={`bookMarkBtn ${this.state.bookMark ? 'on':''}`} onClick={()=>this.setState({bookMark:!this.state.bookMark})}/>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}


