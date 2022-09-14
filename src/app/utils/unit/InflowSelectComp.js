import React, { Component, Fragment } from 'react';

// 유입경로 선택
export default class InflowSelectComp extends Component {
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
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('inflowSelectCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">유입경로 선택</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
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
                                                <div className="title flex-1">마케팅 캠페인</div>
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
                                                <div className="title flex-1">고객상담</div>
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
                                                <div className="title flex-1">지인소개</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '3' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('4');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">홈페이지</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '4' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('5');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">소스구매</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '5' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('6');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">인터넷 검색</div>
                                            </div>
                                        </div>
                                        <div className="list-radio">
                                            <span className={`ico ${this.state.radioIdx === '6' ? 'on':''}`} />
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


