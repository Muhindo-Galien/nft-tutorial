const { expect } = require('chai');
const {ethers} = require("hardhat");

describe('NFT', function () {
  let nftContract;
  let owner;
  let addr1;

  beforeEach(async function () {
    const NFT = await ethers.getContractFactory('NFT');
    owner = (await ethers.getSigners())[0]; // Retrieve owner as a signer
    addr1 = '0x60031b5df905D92786dea1781E731B88b959c8A6'

    nftContract = await NFT.deploy();
    await nftContract.deployed();
  });

  it('Should mint a new NFT', async function () {
    const recipient = addr1;
    const tokenURI = 'https://example.com/token-metadata.json';
    const price = ethers.utils.parseEther('0.1');

    await nftContract.connect(owner).mint(tokenURI, recipient, price);
    const tokenId = await nftContract.tokenCounter();

    expect(await nftContract.ownerOf(tokenId)).to.equal(recipient);
    expect(await nftContract.tokenURIMap(tokenId)).to.equal(tokenURI);
    expect(await nftContract.priceMap(tokenId)).to.equal(price);
  });
});
