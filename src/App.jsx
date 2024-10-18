import React , { useState } from 'react'
import Card from "./components/Card"
import Counter from "./components/Counter"
import Profile from './assets/mine.jpg';
import Btn from "./components/Btn";
import Timer from "./components/Timer";
import Practical from "./components/Practical";
import Validation from "./components/Validation";
import Students from "./components/Students";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import ColorPicker from "./components/ColorPicker";
import Car from "./components/Car";
import Food from "./components/Food";
import CarCompany from "./components/CarCompany";
import MyComponent from "./components/MyComponent";
import ComponentAs from "./components/ComponentAs";
import ThemedButton from "./components/ThemedButton";
import Countries from "./components/Countries";
import Child from "./components/Child";
function App() {
  const profiles = [
    { name: 'Rimshan', role: 'Developer', image: Profile },
    { name: 'Shanib', role: 'Developer', image: Profile },
    { name: 'aswin', role: 'editor', image: Profile },
  ];

  const fruits=[
    {id:1,name:"Apple" , calories:45},
    {id:2,name:"Orange" , calories:56},
    {id:3,name:"Banana" , calories:40},
    {id:4,name:"Kiwi", calories:65}]

   const [data,setData]=useState("")
   const handleData=(childData)=>{
    setData(childData)
   }
  return (
    <>
      <Counter />
      <Card profiles={profiles}/>
      <Btn />
      <Timer />
      <Practical />
      <Validation />
      <Students name={"rimshan"} class={"3C"} age={20}/>
      <Students />
      <UserGreeting isLoggedin={true} username="Shanib"/>
      <List items={fruits}/>
      <ColorPicker />
      <Car />
      <Food />
      <CarCompany />
      <MyComponent />
      <ComponentAs />
      <ThemedButton />
      <Countries />
      <Child sendData={handleData}/>
      <h2>Data from Child: {data}</h2>
    </>
  )
}

export default App
