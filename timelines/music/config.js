
var init_date = "Jan 01 1960 00:00:00 GMT";

// Zoom limits, relative to the scale set below (1 = the initial view):
// thirteen steps out to a 200-year scale bar, three steps in to a 3-month one.
var zoom_range = [1 / 200, 3.4];

function tl_init() {
    var eventSource = new Timeline.DefaultEventSource();

    // Timezone
    var date = new Date();
    var timezoneNumber = date.getTimezoneOffset() * (-1) / 60; // For tokyo it's 9

    // Three synced views of the same dates, coarsest last. Events are read on
    // the last band, which starts at 100px per year (1000px per decade), so
    // the scale bar opens at "1 year"; bands 1 and 2 are 50x and 2.5x finer.
    var bandInfos = [
        // Band 1
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "15%",
            intervalUnit: Timeline.DateTime.YEAR,
            intervalPixels: 5000
        }),

        // Band 2
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "25%",
            intervalUnit: Timeline.DateTime.DECADE,
            intervalPixels: 2500
        }),

        // Band 3 — the band the events are read on
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "60%",
            intervalUnit: Timeline.DateTime.DECADE,
            multiple: 4,
            intervalPixels: 1000
        })
    ];

    // Make bands sync
    for (var b = 1; b < bandInfos.length; b++) {
        bandInfos[b].syncWith = 0;
        bandInfos[b].highlight = true;
    }

    let tl = Timeline.create(document.getElementById("timeline"), bandInfos, Timeline.HORIZONTAL);
    var base_url = '.';  // The base url for image, icon and background image references in the data

    // Load data: data/<lang>.js lists its event groups in `timelines`
    // (older data files only defined a single `tl_main` group)
    var groups = (typeof timelines !== "undefined") ? timelines :
        (typeof tl_main !== "undefined") ? [tl_main] : [];
    for (var i = 0; i < groups.length; i++) {
        eventSource.loadJSON(groups[i], base_url);
    }

    tl.layout();  // display the Timeline
    return tl;
}
