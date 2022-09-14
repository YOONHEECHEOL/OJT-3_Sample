import React, { Component, Fragment } from 'react';

// 공통 패널
export default class PanelWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        // 패널 타입
        // sub         => 폰(전체화면) / 태블릿(상세)
        // bs          => 폰(하단팝업) / 태블릿(하단팝업)
        // lnb         => 우측레이어(최상위 레이어)
        // drawer      => 우측레이어(부모상속 레이어)

        if(this.props.Type === 'sub'){
            return (
                <Fragment>
                    {/* 페이지 패널 */}
                    <div className={`panel-sub-wrap v-box animated03s fadeInRight`} 
                    style={{display:this.props.Open ? '':'none'}}
                    >{this.props.children}</div>
                </Fragment>
            );
        }else if(this.props.Type === 'bs'){
            return (
                <Fragment>
                    {/* 하단시트 패널 */}
                    <div className={`panel-bs-wrap animated03s fadeInUp v-box`}
                    style={{display:this.props.Open ? '':'none',zIndex:this.props.zIndex}}
                    >{this.props.children}</div>
                    <div className={`${this.props.zIndex === '3' ? 'dim2':this.props.zIndex === '4' ? 'dim3':this.props.zIndex === '5' ? 'dim4':this.props.zIndex === '6' ? 'dim5':'dim2'}`} style={{display:this.props.Open ? '':'none'}} onClick={this.props.Close}/>
                </Fragment>
            );
        }else if(this.props.Type === 'lnb'){
            return (
                <Fragment>
                    {/* lnb 패널 */}
                    <div className={`panel-lnb-wrap animated03s fadeInRight v-box`}
                    style={{display:this.props.Open ? '':'none'}}
                    >{this.props.children}</div>
                    <div className={`dimFixed`} style={{display:this.props.Open ? '':'none'}} onClick={this.props.Close}/>
                </Fragment>
            );
        }else if(this.props.Type === 'drawer'){
            return (
                <Fragment>
                    {/* lnb 패널 */}
                    <div className={`panel-drawer-wrap animated03s fadeInRight v-box`}
                    style={{display:this.props.Open ? '':'none'}}
                    >{this.props.children}</div>
                    <div className={`dim2`} style={{display:this.props.Open ? '':'none'}} onClick={this.props.Close}/>
                </Fragment>
            );
        }else if(this.props.Type === 'full'){
            return (
                <Fragment>
                    {/* 페이지 패널 */}
                    <div className={`panel-full-wrap v-box animated03s fadeInRight`} 
                    style={{display:this.props.Open ? '':'none'}}
                    >{this.props.children}</div>
                </Fragment>
            );
        }
    }
}


