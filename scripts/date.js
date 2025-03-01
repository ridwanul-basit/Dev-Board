function updateBangladeshTime() {
    const now = new Date();
    const optionsWeekday = { timeZone: "Asia/Dhaka", weekday: "short" }; // "Sun"
    const optionsDate = { timeZone: "Asia/Dhaka", month: "short", day: "numeric", year: "numeric" }; // "Mar 3, 2025"

   
    const weekday = new Intl.DateTimeFormat("en-US", optionsWeekday).format(now);

   
    const date = new Intl.DateTimeFormat("en-US", optionsDate).format(now);

    
    document.getElementById("bdWeekday").textContent = weekday;
    document.getElementById("bdDate").textContent = date;
}

updateBangladeshTime(); 
setInterval(updateBangladeshTime, 1000); 


function updateBangladeshLiveTime() {
    const now = new Date();

    
    const optionsTime = { 
        timeZone: "Asia/Dhaka", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: true  
    };

    
    const time = new Intl.DateTimeFormat("en-US", optionsTime).format(now);

    // Insert into HTML
    document.getElementById("bdTime").textContent = time;
}

updateBangladeshLiveTime(); 
setInterval(updateBangladeshLiveTime, 1000); 