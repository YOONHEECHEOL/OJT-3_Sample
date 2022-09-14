import React, { Component, Fragment } from 'react';
import PanelWrap from '../commons/PanelWrap';
import SubjectPriceDetailsComp from './SubjectPriceDetailsComp';
import SubjectPriceListComp from './SubjectPriceListComp';

// 가격표 불러오기
export default class SubjectPriceComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 검색
            inputFocus : false,
            searchInput:'',

            // 패널 모드
            subjectPriceDetailsCompPanel      : false,          // 가격표 상세품목
        }
    }

    // 가격표 상세품목 호출
    handleClickSubjectPriceDetailsComp = () => { this.setState({ subjectPriceDetailsCompPanel : true });}

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            subjectPriceDetailsCompPanel : false, 
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('subjectPriceCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">가격표 불러오기</span>
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
                        <SubjectPriceListComp />

                        {/* 버튼영역 */}
                        <div className="btnBox h-box" style={{display:this.state.emptyData ? 'none' : ''}}>
                            <div className="btn flex-1" onClick={this.handleClickSubjectPriceDetailsComp}>상세보기</div>
                            <div className="btn flex-1 blue">적용하기</div>
                        </div>

                    </div>
                </div>

                {/* 가격표 상세품목 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.subjectPriceDetailsCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <SubjectPriceDetailsComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


