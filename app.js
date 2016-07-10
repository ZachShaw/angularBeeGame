angular.module('beeApp', [])

.controller('mainController', function($scope) {

	$scope.centerText = 'text-align:center'

	// Instantiating enemy bees
	spawnBees = function() {
		var enemyBees = [];
		createQueenBee = function() {
			return {
				type: 'queenBee',
				health: 100,
				damageValue: -8
			}
		};
		createWorkerBee = function() {
			return {
				type: 'workerBee',
				health: 75,
				damageValue: -10
			}
		};
		createDroneBee = function() {
			return {
				type: 'droneBee',
				health: 50,
				damageValue: -12
			}
		};
	  	enemyBees.push(createQueenBee());
		for (var i = 0; i < 5; i++) {
			enemyBees.push(createWorkerBee());
		}
		for (var i = 0; i < 8; i++) {
			enemyBees.push(createDroneBee());
		}
		return enemyBees;
	};

	$scope.enemyBees = spawnBees();

	$scope.resetGame = function() {
		$scope.enemyBees = spawnBees();
	}

	// Attacking random bee
	$scope.damage = function() {
		var i = parseInt(Math.random()*($scope.enemyBees.length));
		$scope.enemyBees[i].health = $scope.enemyBees[i].health + $scope.enemyBees[i].damageValue;
		if ($scope.enemyBees[i].type === 'queenBee' && $scope.enemyBees[i].health <= 0 ) {
			// Do something that insinuates the game is now over
		}
		else if ($scope.enemyBees[i].type !== 'queenBee' && $scope.enemyBees[i].health <= 0 ) {
			$scope.enemyBees.splice(i, 1);
		}
	}
});
