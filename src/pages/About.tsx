const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This application was developed as part of a technical assignment to
          demonstrate full-stack development skills, including backend API
          design, PDF data extraction, database modeling, and frontend user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">⚙️ Backend</h3>
            <p className="text-sm text-gray-600">
              Built using Express.js and MongoDB Atlas with secure authentication
              and modular service-based architecture.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">🎨 Frontend</h3>
            <p className="text-sm text-gray-600">
              Developed with React and TailwindCSS, featuring protected routes,
              clean UI, and responsive design.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">📄 PDF Processing</h3>
            <p className="text-sm text-gray-600">
              Supports parsing of Tamil real-estate documents with structured
              data extraction and validation.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Designed with scalability, readability, and maintainability in mind,
          following modern web development best practices.
        </p>
      </div>
    </div>
  );
};

export default About;
