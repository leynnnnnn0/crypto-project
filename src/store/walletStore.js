import { create } from "zustand";


const walletStore = create((set) => ({
    currentBalance: 150000,
    transactionInfo: [],
    currentPrice: 0,
    totalAmount: 0,
    numOfCoins: 0,
    transactions: [],

    setNumOfCoins: (e) => {
        set({ numOfCoins: e.target.value });
    },

    setTotalAmount: () => {
        const { numOfCoins, currentPrice } = walletStore.getState();
        set({ totalAmount: numOfCoins * currentPrice });
    },

    setCurrentPrice: (currentPrice) => {
        set({ currentPrice })
    },

    setTransactionInfo: (image, name, symbol, entryPrice) => {
        const { numOfCoins, currentPrice } = walletStore.getState();
        set({
            transactionInfo: {
                numOfCoins,
                currentPrice,
                image,
                name,
                symbol,
                entryPrice
            }
        })
        walletStore.getState().setCurrentBalance();
            
        set({
          transactions: [
            ...walletStore.getState().transactions,
            walletStore.getState().transactionInfo,
          ],
        });
        console.log(walletStore.getState().transactions)

    },
    setCurrentBalance: () => {
        const { totalAmount, currentBalance } = walletStore.getState();
        set({ currentBalance: currentBalance - totalAmount });
    },


}))

export { walletStore };