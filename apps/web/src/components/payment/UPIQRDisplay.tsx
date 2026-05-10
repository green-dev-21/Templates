import React from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';

interface UPIQRDisplayProps {
  upiId: string;
  qrUrl?: string;
  amount?: number;
}

const UPIQRDisplay = ({ upiId, qrUrl, amount }: UPIQRDisplayProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center space-y-4">
      <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
        {qrUrl ? (
          <img src={qrUrl} alt="UPI QR Code" className="w-full h-full object-contain" />
        ) : (
          <div className="text-gray-400 text-sm px-4 text-center">QR Code Placeholder</div>
        )}
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">UPI ID</p>
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
          <code className="font-bold text-gray-800">{upiId}</code>
          <button className="text-primary hover:text-primary/80">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
          <CheckCircle2 className="w-4 h-4" />
          <span>Scan and pay securely</span>
        </div>
      </div>
    </div>
  );
};

export default UPIQRDisplay;
