let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let arr = [];
let img = new Image();
img.crossOrigin = '';


async function getBase64(urlList) {
    // console.log('urlList',urlList)
    if (urlList && urlList.length > 0) {
        // len = urlList.length;
        arr = urlList
        let arr2 = [];
        // console.log('arr',arr)
        // console.log('arr2',arr2)
        for (let item of arr) {
            let i;
            arr.filter((item2, index) => {
                if (item == item2) {
                    i = index
                }
            });
            arr2[i] = await new Promise((resolve, reject) => {
                img.src = arr[i]
                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    let dataURL = canvas.toDataURL();
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    resolve(dataURL)
                }
                img.onerror = function (err) {
                    alert('图片加载失败，请重新尝试')
                    reject({ errormsg: "img on error" })
                }
            })
        }
      return  Promise.all(arr2).then(res => {
            return res;
        }).catch(err => {
            return { errmsg: "img load err" }
        })
    };

};


export default getBase64

