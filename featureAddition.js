for(let i=0; i<features.length;i++){
    addFeatureToggle(features[i][0], features[i][1], features[i][2])
}

document.getElementById("trafficButton").addEventListener("click", e=>{
    document.getElementById("trafficContent").classList.toggle("hidden")
    if(!document.getElementById("imageBuilderContent").classList.contains("hidden")){
        document.getElementById("imageBuilderContent").classList.toggle("hidden")
    }
})

document.getElementById("imageButton").addEventListener("click", e=>{
    document.getElementById("imageBuilderContent").classList.toggle("hidden")
    if(!document.getElementById("trafficContent").classList.contains("hidden")){
        document.getElementById("trafficContent").classList.toggle("hidden")
    }
})

document.getElementById("inspectFeaturesButton").addEventListener("click", e=>{
    document.getElementById("featureContainer").classList.toggle("hidden")
})

document.getElementById("includeNewFeature").addEventListener("click", e=>{
    document.getElementById("featurePopUp").classList.toggle("hidden")
})

document.getElementById("closeFeaturePopup").addEventListener("click", e=>{
    document.getElementById("featureInput").value = "";
    document.getElementById("featurePopUp").classList.toggle("hidden")
})

document.getElementById("addFeaturePopup").addEventListener("click", e=>{
    let featureCode = document.getElementById("featureInput").value;
    detectFeatureRequest(featureCode);
})

document.getElementById("featureInput").addEventListener("keypress", e=>{
    if(e.key == "Enter"){
        let featureCode = document.getElementById("featureInput").value;
        detectFeatureRequest(featureCode);
    }
})

function detectFeatureRequest(featureCode){
    document.getElementById("featurePopUp").classList.toggle("hidden")
    document.getElementById("featureInput").value = "";
    switch(featureCode.toLowerCase()){
        case "server":
            document.getElementById("server" + "Toggle").classList.toggle("hidden");
            break;
        case "oversæt":
            document.getElementById("translate" + "Toggle").classList.toggle("hidden");
            break;
        case "oversat":
            document.getElementById("translate" + "Toggle").classList.toggle("hidden");
            break;
        case "byg":
            document.getElementById("build" + "Toggle").classList.toggle("hidden");
            break;
        case "modtager":
            document.getElementById("receiver" + "Toggle").classList.toggle("hidden");
            break;
        case "krypter":
            document.getElementById("encrypt" + "Toggle").classList.toggle("hidden");
            break;
        case "hack":
            document.getElementById("hack" + "Toggle").classList.toggle("hidden");
    }
}

function addFeatureToggle(toggleId, toggleName, functionality){
    let toggleContainer = document.createElement("div");
    toggleContainer.classList.add("toggleButton");
    toggleContainer.classList.add("hidden");
    toggleContainer.setAttribute("id", functionality + "Toggle")
    let toggleText = document.createElement("p");
    toggleText.classList.add("toggleText");
    toggleText.innerText = toggleName;
    let buttonOuter = document.createElement("div");
    buttonOuter.setAttribute("id", toggleId);
    buttonOuter.classList.add("switch");
    let buttonInner = document.createElement("div");
    buttonInner.setAttribute("id", toggleId + "Inner")
    buttonInner.classList.add("switchInner");

    toggleContainer.appendChild(buttonOuter)
    buttonOuter.appendChild(buttonInner)
    toggleContainer.appendChild(toggleText)


    buttonOuter.addEventListener("click", e=>{
        buttonOuter.classList.toggle("toggleActive")
        buttonInner.classList.toggle("toggleInnerActive ")

        switch(functionality) {
            case "server":
                document.getElementById("serverSpace").classList.toggle("hidden")
                document.getElementById("trafficButton").classList.toggle("hidden")
                break;
            case "translate":
                document.getElementById("translaterSpace").classList.toggle("hidden")
                break;
            case "build":
                document.getElementById("imageButton").classList.toggle("hidden")
                break;
            case "receiver":
                if(allowRecipient){
                    allowRecipient = false
                    writeToMB("noRecipient")
                } else {
                    allowRecipient = true
                    writeToMB("yesRecipient")
                }
                break;
            case "encrypt":
                if(allowEncryption){
                    allowEncryption = false
                    writeToMB("noEncrypt")
                } else {
                    allowEncryption = true
                    writeToMB("yesEncrypt")
                }
                break;
            case "hack":
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
            }
    })

    document.getElementById("featureContainer").appendChild(toggleContainer);
}