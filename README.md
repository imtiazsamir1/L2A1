<h1 align="center">Blog Task</h1>
<h2>1.What are some differences between interfaces and types in TypeScript?</h2>

<h3>Interface vs Type</h3>

Interface and type both used in TypeScript.Now I explain some diffrence .

- An interface with the same name can be defined multiple times,but type alias can not be defined multiple times.
- Interface can implement another interface or class,but type Alias ​​cannot extend, but can be combined using intersection type.
- Interface is mainly used to define object structure,on the other hand type alias can be used for primitive, union, tuple, function, etc.
<h2>2.What is the use of the keyof keyword in TypeScript? Provide an example.</h2>

<h3>keyof</h3>
keyof returns the union type of all keys of an object type.
- type Person = {
    name: string;
    age: number;
}

type PersonKeys = keyof Person

- Here PersonKeys will be 'name' | 'age'. This is often used in generic programming.
