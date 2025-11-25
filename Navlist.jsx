const Navlist = (props) => {
  return (
    <>
    {
        props.data.map((ele,index)=>{
            return  <div key={index}>{ele}</div>
        })
    }
    </>
  )
}

export default Navlist
