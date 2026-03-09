function improveBullet() {
  let text = document.getElementById("resumeInput").value;
  document.getElementById("resumeResult").innerText =
    "Improved bullet: Demonstrated ability to " + text +
    " while delivering measurable results and contributing to team success.";
}

function generateCover() {
  let job = document.getElementById("jobTitle").value;
  document.getElementById("coverResult").innerText =
    "I am excited to apply for the " + job +
    " role. My experience and ability to deliver strong results make me confident I would contribute positively to your team.";
}

function generateAnswer() {
  let question = document.getElementById("question").value;
  document.getElementById("answerResult").innerText =
    "A good way to answer '" + question +
    "' is to describe the situation, the actions you took, and the measurable results you achieved.";
}

function generateSummary() {
  let role = document.getElementById("summaryRole").value;
  document.getElementById("summaryResult").innerText =
    "Results-driven " + role +
    " with a proven ability to deliver measurable impact, collaborate with teams, and drive strategic initiatives.";
}

function generateHeadline() {
  let role = document.getElementById("headlineRole").value;
  document.getElementById("headlineResult").innerText =
    role + " | Helping organisations achieve measurable results | Strategy • Growth • Innovation";
}

function generateSalaryEmail() {
  let role = document.getElementById("salaryRole").value;
  document.getElementById("salaryResult").innerText =
    "Thank you for offering me the " + role +
    " position. I’m very excited about the opportunity. Based on my experience and the responsibilities of the role, I was hoping we might discuss adjusting the salary to better reflect the value I can bring.";
}

function generateResignation() {
  let role = document.getElementById("resignationRole").value;
  document.getElementById("resignationResult").innerText =
    "Please accept this letter as formal notice of my resignation from my role as " + role +
    ". I appreciate the opportunities and experience gained during my time with the company.";
}

function generateThankYou() {
  let company = document.getElementById("interviewCompany").value;
  document.getElementById("thankYouResult").innerText =
    "Thank you for taking the time to meet with me about the opportunity at " + company +
    ". I enjoyed learning more about the role and the team and remain very enthusiastic about the possibility of contributing.";
}

function generateCareerChange() {
  let career = document.getElementById("careerChange").value;
  document.getElementById("careerChangeResult").innerText =
    "I’m transitioning into " + career +
    " because I’m passionate about applying my skills in new ways and creating meaningful impact in this field.";
}

function generateSkills() {
  let role = document.getElementById("skillsRole").value;
  document.getElementById("skillsResult").innerText =
    "Key skills for a " + role +
    " include communication, analytical thinking, problem solving, collaboration, and the ability to adapt quickly.";
}

function generateObjective() {
  let role = document.getElementById("objectiveRole").value;
  document.getElementById("objectiveResult").innerText =
    "Motivated professional seeking a " + role +
    " role where I can contribute strong problem-solving skills and deliver measurable results.";
}

function generateBio() {
  let role = document.getElementById("bioRole").value;
  document.getElementById("bioResult").innerText =
    role + " passionate about delivering impactful results, collaborating with teams, and continuously improving performance.";
}

function generateStrength() {
  let role = document.getElementById("strengthRole").value;
  document.getElementById("strengthResult").innerText =
    "A key strength I bring as a " + role +
    " is the ability to solve complex problems and consistently deliver high-quality results under pressure.";
}

function generateWeakness() {
  let role = document.getElementById("weaknessRole").value;
  document.getElementById("weaknessResult").innerText =
    "One area I’ve worked to improve is taking on too many responsibilities. I’ve learned to prioritise tasks and delegate when appropriate.";
}

function generateEmail() {
  let topic = document.getElementById("emailTopic").value;
  document.getElementById("emailResult").innerText =
    "I hope you're well. I’m writing regarding " + topic +
    " and wanted to follow up to ensure everything is progressing smoothly.";
}
