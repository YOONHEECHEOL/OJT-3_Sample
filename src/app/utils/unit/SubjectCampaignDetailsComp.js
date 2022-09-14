import React, { Component, Fragment } from 'react';
import SubjectPriceDetailsListComp from './SubjectPriceDetailsListComp';

// 캠페인 상세품목
export default class SubjectCampaignDetailsComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 검색
            inputFocus : false,
            searchInput:'',

            // 캠페인 상세품목 탭
            tabStateOpen01: true,
            tabStateOpen02: false,
        }
    }

    // 탭
    handleDetailsTabClick = (type) => {
        this.setState({ 
            tabStateOpen01: false, tabStateOpen02: false, 
        })
        
        if(type === '1'){
            this.setState({ tabStateOpen01: true})
        }else if(type === '2'){
            this.setState({ tabStateOpen02: true})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose();}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">캠페인 상세품목</span>
                        </div>
                    </div>
                    {/* 상세 탭 */}
                    <div className={`detailsTab ${this.state.tabStateOpen01 ? 'borderT':'brbn borderT'}`}>
                        <div className="detailsTabMenu">
                            <ul className="flex-1 h-box">
                                <li className={`${this.state.tabStateOpen01 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('1')}>
                                    <span className="txt">캠페인정보</span>
                                </li>
                                <li className={`${this.state.tabStateOpen02 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('2')}>
                                    <span className="txt">상세품목</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 캠페인정보 탭 ----------------------------------------------------------------------------------------------------*/}
                    <div className={`viewBody flex-1 v-box bgType1`} style={{display:this.state.tabStateOpen01 ? '':'none'}}>
                        <div className="selList flex-1">
                            <ul>
                                <li>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails">
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>캠페인명</dt>
                                                <dd>
                                                    <div className="txt">Amaranth10 전환 프로모션</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>차수</dt>
                                                <dd>
                                                    <div className="txt">3차</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>기간</dt>
                                                <dd>
                                                    <div className="txt">2021.06.08~2021.04.03</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>품목</dt>
                                                <dd>
                                                    <div className="txt">
                                                        Amaranth10 인사, Amaranth10 회계, Amaranth10 CRM
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>비용</dt>
                                                <dd>
                                                    <div className="txt fwb">6,300,000</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>목표</dt>
                                                <dd>
                                                    <div className="txt fwb">6,700,000</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>내용</dt>
                                                <dd>
                                                    <div className="textarea" style={{minHeight:'auto'}}>
                                                        Amaranth10 출시에 따른 기존고객 전환 프로모션을 진행하고자 합니다.<br/>
                                                        대상고객은 아이큐브 회계/인사 사용고객이며, 상반기까지 캠페인 추이를 보며 추가 프로모션 여부를 파악했습니다.
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <div className="title flex-1">첨부파일</div>
                                            <div className="fnBtn h-box">
                                                <div className="files"><span className="cnt">3</span></div>
                                            </div>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>결재문서</dt>
                                                <dd>
                                                    <div className="link">Amaranth10 전환프로모션 4차 진행건</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    {/* 상세품목 탭 ----------------------------------------------------------------------------------------------------*/}
                    <div className='flex-1 v-box' style={{display:this.state.tabStateOpen02 ? '':'none'}}>
                        {/* 검색영역 */}
                        <div className="searchBoxWrap h-box">
                            <div className="searchBox h-box flex-1">
                                <div className="ico"/>
                                <input type="text" ref={this.searchRef} className="inputField flex-1" value={this.state.searchInput} placeholder='검색어를 입력해주세요.' onChange={(e) => this.setState({ searchInput: e.target.value })} onFocus={(e) => this.setState({inputFocus:true})} onBlur={(e) => this.setState({inputFocus:false})}/>
                                <div className="clearBtn" style={{display:this.state.searchInput === '' ? 'none':''}} onClick={()=>{this.setState({searchInput:''})}}/>
                            </div>
                            <div className="cancelBtn" style={{display:this.state.inputFocus ? '':'none'}}>취소</div>
                        </div>
                        <div className={`viewBody flex-1 v-box bgType1`}>
                            <SubjectPriceDetailsListComp />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


