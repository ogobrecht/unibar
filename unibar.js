unibar = function(p_value, p_scale, p_width_block_characters, p_fill_scale) {
    var v_return = '', v_value_one_character, v_full_block_characters, v_fill_characters, i;

    if (p_value) {

        // set defaults
        if (!p_scale) p_scale = 1;
        if (!p_width_block_characters) p_width_block_characters = 25;
        if (!p_fill_scale) p_fill_scale = 0;

        // calculate the value of one character
        v_value_one_character = p_scale / p_width_block_characters;

        // create textbar: full block characters
        v_full_block_characters = Math.floor(p_value / v_value_one_character);
        for (i = 0; i < v_full_block_characters; i++) {
            v_return += '\u2588';
        }

        // create textbar: last character - can be between 0 and 8(rounded), because there
        // are block character available in unicode for 1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8 and 1;
        switch ( Math.round(   (   p_value / v_value_one_character
                                 - Math.floor( p_value / v_value_one_character ) )
                             / 0.125 ) ) {
            case 1: // 1/8 = char U+258F
                v_return += '\u258F'; break;
            case 2: // 2/8 = char U+258E
                v_return += '\u258E'; break;
            case 3: // 3/8 = char U+258D
                v_return += '\u258D'; break;
            case 4: // 4/8 = char U+258C
                v_return += '\u258C'; break;
            case 5: // 5/8 = char U+258B
                v_return += '\u258B'; break;
            case 6: // 6/8 = char U+258A
                v_return += '\u258A'; break;
            case 7: // 7/8 = char U+2589
                v_return += '\u2589'; break;
            case 8: // 8/8 = char U+2588
                v_return += '\u2588'; break;
        }

    }

    // fill up scale with shade
    if (p_fill_scale == 1) {
        v_fill_characters = p_width_block_characters - v_return.length;
        for (i = 0; i < v_fill_characters; i++) {
            v_return += '\u2591';
        }
    }

    return v_return;
};
