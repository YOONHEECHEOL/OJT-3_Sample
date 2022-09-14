import React, { Component, Fragment } from 'react';
import ContactList from './contact/ContactList'
import ContactDetails from './contact/ContactDetails';
import PanelWrap from './utils/commons/PanelWrap';
import {ContactAdd} from './contact/ContactAdd'
import TotalSearchComp from './utils/commons/TotalSearchComp';

// 연락처 레이아웃
export default class ContactLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 사용자 화면에 따른 상태값
            DeviceWidth : window.innerWidth , // 기기 가로사이즈 체크
            DeviceMode : null ,               // 기기 모드 (Mobile/Tablet)

            // 분할 모드
            DV1D : true ,  // contents 1단 (폰)
            DV2D : false , // contents 2단 (태블릿)
            PN2D : false , // contents 2단 (패널)

            // 패널 모드
            contactAddPanel : false,          // 연락처등록 호출
        }
    }

    // 사용자 화면의 사이즈 업데이트 
    updateDimensions = () => {
        this.setState({ 
            DeviceMode : window.innerWidth  < 767 ? 'Mobile':'Tablet',
            DeviceWidth: window.innerWidth,
        });
    }
    // Add event listener
    componentDidMount() {
        window.addEventListener("load", this.updateDimensions);
        window.addEventListener("resize", this.updateDimensions);
    }
    // Remove event listener
    componentWillUnmount() {
        window.removeEventListener("load", this.updateDimensions);
        window.removeEventListener("resize", this.updateDimensions);
    }

    // 헤더 뒤로가기
    handleClickBack = () => {
        this.setState({ 
            DV1D : true , DV2D : false, PN2D : false
        })
    }
    // 1단모드
    handleClickModeDV1D = () => {
        this.setState({ 
            DV1D : true , DV2D : false, PN2D : false
        })
    }
    // 2단모드
    handleClickModeDV2D = () => {
        this.setState({ 
            DV1D : false , DV2D : true, PN2D : false
        })
    }
    // 패널모드
    handleClickModePN2D = () => {
        this.setState({ 
            DV1D : false , DV2D : false, PN2D : true
        })
    }

    // 연락처등록 호출
    handleClickContactAdd = () => { this.setState({ contactAddPanel : true }); this.handleClickModePN2D(); this.updateDimensions(); }
    
    // 팝업 종료
    handleClickPanelClose = (state) => {
        if(state === 'contactAddPanel' ){
            this.setState({ contactAddPanel : false });
            this.handleClickModeDV1D();
        }
    }

    render() {
        return (
            <Fragment>
                {/* :공통 레이아웃: --------------------------------------------------*/}
                <div className={`flex-1 v-box ${this.state.DeviceMode}`}>
                    {/* 컨텐츠 */}
                    <div className={`contents flex-1 h-box ${this.state.DV1D ? 'DV1D':'' || this.state.DV2D ? 'DV2D':'' || this.state.PN2D ? 'PN2D':''}`}>
                        {/* 1단모드(고정) */}
                        <div className={`DV1DWrap v-box`}>
                            {/* 연락처-리스트 */}
                            <ContactList 
                                handleClickSearch={this.props.handleClickSearch}
                                handleClickBack={this.handleClickBack} 
                                DeviceMode={this.state.DeviceMode}
                                updateDimensions={this.updateDimensions}
                                handleClickLnb={this.props.handleClickLnb}
                                handleClickModeDV2D={this.handleClickModeDV2D}
                                handleClickContactAdd={this.handleClickContactAdd}
                            />
                            {/* 공통검색 */}
                            <PanelWrap 
                                Type='sub' 
                                Open={this.props.searchPanel} 
                                Close={this.props.handleClickPanelClose}
                            >
                                <TotalSearchComp 
                                    searchType={this.props.searchType}
                                    handleClickPanelClose={this.props.handleClickPanelClose}
                                />
                            </PanelWrap>
                        </div>
                        {/* 2단모드(가변) */}
                        <div className={`DV2DWrap animated03s fadeInRight v-box flex-1`}>
                            {/* 연락처-상세 */}
                            <ContactDetails 
                                handleClickBack={this.handleClickBack}
                            />
                        </div>
                        {/* 패널모드(가변) */}
                        <div className={`PN2DWrap animated03s fadeInRight v-box flex-1`}>
                            {/* 연락처-등록 */}
                            <PanelWrap 
                                Type='sub' 
                                Open={this.state.contactAddPanel} 
                                Close={this.handleClickPanelClose}
                            >
                                <ContactAdd 
                                    handleClickPanelClose={this.handleClickPanelClose}
                                />
                            </PanelWrap>
                        </div>
                    </div>
                </div>
            </Fragment>
            
        );
    }
}


