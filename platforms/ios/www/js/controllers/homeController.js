'use strict';

app
    .controller('homeIndex', function ($scope) {
        $scope.items = [
            {
                "icon"          : "ion-ios-checkmark balanced",
                "punchline"     : "Tout vas bien, vous êtes présent !"
            },
        ]
    })

    .controller('homeLogin', function ($scope) {

    })
;
