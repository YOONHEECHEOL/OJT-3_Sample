import React, { Component, Fragment } from 'react';
import PanelWrap from '../utils/commons/PanelWrap';
import AddressComp from '../utils/unit/AddressComp';
import MenuSheetComp from '../utils/commons/MenuSheetComp'
import PopupWrap from '../utils/commons/PopupWrap';
import AccountInfoPop from '../utils/popup/AccountInfoPop';

// 고객사 등록
export class CustomerAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 기본정보
            textInput01 : '',
            textInput02 : '',
            textInput03 : '',
            textInput04 : '',
            textInput05 : '',
            textInput06 : '',
            textInput07 : '',
            textInput08 : '',
            textInput09 : '',
            textInput10 : '',
            textInput11 : '',
            textInput12 : '',

            // 계좌정보
            accInfoInput01 : '',
            accInfoInput02 : '',
            accInfoInput03 : '',

            // 패널 모드
            categoryCompPanel    : false,          // 구분
            addressCompPanel     : false,          // 주소검색
            countryCodeCompPanel : false,          // 국가코드
            ficCompPanel         : false,          // 금융기관코드

            // 팝업 모드
            accountInfoPop : false,          // 계좌정보 입력
        }
    }

    // 구분 호출
    handleClickCategoryComp = () => { this.setState({ categoryCompPanel : true }); }
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    // 국가코드 호출
    handleClickCountryCodeComp = () => { this.setState({ countryCodeCompPanel : true }); }
    // 금융기관코드 호출
    handleClickFicComp = () => { this.setState({ ficCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            categoryCompPanel : false,
            countryCodeCompPanel : false, 
            ficCompPanel : false, 
        });

        if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }
    }

    // 계좌정보입력 호출
    handleClickAccountInfoPop = () => { this.setState({ accountInfoPop : true }); }
    
    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            accountInfoPop : false,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('customerAddPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">고객사 등록</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 기본정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">기본정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='회사명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='대표자명을 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>사업자번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='사업자번호를 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>구분</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='구분을 지정해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCategoryComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>업태</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='업태를 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>업종</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='업종을 입력해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='대표번호를 입력해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표팩스</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='팩스번호를 입력해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사주소</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='회사주소를 입력해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickAddressComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput10} placeholder='상세주소를 입력해주세요.' onChange={(e) => this.setState({ textInput10: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>홈페이지</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput11} placeholder='홈페이지 주소를 입력해주세요.' onChange={(e) => this.setState({ textInput11: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>국가코드</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput12} placeholder='국가코드를 지정해주세요.' onChange={(e) => this.setState({ textInput12: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCountryCodeComp}/>
                                </div>
                            </div>

                            {/* 계좌(금융)정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">계좌(금융)정보</div>
                                <div className="fnBtn h-box">
                                    <span className="plusBtn flex-1" onClick={this.handleClickAccountInfoPop}/>
                                </div>
                            </div>
                            <div className="viewUnit h-box"></div>
                            
                            {/* 연락처정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">연락처정보</div>
                                <div className="fnBtn h-box">
                                    <span className="plusBtn flex-1" />
                                </div>
                            </div>
                            <div className="viewUnit h-box"></div>
                        </div>
                    </div>
                </div>

                {/* 구분 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.categoryCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerCategory'} />
                </PanelWrap>

                {/* 주소검색 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.addressCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <AddressComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 국가코드 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.countryCodeCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerCountryCode'} />
                </PanelWrap>

                {/* 계좌정보입력 */}
                <PopupWrap
                    Open={this.state.accountInfoPop} 
                    Close={this.handleClickPopupClose}
                >
                    <AccountInfoPop 
                        handleClickPopupClose={this.handleClickPopupClose}
                        handleClickFicComp={this.handleClickFicComp}
                    />
                </PopupWrap>

                {/* 금융기관 선택 */}
                <PanelWrap 
                    Type='bs'
                    zIndex='4'
                    Open={this.state.ficCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerFic'} />
                </PanelWrap>
            </Fragment>
        );
    }
}





// 고객사 수정
export class CustomerEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 기본정보
            textInput01 : '아임사이언스',
            textInput02 : '강재건',
            textInput03 : '101-12-44885',
            textInput04 : '법인사업자',
            textInput05 : '도소매',
            textInput06 : '과학기자재',
            textInput07 : '02-1234-5678',
            textInput08 : '02-1235-5679',
            textInput09 : '서울시 종로구 율곡 10길 8',
            textInput10 : '서린빌딩 3층',
            textInput11 : 'www.iamscience.co.kr',
            textInput12 : 'KR, 한국',

            // 계좌정보
            accInfoInput01 : '',
            accInfoInput02 : '',
            accInfoInput03 : '',

            // 패널 모드
            categoryCompPanel    : false,          // 구분
            addressCompPanel     : false,          // 주소검색
            countryCodeCompPanel : false,          // 국가코드
            ficCompPanel         : false,          // 금융기관코드

            // 팝업 모드
            accountInfoPop : false,          // 계좌정보 입력
        }
    }

    // 구분 호출
    handleClickCategoryComp = () => { this.setState({ categoryCompPanel : true }); }
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    // 국가코드 호출
    handleClickCountryCodeComp = () => { this.setState({ countryCodeCompPanel : true }); }
    // 금융기관코드 호출
    handleClickFicComp = () => { this.setState({ ficCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            categoryCompPanel : false,
            countryCodeCompPanel : false, 
            ficCompPanel : false, 
        });

        if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }
    }

    // 계좌정보입력 호출
    handleClickAccountInfoPop = () => { this.setState({ accountInfoPop : true }); }
    
    // 팝업 종료
    handleClickPopupClose = (state) => {
        this.setState({ 
            accountInfoPop : false,
        });
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('customerEditPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">고객사 수정</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 기본정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">기본정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='회사명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표자</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='대표자명을 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>사업자번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='사업자번호를 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>구분</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='구분을 지정해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCategoryComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>업태</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='업태를 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>업종</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='업종을 입력해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='대표번호를 입력해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>대표팩스</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='팩스번호를 입력해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사주소</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='회사주소를 입력해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickAddressComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput10} placeholder='상세주소를 입력해주세요.' onChange={(e) => this.setState({ textInput10: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>홈페이지</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput11} placeholder='홈페이지 주소를 입력해주세요.' onChange={(e) => this.setState({ textInput11: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>국가코드</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput12} placeholder='국가코드를 지정해주세요.' onChange={(e) => this.setState({ textInput12: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickCountryCodeComp}/>
                                </div>
                            </div>

                            {/* 계좌(금융)정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">계좌(금융)정보</div>
                                <div className="fnBtn h-box">
                                    <span className="plusBtn flex-1" onClick={this.handleClickAccountInfoPop}/>
                                </div>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dd><div className="txt">이더존 / 국민은행 742-051-3256</div></dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="minusBtn flex-1" />
                                </div>
                            </div>

                            {/* 연락처정보 */}
                            <div className="titleUnit h-box mt8">
                                <div className="titleText flex-1">연락처정보</div>
                                <div className="fnBtn h-box">
                                    <span className="plusBtn flex-1" />
                                </div>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dd><div className="txt">김초롱 / 회계팀 / 대리</div></dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="minusBtn flex-1" />
                                </div>
                            </div>
                            <div className="viewUnit h-box">
                                <dl className="v-box flex-1">
                                    <dd><div className="txt">박초롱 / 회계팀 / 사원</div></dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="minusBtn flex-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 구분 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.categoryCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerCategory'} />
                </PanelWrap>

                {/* 주소검색 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.addressCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <AddressComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 국가코드 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.countryCodeCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerCountryCode'} />
                </PanelWrap>

                {/* 계좌정보입력 */}
                <PopupWrap
                    Open={this.state.accountInfoPop} 
                    Close={this.handleClickPopupClose}
                >
                    <AccountInfoPop 
                        handleClickPopupClose={this.handleClickPopupClose}
                        handleClickFicComp={this.handleClickFicComp}
                    />
                </PopupWrap>

                {/* 금융기관 선택 */}
                <PanelWrap 
                    Type='bs'
                    zIndex='4'
                    Open={this.state.ficCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'customerFic'} />
                </PanelWrap>
            </Fragment>
        );
    }
}