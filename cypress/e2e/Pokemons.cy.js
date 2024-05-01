describe('Покупка аватара', function () {                                     // Название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {       // Название теста
         cy.visit('https://pokemonbattle.me/');                             // Переходим на сайт https://pokemonbattle.me/
         cy.get('input[type="email"]').type('USER_LOGIN');    // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');              // Вводим пароль
         cy.get('button[type="submit"]').click();                        // Нажимаем кнопку Подтвердить
         cy.get('.header__btns > [href="/shop"]').click();              // Нажимаем кнопку Магазин
         cy.get('.available > button').first().click();                // Кликаем по кнопке Купить у первого доступного аватара!!!!!!
         cy.get('.credit').type('4620869113632996');                  // вводим номер карты
         cy.get('.k_input_ccv').type('125');                         // Вводим CVV карты
         cy.get('.k_input_date').type('1225');                      // Вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                     // Вводим имя владельца действия карты
         cy.get('.pay-btn').click();                              // Нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                    // Вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();             // Нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });