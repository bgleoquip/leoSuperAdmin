import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BasicHeader extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand">Leo Super Admin</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>
                <ui className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Signout">
                            Sign Out
                        </Link>
                    </li>
                </ui>
            </div>
            </nav>
        )
    }
} 