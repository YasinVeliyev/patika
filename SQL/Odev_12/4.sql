SELECT customer.first_name,customer.last_name,customer.email,COUNT(payment.customer_id) FROM customer
INNER JOIN payment on payment.customer_id=customer.customer_id
GROUP BY customer.customer_id
HAVING COUNT(*)=ANY (SELECT DISTINCT(COUNT(payment_id)) FROM payment GROUP BY customer_id ORDER BY count DESC LIMIT 5)
ORDER BY count DESC





