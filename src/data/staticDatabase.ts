import { City } from "../models/City";
import { Parking } from "../models/City";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { toSlug } from "../utils/toSlug";

const AixenProvence = new City(generateRandomNumberId(), "Aix-en-Provence", "France", { latitude: 43.533329, longitude: 5.43333  } )
const Spezia = new City(generateRandomNumberId(), "Spezia", "Italie", { latitude: 44.238366, longitude: 9.6912326 })
const AixlaChapelle = new City(generateRandomNumberId(), "Aix-la-Chapelle", "Allemagne", { latitude: 50.776351, longitude: 6.083862 })
const SanCristóbaldeLaLaguna = new City(generateRandomNumberId(), "San Cristóbal de La Laguna", "Espagne", { latitude: 28.487180709838867, longitude: -16.313879013061523 })
const NewcastleuponTyne = new City(generateRandomNumberId(), "New castle upon Tyne", "Angleterre", { latitude: 54.9738474, longitude: -1.6131572 })

const parkingAix = new Parking("Parking A", AixenProvence.id, AixenProvence.location, 100, 4.5);
const parkingSpezia1 = new Parking("Parking B", Spezia.id, Spezia.location, 50, 3);
const parkingSpezia2 = new Parking("Parking C", Spezia.id, Spezia.location, 80, 2.5);
const parkingAixLaChapelle = new Parking("Parking D", AixlaChapelle.id, AixlaChapelle.location, 40, 2.8);
const parkingSanCristobal = new Parking("Parking E", SanCristóbaldeLaLaguna.id, SanCristóbaldeLaLaguna.location, 70, 3.1);
const parkingNewcastle1 = new Parking("Parking F", NewcastleuponTyne.id, NewcastleuponTyne.location, 60, 2.4);
const parkingNewcastle2 = new Parking("Parking G", NewcastleuponTyne.id, NewcastleuponTyne.location, 90, 3.2);

AixenProvence.parkingsIds.push(parkingAix.id)
Spezia.parkingsIds.push(parkingSpezia1.id,parkingSpezia2.id)
AixlaChapelle.parkingsIds.push(parkingAixLaChapelle.id)
SanCristóbaldeLaLaguna.parkingsIds.push(parkingSanCristobal.id)
NewcastleuponTyne.parkingsIds.push(parkingNewcastle1.id,parkingNewcastle2.id)

export const Cites :City[] = [
    AixenProvence,
    Spezia,
    AixlaChapelle,
    SanCristóbaldeLaLaguna,
    NewcastleuponTyne
]

 export const parkings : Parking[] = [
    parkingAix,
    parkingSpezia1,
    parkingSpezia2,
    parkingAixLaChapelle,
    parkingSanCristobal,
    parkingNewcastle1,
    parkingNewcastle2
]






