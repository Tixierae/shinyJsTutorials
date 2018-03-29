#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3Hist <- function(my_bins,my_th,x1,risk, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    my_bins = my_bins,
    my_th = my_th,
    x1 = x1,
    risk = risk
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


#' @export
C3HistOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3Hist', width, height, package = 'C3')
}

#' @rdname C3Gauge-shiny
#' @export
renderC3Hist <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3HistOutput, env, quoted = TRUE)
}
