import { QRCodeSVG } from "qrcode.react";

interface IReactQRCode {
  value: string;
  size?: number;
}

const ReactQRCode: React.FC<IReactQRCode> = (props) => {
  const { value, size } = props;
  return (
    <>
      <QRCodeSVG value={value} size={size} />
    </>
  );
};

export default ReactQRCode;
