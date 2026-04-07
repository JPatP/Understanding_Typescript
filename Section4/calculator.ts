// data:
// initial amount
// annual contribution
// expected return
// duration

const initial_amount: number = 10000;
const annual_contribution: number = 5000;
const expected_return: number = 0.07;
const duration: number = 20;

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;   
};

type InvestmentResult = {
    year: string
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string; // either an array of investment results or an error message
function calculateInvestment(data: InvestmentData): CalculationResult { // => result[] atrray of investment result for each year
    // start by extracting the data from the input by destructuring, so you can easily access the individual values
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    // check inputs and make sre they are valid (e.g. non-negative numbers, expected return between 0 and 1, etc.)
    if (initialAmount < 0) {
        return "Initial amount cannot be negative.";
    }

    if (duration <= 0) {
        return "No valid amount of years provided."
    }

    if (expectedReturn < 0) {
        return "Return must be at least 0"
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i+1}`,
            totalAmount: total,
            totalContributions,
            totalInterestEarned
        });
    }    
    return annualResults;

}
function printResults(results: InvestmentResult) {

}

const result = calculateInvestment(...) {}

printResults(result);