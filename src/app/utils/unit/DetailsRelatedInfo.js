import React, { Component, Fragment } from 'react';

// 관련정보
export class DetailsRelatedInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 토글
            toggleArrow01 : true,
            toggleArrow02 : true,
            toggleArrow03 : true,
            toggleArrow04 : true,
        }
    }

    render() {
        return (
            <Fragment>
                {/* 연락처 */}
                <div className="relatedUnit contactList v-box">
                    <div className="titleBox h-box" onClick={()=>this.setState({toggleArrow01:!this.state.toggleArrow01})}>
                        <div className="tit flex-1">연락처<span className="cnt">5</span></div>
                        <div className="fnBtn">
                            <span className={`addBtn flex-1`} onClick={(e)=>{e.stopPropagation();e.preventDefault();}} />
                            <span className={`arrBtn flex-1 ${this.state.toggleArrow01 ? 'up':'down'}`} />
                        </div>
                    </div>
                    <div className="listBox" style={{display:this.state.toggleArrow01 ? '':'none'}}>
                        <ul>
                            <li className="h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">김초롱</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">회계팀</div>
                                        <div className="line"/>
                                        <div className="txt01">대리</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">김초롱</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">회계팀</div>
                                        <div className="line"/>
                                        <div className="txt01">대리</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-pic" />
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">김초롱</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">회계팀</div>
                                        <div className="line"/>
                                        <div className="txt01">대리</div>
                                        <div className="line"/>
                                        <div className="txt01 flex-1">010-6490-0569</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="moreBox h-box">
                            <span className="cnt">5</span>
                            <span className="txt">개의 연락처 전체보기</span>
                            <span className="btn" />
                        </div>
                    </div>
                </div>

                {/* 영업기회 */}
                <div className="relatedUnit chanceList v-box">
                    <div className="titleBox h-box" onClick={()=>this.setState({toggleArrow02:!this.state.toggleArrow02})}>
                        <div className="tit flex-1">영업기회<span className="cnt">5</span></div>
                        <div className="fnBtn">
                            <span className={`arrBtn flex-1 ${this.state.toggleArrow02 ? 'up':'down'}`} />
                        </div>
                    </div>
                    <div className="listBox" style={{display:this.state.toggleArrow02 ? '':'none'}}>
                        <ul>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox">
                                            <div className="type1">영업기회</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="salesStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                        <div className="txt01">만료일</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox">
                                            <div className="type2">고객발굴</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="salesStateTxt">
                                            <div className="type1">미진행</div>
                                        </div>
                                        <div className="txt01">만료일</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                        <div className="salesStateBox">
                                            <div className="type3">영업성공</div>
                                        </div>
                                    </div>
                                    <div className="h-box">
                                        <div className="salesStateTxt">
                                            <div className="type2">영업중</div>
                                        </div>
                                        <div className="txt01">만료일</div>
                                        <div className="line"/>
                                        <div className="txt02 flex-1">2021.05.14</div>
                                        <div className="txt01">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="moreBox h-box" onClick={this.props.handleClickSalesChance}>
                            <span className="cnt">5</span>
                            <span className="txt">개의 영업기회 전체보기</span>
                            <span className="btn" />
                        </div>
                    </div>
                </div>
                
                {/* 견적 */}
                <div className="relatedUnit estimateList v-box">
                    <div className="titleBox h-box" onClick={()=>this.setState({toggleArrow03:!this.state.toggleArrow03})}>
                        <div className="tit flex-1">견적<span className="cnt">5</span></div>
                        <div className="fnBtn">
                            <span className={`arrBtn flex-1 ${this.state.toggleArrow03 ? 'up':'down'}`} />
                        </div>
                    </div>
                    <div className="listBox" style={{display:this.state.toggleArrow03 ? '':'none'}}>
                        <ul>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 견적건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">만료일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 견적건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">만료일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 견적건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">만료일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="moreBox h-box">
                            <span className="cnt">5</span>
                            <span className="txt">개의 견적 전체보기</span>
                            <span className="btn" />
                        </div>
                    </div>
                </div>
                
                {/* 주문 */}
                <div className="relatedUnit orderList v-box">
                    <div className="titleBox h-box" onClick={()=>this.setState({toggleArrow04:!this.state.toggleArrow04})}>
                        <div className="tit flex-1">주문<span className="cnt">5</span></div>
                        <div className="fnBtn">
                            <span className={`arrBtn flex-1 ${this.state.toggleArrow04 ? 'up':'down'}`} />
                        </div>
                    </div>
                    <div className="listBox" style={{display:this.state.toggleArrow04 ? '':'none'}}>
                        <ul>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 주문건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">주문일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 주문건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">주문일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                            <li className="h-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">1차 주문건</div>
                                        <div className="txt02">Amaranth10 회계</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt02">주문일</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">2021.05.14</div>
                                        <div className="txt02">김영묵대리</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="moreBox h-box">
                            <span className="cnt">5</span>
                            <span className="txt">개의 주문 전체보기</span>
                            <span className="btn" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
