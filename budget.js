
// quer Selector as class use karke kiya hai
const addExpenseBtn = document.querySelector(".add-expense-btn");
const expenseList = document.querySelector(".expense-list");
const totalExpenses = document.querySelector(".total-expense h3"); // for the line which will display

let expenses = [];
let total = 0;


function renderExpenses(){
    let html = "";
    // iterates for expenses to addd the text in html list 
    expenses.forEach(expense=>{

        html +=`
            <div class="expense-item">
            <div class="expense-item-description">${expense.description}</div>
            <div class="expense-item-amount">$${expense.amount}</div>
            <button class="delete-expense-btn">&times;</button>
            </div>
        `;
    });
    // addds this to expenseList
    expenseList.innerHTML = html;
    totalExpenses.innerText = `Total Expense: ${total}`;

}

function addExpenses(){

    const description = prompt("Enter expense description");
    const amount = parseFloat(prompt("Enter Expense Amount"));
    if(description && amount){
        const expense = {
            description:description,
            amount:amount
        };
        expenses.push(expense);
        total+= amount;
        renderExpenses();

    }

}
addExpenseBtn.addEventListener("click",addExpenses);

function deleteExpenses(index){
    total-= expenses[index].amount;
    //splice to remove the html block and make changes in disply by renderExpenses
    expenses.splice(index,1)
    renderExpenses();


}

expenseList.addEventListener("click",function(event){
    
    if(event.target.classList.contains("delete-expense-btn")){
        const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

        deleteExpenses(index);
    }
});