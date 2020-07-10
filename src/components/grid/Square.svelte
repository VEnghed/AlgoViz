<style>
    div {
        justify-content: center;
        align-content: center;
        text-align: center;
        height: 100%;
        width: 100%;

        /* remove later */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    div:hover {
        box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.15) inset;
    }

    .default {
        background-color: rgb(141, 141, 136);
    }

    .clicked {
        background-color: rgb(72, 52, 160);
        background-image: url("../wall.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .showingAsConnection {
        background-color: rgb(243, 220, 8);
    }

    .beginning {
        background-color: rgb(252, 252, 252);
        background-image: url("../beginning.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .end {
        background-color: rgb(252, 252, 252);
        background-image: url("../end.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .highlight,
    .path {
        background-color: rgb(142, 226, 135);
    }


    .UD,
    .DU {
        background-image: url("../path/vline.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .LR,
    .RL {
        background-image: url("../path/hline.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .UR,
    .RU {
        background-image: url("../path/ur.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .UL,
    .LU {
        background-image: url("../path/ul.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .LD,
    .DL {
        background-image: url("../path/dl.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .DR,
    .RD {
        background-image: url("../path/dr.svg");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>

<script>
    export let square;

    import Nav from '../Nav.svelte'
    import { gridStore } from '../../stores/gridStore'

    let x = square.x
    let y = square.y

    let model

    gridStore.subscribe(data => {
        model = data.grid[x][y]
    })

    function handleClick(event) {
        if (event.which == 1) {
            gridStore.click({ x, y })
        } else if (event.which == 3) {
            event.preventDefault()
            gridStore.rClick({ x, y })
        }
    }

    function handleMouseOver(event) {
        if (event.buttons == 1)
            gridStore.click({ x, y })
    }

</script>

<div class="{model.state + ' ' + model.text}" on:mousedowny={handleClick} on:mouseover={handleMouseOver}
    ondragstart="return false;" on:contextmenu={handleClick} ondrop="return false;">
</div>