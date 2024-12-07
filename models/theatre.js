const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");

const Theatre = {
    view: async (res, data) => {
        const {film_id} = data;
        try {
            let query;
            let params = [];

            if (film_id) {
                query = `
                    SELECT theatres.id,
                           theatres.name                                                                AS theater_name,
                           theatres.image,
                           theatres.address,
                           theatres.description,
                           theatres.price,
                           theatres.deleted_at,
                           films.title                                                                  AS film_name,
                           films.image                                                                  AS film_image,
                           films.duration                                                               AS film_duration,
                           GROUP_CONCAT(CONCAT(playtimes.films_id, '|', playtimes.time, '|', playtimes.id) SEPARATOR ', ') AS playtimes
                    FROM theatres
                             LEFT JOIN playtimes ON theatres.id = playtimes.theatres_id
                             LEFT JOIN films ON films.id = playtimes.films_id
                    WHERE playtimes.films_id = ?
                    GROUP BY theatres.id
                `;
                params = [film_id];
            } else {
                query = `
                    SELECT id,
                           name AS theater_name,
                           image,
                           address,
                           description,
                           price,
                           deleted_at
                    FROM theatres
                `;
            }

            const [data_check] = await db.promise().execute(query, params);
            if (data_check.length === 0) return responseJson(res, false, [], "Tidak ada data");

            const formattedData = data_check.map(theater => ({
                id: theater.id,
                name: theater.theater_name,
                image: theater.image,
                address: theater.address,
                description: theater.description,
                price: theater.price,
                deleted_at: theater.deleted_at,
                playtimes: theater.playtimes
                    ? theater.playtimes.split(', ').map(pt => {
                        const [film_id, playtime, playtime_id] = pt.split('|');
                        return {
                            film_id: parseInt(film_id),
                            playtime_id: parseInt(playtime_id),
                            playtime: playtime
                        };
                    })
                    : []
            }));

            return responseJson(
                res,
                true,
                film_id ? {
                    title: data_check[0]?.film_name,
                    image: data_check[0]?.film_image,
                    duration: data_check[0]?.film_duration,
                    theatre: formattedData
                } : formattedData,
                "Menampilkan data theater"
            );
        } catch (err) {
            return responseJson(res, false, [], err.message);
        }
    }


};


module.exports = Theatre