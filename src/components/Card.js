import React from 'react';
import "./Card.css";

function Card({ img, name, email, bankAccounts }) {
  
  return (
    <div className='deatailofcard'>
      <img className='userimg' src={img} alt='' />
      <p className='user-name'> {name}</p>
      <p className='user-email'>{email}</p>

      <h3 className='accountNumber'>Accounts Deatail:</h3>
      <div className='acc-container'>
        {
        bankAccounts.map((account, index) => (
          <div className='saving-container' key={index}>
            <p className='type-acc'>{account.accountType}</p>
            <p className='acc-no'>Account No: {account.accountNumber}</p>
            <p className='acc-no'>Balance: Rs. {account.balance} </p>
          </div>
        ))
        }
        {
           bankAccounts.length === 0 ? <p className='not-found'>Employee Account Details Not found</p> : null
        }
      </div>
    </div>
  );
}
export default Card;
