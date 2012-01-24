Brickrouge
==========

Brickrouge is an open source object-oriented toolkit for PHP5.3+ that helps you create elements,
widgets and forms for your webapps or sites. Using the many features provided by the toolkit you
can create any kind of element, or you can use built-in elements which are commoly found in web
applications such as forms, text inputs, popovers or date pickers. Whatever you choose you can
always override attributes or behaviours to get exactly what you want.

Out of the box you have everything you need to create anchors, buttons, text inputs, textareas,
selects, checkbox group, radio groups, pagers, rangers, saluation pickers, alert messages, groups,
popovers, widgets and forms. Brickrouge supports localization and provides hooks to patch its
most critical features.

Brickrouge is compatible with
[Bootstrap](http://twitter.github.com/bootstrap/) from twitter and
[MooTools](http://mootools.net). Ready in a minute, you'll have everything you need to create
beautiful and clean webapps.

*Website*: <http://brickrouge.org>  
*Author*: Olivier Laviale <olivier.laviale@gmail.com>, <http://weirdog.com>


Usage
-----

Brickrouge doesn't need any configuration. Include the "Brickrouge/startup.php" file
somewhere in your application and it's ready:

	<?php
	
	require_once '/path/to/Brickrouge/startup.php';
	
Or if your are using it as a Phar:

	<?php
	
	require_once '/path/to/Brickrouge.phar';


### Using Brickrouge's autoloader

Brickrouge provides a simple autoloader that can be used to load its own classes. You need to
define the `Brickrouge\AUTOLOAD` constant to enable it:

	<?php
	
	define('Brickrouge\AUTOLOAD', true);
	
	require_once '/path/to/Brickrouge.phar';





Patching Brickrouge
-------------------

Brickrouge was initially designed for the
[ICanBoogie](https://github.com/ICanBoogie/ICanBoogie) framework, the project evolved to
stand alone and provides means to patch critical features such as translation, errors handling or
form storing/retrieving. Fallbacks for each feature are provided so you can patch what you need
and leave the rest.

Note: If Brickrouge detects ICanBoogie it will take full advantage of the framework.


### How it works

Brickrouge uses helpers defined in the "/lib/helpers.php" file. These are for the most part dummy
functions which call callbacks. For example the `Brickrouge\t()` function calls the
`Brickrouge\Patchable::$callback_translate` callback, which defaults to the
`Brickrouge\Patchable::fallback_translate()` function.

Thus, in order to patch the `t()` helper you need to overwrite the `$callback_translate`
static property.


### Example with the ICanBoogie framework

If you take a look at the "Brickrouge/startup.php" file you'll notice how Brickrouge patches its
helpers if it detects the [ICanBoogie](https://github.com/ICanBoogie/ICanBoogie) framework.

For example, this is how it patches its `t()` helper:

	Patchable::$callback_translate = 'ICanBoogie\I18n::translate';
	
And this is how it patches its `check_session()` helper:

	Patchable::$callback_check_session = function()
	{
		global $core;

		return $core->session;
	};




Building Brickrouge
-------------------

Brickrouge comes with pre-built CSS and JS files, compressed and non-compressed, but you might
want to play with its source, or use it as a Phar, in which case you might probably want to build
it yourself. A Makefile is available for this purpose.

Open a terminal, go to its directory and type "make":

	$ cd /path/to/Brickrouge/
	$ make

This consolidates the various CSS and JS files and create compressed and non-compressed
files in the "Brickrouge/assets/" directory.

Note that you need the [LESS](http://lesscss.org/) compiler to complie CSS files, and the
[YUI compressor](http://developer.yahoo.com/yui/compressor/) to compress JS and CSS files.


### Creating a Phar

To create a Phar type:

	$ cd /path/to/Brickrouge/
	$ make phar

The Phar is created in the parent directory under "Brickrouge.phar".




More information
----------------

For more information please visit the [Brickrouge website](http://brickrouge.org/).




Licence
-------

Brickrouge is licenced under the BSD licence.