import React from "react";
import { MARKETPLACE_ADDRESS, PACK_ADDRESS } from "../../../../variables/address";
import { MediaRenderer, Web3Button, useAddress, useContract, useDirectListings,useNFT } from "@thirdweb-dev/react";


const PackNFTCard = ({tokenId})=> {

    const address = useAddress();

    const {contract: marketplace} = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const {contract: pack} = useContract(PACK_ADDRESS); 

    const {
        data: PackNFT,
        isLoading: loadingNFT,
    } = useNFT(pack, tokenId);

    const {
        data: packListings,
        isLoading: loadingPackListings
    } = useDirectListings(
        marketplace,
        {
            tokenContract: PACK_ADDRESS
        }
    )

    async function buyPack () {
        let txResult;

        if(packListings?.[tokenId]){
            txResult = await marketplace?.directListings.buyFromListing(packListings[tokenId].id, 1)
        } else {
            throw new Error ("no hay paquetes para la venta");
        }
        return txResult;
    }

    return (
        <div>
            {!loadingNFT && !loadingPackListings ? 
            (
                <div className="!flex !flex-col m-2 bg-orange">
                    <div>
                        <MediaRenderer src={PackNFT?.metadata?.image}
                        width="80%" height="100%" 
                        />
                    </div>
                    <div>
                        <h3>{PackNFT?.metadata?.name}</h3>
                        <p>costo: {packListings[tokenId].currencyValuePerToken.displayValue}{` ` + packListings[tokenId].currencyValuePerToken.symbol}</p>
                        <p>supply: {packListings[tokenId].quantity}</p>
                        {!address ? (
                            <p>por favor conecta tu billetera  para comprar</p>
                        ) : (
                        <Web3Button contractAddress={MARKETPLACE_ADDRESS}
                        action={() => buyPack()}>
                            Buy Pack
                        </Web3Button>
                        )}
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )
            }
        </div>
    )
} 

export default PackNFTCard;