<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import { keywords, siteBaseUrl, title } from '$lib/data/meta';
	import type { BlogPost } from '$lib/utils/types';
	import RelatedPosts from '$lib/components/organisms/RelatedPosts.svelte';
	import Image from '$lib/components/atoms/Image.svelte';

	import { allPosts } from '$lib/data/blog-posts/index';

	export let data: { post: BlogPost };
	$: ({ post } = data);

	let metaKeywords = keywords;

	$: {
		if (post?.tags?.length) {
			metaKeywords = post.tags.concat(metaKeywords);
		}
		if (post?.keywords?.length) {
			metaKeywords = post.keywords.concat(metaKeywords);
		}
	}
	let reverse = allPosts;
	reverse.sort((a, b) => (a.title > b.title ? 1 : -1));

	let showNav = true;
</script>

<svelte:head>
	{#if post}
		<meta name="keywords" content={metaKeywords.join(', ')} />

		<meta name="description" content={post.excerpt} />
		<meta property="og:description" content={post.excerpt} />
		<meta name="twitter:description" content={post.excerpt} />
		<link rel="canonical" href="{siteBaseUrl}/{post.slug}" />

		<title>{post.title} - {title}</title>
		<meta property="og:title" content="{post.title} - {title}" />
		<meta name="twitter:title" content="{post.title} - {title}" />

		{#if post.coverImage}
			<meta property="og:image" content="{siteBaseUrl}{post.coverImage}" />
			<meta name="twitter:image" content="{siteBaseUrl}{post.coverImage}" />
		{/if}
	{/if}
</svelte:head>

<div class="article-layout">
	<Header showBackground />
	<div class="main-container">
		<div>
			<button on:click={() => (showNav = !showNav)} class="text-red-500 w-3 h-3">X</button>
			<nav
				class={showNav
					? 'min-w-[200px] w-[300px] p-2 border-r-2 border-primary'
					: 'w-0 p-0 border-r-0'}
			>
				{#if showNav}
					{#each reverse as p}
						<a
							href="{siteBaseUrl}{p.slug}"
							class="flex text-[14px] mt-1 border-b-2 border-primary w-full h-5 overflow-hidden"
							>{p.title.split(' - ')[2] ?? p.title}</a
						>
					{/each}
				{/if}
			</nav>
		</div>
		<main>
			<article id="article-content">
				<div class="header">
					{#if post}
						<h1>{post.title}</h1>
						<!-- <div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div>
					{#if post.updated}
						<div class="note">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div>
					{/if} -->
						{#if post.readingTime}
							<div class="note">{post.readingTime}</div>
						{/if}
						{#if post.tags?.length}
							<div class="tags">
								{#each post.tags as tag}
									<Tag>{tag}</Tag>
								{/each}
							</div>
						{/if}
					{/if}
				</div>
				{#if post && post.coverImage}
					<div class="cover-image">
						<Image src={post.coverImage} alt={post.title} />
					</div>
				{/if}
				<div class="content">
					<slot />
				</div>
			</article>

			{#if post.relatedPosts && post.relatedPosts.length > 0}
				<div class="container">
					<RelatedPosts posts={post.relatedPosts} />
				</div>
			{/if}
		</main>
	</div>

	<Footer />
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.main-container {
		display: flex;
	}

	.article-layout {
		--body-background-color: var(--color--post-page-background);
		background-color: var(--color--post-page-background);
	}

	#article-content {
		--main-column-width: 65ch;
		position: relative;
		padding-top: 40px;
		padding-bottom: 80px;
		padding-right: 15px;
		padding-left: 15px;

		@include for-iphone-se {
			padding-left: 0;
			padding-right: 0;
		}

		@include for-tablet-portrait-up {
			padding-right: 20px;
			padding-left: 20px;
		}

		@include for-tablet-landscape-up {
			padding-right: 30px;
			padding-left: 30px;
		}

		display: flex;
		flex-direction: column;
		gap: 30px;

		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			gap: 10px;
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;

			.note {
				font-size: 90%;
				color: rgba(var(--color--text-rgb), 0.8);
			}
		}

		.cover-image {
			width: min(var(--main-column-width), 100%);
			margin: 0 auto;
			max-height: 400px;
			box-shadow: var(--image-shadow);
			border-radius: 6px;

			img {
				width: 100%;
				height: 100%;
				max-height: 400px;
				object-fit: cover;
			}
		}

		:global(.cover-image img) {
			max-height: 400px;
			object-fit: cover;
		}

		.content {
			display: grid;
			grid-template-columns:
				1fr
				min(var(--main-column-width), 100%)
				1fr;

			:global(> *) {
				grid-column: 2;
			}

			:global(> .full-bleed) {
				grid-column: 1 / 4;
				width: 100%;
				max-width: 1600px;
				margin-left: auto;
				margin-right: auto;
			}
		}

		.tags {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			flex-wrap: wrap;
		}
	}
</style>
