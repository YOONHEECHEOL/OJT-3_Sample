import React, { Component, Fragment } from 'react';

// 영업기회 포기
export default class SalesChanceGiveUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01:'영업기회 포화',
            radioIdx:'1',
            multiText   : '',
        }
    }

    // 라디오 셀렉트
    handleClickRadio = (idx) => {
        if(idx === '1'){
            this.setState({textInput01:'영업기회 포화',radioIdx:'1'})
        }else if(idx === '2'){
            this.setState({textInput01:'담당지역 및 제품 변경',radioIdx:'2'})
        }else if(idx === '3'){
            this.setState({textInput01:'기존영업진행 고객거부',radioIdx:'3'})
        }else if(idx === '4'){
            this.setState({textInput01:'기타',radioIdx:'4'})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('salesChanceGiveUpPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">영업기회 포기</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 기본정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">포기사유</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>구분<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box" onClick={()=>{this.handleClickRadio('1');}}>
                                <dl className="v-box flex-1">
                                    <dd>
                                        <div className="radioLabel">영업기회 포화</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`radioBtn flex-1 ${this.state.radioIdx === '1' ? 'on':''}`}/>
                                </div>
                            </div>
                            <div className="editUnit h-box" onClick={()=>{this.handleClickRadio('2');}}>
                                <dl className="v-box flex-1">
                                    <dd>
                                        <div className="radioLabel">담당지역 및 제품 변경</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`radioBtn flex-1 ${this.state.radioIdx === '2' ? 'on':''}`}/>
                                </div>
                            </div>
                            <div className="editUnit h-box" onClick={()=>{this.handleClickRadio('3');}}>
                                <dl className="v-box flex-1">
                                    <dd>
                                        <div className="radioLabel">기존영업진행 고객거부</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`radioBtn flex-1 ${this.state.radioIdx === '3' ? 'on':''}`}/>
                                </div>
                            </div>
                            <div className="editUnit h-box" onClick={()=>{this.handleClickRadio('4');}}>
                                <dl className="v-box flex-1">
                                    <dd>
                                        <div className="radioLabel">기타</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`radioBtn flex-1 ${this.state.radioIdx === '4' ? 'on':''}`}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>메모</dt>
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


