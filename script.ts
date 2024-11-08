function addNewWeField(): void {
    const container = document.getElementById('wexp-container') as HTMLDivElement;

    const newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group'); 

    const newTextarea = document.createElement('textarea');
    newTextarea.classList.add('weField'); 
    newTextarea.name = 'wexp';
    newTextarea.placeholder = 'Enter Your Experience';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");

    const newLabel = document.createElement('label');
    newLabel.textContent = 'Work Experience';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);

    const addButton = container.querySelector('.btn')!;
    container.insertBefore(newFieldDiv, addButton);
}


function addNewAqField(): void {
    const container = document.getElementById('aq-container') as HTMLDivElement;

    const newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group'); 

    const newTextarea = document.createElement('textarea');
    newTextarea.classList.add('aqField');
    newTextarea.name = 'academic';
    newTextarea.placeholder = 'Enter Your Qualification';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");

    const newLabel = document.createElement('label');
    newLabel.textContent = 'Academic Qualification';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);

    const addButton = container.querySelector('.btn')!;
    container.insertBefore(newFieldDiv, addButton);
}

function addNewSkField(): void {
    const container = document.getElementById('sk-container') as HTMLDivElement;

    const newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group'); 

    const newTextarea = document.createElement('textarea');
    newTextarea.classList.add('skField');
    newTextarea.name = 'skills';
    newTextarea.placeholder = 'Enter Your Skills';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "2");

    const newLabel = document.createElement('label');
    newLabel.textContent = 'Skills';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);

    const addButton = container.querySelector('.btn')!;
    container.insertBefore(newFieldDiv, addButton);
}

document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    resumeForm.addEventListener("submit", generateResume);
});


function generateResume(event: Event): void {
    event.preventDefault();

    const resumeForm = document.getElementById("resumeForm") as HTMLDivElement
    const resumeTemplate = document.getElementById("container") as HTMLDivElement
    const Fname: string = (document.getElementById("Fname") as HTMLInputElement).value;
    const Lname: string = (document.getElementById("Lname") as HTMLInputElement).value;
    const contact: string = (document.getElementById("contact") as HTMLInputElement).value;
    const address: string = (document.getElementById("address") as HTMLTextAreaElement).value;
    const facebook: string = (document.getElementById("facebook") as HTMLInputElement).value;
    const linkedin: string = (document.getElementById("linkedin") as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const objective: string = (document.getElementById("objective") as HTMLTextAreaElement).value;

    
    (document.getElementById("generatedFName") as HTMLHeadingElement).innerHTML = Fname;
    (document.getElementById("generatedLName") as HTMLHeadingElement).innerHTML = Lname;
    (document.getElementById("f-name") as HTMLHeadingElement).innerHTML = Fname;
    (document.getElementById("l-name") as HTMLHeadingElement).innerHTML = Lname;
    (document.getElementById("contact-no") as HTMLParagraphElement).innerHTML = contact;
    (document.getElementById("adrs") as HTMLParagraphElement).innerHTML = address;
    (document.getElementById("fb") as HTMLAnchorElement).innerHTML = facebook;
    (document.getElementById("g-mail") as HTMLAnchorElement).innerHTML = email;
    (document.getElementById("objective-b") as HTMLParagraphElement).innerHTML = objective;

    resumeForm.style.display = "none";
    resumeTemplate.style.display = "grid";

    // Work Experience Fields
    const experiences = document.getElementsByClassName("weField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let experienceStr = "";
    for (let i = 0; i < experiences.length; i++) {
        const textarea = experiences[i];
        experienceStr += `<li>${textarea.value}</li>`;
    }
    document.getElementById("work-li")!.innerHTML = experienceStr;

    // Academic Qualifications Fields
    const qualifications = document.getElementsByClassName("aqField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let academicStr = "";
    for (let i = 0; i < qualifications.length; i++) {
        const textarea = qualifications[i];
        academicStr += `<li>${textarea.value}</li>`;
    }
    document.getElementById("aq-li")!.innerHTML = academicStr;

    // Skills Fields
    const skills = document.getElementsByClassName("skField") as HTMLCollectionOf<HTMLTextAreaElement>;
    let skillsStr = "";
    for (let i = 0; i < skills.length; i++) {
        const textarea = skills[i];
        skillsStr += `<li>${textarea.value}</li>`;
    }
    document.getElementById("sk-li")!.innerHTML = skillsStr;


    const fileInput = document.getElementById("profile") as HTMLInputElement;
const profileImage = document.getElementById("Pimg") as HTMLImageElement


if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    
        const reader = new FileReader();

        reader.onloadend = () => {
            if (reader.result) {
                profileImage.src = reader.result as string;
            }
        };

        reader.readAsDataURL(file); 
    
}


const linkedDiv = document.getElementById("linked") as HTMLDivElement;

if (linkedin) {
    linkedDiv.style.display = "flex";
    (document.getElementById("link") as HTMLAnchorElement).innerHTML = linkedin
    } else {
      linkedDiv.style.display = "none"; 
    }
  };



