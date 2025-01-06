export const BalanceFormater = (balance) => {
    return Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(balance);
};
