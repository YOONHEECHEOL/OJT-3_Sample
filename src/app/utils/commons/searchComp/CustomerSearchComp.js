import React, { Component, Fragment } from 'react';

// 고객사 검색리스트
export default class CustomerSearchComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 데이터 없을때
            emptyData: false,
        }
    }

    render() {
        return (
            <Fragment>
                <div className="cardList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">아임사이언스</div>
                                        <div className="customerStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01 flex-1">101-12-44885</div>
                                        <div className="customerStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico on"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
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
                                    <span className="ico on"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
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
                                    <span className="ico on"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">우리상사</span></div>
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
                                    <span className="ico"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    <div className="noSearch">검색된 고객사 정보가 없습니다.</div>
                </div>
            </Fragment>
        );
    }
}


