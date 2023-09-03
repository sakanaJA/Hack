let commands = [
    "ユーザー名確認中... ",
    "PWを解析中... ",
    "データベースにアクセス中... ",
    "システム情報を取得中... ",
    "セキュリティバイパス中... ",
    "完了! ",
    '\n'

];

function startHacking() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        let commandLine = document.querySelector(".command-line");
        commandLine.textContent = `UserName: ${username}\nPassWord: ${"*".repeat(password.length)}\n`;

        setTimeout(() => {
            typeCommand(commandLine);
        }, 1000);
    } else {
        alert("ユーザー名とPWを入力してください。");
    }
}

let currentCommand = 0;
let currentChar = 0;

function typeCommand(commandLine) {
    if (currentChar < commands[currentCommand].length) {
        commandLine.textContent += commands[currentCommand][currentChar];
        currentChar++;
        setTimeout(() => {
            typeCommand(commandLine);
        }, Math.random() * 100 + 50);
    } else {
        currentCommand++;
        if (currentCommand < commands.length) {
            currentChar = 0;
            commandLine.textContent += '\n';
            setTimeout(() => {
                typeCommand(commandLine);
            }, 1000);
        }
    }
}
let pythonCodeSnippets = [
  '\n',
  "for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()",
  "for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()",
  "for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()","for i in range(999):",
  "    print(i)",
  "def Haku_world():",
  "    return 'Haku, World!'",
  "data = [x**2 for x in range(10)]",
  "if name == 'main':",
  "    main()",
  "class User:",
  "    def __init__(self, name):",
  "        self.name = name",
  "import math",
  "result = math.sqrt(16)",
  "with open('file.txt', 'r') as f:",
  "    content = f.read()"  
];

function getRandomPythonCode() {
  return pythonCodeSnippets[Math.floor(Math.random() * pythonCodeSnippets.length)];
}

function typeRandomPythonCode(commandLine) {
  commandLine.textContent += getRandomPythonCode() + '\n'; 
  if (commandLine.textContent.length < 1000) { 
      setTimeout(() => {
          typeRandomPythonCode(commandLine);
      }, 300); 
  }
}

function typeCommand(commandLine) {
  if (currentChar < commands[currentCommand].length) {
      commandLine.textContent += commands[currentCommand][currentChar];
      currentChar++;
      setTimeout(() => {
          typeCommand(commandLine);
      }, Math.random() * 100 + 50);
  } else {
      currentCommand++;
      if (currentCommand < commands.length) {
          currentChar = 0;
          commandLine.textContent += '\n';
          setTimeout(() => {
              typeCommand(commandLine);
          }, 1000);
      } else {
          typeRandomPythonCode(commandLine); 
      }
  }
}