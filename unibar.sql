CREATE OR REPLACE FUNCTION unibar( p_value                  IN NUMBER
                                 , p_scale                  IN NUMBER DEFAULT 1
                                 , p_width_block_characters IN NUMBER DEFAULT 25 )
   RETURN VARCHAR2
   DETERMINISTIC
IS
   v_return                 VARCHAR2( 255 );
   v_value_of_one_character NUMBER;
BEGIN
   IF p_value IS NOT NULL THEN
      -- calculate the value of one character
      v_value_of_one_character := p_scale / p_width_block_characters;

      -- create textbar: full block characters
      FOR i IN 1 .. FLOOR( p_value / v_value_of_one_character ) LOOP
         v_return := v_return || UNISTR( '\2588' );
      END LOOP;

      -- create textbar: last character - can be between 0 and 8(rounded), because there
      -- are block character available in unicode for 1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8 and 1;
      CASE ROUND(   (   p_value / v_value_of_one_character
                      - FLOOR( p_value / v_value_of_one_character ) )
                  / 0.125 )
         WHEN 1 THEN -- 1/8
            v_return := v_return || UNISTR( '\258F' );
         WHEN 2 THEN -- 2/8
            v_return := v_return || UNISTR( '\258E' );
         WHEN 3 THEN -- 3/8
            v_return := v_return || UNISTR( '\258D' );
         WHEN 4 THEN -- 4/8
            v_return := v_return || UNISTR( '\258C' );
         WHEN 5 THEN -- 5/8
            v_return := v_return || UNISTR( '\258B' );
         WHEN 6 THEN --6/8
            v_return := v_return || UNISTR( '\258A' );
         WHEN 7 THEN --7/8
            v_return := v_return || UNISTR( '\2589' );
         WHEN 8 THEN --8/8
            v_return := v_return || UNISTR( '\2588' );
         ELSE
            NULL;
      END CASE;
   END IF;

   RETURN v_return;
EXCEPTION
   WHEN VALUE_ERROR THEN
      RETURN '∞';
END;
