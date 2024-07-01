import { MortgageLoan } from "../../../src/gof/abstract-factory/Loan";

test("Deve criar um financiamento imobiliário", function () {
  const loan = new MortgageLoan("abs132", 100000, 10000, 240);
  expect(loan.loanId).toBeDefined();
  expect(loan.amount).toBe(100000);
  expect(loan.income).toBe(10000);
  expect(loan.installments).toBe(240);
});
