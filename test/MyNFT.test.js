const { expect } = require('chai');

describe('NFT', function () {
  let nftContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    const NFT = await ethers.getContractFactory('NFT');
    [owner, addr1, addr2] = await ethers.getSigners();
    console.log(addr1);

    nftContract = await NFT.deploy();
    await nftContract.deployed();
  });

  it('Should mint a new NFT', async function () {
    console.log('first', addr1);
    // const recipient = addr1.address;
    // const tokenURI = 'https://example.com/token-metadata.json';
    // const price = ethers.utils.parseEther('0.1');

    // await nftContract.connect(owner).mint(tokenURI, recipient, price);
    // const tokenId = await nftContract.tokenCounter();

    // expect(await nftContract.ownerOf(tokenId)).to.equal(recipient);
    // expect(await nftContract.tokenURIMap(tokenId)).to.equal(tokenURI);
    // expect(await nftContract.priceMap(tokenId)).to.equal(price);
  });

  it('Should update the price of an NFT', async function () {
    console.log('second');
    // const recipient = addr1.address;
    // const tokenURI = 'https://example.com/token-metadata.json';
    // const price = ethers.utils.parseEther('0.1');
    // const newPrice = ethers.utils.parseEther('0.2');

    // await nftContract.connect(owner).mint(tokenURI, recipient, price);
    // const tokenId = await nftContract.tokenCounter();

    // expect(await nftContract.priceMap(tokenId)).to.equal(price);

    // await nftContract.connect(recipient).updatePrice(tokenId, newPrice);
    // expect(await nftContract.priceMap(tokenId)).to.equal(newPrice);
  });
});
