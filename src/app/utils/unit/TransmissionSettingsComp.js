import React, { Component, Fragment } from 'react';

// 전송설정 선택
export default class TransmissionSettingsComp extends Component {
    constructor(props) {
        super(props);


        this.state = {
            // radio idx
            radioIdx:'1',
        }
    }

    // 라디오 셀렉트
    handleClickRadio = (idx) => {
        this.setState({radioIdx:idx})
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('transmissionSettingsCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">전송설정</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleTransmissionSettingsValue(this.state.radioIdx);this.props.handleClickPanelClose('transmissionSettingsCompPanel');}}>확인</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        <div className="selList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                            <ul>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('1');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">즉시전송</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '1' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('2');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">예약전송</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '2' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('3');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">미전송</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '3' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


