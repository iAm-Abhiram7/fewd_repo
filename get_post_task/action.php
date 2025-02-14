<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    echo "<h2>Data received via GET</h2>";
    echo "Name: " . htmlspecialchars($_GET["name"]) . "<br>";
    echo "Password: " . htmlspecialchars($_GET["password"]);
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h2>Data received via POST</h2>";
    echo "Name: " . htmlspecialchars($_POST["name"]) . "<br>";
    echo "Password: " . htmlspecialchars($_POST["password"]);
}
?>
