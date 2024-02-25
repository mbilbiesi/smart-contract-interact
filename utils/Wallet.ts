import Web3 from 'web3';

const web3 = new Web3('https://sepolia.infura.io/v3/2afe580f3e47456e8ea7a4d1bee3d063');

interface Account {
    address: string;
    privateKey: string;
}

class Wallet {
    private web3: Web3;

    constructor(web3Instance: Web3) {
        this.web3 = web3Instance;
    }

    generateWallet(): Account {
        const account = this.web3.eth.accounts.create();
        console.log(`Address: ${account.address}`);
        console.log(`Private Key: ${account.privateKey}`);
        return account;
    }

    async getWalletBalance(walletAddress: string): Promise<string> {
        try {
            const balanceWei = await this.web3.eth.getBalance(walletAddress);
            const balanceEther = this.web3.utils.fromWei(balanceWei, 'ether');
            console.info(`Balance for ${walletAddress}: ${balanceEther} ETH`);
            return balanceEther;
        } catch (error) {
            console.error("Error fetching balance:", error);
            throw error;
        }
    }
}

async function main(): Promise<void> {
    const wallet = new Wallet(web3);
    const account = wallet.generateWallet();
}

main().catch(error => console.error(error));
