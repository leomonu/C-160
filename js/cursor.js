AFRAME.registerComponent("cursor-event",{
    schema:{
        selectId:{type:"string", default:""}
    },
    init:function(){
        this.handleMouseEnter()
        this.handleMouseLeave()
        this.handleclickEvent()
       
    },
    handleViewState:function(){
        const placecontainer = document.querySelector("#place-container")
        const {selectedItemId}=placecontainer.getAttribute("cursor-event")
        const id = this.el.getAttribute("id")
        
        const viewid = ["place-1","place-2","place-3","place-4"]
        if(viewid.includes(id)){
            placecontainer.setAttribute("tour",{
                state:"change-view"
            })


          const sky1 = document.querySelector("#main-container")
          sky1.setAttribute("material",{
              src:`./assets/360_images/${selectedItemId}/${id}.jpg`,
              color:"white"
          })  
        }
    },

    handlePlacelist:function(){
        const id = this.el.getAttribute("id")
        const placesid=["taj-mahal","eiffel-tower","new-york-city","budapest"]
        if(placesid.includes(id)){
            const placecontainer = document.querySelector("#place-container")
            placecontainer.setAttribute("cursor-event",{
                selectId:id
                
            })
            // console.log(placecontainer)
            this.el.setAttribute("material",{
                color:"green",
                opacity:1
            })
        }
    },
    handleMouseEnter:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacelist()
        })
    },
    handleMouseLeave:function(){
        this.el.addEventListener("mouseleave",()=>{
            if(this.data.selectId){
                const selectId = this.data
            const el = document.querySelector(`#${this.data.selectId}`)
            const id = el.getAttribute("id")
            if(id===this.data.selectId) {
                el.setAttribute("material",{
                    color:"orange",
                    opacity:1
                })
            }
            }
        })
    },
    

    handleclickEvent:function(){
        // cursor click function
        this.el.addEventListener("click",(evet)=>{
            const placecontainer=document.querySelector("#place-container")
            const {state} = placecontainer.getAttribute("tour")
            // console.log(state)

            if(state==="place-list"){
                const id  = this.el.getAttribute("id")
                const placeid = ["taj-mahal","eiffel-tower","new-york-city","budapest"]
                if(placeid.includes(id)){
                    placecontainer.setAttribute("tour",{
                        state:"view",
                        selectcard:id
                    })
                    
                }
            }
            if(state === "view"){
                this.handleViewState()
            }
            if(state ==="change-view"){
                this.handleViewState()
            }


        })
    }
})