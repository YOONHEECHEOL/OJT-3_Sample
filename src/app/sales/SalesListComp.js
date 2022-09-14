import React, { Component, Fragment } from 'react';

// 영업활동 리스트
export default class SalesListComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 즐겨찾기 (임시)
            cardBmk01 : false,
            cardBmk02 : false,
            cardBmk03 : true,

            // 리스트 아이템 (임시)
            listItem01 : false,
            listItem02 : false,
            listItem03 : false,

            // 플로팅버튼
            addMore: false,
        }
    }

    // 즐겨찾기 토글
    handleChangeCardBmk = (num) => { 
        if(num === 1){
            if (!this.state.cardBmk01) {
                this.setState({ cardBmk01: true });
            } else {
                this.setState({ cardBmk01: false });
            }
        }else if(num === 2){
            if (!this.state.cardBmk02) {
                this.setState({ cardBmk02: true });
            } else {
                this.setState({ cardBmk02: false });
            }
        }else if(num === 3){
            if (!this.state.cardBmk03) {
                this.setState({ cardBmk03: true });
            } else {
                this.setState({ cardBmk03: false });
            }
        }
    }

    // 리스트 on 이벤트
    handleChangeListItem = (num) => {
        this.setState({ listItem01: false, listItem02: false, listItem03: false }) 
        
        if(num === 1){
            this.setState({ listItem01: true }) 
        }else if(num === 2){
            this.setState({ listItem02: true }) 
        }else if(num === 3){
            this.setState({ listItem03: true }) 
        }
    }

    // 플로팅버튼 토글
    handleChangeFloatingBtn = () => { 
        if (!this.state.addMore) {
            this.setState({ addMore: true });
        } else {
            this.setState({ addMore: false });
        }
    }

    // 플로팅버튼 닫기
    handleCloseFloatingBtn = () => { 
        this.setState({ addMore: false });
    }

    render() {
        return (
            <Fragment>
                <div className="cardList pt0 pb0 flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        {/* 개발 샘플 */}
                        <li>
                            <div className={`cardDiv h-box ${this.state.listItem01 ? 'on':''}`} onClick={()=>{this.handleChangeListItem(1);this.props.handleClickChanceAssignment();}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        {/* type1:영업기회 / type2:고객발굴 / type3:영업성공 / type4:영업실패 / type5:기회할당 */}
                                        <div className="salesStateBox mr5 dot">
                                            <div className="type5">기회할당</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleChangeCardBmk(1);}}>
                                    <span className={`ico ${this.state.cardBmk01 ? 'on':''}`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box ${this.state.listItem02 ? 'on':''}`} onClick={()=>{this.handleChangeListItem(2);this.props.handleClickModeDV2D();}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        {/* type1:영업기회 / type2:고객발굴 / type3:영업성공 / type4:영업실패 / type5:기회할당 */}
                                        <div className="salesStateBox mr5">
                                            <div className="type1">영업기회</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleChangeCardBmk(2);}}>
                                    <span className={`ico ${this.state.cardBmk02 ? 'on':''}`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box ${this.state.listItem03 ? 'on':''}`} onClick={()=>{this.handleChangeListItem(3);this.props.handleClickPromotionAssignment();}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        {/* type1:영업기회 / type2:고객발굴 / type3:영업성공 / type4:영업실패 / type5:기회할당 */}
                                        <div className="salesStateBox mr5 dot">
                                            <div className="type2">고객발굴</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleChangeCardBmk(3);}}>
                                    <span className={`ico ${this.state.cardBmk03 ? 'on':''}`} />
                                </div>
                            </div>
                        </li>
                        {/* 퍼블리싱 예시 */}
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 신규고객발굴</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type4">영업실패</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type1">영업기회</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type2">고객발굴</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01 mr5">김영묵대리</div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico`} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    <div className="noList">등록된 영업활동 정보가 없습니다.</div>
                </div>
                {/* 플로팅 버튼 */}
                <div className="floatingBtnBox">
                    <div className="detailBtns">
                        <span className={`addBtn ${this.state.addMore ? 'open':''}`} onClick={this.handleChangeFloatingBtn}/>
                        <span className="userPlusBtn slideInUp btnIdx_1" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.props.handleClickCustomerDiscoveryAdd();}}><span>고객발굴</span></span>
                        <span className="brifBtn slideInUp btnIdx_2" style={{display:this.state.addMore ? '':'none'}} onClick={()=>{this.handleCloseFloatingBtn();this.props.handleClickSalesChanceAdd();}}><span>영업기회</span></span>
                    </div>
                    <div className="dim animated03s fadeIn" style={{display:this.state.addMore ? '':'none'}} onClick={this.handleCloseFloatingBtn}/>
                </div>
                {/* todo more layer */}
            </Fragment>
        );
    }
}


