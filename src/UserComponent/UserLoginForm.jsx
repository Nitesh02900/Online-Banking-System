import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };
  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);

          if (res.success) {
            console.log("Got the success response");

            if (res.jwtToken !== null) {
              if (res.user.roles === "ADMIN") {
                sessionStorage.setItem(
                  "active-admin",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("admin-jwtToken", res.jwtToken);
              } else if (res.user.roles === "CUSTOMER") {
                sessionStorage.setItem(
                  "active-customer",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("customer-jwtToken", res.jwtToken);
              } else if (res.user.roles === "BANK") {
                sessionStorage.setItem(
                  "active-bank",
                  JSON.stringify(res.user)
                );
                sessionStorage.setItem("bank-jwtToken", res.jwtToken);
              }
            }

            if (res.jwtToken !== null) {
              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                window.location.href = "/home";
              }, 1000); // Redirect after 3 seconds
            } else {
              toast.error(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          } else {
            console.log("Didn't got success response");
            toast.error("It seems server is down", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    e.preventDefault();
  };
  const clearForm = () => {
    setLoginRequest({
      emailId: '',
      password: '',
      role: '0', // Assuming '0' is the default value for the role dropdown
    });
  };
  
  return (
    <div>
      <div className="mt-2 d-flex align-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: '25rem' }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">
              User Login
            </h4>

          </div>
          <div className="user-icon text-center my-1">
            <FontAwesomeIcon icon={faUser} className="mr-2" size="4x" color="black" />
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="ADMIN"> Admin </option>
                  <option value="CUSTOMER"> Customer </option>
                  <option value="BANK"> Bank </option>
                </select>
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={loginAction}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning text-dark"
                onClick={clearForm}
                style={{ marginLeft: '20px' }}
              >
                Clear
              </button>

              <ToastContainer />
              
            </form>
           
        </div>
        <div className="mt-3">
                <p className="text-center text-color">
                  Don't have an account?{' '}
                  <Link to="/user/admin/register" className="link-primary">
                    Sign up
                  </Link>
                </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
