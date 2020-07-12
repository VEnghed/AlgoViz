import Square from './square'

export default class AlgoWizModel {
    constructor(columns) {
        this.createGrid(columns)
    }

    createGrid(columns) {
        this.grid = undefined
        this.columns = columns
        this.rows = columns / 2
        this.beginning = undefined
        this.end = undefined
        this.placing = 'beginning'

        this.grid = new Array(columns)

        for (let x = 0; x < this.grid.length; x++)
            this.grid[x] = new Array(this.rows)

        for (let x = 0; x < this.grid.length; x++)
            for (let y = 0; y < this.rows; y++)
                this.grid[x][y] = new Square(x, y)

        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < this.rows; y++) {
                //above
                if (y > 0)
                    this.grid[x][y].connections[0] = this.grid[x][y - 1]
                //left
                if (x > 0)
                    this.grid[x][y].connections[1] = this.grid[x - 1][y]
                //bottom
                if (y < this.rows - 1)
                    this.grid[x][y].connections[2] = this.grid[x][y + 1]
                //right
                if (x < columns - 1)
                    this.grid[x][y].connections[3] = this.grid[x + 1][y]
            }
        }
    }

    growGrid() {
        if (this.columns >= 64) return
        this.createGrid(this.columns * 2, this.columns)
    }

    shrinkGrid() {
        if (this.columns <= 4) return
        this.createGrid(this.columns / 2, this.columns / 4)
    }

    click({ x, y }) {
        this.grid[x][y].click()
    }

    rClick({ x, y }) {
        if (this.grid[x][y].state == 'beginning' || this.grid[x][y].state == 'end') return
        this.grid[x][y].text = ''
        if (this.placing == 'beginning') {
            if (this.beginning)
                this.beginning.state = 'default'
            this.grid[x][y].state = 'beginning'
            this.beginning = this.grid[x][y]
            this.placing = 'end'
        } else {
            if (this.end)
                this.end.state = 'default'
            this.grid[x][y].state = 'end'
            this.end = this.grid[x][y]
            this.placing = 'beginning'
        }
    }

    showVisited() {
        this.grid.forEach(col => col.forEach(sq => sq.showVisited()))
    }

    resetHighlights() {
        this.grid.forEach(col => col.forEach(sq => sq.resetHighlights()))
    }

    showPath(square) {
        if (!square) return
        let path = square.path

        for (let i = 1; i < path.length; i++) {
            this.grid[path[i].x][path[i].y].state = 'path'
        }

        path.push(this.end)

        for (let i = 1; i < path.length - 1; i++) {
            path[i].text = this.getDirection(path[i], path[i - 1])
            path[i].text += this.getDirection(path[i], path[i + 1])
        }
    }

    getDirection(square1, square2) {
        let prevVector = { x: square1.x - square2.x, y: square1.y - square2.y }
        switch (prevVector.x) {
            case 0:
                if (prevVector.y == 1) {
                    return 'U'
                } else {
                    return 'D'
                }
            case -1:
                return 'R'
            case 1:
                return 'L'
            default:
                break;
        }
    }
}