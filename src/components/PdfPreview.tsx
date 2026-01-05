export default function PdfPreview({ pdfUrl }: any) {
    if (!pdfUrl) return <div className="border h-[500px] flex items-center justify-center">No PDF</div>;


    return (
        <iframe
            src={pdfUrl}
            className="w-full h-[500px] border"
            title="PDF Preview"
        />
    );
}