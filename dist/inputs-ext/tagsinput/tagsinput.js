/**
jQuery.tagsinput.js input, based on [jQuery Tags Input](https://github.com/xoxco/jQuery-Tags-Input).   



@class tagsinput
@extends text
@since 1.5.0
@final
@example
<a href="#" id="mytags" data-type="tagsinput" data-pk="1" data-url="/post" data-title="Input country"></a>
<script>
$(function(){
    $('#mytags').editable({
        value: 'tag1,tag2,tag3',
        tagsinput: {           
            width: 'auto',
            height: 'auto'            
        }
    });
});
</script>
**/
(function ($) {
    "use strict";
    
    var Constructor = function (options) {
        this.init('tagsinput', options, Constructor.defaults);
    };

    $.fn.editableutils.inherit(Constructor, $.fn.editabletypes.text);

    $.extend(Constructor.prototype, {
        render: function() {
            this.renderClear();
            this.setClass();
            this.setAttr('placeholder');
            this.$input.tagsInput(this.options.tagsinput);                   
            

            // copy `input-sm | input-lg` classes to placeholder input
            if($.fn.editableform.engine === 'bs3') {
                if(this.$input.hasClass('input-sm')) {
                    this.$input.siblings('input.tt-hint').addClass('input-sm');
                }
                if(this.$input.hasClass('input-lg')) {
                    this.$input.siblings('input.tt-hint').addClass('input-lg');
                }
            }
        },

        value2html: function (value, element) {

            if (value) {
                //var arr = value.split(',');
                //var buttons = "";

                //for (i = 0; i < arr.length; i++) {
                //    buttons += "<button class='btn btn-xs btn-info'>" + arr[i] + "</button>";
                //}

                $(element).html(value);
            }

            

        },
        
        html2value: function (html) {
            return html;
        },

        value2input: function (value) {
            this.$input.tagsInput().importTags(value);
            console.log('value2input: ' + value);
        }
    });      

    Constructor.defaults = $.extend({}, $.fn.editabletypes.list.defaults, {
        /**
        @property tpl 
        @default <input type="text">
        **/         
        tpl:'<input type="text">',
        /**
        Configuration of tagsinput itself. 
        [Full list of options](https://github.com/xoxco/jQuery-Tags-Input).
        
        @property tagsinput 
        @type object
        @default null
        **/
        tagsinput: {width: 'auto', height: 'auto'},
        /**
        Whether to show `clear` button 
        
        @property clear 
        @type boolean
        @default true        
        **/
        clear: false
    });

    $.fn.editabletypes.tagsinput = Constructor;      
    
}(window.jQuery));