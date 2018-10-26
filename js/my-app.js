// Initialize your app
var myApp = new Framework7({
    material: true,
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// ARRAY COLOR
var CSS_COLOR_NAMES = ["#1abc9c","#2ecc71","#3498db","#333333","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d","#3b5999","#21759b","#dd4b39","#af0606","#25D366","#e4405f","#0084ff","#bd081c","#1ab7ea","#df2029","#09b83e","#ea4c89","#55acee","#0077b5","#cd201f","#da552f","#00c300","#ff0084","#0077B5","#4c75a3","#eb4924","#ff6600","#02b875","#f94877","#00AFF0","#34465d","#ff5700","#ff3300","#ff3300","#00b489","#131418","#007ee5","#410093","#b92b27","#b92b27","#f57d00","#3aaf85","#FFFC00"]; // statis

// ARRAY SOURCE OVERLAY
var IMAGE_OVERLAY = 
["https://ciptaloka-preview.s3.amazonaws.com/cliparts/VKpn249xXMyr9YeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/wDRZ464BLdJgPYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/YDRVezOBZQGnpYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/zQapJqwrgjVrVYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/Ea3OnBlqw1oXJYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/ZjnDvAxGEog5oYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/xEn2JYYv9jjnvYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/Ewvyz-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/pMlJQ-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/nXPYo-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/zXY9a-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/2E5drBqwdZJ4OAzRREJD-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/Gz3jolo5YZpbXYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/nx51RDjWVKDX2YeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/Op3ZdlaxJbyGdYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/xEn2JYYoB9BVYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/bQWlEw5OjMYABYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/ZjnErJL2y2JJnYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/xEnQy3Jpbz4ZBYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/aqvrjP5VRYjAxYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/VKpXy2zoEKx2VYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/KRwpo-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/L1Qyy-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/ZVzpZ-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/LP4l5-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/K1Mla-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/3ELzv-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/mn52p-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/2Evy-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/24OvZ-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/2Bery-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/qoPO3-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/WQ5VJ-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/4XoAY-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/KK2ZJ-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/9KJVl-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/ZJngG-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/gpB5lOE2YGdrqYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/Ea3OnBlqw1oXJYeNwBaO-small.jpg","https://ciptaloka-preview.s3.amazonaws.com/cliparts/ZjnDvAxpV9jN2YeNwBaO-small.jpg"];

// ARRAY MASK
var IMAGE_MASK = ['img/Mask/mask-1.png','img/Mask/mask-2.png','img/Mask/mask-3.png','img/Mask/mask-4.png','img/Mask/mask-5.png','img/Mask/mask-6.png','img/Mask/mask-7.png','img/Mask/mask-8.png','img/Mask/mask-9.png','img/Mask/mask-10.png','img/Mask/mask-11.png','img/Mask/mask-12.png','img/Mask/mask-13.png','img/Mask/mask-14.png','img/Mask/mask-15.png','img/Mask/mask-16.png','img/Mask/mask-17.png','img/Mask/mask-18.png','img/Mask/mask-19.png','img/Mask/mask-20.png','img/Mask/mask-21.png','img/Mask/mask-22.png','img/Mask/mask-23.png','img/Mask/mask-24.png','img/Mask/mask-25.png','img/Mask/mask-26.png','img/Mask/mask-27.png','img/Mask/mask-28.png','img/Mask/mask-29.png','img/Mask/mask-30.png','img/Mask/mask-31.png','img/Mask/mask-32.png','img/Mask/mask-33.png','img/Mask/mask-34.png','img/Mask/mask-35.png','img/Mask/mask-36.png','img/Mask/mask-37.png','img/Mask/mask-38.png','img/Mask/mask-39.png','img/Mask/mask-40.png','img/Mask/mask-41.png','img/Mask/mask-42.png','img/Mask/mask-43.png','img/Mask/mask-44.png','img/Mask/mask-45.png','img/Mask/mask-46.png','img/Mask/mask-47.png','img/Mask/mask-48.png','img/Mask/mask-49.png','img/Mask/mask-50.png','img/Mask/mask-51.png','img/Mask/mask-52.png','img/Mask/mask-53.png','img/Mask/mask-54.png','img/Mask/mask-55.png','img/Mask/mask-56.png','img/Mask/mask-57.png','img/Mask/mask-58.png','img/Mask/mask-59.png','img/Mask/mask-60.png','img/Mask/mask-61.png','img/Mask/mask-62.png','img/Mask/mask-63.png','img/Mask/mask-64.png','img/Mask/mask-65.png','img/Mask/mask-66.png','img/Mask/mask-67.png','img/Mask/mask-68.png','img/Mask/mask-69.png','img/Mask/mask-70.png','img/Mask/mask-71.png','img/Mask/mask-72.png','img/Mask/mask-73.png','img/Mask/mask-74.png','img/Mask/mask-75.png','img/Mask/mask-76.png','img/Mask/mask-77.png','img/Mask/mask-78.png','img/Mask/mask-79.png','img/Mask/mask-80.png','img/Mask/mask-81.png','img/Mask/mask-82.png','img/Mask/mask-83.png','img/Mask/mask-84.png','img/Mask/mask-85.png','img/Mask/mask-86.png','img/Mask/mask-87.png','img/Mask/mask-88.png','img/Mask/mask-89.png','img/Mask/mask-90.png'];

// ARRAY CLIPART 
var IMAGE_CLIPART = ['img/Clipart/RJC-X-1.svg','img/Clipart/RJC-X-2.svg','img/Clipart/RJC-X-3.svg','img/Clipart/RJC-X-4.svg','img/Clipart/RJC-X-5.svg','img/Clipart/RJC-X-6.svg','img/Clipart/RJC-X-7.svg','img/Clipart/RJC-X-8.svg','img/Clipart/RJC-X-9.svg','img/Clipart/RJC-X-10.svg','img/Clipart/RJC-X-11.svg','img/Clipart/RJC-X-12.svg','img/Clipart/RJC-X-13.svg','img/Clipart/RJC-X-14.svg','img/Clipart/RJC-X-15.svg','img/Clipart/RJC-X-16.svg','img/Clipart/RJC-X-17.svg','img/Clipart/RJC-X-18.svg','img/Clipart/RJC-X-19.svg','img/Clipart/RJC-X-20.svg','img/Clipart/RJC-X-21.svg','img/Clipart/RJC-X-22.svg','img/Clipart/RJC-X-23.svg','img/Clipart/RJC-X-24.svg','img/Clipart/RJC-X-25.svg','img/Clipart/RJC-X-26.svg','img/Clipart/RJC-X-27.svg','img/Clipart/RJC-X-28.svg','img/Clipart/RJC-X-29.svg','img/Clipart/RJC-X-30.svg','img/Clipart/RJC-X-31.svg','img/Clipart/RJC-X-32.svg','img/Clipart/RJC-X-33.svg','img/Clipart/RJC-X-34.svg','img/Clipart/RJC-X-35.svg','img/Clipart/RJC-X-36.svg','img/Clipart/RJC-X-37.svg','img/Clipart/RJC-X-38.svg','img/Clipart/RJC-X-39.svg','img/Clipart/RJC-X-40.svg','img/Clipart/RJC-X-41.svg','img/Clipart/RJC-X-42.svg','img/Clipart/RJC-X-43.svg','img/Clipart/RJC-X-44.svg','img/Clipart/RJC-X-45.svg','img/Clipart/RJC-X-46.svg','img/Clipart/RJC-X-47.svg','img/Clipart/RJC-X-48.svg','img/Clipart/RJC-X-49.svg','img/Clipart/RJC-X-50.svg','img/Clipart/RJC-X-51.svg','img/Clipart/RJC-X-52.svg','img/Clipart/RJC-X-53.svg','img/Clipart/RJC-X-54.svg','img/Clipart/RJC-X-55.svg','img/Clipart/RJC-X-56.svg','img/Clipart/RJC-X-57.svg','img/Clipart/RJC-X-58.svg','img/Clipart/RJC-X-59.svg','img/Clipart/RJC-X-60.svg','img/Clipart/RJC-X-61.svg','img/Clipart/RJC-X-62.svg','img/Clipart/RJC-X-63.svg','img/Clipart/RJC-X-64.svg','img/Clipart/RJC-X-65.svg','img/Clipart/RJC-X-66.svg','img/Clipart/RJC-X-67.svg','img/Clipart/RJC-X-68.svg','img/Clipart/RJC-X-69.svg','img/Clipart/RJC-X-70.svg','img/Clipart/RJC-X-71.svg','img/Clipart/RJC-X-72.svg','img/Clipart/RJC-X-73.svg','img/Clipart/RJC-X-74.svg','img/Clipart/RJC-X-75.svg','img/Clipart/RJC-X-76.svg','img/Clipart/RJC-X-77.svg','img/Clipart/RJC-X-78.svg','img/Clipart/RJC-X-79.svg','img/Clipart/RJC-X-80.svg','img/Clipart/RJC-X-81.svg','img/Clipart/RJC-X-82.svg','img/Clipart/RJC-X-83.svg','img/Clipart/RJC-X-84.svg','img/Clipart/RJC-X-85.svg','img/Clipart/RJC-X-86.svg','img/Clipart/RJC-X-87.svg','img/Clipart/RJC-X-88.svg','img/Clipart/RJC-X-89.svg','img/Clipart/RJC-X-90.svg','img/Clipart/RJC-X-91.svg','img/Clipart/RJC-X-92.svg','img/Clipart/RJC-X-93.svg','img/Clipart/RJC-X-94.svg','img/Clipart/RJC-X-95.svg','img/Clipart/RJC-X-96.svg','img/Clipart/RJC-X-97.svg','img/Clipart/RJC-X-98.svg','img/Clipart/RJC-X-99.svg','img/Clipart/RJC-X-100.svg','img/Clipart/RJC-X-101.svg','img/Clipart/RJC-X-102.svg','img/Clipart/RJC-X-103.svg','img/Clipart/RJC-X-104.svg','img/Clipart/RJC-X-105.svg','img/Clipart/RJC-X-106.svg','img/Clipart/RJC-X-107.svg','img/Clipart/RJC-X-108.svg','img/Clipart/RJC-X-109.svg','img/Clipart/RJC-X-110.svg','img/Clipart/RJC-X-111.svg','img/Clipart/RJC-X-112.svg','img/Clipart/RJC-X-113.svg','img/Clipart/RJC-X-114.svg','img/Clipart/RJC-X-115.svg','img/Clipart/RJC-X-116.svg','img/Clipart/RJC-X-117.svg','img/Clipart/RJC-X-118.svg','img/Clipart/RJC-X-119.svg','img/Clipart/RJC-X-120.svg','img/Clipart/RJC-X-121.svg','img/Clipart/RJC-X-122.svg','img/Clipart/RJC-X-123.svg','img/Clipart/RJC-X-124.svg','img/Clipart/RJC-X-125.svg','img/Clipart/RJC-X-126.svg','img/Clipart/RJC-X-127.svg','img/Clipart/RJC-X-128.svg','img/Clipart/RJC-X-129.svg','img/Clipart/RJC-X-130.svg','img/Clipart/RJC-X-131.svg','img/Clipart/RJC-X-132.svg','img/Clipart/RJC-X-133.svg','img/Clipart/RJC-X-134.svg','img/Clipart/RJC-X-135.svg','img/Clipart/RJC-X-136.svg','img/Clipart/RJC-X-137.svg','img/Clipart/RJC-X-138.svg','img/Clipart/RJC-X-139.svg','img/Clipart/RJC-X-140.svg','img/Clipart/RJC-X-141.svg','img/Clipart/RJC-X-142.svg','img/Clipart/RJC-X-143.svg','img/Clipart/RJC-X-144.svg','img/Clipart/RJC-X-145.svg','img/Clipart/RJC-X-146.svg','img/Clipart/RJC-X-147.svg','img/Clipart/RJC-X-148.svg','img/Clipart/RJC-X-149.svg','img/Clipart/RJC-X-150.svg','img/Clipart/RJC-X-151.svg','img/Clipart/RJC-X-152.svg','img/Clipart/RJC-X-153.svg','img/Clipart/RJC-X-154.svg','img/Clipart/RJC-X-155.svg','img/Clipart/RJC-X-156.svg','img/Clipart/RJC-X-157.svg','img/Clipart/RJC-X-158.svg','img/Clipart/RJC-X-159.svg','img/Clipart/RJC-X-160.svg','img/Clipart/RJC-X-161.svg','img/Clipart/RJC-X-162.svg','img/Clipart/RJC-X-163.svg','img/Clipart/RJC-X-164.svg','img/Clipart/RJC-X-165.svg','img/Clipart/RJC-X-166.svg','img/Clipart/RJC-X-167.svg','img/Clipart/RJC-X-168.svg','img/Clipart/RJC-X-169.svg','img/Clipart/RJC-X-170.svg','img/Clipart/RJC-X-171.svg','img/Clipart/RJC-X-172.svg','img/Clipart/RJC-X-173.svg','img/Clipart/RJC-X-174.svg','img/Clipart/RJC-X-175.svg','img/Clipart/RJC-X-176.svg','img/Clipart/RJC-X-177.svg'];

// Router to default view
mainView.router.loadPage('main.html');

// Variabel tour
var tourSteps = [
    {
        step: 0, 
        message: 'Tekan <i class="f7-icons">arrow_left</i> untuk keluar dari menu editor rajacasing.id', 
        element: ".cancel-editor", 
        action: function ()
        {
        }
    }, 
    {
        step: 1, 
        message: 'Tekan <i class="f7-icons">bags</i> untuk melanjutkan ke proses pemesanan', 
        element: "#help", 
        action: function ()
        {
        }
    }, 
    {
        step: 2, 
        message: '<i class="f7-icons">filter</i> untuk mengganti layar background casing', 
        element: ".settings-fill", 
        action: function ()
        {
        }
    }, 
    {
        step: 3, 
        message: '<i class="f7-icons">settings</i> untuk mengganti tipe smartphone', 
        element: ".settings-fill", 
        action: function ()
        {
        }
    },
    {
        step: 4, 
        message: '<i class="f7-icons">chevron_down</i> untuk melihat detail editor', 
        element: ".settings-fill", 
        action: function ()
        {
        }
    },
    {
        step: 5, 
        message: 'menu dibawah merupakan tool utama dari editor rajacasing.id', 
        element: ".info-fill", 
        action: function ()
        {
        }
    }
];

// Tour or tutorial app
var tourguide = myApp.tourguide(tourSteps);

$$(document).on('page:init', function (e) {
    // Simpan data paging di variabel
    var page = e.detail.page;
    if (page.name === 'my-app') {
        
        // START TUTORIAL
        tourguide.showTour();
        
        // FABRIC INISIALISASI
        var canvas = document.getElementById('canvas-editor');
            context = canvas.getContext('2d');
        var default_color_text = '#333333';

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, true);
        resizeCanvas();
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerWidth + 25;
        }
        
        var canvas = new fabric.Canvas('canvas-editor',{
            preserveObjectStacking: true,
            controlsAboveOverlay: true,
            selection: false,
        });

        fabric.Object.prototype.set({
            transparentCorners: false,
            borderColor: '#bbb',
            cornerColor: '#38c',
            cornerSize: 20,
            centeredScaling : 1
        });

        var rect = new fabric.Rect({
          id: '100',
          fill: 'transparent',
          width: canvas.getWidth() - 10,
          height: canvas.getHeight(),
          left: 5,
          padding: 0,
          angle: 0,
          hoverCursor: 'default',
          selectable: false
        });
        // "add" rectangle onto canvas
        // rect.set('selectable', false);
        
        canvas.add(rect);
        
        canvas.setOverlayImage('iphone7.png', canvas.renderAll.bind(canvas), {
            top: canvas.getCenter().top,
            left: canvas.getCenter().left,
            originX: 'center',
            originY: 'center',
            scaleX : canvas.getWidth() / 500,
            scaleY : canvas.getWidth() / 500,
        });
        
        window.addEventListener('resize', resizeOverlayImage, false);

        var resizeTimer;
        function resizeOverlayImage () {
            resizeTimer = setTimeout(function() {
                resizeTimer = null;
                // Set dimensi canvas
                canvas.setDimensions({width:window.innerWidth, height:window.innerWidth + 25});
                // Set overlaynya kembali
                canvas.setOverlayImage('iphone7.png', canvas.renderAll.bind(canvas), {
                    top: canvas.getCenter().top,
                    left: canvas.getCenter().left,
                    originX: 'center',
                    originY: 'center',
                    scaleX : canvas.getWidth() / 500,
                    scaleY : canvas.getWidth() / 500,
                });  
                rect = canvas.item(0);
                rect.set('top',canvas.getCenter().top);
                rect.set('left',canvas.getCenter().left);
                rect.set('originX','center');
                rect.set('originY','center');
                rect.set('scaleX', canvas.getWidth() / 500);
                rect.set('scaleY', canvas.getHeight());
                canvas.renderAll();
            });
        }   
                                     
        
        // TOOLBAR EVENT EDIT IMAGE
        $$('#help').on('click', function() {
           // $$('.toolbar-event').addClass('show'); 
           $$('.floating-product-color').toggleClass('show'); 
        });
        // Sembuyikan jika tekan sembarang layar
        $$('canvas').on('click', function() {
            $$('.floating-product-color ').removeClass('show');
        });
        
        
        // ---------------------------
        // TOOLBAR EVENT UPLOAD FILE
            $$('.toolbar-upload').on('click', function() {
                myApp.pickerModal('.picker--upload');
            });
            $$('.btn-close-picker').on('click', function() {
                myApp.closeModal('.picker--upload');
            });
            $$('.btn-upload').on('click', function() {
               $$('.btn-process-upload').trigger('click'); 
            });
            $$('.btn-process-upload').on('change', function(e) {
                img = new Image();
                var reader = new FileReader();
                reader.onload = function (event) {
                    var imgObj = new Image();
                    imgObj.src = event.target.result;
                    imgObj.onload = function() {
                        var img = new fabric.Image(imgObj);
                        img.set({
                              angle : 0,
                              padding : 0,
                        });
                        img.scaleToWidth(canvas.getWidth()/2);
                        canvas.centerObject(img);
                        canvas.add(img);
                        canvas.setActiveObject(img);
                        canvas.renderAll();
                        myApp.closeModal('.picker--upload');
                        canvas.trigger('mouse:down', {target: img});
                    };
                };
                reader.readAsDataURL(e.target.files[0]);
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR UBAH TULISAN
            $$('.toolbar-ubah').on('click', function() {
               $$('.popup-edit-text .color-thumb').parent('label').find('input[name="color"][value="'+default_color_text+'"]').prop('checked',true);
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR CHANGE COLOR
            $$('.toolbar-color').on('click', function() {
                menuAction('.single-color');
                $$('.single-color').toggleClass('show');
                if ($$('.single-color').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika single-color close ditekan
            $$('.single-color .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika color dipilih
            $$('.single-color').on('click', '.color-thumb',function() {
               var color = $$(this).parent('label').find('input').val(); // local variabel
               default_color_text = $$(this).parent('label').find('input').val(); // set default
               selectedObject.set('fill', color);
               canvas.renderAll();
            });
            // event ketika color direset
            $$('.reset-color').on('click', function() {
               default_color_text = "#333333";
               selectedObject.set('fill','#333333');
               canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR PERBESAR
            $$('.toolbar-perbesar').on('click', function() {
                var tmpwidth  = selectedObject.scaleX;
                var tmpheight = selectedObject.scaleY;
                selectedObject.scaleX = tmpwidth + 0.1;
                selectedObject.scaleY = tmpheight + 0.1;
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR PERKECIL
            $$('.toolbar-perkecil').on('click', function() {
                var tmpwidth  = selectedObject.scaleX;
                var tmpheight = selectedObject.scaleY;
                selectedObject.scaleX = tmpwidth - 0.1;
                selectedObject.scaleY = tmpheight - 0.1;
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR CENTER
            $$('.toolbar-tengah').on('click', function() {
                selectedObject.center();
                selectedObject.setCoords();
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR FORMAT FONT
            $$('.toolbar-format').on('click', function() {
                menuAction('.format-font');
                navbarShow(); // show navbar
                $$('.format-font').toggleClass('show');
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR OUTLINE FONT
            var color_outline = '#333333';
            $$('.toolbar-outline').on('click', function() {
                menuAction('.outline-font');
                $$('.outline-font').toggleClass('show');
                
                if ($$('.outline-font').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
                
                $.each($$('.toolbar-outline input[name="color"]'), function (key, val){
                  if (val == color_outline) {
                      $$(this).prop('checked',true);
                  }
                    console.log(val);
                });
            });
            // event ketika outline close ditekan
            $$('.outline-font .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika range outline diubah
            $$('.range-outline').on('change', function() {
                var outline = $$(this).val(); // ambil nilainya
                $$('.value-outline').text(outline); // set nilainya di preview
                selectedObject.set('stroke', (color_outline != '' ? color_outline : colorText));
                selectedObject.set('strokeWidth', parseInt(outline));
                canvas.renderAll();
            });
            // event ketika color dipilih
            $$('.outline-font').on('click', '.color-thumb', function() {
                color_outline = $$(this).parent('label').find('input').val(); // local variabel
                selectedObject.set('stroke', color_outline);
                canvas.renderAll();
            });
            // event ketika outline direset
            $$('.reset-outline').on('click', function() {
                selectedObject.set('stroke', '');
                selectedObject.set('strokeWidth', '');
                canvas.renderAll();
                $$('.range-outline').val(0); // set range jadi 0
                $$('.value-outline').text(0); // set preview jadi 0
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR SHADOW FONT
            // Global variabel shadow
            var color_shadow = '#333333'; // Default color
            var shadow = '';
            var opt = 'Soft 1'; // Default bayangan
            $$('.toolbar-bayangan').on('click', function() {
                menuAction('.shadow-font');
                $$('.shadow-font').toggleClass('show');
                if ($$('.shadow-font').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika shadow close ditekan
            $$('.shadow-font .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika color dipilih
            $$('.shadow-font').on('click', '.color-thumb', function() {
                color_shadow = $$(this).parent('label').find('input').val(); // local variabel
                setShadow();
            });
            // event pemilihan shadow
            $$('.shadow-btn').on('click', function () {
                var buttons = [
                    {
                        text: 'Soft 1',
                        bold: true,
                        onClick: function(e, val) {
                            $$('.shadow-btn').text('Soft 1');
                            opt = 'Soft 1';
                            setShadow();
                        }
                    },
                    {
                        text: 'Soft 2',
                        onClick: function(e, val) {
                            $$('.shadow-btn').text('Soft 2');
                            opt = 'Soft 2';
                            setShadow();
                        }
                    },
                    {
                        text: 'Hard 1',
                        onClick: function(e, val) {
                            $$('.shadow-btn').text('Hard 1');
                            opt = 'Hard 1';
                            setShadow();
                        }
                    },
                    {
                        text: 'Hard 2',
                        onClick: function(e, val) {
                            $$('.shadow-btn').text('Hard 2');
                            opt = 'Hard 2';
                            setShadow();
                        }
                    },
                    {
                        text: 'Cancel',
                        color: 'red'
                    },
                ];
                myApp.actions(buttons);
            });
            // event ketika shadow direset
            $$('.reset-shadow').on('click', function() {
               shadow = '';
               selectedObject.setShadow(shadow);
               canvas.renderAll();
            });
            // Function convert HEX to RGB
            function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }
            // Function penentu option shadow
            function optShadow(opt) {
                if (opt == 'Soft 1') {
                    return {blur: '20', offsetX: 5, offsetY: 5};
                } else if (opt == 'Soft 2') {
                    return {blur: '20', offsetX: 10, offsetY: 10};
                } else if (opt == 'Hard 1') {
                    return {blur: '0', offsetX: 5, offsetY: 5};
                } else if (opt == 'Hard 2') {
                    return {blur: '0', offsetX: 10, offsetY: 10};
                } else {
                    return {blur: '20', offsetX: 5, offsetY: 5};
                }
            }
            // Function set Shadow
            function setShadow() {
                var r = hexToRgb(color_shadow).r;
                var g = hexToRgb(color_shadow).g;
                var b = hexToRgb(color_shadow).b;
                shadow = {
                    color: color_shadow,
                    blur: optShadow(opt).blur,    
                    offsetX: optShadow(opt).offsetX,
                    offsetY: optShadow(opt).offsetY,
                    opacity: 0.6,
                    fillShadow: true, 
                    strokeShadow: true 
                }
                selectedObject.setShadow(shadow);
                canvas.renderAll();
            }
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR BENTUK FONT
            $$('.toolbar-bentuk').on('click', function() {
                menuAction('.bentuk-font');
                $$('.bentuk-font').toggleClass('show');
                if ($$('.bentuk-font').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika bentuk close ditekan
            $$('.bentuk-font .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event pemilihan shadow
            $$('.bentuk-btn').on('click', function () {
                var buttons = [
                    {
                        text: 'Bentuk 1',
                        bold: true,
                        onClick: function(e, val) {
                            $$('.bentuk-btn').text('Soft 1');
                        }
                    },
                    {
                        text: 'Bentuk 2',
                        onClick: function(e, val) {
                            $$('.bentuk-btn').text('Soft 2');
                        }
                    },
                    {
                        text: 'Bentuk 3',
                        onClick: function(e, val) {
                            $$('.bentuk-btn').text('Hard 1');
                        }
                    },
                    {
                        text: 'Bentuk 4',
                        onClick: function(e, val) {
                            $$('.bentuk-btn').text('Hard 2');
                        }
                    },
                    {
                        text: 'Cancel',
                        color: 'red'
                    },
                ];
                myApp.actions(buttons);
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR OVERLAY
            $$('.toolbar-overlay').on('click', function() {
                menuAction('.overlay');
                $$('.overlay').toggleClass('show');
                if ($$('.overlay').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika overlay close ditekan
            $$('.overlay .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika image thumb overlay ditekan
            $$(document).on('click', '.overlay-preview', function(){
               overlay($$(this).attr('src'));
            });
            $$('.reset-overlay').on('click', function() {
               selectedObject.set('fill', '#333333'); 
               canvas.renderAll();
            });
        // ---------------------------
        
        // ---------------------------
        // TOOLBAR SPASI
            $$('.toolbar-spasi').on('click', function() {
                menuAction('.spasi-font');
                navbarShow(); // show navbar
                $$('.spasi-font').toggleClass('show');
            });
            // event ketika range spasi diubah
            $$('.range-spasi').on('change', function() {
                var spasi = $$(this).val(); // ambil nilainya
                $$('.value-spasi').text(spasi); // set nilainya di preview
                selectedObject.set('charSpacing', parseInt(spasi) + 100);
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR FILTER
            $$('.toolbar-filter').on('click', function() {
                menuAction('.filter');
                $$('.filter').toggleClass('show');
                if ($$('.filter').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika filter close ditekan
            $$('.filter .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika image thumb filter ditekan
            $$(document).on('click', '.filter-preview', function(){
                var filter = $$(this).data('filter');
                if (filter == 'original') {
                    selectedObject.filters = [];
                }else if (filter == 'invert') {
                    selectedObject.filters.push(new fabric.Image.filters.Invert());
                }else if (filter == 'grayscale') {
                    selectedObject.filters.push(new fabric.Image.filters.Grayscale());
                }else if (filter == 'sepia') {
                    selectedObject.filters.push(new fabric.Image.filters.Sepia());
                }else if (filter == 'brownie') {
                    selectedObject.filters.push(new fabric.Image.filters.Brownie());
                }else if (filter == 'vintage') {
                    selectedObject.filters.push(new fabric.Image.filters.Vintage());
                }else if (filter == 'kodochrome') {
                    selectedObject.filters.push(new fabric.Image.filters.Kodachrome());
                }else if (filter == 'technicolor') {
                    selectedObject.filters.push(new fabric.Image.filters.Technicolor());
                }else if (filter == 'polaroid') {
                    selectedObject.filters.push(new fabric.Image.filters.Polaroid());
                }else if (filter == 'bw') {
                    selectedObject.filters.push(new fabric.Image.filters.BlackWhite());
                }else if (filter == 'sharpen') {
                    selectedObject.filters.push(new fabric.Image.filters.Convolute({
                        matrix: [  0, -1,  0,
                        -1,  5, -1,
                         0, -1,  0 ]
                    }));
                }else if (filter == 'emboss') {
                    selectedObject.filters.push(new fabric.Image.filters.Convolute({
                        matrix: [ 1,   1,  1,
                        1, 0.7, -1,
                       -1,  -1, -1 ]
                    }));
                }
                // Apply filters
                selectedObject.applyFilters();
                canvas.renderAll();
                $$('.toolbar-mask').hide();
            });
            // event ketika filter direset
            $$('.reset-filter').on('click', function() {
               selectedObject.filters = [];
               // Apply filters
               selectedObject.applyFilters();
               canvas.renderAll();
               $$('.toolbar-mask').show();
            });
        // ---------------------------
        
        // ---------------------------
        // TOOLBAR MASK
            $$('.toolbar-mask').on('click', function() {
                menuAction('.mask');
                $$('.mask').toggleClass('show');
                if ($$('.mask').hasClass('show')) {
                    navbarHidden(); // hidden navbar
                } else { 
                    navbarShow(); // hidden navbar
                }
            });
            // event ketika mask close ditekan
            $$('.mask .close-third-toolbar').on('click', function() {
                hideAllMenuAction(); // tutup semua toolbar popup
                navbarShow(); // show navbar
            });
            // event ketika image thumb mask ditekan
            $$(document).on('click', '.mask-preview', function(){
               // overlay($$(this).attr('src'));
               var type = selectedObject.get('type');
               var image = '';
               if (type == 'group') {
                   image = selectedObject._objects[1]._element.src;
               } else {
                   image = selectedObject._element.src;
               }
               canvas.remove(selectedObject);
               var mask  = $$(this).attr('src');
               fabric.Image.fromURL(mask, function(img){
                  img1 = img;
                  fabric.Image.fromURL(image, function(img){
                    img1.scaleToWidth(canvas.getWidth() / 2);
                    img2 = img;
                    img2.width = img1.width;
                    img2.height = img1.height;
                    img2.scaleToWidth(canvas.getWidth()/2);
                    img2.globalCompositeOperation = 'source-in';
                      var group = new fabric.Group([img1, img2],{});
                      canvas.add(group);
                      group.center();
                      group.setCoords();
                      canvas.setActiveObject(group);
                      canvas.renderAll();
                      canvas.trigger('mouse:down', {target: group});
                      group._objects[1].width = group._objects[0].width/2;
                      canvas.renderAll();
                      $$('.toolbar-filter').hide(); 
                  });
                });
            });
            $$('.reset-mask').on('click', function(){
                var image = '';
                var type = selectedObject.get('type');
                if (type == 'group') {
                    image = selectedObject._objects[1]._element.src;
                    canvas.remove(selectedObject);
                    fabric.Image.fromURL(image, function(img) {
                        img.scaleToWidth(canvas.getWidth()/2);
                        img.angle  = 0;
                        img.padding = 0;
                        canvas.add(img);
                        img.center();
                        img.setCoords();
                        canvas.setActiveObject(img);
                        canvas.renderAll();
                        canvas.trigger('mouse:down', {target: img});
                        $$('.toolbar-filter').show(); 
                    });
               }
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR SUSUNAN
            $$('.toolbar-susunan').on('click', function() {
                menuAction('.susunan');
                navbarShow(); // show navbar
                $$('.susunan').toggleClass('show');
            });
            // event ketika susun atas
            $$('.susun-atas').on('click', function() {
                canvas.bringForward(selectedObject);
            });
            // event ketika susun bawah
            $$('.susun-bawah').on('click', function() {
                canvas.sendBackwards(selectedObject);
                canvas.sendBackwards(rect);
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR FLIP
            $$('.toolbar-flip').on('click', function() {
                menuAction('.flip');
                navbarShow(); // show navbar
                $$('.flip').toggleClass('show');
            });
            // event ketika flip vertical
            $$('.flip-vertical').on('click', function() {
                var bool = selectedObject.get('flipX') == true ? false : true;
                selectedObject.set('flipX', bool);
                canvas.renderAll();
            });
            // event ketika flip horizontal
            $$('.flip-horizontal').on('click', function() {
                var bool = selectedObject.get('flipY') == true ? false : true;
                selectedObject.set('flipY', bool);
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR POSISI
            $$('.toolbar-posisi').on('click', function() {
                menuAction('.posisi');
                navbarShow(); // show navbar
                $$('.posisi').toggleClass('show');
            });
            // event ketika posisi atas
            $$('.posisi-atas').on('click', function() {
                var offset = selectedObject.top;
                selectedObject.top = offset - 3;
                canvas.renderAll();
            });
            // event ketika posisi bawah
            $$('.posisi-bawah').on('click', function() {
                var offset = selectedObject.top;
                selectedObject.top = offset + 3;
                canvas.renderAll();
            });
            // event ketika posisi kiri
            $$('.posisi-kiri').on('click', function() {
                var offset = selectedObject.left;
                selectedObject.left = offset - 3;
                canvas.renderAll();
            });
            // event ketika posisi kanan
            $$('.posisi-kanan').on('click', function() {
                var offset = selectedObject.left;
                selectedObject.left = offset + 3;
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR PUTAR
            $$('.toolbar-putar').on('click', function() {
                menuAction('.putar');
                navbarShow(); // show navbar
                $$('.putar').toggleClass('show');
            });
            // event ketika range spasi diubah
            $$('.range-putar').on('change', function() {
                var putar = $$(this).val(); // ambil nilainya
                $$('.value-putar').text(putar); // set nilainya di preview
                selectedObject.set('angle', parseInt(putar));
                canvas.renderAll();
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR HAPUS
            $$('.toolbar-hapus').on('click', function() {
                myApp.confirm('Benar ingin dihapus kak?', 'Hapus', function () {
                    canvas.remove(selectedObject);
                    canvas.renderAll();
                });
            });
        // ---------------------------
        
        
        // ---------------------------
        // TOOLBAR CART
            $$('.save-cart').on('click', function() {
//                canvas.overlayImage = null;
//                canvas.renderAll.bind(canvas);
                download(canvas.toSVG(),'save.png');
            });
        function download(url,name){
            // make the link. set the href and download. emulate dom click
              $('<a>').attr({href:url,download:name})[0].click();
            }
        // ---------------------------
        
        
        // ---------------------------
        // INFO TOP
            var boolsh = 0;
            $$('.show-hide-center-menu').on('click', function() {
                $$('.center-menu').toggleClass('show');
                if (boolsh == 0) {
                    $(this).text('chevron_up');
                    boolsh = 1;
                }else {
                    $(this).text('chevron_down');
                    boolsh = 0;
                }
            });
        // ---------------------------
        
        
        // ---------------------------
        // TUTORIAL PLAY
            $$('.help').on('click', function() {
                tourguide.showTour();
            });
        // ---------------------------
        
        
        // ---------------------------
        // EVENT CHANGE COLOR BACKGROUND
        $$(document).on('click', '.floating-product-color .color-thumb', function() {
           canvas.item(0).setColor($$(this).parent('label').find('input').val());
           canvas.renderAll();
        });
        // ---------------------------
        
        
        // ========= FONT =========== //
        // ---------------------------
        // EVENT ADD TEKS
        var iTextID = 1;
        var colorText = '#333333';
        var _fontFamily = 'helvetica';
        $$('.popup-input-text').on('click', '.close-popup', function(event) {
            var iText = $$('.popup-input-text input[type="text"]').val();
            if (iText != '') {
                var text = new fabric.Text(iText, {
                    id: iTextID,
                    fontFamily: _fontFamily,
                    fontSize: 100,
                    fill: colorText ,
                    scaleX: 0.5,
                    scaleY: 0.5,
                    fontWeight: '',
                    originX: 'left',
                    hasRotatingPoint: true,
                    centerTransform: true,
                });
                // Sensitif selektif
                // text.perPixelTargetFind = true;
                // text.targetFindTolerance = 1;
                canvas.add(text);
                // Set center teks
                text.center();
                text.setCoords();
                canvas.setActiveObject(text);
                canvas.renderAll();
                canvas.trigger('mouse:down', {target: text});
                iTextID++;
            }
        });
        // ---------------------------
        
        // ---------------------------
        // EVENT EDIT TEKS
        $$('.popup-edit-text').on('click', '.close-popup', function() {
            var iText = $$('.popup-edit-text input[type="text"]').val();
            selectedObject.set('text',iText);
            selectedObject.set('fontFamily',_fontFamily);
            canvas.renderAll();
        });
        
        // ---------------------------
        // OPEN POPUP ADD TEKS
        $$('.toolbar-teks').on('click', function() {
            $('.popup-input-text input[type="text"]').val('');
        });
        // ---------------------------
        
        
        // ---------------------------
        // EVENT ADD CLIPART
        $$(document).on('click', '.clipart-preview', function() {
           var src = $$(this).attr('src');
            new fabric.loadSVGFromURL(src, function(objects, options) {
                var svg = fabric.util.groupSVGElements(objects, options);
                svg.scaleX = 0.3;
                svg.scaleY = 0.3;
                svg.perPixelTargetFind = true;
                svg.targetFindTolerance = 1;
                canvas.add(svg);
                canvas.calcOffset();
                svg.center();
                svg.setCoords();
                canvas.setActiveObject(svg);
                canvas.renderAll();
                canvas.trigger('mouse:down', {target: svg});
            });
            myApp.closeModal('.popup-clipart');
        });
        // ---------------------------
        
        
        // ---------------------------
        // EVENT CHANGE COLOR FONT
        // Add Event
        $$(document).on('click', '.popup-input-text .color-thumb', function() {
           colorText = $$(this).parent('label').find('input').val();
        });
        // Edit Event
        $$(document).on('click', '.popup-edit-text .color-thumb', function() {
           default_color_text = $$(this).parent('label').find('input').val();
           selectedObject.setColor($$(this).parent('label').find('input').val());
           canvas.renderAll();
        });
        // ---------------------------
        
        
        // ---------------------------
        // EVENT SELECTED OBJECT
        var selectedObject;
        canvas.on('mouse:down', function(event) {
            selectedObject = event.target;
            // console.log(selectedObject);
            if(event.target.get('type') == 'image'){
                // Show toolbar-event
                $$('.toolbar-event').addClass('show');
                $$('.btn--custom').show();
                $$('.toolbar-bentuk').hide();
                $$('.toolbar-bayangan').hide();
                $$('.toolbar-outline').hide(); 
                $$('.toolbar-ubah').hide(); 
                $$('.toolbar-color').hide(); 
                $$('.toolbar-format').hide(); 
                $$('.toolbar-spasi').hide(); 
                $$('.toolbar-overlay').hide(); 
            }else if(event.target.get('type') == 'path-group' || event.target.get('type') == 'path' ){
                // Show toolbar-event
                $$('.toolbar-event').addClass('show');
                $$('.btn--custom').show();
            }else if(event.target.get('type') == 'group'){
                // Show toolbar-event
                $$('.toolbar-event').addClass('show');
                $$('.btn--custom').show();
                $$('.toolbar-bentuk').hide();
                $$('.toolbar-bayangan').hide();
                $$('.toolbar-outline').hide(); 
                $$('.toolbar-ubah').hide(); 
                $$('.toolbar-color').hide(); 
                $$('.toolbar-format').hide(); 
                $$('.toolbar-spasi').hide(); 
                $$('.toolbar-overlay').hide(); 
                $$('.toolbar-filter').hide();
                if (selectedObject.hasOwnProperty("svgUid")) {
                    $$('.toolbar-mask').hide();
                }
            }else if(event.target.get('type') == 'text'){
                // Set disable default toolbar
                // Show toolbar-event
                $$('.toolbar-event').addClass('show');
                $$('.btn--custom').show();
                $$('.toolbar-bentuk').hide();
                $$('.toolbar-filter').hide();
                $$('.toolbar-mask').hide();
                
                // Set default font
                _fontFamily = selectedObject.get('fontFamily');
                
                // Set default when click selectedObject
                // Color
                var _color = selectedObject.get('fill');
                $$('.color-font .color-thumb').parent('label').find('input[name="color"][value="'+default_color_text+'"]').prop('checked',true);
                // -----------> End Color
                
                // OUtline
                $$('.range-outline').val(selectedObject.get('strokeWidth'));
                $$('.value-outline').text(selectedObject.get('strokeWidth'));
                color_outline = selectedObject.get('stroke') != null ? selectedObject.get('stroke') : "#333333";
                $$('.outline-font .color-thumb').parent('label').find('input[name="color"][value="'+default_color_text+'"]').prop('checked',true);
                // -----------> End Outline
                
                // Bayangan
                color_shadow = selectedObject.get('shadow') != null ? selectedObject.get('shadow').color : "#333333";
                $$('.shadow-font .color-thumb').parent('label').find('input[name="color"][value="'+color_shadow+'"]').prop('checked',true);
                var _opt = selectedObject.get('shadow') != null ? selectedObject.get('shadow') : "";
                if (_opt != '') {
                    if (_opt.blur == 20 && _opt.offsetX == 5) {
                        $$('.shadow-btn').text('Soft 1');
                    } else if (_opt.blur == 20 && _opt.offsetX == 10) {
                        $$('.shadow-btn').text('Soft 2');
                    } else if (_opt.blur == 0 && _opt.offsetX == 5) {
                        $$('.shadow-btn').text('Hard 1');
                    } else if (_opt.blur == 0 && _opt.offsetX == 10) {
                        $$('.shadow-btn').text('Hard 2');
                    }
                } else {
                    $$('.shadow-btn').text('Pilih');
                }
                // -----------> End Bayangan
                
                // Char Spasing
                var spasi = selectedObject.get('charSpacing') > 0 ? parseInt(selectedObject.get('charSpacing')) - 100 : 0;
                $$('.range-spasi').val(spasi);
                $$('.value-spasi').text(spasi);
                // -----------> End Char Spasing
                
                // Putar
                var putar = selectedObject.get('angle') > 0 ? parseInt(selectedObject.get('angle')): 0;
                $$('.range-putar').val(putar);
                $$('.value-putar').text(putar);
                // -----------> End Putar
                
                // Set textbox di edit teks
                $$('.input-text input[type="text"]').val(event.target.text);
                // get color text
                default_color_text = event.target.get('fill');
            }
        });
        
        
        // ----------------------------
        // EVENT KETIKA UNSELECT OBJECT
        canvas.on('selection:cleared', function(event){
            $$('.toolbar-event').removeClass('show'); 
            hideAllMenuAction();
            navbarShow();
        });
        // ---------------------------- End unselect object
        
        
        // HIDE FLOATING COLOR IF SHOW
        $$('.toolbar-bottom:not(.floating-product-color)').on('click', function() {
            $$('.floating-product-color ').removeClass('show');
        });
        
        
        // INISTIALISASI GLOBAL UNTUK COLOR
        $$.each(CSS_COLOR_NAMES, function(i, v) {
            $$('.color-list').append(''+
            '<label class="label-radio radio-color no-ripple">'+
                '<input type="radio" name="color" value="'+v+'">'+
                '<div class="item-inner color-thumb" style="background-color:'+v+';">'+
                '</div>'+
            '</label>');
        });
        
        // INISTIALISASI GLOBAL UNTUK OVERLAY
        $$.each(IMAGE_OVERLAY, function(i, v) {
            $$('.overlay-horizontal').append(''+
            '<div class="col-20">'+
                '<label class="label-radio custom-preview-radio">'+
                    '<input type="radio" name="overlay_id" checked>'+
                    '<div class="item-inner">'+
                        '<img src="'+v+'" data-original="'+v+'" class="lazy-load overlay-preview" style="display: inline;">'+
                    '</div>'+
                '</label>'+
               '</div>');
        });
        
        
        // Loading
        // Loading flag
        var loadingClipart = false;
        // Last loaded index
        var lastIndexClipart = 0;
        // Max items to load
        var maxItemsClipart = 168;
        // Append items per load
        var itemsPerLoadClipart = 8;
        var html = '';
        for (var i = 0; i <= 15 + itemsPerLoadClipart; i++) {
          html += '<div class="col-25 lipart-container"><img src="'+IMAGE_CLIPART[i]+'" class="col-100 clipart-preview">Clipart '+(i+1)+'</div>';
        }

        // Append new items
        $$('.clipart-grid').append(html);
        
        // update lastIndex
        lastIndexClipart = 23;
        // Attach 'infinite' event handler
        $$('.infinite-scroll.infinite-clipart').on('infinite', function () {

          // Exit, if loading in progress
          if (loadingClipart) return;

          // Set loading flag
          loadingClipart= true;

          // Emulate 1s loading
          setTimeout(function () {
            // Reset loading flag
            loadingClipart = false;

            if (lastIndexClipart >= maxItemsClipart) {
              // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
              myApp.detachInfiniteScroll($$('.infinite-scroll.infinite-clipart'));
              // Remove preloader
              $$('.infinite-scroll-preloader').remove();
              return;
            }

            // Generate new items HTML
            var html = '';
            for (var i = lastIndexClipart + 1; i <= lastIndexClipart + itemsPerLoadClipart; i++) {
              html += '<div class="col-25 tablet-15 clipart-container" data-clipart-id="135"><img src="'+IMAGE_CLIPART[i]+'" class="col-100 clipart-preview">Clipart '+(i+1)+'</div>';
            }

            // Append new items
            $$('.clipart-grid').append(html);

            // Update last loaded index
            lastIndexClipart = lastIndexClipart + itemsPerLoadClipart;
          }, 1000);
        }); 
        
        // Loading
        // Loading flag
        var loadingMask = false;
        // Last loaded index
        var lastIndexMask = 0;
        // Max items to load
        var maxItemsMask = 85;
        // Append items per load
        var itemsPerLoadMask = 5;
        // Mask
        var html = '';
        for (var i = 0; i <= 19 + itemsPerLoadMask; i++) {
          html += '<div class="col-20">'+
                '<label class="label-radio custom-preview-radio">'+
                    '<input type="radio" name="overlay_id" checked>'+
                    '<div class="item-inner">'+
                        '<img src="'+IMAGE_MASK[i]+'" data-original="'+IMAGE_MASK[i]+'" class="lazy-load mask-preview" style="display: inline;">'+
                    '</div>'+
                '</label>'+
               '</div>';
        }

        // Append new items
        $$('.mask-horizontal').append(html);
        
        // Update last loaded index
        lastIndexMask = 24;
        // Attach 'infinite' event handler
        $$('.infinite-scroll.infinite-mask').on('infinite', function () {

          // Exit, if loading in progress
          if (loadingMask) return;

          // Set loading flag
          loadingMask = true;

          // Emulate 1s loading
          setTimeout(function () {
            // Reset loading flag
            loadingMask = false;

            if (lastIndexMask >= maxItemsMask) {
              // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
              myApp.detachInfiniteScroll($$('.infinite-scroll'));
              // Remove preloader
              $$('.infinite-scroll-preloader').remove();
              return;
            }

            // Generate new items HTML
            var html = '';
            for (var i = lastIndexMask + 1; i <= lastIndexMask + itemsPerLoadMask; i++) {
              html += '<div class="col-20">'+
                '<label class="label-radio custom-preview-radio">'+
                    '<input type="radio" name="overlay_id" checked>'+
                    '<div class="item-inner">'+
                        '<img src="'+IMAGE_MASK[i]+'" data-original="'+IMAGE_MASK[i]+'" class="lazy-load mask-preview" style="display: inline;">'+
                    '</div>'+
                '</label>'+
               '</div>';
            }

            // Append new items
            $$('.mask-horizontal').append(html);

            // Update last loaded index
            lastIndexMask = lastIndexMask + itemsPerLoadMask;
          }, 1000);
        }); 
        
        // Function Overlay
        function overlay (src) {
            fabric.util.loadImage(src, function(img) {
                selectedObject.set('fill', new fabric.Pattern({
                    source: img,
                    repeat: 'repeat'
                }));
                canvas.renderAll();
            });
        }
        
        // Function Mask
        function mask (src) {
            fabric.util.loadImage(src, function(img) {
                selectedObject.set('fill', new fabric.Pattern({
                    source: img,
                    repeat: 'no-repeat'
                }));
                canvas.renderAll();
            });
        }
        
        // Font
        $('.plugin-font').fontselect().change(function(){
          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');
          _fontFamily = font;
          // log font name
          canvas.renderAll();
        });
        // -----------> End Font
    }
});


// function dinamis untuk menutup keseluruhan popup toolbar selain dari 
// nama kelas yang dituju
// @param (STRING) nama kelas yang tidak ingin dihilangkan
function menuAction(nameClass = '') {
    $$('.third-toolbar:not('+nameClass+')').removeClass('show');
}

// function untuk menutup semua toolbar yang muncul
function hideAllMenuAction() {
    $$('.third-toolbar').removeClass('show');
    $$('.floating-product-color ').removeClass('show');
}

// funciton untuk menutup navbar atas
function navbarHidden() {
    $$('.main--navbar').addClass('navbar-hidden');
    $$('.main--content').addClass('align-top');
}

// funciton untuk menampilkan navbar atas
function navbarShow() {
    $$('.main--navbar').removeClass('navbar-hidden');
    $$('.main--content').removeClass('align-top');
}