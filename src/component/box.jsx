import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state= {
            uploadfile: [],
            imagePreview: []
        }
        this.fileUpload1 = React.createRef();
        this.fileUpload2 = React.createRef();
        this.fileUpload3 = React.createRef();
        this.fileUpload4 = React.createRef();
        this.fileUpload5 = React.createRef();
        this.fileUpload6 = React.createRef();
    }

    handleOnchange(event) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                this.setState({
                    uploadfile: [...this.state.uploadfile, file],
                    imagePreview: [...this.state.imagePreview, reader.result]
                });
            }
        }
    }

    showFileUpload(fileUpload) {
        this[fileUpload].current.click();
    }

    deleteFileUpload(fileData, imageData) {
        this.setState({
            uploadfile: this.state.uploadfile.filter(eachValue => eachValue !== fileData),
            imagePreview: this.state.imagePreview.filter(eachValue => eachValue !== imageData)
        });
    }

    render() {
        const { imagePreview, uploadfile } = this.state;
        return (
            <div className="box">
                <header className="box-header">
                    <h2>CodeBlock</h2>
                </header>
                <div className="box-container">
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload1')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload1}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[0]) &&
                                <img src={imagePreview[0]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[0]) &&
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[0], imagePreview[0])}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload2')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload2}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[1]) &&
                                <img src={imagePreview[1]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[1]) &&
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[1], imagePreview[1])}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload3')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload3}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[2]) &&
                                <img src={imagePreview[2]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[2]) && 
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[2], imagePreview[2])}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload4')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload4}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[3]) &&
                                <img src={imagePreview[3]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[3]) &&
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[3], imagePreview[3])}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload5')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload5}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[4]) &&
                                <img src={imagePreview[4]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[4]) && 
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[4], imagePreview[4])}>Delete</button>
                            }
                        </div>
                    </div>
                    <div className="box-list">
                        <div className="box-list-items" onClick={()=> this.showFileUpload('fileUpload6')}>
                            <input
                                type="file"
                                id="my_file"
                                style={{ display: "none" }}
                                ref={this.fileUpload6}
                                onChange={(event)=> this.handleOnchange(event)}
                                accept="image/*"
                            />
                            {(imagePreview && imagePreview[5]) &&
                                <img src={imagePreview[5]} alt="avatar" style={{ width: '100px', height: '100px' }}/>
                            }
                        </div>
                        <div className="remove-box">
                            {(uploadfile && imagePreview && imagePreview[5]) &&
                                <button type="button" className="delete-btn" onClick={()=> this.deleteFileUpload(uploadfile[5], imagePreview[5])}>Delete</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}