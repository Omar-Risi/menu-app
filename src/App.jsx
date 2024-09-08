import { useState } from "react";
import { useRef } from "react";

function App () {

  function CategoryItem({categorySource,categoryName}) {
    return (
      <button>
        <img src={categorySource} alt="image" className="h-16 w-16 aspect-square bg-gray-300 shadow-md rounded-md"/>
        <p className="text-lg font-poppins font-semibold text-gray-900 mt-2"> {categoryName} </p>
      </button>
    )
  }

  function MenuItem({itemName, itemSource, itemPrice, children}) {
    return (
      <button className="max-w-screen px-4 py-2 shadow-md rounded-md bg-white w-full grid grid-cols-2">
          <div>
            <h2 className="text-left text-xl font-bold font-mlpus w-fit"> {itemName} </h2>
            <p className="text-left truncate text-gray-500 text-sm font-poppins font-medium"> {children} </p>
            <p className="text-left text-orange-600 font-mplus font-extrabold mt-4 w-fit"> OMR{itemPrice}</p>
          </div>
          <div>
            <img src={itemSource} alt="img" className="bg-gray-300 h-24 w-24 aspect-square rounded-md float-end" />
          </div>
      </button>
    )
  }

  // component logic
  const [categoryName, setCategoryName] = useState("Burgers");

  return (
    <main className="p-8">
      <section className="flex flex-row justify-between">
        <h1 className="font-black font-mplus text-orange-600 text-2xl "> Crunchy Buns</h1>
        <button> menu </button>
      </section>
      
      <section className="mt-16">
        <h1 className="uppercase font-extrabold text-gray-900 text-2xl">Menu</h1>

      <div className="bg-white p-4 mt-4 rounded-md shadow-md">
        <menu className="mt-4 flex-row flex gap-4 overflow-x-scroll ">
          <CategoryItem categorySource={""} categoryName={"Burgers"}/>
          <CategoryItem categorySource={""} categoryName={"Fries"}/>
          <CategoryItem categorySource={""} categoryName={"Sides"}/>
          <CategoryItem categorySource={""} categoryName={"Juices"}/>
          <CategoryItem categorySource={""} categoryName={"Desserts"}/>
        </menu>
      </div>
      </section>

      <section className="mt-8">
        <h2 className="uppercase text-left text-2xl font-mplus font-black"> {categoryName} </h2>
        <menu className="flex-col flex gap-4 mt-8">
          <MenuItem itemName="Item one"   itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item two"   itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item three" itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item four"  itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item five"  itemPrice="1"> Item description</MenuItem>
        </menu> 
      </section>
      
    </main>
  )
}

export default App;