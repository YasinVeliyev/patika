const fs = require("fs");

fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err) => {
    if (err) {
        console.error(err);
    }
});

fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let dat = [JSON.parse(data)];
        dat.push({ name: "Employee 2 Name", salary: 2500 });
        fs.writeFile("employees.json", JSON.stringify(dat), "utf8", (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
});

setTimeout(
    () =>
        fs.unlink("./employees.json", (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("employees.json was deleted");
            }
        }),
    10,
);
