import React from "react";


export const TestIcon = () =>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-5.5 1h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm8.1-6a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="0-plus"></path>
    </svg>

export const CuIcons = {
    "address-book": {
        category: 'brand logo',
        name: 'address-book',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"></path>
            </svg>
        )
    },
    "bug": {
        category: 'brand logo',
        name: 'bug',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"></path>
            </svg>
        )
    },
    "desktop": {
        category: 'brand logo',
        name: 'desktop',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"></path>     </svg>
        )
    },
    "globe-alt": {
        category: 'brand logo',
        name: 'globe-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path>
            </svg>
        )
    },
    "calendar-days": {
        category: 'brand logo',
        name: 'calendar-days',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>
            </svg>
        )
    },
    "user": {
        category: 'brand logo',
        name: 'user',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
            </svg>
        )
    },
    "landmark": {
        category: 'brand logo',
        name: 'landmark',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"></path> </svg>
        )
    },
    "clipboard-list": {
        category: 'brand logo',
        name: 'clipboard-list',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                <path fill="currentColor" d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"></path>
            </svg>
        )
    },
    "mug-saucer": {
        category: 'brand logo',
        name: 'mug-saucer',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                <path fill="currentColor" d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
            </svg>
        )
    },
    "eye": {
        category: 'brand logo',
        name: 'eye',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
            </svg>
        )
    },
    "power-off": {
        category: 'brand logo',
        name: 'power-off',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path>
            </svg>
        )
    },
    "folder": {
        category: 'brand logo',
        name: 'folder',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"></path>
            </svg>
        )
    },
    "file-lines": {
        category: 'brand logo',
        name: 'file-lines',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
            </svg>
        )
    },
    "pizza-slice": {
        category: 'brand logo',
        name: 'file-lines',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
            </svg>
        )
    },
    "wifi": {
        category: 'brand logo',
        name: 'wifi',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                <path fill="currentColor" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
            </svg>
        )
    },
    "camera": {
        category: 'brand logo',
        name: 'wifi',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
            </svg>
        )
    },
    "comment": {
        category: 'brand logo',
        name: 'comment',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
            </svg>
        )
    },
    "envelope": {
        category: 'brand logo',
        name: 'comment',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
        )
    },
    "gift": {
        category: 'brand logo',
        name: 'gift',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"></path>
            </svg>
        )
    },
    "info": {
        category: 'brand logo',
        name: 'info',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"></path>
            </svg>
        )
    },
    "image": {
        category: 'brand logo',
        name: 'image',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} fill="currentColor" viewBox="0 0 512 512">
                <path fill="currentColor" d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path>
            </svg>
        )
    },
    "key": {
        category: 'brand logo',
        name: 'key',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path>
            </svg>
        )
    },
    "lock": {
        category: 'brand logo',
        name: 'lock',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
            </svg>
        )
    },
    "lightbulb": {
        category: 'brand logo',
        name: 'lightbulb',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 384 512">
                <path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path>
            </svg>
        )
    },
    "music": {
        category: 'brand logo',
        name: 'music',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"></path>
            </svg>
        )
    },
    "paperclip": {
        category: 'brand logo',
        name: 'paperclip',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"></path>
            </svg>
        )
    },
    "plus": {
        category: 'brand logo',
        name: 'plus',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
        )
    },
    "share-nodes": {
        category: 'brand logo',
        name: 'share-nodes',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"></path>
            </svg>
        )
    },
    "circle-user": {
        category: 'brand logo',
        name: 'circle-user',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
            </svg>
        )
    },
    "user-secret": {
        category: 'brand logo',
        name: 'user-secret',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"></path>
            </svg>
        )
    },
    "snowflake": {
        category: 'brand logo',
        name: 'snowflake',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"></path>
            </svg>
        )
    },
    "accessible-icon": {
        category: 'brand logo',
        name: 'accessible-icon',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"></path>
            </svg>
        )
    },
    "rectangle-ad": {
        category: 'brand logo',
        name: 'rectangle-ad',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 576 512">
                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM229.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L253.2 328H162.8l-5.4 10.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zM208 237.7L186.8 280h42.3L208 237.7zM392 256a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm24-43.9V184c0-13.3 10.7-24 24-24s24 10.7 24 24v96 48c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-9.4 4.5-19.9 7-31 7c-39.8 0-72-32.2-72-72s32.2-72 72-72c8.4 0 16.5 1.4 24 4.1z"></path>
            </svg>
        )
    },
    "address-card": {
        category: 'brand logo',
        name: 'address-card',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 576 512">
                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
            </svg>
        )
    },
    "circle-half-stroke": {
        category: 'brand logo',
        name: 'circle-half-stroke',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
            </svg>
        )
    },
    "hands-asl-interpreting": {
        category: 'brand logo',
        name: 'hands-asl-interpreting',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 640 512">
                <path fill="currentColor" d="M156.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L13.5 189.4C4.6 207.2 0 226.8 0 246.7V256c0 70.7 57.3 128 128 128h72 8v-.3c35.2-2.7 65.4-22.8 82.1-51.7c8.8-15.3 3.6-34.9-11.7-43.7s-34.9-3.6-43.7 11.7c-7 12-19.9 20-34.7 20c-22.1 0-40-17.9-40-40s17.9-40 40-40c14.8 0 27.7 8 34.7 20c8.8 15.3 28.4 20.5 43.7 11.7s20.5-28.4 11.7-43.7c-12.8-22.1-33.6-39.1-58.4-47.1l80.8-22c17-4.6 27.1-22.2 22.5-39.3s-22.2-27.1-39.3-22.5L194.9 124.6l81.6-68c13.6-11.3 15.4-31.5 4.1-45.1S249.1-3.9 235.5 7.4L133.6 92.3l23-46zM483.4 465.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l85.9-171.7c8.9-17.8 13.5-37.4 13.5-57.2V256c0-70.7-57.3-128-128-128H440h-8v.3c-35.2 2.7-65.4 22.8-82.1 51.7c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c7-12 19.9-20 34.7-20c22.1 0 40 17.9 40 40s-17.9 40-40 40c-14.8 0-27.7-8-34.7-20c-8.9-15.3-28.4-20.5-43.7-11.7s-20.5 28.4-11.7 43.7c12.8 22.1 33.6 39.1 58.4 47.1l-80.8 22c-17.1 4.7-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5l100.7-27.5-81.6 68c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1l101.9-84.9-23 46z"></path>
            </svg>
        )
    },
    "angular": {
        category: 'brand logo',
        name: 'angular',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path>
            </svg>
        )
    },
    "apple-whole": {
        category: 'brand logo',
        name: 'apple-whole',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16V32c0 44.2-35.8 80-80 80H224zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"></path>
            </svg>
        )
    },
    "box-archive": {
        category: 'brand logo',
        name: 'box-archive',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"></path>
            </svg>
        )
    },
    "archway": {
        category: 'brand logo',
        name: 'archway',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H96h64V352c0-53 43-96 96-96s96 43 96 96V480h64 64c17.7 0 32-14.3 32-32s-14.3-32-32-32V128H32V416z"></path>
            </svg>
        )
    },
    "ear-listen": {
        category: 'brand logo',
        name: 'ear-listen',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M398.3 3.4c-15.8-7.9-35-1.5-42.9 14.3c-7.9 15.8-1.5 34.9 14.2 42.9l.4 .2c.4 .2 1.1 .6 2.1 1.2c2 1.2 5 3 8.7 5.6c7.5 5.2 17.6 13.2 27.7 24.2C428.5 113.4 448 146 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32c0-66-28.5-113.4-56.5-143.7C441.6 33.2 427.7 22.2 417.3 15c-5.3-3.7-9.7-6.4-13-8.3c-1.6-1-3-1.7-4-2.2c-.5-.3-.9-.5-1.2-.7l-.4-.2-.2-.1-.1 0 0 0c0 0 0 0-14.3 28.6L398.3 3.4zM128.7 227.5c6.2-56 53.7-99.5 111.3-99.5c61.9 0 112 50.1 112 112c0 29.3-11.2 55.9-29.6 75.9c-17 18.4-34.4 45.1-34.4 78V400c0 26.5-21.5 48-48 48c-17.7 0-32 14.3-32 32s14.3 32 32 32c61.9 0 112-50.1 112-112v-6.1c0-9.8 5.4-21.7 17.4-34.7C398.3 327.9 416 286 416 240c0-97.2-78.8-176-176-176C149.4 64 74.8 132.5 65.1 220.5c-1.9 17.6 10.7 33.4 28.3 35.3s33.4-10.7 35.3-28.3zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0zM208 240c0-17.7 14.3-32 32-32s32 14.3 32 32c0 13.3 10.7 24 24 24s24-10.7 24-24c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 13.3 10.7 24 24 24s24-10.7 24-24z"></path>
            </svg>
        )
    },
    "at": {
        category: 'brand logo',
        name: 'at',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
            </svg>
        )
    },
    "book-atlas": {
        category: 'brand logo',
        name: 'book-atlas',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2 4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5 22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7 27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65.9zM368 192a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65.9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4 65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2 56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z"></path>
            </svg>
        )
    },
    "audio-description": {
        category: 'brand logo',
        name: 'audio-description',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 576 512">
                <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM213.5 173.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-9.4-18.9H150.9l-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3zm-.4 106.6L192 237.7l-21.1 42.2h42.2zM304 184c0-13.3 10.7-24 24-24h56c53 0 96 43 96 96s-43 96-96 96H328c-13.3 0-24-10.7-24-24V184zm48 24v96h32c26.5 0 48-21.5 48-48s-21.5-48-48-48H352z"></path>
            </svg>
        )
    },
    "baby": {
        category: 'brand logo',
        name: 'baby',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 448 512">
                <path fill="currentColor" d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"></path>
            </svg>
        )
    },
    "baby-carriage": {
        category: 'brand logo',
        name: 'baby-carriage',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '100%', height: '100%' }} viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 192H.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192zm128-32c0-35.3 28.7-64 64-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0v64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3s-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6s-51.9-23.8-72.7-41.6s-37.3-39-48.6-62.3S0 249.2 0 224l224 0 160 0V160zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm240 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"></path>
            </svg>
        )
    },
    "backward": {
        category: 'brand logo',
        name: 'backward',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"></path>
            </svg>
        )
    },
    "bacon": {
        category: 'brand logo',
        name: 'bacon',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4c-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7L37.9 435.2 9.4 406.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5C136.1 296.2 180.9 231 223.3 169.3l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9c33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1c27.5-24.3 63.4-45.2 117.3-60.6l0 0 .2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2c-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2C327.8 365.9 275.5 442 142.3 508.6c-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"></path>
            </svg>
        )
    },
    "scale-balanced": {
        category: 'brand logo',
        name: 'scale-balanced',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"></path>
            </svg>
        )
    },
    "scale-unbalanced": {
        category: 'brand logo',
        name: 'scale-unbalanced',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M522.1 62.4c16.8-5.6 25.8-23.7 20.2-40.5S518.6-3.9 501.9 1.6l-113 37.7C375 15.8 349.3 0 320 0c-44.2 0-80 35.8-80 80c0 3 .2 5.9 .5 8.8L117.9 129.6c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2V480c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V153.3c21-9.2 37.2-27 44.2-49l125.9-42zM439.6 288L512 163.8 584.4 288H439.6zM512 384c62.9 0 115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L536.1 109.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L392.7 273.1c-5.7 9.8-9.3 21.1-6.7 32.1C396.8 350 449.1 384 512 384zM129.2 291.8L201.6 416H56.7l72.4-124.2zM3.2 433.1C14 478 66.3 512 129.2 512s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L153.2 237.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L9.9 401.1c-5.7 9.8-9.3 21.1-6.7 32.1z"></path>
            </svg>
        )
    },
    "scale-unbalanced-flip": {
        category: 'brand logo',
        name: 'scale-unbalanced-flip',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L366.4 145.2c-4.5 3.2-9.3 5.9-14.4 8.2V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-21-9.2-37.2-27-44.2-49l-125.9-42zM200.4 288L128 163.8 55.6 288H200.4zM128 384C65.1 384 12.8 350 2 305.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C243.2 350 190.9 384 128 384zm382.8-92.2L438.4 416H583.3L510.8 291.8zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1z"></path>
            </svg>
        )
    },
    "ban": {
        category: 'brand logo',
        name: 'ban',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
            </svg>
        )
    },
    "barcode": {
        category: 'brand logo',
        name: 'barcode',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"></path>
            </svg>
        )
    },
    "baseball": {
        category: 'brand logo',
        name: 'baseball',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M62.7 223.4c-4.8 .4-9.7 .6-14.7 .6c-15.6 0-30.8-2-45.2-5.9C19.2 107.1 107.1 19.2 218.1 2.8C222 17.2 224 32.4 224 48c0 4.9-.2 9.8-.6 14.7c-.7 8.8 5.8 16.5 14.6 17.3s16.5-5.8 17.3-14.6c.5-5.7 .7-11.5 .7-17.3c0-16.5-1.9-32.6-5.6-47.9c1.8 0 3.7-.1 5.6-.1C397.4 0 512 114.6 512 256c0 1.9 0 3.7-.1 5.6c-15.4-3.6-31.4-5.6-47.9-5.6c-5.8 0-11.6 .2-17.3 .7c-8.8 .7-15.4 8.5-14.6 17.3s8.5 15.4 17.3 14.6c4.8-.4 9.7-.6 14.7-.6c15.6 0 30.8 2 45.2 5.9C492.8 404.9 404.9 492.8 293.9 509.2C290 494.8 288 479.6 288 464c0-4.9 .2-9.8 .6-14.7c.7-8.8-5.8-16.5-14.6-17.3s-16.5 5.8-17.3 14.6c-.5 5.7-.7 11.5-.7 17.3c0 16.5 1.9 32.6 5.6 47.9c-1.8 0-3.7 .1-5.6 .1C114.6 512 0 397.4 0 256c0-1.9 0-3.7 .1-5.6C15.4 254.1 31.5 256 48 256c5.8 0 11.6-.2 17.3-.7c8.8-.7 15.4-8.5 14.6-17.3s-8.5-15.4-17.3-14.6zM121.3 208c-8 3.7-11.6 13.2-7.9 21.2s13.2 11.6 21.2 7.9c45.2-20.8 81.7-57.2 102.5-102.5c3.7-8 .2-17.5-7.9-21.2s-17.5-.2-21.2 7.9c-17.6 38.3-48.5 69.2-86.7 86.7zm277.2 74.7c-3.7-8-13.2-11.6-21.2-7.9c-45.2 20.8-81.7 57.2-102.5 102.5c-3.7 8-.2 17.5 7.9 21.2s17.5 .2 21.2-7.9c17.6-38.3 48.5-69.2 86.7-86.7c8-3.7 11.6-13.2 7.9-21.2z"></path>
            </svg>
        )
    },
    "basketball": {
        category: 'brand logo',
        name: 'basketball',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"></path>
            </svg>
        )
    },
    "bath": {
        category: 'brand logo',
        name: 'bath',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"></path>
            </svg>
        )
    },
    "battery-empty": {
        category: 'brand logo',
        name: 'battery-empty',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M80 160c-8.8 0-16 7.2-16 16V336c0 8.8 7.2 16 16 16H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80zM0 176c0-44.2 35.8-80 80-80H464c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176z"></path>
            </svg>
        )
    },
    "battery-full": {
        category: 'brand logo',
        name: 'battery-full',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm368 96H96V320H448V192z"></path>
            </svg>
        )
    },
    "battery-half": {
        category: 'brand logo',
        name: 'battery-half',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm208 96H96V320H288V192z"></path>
            </svg>
        )
    },
    "battery-quarter": {
        category: 'brand logo',
        name: 'battery-quarter',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm112 96H96V320h96V192z"></path>
            </svg>
        )
    },
    "battery-three-quarters": {
        category: 'brand logo',
        name: 'battery-three-quarters',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16V336c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16H464zM80 96C35.8 96 0 131.8 0 176V336c0 44.2 35.8 80 80 80H464c44.2 0 80-35.8 80-80V320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32V176c0-44.2-35.8-80-80-80H80zm272 96H96V320H352V192z"></path>
            </svg>
        )
    },
    "bed": {
        category: 'brand logo',
        name: 'bed',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path>
            </svg>
        )
    },
    "bell": {
        category: 'brand logo',
        name: 'bed',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
            </svg>
        )
    },
    "bell-slash": {
        category: 'brand logo',
        name: 'bed',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-87.5-68.6c.5-1.7 .7-3.5 .7-5.4c0-27.6-11-54.1-30.5-73.7L512 320c-20.5-20.5-32-48.3-32-77.3V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM160 242.7c0 29-11.5 56.8-32 77.3l-1.5 1.5C107 341 96 367.5 96 395.2c0 11.5 9.3 20.8 20.8 20.8H406.2L160 222.1v20.7zM384 448H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
        )
    },
    "bezier-curve": {
        category: 'brand logo',
        name: 'bezier-curve',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M296 136V88h48v48H296zM288 32c-26.5 0-48 21.5-48 48v4H121.6C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36h66.9c-58.9 39.6-98.9 105-104 180H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-3.3c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1h64c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1H496c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48h-4.5c-5-75-45.1-140.4-104-180h66.9c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36H400V80c0-26.5-21.5-48-48-48H288zM88 376h48v48H88V376zm416 48V376h48v48H504z"></path>
            </svg>
        )
    },
    "bicycle": {
        category: 'brand logo',
        name: 'bicycle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"></path>
            </svg>
        )
    },
    "person-biking": {
        category: 'brand logo',
        name: 'person-biking',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
            </svg>
        )
    },
    "cake-candles": {
        category: 'brand logo',
        name: 'cake-candles',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"></path>
            </svg>
        )
    },
    "bitcoin": {
        category: 'brand logo',
        name: 'bitcoin',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
            </svg>
        )
    },
    "person-walking-with-cane": {
        category: 'brand logo',
        name: 'person-walking-with-cane',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8.4 32c-36.4 0-69.6 20.5-85.9 53.1L35.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L128 231.6v43.2c0 17 6.7 33.3 18.7 45.3L224 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V390.6c0-12.7-5.1-24.9-14.1-33.9L224 306.7V213.3l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8L268.8 166.4C250.7 142.2 222.2 128 192 128H167.6zM128.3 346.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zM450.8 505.1c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3c-5 3.8-10.5 6.4-16.2 7.9L450.8 505.1z"></path>
            </svg>
        )
    },
    "blog": {
        category: 'brand logo',
        name: 'blog',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"></path>
            </svg>
        )
    },
    "bluetooth": {
        category: 'brand logo',
        name: 'bluetooth',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z"></path>
            </svg>
        )
    },
    "bluetooth-b": {
        category: 'brand logo',
        name: 'bluetooth-b',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z"></path>
            </svg>
        )
    },
    "bone": {
        category: 'brand logo',
        name: 'bluetooth-b',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"></path>
            </svg>
        )
    },
    "book": {
        category: 'brand logo',
        name: 'book',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
            </svg>
        )
    },
    "bookmark": {
        category: 'brand logo',
        name: 'bookmark',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
            </svg>
        )
    },
    "bowling-ball": {
        category: 'brand logo',
        name: 'bowling-ball',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
                <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
            </svg>
        )
    },
}

