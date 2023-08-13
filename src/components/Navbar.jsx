import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {FaRegUserCircle} from 'react-icons/fa';
import Wallet from './Wallet'

const Navbar = () => {
  return (
    <div className='header'>
      <h1 style={{color:"#9b1fe9",padding:"20px",}}>Faucets</h1>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
       <div>
       <Dropdown style={{width:"100%",paddingBottom:"50px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {/* <img src="https://faucets1.netlify.app/static/media/PAHYDMBo…hQlfCzcA8OssSK9id0YNSsA.315698e0099ec59e9bbf.webp" alt="" /> */}
        Arbitrum Rinkeby
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Avalanche Fuji</Dropdown.Item>
        <Dropdown.Item href="#/action-2">BNB Chain Testnet</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ethereum Rinkeby</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Fantom Testnet</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Harmony Testnet</Dropdown.Item>
        <Dropdown.Item href="#/action-6">POA Network Sokol</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Polygon Mumbai</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       </div>
       <div>
        {/* <button style={{margin:"20px" ,padding:"8px"}}>Connect Wallet</button> */}
        <Wallet />
        </div>
        <div style={{fontSize:"20px"}}>
        <FaRegUserCircle  />
        </div>
        </div>
       
    </div>
   
  )
}

export default Navbar





