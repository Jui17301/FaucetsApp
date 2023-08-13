import React, { useState } from "react";
// import "./WalletConnectButton.css"; // Import your CSS file

const WalletConnectButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wallet-connect">
      <button className="connect-button" onClick={openModal}>
     
        Connect Wallet
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="box">
              <h2>Connect Wallet</h2>
              <div className="cards">
                <div className="card">
                  <img src="./images/metamask-icon.png" alt="Metamask" />
                  <p>Metamask</p>
                </div>
                <div className="card">
                  <img
                    src="./images/walletconnect-icon.png"
                    alt="WalletConnect"
                  />
                  <p>WalletConnect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;