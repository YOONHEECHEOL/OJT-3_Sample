import React, { Component, Fragment } from 'react';

// 영업기회등록 알림확인
export default class ScConfirmPop extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                {/* 헤더 */}
                <div className="popupHeader">알림</div>
                {/* 컨텐츠 */}
                <div className="popupContents">
                    <div className="textBox">
                        [영업기회 등록]을 벗어나면 작성한 내용은<br />저장되지 않습니다.
                    </div>
                </div>
                {/* 버튼 */}
                <div className="popupBtn h-box">
                    <div className="grayBtn flex-1" onClick={this.props.handleClickPopupClose}>취소</div>
                    <div className="blueBtn flex-1" onClick={()=>{this.props.handleClickPopupClose();this.props.handleClickPanelClose('salesChanceAddPanel');}}>확인</div>
                </div>
            </Fragment>
        );
    }
}


