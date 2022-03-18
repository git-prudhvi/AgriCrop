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
    walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[grey] `,
    button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
    details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
    background: `max-w-sm rounded overflow-hidden shadow-lg bg-[white]`,
    cardsize: `px-6 py-4`,
    bigFont: `font-bold text-xl mb-2`,
    smallFont: `text-gray-700 text-base`,
    bigButton: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`

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
                    <div className={style.background}>
                        <img src="https://www.linkpicture.com/q/metamask-3.gif" alt="" />
                        <div className={style.cardsize}>
                            <div className={style.bigFont}>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Connect to MetaMask</div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button
                                className={style.bigButton}
                                onClick={() => connectWallet('injected')}
                            >

                                Connect Wallet
                            </button>

                        </div>
                    </div>
                </div>

            )}
        </div>













    )

}
