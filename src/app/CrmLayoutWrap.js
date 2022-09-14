import React, { Component, Fragment } from 'react';
import '../www/css/common.scss';
import '../www/css/animate.scss';
import '../www/css/crm.scss';

// 레이아웃 컴포넌트
import Loading from './utils/commons/Loading';
import PanelWrap from './utils/commons/PanelWrap'
import LnbComp from './utils/commons/LnbComp'
import CustomerLayout from './CustomerLayout';
import ContactLayout from './ContactLayout';
import SalesLayout from './SalesLayout';

// 레이아웃
export default class CrmLayoutWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 로딩 
            loading : false, 

            // 레이아웃별 상태
            contactLayout  : false,
            customerLayout : false,
            salesLayout    : true,

            // 검색타입 (1:고객사, 2:연락처, 3:영업활동)
            searchType : '1',

            // 패널 모드
            lnbPanel    : false,       // LNB 호출
            searchPanel : false,       // 공통검색 호출
        }
    }

    // 연락처 레이아웃 호출
    handleContactLayoutCall = (type) => {
        this.setState({
            contactLayout  : true,
            customerLayout : false,
            salesLayout    : false,
        });
    }
    // 고객사 레이아웃 호출
    handleCustomerLayoutCall = (type) => {
        this.setState({
            contactLayout  : false,
            customerLayout : true,
            salesLayout    : false,
        });
    }
    // 영업활동 레이아웃 호출
    handleSalesLayoutCall = (type) => {
        this.setState({
            contactLayout  : false,
            customerLayout : false,
            salesLayout    : true,
        });
    }

    // LNB 호출
    handleClickLnb = () => { this.setState({ lnbPanel : true }); }
    // 공통검색 호출
    handleClickSearch = (searchType) => { 
        this.setState({ searchPanel : true }); 
        if(searchType === '1'){
            this.setState({ searchType : '1' }); 
        }else if(searchType === '2'){
            this.setState({ searchType : '2' }); 
        }else if(searchType === '3'){
            this.setState({ searchType : '3' }); 
        }
    }

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            lnbPanel : false, 
            searchPanel : false, 
        });
    }

    render() {
        return (
            <Fragment>
                {/* :연락처 레이아웃: --------------------------------------------------*/}
                <div className="mobileWrap v-box" style={{display:this.state.contactLayout ? '':'none'}}>
                    <ContactLayout 
                        searchPanel={this.state.searchPanel}
                        searchType={this.state.searchType}
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleClickSearch={this.handleClickSearch}
                        handleClickLnb={this.handleClickLnb}
                    />
                </div>
                {/* :고객사 레이아웃: --------------------------------------------------*/}
                <div className="mobileWrap v-box" style={{display:this.state.customerLayout ? '':'none'}}>
                    <CustomerLayout 
                        searchPanel={this.state.searchPanel}
                        searchType={this.state.searchType}
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleClickSearch={this.handleClickSearch}
                        handleClickLnb={this.handleClickLnb}
                    />
                </div>
                {/* :영업활동 레이아웃: --------------------------------------------------*/}
                <div className="mobileWrap v-box" style={{display:this.state.salesLayout ? '':'none'}}>
                    <SalesLayout 
                        searchPanel={this.state.searchPanel}
                        searchType={this.state.searchType}
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleClickSearch={this.handleClickSearch}
                        handleClickLnb={this.handleClickLnb}
                    />
                </div>

                {/* 공통 로딩 */}
                <Loading visible={this.state.loading}/>

                {/* LNB */}
                <PanelWrap 
                    Type='lnb' 
                    Open={this.state.lnbPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <LnbComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleContactLayoutCall={this.handleContactLayoutCall}
                        handleCustomerLayoutCall={this.handleCustomerLayoutCall}
                        handleSalesLayoutCall={this.handleSalesLayoutCall}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


