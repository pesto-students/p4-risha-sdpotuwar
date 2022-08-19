let Person = function(){};

Person.prototype.initialize=function(name)
{
    this.name=name;
};

function Teacher(name,subject)
{ 
  Person.prototype.initialize(name);
  this.subject=subject;
}

Object.setPrototypeOf(Teacher.prototype,Person.prototype); // setting prototype

Teacher.prototype.print=function()
{
  console.log(this.name+' teaches subject '+ this.subject);
};

const teacher = new Teacher('Alexa','English');
teacher.print();