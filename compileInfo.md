# Compiling commands
Run the commands below while in the `src` directory to compile current code for the desired system

## Linux
`electron-packager . sCalc --overwrite --asar=true --platform=linux --arch=x64 --icon=icons/icon.png --prune=true --out=release-builds`

## Mac
`electron-packager . --overwrite --platform=darwin --arch=x64 --icon=icons/icon.icns --prune=true --out=release-builds`

## Windows
`electron-packager . sCalc --overwrite --asar=true --platform=win32 --arch=ia32 --icon=icons/icon.ico --prune=true --out=release-builds --version-string.CompanyName=HAFAR --version-string.FileDescription=HAFAR --version-string.ProductName="sCalc"`
