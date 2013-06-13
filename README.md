# Resumee

I was bored with the different options to maintain a resume out there, so I created my own.

## Usage

Requirements:

- [Node.js](http://nodejs.org/) with [Grunt](http://gruntjs.com/)

Clone the repo and install dependencies:

```
$ git clone https://github.com/nicolahery/resumee
$ cd resumee/
$ npm install
```

Run:

```
$ grunt watch
```

Change the `title` in `index.jade` to your name.

Edit `resume.jade` using the [Jade](http://jade-lang.com/) templating language. I chose it for its short syntax, and because [Markdown](http://daringfireball.net/projects/markdown/) wasn't enough to make multiple columns, etc.

Fire up the server in the project directory you can see your changes in the browser as you save the `.jade` files:

```
$ grunt server
```

Edit `style.css` to your liking. Since resumes are meant to be printed, I defined font sizes and spacings using the `em` measure (versus `px`), that way I can change the default font size for the `@media print` query in order to make the resume fit on one page.

To generate a PDF, I just used Chrome's print dialog, witch offers a "Save as PDF" option, making sure I exclude header and footer in the print options.