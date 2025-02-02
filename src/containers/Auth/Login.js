import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { divide } from "lodash";

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }
  render() {
    return (
      <div className="login-background">
        {" "}
        a
        <div className="login-form ">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-center">LOGIN</h3>
                  </div>
                  <div className="card-body">
                    <form id="loginForm">
                      <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" required />
                      </div>
                      <div class="mb-3">
                        <a href="#" className="text-decoration-none">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit" className="btn btn-primary w-100 mb-3">
                        LOGIN
                      </button>
                      <div className="text-center">Or Login with:</div>
                      <div className="justify-content-center row ">
                        <i className="fab fa-google-plus-g  text-center text-primary google"></i>
                        <i className="fab fa-facebook-f  text-center text-primary facebook "></i>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center">
                    Don't have an account?{" "}
                    <a href="#" class="text-decoration-none">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
