import React, { Component, Fragment } from 'react';
import CountryCodeComp from '../unit/CountryCodeComp';
import FnCodeComp from '../unit/FnCodeComp';
import SubjectRegistrationComp from '../unit/SubjectRegistrationComp';

// 메뉴 하단시트
export default class MenuSheetComp extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        if(this.props.type === 'nameCard'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <ul>
                            <li><div className="menuItem camera">카메라</div></li>
                            <li><div className="menuItem photo">앨범에서 사진 선택</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'contactMore'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <ul>
                            <li><div className="menuItem info">고객처 정보</div></li>
                            <li><div className="menuItem copy">연락처 복사</div></li>
                            <li><div className="menuItem share">연락처 공유</div></li>
                            <li><div className="menuItem download">스마트폰 저장</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'customerMore'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <ul>
                            <li><div className="menuItem copy">고객사 복사</div></li>
                            <li><div className="menuItem share">고객사 공유</div></li>
                            <li><div className="menuItem download">스마트폰 저장</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'customerCategory'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">구분</div>
                        </div>
                        <ul>
                            <li><div className="menuItem corp">법인사업자</div></li>
                            <li><div className="menuItem indi">개인사업자</div></li>
                            <li><div className="menuItem finance">금융</div></li>
                            <li><div className="menuItem card">카드</div></li>
                            <li><div className="menuItem agency">기관</div></li>
                            <li><div className="menuItem etc">기타</div></li>
                            <li><div className="menuItem none">없음</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'customerCountryCode'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <CountryCodeComp />
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'customerFic'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <FnCodeComp />
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'salesChanceMore'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">영업기회</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();this.props.handleClickSalesFailed();}}><div className="menuItem failed">영업실패</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickOpportunitySource();}}><div className="menuItem info">기회출처</div></li>
                            <li><div className="menuItem modi">수정</div></li>
                            <li><div className="menuItem del">삭제</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'timelineMoreEstimate'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">[견적] 견적요청</div>
                        </div>
                        <ul>
                            <li><div className="menuItem modi">수정</div></li>
                            <li><div className="menuItem del">삭제</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickEstimateRequestDetail();}}><div className="menuItem file">상세보기</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'timelineMoreOrder'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">[주문] 주문요청</div>
                        </div>
                        <ul>
                            <li><div className="menuItem modi">수정</div></li>
                            <li><div className="menuItem del">삭제</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickOrderRequestDetail();}}><div className="menuItem file">상세보기</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'estimateSheetSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">견적활동 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();this.props.handleClickEstimateAdd();}}><div className="menuItem pen">견적등록</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickEstimateRequest();}}><div className="menuItem indi">견적요청</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'orderSheetSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">주문활동 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();this.props.handleClickOrderAdd();}}><div className="menuItem pen">주문등록</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickOrderRequest();}}><div className="menuItem indi">주문요청</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'campaignInfoSheetSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="campaignInfoBox flex-1 v-box">
                            <div className="titleBox h-box">
                                <div className="flex-1 h-box">
                                    <div className="title">캠페인정보</div>
                                    <div className="badge">프로모션</div>
                                </div>
                                <div className="txtBtn" onClick={()=>{this.props.Close();}}>확인</div>
                            </div>
                            <div className="scroll_y_on">
                                <dl className="h-box">
                                    <dt>캠페인명</dt>
                                    <dd>iCUBE 업셀 프로모션</dd>
                                </dl>
                                <dl className="h-box">
                                    <dt>단가기간</dt>
                                    <dd>2021.11.01 ~ 2021.11.30</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'taxTypeSheetSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">과세구분 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">매출과세</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">매출비과세</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'unitPriceSheetSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">단가구분 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">부가세포함</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">부가세별도</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'sendFaxNumberSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">보낼 팩스번호 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">02-6233-3412</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">0507-891-4539</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">0507-791-8884</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'receiveFaxNumberSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">받을 팩스번호 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">02-6233-3412</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">0507-891-4539</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">0507-791-8884</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">직접입력</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'sendMailSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">보낼 메일주소 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">ssely007@naver.com</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">ssely007@douzone.com</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'receiveMailSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">받을 메일주소 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">ssely007@naver.com</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">직접입력</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'referenceMailSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">참조 메일주소 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">조직도</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">폰연락처</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickCustomerContactSelectComp();}}><div className="menuItem p0">고객사연락처</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">직접입력</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'locationSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">방문장소 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">(24465) 서울시 강남구 테헤란로 265 가나빌딩 5층</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">(43212) 강원도 춘천시 남산면 버들1길 130</div></li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">(12331) 인천시 남동구 간석3동 107-2 가나빌딩</div></li>
                            <li onClick={()=>{this.props.Close();this.props.handleClickAddressComp();}}><div className="menuItem p0">장소추가</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'customerContactSelect'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <div className="titleBox">
                            <div className="title">고객사연락처 메일주소 선택</div>
                        </div>
                        <ul>
                            <li onClick={()=>{this.props.Close();}}>
                                <div className="menuItem p0 h-box">
                                    <div className="txt">이순신 과장</div>
                                    <div className="line" />
                                    <div className="txt">leesunsin@naver.com</div>
                                </div>
                            </li>
                            <li onClick={()=>{this.props.Close();}}>
                                <div className="menuItem p0 h-box">
                                    <div className="txt">김더존 과장</div>
                                    <div className="line" />
                                    <div className="txt">kimdz@douzone.com</div>
                                </div>
                            </li>
                            <li onClick={()=>{this.props.Close();}}>
                                <div className="menuItem p0 h-box">
                                    <div className="txt">홍길동 과장</div>
                                    <div className="line" />
                                    <div className="txt">honggd@naver.com</div>
                                </div>
                            </li>
                            <li onClick={()=>{this.props.Close();}}><div className="menuItem p0">직접입력</div></li>
                        </ul>
                    </div>
                </Fragment>
            );
        }else if(this.props.type === 'subjectRegistration'){
            return (
                <Fragment>
                    <div className={`menuSheetWrap v-box`}>
                        <SubjectRegistrationComp 
                            Close={this.props.Close}
                            handleClickSubjectPriceComp={this.props.handleClickSubjectPriceComp}
                            handleClickSubjectCampaignComp={this.props.handleClickSubjectCampaignComp}
                            handleClickSubjectSelectComp={this.props.handleClickSubjectSelectComp}
                        />
                    </div>
                </Fragment>
            );
        }else{
            return (<></>);
        }
    }
}