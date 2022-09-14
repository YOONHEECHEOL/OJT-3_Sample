import React, { Component, Fragment } from 'react';

// 고객담당자 선택
export default class ContactSelectComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 데이터 없을때
            emptyData: false,

            // 검색
            inputFocus: false,
            searchInput:'',

            // radio idx
            radioIdx:'1',
        }
    }

    // 라디오 셀렉트
    handleClickRadio = (idx) => {
        this.setState({radioIdx:idx})
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('contactSelectCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">고객담당자 선택</span>
                        </div>
                        <div className="rightFnDiv">
                            <span className="textBlackBtn" onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>확인</span>
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
                        {/* 리스트등록 */}
                        <div className="listAddWrap h-box">
                            <div className="text flex-1">{this.state.searchInput}</div>
                            <div className="addBtn">등록</div>
                        </div>
                        <div className="selList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                            <ul>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('1');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">김유신</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '1' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('2');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">강감찬</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '2' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('3');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">이형도</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '3' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('4');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">박형석</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '4' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('5');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">장예나</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '5' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('6');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">권도현</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '6' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('7');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">김판서</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '7' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('8');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">죠세터스 아돌퍼스 아메리커스</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '8' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('9');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">김유신</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '9' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="selDiv h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleClickRadio('10');}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">강감찬</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt02 flex-1">강원도 춘천시 남산면 버들1길</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico ${this.state.radioIdx === '10' ? 'on':''}`} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 데이터 없을때 */}
                        <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                            <div className="noList">등록된 고객담당자 정보가 없습니다.</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


