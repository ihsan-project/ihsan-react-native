# ihsanReactNative
React Native Bootstrap

## Environment

- Node 14.16.0, Npm 6.4.1 [source](https://medium.com/@katopz/how-to-install-specific-nodejs-version-c6e1cec8aa11)
  - Used to match AWS Elastic Beanstalk max version as of 4/19/2020
  - (Recommended) Using Node Version Manager
     - Install [NVM](https://github.com/nvm-sh/nvm) with `brew install nvm`. Follow the post-install directions to update your `~/.bash_profile`.
     - Install Node Version 14.16.0 with `nvm install 14.16.0`
     - Installing [avn](https://www.npmjs.com/package/avn)
       - Now when you open a new terminal window, it will respect the .nvmrc
     - If avn isn't working, run `nvm use` and then follow instructions.
  - Specific Node version in your system
     - `brew install node@14`
     - `brew link node@14`
     - Follow brew instruction, like having to `--force` and `--overwrite`
- Cocoapods 1.10.1
    - `sudo gem install cocoapods`

## Local Development for iOS

1. In terminal navigate to the iOS directory and run `pod install`
    - Folow instructions in case repos need to be updated if it can't find a package