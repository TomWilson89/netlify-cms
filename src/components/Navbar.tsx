import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav role="navigation" className="navbar main-navbar">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/projects">
            <a className="navbar-item">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item">Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
