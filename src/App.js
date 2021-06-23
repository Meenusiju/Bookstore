import React, { useState } from 'react'
import Categories from './components/Categories'
import Menu from './components/Menu'
import data from './data';

//get unique values of categories
const uniqueCategories = ['all', ...new Set(data.map((item) =>item.category))];
//console.log(uniqueCategories);

const App = () => {

  //set state for menus and categories 
  const [menu,setMenu] = useState(data);
  const [categories] = useState(uniqueCategories);

  
  const filterCategory = (category) => {
      if(category === 'all'){
        setMenu(data); //return original full array if category is all
        return;
      }
      const newItems = data.filter((item) => item.category === category);
      setMenu(newItems);
  }

  return(
   <main>
     <section className="menu section">
       <div className="title">
         <h2>Book Store</h2>
         <div className="underline"></div>
       </div>
       <Categories categories={categories} filterItems={filterCategory}/>
       <Menu items={menu}/>
       
      </section>
   </main>
       
  )
}
export default App;
