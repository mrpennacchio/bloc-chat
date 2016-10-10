# Frontend Starter Project

A starter project for Frontend applications, particularly Single Page Applications (a.k.a. SPAs).

## Requirements

- Node.js

## Installation

### Start by cloning the repository

```bash
$ git clone https://github.com/philspitler/frontend-project-starter.git <your-frontend-project-name>
```

### Change into your project directory

```bash
$ cd <your-frontend-project-name>
```

### Remove the .git directory

Because you cloned this to use for your own project, you should remove the .git directory that comes with cloning a Git repository.

```bash
$ rm -fr .git
```

*Follow [these steps](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/), if you'd then like to use Git and GitHub for your new project.*

### Install the project dependencies by running

```bash
$ npm install
```

## Usage Examples

### Run on default port 3000

```bash
$ npm start
```

*Browse to [http://localhost:3000/](http://localhost:3000/) to see your app.*

### Run on port 5000

```bash
$ PORT=5000 npm start
```
*Browse to [http://localhost:5000/](http://localhost:5000/) to see your app.*

### Stopping the Server

```
(ctrl+c)
```

*On occasion it may take hitting `(ctrl+c)` 2 times to stop the server.*

## Relevant Files and Directories

### index.html

The main entry point for your SPA.

### templates

Place any HTML files or templates which get converted to HTML (e.g. handlebars, mustache, jade) in this directory.

### assets/images

Place your images in this directory.

Reference images in your code like:

```html
<img src="/assets/images/filename.jpg">
```

### scripts

Place your javascript file(s) in this directory.  The app.js file is already included and referenced in index.html like:

```html
<script src="/scripts/app.js"></script>
```

### styles

Place your css file(s) in this directory.  The style.css file is already included and referenced in index.html like:

```html
<link href="/styles/style.css" rel="stylesheet">
```
