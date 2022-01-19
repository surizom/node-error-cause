import { Shipment } from "./types";

const shipmentsById: Record<string, Shipment> = {
  "1": {
    name: "Import - Ash wood for wands",
    client: "Hogwarts School of Witchcraft and Wizardry",
    freightMethod: "rail",
    portOfDeparture: "Stockholm Central Railway Station",
    portOfDelivery: "London",
    isCancelled: false,
  },
  "2": {
    name: "Import - parts for nanotech suit",
    client: "S.H.I.E.L.D",
    freightMethod: "air",
    portOfDeparture: "Ningbo",
    portOfDelivery: "New Jersey",
    isCancelled: true,
  },
  "3": {
    name: "Export - electronic devices",
    client: "Wayne Enterprises, Inc",
    freightMethod: "air",
    portOfDeparture: "Long Island",
    portOfDelivery: "Le Havre",
    isCancelled: false,
  },
};

export const getShipmentById = (shipmentId: string) => {
  const shipment = shipmentsById[shipmentId];

  if (!shipment) {
    throw new Error(`Shipment with id ${shipmentId} does not exist`);
  }

  if (shipment.isCancelled) {
    throw new Error(`Cannot view shipment with id ${shipmentId}: shipment has been cancelled`);
  }

  return shipmentsById[shipmentId];
};
