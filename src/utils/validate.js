export const checkValidData = (pageType, fullName, email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullNAmeValid = /(.|\s)*\S(.|\s)*/.test(fullName);

  if (pageType === "signUp") {
    if (!isFullNAmeValid) return "Full name is not valid";
  }
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
