describe('Тестирование формы логина', function () {
    it('Позитивный тест на верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
 })
})


describe('Тестирование формы логина', function () {
    it('Тест восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('arabica85@yandex.ru');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('arabica85@yandex.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#message').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');


 })
})

describe('Тестирование формы логина', function () {
    it('Негативный тест на верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio123');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина');
        })
    })

    describe('Тестирование формы логина', function () {
        it('Негативный тест на неверный логин и верный пароль', function () {
             cy.visit('https://login.qa.studio/');
             cy.get('#mail').type('german@dolnikov777.ru');
             cy.get('#pass').type('iLoveqastudio1');
             cy.get('#loginButton').click();
             cy.get('#message').contains('Такого логина или пароля нет');
             cy.get('#exitMessageButton > .exitIcon').click();
             cy.contains('Форма логина');
            })
        })
      
        describe('Тестирование формы логина', function () {
            it('Негативный тест на логин без @ и верный пароль', function () {
                 cy.visit('https://login.qa.studio/');
                 cy.get('#mail').type('germandolnikov.ru');
                 cy.get('#pass').type('iLoveqastudio1');
                 cy.get('#loginButton').click();
                 cy.get('#message').contains('Нужно исправить проблему валидации');
                 cy.get('#exitMessageButton > .exitIcon').click();
                 cy.contains('Форма логина');
                })
            })
        
            describe('Тестирование формы логина', function () {
                it('Проверка на привидение к строчным буквам в логине', function () {
                     cy.visit('https://login.qa.studio/');
                     cy.get('#mail').type('GerMan@Dolnikov.ru');
                     cy.get('#pass').type('iLoveqastudio1');
                     cy.get('#loginButton').click();
                     cy.get('#message').contains('Такого логина или пароля нет');
                     cy.get('#exitMessageButton > .exitIcon').click();
                     cy.contains('Форма логина');
                    })
                })

               