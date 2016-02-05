'use strict';

app
    .controller('planningList', function ($scope) {
        $scope.items = [
            {
                "matiere"       : "Développement Web",
                "photoMatiere"  : "../img/matieres/developpement.jpg",
                "professeur"    : "M. Bruno Simon",
                "photoProf"     : "../img/teachers/bruno-simon-web.jpeg",
                "description"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo justo ac enim imperdiet, non sollicitudin felis vulputate. Maecenas porta quam fringilla eros aliquet elementum. Nulla in pulvinar risus, sit amet cursus lorem. Aliquam ornare enim ut eros feugiat pellentesque. Nunc lobortis leo vitae sapien condimentum dictum. Integer non laoreet odio. Suspendisse nec congue lacus. Mauris hendrerit ligula sed tellus scelerisque, et vulputate ligula accumsan. In ultrices augue magna, sed faucibus sem fermentum sit amet. Nam ut malesuada enim. Nam sollicitudin scelerisque neque, eu malesuada urna varius id. Sed urna justo, efficitur id odio sit amet, condimentum dignissim risus. Phasellus auctor finibus felis, at sollicitudin sem feugiat ac. Nullam vehicula rutrum turpis, ut interdum purus vehicula commodo. Cras ac tincidunt nibh.",
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
            "description"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo justo ac enim imperdiet, non sollicitudin felis vulputate. Maecenas porta quam fringilla eros aliquet elementum. Nulla in pulvinar risus, sit amet cursus lorem. Aliquam ornare enim ut eros feugiat pellentesque. Nunc lobortis leo vitae sapien condimentum dictum. Integer non laoreet odio. Suspendisse nec congue lacus. Mauris hendrerit ligula sed tellus scelerisque, et vulputate ligula accumsan. In ultrices augue magna, sed faucibus sem fermentum sit amet. Nam ut malesuada enim. Nam sollicitudin scelerisque neque, eu malesuada urna varius id. Sed urna justo, efficitur id odio sit amet, condimentum dignissim risus. Phasellus auctor finibus felis, at sollicitudin sem feugiat ac. Nullam vehicula rutrum turpis, ut interdum purus vehicula commodo. Cras ac tincidunt nibh.",
            "slug"          : "developpement-web-lundi",
            "horaires"      : {
                    "from"  : "09:00",
                    "to"    : "12:00"
            }
        };
    })
;
