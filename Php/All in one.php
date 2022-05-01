<!-- 1 -->
<!-- Variables 5 -->
<?php
echo "<h1>PHP Tutuials </h1>";
echo "<h2>Variables </h2>";

echo '1. Variables are containers for storing information<br>';
echo '2. Starts with a $<br>';
echo '3. Variables are case sensitive<br><br>';

$name = "Shubham";
$namE = "Capital wala Shubham";
$income = 200.8;

echo "This guy is $name and his income is Rs. $income<br>";
// Different between 2 Variables
echo "$namE is a good boy<br>";
echo "$name is the real gangsta<br>";
?>

<!-- 2 -->
<!-- Rules of Variables 6 -->
<?php
echo "<h2> Rules of Variables </h2>";
echo "
    <div>
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
echo "<h4> Crete a Variable </h4>";
$name5 = 'harry';
echo $name5;
?>

<!-- 3 -->
<!-- Data Types 7 -->
<?php
echo "<h2> Data Types </h2>";
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
// echo $friends[4]; // will throw an error as the size of array is 4

// NULL
$name = NULL;
echo var_dump($name);
?>

<!-- 4 -->
<!-- String Func 8 -->
<?php
echo "<h2> String Func </h2>";
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

<!-- 5 -->
<!-- Operators in PHP 9 -->
<?php
echo "<h2> Operators in PHP </h2>";
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

<!-- 6 -->
<!-- If else Condition -->
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

<!-- 7 -->
<!-- Switch Case 11 -->
<?php
echo "<h2> Switch Case </h2>";
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

<!-- 8 -->
<!-- While Loop 12 -->
<?php
echo "<h2> While Loop </h2>";
echo "while loops in php";
echo "<br>";

// Nomal way
// echo 1;echo"<br>";
// echo 2;echo "<br>";
// echo 3;echo "<br>";
// echo 4;echo "<br>";
// echo 5;echo "<br>";

// Better Way
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

<!-- 9 -->
<!-- for loop 13 -->
<?php
echo "<h2> for loop </h2>";
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

<!-- 10 -->
<!-- Do while loops 14 -->
<?php
echo "<h2> Do while loops </h2>";
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

<!-- 11 -->
<!-- Foreach loops 15 -->
<?php
echo "<h2> Foreach loops </h2>";
echo "Welcome to the world of foreach loops <br>";
$arr = array("Bananas", "Apples", "Harpic", "Bread", "Butter");

// Normal way
// for ($i=0; $i < count($arr); $i++) { 
//     echo $arr[$i];
//     echo "<br>";
// }

// Better way to do this - foreach loops
foreach ($arr as  $value) {
    echo "$value <br>";
}
?>

<!-- 12 -->
<!-- Function 16 -->
<?php
echo "<h2> Function </h2>";
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

<!-- 13 -->
<!-- Dates 17 -->
<?php
echo "<h2> Dates </h2>";
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

<!-- 14 -->
<!-- Associative arrays 18 -->
<?php
echo "<h2> Associative arrays </h2>";
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

<!-- 15 -->
<!-- Dimensional arrays 19 -->
<?php
echo "<h2> Dimensional arrays</h2>";
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

<!-- 16 -->
<!-- local/global Varable in php 20 -->
<?php
echo "<h2>local/global Varable in php </h2>";
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

<!-- 17 -->
<!-- Enter the Data By Form 21 -->
<h2> Enter the Data By Form </h2>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['pass'];
    echo " Your Email  $email  and password $password <br> ";
    // Submit these to a database
}
?>
<form action="/cwhphp/All in one.php" method="post">
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
        <label for="pass">Password</label>
        <input type="password" class="form-control" id="pass" name="pass">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- 18 -->
<!-- Connected to a Database 24 -->
<?php
echo "<h2>Connected to a Database</h2>";
/* 
Ways to connect to a MySQL Database
1. MySQLi extension
2. PDO
*/

// Connecting to the Database
$servername = "localhost";
$username = "root";
$password = "";
// $database = "Atul";

// Create a connection
$conn = mysqli_connect($servername, $username, $password);

// Die if connection was not successful
if (!$conn){
    // die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}
// Create a db
$sql = "CREATE DATABASE Atul";
$result = mysqli_query($conn, $sql);

// Variables to be inserted into the table
$name = "Vikrant";
$destination = "Russia";

// Sql query to be executed
$sql = "INSERT INTO `phptrip` (`name`, `dest`) VALUES ('$name', '$destination')";
$result = mysqli_query($conn, $sql);

// Check for the database creation success
if($result){
    echo "The db was created successfully!<br>";
}
else{
    echo "The db was not created successfully because of this error ---> ". mysqli_error($conn);
}
?>

<!-- 19 -->
<!-- Connecting to the Database 29 -->
<?php
echo "<h2> Connecting to the Database </h2>";
$servername = "localhost";
$username = "root";
$password = "";
// $database = "dbharry";

// Create a connection
$conn = mysqli_connect($servername, $username, $password);
// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}

$sql = "SELECT * FROM `phptrip`";
$result = mysqli_query($conn, $sql);

// Find the number of records returned
$num = mysqli_num_rows($result);
echo $num;
echo " records found in the DataBase<br>";
// Display the rows returned by the sql query
if($num> 0){
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";
    // $row = mysqli_fetch_assoc($result);
    // echo var_dump($row);
    // echo "<br>";

    // We can fetch in a better way using the while loop
    while($row = mysqli_fetch_assoc($result)){
        // echo var_dump($row);
        echo $row['sno'] .  ". Hello ". $row['name'] ." Welcome to ". $row['dest'];
        echo "<br>";
    }
}
?>
