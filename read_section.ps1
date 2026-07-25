param([int]$start, [int]$end)
$lines = Get-Content 'index.html' -Encoding UTF8
for ($i = $start; $i -le $end -and $i -lt $lines.Count; $i++) {
    Write-Output ('{0}: {1}' -f ($i+1), $lines[$i])
}
