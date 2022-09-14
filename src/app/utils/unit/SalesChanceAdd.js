import React, { Component, Fragment } from 'react';
import PanelWrap from '../commons/PanelWrap';
import PopupWrap from '../commons/PopupWrap';
import CustomerSelectComp from './CustomerSelectComp';
import ContactSelectComp from './ContactSelectComp';
import SalesStepTypeComp from './SalesStepTypeComp';
import InflowSelectComp from './InflowSelectComp';
import CampaignSelectComp from './CampaignSelectComp';
import SubjectSelectComp from './SubjectSelectComp';
import ScConfirmPop from '../popup/ScConfirmPop';
import AlertPop from '../popup/AlertPop';
import MenuSheetComp from '../commons/MenuSheetComp';
import SubjectPriceComp from './SubjectPriceComp';
import SubjectCampaignComp from './SubjectCampaignComp';

// 영업기회 등록
export class SalesChanceAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01: '',
            textInput02: '',
            textInput03: '',
            textInput04: '',
            textInput05: '',
            textInput06: '영업기회 기본형',
            textInput07: '2021.06.14',
            textInput08: '',
            textInput09: '',
            multiText: '',

            // 패널 모드
            customerSelectCompPanel   : false,          // 고객사명 선택
            contactSelectCompPanel    : false,          // 고객담당자 선택
            salesStepTypeCompPanel    : false,          // 영업단계유형 선택
            inflowSelectCompPanel     : false,          // 유입경로 선택
            campaignSelectCompPanel   : false,          // 캠페인 선택
            subjectRegistrationPanel  : false,          // 품목 등록
            subjectPriceCompPanel     : false,          // 가격표 불러오기
            subjectCampaignCompPanel  : false,          // 캠페인 불러오기
            subjectSelectCompPanel    : false,          // 품목 직접입력

            // 팝업 모드
            scConfirmPop              : false,          // 공통컨펌 팝업
            alertPop                  : false,          // 공통알림 팝업
        }
    }

    // 고객사명 선택 호출
    handleClickCustomerSelectComp = () => { this.setState({ customerSelectCompPanel : true }); }
    // 고객담당자 선택 호출
    handleClickContactSelectComp = () => { this.setState({ contactSelectCompPanel : true }); }
    // 영업단계유형 선택 호출
    handleClickSalesStepTypeComp = () => { this.setState({ salesStepTypeCompPanel : true }); }
    // 유입경로 선택 호출
    handleClickInflowSelectComp = () => { this.setState({ inflowSelectCompPanel : true }); }
    // 캠페인 선택 호출
    handleClickCampaignSelectComp = () => { this.setState({ campaignSelectCompPanel : true }); }
    // 품목 등록 호출
    handleClickSubjectRegistrationComp = () => { this.setState({ subjectRegistrationPanel : true }); }
    // 가격표 불러오기 호출
    handleClickSubjectPriceComp = () => { this.setState({ subjectPriceCompPanel : true }); }
    // 캠페인 불러오기 호출
    handleClickSubjectCampaignComp = () => { this.setState({ subjectCampaignCompPanel : true }); }
    // 품목 직접입력 호출
    handleClickSubjectSelectComp = () => { this.setState({ subjectSelectCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({
            subjectRegistrationPanel: false,
        });
        if(state === 'customerSelectCompPanel' ){
            this.setState({ customerSelectCompPanel : false });
        }else if(state === 'contactSelectCompPanel' ){
            this.setState({ contactSelectCompPanel : false });
        }else if(state === 'salesStepTypeCompPanel' ){
            this.setState({ salesStepTypeCompPanel : false });
        }else if(state === 'inflowSelectCompPanel' ){
            this.setState({ inflowSelectCompPanel : false });
        }else if(state === 'campaignSelectCompPanel' ){
            this.setState({ campaignSelectCompPanel : false });
        }else if(state === 'subjectSelectCompPanel' ){
            this.setState({ subjectSelectCompPanel : false });
        }else if(state === 'subjectPriceCompPanel' ){
            this.setState({ subjectPriceCompPanel : false });
        }else if(state === 'subjectCampaignCompPanel'){
            this.setState({ subjectCampaignCompPanel : false });
        }
    }

    // 공통컨펌 호출
    handleClickScConfirmPop = () => { this.setState({ scConfirmPop : true }); }
    // 공통알림 호출
    handleClickAlertPop = () => { this.setState({ alertPop : true }); }

    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            scConfirmPop : false,
            alertPop : false,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={this.handleClickScConfirmPop} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">영업기회</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickAlertPop();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 기본정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">기본정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>기회명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='기회명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='고객사명을 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCustomerSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당자<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='담당자를 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickContactSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>예상수주액</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='예상수주액을 입력해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>예상수주확률</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='예상수주확률을 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업단계유형<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='영업단계유형을 선택해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickSalesStepTypeComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>만료일자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='만료일자를 선택해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유입경로</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='유입경로를 선택해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickInflowSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>캠페인</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='캠페인을 선택해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCampaignSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>메모<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="메모를 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>

                            {/* 품목정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">품목정보<span className="imp">*</span></div>
                                <div className="fnBtn h-box">
                                    <span className="plusBtn flex-1" onClick={this.handleClickSubjectRegistrationComp}/>
                                </div>
                            </div>
                            {/* 품목 아이템 */}
                            <div className="itemUnit">
                                <ul>
                                    <li>
                                        <div className="itemDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 인사</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-minus h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 회계</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-minus h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 CRM</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-minus h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 고객사명 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.customerSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <CustomerSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 고객담당자 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.contactSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <ContactSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업단계유형 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.salesStepTypeCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SalesStepTypeComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 유입경로 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.inflowSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <InflowSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 캠페인 선택 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.campaignSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <CampaignSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 공통 컨펌 */}
                <PopupWrap
                    Open={this.state.scConfirmPop} 
                    Close={this.handleClickPopupClose}
                >
                    <ScConfirmPop 
                        handleClickPopupClose={this.handleClickPopupClose}
                        handleClickPanelClose={this.props.handleClickPanelClose}
                    />
                </PopupWrap>

                {/* 공통 알림 */}
                <PopupWrap
                    Open={this.state.alertPop} 
                    Close={this.handleClickPopupClose}
                >
                    <AlertPop 
                        handleClickPopupClose={this.handleClickPopupClose}
                    />
                </PopupWrap>

                {/* 품목등록 셀렉트 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.subjectRegistrationPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'subjectRegistration'} 
                        Close={this.handleClickPanelClose}
                        handleClickSubjectPriceComp={this.handleClickSubjectPriceComp}
                        handleClickSubjectCampaignComp={this.handleClickSubjectCampaignComp}
                        handleClickSubjectSelectComp={this.handleClickSubjectSelectComp}
                    />
                </PanelWrap>

                {/* 가격표 불러오기 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.subjectPriceCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SubjectPriceComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 캠페인 불러오기 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.subjectCampaignCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SubjectCampaignComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 품목 직접입력 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.subjectSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SubjectSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

            </Fragment>
        );
    }
}


