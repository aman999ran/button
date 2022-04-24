

function Crd(props){
    console.log(props)
    const {nam,qual,gender,imageurl} = props
    return (
  <div>
      <div className="left">
          <img src={imageurl} alt="img"/>
      </div>
      <div className="left">
       <p>{nam}</p>
       <p>{qual}</p>
       <p>{gender}</p>
      </div>
  </div>
    )
}
export default Crd
