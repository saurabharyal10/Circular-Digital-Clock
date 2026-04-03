function animateClockPointers() {
    setInterval(function () {
        var now = new Date();
        var secs = now.getSeconds();
        var mins = now.getMinutes();
        var hrs = now.getHours();
        
        // Calculate angles: 
        // 360 degrees / 60 seconds = 6 degrees per second
        // 360 degrees / 12 hours = 30 degrees per hour
        var secAngle = secs * 6;
        var minAngle = mins * 6;
        var hrAngle = hrs * 30 + mins / 2;
        
        var secWrapper = document.getElementById("sec-wrapper");
        var minWrapper = document.getElementById("min-wrapper");
        var hrWrapper = document.getElementById("hr-wrapper");
        
        // Apply rotation to the second hand
        secWrapper.style.transform = "rotate(" + secAngle + "deg)";
        secWrapper.style.webkitTransform = "rotate(" + secAngle + "deg)";
        
        // Apply rotation to the minute hand
        minWrapper.style.transform = "rotate(" + minAngle + "deg)";
        minWrapper.style.webkitTransform = "rotate(" + minAngle + "deg)";
        
        // Apply rotation to the hour hand
        hrWrapper.style.transform = "rotate(" + hrAngle + "deg)";
        hrWrapper.style.webkitTransform = "rotate(" + hrAngle + "deg)";
    }, 1000);
}