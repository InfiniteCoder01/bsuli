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

9. Indices. Machina ludorum consolatoria (V2).---
title: 'Linguam Programmandi C'
description: 'Via ad C discendum per ludos faciendos, tironibus apta.'
status: 'In opere'
image: '../c.png'
---

> Si nullam experientiam programmandi habes, vehementer suadeo ut a [Scratch](https://scratch.mit.edu/) incipias et ibi nonnulla incepta ludosque primum conficias. Vide [griffpatch](https://www.youtube.com/c/griffpatch) in YouTube ad optima documenta. Cum Scratch tibi familiaris fuerit, C discere multo naturalius videbitur.

Moneo ut hominem (vel ad minimum ChatGPT) qui C novit roges ut te per discendum ducat. Novae notiones optime per fragmenta codicis ostenduntur.

## Fontes
- https://en.cppreference.com/c (pro provectioribus)

## Gradus
1. **Praeparatio**
   Commendo `gcc` (aut `clang`) + VSCode. Aliud bonum optionis est `zig cc`. Linux vel WSL valde commendatur. Etiam installe `make` et `pkgconf`.

2. **"Hello, World!"**
   Compila "Hello, World!" uno mandato. Disce formatos `printf` specificatores `%d` (integri) et `%f` (numeri fracti). Explora operatores mathematicos basicos et nonnullas utiles functiones stdlib ut `sqrt`, `pow` (memento cum `-lm` coniungere).

3. **Variabiles**
   Disce quomodo variabiles `int` creare et uti. Utere `scanf` pro input (nunc neglectis indicatoribus). **Semper variabiles initia** — variabiles non initiatae ad mores indefinitos (UB) ducere possunt cum optimationes fortes adhibentur! Scribe programmata simplicia, ut aequationum linearium, quadraticarum et biquadraticarum solutores.

4. **Conditiones**
   Disce enuntiationes `if`-`else` et operatores comparationis. Adde errorum recognitionem solutoribus tuis (e.g., disctiminantem negativum tracta). Aedifica calculatorem simplicem qui variabili `char` pro operatione utitur et catenam `if`‑`else if`‑`else` ad arithmeticam rectam eligendam.

5. **Circuli**
   Incipe cum circulo `while`. Fac programma aliquid certo numero vicum imprimat, deinde tenta circulum `for` ut commodiorem compendium. Circuli, meo iudicio, satis difficiles intellectu erant, sed experientia eos capies.

6. **Booleani, constantes, ludi simplices**
   Include `<stdbool.h>` ut typo `bool` utaris. Disputa de valoribus veris et falsis (e.g., `while (n) n--;` – zero est falsum, omnia alia vera).
   Disce variabiles `const`, utiles pro parametris et optionibus quas mutare non vis, vel pro mediis eventis. Adiuvabunt ad capiendos errores sicut `if (var = 5)`.
   Aedifica ludum "conice numerum". Si provocationem cupis, conare tic‑tac‑toe **sine** ordinatis (array) efficere – utere novem variabilibus separatis pro tabula et multis enuntiationibus `if`. Fortasse opus erit nonnullis functionibus stdlib additicis, sicut `rand`.

7. **Ordinata (Array)**
   Disce de ordinatis magnitudinis staticae et variabilis in acervo (stack) locatis. Rescribe tic‑tac‑toe utendo ordinatis. **Noli oblivisci terminos reprimere** – accessus extra terminos quasi operari potest, sed est mores indefinitus et errores subtiles causare potest.
   Coniunge ordinata cum circulis. Fac ludum "wordle-sed-numerorum" (conice secretam digitorem seriem).

8. **Chordae (String)**
   Chordae in C sunt ordinata characterum byte nulo terminata (`'\0'`). Labora cum litteralibus characterum et functionibus chordarum sicut `strlen` et `strchr`. Breviter inspice indices (pointers) (`const char *`).
   Aedifica ludos textui innixos, ut "Hangman" (carnifex).

9. **Functiones**
   Defini functiones tuas cum parametris et enuntiatione `return`. Exerce cum simplicibus instrumentis conversionis (e.g., Fahrenheit <-> Celsius).
   Aedifica maiores ludos, sicut "Connect Four" (quattuor continuus). Vide quomodo functiones adiuvant ad codicem ordinandum et reuse efficaciter.

10. **Typi**
    Introduc notiones bitum, byte, et vocabulorum (word), et exhibe typos integros fixae latitudinis (e.g., `int16_t`, `uint32_t`) necnon `size_t`. Hoc est magis lectio gravis.

11. **Machina Ludi Consolaris (V1)**
    (Inspired by OneLoneCoder's Console Game Engine)
    Crea machinam ludi consolarem simplicem utendo ordinato 1D `char` et formula `y * width + x` ad coordinatas 2D ad indicem memoriae planum convertendas. Disce plus de natura plana et lineari memoriae.  
    Effici ludum "Serpens" (Snake) simplicem – noli uti listis, sed repone tabulam, capitis positionem, et caudae positionem.

12. **Indices (Pointers). Machina Ludi Consolaris (V2)**  
    Descende in indices. Disce quomodo operantur, arithmeticam indicatoriam et indicatoribus uti sicut ordinata. Tenta uti memoria dynamica, **semper memento free() facere pro iis quae malloc() fecisti!**
    Fac novam versionem Machinae Ludi Consolaris: adde facultatem resizing buffer, utere ANSI evadendi codicibus ad textum colorandum.

TODO: Dispositiones memoriae et magna copia plumarum.
