# Usage

use vsCode git bash 

1. cd deploy_KIP7



/* if If yarn is not installed --> npm install -g yarn */
2. yarn 



3. yarn hardhat compile


4. Create a .env file in the root folder



5. Write code       -->
                            KLAYTN_URL='mainnet RPC or testnet RPC'
                            PRIVATE_KEY='your privateKey'
                            
                            
6. yarn hardhat run scripts/deploy.ts --network klaytn
