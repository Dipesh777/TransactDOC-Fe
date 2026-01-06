import axios from "axios";


export default function UploadPdf({ setTransactions, setPdfUrl }: any) {
    const handleUpload = async (e: any) => {
        const file = e.target.files[0];
        if (!file) return;


        setPdfUrl(URL.createObjectURL(file));


        const formData = new FormData();
        formData.append("file", file);


        const res = await axios.post(
            "http://localhost:5000/api/transactions/upload",
            formData
        );


        setTransactions(res.data);
    };


    return (
        <input type="file" className="cursor-pointer border p-2" accept="application/pdf" onChange={handleUpload} />
    );
}