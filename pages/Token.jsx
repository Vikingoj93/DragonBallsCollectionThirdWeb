import { React, useState } from "react";
import dynamic from "next/dynamic";

const TokenDescription = dynamic(() =>
  import("../components/token/TokenDescription")
);
const ClaimToken = dynamic(() =>
  import("../components/token/components/claimToken")
);

const buttons = {
  Descripcion: "Descripcion",
  Comprar: "Comprar",
};

const Token = () => {
  const [activeComponent, setActiveComponent] = useState("Descripcion");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Descripcion":
        return <TokenDescription />;
      case "Comprar":
        return <ClaimToken />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <section className="w-full sm:w-1/2 sm:h-auto md:h-screen lg:h-screen xl:h-screen md:w-1/3 lg:w-1/4 xl:w-1/6 border-x p-4 bg-orange text-white top-0 border-white border-b">
        {Object.entries(buttons).map(([key, label]) => (
          <button
            className="block hover:text-navy mb-2"
            key={key}
            onClick={() => handleComponentChange(key)}
          >
            {label}
          </button>
        ))}
      </section>

      <main className="flex-grow">{renderComponent()}</main>
    </div>
  );
};
export default Token;
