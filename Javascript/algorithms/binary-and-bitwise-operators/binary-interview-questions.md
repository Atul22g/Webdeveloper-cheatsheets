/* ----------- INTERVIEW QUESTIONS -----------*/

/* What is 2^5 in binary? */

    00100000

    32 / 2 = 16 (r.0)
    16 / 2 = 8 (r.0)
    8 / 2 = 4 (r.0)
    4 / 2 = 2 (r.0)
    2 / 2 = 1 (r.0)
    1 / 2 = 0 (r.1)

    [1]*2^(5) => 32 => 2^(5)

/* What is 2^5 - 1 in binary? */

    00011111

    31 / 2 = 15 (r.1)
    15 / 2 = 7 (r.1)
    7 / 2 = 3 (r.1)
    3 / 2 = 1 (r.1)
    1 / 2 = 0 (r.1)

    ([1]*1^(0) = 1) + ([1]*2^(1) = 2) + ([1]*2^(2) = 4) + ([1]*2^(3) = 8) + ([1]*2^(4) = 16) => 31 => 2^(5) - 1


/* NOTES */

    11111111 = 255

    (going from right to left)
    ([1]*2^(0) = 1) + ([1]*2^(1) = 2) + ([1]*2^(2) = 4) + ([1]*2^(3) = 8) +
    ([1]*2^(4) = 16) + ([1]*2^(5) = 32) + ([1]*2^(6) = 64) + ([1]*2^(7) = 128)


/* What is the general rule for binary numbers which are or the form 2^n or 2^n - 1? */

- For 2^n ==== converted to binary is ====> 1 followed by n zeros (0) (Example: 2^3 = 8 ==== converted to binary is ====> 00001000)
- For ((2^n)-1) ==== converted to binary is ====> n ones (1) (Example: ((2^3)-1) = 7 ==== converted to binary is ====> 00000111)

More details: https://www.binaryhexconverter.com/decimal-to-binary-converter
