<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motorbike Stunt Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e1e;
            color: white;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .menu {
            display: none;
        }
        .game-screen {
            display: none;
        }
        button {
            background: #ff4500;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin: 5px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="auth-screen">
            <h1>Motorbike Stunt Game</h1>
            <input type="text" id="username" placeholder="Username"><br>
            <input type="password" id="password" placeholder="Password"><br>
            <button onclick="signIn()">Sign In</button>
            <button onclick="signUp()">Sign Up</button>
        </div>

        <div id="menu" class="menu">
            <h2>Main Menu</h2>
            <button onclick="startGame()">Start Game</button>
            <button onclick="showInstructions()">Instructions</button>
        </div>

        <div id="game-screen" class="game-screen">
            <h2>Level 1</h2>
            <canvas id="gameCanvas" width="800" height="400" style="background: #333;"></canvas>
        </div>
    </div>

    <script>
        function signIn() {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('menu').style.display = 'block';
        }

        function signUp() {
            alert('Sign Up Successful! Please Sign In.');
        }

        function startGame() {
            document.getElementById('menu').style.display = 'none';
            document.getElementById('game-screen').style.display = 'block';
            initGame();
        }

        function showInstructions() {
            alert('Use arrow keys to perform stunts and complete levels!');
        }

        function initGame() {
            var canvas = document.getElementById('gameCanvas');
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = 'red';
            ctx.fillRect(50, 300, 50, 50); // Placeholder for motorbike
        }
    </script>
</body>
</html>
