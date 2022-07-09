const { ethers, upgrades } = require("hardhat");

const PROXY = "0xec48408f3932BeAAF3FAbF67DD8B0B16AA7F9B7d";

async function main() {

	const GreetingV2 = await ethers.getContractFactory("GreeterV2");
	console.log("Upgrading Greeting....");
	await upgrades.upgradeProxy(PROXY, GreetingV2);
	console.log("Greeter upgraded successfully");
}

main();