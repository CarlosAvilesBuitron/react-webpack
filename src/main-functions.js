/* Main Cookie Class */
import cookie from 'react-cookie';

/* Main Url Parameter Setting Function */

let urlParam = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}





