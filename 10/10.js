document.querySelector('#girl').addEventListener("dblclick", () => {
    document.querySelector('#girl').style.display='none';
    document.querySelectorAll('.animals').forEach((a)=>{a.style.display='none';})
    document.querySelector('#hat').style.display='none';
    setTimeout(func = () => {alert("вы прогнали девочку, теперь она не будет выступать");}, 500)
});

document.querySelector('.box').onclick = () => {document.querySelector('.box').style.top = "-100%";}

document.querySelector('#head').addEventListener('mouseup', () => {
    document.querySelector('#roupe').style.top = "8.5vh";
    document.querySelectorAll('#light').forEach(elem => {
        if (elem.style.opacity == '0.5') {
            if(document.querySelectorAll('.animals')[1].style.top == "350px") document.querySelectorAll('.animals')[0].style.visibility = "hidden";
            else document.querySelectorAll('.animals')[1].style.visibility = "hidden";
            elem.style.opacity = '0';
            document.querySelectorAll('.animals').forEach(elem => {elem.style.opacity = "0"});
            document.querySelector('#girl').style.opacity = "0";
            document.querySelector('#hat').style.opacity = "0";
        } else {
                if(document.querySelectorAll('.animals')[1].style.top == "50vh") document.querySelectorAll('.animals')[0].style.visibility = "visible";
                else document.querySelectorAll('.animals')[1].style.visibility = "visible";
            elem.style.opacity = '0.5';
            document.querySelectorAll('.animals').forEach(elem => {elem.style.opacity = "1"});
            document.querySelector('#girl').style.opacity = "1";
            document.querySelector('#hat').style.opacity = "1";
        }
    });

})
document.querySelector('#head').addEventListener('mousedown', () => {document.querySelector("#roupe").style.top = "9.5vh";})
document.querySelectorAll('.animals').forEach(elem =>{
    elem.onclick = () =>{ 
            elem.style.top = "70vh";  
            document.querySelectorAll('.animals')[0].style.transition = "top 0.5s linear, opacity 0.1s linear";
            document.querySelectorAll('.animals')[1].style.transition = "top 0.5s linear, opacity 0.1s linear";
            if (elem == document.querySelectorAll('.animals')[0])document.querySelectorAll('.animals')[1].style.top = "390px";  
            else
            document.querySelectorAll('.animals')[0].style.top = "390px";  
            document.querySelectorAll('.animals')[0].style.transition = "opacity 0.1s linear"; 
            document.querySelectorAll('.animals')[1].style.transition = "opacity 0.1s linear";
    }})