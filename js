<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .app {
            text-align: center;
        }

        .green-btn {
            color: white;
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="app">
        <button id="my-button" onclick="changeButtonText('my-button')">
        Click me 
        </button>
    </div>
    <script>
        function changeButtonText(id) {
            const myButton = document.getElementById(id); 
            myButton.innerHTML = 'Hello from Vanila JS'
            myButton.className = 'green-btn'
        }
    </script>
</body>
</html>
