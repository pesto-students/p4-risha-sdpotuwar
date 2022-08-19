class Person{

  constructor(name)
  {
     this.name = name;
  }
}
class Teacher extends Person{

    constructor(name,subject)
    {
        super(name);
       this.subject= subject;
       
    }
    print()
    {
        console.log(this.name + " teaches subject "  + this.subject);
    }
}

const teacher = new Teacher('Alexa','English');
teacher.print();