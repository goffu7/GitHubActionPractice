const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

const monthOfTheYear = (date = new Date()) => {
    const months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[date.getUTCMonth()];
}

try {
    document.getElementById('day').innerText = dayOfTheWeek();
    document.getElementById('month').innerText = monthOfTheYear();
} catch(err) {}


console.log("this month is" +monthOfTheYear(new Date("08/31/2022")));
// 
exports.dayOfTheWeek = dayOfTheWeek;
exports.monthOfTheYear = monthOfTheYear;
