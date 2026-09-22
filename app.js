/*
    AI FORGE
    GitHub-only learning platform

    IMPORTANT:
    No database.
    No backend.
    No external API.

    User progress is stored locally in the browser.
*/


// ============================================================
// LESSON DATA
// ============================================================

const lessons = [

    {
        id: "python-intro",

        number: "01",

        title: "What is Python?",

        description:
            "Understand Python, programming and why Python is important in AI.",

        xp: 100,

        content: `
            <article class="lesson-article">

                <p class="eyebrow">
                    PYTHON // LESSON 01
                </p>

                <h1>What is Python?</h1>

                <p>
                    Python is a high-level programming language designed
                    to make writing and understanding programs easier.
                </p>

                <h2>Why are we learning Python?</h2>

                <p>
                    Python is widely used for web development, automation,
                    data science, machine learning and artificial intelligence.
                </p>

                <h2>Your first Python program</h2>

                <div class="code-box">
<pre>print("Hello, World!")</pre>
                </div>

                <p>
                    The <strong>print()</strong> function tells Python to
                    display something.
                </p>

                <h2>Try understanding it</h2>

                <p>
                    Don't worry about memorizing everything yet.
                    Our goal is to understand what code actually does.
                </p>

                <div class="code-box">
<pre>print("I am learning Python")
print(10)
print(5 + 5)</pre>
                </div>

                <h2>Mini challenge</h2>

                <p>
                    What do you think this program will output?
                </p>

                <div class="code-box">
<pre>print(20 + 30)</pre>
                </div>

                <p>
                    Answer: <strong>50</strong>.
                </p>

                <button
                    class="primary-btn lesson-complete"
                    onclick="completeLesson('python-intro')"
                >
                    ✓ COMPLETE LESSON
                </button>

            </article>
        `
    },


    {
        id: "python-variables",

        number: "02",

        title: "Variables",

        description:
            "Learn how Python stores and works with information.",

        xp: 120,

        content: `
            <article class="lesson-article">

                <p class="eyebrow">
                    PYTHON // LESSON 02
                </p>

                <h1>Variables</h1>

                <p>
                    A variable is a name that refers to a value.
                </p>

                <h2>Creating a variable</h2>

                <div class="code-box">
<pre>name = "Krishu"
age = 16

print(name)
print(age)</pre>
                </div>

                <p>
                    Here Python stores the value
                    <strong>"Krishu"</strong> under the name
                    <strong>name</strong>.
                </p>

                <h2>Numbers</h2>

                <div class="code-box">
<pre>x = 10
y = 20

result = x + y

print(result)</pre>
                </div>

                <h2>Changing values</h2>

                <div class="code-box">
<pre>score = 10

score = 20

print(score)</pre>
                </div>

                <p>
                    The final value of <strong>score</strong> is 20.
                </p>

                <button
                    class="primary-btn lesson-complete"
                    onclick="completeLesson('python-variables')"
                >
                    ✓ COMPLETE LESSON
                </button>

            </article>
        `
    },


    {
        id: "python-input-output",

        number: "03",

        title: "Input & Output",

        description:
            "Learn how programs receive information and respond to users.",

        xp: 150,

        content: `
            <article class="lesson-article">

                <p class="eyebrow">
                    PYTHON // LESSON 03
                </p>

                <h1>Input & Output</h1>

                <p>
                    Programs become interactive when they can receive
                    information from a user.
                </p>

                <h2>Output</h2>

                <div class="code-box">
<pre>print("Hello!")</pre>
                </div>

                <h2>Input</h2>

                <div class="code-box">
<pre>name = input("What is your name? ")

print("Hello", name)</pre>
                </div>

                <p>
                    The <strong>input()</strong> function waits for the
                    user to enter something.
                </p>

                <h2>Numbers from input</h2>

                <div class="code-box">
<pre>age = int(input("Enter your age: "))

print(age)</pre>
                </div>

                <p>
                    By default, input is text. The
                    <strong>int()</strong> function converts suitable text
                    into an integer.
                </p>

                <h2>Mini challenge</h2>

                <p>
                    Imagine building a program that asks for two numbers
                    and prints their sum.
                </p>

                <button
                    class="primary-btn lesson-complete"
                    onclick="completeLesson('python-input-output')"
                >
                    ✓ COMPLETE LESSON
                </button>

            </article>
        `
    }

];


// ============================================================
// LOCAL DATA
// ============================================================

const STORAGE_KEY = "aiForgeData";


