var language = document.getElementById("language-lists");
var skills = document.getElementById("skills-list");
var arrowSkills = document.querySelector("#show-hide-skills .arrow");
var arrowLanguages = document.querySelector("#show-hide-languages .arrow");
var x = 0;
var y = 0;

function hideFunction() {
  if (y === 0) {
    if (language && arrowLanguages) {
      language.style.display = "none";
      arrowLanguages.classList.remove("up");
      arrowLanguages.classList.add("down");
    }
    y = 1;
  } else {
    if (language && arrowLanguages) {
      language.style.display = "block";
      arrowLanguages.classList.remove("down");
      arrowLanguages.classList.add("up");
      y = 0;
    }
  }
}

function SkillsTabFunction() {
  if (x === 0) {
    if (skills && arrowSkills) {
      skills.style.display = "none";
      arrowSkills.classList.remove("up");
      arrowSkills.classList.add("down");
      x = 1;
    }
  } else {
    if (skills && arrowSkills) {
      skills.style.display = "block";
      arrowSkills.classList.remove("down");
      arrowSkills.classList.add("up");
      x = 0;
    }
  }
}

function addMoreEducation(): void {
  let number = document.querySelectorAll("#education-input li").length + 1;
  console.log(number);

  let educationInput = document.getElementById("education-input");
  let educationPreview = document.getElementById("education");

  if (educationInput && educationPreview) {
    const educationInputNew = document.createElement(`li`);
    const educationPreviewContainer = document.createElement("li");

    educationPreviewContainer.innerHTML = `<p id="education-year-${number}">Year</p>
                        <p id="education-degree-${number}">Degree</p>
                        <p id="school-degree-${number}">school/college/university</p>`;

    educationInputNew.innerHTML = `<input id="education-year-input-${number}" data-preview="education-year-${number}" placeholder="Year">
            <input id="education-degree-input-${number}" data-preview="education-degree-${number}" placeholder="Degree">
            <input id="school-degree-input-${number}" data-preview="school-degree-${number}" placeholder="School/University">`;

    educationPreview.appendChild(educationPreviewContainer);
    educationInput.appendChild(educationInputNew);

    const inputs = document.querySelectorAll("input[data-preview]");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const previewId = input.getAttribute("data-preview");
        const previewElement = document.getElementById(previewId!);

        if (previewElement) {
          previewElement.innerHTML = (input as HTMLInputElement).value;
        }
      });
    });
  }
}

function addMoreSkills():void{
  let number = document.querySelectorAll("#skills-input li").length + 1;
  let skillsInput = document.getElementById("skills-input")
  let skillsPreview = document.getElementById("skills-list")

  if (skillsInput && skillsPreview) {
    const skillsInputNew = document.createElement('li')
    const skillsPreviewContainer = document.createElement('div')

    skillsInputNew.innerHTML = `<input id="skills-input-${number}" data-preview="skills-${number}" placeholder="Skill">`
    skillsPreviewContainer.innerHTML = `<li id="skills-${number}"></li>`
    
    skillsInput.appendChild(skillsInputNew)
    skillsPreview.appendChild(skillsPreviewContainer)

    
  const inputs = skillsInputNew.querySelectorAll("input[data-preview]");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const previewId = input.getAttribute("data-preview");
        const previewElement = document.getElementById(previewId!);

        if (previewElement) {
          previewElement.innerHTML = (input as HTMLInputElement).value;
        }
      });
    })
  }

}


function addMoreLanguage():void{
  let number = document.querySelectorAll("#language-input li").length + 1;
  let languageInput = document.getElementById('language-input')
  let languagePreview = document.getElementById('language-lists')

  if (languageInput && languagePreview) {
    const languageInputNew = document.createElement('li')
    const languagePreviewContainer = document.createElement('li')

    languageInputNew.innerHTML = `<input id="language-input-${number}" data-preview="language-${number}" placeholder="Language">`
    languagePreviewContainer.innerHTML = `<li id="language-${number}"></li>`

    languageInput.appendChild(languageInputNew)
    languagePreview.appendChild(languagePreviewContainer)

    const inputs = languageInputNew.querySelectorAll('input[data-preview]')

    inputs.forEach((input)=>{
      input.addEventListener('input', ()=>{
        const previewId = input.getAttribute('data-preview')
        const previewElement = document.getElementById(previewId!)

       if(previewElement){
        previewElement.innerHTML = (input as HTMLInputElement).value
       }
      })
    })
}
}

function addMoreExperience(): void {
  let number = document.querySelectorAll("#experience-input li").length + 1;
  let experienceInput = document.getElementById("experience-input");
  let experiencePreview = document.getElementById("experience");

  if (experienceInput && experiencePreview) {
    const experienceInputNew = document.createElement(`li`);
    const experiencePreviewContainer = document.createElement("li");

    experiencePreviewContainer.innerHTML = `<h3 id="position-${number}">XYZ</h3>
                        <h4 id="company-${number}">ABC company</h4>
                        <p id="duration-${number}">January 2000 - Present</p>
                        <p id="about-expereince-${number}">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas excepturi reiciendis necessitatibus eius ducimus commodi sint optio, itaque dolores? Animi magnam ipsum sit laboriosam corporis laudantium nostrum commodi, accusantium deserunt.
                        </p>`;

    experienceInputNew.innerHTML = `<input id="position-input-${number}" data-preview="position-${number}" placeholder="Position">
            <input id="company-input-${number}" data-preview="company-${number}" placeholder="Company">
            <input id="duration-input-${number}" data-preview="duration-${number}" placeholder="Duration">
            <input id="about-expereince-input-${number}" data-preview="about-expereince-${number}" placeholder="What you did">`;

    experiencePreview.appendChild(experiencePreviewContainer);
    experienceInput.appendChild(experienceInputNew);

    const inputs = document.querySelectorAll("input[data-preview]");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const previewId = input.getAttribute("data-preview");
        const previewElement = document.getElementById(previewId!);

        if (previewElement) {
          previewElement.innerHTML = (input as HTMLInputElement).value;
        }
      });
    });
  }
}

let imageInput = document.getElementById('image') as HTMLInputElement
let profileImage = document.getElementById('profile-image') as HTMLInputElement

imageInput.addEventListener("change", () => {
  
  if (imageInput.files) {
    profileImage.src = URL.createObjectURL(imageInput.files[0])
  }
  }
)


const inputs = document.querySelectorAll("input[data-preview]");

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const previewId = input.getAttribute('data-preview');
    const previewElement = document.getElementById(previewId!);

    if (previewElement) {
      previewElement.innerHTML = (input as HTMLInputElement).value;
    }
  });
});


const addressInput = document.getElementById('address-input')
const aboutInput = document.getElementById('about-input')




if (aboutInput) {
  aboutInput.addEventListener('input', () => {
    const scrollWidthAbout = aboutInput.scrollWidth
        if (scrollWidthAbout>aboutInput.offsetWidth) {
        aboutInput.style.width = `${scrollWidthAbout}px`
}
  })
}



if (addressInput) {
  
  addressInput.addEventListener('input', () => {
    const scrollWidth = addressInput.scrollWidth
   
    
    if (scrollWidth>addressInput.offsetWidth) {
      addressInput.style.width = `${scrollWidth}px`
    }
  })
}





