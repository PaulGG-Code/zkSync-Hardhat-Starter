import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

require("dotenv").config();

const PHRASE = "A special hello to zkSync community from Red Alert Labs";

export default async function (hre: HardhatRuntimeEnvironment) {
	console.log(`Running deploy script for the Greeter contract`);
	const wallet = new Wallet(process.env.PRIVATE_KEY!)

	// Creating deployer object and load the artifacts of the contract we want to deploy.
	const deployer = new Deployer(hre, wallet);
	const artifact = await deployer.loadArtifact("Greeter");

	// Deposit some funds to L2 in order to be to perform L2 transactions.
	// const depositAmount = ethers.utils.parseEther("0.03");
	// const depositHandle = await deployer.zkWallet.deposit ({
	//	to: deployer.zkWallet.address,
	//	token: utils.ETH_ADDRESS,
	//	amount: depositAmount,
	//});

	// Wait until deposit is processed on zkSync
	//await depositHandle.wait();

	// Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
	// `PHRASE` is an argument for contract constractor
	console.log("Deploying Greeter....");

	const greeterContract = await deployer.deploy(artifact, [PHRASE]);

	await greeterContract.deployed();

	// Show the contract info.
	const contractAddress = greeterContract.address;
	console.log(`${artifact.contractName} was deployer to ${contractAddress}`);

	// Call the deployed contract.
	const greetingFromContract = await greeterContract.greet();
	if (greetingFromContract == PHRASE) {
		console.log(`Contract greets us with ${PHRASE}!`);
	} else {
		console.error(`Contract said something unexpected: ${greetingFromContract}`);
	}

	// Edit the greeting of the contract
	const newPhrase = "Red Alert Labs, one of the best cybersecurity firm in France greets you on zkSync";
	const setNewGreetingHandle = await greeterContract.setGreeting(newPhrase);
	await setNewGreetingHandle.wait();

	const newGreetingFromContract = await greeterContract.greet();
	if (newGreetingFromContract == newPhrase) {
		console.log(`Contract greets us with ${newPhrase}!`);
	} else {
		console.error(`Contract said something unexpected: ${newGreetingFromContract}`);

	}
}

