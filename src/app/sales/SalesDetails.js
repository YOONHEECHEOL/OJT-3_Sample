import React, { Component, Fragment } from 'react';
import HeaderComp from '../utils/commons/HeaderComp';
import PanelWrap from '../utils/commons/PanelWrap';
import { FilterComp03 } from '../utils/commons/FilterComp';
import MenuSheetComp from '../utils/commons/MenuSheetComp';
import SalesTimelineComp from './SalesTimelineComp';
import SalesChanceDetailsComp from '../utils/unit/SalesChanceDetailsComp';
import EstimateAdd from '../utils/unit/EstimateAdd';
import EstimateRequest from '../utils/unit/EstimateRequest';
import OrderAdd from '../utils/unit/OrderAdd';
import OrderRequest from '../utils/unit/OrderRequest';
import EstimateRequestDetail from '../utils/unit/EstimateRequestDetail';
import OrderRequestDetail from '../utils/unit/OrderRequestDetail';
import SalesActivityAdd from '../utils/unit/SalesActivityAdd';
import SalesActivityDetailsComp from '../utils/unit/SalesActivityDetailsComp';
import PromotionCheckComp from '../utils/unit/PromotionCheckComp';

// 영업활동 상세
export default class SalesDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // empty data
            timelineEmpty: false,

            // 활동타입
            salesActivityType: '',

            // 패널 모드
            timelineFilterPanel          : false,          // 타임라인 필터
            salesChanceDetailsPanel      : false,          // 영업기회 상세
            timelineMoreEstimatePanel    : false,          // 타임라인 더보기 (견적)
            timelineMoreOrderPanel       : false,          // 타임라인 더보기 (주문)
            estimateSheetSelectPanel     : false,          // 견적등록 셀렉트
            orderSheetSelectPanel        : false,          // 주문등록 셀렉트
            estimateAddPanel             : false,          // 견적등록
            estimateRequestPanel         : false,          // 견적요청
            orderAddPanel                : false,          // 주문등록
            orderRequestPanel            : false,          // 주문요청
            estimateRequestDetailPanel   : false,          // 견적요청 상세정보
            orderRequestDetailPanel      : false,          // 주문요청 상세정보
            salesActivityAddPanel        : false,          // 활동일정 등록
            salesActivityDetailsPanel    : false,          // 활동일정 상세
            promotionCheckPanel          : false,          // 프로모션 확인

            // 플로팅버튼
            addMore: false,
        }
    }

    // 타임라인 필터 호출
    handleClickTimelineFilter = () => { this.setState({ timelineFilterPanel : true });}
    // 영업기회 상세 호출
    handleClickSalesChanceDetails = () => { this.setState({ salesChanceDetailsPanel : true });}
    // 타임라인 더보기 견적 호출
    handleClickTimelineMoreEstimate = () => { this.setState({ timelineMoreEstimatePanel : true });}
    // 타임라인 더보기 주문 호출
    handleClickTimelineMoreOrder = () => { this.setState({ timelineMoreOrderPanel : true });}
    // 견적등록 셀렉트 호출
    handleClickEstimateSheetSelect = () => { this.setState({ estimateSheetSelectPanel : true });}
    // 주문등록 셀렉트 호출
    handleClickOrderSheetSelect = () => { this.setState({ orderSheetSelectPanel : true });}
    // 견적등록 호출
    handleClickEstimateAdd = () => { this.setState({ estimateAddPanel : true });}
    // 견적요청 호출
    handleClickEstimateRequest = () => { this.setState({ estimateRequestPanel : true });}
    // 주문등록 호출
    handleClickOrderAdd = () => { this.setState({ orderAddPanel : true });}
    // 주문요청 호출
    handleClickOrderRequest = () => { this.setState({ orderRequestPanel : true });}
    // 견적요청 상세정보 호출
    handleClickEstimateRequestDetail = () => { this.setState({ estimateRequestDetailPanel : true });}
    // 주문요청 상세정보 호출
    handleClickOrderRequestDetail = () => { this.setState({ orderRequestDetailPanel : true });}
    // 프로모션 확인 호출
    handleClickPromotionCheck = () => { this.setState({ promotionCheckPanel : true });}

    // 활동일정 등록 호출
    handleClickSalesActivityAdd = (type) => { 
        this.setState({ salesActivityAddPanel: true, salesActivityType: '' });

        if(type === 'phone'){
            this.setState({ salesActivityType : 'phone' });
        }else if(type === 'fax'){
            this.setState({ salesActivityType : 'fax' });
        }else if(type === 'mail'){
            this.setState({ salesActivityType : 'mail' });
        }else if(type === 'visit'){
            this.setState({ salesActivityType : 'visit' });
        }
    }
    // 활동일정 상세 호출
    handleClickSalesActivityDetails = (type) => { 
        this.setState({ salesActivityDetailsPanel: true, salesActivityType: '' });

        if(type === 'phone'){
            this.setState({ salesActivityType : 'phone' });
        }else if(type === 'fax'){
            this.setState({ salesActivityType : 'fax' });
        }else if(type === 'mail'){
            this.setState({ salesActivityType : 'mail' });
        }else if(type === 'visit'){
            this.setState({ salesActivityType : 'visit' });
        }
    }

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            timelineFilterPanel : false, 
            timelineMoreEstimatePanel : false,
            timelineMoreOrderPanel : false,
            estimateSheetSelectPanel : false, 
            orderSheetSelectPanel : false, 
        });

        if(state === 'salesChanceDetailsPanel' ){
            this.setState({ salesChanceDetailsPanel : false });
        }else if(state === 'estimateAddPanel' ){
            this.setState({ estimateAddPanel : false });
        }else if(state === 'estimateRequestPanel' ){
            this.setState({ estimateRequestPanel : false });
        }else if(state === 'orderAddPanel' ){
            this.setState({ orderAddPanel : false });
        }else if(state === 'orderRequestPanel' ){
            this.setState({ orderRequestPanel : false });
        }else if(state === 'estimateRequestDetailPanel' ){
            this.setState({ estimateRequestDetailPanel : false });
        }else if(state === 'orderRequestDetailPanel' ){
            this.setState({ orderRequestDetailPanel : false });
        }else if(state === 'salesActivityAddPanel' ){
            this.setState({ salesActivityAddPanel : false });
        }else if(state === 'salesActivityDetailsPanel' ){
            this.setState({ salesActivityDetailsPanel : false });
        }else if(state === 'promotionCheckPanel' ){
            this.setState({ promotionCheckPanel : false });
        }
    }

    // 플로팅버튼 토글
    handleChangeFloatingBtn = () => { 
        if (!this.state.addMore) {
            this.setState({ addMore: true });
        } else {
            this.setState({ addMore: false });
        }
    }

    // 플로팅버튼 닫기
    handleCloseFloatingBtn = () => { 
        this.setState({ addMore: false });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType7'
                        title='영업활동 상세'
                        className="btnNone"  
                        handleClickBack={this.props.handleClickBack}
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
                            <div className="salesChanceArrow" onClick={this.handleClickSalesChanceDetails}/>
                        </div>
                        {/* 활동 타임라인 ------------------------------------------------------------------------------------------------*/}
                        <div className="timelineContents v-box">
                            <div className="flex-1 v-box" style={{display:this.state.timelineEmpty ? 'none':''}}>
                                <SalesTimelineComp 
                                    handleClickTimelineFilter={this.handleClickTimelineFilter}
                                    handleClickTimelineMoreEstimate={this.handleClickTimelineMoreEstimate}
                                    handleClickTimelineMoreOrder={this.handleClickTimelineMoreOrder}
                                    handleClickSalesActivityDetails={this.handleClickSalesActivityDetails}
                                    handleClickEstimateRequestDetail={this.handleClickEstimateRequestDetail}
                                    handleClickOrderRequestDetail={this.handleClickOrderRequestDetail}
                                    handleClickPromotionCheck={this.handleClickPromotionCheck}
                                />
                            </div>

                            {/* 데이터 없을때 */}
                            <div className="emptyData flex-1 v-box" style={{display:this.state.timelineEmpty ? '':'none'}}>
                                <div className="noList">활동정보가 없습니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 플로팅 버튼 */}
                <div className="floatingBtnBox">
                    <div className="detailBtns">
                        <span className={`penBtn ${this.state.addMore ? 'open':''}`} onClick={this.handleChangeFloatingBtn}/>
                        <span className="phoneBtn slideInUp btnIdx_1" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickSalesActivityAdd('phone');}}><span>전화</span></span>
                        <span className="faxBtn slideInUp btnIdx_2" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickSalesActivityAdd('fax');}}><span>팩스</span></span>
                        <span className="mailBtn slideInUp btnIdx_3" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickSalesActivityAdd('mail');}}><span>메일</span></span>
                        <span className="brifBtn slideInUp btnIdx_4" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickSalesActivityAdd('visit');}}><span>방문</span></span>
                        <span className="calBtn slideInUp btnIdx_5" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickEstimateSheetSelect();}}><span>견적</span></span>
                        <span className="userPenBtn slideInUp btnIdx_6" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.handleClickOrderSheetSelect();}}><span>주문</span></span>
                    </div>
                    <div className="dim animated03s fadeIn" style={{display:this.state.addMore ? '':'none'}} onClick={this.handleCloseFloatingBtn}/>
                </div>
                {/* todo more layer */}

                {/* 영업활동-타임라인 필터 */}
                <PanelWrap 
                    Type='drawer' 
                    Open={this.state.timelineFilterPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <FilterComp03 handleClickPanelClose={this.handleClickPanelClose}/>
                </PanelWrap>

                {/* 영업활동-영업기회정보 상세 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesChanceDetailsPanel} 
                >
                    <SalesChanceDetailsComp
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-타임라인 더보기 견적 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.timelineMoreEstimatePanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'timelineMoreEstimate'}
                        Close={this.handleClickPanelClose}
                        handleClickEstimateRequestDetail={this.handleClickEstimateRequestDetail}
                    />
                </PanelWrap>

                {/* 영업활동-타임라인 더보기 주문 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.timelineMoreOrderPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp
                        type={'timelineMoreOrder'} 
                        Close={this.handleClickPanelClose}
                        handleClickOrderRequestDetail={this.handleClickOrderRequestDetail}
                    />
                </PanelWrap>

                {/* 타임라인-견적요청 상세정보 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.estimateRequestDetailPanel} 
                >
                    <EstimateRequestDetail 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 타임라인-주문요청 상세정보 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.orderRequestDetailPanel} 
                >
                    <OrderRequestDetail 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-견적등록 셀렉트 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.estimateSheetSelectPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'estimateSheetSelect'} 
                        Close={this.handleClickPanelClose}
                        handleClickEstimateAdd={this.handleClickEstimateAdd}
                        handleClickEstimateRequest={this.handleClickEstimateRequest}
                    />
                </PanelWrap>

                {/* 영업활동-주문등록 셀렉트 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.orderSheetSelectPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'orderSheetSelect'} 
                        Close={this.handleClickPanelClose}
                        handleClickOrderAdd={this.handleClickOrderAdd}
                        handleClickOrderRequest={this.handleClickOrderRequest}
                    />
                </PanelWrap>

                {/* 영업활동-견적등록 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.estimateAddPanel} 
                >
                    <EstimateAdd
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-견적요청 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.estimateRequestPanel} 
                >
                    <EstimateRequest
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-주문등록 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.orderAddPanel} 
                >
                    <OrderAdd
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-주문요청 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.orderRequestPanel} 
                >
                    <OrderRequest
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-활동일정 등록 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesActivityAddPanel} 
                >
                    <SalesActivityAdd
                        handleClickPanelClose={this.handleClickPanelClose}
                        salesActivityType={this.state.salesActivityType}
                    />
                </PanelWrap>

                {/* 영업활동-활동일정 상세 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesActivityDetailsPanel} 
                >
                    <SalesActivityDetailsComp
                        handleClickPanelClose={this.handleClickPanelClose}
                        salesActivityType={this.state.salesActivityType}
                    />
                </PanelWrap>

                {/* 프로모션 확인 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.promotionCheckPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <PromotionCheckComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


