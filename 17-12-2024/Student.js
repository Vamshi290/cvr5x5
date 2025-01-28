function Student(name,grade){
    this.name = name,
    this.grade = grade,
    this.study=function(){
        return `${this.name} is studying`
    }
    this.getGrade=function(){
        return `${this.name} got ${this.grade} grade`
    }
}
let s=new Student("bunny","A")
console.log(s.study())
console.log(s.getGrade())