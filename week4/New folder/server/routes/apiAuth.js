module.exports = function (app, path) {

    app.post('/api/auth', function (req, res) {
        users = [
            {
                'username': 'Dank',
                'birthday': '21/06/96',
                'age': 20,
                'email': 'DankestDank@gmail.com',
                'password': 'Oboe',
                'valid': false
            },
            {
                'username': 'Dylan',
                'birthday': '09/11/03',
                'age': 27,
                'email': 'DylDyl@gmail.com',
                'password': 'LovesFurries',
                'valid': false
            },
            {
                'username': 'Zee',
                'birthday': '27/04/91',
                'age': 42,
                'email': 'Dakobama@gmail.com',
                'password': 'Durries',
                'valid': false
            }
        ];

            console.log('yeah, you made it');
        if (!req.body) {
            return res.sendStatus(400)
        }
        var userObj = {};
        userObj.username = "";
        userObj.password = "";
        userObj.age = 0;
        userObj.birthday = "";
        userObj.email = "";
        userObj.valid = false;
        for (let i = 0; i < users.length; i++) {
            if (req.body.password == users[i].password && req.body.username == users[i].username) {
                userObj.username = users[i].username;
                userObj.age = users[i].age;
                userObj.birthday = users[i].birthday;
                userObj.email = users[i].email;
                userObj.valid = true;
            }
        }

        res.send(userObj);
    });


}