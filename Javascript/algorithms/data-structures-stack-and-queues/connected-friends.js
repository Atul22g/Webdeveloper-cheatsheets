/**
 # Connected Friends

You work for a massive social network with many millions of users. You need to determine if two given users of the network are connected to each other.

Users of the social network may "follow" each other, but the relationship may not be mutual. That is, person A may follow person B but person B may not necessarily follow person A.

Consider the diagrammatic representation of a part of the network below:

- A follows B and C
- B follows D and D follows B
- Both E and B follow F
- F does not follow anyone
- A has no followers

The objective is to search for a path from any given user to any other user. For example, there is a path from `B` to `E`. That path is `B -> D -> C -> E`. But there is no path from `E` to `A`.

Internally, this network of users and their connections may be represented as an object where the keys are the user's identity and the values are an array of users that they follow. The above network may be represented as follows:

```json
{
  "A": ["B", "C"],
  "B": ["F", "D"],
  "C": ["E"],
  "D": ["C", "B"],
  "E": ["D", "F"],
  "F": []
}
```

Write a function that accepts a network object `graph` and two users `startUser` and `endUser` and returns `true` if there is a path from `startUser` to `endUser`, false otherwise.

 */

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.first) {
            this.last.next = newNode;
        } else {
            // Set the node of the queue's next to be the new node
            this.first = newNode;
        }

        //make the new node the last item on the queue
        this.last = newNode;
    }

    dequeue() {
        if (this.first) {
            const dequeued = this.first;
            this.first = dequeued.next;

            if (dequeued === this.last) {
                this.last = null;
            }

            return dequeued.value;
        }
    }
}

const connected = (graph, startUser, endUser) => {
    const users = Object.keys(graph);

    if (users.length === 0) {
        return false;
    }

    if (startUser === endUser) {
        return true;
    }

    const discovered = new Queue();

    discovered.enqueue(startUser);
    const enqueued = [startUser];

    while (discovered.first) {
        const user = discovered.dequeue();

        const following = graph[user];

        for (const followedUser of following) {
            if (followedUser === endUser) {
                return true;
            }

            if (!enqueued.includes(followedUser)) {
                enqueued.push(followedUser);
                discovered.enqueue(followedUser);
            }
        }
    }

    return false;
};

const graph = {
    A: ["B", "C"],
    B: ["F", "D"],
    C: ["E"],
    D: ["C", "B"],
    E: ["D", "F"],
    F: [],
};

connected(graph, "A", "F"); //should return true for empty graph
connected({}, "A", "B"); //should return false for empty graph
connected(graph, "A", "A"); //should return true for same start and end user
connected(graph, "A", "B"); //should return true for direct connection
connected(graph, "B", "A"); //should return false for reverse connection
connected(graph, "B", "E"); //should return true for multi-step connection