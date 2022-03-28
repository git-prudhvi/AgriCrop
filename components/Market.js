import Head from 'next/head'
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '@3rdweb/hooks';
import Hero from "../components/Hero"
import Header from '../components/Header';
import toast, { Toaster } from 'react-hot-toast';

import web3Modal from 'web3Modal'

import Link from 'next/link';

function Market() {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">AgriCrop Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>

    </div>
  )
}

export default Market