setInterval(() => {
    let d = new Date()
    let date = d.toLocaleDateString();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    let t = document.getElementById('time')

    t.innerHTML = + hour + ' : ' + minute + ' : ' + second +' on ' + date;

}, 1000);
