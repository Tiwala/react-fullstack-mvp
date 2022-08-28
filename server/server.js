import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6969;

const dbConfig = {
    connectionString: process.env.DATABASE_URL
};

if (process.env.NODE_ENV === "production") {
    dbConfig.ssl = {
        rejectUnauthorized: false
    };
}

const pool = new pg.Pool(dbConfig);

app.use(express.static("frontend/waifudatingapp"));
app.use(cors());
app.use(express.json())

const unknownHTTP = (req, res, next) => {
    res.sendStatus(404);
}

const internalError = (err, req, res, next) => {
    res.status(500).send('Internal Server Error');
}

app.get('/profiles', (req, res, next) => {
    pool.query('SELECT * FROM profiles').then((data) => {
        res.send(data.rows);
    }).catch(next)
})

app.get('/profiles/:profile', (req, res, next) => {
    const profileName = req.params.profile;
    pool.query(`SELECT * FROM profiles WHERE name = $1;`, [profileName]).then((data) => {
        const userProfile = data.rows[0];
        if (userProfile) {
            res.send(userProfile);
        } else {
            res.status(404);
            res.send(`The user profile ${profileName} does not exist`);
        }
    }).catch(next)
})

app.get('/waifus', (req, res, next) => {
    pool.query('SELECT * FROM waifus').then((data) => {
        res.send(data.rows);
    }).catch(next)
})

app.get('/waifus/:id', (req, res, next) => {
    const waifuId = req.params.id;
    pool.query(`SELECT * FROM waifus WHERE waifu_id = $1;`, [waifuId]).then((data) => {
        const waifuProfile = data.rows[0];
        if (waifuProfile) {
            res.send(waifuProfile);
        } else {
            res.status(404);
            res.send(`The user profile at ${waifuId} does not exist`);
        }
    }).catch(next)
})


app.use(unknownHTTP);

app.use(internalError);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});