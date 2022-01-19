import fastify from "fastify";
import { logErrorWithCause } from "./printErrorWithCause";
import { getShipmentById } from "./repository";

const fetchShipmentById = async (shipmentId: string) => {
  try {
    return getShipmentById(shipmentId);
  } catch (error) {
    throw new Error(
      `Failed to get shipment with id ${shipmentId}`,
      //@ts-ignore
      { cause: error }
    );
  }
};

fetchShipmentById("0").then(console.log).catch(logErrorWithCause);

// Error: Failed to get shipment with id 0
// at /Users/moaadf/node-error-cause/build/index.js:47:19
// at step (/Users/moaadf/node-error-cause/build/index.js:33:23)
// at Object.next (/Users/moaadf/node-error-cause/build/index.js:14:53)
// at /Users/moaadf/node-error-cause/build/index.js:8:71
// at new Promise (<anonymous>)
// at __awaiter (/Users/moaadf/node-error-cause/build/index.js:4:12)
// at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:41:56)
// at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:54:1)
// at Module._compile (node:internal/modules/cjs/loader:1101:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
// Cause: Error: Shipment with id 0 does not exist
// at getShipmentById (/Users/moaadf/node-error-cause/build/repository.js:33:15)
// at /Users/moaadf/node-error-cause/build/index.js:44:68
// at step (/Users/moaadf/node-error-cause/build/index.js:33:23)
// at Object.next (/Users/moaadf/node-error-cause/build/index.js:14:53)
// at /Users/moaadf/node-error-cause/build/index.js:8:71
// at new Promise (<anonymous>)
// at __awaiter (/Users/moaadf/node-error-cause/build/index.js:4:12)
// at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:41:56)
// at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:54:1)
// at Module._compile (node:internal/modules/cjs/loader:1101:14)
