'use strict';

app
    .controller('planningList', function ($scope) {
        $scope.items = [
            {
                "matiere"       : "Développement Web",
                "photoMatiere"  : "../img/matieres/developpement.jpg",
                "professeur"    : "M. Bruno Simon",
                "photoProf"     : "../img/teachers/bruno-simon-web.jpeg",
                "slug"          : "developpement-web-lundi",
                "horaires"      : {
                        "from"  : "09:00",
                        "to"    : "12:00"
                }
            },
            {
                "matiere"       : "Algorithme",
                "professeur"    : "M. Franck Lepoivre",
                "slug"          : "algorithme-lundi",
                "horaires"      : {
                        "from"  : "14:00",
                        "to"    : "17:00"
                }
            },
            {
                "matiere"       : "Anglais",
                "professeur"    : "Mme. Agnès Rouvrais",
                "slug"          : "anglais-mardi",
                "horaires"      : {
                        "from"  : "09:00",
                        "to"    : "10:30"
                }
            }
        ]
    })

    .controller('planningDetail', function ($scope, $stateParams) {
        console.log($stateParams);
        $scope.item = {
            "matiere"       : "Développement Web",
            "photoMatiere"  : "../img/matieres/developpement.jpg",
            "professeur"    : "M. Bruno Simon",
            "photoProf"     : "../img/teachers/bruno-simon-web.jpeg",
            "slug"          : "developpement-web-lundi",
            "horaires" : {
                "from"  : "09:00",
                "to"    : "12:00"
            }
        };
    })
;
