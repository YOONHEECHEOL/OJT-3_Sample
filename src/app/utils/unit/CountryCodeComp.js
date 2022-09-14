import React, { Component, Fragment } from 'react';

// 국가코드
export default class CountryCodeComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 선택 예시
            select01 : false,
            select02 : false,
            select03 : false,
            select04 : false,
        }
    }

    // 탭
    handleSelectCode = (select) => {
        this.setState({ 
            select01: false, select02: false, select03: false, select04: false
        })
        
        if(select === '1'){
            this.setState({ select01: true})
        }else if(select === '2'){
            this.setState({ select02: true})
        }else if(select === '3'){
            this.setState({ select03: true})
        }else if(select === '4'){
            this.setState({ select04: true})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="titleBox">
                    <div className="title">국가코드</div>
                </div>
                <div className="flex-1 scroll_y_on">
                    <ul>
                        <li onClick={()=>{this.handleSelectCode('1');}}><div className={`menuItem p0 ${this.state.select01 ? 'selectOn':''}`}>AD.안도라</div></li>
                        <li onClick={()=>{this.handleSelectCode('2');}}><div className={`menuItem p0 ${this.state.select02 ? 'selectOn':''}`}>AE.아랍에미리트연합</div></li>
                        <li onClick={()=>{this.handleSelectCode('3');}}><div className={`menuItem p0 ${this.state.select03 ? 'selectOn':''}`}>AF.아프가니스탄</div></li>
                        <li onClick={()=>{this.handleSelectCode('4');}}><div className={`menuItem p0 ${this.state.select04 ? 'selectOn':''}`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                        <li><div className={`menuItem p0`}>AG.안티가바부다</div></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}


