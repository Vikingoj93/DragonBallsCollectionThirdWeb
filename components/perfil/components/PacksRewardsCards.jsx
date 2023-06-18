import { useContract, useNFT } from "@thirdweb-dev/react";
import {ESFERAS_ADDRESS} from '../../../variables/address';
import { BigNumber } from "ethers";

let tokenId = 0 | BigNumber

const PacksRewardsCards = ()=> {

    const { contract } = useContract(ESFERAS_ADDRESS);
    const { data: nft } = useNFT(contract, tokenId);

    return(
        <div className=''>
            {nft && (
                <>
                    <h3>{nft.metadata.name}</h3>
                    <h3>{nft.type}</h3>
                </>
            )}
        </div>
    )
}
export default PacksRewardsCards;