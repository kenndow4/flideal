import { Providers } from "@/src/providers/providers";
import { PropsWithChildren } from "react";
import { Plane } from "lucide-react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <main className="flex items-center  min-h-screen">
        <div className="w-full ">
          
          {/* Icono */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
              <Plane className="w-6 h-6 text-neutral-800" />
            </div>
          </div>

          {/* Formulario */}
          {children}

        </div>
      </main>
    </Providers>
  );
}
