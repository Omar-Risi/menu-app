import { useState } from "react";

import backIcon from "/Back.svg";
import burger from "/burger.jpg";
import coke from "/coke.jpg";
import fries from "/fries.jpg";
import sauce from "/sauce.jpg"

function App () {

  // component logic
  const [currentCategoryName, setCurrentCategoryName] = useState("Burgers");
  const [modalOpen, setModalOpen] = useState("0");
  const [currentItem, setCurrentItem] = useState({name : "",source : ""})

  function openModal(itemName, itemSource) {
      setCurrentItem( {name : itemName, source: itemSource});
      setModalOpen("screen");
  }

  function Modal({itemName, itemSource}) {
    return (
      <div className={`fixed left-0 bottom-0 bg-black/50 h-${modalOpen} w-screen overflow-hidden ease-in-out duration-200 `}>
        <button className="absolute top-0 left-0 m-4" onClick={() => {setModalOpen(false)}}> 
          <img src="/Back.svg" alt="back" className="text-white w-12 h-12 aspect-square" />
        </button>
        <section className="absolute bottom-0 h-[80vh] bg-gray-100 w-screen p-8 flex flex-col items-start">
            <img src={itemSource} alt="Image" className="h-auto w-full lg:w-1/6 aspect-square bg-gray-400 rounded-md shadow-md"/>

            <h1 className="mt-4 font-mplus font-black text-2xl text-gray-900"> {itemName} </h1>
            <p className="font-poppins font-medium text-gray-600 text-xl"> Item Description</p>
            <p className="text-orange-600 font-extrabold font-mplus text-xl mt-8"> OMR 1 </p>

            <h1 className="mt-4 font-mplus font-black text-2xl text-gray-900"> Addons </h1>
            <menu className="flex-row flex gap-2">
              <button className="bg-orange-500/25 rounded-md border-2 border-orange-600 text-orange-600 px-3 py-1 font-bold text-base font-poppins">spicy sauce</button>  
              <button className="bg-orange-500/25 rounded-md border-2 border-orange-600 text-orange-600 px-3 py-1 font-bold text-base font-poppins">extra cheese</button>  
            </menu>

        </section>
      </div>
    )
  }

  function CategoryItem({categoryName}) {

    const categorySource = "/burger.jpg";
    return (
      <button className={(categoryName === currentCategoryName) ? "bg-orange-500/50 px-3 py-2 rounded-md text-orange-600 flex flex-col items-center flex-1" : " px-3 py-2 rounded-md text-gray-900 flex flex-col items-center flex-1" } onClick={() => {setCurrentCategoryName(categoryName)}}>
        <div className={`bg-[url('${categorySource}')] bg-cover bg-center w-16 h-16 aspect-square rounded-md shadow-md`}></div>
        <p className="text-lg font-poppins font-semibold mt-1"> {categoryName} </p>
      </button>
    )
  }

  function MenuItem({itemName, itemPrice, children}) {
    const itemSource = "/burger.jpg";

    return (
      <button className="max-w-screen px-4 py-2 shadow-md rounded-md bg-white w-full grid grid-cols-2" onClick={() => { openModal(itemName, itemSource)}} >
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


  return (
    <main className="p-8">
      <section className="flex flex-row justify-between">
        <h1 className="font-black font-mplus text-orange-600 text-2xl "> Crunchy Buns</h1>
      </section>
      
      <section className="mt-16">
        <h1 className="uppercase font-extrabold text-gray-900 text-2xl">Menu</h1>

      <div className="bg-white p-4 mt-4 rounded-md shadow-md">
        <menu className="mt-4 flex-row flex gap-4 overflow-x-scroll ">
          <CategoryItem categorySource={burger} categoryName={"Burgers"} />
          <CategoryItem categorySource={fries} categoryName={"Fries"} />
          <CategoryItem categorySource={sauce} categoryName={"Sides"} />
          <CategoryItem categorySource={coke} categoryName={"Juices"}/>
        </menu>
      </div>
      </section>

      <section className="mt-8">
        <h2 className="uppercase text-left text-2xl font-mplus font-black"> {currentCategoryName} </h2>
        <menu className="flex-col flex gap-4 mt-8">
          <MenuItem itemName="Item one"   itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item two"   itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item three" itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item four"  itemPrice="1"> Item description</MenuItem>
          <MenuItem itemName="Item five"  itemPrice="1"> Item description</MenuItem>
        </menu> 
      </section>

      <Modal itemName={currentItem.name} itemSource={currentItem.source} />
      
    </main>
  )
}

export default App;