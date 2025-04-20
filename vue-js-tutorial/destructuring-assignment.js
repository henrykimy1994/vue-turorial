window.onload = () => {
    console.log("========================= DESTRUCTURING ASSIGNMENT");
    const person = { name:'Henry', age: 32 }
    const { name, age } = person
    console.log("name ::: ", name);
    console.log("age ::: ", age);
    console.log("");
    

    console.log("========================= ARRAY DESTRUCTURING");
    // Array destructuring
    const arr = [1, 2 ,3]
    const [a, b, c] = arr
    console.log("a ::: ", a);
    console.log("b ::: ", b);
    console.log("c ::: ", c);

    const [first, , third] = [10, 20, 30];
    console.log("first ::: ", first);
    console.log("third ::: ", third);
    console.log("");

    console.log("========================= REST OPERATOR");
    // Rest operator
    const [head, ...rest] = [1, 2, 3, 4]
    console.log("head ::: ", head);
    console.log("rest ::: ", rest);
    console.log("");
    
    console.log("========================= OBJECT DESTRUCTURING");
    const user = { username: 'Henry', id: 101 }
    const { username, id } = user;
    console.log("username ::: ", username);
    console.log("id ::: ", id);
    console.log("");
    
    console.log("========================= RENAMING VARIABLES");
    const { username: renamedName } = user
    console.log("renamedName ::: ", renamedName);
    console.log("");

    console.log("========================= DEFAULT VALUES");
    const { age: renamedAge = 30 } = user
    console.log("renamedAge ::: ", renamedAge);

    console.log("========================= NESTED DESTRUCTURING");
    const profile = {
        name: 'Henry',
        address: {
            city: 'Seoul',
            zip: '12345'
        }
    };
    const {
        address: { city, zip }
    } = profile;
    console.log("city ::: ", city);
    console.log("zip ::: ", zip);
    console.log("");

    console.log("========================= FUNCTION DESTRUCTURING");
    const greet = ({ name, age }) => {
        console.log(`Hello ${name}, you are ${age}`);
    }
    greet({ name: 'Henry', age: 32 })
    console.log("");


    console.log("Array");
    console.log("Object");
    console.log("Rename");
    console.log("Default Value");
    console.log("Nested Object");
    console.log("Rest Operator");
}