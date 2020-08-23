//Import the js file to test
import { getCountry} from "../src/client/js/countries"

describe("Testing the country code translation functionality", () => {
    test("Testing the getCountry() function", () => {
           expect(getCountry("AU")).toBe("Australia")
    })
    test("Testing the getCountry() function", () => {
           expect(getCountry("CA")).toBe("Canada")
    })
    test("Testing the getCountry() function", () => {
           expect(getCountry("CH")).toBe("Switzerland")
    })
    test("Testing the getCountry() function", () => {
           expect(getCountry("ES")).toBe("Spain")
    })
    test("Testing the getCountry() function", () => {
       expect(getCountry("PH")).toBe("Philippines")
})
});


//Check if the function produces the expected output

