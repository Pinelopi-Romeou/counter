// app state - The only source of thuth
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

/**
 * Listener
 */
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.id === 'btnDecr') {
            onDecreaseClicked()
        } else if (e.currentTarget.id === 'btnIncr') {
            onIncreaseClicked()
        } else {
            onResetClicked()
        }
    })
})

// Controllers

/**
 * Actions taken taken after 'Decrease' button clicked.
 * Action include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken taken after 'Increase' button clicked.
 * Action include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken taken after 'Reset' button clicked.
 * Action include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Decreases the counter and syncs the UI
 */
function decreaseCounter() {
    counter--
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI
 */
function increaseCounter() {
    counter++
    showCounter(counter)
}

/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
    counter = DEFAULT
    showCounter(counter)
}

/**
 * Assigns the counter to the corresponding UI Element 
 * and styles accordingly
 * @param {Number|String} counter - the counter value
 */
function showCounter(counter) {
    counterDOM.innerHTML = counter
    styleCounter(counter)
}

/**
 * Assigns a specific color to the counter.
 * Green when positives values, red when neagetive 
 * values, black when zero.
 * @param {Number} counter - the counter value
 */
function styleCounter(counter) {
    if (counter > 0) {
        counterDOM.style.color = 'green'
    } else if (counter < 0) {
        counterDOM.style.color = 'red'
    } else {
        counterDOM.style.color = 'black'
    }
}