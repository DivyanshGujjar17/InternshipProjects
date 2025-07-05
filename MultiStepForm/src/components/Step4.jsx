function Step4({ formData }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Summary</h1>
      <p className="text-gray-500 mb-8">
        Check everything looks good before confirming.
      </p>
      <div className="text-gray-800 space-y-2">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Plan:</strong> {formData.plan}</p>
        <p><strong>Add-ons:</strong> {formData.addons.join(', ') || 'None'}</p>
      </div>
    </div>
  );
}

export default Step4;