/*
We have a two-dimensional board game involving snakes.  The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move.  Snakes can only enter on the edges of the board, and each snake can move in only one direction.

We'd like to find the places where a snake can pass through the entire board, moving in a straight line.

Here is an example board:

    col-->        0  1  2  3  4  5  6
               +----------------------
    row      0 |  +  +  +  0  +  0  0
     |       1 |  0  0  0  0  0  0  0
     |       2 |  0  0  +  0  0  0  0
     v       3 |  0  0  0  0  +  0  0
             4 |  +  +  +  0  0  0  +

Write a function that takes a rectangular board with only +'s and 0's, and returns two collections:

* one containing all of the row numbers whose row is completely passable by snakes, and  
* the other containing all of the column numbers where the column is completely passable by snakes.

Complexity Analysis:
r: number of rows in the board
c: number of columns in the board

straight_board_1 = [['+', '+', '+', '0', '+', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '+', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '+', '0', '0'],
                    ['+', '+', '+', '0', '0', '0', '+']]
find_passable_lanes(straight_board_1) # = Rows: [1], Columns: [3, 5]


straight_board_2 = [['+', '+', '+', '0', '+', '0', '0'],
                    ['0', '0', '0', '0', '0', '+', '0'],
                    ['0', '0', '+', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '+', '0', '0'],
                    ['+', '+', '+', '0', '0', '0', '+']]
find_passable_lanes(straight_board_2) # = Rows: [], Columns: [3]


straight_board_3 = [['+', '+', '+', '0', '+', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '+', '+', '0', '+', '0'],
                    ['0', '0', '0', '0', '+', '0', '0'],
                    ['+', '+', '+', '0', '0', '0', '+']]
find_passable_lanes(straight_board_3) # = Rows: [1], Columns: []


straight_board_4 = [['+']]
find_passable_lanes(straight_board_4) # = Rows: [], Columns: []

*/
"use strict";

const straight_board_1 = [
    ['+', '+', '+', '0', '+', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '+', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '+', '0', '0'],
    ['+', '+', '+', '0', '0', '0', '+']
];

const straight_board_2 = [
    ['+', '+', '+', '0', '+', '0', '0'],
    ['0', '0', '0', '0', '0', '+', '0'],
    ['0', '0', '+', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '+', '0', '0'],
    ['+', '+', '+', '0', '0', '0', '+']
];

const straight_board_3 = [
    ['+', '+', '+', '0', '+', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '+', '+', '0', '+', '0'],
    ['0', '0', '0', '0', '+', '0', '0'],
    ['+', '+', '+', '0', '0', '0', '+']
];

const straight_board_4 = [
    ['+']
];



function find_passable_lanes(input_straight_board) {

    //define rows and columns
    let get_all_items_in_a_column_array = []
    let included_columns = []
    let included_rows = []

    //loop through each one of them to find + sings and discard them
    for (let i = 0; i < input_straight_board.length; i++) {

        //console.log("existing row >>",input_straight_board[i], i, "<<")

        if (!input_straight_board[i].includes("+")) {
            included_rows.push(i)
        }

        for (let j = 0; j < input_straight_board[i].length; j++) {

            // console.log("existing item >>",input_straight_board[i][j], i, j, "<<")

            //if there are no +'s' get the colum id to display it as output
            if (input_straight_board[i][j] != "+") {
                get_all_items_in_a_column_array.push(j)
            }
        }
    }

    //count how many times an item is present in the included_columns
    let check_columns_count = {};
    for (let k = 0; k < get_all_items_in_a_column_array.length; k++) {
        check_columns_count[get_all_items_in_a_column_array[k]] = 1 + (check_columns_count[get_all_items_in_a_column_array[k]] || 0);
    }

    // console.log("check_columns_count >>", check_columns_count, "<<") 
    // console.log("input_straight_board_length >>", input_straight_board.length, "<<")



    // if the number of times an items appears in the get_all_items_in_a_column_array match to the max length of the array is in send it to the included_columns array
    for (let columns_item in check_columns_count) {

        // console.log("columns_item_key >>",columns_item, "columns_item_value >>", check_columns_count[columns_item],"<<")  
        if (check_columns_count[columns_item] == input_straight_board.length) {
            included_columns.push(columns_item)
        }
    }


    //   console.log("included_rows >>", included_rows, "<<")
    //   console.log("included_columns >>", included_columns, "<<")

    return {
        "Rows": included_rows,
        "Columns": included_columns
    }
}

console.log(find_passable_lanes(straight_board_1))
console.log(find_passable_lanes(straight_board_2))
console.log(find_passable_lanes(straight_board_3))
console.log(find_passable_lanes(straight_board_4))


////////////////////////////////////////////second solution///////////////

function find_passable_lanes_updated(straight_board) {
    let n = straight_board.length;
    let m = straight_board[0].length;

    function scanColumns(rowIndex, columnIndex) {
        let passable = true;
        while (columnIndex < m) {
            if (straight_board[rowIndex][columnIndex] != '0') {
                return false;
            }
            columnIndex++;
        }
        return passable;
    }

    function scanRows(rowIndex, columnIndex) {
        let passable = true;
        while (rowIndex < n) {
            if (straight_board[rowIndex][columnIndex] != '0') {
                return false
            }
            rowIndex++
        }
        return passable;
    }


    let rowId = 0,
        columnId = 0;
    let row = [],
        columns = [];
    while (rowId < n) {
        if (straight_board[rowId][columnId] == '0') {
            if (scanColumns(rowId, columnId + 1)) {
                row.push(rowId);
            }
        }
        rowId++;
    }
    rowId = 0, columnId = 0;
    while (columnId < m) {
        if (straight_board[rowId][columnId] == '0') {
            if (scanRows(rowId + 1, columnId)) {
                columns.push(columnId);
            }
        }
        columnId++
    }


    console.log(row, columns);
}


find_passable_lanes_updated(straight_board_1)
find_passable_lanes_updated(straight_board_2)
find_passable_lanes_updated(straight_board_3)
find_passable_lanes_updated(straight_board_4)