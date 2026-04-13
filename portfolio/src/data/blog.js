export const blogCategories = [
  { id: "python", label: "Python", color: "var(--accent)" },
  { id: "web", label: "Web Technologies", color: "var(--accent2)" },
  { id: "react", label: "React", color: "var(--accent3)" },
  { id: "mongodb", label: "MongoDB", color: "var(--accent)" },
  { id: "sql", label: "SQL", color: "var(--accent2)" },
  { id: "php", label: "PHP", color: "var(--accent3)" },
];

export const blogTopics = [
  /* ─── PYTHON ─── */
  {
    id: "py-variables",
    category: "python",
    level: "Beginner",
    title: "Variables & Data Types",
    summary: "Understand how Python stores and types data dynamically.",
    readTime: "5 min",
    content: {
      intro: "Python is a dynamically-typed language. Variables are created when you assign a value — no declaration needed.",
      sections: [
        {
          heading: "Variables",
          body: "A variable is a name that points to a value in memory. In Python, you simply write `name = value`.",
          code: `# Creating variables\nname = "Kubin"\nage  = 22\npi   = 3.14159\nis_dev = True\n\nprint(name, age, pi, is_dev)`,
        },
        {
          heading: "Built-in Data Types",
          body: "Python has several built-in types: int, float, str, bool, list, tuple, dict, set, and NoneType.",
          code: `x = 10          # int\ny = 3.14        # float\ns = "hello"     # str\nb = True        # bool\nlst = [1,2,3]   # list\ntup = (1,2)     # tuple\ndct = {"a":1}   # dict\nst  = {1,2,3}   # set\nn   = None      # NoneType\n\nprint(type(x))  # <class 'int'>`,
        },
        {
          heading: "Type Conversion",
          body: "You can convert between types using int(), float(), str(), list(), etc.",
          code: `s = "42"\nn = int(s)        # 42 (int)\nf = float(s)      # 42.0\nback = str(n)     # "42"\n\nprint(type(n))    # <class 'int'>`,
        },
      ],
      tips: ["Use snake_case for variable names.", "Constants are written in ALL_CAPS by convention.", "type() tells you the type of any value."],
    },
  },
  {
    id: "py-operators",
    category: "python",
    level: "Beginner",
    title: "Operators",
    summary: "Arithmetic, comparison, logical, and bitwise operators in Python.",
    readTime: "6 min",
    content: {
      intro: "Operators let you perform computations, compare values, and combine boolean expressions.",
      sections: [
        {
          heading: "Arithmetic Operators",
          body: "Python supports all standard math operations plus integer division (//) and exponentiation (**).",
          code: `a, b = 10, 3\nprint(a + b)   # 13\nprint(a - b)   # 7\nprint(a * b)   # 30\nprint(a / b)   # 3.333...\nprint(a // b)  # 3  (floor)\nprint(a % b)   # 1  (mod)\nprint(a ** b)  # 1000 (power)`,
        },
        {
          heading: "Comparison & Logical",
          body: "Comparison operators return bool. Logical operators combine conditions.",
          code: `x = 5\nprint(x > 3)          # True\nprint(x == 5)         # True\nprint(x != 4)         # True\n\nprint(x > 3 and x < 10)  # True\nprint(x < 3 or x == 5)   # True\nprint(not (x == 5))       # False`,
        },
      ],
      tips: ["// always rounds toward negative infinity.", "Use is for identity comparison, == for value equality."],
    },
  },
  {
    id: "py-conditions",
    category: "python",
    level: "Beginner",
    title: "Conditions (if / elif / else)",
    summary: "Control program flow based on boolean conditions.",
    readTime: "5 min",
    content: {
      intro: "Conditional statements let your program make decisions. Python uses indentation (4 spaces) to define blocks.",
      sections: [
        {
          heading: "if / elif / else",
          code: `score = 75\n\nif score >= 90:\n    grade = "A"\nelif score >= 75:\n    grade = "B"\nelif score >= 60:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(grade)  # B`,
        },
        {
          heading: "Ternary (Conditional Expression)",
          code: `age = 20\nstatus = "adult" if age >= 18 else "minor"\nprint(status)  # adult`,
        },
        {
          heading: "match (Python 3.10+)",
          code: `command = "quit"\n\nmatch command:\n    case "start":\n        print("Starting...")\n    case "stop" | "quit":\n        print("Stopping.")\n    case _:\n        print("Unknown command")`,
        },
      ],
      tips: ["Python has no switch statement before 3.10 — use elif chains.", "match/case supports structural pattern matching."],
    },
  },
  {
    id: "py-loops",
    category: "python",
    level: "Beginner",
    title: "Loops (for & while)",
    summary: "Iterate over sequences and repeat actions with for and while loops.",
    readTime: "7 min",
    content: {
      intro: "Loops are how you repeat code. Python has two loop constructs: for (iterate over a sequence) and while (loop while a condition holds).",
      sections: [
        {
          heading: "for Loop",
          code: `# Iterate over a list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# range()\nfor i in range(5):      # 0,1,2,3,4\n    print(i)\n\nfor i in range(2, 10, 2):  # 2,4,6,8\n    print(i)`,
        },
        {
          heading: "while Loop",
          code: `count = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# break and continue\nfor n in range(10):\n    if n == 3:\n        continue     # skip 3\n    if n == 7:\n        break        # stop at 7\n    print(n)`,
        },
        {
          heading: "List Comprehension",
          code: `# Traditional loop\nsquares = []\nfor x in range(1, 6):\n    squares.append(x ** 2)\n\n# Comprehension (same result)\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# With condition\nevens = [x for x in range(20) if x % 2 == 0]`,
        },
      ],
      tips: ["Prefer list comprehensions for simple transformations.", "enumerate() gives index + value: for i, v in enumerate(lst)."],
    },
  },
  {
    id: "py-functions",
    category: "python",
    level: "Intermediate",
    title: "Functions",
    summary: "Define reusable code blocks, work with arguments, and understand scope.",
    readTime: "8 min",
    content: {
      intro: "Functions are the building blocks of reusable code. Python functions are first-class objects — you can pass them around like values.",
      sections: [
        {
          heading: "Defining Functions",
          code: `def greet(name, greeting="Hello"):\n    """Return a greeting string."""\n    return f"{greeting}, {name}!"\n\nprint(greet("Kubin"))          # Hello, Kubin!\nprint(greet("Kubin", "Hi"))    # Hi, Kubin!`,
        },
        {
          heading: "*args and **kwargs",
          code: `def total(*numbers):\n    return sum(numbers)\n\nprint(total(1, 2, 3, 4))  # 10\n\ndef describe(**info):\n    for k, v in info.items():\n        print(f"{k}: {v}")\n\ndescribe(name="Kubin", role="Developer")`,
        },
        {
          heading: "Lambda Functions",
          code: `double = lambda x: x * 2\nprint(double(5))   # 10\n\n# Useful with sorted()\npeople = [{"name":"Bob","age":30},{"name":"Ana","age":25}]\nsorted_p = sorted(people, key=lambda p: p["age"])\nprint(sorted_p)`,
        },
      ],
      tips: ["Always write docstrings for public functions.", "Return None implicitly if no return statement.", "Use type hints for better readability: def add(a: int, b: int) -> int."],
    },
  },
  {
    id: "py-oop",
    category: "python",
    level: "Advanced",
    title: "OOP — Classes & Inheritance",
    summary: "Object-oriented programming in Python with classes, inheritance, and dunder methods.",
    readTime: "12 min",
    content: {
      intro: "Python is a multi-paradigm language with excellent OOP support. Classes let you bundle data and behaviour into reusable objects.",
      sections: [
        {
          heading: "Defining a Class",
          code: `class Developer:\n    species = "Homo sapiens"  # class attr\n\n    def __init__(self, name, lang):\n        self.name = name    # instance attr\n        self.lang = lang\n\n    def __repr__(self):\n        return f"Developer({self.name!r}, {self.lang!r})"\n\n    def greet(self):\n        return f"Hi, I'm {self.name} and I code in {self.lang}."\n\ndev = Developer("Kubin", "Python")\nprint(dev.greet())`,
        },
        {
          heading: "Inheritance",
          code: `class BackendDev(Developer):\n    def __init__(self, name, framework):\n        super().__init__(name, "Python")\n        self.framework = framework\n\n    def stack(self):\n        return f"{self.lang} + {self.framework}"\n\nkd = BackendDev("Kubin", "Django")\nprint(kd.stack())    # Python + Django\nprint(kd.greet())    # inherited`,
        },
        {
          heading: "Dunder Methods & Properties",
          code: `class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __add__(self, other):\n        return Vector(self.x+other.x, self.y+other.y)\n\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\n    @property\n    def magnitude(self):\n        return (self.x**2 + self.y**2) ** 0.5\n\nv = Vector(3,4)\nprint(v.magnitude)   # 5.0`,
        },
      ],
      tips: ["Use @dataclass for simple data containers.", "@staticmethod and @classmethod have distinct purposes.", "Prefer composition over inheritance when possible."],
    },
  },
  {
    id: "py-decorators",
    category: "python",
    level: "Advanced",
    title: "Decorators",
    summary: "Understand decorators, closures, and functools.wraps.",
    readTime: "10 min",
    content: {
      intro: "Decorators are a powerful Python feature that lets you modify or extend the behaviour of functions without changing their source code.",
      sections: [
        {
          heading: "How Decorators Work",
          code: `def log(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        result = func(*args, **kwargs)\n        print(f"{func.__name__} returned {result}")\n        return result\n    return wrapper\n\n@log\ndef add(a, b):\n    return a + b\n\nadd(2, 3)\n# Calling add\n# add returned 5`,
        },
        {
          heading: "functools.wraps",
          code: `from functools import wraps\n\ndef timer(func):\n    import time\n    @wraps(func)     # preserves metadata\n    def wrapper(*a, **kw):\n        t = time.perf_counter()\n        r = func(*a, **kw)\n        print(f"{func.__name__} took {time.perf_counter()-t:.4f}s")\n        return r\n    return wrapper`,
        },
      ],
      tips: ["Django's @login_required is a decorator.", "You can stack multiple decorators on one function.", "Class-based decorators are possible too."],
    },
  },

  /* ─── WEB TECHNOLOGIES ─── */
  {
    id: "web-html5",
    category: "web",
    level: "Beginner",
    title: "HTML5 Fundamentals",
    summary: "Structure web pages with semantic HTML5 elements.",
    readTime: "6 min",
    content: {
      intro: "HTML is the skeleton of every web page. HTML5 introduced semantic elements that describe the meaning of content.",
      sections: [
        {
          heading: "Semantic Structure",
          code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <header>\n    <nav>...</nav>\n  </header>\n  <main>\n    <article>...</article>\n    <aside>...</aside>\n  </main>\n  <footer>...</footer>\n</body>\n</html>`,
        },
        {
          heading: "Forms",
          code: `<form action="/submit" method="POST">\n  <input type="text" name="username" placeholder="Username" required>\n  <input type="email" name="email">\n  <input type="password" name="pwd" minlength="8">\n  <button type="submit">Sign Up</button>\n</form>`,
        },
      ],
      tips: ["Use semantic elements for SEO and accessibility.", "Always add alt text to images.", "Use <label> elements linked to inputs."],
    },
  },
  {
    id: "web-css3",
    category: "web",
    level: "Beginner",
    title: "CSS3 & Flexbox / Grid",
    summary: "Style and layout web pages with modern CSS3.",
    readTime: "8 min",
    content: {
      intro: "CSS3 brings powerful layout tools (Flexbox, Grid), animations, custom properties, and more.",
      sections: [
        {
          heading: "Flexbox",
          code: `.container {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.item {\n  flex: 1 1 200px;  /* grow shrink basis */\n}`,
        },
        {
          heading: "CSS Grid",
          code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n\n.span-2 {\n  grid-column: span 2;\n}`,
        },
        {
          heading: "Custom Properties (Variables)",
          code: `:root {\n  --primary: #5640ff;\n  --bg: #f8f9ff;\n  --radius: 12px;\n}\n\n.btn {\n  background: var(--primary);\n  border-radius: var(--radius);\n}`,
        },
      ],
      tips: ["Use CSS variables for theming.", "Grid for 2D layouts, Flexbox for 1D.", "clamp() for fluid typography."],
    },
  },

  /* ─── REACT ─── */
  {
    id: "react-hooks",
    category: "react",
    level: "Intermediate",
    title: "React Hooks (useState, useEffect)",
    summary: "Manage state and side effects in function components.",
    readTime: "9 min",
    content: {
      intro: "Hooks let you use state and other React features in function components, replacing class components for most use cases.",
      sections: [
        {
          heading: "useState",
          code: `import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(c => c + 1)}>+</button>\n      <button onClick={() => setCount(c => c - 1)}>-</button>\n    </div>\n  );\n}`,
        },
        {
          heading: "useEffect",
          code: `import { useState, useEffect } from "react";\n\nfunction DataFetcher({ url }) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    let cancelled = false;\n    fetch(url)\n      .then(r => r.json())\n      .then(d => { if (!cancelled) setData(d); });\n    return () => { cancelled = true; }; // cleanup\n  }, [url]); // re-run when url changes\n\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}`,
        },
      ],
      tips: ["Functional updates (setCount(c => c+1)) are safer in async code.", "Empty dependency array [] = run once on mount.", "Always clean up subscriptions and timers in useEffect."],
    },
  },
  {
    id: "react-router",
    category: "react",
    level: "Intermediate",
    title: "React Router v6",
    summary: "Client-side routing with React Router DOM.",
    readTime: "8 min",
    content: {
      intro: "React Router v6 is the de-facto routing library for React SPAs. It uses a declarative API with JSX route definitions.",
      sections: [
        {
          heading: "Basic Setup",
          code: `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </nav>\n      <Routes>\n        <Route path="/"      element={<Home />} />\n        <Route path="/about" element={<About />} />\n        <Route path="/blog/:id" element={<BlogPost />} />\n        <Route path="*"      element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}`,
        },
        {
          heading: "useParams & useNavigate",
          code: `import { useParams, useNavigate } from "react-router-dom";\n\nfunction BlogPost() {\n  const { id } = useParams();\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <p>Post ID: {id}</p>\n      <button onClick={() => navigate(-1)}>Back</button>\n    </div>\n  );\n}`,
        },
      ],
      tips: ["Use <Outlet> for nested routes.", "NavLink gives an 'active' class automatically.", "loader and action in v6.4+ (data router) are powerful."],
    },
  },

  /* ─── SQL ─── */
  {
    id: "sql-basics",
    category: "sql",
    level: "Beginner",
    title: "SQL Fundamentals",
    summary: "SELECT, INSERT, UPDATE, DELETE — the core SQL operations.",
    readTime: "8 min",
    content: {
      intro: "SQL (Structured Query Language) is the standard language for relational databases. PostgreSQL, MySQL, and SQLite all use SQL.",
      sections: [
        {
          heading: "CRUD Operations",
          code: `-- SELECT\nSELECT name, email FROM users WHERE active = true ORDER BY name;\n\n-- INSERT\nINSERT INTO users (name, email) VALUES ('Kubin', 'k@dev.com');\n\n-- UPDATE\nUPDATE users SET email = 'new@dev.com' WHERE id = 1;\n\n-- DELETE\nDELETE FROM users WHERE id = 1;`,
        },
        {
          heading: "JOINs",
          code: `-- INNER JOIN\nSELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.total > 100;\n\n-- LEFT JOIN (includes users without orders)\nSELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name;`,
        },
      ],
      tips: ["Use indexes on columns you filter or sort by.", "EXPLAIN ANALYZE shows query execution plans.", "Avoid SELECT * in production queries."],
    },
  },
  {
    id: "sql-advanced",
    category: "sql",
    level: "Advanced",
    title: "Window Functions & CTEs",
    summary: "Advanced SQL with window functions, CTEs, and query optimization.",
    readTime: "11 min",
    content: {
      intro: "Window functions and CTEs are some of the most powerful SQL features for complex analytical queries.",
      sections: [
        {
          heading: "Window Functions",
          code: `-- ROW_NUMBER, RANK, DENSE_RANK\nSELECT\n  name,\n  salary,\n  RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rank_in_dept,\n  AVG(salary) OVER (PARTITION BY dept) AS dept_avg\nFROM employees;`,
        },
        {
          heading: "CTEs (WITH clause)",
          code: `WITH monthly_sales AS (\n  SELECT\n    DATE_TRUNC('month', created_at) AS month,\n    SUM(total) AS revenue\n  FROM orders\n  GROUP BY 1\n),\nranked AS (\n  SELECT *, RANK() OVER (ORDER BY revenue DESC) AS rnk\n  FROM monthly_sales\n)\nSELECT * FROM ranked WHERE rnk <= 3;`,
        },
      ],
      tips: ["Recursive CTEs can traverse tree/graph structures.", "Window functions don't reduce row count unlike GROUP BY.", "MATERIALIZED CTEs can improve performance by caching intermediate results."],
    },
  },

  /* ─── MONGODB ─── */
  {
    id: "mongo-basics",
    category: "mongodb",
    level: "Beginner",
    title: "MongoDB Fundamentals",
    summary: "Documents, collections, CRUD, and basic querying.",
    readTime: "8 min",
    content: {
      intro: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like BSON documents.",
      sections: [
        {
          heading: "CRUD with pymongo",
          code: `from pymongo import MongoClient\n\nclient = MongoClient("mongodb://localhost:27017/")\ndb = client["mydb"]\ncol = db["users"]\n\n# Insert\ncol.insert_one({"name": "Kubin", "age": 22})\n\n# Find\nfor u in col.find({"age": {"$gt": 18}}):\n    print(u)\n\n# Update\ncol.update_one({"name":"Kubin"}, {"$set":{"age":23}})\n\n# Delete\ncol.delete_one({"name": "Kubin"})`,
        },
        {
          heading: "Aggregation Pipeline",
          code: `pipeline = [\n  {"$match": {"status": "active"}},\n  {"$group": {\n    "_id": "$department",\n    "count": {"$sum": 1},\n    "avg_salary": {"$avg": "$salary"}\n  }},\n  {"$sort": {"count": -1}}\n]\n\nresults = col.aggregate(pipeline)`,
        },
      ],
      tips: ["Use indexes on frequently queried fields.", "The aggregation pipeline is more powerful than find() for analytics.", "Use .explain() to debug slow queries."],
    },
  },
];
