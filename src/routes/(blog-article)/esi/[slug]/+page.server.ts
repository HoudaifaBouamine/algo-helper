/** @type {import('./$types').PageLoad} */

export function load({ params }: any) {
	return {
		lesson: 'wow wow" ' + params.slug + ' is here'
	};
}
