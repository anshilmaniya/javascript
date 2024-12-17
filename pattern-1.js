
var n = prompt("enter only nub");

if (n == 1 || n == 2 || n == 3) {
    for (var i = 1; i <= n; i++) {
        // document.write("#");
        for (var j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}

else {

    for (var i = 1; i <= 3; i++) {
        // document.write("#");
        for (var j = 1; j <= i; j++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    for (var k = 1; k <= n -3; k++) {
        // document.write("#");
        for (var l = 1; l <= k; l++) {
            document.write("* ");
        }
        document.write("<br>");
    }
}