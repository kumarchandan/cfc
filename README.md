# Asset management application

### User Story:

1. Any company asks about the assets they've given ( in specific year )		-- Status Report (inventory table)
	- displays all the assets
		- with Location
		- with Product Name
		- with Owner Name (Company who asked ofcourse)
		- with Product Quantity
		- with Employee Responsible
	- Usage History?
		- all the movement(transaction) has to be tracked
        - by product name
        - by location etc

2. User requests assets, system displays available assets with given params .	-- Asset Availability
	- How the user requests?
        - Manually or email or phone call
        - Employee logs in and search with params
                - center_id, from_date, to_date, product_name, quantity,
                    - check the inventory table with the requested params ( center_id, product_name )     => [ inv_id ]
3. System allocates the quantity.
        - Employee confirms the movement
                - check the transaction_item with returned ( from_date, to_date, status(in_process, not_started), [ inv_id ],  quantity(first n entries))  
                - update inventory table
                    - recipient field if current date is in specified range
                - create instance transaction table
                - create instance in transaction_item table
                    - status field -> future date and current date
        
    - if Status is cancelled, delete the instance from (transcation and transcation_item table)
    - Requested item transaction, store in system
        - it will have status - In Process - Accepted - Rejected

    - Near by Location - allocation of assets
    - Doner query based on specific period, item-wise

4. User can create transaction for moving assets

5. User gets a request for assets, logs in to the system, search the query -> assets that is available in that location, available in that date, assets required.

  - logic
   - looks for the inventory table, on specified_date and product_name
   
6. How to store multiple bookings for assets?

   
   

## Problems Solved

User can allocate the assets to the another center for a specific date range.
 - Inventory table can give assets within date