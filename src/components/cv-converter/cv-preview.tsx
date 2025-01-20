import React from 'react';

interface CVPreviewProps {
  profileData: any;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ profileData }) => {
  if (!profileData) return null;

  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-left">
          <h3 className="text-2xl font-bold">
            {profileData.firstName} {profileData.lastName}
          </h3>
          <p className="text-gray-600">{profileData.headline}</p>
        </div>

        {/* Preview Sections */}
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold mb-2">Professional Summary</h4>
            <div className="h-16 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold mb-2">Experience</h4>
            <div className="space-y-2">
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold mb-2">Education</h4>
            <div className="space-y-2">
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
