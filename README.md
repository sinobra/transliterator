# Transliterator

This application transliterates text containing 2-character combinations that represent German and Portuguese vowels not found on US keyboards.

For example if you write pa;o, in the upper text field, it will be transliterated as pão in the lower text field.

I wrote my first iteration of this program as a CGI perl script about 20 years ago.  I thought it might be an interesting introduction to Ember.js to re-implement it
as an Ember.js application.

No back-end server required. It just reads text typed, (or pasted) into one textarea and transliterates it to another text area.

Coming from a ruby-on-rails background with jQuery for the front end, I was forced to change my thinking, my frame-of-reference-for-doing things. Normally given a [Help] button on a page, I would catch the event and put up a help dialog.  However in this iteration, both the [Help] button and the text of the help dialog become a sub-component, and the action just toggles the value of a variable used to control the display of the help text.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

