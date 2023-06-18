import {React, useState} from "react";
import { useClaimToken, useContract, Web3Button, useAddress } from "@thirdweb-dev/react";
import { DBC } from "../../../variables/address";

const ClaimToken = () =>{

    const address = useAddress();

  const { contract } = useContract(DBC);
  const { mutateAsync: claimToken, isLoading, error } = useClaimToken(contract);
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  function handleClaimToken () {
    if (!isNaN(amount) && parseFloat(amount) > 0.0001) {
      claimToken({
        to: address,
        amount: parseFloat(amount),
      });
    } else {
      console.log('Error: El valor ingresado no cumple las condiciones.');
    }
  };

    return (
        <div className="flex justify-center items-center w-full">
            <div className='flex flex-col' >

                <input className="text-orange"
                type="number"
                value={amount}
                onChange={handleChange}
                step="0.0001"
                min="0.0001"
                placeholder="Ingrese el valor de amount"
                />
                <Web3Button
                    contractAddress={DBC}
                    action={() => handleClaimToken()}>
                    Comprar Token
                </Web3Button>
            </div>
            <div>

            </div>
        </div>
    )
}
export default ClaimToken;