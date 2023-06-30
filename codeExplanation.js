Project 1:

	
--------------------------------------------------------------------------------------------------------------------
Project 1: Expense Tracker 
--------------------------------------------------------------------------------------------------------------------

Index.html

		Index.js

			App.js

				NewExpense --> ExpenseForm                                     [First Part Of The Page]      

				Expenses                                                       [Second Part Of The Page]
						Card  
						  ExpensesFilter 
						  ExpensesChart  --> Chart  --> ChartBar     
						  ExpensesList   --> Card   --> ExpenseItems --> ExpenseDate
						Card 

--------------------------------------------------------------------------------------------------------------------
	
Index.html 	- 	Html page in public folder.  Rendering starts from here....
			
Index.js   	- 	First, import react dom (import ReactDOM from 'react-dom/client';)
			
				Create root element which points to div with id : root in Index.js Then inside that root, we are calling app.js
				in </React.StrictMode>
			
App.js      -   This is the main js file we used to begin a project.

				Here, we have to decide how many compenents we want, how they should connect like these we should make 
				a structure of the project.
				
				+ variable declared = it is an array of objects.(if db is available, we could use that)
				+ useState and its function
				+ `JSX` passed variables/functions into custom components 
				

 ==== [First Part Of The Page] ====				

NewExpense  -   App.js ----> NewExpense

				+ props (getting function/variable) from parent component.
				+ useState (T/F) with onClick/onCancel events.
				+ useState and its FUNCTION : Function is creating a new variable, then passing it to parent compenent function as a parmeter  
				  and calling that function  `LIFTING THE STATE UP`
				+ `JSX` passed variables/functions into custom components 
				
				
ExpenseForm -   App.js ----> NewExpense ----> ExpenseForm *

				+ props (getting function/variable) from parent component.
				+ useState (""/value) + Two-Way Binding with onChange and onSubmit/onReset events.
				+ useState and its FUNCTION : Function is creating a new variable, then passing it to parent compenent function as a parmeter 
				  and calling that function  `LIFTING THE STATE UP`
				+ `JSX` passed variables/functions into custom components 



 ==== [Second Part Of The Page] ====					
				
				
Expenses    -   App.js ----> Expenses		

				+ variable declared
				+ props (getting function/variable) from parent component.  
				+ useState and its function 
				
				[P] NOTE: This Props Is From 'Expenses <---- App.js <---- NewExpense <---- ExpenseForm'		
				
				Here we are enclosed the custom components withing Card [WRAPPER COMPONENT].
				
				+ Using children props {props.children}, we can have all `JSX` inside of it
				+ `JSX` passed variables/functions into custom components 
				
				
			
ExpensesFilter - App.js ----> Expenses ----> ExpensesFilter *	
				
				+ props (getting function/variable) from parent component.
				+ function with onChange
				+ Passing User inputs to parent compenent function as a parmeter 
				  and calling that function  `LIFTING THE STATE UP`
				  
				  
				  
ExpensesChart - App.js ----> Expenses ----> ExpensesChart 

				+ variable declared
				+ props (getting function/variable) from parent component. 
				+ `JSX` passed variables/functions into custom components
				
				[P] NOTE: This Props Is From 'ExpensesChart <---- Expenses <---- ExpensesFilter'
				
				
				
Chart         - App.js ----> Expenses ----> ExpensesChart ----> Chart (outline of the chart will be created)

				+ variable declared
				+ props (getting function/variable) from parent component. 
				+ `JSX` passed variables/functions into custom components
				
				[P] NOTE: This Props Is From 'ExpensesFilter' Refer parent component above.
				
				
				
ChartBar      - App.js ----> Expenses ----> ExpensesChart ----> Chart ----> ChartBar (inner chartbar will be created) *

				+ variable declared
				+ props (getting function/variable) from parent component. 
				
				[P] NOTE: This Props Is From 'ExpensesFilter' Refer parent component above.
				
				
				
ExpensesList  - App.js ----> Expenses ----> ExpensesList  (Unordered list will be created)         

				+ props (getting function/variable) from parent component.
				+ `JSX` Conditional Return Statement
				+ `JSX` passed variables/functions into custom components
				
				[P] NOTE: This Props Is From 'App.js ' Refer parent component above.
				
				
ExpenseItems  - App.js ----> Expenses ----> ExpensesList ----> ExpenseItems  (each list item will be created inside of card) 

				+ props (getting function/variable) from parent component.
				+ `JSX` passed variables/functions into custom components
				
				[P] NOTE: This Props Is From 'App.js' Refer parent component above.
				
				Here we are enclosed the custom components withing Card [WRAPPER COMPONENT].
				
				+ Using children props {props.children}, we can have all `JSX` inside of it
				
		
		
ExpenseDate   - App.js ----> Expenses ----> ExpensesList ----> ExpenseItems  ----> ExpenseDate *

                + variable declared
				+ props (getting function/variable) from parent component.
				
				[P] NOTE: This Props Is From 'App.js ' Refer parent component above.
				
				
=========================================================================================================================================
Project 2:




=========================================================================================================================================
Project 3: react-investment-calculator

 