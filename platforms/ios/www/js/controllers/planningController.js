'use strict';

app
    .controller('planningList', function ($scope) {
        $scope.items = [
            {
                "matiere" : "Développement Web",
                "professeur" : "M. Bruno Simon",
                "horaires" : {
                    "from" : "09:00",
                    "to" : "12:00"
                }
            },
            {
                "matiere" : "Développement Web",
                "professeur" : "M. Bruno Simon",
                "horaires" : {
                    "from" : "09:00",
                    "to" : "12:00"
                }
            },
            {
                "matiere" : "Développement Web",
                "professeur" : "M. Bruno Simon",
                "horaires" : {
                    "from" : "09:00",
                    "to" : "12:00"
                }
            }
        ]
    })

    .controller('planningDetail', function ($scope) {
        $scope.item = {
            "matiere" : "Développement Web",
            "professeur" : "M. Bruno Simon",
            "horaires" : {
                "from" : "09:00",
                "to" : "12:00"
            }
        };
    })
;
