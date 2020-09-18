let mover = {
	/**
	 * Получает и отдает направление от пользователя.
	 * @returns {int} Возвращаем направление, введенное пользователем.
	 */
	getDirection() {
		// Доступные значения ввода.
		const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

		while (true) {
			// Получаем от пользователя направление.
			let direction = parseInt(prompt('Введите направление, куда вы хотите переместиться, "Отмена" для выхода.'));
			if (isNaN(direction)) {
				return null;
			}
			// Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
			// и начинаем новую итерацию.
			if (!availableDirections.includes(direction)) {
				alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
				continue;
			}

			// Если пользователь ввел корректное значение - отдаем его.
			return direction;
		}
	},

	/**
	 * Отдает следующую точку в которой будет находиться пользователь после движения.
	 * @param {int} direction Направление движения игрока.
	 * @returns {{x: int, y: int}} Следующая позиция игрока.
	 */
	getNextPosition(direction) {
		// Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
		const nextPosition = {
			x: player.x,
			y: player.y,
		};
		// Определяем направление и обновляем местоположение игрока в зависимости от направления.

		function increaseY() {
			if (player.y < config.rowsCount - 1) {
				nextPosition.y++;
			}
		}

		function decreaseY() {
			if (player.y > 0) {
				nextPosition.y--;
			}
		}

		function increaseX() {
			if (player.x < config.colsCount - 1) {
				nextPosition.x++;
			}
		}

		function decreaseX() {
			if (player.x > 0) {
				nextPosition.x--;
			}
		}

		switch (direction) {
			case 1:
				increaseY();
				decreaseX();
				break
			case 2:
				increaseY();
				break;
			case 3:
				increaseY();
				increaseX();
				break;
			case 4:
				decreaseX();
				break;
			case 6:
				increaseX();
				break;
			case 7:
				decreaseY();
				decreaseX();
				break;
			case 8:
				decreaseY();
				break;
			case 9:
				decreaseY();
				increaseX();
				break;
		}

		return nextPosition;
	},
};