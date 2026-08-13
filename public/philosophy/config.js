
// Opens on 1687, the year Newton's Principia was published
var init_date = "Jan 01 1687 00:00:00 GMT";

// Scale of the main event band, in pixels per decade: 200 opens the scale bar
// at "5 years". The two finer bands follow at 50x and 2.5x.
var px_per_decade = 200;

// Zoom limits, relative to that scale (1 = the initial view):
// nine steps out to a 200-year scale bar, five steps in to a 6-month one.
var zoom_range = [1 / 40, 8];
