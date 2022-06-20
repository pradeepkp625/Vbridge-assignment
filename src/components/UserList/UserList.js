import { useContext } from "react"
import ListContext from "../ContextApi/ListContext"


export default function UserList(){
    const context = useContext(ListContext)
    return(
        context.userData.length>0?
     <>
       <div className="list__wrapper">
       { context.userData?.map((item)=> 
        <div className="list__container" key={item.id}>
            <div className="list__avatar">
               <img src="https://cdn-icons-png.flaticon.com/512/3095/3095221.png" alt="avatar"/>
            </div>
            <div className="list__details">
                <div className="job__title">
                  {item.jobTitle}
                </div>
                <p className="list__description">
                   {item.jobDesc}
                </p>
                <div className="list__skilss">
                    {item.jobSkills.map((item)=>
                    <span className="list__skill-bubles">
                        {item.title}
                    </span>
                    )}
                </div>
            </div>
        </div>
         )}
       </div>
    </>
    :
    <div className="not__found">
        <br />
      <center>Not found any Job descriptions please add and check..!</center>  
    </div>

    )
}