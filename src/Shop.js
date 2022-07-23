import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
    const balance = useSelector(state => state.amount);

  return (
    <div>
        <h2> Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick = {()=>dispatch(actionCreators.depositMoney(100))}>+</button>
      Add this item to cart
      <button className="btn btn-primary mx-2" onClick = {()=>dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
      <button className="btn btn-primary mx-2" onClick = {()=>{(depositMoney(100))}}>+</button>
      Add this item to cart {balance}
      <button className="btn btn-primary mx-2" onClick = {()=>{(withdrawMoney(100))}}>-</button>

    </div>
  )
}

export default Shop
