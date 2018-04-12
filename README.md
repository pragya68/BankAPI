# BankAPI 
REST service that can:
1. Given a bank branch IFSC code, get branch details
2. Given a bank name and city, gets details of all branches of the bank in the city

view the live version : https://cryptic-sands-72465.herokuapp.com

## API Endpoint :

Base URL: ```https://cryptic-sands-72465.herokuapp.com/api```
* GET ```/api/Banks/:ifscCode```

Given a bank branch IFSC code, get branch details
* GET ```/api/Banks?bank_name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED&city=NAGPUR```

Given a bank name and city, gets details of all branches of the bank in the city
