import React from 'react';
import { Download } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-center text-green-600 mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <Download className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-center text-green-800 font-semibold mb-2">
          Your CV is Ready!
        </h3>
        <p className="text-center text-green-600">
          Your professional CV has been generated and is ready for download.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Download className="w-5 h-5 text-gray-600" />
            <span className="font-medium">Professional_CV.pdf</span>
          </div>
          <span className="text-sm text-gray-500">2.1 MB</span>
        </div>
        
        <div className="text-center text-sm text-gray-600">
          <p>Need to make changes? You can always go back to the previous step</p>
        </div>
      </div>
    </div>
  );
};
