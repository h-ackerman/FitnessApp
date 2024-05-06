import React from 'react';
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../utils/constants';
import { signup } from '../../utils/UserApi.js';
import fbLogo from '../../assets/images/fb-logo.png';
import googleLogo from '../../assets/images/google-logo.png';
import githubLogo from '../../assets/images/github-logo.png';

const Signup = ({ authenticated, location }) => {
    const navigate = useNavigate();

    if (authenticated) {
        return <Navigate
            to={{
                pathname: "/",
                state: { from: location }
            }} />;
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title">Signup with SpringSocial</h1>
                <SocialSignup />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm navigate={navigate} />
                <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
}

const SocialSignup = () => {
    return (
        <div className="social-signup">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google" /> Sign up with Google</a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
            <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                <img src={githubLogo} alt="Github" /> Sign up with Github</a>
        </div>
    );
}

const SignupForm = ({ navigate }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const signUpRequest = { ...formData };

        signup(signUpRequest)
            .then(response => {
                alert("You're successfully registered. Please login to continue!");
                navigate("/login");
            }).catch(error => {
                alert('Oops! Something went wrong. Please try again!');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="text" name="name"
                    className="form-control" placeholder="Name"
                    value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-item">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-item">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;
