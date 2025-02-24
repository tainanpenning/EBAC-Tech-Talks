AOS.init();

const eventDate = new Date("Jan 22, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();

const tellsTheTime = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilTheEvent = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilTheEvent = Math.floor(timeUntilTheEvent / dayInMs);
    const hoursUntilTheEvent = Math.floor((timeUntilTheEvent % dayInMs) / hoursInMs);
    const minutesUntilTheEvent = Math.floor((timeUntilTheEvent % hoursInMs) / minutesInMs);
    const secondsUntilTheEvent = Math.floor((timeUntilTheEvent % minutesInMs) / 1000);

    document.getElementById("counter").innerHTML = `começa em ${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`;

    if (timeUntilTheEvent < 0){
        clearInterval(tellsTheTime);
        document.getElementById("counter").innerHTML = `<br/>Este evento já expirou!`
    }
}, 1000);