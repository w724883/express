import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
if(typeof __CLIENT__ != 'undefined'){
	require('./index.scss');
}
class List extends React.Component{
	constructor(props) {
		super(props);
		this.page = 1;
	}

	handlePrev(){
		if(this.page == 1){
			return false;
		}
		this.handleGetData(--this.page);
	}
	handleNext(){
		this.handleGetData(++this.page);
	}
	handleGetData(){
		let {dispatch} = this.props;
		Promise.all([
		  	dispatch(actions.fetchList("page="+this.page))
		]);
	}
	componentWillMount() {
		// if(typeof __CLIENT__ != 'undefined'){
		// 	this.handleGetData.call(this);
		// }
	}
	render(){
		let {list} = this.props.state;
		return list.data && list.data.length ? (
			<div className="list">
				<ul>
					{
						list.data.map((value,key) => (
							<li key={key}>
								<span>{value.title}</span>
								<em> —{value.author}</em>
								<p>{value.descriptions}</p>
							</li>
						))
					}
				</ul>
				<div className="page">
					<button onClick={this.handlePrev.bind(this)} disabled={this.page == 1 ? "disabled" : ""}>上一页</button> 
					<button onClick={this.handleNext.bind(this)} disabled={list.data.length < list.num ? "disabled" : ""}>下一页</button>
				</div>
			</div>
		) : null;
	}
}
List = connect((state) => ({state}))(List);
export default List;
module.exports = List;