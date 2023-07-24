import { Component, useRef } from "react";
import React from "react";
import "./NavbarStyles.css";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci"
import { FaSistrix } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
export const Navbar = () => {
    const [vis, setvis] = useState(true);
    function myFunction() {
        var x = document.getElementById("navbar");
        if (x) {
            x.style.display = x.style.display == 'block' ? 'none' : 'block';
        }
    };
    const [isHome, setHome] = useState(false);
    const [isInterest, setIneterest] = useState(false);
    const [isGroups, setGroups] = useState(false);
    const toggle2 = () => {
        setIneterest(!isInterest);
    }
    const toggle3 = () => {
        setGroups(!isGroups);
    }
    const toggle = () => {
        setHome(!isHome);
    }
    return (
        <div className="navigation">
            <nav>
                <p className="logo">
                    UnitedHealthGroup
                </p>
                <div>
                    <ul id="navbar">
                        <li className={`dropdown ${isHome ? 'open' : ``}`} onClick={toggle}>
                            <a href="#">Products<span className="arrow"></span></a>
                            <div className={`dropdown-content ${isHome ? `show` : ``}`}>
                                <a href="index.html">Optum</a>
                                <a href="index.html">Optum-Rx</a>
                                <a href="index.html">Optum-Insight</a>
                            </div>
                        </li>
                        <li className={`dropdown ${isInterest ? 'open' : ``}`} onClick={toggle2}>
                            <a href="index.html">Interests<span className="arrow"></span></a>
                            <div className={`dropdown-content ${isInterest ? `show` : ``}`}>
                                <a href="index.html">Annoucements</a>
                                <a href="index.html">See all</a>
                            </div>
                        </li>
                        <li><a href="index.html">Groups</a></li>
                        <li><a href="index.html">Ask community<span className="plus"><CiCirclePlus /></span></a></li>
                        <li>
                            <form>
                                <input placeholder="Search"></input>
                                <span className="plus" style={{ position: "absolute", left: "80%" }}> <FaSistrix /></span>
                            </form>
                        </li>
                        <li>
                            <a href="index.html">Sign up</a>
                        </li>
                        <li><a href="index.html">log in</a></li>
                    </ul>
                </div>
                <div className="bars">
                    <button>
                        <FaBars onClick={myFunction}></FaBars>
                    </button>
                </div>
            </nav>
        </div>
    )
}