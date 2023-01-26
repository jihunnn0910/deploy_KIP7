# Usage

use vsCode git bash 

1. cd deploy_KIP7


2. yarn 


3. yarn hardhat compile


4. Create a .env file in the root folder



5. Write code in .env   -->   KLAYTN_URL='mainnet RPC or testnet RPC' /   PRIVATE_KEY='your privateKey'
                            
                            
6. yarn hardhat run scripts/deploy.ts --network klaytn
