import React, { Component, Fragment } from 'react';

// 활동타임라인
export default class SalesTimelineComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 아이템 컨텐츠 말줄임
            txtMore01: true,
            txtMore02: true,
            txtMore03: true,
            txtMore04: true,
            txtMore05: true,
            txtMore06: true,
            txtMore07: true,
            txtMore08: true,
            txtMore09: true,
        }
    }

    render() {
        return (
            <Fragment>
                {/* 타임라인 헤더 */}
                <div className="timelineFn h-box">
                    <div className="title flex-1">활동 타임라인</div>
                    <div className="promotionBtn new" onClick={this.props.handleClickPromotionCheck}>프로모션 확인</div>
                    <div className="filterBtn" onClick={this.props.handleClickTimelineFilter}><span className="cnt">2</span></div>
                </div>
                {/* 타임라인 리스트 */}
                <div className="timelineList flex-1 scroll_y_on">
                    <ul>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon order" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickOrderRequestDetail();}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[주문] 주문요청</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore" onClick={this.props.handleClickTimelineMoreOrder}/>
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore01 ? 'txLimit':''}`}>
                                    Amaranth10 제품 방문상담을 진행하였습니다. <br />
                                    고객 요구사항 분석결과 <br />
                                    1.User10 사용예정 다음날 직원 채용으로 주가 견적문의 <br />
                                    2.회계인사 모듈 및 그룹웨어 필수구매ORM 도입 검토 <br />
                                    3.기존 서비스 가입고객으로 재구매 할인프로모션 문의 <br />
                                    : 이번주 금요일 고객사 2차 방문 상담 예정입니다 <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore01:!this.state.txtMore01})}>더보기</div>
                            </div>
                        </li>
                        {/* 전송예약 : 예시는 메일
                            (예약 아이콘) 
                            전화 : callRes
                            메일 : mailRes
                            팩스 : faxRes
                            방문 : visitRes
                        */}
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon mailRes" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickSalesActivityDetails('mail');}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[메일] 리플릿 및 제안서 메일발송</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt">홍길동 과장</div>
                                        <div className="line"/>
                                        <div className="txtBlue flex-1">4일 후 진행예정</div>
                                    </div>
                                </div>
                                <div className="listMore" />
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore07 ? 'txLimit':''}`}>
                                    Amaranth10 제품 방문상담을 진행하였습니다. <br />
                                    고객 요구사항 분석결과 <br />
                                    1.User10 사용예정 다음날 직원 채용으로 주가 견적문의 <br />
                                    2.회계인사 모듈 및 그룹웨어 필수구매ORM 도입 검토 <br />
                                    3.기존 서비스 가입고객으로 재구매 할인프로모션 문의 <br />
                                    : 이번주 금요일 고객사 2차 방문 상담 예정입니다 <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore07:!this.state.txtMore07})}>더보기</div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon mail" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickSalesActivityDetails('mail');}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[메일] 리플릿 및 제안서 메일발송</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore" />
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore02 ? 'txLimit':''}`}>
                                    Amaranth10 제품 방문상담을 진행하였습니다. <br />
                                    고객 요구사항 분석결과 <br />
                                    1.User10 사용예정 다음날 직원 채용으로 주가 견적문의 <br />
                                    2.회계인사 모듈 및 그룹웨어 필수구매ORM 도입 검토 <br />
                                    3.기존 서비스 가입고객으로 재구매 할인프로모션 문의 <br />
                                    : 이번주 금요일 고객사 2차 방문 상담 예정입니다 <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore02:!this.state.txtMore02})}>더보기</div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon visit" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickSalesActivityDetails('visit');}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[방문] 고객사 방문상담진행</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore"/>
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore03 ? 'txLimit':''}`}>
                                    Amaranth10 제품 방문상담을 진행하였습니다. <br />
                                    고객 요구사항 분석결과 <br />
                                    1.User10 사용예정 다음날 직원 채용으로 주가 견적문의 <br />
                                    2.회계인사 모듈 및 그룹웨어 필수구매ORM 도입 검토 <br />
                                    3.기존 서비스 가입고객으로 재구매 할인프로모션 문의 <br />
                                    : 이번주 금요일 고객사 2차 방문 상담 예정입니다 <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore03:!this.state.txtMore03})}>더보기</div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon system" />
                                <div className="info v-box flex-1">
                                    <div className="h-box">
                                        <div className="title ellipsis">주문 &gt; 영업단계로 변경되었습니다.</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">18:00</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon estimate" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickEstimateRequestDetail();}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[견적] 견적서요청</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore" onClick={this.props.handleClickTimelineMoreEstimate}/>
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore04 ? 'txLimit':''}`}>
                                    Amaranth10 제품 방문상담을 진행하였습니다. <br />
                                    고객 요구사항 분석결과 <br />
                                    1.User10 사용예정 다음날 직원 채용으로 주가 견적문의 <br />
                                    2.회계인사 모듈 및 그룹웨어 필수구매ORM 도입 검토 <br />
                                    3.기존 서비스 가입고객으로 재구매 할인프로모션 문의 <br />
                                    : 이번주 금요일 고객사 2차 방문 상담 예정입니다 <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore04:!this.state.txtMore04})}>더보기</div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon call" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickSalesActivityDetails('phone');}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[전화] 고객사 유선상담 진행</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore" />
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore05 ? 'txLimit':''}`}>
                                    기존 iCUBE 사용고객으로 Amaranth10 신제품 출시 TV광고를 보고 유선상담을 요청하셨습니다.  <br />
                                    소개 및 안내자료 메일 발송 예정입니다. <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore05:!this.state.txtMore05})}>더보기</div>
                            </div>
                        </li>
                        <li className="v-box">
                            <div className="listType h-box">
                                <div className="icon fax" />
                                <div className="info v-box flex-1" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickSalesActivityDetails('fax');}}>
                                    <div className="h-box">
                                        <div className="title ellipsis">[팩스] 고객사 팩스발송 예정</div>
                                        <div className="arrowDetail" />
                                    </div>
                                    <div className="h-box">
                                        <div className="txt">가나상사</div>
                                        <div className="line"/>
                                        <div className="txt flex-1">홍길동 과장</div>
                                    </div>
                                </div>
                                <div className="listMore" />
                            </div>
                            <div className="listBox v-box">
                                <div className="fnDiv h-box">
                                    <div className="textInfo flex-1">2021.01.17 17:00 영업1팀 김영묵</div>
                                    <div className="reply"><span className="cnt">8</span></div>
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                                <div className={`txDiv ${this.state.txtMore06 ? 'txLimit':''}`}>
                                    소개 및 안내자료 팩스 발송 예정입니다. <br />
                                    : 내용이 길면 6줄까지만 표시되며, 더보기로 나머지를 확인합니다. <br />
                                    : 개발에서는 txDiv의 컨텐츠 높이가 120px을 넘으면 txtMore의 state를 true로 활성화 해주세요. (txLimit가 활성화되면 말줄임과 더보기 버튼이 활성화됩니다.)
                                </div>
                                <div className="txtMore" onClick={()=>this.setState({txtMore06:!this.state.txtMore06})}>더보기</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}


