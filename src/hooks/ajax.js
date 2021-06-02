import axios from 'axios';

const useAjax = () => {
    const api = "https://api-js401.herokuapp.com/api/v1/todo";

    const getResults = (callback) => {
        axios.get(api).then(response => {
            const dataArray = response.data.results;
            callback(dataArray);
        })
    }

    const postResult = (data, callback) => {
        axios({
            method: 'post',
            url: api,
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data)
        }).then(response => {
            const newItem = response.data;
            callback(newItem);
        }).catch(err => console.log(err))
    }

    const updateResult = (id, data, callback) => {
        axios({
            method: 'put',
            url: `${api}/${id}`,
            data: data
        }).then(response => {
            const updatedItem = response.data;
            callback(updatedItem);
        }).catch(err => console.log(err));
    }

    const deleteResult = (id, callback) => {
        axios({
            method: 'delete',
            url: `${api}/${id}`
        }).then(response => {
            callback();
        }).catch(err => console.log(err));
    }


    return [
        getResults,
        postResult,
        updateResult,
        deleteResult,
    ]
}

export default useAjax;