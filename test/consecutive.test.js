import { consecutive } from "../consecutive";


describe('DNA Check', () => {
    
    test(' Given an array of 1 and 0s, find the maximum number of consecutive 1 in this array', () => {

        /*let prove=[0,"1",1,1,1,1,0,0,0,0,"0","1"];
        expect(consecutive(prove)).toBe(5);*/
        let prove=[0,1,1,"0",1,1,0,0,0,0,"0","1","1","1"];
        expect(consecutive(prove)).toBe(3);
        prove=[0,1,3,4,1,32,0,0,0,0,"0","1"];
        expect(consecutive(prove)).toBe(-1);
        prove=[];
        expect(consecutive(prove)).toBe(-1);
     });
});