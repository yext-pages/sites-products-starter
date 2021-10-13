import './global.css';
import 'https://www.virtusa.com/etc.clientlibs/virtusa/clientlibs/virtusa-customclientlib.min.css';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));