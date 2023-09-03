const commands = [
  "ユーザー名確認中...",
  "PWを解析中...",
  "データベースにアクセス中...",
  "システム情報を取得中...",
  "セキュリティバイパス中...",
  "Complete",
  "",
  "",
  ""
];

let currentCommand = 0;
let currentChar = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCode() {
  const structures = [
      "function ${name}() {",
      "let ${name} = ${value};",
      "if (${name} == ${value}) {",
      "for (let i = 0; i < ${value}; i++) {",
      "${name}();",
      "return ${value};",
      "console.log('${name}');",
      "}",
      "}"
  ];

  const names = ["data", "item", "value", "temp", "result", "info", "user", "config"];
  const values = ["0", "1", "'sample'", "true", "false", "i", "[]", "{}"];

  let structure = structures[getRandomInt(0, structures.length - 1)];
  structure = structure.replace("${name}", names[getRandomInt(0, names.length - 1)]);
  structure = structure.replace("${value}", values[getRandomInt(0, values.length - 1)]);

  return structure;
}

function typeRandomCode(commandLine) {
  const randomCode = generateRandomCode() + '\n';
  commandLine.textContent += randomCode;

  const rect = commandLine.getBoundingClientRect();

  if (rect.height > window.innerHeight) {
      const lines = commandLine.textContent.split('\n');
      lines.shift();
      commandLine.textContent = lines.join('\n');
  }

  setTimeout(() => {
      typeRandomCode(commandLine);
  }, getRandomInt(50, 200));
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
          typeRandomCode(commandLine);
      }
  }
}

function startHacking() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let commandLine = document.querySelector(".command-line");

  if (username && password) {
      commandLine.textContent = `ユーザー名: ${username}\nPW: ${"*".repeat(password.length)}\n`;
      setTimeout(() => {
          typeCommand(commandLine);
      }, 1000);
  } else {
      alert("ユーザー名とPWを入力してください。");
  }
}
