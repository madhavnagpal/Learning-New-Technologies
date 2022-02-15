'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

function createUserNames(_accounts) {
  _accounts.forEach(account => {
    account.userName = account.owner
      .toLowerCase()
      .trim()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
createUserNames(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currLoggedInAccount;
let movementsSorted = false;
btnLogin.addEventListener('click', handleLogin);
btnTransfer.addEventListener('click', handleMoneyTransfer);
btnClose.addEventListener('click', handleCloseAccount);
btnLoan.addEventListener('click', handleRequestLoan);
btnSort.addEventListener('click', handleSortMovements);
labelBalance.addEventListener('click', printMovementsFromHtmlNodes);

function printMovementsFromHtmlNodes() {
  const _movements = Array.from(
    document.querySelectorAll('.movements__value'),
    node => Number(node.textContent.replace('€', ''))
  );
  console.log(_movements);
}

function handleSortMovements(event) {
  event.preventDefault();
  movementsSorted = !movementsSorted;
  displayMovements(currLoggedInAccount.movements, movementsSorted);
}

function handleRequestLoan(event) {
  event.preventDefault();
  let amount = Number(inputLoanAmount.value);
  if (!amount) {
    alert('Please enter an amount greater than 0.');
    return;
  }
  if (
    !currLoggedInAccount.movements.some(movement => movement >= amount * 0.1)
  ) {
    alert('Sorry, Loan Application Rejected!');
    return;
  }
  currLoggedInAccount.movements.push(amount);
  handleUiUpdate(currLoggedInAccount);
  inputLoanAmount.value = '';
}

function handleCloseAccount(event) {
  event.preventDefault();
  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (
    currLoggedInAccount.userName !== userName ||
    currLoggedInAccount.pin !== pin
  ) {
    alert('Please enter valid details to close account');
    return;
  }
  accounts.splice(
    accounts.findIndex(account => account.userName === userName),
    1
  );
  containerApp.style.opacity = 0;
  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Log in to get started';
}

function handleMoneyTransfer(event) {
  event.preventDefault();
  const recepientUserName = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);

  if (!recepientUserName || !amount) {
    alert('Please fill valid user name and make sure amount is not 0');
    return;
  }

  if (recepientUserName === currLoggedInAccount.userName) {
    alert("You can't transfer money to yourself");
    return;
  }

  const recepientAccount = accounts.find(
    account => account.userName === recepientUserName
  );

  if (!recepientAccount) {
    alert('Money Transfer Failed: No such account exists.');
    return;
  }
  if (amount > currLoggedInAccount.balance) {
    alert('Not Enough balance to trasnfer.');
    return;
  }
  // Transfer
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  currLoggedInAccount.movements.push(-amount);
  recepientAccount.movements.push(amount);

  handleUiUpdate(currLoggedInAccount);
}

function handleLogin(event) {
  event.preventDefault();
  const userName = inputLoginUsername.value;
  const pin = inputLoginPin.value;

  if (!userName || !pin) {
    alert('Please enter both username and password');
    return;
  }

  const currAccount = accounts.find(account => account.userName === userName);

  if (!currAccount) {
    alert('No account exists with this username');
    return;
  }

  if (currAccount.pin !== Number(pin)) {
    alert('Wrong PIN');
    return;
  }
  // successfully logged in now side effects
  currLoggedInAccount = currAccount;
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  containerApp.style.opacity = 100;

  labelWelcome.textContent = `Welcome ${
    currLoggedInAccount.owner.split(' ')[0]
  }`;
  handleUiUpdate(currLoggedInAccount);
}

function handleUiUpdate(currAccount) {
  calcDisplaySummary(currAccount);
  calcDisplacyBalance(currAccount);
  displayMovements(currAccount.movements);
}

function displayMovements(movements, sorted = false) {
  containerMovements.innerHTML = '';
  const _movements = sorted
    ? movements.slice().sort((first, second) => first - second)
    : movements;

  _movements.forEach((movement, index) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplacyBalance(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
}

function calcDisplaySummary(currAccount) {
  const { movements, interestRate } = currAccount;
  const incomes = movements
    .filter(mov => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const withdrawal = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${withdrawal}€`;

  const interest = movements
    .filter(mov => mov >= 0)
    .map(mov => (mov * interestRate) / 100)
    .filter(_interest => _interest >= 1)
    .reduce((acc, _interest) => acc + _interest, 0);
  labelSumInterest.textContent = `${interest}€`;
}
