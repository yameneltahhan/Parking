import type { GPS } from "../type.ts/gps"
import { generateRandomNumberId } from "../utils/generateRandomNumberId"
import { toSlug } from "../utils/toSlug"
import { v4 as uuidv4 } from 'uuid'



export class City {
    id : number
    name : string
    slug : string
    parkingsIds :  number[]
    country : string
    location : GPS

    constructor(id :number,name: string, country: string, gps: GPS ){
        this.name =name
        this.id =id
        this.slug = toSlug(name)
        this.country = country
        this.location = gps
        this.parkingsIds = []
    }
}
export class Parking{
    id : string
    name : string
    city_id: number
    location : GPS
    numberOfSpots : number
    opened : boolean
    hourlyRate : number
    parkIds: number[]

    constructor(name: string, city_id: number, location: GPS,numSpot : number, hourlyRate :number){
        this.id =uuidv4()
        this.name = name
        this.city_id = city_id
        this.location = location
        this.numberOfSpots = numSpot
        this.opened = true
        this.hourlyRate = hourlyRate
        this.parkIds = []
        this.generateSpots()
    }
    private generateSpots(): void {
        for (let i = 1; i <= this.numberOfSpots; i++) {
            const newSpot = new Spot(i, this.id); // Crée une nouvelle instance de Spot avec l'id du parking
            this.parkIds.push(newSpot.id); // Ajoute l'ID de la place à la liste des parkIds
        }
    }


}
export class Spot {
    id: number;
    parking_id: number;

    constructor(id: number, parking_id: number) {
        this.id = id;
        this.parking_id = parking_id;
    }
}

export class Park {
    id: string;
    spot_id: number;
    startedAt: Date;
    endedAt: Date | null;
    price: number;
    paid: boolean;

    constructor(spot_id: number, price: number) {
        this.id = uuidv4();
        this.spot_id = spot_id;
        this.startedAt = new Date(); 
        this.endedAt = null;
        this.price = price;
        this.paid = false; 
    }

    endPark() {
        this.endedAt = new Date()
        this.paid = true
    }
}
