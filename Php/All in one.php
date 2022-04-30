<?php
echo "<h1>PHP Tutuials </h1>";
echo "<h2>This is Tutorial 5 </h2>";

// Variables are containers for storing information
// Starts with a $
// Variables are case sensitive

$name = "Shubham";
$namE = "Capital wala Shubham";
$income = 200.8;

echo "This guy is $name and his income is Rs. $income<br>";
echo "$namE is a good boy<br>";
echo "$name is the real gangsta<br>";
?>

<?php
echo "<h2>This is Tutorial 6 </h2>";
echo "
    <div>
        <h2>More on PHP Variables</h2>
        <h4>Rules for creating variables in php</h4>
        <ul>
            <li>Starts with a $ sign</li>
            <li>Cannot start with a number</li>
            <li>Must start with a letter or an underscore character</li>
            <li>Can only contain alphanumeric characters and underscores</li>
            <li>Variables in php are Case sensitive. (harry, hArry and Harry are different)</li>
        </ul>
    </div>
    ";
echo "<h3> Crete a Variable </h3>";
$name5 = 'harry';
echo $name5;
?>

<?php
echo "<h2>This is Tutorial 7 </h2>";
$name = "Harry";
$income = 200;

/* php data types
1. String
2. Integer
3. Float
4. Boolean
5. Object
6. Array
7. NULL
*/

// String - sequence of characters
$name = "Harry";
$friend = 'Rohan';
echo "$name ka friend is $friend";


// Integer - Non decimal number
$income = 455;
$debts = -655;
echo "<br>";
echo $income;
echo "<br>";
echo $debts;
echo "<br>";

// Float - Decimal point number
$income = 344.5;
$debts = -45.5;
echo $income;
echo "<br>";
echo $debts;
echo "<br>";

// Boolean - Can be either true or false
$x = true;
$is_friend = false;
echo var_dump($x);
echo "<br>";
echo var_dump($is_friend);
echo "<br>";

// Object - Instances of classes
// Employee is a class ---> harry can be one object

// Array - Used to store multiple values in a single variable
$friends = array("rohan", "shubham", "skillf", "Larry");
echo var_dump($friends);
echo "<br>";
echo $friends[0];
echo "<br>";
echo $friends[1];
echo "<br>";
echo $friends[2];
echo "<br>";
echo $friends[3];
echo "<br>";
//echo $friends[4]; // will throw an error as the size of array is 4

// NULL
$name = NULL;
echo var_dump($name);
?>

<?php
echo "<h2>This is Tutorial 8 </h2>";
$name = "Harry is a good boy";
echo $name;
echo "<br>";

echo "The length of " . "my string is " . strlen($name);
echo "<br>";
echo str_word_count($name);
echo "<br>";
echo strrev($name);
echo "<br>";
echo strpos($name, "Harry");
echo "<br>";
echo str_replace("Harry", "Rohan", $name);
echo "<br>";
echo str_repeat($name, 4);
echo "<br>";
echo "<pre>";
echo rtrim("    this is a good boy     ");
echo "<br>";
echo ltrim("    this is a good boy     ");
echo "</pre>";
?>

<?php
echo "<h2>This is Tutorial 9 </h2>";
/* Operators in PHP
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators 
4. Logical Operators
*/

$a = 45;
$b = 8;

// 1. Arithmetic Operators
echo "For a + b, the result is " . ($a + $b) . "<br>";
echo "For a - b, the result is " . ($a - $b) . "<br>";
echo "For a * b, the result is " . ($a * $b) . "<br>";
echo "For a / b, the result is " . ($a / $b) . "<br>";
echo "For a % b, the result is " . ($a % $b) . "<br>";
echo "For a ** b, the result is " . ($a ** $b) . "<br>";

// 2. Assignment Operators
// $x = $a;
// echo "For x, the value is ". $x . "<br>";

