<style>
    .back {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }
</style>

<script>
    import { onDestroy } from 'svelte'
    import Square from './Square.svelte'
    import { gridStore } from '../../stores/gridStore'

    export let column

    let arr

    const unsubscribe = gridStore.subscribe(data => {
        arr = data.grid[column]
    })

    onDestroy(unsubscribe)
</script>

<div class="back">
    {#each arr as square, i}
        <Square x={column} y={i}/>
    {/each}
</div>