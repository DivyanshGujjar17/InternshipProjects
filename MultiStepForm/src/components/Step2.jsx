function Step2({ formData, handleChange }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Select Plan</h1>
      <p className="text-gray-500 mb-8">Choose your plan type.</p>

      <div className="space-y-4">
        {['Basic', 'Standard', 'Premium'].map((plan) => (
          <label key={plan} className="flex items-center gap-3">
            <input
              type="radio"
              name="plan"
              value={plan}
              checked={formData.plan === plan}
              onChange={handleChange}
              className="accent-blue-600"
            />
            <span className="text-gray-700">{plan} Plan</span>
          </label>
        ))}
      </div>
    </div>
  );
}
export default Step2;