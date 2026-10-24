/* ==========================================
   SKILLBRIDGE
   Student Career Guidance Website
   JavaScript Functionality
========================================== */


/* ==========================================
   1. CURRENT YEAR
========================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ==========================================
   2. CAREER DATABASE
========================================== */

const careerDatabase = {

    biology: {
        research: [
            {
                title: "Biotechnology Researcher",
                description:
                    "Study biological systems and explore applications in biotechnology, genetics, and molecular biology.",
                skills:
                    "Biology, laboratory techniques, research methods"
            },
            {
                title: "Microbiologist",
                description:
                    "Study microorganisms and their applications in health, food, agriculture, and the environment.",
                skills:
                    "Microbiology, laboratory safety, analytical thinking"
            },
            {
                title: "Clinical Research Professional",
                description:
                    "Explore how clinical studies are planned, conducted, documented, and monitored.",
                skills:
                    "Research methods, documentation, data interpretation"
            }
        ],

        technology: [
            {
                title: "Bioinformatics Professional",
                description:
                    "Combine biology, computing, and data analysis to study biological information.",
                skills:
                    "Biology, programming, statistics, data analysis"
            },
            {
                title: "Computational Biology Learner",
                description:
                    "Explore computational methods used to understand biological processes.",
                skills:
                    "Biology, mathematics, programming"
            }
        ],

        helping: [
            {
                title: "Science Educator",
                description:
                    "Explain biology and scientific concepts to students through teaching and learning resources.",
                skills:
                    "Subject knowledge, communication, presentation"
            },
            {
                title: "Public Health Education Professional",
                description:
                    "Help communities understand health, hygiene, and disease-prevention information.",
                skills:
                    "Communication, biology, health education"
            }
        ],

        business: [
            {
                title: "Biotechnology Product Specialist",
                description:
                    "Explore the science and applications of biotechnology products and services.",
                skills:
                    "Biotechnology, communication, business knowledge"
            }
        ],

        creative: [
            {
                title: "Science Communicator",
                description:
                    "Present scientific information through articles, videos, illustrations, and educational content.",
                skills:
                    "Biology, writing, communication, creativity"
            }
        ]
    },


    technology: {
        research: [
            {
                title: "Data Analyst",
                description:
                    "Analyze information to identify patterns and support decisions.",
                skills:
                    "Excel, statistics, data visualization"
            },
            {
                title: "AI Research Learner",
                description:
                    "Explore artificial intelligence, machine learning, and experimental projects.",
                skills:
                    "Programming, mathematics, problem-solving"
            }
        ],

        technology: [
            {
                title: "Web Developer",
                description:
                    "Build websites using HTML, CSS, JavaScript, and other web technologies.",
                skills:
                    "HTML, CSS, JavaScript, debugging"
            },
            {
                title: "Software Developer",
                description:
                    "Design, develop, test, and maintain software applications.",
                skills:
                    "Programming, algorithms, problem-solving"
            },
            {
                title: "Data Science Learner",
                description:
                    "Explore data analysis, statistics, programming, and machine learning.",
                skills:
                    "Python, statistics, data analysis"
            }
        ],

        helping: [
            {
                title: "Technology Educator",
                description:
                    "Help people learn digital tools, computer skills, and programming basics.",
                skills:
                    "Computer knowledge, communication, teaching"
            }
        ],

        business: [
            {
                title: "Business Data Analyst",
                description:
                    "Use data and digital tools to understand business performance.",
                skills:
                    "Data analysis, spreadsheets, communication"
            }
        ],

        creative: [
            {
                title: "UI/UX Designer",
                description:
                    "Design user-friendly digital experiences for websites and applications.",
                skills:
                    "Design principles, user research, prototyping"
            },
            {
                title: "Web Interface Designer",
                description:
                    "Create accessible and visually clear website layouts.",
                skills:
                    "HTML, CSS, design, accessibility"
            }
        ]
    },


    mathematics: {
        research: [
            {
                title: "Research Analyst",
                description:
                    "Use mathematics, statistics, and analytical methods to study problems.",
                skills:
                    "Mathematics, statistics, analytical thinking"
            },
            {
                title: "Scientific Research Professional",
                description:
                    "Explore scientific questions through experiments, calculations, and data analysis.",
                skills:
                    "Mathematics, scientific methods, data analysis"
            }
        ],

        technology: [
            {
                title: "Data Analyst",
                description:
                    "Use mathematical and statistical techniques to understand data.",
                skills:
                    "Statistics, spreadsheets, visualization"
            },
            {
                title: "Software Developer",
                description:
                    "Create software solutions using programming and logical reasoning.",
                skills:
                    "Programming, logic, problem-solving"
            }
        ],

        helping: [
            {
                title: "Mathematics Educator",
                description:
                    "Help learners understand mathematics and develop problem-solving skills.",
                skills:
                    "Mathematics, communication, teaching"
            }
        ],

        business: [
            {
                title: "Financial Analyst",
                description:
                    "Study financial information and help organizations understand financial performance.",
                skills:
                    "Mathematics, spreadsheets, financial analysis"
            }
        ],

        creative: [
            {
                title: "Technical Content Creator",
                description:
                    "Explain mathematical and technical topics through clear educational content.",
                skills:
                    "Writing, mathematics, visual communication"
            }
        ]
    },


    business: {
        research: [
            {
                title: "Market Research Analyst",
                description:
                    "Study customers, markets, and trends to help organizations make informed decisions.",
                skills:
                    "Research, statistics, communication"
            }
        ],

        technology: [
            {
                title: "Business Technology Analyst",
                description:
                    "Explore how digital tools can improve business processes.",
                skills:
                    "Digital tools, analysis, problem-solving"
            }
        ],

        helping: [
            {
                title: "Human Resources Professional",
                description:
                    "Explore recruitment, employee development, and workplace communication.",
                skills:
                    "Communication, organization, teamwork"
            }
        ],

        business: [
            {
                title: "Business Management Professional",
                description:
                    "Explore planning, coordination, operations, and organizational management.",
                skills:
                    "Management, communication, planning"
            },
            {
                title: "Entrepreneur",
                description:
                    "Develop ideas into products or services and learn how to manage a business.",
                skills:
                    "Planning, creativity, financial literacy"
            }
        ],

        creative: [
            {
                title: "Digital Marketing Professional",
                description:
                    "Explore online campaigns, content strategy, and digital communication.",
                skills:
                    "Writing, creativity, digital marketing"
            }
        ]
    },


    arts: {
        research: [
            {
                title: "Social Research Assistant",
                description:
                    "Explore social issues using research, interviews, and information analysis.",
                skills:
                    "Research, writing, critical thinking"
            }
        ],

        technology: [
            {
                title: "Digital Content Specialist",
                description:
                    "Combine digital tools and communication to create educational and informational content.",
                skills:
                    "Digital literacy, writing, communication"
            }
        ],

        helping: [
            {
                title: "Teacher or Educator",
                description:
                    "Help learners develop knowledge, communication, and critical-thinking skills.",
                skills:
                    "Communication, subject knowledge, teaching"
            },
            {
                title: "Community Education Professional",
                description:
                    "Support educational awareness and learning activities in communities.",
                skills:
                    "Communication, organization, teamwork"
            }
        ],

        business: [
            {
                title: "Public Relations Professional",
                description:
                    "Help organizations communicate clearly with audiences and communities.",
                skills:
                    "Writing, communication, planning"
            }
        ],

        creative: [
            {
                title: "Content Writer",
                description:
                    "Create educational articles, website content, and informational material.",
                skills:
                    "Writing, research, editing"
            },
            {
                title: "Graphic Design Learner",
                description:
                    "Explore visual communication and the design of digital materials.",
                skills:
                    "Design principles, creativity, digital tools"
            }
        ]
    }

};


