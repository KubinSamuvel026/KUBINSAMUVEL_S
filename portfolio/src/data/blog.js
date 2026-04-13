export const blogCategories = [
  { id: "python-basics", label: "Python Basics" },
  { id: "operators", label: "Operators" },
  { id: "control-flow", label: "Control Flow" },
  { id: "loops", label: "Loops" },
  { id: "data-structures", label: "Data Structures" },
  { id: "functions", label: "Functions" },
  { id: "oop", label: "Object Oriented Programming" },
  { id: "modules", label: "Modules & Packages" },
  { id: "files", label: "File Handling" },
  { id: "exceptions", label: "Exception Handling" },
  { id: "advanced", label: "Advanced Python" },
   { id: "internet-basics", label: "Internet Basics" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "javascript-basics", label: "JavaScript Basics" },
  { id: "dom", label: "DOM" },
  { id: "web-apis", label: "Web APIs" },
  { id: "browser-concepts", label: "Browser Concepts" },
  { id: "react-basics", label: "React Basics" },
  { id: "components", label: "React Components" },
  { id: "jsx", label: "JSX" },
  { id: "props", label: "Props" },
  { id: "state", label: "State" },
  { id: "hooks", label: "Hooks" },
  { id: "events", label: "Events" },
  { id: "routing", label: "Routing" },
  { id: "state-management", label: "State Management" },
  { id: "performance", label: "Performance" },

];

