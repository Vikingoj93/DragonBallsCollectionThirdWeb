import React from "react";
import { useContract, useDirectListings } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS, PACK_ADDRESS} from "../../../../variables/address";
import PackNFTCard from "./PackNFT"


const Shop = () => {

    const { contract: marketplace} = useContract(MARKETPLACE_ADDRESS, "marketplace-v3"); 
    const {
        data: directListings,
        isLoading: loadingDirectListings,
      } = useDirectListings(
            marketplace,
            {
             tokenContract : PACK_ADDRESS   
            }
        );

    return (
        <div>
            <h1>Lista de Esferas</h1>
            <div className=" !m-1 !flex !justify-normal"> 
                {!loadingDirectListings ? ( directListings.map((listing, index)=>(
                    <PackNFTCard key={index} tokenId={listing.tokenId}  />
                ))
                ) : (
                <p>cargando...</p>
                )
                }
            </div>
            
        </div>
    )
}

export default Shop;