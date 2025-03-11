import { Link } from "react-router";

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-10 min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Terms and Conditions
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
          1. Use of the Site
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
          2. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The content on this website is protected by intellectual property laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
          3. Disclaimer of Warranties
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          This website is provided "as is" without any representations or warranties, express or implied. We do not warrant that the service will be uninterrupted or error-free.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">
          4. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          In no event shall the website or its owners be liable for any damages arising out of the use or inability to use this service.
        </p>
        
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm">
          Last updated: March 10, 2025
        </p>
        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
