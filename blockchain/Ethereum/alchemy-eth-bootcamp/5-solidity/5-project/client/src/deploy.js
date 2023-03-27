import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow.json';

export default async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  const deployedContract = await factory.deploy(arbiter, beneficiary, {value});
  return deployedContract;
}