
// Opens on 5 July 1687, the publication of Newton's Principia
var init_date = "Jul 05 1687 00:00:00 GMT";

// Zoom limits, relative to the scale set below (1 = the initial view):
// nine steps out to a 200-year scale bar, five steps in to a 6-month one.
var zoom_range = [1 / 40, 8];

function tl_init() {
    var eventSource = new Timeline.DefaultEventSource();

    // Timezone
    var date = new Date();
    var timezoneNumber = date.getTimezoneOffset() * (-1) / 60; // For tokyo it's 9

    // Three synced views of the same dates, coarsest last. Events are read on
    // the last band, which starts at 20px per year (200px per decade), so the
    // scale bar opens at "5 years"; bands 1 and 2 are 50x and 2.5x finer.
    var bandInfos = [
        // Band 1
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "15%",
            intervalUnit: Timeline.DateTime.YEAR,
            intervalPixels: 1000
        }),

        // Band 2
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "25%",
            intervalUnit: Timeline.DateTime.DECADE,
            intervalPixels: 500
        }),

        // Band 3 — the band the events are read on
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "60%",
            intervalUnit: Timeline.DateTime.DECADE,
            multiple: 4,
            intervalPixels: 200
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