const defaultData = {

    completedLessons: [],

    xp: 0,

    streak: 0,

    lastVisit: null,

    notes: "",

    quizResults: {},

    doubts: []

};


let data = loadData();


function loadData() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (!saved) {

            return {
                ...defaultData
            };

        }

        return {
            ...defaultData,
            ...JSON.parse(saved)
        };

    } catch (error) {

        console.error("Could not load local data:", error);

        return {
            ...defaultData
        };
    }
}


function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    showToast("Saved locally ✓");
}


// ============================================================
// NAVIGATION
// ============================================================

const navButtons =
    document.querySelectorAll(".nav-btn");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navigate(button.dataset.page);

    });

});


document
    .querySelectorAll(".module-card:not(.locked)")
    .forEach(card => {

        card.addEventListener("click", () => {

            navigate(card.dataset.page);

        });

    });


function navigate(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const target =
        document.getElementById(pageName);

    if (target) {

        target.classList.add("active");

    }


    navButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === pageName
        );

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageName === "learn") {

        renderLessons();

    }


    if (pageName === "notes") {

        loadNotes();

    }

}


// ============================================================
// DASHBOARD
// ============================================================

function updateDashboard() {

    const completed =
        data.completedLessons.length;


    const total =
        lessons.length;


    const percent =
        Math.round((completed / total) * 100);


    document.getElementById("xp")
        .textContent = data.xp;


    document.getElementById("streak")
        .textContent =
        `${data.streak} day${data.streak === 1 ? "" : "s"}`;


    document.getElementById("completedCount")
        .textContent =
        `${completed} / ${total}`;


    document.getElementById("progressPercent")
        .textContent =
        `${percent}%`;


    document.getElementById("learnProgress")
        .textContent =
        `${percent}%`;


    document.getElementById("progressFill")
        .style.width =
        `${percent}%`;


    document.getElementById("level")
        .textContent =
        calculateLevel(data.xp);


    updateCurrentLesson();

}


function calculateLevel(xp) {

    if (xp >= 3000)
        return "AI Architect";

    if (xp >= 2000)
        return "AI Engineer";

    if (xp >= 1000)
        return "Developer";

    if (xp >= 500)
        return "Coder";

    return "Beginner";

}


function updateCurrentLesson() {

    const nextLesson =
        lessons.find(
            lesson =>
                !data.completedLessons.includes(lesson.id)
        );


    if (!nextLesson) {

        document.getElementById("currentLessonTitle")
            .textContent =
            "Python Foundations Complete!";


        document.getElementById("currentLessonDescription")
            .textContent =
            "Excellent. The next training module will unlock soon.";

        return;

    }


    document.getElementById("currentLessonTitle")
        .textContent =
        nextLesson.title;


    document.getElementById("currentLessonDescription")
        .textContent =
        nextLesson.description;

}


// ============================================================
// LESSON LIST
// ============================================================

function renderLessons() {

    const container =
        document.getElementById("lessonList");


    container.innerHTML = "";


    lessons.forEach((lesson, index) => {

        const completed =
            data.completedLessons.includes(
                lesson.id
            );


        const card =
            document.createElement("div");


        card.className =
            `lesson-card ${completed ? "completed" : ""}`;


        card.innerHTML = `

            <div class="lesson-index">
                ${lesson.number}
            </div>

            <div>

                <h3>
                    ${lesson.title}
                </h3>

                <p>
                    ${lesson.description}
                </p>

            </div>

            <button
                class="secondary-btn"
                onclick="openLesson('${lesson.id}')"
            >

                ${completed ? "REVIEW" : "START →"}

            </button>

            ${completed
                ? `<span class="complete-mark">✓</span>`
                : ""
            }

        `;


        container.appendChild(card);

    });

}


// ============================================================
// OPEN LESSON
// ============================================================

function openLesson(id) {

    const lesson =
        lessons.find(
            item => item.id === id
        );


    if (!lesson)
        return;


    document.getElementById("lessonContent")
        .innerHTML =
        lesson.content;


    navigate("lesson");

}


window.openLesson = openLesson;


// ============================================================
// COMPLETE LESSON
// ============================================================

function completeLesson(id) {

    const lesson =
        lessons.find(
            item => item.id === id
        );


    if (!lesson)
        return;


    if (
        !data.completedLessons.includes(id)
    ) {

        data.completedLessons.push(id);

        data.xp += lesson.xp;

        saveData();

        updateStreak();

        updateDashboard();

        renderLessons();

        showToast(
            `Lesson complete! +${lesson.xp} XP`
        );

    } else {

        showToast("Lesson already completed.");

    }

}


