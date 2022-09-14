import React, { Component, Fragment } from 'react';

// Lnb
export default class LnbComp extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="picDiv flex-1 h-box">
                            <div className="pic">
                                <img src={require("../../../www/images/temp/temp-user.png")} alt="" /> 
                            </div>
                            <div className="flex-1 v-box">
                                <div className="name ellipsis">김더존</div>
                                <div className="company ellipsis">더존비즈온</div>
                            </div>
                        </div>
                        <div className="rightFnDiv">
                            <span className="closeBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPanelClose();}} />
                            <span className="settingBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}} />
                        </div>
                    </div>
                    {/* 메뉴 */}
                    <div className="lnbMenu">
                        <dl>
                            <dt>주요업무</dt>
                            <dd onClick={()=>{this.props.handleClickPanelClose();this.props.handleCustomerLayoutCall();}}><span className="menuItem customer">고객사</span></dd>
                            <dd onClick={()=>{this.props.handleClickPanelClose();this.props.handleContactLayoutCall();}}><span className="menuItem contact">연락처</span></dd>
                        </dl>
                        <dl>
                            <dt>영업활동관리</dt>
                            <dd onClick={()=>{this.props.handleClickPanelClose();this.props.handleSalesLayoutCall();}}><span className="menuItem sales">영업활동</span></dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}


