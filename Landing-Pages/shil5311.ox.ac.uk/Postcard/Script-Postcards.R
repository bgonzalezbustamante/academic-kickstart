## Bastián González-Bustamante
## University of Oxford
## bastian.gonzalezbustamante@politics.ox.ac.uk
## December 2020 - March 2021

remotes::install_github("seankross/postcards@main")

rmarkdown::pandoc_version()

## Install pandonc and then run
rmarkdown::find_pandoc(cache = FALSE)

## Generating new markdown
rmarkdown::draft("index.Rmd", "Trestles", package = "postcards")

## Then, knit markdown
