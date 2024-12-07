const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");

const Playtime = {
    view: async (res, data) => {
        const {id} = data;
        try {
            if (!id) {
                return responseJson(res, false, [], "ID playtime diperlukan.");
            }

            const query = `
                SELECT playtimes.id     AS playtime_id,
                       playtimes.time   AS playtime_time,
                       films.id         AS film_id,
                       films.title      AS title,
                       films.synopsis   AS synopsis,
                       films.image      AS film_image,
                       theatres.id      AS theatre_id,
                       theatres.name    AS theatre_name,
                       theatres.address AS theatre_address,
                       theatres.price   AS theatre_price
                FROM playtimes
                         LEFT JOIN films ON playtimes.films_id = films.id
                         LEFT JOIN theatres ON playtimes.theatres_id = theatres.id
                WHERE playtimes.id = ?
            `;

            const [data_check] = await db.promise().execute(query, [id]);

            if (data_check.length === 0) {
                return responseJson(res, false, [], `Playtime dengan ID ${id} tidak ditemukan.`);
            }

            const result = data_check.map(row => ({
                id: row.playtime_id,
                time: row.playtime_time,
                film: {
                    id: row.film_id,
                    title: row.title,
                    synopsis: row.synopsis,
                    image: row.film_image
                },
                theater: {
                    id: row.theatre_id,
                    name: row.theatre_name,
                    address: row.theatre_address,
                    price: row.theatre_price
                }
            }));

            return responseJson(res, true, result, "Menampilkan data playtime, film, dan theater terkait.");
        } catch (err) {
            return responseJson(res, false, [], err.message);
        }
    }
};


module.exports = Playtime