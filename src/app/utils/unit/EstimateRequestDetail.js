import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';

// 견적요청 상세정보
export default class EstimateRequestDetail extends Component {
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
                        type='headerType1'
                        title='견적요청 상세정보'
                        handleClickBack={()=>{this.props.handleClickPanelClose('estimateRequestDetailPanel');}}
                    />
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
                                        <div className="txt">김학규 대리</div>
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
                                    <dt>요청사항</dt>
                                    <dd>
                                        <div className="textarea">Amaranth 10 인사/회계/CRM 기본상품(5User)관심이 있는 고객사입니다. 이전차수 1차 견적서를 기준으로 할인단가 10%적용, 부가세 포함 부탁드립니다. 결제조건: 무통장 입금/일시납 비고사항: 고객사 방문설치 및 교육 포함</div>
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
                                        <div className="itemDiv h-box">
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
                                    </li>
                                    <li>
                                        <div className="itemDiv h-box">
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
                                    </li>
                                    <li>
                                        <div className="itemDiv h-box">
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


