 

// want to refresh page automatically
// document.body.onresize = function(){ location.reload(); } 

 

//initiate counting variable
let count = 0;


function getRandomPosition(image) {
    //1080 - 50
	var x = document.body.offsetHeight - image.clientHeight; //heoight of the image
    //1920 - 100
    var y = document.body.offsetWidth - image.clientWidth; //width of the image
    //Math.ranodm() returns a float between 0 to 1
    var randomX = Math.floor(Math.random() * x);
	var randomY = Math.floor(Math.random() * y);
	return [randomX,randomY];
}

let Flexbox=document.getElementById("flexbox");

//find a way to create buttons with img in background
    for(let i=0; i<10; i++){
        var img = document.createElement('img'); //created image tags in html document
        img.width="200"; //setting the width

        img.setAttribute("height", "100");
        //img.height = "100"; //setting the height
        img.setAttribute("style", "position:absolute;");
        //img.setAttribute("src", "10.png");
        img.src = "img/bird.png";

        //adding images to document
        // document.body.appendChild(img);
		 Flexbox.appendChild(img);

        //calling our random fucntion and storing it in variable xy
        var xy = getRandomPosition(img);
        console.log(xy);

        //setting the top left corner of the image to the random values above
        img.style.top = xy[0] + 'px';
        img.style.left = xy[1] + 'px';

   
    }
    //selected all the images
    const images = document.querySelectorAll("img");
    //console.log(images);
    
    
    var counter = document.createElement("p");
    document.body.appendChild(counter);
    //for every image in images list, add an event listener
    for(const image of images){
        image.addEventListener('click', function(){
            count += 1;
            console.log(count);
            
            counter.innerHTML = "You counted " + count + " birds";
            this.disabled=true;
            
   
    if(count > 9){
        var message = document.createElement("div");
        document.body.appendChild(message);
        message.innerHTML = "This integer is inconceivable; therefore, God exists.";
        // message.width = "400";
        // message.height = "400";
        message.setAttribute("style", "background-color:orange");

     }
        })


    }


 



