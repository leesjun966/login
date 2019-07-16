import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import logo from "./download.png";
import validateInput from "./Validator";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
      isSignedIn: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  // To prevent page getting refreshes everytime users input data
  onFormSubmit = event => {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isSignedIn: true });
      this.props.signIn(this.state);
    }
  };

  onInputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { errors, username, password, isSignedIn } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="eight wide column">
          <h2 className=" ui teal image header">
            <img src={logo} className="image" />
            <div className="content">Log-in to your account</div>
          </h2>
          <form onSubmit={this.onFormSubmit} className="ui large form warning">
            <div className="ui stacked segment">
              {/*  Username input */}
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    error={errors.username}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
              {/* Password input */}
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onInputChange}
                    value={password}
                    error={errors.password}
                  />
                </div>
              </div>
              <button
                className="ui fluid large teal submit button"
                disabled={isSignedIn}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(
  null,
  { signIn }
)(LoginForm);
