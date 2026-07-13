---
title: 'The C Programming Language'
description: 'A beginner-friendly approach to learning C through game development.'
status: 'WIP'
image: '../c.png'
---

> If you have no prior programming experience, I strongly recommend starting with [Scratch](https://scratch.mit.edu/) and building a few projects and games there first. Check out [griffpatch](https://www.youtube.com/c/griffpatch) on YouTube for excellent tutorials. Once you're comfortable with Scratch, picking up C will feel much more natural.

I suggest asking a person (or at the very least ChatGPT) who knows C to guide you through learning it. New concepts are best shown as snippets of code.

## Resources
- https://en.cppreference.com/c (advanced)

## Roadmap
1. **Set up**
   I recommend `gcc` (or `clang`) + VSCode. Another good option is `zig cc`. Linux or WSL is strongly recommended. Also install `make` and `pkgconf`.

2. **"Hello, World!"**
   Compile "Hello, World!" with a single command. Learn `printf` format specifiers `%d` (integers) and `%f` (floats). Explore basic mathematical operators and some cool stdlib functions like `sqrt`, `pow` (remember to link with `-lm` for them).

3. **Variables**
   Learn how to make and use `int` variables. Use `scanf` for input (ignore pointers for now). **Always initialize your variables** -- uninitialized variables can lead to undefined behaviour (UB) when strong optimizations are used! Write some simple programs such as solvers for linear, quadratic, and bi-quadratic equations.

4. **Conditionals**
   Learn `if`-`else` statements and comparison operators. Add error checking to your equation solvers (e.g., handle negative discriminants). Build a basic calculator that uses a `char` variable for the operation and a chain of `if`‑`else if`‑`else` to dispatch the correct arithmetic.

5. **Loops**
   Begin with the `while` loop. Make the program print something a fixed number of times, then try the `for` loop as a more convenient shortcut. Loops in my experience were pretty hard to grasp, but you'll get them with experience.

6. **Booleans, constants, simple games**
   Include `<stdbool.h>` to use the `bool` type. Discuss truthy/falsy values (e.g., `while (n) n--;` – zero is false, everything else is true).
   Learn `const` variables, useful for parameters and settings that you don't want to change, or intermediate results. They will help catch mistakes like `if (var = 5)`.
   Build a "guess the number" game. If you're up for a challenge, try implementing tic‑tac‑toe **without** arrays – use nine separate variables for the board and a lot of `if` statements. You may need some more stdlib functions such as `rand`.

7. **Arrays**
   Learn about statically & variably -sized arrays allocated on the stack. Rewrite tic-tac-toe using arrays. **Don't forget to check bounds** – out‑of‑bounds access might seem to work, but it is undefined behaviour and can cause subtle bugs.
   Combine arrays with loops. Make "wordle-but-numbers" game (guess a secret sequence of digits).

8. **Strings**
   C strings are character arrays terminated by a null byte (`'\0'`). Work with character literals and string functions like `strlen` and `strchr`. Briefly look at pointers (`const char *`).
   Build text‑based games such as Hangman.

9. **Functions**
   Define your own functions with parameters and a `return` statement. Practice with simple conversion utilities (e.g., Fahrenheit <-> Celsius).
   Build some larger games like Connect Four. See how functions help you organise and reuse code effectively.

10. **Types**
    Introduce the concepts of bits, bytes, and words, and present fixed‑width integer types (e.g., `int16_t`, `uint32_t`) as well as `size_t`. This is more of a reading-heavy lesosn.

11. **Console Game Engine (V1)**
    (Inspired by OneLoneCoder's Console Game Engine)
    Create a simple console game engine using a 1D `char` array and the formula `y * width + x` to map 2D coordinates to a flat memory index. Learn more about the flat and linear nature of memory.  
    Implement a basic Snake game -- avoid using lists and store the board, head position, and tail position instead.

12. **Pointers. Console Game Engine (V2)**  
    Dive into pointers. Learn how they work, pointer arithmetic and indexing pointers like arrays. Try using dynamic memory, **Always rememer to free() what you malloc()'ed!**
    Make a new version of Console Game Engine: add support for buffer resizing, use ANSI escape codes to color text.

TODO: Memory layouts and a whole bunch of features.
