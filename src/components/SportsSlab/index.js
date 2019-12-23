import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateUser, apiRequest } from '../../actions/user-actions'
import './index.css';

class SportSlab extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser('Charlie');
  }

  componentDidMount(){

  }

  render(){
    console.log(this.props)
    return (
      <div className='sports-section'>
        <h2 className='title' id='sports'>Sports Hub </h2>


        <NavLink to='/fantasy-football'><div className='fantasy-sport' id='ff'><span className='sport-btn-title' id='ff'>Fantasy Football</span></div></NavLink>
        <div className='fantasy-sport' id='fbb'><span className='sport-btn-title' id='fbb'>Fantasy Basketball<br/>[ In Progress ]</span></div>
        <div className='fantasy-sport' id='fb'><span className='sport-btn-title' id='fb'>Fantasy Baseball<br/>[ Not In Season ]</span></div>
        <div className='fantasy-sport' id='nbl'><span className='sport-btn-title' id='nbl'>NBL <br/>[ Coming Soon ]</span></div>


      </div>
    );
  }
}

const mapStateToProps = (state, props) =>{
  return{
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProp}`
  }
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  apiRequest: apiRequest
}


export default connect(mapStateToProps, mapActionsToProps)(SportSlab)
