import { useState } from "react";
import UploadPdf from "../components/Uploadpdf";
import TransactionsTable from "../components/TransactionsTable";
import PdfPreview from "../components/PdfPreview";


export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);


  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">PDF Transactions</h1>
      </div>


      <UploadPdf setTransactions={setTransactions} setPdfUrl={setPdfUrl} />


      <div className="grid grid-cols-2 gap-4 mt-6">
        <PdfPreview pdfUrl={pdfUrl} />
        <TransactionsTable data={transactions} />
      </div>
    </div>
  );
}