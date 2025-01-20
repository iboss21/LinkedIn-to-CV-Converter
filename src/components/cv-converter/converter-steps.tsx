import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LinkedinIcon, FileText, Download, ChevronRight, Check } from 'lucide-react';
import { Step } from '@/types';
import { LinkedInAuth } from './linkedin-auth';
import { CVPreview } from './cv-preview';
import { DownloadSection } from './download-section';

export const ConverterSteps: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);

  const handleLinkedInLogin = async () => {
    setLoading(true);
    try {
      // Implement LinkedIn OAuth
      const data = await LinkedInAuth.authorize();
      setProfileData(data);
      setStep(2);
    } catch (error) {
      console.error('LinkedIn auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCV = async () => {
    setLoading(true);
    try {
      // Implement CV generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStep(3);
    } catch (error) {
      console.error('CV generation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const steps: Step[] = [
    {
      number: 1,
      title: "Connect LinkedIn",
      description: "Link your profile to import data",
      icon: LinkedinIcon,
      action: handleLinkedInLogin,
      buttonText: "Connect with LinkedIn",
      component: <LinkedInAuth onSuccess={handleLinkedInLogin} />
    },
    {
      number: 2,
      title: "Preview & Customize",
      description: "Review and edit your CV content",
      icon: FileText,
      action: handleGenerateCV,
      buttonText: "Generate CV",
      component: <CVPreview profileData={profileData} />
    },
    {
      number: 3,
      title: "Download CV",
      description: "Get your professional CV",
      icon: Download,
      action: () => {},
      buttonText: "Download PDF",
      component: <DownloadSection />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          LinkedIn to CV Converter
        </h1>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 px-4">
          {steps.map((s, index) => (
            <div key={s.number} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full 
                ${step >= s.number ? 'bg-white text-blue-600' : 'bg-blue-400 text-white'}
                transition-colors duration-300
              `}>
                {step > s.number ? <Check className="w-6 h-6" /> : s.number}
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 mx-4 bg-blue-400">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: step > s.number ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <Card className="bg-white p-8 rounded-xl shadow-xl">
          {steps.map(s => (
            <div
              key={s.number}
              className={`${step === s.number ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                  <s.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {s.title}
                </h2>
                <p className="text-gray-600">
                  {s.description}
                </p>
              </div>

              {s.component}

              <Button
                onClick={s.action}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                ) : (
                  <>
                    {s.buttonText}
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
