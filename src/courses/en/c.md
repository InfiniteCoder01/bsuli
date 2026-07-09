---
title: 'The C Programming Language'
description: 'Way to teach beginners C through game development'
status: 'WIP'
image: '../c.png'
---

NOTE: With no prior programming knowledge, I strongly recommend
starting with Scratch and doing some projects and games with it.
See griffpatch on YT. After getting comfortable in Scratch, it'll be
much easier for the student to learn C.

## Resources
- https://en.cppreference.com/c (advanced)

## Roadmap
1. Set up: I recommend `gcc` (or `clang`) + VSCode. Another good option is `zig cc`. Linux is strongly recommended. Also install `make` and maybe `pkgconf`.

2. "Hello, World!" (use single command for building). `%d` and `%f` in `printf`. Basic mathematical operators, some cool stdlib functions like `sqrt`, `pow`.

3. Variables (`int` type). `scanf` (but no pointers just yet). Always initialize your variables, uninitialized variables with strong optimizations may be UB! Write some simple programs (f.e. equation solvers: linear, quadratic, bi-quadratic).

4. `if`-`else` and comparisons. Add error checking for those equation solvers. Make a basic calculator (introducing `char` type for operations and `if`-`else if`-`else` chains).

5. `while` loop. Make it print something a set number of times without using `for`, then present the `for` loop as a shortcut. (This part is tough...)

6. `bool` type, truthy and falsy values (`while (n) n--;`).
   Introduce constant variables. They will help catching `if (var = 5)`-like mistakes.
   You may also introduce more stdlib functions such as `rand`.
   Make some basic games, such as guess the number. If you like pain, make tic-tac-toe without arrays (9 variables for the board and lots of `if`'s).

6. Arrays, statically & variably sized on the stack. Rewrite tic-tac-toe with arrays. Don't forget bounds checking: while out-of-bounds access may not be noticeable, it is UB!
   Combine arrays with loops. Make wordle-but-numbers.

7. Strings (character arrays with zero-termination). Character literals. Some string functions (like `strlen`, `strchr`). Mention pointers (`const char *`).
   Make some text games, f.e. hangman.

7. Functions, parameters, `return` statement. Make some simple conversion functions.  Make more games (f.e. connect four), show how useful functions are.

7. Read some simple C code. I couldn't find any good real-world examples so I had to rewrite some of my C++ into simpler C. Introduce type sizes (bits, bytes and words, `int16_t`, `size_t`).

8. Make a console game engine (V1). Use 1D char array and the `y * width + x` formula. Give some view into the flat memory model.
   Make simple snake with it (board + head x/y and tail x/y store the entire state of the game).

9. Pointers. Console game engine (V2).
