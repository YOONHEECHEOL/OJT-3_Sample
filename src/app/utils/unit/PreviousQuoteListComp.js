import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';
import PanelWrap from '../commons/PanelWrap';
import { PreviousQuoteDetailComp } from './PreviousQuoteDetailComp';

// 이전차수
export default class PreviousQuoteListComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 패널 모드
            previousQuoteListCompPanel : false,          // 견적상세
        }
    }

    // 고객사명 선택 호출
    handleClickPreviousQuoteListComp = () => { this.setState({ previousQuoteListCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        if(state === 'previousQuoteListCompPanel' ){
            this.setState({ previousQuoteListCompPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType1'
                        title='이전차수'
                        handleClickBack={()=>{this.props.handleClickPanelClose('previousQuoteListCompPanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        <div className="cardList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                            <ul>
                                <li>
                                    <div className="cardDiv h-box">
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="txt04">A20210501001</div>
                                                <div className="line"/>
                                                <div className="txt02 flex-1">3차</div>
                                                {/* type1:견적요청 / type2:견적진행 / type3:견적완료 / type4:견적취소  */}
                                                <div className="previousQuoteBox">
                                                    <div className="type2">견적진행</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="title flex-1">견적금액 6,000,000</div>
                                                <div className="txt01">김영묵대리</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cardDiv h-box">
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="txt04">A20210501001</div>
                                                <div className="line"/>
                                                <div className="txt02 flex-1">2차</div>
                                                {/* type1:견적요청 / type2:견적진행 / type3:견적완료 / type4:견적취소  */}
                                                <div className="previousQuoteBox">
                                                    <div className="type3">견적완료</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="title flex-1">견적금액 5,000,000</div>
                                                <div className="txt01">김영묵대리</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cardDiv h-box" onClick={this.handleClickPreviousQuoteListComp}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="txt04">A20210501001</div>
                                                <div className="line"/>
                                                <div className="txt02 flex-1">1차</div>
                                                {/* type1:견적요청 / type2:견적진행 / type3:견적완료 / type4:견적취소  */}
                                                <div className="previousQuoteBox">
                                                    <div className="type3">견적완료</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="title flex-1">견적금액 4,000,000</div>
                                                <div className="txt01">김영묵대리</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 데이터 없을때 */}
                        <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                            <div className="noList">이전차수 정보가 없습니다.</div>
                        </div>
                    </div>
                </div>

                {/* 견적상세 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.previousQuoteListCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <PreviousQuoteDetailComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


