import { Wallet, web3 } from '../utils/Wallet';

async function main(): Promise<void> {
    const wallet = new Wallet(web3);
    const account = wallet.generate();
    await wallet.getBalance('0x282A0c3e4Ce5066C8979E6Ef0d4393b094E03876');
}

main().catch(error => console.error(error));
