$special = 1..4
$posters = 5,6,7,8,9,10,17,18,19,20,27,28,29,30
$stadiums = 11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35
$all = $special + $posters + $stadiums
$sorted = $all | Sort-Object
Write-Output ($sorted -join ', ')
