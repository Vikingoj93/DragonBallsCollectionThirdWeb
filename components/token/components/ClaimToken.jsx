import React, { useState } from "react";
import moment from "moment";
import {
  useClaimToken,
  useContract,
  Web3Button,
  useAddress,
  useTokenSupply,
  useMetadata,
  useActiveClaimCondition,
} from "@thirdweb-dev/react";
import { DBC } from "../../../variables/address";

const ClaimToken = () => {
  const address = useAddress();
  const { data: contract } = useContract(DBC, "token-drop");
  const { data: metadata, isLoading: isLoadingContract } = useMetadata(contract);
  const { mutateAsync: claimToken, isLoading: isLoadingClaimToken  } = useClaimToken(contract);
  const [amount, setAmount] = useState("");
  const { data: totalSupply } = useTokenSupply(contract);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const { data: activeClaimCondition, isLoading: isLoadingClaimCondition } = useActiveClaimCondition(contract);

  function handleClaimToken() {
    if (
      !isNaN(amount) &&
      parseFloat(amount) > 0.0001 &&
      !isNaN(amount) &&
      parseFloat(amount) < 1
    ) {
      claimToken({
        to: address,
        amount: parseFloat(amount),
        checkERC20Allowance: false,
      });
    } else {
      console.log("Error: El valor ingresado no cumple las condiciones.");
    }
  }

  const name = metadata?.name;
  const simbol = totalSupply?.symbol;
  const supply = parseInt(totalSupply?.displayValue);
  const total = parseInt(activeClaimCondition?.maxClaimableSupply);
  const result = total - supply;
  const price = parseInt(activeClaimCondition?.price) * 0.000000000000000001;
  const costBNB = amount * price
  const minOfert = price * 500;
  const maxOfert = price * 10000;  
  const date = activeClaimCondition?.startTime;

  const dateInicio = new Date(date); // Crear una copia de date
  dateInicio.setUTCMonth(dateInicio.getUTCMonth() + 1);  

  const dateEnd = new Date(date); // Crear una copia de date
  dateEnd.setUTCMonth(dateEnd.getUTCMonth() + 2); 

  const dateNext = new Date(date); // Crear una copia de date
  dateNext.setUTCMonth(dateNext.getUTCMonth() + 4); 

  const formatDate = (date) => {
    const formattedDate = {
      day: date.getUTCDate().toString().padStart(2, '0'),
      month: date.getUTCMonth().toString().padStart(2, '0'),
      year: date.getUTCFullYear().toString().padStart(2, '0'),
      hours: date.getUTCHours().toString().padStart(2, '0'),
      minutes: date.getUTCMinutes().toString().padStart(2, '0'),
      seconds: date.getUTCSeconds().toString().padStart(2, '0'),
    };
    return formattedDate;
  };
    const formattedDateEnd = formatDate(dateEnd);
    const formattedDateInicio = formatDate(dateInicio);
    const formattedDateNext  = formatDate(dateNext)  
  
    const inicio = `${formattedDateInicio.day}/${formattedDateInicio.month}/${formattedDateInicio.year} - ${formattedDateInicio.hours}:${formattedDateInicio.minutes}:${formattedDateInicio.seconds}UTC`;
    const finalizacion = `${formattedDateEnd.day}/${formattedDateEnd.month}/${formattedDateEnd.year} - ${formattedDateEnd.hours}:${formattedDateEnd.minutes}:${formattedDateEnd.seconds}UTC`;
    
    const next = `${formattedDateNext.day}/${formattedDateNext.month}/${formattedDateNext.year} - ${formattedDateNext.hours}:${formattedDateNext.minutes}:${formattedDateNext.seconds}UTC`;

    return (
      
      <div className="flex flex-col justify-center items-center w-full">
      {!isLoadingContract && !isLoadingClaimCondition &&!isLoadingClaimToken ? (
          <div className="flex flex-col justify-star items-center w-full">
            <div className="flex items-center flex-col bg-none w-96 h-72">
              <div className="w-32 h-32 m-3">
                <img
                  src={metadata?.image}
                  className="w-full rounded-2xl border border-white"
                />
              </div>
    
              <h2 className="text-lg sm:text-xl md:text-2xl lg:h-screen lg:text-3xl  text-white font-bold ml-2">
                {metadata?.name}
              </h2>
    
              <p>{metadata?.description}</p>
              <div className="flex m-3">
                <input
                  className="text-black w-24 rounded-md mx-3"
                  type="number"
                  value={amount}
                  onChange={handleChange}
                  step={minOfert}
                  placeholder="'DBT'"
                />
                <div className="flex flex-col items-center justify-center">
                <p>BNB</p>
                <p>{costBNB}</p>
                </div>
                <Web3Button
                  className="w-6"
                  contractAddress={DBC}
                  action={() => handleClaimToken()}
                >
                  Comprar Token
                </Web3Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center">
                <h2>Direccion del Contrato</h2>
                <p>{DBC}</p>
              </div>
              <div className="flex p-3">
                <div className="flex flex-col border rounded-xl border-white p-3 m-3">
                  <div className="flex items-center justify-center">
                    <h1>Pre-venta: Fase 1</h1>
                  </div>
                  <p>nombre del token: {name}</p>
                  <p>Simbolo del token: {simbol} </p>
                  <p>Decimales del token: {totalSupply?.decimals} </p>
                  <p>price: {price} BNB</p>
                  <p>
                    Suministro de fase: {total}{" "}
                    {simbol}
                  </p>
                  <p>Minima Compra: {minOfert} BNB</p>
                  <p>Maxima Compra: {maxOfert} BNB</p>
                  <p>
                    {" "}
                    Disponibles: {result} {simbol}
                  </p>
                  <p>
                    Token en circulacion {supply}{" "}
                    {simbol}{" "}
                  </p>
                  <p>hora de unicio: {inicio}</p>
                  <p>Finaliza: {finalizacion}</p>
                </div>
                <div className="flex flex-col border rounded-xl border-white p-3 m-3">
                  <div className="flex items-center justify-center">
                    <h1>Pre-venta: Fase 2</h1>
                  </div>
                  <p>nombre del token: {name}</p>
                  <p>Simbolo del token: {simbol} </p>
                  <p>price: {price * 10} BNB</p>
                  <p>
                    Suministro de fase: {total * 0.7}{" "}
                    {simbol}
                  </p>
                  <p>Minima Compra: {minOfert} BNB</p>
                  <p>Maxima Compra: {maxOfert} BNB</p>
                  <p>inicio: {next}</p>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <div>
          <p>cargando...</p>
        </div>
      )
      
    }
    </div>
  );
};

export default ClaimToken;
