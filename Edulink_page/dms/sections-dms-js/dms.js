function createNewDm(){
    let containerDms = document.querySelectorAll(".container-dms")
    containerDms.addEventListener("load", function(){
        let newDM = document.createElement("div")
        newDM.classList.add("dm")

        let newConatinerDmImg = document.createElement("div")
        newConatinerDmImg.classList.add("container-dm-img")

        let newDmImg = document.createElement("img")
        newDmImg.classList.add("dm-img")

        let newDmSpan = document.createElement("span")
        newDmSpan.classList.add("dm-span")

        newDM.append(newConatinerDmImg)
        newConatinerDmImg.append(newDmImg)
        newDM.append(newDmSpan)
    })
}
