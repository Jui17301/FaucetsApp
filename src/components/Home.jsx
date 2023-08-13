import React from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import {FaCopyright} from 'react-icons/fa'
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div style={{backgroundColor:"#eef2fe",margin:"30px"}}>
      <h4 style={{color:"white",backgroundColor:"#9b1fe9",padding:"20px",textAlign:"center"}}>Notice here</h4>
      <div className='home__header'>
        <h1 style={{color:"#9b1fe9"}}>Request testnet LINK</h1>
        <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract </p>
        <div style={{backgroundColor:"white"}} className='home__form'>
         <p style={{backgroundColor:"#eef2fe",padding:"15px"}}>Your wallet is connected to <span style={{fontWeight:"700"}}>Ethereum Kovan</span>,so you are requesting <span style={{fontWeight:"700"}}>Ethereum Kovan</span> Link/ETH </p>
         <h6>Wallet Address</h6>
        <input type="text" placeholder='Your Wallet Address...' />
        <br /><br />
        <h6>Request Type</h6>
        <input type="text" placeholder='20 Test Link' />
        <input type="text" style={{marginLeft:"20px"}} placeholder='0.5 ETH'/>
        <div className='recaptcha'>
        
        </div>
        <Button style={{color:"white",backgroundColor:"#9b1fe9",width:"25%"}}>Send Request</Button>
        </div>
      </div>
      {/* <br /> */}
      <div className="home__table" style={{backgroundColor:"white",padding:"10px"}}>
        <h5 >Request History</h5>
        {/* <p style={{backgroundColor:"#eef2fe",padding:"15px",width:"30%"}}>ETH Transaction History</p> */}
        <Button onClick={<Table striped>
      <thead style={{textAlign:"center"}}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{textAlign:"center"}}>
        <tr>
          <td>1</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>7sgdfer35475896</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:23 AM</td>
          <td>974</td>
          <td>jte5485869jndn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:23 AM</td>
          <td>9756</td>
          <td>jte76tfdedn</td>
        </tr>
        
      </tbody>
    </Table>} style={{backgroundColor:"#eef2fe",padding:"15px",width:"30%",color:"black"}}>ETH Transaction History</Button>
    <br />
        <Button style={{backgroundColor:"blue",color:"white",width:"40%"}}>ETH Transaction History</Button>
    <Table striped>
      <thead style={{textAlign:"center"}}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{textAlign:"center"}}>
        <tr>
          <td>1</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>7sgdfer35475896</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:23 AM</td>
          <td>974</td>
          <td>jte5485869jndn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:23 AM</td>
          <td>9756</td>
          <td>jte76tfdedn</td>
        </tr>
        
      </tbody>
    </Table>
      </div>
    
    <footer>
    <p><FaCopyright/> copyright 2023 - All Right Reserved by Faucet</p>
  </footer>
  </div>
  </div>
  )
}

export default Home