export const blogTopics = [
{
id: "what-is-python",
title: "What is Python",
category: "python-basics",
level: "Beginner",
readTime: "5 min",
summary: "Introduction to Python programming and why it is widely used.",
content: {
intro:
"Python is one of the most popular programming languages in the world. It is known for its simple syntax and readability, making it ideal for beginners.",

sections: [
{
heading: "Introduction",
body:
"Python is a high-level programming language created to make programming easier and more readable. It is widely used in web development, automation, data science, artificial intelligence, and many other fields."
},
{
heading: "Why Python is Important",
body:
"Python is beginner-friendly and has a huge ecosystem of libraries. Many companies such as Google, Instagram, and Netflix use Python."
},
{
heading: "Example Code",
code:
`print("Hello Python")
print("Welcome to programming")`
},
{
heading: "Explanation",
body:
"This program uses the print() function to display text on the screen. Python executes code line by line."
}
],
tips: [
"Python syntax is simple and readable",
"Always practice writing small programs",
"Use print() frequently when learning"
]
}
},

{
id: "python-installation",
title: "Python Installation & Setup",
category: "python-basics",
level: "Beginner",
readTime: "6 min",
summary: "How to install Python and configure your development environment.",
content: {
intro:
"Before writing Python programs, you must install Python and set up your development environment.",

sections: [
{
heading: "Download Python",
body:
"Visit python.org and download the latest version of Python for your operating system."
},
{
heading: "Install Python",
body:
"Run the installer and make sure to check 'Add Python to PATH' during installation."
},
{
heading: "Verify Installation",
code:
`python --version`
},
{
heading: "Explanation",
body:
"This command checks if Python is installed correctly on your system."
}
],
tips: [
"Always install the latest stable version",
"Use VS Code or PyCharm for development",
"Ensure Python is added to PATH"
]
}
},

{
id: "python-variables",
title: "Python Variables",
category: "python-basics",
level: "Beginner",
readTime: "5 min",
summary: "Understanding how variables store data in Python.",
content: {
intro:
"A variable is a container used to store data in a program.",

sections: [
{
heading: "What is a Variable",
body:
"In Python, variables store values such as numbers, text, or objects."
},
{
heading: "Creating Variables",
code:
`name = "Sam"
age = 22
print(name)
print(age)`
},
{
heading: "Explanation",
body:
"The variable 'name' stores text and 'age' stores a number."
}
],
tips: [
"Use meaningful variable names",
"Do not start variable names with numbers",
"Use lowercase with underscores"
]
}
},

{
id: "arithmetic-operators",
title: "Arithmetic Operators",
category: "operators",
level: "Beginner",
readTime: "6 min",
summary: "Using mathematical operations in Python.",
content: {
intro:
"Arithmetic operators allow Python programs to perform mathematical calculations.",

sections: [
{
heading: "Basic Arithmetic Operators",
body:
"Python supports addition, subtraction, multiplication, division, and modulus."
},
{
heading: "Example",
code:
`a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)`
},
{
heading: "Explanation",
body:
"These operators perform mathematical operations on numbers."
}
],
tips: [
"Use parentheses for complex calculations",
"Division returns float values",
"Use // for integer division"
]
}
},

{
id: "python-if-else",
title: "if elif else",
category: "control-flow",
level: "Beginner",
readTime: "6 min",
summary: "Conditional statements used for decision making.",
content: {
intro:
"Conditional statements allow programs to make decisions based on conditions.",

sections: [
{
heading: "Basic Syntax",
code:
`age = 18

if age >= 18:
    print("Adult")
else:
    print("Minor")`
},
{
heading: "Explanation",
body:
"The program checks the condition and prints a result based on it."
}
],
tips: [
"Indentation is very important in Python",
"Use elif for multiple conditions",
"Conditions must evaluate to True or False"
]
}
},

{
id: "python-loops",
title: "Python for Loop",
category: "loops",
level: "Beginner",
readTime: "6 min",
summary: "Using loops to repeat actions in Python.",
content: {
intro:
"A loop allows you to repeat a block of code multiple times.",

sections: [
{
heading: "Example",
code:
`for i in range(5):
    print(i)`
},
{
heading: "Explanation",
body:
"This loop prints numbers from 0 to 4."
}
],
tips: [
"Loops reduce repetitive code",
"range() is commonly used in loops",
"Avoid infinite loops"
]
}
},

{
id: "python-lists",
title: "Python Lists",
category: "data-structures",
level: "Beginner",
readTime: "7 min",
summary: "Lists store multiple values in a single variable.",
content: {
intro:
"A list is a collection data type that stores multiple items in order.",

sections: [
{
heading: "Creating a List",
code:
`fruits = ["apple", "banana", "orange"]
print(fruits)`
},
{
heading: "Explanation",
body:
"A list can contain multiple values separated by commas."
}
],
tips: [
"Lists are mutable",
"Use indexing to access items",
"Lists can store different data types"
]
}
},

{
id: "python-functions",
title: "Python Functions",
category: "functions",
level: "Intermediate",
readTime: "8 min",
summary: "Functions help organize reusable code blocks.",
content: {
intro:
"A function is a reusable block of code used to perform a task.",

sections: [
{
heading: "Function Example",
code:
`def greet(name):
    print("Hello", name)

greet("Sam")`
},
{
heading: "Explanation",
body:
"The function greet() takes a parameter and prints a message."
}
],
tips: [
"Functions improve code readability",
"Functions prevent code repetition",
"Always give functions meaningful names"
]
}
},

{
id: "python-oop",
title: "Python Classes and Objects",
category: "oop",
level: "Intermediate",
readTime: "10 min",
summary: "Object oriented programming using classes and objects.",
content: {
intro:
"OOP allows programs to model real world objects using classes.",

sections: [
{
heading: "Example Class",
code:
`class Person:
    def __init__(self, name):
        self.name = name

p = Person("Sam")
print(p.name)`
},
{
heading: "Explanation",
body:
"The class defines a blueprint for objects."
}
],
tips: [
"Classes represent objects",
"Use __init__ as constructor",
"OOP improves code structure"
]
}
},

{
id: "python-decorators",
title: "Python Decorators",
category: "advanced",
level: "Advanced",
readTime: "10 min",
summary: "Decorators modify the behavior of functions.",
content: {
intro:
"A decorator is a function that modifies another function.",

sections: [
{
heading: "Example",
code:
`def decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper`
},
{
heading: "Explanation",
body:
"The decorator wraps another function and adds extra behavior."
}
],
tips: [
"Decorators are commonly used in frameworks",
"They improve code reuse",
"Useful for logging and authentication"
]
}
},

];