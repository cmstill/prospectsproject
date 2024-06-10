export default {
	WRS_COLLECTION: 'wrs',
	DEFAULT_PROJECTION: {
		_id: 0,
	}

}



// putting things like strings I'm going to use more than one time here.  Like the names of collections I'm going to pass into .collection() method when accessing my Db for CRUD -- and then I export them to my model and call them as needed