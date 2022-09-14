import React, { Component, Fragment } from 'react';
import HeaderComp from '../utils/commons/HeaderComp';
import SalesFn from './SalesFn';
import SalesListComp from './SalesListComp';
import PanelWrap from '../utils/commons/PanelWrap'
import PopupWrap from '../utils/commons/PopupWrap'
import { FilterComp02 } from '../utils/commons/FilterComp';
import { SalesChancePop01, SalesChancePop02, SalesChancePop03 } from '../utils/popup/SalesChancePop';
import ListLoading from '../utils/commons/ListLoading';

// 영업활동 메인
export default class SalesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 패널 모드
            salesFilterPanel : false,          // 리스트 필터
            // 팝업 모드
            chanceAssignmentPopup            : false,       // 영업기회 할당 팝업
            campaignPromotionAssignmentPopup : false,       // 캠페인 프로모션할당 팝업
            promotionAssignmentPopup         : false,       // 영업기회 프로모션할당 팝업
        }
    }

    // 리스트 필터 호출
    handleClickListFilter = () => { this.setState({ salesFilterPanel : true });}
    // 영업기회 할당 팝업 호출
    handleClickChanceAssignment = () => { this.setState({ chanceAssignmentPopup : true });}
    // 캠페인 프로모션할당 팝업 호출
    handleClickCampaignPromotionAssignment = () => { this.setState({ campaignPromotionAssignmentPopup : true });}
    // 영업기회 프로모션할당 팝업 호출
    handleClickPromotionAssignment = () => { this.setState({ promotionAssignmentPopup : true });}

    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            salesFilterPanel : false 
        });
    }
    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            chanceAssignmentPopup : false, 
            campaignPromotionAssignmentPopup : false, 
            promotionAssignmentPopup : false 
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerDefault'
                        title='영업활동'
                        handleClickBack={this.props.handleClickBack}
                        handleClickLnb={this.props.handleClickLnb} 
                        handleClickSearch={()=>{this.props.handleClickSearch('3');}}
                    />
                    <div className="viewBody bgType1 flex-1 v-box">
                        {/* 리스트 기능 */}
                        <SalesFn 
                            handleClickListFilter={this.handleClickListFilter}
                        />
                        {/* 리스트 */}
                        <SalesListComp 
                            DeviceMode={this.props.DeviceMode}
                            updateDimensions={this.props.updateDimensions}
                            handleClickModeDV2D={this.props.handleClickModeDV2D}
                            handleClickModePN2D={this.props.handleClickModePN2D}
                            handleClickChanceAssignment={this.handleClickChanceAssignment}
                            handleClickCampaignPromotionAssignment={this.handleClickCampaignPromotionAssignment}
                            handleClickPromotionAssignment={this.handleClickPromotionAssignment}
                            handleClickCustomerDiscoveryAdd={this.props.handleClickCustomerDiscoveryAdd}
                            handleClickSalesChanceAdd={this.props.handleClickSalesChanceAdd}
                        />
                        {/* 리스트 로딩전에 보여주세요 
                            <ListLoading />
                        */}
                    </div>
                </div>

                {/* 리스트-필터 */}
                <PanelWrap 
                    Type='drawer' 
                    Open={this.state.salesFilterPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <FilterComp02 handleClickPanelClose={this.handleClickPanelClose}/>
                </PanelWrap>

                {/* 기회할당 팝업 */}
                <PopupWrap
                    Open={this.state.chanceAssignmentPopup} 
                    Close={this.handleClickPopupClose}
                >
                    <SalesChancePop01 
                        handleClickPopupClose={this.handleClickPopupClose}
                        handleClickSalesChanceGiveUp={this.props.handleClickSalesChanceGiveUp}
                    />
                </PopupWrap>

                {/* 프로모션할당 팝업 */}
                <PopupWrap
                    Open={this.state.promotionAssignmentPopup} 
                    Close={this.handleClickPopupClose}
                >
                    <SalesChancePop02 
                        handleClickPopupClose={this.handleClickPopupClose}
                    />
                </PopupWrap>

                {/* 캠페인 프로모션할당 팝업 */}
                <PopupWrap
                    Open={this.state.campaignPromotionAssignmentPopup} 
                    Close={this.handleClickPopupClose}
                >
                    <SalesChancePop03 
                        handleClickPopupClose={this.handleClickPopupClose}
                        handleClickModeDV2D={this.props.handleClickModeDV2D}
                    />
                </PopupWrap>
            </Fragment>
        );
    }
}

