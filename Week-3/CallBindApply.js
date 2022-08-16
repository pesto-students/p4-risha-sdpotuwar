//bind
function product(a,b)
{
  
  return this.a * this.b;
}

const operation = product.bind({a:10,b:20});
console.log(operation());
//Call
function pestoWeekRoutine()
{
    const routine={
        sundaySession,
        feedback,
        teachable,
        assignment,

    }.join('');
    console.log(routine);
}

// var javaScript={sundaySession:'javascriptFundamentals',feedback:'Instructor and master session',teachable:'3 modules',assignment:'Upload on gitHub'};
// pestoWeekRoutine.call(javaScript);

//apply

function vacationList(august)
{
return august+this.November + this.december;
}

const list={
    November:['Diwali','bhaubij'],
    december:['chritsmas','NewYear'],
}
console.log(vacationList.apply(list,[['rakshabandhan','15thaugust']]));