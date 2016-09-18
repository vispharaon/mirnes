'use strict';

app.controller('IndexController', function IndexController($scope, $location, $anchorScroll, $timeout, AuthenticationService){
	var vm = this;
	$scope.navShow = vm.dataLoading;
	//$scope.stan = [];

	$scope.pointsNo = 0;
	$scope.idShow = false;

	init();

	function init(){
		//loadAllStans();		
	}

	$scope.logout = function()
	{
		AuthenticationService.ClearCredentials();
		window.location = "#/home";
	}
	/*function loadAllStans(){
		Stans.query(function(stans){
			//console.log(stans);
			var stanObj = 
			{
				id: 0,
				lokacija: 0,
				namjesten: 0,
				brojSoba: 0,
				telefon: 0,
				email: 0,
				cijena: 0,
				dodatnoOpis: 0,
				grijanje: 0,
				balkon: 0,
				kucaZgrada: 0,
				points: 0,
			};

			var stansV2 = [];

			angular.forEach(stans, function(item, key, eachStan) {		    
			    countPoints(item);
			    stanObj = item;		    
				stanObj.points = $scope.pointsNo;			
				stansV2.push(stanObj);
			});


	        $scope.allStans = stansV2;		
				//$scope.allStans = stans;
			});
	}*/

	/*$scope.addStan = function(){
		var stanObj = 
		{
			//id: $scope.stan.id,
			lokacija: $scope.stan.lokacija,
			namjesten: $scope.stan.namjesten,
			brojSoba: $scope.stan.brojSoba,
			telefon: $scope.stan.telefon,
			email: $scope.stan.email,
			cijena: $scope.stan.cijena,
			dodatnoOpis: $scope.stan.dodatnoOpis,
			grijanje: $scope.stan.grijanje,
			balkon: $scope.stan.balkon,
			kucaZgrada: $scope.stan.kucaZgrada,
		};

		Stans.save(stanObj);

		var item = $scope.stan
		countPoints(item);
		item.points = $scope.pointsNo;
		$scope.allStans.push(item);
		
		console.log($scope.stan);
		$scope.stan =  [];
	}

	$scope.updateStan = function(){

		console.log($scope.stan.id);

		var upd = Stans.get({id: $scope.stan.id}, function(){

			upd.lokacija = $scope.stan.lokacija;
			upd.namjesten = $scope.stan.namjesten;
			upd.brojSoba = $scope.stan.brojSoba;
			upd.telefon = $scope.stan.telefon;
			upd.email = $scope.stan.email;
			upd.cijena = $scope.stan.cijena;
			upd.dodatnoOpis = $scope.stan.dodatnoOpis;
			upd.grijanje = $scope.stan.grijanje;
			upd.balkon = $scope.stan.balkon;
			upd.kucaZgrada = $scope.stan.kucaZgrada;

			upd.$update(function(){
				//nesto ovdje;
				//console.log($scope.allStans);
				loadAllStans();
				
				$location.hash('top');
				$anchorScroll();
			});
			
			//$timeout(loadAllStans(), 2000, true);			
		});
	}


	$scope.openStan = function openStan(){

		console.log(this.stan);
		$scope.stan.id = this.stan.id;
		$scope.stan.lokacija = this.stan.lokacija;
		$scope.stan.brojSoba = this.stan.brojSoba;
		$scope.stan.namjesten = this.stan.namjesten;
		$scope.stan.email = this.stan.email;
		$scope.stan.telefon = this.stan.telefon;
		$scope.stan.cijena = this.stan.cijena;
		$scope.stan.dodatnoOpis = this.stan.dodatnoOpis;
		$scope.stan.grijanje = this.stan.grijanje;
		$scope.stan.balkon = this.stan.balkon;
		$scope.stan.kucaZgrada = this.stan.kucaZgrada;

		// set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
	}

	$scope.deleteStan = function deleteStan(){
		console.log(this.stan);
		var idToDelete = this.stan.id;
		$scope.allStans.splice($scope.allStans.indexOf(this.stan), 1);

		var deletedStan = Stans.get({id: idToDelete}, function(){
			deletedStan.$delete(function(){
				//Poslije brisanja - naloadati ponovo podatke?
			});
		});
		
	}*/

	function countPoints(item){
		    	$scope.pointsNo = 0;
		    	//Lokacija
		    	if(item.lokacija.match('Centar') || item.lokacija.match('Grbavica') || item.lokacija.match('Kampus') || item.lokacija.match('Marijin Dvor') || item.lokacija.match('Mejtas'))
		    	{
		    		$scope.pointsNo += 4;
		    	}
		    	else if(item.lokacija.match('Pofalici') || item.lokacija.match('Skenderija'))
		    	{
		    		$scope.pointsNo += 3;
		    	}
		    	else if(item.lokacija.match('Hrasno') || item.lokacija.match('Vila') || item.lokacija.match('Malta') || item.lokacija.match('Socijalno') || item.lokacija.match('Jezero'))
		    	{
		    		$scope.pointsNo += 2;
		    	}
		    	else if(item.lokacija === '')
		    	{
		    		//nista
		    	}
		    	else
		    	{
		    		$scope.pointsNo += 1;
		    	}
		    	//*Broj soba
		    	if(item.brojSoba.match('Jednoiposoban') || item.brojSoba.match('Dvosoban'))
		    	{
		    		$scope.pointsNo += 2;
		    	}
		    	else if(item.brojSoba.match('Jednosoban'))
		    	{
		    		$scope.pointsNo += 1;
		    	}
		    	//Namjesten
		    	if(item.namjesten.match('Namjesten'))
		    	{
		    		$scope.pointsNo += 2;
		    	}
		    	else if(item.namjesten.match('Polunamjesten'))
		    	{
		    		$scope.pointsNo += 1;
		    	}
		    	//cijena
		    	if(item.cijena <= 350 && item.cijena >= 300)
		    	{
		    		$scope.pointsNo += 1;
		    	}
		    	else if(item.cijena < 300 && item.cijena >= 250)
		    	{
		    		$scope.pointsNo += 2;
		    	}
		    	else if(item.cijena < 250 && item.cijena > 0)
		    	{
		    		$scope.pointsNo += 3;
		    	}
		    	//Kuca zgrada
		    	if(item.kucaZgrada.match('Zgrada'))
		    	{
		    		$scope.pointsNo += 1;
		    	}
		    	//grijanje
		    	if(item.grijanje.match('Centralno'))
		    	{
		    		$scope.pointsNo += 1;
		    	}

			};

});