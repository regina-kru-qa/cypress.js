import * as data from "../helpers/default_data.json"
import * as result_page from "../locators/result_page.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашли на сайт
          });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); // Проверка, что кнопка крестик есть и видна пользователю
           });

    it('Верный логин и верный пароль', function () {
         cy.get(main_page.email).type(data.login); // Ввели правильный логин
         cy.get(main_page.password).type(data.password); // Ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажали кнопку войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что после авт-ии показан текст
         cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
        })
       
        it('Восстановление пароля', function () {
            cy.get(main_page.fogot_pass_btn).click(); // Нажали на кнопку "Забыл пароль"
            cy.get(recovery_page.email).type(data.login); // Ввели верный логин
            cy.get(recovery_page.send_button).click(); // Нажали кнопку войти
            cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверка, что после авт-ии показан текст
            cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
 
     })

     it('Верный логин и неверный пароль', function () {
        cy.get(main_page.email).type(data.login); // Ввели правильный логин
        cy.get(main_page.password).type('iLoveqastudio10'); // Ввели неверный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что после авт-ии показан текст
        cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
       })

       it('Неверный логин и верный пароль', function () { 
        cy.get(main_page.email).type('german@dolnikovich.ru'); // Ввели неправильный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что после авт-ии показан текст
        cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
       })
 
       it('Логин без @ и верный пароль', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // Ввели неправильный логин, без @ 
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что после авт-ии показан текст
        cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
       })

       it('Приведение к строчным буквам в логине и верный пароль', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввели логин с приведением к строчным буквам  
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажали кнопку войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что после авт-ии показан текст
        cy.get(result_page.title).should('be.visible'); // Проверка, что этот текст виден
       })

     })


// Найти поле логин и ввести верный логи
// Найти поле пароль и ввести верынй пароль
// Найти кнопку войти и нажать на нее
// Проверить, что авторизация прошла успешно
     