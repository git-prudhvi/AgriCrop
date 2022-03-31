import React from "react";
import Sidebar from "../components/Sidebar";
import Market from "../components/Market";


function MainLayout(props) {
    const { showPortis, isLoggedIn, setWallet, setIsLoggedIn, wallet, email } = props;

    return (
        <div className="main__layout">
            <Market />
        </div>

    );

}

export default MainLayout;