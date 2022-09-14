import React, { Component, Fragment } from 'react';
import MenuSheetComp from '../commons/MenuSheetComp';
import PanelWrap from '../commons/PanelWrap';
import AddressComp from './AddressComp';
import ContactSelectComp from './ContactSelectComp';
import PhoneNumberSelectComp from './PhoneNumberSelectComp';
import TransmissionSettingsComp from './TransmissionSettingsComp';

// 활동일정 등록
export default class SalesActivityAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput01: '',
            textInput02: '2022.06.09',
            textInput03: '',
            textInput04: '',
            textInput05: '김유신',
            textInput06: '',
            textInput07: '',
            textInput08: '',
            textInput09: '',
            textInput10: '',
            textInput11: '',
            textInput12: '',
            textInput13: '',
            textInput14: '',
            textInput15: '',
            textInput16: '',
            textInput17: '',
            textInput18: '',
            textInput19: '',
            textInput20: '',
            multiText: '',

            // 전송설정값
            transmissionSettings:'',

            // 패널 모드
            contactSelectCompPanel          : false,          // 고객담당자 선택
            phoneNumberSelectCompPanel      : false,          // 전화번호 선택
            sendFaxNumberSelectCompPanel    : false,          // 보낼 팩스번호 선택
            receiveFaxNumberSelectCompPanel : false,          // 받을 팩스번호 선택
            sendMailSelectCompPanel         : false,          // 보낼 메일주소 선택
            receiveMailSelectCompPanel      : false,          // 받을 메일주소 선택
            referenceMailSelectCompPanel    : false,          // 참조 메일주소 선택
            customerContactSelectCompPanel  : false,          // 고객사연락처 선택
            locationSelectCompPanel         : false,          // 장소 선택
            addressCompPanel                : false,          // 주소검색
            transmissionSettingsCompPanel   : false,          // 전송설정
        }
    }

    // 고객사명 선택 호출
    handleClickContactSelectComp = () => { this.setState({ contactSelectCompPanel : true }); }
    // 전화번호 선택 호출
    handleClickPhoneNumberSelectComp = () => { this.setState({ phoneNumberSelectCompPanel : true }); }
    // 보낼 팩스번호 선택 호출
    handleClickSendFaxNumberSelectComp = () => { this.setState({ sendFaxNumberSelectCompPanel : true }); }
    // 받을 팩스번호 선택 호출
    handleClickReceiveFaxNumberSelectComp = () => { this.setState({ receiveFaxNumberSelectCompPanel : true }); }
    // 보낼 메일주소 선택 호출
    handleClickSendMailSelectComp = () => { this.setState({ sendMailSelectCompPanel : true }); }
    // 받을 메일주소 선택 호출
    handleClickReceiveMailSelectComp = () => { this.setState({ receiveMailSelectCompPanel : true }); }
    // 참조 메일주소 선택 호출
    handleClickReferenceMailSelectComp = () => { this.setState({ referenceMailSelectCompPanel : true }); }
    // 고객사연락처 선택 호출
    handleClickCustomerContactSelectComp = () => { this.setState({ customerContactSelectCompPanel : true }); }
    // 장소 선택 호출
    handleClickLocationSelectComp = () => { this.setState({ locationSelectCompPanel : true }); }
    // 주소검색 호출
    handleClickAddressComp = () => { this.setState({ addressCompPanel : true }); }
    // 전송설정 호출
    handleClickTransmissionSettingsComp = () => { this.setState({ transmissionSettingsCompPanel : true }); }
    
    // 패널 종료
    handleClickPanelClose = (state) => {
        this.setState({
            sendFaxNumberSelectCompPanel:false,
            receiveFaxNumberSelectCompPanel:false,
            sendMailSelectCompPanel:false,
            receiveMailSelectCompPanel:false,
            referenceMailSelectCompPanel:false,
            customerContactSelectCompPanel:false,
            locationSelectCompPanel:false,
        });
        if(state === 'contactSelectCompPanel' ){
            this.setState({ contactSelectCompPanel : false });
        }else if(state === 'phoneNumberSelectCompPanel' ){
            this.setState({ phoneNumberSelectCompPanel : false });
        }else if(state === 'addressCompPanel' ){
            this.setState({ addressCompPanel : false });
        }else if(state === 'transmissionSettingsCompPanel' ){
            this.setState({ transmissionSettingsCompPanel : false });
        }
    }

    // 전송설정값 설정
    handleTransmissionSettingsValue = (type) => {
        if(type === '1'){
            this.setState({transmissionSettings:'즉시전송'})
        }else if(type === '2'){
            this.setState({transmissionSettings:'예약전송'})
        }else if(type === '3'){
            this.setState({transmissionSettings:'미전송'})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="closeBtn" onClick={()=>{this.props.handleClickPanelClose('salesActivityAddPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">활동일정</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlueBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>등록</span>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="basicContents">
                            {/* 활동정보 */}
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">활동정보</div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>활동명<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput01} placeholder='활동명을 입력해주세요.' onChange={(e) => this.setState({ textInput01: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>활동일자<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput02} placeholder='활동일자를 선택해주세요.' onChange={(e) => this.setState({ textInput02: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="calBtn flex-1"/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>활동시간<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput03} placeholder='활동시간을 선택해주세요.' onChange={(e) => this.setState({ textInput03: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="timeBtn flex-1"/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객사<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput04} placeholder='고객사를 입력해주세요.' onChange={(e) => this.setState({ textInput04: e.target.value })}/>
                                    </dd>
                                </dl>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>고객담당<span className="imp">*</span></dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput05} placeholder='고객담당자를 입력해주세요.' onChange={(e) => this.setState({ textInput05: e.target.value })}/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="addBtn flex-1" onClick={this.handleClickContactSelectComp}/>
                                </div>
                            </div>
                            <div className="editUnit h-box">
                                <dl className="v-box flex-1">
                                    <dt>첨부파일</dt>
                                    <dd className="flex-1 h-box">
                                        <input type="text" className="inputField flex-1" value={this.state.textInput06} placeholder='첨부파일을 선택해주세요.' onChange={(e) => this.setState({ textInput06: e.target.value })} readOnly/>
                                    </dd>
                                </dl>
                                <div className="fnBtn h-box">
                                    <span className="fileBtn flex-1"/>
                                </div>
                            </div>
                            <div className="editUnit h-box flex-1">
                                <dl className="v-box flex-1">
                                    <dt>활동내용</dt>
                                    <dd className="flex-1 h-box">
                                        <textarea className="multiText flex-1" placeholder="내용을 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                    </dd>
                                </dl>
                            </div>
                            {/* 활동타입 - 전화 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'phone' ? '':'none'}}>
                                <div className="viewUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">전화</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전화번호<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput07} placeholder='전화번호를 선택해주세요.' onChange={(e) => this.setState({ textInput07: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickPhoneNumberSelectComp}/>
                                    </div>
                                </div>
                            </div>
                            {/* 활동타입 - 팩스 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'fax' ? '':'none'}}>
                                <div className="viewUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">팩스</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송설정</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.transmissionSettings} placeholder='전송설정을 선택해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickTransmissionSettingsComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box" style={{display:this.state.transmissionSettings === '예약전송' ? '':'none'}}>
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송시간<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='전송시간을 선택해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="timeBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">보낼번호<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput10} placeholder='보낼 팩스번호를 선택해주세요.' onChange={(e) => this.setState({ textInput10: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickSendFaxNumberSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">받을번호<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput11} placeholder='받을 팩스번호를 선택해주세요.' onChange={(e) => this.setState({ textInput11: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickReceiveFaxNumberSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">제목</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput12} placeholder='제목을 입력해주세요.' onChange={(e) => this.setState({ textInput12: e.target.value })}/>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>전송문서<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput13} placeholder='전송문서를 선택해주세요.' onChange={(e) => this.setState({ textInput13: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="fileBtn flex-1"/>
                                    </div>
                                </div>
                            </div>
                            {/* 활동타입 - 메일 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'mail' ? '':'none'}}>
                                <div className="viewUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">메일</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송설정</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.transmissionSettings} placeholder='전송설정을 선택해주세요.' onChange={(e) => this.setState({ textInput08: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickTransmissionSettingsComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box" style={{display:this.state.transmissionSettings === '예약전송' ? '':'none'}}>
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전송시간<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput09} placeholder='전송시간을 선택해주세요.' onChange={(e) => this.setState({ textInput09: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="timeBtn flex-1"/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">보내는사람<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput14} placeholder='보낼 메일주소를 선택해주세요.' onChange={(e) => this.setState({ textInput14: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickSendMailSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">받는사람<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput15} placeholder='받을 메일주소를 선택해주세요.' onChange={(e) => this.setState({ textInput15: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickReceiveMailSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">참조</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput16} placeholder='참조를 선택해주세요.' onChange={(e) => this.setState({ textInput16: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickReferenceMailSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">숨은참조</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput17} placeholder='숨은참조를 선택해주세요.' onChange={(e) => this.setState({ textInput17: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickReferenceMailSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">메일제목</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput18} placeholder='제목을 입력해주세요.' onChange={(e) => this.setState({ textInput18: e.target.value })}/>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">메일내용</dt>
                                        <dd className="flex-1 h-box">
                                            <textarea className="multiText flex-1" placeholder="내용을 입력해주세요." onChange={(e) => this.setState({ multiText : e.target.value })}>{this.state.multiText}</textarea>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="v-box flex-1">
                                        <dt>전송문서</dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput13} placeholder='전송문서를 선택해주세요.' onChange={(e) => this.setState({ textInput13: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="fileBtn flex-1"/>
                                    </div>
                                </div>
                            </div>
                            {/* 활동타입 - 방문 ---------------------------------------------------------------------------------------------------- */}
                            <div style={{display:this.props.salesActivityType === 'visit' ? '':'none'}}>
                                <div className="viewUnit h-box" style={{borderTop:'1px solid rgba(60, 60, 67, 0.06)'}}>
                                    <dl className="v-box flex-1">
                                        <dt>활동유형</dt>
                                        <dd>
                                            <div className="txt text_blue">방문</div>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">전화번호<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput19} placeholder='전화번호를 선택해주세요.' onChange={(e) => this.setState({ textInput19: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickPhoneNumberSelectComp}/>
                                    </div>
                                </div>
                                <div className="editUnit h-box">
                                    <dl className="h-box flex-1">
                                        <dt className="h-box">방문장소<span className="imp">*</span></dt>
                                        <dd className="flex-1 h-box">
                                            <input type="text" className="inputField flex-1" value={this.state.textInput20} placeholder='장소 또는 주소를 선택해주세요.' onChange={(e) => this.setState({ textInput20: e.target.value })} readOnly/>
                                        </dd>
                                    </dl>
                                    <div className="fnBtn h-box">
                                        <span className="addBtn flex-1" onClick={this.handleClickLocationSelectComp}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 고객담당자 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.contactSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <ContactSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 전화번호 선택 */}
                <PanelWrap
                    Type='sub' 
                    Open={this.state.phoneNumberSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <PhoneNumberSelectComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 보낼팩스번호 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.sendFaxNumberSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'sendFaxNumberSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 받을팩스번호 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.receiveFaxNumberSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'receiveFaxNumberSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 보낼메일주소 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.sendMailSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'sendMailSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 받을메일주소 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.receiveMailSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'receiveMailSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 참조메일주소 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.referenceMailSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'referenceMailSelect'} 
                        Close={this.handleClickPanelClose}
                        handleClickCustomerContactSelectComp={this.handleClickCustomerContactSelectComp}
                    />
                </PanelWrap>

                {/* 고객사연락처 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.customerContactSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'customerContactSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>

                {/* 장소 선택 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.locationSelectCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp 
                        type={'locationSelect'} 
                        Close={this.handleClickPanelClose}
                        handleClickAddressComp={this.handleClickAddressComp}
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

                {/* 전송설정 */}
                <PanelWrap 
                    Type='sub' 
                    Open={this.state.transmissionSettingsCompPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <TransmissionSettingsComp 
                        handleClickPanelClose={this.handleClickPanelClose}
                        handleTransmissionSettingsValue={this.handleTransmissionSettingsValue}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


