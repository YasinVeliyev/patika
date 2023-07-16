SELECT COUNT(*) FROM film
WHERE  length > (SELECT SUM(length)/COUNT(length) FROM film)

-- SELECT SUM(length)/COUNT(length) FROM film

-- SELECT COUNT(*) FROM film
-- WHERE  length > 115