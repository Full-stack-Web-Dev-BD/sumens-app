import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import MiniNav from './MiniNav';

class Navbar extends Component {

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img style={{ width: '90px' }} src="/images/white-logo.png" className="main-logo" alt="logo" />
                                        <img style={{ width: '90px' }} src="/images/white-logo.png" className="optional-logo" alt="logo" />
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">SUMENS</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/to-rejoin" activeClassName="active">
                                                <a className="nav-link">TO REJOIN</a>
                                            </Link>
                                        </li>     <li className="nav-item">
                                            <Link href="/shopvote" activeClassName="active">
                                                <a className="nav-link">SHOPVOTE</a>
                                            </Link>
                                        </li>     <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a className="nav-link">FAQ</a>
                                            </Link>
                                        </li>     <li className="nav-item">
                                            <Link href="/support" activeClassName="active">
                                                <a className="nav-link">SUPPORT</a>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    Pages <i className="fas fa-chevron-down"></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services" activeClassName="active">
                                                        <a className="nav-link">Services</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a className="nav-link">Service Details</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/contact" activeClassName="active">
                                                        <a className="nav-link">Contact</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog" activeClassName="active">
                                                        <a className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/partner" activeClassName="active">
                                                        <a className="nav-link">Partner</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a className="nav-link">Faq</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/coming-soon" activeClassName="active">
                                                        <a className="nav-link">Coming Soon</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/error" activeClassName="active">
                                                        <a className="nav-link">404 Error</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                    </ul>

                                    <div className="others-options">
                                        <div className="option-item">
                                            <i
                                                onClick={this.handleSearchForm}
                                                className="search-btn flaticon-search"
                                                style={{
                                                    display: this.state.searchForm ? 'none' : 'block'
                                                }}
                                            ></i>

                                            <i
                                                onClick={this.handleSearchForm}
                                                className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                            ></i>

                                            <div
                                                className="search-overlay search-popup"
                                                style={{
                                                    display: this.state.searchForm ? 'block' : 'none'
                                                }}
                                            >
                                                <div className='search-box'>
                                                    <form className="search-form">
                                                        <input className="search-input" name="search" placeholder="Search" type="text" />
                                                        <button className="search-button" type="submit">
                                                            <i className="fas fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <ul className="navbar-nav">

                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Login</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/other" activeClassName="active">
                                                <a className="nav-link">/</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/signup" activeClassName="active">
                                                <a className="nav-link">Signup</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
