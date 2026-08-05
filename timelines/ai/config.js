var init_date = "Jan 01 2020 00:00:00 GMT";

function tl_init() {
    var eventSource = new Timeline.DefaultEventSource();

    // Timezone
    var date = new Date();
    var timezoneNumber = date.getTimezoneOffset() * (-1) / 60; // Tokyo: 9

    // This timeline is concentrated in 1943–2026, with especially dense
    // model releases after 2012. The main band therefore uses a detailed
    // yearly scale and receives most of the vertical space.
    var bandInfos = [
        // Band 1 — detailed event band, approximately 150 px per year
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "58%",
            intervalUnit: Timeline.DateTime.YEAR,
            intervalPixels: 150
        }),

        // Band 2 — medium-range navigation, approximately 48 px per year
        Timeline.createBandInfo({
            eventSource: eventSource,
            date: init_date,
            timeZone: timezoneNumber,
            width: "27%",
            intervalUnit: Timeline.DateTime.DECADE,
            intervalPixels: 480,
            overview: true
        }),

        // Band 3 — uncluttered full-history overview, approximately 3.6 px per year
        Timeline.createBandInfo({
            date: init_date,
            timeZone: timezoneNumber,
            width: "15%",
            intervalUnit: Timeline.DateTime.DECADE,
            multiple: 5,
            intervalPixels: 180,
            overview: true
        })
    ];

    // Make bands sync
    for (var b = 1; b < bandInfos.length; b++) {
        bandInfos[b].syncWith = 0;
        bandInfos[b].highlight = true;
    }

    let tl = Timeline.create(document.getElementById("timeline"), bandInfos, Timeline.HORIZONTAL);
    var base_url = '.';

    // Load data: data/<lang>.js lists event groups in `timelines`.
    // The trilingual file exposes `aiMlHistoryTimelines`; select one language
    // before calling tl_init, for example: timelines = aiMlHistoryTimelines.zh;
    var groups = (typeof timelines !== "undefined") ? timelines :
        (typeof tl_main !== "undefined") ? [tl_main] : [];
    for (var i = 0; i < groups.length; i++) {
        eventSource.loadJSON(groups[i], base_url);
    }

    tl.layout();
    return tl;
}