/* ==========================================
   3. CAREER FINDER
========================================== */

const careerForm = document.getElementById("careerForm");

const careerResults = document.getElementById("careerResults");

const resultMessage = document.getElementById("resultMessage");

const resultList = document.getElementById("resultList");


if (
    careerForm &&
    careerResults &&
    resultMessage &&
    resultList
) {

    careerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const education =
            document.getElementById("education").value;

        const subject =
            document.getElementById("subject").value;

        const interest =
            document.getElementById("interest").value;


        // Check that all answers are selected.

        if (!education || !subject || !interest) {

            resultMessage.textContent =
                "Please answer all three questions.";

            careerResults.hidden = false;

            return;
        }


        // Find careers matching the selected subject and interest.

        const subjectCareers = careerDatabase[subject];

        let matchingCareers = [];

        if (
            subjectCareers &&
            subjectCareers[interest]
        ) {

            matchingCareers = subjectCareers[interest];

        }


        // Prepare the result area.

        resultList.replaceChildren();


        if (matchingCareers.length === 0) {

            resultMessage.textContent =
                "We could not find a matching suggestion. " +
                "Try selecting another interest.";

            careerResults.hidden = false;

            return;
        }


        resultMessage.textContent =
            "Based on your selected subject and interests, " +
            "here are some careers you can explore. " +
            "Your education level is: " +
            getEducationName(education) + ".";


        // Create a separate card for each career.

        matchingCareers.forEach(function (career) {

            const card = document.createElement("article");

            card.className = "career-result-card";


            const title = document.createElement("h4");

            title.textContent = career.title;


            const description = document.createElement("p");

            description.textContent = career.description;


            const skills = document.createElement("p");

            skills.textContent =
                "Useful skills: " + career.skills;


            card.append(title, description, skills);

            resultList.appendChild(card);

        });


        careerResults.hidden = false;

        careerResults.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


/* ==========================================
   4. EDUCATION LABELS
========================================== */

function getEducationName(value) {

    const educationLabels = {

        school: "Class 10",

        intermediate: "Class 12",

        undergraduate: "Undergraduate",

        graduate: "Graduate",

        postgraduate: "Postgraduate"

    };

    return educationLabels[value] || "Not specified";

}


/* ==========================================
   5. STUDY PLANNER
========================================== */

const plannerForm = document.getElementById("plannerForm");

const studyGoal = document.getElementById("studyGoal");

const targetDate = document.getElementById("targetDate");

const goalList = document.getElementById("goalList");

const goalMessage = document.getElementById("goalMessage");


const STORAGE_KEY = "skillBridgeStudyGoals";


/* Safely load saved goals from the browser. */

function loadGoals() {

    try {

        const savedGoals = localStorage.getItem(STORAGE_KEY);

        if (!savedGoals) {
            return [];
        }

        const parsedGoals = JSON.parse(savedGoals);

        return Array.isArray(parsedGoals)
            ? parsedGoals.filter(function (goal) {

                return (
                    goal &&
                    typeof goal.id === "string" &&
                    typeof goal.title === "string" &&
                    typeof goal.date === "string"
                );

            })
            : [];

    } catch (error) {

        console.error("Could not load study goals:", error);

        return [];

    }

}


let studyGoals = loadGoals();


/* Save goals locally in the browser. */

function saveGoals() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(studyGoals)
        );

        return true;

    } catch (error) {

        console.error("Could not save study goals:", error);

        if (goalMessage) {

            goalMessage.textContent =
                "Your goal could not be saved. " +
                "Please check your browser storage settings.";

        }

        return false;

    }

}


