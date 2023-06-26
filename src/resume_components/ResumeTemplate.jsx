import { useEffect, useState } from "react";
// import ToasterUi from 'toaster-ui';
const ResumeTemplate = () => {
	 let [userDetails , setUserDetails]= useState(null)
		let [skills, setSkills] = useState(null);
		let skillsArr = [];
		let i = skillsArr.length
	useEffect( ()=>{
		  let userDetails= JSON.parse(localStorage.getItem("userdetails"))
		 setUserDetails(userDetails)

		 let skills = JSON.parse(localStorage.getItem("skillList"))
		 skillsArr.push(skills)
		 setSkills(skills);
		
		 console.log(skillsArr);
	},[])
	return (  
		<div className="resume-app">
		<div id="resume-wrapper" className="shadow p-3 mb-5 bg-body-tertiary rounded" >
	
			{	userDetails &&
				<div id="introduction">
						<h1> {userDetails.firstName} {userDetails.lastName}</h1>
						<p> {userDetails.City} , {userDetails.Country}  {userDetails.ZipCode}</p>
						<p> + 91-{userDetails.PhoneNumber}  <i> {userDetails.EmailAddress} </i> </p>
						
						
				</div>
			}
			<hr/>
			{
			userDetails && 
			<div style={{textAlign: "justify"}} id="profile-info">
			
				<h3>PROFESSIONAL SUMMARY</h3>
				<p>{userDetails.ProfileSummary}</p>

				<h3>SKILLS</h3> 
				<ul id="display-lists">
					{
						skills.map((v,i) =>{
							return(
								<li> {v}</li>
							)
						})
					}
					
				</ul>
			</div>
			}		
			
			{userDetails &&
				<div id="proExp-info">
					<h3> WORK HISTORY</h3>
					{
						userDetails.experiences.map( (exp) =>{
							return (
									<div>
										<h5> {exp.designation} | {exp.jobStart} to {exp.jobEnd}</h5>
										<h6>{exp.companyName} - {exp.jobCity},{exp.jobCountry}</h6>
										<p> {exp.jobDescription}</p>
									</div>
									)
						})
					}
		
				</div>
		
			}
			{
				userDetails && 
				<div id="proEdu-body">
					<h3> EDUCATION </h3>
					{
						userDetails.education.map( (edu)=>{
							return (
								<div>
										<span> <h6> {edu.institute} - {edu.eduCity}, {edu.eduCountry} </h6></span>
										<p>{edu.degree} | {edu.endYear} </p>  
										<p> {edu.otherActivities}</p>		
								</div>
							)
						})
					}						
				</div>
			}
						
			
			
		</div>
	</div>
	);
}
 
export default ResumeTemplate;