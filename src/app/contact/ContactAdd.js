import React, { Component, Fragment } from 'react';
import PanelWrap from '../utils/commons/PanelWrap';
import AddressComp from '../utils/unit/AddressComp';
import MenuSheetComp from '../utils/commons/MenuSheetComp'

// 연락처 등록
export class ContactAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            multiText   : '',

            // 패널 모드
            nameCardAddPanel : false,          // 사진등록
            addressCompPanel : false,          // 주소검색
        }
    }

    // 사진등록 호출
    handleClickNameCardAdd = () => { this.setState({ nameCardAddPanel : true }); }
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    
    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            nameCardAddPanel : false 
        });

        if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('contactAddPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">연락처 등록</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        {/* 명함 */}
                        <div className="nameCardWrap">
                            <div className="nameCard">
                                {/* 명함 등록 후 
                                    <img src={require("../../www/images/temp/temp-name-card.png")} alt="" />  
                                */}
                                <div className="nameCardAdd" onClick={this.handleClickNameCardAdd}/>
                            </div>
                        </div>
                        {/* 정보입력 */}
                        <div className="basicContents">
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>이름<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='이름을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사명</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='회사명을 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>부서명</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='부서명을 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>직급</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='직급을 입력해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>휴대폰</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='휴대폰 번호를 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유선번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='유선번호를 입력해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>팩스</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='팩스번호를 입력해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>이메일</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='이메일주소를 입력해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })}/>
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
                                    <dt>비고</dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="비고를 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 사진등록 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.nameCardAddPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'nameCard'} 
                        handleClickPanelClose={this.handleClickPanelClose} 
                    />
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
            </Fragment>
        );
    }
}





// 연락처 수정
export class ContactEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01 : '김초롱',
            textInput02 : '아임사이언스',
            textInput03 : '회계팀',
            textInput04 : '대리',
            textInput05 : '010-6490-0569',
            textInput06 : '02-1234-5678',
            textInput07 : '02-1235-5679',
            textInput08 : 'kimdouzone@naver.com',
            textInput09 : '서울시 종로구 율곡로 10길 8',
            textInput10 : '서린빌딩 3층',
            multiText   : '제품에 관심 많음',

            // 패널 모드
            nameCardAddPanel : false,          // 사진등록
            addressCompPanel : false,          // 주소검색
        }
    }

    // 사진등록 호출
    handleClickNameCardAdd = () => { this.setState({ nameCardAddPanel : true }); }
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    
    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            nameCardAddPanel : false 
        });

        if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('contactEditPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">연락처 수정</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        {/* 명함 */}
                        <div className="nameCardWrap">
                            <div className="nameCard">
                                <img src={require("../../www/images/temp/temp-name-card.png")} alt="" />  
                                <div className="nameCardAdd" onClick={this.handleClickNameCardAdd}/>
                            </div>
                        </div>
                        {/* 정보입력 */}
                        <div className="basicContents">
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>이름<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='이름을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>회사명</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='회사명을 입력해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>부서명</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='부서명을 입력해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>직급</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='직급을 입력해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>휴대폰</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='휴대폰 번호를 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>유선번호</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='유선번호를 입력해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>팩스</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='팩스번호를 입력해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>이메일</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput08} placeholder='이메일주소를 입력해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })}/>
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
                                    <dt>비고</dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="비고를 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 사진등록 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.nameCardAddPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'nameCard'} 
                        handleClickPanelClose={this.handleClickPanelClose} 
                    />
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
            </Fragment>
        );
    }
}


