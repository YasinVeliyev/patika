-- SELECT COUNT(*) FROM film
-- WHERE  rental_rate = (SELECT MAX(rental_rate) FROM film);

SELECT COUNT(film_id) FROM film
GROUP BY rental_rate
ORDER BY rental_rate DESC
LIMIT 1


