/*
When creating plain typescript files, prefer the extension of .ts
If developing a React component, use the .tsx extension.
 */

/**
 * This function performs a specific operation on the given input.
 * It takes in a parameter and returns a result.
 * 
 * @param input - The input value to be processed.
 * @returns The result of the operation.
 */
function performOperation(input: any): any {
    // Code logic goes here
}


/*
You can create class based or function based components in React.
Nowadays, function based components are more popular.
Class based components are used when you need to use lifecycle methods or state.
 */

function MessageFunction() {
    const name = 'Utku';
    // below is a JSX code. Javascript XML, no need for quotes.
    if (name)
        return <h1>Hello {name}</h1>;
    
    return <h1>Hello Stranger</h1>;
}

// Export the component as a default object to be used in other files.
export default MessageFunction;