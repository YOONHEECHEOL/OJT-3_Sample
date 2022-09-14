import React, { Component, Fragment } from 'react';
import HeaderComp from '../utils/commons/HeaderComp';
import PanelWrap from '../utils/commons/PanelWrap'
import MenuSheetComp from '../utils/commons/MenuSheetComp'
import UsedItem from '../utils/unit/UsedItems'
import SalesChanceComp from '../utils/unit/SalesChanceComp'
import SalesChanceInfoDetailsComp from '../utils/unit/SalesChanceInfoDetailsComp'
import { CustomerEdit } from '../customer/CustomerAdd'
import { CustomerBasicInfo } from '../utils/unit/DetailsBasicInfo';
import { DetailsRelatedInfo } from '../utils/unit/DetailsRelatedInfo';
import SalesTimelineComp from '../sales/SalesTimelineComp';
import { FilterComp03 } from '../utils/commons/FilterComp';
import EstimateRequestDetail from '../utils/unit/EstimateRequestDetail';
import OrderRequestDetail from '../utils/unit/OrderRequestDetail';
import SalesActivityDetailsComp from '../utils/unit/SalesActivityDetailsComp';
import PromotionCheckComp from '../utils/unit/PromotionCheckComp';

// 고객사 상세
export default class CustomerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 고객사 상세 탭
            tabStateOpen01: true,
            tabStateOpen02: false,
            tabStateOpen03: false,

            // empty data
            timelineEmpty: false,

            // 활동타입
            salesActivityType: '',

            // 패널 모드
            customerEditPanel            : false,          // 고객사 수정 호출
            customerMorePanel            : false,          // 고객사 더보기 호출
            usedItemPanel                : false,          // 사용중인 품목 호출
            salesChancePanel             : false,          // 영업기회 리스트 호출
            salesChanceInfoDetailsPanel  : false,          // 영업기회정보 상세 호출
            timelineFilterPanel          : false,          // 타임라인 필터
            timelineMoreEstimatePanel    : false,          // 타임라인 더보기 (견적)
            timelineMoreOrderPanel       : false,          // 타임라인 더보기 (주문)
            estimateRequestDetailPanel   : false,          // 견적요청 상세정보
            orderRequestDetailPanel      : false,          // 주문요청 상세정보
            salesActivityDetailsPanel    : false,          // 활동일정 상세
            promotionCheckPanel          : false,          // 프로모션 확인
        }
    }

    // 탭
    handleDetailsTabClick = (type) => {
        this.setState({ 
            tabStateOpen01: false, tabStateOpen02: false, tabStateOpen03: false, 
        })
        
        if(type === '1'){
            this.setState({ tabStateOpen01: true})
        }else if(type === '2'){
            this.setState({ tabStateOpen02: true})
        }else if(type === '3'){
            this.setState({ tabStateOpen03: true})
        }
    }

    // 고객사 수정 호출
    handleClickCustomerEdit = () => { this.setState({ customerEditPanel : true });}
    // 고객사 더보기 호출
    handleClickCustomerMore = () => { this.setState({ customerMorePanel : true });}
    // 사용중인 품목 호출
    handleClickUsedItem = () => { this.setState({ usedItemPanel : true });}
    // 영업기회 리스트 호출
    handleClickSalesChance = () => { this.setState({ salesChancePanel : true });}
    // 영업기회정보 상세 호출
    handleClickSalesChanceInfoDetails = () => { this.setState({ salesChanceInfoDetailsPanel : true });}
    // 타임라인 필터 호출
    handleClickTimelineFilter = () => { this.setState({ timelineFilterPanel : true });}
    // 타임라인 더보기 견적 호출
    handleClickTimelineMoreEstimate = () => { this.setState({ timelineMoreEstimatePanel : true });}
    // 타임라인 더보기 주문 호출
    handleClickTimelineMoreOrder = () => { this.setState({ timelineMoreOrderPanel : true });}
    // 견적요청 상세정보 호출
    handleClickEstimateRequestDetail = () => { this.setState({ estimateRequestDetailPanel : true });}
    // 주문요청 상세정보 호출
    handleClickOrderRequestDetail = () => { this.setState({ orderRequestDetailPanel : true });}
    // 프로모션 확인 호출
    handleClickPromotionCheck = () => { this.setState({ promotionCheckPanel : true });}

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
            customerMorePanel : false,
            timelineFilterPanel : false,
            timelineMoreEstimatePanel : false,
            timelineMoreOrderPanel : false,
        });

        if(state === 'customerEditPanel' ){
            this.setState({ customerEditPanel : false });
        }else if(state === 'usedItemPanel' ){
            this.setState({ usedItemPanel : false });
        }else if(state === 'salesChancePanel' ){
            this.setState({ salesChancePanel : false });
        }else if(state === 'salesChanceInfoDetailsPanel' ){
            this.setState({ salesChanceInfoDetailsPanel : false });
        }else if(state === 'estimateRequestDetailPanel' ){
            this.setState({ estimateRequestDetailPanel : false });
        }else if(state === 'orderRequestDetailPanel' ){
            this.setState({ orderRequestDetailPanel : false });
        }else if(state === 'salesActivityDetailsPanel' ){
            this.setState({ salesActivityDetailsPanel : false });
        }else if(state === 'promotionCheckPanel' ){
            this.setState({ promotionCheckPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType4'
                        title='고객사 상세'
                        className="btnNone"  
                        handleClickBack={this.props.handleClickBack}
                        handleClickCustomerEdit={this.handleClickCustomerEdit}
                        handleClickCustomerMore={this.handleClickCustomerMore} 
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on ${this.state.tabStateOpen02 ? 'bgType1':'bgType2'}`}>
                        {/* 상세 헤더 */}
                        <div className="detailsHeader h-box posi_stk" style={{top:'0px'}}>
                            <div className="dh-con flex-1 v-box">
                                <div className="h-box">
                                    <div className="title flex-1 h-box">아임사이언스</div>
                                    <div className="customerStateBox">
                                        <div className="type2">거래중</div>
                                    </div>
                                </div>
                                <div className="h-box">
                                    <div className="txt-c1">101-12-44885</div>
                                    <div className="line"/>
                                    <div className="flex-1">
                                        <span className="link" onClick={this.handleClickUsedItem}>iCUBE 회계 외 3개 사용중</span>
                                    </div>
                                    <div className="customerStateTxt">
                                        <div className="type2">영업중</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 상세 탭 */}
                        <div className="detailsTab posi_stk" style={{top:'64px'}}>
                            <div className="detailsTabMenu">
                                <ul className="flex-1 h-box">
                                    <li className={`${this.state.tabStateOpen01 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('1')}>
                                        <span className="txt">기본정보</span>
                                    </li>
                                    <li className={`${this.state.tabStateOpen02 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('2')}>
                                        <span className="txt">관련정보</span>
                                    </li>
                                    <li className={`${this.state.tabStateOpen03 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('3')}>
                                        <span className="txt">활동 타임라인</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* 기본정보 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="basicContents" style={{display:this.state.tabStateOpen01 ? '':'none'}}>
                            <CustomerBasicInfo />
                        </div>
                        {/* 관련정보 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="relatedContents" style={{display:this.state.tabStateOpen02 ? '':'none'}}>
                            <DetailsRelatedInfo 
                                handleClickSalesChance={this.handleClickSalesChance}
                            />
                        </div>
                        {/* 활동 타임라인 탭 ------------------------------------------------------------------------------------------------*/}
                        <div className="timelineContents v-box" style={{display:this.state.tabStateOpen03 ? '':'none'}}>
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

                {/* 고객사-더보기 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.customerMorePanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerMore'} />
                </PanelWrap>

                {/* 고객사-수정 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.customerEditPanel} 
                >
                    <CustomerEdit 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 고객사-사용중인 품목 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.usedItemPanel} 
                >
                    <UsedItem 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 고객사-영업기회 리스트 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesChancePanel} 
                >
                    <SalesChanceComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleClickSalesChanceInfoDetails={this.handleClickSalesChanceInfoDetails}
                    />
                </PanelWrap>

                {/* 고객사-영업기회정보 상세 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.salesChanceInfoDetailsPanel} 
                >
                    <SalesChanceInfoDetailsComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 영업활동-타임라인 필터 */}
                <PanelWrap 
                    Type='drawer' 
                    Open={this.state.timelineFilterPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <FilterComp03 handleClickPanelClose={this.handleClickPanelClose}/>
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


