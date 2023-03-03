

/*  TODO Update the calculateInterestOnlyLoanPayment function. */


/*  TODO Add reference paths. */

/// <reference path="module_loans.ts" />
/// <reference path="module_loan-programs.ts" />

/*  TODO Update the function calls. */

let interestOnlyPaymentModule = LoanPrograms.calculateInterestOnlyLoanPaymentModule({principle: 30000, interestRate: 5});
let conventionalLoanPaymentModule = LoanPrograms.calculateConventionalLoanPaymentModule({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"

