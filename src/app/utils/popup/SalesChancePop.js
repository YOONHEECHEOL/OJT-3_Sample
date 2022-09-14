import React, { Component, Fragment } from 'react';

// 기회할당
export class SalesChancePop01 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 버튼상태
            accept:true,
            giveUp:false,
        }
    }

    handleClickAccept = () =>{
        this.setState({accept:true , giveUp:false});
        this.props.handleClickPopupClose();
    }
    handleClickGiveUp = () =>{
        this.setState({giveUp:true , accept:false})
        this.props.handleClickPopupClose();
    }

    render() {
        return (
            <Fragment>
                <div className="popupContents">
                    <div className="salesChancePopBox v-box">
                        <div className="btnDiv h-box">
                            <span className="closeBtn" onClick={this.props.handleClickPopupClose}/>
                        </div>
                        <div className="selectChance h-box">
                            <div className={`item blue ${this.state.accept ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickAccept();}}>영업기회 수락</div>
                            <div className={`item red  ${this.state.giveUp ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickGiveUp();this.props.handleClickSalesChanceGiveUp();}}>영업기회 포기</div>
                        </div>
                        <dl>
                            <dt>영업기회 할당 선택</dt>
                            <dd>관리자를 통해서 할당 받은</dd>
                            <dd>영업활동 영업기회입니다.</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// 고객발굴
export class SalesChancePop02 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    render() {
        return (
            <Fragment>
                <div className="popupContents">
                    <div className="salesChancePopBox v-box">
                        <div className="btnDiv h-box">
                            <span className="closeBtn" onClick={this.props.handleClickPopupClose}/>
                        </div>
                        <div className="selectChance h-box">
                            <div className="item blue on" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPopupClose();}}>영업기회 수락</div>
                        </div>
                        <dl>
                            <dt>영업기회 프로모션 할당</dt>
                            <dd>관리자를 통해서 재 할당 받은</dd>
                            <dd>마케팅캠페인 프로모션 건 입니다.</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// 프로모션
export class SalesChancePop03 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="popupContents">
                    <div className="salesChancePopBox v-box">
                        <div className="btnDiv h-box">
                            <span className="closeBtn" onClick={this.props.handleClickPopupClose}/>
                        </div>
                        <div className="selectChance h-box">
                            <div className="item promotion" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPopupClose();this.props.handleClickModeDV2D();}}>프로모션 확인</div>
                        </div>
                        <dl>
                            <dt>캠페인 프로모션 알림</dt>
                            <dd>적용 가능한 프로모션이 진행중입니다.</dd>
                            <dd>확인 후 영업진행하세요.</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}


