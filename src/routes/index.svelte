<style>
	.back {
		height: 80%;
		width: 80%;
		display: flex;
		flex-direction: row;
		margin-bottom: 6vh;
	}

	p {
		margin-top: 2vh;
		margin-bottom: 1vh;
		color: aliceblue;
	}

	button {
		margin: 0px;
	}
</style>

<script>
	import { onDestroy } from 'svelte';
	import Column from '../components/grid/Column.svelte'
	import { gridStore } from '../stores/gridStore'
	import bfpf from '../stores/breadthFirst.js'

	let model

	const unsubscribe = gridStore.subscribe(data => {
		model = data
	})

	function find() {
		// TODO: bake into one method
		gridStore.resetHighlights()
		gridStore.showPath(bfpf(model))
		gridStore.showVisited()
	}

	function newnew() {
		gridStore.recreateGrid(4, 2)
	}

	onDestroy(unsubscribe)

</script>

<svelte:head>
	<title>Algoviz</title>
</svelte:head>
<p>
	Right-click in the rectangle below to place the start- and end squares. Left click and drag to place walls.
	Click the button to display the shortest path (if any)
</p>

<button on:click={find}>Run Algorithm</button>

<div class="back" ondragstart="return false;" ondrop="return false;">
	{#each model.grid as column, i}
			<Column column={i}/>
	{/each}
</div>