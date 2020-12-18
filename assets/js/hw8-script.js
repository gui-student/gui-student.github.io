// username: gui-student
// See README.md in Blackboard .zip for further contact info
// Sources: https://www.w3schools.com
// pieces.json from hw8 files

$(document).ready(function() {

    var pieces = [
        {"letter":"A", "value":1, "amount":9},
        {"letter":"B", "value":3, "amount":2},
        {"letter":"C", "value":3, "amount":2},
        {"letter":"D", "value":2, "amount":4},
        {"letter":"E", "value":1, "amount":12},
        {"letter":"F", "value":4, "amount":2},
        {"letter":"G", "value":2, "amount":3},
        {"letter":"H", "value":4, "amount":2},
        {"letter":"I", "value":1, "amount":9},
        {"letter":"J", "value":8, "amount":1},
        {"letter":"K", "value":5, "amount":1},
        {"letter":"L", "value":1, "amount":4},
        {"letter":"M", "value":3, "amount":2},
        {"letter":"N", "value":1, "amount":5},
        {"letter":"O", "value":1, "amount":8},
        {"letter":"P", "value":3, "amount":2},
        {"letter":"Q", "value":10, "amount":1},
        {"letter":"R", "value":1, "amount":6},
        {"letter":"S", "value":1, "amount":4},
        {"letter":"T", "value":1, "amount":6},
        {"letter":"U", "value":1, "amount":4},
        {"letter":"V", "value":4, "amount":2},
        {"letter":"W", "value":4, "amount":2},
        {"letter":"X", "value":8, "amount":1},
        {"letter":"Y", "value":4, "amount":2},
        {"letter":"Z", "value":10,"amount":1},
        {"letter":"_", "value":0,"amount":10},
    ];

    var board = document.getElementById("getBoard");
    var rack = document.getElementById("getRack");
    var tiles = "assets/images/Scrabble_Tiles/Scrabble_Tile_";
    var score = 0; // keep track of the score
    var curTiles = []; // keep track of current Tiles
    var curPlayTiles = 0; // keep track of current hand tiles

    curentHand(7);

    // returns a random letter of the alphabet
    function randomLetter() {
        let random = Math.floor(Math.random() * 26);
        return random;
    }

    // allows dropping onto the scrabble board
    $(".boardTiles").droppable({
        drop: function(ev, ui) {
            $(ui.draggable).detach().css({position : 'relative', top: 'auto',
            left: 'auto'}).appendTo(this);
        }
    });

    // allows dragging of scrabble tiles
    // tiles will bounce back to the rack
    $(".scrbletter").draggable({snap: '.boardTiles', snapMode: 'inner', revert: true});

    // grabs the next letter from the current play tiles
    function getNextLetter(numOfTiles, count) {
        if(count = 0)
            if($("#getRack").children('img')) {
                $('#getRack').children('img').each(function () {
            });
        }
    }

    // finds number of tiles left
    function curentHand(numOfTiles) {
        var randTile;
        var letterImg;
        curPlayTiles = numOfTiles;

        // creates divs for each board tile
        for(let i = 0; i < curPlayTiles; ++i) {
            let boardTile = document.createElement('div');
            Object.assign(boardTile, {
                className : 'boardTiles ui-droppable'
            });
            getBoard.append(boardTile);
        }

        // grabs 7 random letters to play
        for(let i = 0; i < curPlayTiles; ++i) {
            letterImg = document.createElement('img');
            randTile = randomLetter();
            while(pieces[randTile].amount === 0) {
                randTile = randomLetter();
            }

            Object.assign(letterImg, {
                id: pieces[randTile].letter,
                src:tiles + pieces[randTile].letter + '.jpg',
                className: 'scrbletter ui-draggable ui-draggable-handle',
            });
            if(pieces[randTile].Letter === '_') {
                letterImg.src=tiles  + 'Blank.jpg';
            }
            curTiles[i] = pieces[randTile].letter;
            $(letterImg).data({'Letter': pieces[randTile].letter, 'value':
            pieces[randTile].value, 'amount': pieces[randTile].amount--});
            getRack.append(letterImg);
        }
    }

    // loop gets the value and adds to the score
    function updateScore() {
        $('#getBoard').find('img').each(function () {
            score += $(this).data("value");
        });
        $("#getScore").text("Score: " + score);
    }

    // reloads the webpage when new game button is clicked
    $("#newGame").click( function () {
        location.reload();
    });

    // updates the score when submit button is clicked
    $("#submitWord").click( function () {
        updateScore();
        getNextLetter(temp);
        score = 0;
    });
})