window.completeLesson = completeLesson;


// ============================================================
// CONTINUE BUTTONS
// ============================================================

document
    .getElementById("continueLearning")
    .addEventListener("click", () => {

        const next =
            lessons.find(
                lesson =>
                    !data.completedLessons
                        .includes(lesson.id)
            );


        if (next) {

            openLesson(next.id);

        } else {

            navigate("learn");

        }

    });


document
    .getElementById("openCurrentLesson")
    .addEventListener("click", () => {

        const next =
            lessons.find(
                lesson =>
                    !data.completedLessons
                        .includes(lesson.id)
            );


        if (next) {

            openLesson(next.id);

        }

    });


document
    .getElementById("backToLearn")
    .addEventListener("click", () => {

        navigate("learn");

    });


// ============================================================
// STREAK
// ============================================================

function updateStreak() {

    const today =
        new Date().toISOString().slice(0, 10);


    if (!data.lastVisit) {

        data.streak = 1;

    } else {

        const previous =
            new Date(data.lastVisit);


        const current =
            new Date(today);


        const difference =
            Math.floor(
                (current - previous) /
                (1000 * 60 * 60 * 24)
            );


        if (difference === 1) {

            data.streak++;

        } else if (difference > 1) {

            data.streak = 1;

        }

    }


    data.lastVisit = today;

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


// ============================================================
// NOTES
// ============================================================

function loadNotes() {

    document.getElementById("notesArea")
        .value =
        data.notes || "";

}


document
    .getElementById("saveNotes")
    .addEventListener("click", () => {

        data.notes =
            document.getElementById("notesArea")
                .value;


        saveData();

        document.getElementById("saveStatus")
            .textContent =
            "● SAVED LOCALLY";

    });


// Auto-save notes every few seconds

document
    .getElementById("notesArea")
    .addEventListener("input", () => {

        data.notes =
            document.getElementById("notesArea")
                .value;


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

        document.getElementById("saveStatus")
            .textContent =
            "● AUTO-SAVED";

    });


// ============================================================
// DOUBT SYSTEM
// ============================================================

document
    .getElementById("askDoubt")
    .addEventListener("click", () => {

        const input =
            document.getElementById("doubtInput")
                .value.trim();


        const response =
            document.getElementById("doubtResponse");


        if (!input) {

            response.classList.remove("hidden");

            response.innerHTML =
                "⚠️ Write your question first.";

            return;

        }


        /*
            V1 does not contact an AI API.

            This is intentionally local-only.

            The AI tutor backend can be added later
            without changing the interface.
        */


        response.classList.remove("hidden");


        response.innerHTML = `

            <strong>LOCAL TUTOR MODE</strong>

            <br><br>

            Your doubt has been saved locally.

            <br><br>

            <strong>Your question:</strong>

            <br>

            ${escapeHTML(input)}

            <br><br>

            🤖 AI Tutor integration is not connected yet.

            <br><br>

            For now, use this space to write down
            exactly what you don't understand.

        `;


        data.doubts.push({

            question: input,

            date:
                new Date().toISOString()

        });


        saveData();

    });


// ============================================================
// TUTOR MODES
// ============================================================

document
    .querySelectorAll(".tutor-mode")
    .forEach(button => {

        button.addEventListener("click", () => {

            const mode =
                button.textContent.trim();


            showToast(
                `${mode} mode ready for AI integration`
            );

        });

    });


// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent = text;

    return element.innerHTML;

}


// ============================================================
// TOAST
// ============================================================

let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}


// ============================================================
// RESET
// ============================================================

document
    .getElementById("resetData")
    .addEventListener("click", () => {

        const confirmed =
            confirm(
                "Reset all AI Forge progress, XP and notes?"
            );


        if (!confirmed)
            return;


        localStorage.removeItem(
            STORAGE_KEY
        );


        data = {
            ...defaultData
        };


        updateDashboard();

        renderLessons();

        loadNotes();

        showToast(
            "All local data has been reset."
        );

    });


// ============================================================
// MOBILE MENU
// ============================================================

document
    .getElementById("mobileMenu")
    .addEventListener("click", () => {

        document
            .querySelector(".sidebar")
            .classList.toggle("mobile-open");

    });


// ============================================================
// INITIALIZE
// ============================================================

updateStreak();

updateDashboard();

renderLessons();

loadNotes();
