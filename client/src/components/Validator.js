import _isEmpty from "lodash/isEmpty";

export default function validateInput(data) {
  let errors = {};

  if (_isEmpty(data.username)) {
    errors.username = "This field is required";
  }
  if (_isEmpty(data.password)) {
    errors.password = "This field is required";
  }
  return {
    errors,
    isValid: _isEmpty(errors)
  };
}
