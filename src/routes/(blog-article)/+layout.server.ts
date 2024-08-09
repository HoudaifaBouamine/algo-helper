import { filteredPosts } from '$lib/data/blog-posts';

export async function load({ url }: { url: { pathname: string } }) {
	let { pathname } = url;

	console.log('\n--> pathname : ', pathname);

	pathname = pathname.replace('esi/', '');
	const slug = pathname.replace('/', '');
	const post = filteredPosts.find((post) => post.slug === slug);

	return {
		post
	};
}
