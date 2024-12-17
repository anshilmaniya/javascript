var n = prompt("enter nub")
if (n >= 5) {

    document.write('<div class="srs">')
    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {
            if (
                j == Math.ceil(n / 2) || i == Math.ceil(n / 2)
                || j == 1 && i <= Math.ceil(n / 2)
                || i == 1 && j >= Math.ceil(n / 2)
                || i == n && j <= Math.ceil(n / 2)
                || j == n && i >= Math.ceil(n / 2)) {
                document.write("<span>*</span>");
            }
            else {
                document.write("<span>&nbsp;</span>");

            }
        }
        document.write("<br>");

    }
    document.write('</div>')
}
else {
    alert("enter value 4 up")
}
