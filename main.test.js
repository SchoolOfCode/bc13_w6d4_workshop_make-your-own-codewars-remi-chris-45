//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import {oddEvenMultiply, vowelOrder} from "./main.js";



//Tests for Challenge 1
test("Check if calculated correctly", function(){
    const actual = oddEvenMultiply(3,5);
    const expected = [15,"Odd"];

    expect(actual).toStrictEqual(expected);
})

test("Check if calculated correctly", function(){
    const actual = oddEvenMultiply(4,5);
    const expected = [20,"Even"];
    expect(actual).toStrictEqual(expected);
})

test("Check if calculated correctly", function(){
    const actual = oddEvenMultiply(-2,-3);
    const expected = [6,"Even"];
    expect(actual).toStrictEqual(expected);
})

//Tests for Challenge 2 
test("Check if word contains all Vowels" , function(){
    const actual = vowelOrder("facetious");
    const expected = true;
    expect(actual).toBe(expected);
})

test("Check if word contains all Vowels" , function(){
    const actual = vowelOrder("happy");
    const expected = false;
    expect(actual).toBe(expected);
})

test("Check if word contains all Vowels in correct order" , function(){
    const actual = vowelOrder("eutopia");
    const expected = false;
    expect(actual).toBe(expected);
})

