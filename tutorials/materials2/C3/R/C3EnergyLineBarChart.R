#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3EnergyLineBarChart <- function(dataset, colors, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    dataset  = dataset,
    colors   = colors
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'C3EnergyLineBarChart',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

#' Shiny bindings for C3EnergyLineBarChart
#'
#' Output and render functions for using C3EnergyLineBarChart within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3EnergyLineBarChart
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3EnergyLineBarChart-shiny
#'
#' @export
C3EnergyLineBarChartOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3EnergyLineBarChart', width, height, package = 'C3')
}

#' @rdname C3EnergyLineBarChart-shiny
#' @export
renderC3EnergyLineBarChart <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3EnergyLineBarChartOutput, env, quoted = TRUE)
}
