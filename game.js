//**Function gets input value stored on website local storage using the key and show each value on the next page **// 

window.addEventListener('load', () => {
    const player1 = localStorage.getItem('firstName');
    const player2 = localStorage.getItem('secondName');

     document.getElementById("first_name").innerHTML = player1;
     document.getElementById("second_name").innerHTML = player2;
});

//**Assign a variable to imported input values form local storage */
var p1  = localStorage.getItem("firstName");
var p2  = localStorage.getItem("secondName");


//** Function gets user input values ("X" OR 'O") for test different conditions of if a player won or not after three matching inputs */
function input() {
    var S1, S2, S3, S4, S5, S6, S7, S8, S9  
    S1 = document.getElementById("S1").value;
    S2 = document.getElementById("S2").value;
    S3 = document.getElementById("S3").value;
    S4 = document.getElementById("S4").value;
    S5 = document.getElementById("S5").value;
    S6 = document.getElementById("S6").value;
    S7 = document.getElementById("S7").value;
    S8 = document.getElementById("S8").value;
    S9 = document.getElementById("S9").value;
        // condition tests if player inputs form a line shape at the first three boxes
        if ((S1 == 'x' || S1 == 'X') && (S2 == 'x' ||
                S2 == 'X') && (S3 == 'x' || S3 == 'X')) {
                document.getElementById('print')
                    .innerHTML =(p1+ " "+ "won")
                document.getElementById("S4").disabled = true;
                document.getElementById("S5").disabled = true;
                document.getElementById("S6").disabled = true;
                document.getElementById("S7").disabled = true;
                document.getElementById("S8").disabled = true;
                document.getElementById("S9").disabled = true;
                
        }
        // condition tests if player inputs forms a vertical line through three boxes
        else if ((S1 == 'x' || S1 == 'X') && (S4 == 'x' ||
        S4 == 'X') && (S7 == 'x' || S7 == 'X')) {
        document.getElementById('print')
            .innerHTML = (p1+ " "+ "won");
        document.getElementById("S2").disabled = true;
        document.getElementById("S3").disabled = true;
        document.getElementById("S5").disabled = true;
        document.getElementById("S6").disabled = true;
        document.getElementById("S8").disabled = true;
        document.getElementById("S9").disabled = true;
        alert(p1+ " "+ "won");
        
    }
        
    // condition tests if player inputs forms a vertical line through three boxes
        else if ((S7 == 'x' || S7 == 'X') && (S8 == 'x' ||
            S8 == 'X') && (S9 == 'x' || S9 == 'X')) {
            document.getElementById('print')
                .innerHTML = (p1+ " "+ "won");
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S5").disabled = true;
            document.getElementById("S6").disabled = true;
            alert(p1+ " "+ "won");
            
    }
    // condition tests if player inputs forms a vertical line through three boxes
        else if ((S3 == 'x' || S3 == 'X') && (S6 == 'x' ||
            S6 == 'X') && (S9 == 'x' || S9 == 'X')) {
            document.getElementById('print')
                .innerHTML = p1+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S5").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            alert(p1+ " "+ "won");
            
        }
        // condition tests if player inputs forms a diagonal line through three boxes
        else if ((S1 == 'x' || S1 == 'X') && (S5 == 'x' ||
            S5 == 'X') && (S9 == 'x' || S9 == 'X')) {
            document.getElementById('print')
                .innerHTML = p1+ " "+ "won";
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            alert(p1+ " "+ "won");
           
        }
        // condition tests if player inputs forms a diagonal line through three boxes
        else if ((S3 == 'x' || S3 == 'X') && (S5 == 'x' ||
            S5 == 'X') && (S7 == 'x' || S7 == 'X')) {
            document.getElementById('print')
                .innerHTML = p1+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S8").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p1+ " "+ "won");
            
        }
        // condition tests if player inputs forms a vertical line through three boxes

        else if ((S2 == 'x' || S2 == 'X') && (S5 == 'x' ||
            S5 == 'X') && (S8 == 'x' || S8 == 'X')) {
            document.getElementById('print')
                .innerHTML = p1+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p1+ " "+ "won");
            
        }
        // condition tests if player inputs forms a horizontal line through three boxes


        else if ((S4 == 'x' || S4 == 'X') && (S5 == 'x' ||
            S5 == 'X') && (S6 == 'x' || S6 == 'X')) {
            document.getElementById('print')
                .innerHTML = p1+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p1+ " "+ "won");
            
        }

        // condition tests if player inputs forms a horizontal line through three boxes
        else if ((S1 == '0' || S1 == '0') && (S2 == '0' ||
        S2 == '0') && (S3 == '0' || S3 == '0')) {
        document.getElementById('print')
            .innerHTML = p2+ " "+ "won";
        document.getElementById("S4").disabled = true;
        document.getElementById("S5").disabled = true;
        document.getElementById("S6").disabled = true;
        document.getElementById("S7").disabled = true;
        document.getElementById("S8").disabled = true;
        document.getElementById("S9").disabled = true;
        alert(p2+ " "+ "won");
        
        }

        // condition tests if player inputs forms a vertical line through three boxes
        
        else if ((S1 == '0' || S1 == '0') && (S4 == '0' ||
            S4 == '0') && (S7 == '0' || S7 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            alert(p2+ " "+ "won");
            
        }

        // condition tests if player inputs forms a horizontal line through three boxes

        else if ((S7 == '0' || S7 == '0') && (S8 == '0' ||
            S8 == '0') && (S9 == '0' || S9 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S5").disabled = true;
            document.getElementById("S6").disabled = true;
            alert(p2+ " "+ "won");
            
        }

        // condition tests if player inputs forms a vertical line through three boxes


        else if ((S3 == '0' || S3 == '0') && (S6 == '0' ||
            S6 == '0') && (S9 == '0' || S9 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S5").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            alert(p2+ " "+ "won");
        }

        // condition tests if player inputs forms a diagonal line through three boxes


        else if ((S1 == '0' || S1 == '0') && (S5 == '0' ||
            S5 == '0') && (S9 == '0' || S9 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            alert(p2+ " "+ "won");
            
        }

        // condition tests if player inputs forms a diagonal line through three boxes

        else if ((S3 == '0' || S3 == '0') && (S5 == '0' ||
            S5 == '0') && (S7 == '0' || S7 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S8").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p2+ " "+ "won");
            
        }

        // condition tests if player inputs forms a vertical line through three boxes


        else if ((S2 == '0' || S2 == '0') && (S5 == '0' ||
            S5 == '0') && (S8 == '0' || S8 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S4").disabled = true;
            document.getElementById("S6").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p2+ " "+ "won");
            
        }
        // condition tests if player inputs forms a horizontal   line through three boxes

        else if ((S4 == '0' || S4 == '0') && (S5 == '0' ||
            S5 == '0') && (S6 == '0' || S6 == '0')) {
            document.getElementById('print')
                .innerHTML = p2+ " "+ "won";
            document.getElementById("S1").disabled = true;
            document.getElementById("S2").disabled = true;
            document.getElementById("S3").disabled = true;
            document.getElementById("S7").disabled = true;
            document.getElementById("S8").disabled = true;
            document.getElementById("S9").disabled = true;
            alert(p2+ " "+ "won");
        }
        // Condition statement tests when the game is a "TIE"
        else if ((S1 == 'X' || S1 == '0') && (S2 == 'X'
        || S2 == '0') && (S3 == 'X' || S3 == '0') &&
        (S4 == 'X' || S4 == '0') && (S5 == 'X' ||
        S5 == '0') && (S6 == 'X' || S6 == '0') &&
        (S7 == 'X' || S7 == '0') && (S8 == 'X' ||
        S8 == '0') && (S9 == 'X' || S9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
        alert("IT'S A MATCH TIE");
        }
        else {
            // Here, Printing Result
            if (flag == 1) {
                document.getElementById('print')
                    .innerHTML = p1 + "'s"+" "+ "turn";
            }
            else {
                document.getElementById('print')
                    .innerHTML = p2+ "'s"+" "+ "turn";
            }
        }  
    }   

// The function reset game and continue playing.

function myfunc_2() {
    location.reload();
    document.getElementById('S1').value = '';
    document.getElementById("S2").value = '';
    document.getElementById("S3").value = '';
    document.getElementById("S4").value = '';
    document.getElementById("S5").value = '';
    document.getElementById("S6").value = '';
    document.getElementById("S7").value = '';
    document.getElementById("S8").value = '';
    document.getElementById("S9").value = '';
 
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("S2").value = "X";
        document.getElementById("S2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S2").value = "0";
        document.getElementById("S2").disabled = true;
        flag = 1;
    }
}
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("S1").value = "X";
        document.getElementById("S1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S1").value = "0";
        document.getElementById("S1").disabled = true;
        flag = 1;
    }
}
 
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("S3").value = "X";
        document.getElementById("S3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S3").value = "0";
        document.getElementById("S3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("S4").value = "X";
        document.getElementById("S4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S4").value = "0";
        document.getElementById("S4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("S5").value = "X";
        document.getElementById("S5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S5").value = "0";
        document.getElementById("S5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("S6").value = "X";
        document.getElementById("S6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S6").value = "0";
        document.getElementById("S6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("S7").value = "X";
        document.getElementById("S7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S7").value = "0";
        document.getElementById("S7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("S8").value = "X";
        document.getElementById("S8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S8").value = "0";
        document.getElementById("S8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("S9").value = "X";
        document.getElementById("S9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("S9").value = "0";
        document.getElementById("S9").disabled = true;
        flag = 1;
    }
}
