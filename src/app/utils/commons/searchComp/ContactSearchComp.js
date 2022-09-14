import React, { Component, Fragment } from 'react';

// 연락처 검색리스트
export default class ContactSearchComp extends Component {
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
                                <div className="list-pic">
                                    {/* 사용자 이미지 있을경우
                                        <img src={require("../../www/images/temp/temp-user.png")} alt="" /> 
                                    */}
                                </div>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type2">거래중</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico on" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-bmk">
                                    <span className="ico" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cardDiv h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1"><span className="matching">김초롱</span></div>
                                        <div className="contactStateBox">
                                            <div className="type1">미거래</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">우리상사</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                        <div className="contactStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
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
                    <div className="noSearch">검색된 연락처 정보가 없습니다.</div>
                </div>
            </Fragment>
        );
    }
}


