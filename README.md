# PS - XT Coding Assignment

A front-end application which would help users to list and browse all launches by SpaceX program.

Deployed URL : https://ps-xt-coding-assignment-2021.herokuapp.com/

> Built with `Angular v11.0.4`, bundled with `Angular CLI`.

## Table of contents:

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Setting up upstream repository](#setting-up-upstream-repository)
- [Development and builds](#development-builds)
- [Warning](#warning)
- [Screenshots](#screenshots)


## <a name="prerequisites"></a> Prerequisites
What you need to run this app:

- Angular version 11
- Angular CLI version 11
- Typescript version > 4
- node.js version 12+
- npm (node package manager) version 6.14.9
- Visual studio code version 1.51.1

## <a name="getting-started"> Getting started

### <a name="installation"> Installation

You can install **`https://github.com/raygade16/ps-xt-coding-assignment.git`** by simply forking the repo:

```
# clone the repo
$ git https://github.com/raygade16/ps-xt-coding-assignment.git [your-project-name]
$ cd [your-project-name]
```

### <a name="setting-up-upstream-repository"> Setting up upstream repository

Once you have cloned the repo, you can follow these steps to allow sync changes made in this repo with your fork:

```
# set up `origin`
$ git remote set-url origin [your-fork-repo]

# set up `upstream` to sync future changes
$ git remote add upstream https://github.com/raygade16/space-x-assignment/

# verify the upstream repo specified for your fork
$ git remote -v
origin    https://github.com/YOUR_USERNAME/[your-fork-repo].git (fetch)
origin    https://github.com/YOUR_USERNAME/[your-fork-repo].git (push)
upstream  https://github.com/arun-maddheshia/space-x-assignment (fetch)
upstream  https://github.com/arun-maddheshia/space-x-assignment (push)

# initial push for the fork
$ git push
```

In order to merge the latest upstream changes, simply follow:

```
# fetch the latest upstream
$ git fetch upstream

# merge the upstream changes
$ git merge upstream/main
```

then handle any conflicts, and go on with building your app.

### <a name="development-builds"> Development and builds

Below are the scripts to dev, build, and test this seed project:

#### Install dependencies

```console
# use `npm` to install the deps
$ npm install
```

#### Development server

```
# dev server
$ ng serve

# dev server (AoT compilation)
$ ng serve --aot

# dev server (SSR & AoT compilation)
$ npm run build:ssr && npm run dev:ssr
```

And then,

- Navigate to `http://localhost:4200/` for the SPA (browser) build.
- Navigate to `http://localhost:4000/` for the SSR (universal) build.

The app will automatically re-compile if you change any of the source files.

#### Build

```
# development build
$ ng build

# PRODUCTION build (SSR)
$ npm run build:ssr

```


### <a name="warning"> Warning: Universal "Gotchas"

> When building Universal components in Angular there are a few things to keep in mind.

 - For the server bundle you may need to include your 3rd party module into `nodeExternals` whitelist

 - **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    - If you need to use them, consider limiting them to only your client and wrapping them situationally. You can use the Object injected using the PLATFORM_ID token to check whether the current platform is browser or server. 
    
    ```typescript
     import { PLATFORM_ID } from '@angular/core';
     import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     
     constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }
     
     ngOnInit() {
       if (isPlatformBrowser(this.platformId)) {
          // Client only code.
          ...
       }
       if (isPlatformServer(this.platformId)) {
         // Server only code.
         ...
       }
     }
    ```
    
 - **Don't manipulate the nativeElement directly**. Use the _Renderer2_ from ["@angular/core"](https://angular.io/api/core/Renderer2). We do this to ensure that in any environment we're able to change our view.
```typescript
constructor(element: ElementRef, renderer: Renderer2) {
  this.renderer.setStyle(element.nativeElement, 'font-size', 'x-large');
}
```

### <a name="screenshots"> App Screenshots"

#### Initial Screen

<img width="1440" alt="inital-screen" src="https://user-images.githubusercontent.com/5073214/111126799-1b555600-8599-11eb-8fc3-d02f287a6fc3.png">

#### Screen With Filter Applied

<img width="1440" alt="with-year-filters" src="https://user-images.githubusercontent.com/5073214/111126853-2a3c0880-8599-11eb-97bc-a8084f3420fb.png">

#### Ipad Screen

<img alt="ipad-screen" src="https://user-images.githubusercontent.com/5073214/111126836-260feb00-8599-11eb-888c-369b6799f3de.png">

#### Mobile Screen

<img alt="mobile-screen" src="https://user-images.githubusercontent.com/5073214/111126847-290adb80-8599-11eb-9da0-0968e6270c37.png">

#### No Launch Screen

<img width="1440" alt="No Launch Screen" src="https://user-images.githubusercontent.com/5073214/111126851-29a37200-8599-11eb-9c0c-e3ecb6be43b0.png">


