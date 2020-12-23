---
title: 'Impact Cookies'
subtitle: 'Easter Egg'
date: '2020-12-23'
authors: ["bgonzalezbustamante"]
output: html_document

# View.
#   1 = List
#   2 = Compact
#   3 = Card
## view: 3

# Optional header image (relative to `static/img/` folder).
## header:
  ## caption: ""
  ## image: ""

---

<div class="container" style="text-align: center;">
<div id="quote-box">
<p class="quote"><strong>¡Te declararán la guerra!</strong></p>
</div>
<button id="loadQuote">Sacar otra galleta</button>
</div>
<script src="../files/script.js"></script>
<script>
setInterval(printQuote, 500000);
</script>
