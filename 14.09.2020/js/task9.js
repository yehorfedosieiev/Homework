'use strict';

// “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. Метод appendTo с помощью jQuery или Native JS
// добавляет абзац в контейнер, переданный в параметре метода. Метод appendText может дописывать текст в добавленный элемент. Создайте массив
// строк и запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется
// соответствующий по порядку элемент массива. Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву.

alert("9.“Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. Метод appendTo с помощью jQuery или Native JS добавляет абзац в контейнер, переданный в параметре метода. Метод appendText может дописывать текст в добавленный элемент. Создайте массив строк и запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву.");

let typewriter = {
    delay: 1000,
    paragraph: "",
    appendTo (container = "body"){
        return this.paragraph = $("<p>").appendTo(container);
    },
    appendText (value){
        let arrayStr = value.split(" ");
        for(let i = 0; i < arrayStr.length; i++){
            setTimeout(function(){
                this.paragraph.append(arrayStr[i] + " ");
            }.bind(this), this.delay*i);
        }

        
    }
};

let str = "Папа курицу жуёт, мама хлеба НЕ ДАЁТ!!!"

typewriter.appendTo();
typewriter.appendText(str);