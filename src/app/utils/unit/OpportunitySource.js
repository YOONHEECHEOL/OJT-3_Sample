import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';

// 기회출처
export default class OpportunitySource extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="flex-1 v-box">
                    {/* 헤더 */}
                    <HeaderComp
                        type='headerType1'
                        title='기회출처 정보' 
                        handleClickBack={()=>{this.props.handleClickPanelClose('opportunitySourcePanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box`}>
                        <div className="basicContents">
                            <div className="titleUnit h-box">
                                <div className="titleText flex-1">2021.01.08</div>
                            </div>
                        </div>
                        {/* 출처정보 */}
                        <div className="osBox h-box">
                            <div className="ico" />
                            <div className="text flex-1 v-box">
                                <div>
                                    <span className="text_blue">마케팅캠페인</span>을(를) 통해서 <span className="text_blue">마케팅팀 홍길동 과장</span>(이)가 <span className="text_blue">자동</span>으로 <span className="text_blue">기회할당</span> 하였습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
