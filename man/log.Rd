% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/log.R
\docType{data}
\name{log}
\alias{log}
\title{Logging functions}
\format{
An object of class \code{list} of length 7.
}
\usage{
log
}
\description{
Convenient way to log messages at a desired severity level.
}
\details{
The \code{log} object is a list of logging functions, in order of decreasing severity:
\enumerate{
\item \code{fatal}
\item \code{error}
\item \code{warn}
\item \code{success}
\item \code{info}
\item \code{debug}
\item \code{trace}
}

Rhino configures logging based on settings read from the \code{config.yml} file
in the root of your project:
\enumerate{
\item \code{rhino_log_level}: The minimum severity of messages to be logged.
\item \code{rhino_log_file}: The file to save logs to. If \code{NA}, standard error stream will be used.
}

The default \code{config.yml} file uses \verb{!expr Sys.getenv()}
so that log level and file can also be configured
by setting the \code{RHINO_LOG_LEVEL} and \code{RHINO_LOG_FILE} environment variables.

The functions re-exported by the \code{log} object are aliases for \code{{logger}} functions.
You can also import the package and use it directly to utilize its full capabilities.
}
\examples{
\dontrun{
  box::use(rhino[log])

  # Messages can be formatted using glue syntax.
  name <- "Rhino"
  log$warn("Hello {name}!")
  log$info("{1:3} + {1:3} = {2 * (1:3)}")
}
}
\keyword{datasets}
