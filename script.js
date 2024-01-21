let v1 = document.querySelector(".video1");
let v2 = document.querySelector(".video2");
let lights = document.querySelector(".lights");
let lc = document.querySelector(".Light_Container");
let slider = document.querySelector(".Slider");
let dots = document.querySelector(".Dots");


Draggable.create(".lights", {
  type: "x",
  bounds: lc,
  inertia: true,
  onDragEnd: function () {
    let lightscoordinate = lights.getBoundingClientRect();
    console.log(lightscoordinate.left);
    if(lightscoordinate.left == 883.75) {
        v2.style.opacity = 1;
        console.log('yaay')
    }
    else {
        v2.style.opacity = 0;
        console.log('naay')
    }
  },
});



