import React, { Component, Fragment } from 'react';

// 금융기관코드
export default class FnCodeComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 타이틀 탭
            titleTab01 : true,
            titleTab02 : false,
        }
    }

    // 탭
    handleTitleTabClick = (type) => {
        this.setState({ 
            titleTab01: false, titleTab02: false
        })
        
        if(type === '1'){
            this.setState({ titleTab01: true})
        }else if(type === '2'){
            this.setState({ titleTab02: true})
        }
    }

    render() {
        return (
            <Fragment>
                <div className="titleBox">
                    <div className="titleTabMenu">
                        <ul className="flex-1 h-box">
                            <li className={`${this.state.titleTab01 ? 'on':''}`} onClick={()=>this.handleTitleTabClick('1')}>
                                <span className="txt">은행</span>
                            </li>
                            <li className={`${this.state.titleTab02 ? 'on':''}`} onClick={()=>this.handleTitleTabClick('2')}>
                                <span className="txt">증권사</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bankWrap flex-1 scroll_y_on">
                    {/* 은행 탭 */}
                    <ul className="h-box" style={{display:this.state.titleTab01 ? '':'none'}}>
                        <li className="flex-1"><div className="bankItem woori">우리은행</div></li>
                        <li className="flex-1"><div className="bankItem kb">국민은행</div></li>
                        <li className="flex-1"><div className="bankItem ibk">IBK기업은행</div></li>
                        <li className="flex-1"><div className="bankItem nh">농협은행</div></li>
                        <li className="flex-1"><div className="bankItem sinhan">신한은행</div></li>
                        <li className="flex-1"><div className="bankItem hana">하나은행</div></li>
                        <li className="flex-1"><div className="bankItem citi">한국씨티은행</div></li>
                        <li className="flex-1"><div className="bankItem sc">SC제일은행</div></li>
                        <li className="flex-1"><div className="bankItem bnk">경남은행</div></li>
                        <li className="flex-1"><div className="bankItem jbkj">광주은행</div></li>
                        <li className="flex-1"><div className="bankItem dgb">대구은행</div></li>
                        <li className="flex-1"><div className="bankItem jbkj">전북은행</div></li>
                        <li className="flex-1"><div className="bankItem bnk">부산은행</div></li>
                        <li className="flex-1"><div className="bankItem deutsche">도이치은행</div></li>
                        <li className="flex-1"><div className="bankItem bnp">비엔피파리바은행</div></li>
                        <li className="flex-1"><div className="bankItem sj">산림조합</div></li>
                        <li className="flex-1"><div className="bankItem kdb">산업은행</div></li>
                        <li className="flex-1"><div className="bankItem kfcc">새마을금고</div></li>
                        <li className="flex-1"><div className="bankItem exim">수출입은행</div></li>
                        <li className="flex-1"><div className="bankItem sh">수협은행</div></li>
                        <li className="flex-1"><div className="bankItem shinhyup">신협</div></li>
                        <li className="flex-1"><div className="bankItem sb">저축은행</div></li>
                        <li className="flex-1"><div className="bankItem epost">우체국</div></li>
                        <li className="flex-1"><div className="bankItem kbank">케이뱅크</div></li>
                        <li className="flex-1"><div className="bankItem kakao">카카오뱅크</div></li>
                        <li className="flex-1"><div className="bankItem boa">BOA</div></li>
                        <li className="flex-1"><div className="bankItem hsbc">HSBC은행</div></li>
                        <li className="flex-1"><div className="bankItem ccb">중국건설은행</div></li>
                        <li className="flex-1"><div className="bankItem icbc">중국공상은행</div></li>
                        <li className="flex-1"><div className="bankItem boc">중국은행</div></li>
                        <li className="flex-1"><div className="bankItem jp">JP모간체이스은행</div></li>
                        <li className="flex-1"><div className="bankItem nts">지방세입·국세납부</div></li>
                    </ul>
                    {/* 증권사 탭 */}
                    <ul className="h-box" style={{display:this.state.titleTab02 ? '':'none'}}>
                        <li className="flex-1"><div className="bankItem ibk">IBK투자증권</div></li>
                        <li className="flex-1"><div className="bankItem sinhan">신한금융투자</div></li>
                        <li className="flex-1"><div className="bankItem bnk">BNK증권</div></li>
                        <li className="flex-1"><div className="bankItem dgb">하이투자증권</div></li>
                        <li className="flex-1"><div className="bankItem kb">KB증권</div></li>
                        <li className="flex-1"><div className="bankItem hana">하나금융투자</div></li>
                        <li className="flex-1"><div className="bankItem nhb">NH투자증권</div></li>
                        <li className="flex-1"><div className="bankItem kyobo">교보증권</div></li>
                        <li className="flex-1"><div className="bankItem daishin">대신증권</div></li>
                        <li className="flex-1"><div className="bankItem meritz">메리츠증권</div></li>
                        <li className="flex-1"><div className="bankItem mirae">미래에셋증권</div></li>
                        <li className="flex-1"><div className="bankItem bookook">부국증권</div></li>
                        <li className="flex-1"><div className="bankItem samsung">삼성증권</div></li>
                        <li className="flex-1"><div className="bankItem shinyoung">신영증권</div></li>
                        <li className="flex-1"><div className="bankItem im">아이엠투자증권</div></li>
                        <li className="flex-1"><div className="bankItem yuanta">유안타증권</div></li>
                        <li className="flex-1"><div className="bankItem eugene">유진투자증권</div></li>
                        <li className="flex-1"><div className="bankItem ebest">이베스트증권</div></li>
                        <li className="flex-1"><div className="bankItem kakaopay">카카오페이증권</div></li>
                        <li className="flex-1"><div className="bankItem cape">케이프투자증권</div></li>
                        <li className="flex-1"><div className="bankItem kiwoom">키움증권</div></li>
                        <li className="flex-1"><div className="bankItem toss">토스증권</div></li>
                        <li className="flex-1"><div className="bankItem korea">한국투자증권</div></li>
                        <li className="flex-1"><div className="bankItem poss">한국포스증권</div></li>
                        <li className="flex-1"><div className="bankItem hanhwa">한화투자증권</div></li>
                        <li className="flex-1"><div className="bankItem hyundae">현대차증권</div></li>
                        <li className="flex-1"><div className="bankItem db">DB금융투자</div></li>
                        <li className="flex-1"><div className="bankItem ktb">KTB투자증권</div></li>
                        <li className="flex-1"><div className="bankItem sk">SK증권</div></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}


