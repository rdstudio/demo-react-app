import React from "react"

const Header = () => {

  // This is using a style variable
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  }


  return(
    <header style={ headerStyle }>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple to do app</h1>
      <p style={{ fontsize: "19px" }}>Please add todo items thru the input field</p>
    </header>
  )
}

export default Header
