export default function TransactionsTable({ data }: any) {
return (
<div className="overflow-auto max-h-[500px] border">
<table className="w-full border-collapse">
<thead className="bg-white-200">
<tr>
<th className="border p-3">Buyer</th>
<th className="border p-3">Seller</th>
<th className="border p-3">Survey No</th>
<th className="border p-3">Doc No</th>
<th className="border p-3">Value</th>
</tr>
</thead>
<tbody>
{data.map((t: string, i: number) => (
<tr key={i}>
<td className="border p-2">{t.buyerEnglish}</td>
<td className="border p-2">{t.sellerEnglish}</td>
<td className="border p-2">{t.surveyNumber}</td>
<td className="border p-2">{t.documentNumber}</td>
<td className="border p-2">{t.value}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}