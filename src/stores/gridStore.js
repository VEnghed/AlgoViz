/**
 * This is a way to wrap a model class/module in a Svelte custom store. 
 */

import { writable } from 'svelte/store'
import Model from '../model/model'

let model = new Model(32, 16)

function createStore() {
    const { subscribe, set, update } = writable(model)

    return {
        subscribe,
        //these methods could have return values 
        click: arg => update(model => {
            model.click(arg)
            return model
        }),
        rClick: arg => update(model => {
            model.rClick(arg)
            return model
        }),
        showVisited: () => update(model => {
            model.showVisited()
            return model
        }),
        showPath: (square) => update(model => {
            model.showPath(square)
            return model
        }),
        recreateGrid: (cols, rows) => update(model => {
            model.createGrid(cols, rows)
            return model
        })
        ,
        resetHighlights: () => model.resetHighlights(),
        update
    }
}

export const gridStore = createStore()