import React, { Component, Fragment } from 'react';

// 리스트 로딩 컴포넌트
export default class ListLoading extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="listLoadingWrap v-box flex-1">
                    <div className="loadBg flex-1 h-box">
                        <div className="bg01" />
                        <div className="bg02 flex-1" />
                        <div className="bg03" />
                    </div>
                </div>
            </Fragment>
        );
    }
}


