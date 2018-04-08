# Resumee

I was bored with the different options to maintain a resume out there, so I created my own.

## Usage

Requirements:

- [Node.js](http://nodejs.org/)

Clone the repo and install dependencies:

```
$ git clone https://github.com/nicolahery/resumee
$ cd resumee/
$ npm install
```

Run:

```
$ npm run dev
```

Change the `title` in `index.pug` to your name.

Edit `resume.pug` using the [Pug](https://pugjs.org) templating language. I chose it for its short syntax, and because [Markdown](http://daringfireball.net/projects/markdown/) wasn't enough to make multiple columns, etc.

Open a browser to `http://localhost:3000` to see your changes as you save the `.pug` files.

Edit `style.css` to your liking. Since resumes are meant to be printed, I defined font sizes and spacings using the `em` measure (versus `px`), that way I can change the default font size for the `@media print` query in order to make the resume fit on one page.

To generate a PDF, I just used Chrome's print dialog, witch offers a "Save as PDF" option, making sure I exclude header and footer in the print options.
