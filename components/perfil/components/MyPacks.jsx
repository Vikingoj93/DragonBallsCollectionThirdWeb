import {React, useState} from 'react';
import { Web3Button, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import {PACK_ADDRESS} from '../../../variables/address';
import PacksRewardsCards from './PacksRewardsCards';

const MyPacks = ()=> {
    const address = useAddress();

    const {
        contract : pack,
    } = useContract(PACK_ADDRESS, 'pack');

    const {
        data, isLoading
    } = useOwnedNFTs(pack, address);

    const [openPackRewards, setOpenPackRewards]= useState(null);

    async function openPack(packId) {
        const cardRewards = await pack.open(parseInt(packId), 1);
        console.log(cardRewards)
        setOpenPackRewards(cardRewards);
    }

    return (
        <div className='flex p-4'>
            {!isLoading ? (
                data?.map((pack, index)=>(
                    <div key={index}>
                        <div>
                            <h3>{pack.metadata.name}</h3>
                            <p>cantidad: {pack.quantityOwned}</p>
                            <Web3Button
                            contractAddress={PACK_ADDRESS}
                            action={()=>openPack(pack.metadata.id)}>

                                Open Pack

                            </Web3Button>
                        </div>
                    </div>
                ))
            ) : (
                <p>cargando...</p>
            )}
        
        {openPackRewards && openPackRewards.erc1155Rewards.length && (
                <div className="container">
                    <h3>Pack Rewards:</h3>
                    <div className="grid">
                        {openPackRewards.erc1155Rewards.map((card, index) => (
                            <PacksRewardsCards tokenId={card} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyPacks;