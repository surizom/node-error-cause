type FreightMethod = "air" | "ocean" | "road" | "rail";

export type Shipment = {
  name: string;
  client: string;
  freightMethod: FreightMethod;
  portOfDeparture: string;
  portOfDelivery: string;
  isCancelled: boolean;
};
