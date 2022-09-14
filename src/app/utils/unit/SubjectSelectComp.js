import React, { Component, Fragment } from 'react';
import MenuSheetComp from '../commons/MenuSheetComp';
import PanelWrap from '../commons/PanelWrap';

// 품목 선택
export default class SubjectSelectComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            // 타이틀
            headerTitle : '품목군',

            // 단계
            listStep01 : true,
            listStep02 : false,
            listStep03 : false,

            // 데이터 없을때
            emptyData: false,

            // 검색
            inputFocus : false,
            searchInput:'',

            // 등록완료
            msgDone :false,

            // 품목군 리스트,라디오
            step01List01 : false, 
            step01List02 : false, 
            step01List03 : false, 
            step01List04 : false, 
            step01List05 : false, 
            step01List06 : false, 
            step01List07 : false, 
            step01Radio01 : true, 
            step01Radio02 : false, 
            step01Radio03 : false, 
            step01Radio04 : false, 
            step01Radio05 : false, 
            step01Radio06 : false, 
            step01Radio07 : false, 

            // 품목 리스트,라디오
            step02List01 : false, 
            step02List02 : false, 
            step02List03 : false, 
            step02List04 : false, 
            step02List05 : false, 
            step02List06 : false, 
            step02List07 : false, 
            step02Radio01 : true, 
            step02Radio02 : false, 
            step02Radio03 : false, 
            step02Radio04 : false, 
            step02Radio05 : false, 
            step02Radio06 : false, 
            step02Radio07 : false, 

            // 단가 리스트,라디오
            step03List01 : false, 
            step03List02 : false, 
            step03List03 : false, 
            step03List04 : false, 
            step03List05 : false, 
            step03List06 : false, 
            step03List07 : false, 
            step03Radio01 : true, 
            step03Radio02 : false, 
            step03Radio03 : false, 
            step03Radio04 : false, 
            step03Radio05 : false, 
            step03Radio06 : false, 
            step03Radio07 : false, 

            // 패널 모드
            campaignInfoSheetSelectPanel      : false,          // 캠페인정보
        }
    }

    // 캠페인정보 호출
    handleClickCampaignInfo = () => { this.setState({ campaignInfoSheetSelectPanel : true });}

    // 팝업 종료
    handleClickPanelClose = (state) => {
        this.setState({ 
            campaignInfoSheetSelectPanel : false, 
        });
    }

    // 단계별 이동
    handleClickStep = (num) => {
        if(num === '1'){
            this.setState({headerTitle:'품목군',listStep01:true,listStep02:false,listStep03:false})
        }else if(num === '2'){
            this.setState({headerTitle:'품목',listStep01:false,listStep02:true,listStep03:false})
        }else if(num === '3'){
            this.setState({headerTitle:'단가',listStep01:false,listStep02:false,listStep03:true})
        }
    }
    // 단계 초기화
    handleClickStepReset = () => {
        this.setState({headerTitle:'품목군',msgDone:false,listStep01:true,listStep02:false,listStep03:false})
    }

    // 품목군 리스트 함수
    handleStep01List = (num) => {
        this.setState({ step01List01 : false, step01List02 : false, step01List03 : false, step01List04 : false, step01List05 : false, step01List06 : false, step01List07 : false })
        if(num === '1'){
            this.setState({ step01List01 : true })
        }else if(num === '2'){
            this.setState({ step01List02 : true })
        }else if(num === '3'){
            this.setState({ step01List03 : true })
        }else if(num === '4'){
            this.setState({ step01List04 : true })
        }else if(num === '5'){
            this.setState({ step01List05 : true })
        }else if(num === '6'){
            this.setState({ step01List06 : true })
        }else if(num === '7'){
            this.setState({ step01List07 : true })
        }
    }
    handleStep01Radio = (num) => {
        this.setState({ step01Radio01 : false, step01Radio02 : false, step01Radio03 : false, step01Radio04 : false, step01Radio05 : false, step01Radio06 : false, step01Radio07 : false })
        if(num === '1'){
            this.setState({ step01Radio01 : true })
        }else if(num === '2'){
            this.setState({ step01Radio02 : true })
        }else if(num === '3'){
            this.setState({ step01Radio03 : true })
        }else if(num === '4'){
            this.setState({ step01Radio04 : true })
        }else if(num === '5'){
            this.setState({ step01Radio05 : true })
        }else if(num === '6'){
            this.setState({ step01Radio06 : true })
        }else if(num === '7'){
            this.setState({ step01Radio07 : true })
        }
    }

    // 품목 리스트 함수
    handleStep02List = (num) => {
        this.setState({ step02List01 : false, step02List02 : false, step02List03 : false, step02List04 : false, step02List05 : false, step02List06 : false, step02List07 : false })
        if(num === '1'){
            this.setState({ step02List01 : true })
        }else if(num === '2'){
            this.setState({ step02List02 : true })
        }else if(num === '3'){
            this.setState({ step02List03 : true })
        }else if(num === '4'){
            this.setState({ step02List04 : true })
        }else if(num === '5'){
            this.setState({ step02List05 : true })
        }else if(num === '6'){
            this.setState({ step02List06 : true })
        }else if(num === '7'){
            this.setState({ step02List07 : true })
        }
    }
    handleStep02Radio = (num) => {
        this.setState({ step02Radio01 : false, step02Radio02 : false, step02Radio03 : false, step02Radio04 : false, step02Radio05 : false, step02Radio06 : false, step02Radio07 : false })
        if(num === '1'){
            this.setState({ step02Radio01 : true })
        }else if(num === '2'){
            this.setState({ step02Radio02 : true })
        }else if(num === '3'){
            this.setState({ step02Radio03 : true })
        }else if(num === '4'){
            this.setState({ step02Radio04 : true })
        }else if(num === '5'){
            this.setState({ step02Radio05 : true })
        }else if(num === '6'){
            this.setState({ step02Radio06 : true })
        }else if(num === '7'){
            this.setState({ step02Radio07 : true })
        }
    }

    // 단가 리스트 함수
    handleStep03List = (num) => {
        this.setState({ step03List01 : false, step03List02 : false, step03List03 : false, step03List04 : false, step03List05 : false, step03List06 : false, step03List07 : false })
        if(num === '1'){
            this.setState({ step03List01 : true })
        }else if(num === '2'){
            this.setState({ step03List02 : true })
        }else if(num === '3'){
            this.setState({ step03List03 : true })
        }else if(num === '4'){
            this.setState({ step03List04 : true })
        }else if(num === '5'){
            this.setState({ step03List05 : true })
        }else if(num === '6'){
            this.setState({ step03List06 : true })
        }else if(num === '7'){
            this.setState({ step03List07 : true })
        }
    }
    handleStep03Radio = (num) => {
        this.setState({ step03Radio01 : false, step03Radio02 : false, step03Radio03 : false, step03Radio04 : false, step03Radio05 : false, step03Radio06 : false, step03Radio07 : false })
        if(num === '1'){
            this.setState({ step03Radio01 : true })
        }else if(num === '2'){
            this.setState({ step03Radio02 : true })
        }else if(num === '3'){
            this.setState({ step03Radio03 : true })
        }else if(num === '4'){
            this.setState({ step03Radio04 : true })
        }else if(num === '5'){
            this.setState({ step03Radio05 : true })
        }else if(num === '6'){
            this.setState({ step03Radio06 : true })
        }else if(num === '7'){
            this.setState({ step03Radio07 : true })
        }
    }


    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <div className={`panelHeader h-box`}>
                        <div className="leftFnDiv">
                            <span className="backBtn" onClick={()=>{this.props.handleClickPanelClose('subjectSelectCompPanel');}} />
                        </div>
                        <div className="titleDiv flex-1 h-box">
                            <span className="title">{this.state.headerTitle}</span>
                        </div>
                    </div>
                    {/* 단계별 스텝 */}
                    <div className="stepBox h-box">
                        <div className={`step01 flex-1 ${this.state.listStep01 ? 'on':''}`}>품목군</div>
                        <div className={`step02 flex-1 ${this.state.listStep02 ? 'on':''}`}>품목</div>
                        <div className={`step03 flex-1 ${this.state.listStep03 ? 'on':''}`}>단가</div>
                    </div>
                    {/* 검색영역 */}
                    <div className="searchBoxWrap h-box brtn">
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
                            {/* 품목군 ----------------------------------------------------------------------------------------------------*/}
                            <ul className="animated03s fadeInRight" style={{display:this.state.listStep01 ? '':'none'}}>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List01 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('1')}}>
                                        <div className="logo type01" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth 10</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0060</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01Radio('1')}}>
                                            <span className={`ico ${this.state.step01Radio01 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List02 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('2')}}>
                                        <div className="logo type02" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth 10 Cloud</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0070</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico disabled`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List03 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('3')}}>
                                        <div className="logo type03" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Bizbox Alpha</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0080</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01Radio('3')}}>
                                            <span className={`ico ${this.state.step01Radio03 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List04 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('4')}}>
                                        <div className="logo type04" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Bizbox Alpha Cloud</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0090</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box">
                                            <span className={`ico disabled`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List05 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('5')}}>
                                        <div className="logo type05" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">iCUBE</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0020</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01Radio('5')}}>
                                            <span className={`ico ${this.state.step01Radio05 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List06 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('6')}}>
                                        <div className="logo type06" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">iCUBE G20</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0030</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01Radio('6')}}>
                                            <span className={`ico ${this.state.step01Radio06 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step01List07 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01List('7')}}>
                                        <div className="logo type07" />
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">iCUBE Cloud</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="txt01">CR/S0040</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep01Radio('7')}}>
                                            <span className={`ico ${this.state.step01Radio07 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* 품목 ----------------------------------------------------------------------------------------------------*/}
                            <ul className="animated03s fadeInRight" style={{display:this.state.listStep02 ? '':'none'}}>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List01 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('1')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 표준가</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type3">판매</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-1</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('1')}}>
                                            <span className={`ico ${this.state.step02Radio01 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List02 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('2')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type3">판매</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-2</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('2')}}>
                                            <span className={`ico ${this.state.step02Radio02 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List03 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('3')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 11유저 이상</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type3">판매</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-3</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('3')}}>
                                            <span className={`ico ${this.state.step02Radio03 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List04 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('4')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type4">유지보수</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-1</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('4')}}>
                                            <span className={`ico ${this.state.step02Radio04 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List05 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('5')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type2">구축형</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-2</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('5')}}>
                                            <span className={`ico ${this.state.step02Radio05 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List06 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('6')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 11유저 이상</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type1">구독</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-3</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('6')}}>
                                            <span className={`ico ${this.state.step02Radio06 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step02List07 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02List('7')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">Amaranth10 회계관리 10유저 이하</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit01 type1">구독</div>
                                                <div className="line"/>
                                                <div className="txt03">Amaranth10-1</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('7')}}>
                                            <span className={`ico ${this.state.step02Radio07 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* 단가 ----------------------------------------------------------------------------------------------------*/}
                            <ul className="animated03s fadeInRight" style={{display:this.state.listStep03 ? '':'none'}}>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List01 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('1')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">일시납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type1">표준가</div>
                                                <div className="line"/>
                                                <div className="txt03">2,800,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('1')}}>
                                            <span className={`ico ${this.state.step02Radio01 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List02 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('2')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">월납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type1">표준가</div>
                                                <div className="line"/>
                                                <div className="txt03">2,800,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('2')}}>
                                            <span className={`ico ${this.state.step02Radio02 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List03 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('3');this.handleClickCampaignInfo();}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">분기납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type3 dot">프로모션</div>
                                                <div className="line"/>
                                                <div className="txt03">5,600,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('3')}}>
                                            <span className={`ico ${this.state.step02Radio03 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List04 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('4')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">분기납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type2">할인가</div>
                                                <div className="line"/>
                                                <div className="txt03">1,680,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('4')}}>
                                            <span className={`ico ${this.state.step02Radio04 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List05 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('5');this.handleClickCampaignInfo();}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">년납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type3 dot">프로모션</div>
                                                <div className="line"/>
                                                <div className="txt03">2,800,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('5')}}>
                                            <span className={`ico ${this.state.step02Radio05 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List06 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('6')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">일시납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type2">할인가</div>
                                                <div className="line"/>
                                                <div className="txt03">2,500,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('6')}}>
                                            <span className={`ico ${this.state.step02Radio06 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className={`selDiv h-box ${this.state.step03List07 ? 'on':''}`} onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep03List('7')}}>
                                        <div className="list-con flex-1 v-box">
                                            <div className="h-box">
                                                <div className="title flex-1">일시납</div>
                                            </div>
                                            <div className="h-box">
                                                <div className="typeUnit02 type1">표준가</div>
                                                <div className="line"/>
                                                <div className="txt03">2,500,000원</div>
                                            </div>
                                        </div>
                                        <div className="list-radio h-box" onClick={(e)=>{e.stopPropagation();e.preventDefault();this.handleStep02Radio('7')}}>
                                            <span className={`ico ${this.state.step02Radio07 ? 'on':''}`}/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* 버튼영역 */}
                        <div className="btnBox h-box" style={{display:this.state.emptyData ? 'none' : this.state.listStep01 ? '':'none'}}>
                            <div className="btn flex-1 blue" onClick={()=>{this.handleClickStep('2');}}>다음</div>
                        </div>
                        <div className="btnBox h-box" style={{display:this.state.emptyData ? 'none' : this.state.listStep02 ? '':'none'}}>
                            <div className="btn flex-1" onClick={()=>{this.handleClickStep('1');}}>이전</div>
                            <div className="btn flex-1 blue" onClick={()=>{this.handleClickStep('3');}}>다음</div>
                        </div>
                        <div className="btnBox h-box" style={{display:this.state.emptyData ? 'none' : this.state.listStep03 ? '':'none'}}>
                            <div className="btn flex-1" onClick={()=>{this.handleClickStep('2');}}>이전</div>
                            <div className="btn flex-1 blue" onClick={()=>{this.setState({msgDone:true});setTimeout(()=>{this.props.handleClickPanelClose('subjectSelectCompPanel');this.handleClickStepReset();},1000);}}>등록</div>
                        </div>

                        {/* 등록 토스트 알림 */}
                        <div className="msgBox msgDone animated05s fadeInUp" style={{display:this.state.msgDone ? '':'none'}}>품목선택이 완료되었습니다.</div>

                        {/* 데이터 없을때 */}
                        <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                            {/* 데이터가 없을때 */}
                            <div className="noList">등록된 정보가 없습니다.</div>
                            {/* 검색 결과가 없을때
                                <div className="noSearch">검색 결과가 없습니다.</div> 
                            */}
                        </div>
                    </div>
                </div>

                {/* 캠페인 정보 */}
                <PanelWrap 
                    Type='bs' 
                    Open={this.state.campaignInfoSheetSelectPanel} 
                    Close={this.handleClickPanelClose}
                >
                    <MenuSheetComp type={'campaignInfoSheetSelect'} 
                        Close={this.handleClickPanelClose}
                    />
                </PanelWrap>
            </Fragment>
        );
    }
}


