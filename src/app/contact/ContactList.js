import React, { Component, Fragment } from 'react';
import HeaderComp from '../utils/commons/HeaderComp';
import ContactFn from './ContactFn'
import ContactListComp from './ContactListComp'
import PanelWrap from '../utils/commons/PanelWrap'
import { FilterComp01 } from '../utils/commons/FilterComp';
import ListLoading from '../utils/commons/ListLoading';

// 연락처 메인
export default class ContactList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 패널 모드
            contactFilterPanel : false,          // 리스트 필터
        }
    }

    // 리스트 필터 호출
    handleClickListFilter = () => { this.setState({ contactFilterPanel : true });}

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            contactFilterPanel : false 
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerDefault'
                        title='연락처'
                        handleClickBack={this.props.handleClickBack}
                        handleClickLnb={this.props.handleClickLnb}
                        handleClickSearch={()=>{this.props.handleClickSearch('2');}}
                    />
                    <div className="viewBody bgType1 flex-1 v-box">
                        {/* 리스트 기능 */}
                        <ContactFn 
                            handleClickListFilter={this.handleClickListFilter}
                        />
                        {/* 리스트 */}
                        <ContactListComp 
                            DeviceMode={this.props.DeviceMode}
                            updateDimensions={this.props.updateDimensions}
                            handleClickModeDV2D={this.props.handleClickModeDV2D}
                            handleClickContactAdd={this.props.handleClickContactAdd}
                        />
                        {/* 리스트 로딩전에 보여주세요 
                            <ListLoading />
                        */}
                    </div>
                </div>

                {/* 리스트-필터 */}
                <PanelWrap 
                    Type='drawer' 
                    Open={this.state.contactFilterPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <FilterComp01 handleClickPanelClose={this.handleClickPanelClose}/>
                </PanelWrap>
            </Fragment>
        );
    }
}


