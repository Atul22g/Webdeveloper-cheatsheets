var memory = require('./memory');

// Creates array with zero length and pointer to zero blocks of memory
var Array = function() {
	this.length = 0;
	this._capacity = 0;
	this.ptr = memory.allocate(this.length);
};
		/*
		[ptr ] capacity:0bytes 
		 */
		
// Used to calculate the resize; will always allocate 3x as much memory as you need when you go to resize
Array.SIZE_RATIO = 3;

// Push method - O(n): Increases amount of reserved memory and set value of final block
Array.prototype.push = function(value) {
	// resizing to new box at end of array when available memory reaches its capacity
	if (this.length >= this._capacity) {
		this._resize((this.length + 1) * Array.SIZE_RATIO);
	}
	// sets value to the location of this.ptr + this.length
	memory.set(this.ptr + this.length, value);
	this.length++;
}

		/*
		(1) .push(2bytes) > capacity(0bytes) => resize(3bytes * 3 = 9bytes)
		(2) .push (8bytes) = this.length 6 + 2 => 8bytes < capacity (9bytes) 
		(3) .push (2bytes of data1)
		 */
		
// Resize method - O(n): copies everything from old location to new, larger chunk of memory at the end of the array, since unlikely that space will be available directly at the end of current location
Array.prototype._resize = function(size) {
	var oldPtr = this.ptr;
	this.ptr = memory.allocate(size);
	if (this.ptr === null) {
		throw new Error('Out of memory');
	}
	memory.copy(this.ptr, oldPtr, this.length);
	memory.free(oldPtr);
	this._capacity = size;
};

		/*
		oldPtr = this.ptr = [0]
		this.ptr = memory.allocate(9bytes = 9 boxes);
			memory address = 25
			         n = 0 (25)  1 (26)  2 (27)
		(1)[ptr] => [{data}, {data}, {ptr}, {empty box}, {empty box}, {empty box}, {empty box}, {empty box}, {empty box}][block][block] capacity = 9bytes; this.length = 2bytes;
		(2) [block] => [{data}, {data1}, {data2}, {data2}, {data2}, {data2}, {data2}, {data2}, {ptr}] capacity = 9bytes; length = 8bytes;
		(3) => [8bytes of data; 25 empty bytes]
				(allocate) => [this array Oldptr (capacity 9 bytes)][array][array]this.ptr allocate[size (capacity 33bytes)]
										0 - 8								9-12  13-15    16-49
 				(copy) => [this block OldPtr][block][block][this block copy (capacity 33bytes) this.ptr]
				(free) => [free memory][block][block][resized block this.ptr]
		 */
		
// Retrieving values from arrays is very straightforward. You saw when pushing how you can find the correct memory address by simply adding the index to the start position, so retrieval is a simple as this:

Array.prototype.get = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
};

// To pop a value from the end of an array is similarly simple. Rather than resize the array, you just leave an extra space which will be filled at the next push:

Array.prototype.pop = function() {
    if (this.length == 0) {
        throw new Error('Index error');
    }
    // this.ptr + this.length - 1 ---> 
    // pointer is pointing at memory address at the start of the block that you want to pop the data
    // length - 1 is representation of last box containing data within the block
    var value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
};

// What about if you want to insert a value into any point in an array, not just the middle? To do this, you need to shift all of the values after the new value back one position. Then you put the new value in its correct place.

Array.prototype.insert = function(index, value) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
        this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
};


// Removing values is very similar to inserting values, except that you are copying the values backwards to fill the space where you removed the value rather than forwards to make space for a new value:

Array.prototype.remove = function(index) {
    if (index < 0 || index >= this.length) {
        throw new Error('Index error');
    }

    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
};
