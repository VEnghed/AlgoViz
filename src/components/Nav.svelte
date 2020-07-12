<style>
	.nav {
		background-color: darkgray;
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 250;
		font-size: x-large;
		padding: 0.5em;
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
	}

	.navright {
		float: right;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.navleft {
		float: left;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	button {
		margin-left: 10px;
		margin-top: 6px;
		width: 30px;
		height: 30px;
		font-size: large;
	}
</style>


<script>
	import { gridStore } from '../stores/gridStore.js'

	function increase() {
		gridStore.growGrid()
	}

	function decrease() {
		gridStore.shrinkGrid()
	}
</script>

<div class="nav">
	<div class="navleft">
		<img style="height: 40px; padding-right: 10px;" src="favicon.svg" alt="Algot Wizzim">
		<strong>AlgoWiz</strong>
	</div>
	<div class="navright">
		Grid resolution:
		<button on:click="{decrease}">-</button>
		<button on:click="{increase}">+</button>
	</div>
</div>