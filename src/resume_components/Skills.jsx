
import { useState } from "react";
import { Link } from "react-router-dom";
import {AutoComplete} from "antd"

const Skills = () => {
    const [skill, setSkill] = useState([]);
let [onSelect , setOnSelect]= useState("");
//    let textArea = useRef();

   const options = [
    {label : "HTML",value:"HTML"},
    {label :"CSS",value:"CSS"},
    {label :"JavaScript", value:"JavaScript"},
    {label :"ReactJS", value:"React-JS"},
    {label :"Node.js", value:"Node.js"},
    {label :"Python", value:"Python"},
    {label :"PHP", value:"PHP"},
    {label :"C++", value:"C++"},
    {label :"MySql", value:"MySql"},
    {label :"MongoDB", value:"MongoDB"},
    {label :"Hibernate", value:"Hibernate"},
    {label :"JAVA", value:"Java"},
    {label :"Springs", value:"Springs"},
    {label :"Springs-boot", value:"Springs-Boot"},
    {label :"UX-design", value:"UX-Design"},
    {label :"UI/UX designing", value:"UI/UX Design"}

  ]

    // const textAreaLimit = () =>{
    //     if( textArea.current.value.length >= 50)
    //     {
    //         alert(" Your have reached limitations of characters")            
    //     }      
    // }




const addNewSkill = () => {
  const copyCart = [...skill];
  copyCart.push(onSelect);
  setSkill(copyCart);
  setOnSelect("");
};
    return ( 
        <div className="skills-page">
            <h3> Tell us about your Personal developements skills</h3>
           
            <div className="skills-info">
            <form >
                <label for="exampleFormControlTextarea1" class="form-label"> Add Skills</label>
                    <AutoComplete style={{width: "500px"}} placeholder="Add skills here" options={options}
                        onSelect={ (value)=>{ console.log("selected value " + value);
                        setOnSelect(value);}}  />
                    <button onClick={addNewSkill}>Add </button>
                    <ul>
                    {
                    skill.map((val,i) => {
                         return <p> {val}</p>;
                                                })
                    } 
                    </ul>
                    
                {/* <div class="mb-3" id="info">
                    <textarea class="form-control" id="textArea" 
                        rows="2" maxLength={50} ref={textArea} onChange={textAreaLimit} ></textarea>
                </div> */}
                    {/* <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Save</button>
                    </div> */}
                    
                </form>

            <div class="d-flex justify-content-between" id="options">
                    <Link to='/heading' ><button type="button" class="btn btn-outline-info">BACK</button> </Link> 
                    <Link to='/education'><button type="button" class="btn btn-warning"> NEXT : Education</button> </Link>
            </div>
        </div>
        </div>
     );
}
 
export default Skills;