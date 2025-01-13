import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import DepositComponent from './DepositComponent';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { SalmonWalletAdapter } from '@solana/wallet-adapter-salmon';
import { SnapWalletAdapter } from '@drift-labs/snap-wallet-adapter';
import { clusterApiUrl } from '@solana/web3.js';

const config = getDefaultConfig({
  appName: 'Eclipse DApp',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // https://cloud.reown.com/
  chains: [sepolia],
});

const queryClient = new QueryClient();

const network = WalletAdapterNetwork.Testnet;
const endpoint = clusterApiUrl(network);
const wallets = [new SalmonWalletAdapter(), new SnapWalletAdapter()];

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="container mx-auto px-4 py-8">
                  <DepositComponent />
                </div>
                <Toaster
                  position="top-right"
                  toastOptions={{
                    style: {
                      background: '#1a1a1a',
                      color: '#fff',
                      border: '1px solid #22c55e'
                    }
                  }}
                />
              </div>
            </WalletProvider>
          </ConnectionProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
