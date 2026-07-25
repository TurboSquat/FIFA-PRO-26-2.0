$lines = Get-Content 'index.html' -Encoding UTF8
$patterns = 'function getFlagImg', 'function renderSelecao', 'function openSticker', 'laststicker.com/i/cards/', 'sticker-bg', 'gb-flags'
for ($i = 0; $i -lt $lines.Count; $i++) {
  $line = $lines[$i]
  foreach ($p in $patterns) {
    if ($line -match [regex]::Escape($p)) {
      Write-Output ('{0}: {1}' -f ($i+1), $line)
      break
    }
  }
}
