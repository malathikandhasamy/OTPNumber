var $num = document.querySelector('.form-control .form-form1:nth-child(1)');
var $output = document.querySelector('.form-control .output');
console.log($output);
var $button = document.querySelector('.buttonclick button');
var $err_msg = document.querySelector('.form-control .error-msg');
$button.addEventListener('click', otpNumber);

function otpNumber() {
    var s = $num.value;
    var result = "";
    var num = s.split("");
    if (num.length == 10) {
        if (num[0] == 9 || num[0] == 8 || num[0] == 7) {
            $err_msg.innerHTML = '';
            for (var j = 0; j < 4; j++) {
                var max = 0;
                var maxkey;
                var min = 9;
                var minkey;
                var temp;
                for (var i = 0; i < num.length; i++) {
                    if (num[i] >= max) {
                        max = num[i];
                        maxkey = i;
                    }
                }
                num.splice(maxkey, 1);
                for (var i = 0; i < num.length; i++) {
                    if (num[i] <= min) {
                        min = num[i];
                        minkey = i;
                    }
                }
                num.splice(minkey, 1);
                temp = max - min;
                result = result.concat(temp.toString());
            }
         $output.value=result;
//            console.log(result.toString());
        } else {
            $err_msg.innerHTML = "please enter valuable mobile number";
        }
    } else {
        $err_msg.innerHTML = "please enter your 10 digit mobile number";

    }
}