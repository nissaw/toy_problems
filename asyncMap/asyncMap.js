'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


function asyncMap(tasks, cb){
  const TOTAL = tasks.length;
  let taskResults = [];
  let completed = 0;
// with IFFE to preserve value of i during callback
  for (var i = 0; i < tasks.length; i++ ){
    (function(i){
      tasks[i](function(val){
        // this cb is invoked only when setTimeout delay is fulfilled
      //whatever cb is invoked with at calltime gets set in taskResults
        taskResults[i] = val;
        // when the final cb is invoked
        if (++completed === TOTAL){
          cb(taskResults);
        }
      })
    }(i))
  }
};

// with let
var asyncMap = function(tasks, callback){
  const TOTAL = tasks.length;
  let taskResults = [];
  let completed = 0;

  for (let i = 0; i < tasks.length; i++){
    tasks[i](function(val){
      results[i] = val;
      if (++completed === TOTAL){
        callback(results);
      }
    })
  }
};


// with forEach to preseve i
var asyncMap = function(tasks, callback){
  const TOTAL = tasks.length;
  let taskResults = [];
  let completed = 0;

  tasks.forEach((task, index) => {
    task((val) => {
      taskResults[index] = val;
      if(++completed === TOTAL){
        callback(taskResults);
      }
    });
  });
};
