import React, { Component, Fragment } from 'react';

// 캠페인 리스트
export default class SubjectCampaignListComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 리스트,라디오
            itemList01 : false, 
            itemList02 : false, 
            itemList03 : false, 
            itemList04 : false, 
            itemList05 : false, 
            itemList06 : false, 
            itemList07 : false, 
            itemList08 : false, 
            itemRadio01 : true, 
            itemRadio02 : false, 
            itemRadio03 : false, 
            itemRadio04 : false, 
            itemRadio05 : false, 
            itemRadio06 : false, 
            itemRadio07 : false, 
            itemRadio08 : false, 
        }
    }

    // 리스트 함수
    handleItemList = (num) => {
        this.setState({ itemList01 : false, itemList02 : false, itemList03 : false, itemList04 : false, itemList05 : false, itemList06 : false, itemList07 : false, itemList08 : false })
        if(num === '1'){
            this.setState({ itemList01 : true })
        }else if(num === '2'){
            this.setState({ itemList02 : true })
        }else if(num === '3'){
            this.setState({ itemList03 : true })
        }else if(num === '4'){
            this.setState({ itemList04 : true })
        }else if(num === '5'){
            this.setState({ itemList05 : true })
        }else if(num === '6'){
            this.setState({ itemList06 : true })
        }else if(num === '7'){
            this.setState({ itemList07 : true })
        }else if(num === '8'){
            this.setState({ itemList08 : true })
        }
    }
    handleItemRadio = (num) => {
        this.setState({ itemRadio01 : false, itemRadio02 : false, itemRadio03 : false, itemRadio04 : false, itemRadio05 : false, itemRadio06 : false, itemRadio07 : false, itemRadio08 : false })
        if(num === '1'){
            this.setState({ itemRadio01 : true })
        }else if(num === '2'){
            this.setState({ itemRadio02 : true })
        }else if(num === '3'){
            this.setState({ itemRadio03 : true })
        }else if(num === '4'){
            this.setState({ itemRadio04 : true })
        }else if(num === '5'){
            this.setState({ itemRadio05 : true })
        }else if(num === '6'){
            this.setState({ itemRadio06 : true })
        }else if(num === '7'){
            this.setState({ itemRadio07 : true })
        }else if(num === '8'){
            this.setState({ itemRadio08 : true })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="selList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList01 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('1')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth 10 연말 프로모션</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">1차</div>
                                        <div className="line" />
                                        <div className="txt01">2021.12.01~2021.12.31</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('1')}}>
                                    <span className={`ico ${this.state.itemRadio01 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList02 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('2')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">2021 기업 보안강화 캠페인</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">3차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.11.01~2021.11.30</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('2')}}>
                                    <span className={`ico ${this.state.itemRadio02 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList03 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('3')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">빅데이터 플랫폼 출시기념 홍보</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">2차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.10.01~2021.10.31</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('3')}}>
                                    <span className={`ico ${this.state.itemRadio03 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList04 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('4')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth 10 업셀 프로모션</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">1차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.09.01~2021.09.30</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('4')}}>
                                    <span className={`ico ${this.state.itemRadio04 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList05 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('5')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">스마트공장 지원사업 홍보 캠페인</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">1차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.09.01~2021.09.30</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('5')}}>
                                    <span className={`ico ${this.state.itemRadio05 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList06 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('6')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">지역사회 빅데이터 육성 사업 홍보</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">1차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.08.01~2021.08.31</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('6')}}>
                                    <span className={`ico ${this.state.itemRadio06 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList07 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('7')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">Amaranth 10 연말 프로모션</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">1차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.12.01~2021.12.31</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('7')}}>
                                    <span className={`ico ${this.state.itemRadio07 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={`selDiv h-box ${this.state.itemList08 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemList('8')}}>
                                <div className="list-con flex-1 v-box">
                                    <div className="h-box">
                                        <div className="title flex-1">2021 기업 보안강화 캠페인</div>
                                    </div>
                                    <div className="h-box">
                                        <div className="txt01">3차</div>
                                        <div className="line"/>
                                        <div className="txt01">2021.11.01~2021.11.30</div>
                                    </div>
                                </div>
                                <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleItemRadio('8')}}>
                                    <span className={`ico ${this.state.itemRadio08 ? 'on':''}`}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    {/* 데이터가 없을때 */}
                    <div className="noList">등록된 정보가 없습니다.</div>
                    {/* 검색 결과가 없을때
                        <div className="noSearch">검색 결과가 없습니다.</div> 
                    */}
                </div>
            </Fragment>
        );
    }
}


