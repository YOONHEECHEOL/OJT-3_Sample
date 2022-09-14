import React, { Component, Fragment } from 'react';

// 필터 (고객사,연락처)
export class FilterComp01 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 정렬항목
            alignItem01: true,
            alignItem02: false,
            alignItem03: false,
            alignItem04: false,

            // 체크항목 
            checkItem01 : true,
            checkItem02 : false,
            checkItem03 : true,
            checkItem04 : false,
        }
    }

    // 정렬
    handleClickAlignItem = (item) => {
        this.setState({ 
            alignItem01 : false , alignItem02 : false , alignItem03 : false , alignItem04 : false
        });
        if(item === 'alignItem01'){
            this.setState({ alignItem01 : true })
        }else if(item === 'alignItem02'){
            this.setState({ alignItem02 : true })
        }else if(item === 'alignItem03'){
            this.setState({ alignItem03 : true })
        }else if(item === 'alignItem04'){
            this.setState({ alignItem04 : true })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="titleDiv flex-1 h-box">
                            <span className="filterTitle">필터&정렬</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPanelClose();}}>확인</span>
                            <span className="refreshBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}} />
                        </div>
                    </div>
                    <div className="filterUnit flex-1 scroll_y_on">
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">정렬</div>
                            </dt>
                            <dd className="alignBox h-box">
                                <div className={`alignItem ${this.state.alignItem01 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem01');}}>등록순</div>
                                <div className={`alignItem ${this.state.alignItem02 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem02');}}>수정순</div>
                                <div className={`alignItem ${this.state.alignItem03 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem03');}}>회사명순</div>
                                <div className={`alignItem ${this.state.alignItem04 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem04');}}>최근활동순</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">영업진행여부</div>
                                <div className="sub">중복선택가능</div>
                            </dt>
                            <dd className={`h-box ${this.state.checkItem01 ? 'on':''}`} onClick={()=>this.setState({checkItem01:!this.state.checkItem01})}>
                                <div className="itemText flex-1">영업중</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem01 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem02 ? 'on':''}`} onClick={()=>this.setState({checkItem02:!this.state.checkItem02})}>
                                <div className="itemText flex-1">미진행</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem02 ? 'checked':''}`}/>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">거래여부</div>
                                <div className="sub">중복선택가능</div>
                            </dt>
                            <dd className={`h-box ${this.state.checkItem03 ? 'on':''}`} onClick={()=>this.setState({checkItem03:!this.state.checkItem03})}>
                                <div className="itemText flex-1">거래중</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem03 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem04 ? 'on':''}`} onClick={()=>this.setState({checkItem04:!this.state.checkItem04})}>
                                <div className="itemText flex-1">미거래</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem04 ? 'checked':''}`}/>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// 필터 (영업활동)
