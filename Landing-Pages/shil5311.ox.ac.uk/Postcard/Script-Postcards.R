remotes::install_github("seankross/postcards@main")

rmarkdown::pandoc_version()

## Install Pandonc and then run:
rmarkdown::find_pandoc(cache = FALSE)

rmarkdown::draft("index.Rmd", "Trestles", package = "postcards")
