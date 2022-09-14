import React, { Component, Fragment } from 'react';

// 연락처 - 기본정보
export class ContactBasicInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>이름</dt>
                        <dd>
                            <div className="txt">김초롱</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>회사명</dt>
                        <dd>
                            <div className="txt">아임사이언스</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>부서명</dt>
                        <dd>
                            <div className="txt">회계팀</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>직급</dt>
                        <dd>
                            <div className="txt">대리</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>휴대폰</dt>
                        <dd>
                            <div className="txt">010-6490-0569</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="cellpBtn flex-1" />
                        <span className="smsBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>유선번호</dt>
                        <dd>
                            <div className="txt">02-1234-5678</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="telepBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>팩스</dt>
                        <dd>
                            <div className="txt">02-1235-5679</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="faxBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>이메일</dt>
                        <dd>
                            <div className="txt">kimdouzone@naver.com</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="mailBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>회사주소</dt>
                        <dd>
                            <div className="txt">서울시 종로구 율곡로 10길 8</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dd>
                            <div className="txt">서린빌딩 3층</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>비고</dt>
                        <dd>
                            <div className="textarea">제품에 관심 많음</div>
                        </dd>
                    </dl>
                </div>
            </Fragment>
        );
    }
}

// 고객사 - 기본정보
export class CustomerBasicInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>회사명</dt>
                        <dd>
                            <div className="txt">아임사이언스</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>대표자</dt>
                        <dd>
                            <div className="txt">강재건</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>사업자번호</dt>
                        <dd>
                            <div className="txt">101-12-44885</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>구분</dt>
                        <dd>
                            <div className="txt">법인사업자</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>업태</dt>
                        <dd>
                            <div className="txt">도소매</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>업종</dt>
                        <dd>
                            <div className="txt">과학기자재</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>대표번호</dt>
                        <dd>
                            <div className="txt">02-1234-5678</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="telepBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>대표팩스</dt>
                        <dd>
                            <div className="txt">02-1235-5679</div>
                        </dd>
                    </dl>
                    <div className="fnBtn h-box">
                        <span className="faxBtn flex-1" />
                    </div>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>회사주소</dt>
                        <dd>
                            <div className="txt">서울시 종로구 율곡로 10길 8</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dd>
                            <div className="txt">서린빌딩 3층</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>홈페이지</dt>
                        <dd>
                            <div className="txt">www.iamscience.co.kr</div>
                        </dd>
                    </dl>
                </div>
                <div className="viewUnit h-box">
                    <dl className="v-box flex-1">
                        <dt>국가코드</dt>
                        <dd>
                            <div className="txt">KR, 한국</div>
                        </dd>
                    </dl>
                </div>
            </Fragment>
        );
    }
}


