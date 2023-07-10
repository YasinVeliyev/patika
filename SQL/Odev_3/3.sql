SELECT title FROM film
WHERE title ~~* 't___%' OR title ~~* '_t__%' OR title ~~* '__t_%' OR title ~~* '___t%' OR title ~~* '___%t'