import * as api from 'api.js';

export function post(req, res) {
    api.post('sessions',req.sessions.token ).then(response => {
        delete req.session.user;
        res.end(JSON.stringify(response));
    });
}