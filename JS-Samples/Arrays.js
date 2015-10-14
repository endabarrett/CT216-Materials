// Export a number of functions
module.exports.func1 = function1;
module.exports.func2 = function2;
module.exports.func3 = function3;


// Arrays example

// Define the array
var array = [];

var counter = 0;

function function1()
{
    console.log("Function 1 is called");
    var obj = {};
    obj.counter = counter;
    obj.name = "func 1";
    array.push(obj);
    counter++;
    console.log("array length", array.length);    
}

function function2(info)
{
    console.log("Function 2 is called", info);
    var obj = {};
    obj.counter = counter;
    obj.name = "func 2";
    array.push(obj);
    counter++;
    console.log("array length", array.length);    
}

function function3()
{
    console.log("Function 3 is called");
    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
    
    // iterate
    console.log('...');
    for(var j in array)
    {
        console.log(array[j]);
    }
}

