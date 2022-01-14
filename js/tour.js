AFRAME.registerComponent("tour",{
    schema:{
        state:{type:"string",default:"place-list"},
        selectcard:{type:"string",default:"#card1"}
    },
    init:function(){
        this.createImages()
        this.placecontainer = this.el
    },
    tick:function(){
        const{state} = this.el.getAttribute("tour")
        if(state==="view"){
            this.hide([this.placecontainer])
            this.showView()
        }
    },
    hide:function(imagehide){
        imagehide.map(el=>{
            el.setAttribute("visible",false)
        })
    },
    showView:function(){
        const {selectcard}=this.data
        const sky1  = document.querySelector("#main-container")
        sky1.setAttribute("material",{
            src:`./assets/360_images/${selectcard}/place-0.jpg`,
            color:"white"
        })
    },
    createImages:function(){
        const   thumbnail=[
            {"id":"taj-mahal",
            title:"Taj-Mahal",
            url:"./assets/thumbnails/taj_mahal.png"
    },

    {
        "id":"eiffel-tower",
        title:"Eiffel Tower",
        url:"./assets/thumbnails/eiffel_tower.jpg"
    },
    {
        "id":"new-york-city",
        title:"New York City",
        url:"./assets/thumbnails/new_york_city.png"
    },
    {
        "id":"budapest",
        title:"Budapest",
        url:"./assets/thumbnails/budapest.jpg"
    },
    ]
    // console.log(thumbnail)
    var previousXposition = -62
    for (var item of thumbnail){
        const posX = previousXposition+25
        

        const posY = -3
        const posZ = -40


        
        const position = {x:posX,y:posY,z:posZ}
        previousXposition = posX
        const borders = this.createBorder(position,item.id)

        // creating small images
        const smallimages = this.createThumbnails(item)
        // borders
        const title = this.createTitles(position,item)
        // console.log(title)
        borders.appendChild(smallimages)
        borders.appendChild(title)

        this.el.appendChild(borders)
        

    }
    },

    createThumbnails:function(item){
        const entity = document.createElement("a-entity")
        entity.setAttribute("visible",true)
        entity.setAttribute("geometry",{
            primitive:"circle",
            radius:9
        })
        entity.setAttribute("material",{
            src:item.url
        })

        return entity
    },
    createTitles:function(position,item){
        const entity = document.createElement("a-entity")
        entity.setAttribute("text",{
            value:item.title ,
            color:"blue",
            width:70,
            align:"center"
        })
        
        const position1 = position
        position1.y = -30
        position1.x = position1.x+4
        
        
        entity.setAttribute("position",position1) 
        entity.setAttribute("visible",true)
        return entity
    },
    createBorder:function(position,id){
        const entity = document.createElement("a-entity")
        entity.setAttribute("id",id)
        entity.setAttribute("visible",true)
        entity.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        })
        entity.setAttribute("material",{
            color:"orange",
            opacity:1
        })
        entity.setAttribute("position",position)
        entity.setAttribute("cursor-event",{})
        return entity
    }
    })

    
   