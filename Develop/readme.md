when button is pressed
    page prompt "How many characters (between 8-128 characters"
        if user inputs a number less than 8, page responds "Invalid input, password must be between 8 and 128 characters long
    page prompt "What kind of characters may be included? 
    Confirm (Y/N) for numbers
    Confirm (Y/N) for uppercase letters
    Confirm (Y/N) for lowercase letters
    Confirm (Y/N) for special characters

All prompts completed
    page generates password in prompt
("Would you like to generate a new password?")
(Y/N)
rerun function on yes
on NO ("Thank you for using our generator!")
