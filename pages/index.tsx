import React from "react";
import PageLayout from "../components/PageLayout";
import ToIcon, { IconSize, IconStyles, IconTypes } from "../components/ToIcons";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="grid gap-y-4 gap-x-6 grid-cols-1 xl:grid-cols-2 py-20 px-10">
        {/* Card for Total Farmers Enrolled */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.User}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800">
              Total Farmers Enrolled
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            56 Farmers
          </h4>
        </div>

        {/* Card for Total Fields Analyzed */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Farm}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800">
              Total Fields Analyzed
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            124 Fields
          </h4>
        </div>

        {/* Card for Average NDVI Value */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Dressing}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-semibold text-blue-gray-800">
              Average NDVI Value
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            0.67
          </h4>
        </div>

        {/* Card for NDVI Alerts */}
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md border-[3px] border-green-300 transition-transform transform hover:scale-95">
          <div className="flex items-center mb-6 gap-10">
            <ToIcon
              type={IconTypes.Project}
              size={IconSize.NEW}
              style={IconStyles.Default}
            />
            <h3 className="text-2xl font-bold text-blue-gray-800">
              NDVI Alerts
            </h3>
          </div>
          <h4 className="text-3xl font-semibold text-blue-gray-900">
            7 Fields Below Threshold
          </h4>
        </div>
      </div>

      {/* Data Summary Section */}
      <div className="px-10 py-10 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center underline">
          Data Analysis Summary
        </h2>
        <ul className="list-disc px-8 text-lg text-blue-gray-800">
          <li>Farmer enrollment increased steadily from May to September 2024.</li>
          <li>Average NDVI values across farms show good vegetation health.</li>
          <li>Wheat, rice, corn, and soybean were the dominant field types.</li>
          <li>Seven fields are flagged for NDVI values below the threshold.</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
