var twelveHour = true;

function tock() {
    var d = new Date();
    var m = d.getMinutes();
    if (m < 10) {
        m = '0' + m.toString();
    } else {
        m.toString();
    }
    if (twelveHour) {
        var h = d.getHours();
        if (h > 12) {
            h = h - 12;
        }
    } else {
        var h = d.getHours().toString();
    }
    var time = h + ":" + m;
    var weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var date = weekdays[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate().toString();
    document.getElementById("digitalclock").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

function tick() {
    tock();
    setInterval(tock, 5000);
}
