# UniBar

UniBar is a small helper function to calculate a bar consisting of unicode block characters. 

There are two implementations available:  

1. A JavaScript function
2. A Oracle SQL function

Why should you use a bar based on text instead of one of the famous HTML 5 chart libraries?

* Text based bar charts working also in simple text editors and command line tools (with unicode capable font settings, ok...)
* They can be easily copied or exported to office documents for further charting
* You can use standard table besed report facilities in your development framework to deliver bar charts
* Your page loads faster, because you don't need to load charting libraries

## Usage JS implementation

There are four parameters:

1. value: your bar value
2. scale: the 100% value for a full bar width, default is 1 
3. width_block_characters: the width of a 100% bar as a number of characters, default is 25
4. fill_scale: fill scale with a shade block character, default is 1 (yes)

