'use strict'

function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine){
    let nb_roues=1*nb_monocycle+2*nb_moto+4*nb_voiture+6*nb_limousine
    return nb_roues
}