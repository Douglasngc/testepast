import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { EmpresasIcon } from "./icons/EmpresasIcon";
import { CampIcon } from "./icons/CampIcon";
import { AtendIcon } from "./icons/AtendIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { ClienteIcon } from "./icons/ClienteIcon";
import { TicketsIcon } from "./icons/TicketsIcon";
import { QuaIcon } from "./icons/QuaIcon";
import { ChaIcon } from "./icons/ChaIcon";
import { RelatIcon } from "./icons/RelatIcon";


export const data = [
  {
    section: "Section1",
    content: [
      {
        
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/dashboard/Dash",
      },
      {
        title: "Atendimento",
        icon: <AtendIcon />,
        link: "/atendimento/Atendimento",
      },
      {
        title: "Empresas",
        icon: <EmpresasIcon />,
        link: "/Empresas/Empresas",
      },
      {
        title: "Clientes",
        icon: <ClienteIcon />,
        link: "/Clientes/Cientes",
      },
      {
        title: "Tickets",
        icon: <TicketsIcon />,
        link: "/tickts/Tickets",
      },
      {
        title: "Campanhas", 
        icon: <CampIcon />,
        link: "/company/Campanhas",
      },
      {
        title: "Quadros",
        icon: <QuaIcon />,
        link: "/quadros/Quadros",
      },
      {
        title: "Chat interno",
        icon: <ChaIcon />,
        link: "/chat/Chat",
      },
      {
        title: "Configurações",
        icon: <SettingsIcon />,
        link: "/config/Config",
      },
      {
        title: "Relatórios",
        icon: <RelatIcon />,
        link: "/relatório/Relatório",
      },
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "/documentation/documentation",
      },
    ],
  },


];
