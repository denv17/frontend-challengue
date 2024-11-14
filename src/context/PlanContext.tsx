import { createContext, useContext, useState, ReactNode } from "react";
import { User, Plan } from "@/types/types";
import { PlanContextType } from "@/types/types";

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{
    plan: Plan;
    finalPrice: number;
  } | null>(null);
  const [documentType, setDocumentType] = useState<string | null>(null);
  const [documentNumber, setDocumentNumber] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);

  return (
    <PlanContext.Provider
      value={{
        user,
        setUser,
        selectedPlan,
        setSelectedPlan,
        documentType,
        setDocumentType,
        documentNumber,
        setDocumentNumber,
        phone,
        setPhone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlanContext must be used within a PlanProvider");
  }
  return context;
};
