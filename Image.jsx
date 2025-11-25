import { Fragment } from "react";

const Image = (props,index) => {
    console.log(props)
  return (
        <>
        <Fragment key={index}>
    <div id="parent">
    <h1 className="child1">{props.data.image}</h1>   
  <div className="new"> 
    <h1 className="child2">{props.data.title}</h1>
   <h1 className="child3">{props.data.name}</h1>
   <button className="child4">{props.data.btntext}</button>
   </div>
   <hr />
   </div>
    </Fragment>
        </>
 
  )
}

export default Image
