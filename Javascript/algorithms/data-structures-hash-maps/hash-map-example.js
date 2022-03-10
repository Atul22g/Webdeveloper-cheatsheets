/*
 =====================================================================
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above
 copyright notice, this list of conditions and the following
 disclaimer.
 2. Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.
 3. The name of the author may not be used to endorse or promote
 products derived from this software without specific prior
 written permission.
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS
 OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 @author Daniel Kwiecinski <daniel.kwiecinski@lambder.com>
 @copyright 2009 Daniel Kwiecinski.
 @end
 =====================================================================
 */
let HashMap = function () {
    this.initialize();
}

HashMap.prototype = {
    hashkey_prefix: "<#HashMapHashkeyPerfix>",
    hashcode_field: "<#HashMapHashcodeField>",
    hashmap_instance_id: 0,

    initialize: function () {
        this.backing_hash = {};
        this.code = 0;
        this.hashmap_instance_id += 1;
        this.instance_id = this.hashmap_instance_id;
    },

    hashcodeField: function () {
        return this.hashcode_field + this.instance_id;
    },
    /*
   maps value to key returning previous assocciation
   */
    put: function (key, value) {
        let prev;

        if (key && value) {
            let hashCode;
            if (typeof (key) === "number" || typeof (key) === "string") {
                hashCode = key;
            } else {
                hashCode = key[this.hashcodeField()];
            }
            if (hashCode) {
                prev = this.backing_hash[hashCode];
            } else {
                this.code += 1;
                hashCode = this.hashkey_prefix + this.code;
                key[this.hashcodeField()] = hashCode;
            }
            this.backing_hash[hashCode] = [key, value];
        }
        return prev === undefined ? undefined : prev[1];
    },
    /*
   returns value associated with given key
   */
    get: function (key) {
        let value;
        if (key) {
            let hashCode;
            if (typeof (key) === "number" || typeof (key) === "string") {
                hashCode = key;
            } else {
                hashCode = key[this.hashcodeField()];
            }
            if (hashCode) {
                value = this.backing_hash[hashCode];
            }
        }
        return value === undefined ? undefined : value[1];
    },
    /*
   deletes association by given key.
   Returns true if the assocciation existed, false otherwise
   */
    del: function (key) {
        let success = false;
        if (key) {
            let hashCode;
            if (typeof (key) === "number" || typeof (key) === "string") {
                hashCode = key;
            } else {
                hashCode = key[this.hashcodeField()];
            }
            if (hashCode) {
                let prev = this.backing_hash[hashCode];
                this.backing_hash[hashCode] = undefined;
                if (prev !== undefined) {
                    key[this.hashcodeField()] = undefined; //let's clean the key object
                    success = true;
                }
            }
        }
        return success;
    },
    /*
   iterate over key-value pairs passing them to provided callback
   the iteration process is interrupted when the callback returns false.
   the execution context of the callback is the value of the key-value pair
   @ returns the HashMap (so we can chain)                                                                  (
   */
    each: function (callback, args) {
        let key;
        for (key in this.backing_hash) {
            if (callback.call(this.backing_hash[key][1], this.backing_hash[key][0], this.backing_hash[key][1]) === false)
                break;
        }
        return this;
    },
    toString: function () {
        return "HashMapJS"
    }

}

//==== testing the hash map


// creation

let my_map = new HashMap();

// insertion

let a_key = {};
let a_value = {
    struct: "structA"
};
let b_key = {};
let b_value = {
    struct: "structB"
};
let c_key = {};
let c_value = {
    struct: "structC"
};

my_map.put(a_key, a_value);
my_map.put(b_key, b_value);
let prev_b = my_map.put(b_key, c_value);

// retrieval

if (my_map.get(a_key) !== a_value) {
    throw ("fail1")
}
if (my_map.get(b_key) !== c_value) {
    throw ("fail2")
}
if (prev_b !== b_value) {
    throw ("fail3")
}

// deletion

let a_existed = my_map.del(a_key);
let c_existed = my_map.del(c_key);
let a2_existed = my_map.del(a_key);

if (a_existed !== true) {
    throw ("fail4")
}
if (c_existed !== false) {
    throw ("fail5")
}
if (a2_existed !== false) {
    throw ("fail6")
}


// primitive types keys
let d_value = {
    struct: "structD"
};
my_map.put(1, d_value);

if (my_map.get(1) !== d_value) {
    throw ("fail7")
}
