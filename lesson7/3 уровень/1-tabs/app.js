'use strict';
const texts = {
	text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
	text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let textEl = document.querySelector('.text');
let navLinkEls = document.querySelectorAll('.nav-link');
navLinkEls.forEach((link) => {
	link.addEventListener('click', clickHandler);
});


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(mouseEvent) {
	// здесь вызывайте changeText и changeActiveClass, и передавайте
	// им объект события.
	changeText(mouseEvent);
	changeActiveClass(mouseEvent);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(mouseEvent) {
	navLinkEls.forEach((link) => {
		link.classList.remove('active');
	});
	mouseEvent.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(mouseEvent) {
	let currentText = mouseEvent.target.textContent;
	switch (currentText) {
		case 'Link 1':
			textEl.innerText = texts.text1;
			break;
		case 'Link 2':
			textEl.innerText = texts.text2;
			break;
		case 'Link 3':
			textEl.innerText = texts.text3;
			break;
	}

}