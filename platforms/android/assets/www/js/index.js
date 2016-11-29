/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        // ...

        /* 1) Add a click handler for your button */
        document.getElementById('launch-editor').addEventListener('click', this.launchEditor, false);
        document.getElementById('login').addEventListener('click', this.login, false);
        document.getElementById('logout').addEventListener('click', this.logout, false);
        document.getElementById('launch-browser').addEventListener('click', this.launchBrowser, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        // ...
    },

    /* 2) Make a helper function to launch the Image Editor */
    launchEditor: function() {

        /* 2.a) Prep work for calling `.edit()` */
        function success(newUrl) {
            console.log("Success!", newUrl);
        }

        function error(error) {
            console.log("Error!", error);
        }

        var imageUrl = "http://i1.wp.com/ashryanbeats.com/wp-content/uploads/2015/10/image1.jpeg";

        var options = {
            outputType: CSDKImageEditor.OutputType.JPEG,
            tools: [
                CSDKImageEditor.ToolType.EFFECTS,
                CSDKImageEditor.ToolType.CROP
            ],
            quality: 50
        };

        /* 2.b) Launch the Image Editor */
        CSDKImageEditor.edit(success, error, imageUrl, options);
    },

    /* 2) Make a helper function to log in to Creative Cloud */
    login: function() {

        /* 2.a) Prep work for calling `.login()` */
        function success(userObject) {
            console.log("Login Success!", userObject);
        }

        function error(error) {
            console.log("Error!", error);
        }

        /* 2.b) Launch User Auth UI */
        CSDKUserAuth.login(success, error);
    },


    /* 3) Make a helper function to log out from Creative Cloud */
    logout: function() {

        /* 3.a) Prep work for calling `.logout()` */
        function success() {
            console.log("Logout Success!");
        }

        function error(error) {
            console.log("Error!", error);
        }

        /* 3.b) Log out user */
        CSDKUserAuth.logout(success, error);
    },

        /* 2) Make a helper function to launch the Asset Browser */
    launchBrowser: function() {

        /* 2.a) Prep work for calling `.edit()` */
        function success(newUrl) {
            console.log("Success!", newUrl);
        }

        function error(error) {
            console.log("Error!", error);
        }

        var options = {};

        /* 2.b) Launch the Asset Browser */
        CSDKAssetBrowser.downloadFiles(success, error, options);
    }
};