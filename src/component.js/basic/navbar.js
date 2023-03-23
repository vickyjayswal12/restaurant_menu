import React from 'react'

const Navbar = ({uniqueCategory,filterItem}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueCategory.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar
