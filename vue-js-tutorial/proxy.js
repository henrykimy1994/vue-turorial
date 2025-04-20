/**
 * Proxy :
 * - an object that wraps another object 
 * - let's you intercept and customize operations performed on it
 * 
 * gatekeeper that sits in front of an object and can
 * - block access
 * - transform data
 * - add logging
 * - control behavior
 */

/**
 * Usefulness
 * - Debugging
 * - Validation
 * - Auto-calculated properties
 * - Reactive programming
 * - Virtual properties (lazy loading)
 */

/**
 * Basic Syntax
 * - const proxy = new Proxy(targetObject, handlerObject);
 * -- targetObject - the original object you want to wrap
 * -- handlerObject = an object with functions(traps) that define how operations should be intercepted
 */
window.onload = () => {
    {
        const target = { name: 'Henry' };
    
        const handler = {
            // trap - intercepts any property access
            // special trap method defined by the JS Proxy API Spec
            // correct signature - get(target, property, receiver)
            get(target, prop) { // must name this function as 'get'
                // target - original object
                // prop - the name of the property being accessed
                console.log(`Accessing ${prop}`);
                return target[prop]; // returns target['name']
            }
        }
    
        // proxy object that behaves just like target
        // with interception powers with 'jandler'
        const proxy = new Proxy(target, handler)
        
        // triggers the 'get' trap by reading a property on the proxy
        // proxy object just deledates access to the handler invisibly
        console.log(proxy.name);
    
        // handler has a get() trap 
        console.log(handler.get(target, 'name'));
    
        /**
         * proxy.name →
         * 1) handler.get(target, 'name') triggered
         * 2) logs "Accessing name"
         * 3) returns target['name'] → "Henry"
         * 4) console.log outputs: Henry
         */
    }
    console.log("");
    /**
     * Common Proxy Traps
     */
    {
        // 1. get
        const target = { name: 'Henry' };
        const proxy = new Proxy(target, {
            get(target, prop) {
                console.log(`Reading property: ${prop}`);
                return target[prop];
            }
        });
        console.log(proxy.name);
    }
    console.log("");
    {
        // 2. set
        const target = {};
        const proxy = new Proxy(target, {
            set(target, prop, value) {
                // for validation 
                if (prop === 'age' && value < 0 ) {
                    throw new Error('Age must be positive');
                }

                console.log(`setting ${prop} to ${value}`);
                target[prop] = value
                return true; // Must return true to indicate success
            }
        });

        proxy.age = 30;
        console.log(target.age);
    }
    console.log("");
    {
        // 3. has
        const target = { secret: 42 };
        
        const proxy = new Proxy(target, {
            has(target, prop) {
                if (prop === 'secret') return false; // hide it!
                return prop in target
            }
        })

        console.log('secret' in proxy);
        console.log('toString' in proxy);

        // 4. deleteProperty
        // 5. ownKeys
        // 6. apply
        // 7. construct
    }
}