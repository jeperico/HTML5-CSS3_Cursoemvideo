<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Processamento</h1>
    </header>
    <main>
        <?php 
            $Nome = $_GET["nome"] ?? "Taldo";
            $Sobrenome = $_GET["sob"] ?? "Nulas";
            echo "É um prazer conhece-lo, $Nome $Sobrenome;"
        ?>
        <a href="javascript:history.go(-2)"></a>
    </main>
</body>
</html>