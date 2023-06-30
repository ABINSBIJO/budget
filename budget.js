function register() {
    window.location = './newuser.html'
}
function login() {


    window.location = './dashboard.html'
}

function sset() {
    user = userid.value
    pass = password.value
    emai = email.value


    userDetails =
    {
        user,
        pass,
        emai
    }

    if (user in localStorage) {
        alert("User Is Already Registered")
    }
    else {
        localStorage.setItem(user, JSON.stringify(userDetails))
        alert("User Registered Successfully")


    }
    window.location = './new.html'
}

function displayIncome() {
    let name = document.getElementById("incomename").value;
    let income = document.getElementById("income").value;
    let savings = document.getElementById("savings").innerHTML;

    if ((name == +"" || income == +"")) {
        alert("Enter Both the inputs")
    }
    else {
        document.getElementById("savings").innerHTML = Number(savings) + Number(income);




        document.getElementsByClassName("accordion-collapse")[0].innerHTML += `
    
            <div class="accordion-body">
                <div class="accordion-bodysub">
                    <p>${name}:</p> <p>Rs ${income}</p>
                    
                </div>
            </div>
            
            `

    }



}


function buttonReset() {
    document.getElementById("savings").innerHTML = 0;
}

function expense() {
    let name = document.getElementById("expensename").value;
    let expense = document.getElementById("expenses").value;
    let savings = document.getElementById("savings").innerHTML;

    if ((name == +"" || expense == +"")) {
        alert("Enter the both the input on the expenses")
    }
    else {
        document.getElementById("savings").innerHTML = Number(savings) - Number(expense);
        document.getElementsByClassName("accordion-collapse")[1].innerHTML += `

        <div class="accordion-body">
            <div class="accordion-bodysub">
                <p>${name}:</p>
                <p>Rs ${expense}</p>
            </div>
        </div>
        
        `

    }
}