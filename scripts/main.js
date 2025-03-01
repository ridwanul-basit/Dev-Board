document.getElementById('complete1').addEventListener("click",function(){
    const ele1 =document.createElement('section');
    ele1.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Fix Mobile Button Issue at 11:30:15 pm</p>
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
    ele2.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Add Dark Mode at 11:30:15 pm</p>
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
    ele3.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Optimize Home Page at 11:30:15 pm</p>
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
    ele4.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Add new emoji at 11:30:15 pm</p>
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
    ele5.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg">
                <p> You have completed the task Integrate OpenAI API at 11:30:15 pm</p>
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
    ele6.innerHTML= `
    <div class="bg-gray-100 p-4 my-4 mx-2 rounded-lg ">
                <p> You have completed the task Improve Job Searching at 11:30:15 pm</p>
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