import {AutoComplete} from "antd"
import {  useState } from "react";
import { useNavigate } from "react-router-dom";


function AddSkills() {
  
    const [skill, setSkill] = useState([]);
    let [onSelect , setOnSelect]= useState("")
   let navigate = useNavigate()


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

  
const addNewSkill = (e) => {
    e.preventDefault()
  var array = [...skill];
  array.push(onSelect);
    array.join(" , ")
  setSkill(array);
//   setOnSelect("");
  console.log(array);

};
let save = (e)=>{
    e.preventDefault();
    const skillList =  localStorage.setItem("skillList" , JSON.stringify(skill))
    console.log(skillList);
    

}
  return (
    <div className="skills-page">
        <h3> Tell us about your Personal developements skills</h3>
      {/* ----------------auto complete form ------------ */}
      <div className="skills-info">
        
        <label for="exampleFormControlTextarea1" class="form-label"> Add Skills</label>
        <div>
            <AutoComplete id="autoComplete"
                style={{width: "80%"}}  
                placeholder="add skills here..."
                options={options}
                onClear={true}
                onSelect={ (value)=>{ 
                    console.log( value);
                    setOnSelect(value);      
                }} 
                
            />
              <button type="button" class="btn btn-primary"onClick={addNewSkill}>
                 Add </button>
        </div> 

            <div style={ {border : "1px solid transparent" , marginTop : "10px" , padding: "30px"}}>
                  { skill.map( (val,i) =>{
                    return(
                      <span> {val + " , "}</span>
                    )  
                  })
                  }
            </div>
            
          

        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" onClick={save}>Save</button>
        </div>
        
        <div class="d-flex justify-content-between" id="options">
            <button type="button" class="btn btn-outline-info" onClick={()=>{navigate("/heading")}}>BACK</button> 
            <button type="button" class="btn btn-warning" onClick={()=>{navigate("/education")}}> NEXT : Education</button> 
        </div>
    </div>
  );
}

export default AddSkills;
