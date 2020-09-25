#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3GaugeRisk <- function(value, my_colors, my_max, my_thresholds, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    risk = list(value),
	my_colors = my_colors, # ['#60B044','#F9F900','#F6C600','#F97600','#FF0000'] for CRC
	my_max = my_max, # 200 for CRC TODO update in app!!
	my_thresholds = my_thresholds # [3,8,17,66,100] for CRC
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'C3GaugeRisk',
    x,
    width = width,
    height = height,
    package = 'C3'
  )
}

#' Shiny bindings for C3GaugeRisk
#'
#' Output and render functions for using C3GaugeRisk within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3GaugeRisk
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3GaugeRisk-shiny
#'
#' @export
C3GaugeRiskOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3GaugeRisk', width, height, package = 'C3')
}

#' @rdname C3GaugeRisk-shiny
#' @export
renderC3GaugeRisk <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3GaugeRiskOutput, env, quoted = TRUE)
}