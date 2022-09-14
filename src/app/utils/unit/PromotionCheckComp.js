import React, { Component, Fragment } from 'react';

// 프로모션 확인 
export default class PromotionCheckComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 검색
            inputFocus: false,
            searchInput:'',
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('promotionCheckPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">프로모션 확인</span>
                        </div>
                    </div>
                    {/* 검색영역 */}
                    <div className="searchBoxWrap h-box">
                        <div className="searchBox h-box flex-1">
                            <div className="ico"/>
                            <input type="text" ref={this.searchRef} className="inputField flex-1" value={this.state.searchInput} placeholder='검색어를 입력해주세요.' onChange={(e) => this.setState({ searchInput: e.target.value })} onFocus={(e) => this.setState({inputFocus:true})} onBlur={(e) => this.setState({inputFocus:false})}/>
                            <div className="clearBtn" style={{display:this.state.searchInput === '' ? 'none':''}} onClick={()=>{this.setState({searchInput:''})}}/>
                        </div>
                        <div className="cancelBtn" style={{display:this.state.inputFocus ? '':'none'}}>취소</div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        <div className="selList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                            <ul>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow01:!this.state.toggleArrow01});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">Amaranth10 업셀 프로모션</div>
                                                <div className='flex-1 h-box'>
                                                    <div className='new' />
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow01 ? 'up':'down'}`}/>
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow01 ? '':'none'}}>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>캠페인명</dt>
                                                <dd>
                                                    <div className="txt">Amaranth10 전환 프로모션</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>차수</dt>
                                                <dd>
                                                    <div className="txt">3차</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>기간</dt>
                                                <dd>
                                                    <div className="txt">2021.06.08~2021.04.03</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>품목</dt>
                                                <dd>
                                                    <div className="txt">
                                                        Amaranth10 인사, Amaranth10 회계, Amaranth10 CRM
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>비용</dt>
                                                <dd>
                                                    <div className="txt fwb">6,300,000</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>목표</dt>
                                                <dd>
                                                    <div className="txt fwb">6,700,000</div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>내용</dt>
                                                <dd>
                                                    <div className="textarea" style={{minHeight:'auto'}}>
                                                        Amaranth10 출시에 따른 기존고객 전환 프로모션을 진행하고자 합니다.<br/>
                                                        대상고객은 아이큐브 회계/인사 사용고객이며, 상반기까지 캠페인 추이를 보며 추가 프로모션 여부를 파악했습니다.
                                                    </div>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <div className="title flex-1">첨부파일</div>
                                            <div className="fnBtn h-box">
                                                <div className="files"><span className="cnt">3</span></div>
                                            </div>
                                        </div>
                                        <div className="viewUnit h-box">
                                            <dl className="v-box flex-1">
                                                <dt>결재문서</dt>
                                                <dd>
                                                    <div className="link">Amaranth10 전환프로모션 4차 진행건</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow02:!this.state.toggleArrow02});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">Amaranth10 업셀 프로모션</div>
                                                <div className='flex-1 h-box'>
                                                    <div className='new' />
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow02 ? 'up':'down'}`} />
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow02 ? '':'none'}}>
                                        {/* 상세코드 생략 */}
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow03:!this.state.toggleArrow03});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">스마트공장 지원사업</div>
                                                <div className='flex-1 h-box'>
                                                    <div className='new' />
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow03 ? 'up':'down'}`} />
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow03 ? '':'none'}}>
                                        {/* 상세코드 생략 */}
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow04:!this.state.toggleArrow04});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">새해맞이 할인 프로모션</div>
                                                <div className='flex-1 h-box'>
                                                    {/* <div className='new' /> */}
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow04 ? 'up':'down'}`} />
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow04 ? '':'none'}}>
                                        {/* 상세코드 생략 */}
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow05:!this.state.toggleArrow05});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">클라우드팩스 출시 프로모션</div>
                                                <div className='flex-1 h-box'>
                                                    {/* <div className='new' /> */}
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow05 ? 'up':'down'}`} />
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow05 ? '':'none'}}>
                                        {/* 상세코드 생략 */}
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.setState({toggleArrow06:!this.state.toggleArrow06});}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title">BizboxA 출시 프로모션</div>
                                                <div className='flex-1 h-box'>
                                                    {/* <div className='new' /> */}
                                                </div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">2021.03.02~2021.04.02</div>
                                            </div>
                                        </div>
                                        <div className="list-arrow h-box">
                                            <span className={`ico ${this.state.toggleArrow06 ? 'up':'down'}`} />
                                        </div>
                                    </div>
                                    {/* 캠페인 상세 */}
                                    <div className="selDetails" style={{display:this.state.toggleArrow06 ? '':'none'}}>
                                        {/* 상세코드 생략 */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 데이터 없을때 */}
                        <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                            <div className="noList">등록된 프로모션 정보가 없습니다.</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


