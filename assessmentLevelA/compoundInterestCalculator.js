console.log("Compound Interest Calculator:")

//CI = [P*(1+R/100)**T]-P
//Amount (A) = P*(1+R/100)**T  where A = Total Accumulated Amount
//CI = Amount-Principal

principal = 50000
rate = 10
time = 5

amount = principal * ((1 + (rate / 100)) ** time)

compoundInterest = amount - principal

console.log("Total Accumulated Amount (A) = ₹" + amount.toFixed(4))

console.log("Compound Interest = ₹" + compoundInterest.toFixed(4))




