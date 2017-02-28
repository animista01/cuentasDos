angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicPopup, $timeout, $ionicLoading, Users, Pagos) {	
  $ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  // $scope.esto = [{"id":1,"name":"Test"},{"id":2,"name":"Roque"},{"id":3,"name":"Sandoval"},{"id":4,"name":"Orellanos"},{"id":6,"name":"Maria 3235000"},{"id":8,"name":"Durango 380000"},{"id":9,"name":"Julio Hno 1460000"},{"id":10,"name":"Pocho"},{"id":11,"name":"Bryan 1114000"},{"id":12,"name":"mami 3000000"}] 
  // $scope.aquello = [{"id":1,"user_id":2,"abono":100000,"saldo":100000,"fecha_pago":"2011-12-17"},{"id":2,"user_id":2,"abono":100000,"saldo":200000,"fecha_pago":"2012-01-15"},{"id":3,"user_id":2,"abono":100000,"saldo":300000,"fecha_pago":"2012-02-17"},{"id":4,"user_id":2,"abono":100000,"saldo":400000,"fecha_pago":"2012-03-19"},{"id":5,"user_id":2,"abono":100000,"saldo":500000,"fecha_pago":"2012-04-18"},{"id":6,"user_id":2,"abono":100,"saldo":600,"fecha_pago":"2012-06-02"},{"id":7,"user_id":2,"abono":100,"saldo":700,"fecha_pago":"2012-07-03"},{"id":8,"user_id":2,"abono":100,"saldo":800,"fecha_pago":"2012-08-01"},{"id":9,"user_id":2,"abono":100,"saldo":900,"fecha_pago":"2012-09-04"},{"id":10,"user_id":2,"abono":50,"saldo":950000,"fecha_pago":"2012-10-07"},{"id":11,"user_id":2,"abono":150,"saldo":1100000,"fecha_pago":"2012-11-19"},{"id":12,"user_id":2,"abono":150,"saldo":1250000,"fecha_pago":"2013-01-03"},{"id":13,"user_id":2,"abono":100,"saldo":1350000,"fecha_pago":"2013-02-20"},{"id":14,"user_id":2,"abono":200,"saldo":1550000,"fecha_pago":"2013-04-07"},{"id":15,"user_id":2,"abono":100,"saldo":1650000,"fecha_pago":"2013-10-10"},{"id":16,"user_id":2,"abono":150000,"saldo":1800000,"fecha_pago":"2013-12-03"},{"id":17,"user_id":2,"abono":70000,"saldo":1870000,"fecha_pago":"2014-01-23"},{"id":18,"user_id":2,"abono":200,"saldo":2070000,"fecha_pago":"2014-03-19"},{"id":19,"user_id":2,"abono":150000,"saldo":2220000,"fecha_pago":"2014-06-02"},{"id":20,"user_id":2,"abono":150000,"saldo":2370000,"fecha_pago":"2014-07-01"},{"id":21,"user_id":2,"abono":100,"saldo":2470000,"fecha_pago":"2014-10-07"},{"id":22,"user_id":3,"abono":70000,"saldo":70000,"fecha_pago":"2012-11-02"},{"id":23,"user_id":3,"abono":50,"saldo":120,"fecha_pago":"2012-12-17"},{"id":24,"user_id":3,"abono":150,"saldo":270000,"fecha_pago":"2013-01-02"},{"id":25,"user_id":3,"abono":60000,"saldo":330000,"fecha_pago":"2013-01-31"},{"id":26,"user_id":3,"abono":70000,"saldo":400,"fecha_pago":"2013-02-22"},{"id":27,"user_id":3,"abono":50,"saldo":450,"fecha_pago":"2013-04-23"},{"id":28,"user_id":3,"abono":50,"saldo":500,"fecha_pago":"2013-05-14"},{"id":29,"user_id":3,"abono":70,"saldo":570,"fecha_pago":"2013-06-20"},{"id":30,"user_id":3,"abono":70,"saldo":640000,"fecha_pago":"2013-08-06"},{"id":31,"user_id":3,"abono":50,"saldo":690,"fecha_pago":"2013-08-30"},{"id":32,"user_id":3,"abono":70,"saldo":760,"fecha_pago":"2013-09-17"},{"id":33,"user_id":3,"abono":70,"saldo":830,"fecha_pago":"2013-12-06"},{"id":34,"user_id":3,"abono":100,"saldo":930,"fecha_pago":"2013-12-27"},{"id":35,"user_id":3,"abono":150000,"saldo":1080000,"fecha_pago":"2014-04-16"},{"id":36,"user_id":3,"abono":50,"saldo":1130000,"fecha_pago":"2014-04-23"},{"id":37,"user_id":3,"abono":50,"saldo":1180000,"fecha_pago":"2014-07-02"},{"id":38,"user_id":3,"abono":50,"saldo":1230000,"fecha_pago":"2014-07-17"},{"id":39,"user_id":3,"abono":100,"saldo":1330000,"fecha_pago":"2014-09-19"},{"id":40,"user_id":4,"abono":150,"saldo":150000,"fecha_pago":"2012-09-20"},{"id":41,"user_id":4,"abono":150,"saldo":300000,"fecha_pago":"2012-11-06"},{"id":42,"user_id":4,"abono":90000,"saldo":390000,"fecha_pago":"2013-04-18"},{"id":43,"user_id":4,"abono":100,"saldo":490000,"fecha_pago":"2013-08-13"},{"id":44,"user_id":4,"abono":120,"saldo":610000,"fecha_pago":"2013-08-17"},{"id":45,"user_id":4,"abono":100,"saldo":710000,"fecha_pago":"2014-10-10"},{"id":49,"user_id":6,"abono":200,"saldo":200000,"fecha_pago":"2013-09-11"},{"id":50,"user_id":6,"abono":100000,"saldo":300000,"fecha_pago":"2014-04-04"},{"id":51,"user_id":6,"abono":200,"saldo":500000,"fecha_pago":"2014-09-10"},{"id":52,"user_id":6,"abono":90000,"saldo":590000,"fecha_pago":"2014-09-10"},{"id":54,"user_id":6,"abono":100,"saldo":690000,"fecha_pago":"2014-10-23"},{"id":55,"user_id":3,"abono":100,"saldo":1430000,"fecha_pago":"2014-10-24"},{"id":56,"user_id":6,"abono":100,"saldo":790000,"fecha_pago":"2014-11-05"},{"id":57,"user_id":2,"abono":200000,"saldo":2570000,"fecha_pago":"2014-12-03"},{"id":58,"user_id":3,"abono":150000,"saldo":1530000,"fecha_pago":"2014-12-04"},{"id":59,"user_id":2,"abono":100000,"saldo":2670000,"fecha_pago":"2015-02-15"},{"id":61,"user_id":8,"abono":60000,"saldo":320000,"fecha_pago":"2015-03-11"},{"id":62,"user_id":2,"abono":100000,"saldo":2770000,"fecha_pago":"2015-03-18"},{"id":63,"user_id":3,"abono":150,"saldo":1680000,"fecha_pago":"2015-02-15"},{"id":67,"user_id":3,"abono":100000,"saldo":1780000,"fecha_pago":"2015-03-21"},{"id":68,"user_id":3,"abono":100,"saldo":1880000,"fecha_pago":"2015-05-08"},{"id":69,"user_id":6,"abono":100,"saldo":890000,"fecha_pago":"2015-05-09"},{"id":71,"user_id":2,"abono":100000,"saldo":2870000,"fecha_pago":"2015-05-24"},{"id":72,"user_id":9,"abono":100000,"saldo":960000,"fecha_pago":"2015-09-19"},{"id":74,"user_id":10,"abono":100000,"saldo":790000,"fecha_pago":"2015-09-09"},{"id":75,"user_id":3,"abono":200000,"saldo":2080000,"fecha_pago":"2015-08-14"},{"id":76,"user_id":4,"abono":200000,"saldo":910000,"fecha_pago":"2015-08-05"},{"id":77,"user_id":2,"abono":100,"saldo":2970000,"fecha_pago":"2015-07-25"},{"id":78,"user_id":11,"abono":200000,"saldo":914000,"fecha_pago":"2015-09-05"},{"id":79,"user_id":6,"abono":100,"saldo":990000,"fecha_pago":"2015-10-09"},{"id":80,"user_id":12,"abono":500000,"saldo":2500000,"fecha_pago":"2015-09-10"},{"id":81,"user_id":12,"abono":400000,"saldo":2100000,"fecha_pago":"2015-10-08"},{"id":82,"user_id":2,"abono":100,"saldo":3070000,"fecha_pago":"2015-10-16"},{"id":83,"user_id":9,"abono":200,"saldo":1160000,"fecha_pago":"2015-10-18"}] 

  $scope.esto = [{"id":1,"name":"Test"},{"id":2,"name":"Roque"},{"id":3,"name":"Sandoval"},{"id":4,"name":"Orellanos"},{"id":6,"name":"Maria 3235000"},{"id":8,"name":"Durango 380000"},{"id":9,"name":"Julio Hno 1460000"},{"id":10,"name":"Pocho"},{"id":13,"name":"Navin 433000"},{"id":14,"name":"Eliana 530000 20-6-15"},{"id":15,"name":"Carolina 650000 9-7-15"},{"id":16,"name":"Elkin 450000 9-7-15"},{"id":18,"name":"Yadira 420000"}];
  $scope.aquello = [{"id":1,"abono":100000,"fecha_pago":"2011-12-17","saldo":100000,"user_id":2},{"id":2,"abono":100000,"fecha_pago":"2012-01-15","saldo":200000,"user_id":2},{"id":3,"abono":100000,"fecha_pago":"2012-02-17","saldo":300000,"user_id":2},{"id":4,"abono":100000,"fecha_pago":"2012-03-19","saldo":400000,"user_id":2},{"id":5,"abono":100000,"fecha_pago":"2012-04-18","saldo":500000,"user_id":2},{"id":6,"abono":100,"fecha_pago":"2012-06-02","saldo":600,"user_id":2},{"id":7,"abono":100,"fecha_pago":"2012-07-03","saldo":700,"user_id":2},{"id":8,"abono":100,"fecha_pago":"2012-08-01","saldo":800,"user_id":2},{"id":9,"abono":100,"fecha_pago":"2012-09-04","saldo":900,"user_id":2},{"id":10,"abono":50,"fecha_pago":"2012-10-07","saldo":950000,"user_id":2},{"id":11,"abono":150,"fecha_pago":"2012-11-19","saldo":1100000,"user_id":2},{"id":12,"abono":150,"fecha_pago":"2013-01-03","saldo":1250000,"user_id":2},{"id":13,"abono":100,"fecha_pago":"2013-02-20","saldo":1350000,"user_id":2},{"id":14,"abono":200,"fecha_pago":"2013-04-07","saldo":1550000,"user_id":2},{"id":15,"abono":100,"fecha_pago":"2013-10-10","saldo":1650000,"user_id":2},{"id":16,"abono":150000,"fecha_pago":"2013-12-03","saldo":1800000,"user_id":2},{"id":17,"abono":70000,"fecha_pago":"2014-01-23","saldo":1870000,"user_id":2},{"id":18,"abono":200,"fecha_pago":"2014-03-19","saldo":2070000,"user_id":2},{"id":19,"abono":150000,"fecha_pago":"2014-06-02","saldo":2220000,"user_id":2},{"id":20,"abono":150000,"fecha_pago":"2014-07-01","saldo":2370000,"user_id":2},{"id":21,"abono":100,"fecha_pago":"2014-10-07","saldo":2470000,"user_id":2},{"id":22,"abono":70000,"fecha_pago":"2012-11-02","saldo":70000,"user_id":3},{"id":23,"abono":50,"fecha_pago":"2012-12-17","saldo":120,"user_id":3},{"id":24,"abono":150,"fecha_pago":"2013-01-02","saldo":270000,"user_id":3},{"id":25,"abono":60000,"fecha_pago":"2013-01-31","saldo":330000,"user_id":3},{"id":26,"abono":70000,"fecha_pago":"2013-02-22","saldo":400,"user_id":3},{"id":27,"abono":50,"fecha_pago":"2013-04-23","saldo":450,"user_id":3},{"id":28,"abono":50,"fecha_pago":"2013-05-14","saldo":500,"user_id":3},{"id":29,"abono":70,"fecha_pago":"2013-06-20","saldo":570,"user_id":3},{"id":30,"abono":70,"fecha_pago":"2013-08-06","saldo":640000,"user_id":3},{"id":31,"abono":50,"fecha_pago":"2013-08-30","saldo":690,"user_id":3},{"id":32,"abono":70,"fecha_pago":"2013-09-17","saldo":760,"user_id":3},{"id":33,"abono":70,"fecha_pago":"2013-12-06","saldo":830,"user_id":3},{"id":34,"abono":100,"fecha_pago":"2013-12-27","saldo":930,"user_id":3},{"id":35,"abono":150000,"fecha_pago":"2014-04-16","saldo":1080000,"user_id":3},{"id":36,"abono":50,"fecha_pago":"2014-05-23","saldo":1130000,"user_id":3},{"id":37,"abono":50,"fecha_pago":"2014-07-02","saldo":1180000,"user_id":3},{"id":38,"abono":50,"fecha_pago":"2014-07-17","saldo":1230000,"user_id":3},{"id":39,"abono":100,"fecha_pago":"2014-09-19","saldo":1330000,"user_id":3},{"id":40,"abono":150,"fecha_pago":"2012-09-20","saldo":150000,"user_id":4},{"id":41,"abono":150,"fecha_pago":"2012-11-06","saldo":300000,"user_id":4},{"id":42,"abono":90000,"fecha_pago":"2013-04-18","saldo":390000,"user_id":4},{"id":43,"abono":100,"fecha_pago":"2013-08-13","saldo":490000,"user_id":4},{"id":44,"abono":120,"fecha_pago":"2013-08-17","saldo":610000,"user_id":4},{"id":45,"abono":100,"fecha_pago":"2014-10-10","saldo":710000,"user_id":4},{"id":49,"abono":200,"fecha_pago":"2013-09-11","saldo":200000,"user_id":6},{"id":50,"abono":100000,"fecha_pago":"2014-04-04","saldo":300000,"user_id":6},{"id":51,"abono":200,"fecha_pago":"2014-09-10","saldo":500000,"user_id":6},{"id":52,"abono":90000,"fecha_pago":"2014-09-10","saldo":590000,"user_id":6},{"id":54,"abono":100,"fecha_pago":"2014-10-23","saldo":690000,"user_id":6},{"id":55,"abono":100,"fecha_pago":"2014-10-24","saldo":1430000,"user_id":3},{"id":56,"abono":100,"fecha_pago":"2014-11-05","saldo":790000,"user_id":6},{"id":57,"abono":200000,"fecha_pago":"2014-12-03","saldo":2570000,"user_id":2},{"id":58,"abono":150000,"fecha_pago":"2014-12-04","saldo":1530000,"user_id":3},{"id":59,"abono":100000,"fecha_pago":"2015-02-15","saldo":2670000,"user_id":2},{"id":61,"abono":60000,"fecha_pago":"2015-03-11","saldo":320000,"user_id":8},{"id":62,"abono":100000,"fecha_pago":"2015-03-18","saldo":2770000,"user_id":2},{"id":63,"abono":150,"fecha_pago":"2015-02-15","saldo":1680000,"user_id":3},{"id":67,"abono":100000,"fecha_pago":"2015-03-21","saldo":1780000,"user_id":3},{"id":68,"abono":100,"fecha_pago":"2015-05-08","saldo":1880000,"user_id":3},{"id":69,"abono":100,"fecha_pago":"2015-05-09","saldo":890000,"user_id":6},{"id":71,"abono":100000,"fecha_pago":"2015-05-24","saldo":2870000,"user_id":2},{"id":72,"abono":100000,"fecha_pago":"2015-09-19","saldo":960000,"user_id":9},{"id":74,"abono":100000,"fecha_pago":"2015-09-09","saldo":1270000,"user_id":10},{"id":75,"abono":100000,"fecha_pago":"2015-06-27","saldo":1980000,"user_id":3},{"id":76,"abono":200000,"fecha_pago":"2015-08-05","saldo":910000,"user_id":4},{"id":77,"abono":100,"fecha_pago":"2015-07-25","saldo":2970000,"user_id":2},{"id":79,"abono":100,"fecha_pago":"2015-10-09","saldo":990000,"user_id":6},{"id":82,"abono":100,"fecha_pago":"2015-10-16","saldo":3070000,"user_id":2},{"id":83,"abono":200,"fecha_pago":"2015-10-18","saldo":760000,"user_id":9},{"id":85,"abono":50000,"fecha_pago":"2015-07-18","saldo":2030000,"user_id":3},{"id":86,"abono":50000,"fecha_pago":"2015-08-14","saldo":2080000,"user_id":3},{"id":87,"abono":70000,"fecha_pago":"2015-10-20","saldo":2150000,"user_id":3},{"id":88,"abono":50000,"fecha_pago":"2015-10-29","saldo":2200000,"user_id":3},{"id":89,"abono":100,"fecha_pago":"2015-11-04","saldo":1090000,"user_id":6},{"id":91,"abono":70000,"fecha_pago":"2015-11-28","saldo":2270000,"user_id":3},{"id":92,"abono":150,"fecha_pago":"2015-12-02","saldo":610000,"user_id":9},{"id":93,"abono":100000,"fecha_pago":"2015-12-19","saldo":510000,"user_id":9},{"id":94,"abono":100000,"fecha_pago":"2015-12-15","saldo":3170000,"user_id":2},{"id":95,"abono":50000,"fecha_pago":"2015-12-18","saldo":2320000,"user_id":3},{"id":96,"abono":300000,"fecha_pago":"2015-12-25","saldo":1210000,"user_id":4},{"id":97,"abono":50000,"fecha_pago":"2016-01-17","saldo":2370000,"user_id":3},{"id":98,"abono":50,"fecha_pago":"2016-02-16","saldo":2420000,"user_id":3},{"id":99,"abono":70000,"fecha_pago":"2016-03-01","saldo":440000,"user_id":9},{"id":100,"abono":800000,"fecha_pago":"2016-03-09","saldo":2010000,"user_id":4},{"id":101,"abono":80000,"fecha_pago":"2016-04-07","saldo":360000,"user_id":9},{"id":102,"abono":100,"fecha_pago":"2016-05-24","saldo":260,"user_id":9},{"id":103,"abono":50,"fecha_pago":"2016-05-01","saldo":2470000,"user_id":3},{"id":104,"abono":100,"fecha_pago":"2016-05-27","saldo":2570000,"user_id":3},{"id":105,"abono":567000,"fecha_pago":"2016-06-01","saldo":1000000,"user_id":13},{"id":106,"abono":100000,"fecha_pago":"2016-03-31","saldo":3270000,"user_id":2},{"id":107,"abono":100,"fecha_pago":"2016-06-30","saldo":1400000,"user_id":17},{"id":108,"abono":500000,"fecha_pago":"2016-07-01","saldo":700000,"user_id":4},{"id":109,"abono":100,"fecha_pago":"2016-07-05","saldo":2670000,"user_id":3},{"id":110,"abono":500,"fecha_pago":"2016-07-10","saldo":1590000,"user_id":6},{"id":111,"abono":50,"fecha_pago":"2016-07-07","saldo":370000,"user_id":18},{"id":112,"abono":100,"fecha_pago":"2016-07-20","saldo":600000,"user_id":4},{"id":113,"abono":100000,"fecha_pago":"2016-08-12","saldo":3370000,"user_id":2}];

  $timeout(function() {
		// allUsers = Users.all();
		// allUsers.then(function (res) {
  //     console.log(JSON.stringify(res))
		// 	$scope.users = res;
	 //    $ionicLoading.hide();
		// }, function (err) {
		// 	$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		// });

    // aa = Users.insertAll($scope.esto);
    // aa.then(function (res) {
    // }, function (err) {
    //   $ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    // });

    // aaa = Users.insertAllDos($scope.aquello);
    // aaa.then(function (res) {
    // }, function (err) {
    //   $ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    // });

    // Extract all paies
    aaa = Pagos.extract();
    aaa.then(function (res) {
      console.log("Hey")
      console.log(JSON.stringify(res))
    }, function (err) {
      $ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    });
  }, 500);
  //New User
	$scope.openPop = function () {
	 	$scope.user = {};
		$ionicPopup.show({
      title: 'Nuevo usuario',
      template: '<input type="text" placeholder="Nombre" ng-model="user.name" autofocus />',
      scope: $scope,
      buttons: [
	      { text: 'Cancelar' },
	      {
	        text: '<b>Crear</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.user.name) {
	            //don't allow the user to close unless he enters wifi password
	            e.preventDefault();
	          }else {
	            return $scope.user.name;
	          }
	        }
	      },
	    ]
	  }).then(function (res) {
      if(res){
    		saveUser = Users.save(res);
    		saveUser.then(function (data) {
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Usuario creado</p>', showBackdrop: true, duration: 1800});
        	console.log(data)
    			$scope.users = data;
    		}, function (err) {
        	$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
    		});
      }//End if res
    });
	}
})

