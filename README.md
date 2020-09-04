## Description to Use

Easy app for upload images to [Frirebase Storage](https://firebase.google.com/) Service with [Express](https://www.npmjs.com/package/express), [Electron](https://www.npmjs.com/package/electron), [Nodemon](https://www.npmjs.com/package/nodemon) and [Listr](https://www.npmjs.com/package/listr).

**Features**

* Formats supported: gif | jpg | png | jpeg (You can edited on line 56 on [script.js](https://github.com/HeribertoKubuntu/firebase_storage_electron_app/blob/master/public/script.js))
* Drop and drag files
* Preview screen
* Easy execution
* Customizable

<hr>

Made With ❤️ by Heriberto Delgado

Feel free to use 🎉️.

## Credits

[Matt for design](https://codepen.io/uixmat/pen/yadZXv)

## Icon

![](public/app-icon/128.png)


## Know Issues

* Nothing

## How to install

* Download or copy the repository 

<code>$ git clone https://github.com/HeribertoKubuntu/firebase_storage_electron_app.git</code>

## How to start

###### First Step

* Edit [app.js](https://github.com/HeribertoKubuntu/firebase_storage_electron_app/blob/master/public/app.js) with your credentials of Firebase Project

```
    apiKey: "some_api_key_here",
    authDomain: "some_domain_here.firebaseapp.com",
    databaseURL: "https://some_url_here.firebaseio.com",
    projectId: "some_project_name",
    storageBucket: "some_bucket_here.appspot.com"
```

* Add Firebase storage rules:

```
 service firebase.storage {
   match /b/{bucket}/o {
     match /{allPaths=**} {
       allow read, write;
     }
   }
 }
```


###### Second Step

<code>$ npm i</code>

<code>$ npm start</code>

## Screenshot

Sucess event and Format not supported alert

![](public/app-icon/screenshot.gif)

### Feedback and Fixes

* If you notice something's missing feel free to make a pull request. 

* If you have no time to fix it please open an issue.

### Supporting and maintaining the project

help me maintain it and keep adding more improves, my daughter and I would be grateful 🎉️!!! 

**I Want Support** ❤️

<a href='https://www.paypal.me/heriberto1717'>
<img src='https://www.paypalobjects.com/en_US/MX/i/btn/btn_donateCC_LG.gif' alt='PayPal Me' width='140' />
</a>

### License

>The [MIT license](https://opensource.org/licenses/MIT) (MIT)
>
>Copyright (c) 2020 **Heriberto Delgado** <AbraHery@gmail.com>
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
