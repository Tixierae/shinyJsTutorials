C3Hist <- function(prob,x1,my_th,width=NULL,height=NULL) {

  # forward options using x
  x = list(
    prob = prob,
    x1 = x1,
    my_th = my_th
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'C3Hist',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

C3HistOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3Hist', width, height, package = 'C3')
}

renderC3Hist <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3HistOutput, env, quoted = TRUE)
}
