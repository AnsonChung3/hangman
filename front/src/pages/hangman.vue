<template>
  <div class="row">
    <div class="col-7">
      <input v-model="guess">
        <div class="row" style="width: 30%; margin: 2% 0% 2% 0%">
            <div
                v-for="(word, i) in word"
                :key=i
                class="hangmanWord col">
                {{ word }}
            </div>
        </div>
        <p v-if="isGamePlaying">
            You have {{ remainGuess }} guess(es) left!
            You have tried: {{ wrongGuesses }}
        </p>
        <p v-else>
            {{ endingText }}
        </p>
        <q-btn
            v-if="isGamePlaying"
            :disable="isSubmitDisabled"
            label="Submit"
            @click="submitGuess"
            outline
            class="qbutton"
        />
        <q-btn
            v-else
            :label="btnText"
            @click="startNew"
            class="qbutton"
            outline
        />
    </div>
    <animation class=" col-5 animation" :hangProgress="currentNumOfGuess"/>
  </div>
</template>

<script>
const MAX_NUM_OF_GUESS = 6
const REG = /[A-Za-z]/g

import animation from 'src/components/animation.vue'

export default {
    components: {
        animation
    },
    data () {
        return {
            guess: '',
            word: ['?', '?', '?', '?', '?', '?'],
            currentNumOfGuess: 0,
            btnText: '',
            endingText: '',
            answerIndex: 'python',
            wrongGuesses: []
        }
    },
    computed: {
        remainGuess () {
            return (MAX_NUM_OF_GUESS - this.currentNumOfGuess)
        },
        isSubmitDisabled () {
            return (this.guess.length !== 1)
        },
        isGamePlaying () {
            if (this.word.every((element) => element !== '?') || this.remainGuess === 0) {
                return false
            }
            return true
        }
    },
    watch: {
        isGamePlaying () {
            if (this.word.every((element) => element !== '?')) {
                this.endingText = `You did it in ${this.currentNumOfGuess} guess(s)! Great stuff!`
                this.btnText = 'start new game'
            } else {
                this.btnText = 'oh no, man is hanged now...hang a new man!'
            }
        }
    },
    methods: {
        submitGuess () {
            if (this.guess.match(REG) === null) {
                alert('Please try alphabets only.')
                this.guess = ''
                return
            }
            this.guess = this.guess.toLowerCase()
            if (this.wrongGuesses.includes(this.guess)) {
                alert('Oops! You have tried this one already.')
                this.guess = ''
                return
            }
            this.$api.post('api/hangman', {
                guess: this.guess.toLowerCase(),
                index: this.answerIndex
            })
                .then(response => {
                    if (response.data.length === 0) {
                        this.currentNumOfGuess += 1
                        this.wrongGuesses.push(this.guess)
                    } else {
                        for (const i of response.data) {
                            this.word[i] = this.guess
                        }
                    }
                    this.guess = ''
                })
        },
        startNew () {
            this.word = ['?', '?', '?', '?', '?', '?']
            this.currentNumOfGuess = 0
            this.endingText = ''
            this.wrongGuesses = []
            this.$api.get('api/newman')
                .then(response => {
                    this.answerIndex = response.data
                })
        }
    }
}
</script>

<style scoped>
.hangmanWord{
    border: 2px solid #93A1A1;
    margin-right: 2px;
    text-align: center
}
.qbutton{
    margin: 5px 0px 5px 0px
}
.animation{
    max-width: 80px
}
</style>
