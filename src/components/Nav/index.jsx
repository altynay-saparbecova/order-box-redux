import React from "react";
import { Link } from "react-router-dom";
import { SmileOutlined } from '@ant-design/icons';
// import img from '../../images/burger.webp'

function Nav() {
    return (
        <div >
            <h1> Добро пожаловать !!! </h1>
            <Link to="/orderBox">
                <h1> Burger King   <SmileOutlined style={{ color: 'black' }} /></h1>

            </Link>
        </div>
    );
}

export default Nav;
