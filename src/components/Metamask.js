import React, { Component } from "react";
import { Link } from 'react-router-dom';
import dogadotado from '../img/dog-adotado.gif';
import abi from "../contract/AdotarAuAu.json";

import { ethers } from "ethers";

const CONTRACT_ABI = abi.abi;
const CONTRACT_ADDR = "0xD5E522f9d1b02487190377642785FD1a23a81d3B";

class Metamask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.item = props.item;
  }

  async connectToMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    const block = await provider.getBlockNumber();

    provider.on("block", (block) => {
      this.setState({ block });
    });

    let adotivo =  await this.obterFicha( this.state.item.id); 
    console.log(adotivo);
    this.setState({
      selectedAddress: accounts[0],
      balance: balanceInEther,
      block,
      ficha : adotivo ,
    });

   
  }

  async adoteContrato(ficha) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(ficha);

    //contrato : 0xD5E522f9d1b02487190377642785FD1a23a81d3B
    const contract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, signer);

    let tx = await contract.adotar(
      ficha.id,
      ficha.nome,
      ficha.porte,
      ficha.idade,
      ficha.sexo
    );
    await tx.wait();
    console.log("Hash -- ", tx.hash);
  }

  async obterFicha(id) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDR, CONTRACT_ABI, signer);

    let ficha = await contract.obterAdotivo(id);
    console.log("ficha -- ", ficha);
    return ficha; 
  }

  renderMetamask() {
    if (!this.state.selectedAddress) {
      return (
        <button
          className="btn text-white"
          onClick={() => this.connectToMetamask()}
        >
          Conectar
        </button>
      );
    } else if (this.state.ficha.id== this.state.item.id) {
      return (
        <div>
          <h2  className="work-title">Adotado</h2>
          <div className="image-container center-block">
          <img src={dogadotado}  className="detail-image" />
          </div>
          <hr/> 
           <div>
                        <Link to="/adote">
                                <button className="btn text-white">
                                    Encontre
                                </button>
                        </Link>                     

          </div>
        </div>
      );
    }
    else  {
      return (
       <div>
          <h2  className="work-title">Seu dados:</h2>
          <p>{this.state.selectedAddress}</p>
          <p>BALANCE:{this.state.balance}</p>
          <button
            className="btn text-white"
            onClick={() => this.adoteContrato(this.state.item)}
          >
        
            {" "}
            Adotar
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderMetamask()}</div>;
  }
}

export default Metamask;
