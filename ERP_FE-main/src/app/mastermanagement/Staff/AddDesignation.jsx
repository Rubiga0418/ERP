import React, { useState } from "react";

function AddDesignation() {
  const [formData, setFormData] = useState({
    desigName: "",
    desigDescription:"",
    status: "active",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    // Student Name validation
    if (!formData.desigName.trim()) {
      errors.desigName = "Designation name is required.";
    }
    
    // Room Number validation
    if (!formData.desigDescription.trim()) {
      errors.desigDescription = "desigDescription is required.";
    } 

    
    if (!formData.status) {
      errors.status= "Status is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Designation Data:", formData);
      // Add code here to handle form submission, like sending data to an API.
      // Reset form after successful submission
      setFormData({
        desigName: "",
        desigDescription:"",
        status: "active",
      });
      setFormErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Description Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
          {formErrors.studentName && (
            <div className="text-danger">{formErrors.studentName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input
            type="text"
            className="form-control"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
          {formErrors.roomNumber && (
            <div className="text-danger">{formErrors.roomNumber}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="allocationDate" className="form-label">Allocation Date</label>
          <input
            type="date"
            className="form-control"
            id="allocationDate"
            name="allocationDate"
            value={formData.allocationDate}
            onChange={handleChange}
            required
          />
          {formErrors.allocationDate && (
            <div className="text-danger">{formErrors.allocationDate}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddRoomAllocation;
