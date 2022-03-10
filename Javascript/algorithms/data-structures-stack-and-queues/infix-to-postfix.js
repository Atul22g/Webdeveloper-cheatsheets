/*
# Infix to Postfix

An arithmetic expression is said to be in **infix** notation when it takes the form:

```
operand1 operator operand2
```

For example, the expressions `1 + 2` and `3 * 5` are infix expressions.

Sometimes, to avoid ambiguities with the precedence of operators, parentheses are used. The following are all valid infix expressions:

```
(2 + 3) * 4
(2 + (4 - 5) * 3)
8 / (6 + 2)
```

Parsing and evaluating expressions in this form is particularly slow. Your compiler would typically convert arithmetic expressions from infix notation to **postfix** notation.

An arithmetic expression is said to be in **postfix notation** when it takes the form:

```
operand1 operand2 operator
```

For example, the infix expression `2 + 3` may be written as `2 3 +` in postfix notation.

The following are all valid postfix forms or the expressions above:

```
2 3 + 4 *
2 4 5 - 3 * +
8 6 2 + /
```

Write an algorithm that will take an arithmetic expression in infix form as a string and return the expression in postfix form.

- Assume that the four operators: `+`, `-`, `/` and `*` are the only ones used.
- The precedence of the operators are `*` and `/` has the highest precedence followed by `+` and `-`.
- You may also assume that the operands provided would all be single digits.
- Assume that all expressions provided are valid arithmetic expressions (no need to validate them)

*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        this.top = new Node(value, this.top);
        return this;
    }

    pop() {
        const popped = this.top;
        this.top = popped.next;
        return popped.value;
    }
}


/*
1. Declare a variable named `result` and initialize it to the empty string
1. Iterate through each character in the expression ignoring spaces
   1. If the current character is an operand, add it to the `result`
   1. otherwise if it is an operator
      1. Look at the operator at the top of the stack
      1. If the current operator has higher precedence than the operator on the top of the stack or if the stack is empty or the top of the stack is ‘(‘ then push the current operator unto the stack
      1. otherwise, start popping operators off the stack until either you find an operator that is not higher or equal precedence to the current operator, or if you find a parenthesis. Each operator that is popped from the stack is added to the `result`. Push the current operator unto the stack.
   1. Otherwise if the current character is ‘(‘, push it unto the stack.
   1. Otherwise if the current character is ‘)’ then, start popping characters off the stack and add each character to the `result` until you find a ‘(‘. Do not put the parentheses on the `result`.
1. Pop any remaining operators from the stack and place them on the `result`
1. Return the `result`
*/


const precedence = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
};

const postfix = (expression) => {

    const stack = new Stack();
    const result = [];

    expression = expression.replace(/\s/g, "");

    expression.split("").forEach((character) => {
        if (character === "(") {
            stack.push(character);
        } else {
            if (character === ")") {
                let top = stack.pop();
                while (top !== "(") {
                    result.push(top);
                    top = stack.pop();
                }
            } else {
                if ("+-*/".includes(character)) {
                    if (
                        !stack.top ||
                        stack.top.value === "(" ||
                        precedence[character] > precedence[stack.top.value]
                    ) {
                        stack.push(character);
                    } else {
                        while (stack.top && precedence[stack.top.value] >= precedence[character]) {
                            result.push(stack.pop());
                        }

                        stack.push(character);
                    }
                } else {
                    result.push(character);
                }
            }
        }
    });

    while (stack.top) {
        result.push(stack.pop());
    }

    return result.join(" ");
};

postfix("") //should return empty string for empty string
postfix("a + b") //should transform simple expressions
postfix("a + b - c") //should transform equal precedence operators correctly
postfix("a + b * c") //should transform unequal precedence operators correctly
postfix("(a + b)") //should remove parentheses
postfix("(a + b) * c") //should interpret parentheses correctly
postfix("(((a + b) * (c - d))/(a - b) + (c / d))") //should handle complex expressions