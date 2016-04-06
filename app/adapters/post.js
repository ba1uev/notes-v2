import ApplicationAdapter from './application';

var ls = localStorage;

function getPost(id){
  if (ls['t_'+id]) {
    return {
      id: id,
      title: ls['t_'+id],
      body: ls['b_'+id]
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
  },

  findRecord(store, type, id) {
    return getPost(id)
  },

  // createRecord: function(store, type, snapshot) {
  //
  // }
});
