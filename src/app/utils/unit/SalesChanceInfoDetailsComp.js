import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';

// 영업기회정보 상세
export default class SalesChanceInfoDetailsComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 고객사 상세 탭
            tabStateOpen01: true,
            tabStateOpen02: false,
            tabStateOpen03: false,
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

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType1'
                        title='영업기회정보 상세'
                        handleClickBack={()=>{this.props.handleClickPanelClose('salesChanceInfoDetailsPanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        {/* 상세 헤더 */}
                        <div className="detailsHeader h-box posi_stk" style={{top:'0px'}}>
                            <div className="dh-con flex-1 v-box">
                                <div className="h-box">
                                    <div className="title">Amaranth10 업셀영업 1차</div>
                                    <div className="dday flex-1">D-14</div>
                                </div>
                                <div className="h-box">
                                    <div className="txt-c1">가나상사</div>
                                    <div className="line"/>
                                    <div className="txt-c2">2021.01.12~2021.01.26</div>
                                </div>
                            </div>
                        </div>
                        {/* 상세 탭 */}
                        <div className="detailsTab posi_stk" style={{top:'64px'}}>
                            <div className="detailsTabMenu">
                                <ul className="flex-1 h-box">
                                    <li className={`${this.state.tabStateOpen01 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('1')}>
                                        <span className="txt">고객발굴</span>
                                    </li>
                                    <li className={`${this.state.tabStateOpen02 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('2')}>
                                        <span className="txt">영업기회</span>
                                    </li>
                                    <li className={`${this.state.tabStateOpen03 ? 'on':''}`} onClick={()=>this.handleDetailsTabClick('3')}>
                                        <span className="txt">견적정보</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* 고객발굴 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="basicContents" style={{display:this.state.tabStateOpen01 ? '':'none'}}>
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">기본정보</div>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>기회명</dt>
                                    <dd>
                                        <div className="txt">Amaranth10 업셀영업 1차</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사명</dt>
                                    <dd>
                                        <div className="txt">가나상사</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당자(연락처)</dt>
                                    <dd>
                                        <div className="txt">홍길동 과장</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>만료일자</dt>
                                    <dd>
                                        <div className="txt">2021.06.08</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업단계유형</dt>
                                    <dd>
                                        <div className="txt">영업기회 기본형</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유입경로</dt>
                                    <dd>
                                        <div className="txt">마케팅 캠페인</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업주소</dt>
                                    <dd>
                                        <div className="txt">서울 종로구 율곡로10길 8 서린빌딩 2층</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업담당자</dt>
                                    <dd>
                                        <div className="txt">김영묵 대리</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>메모</dt>
                                    <dd>
                                        <div className="textarea">
                                            기존 아이큐브 사용 고객으로 Amaranth10 신규<br/>
                                            제품 출시에 따른 업셀영업 진행
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        {/* 영업기회 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="basicContents" style={{display:this.state.tabStateOpen02 ? '':'none'}}>
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">기본정보</div>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>기회명</dt>
                                    <dd>
                                        <div className="txt">Amaranth10 업셀영업 1차</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사명</dt>
                                    <dd>
                                        <div className="txt">가나상사</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당자(연락처)</dt>
                                    <dd>
                                        <div className="txt">홍길동 과장</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>예상수주확률</dt>
                                    <dd>
                                        <div className="txt">70%</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>예상수주액</dt>
                                    <dd>
                                        <div className="txt">6,000,000</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업단계유형</dt>
                                    <dd>
                                        <div className="txt">영업기회 기본형</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유입경로</dt>
                                    <dd>
                                        <div className="txt">마케팅 캠페인</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>캠페인선택</dt>
                                    <dd>
                                        <div className="txt">신규제품 출시 업셀 프로모션</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>품목</dt>
                                    <dd>
                                        <div className="txt">
                                            Amaranth10 CRM<br/>
                                            Amaranth10 인사<br/>
                                            Amaranth10 회계
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>만료일자</dt>
                                    <dd>
                                        <div className="txt">2021.01.26</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>영업담당자</dt>
                                    <dd>
                                        <div className="txt">김영묵 대리</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>메모</dt>
                                    <dd>
                                        <div className="textarea">
                                            기존 아이큐브 사용 고객으로 Amaranth10 신규<br/>
                                            제품 출시에 따른 업셀영업 진행
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        {/* 견적정보 탭 ------------------------------------------------------------------------------------------------*/}
                        <div className="basicContents v-box" style={{display:this.state.tabStateOpen03 ? '':'none',height:'100%'}}>
                            {/* 데이터 없을때 */}
                            <div className="emptyData flex-1 v-box">
                                <div className="noList">견적정보가 없습니다.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