export const Icons = {

    '0-plus': {
        category: 'user interface',
        name: '0-plus',
        tags: ['0-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24" >
                <path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-5.5 1h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm8.1-6a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="0-plus"></path>
            </svg>
        )
    },
    '10-plus': {
        category: 'user interface',
        name: '10-plus',
        tags: ['10-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-7 4v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm5 0v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm5.6 0a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Z" id="10-plus"></path></svg>
        )


    },
    '12-plus': {
        category: 'user interface',
        name: '12-plus',
        tags: ['12-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9a1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-4v-2a1 1 0 0 1 1-1h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm7-4h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="12-plus"></path></svg>
        )
    },
    '13-plus': {
        category: 'user interface',
        name: '13-plus',
        tags: ['13-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-7 4a1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.5a1 1 0 0 0 0 2h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="13-plus"></path></svg>
        )
    },
    '16-plus': {
        category: 'user interface',
        name: '16-plus',
        tags: ['16-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm3.6 4a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm4 2v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-2V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm4 4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2Z" id="16-plus"></path></svg>
        )
    },
    '17-plus': {
        category: 'user interface',
        name: '17-plus',
        tags: ['17-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M11 7v2a1 1 0 0 0 2 0V8h2.78L14 16.8a1 1 0 0 0 .8 1.2h.2a1 1 0 0 0 1-.8l2-10a1 1 0 0 0-.21-.83A1 1 0 0 0 17 6h-5a1 1 0 0 0-1 1Zm7-2h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="17-plus"></path></svg>
        )
    },
    '18-plus': {
        category: 'user interface',
        name: '18-plus',
        tags: ['18-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2ZM7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0Zm14.6 2a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM11 9v1a3 3 0 0 0 .78 2 3 3 0 0 0-.78 2v1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3Zm5 6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Zm0-6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Z" id="18-plus"></path></svg>
        )
    },
    '21-plus': {
        category: 'user interface',
        name: '21-plus',
        tags: ['21-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M17 18a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1Zm1-13h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm3.6 4a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9ZM10 13h1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H9v-2a1 1 0 0 1 1-1Z" id="21-plus"></path></svg>
        )
    },
    '3-plus': {
        category: 'user interface',
        name: '3-plus',
        tags: ['3-plus', 'add', 'create', 'new', 'plus', 'positive', 'sign', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-2.5 4a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H12a1 1 0 0 0 0 2h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2Zm6.1 0a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="3-plus"></path></svg>
        )
    },
    "adjust-alt": {
        category: 'user interface',
        name: 'adjust-alt',
        tags: ['adjust-alt', 'adjust', 'brightness', 'contrast', 'dark', 'light', 'settings', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2Zm-2.5 4a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H12a1 1 0 0 0 0 2h.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2Zm6.1 0a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9Z" id="3-plus"></path></svg>
        )
    },
    "adjust-circle": {
        category: 'user interface',
        name: 'adjust-circle',
        tags: ['adjust-circle', 'adjust', 'brightness', 'contrast', 'dark', 'light', 'settings', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 7A7.74 7.74 0 1 0 7 17 7.74 7.74 0 1 0 17 7Zm-1.6 1.6a6.12 6.12 0 0 1 .11 1.14 5.92 5.92 0 0 1-.16 1.34l-2.44-2.42a5.92 5.92 0 0 1 1.34-.16 6.12 6.12 0 0 1 1.14.11Zm-.94 4.4A6 6 0 0 1 13 14.46L9.54 11A6 6 0 0 1 11 9.54Zm-8 1.46a5.75 5.75 0 1 1 8-8h-.25a7.76 7.76 0 0 0-7.71 7.79c0 .08.01.17.01.25Zm2.1.89a6.12 6.12 0 0 1-.11-1.14 5.92 5.92 0 0 1 .16-1.34l2.43 2.43a5.92 5.92 0 0 1-1.34.16 6.12 6.12 0 0 1-1.09-.07ZM14.25 20a5.77 5.77 0 0 1-4.75-2.51h.25a7.76 7.76 0 0 0 7.75-7.74V9.5A5.75 5.75 0 0 1 14.25 20Z" id="adjust-circle"></path></svg>
        )
    },
    "adjust-half": {
        category: 'user interface',
        name: 'adjust-half',
        tags: ['adjust-half', 'adjust', 'brightness', 'contrast', 'dark', 'light', 'settings', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.83 7.32a10.11 10.11 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68ZM11 19.93a8 8 0 0 1 0-15.86Zm2-15.86a8.07 8.07 0 0 1 2.49.74L13 9.12Zm0 9 4.17-7.17a8.14 8.14 0 0 1 1.58 1.83L13 17.69Zm1.15 6.58L19.74 10a8.16 8.16 0 0 1 .26 2 8 8 0 0 1-5.85 7.7Z" id="adjust-half"></path></svg>
        )
    },
    "anchor": {
        category: 'user interface',
        name: 'anchor',
        tags: ['anchor', 'boat', 'dock', 'link', 'nautical', 'ocean', 'sea', 'ship', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-2a1 1 0 0 0 0 2h.91A6 6 0 0 1 13 19.91V11h1a1 1 0 0 0 0-2h-1V7.82a3 3 0 1 0-2 0V9h-1a1 1 0 0 0 0 2h1v8.91A6 6 0 0 1 6.09 15H7a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1 8 8 0 0 0 16 0 1 1 0 0 0-1-1Zm-7-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" id="anchor"></path></svg>
        )
    },
    "android-phone-slash": {
        category: 'user interface',
        name: 'android-phone-slash',
        tags: ['android-phone-slash', 'android', 'block', 'cell', 'device', 'mobile', 'phone', 'slash', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M11.29 17.71a1 1 0 0 0 1.42 0 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33 1 1 0 0 0-1.42 0 1.15 1.15 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33ZM8.66 4H16a1 1 0 0 1 1 1v7.34a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3H8.66a1 1 0 0 0 0 2Zm13.05 16.29-18-18a1 1 0 0 0-1.42 1.42L5 6.41V19a3 3 0 0 0 3 3h8a3 3 0 0 0 2.76-1.83l1.53 1.54a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM17 19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8.41l10 10Z" id="android-phone-slash"></path></svg>
        )
    },
    "ankh": {
        category: 'user interface',
        name: 'ankh',
        tags: ['ankh', 'ancient', 'egypt', 'life', 'pharaoh', 'symbol', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18 12h-3.09A7.23 7.23 0 0 0 17 7 5 5 0 0 0 7 7a7.23 7.23 0 0 0 2.09 5H6a1 1 0 0 0 0 2h5v7a1 1 0 0 0 2 0v-7h5a1 1 0 0 0 0-2Zm-6-.16c-.93-.62-3-2.26-3-4.84a3 3 0 0 1 6 0c0 2.58-2.07 4.23-3 4.84Z" id="ankh"></path></svg>
        )
    },
    "archway": {
        category: 'user interface',
        name: 'archway',
        tags: ['archway', 'arc', 'architecture', 'building', 'door', 'entrance', 'gate', 'monument', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M22 20h-1V8h1a1 1 0 0 0 0-2h-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3H2a1 1 0 0 0 0 2h1v12H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2Zm-7 0H9v-3.53a6.21 6.21 0 0 1 3-5.33 6.21 6.21 0 0 1 3 5.33Zm4 0h-2v-3.53a8.17 8.17 0 0 0-4.55-7.36 1 1 0 0 0-.9 0A8.17 8.17 0 0 0 7 16.47V20H5V8h14Zm0-14H5V4h14Z" id="archway"></path></svg>
        )
    },
    "asterisk": {
        category: 'user interface',
        name: 'asterisk',
        tags: ['asterisk', 'asteroid', 'character', 'keyboard', 'star', 'symbol', 'type', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M18.562 14.634 14 12l4.562-2.634a1 1 0 0 0-1-1.732L13 10.268V5a1 1 0 0 0-2 0v5.268L6.438 7.634a1 1 0 0 0-1 1.732L10 12l-4.562 2.634a1 1 0 0 0 1 1.732L11 13.732V19a1 1 0 0 0 2 0v-5.268l4.562 2.634a1 1 0 0 0 1-1.732Z" id="asterisk"></path></svg>
        )
    },
    "at": {
        category: 'user interface',
        name: 'at',
        tags: ['at', 'address', 'at', 'character', 'email', 'symbol', 'type', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 5 18.66 1 1 0 1 0-1-1.73A8 8 0 1 1 20 12v.75a1.75 1.75 0 0 1-3.5 0V8.5a1 1 0 0 0-1-1 1 1 0 0 0-1 .79A4.45 4.45 0 0 0 12 7.5a4.5 4.5 0 1 0 3.3 7.5 3.74 3.74 0 0 0 6.7-2.25V12A10 10 0 0 0 12 2Zm0 12.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z" id="at"></path></svg>
        )
    },
    "auto-flash": {
        category: 'user interface',
        name: 'auto-flash',
        tags: ['auto-flash', 'auto', 'camera', 'flash', 'light', 'photo', 'photography', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.87 8.6A1 1 0 0 0 17 8h-4.58l1.27-4.74a1 1 0 0 0-.17-.87 1 1 0 0 0-.8-.39h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 1 1.26h3.85l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07Zm-9.79 8.68 1.08-4a1 1 0 0 0-.16-.89 1 1 0 0 0-.81-.39H4.35l2.14-8h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57ZM19 13h-1a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-2h3v2a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3Zm1 4h-3v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1Z" id="auto-flash"></path></svg>
        )
    },
    "baby-carriage": {
        category: 'user interface',
        name: 'baby-carriage',
        tags: ['baby-carriage', 'baby', 'carriage', 'child', 'infant', 'kid', 'newborn', 'stroller', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM9 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM22 8.5A6.51 6.51 0 0 0 15.5 2H15a1 1 0 0 0-1 1v5H7.52L6.27 4.65A1 1 0 0 0 5.33 4H3a1 1 0 0 0 0 2h1.64l1.25 3.37.51 1.37v.09A6.44 6.44 0 0 0 12.5 15h3A6.49 6.49 0 0 0 22 8.5Zm-3.32 3.18A4.47 4.47 0 0 1 15.5 13h-3a4.47 4.47 0 0 1-4.16-2.8.14.14 0 0 1 0-.06L8.26 10h11.48a4.32 4.32 0 0 1-1.06 1.68ZM16 8V4a4.49 4.49 0 0 1 4 4Z" id="baby-carriage"></path></svg>
        )
    },
    "backspace": {
        category: 'user interface',
        name: 'backspace',
        tags: ['backspace', 'back', 'delete', 'erase', 'remove', 'ui', 'user interface', 'x'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5H9.83a3 3 0 0 0-2.12.88l-5.42 5.41a1 1 0 0 0 0 1.42l5.42 5.41a3 3 0 0 0 2.12.88H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H9.83a1.05 1.05 0 0 1-.71-.29L4.41 12l4.71-4.71A1.05 1.05 0 0 1 9.83 7H19a1 1 0 0 1 1 1Zm-3.29-6.71a1 1 0 0 0-1.42 0L14 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L15.41 12l1.3-1.29a1 1 0 0 0 0-1.42Z" id="backspace"></path></svg>
        )
    },
    "bag-slash": {
        category: 'user interface',
        name: 'bag-slash',
        tags: ['bag-slash', 'bag', 'delete', 'erase', 'remove', 'shopping', 'ui', 'user interface', 'x'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6h-3V5a2 2 0 0 0-2-2h-4a1.86 1.86 0 0 0-.61.1 1 1 0 0 0-.64 1.27A1 1 0 0 0 10 5h4v1h-1.34a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v1.28l-2.57.86a1 1 0 0 0-.63 1.27 1 1 0 0 0 .95.68 1.19 1.19 0 0 0 .32-.05l1.93-.65v2.95a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3ZM3.71 2.29a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v9a3 3 0 0 0 3 3h14a3.07 3.07 0 0 0 .53-.06l.76.77a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM4 9a1 1 0 0 1 1-1h1.59l4 4H9.16L4 10.28Zm1 10a1 1 0 0 1-1-1v-5.61L8.68 14A1.19 1.19 0 0 0 9 14h3.59l5 5Z" id="bag-slash"></path></svg>
        )
    },
    "bath": {
        category: 'user interface',
        name: 'bath',
        tags: ['bath', 'bathroom', 'clean', 'hygiene', 'restroom', 'shower', 'tub', 'ui', 'user interface', 'wash'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759 1.995 1.995 0 0 1 1.148-.23 3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1 1 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 0 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2ZM9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353-2.121 2.121-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Z" id="bath"></path></svg>
        )
    },
    "battery-bolt": {
        category: 'user interface',
        name: 'battery-bolt',
        tags: ['battery-bolt', 'battery', 'bolt', 'charge', 'electricity', 'energy', 'lightning', 'power', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6.69 15H4V9h2.31a1 1 0 0 0 0-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.69a1 1 0 1 0 0-2Zm7.2-2.56a1.27 1.27 0 0 0 .06-.18 1.42 1.42 0 0 0 0-.2v-.18a.65.65 0 0 0-.05-.2.89.89 0 0 0-.08-.17.86.86 0 0 0-.1-.16l-.16-.13-.09-.09h-.06l-.18-.06h-3.5l1.45-2.5a1 1 0 1 0-1.74-1l-2.31 4v.06a1.27 1.27 0 0 0-.06.18 1.42 1.42 0 0 0 0 .2S7 12 7 12v.12a.65.65 0 0 0 .05.2.89.89 0 0 0 .08.17.86.86 0 0 0 .1.16l.16.13a.76.76 0 0 0 .09.09h.16A1 1 0 0 0 8 13h3.27l-1.45 2.5a1 1 0 0 0 1.74 1l2.31-4s.01-.04.02-.06ZM21 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-4-3h-2.69a1 1 0 0 0 0 2H17v6h-2.31a1 1 0 1 0 0 2H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" id="battery-bolt"></path></svg>
        )
    },
    "battery-empty": {
        category: 'user interface',
        name: 'battery-empty',
        tags: ['battery-empty', 'battery', 'charge', 'electricity', 'energy', 'power', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm0 8H4V9h13Zm4-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z" id="battery-empty"></path></svg>
        )
    },
    "bed": {
        category: 'user interface',
        name: 'bed',
        tags: ['bed', 'bedroom', 'furniture', 'home', 'house', 'rest', 'sleep', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 12.5a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm13-2h-8a1 1 0 0 0-1 1v6H3v-8a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-3h18v3a1 1 0 0 0 2 0v-9a3 3 0 0 0-3-3Zm1 7h-8v-5h7a1 1 0 0 1 1 1Z" id="bed"></path></svg>
        )
    },
    "bell": {
        category: 'user interface',
        name: 'bell',
        tags: ['bell', 'alarm', 'alert', 'bell', 'chime', 'notification', 'reminder', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18 13.18V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0H19a1 1 0 0 0 1-1v-2a3 3 0 0 0-2-2.82ZM8 10a4 4 0 0 1 8 0v3H8Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20Zm6-3H6v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" id="bell"></path></svg>
        )
    },
    "bell-slash": {
        category: 'user interface',
        name: 'bell-slash',
        tags: ['bell-slash', 'alarm', 'alert', 'bell', 'chime', 'delete', 'erase', 'notification', 'reminder', 'remove', 'ui', 'user interface', 'x'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.07 6.12A3.48 3.48 0 0 1 12 6a4 4 0 0 1 4 4v1.34a1 1 0 0 0 2 0V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.1l-.45.08a1 1 0 0 0 .52 1.94Zm10.64 14.17-18-18a1 1 0 0 0-1.42 1.42l4.12 4.11A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0h1.73l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM8 10a3.31 3.31 0 0 1 0-.55L11.59 13H8Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20Zm-6-3v-1a1 1 0 0 1 1-1h6.59l2 2Z" id="bell-slash"></path></svg>
        )
    },
    "bluetooth-b": {
        category: 'user interface',
        name: 'bluetooth-b',
        tags: ['bluetooth-b', 'bluetooth', 'connect', 'device', 'network', 'phone', 'ui', 'user interface', 'wireless'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24"><path d="m13.41 12 3.8-3.79a1 1 0 0 0 0-1.42l-4.5-4.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.54.54A1 1 0 0 0 11 3v6.59l-2.79-2.8a1 1 0 1 0-1.42 1.42l3.8 3.79-3.8 3.79a1 1 0 1 0 1.42 1.42l2.79-2.8V21a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4.5-4.5a1 1 0 0 0 0-1.42ZM13 5.41l2.09 2.09L13 9.59Zm0 13.18v-4.18l2.09 2.09Z" id="bluetooth-b"></path></svg>
        )
    },
    "bolt": {
        category: 'user interface',
        name: 'bolt',
        tags: ['bolt', 'bolt', 'electricity', 'energy', 'lightning', 'power', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .17.87 1 1 0 0 0 .8.39h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07Zm-9.79 8.68 1.07-4a1 1 0 0 0-.17-.87 1 1 0 0 0-.79-.39H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57Z" id="bolt"></path></svg>
        )
    },
    "bolt-alt": {
        category: 'user interface',
        name: 'bolt-alt',
        tags: ['bolt-alt', 'bolt', 'electricity', 'energy', 'lightning', 'power', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.89 9.55A1 1 0 0 0 19 9h-5V3a1 1 0 0 0-.69-1 1 1 0 0 0-1.12.36l-8 11a1 1 0 0 0-.08 1A1 1 0 0 0 5 15h5v6a1 1 0 0 0 .69.95A1.12 1.12 0 0 0 11 22a1 1 0 0 0 .81-.41l8-11a1 1 0 0 0 .08-1.04ZM12 17.92V14a1 1 0 0 0-1-1H7l5-6.92V10a1 1 0 0 0 1 1h4Z" id="bolt-alt"></path></svg>
        )
    },
    "bookmark": {
        category: 'user interface',
        name: 'bookmark',
        tags: ['bookmark', 'bookmark', 'favorite', 'save', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87 1 1 0 0 0 1 0l5.5-3.18 5.5 3.18a1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3Zm1 17.27-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z" id="bookmark"></path></svg>
        )
    },
    "bookmark-full": {
        category: 'user interface',
        name: 'bookmark-full',
        tags: ['bookmark-full', 'bookmark', 'favorite', 'save', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1.65.76L12 17.27l5.29 4.44A1 1 0 0 0 18 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 19 21V3a1 1 0 0 0-1-1Zm-1 16.86-4.36-3.66a1 1 0 0 0-1.28 0L7 18.86V4h10Z" id="bookmark-full"></path></svg>
        )
    },
    "box": {
        category: 'user interface',
        name: 'box',
        tags: ['box', 'box', 'container', 'package', 'parcel', 'storage', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.49 7.52a.19.19 0 0 1 0-.08.17.17 0 0 1 0-.07v-.09l-.06-.15a.48.48 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49-3.72-2.3a.85.85 0 0 0-.29-.15h-.08a.82.82 0 0 0-.27 0h-.1a1.13 1.13 0 0 0-.33.13L4 6.78l-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.69.69 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06L20 17.21a1 1 0 0 0 .47-.85V7.63s.02-.07.02-.11ZM12 4.17l1.78 1.1-5.59 3.46-1.79-1.1Zm-1 15-5.5-3.36V9.42l5.5 3.4Zm1-8.11-1.91-1.15 5.59-3.47 1.92 1.19Zm6.5 4.72L13 19.2v-6.38l5.5-3.4Z" id="box"></path></svg>
        )
    },
    "brightness": {
        category: 'user interface',
        name: 'brightness',
        tags: ['brightness', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm.64 5-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM12 5a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm5.66 2.34a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.66.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29Zm-12-.29a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.43 1.41ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-2.64 6A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Zm0 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z" id="brightness"></path></svg>
        )
    },
    "brightness-empty": {
        category: 'user interface',
        name: 'brightness-empty',
        tags: ['brightness-empty', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M21.71 11.29 19.36 9V5.64a1 1 0 0 0-1-1h-3.31l-2.34-2.35a1 1 0 0 0-1.42 0L9 4.64H5.64a1 1 0 0 0-1 1V9l-2.35 2.29a1 1 0 0 0 0 1.42l2.35 2.34v3.31a1 1 0 0 0 1 1H9l2.34 2.35a1 1 0 0 0 1.42 0l2.34-2.35h3.31a1 1 0 0 0 1-1v-3.31l2.35-2.34a1 1 0 0 0-.05-1.42Zm-4.05 2.64a1 1 0 0 0-.3.71v2.72h-2.72a1 1 0 0 0-.71.3L12 19.59l-1.93-1.93a1 1 0 0 0-.71-.3H6.64v-2.72a1 1 0 0 0-.3-.71L4.41 12l1.93-1.93a1 1 0 0 0 .3-.71V6.64h2.72a1 1 0 0 0 .71-.3L12 4.41l1.93 1.93a1 1 0 0 0 .71.3h2.72v2.72a1 1 0 0 0 .3.71L19.59 12Z" id="brightness-empty"></path></svg>
        )
    },
    "brightness-half": {
        category: 'user interface',
        name: 'brightness-half',
        tags: ['brightness-half', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a1 1 0 0 0 0 2 2 2 0 0 1 0 4 1 1 0 0 0 0 2 4 4 0 0 0 0-8Zm9.71 3.29L19.36 9V5.64a1 1 0 0 0-1-1h-3.31l-2.34-2.35a1 1 0 0 0-1.42 0L9 4.64H5.64a1 1 0 0 0-1 1V9l-2.35 2.29a1 1 0 0 0 0 1.42l2.35 2.34v3.31a1 1 0 0 0 1 1H9l2.34 2.35a1 1 0 0 0 1.42 0l2.34-2.35h3.31a1 1 0 0 0 1-1v-3.31l2.35-2.34a1 1 0 0 0-.05-1.42Zm-4.05 2.64a1 1 0 0 0-.3.71v2.72h-2.72a1 1 0 0 0-.71.3L12 19.59l-1.93-1.93a1 1 0 0 0-.71-.3H6.64v-2.72a1 1 0 0 0-.3-.71L4.41 12l1.93-1.93a1 1 0 0 0 .3-.71V6.64h2.72a1 1 0 0 0 .71-.3L12 4.41l1.93 1.93a1 1 0 0 0 .71.3h2.72v2.72a1 1 0 0 0 .3.71L19.59 12Z" id="brightness-half"></path></svg>
        )
    },
    "brightness-low": {
        category: 'user interface',
        name: 'brightness-low',
        tags: ['brightness-low', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm1.93 6.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0ZM6.34 6.34a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0ZM12 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm5.66 13.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0ZM21 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3.34-6.07a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0ZM12 20a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" id="brightness-low"></path></svg>
        )
    },
    "brightness-minus": {
        category: 'user interface',
        name: 'brightness-minus',
        tags: ['brightness-minus', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'minus', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M14 11h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm7.71.29L19.36 9V5.64a1 1 0 0 0-1-1h-3.31l-2.34-2.35a1 1 0 0 0-1.42 0L9 4.64H5.64a1 1 0 0 0-1 1V9l-2.35 2.29a1 1 0 0 0 0 1.42l2.35 2.34v3.31a1 1 0 0 0 1 1H9l2.34 2.35a1 1 0 0 0 1.42 0l2.34-2.35h3.31a1 1 0 0 0 1-1v-3.31l2.35-2.34a1 1 0 0 0-.05-1.42Zm-4.05 2.64a1 1 0 0 0-.3.71v2.72h-2.72a1 1 0 0 0-.71.3L12 19.59l-1.93-1.93a1 1 0 0 0-.71-.3H6.64v-2.72a1 1 0 0 0-.3-.71L4.41 12l1.93-1.93a1 1 0 0 0 .3-.71V6.64h2.72a1 1 0 0 0 .71-.3L12 4.41l1.93 1.93a1 1 0 0 0 .71.3h2.72v2.72a1 1 0 0 0 .3.71L19.59 12Z" id="brightness-minus"></path></svg>
        )
    },
    "brightness-plus": {
        category: 'user interface',
        name: 'brightness-plus',
        tags: ['brightness-plus', 'brightness', 'contrast', 'dark', 'light', 'lightness', 'plus', 'ui', 'user interface', 'add', 'increase', 'more'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm7.71.29L19.36 9V5.64a1 1 0 0 0-1-1h-3.31l-2.34-2.35a1 1 0 0 0-1.42 0L9 4.64H5.64a1 1 0 0 0-1 1V9l-2.35 2.29a1 1 0 0 0 0 1.42l2.35 2.34v3.31a1 1 0 0 0 1 1H9l2.34 2.35a1 1 0 0 0 1.42 0l2.34-2.35h3.31a1 1 0 0 0 1-1v-3.31l2.35-2.34a1 1 0 0 0-.05-1.42Zm-4.05 2.64a1 1 0 0 0-.3.71v2.72h-2.72a1 1 0 0 0-.71.3L12 19.59l-1.93-1.93a1 1 0 0 0-.71-.3H6.64v-2.72a1 1 0 0 0-.3-.71L4.41 12l1.93-1.93a1 1 0 0 0 .3-.71V6.64h2.72a1 1 0 0 0 .71-.3L12 4.41l1.93 1.93a1 1 0 0 0 .71.3h2.72v2.72a1 1 0 0 0 .3.71L19.59 12Z" id="brightness-plus"></path></svg>
        )
    },
    "building": {
        category: 'user interface',
        name: 'building',
        tags: ['building', 'building', 'business', 'company', 'office', 'organization', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM9 8h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Zm12 8h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-8 0h-2v-4h2Zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6V4h12Z" id="building"></path></svg>
        )
    },
    "bullseye": {
        category: 'user interface',
        name: 'bullseye',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-12a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9Z" id="bullseye"></path></svg>
        )
    },

    "calculator": {
        category: 'user interface',
        name: 'calculator',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12.71 17.29a1 1 0 0 0-.16-.12.56.56 0 0 0-.17-.09.6.6 0 0 0-.19-.06.93.93 0 0 0-.57.06.9.9 0 0 0-.54.54.84.84 0 0 0-.08.38 1 1 0 0 0 .07.38 1.46 1.46 0 0 0 .22.33A1 1 0 0 0 12 19a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 13 18a1 1 0 0 0-.08-.38 1 1 0 0 0-.21-.33Zm-4.16-4.12a.56.56 0 0 0-.17-.09.6.6 0 0 0-.19-.08.86.86 0 0 0-.39 0l-.18.06-.18.09-.15.12A1.05 1.05 0 0 0 7 14a1 1 0 0 0 .29.71 1.15 1.15 0 0 0 .33.21A1 1 0 0 0 9 14a1.05 1.05 0 0 0-.29-.71Zm.16 4.12a1 1 0 0 0-.33-.21A1 1 0 0 0 7.8 17l-.18.06a.76.76 0 0 0-.18.09 1.58 1.58 0 0 0-.15.12 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 8 19a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33Zm2.91-4.21a1 1 0 0 0-.33.21A1.05 1.05 0 0 0 11 14a1 1 0 0 0 1.38.92 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 13 14a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21Zm5.09 4.21a1.15 1.15 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 16 19a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33ZM16 5H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-1 4H9V7h6Zm3-8H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Zm1 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Zm-2.45-6.83a.56.56 0 0 0-.17-.09.6.6 0 0 0-.19-.06.86.86 0 0 0-.39 0l-.18.06-.18.09-.15.12A1.05 1.05 0 0 0 15 14a1 1 0 0 0 1.38.92 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 17 14a1.05 1.05 0 0 0-.29-.71Z" id="calculator"></path></svg>
        )
    },
    "calendar-slash": {
        category: 'user interface',
        name: 'calendar-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11.66 7H15v1a1 1 0 0 0 2 0V7h1a1 1 0 0 1 1 1v3h-1.34a1 1 0 0 0 0 2H19v1.34a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3h-1V4a1 1 0 0 0-2 0v1h-3.34a1 1 0 0 0 0 2Zm10.05 13.29-1.6-1.6-16.4-16.4a1 1 0 0 0-1.42 1.42l1.91 1.9A3 3 0 0 0 3 8v10a3 3 0 0 0 3 3h12a3 3 0 0 0 1.29-.3l1 1a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41ZM5 8a1 1 0 0 1 .66-.93L9.59 11H5Zm1 11a1 1 0 0 1-1-1v-5h6.59l6 6Z" id="calendar-slash"></path></svg>
        )
    },
    "ccalender": {
        category: 'user interface',
        name: 'calender',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" id="calender"></path></svg>
        )
    },
    "camera-slash": {
        category: 'user interface',
        name: 'camera-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M3.71 2.29a1 1 0 0 0-1.42 1.42l2.8 2.79H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14.08l1.21 1.22a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm6.49 9.33 2.68 2.68a2 2 0 0 1-.88.2 2 2 0 0 1-2-2 2 2 0 0 1 .2-.88ZM5 18.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2.07l1.7 1.69A3.92 3.92 0 0 0 8 12.5a4 4 0 0 0 4 4 3.92 3.92 0 0 0 2.32-.77l2.77 2.77Zm14-12h-1.28l-.31-1a3 3 0 0 0-2.85-2h-4.4a1 1 0 0 0 0 2h4.4a1 1 0 0 1 .95.68l.54 1.63a1 1 0 0 0 .95.69h2a1 1 0 0 1 1 1v5.84a1 1 0 1 0 2 0V9.5a3 3 0 0 0-3-3Z" id="camera-slash"></path></svg>
        )
    },
    "cancel": {
        category: 'user interface',
        name: 'cancel',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="m21.77 11.36-5-6A1 1 0 0 0 16 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h11a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.28ZM15.53 17H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10.53l4.17 5Zm-2.82-7.71a1 1 0 0 0-1.42 0L10 10.59l-1.29-1.3a1 1 0 1 0-1.42 1.42L8.59 12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L11.41 12l1.3-1.29a1 1 0 0 0 0-1.42Z" id="cancel"></path></svg>
        )
    },
    "car": {
        category: 'user interface',
        name: 'car',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 13.08a.9.9 0 0 0-.54.54 1 1 0 0 0 1.3 1.3 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33A.84.84 0 0 0 8 14a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21Zm13.14-4L18.4 5.05a3 3 0 0 0-2.84-2H8.44a3 3 0 0 0-2.84 2L4.24 9.11A3 3 0 0 0 2 12v4a3 3 0 0 0 2 2.82V20a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1.18A3 3 0 0 0 22 16v-4a3 3 0 0 0-2.24-2.89ZM7.49 5.68A1 1 0 0 1 8.44 5h7.12a1 1 0 0 1 1 .68L17.61 9H6.39ZM20 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-3.38-2.92a.9.9 0 0 0-.54.54 1 1 0 0 0 1.3 1.3.9.9 0 0 0 .54-.54A.84.84 0 0 0 18 14a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21ZM13 13h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" id="car"></path></svg>
        )
    },
    "car-slash": {
        category: 'user interface',
        name: 'car-slash.',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12.76-3.89-1.35-4.06a3 3 0 0 0-2.85-2h-5.9a1 1 0 0 0 0 2h5.9a1 1 0 0 1 1 .69L17.61 9h-1.95a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v3.34a1 1 0 1 0 2 0V12a3 3 0 0 0-2.24-2.89Zm-16-6.82a1 1 0 0 0-1.47 1.42l2.82 2.81-.87 2.59A3 3 0 0 0 2 12v4a3 3 0 0 0 2 2.82V20a1 1 0 0 0 2 0v-1h11.59l.41.41V20a1 1 0 0 0 1 1 .91.91 0 0 0 .46-.13l.83.84a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm3 5.81.9.9H6.39ZM5 17a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4.59l2 2H11a1 1 0 0 0 0 2h2a.91.91 0 0 0 .46-.13L15.59 17Z" id="car-slash"></path></svg>
        )
    },
    "card-atm": {
        category: 'user interface',
        name: 'card-atm',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4.5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-4-6a3 3 0 0 0-1.51.42 3 3 0 1 0 0 5.16A3 3 0 1 0 16 10.5Zm-2.83 4a1 1 0 0 1-.17 0 1 1 0 0 1 0-2 1 1 0 0 1 .17 0 2.8 2.8 0 0 0 0 1.92Zm2.83 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" id="card-atm"></path></svg>
        )
    },
    "check": {
        category: 'user interface',
        name: 'check',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" id="check"></path></svg>
        )
    },
    "check-circle": {
        category: 'user interface',
        name: 'check-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" id="check-circle"></path></svg>
        )
    },
    "check-square": {
        category: 'user interface',
        name: 'check-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10.21 14.75a1 1 0 0 0 1.42 0l4.08-4.08a1 1 0 0 0-1.42-1.42l-3.37 3.38-1.21-1.22a1 1 0 0 0-1.42 1.42ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H4V4h16Z" id="check-square"></path></svg>
        )
    },
    "coffee": {
        category: 'user interface',
        name: 'coffee',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9 17h4a5 5 0 0 0 5-5v-1h1a3 3 0 0 0 0-6h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5Zm9-10h1a1 1 0 0 1 0 2h-1ZM6 5h10v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Zm15 14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" id="coffee"></path></svg>
        )
    },
    "cog": {
        category: 'user interface',
        name: 'cog',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4ZM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" id="cog"></path></svg>
        )
    },
    "comment-alt-slash": {
        category: 'user interface',
        name: 'comment-alt-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10.66 6H17a1 1 0 0 1 1 1v6.34a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3h-6.34a1 1 0 0 0 0 2Zm11.05 14.29-18-18a1 1 0 0 0-1.42 1.42l2 2A3 3 0 0 0 4 7v12a1 1 0 0 0 .62.92A.84.84 0 0 0 5 20a1 1 0 0 0 .71-.29L8.41 17h7.18l4.7 4.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM8 15a1 1 0 0 0-.71.29L6 16.59V7.41L13.59 15Z" id="comment-alt-slash"></path></svg>
        )
    },
    "comment-slash": {
        category: 'user interface',
        name: 'comment-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10.19 5.23A7.12 7.12 0 0 1 12 5a7 7 0 0 1 7 7 7.12 7.12 0 0 1-.23 1.81 1 1 0 0 0 .7 1.23 1.15 1.15 0 0 0 .26 0 1 1 0 0 0 1-.74A8.91 8.91 0 0 0 21 12a9 9 0 0 0-9-9 8.91 8.91 0 0 0-2.33.3A1 1 0 0 0 9 4.53a1 1 0 0 0 1.19.7Zm11.52 15.06-18-18a1 1 0 0 0-1.42 1.42L5 6.38a9 9 0 0 0 0 11.24l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 21h8a9 9 0 0 0 5.62-2l2.67 2.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM12 19H6.41l.64-.63a1 1 0 0 0 0-1.41 7 7 0 0 1-.65-9.15l9.79 9.79A7 7 0 0 1 12 19Z" id="comment-slash"></path></svg>
        )
    },
    "create-dashboard": {
        category: 'user interface',
        name: 'create-dashboard',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2ZM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 9H5V5h4Z" id="create-dashboard"></path></svg>
        )
    },
    "crockery": {
        category: 'user interface',
        name: 'crockery',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 12.15V3a1 1 0 0 0-2 0v9.15a4.16 4.16 0 0 0-3 4c0 2.05 1.52 5.8 4 5.8s4-3.75 4-5.8a4.16 4.16 0 0 0-3-4ZM17 20c-.8 0-2-2.27-2-3.8a2.11 2.11 0 0 1 2-2.2 2.11 2.11 0 0 1 2 2.2c0 1.53-1.2 3.8-2 3.8ZM10 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L6 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 11 9V3a1 1 0 0 0-1-1Z" id="crockery"></path></svg>
        )
    },
    "cube": {
        category: 'user interface',
        name: 'cube',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.47 7.37v-.08l-.06-.15a.71.71 0 0 0-.07-.09.94.94 0 0 0-.09-.12l-.09-.07-.16-.08-7.5-4.63a1 1 0 0 0-1.06 0L4 6.78l-.09.08-.09.07a.94.94 0 0 0-.09.12.71.71 0 0 0-.07.09l-.06.15v.08a1.15 1.15 0 0 0 0 .26v8.74a1 1 0 0 0 .47.85l7.5 4.63a.47.47 0 0 0 .15.06s.05 0 .08 0a.86.86 0 0 0 .52 0h.08a.47.47 0 0 0 .15-.06L20 17.22a1 1 0 0 0 .47-.85V7.63a1.15 1.15 0 0 0 0-.26ZM11 19.21l-5.5-3.4V9.43l5.5 3.39Zm1-8.12L6.4 7.63 12 4.18l5.6 3.45Zm6.5 4.72-5.5 3.4v-6.39l5.5-3.39Z" id="cube"></path></svg>
        )
    },
    "dashboard": {
        category: 'user interface',
        name: 'dashboard',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.088 4.955c-.007-.008-.01-.019-.017-.026s-.018-.01-.026-.018a9.979 9.979 0 0 0-14.09 0c-.008.008-.018.01-.026.018s-.01.018-.017.026a10 10 0 1 0 14.176 0ZM12 20a7.985 7.985 0 0 1-6.235-3H9.78a2.964 2.964 0 0 0 4.44 0h4.015A7.985 7.985 0 0 1 12 20Zm-1-5a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1Zm8.41.002L19.4 15H15a2.995 2.995 0 0 0-2-2.816V9a1 1 0 0 0-2 0v3.184A2.995 2.995 0 0 0 9 15H4.6l-.01.002A7.93 7.93 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93a7.951 7.951 0 0 1 1.619-3.898l.654.655a1 1 0 1 0 1.414-1.414l-.654-.655A7.952 7.952 0 0 1 11 4.07V5a1 1 0 0 0 2 0v-.93a7.952 7.952 0 0 1 3.897 1.618l-.654.655a1 1 0 1 0 1.414 1.414l.654-.655A7.951 7.951 0 0 1 19.931 11H19a1 1 0 0 0 0 2h.93a7.93 7.93 0 0 1-.52 2.002Z" id="dashboard"></path></svg>
        )
    },
    "desktop-alt-slash": {
        category: 'user interface',
        name: 'desktop-alt-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42l1 1A3 3 0 0 0 3 6v8a3 3 0 0 0 3 3h3v2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 .93-.66l1.36 1.37a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM5 6.41 9.59 11H5ZM13 19h-2v-2h2Zm-7-4a1 1 0 0 1-1-1v-1h6.59l2 2Zm9 4v-2h.59l2 2ZM9.66 5H18a1 1 0 0 1 1 1v5h-1.34a1 1 0 0 0 0 2H19v1a.37.37 0 0 1 0 .11 1 1 0 0 0 .78 1.18h.2a1 1 0 0 0 1-.8A2.84 2.84 0 0 0 21 14V6a3 3 0 0 0-3-3H9.66a1 1 0 0 0 0 2Z" id="desktop-alt-slash"></path></svg>
        )
    },
    "desktop-slash": {
        category: 'user interface',
        name: 'desktop-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10.66 6H18a1 1 0 0 1 1 1v6a.94.94 0 0 1-.14.5 1 1 0 0 0 .31 1.38.94.94 0 0 0 .53.16 1 1 0 0 0 .84-.46A2.94 2.94 0 0 0 21 13V7a3 3 0 0 0-3-3h-7.34a1 1 0 0 0 0 2Zm11.05 14.29L5.86 4.45 3.71 2.29a1 1 0 0 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v6a3 3 0 0 0 3 3h5v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .93-.66l2.36 2.37a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 14a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L12.59 14Zm7 4v-2h1.59l2 2Z" id="desktop-slash"></path></svg>
        )
    },
    "draggabledots": {
        category: 'user interface',
        name: 'draggabledots',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M8.5 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0 7a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm7-10a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm-7-4a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm7 14a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" id="draggabledots"></path></svg>
        )
    },
    "edit": {
        category: 'user interface',
        name: 'edit',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83ZM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8Z" id="edit"></path></svg>
        )
    },
    "edit-alt": {
        category: 'user interface',
        name: 'edit-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 18h4.24a1 1 0 0 0 .71-.29l6.92-6.93L19.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71V17a1 1 0 0 0 1 1Zm9.76-13.59 2.83 2.83-1.42 1.42-2.83-2.83ZM6 13.17l5.93-5.93 2.83 2.83L8.83 16H6ZM21 20H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" id="edit-alt"></path></svg>
        )
    },
    "elipsis-double-v-alt": {
        category: 'user interface',
        name: 'elipsis-double-v-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="elipsis-double-v-alt"></path></svg>
        )
    },
    "ellipsis-h": {
        category: 'user interface',
        name: 'ellipsis-h.',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" id="ellipsis-h"></path></svg>
        )
    },
    "ellipsis-v": {
        category: 'user interface',
        name: 'ellipsis-v',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2Zm0 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" id="ellipsis-v"></path></svg>
        )
    },
    "estate": {
        category: 'user interface',
        name: 'estate',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20 8-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z" id="estate"></path></svg>
        )
    },
    "exclamation": {
        category: 'user interface',
        name: 'exclamation',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm0 4a1.25 1.25 0 1 0-1.25-1.25A1.25 1.25 0 0 0 12 18Z" id="exclamation"></path></svg>
        )
    },
    "exclamation-circle": {
        category: 'user interface',
        name: 'exclamation-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14Zm0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Z" id="exclamation-circle"></path></svg>
        )
    },
    "exclamation-octagon": {
        category: 'user interface',
        name: 'exclamation-octagon',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46a1.05 1.05 0 0 0 .29.71l5.27 5.27a1.05 1.05 0 0 0 .71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69Z" id="exclamation-octagon"></path></svg>
        )
    },
    "exclamation-triangle": {
        category: 'user interface',
        name: 'exclamation-triangle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" id="exclamation-triangle"></path></svg>
        )
    },
    "external-link-alt": {
        category: 'user interface',
        name: 'external-link-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z" id="external-link-alt"></path></svg>
        )
    },
    "eye-slash": {
        category: 'user interface',
        name: 'eye-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.94 6.08A6.93 6.93 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15.23 15.23 0 0 1-.9 1.64 1 1 0 0 0-.16.55 1 1 0 0 0 1.86.5 15.77 15.77 0 0 0 1.21-2.3 1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a7.77 7.77 0 0 0-1.4.12 1 1 0 1 0 .34 2ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.1 3.09a14.62 14.62 0 0 0-3.31 4.8 1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm6.36 9.19 2.45 2.45A1.81 1.81 0 0 1 12 14a2 2 0 0 1-2-2 1.81 1.81 0 0 1 .07-.52ZM12 18c-3.18 0-6.17-2.29-7.9-6a12.09 12.09 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18Z" id="eye-slash"></path></svg>
        )
    },
    "favorite": {
        category: 'user interface',
        name: 'favorite',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67a.93.93 0 0 0 .46.12 1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 22 9.67Zm-6.15 4a1 1 0 0 0-.29.88l.72 4.2-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2 .72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z" id="favorite"></path></svg>
        )
    },
    "feedback": {
        category: 'user interface',
        name: 'feedback',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 1h-7a2.44 2.44 0 0 0-2.41 2l-.92 5.05a2.44 2.44 0 0 0 .53 2 2.47 2.47 0 0 0 1.88.88H17l-.25.66a3.26 3.26 0 0 0 3 4.41 1 1 0 0 0 .92-.59l2.24-5.06A1 1 0 0 0 23 10V2a1 1 0 0 0-1-1Zm-1 8.73-1.83 4.13a1.33 1.33 0 0 1-.45-.4 1.23 1.23 0 0 1-.14-1.16l.38-1a1.68 1.68 0 0 0-.2-1.58A1.7 1.7 0 0 0 17.35 9h-3.29a.46.46 0 0 1-.35-.16.5.5 0 0 1-.09-.37l.92-5A.44.44 0 0 1 15 3h6ZM9.94 13.05H7.05l.25-.66A3.26 3.26 0 0 0 4.25 8a1 1 0 0 0-.92.59l-2.24 5.06a1 1 0 0 0-.09.4v8a1 1 0 0 0 1 1h7a2.44 2.44 0 0 0 2.41-2l.92-5a2.44 2.44 0 0 0-.53-2 2.47 2.47 0 0 0-1.86-1Zm-.48 7.58A.44.44 0 0 1 9 21H3v-6.73l1.83-4.13a1.33 1.33 0 0 1 .45.4 1.23 1.23 0 0 1 .14 1.16l-.38 1a1.68 1.68 0 0 0 .2 1.58 1.7 1.7 0 0 0 1.41.74h3.29a.46.46 0 0 1 .35.16.5.5 0 0 1 .09.37Z" id="feedback"></path></svg>
        )
    },
    "fidget-spinner": {
        category: 'user interface',
        name: 'fidget-spinner',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-5.696 9.134a1 1 0 1 0 1.366.366 1 1 0 0 0-1.366-.366Zm11.392 0a1 1 0 1 0 .366 1.366 1 1 0 0 0-.366-1.366Zm2.914-2.791a4.918 4.918 0 0 0-4.526-1.197l-.419-.763a4.989 4.989 0 0 0-2.503-8.251 5.035 5.035 0 0 0-4.279.958A4.978 4.978 0 0 0 7 8a4.929 4.929 0 0 0 1.352 3.392l-.419.75a4.989 4.989 0 0 0-5.926 6.286 5.03 5.03 0 0 0 2.97 3.226 4.97 4.97 0 0 0 6.588-3.19l.867.014a4.981 4.981 0 0 0 4.76 3.524 5.017 5.017 0 0 0 4.8-3.573 4.95 4.95 0 0 0-1.382-5.086Zm-.528 4.495a3.006 3.006 0 0 1-4.386 1.76 2.965 2.965 0 0 1-1.352-1.705 1.994 1.994 0 0 0-1.91-1.43h-.869a1.995 1.995 0 0 0-1.91 1.43 2.98 2.98 0 0 1-3.948 1.899 2.993 2.993 0 0 1 1.767-5.704 1.967 1.967 0 0 0 2.173-.942l.436-.754a1.995 1.995 0 0 0-.281-2.369 2.98 2.98 0 0 1 .329-4.37 2.993 2.993 0 0 1 4.069 4.369 2 2 0 0 0-.283 2.37l.435.753a1.974 1.974 0 0 0 2.174.943 2.988 2.988 0 0 1 3.556 3.75Z" id="fidget-spinner"></path></svg>
        )
    },
    "file-lanscape-slash": {
        category: 'user interface',
        name: 'file-lanscape-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22 10.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11h-4.39a1 1 0 0 0 0 2H14v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0v-4.4ZM17 10a1 1 0 0 1-1-1V7.41L18.59 10ZM3.71 2.29a1 1 0 0 0-1.42 1.42l.91.9A3 3 0 0 0 2 7v10a3 3 0 0 0 3 3h13.59l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM5 18a1 1 0 0 1-1-1V7a1 1 0 0 1 .66-.93L16.59 18Z" id="file-lanscape-slash"></path></svg>
        )
    },
    "file-slash": {
        category: 'user interface',
        name: 'file-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42L4 5.41V19a3 3 0 0 0 3 3h10a3 3 0 0 0 2.39-1.2l.9.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM17 20H7a1 1 0 0 1-1-1V7.41l11.93 11.93A1 1 0 0 1 17 20ZM8.66 4H12v3a3 3 0 0 0 3 3h3v3.34a1 1 0 1 0 2 0v-4.4a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09L13.06 2h-4.4a1 1 0 0 0 0 2ZM14 5.41 16.59 8H15a1 1 0 0 1-1-1Z" id="file-slash"></path></svg>
        )
    },
    "filter": {
        category: 'user interface',
        name: 'filter',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5a3 3 0 0 0-3 3v1.17a3 3 0 0 0 .25 1.2v.06a2.81 2.81 0 0 0 .59.86L9 14.41V21a1 1 0 0 0 .47.85A1 1 0 0 0 10 22a1 1 0 0 0 .45-.11l4-2A1 1 0 0 0 15 19v-4.59l6.12-6.12a2.81 2.81 0 0 0 .59-.86v-.06a3 3 0 0 0 .29-1.2V5a3 3 0 0 0-3-3Zm-5.71 11.29A1 1 0 0 0 13 14v4.38l-2 1V14a1 1 0 0 0-.29-.71L5.41 8h13.18ZM20 6H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" id="filter"></path></svg>
        )
    },
    "filter-slash": {
        category: 'user interface',
        name: 'filter-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.22 6h-6.56a1 1 0 0 0 0 2h6.56a.78.78 0 0 1 .78.78v.78h-3.78a1 1 0 1 0 0 2h2.37l-.7.69a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.88-1.88a2.51 2.51 0 0 0 .54-.8v-.1A2.59 2.59 0 0 0 22 9.82v-1A2.79 2.79 0 0 0 19.22 6ZM3.71 2.29a1 1 0 0 0-1.42 1.42l2.85 2.84A2.73 2.73 0 0 0 4 8.78v1a2.65 2.65 0 0 0 .24 1.1v.06a2.61 2.61 0 0 0 .54.81l5.41 5.4V21a1 1 0 0 0 .47.85 1 1 0 0 0 .53.15 1 1 0 0 0 .45-.11l3.56-1.78a1 1 0 0 0 .55-.89v-2l4.51 4.52a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 8.78a.76.76 0 0 1 .5-.72L6.59 8l1.56 1.56H6Zm8.07 7.29a1 1 0 0 0-.29.71v1.82l-1.56.78v-2.6a1 1 0 0 0-.29-.71l-4.52-4.51h2.74l4.22 4.22Z" id="filter-slash"></path></svg>
        )
    },
    "fire": {
        category: 'user interface',
        name: 'fire',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m8.468 8.395-.002.001-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175 1 1 0 0 0-1.4.411 5.782 5.782 0 0 1-1.398 1.778 8.664 8.664 0 0 0 .134-1.51 8.714 8.714 0 0 0-4.4-7.582 1 1 0 0 0-1.492.806 7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863 8.983 8.983 0 0 0 3.656 13.908 1 1 0 0 0 1.377-.926 1.05 1.05 0 0 0-.05-.312 6.977 6.977 0 0 1-.19-2.581 9.004 9.004 0 0 0 4.313 4.016.997.997 0 0 0 .715.038 8.995 8.995 0 0 0 3.654-14.863Zm-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402 8.908 8.908 0 0 1-.18-.964 1 1 0 0 0-.799-.845.982.982 0 0 0-.191-.018 1 1 0 0 0-.867.5 8.959 8.959 0 0 0-1.205 4.718 6.985 6.985 0 0 1-1.176-9.868 6.555 6.555 0 0 1 1.562-1.458.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633 6.736 6.736 0 0 1 1.385 8.088 1 1 0 0 0 1.184 1.418 7.856 7.856 0 0 0 3.862-2.688 7 7 0 0 1-3.279 10.457Z" id="fire"></path></svg>
        )
    },
    "folder-slash": {
        category: 'user interface',
        name: 'folder-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.71 20.29-1.6-1.6-16.4-16.4a1 1 0 0 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v11a3 3 0 0 0 3 3h12a3 3 0 0 0 1.29-.3l1 1a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41ZM6 19a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L17.59 19Zm4.62-13a1 1 0 0 1 .89.67l.54 1.64A1 1 0 0 0 13 9h5a1 1 0 0 1 1 1v4.34a1 1 0 1 0 2 0V10a3 3 0 0 0-3-3h-4.28l-.32-1a3 3 0 0 0-2.68-2 1 1 0 0 0-.1 2Z" id="folder-slash"></path></svg>
        )
    },
    "football-american": {
        category: 'user interface',
        name: 'football-american',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.84 5.56a4.08 4.08 0 0 0-1.14-2.25 4.08 4.08 0 0 0-2.25-1.14 13.65 13.65 0 0 0-5.29.24 1.17 1.17 0 0 0-.2.06 14.44 14.44 0 0 0-6.69 3.8A14.59 14.59 0 0 0 2.45 13c0 .06 0 .12-.05.19a13.7 13.7 0 0 0-.24 5.3 4.08 4.08 0 0 0 1.14 2.2 4.08 4.08 0 0 0 2.25 1.14 13.12 13.12 0 0 0 2.08.17 13.8 13.8 0 0 0 3.26-.41h.14a14.54 14.54 0 0 0 10.52-10.5c0-.06 0-.12.05-.19a13.7 13.7 0 0 0 .24-5.34ZM16.37 4a10.44 10.44 0 0 1 1.76.14 1.68 1.68 0 0 1 .24.07L17 5.59l-1.54-1.54c.3-.05.61-.05.91-.05Zm-8.7 3.67a12.72 12.72 0 0 1 5.4-3.19L15.59 7l-2.15 2.15-.73-.73a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l.73.73L10.56 12l-.73-.73a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l.73.73L7 15.59l-2.51-2.51a12.67 12.67 0 0 1 3.18-5.41Zm-3.46 10.7a1.68 1.68 0 0 1-.07-.24A11.38 11.38 0 0 1 4 15.46L5.59 17Zm1.66 1.49a1.68 1.68 0 0 1-.24-.07L7 18.41 8.54 20a11.38 11.38 0 0 1-2.67-.14Zm10.46-3.53a12.67 12.67 0 0 1-5.41 3.18L8.41 17l2.15-2.15.73.73a1 1 0 1 0 1.42-1.41l-.71-.73L13.44 12l.73.73a1 1 0 0 0 .71.29 1 1 0 0 0 .7-1.71l-.73-.73L17 8.41l2.51 2.51a12.67 12.67 0 0 1-3.18 5.41ZM20 8.54 18.41 7l1.38-1.37a1.68 1.68 0 0 1 .07.24A11.38 11.38 0 0 1 20 8.54Z" id="football-american"></path></svg>
        )
    },
    "glass": {
        category: 'user interface',
        name: 'glass',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.75 2.33A1 1 0 0 0 19 2H5a1 1 0 0 0-.75.33 1 1 0 0 0-.25.78l1.8 16.22a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67L20 3.11a1 1 0 0 0-.25-.78ZM16.2 19.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44ZM17.44 8H6.56l-.44-4h11.76Z" id="glass"></path></svg>
        )
    },
    "glass-martini": {
        category: 'user interface',
        name: 'glass-martini',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 20h-5v-5.06A9 9 0 0 0 21 6a8.72 8.72 0 0 0-.67-3.39 1 1 0 0 0-.22-.32L20 2.21a.92.92 0 0 0-.21-.13.94.94 0 0 0-.28-.08H4.5a.94.94 0 0 0-.29.06A2.12 2.12 0 0 0 4 2.2l-.12.09a1 1 0 0 0-.22.32A8.72 8.72 0 0 0 3 6a9 9 0 0 0 8 8.94V20H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2ZM5 6a6.91 6.91 0 0 1 .29-2h13.42A6.91 6.91 0 0 1 19 6 7 7 0 0 1 5 6Z" id="glass-martini"></path></svg>
        )
    },
    "glass-martini-alt": {
        category: 'user interface',
        name: 'glass-martini-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.78 3.62a1 1 0 0 0 .12-1.05A1 1 0 0 0 21 2H3a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1.05L11 14.6V20H5.25a1 1 0 0 0 0 2h13.5a1 1 0 0 0 0-2H13v-5.4ZM5.08 4h13.84l-2.4 3h-9ZM12 12.65 9.08 9h5.84Z" id="glass-martini-alt"></path></svg>
        )
    },
    "glass-martini-alt-slash": {
        category: 'user interface',
        name: 'glass-martini-alt-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m19.71 16.29-14-14a1 1 0 0 0-1.42 1.42L6.59 6H5a1 1 0 0 0-.9.57 1 1 0 0 0 .12 1L11 16.1V20H6.75a1 1 0 0 0 0 2h10.5a1 1 0 0 0 0-2H13v-3.9l1.64-2 3.65 3.65a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.46ZM7.08 8h1.51l1.89 1.89H8.59ZM12 14.15l-1.81-2.26h2.29l.74.74ZM14.66 8h2.26l-.63.79a1 1 0 0 0 .15 1.4 1 1 0 0 0 .63.22 1 1 0 0 0 .78-.37l1.93-2.42a1 1 0 0 0 .12-1A1 1 0 0 0 19 6h-4.34a1 1 0 0 0 0 2Z" id="glass-martini-alt-slash"></path></svg>
        )
    },
    "glass-tea": {
        category: 'user interface',
        name: 'glass-tea',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19 3a3 3 0 0 0-2.23-1H7.23a3 3 0 0 0-3 3.33l1.56 14a3 3 0 0 0 3 2.67h6.42a3 3 0 0 0 3-2.67l1.56-14A3 3 0 0 0 19 3Zm-2.8 16.11a1 1 0 0 1-1 .89H8.79a1 1 0 0 1-1-.89L6.78 10h10.44ZM17.44 8H6.56l-.32-2.89a1 1 0 0 1 .25-.78A1 1 0 0 1 7.23 4h9.54a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78ZM14 18a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm-4 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z" id="glass-tea"></path></svg>
        )
    },
    "globe": {
        category: 'user interface',
        name: 'globe',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72ZM4.26 14a7.82 7.82 0 0 1 0-4h1.86a16.73 16.73 0 0 0 0 4Zm.82 2h1.4a12.15 12.15 0 0 0 1 2.57A8 8 0 0 1 5.08 16Zm1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12.15 12.15 0 0 0 6.48 8ZM11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.36 14.36 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12.15 12.15 0 0 0-1-2.57A8 8 0 0 1 18.92 8ZM13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7Zm2.86-5.7H13v-4h2.86a14.36 14.36 0 0 1 0 4Zm.69 4.57a12.15 12.15 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57ZM19.74 14h-1.86a16.16 16.16 0 0 0 .12-2 16.28 16.28 0 0 0-.12-2h1.86a7.82 7.82 0 0 1 0 4Z" id="globe"></path></svg>
        )
    },
    "break": {
        category: 'user interface',
        name: 'break',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.46a1 1 0 0 0 1.42 0l7.45-7.46a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 0 1 5.54-6.45l-1.71 4a1 1 0 0 0 0 .83 1 1 0 0 0 .65.53l2.77.7-1.4 2.89a1 1 0 0 0 .46 1.34 1 1 0 0 0 .44.1 1 1 0 0 0 .9-.56l2-4a1 1 0 0 0 0-.86 1.05 1.05 0 0 0-.67-.55l-2.83-.71 1.45-3.39a4.26 4.26 0 0 1 5.92 6.13Z" id="heart-break"></path></svg>
        )
    },
    "heart-break": {
        category: 'user interface',
        name: 'heart-break',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.46a1 1 0 0 0 1.42 0l7.45-7.46a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 0 1 5.54-6.45l-1.71 4a1 1 0 0 0 0 .83 1 1 0 0 0 .65.53l2.77.7-1.4 2.89a1 1 0 0 0 .46 1.34 1 1 0 0 0 .44.1 1 1 0 0 0 .9-.56l2-4a1 1 0 0 0 0-.86 1.05 1.05 0 0 0-.67-.55l-2.83-.71 1.45-3.39a4.26 4.26 0 0 1 5.92 6.13Z" id="heart-break"></path></svg>
        )
    },
    "history": {
        category: 'user interface',
        name: 'history',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2Zm0 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1V9a1 1 0 0 0-1-1Z" id="history"></path></svg>
        )
    },

    "history-alt": {
        category: 'user interface',
        name: 'history-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.44 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 1 1 11.44 20a1 1 0 1 0 0 2 10 10 0 1 0 0-20Zm0 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1V9a1 1 0 0 0-1-1Z" id="history-alt"></path></svg>
        )
    },
    "home": {
        category: 'user interface',
        name: 'home',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.66 10.25-9-8a1 1 0 0 0-1.32 0l-9 8a1 1 0 0 0-.27 1.11A1 1 0 0 0 3 12h1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 .93-.64 1 1 0 0 0-.27-1.11ZM13 20h-2v-3a1 1 0 0 1 2 0Zm5 0h-3v-3a3 3 0 0 0-6 0v3H6v-8h12ZM5.63 10 12 4.34 18.37 10Z" id="home"></path></svg>
        )
    },
    "hourglass": {
        category: 'user interface',
        name: 'hourglass',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18.992 21.002h-1v-1.667a5 5 0 0 0-.3-1.678.969.969 0 0 0-.036-.084 4.977 4.977 0 0 0-.664-1.237l-1.4-1.867a3.02 3.02 0 0 1-.6-1.801v-1.01a3.021 3.021 0 0 1 .878-2.12l.657-.658a4.946 4.946 0 0 0 1.397-2.839c0-.013.008-.025.008-.04l-.003-.013a5.018 5.018 0 0 0 .063-.643V3.002h1a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2h1v2.343a5.018 5.018 0 0 0 .063.643l-.003.014c0 .014.007.026.008.04A4.946 4.946 0 0 0 7.456 8.88l.657.657a3.021 3.021 0 0 1 .879 2.121v1.01a3.022 3.022 0 0 1-.6 1.8l-1.4 1.868a4.982 4.982 0 0 0-.665 1.237.976.976 0 0 0-.036.084 5.003 5.003 0 0 0-.3 1.678v1.667h-1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Zm-11-16v-2h8v2Zm.878 2.464a2.97 2.97 0 0 1-.377-.464h6.997a2.97 2.97 0 0 1-.377.464l-.657.657a4.96 4.96 0 0 0-1.422 2.879H10.95a4.96 4.96 0 0 0-1.422-2.879Zm1.122 8.202a5.037 5.037 0 0 0 .988-2.666h2.023a5.033 5.033 0 0 0 .989 2.666l1 1.334h-6Zm6 5.334h-8v-1.667a2.954 2.954 0 0 1 .027-.333h7.945a2.954 2.954 0 0 1 .028.333Z" id="hourglass"></path></svg>
        )
    },
    "image-alt-slash": {
        category: 'user interface',
        name: 'image-alt-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.71 20.29-.93-.93-.09-.1-.06-.07-.5-.5-.13-.07-5.18-5.2-.09-.08-3.2-3.21-.1-.13-7.72-7.71a1 1 0 0 0-1.42 1.42l1 1A3 3 0 0 0 3 6v12a3 3 0 0 0 3 3h12a2.9 2.9 0 0 0 1.27-.31s0 0 .05 0l.95 1a1 1 0 0 0 1.42 0 1 1 0 0 0 .02-1.4ZM5 6.41l3.24 3.24a2.84 2.84 0 0 0-.67.48L5 12.71ZM6 19a1 1 0 0 1-1-1v-2.46l4-4a.81.81 0 0 1 1.1 0L17.59 19ZM9.66 5H18a1 1 0 0 1 1 1v5.94a1 1 0 1 0-1.42 1.42l1.74 1.74a1 1 0 0 0 1.42 0 1 1 0 0 0 .29-.72V6a3 3 0 0 0-3-3H9.66a1 1 0 0 0 0 2Z" id="image-alt-slash"></path></svg>
        )
    },
    "image-slash": {
        category: 'user interface',
        name: 'image-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.5 4H10a1 1 0 0 0 0 2h9.5a1 1 0 0 1 1 1v6.76l-1.88-1.88a3 3 0 0 0-1.14-.71 1 1 0 1 0-.64 1.9.82.82 0 0 1 .36.23l3.31 3.29a.66.66 0 0 0 0 .15.83.83 0 0 0 0 .15 1.18 1.18 0 0 0 .13.18.48.48 0 0 0 .09.11.9.9 0 0 0 .2.14.6.6 0 0 0 .11.06.91.91 0 0 0 .37.08 1 1 0 0 0 1-1V7a3 3 0 0 0-2.91-3ZM3.21 2.29a1 1 0 0 0-1.42 1.42L3.18 5.1A3 3 0 0 0 2.5 7v10a3 3 0 0 0 3 3h12.59l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM4.5 7a1 1 0 0 1 .12-.46l2.72 2.71a3 3 0 0 0-1 .63L4.5 11.76Zm1 11a1 1 0 0 1-1-1v-2.42l3.3-3.29a1 1 0 0 1 1.4 0L15.91 18Z" id="image-slash"></path></svg>
        )
    },
    "inbox": {
        category: 'user interface',
        name: 'inbox',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.056 2h-14a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-14 2h14a1.001 1.001 0 0 1 1 1v8H17.59a1.997 1.997 0 0 0-1.664.89L14.52 16H9.59l-1.406-2.11A1.997 1.997 0 0 0 6.52 13H4.056V5a1.001 1.001 0 0 1 1-1Zm14 16h-14a1.001 1.001 0 0 1-1-1v-4H6.52l1.406 2.11A1.997 1.997 0 0 0 9.59 18h4.93a1.997 1.997 0 0 0 1.664-.89L17.59 15h2.465v4a1.001 1.001 0 0 1-1 1Z" id="inbox"></path></svg>
        )
    },
    "info": {
        category: 'user interface',
        name: 'info',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 6Z" id="info"></path></svg>
        )
    },
    "info-circle": {
        category: 'user interface',
        name: 'info-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Zm0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5Z" id="info-circle"></path></svg>
        )
    },
    "key-skeleton": {
        category: 'user interface',
        name: 'key-skeleton',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21 4.41.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41-2.83 2.83-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6 2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12 1.42-1.41.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" id="key-skeleton"></path></svg>
        )
    },
    "key-skeleton-alt": {
        category: 'user interface',
        name: 'key-skeleton-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.71 6.53-1.42-1.41 1.42-1.41a1 1 0 1 0-1.42-1.42L9.75 12.83a5 5 0 1 0 1.42 1.42l4.88-4.89 1.41 1.42a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L17.46 8l1.42-1.42L20.29 8a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.47ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" id="key-skeleton-alt"></path></svg>
        )
    },
    "keyboard": {
        category: 'user interface',
        name: 'keyboard',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.21 13.29a.93.93 0 0 0-.33-.21 1 1 0 0 0-.76 0 .9.9 0 0 0-.54.54 1 1 0 1 0 1.84 0 1 1 0 0 0-.21-.33ZM13.5 11h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm-4 0h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm-3-2h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2ZM20 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-6-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm3.5-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm.71 4.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 .93.93 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 1 0 1.92.38.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33Z" id="keyboard"></path></svg>
        )
    },
    "keyboard-alt": {
        category: 'user interface',
        name: 'keyboard-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6.71 9.29a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.15 1.15 0 0 0 .33.21A.84.84 0 0 0 6 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33ZM10 11a1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33 1 1 0 0 0-.9-.29.6.6 0 0 0-.19.06l-.18.09-.15.12A1.05 1.05 0 0 0 9 10a1 1 0 0 0 1 1Zm-3.62 2.08a1 1 0 0 0-.76 0A1 1 0 0 0 5 14a1 1 0 0 0 1.38.92 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 7 14a1 1 0 0 0-.29-.71.93.93 0 0 0-.33-.21ZM14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm.71-3.71a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33A1 1 0 1 0 15 10a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33Zm3.85 3.88a.76.76 0 0 0-.18-.09 1 1 0 0 0-.76 0 1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 17 14a1 1 0 1 0 2 0 1.05 1.05 0 0 0-.29-.71ZM20 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-2.29-6.71A1 1 0 0 0 17 10a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Z" id="keyboard-alt"></path></svg>
        )
    },
    "keyboard-hide": {
        category: 'user interface',
        name: 'keyboard-hide',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6.71 10.29a1.15 1.15 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.15 1.15 0 0 0 .33.21 1 1 0 0 0 1.3-1.3 1 1 0 0 0-.21-.33Zm2.58-2.58A1 1 0 0 0 10 8a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33 1 1 0 0 0-1.42 0 1.15 1.15 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33ZM6.71 6.29A1 1 0 0 0 5 7a1 1 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 6 8a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33Zm6.58 12L12 19.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 1.42 0l2-2a1 1 0 0 0-1.42-1.42Zm5.42-12A1 1 0 0 0 17 7a.84.84 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33 1 1 0 0 0 1.42 0 1.15 1.15 0 0 0 .21-.33A.84.84 0 0 0 19 7a1 1 0 0 0-.08-.38 1.15 1.15 0 0 0-.21-.33ZM14 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm6-8H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-2.29-2.71a1 1 0 0 0-.33-.21.92.92 0 0 0-.76 0 1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 17 11a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Zm-5.09-4.21a1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 13 7a1 1 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 14 8a.84.84 0 0 0 .38-.08 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33A.84.84 0 0 0 15 7a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21Z" id="keyboard-hide"></path></svg>
        )
    },
    "keyboard-show": {
        category: 'user interface',
        name: 'keyboard-show',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6.71 10.29A1 1 0 0 0 5 11a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Zm2.58-2.58A1 1 0 0 0 10 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 11 7a1.05 1.05 0 0 0-.29-.71l-.15-.12-.18-.09a.6.6 0 0 0-.19-.08 1 1 0 0 0-.9.27 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.35ZM6.56 6.17a.76.76 0 0 0-.18-.09L6.2 6a1 1 0 0 0-.91.27 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21A.84.84 0 0 0 6 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 7 7a1.05 1.05 0 0 0-.29-.71Zm6.15 12.12a1 1 0 0 0-1.42 0l-2 2a1 1 0 0 0 1.42 1.42l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm6-8a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 1.3 1.3 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 19 11a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33ZM14 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm6-8H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-3.38-6.92a.93.93 0 0 0-.33.21A1.05 1.05 0 0 0 17 7a1 1 0 0 0 .08.38 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 18 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 19 7a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21Zm-3.06.09-.18-.09L14.2 6a1 1 0 0 0-.58.06.93.93 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33A1 1 0 0 0 14 8a1 1 0 0 0 .71-.29 1.15 1.15 0 0 0 .21-.33A1 1 0 0 0 15 7a1.05 1.05 0 0 0-.29-.71Z" id="keyboard-show"></path></svg>
        )
    },
    "lamp": {
        category: 'user interface',
        name: 'lamp',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18 2.78A1 1 0 0 0 17 2H7a1 1 0 0 0-1 .78l-2 9a1 1 0 0 0 .2.85A1 1 0 0 0 5 13h3.94A8.26 8.26 0 0 1 9 14a8.92 8.92 0 0 1-2.57 6.3 1 1 0 0 0 .71 1.7h9.72a1 1 0 0 0 .71-1.7A8.92 8.92 0 0 1 15 14a8.26 8.26 0 0 1 .06-1H16v2a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 .78-.37 1 1 0 0 0 .2-.85ZM9.22 20A10.9 10.9 0 0 0 11 14c0-.33 0-.67-.05-1h2.1c0 .33-.05.67-.05 1a10.9 10.9 0 0 0 1.78 6Zm-3-9L7.8 4h8.4l1.55 7Z" id="lamp"></path></svg>
        )
    },
    "layer-group": {
        category: 'user interface',
        name: 'layer-group',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m2.5 8.86 9 5.2a1 1 0 0 0 1 0l9-5.2A1 1 0 0 0 22 8a1 1 0 0 0-.5-.87l-9-5.19a1 1 0 0 0-1 0l-9 5.19A1 1 0 0 0 2 8a1 1 0 0 0 .5.86ZM12 4l7 4-7 4-7-4Zm8.5 7.17L12 16l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Zm0 4L12 20l-8.5-4.87a1 1 0 0 0-1.37.37 1 1 0 0 0 .37 1.36l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.36 1 1 0 0 0-1.37-.37Z" id="layer-group"></path></svg>
        )
    },
    "layer-group-slash": {
        category: 'user interface',
        name: 'layer-group-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.26 5 12 4l7 4-3.15 1.83a1 1 0 0 0-.37 1.36 1 1 0 0 0 1.37.37l4.65-2.69a1 1 0 0 0 0-1.74l-9-5.2a1 1 0 0 0-1 0l-2.24 1.3a1 1 0 0 0-.37 1.37 1 1 0 0 0 1.37.4ZM3.71 2.29a1 1 0 0 0-1.42 1.42L4.54 6l-2 1.17a1 1 0 0 0 0 1.74l9 5.2a1 1 0 0 0 1 0l.1-.06 1.07 1.07-1.67 1-8.54-4.99a1 1 0 1 0-1 1.74l9 5.2a1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13l2.63-1.52 1.07 1.07L12 20l-8.5-4.87a1 1 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l5.17-3 2.62 2.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM5 8l1-.58 2.75 2.75Zm15.5 3.13-2.12 1.22a1 1 0 0 0 1 1.74l2.12-1.22a1 1 0 1 0-1-1.74Z" id="layer-group-slash"></path></svg>
        )
    },
    "layers": {
        category: 'user interface',
        name: 'layers',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m2.5 10.56 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.2a1 1 0 0 0-1 0l-9 5.2a1 1 0 0 0 0 1.73ZM12 5.65l7 4-7 4.05-7-4.01Zm8.5 7.79L12 18.35l-8.5-4.91a1 1 0 0 0-1.37.36 1 1 0 0 0 .37 1.37l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 .37-1.37 1 1 0 0 0-1.37-.36Z" id="layers"></path></svg>
        )
    },
    "layers-slash": {
        category: 'user interface',
        name: 'layers-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m20.49 13.94-.34.2a1 1 0 0 0-.35 1.37 1 1 0 0 0 .86.49 1 1 0 0 0 .51-.14l.34-.2a1 1 0 0 0-1-1.72Zm-8.84-7.58.35-.21 7 4-1.76 1a1 1 0 0 0 .5 1.87 1 1 0 0 0 .5-.13L21.5 11a1 1 0 0 0 0-1.74l-9-5.19a1 1 0 0 0-1 0l-.85.49a1 1 0 0 0 1 1.74ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.64 3.63-3.43 2a1 1 0 0 0 0 1.74l9 5.2a1.09 1.09 0 0 0 .5.13 1.13 1.13 0 0 0 .5-.13l1.5-.88 1.45 1.46-3.44 2-8.51-4.93a1 1 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l4.41-2.55 3.38 3.39a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm8.29 12-7-4.1 2.4-1.38 5.12 5.13Z" id="layers-slash"></path></svg>
        )
    },
    "life-ring": {
        category: 'user interface',
        name: 'life-ring',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.05v-.33l-.09-.6-.09-.39c0-.17-.08-.34-.13-.51s-.08-.27-.13-.4a2.17 2.17 0 0 1-.07-.24s0 0 0-.05a10.1 10.1 0 0 0-5.9-5.9s0 0-.05 0l-.23-.07-.42-.13c-.15 0-.31-.08-.46-.12l-.46-.1-.46-.07c-.16 0-.31 0-.48-.06s-.35 0-.52 0L12 2h-.91c-.17 0-.32 0-.48.06l-.46.07-.46.1c-.15 0-.31.07-.46.12l-.42.13-.23.07h-.05a10.1 10.1 0 0 0-5.9 5.9s0 0 0 .05a2.17 2.17 0 0 1-.07.24c0 .13-.09.26-.13.4s-.09.34-.13.51l-.09.39-.09.6v2.56l.09.6.09.39c0 .17.08.34.13.51s.08.27.13.4a2.17 2.17 0 0 1 .07.24.43.43 0 0 1 0 .07 10 10 0 0 0 5.89 5.88s0 0 .05 0l.24.07.4.13.51.13.39.09.6.09h.33c.31 0 .63.05.95.05s.64 0 .95-.05h.33l.6-.09.39-.09.51-.13.4-.13.24-.07h.05a10 10 0 0 0 5.89-5.88.43.43 0 0 1 0-.07c0-.08.05-.16.07-.24s.09-.26.13-.4.09-.34.13-.51l.09-.39.09-.6v-.33c0-.31.05-.63.05-.95s.09-.56.09-.87Zm-6.3-6.16a8 8 0 0 1 3.46 3.46l-2.86 1a5.14 5.14 0 0 0-1.64-1.64Zm-5.36-.7c.21-.05.41-.08.61-.11h.24a8.24 8.24 0 0 1 1.72 0h.24c.2 0 .4.06.61.11h.06l-1 2.86A4.49 4.49 0 0 0 12 7a4.4 4.4 0 0 0-.73.06l-1-2.86Zm-1.94.7 1 2.86a5.14 5.14 0 0 0-1.65 1.64l-2.86-1a8 8 0 0 1 3.46-3.5Zm-4.21 8.82a4.17 4.17 0 0 1-.1-.6v-.25a7.42 7.42 0 0 1 0-1.72v-.25a4.17 4.17 0 0 1 .1-.6s0 0 0-.06l2.86 1a4.47 4.47 0 0 0 0 1.46l-2.86 1v.02Zm4.16 5.4a8 8 0 0 1-3.46-3.46l2.86-1a5.14 5.14 0 0 0 1.64 1.64Zm5.36.7c-.21.05-.41.08-.61.11h-.24a8.24 8.24 0 0 1-1.72 0h-.24c-.2 0-.4-.06-.61-.11h-.06l1-2.86a4.47 4.47 0 0 0 1.46 0l1 2.86Zm-.67-5c-.17.06-.34.1-.5.14a2.73 2.73 0 0 1-1 0c-.16 0-.33-.08-.5-.14A3 3 0 0 1 9.2 13a3.23 3.23 0 0 1-.14-.51 2.63 2.63 0 0 1 0-1 3.23 3.23 0 0 1 .13-.49A3 3 0 0 1 11 9.2c.17-.06.34-.1.5-.14a2.73 2.73 0 0 1 1 0c.16 0 .33.08.5.14a3 3 0 0 1 1.8 1.8 3.23 3.23 0 0 1 .14.51 2.63 2.63 0 0 1 0 1 3.23 3.23 0 0 1-.14.51A3 3 0 0 1 13 14.8Zm2.61 4.31-1-2.86a5.14 5.14 0 0 0 1.64-1.64l2.86 1a8 8 0 0 1-3.5 3.49ZM20 12.86v.25a4.17 4.17 0 0 1-.1.6s0 0 0 .06l-2.86-1a4.47 4.47 0 0 0 0-1.46l2.86-1v.06a4.17 4.17 0 0 1 .1.6v.25a7.42 7.42 0 0 1 0 1.72Z" id="life-ring"></path></svg>
        )
    },
    "link": {
        category: 'user interface',
        name: 'link',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m10 17.55-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43 2.75 2.75 0 0 0-.18-.21 4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55ZM20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43 2.75 2.75 0 0 0 .23.21 4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33Z" id="link"></path></svg>
        )
    },
    "link-add": {
        category: 'user interface',
        name: 'link-add',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m12.11 15.39-3.88 3.88a2.47 2.47 0 0 1-3.5 0 2.46 2.46 0 0 1 0-3.5l3.88-3.88a1 1 0 1 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 0 0-1.42-1.42Zm-3.28-.22a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.92-4.92a1 1 0 1 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42ZM21 18h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm-4.19-4.47 3.88-3.89a4.48 4.48 0 0 0-6.33-6.33l-3.89 3.88a1 1 0 1 0 1.42 1.42l3.88-3.88a2.47 2.47 0 0 1 3.5 0 2.46 2.46 0 0 1 0 3.5l-3.88 3.88a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0Z" id="link-add"></path></svg>
        )
    },
    "link-alt": {
        category: 'user interface',
        name: 'link-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 1 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 0 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 1 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.92-4.92a1 1 0 1 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z" id="link-alt"></path></svg>
        )
    },
    "link-broken": {
        category: 'user interface',
        name: 'link-broken',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.76 10.59a1 1 0 0 0 .26-2l-1.76-.44a1 1 0 1 0-.52 1.93l1.76.47a.78.78 0 0 0 .26.04ZM8.62 5a1 1 0 0 0 1 .74.82.82 0 0 0 .26 0 1 1 0 0 0 .7-1.22l-.47-1.76a1 1 0 1 0-1.93.52Zm4.83 10A1 1 0 0 0 12 15l-3.5 3.56a2.21 2.21 0 0 1-3.06 0 2.15 2.15 0 0 1 0-3.06L9 12a1 1 0 1 0-1.41-1.41L4 14.08A4.17 4.17 0 1 0 9.92 20l3.53-3.53a1 1 0 0 0 0-1.47ZM5.18 6.59a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41L5.3 3.89A1 1 0 0 0 3.89 5.3Zm16.08 7.33-1.76-.47a1 1 0 1 0-.5 1.93l1.76.47h.26a1 1 0 0 0 .26-2ZM15.38 19a1 1 0 0 0-1.23-.7 1 1 0 0 0-.7 1.22l.47 1.76a1 1 0 0 0 1 .74 1.15 1.15 0 0 0 .26 0 1 1 0 0 0 .71-1.23Zm3.44-1.57a1 1 0 0 0-1.41 1.41l1.29 1.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM21.2 7a4.16 4.16 0 0 0-7.12-3l-3.53 3.56A1 1 0 1 0 12 9l3.5-3.56a2.21 2.21 0 0 1 3.06 0 2.15 2.15 0 0 1 0 3.06L15 12a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0L20 9.92A4.19 4.19 0 0 0 21.2 7Z" id="link-broken"></path></svg>
        )
    },
    "link-h": {
        category: 'user interface',
        name: 'link-h',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1Zm2 3H7a3 3 0 0 1 0-6h3a1 1 0 0 0 0-2H7a5 5 0 0 0 0 10h3a1 1 0 0 0 0-2Zm7-8h-3a1 1 0 0 0 0 2h3a3 3 0 0 1 0 6h-3a1 1 0 0 0 0 2h3a5 5 0 0 0 0-10Z" id="link-h"></path></svg>
        )
    },
    "list-ol": {
        category: 'user interface',
        name: 'list-ol',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 20H4v-.1c0-.5.4-.9.9-.9 1.4 0 2.6-.9 3-2.2.4-1.6-.5-3.3-2.1-3.7-1.3-.4-2.7.2-3.4 1.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.3.1.1.2.1.2.2.2.3.2.6.2.9-.2.4-.6.7-1 .7-1.7 0-3 1.3-3 2.9V21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zm4-13h10c.6 0 1-.4 1-1s-.4-1-1-1H11c-.6 0-1 .4-1 1s.4 1 1 1zM7 9H6V3c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v3H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zm14 7H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z" id="list-ol"></path></svg>
        )
    },
    "list-ol-alt": {
        category: 'user interface',
        name: 'list-ol-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 20H4v-.1c0-.5.4-.9.9-.9 1.4 0 2.6-.9 3-2.2.4-1.6-.5-3.3-2.1-3.7-1.3-.4-2.7.2-3.4 1.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.3.1.1.2.1.2.2.2.3.2.6.2.9-.2.4-.6.7-1 .7-1.7 0-3 1.3-3 2.9V21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zM7 9H6V3c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v3H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1zm4-3h10c.6 0 1-.4 1-1s-.4-1-1-1H11c-.6 0-1 .4-1 1s.4 1 1 1zm10 14H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zm0-11H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zm0 6H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z" id="list-ol-alt"></path></svg>
        )
    },
    "lock-slash": {
        category: 'user interface',
        name: 'lock-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.84 5.38a2 2 0 0 1 2.57.21A2 2 0 0 1 14 7v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.34a1 1 0 0 0 2 0V12a3 3 0 0 0-3-3V7a4 4 0 0 0-1.17-2.83 4.06 4.06 0 0 0-5.19-.39 1 1 0 1 0 1.2 1.6Zm10.87 14.91-18-18a1 1 0 0 0-1.42 1.42L7.62 9A3 3 0 0 0 5 12v6a3 3 0 0 0 3 3h8a3 3 0 0 0 2.39-1.2l1.9 1.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM16 19H8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1.59l2.07 2.07A1 1 0 0 0 11 14v2a1 1 0 0 0 2 0v-1.59l3.93 3.93A1 1 0 0 1 16 19Z" id="lock-slash"></path></svg>
        )
    },
    "map-marker-slash": {
        category: 'user interface',
        name: 'map-marker-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.63 5.49a6 6 0 0 1 7.21 7.2 1 1 0 0 0 .74 1.21.9.9 0 0 0 .23 0 1 1 0 0 0 1-.76 8 8 0 0 0-9.61-9.62 1 1 0 0 0 .46 2Zm11.08 14.58-4.27-4.27L3.71 2.07a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41L5.5 6.69A8 8 0 0 0 6.34 17l4.95 4.95a1 1 0 0 0 1.42 0l4-4 3.56 3.56a1 1 0 0 0 1.42-1.41Zm-9.59-6.76a2 2 0 0 1-1.53-.57 2 2 0 0 1-.59-1.53Zm-.12 6.5-4.24-4.24a6 6 0 0 1-.82-7.44L8.41 9.6a4 4 0 0 0 .76 4.55A4 4 0 0 0 12 15.33a3.93 3.93 0 0 0 1.73-.41l1.58 1.58Z" id="map-marker-slash"></path></svg>
        )
    },
    "megaphone": {
        category: 'user interface',
        name: 'megaphone',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.991 2.002a1 1 0 0 0-1 1v.637a9.036 9.036 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a1 1 0 0 0 .92 1.394h4a.999.999 0 0 0 .918-.606l2.724-6.356a9.028 9.028 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a1 1 0 0 0-1-1Zm-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4Zm2.341 7H6.508l2.142-5h1.825Zm10.66-4.478a11.052 11.052 0 0 0-7-2.522h-3v-4h3a11.053 11.053 0 0 0 7-2.522Z" id="megaphone"></path></svg>
        )
    },
    "message": {
        category: 'user interface',
        name: 'message',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.34 9.32-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78Z" id="message"></path></svg>
        )
    },
    "microphone": {
        category: 'user interface',
        name: 'microphone',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15a4 4 0 0 0 4-4V5a4 4 0 0 0-8 0v6a4 4 0 0 0 4 4ZM10 5a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0Zm10 6a1 1 0 0 0-2 0 6 6 0 0 1-12 0 1 1 0 0 0-2 0 8 8 0 0 0 7 7.93V21H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A8 8 0 0 0 20 11Z" id="microphone"></path></svg>
        )
    },
    "minus": {
        category: 'user interface',
        name: 'minus',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" id="minus"></path></svg>
        )
    },
    "minus-circle": {
        category: 'user interface',
        name: 'minus-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" id="minus-circle"></path></svg>
        )
    },
    "minus-square": {
        category: 'user interface',
        name: 'minus-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-4-8H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" id="minus-square"></path></svg>
        )
    },
    "minus-square-full": {
        category: 'user interface',
        name: 'minus-square-full',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 13h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H4V4h16Z" id="minus-square-full"></path></svg>
        )
    },
    "mobile-vibrate": {
        category: 'user interface',
        name: 'mobile-vibrate',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9.88 14.12 9.73 14l-.18-.1-.18-.05a1 1 0 0 0-.9.27.83.83 0 0 0-.22.33.94.94 0 0 0 0 .76 1.07 1.07 0 0 0 .54.54 1 1 0 0 0 .38.08 1.09 1.09 0 0 0 .39-.08.87.87 0 0 0 .32-.22 1 1 0 0 0 .22-.32 1 1 0 0 0 .07-.38.84.84 0 0 0-.08-.38.93.93 0 0 0-.21-.33ZM3.51 8.76a1 1 0 0 0 .71-.3l4.24-4.24a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0L2.81 7.05a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.3Zm17.68 6.78a1 1 0 0 0-1.41 0l-4.24 4.24a1 1 0 0 0 .7 1.71 1 1 0 0 0 .71-.3L21.19 17a1 1 0 0 0 0-1.46Zm.17-5.66a3 3 0 0 0-.87-2.12l-4.25-4.25a3.08 3.08 0 0 0-4.24 0L3.51 12a3 3 0 0 0 0 4.24l4.25 4.25a3 3 0 0 0 4.24 0L20.49 12a3 3 0 0 0 .87-2.12Zm-2.29.71-8.48 8.48a1 1 0 0 1-1.42 0l-4.24-4.24a1 1 0 0 1 0-1.42l8.48-8.48a1 1 0 0 1 1.42 0l4.24 4.24a1 1 0 0 1 0 1.42Z" id="mobile-vibrate"></path></svg>
        )
    },
    "money-bill-slash": {
        category: 'user interface',
        name: 'money-bill-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm5.86-1.55L4.71 2.29a1 1 0 0 0-1.42 1.42L4.59 5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14.59l2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Zm-.74 2.09 1.34 1.34A1 1 0 0 1 12 13a1 1 0 0 1-1-1 1 1 0 0 1 .12-.46ZM4 17a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.59l3.1 3.1A3 3 0 0 0 9 12a3 3 0 0 0 3 3 3 3 0 0 0 1.9-.69L16.59 17ZM20 5h-7.34a1 1 0 0 0 0 2H20a1 1 0 0 1 1 1v7.34a1 1 0 1 0 2 0V8a3 3 0 0 0-3-3Zm-1 7a1 1 0 1 0-1 1 1 1 0 0 0 1-1Z" id="money-bill-slash"></path></svg>
        )
    },
    "multiply": {
        category: 'user interface',
        name: 'multiply',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.41 12 6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" id="multiply"></path></svg>
        )
    },
    "newspaper": {
        category: 'user interface',
        name: 'newspaper',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-6-6h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Zm10-6H7a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h13a4 4 0 0 0 4-4V4a1 1 0 0 0-1-1ZM6 18a1 1 0 0 1-2 0V9h2Zm14-1a2 2 0 0 1-2 2H7.82A3 3 0 0 0 8 18V5h12Zm-9-4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Z" id="newspaper"></path></svg>
        )
    },
    "package": {
        category: 'user interface',
        name: 'package',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-9 2h4v3.13l-1.45-1a1 1 0 0 0-1.1 0l-1.45 1Zm10 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 .53.88 1 1 0 0 0 1-.05L12 8.2l2.45 1.63A1 1 0 0 0 16 9V4h3a1 1 0 0 1 1 1Z" id="package"></path></svg>
        )
    },
    "paperclip": {
        category: 'user interface',
        name: 'paperclip',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.08 12.42-6.18 6.19a4.25 4.25 0 0 1-6-6l8-8a2.57 2.57 0 0 1 3.54 0 2.52 2.52 0 0 1 0 3.54l-6.9 6.89A.75.75 0 1 1 9.42 14l5.13-5.12a1 1 0 0 0-1.42-1.42L8 12.6a2.74 2.74 0 0 0 0 3.89 2.82 2.82 0 0 0 3.89 0l6.89-6.9a4.5 4.5 0 0 0-6.36-6.36l-8 8A6.25 6.25 0 0 0 13.31 20l6.19-6.18a1 1 0 1 0-1.42-1.42Z" id="paperclip"></path></svg>
        )
    },
    "pen": {
        category: 'user interface',
        name: 'pen',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-.71-.29 1 1 0 0 0-.71.29l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8a1.19 1.19 0 0 0 .22-.33 1 1 0 0 0 0-.24.7.7 0 0 0 0-.14ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82Z" id="pen"></path></svg>
        )
    },
    "pizza-slice": {
        category: 'user interface',
        name: 'pizza-slice',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.51 12.48a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0-4.48a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm8.5-1.43a3 3 0 0 0-2.3-.29 2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.57 18.57 0 0 0 16.11-9.41 3 3 0 0 0-1.1-4.02ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-1-1 1 1 0 0 1 .3-.72A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37.9.9 0 0 1 .58-.44 1 1 0 0 1 .75.09 1 1 0 0 1 .42 1.33Z" id="pizza-slice"></path></svg>
        )
    },
    "plane": {
        category: 'user interface',
        name: 'plane',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.75 12a1 1 0 0 0-.55-.89l-6.12-3.06v-4a3.08 3.08 0 1 0-6.16 0v4L2.8 11.11a1 1 0 0 0-.55.89v3.33a1 1 0 0 0 .43.83 1 1 0 0 0 .92.11l5.32-2V18l-1.82.6a1 1 0 0 0-.68.95V22a1 1 0 0 0 .3.71 1 1 0 0 0 .7.29h9.17a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-.68-.95L15.08 18v-3.72l5.32 2a1 1 0 0 0 .92-.11 1 1 0 0 0 .43-.83Zm-7.31-.1a1 1 0 0 0-.93.11 1 1 0 0 0-.43.82v5.84a1 1 0 0 0 .69.95l1.81.6V21H8.41v-.78l1.81-.6a1 1 0 0 0 .69-.95v-5.84a1 1 0 0 0-.43-.82 1 1 0 0 0-.93-.11l-5.31 2v-1.28l6.11-3.06a1 1 0 0 0 .56-.89V4.08a1.08 1.08 0 1 1 2.16 0v4.59a1 1 0 0 0 .56.89l6.11 3.06v1.27Z" id="plane"></path></svg>
        )
    },
    "plane-arrival": {
        category: 'user interface',
        name: 'plane-arrival',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.12 16.23a5 5 0 0 0-2.3-3L16.71 12l-.48-5.47a1 1 0 0 0-.49-.78l-3-1.72a1 1 0 0 0-1 0 1 1 0 0 0-.52.84l-.15 3.9-1.75-1-2.86-3.85a1 1 0 0 0-1.78.41l-.87 4.61a3 3 0 0 0 1.39 3.29l14.06 8.11a1 1 0 0 0 1.36-.34 4.91 4.91 0 0 0 .5-3.77ZM19.24 18 6.2 10.5a1 1 0 0 1-.44-1.13l.46-2.44 1.66 2.2a1 1 0 0 0 .3.27l3.35 1.94a1 1 0 0 0 1.5-.83l.16-3.9 1.09.63.48 5.47a1 1 0 0 0 .5.78L17.82 15a2.91 2.91 0 0 1 1.36 1.78 2.74 2.74 0 0 1 .06 1.22Z" id="plane-arrival"></path></svg>
        )
    },
    "plane-departure": {
        category: 'user interface',
        name: 'plane-departure',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.08a3.08 3.08 0 0 0-5.26-2.18l-2.81 2.81-6.49-2.16a1 1 0 0 0-1 .24L4.06 6.15a1 1 0 0 0 .29 1.61l5.18 2.35-2.6 2.6-1.71-.86a1 1 0 0 0-1.16.15l-1.77 1.81a1 1 0 0 0 0 1.41l6.49 6.49a1 1 0 0 0 1.41 0L12 19.94a1 1 0 0 0 .19-1.16l-.86-1.71 2.6-2.6 2.35 5.18a1 1 0 0 0 1.61.29l2.36-2.36a1 1 0 0 0 .24-1l-2.16-6.49 2.77-2.83a3.05 3.05 0 0 0 .9-2.18Zm-2.32.77-3.24 3.24a1 1 0 0 0-.24 1l2.16 6.48-.9.9-2.35-5.17a1 1 0 0 0-.73-.57 1 1 0 0 0-.89.28l-4.12 4.16a1 1 0 0 0-.19 1.15L10 19l-.56.56-5.03-5.04L5 14l1.71.86a1 1 0 0 0 1.15-.19L12 10.51a1 1 0 0 0-.29-1.62L6.5 6.54l.9-.9 6.48 2.16a1 1 0 0 0 1-.24l3.24-3.24a1.07 1.07 0 0 1 1.53 0 1 1 0 0 1 .32.76 1.06 1.06 0 0 1-.29.77Z" id="plane-departure"></path></svg>
        )
    },
    "plane-fly": {
        category: 'user interface',
        name: 'plane-fly',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 9.32a1.06 1.06 0 0 0-.1-.76 4.93 4.93 0 0 0-6.75-1.8L14 8 9 5.65a1 1 0 0 0-.92 0l-3 1.73a1 1 0 0 0-.5.84 1 1 0 0 0 .46.87l3.3 2.08-1.74 1-4.78.58a1 1 0 0 0-.53 1.75l3.54 3.06a3 3 0 0 0 3.55.44L22.5 9.93a1 1 0 0 0 .5-.61Zm-15.53 7a1 1 0 0 1-1.2-.18l-1.9-1.63 2.73-.33a1 1 0 0 0 .38-.13l3.36-1.93a1 1 0 0 0 .5-.85 1 1 0 0 0-.47-.86l-3.3-2.09 1.1-.63 5 2.32a1 1 0 0 0 .92 0l2.56-1.48a3 3 0 0 1 3.36.29Z" id="plane-fly"></path></svg>
        )
    },
    "plug": {
        category: 'user interface',
        name: 'plug',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19 6h-3V3a1 1 0 0 0-2 0v3h-4V3a1 1 0 0 0-2 0v3H5a1 1 0 0 0 0 2h1v5a1 1 0 0 0 .29.71L9 16.41V21a1 1 0 0 0 2 0v-4h2v4a1 1 0 0 0 2 0v-4.59l2.71-2.7A1 1 0 0 0 18 13V8h1a1 1 0 0 0 0-2Zm-3 6.59L13.59 15h-3.18L8 12.59V8h8ZM11 13h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z" id="plug"></path></svg>
        )
    },
    "plus": {
        category: 'user interface',
        name: 'plus',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" id="plus"></path></svg>
        )
    },
    "plus-circle": {
        category: 'user interface',
        name: 'plus-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2Z" id="plus-circle"></path></svg>
        )
    },
    "plus-square": {
        category: 'user interface',
        name: 'plus-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 13h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H4V4h16Z" id="plus-square"></path></svg>
        )
    },
    "power": {
        category: 'user interface',
        name: 'power',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 13h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 18H4V4h16Z" id="plus-square"></path></svg>
        )
    },
    "print-slash": {
        category: 'user interface',
        name: 'print-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M7 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM3.71 2.29a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.59l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 15v1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l6 6H7a1 1 0 0 0-1 1Zm10 5H8v-4h6.59L16 17.41Zm3-14h-1V3a1 1 0 0 0-1-1H8.66a1 1 0 0 0 0 2H16v2h-3.34a1 1 0 0 0 0 2H19a1 1 0 0 1 1 1v6a.37.37 0 0 1 0 .11 1 1 0 0 0 .78 1.18h.2a1 1 0 0 0 1-.8A2.84 2.84 0 0 0 22 15V9a3 3 0 0 0-3-3Z" id="print-slash"></path></svg>
        )
    },
    "pump": {
        category: 'user interface',
        name: 'pump',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.54 6.29 19 4.75l-1.41-1.41a1 1 0 0 0-1.42 1.42l1 1-.83 2.49a3 3 0 0 0 .73 3.07l2.95 3V19a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H14V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3h1a1 1 0 0 1 1 1v2a3 3 0 0 0 6 0V9.83a5 5 0 0 0-1.46-3.54ZM12 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h8Zm0-9H4V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm8 1.42-1.54-1.54a1 1 0 0 1-.24-1l.51-1.54.39.4A3 3 0 0 1 20 9.83Z" id="pump"></path></svg>
        )
    },
    "question": {
        category: 'user interface',
        name: 'question',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1 1.503 1.503 0 0 1 1.3-.75 1.5 1.5 0 1 1 0 3h-.003a.95.95 0 0 0-.19.039 1.032 1.032 0 0 0-.198.04.983.983 0 0 0-.155.105 1.008 1.008 0 0 0-.162.11 1.005 1.005 0 0 0-.117.174.978.978 0 0 0-.097.144 1.023 1.023 0 0 0-.043.212.948.948 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.494 3.494 0 0 0 15.333 9.5Zm-4.203 6.79a1 1 0 0 0 .7 1.71 1.036 1.036 0 0 0 .71-.29 1.015 1.015 0 0 0 0-1.42 1.034 1.034 0 0 0-1.41 0Z" id="question"></path></svg>
        )
    },
    "question-circle": {
        category: 'user interface',
        name: 'question-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.29 15.29a1.58 1.58 0 0 0-.12.15.76.76 0 0 0-.09.18.64.64 0 0 0-.06.18 1.36 1.36 0 0 0 0 .2.84.84 0 0 0 .08.38.9.9 0 0 0 .54.54.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71 1 1 0 0 0-1.42 0ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2 1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7Z" id="question-circle"></path></svg>
        )
    },
    "redo": {
        category: 'user interface',
        name: 'redo',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11a1 1 0 0 0-1 1 8.05 8.05 0 1 1-2.22-5.5h-2.4a1 1 0 0 0 0 2h4.53a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1.77A10 10 0 1 0 22 12a1 1 0 0 0-1-1Z" id="redo"></path></svg>
        )
    },
    "refresh": {
        category: 'user interface',
        name: 'refresh',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.91 15.51h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0 10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99ZM15 12a3 3 0 1 0-3 3 3 3 0 0 0 3-3Zm-4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm1-10a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2Z" id="refresh"></path></svg>
        )
    },
    "restaurant": {
        category: 'user interface',
        name: 'restaurant',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.84 11.63a3 3 0 0 0 2.16-.88l2.83-2.83a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-2.86 2.82a1 1 0 0 1-1.42 0l3.54-3.53a1 1 0 1 0-1.42-1.42l-3.53 3.54a1 1 0 0 1 0-1.41l2.83-2.83a1 1 0 1 0-1.42-1.42L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.71.71 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.57.57 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a1 1 0 0 0-.11.17 1.07 1.07 0 0 0-.07.19s0 .07 0 .11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89Zm-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6Zm6.24.57A1 1 0 0 0 14 15.44l6.3 6.3a1 1 0 0 0 .7.26 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42Z" id="restaurant"></path></svg>
        )
    },
    "rocket": {
        category: 'user interface',
        name: 'rocket',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.601 2.062a1 1 0 0 0-.713-.713A11.252 11.252 0 0 0 10.47 4.972L9.354 6.296 6.75 5.668a2.777 2.777 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a13.42 13.42 0 0 0-.555 2.434 1 1 0 0 0 .284.836l3.1 3.1a1 1 0 0 0 .708.293.838.838 0 0 0 .086-.004 12.169 12.169 0 0 0 2.492-.49l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304l-.668-2.76 1.237-1.137A11.204 11.204 0 0 0 22.6 2.062ZM3.572 10.723l1.556-2.76a.826.826 0 0 1 1.07-.375l1.718.416-.65.772a13.095 13.095 0 0 0-1.59 2.398Zm12.47 8.222-2.715 1.532-.43-2.005a11.34 11.34 0 0 0 2.414-1.62l.743-.683.404 1.664a1.041 1.041 0 0 1-.416 1.112Zm1.615-6.965-3.685 3.386a9.773 9.773 0 0 1-5.17 2.304l-2.405-2.404a10.932 10.932 0 0 1 2.401-5.206l1.679-1.993a.964.964 0 0 0 .078-.092L11.99 6.27a9.278 9.278 0 0 1 8.81-3.12 9.218 9.218 0 0 1-3.143 8.829Zm-.923-6.164a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z" id="rocket"></path></svg>
        )
    },
    "rope-way": {
        category: 'user interface',
        name: 'rope-way',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.5h-6V4h4.62a1 1 0 0 0 0-2H6.38a1 1 0 1 0 0 2H11v2.5H5a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.5a3 3 0 0 0-3-3ZM11 20H5a1 1 0 0 1-1-1v-3.75h7a.5.5 0 0 0 0 .13v4.5a.53.53 0 0 0 0 .12Zm9-1a1 1 0 0 1-1 1h-6a.53.53 0 0 0 0-.12v-4.5a.5.5 0 0 0 0-.13h7Zm0-5.75H4V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" id="rope-way"></path></svg>
        )
    },
    "rotate-360": {
        category: 'user interface',
        name: 'rotate-360',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6C6.3 6 2 8.15 2 11c0 2.45 3.19 4.38 7.71 4.88l-.42.41a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-2-2a1 1 0 0 0-1.42 1.42l.12.11C6 13.34 4 12 4 11c0-1.22 3.12-3 8-3s8 1.78 8 3c0 .83-1.45 2-4.21 2.6a1 1 0 0 0-.79 1.19 1 1 0 0 0 1.19.77c3.65-.8 5.81-2.5 5.81-4.56 0-2.85-4.3-5-10-5Z" id="rotate-360"></path></svg>
        )
    },
    "rss": {
        category: 'user interface',
        name: 'rss',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.88 16.88a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0 3 3 0 0 0-4.24-4.24Zm2.83 2.83a1 1 0 0 1-1.42-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42ZM5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7Zm0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0 11.08 11.08 0 0 0-3.22-7.78A11.08 11.08 0 0 0 5 8Zm10.61.39A15.11 15.11 0 0 0 5 4a1 1 0 0 0 0 2 13 13 0 0 1 13 13 1 1 0 0 0 2 0 15.11 15.11 0 0 0-4.39-10.61Z" id="rss"></path></svg>
        )
    },
    "save": {
        category: 'user interface',
        name: 'save',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4Z" id="save"></path></svg>
        )
    },
    "search": {
        category: 'user interface',
        name: 'search',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z" id="search"></path></svg>
        )
    },
    "search-alt": {
        category: 'user interface',
        name: 'search-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.07 16.83 19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08 5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z" id="search-alt"></path></svg>
        )
    },
    "search-minus": {
        category: 'user interface',
        name: 'search-minus',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm4-8H7a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" id="search-minus"></path></svg>
        )
    },
    "search-plus": {
        category: 'user interface',
        name: 'search-plus',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 10h-3V7a1 1 0 0 0-2 0v3H7a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2Zm6.71 10.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z" id="search-plus"></path></svg>
        )
    },
    "setting": {
        category: 'user interface',
        name: 'setting',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" id="setting"></path></svg>
        )
    },
    "share-alt": {
        category: 'user interface',
        name: 'share-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 14a4 4 0 0 0-3.08 1.48l-5.1-2.35a3.64 3.64 0 0 0 0-2.26l5.1-2.35A4 4 0 1 0 14 6a4.17 4.17 0 0 0 .07.71L8.79 9.14a4 4 0 1 0 0 5.72l5.28 2.43A4.17 4.17 0 0 0 14 18a4 4 0 1 0 4-4Zm0-10a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm12 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" id="share-alt"></path></svg>
        )
    },
    "sign-in-alt": {
        category: 'user interface',
        name: 'sign-in-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 15.1a1 1 0 0 0-1.34.45A8 8 0 1 1 12 4a7.93 7.93 0 0 1 7.16 4.45 1 1 0 0 0 1.8-.9 10 10 0 1 0 0 8.9 1 1 0 0 0-.46-1.35ZM21 11h-9.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L11.41 13H21a1 1 0 0 0 0-2Z" id="sign-in-alt"></path></svg>
        )
    },
    "sign-out-alt": {
        category: 'user interface',
        name: 'sign-out-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12.59 13-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 0 0 0 2ZM12 2a10 10 0 0 0-9 5.55 1 1 0 0 0 1.8.9A8 8 0 1 1 12 20a7.93 7.93 0 0 1-7.16-4.45 1 1 0 0 0-1.8.9A10 10 0 1 0 12 2Z" id="sign-out-alt"></path></svg>
        )
    },
    "signal": {
        category: 'user interface',
        name: 'signal',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 15a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1Zm4-3a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm8-8a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Zm-4 4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" id="signal"></path></svg>
        )
    },
    "signal-alt": {
        category: 'user interface',
        name: 'signal-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 14a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm-5 4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1ZM20 2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm-5 7a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V10a1 1 0 0 0-1-1Z" id="signal-alt"></path></svg>
        )
    },
    "signin": {
        category: 'user interface',
        name: 'signin',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 12a1 1 0 0 0-1-1h-7.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L11.41 13H19a1 1 0 0 0 1-1ZM17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3Z" id="signin"></path></svg>
        )
    },
    "signout": {
        category: 'user interface',
        name: 'signout',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1ZM17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" id="signout"></path></svg>
        )
    },
    "sim-card": {
        category: 'user interface',
        name: 'sim-card',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5Zm-6.5 2h3v3h-3Zm-2 13H7A1.5 1.5 0 0 1 5.5 17v-1.5h3Zm5 0h-3v-3h3Zm5-1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v-3h3Zm0-3.5h-13V7A1.5 1.5 0 0 1 7 5.5h1.5v4a1 1 0 0 0 1 1h9Zm0-5h-3v-3H17A1.5 1.5 0 0 1 18.5 7Z" id="sim-card"></path></svg>
        )
    },
    "space-key": {
        category: 'user interface',
        name: 'space-key',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 9a1 1 0 0 0-1 1v3H4v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" id="space-key"></path></svg>
        )
    },
    "spinner": {
        category: 'user interface',
        name: 'spinner',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.1 16c-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4.5-.3.6-.9.4-1.4zm-.4-9.4c-.5-.2-1.1-.1-1.4.4-.2.5-.1 1.1.4 1.4.5.2 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm15.6 1.8c.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4zM4 12c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm3.2 6.8c-.5.1-.9.7-.7 1.2.1.5.7.9 1.2.7.5-.1.9-.7.7-1.2-.1-.5-.6-.8-1.2-.7zM21 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-.7 4.6c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zM17 3.3c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm-.2 15.5c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.1-.5-.2-1-.7-1.2zM12 20c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-18c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" id="spinner"></path></svg>
        )
    },
    "spinner-alt": {
        category: 'user interface',
        name: 'spinner-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M6.804 15a1 1 0 0 0-1.366-.366l-1.732 1a1 1 0 0 0 1 1.732l1.732-1A1 1 0 0 0 6.804 15ZM3.706 8.366l1.732 1a1 1 0 1 0 1-1.732l-1.732-1a1 1 0 0 0-1 1.732ZM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm11.196-3a1 1 0 0 0 1.366.366l1.732-1a1 1 0 1 0-1-1.732l-1.732 1A1 1 0 0 0 17.196 9ZM15 6.804a1 1 0 0 0 1.366-.366l1-1.732a1 1 0 1 0-1.732-1l-1 1.732A1 1 0 0 0 15 6.804Zm5.294 8.83-1.732-1a1 1 0 1 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732Zm-3.928 1.928a1 1 0 1 0-1.732 1l1 1.732a1 1 0 1 0 1.732-1ZM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm-9 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm-3-.804a1 1 0 0 0-1.366.366l-1 1.732a1 1 0 0 0 1.732 1l1-1.732A1 1 0 0 0 9 17.196ZM12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z" id="spinner-alt"></path></svg>
        )
    },
    "star-half-alt": {
        category: 'user interface',
        name: 'star-half-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67 5.1 2.67a.93.93 0 0 0 .46.12 1 1 0 0 0 .59-.19 1 1 0 0 0 .4-1l-1-5.68 4.13-4A1 1 0 0 0 22 9.67ZM11 17l-3.23 1.7.72-4.2a1 1 0 0 0-.29-.88l-3-3 4.21-.61a1 1 0 0 0 .76-.55L11 7.73Zm4.8-3.38a1 1 0 0 0-.29.88l.72 4.2L13 17V7.73l.88 1.79a1 1 0 0 0 .76.55l4.21.61Z" id="star-half-alt"></path></svg>
        )
    },
    "streering": {
        category: 'user interface',
        name: 'streering',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm9.71-2.36a10 10 0 0 0-19.4 0 9.75 9.75 0 0 0 0 4.72 10 10 0 0 0 7.3 7.34 9.67 9.67 0 0 0 4.7 0 10 10 0 0 0 7.31-7.31 9.75 9.75 0 0 0 0-4.72ZM12 4a8 8 0 0 1 7.41 5H4.59A8 8 0 0 1 12 4Zm-8 8a8.26 8.26 0 0 1 .07-1H6v2H4.07A8.26 8.26 0 0 1 4 12Zm5 7.41A8 8 0 0 1 4.59 15H7a2 2 0 0 1 2 2Zm4 .52a8.26 8.26 0 0 1-1 .07 8.26 8.26 0 0 1-1-.07V18h2Zm.14-3.93h-2.28A4 4 0 0 0 8 13.14V11h8v2.14A4 4 0 0 0 13.14 16ZM15 19.41V17a2 2 0 0 1 2-2h2.41A8 8 0 0 1 15 19.41ZM19.93 13H18v-2h1.93a8.26 8.26 0 0 1 .07 1 8.26 8.26 0 0 1-.07 1Z" id="streering"></path></svg>
        )
    },
    "sun": {
        category: 'user interface',
        name: 'sun',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m5.64 17-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" id="sun"></path></svg>
        )
    },
    "swatchbook": {
        category: 'user interface',
        name: 'swatchbook',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12.06-4 1.23-1.23a3 3 0 0 0 0-4.24l-2.83-2.82a3 3 0 0 0-4.24 0L12 4.94A3 3 0 0 0 9 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-2.94-3ZM10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm2-11.24 2.64-2.64a1 1 0 0 1 1.41 0L18.88 8a1 1 0 0 1 0 1.41L16 12.29l-4 3.95ZM20 19a1 1 0 0 1-1 1h-7.18a3.12 3.12 0 0 0 .17-.92L17.07 14H19a1 1 0 0 1 1 1Z" id="swatchbook"></path></svg>
        )
    },
    "swimmer": {
        category: 'user interface',
        name: 'swimmer',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17 9.28a2 2 0 1 0-2-2 2 2 0 0 0 2 2ZM2.71 13.92a3 3 0 0 1 .57.25 4.06 4.06 0 0 0 4.1 0 2.62 2.62 0 0 1 2.56 0l.21.1a4.14 4.14 0 0 0 3.87-.13 2.62 2.62 0 0 1 2.56 0 4.25 4.25 0 0 0 2.08.56 4 4 0 0 0 2-.56 3 3 0 0 1 .57-.25 1 1 0 1 0-.52-1.89 4.82 4.82 0 0 0-1 .44 2.1 2.1 0 0 1-2.1 0 4.62 4.62 0 0 0-4.54 0 2.52 2.52 0 0 1-.29.12L14.34 11a.75.75 0 0 0 .09-.15 1 1 0 0 0 .12-.16 1.29 1.29 0 0 0 0-.19 1.06 1.06 0 0 0 0-.19 1.13 1.13 0 0 0 0-.18 1.06 1.06 0 0 0 0-.19 1.51 1.51 0 0 0-.1-.17.7.7 0 0 0-.1-.16l-3.07-3.33a1.1 1.1 0 0 0-.28-.22.8.8 0 0 0-.21 0 .53.53 0 0 0-.17 0A.89.89 0 0 0 10.2 6L6.66 7.32a1 1 0 0 0-.6 1.28 1 1 0 0 0 1.28.6l2.93-1.07 2 2.12-1.9 1.9a4.62 4.62 0 0 0-3.94.28 2.1 2.1 0 0 1-2.1 0 4.82 4.82 0 0 0-1-.44 1 1 0 1 0-.58 1.91Zm18 3.09a4.82 4.82 0 0 0-1 .44 2.1 2.1 0 0 1-2.1 0 4.62 4.62 0 0 0-4.54 0 2.11 2.11 0 0 1-2.12 0 4.62 4.62 0 0 0-4.54 0 2.1 2.1 0 0 1-2.1 0 4.82 4.82 0 0 0-1-.44 1 1 0 1 0-.58 1.91 3 3 0 0 1 .57.25 4.06 4.06 0 0 0 4.1 0 2.62 2.62 0 0 1 2.56 0 4.15 4.15 0 0 0 4.12 0 2.62 2.62 0 0 1 2.56 0 4.25 4.25 0 0 0 2.08.56 4 4 0 0 0 2-.56 3 3 0 0 1 .57-.25 1 1 0 1 0-.58-1.92Z" id="swimmer"></path></svg>
        )
    },
    "sync": {
        category: 'user interface',
        name: 'sync',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.91 15.51h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0 10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99ZM12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2Z" id="sync"></path></svg>
        )
    },
    "sync-exclamation": {
        category: 'user interface',
        name: 'sync-exclamation',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.29 15.71A1 1 0 0 0 13 15a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21 1 1 0 0 0-.33.21A1.05 1.05 0 0 0 11 15a1 1 0 0 0 .29.71Zm8.62-.2h-4.53a1 1 0 0 0 0 2h2.4A8 8 0 0 1 4 12a1 1 0 0 0-2 0 10 10 0 0 0 16.88 7.23V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-.97-.99ZM12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4A8 8 0 0 1 20 12a1 1 0 0 0 2 0A10 10 0 0 0 12 2Zm0 11a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z" id="sync-exclamation"></path></svg>
        )
    },
    "sync-slash": {
        category: 'user interface',
        name: 'sync-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.88 15.5h-4.5a1 1 0 0 0 0 2h2.4A8 8 0 0 1 12 20a8.08 8.08 0 0 1-3.12-.63l-1.49 1.49A9.83 9.83 0 0 0 12 22a10 10 0 0 0 6.88-2.77V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1Zm-1.57-8.4 1.43-1.43 2-2a1 1 0 1 0-1.42-1.42l-2 2A9.89 9.89 0 0 0 12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2h-2.4a7.93 7.93 0 0 1 10.67-.81l-11.2 11.2A7.93 7.93 0 0 1 4 12a1 1 0 0 0-2 0 9.89 9.89 0 0 0 2.27 6.32l-2 2a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2-2 1.43-1.43Zm1.06 1.78A8.08 8.08 0 0 1 20 12a1 1 0 0 0 2 0 9.83 9.83 0 0 0-1.14-4.61Z" id="sync-slash"></path></svg>
        )
    },
    "tachometer-fast": {
        category: 'user interface',
        name: 'tachometer-fast',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15.29 10.29-2.78 2.78A2.09 2.09 0 0 0 12 13a2 2 0 0 0-2 2 2.09 2.09 0 0 0 .07.51l-.78.78a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l.78-.78A2.09 2.09 0 0 0 12 17a2 2 0 0 0 2-2 2.09 2.09 0 0 0-.07-.51l2.78-2.78a1 1 0 0 0-1.42-1.42ZM12 4A10 10 0 0 0 2 14a9.91 9.91 0 0 0 1.69 5.56 1 1 0 0 0 1.66-1.12 8 8 0 1 1 13.3 0 1 1 0 0 0 .27 1.39 1 1 0 0 0 .56.17 1 1 0 0 0 .83-.44A9.91 9.91 0 0 0 22 14 10 10 0 0 0 12 4Z" id="tachometer-fast"></path></svg>
        )
    },
    "tachometer-fast-alt": {
        category: 'user interface',
        name: 'tachometer-fast-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 5a10 10 0 0 0-8.66 15 1 1 0 0 0 1.74-1A7.92 7.92 0 0 1 4 15a8 8 0 1 1 14.93 4 1 1 0 0 0 .37 1.37 1 1 0 0 0 1.36-.37A10 10 0 0 0 12 5Zm2.84 5.76-1.55 1.54A2.91 2.91 0 0 0 12 12a3 3 0 1 0 3 3 2.9 2.9 0 0 0-.3-1.28l1.55-1.54a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0ZM12 16a1 1 0 0 1 0-2 1 1 0 0 1 .7.28 1 1 0 0 1 .3.72 1 1 0 0 1-1 1Z" id="tachometer-fast-alt"></path></svg>
        )
    },
    "tear": {
        category: 'user interface',
        name: 'tear',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12.56 2.17a1 1 0 0 0-1.12 0c-.3.2-7.19 5-7.19 12.08a7.75 7.75 0 0 0 15.5 0c0-7.2-6.9-11.89-7.19-12.08ZM12 20a5.76 5.76 0 0 1-5.75-5.75c0-5 4.21-8.77 5.75-10 1.55 1.21 5.75 5 5.75 10A5.76 5.76 0 0 1 12 20Z" id="tear"></path></svg>
        )
    },
    "thumbs-down": {
        category: 'user interface',
        name: 'thumbs-down',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm-4 11.79-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36 1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z" id="thumbs-down"></path></svg>
        )
    },
    "thumbs-up": {
        category: 'user interface',
        name: 'thumbs-up',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46ZM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36 1 1 0 0 1 .23.82Z" id="thumbs-up"></path></svg>
        )
    },
    "times": {
        category: 'user interface',
        name: 'times',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" id="times"></path></svg>
        )
    },
    "times-circle": {
        category: 'user interface',
        name: 'times-circle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42Zm3.36-3.36A10 10 0 1 0 4.93 19.07 10 10 0 1 0 19.07 4.93Zm-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66Z" id="times-circle"></path></svg>
        )
    },
    "times-square": {
        category: 'user interface',
        name: 'times-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42ZM19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" id="times-square"></path></svg>
        )
    },
    "toggle-off": {
        category: 'user interface',
        name: 'toggle-off',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 8 8.5Zm0 5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 13.5ZM16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14Zm0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10Z" id="toggle-off"></path></svg>
        )
    },
    "toggle-on": {
        category: 'user interface',
        name: 'toggle-on',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14Zm0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10Z" id="toggle-on"></path></svg>
        )
    },
    "traffic-light": {
        category: 'user interface',
        name: 'traffic-light',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.5A1.5 1.5 0 1 0 13.5 7 1.5 1.5 0 0 0 12 5.5Zm10 3h-.54a6 6 0 0 0 1.54-4 1 1 0 0 0-1-1h-4.18a3 3 0 0 0-2.82-2H9a3 3 0 0 0-2.82 2H2a1 1 0 0 0-1 1 6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1 6 6 0 0 0 1.54 4H2a1 1 0 0 0-1 1 6 6 0 0 0 5.16 5.93A3 3 0 0 0 9 22.5h6a3 3 0 0 0 2.84-2.07A6 6 0 0 0 23 14.5a1 1 0 0 0-1-1h-.54a6 6 0 0 0 1.54-4 1 1 0 0 0-1-1ZM6 18.37a4 4 0 0 1-2.87-2.87H6Zm0-5a4 4 0 0 1-2.87-2.87H6Zm0-5a4.09 4.09 0 0 1-1.83-1 4.09 4.09 0 0 1-1-1.83H6ZM16 19.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm3.83-2.17a4.09 4.09 0 0 1-1.83 1V15.5h2.87a4.09 4.09 0 0 1-1.04 1.83Zm0-5a4.09 4.09 0 0 1-1.83 1V10.5h2.87a4.09 4.09 0 0 1-1.04 1.83Zm0-5a4.09 4.09 0 0 1-1.83 1V5.5h2.87a4.09 4.09 0 0 1-1.04 1.83ZM12 15.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z" id="traffic-light"></path></svg>
        )
    },
    "trash": {
        category: 'user interface',
        name: 'trash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Z" id="trash"></path></svg>
        )
    },
    "trash-alt": {
        category: 'user interface',
        name: 'trash-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" id="trash-alt"></path></svg>
        )
    },
    "trees": {
        category: 'user interface',
        name: 'trees',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 5a4.86 4.86 0 0 0-2.5.69A6 6 0 0 0 2.5 8v4a6 6 0 0 0 5 5.91V21a1 1 0 0 0 2 0v-3.09a6.08 6.08 0 0 0 2.78-1.26 5 5 0 0 0 3.22 2.25V21a1 1 0 0 0 2 0v-2.1a5 5 0 0 0 4-4.9v-4a5 5 0 0 0-5-5Zm-5 5v4a5.23 5.23 0 0 0 .06.57 4 4 0 0 1-2.06 1.3V13a1 1 0 0 0-2 0v2.86a4 4 0 0 1-3-3.86V8a4 4 0 0 1 6.83-2.84 3.94 3.94 0 0 1 1.06 2A5 5 0 0 0 11.5 10Zm8 4a3 3 0 0 1-2 2.82V13a1 1 0 0 0-2 0v3.82a3 3 0 0 1-2-2.82v-4a3 3 0 0 1 6 0Z" id="trees"></path></svg>
        )
    },
    "tv-retro": {
        category: 'user interface',
        name: 'tv-retro',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.54l-1.17-2a1 1 0 1 0-1.74 1L10 6H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1Z" id="tv-retro"></path></svg>
        )
    },
    "tv-retro-slash": {
        category: 'user interface',
        name: 'tv-retro-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.62 7.92A1 1 0 0 0 12 8h6a1 1 0 0 1 1 1v5.34a1 1 0 1 0 2 0V9a3 3 0 0 0-3-3h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .54.54Zm10.09 12.37-18-18a1 1 0 0 0-1.42 1.42l2.54 2.53A3 3 0 0 0 3 9v8a3 3 0 0 0 3 3v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1a3.07 3.07 0 0 0 .53-.06l1.76 1.77a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM6 18a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h.59l10 10Z" id="tv-retro-slash"></path></svg>
        )
    },
    "tumbrella": {
        category: 'user interface',
        name: 'umbrella',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.24a.22.22 0 0 1 0-.08v-.19c0-.23-.06-.46-.1-.69a.75.75 0 0 1 0-.16c-.05-.25-.12-.49-.19-.73a8.91 8.91 0 0 0-5.86-5.87h-.08c-.22-.07-.45-.13-.68-.18h-.18a5.21 5.21 0 0 0-.55-.08h-.24V3a1 1 0 0 0-2 0v.06a8.7 8.7 0 0 0-1 .18 4.71 4.71 0 0 0-.62.16h-.13c-.25.08-.48.17-.72.26a8.93 8.93 0 0 0-5.23 5.62.31.31 0 0 0 0 .08 6.38 6.38 0 0 0-.19.72v.16q-.08.36-.12.75s0 .07 0 .11v.9a1 1 0 0 0 1 1h7v6a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0v-6h7a1 1 0 0 0 1-1c-.11-.26-.11-.51-.11-.76ZM8 11H5.08v-.11c0-.04 0-.28.08-.41s0-.13 0-.19.08-.32.13-.48v-.08A7 7 0 0 1 9.1 5.64 16.09 16.09 0 0 0 8 11Zm2 0c.19-3.91 1.44-6 2-6s1.79 2.09 2 6Zm6 0a16.09 16.09 0 0 0-1.1-5.36 7 7 0 0 1 3.73 4.12 4.61 4.61 0 0 1 .15.53.83.83 0 0 0 0 .15c0 .14.06.29.08.43s0 .07 0 .11Z" id="umbrella"></path></svg>
        )
    },
    "upload": {
        category: 'user interface',
        name: 'upload',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.71 7.71 11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42ZM21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Z" id="upload"></path></svg>
        )
    },
    "utensils": {
        category: 'user interface',
        name: 'utensils',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L15 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 20 9V3a1 1 0 0 0-1-1ZM9 2a5 5 0 0 0-5 5v6a1 1 0 0 0 1 1h3v7a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1ZM8 12H6V7a3 3 0 0 1 2-2.83Z" id="utensils"></path></svg>
        )
    },
    "utensils-alt": {
        category: 'user interface',
        name: 'utensils-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.53 14.13a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l6.18 6.18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41Zm1.23-2.49a3 3 0 0 0 2.12-.88l2.83-2.83a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-2.83 2.83a1 1 0 0 1-1.41 0l3.54-3.54a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0l-3.53 3.53a1 1 0 0 1 0-1.41l2.82-2.83a1 1 0 1 0-1.41-1.41l-2.83 2.83a3 3 0 0 0 0 4.24L12 10.59l-1.56-1.54a4.16 4.16 0 0 0-.74-5C8.26 2.61 4.53 1 2.77 2.79S2.6 8.27 4 9.72A4.36 4.36 0 0 0 6.94 11h.14A3.88 3.88 0 0 0 9 10.46L10.57 12l-8.28 8.28a1 1 0 1 0 1.42 1.41l9-9 1.92-1.92a3 3 0 0 0 2.13.87Zm-8.33-3.2A1.93 1.93 0 0 1 7 9a2.26 2.26 0 0 1-1.54-.7C4.38 7.22 3.62 4.77 4.19 4.2a1 1 0 0 1 .66-.2 5.87 5.87 0 0 1 3.44 1.47 2.12 2.12 0 0 1 .14 2.97Z" id="utensils-alt"></path></svg>
        )
    },
    "video-slash": {
        category: 'user interface',
        name: 'video-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m7.71 6.29-4-4a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h9a3 3 0 0 0 1.9-.69l4.39 4.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM14 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l7.87 7.88A1 1 0 0 1 14 16Zm7.53-8.85a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6h-1.34a1 1 0 0 0 0 2H14a1 1 0 0 1 1 1v1.5a1.62 1.62 0 0 0 0 .19.65.65 0 0 0 .05.2s.05.06.07.1a1 1 0 0 0 .15.21s.1.06.15.1l.17.11a.85.85 0 0 0 .23 0 .7.7 0 0 0 .14 0 1.62 1.62 0 0 0 .19 0 .65.65 0 0 0 .2-.05L20 9.62v5.72a1 1 0 1 0 2 0V8a1 1 0 0 0-.47-.85Z" id="video-slash"></path></svg>
        )
    },
    "voicemail": {
        category: 'user interface',
        name: 'voicemail',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8ZM6 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm12 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" id="voicemail"></path></svg>
        )
    },
    "voicemail-rectangle": {
        category: 'user interface',
        name: 'voicemail-rectangle',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-5-8a3 3 0 0 0-2.82 4h-2.36A3 3 0 1 0 8 15h8a3 3 0 0 0 0-6Zm-8 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" id="voicemail-rectangle"></path></svg>
        )
    },
    "volume": {
        category: 'user interface',
        name: 'volume',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08Zm8.66-10.58a1 1 0 0 0-1.42 1.42 6 6 0 0 1-.38 8.84 1 1 0 0 0 .64 1.76 1 1 0 0 0 .64-.23 8 8 0 0 0 .52-11.79Zm-2.83 2.83a1 1 0 1 0-1.42 1.42A2 2 0 0 1 16 12a2 2 0 0 1-.71 1.53 1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.12A4 4 0 0 0 18 12a4.06 4.06 0 0 0-1.17-2.83Z" id="volume"></path></svg>
        )
    },
    "volume-down": {
        category: 'user interface',
        name: 'volume-down',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.83 9.17a1 1 0 1 0-1.42 1.42A2 2 0 0 1 18 12a2 2 0 0 1-.71 1.53 1 1 0 0 0-.13 1.41 1 1 0 0 0 1.41.12A4 4 0 0 0 20 12a4.06 4.06 0 0 0-1.17-2.83Zm-4.4-5.07a1 1 0 0 0-1 .12L8.65 8H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 14 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 15 19V5a1 1 0 0 0-.57-.9ZM13 16.92l-3.38-2.7A1 1 0 0 0 9 14H6v-4h3a1 1 0 0 0 .62-.22L13 7.08Z" id="volume-down"></path></svg>
        )
    },
    "volume-mute": {
        category: 'user interface',
        name: 'volume-mute',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08ZM19.91 12l1.8-1.79a1 1 0 0 0-1.42-1.42l-1.79 1.8-1.79-1.8a1 1 0 0 0-1.42 1.42l1.8 1.79-1.8 1.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.79-1.8 1.79 1.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" id="volume-mute"></path></svg>
        )
    },
    "volume-off": {
        category: 'user interface',
        name: 'volume-off',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.93 4.1a1 1 0 0 0-1 .12L11.15 8H7.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78a1 1 0 0 0 .62.22.91.91 0 0 0 .43-.1 1 1 0 0 0 .57-.9V5a1 1 0 0 0-.57-.9ZM15.5 16.92l-3.38-2.7a1 1 0 0 0-.62-.22h-3v-4h3a1 1 0 0 0 .62-.22l3.38-2.7Z" id="volume-off"></path></svg>
        )
    },
    "volume-up": {
        category: 'user interface',
        name: 'volume-up',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.91.91 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9ZM11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08Zm4.14-12.83a1 1 0 1 0-.28 2 6 6 0 0 1 0 11.86 1 1 0 0 0 .14 2h.14a8 8 0 0 0 0-15.82Zm-.46 9.78a1 1 0 0 0 .32 2 1.13 1.13 0 0 0 .32-.05 4 4 0 0 0 0-7.54 1 1 0 0 0-.64 1.9 2 2 0 0 1 0 3.74Z" id="volume-up"></path></svg>
        )
    },
    "wallet": {
        category: 'user interface',
        name: 'wallet',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z" id="wallet"></path></svg>
        )
    },
    "water-drop-slash": {
        category: 'user interface',
        name: 'water-drop-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.71 20.29-18-18a1 1 0 0 0-1.42 1.42l4 4a12.46 12.46 0 0 0-2 6.57A7.76 7.76 0 0 0 12 22a7.64 7.64 0 0 0 5.87-2.71l2.42 2.42a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 20a5.76 5.76 0 0 1-5.75-5.75 10.3 10.3 0 0 1 1.47-5.11l8.74 8.73A5.67 5.67 0 0 1 12 20ZM10.85 5.24c.45-.42.85-.75 1.15-1 1.43 1.12 5.13 4.43 5.68 8.88a1 1 0 0 0 1 .88h.12a1 1 0 0 0 .87-1.11c-.78-6.43-6.85-10.55-7.1-10.72a1 1 0 0 0-1.12 0 18.73 18.73 0 0 0-1.96 1.61 1 1 0 0 0 1.36 1.46Z" id="water-drop-slash"></path></svg>
        )
    },
    "water-glass": {
        category: 'user interface',
        name: 'water-glass',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.08 7a1 1 0 0 0-1.08.92l-.35 4.55a2.67 2.67 0 0 1-1.2-.77 1 1 0 0 0-1.5 0 2.65 2.65 0 0 1-3.9 0 1 1 0 0 0-1.5 0 2.7 2.7 0 0 1-1.2.77L7 7.92A1 1 0 0 0 5.92 7 1 1 0 0 0 5 8.08l.86 11.15a3 3 0 0 0 3 2.77h6.3a3 3 0 0 0 3-2.77L19 8.08A1 1 0 0 0 18.08 7Zm-1.94 12.08a1 1 0 0 1-1 .92H8.85a1 1 0 0 1-1-.92L7.5 14.5a4.77 4.77 0 0 0 1.8-.79 4.66 4.66 0 0 0 5.4 0 4.77 4.77 0 0 0 1.8.79ZM12 10a3.26 3.26 0 0 0 3.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1 1 0 0 0-1.12 0c-.11.08-2.69 1.83-2.69 4.58A3.26 3.26 0 0 0 12 10Zm0-5.7a3.61 3.61 0 0 1 1.25 2.45 1.25 1.25 0 0 1-2.5 0A3.66 3.66 0 0 1 12 4.3Z" id="water-glass"></path></svg>
        )
    },
    "wifi": {
        category: 'user interface',
        name: 'wifi',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-8a7.06 7.06 0 0 0-4.95 2.05 1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0 5 5 0 0 1 7.08 0 1 1 0 0 0 .7.3 1 1 0 0 0 .76-1.71A7.06 7.06 0 0 0 12 11Zm0-4a11.08 11.08 0 0 0-7.78 3.22 1 1 0 0 0 1.42 1.42 9 9 0 0 1 12.72 0 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42A11.08 11.08 0 0 0 12 7Zm10.61.39a15 15 0 0 0-21.22 0 1 1 0 0 0 1.42 1.42 13 13 0 0 1 18.38 0 1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" id="wifi"></path></svg>
        )
    },
    "wifi-slash": {
        category: 'user interface',
        name: 'wifi-slash',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.92 5.51 3.71 2.29a1 1 0 0 0-1.42 1.42L4.56 6A15.21 15.21 0 0 0 1.4 8.39a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .7-.29 13.07 13.07 0 0 1 3.24-2.35L7.54 9a10.78 10.78 0 0 0-3.32 2.27 1 1 0 1 0 1.42 1.4 8.8 8.8 0 0 1 3.45-2.12l1.62 1.61a7.07 7.07 0 0 0-3.66 1.94 1 1 0 1 0 1.42 1.4A5 5 0 0 1 12 14a4.13 4.13 0 0 1 .63.05l7.66 7.66a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM22.61 8.39A15 15 0 0 0 10.29 4.1a1 1 0 1 0 .22 2A13.07 13.07 0 0 1 21.2 9.81a1 1 0 0 0 1.41-1.42Zm-4.25 4.24a1 1 0 0 0 1.42-1.4 10.75 10.75 0 0 0-4.84-2.82 1 1 0 1 0-.52 1.92 8.94 8.94 0 0 1 3.94 2.3Z" id="wifi-slash"></path></svg>
        )
    },
    "wrench": {
        category: 'user interface',
        name: 'wrench',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.71 15.58-4.52-4.51a6.85 6.85 0 0 0 .14-1.4A7.67 7.67 0 0 0 6.42 2.72a1 1 0 0 0-.57.74 1 1 0 0 0 .28.88l4.35 4.34-1.8 1.8-4.34-4.35a1 1 0 0 0-.88-.27 1 1 0 0 0-.74.56 7.67 7.67 0 0 0 7 10.91 6.85 6.85 0 0 0 1.4-.14l4.51 4.52a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4.9-4.9a1 1 0 0 0-.95-.26 5.88 5.88 0 0 1-1.48.2A5.67 5.67 0 0 1 4 9.67a6 6 0 0 1 .08-1L8 12.6a1 1 0 0 0 1.42 0l3.18-3.21a1 1 0 0 0 0-1.39L8.71 4.08a6.12 6.12 0 0 1 1-.08 5.67 5.67 0 0 1 5.66 5.67 5.88 5.88 0 0 1-.2 1.48 1 1 0 0 0 .26.95l4.9 4.9a1 1 0 0 0 1.42-1.42Z" id="wrench"></path></svg>
        )
    },
    "x": {
        category: 'user interface',
        name: 'x',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z" id="x"></path></svg>
        )
    },
    "x-add": {
        category: 'user interface',
        name: 'x-add',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42ZM7 18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2ZM18 7v6a1 1 0 0 0 2 0V7a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3Zm3 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z" id="x-add"></path></svg>
        )
    },
    "yin-yang": {
        category: 'user interface',
        name: 'yin-yang',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 15.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM12 2a5.545 5.545 0 0 0-.562.029A9.993 9.993 0 0 0 12 22a5.545 5.545 0 0 0 .562-.029A9.993 9.993 0 0 0 12 2Zm0 18A7.989 7.989 0 0 1 6.71 6.015 5.484 5.484 0 0 0 12 13a3.5 3.5 0 0 1 0 7Zm5.29-2.015A5.484 5.484 0 0 0 12 11a3.5 3.5 0 0 1 0-7 7.989 7.989 0 0 1 5.29 13.985ZM12 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" id="yin-yang"></path></svg>
        )
    },

    "500px": {
        category: 'brand logo',
        name: '500px',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M7 15.14a1.41 1.41 0 0 0 .17.44 6.28 6.28 0 0 0 1.39 2.08 6.67 6.67 0 0 0 2.09 1.4 6.21 6.21 0 0 0 2.54.52 6.29 6.29 0 0 0 2.55-.52 6.63 6.63 0 0 0 2.08-1.4 6.39 6.39 0 0 0 1.41-2.08 6.55 6.55 0 0 0 .46-2.58 6.76 6.76 0 0 0-.51-2.56 6.35 6.35 0 0 0-1.41-2.07 6.46 6.46 0 0 0-4.63-1.92 6.63 6.63 0 0 0-2.58.55 7.09 7.09 0 0 0-1.2.68 7.14 7.14 0 0 0-1.14.94V3.23h9.05c.22 0 .34-.21.34-.62S17.48 2 17.26 2H7.47a.37.37 0 0 0-.3.13.4.4 0 0 0-.12.29V10a.39.39 0 0 0 .17.3 1.09 1.09 0 0 0 .41.18.73.73 0 0 0 .43 0 .92.92 0 0 0 .24-.11 1 1 0 0 0 .14-.17 6.9 6.9 0 0 1 .86-1 5.15 5.15 0 0 1 3.79-1.56 5.15 5.15 0 0 1 3.81 1.61A5.17 5.17 0 0 1 18.48 13a5.31 5.31 0 0 1-.41 2 5.36 5.36 0 0 1-2.9 3 5.4 5.4 0 0 1-2.06.4 5.09 5.09 0 0 1-2.7-.75V13a2.66 2.66 0 0 1 .71-1.79 2.53 2.53 0 0 1 2-.89 2.65 2.65 0 0 1 2 .79 2.55 2.55 0 0 1 .75 1.89 2.73 2.73 0 0 1-2.77 2.74h-.34l-.37-.07h-.15c-.21-.06-.37.1-.49.48s-.07.6.14.68a4.34 4.34 0 0 0 1.25.18 3.84 3.84 0 0 0 2.8-1.16A3.81 3.81 0 0 0 17.1 13a3.73 3.73 0 0 0-1.16-2.78 3.8 3.8 0 0 0-2.8-1.15 3.86 3.86 0 0 0-2.82 1.15 3.57 3.57 0 0 0-1.14 2.59v3.8a5.63 5.63 0 0 1-1.08-1.86c-.08-.21-.3-.25-.67-.13s-.55.29-.48.49Zm6.25-11a8.16 8.16 0 0 0-3.34.64.25.25 0 0 0-.23.22 1.26 1.26 0 0 0 .09.43c.14.35.3.48.5.41a8.09 8.09 0 0 1 2.93-.55 7.54 7.54 0 0 1 3.08.63 8.67 8.67 0 0 1 2.31 1.48.25.25 0 0 0 .18.08c.09 0 .24-.1.43-.29l.19-.19a.37.37 0 0 0 .06-.21.3.3 0 0 0-.1-.2 8.62 8.62 0 0 0-2.62-1.69 9 9 0 0 0-3.53-.76Zm-1.61 9.91a.46.46 0 0 0 .2.33.52.52 0 0 0 .35.18.24.24 0 0 0 .17-.06l.73-.73.7.68a.28.28 0 0 0 .21.11.58.58 0 0 0 .36-.19c.2-.21.23-.39.07-.55l-.7-.7.74-.74c.12-.12.08-.29-.13-.49s-.4-.27-.53-.14l-.73.72-.72-.74a.3.3 0 0 0-.15-.05.56.56 0 0 0-.34.2c-.23.22-.28.38-.16.5l.74.74-.74.72a.35.35 0 0 0-.12.21Zm7.93 4.57a1.24 1.24 0 0 0-.37-.25.28.28 0 0 0-.28.07l-.07.07a8 8 0 0 1-2.51 1.69 7.94 7.94 0 0 1-8.68-1.69A7.48 7.48 0 0 1 5.91 16a9.33 9.33 0 0 1-.51-1.77c0-.21-.25-.29-.63-.23s-.56.2-.53.4a8.52 8.52 0 0 0 .6 2.11 8.84 8.84 0 0 0 2 2.88 9 9 0 0 0 2.89 2 9.13 9.13 0 0 0 3.54.71 9.28 9.28 0 0 0 3.54-.71 9 9 0 0 0 2.89-2l.06-.06c.09-.22.02-.44-.24-.71Z" id="500px"></path></svg>
        )
    },
    "adobe": {
        category: 'brand logo',
        name: 'adobe',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9.07 17.28h2.78l1.75 3.44h2.54L12 9.87ZM2 3v18L9.42 3Zm12.48 0L22 20.81V3Z" id="adobe"></path></svg>
        )
    },
    "adobe-alt": {
        category: 'brand logo',
        name: 'adobe-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.247 2.403a.999.999 0 0 0-.83-.444H1.992a1 1 0 0 0-1 1v18.082a1 1 0 0 0 1.925.38L10.342 3.34a1 1 0 0 0-.095-.936Zm-7.255 13.57V3.96h4.933Zm19-14.014h-7.518a1 1 0 0 0-.921 1.388l7.517 17.85a.999.999 0 0 0 .921.612 1.049 1.049 0 0 0 .198-.02 1.001 1.001 0 0 0 .803-.98V2.959a1 1 0 0 0-1-1Zm-1 13.899L15.98 3.959h5.012ZM12.949 9.52a1 1 0 0 0-.926-.646h-.01a1 1 0 0 0-.928.627l-3.059 7.631a1 1 0 0 0 .929 1.372h2.254l1.522 2.99a.999.999 0 0 0 .892.547h2.612a1 1 0 0 0 .936-1.353Zm1.287 10.521-1.523-2.99a.999.999 0 0 0-.89-.547h-1.39l1.553-3.875 2.802 7.412Z" id="adobe-alt"></path></svg>
        )
    },
    "amazon": {
        category: 'brand logo',
        name: 'amazon',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M1.04 17.52q.1-.16.32-.02a21.308 21.308 0 0 0 10.88 2.9 21.524 21.524 0 0 0 7.74-1.46q.1-.04.29-.12t.27-.12a.356.356 0 0 1 .47.12q.17.24-.11.44-.36.26-.92.6a14.99 14.99 0 0 1-3.84 1.58A16.175 16.175 0 0 1 12 22a16.017 16.017 0 0 1-5.9-1.09 16.246 16.246 0 0 1-4.98-3.07.273.273 0 0 1-.12-.2.215.215 0 0 1 .04-.12Zm6.02-5.7a4.036 4.036 0 0 1 .68-2.36A4.197 4.197 0 0 1 9.6 7.98a10.063 10.063 0 0 1 2.66-.66q.54-.06 1.76-.16v-.34a3.562 3.562 0 0 0-.28-1.72 1.5 1.5 0 0 0-1.32-.6h-.16a2.189 2.189 0 0 0-1.14.42 1.64 1.64 0 0 0-.62 1 .508.508 0 0 1-.4.46L7.8 6.1q-.34-.08-.34-.36a.587.587 0 0 1 .02-.14 3.834 3.834 0 0 1 1.67-2.64A6.268 6.268 0 0 1 12.26 2h.5a5.054 5.054 0 0 1 3.56 1.18 3.81 3.81 0 0 1 .37.43 3.875 3.875 0 0 1 .27.41 2.098 2.098 0 0 1 .18.52q.08.34.12.47a2.856 2.856 0 0 1 .06.56q.02.43.02.51v4.84a2.868 2.868 0 0 0 .15.95 2.475 2.475 0 0 0 .29.62q.14.19.46.61a.599.599 0 0 1 .12.32.346.346 0 0 1-.16.28q-1.66 1.44-1.8 1.56a.557.557 0 0 1-.58.04q-.28-.24-.49-.46t-.3-.32a4.466 4.466 0 0 1-.29-.39q-.2-.29-.28-.39a4.91 4.91 0 0 1-2.2 1.52 6.038 6.038 0 0 1-1.68.2 3.505 3.505 0 0 1-2.53-.95 3.553 3.553 0 0 1-.99-2.69Zm3.44-.4a1.895 1.895 0 0 0 .39 1.25 1.294 1.294 0 0 0 1.05.47 1.022 1.022 0 0 0 .17-.02 1.022 1.022 0 0 1 .15-.02 2.033 2.033 0 0 0 1.3-1.08 3.13 3.13 0 0 0 .33-.83 3.8 3.8 0 0 0 .12-.73q.01-.28.01-.92v-.5a7.287 7.287 0 0 0-1.76.16 2.144 2.144 0 0 0-1.76 2.22Zm8.4 6.44a.626.626 0 0 1 .12-.16 3.14 3.14 0 0 1 .96-.46 6.52 6.52 0 0 1 1.48-.22 1.195 1.195 0 0 1 .38.02q.9.08 1.08.3a.655.655 0 0 1 .08.36v.14a4.56 4.56 0 0 1-.38 1.65 3.84 3.84 0 0 1-1.06 1.53.302.302 0 0 1-.18.08.177.177 0 0 1-.08-.02q-.12-.06-.06-.22a7.632 7.632 0 0 0 .74-2.42.513.513 0 0 0-.08-.32q-.2-.24-1.12-.24-.34 0-.8.04-.5.06-.92.12a.232.232 0 0 1-.16-.04.065.065 0 0 1-.02-.08.153.153 0 0 1 .02-.06Z" id="amazon"></path></svg>
        )
    },
    "android": {
        category: 'brand logo',
        name: 'android',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m14.975 3.019.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.541 6.541 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.546 5.546 0 0 0-3.092 4.876h12.137a5.546 5.546 0 0 0-3.094-4.876ZM9.2 5.674a.507.507 0 1 1 .507-.506.507.507 0 0 1-.507.506Zm5.602 0a.507.507 0 1 1 .507-.506.507.507 0 0 1-.507.506ZM5.93 17.171A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93Zm-1.867-9.03a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Zm15.872 0a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36Z" id="android"></path></svg>
        )
    },
    "android-alt": {
        category: 'brand logo',
        name: 'android-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M2.992 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm18 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm-4.135-5.5a1 1 0 1 0-1.731-1l-.614 1.063a5.928 5.928 0 0 0-5.04 0L8.857 2.5a1 1 0 1 0-1.731 1l.692 1.198A5.979 5.979 0 0 0 5.992 9v8a1 1 0 0 0 1 1h2v3a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 2 0v-3h2a1 1 0 0 0 1-1V9a5.979 5.979 0 0 0-1.827-4.302ZM15.992 16h-8v-5h8Zm-8-7a4 4 0 0 1 8 0Z" id="android-alt"></path></svg>
        )
    },
    "apple": {
        category: 'brand logo',
        name: 'apple',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42Zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04Z" id="apple"></path></svg>
        )
    },
    "apple-alt": {
        category: 'brand logo',
        name: 'apple-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.504 15.744a3.386 3.386 0 0 1-2.054-3.127 3.497 3.497 0 0 1 1.687-2.947 1 1 0 0 0 .3-1.415 5.574 5.574 0 0 0-4.016-2.385 6.422 6.422 0 0 0 .965-3.977.984.984 0 0 0-1.033-.892 6.69 6.69 0 0 0-4.444 2.261 6.842 6.842 0 0 0-1.48 2.9 5.264 5.264 0 0 0-1.62-.278 5.925 5.925 0 0 0-4.99 3.008C1.93 12.169 3.086 17.08 5.13 20.037c.82 1.184 2.051 2.962 3.908 2.962.037 0 .074 0 .11-.002a4.74 4.74 0 0 0 1.793-.463 3.274 3.274 0 0 1 1.446-.354 3.045 3.045 0 0 1 1.357.338 4.752 4.752 0 0 0 1.962.456c1.913-.036 3.043-1.687 3.868-2.893a12.042 12.042 0 0 0 1.513-3.108 1.003 1.003 0 0 0-.584-1.23Zm-7.08-11.176a4.941 4.941 0 0 1 1.919-1.322 4.855 4.855 0 0 1-1.037 2.15 4.39 4.39 0 0 1-1.264 1.041l-.003.001-.085.034c-.186.073-.417.164-.595.223a4.825 4.825 0 0 1 1.064-2.127Zm4.5 14.385c-.803 1.173-1.435 2.006-2.254 2.021a2.367 2.367 0 0 1-1.13-.292 4.97 4.97 0 0 0-2.152-.502 5.214 5.214 0 0 0-2.229.513 2.885 2.885 0 0 1-1.086.306h-.03c-.813 0-1.687-1.262-2.268-2.101-1.452-2.1-2.792-6.283-1.223-9.008a3.917 3.917 0 0 1 3.29-2.006h.034a4.758 4.758 0 0 1 1.642.444c.13.051.26.103.389.15a.858.858 0 0 0 .1.038 3.315 3.315 0 0 0 1.118.237 4.436 4.436 0 0 0 1.564-.42 4.956 4.956 0 0 1 2.222-.498 3.787 3.787 0 0 1 2.25.854 5.31 5.31 0 0 0-1.711 3.945v.001a5.3 5.3 0 0 0 2.45 4.503 10.198 10.198 0 0 1-.975 1.815Z" id="apple-alt"></path></svg>
        )
    },
    "behance": {
        category: 'brand logo',
        name: 'behance',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.07 6.35H15v1.41h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37 2.23 2.23 0 0 1-1.7-.54 2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2 5.08 5.08 0 0 0-.8-1.73 4.17 4.17 0 0 0-1.42-1.21 4.37 4.37 0 0 0-2-.45 4.88 4.88 0 0 0-1.9.37 4.51 4.51 0 0 0-1.47 1 4.4 4.4 0 0 0-.95 1.52 5.4 5.4 0 0 0-.33 1.91 5.52 5.52 0 0 0 .32 1.94 4.46 4.46 0 0 0 .88 1.53 4 4 0 0 0 1.46 1 5.2 5.2 0 0 0 1.94.34 4.77 4.77 0 0 0 2.64-.7 4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76Zm-3.43-4.12a1.87 1.87 0 0 1 1-1.14 2.28 2.28 0 0 1 1-.2 1.73 1.73 0 0 1 1.36.49 2.91 2.91 0 0 1 .63 1.45h-4.15a3 3 0 0 1 .11-.6Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1 2.72 2.72 0 0 0 .43-1.58 3.28 3.28 0 0 0-.29-1.48 2.4 2.4 0 0 0-.82-1 3.24 3.24 0 0 0-1.27-.52 7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1a6.55 6.55 0 0 0 1.65-.21 4.55 4.55 0 0 0 1.43-.65 3.13 3.13 0 0 0 1-1.14 3.41 3.41 0 0 0 .37-1.65 3.47 3.47 0 0 0-.57-2 3 3 0 0 0-1.75-1.19ZM4.77 7.86h2.59a4.17 4.17 0 0 1 .71.06 1.64 1.64 0 0 1 .61.22 1.05 1.05 0 0 1 .42.44 1.42 1.42 0 0 1 .16.72 1.36 1.36 0 0 1-.47 1.15 2 2 0 0 1-1.22.35h-2.8Zm4.84 7.44a1.28 1.28 0 0 1-.45.5 2 2 0 0 1-.65.26 3.33 3.33 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41 1.65 1.65 0 0 1 .54 1.39 1.77 1.77 0 0 1-.11.81Z" id="behance"></path></svg>
        )
    },
    "behance-alt": {
        category: 'brand logo',
        name: 'behance-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.108 15.032a.997.997 0 0 0-1.215.722A2.998 2.998 0 0 1 14.992 15v-1h7a1 1 0 0 0 1-1 5 5 0 1 0-10 0v2a4.998 4.998 0 0 0 9.839 1.247.999.999 0 0 0-.723-1.215ZM17.992 10a3.011 3.011 0 0 1 2.118.873A3.044 3.044 0 0 1 20.809 12h-5.633a2.995 2.995 0 0 1 2.816-2Zm-2-3h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2ZM9.91 11.718A3.987 3.987 0 0 0 6.992 5h-5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5.5a4.492 4.492 0 0 0 2.418-8.282ZM2.992 7h4a2 2 0 1 1 0 4h-4Zm4.5 11h-4.5v-5h4.5a2.5 2.5 0 0 1 0 5Z" id="behance-alt"></path></svg>
        )
    },
    "bing": {
        category: 'brand logo',
        name: 'bing',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m10.1 8.6 1.7 4.3 2.8 1.3L9 17.5V3.4L5 2v17.8L9 22l10-5.8v-4.5l-8.9-3.1z" id="bing"></path></svg>
        )
    },
    "bitcoin": {
        category: 'brand logo',
        name: 'bitcoin',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11.136 12.117-.596 2.415c.736.185 3.004.921 3.34-.441.35-1.421-2.009-1.789-2.744-1.974Zm.813-3.297-.54 2.191c.612.154 2.5.784 2.806-.455.318-1.293-1.654-1.581-2.266-1.736ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.358 8.575a1.743 1.743 0 0 1-1.385 1.611 1.933 1.933 0 0 1 .997 2.661c-.586 1.692-1.977 1.835-3.827 1.481l-.449 1.82-1.085-.274.443-1.795a35.27 35.27 0 0 1-.864-.227l-.445 1.804-1.084-.273.45-1.824c-.254-.065-.511-.135-.774-.201l-1.412-.356.539-1.256s.8.215.788.199a.394.394 0 0 0 .498-.26l1.217-4.939a.583.583 0 0 0-.505-.638c.016-.011-.789-.198-.789-.198l.29-1.172 1.495.378-.001.006c.225.056.457.11.693.164l.444-1.802 1.085.274-.436 1.766c.291.068.584.135.87.207l.432-1.755 1.085.274-.445 1.802c1.37.477 2.372 1.193 2.175 2.523Z" id="bitcoin"></path></svg>
        )
    },
    "bitcoin-alt": {
        category: 'brand logo',
        name: 'bitcoin-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M16.304 11.241a3.998 3.998 0 0 0-3.312-6.239v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v10h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.312-7.76ZM8.992 7.002h4a2 2 0 0 1 0 4h-4Zm6 10h-6v-4h6a2 2 0 1 1 0 4Z" id="bitcoin-alt"></path></svg>
        )
    },
    "black-berry": {
        category: 'brand logo',
        name: 'black-berry',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM7.19 13.35H5.27l.52-2.41h1.84c1.2 0 1.48.58 1.48 1.05 0 .65-.43 1.36-1.92 1.36Zm.66-3.64H5.94l.52-2.41H8.3c1.19 0 1.47.59 1.47 1 0 .7-.42 1.41-1.92 1.41Zm3.75 7.43H9.68l.53-2.42h1.84c1.19 0 1.47.59 1.47 1.06 0 .65-.42 1.36-1.92 1.36Zm.71-3.79H10.4l.52-2.41h1.84c1.19 0 1.47.58 1.47 1.05 0 .65-.42 1.36-1.92 1.36ZM13 9.71h-1.94l.52-2.41h1.84c1.2 0 1.48.59 1.48 1 0 .7-.43 1.41-1.9 1.41Zm3.74 5.61h-1.93l.52-2.42h1.84c1.19 0 1.48.59 1.48 1.06 0 .65-.43 1.36-1.93 1.36Zm.72-3.44h-1.94L16 9.46h1.84c1.2 0 1.48.59 1.48 1 .04.71-.39 1.42-1.88 1.42Z" id="black-berry"></path></svg>
        )
    },
    "blogger": {
        category: 'brand logo',
        name: 'blogger',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9.71 10.46h2.239a.77.77 0 1 0 0-1.542H9.71a.77.77 0 1 0 0 1.542Zm9.718-8.458H4.555a2.573 2.573 0 0 0-2.563 2.563v14.873a2.573 2.573 0 0 0 2.563 2.564h14.873a2.573 2.573 0 0 0 2.564-2.564V4.565a2.573 2.573 0 0 0-2.564-2.563Zm-1.072 9.678-.02 2.675a4.051 4.051 0 0 1-4.038 4.022h-4.64a4.05 4.05 0 0 1-4.041-4.025V9.657a4.053 4.053 0 0 1 4.042-4.03h2.823a4.46 4.46 0 0 1 3.12 2.2 3.156 3.156 0 0 1 .362 1.367c.068.506.103.881.33 1.09.32.289 1.508.094 1.743.278l.178.14.11.221.035.178Zm-4.097 1.863H9.71a.75.75 0 1 0 0 1.5h4.549a.75.75 0 1 0 0-1.5Z" id="blogger"></path></svg>
        )
    },
    "blogger-alt": {
        category: 'brand logo',
        name: 'blogger-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13.991 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-4-2h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2Zm6-1V9a4.004 4.004 0 0 0-4-4h-2a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-1a3.005 3.005 0 0 0-3-3Zm0 0v.001h-1Zm1 4a3.003 3.003 0 0 1-3 3h-4a3.003 3.003 0 0 1-3-3v-4a3.003 3.003 0 0 1 3-3h2a2.003 2.003 0 0 1 2 2v1a2.003 2.003 0 0 0 2 2 1 1 0 0 1 1 1Zm3-13h-16a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3Zm1 19a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z" id="blogger-alt"></path></svg>
        )
    },
    "css3-simple": {
        category: 'brand logo',
        name: 'css3-simple',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.772 3.364A1 1 0 0 0 20 3H6a1 1 0 0 0 0 2h12.786l-.78 4H5a1 1 0 0 0 0 2h12.615l-1.163 5.955-6.323 1.997-5.41-1.7.203-1.064a1 1 0 0 0-1.964-.375l-.37 1.94a1 1 0 0 0 .682 1.141l6.56 2.06a1.002 1.002 0 0 0 .601 0l7.19-2.27a1 1 0 0 0 .68-.763l2.68-13.73a1 1 0 0 0-.209-.827Z" id="css3-simple"></path></svg>
        )
    },
    "discord": {
        category: 'brand logo',
        name: 'discord',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.138 10.63Zm3.755 0a1.146 1.146 0 1 0 1.049 1.141 1.096 1.096 0 0 0-1.05-1.141ZM18.89 2H5.11A2.114 2.114 0 0 0 3 4.12v13.906a2.114 2.114 0 0 0 2.109 2.12h11.664l-.546-1.904 1.317 1.224 1.245 1.152L21 22.572V4.119A2.114 2.114 0 0 0 18.891 2Zm-3.97 13.433s-.37-.442-.679-.833a3.246 3.246 0 0 0 1.862-1.224 5.878 5.878 0 0 1-1.183.607 6.77 6.77 0 0 1-1.491.442 7.206 7.206 0 0 1-2.664-.01 8.645 8.645 0 0 1-1.512-.442 6.037 6.037 0 0 1-.751-.35c-.031-.02-.062-.03-.093-.051a.142.142 0 0 1-.04-.031c-.186-.103-.289-.175-.289-.175a3.2 3.2 0 0 0 1.8 1.214c-.308.39-.689.853-.689.853a3.729 3.729 0 0 1-3.137-1.563 13.775 13.775 0 0 1 1.481-5.997 5.086 5.086 0 0 1 2.89-1.08l.103.124a6.938 6.938 0 0 0-2.705 1.347s.226-.123.607-.298a7.722 7.722 0 0 1 2.335-.648 1.005 1.005 0 0 1 .175-.02 8.702 8.702 0 0 1 2.077-.021 8.384 8.384 0 0 1 3.096.987 6.846 6.846 0 0 0-2.56-1.306l.143-.165a5.086 5.086 0 0 1 2.89 1.08 13.774 13.774 0 0 1 1.482 5.997 3.76 3.76 0 0 1-3.148 1.563Z" id="discord"></path></svg>
        )
    },
    "docker": {
        category: 'brand logo',
        name: 'docker',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.8 8.8h1.8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.4 2.3H13c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H13c.1 0 .2-.1.2-.2V7.1l-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm-2.5-4.6H13c.1 0 .2-.1.2-.2V4.8c0-.1-.1-.2-.2-.2h-1.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.1.2.1zm-7.4 4.6h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H3.8c-.1 0-.2.1-.2.2v1.6l.2.2zm18-1c-.5-.3-1.1-.5-1.6-.4-.3 0-.6 0-.8.1-.2-.9-.7-1.7-1.4-2.1l-.3-.2-.2.3c-.3.2-.5.6-.6 1.1-.2.8-.1 1.6.3 2.2-.5.2-1 .3-1.5.4H2.6c-.3 0-.6.3-.6.6 0 1.2.2 2.3.6 3.4.4 1.1 1.1 2 2 2.6 1.4.7 2.9 1 4.4.9.8 0 1.6-.1 2.4-.2 1.1-.2 2.2-.6 3.2-1.2.8-.5 1.5-1.1 2.2-1.8.9-1.1 1.6-2.3 2.1-3.7h.2c.8 0 1.6-.3 2.2-.8.3-.2.5-.5.6-.9l.1-.2-.2-.1zm-15.5 1H8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm0-2.3H8c.1 0 .2-.1.2-.2V7.1c0-.1-.1-.2-.2-.2H6.3c-.1 0-.2.1-.2.2v1.6s.1.1.2.1zm2.5 2.3h1.8c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2H8.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2z" id="docker"></path></svg>
        )
    },
    "dribbble": {
        category: 'brand logo',
        name: 'dribbble',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a7.94 7.94 0 0 1 5.51 2.22 24.93 24.93 0 0 1-4.83 2.18 29.07 29.07 0 0 0-2.87-4.09A7.94 7.94 0 0 1 12 4ZM7.89 5.15A27.16 27.16 0 0 1 10.7 9a25.11 25.11 0 0 1-6 .74h-.36a8 8 0 0 1 3.55-4.59ZM6 17.31A7.9 7.9 0 0 1 4 12v-.29h.68a26.67 26.67 0 0 0 7-1c.32.61.62 1.24.91 1.89a14.3 14.3 0 0 0-4.29 2.41l-.3.24a21 21 0 0 0-2 2.06ZM12 20a7.92 7.92 0 0 1-4.47-1.37 17.92 17.92 0 0 1 1.56-1.58l.32-.27a12.63 12.63 0 0 1 4-2.27 32 32 0 0 1 1.4 5A8.08 8.08 0 0 1 12 20Zm4.63-1.49a34.87 34.87 0 0 0-1.28-4.46h.34a.25.25 0 0 1 .12 0h.69a9.43 9.43 0 0 1 3.09.53 7.94 7.94 0 0 1-2.96 3.93ZM16.5 12h-.62a1.56 1.56 0 0 0-.39 0 6.64 6.64 0 0 0-.81.1h-.1c-.29-.67-.59-1.32-.92-2a26.57 26.57 0 0 0 5.13-2.4A8 8 0 0 1 20 12v.51a11.48 11.48 0 0 0-3.5-.51Z" id="dribbble"></path></svg>
        )
    },
    "dropbox": {
        category: 'brand logo',
        name: 'dropbox',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.61 11.81-3.25-2.53 3.26-2.56a1 1 0 0 0 .38-.86 1.06 1.06 0 0 0-.5-.8l-5.14-2.93a1 1 0 0 0-1.15.12L12 5.05l-3.21-2.8a1 1 0 0 0-1.15-.12L2.5 5.06a1.06 1.06 0 0 0-.5.8 1 1 0 0 0 .38.86l3.26 2.56-3.25 2.49a1 1 0 0 0-.39.86 1 1 0 0 0 .5.8l3.41 2v2.47a1 1 0 0 0 .48.85l5.09 3.13a1 1 0 0 0 1 0l5.09-3.13a1 1 0 0 0 .48-.85v-2.48l3.41-1.95a1 1 0 0 0 .5-.8 1 1 0 0 0-.35-.86ZM16 4.22l3.23 1.84-2.55 2-3-1.84Zm-1.09 5.12-2.91 2-2.91-2L12 7.55ZM4.79 6.06 8 4.22l2.31 2-3 1.84Zm0 6.39 2.5-1.92 3 2.08-2.22 1.73Zm11.29 4.86L12 19.83l-4.09-2.52v-.8a1 1 0 0 0 .85-.18l3.24-2.5 3.24 2.5a1 1 0 0 0 .61.21 1 1 0 0 0 .24 0Zm-.15-3-2.23-1.7 3-2.08 2.51 1.94Z" id="dropbox"></path></svg>
        )
    },
    "facebook": {
        category: 'brand logo',
        name: 'facebook',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z" id="facebook"></path></svg>
        )
    },
    "facebook-f": {
        category: 'brand logo',
        name: 'facebook-f',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z" id="facebook-f"></path></svg>
        )
    },
    "facebook-messenger": {
        category: 'brand logo',
        name: 'facebook-messenger',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 2a9.65 9.65 0 0 0-10 9.7 9.51 9.51 0 0 0 3.14 7.18.81.81 0 0 1 .27.56v1.78a.81.81 0 0 0 1.13.71l2-.87a.75.75 0 0 1 .53 0 11 11 0 0 0 2.9.38A9.7 9.7 0 1 0 12 2Zm6 7.46-2.93 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4a.47.47 0 0 1-.68-.63l2.93-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4a.47.47 0 0 1 .68.63Z" id="facebook-messenger"></path></svg>
        )
    },
    "facebook-messenger-alt": {
        category: 'brand logo',
        name: 'facebook-messenger-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.991 1a10.614 10.614 0 0 0-11 10.7 10.461 10.461 0 0 0 3.414 7.866l.052 1.69A1.8 1.8 0 0 0 6.256 23a1.82 1.82 0 0 0 .726-.152L8.903 22a11.895 11.895 0 0 0 3.088.4 10.615 10.615 0 0 0 11.001-10.7 10.615 10.615 0 0 0-11-10.7Zm0 19.4a9.862 9.862 0 0 1-2.635-.35 1.799 1.799 0 0 0-1.196.092l-1.714.756-.045-1.493A1.81 1.81 0 0 0 5.8 18.13a8.488 8.488 0 0 1-2.81-6.43 8.66 8.66 0 0 1 9-8.7 8.705 8.705 0 1 1 0 17.4Zm3.735-11.815-2.313 2.755-3.347-2.056a.998.998 0 0 0-1.289.21L5.726 13.13a1 1 0 1 0 1.53 1.285l2.499-2.975 3.347 2.056a.998.998 0 0 0 1.289-.21l2.866-3.415a1 1 0 1 0-1.531-1.286Z" id="facebook-messenger-alt"></path></svg>
        )
    },
    "integration-github": {
        category: 'brand logo',
        name: 'integration-github',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.745 19.728a.908.908 0 0 0-1.074-.894c-1.19.218-2.692.251-3.091-.87a5.187 5.187 0 0 0-1.67-2.195 1.09 1.09 0 0 1-.15-.1.909.909 0 0 0-.847-.587H3.91a.908.908 0 0 0-.909.905c-.004.741.737 1.216 1.038 1.376.354.356.639.775.84 1.236.33.93 1.292 2.341 4.058 2.16l.002.089.004.243a.909.909 0 1 0 1.818 0l-.005-.29c-.004-.171-.01-.42-.01-1.073ZM20.439 5.98a5.18 5.18 0 0 0 .082-.382 5.706 5.706 0 0 0-.37-2.993.912.912 0 0 0-.56-.527c-.324-.11-1.518-.324-3.803 1.136a12.605 12.605 0 0 0-5.775 0C7.738 1.776 6.55 1.972 6.23 2.075a.906.906 0 0 0-.573.53 5.726 5.726 0 0 0-.367 3.05c.022.117.046.224.071.323a5.698 5.698 0 0 0-1.14 3.48c-.003.28.01.56.038.838.303 4.183 3.03 5.439 4.93 5.87a4.17 4.17 0 0 0-.108.364.909.909 0 0 0 1.765.435c.058-.303.207-.581.426-.798a.908.908 0 0 0-.497-1.586c-3.139-.359-4.502-1.638-4.707-4.452a6.008 6.008 0 0 1-.03-.67A3.87 3.87 0 0 1 7.05 6.781a.909.909 0 0 0 .171-.93 3.079 3.079 0 0 1-.14-.506 3.72 3.72 0 0 1 .07-1.468c.79.223 1.534.586 2.195 1.072a.917.917 0 0 0 .753.12 10.703 10.703 0 0 1 5.61.002.914.914 0 0 0 .755-.125 6.88 6.88 0 0 1 2.186-1.082c.12.468.147.955.079 1.434a2.912 2.912 0 0 1-.153.552.91.91 0 0 0 .17.931c.07.08.14.164.204.244.55.689.84 1.55.82 2.432a6.41 6.41 0 0 1-.035.707c-.2 2.777-1.568 4.057-4.722 4.416a.908.908 0 0 0-.496 1.587c.226.223.375.512.424.825.061.244.09.494.084.745v2.121c-.009.589-.009 1.03-.009 1.232a.91.91 0 0 0 1.818 0c0-.197 0-.63.009-1.218v-2.135a4.436 4.436 0 0 0-.141-1.192 3.866 3.866 0 0 0-.106-.378 5.92 5.92 0 0 0 4.95-5.838c.03-.29.043-.58.041-.872a5.572 5.572 0 0 0-1.148-3.477Z" id="integration-github"></path></svg>
        )
    },
    "github-alt": {
        category: 'brand logo',
        name: 'github-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415 1.2 1.2 0 0 1-.167-.11 1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42 6.278 6.278 0 0 0-.408-3.293 1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584 6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83 8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4 1 1 0 0 0 1.942.479 1.678 1.678 0 0 1 .468-.878 1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738 4.258 4.258 0 0 1 .92-2.713 3.022 3.022 0 0 1 .195-.231 1 1 0 0 0 .188-1.025 3.388 3.388 0 0 1-.155-.555 4.094 4.094 0 0 1 .079-1.616 7.543 7.543 0 0 1 2.415 1.18 1.009 1.009 0 0 0 .827.133 11.777 11.777 0 0 1 6.173.001 1.005 1.005 0 0 0 .83-.138 7.572 7.572 0 0 1 2.406-1.19 4.04 4.04 0 0 1 .087 1.578 3.205 3.205 0 0 1-.169.607 1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746 1.63 1.63 0 0 1 .466.908 3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311 4.256 4.256 0 0 0-.116-.416 6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z" id="github-alt"></path></svg>
        )
    },
    "integration-gitlab": {
        category: 'brand logo',
        name: 'integration-gitlab',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.526 3.097a.936.936 0 0 0-1.762.042l-2.05 6.218H9.286L7.237 3.14v-.002a.938.938 0 0 0-.865-.638h-.005a.938.938 0 0 0-.893.597L2.906 9.852l-.003.004-1.343 3.53v.002a.926.926 0 0 0 .33 1.08l9.437 6.764a1.4 1.4 0 0 0 .422.21.83.83 0 0 0 .373.029c.092-.015.192-.048.268-.074l.029-.01.071-.024 9.623-6.896a.926.926 0 0 0 .328-1.08l-1.273-3.341v-.003L18.527 3.1l-.001-.003Zm-1.845 6.26 1.034-3.137 1.194 3.137H16.68Zm.305 6.496 2.982-3.713.47 1.238-3.452 2.475Zm1.334-4.639-3.818 4.754 1.567-4.754h2.25Zm-10.389 0 1.567 4.754-3.817-4.754h2.25Zm-3.899.926 2.982 3.713-3.452-2.475.47-1.238Zm1.06-2.783 1.194-3.136 1.033 3.136H5.093ZM12 17.588l-2.1-6.374h4.2L12 17.588Z" id="integration-gitlab"></path></svg>
        )
    },
    "google": {
        category: 'brand logo',
        name: 'google',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.602 10.004a1 1 0 0 0-.984-.822H12.2a1 1 0 0 0-1 1v3.868a1 1 0 0 0 1 1h3.962a3.652 3.652 0 0 1-1.131 1.187 5.06 5.06 0 0 1-2.831.785 4.935 4.935 0 0 1-4.646-3.437v-.002a4.904 4.904 0 0 1 0-3.167v-.002A4.936 4.936 0 0 1 12.2 6.978a4.378 4.378 0 0 1 3.131 1.217 1 1 0 0 0 1.399-.015l2.868-2.868a1 1 0 0 0-.025-1.439A10.623 10.623 0 0 0 12.2 1a10.949 10.949 0 0 0-9.829 6.059l-.001.002A10.922 10.922 0 0 0 1.2 12a11.079 11.079 0 0 0 1.17 4.94l.001.001A10.949 10.949 0 0 0 12.2 23a10.525 10.525 0 0 0 7.295-2.687l.001-.001a10.786 10.786 0 0 0 3.304-8.084 12.515 12.515 0 0 0-.198-2.224ZM12.2 3a8.682 8.682 0 0 1 5.208 1.673l-1.453 1.453A6.463 6.463 0 0 0 12.2 4.978a6.886 6.886 0 0 0-5.99 3.55L5.142 7.7l-.585-.454A8.953 8.953 0 0 1 12.2 3ZM3.68 14.903a9.03 9.03 0 0 1 0-5.806l1.782 1.382a6.854 6.854 0 0 0 0 3.042ZM12.2 21a8.953 8.953 0 0 1-7.644-4.246l.379-.294 1.276-.99a6.885 6.885 0 0 0 5.989 3.552 7.277 7.277 0 0 0 3.306-.75l1.691 1.313A8.89 8.89 0 0 1 12.2 21Zm6.526-2.76-.183-.143-1.377-1.069a5.606 5.606 0 0 0 1.4-2.796 1 1 0 0 0-.984-1.182H13.2v-1.868h7.549c.034.345.051.695.051 1.046a9.052 9.052 0 0 1-2.074 6.011Z" id="google"></path></svg>
        )
    },
    "google-drive": {
        category: 'brand logo',
        name: 'google-drive',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m21.423 13.888-6.09-10.55H8.668l6.09 10.55ZM8.09 4.338 2 14.888l3.334 5.774 6.089-10.55Zm1.733 10.55L6.49 20.662h12.178L22 14.887Z" id="google-drive"></path></svg>
        )
    },
    "google-drive-alt": {
        category: 'brand logo',
        name: 'google-drive-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22 14.44a.62.62 0 0 0 0-.13.61.61 0 0 1 0-.12l-.05-.12-6-10.29a1 1 0 0 0-.95-.49H9a1 1 0 0 0-.5.13l-.11.08a.73.73 0 0 0-.09.08.58.58 0 0 0-.1.12s0 0-.06.08l-6 10.33a1 1 0 0 0 0 1l3 5.08a.83.83 0 0 0 .11.15v.06a1.1 1.1 0 0 0 .44.26.83.83 0 0 0 .22 0H18a1 1 0 0 0 .86-.49l3-5.14.05-.12a.61.61 0 0 1 0-.12.53.53 0 0 0 0-.13.51.51 0 0 0 0-.13.59.59 0 0 0 .09-.09ZM6 17.73l-1.79-3.1L9 6.27l.87 1.5 1 1.66L7 15.91Zm6-6.32 1.26 2.16h-2.54Zm5.43 7.3H7.7l1.84-3.14h9.72Zm-1.86-5.14-4.83-8.28h3.69l4.83 8.28Z" id="google-drive-alt"></path></svg>
        )
    },
    "google-hangouts": {
        category: 'brand logo',
        name: 'google-hangouts',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.444 9.055a8.505 8.505 0 0 0-2.173-4.334 8.403 8.403 0 0 0-1.622-1.357 8.489 8.489 0 0 0-3.64-1.31A4.153 4.153 0 0 1 12.528 2h-1.135c-.012.029-.038.018-.06.02a8.835 8.835 0 0 0-.87.114 8.453 8.453 0 0 0-5.177 3.104 8.359 8.359 0 0 0-1.84 4.709 8.59 8.59 0 0 0 .186 2.529 8.148 8.148 0 0 0 .624 1.79l.073.146a8.601 8.601 0 0 0 1.784 2.396 8.53 8.53 0 0 0 5.763 2.333c.1.001.127.026.126.128-.004.874-.002 1.747-.002 2.621 0 .034.003.068.005.11l.063-.026a17.989 17.989 0 0 0 4.49-2.966q.4-.365.769-.762c.105-.114.21-.23.315-.342.163-.175.304-.37.458-.553a9.09 9.09 0 0 0 .494-.663 11.033 11.033 0 0 0 .918-1.575c.132-.279.258-.56.37-.847a.096.096 0 0 0 .01-.016 10.277 10.277 0 0 0 .6-2.44c.037-.29.06-.584.075-.877a8.14 8.14 0 0 0-.123-1.878Zm-9.19 2.82a2.505 2.505 0 0 1-.84 1.877l-.084.08a2.684 2.684 0 0 1-.933.481 3.8 3.8 0 0 1-.448.085.21.21 0 0 1-.235-.152l.001-.968c.006-.095-.032-.197.044-.28a.266.266 0 0 1 .138-.085 1.774 1.774 0 0 0 .494-.169 1.132 1.132 0 0 0 .538-.731l.036-.151-2.042-.003a.653.653 0 0 1-.174-.018.413.413 0 0 1-.307-.386q-.002-1.543.002-3.087a.467.467 0 0 1 .138-.436.387.387 0 0 1 .257-.102h3.001a.416.416 0 0 1 .4.527.388.388 0 0 1 .016.153c0 1.121.007 2.243-.002 3.364Zm5.303.004a2.557 2.557 0 0 1-1.556 2.328c-.024.01-.046.023-.069.035l-.038.01-.021.013a4.592 4.592 0 0 1-.59.129.216.216 0 0 1-.269-.217l-.003-.322.006-.578c-.001-.042-.003-.084-.003-.127 0-.147.057-.21.241-.252a1.319 1.319 0 0 0 .634-.297 1.264 1.264 0 0 0 .377-.74l-1.885-.003h-.206a.419.419 0 0 1-.432-.44q0-1.525.002-3.049l-.001-.03a.434.434 0 0 1 .203-.45.39.39 0 0 1 .213-.059h2.982a.416.416 0 0 1 .399.527.392.392 0 0 1 .017.153v3.37Z" id="google-hangouts"></path></svg>
        )
    },
    "google-hangouts-alt": {
        category: 'brand logo',
        name: 'google-hangouts-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M8.992 7.69a2 2 0 0 0 0 4l.015-.001v.501a.501.501 0 0 1-.5.5 1 1 0 0 0 0 2 2.502 2.502 0 0 0 2.5-2.5v-2.5a.941.941 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85Zm3-6.688a9.787 9.787 0 0 0-1 19.523v1.477a1 1 0 0 0 1.238.97 12.535 12.535 0 0 0 9.467-10.974 9.734 9.734 0 0 0-9.706-10.996Zm7.717 10.78a10.548 10.548 0 0 1-6.718 8.86v-1.066a1 1 0 0 0-1-1 7.787 7.787 0 1 1 7.788-7.787 7.945 7.945 0 0 1-.07.993ZM14.992 7.69a2 2 0 1 0 0 4l.015-.001v.501a.501.501 0 0 1-.5.5 1 1 0 0 0 0 2 2.502 2.502 0 0 0 2.5-2.5v-2.5a.941.941 0 0 0-.03-.15 1.994 1.994 0 0 0-1.985-1.85Z" id="google-hangouts-alt"></path></svg>
        )
    },
    "google-play": {
        category: 'brand logo',
        name: 'google-play',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.919 10.653a503.26 503.26 0 0 1-4.023-2.323l-.003-.002L4.64 1.253a1.679 1.679 0 0 0-1.408-.16.953.953 0 0 0-.076.03 1.418 1.418 0 0 0-.173.07 1.519 1.519 0 0 0-.738 1.364v18.986a1.435 1.435 0 0 0 .692 1.27 1.308 1.308 0 0 0 .155.064.977.977 0 0 0 .087.035 1.379 1.379 0 0 0 .446.083 1.673 1.673 0 0 0 .831-.232l12.438-7.182 4.021-2.322a1.525 1.525 0 0 0 .842-1.334 1.49 1.49 0 0 0-.837-1.272ZM4.244 19.839V4.102l7.94 7.859Zm5.018-2.162 4.344-4.31 1.15 1.139-5.494 3.171Zm4.342-7.125L9.206 6.2l5.554 3.207Zm2.947 2.917-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515Z" id="google-play"></path></svg>
        )
    },
    "hipchat": {
        category: 'brand logo',
        name: 'hipchat',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5 13.9c0-.2-.2-.4-.4-.4-.1 0-.2 0-.3.1-1.3 1.1-3 1.7-4.8 1.7-1.7 0-3.4-.6-4.8-1.7-.1-.1-.2-.1-.3-.1-.2 0-.4.2-.4.4s.1.3.2.5C8 16 10 16.9 12 16.8c2 .1 3.9-.8 5.2-2.4.2-.2.2-.3.3-.5zm2.7 6.9c-.8-.4-1.4-1.2-1.7-2-.1-.2 0-.3.1-.4 2.1-1.5 3.3-3.9 3.3-6.4 0-4.8-4.5-8.6-10-8.6s-10 3.9-10 8.6c0 4.8 4.5 8.6 10 8.6.7 0 1.4-.1 2.1-.2.1 0 .3 0 .4.1 1.6.9 3.4 1.5 5.2 1.5.4.1.7-.2.8-.6v-.1c.1-.2 0-.4-.2-.5zm-2.7-.8v.1c0 .1-.1.1-.1.1-1.1-.3-2-.8-2.9-1.5-.1-.1-.3-.1-.5-.1-.7.2-1.4.2-2.1.2-4.6 0-8.3-3.1-8.3-6.9C3.6 8.1 7.3 5 11.9 5c4.6 0 8.3 3.1 8.3 6.9-.1 2.3-1.4 4.4-3.4 5.5-.2.1-.3.3-.3.4.3.9.6 1.6 1 2.2z" id="hipchat"></path></svg>
        )
    },
    "html3": {
        category: 'brand logo',
        name: 'html3',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m3.195 2 1.602 17.994L11.99 22l7.212-2.013L20.805 2Zm14.281 4.123-.534 5.994.002.033-.002.074-.38 4.19-.041.373L12 18.037l-.004.004-4.512-1.258-.306-3.465H9.39l.157 1.762 2.453.665 2.461-.674.26-2.869H9.577l-.044-.485-.101-1.136-.052-.61h5.538l.202-2.232H6.682l-.044-.485-.1-1.137-.053-.61h11.044Zm0 0" id="html3"></path></svg>
        )
    },
    "html3-alt": {
        category: 'brand logo',
        name: 'html3-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M7.952 8h6.986l-.177 2h-4.77a1 1 0 0 0 0 2h4.593l-.264 2.977-2.329.528-2.328-.529-.096-1.064a1 1 0 1 0-1.992.177l.16 1.79a1.001 1.001 0 0 0 .775.887l3.26.74a1.019 1.019 0 0 0 .443 0l3.26-.74a1.001 1.001 0 0 0 .775-.888l.432-4.868.002-.01-.001-.004.346-3.908A1.001 1.001 0 0 0 16.031 6H7.952a1 1 0 0 0 0 2Zm12.702-5.674A1.002 1.002 0 0 0 19.916 2H4.066a1 1 0 0 0-.996 1.09l1.444 16.194a.999.999 0 0 0 .727.874l6.473 1.805a.99.99 0 0 0 .537 0l6.49-1.812a.999.999 0 0 0 .728-.874l1.443-16.188a1.002 1.002 0 0 0-.258-.763ZM17.538 18.41l-5.556 1.551-5.538-1.545L5.16 4h13.664Z" id="html3-alt"></path></svg>
        )
    },
    "html5": {
        category: 'brand logo',
        name: 'html5',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m3.183 2 1.604 18 7.202 2 7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004-4.522-1.256-.31-3.466h2.216l.157 1.76 2.46.664h.001l2.463-.665.256-2.863H7.06L6.464 5.68h11.059Z" id="html5"></path></svg>
        )
    },
    "html5-alt": {
        category: 'brand logo',
        name: 'html5-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.468 2.325A1 1 0 0 0 20.73 2H3.27a1 1 0 0 0-.996 1.089l1.52 17a1 1 0 0 0 .728.874l7.2 2a.996.996 0 0 0 .268.037 1.012 1.012 0 0 0 .267-.036l7.22-2a1 1 0 0 0 .729-.875l1.52-17a1 1 0 0 0-.258-.764Zm-3.193 16.896-6.284 1.741-6.266-1.74L4.363 4h15.274ZM7.82 13h6.895l-.327 3.271-2.568.917-3.164-1.13a1 1 0 1 0-.673 1.884l3.5 1.25a1.003 1.003 0 0 0 .673 0l3.5-1.25a1 1 0 0 0 .659-.842l.5-5a1 1 0 0 0-.995-1.1H8.725l-.3-3h7.895a1 1 0 0 0 0-2h-9a1 1 0 0 0-.995 1.1l.5 5a1 1 0 0 0 .995.9Z" id="html5-alt"></path></svg>
        )
    },
    "instagram": {
        category: 'brand logo',
        name: 'instagram',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43 4.94 4.94 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.78 4.78 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.78 4.78 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.19 3.19 0 0 1-1.15.75 5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3 3.27 3.27 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.06 3.06 0 0 1 .75 1.1 5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33Z" id="instagram"></path></svg>
        )
    },
    "instagram-alt": {
        category: 'brand logo',
        name: 'instagram-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 9.52A2.48 2.48 0 1 0 14.48 12 2.48 2.48 0 0 0 12 9.52Zm9.93-2.45a6.53 6.53 0 0 0-.42-2.26 4 4 0 0 0-2.32-2.32 6.53 6.53 0 0 0-2.26-.42C15.64 2 15.26 2 12 2s-3.64 0-4.93.07a6.53 6.53 0 0 0-2.26.42 4 4 0 0 0-2.32 2.32 6.53 6.53 0 0 0-.42 2.26C2 8.36 2 8.74 2 12s0 3.64.07 4.93a6.86 6.86 0 0 0 .42 2.27 3.94 3.94 0 0 0 .91 1.4 3.89 3.89 0 0 0 1.41.91 6.53 6.53 0 0 0 2.26.42C8.36 22 8.74 22 12 22s3.64 0 4.93-.07a6.53 6.53 0 0 0 2.26-.42 3.89 3.89 0 0 0 1.41-.91 3.94 3.94 0 0 0 .91-1.4 6.6 6.6 0 0 0 .42-2.27C22 15.64 22 15.26 22 12s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 16.87 19a5.73 5.73 0 0 1-1.81.35H8.94A5.73 5.73 0 0 1 7.13 19a3.51 3.51 0 0 1-1.31-.86A3.51 3.51 0 0 1 5 16.87a5.49 5.49 0 0 1-.34-1.81V8.94A5.49 5.49 0 0 1 5 7.13a3.51 3.51 0 0 1 .86-1.31A3.59 3.59 0 0 1 7.13 5a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35 3.51 3.51 0 0 1 1.31.86A3.51 3.51 0 0 1 19 7.13a5.73 5.73 0 0 1 .35 1.81V12c0 2.06.07 2.27.04 3.06Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4 4 0 0 0 15 6H9a4 4 0 0 0-1.38.26 2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 6 9v6a4.27 4.27 0 0 0 .26 1.38 2.38 2.38 0 0 0 1.41 1.41 4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26 2.38 2.38 0 0 0 1.41-1.41 4 4 0 0 0 .26-1.38V9a3.78 3.78 0 0 0-.26-1.38ZM12 15.82A3.81 3.81 0 0 1 8.19 12 3.82 3.82 0 1 1 12 15.82Zm4-6.89a.9.9 0 0 1 0-1.79.9.9 0 0 1 0 1.79Z" id="instagram-alt"></path></svg>
        )
    },
    "integration-intercom": {
        category: 'brand logo',
        name: 'integration-intercom',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.364 14.454a.817.817 0 0 0 .818-.818V7.091a.818.818 0 0 0-1.637 0v6.545a.818.818 0 0 0 .819.819Zm3.272 0a.817.817 0 0 0 .819-.818V7.091a.818.818 0 0 0-1.637 0v6.545a.817.817 0 0 0 .818.819Zm-6.545-1.636A.819.819 0 0 0 7.909 12V8.727a.818.818 0 0 0-1.636 0V12a.818.818 0 0 0 .818.818ZM18.545 3H5.456A2.457 2.457 0 0 0 3 5.455v13.09A2.457 2.457 0 0 0 5.455 21h13.09A2.457 2.457 0 0 0 21 18.546V5.455A2.457 2.457 0 0 0 18.546 3Zm.819 15.546a.818.818 0 0 1-.819.818H5.456a.819.819 0 0 1-.819-.819V5.456a.819.819 0 0 1 .819-.819h13.09a.819.819 0 0 1 .819.819v13.09Zm-2.982-3.757A7.217 7.217 0 0 1 12 16.09a7.353 7.353 0 0 1-4.383-1.303.819.819 0 0 0-1.053 1.253A8.837 8.837 0 0 0 12 17.727a8.837 8.837 0 0 0 5.436-1.686.819.819 0 0 0-1.053-1.252Zm.527-6.88a.818.818 0 0 0-.818.818V12a.818.818 0 1 0 1.636 0V8.727a.819.819 0 0 0-.818-.818Z" id="integration-intercom"></path></svg>
        )
    },
    "intercom-alt": {
        category: 'brand logo',
        name: 'intercom-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M9.991 15a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1Zm4 0a1 1 0 0 0 1-1V6a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1Zm-8-2a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm14-12h-16a3.003 3.003 0 0 0-3 3v16a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V4a3.003 3.003 0 0 0-3-3Zm1 19a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Zm-3.643-4.591A8.82 8.82 0 0 1 11.99 17a8.987 8.987 0 0 1-5.356-1.591 1 1 0 1 0-1.287 1.53A10.8 10.8 0 0 0 11.99 19a10.8 10.8 0 0 0 6.644-2.06 1 1 0 0 0-1.287-1.531ZM17.99 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z" id="intercom-alt"></path></svg>
        )
    },
    "java-script": {
        category: 'brand logo',
        name: 'java-script',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.478 14.883a4.061 4.061 0 0 1-2.187-.398 1.439 1.439 0 0 1-.536-1.01.222.222 0 0 0-.226-.22 46.826 46.826 0 0 0-.95 0 .211.211 0 0 0-.231.186 2.339 2.339 0 0 0 .753 1.844 3.991 3.991 0 0 0 2.228.839 8.062 8.062 0 0 0 2.533-.108 3.126 3.126 0 0 0 1.678-.904 2.338 2.338 0 0 0 .396-2.231 1.869 1.869 0 0 0-1.23-1.095c-1.28-.45-2.664-.415-3.97-.757-.227-.07-.504-.148-.605-.388a.855.855 0 0 1 .284-.955 2.558 2.558 0 0 1 1.35-.336 4.07 4.07 0 0 1 1.883.27 1.436 1.436 0 0 1 .687.992.243.243 0 0 0 .228.236c.314.006.628.001.943.002a.228.228 0 0 0 .247-.168 2.434 2.434 0 0 0-1.187-2.106 5.88 5.88 0 0 0-3.218-.493 3.505 3.505 0 0 0-2.176.875 2.175 2.175 0 0 0-.434 2.262 1.93 1.93 0 0 0 1.218 1.062c1.277.461 2.676.313 3.964.721.252.085.544.216.621.495a.99.99 0 0 1-.27.946 2.97 2.97 0 0 1-1.793.439Zm5.819-8.445q-3.738-2.114-7.479-4.225a1.677 1.677 0 0 0-1.637 0L3.73 6.421a1.542 1.542 0 0 0-.805 1.342v8.475a1.553 1.553 0 0 0 .836 1.355c.713.388 1.406.816 2.133 1.179a3.064 3.064 0 0 0 2.738.075 2.127 2.127 0 0 0 .995-1.921c.005-2.797 0-5.594.002-8.39a.22.22 0 0 0-.207-.255 41.555 41.555 0 0 0-.953 0 .21.21 0 0 0-.228.213c-.004 2.779.001 5.558-.002 8.338a.94.94 0 0 1-.61.883 1.532 1.532 0 0 1-1.24-.166l-1.982-1.12a.237.237 0 0 1-.135-.235V7.807a.259.259 0 0 1 .157-.26q3.713-2.092 7.425-4.187a.258.258 0 0 1 .292 0l7.426 4.186a.262.262 0 0 1 .156.26v8.388a.242.242 0 0 1-.134.238q-3.656 2.068-7.317 4.13c-.116.064-.254.169-.39.09-.64-.362-1.27-.738-1.908-1.103a.206.206 0 0 0-.23-.014 5.218 5.218 0 0 1-.882.412c-.138.056-.308.072-.403.2a1.316 1.316 0 0 0 .432.31l2.236 1.293a1.63 1.63 0 0 0 1.655.046q3.726-2.1 7.452-4.204a1.556 1.556 0 0 0 .836-1.354V7.763a1.54 1.54 0 0 0-.778-1.325Z" id="java-script"></path></svg>
        )
    },
    "line": {
        category: 'brand logo',
        name: 'line',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13.78 9.46a.38.38 0 0 0-.38.38v1.67L12 9.65a.4.4 0 0 0-.33-.19.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38.38.38 0 0 0 .38-.38V11l1.39 1.91a.27.27 0 0 0 .15.11.32.32 0 0 0 .14 0A.33.33 0 0 0 14 13l.1-.07a.39.39 0 0 0 .11-.27V9.84a.38.38 0 0 0-.43-.38ZM9.2 12.27H8.14V9.84a.38.38 0 0 0-.38-.38.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38H9.2a.39.39 0 0 0 .39-.38.39.39 0 0 0-.39-.41Zm1.11-2.81a.39.39 0 0 0-.39.38v2.84a.39.39 0 0 0 .39.38.38.38 0 0 0 .38-.38V9.84a.38.38 0 0 0-.38-.38ZM17.91 2H6.09A4.1 4.1 0 0 0 2 6.09v11.82A4.1 4.1 0 0 0 6.09 22h11.82A4.1 4.1 0 0 0 22 17.91V6.09A4.1 4.1 0 0 0 17.91 2Zm.31 12.28a1.55 1.55 0 0 1-.13.17 5.5 5.5 0 0 1-.8.8c-2 1.87-5.36 4.11-5.81 3.76s.64-1.76-.53-2a1 1 0 0 1-.25 0c-3.44-.48-6-2.89-6-5.78 0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 0 1-1.16 3.05Zm-1.71-4.81H15a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38h1.48a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.38h-1.03v-.6h1.06a.39.39 0 0 0 .38-.39.38.38 0 0 0-.38-.38h-1.06v-.61h1.06a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.48Z" id="line"></path></svg>
        )
    },
    "linkedin": {
        category: 'brand logo',
        name: 'linkedin',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" id="linkedin"></path></svg>
        )
    },
    "linkedin-alt": {
        category: 'brand logo',
        name: 'linkedin-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17.5 8.999a5.419 5.419 0 0 0-2.565.645A1 1 0 0 0 14 8.999h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0v5.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.5a5.507 5.507 0 0 0-5.5-5.5Zm3.5 12h-2v-4.5a3 3 0 1 0-6 0v4.5h-2v-10h2v.703a1 1 0 0 0 1.781.625A3.483 3.483 0 0 1 21 14.5Zm-14-12H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1Zm-1 12H4v-10h2ZM5.015 1.542a3.233 3.233 0 1 0-.057 6.457h.028a3.233 3.233 0 1 0 .029-6.457Zm-.029 4.457h-.028a1.222 1.222 0 0 1-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 0 1 6.41 4.771c0 .746-.56 1.228-1.425 1.228Z" id="linkedin-alt"></path></svg>
        )
    },
    "linux": {
        category: 'brand logo',
        name: 'linux',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.7 17.6c-.1-.2-.2-.4-.2-.6 0-.4-.2-.7-.5-1-.1-.1-.3-.2-.4-.2.6-1.8-.3-3.6-1.3-4.9-.8-1.2-2-2.1-1.9-3.7 0-1.9.2-5.4-3.3-5.1-3.6.2-2.6 3.9-2.7 5.2 0 1.1-.5 2.2-1.3 3.1-.2.2-.4.5-.5.7-1 1.2-1.5 2.8-1.5 4.3-.2.2-.4.4-.5.6-.1.1-.2.2-.2.3-.1.1-.3.2-.5.3-.4.1-.7.3-.9.7-.1.3-.2.7-.1 1.1.1.2.1.4 0 .7-.2.4-.2.9 0 1.4.3.4.8.5 1.5.6.5 0 1.1.2 1.6.4.5.3 1.1.5 1.7.5.3 0 .7-.1 1-.2.3-.2.5-.4.6-.7.4 0 1-.2 1.7-.2.6 0 1.2.2 2 .1 0 .1 0 .2.1.3.2.5.7.9 1.3 1h.2c.8-.1 1.6-.5 2.1-1.1.4-.4.9-.7 1.4-.9.6-.3 1-.5 1.1-1 .1-.7-.1-1.1-.5-1.7zM12.8 4.8c.6.1 1.1.6 1 1.2 0 .3-.1.6-.3.9h-.1c-.2-.1-.3-.1-.4-.2.1-.1.1-.3.2-.5 0-.4-.2-.7-.4-.7-.3 0-.5.3-.5.7v.1c-.1-.1-.3-.1-.4-.2V6c-.1-.5.3-1.1.9-1.2zm-.3 2c.1.1.3.2.4.2.1 0 .3.1.4.2.2.1.4.2.4.5s-.3.6-.9.8c-.2.1-.3.1-.4.2-.3.2-.6.3-1 .3-.3 0-.6-.2-.8-.4-.1-.1-.2-.2-.4-.3-.1-.1-.3-.3-.4-.6 0-.1.1-.2.2-.3.3-.2.4-.3.5-.4l.1-.1c.2-.3.6-.5 1-.5.3.1.6.2.9.4zM10.4 5c.4 0 .7.4.8 1.1v.2c-.1 0-.3.1-.4.2v-.2c0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6 0 .2.1.3.2.4 0 0-.1.1-.2.1-.2-.2-.4-.5-.4-.8 0-.6.3-1.1.7-1.1zm-1 16.1c-.7.3-1.6.2-2.2-.2-.6-.3-1.1-.4-1.8-.4-.5-.1-1-.1-1.1-.3-.1-.2-.1-.5.1-1 .1-.3.1-.6 0-.9-.1-.3-.1-.5 0-.8.1-.3.3-.4.6-.5.3-.1.5-.2.7-.4.1-.1.2-.2.3-.4.3-.4.5-.6.8-.6.6.1 1.1 1 1.5 1.9.2.3.4.7.7 1 .4.5.9 1.2.9 1.6 0 .5-.2.8-.5 1zm4.9-2.2c0 .1 0 .1-.1.2-1.2.9-2.8 1-4.1.3l-.6-.9c.9-.1.7-1.3-1.2-2.5-2-1.3-.6-3.7.1-4.8.1-.1.1 0-.3.8-.3.6-.9 2.1-.1 3.2 0-.8.2-1.6.5-2.4.7-1.3 1.2-2.8 1.5-4.3.1.1.1.1.2.1.1.1.2.2.3.2.2.3.6.4.9.4h.1c.4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.3-.1.6-.3.9-.6.4 1.3.8 2.5 1.4 3.6.4.8.7 1.6.9 2.5.3 0 .7.1 1 .3.8.4 1.1.7 1 1.2H18c0-.3-.2-.6-.9-.9-.7-.3-1.3-.3-1.5.4-.1 0-.2.1-.3.1-.8.4-.8 1.5-.9 2.6.1.4 0 .7-.1 1.1zm4.6.6c-.6.2-1.1.6-1.5 1.1-.4.6-1.1 1-1.9.9-.4 0-.8-.3-.9-.7-.1-.6-.1-1.2.2-1.8.1-.4.2-.7.3-1.1.1-1.2.1-1.9.6-2.2 0 .5.3.8.7 1 .5 0 1-.1 1.4-.5h.2c.3 0 .5 0 .7.2.2.2.3.5.3.7 0 .3.2.6.3.9.5.5.5.8.5.9-.1.2-.5.4-.9.6zm-9-12c-.1 0-.1 0-.1.1 0 0 0 .1.1.1s.1.1.1.1c.3.4.8.6 1.4.7.5-.1 1-.2 1.5-.6l.6-.3c.1 0 .1-.1.1-.1 0-.1 0-.1-.1-.1-.2.1-.5.2-.7.3-.4.3-.9.5-1.4.5-.5 0-.9-.3-1.2-.6-.1 0-.2-.1-.3-.1z" id="linux"></path></svg>
        )
    },
    "lottiefiles": {
        category: 'brand logo',
        name: 'lottiefiles',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 6c-2.8 0-4.4 2.8-5.9 5.5C9.9 13.8 8.7 16 7 16c-.6 0-1 .4-1 1s.4 1 1 1c2.8 0 4.4-2.8 5.9-5.5C14.1 10.2 15.3 8 17 8c.6 0 1-.4 1-1s-.4-1-1-1zm2-4H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14z" id="lottiefiles"></path></svg>
        )
    },
    "lottiefiles-alt": {
        category: 'brand logo',
        name: 'lottiefiles-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-2 6c-1.66 0-2.856 2.177-4.124 4.482C11.384 15.195 9.841 18 7 18a1 1 0 0 1 0-2c1.66 0 2.856-2.177 4.124-4.482C12.616 8.805 14.159 6 17 6a1 1 0 0 1 0 2Z" id="lottiefiles-alt"></path></svg>
        )
    },
    "master-card": {
        category: 'brand logo',
        name: 'master-card',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.265 5.274a6.681 6.681 0 0 0-3.273.855 6.728 6.728 0 1 0 0 11.745 6.726 6.726 0 1 0 3.273-12.6Zm-5.028 11.183a4.667 4.667 0 0 1-1.518.273 4.728 4.728 0 0 1 0-9.456 4.667 4.667 0 0 1 1.518.273 6.687 6.687 0 0 0 0 8.91Zm1.755-1.057a4.695 4.695 0 0 1 0-6.796 4.695 4.695 0 0 1 0 6.796Zm3.273 1.33a4.667 4.667 0 0 1-1.519-.273 6.687 6.687 0 0 0 0-8.91 4.667 4.667 0 0 1 1.519-.273 4.728 4.728 0 0 1 0 9.456Z" id="master-card"></path></svg>
        )
    },
    "medium-m": {
        category: 'brand logo',
        name: 'medium-m',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.21 6.417H22V4.083h-7.48l-2.486 9.167h-.068L9.503 4.083H2v2.334h.768a.896.896 0 0 1 .732.694v9.83a.84.84 0 0 1-.732.642H2v2.334h6v-2.334H6.5V7.25h.088l3.457 12.667h2.712L16.26 7.25h.073v10.333h-1.5v2.334H22v-2.334h-.791a.84.84 0 0 1-.709-.641v-9.83a.898.898 0 0 1 .71-.695Z" id="medium-m"></path></svg>
        )
    },
    "microsoft": {
        category: 'brand logo',
        name: 'microsoft',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 22h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5 2v9.5H22V2h-9.5zm0 20H22v-9.5h-9.5V22z" id="microsoft"></path></svg>
        )
    },
    "okta": {
        category: 'brand logo',
        name: 'okta',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 10c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" id="okta"></path></svg>
        )
    },
    "opera": {
        category: 'brand logo',
        name: 'opera',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.567 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899Zm0 18.384c-3.397 0-3.77-5.013-3.77-8.71V11.6c0-3.996.598-8.23 3.748-8.23s3.786 4.361 3.786 8.357c0 3.696-.367 8.657-3.764 8.657Z" id="opera"></path></svg>
        )
    },
    "opera-alt": {
        category: 'brand logo',
        name: 'opera-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.97 5c-3.643 0-3.643 5.123-3.643 6.858 0 1.953 0 7.142 3.66 7.142 3.655 0 3.655-5.162 3.655-7.105C15.642 7.32 14.406 5 11.97 5Zm.017 12c-1.101 0-1.66-1.73-1.66-5.195 0-2.191.285-4.805 1.644-4.805 1.454 0 1.67 3.067 1.67 4.895 0 3.388-.556 5.105-1.654 5.105Zm.001-16C5.937 1 1.71 5.482 1.71 11.9c0 5.456 3.847 11.1 10.285 11.1 6.434 0 10.278-5.644 10.278-11.101C22.273 5.482 18.044 1 11.988 1Zm.007 20C6.81 21 3.71 16.373 3.71 11.9c0-5.323 3.327-8.9 8.278-8.9 4.956 0 8.285 3.577 8.285 8.899 0 4.474-3.096 9.101-8.278 9.101Z" id="opera-alt"></path></svg>
        )
    },
    "pagelines": {
        category: 'brand logo',
        name: 'pagelines',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18.885 13.993c1.75-.901 2.282-3.35 2.282-3.35s-2.305-.99-4.055-.085a4.206 4.206 0 0 0-1.698 1.822 8.965 8.965 0 0 0 .06-.99 6.993 6.993 0 0 0 1.582-4.726C16.712 3.901 13.71 2 13.71 2s-2.442 2.583-2.095 5.35a6.819 6.819 0 0 0 2.518 4.03 9.322 9.322 0 0 1-.076 1.01 4.396 4.396 0 0 0-1.9-2.058c-1.774-.853-4.049.203-4.049.203s.603 2.432 2.376 3.284a4.72 4.72 0 0 0 3.258.076 9.433 9.433 0 0 1-1.458 2.9 4.393 4.393 0 0 0-2.012-1.98c-1.813-.763-4.028.404-4.028.404s.72 2.402 2.536 3.162a3.744 3.744 0 0 0 1.735.243 9.419 9.419 0 0 1-5.845 2.032.672.672 0 0 0 0 1.344 10.786 10.786 0 0 0 7.968-3.527 4.954 4.954 0 0 0 3.336 1.194c1.96-.207 3.34-2.299 3.34-2.299s-1.792-1.753-3.75-1.543a3.54 3.54 0 0 0-1.36.456 10.744 10.744 0 0 0 .895-2.275 5.153 5.153 0 0 0 3.786-.013Z" id="pagelines"></path></svg>
        )
    },
    "pagerduty": {
        category: 'brand logo',
        name: 'pagerduty',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 3c-1.6-.8-2.7-1-5.2-1H6v12.1h5.8c2.3 0 4-.1 5.5-1.1 1.6-1.1 2.6-3 2.5-5 .1-2.1-1-4-2.8-5zm-4.6 8.6H8.9v-7h3.3c3 0 4.5 1 4.5 3.4.1 2.6-1.8 3.6-4.3 3.6zM6 22h2.9v-5.3H6V22z" id="pagerduty"></path></svg>
        )
    },
    "paypal": {
        category: 'brand logo',
        name: 'paypal',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.437 7.104a3.823 3.823 0 0 0-.573-.523 4.725 4.725 0 0 0-1.157-3.74C17.623 1.619 15.775 1 13.214 1H7.001a1.892 1.892 0 0 0-1.864 1.592l-2.59 16.406a1.533 1.533 0 0 0 1.516 1.785h2.664l-.082.52A1.467 1.467 0 0 0 8.093 23h3.235a1.761 1.761 0 0 0 1.75-1.47l.641-4.031.011-.055h.299c4.032 0 6.55-1.993 7.285-5.762a5.149 5.149 0 0 0-.877-4.578Zm-12.595 6.6-.714 4.535-.086.544H4.606L7.097 3h6.117c1.936 0 3.318.404 3.993 1.164a2.967 2.967 0 0 1 .607 2.733l-.018.113c-.012.076-.023.15-.044.246a5.846 5.846 0 0 1-2.005 3.67 6.677 6.677 0 0 1-4.217 1.183H9.707a1.88 1.88 0 0 0-1.865 1.595Zm11.51-2.405c-.552 2.828-2.243 4.145-5.323 4.145h-.484a1.761 1.761 0 0 0-1.75 1.473l-.65 4.074L8.717 21l.478-3.034.612-3.853h1.719c.157 0 .295-.023.448-.029.359-.012.717-.026 1.053-.068.205-.025.393-.072.59-.108.273-.05.545-.1.801-.171.19-.053.368-.122.55-.186.238-.085.474-.174.697-.279a7 7 0 0 0 .486-.257 6.771 6.771 0 0 0 .613-.392c.142-.102.282-.208.415-.32a6.564 6.564 0 0 0 .537-.52c.113-.12.228-.237.333-.367a7.09 7.09 0 0 0 .48-.693c.076-.122.161-.235.232-.363a8.332 8.332 0 0 0 .52-1.154c.009-.024.021-.044.03-.068.004-.01.01-.02.014-.032a4.299 4.299 0 0 1 .026 2.193Z" id="paypal"></path></svg>
        )
    },
    "programming-language": {
        category: 'brand logo',
        name: 'programming-language',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m22 3-3 15.1-9.1 3-7.9-3 .8-4.1h3.4l-.4 1.7 4.8 1.8 5.5-1.8.8-3.8H3.2l.7-3.4h13.6l.5-2.1H4.3L5 3h17z" id="programming-language"></path></svg>
        )
    },
    "react": {
        category: 'brand logo',
        name: 'react',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Zm8.005 1.938q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635 18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Z" id="react"></path></svg>
        )
    },
    "reddit-alien-alt": {
        category: 'brand logo',
        name: 'reddit-alien-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M14.41 16.867a3.375 3.375 0 0 1-2.368.633 3.368 3.368 0 0 1-2.365-.632 1 1 0 0 0-1.416 1.414 5.11 5.11 0 0 0 3.781 1.218 5.12 5.12 0 0 0 3.782-1.217 1 1 0 1 0-1.414-1.416ZM9.2 15.002a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1ZM23 11.78a3.772 3.772 0 0 0-6.794-2.264 16.505 16.505 0 0 0-3.05-.479l.856-5.705 2.087.71a2.997 2.997 0 0 0 5.994-.064v-.023a3.029 3.029 0 0 0-3-2.955 2.977 2.977 0 0 0-2.332 1.155l-3.239-1.101a.999.999 0 0 0-1.311.798l-1.077 7.175a16.664 16.664 0 0 0-3.34.489 3.768 3.768 0 0 0-6.225 4.234A4.862 4.862 0 0 0 1 16c0 3.925 4.832 7 11 7s11-3.075 11-7a4.862 4.862 0 0 0-.569-2.249 3.783 3.783 0 0 0 .569-1.97ZM19.093 3a1 1 0 1 1-1 1 1.017 1.017 0 0 1 1-1ZM4.78 10a1.76 1.76 0 0 1 .882.25 9.979 9.979 0 0 0-2.648 1.673C3.01 11.876 3 11.828 3 11.78A1.783 1.783 0 0 1 4.78 10ZM12 21c-4.879 0-9-2.29-9-5s4.121-5 9-5 9 2.29 9 5-4.121 5-9 5Zm8.986-9.077a9.978 9.978 0 0 0-2.648-1.673 1.76 1.76 0 0 1 .882-.25A1.783 1.783 0 0 1 21 11.78c0 .048-.01.096-.014.143Z" id="reddit-alien-alt"></path></svg>
        )
    },
    "skype": {
        category: 'brand logo',
        name: 'skype',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M21.435 14.156a9.586 9.586 0 0 0 .211-2.027 9.477 9.477 0 0 0-9.54-9.422 9.114 9.114 0 0 0-1.625.141A5.536 5.536 0 0 0 2 7.466a5.429 5.429 0 0 0 .753 2.756 10.02 10.02 0 0 0-.189 1.884 9.339 9.339 0 0 0 9.54 9.258 8.567 8.567 0 0 0 1.743-.166 5.58 5.58 0 0 0 2.616.802 5.433 5.433 0 0 0 4.97-7.844Zm-4.995 1.837a3.631 3.631 0 0 1-1.625 1.225 6.34 6.34 0 0 1-2.52.447 6.217 6.217 0 0 1-2.898-.612 3.733 3.733 0 0 1-1.32-1.178 2.574 2.574 0 0 1-.494-1.413.88.88 0 0 1 .307-.684 1.09 1.09 0 0 1 .776-.282.944.944 0 0 1 .637.212 1.793 1.793 0 0 1 .447.659 3.398 3.398 0 0 0 .495.873 1.79 1.79 0 0 0 .73.564 3.014 3.014 0 0 0 1.249.236 2.922 2.922 0 0 0 1.72-.447 1.332 1.332 0 0 0 .66-1.131 1.135 1.135 0 0 0-.354-.871 2.185 2.185 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a13.99 13.99 0 0 1-2.144-.636 3.348 3.348 0 0 1-1.366-1.013 2.474 2.474 0 0 1-.495-1.578 2.63 2.63 0 0 1 .542-1.602 3.412 3.412 0 0 1 1.53-1.084 6.652 6.652 0 0 1 2.38-.376 6.403 6.403 0 0 1 1.885.258 4.072 4.072 0 0 1 1.318.66 2.916 2.916 0 0 1 .778.872 1.803 1.803 0 0 1 .236.87.962.962 0 0 1-.307.708.991.991 0 0 1-.753.306.974.974 0 0 1-.636-.189 2.382 2.382 0 0 1-.471-.611 2.937 2.937 0 0 0-.778-.967 2.376 2.376 0 0 0-1.46-.353 2.703 2.703 0 0 0-1.508.377 1.076 1.076 0 0 0-.565.896.958.958 0 0 0 .188.565 1.419 1.419 0 0 0 .542.4 2.693 2.693 0 0 0 .683.26c.236.07.613.164 1.154.282.66.142 1.273.306 1.815.471a5.43 5.43 0 0 1 1.389.636 2.857 2.857 0 0 1 .895.942 2.828 2.828 0 0 1 .33 1.39 2.89 2.89 0 0 1-.542 1.814Z" id="skype"></path></svg>
        )
    },
    "skype-alt": {
        category: 'brand logo',
        name: 'skype-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.14 11.813a5.076 5.076 0 0 0-1.292-.593c-.28-.085-.59-.168-.91-.247-.28-.078-.612-.158-1.022-.248a9.315 9.315 0 0 1-1.436-.424 1.496 1.496 0 0 1-.616-.447.843.843 0 0 1-.16-.566.967.967 0 0 1 .205-.597 1.598 1.598 0 0 1 .7-.475A4.012 4.012 0 0 1 12.031 8a3.787 3.787 0 0 1 1.106.146 2.083 2.083 0 0 1 .663.322 1.235 1.235 0 0 1 .325.343 1 1 0 1 0 1.761-.948 3.147 3.147 0 0 0-.837-.958 4.006 4.006 0 0 0-1.319-.669A5.768 5.768 0 0 0 12.032 6a5.963 5.963 0 0 0-2.145.35A3.552 3.552 0 0 0 8.31 7.492a2.977 2.977 0 0 0-.604 1.797 2.839 2.839 0 0 0 .58 1.792 3.5 3.5 0 0 0 1.438 1.072 10.582 10.582 0 0 0 1.307.408c.008.003.014.01.022.012.192.058.498.135.94.23.173.038.335.079.497.12.016.004.039.009.054.014l.018.002c.248.064.487.129.706.196a3.023 3.023 0 0 1 .763.344 1.127 1.127 0 0 1 .363.368 1.201 1.201 0 0 1 .118.585 1.152 1.152 0 0 1-.214.732 1.763 1.763 0 0 1-.802.585 3.787 3.787 0 0 1-1.487.252 3.689 3.689 0 0 1-1.703-.344 1.756 1.756 0 0 1-.616-.547 1.016 1.016 0 0 1-.202-.503 1 1 0 0 0-2 0 2.94 2.94 0 0 0 .556 1.64 3.774 3.774 0 0 0 1.342 1.187 5.621 5.621 0 0 0 2.623.567 5.708 5.708 0 0 0 2.254-.405 3.71 3.71 0 0 0 1.665-1.273 3.146 3.146 0 0 0 .584-1.926 3.09 3.09 0 0 0-.375-1.53 3.165 3.165 0 0 0-.997-1.053Zm7.221 1.878A10.491 10.491 0 0 0 10.31 1.64a6.499 6.499 0 0 0-8.67 8.67 10.491 10.491 0 0 0 12.05 12.05 6.499 6.499 0 0 0 8.67-8.67ZM16.5 21a4.506 4.506 0 0 1-2.17-.558 1.004 1.004 0 0 0-.677-.106A8.492 8.492 0 0 1 3.5 12a8.583 8.583 0 0 1 .164-1.654 1.003 1.003 0 0 0-.106-.677A4.5 4.5 0 0 1 9.67 3.558a1 1 0 0 0 .678.106A8.492 8.492 0 0 1 20.5 12a8.583 8.583 0 0 1-.164 1.654 1.003 1.003 0 0 0 .106.677A4.499 4.499 0 0 1 16.5 21Z" id="skype-alt"></path></svg>
        )
    },
    "integration-slack": {
        category: 'brand logo',
        name: 'integration-slack',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.73a3.182 3.182 0 0 0-3.18-3.179 3.145 3.145 0 0 0-1.363.32V5.188a3.172 3.172 0 0 0-1.978-2.944 3.177 3.177 0 0 0-3.473.727 3.169 3.169 0 0 0-5.133 3.58H5.19a3.177 3.177 0 0 0-3.113 3.823c.13.619.441 1.184.894 1.625a3.166 3.166 0 0 0 3.582 5.13v1.68a3.172 3.172 0 0 0 3.826 3.112 3.176 3.176 0 0 0 1.626-.894 3.169 3.169 0 0 0 5.132-3.58h1.682a3.177 3.177 0 0 0 3.113-3.823A3.173 3.173 0 0 0 21.039 12 3.167 3.167 0 0 0 22 9.73Zm-9.086-4.54a1.362 1.362 0 0 1 2.726 0v4.54a1.362 1.362 0 0 1-2.726 0V5.19Zm-6.36 9.08a1.362 1.362 0 1 1-1.363-1.362h1.363v1.362Zm4.543 4.54a1.362 1.362 0 0 1-2.327.964 1.362 1.362 0 0 1-.399-.963v-4.54a1.362 1.362 0 0 1 2.726 0v4.54Zm-1.363-7.718H5.191a1.363 1.363 0 1 1 0-2.724h4.543a1.363 1.363 0 1 1 0 2.724Zm1.363-4.54H9.734a1.364 1.364 0 0 1-.964-2.326 1.363 1.363 0 0 1 2.327.963v1.362Zm.909 5.5a3.777 3.777 0 0 0-.053-.052l.053-.053.053.053a3.298 3.298 0 0 0-.053.053Zm2.271 8.121a1.365 1.365 0 0 1-1.363-1.362v-1.362h1.363a1.364 1.364 0 0 1 .964 2.325 1.363 1.363 0 0 1-.964.4Zm4.543-4.54h-4.543a1.363 1.363 0 1 1 0-2.725h4.543a1.363 1.363 0 1 1 0 2.725Zm0-4.541h-1.363V9.73a1.362 1.362 0 1 1 1.363 1.362Z" id="integration-slack"></path></svg>
        )
    },
    "slack-alt": {
        category: 'brand logo',
        name: 'slack-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23 9.5A3.504 3.504 0 0 0 19.5 6a3.46 3.46 0 0 0-1.5.351V4.5a3.495 3.495 0 0 0-6-2.442A3.487 3.487 0 0 0 6.351 6H4.5a3.495 3.495 0 0 0-2.442 6A3.487 3.487 0 0 0 6 17.649V19.5a3.495 3.495 0 0 0 6 2.442A3.487 3.487 0 0 0 17.649 18H19.5a3.495 3.495 0 0 0 2.442-6A3.486 3.486 0 0 0 23 9.5Zm-10-5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0Zm-7 10A1.5 1.5 0 1 1 4.5 13H6Zm5 5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 3 0ZM9.5 11h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3ZM11 6H9.5A1.5 1.5 0 1 1 11 4.5Zm1 6.058a3.725 3.725 0 0 0-.058-.058l.058-.058.058.058-.058.058ZM14.5 21a1.502 1.502 0 0 1-1.5-1.5V18h1.5a1.5 1.5 0 0 1 0 3Zm5-5h-5a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3Zm0-5H18V9.5a1.5 1.5 0 1 1 1.5 1.5Z" id="slack-alt"></path></svg>
        )
    },
    "snapchat-alt": {
        category: 'brand logo',
        name: 'snapchat-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.951 15.614a4.724 4.724 0 0 1-2.981-2.173 1 1 0 1 0-1.657 1.121 7.688 7.688 0 0 0 2.403 2.335c-.135.025-.281.05-.442.075a1.367 1.367 0 0 0-1.076 1.207 6.062 6.062 0 0 0-2.014-.004 4.64 4.64 0 0 0-1.958.956 3.484 3.484 0 0 1-2.104.87h-.26a3.485 3.485 0 0 1-2.106-.872 4.627 4.627 0 0 0-1.929-.95 6.39 6.39 0 0 0-2.04.005 1.368 1.368 0 0 0-1.062-1.21 12.74 12.74 0 0 1-.435-.075A6.857 6.857 0 0 0 6.085 15.4a6.714 6.714 0 0 0 .635-.868 1 1 0 0 0-1.696-1.06 4.907 4.907 0 0 1-.448.616 4.252 4.252 0 0 1-2.553 1.528 1.224 1.224 0 0 0-1.032 1.236 1.28 1.28 0 0 0 .115.533c.316.716 1.156 1.168 2.785 1.474l.03.13c.03.118.058.239.093.348a1.289 1.289 0 0 0 1.278.945 2.59 2.59 0 0 0 .603-.087 4.67 4.67 0 0 1 1.588-.046 3.008 3.008 0 0 1 1.123.618 5.413 5.413 0 0 0 3.255 1.235h.261a5.445 5.445 0 0 0 3.274-1.248 2.915 2.915 0 0 1 1.131-.61 3.485 3.485 0 0 1 .624-.052 4.27 4.27 0 0 1 .955.106 3.788 3.788 0 0 0 .616.064 1.256 1.256 0 0 0 1.245-.923c.038-.122.067-.24.094-.355l.032-.124c1.624-.305 2.467-.754 2.767-1.44a1.17 1.17 0 0 0 .127-.48 1.244 1.244 0 0 0-1.036-1.326Zm-18.15-4.466a1.005 1.005 0 0 0 1.057-.484 3.138 3.138 0 0 0 1.275.338 1.794 1.794 0 0 0 1.265-.499 1 1 0 0 0 .317-.79l-.036-.602a9.902 9.902 0 0 1 .156-3.561 4.26 4.26 0 0 1 3.966-2.544l.388-.004a4.264 4.264 0 0 1 3.96 2.547 9.917 9.917 0 0 1 .156 3.564l-.01.163-.027.444a1.028 1.028 0 0 0 .312.778 1.795 1.795 0 0 0 1.254.503 3.271 3.271 0 0 0 1.241-.365 1 1 0 0 0 .916.598h.018a1 1 0 0 0 .982-1.017 1.642 1.642 0 0 0-1.185-1.451 1.914 1.914 0 0 0-1.477.01 9.471 9.471 0 0 0-.354-4.042 6.236 6.236 0 0 0-5.796-3.732l-.393.004a6.222 6.222 0 0 0-5.777 3.73 9.586 9.586 0 0 0-.352 4.094l-.111-.052a1.909 1.909 0 0 0-2.537 1.199 1.002 1.002 0 0 0 .793 1.171Z" id="snapchat-alt"></path></svg>
        )
    },
    "snapchat-ghost": {
        category: 'brand logo',
        name: 'snapchat-ghost',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.798 16.987c-2.867-.472-4.151-3.401-4.204-3.526l-.006-.011a1.07 1.07 0 0 1-.102-.898c.192-.454.83-.656 1.251-.79.106-.033.205-.065.283-.096.763-.3.918-.613.914-.822a.662.662 0 0 0-.5-.543l-.007-.002a.946.946 0 0 0-.356-.069.755.755 0 0 0-.313.063 2.54 2.54 0 0 1-.955.266.821.821 0 0 1-.53-.178l.032-.53.004-.065a10.102 10.102 0 0 0-.24-4.035 5.248 5.248 0 0 0-4.874-3.14l-.402.005a5.24 5.24 0 0 0-4.864 3.137 10.09 10.09 0 0 0-.242 4.031q.02.299.036.598a.848.848 0 0 1-.584.178 2.453 2.453 0 0 1-1.014-.268.575.575 0 0 0-.245-.049.834.834 0 0 0-.81.533c-.082.43.532.743.906.89.08.032.178.063.283.096.422.134 1.06.336 1.252.79a1.072 1.072 0 0 1-.102.898l-.006.011a7.028 7.028 0 0 1-1.069 1.663A5.215 5.215 0 0 1 2.2 16.987a.24.24 0 0 0-.2.25.38.38 0 0 0 .03.13c.177.411 1.059.75 2.553.981.14.022.198.25.28.622.032.15.066.305.113.465a.293.293 0 0 0 .32.228 2.485 2.485 0 0 0 .424-.06 5.53 5.53 0 0 1 1.12-.127 4.954 4.954 0 0 1 .809.068 3.877 3.877 0 0 1 1.535.784 4.443 4.443 0 0 0 2.69 1.06c.033 0 .067-.001.1-.004.04.002.095.004.151.004a4.448 4.448 0 0 0 2.692-1.06 3.873 3.873 0 0 1 1.533-.784 4.973 4.973 0 0 1 .808-.068 5.593 5.593 0 0 1 1.12.119 2.391 2.391 0 0 0 .425.053h.024a.279.279 0 0 0 .295-.22 6.52 6.52 0 0 0 .114-.462c.081-.371.14-.598.28-.62 1.494-.23 2.377-.57 2.551-.978a.385.385 0 0 0 .032-.13.24.24 0 0 0-.2-.25Z" id="snapchat-ghost"></path></svg>
        )
    },
    "snapchat-square": {
        category: 'brand logo',
        name: 'snapchat-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.973 6.68a6.124 6.124 0 0 0-.098-1.073 4.372 4.372 0 0 0-.406-1.246 4.324 4.324 0 0 0-.832-1.11 4.125 4.125 0 0 0-1.816-1.036 7.36 7.36 0 0 0-1.92-.205L16.898 2H7.099v.01a10.488 10.488 0 0 0-1.101.05 5.243 5.243 0 0 0-1.176.264A4.262 4.262 0 0 0 2.219 5.17a7.338 7.338 0 0 0-.205 1.905l-.006 9.838a9.445 9.445 0 0 0 .09 1.333 4.616 4.616 0 0 0 .41 1.345 4.305 4.305 0 0 0 1.201 1.454 3.903 3.903 0 0 0 1.203.651 6.516 6.516 0 0 0 1.976.29c.42.003.839.014 1.258.012 3.047-.013 6.094.022 9.14-.019a7.19 7.19 0 0 0 1.2-.127 4.06 4.06 0 0 0 2.007-.977 4.162 4.162 0 0 0 1.326-2.212 8.062 8.062 0 0 0 .173-1.75v-.117c0-.046-.017-9.984-.019-10.115Zm-2.676 9.25c-.128.3-.774.548-1.868.717-.102.016-.146.182-.205.454-.024.112-.05.222-.083.337a.204.204 0 0 1-.216.162h-.018a1.746 1.746 0 0 1-.31-.04 4.097 4.097 0 0 0-.821-.086 3.637 3.637 0 0 0-.592.05 2.836 2.836 0 0 0-1.123.574 3.257 3.257 0 0 1-1.97.776 2.33 2.33 0 0 1-.112-.003.854.854 0 0 1-.073.003 3.253 3.253 0 0 1-1.97-.776 2.84 2.84 0 0 0-1.123-.574 3.633 3.633 0 0 0-.592-.05 4.047 4.047 0 0 0-.82.093 1.82 1.82 0 0 1-.311.044.214.214 0 0 1-.234-.167 4.084 4.084 0 0 1-.083-.34c-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.278.278 0 0 1-.023-.095.176.176 0 0 1 .147-.183 3.818 3.818 0 0 0 2.296-1.365A5.145 5.145 0 0 0 7.9 13.07l.004-.008a.785.785 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a3.27 3.27 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39.42.42 0 0 1 .18.036 1.796 1.796 0 0 0 .742.196.621.621 0 0 0 .428-.131q-.012-.219-.027-.438a7.388 7.388 0 0 1 .177-2.951 3.837 3.837 0 0 1 3.562-2.298l.295-.002a3.843 3.843 0 0 1 3.568 2.298 7.398 7.398 0 0 1 .176 2.955l-.003.047-.023.389a.602.602 0 0 0 .388.13 1.86 1.86 0 0 0 .7-.195.552.552 0 0 1 .228-.046.694.694 0 0 1 .261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.784.784 0 0 0 .074.657l.004.009a4.522 4.522 0 0 0 3.079 2.582.176.176 0 0 1 .146.183.28.28 0 0 1-.023.096Z" id="snapchat-square"></path></svg>
        )
    },
    "swiggy": {
        category: 'brand logo',
        name: 'swiggy',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12.878 5.928a.297.297 0 0 1 .314.335l.003.276c.001.593-.002 1.185.002 1.777.004.434.08.517.5.57a14.832 14.832 0 0 0 3.148-.046 4.948 4.948 0 0 0 1.573-.374.507.507 0 0 0 .344-.603 6.831 6.831 0 0 0-5.343-5.71 6.608 6.608 0 0 0-3.648.242 6.718 6.718 0 0 0-2.694 1.752A6.272 6.272 0 0 0 5.23 8.432a11.188 11.188 0 0 0 1.526 5.517 1.342 1.342 0 0 0 1.33.748c.653-.016 1.307-.004 1.96-.004v-.003h2.084c.25 0 .447.06.445.372-.005.726 0 1.45-.003 2.176-.002.22-.064.432-.326.434-.264.002-.327-.209-.33-.43-.005-.347 0-.694 0-1.041 0-.451-.073-.557-.523-.64a7.702 7.702 0 0 0-2.348-.02 2.596 2.596 0 0 0-.8.196c-.212.1-.296.245-.193.467.107.231.206.467.333.688a43.875 43.875 0 0 0 3.426 4.956c.154.199.273.203.431.01.349-.426.715-.839 1.06-1.268a34.226 34.226 0 0 0 3.577-5.26 14.171 14.171 0 0 0 1.494-3.871 1.203 1.203 0 0 0-1.012-1.635 6.943 6.943 0 0 0-1.67-.162c-.909-.006-1.818-.003-2.727-.002-.245 0-.427-.07-.427-.358 0-1.01-.002-2.022.002-3.033 0-.216.104-.349.339-.34Z" id="swiggy"></path></svg>
        )
    },
    "telegram": {
        category: 'brand logo',
        name: 'telegram',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.994 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z" id="telegram"></path></svg>
        )
    },
    "telegram-alt": {
        category: 'brand logo',
        name: 'telegram-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261 2.02 6.682a.998.998 0 0 0 .119.252c.008.012.019.02.027.033a.988.988 0 0 0 .211.215.972.972 0 0 0 .07.05.986.986 0 0 0 .31.136l.013.001.006.003a1.022 1.022 0 0 0 .203.02l.018-.003a.993.993 0 0 0 .301-.052c.023-.008.042-.02.064-.03a.993.993 0 0 0 .205-.114 250.76 250.76 0 0 1 .152-.129l2.702-2.983 4.03 3.122a2.023 2.023 0 0 0 1.241.427 2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM9.37 14.736a.994.994 0 0 0-.272.506l-.31 1.504-.784-2.593 4.065-2.117Zm8.302 5.304-4.763-3.69a1.001 1.001 0 0 0-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4Z" id="telegram-alt"></path></svg>
        )
    },
    "tumblr": {
        category: 'brand logo',
        name: 'tumblr',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M16.79 18a4.65 4.65 0 0 1-1.62.35 1.75 1.75 0 0 1-1.92-2v-6.23h4v-3h-4V2h-2.92a.15.15 0 0 0-.14.15 6.11 6.11 0 0 1-3.94 5.39v2.58h2v6.54c0 2.23 1.65 5.41 6 5.34 1.47 0 3.11-.64 3.47-1.17Z" id="tumblr"></path></svg>
        )
    },
    "tumblr-alt": {
        category: 'brand logo',
        name: 'tumblr-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="m17.434 20.508-.962-2.853a1 1 0 0 0-1.38-.583 3.763 3.763 0 0 1-1.208.249.937.937 0 0 1-.66-.165 1.2 1.2 0 0 1-.239-.808V12h3.017a1 1 0 0 0 1-1V7.095a1 1 0 0 0-1-1H13V2a1 1 0 0 0-1-1H9.07a1.148 1.148 0 0 0-1.137 1.04 5.093 5.093 0 0 1-3.28 4.558 1 1 0 0 0-.662.94v3.585a1 1 0 0 0 1 1h1.025v4.535a6.411 6.411 0 0 0 1.886 4.478A6.905 6.905 0 0 0 12.877 23h.163c1.546-.026 3.618-.648 4.273-1.608a.998.998 0 0 0 .12-.883Zm-4.427.49a4.87 4.87 0 0 1-3.702-1.288 4.37 4.37 0 0 1-1.29-3.052v-5.535a1 1 0 0 0-1-1H5.992V8.206A6.954 6.954 0 0 0 9.81 3H11v4.095a1 1 0 0 0 1 1h3.002V10h-3.017a1 1 0 0 0-1 1v5.365a3.077 3.077 0 0 0 .857 2.235 2.767 2.767 0 0 0 2.096.72 5.908 5.908 0 0 0 .947-.113l.425 1.26a5.909 5.909 0 0 1-2.303.531Z" id="tumblr-alt"></path></svg>
        )
    },
    "tumblr-square": {
        category: 'brand logo',
        name: 'tumblr-square',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M2 2v20h20V2Zm11.57 15.85a3.4 3.4 0 0 1-3.75-3.33v-4.08H8.56V8.83A3.83 3.83 0 0 0 11 5.47a.09.09 0 0 1 .09-.09h1.82v3.17h2.5v1.89h-2.49v3.89a1.11 1.11 0 0 0 1.2 1.23 3 3 0 0 0 1-.22l.6 1.78a3.34 3.34 0 0 1-2.15.73Z" id="tumblr-square"></path></svg>
        )
    },
    "twitter": {
        category: 'brand logo',
        name: 'twitter',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.17 4.9 4.9 0 0 1-.77-.07 4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06 11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z" id="twitter"></path></svg>
        )
    },
    "twitter-alt": {
        category: 'brand logo',
        name: 'twitter-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.991 3.95a1 1 0 0 0-1.51-.86 7.48 7.48 0 0 1-1.874.794 5.152 5.152 0 0 0-3.374-1.242 5.232 5.232 0 0 0-5.223 5.063 11.032 11.032 0 0 1-6.814-3.924 1.012 1.012 0 0 0-.857-.365.999.999 0 0 0-.785.5 5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89 3.042 3.042 0 0 0 .027.439 5.185 5.185 0 0 0 1.568 3.312.998.998 0 0 0-.066.77 5.204 5.204 0 0 0 2.362 2.922 7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061 12.788 12.788 0 0 0 12.465-9.363 12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08 10.685 10.685 0 0 1-10.546 7.93 10.938 10.938 0 0 1-2.55-.301 9.48 9.48 0 0 0 2.942-1.564 1 1 0 0 0-.602-1.786 3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943 3.198 3.198 0 0 1-2.25-1.726 5.3 5.3 0 0 0 .545.046 1.02 1.02 0 0 0 .984-.696 1 1 0 0 0-.4-1.137 3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48 1.02 1.02 0 0 0 .817-.36 1 1 0 0 0 .206-.867 3.157 3.157 0 0 1-.087-.729 3.23 3.23 0 0 1 3.226-3.226 3.184 3.184 0 0 1 2.345 1.02.993.993 0 0 0 .921.298 9.27 9.27 0 0 0 1.212-.322 6.681 6.681 0 0 1-1.026 1.524Z" id="twitter-alt"></path></svg>
        )
    },
    "visual-studio": {
        category: 'brand logo',
        name: 'visual-studio',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M16.85 2 9.09 9.77l-4.9-3.86L2.05 7v10l2.15 1.09 4.93-3.85L16.87 22 22 19.93V4ZM4.37 14.3V9.65l2.44 2.43Zm12.33 1.29L12.05 12l4.65-3.59Z" id="visual-studio"></path></svg>
        )
    },
    "vk": {
        category: 'brand logo',
        name: 'vk',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.073 2H8.937C3.333 2 2 3.333 2 8.927v6.136C2 20.666 3.323 22 8.927 22h6.136C20.666 22 22 20.677 22 15.073V8.937C22 3.333 20.677 2 15.073 2Zm3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.833-1.229-.937-1.448-.937-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667 11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.458c.375 0 .51.167.657.552.708 2.084 1.916 3.896 2.406 3.896.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417.188 0 .333-.104.677-.448a11.999 11.999 0 0 0 1.792-2.98.628.628 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646.145.219.656.646 1 1.052a6.486 6.486 0 0 1 1.229 1.708c.125.406-.084.615-.5.615Z" id="vk"></path></svg>
        )
    },
    "vk-alt": {
        category: 'brand logo',
        name: 'vk-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.744 13.53a5.519 5.519 0 0 0-.978-.837 7.873 7.873 0 0 0 2.859-4.471 1 1 0 1 0-1.95-.444 5.86 5.86 0 0 1-3.02 3.903V8.002a.958.958 0 0 0-.044-.216 1.024 1.024 0 0 0-.035-.171.991.991 0 0 0-.167-.25c-.018-.02-.027-.048-.046-.068a1.001 1.001 0 0 0-.246-.167c-.026-.014-.045-.037-.072-.048a1.02 1.02 0 0 0-.236-.049.945.945 0 0 0-.152-.031L11.003 7H11a.995.995 0 0 0-.35 1.929v4.89a11.307 11.307 0 0 1-3.01-5.984 1 1 0 1 0-1.972.334 13.334 13.334 0 0 0 5.4 8.644.986.986 0 0 0 .128.064.94.94 0 0 0 .108.054.994.994 0 0 0 .35.071.983.983 0 0 0 .424-.102c.01-.005.021-.002.031-.007a.993.993 0 0 0 .24-.176c.015-.014.024-.03.038-.045a.988.988 0 0 0 .16-.237.952.952 0 0 0 .037-.087.988.988 0 0 0 .07-.346v-2.126a3.551 3.551 0 0 1 1.616 1.005l1.647 1.797a1 1 0 1 0 1.474-1.352ZM15.073 1H8.937C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.937C23 2.78 21.222 1 15.073 1ZM21 15.073c0 5.04-.888 5.927-5.938 5.927H8.928C3.887 21 3 20.112 3 15.062V8.928C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938Z" id="vk-alt"></path></svg>
        )
    },
    "vuejs": {
        category: 'brand logo',
        name: 'vuejs',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M18.03 2.443h-3.642L12.013 6.4 9.63 2.444l-2.646-.001H.831L12.03 21.558 23.168 2.443Zm-6.005 15.15L4.322 4.443h2.824l4.885 8.406 4.847-8.407h2.81Z" id="vuejs"></path></svg>
        )
    },
    "vuejs-alt": {
        category: 'brand logo',
        name: 'vuejs-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22.867 3.374a1 1 0 0 0-.866-.502l-4.97-.004h-3.652a1.002 1.002 0 0 0-.817.425l-.559.796-.564-.798a.998.998 0 0 0-.816-.423H6.968l-4.973.026A1 1 0 0 0 1.137 4.4l10.02 17.106a1 1 0 0 0 .863.494 1 1 0 0 0 .864-.496l9.98-17.128a1.002 1.002 0 0 0 .003-1.002ZM10.105 4.868l1.085 1.533a.999.999 0 0 0 .816.423h.001a1.003 1.003 0 0 0 .817-.425L13.9 4.87l1.363-.002-3.244 5.454-3.275-5.454Zm1.912 14.15L3.74 4.885l2.67-.015 4.754 7.918a1 1 0 0 0 .857.485h.006a1 1 0 0 0 .857-.489l4.708-7.916 2.67.003Z" id="vuejs-alt"></path></svg>
        )
    },
    "whatsapp": {
        category: 'brand logo',
        name: 'whatsapp',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4" id="whatsapp"></path></svg>
        )
    },
    "whatsapp-alt": {
        category: 'brand logo',
        name: 'whatsapp-alt',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M22 6.55a12.61 12.61 0 0 0-.1-1.29 4.29 4.29 0 0 0-.37-1.08 3.66 3.66 0 0 0-.71-1 3.91 3.91 0 0 0-1-.71 4.28 4.28 0 0 0-1.08-.36A10.21 10.21 0 0 0 17.46 2H6.55a12.61 12.61 0 0 0-1.29.1 4.29 4.29 0 0 0-1.08.37 3.66 3.66 0 0 0-1 .71 3.91 3.91 0 0 0-.71 1 4.28 4.28 0 0 0-.36 1.08A10.21 10.21 0 0 0 2 6.54v10.91a12.61 12.61 0 0 0 .1 1.29 4.29 4.29 0 0 0 .37 1.08 3.66 3.66 0 0 0 .71 1 3.91 3.91 0 0 0 1 .71 4.28 4.28 0 0 0 1.08.36 10.21 10.21 0 0 0 1.28.11h10.91a12.61 12.61 0 0 0 1.29-.1 4.29 4.29 0 0 0 1.08-.37 3.66 3.66 0 0 0 1-.71 3.91 3.91 0 0 0 .71-1 4.28 4.28 0 0 0 .36-1.08 10.21 10.21 0 0 0 .11-1.28V6.55ZM12.23 19a7.12 7.12 0 0 1-3.43-.9l-3.8 1 1-3.72a7.11 7.11 0 0 1-1-3.58 7.18 7.18 0 1 1 7.23 7.2Zm0-13.13A6 6 0 0 0 7.18 15l.14.23-.6 2.19L9 16.8l.22.13a6 6 0 0 0 3 .83 6 6 0 0 0 6-6 6 6 0 0 0-6-6Zm3.5 8.52a1.82 1.82 0 0 1-1.21.85 2.33 2.33 0 0 1-1.12-.07 8.9 8.9 0 0 1-1-.38 8 8 0 0 1-3.06-2.7 3.48 3.48 0 0 1-.73-1.85 2 2 0 0 1 .63-1.5.65.65 0 0 1 .48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 0 1 0 .31 1.14 1.14 0 0 1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 0 0 1 1.24 5 5 0 0 0 1.44.89c.18.09.29.08.39 0s.45-.52.57-.7.24-.15.4-.09 1.05.49 1.23.58.29.13.34.21a1.56 1.56 0 0 1-.07.78Z" id="whatsapp-alt"></path></svg>
        )
    },
    "windows": {
        category: 'brand logo',
        name: 'windows',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 2 11.2 3.6v8l10.8-.1V2zM10.2 12.5 2 12.4v6.8l8.1 1.1.1-7.8zM2 4.8v6.8h8.1V3.7L2 4.8zm9.1 7.7v7.9L22 22v-9.4l-10.9-.1z" id="windows"></path></svg>
        )
    },
    "wordpress": {
        category: 'brand logo',
        name: 'wordpress',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.667 12a8.334 8.334 0 0 0 4.697 7.5L4.388 8.607A8.3 8.3 0 0 0 3.667 12zm8.48.729-2.501 7.265a8.337 8.337 0 0 0 5.121-.133.746.746 0 0 1-.06-.115l-2.56-7.017zm5.479-1.15a4.389 4.389 0 0 0-.687-2.298 3.903 3.903 0 0 1-.819-1.954 1.443 1.443 0 0 1 1.4-1.48c.037 0 .072.005.107.008a8.331 8.331 0 0 0-12.59 1.568c.196.006.38.01.537.01.871 0 2.22-.106 2.22-.106a.345.345 0 0 1 .054.687s-.452.052-.954.079l3.035 9.026 1.824-5.47-1.299-3.556c-.449-.027-.874-.08-.874-.08a.345.345 0 0 1 .053-.686s1.376.106 2.195.106c.871 0 2.221-.106 2.221-.106a.344.344 0 0 1 .053.687s-.452.052-.953.079l3.011 8.958.86-2.725c.336-.88.54-1.806.606-2.746zm1.743-2.72a7.866 7.866 0 0 1-.634 2.985l-2.545 7.359a8.334 8.334 0 0 0 3.123-11.2c.038.283.056.57.056.856zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.659 18.662a9.388 9.388 0 0 1-8.914-.867 9.432 9.432 0 0 1-3.407-4.136 9.386 9.386 0 0 1 .867-8.914 9.427 9.427 0 0 1 4.136-3.406 9.388 9.388 0 0 1 8.914.866 9.432 9.432 0 0 1 3.407 4.136 9.386 9.386 0 0 1-.867 8.914 9.427 9.427 0 0 1-4.136 3.407z" id="wordpress"></path></svg>
        )
    },
    "wordpress-simple": {
        category: 'brand logo',
        name: 'wordpress-simple',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2ZM3.01 12a8.955 8.955 0 0 1 .778-3.66l4.289 11.751A8.991 8.991 0 0 1 3.009 12ZM12 20.99a8.987 8.987 0 0 1-2.54-.366l2.698-7.839 2.763 7.572a.844.844 0 0 0 .065.123 8.971 8.971 0 0 1-2.986.51Zm1.239-13.207c.541-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.457.114-2.397.114c-.883 0-2.368-.114-2.368-.114a.372.372 0 0 0-.057.741s.459.057.943.085l1.401 3.838-1.968 5.901-3.274-9.739c.542-.028 1.03-.085 1.03-.085a.372.372 0 0 0-.058-.741s-1.456.114-2.396.114c-.169 0-.368-.004-.579-.01A8.988 8.988 0 0 1 18.071 5.37c-.039-.003-.076-.008-.116-.008a1.557 1.557 0 0 0-1.51 1.596 4.21 4.21 0 0 0 .883 2.109 4.736 4.736 0 0 1 .741 2.48 10.883 10.883 0 0 1-.684 2.906l-.897 2.996ZM16.52 19.77l2.746-7.94a8.489 8.489 0 0 0 .684-3.22 6.91 6.91 0 0 0-.06-.925 8.992 8.992 0 0 1-3.37 12.085Z" id="wordpress-simple"></path></svg>
        )
    },
    "youtube": {
        category: 'brand logo',
        name: 'youtube',
        tags: ['bullseye', 'bullseye', 'center', 'circle', 'focus', 'target', 'ui', 'user interface'],
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z" id="youtube"></path></svg>
        )
    },

}