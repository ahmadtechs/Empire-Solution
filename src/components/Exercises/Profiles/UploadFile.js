import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios, { post } from 'axios';
import '../../../assets/UploadFile.css'

class UploadFile extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: ''
        }
    }

    handleChange = (e) =>{
    let files = e.target.files;
// creating the file reader object for storage
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
     
    reader.onload = (e) => {
        console.warn(e.target.result);
    }
    const url = axios('https://via.placeholder.com/600/92c952')
        .then(response => {
            this.setState({
                image : response 
            });
        })
    }

    render() {
    return (
    <div className="profiles">
    <div className="uploadWrapper">
    <input type="file" id="myuniqueid" />
    <IconButton className="iconsbtn">
    <label for="myuniqueid">
     Upload!
    </label>
    </IconButton>
    </div>
    </div>
    )
    }
}
export default UploadFile;