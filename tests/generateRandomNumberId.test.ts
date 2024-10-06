import { test, expect } from "bun:test"
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId"

test('ce test permet de me verifier si il donne la bonne id de chiffre num 6 ',()=>{
    const nuber = generateRandomNumberId()
    const charr = nuber.toString()
    
    expect(charr.length).toBe(6)
    
})
