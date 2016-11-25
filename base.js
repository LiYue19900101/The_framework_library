
'use strict';
function getSize(){

                var oHtml=document.documentElement;
                var viewWidth=oHtml.clientWidth;

                if(viewWidth<320){
                    oHtml.style.fontSize='20px';
                }else if(viewWidth>640){
                    oHtml.style.fontSize='40px';
                }else{
                    oHtml.style.fontSize=viewWidth/16+'px';
                }

            }

            getSize();
            

            window.onresize=function(){

                getSize();

            }