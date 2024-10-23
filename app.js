const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })


    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    const heroImage = document.getElementById('hero-image');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode');

        // Change image based on the theme
        if (element.classList.contains('light-mode')) {
            heroImage.src = 'img/hero5 (1).png'; // Set light mode image
        } else {
            heroImage.src = 'img/hero4 (1).png'; // Set dark mode image
        }
    })
}

PageTransitions();


const titles = [
    "Software Developer",
    "UI/UX Engineer",
    "Business Analyst",
    "AI/ML Engineer"
];

let titleIndex = 0;
let letterIndex = 0;
const titleElement = document.getElementById("job-title");
const cursor = document.createElement("span");

cursor.className = "typing-cursor";
titleElement.appendChild(cursor);

function typeTitle() {
    if (letterIndex < titles[titleIndex].length) {
        titleElement.textContent += titles[titleIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeTitle, 100); // Typing speed
    } else {
        // After typing, remove the cursor and start deleting
        setTimeout(deleteTitle, 1000); // Wait before starting to delete
    }
}

function deleteTitle() {
    if (letterIndex > 0) {
        titleElement.textContent = titles[titleIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteTitle, 50); // Deleting speed
    } else {
        // Move to the next title and start typing again
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeTitle, 50); // Wait before typing the next title
    }
}

// Start the typing animation
typeTitle();