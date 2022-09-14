import React, { Component, Fragment } from 'react';
import MenuSheetComp from '../commons/MenuSheetComp';
import PanelWrap from '../commons/PanelWrap';
import SubjectCampaignComp from './SubjectCampaignComp';
import SubjectPriceComp from './SubjectPriceComp';
import SubjectSelectComp from './SubjectSelectComp';

// 견적요청
export default class EstimateRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01: '가나상사',
            textInput02: '홍길동 과장',
            textInput03: '김영묵 대리',
            textInput04: '김학규 대리',
            textInput05: 'Amaranth10 업셀 프로모션',
            textInput06: '영업기회 기본형',
            multiText: 'Amaranth 10 인사/회계/CRM 기본상품(5User)관심이 있는 고객사입니다. 이전차수 1차 견적서를 기준으로 할인단가 10%적용, 부가세 포함 부탁드립니다. 결제조건: 무통장 입금/일시납 비고사항: 고객사 방문설치 및 교육 포함',

            // 패널 모드
            subjectRegistrationPanel  : false,          // 품목 등록
            subjectPriceCompPanel     : false,          // 가격표 불러오기
            subjectCampaignCompPanel  : false,          // 캠페인 불러오기
            subjectSelectCompPanel    : false,          // 품목 직접입력
        }
    }

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
            subjectRegistrationPanel : false,
        });
        if(state === 'subjectSelectCompPanel' ){
            this.setState({ subjectSelectCompPanel : false });
        }else if(state === 'subjectPriceCompPanel' ){
            this.setState({ subjectPriceCompPanel : false });
        }else if(state === 'subjectCampaignCompPanel'){
            this.setState({ subjectCampaignCompPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('estimateRequestPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">견적요청</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 견적정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">견적정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사명</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='고객사명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='고객담당자를 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업담당자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='영업담당자를 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>견적담당자<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='견적담당자를 입력해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1"/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>캠페인</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='캠페인을 선택해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>요청사항<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="요청사항을 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
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


