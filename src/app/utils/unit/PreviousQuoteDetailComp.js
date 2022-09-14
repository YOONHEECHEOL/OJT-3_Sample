import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';

// 견적상세
export class PreviousQuoteDetailComp extends Component {
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
                        type='headerType2'
                        title='A20210501001 1차'
                        textBtnName='적용'
                        handleClickBack={()=>{this.props.handleClickPanelClose('previousQuoteListCompPanel');}}
                    />
                    {/* 견적상세 타이틀 */}
                    <div className="estimateTitle h-box">
                        <div className="title flex-1">견적완료</div>
                        <div className="fnBtn h-box">
                            <span className="previewBtn">미리보기</span>
                            <span className="emailBtn flex-1" />
                            <span className="faxBtn flex-1" />
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 견적정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">견적정보</div>
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
                                    <dt>고객담당자</dt>
                                    <dd>
                                        <div className="txt">홍길동 과장</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>견적번호</dt>
                                    <dd>
                                        <div className="txt">A20210501001</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>견적일자</dt>
                                    <dd>
                                        <div className="txt">2021.12.12</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유효일자</dt>
                                    <dd>
                                        <div className="txt">2021.12.25</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>견적차수</dt>
                                    <dd>
                                        <div className="txt">1차</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>견적금액</dt>
                                    <dd>
                                        <div className="txt fwb">4,000,000</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>과세구분</dt>
                                    <dd>
                                        <div className="txt">매출과세</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>단가구분</dt>
                                    <dd>
                                        <div className="txt">부가세포함</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>결제조건</dt>
                                    <dd>
                                        <div className="txt">현금일시납</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>납품장소</dt>
                                    <dd>
                                        <div className="txt">고객본사</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>캠페인선택</dt>
                                    <dd>
                                        <div className="txt">Amaranth10 업셀 프로모션</div>
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
                                    <dt>견적담당자</dt>
                                    <dd>
                                        <div className="txt">김영묵 대리</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>비고</dt>
                                    <dd>
                                        <div className="textarea" style={{minHeight:'auto'}}>
                                            고객사 방문 설치 및 교육진행 포함
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            {/* 품목정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">품목정보</div>
                            </div>
                            {/* 품목 아이템 */}
                            <div className="itemUnit">
                                <ul>
                                    <li>
                                        <div className="itemDiv brn h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 인사</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv brn h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 회계</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="itemDiv brn h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">Amaranth10 CRM</div>
                                                </div>
                                                <div className="h-box">
                                                    <div className="txt01 mr8">A125-84</div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">규격</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box">
                                                        <div className="txt03">기본단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                    <div className="mr8 h-box flex-1">
                                                        <div className="txt03">판매단위</div>
                                                        <div className="line"/>
                                                        <div className="txt02">EA</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subjectTable v-box">
                                            <div className="h-box">
                                                <div className="th">수량</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">1</div>
                                                </div>
                                                <div className="th">할인율</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">0%</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">단가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                                <div className="th">공급가</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,000,000</div>
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="th">부가세</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">200,000</div>
                                                </div>
                                                <div className="th">합계액</div>
                                                <div className="td flex-1 h-box">
                                                    <div className="txt flex-1">2,200,000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


