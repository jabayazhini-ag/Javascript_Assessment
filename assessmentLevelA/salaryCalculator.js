console.log("If the salary package amounts to 5 LPA, the corresponding figures for monthly, weekly, and hourly salary calculations are as follows: ")

// Given annual salary in LPA (Lakhs Per Annum)
annualSalary = 500000  // 5 LPA

// Calculate salary per month, week, day, and hour
salaryPerMonth = annualSalary / 12
salaryPerWeek = annualSalary / 52
salaryPerDay = annualSalary / 365        // Assuming a non-leap year (365 days)
salaryPerHour = annualSalary / 8760     //Total hours in a calendar year (24 * 365 = 8760)

console.log("Salary (per annum): ₹"+annualSalary)
console.log("Salary (per month): ₹" + salaryPerMonth)
console.log("Salary (per week): ₹" + salaryPerWeek)
console.log("Salary (per day): ₹" + salaryPerDay)
console.log("Salary (per hour): ₹" + salaryPerHour)







