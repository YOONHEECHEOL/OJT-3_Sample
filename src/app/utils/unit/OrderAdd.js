import React, { Component, Fragment } from 'react';
import MenuSheetComp from '../commons/MenuSheetComp';
import PanelWrap from '../commons/PanelWrap';
import PopupWrap from '../commons/PopupWrap';
import SubjectDetailsPop from '../popup/SubjectDetailsPop';
import ContactSelectComp from './ContactSelectComp';
import PreviousQuoteListComp from './PreviousQuoteListComp';
import SubjectCampaignComp from './SubjectCampaignComp';
import SubjectPriceComp from './SubjectPriceComp';
import SubjectSelectComp from './SubjectSelectComp';

// 주문 등록
export default class OrderAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01: '가나상사',
            textInput02: '홍길동',
            textInput03: '',
            textInput04: '',
            textInput05: '매출과세',
            textInput06: '부가세포함',
            textInput07: '고객사 본사',
            textInput08: 'Amaranth10 업셀 프로모션',
            textInput09: '김영묵 대리',
            textInput10: '',
            multiText: '고객사 방문설치 및 교육진행 포함',

            // 패널 모드
            contactSelectCompPanel       : false,          // 고객담당자 선택
            taxTypeSheetSelectPanel      : false,          // 과세구분 선택
            unitPriceSheetSelectPanel    : false,          // 단가구분 선택
            previousQuoteListCompPanel   : false,          // 이전차수
            subjectRegistrationPanel     : false,          // 품목 등록
            subjectPriceCompPanel        : false,          // 가격표 불러오기
            subjectCampaignCompPanel     : false,          // 캠페인 불러오기
            subjectSelectCompPanel       : false,          // 품목 직접입력

            // 팝업 모드
            subjectDetailsPop            : false,          // 품목상세정보
        }
    }

    // 고객사명 선택 호출
    handleClickContactSelectComp = () => { this.setState({ contactSelectCompPanel : true }); }
    // 과세구분 선택 호출
    handleClickTaxTypeSelectComp = () => { this.setState({ taxTypeSheetSelectPanel : true }); }
    // 단가구분 선택 호출
    handleClickUnitPriceSelectComp = () => { this.setState({ unitPriceSheetSelectPanel : true }); }
    // 이전차수 호출
    handleClickPreviousQuoteListComp = () => { this.setState({ previousQuoteListCompPanel : true }); }
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
            taxTypeSheetSelectPanel: false,
            unitPriceSheetSelectPanel: false,
            subjectRegistrationPanel: false,
        });
        if(state === 'contactSelectCompPanel' ){
            this.setState({ contactSelectCompPanel : false });
        }else if(state === 'subjectSelectCompPanel' ){
            this.setState({ subjectSelectCompPanel : false });
        }else if(state === 'previousQuoteListCompPanel' ){
            this.setState({ previousQuoteListCompPanel : false });
        }else if(state === 'subjectPriceCompPanel' ){
            this.setState({ subjectPriceCompPanel : false });
        }else if(state === 'subjectCampaignCompPanel'){
            this.setState({ subjectCampaignCompPanel : false });
        }
    }

    // 품목상세정보 호출
    handleClickSubjectDetailsPop = () => { this.setState({ subjectDetailsPop : true }); }
    
    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            subjectDetailsPop : false,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('orderAddPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">주문등록</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 주문정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">주문정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='고객사명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당자<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='고객담당자를 선택해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickContactSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>주문번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='주문번호' onChange={(e) => this.setState({ textInput03: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>주문일자<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='주문일자를 선택해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="calBtn flex-1"/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>과세구분<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='과세구분을 선택해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickTaxTypeSelectComp} />
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>단가구분<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='단가구분을 선택해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickUnitPriceSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>납품장소</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='납품장소' onChange={(e) => this.setState({ textInput07: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>캠페인선택</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='캠페인선택' onChange={(e) => this.setState({ textInput08: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업담당자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='영업담당자' onChange={(e) => this.setState({ textInput09: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>비고</dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="비고" onChange={(e) => this.setState({ multiText : e.target.value })} style={{minHeight:'auto'}} readOnly>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>첨부파일</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput10} placeholder='첨부파일을 등록해주세요.' onChange={(e) => this.setState({ textInput10: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="fileBtn flex-1"/>
                                </div>
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
                                        <div className="itemDiv brn h-box">
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
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv brn h-box">
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
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv brn h-box">
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
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                    <div className="edit" onClick={this.handleClickSubjectDetailsPop}/>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 서브페이지 버튼들 */}
                    <div className="subPageBtn h-box">
                        <div className="pageBtn" onClick={this.handleClickPreviousQuoteListComp}>견적 불러오기</div>
                        <div className="pageBtn blue">미리보기</div>
                    </div>
                </div>

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

                {/* 과세구분 셀렉트 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.taxTypeSheetSelectPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'taxTypeSheetSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 단가구분 셀렉트 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.unitPriceSheetSelectPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'unitPriceSheetSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 품목상세정보 팝업 */}
                <PopupWrap
                    Open={this.state.subjectDetailsPop} 
                    Close={this.handleClickPopupClose}
                >
                    <SubjectDetailsPop 
                        handleClickPopupClose={this.handleClickPopupClose}
                    />
                </PopupWrap>

                {/* 이전차수 선택 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.previousQuoteListCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <PreviousQuoteListComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

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


