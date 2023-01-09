import React from 'react'
import img from "Images/searchIcon.svg";

const Search = (props) => {
  return (
    <div className="position-relative ">
    <input
      type="text"
      placeholder={props.placeholder}
      className=" shadow-sm"
    />
    <span className="position-absolute search-btn">
      <a href="#" className="search-btn">
        {" "}
        <img src={img} alt="img" />{" "}
      </a>
    </span>
  </div>
  )
}

export default Search