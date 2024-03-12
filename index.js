let variable1 = "rajes"

console.log(typeof(variable1))

variable1 = 1

console.log(typeof(variable1))

//percabangan

if(variable1 > 2){
    console.log("salah")
} else if (variable1 < 0){
    console.log("salah")
} else {
    console.log("benar")
}

// perulangan tipe 1
for(let i=0; i<=10;i=i+2){
    console.log(i)
}

console.log(variable1)

let myName = ['rajes', 'faldela', 'ramanov']
for(let i=0; i<myName.length; i++){
    console.log(myName[i])
}

// perulangan tipe 2
// kaya di python for name in myName
for(const name of myName){
    console.log(name)
}

//while
while(variable1<=5){
    console.log(variable1)
    variable1++
}

console.log(variable1)