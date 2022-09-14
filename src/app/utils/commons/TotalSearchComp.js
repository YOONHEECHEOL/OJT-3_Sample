import React, { Component, Fragment } from 'react';
import HeaderComp from './HeaderComp';
import ContactSearchComp from './searchComp/ContactSearchComp';
import CustomerSearchComp from './searchComp/CustomerSearchComp';
import SalesSearchComp from './searchComp/SalesSearchComp';

// 공통 검색
export default class TotalSearchComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 최근검색어
            latelySearch: false,

            // 검색
            inputFocus  : false,
            searchInput : '',
            searchOn    : false,

        }
    }

    // 검색 리스트 전환
    handleSearchOn = () =>{
        if(this.state.searchInput !== ''){
            this.setState({ searchOn : true })
        }else{
            this.setState({ searchOn : false })
        }
    }

    // 최근검색어 상세
    handleClickLatelySearch = () => {
        this.setState({ latelySearch : true })
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType2'
                        textBtnName='취소'
                        handleClickBack={()=>{this.props.handleClickPanelClose();this.setState({searchInput:'',searchOn:false,latelySearch:false});}}
                    />
                    {/* 검색영역 */}
                    <div className="searchBoxWrap headPlus h-box">
                        <div className="searchBox h-box flex-1">
                            <input type="text" ref={this.searchRef} className="inputField flex-1" value={this.state.searchInput} placeholder='검색어를 입력해주세요.' onChange={(e) => this.setState({ searchInput: e.target.value })} onFocus={(e) => this.setState({inputFocus:true})} onBlur={(e) => this.setState({inputFocus:false})} onKeyUp={this.handleSearchOn}/>
                            <div className="clearBtn" style={{display:this.state.searchInput === '' ? 'none':''}} onClick={()=>{this.setState({searchInput:''})}}/>
                        </div>
                    </div>
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType1`}>
                        {/* 고객사 검색 */}
                        <div className="flex-1 v-box" style={{display:this.state.latelySearch ? 'none':this.props.searchType === '1' ? '':'none'}}>
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? 'none':''}}>
                                {/* 최근검색어 */}
                                <div className="keywordSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 검색어</div>
                                        <div className="arrBtn" onClick={this.handleClickLatelySearch}/>
                                    </div>
                                    <div className="keywordItem">
                                        <ul className="clear">
                                            <li>#기회할당</li>
                                            <li>#영업기회</li>
                                            <li>#고객기회</li>
                                            <li>#영업성공</li>
                                            <li>#영업실패</li>
                                            <li>#추천검색어</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 즐겨찾기 */}
                                <div className="favoritesSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">즐겨찾기</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">아임사이언스</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">101-12-44885</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico on"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">가나상사</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">125-84-12412</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico on"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">지엔씨스</div>
                                                            <div className="customerStateBox">
                                                                <div className="type1">미거래</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">101-12-44885</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type1">미진행</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico on"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">씨에스윈드</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">110-14-05695</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico on"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">우리상사</div>
                                                            <div className="customerStateBox">
                                                                <div className="type1">미거래</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">111-11-11111</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type1">미진행</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico on"/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 최근등록된 고객사 */}
                                <div className="latelySearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 등록된 고객사</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">아임사이언스</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">101-12-44885</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">가나상사</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">125-84-12412</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">지엔씨스</div>
                                                            <div className="customerStateBox">
                                                                <div className="type1">미거래</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">101-12-44885</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type1">미진행</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">씨에스윈드</div>
                                                            <div className="customerStateBox">
                                                                <div className="type2">거래중</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">110-14-05695</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type2">영업중</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico"/>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">우리상사</div>
                                                            <div className="customerStateBox">
                                                                <div className="type1">미거래</div>
                                                            </div>
                                                        </div>
                                                        <div className="h-box">
                                                            <div className="txt01 flex-1">111-11-11111</div>
                                                            <div className="customerStateTxt">
                                                                <div className="type1">미진행</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-bmk">
                                                        <span className="ico"/>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 고객사 검색리스트 */}
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? '':'none'}}>
                                <CustomerSearchComp />
                            </div>
                        </div>
                        {/* 연락처 검색 */}
                        <div className="flex-1 v-box" style={{display:this.state.latelySearch ? 'none':this.props.searchType === '2' ? '':'none'}}>
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? 'none':''}}>
                                {/* 최근검색어 */}
                                <div className="keywordSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 검색어</div>
                                        <div className="arrBtn" onClick={this.handleClickLatelySearch}/>
                                    </div>
                                    <div className="keywordItem">
                                        <ul className="clear">
                                            <li>#기회할당</li>
                                            <li>#영업기회</li>
                                            <li>#고객기회</li>
                                            <li>#영업성공</li>
                                            <li>#영업실패</li>
                                            <li>#추천검색어</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 즐겨찾기 */}
                                <div className="favoritesSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">즐겨찾기</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic">
                                                        <img src={require("../../../www/images/temp/temp-user.png")} alt="" /> 
                                                    </div>
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                                            <div className="title flex-1">김초롱</div>
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
                                                            <div className="title flex-1">김초롱</div>
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
                                                        <span className="ico on" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic" />
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                                            <div className="title flex-1">김초롱</div>
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
                                                        <span className="ico on" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 최근등록된 연락처 */}
                                <div className="latelySearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 등록된 연락처</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic">
                                                        <img src={require("../../../www/images/temp/temp-user.png")} alt="" /> 
                                                    </div>
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                                        <span className="ico" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic" />
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                                        <span className="ico" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic" />
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                                            <div className="title flex-1">김초롱</div>
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
                                                        <span className="ico" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-pic" />
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">김초롱</div>
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
                                </div>
                            </div>
                            {/* 연락처 검색리스트 */}
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? '':'none'}}>
                                <ContactSearchComp />
                            </div>
                        </div>
                        {/* 영업활동 검색 */}
                        <div className="flex-1 v-box" style={{display:this.state.latelySearch ? 'none':this.props.searchType === '3' ? '':'none'}}>
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? 'none':''}}>
                                {/* 최근검색어 */}
                                <div className="keywordSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 검색어</div>
                                        <div className="arrBtn" onClick={this.handleClickLatelySearch}/>
                                    </div>
                                    <div className="keywordItem">
                                        <ul className="clear">
                                            <li>#기회할당</li>
                                            <li>#영업기회</li>
                                            <li>#고객기회</li>
                                            <li>#영업성공</li>
                                            <li>#영업실패</li>
                                            <li>#추천검색어</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 즐겨찾기 */}
                                <div className="favoritesSearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">즐겨찾기</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                            <div className="title flex-1">Amaranth10 신규고객발굴</div>
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
                                                        <span className="ico on" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                        <span className="ico on" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 최근등록된 영업활동 */}
                                <div className="latelySearchWrap">
                                    <div className="titleBox h-box">
                                        <div className="tit flex-1">최근 등록된 영업활동</div>
                                    </div>
                                    <div className="cardList scroll_off m0">
                                        <ul>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                        <span className="ico" />
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cardDiv h-box">
                                                    <div className="list-con flex-1 v-box">
                                                        <div className="h-box">
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                                            <div className="title flex-1">Amaranth10 신규고객발굴</div>
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
                                                            <div className="title flex-1">Amaranth10 업셀영업 1차</div>
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 영업활동 검색리스트 */}
                            <div className="flex-1 v-box" style={{display:this.state.searchOn ? '':'none'}}>
                                <SalesSearchComp />
                            </div>
                        </div>
                        {/* 최근검색어 상세 */}
                        <div className="flex-1 v-box animated03s fadeInRight" style={{display:this.state.searchOn ? 'none':this.state.latelySearch ? '':'none'}}>
                            <div className="keywordSearchWrap">
                                <div className="titleBox h-box">
                                    <div className="tit flex-1">최근 검색어</div>
                                    <div className="textBtn">전체삭제</div>
                                </div>
                            </div>
                            <div className="selList pt0 pb0">
                                <ul>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">기회할당</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">영업기회</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">고객기회</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">영업성공</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">영업실패</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="selDiv h-box">
                                            <div className="list-con flex-1 v-box">
                                                <div className="h-box">
                                                    <div className="title flex-1">추천검색어</div>
                                                </div>
                                            </div>
                                            <div className="list-date">05.18</div>
                                            <div className="list-del h-box">
                                                <span className="ico" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


