# UniBar

UniBar is a small helper function to calculate a bar consisting of unicode block characters. 

There are two implementations available:  

1. A JavaScript function
2. A Oracle SQL function (coming soon...)

Why should you use a bar based on text instead of one of the famous HTML 5 chart libraries?

* Text based bar charts working also in simple text editors and command line tools (with unicode capable font settings, ok...)
* They can be easily copied or exported to office documents for further charting
* You can use standard report facilities in your development framework to deliver bar charts
* Your page loads faster, because you don't need to load charting libraries

## Usage JS implementation

There are three parameters:

1. value: your bar value
2. scale: the 100% value
3. widthBlockCharacters: the width of a 100% bar as a number of characters 

The function returns an object - try it in your browser console:

    unibar(value, scale, widthBlockCharacters);
    
If you want only the text of the bar you can do it in this way:

    unibar(value, scale, widthBlockCharacters).text;
    
A styling example:

    <style>
        .unibar {
            font-family: "Arial Unicode MS";
            font-size: 1em;
            color: dodgerblue;
        }
    </style>
    <script>
        ...
        var bar = '<span class="unibar">' + 
            unibar(value, scale, widthBlockCharacters).text +
            '</span>';
        ...
    </script>

