AFRAME.registerComponent("location",{
    init:function(){
        this.createPlaces()
    },
    tick:function(){
       
        const placecontainer = document.querySelector("#place-container")
        const state = placecontainer.getAttribute("tour")
        if(state === "view" || state === "change-view"){
            this.el.setAttribute("visible",true)
        }
        else {
            this.el.setAttribute("visible",false)
        }
    },
    // creating thumbnails
    createThumbnails:function(position,id){
        const entity1 = document.createElement("a-entity")
        entity1.setAttribute("visible",true)
        // `place-${id}` = place-1,place-2,place-3,place-4
        entity1.setAttribute("id",`place-${id}`)
        entity1.setAttribute("geometry",{
            primitive:"circle",
            radius:3
        })

        entity1.setAttribute("material",{
            src:"./assets/helicopter.png",
            opacity:0.1
        })

        entity1.setAttribute("position",position)

        entity1.setAttribute("cursor-event",{})
        console.log(entity1)
        return entity1
    },
    createPlaces:function(){
        const sideview = document.querySelector("#side-view-container")
        let xposition = -150
        let yposition = 30
        for (var i=1;i<=4 ;i++){
            const position={
                x:xposition+=50,
                y:yposition+=2,
                z:-40
            }
            const entity1 = this.createThumbnails(position,i)
            sideview.appendChild(entity1)
        }
    }
})