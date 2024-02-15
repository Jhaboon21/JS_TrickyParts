function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin != pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin != pin) return "Invalid PIN.";
            amount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
        }, 
        withdraw(inputPin, withdrawAmount) {
            if (inputPin != pin) return "Invalid PIN.";
            // if the withdraw is higher than the amount in the account, cancel
            if (withdrawAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            
            // else perform the withdrawal
            amount -= withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
        },
        changePin(inputPin, newPin) {
            if (inputPin != pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }

}

module.exports = { createAccount };
