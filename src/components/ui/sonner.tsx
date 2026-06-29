import { Toaster as SonnerToaster } from "sonner";
import { CircleCheck, CircleX, Info } from "lucide-react";

function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      icons={{
        success: <CircleCheck className="w-5 h-5 text-green-600" />,
        error: <CircleX className="w-5 h-5 text-red-600" />,
        info: <Info className="w-5 h-5 text-blue-600" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group rounded-lg border shadow-lg p-4 flex items-center gap-3",
          title: "text-sm font-semibold",
          description: "text-xs",
          success: "border-green-200 bg-green-50 text-green-900",
          error: "border-red-200 bg-red-50 text-red-900",
          info: "border-blue-200 bg-blue-50 text-blue-900",
        },
      }}
    />
  );
}

export { Toaster };
