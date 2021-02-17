const sql = require('mysql');
const config = {
    "user": "root",
    "password": "1234",
    "server": "localhost",
    "port": 3306,
    "database": "health_db"
}
var con = sql.createConnection(config);


function beforeRender(request, response, done) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("select vesicular_mass, fat_mass, year, sex from students", function(err, result, fields) {
            if (err) throw err;
            request.data = {
                students: result,
                "number": "1",
                "buyer": {
                    "name": "IES EL RINCÓN",
                    "road": "C/ José Sanchez Peñate",
                    "country": "Las Palmas"
                }
            };
            done();
        });
    });
}