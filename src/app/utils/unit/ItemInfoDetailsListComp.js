import React, { Component, Fragment } from 'react';

// 품목정보 리스트
export default class ItemInfoDetailsListComp extends Component {
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
                                        <div className="title flex-1">Enterprise Business Platform(EBP) 영리형</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400001</div>
                                        <div className="txt05">45,000,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">유저 라이센스</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400002</div>
                                        <div className="txt05">1,600,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">구축/교육비 구축 컨설팅형</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type3">판매</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400003</div>
                                        <div className="txt05">10,000,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">구축/교육비 FoEX 구축형</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type4">유지보수</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400004</div>
                                        <div className="txt05">5,000,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">SSL 인증서</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type2">구축형</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400005</div>
                                        <div className="txt05">300,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth 10 전용 방화벽</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type1">구독</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400006</div>
                                        <div className="txt05">1,200,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">법인추가</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type1">구독</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400007</div>
                                        <div className="txt05">5,000,000원</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="selDiv v-box">
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">커스터마이징</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="typeUnit01 type2">구축형</div>
                                        <div className="line"/>
                                        <div className="txt03 flex-1">IT20220400008</div>
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


