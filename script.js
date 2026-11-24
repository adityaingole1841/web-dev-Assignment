let expenses = [];

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const category = document.getElementById("category");

const addBtn = document.getElementById("addBtn");
const expenseItems = document.getElementById("expenseItems");
const total = document.getElementById("total");
const filter = document.getElementById("filter");

// Add Expense
addBtn.addEventListener("click", function () {

    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);
    let selectedCategory = category.value;

    if (name === "" || amount <= 0 || selectedCategory === "") {
        alert("Please enter valid expense details!");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: selectedCategory
    };

    expenses.push(expense);

    displayExpenses();

    expenseName.value = "";
    expenseAmount.value = "";
    category.value = "";
});

// Display Expenses
function displayExpenses() {

    expenseItems.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach(function (expense, index) {

        totalAmount += expense.amount;

        if (filter.value === "All" ||
            filter.value === expense.category) {

            let li = document.createElement("li");

            li.innerHTML = `
                <span>
                    ${expense.name} - ${expense.category}
                    ₹${expense.amount}
                </span>

                <button onclick="deleteExpense(${index})">
                    Delete
                </button>
            `;

            expenseItems.appendChild(li);
        }
    });

    total.innerText = totalAmount;
}

// Delete Expense
function deleteExpense(index) {

    expenses.splice(index, 1);

    displayExpenses();
}

// Filter Expenses
filter.addEventListener("change", function () {
    displayExpenses();
});

// Calculate Remaining Money
document.getElementById("calculateBtn")
.addEventListener("click", function () {

    let given = Number(document.getElementById("givenMoney").value);
    let earned = Number(document.getElementById("earnedMoney").value);
    let spent = Number(document.getElementById("spentMoney").value);

    let remaining = given + earned - spent;

    document.getElementById("remaining").innerText = remaining;
});
