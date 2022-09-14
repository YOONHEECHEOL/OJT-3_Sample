import React, { Component, Fragment } from 'react';

// 계좌정보 입력
export default class AccountInfoPop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                {/* 헤더 */}
                <div className="popupHeader">계좌정보 입력</div>
                {/* 컨텐츠 */}
                <div className="popupContents">
                    <div className="formBox">
                        <dl className="v-box flex-1">
                            <dt>금융기관</dt>
                            <dd className="flex-1 h-box">
                                <input type="text" className="inputField flex-1" value={this.state.accInfoInput01} placeholder='금융기관을 입력해주세요' onChange={(e) => this.setState({ accInfoInput01: e.target.value })}/>
                                <span className="moreBtn" onClick={this.props.handleClickFicComp}/>
                            </dd>
                        </dl>
                        <dl className="v-box flex-1">
                            <dt>계좌번호</dt>
                            <dd className="flex-1 h-box">
                                <input type="text" className="inputField flex-1" value={this.state.accInfoInput02} placeholder='계좌번호를 입력해주세요.' onChange={(e) => this.setState({ accInfoInput02: e.target.value })}/>
                            </dd>
                        </dl>
                        <dl className="v-box flex-1">
                            <dt>예금주</dt>
                            <dd className="flex-1 h-box">
                                <input type="text" className="inputField flex-1" value={this.state.accInfoInput03} placeholder='예금주를 입력해주세요.' onChange={(e) => this.setState({ accInfoInput03: e.target.value })}/>
                            </dd>
                        </dl>
                    </div>
                </div>
                {/* 버튼 */}
                <div className="popupBtn h-box">
                    <div className="grayBtn flex-1" onClick={this.props.handleClickPopupClose}>취소</div>
                    <div className="blueBtn flex-1" onClick={this.props.handleClickPopupClose}>확인</div>
                </div>
            </Fragment>
        );
    }
}


