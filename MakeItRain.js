var xPositions = [0];
var yPositions = [5];

draw = function() {
    

    background(65, 216, 242); // back text
        fill(250, 250, 250);
        textSize (140);
        text ("MAKE", 3, 130);
        text ("IT", 3, 250);
        text ("RAIN", 3, 370);
        
    for (var d = 0.25; d < 5; d++) { // large drops
        noStroke();
        for (var r = 0.20; r < 5; r++) {
            fill (199, 238, 255);
            ellipse(d*113, r*113, 40, 40);
        }}
    
    //drops that are falling down
    for (var i=0; i < xPositions.length; i++) {
        ellipse(xPositions[i], yPositions[i], 5, 5);
        yPositions[i] += 17;
        var colorA = random(37, 200);
        fill(colorA, 20, 200);}
        
        
    //pushes new drops between both random number
    xPositions.push(floor(random(10, 390)));
    yPositions.push(floor(random(10, 20)));
    
    println(xPositions);
};      

    
