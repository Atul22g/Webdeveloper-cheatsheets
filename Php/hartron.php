<!-- 1 -->
<!-- Operators in php -->
<?php
echo "<h2> Operators in php</h2>";
$a = 10;
$b = 20;
echo "Sum of two number = " . ($a + $b) . "<br>";
echo "Minus of two number = " . ($a - $b) . "<br>";
echo "Multilpy of two number = " . ($a * $b) . "<br>";
echo "Division of two number = " . ($a / $b) . "<br>";
echo "Mod of two number = " . ($a % $b) . "<br>";
?>
<!-- 2 -->
<!-- Relational operators -->
<?php
echo "<h2>Relational operators</h2>";
// Greater than between Two number
echo "<h4>Wap to check Greater than between Two number</h4>";
$c = 5;
$d = 20;
if ($c >= $d) {
    echo "First Variable is Greater";
} else {
    echo "Second Variable is Greater";
}
// check Even vs Odd
echo "<h4>Wap to check Even vs Odd</h4>";
if ($c % 2 == 0) {
    echo "Even Number";
} else {
    echo "Odd number";
}
// Positive vs Negitive
echo "<h4>Wap to check Positive vs Negitive</h4>";
$e = 20;
if ($e = 0) {
    echo "Positive Number";
} else {
    echo "Negitive Number";
}
?>
<!-- 3 -->
<!-- Greter than between 3 number -->
<?php
echo "<h4>Wap to check Greter than between 3 number</h4>";

$f = 10;
$g = 5;
$h = 20;
if ($f > $g && $f > $h) {
    echo "Greater Value is f = " . $f;
} elseif ($g > $f && $g > $h) {
    echo "Greater Value is g = " . $g;
} elseif ($h > $f && $h > $g) {
    echo "Greater Value is h = " . $h;
} else {
    echo "Dont Enter Equal Values";
}
?>
<!-- 4 -->
<!-- Marks -->
<?php
echo "<h4>Marks</h4>";
$result = 20;
if ($result = 90) {
    echo "Your Grade is A+";
} elseif ($result = 80) {
    echo "Your Grade is A";
} elseif ($result = 70) {
    echo "Your Grade is B+";
} elseif ($result = 60) {
    echo "Your Grade is B";
} elseif ($result = 50) {
    echo "Your Grade is C+";
} elseif ($result = 40) {
    echo "Your Grade is C";
} else {
    echo "You are Fail";
}
?>
<!-- 5 -->
<!-- Age Program By Girl -->
<?php
echo "<h4>Age</h4>";
$age = 20;
if ($age >= 70) {
    echo "Over Age";
} elseif ($age >= 30) {
    echo "Middle Age";
} else {
    echo "Under Age";
}
?>
<!-- 6 -->
<!-- Employ -->
<?php
echo "<h4>Employ</h4>";
$salary = 100000;
if ($salary >= 30000) {
    $bonus = 1000;
    $total = $salary + $bonus;
    echo $total;
} elseif ($salary >= 20000) {
    $bonus = 500;
    $total = $salary + $bonus;
    echo $total;
} elseif ($salary >= 10000) {
    $bonus = 200;
    $total = $salary + $bonus;
    echo $total;
} else {
    $bonus = 0;
    $total = $salary + $bonus;
    echo $total;
}
?>
<!-- 7 -->
<!-- Input By User -->
<h4>Input By User</h4>
<form method="post">
    <label for="val1"> Enter Number 1 =
        <input type="text" name="val1">
    </label> <br>
    <label for="val2"> Enter Number 2 =
        <input type="text" name="val2">
    </label><br>
    <input type="submit" name="submit">
</form>
<?php
$val1 = $_POST['val1'];
$val2 = $_POST['val2'];
echo "Sum of " . ($val1 + $val2);
?>