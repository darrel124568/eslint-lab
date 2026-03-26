const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalize words", () => {
    test("capitalizeWords", () => {
    const input = "hello world"
    expect(capitalizeWords(input)).toBe("Hello World")
    })
    test("capitalizeWords", () => {
    const input = ""
    expect(capitalizeWords(input)).toBe("")
    })
    test("capitalizeWords", () => {
    const input = "hello"
    expect(capitalizeWords(input)).toBe("Hello")
    })
    test("capitalizeWords", () => {
    const input = "hello-world"
    expect(capitalizeWords(input)).toBe("Hello-World")
    })
})


describe("filter active users", () => {
    test("Normal string", () => {
    const users = [
        { name: "Alice", isActive: true },
        { name: "Bob", isActive: false }
    ]
    expect(filterActiveUsers(users)).toEqual([{name: "Alice", isActive: true}])
    }) 
     test("All false", () => {
    const users = [
        { name: "Alice", isActive: false },
        { name: "Bob", isActive: false }
    ]
    expect(filterActiveUsers(users)).toEqual([])
    })   
     test("empty array", () => {
    const users = []
    expect(filterActiveUsers(users)).toEqual([])
    })  
   
})
describe("log user actions", () => {
    test("generate valid strings using containment", () => {
    const result = logAction("login", "Alice");
    
    expect(result).toContain("User Alice");
    expect(result).toContain("performed login");
})
describe("logAction Edge Cases", () => {

    test("handles empty strings for both inputs", () => {
        const result = logAction("", "");
        // Depending on your logic, it might return "User  performed  at..." 
        // or a specific "Invalid input" message.
        expect(result).toContain("User");
        expect(result).toContain("performed");
    });

    test("handles missing (undefined) arguments", () => {
        const result = logAction();
        expect(result).toBeDefined();
        expect(typeof result).toBe("string");
    });

    test("handles null values as inputs", () => {
        const result = logAction(null, null);
        expect(result).toContain("null"); 
    });

    test("handles very long strings (stress test)", () => {
        const longName = "A".repeat(1000);
        const longAction = "B".repeat(1000);
        const result = logAction(longAction, longName);

        expect(result).toContain(longName);
        expect(result).toContain(longAction);
    });
});
})
