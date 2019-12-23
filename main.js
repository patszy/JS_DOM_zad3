function calcSalary(){
    let getEmployee, getTime, getPrice, getSalary, sumSalary;

    for(let i=1; true; i++){
        getEmployee = document.querySelector('#pracownik'+i);
        if(getEmployee == null) break;
        console.log(getEmployee);
        time = getEmployee.getElementsByTagName('input')[0].value;
        price = getEmployee.getElementsByTagName('input')[1].value;
        getSalary = getEmployee.getElementsByClassName('wyplata')[0];
        console.log(time);
        console.log(price);
        console.log(getSalary);
        if(time<=160){
            sumSalary = time*price;
            if(time<100) getEmployee.style.backgroundColor = 'maroon';
        }
        else sumSalary = 160*price+(time-160)*price*2;
        console.log(sumSalary);
        getSalary.innerHTML = sumSalary;
    }
}

function bestEmployee(){
    let getEmployee, getTime, bestEmployee=[0,0,0];
    for(let i=1; true; i++){
        getEmployee = document.querySelector('#pracownik'+i);
        if(getEmployee == null) break;
        console.log(getEmployee);
        getTime = parseInt(getEmployee.getElementsByTagName('input')[0].value);
        console.log(getTime);

        if(getTime>bestEmployee[0]){
            if(getTime>bestEmployee[1]){
                if(getTime>bestEmployee[2]){
                    bestEmployee[0]=bestEmployee[1];
                    console.log(bestEmployee[0]);
                    bestEmployee[1]=bestEmployee[2];
                    console.log(bestEmployee[1]);
                    bestEmployee[2]=getTime;
                    console.log(bestEmployee[2]);
                } else{
                    bestEmployee[0]=bestEmployee[1];
                    bestEmployee[1]=getTime;
                }
            } else bestEmployee[0]=getTime;
        }
        bestEmployee.forEach(function(element){
            console.log(element);
        });
    }
}

/* calcSalary(); */
/* bestEmployee(); */
document.getElementsByTagName('button')[0].addEventListener('click', function(){
    calcSalary();
})