/*
 * This file is part of the Brickrouge package.
 *
 * (c) Olivier Laviale <olivier.laviale@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Activates the target tab content of a tab.
 */
document.body.addEvent('click:relay(.nav-tabs a)', function(ev, el) {

	var target = document.id(el.get('href').substring(1))

	if (!target) return

	target.getParent('.tab-content').getChildren().each(function(pane) {

		pane[target == pane ? 'addClass' : 'removeClass']('active')
	})
})