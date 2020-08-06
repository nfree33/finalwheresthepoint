const changeDisplayValue = (event, selector, displayValue) => {
    const $item = $(selector);
    $item.css('display', displayValue);
}
$(() => {
    //////////////////////////////////
    // ACTORS
    //////////////////////////////////

    ////human class


    class myPlayer {
        constructor(name) {
            this.name = name;
            this.lives = 1;
            this.wins = 0;
        }
        offense() {

            document.addEventListener('keydown', function (event) {

                console.log(`Ira\s choice is ${Ira.choice}`)
                if (event.keyCode === 37) {
                    changeDisplayValue(event, $userPointLeft, 'block')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'none')
                    changeDisplayValue(event, $userLookLeft, 'none')

                    if (Ira.choice === 1) {
                        Ira.lives -= 1
                    }
                }
                if (event.keyCode === 38) {
                    console.log('point Up was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'block')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'none')

                    changeDisplayValue(event, $userLookUp, 'none')
                    if (Ira.choice === 3) {
                        Ira.lives -= 1
                    }

                }
                if (event.keyCode === 39) {
                    console.log('point Right was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'none')
                    changeDisplayValue(event, $userPointRight, 'block')

                    changeDisplayValue(event, $userLookRight, 'none')
                    if (Ira.choice === 2) {
                        Ira.lives -= 1
                    }
                }
                if (event.keyCode === 40) {
                    console.log('point Down was pressed');
                    changeDisplayValue(event, $userPointLeft, 'none')
                    changeDisplayValue(event, $userPointUp, 'none')
                    changeDisplayValue(event, $userPointDown, 'block')
                    changeDisplayValue(event, $userPointRight, 'none')

                    changeDisplayValue(event, $userLookDown, 'none')
                    if (Ira.choice === 4) {
                        Ira.lives -= 1
                    }
                }

            })
            document.removeEventListener('keydown', offense)
        }

        defense() {
            document.addEventListener('keydown', function (event) {
                
                console.log(`Ira\s choice is ${Ira.choice}`)
                if (event.keyCode === 65) {
                    changeDisplayValue(event, $userLookLeft, 'block')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointLeft, 'none')
                    if (Ira.choice === 1) {
                        human.lives -= 1
                    }
                }
                if (event.keyCode === 68) {
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'block')

                    changeDisplayValue(event, $userPointRight, 'none')
                    if (Ira.choice === 2) {
                        human.lives -= 1
                    }
                }
                if (event.keyCode === 87) {
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'block')
                    changeDisplayValue(event, $userLookDown, 'none')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointUp, 'none')
                    if (Ira.choice === 3) {
                        human.lives -= 1
                    }
                }


                if (event.keyCode === 83) {
                    changeDisplayValue(event, $userLookLeft, 'none')
                    changeDisplayValue(event, $userLookUp, 'none')
                    changeDisplayValue(event, $userLookDown, 'block')
                    changeDisplayValue(event, $userLookRight, 'none')

                    changeDisplayValue(event, $userPointDown, 'none')
                    if (Ira.choice === 4) {
                        human.lives -= 1
                    }
                }

            })
        }
    }
    const human = new myPlayer('Neil')
    //////end human class

    //////start CPU class
    class CPU {
        constructor(name) {
            this.name = name;
            this.lives = 3;
            this.choice = 0;
            this.wins = 0;
        }
        cpuTurnDefense() {
            this.choice = Math.floor(Math.random() * 4) + 1;
            if (this.choice === 1) {
                $cpuLookLeft.css('display', 'block')
                $cpuLookRight.css('display', 'none')
                $cpuLookUp.css('display', 'none')
                $cpuLookDown.css('display', 'none')
                $cpuLookLeft.css('border', '5px solid red')
                console.log(`${this.choice} was randomly selected..cpu looked left`)

                return 1;

            } else if (this.choice === 2) {
                $cpuLookLeft.css('display', 'none')
                $cpuLookRight.css('display', 'block')
                $cpuLookUp.css('display', 'none')
                $cpuLookDown.css('display', 'none')
                $cpuLookRight.css('border', '5px solid red')
                console.log(`${this.choice} was randomly selected.. cpu looked right`)

                return 2;

            } else if (this.choice === 3) {
                $cpuLookLeft.css('display', 'none')
                $cpuLookRight.css('display', 'none')
                $cpuLookUp.css('display', 'block')
                $cpuLookDown.css('display', 'none')
                $cpuLookUp.css('border', '5px solid red')
                console.log(`${this.choice} was randomly selected.. cpu looked up`)

                return 3;

            } else if (this.choice === 4) {
                $cpuLookLeft.css('display', 'none')
                $cpuLookRight.css('display', 'none')
                $cpuLookUp.css('display', 'none')
                $cpuLookDown.css('display', 'block')
                $cpuLookDown.css('border', '5px solid red')
                console.log(`${this.choice} was randomly selected... cpu looked down`)

                return 4;

            }
        }
        cpuTurnOffense() {
            this.choice = Math.floor(Math.random() * 4) + 1;
            if (this.choice === 1) {
                $cpuPointLeft.css('display', 'block')
                $cpuPointLeft.css('border', '5px solid black')
                $cpuPointRight.css('display', 'none')
                $cpuPointUp.css('display', 'none')
                $cpuPointDown.css('display', 'none')
                console.log(`${this.choice} was randomly selected..cpu pointed left`)

                return 1;

            } else if (this.choice === 2) {
                $cpuPointLeft.css('display', 'none')
                $cpuPointRight.css('display', 'block')
                $cpuPointRight.css('border', '5px solid black')
                $cpuPointUp.css('display', 'none')
                $cpuPointDown.css('display', 'none')
                console.log(`${this.choice} was randomly selected..cpu pointed right`)

                return 2;


            } else if (this.choice === 3) {
                $cpuPointLeft.css('display', 'none')
                $cpuPointRight.css('display', 'none')
                $cpuPointUp.css('display', 'block')
                $cpuPointUp.css('border', '5px solid black')
                $cpuPointDown.css('display', 'none')
                console.log(`${this.choice} was randomly selected..cpu pointed up`)

                return 3;


            } else if (this.choice === 4) {
                $cpuPointLeft.css('display', 'none')
                $cpuPointRight.css('display', 'none')
                $cpuPointUp.css('display', 'none')
                $cpuPointDown.css('display', 'block')
                $cpuPointDown.css('border', '5px solid black')
                console.log(`${this.choice} was randomly selected..cpu pointed down`)

                return 4;


            }
        }
    }
    ////////end CPU class

    //Array of Teachers
    const Ira = new CPU("Ira")


    /////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////

    //Grabbing Elements
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const $selectOpponent = $('.select-opponent-button')
    const $startOffense = $('.start-offense-button')
    const $startDefense = $('.start-defense-button')

    const $cpuLookLeft = $('.cpu-look-left')
    const $cpuLookRight = $('.cpu-look-right')
    const $cpuLookUp = $('.cpu-look-up')
    const $cpuLookDown = $('.cpu-look-down')
    const $cpuPointLeft = $('.cpu-point-left')
    const $cpuPointRight = $('.cpu-point-right')
    const $cpuPointUp = $('.cpu-point-up')
    const $cpuPointDown = $('.cpu-point-down')
    const $cpuPointSpin = $('cpu-point-spin')


    const $userLookLeft = $('.user-look-left')
    const $userLookRight = $('.user-look-right')
    const $userLookUp = $('.user-look-up')
    const $userLookDown = $('.user-look-down')
    const $userPointLeft = $('.user-point-left')
    const $userPointRight = $('.user-point-right')
    const $userPointUp = $('.user-point-up')
    const $userPointDown = $('.user-point-down')
    const $userPointSpin = $('user-point-spin')

    /////////////////////////   
    //Event Listeners
    /////////////////////////
    //MODAL

    $openBtn.on('click', (event) => {
        changeDisplayValue(event, $modal, 'block')
    });
    $closeBtn.on('click', (event) => {
        changeDisplayValue(event, $modal, 'none')
    });

    //MODAL EMD
    //Event listeners End



    //Event Handlers Start
    const selectOpponent = () => {
        let chooseTeacher;
        chooseTeacher = prompt(`Ira is ready to battle, are you? (y) or (n)`)
        if (chooseTeacher === 'y') {
            loadIra();
        } else {
            selectOpponent();
        }
    }


    const loadIra = () => {
        $cpuLookLeft.css('background', 'url(https://media1.popsugar-assets.com/files/thumbor/xYZUeTOX8Z-K96Jbp_iTNuYD-z4/160x160/filters:format_auto-!!-:strip_icc-!!-:sharpen-!1,0,true!-/2020/03/23/166/n/44701584/addurlb4IDw6/i/embed.jpg)')
        $cpuLookRight.css('background', 'url(https://cnet1.cbsistatic.com/img/GKyiF9duCfYOP1fgkkALm5fCTMI=/196x196/2019/12/14/1387f7f7-6cbe-4a14-a9a7-e9f4c9741b65/baby-yoda-news-door-cb-1.jpg)')
        $cpuLookUp.css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/164px-Green-Up-Arrow.svg.png')
        $cpuLookDown.css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Aiga_downarrow_inv.svg/120px-Aiga_downarrow_inv.svg.png)')
    }


    const offenseSetUp = (event) => {
        changeDisplayValue(event, $cpuPointLeft, 'none')
        changeDisplayValue(event, $cpuPointRight, 'none')
        changeDisplayValue(event, $cpuPointUp, 'none')
        changeDisplayValue(event, $cpuPointDown, 'none')
        
        changeDisplayValue(event, $cpuLookLeft, 'block')
        changeDisplayValue(event, $cpuLookRight, 'block')
        changeDisplayValue(event, $cpuLookUp, 'block')
        changeDisplayValue(event, $cpuLookDown, 'block')

        changeDisplayValue(event, $userPointLeft, 'block')
        changeDisplayValue(event, $userPointRight, 'block')
        changeDisplayValue(event, $userPointUp, 'block')
        changeDisplayValue(event, $userPointDown, 'block')

        changeDisplayValue(event, $userLookLeft, 'none')
        changeDisplayValue(event, $userLookRight, 'none')
        changeDisplayValue(event, $userLookUp, 'none')
        changeDisplayValue(event, $userLookDown, 'none')

        $cpuLookDown.css('border', '')
        $cpuLookUp.css('border', '')
        $cpuLookRight.css('border', '')
        $cpuLookLeft.css('border', '')


    }
    const defenseSetUp = (event) => {

        changeDisplayValue(event, $cpuPointLeft, 'block')
        changeDisplayValue(event, $cpuPointRight, 'block')
        changeDisplayValue(event, $cpuPointUp, 'block')
        changeDisplayValue(event, $cpuPointDown, 'block')
        changeDisplayValue(event, $cpuPointSpin, 'block')

        changeDisplayValue(event, $cpuLookLeft, 'none')
        changeDisplayValue(event, $cpuLookRight, 'none')
        changeDisplayValue(event, $cpuLookUp, 'none')
        changeDisplayValue(event, $cpuLookDown, 'none')

        changeDisplayValue(event, $userPointLeft, 'none')
        changeDisplayValue(event, $userPointRight, 'none')
        changeDisplayValue(event, $userPointUp, 'none')
        changeDisplayValue(event, $userPointDown, 'none')

        changeDisplayValue(event, $userLookLeft, 'block')
        changeDisplayValue(event, $userLookRight, 'block')
        changeDisplayValue(event, $userLookUp, 'block')
        changeDisplayValue(event, $userLookDown, 'block')

        $cpuPointDown.css('border', '')
        $cpuPointUp.css('border', '')
        $cpuPointRight.css('border', '')
        $cpuPointLeft.css('border', '')


    }

