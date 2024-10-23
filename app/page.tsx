"use client"
import Link from "next/link";
import Comp1 from "./component/page";
import { useState } from "react";


export default function Home() {
//let name="karem";
const [name,SetName]=useState("salam")
const [age,SetAge]=useState(40)




const[count,SetCount]=useState(0)


const changeName=()=>{
  //name="raheem"
  //name1="123";
  //console.log(name)
  SetName("Raheem")
  SetAge(56)
 // console.log(name)
}
const changeNumbercount=()=>{
  SetCount(count+100)
}


  return (
    <div>
<h2>useeffect</h2>
<button>counter increment button ={count}</button>
      <h1>
      Sir this is home page
        </h1>
        <br/>
      
        <button onClick={()=>SetCount(count+1)}>click button counter</button>
        <h1>useEffect  react hook function2  </h1>
        <button onClick={changeNumbercount}>click button counter2</button>
        <h1>usestate  react hook </h1>
        <p>
        
{name} is {age}
<button onClick={changeName}>click button</button>

        </p>

<Comp1/>


<br/>

link for about page<Link href="/about">About...clickme</Link>

<br/>
 link for about All product page <Link href="/products">All Products...clickme</Link>
 <br/> 
    </div>
  );
}
