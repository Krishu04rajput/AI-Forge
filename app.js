/*
============================================================
AI FORGE
Python → AI → LLM Engineering

GitHub-only architecture
User data = localStorage
Course data = course.js
No database
No backend
============================================================
*/


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


/* =========================================================
   STORAGE
========================================================= */

function loadData() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return { ...defaultData };
        }

        return {
            ...defaultData,
            ...JSON.parse(saved)
        };

    } catch {

        return { ...defaultData };

    }
}


function saveData(message = "Saved locally ✓") {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    showToast(message);
}


/* =========================================================
   NAVIGATION
========================================================= */

const navButtons =
    document.querySelectorAll(".nav-btn");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navigate(button.dataset.page);

    });

});


function navigate(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    const page =
        document.getElementById(pageName);


    if (page) {
        page.classList.add("active");
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


/* =========================================================
   COURSE CALCULATIONS
========================================================= */

function totalLessons() {

    return Array.isArray(LESSONS)
        ? LESSONS.length
        : 0;

}


function completedCount() {

    return data.completedLessons.length;

}


function coursePercent() {

    const total = totalLessons();

    if (!total) return 0;

    return Math.round(
        (completedCount() / total) * 100
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

    const percent =
        coursePercent();


    const xp =
        data.xp;


    document.getElementById("xp")
        .textContent = xp;


    document.getElementById("streak")
        .textContent =
        `${data.streak} day${data.streak === 1 ? "" : "s"}`;


    document.getElementById("completedCount")
        .textContent =
        `${completedCount()} / ${totalLessons()}`;


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
        calculateLevel(xp);


    updateCurrentLesson();

}


function calculateLevel(xp) {

    if (xp >= 10000) return "AI Architect";

    if (xp >= 7000) return "AI Engineer";

    if (xp >= 4500) return "ML Engineer";

    if (xp >= 3000) return "Developer";

    if (xp >= 1500) return "Coder";

    if (xp >= 500) return "Apprentice";

    return "Beginner";

}


function updateCurrentLesson() {

    const next =
        LESSONS.find(
            lesson =>
                !data.completedLessons
                    .includes(lesson.id)
        );


    if (!next) {

        document.getElementById(
            "currentLessonTitle"
        ).textContent =
            "Python Foundation Complete";


        document.getElementById(
            "currentLessonDescription"
        ).textContent =
            "You completed the current course.";

        return;

    }


    document.getElementById(
        "currentLessonTitle"
    ).textContent =
        next.title;


    document.getElementById(
        "currentLessonDescription"
    ).textContent =
        next.description;

}


/* =========================================================
   LESSON LIST
========================================================= */

function renderLessons() {

    const container =
        document.getElementById("lessonList");


    if (!container) return;


    container.innerHTML = "";


    LESSONS.forEach((lesson, index) => {

        const completed =
            data.completedLessons
                .includes(lesson.id);


        const card =
            document.createElement("div");


        card.className =
            `lesson-card ${
                completed ? "completed" : ""
            }`;


        card.innerHTML = `

            <div class="lesson-index">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div>

                <h3>
                    ${escapeHTML(lesson.title)}
                </h3>

                <p>
                    ${escapeHTML(lesson.description)}
                </p>

            </div>

            <button
                class="secondary-btn"
                onclick="openLesson('${lesson.id}')"
            >
                ${completed ? "REVIEW" : "LEARN →"}
            </button>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   OPEN LESSON
========================================================= */

function openLesson(id) {

    const lesson =
        LESSONS.find(
            item => item.id === id
        );


    if (!lesson) return;


    const container =
        document.getElementById(
            "lessonContent"
        );


    container.innerHTML =
        buildLessonHTML(lesson);


    navigate("lesson");

}


window.openLesson = openLesson;


/* =========================================================
   LESSON HTML
========================================================= */

function buildLessonHTML(lesson) {

    const completed =
        data.completedLessons
            .includes(lesson.id);


    return `

        <article class="lesson-article">

            <p class="eyebrow">
                PYTHON // ${lesson.number}
            </p>

            <h1>
                ${escapeHTML(lesson.title)}
            </h1>

            <p>
                ${escapeHTML(lesson.description)}
            </p>


            ${lesson.sections.map(section => `

                <h2>
                    ${escapeHTML(section.heading)}
                </h2>

                ${section.content}

            `).join("")}


            ${
                lesson.quiz
                ? buildQuizHTML(lesson)
                : ""
            }


            <div class="lesson-complete">

                ${
                    completed

                    ? `
                        <button
                            class="secondary-btn"
                            disabled
                        >
                            ✓ LESSON COMPLETED
                        </button>
                    `

                    : `
                        <button
                            class="primary-btn"
                            onclick="completeLesson('${lesson.id}')"
                        >
                            ✓ COMPLETE LESSON
                            +${lesson.xp} XP
                        </button>
                    `
                }

            </div>

        </article>

    `;

}


/* =========================================================
   COMPLETE LESSON
========================================================= */

function completeLesson(id) {

    const lesson =
        LESSONS.find(
            item => item.id === id
        );


    if (!lesson) return;


    if (
        data.completedLessons
            .includes(id)
    ) {

        showToast("Already completed.");

        return;

    }


    data.completedLessons.push(id);

    data.xp += lesson.xp;


    updateStreak();


    saveData(
        `Lesson complete! +${lesson.xp} XP`
    );


    updateDashboard();

    renderLessons();


    setTimeout(() => {

        openLesson(id);

    }, 250);

}


window.completeLesson = completeLesson;


/* =========================================================
   QUIZ
========================================================= */

function buildQuizHTML(lesson) {

    const quiz =
        lesson.quiz;


    return `

        <div class="quiz-box">

            <p class="eyebrow">
                KNOWLEDGE CHECK
            </p>

            <h2>
                ${escapeHTML(quiz.question)}
            </h2>


            <div class="quiz-options">

                ${quiz.options.map(
                    (option, index) => `

                        <button
                            class="quiz-option"
                            onclick="answerQuiz(
                                '${lesson.id}',
                                ${index}
                            )"
                        >
                            ${escapeHTML(option)}
                        </button>

                    `
                ).join("")}

            </div>


            <div
                id="quiz-result-${lesson.id}"
                class="quiz-result"
            ></div>

        </div>

    `;

}


function answerQuiz(
    lessonId,
    answerIndex
) {

    const lesson =
        LESSONS.find(
            item => item.id === lessonId
        );


    if (!lesson || !lesson.quiz)
        return;


    const quiz =
        lesson.quiz;


    const result =
        document.getElementById(
            `quiz-result-${lessonId}`
        );


    if (
        data.quizResults[lessonId]
    ) {

        result.innerHTML =
            "✓ You already answered this quiz.";

        return;

    }


    if (
        answerIndex === quiz.correct
    ) {

        data.quizResults[lessonId] = true;

        data.xp += quiz.xp;


        result.innerHTML = `
            <strong>✓ Correct!</strong>
            ${escapeHTML(quiz.explanation)}
            <br><br>
            +${quiz.xp} XP
        `;


        saveData(
            `Correct answer! +${quiz.xp} XP`
        );


        updateDashboard();

    } else {

        result.innerHTML = `
            <strong>Not quite.</strong>
            ${escapeHTML(quiz.hint)}
        `;

    }

}


window.answerQuiz = answerQuiz;


/* =========================================================
   STREAK
========================================================= */

function updateStreak() {

    const today =
        new Date()
            .toISOString()
            .slice(0, 10);


    if (!data.lastVisit) {

        data.streak = 1;

    } else {

        const previous =
            new Date(data.lastVisit);


        const current =
            new Date(today);


        const difference =
            Math.floor(
                (
                    current - previous
                ) /
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


/* =========================================================
   NOTES
========================================================= */

function loadNotes() {

    const area =
        document.getElementById(
            "notesArea"
        );


    if (area) {

        area.value =
            data.notes || "";

    }

}


document
    .getElementById("saveNotes")
    ?.addEventListener(
        "click",
        () => {

            data.notes =
                document
                    .getElementById("notesArea")
                    .value;


            saveData("Notes saved locally ✓");

        }
    );


document
    .getElementById("notesArea")
    ?.addEventListener(
        "input",
        event => {

            data.notes =
                event.target.value;


            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );


            const status =
                document.getElementById(
                    "saveStatus"
                );


            if (status) {

                status.textContent =
                    "● AUTO-SAVED";

            }

        }
    );


/* =========================================================
   DOUBTS
========================================================= */

document
    .getElementById("askDoubt")
    ?.addEventListener(
        "click",
        () => {

            const input =
                document
                    .getElementById("doubtInput")
                    .value
                    .trim();


            const response =
                document.getElementById(
                    "doubtResponse"
                );


            if (!input) {

                response.classList.remove(
                    "hidden"
                );


                response.innerHTML =
                    "⚠️ Write your doubt first.";

                return;

            }


            data.doubts.push({

                question: input,

                date:
                    new Date().toISOString()

            });


            saveData(
                "Doubt saved locally ✓"
            );


            response.classList.remove(
                "hidden"
            );


            response.innerHTML = `

                <strong>
                    DOUBT SAVED
                </strong>

                <br><br>

                ${escapeHTML(input)}

                <br><br>

                🤖 AI Tutor will be connected
                in a later version.

            `;

        }
    );


/* =========================================================
   RESET
========================================================= */

document
    .getElementById("resetData")
    ?.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Reset ALL AI Forge progress?"
                );


            if (!confirmed)
                return;


            localStorage.removeItem(
                STORAGE_KEY
            );


            data =
                {
                    ...defaultData
                };


            updateDashboard();

            renderLessons();

            loadNotes();


            showToast(
                "All local data reset."
            );

        }
    );


/* =========================================================
   MOBILE MENU
========================================================= */

document
    .getElementById("mobileMenu")
    ?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".sidebar")
                ?.classList
                .toggle("mobile-open");

        }
    );


/* =========================================================
   UTILITIES
========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}


function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(
        window.aiForgeToast
    );


    window.aiForgeToast =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   INITIALIZATION
========================================================= */

updateStreak();

updateDashboard();

renderLessons();

loadNotes();
