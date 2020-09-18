let game = {
	/**
	 * Запускает игру.
	 */
	run() {
			// Бесконечный цикл
			while (true) {
				// Получаем направление от игрока.
				const direction = mover.getDirection();

				// Если игрок сказал что хочет выйти, то игра заканчивается.
				if (direction === null) {
					console.log("Игра окончена.");
					return;
				}
				// Получаем следующую точку пользователя в зависимости от направления.
				const nextPoint = mover.getNextPosition(direction);

				renderer.clear();
				player.move(nextPoint);
				renderer.render();

			}
		},

		// Этот метод выполняется при открытии страницы.
		init() {
			console.log("Ваше положение на поле в виде о.");
			// Отображаем нашу игру.
			renderer.render();
			console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
		}
	};

game.init();