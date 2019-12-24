class Employee{
    constructor(index, workTime){
        this.index = index;
        this.workTime = workTime;
    }
}

function calcSalary(){
    let getEmployee, time, price, getSalary, sumSalary;

    for(let i=1; true; i++){
        getEmployee = document.querySelector('#pracownik'+i);

        if(getEmployee == null) break;

        time = getEmployee.getElementsByTagName('input')[0].value;
        price = getEmployee.getElementsByTagName('input')[1].value;
        getSalary = getEmployee.getElementsByClassName('wyplata')[0];

        if(time<=160) sumSalary = time*price;
        else sumSalary = 160*price+(time-160)*price*2;

        getSalary.innerHTML = sumSalary;
    }
}

function rateEmployee(){
    let getEmployee, getTime, getBestEmployee, tabEmployee=[];

    for(let i=1; true; i++){
        getEmployee = document.querySelector('#pracownik'+i);
        if(getEmployee == null) break;
        getTime = parseInt(getEmployee.getElementsByTagName('input')[0].value);
        let addEmployee = new Employee(i, getTime);
        tabEmployee[i-1]=addEmployee;
    }

    /* Best 3 employees */
    getBestEmployee = document.getElementById('najlepsi-pracownicy');
    tabEmployee.sort((empl1, empl2) => (empl1.workTime > empl2.workTime) ? -1 : 1);
    for(i=0; i<3; i++){
        getEmployee = document.querySelector('#pracownik'+tabEmployee[i].index);
        getBestEmployee.appendChild(getEmployee);
    }
    /* How to repair best 3 employees mistake: create object.name, get name from employee, add to object, view it in html. */

    /* Worst employee/s */
    getEmployee = document.querySelector('#pracownik'+tabEmployee[tabEmployee.length-1].index);
    getEmployee.style.backgroundColor = 'maroon';
}


document.getElementsByTagName('button')[0].addEventListener('click', function(){
    calcSalary();
    rateEmployee();
});