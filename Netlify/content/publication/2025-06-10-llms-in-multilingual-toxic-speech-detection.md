---
title: 'Charting Reproducibility and Performance: LLMs in Multilingual Toxic Speech Detection'
date: '2025-06-10'
slug: llms-in-multilingual-toxic-speech-detection
## categories: []
## tags: []
authors:
- "bgonzalezbustamante"
doi: ''
## publishDate: ''

publication_types:
  - '6'

publication: 'Paper presented at the LLM Pre-Conference Workshop, European Political Science Association (EPSA), Universidad Carlos III de Madrid, Madrid, Spain, June 25, 2025'
publication_short: ''
abstract: 'Large Language Models (LLMs) are increasingly central to analysing and mitigating incivility and toxicity in online communication, however, their comparative strengths vary by language coverage, model openness, and other factors. Drawing on the Multilingual Text Detoxification (TextDetox) corpus, which spans seven languages (i.e., Arabic, Chinese, English, German, Hindi, Russian, and Spanish), this paper benchmarks 807 model-language pairs and pools goodness-of-prediction indicators in a meta-analysis. The evaluation includes OpenAI’s GPTs, o-series, Claude models, xAI’s Grok, Llama checkpoints, Alibaba Qwen-series, Mistral models, among others. Three patterns emerge from our analysis. First, high-resource languages (i.e., English, German, and Spanish) enjoy, on average, a 7.7-point F1-score advantage over lower-resource counterparts (i.e., Arabic, Chinese, Hindi, and Russian). Second, proprietary models top the leaderboard in low-resource languages, however, the openness penalty is minor and statistically inconclusive. Conversely, open-source models tend to equal closed models in high-resource languages. Third, reasoning models and chain-of-thought (CoT) neither help nor harm this binary classification task, whereas compact models (with 7B parameters or fewer) trail a larger baseline by roughly 9.8 points. Ancillary findings derived from temperature experiments show near-perfect intercoder reliability between deterministic and stochastic runs, indicating that modern proprietary APIs can achieve reproducible classification for this task despite limited control over decoding. Taken together, the findings recommend a tiered strategy: open models for well-resourced languages, closed or hybrid solutions where data are sparse, and caution against assuming that more parameters or explicit reasoning automatically translate into better performance.'
summary: ''
featured: no
url_pdf: ~
url_code: ~
url_dataset: ~
url_poster: ~
url_project: ~
url_slides: ~
url_source: ~
url_video: ~
links:
  ## - icon: file-pdf
    ## icon_pack: far
    ## name: PDF
    ## url: ''
  ## - icon: doi
    ## icon_pack: ai
    ## name: DOI
    ## url: ''
  - icon: arxiv
    icon_pack: ai
    name: Preprint
    url: 'https://talkingtomachines.org/large-language-models-workshop/'
  ## - icon: osf
    ## icon_pack: ai
    ## name: OSF-Project
    ## url: ''
  ## - icon: github
    ## icon_pack: fab
    ## name: Code
    ## url: ''
  ## - icon: dataverse
    ## icon_pack: ai
    ## name: Dataset
    ## url: ''
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
slides: ''
---
