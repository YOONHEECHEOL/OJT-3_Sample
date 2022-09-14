import React, { Component, Fragment } from 'react';
import HeaderComp from '../utils/commons/HeaderComp';
import CustomerFn from './CustomerFn';
import CustomerListComp from './CustomerListComp';
import PanelWrap from '../utils/commons/PanelWrap'
import { FilterComp01 } from '../utils/commons/FilterComp';
import ListLoading from '../utils/commons/ListLoading';

// 고객사 메인
export default class CustomerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 패널 모드
            customerFilterPanel : false,          // 리스트 필터
        }
    }

    // 리스트 필터 호출
    handleClickListFilter = () => { this.setState({ customerFilterPanel : true });}

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            customerFilterPanel : false 
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerDefault'
                        title='고객사'
                        handleClickBack={this.props.handleClickBack}
                        handleClickLnb={this.props.handleClickLnb}
                        handleClickSearch={()=>{this.props.handleClickSearch('1');}}
                    />
                    <div className="viewBody bgType1 flex-1 v-box">
                        {/* 리스트 기능 */}
                        <CustomerFn 
                            handleClickListFilter={this.handleClickListFilter}
                        />
                        {/* 리스트 */}
                        <CustomerListComp
                            DeviceMode={this.props.DeviceMode}
                            updateDimensions={this.props.updateDimensions}
                            handleClickModeDV2D={this.props.handleClickModeDV2D}
                            handleClickCustomerAdd={this.props.handleClickCustomerAdd}
                        />

                        {/* 리스트 로딩전에 보여주세요 
                            <ListLoading />
                        */}
                    </div>
                </div>

                {/* 리스트-필터 */}
                <PanelWrap 
                    Type='drawer' 
                    Open={this.state.customerFilterPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <FilterComp01 handleClickPanelClose={this.handleClickPanelClose}/>
                </PanelWrap>
            </Fragment>
        );
    }
}


