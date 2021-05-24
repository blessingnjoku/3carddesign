var tasks = [{
        task: 'reading',
        status: 'in progress'
    }; {
        task: 'reading',
        status: 'not started'
    }

]


// add a new task

var newTask = { task: 'typing', status: 'inprogress', time: '6' }
task.push(newTask);

// update
task[0].status = 'done';

// delate
// delete tasks[0]
task.splice[0, 2]