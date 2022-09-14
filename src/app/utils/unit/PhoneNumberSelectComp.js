import React, { Component, Fragment } from 'react';

// 전화번호 선택
export default class PhoneNumberSelectComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {

            // input
            inputFocus01: false,
            inputFocus02: false,
            searchInput01:'',
            searchInput02:'',
            error: false,
            
            // radio idx
            radioIdx01: false,
            radioIdx02: false,
        }
    }

    // 라디오 셀렉트
    handleClickRadio = (type) => {
        if (type === '1') {
            this.setState({radioIdx01: true, radioIdx02: false})
        }else if (type === '2') {
            this.setState({radioIdx01: false, radioIdx02: true})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('phoneNumberSelectCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">전화번호 선택</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
                        </div>
                    </div>

                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        {/* 전화번호 선택 */}
                        <div className="numberAddWrap h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('1');}}>
                            <div className='flex-1 v-box'>
                                <div className='inputBox flex-1 h-box'>
                                    <div className='text'>휴대폰</div>
                                    <div className={`checkIco ${this.state.error ? 'err':'suc'}`} style={{display: this.state.searchInput01 ? '':'none'}}/>
                                </div>
                                <input type='text' ref={this.searchRef} className='inputField flex-1' value={this.state.searchInput01} placeholder='휴대폰 번호를 입력해주세요.' onChange={(e) => this.setState({ searchInput01: e.target.value })} onFocus={(e) => this.setState({inputFocus01:true})} onBlur={(e) => this.setState({inputFocus01:false})}/>
                            </div>
                            <div className="list-radio h-box">
                                <span className={`ico ${this.state.searchInput01 ? 'normal':'disabled'} ${this.state.radioIdx01 ? 'on':''}`} />
                            </div>
                        </div>
                        <div className="numberAddWrap h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('2');}}>
                            <div className='flex-1 v-box'>
                                <div className='inputBox flex-1 h-box'>
                                    <div className='text'>유선전화</div>
                                    <div className={`checkIco ${this.state.error ? 'err':'suc'}`} style={{display: this.state.searchInput02 ? '':'none'}}/>
                                </div>
                                <input type='text' ref={this.searchRef} className='inputField flex-1' value={this.state.searchInput02} placeholder='유선전화 번호를 입력해주세요.' onChange={(e) => this.setState({ searchInput02: e.target.value })} onFocus={(e) => this.setState({inputFocus02:true})} onBlur={(e) => this.setState({inputFocus02:false})}/>
                            </div>
                            <div className="list-radio h-box">
                                <span className={`ico ${this.state.searchInput02 ? 'normal':'disabled'} ${this.state.radioIdx02 ? 'on':''}`} />
                            </div>
                        </div>

                        {/* 참고사항 */}
                        <div className='referBox flex-1 v-box'>
                            <div className='title'>참고사항</div>
                            <div className='referList h-box mt8'>
                                <div className='acc'/><p>전화번호는 휴대폰번호 1건, 유선전화번호 1건만 등록이 가능합니다.</p>
                            </div>
                            <div className='referList h-box'>
                                <div className='acc'/><p>해당 화면에서 입력하는 정보는 연락처에 반영됩니다.</p>
                            </div>
                            <div className='referList h-box'>
                                <div className='acc'/><p>기등록한 번호를 수정하면 연락처에 업데이트 됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


