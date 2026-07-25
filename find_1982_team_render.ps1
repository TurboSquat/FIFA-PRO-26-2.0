$lines = Get-Content 'index.html' -Encoding UTF8
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match 'currentAlbum === .1982. &&|get1982SeqNum') {
        Write-Output ('{0}: {1}' -f ($i+1), $lines[$i])
    }
}
