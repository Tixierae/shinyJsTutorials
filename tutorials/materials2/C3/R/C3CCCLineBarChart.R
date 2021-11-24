#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3CCCLineBarChart <- function(dataset, colors, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    dataset  = dataset,
    colors   = colors
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'C3CCCLineBarChart',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

#' Shiny bindings for C3CCCLineBarChart
#'
#' Output and render functions for using C3CCCLineBarChart within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3CCCLineBarChart
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3CCCLineBarChart-shiny
#'
#' @export
C3CCCLineBarChartOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3CCCLineBarChart', width, height, package = 'C3')
}

#' @rdname C3CCCLineBarChart-shiny
#' @export
renderC3CCCLineBarChart <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3CCCLineBarChartOutput, env, quoted = TRUE)
}
