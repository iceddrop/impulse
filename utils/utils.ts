export const validateSignupForm = (formData: any) => {
  const errors: any = {};

  if (!formData.name) {
    errors.name = "Please enter your name";
  }

  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.phonenumber) {
    errors.phonenumber = "Please enter your phone number";
  }

  if (!formData.password || formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (!formData.confirmPassword || formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateOtpForm = (otp: string) => {
  const errors: any = {};

  if (!otp) {
    errors.otp = "Please enter the OTP";
  } else if (otp.length !== 6 || !/^\d+$/.test(otp)) {
    errors.otp = "OTP must be a 6-digit number";
  }

  return errors;
}

export const validateLoginForm = (formData: any) => {
    const errors: any = {};
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }
    
    if (!formData.password || formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    }
    
    return errors;
};

export const formatName = (name: any) => {
  if (name.includes(" ")){
    name.split(" ")
  }
  return name;
}
