<!DOCTYPE html>
<html lang="ka">
<head>
    <title>მონიტორინგის ელექტრონული სისტემა</title>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}"/>
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/png">
</head>
<body>
    <div id="root"></div>

    <script type="text/javascript" src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
