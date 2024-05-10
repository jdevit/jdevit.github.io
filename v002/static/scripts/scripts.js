


const toggleSection = (id) => {

    let sections = document.getElementsByTagName('section');
    let navButtons = document.getElementsByClassName('nav-select');

    // Toggle old active
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.classList.contains('active-section')) {
            section.classList.toggle('active-section');
            section.classList.toggle('hidden');
            let navBtn = navButtons[i];
            navBtn.classList.toggle('active');
            break;
        }
    }

    // Toggle new active section
    let newActiveSection = document.getElementById(id);
    newActiveSection.classList.toggle('hidden');
    newActiveSection.classList.toggle('active-section');
    // Toggle new active nav
    for (let i = 0; i < navButtons.length; i++) {
        let navBtn = navButtons[i];
        if (navBtn.innerHTML == id) {
            navBtn.classList.toggle('active');
            break;
        }
    }
    
}

