import { timeStamp } from "node:console";
import { createServer, IncomingMessage, OutgoingMessage } from "node:http";
import { json } from "node:stream/consumers";

const PORT: number = 3000;

interface Bus {
  id: number;
  plate: string;
  nbrOfPassenger: number;
}
interface Driver {
  id: number;
  name: string;
  bus: Bus;
}

const buses: Bus[] = [{ id: 1, nbrOfPassenger: 30, plate: "RAB123C" }];

const drivers: Driver[] = [
  { bus: { id: 1, nbrOfPassenger: 30, plate: "RAB123C" }, id: 1, name: "John" },
];
const app = createServer((req: IncomingMessage, res: OutgoingMessage) => {
  if (req.url === "/health" && req.method === "GET")
    return res.end("API is healthy");
  else if (req.url === "/" && req.method === "GET")
    return res.end("Welcome to the Transport Ops API");
  // api to get buses
  else if (req.url === "/buses" && req.method === "GET") {
    const responseData = {
      status: "ok",
      timeStamp: new Date(),
      data: buses,
    };

    res.end(JSON.stringify(responseData));
  } else {
    return "Not found";
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
