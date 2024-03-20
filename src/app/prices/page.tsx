import React from "react";

interface StripePrice {
  id: string;
  object: "price";
  active: boolean;
  billing_scheme: "per_unit";
  created: number;
  currency: string;
  custom_unit_amount: null | number;
  livemode: boolean;
  lookup_key: null | string;
  metadata: Record<string, unknown>; // Puede ser un objeto vacío o contener más datos
  nickname: null | string;
  product: string;
  recurring: null | {
    interval: string; // ej. 'month', 'year'
    // Añade más propiedades de "recurring" si es necesario
  };
  tax_behavior: "unspecified" | string; // Ajusta según los valores posibles que esperas
  tiers_mode: null | string; // Ajusta según los valores posibles que esperas
  transform_quantity: null | {
    divide_by: number;
    round: string; // ej. 'up', 'down'
  };
  type: "one_time" | "recurring";
  unit_amount: number;
  unit_amount_decimal: string;
}

async function fetchPrices() {
  const response = await fetch("http://localhost:3000/api/prices");
  const data = await response.json();
  // setPrices(data);
  return data;
}

export default async function Page() {
  const prices: StripePrice[] = await fetchPrices();
  console.log(prices);
  return (
    <div>
      <h1>Precios</h1>
      {prices.length > 0 ? (
        prices.map((price, index) => (
          <div key={index}>
            {/* Ejemplo de cómo podrías mostrar la información de precios */}
            <p>{price.product}</p>
            <p>Precio: ${price.unit_amount / 100}</p>
            <p>{price.currency}</p>
            <p>{price.nickname}</p>
          </div>
        ))
      ) : (
        <p>Cargando precios...</p>
      )}
    </div>
  );
}
