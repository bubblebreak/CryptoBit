document.getElementById("trafficButton").addEventListener("click", e=>{
    document.getElementById("trafficContent").style.display="block";
    document.getElementById("imageBuilderContent").style.display="none";
})

document.getElementById("encryptButton").addEventListener("click", e=>{
    document.getElementById("encryptButton").classList.toggle("toggleActive")
    document.getElementById("encryptButtonInner").classList.toggle("toggleInnerActive ")
    if(allowEncryption){
        allowEncryption = false
        writeToMB("noEncrypt")
    } else {
        allowEncryption = true
        writeToMB("yesEncrypt")
    }
})

document.getElementById("recipientButton").addEventListener("click", e=>{
    document.getElementById("recipientButton").classList.toggle("toggleActive")
    document.getElementById("recipientButtonInner").classList.toggle("toggleInnerActive ")
    if(allowRecipient){
        allowRecipient = false
        writeToMB("noRecipient")
    } else {
        allowRecipient = true
        writeToMB("yesRecipient")
    }
})

document.getElementById("serverButton").addEventListener("click", e=>{
    document.getElementById("serverButton").classList.toggle("toggleActive")
    document.getElementById("serverButtonInner").classList.toggle("toggleInnerActive ")
    document.getElementById("serverSpace").classList.toggle("hidden")
})

document.getElementById("translaterButton").addEventListener("click", e=>{
    document.getElementById("translaterButton").classList.toggle("toggleActive")
    document.getElementById("translaterButtonInner").classList.toggle("toggleInnerActive ")
    document.getElementById("translaterSpace").classList.toggle("hidden")
})

document.getElementById("hackingButton").addEventListener("click", e=>{
    document.getElementById("hackingButton").classList.toggle("toggleActive")
    document.getElementById("hackingButtonInner").classList.toggle("toggleInnerActive ")
    if(allowHacking){
        allowHacking = false
        console.log("disable hacking")
        document.querySelector(':root').style.setProperty('--light-color', '#74BF04')
        document.querySelector(':root').style.setProperty('--dark-color', '#488C03')
        document.body.style.backgroundColor = "white";
        lightColor = "#74BF04"
        darkColor = "#488C03"
    } else {
        allowHacking = true
        console.log("enable hacking")
        document.querySelector(':root').style.setProperty('--light-color', '#D90D0D')
        document.querySelector(':root').style.setProperty('--dark-color', '#731212')
        document.body.style.backgroundColor = "RGB(120, 0, 0, 0.5)";
        lightColor = "#D90D0D"
        darkColor = "#731212"
    }
})