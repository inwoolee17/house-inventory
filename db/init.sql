DROP TABLE IF EXISTS inventory;

CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price TEXT,
    swimming_pool TEXT,
    image TEXT
);

insert into inventory (name, price, swimming_pool, image) 
VALUES
    ('House_01', '$200', 'No', 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'),
    ('House_02', '$200', 'No', 'https://images.dwell.com/photos/6328431439726800896/6445880622670512128/large.jpg'),
    ('House_03', '$200', 'No', 'https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg');