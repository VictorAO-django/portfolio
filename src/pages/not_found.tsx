import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 p-6">
            {/* Main content container */}
            <div className="bg-white p-10 sm:p-12 md:p-16 rounded-3xl shadow-2xl w-full max-w-md text-center">
                
                {/* Main text content */}
                <h3 className="text-3xl sm:text-4xl text-gray-800 font-semibold mb-4">
                    Oops, we can't find that page!
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                    It seems the page you're looking for doesn't exist or has been moved.
                </p>

                {/* Call-to-action button */}
                <button
                    onClick={handleGoHome}
                    className="py-3 px-8 bg-green-500 text-white font-semibold rounded-full text-lg transition-all hover:bg-green-600 transform active:scale-95"
                >
                    Go Back
                </button>

                {/* Optional Support message */}
                <p className="text-sm text-gray-500 mt-6">
                    If you need help, contact support at <a href="mailto:support@example.com" className="text-green-600 hover:text-green-700">support@example.com</a>
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;
