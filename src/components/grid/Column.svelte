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
    import Square from './Square.svelte'

    export let column

</script>

<div class="back">
    {#each column as square}
        <Square {square}/>
    {/each}
</div>