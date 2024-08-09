<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	let slug = $page.params.slug;
</script>

{@html data.post.html}
