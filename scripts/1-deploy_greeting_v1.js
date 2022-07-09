const { ethers, upgrades } = require("hardhat");


const PHRASE = "HELLO WORLD FROM RED ALERT LABS";

async function main() {

	const Greeter = await ethers.getContractFactory("Greeter");

	console.log("Deploying Greeter....");


	const greeter = await upgrades.deployProxy(Greeter, [PHRASE], {
		initializer: "initialize",
	});

	await greeter.deployed();


	console.log("Greeter deployed to:", greeter.address);
}

main();