// $a += 6;
// echo "For a, the value is ". $a . "<br>";

// $a -= 6;
// echo "For a, the value is ". $a . "<br>";

// $a *= 6;
// echo "For a, the value is ". $a . "<br>";

// $a /= 5;
// echo "For a, the value is ". $a . "<br>";

// $a %= 5; // $a = $a % 5
// echo "For a, the value is ". $a . "<br>";


// 3. Comparison Operators 
$x = 78;
$y = 78;

// echo "For x > y, the result is ";
// echo var_dump($x > $y);

// echo "For x > y, the result is ";
// echo var_dump($x >= $y);

// echo "For x < y, the result is ";
// echo var_dump($x < $y);

// echo "For x < y, the result is ";
// echo var_dump($x <= $y);

echo "For x <> y, the result is ";
echo var_dump($x <> $y);
echo "<br>";


// 4. Logical Operators

$m = true;
$n = true;

echo "For m and n, the result is ";
echo var_dump($m and $n);
echo "<br>";

echo "For m && n, the result is ";
echo var_dump($m && $n);
echo "<br>";

echo "For m or n, the result is ";
echo var_dump($m or $n);
echo "<br>";

echo "For m || n, the result is ";
echo var_dump($m || $n);
echo "<br>";

echo "For !m , the result is ";
echo var_dump(!$m);
echo "<br>";
?>

<?php
echo "<h2>This is Tutorial 10 </h2>";
// $a = 665;
// $b = 9;

// if($a > 78){
//     echo "a is greater than 78";
// }
// else{
//     echo "a is not greater than 78";
// }

$age = 24;

// If else ladder
// if ($age>18){
//     echo "You can drink water with chai and alcohol";
// }
// elseif($age>13){
//     echo "You can drink chai only with water. No alcohol for you";
// }
// else{
//     echo "You can drink water only";
// }

if ($age > 18) {
    echo "You can drink water with chai and alcohol<br>";
}

if ($age > 13) {
    echo "You can drink chai only with water. No alcohol for you<br>";
} else {
    echo "You can drink water only<br>";
}
// Quick quiz - 
// 1. Create an if else ladder using more than one elseif 
// 2. Write a program to allow a driver to drive only when his age is greater than or equal to 25
// and less than or equal to 65

echo "Done";
?>

<?php
echo "<h2>This is Tutorial 11 </h2>";
$age = 56;

switch ($age) {
    case 12:
        echo "You are 12 years old <br>";
        break;

    case 45:
        echo "You are 45 years old <br>";
        break;

    case 56:
        echo "You are 56 years old boy <br>";
        break;

    default:
        echo "Your age is weird <br>";
        break;
}
?>

<?php
echo "<h2>This is Tutorial 12 </h2>";
echo "while loops in php";
echo "<br>";
// echo 1;echo"<br>";
// echo 2;echo "<br>";
// echo 3;echo "<br>";
// echo 4;echo "<br>";
// echo 5;echo "<br>";

/* 
while (condition){
    some lines of code here;
}
*/

$i = 0;
while ($i < 5) {
    echo "The value of i is ";
    echo $i + 1;
    echo "<br>";
    $i += 1;
}
?>

<?php
echo "<h2>This is Tutorial 13 </h2>";
echo "This is for loop in action <br>";

for ($index = 1; $index < 6; $index++) {
    // for(initialization;condition; updation)
    echo "The number is $index <br>";
}

// Avoid running into infinite loops
// for ($i=0; $i < 87; ) { 
//     echo $i;
// }

echo "For loop has ended";
?>

<?php
echo "<h2>This is Tutorial 14 </h2>";
echo "Welcome to do while loops <br>";

/*
do {
    some lines of code to be executed here;
    ...
} while(condition);
*/

$i = 0;
do {
    echo "$i <br>";
    $i++;
} while ($i < 5);

?>

