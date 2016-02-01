'use strict';

app
    .controller('historiqueList', function ($scope) {
        $scope.items = [
            {
                "etat"          : "Absence",
                "date"          : "1 Février 2016",
                "slug"          : "absence-1-fevrier-2016",
                "state"         : "assertive",
                "horaires"      : {
                        "from"  : "09:00",
                        "to"    : "12:00"
                }
            },
            {
                "etat"          : "Retard",
                "date"          : "30 Janvier 2016",
                "slug"          : "retard-30-janvier-2016",
                "state"         : "energized",
                "horaires"      : {
                        "from"  : "13:00",
                        "to"    : "13:07"
                }
            },
        ]
    })

    .controller('historiqueDetail', function ($scope, $stateParams) {
        console.log($stateParams);
        $scope.item = {
            "etat"          : "Absence",
            "date"          : "1 Février 2016",
            "slug"          : "absence-1-fevrier-2016",
            "horaires"      : {
                    "from"  : "09:00",
                    "to"    : "12:00"
            }
        };
    })
;
