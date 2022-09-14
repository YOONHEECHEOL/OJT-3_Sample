import React, { Component, Fragment } from 'react';
import PanelWrap from '../commons/PanelWrap';
import PopupWrap from '../commons/PopupWrap';
import CustomerSelectComp from './CustomerSelectComp';
import AddressComp from './AddressComp';
import ContactSelectComp from './ContactSelectComp';
import SalesStepTypeComp from './SalesStepTypeComp';
import InflowSelectComp from './InflowSelectComp';
import CdConfirmPop from '../popup/CdConfirmPop';
import AlertPop from '../popup/AlertPop';

// 고객발굴 등록
export class CustomerDiscoveryAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01: '',
            textInput02: '',
            textInput03: '',
            textInput04: '고객발굴 기본형',
            textInput05: '2021.06.14',
            textInput06: '',
            textInput07: '고객사 기본주소 상동',
            textInput08: '',
            textInput09: '',
            multiText: '',

            salesAddrSwitch: true,

            // 패널 모드
            customerSelectCompPanel   : false,          // 고객사명 선택
            contactSelectCompPanel    : false,          // 고객담당자 선택
            salesStepTypeCompPanel    : false,          // 영업단계유형 선택
            inflowSelectCompPanel     : false,          // 유입경로 선택
            addressCompPanel          : false,          // 주소검색
            // 팝업 모드
            cdConfirmPop              : false,          // 공통컨펌 팝업
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
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        if(state === 'customerSelectCompPanel' ){
            this.setState({ customerSelectCompPanel : false });
        }else if(state === 'contactSelectCompPanel' ){
            this.setState({ contactSelectCompPanel : false });
        }else if(state === 'salesStepTypeCompPanel' ){
            this.setState({ salesStepTypeCompPanel : false });
        }else if(state === 'inflowSelectCompPanel' ){
            this.setState({ inflowSelectCompPanel : false });
        }else if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }
    }

    // 공통컨펌 호출
    handleClickCdConfirmPop = () => { this.setState({ cdConfirmPop : true }); }
    // 공통알림 호출
    handleClickAlertPop = () => { this.setState({ alertPop : true }); }

    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            cdConfirmPop : false,
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
                            <span className="closeBtn" onClick={this.handleClickCdConfirmPop} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">고객발굴</span>
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
                                    <dt>영업단계유형<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='영업단계유형을 선택해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })} readOnly/>
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
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='만료일자를 선택해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유입경로</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='유입경로를 선택해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickInflowSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업주소<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className={`inputField flex-1 ${this.state.salesAddrSwitch ? 'text_blue':'text_gray'}`} value={this.state.textInput07} onChange={(e) => this.setState({ textInput07: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`switchBtn flex-1 ${this.state.salesAddrSwitch ? 'on':''}`} onClick={()=>{this.setState({salesAddrSwitch:!this.state.salesAddrSwitch})}}/>
                                </div>
                            </div>
                            <div className="editUnit h-box" style={{display:this.state.salesAddrSwitch ? 'none':''}}>
                                <dl className="v-box flex-1">
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='주소를 입력해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickAddressComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box" style={{display:this.state.salesAddrSwitch ? 'none':''}}>
                                <dl className="v-box flex-1">
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='상세주소를 입력해주세요.' onChange={(e) => this.setState({ textInput10: e.target.value })}/>
                                    </dd>
                                </dl>
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

                {/* 주소검색 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.addressCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <AddressComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 공통 컨펌 */}
                <PopupWrap
                    Open={this.state.cdConfirmPop} 
                    Close={this.handleClickPopupClose}
                >
                    <CdConfirmPop 
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

            </Fragment>
        );
    }
}


