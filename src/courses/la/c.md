---
title: 'Lingua Programmandi C'
description: 'Via docendi incipientibus C per ludos faciendos'
status: 'In opere'
image: '../c.png'
---

NOTA: Si nullam priorum programmandi scientiam habes, vehementer suadeo ut cum Scratch incipias et nonnulla projecta et ludos cum eo facias. Vide griffpatch in YT. Postquam in Scratch peritus factus es, multo facilius erit discipulo C discere.

## Fontes
- https://en.cppreference.com/c (provectis)

## Iter faciendum
1. Constitutio: suadeo `gcc` (vel `clang`) + VSCode. Alia bona optio est `zig cc`. Linux valde commendatur. Etiam installe `make` et fortasse `pkgconf`.

2. "Hello, World!" (utere uno mandato ad aedificandum). `%d` et `%f` in `printf`. Operatores mathematici basici, nonnullae functiones utiles ex stdlib, ut `sqrt`, `pow`.

3. Variabiles (typus `int`). `scanf` (sed nondum de indicibus). Semper initializa variabiles tuas; variabiles non initializatae cum optimationibus fortibus possunt esse UB (comportamentum indefinitum)! Scribe nonnulla programmata simplicia (ex. solutores aequationum: linearium, quadraticorum, biquadraticorum).

4. `if`-`else` et comparationes. Adde errorum inspectionem illis solutoribus. Fac calculatorem basicum (introducens typum `char` pro operationibus et catenas `if`-`else if`-`else`).

5. Circulus `while`. Fac ut aliquid certum numerum vicium imprimat sine usu `for`, deinde exhibe `for` quasi compendium. (Haec pars difficilis est...)

6. Typus `bool`, valores veri et falsi (`while (n) n--;`).
   Introduce variabiles constantes. Adiuvabunt ad capiendos errores sicut `if (var = 5)`.
   Etiam potes introducere plures functiones stdlib, ut `rand`.
   Fac aliquos ludos basicos, ut "Aestima numerum". Si dolorem amas, fac tic-tac-toe sine ordinatis (9 variabiles pro tabula et multae `if`).

6. Ordinata (array), statice et variabiliter magnitudine in acervo (stack). Rescribe tic-tac-toe cum ordinatis. Noli oblivisci de limitum examine: quamquam accessus extra limites non notabilis esse potest, est UB!
   Coniunge ordinata cum circulis. Fac Wordle-sed-numeris.

7. Chordae (ordinata characterum cum terminatione nulla). Literalia characterum. Nonnullae functiones chordarum (ut `strlen`, `strchr`). Memora indices (`const char *`). Fac nonnullos ludos textuales, ex. "Carnifex" (hangman).

7. Functiones, parametri, enuntiatio return. Fac nonnullas functiones conversionis simplices. Fac plures ludos (ex. "Conecte quattuor"), ostende quam utiles sint functiones.

7. Lege aliquem codicem C simplicem. Non potui invenire bona exempla e mundo reali, ideo necesse habui rescribere aliquam C++ meam in C simpliciorem. Introduce magnitudines typorum (bits, bytes et verba, `int16_t`, `size_t`).

8. Fac machinam ludorum consolatoriam (V1). Utere ordinato char unidimensionali et formula `y * width + x`. Da intuitum de memoria plana (flat memory model). Fac simplicem "Serpentem" (snake) cum ea (tabula + caput x/y et cauda x/y totum statum ludi reponunt).

9. Indices. Machina ludorum consolatoria (V2).
