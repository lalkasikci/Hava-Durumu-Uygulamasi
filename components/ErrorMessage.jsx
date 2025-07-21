import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

export function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
      <div className="text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-[#454A73] font-semibold text-lg mb-2">Bir Hata Oluştu</h3>
        <p className="text-[#454A73] font-regular mb-4">{message}</p>
        {onRetry && (
          <Button 
            onClick={onRetry}
            variant="outline"
            className="gap-2 border-[#454A73] text-[#454A73] hover:bg-[#454A73] hover:text-white font-semibold"
          >
            <RefreshCw className="w-4 h-4" />
            Tekrar Dene
          </Button>
        )}
      </div>
    </div>
  );
}