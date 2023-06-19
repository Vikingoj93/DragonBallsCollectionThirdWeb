import {React, useState} from "react";
import { useClaimToken, useContract, Web3Button, useAddress, useTokenSupply, useMetadata, useActiveClaimCondition } from "@thirdweb-dev/react";
import { DBC } from "../../../variables/address";


const ClaimToken = () =>{

  const address = useAddress();
  const { data: contract } = useContract(DBC, "token-drop");
  const { data: metadata } = useMetadata(contract)
  const { mutateAsync: claimToken, isLoading, error } = useClaimToken(contract);
  const [amount, setAmount] = useState('');
  const {
    data : totalSupply
  } = useTokenSupply(contract)

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const { data: activeClaimCondition } = useActiveClaimCondition(contract);

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

    const supply = parseInt(totalSupply?.displayValue);
    const total = parseInt(activeClaimCondition?.maxClaimableSupply);
    const result = total - supply;
    const fecha = activeClaimCondition?.startTime.toUTCString()
    console.log(fecha)

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className='flex items-center flex-col bg-none' style={{width: '420px', height: '300px'}} >
              <div className=" w-32 h-32 m-3">
                <img src={metadata?.image} className="w-full rounded-2xl border border-white" />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold ml-2">{metadata?.name}</h2>

              <p>{metadata?.description}</p>
              <div className="flex m-3">
                <input className="text-black w-24 rounded-md mx-3 "
                type="number"
                value={amount}
                onChange={handleChange}
                step="0.0001"
                min="0.0001"
                placeholder=" 'DBT' "
                />
                <Web3Button className=" w-6 "
                    contractAddress={DBC}
                    action={() => handleClaimToken()}>
                    Comprar Token
                </Web3Button>
              </div>
            </div>
            <div>
              <p>Direccion del contrato: {DBC}</p>
              <p>token Comprados: {totalSupply?.displayValue} {totalSupply?.symbol}</p>
              <p>token suministrados: {activeClaimCondition?.maxClaimableSupply}</p>
              <p>token restantes: {result}</p>
              <p>inicio de primera venta Fase 1: {fecha}</p>
            </div>
        </div>
    )
}
export default ClaimToken;