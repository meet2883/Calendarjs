let date = new Date()
let year = 2025;
let month = date.getMonth();

let lastDatePrevMonth = new Date(year, month, 0).getDate()
let firstDayofCurrentMonth = new Date(year, month, 1).getDay();
let firstDateofCurrentMonth = new Date(year, month + 1, 1).getDate();
let lastDayofCurrentMonth = new Date(year, month + 1, 0).getDay();
let lastDateofCurrentMonth = new Date(year, month + 1, 0).getDate();

// console.log(`lastdayofcurrentmonth : ${lastDayofCurrentMonth}, firstDayofnextmonth : ${firstDayofNextMonth}, lastday`)

let dates = [];

// filling previous month dates
for(let i = firstDayofCurrentMonth - 1; i >= 0; i--){
    // dates.push({date : lastDatePrevMonth - i, event : ""})
    dates.push(lastDatePrevMonth - i)
}

// filling current month dates
for(let i = firstDateofCurrentMonth; i <= lastDateofCurrentMonth; i++){
    // dates.push({ date : i, event : ""})
    dates.push(i)
}

// filling next months date
let nextMonthDate = 1;
for(let i = lastDayofCurrentMonth; i < 6; i++){
    dates.push(nextMonthDate++)
    // dates.push({ date : nextMonthDate++, event : ""})
}

// Function to format dates into a 7-column structure
function formatCalendar(dates) {
    let weeks = [];
    for (let i = 0; i < dates.length; i += 7) {
        weeks.push(dates.slice(i, i + 7)); // Create weeks (subarrays of 7 days each)
    }
    return weeks;
}

// Call the function
let weeks = formatCalendar(dates);
console.log(weeks)


