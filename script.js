const translations = {
    en: {
        navbar: {
            about: "About Me",
            projects: "Projects",
            contact: "Contact"
        },
        header: "Full-stack Web Developer and more",
        introduction: {
            greeting: "Welcome to my website!",
            name: "My name is István Szoboszlai, and I'm a programmer with 4 years of experience in development.",
            expertise: "Over the years, I have gained expertise in:",
            expertiseList: [
                "Designing simple websites",
                "Developing complex enterprise management systems for factories",
                "Creating applications for tablets and other platforms",
                "Designing and managing databases to ensure efficient and reliable system performance"
            ],
            perseverance: "Perseverance is essential in my work: if a problem arises, I keep looking for a solution until it fully meets the user's requirements.",
            goal: "My goal is to create solutions that excel not only technically but also from a user perspective.",
            callToAction: "If you're looking for a reliable and dedicated developer, feel free to reach out to me!"
        },
        about: "",
        projects: "Projects",
        contact: "If you would like to get in touch, please use the form below or reach out via email or phone:",
        form: {
            name: "Name:",
            email: "Email:",
            message: "Message:",
            send: "Send"
        },
        projectDescriptions: [
            "A web application that simplifies task management and increases productivity. Built with React and Node.js.",
            "An e-commerce platform that offers seamless shopping experiences with integrated payment solutions. Developed using Django and Vue.js.",
            "A mobile-friendly website for a local restaurant with an interactive menu and online booking system. Built with HTML, CSS, and JavaScript."
        ],
        tools: {
            title: "Tools I Use",
            description: "Throughout my career, I have worked with a variety of tools and technologies that help me deliver high-quality software solutions. Here are some of the key tools I use:",
            list: [
                "Angular",
                ".NET",
                "MSSQL",
                "Oracle",
                "Strapi",
                "Next.js",
                "Ionic Framework for Angular"
            ]
        }
    },
    hu: {
        navbar: {
            about: "Rólam",
            projects: "Projektek",
            contact: "Kapcsolat"
        },
        header: "Full-stack webfejlesztő és még több",
        introduction: {
            greeting: "Üdvözöllek az oldalamon!",
            name: "Szoboszlai István vagyok, programozó, és immár 4 éve foglalkozom fejlesztéssel.",
            expertise: "Az évek során tapasztalatot szereztem:",
            expertiseList: [
                "Egyszerű weboldalak tervezésében",
                "Komplex vállalatirányítási rendszerek fejlesztésében gyárak számára",
                "Tabletes és más platformokon futó applikációk létrehozásában",
                "Adatbázisok tervezésében és kezelésében, amelyek biztosítják a rendszerek hatékony és megbízható működését"
            ],
            perseverance: "A munkám során elengedhetetlen számomra a kitartás: ha egy probléma merül fel, addig keresem a megoldást, amíg az a felhasználó igényeinek teljes mértékben megfelel.",
            goal: "Célom, hogy olyan megoldásokat hozzak létre, amelyek nemcsak technikailag, hanem felhasználói szempontból is kiválóan működnek.",
            callToAction: "Ha egy megbízható és elkötelezett fejlesztőt keresel, keress meg bátran!"
        },
        about: "",
        projects: "Projektek",
        contact: "Ha szeretne kapcsolatba lépni velem, kérjük, használja az alábbi űrlapot, vagy lépjen kapcsolatba e-mailben vagy telefonon:",
        form: {
            name: "Név:",
            email: "Email:",
            message: "Üzenet:",
            send: "Küldés"
        },
        projectDescriptions: [
            "Egy webalkalmazás, amely egyszerűsíti a feladatkezelést és növeli a termelékenységet. React és Node.js segítségével készült.",
            "Egy e-kereskedelmi platform, amely zökkenőmentes vásárlási élményeket kínál integrált fizetési megoldásokkal. Django és Vue.js használatával fejlesztve.",
            "Egy mobilbarát weboldal egy helyi étterem számára, amely interaktív menüvel és online foglalási rendszerrel rendelkezik. HTML, CSS és JavaScript segítségével készült."
        ],
        tools: {
            title: "Eszközök, amelyeket használok",
            description: "Pályafutásom során számos eszközzel és technológiával dolgoztam, amelyek segítenek magas színvonalú szoftvermegoldások szállításában. Íme néhány kulcsfontosságú eszköz, amelyet használok:",
            list: [
                "Angular",
                ".NET",
                "MSSQL",
                "Oracle",
                "Strapi",
                "Next.js",
                "Ionic keretrendszer Angularhoz"
            ]
        }
    }
};

function updateLanguage(language) {
    document.querySelector('nav ul li a[href="#about"]').textContent = translations[language].navbar.about;
    document.querySelector('nav ul li a[href="#projects"]').textContent = translations[language].navbar.projects;
    document.querySelector('nav ul li a[href="#contact"]').textContent = translations[language].navbar.contact;
    document.querySelector('header p').textContent = translations[language].header;
    document.querySelector('#about h2').textContent = translations[language].navbar.about;
    const introductionElements = document.querySelectorAll('#about p');
    introductionElements[0].textContent = translations[language].introduction.greeting;
    introductionElements[1].textContent = translations[language].introduction.name;
    introductionElements[2].textContent = translations[language].introduction.expertise;
    const expertiseListElements = document.querySelectorAll('#about ul li');
    expertiseListElements.forEach((element, index) => {
        element.textContent = translations[language].introduction.expertiseList[index];
    });
    introductionElements[3].textContent = translations[language].introduction.perseverance;
    introductionElements[4].textContent = translations[language].introduction.goal;
    introductionElements[5].textContent = translations[language].introduction.callToAction;
    document.querySelector('#projects h2').textContent = translations[language].projects;
    document.querySelector('#contact h2').textContent = translations[language].navbar.contact;
    document.querySelector('#contact p').textContent = translations[language].contact;
    document.querySelector('label[for="name"]').textContent = translations[language].form.name;
    document.querySelector('label[for="email"]').textContent = translations[language].form.email;
    document.querySelector('label[for="message"]').textContent = translations[language].form.message;
    document.querySelector('button[type="submit"]').textContent = translations[language].form.send;
    document.querySelectorAll('.project p').forEach((element, index) => {
        element.textContent = translations[language].projectDescriptions[index];
    });
    document.querySelector('#tools h2').textContent = translations[language].tools.title;
    document.querySelector('#tools p').textContent = translations[language].tools.description;
    const toolListElements = document.querySelectorAll('#tools ul li');
    toolListElements.forEach((element, index) => {
        element.textContent = translations[language].tools.list[index];
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateLanguage('hu');
});

document.getElementById('language-switcher').addEventListener('change', function() {
    updateLanguage(this.value);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!');
        // Here you would typically send the form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});

let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % totalProjects;
    showProject(currentProjectIndex);
}

showProject(currentProjectIndex);

setInterval(nextProject, 30000);

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
