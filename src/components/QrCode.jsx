import { QRCodeCanvas } from "qrcode.react"

const QrCode = () => {


  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={'https://brazilian-beef-suppliers.vercel.app/pdf'}
      size={300}
      bgColor={"white"}
      fgColor={"#075473"}
      level={"H"}
      includeMargin={true}
    />
  );


  return (
 
       <div className="qrcode__container">
        <div>{qrcode}</div>
      </div>
   
  );
};

export default QrCode;