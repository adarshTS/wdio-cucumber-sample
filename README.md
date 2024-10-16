# WDIO Cucumber Sample Project

This is a sample project demonstrating a basic WebdriverIO setup with Cucumber for end-to-end web testing.

## Prerequisites

* Node.js and npm installed on your machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd wdio-cucumber-sample
   npm install
   npm run wdio
   ```
## Creating the Project from Scratch

### Set up the project:

1. Create the project directory:
```bash
  mkdir my-wdio-cucumber-project
  cd my-wdio-cucumber-project
```

2. Initialize npm: `npm init -y`
3. Install WebdriverIO CLI: `npm install @wdio/cli --save-dev`
4. Run the WebdriverIO configuration helper: `npx wdio config`
5. Select the options as described in the WebdriverIO configuration guide.
6. Write your feature files and step definitions:
7. Create feature files (.feature) in the features directory (or as configured).
8. Create step definition files (.js) in the features/step-definitions directory (or as configured).
9. Modify your `wdio.conf.js` file and update the test file path here
10. Run the tests: `npx wdio run ./wdio.conf.js`
