
class Game{
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.world = new World(this)
        this.player = new Player(this)
        this.gravity
        this.baseHeight = 1080
        this.ratio = this.height / this.baseHeight
        this.resize(window.innerWidth, window.innerHeight)
        this.fly = false

         //check for resizing
        window.addEventListener('resize', e =>{
            
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        })


        //player control

        
        

       




    }
    resize(width, height){

        this.canvas.width = width;
        this.canvas.height = height;
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.ratio = this.height / this.baseHeight

        this.gravity = 0.15 * this.ratio
        this.player.resize()
        this.world.resize()
        this.ctx.fillStyle = 'red'
        //console.log(this.ratio)

    }
    render(){
        this.player.update()
        this.player.draw()
        
        
    }
    renderWorld(){
        this.world.update()
        this.world.draw()
    }
    

   
}






window.addEventListener('load', function(){
    
    //console.log(document.getElementById('WorldCollision').getBoundingClientRect().left)


    var img = new Image
    img.src = "./assets/background/World2.png"
    function AnimateWorld(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.renderWorld()
        requestAnimationFrame(AnimateWorld)
    }
    requestAnimationFrame(AnimateWorld)
    
    //load up canvas
    const canvas = document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const game = new Game(canvas, ctx)
   
    ctx.fillStyle = 'red'



    //for mouse contrls
    let reqAnim


    document.getElementById('UpButton').addEventListener('mousedown', e =>{
        //console.log(e.target)
        //console.log('button push')
        e.target.style.height = "13vw"
        e.target.style.width = "13vw"
        function Animate(){
            reqAnim = this.window.requestAnimationFrame(Animate)
            game.player.fly()
        }
        Animate()
        
        
            
    })
    
      //for up button (mouse up)
    document.getElementById('UpButton').addEventListener('mouseup', e =>{
    
        //console.log('button release')
        this.window.cancelAnimationFrame(reqAnim)
        game.player.Down()
        //change button back
        e.target.style.height = "14vw"
        e.target.style.width = "14vw"
    })


    //for mobile controls


   
    document.getElementById('UpButton').addEventListener('touchstart', e =>{
        //console.log(e.target)
        //console.log('button push')
        e.target.style.height = "13vw"
        e.target.style.width = "13vw"
       
        
            
    })
    
     
    document.getElementById('UpButton').addEventListener('touchend', e =>{
    
        //console.log('button release')
        
        game.player.Down()
        //change button back
        e.target.style.height = "14vw"
        e.target.style.width = "14vw"
    })


   




    


    //high school initial
    if(this.localStorage.getItem('HighScore')){
        this.document.getElementById('HighScore').innerText = "High Score: " + this.localStorage.getItem('HighScore')
    }else{
        this.document.getElementById('HighScore').innerText = "High Score: 0" 
    }
    
    


    //run function to update all draw objects then delete then run agina
    


    document.getElementById('PlayerButton').addEventListener('click', function(){
        document.getElementById('PlayerButton').style.display="none"
        


        
       //update all game objects
    function Animate(){
        
        game.render()
        requestAnimationFrame(Animate)
    }
    requestAnimationFrame(Animate)
       
    
    })
    

    

   

    
})












        /*   
        
        
        
        
        
        
        
        
        
        
        
        
        */