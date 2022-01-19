import { getShipmentById } from "./repository";

const fetchShipmentById = (shipmentId: string) => {
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

//fetchShipmentById("0");

// Error: Failed to get shipment with id 0
//     at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:9:15)
//     at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:14:1)
//     ... 5 lines matching cause stack trace ...
//     at node:internal/main/run_main_module:17:47 {
//   [cause]: Error: Shipment with id 0 does not exist
//       at getShipmentById (/Users/moaadf/node-error-cause/build/repository.js:33:15)
//       at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:6:49)
//       at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:14:1)
//       at Module._compile (node:internal/modules/cjs/loader:1097:14)
//       at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
//       at Module.load (node:internal/modules/cjs/loader:975:32)
//       at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//       at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//       at node:internal/main/run_main_module:17:47
// }

//fetchShipmentById("2");

// Error: Failed to get shipment with id 2
//     at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:9:15)
//     at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:31:1)
//     ... 5 lines matching cause stack trace ...
//     at node:internal/main/run_main_module:17:47 {
//   [cause]: Error: Cannot view shipment with id 2: shipment has been cancelled
//       at getShipmentById (/Users/moaadf/node-error-cause/build/repository.js:36:15)
//       at fetchShipmentById (/Users/moaadf/node-error-cause/build/index.js:6:49)
//       at Object.<anonymous> (/Users/moaadf/node-error-cause/build/index.js:31:1)
//       at Module._compile (node:internal/modules/cjs/loader:1097:14)
//       at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
//       at Module.load (node:internal/modules/cjs/loader:975:32)
//       at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//       at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//       at node:internal/main/run_main_module:17:47
// }