.controller('DashUserCtrl', function ($ionicPopup, $scope, $state, $ionicModal, $stateParams, $ionicLoading, Users, Pagos) {
  $ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  aUser = Users.get($stateParams.userId);
	aUser.then(function (result) {
		$scope.user = result;
	});

  $scope.data = {};
  $scope.data.columns = [
    {
      "_id"  : "3932",
      "name": "ID"
    },
    {
      "_id"  : "1453",
      "name": "Fecha"
    },
    {
      "_id"  : "1355",
      "name": "Abono"
    },
    {
      "_id"  : "0393",
      "name": "Saldo"
    }
  ];
  $scope.data.items = [];
  userPagos = Pagos.all($stateParams.userId);
  userPagos.then(function (res) {
    for (var i = 0; i < res.length; i++) {
      $scope.data.items.push(
        {
          "3932" : res[i]["id"],
          "1453" : res[i]["fecha_pago"],
          "1355" : res[i]["abono"],
          "0393" : res[i]["saldo"]
        }
      );
    }
    $ionicLoading.hide();
  });

  $scope.editUser = function (userId) {
  	$ionicPopup.show({
	    template: '<input type="text" value="'+$scope.user.name+'" ng-model="user.name" autofocus />',
	    title: 'Editar Nombre',
	    scope: $scope,
	    buttons: [
	      { text: 'Cancelar' },
	      {
	        text: '<b>Actualizar</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.user.name) {
	            //don't allow the user to close unless he enters wifi password
	            e.preventDefault();
	          }else {
	            return $scope.user.name;
	          }
	        }
	      },
	    ]
	  }).then(function(res) {
	    if (res) {
		  	updateUser = Users.update(res, userId);
		  	updateUser.then(function (res) {
					$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 1000, showBackdrop: true});
		  	}, function (err) {
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		  	});
	    }
	  });
  }

  $scope.deleteUser = function (userId) {
  	$ionicPopup.confirm({
    	title: 'Eliminar este usuario?',
      template: 'Estas seguro?',
      cancelText: 'Cancelar',
      okText: 'Si'
   	}).then(function(res) {
     	if(res) {
		  	deleteUser = Users.delete(userId);
		  	deleteUser.then(function (res) {
		  		$state.go('dash');
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Usuario eliminado</p>', showBackdrop: true, duration: 2000});
		  	}, function (err){
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		  	});
     	}
   	});
  }

	$ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.gridModal = modal;
  });
  // open video modal
  $scope.openModal = function (data) {
    $scope.modalData = data;
    $scope.gridModal.show();
  };
  // close video modal
  $scope.closeModal = function() {
    $scope.gridModal.hide();
  };
  //Cleanup the video modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.gridModal.remove();
  });
  $scope.newPago = function (inputs) {
  	newPago = Pagos.save(inputs, $scope.user.id);
  	newPago.then(function (data) {
      $scope.data.items = [];
      for (var i = 0; i < data.length; i++) {
        $scope.data.items.push(
          {
            "3932" : data[i]["id"],
            "1453" : data[i]["fecha_pago"],
            "1355" : data[i]["abono"],
            "0393" : data[i]["saldo"]
          }
        );
      }
			$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 1000, showBackdrop: true});
    	inputs.abono = "";
      inputs.fPago = "";
      inputs.saldo = "";
  		$scope.gridModal.hide();
  	}, function (err) {
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
  	});
  }

  $scope.onePago = {};
  $ionicModal.fromTemplateUrl('modal-two.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.onTap = function (pagoId) {
  	$ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  	$scope.modal.show();
  	getOnePago = Pagos.get(pagoId);
  	getOnePago.then(function (result) {
  		console.log(result)
  		$scope.onePago = result;
  		$ionicLoading.hide();
  	}, function (err){
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
  	});
  }
	$scope.cerrar = function() {
    $scope.modal.hide();
  };
  //Cleanup the video modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  $scope.updatePago = function (inputs) {
  	console.log(inputs, $scope.user.id);
  	updtPago = Pagos.update(inputs, $scope.user.id);
  	updtPago.then(function (result) {
      $scope.data.items = [];
      for (var i = 0; i < result.length; i++) {
        $scope.data.items.push(
          {
            "3932" : result[i]["id"],
            "1453" : result[i]["fecha_pago"],
            "1355" : result[i]["abono"],
            "0393" : result[i]["saldo"]
          }
        );
      }
			$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 1000, showBackdrop: true});
  		$scope.modal.hide();
  	}, function (err){
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
  	});
  }

  $scope.onHold = function (pagoId) {
  	$ionicPopup.confirm({
    	title: 'Eliminar este pago?',
      template: 'Estas seguro?',
      cancelText: 'Cancelar',
      okText: 'Si'
   	}).then(function(res) {
     	if(res) {
		  	deletePago = Pagos.delete(pagoId, $scope.user.id);
		  	deletePago.then(function (resu) {
          $scope.data.items = [];
          for (var i = 0; i < resu.length; i++) {
            $scope.data.items.push(
              {
                "3932" : resu[i]["id"],
                "1453" : resu[i]["fecha_pago"],
                "1355" : resu[i]["abono"],
                "0393" : resu[i]["saldo"]
              }
            );
          }
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Pago eliminado</p>', showBackdrop: false, duration: 2000});
		  	}, function (err){
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		  	});
     	}
   	});
  }
});