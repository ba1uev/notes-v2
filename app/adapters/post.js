import ApplicationAdapter from './application';

var ls = localStorage;

function getPost(i){
  if (ls['t_'+i]) {
    return {
      id: i,
      title: ls['t_'+i],
      body: ls['b_'+i]
    }
  } else {
    return false
  }
}

export default ApplicationAdapter.extend({
  findAll() {
    var i = 1;
    let result = [];
    while (getPost(i)) {
      result.push(getPost(i))
      ++i;
    }
    return result
  }
});
