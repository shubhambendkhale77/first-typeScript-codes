let age:number=22;
let greeting:string="Hello,World!";
let isLoggedIn:boolean=true;
let color:string[]=['red','green','blue']

function displayDetails(){
    console.log(`Age: ${age}`)
    console.log(`Greeting: ${greeting}`)
    console.log(`Logged In: ${isLoggedIn}`)
    console.log(`color: ${color.join(',')}`)
}

displayDetails()