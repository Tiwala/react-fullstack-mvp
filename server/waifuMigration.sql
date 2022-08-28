DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS waifus CASCADE;

CREATE TABLE profiles (
    profile_id SERIAL,
    name TEXT UNIQUE,
    password TEXT,
    photo TEXT,
    about TEXT
);

CREATE TABLE waifus (
    waifu_id SERIAL,
    name TEXT,
    image TEXT,
    profile TEXT,
    age INT
);

INSERT INTO profiles (name, password, photo, about) VALUES ('danny', 'iamdanny', 'http://photos1.blogger.com/blogger/3522/844/1600/765266755_l.jpg', 'howdy guys i am a software engineer');

INSERT INTO waifus (name, image, profile, age) VALUES ('Hideyoshi', 'http://images6.fanpop.com/image/photos/32800000/Hideyoshi-Kinoshita-baka-to-test-to-shoukanjuu-32894413-857-1024.jpg', 'hi! acting and software engineering has my heart <3', 21);
INSERT INTO waifus (name, image, profile, age) VALUES ('Ruka', 'https://static.zerochan.net/Urushibara.Ruka.full.3182469.jpg', 'hi! i like mad scientists, time travel, and software engineers :)', 27);
INSERT INTO waifus (name, image, profile, age) VALUES ('Saika', 'https://cdn.donmai.us/original/4a/71/__totsuka_saika_yahari_ore_no_seishun_lovecome_wa_machigatteiru_drawn_by_sekina__4a716565f1af40ddd684cb6f8e923764.jpg', 'hiiii~! i like guys who look like bigfoot <3 sorry if i sweat a lot :( any software engineers here?', 23);
INSERT INTO waifus (name, image, profile, age) VALUES ('Haku', 'https://static.zerochan.net/Haku.%28NARUTO%29.full.3234507.jpg', 'ninja by night, aspiring gf to a software engineer by day', 28);
INSERT INTO waifus (name, image, profile, age) VALUES ('Astolfo', 'https://i.pinimg.com/736x/6f/f5/47/6ff5474c7ffdb898f62ed0e3462963a5.jpg', 'looking for nerd bf; better if software engineer/web developer. when they talk trash at the bar let me do the fighting', 25);
INSERT INTO waifus (name, image, profile, age) VALUES ('Kirito', 'https://i.pinimg.com/originals/d6/0f/25/d60f2544fec57f5ba8f6a8105fe23ca0.jpg', 'if you teach me javascript i will teach you how to use a sword', 23);
INSERT INTO waifus (name, image, profile, age) VALUES ('Felix', 'https://ih1.redbubble.net/image.1802621374.0820/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', 'am a doctor! i can heal your broken heart nyahaha! if you are a software engineer with a name that starts with a d and ends with anny i will probably into you idk why', 26);