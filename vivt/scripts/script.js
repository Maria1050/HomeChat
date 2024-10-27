
    //Регистрация 
   const btnRegister = document.getElementById('btnLogin').addEventListener('click', function() {
  const name = document.getElementById('textRegister').value;
  const lastName = document.getElementById('textRegister').value;
  const email = document.getElementById('textRegister').value;
  const phoneNumber = document.getElementById('textRegister').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role-select').value;

    if (textRegister === "" || password === "") {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  if (password.length < 8) {
    alert("Пароль должен содержать не менее 8 символов.");
    return;
  }

  fetch('https://api.example.com/register', {// вместо этой ссылки адрес сервера, это для примера вставила
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      password: password,
      role:role
    })
  })
  .then(response => {
    if(response.ok && role == Admin) {
      alert('Регистрация прошла успешно!');
      window.location.replace("file:///C:/Users/Maria/Desktop/vivt/panel_admin_main_page.html");
      } 
       else {
      alert('Произошла ошибка при регистрации');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

   .then(response => {
    if(response.ok && role == User) {
      alert('Регистрация прошла успешно!');
      window.location.replace("file:///C:/Users/Maria/Desktop/vivt/panel_user.html");
      } 
       else {
      alert('Произошла ошибка при регистрации');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

  //Авторизация
  const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', () => {
      const name = document.getElementById('textLogin').value;
      const password = document.getElementById('password').value;
      const userName=name;


       // Проверка логина и пароля(авторизация)
    if (name != "" && password != "" && role == Admin) { 
        alert('Успешный вход!');
        window.location.replace("file:///C:/Users/Maria/Desktop/vivt/panel_admin_main_page.html"); 
    } else if (name != "" && password != "" && role == User) {
        alert('Успешный вход!');
        window.location.replace("file:///C:/Users/Maria/Desktop/vivt/panel_user.html")
    }
    else {
        alert('Неверные логин или пароль. Попробуйте снова.');
    }


});


  
  // Логика обработки отправки заявки
  const submitButton = document.querySelector(".button");
  submitButton.addEventListener("click", function() {
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById('message').value;
    
    // Проверка введенных данных
    if(userName.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    else if (userName != "" && email != "" && message != "") { 
            alert("Заявка отправлена!");
        }
    else{
      alert("Ошибка");
    }
  });

// Предположим, что данные администратора приходят в формате JSON из базы данных
const adminData = {
    firstName: "Иван",
    lastName: "Иванов"
};

// Ищем соответствующие элементы на странице об админе
const adminFirstName = document.getElementById("adminFirstName");
const adminLastName = document.getElementById("adminLastName");

// Вставляем данные администратора в соответствующие окошки
adminFirstName.textContent = adminData.firstName;
adminLastName.textContent = adminData.lastName;

//Получение информации о пользователе из базы данных
 document.addEventListener("DOMContentLoaded", function() {
  // Получение информации о пользователе из базы данных, для примера написала об пользователе иване
  const userData = {
    firstName: "Иван",
    lastName: "Иванов",
    email: "test@example.com",
    phoneNumber: "+7 (999) 999-99-99"
};

//Ищем соответствующие элементы на странице о пользователе
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userEmail = document.getElementById("userEmail");
const userPhoneNumber = document.getElementById("userPhoneNumber");

// Вставляем данные пользователя в соответствующие окошки
userFirstName.textContent = userData.firstName;
userLastName.textContent = userData.lastName;
userEmail.textContent = userData.email;
userPhoneNumber.textContent = userData.phoneNumber;


