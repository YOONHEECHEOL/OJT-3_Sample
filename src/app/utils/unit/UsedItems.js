import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp'

// 사용중인 품목
export default class UsedItems extends Component {
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
                        title='사용중인 품목' 
                        handleClickBack={()=>{this.props.handleClickPanelClose('usedItemPanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box scroll_y_on bgType2`}>
                        <div className="usedItemsWrap">
                            <ul>
                                <li className="v-box flex-1"><div className="txt">[iCUBE] 회계</div></li>
                                <li className="v-box flex-1"><div className="txt">[iCUBE] 물류</div></li>
                                <li className="v-box flex-1"><div className="txt">[Bizbox A] 영리</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


