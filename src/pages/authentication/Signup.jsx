import { Link } from "react-router-dom";
import { CheckboxInput, FormInput } from "../../components";
import { useState } from "react";
import { validateForm } from "./FormValidator";
import { useNavigate } from "react-router";
import { signupuser } from "../../api/apicalls";
import "./authentication.css";
const initialSignUpFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  currentClass: "",
  CGPA: 0,
  activeBackLog: "",
  totalBacklogs: 0,
  attendedCollegeTraining: "",
  tenthScore: 0,
  twelthScore: 0,
  accept_terms: false,
};
const Signup = () => {
  const [signUpFormState, setSignUpFormState] = useState(
    initialSignUpFormState
  );
  const [formError, setFormError] = useState(initialSignUpFormState);
  let navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const new_val = { [e.target.name]: e.target.value };
    setSignUpFormState((prev) => ({ ...prev, ...new_val }));
  };
  const checkboxChangeHandler = (e) => {
    setSignUpFormState((prev) => ({
      ...prev,
      accept_terms: !prev.accept_terms,
    }));
  };

  const signUpUserFun = async () => {
    const post_obj = {
      email: signUpFormState.email,
      password: signUpFormState.password,
      name: signUpFormState.name,
    };
    const response = await signupuser(post_obj);
    if (response.success) {
      navigate("/login");
    } else {
      console.log("SOME ERROR");
    }
  };

  const signupUser = (e) => {
    e.preventDefault();
    const errors = validateForm(signUpFormState);

    if (Object.keys(errors).length === 0) {
      setFormError(initialSignUpFormState);
      console.log(signUpFormState);
      signUpUserFun();
    } else {
      setFormError(errors);
    }
  };
  return (
    <div className="form-container authentication-page">
      <form className="form card" onSubmit={signupUser}>
        <p className="typo-title flex-hz-center p-1">Sign Up</p>
        <FormInput
          label={"firstName"}
          value={signUpFormState.firstName}
          onChangeFunction={inputChangeHandler}
        />
        <FormInput
          label={"lastName"}
          value={signUpFormState.lastName}
          onChangeFunction={inputChangeHandler}
        />
        <FormInput
          label={"email"}
          value={signUpFormState.email}
          onChangeFunction={inputChangeHandler}
          required={true}
        />
        <label className="text-highlight">{formError.email}</label>
        <FormInput
          label={"password"}
          value={signUpFormState.password}
          onChangeFunction={inputChangeHandler}
          type={"password"}
          required={true}
        />
        <label className="text-highlight">{formError.password}</label>
        <FormInput
          label={"confirm_password"}
          value={signUpFormState.confirm_password}
          onChangeFunction={inputChangeHandler}
          type={"password"}
          required={true}
        />
        <div className="input-container">
          <label className="label text-bold" htmlFor={"currentClass"}>
            Current Class
          </label>
          <select
            name="currentClass"
            id="currentClass"
            onChange={inputChangeHandler}
            className="dropdown-menu"
          >
            <option value="First Year">First Year</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
        <FormInput
          label={"CGPA"}
          value={signUpFormState.CGPA}
          onChangeFunction={inputChangeHandler}
        />
        <div className="input-container">
          <label className="label text-bold" htmlFor={"activeBackLog"}>
            ActiveBackLog
          </label>
          <select
            name="activeBackLog"
            id="activeBackLog"
            onChange={inputChangeHandler}
            className="dropdown-menu"
          >
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>
        <FormInput
          label={"totalBacklogs"}
          value={signUpFormState.totalBacklogs}
          onChangeFunction={inputChangeHandler}
        />
        <FormInput
          label={"tenthScore"}
          value={signUpFormState.tenthScore}
          onChangeFunction={inputChangeHandler}
        />
        <FormInput
          label={"twelthScore"}
          value={signUpFormState.twelthScore}
          onChangeFunction={inputChangeHandler}
        />
        <label className="text-highlight">{formError.confirm_password}</label>
        <CheckboxInput
          label={"I accept all terms & Conditions"}
          isChecked={signUpFormState.accept_terms}
          onChangeHandler={checkboxChangeHandler}
        />
        <label className="text-highlight">{formError.accept_terms}</label>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <Link to="/login" className="link-no-style">
          <button className="btn btn-link full-width">
            Already have account, Login
          </button>
        </Link>
      </form>
    </div>
  );
};
export { Signup };
