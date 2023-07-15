SELECT payment_id,first_name,last_name FROM customer
RIGHT JOIN payment on payment.customer_id=customer.customer_id