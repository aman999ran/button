
import Crd from "./Card"

const data ={
    nam :"aman",
    qual:"ug",
    gender : "male",
    imageurl : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"}
function Edetails(){
   
    return (
       <>
          <Crd  {...data}/>
          </>    
          )


}

export default Edetails;