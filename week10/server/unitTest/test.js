let assert = require("assert");
let equ = require("../linearPoint.js");

describe("Here is a bunch of Tests for the function", () => {
    describe("Test Case 1 for Justice", () => {
        it("Should probably return the number 6", ()=>{
            assert.equal(equ(2, 1, 4), 6);
        });
    });
    describe("Test Case 2 for Justice", () => {
        it("Should probably return the number 4", ()=>{
            assert.equal(equ(2, 0, 4), 4);
        });
    });
    describe("Test Case 3 for Justice", () => {
        it("Should probably return the number 2", ()=>{
            assert.equal(equ(2, -1, 4), 2);
        });
    });
})