export class FilterComp02 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 정렬항목
            alignItem01: true,
            alignItem02: false,
            alignItem03: false,
            alignItem04: false,

            // 체크항목 
            checkItem01 : true,
            checkItem02 : false,
            checkItem03 : false,
            checkItem04 : false,
            checkItem05 : true,
            checkItem06 : false,
        }
    }

    // 정렬
    handleClickAlignItem = (item) => {
        this.setState({ 
            alignItem01 : false , alignItem02 : false , alignItem03 : false , alignItem04 : false 
        });
        if(item === 'alignItem01'){
            this.setState({ alignItem01 : true })
        }else if(item === 'alignItem02'){
            this.setState({ alignItem02 : true })
        }else if(item === 'alignItem03'){
            this.setState({ alignItem03 : true })
        }else if(item === 'alignItem04'){
            this.setState({ alignItem04 : true })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="titleDiv flex-1 h-box">
                            <span className="filterTitle">필터&정렬</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPanelClose();}}>확인</span>
                            <span className="refreshBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}} />
                        </div>
                    </div>
                    <div className="filterUnit flex-1 scroll_y_on">
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">정렬</div>
                            </dt>
                            <dd className="alignBox h-box">
                                <div className={`alignItem ${this.state.alignItem01 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem01');}}>등록순</div>
                                <div className={`alignItem ${this.state.alignItem02 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem02');}}>수정순</div>
                                <div className={`alignItem ${this.state.alignItem03 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem03');}}>회사명순</div>
                                <div className={`alignItem ${this.state.alignItem04 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem04');}}>최근활동순</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">영업진행여부</div>
                                <div className="sub">중복선택가능</div>
                            </dt>
                            <dd className={`h-box ${this.state.checkItem01 ? 'on':''}`} onClick={()=>this.setState({checkItem01:!this.state.checkItem01})}>
                                <div className="itemText flex-1">영업기회</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem01 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem02 ? 'on':''}`} onClick={()=>this.setState({checkItem02:!this.state.checkItem02})}>
                                <div className="itemText flex-1">고객발굴</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem02 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem03 ? 'on':''}`} onClick={()=>this.setState({checkItem03:!this.state.checkItem03})}>
                                <div className="itemText flex-1">영업성공</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem03 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem04 ? 'on':''}`} onClick={()=>this.setState({checkItem04:!this.state.checkItem04})}>
                                <div className="itemText flex-1">영업실패</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem04 ? 'checked':''}`}/>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">거래여부</div>
                                <div className="sub">중복선택가능</div>
                            </dt>
                            <dd className={`h-box ${this.state.checkItem05 ? 'on':''}`} onClick={()=>this.setState({checkItem05:!this.state.checkItem05})}>
                                <div className="itemText flex-1">내 기회</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem05 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem06 ? 'on':''}`} onClick={()=>this.setState({checkItem06:!this.state.checkItem06})}>
                                <div className="itemText flex-1">공유기회</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem06 ? 'checked':''}`}/>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// 필터 (타임라인)
export class FilterComp03 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 정렬항목
            alignItem01: false,
            alignItem02: true,

            // 체크항목 
            checkItem01 : true,
            checkItem02 : true,
            checkItem03 : true,
            checkItem04 : true,
            checkItem05 : true,
            checkItem06 : true,
        }
    }

    // 정렬
    handleClickAlignItem = (item) => {
        this.setState({ 
            alignItem01 : false , alignItem02 : false
        });
        if(item === 'alignItem01'){
            this.setState({ alignItem01 : true })
        }else if(item === 'alignItem02'){
            this.setState({ alignItem02 : true })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="titleDiv flex-1 h-box">
                            <span className="filterTitle">필터&정렬</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.props.handleClickPanelClose();}}>확인</span>
                            <span className="refreshBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}} />
                        </div>
                    </div>
                    <div className="filterUnit flex-1 scroll_y_on">
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">정렬</div>
                            </dt>
                            <dd className="alignBox h-box">
                                <div className={`alignItem ${this.state.alignItem01 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem01');}}>등록순</div>
                                <div className={`alignItem ${this.state.alignItem02 ? 'on':''}`} onClick={()=>{this.handleClickAlignItem('alignItem02');}}>활동일시순</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="h-box">
                                <div className="tit flex-1">활동유형</div>
                                <div className="sub">중복선택가능</div>
                            </dt>
                            <dd className={`h-box ${this.state.checkItem01 ? 'on':''}`} onClick={()=>this.setState({checkItem01:!this.state.checkItem01})}>
                                <div className="itemText flex-1">전화</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem01 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem02 ? 'on':''}`} onClick={()=>this.setState({checkItem02:!this.state.checkItem02})}>
                                <div className="itemText flex-1">팩스</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem02 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem03 ? 'on':''}`} onClick={()=>this.setState({checkItem03:!this.state.checkItem03})}>
                                <div className="itemText flex-1">메일</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem03 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem04 ? 'on':''}`} onClick={()=>this.setState({checkItem04:!this.state.checkItem04})}>
                                <div className="itemText flex-1">방문</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem04 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem05 ? 'on':''}`} onClick={()=>this.setState({checkItem05:!this.state.checkItem05})}>
                                <div className="itemText flex-1">견적</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem05 ? 'checked':''}`}/>
                                </div>
                            </dd>
                            <dd className={`h-box ${this.state.checkItem06 ? 'on':''}`} onClick={()=>this.setState({checkItem06:!this.state.checkItem06})}>
                                <div className="itemText flex-1">주문</div>
                                <div className="checkBox">
                                    <div className={`checkItem ${this.state.checkItem06 ? 'checked':''}`}/>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}


