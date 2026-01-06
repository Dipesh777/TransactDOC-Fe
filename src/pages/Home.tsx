const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          PDF Transaction Extraction System
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This project is a full-stack web application designed to upload,
          parse, and extract real-estate transaction details from Tamil PDF
          documents. The extracted data is securely stored and displayed in a
          searchable, user-friendly interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">📄 PDF Parsing</h3>
            <p className="text-sm text-gray-600">
              Upload Tamil PDFs and automatically extract structured
              transaction data.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">🔍 Search & Filter</h3>
            <p className="text-sm text-gray-600">
              Easily search transactions by buyer, seller, survey number, and
              document number.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">🔐 Secure Access</h3>
            <p className="text-sm text-gray-600">
              Authentication with protected routes ensures secure access to
              sensitive data.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Built using <span className="font-medium">React, Express, MongoDB</span> and
          modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Home;
