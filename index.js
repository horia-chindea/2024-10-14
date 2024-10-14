class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    makeNoise(){
        console.log(`${this.name} says ${this.sound}`);
    }
}
class DomesticAnimal extends Animal{
    constructor(name,sound,owner){
        super(name,sound);
        this.owner = owner;
    }
}

const wildDog = new Animal("Spike","Woof!");
console.log(wildDog);
wildDog.makeNoise();

const houseDog = new DomesticAnimal("Rex","Ham","Jim");
console.log(houseDog);
houseDog.makeNoise();

const cat = new Animal("Tom","Meow!");
console.log(cat);
cat.makeNoise();

class User {
    constructor(username, email, password, age){
        this.username = username;
        this.email = email;
        this.password = password;
        this.age = age;
        this.isLoggedIn = false;
    }
    // Adaugam comportamente:
    logIn(password){
        if(password === this.password){
            this.isLoggedIn = true;
            console.log("Login successful!");
        } else {
            console.log("Invalid password!");
        }
    }
}
const user1 = new User("demo1","email@email.com","1234",19);
console.log(user1);
user1.logIn("1234");
console.log(user1);

user1.email = "demo@demo.com";
console.log(user1);