/// Function to display expenses
function displayExpenses(expenses) {
    const expenseList = $('#expenseList');
    expenseList.empty();
    expenses.forEach(expense => {
      expenseList.append(`<li class="list-group-item">${expense.name}: $${expense.amount}</li>`);
    });
  }
  
  // Function to retrieve expenses from local storage
  function getExpenses() {
    const expensesJSON = localStorage.getItem('expenses');
    return expensesJSON ? JSON.parse(expensesJSON) : [];
  }
  
  // Function to add a new expense
  function addExpense(name, amount) {
    const expenses = getExpenses();
    expenses.push({ name, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses(expenses);
  }
  
  $(document).ready(function () {
    // Display existing expenses on page load
    const expenses = getExpenses();
    displayExpenses(expenses);
  
    // Add new expense on form submission
    $('#expenseForm').submit(function (e) {
      e.preventDefault();
      const expenseName = $('#expenseName').val();
      const expenseAmount = parseFloat($('#expenseAmount').val());
      if (expenseName && expenseAmount) {
        addExpense(expenseName, expenseAmount);
        $('#expenseName').val('');
        $('#expenseAmount').val('');
      } else {
        alert('Please enter both expense name and amount.');
      }
    });
  });
  