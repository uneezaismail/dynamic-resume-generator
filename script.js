function addNewWeField() {
    var container = document.getElementById('wexp-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('weField');
    newTextarea.name = 'wexp';
    newTextarea.placeholder = 'Enter Your Experience';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Work Experience';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
function addNewAqField() {
    var container = document.getElementById('aq-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('aqField');
    newTextarea.name = 'academic';
    newTextarea.placeholder = 'Enter Your Qualification';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Academic Qualification';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
function addNewSkField() {
    var container = document.getElementById('sk-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('skField');
    newTextarea.name = 'skills';
    newTextarea.placeholder = 'Enter Your Skills';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "2");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Skills';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    resumeForm.addEventListener("submit", generateResume);
});
function generateResume(event) {
    event.preventDefault();
    var resumeForm = document.getElementById("resumeForm");
    var resumeTemplate = document.getElementById("container");
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var facebook = document.getElementById("facebook").value;
    var linkedin = document.getElementById("linkedin").value;
    var email = document.getElementById("email").value;
    var objective = document.getElementById("objective").value;
    // Inject values into the resume template
    document.getElementById("generatedFName").innerHTML = Fname;
    document.getElementById("generatedLName").innerHTML = Lname;
    document.getElementById("f-name").innerHTML = Fname;
    document.getElementById("l-name").innerHTML = Lname;
    document.getElementById("contact-no").innerHTML = contact;
    document.getElementById("adrs").innerHTML = address;
    document.getElementById("fb").innerHTML = facebook;
    // (document.getElementById("link") as HTMLAnchorElement).innerHTML = linkedin;
    document.getElementById("g-mail").innerHTML = email;
    document.getElementById("objective-b").innerHTML = objective;
    resumeForm.style.display = "none";
    resumeTemplate.style.display = "grid";
    // Work Experience Fields
    var experiences = document.getElementsByClassName("weField");
    var experienceStr = "";
    for (var i = 0; i < experiences.length; i++) {
        var textarea = experiences[i];
        experienceStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("work-li").innerHTML = experienceStr;
    // Academic Qualifications Fields
    var qualifications = document.getElementsByClassName("aqField");
    var academicStr = "";
    for (var i = 0; i < qualifications.length; i++) {
        var textarea = qualifications[i];
        academicStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("aq-li").innerHTML = academicStr;
    // Skills Fields
    var skills = document.getElementsByClassName("skField");
    var skillsStr = "";
    for (var i = 0; i < skills.length; i++) {
        var textarea = skills[i];
        skillsStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("sk-li").innerHTML = skillsStr;
    var fileInput = document.getElementById("profile");
    var profileImage = document.getElementById("Pimg");
    if (fileInput.files && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            if (reader_1.result) {
                profileImage.src = reader_1.result;
            }
        };
        reader_1.readAsDataURL(file);
    }
    //checkin for linkedin
    // const linkedinInput = document.getElementById("linkedin") as HTMLInputElement;
    // const lnIcon = document.getElementById("linked");
    // if (linkedinInput && lnIcon) {
    // linkedinInput.addEventListener("input", () => {
    //   if (linkedinInput.value) {
    //     lnIcon.style.display = "inline"; 
    //   } else {
    //     lnIcon.style.display = "none"; 
    //   }
    // });
    // }
    var linkedDiv = document.getElementById("linked");
    if (linkedin) {
        linkedDiv.style.display = "flex";
        document.getElementById("link").innerHTML = linkedin;
    }
    else {
        linkedDiv.style.display = "none"; // Hide the icon and link container
    }
}
;
