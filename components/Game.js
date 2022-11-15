AFRAME.registerComponent("game-play", {
    schema: {
        elementId : {type: "string", default: "#ring1"}
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);

        element.addEventListner("collide", (e) => {
            if (elementId.includes("#ring")){
                console.log(elementId + "collision")
            }
            else if (elementId.includes("#hurdle")){
                console.log(elementId + "collision")
            }
        })
    },

    update: function(){
        this.isCollided(this,data.elementId)
    }
})
