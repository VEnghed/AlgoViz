<style>
	.back {
		height: 80%;
		width: 80%;
		display: flex;
		flex-direction: row;
		margin-bottom: 6vh;
		box-shadow: -10px 10px 10px 0px rgba(0, 0, 0, 0.1);
	}

	p {
		margin-top: 2vh;
		margin-bottom: 0.5vh;
		color: aliceblue;
		text-align: center;
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

	onDestroy(unsubscribe)

</script>

<svelte:head>
	<title>AlgoWiz</title>
</svelte:head>
<p>
	Right-click in the rectangle below to place the start- and end squares. Left click and drag to place walls.
	Click the button to display the shortest path (if any)
</p>

<button on:click={find}>Run Algorithm</button>

<div class="back" ondragstart="return false;" ondrop="return false;">
	{#each model.grid as column}
			<Column {column}/>
	{/each}
</div>