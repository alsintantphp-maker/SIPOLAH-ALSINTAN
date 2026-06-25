fetch("https://docs.google.com/spreadsheets/d/15uUmtI5CDwUw6FpvPyshOR2v9zoDXDxp-3a_D5al7C4/export?format=csv").then(r=>r.text()).then(t=>console.log(t.split("\n").slice(1,10)))
