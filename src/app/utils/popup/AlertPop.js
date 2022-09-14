import React, { Component, Fragment } from 'react';

// 공통알림
export default class AlertPop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                {/* 컨텐츠 */}
                <div className="popupContents">
                    <div className="textBox">
                        고객사명을 입력해주세요.
                    </div>
                </div>
                {/* 버튼 */}
                <div className="popupBtn h-box">
                    <div className="blueBtn flex-1" onClick={this.props.handleClickPopupClose}>확인</div>
                </div>
            </Fragment>
        );
    }
}


