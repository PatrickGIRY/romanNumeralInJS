# Roman numeral Kata

## Problem Description

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets)

The numbers from 1 to 10 (including subtractive notation for 4 and 9) are expressed in Roman numerals as follows:
    
    I, II, III, IV, V, VI, VII, VIII, IX, X.

The system being basically decimal, tens and hundreds follow the same pattern:

Thus 10 to 100 (counting in tens, with X taking the place of I, L taking the place of V and C taking the place of X):

    X, XX, XXX, XL, L, LX, LXX, LXXX, XC, C.

Note that 40 (XL) and 90 (XC) follow the same subtractive pattern as 4 and 9.

Similarly, 100 to 1000 (counting in hundreds):
    
    C, CC, CCC, CD, D, DC, DCC, DCCC, CM, M.

## Part I

The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

     1 --> I
     10 --> X
     7 --> VII
etc.

For a full description of how it works, take a look at [this useful reference website] : which includes an implementation of the Kata in javascript.

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn’t tend to go any higher)

## Part II

Write a function to convert in the other direction, ie numeral to digit
