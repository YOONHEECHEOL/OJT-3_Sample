import React, { Component, Fragment } from 'react';

// 공통 팝업
export default class PopupWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className={`popup-wrap v-box animated03s fadeIn`} 
                style={{display:this.props.Open ? '':'none',zIndex:this.props.zIndex}}
                >{this.props.children}</div>
                <div className={`${this.props.zIndex === '3' ? 'dim2':this.props.zIndex === '4' ? 'dim3':this.props.zIndex === '5' ? 'dim4':this.props.zIndex === '6' ? 'dim5':'dim2'}`} style={{display:this.props.Open ? '':'none'}} onClick={this.props.Close}/>
            </Fragment>
        );
    }
}


