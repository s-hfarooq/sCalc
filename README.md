# sCalc


## Information
Similar to [NaSC](https://github.com/parnold-x/nasc)

[Electron](https://github.com/electron/electron) application - cross platform


## Running it
Download repo, move into `src`, run `npm install electron` if needed (probably not) then run using `npm start`. Executable applications for Windows, MacOS, and Linux will eventually exist.

You can also download the release build for your system located within `release-builds`. Just note that these versions are untested and not up to date, and therefore may not work properly.  


## Using it
Commands must be entered by in the following fashion: `keyword (command)` where `keyword` is a phrase listed below, and command is a valid command for the given keyword. Note the space between the keyword and opening parenthesis  - this is currently necessary for the program to work

#### Math command
`Keyword: math`

Allows for input of basic arithmetic (ie. +, -, *, /, etc.), unit conversion (ie. 16kg to lbs), and allows the use of constants (ie. pi, e, etc.).
#### Parse command
`Keyword: parse`

Currently not supported, may come in the future - will bring things such as equations (ie. f(x) = 2x, what is f(2)?), variable support, complex numbers, and more.
If the program doesn't understand a command it mirrors whatever you've typed.

#### Graph command
`Keyword: graph`
`graph (2x+1, 0, 5)`

Currently not supported, may come in the future - will display a interactive graph of a given equation.

## Current look

<img src="screenshots/screenshot-V6.png" alt="screenshot" height="450"><br>


Currently very basic - needs a lot of work

Change the css - different theme (eventually a theme selector?)


## Future improvements
1. GUI - make it look better - also needs line numbers on input/output
2. ~~Simple calculator (+, -, *, /, etc.)~~
3. Graph equations - interactive like Desmos? - basic graph in program with link to Desmos below?
4. Improvements on math commands
5. Improvements on GUI/tweaking small things - different text color/highlights for different "objects", theming options, etc.
6. Move onto other subjects (physics, chemistry, etc.)


## Contact
Hassan Farooq 2018

1hassanfarooq@gmail.com

Ideas or improvements can be suggested by opening up a [new issue](https://github.com/s-hfarooq/sCalc/issues/new)
