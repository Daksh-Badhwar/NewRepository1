class student{ //classes are factory
    constructor(name, age, marks){
        this.name=name;
        this.age=age;
        this.marks= marks;
    }
    setPlacementAge (minage)
    {
        return (minmarks)=>{   //fat arrow will use above this but normal wont
            return this.marks>=minmarks && this.age>=minage;
        };
    }
}
function func (){
    const yash= new student('yash',25,41)
    console.log(yash.setPlacementAge(18)(40));

}
func();