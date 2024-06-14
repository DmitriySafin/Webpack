// Получаем необходимые элементы из HTML
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const contentContainer = document.querySelector(".container");

// Функция для обработки входа пользователя
function handleLogin(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    // Условие для проверки логина, например "user123"
    if (username === "Ivan" || username === "Dima" || username === "Semen" || username === "Syleman") {
        alert("Вход выполнен успешно!");
        loginForm.style.display = "none";
        contentContainer.style.display = "block"; // Показываем контент
    } else {
        alert("Неверный логин. Попробуйте еще раз.");
    }
}

// Добавляем обработчик события для формы входа
loginForm.addEventListener("submit", handleLogin);

const russianAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"; // Русский алфавит для шифрования

// Функция для шифрования текста с использованием шифра Цезаря
function encryptText(text, shift) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (russianAlphabet.includes(char)) {
      const charIndex = russianAlphabet.indexOf(char);
      const shiftedIndex = (charIndex + shift) % russianAlphabet.length;
      encryptedText += russianAlphabet[shiftedIndex] + " ";
    } else {
      encryptedText += text[i];
    }
  }
  return encryptedText.trim();
}

// Функция для шифрования текста с шифром Цезаря и выводом результата
function handleEncrypt() {
  const inputText = textInput.value;
  const shiftAmount = 14; // Задаем сдвиг для шифра Цезаря (например, 3)
  const encryptedText = encryptText(inputText, shiftAmount);
  encryptedTextPara.textContent = "Зашифрованный текст " + encryptedText;
}

encryptBtn.addEventListener("click", handleEncrypt);
// Функция для расшифровки текста с использованием шифра Цезаря
function decryptText(text, shift) {
  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (russianAlphabet.includes(char)) {
      const charIndex = russianAlphabet.indexOf(char);
      let shiftedIndex = charIndex - shift;
      if (shiftedIndex < 0) {
        shiftedIndex = russianAlphabet.length + shiftedIndex;
      }
      decryptedText += russianAlphabet[shiftedIndex] + " ";
    } else {
      decryptedText += text[i];
    }
  }
  return decryptedText.trim();
}

// Обработчик события для расшифровки текста при нажатии на кнопку
function handleDecrypt() {
  const inputText = encryptedTextInput.value;
  const shiftAmount = 14; // Задаем сдвиг для расшифровки
  const decryptedText = decryptText(inputText, shiftAmount);
  decryptedTextPara.textContent = decryptedText;
}

// Получаем необходимые элементы из HTML
const encryptedTextInput = document.getElementById("encryptedTextInput");
const decryptBtn = document.getElementById("decryptBtn");
const decryptedTextPara = document.getElementById("decryptedTextPara");

// Добавляем обработчик события для кнопки расшифровки
decryptBtn.addEventListener("click", handleDecrypt);