<?php
echo "<h2>This is Tutorial 15 </h2>";
echo "Welcome to the world of foreach loops <br>";
$arr = array("Bananas", "Apples", "Harpic", "Bread", "Butter");

// for ($i=0; $i < count($arr); $i++) { 
//     echo $arr[$i];
//     echo "<br>";
// }

// Better way to do this - foreach loops
foreach ($arr as  $value) {
    echo "$value <br>";
}
?>

<?php
echo "<h2>This is Tutorial 16 </h2>";
echo "Welcome to php tutorial on functions <br>";

function processMarks($marksArr)
{
    $sum = 0;
    foreach ($marksArr as $value) {
        $sum += $value;
    }
    return $sum;
}

function avgMarks($marksArr)
{
    $sum = 0;
    $i = 1;
    foreach ($marksArr as $value) {
        $sum += $value;
        $i++;
    }
    return $sum / $i;
}

$rohanDas = [34, 98, 45, 12, 98, 93];
// $sumMarks = processMarks($rohanDas);
$sumMarks = avgMarks($rohanDas);

$harry = [99, 98, 93, 94, 17, 100];
// $sumMarksHarry = processMarks($harry);
$sumMarksHarry = avgMarks($harry);
echo "Total marks scored by Rohan out of 600 is $sumMarks <br>";
echo "Total marks scored by Harry out of 600 is $sumMarksHarry";
?>

<?php
echo "<h2>This is Tutorial 17 </h2>";
echo "Welcome to the world of dates<br>";
// $d = date("dS F Y");
$d = date("dS F Y, g:i A");
echo "Todays date is $d <br>";
// Quick Quiz - Post at least 3 examples of dates in php in the comments below

// Prints something like: Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A');

$year = date("Y");
echo "<br>";
echo "Copyright $year | All rights reserved <br>";
?>

<?php
echo "<h2>This is Tutorial 18 </h2>";
echo "Welcome to associative arrays in php ";
// These are called indexed arrays:
// $arr = array('this', 'that', 'what');
// echo $arr[0];
// echo $arr[1];
// echo $arr[2]; 

// Associative arrays
$favCol = array(
    'shubham' => 'red', 'rohan' => 'green',
    'harry' => 'brown', 8 => 'this'
);

// echo $favCol['harry'];
// echo "<br>";
// echo $favCol['rohan'];
// echo "<br>";
// echo $favCol[8]; 
foreach ($favCol as $key => $value) {
    echo "<br>Favorite color of $key is $value";
}
?>

<?php
echo "<h2>This is Tutorial 19 </h2>";
echo "Welcome to multi dimensional arrays in php <br>";

// Creating a 2 dimensional array
$multiDim = array(
    array(2, 5, 7, 8),
    array(1, 2, 3, 1),
    array(4, 5, 0, 1)
);


// echo var_dump($multiDim);
// echo $multiDim[1][2];

// Printing the contents of a 2 dimensional array

// for ($i=0; $i < count($multiDim); $i++) { 
//     echo var_dump($multiDim[$i]);
//     echo "<br>";
// }

for ($i = 0; $i < count($multiDim); $i++) {
    for ($j = 0; $j < count($multiDim[$i]); $j++) {
        echo $multiDim[$i][$j];
        echo " ";
    }
    echo "<br>";
}
?>
<?php
echo "<h2>This is Tutorial 20 </h2>";
echo "Welcome to scope and local/global vars in php<br>";
$a = 98; // Global Variable
$b = 9;

function printValue()
{
    // $a = 97; // Local Variable
    global $a, $b; // Give me the access to this global variable
    $a = 100;
    $b = 1000;
    echo "<br>The value of your variable a is $a and b is $b";
}

echo $a;
printValue();
echo "<br>The value of your variable a is $a and b is $b";
echo "<br>";
// echo var_dump($GLOBALS); 
echo var_dump($GLOBALS["a"]);
echo var_dump($GLOBALS["b"]);
?>