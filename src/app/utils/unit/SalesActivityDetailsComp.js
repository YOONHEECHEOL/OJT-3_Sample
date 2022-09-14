import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';

// 활동일정 등록
export default class SalesActivityDetailsComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType6'
                        title='활동일정 상세' 
                        handleClickBack={()=>{this.props.handleClickPanelClose('salesActivityDetailsPanel');}}
                    />
                    {/* 활동일정 상세 타이틀 */}
                    <div className="salesActivityDetailsTitle h-box">
                        <div className="title flex-1">Amaranth10 업셀영업</div>
                        <div className="fnDiv h-box">
                            <div className="reply"><span className="cnt">8</span></div>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 활동일시 */}
                            <div className="salesActivityUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>활동일시</dt>
                                    <dd>
                                        <div className="txt">2022.06.09(목) 16:54</div>
                                    </dd>
                                </dl>
                            </div>

                            {/* 기본그룹 1 (고객사 정보) */}
                            <div className="salesActivityUnit h-box" onClick={()=>{this.setState({groupBox01:!this.state.groupBox01});}}>
                                <dl className="v-box flex-1">
                                    <dt>고객사</dt>
                                    <dd>
                                        <div className="txt">가나상사</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`arrowBtn ${this.state.groupBox01 ? 'up':'down'} flex-1`}/>
                                </div>
                            </div>
                            <div style={{display:this.state.groupBox01 ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">대표전화</dt>
                                        <dd className="h-box">
                                            <div className="txt">02-6233-5524</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="telepBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">주소</dt>
                                        <dd className="h-box">
                                            <div className="txt">강원도 춘천시 남산면 버들 1길</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">홈페이지</dt>
                                        <dd className="h-box">
                                            <div className="txt link">www.gana.com</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            {/* 기본그룹 2 (고객담당자 정보) */}
                            <div className="salesActivityUnit h-box" onClick={()=>{this.setState({groupBox02:!this.state.groupBox02});}}>
                                <dl className="v-box flex-1">
                                    <dt>고객담당</dt>
                                    <dd>
                                        <div className="txt">홍길동</div>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className={`arrowBtn ${this.state.groupBox02 ? 'up':'down'} flex-1`}/>
                                </div>
                            </div>
                            <div style={{display:this.state.groupBox02 ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">직급</dt>
                                        <dd className="h-box">
                                            <div className="txt">과장</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전화번호</dt>
                                        <dd className="h-box">
                                            <div className="txt">010-6233-5524</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="cellpBtn flex-1"/>
                                        <span className="smsBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">이메일</dt>
                                        <dd className="h-box">
                                            <div className="txt">ssely007@naver.com</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="emailBtn flex-1"/>
                                    </div>
                                </div>
                            </div>

                            <div className="salesActivityUnit h-box">
                                <dl className="h-box flex-1">
                                    <dt className="h-box">첨부파일</dt>
                                </dl>
                                <div className="fnBtn h-box">
                                    <div className="files"><span className="cnt">3</span></div>
                                </div>
                            </div>

                            {/* 활동타입 - 전화 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'phone' ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동내용</dt>
                                        <dd>
                                            <div className="textarea">
                                                Amaranth 10 전화 상담을 진행하였습니다. <br/>
                                                고객 요구사항 분석 결과 <br/>
                                                1. User 10 사용예정이며 다음달 직원 채용으로 추가 견적문의 <br/>
                                                2. 회계인사 모듈 및 그룹웨어 필수 구매 <br/>
                                                CRM 도입 검토 <br/>
                                                3.기존 서비스 가입고객으로 재구매 할인 프로모션 문의    
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">전화</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전화번호</dt>
                                        <dd className="h-box">
                                            <div className="txt">010-6233-5524</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="cellpBtn flex-1"/>
                                        <span className="smsBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>영업담당자</dt>
                                        <dd>
                                            <div className="txt">영업1팀 김영묵 대리</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            {/* 활동타입 - 팩스 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'fax' ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동내용</dt>
                                        <dd>
                                            <div className="textarea">
                                                고객 요구사항 분석 결과 <br/>
                                                1. User 10 사용예정이며 다음달 직원 채용으로 추가 견적문의 <br/>
                                                2. 회계인사 모듈 및 그룹웨어 필수 구매 <br/>
                                                CRM 도입 검토 <br/>
                                                3.기존 서비스 가입고객으로 재구매 할인 프로모션 문의    
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">팩스</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송시간</dt>
                                        <dd className="h-box">
                                            <div className="txt">2022.06.09(목) 16:54</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">보낸번호</dt>
                                        <dd className="h-box">
                                            <div className="txt">02-4215-6654</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="faxBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">받은번호</dt>
                                        <dd className="h-box">
                                            <div className="txt">050-7891-4539</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="faxBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">제목</dt>
                                        <dd className="h-box">
                                            <div className="txt">Amaranth 10 홍보자료 전송드립니다.</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송문서</dt>
                                        <dd className="h-box">
                                            <div className="txt">Amaranth 10 홍보자료</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <div className="files"><span className="cnt">1</span></div>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>영업담당자</dt>
                                        <dd>
                                            <div className="txt">영업1팀 김영묵 대리</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            {/* 활동타입 - 메일 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'mail' ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동내용</dt>
                                        <dd>
                                            <div className="textarea">
                                                고객 요구사항 분석 결과 <br/>
                                                1. User 10 사용예정이며 다음달 직원 채용으로 추가 견적문의 <br/>
                                                2. 회계인사 모듈 및 그룹웨어 필수 구매 <br/>
                                                CRM 도입 검토 <br/>
                                                3.기존 서비스 가입고객으로 재구매 할인 프로모션 문의    
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">메일</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송시간</dt>
                                        <dd className="h-box">
                                            <div className="txt">2022.06.09 16:54</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">보낸사람</dt>
                                        <dd className="h-box">
                                            <div className="txt">kimym@douzone.com</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="emailBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">받은사람</dt>
                                        <dd className="h-box">
                                            <div className="txt">honggd@naver.com</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="emailBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">참조</dt>
                                        <dd className="h-box">
                                            <div className="txt">janggilsan@naver.com</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="emailBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">숨은참조</dt>
                                        <dd className="h-box">
                                            <div className="txt">adw1004@naver.com</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="emailBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">제목</dt>
                                        <dd className="h-box">
                                            <div className="txt">제품소개서 및 리플릿 발송해드립니다.</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>메일내용</dt>
                                        <dd>
                                            <div className="textarea">제품소개서 및 리플릿</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송문서</dt>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <div className="files"><span className="cnt">1</span></div>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>영업담당자</dt>
                                        <dd>
                                            <div className="txt">영업1팀 김영묵 대리</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            {/* 활동타입 - 방문 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'visit' ? '':'none'}}>
                                <div className="salesActivityUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동내용</dt>
                                        <dd>
                                            <div className="textarea">
                                                Amaranth 10 전화 상담을 진행하였습니다. <br/>
                                                고객 요구사항 분석 결과 <br/>
                                                1. User 10 사용예정이며 다음달 직원 채용으로 추가 견적문의 <br/>
                                                2. 회계인사 모듈 및 그룹웨어 필수 구매 <br/>
                                                CRM 도입 검토 <br/>
                                                3.기존 서비스 가입고객으로 재구매 할인 프로모션 문의    
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">방문</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전화번호</dt>
                                        <dd className="h-box">
                                            <div className="txt">010-6233-5524</div>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="cellpBtn flex-1"/>
                                        <span className="smsBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">장소</dt>
                                        <dd className="h-box">
                                            <div className="txt">(42321) 서울특별시 강남구 청담동 143-2</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="salesActivityUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>영업담당자</dt>
                                        <dd>
                                            <div className="txt">영업1팀 김영묵 대리</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


