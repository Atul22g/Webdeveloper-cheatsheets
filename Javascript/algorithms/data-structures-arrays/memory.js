// The word's worst allocator
var memory = new Float64Array(1024);
var head = 0;

var allocate = function(size) {
    if (head + size > memory.length) {
        return null;
    }
    var start = head;
    head += size;
    return start;
};

var free = function(ptr) {
};

var copy = function(to, from, size) {
    if (from === to) {
        return;
    }
    else if (from > to) {
        // Iterate forwards
        for (var i=0; i<size; i++) {
            set(to + i, get(from + i));
        }
    }
    else {
        // Iterate backwards
        for (var i=size - 1; i>=0; i--) {
            set(to + i, get(from + i));
        }
    }
};

var get = function(ptr) {
    return memory[ptr];
};

var set = function(ptr, value) {
    memory[ptr] = value;
};

exports.allocate = allocate;
exports.free = free;
exports.copy = copy;
exports.get = get;
exports.set = set;