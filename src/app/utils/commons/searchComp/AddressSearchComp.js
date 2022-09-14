import React, { Component, Fragment } from 'react';

// 주소 검색리스트
export default class AddressSearchComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 데이터 없을때
            emptyData: false,

            icoArrow01: false,
            icoArrow02: false,
            icoArrow03: false,
            icoArrow04: false,
            icoArrow05: false,
        }
    }

    render() {
        return (
            <Fragment>
                <div className="addressList flex-1" style={{display:this.state.emptyData ? 'none':''}}>
                    <ul>
                        <li className="v-box">
                            <div className="infoUnit01 h-box">
                                <div className="addrNumber">04523</div>
                                <div className="addrName flex-1">더존비즈온</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">도로명</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로 29</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">지번</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로1가 더존을지타워</div>
                            </div>
                            <div className="mapToggle h-box" onClick={()=>{this.setState({icoArrow01:!this.state.icoArrow01})}}>
                                <div className="ico" />
                                <div className="txt">{this.state.icoArrow01 ? '지도접기':'지도보기'}</div>
                                <div className={`icoArrow ${this.state.icoArrow01 ? 'up':'down'}`} />
                            </div>
                            <div className="mapView" style={{display:this.state.icoArrow01 ? '':'none'}}>지도영역</div>
                        </li>
                        <li className="v-box">
                            <div className="infoUnit01 h-box">
                                <div className="addrNumber">04523</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">도로명</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로 29</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">지번</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로1가 더존을지타워</div>
                            </div>
                            <div className="mapToggle h-box" onClick={()=>{this.setState({icoArrow02:!this.state.icoArrow02})}}>
                                <div className="ico" />
                                <div className="txt">{this.state.icoArrow02 ? '지도접기':'지도보기'}</div>
                                <div className={`icoArrow ${this.state.icoArrow02 ? 'up':'down'}`} />
                            </div>
                            <div className="mapView" style={{display:this.state.icoArrow02 ? '':'none'}}>지도영역</div>
                        </li>
                        <li className="v-box">
                            <div className="infoUnit01 h-box">
                                <div className="addrNumber">04523</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">도로명</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로 29</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">지번</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로1가 더존을지타워</div>
                            </div>
                            <div className="mapToggle h-box" onClick={()=>{this.setState({icoArrow03:!this.state.icoArrow03})}}>
                                <div className="ico" />
                                <div className="txt">{this.state.icoArrow03 ? '지도접기':'지도보기'}</div>
                                <div className={`icoArrow ${this.state.icoArrow03 ? 'up':'down'}`} />
                            </div>
                            <div className="mapView" style={{display:this.state.icoArrow03 ? '':'none'}}>지도영역</div>
                        </li>
                        <li className="v-box">
                            <div className="infoUnit01 h-box">
                                <div className="addrNumber">04523</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">도로명</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로 29</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">지번</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로1가 더존을지타워</div>
                            </div>
                            <div className="mapToggle h-box" onClick={()=>{this.setState({icoArrow04:!this.state.icoArrow04})}}>
                                <div className="ico" />
                                <div className="txt">{this.state.icoArrow04 ? '지도접기':'지도보기'}</div>
                                <div className={`icoArrow ${this.state.icoArrow04 ? 'up':'down'}`} />
                            </div>
                            <div className="mapView" style={{display:this.state.icoArrow04 ? '':'none'}}>지도영역</div>
                        </li>
                        <li className="v-box">
                            <div className="infoUnit01 h-box">
                                <div className="addrNumber">04523</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">도로명</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로 29</div>
                            </div>
                            <div className="infoUnit02 h-box">
                                <div className="badgeText">지번</div>
                                <div className="addrText flex-1">서울특별시 중구 을지로1가 더존을지타워</div>
                            </div>
                            <div className="mapToggle h-box" onClick={()=>{this.setState({icoArrow05:!this.state.icoArrow05})}}>
                                <div className="ico" />
                                <div className="txt">{this.state.icoArrow05 ? '지도접기':'지도보기'}</div>
                                <div className={`icoArrow ${this.state.icoArrow05 ? 'up':'down'}`} />
                            </div>
                            <div className="mapView" style={{display:this.state.icoArrow05 ? '':'none'}}>지도영역</div>
                        </li>
                    </ul>
                </div>
                {/* 데이터 없을때 */}
                <div className="emptyData flex-1 v-box" style={{display:this.state.emptyData ? '':'none'}}>
                    <div className="flex-1"/>
                    <div className="noSearch">검색결과가 없습니다.</div>
                    <div className="flex-1"/>
                    <div className="noSearchInfoBox">
                        <dl>
                            <dt>이렇게 검색해 보세요.</dt>
                            <dd>단어의 철자가 정확한지 확인해 보세요.</dd>
                            <dd>한글을 영문으로, 영문을 한글로 입력한 것은 아닌지 확인해 보세요.</dd>
                            <dd>단어의 수를 줄이거나 일반적인 단어로 검색해 보세요.</dd>
                            <dd>두 단어 이상인 경우 띄어쓰기를 해보세요.</dd>
                            <dd>특수문자를 빼고 검색해 보세요.</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}


