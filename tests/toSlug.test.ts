import { test, expect } from "bun:test"
import { toSlug } from "../src/utils/toSlug"

test("ce test permet de verifier si il rend le bonne phrase visible",()=>{
    const text: string = "ddy'''''sss"
    const result = toSlug(text)
    expect(result).toBe("ddy-----sss")
})