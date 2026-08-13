
timeline
========

Timelines index page and data for [gcc3/timeline](https://github.com/gcc3/timeline).  

The app is checked out once, at `public/__timeline__`, and every timeline is a
folder beside it holding its own settings and events. Only the data belongs here.  


Layout
------

```
public/
  index.html              the index page
  __timeline__/           submodule: gcc3/timeline (the app, one copy)
  philosophy/
    config.js             opening date, band scale, zoom limits
    data/<lang>.js        the events
    index.html            generated: a copy of __timeline__/stub.html
    langs.js              generated: the languages data/ has files for
  human/  music/  ai/     the same
```

`config.js` and `data/` are the whole of it — they are tracked here and served as
they are. `./setup.sh` writes the two generated files; they are gitignored.

The app reads `config.js`, `langs.js` and `data/` relative to the page, so
`index.html` names no timeline and every copy of it is byte-identical. That is
what lets one `app.js` serve all of them.  


Use
---

- `./update.sh` — pull this repo and the submodule, then regenerate. The normal command.  
- `./update.sh --remote` — same, but move the submodule to the tip of its branch.  
- `./setup.sh` — regenerate only, for when the data or `stub.html` changed.  


Adding a timeline
-----------------

1. `public/<name>/config.js` — copy one of the existing ones and set the opening
   date and scale.  
2. `public/<name>/data/en.js` (and any other languages), each setting `title` and
   listing its event groups in `timelines`.  
3. A link in `public/index.html`.  
4. `./setup.sh`.  
