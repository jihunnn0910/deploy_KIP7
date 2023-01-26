import { ethers } from 'hardhat';

async function main() {
  const kip7 = await ethers.getContractFactory('MyToken');
  const KIP7 = await kip7.deploy();
  await KIP7.deployed();
  console.log('배포된 컨트랙트의 주소 : ', KIP7.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});