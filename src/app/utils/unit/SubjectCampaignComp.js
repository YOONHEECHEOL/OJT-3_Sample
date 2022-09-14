import React, { Component, Fragment } from 'react';
import PanelWrap from '../commons/PanelWrap';
import SubjectCampaignDetailsComp from './SubjectCampaignDetailsComp';
import SubjectCampaignListComp from './SubjectCampaignListComp';

// 품목 캠페인 불러오기
export default class SubjectCampaignComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 검색
            inputFocus : false,
            searchInput:'',

            // 패널 모드
            subjectCampaignDetailsCompPanel      : false,          // 캠페인 상세품목
        }
    }

    // 가격표 상세품목 호출
    handleClickSubjectCampaignDetailsComp = () => { this.setState({ subjectCampaignDetailsCompPanel : true });}

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            subjectCampaignDetailsCompPanel : false, 
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('subjectCampaignCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">캠페인 불러오기</span>
                        </div>
                    </div>
                    {/* 검색영역 */}
                    <div className="searchBoxWrap h-box">
                        <div className="searchBox h-box flex-1">
                            <div className="ico"/>
                            <input type="text" ref={this.searchRef} className="inputField flex-1" value={this.state.searchInput} placeholder='검색어를 입력해주세요.' onChange={(e) => this.setState({ searchInput: e.target.value })} onFocus={(e) => this.setState({inputFocus:true})} onBlur={(e) => this.setState({inputFocus:false})}/>
                            <div className="clearBtn" style={{display:this.state.searchInput === '' ? 'none':''}} onClick={()=>{this.setState({searchInput:''})}}/>
                        </div>
                        <div className="cancelBtn" style={{display:this.state.inputFocus ? '':'none'}}>취소</div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        {/* 가격표 리스트 */}
                        <SubjectCampaignListComp />

                        {/* 버튼영역 */}
                        <div className="btnBox h-box" style={{display:this.state.emptyData ? 'none' : ''}}>
                            <div className="btn flex-1" onClick={this.handleClickSubjectCampaignDetailsComp}>상세보기</div>
                            <div className="btn flex-1 blue">적용하기</div>
                        </div>

                    </div>
                </div>

                {/* 캠페인 상세품목 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.subjectCampaignDetailsCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SubjectCampaignDetailsComp
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


