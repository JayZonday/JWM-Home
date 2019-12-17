import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateUser } from '../../actions/user-actions'
import './index.css';

class SportSlab extends Component {
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render(){
    return (
      <div className='sports-section'>
        <h2 className='title' id='sports'>Sports Hub </h2>


        <NavLink to='/fantasy-football'><div className='fantasy-sport' id='ff'><span className='sport-btn-title' id='ff'>Fantasy Football</span></div></NavLink>
        <div className='fantasy-sport' id='fbb'><span className='sport-btn-title' id='fbb'>Fantasy Basketball<br/>[ Not In Season ]</span></div>
        <div className='fantasy-sport' id='fb'><span className='sport-btn-title' id='fb'>Fantasy Baseball<br/>[ Not In Season ]</span></div>
        <div className='fantasy-sport' id='nbl'><span className='sport-btn-title' id='nbl'>NBL <br/>[ Coming Soon ]</span></div>

        <input onChange={this.onUpdateUser}/>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
}


export default connect(mapStateToProps, mapActionsToProps)(SportSlab)
