function Step3({ formData, handleCheckboxChange }) {
  return (
     <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Add-ons</h1>
      <p className="text-gray-500 mb-8">Pick add-ons you want to include.</p>

      <div className="space-y-4">
        {['Online Support', 'Extra Storage', 'Custom Domain'].map((addon) => (
          <label key={addon} className="flex items-center gap-3">
            <input
              type="checkbox"
              name="addons"
              value={addon}
              checked={formData.addons.includes(addon)}
              onChange={handleCheckboxChange}
              className="accent-blue-600"
            />
            <span className="text-gray-700">{addon}</span>
          </label>
        ))}
      </div>
    </div>

  );
}

export default Step3;