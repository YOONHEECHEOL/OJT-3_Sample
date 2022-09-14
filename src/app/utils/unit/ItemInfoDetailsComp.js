import React, { Component, Fragment } from 'react';
import HeaderComp from '../commons/HeaderComp';
import ItemInfoDetailsListComp from './ItemInfoDetailsListComp';

// 품목정보
export default class ItemInfoDetailsComp extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

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
                        title='품목정보'
                        handleClickBack={()=>{this.props.handleClickPanelClose('itemInfoDetailsPanel');}}
                    />
                    {/* 상세 컨텐츠 */}
                    <div className={`viewBody flex-1 v-box bgType1`}>
                        {/* 품목정보 리스트 */}
                        <ItemInfoDetailsListComp />
                    </div>
                </div>
            </Fragment>
        );
    }
}


