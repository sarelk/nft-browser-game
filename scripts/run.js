const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Angry Cat", "Rawring Cat", "Grumpy Cat"],       // Names
        ["https://i.imgur.com/GPDDW1s.jpeg", // Images
            "https://i.imgur.com/BXF7jhH.jpeg",
            "https://i.imgur.com/jparT67.jpeg"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        "Big Doge",
        "https://i.imgur.com/HJQWbml.jpg",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    console.log("Done!");

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();