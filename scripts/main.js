document.getElementById('complete1').addEventListener("click",function(){
    const ele1 =document.createElement('section');

    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime1 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);


    ele1.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Fix Mobile Button Issue at <span id="bdTime">${currentTime1}</span> </p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele1);

    let tas =document.getElementById("task");
    alert("Board Updated Successfully");
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task");
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete1').disabled = true;
})


document.getElementById('complete2').addEventListener("click",function(){
    const ele2 =document.createElement('section');
    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime2 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);
    ele2.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Add Dark Mode at <span id="bdTime">${currentTime2}</span></p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele2);
    let tas =document.getElementById("task");
    alert("Board Updated Successfully")
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task")
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete2').disabled = true;
})
document.getElementById('complete3').addEventListener("click",function(){
    const ele3 =document.createElement('section');

    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime3 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);

    ele3.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Optimize Home Page at <span id="bdTime">${currentTime3}</span></p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele3);

    let tas =document.getElementById("task");
    alert("Board Updated Successfully")
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task")
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete3').disabled = true;
})
document.getElementById('complete4').addEventListener("click",function(){
    const ele4 =document.createElement('section');
    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime4 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);
    ele4.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Add new emoji 🤲 at <span id="bdTime">${currentTime4}</span></p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele4);

    let tas =document.getElementById("task");
    alert("Board Updated Successfully")
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task")
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete4').disabled = true;
})
document.getElementById('complete5').addEventListener("click",function(){
    const ele5 =document.createElement('section');
    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime5 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);
    ele5.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Integrate OpenAI API <span id="bdTime">${currentTime5}</span></p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele5);

    let tas =document.getElementById("task");
    alert("Board Updated Successfully")
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task")
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete5').disabled = true;
})
document.getElementById('complete6').addEventListener("click",function(){
    const ele6 =document.createElement('section');
    const now = new Date();
    const optionsTime = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true 
    };
    const currentTime6 = new Intl.DateTimeFormat("en-US", optionsTime).format(now);
    ele6.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg ">
                <p> You have completed the task Improve Job Searching at <span id="bdTime">${currentTime6}</span></p>
            </div>
    `
    document.getElementById('right_side').appendChild(ele6);

    let tas =document.getElementById("task");
    alert("Board Updated Successfully")
    if (tas.innerHTML==="1"){
        alert("Congrats!!!! You have completed all the current task")
    }
    let task = parseInt(tas.innerHTML);
    let upTask = task - 1;
    tas.innerHTML = upTask;

    let hist = document.getElementById("history");
    let history = parseInt(hist.innerHTML);
    let upHistory = history + 1;
    hist.innerHTML = upHistory;
    document.getElementById('complete6').disabled = true;
})

document.getElementById("clear_history").addEventListener("click",function(){
    const sec = document.getElementById('right_side');
        sec.querySelectorAll("section").forEach(section => section.remove());
        // let tas =document.getElementById("task")
        // tas.innerHTML = "6";

        // let hist = document.getElementById("history");
        // hist.innerHTML ="23";

    

})