body {
font-family: Arial, sans-serif;
max-width: 700px;
margin: auto;
padding: 20px;
background: #f7f7f7;
}

h1 {
text-align: center;
}

.tool {
background: white;
border: 1px solid #ddd;
padding: 20px;
margin-bottom: 20px;
border-radius: 6px;
}

textarea {
width: 100%;
height: 80px;
margin-top: 10px;
}

input {
width: 100%;
padding: 8px;
margin-top: 10px;
}

button {
margin-top: 10px;
padding: 10px 16px;
background: #0077ff;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background: #005fcc;
}
function generateSummary(){

let role = document.getElementById("summaryRole").value;

document.getElementById("summaryResult").innerText =
"Results-driven " + role + " with a proven ability to deliver measurable impact, collaborate with teams, and drive strategic initiatives.";
}

function generateHeadline(){

let role = document.getElementById("headlineRole").value;

document.getElementById("headlineResult").innerText =
role + " | Helping organisations achieve measurable results | Strategy • Growth • Innovation";
}

function generateSalaryEmail(){

let role = document.getElementById("salaryRole").value;

document.getElementById("salaryResult").innerText =
"Thank you for offering me the " + role + " position. I’m very excited about the opportunity. Based on my experience and the responsibilities of the role, I was hoping we might discuss adjusting the salary to better reflect the value I can bring.";
}

function generateResignation(){

let role = document.getElementById("resignationRole").value;

document.getElementById("resignationResult").innerText =
"Please accept this letter as formal notice of my resignation from my role as " + role + ". I appreciate the opportunities and experience gained during my time with the company.";
}

function generateThankYou(){

let company = document.getElementById("interviewCompany").value;

document.getElementById("thankYouResult").innerText =
"Thank you for taking the time to meet with me about the opportunity at " + company + ". I enjoyed learning more about the role and the team and remain very enthusiastic about the possibility of contributing.";
}

function generateCareerChange(){

let career = document.getElementById("careerChange").value;

document.getElementById("careerChangeResult").innerText =
"I’m transitioning into " + career + " because I’m passionate about applying my skills in new ways and creating meaningful impact in this field.";
}

function generateSkills(){

let role = document.getElementById("skillsRole").value;

document.getElementById("skillsResult").innerText =
"Key skills for a " + role + " include communication, analytical thinking, problem solving, collaboration, and the ability to adapt quickly.";
}
function generateObjective(){

let role = document.getElementById("objectiveRole").value;

document.getElementById("objectiveResult").innerText =
"Motivated professional seeking a " + role +
" role where I can contribute strong problem-solving skills and deliver measurable results.";
}

function generateBio(){

let role = document.getElementById("bioRole").value;

document.getElementById("bioResult").innerText =
role + " passionate about delivering impactful results, collaborating with teams, and continuously improving performance.";
}

function generateStrength(){

let role = document.getElementById("strengthRole").value;

document.getElementById("strengthResult").innerText =
"A key strength I bring as a " + role +
" is the ability to solve complex problems and consistently deliver high-quality results under pressure.";
}

function generateWeakness(){

let role = document.getElementById("weaknessRole").value;

document.getElementById("weaknessResult").innerText =
"One area I’ve worked to improve is taking on too many responsibilities. I’ve learned to prioritise tasks and delegate when appropriate.";
}

function generateEmail(){

let topic = document.getElementById("emailTopic").value;

document.getElementById("emailResult").innerText =
"I hope you're well. I’m writing regarding " + topic +
" and wanted to follow up to ensure everything is progressing smoothly.";
}
