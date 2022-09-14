import React, { Component, Fragment } from 'react';

// 고객사 리스트
export default class CustomerListComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 즐겨찾기 (임시)
            cardBmk01 : false,

            // 리스트 아이템 (임시)
            listItem01 : false,
        }
    }

    // 즐겨찾기 토글
    handleChangeCardBmk01 = (num) => { 
        if(num === 1){
            if (!this.state.cardBmk01) {
                this.setState({ cardBmk01: true });
            } else {
                this.setState({ cardBmk01: false });
            }
        }
    }

    // 리스트 on 이벤트
    handleChangeListItem = (num) => {
        this.setState({ listItem01: false }) 
        
        if(num === 1){
            this.setState({ listItem01: true }) 
        }
    }

    render() {
        return (
            <Fragment>
                <div className="cardList pt0 pb0 flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        {/* 개발 샘플 */}
                        <li>
                            <div className={`cardDiv h-box ${this.state.listItem01 ? 'on':''}`} onClick={()=>{this.handleChangeListItem(1);this.props.handleClickModeDV2D();}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">아임사이언스</div>
                                        {/* type1:미거래 / type2:거래중 */}
                                        <div className="customerStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">101-12-44885</div>
                                        {/* type1:미진행 / type2:영업중 */}
                                        <div className="customerStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleChangeCardBmk01(1);}}>
                                    <span className={`ico ${this.state.cardBmk01 ? 'on':''}`} />
                                </div>
                            </div>
                        </li>
                        {/* 퍼블리싱 예시 */}
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">가나상사</div>
                                        <div className="customerStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">125-84-12412</div>
                                        <div className="customerStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico on`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">지엔씨스</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">101-12-44885</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">씨에스윈드</div>
                                        <div className="customerStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">110-14-05695</div>
                                        <div className="customerStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className={`ico on`} />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`cardDiv h-box`}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                                        <div className="title flex-1">우리상사</div>
                                        <div className="customerStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">111-11-11111</div>
                                        <div className="customerStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                    <div className="noList">등록된 고객사 정보가 없습니다.</div>
                </div>
                {/* 고객사 등록 */}
                <div className="floatingBtnBox">
                    <span className="addBtn" onClick={this.props.handleClickCustomerAdd}/>
                </div>
            </Fragment>
        );
    }
}


