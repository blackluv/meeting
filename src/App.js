import './App.css';
import detectEthereumProvider from '@metamask/detect-provider'
import { useState, useEffect } from 'react';
import Calender from './components/Calender';

function App() {
  const [account, setAccount] = useState(false);

  useEffect(() =>{
    isConnected();
  }, []);

  const isConnected = async () => {
    const provider = await detectEthereumProvider();
    const accounts = await provider.request({method: "eth_accounts"});

    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No authorised account found")
    }
  }
  const connect = async () =>{
    try{
    const provider = await detectEthereumProvider();

    //returns an aray of accounts
    const accounts = await provider.request({method: "eth_requestAccounts"});

    //check if array at least one element
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      console.log('account found', accounts);      
    } else {
      alert('No accounts found');
    }
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Yummy Meetings</h1>
        <div id='slogan'>Soon to be 1 billion dollar app</div>
        {!account && <button onClick={connect}>Connect Your Wallet</button>}
        {account && <Calender account={account}/>}
      </header>
    </div>
  );
}

export default App;
