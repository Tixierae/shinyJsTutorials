#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3HorBar <- function(my_df,colors, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    dataset = my_df,
    colors   = colors
  )
  
  attr(x, 'TOJSON_ARGS') = list(digits = 2)

  # create widget
  htmlwidgets::createWidget(
    name = 'C3HorBar',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

#' Shiny bindings for C3HorBar
#'
#' Output and render functions for using C3HorBar within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3HorBar
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3HorBar-shiny
#'
#' @export
C3HorBarOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3HorBar', width, height, package = 'C3')
}

#' @rdname C3HorBar-shiny
#' @export
renderC3HorBar <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3HorBarOutput, env, quoted = TRUE)
}
