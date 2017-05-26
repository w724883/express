import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import List from '../list';

if(typeof __CLIENT__ != 'undefined'){
	require('./index.scss');
	// require('../../../public/javascripts/libs/zepto.min.js');
}

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	// handle(){
		// fetch('http://open.duer.baidu.com/openduer/main/header',{
		// 	mode:"cors",
		// 	credentials: 'include',
		// 	headers:{
		// 		"Cookie":"BAIDUID=5831F61DB24679E7FB74D9E87565EE66:FG=1; PSTM=1493227298; BIDUPSID=26E6EFE61D37CA2E40FD52F4B8D3A0D8; Hm_lvt_d300619958c1246b4f17c7792229399c=1493383978; Hm_lpvt_d300619958c1246b4f17c7792229399c=1493383978; H_WISE_SIDS=101556_110136_115444_113499_115242_103342_115311_115899_107318_115340_115577_115245_115703_115701_115279_114797_115934_115534_115446_114329_115351_115032_114275_115863_110085_114568; BDSFRCVID=AbksJeC62mjDC2jZLTiRu8KO5dYJKb3TH6aoMC7dLMmywno7CjHtEG0Pqf8g0Ku-amNWogKK0mOTHvbP; H_BDCLCKID_SF=tRk8oDKhJCvbfP0k-tT85tP8qxby26nTKK3eaJ5n0-nnhp3_5lQADU4jhRnHa4RwJbn0hU7FKKnDMP0Ry6CajTcXjHLtqbbfb-oKWJca2bK_Hn7zeToh0btpbtbmhU-e32QqbxFbBbnAHR5dDRj-j-FRBP62qPDfbb7ZVDL2fC-bhKIr5nJbq4FVbfrhK46MHD7yWCvpKJv5OR5Jj65VMx0dDx6zWp30LjIOahAa5UTkOn_R3MA--t4ILNJbWUrLM6vXWK3n2qnMsq0x0bQte-bQyp_L54rwQKOMahkMal7xO-QP056jK4JKDN8tt6JP; Hm_lvt_d263a1c4005872c9ecef7d98eaa42d0e=1493383961,1494836023; Hm_lpvt_d263a1c4005872c9ecef7d98eaa42d0e=1494836023; MCITY=-131%3A; BDUSS=VMZmppQUFpempveUk4NnJjazM2RC14U2haTU1DTTAzOUpEdXVCRWNuS3NTa3BaSVFBQUFBJCQAAAAAAAAAAAEAAAC05BkUs~XAtLvYsrvIpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKy9IlmsvSJZa3; Hm_lvt_15435005fb2d0ece899f13e3a2fdfb96=1494494255; Hm_lpvt_15435005fb2d0ece899f13e3a2fdfb96=1495616316; BDRCVFR[feWj1Vr5u3D]=I67x6TjHwwYf0; PSINO=2; H_PS_PSSID=1463_21105_17001_22158; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598"
		// 	}
		// }).then((json) => {
		// 	console.log(json);
		// });
	// 	$.ajax({
	// 		url: 'http://open.duer.baidu.com/openduer/main/header',
	// 		type: 'GET',
	// 		dataType: 'jsonp'
	// 	}).done(function(res){
	// 		console.log(res);
	// 	}).fail(function (err) {
	// 		throw new Error(err);
	// 	});
	// }
	render(){
		let {session} = this.props.state;
		return (
			<div className="index">
				{
					session.user ? <span>你好 {session.user.username}<a href="/logout">退出</a></span> : <p><Link to="/login">登录</Link><a href="/register">注册</a></p>
				}

				<form action="/list" method="get"><input type="search" name="key" /><button>搜索</button></form>
				{
					session.user ? <a href="/list/add">添加</a> : null
				}
				<List />
			</div>
		);
	}
}
export default connect((state) => ({state}))(Index);
