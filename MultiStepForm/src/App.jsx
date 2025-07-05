import { useState } from "react";
import './index.css'
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
export default function App() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addons: [],
  });
  const [errors, setErrors] = useState({});

 const validateStep = () => {
  const newErrors = {};

  if (step === 0) {
    // Name check
    if (!formData.name.trim()) newErrors.name = "Name is required.";

    // Email check
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
        alert("Invalid email format!");
      }
    }

    // Phone check
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else {
      const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number.";
        alert("Invalid phone number format!");
      }
    }
  }

  if (step === 1 && !formData.plan) {
    newErrors.plan = "Please select a plan.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < steps.length - 1) setStep((prev) => prev + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const addons = checked
        ? [...prev.addons, value]
        : prev.addons.filter((a) => a !== value);
      return { ...prev, addons };
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <Step2 formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Step3 formData={formData} handleCheckboxChange={handleCheckboxChange} />;
      case 3:
        return <Step4 formData={formData} />;
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-md shadow-lg w-full max-w-2xl">
          <Success />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-4xl flex">
        {/* Sidebar */}
        <div className="w-1/3 bg-blue-700 text-white p-6 rounded-md">
          {steps.map((label, index) => (
            <div
              key={index}
              onClick={() => setStep(index)}
              className="mb-6 flex items-center gap-4 cursor-pointer"
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border font-bold ${
                  step === index ? "bg-white text-blue-700" : "border-white text-white"
                }`}
              >
                {index + 1}
              </div>
              <div>
                <p className="text-sm text-blue-200 uppercase">Step {index + 1}</p>
                <p className="font-semibold uppercase">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="w-2/3 p-8">
          {renderStep()}

          <div className="mt-8 flex justify-between">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400"
              >
                Go Back
              </button>
            )}

            <button
              onClick={handleNext}
              className="ml-auto bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800"
            >
              {step === steps.length - 1 ? "Finish" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}