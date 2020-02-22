
document.getElementById("pushme").addEventListener("click", showAMessage);

function showAMessage()
{
    
        document.getElementById("m1").style.display = "block";
        document.getElementById("m1").innerHTML = "Thank you! I needed to breath!"
    
    
}

document.getElementById("dontpushme").addEventListener("click",showAMessage2);

function showAMessage2()
{
    document.getElementById("m1").style.display = "block";
    document.getElementById("m1").innerHTML = "I said: Don't push me! Now you'll suffer the consequences..."
}