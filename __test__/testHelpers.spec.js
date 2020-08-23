import { getCountdown } from "../src/client/js/helpers"
import { getPic } from "../src/client/js/helpers"
import { getImgURL } from "../src/client/js/helpers"

describe('Testing countdown functionality' , () => {
    let testdate = "2020-09-28";
    test("Testing the getCountdown()", async () => {
        const result = getCountdown(testdate);
        expect(result).toBeGreaterThanOrEqual(47);
    });
});

// describe('Testing urlChecker() function for illegitimate urls' , () => {
//     let data={
//         city: 'Atlanta',
//         lat: 33.823555,
//         long: -84.321402,
//         region: 'Georgia',
//         country: 'US'
//       }
//     it('Async test', async done => {
//         // Do your async tests here
//         let pdata= getPic(data);
//         console.log(pdata);
//         let url= getImgURL(pdata);
//         expect(url).toBeDefined();
//         // expect(response).toBeFalsy();
//         done();
//     });
// });