// const hideSpinner = () => {
//     $cpuPointSpin.css('display', 'none')
// }

    const checkWin = () => {
        if (Ira.lives <= 0 && human.lives > 0) {
            alert('you won the round')
            human.wins += 1;
        } else if (Ira.lives > 0 && human.lives <= 0) {
            alert('you lose the round')
            Ira.wins += 1;
        }
        console.log(`${Ira.name} has ${Ira.lives} left and user has ${human.lives} left`)
        human.lives = 1;
        Ira.lives = 1;
        console.log(`NOW IRA HAS ${Ira.lives} AND YOU HAVE ${human.lives}`)
    }

const checkSeriesWin = () => {
    if(human.wins >= 3){
        alert('YOU WIN !!!')
        console.log('YOU WIN !!!')
    }
    else if(Ira.wins >= 3){
        alert('YOU LOSE !!!')
        console.log('YOU LOSE !!!')
    }else(console.log(`CPU has ${Ira.wins} wins and user has ${human.wins} wins`))
}

    const offense = () => {
        offenseSetUp(event)
        human.offense()
        Ira.cpuTurnDefense()

        checkWin();
        checkSeriesWin();

    }

    const defense = () => {
        defenseSetUp()
        human.defense()
        Ira.cpuTurnOffense()

        checkWin();
        checkSeriesWin();

    }

    $selectOpponent.on('click', selectOpponent)
    $startOffense.on('click', offense)
    $startDefense.on('click', defense)

    console.log(`Teacher choice is ${Ira.choice}`)



});