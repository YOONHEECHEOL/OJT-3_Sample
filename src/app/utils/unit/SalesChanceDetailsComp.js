import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';
import PanelWrap from '../commons/PanelWrap';
import MenuSheetComp from '../commons/MenuSheetComp';
import { ExcavationFailed, SalesFailed } from './FailedComp';
import OpportunitySource from './OpportunitySource';
import { SalesChanceTransform } from './SalesChanceTransform';
import ItemInfoDetailsComp from './ItemInfoDetailsComp';

// 영업기회 상세
export default class SalesChanceDetailsComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 기본정보 토글
            toggleArrow: true,

            // 영업기회 프로세스
            processStep01: true,
            processStep02: false,
            processStep03: false,
            processStep04: false,
            processStep05: false,

            // 패널 모드
            salesChanceMorePanel       : false,          // 영업기회 더보기
            salesChanceTransformPanel  : false,          // 기회전환
            excavationFailedPanel      : false,          // 발굴실패
            salesFailedPanel           : false,          // 영업실패
            opportunitySourcePanel     : false,          // 기회출처
            itemInfoDetailsPanel       : false,          // 품목정보
        }
    }

    handleClickProcessStep = (stepNum) => {
        if(stepNum === '1'){
            this.setState({processStep01:true,processStep02:false,processStep03:false,processStep04:false,processStep05:false})
        }else if(stepNum === '2'){
            this.setState({processStep01:false,processStep02:true,processStep03:false,processStep04:false,processStep05:false})
        }else if(stepNum === '3'){
            this.setState({processStep01:false,processStep02:false,processStep03:true,processStep04:false,processStep05:false})
        }else if(stepNum === '4'){
            this.setState({processStep01:false,processStep02:false,processStep03:false,processStep04:true,processStep05:false})
        }else if(stepNum === '5'){
            this.setState({processStep01:false,processStep02:false,processStep03:false,processStep04:false,processStep05:true})
        }
    }

    // 영업기회 더보기 호출
    handleClickSalesChanceMore = () => { this.setState({ salesChanceMorePanel : true }); }
    // 기회전환 호출
    handleClickSalesChanceTransForm = () => { this.setState({ salesChanceTransformPanel : true }); }
    // 발굴실패 호출
    handleClickExcavationFailed = () => { this.setState({ excavationFailedPanel : true }); }
    // 영업실패 호출
    handleClickSalesFailed = () => { this.setState({ salesFailedPanel : true }); }
    // 기회출처 호출
    handleClickOpportunitySource = () => { this.setState({ opportunitySourcePanel : true }); }
    // 품목정보 호출
    handleClickItemInfoDetails = () => { this.setState({ itemInfoDetailsPanel : true }); }

    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            salesChanceMorePanel : false,
        });
        if(state === 'salesChanceTransformPanel'){
            this.setState({ salesChanceTransformPanel : false });
        }else if(state === 'excavationFailedPanel' ){
            this.setState({ excavationFailedPanel : false });
        }else if(state === 'salesFailedPanel' ){
            this.setState({ salesFailedPanel : false });
        }else if(state === 'opportunitySourcePanel' ){
            this.setState({ opportunitySourcePanel : false });
        }else if(state === 'itemInfoDetailsPanel' ){
            this.setState({ itemInfoDetailsPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType5'
                        title='영업기회 상세'
                        handleClickBack={()=>{this.props.handleClickPanelClose('salesChanceDetailsPanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType2`}>
                        {/* 상세 헤더 */}
                        <div className="detailsHeader h-box">
                            <div className="dh-con flex-1 v-box">
                                <div className="h-box">
                                    <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                    <div className="salesStateBox">
                                        <div className="type1">영업기회</div>
                                    </div>
                                </div>
                                <div className="h-box">
                                    <div className="txt-c1">가나상사</div>
                                    <div className="line"/>
                                    <div className="txt-c2 flex-1">2021.01.12~2021.01.26</div>
                                    <div className="SalesStateTxt">D-14</div>
                                </div>
                            </div>
                            <div className="salesChanceMore" onClick={this.handleClickSalesChanceMore}/>
                        </div>
                        <div className="flex-1 scroll_y_on ">
                            {/* 기본정보 */}
                            <div className="basicContents">
                                <div className="titleUnit h-box">
                                    <div className="titleText flex-1">기본정보</div>
                                    <div className="fnBtn mr8">
                                        <span className={`arrBtn ${this.state.toggleArrow ? 'up':'down'}`} onClick={()=>{this.setState({toggleArrow:!this.state.toggleArrow})}}/>
                                    </div>
                                </div>
                                <div style={{display:this.state.toggleArrow ? '':'none'}}>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>기회명</dt>
                                            <dd>
                                                <div className="txt">Amaranth10 업셀영업 1차</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>고객사명</dt>
                                            <dd>
                                                <div className="txt">가나상사</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>고객담당자(연락처)</dt>
                                            <dd>
                                                <div className="txt">홍길동 과장</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>예상수주확률</dt>
                                            <dd>
                                                <div className="txt">70%</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>예상수주액</dt>
                                            <dd>
                                                <div className="txt">6,000,000</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>영업단계유형</dt>
                                            <dd>
                                                <div className="txt">영업기회 기본형</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>유입경로</dt>
                                            <dd>
                                                <div className="txt">마케팅 캠페인</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>캠페인선택</dt>
                                            <dd>
                                                <div className="txt">신규제품 출시 업셀 프로모션</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>품목</dt>
                                            <dd>
                                                <div className="txt">Enterprise Business Platform(EBP) 영리형 외 50건</div>
                                            </dd>
                                        </dl>
                                        <div className="fnBtn h-box">
                                            <span className="nextBtn flex-1" onClick={this.handleClickItemInfoDetails}/>
                                        </div>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>만료일자</dt>
                                            <dd>
                                                <div className="txt">2021.01.26</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>영업담당자</dt>
                                            <dd>
                                                <div className="txt">김영묵 대리</div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="viewUnit h-box">
                                        <dl className="v-box flex-1">
                                            <dt>메모</dt>
                                            <dd>
                                                <div className="textarea" style={{minHeight:'auto'}}>
                                                    기존 아이큐브 사용 고객으로 Amaranth10 신규<br/>
                                                    제품 출시에 따른 업셀영업 진행
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            {/* 영업기회 프로세스 */}
                            <div className="processContents">
                                {/* 준비 */}
                                <div className={`processBox v-box ${this.state.processStep01 ? 'on':''}`}>
                                    <div className="listBar h-box">
                                        <div className="h-box" onClick={()=>{this.handleClickProcessStep('1');}}>
                                            <div className="ico"/>
                                            <div className="tit"><span className="num">01</span> 준비</div>
                                        </div>
                                        <div className="toggleBox flex-1 h-box">
                                            <div className={`arrToggle ${this.state.arrToggle01 ? 'up':'down'}`} 
                                            onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({arrToggle01:!this.state.arrToggle01});}}/>
                                        </div>
                                    </div>
                                    <div className="listCon" style={{display:this.state.arrToggle01 ? '':'none'}}>
                                        <dl className="h-box">
                                            <dt>고객사:</dt>
                                            <dd>가나상사</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>품목:</dt>
                                            <dd>Amaranth10 CRM, Amaranth10 인사</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>예상 수주금액:</dt>
                                            <dd className="fwb">3,000,000원</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>예상 수주확률:</dt>
                                            <dd>55%</dd>
                                        </dl>
                                    </div>
                                </div>
                                {/* 제안 */}
                                <div className={`processBox v-box ${this.state.processStep02 ? 'on':''}`}>
                                    <div className="listBar h-box">
                                        <div className="h-box" onClick={()=>{this.handleClickProcessStep('2');}}>
                                            <div className="ico"/>
                                            <div className="tit"><span className="num">02</span> 제안</div>
                                        </div>
                                    </div>
                                    <div className="listCon" />
                                </div>
                                {/* 견적 */}
                                <div className={`processBox v-box ${this.state.processStep03 ? 'on':''}`}>
                                    <div className="listBar h-box">
                                        <div className="h-box" onClick={()=>{this.handleClickProcessStep('3');}}>
                                            <div className="ico"/>
                                            <div className="tit"><span className="num">03</span> 견적</div>
                                        </div>
                                        <div className="toggleBox flex-1 h-box">
                                            <div className={`arrToggle ${this.state.arrToggle03 ? 'up':'down'}`} 
                                            onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({arrToggle03:!this.state.arrToggle03});}}/>
                                        </div>
                                    </div>
                                    <div className="listCon" style={{display:this.state.arrToggle03 ? '':'none'}}>
                                        <div className="h-box">
                                            <div className="flex-1">
                                                <div className="stateBox">
                                                    <div className="type1">견적취소</div>
                                                </div>
                                            </div>
                                            <div className="fnBtn h-box">
                                                <span className="pdfBtn flex-1" />
                                                <span className="emailBtn flex-1" />
                                                <span className="faxBtn flex-1" />
                                            </div>
                                        </div>
                                        <dl className="h-box">
                                            <dt>견적번호:</dt>
                                            <dd>AM2021050701</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>견적일자:</dt>
                                            <dd>20210512</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>견적금액:</dt>
                                            <dd className="fwb">5,000,000원</dd>
                                        </dl>
                                    </div>
                                </div>
                                {/* 주문 */}
                                <div className={`processBox v-box ${this.state.processStep04 ? 'on':''}`}>
                                    <div className="listBar h-box">
                                        <div className="h-box" onClick={()=>{this.handleClickProcessStep('4');}}>
                                            <div className="ico"/>
                                            <div className="tit"><span className="num">04</span> 주문</div>
                                        </div>
                                        <div className="toggleBox flex-1 h-box">
                                            <div className={`arrToggle ${this.state.arrToggle04 ? 'up':'down'}`} 
                                            onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({arrToggle04:!this.state.arrToggle04});}}/>
                                        </div>
                                    </div>
                                    <div className="listCon" style={{display:this.state.arrToggle04 ? '':'none'}}>
                                        <div className="h-box">
                                            <div className="flex-1">
                                                <div className="stateBox">
                                                    <div className="type2">주문완료</div>
                                                </div>
                                            </div>
                                            <div className="fnBtn h-box">
                                                <span className="pdfBtn flex-1" />
                                                <span className="emailBtn flex-1" />
                                                <span className="faxBtn flex-1" />
                                            </div>
                                        </div>
                                        <dl className="h-box">
                                            <dt>주문번호:</dt>
                                            <dd>AM2021050701</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>주문일자:</dt>
                                            <dd>20210512</dd>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>주문금액:</dt>
                                            <dd className="fwb">5,000,000원</dd>
                                        </dl>
                                    </div>
                                </div>
                                {/* 마감 */}
                                <div className={`processBox v-box ${this.state.processStep05 ? 'on':''}`}>
                                    <div className="listBar h-box">
                                        <div className="h-box" onClick={()=>{this.handleClickProcessStep('5');}}>
                                            <div className="ico"/>
                                            <div className="tit"><span className="num">05</span> 마감</div>
                                        </div>
                                        <div className="toggleBox flex-1 h-box">
                                            <div className={`arrToggle ${this.state.arrToggle05 ? 'up':'down'}`} 
                                            onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({arrToggle05:!this.state.arrToggle05});}}/>
                                        </div>
                                    </div>
                                    <div className="listCon" style={{display:this.state.arrToggle05 ? '':'none'}}>
                                        <dl className="h-box">
                                            <dt>마감내용</dt>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>마감내용</dt>
                                        </dl>
                                        <dl className="h-box">
                                            <dt>마감내용</dt>
                                        </dl>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* 서브페이지 버튼들 */}
                        <div className="subPageBtn h-box animated03s fadeInUp" style={{display:this.state.processStep05 ? '':'none'}}>
                            <div className="pageBtn" onClick={this.handleClickSalesChanceTransForm}>기회전환</div>
                            <div className="pageBtn dark" onClick={this.handleClickExcavationFailed}>발굴실패</div>
                        </div>
                    </div>
                </div>

                {/* 영업기회 더보기 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.salesChanceMorePanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'salesChanceMore'} 
                        Close={this.handleClickPanelClose}
                        handleClickSalesFailed={this.handleClickSalesFailed}
                        handleClickOpportunitySource={this.handleClickOpportunitySource}
                    />
                </PanelWrap>

                {/* 기회전환 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesChanceTransformPanel} 
                >
                    <SalesChanceTransform
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 발굴실패 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.excavationFailedPanel} 
                >
                    <ExcavationFailed
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업실패 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesFailedPanel} 
                >
                    <SalesFailed 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 기회출처 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.opportunitySourcePanel} 
                >
                    <OpportunitySource 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 품목정보 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.itemInfoDetailsPanel} 
                >
                    <ItemInfoDetailsComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


