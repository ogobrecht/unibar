unibar = function(value, scale, widthBlockCharacters) {

    if (value) {

        // initialise variables
        var i, r = {};
        r.value = value; // input value should be present in return object r

        // set defaults
        r.scale = scale || 100;
        r.widthBlockCharacters = widthBlockCharacters || 25;

        // calculate the value of one character
        r.valueOfOneCharacter = r.scale / r.widthBlockCharacters;

        // calculate maximum possible precision - 8 block characters with different width are available
        r.maxPossiblePrecision = r.scale / ( r.widthBlockCharacters * 8 );  //

        // calculate number of full block characters
        r.numFullBlockCharacters = Math.floor(value / r.valueOfOneCharacter);

        // calculate the value of the last block - can be between 0 and 8(rounded), because there are block character
        // available in unicode for 1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8 and 1;
        r.lastBlock = Math.round(
            ( value / r.valueOfOneCharacter - Math.floor( value / r.valueOfOneCharacter ) ) / 0.125
        );

        // create textbar: full block characters
        r.text = '';
        for (i = 0; i < r.numFullBlockCharacters; i++) {
            r.text += '\u2588';
        }

        // create textbar: last character
        switch (r.lastBlock) {
            case 0:
                r.lastBlock = '0 = no char';
                break;
            case 1:
                r.text += '\u258F';
                r.lastBlock = '1/8 = char U+258F';
                break;
            case 2:
                r.text += '\u258E';
                r.lastBlock = '2/8 = char U+258E';
                break;
            case 3:
                r.text += '\u258D';
                r.lastBlock = '3/8 = char U+258D';
                break;
            case 4:
                r.text += '\u258C';
                r.lastBlock = '4/8 = char U+258C';
                break;
            case 5:
                r.text += '\u258B';
                r.lastBlock = '5/8 = char U+258B';
                break;
            case 6:
                r.text += '\u258A';
                r.lastBlock = '6/8 = char U+258A';
                break;
            case 7:
                r.text += '\u2589';
                r.lastBlock = '7/8 = char U+2589';
                break;
            case 8:
                r.text += '\u2588';
                r.lastBlock = '8/8 = char U+2588';
                break;
        }


    }

    return r || null;

};
