import React, { Component, Fragment } from 'react';

// 품목상세정보 입력
export default class SubjectDetailsPop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectInput01: '1',
            subjectInput02: '0',

        }
    }

    render() {
        return (
            <Fragment>
                {/* 헤더 */}
                <div className="popupHeader">품목상세정보</div>
                {/* 컨텐츠 */}
                <div className="popupContents">
                    <div className="formBox">
                        <dl className="v-box flex-1">
                            <dt>품목수량</dt>
                            <dd className="flex-1 h-box">
                                <input type="text" className="inputField flex-1" value={this.state.subjectInput01} placeholder='수량을 입력해주세요' onChange={(e) => this.setState({ subjectInput01: e.target.value })}/>
                            </dd>
                        </dl>
                        <dl className="v-box flex-1">
                            <dt>할인율(%)</dt>
                            <dd className="flex-1 h-box">
                                <input type="text" className="inputField flex-1" value={this.state.subjectInput02} placeholder='할인율을 입력해주세요.' onChange={(e) => this.setState({ subjectInput02: e.target.value })}/>
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


