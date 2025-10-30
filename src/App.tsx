import type { ColumnDef } from "@tanstack/react-table";
import "./App.css";
import { DataTable } from "./components/ui/dataTable";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const payments: Payment[] = [
  {
    id: "1",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "2",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

function App() {
  return (
    <div className="App">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}

export default App;
