const questions =[
    {Question: "What does CSS stand for?",
    Answers: [
    {text: "Counter-Strike: Source", correct: false},
    {text: "Computer Style Sheets", correct: false},
    {text: "Cascading Style Sheets", correct: true},
    {text: "Colorful Style Sheets", correct: false},
    ]},
    
    {Question: "In programming, what is a variable?",
    Answers: [
    {text: "A constant value", correct: false},
    {text: "A data type", correct: false},
    {text: "A named storage location for data", correct: true},
    {text: "An operator", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'git clone' command in Git?",
    Answers: [
    {text: "To create a new branch", correct: false},
    {text: "To create a copy of a repository", correct: true},
    {text: "To merge branches", correct: false},
    {text: "To delete a branch", correct: false},
    ]},
    
    {Question: "Which programming language is known for its use in developing web applications?",
    Answers: [
    {text: "Java", correct: false},
    {text: "Python", correct: false},
    {text: "JavaScript", correct: true},
    {text: "C++", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'else' statement in programming?",
    Answers: [
    {text: "To define a loop", correct: false},
    {text: "To handle exceptions", correct: false},
    {text: "To specify code that should be executed if a condition is false", correct: true},
    {text: "To declare a variable", correct: false},
    ]},
    
    {Question: "What is the primary purpose of SQL in programming?",
    Answers: [
    {text: "To style web pages", correct: false},
    {text: "To query and manipulate databases", correct: true},
    {text: "To create graphical user interfaces", correct: false},
    {text: "To write server-side scripts", correct: false},
    ]},
    
    {Question: "What does API stand for?",
    Answers: [
    {text: "Application Programming Interface", correct: true},
    {text: "Advanced Program Instructions", correct: false},
    {text: "Automated Process Integration", correct: false},
    {text: "Application Process Integration", correct: false},
    ]},
    
    {Question: "Which data structure follows the Last In, First Out (LIFO) principle?",
    Answers: [
    {text: "Queue", correct: false},
    {text: "Stack", correct: true},
    {text: "Linked List", correct: false},
    {text: "Tree", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'npm' command in Node.js?",
    Answers: [
    {text: "To install Python packages", correct: false},
    {text: "To manage Node.js packages", correct: true},
    {text: "To create a new project", correct: false},
    {text: "To run a Python script", correct: false},
    ]},
    
    {Question: "In object-oriented programming, what is encapsulation?",
    Answers: [
    {text: "Hiding the implementation details of an object", correct: true},
    {text: "Executing multiple threads concurrently", correct: false},
    {text: "Connecting to a database", correct: false},
    {text: "Sorting an array", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'try' and 'catch' blocks in exception handling?",
    Answers: [
    {text: "To create a loop", correct: false},
    {text: "To define a function", correct: false},
    {text: "To handle errors and exceptions", correct: true},
    {text: "To declare a variable", correct: false},
    ]},
    
    {Question: "Which programming language is often used for developing mobile applications?",
    Answers: [
    {text: "Swift", correct: false},
    {text: "Java", correct: true},
    {text: "C#", correct: false},
    {text: "Ruby", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'docker run' command in Docker?",
    Answers: [
    {text: "To build a Docker image", correct: false},
    {text: "To start a new Docker container", correct: true},
    {text: "To list all Docker containers", correct: false},
    {text: "To remove a Docker container", correct: false},
    ]},
    
    {Question: "What is the role of a version control system, such as Git?",
    Answers: [
    {text: "To format code", correct: false},
    {text: "To track changes in code and collaborate with others", correct: true},
    {text: "To compile code", correct: false},
    {text: "To debug code", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'javac' command in Java?",
    Answers: [
    {text: "To run a Java program", correct: false},
    {text: "To compile a Java source file", correct: true},
    {text: "To install Java libraries", correct: false},
    {text: "To debug a Java program", correct: false},
    ]},
    
    {Question: "What is a function in programming?",
    Answers: [
    {text: "A variable", correct: false},
    {text: "A data type", correct: false},
    {text: "A reusable block of code that performs a specific task", correct: true},
    {text: "An object", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'for' loop in programming?",
    Answers: [
    {text: "To handle exceptions", correct: false},
    {text: "To define a function", correct: false},
    {text: "To execute a block of code repeatedly a specified number of times", correct: true},
    {text: "To create a new class", correct: false},
    ]},
    
   { Question: "Which programming paradigm is characterized by the use of objects?",
    Answers: [
    {text: "Imperative programming", correct: false},
    {text: "Procedural programming", correct: false},
    {text: "Object-oriented programming", correct: true},
    {text: "Functional programming", correct: false},
    ]},
    
    { Question: "What is the purpose of the 'return' statement in a function?",
    Answers: [
    {text: "To declare a variable", correct: false},
    {text: "To exit the program", correct: false},
    {text: "To specify the data type of a variable", correct: false},
    {text: "To send a value back from a function", correct: true},
    ]},
    
   { Question: "What does the acronym HTML stand for?",
    Answers: [
    {text: "HyperText Markup Language", correct: true},
    {text: "High-Level Textual Language", correct: false},
    {text: "Hyperlink and Text Manipulation Language", correct: false},
    {text: "HyperText Modeling Language", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'virtual' keyword in C++?",
    Answers: [
    {text: "To declare a constant", correct: false},
    {text: "To create a virtual machine", correct: false},
    {text: "To define a virtual function that can be overridden in derived classes", correct: true},
    {text: "To allocate memory dynamically", correct: false},
    ]},
    
    {Question: "What is the primary use of the 'npm install' command in Node.js?",
    Answers: [
    {text: "To install Node.js itself", correct: false},
    {text: "To install global packages", correct: false},
    {text: "To install project dependencies specified in the 'package.json' file", correct: true},
    {text: "To uninstall Node.js", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'SELECT' statement in SQL?",
    Answers: [
    {text: "To insert data into a table", correct: false},
    {text: "To update data in a table", correct: false},
    {text: "To retrieve data from a table", correct: true},
    {text: "To delete data from a table", correct: false},
    ]},
    
    {Question: "What is a callback function in JavaScript?",
    Answers: [
    {text: "A function that returns a value", correct: false},
    {text: "A function passed as an argument to another function, which is then invoked later", correct: true},
    {text: "A function that generates random numbers", correct: false},
    {text: "A function used for recursion", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'elif' keyword in Python?",
    Answers: [
    {text: "To define a function", correct: false},
    {text: "To handle exceptions", correct: false},
    {text: "To specify code that should be executed if the preceding 'if' condition is false", correct: true},
    {text: "To create a loop", correct: false},
    ]},
    
    {Question: "What is the role of the 'await' keyword in asynchronous programming with JavaScript?",
    Answers: [
    {text: "To pause the execution of the program", correct: false},
    {text: "To declare a variable", correct: false},
    {text: "To indicate that the function should wait for a Promise to resolve before continuing", correct: true},
    {text: "To define a callback function", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'break' statement in a loop?",
    Answers: [
    {text: "To end the program", correct: false},
    {text: "To exit the current iteration of a loop prematurely", correct: true},
    {text: "To skip the next iteration of a loop", correct: false},
    {text: "To return a value from a function", correct: false},
    ]},
    
    {Question: "Which type of data structure is represented by a graph?",
    Answers: [
    {text: "Linear data structure", correct: false},
    {text: "Hierarchical data structure", correct: false},
    {text: "Non-linear data structure", correct: true},
    {text: "Sequential data structure", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'super' keyword in Java?",
    Answers: [
    {text: "To define a superclass", correct: false},
    {text: "To invoke the superclass's method", correct: true},
    {text: "To create an instance of a class", correct: false},
    {text: "To declare a static variable", correct: false},
    ]},
    
    {Question: "What is the role of the 'this' keyword in JavaScript?",
    Answers: [
    {text: "To refer to the current instance of a class", correct: true},
    {text: "To create a new object", correct: false},
    {text: "To import external modules", correct: false},
    {text: "To define a function", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'package' statement in Java?",
    Answers: [
    {text: "To import external libraries", correct: false},
    {text: "To define a class", correct: false},
    {text: "To specify the location of the current Java file within a package", correct: true},
    {text: "To declare a constant", correct: false},
    ]},
    
    {Question: "What is the significance of the 'public' access modifier in Java?",
    Answers: [
    {text: "To restrict access to the class", correct: false},
    {text: "To allow access only within the same package", correct: false},
    {text: "To allow unrestricted access from any other class", correct: true},
    {text: "To make the class abstract", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'static' keyword in C++?",
    Answers: [
    {text: "To allocate memory dynamically", correct: false},
    {text: "To define a constant", correct: false},
    {text: "To declare a static variable", correct: true},
    {text: "To create an instance of a class", correct: false},
    ]},
    
    {Question: "What is the primary use of the 'yield' keyword in Python?",
    Answers: [
    {text: "To terminate a loop", correct: false},
    {text: "To yield control back to the calling function temporarily", correct: true},
    {text: "To define a generator function", correct: false},
    {text: "To raise an exception", correct: false},
    ]},
    
    {Question: "What is the purpose of the 'typeof' operator in JavaScript?",
    Answers: [
    {text: "To check the type of a variable or expression", correct: true},
    {text: "To create a new variable", correct: false},
    {text: "To define a function", correct: false},
    {text: "To import external modules", correct: false},
    ]},
    
    {Question: "What is a pointer in C programming?",
    Answers: [
    {text: "A variable that stores memory addresses", correct: true},
    {text: "A data type", correct: false},
    {text: "A constant value", correct: false},
    {text: "A function", correct: false},
    ]}
];


// Assuming you have the necessary HTML elements
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.Question;

    // Clear previous answer buttons
    answerButton.innerHTML = "";

    currentQuestion.Answers.forEach(function (answer) {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        button.addEventListener("click", function () {
            checkAnswer(answer.correct, button);
        });

        answerButton.appendChild(button);
    });
}

function checkAnswer(isCorrect, button) {
    if (isCorrect) {
        button.style.backgroundColor = "green";
        confetti(); // Call confetti if the answer is correct
        score++;
    } else {
        button.style.backgroundColor = "red";
        // Show the correct answer in green
        questions[currentQuestionIndex].Answers.forEach(function (answer) {
            if (answer.correct) {
                const correctButton = Array.from(answerButton.children).find(
                    (btn) => btn.innerHTML === answer.text
                );
                correctButton.style.backgroundColor = "green";
            }
        });
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Wait for a moment before moving to the next question
        setTimeout(() => {
            showQuestion();
        }, 1000);
    } else {
        // Display quiz results or perform any other actions
        console.log("Quiz completed. Score: " + score);
    }
}


startQuiz();