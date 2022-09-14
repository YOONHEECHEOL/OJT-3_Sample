import React, { Component, Fragment } from 'react';

// 로딩 컴포넌트
export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="loadingWrap v-box" style={{display:this.props.visible ? '':'none'}}>
                    <div className="bg_loading flex-1" />
                </div>
            </Fragment>
        );
    }
}


