import Head from 'next/head'
import { useState } from 'react';

import { ethers } from 'ethers';

import { useWeb3 } from '@3rdweb/hooks';

//import Card from 'react-bootstrap/Card'


import Hero from "../components/Hero"
import Header from '../components/Header';
import toast, { Toaster } from 'react-hot-toast'

const style = {
    wrapper: ``,
    walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
    button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
    details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}



export default function Home() {

    const { address, connectWallet } = useWeb3()
    const [loginState, setLoginState] = useState();





    const login = async () => {
        setLoginState("Connecting to your wallet..");
        if (!window.ethereum) {
            setLoginState("No MetaMask wallet.. please install it")
            return;

        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const walletAddr = await signer.getAddress();
        console.log("walletAddr", walletAddr)
        const signature = await signer.signMessage("prudhvi nibba");
        console.log('signature', signature)








    }

    return (
        <div className={style.wrapper}>
            <Toaster position="top-center" reverseOrder={false} />
            {address ? (
                <>
                    <Header />
                    <Hero />
                </>
            ) : (


                <div className={style.walletConnectWrapper}>
                    <button
                        className={style.button}
                        onClick={() => connectWallet('injected')}
                    >
                        Connect Wallet
                    </button>
                    <div className={style.details}>
                        You need Chrome to be
                        <br /> able to run this app.
                    </div>
                </div>

            )}
        </div>












    )
}