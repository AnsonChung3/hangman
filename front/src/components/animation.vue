<template>
    <div>
        <div v-for="(row, i) in hangmanFigure" :key="i">
            <div class="row hangman">
                <div class="col" v-for="(cell, i) in row" :key="i">{{cell}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hangProgress: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            fullHangman: [
                [' ', ' ', ' ', '_', '_', '_', '_', ' ', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', 'o', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', '/', '|', '\\'],
                [' ', ' ', ' ', '|', ' ', ' ', '/', ' ', '\\'],
                [' ', ' ', ' ', '|', '-', '-', '-', '-', '-'],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' '],
                ['_', '_', '_', '|', '_', '_', '_', ' ', ' '],
                ['_', '_', '_', '|', '_', '_', '_', 'o', ' ']
            ],
            hangmanFigure: [
                [' ', ' ', ' ', '_', '_', '_', '_', ' ', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                ['_', '_', '_', '|', '_', '_', '_', '|', ' ']
            ]
            // hangProgress: this.hangProgress
        }
    },
    watch: {
        hangProgress () {
            if (this.hangProgress === 0) {
                this.hangmanFigure = [
                    [' ', ' ', ' ', '_', '_', '_', '_', ' ', ' '],
                    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' '],
                    ['_', '_', '_', '|', '_', '_', '_', '|', ' ']
                ]
            } else if (this.hangProgress === 1) {
                this.hangmanFigure.splice(6, 1, this.fullHangman[8])
            } else if (this.hangProgress === 2) {
                this.hangmanFigure.splice(6, 1, this.fullHangman[7])
                this.hangmanFigure.splice(5, 1, this.fullHangman[2])
            } else if (this.hangProgress === 3) {
                this.hangmanFigure.splice(5, 1, this.fullHangman[3])
                this.hangmanFigure.splice(4, 1, this.fullHangman[2])
            } else if (this.hangProgress === 4) {
                this.hangmanFigure.splice(5, 1, this.fullHangman[4])
                this.hangmanFigure.splice(4, 1, this.fullHangman[3])
                this.hangmanFigure.splice(3, 1, this.fullHangman[2])
            } else if (this.hangProgress === 5) {
                this.hangmanFigure.splice(5, 1, this.fullHangman[5])
                this.hangmanFigure.splice(4, 1, this.fullHangman[4])
                this.hangmanFigure.splice(3, 1, this.fullHangman[3])
                this.hangmanFigure.splice(2, 1, this.fullHangman[2])
            } else if (this.hangProgress === 6) {
                this.hangmanFigure.splice(5, 1, this.fullHangman[6])
            }
        }
    },
    methods: {}
}
</script>

<style scoped>
.hangman{
    line-height: 0.9
}
</style>
