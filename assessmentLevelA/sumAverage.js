//Calculate the sum, average, and percentage of semester marks:-

operationsResearch = 95
differentialEquations = 85
discreteMathematics = 94
differentialGeometry = 88
linearAlgebra = 100
realAnalysis = 95

//Formulas:
//Sum = First Value+Second Value+---+Last Value
//Average = Sum of all values/Number of values 
//Percentage = (Part/Whole)*100

numberOfSubjects = 6                       //Total number of subjects
totalMaximumMarks = 100 * numberOfSubjects //Assuming each subject is out of 100 marks

//Step 1: Calculate the Sum of Marks
sumOfMarks = operationsResearch + differentialEquations + discreteMathematics + differentialGeometry + linearAlgebra + realAnalysis;
console.log("Sum of Marks = " + sumOfMarks)

//Step 2: Calculate the Average of Marks
averageOfMarks = sumOfMarks / numberOfSubjects
console.log("Average of Marks = " + averageOfMarks.toFixed(4))                  // Displaying 4 decimal places

//Step 3: Calculate the Percentage of Marks
percentageOfMarks = (sumOfMarks / totalMaximumMarks) * 100
console.log("Percentage of Marks = " + percentageOfMarks.toFixed(2) + "%")     // Displaying 2 decimal places





















