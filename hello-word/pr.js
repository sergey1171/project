let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();



let appData = {
budget: money,
expenses: {},
optionalExpenses: {},
income: [],
timeData: time,
savings: true,
chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");

            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
    }
},
 detectDayBudget :function()  {
    appData.moneyPerDay = (appData.budget / 30 ).toFixed();
    alert ("Бюджет на 1 день составляет" + appData.moneyPerDay + "руб.");
 },
 detectLevel : function()  {
    if (appData.moneyPerDay < 100)  {
        console.log("Это минимальный уровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)  {
        console.log("Это средний уровень достатка");
    }else if (appData.moneyPerDay > 2000)  {
        console.log("Это высокий уровень достатка");
    }else {
        console.log("Ошибочка...");
    }
 },
 checkSavings: function() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt(" Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита в месяц: " + appData.monthIncome);
    }
 },
 chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++)  {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
 },
 chooseIncome: function()  {
     let items = prompt("Что принесет дополнительный доход?  (перечислите через  запятую)" , "");
    appData.income = items.split(' ,'); 
}
};




appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет:"  + appData.moneyPerDay);

if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка")
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}




