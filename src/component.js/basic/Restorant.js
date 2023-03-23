import React, { useState } from 'react'
import menu from './menuApi';
import Menucart from './menucart';
import Navbar from './navbar';
import Footer from './Footer';
//in this project dont reuire to add navbar new category valu only add data in menuapi

const uniqueCategory1=[
  ...new Set(
    menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"   //in menu there no category all but use in navbar
 
];

console.log(uniqueCategory1)





const Restorant = () => {
  const[curmenu,menuupdate] =useState(menu); // in starting there left site curmenu is copyb of right side menu but menuupdate is function which can update value of curmenu
//const[store initial value,update function for value]=usestate(pass starting values)
//curmenu store initial menu data we can change this by help of update function
// this is use for change data in menu and store in curmenu


const [uniqueCategory, upuniqueCategory] = useState(uniqueCategory1);
// we cant send data of unidqueCategory1 in navabar component so we should use usestate


  const filterItem = (category) => {


    if (category === "All") {
      menuupdate(menu);
      return;
    }

    const updatedList = menu.filter((curElem) => {
      return curElem.category === category;
    });
  console.log(updatedList);
    menuupdate(updatedList);
  }

   

  return (
    <>
       {/*       this is without module 
     <nav className="navbar">
        <div className="btn-group">
         
             {/* for breakfast 
              <button
                className="btn-group__item"
                onClick={() => filterItem("breakfast")}>
                Breakfast
              </button>

                {/* for evening 
                <button
                className="btn-group__item"
                onClick={() => filterItem("evening")}>
                Evening
              </button>

              {/* for lunch 
              <button
                className="btn-group__item"
                onClick={() => filterItem("lunch")}>
                Lunch
              </button>
              <button
                className="btn-group__item"
                onClick={() => filterItem("dinner")}>
                Dinner
              </button>
              <button
                className="btn-group__item"
                onClick={() => filterItem("All")}>
                All
              </button>


        </div>
        </nav>
      */}
    <Navbar uniqueCategory={uniqueCategory} filterItem={filterItem} />
    <Menucart menuData={curmenu}/> 
    <Footer/>
     
    </>
  )
}

export default Restorant
