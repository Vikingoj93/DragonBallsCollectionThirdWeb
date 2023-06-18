import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "binance-testnet");

    const packsAddress = "0xEfA925b3013871e755Ea74BAc3ED9d288410a8cB";
    const cardAddress = "0xa6BC00d400Ecf412476B2B4B5ccECC8Defa11Ee6";

    const pack = sdk.getContract(packsAddress, "pack");
    const card = sdk.getContract(cardAddress, "edition");

    (await card).setApprovalForAll(packsAddress, true);
    console.log("approved Contract");

    console.log("creating pack");
    const creatingPack = (await pack).create({
        packMetadata: {
            name: "pack 02",
            description: "This is another a pack",
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards: 10
            }
        ],
        rewardsPerPack: 1,
    })

    console.log("Packs created")
})();