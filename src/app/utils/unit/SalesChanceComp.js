import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp'

// 영업기회 리스트
export default class SalesChanceComp extends Component {
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
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType1'
                        title='영업기회' 
                        handleClickBack={()=>{this.props.handleClickPanelClose('salesChancePanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType2`}>
                        <div className="itemList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                            <ul>
                                {/* 개발 샘플 */}
                                <li>
                                    <div className={`itemDiv h-box`} onClick={()=>{this.props.handleClickSalesChanceInfoDetails();}}>
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
                                    </div>
                                </li>
                                {/* 퍼블리싱 예시 */}
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                                <div className="salesStateBox">
                                                    <div className="type4">영업실패</div>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>                                
                                <li>
                                    <div className={`itemDiv h-box`}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                                <div className="salesStateBox">
                                                    <div className="type2">고객발굴</div>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                                <div className="salesStateBox">
                                                    <div className="type1">영업기회</div>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                                <div className="salesStateBox">
                                                    <div className="type2">고객발굴</div>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 업셀영업 1차</div>
                                                <div className="salesStateBox">
                                                    <div className="type1">영업기회</div>
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
                                    </div>
                                </li>
                                <li>
                                    <div className={`itemDiv h-box`}>
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
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 데이터 없을때 */}
                        <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                            <div className="noList">등록된 영업기회 정보가 없습니다.</div>
                        </div>                        
                    </div>
                </div>
            </Fragment>
        );
    }
}


