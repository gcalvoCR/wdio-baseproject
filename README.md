# wdio-baseproject

This repo is a base for UI automation using wdio. Some things you should know:
- It it set to generate allure results automatically.
- It has a preview to generate mochawesome reports but they're not implemented.


## Pre-requisites
Make sure you have installed:
- Install Node.
- Visual Studio Code or any other code editor installed.


# Steps
## 1. The solution
- Clone the repo, [here it is](https://github.com/gcalvoCR/wdio-baseproject).
- Open the solution on VS code or any code editor of your preference.
- check the scripts to run under the file config.json.

# Useful commands
- Want to generate the allure reports with history? Open up a terminal/CMD and navigate to the root of the project:
There do:
```sh
cp -R ./allure-report/history/ ./allure-results/
allure generate --clean
allure open
```

but if you don't have allure reporter installed globally you should do
```sh
cp -R ./allure-report/history/ ./allure-results/
npx allure generate --clean
npx allure open
```

___

### by Gabriel Calvo Vargas

¿Do you want to get in touch? Let's do it [here](https://www.linkedin.com/in/gabriel-calvo-vargas-932b3357/)! 


