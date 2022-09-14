import React, { Component, Fragment } from 'react';
import AddressSearchComp from '../commons/searchComp/AddressSearchComp';

// 주소검색
export default class AddressComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef01 = React.createRef();
        this.searchRef02 = React.createRef();

        this.state = {
            // 주소 탭
            tabStateOpen01: true,
            tabStateOpen02: false,

            // 검색
            inputFocus01  : false,
            inputFocus02  : false,
            searchInput01 : '',
            searchInput02 : '',
            searchOn01    : false,
            searchOn02    : false,

        }
    }

    // 탭
    handleAddressTabClick = (type) => {
        this.setState({ 
            tabStateOpen01: false, tabStateOpen02: false,
        })
        
        if(type === '1'){
            this.setState({ 
                tabStateOpen01: true,
                inputFocus01  : false,
                inputFocus02  : false,
                searchInput01 : '',
                searchInput02 : '',
                searchOn01    : false,
                searchOn02    : false,
            })
        }else if(type === '2'){
            this.setState({ 
                tabStateOpen02: true,
                inputFocus01  : false,
                inputFocus02  : false,
                searchInput01 : '',
                searchInput02 : '',
                searchOn01    : false,
                searchOn02    : false,
            })
        }
    }

    // 검색 리스트 전환
    handleSearchOn = () =>{
        if(this.state.searchInput01 !== ''){
            this.setState({ searchOn01 : true })
        }else if(this.state.searchInput02 !== ''){
            this.setState({ searchOn02 : true })
        }else{
            this.setState({ searchOn01 : false, searchOn02 : false })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="addressComp flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('addressCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">주소 검색</span>
                        </div>
                    </div>
                    {/* 상세 탭 */}
                    <div className="addressTab">
                        <div className="addressTabMenu">
                            <ul className="flex-1 h-box">
                                <li className={`${this.state.tabStateOpen01 ? 'on':''}`} onClick={()=>this.handleAddressTabClick('1')}>
                                    <span className="txt">도로명주소</span>
                                </li>
                                <li className={`${this.state.tabStateOpen02 ? 'on':''}`} onClick={()=>this.handleAddressTabClick('2')}>
                                    <span className="txt">지번주소</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        {/* 도로명주소 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="flex-1 v-box" style={{display:this.state.tabStateOpen01 ? '':'none'}}>
                            {/* 검색영역 */}
                            <div className="searchBoxWrap h-box">
                                <div className="searchBox h-box flex-1">
                                    <div className="ico"/>
                                    <input type="text" ref={this.searchRef01} className="inputField flex-1" value={this.state.searchInput01} placeholder='도로명주소를 입력해주세요.' onChange={(e) => this.setState({ searchInput01: e.target.value })} onFocus={(e) => this.setState({inputFocus01:true})} onBlur={(e) => this.setState({inputFocus01:false})} onKeyUp={this.handleSearchOn}/>
                                    <div className="clearBtn" style={{display:this.state.searchInput01 === '' ? 'none':''}} onClick={()=>{this.setState({searchInput01:'',searchOn01:false})}}/>
                                </div>
                                <div className="cancelBtn" style={{display:this.state.inputFocus01 ? '':'none'}}>취소</div>
                            </div>
                            <div className="scrollBox flex-1 v-box scroll_y_on">
                                <div className="flex-1 v-box" style={{display:this.state.searchOn01 ? 'none':''}}>
                                    {/* 정보문구 */}
                                    <div className="addressInfo v-box">
                                        <div className="infoText">
                                            도로명을 이용해서 검색해 보세요.<br/>
                                            건물번호를 함께 입력하면 더욱 정확한 결과가 검색됩니다.
                                        </div>
                                        <dl>
                                            <dt>도로명 + 건물번호</dt>
                                            <dd>예) 판교역 235, 제주 첨단로 242</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="flex-1 v-box" style={{display:this.state.searchOn01 ? '':'none'}}>
                                    <AddressSearchComp />
                                </div>
                            </div>
                        </div>

                        {/* 지번주소 탭 ----------------------------------------------------------------------------------------------------*/}
                        <div className="flex-1 v-box" style={{display:this.state.tabStateOpen02 ? '':'none'}}>
                            {/* 검색영역 */}
                            <div className="searchBoxWrap h-box">
                                <div className="searchBox h-box flex-1">
                                    <div className="ico"/>
                                    <input type="text" ref={this.searchRef02} className="inputField flex-1" value={this.state.searchInput02} placeholder='지번주소를 입력해주세요.' onChange={(e) => this.setState({ searchInput02: e.target.value })} onFocus={(e) => this.setState({inputFocus02:true})} onBlur={(e) => this.setState({inputFocus02:false})} onKeyUp={this.handleSearchOn}/>
                                    <div className="clearBtn" style={{display:this.state.searchInput02 === '' ? 'none':''}} onClick={()=>{this.setState({searchInput02:'',searchOn02:false})}}/>
                                </div>
                                <div className="cancelBtn" style={{display:this.state.inputFocus02 ? '':'none'}}>취소</div>
                            </div>
                            <div className="scrollBox flex-1 v-box scroll_y_on">
                                <div className="flex-1 v-box" style={{display:this.state.searchOn02 ? 'none':''}}>
                                    {/* 정보문구 */}
                                    <div className="addressInfo v-box">
                                        <div className="infoText">
                                            지역명을 이용해서 검색해 보세요.<br/>
                                            건물명, 번지를 함께 입력하면 더욱 정확한 결과가 검색됩니다.
                                        </div>
                                        <dl>
                                            <dt>지역명(동/리) + 번지</dt>
                                            <dd>예) 삼평동 681, 제주 영평동 2181</dd>
                                        </dl>
                                        <dl>
                                            <dt>지역명(동/리) + 건물명(아파트명)</dt>
                                            <dd>예) 분당 주공, 연수동 주공3차</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="flex-1 v-box" style={{display:this.state.searchOn02 ? '':'none'}}>
                                    <AddressSearchComp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


