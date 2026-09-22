/*
============================================================
AI FORGE COURSE DATABASE
Python Foundations

Everything here is static course content.
No user data is stored here.
============================================================
*/


const LESSONS = [

/* =========================================================
01
========================================================= */

{
    id: "python-01",
    number: "01",
    title: "What Is Programming?",
    description:
        "Understand programming, programs, instructions and how computers execute code.",
    xp: 100,

    sections: [

        {
            heading: "Programming is giving instructions",

            content: `
                <p>
                    A computer is extremely fast, but it does not
                    automatically know what you want.
                    Programming is the process of writing precise
                    instructions that a computer can execute.
                </p>

                <p>
                    Think about making tea. A human can understand:
                    "make tea."
                    A computer needs the individual steps.
                </p>

                <div class="code-box">
<pre>
1. Get water
2. Heat water
3. Add tea
4. Add milk
5. Add sugar
6. Serve
</pre>
                </div>

                <p>
                    A program is essentially a set of instructions.
                </p>
            `
        },

        {
            heading: "Programming languages",

            content: `
                <p>
                    Humans use natural languages such as English and Hindi.
                    Computers ultimately execute machine instructions.
                    Programming languages provide a practical bridge between
                    humans and computers.
                </p>

                <p>
                    Python, C++, Java and JavaScript are examples of
                    programming languages.
                </p>
            `
        },

        {
            heading: "Why Python?",

            content: `
                <p>
                    Python has relatively readable syntax and a huge ecosystem
                    of libraries. It is used in automation, web development,
                    data analysis, scientific computing and artificial intelligence.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What is the main purpose of a computer program?",
        options: [
            "To give a computer instructions",
            "To make the computer heavier",
            "To replace electricity",
            "To create hardware automatically"
        ],
        correct: 0,
        xp: 25,
        explanation:
            "A program is a set of instructions that a computer can execute.",
        hint:
            "Think about what programming actually provides to a computer."
    }
},


/* =========================================================
02
========================================================= */

{
    id: "python-02",
    number: "02",
    title: "What Is Python?",
    description:
        "Learn what Python is, how Python code runs and why it is useful.",
    xp: 100,

    sections: [

        {
            heading: "Python",

            content: `
                <p>
                    Python is a high-level, general-purpose programming language.
                    Its syntax is designed to be relatively readable.
                </p>

                <div class="code-box">
<pre>
print("Hello, Python!")
</pre>
                </div>

                <p>
                    This tells Python to display the text
                    <strong>Hello, Python!</strong>.
                </p>
            `
        },

        {
            heading: "Python and the interpreter",

            content: `
                <p>
                    When you run Python source code, Python software
                    interprets and executes the instructions.
                </p>

                <p>
                    You do not need to understand every implementation detail
                    yet. For now, remember:
                </p>

                <div class="code-box">
<pre>
Your Python code
       ↓
Python runtime
       ↓
Computer executes instructions
       ↓
Output
</pre>
                </div>
            `
        },

        {
            heading: "Where Python is used",

            content: `
                <p>
                    Python is commonly used for:
                </p>

                <ul>
                    <li>Automation</li>
                    <li>Web development</li>
                    <li>Data analysis</li>
                    <li>Scientific computing</li>
                    <li>Machine learning</li>
                    <li>Artificial intelligence</li>
                </ul>
            `
        }

    ],

    quiz: {
        question:
            "Which statement about Python is correct?",
        options: [
            "Python is a programming language",
            "Python is only a database",
            "Python is a computer processor",
            "Python is an operating system"
        ],
        correct: 0,
        xp: 25,
        explanation:
            "Python is a general-purpose programming language.",
        hint:
            "Ask yourself: what do we write Python code in?"
    }
},


/* =========================================================
03
========================================================= */

{
    id: "python-03",
    number: "03",
    title: "print() and Your First Programs",
    description:
        "Learn how to produce output and begin reading Python syntax.",
    xp: 100,

    sections: [

        {
            heading: "The print function",

            content: `
                <p>
                    The <strong>print()</strong> function displays information.
                </p>

                <div class="code-box">
<pre>
print("Hello World")
print(10)
print(5 + 5)
</pre>
                </div>

                <p>
                    The output is:
                </p>

                <div class="code-box">
<pre>
Hello World
10
10
</pre>
                </div>
            `
        },

        {
            heading: "Strings",

            content: `
                <p>
                    Text is commonly written inside quotation marks.
                </p>

                <div class="code-box">
<pre>
print("Python")
print('AI Forge')
</pre>
                </div>

                <p>
                    Both single and double quotation marks can be used
                    for ordinary strings.
                </p>
            `
        },

        {
            heading: "Expressions",

            content: `
                <p>
                    Python can evaluate expressions.
                </p>

                <div class="code-box">
<pre>
print(10 + 5)
print(20 - 7)
print(4 * 3)
print(20 / 5)
</pre>
                </div>

                <p>
                    Python calculates each expression and then
                    <strong>print()</strong> displays the result.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What does print() primarily do?",
        options: [
            "Displays a value",
            "Deletes Python",
            "Creates hardware",
            "Turns Python into C++"
        ],
        correct: 0,
        xp: 25,
        explanation:
            "print() sends a representation of a value to the program's standard output.",
        hint:
            "Look at what appears on the screen after print()."
    }
},


/* =========================================================
04
========================================================= */

{
    id: "python-04",
    number: "04",
    title: "Variables",
    description:
        "Learn how to store and work with values using variables.",
    xp: 120,

    sections: [

        {
            heading: "What is a variable?",

            content: `
                <p>
                    A variable is a name that refers to a value.
                </p>

                <div class="code-box">
<pre>
name = "Krishu"
age = 16
</pre>
                </div>

                <p>
                    Here, <strong>name</strong> refers to the string
                    <strong>"Krishu"</strong>, while <strong>age</strong>
                    refers to the integer <strong>16</strong>.
                </p>
            `
        },

        {
            heading: "Assignment",

            content: `
                <p>
                    The <strong>=</strong> operator performs assignment.
                    It does not mean mathematical equality in this context.
                </p>

                <div class="code-box">
<pre>
score = 10
score = 20

print(score)
</pre>
                </div>

                <p>
                    Output:
                </p>

                <div class="code-box">
<pre>
20
</pre>
                </div>
            `
        },

        {
            heading: "Naming variables",

            content: `
                <p>
                    Good names make programs easier to understand.
                </p>

                <div class="code-box">
<pre>
student_name = "Aman"
total_marks = 450
</pre>
                </div>

                <p>
                    Python convention commonly uses
                    <strong>snake_case</strong> for variable names.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What does age = 16 do?",
        options: [
            "Assigns 16 to the name age",
            "Checks whether age equals 16",
            "Prints age",
            "Deletes age"
        ],
        correct: 0,
        xp: 30,
        explanation:
            "The assignment statement makes the name age refer to the value 16.",
        hint:
            "Remember: a single = is used for assignment."
    }
},


/* =========================================================
05
========================================================= */

{
    id: "python-05",
    number: "05",
    title: "Data Types",
    description:
        "Understand integers, floats, strings, booleans and None.",
    xp: 140,

    sections: [

        {
            heading: "Why types exist",

            content: `
                <p>
                    Different values represent different kinds of information.
                    Python associates values with types.
                </p>

                <div class="code-box">
<pre>
age = 16
height = 5.8
name = "Krishu"
is_learning = True
</pre>
                </div>
            `
        },

        {
            heading: "Important basic types",

            content: `
                <div class="code-box">
<pre>
10          # int
5.8         # float
"Python"    # str
True        # bool
False       # bool
None        # NoneType
</pre>
                </div>

                <p>
                    Integers represent whole numbers.
                    Floats represent numbers with a fractional component.
                    Strings represent text.
                    Booleans represent true/false states.
                    None represents the absence of a value.
                </p>
            `
        },

        {
            heading: "Checking a type",

            content: `
                <div class="code-box">
<pre>
x = 100

print(type(x))
</pre>
                </div>

                <p>
                    <strong>type()</strong> lets us inspect the type of a value.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which type represents True and False?",
        options: [
            "str",
            "bool",
            "float",
            "list"
        ],
        correct: 1,
        xp: 30,
        explanation:
            "bool is Python's Boolean type.",
        hint:
            "The name is short for Boolean."
    }
},


/* =========================================================
06
========================================================= */

{
    id: "python-06",
    number: "06",
    title: "Input",
    description:
        "Make your programs interactive by receiving information from users.",
    xp: 140,

    sections: [

        {
            heading: "input()",

            content: `
                <p>
                    The <strong>input()</strong> function reads text entered
                    by the user.
                </p>

                <div class="code-box">
<pre>
name = input("What is your name? ")

print("Hello", name)
</pre>
                </div>
            `
        },

        {
            heading: "Important detail",

            content: `
                <p>
                    Values returned by input() are strings.
                </p>

                <div class="code-box">
<pre>
age = input("Age: ")

print(type(age))
</pre>
                </div>

                <p>
                    Even if the user types <strong>16</strong>,
                    the result is text until we convert it.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What type does input() normally return?",
        options: [
            "int",
            "float",
            "str",
            "bool"
        ],
        correct: 2,
        xp: 30,
        explanation:
            "input() returns the user's input as a string.",
        hint:
            "User input arrives as text first."
    }
},


/* =========================================================
07
========================================================= */

{
    id: "python-07",
    number: "07",
    title: "Type Conversion",
    description:
        "Convert values between compatible types using int(), float(), str() and bool().",
    xp: 150,

    sections: [

        {
            heading: "Why conversion is needed",

            content: `
                <p>
                    Suppose the user enters two numbers.
                    input() gives us strings, so directly adding them
                    can concatenate the text instead of performing arithmetic.
                </p>

                <div class="code-box">
<pre>
a = input("First: ")
b = input("Second: ")

print(a + b)
</pre>
                </div>

                <p>
                    If the user enters 10 and 20, this can produce:
                    <strong>1020</strong>.
                </p>
            `
        },

        {
            heading: "Convert to integers",

            content: `
                <div class="code-box">
<pre>
a = int(input("First: "))
b = int(input("Second: "))

print(a + b)
</pre>
                </div>

                <p>
                    Now Python receives integer values after conversion.
                </p>
            `
        },

        {
            heading: "Common conversions",

            content: `
                <div class="code-box">
<pre>
int("10")
float("5.5")
str(100)
bool(1)
</pre>
                </div>

                <p>
                    Conversions can fail when the original value is not
                    compatible with the target type.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which converts suitable text into an integer?",
        options: [
            "str()",
            "int()",
            "list()",
            "print()"
        ],
        correct: 1,
        xp: 30,
        explanation:
            "int() converts suitable values to integers.",
        hint:
            "The function name literally begins with 'int'."
    }
},


/* =========================================================
08
========================================================= */

{
    id: "python-08",
    number: "08",
    title: "Operators",
    description:
        "Learn arithmetic, assignment, comparison and logical operators.",
    xp: 160,

    sections: [

        {
            heading: "Arithmetic operators",

            content: `
                <div class="code-box">
<pre>
+     addition
-     subtraction
*     multiplication
/     division
//    floor division
%     remainder
**    exponentiation
</pre>
                </div>

                <div class="code-box">
<pre>
print(10 + 3)
print(10 - 3)
print(10 * 3)
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(2 ** 3)
</pre>
                </div>
            `
        },

        {
            heading: "Comparison operators",

            content: `
                <div class="code-box">
<pre>
==
!=
>
<
>=
<=
</pre>
                </div>

                <p>
                    Comparison expressions produce Boolean values.
                </p>

                <div class="code-box">
<pre>
age = 16

print(age >= 18)
</pre>
                </div>
            `
        },

        {
            heading: "Logical operators",

            content: `
                <div class="code-box">
<pre>
and
or
not
</pre>
                </div>

                <div class="code-box">
<pre>
age = 20
has_id = True

print(age >= 18 and has_id)
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "What does 10 % 3 return?",
        options: [
            "3",
            "1",
            "0",
            "10"
        ],
        correct: 1,
        xp: 35,
        explanation:
            "% returns the remainder after division. 10 divided by 3 leaves 1.",
        hint:
            "Think remainder, not quotient."
    }
},


/* =========================================================
09
========================================================= */

{
    id: "python-09",
    number: "09",
    title: "Strings",
    description:
        "Learn text manipulation, indexing, slicing, formatting and useful string methods.",
    xp: 180,

    sections: [

        {
            heading: "Creating strings",

            content: `
                <div class="code-box">
<pre>
name = "Python"
language = 'Python'
</pre>
                </div>
            `
        },

        {
            heading: "Indexing",

            content: `
                <p>
                    Strings are sequences of characters.
                    Python uses zero-based indexing.
                </p>

                <div class="code-box">
<pre>
word = "Python"

print(word[0])
print(word[1])
print(word[-1])
</pre>
                </div>

                <p>
                    The first character has index 0.
                    Negative indexes count from the end.
                </p>
            `
        },

        {
            heading: "Slicing",

            content: `
                <div class="code-box">
<pre>
word = "Python"

print(word[0:3])
print(word[:3])
print(word[3:])
</pre>
                </div>

                <p>
                    A slice generally uses the pattern
                    <strong>start:stop</strong>, where the stop index
                    is excluded.
                </p>
            `
        },

        {
            heading: "Useful methods",

            content: `
                <div class="code-box">
<pre>
text = "hello python"

text.upper()
text.lower()
text.replace("python", "AI")
text.strip()
text.split()
</pre>
                </div>
            `
        },

        {
            heading: "f-strings",

            content: `
                <div class="code-box">
<pre>
name = "Krishu"
age = 16

message = f"My name is {name} and I am {age}."

print(message)
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "What is the first index of a Python string?",
        options: [
            "0",
            "1",
            "-1",
            "Depends on the string"
        ],
        correct: 0,
        xp: 35,
        explanation:
            "Python uses zero-based indexing.",
        hint:
            "The first position is represented by zero."
    }
},


/* =========================================================
10
========================================================= */

{
    id: "python-10",
    number: "10",
    title: "if, elif and else",
    description:
        "Teach programs how to make decisions.",
    xp: 180,

    sections: [

        {
            heading: "Conditional execution",

            content: `
                <p>
                    Programs often need to choose between different paths.
                    Python uses <strong>if</strong>, <strong>elif</strong>
                    and <strong>else</strong>.
                </p>

                <div class="code-box">
<pre>
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
</pre>
                </div>
            `
        },

        {
            heading: "Multiple conditions",

            content: `
                <div class="code-box">
<pre>
marks = 82

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
else:
    grade = "C"

print(grade)
</pre>
                </div>
            `
        },

        {
            heading: "Indentation",

            content: `
                <p>
                    Indentation is part of Python syntax.
                    It tells Python which statements belong to a block.
                </p>

                <div class="code-box">
<pre>
if True:
    print("Inside")
    
print("Outside")
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "Which keyword checks another condition after if?",
        options: [
            "repeat",
            "elif",
            "next",
            "check"
        ],
        correct: 1,
        xp: 35,
        explanation:
            "elif means 'else if' and allows another condition to be tested.",
        hint:
            "It is Python's shortened 'else if'."
    }
},


/* =========================================================
11
========================================================= */

{
    id: "python-11",
    number: "11",
    title: "for Loops",
    description:
        "Repeat actions over sequences and ranges.",
    xp: 200,

    sections: [

        {
            heading: "Why loops?",

            content: `
                <p>
                    Repeating the same code manually is inefficient.
                    Loops allow us to execute a block repeatedly.
                </p>

                <div class="code-box">
<pre>
for i in range(5):
    print(i)
</pre>
                </div>

                <p>
                    Output:
                </p>

                <div class="code-box">
<pre>
0
1
2
3
4
</pre>
                </div>
            `
        },

        {
            heading: "Loop over a string",

            content: `
                <div class="code-box">
<pre>
for character in "AI":
    print(character)
</pre>
                </div>
            `
        },

        {
            heading: "range()",

            content: `
                <div class="code-box">
<pre>
range(5)
range(2, 6)
range(0, 10, 2)
</pre>
                </div>

                <p>
                    range() can represent a sequence of integers.
                    The stop value is excluded.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "How many times does this run? for i in range(3)",
        options: [
            "2",
            "3",
            "4",
            "Infinite"
        ],
        correct: 1,
        xp: 40,
        explanation:
            "range(3) produces 0, 1 and 2 — three values.",
        hint:
            "Remember that range stops before its endpoint."
    }
},


/* =========================================================
12
========================================================= */

{
    id: "python-12",
    number: "12",
    title: "while Loops",
    description:
        "Repeat code while a condition remains true.",
    xp: 200,

    sections: [

        {
            heading: "Basic while loop",

            content: `
                <div class="code-box">
<pre>
count = 0

while count < 5:
    print(count)
    count += 1
</pre>
                </div>

                <p>
                    The condition is checked before each iteration.
                </p>
            `
        },

        {
            heading: "Avoiding infinite loops",

            content: `
                <p>
                    A while loop can continue forever if its condition
                    never becomes false.
                </p>

                <div class="code-box">
<pre>
# Dangerous example

while True:
    print("Forever")
</pre>
                </div>

                <p>
                    Infinite loops can be intentional, but they should
                    be controlled when building normal programs.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "When does a while loop stop naturally?",
        options: [
            "When its condition becomes false",
            "After exactly one iteration",
            "Whenever Python wants",
            "Only after a restart"
        ],
        correct: 0,
        xp: 40,
        explanation:
            "A while loop continues while its condition evaluates to true.",
        hint:
            "Read the keyword: while a condition is true."
    }
},


/* =========================================================
13
========================================================= */

{
    id: "python-13",
    number: "13",
    title: "break and continue",
    description:
        "Control the behavior of loops.",
    xp: 180,

    sections: [

        {
            heading: "break",

            content: `
                <p>
                    <strong>break</strong> exits the nearest loop immediately.
                </p>

                <div class="code-box">
<pre>
for i in range(10):

    if i == 5:
        break

    print(i)
</pre>
                </div>
            `
        },

        {
            heading: "continue",

            content: `
                <p>
                    <strong>continue</strong> skips the remainder of the
                    current iteration and moves to the next one.
                </p>

                <div class="code-box">
<pre>
for i in range(5):

    if i == 2:
        continue

    print(i)
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "What does break do?",
        options: [
            "Skips one iteration",
            "Stops the current loop",
            "Restarts Python",
            "Creates another loop"
        ],
        correct: 1,
        xp: 35,
        explanation:
            "break immediately exits the nearest enclosing loop.",
        hint:
            "Think: break out of the loop."
    }
},


/* =========================================================
14
========================================================= */

{
    id: "python-14",
    number: "14",
    title: "Lists",
    description:
        "Store multiple ordered values in a mutable collection.",
    xp: 220,

    sections: [

        {
            heading: "Creating lists",

            content: `
                <div class="code-box">
<pre>
numbers = [10, 20, 30, 40]

names = [
    "Aman",
    "Raj",
    "Krishu"
]
</pre>
                </div>
            `
        },

        {
            heading: "Accessing items",

            content: `
                <div class="code-box">
<pre>
numbers = [10, 20, 30]

print(numbers[0])
print(numbers[-1])
</pre>
                </div>
            `
        },

        {
            heading: "Changing a list",

            content: `
                <div class="code-box">
<pre>
numbers = [10, 20, 30]

numbers.append(40)
numbers.remove(20)

print(numbers)
</pre>
                </div>
            `
        },

        {
            heading: "Looping through lists",

            content: `
                <div class="code-box">
<pre>
for number in numbers:
    print(number)
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "Which method adds an item to the end of a list?",
        options: [
            "append()",
            "add_end()",
            "push()",
            "insert_end()"
        ],
        correct: 0,
        xp: 40,
        explanation:
            "list.append(value) adds a value to the end of the list.",
        hint:
            "Python lists have an append method."
    }
},


/* =========================================================
15
========================================================= */

{
    id: "python-15",
    number: "15",
    title: "Tuples",
    description:
        "Understand immutable ordered collections.",
    xp: 180,

    sections: [

        {
            heading: "Creating tuples",

            content: `
                <div class="code-box">
<pre>
point = (10, 20)

rgb = (255, 120, 50)
</pre>
                </div>
            `
        },

        {
            heading: "Tuple immutability",

            content: `
                <p>
                    Tuples are immutable, meaning their elements cannot
                    normally be changed after creation.
                </p>

                <div class="code-box">
<pre>
point = (10, 20)

# point[0] = 50
# This causes an error.
</pre>
                </div>
            `
        },

        {
            heading: "When tuples are useful",

            content: `
                <p>
                    Tuples are useful when you want to represent a fixed
                    collection of values.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What is a key property of tuples?",
        options: [
            "They are immutable",
            "They can only contain numbers",
            "They are always empty",
            "They cannot be read"
        ],
        correct: 0,
        xp: 35,
        explanation:
            "Tuples are immutable sequences.",
        hint:
            "Think about whether tuple elements can be reassigned."
    }
},


/* =========================================================
16
========================================================= */

{
    id: "python-16",
    number: "16",
    title: "Sets",
    description:
        "Work with unordered collections of unique elements.",
    xp: 190,

    sections: [

        {
            heading: "Creating a set",

            content: `
                <div class="code-box">
<pre>
numbers = {1, 2, 3, 3}

print(numbers)
</pre>
                </div>

                <p>
                    Duplicate values are removed from a set.
                </p>
            `
        },

        {
            heading: "Set operations",

            content: `
                <div class="code-box">
<pre>
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # union
print(a & b)  # intersection
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "What happens to duplicate elements in a set?",
        options: [
            "They remain duplicated",
            "They are automatically unique",
            "They become strings",
            "They become lists"
        ],
        correct: 1,
        xp: 35,
        explanation:
            "A set contains unique elements.",
        hint:
            "Sets are especially useful for uniqueness."
    }
},


/* =========================================================
17
========================================================= */

{
    id: "python-17",
    number: "17",
    title: "Dictionaries",
    description:
        "Store information using key-value pairs.",
    xp: 220,

    sections: [

        {
            heading: "Key-value pairs",

            content: `
                <div class="code-box">
<pre>
student = {
    "name": "Krishu",
    "age": 16,
    "score": 92
}
</pre>
                </div>

                <p>
                    Each key maps to a value.
                </p>
            `
        },

        {
            heading: "Accessing values",

            content: `
                <div class="code-box">
<pre>
print(student["name"])
print(student["score"])
</pre>
                </div>
            `
        },

        {
            heading: "Changing values",

            content: `
                <div class="code-box">
<pre>
student["score"] = 95

student["city"] = "Jaunpur"
</pre>
                </div>
            `
        },

        {
            heading: "Looping through dictionaries",

            content: `
                <div class="code-box">
<pre>
for key, value in student.items():
    print(key, value)
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "A dictionary primarily stores what?",
        options: [
            "Only numbers",
            "Key-value pairs",
            "Only strings",
            "Machine instructions"
        ],
        correct: 1,
        xp: 40,
        explanation:
            "Dictionaries map keys to values.",
        hint:
            "Think: name → value."
    }
},


/* =========================================================
18
========================================================= */

{
    id: "python-18",
    number: "18",
    title: "Functions",
    description:
        "Create reusable blocks of code with parameters and return values.",
    xp: 250,

    sections: [

        {
            heading: "Why functions?",

            content: `
                <p>
                    Functions let us package logic into reusable units.
                    This prevents unnecessary repetition and makes programs
                    easier to organize.
                </p>
            `
        },

        {
            heading: "Creating a function",

            content: `
                <div class="code-box">
<pre>
def greet():
    print("Hello!")

greet()
</pre>
                </div>
            `
        },

        {
            heading: "Parameters",

            content: `
                <div class="code-box">
<pre>
def greet(name):
    print("Hello", name)

greet("Krishu")
</pre>
                </div>
            `
        },

        {
            heading: "return",

            content: `
                <div class="code-box">
<pre>
def add(a, b):
    return a + b

result = add(10, 20)

print(result)
</pre>
                </div>

                <p>
                    <strong>return</strong> sends a value back to the caller.
                    This is different from simply displaying a value with print().
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What does return do inside a function?",
        options: [
            "Displays text only",
            "Sends a value back to the caller",
            "Creates a loop",
            "Imports a library"
        ],
        correct: 1,
        xp: 50,
        explanation:
            "return ends the function's current execution and provides a value to the caller.",
        hint:
            "Imagine the function handing a result back to you."
    }
},


/* =========================================================
19
========================================================= */

{
    id: "python-19",
    number: "19",
    title: "Scope",
    description:
        "Understand local and global names and why scope matters.",
    xp: 220,

    sections: [

        {
            heading: "Local variables",

            content: `
                <div class="code-box">
<pre>
def test():
    x = 10
    print(x)

test()

# x is not normally available here
</pre>
                </div>

                <p>
                    The variable x is local to the function.
                </p>
            `
        },

        {
            heading: "Global variables",

            content: `
                <div class="code-box">
<pre>
x = 10

def show():
    print(x)

show()
</pre>
                </div>

                <p>
                    The function can read the global name x.
                    Avoid relying heavily on global mutable state in large programs.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Where is a normal local variable defined inside a function available?",
        options: [
            "Everywhere automatically",
            "Within its relevant local scope",
            "Only inside strings",
            "Only inside lists"
        ],
        correct: 1,
        xp: 40,
        explanation:
            "Local names belong to their local scope.",
        hint:
            "Scope determines where a name can be accessed."
    }
},


/* =========================================================
20
========================================================= */

{
    id: "python-20",
    number: "20",
    title: "Modules and Imports",
    description:
        "Organize programs and reuse code from Python modules.",
    xp: 230,

    sections: [

        {
            heading: "What is a module?",

            content: `
                <p>
                    A module is a Python file containing definitions and code
                    that can be imported into another program.
                </p>
            `
        },

        {
            heading: "Importing a module",

            content: `
                <div class="code-box">
<pre>
import math

print(math.sqrt(25))
</pre>
                </div>
            `
        },

        {
            heading: "Import specific names",

            content: `
                <div class="code-box">
<pre>
from math import sqrt

print(sqrt(36))
</pre>
                </div>
            `
        },

        {
            heading: "Why modules matter",

            content: `
                <p>
                    Real software is usually split into multiple files and
                    packages. Modules allow us to organize functionality
                    and reuse existing code.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which keyword is commonly used to load a module?",
        options: [
            "include",
            "import",
            "load",
            "module"
        ],
        correct: 1,
        xp: 40,
        explanation:
            "Python uses import statements to load modules.",
        hint:
            "The syntax is: import module_name."
    }
},


/* =========================================================
21
========================================================= */

{
    id: "python-21",
    number: "21",
    title: "Exceptions and Error Handling",
    description:
        "Learn how programs handle runtime errors using try and except.",
    xp: 250,

    sections: [

        {
            heading: "Errors happen",

            content: `
                <p>
                    Programs can encounter invalid input, missing files,
                    network failures and many other problems.
                </p>

                <div class="code-box">
<pre>
number = int("hello")
</pre>
                </div>

                <p>
                    The conversion cannot succeed and Python raises an exception.
                </p>
            `
        },

        {
            heading: "try and except",

            content: `
                <div class="code-box">
<pre>
try:
    number = int(input("Number: "))
    print(number)

except ValueError:
    print("Please enter a valid number.")
</pre>
                </div>
            `
        },

        {
            heading: "Why handle exceptions?",

            content: `
                <p>
                    Exception handling allows a program to respond gracefully
                    to expected problems rather than immediately crashing.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which block handles a matching exception?",
        options: [
            "except",
            "catch",
            "error",
            "handle"
        ],
        correct: 0,
        xp: 45,
        explanation:
            "Python uses except blocks to handle exceptions.",
        hint:
            "The syntax is try ... except."
    }
},


/* =========================================================
22
========================================================= */

{
    id: "python-22",
    number: "22",
    title: "Working with Files",
    description:
        "Read and write data using Python's file APIs.",
    xp: 250,

    sections: [

        {
            heading: "Opening a file",

            content: `
                <div class="code-box">
<pre>
with open("notes.txt", "r") as file:
    content = file.read()

print(content)
</pre>
                </div>

                <p>
                    The with statement helps ensure that the file is
                    properly managed after the block finishes.
                </p>
            `
        },

        {
            heading: "Writing",

            content: `
                <div class="code-box">
<pre>
with open("notes.txt", "w") as file:
    file.write("Hello Python")
</pre>
                </div>

                <p>
                    Be careful with write mode because it can replace
                    existing file contents.
                </p>
            `
        },

        {
            heading: "Common modes",

            content: `
                <div class="code-box">
<pre>
"r"   read
"w"   write
"a"   append
"rb"  read binary
"wb"  write binary
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "Which mode is commonly used to append to a text file?",
        options: [
            "r",
            "w",
            "a",
            "x"
        ],
        correct: 2,
        xp: 45,
        explanation:
            "The a mode appends data to the end of a file.",
        hint:
            "Think of 'append'."
    }
},


/* =========================================================
23
========================================================= */

{
    id: "python-23",
    number: "23",
    title: "Object-Oriented Programming",
    description:
        "Understand classes, objects, attributes and methods.",
    xp: 300,

    sections: [

        {
            heading: "Objects",

            content: `
                <p>
                    Object-oriented programming organizes software around
                    objects that combine data and behavior.
                </p>
            `
        },

        {
            heading: "Classes",

            content: `
                <div class="code-box">
<pre>
class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(
            f"My name is {self.name}"
        )


student = Student("Krishu", 16)

student.introduce()
</pre>
                </div>
            `
        },

        {
            heading: "Important concepts",

            content: `
                <p>
                    A class defines a structure and behavior.
                    An object is an instance of a class.
                    Attributes store object data.
                    Methods define behavior.
                </p>
            `
        },

        {
            heading: "Why OOP matters for AI",

            content: `
                <p>
                    Modern AI libraries contain many classes and objects.
                    Understanding OOP will make libraries such as PyTorch
                    much easier to understand later.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What is an object in relation to a class?",
        options: [
            "An instance of a class",
            "A Python error",
            "A loop",
            "A module"
        ],
        correct: 0,
        xp: 50,
        explanation:
            "An object is an instance created from a class.",
        hint:
            "Think of a class as a blueprint and an object as something built from it."
    }
},


/* =========================================================
24
========================================================= */

{
    id: "python-24",
    number: "24",
    title: "Iterators",
    description:
        "Understand iteration protocols and how Python obtains values one at a time.",
    xp: 280,

    sections: [

        {
            heading: "Iteration",

            content: `
                <p>
                    Iteration means processing items one at a time.
                    Python's iteration system is built around iterators.
                </p>

                <div class="code-box">
<pre>
numbers = [10, 20, 30]

iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
</pre>
                </div>
            `
        },

        {
            heading: "iter() and next()",

            content: `
                <p>
                    <strong>iter()</strong> obtains an iterator from an
                    iterable object.
                    <strong>next()</strong> requests the next value.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which function requests the next value from an iterator?",
        options: [
            "next()",
            "forward()",
            "iterate()",
            "continue()"
        ],
        correct: 0,
        xp: 40,
        explanation:
            "next(iterator) requests the next available value.",
        hint:
            "The function name tells you what it does."
    }
},


/* =========================================================
25
========================================================= */

{
    id: "python-25",
    number: "25",
    title: "Generators",
    description:
        "Learn yield and memory-efficient value generation.",
    xp: 300,

    sections: [

        {
            heading: "Why generators?",

            content: `
                <p>
                    Sometimes we do not want to create an entire collection
                    in memory at once.
                    Generators can produce values lazily.
                </p>
            `
        },

        {
            heading: "yield",

            content: `
                <div class="code-box">
<pre>
def count_up_to(n):

    i = 1

    while i <= n:

        yield i

        i += 1


for number in count_up_to(3):
    print(number)
</pre>
                </div>
            `
        },

        {
            heading: "Generator thinking",

            content: `
                <p>
                    A generator can pause at yield and continue later.
                    This becomes useful when processing large streams of data.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Which keyword is used to produce values from a generator?",
        options: [
            "yield",
            "generate",
            "return_each",
            "stream"
        ],
        correct: 0,
        xp: 45,
        explanation:
            "yield pauses generator execution and produces a value.",
        hint:
            "It is similar to return, but generators can resume afterward."
    }
},


/* =========================================================
26
========================================================= */

{
    id: "python-26",
    number: "26",
    title: "Lambda, map and filter",
    description:
        "Learn concise functions and functional-style operations.",
    xp: 280,

    sections: [

        {
            heading: "Lambda",

            content: `
                <div class="code-box">
<pre>
square = lambda x: x * x

print(square(5))
</pre>
                </div>

                <p>
                    A lambda creates a small anonymous function.
                </p>
            `
        },

        {
            heading: "map",

            content: `
                <div class="code-box">
<pre>
numbers = [1, 2, 3, 4]

squares = map(
    lambda x: x * x,
    numbers
)

print(list(squares))
</pre>
                </div>
            `
        },

        {
            heading: "filter",

            content: `
                <div class="code-box">
<pre>
numbers = [1, 2, 3, 4, 5]

even = filter(
    lambda x: x % 2 == 0,
    numbers
)

print(list(even))
</pre>
                </div>
            `
        }

    ],

    quiz: {
        question:
            "What does filter() conceptually do?",
        options: [
            "Keeps values matching a condition",
            "Deletes Python",
            "Sorts every list automatically",
            "Creates classes"
        ],
        correct: 0,
        xp: 45,
        explanation:
            "filter() keeps elements for which the filtering function is true.",
        hint:
            "Think about filtering items through a condition."
    }
},


/* =========================================================
27
========================================================= */

{
    id: "python-27",
    number: "27",
    title: "Decorators",
    description:
        "Understand functions that modify or wrap other functions.",
    xp: 320,

    sections: [

        {
            heading: "Functions are objects",

            content: `
                <p>
                    In Python, functions can be passed around like values.
                    This makes higher-order programming possible.
                </p>
            `
        },

        {
            heading: "A simple decorator",

            content: `
                <div class="code-box">
<pre>
def logger(function):

    def wrapper():

        print("Starting")

        function()

        print("Finished")

    return wrapper


@logger
def hello():

    print("Hello")


hello()
</pre>
                </div>
            `
        },

        {
            heading: "Why decorators matter",

            content: `
                <p>
                    Decorators are common in web frameworks, APIs,
                    authentication systems and other advanced Python software.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What can a decorator do?",
        options: [
            "Wrap or modify function behavior",
            "Only create integers",
            "Only open files",
            "Replace Python itself"
        ],
        correct: 0,
        xp: 50,
        explanation:
            "Decorators can wrap callable objects and alter or extend behavior.",
        hint:
            "Think of a decorator as a wrapper around a function."
    }
},


/* =========================================================
28
========================================================= */

{
    id: "python-28",
    number: "28",
    title: "Virtual Environments and Packages",
    description:
        "Understand how real Python projects isolate dependencies.",
    xp: 300,

    sections: [

        {
            heading: "Why environments?",

            content: `
                <p>
                    Different projects may require different package versions.
                    A virtual environment isolates a project's Python packages
                    from other projects.
                </p>
            `
        },

        {
            heading: "Creating an environment",

            content: `
                <div class="code-box">
<pre>
python -m venv .venv
</pre>
                </div>
            `
        },

        {
            heading: "Installing packages",

            content: `
                <div class="code-box">
<pre>
python -m pip install requests
</pre>
                </div>

                <p>
                    Later, when we build AI applications, package management
                    becomes extremely important.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "Why use a virtual environment?",
        options: [
            "To isolate project dependencies",
            "To increase monitor size",
            "To replace the CPU",
            "To automatically write all code"
        ],
        correct: 0,
        xp: 45,
        explanation:
            "Virtual environments isolate Python dependencies for projects.",
        hint:
            "Think about keeping package versions separate."
    }
},


/* =========================================================
29
========================================================= */

{
    id: "python-29",
    number: "29",
    title: "JSON and APIs",
    description:
        "Learn the data format and networking concepts used by modern applications.",
    xp: 350,

    sections: [

        {
            heading: "JSON",

            content: `
                <p>
                    JSON is a widely used text format for structured data.
                </p>

                <div class="code-box">
<pre>
{
    "name": "Krishu",
    "age": 16,
    "skills": [
        "Python",
        "AI"
    ]
}
</pre>
                </div>
            `
        },

        {
            heading: "Python and JSON",

            content: `
                <div class="code-box">
<pre>
import json

data = {
    "name": "Krishu",
    "score": 95
}

text = json.dumps(data)

print(text)
</pre>
                </div>
            `
        },

        {
            heading: "APIs",

            content: `
                <p>
                    An API provides a structured way for software systems
                    to communicate.
                </p>

                <div class="code-box">
<pre>
Your application
       ↓
HTTP request
       ↓
API server
       ↓
Response
       ↓
Your application
</pre>
                </div>

                <p>
                    APIs will become extremely important when we later
                    build AI-powered applications.
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What is JSON commonly used for?",
        options: [
            "Structured data exchange",
            "Cooling processors",
            "Compiling C++",
            "Drawing pixels"
        ],
        correct: 0,
        xp: 50,
        explanation:
            "JSON is widely used to represent and exchange structured data.",
        hint:
            "Think about APIs sending data between applications."
    }
},


/* =========================================================
30
========================================================= */

{
    id: "python-30",
    number: "30",
    title: "Python Foundation Project",
    description:
        "Combine your Python fundamentals into a real command-line project.",
    xp: 500,

    sections: [

        {
            heading: "Your mission",

            content: `
                <p>
                    Build a command-line student management program.
                </p>

                <p>
                    Your program should allow the user to:
                </p>

                <ul>
                    <li>Add a student</li>
                    <li>Store their marks</li>
                    <li>Calculate an average</li>
                    <li>Display student information</li>
                    <li>Save information to a file</li>
                    <li>Handle invalid input</li>
                </ul>
            `
        },

        {
            heading: "Concepts you should use",

            content: `
                <div class="code-box">
<pre>
Variables
Input
Type conversion
if / elif / else
Loops
Lists
Dictionaries
Functions
Exceptions
Files
JSON
</pre>
                </div>
            `
        },

        {
            heading: "Suggested architecture",

            content: `
                <div class="code-box">
<pre>
main()
│
├── add_student()
├── show_students()
├── calculate_average()
├── save_data()
├── load_data()
└── menu()
</pre>
                </div>
            `
        },

        {
            heading: "Do not copy a solution",

            content: `
                <p>
                    This project is your first checkpoint.
                    Try to build it yourself.
                    If you get stuck, write the exact problem in the
                    Doubt Center and we will eventually connect an AI tutor.
                </p>

                <p>
                    Once you can comfortably build this project,
                    you are ready for the next stage:
                    <strong>Advanced Python + Computer Science.</strong>
                </p>
            `
        }

    ],

    quiz: {
        question:
            "What should you do if you cannot solve part of the project?",
        options: [
            "Understand the problem and ask for a hint",
            "Give up immediately",
            "Delete Python",
            "Skip programming forever"
        ],
        correct: 0,
        xp: 75,
        explanation:
            "Good programmers debug, investigate and ask targeted questions.",
        hint:
            "Getting stuck is part of programming. The goal is learning how to get unstuck."
    }
}

];
