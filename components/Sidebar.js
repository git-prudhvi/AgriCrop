import React, { useEffect, useState } from 'react'

// import { InlineIcon } from '@iconify/react';
// import ethereumIcon from '@iconify-icons/mdi/ethereum';

import { useHistory } from 'react-router-dom'


function Sidebar({showPortis, isLoggedIn, setWallet, setIsLoggedIn, wallet, email}) {




    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <h2>Depocalypse</h2>
            </div>

            <div className="sidebar__options">
                <h3 onClick={() => push('/')}>Marketplace</h3>
                <h3 onClick={() => push('/auctions')}>Auctionplace</h3>
                <h3 onClick={() => push('/charity')}>Charity</h3>
                <h3 onClick={() => push('/create-nft')}>Create NFT</h3>
                <h3 onClick={() => push('/your-gallery')}>Your Gallery</h3>
                
            </div>

            <div className="sidebar__priceFeed">
                <span>Price feed - Powered by <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="" /></span> 
                <span>MATIC/USD - $</span>
            </div>

           

            <button className="show-portis" onClick={showPortis}>Show Account <img src="https://docs.portis.io/_media/logo_bw.svg" alt="powered by portis" /></button>
        </div>
    )
}

export default Sidebar