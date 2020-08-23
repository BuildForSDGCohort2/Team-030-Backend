const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFarmerProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.products = !isEmpty(data.products) ? data.products : "";

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = "User name needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Profile username is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (Validator.isEmpty(data.products)) {
    errors.products = "Products field is required";
  }

  if (!isEmpty(data.farmerWebsite)) {
    if (!Validator.isURL(data.farmerWebsite)) {
      errors.farmerWebsite = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
