// import '../styles/Skills.css'
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Skills = () => {

    let [searchword, setSearchword] = useState("");
    let [skills , setSkills] = useState([]);


   let skillsSetBox = useRef();

    useEffect(()=>{
        fetch("http://localhost:1000/skills")
        .then((res)=>{
            return res.json()
        })
        .then((data) =>{
            console.log(data);

            // let names = data.map((m)=>{return {moviename: m.moviename ,id : m.id}});
            // let filteredNames = names.filter( (movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
            
            let names = data.map((m)=>{return m.skill});
            let filteredNames = names.filter( (name)=>{
                return name.toLowerCase().includes(searchword.toLowerCase())
            })
            setSkills(filteredNames);
        
            
        })
       
    },[searchword])
    return ( 
        <div className="skills-page">
            <h3> Tell us about your Personal developements skills</h3>
            {skills &&
                   <h1> {skills.skill}</h1>

            }
            <div className="skills-info">
                <form >
                    <label for="exampleFormControlTextarea1" class="form-label">
                            Add Skills</label>
                    <input class="form-control me-2" type="search" placeholder="type skills"
                     aria-label="Search" value={searchword} onChange={(e) =>{ searchword(e.target.value);}}/>
                   
                    {/* <div class="mb-3" id="info">
                        <textarea class="form-control" id="textArea" 
                            rows="2" maxLength={6} ref={skillsSetBox} ></textarea>
                    </div> */}
                       
                    {   searchword != "" &&
                    <div className="suggestion">
                        <ul>
                            {
                                skills.map((sk)=>{ 
                                    return (      
                                            <li>{sk.skill}</li>
                                        )
                                        })
                            }
                        </ul>

                    </div>
                } 
                    
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Save</button>
                    </div>
                    
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