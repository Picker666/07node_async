var async = require('async');

function one (done) {
    var i = 0;
    setInterval (function () {
        console.log('aaa=' + new Date());
        i++
        if (i===3) {
            clearInterval(this);
            done(null, 'this is first...');
        }
    }, 1000);
};
function two (done) {
    var i = 0;
    setInterval (function () {
        console.log('bbb=' + new Date());
        i++
        if (i===3) {
            clearInterval(this);
            done(44, 'this is second...')
        }
    }, 1000);
}

function three (preValue, done) {
    console.log('==============='+preValue);
    two(done);
}

function callback (err, rs) {
    console.log(err);
    console.log(rs);
}
/**
 * 串行无关联
 */
// async.series({one,two}, callback);

/**
 * 并行无关联
 */
// async.parallel({one,two}, callback);

/**
 * 串行有关联
 */
async.waterfall([one,three], callback);
