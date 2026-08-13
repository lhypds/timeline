
var init_date = "Jan 01 1943 00:00:00 GMT";

// Scale of the main event band, in pixels per decade: 1000 opens the scale bar
// at "1 year". The two finer bands follow at 50x and 2.5x.
var px_per_decade = 1000;

// Zoom limits, relative to that scale (1 = the initial view):
// nine steps out to a 20-year scale bar, three steps in to a 3-month one.
var zoom_range = [1 / 40, 3.4];