/* Format dates for display. */

function formatDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-IN", {

        day: "numeric",

        month: "short",

        year: "numeric"

    });

}


/* Render study goals safely. */

function renderGoals() {

    if (!goalList || !goalMessage) {
        return;
    }

    goalList.replaceChildren();


    if (studyGoals.length === 0) {

        goalMessage.textContent =
            "No learning goals yet. Add your first goal above.";

        return;

    }


    goalMessage.textContent =
        "You have " + studyGoals.length +
        (studyGoals.length === 1
            ? " learning goal."
            : " learning goals.");


    studyGoals.forEach(function (goal) {

        const listItem = document.createElement("li");


        const details = document.createElement("span");

        details.textContent =
            goal.title + " — Target: " + formatDate(goal.date);


        const deleteButton = document.createElement("button");

        deleteButton.type = "button";

        deleteButton.textContent = "Delete";

        deleteButton.setAttribute(
            "aria-label",
            "Delete goal: " + goal.title
        );


        deleteButton.addEventListener("click", function () {

            deleteGoal(goal.id);

        });


        listItem.append(details, deleteButton);

        goalList.appendChild(listItem);

    });

}


/* Add a new study goal. */

if (
    plannerForm &&
    studyGoal &&
    targetDate &&
    goalList &&
    goalMessage
) {

    plannerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const title = studyGoal.value.trim();

        const date = targetDate.value;


        if (!title || !date) {

            goalMessage.textContent =
                "Please enter a goal and choose a target date.";

            return;

        }


        const today = new Date();

        today.setHours(0, 0, 0, 0);


        const selectedDate = new Date(date + "T00:00:00");


        if (Number.isNaN(selectedDate.getTime())) {

            goalMessage.textContent =
                "Please select a valid target date.";

            return;

        }


        if (selectedDate < today) {

            goalMessage.textContent =
                "Please choose today or a future date.";

            return;

        }


        const newGoal = {

            id:
                Date.now().toString() +
                "-" +
                Math.random().toString(36).slice(2, 8),

            title: title,

            date: date

        };


        studyGoals.push(newGoal);


        if (!saveGoals()) {

            studyGoals.pop();

            return;

        }


        renderGoals();

        plannerForm.reset();

        studyGoal.focus();

    });

}


/* Delete a study goal. */

function deleteGoal(goalId) {

    const previousGoals = studyGoals;

    studyGoals = studyGoals.filter(function (goal) {

        return goal.id !== goalId;

    });


    if (!saveGoals()) {

        studyGoals = previousGoals;

        renderGoals();

        return;

    }


    renderGoals();

}


/* Display existing goals when the page loads. */

renderGoals();


/* ==========================================
   6. NAVIGATION
========================================== */

document.querySelectorAll('.nav-links a[href^="#"]').forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    }
);


/* ==========================================
   7. ACCESSIBILITY AND STARTUP
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("SkillBridge website loaded successfully!");

});