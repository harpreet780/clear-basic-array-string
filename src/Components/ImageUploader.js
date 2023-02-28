import React, { useState, useEffect } from "react";
import { Progress } from 'reactstrap';

const ImageUploader = () => {
    const [pictureFile, setPictureFile] = useState(null);
    const [percent, setPercent] = useState(0);
    const [imageLoad, setImageLoad] = useState(false);

    const onChangePicture = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setImageLoad(true);
        const promise = new Promise((resolve, reject) => {
            if (resolve) {
                setTimeout(() => {
                    setPictureFile(imageUrl);
                    setImageLoad(false)
                }, 5000);
                console.log('resolve')
            }
            else {
                reject(Error('Error'));
            }
        });

        promise.then((res) => console.log(res), (err) => alert(err));

    }

    useEffect(() => {
        if (imageLoad) {
            setTimeout(() => {
                setPercent(percent + 25);
            }, 1000)
        }
    }, [percent, imageLoad])

    return (
        <div>
            <label>Image</label>
            <div className="selectFile">
                <input
                    type='file'
                    name="picture"
                    accept="image/*"
                    onChange={onChangePicture}
                    className="uploadFile"
                />
                <img src={pictureFile} className="ImgBox" />
            </div>
            {imageLoad ?
                <div className="progress-wrapper">
                    <div className="text-center">{percent}%</div>
                    <Progress value={percent} color="info" />
                </div>
                : null}
        </div>
    );
};

export default ImageUploader;
