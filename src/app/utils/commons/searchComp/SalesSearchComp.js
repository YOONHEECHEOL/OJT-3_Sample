import React, { Component, Fragment } from 'react';

// 영업활동 검색리스트
export default class SalesSearchComp extends Component {
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
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
                                        <div className="salesStateBox mr5">
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
                                <div className="list-bmk">
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 신규고객발굴</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">Amaranth10</span> 업셀영업 1차</div>
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
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    <div className="noSearch">검색된 영업활동 정보가 없습니다.</div>
                </div>
            </Fragment>
        );
    }
}


