const db = require('../config/dbConfig');

const Schedule = {
    findAll: async () => {
        const query = 'SELECT * FROM schedules';
        return db.query(query);
    },
    findById: async (id) => {
        const query = 'SELECT * FROM schedules WHERE id = $1';
        return db.query(query, [id]);
    },
    create: async (schedule) => {
        const query = `INSERT INTO schedules (day, start_time, end_time) 
                       VALUES ($1, $2, $3) RETURNING *`;
        const values = [schedule.day, schedule.start_time, schedule.end_time];
        return db.query(query, values);
    },
    update: async (id, schedule) => {
        const query = `UPDATE schedules SET day = $1, start_time = $2, end_time = $3 
                       WHERE id = $4 RETURNING *`;
        const values = [schedule.day, schedule.start_time, schedule.end_time, id];
        return db.query(query, values);
    },
    delete: async (id) => {
        const query = 'DELETE FROM schedules WHERE id = $1 RETURNING *';
        return db.query(query, [id]);
    },
};

module.exports = Schedule;
