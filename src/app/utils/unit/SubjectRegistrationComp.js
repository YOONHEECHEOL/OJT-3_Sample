import React, { Component, Fragment } from 'react';

// 품목등록
export default class SubjectRegistrationComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 선택 예시
            select01 : false,
            select02 : false,
            select03 : false,
        }
    }

    // 탭
    handleSelectCode = (select) => {
        this.setState({ 
            select01: false, select02: false, select03: false
        })
        
        if(select === '1'){
            this.setState({ select01: true})
        }else if(select === '2'){
            this.setState({ select02: true})
        }else if(select === '3'){
            this.setState({ select03: true})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="titleBox">
                    <div className="title">품목등록</div>
                </div>
                <div className="flex-1">
                    <ul>
                        <li onClick={()=>{setTimeout(()=>{this.props.Close();this.props.handleClickSubjectPriceComp()},300);this.handleSelectCode('1');}}><div className={`menuItem p0 ${this.state.select01 ? 'selectOn':''}`}>가격표 불러오기</div></li>
                        <li onClick={()=>{setTimeout(()=>{this.props.Close();this.props.handleClickSubjectCampaignComp()},300);this.handleSelectCode('2');}}><div className={`menuItem p0 ${this.state.select02 ? 'selectOn':''}`}>캠페인 불러오기</div></li>
                        <li onClick={()=>{setTimeout(()=>{this.props.Close();this.props.handleClickSubjectSelectComp()},300);this.handleSelectCode('3');}}><div className={`menuItem p0 ${this.state.select03 ? 'selectOn':''}`}>직접 입력하기</div></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}


