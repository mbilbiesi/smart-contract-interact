import Web3 from 'web3';

// Initialize Web3 instance with the network RPC URL
const web3 = new Web3('https://sepolia.infura.io/v3/2afe580f3e47456e8ea7a4d1bee3d063');

// Define the structure of an account object for better type checking
interface Account {
    address: string;
    privateKey: string;
}

class Wallet {
    private web3: Web3;

    constructor(web3Instance: Web3) {
        this.web3 = web3Instance;
    }

    generate(): Account {
        const account = this.web3.eth.accounts.create();
        console.log(`Address: ${account.address}`);
        console.log(`Private Key: ${account.privateKey}`);
        return account;
    }

    async getBalance(address: string): Promise<string> {
        try {
            const balanceWei = await this.web3.eth.getBalance(address);
            const balanceEther = this.web3.utils.fromWei(balanceWei, 'ether');
            console.log(`Balance for ${address}: ${balanceEther} ETH`);
            return balanceEther;
        } catch (error) {
            console.error("Error fetching balance:", error);
            throw error;
        }
    }
}

export { Wallet, web3 };
