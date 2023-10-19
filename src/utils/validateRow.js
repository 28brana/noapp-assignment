const validateRow = (row) => {
  const errors = [];

  // Validate 'id'
  if (!row.id || isNaN(Number(row.id)) || Number(row.id) <= 0) {
    errors.push({ field: "id", error: "Invalid or missing ID" });
  }

  // Validate 'first_name'
  if (!row.first_name || typeof row.first_name !== "string") {
    errors.push({
      field: "first_name",
      error: "First name is required and must be a string",
    });
  }

  // Validate 'last_name'
  if (!row.last_name || typeof row.last_name !== "string") {
    errors.push({
      field: "last_name",
      error: "Last name is required and must be a string",
    });
  }

  // Validate 'email'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!row.email || !emailRegex.test(row.email)) {
    errors.push({ field: "email", error: "Invalid or missing email" });
  }

  // Validate 'gender'
  const allowedGenders = ["Male", "Female", "Other"];
  if (!row.gender || !allowedGenders.includes(row.gender)) {
    errors.push({ field: "gender", error: "Invalid or missing gender" });
  }

  // Validate 'phone'
  const phoneRegex = /^\d{10}$/;
  if (!row.phone || !phoneRegex.test(row.phone)) {
    errors.push({ field: "phone", error: "Invalid or missing phone number" });
  }

  return errors.length === 0 ? null : errors;
};
export default validateRow;
