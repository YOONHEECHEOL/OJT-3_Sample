import React, { Component, Fragment } from 'react';

// 발굴실패
export class ExcavationFailed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            multiText: '',
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('excavationFailedPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">발굴실패</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box`}>
                        <div className="basicContents flex-1 v-box">
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">발굴실패 정보</div>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>메모<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="메모를 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// 영업실패
export class SalesFailed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            multiText: '',
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('salesFailedPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">영업실패</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box`}>
                        <div className="basicContents flex-1 v-box">
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">영업실패 정보</div>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>메모<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="메모를 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}




