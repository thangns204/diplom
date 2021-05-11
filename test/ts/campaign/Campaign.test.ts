import {expect} from "../chai-setup";
import {ethers} from 'hardhat';
import {Contract, ContractFactory, BigNumber, utils} from 'ethers';
import {Provider} from '@ethersproject/providers';
import {SignerWithAddress} from 'hardhat-deploy-ethers/dist/src/signer-with-address';

import {
    ADDRESS_ZERO, MAX_UINT256, fromWei, toWei,
    getLatestBlock,
    getLatestBlockNumber,
    mineBlocks, mineBlockTimeStamp, mineOneBlock
} from "../shared/utilities";

const BLOCKS_PER_WEEK = 201600;

async function latestBlocktime(provider: Provider): Promise<number> {
    const {timestamp} = await provider.getBlock('latest');
    return timestamp;
}

async function latestBlocknumber(provider: Provider): Promise<number> {
    return await provider.getBlockNumber();
}

describe('Campaigns', () => {
    const {provider} = ethers;

    let operator: SignerWithAddress;
    let liquidityFund: SignerWithAddress;
    let bob: SignerWithAddress;
    let carol: SignerWithAddress;
    let david: SignerWithAddress;

    before('provider & accounts setting', async () => {
        [operator, liquidityFund, bob, carol, david] = await ethers.getSigners();
    });


});
