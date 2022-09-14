import React, { Component, Fragment } from 'react';

// 품목 가격표 리스트
export default class SubjectPriceDetailsListComp extends Component {
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
                <div className="selList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 표준가</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-1</div>
                                        <div className="txt05">2,200,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-2</div>
                                        <div className="txt05">1,600,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 11유저 이상</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-3</div>
                                        <div className="txt05">1,200,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type4">유지보수</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-1</div>
                                        <div className="txt05">1,300,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type2">구축형</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-2</div>
                                        <div className="txt05">300,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 11유저 이상</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type1">구독</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-3</div>
                                        <div className="txt05">500,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type1">구독</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-1</div>
                                        <div className="txt05">1,300,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type2">구축형</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">Amaranth10-2</div>
                                        <div className="txt05">1,300,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    {/* 검색 결과가 없을때 */}
                    <div className="noSearch">검색 결과가 없습니다.</div> 
                </div>
            </Fragment>
        );
    }
}


