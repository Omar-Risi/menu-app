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
      <button className="px-4 py-2 shadow-md rounded-md bg-white w-full grid grid-cols-2">
          <div>
            <h2> {itemName} </h2>
            <p> {children} </p>
            <p> OMR{itemPrice}</p>
          </div>
          <div>
            <img src={itemSource} alt="img" className="bg-gray-300 h-14 w-14 aspect-square rounded-md float-end" />
          </div>
      </button>
    )
  }

  return (
    <main className="p-8">
      <section className="flex flex-row justify-between">
        <h1 className="font-black font-mplus text-orange-600 text-2xl "> Crunchy Buns</h1>
        <button> menu </button>
      </section>
      
      <section className="mt-16">
        <h1 className="uppercase font-extrabold text-gray-900 text-2xl">Menu</h1>

        <menu className="mt-4 flex-row flex gap-4 overflow-x-scroll">
          <CategoryItem categorySource={""} categoryName={"Burgers"}/>
          <CategoryItem categorySource={""} categoryName={"Fries"}/>
          <CategoryItem categorySource={""} categoryName={"Sides"}/>
          <CategoryItem categorySource={""} categoryName={"Juices"}/>
          <CategoryItem categorySource={""} categoryName={"Desserts"}/>
        </menu>
      </section>

      <section className="mt-8">
        <menu>
          <MenuItem itemName="Beef Burger" itemPrice="1"> Enjoy beef burger with...</MenuItem>
        </menu>
      </section>
      
    </main>
  )
}

export default App;